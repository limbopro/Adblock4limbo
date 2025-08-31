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
const argsList = [["/DOMContentLoaded|load/","runAutoTag"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["click","Event"],["click","","elements",".dropdown-menu a[href]"],["load","Object"],["load","hard_block"],["","adb"],["click","showNotice"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["load","nextFunction"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["/^(?:click|mousedown)$/","_0x"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","'\\'"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["click","","elements",".post.movies"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["DOMContentLoaded","checkAdblockUser"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["DOMContentLoaded","script[data-domain="],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["mousedown","shown_at"],["/click|mouse/","[native code]","elements","document"],["","focus"],["load","abDetectorPro"],["DOMContentLoaded","src=atob"],["error","blocker"],["load","error-report.com"],["click","pop"],["DOMContentLoaded","adClosedTimestamp"],["click","tampilkanUrl"],["click","openPopunder"],["load",".getComputedStyle"],["","STORAGE2"],["DOMContentLoaded","app_advert"],["message","adsense"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["load","Adblock"],["DOMContentLoaded","window.open"],["DOMContentLoaded","atob"],["","vads"],["devtoolschange"],["beforeunload"],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["load","crakPopInParams"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["load","popMagic"],["click","popurl"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["load",".innerHTML"],["/click|mousedown/","catch"],["adb"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","AdBlocker"],["","showModal"],["","goog"],["","document.body"],["","modal"],["click","adobeModalTestABenabled"],["blur","console.log"],["DOMContentLoaded","adsSrc"],["","AdB"],["load","adSession"],["DOMContentLoaded",".textContent"],["np.detect"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["load","document.querySelectorAll"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","[native code]","elements",".main-wrap"],["click","","elements","a#dlink"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["click","localStorage"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["click","Ads"],["/click|mouse|touch/","_0x"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","Promise"],["DOMContentLoaded","anchor.href"],["click","popupInterval"],["DOMContentLoaded","-banner"],["click","PopURL"],["DOMContentLoaded","checkAdBlocker"],["DOMContentLoaded","determineVisibility"],["DOMContentLoaded","Popunder"],["load","blockAdBlock"],["load","&&"],["click","handlePopup"],["play","openPopunder"],["DOMContentLoaded","/navigator|location\\.href/"],["click","pingUrl"],["mousedown","scoreUrl"]];
const hostnamesMap = new Map([["japscan.*",0],["cbc.ca",1],["io.google",2],["dukeofed.org",3],["newser.com",4],["sport1.de",5],["timesofindia.indiatimes.com",6],["drrtyr.mx",6],["pinoyalbums.com",6],["multiplayer.it",6],["skidrowreloaded.com",7],["mediafire.com",[8,9]],["kingofdown.com",10],["radiotormentamx.com",10],["limetorrents.*",[10,14]],["king-pes.*",10],["quelleestladifference.fr",10],["depedlps.*",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["komikcast.*",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["idedroidsafelink.*",10],["links-url.*",10],["interviewgig.com",10],["javaguides.net",10],["almohtarif-tech.net",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["zerotopay.com",10],["ak4eg.*",10],["mawsueaa.com",10],["hesgoal-live.io",10],["steanplay.*",11],["bibme.org",12],["citationmachine.net",12],["easybib.com",13],["pahe.*",14],["yts.*",14],["tube8.*",14],["topeuropix.*",14],["vermangasporno.com",14],["moviescounter.*",14],["imgtorrnt.in",14],["picbaron.com",[14,117]],["torrent9.*",14],["desiremovies.*",14],["letmejerk.com",14],["letmejerk2.com",14],["letmejerk3.com",14],["letmejerk4.com",14],["letmejerk5.com",14],["letmejerk6.com",14],["letmejerk7.com",14],["movs4u.*",14],["uwatchfree.*",14],["hydrax.*",14],["4movierulz.*",14],["projectfreetv.*",14],["arabseed.*",14],["btdb.*",[14,53]],["dlapk4all.com",14],["kropic.com",14],["pdfindir.net",14],["brstej.com",14],["topwwnews.com",14],["xsanime.com",14],["vidlo.us",14],["youx.xxx",14],["world4ufree.*",14],["animeindo.asia",14],["streamsport.*",14],["rojadirectatvhd.*",14],["userload.*",14],["badtaste.it",15],["adyou.*",16],["gotporn.com",17],["freepornrocks.com",17],["footybite.to",17],["rargb.to",17],["totalsportek.*",17],["totalsportekhd.com",17],["xn--mlaregvle-02af.nu",17],["realgfporn.com",[18,19]],["fxporn69.*",18],["thisvid.com",19],["xvideos-downloader.net",19],["imgspice.com",20],["vikiporn.com",21],["tnaflix.com",21],["pornomico.com",21],["yourlust.com",21],["hd-easyporn.com",21],["hotpornfile.org",21],["watchfreexxx.net",21],["vintageporntubes.com",21],["angelgals.com",21],["babesexy.com",21],["youlikeboys.com",21],["hentaihere.com",21],["ganstamovies.com",21],["youngleak.com",21],["jizzberry.com",21],["porndollz.com",21],["filmpornofrancais.fr",21],["pictoa.com",[21,44]],["pornohirsch.net",21],["herzporno.*",21],["deinesexfilme.com",21],["einfachtitten.com",21],["halloporno.*",21],["lesbenhd.com",21],["milffabrik.com",21],["porn-monkey.com",21],["porndrake.com",21],["pornhubdeutsch.net",21],["pornoaffe.com",21],["pornodavid.com",21],["pornoente.tv",21],["pornofisch.com",21],["pornofelix.com",21],["pornohammer.com",21],["pornohelm.com",21],["pornoklinge.com",21],["pornotom.com",21],["pornotommy.com",21],["pornovideos-hd.com",21],["pornozebra.com",21],["xhamsterdeutsch.xyz",21],["xnxx-sexfilme.com",21],["adultasianporn.com",21],["nsfwmonster.com",21],["girlsofdesire.org",21],["gaytail.com",21],["fetish-bb.com",21],["rumporn.com",21],["soyoungteens.com",21],["zubby.com",21],["lesbian8.com",21],["gayforfans.com",21],["reifporn.de",21],["javtsunami.com",21],["18tube.sex",21],["xxxextreme.org",21],["amateurs-fuck.com",21],["sex-amateur-clips.com",21],["hentaiworld.tv",21],["dads-banging-teens.com",21],["home-xxx-videos.com",21],["mature-chicks.com",21],["hqbang.com",21],["darknessporn.com",21],["familyporner.com",21],["freepublicporn.com",21],["pisshamster.com",21],["punishworld.com",21],["xanimu.com",21],["tubator.com",21],["hentai2w.com",[21,134]],["pornhd.com",22],["cnnamador.com",[22,31]],["cle0desktop.blogspot.com",22],["turkanime.co",22],["rexporn.*",22],["movies07.*",22],["camclips.tv",[22,45]],["blackpornhq.com",22],["xsexpics.com",22],["ulsex.net",22],["wannafreeporn.com",22],["ytube2dl.com",22],["pornocomics.*",22],["multiup.us",22],["protege-torrent.com",22],["pussyspace.com",[23,24]],["pussyspace.net",[23,24]],["empflix.com",25],["cpmlink.net",26],["bdsmstreak.com",26],["cutpaid.com",26],["pornforrelax.com",26],["fatwhitebutt.com",26],["pornomoll.*",26],["short.pe",27],["gsurl.*",27],["mimaletadepeliculas.*",28],["bs.to",29],["burningseries.*",29],["efukt.com",29],["dz4soft.*",30],["generacionretro.net",30],["nuevos-mu.ucoz.com",30],["yoututosjeff.*",30],["ebookmed.*",30],["lanjutkeun.*",30],["mimaletamusical.blogspot.com",30],["novelasesp.*",30],["visionias.net",30],["singingdalong.*",30],["b3infoarena.in",30],["lurdchinexgist.blogspot.com",30],["thefreedommatrix.blogspot.com",30],["hentai-vl.blogspot.com",30],["projetomotog.blogspot.com",30],["ktmx.pro",30],["lirik3satu.blogspot.com",30],["marketmovers.it",30],["pharmaguideline.com",30],["mixloads.com",30],["mangaromance.eu",30],["interssh.com",30],["freesoftpdfdownload.blogspot.com",30],["myadslink.com",30],["blackavelic.com",30],["doujindesu.*",30],["server.satunivers.tv",30],["flashingjungle.com",31],["ma-x.org",32],["lavozdegalicia.es",32],["ddwloclawek.pl",32],["ki24.info",32],["xmovies8.*",33],["xmovies08.org",34],["freecoursesonline.*",35],["lordpremium.*",35],["mp3fiber.com",[35,48]],["schrauben-normen.de",35],["avengerinator.blogspot.com",35],["novablogitalia.*",35],["link-to.net",35],["hanimesubth.com",35],["gsmturkey.net",35],["anisubindo.*",35],["adshrink.it",35],["presentation-ppt.com",35],["mangacanblog.com",35],["pekalongan-cits.blogspot.com",35],["4tymode.win",35],["linkvertise.com",35],["reifenrechner.at",35],["tire-size-calculator.info",35],["linuxsecurity.com",35],["itsguider.com",35],["cotravinh.blogspot.com",35],["itudong.com",35],["shortx.net",35],["btvsports.*",35],["lecturel.com",35],["bakai.org",35],["nar.k-ba.net",35],["eurotruck2.com.br",35],["tiroalpaloes.com",35],["stream4free.*",35],["tiroalpaloes.net",35],["flixsix.com",35],["tiroalpaloweb.xyz",35],["globaldjmix.com",36],["desiupload.*",[37,159]],["hblinks.pro",37],["hubcdn.vip",37],["hubdrive.*",[37,133]],["90fpsconfig.in",37],["katdrive.link",37],["kmhd.net",37],["bollydrive.rest",37],["360news4u.net",37],["hypershort.com",[37,131]],["bollydrive.*",[37,161]],["zazzybabes.com",38],["haaretz.co.il",39],["haaretz.com",39],["slate.com",40],["megalinks.info",41],["megapastes.com",41],["mega-mkv.com",[41,42]],["mkv-pastes.com",41],["zpaste.net",41],["zlpaste.net",41],["9xlinks.site",41],["mega-dvdrip.*",42],["peliculas-dvdrip.*",42],["desbloqueador.*",43],["cine.to",[44,199]],["newpelis.*",[44,51]],["pelix.*",[44,51]],["allcalidad.*",[44,134]],["khatrimaza.*",44],["kissasia.cc",44],["camwhores.*",45],["camwhorestv.*",45],["digjav.com",45],["uproxy.*",45],["videoszoofiliahd.com",46],["xxxtubezoo.com",47],["zooredtube.com",47],["ancensored.com",48],["ganool.*",48],["xrivonet.info",48],["pirate.*",48],["piratebay.*",48],["pirateproxy.*",48],["proxytpb.*",48],["thepiratebay.*",48],["uii.io",49],["porndoe.com",50],["acienciasgalilei.com",52],["playrust.io",53],["payskip.org",54],["short-url.link",55],["tubedupe.com",56],["mirrorace.*",57],["fatgirlskinny.net",58],["polska-ie.com",58],["windowsmatters.com",58],["canaltdt.es",59],["masbrooo.com",59],["2ndrun.tv",59],["oncehelp.com",60],["curto.win",60],["smallseotools.com",61],["mixdrp.*",62],["macwelt.de",63],["pcwelt.de",63],["capital.de",63],["geo.de",63],["allmomsex.com",64],["allnewindianporn.com",64],["analxxxvideo.com",64],["animalextremesex.com",64],["anime3d.xyz",64],["animefuckmovies.com",64],["animepornfilm.com",64],["animesexbar.com",64],["animesexclip.com",64],["animexxxsex.com",64],["animexxxfilms.com",64],["anysex.club",64],["apetube.asia",64],["asianfuckmovies.com",64],["asianfucktube.com",64],["asianporn.sexy",64],["asiansex.*",64],["asiansexcilps.com",64],["beeg.fund",64],["beegvideoz.com",64],["bestasiansex.pro",64],["bravotube.asia",64],["brutalanimalsfuck.com",64],["candyteenporn.com",64],["daddyfuckmovies.com",64],["desifuckonline.com",64],["exclusiveasianporn.com",64],["exteenporn.com",64],["fantasticporn.net",64],["fantasticyoungporn.com",64],["fineasiansex.com",64],["firstasianpussy.com",64],["freeindiansextube.com",64],["freepornasians.com",64],["freerealvideo.com",64],["fuck-beeg.com",64],["fuck-xnxx.com",64],["fuckfuq.com",64],["fuckundies.com",64],["gojapaneseporn.com",64],["golderotica.com",64],["goodyoungsex.com",64],["goyoungporn.com",64],["hardxxxmoms.com",64],["hdvintagetube.com",64],["hentaiporn.me",64],["hentaisexfilms.com",64],["hentaisexuality.com",64],["hot-teens-movies.mobi",64],["hotanimepornvideos.com",64],["hotanimevideos.com",64],["hotasianpussysex.com",64],["hotjapaneseshows.com",64],["hotmaturetube.com",64],["hotmilfs.pro",64],["hotorientalporn.com",64],["hotpornyoung.com",64],["hotxxxjapanese.com",64],["hotxxxpussy.com",64],["indiafree.net",64],["indianpornvideo.online",64],["japanfuck.*",64],["japanporn.*",64],["japanpornclip.com",64],["japanesetube.video",64],["japansex.me",64],["japanesexxxporn.com",64],["japansporno.com",64],["japanxxx.asia",64],["japanxxxworld.com",64],["keezmovies.surf",64],["lingeriefuckvideo.com",64],["liveanimalporn.zooo.club",64],["madhentaitube.com",64],["megahentaitube.com",64],["megajapanesesex.com",64],["megajapantube.com",64],["milfxxxpussy.com",64],["momsextube.pro",64],["momxxxass.com",64],["monkeyanimalporn.com",64],["moviexxx.mobi",64],["newanimeporn.com",64],["newjapanesexxx.com",64],["nicematureporn.com",64],["nudeplayboygirls.com",64],["originalindianporn.com",64],["originalteentube.com",64],["pig-fuck.com",64],["plainasianporn.com",64],["popularasianxxx.com",64],["pornanimetube.com",64],["pornasians.pro",64],["pornhat.asia",64],["pornjapanesesex.com",64],["pornvintage.tv",64],["primeanimesex.com",64],["realjapansex.com",64],["realmomsex.com",64],["redsexhub.com",64],["retroporn.world",64],["retrosexfilms.com",64],["sex-free-movies.com",64],["sexanimesex.com",64],["sexanimetube.com",64],["sexjapantube.com",64],["sexmomvideos.com",64],["sexteenxxxtube.com",64],["sexxxanimal.com",64],["sexyoungtube.com",64],["sexyvintageporn.com",64],["spicyvintageporn.com",64],["sunporno.club",64],["tabooanime.club",64],["teenextrem.com",64],["teenfucksex.com",64],["teenhost.net",64],["teensex.*",64],["teensexass.com",64],["tnaflix.asia",64],["totalfuckmovies.com",64],["totalmaturefuck.com",64],["txxx.asia",64],["vintagetube.*",64],["voyeurpornsex.com",64],["warmteensex.com",64],["wetasiancreampie.com",64],["wildhentaitube.com",64],["wowyoungsex.com",64],["xhamster-art.com",64],["xmovie.pro",64],["xnudevideos.com",64],["xnxxjapon.com",64],["xpics.me",64],["xvide.me",64],["xxxanimefuck.com",64],["xxxanimevideos.com",64],["xxxanimemovies.com",64],["xxxhentaimovies.com",64],["xxxhothub.com",64],["xxxjapaneseporntube.com",64],["xxxlargeporn.com",64],["xxxmomz.com",64],["xxxmovies.*",64],["xxxpornmilf.com",64],["xxxpussyclips.com",64],["xxxpussysextube.com",64],["xxxretrofuck.com",64],["xxxsex.pro",64],["xxxsexyjapanese.com",64],["xxxteenyporn.com",64],["xxxvideo.asia",64],["xxxyoungtv.com",64],["youjizzz.club",64],["youngpussyfuck.com",64],["bayimg.com",65],["celeb.gate.cc",66],["kinoger.re",67],["usersdrive.com",67],["desi.upn.bio",67],["zooqle.*",68],["masterplayer.xyz",69],["pussy-hub.com",69],["porndex.com",70],["compucalitv.com",71],["hdfull.*",72],["diariodenavarra.es",73],["mangamanga.*",74],["streameast.*",75],["thestreameast.*",75],["pennlive.com",76],["beautypageants.indiatimes.com",77],["01fmovies.com",78],["vev.*",79],["vidop.*",79],["lnk2.cc",80],["fullhdxxx.com",81],["classicpornbest.com",81],["www-daftarharga.blogspot.com",[81,140]],["1youngteenporn.com",81],["miraculous.to",[81,194]],["vtube.to",81],["zone-telechargement.*",81],["xstory-fr.com",81],["gosexpod.com",82],["tubepornclassic.com",83],["shemalez.com",83],["otakukan.com",84],["xcafe.com",85],["pornfd.com",85],["venusarchives.com",85],["imagehaha.com",86],["imagenpic.com",86],["imageshimage.com",86],["imagetwist.com",86],["megalink.*",87],["k1nk.co",87],["watchasians.cc",87],["lulustream.com",87],["lulustream.live",87],["luluvdo.com",87],["vibestreams.*",87],["gmx.*",88],["web.de",88],["news18.com",89],["thelanb.com",90],["dropmms.com",90],["softwaredescargas.com",91],["cracking-dz.com",92],["mega1080p.*",93],["anitube.*",93],["gazzetta.it",94],["9hentai.*",95],["gnula.*",96],["dziennikbaltycki.pl",97],["dzienniklodzki.pl",97],["dziennikpolski24.pl",97],["dziennikzachodni.pl",97],["echodnia.eu",97],["expressbydgoski.pl",97],["expressilustrowany.pl",97],["gazetakrakowska.pl",97],["gazetalubuska.pl",97],["gazetawroclawska.pl",97],["gk24.pl",97],["gloswielkopolski.pl",97],["gol24.pl",97],["gp24.pl",97],["gra.pl",97],["gs24.pl",97],["kurierlubelski.pl",97],["motofakty.pl",97],["naszemiasto.pl",97],["nowiny24.pl",97],["nowosci.com.pl",97],["nto.pl",97],["polskatimes.pl",97],["pomorska.pl",97],["poranny.pl",97],["sportowy24.pl",97],["strefaagro.pl",97],["strefabiznesu.pl",97],["stronakobiet.pl",97],["telemagazyn.pl",97],["to.com.pl",97],["wspolczesna.pl",97],["courseclub.me",97],["azrom.net",97],["alttyab.net",97],["esopress.com",97],["nesiaku.my.id",97],["onemanhua.com",98],["freeindianporn.mobi",98],["dr-farfar.com",99],["boyfriendtv.com",100],["brandstofprijzen.info",101],["netfuck.net",102],["gaypornhdfree.*",102],["nulljungle.com",102],["kisahdunia.com",102],["cinemakottaga.*",102],["privatemoviez.*",102],["sqlserveregitimleri.com",102],["tutcourse.com",102],["warddogs.com",102],["iimanga.com",102],["tinhocdongthap.com",102],["tremamnon.com",102],["423down.com",102],["brizzynovel.com",102],["jugomobile.com",102],["freecodezilla.net",102],["apkmaven.*",102],["iconmonstr.com",102],["rbxscripts.net",102],["comentariodetexto.com",102],["wordpredia.com",102],["allfaucet.xyz",[102,110]],["titbytz.tk",102],["replica-watch.info",102],["alludemycourses.com",102],["kayifamilytv.com",102],["interfans.org",102],["iir.ai",103],["popcornstream.*",104],["qpython.club",105],["dktechnicalmate.com",105],["recipahi.com",105],["e9china.net",106],["ontools.net",106],["marketbeat.com",107],["hentaipornpics.net",108],["jobzhub.store",109],["fitdynamos.com",109],["labgame.io",109],["ohionowcast.info",110],["wiour.com",110],["bitzite.com",[110,115,116]],["appsbull.com",110],["diudemy.com",110],["maqal360.com",[110,118,119]],["bitcotasks.com",110],["videolyrics.in",110],["manofadan.com",110],["cempakajaya.com",110],["tagecoin.com",110],["naijafav.top",110],["ourcoincash.xyz",110],["claimcoins.site",110],["cryptosh.pro",110],["eftacrypto.com",110],["fescrypto.com",110],["earnhub.net",110],["kiddyshort.com",110],["tronxminer.com",110],["neverdims.com",110],["homeairquality.org",111],["cety.app",[112,113]],["exego.app",112],["cutlink.net",112],["cutyurls.com",112],["cutty.app",112],["cutnet.net",112],["jixo.online",112],["cuty.me",113],["exnion.com",113],["upfion.com",[113,130]],["upfiles.app",[113,130]],["upfiles-urls.com",[113,130]],["pawastreams.pro",113],["vikingf1le.us.to",113],["gamerxyt.com",113],["up4stream.com",113],["ups2up.fun",113],["championdrive.co",113],["adcrypto.net",114],["admediaflex.com",114],["aduzz.com",114],["bitcrypto.info",114],["cdrab.com",114],["datacheap.io",114],["hbz.us",114],["savego.org",114],["owsafe.com",114],["sportweb.info",114],["gfx-station.com",115],["buzzheavier.com",116],["flashbang.sh",116],["trashbytes.net",116],["aiimgvlog.fun",117],["6indianporn.com",117],["amateurebonypics.com",117],["amateuryoungpics.com",117],["amigosporn.top",117],["cinemabg.net",117],["desimmshd.com",117],["everia.club",117],["frauporno.com",117],["freepdfcomic.eu",117],["givemeaporn.com",117],["hitomi.la",117],["jav-asia.top",117],["javfull.net",117],["javideo.net",117],["javsunday.com",117],["kr18plus.com",117],["luscious.net",117],["missavtv.com",117],["pilibook.com",117],["pornborne.com",117],["porngrey.com",117],["pornktube.*",117],["pornx.tube",117],["qqxnxx.com",117],["sexvideos.host",117],["submilf.com",117],["subtaboo.com",117],["tktube.com",117],["watchseries.*",117],["xfrenchies.com",117],["moderngyan.com",120],["sattakingcharts.in",120],["bgmi32bitapk.in",120],["bankshiksha.in",120],["earn.mpscstudyhub.com",120],["earn.quotesopia.com",120],["money.quotesopia.com",120],["best-mobilegames.com",120],["learn.moderngyan.com",120],["bharatsarkarijobalert.com",120],["quotesopia.com",120],["creditsgoal.com",120],["coingraph.us",121],["momo-net.com",121],["milfnut.*",121],["maxgaming.fi",121],["cybercityhelp.in",122],["tpi.li",123],["oii.la",123],["travel.vebma.com",124],["cloud.majalahhewan.com",124],["crm.cekresi.me",124],["ai.tempatwisata.pro",124],["pinloker.com",124],["sekilastekno.com",124],["shrinkme.*",125],["shrinke.*",125],["mrproblogger.com",125],["themezon.net",125],["dagensnytt.com",125],["azmath.info",126],["azsoft.*",126],["downfile.site",126],["downphanmem.com",126],["expertvn.com",126],["memangbau.com",126],["trangchu.news",126],["aztravels.net",126],["ielts-isa.edu.vn",126],["techedubyte.com",[126,240,241]],["jpopsingles.eu",126],["aipebel.com",126],["link.paid4link.com",[127,128]],["driveup.space",129],["crypt.cybar.xyz",129],["dynamicminister.net",129],["gofirmware.com",129],["national-park.com",129],["forgee.xyz",129],["gamehub.cam",129],["cutyion.com",130],["weshare.is",132],["file.gocmod.com",132],["hdhub4u.fail",133],["moviesubtitles.click",133],["telegratuita.com",133],["camarchive.tv",134],["flixbaba.*",134],["gntai.*",134],["grantorrent.*",134],["hentai2read.com",134],["icyporno.com",134],["illink.net",134],["javtiful.com",134],["m-hentai.net",134],["mejortorrent.*",134],["mejortorrento.*",134],["mejortorrents.*",134],["mejortorrents1.*",134],["mejortorrentt.*",134],["pornblade.com",134],["pornfelix.com",134],["pornxxxxtube.net",134],["redwap.me",134],["redwap2.com",134],["redwap3.com",134],["sunporno.com",134],["ver-comics-porno.com",134],["ver-mangas-porno.com",134],["x-fetish.tube",134],["x-tg.tube",134],["x-video.tube",134],["xanimeporn.com",134],["xxxvideohd.net",134],["zetporn.com",134],["gofile.download",134],["simpcity.*",135],["gameofporn.com",136],["0dramacool.net",137],["0gomovie.*",137],["0gomovies.*",137],["185.53.88.104",137],["185.53.88.204",137],["185.53.88.15",137],["123moviefree.*",137],["1kmovies.*",137],["1madrasdub.*",137],["1primewire.*",137],["2embed.*",137],["2madrasdub.*",137],["2umovies.*",137],["4anime.*",137],["9animetv.to",137],["aagmaal.com",137],["abysscdn.com",137],["adblockplustape.*",137],["ajkalerbarta.com",137],["altadefinizione01.*",137],["androidapks.biz",137],["androidsite.net",137],["animeonlinefree.org",137],["animesite.net",137],["animespank.com",137],["aniworld.to",137],["apkmody.io",137],["appsfree4u.com",137],["atomixhq.*",137],["audioz.download",137],["awafim.tv",137],["beinmatch.*",137],["bengalisite.com",137],["brmovies.*",137],["ch-play.com",137],["cima4u.*",137],["clickforhire.com",137],["clicknupload.*",137],["cloudy.pk",137],["cmovies.*",137],["computercrack.com",137],["coolcast2.com",137],["crackedsoftware.biz",137],["crackfree.org",137],["cricfree.*",137],["crichd.*",137],["cryptoblog24.info",137],["cuatrolatastv.blogspot.com",137],["cydiasources.net",137],["decmelfot.xyz",137],["dirproxy.com",137],["dood.*",137],["dopebox.to",137],["downloadapk.info",137],["downloadapps.info",137],["downloadgames.info",137],["downloadmusic.info",137],["downloadsite.org",137],["downloadwella.com",137],["ebooksite.org",137],["educationtips213.blogspot.com",137],["egyup.live",137],["embed.meomeo.pw",137],["embed.scdn.to",137],["emulatorsite.com",137],["f1stream.*",137],["fakedetail.com",137],["faselhd.*",137],["fbstream.*",137],["fclecteur.com",137],["filemoon.*",137],["filepress.*",[137,220]],["files.im",137],["filmlinks4u.*",137],["filmpertutti.*",137],["filmyzilla.*",137],["flexyhit.com",137],["fmovies.*",137],["freeflix.info",137],["freemoviesu4.com",137],["freeplayervideo.com",137],["freesoccer.net",137],["french-stream.*",137],["fseries.org",137],["fzlink.*",137],["gamefast.org",137],["gamesite.info",137],["gettapeads.com",137],["gmanga.me",137],["gocast123.me",137],["gofilms4u.*",137],["gogoanime.*",137],["gomoviz.*",137],["gooplay.net",137],["gostreamon.net",137],["harimanga.com",137],["hdmoviefair.*",137],["hdmovies4u.*",137],["hdmovies50.*",137],["hdmoviesfair.*",137],["healthnewsreel.com",137],["hexupload.net",137],["hh3dhay.*",137],["hinatasoul.com",137],["hindilinks4u.*",137],["hindisite.net",137],["holymanga.net",137],["hotmasti.*",137],["hurawatch.*",137],["hxfile.co",137],["isosite.org",137],["iv-soft.com",137],["januflix.expert",137],["jewelry.com.my",137],["johnwardflighttraining.com",137],["kabarportal.com",137],["klmanga.*",137],["klubsports.*",137],["kstorymedia.com",137],["la123movies.org",137],["lespassionsdechinouk.com",137],["libertestreamvf.*",137],["lilymanga.net",137],["linksdegrupos.com.br",137],["linkz.wiki",137],["livetvon.*",137],["livestreamtv.pk",137],["macsite.info",137],["manga1000.*",137],["manga1001.*",137],["mangaraw.*",137],["mangarawjp.*",137],["mangasite.org",137],["manhuascan.com",137],["megamovies.org",137],["mlbstream.*",137],["moddroid.com",137],["motogpstream.*",137],["movi.pk",[137,170]],["moviefree2.com",137],["movierulz.*",137],["movies123.*",137],["movies-watch.com.pk",137],["movies2watch.*",137],["moviesden.*",137],["moviesite.app",137],["moviesonline.fm",137],["moviesx.org",137],["moviezaddiction.*",137],["musicsite.biz",137],["myfernweh.com",137],["myviid.com",137],["nazarickol.com",137],["nbastream.*",137],["netcine.*",137],["nflstream.*",137],["nhlstream.*",137],["noob4cast.com",137],["oko.sh",137],["onlinewatchmoviespk.*",137],["orangeink.pk",137],["pahaplayers.click",137],["patchsite.net",137],["pctfenix.*",137],["pctnew.*",137],["pdfsite.net",137],["pksmovies.*",137],["play1002.com",137],["player-cdn.com",137],["plyjam.*",137],["plylive.*",137],["pogolinks.*",137],["popcorntime.*",137],["poscitech.*",137],["productkeysite.com",137],["projectfreetv.one",137],["romsite.org",137],["rugbystreams.*",137],["rytmp3.io",137],["send.cm",137],["seriesite.net",137],["seriezloaded.com.ng",137],["serijehaha.com",137],["shahed4u.*",137],["sflix.*",137],["shrugemojis.com",137],["siteapk.net",137],["siteflix.org",137],["sitegames.net",137],["sitekeys.net",137],["sitepdf.com",137],["sitesunblocked.*",137],["sitetorrent.com",137],["softwaresite.net",137],["solarmovies.*",137],["sportbar.live",137],["sportcast.*",137],["sportskart.*",137],["sports-stream.*",137],["ssyoutube.com",137],["stardima.com",137],["stream4free.live",137],["streaming-french.*",137],["streamers.*",137],["streamingcommunity.*",[137,206]],["superapk.org",137],["supermovies.org",137],["t20cup.*",137],["tainio-mania.online",137],["talaba.su",137],["tamilguns.org",137],["tatabrada.tv",137],["techtrendmakers.com",137],["tennisstreams.*",137],["thememypc.net",137],["thripy.com",137],["torrentdosfilmes.*",137],["toonanime.*",137],["travelplanspro.com",137],["tusfiles.com",137],["tvonlinesports.com",137],["tvply.*",137],["ufcstream.*",137],["ultramovies.org",137],["uploadbank.com",137],["uptomega.*",137],["uqload.*",137],["urdubolo.pk",137],["vudeo.*",137],["vidoo.*",137],["vidspeeds.com",137],["vipboxtv.*",137],["viprow.*",137],["warezsite.net",137],["watchmovies2.com",137],["watchsite.net",137],["watchsouthpark.tv",137],["web.livecricket.is",137],["webseries.club",137],["y2mate.com",137],["yesmovies.*",137],["yomovies.*",137],["yomovies1.*",137],["youapk.net",137],["youtube4kdownloader.com",137],["yt2mp3s.*",137],["yts-subs.com",137],["kat.*",137],["katbay.*",137],["kickass.*",137],["kickasshydra.*",137],["kickasskat.*",137],["kickass2.*",137],["kickasstorrents.*",137],["kat2.*",137],["kattracker.*",137],["thekat.*",137],["thekickass.*",137],["kickassz.*",137],["kickasstorrents2.*",137],["topkickass.*",137],["kickassgo.*",137],["kkickass.*",137],["kkat.*",137],["kickasst.*",137],["kick4ss.*",137],["cineb.rs",138],["moviesjoyhd.to",138],["rawkuma.com",[138,188]],["nekolink.site",139],["advantien.com",141],["bailbondsfinder.com",141],["bg-gledai.*",141],["bigpiecreative.com",141],["childrenslibrarylady.com",141],["classifarms.com",141],["comtasq.ca",141],["crone.es",141],["ctrmarketingsolutions.com",141],["dropnudes.com",141],["ftuapps.dev",141],["gendatabase.com",141],["ghscanner.com",141],["gledaitv.*",141],["grsprotection.com",141],["gruporafa.com.br",141],["inmatefindcalifornia.com",141],["inmatesearchidaho.com",141],["itsonsitetv.com",141],["mfmfinancials.com",141],["myproplugins.com",141],["nurulislam.org",141],["onehack.us",141],["ovester.com",141],["paste.bin.sx",141],["privatenudes.com",141],["renoconcrete.ca",141],["richieashbeck.com",141],["sat.technology",141],["short1ink.com",141],["stpm.co.uk",141],["wegotcookies.co",141],["mathcrave.com",141],["vip-box.app",141],["filmyzones.com",142],["gamer18.net",142],["pornflixhd.com",142],["androidpolice.com",143],["cbr.com",143],["gamerant.com",143],["howtogeek.com",143],["thegamer.com",143],["winfuture.de",144],["emturbovid.com",145],["findjav.com",145],["javggvideo.xyz",145],["mmtv01.xyz",145],["stbturbo.xyz",145],["trailerhg.xyz",145],["turboplayers.xyz",145],["iplark.com",146],["komikdewasa.art",147],["daemon-hentai.com",[148,149]],["daemonanime.net",[150,151]],["canlikolik.my",152],["flight-report.com",153],["vulture.com",154],["megaplayer.bokracdn.run",155],["hentaistream.com",156],["siteunblocked.info",157],["larvelfaucet.com",158],["feyorra.top",158],["claimtrx.com",158],["pagalmovies.*",159],["7starhd.*",159],["jalshamoviez.*",159],["moviesyug.net",159],["9xupload.*",159],["bdupload.*",159],["rdxhd1.*",159],["parispi.net",160],["hentaicloud.com",161],["nuvid.*",161],["tio.ch",162],["lavanguardia.com",162],["news.bg",[162,235]],["tu.no",162],["paperzonevn.com",163],["dailyvideoreports.net",164],["lewd.ninja",165],["systemnews24.com",166],["niusdiario.es",167],["playporngames.com",168],["descargatepelis.com",168],["javx.*",168],["kungfutv.net",168],["freemagazines.top",169],["freepreset.net",169],["moviessources.*",171],["cutesexyteengirls.com",172],["haho.moe",173],["nicy-spicy.pw",174],["novelmultiverse.com",175],["mylegalporno.com",176],["embedsports.me",177],["embedstream.me",177],["jumbtv.com",177],["reliabletv.me",177],["guardaserie.*",178],["cine-calidad.*",179],["foxhq.com",180],["xnxx.com",181],["xvideos.*",181],["thecut.com",182],["novelism.jp",183],["alphapolis.co.jp",184],["game3rb.com",185],["javhub.net",185],["thotvids.com",186],["tokuzilla.net",186],["tokuzl.net",186],["berklee.edu",187],["imeteo.sk",189],["youtubemp3donusturucu.net",190],["videovard.*",191],["cluset.com",192],["homemoviestube.com",192],["sexseeimage.com",192],["alueviesti.fi",193],["kiuruvesilehti.fi",193],["lempaala.ideapark.fi",193],["olutposti.fi",193],["urjalansanomat.fi",193],["tainhanhvn.com",195],["titantv.com",196],["cocomanga.com",197],["animelatinohd.com",197],["buondua.com",198],["m.liputan6.com",200],["stardewids.com",[200,217]],["ingles.com",201],["spanishdict.com",201],["surfline.com",202],["dongknows.com",203],["amateur8.com",204],["freeporn8.com",204],["maturetubehere.com",204],["corriere.it",205],["oggi.it",205],["apkcombo.com",207],["sponsorhunter.com",208],["novelssites.com",209],["haxina.com",210],["scimagojr.com",210],["myperfectweather.com",210],["torrentmac.net",211],["udvl.com",212],["dlpanda.com",213],["einrichtungsbeispiele.de",214],["weadown.com",215],["molotov.tv",216],["commands.gg",217],["smgplaza.com",218],["freepik.com",219],["sportnews.to",221],["soccershoes.blog",221],["shineads.*",221],["diyphotography.net",222],["bitchesgirls.com",223],["cdn.bg-gledai.*",224],["cdn.gledaitv.*",224],["explorecams.com",225],["minecraft.buzz",225],["hiraethtranslation.com",226],["programmingeeksclub.com",227],["diendancauduong.com",228],["androidadult.com",229],["parentcircle.com",230],["h-game18.xyz",231],["wheelofgold.com",232],["davescomputertips.com",233],["historyofroyalwomen.com",233],["motchill.*",234],["lifestyle.bg",235],["topsport.bg",235],["webcafe.bg",235],["freepikdownloader.com",236],["freepasses.org",237],["iusedtobeaboss.com",238],["blogtruyenmoi.com",239],["repretel.com",242],["tubereader.me",242],["graphicget.com",243],["qiwi.gg",[244,245]],["sonixgvn.net",246],["alliptvlinks.com",247],["smashyplayer.top",248],["upns.*",248],["xvideos.com",249],["xvideos2.com",249],["colourxh.site",250],["fullxh.com",250],["galleryxh.site",250],["megaxh.com",250],["movingxh.world",250],["seexh.com",250],["unlockxh4.com",250],["valuexh.life",250],["xhaccess.com",250],["xhadult2.com",250],["xhadult3.com",250],["xhadult4.com",250],["xhadult5.com",250],["xhamster.*",250],["xhamster1.*",250],["xhamster10.*",250],["xhamster11.*",250],["xhamster12.*",250],["xhamster13.*",250],["xhamster14.*",250],["xhamster15.*",250],["xhamster16.*",250],["xhamster17.*",250],["xhamster18.*",250],["xhamster19.*",250],["xhamster20.*",250],["xhamster2.*",250],["xhamster3.*",250],["xhamster4.*",250],["xhamster42.*",250],["xhamster46.com",250],["xhamster5.*",250],["xhamster7.*",250],["xhamster8.*",250],["xhamsterporno.mx",250],["xhbig.com",250],["xhbranch5.com",250],["xhchannel.com",250],["xhdate.world",250],["xhlease.world",250],["xhmoon5.com",250],["xhofficial.com",250],["xhopen.com",250],["xhplanet1.com",250],["xhplanet2.com",250],["xhreal2.com",250],["xhreal3.com",250],["xhspot.com",250],["xhtotal.com",250],["xhtree.com",250],["xhvictory.com",250],["xhwebsite.com",250],["xhwebsite2.com",250],["xhwebsite5.com",250],["xhwide1.com",250],["xhwide2.com",250],["xhwide5.com",250],["katfile.com",251],["readcomiconline.*",252],["nekopoi.*",253],["ukchat.co.uk",254],["hivelr.com",255],["koyso.*",256],["skidrowcodex.net",257],["takimag.com",258],["digi.no",259],["twi-fans.com",260],["learn-cpp.org",261],["terashare.co",262],["pornwex.tv",263],["smithsonianmag.com",264],["homesports.net",265],["realmoasis.com",266],["javfc2.xyz",267],["gobankingrates.com",268],["hiddenleaf.to",269],["ronorp.net",270],["gdflix.*",271],["a1movies.*",272],["videovak.com",273],["akirabox.com",274],["powcloud.org",275],["purplex.app",276],["maggotdrowning.com",277],["bilinovel.com",278],["esportstales.com",279],["streamup.ws",280],["pagalfree.com",281],["pagalworld.us",281],["pornharlot.net",282],["umatechnology.org",283],["rarbg.how",284],["4live.online",285],["friv.com",286],["rlxoff.com",287],["solobari.it",288],["hydrogen.lat",289],["criollasx.com",290],["pantieshub.net",291],["olamovies.*",292],["idnes.cz",[293,294]]]);
const exceptionsMap = new Map([["hubdrive.com",[37]],["hubdrive.de",[37]]]);
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
