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
    if ( /^\{.*\}$/.test(responseType) ) {
        try {
            Object.entries(JSON.parse(responseType)).forEach(([ p, v ]) => {
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
            const response = new Response(text, {
                headers: {
                    'Content-Length': text.length,
                }
            });
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
const argsList = [["/\\/\\/ansuksar\\.com\\/[0-9a-zA-Z]{3,26}\\/\\d{4,6}\\b/","length:125746"],["-load.com/script/","length:101"],["method:HEAD"],["method:/head/i"],["g.doubleclick.net","length:100000"],["favicon","length:252"],["v.fwmrm.net/ad/g/","war:noop-vmap1.xml"],["googlesyndication"],["marmalade"],["url:ipapi.co"],["doubleclick"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["ads"],["googlesyndication","method:HEAD"],["doubleclick","length:10","{\"type\":\"cors\"}"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["bmcdn6"],["doubleclick","","{\"type\": \"opaque\"}"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["adsby"],["/veepteero|tag\\.min\\.js/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["/doubleclick|googlesyndication/"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["/gaid=","war:noop-vast2.xml"],["adblock.js"],["popunder"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["/ads|imasdk/"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["wtg-ads"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com"],["vlitag"],["adsbygoogle","length:11000"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["/cloudfront|thaudray\\.com/"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["imasdk.googleapis.com"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["dai_iframe"],["method:GET"],["/ads|googletagmanager/"],["/adsbygoogle|doubleclick/"],["url:doubleclick.net","war:googletagservices_gpt.js"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["adsbygoogle","war:googlesyndication_adsbygoogle.js"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["mode:no-cors"],["/googlesyndication|googima\\.js/"],["fwmrm.net"],["/ads|google/","length:10","{\"type\": \"cors\"}"],["/googlesyndication|googletagservices/"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"],["googlesyndication","length:40000-60000"],["googlesyndication","method:HEAD mode:no-cors"],["/rekaa"],["="],["widgets.outbrain.com"],["mode:cors"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["url:/api/statsig/log_event method:POST"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["logs.netflix.com"],["/api/v1/log"]];
const hostnamesMap = new Map([["japscan.*",0],["dogdrip.net",[1,41]],["infinityfree.com",1],["smsonline.cloud",1],["cdn.bg-gledai.*",2],["cdn.gledaitv.*",[2,3]],["mac2sell.net",2],["gamebrew.org",2],["game3rb.com",2],["sixsave.com",2],["asiaon.top",2],["asiaontop.com",2],["bowfile.com",[2,53]],["dealsfinders.blog",2],["iphonechecker.herokuapp.com",2],["coloringpage.eu",2],["juegosdetiempolibre.org",2],["karaokegratis.com.ar",2],["mammaebambini.it",2],["riazor.org",2],["rinconpsicologia.com",2],["sempredirebanzai.it",2],["vectogravic.com",2],["androidacy.com",2],["lifestyle.bg",[2,77]],["news.bg",[2,10,77]],["topsport.bg",[2,77]],["webcafe.bg",[2,77]],["mediamarkt.be",2],["barstoolsports.com",2],["hmanga.world",3],["global.novelpia.com",[4,5]],["cbsnews.com>>",6],["los40.com",7],["faucetcrypto.com",7],["tea-coffee.net",7],["spatsify.com",7],["newedutopics.com",7],["getviralreach.in",7],["edukaroo.com",7],["funkeypagali.com",7],["careersides.com",7],["nayisahara.com",7],["wikifilmia.com",7],["infinityskull.com",7],["viewmyknowledge.com",7],["iisfvirtual.in",7],["starxinvestor.com",7],["jkssbalerts.com",7],["m.jobinmeghalaya.in",7],["mynewsmedia.co",7],["overgal.com",7],["howtoconcepts.com",7],["ikramlar.online",7],["tpi.li",7],["oii.la",7],["choiceappstore.xyz",7],["djpunjab2.in",7],["djqunjab.in",7],["foodxor.com",7],["geniussolutions.co",7],["mealcold.com",7],["mixrootmods.com",7],["fartechy.com",7],["investcrust.com",7],["bantenexis.com",7],["litonmods.com",7],["universitiesonline.xyz",7],["worldmak.com",7],["updown.fun",7],["ghscanner.com",7],["sat.technology",7],["minorpatch.com",7],["wenxuecity.com",7],["disheye.com",7],["homeairquality.org",[7,33]],["techtrim.tech",7],["arhplyrics.in",7],["askpaccosi.com",7],["quizack.com",7],["apkandroidhub.in",7],["studyis.xyz",7],["prepostseo.com",7],["dulichkhanhhoa.net",7],["noithatmyphu.vn",7],["iptvjournal.com",7],["inbbotlist.com",7],["getintoway.com",7],["crdroid.net",7],["beelink.pro",7],["hax.co.id",7],["woiden.id",7],["theusaposts.com",7],["hackr.io",7],["rendimentibtp.it",7],["sportshub.to",7],["sportnews.to",7],["esopress.com",7],["paketmu.com",7],["watchx.top",7],["bitcosite.com",7],["bitzite.com",7],["coinsrev.com",7],["globlenews.in",7],["programmingeeksclub.com",7],["archivebate.com",7],["doctoraux.com",7],["educationbluesky.com",7],["hotkitchenbag.com",7],["maths.media",7],["maths.news",7],["mathsspot.com",7],["mathsstudio.com",7],["mathstutor.life",7],["now.gg",7],["now.us",7],["nowgg.lol",7],["selfstudybrain.com",7],["skibiditoilet.yourmom.eu.org",7],["thewebsitesbridge.com",7],["universityequality.com",7],["virtualstudybrain.com",7],["websitesball.com",7],["websitesbridge.com",7],["xn--31byd1i.net",7],["unitystr.com",7],["moto.it",7],["wellness4live.com",7],["forplayx.ink",7],["moviesapi.club",7],["automoto.it",7],["olarila.com",7],["techedubyte.com",7],["snapwordz.com",7],["toolxox.com",7],["go2share.net",7],["animefire.plus",7],["freewsad.com",7],["cimanow.cc",[7,80]],["freex2line.onlinex",7],["yt-downloaderz.com",7],["hostmath.com",7],["fplstatistics.co.uk",7],["fivemdev.org",7],["winlator.com",7],["sabornutritivo.com",7],["metrolagu.cam",7],["megane.com.pl",7],["civitai.com",7],["civitai.green",7],["imagetranslator.io",7],["visnalize.com",7],["tekken8combo.kagewebsite.com",7],["custommapposter.com",7],["scenexe2.io",7],["ncaa.com",7],["gurusiana.id",7],["dichvureviewmap.com",7],["technofino.in",7],["vinstartheme.com",7],["downev.com",7],["vectorx.top",7],["zippyshare.day",7],["modescanlator.net",7],["livexscores.com",7],["btv.bg",7],["btvsport.bg",7],["btvnovinite.bg",7],["101soundboards.com",7],["androidpolice.com",7],["babygaga.com",7],["backyardboss.net",7],["carbuzz.com",7],["cbr.com",7],["collider.com",7],["dualshockers.com",7],["footballfancast.com",7],["footballleagueworld.co.uk",7],["gamerant.com",7],["givemesport.com",7],["hardcoregamer.com",7],["hotcars.com",7],["howtogeek.com",7],["makeuseof.com",7],["moms.com",7],["movieweb.com",7],["pocket-lint.com",7],["pocketnow.com",7],["polygon.com",7],["screenrant.com",7],["simpleflying.com",7],["thegamer.com",7],["therichest.com",7],["thesportster.com",7],["thethings.com",7],["thetravel.com",7],["topspeed.com",7],["xda-developers.com",7],["leakshaven.com",7],["dfbplay.tv",7],["sheepesports.com",7],["ytapi.cc",7],["evaki.fun",7],["bypass.link",7],["tmail.sys64738.at",7],["laser-pics.com",7],["fsicomics.com",7],["darts-scoring.com",7],["videq.cloud",7],["play.starsites.fun",7],["vitalitygames.com",7],["dailyboulder.com",7],["pimylifeup.com",8],["seazon.fr",9],["independent.co.uk",10],["wunderground.com",10],["13tv.co.il",10],["lared.cl",10],["ctrlv.*",10],["scrolller.com",10],["journaldemontreal.com",10],["tvanouvelles.ca",10],["vods.tv",10],["atresplayer.com",10],["assettoworld.com",10],["vtmgo.be",10],["zerioncc.pl",10],["tradingview.com",10],["estudyme.com",10],["jobfound.org",10],["abs-cbn.com",10],["sussytoons.*",10],["moovitapp.com",10],["servustv.com",10],["missavtv.com",10],["flixbaba.com",10],["formatlibrary.com",10],["business-standard.com",10],["windowsonarm.org",10],["html5.gamedistribution.com",11],["premio.io",12],["flygbussarna.se",13],["allmusic.com",14],["wowescape.com",14],["leechpremium.link",14],["camcam.cc",14],["nohat.cc",14],["hindinews360.in",14],["weshare.is",14],["cyberlynews.com",14],["djremixganna.com",14],["hypicmodapk.org",14],["keedabankingnews.com",14],["rokni.xyz",14],["technicalline.store",14],["quizrent.com",14],["isi7.net",14],["okiemrolnika.pl",14],["pandadevelopment.net",14],["decrypt.day",14],["anakteknik.co.id",14],["javball.com",14],["visalist.io",14],["moviesshub.*",14],["zeenews.india.com",14],["gadgetbond.com",14],["updateroj24.com",14],["remotejobzone.online",14],["cosmicapp.co",14],["hentaicovid.org",14],["sexwebvideo.com",14],["gofile.download",14],["discover-sharm.com",14],["newstopics.in",14],["weights.com",14],["timesofindia.indiatimes.com",[15,124]],["skidrowreloaded.com",16],["zone-telechargement.*",16],["topsporter.net",16],["player.glomex.com",17],["htmlgames.com",18],["investing.com",19],["mylivewallpapers.com",19],["softfully.com",19],["reminimod.co",19],["highkeyfinance.com",19],["amanguides.com",19],["adcrypto.net",19],["admediaflex.com",19],["aduzz.com",19],["bitcrypto.info",19],["cdrab.com",19],["datacheap.io",19],["hbz.us",19],["savego.org",19],["owsafe.com",19],["sportweb.info",19],["apkupload.in",19],["ezeviral.com",19],["pngreal.com",19],["ytpng.net",19],["travel.vebma.com",19],["cloud.majalahhewan.com",19],["crm.cekresi.me",19],["ai.tempatwisata.pro",19],["cinedesi.in",19],["thevouz.in",19],["tejtime24.com",19],["techishant.in",19],["mtcremix.com",19],["advicefunda.com",19],["bestloanoffer.net",19],["computerpedia.in",19],["techconnection.in",19],["wrzesnia.info.pl",19],["key-hub.eu",19],["discoveryplus.in",19],["calculator-online.net",19],["dotabuff.com",19],["forum.cstalking.tv",19],["mcqmall.com",19],["witcherhour.com",19],["clamor.pl",19],["ozulscans.com",19],["noor-book.com",19],["pobre.*",19],["compromath.com",19],["sumoweb.to",19],["haloursynow.pl",19],["satkurier.pl",19],["mtg-print.com",19],["heavy.com",19],["creators.nafezly.com",19],["downloadfilm.website",19],["bombuj.*",19],["pornovka.cz",19],["fplstatistics.com",19],["cheater.ninja",19],["govtportal.org",19],["vide-greniers.org",19],["muyinteresante.es",20],["3dzip.org",21],["s0ft4pc.com",21],["ani-stream.com",22],["uflash.tv",23],["oko.sh",24],["duden.de",25],["joyn.de",26],["joyn.at",26],["joyn.ch",26],["tf1.fr",27],["exe.app",28],["eio.io",28],["ufacw.com",28],["figurehunter.net",28],["luscious.net",29],["mdn.lol",30],["bitcotasks.com",30],["starkroboticsfrc.com",31],["sinonimos.de",31],["antonimos.de",31],["quesignifi.ca",31],["tiktokrealtime.com",31],["tiktokcounter.net",31],["tpayr.xyz",31],["poqzn.xyz",31],["ashrfd.xyz",31],["rezsx.xyz",31],["tryzt.xyz",31],["ashrff.xyz",31],["rezst.xyz",31],["dawenet.com",31],["erzar.xyz",31],["waezm.xyz",31],["waezg.xyz",31],["blackwoodacademy.org",31],["cryptednews.space",31],["vivuq.com",31],["swgop.com",31],["vbnmll.com",31],["telcoinfo.online",31],["dshytb.com",31],["quins.us",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["readbitcoin.org",32],["wiour.com",32],["senda.pl",33],["dsmusic.in",34],["www.apkmoddone.com",35],["tutorialsaya.com",14],["exactpay.online",36],["filesupload.in",37],["hindustantimes.com",37],["indiainfo4u.in",38],["canalobra.com",39],["tulink.org",39],["arabshentai.com",40],["ariversegl.com",40],["asia2tv.com",40],["boyfuck.me",40],["cehennemstream.xyz",40],["cgtips.org",40],["dvdgayporn.com",40],["downloadcursos.gratis",40],["dx-tv.com",40],["filmyzones.com",40],["freereadnovel.online",40],["idlixvip.*",40],["javboys.tv",40],["magicgameworld.com",40],["mangacrab.org",40],["medicalstudyzone.com",40],["netfuck.net",40],["onezoo.net",40],["readingpage.fun",40],["shemalegape.net",40],["tojimangas.com",40],["tuktukcinma.com",40],["vercanalesdominicanos.com",40],["superpsx.com",40],["hunterscomics.com",40],["player.pl",42],["ryxy.online",43],["camarchive.tv",44],["cybermania.ws",45],["fapdrop.com",45],["linkpoi.me",46],["platform.adex.network",47],["watch.plex.tv",48],["simplebits.io",49],["tvnz.co.nz",50],["timesnowhindi.com",51],["timesnowmarathi.com",51],["timesofindia.com",51],["elahmad.com",52],["1cloudfile.com",54],["weszlo.com",55],["wyze.com",56],["mmorpg.org.pl",57],["firmwarex.net",58],["dongknows.com",59],["forsal.pl",60],["photopea.com",61],["freeshib.biz",62],["theappstore.org",63],["deutschekanale.com",64],["baltimoreravens.com",64],["nfl.com",64],["seahawks.com",64],["soranews24.com",65],["ipalibrary.me",66],["ipacrack.com",67],["bravedown.com",68],["smartkhabrinews.com",69],["freepik-downloader.com",70],["freepic-downloader.com",70],["envato-downloader.com",70],["ortograf.pl",71],["bg-gledai.*",72],["gledaitv.*",72],["www.cc.com",72],["mixrootmod.com",73],["explorecams.com",74],["southpark.*",[75,76]],["southparkstudios.*",[75,76]],["southpark.cc.com",76],["money.bg",77],["realmadryt.pl",77],["ruidrive.com",77],["myesports.gg",77],["getthit.com",78],["sshkit.com",79],["fastssh.com",79],["howdy.id",79],["freex2line.online",80],["intro-hd.net",81],["souq-design.com",81],["gaypornhot.com",81],["sonixgvn.net",82],["everand.com",83],["loot-link.com",84],["lootdest.*",84],["rajssoid.online",84],["moutogami.com",84],["india.marathinewz.in",84],["workink.click",85],["work.ink",[86,87]],["sport.es",87],["tubtic.com",87],["kio.ac",87],["bigbuttshub2.top",[87,114]],["bigbuttshubvideos.com",[87,114]],["online-smss.com",[87,114]],["play.nova.bg",88],["u.co.uk",89],["uktvplay.co.uk",89],["uktvplay.uktv.co.uk",89],["jpopsingles.eu",90],["adslink.pw",91],["fmovies0.cc",91],["hentaihaven.xxx",92],["imasdk.googleapis.com",93],["botrix.live",94],["gunauc.net",95],["lemino.docomo.ne.jp",96],["kfc.com",97],["crazygames.com",98],["freeshot.live",99],["hancinema.net",100],["javfc2.xyz",101],["textreverse.com",102],["flaticon.com",103],["shahid.mbc.net",[104,126]],["tab-maker.com",105],["faceittracker.net",106],["nikke.win",107],["stream.offidocs.com",108],["dogsexporn.net",109],["yomucomics.com",109],["zone.msn.com",110],["www.msn.com",111],["letemsvetemapplem.eu",112],["flixrave.me",113],["olamovies.*",115],["search.brave.com",116],["coursera.org",117],["nytimes.com",118],["blog.cloudflare.com",119],["www.cloudflare.com",119],["grok.com",120],["notion.so",121],["olympics.com",122],["ceramic.or.kr",123],["pandadoc.com",125],["smallpdf.com",127],["chatgpt.com",[128,129]],["netflix.com",130],["tunein.com",131]]);
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
