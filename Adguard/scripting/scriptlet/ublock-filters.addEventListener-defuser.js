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
const argsList = [["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["click","Event"],["click","","elements",".dropdown-menu a[href]"],["load","Object"],["load","hard_block"],["","adb"],["click","showNotice"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["load","nextFunction"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["/^(?:click|mousedown)$/","_0x"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["DOMContentLoaded","anchor.href"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","'\\'"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["click","","elements",".post.movies"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["DOMContentLoaded","checkAdblockUser"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["DOMContentLoaded","script[data-domain="],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["mousedown","shown_at"],["/click|mouse/","[native code]","elements","document"],["","focus"],["load","abDetectorPro"],["DOMContentLoaded","src=atob"],["error","blocker"],["load","error-report.com"],["load","download-wrapper"],["DOMContentLoaded","adClosedTimestamp"],["click","tampilkanUrl"],["click","openPopunder"],["load",".getComputedStyle"],["","STORAGE2"],["DOMContentLoaded","app_advert"],["message","adsense"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["load","Adblock"],["DOMContentLoaded","window.open"],["DOMContentLoaded","atob"],["","vads"],["devtoolschange"],["mouseup","decodeURIComponent"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["load","crakPopInParams"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["load","checkAdblock"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["load","popMagic"],["click","popurl"],["DOMContentLoaded","adbl"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["load",".innerHTML"],["/click|mousedown/","catch"],["adb"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","AdBlocker"],["","showModal"],["","goog"],["","document.body"],["","modal"],["click","adobeModalTestABenabled"],["blur","console.log"],["DOMContentLoaded","adsSrc"],["","AdB"],["load","adSession"],["np.detect"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["click","/sandbox/i"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["load","document.querySelectorAll"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","[native code]","elements",".main-wrap"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["click","localStorage"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","open"],["click","/adsActive|POPUNDER/i"],["/click|mouse|touch/","_0x"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["load","/^function\\(\\).*requestIdleCallback.*/"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","Promise"],["click","popupInterval"],["DOMContentLoaded","-banner"],["click","PopURL"],["DOMContentLoaded","checkAdBlocker"],["DOMContentLoaded","Visibility"],["DOMContentLoaded","Popunder"],["load","blockAdBlock"],["load","&&"],["click","handlePopup"],["play","openPopunder"],["DOMContentLoaded","/navigator|location\\.href/"],["click","adId"],["DOMContentLoaded","handleRedirect"],["DOMContentLoaded","setInterval"],["click","location"],["click","href"],["message","_0x"],["popstate","window.location.href"],["click","pingUrl"],["mousedown","scoreUrl"]];
const hostnamesMap = new Map([["cbc.ca",0],["io.google",1],["dukeofed.org",2],["newser.com",3],["sport1.de",4],["timesofindia.indiatimes.com",5],["drrtyr.mx",5],["pinoyalbums.com",5],["multiplayer.it",5],["skidrowreloaded.com",6],["mediafire.com",[7,8]],["kingofdown.com",9],["radiotormentamx.com",9],["limetorrents.*",[9,13]],["king-pes.*",9],["quelleestladifference.fr",9],["depedlps.*",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["komikcast.*",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["idedroidsafelink.*",9],["links-url.*",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["zerotopay.com",9],["ak4eg.*",9],["hesgoal-live.io",9],["steanplay.*",10],["bibme.org",11],["citationmachine.net",11],["easybib.com",12],["pahe.*",13],["yts.*",13],["tube8.*",13],["topeuropix.*",13],["vermangasporno.com",13],["moviescounter.*",13],["imgtorrnt.in",13],["picbaron.com",[13,116]],["torrent9.*",13],["desiremovies.*",13],["letmejerk.com",13],["letmejerk2.com",13],["letmejerk3.com",13],["letmejerk4.com",13],["letmejerk5.com",13],["letmejerk6.com",13],["letmejerk7.com",13],["movs4u.*",13],["uwatchfree.*",13],["hydrax.*",13],["4movierulz.*",13],["projectfreetv.*",13],["arabseed.*",13],["btdb.*",[13,52]],["dlapk4all.com",13],["kropic.com",13],["pdfindir.net",13],["brstej.com",13],["topwwnews.com",13],["xsanime.com",13],["vidlo.us",13],["youx.xxx",13],["world4ufree.*",13],["animeindo.asia",13],["streamsport.*",13],["rojadirectatvhd.*",13],["userload.*",13],["badtaste.it",14],["adyou.*",15],["gotporn.com",16],["freepornrocks.com",16],["footybite.to",16],["rargb.to",16],["totalsportek.*",16],["totalsportekhd.com",16],["xn--mlaregvle-02af.nu",16],["realgfporn.com",[17,18]],["fxporn69.*",17],["thisvid.com",18],["xvideos-downloader.net",18],["imgspice.com",19],["vikiporn.com",20],["tnaflix.com",20],["pornomico.com",20],["yourlust.com",20],["hotpornfile.org",20],["watchfreexxx.net",20],["vintageporntubes.com",20],["angelgals.com",20],["babesexy.com",20],["youlikeboys.com",20],["hentaihere.com",20],["ganstamovies.com",20],["youngleak.com",20],["jizzberry.com",20],["porndollz.com",20],["filmpornofrancais.fr",20],["pictoa.com",[20,43]],["pornohirsch.net",20],["herzporno.*",20],["deinesexfilme.com",20],["einfachtitten.com",20],["halloporno.*",20],["lesbenhd.com",20],["milffabrik.com",20],["porn-monkey.com",20],["porndrake.com",20],["pornhubdeutsch.net",20],["pornoaffe.com",20],["pornodavid.com",20],["pornoente.tv",20],["pornofisch.com",20],["pornofelix.com",20],["pornohammer.com",20],["pornohelm.com",20],["pornoklinge.com",20],["pornotom.com",20],["pornotommy.com",20],["pornovideos-hd.com",20],["pornozebra.com",20],["xhamsterdeutsch.xyz",20],["xnxx-sexfilme.com",20],["hd-easyporn.com",20],["adultasianporn.com",20],["nsfwmonster.com",20],["girlsofdesire.org",20],["gaytail.com",20],["fetish-bb.com",20],["rumporn.com",20],["soyoungteens.com",20],["zubby.com",20],["lesbian8.com",20],["gayforfans.com",20],["reifporn.de",20],["javtsunami.com",20],["18tube.sex",20],["xxxextreme.org",20],["amateurs-fuck.com",20],["sex-amateur-clips.com",20],["hentaiworld.tv",20],["dads-banging-teens.com",20],["home-xxx-videos.com",20],["mature-chicks.com",20],["hqbang.com",20],["darknessporn.com",20],["familyporner.com",20],["freepublicporn.com",20],["pisshamster.com",20],["punishworld.com",20],["xanimu.com",20],["tubator.com",20],["hentai2w.com",[20,133]],["pornhd.com",21],["cnnamador.com",[21,30]],["cle0desktop.blogspot.com",21],["turkanime.co",21],["rexporn.*",21],["movies07.*",21],["camclips.tv",[21,44]],["blackpornhq.com",21],["xsexpics.com",21],["wannafreeporn.com",21],["ytube2dl.com",21],["pornocomics.*",21],["multiup.us",21],["protege-torrent.com",21],["pussyspace.com",[22,23]],["pussyspace.net",[22,23]],["empflix.com",24],["cpmlink.net",25],["bdsmstreak.com",25],["cutpaid.com",25],["pornforrelax.com",25],["fatwhitebutt.com",25],["pornomoll.*",25],["short.pe",26],["gsurl.*",26],["mimaletadepeliculas.*",27],["bs.to",28],["burningseries.*",28],["efukt.com",28],["dz4soft.*",29],["generacionretro.net",29],["nuevos-mu.ucoz.com",29],["yoututosjeff.*",29],["ebookmed.*",29],["lanjutkeun.*",29],["mimaletamusical.blogspot.com",29],["novelasesp.*",29],["visionias.net",29],["singingdalong.*",29],["b3infoarena.in",29],["lurdchinexgist.blogspot.com",29],["thefreedommatrix.blogspot.com",29],["hentai-vl.blogspot.com",29],["projetomotog.blogspot.com",29],["ktmx.pro",29],["lirik3satu.blogspot.com",29],["marketmovers.it",29],["pharmaguideline.com",29],["mixloads.com",29],["mangaromance.eu",29],["interssh.com",29],["freesoftpdfdownload.blogspot.com",29],["myadslink.com",29],["blackavelic.com",29],["doujindesu.*",29],["server.satunivers.tv",29],["flashingjungle.com",30],["ma-x.org",31],["lavozdegalicia.es",31],["ddwloclawek.pl",31],["ki24.info",31],["xmovies8.*",32],["xmovies08.org",33],["freecoursesonline.*",34],["lordpremium.*",34],["mp3fiber.com",[34,47]],["schrauben-normen.de",34],["avengerinator.blogspot.com",34],["novablogitalia.*",34],["link-to.net",34],["hanimesubth.com",34],["gsmturkey.net",34],["anisubindo.*",34],["adshrink.it",34],["presentation-ppt.com",34],["mangacanblog.com",34],["pekalongan-cits.blogspot.com",34],["4tymode.win",34],["linkvertise.com",34],["reifenrechner.at",34],["tire-size-calculator.info",34],["linuxsecurity.com",34],["itsguider.com",34],["cotravinh.blogspot.com",34],["itudong.com",34],["shortx.net",34],["btvsports.*",34],["lecturel.com",34],["bakai.org",34],["nar.k-ba.net",34],["eurotruck2.com.br",34],["tiroalpaloes.com",34],["stream4free.*",34],["tiroalpaloes.net",34],["flixsix.com",34],["tiroalpaloweb.xyz",34],["globaldjmix.com",35],["desiupload.*",[36,158]],["hblinks.pro",36],["hubcdn.vip",36],["hubdrive.*",[36,132]],["90fpsconfig.in",36],["katdrive.link",36],["kmhd.net",36],["bollydrive.rest",36],["360news4u.net",36],["hypershort.com",[36,130]],["bollydrive.*",[36,160]],["zazzybabes.com",37],["haaretz.co.il",38],["haaretz.com",38],["slate.com",39],["megalinks.info",40],["megapastes.com",40],["mega-mkv.com",[40,41]],["mkv-pastes.com",40],["zpaste.net",40],["zlpaste.net",40],["mega-dvdrip.*",41],["peliculas-dvdrip.*",41],["desbloqueador.*",42],["cine.to",[43,197]],["newpelis.*",[43,50]],["pelix.*",[43,50]],["allcalidad.*",[43,133]],["khatrimaza.*",43],["kissasia.cc",43],["camwhores.*",44],["camwhorestv.*",44],["digjav.com",44],["uproxy.*",44],["videoszoofiliahd.com",45],["xxxtubezoo.com",46],["zooredtube.com",46],["ancensored.com",47],["ganool.*",47],["xrivonet.info",47],["pirate.*",47],["piratebay.*",47],["pirateproxy.*",47],["proxytpb.*",47],["thepiratebay.*",47],["uii.io",48],["porndoe.com",49],["acienciasgalilei.com",51],["playrust.io",52],["payskip.org",53],["short-url.link",54],["tubedupe.com",55],["mirrorace.*",56],["fatgirlskinny.net",57],["polska-ie.com",57],["windowsmatters.com",57],["canaltdt.es",58],["masbrooo.com",58],["2ndrun.tv",58],["oncehelp.com",59],["curto.win",59],["smallseotools.com",60],["vidmoly.*",61],["pagalfree.com",61],["pagalworld.us",61],["macwelt.de",62],["pcwelt.de",62],["capital.de",62],["geo.de",62],["allmomsex.com",63],["allnewindianporn.com",63],["analxxxvideo.com",63],["animalextremesex.com",63],["anime3d.xyz",63],["animefuckmovies.com",63],["animepornfilm.com",63],["animesexbar.com",63],["animesexclip.com",63],["animexxxsex.com",63],["animexxxfilms.com",63],["anysex.club",63],["apetube.asia",63],["asianfuckmovies.com",63],["asianfucktube.com",63],["asianporn.sexy",63],["asiansex.*",63],["asiansexcilps.com",63],["beeg.fund",63],["beegvideoz.com",63],["bestasiansex.pro",63],["bravotube.asia",63],["brutalanimalsfuck.com",63],["candyteenporn.com",63],["daddyfuckmovies.com",63],["desifuckonline.com",63],["exclusiveasianporn.com",63],["exteenporn.com",63],["fantasticporn.net",63],["fantasticyoungporn.com",63],["fineasiansex.com",63],["firstasianpussy.com",63],["freeindiansextube.com",63],["freepornasians.com",63],["freerealvideo.com",63],["fuck-beeg.com",63],["fuck-xnxx.com",63],["fuckfuq.com",63],["fuckundies.com",63],["gojapaneseporn.com",63],["golderotica.com",63],["goodyoungsex.com",63],["goyoungporn.com",63],["hardxxxmoms.com",63],["hdvintagetube.com",63],["hentaiporn.me",63],["hentaisexfilms.com",63],["hentaisexuality.com",63],["hot-teens-movies.mobi",63],["hotanimepornvideos.com",63],["hotanimevideos.com",63],["hotasianpussysex.com",63],["hotjapaneseshows.com",63],["hotmaturetube.com",63],["hotmilfs.pro",63],["hotorientalporn.com",63],["hotpornyoung.com",63],["hotxxxjapanese.com",63],["hotxxxpussy.com",63],["indiafree.net",63],["indianpornvideo.online",63],["japanfuck.*",63],["japanporn.*",63],["japanpornclip.com",63],["japanesetube.video",63],["japansex.me",63],["japanesexxxporn.com",63],["japansporno.com",63],["japanxxx.asia",63],["japanxxxworld.com",63],["keezmovies.surf",63],["lingeriefuckvideo.com",63],["liveanimalporn.zooo.club",63],["madhentaitube.com",63],["megahentaitube.com",63],["megajapanesesex.com",63],["megajapantube.com",63],["milfxxxpussy.com",63],["momsextube.pro",63],["momxxxass.com",63],["monkeyanimalporn.com",63],["moviexxx.mobi",63],["newanimeporn.com",63],["newjapanesexxx.com",63],["nicematureporn.com",63],["nudeplayboygirls.com",63],["originalindianporn.com",63],["originalteentube.com",63],["pig-fuck.com",63],["plainasianporn.com",63],["popularasianxxx.com",63],["pornanimetube.com",63],["pornasians.pro",63],["pornhat.asia",63],["pornjapanesesex.com",63],["pornvintage.tv",63],["primeanimesex.com",63],["realjapansex.com",63],["realmomsex.com",63],["redsexhub.com",63],["retroporn.world",63],["retrosexfilms.com",63],["sex-free-movies.com",63],["sexanimesex.com",63],["sexanimetube.com",63],["sexjapantube.com",63],["sexmomvideos.com",63],["sexteenxxxtube.com",63],["sexxxanimal.com",63],["sexyoungtube.com",63],["sexyvintageporn.com",63],["spicyvintageporn.com",63],["sunporno.club",63],["tabooanime.club",63],["teenextrem.com",63],["teenfucksex.com",63],["teenhost.net",63],["teensex.*",63],["teensexass.com",63],["tnaflix.asia",63],["totalfuckmovies.com",63],["totalmaturefuck.com",63],["txxx.asia",63],["vintagetube.*",63],["voyeurpornsex.com",63],["warmteensex.com",63],["wetasiancreampie.com",63],["wildhentaitube.com",63],["wowyoungsex.com",63],["xhamster-art.com",63],["xmovie.pro",63],["xnudevideos.com",63],["xnxxjapon.com",63],["xpics.me",63],["xvide.me",63],["xxxanimefuck.com",63],["xxxanimevideos.com",63],["xxxanimemovies.com",63],["xxxhentaimovies.com",63],["xxxhothub.com",63],["xxxjapaneseporntube.com",63],["xxxlargeporn.com",63],["xxxmomz.com",63],["xxxmovies.*",63],["xxxpornmilf.com",63],["xxxpussyclips.com",63],["xxxpussysextube.com",63],["xxxretrofuck.com",63],["xxxsex.pro",63],["xxxsexyjapanese.com",63],["xxxteenyporn.com",63],["xxxvideo.asia",63],["xxxyoungtv.com",63],["youjizzz.club",63],["youngpussyfuck.com",63],["bayimg.com",64],["celeb.gate.cc",65],["kinoger.re",66],["usersdrive.com",66],["desi.upn.bio",66],["zooqle.*",67],["masterplayer.xyz",68],["pussy-hub.com",68],["porndex.com",69],["compucalitv.com",70],["hdfull.*",71],["diariodenavarra.es",72],["mangamanga.*",73],["streameast.*",74],["thestreameast.*",74],["pennlive.com",75],["beautypageants.indiatimes.com",76],["01fmovies.com",77],["vev.*",78],["vidop.*",78],["lnk2.cc",79],["fullhdxxx.com",80],["classicpornbest.com",80],["www-daftarharga.blogspot.com",[80,139]],["1youngteenporn.com",80],["miraculous.to",[80,191]],["vtube.to",80],["zone-telechargement.*",80],["xstory-fr.com",80],["gosexpod.com",81],["tubepornclassic.com",82],["shemalez.com",82],["otakukan.com",83],["xcafe.com",84],["pornfd.com",84],["venusarchives.com",84],["imagehaha.com",85],["imagenpic.com",85],["imageshimage.com",85],["imagetwist.com",85],["megalink.*",86],["k1nk.co",86],["watchasians.cc",86],["lulustream.com",86],["lulustream.live",86],["luluvdo.com",86],["vibestreams.*",86],["gmx.*",87],["web.de",87],["news18.com",88],["thelanb.com",89],["dropmms.com",89],["softwaredescargas.com",90],["cracking-dz.com",91],["mega1080p.*",92],["anitube.*",92],["gazzetta.it",93],["9hentai.*",94],["gnula.*",95],["dziennikbaltycki.pl",96],["dzienniklodzki.pl",96],["dziennikpolski24.pl",96],["dziennikzachodni.pl",96],["echodnia.eu",96],["expressbydgoski.pl",96],["expressilustrowany.pl",96],["gazetakrakowska.pl",96],["gazetalubuska.pl",96],["gazetawroclawska.pl",96],["gk24.pl",96],["gloswielkopolski.pl",96],["gol24.pl",96],["gp24.pl",96],["gra.pl",96],["gs24.pl",96],["kurierlubelski.pl",96],["motofakty.pl",96],["naszemiasto.pl",96],["nowiny24.pl",96],["nowosci.com.pl",96],["nto.pl",96],["polskatimes.pl",96],["pomorska.pl",96],["poranny.pl",96],["sportowy24.pl",96],["strefaagro.pl",96],["strefabiznesu.pl",96],["stronakobiet.pl",96],["telemagazyn.pl",96],["to.com.pl",96],["wspolczesna.pl",96],["courseclub.me",96],["azrom.net",96],["alttyab.net",96],["esopress.com",96],["nesiaku.my.id",96],["onemanhua.com",97],["freeindianporn.mobi",97],["dr-farfar.com",98],["boyfriendtv.com",99],["brandstofprijzen.info",100],["netfuck.net",101],["gaypornhdfree.*",101],["nulljungle.com",101],["kisahdunia.com",101],["cinemakottaga.*",101],["privatemoviez.*",101],["sqlserveregitimleri.com",101],["tutcourse.com",101],["iimanga.com",101],["tremamnon.com",101],["423down.com",101],["jugomobile.com",101],["freecodezilla.net",101],["apkmaven.*",101],["iconmonstr.com",101],["rbxscripts.net",101],["comentariodetexto.com",101],["wordpredia.com",101],["allfaucet.xyz",[101,109]],["replica-watch.info",101],["alludemycourses.com",101],["kayifamilytv.com",101],["interfans.org",101],["iir.ai",102],["popcornstream.*",103],["qpython.club",104],["dktechnicalmate.com",104],["recipahi.com",104],["e9china.net",105],["ontools.net",105],["marketbeat.com",106],["hentaipornpics.net",107],["jobzhub.store",108],["fitdynamos.com",108],["labgame.io",108],["ohionowcast.info",109],["wiour.com",109],["bitzite.com",[109,114,115]],["appsbull.com",109],["diudemy.com",109],["maqal360.com",[109,117,118]],["bitcotasks.com",109],["videolyrics.in",109],["manofadan.com",109],["cempakajaya.com",109],["tagecoin.com",109],["naijafav.top",109],["ourcoincash.xyz",109],["claimcoins.site",109],["cryptosh.pro",109],["eftacrypto.com",109],["earnhub.net",109],["kiddyshort.com",109],["tronxminer.com",109],["neverdims.com",109],["homeairquality.org",110],["cety.app",[111,112]],["exego.app",111],["cutlink.net",111],["cutyurls.com",111],["cutty.app",111],["cutnet.net",111],["jixo.online",111],["cuty.me",112],["exnion.com",112],["upfion.com",[112,129]],["upfiles.app",[112,129]],["upfiles-urls.com",[112,129]],["pahe.ink",112],["pawastreams.pro",112],["vikingf1le.us.to",112],["gamerxyt.com",112],["up4stream.com",112],["ups2up.fun",112],["adcrypto.net",113],["admediaflex.com",113],["aduzz.com",113],["bitcrypto.info",113],["cdrab.com",113],["datacheap.io",113],["hbz.us",113],["savego.org",113],["owsafe.com",113],["sportweb.info",113],["gfx-station.com",114],["buzzheavier.com",115],["flashbang.sh",115],["trashbytes.net",115],["aiimgvlog.fun",116],["6indianporn.com",116],["amateurebonypics.com",116],["amateuryoungpics.com",116],["amigosporn.top",116],["cinemabg.net",116],["desimmshd.com",116],["everia.club",116],["frauporno.com",116],["freepdfcomic.eu",116],["givemeaporn.com",116],["hitomi.la",116],["jav-asia.top",116],["javfull.net",116],["javideo.net",116],["javsunday.com",116],["kr18plus.com",116],["luscious.net",116],["missavtv.com",116],["pilibook.com",116],["pornborne.com",116],["porngrey.com",116],["pornktube.*",116],["pornx.tube",116],["qqxnxx.com",116],["sexvideos.host",116],["submilf.com",116],["subtaboo.com",116],["tktube.com",116],["watchseries.*",116],["xfrenchies.com",116],["rule34ai.*",116],["moderngyan.com",119],["sattakingcharts.in",119],["bgmi32bitapk.in",119],["bankshiksha.in",119],["earn.mpscstudyhub.com",119],["earn.quotesopia.com",119],["money.quotesopia.com",119],["best-mobilegames.com",119],["learn.moderngyan.com",119],["bharatsarkarijobalert.com",119],["quotesopia.com",119],["creditsgoal.com",119],["coingraph.us",120],["momo-net.com",120],["milfnut.*",120],["maxgaming.fi",120],["cybercityhelp.in",121],["tpi.li",122],["oii.la",122],["travel.vebma.com",123],["cloud.majalahhewan.com",123],["crm.cekresi.me",123],["ai.tempatwisata.pro",123],["shrinkme.*",124],["shrinke.*",124],["mrproblogger.com",124],["themezon.net",124],["dagensnytt.com",124],["azmath.info",125],["azsoft.*",125],["downfile.site",125],["downphanmem.com",125],["expertvn.com",125],["memangbau.com",125],["trangchu.news",125],["aztravels.net",125],["ielts-isa.edu.vn",125],["techedubyte.com",[125,238,239]],["jpopsingles.eu",125],["aipebel.com",125],["link.paid4link.com",[126,127]],["driveup.space",128],["crypt.cybar.xyz",128],["dynamicminister.net",128],["gofirmware.com",128],["national-park.com",128],["forgee.xyz",128],["gamehub.cam",128],["mirrored.to",128],["cutyion.com",129],["weshare.is",131],["file.gocmod.com",131],["hdhub4u.fail",132],["moviesubtitles.click",132],["telegratuita.com",132],["camarchive.tv",133],["flixbaba.*",133],["gntai.*",133],["grantorrent.*",133],["hentai2read.com",133],["icyporno.com",133],["illink.net",133],["javtiful.com",133],["m-hentai.net",133],["mejortorrent.*",133],["mejortorrento.*",133],["mejortorrents.*",133],["mejortorrents1.*",133],["mejortorrentt.*",133],["pornblade.com",133],["pornfelix.com",133],["pornxxxxtube.net",133],["redwap.me",133],["redwap2.com",133],["redwap3.com",133],["sunporno.com",133],["ver-comics-porno.com",133],["ver-mangas-porno.com",133],["x-fetish.tube",133],["x-tg.tube",133],["x-video.tube",133],["xanimeporn.com",133],["xemphim1.top",133],["xxxvideohd.net",133],["zetporn.com",133],["gofile.download",133],["simpcity.*",134],["gameofporn.com",135],["0dramacool.net",136],["0gomovie.*",136],["0gomovies.*",136],["185.53.88.104",136],["185.53.88.204",136],["185.53.88.15",136],["123moviefree.*",136],["1kmovies.*",136],["1madrasdub.*",136],["1primewire.*",136],["2embed.*",[136,232]],["2madrasdub.*",136],["2umovies.*",136],["4anime.*",136],["9animetv.to",136],["aagmaal.com",136],["abysscdn.com",136],["adblockplustape.*",136],["ajkalerbarta.com",136],["altadefinizione01.*",136],["androidapks.biz",136],["androidsite.net",136],["animeonlinefree.org",136],["animesite.net",136],["animespank.com",136],["aniworld.to",136],["apkmody.io",136],["appsfree4u.com",136],["atomixhq.*",136],["audioz.download",136],["awafim.tv",136],["beinmatch.*",136],["bengalisite.com",136],["brmovies.*",136],["ch-play.com",136],["cima4u.*",136],["clickforhire.com",136],["clicknupload.*",136],["cloudy.pk",136],["cmovies.*",136],["computercrack.com",136],["coolcast2.com",136],["crackedsoftware.biz",136],["crackfree.org",136],["cricfree.*",136],["crichd.*",136],["cryptoblog24.info",136],["cuatrolatastv.blogspot.com",136],["cydiasources.net",136],["decmelfot.xyz",136],["dirproxy.com",136],["dood.*",136],["dopebox.to",136],["downloadapk.info",136],["downloadapps.info",136],["downloadgames.info",136],["downloadmusic.info",136],["downloadsite.org",136],["downloadwella.com",136],["ebooksite.org",136],["educationtips213.blogspot.com",136],["egyup.live",136],["embed.meomeo.pw",136],["embed.scdn.to",136],["emulatorsite.com",136],["f1stream.*",136],["fakedetail.com",136],["faselhd.*",136],["fbstream.*",136],["fclecteur.com",136],["filemoon.*",136],["filepress.*",[136,218]],["filmlinks4u.*",136],["filmpertutti.*",136],["filmyzilla.*",136],["flexyhit.com",136],["fmovies.*",136],["freeflix.info",136],["freemoviesu4.com",136],["freeplayervideo.com",136],["freesoccer.net",136],["fseries.org",136],["fzlink.*",136],["gamefast.org",136],["gamesite.info",136],["gettapeads.com",136],["gmanga.me",136],["gocast123.me",136],["gofilms4u.*",136],["gogoanime.*",136],["gomoviz.*",136],["gooplay.net",136],["gostreamon.net",136],["harimanga.com",136],["hdmoviefair.*",136],["hdmovies4u.*",136],["hdmovies50.*",136],["hdmoviesfair.*",136],["healthnewsreel.com",136],["hexupload.net",136],["hh3dhay.*",136],["hinatasoul.com",136],["hindilinks4u.*",136],["hindisite.net",136],["holymanga.net",136],["hotmasti.*",136],["hurawatch.*",136],["hxfile.co",136],["isosite.org",136],["iv-soft.com",136],["januflix.expert",136],["jewelry.com.my",136],["johnwardflighttraining.com",136],["kabarportal.com",136],["klmanga.*",136],["klubsports.*",136],["kstorymedia.com",136],["la123movies.org",136],["lespassionsdechinouk.com",136],["libertestreamvf.*",136],["lilymanga.net",136],["linksdegrupos.com.br",136],["linkz.wiki",136],["livetvon.*",136],["livestreamtv.pk",136],["macsite.info",136],["manga1000.*",136],["manga1001.*",136],["mangaraw.*",136],["mangarawjp.*",136],["mangasite.org",136],["manhuascan.com",136],["megamovies.org",136],["mlbstream.*",136],["moddroid.com",136],["motogpstream.*",136],["movi.pk",[136,168]],["moviefree2.com",136],["movierulz.*",136],["movies123.*",136],["movies-watch.com.pk",136],["movies2watch.*",136],["moviesden.*",136],["moviesite.app",136],["moviesonline.fm",136],["moviesx.org",136],["moviezaddiction.*",136],["musicsite.biz",136],["myfernweh.com",136],["myviid.com",136],["nazarickol.com",136],["nbastream.*",136],["netcine.*",136],["nflstream.*",136],["nhlstream.*",136],["noob4cast.com",136],["oko.sh",136],["onlinewatchmoviespk.*",136],["orangeink.pk",136],["pahaplayers.click",136],["patchsite.net",136],["pctfenix.*",136],["pctnew.*",136],["pdfsite.net",136],["pksmovies.*",136],["play1002.com",136],["player-cdn.com",136],["plyjam.*",136],["plylive.*",136],["pogolinks.*",136],["popcorntime.*",136],["poscitech.*",136],["productkeysite.com",136],["projectfreetv.one",136],["romsite.org",136],["rugbystreams.*",136],["rytmp3.io",136],["send.cm",136],["seriesite.net",136],["seriezloaded.com.ng",136],["serijehaha.com",136],["shahed4u.*",136],["sflix.*",136],["shrugemojis.com",136],["siteapk.net",136],["siteflix.org",136],["sitegames.net",136],["sitekeys.net",136],["sitepdf.com",136],["sitesunblocked.*",136],["sitetorrent.com",136],["softwaresite.net",136],["solarmovies.*",136],["sportbar.live",136],["sportcast.*",136],["sportskart.*",136],["sports-stream.*",136],["ssyoutube.com",136],["stardima.com",136],["stream4free.live",136],["streaming-french.*",136],["streamers.*",136],["streamingcommunity.*",[136,204]],["superapk.org",136],["supermovies.org",136],["t20cup.*",136],["tainio-mania.online",136],["talaba.su",136],["tamilguns.org",136],["tatabrada.tv",136],["techtrendmakers.com",136],["tennisstreams.*",136],["thememypc.net",136],["thripy.com",136],["torrentdosfilmes.*",136],["toonanime.*",136],["travelplanspro.com",136],["tusfiles.com",136],["tvonlinesports.com",136],["tvply.*",136],["ufcstream.*",136],["ultramovies.org",136],["uploadbank.com",136],["uptomega.*",136],["uqload.*",136],["urdubolo.pk",136],["vudeo.*",136],["vidoo.*",136],["vidspeeds.com",136],["vipboxtv.*",136],["viprow.*",136],["warezsite.net",136],["watchmovies2.com",136],["watchsite.net",136],["watchsouthpark.tv",136],["web.livecricket.is",136],["webseries.club",136],["y2mate.com",136],["yesmovies.*",136],["yomovies.*",136],["yomovies1.*",136],["youapk.net",136],["youtube4kdownloader.com",136],["yt2mp3s.*",136],["yts-subs.com",136],["kat.*",136],["katbay.*",136],["kickass.*",136],["kickasshydra.*",136],["kickasskat.*",136],["kickass2.*",136],["kickasstorrents.*",136],["kat2.*",136],["kattracker.*",136],["thekat.*",136],["thekickass.*",136],["kickassz.*",136],["kickasstorrents2.*",136],["topkickass.*",136],["kickassgo.*",136],["kkickass.*",136],["kkat.*",136],["kickasst.*",136],["kick4ss.*",136],["cineb.rs",137],["moviesjoyhd.to",137],["rawkuma.com",[137,184]],["nekolink.site",138],["advantien.com",140],["bailbondsfinder.com",140],["bg-gledai.*",140],["bigpiecreative.com",140],["childrenslibrarylady.com",140],["classifarms.com",140],["comtasq.ca",140],["crone.es",140],["ctrmarketingsolutions.com",140],["dropnudes.com",140],["ftuapps.dev",140],["gendatabase.com",140],["ghscanner.com",140],["gledaitv.*",140],["grsprotection.com",140],["gruporafa.com.br",140],["inmatefindcalifornia.com",140],["inmatesearchidaho.com",140],["itsonsitetv.com",140],["mfmfinancials.com",140],["myproplugins.com",140],["nurulislam.org",140],["onehack.us",140],["ovester.com",140],["paste.bin.sx",140],["privatenudes.com",140],["renoconcrete.ca",140],["richieashbeck.com",140],["sat.technology",140],["short1ink.com",140],["stpm.co.uk",140],["wegotcookies.co",140],["mathcrave.com",140],["vip-box.app",140],["filmyzones.com",141],["gamer18.net",141],["pornflixhd.com",141],["androidpolice.com",142],["cbr.com",142],["gamerant.com",142],["howtogeek.com",142],["thegamer.com",142],["winfuture.de",143],["mixdrp.*",144],["iplark.com",145],["komikdewasa.art",146],["daemon-hentai.com",[147,148]],["daemonanime.net",[149,150]],["canlikolik.my",151],["flight-report.com",152],["vulture.com",153],["megaplayer.bokracdn.run",154],["hentaistream.com",155],["siteunblocked.info",156],["larvelfaucet.com",157],["feyorra.top",157],["claimtrx.com",157],["pagalmovies.*",158],["7starhd.*",158],["jalshamoviez.*",158],["moviesyug.net",158],["9xupload.*",158],["bdupload.*",158],["rdxhd1.*",158],["parispi.net",159],["hentaicloud.com",160],["nuvid.*",160],["tio.ch",161],["lavanguardia.com",161],["news.bg",[161,233]],["tu.no",161],["paperzonevn.com",162],["dailyvideoreports.net",163],["lewd.ninja",164],["niusdiario.es",165],["playporngames.com",166],["descargatepelis.com",166],["gamedrive.org",166],["javx.*",166],["savelinks.*",166],["kungfutv.net",166],["freemagazines.top",167],["freepreset.net",167],["moviessources.*",169],["haho.moe",170],["novelmultiverse.com",171],["mylegalporno.com",172],["embedsports.me",173],["embedstream.me",173],["reliabletv.me",173],["guardaserie.*",174],["cine-calidad.*",175],["foxhq.com",176],["xnxx.*",177],["xvideos.*",177],["thecut.com",178],["novelism.jp",179],["alphapolis.co.jp",180],["game3rb.com",181],["javhub.net",181],["thotvids.com",182],["tokuzilla.net",182],["tokuzl.net",182],["berklee.edu",183],["imeteo.sk",185],["youtubemp3donusturucu.net",186],["videovard.*",187],["cluset.com",188],["homemoviestube.com",188],["sexseeimage.com",188],["warddogs.com",189],["alueviesti.fi",190],["kiuruvesilehti.fi",190],["lempaala.ideapark.fi",190],["olutposti.fi",190],["urjalansanomat.fi",190],["tainhanhvn.com",192],["titantv.com",193],["cocomanga.com",194],["animelatinohd.com",194],["buondua.com",195],["crunchyscan.fr",196],["m.liputan6.com",198],["stardewids.com",[198,215]],["ingles.com",199],["spanishdict.com",199],["surfline.com",200],["dongknows.com",201],["amateur8.com",202],["freeporn8.com",202],["maturetubehere.com",202],["corriere.it",203],["oggi.it",203],["apkcombo.com",205],["sponsorhunter.com",206],["novelssites.com",207],["haxina.com",208],["scimagojr.com",208],["myperfectweather.com",208],["torrentmac.net",209],["udvl.com",210],["dlpanda.com",211],["einrichtungsbeispiele.de",212],["weadown.com",213],["molotov.tv",214],["commands.gg",215],["smgplaza.com",216],["freepik.com",217],["sportnews.to",219],["soccershoes.blog",219],["shineads.*",219],["diyphotography.net",220],["bitchesgirls.com",221],["explorecams.com",222],["minecraft.buzz",222],["hiraethtranslation.com",223],["programmingeeksclub.com",224],["diendancauduong.com",225],["androidadult.com",226],["parentcircle.com",227],["h-game18.xyz",228],["wheelofgold.com",229],["davescomputertips.com",230],["historyofroyalwomen.com",230],["motchill.*",231],["lifestyle.bg",233],["topsport.bg",233],["webcafe.bg",233],["freepikdownloader.com",234],["freepasses.org",235],["iusedtobeaboss.com",236],["blogtruyenmoi.com",237],["repretel.com",240],["tubereader.me",240],["graphicget.com",241],["qiwi.gg",[242,243]],["sonixgvn.net",244],["alliptvlinks.com",245],["smashyplayer.top",246],["upns.*",246],["xvideos.com",247],["xvideos2.com",247],["colourxh.site",248],["fullxh.com",248],["galleryxh.site",248],["megaxh.com",248],["movingxh.world",248],["seexh.com",248],["unlockxh4.com",248],["valuexh.life",248],["xhaccess.com",248],["xhadult2.com",248],["xhadult3.com",248],["xhadult4.com",248],["xhadult5.com",248],["xhamster.*",248],["xhamster1.*",248],["xhamster10.*",248],["xhamster11.*",248],["xhamster12.*",248],["xhamster13.*",248],["xhamster14.*",248],["xhamster15.*",248],["xhamster16.*",248],["xhamster17.*",248],["xhamster18.*",248],["xhamster19.*",248],["xhamster20.*",248],["xhamster2.*",248],["xhamster3.*",248],["xhamster4.*",248],["xhamster42.*",248],["xhamster46.com",248],["xhamster5.*",248],["xhamster7.*",248],["xhamster8.*",248],["xhamsterporno.mx",248],["xhbig.com",248],["xhbranch5.com",248],["xhchannel.com",248],["xhdate.world",248],["xhlease.world",248],["xhmoon5.com",248],["xhofficial.com",248],["xhopen.com",248],["xhplanet1.com",248],["xhplanet2.com",248],["xhreal2.com",248],["xhreal3.com",248],["xhspot.com",248],["xhtotal.com",248],["xhtree.com",248],["xhvictory.com",248],["xhwebsite.com",248],["xhwebsite2.com",248],["xhwebsite5.com",248],["xhwide1.com",248],["xhwide2.com",248],["xhwide5.com",248],["readcomiconline.*",249],["nekopoi.*",250],["ukchat.co.uk",251],["hivelr.com",252],["koyso.*",253],["skidrowcodex.net",254],["takimag.com",255],["digi.no",256],["learn-cpp.org",257],["terashare.co",258],["pornwex.tv",259],["smithsonianmag.com",260],["homesports.net",261],["realmoasis.com",262],["javfc2.xyz",263],["gobankingrates.com",264],["hiddenleaf.to",265],["ronorp.net",266],["gdflix.*",267],["a1movies.*",268],["videovak.com",269],["akirabox.com",270],["akirabox.to",270],["movielinkbd.*",271],["movielinkbd4u.com",271],["powcloud.org",272],["purplex.app",273],["maggotdrowning.com",274],["servustv.com",275],["bilinovel.com",276],["asd.*",276],["esportstales.com",277],["streamup.ws",278],["pornharlot.net",279],["umatechnology.org",280],["rarbg.how",281],["4live.online",282],["friv.com",283],["rlxoff.com",284],["solobari.it",285],["hydrogen.lat",286],["criollasx.com",287],["pantieshub.net",288],["olamovies.*",289],["embed4me.com",290],["dldokan.store",291],["fastdour.store",291],["kuyhaa.me",292],["myplexi.fr",293],["pelismkvhd.com",294],["perverzija.com",295],["dameungrrr.videoid.baby",296],["idnes.cz",[297,298]]]);
const exceptionsMap = new Map([["hubdrive.com",[36]],["hubdrive.de",[36]]]);
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
