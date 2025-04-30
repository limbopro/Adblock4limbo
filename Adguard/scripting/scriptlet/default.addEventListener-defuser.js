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
(function uBOL_addEventListenerDefuser() {

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( targetSelector === 'window' ) { return elem === window; }
        if ( targetSelector === 'document' ) { return elem === document; }
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        // https://github.com/uBlockOrigin/uAssets/discussions/17907#discussioncomment-9871079
        const id = String(elem.id);
        if ( id !== '' ) { parts.push(`#${CSS.escape(id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // eslint-disable-line no-debugger
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    const proxyFn = function(context) {
        const { callArgs, thisArg } = context;
        let t, h;
        try {
            t = String(callArgs[0]);
            if ( typeof callArgs[1] === 'function' ) {
                h = String(safe.Function_toString(callArgs[1]));
            } else if ( typeof callArgs[1] === 'object' && callArgs[1] !== null ) {
                if ( typeof callArgs[1].handleEvent === 'function' ) {
                    h = String(safe.Function_toString(callArgs[1].handleEvent));
                }
            } else {
                h = String(callArgs[1]);
            }
        } catch {
        }
        if ( type === '' && pattern === '' ) {
            safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
        } else if ( shouldPrevent(thisArg, t, h) ) {
            return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
        }
        return context.reflect();
    };
    runAt(( ) => {
        proxyApplyFn('EventTarget.prototype.addEventListener', proxyFn);
        proxyApplyFn('document.addEventListener', proxyFn);
    }, extraArgs.runAt);
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

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( Object.hasOwn(targets, prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["/^(?:click|mousedown)$/","_0x"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["","focus"],["error","blocker"],["load","error-report.com"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","","elements","a#dlink"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","anchor.href"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["/keydown|scroll|touchmove|touchstart|wheel/","function(_0x"],["","Adb"]];
const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["kingofdown.com",5],["radiotormentamx.com",5],["limetorrents.*",[5,9]],["king-pes.*",5],["quelleestladifference.fr",5],["depedlps.*",5],["otakuworldsite.blogspot.com",5],["ad-itech.blogspot.com",5],["komikcast.*",5],["unlockapk.com",5],["mobdi3ips.com",5],["socks24.org",5],["idedroidsafelink.*",5],["links-url.*",5],["interviewgig.com",5],["javaguides.net",5],["almohtarif-tech.net",5],["forum.release-apk.com",5],["devoloperxda.blogspot.com",5],["zwergenstadt.com",5],["primedeportes.es",5],["upxin.net",5],["ciudadblogger.com",5],["ke-1.com",5],["secretsdeepweb.blogspot.com",5],["bit-shares.com",5],["itdmusics.com",5],["aspdotnet-suresh.com",5],["tudo-para-android.com",5],["urdulibrarypk.blogspot.com",5],["zerotopay.com",5],["ak4eg.*",5],["akw.to",5],["mawsueaa.com",5],["hesgoal-live.io",5],["king-shoot.io",5],["9goals.live",5],["streanplay.*",6],["steanplay.*",6],["bibme.org",7],["citationmachine.net",7],["easybib.com",8],["pahe.*",9],["yts.*",9],["tube8.*",9],["topeuropix.*",9],["vermangasporno.com",9],["moviescounter.*",9],["imgtorrnt.in",9],["picbaron.com",[9,111]],["torrent9.*",9],["desiremovies.*",9],["letmejerk.com",9],["letmejerk2.com",9],["letmejerk3.com",9],["letmejerk4.com",9],["letmejerk5.com",9],["letmejerk6.com",9],["letmejerk7.com",9],["movs4u.*",9],["uwatchfree.*",9],["hydrax.*",9],["4movierulz.*",9],["projectfreetv.*",9],["arabseed.*",9],["btdb.*",[9,48]],["dlapk4all.com",9],["kropic.com",9],["kvador.com",9],["pdfindir.net",9],["brstej.com",9],["topwwnews.com",9],["xsanime.com",9],["vidlo.us",9],["youx.xxx",9],["world4ufree.*",9],["animeindo.asia",9],["streamsport.*",9],["rojadirectatvhd.*",9],["userload.*",9],["adclickersbot.com",9],["badtaste.it",10],["adyou.*",11],["gotporn.com",12],["freepornrocks.com",12],["tvhai.org",12],["realgfporn.com",[13,14]],["fxporn69.*",13],["thisvid.com",14],["xvideos-downloader.net",14],["imgspice.com",15],["vikiporn.com",16],["tnaflix.com",16],["pornomico.com",16],["hentai2w.com",[16,126]],["yourlust.com",16],["hd-easyporn.com",16],["hotpornfile.org",16],["watchfreexxx.net",16],["vintageporntubes.com",16],["angelgals.com",16],["babesexy.com",16],["hentaihere.com",16],["ganstamovies.com",16],["youngleak.com",16],["jizzberry.com",16],["porndollz.com",16],["xnxxvideo.pro",16],["xvideosxporn.com",16],["filmpornofrancais.fr",16],["pictoa.com",[16,40]],["pornohirsch.net",16],["herzporno.*",16],["deinesexfilme.com",16],["einfachtitten.com",16],["halloporno.*",16],["lesbenhd.com",16],["milffabrik.com",16],["porn-monkey.com",16],["porndrake.com",16],["pornhubdeutsch.net",16],["pornoaffe.com",16],["pornodavid.com",16],["pornoente.tv",16],["pornofisch.com",16],["pornofelix.com",16],["pornohammer.com",16],["pornohelm.com",16],["pornoklinge.com",16],["pornotom.com",16],["pornotommy.com",16],["pornovideos-hd.com",16],["pornozebra.com",16],["xhamsterdeutsch.xyz",16],["xnxx-sexfilme.com",16],["youlikeboys.com",16],["adultasianporn.com",16],["nsfwmonster.com",16],["girlsofdesire.org",16],["gaytail.com",16],["fetish-bb.com",16],["rumporn.com",16],["soyoungteens.com",16],["zubby.com",16],["lesbian8.com",16],["gayforfans.com",16],["reifporn.de",16],["javtsunami.com",16],["18tube.sex",16],["xxxextreme.org",16],["amateurs-fuck.com",16],["sex-amateur-clips.com",16],["hentaiworld.tv",16],["dads-banging-teens.com",16],["home-xxx-videos.com",16],["mature-chicks.com",16],["hqbang.com",16],["darknessporn.com",16],["familyporner.com",16],["freepublicporn.com",16],["pisshamster.com",16],["punishworld.com",16],["xanimu.com",16],["tubator.com",16],["pornhd.com",17],["cnnamador.com",[17,28]],["cle0desktop.blogspot.com",17],["turkanime.co",17],["rexporn.*",17],["movies07.*",17],["camclips.tv",[17,41]],["blackpornhq.com",17],["xsexpics.com",17],["ulsex.net",17],["wannafreeporn.com",17],["ytube2dl.com",17],["pornocomics.*",17],["multiup.us",17],["protege-torrent.com",17],["pussyspace.com",[18,19]],["pussyspace.net",[18,19]],["empflix.com",20],["cpmlink.net",21],["bdsmstreak.com",21],["cutpaid.com",21],["pornforrelax.com",21],["fatwhitebutt.com",21],["pornomoll.*",21],["short.pe",22],["gsurl.*",22],["pinsystem.co.uk",23],["ancensored.com",23],["ganool.*",23],["mp3fiber.com",[23,24]],["xrivonet.info",23],["pirate.*",23],["piratebay.*",23],["pirateproxy.*",23],["proxytpb.*",23],["thepiratebay.*",23],["totaldebrid.org",24],["freecoursesonline.*",24],["lordpremium.*",24],["schrauben-normen.de",24],["avengerinator.blogspot.com",24],["novablogitalia.*",24],["link-to.net",24],["hanimesubth.com",24],["gsmturkey.net",24],["anisubindo.*",24],["adshrink.it",24],["presentation-ppt.com",24],["mangacanblog.com",24],["pekalongan-cits.blogspot.com",24],["4tymode.win",24],["linkvertise.com",24],["reifenrechner.at",24],["tire-size-calculator.info",24],["linuxsecurity.com",24],["itsguider.com",24],["cotravinh.blogspot.com",24],["itudong.com",24],["shortx.net",24],["btvsports.*",24],["lecturel.com",24],["bakai.org",24],["nar.k-ba.net",24],["eurotruck2.com.br",24],["tiroalpaloes.com",24],["stream4free.*",24],["tiroalpaloes.net",24],["flixsix.com",24],["tiroalpaloweb.xyz",24],["mimaletadepeliculas.*",25],["bs.to",26],["burningseries.*",26],["efukt.com",26],["dz4soft.*",27],["generacionretro.net",27],["nuevos-mu.ucoz.com",27],["micloudfiles.com",27],["yoututosjeff.*",27],["ebookmed.*",27],["lanjutkeun.*",27],["mimaletamusical.blogspot.com",27],["novelasesp.*",27],["visionias.net",27],["singingdalong.*",27],["b3infoarena.in",27],["lurdchinexgist.blogspot.com",27],["thefreedommatrix.blogspot.com",27],["hentai-vl.blogspot.com",27],["projetomotog.blogspot.com",27],["ktmx.pro",27],["lirik3satu.blogspot.com",27],["marketmovers.it",27],["pharmaguideline.com",27],["safemaru.blogspot.com",27],["mixloads.com",27],["mangaromance.eu",27],["interssh.com",27],["freesoftpdfdownload.blogspot.com",27],["cirokun.blogspot.com",27],["myadslink.com",27],["blackavelic.com",27],["doujindesu.*",27],["server.satunivers.tv",27],["eg-akw.com",27],["xn--mgba7fjn.cc",27],["flashingjungle.com",28],["ma-x.org",29],["lavozdegalicia.es",29],["ddwloclawek.pl",29],["ki24.info",29],["xmovies8.*",30],["xmovies08.org",31],["globaldjmix.com",32],["desiupload.*",[33,139]],["hblinks.pro",33],["hubcdn.vip",33],["hubdrive.*",33],["90fpsconfig.in",33],["katdrive.link",33],["kmhd.net",33],["bollydrive.rest",33],["360news4u.net",33],["hypershort.com",[33,124]],["bollydrive.*",[33,141]],["zazzybabes.com",34],["haaretz.co.il",35],["haaretz.com",35],["slate.com",36],["megalinks.info",37],["megapastes.com",37],["mega-mkv.com",[37,38]],["mkv-pastes.com",37],["zpaste.net",37],["zlpaste.net",37],["9xlinks.site",37],["mega-dvdrip.*",38],["peliculas-dvdrip.*",38],["zona-leros.net",38],["desbloqueador.*",39],["cine.to",[40,182]],["newpelis.*",[40,46]],["pelix.*",[40,46]],["allcalidad.*",[40,126]],["khatrimaza.*",40],["kissasia.cc",40],["camwhores.*",41],["camwhorestv.*",41],["digjav.com",41],["uproxy.*",41],["videoszoofiliahd.com",42],["xxxtubezoo.com",43],["zooredtube.com",43],["uii.io",44],["porndoe.com",45],["acienciasgalilei.com",47],["playrust.io",48],["payskip.org",49],["short-url.link",50],["tubedupe.com",51],["mirrorace.*",52],["fatgirlskinny.net",53],["polska-ie.com",53],["windowsmatters.com",53],["canaltdt.es",54],["masbrooo.com",54],["2ndrun.tv",54],["oncehelp.com",55],["curto.win",55],["smallseotools.com",56],["mixdrp.*",57],["macwelt.de",58],["pcwelt.de",58],["capital.de",58],["geo.de",58],["allmomsex.com",59],["allnewindianporn.com",59],["analxxxvideo.com",59],["animalextremesex.com",59],["anime3d.xyz",59],["animefuckmovies.com",59],["animepornfilm.com",59],["animesexbar.com",59],["animesexclip.com",59],["animexxxsex.com",59],["animexxxfilms.com",59],["anysex.club",59],["apetube.asia",59],["asianfuckmovies.com",59],["asianfucktube.com",59],["asianporn.sexy",59],["asiansex.*",59],["asiansexcilps.com",59],["beeg.fund",59],["beegvideoz.com",59],["bestasiansex.pro",59],["bravotube.asia",59],["brutalanimalsfuck.com",59],["candyteenporn.com",59],["daddyfuckmovies.com",59],["desifuckonline.com",59],["exclusiveasianporn.com",59],["exteenporn.com",59],["fantasticporn.net",59],["fantasticyoungporn.com",59],["fineasiansex.com",59],["firstasianpussy.com",59],["freeindiansextube.com",59],["freepornasians.com",59],["freerealvideo.com",59],["fuck-beeg.com",59],["fuck-xnxx.com",59],["fuckasian.pro",59],["fuckfuq.com",59],["fuckundies.com",59],["gojapaneseporn.com",59],["golderotica.com",59],["goodyoungsex.com",59],["goyoungporn.com",59],["hardxxxmoms.com",59],["hdvintagetube.com",59],["hentaiporn.me",59],["hentaisexfilms.com",59],["hentaisexuality.com",59],["hot-teens-movies.mobi",59],["hotanimepornvideos.com",59],["hotanimevideos.com",59],["hotasianpussysex.com",59],["hotjapaneseshows.com",59],["hotmaturetube.com",59],["hotmilfs.pro",59],["hotorientalporn.com",59],["hotpornyoung.com",59],["hotxxxjapanese.com",59],["hotxxxpussy.com",59],["indiafree.net",59],["indianpornvideo.online",59],["japanfuck.*",59],["japanporn.*",59],["japanpornclip.com",59],["japanesetube.video",59],["japansex.me",59],["japanesexxxporn.com",59],["japansporno.com",59],["japanxxx.asia",59],["japanxxxworld.com",59],["keezmovies.surf",59],["lingeriefuckvideo.com",59],["liveanimalporn.zooo.club",59],["madhentaitube.com",59],["megahentaitube.com",59],["megajapanesesex.com",59],["megajapantube.com",59],["milfxxxpussy.com",59],["momsextube.pro",59],["momxxxass.com",59],["monkeyanimalporn.com",59],["moviexxx.mobi",59],["newanimeporn.com",59],["newjapanesexxx.com",59],["nicematureporn.com",59],["nudeplayboygirls.com",59],["openxxxporn.com",59],["originalindianporn.com",59],["originalteentube.com",59],["pig-fuck.com",59],["plainasianporn.com",59],["popularasianxxx.com",59],["pornanimetube.com",59],["pornasians.pro",59],["pornhat.asia",59],["pornjapanesesex.com",59],["pornomovies.asia",59],["pornvintage.tv",59],["primeanimesex.com",59],["realjapansex.com",59],["realmomsex.com",59],["redsexhub.com",59],["retroporn.world",59],["retrosexfilms.com",59],["sex-free-movies.com",59],["sexanimesex.com",59],["sexanimetube.com",59],["sexjapantube.com",59],["sexmomvideos.com",59],["sexteenxxxtube.com",59],["sexxxanimal.com",59],["sexyoungtube.com",59],["sexyvintageporn.com",59],["sopornmovies.com",59],["spicyvintageporn.com",59],["sunporno.club",59],["tabooanime.club",59],["teenextrem.com",59],["teenfucksex.com",59],["teenhost.net",59],["teensex.*",59],["teensexass.com",59],["tnaflix.asia",59],["totalfuckmovies.com",59],["totalmaturefuck.com",59],["txxx.asia",59],["vintagetube.*",59],["voyeurpornsex.com",59],["warmteensex.com",59],["wetasiancreampie.com",59],["wildhentaitube.com",59],["wowyoungsex.com",59],["xhamster-art.com",59],["xmovie.pro",59],["xnudevideos.com",59],["xnxxjapon.com",59],["xpics.me",59],["xvide.me",59],["xxxanimefuck.com",59],["xxxanimevideos.com",59],["xxxanimemovies.com",59],["xxxhentaimovies.com",59],["xxxhothub.com",59],["xxxjapaneseporntube.com",59],["xxxlargeporn.com",59],["xxxmomz.com",59],["xxxmovies.*",59],["xxxpornmilf.com",59],["xxxpussyclips.com",59],["xxxpussysextube.com",59],["xxxretrofuck.com",59],["xxxsex.pro",59],["xxxsexyjapanese.com",59],["xxxteenyporn.com",59],["xxxvideo.asia",59],["xxxvideos.ink",59],["xxxyoungtv.com",59],["youjizzz.club",59],["youngpussyfuck.com",59],["bayimg.com",60],["celeb.gate.cc",61],["kinoger.re",62],["usersdrive.com",62],["desi.upn.bio",62],["zooqle.*",63],["masterplayer.xyz",64],["pussy-hub.com",64],["porndex.com",65],["compucalitv.com",66],["hdfull.*",67],["diariodenavarra.es",68],["mangamanga.*",69],["streameast.*",70],["thestreameast.*",70],["pennlive.com",71],["beautypageants.indiatimes.com",72],["01fmovies.com",73],["vev.*",74],["vidop.*",74],["lnk2.cc",75],["fullhdxxx.com",76],["luscious.net",[76,111]],["classicpornbest.com",76],["www-daftarharga.blogspot.com",[76,130]],["1youngteenporn.com",76],["miraculous.to",[76,174]],["vtube.to",76],["zone-telechargement.*",76],["xstory-fr.com",76],["1337x.*",76],["x1337x.*",76],["gosexpod.com",77],["tubepornclassic.com",78],["shemalez.com",78],["otakukan.com",79],["xcafe.com",80],["pornfd.com",80],["venusarchives.com",80],["imagehaha.com",81],["imagenpic.com",81],["imageshimage.com",81],["imagetwist.com",81],["megalink.*",82],["k1nk.co",82],["watchasians.cc",82],["lulustream.com",82],["luluvdo.com",82],["gmx.*",83],["web.de",83],["news18.com",84],["thelanb.com",85],["dropmms.com",85],["softwaredescargas.com",86],["cracking-dz.com",87],["mega1080p.*",88],["anitube.*",88],["gazzetta.it",89],["9hentai.*",90],["port.hu",91],["dziennikbaltycki.pl",92],["dzienniklodzki.pl",92],["dziennikpolski24.pl",92],["dziennikzachodni.pl",92],["echodnia.eu",92],["expressbydgoski.pl",92],["expressilustrowany.pl",92],["gazetakrakowska.pl",92],["gazetalubuska.pl",92],["gazetawroclawska.pl",92],["gk24.pl",92],["gloswielkopolski.pl",92],["gol24.pl",92],["gp24.pl",92],["gra.pl",92],["gs24.pl",92],["kurierlubelski.pl",92],["motofakty.pl",92],["naszemiasto.pl",92],["nowiny24.pl",92],["nowosci.com.pl",92],["nto.pl",92],["polskatimes.pl",92],["pomorska.pl",92],["poranny.pl",92],["sportowy24.pl",92],["strefaagro.pl",92],["strefabiznesu.pl",92],["stronakobiet.pl",92],["telemagazyn.pl",92],["to.com.pl",92],["wspolczesna.pl",92],["course9x.com",92],["courseclub.me",92],["azrom.net",92],["alttyab.net",92],["esopress.com",92],["nesiaku.my.id",92],["onemanhua.com",93],["freeindianporn.mobi",93],["dr-farfar.com",94],["boyfriendtv.com",95],["brandstofprijzen.info",96],["netfuck.net",97],["gaypornhdfree.*",97],["blog24.me",[97,104]],["kisahdunia.com",97],["cinemakottaga.*",97],["privatemoviez.*",97],["nulljungle.com",97],["oyuncusoruyor.com",97],["pbarecap.ph",97],["sourds.net",97],["teknobalta.com",97],["tvinternetowa.info",97],["sqlserveregitimleri.com",97],["tutcourse.com",97],["readytechflip.com",97],["warddogs.com",97],["dvdgayporn.com",97],["iimanga.com",97],["tinhocdongthap.com",97],["tremamnon.com",97],["423down.com",97],["brizzynovel.com",97],["jugomobile.com",97],["freecodezilla.net",97],["apkmaven.*",97],["iconmonstr.com",97],["gay-tubes.cc",97],["rbxscripts.net",97],["comentariodetexto.com",97],["wordpredia.com",97],["allfaucet.xyz",[97,104]],["titbytz.tk",97],["replica-watch.info",97],["alludemycourses.com",97],["kayifamilytv.com",97],["interfans.org",97],["iir.ai",98],["popcornstream.*",99],["qpython.club",100],["antifake-funko.fr",100],["dktechnicalmate.com",100],["recipahi.com",100],["e9china.net",101],["ontools.net",101],["marketbeat.com",102],["hentaipornpics.net",103],["ohionowcast.info",104],["wiour.com",104],["bitzite.com",[104,109,110]],["appsbull.com",104],["diudemy.com",104],["maqal360.com",[104,112,113]],["bitcotasks.com",104],["videolyrics.in",104],["manofadan.com",104],["cempakajaya.com",104],["tagecoin.com",104],["naijafav.top",104],["ourcoincash.xyz",104],["claimcoins.site",104],["cryptosh.pro",104],["eftacrypto.com",104],["fescrypto.com",104],["earnhub.net",104],["kiddyshort.com",104],["tronxminer.com",104],["neverdims.com",104],["homeairquality.org",105],["cety.app",[106,107]],["exego.app",106],["cutlink.net",106],["cutsy.net",106],["cutyurls.com",106],["cutty.app",106],["cutnet.net",106],["jixo.online",106],["cuty.me",107],["exnion.com",107],["upfion.com",[107,123]],["upfiles.app",[107,123]],["upfiles-urls.com",[107,123]],["vikingf1le.us.to",107],["gamerxyt.com",107],["up4stream.com",107],["ups2up.fun",107],["adcrypto.net",108],["admediaflex.com",108],["aduzz.com",108],["bitcrypto.info",108],["cdrab.com",108],["datacheap.io",108],["hbz.us",108],["savego.org",108],["owsafe.com",108],["sportweb.info",108],["gfx-station.com",109],["buzzheavier.com",110],["flashbang.sh",110],["trashbytes.net",110],["aiimgvlog.fun",111],["6indianporn.com",111],["amateurebonypics.com",111],["amateuryoungpics.com",111],["amigosporn.top",111],["cinemabg.net",111],["coomer.su",111],["desimmshd.com",111],["everia.club",111],["frauporno.com",111],["givemeaporn.com",111],["hitomi.la",111],["jav-asia.top",111],["javf.net",111],["javfull.net",111],["javideo.net",111],["javsunday.com",111],["kemono.su",111],["kr18plus.com",111],["missavtv.com",111],["pilibook.com",111],["pornborne.com",111],["porngrey.com",111],["pornktube.*",111],["pornx.tube",111],["qqxnxx.com",111],["sexvideos.host",111],["submilf.com",111],["subtaboo.com",111],["tktube.com",111],["watchseries.*",111],["xfrenchies.com",111],["soft98.ir",[112,141]],["moderngyan.com",114],["sattakingcharts.in",114],["freshbhojpuri.com",114],["bgmi32bitapk.in",114],["bankshiksha.in",114],["earn.mpscstudyhub.com",114],["earn.quotesopia.com",114],["money.quotesopia.com",114],["best-mobilegames.com",114],["learn.moderngyan.com",114],["bharatsarkarijobalert.com",114],["quotesopia.com",114],["creditsgoal.com",114],["coingraph.us",115],["momo-net.com",115],["milfnut.*",115],["maxgaming.fi",115],["cybercityhelp.in",116],["travel.vebma.com",117],["cloud.majalahhewan.com",117],["crm.cekresi.me",117],["ai.tempatwisata.pro",117],["pinloker.com",117],["sekilastekno.com",117],["mrproblogger.com",118],["themezon.net",118],["dagensnytt.com",118],["azmath.info",119],["azsoft.*",119],["downfile.site",119],["downphanmem.com",119],["expertvn.com",119],["memangbau.com",119],["trangchu.news",119],["aztravels.net",119],["ielts-isa.edu.vn",119],["techedubyte.com",[119,226]],["jpopsingles.eu",119],["aipebel.com",119],["link.paid4link.com",[120,121]],["driveup.sbs",122],["apimate.net",122],["dynamicminister.net",122],["gofirmware.com",122],["national-park.com",122],["forgee.xyz",122],["gamehub.cam",122],["cutyion.com",123],["weshare.is",125],["file.gocmod.com",125],["camarchive.tv",126],["crownimg.com",126],["freejav.guru",126],["gntai.*",126],["grantorrent.*",126],["hentai2read.com",126],["icyporno.com",126],["illink.net",126],["javtiful.com",126],["m-hentai.net",126],["mejortorrent.*",126],["mejortorrento.*",126],["mejortorrents.*",126],["mejortorrents1.*",126],["mejortorrentt.*",126],["pornblade.com",126],["pornfelix.com",126],["pornxxxxtube.net",126],["redwap.me",126],["redwap2.com",126],["redwap3.com",126],["sunporno.com",126],["tubxporn.xxx",126],["ver-comics-porno.com",126],["ver-mangas-porno.com",126],["xanimeporn.com",126],["xxxvideohd.net",126],["zetporn.com",126],["simpcity.su",127],["gameofporn.com",128],["0dramacool.net",129],["0gomovie.*",129],["0gomovies.*",129],["185.53.88.104",129],["185.53.88.204",129],["185.53.88.15",129],["123moviefree.*",129],["123movies4k.net",129],["1kmovies.*",129],["1madrasdub.*",129],["1primewire.*",129],["1rowsports.com",129],["2embed.*",129],["2madrasdub.*",129],["2umovies.*",129],["4anime.*",129],["4share-mp3.net",129],["9animetv.to",129],["720pstream.me",129],["aagmaal.com",129],["abysscdn.com",129],["adblockplustape.*",129],["ajkalerbarta.com",129],["altadefinizione01.*",129],["androidapks.biz",129],["androidsite.net",129],["animeonlinefree.org",129],["animesite.net",129],["animespank.com",129],["aniworld.to",129],["apkmody.io",129],["appsfree4u.com",129],["atomixhq.*",129],["audioz.download",129],["awafim.tv",129],["bdnewszh.com",129],["beastlyprints.com",129],["beinmatch.*",129],["bengalisite.com",129],["bestfullmoviesinhd.org",129],["betteranime.net",129],["blacktiesports.live",129],["brmovies.*",129],["buffsports.stream",129],["ch-play.com",129],["cima4u.*",129],["clickforhire.com",129],["clicknupload.*",129],["cloudy.pk",129],["cmovies.*",129],["computercrack.com",129],["coolcast2.com",129],["crackedsoftware.biz",129],["crackfree.org",129],["cracksite.info",129],["cricfree.*",129],["crichd.*",129],["cryptoblog24.info",129],["cuatrolatastv.blogspot.com",129],["cydiasources.net",129],["decmelfot.xyz",129],["dirproxy.com",129],["dood.*",129],["dopebox.to",129],["downloadapk.info",129],["downloadapps.info",129],["downloadgames.info",129],["downloadmusic.info",129],["downloadsite.org",129],["downloadwella.com",129],["ebooksite.org",129],["educationtips213.blogspot.com",129],["egyup.live",129],["elgoles.pro",129],["embed.meomeo.pw",129],["embed.scdn.to",129],["emulatorsite.com",129],["essaysharkwriting.club",129],["exploreera.net",129],["extrafreetv.com",129],["f1stream.*",129],["fakedetail.com",129],["faselhd.*",129],["fbstream.*",129],["fclecteur.com",129],["filemoon.*",129],["filepress.*",[129,209]],["files.im",129],["filmlinks4u.*",129],["filmpertutti.*",129],["filmyzilla.*",129],["flexyhit.com",129],["fmoviefree.net",129],["fmovies24.com",129],["fmovies.*",129],["freeflix.info",129],["freemoviesu4.com",129],["freeplayervideo.com",129],["freesoccer.net",129],["french-stream.*",129],["fseries.org",129],["fzlink.*",129],["gamefast.org",129],["gamesite.info",129],["gettapeads.com",129],["gmanga.me",129],["gocast123.me",129],["gofilms4u.*",129],["gogoanime.*",129],["gogohd.net",129],["gogoplay5.com",129],["gomoviz.*",129],["gooplay.net",129],["gostreamon.net",129],["happy2hub.org",129],["harimanga.com",129],["hdmoviefair.*",129],["hdmovies4u.*",129],["hdmovies50.*",129],["hdmoviesfair.*",129],["healthnewsreel.com",129],["hexupload.net",129],["hh3dhay.*",129],["hinatasoul.com",129],["hindilinks4u.*",129],["hindisite.net",129],["holymanga.net",129],["hotmasti.*",129],["hurawatch.*",129],["hxfile.co",129],["isosite.org",129],["iv-soft.com",129],["januflix.expert",129],["jewelry.com.my",129],["johnwardflighttraining.com",129],["kabarportal.com",129],["klmanga.*",129],["klubsports.*",129],["kstorymedia.com",129],["la123movies.org",129],["lespassionsdechinouk.com",129],["libertestreamvf.*",129],["lilymanga.net",129],["linksdegrupos.com.br",129],["linkz.wiki",129],["livetvon.*",129],["livestreamtv.pk",129],["macsite.info",129],["manga1000.*",129],["manga1001.*",129],["mangaraw.*",129],["mangarawjp.*",129],["mangasite.org",129],["manhuascan.com",129],["megamovies.org",129],["membed.net",129],["mlbstream.*",129],["moddroid.com",129],["motogpstream.*",129],["movi.pk",[129,150]],["moviefree2.com",129],["movierulz.*",129],["movies123.*",129],["movies-watch.com.pk",129],["movies2watch.*",129],["moviesden.*",129],["moviesite.app",129],["moviesonline.fm",129],["moviesx.org",129],["moviezaddiction.*",129],["msmoviesbd.com",129],["musicsite.biz",129],["myfernweh.com",129],["myviid.com",129],["nazarickol.com",129],["nbastream.*",129],["netcine.*",129],["nflstream.*",129],["nhlstream.*",129],["noob4cast.com",129],["nsw2u.com",[129,269]],["oko.sh",129],["onlinewatchmoviespk.*",129],["orangeink.pk",129],["pahaplayers.click",129],["patchsite.net",129],["pctfenix.*",129],["pctnew.*",129],["pdfsite.net",129],["pksmovies.*",129],["play1002.com",129],["player-cdn.com",129],["plyjam.*",129],["plylive.*",129],["pogolinks.*",129],["popcorntime.*",129],["poscitech.*",129],["productkeysite.com",129],["projectfreetv.one",129],["romsite.org",129],["rufiguta.com",129],["rugbystreams.*",129],["rytmp3.io",129],["send.cm",129],["seriesite.net",129],["seriezloaded.com.ng",129],["serijehaha.com",129],["shahed4u.*",129],["sflix.*",129],["shrugemojis.com",129],["siteapk.net",129],["siteflix.org",129],["sitegames.net",129],["sitekeys.net",129],["sitepdf.com",129],["sitesunblocked.*",129],["sitetorrent.com",129],["softwaresite.net",129],["solarmovies.*",129],["sportbar.live",129],["sportcast.*",129],["sportskart.*",129],["sports-stream.*",129],["ssyoutube.com",129],["stardima.com",129],["stream4free.live",129],["streaming-french.*",129],["streamers.*",129],["streamingcommunity.*",[129,192]],["superapk.org",129],["supermovies.org",129],["t20cup.*",129],["tainio-mania.online",129],["talaba.su",129],["tamilguns.org",129],["tatabrada.tv",129],["techtrendmakers.com",129],["tennisstreams.*",129],["thememypc.net",129],["thripy.com",129],["torrentdosfilmes.*",129],["toonanime.*",129],["travelplanspro.com",129],["turcasmania.com",129],["tusfiles.com",129],["tvonlinesports.com",129],["tvply.*",129],["ufcstream.*",129],["ultramovies.org",129],["uploadbank.com",129],["uptomega.*",129],["uqload.*",129],["urdubolo.pk",129],["vudeo.*",129],["vidoo.*",129],["vidspeeds.com",129],["vipboxtv.*",129],["viprow.*",129],["warezsite.net",129],["watchmovies2.com",129],["watchmoviesforfree.org",129],["watchofree.com",129],["watchsite.net",129],["watchsouthpark.tv",129],["watchtvch.club",129],["web.livecricket.is",129],["webseries.club",129],["worldcupstream.pm",129],["y2mate.com",129],["yesmovies.*",129],["yomovies.*",129],["yomovies1.*",129],["youapk.net",129],["youtube4kdownloader.com",129],["yt2mp3s.*",129],["yts-subs.com",129],["kat.*",129],["katbay.*",129],["kickass.*",129],["kickasshydra.*",129],["kickasskat.*",129],["kickass2.*",129],["kickasstorrents.*",129],["kat2.*",129],["kattracker.*",129],["thekat.*",129],["thekickass.*",129],["kickassz.*",129],["kickasstorrents2.*",129],["topkickass.*",129],["kickassgo.*",129],["kkickass.*",129],["kkat.*",129],["kickasst.*",129],["kick4ss.*",129],["androidpolice.com",131],["cbr.com",131],["gamerant.com",131],["howtogeek.com",131],["thegamer.com",131],["winfuture.de",132],["flight-report.com",133],["vulture.com",134],["megaplayer.bokracdn.run",135],["hentaistream.com",136],["siteunblocked.info",137],["larvelfaucet.com",138],["feyorra.top",138],["claimtrx.com",138],["pagalmovies.*",139],["7starhd.*",139],["jalshamoviez.*",139],["moviesyug.net",139],["9xupload.*",139],["bdupload.*",139],["rdxhd1.*",139],["parispi.net",140],["hentaicloud.com",141],["nuvid.*",141],["tio.ch",142],["lavanguardia.com",142],["tu.no",142],["paperzonevn.com",143],["dailyvideoreports.net",144],["lewd.ninja",145],["systemnews24.com",146],["incestvidz.com",147],["niusdiario.es",148],["playporngames.com",149],["javx.*",149],["moviessources.*",151],["cutesexyteengirls.com",152],["haho.moe",153],["nicy-spicy.pw",154],["novelmultiverse.com",155],["mylegalporno.com",156],["embedsports.me",157],["embedstream.me",157],["jumbtv.com",157],["reliabletv.me",157],["guardaserie.*",158],["cine-calidad.*",159],["xnxx.com",160],["xvideos.*",160],["thecut.com",161],["novelism.jp",162],["alphapolis.co.jp",163],["game3rb.com",164],["javhub.net",164],["thotvids.com",165],["berklee.edu",166],["rawkuma.com",[167,168]],["moviesjoyhd.to",168],["cineb.rs",168],["imeteo.sk",169],["youtubemp3donusturucu.net",170],["videovard.*",171],["cluset.com",172],["homemoviestube.com",172],["sexseeimage.com",172],["alueviesti.fi",173],["kiuruvesilehti.fi",173],["lempaala.ideapark.fi",173],["olutposti.fi",173],["urjalansanomat.fi",173],["tainhanhvn.com",175],["titantv.com",176],["3cinfo.net",177],["cocomanga.com",178],["animelatinohd.com",178],["sampledrive.in",179],["sportnews.to",179],["soccershoes.blog",179],["shineads.*",179],["mcleaks.net",180],["explorecams.com",180],["minecraft.buzz",180],["chillx.top",181],["playerx.stream",181],["m.liputan6.com",183],["stardewids.com",[183,205]],["ingles.com",184],["spanishdict.com",184],["surfline.com",185],["rureka.com",186],["freepreset.net",187],["amateur8.com",188],["freeporn8.com",188],["maturetubehere.com",188],["embedo.co",189],["corriere.it",190],["oggi.it",190],["2the.space",191],["apkcombo.com",193],["sponsorhunter.com",194],["novelssites.com",195],["haxina.com",196],["scimagojr.com",196],["dramafren.net",196],["torrentmac.net",197],["udvl.com",198],["dlpanda.com",199],["socialmediagirls.com",200],["einrichtungsbeispiele.de",201],["weadown.com",202],["molotov.tv",203],["freecoursesonline.me",204],["adelsfun.com",204],["advantien.com",204],["bailbondsfinder.com",204],["bg-gledai.*",204],["bigpiecreative.com",204],["childrenslibrarylady.com",204],["classifarms.com",204],["comtasq.ca",204],["crone.es",204],["ctrmarketingsolutions.com",204],["dropnudes.com",204],["ftuapps.dev",204],["genzsport.com",204],["ghscanner.com",204],["gledaitv.*",204],["grsprotection.com",204],["gruporafa.com.br",204],["inmatefindcalifornia.com",204],["inmatesearchidaho.com",204],["itsonsitetv.com",204],["mfmfinancials.com",204],["myproplugins.com",204],["nurulislam.org",204],["onehack.us",204],["ovester.com",204],["paste.bin.sx",204],["privatenudes.com",204],["renoconcrete.ca",204],["richieashbeck.com",204],["sat.technology",204],["short1ink.com",204],["stpm.co.uk",204],["wegotcookies.co",204],["mathcrave.com",204],["marinetraffic.live",204],["commands.gg",205],["smgplaza.com",206],["emturbovid.com",207],["findjav.com",207],["javggvideo.xyz",207],["mmtv01.xyz",207],["stbturbo.xyz",207],["streamsilk.com",207],["freepik.com",208],["diyphotography.net",210],["bitchesgirls.com",211],["hiraethtranslation.com",212],["programmingeeksclub.com",213],["diendancauduong.com",214],["androidadult.com",215],["parentcircle.com",216],["h-game18.xyz",217],["wheelofgold.com",218],["davescomputertips.com",219],["historyofroyalwomen.com",219],["motchill.*",220],["lifestyle.bg",221],["news.bg",221],["topsport.bg",221],["webcafe.bg",221],["freepikdownloader.com",222],["freepasses.org",223],["iusedtobeaboss.com",224],["blogtruyenmoi.com",225],["repretel.com",227],["tubereader.me",227],["graphicget.com",228],["qiwi.gg",[229,230]],["sonixgvn.net",231],["alliptvlinks.com",232],["smashyplayer.top",233],["upns.*",233],["xvideos.com",234],["xvideos2.com",234],["katfile.com",235],["readcomiconline.*",236],["nekopoi.*",237],["ukchat.co.uk",238],["hivelr.com",239],["skidrowcodex.net",240],["takimag.com",241],["digi.no",242],["th.gl",243],["twi-fans.com",244],["learn-cpp.org",245],["terashare.co",246],["pornwex.tv",247],["smithsonianmag.com",248],["homesports.net",249],["realmoasis.com",250],["javfc2.xyz",251],["gobankingrates.com",252],["hiddenleaf.to",253],["ronorp.net",254],["gdflix.*",255],["a1movies.*",256],["videovak.com",257],["a-lohas.jp",258],["akirabox.com",259],["purplex.app",260],["maggotdrowning.com",261],["bilinovel.com",262],["esportstales.com",263],["pagalfree.com",264],["pagalworld.us",264],["idnes.cz",[265,266]],["cbc.ca",267],["pvpoke-re.com",268]]);
const exceptionsMap = new Map([["forum.soft98.ir",[112,141]]]);
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
    try { addEventListenerDefuser(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
