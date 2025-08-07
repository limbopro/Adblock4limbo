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
const argsList = [["/\\/\\/ansuksar\\.com\\/[0-9a-zA-Z]{3,26}\\/\\d{4,6}\\b/","length:125746"],["-load.com/script/","length:101"],["method:HEAD"],["googlesyndication"],["marmalade"],["url:ipapi.co"],["doubleclick"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["ads"],["googlesyndication","method:HEAD"],["doubleclick","length:10","{\"type\":\"cors\"}"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["bmcdn6"],["doubleclick","","{\"type\": \"opaque\"}"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["adsby"],["/veepteero|tag\\.min\\.js/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["/doubleclick|googlesyndication/"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["/gaid=","war:noop-vast2.xml"],["adblock.js"],["popunder"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["/ads|imasdk/"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["wtg-ads"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com","length:2300"],["vlitag"],["adsbygoogle","length:11000"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["/cloudfront|thaudray\\.com/"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["imasdk.googleapis.com"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["dai_iframe"],["method:GET"],["/ads|googletagmanager/"],["/adsbygoogle|doubleclick/"],["url:doubleclick.net","war:googletagservices_gpt.js"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["adsbygoogle","war:googlesyndication_adsbygoogle.js"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["/googlesyndication|googima\\.js/"],["fwmrm.net"],["/ads|google/","length:10","{\"type\": \"cors\"}"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["doubleclick.net"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/googlesyndication|googletagservices/"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["/doubleclick|googlesyndication/","length:10","{\"type\": \"cors\"}"],["mode:no-cors"],["googlesyndication","length:40000-60000"],["googlesyndication","method:HEAD mode:no-cors"],["/rekaa"],["="],["widgets.outbrain.com"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["url:/api/statsig/log_event method:POST"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["logs.netflix.com"]];
const hostnamesMap = new Map([["japscan.*",0],["dogdrip.net",[1,37]],["infinityfree.com",1],["smsonline.cloud",1],["cdn.bg-gledai.*",2],["cdn.gledaitv.*",2],["mac2sell.net",2],["gamebrew.org",2],["game3rb.com",2],["sixsave.com",2],["asiaon.top",2],["asiaontop.com",2],["bowfile.com",[2,49]],["dealsfinders.blog",2],["iphonechecker.herokuapp.com",2],["coloringpage.eu",2],["conocimientoshackers.com",2],["juegosdetiempolibre.org",2],["karaokegratis.com.ar",2],["mammaebambini.it",2],["riazor.org",2],["rinconpsicologia.com",2],["sempredirebanzai.it",2],["vectogravic.com",2],["androidacy.com",2],["lifestyle.bg",[2,73]],["news.bg",[2,6,73]],["topsport.bg",[2,73]],["webcafe.bg",[2,73]],["mediamarkt.be",2],["barstoolsports.com",2],["los40.com",3],["faucetcrypto.com",3],["tea-coffee.net",3],["spatsify.com",3],["newedutopics.com",3],["getviralreach.in",3],["edukaroo.com",3],["funkeypagali.com",3],["careersides.com",3],["nayisahara.com",3],["wikifilmia.com",3],["infinityskull.com",3],["viewmyknowledge.com",3],["iisfvirtual.in",3],["starxinvestor.com",3],["jkssbalerts.com",3],["m.jobinmeghalaya.in",3],["mynewsmedia.co",3],["overgal.com",3],["howtoconcepts.com",3],["ikramlar.online",3],["tpi.li",3],["oii.la",3],["choiceappstore.xyz",3],["djpunjab2.in",3],["djqunjab.in",3],["foodxor.com",3],["geniussolutions.co",3],["mealcold.com",3],["mixrootmods.com",3],["fartechy.com",3],["investcrust.com",3],["bantenexis.com",3],["litonmods.com",3],["universitiesonline.xyz",3],["worldmak.com",3],["updown.fun",3],["ghscanner.com",3],["sat.technology",3],["minorpatch.com",3],["wenxuecity.com",3],["disheye.com",3],["homeairquality.org",[3,29]],["techtrim.tech",3],["arhplyrics.in",3],["askpaccosi.com",3],["quizack.com",3],["apkandroidhub.in",3],["studyis.xyz",3],["prepostseo.com",3],["dulichkhanhhoa.net",3],["noithatmyphu.vn",3],["iptvjournal.com",3],["inbbotlist.com",3],["getintoway.com",3],["crdroid.net",3],["beelink.pro",3],["hax.co.id",3],["woiden.id",3],["theusaposts.com",3],["hackr.io",3],["rendimentibtp.it",3],["sportshub.to",3],["sportnews.to",3],["esopress.com",3],["paketmu.com",3],["watchx.top",3],["bitcosite.com",3],["bitzite.com",3],["coinsrev.com",3],["globlenews.in",3],["programmingeeksclub.com",3],["archivebate.com",3],["doctoraux.com",3],["educationbluesky.com",3],["hotkitchenbag.com",3],["maths.media",3],["maths.news",3],["mathsspot.com",3],["mathsstudio.com",3],["mathstutor.life",3],["now.gg",3],["now.us",3],["nowgg.lol",3],["selfstudybrain.com",3],["skibiditoilet.yourmom.eu.org",3],["thewebsitesbridge.com",3],["universityequality.com",3],["virtualstudybrain.com",3],["websitesball.com",3],["websitesbridge.com",3],["xn--31byd1i.net",3],["unitystr.com",3],["moto.it",3],["wellness4live.com",3],["forplayx.ink",3],["moviesapi.club",3],["bestx.stream",3],["boosterx.stream",3],["automoto.it",3],["olarila.com",3],["techedubyte.com",3],["snapwordz.com",3],["toolxox.com",3],["go2share.net",3],["animefire.plus",3],["freewsad.com",3],["yt-downloaderz.com",3],["hostmath.com",3],["urlcut.ninja",3],["fplstatistics.co.uk",3],["fivemdev.org",3],["winlator.com",3],["sabornutritivo.com",3],["metrolagu.cam",3],["megane.com.pl",3],["civitai.com",3],["civitai.green",3],["streamer4u.site",3],["imagetranslator.io",3],["visnalize.com",3],["tekken8combo.kagewebsite.com",3],["custommapposter.com",3],["scenexe2.io",3],["ncaa.com",3],["gurusiana.id",3],["dichvureviewmap.com",3],["technofino.in",3],["vinstartheme.com",3],["downev.com",3],["vectorx.top",3],["bong.ink",3],["zippyshare.day",3],["modescanlator.net",3],["livexscores.com",3],["btv.bg",3],["btvsport.bg",3],["btvnovinite.bg",3],["101soundboards.com",3],["freedrivemovie.com",3],["leakshaven.com",3],["dfbplay.tv",3],["sheepesports.com",3],["ytapi.cc",3],["evaki.fun",3],["bypass.link",3],["tmail.sys64738.at",3],["laser-pics.com",3],["fsicomics.com",3],["darts-scoring.com",3],["seelen.io",3],["videq.cloud",3],["play.starsites.fun",3],["pimylifeup.com",4],["seazon.fr",5],["independent.co.uk",6],["wunderground.com",6],["ctrlv.*",6],["scrolller.com",6],["journaldemontreal.com",6],["tvanouvelles.ca",6],["vods.tv",6],["atresplayer.com",6],["assettoworld.com",6],["vtmgo.be",6],["zerioncc.pl",6],["tradingview.com",6],["estudyme.com",6],["jobfound.org",6],["abs-cbn.com",6],["sussytoons.*",6],["moovitapp.com",6],["servustv.com",6],["missavtv.com",6],["flixbaba.com",6],["formatlibrary.com",6],["business-standard.com",6],["windowsonarm.org",6],["global.novelpia.com",6],["html5.gamedistribution.com",7],["premio.io",8],["flygbussarna.se",9],["allmusic.com",10],["wowescape.com",10],["leechpremium.link",10],["camcam.cc",10],["nohat.cc",10],["hindinews360.in",10],["weshare.is",10],["cyberlynews.com",10],["djremixganna.com",10],["hypicmodapk.org",10],["keedabankingnews.com",10],["rokni.xyz",10],["technicalline.store",10],["quizrent.com",10],["isi7.net",10],["pinloker.com",10],["okiemrolnika.pl",10],["pandadevelopment.net",10],["decrypt.day",10],["anakteknik.co.id",10],["javball.com",10],["visalist.io",10],["moviesshub.*",10],["zeenews.india.com",10],["gadgetbond.com",10],["updateroj24.com",10],["cosplay-xxx.com",10],["remotejobzone.online",10],["cosmicapp.co",10],["hentaicovid.org",10],["sexwebvideo.com",10],["gofile.download",10],["discover-sharm.com",10],["newstopics.in",10],["timesofindia.indiatimes.com",[11,119]],["skidrowreloaded.com",12],["zone-telechargement.*",12],["topsporter.net",12],["player.glomex.com",13],["htmlgames.com",14],["investing.com",15],["mylivewallpapers.com",15],["softfully.com",15],["reminimod.co",15],["highkeyfinance.com",15],["amanguides.com",15],["adcrypto.net",15],["admediaflex.com",15],["aduzz.com",15],["bitcrypto.info",15],["cdrab.com",15],["datacheap.io",15],["hbz.us",15],["savego.org",15],["owsafe.com",15],["sportweb.info",15],["apkupload.in",15],["ezeviral.com",15],["pngreal.com",15],["ytpng.net",15],["travel.vebma.com",15],["cloud.majalahhewan.com",15],["crm.cekresi.me",15],["ai.tempatwisata.pro",15],["cinedesi.in",15],["thevouz.in",15],["tejtime24.com",15],["techishant.in",15],["mtcremix.com",15],["advicefunda.com",15],["bestloanoffer.net",15],["computerpedia.in",15],["techconnection.in",15],["key-hub.eu",15],["discoveryplus.in",15],["calculator-online.net",15],["tutorial.siberuang.com",15],["dotabuff.com",15],["forum.cstalking.tv",15],["mcqmall.com",15],["witcherhour.com",15],["clamor.pl",15],["ozulscans.com",15],["noor-book.com",15],["wrzesnia.info.pl",15],["pobre.*",15],["compromath.com",15],["sumoweb.to",15],["haloursynow.pl",15],["satkurier.pl",15],["mtg-print.com",15],["heavy.com",15],["creators.nafezly.com",15],["downloadfilm.website",15],["bombuj.*",15],["pornovka.cz",15],["fplstatistics.com",15],["cheater.ninja",15],["govtportal.org",15],["vide-greniers.org",15],["muyinteresante.es",16],["3dzip.org",17],["s0ft4pc.com",17],["ani-stream.com",18],["uflash.tv",19],["oko.sh",20],["duden.de",21],["joyn.de",22],["joyn.at",22],["joyn.ch",22],["tf1.fr",23],["exe.app",24],["eio.io",24],["ufacw.com",24],["figurehunter.net",24],["luscious.net",25],["mdn.lol",26],["bitcotasks.com",26],["starkroboticsfrc.com",27],["sinonimos.de",27],["antonimos.de",27],["quesignifi.ca",27],["tiktokrealtime.com",27],["tiktokcounter.net",27],["tpayr.xyz",27],["poqzn.xyz",27],["ashrfd.xyz",27],["rezsx.xyz",27],["tryzt.xyz",27],["ashrff.xyz",27],["rezst.xyz",27],["dawenet.com",27],["erzar.xyz",27],["waezm.xyz",27],["waezg.xyz",27],["blackwoodacademy.org",27],["cryptednews.space",27],["vivuq.com",27],["swgop.com",27],["vbnmll.com",27],["telcoinfo.online",27],["dshytb.com",27],["quins.us",27],["btcbitco.in",28],["btcsatoshi.net",28],["cempakajaya.com",28],["crypto4yu.com",28],["readbitcoin.org",28],["wiour.com",28],["senda.pl",29],["dsmusic.in",30],["www.apkmoddone.com",31],["tutorialsaya.com",10],["exactpay.online",32],["filesupload.in",33],["hindustantimes.com",33],["indiainfo4u.in",34],["canalobra.com",35],["tulink.org",35],["soccerinhd.com",35],["arabshentai.com",36],["ariversegl.com",36],["boyfuck.me",36],["cgtips.org",36],["dvdgayporn.com",36],["dx-tv.com",36],["filmyzones.com",36],["freereadnovel.online",36],["idlixvip.*",36],["javboys.tv",36],["medicalstudyzone.com",36],["netfuck.net",36],["readingpage.fun",36],["shemalegape.net",36],["tojimangas.com",36],["tuktukcinma.com",36],["vercanalesdominicanos.com",36],["superpsx.com",36],["hunterscomics.com",36],["player.pl",38],["ryxy.online",39],["camarchive.tv",40],["cybermania.ws",41],["fapdrop.com",41],["linkpoi.me",42],["platform.adex.network",43],["watch.plex.tv",44],["simplebits.io",45],["tvnz.co.nz",46],["timesnowhindi.com",47],["timesnowmarathi.com",47],["timesofindia.com",47],["elahmad.com",48],["1cloudfile.com",50],["weszlo.com",51],["wyze.com",52],["mmorpg.org.pl",53],["firmwarex.net",54],["dongknows.com",55],["forsal.pl",56],["photopea.com",57],["freeshib.biz",58],["theappstore.org",59],["deutschekanale.com",60],["soranews24.com",61],["ipalibrary.me",62],["ipacrack.com",63],["bravedown.com",64],["smartkhabrinews.com",65],["freepik-downloader.com",66],["freepic-downloader.com",66],["envato-downloader.com",66],["ortograf.pl",67],["bg-gledai.*",68],["gledaitv.*",68],["mixrootmod.com",69],["explorecams.com",70],["southpark.*",[71,72]],["southparkstudios.*",[71,72]],["southpark.cc.com",72],["money.bg",73],["realmadryt.pl",73],["ruidrive.com",73],["poophd.video-src.com",73],["myesports.gg",73],["getthit.com",74],["sshkit.com",75],["fastssh.com",75],["howdy.id",75],["cimanow.cc",76],["freex2line.online",76],["intro-hd.net",77],["souq-design.com",77],["gaypornhot.com",77],["sonixgvn.net",78],["everand.com",79],["loot-link.com",80],["lootdest.*",80],["rajssoid.online",80],["moutogami.com",80],["india.marathinewz.in",80],["workink.click",81],["work.ink",82],["play.nova.bg",83],["u.co.uk",84],["uktvplay.co.uk",84],["uktvplay.uktv.co.uk",84],["jpopsingles.eu",85],["hentaihaven.xxx",86],["imasdk.googleapis.com",87],["botrix.live",88],["gunauc.net",89],["lemino.docomo.ne.jp",90],["kfc.com",91],["crazygames.com",92],["freeshot.live",93],["hancinema.net",94],["javfc2.xyz",95],["textreverse.com",96],["flaticon.com",97],["shahid.mbc.net",[98,121]],["tab-maker.com",99],["faceittracker.net",100],["fmovies0.cc",101],["nikke.win",102],["stream.offidocs.com",103],["dogsexporn.net",104],["yomucomics.com",104],["sport.es",105],["tubtic.com",105],["kio.ac",105],["bigbuttshub2.top",[105,110]],["bigbuttshubvideos.com",[105,110]],["zone.msn.com",106],["www.msn.com",107],["letemsvetemapplem.eu",108],["flixrave.me",109],["search.brave.com",111],["coursera.org",112],["nytimes.com",113],["blog.cloudflare.com",114],["www.cloudflare.com",114],["grok.com",115],["notion.so",116],["olympics.com",117],["ceramic.or.kr",118],["pandadoc.com",120],["smallpdf.com",122],["chatgpt.com",[123,124]],["netflix.com",125]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

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
