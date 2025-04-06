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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_noFetchIf() {

/******************************************************************************/

function noFetchIf(
    propsToMatch = '',
    responseBody = '',
    responseType = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-fetch', propsToMatch, responseBody, responseType);
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
        return Promise.resolve(generateContentFn(false, responseBody)).then(text => {
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
const argsList = [["adsbygoogle"],["toiads"],["/^/"],["player-feedback"],["openx"],["method:HEAD"],["ads"],["googlesyndication"],["googlesyndication","method:HEAD"],["damoh.ani-stream.com"],["ujsmediatags method:HEAD"],["/googlesyndication|inklinkor|ads\\/load/"],["googlesyndication","length:2001"],["zomap.de"],["adsafeprotected"],["google"],["url:!luscious.net"],["doubleclick","","{\"type\": \"opaque\"}"],["bmcdn6"],["/adoto|\\/ads\\/js/"],["googletagmanager"],["syndication"],["/googlesyndication|inklinkor/"],["surfe.pro"],["adsbygoogle.js"],["/adsbygoogle|googletagservices/"],["popunder"],["doubleclick"],["doubleclick.net/instream/ad_status.js","war:doubleclick_instream_ad_status.js"],["manager"],["moonicorn.network"],["doubleclick.com","","opaque"],["/ads"],["method:HEAD url:doubleclick.net"],["tvid.in/log"],["cloudfront.net/?"],["/nerveheels/"],["ad"],["analytics"],["/googlesyndication|doubleclick/","length:10","{\"type\": \"cors\"}"],["wtg-ads"],["/ad-provider"],["googlesyndication","length:10","{\"type\": \"cors\"}"],["googlesyndication","length:10","{\"type\":\"cors\"}"],["/ads|doubleclick/"],["dqst.pl"],["uniconsent.com","length:2300"],["googlesyndication.com"],["vlitag"],["adsbygoogle","length:11000"],["/ad\\.doubleclick\\.net|static\\.dable\\.io/"],["imasdk"],["tpc.googlesyndication.com"],["gloacmug.net"],["thaudray.com"],["adskeeper"],["/freychang|passback|popunder|tag|banquetunarmedgrater/"],["google-analytics"],["ima"],["imasdk.googleapis.com"],["/adoto|googlesyndication/"],["ad-delivery"],["ima3_dai"],["method:GET"],["/ads|googletagmanager/"],["/doubleclick|googlesyndication/","length:10","{\"type\":\"cors\"}"],["/doubleclick|googlesyndication|vlitag/","length:10","{\"type\": \"cors\"}"],["/api/v1/events"],["cloudfront"],["/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/"],["fwmrm.net"],["ads","length:10","{\"type\": \"cors\"}"],["ads-twitter.com"],["secure.adnxs.com/ptv","war:noop-vast4.xml"],["googlesyndication","war:google-ima.js"],["googlesyndication","","{\"type\":\"cors\"}"],["pogo"],["doubleclick.net"],["/doubleclick|googlesyndication/"],["jssdks.mparticle.com"],["/adinplay|googlesyndication/"],["/outbrain|adligature|quantserve|adligature|srvtrck/"],["youradexchange"],["adligature"],["/clarity|googlesyndication/"],["thanksgivingdelights"],["snigelweb.com"],["cdnpk.net/Rest/Media/","war:noop.json"],["/gampad/ads?"],["googletagmanager","length:10"],["fundingchoicesmessages"],["/googlesyndication|googletagservices/"],["/doubleclick|google-analytics/"],["/ip-acl-all.php"],["mode:no-cors"],["googlesyndication","length:40000-60000"],["body:browser"],["eventing"],["api.theathletic.com/graphql body:/PostEvent|PostImpressions/"],["method:POST body:zaraz"],["splunkcloud.com/services/collector"],["event-router.olympics.com"],["hostingcloud.racing"],["tvid.in/log/"],["segment.io"],["mparticle.com"],["pluto.smallpdf.com"],["method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["method:/post/i url:ab.chatgpt.com/v1/rgstr"],["marmalade"],["url:ipapi.co"],["api"],["cloudflare.com/cdn-cgi/trace"],["/piwik-"],["-load.com/script/","length:101"],["stella"]];
const hostnamesMap = new Map([["allmusic.com",0],["wowescape.com",0],["leechpremium.link",0],["camcam.cc",0],["nohat.cc",0],["hindinews360.in",0],["weshare.is",0],["cyberlynews.com",0],["hypicmodapk.org",0],["keedabankingnews.com",0],["rokni.xyz",0],["technicalline.store",0],["quizrent.com",0],["isi7.net",0],["hyipstats.net",0],["freecoursesonline.me",0],["pinloker.com",0],["client.falixnodes.net",0],["sshkit.com",0],["fastssh.com",0],["howdy.id",0],["okiemrolnika.pl",0],["pandadevelopment.net",0],["decrypt.day",0],["anakteknik.co.id",0],["javball.com",0],["visalist.io",0],["rkd3.dev",0],["moviesshub.*",0],["timesofindia.indiatimes.com",[1,103]],["skidrowreloaded.com",2],["pinoyfaucet.com",2],["zone-telechargement.*",2],["topsporter.net",2],["player.glomex.com",3],["htmlgames.com",4],["mac2sell.net",5],["gamebrew.org",5],["game3rb.com",5],["sixsave.com",5],["bowfile.com",[5,35]],["dealsfinders.blog",5],["iphonechecker.herokuapp.com",5],["coloringpage.eu",5],["conocimientoshackers.com",5],["juegosdetiempolibre.org",5],["karaokegratis.com.ar",5],["mammaebambini.it",5],["riazor.org",5],["rinconpsicologia.com",5],["sempredirebanzai.it",5],["vectogravic.com",5],["androidacy.com",5],["freetohell.com",5],["lifestyle.bg",[5,63]],["news.bg",[5,63]],["topsport.bg",[5,63]],["webcafe.bg",[5,63]],["barstoolsports.com",5],["bg-gledai.*",[5,59]],["gledaitv.*",[5,59]],["investing.com",6],["mylivewallpapers.com",6],["softfully.com",6],["reminimod.co",6],["highkeyfinance.com",6],["amanguides.com",6],["adcrypto.net",6],["admediaflex.com",6],["aduzz.com",6],["bitcrypto.info",6],["cdrab.com",6],["datacheap.io",6],["hbz.us",6],["savego.org",6],["owsafe.com",6],["sportweb.info",6],["apkupload.in",6],["ezeviral.com",6],["pngreal.com",6],["ytpng.net",6],["travel.vebma.com",6],["cloud.majalahhewan.com",6],["crm.cekresi.me",6],["ai.tempatwisata.pro",6],["cinedesi.in",6],["thevouz.in",6],["tejtime24.com",6],["techishant.in",6],["mtcremix.com",6],["advicefunda.com",6],["bestloanoffer.net",6],["computerpedia.in",[6,21]],["techconnection.in",6],["key-hub.eu",6],["discoveryplus.in",6],["calculator-online.net",6],["tutorial.siberuang.com",6],["desiflixindia.com",6],["dotabuff.com",6],["forum.cstalking.tv",6],["mcqmall.com",6],["witcherhour.com",6],["clamor.pl",6],["ozulscans.com",6],["i-polls.com",6],["insurancevela.com",6],["noor-book.com",6],["wrzesnia.info.pl",6],["elahmad.com",6],["pobre.*",6],["compromath.com",6],["sumoweb.to",6],["haloursynow.pl",6],["satkurier.pl",6],["mtg-print.com",6],["gktech.uk",6],["heavy.com",6],["creators.nafezly.com",6],["downloadfilm.website",6],["uploadsea.com",6],["bombuj.*",6],["pornovka.cz",6],["fplstatistics.com",6],["cheater.ninja",6],["govtportal.org",6],["faucetcrypto.com",7],["tea-coffee.net",7],["spatsify.com",7],["newedutopics.com",7],["getviralreach.in",7],["edukaroo.com",7],["funkeypagali.com",7],["careersides.com",7],["nayisahara.com",7],["wikifilmia.com",7],["infinityskull.com",7],["viewmyknowledge.com",7],["iisfvirtual.in",7],["starxinvestor.com",7],["jkssbalerts.com",7],["acetack.com",7],["androidquest.com",7],["apklox.com",7],["chhaprawap.in",7],["gujarativyakaran.com",7],["kashmirstudentsinformation.in",7],["kisantime.com",7],["shetkaritoday.in",7],["pastescript.com",7],["trimorspacks.com",7],["updrop.link",7],["mynewsmedia.co",7],["overgal.com",7],["howtoconcepts.com",7],["ikramlar.online",7],["choiceappstore.xyz",7],["djpunjab2.in",7],["djqunjab.in",7],["foodxor.com",7],["geniussolutions.co",7],["mealcold.com",7],["mixrootmods.com",7],["fartechy.com",7],["investcrust.com",7],["bantenexis.com",7],["litonmods.com",7],["universitiesonline.xyz",7],["worldmak.com",7],["updown.fun",7],["wenxuecity.com",7],["kiwiexploits.com",7],["disheye.com",7],["homeairquality.org",[7,20]],["techtrim.tech",7],["arhplyrics.in",7],["raky.in",7],["askpaccosi.com",7],["quizack.com",7],["apkandroidhub.in",7],["babymodz.com",7],["deezloaded.com",7],["mad.gplpalace.one",7],["studyis.xyz",7],["chillx.top",7],["prepostseo.com",7],["dulichkhanhhoa.net",7],["noithatmyphu.vn",7],["iptvjournal.com",7],["inbbotlist.com",7],["getintoway.com",7],["crdroid.net",7],["beelink.pro",7],["hax.co.id",7],["woiden.id",7],["theusaposts.com",7],["hackr.io",7],["rendimentibtp.it",7],["sportshub.to",7],["sportnews.to",7],["esopress.com",7],["paketmu.com",7],["watchx.top",7],["bitcosite.com",7],["bitzite.com",7],["coinsrev.com",7],["globlenews.in",7],["programmingeeksclub.com",7],["archivebate.com",7],["doctoraux.com",7],["educationbluesky.com",7],["hotkitchenbag.com",7],["maths.media",7],["maths.news",7],["mathsspot.com",7],["mathstutor.life",7],["now.gg",7],["now.us",7],["nowgg.lol",7],["selfstudybrain.com",7],["skibiditoilet.yourmom.eu.org",7],["universityequality.com",7],["websitesball.com",7],["websitesbridge.com",7],["xn--31byd1i.net",7],["unitystr.com",7],["moto.it",7],["wellness4live.com",7],["forplayx.ink",7],["ghscanner.com",7],["sat.technology",7],["moviesapi.club",7],["bestx.stream",7],["boosterx.stream",7],["automoto.it",7],["olarila.com",7],["techedubyte.com",7],["snapwordz.com",7],["toolxox.com",7],["go2share.net",7],["flixscans.com",7],["animefire.plus",7],["freewsad.com",7],["yt-downloaderz.com",7],["hostmath.com",7],["urlcut.ninja",7],["fplstatistics.co.uk",7],["marinetraffic.live",7],["99corporates.com",7],["fivemdev.org",7],["winlator.com",7],["sabornutritivo.com",7],["metrolagu.cam",7],["loot-link.com",7],["loot-links.com",7],["lootdest.com",7],["megane.com.pl",7],["flixscans.org",7],["civitai.com",7],["civitai.green",7],["streamer4u.site",7],["imagetranslator.io",7],["visnalize.com",7],["tekken8combo.kagewebsite.com",7],["custommapposter.com",7],["scenexe2.io",7],["ncaa.com",7],["gurusiana.id",7],["dichvureviewmap.com",7],["technofino.in",7],["vinstartheme.com",7],["downev.com",7],["vectorx.top",7],["bong.ink",7],["zippyshare.day",7],["modescanlator.net",7],["livexscores.com",7],["101soundboards.com",7],["freedrivemovie.com",7],["leakshaven.com",7],["dfbplay.tv",7],["sheepesports.com",7],["ytapi.cc",7],["bypass.link",7],["tmail.sys64738.at",7],["laser-pics.com",7],["fsicomics.com",7],["darts-scoring.com",7],["los40.com",7],["muyinteresante.es",8],["ani-stream.com",9],["uflash.tv",10],["oko.sh",[11,22]],["duden.de",12],["joyn.de",13],["joyn.at",13],["tf1.fr",14],["exe.app",15],["eio.io",15],["ufacw.com",15],["figurehunter.net",15],["luscious.net",16],["starkroboticsfrc.com",17],["sinonimos.de",17],["antonimos.de",17],["quesignifi.ca",17],["tiktokrealtime.com",17],["tiktokcounter.net",17],["tpayr.xyz",17],["poqzn.xyz",17],["ashrfd.xyz",17],["rezsx.xyz",17],["tryzt.xyz",17],["ashrff.xyz",17],["rezst.xyz",17],["dawenet.com",17],["erzar.xyz",17],["waezm.xyz",17],["waezg.xyz",17],["blackwoodacademy.org",17],["cryptednews.space",17],["vivuq.com",17],["swgop.com",17],["vbnmll.com",17],["telcoinfo.online",17],["dshytb.com",17],["quins.us",17],["mdn.lol",18],["bitcotasks.com",18],["btcbitco.in",19],["btcsatoshi.net",19],["cempakajaya.com",19],["crypto4yu.com",19],["gainl.ink",19],["readbitcoin.org",19],["wiour.com",19],["senda.pl",20],["tvi.la",22],["iir.la",22],["tii.la",22],["ckk.ai",22],["oei.la",22],["lnbz.la",22],["oii.la",22],["tpi.li",22],["tutorialsaya.com",0],["exactpay.online",23],["filesupload.in",24],["hindustantimes.com",24],["indiainfo4u.in",25],["camarchive.tv",26],["ctrlv.*",27],["scrolller.com",27],["journaldemontreal.com",27],["tvanouvelles.ca",27],["vods.tv",27],["atresplayer.com",27],["assettoworld.com",27],["vtmgo.be",27],["zerioncc.pl",27],["tradingview.com",27],["estudyme.com",27],["jobfound.org",27],["abs-cbn.com",27],["sussytoons.*",27],["moovitapp.com",27],["servustv.com",27],["missavtv.com",27],["flixbaba.com",27],["formatlibrary.com",27],["independent.co.uk",27],["wunderground.com",27],["cybermania.ws",28],["fapdrop.com",28],["linkpoi.me",29],["platform.adex.network",30],["watch.plex.tv",31],["simplebits.io",32],["tvnz.co.nz",33],["timesnowhindi.com",34],["timesnowmarathi.com",34],["timesofindia.com",34],["1cloudfile.com",36],["weszlo.com",37],["wyze.com",38],["superpsx.com",39],["hunterscomics.com",39],["tuktukcinma.com",39],["yomucomics.com",39],["mmorpg.org.pl",40],["rule34porn.net",41],["crunchyscan.fr",42],["firmwarex.net",43],["dongknows.com",44],["forsal.pl",45],["photopea.com",46],["2the.space",47],["freeshib.biz",48],["theappstore.org",49],["dogdrip.net",[50,114]],["deutschekanale.com",51],["soranews24.com",52],["ipalibrary.me",53],["ipacrack.com",54],["bravedown.com",55],["smartkhabrinews.com",56],["freepik-downloader.com",57],["freepic-downloader.com",57],["envato-downloader.com",57],["ortograf.pl",58],["mixrootmod.com",60],["explorecams.com",61],["southpark.*",62],["southparkstudios.*",62],["money.bg",63],["realmadryt.pl",63],["ruidrive.com",63],["poophd.video-src.com",63],["myesports.gg",63],["getthit.com",64],["intro-hd.net",65],["souq-design.com",65],["sonixgvn.net",66],["everand.com",67],["workink.click",68],["work.ink",69],["u.co.uk",70],["uktvplay.co.uk",70],["uktvplay.uktv.co.uk",70],["jpopsingles.eu",71],["hentaihaven.xxx",72],["imasdk.googleapis.com",73],["botrix.live",74],["gunauc.net",75],["buffsports.me",76],["lemino.docomo.ne.jp",77],["soccerinhd.com",78],["kfc.com",79],["crazygames.com",80],["freeshot.live",81],["plustream.com",82],["online-filmek.ac",83],["hancinema.net",84],["javfc2.xyz",85],["textreverse.com",86],["flaticon.com",87],["shahid.mbc.net",[88,105]],["tab-maker.com",89],["faceittracker.net",90],["fmovies0.cc",91],["nikke.win",92],["stream.offidocs.com",93],["sport.es",94],["zone.msn.com",95],["search.brave.com",96],["coursera.org",97],["nytimes.com",98],["blog.cloudflare.com",99],["www.cloudflare.com",99],["notion.so",100],["olympics.com",101],["ceramic.or.kr",102],["pandadoc.com",104],["smallpdf.com",106],["chatgpt.com",[107,108]],["pimylifeup.com",109],["seazon.fr",110],["html5.gamedistribution.com",111],["premio.io",112],["flygbussarna.se",113],["infinityfree.com",114],["smsonline.cloud",114],["nicovideo.jp",115]]);
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
    try { noFetchIf(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
