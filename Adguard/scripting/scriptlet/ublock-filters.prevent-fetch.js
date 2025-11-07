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
const argsList = [["-load.com/script/","length:101"],["method:HEAD"],["method:/head/i"],["url:https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-3497863494706299 method:HEAD mode:no-cors","","","throttle","121"],["g.doubleclick.net","length:100000"],["favicon","length:252"],["summerday","length:10","{\"type\":\"cors\"}"],["v.fwmrm.net/ad/g/","war:noop-vmap1.xml"],["googlesyndication"],["marmalade"],["url:ipapi.co"],["doubleclick"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["ads"],["googlesyndication","method:HEAD"],["doubleclick","length:10","{\"type\":\"cors\"}"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["bmcdn6"],["doubleclick","","{\"type\": \"opaque\"}"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["adsby"],["/veepteero|tag\\.min\\.js/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["/doubleclick|googlesyndication/"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["/gaid=","war:noop-vast2.xml"],["adblock.js"],["popunder"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["/ads|imasdk/"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["wtg-ads"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com"],["vlitag"],["adsbygoogle","length:11000"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["/cloudfront|thaudray\\.com/"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["imasdk.googleapis.com"],["/adoto|googlesyndication/"],["ad-delivery"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["ima3_dai"],["dai_iframe"],["method:GET"],["/ads|googletagmanager/"],["/adsbygoogle|doubleclick/"],["url:doubleclick.net","war:googletagservices_gpt.js"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["adsbygoogle","war:googlesyndication_adsbygoogle.js"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["mode:no-cors"],["/googlesyndication|googima\\.js/"],["fwmrm.net"],["/ads|google/","length:10","{\"type\": \"cors\"}"],["/googlesyndication|googletagservices/"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"],["googlesyndication","length:40000-60000"],["googlesyndication","method:HEAD mode:no-cors"],["/rekaa"],["="],["widgets.outbrain.com"],["mode:cors"],["/partners/home"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["url:/api/statsig/log_event method:POST"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["logs.netflix.com"]];
const hostnamesMap = new Map([["dogdrip.net",[0,42]],["infinityfree.com",0],["smsonline.cloud",0],["welt.de",0],["cdn.bg-gledai.*",1],["cdn.gledaitv.*",[1,2]],["mac2sell.net",1],["gamebrew.org",1],["game3rb.com",1],["sixsave.com",1],["asiaon.top",1],["asiaontop.com",1],["bowfile.com",[1,53]],["dealsfinders.blog",1],["iphonechecker.herokuapp.com",1],["coloringpage.eu",1],["juegosdetiempolibre.org",1],["karaokegratis.com.ar",1],["mammaebambini.it",1],["riazor.org",1],["rinconpsicologia.com",1],["sempredirebanzai.it",1],["vectogravic.com",1],["androidacy.com",1],["lifestyle.bg",[1,78]],["news.bg",[1,11,78]],["topsport.bg",[1,78]],["webcafe.bg",[1,78]],["mediamarkt.be",1],["barstoolsports.com",1],["hmanga.world",2],["temp-mail.lol",2],["pvpoke-re.com",3],["global.novelpia.com",[4,5]],["omuzaani.me",6],["cbsnews.com>>",7],["los40.com",8],["haaretz.com",8],["faucetcrypto.com",8],["tea-coffee.net",8],["spatsify.com",8],["newedutopics.com",8],["getviralreach.in",8],["edukaroo.com",8],["funkeypagali.com",8],["careersides.com",8],["nayisahara.com",8],["wikifilmia.com",8],["infinityskull.com",8],["viewmyknowledge.com",8],["iisfvirtual.in",8],["starxinvestor.com",8],["jkssbalerts.com",8],["m.jobinmeghalaya.in",8],["mynewsmedia.co",8],["overgal.com",8],["howtoconcepts.com",8],["ikramlar.online",8],["tpi.li",8],["oii.la",8],["choiceappstore.xyz",8],["djpunjab2.in",8],["djqunjab.in",8],["foodxor.com",8],["geniussolutions.co",8],["mealcold.com",8],["mixrootmods.com",8],["fartechy.com",8],["investcrust.com",8],["bantenexis.com",8],["litonmods.com",8],["universitiesonline.xyz",8],["worldmak.com",8],["updown.fun",8],["ghscanner.com",8],["sat.technology",8],["minorpatch.com",8],["wenxuecity.com",8],["disheye.com",8],["homeairquality.org",[8,34]],["techtrim.tech",8],["arhplyrics.in",8],["askpaccosi.com",8],["quizack.com",8],["apkandroidhub.in",8],["studyis.xyz",8],["prepostseo.com",8],["dulichkhanhhoa.net",8],["noithatmyphu.vn",8],["iptvjournal.com",8],["inbbotlist.com",8],["getintoway.com",8],["crdroid.net",8],["beelink.pro",8],["hax.co.id",8],["woiden.id",8],["theusaposts.com",8],["hackr.io",8],["rendimentibtp.it",8],["sportshub.to",8],["sportnews.to",8],["esopress.com",8],["paketmu.com",8],["watchx.top",8],["bitcosite.com",8],["bitzite.com",8],["coinsrev.com",8],["globlenews.in",8],["programmingeeksclub.com",8],["archivebate.com",8],["doctoraux.com",8],["educationbluesky.com",8],["hotkitchenbag.com",8],["maths.media",8],["maths.news",8],["mathsspot.com",8],["mathsstudio.com",8],["mathstutor.life",8],["now.gg",8],["now.us",8],["nowgg.lol",8],["selfstudybrain.com",8],["skibiditoilet.yourmom.eu.org",8],["thewebsitesbridge.com",8],["universityequality.com",8],["virtualstudybrain.com",8],["websitesball.com",8],["websitesbridge.com",8],["xn--31byd1i.net",8],["unitystr.com",8],["moto.it",8],["wellness4live.com",8],["forplayx.ink",8],["moviesapi.club",8],["automoto.it",8],["olarila.com",8],["techedubyte.com",8],["snapwordz.com",8],["toolxox.com",8],["go2share.net",8],["animefire.plus",8],["freewsad.com",8],["cimanow.cc",[8,81]],["freex2line.onlinex",8],["yt-downloaderz.com",8],["hostmath.com",8],["fplstatistics.co.uk",8],["fivemdev.org",8],["winlator.com",8],["sabornutritivo.com",8],["metrolagu.cam",8],["megane.com.pl",8],["civitai.com",8],["civitai.green",8],["imagetranslator.io",8],["visnalize.com",8],["tekken8combo.kagewebsite.com",8],["custommapposter.com",8],["scenexe2.io",8],["ncaa.com",8],["gurusiana.id",8],["dichvureviewmap.com",8],["technofino.in",8],["vinstartheme.com",8],["downev.com",8],["vectorx.top",8],["zippyshare.day",8],["modescanlator.net",8],["livexscores.com",8],["btv.bg",8],["btvsport.bg",8],["btvnovinite.bg",8],["101soundboards.com",8],["androidpolice.com",8],["babygaga.com",8],["backyardboss.net",8],["carbuzz.com",8],["cbr.com",8],["collider.com",8],["dualshockers.com",8],["footballfancast.com",8],["footballleagueworld.co.uk",8],["gamerant.com",8],["givemesport.com",8],["hardcoregamer.com",8],["hotcars.com",8],["howtogeek.com",8],["makeuseof.com",8],["moms.com",8],["movieweb.com",8],["pocket-lint.com",8],["pocketnow.com",8],["polygon.com",8],["screenrant.com",8],["simpleflying.com",8],["thegamer.com",8],["therichest.com",8],["thesportster.com",8],["thethings.com",8],["thetravel.com",8],["topspeed.com",8],["xda-developers.com",8],["leakshaven.com",8],["dfbplay.tv",8],["sheepesports.com",8],["ytapi.cc",8],["evaki.fun",8],["bypass.link",8],["tmail.sys64738.at",8],["laser-pics.com",8],["fsicomics.com",8],["darts-scoring.com",8],["videq.cloud",8],["play.starsites.fun",8],["vitalitygames.com",8],["dailyboulder.com",8],["djamix.net",8],["pimylifeup.com",9],["seazon.fr",10],["independent.co.uk",11],["wunderground.com",11],["13tv.co.il",11],["lared.cl",11],["ctrlv.*",11],["scrolller.com",11],["journaldemontreal.com",11],["tvanouvelles.ca",11],["vods.tv",11],["atresplayer.com",11],["assettoworld.com",11],["vtmgo.be",11],["zerioncc.pl",11],["tradingview.com",11],["estudyme.com",11],["jobfound.org",11],["abs-cbn.com",11],["sussytoons.*",11],["moovitapp.com",11],["servustv.com",11],["missavtv.com",11],["flixbaba.com",11],["formatlibrary.com",11],["business-standard.com",11],["windowsonarm.org",11],["html5.gamedistribution.com",12],["premio.io",13],["flygbussarna.se",14],["allmusic.com",15],["wowescape.com",15],["leechpremium.link",15],["camcam.cc",15],["nohat.cc",15],["hindinews360.in",15],["weshare.is",15],["cyberlynews.com",15],["djremixganna.com",15],["hypicmodapk.org",15],["keedabankingnews.com",15],["rokni.xyz",15],["technicalline.store",15],["quizrent.com",15],["uploadhub.*",15],["isi7.net",15],["okiemrolnika.pl",15],["pandadevelopment.net",15],["decrypt.day",15],["anakteknik.co.id",15],["javball.com",15],["visalist.io",15],["moviesshub.*",15],["zeenews.india.com",15],["gadgetbond.com",15],["updateroj24.com",15],["remotejobzone.online",15],["cosmicapp.co",15],["hentaicovid.org",15],["sexwebvideo.com",15],["gofile.download",15],["discover-sharm.com",15],["newstopics.in",15],["weights.com",15],["edumailfree.com",15],["timesofindia.indiatimes.com",[16,126]],["skidrowreloaded.com",17],["zone-telechargement.*",17],["topsporter.net",17],["player.glomex.com",18],["htmlgames.com",19],["investing.com",20],["mylivewallpapers.com",20],["softfully.com",20],["reminimod.co",20],["highkeyfinance.com",20],["amanguides.com",20],["adcrypto.net",20],["admediaflex.com",20],["aduzz.com",20],["bitcrypto.info",20],["cdrab.com",20],["datacheap.io",20],["hbz.us",20],["savego.org",20],["owsafe.com",20],["sportweb.info",20],["apkupload.in",20],["ezeviral.com",20],["pngreal.com",20],["ytpng.net",20],["travel.vebma.com",20],["cloud.majalahhewan.com",20],["crm.cekresi.me",20],["ai.tempatwisata.pro",20],["cinedesi.in",20],["thevouz.in",20],["tejtime24.com",20],["techishant.in",20],["mtcremix.com",20],["advicefunda.com",20],["bestloanoffer.net",20],["computerpedia.in",20],["techconnection.in",20],["wrzesnia.info.pl",20],["key-hub.eu",20],["discoveryplus.in",20],["calculator-online.net",20],["dotabuff.com",20],["forum.cstalking.tv",20],["mcqmall.com",20],["witcherhour.com",20],["clamor.pl",20],["ozulscans.com",20],["noor-book.com",20],["pobre.*",20],["compromath.com",20],["sumoweb.to",20],["haloursynow.pl",20],["satkurier.pl",20],["mtg-print.com",20],["heavy.com",20],["creators.nafezly.com",20],["downloadfilm.website",20],["bombuj.*",20],["pornovka.cz",20],["fplstatistics.com",20],["cheater.ninja",20],["govtportal.org",20],["vide-greniers.org",20],["muyinteresante.es",21],["3dzip.org",22],["s0ft4pc.com",22],["ani-stream.com",23],["uflash.tv",24],["oko.sh",25],["duden.de",26],["joyn.de",27],["joyn.at",27],["joyn.ch",27],["tf1.fr",28],["exe.app",29],["eio.io",29],["ufacw.com",29],["figurehunter.net",29],["luscious.net",30],["mdn.lol",31],["bitcotasks.com",31],["starkroboticsfrc.com",32],["sinonimos.de",32],["antonimos.de",32],["quesignifi.ca",32],["tiktokrealtime.com",32],["tiktokcounter.net",32],["tpayr.xyz",32],["poqzn.xyz",32],["ashrfd.xyz",32],["rezsx.xyz",32],["tryzt.xyz",32],["ashrff.xyz",32],["rezst.xyz",32],["dawenet.com",32],["erzar.xyz",32],["waezm.xyz",32],["waezg.xyz",32],["blackwoodacademy.org",32],["cryptednews.space",32],["vivuq.com",32],["swgop.com",32],["vbnmll.com",32],["telcoinfo.online",32],["dshytb.com",32],["quins.us",32],["btcbitco.in",33],["btcsatoshi.net",33],["cempakajaya.com",33],["crypto4yu.com",33],["readbitcoin.org",33],["wiour.com",33],["senda.pl",34],["dsmusic.in",35],["www.apkmoddone.com",36],["tutorialsaya.com",15],["exactpay.online",37],["filesupload.in",38],["hindustantimes.com",38],["indiainfo4u.in",39],["canalobra.com",40],["tulink.org",40],["arabshentai.com",41],["ariversegl.com",41],["asia2tv.com",41],["boyfuck.me",41],["cehennemstream.xyz",41],["cgtips.org",41],["cybermania.ws",41],["dvdgayporn.com",41],["downloadcursos.gratis",41],["dx-tv.com",41],["filmyzones.com",41],["freereadnovel.online",41],["idlixvip.*",41],["javboys.tv",41],["magicgameworld.com",41],["mangacrab.org",41],["medicalstudyzone.com",41],["netfuck.net",41],["onezoo.net",41],["readingpage.fun",41],["shemalegape.net",41],["tojimangas.com",41],["tuktukcinma.com",41],["vercanalesdominicanos.com",41],["superpsx.com",41],["hunterscomics.com",41],["player.pl",43],["ryxy.online",44],["camarchive.tv",45],["linkpoi.me",46],["platform.adex.network",47],["watch.plex.tv",48],["simplebits.io",49],["tvnz.co.nz",50],["timesnowhindi.com",51],["timesnowmarathi.com",51],["timesofindia.com",51],["elahmad.com",52],["1cloudfile.com",54],["weszlo.com",55],["wyze.com",56],["mmorpg.org.pl",57],["firmwarex.net",58],["dongknows.com",59],["forsal.pl",60],["photopea.com",61],["freeshib.biz",62],["theappstore.org",63],["deutschekanale.com",64],["baltimoreravens.com",64],["nfl.com",64],["seahawks.com",64],["soranews24.com",65],["ipalibrary.me",66],["ipacrack.com",67],["bravedown.com",68],["ranoz.gg",68],["smartkhabrinews.com",69],["freepik-downloader.com",70],["freepic-downloader.com",70],["envato-downloader.com",70],["ortograf.pl",71],["bg-gledai.*",72],["gledaitv.*",72],["www.cc.com",72],["mixrootmod.com",73],["explorecams.com",74],["fapdrop.com",75],["southpark.*",[76,77]],["southparkstudios.*",[76,77]],["southpark.cc.com",77],["money.bg",78],["realmadryt.pl",78],["ruidrive.com",78],["myesports.gg",78],["getthit.com",79],["sshkit.com",80],["fastssh.com",80],["howdy.id",80],["freex2line.online",81],["intro-hd.net",82],["souq-design.com",82],["gaypornhot.com",82],["sonixgvn.net",83],["everand.com",84],["loot-link.com",85],["lootdest.*",85],["rajssoid.online",85],["moutogami.com",85],["india.marathinewz.in",85],["workink.click",86],["work.ink",[87,88]],["sport.es",88],["tubtic.com",88],["kio.ac",88],["bigbuttshub2.top",[88,115]],["bigbuttshubvideos.com",[88,115]],["online-smss.com",[88,115]],["play.nova.bg",89],["u.co.uk",90],["uktvplay.co.uk",90],["uktvplay.uktv.co.uk",90],["jpopsingles.eu",91],["adslink.pw",92],["fmovies0.cc",92],["hentaihaven.xxx",93],["imasdk.googleapis.com",94],["botrix.live",95],["gunauc.net",96],["lemino.docomo.ne.jp",97],["kfc.com",98],["crazygames.com",99],["freeshot.live",100],["hancinema.net",101],["javfc2.xyz",102],["textreverse.com",103],["flaticon.com",104],["shahid.mbc.net",[105,128]],["tab-maker.com",106],["faceittracker.net",107],["nikke.win",108],["stream.offidocs.com",109],["dogsexporn.net",110],["yomucomics.com",110],["zone.msn.com",111],["www.msn.com",112],["letemsvetemapplem.eu",113],["flixrave.me",114],["olamovies.*",116],["forge.plebmasters.de",117],["search.brave.com",118],["coursera.org",119],["nytimes.com",120],["blog.cloudflare.com",121],["www.cloudflare.com",121],["grok.com",122],["notion.so",123],["olympics.com",124],["ceramic.or.kr",125],["pandadoc.com",127],["smallpdf.com",129],["chatgpt.com",[130,131]],["netflix.com",132]]);
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
