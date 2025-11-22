/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_preventFetch() {

/******************************************************************************/

function preventFetch(...args) {
    preventFetchFn(false, ...args);
}

function preventFetchFn(
    trusted = false,
    propsToMatch = '',
    responseBody = '',
    responseType = ''
) {
    const safe = safeSelf();
    const setTimeout = self.setTimeout;
    const scriptletName = `${trusted ? 'trusted-' : ''}prevent-fetch`;
    const logPrefix = safe.makeLogPrefix(
        scriptletName,
        propsToMatch,
        responseBody,
        responseType
    );
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 4);
    const needles = [];
    for ( const condition of safe.String_split.call(propsToMatch, /\s+/) ) {
        if ( condition === '' ) { continue; }
        const pos = condition.indexOf(':');
        let key, value;
        if ( pos !== -1 ) {
            key = condition.slice(0, pos);
            value = condition.slice(pos + 1);
        } else {
            key = 'url';
            value = condition;
        }
        needles.push({ key, pattern: safe.initPattern(value, { canNegate: true }) });
    }
    const validResponseProps = {
        ok: [ false, true ],
        statusText: [ '', 'Not Found' ],
        type: [ 'basic', 'cors', 'default', 'error', 'opaque' ],
    };
    const responseProps = {
        statusText: { value: 'OK' },
    };
    const responseHeaders = {};
    if ( /^\{.*\}$/.test(responseType) ) {
        try {
            Object.entries(JSON.parse(responseType)).forEach(([ p, v ]) => {
                if ( p === 'headers' && trusted ) {
                    Object.assign(responseHeaders, v);
                    return;
                }
                if ( validResponseProps[p] === undefined ) { return; }
                if ( validResponseProps[p].includes(v) === false ) { return; }
                responseProps[p] = { value: v };
            });
        }
        catch { }
    } else if ( responseType !== '' ) {
        if ( validResponseProps.type.includes(responseType) ) {
            responseProps.type = { value: responseType };
        }
    }
    proxyApplyFn('fetch', function fetch(context) {
        const { callArgs } = context;
        const details = callArgs[0] instanceof self.Request
            ? callArgs[0]
            : Object.assign({ url: callArgs[0] }, callArgs[1]);
        let proceed = true;
        try {
            const props = new Map();
            for ( const prop in details ) {
                let v = details[prop];
                if ( typeof v !== 'string' ) {
                    try { v = safe.JSON_stringify(v); }
                    catch { }
                }
                if ( typeof v !== 'string' ) { continue; }
                props.set(prop, v);
            }
            if ( safe.logLevel > 1 || propsToMatch === '' && responseBody === '' ) {
                const out = Array.from(props).map(a => `${a[0]}:${a[1]}`);
                safe.uboLog(logPrefix, `Called: ${out.join('\n')}`);
            }
            if ( propsToMatch === '' && responseBody === '' ) {
                return context.reflect();
            }
            proceed = needles.length === 0;
            for ( const { key, pattern } of needles ) {
                if (
                    pattern.expect && props.has(key) === false ||
                    safe.testPattern(pattern, props.get(key)) === false
                ) {
                    proceed = true;
                    break;
                }
            }
        } catch {
        }
        if ( proceed ) {
            return context.reflect();
        }
        return Promise.resolve(generateContentFn(trusted, responseBody)).then(text => {
            safe.uboLog(logPrefix, `Prevented with response "${text}"`);
            const headers = Object.assign({}, responseHeaders);
            if ( headers['content-length'] === undefined ) {
                headers['content-length'] = text.length;
            }
            const response = new Response(text, { headers });
            const props = Object.assign(
                { url: { value: details.url } },
                responseProps
            );
            safe.Object_defineProperties(response, props);
            if ( extraArgs.throttle ) {
                return new Promise(resolve => {
                    setTimeout(( ) => { resolve(response); }, extraArgs.throttle);
                });
            }
            return response;
        });
    });
}

function generateContentFn(trusted, directive) {
    const safe = safeSelf();
    const randomize = len => {
        const chunks = [];
        let textSize = 0;
        do {
            const s = safe.Math_random().toString(36).slice(2);
            chunks.push(s);
            textSize += s.length;
        }
        while ( textSize < len );
        return chunks.join(' ').slice(0, len);
    };
    if ( directive === 'true' ) {
        return randomize(10);
    }
    if ( directive === 'emptyObj' ) {
        return '{}';
    }
    if ( directive === 'emptyArr' ) {
        return '[]';
    }
    if ( directive === 'emptyStr' ) {
        return '';
    }
    if ( directive.startsWith('length:') ) {
        const match = /^length:(\d+)(?:-(\d+))?$/.exec(directive);
        if ( match === null ) { return ''; }
        const min = parseInt(match[1], 10);
        const extent = safe.Math_max(parseInt(match[2], 10) || 0, min) - min;
        const len = safe.Math_min(min + extent * safe.Math_random(), 500000);
        return randomize(len | 0);
    }
    if ( directive.startsWith('war:') ) {
        if ( scriptletGlobals.warOrigin === undefined ) { return ''; }
        return new Promise(resolve => {
            const warOrigin = scriptletGlobals.warOrigin;
            const warName = directive.slice(4);
            const fullpath = [ warOrigin, '/', warName ];
            const warSecret = scriptletGlobals.warSecret;
            if ( warSecret !== undefined ) {
                fullpath.push('?secret=', warSecret);
            }
            const warXHR = new safe.XMLHttpRequest();
            warXHR.responseType = 'text';
            warXHR.onloadend = ev => {
                resolve(ev.target.responseText || '');
            };
            warXHR.open('GET', fullpath.join(''));
            warXHR.send();
        }).catch(( ) => '');
    }
    if ( trusted ) {
        return directive;
    }
    return '';
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
        proxyApplyFn.isCtor = new Map();
    }
    if ( proxyApplyFn.isCtor.has(target) === false ) {
        proxyApplyFn.isCtor.set(target, fn.prototype?.constructor === fn);
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( proxyApplyFn.isCtor.get(target) ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["-load.com/script/","length:101"],["url:https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-3497863494706299 method:HEAD mode:no-cors","","","throttle","121"],["g.doubleclick.net","length:100000"],["favicon","length:252"],["summerday","length:10","{\"type\":\"cors\"}"],["v.fwmrm.net/ad/g/","war:noop-vmap1.xml"],["googlesyndication"],["marmalade"],["url:ipapi.co"],["doubleclick"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["method:HEAD"],["ads"],["googlesyndication","method:HEAD"],["doubleclick","length:10","{\"type\":\"cors\"}"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["bmcdn6"],["doubleclick","","{\"type\": \"opaque\"}"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["adsby"],["/veepteero|tag\\.min\\.js/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["/doubleclick|googlesyndication/"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["/gaid=","war:noop-vast2.xml"],["adblock.js"],["popunder"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads/banner"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["/ads|imasdk/"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["wtg-ads"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com"],["vlitag"],["adsbygoogle","length:11000"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["/cloudfront|thaudray\\.com/"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["/adoto|googlesyndication/"],["ad-delivery"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["dai_iframe"],["ima3_dai"],["method:GET"],["/ads|googletagmanager/"],["/adsbygoogle|doubleclick/"],["url:doubleclick.net","war:googletagservices_gpt.js"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["adsbygoogle","war:googlesyndication_adsbygoogle.js"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["mode:no-cors"],["/googlesyndication|googima\\.js/"],["fwmrm.net"],["/ads|google/","length:10","{\"type\": \"cors\"}"],["/googlesyndication|googletagservices/"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"],["googlesyndication","length:40000-60000"],["googlesyndication","method:HEAD mode:no-cors"],["/rekaa"],["="],["widgets.outbrain.com"],["mode:cors"],["imasdk.googleapis.com"],["method:/head/i"],["/partners/home"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["url:/api/statsig/log_event method:POST"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["logs.netflix.com"]];
const hostnamesMap = new Map([["dogdrip.net",[0,41]],["infinityfree.com",0],["smsonline.cloud",0],["welt.de",0],["pvpoke-re.com",1],["global.novelpia.com",[2,3]],["omuzaani.me",4],["cbsnews.com>>",5],["los40.com",6],["haaretz.com",6],["faucetcrypto.com",6],["tea-coffee.net",6],["spatsify.com",6],["newedutopics.com",6],["getviralreach.in",6],["edukaroo.com",6],["funkeypagali.com",6],["careersides.com",6],["nayisahara.com",6],["wikifilmia.com",6],["infinityskull.com",6],["viewmyknowledge.com",6],["iisfvirtual.in",6],["starxinvestor.com",6],["jkssbalerts.com",6],["m.jobinmeghalaya.in",6],["mynewsmedia.co",6],["overgal.com",6],["howtoconcepts.com",6],["ikramlar.online",6],["tpi.li",6],["oii.la",6],["choiceappstore.xyz",6],["djpunjab2.in",6],["djqunjab.in",6],["foodxor.com",6],["geniussolutions.co",6],["mealcold.com",6],["mixrootmods.com",6],["fartechy.com",6],["investcrust.com",6],["bantenexis.com",6],["litonmods.com",6],["universitiesonline.xyz",6],["worldmak.com",6],["updown.fun",6],["ghscanner.com",6],["sat.technology",6],["minorpatch.com",6],["wenxuecity.com",6],["disheye.com",6],["homeairquality.org",[6,33]],["techtrim.tech",6],["arhplyrics.in",6],["askpaccosi.com",6],["quizack.com",6],["apkandroidhub.in",6],["studyis.xyz",6],["prepostseo.com",6],["dulichkhanhhoa.net",6],["noithatmyphu.vn",6],["iptvjournal.com",6],["inbbotlist.com",6],["getintoway.com",6],["crdroid.net",6],["beelink.pro",6],["hax.co.id",6],["woiden.id",6],["theusaposts.com",6],["hackr.io",6],["rendimentibtp.it",6],["sportshub.to",6],["sportnews.to",6],["esopress.com",6],["paketmu.com",6],["watchx.top",6],["bitcosite.com",6],["bitzite.com",6],["coinsrev.com",6],["globlenews.in",6],["programmingeeksclub.com",6],["archivebate.com",6],["doctoraux.com",6],["educationbluesky.com",6],["hotkitchenbag.com",6],["maths.media",6],["maths.news",6],["mathsspot.com",6],["mathsstudio.com",6],["mathstutor.life",6],["now.gg",6],["now.us",6],["nowgg.lol",6],["selfstudybrain.com",6],["skibiditoilet.yourmom.eu.org",6],["thewebsitesbridge.com",6],["universityequality.com",6],["virtualstudybrain.com",6],["websitesball.com",6],["websitesbridge.com",6],["xn--31byd1i.net",6],["unitystr.com",6],["moto.it",6],["wellness4live.com",6],["forplayx.ink",6],["moviesapi.club",6],["automoto.it",6],["olarila.com",6],["techedubyte.com",6],["snapwordz.com",6],["toolxox.com",6],["go2share.net",6],["animefire.plus",6],["freewsad.com",6],["cimanow.cc",[6,80]],["freex2line.onlinex",6],["yt-downloaderz.com",6],["hostmath.com",6],["fplstatistics.co.uk",6],["fivemdev.org",6],["winlator.com",6],["sabornutritivo.com",6],["metrolagu.cam",6],["megane.com.pl",6],["civitai.com",6],["civitai.green",6],["imagetranslator.io",6],["visnalize.com",6],["tekken8combo.kagewebsite.com",6],["custommapposter.com",6],["scenexe2.io",6],["ncaa.com",6],["gurusiana.id",6],["dichvureviewmap.com",6],["technofino.in",6],["vinstartheme.com",6],["downev.com",6],["vectorx.top",6],["zippyshare.day",6],["modescanlator.net",6],["livexscores.com",6],["btv.bg",6],["btvsport.bg",6],["btvnovinite.bg",6],["101soundboards.com",6],["androidpolice.com",6],["babygaga.com",6],["backyardboss.net",6],["carbuzz.com",6],["cbr.com",6],["collider.com",6],["dualshockers.com",6],["footballfancast.com",6],["footballleagueworld.co.uk",6],["gamerant.com",6],["givemesport.com",6],["hardcoregamer.com",6],["hotcars.com",6],["howtogeek.com",6],["makeuseof.com",6],["moms.com",6],["movieweb.com",6],["pocket-lint.com",6],["pocketnow.com",6],["polygon.com",6],["screenrant.com",6],["simpleflying.com",6],["thegamer.com",6],["therichest.com",6],["thesportster.com",6],["thethings.com",6],["thetravel.com",6],["topspeed.com",6],["xda-developers.com",6],["leakshaven.com",6],["dfbplay.tv",6],["sheepesports.com",6],["ytapi.cc",6],["evaki.fun",6],["bypass.link",6],["tmail.sys64738.at",6],["laser-pics.com",6],["fsicomics.com",6],["darts-scoring.com",6],["videq.cloud",6],["play.starsites.fun",6],["vitalitygames.com",6],["dailyboulder.com",6],["djamix.net",6],["pimylifeup.com",7],["seazon.fr",8],["independent.co.uk",9],["wunderground.com",9],["lared.cl",9],["ctrlv.*",9],["scrolller.com",9],["journaldemontreal.com",9],["tvanouvelles.ca",9],["vods.tv",9],["atresplayer.com",9],["assettoworld.com",9],["news.bg",[9,18,77]],["vtmgo.be",9],["zerioncc.pl",9],["tradingview.com",9],["estudyme.com",9],["jobfound.org",9],["abs-cbn.com",9],["sussytoons.*",9],["moovitapp.com",9],["servustv.com",9],["missavtv.com",9],["flixbaba.com",9],["formatlibrary.com",9],["business-standard.com",9],["windowsonarm.org",9],["html5.gamedistribution.com",10],["premio.io",11],["flygbussarna.se",12],["allmusic.com",13],["wowescape.com",13],["leechpremium.link",13],["camcam.cc",13],["nohat.cc",13],["hindinews360.in",13],["weshare.is",13],["cyberlynews.com",13],["djremixganna.com",13],["hypicmodapk.org",13],["keedabankingnews.com",13],["rokni.xyz",13],["technicalline.store",13],["quizrent.com",13],["uploadhub.*",13],["isi7.net",13],["okiemrolnika.pl",13],["pandadevelopment.net",13],["decrypt.day",13],["anakteknik.co.id",13],["javball.com",13],["visalist.io",13],["animeshqip.org",13],["moviesshub.*",13],["zeenews.india.com",13],["gadgetbond.com",13],["updateroj24.com",13],["remotejobzone.online",13],["cosmicapp.co",13],["hentaicovid.org",13],["sexwebvideo.com",13],["gofile.download",13],["discover-sharm.com",13],["newstopics.in",13],["weights.com",13],["edumailfree.com",13],["timesofindia.indiatimes.com",[14,127]],["skidrowreloaded.com",15],["zone-telechargement.*",15],["topsporter.net",15],["player.glomex.com",16],["htmlgames.com",17],["mac2sell.net",18],["gamebrew.org",18],["game3rb.com",18],["sixsave.com",18],["asiaon.top",18],["asiaontop.com",18],["bowfile.com",[18,53]],["dealsfinders.blog",18],["iphonechecker.herokuapp.com",18],["coloringpage.eu",18],["juegosdetiempolibre.org",18],["karaokegratis.com.ar",18],["mammaebambini.it",18],["riazor.org",18],["rinconpsicologia.com",18],["sempredirebanzai.it",18],["vectogravic.com",18],["androidacy.com",18],["lifestyle.bg",[18,77]],["topsport.bg",[18,77]],["webcafe.bg",[18,77]],["mediamarkt.be",18],["barstoolsports.com",18],["investing.com",19],["mylivewallpapers.com",19],["softfully.com",19],["reminimod.co",19],["highkeyfinance.com",19],["amanguides.com",19],["adcrypto.net",19],["admediaflex.com",19],["aduzz.com",19],["bitcrypto.info",19],["cdrab.com",19],["datacheap.io",19],["hbz.us",19],["savego.org",19],["owsafe.com",19],["sportweb.info",19],["apkupload.in",19],["ezeviral.com",19],["pngreal.com",19],["ytpng.net",19],["travel.vebma.com",19],["cloud.majalahhewan.com",19],["crm.cekresi.me",19],["ai.tempatwisata.pro",19],["cinedesi.in",19],["thevouz.in",19],["tejtime24.com",19],["techishant.in",19],["mtcremix.com",19],["advicefunda.com",19],["bestloanoffer.net",19],["computerpedia.in",19],["techconnection.in",19],["wrzesnia.info.pl",19],["key-hub.eu",19],["discoveryplus.in",19],["calculator-online.net",19],["dotabuff.com",19],["forum.cstalking.tv",19],["mcqmall.com",19],["witcherhour.com",19],["clamor.pl",19],["ozulscans.com",19],["noor-book.com",19],["pobre.*",19],["compromath.com",19],["sumoweb.to",19],["haloursynow.pl",19],["satkurier.pl",19],["mtg-print.com",19],["heavy.com",19],["creators.nafezly.com",19],["downloadfilm.website",19],["bombuj.*",19],["pornovka.cz",19],["fplstatistics.com",19],["cheater.ninja",19],["govtportal.org",19],["vide-greniers.org",19],["muyinteresante.es",20],["3dzip.org",21],["s0ft4pc.com",21],["ani-stream.com",22],["uflash.tv",23],["oko.sh",24],["duden.de",25],["joyn.de",26],["joyn.at",26],["joyn.ch",26],["tf1.fr",27],["exe.app",28],["eio.io",28],["ufacw.com",28],["figurehunter.net",28],["luscious.net",29],["mdn.lol",30],["bitcotasks.com",30],["starkroboticsfrc.com",31],["sinonimos.de",31],["antonimos.de",31],["quesignifi.ca",31],["tiktokrealtime.com",31],["tiktokcounter.net",31],["tpayr.xyz",31],["poqzn.xyz",31],["ashrfd.xyz",31],["rezsx.xyz",31],["tryzt.xyz",31],["ashrff.xyz",31],["rezst.xyz",31],["dawenet.com",31],["erzar.xyz",31],["waezm.xyz",31],["waezg.xyz",31],["blackwoodacademy.org",31],["cryptednews.space",31],["vivuq.com",31],["swgop.com",31],["vbnmll.com",31],["telcoinfo.online",31],["dshytb.com",31],["quins.us",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["readbitcoin.org",32],["wiour.com",32],["senda.pl",33],["dsmusic.in",34],["www.apkmoddone.com",35],["tutorialsaya.com",13],["exactpay.online",36],["filesupload.in",37],["hindustantimes.com",37],["indiainfo4u.in",38],["canalobra.com",39],["tulink.org",39],["13tv.co.il",39],["arabshentai.com",40],["ariversegl.com",40],["asia2tv.com",40],["boyfuck.me",40],["cehennemstream.xyz",40],["cgtips.org",40],["cybermania.ws",40],["dvdgayporn.com",40],["downloadcursos.gratis",40],["dx-tv.com",40],["filmyzones.com",40],["freereadnovel.online",40],["idlixvip.*",40],["javboys.tv",40],["magicgameworld.com",40],["mangacrab.org",40],["medicalstudyzone.com",40],["netfuck.net",40],["onezoo.net",40],["readingpage.fun",40],["shemalegape.net",40],["tojimangas.com",40],["tuktukcinma.com",40],["vercanalesdominicanos.com",40],["superpsx.com",40],["hunterscomics.com",40],["player.pl",42],["ryxy.online",43],["camarchive.tv",44],["linkpoi.me",45],["platform.adex.network",46],["watch.plex.tv",47],["10.com.au",48],["simplebits.io",49],["tvnz.co.nz",50],["timesnowhindi.com",51],["timesnowmarathi.com",51],["timesofindia.com",51],["elahmad.com",52],["1cloudfile.com",54],["weszlo.com",55],["wyze.com",56],["mmorpg.org.pl",57],["firmwarex.net",58],["dongknows.com",59],["forsal.pl",60],["photopea.com",61],["freeshib.biz",62],["theappstore.org",63],["deutschekanale.com",64],["baltimoreravens.com",64],["nfl.com",64],["seahawks.com",64],["soranews24.com",65],["ipalibrary.me",66],["ipacrack.com",67],["bravedown.com",68],["ranoz.gg",68],["smartkhabrinews.com",69],["freepik-downloader.com",70],["freepic-downloader.com",70],["envato-downloader.com",70],["ortograf.pl",71],["mixrootmod.com",72],["explorecams.com",73],["fapdrop.com",74],["nick.com",75],["southpark.*",[75,76]],["southpark.cc.com",75],["southparkstudios.*",[75,76]],["money.bg",77],["realmadryt.pl",77],["ruidrive.com",77],["myesports.gg",77],["getthit.com",78],["sshkit.com",79],["fastssh.com",79],["howdy.id",79],["freex2line.online",80],["intro-hd.net",81],["souq-design.com",81],["gaypornhot.com",81],["sonixgvn.net",82],["everand.com",83],["loot-link.com",84],["lootdest.*",84],["rajssoid.online",84],["moutogami.com",84],["india.marathinewz.in",84],["workink.click",85],["work.ink",[86,87]],["sport.es",87],["tubtic.com",87],["kio.ac",87],["bigbuttshub2.top",[87,114]],["bigbuttshubvideos.com",[87,114]],["online-smss.com",[87,114]],["manhuarmmtl.com",87],["play.nova.bg",88],["u.co.uk",89],["uktvplay.co.uk",89],["uktvplay.uktv.co.uk",89],["jpopsingles.eu",90],["adslink.pw",91],["fmovies0.cc",91],["hentaihaven.xxx",92],["imasdk.googleapis.com",93],["botrix.live",94],["gunauc.net",95],["lemino.docomo.ne.jp",96],["kfc.com",97],["crazygames.com",98],["freeshot.live",99],["hancinema.net",100],["javfc2.xyz",101],["textreverse.com",102],["flaticon.com",103],["shahid.mbc.net",[104,129]],["tab-maker.com",105],["faceittracker.net",106],["nikke.win",107],["stream.offidocs.com",108],["dogsexporn.net",109],["yomucomics.com",109],["zone.msn.com",110],["www.msn.com",111],["letemsvetemapplem.eu",112],["flixrave.me",113],["olamovies.*",115],["www.cc.com",116],["hmanga.world",117],["temp-mail.lol",117],["forge.plebmasters.de",118],["search.brave.com",119],["coursera.org",120],["nytimes.com",121],["blog.cloudflare.com",122],["www.cloudflare.com",122],["grok.com",123],["notion.so",124],["olympics.com",125],["ceramic.or.kr",126],["pandadoc.com",128],["smallpdf.com",130],["chatgpt.com",[131,132]],["netflix.com",133]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = true;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { preventFetch(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
