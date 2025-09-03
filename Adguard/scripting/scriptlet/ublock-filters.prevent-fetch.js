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
    const scriptletName = `${trusted ? 'trusted-' : ''}prevent-fetch`;
    const logPrefix = safe.makeLogPrefix(
        scriptletName,
        propsToMatch,
        responseBody,
        responseType
    );
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
    if ( fn.prototype?.constructor === fn ) {
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
const argsList = [["/\\/\\/ansuksar\\.com\\/[0-9a-zA-Z]{3,26}\\/\\d{4,6}\\b/","length:125746"],["-load.com/script/","length:101"],["method:HEAD"],["g.doubleclick.net","length:100000"],["favicon","length:252"],["googlesyndication"],["marmalade"],["url:ipapi.co"],["doubleclick"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["ads"],["googlesyndication","method:HEAD"],["doubleclick","length:10","{\"type\":\"cors\"}"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["bmcdn6"],["doubleclick","","{\"type\": \"opaque\"}"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["adsby"],["/veepteero|tag\\.min\\.js/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["/doubleclick|googlesyndication/"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["/gaid=","war:noop-vast2.xml"],["adblock.js"],["popunder"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["/ads|imasdk/"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["wtg-ads"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com","length:2300"],["vlitag"],["adsbygoogle","length:11000"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["/cloudfront|thaudray\\.com/"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["imasdk.googleapis.com"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["dai_iframe"],["method:GET"],["/ads|googletagmanager/"],["/adsbygoogle|doubleclick/"],["url:doubleclick.net","war:googletagservices_gpt.js"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["adsbygoogle","war:googlesyndication_adsbygoogle.js"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["mode:no-cors"],["/googlesyndication|googima\\.js/"],["fwmrm.net"],["/ads|google/","length:10","{\"type\": \"cors\"}"],["/googlesyndication|googletagservices/"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"],["googlesyndication","length:40000-60000"],["googlesyndication","method:HEAD mode:no-cors"],["/rekaa"],["="],["pagead2.googlesyndication.com/pagead/js/adsbygoogle.js","war:googlesyndication_adsbygoogle.js"],["widgets.outbrain.com"],["/\\/\\/.{1,5}\\..*\\..{2,7}\\/.{1,20}\\/\\d+$/"],["mode:cors"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["url:/api/statsig/log_event method:POST"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["logs.netflix.com"],["v.fwmrm.net/ad/g/","war:noop-vmap1.xml"]];
const hostnamesMap = new Map([["japscan.*",0],["dogdrip.net",[1,39]],["infinityfree.com",1],["smsonline.cloud",1],["cdn.bg-gledai.*",2],["cdn.gledaitv.*",2],["mac2sell.net",2],["gamebrew.org",2],["game3rb.com",2],["sixsave.com",2],["asiaon.top",2],["asiaontop.com",2],["bowfile.com",[2,51]],["dealsfinders.blog",2],["iphonechecker.herokuapp.com",2],["coloringpage.eu",2],["juegosdetiempolibre.org",2],["karaokegratis.com.ar",2],["mammaebambini.it",2],["riazor.org",2],["rinconpsicologia.com",2],["sempredirebanzai.it",2],["vectogravic.com",2],["androidacy.com",2],["lifestyle.bg",[2,75]],["news.bg",[2,8,75]],["topsport.bg",[2,75]],["webcafe.bg",[2,75]],["mediamarkt.be",2],["barstoolsports.com",2],["global.novelpia.com",[3,4]],["los40.com",5],["faucetcrypto.com",5],["tea-coffee.net",5],["spatsify.com",5],["newedutopics.com",5],["getviralreach.in",5],["edukaroo.com",5],["funkeypagali.com",5],["careersides.com",5],["nayisahara.com",5],["wikifilmia.com",5],["infinityskull.com",5],["viewmyknowledge.com",5],["iisfvirtual.in",5],["starxinvestor.com",5],["jkssbalerts.com",5],["m.jobinmeghalaya.in",5],["mynewsmedia.co",5],["overgal.com",5],["howtoconcepts.com",5],["ikramlar.online",5],["tpi.li",5],["oii.la",5],["choiceappstore.xyz",5],["djpunjab2.in",5],["djqunjab.in",5],["foodxor.com",5],["geniussolutions.co",5],["mealcold.com",5],["mixrootmods.com",5],["fartechy.com",5],["investcrust.com",5],["bantenexis.com",5],["litonmods.com",5],["universitiesonline.xyz",5],["worldmak.com",5],["updown.fun",5],["ghscanner.com",5],["sat.technology",5],["informacion.es",5],["laprovincia.es",5],["minorpatch.com",5],["wenxuecity.com",5],["disheye.com",5],["homeairquality.org",[5,31]],["techtrim.tech",5],["arhplyrics.in",5],["askpaccosi.com",5],["quizack.com",5],["apkandroidhub.in",5],["studyis.xyz",5],["prepostseo.com",5],["dulichkhanhhoa.net",5],["noithatmyphu.vn",5],["iptvjournal.com",5],["inbbotlist.com",5],["getintoway.com",5],["crdroid.net",5],["beelink.pro",5],["hax.co.id",5],["woiden.id",5],["theusaposts.com",5],["hackr.io",5],["rendimentibtp.it",5],["sportshub.to",5],["sportnews.to",5],["esopress.com",5],["paketmu.com",5],["watchx.top",5],["bitcosite.com",5],["bitzite.com",5],["coinsrev.com",5],["globlenews.in",5],["programmingeeksclub.com",5],["archivebate.com",5],["doctoraux.com",5],["educationbluesky.com",5],["hotkitchenbag.com",5],["maths.media",5],["maths.news",5],["mathsspot.com",5],["mathsstudio.com",5],["mathstutor.life",5],["now.gg",5],["now.us",5],["nowgg.lol",5],["selfstudybrain.com",5],["skibiditoilet.yourmom.eu.org",5],["thewebsitesbridge.com",5],["universityequality.com",5],["virtualstudybrain.com",5],["websitesball.com",5],["websitesbridge.com",5],["xn--31byd1i.net",5],["unitystr.com",5],["moto.it",5],["wellness4live.com",5],["forplayx.ink",5],["moviesapi.club",5],["automoto.it",5],["olarila.com",5],["techedubyte.com",5],["snapwordz.com",5],["toolxox.com",5],["go2share.net",5],["animefire.plus",5],["freewsad.com",5],["yt-downloaderz.com",5],["hostmath.com",5],["fplstatistics.co.uk",5],["fivemdev.org",5],["winlator.com",5],["sabornutritivo.com",5],["metrolagu.cam",5],["megane.com.pl",5],["civitai.com",5],["civitai.green",5],["imagetranslator.io",5],["visnalize.com",5],["tekken8combo.kagewebsite.com",5],["custommapposter.com",5],["scenexe2.io",5],["ncaa.com",5],["gurusiana.id",5],["dichvureviewmap.com",5],["technofino.in",5],["vinstartheme.com",5],["downev.com",5],["vectorx.top",5],["zippyshare.day",5],["modescanlator.net",5],["livexscores.com",5],["btv.bg",5],["btvsport.bg",5],["btvnovinite.bg",5],["101soundboards.com",5],["leakshaven.com",5],["dfbplay.tv",5],["sheepesports.com",5],["ytapi.cc",5],["evaki.fun",5],["bypass.link",5],["tmail.sys64738.at",5],["laser-pics.com",5],["fsicomics.com",5],["darts-scoring.com",5],["videq.cloud",5],["play.starsites.fun",5],["vitalitygames.com",5],["dailyboulder.com",5],["pimylifeup.com",6],["seazon.fr",7],["independent.co.uk",8],["wunderground.com",8],["13tv.co.il",8],["lared.cl",8],["ctrlv.*",8],["scrolller.com",8],["journaldemontreal.com",8],["tvanouvelles.ca",8],["vods.tv",8],["atresplayer.com",8],["assettoworld.com",8],["vtmgo.be",8],["zerioncc.pl",8],["tradingview.com",8],["estudyme.com",8],["jobfound.org",8],["abs-cbn.com",8],["sussytoons.*",8],["moovitapp.com",8],["servustv.com",8],["missavtv.com",8],["flixbaba.com",8],["formatlibrary.com",8],["business-standard.com",8],["windowsonarm.org",8],["html5.gamedistribution.com",9],["premio.io",10],["flygbussarna.se",11],["allmusic.com",12],["wowescape.com",12],["leechpremium.link",12],["camcam.cc",12],["nohat.cc",12],["hindinews360.in",12],["weshare.is",12],["cyberlynews.com",12],["djremixganna.com",12],["hypicmodapk.org",12],["keedabankingnews.com",12],["rokni.xyz",12],["technicalline.store",12],["quizrent.com",12],["isi7.net",12],["okiemrolnika.pl",12],["pandadevelopment.net",12],["decrypt.day",12],["anakteknik.co.id",12],["javball.com",12],["visalist.io",12],["moviesshub.*",12],["zeenews.india.com",12],["gadgetbond.com",12],["updateroj24.com",12],["remotejobzone.online",12],["cosmicapp.co",12],["hentaicovid.org",12],["sexwebvideo.com",12],["gofile.download",12],["discover-sharm.com",12],["newstopics.in",12],["timesofindia.indiatimes.com",[13,124]],["skidrowreloaded.com",14],["zone-telechargement.*",14],["topsporter.net",14],["player.glomex.com",15],["htmlgames.com",16],["investing.com",17],["mylivewallpapers.com",17],["softfully.com",17],["reminimod.co",17],["highkeyfinance.com",17],["amanguides.com",17],["adcrypto.net",17],["admediaflex.com",17],["aduzz.com",17],["bitcrypto.info",17],["cdrab.com",17],["datacheap.io",17],["hbz.us",17],["savego.org",17],["owsafe.com",17],["sportweb.info",17],["apkupload.in",17],["ezeviral.com",17],["pngreal.com",17],["ytpng.net",17],["travel.vebma.com",17],["cloud.majalahhewan.com",17],["crm.cekresi.me",17],["ai.tempatwisata.pro",17],["cinedesi.in",17],["thevouz.in",17],["tejtime24.com",17],["techishant.in",17],["mtcremix.com",17],["advicefunda.com",17],["bestloanoffer.net",17],["computerpedia.in",17],["techconnection.in",17],["wrzesnia.info.pl",17],["key-hub.eu",17],["discoveryplus.in",17],["calculator-online.net",17],["dotabuff.com",17],["forum.cstalking.tv",17],["mcqmall.com",17],["witcherhour.com",17],["clamor.pl",17],["ozulscans.com",17],["noor-book.com",17],["pobre.*",17],["compromath.com",17],["sumoweb.to",17],["haloursynow.pl",17],["satkurier.pl",17],["mtg-print.com",17],["heavy.com",17],["creators.nafezly.com",17],["downloadfilm.website",17],["bombuj.*",17],["pornovka.cz",17],["fplstatistics.com",17],["cheater.ninja",17],["govtportal.org",17],["vide-greniers.org",17],["muyinteresante.es",18],["3dzip.org",19],["s0ft4pc.com",19],["ani-stream.com",20],["uflash.tv",21],["oko.sh",22],["duden.de",23],["joyn.de",24],["joyn.at",24],["joyn.ch",24],["tf1.fr",25],["exe.app",26],["eio.io",26],["ufacw.com",26],["figurehunter.net",26],["luscious.net",27],["mdn.lol",28],["bitcotasks.com",28],["starkroboticsfrc.com",29],["sinonimos.de",29],["antonimos.de",29],["quesignifi.ca",29],["tiktokrealtime.com",29],["tiktokcounter.net",29],["tpayr.xyz",29],["poqzn.xyz",29],["ashrfd.xyz",29],["rezsx.xyz",29],["tryzt.xyz",29],["ashrff.xyz",29],["rezst.xyz",29],["dawenet.com",29],["erzar.xyz",29],["waezm.xyz",29],["waezg.xyz",29],["blackwoodacademy.org",29],["cryptednews.space",29],["vivuq.com",29],["swgop.com",29],["vbnmll.com",29],["telcoinfo.online",29],["dshytb.com",29],["quins.us",29],["btcbitco.in",30],["btcsatoshi.net",30],["cempakajaya.com",30],["crypto4yu.com",30],["readbitcoin.org",30],["wiour.com",30],["senda.pl",31],["dsmusic.in",32],["www.apkmoddone.com",33],["tutorialsaya.com",12],["exactpay.online",34],["filesupload.in",35],["hindustantimes.com",35],["indiainfo4u.in",36],["canalobra.com",37],["tulink.org",37],["arabshentai.com",38],["ariversegl.com",38],["boyfuck.me",38],["cgtips.org",38],["dvdgayporn.com",38],["dx-tv.com",38],["filmyzones.com",38],["freereadnovel.online",38],["idlixvip.*",38],["javboys.tv",38],["magicgameworld.com",38],["medicalstudyzone.com",38],["netfuck.net",38],["onezoo.net",38],["readingpage.fun",38],["shemalegape.net",38],["tojimangas.com",38],["tuktukcinma.com",38],["vercanalesdominicanos.com",38],["superpsx.com",38],["hunterscomics.com",38],["player.pl",40],["ryxy.online",41],["camarchive.tv",42],["cybermania.ws",43],["fapdrop.com",43],["linkpoi.me",44],["platform.adex.network",45],["watch.plex.tv",46],["simplebits.io",47],["tvnz.co.nz",48],["timesnowhindi.com",49],["timesnowmarathi.com",49],["timesofindia.com",49],["elahmad.com",50],["1cloudfile.com",52],["weszlo.com",53],["wyze.com",54],["mmorpg.org.pl",55],["firmwarex.net",56],["dongknows.com",57],["forsal.pl",58],["photopea.com",59],["freeshib.biz",60],["theappstore.org",61],["deutschekanale.com",62],["soranews24.com",63],["ipalibrary.me",64],["ipacrack.com",65],["bravedown.com",66],["smartkhabrinews.com",67],["freepik-downloader.com",68],["freepic-downloader.com",68],["envato-downloader.com",68],["ortograf.pl",69],["bg-gledai.*",70],["gledaitv.*",70],["mixrootmod.com",71],["explorecams.com",72],["southpark.*",[73,74]],["southparkstudios.*",[73,74]],["southpark.cc.com",74],["money.bg",75],["realmadryt.pl",75],["ruidrive.com",75],["myesports.gg",75],["getthit.com",76],["sshkit.com",77],["fastssh.com",77],["howdy.id",77],["cimanow.cc",78],["freex2line.online",78],["intro-hd.net",79],["souq-design.com",79],["gaypornhot.com",79],["sonixgvn.net",80],["everand.com",81],["loot-link.com",82],["lootdest.*",82],["rajssoid.online",82],["moutogami.com",82],["india.marathinewz.in",82],["workink.click",83],["work.ink",[84,85]],["sport.es",85],["tubtic.com",85],["kio.ac",85],["bigbuttshub2.top",[85,113]],["bigbuttshubvideos.com",[85,113]],["online-smss.com",[85,113]],["play.nova.bg",86],["u.co.uk",87],["uktvplay.co.uk",87],["uktvplay.uktv.co.uk",87],["jpopsingles.eu",88],["adslink.pw",89],["fmovies0.cc",89],["hentaihaven.xxx",90],["imasdk.googleapis.com",91],["botrix.live",92],["gunauc.net",93],["lemino.docomo.ne.jp",94],["kfc.com",95],["crazygames.com",96],["freeshot.live",97],["hancinema.net",98],["javfc2.xyz",99],["textreverse.com",100],["flaticon.com",101],["shahid.mbc.net",[102,126]],["tab-maker.com",103],["faceittracker.net",104],["nikke.win",105],["stream.offidocs.com",106],["dogsexporn.net",107],["yomucomics.com",107],["zone.msn.com",108],["www.msn.com",109],["letemsvetemapplem.eu",110],["flixrave.me",111],["seelen.io",112],["olamovies.*",[114,115]],["search.brave.com",116],["coursera.org",117],["nytimes.com",118],["blog.cloudflare.com",119],["www.cloudflare.com",119],["grok.com",120],["notion.so",121],["olympics.com",122],["ceramic.or.kr",123],["pandadoc.com",125],["smallpdf.com",127],["chatgpt.com",[128,129]],["netflix.com",130],["cbsnews.com>>",131]]);
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
