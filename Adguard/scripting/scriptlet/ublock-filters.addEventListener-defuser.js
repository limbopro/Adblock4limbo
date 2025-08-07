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
const argsList = [["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["click","Event"],["click","","elements",".dropdown-menu a[href]"],["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["load","nextFunction"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["/^(?:click|mousedown)$/","_0x"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","'\\'"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["click","","elements",".post.movies"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["DOMContentLoaded","script[data-domain="],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["mousedown","shown_at"],["/click|mouse/","[native code]","elements","document"],["load","crakPopInParams"],["","focus"],["load","abDetectorPro"],["DOMContentLoaded","src=atob"],["error","blocker"],["load","error-report.com"],["click","pop"],["click","tampilkanUrl"],["","STORAGE2"],["load",".getComputedStyle"],["DOMContentLoaded","app_advert"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["load","Adblock"],["DOMContentLoaded","window.open"],["DOMContentLoaded","atob"],["","vads"],["devtoolschange"],["beforeunload"],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["load","popMagic"],["click","popurl"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["load",".innerHTML"],["/click|mousedown/","catch"],["adb"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","AdBlocker"],["","showModal"],["","goog"],["","document.body"],["","modal"],["click","adobeModalTestABenabled"],["blur","console.log"],["DOMContentLoaded","adsSrc"],["","AdB"],["load","adSession"],["DOMContentLoaded",".textContent"],["np.detect"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["load","document.querySelectorAll"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","[native code]","elements",".main-wrap"],["click","","elements","a#dlink"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["click","localStorage"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","Promise"],["DOMContentLoaded","anchor.href"],["click","popupInterval"],["DOMContentLoaded","-banner"],["click","PopURL"],["DOMContentLoaded","checkAdBlocker"],["DOMContentLoaded","determineVisibility"],["DOMContentLoaded","Popunder"],["load","blockAdBlock"],["load","&&"],["click","handlePopup"],["play","openPopunder"],["click","pingUrl"],["mousedown","scoreUrl"]];
const hostnamesMap = new Map([["cbc.ca",0],["io.google",1],["dukeofed.org",2],["newser.com",3],["sport1.de",4],["timesofindia.indiatimes.com",5],["drrtyr.mx",5],["pinoyalbums.com",5],["multiplayer.it",5],["mediafire.com",[6,7]],["kingofdown.com",8],["radiotormentamx.com",8],["limetorrents.*",[8,12]],["king-pes.*",8],["quelleestladifference.fr",8],["depedlps.*",8],["otakuworldsite.blogspot.com",8],["ad-itech.blogspot.com",8],["komikcast.*",8],["unlockapk.com",8],["mobdi3ips.com",8],["socks24.org",8],["idedroidsafelink.*",8],["links-url.*",8],["interviewgig.com",8],["javaguides.net",8],["almohtarif-tech.net",8],["devoloperxda.blogspot.com",8],["zwergenstadt.com",8],["upxin.net",8],["ciudadblogger.com",8],["ke-1.com",8],["bit-shares.com",8],["itdmusics.com",8],["aspdotnet-suresh.com",8],["tudo-para-android.com",8],["zerotopay.com",8],["ak4eg.*",8],["mawsueaa.com",8],["hesgoal-live.io",8],["steanplay.*",9],["bibme.org",10],["citationmachine.net",10],["easybib.com",11],["pahe.*",12],["yts.*",12],["tube8.*",12],["topeuropix.*",12],["vermangasporno.com",12],["moviescounter.*",12],["imgtorrnt.in",12],["picbaron.com",[12,115]],["torrent9.*",12],["desiremovies.*",12],["letmejerk.com",12],["letmejerk2.com",12],["letmejerk3.com",12],["letmejerk4.com",12],["letmejerk5.com",12],["letmejerk6.com",12],["letmejerk7.com",12],["movs4u.*",12],["uwatchfree.*",12],["hydrax.*",12],["4movierulz.*",12],["projectfreetv.*",12],["arabseed.*",12],["btdb.*",[12,51]],["dlapk4all.com",12],["kropic.com",12],["pdfindir.net",12],["brstej.com",12],["topwwnews.com",12],["xsanime.com",12],["vidlo.us",12],["youx.xxx",12],["world4ufree.*",12],["animeindo.asia",12],["streamsport.*",12],["rojadirectatvhd.*",12],["userload.*",12],["badtaste.it",13],["adyou.*",14],["gotporn.com",15],["freepornrocks.com",15],["footybite.to",15],["rargb.to",15],["totalsportek.*",15],["totalsportekhd.com",15],["xn--mlaregvle-02af.nu",15],["realgfporn.com",[16,17]],["fxporn69.*",16],["thisvid.com",17],["xvideos-downloader.net",17],["imgspice.com",18],["vikiporn.com",19],["tnaflix.com",19],["pornomico.com",19],["yourlust.com",19],["hd-easyporn.com",19],["hotpornfile.org",19],["watchfreexxx.net",19],["vintageporntubes.com",19],["angelgals.com",19],["babesexy.com",19],["youlikeboys.com",19],["hentaihere.com",19],["ganstamovies.com",19],["youngleak.com",19],["jizzberry.com",19],["porndollz.com",19],["filmpornofrancais.fr",19],["pictoa.com",[19,42]],["pornohirsch.net",19],["herzporno.*",19],["deinesexfilme.com",19],["einfachtitten.com",19],["halloporno.*",19],["lesbenhd.com",19],["milffabrik.com",19],["porn-monkey.com",19],["porndrake.com",19],["pornhubdeutsch.net",19],["pornoaffe.com",19],["pornodavid.com",19],["pornoente.tv",19],["pornofisch.com",19],["pornofelix.com",19],["pornohammer.com",19],["pornohelm.com",19],["pornoklinge.com",19],["pornotom.com",19],["pornotommy.com",19],["pornovideos-hd.com",19],["pornozebra.com",19],["xhamsterdeutsch.xyz",19],["xnxx-sexfilme.com",19],["adultasianporn.com",19],["nsfwmonster.com",19],["girlsofdesire.org",19],["gaytail.com",19],["fetish-bb.com",19],["rumporn.com",19],["soyoungteens.com",19],["zubby.com",19],["lesbian8.com",19],["gayforfans.com",19],["reifporn.de",19],["javtsunami.com",19],["18tube.sex",19],["xxxextreme.org",19],["amateurs-fuck.com",19],["sex-amateur-clips.com",19],["hentaiworld.tv",19],["dads-banging-teens.com",19],["home-xxx-videos.com",19],["mature-chicks.com",19],["hqbang.com",19],["darknessporn.com",19],["familyporner.com",19],["freepublicporn.com",19],["pisshamster.com",19],["punishworld.com",19],["xanimu.com",19],["tubator.com",19],["hentai2w.com",[19,131]],["pornhd.com",20],["cnnamador.com",[20,29]],["cle0desktop.blogspot.com",20],["turkanime.co",20],["rexporn.*",20],["movies07.*",20],["camclips.tv",[20,43]],["blackpornhq.com",20],["xsexpics.com",20],["ulsex.net",20],["wannafreeporn.com",20],["ytube2dl.com",20],["pornocomics.*",20],["multiup.us",20],["protege-torrent.com",20],["pussyspace.com",[21,22]],["pussyspace.net",[21,22]],["empflix.com",23],["cpmlink.net",24],["bdsmstreak.com",24],["cutpaid.com",24],["pornforrelax.com",24],["fatwhitebutt.com",24],["pornomoll.*",24],["short.pe",25],["gsurl.*",25],["mimaletadepeliculas.*",26],["bs.to",27],["burningseries.*",27],["efukt.com",27],["dz4soft.*",28],["generacionretro.net",28],["nuevos-mu.ucoz.com",28],["micloudfiles.com",28],["yoututosjeff.*",28],["ebookmed.*",28],["lanjutkeun.*",28],["mimaletamusical.blogspot.com",28],["novelasesp.*",28],["visionias.net",28],["singingdalong.*",28],["b3infoarena.in",28],["lurdchinexgist.blogspot.com",28],["thefreedommatrix.blogspot.com",28],["hentai-vl.blogspot.com",28],["projetomotog.blogspot.com",28],["ktmx.pro",28],["lirik3satu.blogspot.com",28],["marketmovers.it",28],["pharmaguideline.com",28],["mixloads.com",28],["mangaromance.eu",28],["interssh.com",28],["freesoftpdfdownload.blogspot.com",28],["myadslink.com",28],["blackavelic.com",28],["doujindesu.*",28],["server.satunivers.tv",28],["flashingjungle.com",29],["ma-x.org",30],["lavozdegalicia.es",30],["ddwloclawek.pl",30],["ki24.info",30],["xmovies8.*",31],["xmovies08.org",32],["freecoursesonline.*",33],["lordpremium.*",33],["mp3fiber.com",[33,46]],["schrauben-normen.de",33],["avengerinator.blogspot.com",33],["novablogitalia.*",33],["link-to.net",33],["hanimesubth.com",33],["gsmturkey.net",33],["anisubindo.*",33],["adshrink.it",33],["presentation-ppt.com",33],["mangacanblog.com",33],["pekalongan-cits.blogspot.com",33],["4tymode.win",33],["linkvertise.com",33],["reifenrechner.at",33],["tire-size-calculator.info",33],["linuxsecurity.com",33],["itsguider.com",33],["cotravinh.blogspot.com",33],["itudong.com",33],["shortx.net",33],["btvsports.*",33],["lecturel.com",33],["bakai.org",33],["nar.k-ba.net",33],["eurotruck2.com.br",33],["tiroalpaloes.com",33],["stream4free.*",33],["tiroalpaloes.net",33],["flixsix.com",33],["tiroalpaloweb.xyz",33],["globaldjmix.com",34],["desiupload.*",[35,154]],["hblinks.pro",35],["hubcdn.vip",35],["hubdrive.*",35],["90fpsconfig.in",35],["katdrive.link",35],["kmhd.net",35],["bollydrive.rest",35],["360news4u.net",35],["hypershort.com",[35,128]],["bollydrive.*",[35,156]],["zazzybabes.com",36],["haaretz.co.il",37],["haaretz.com",37],["slate.com",38],["megalinks.info",39],["megapastes.com",39],["mega-mkv.com",[39,40]],["mkv-pastes.com",39],["zpaste.net",39],["zlpaste.net",39],["9xlinks.site",39],["mega-dvdrip.*",40],["peliculas-dvdrip.*",40],["desbloqueador.*",41],["cine.to",[42,193]],["newpelis.*",[42,49]],["pelix.*",[42,49]],["allcalidad.*",[42,131]],["khatrimaza.*",42],["kissasia.cc",42],["camwhores.*",43],["camwhorestv.*",43],["digjav.com",43],["uproxy.*",43],["videoszoofiliahd.com",44],["xxxtubezoo.com",45],["zooredtube.com",45],["ancensored.com",46],["ganool.*",46],["xrivonet.info",46],["pirate.*",46],["piratebay.*",46],["pirateproxy.*",46],["proxytpb.*",46],["thepiratebay.*",46],["uii.io",47],["porndoe.com",48],["acienciasgalilei.com",50],["playrust.io",51],["payskip.org",52],["short-url.link",53],["tubedupe.com",54],["mirrorace.*",55],["fatgirlskinny.net",56],["polska-ie.com",56],["windowsmatters.com",56],["canaltdt.es",57],["masbrooo.com",57],["2ndrun.tv",57],["oncehelp.com",58],["curto.win",58],["smallseotools.com",59],["mixdrp.*",60],["macwelt.de",61],["pcwelt.de",61],["capital.de",61],["geo.de",61],["allmomsex.com",62],["allnewindianporn.com",62],["analxxxvideo.com",62],["animalextremesex.com",62],["anime3d.xyz",62],["animefuckmovies.com",62],["animepornfilm.com",62],["animesexbar.com",62],["animesexclip.com",62],["animexxxsex.com",62],["animexxxfilms.com",62],["anysex.club",62],["apetube.asia",62],["asianfuckmovies.com",62],["asianfucktube.com",62],["asianporn.sexy",62],["asiansex.*",62],["asiansexcilps.com",62],["beeg.fund",62],["beegvideoz.com",62],["bestasiansex.pro",62],["bravotube.asia",62],["brutalanimalsfuck.com",62],["candyteenporn.com",62],["daddyfuckmovies.com",62],["desifuckonline.com",62],["exclusiveasianporn.com",62],["exteenporn.com",62],["fantasticporn.net",62],["fantasticyoungporn.com",62],["fineasiansex.com",62],["firstasianpussy.com",62],["freeindiansextube.com",62],["freepornasians.com",62],["freerealvideo.com",62],["fuck-beeg.com",62],["fuck-xnxx.com",62],["fuckfuq.com",62],["fuckundies.com",62],["gojapaneseporn.com",62],["golderotica.com",62],["goodyoungsex.com",62],["goyoungporn.com",62],["hardxxxmoms.com",62],["hdvintagetube.com",62],["hentaiporn.me",62],["hentaisexfilms.com",62],["hentaisexuality.com",62],["hot-teens-movies.mobi",62],["hotanimepornvideos.com",62],["hotanimevideos.com",62],["hotasianpussysex.com",62],["hotjapaneseshows.com",62],["hotmaturetube.com",62],["hotmilfs.pro",62],["hotorientalporn.com",62],["hotpornyoung.com",62],["hotxxxjapanese.com",62],["hotxxxpussy.com",62],["indiafree.net",62],["indianpornvideo.online",62],["japanfuck.*",62],["japanporn.*",62],["japanpornclip.com",62],["japanesetube.video",62],["japansex.me",62],["japanesexxxporn.com",62],["japansporno.com",62],["japanxxx.asia",62],["japanxxxworld.com",62],["keezmovies.surf",62],["lingeriefuckvideo.com",62],["liveanimalporn.zooo.club",62],["madhentaitube.com",62],["megahentaitube.com",62],["megajapanesesex.com",62],["megajapantube.com",62],["milfxxxpussy.com",62],["momsextube.pro",62],["momxxxass.com",62],["monkeyanimalporn.com",62],["moviexxx.mobi",62],["newanimeporn.com",62],["newjapanesexxx.com",62],["nicematureporn.com",62],["nudeplayboygirls.com",62],["originalindianporn.com",62],["originalteentube.com",62],["pig-fuck.com",62],["plainasianporn.com",62],["popularasianxxx.com",62],["pornanimetube.com",62],["pornasians.pro",62],["pornhat.asia",62],["pornjapanesesex.com",62],["pornvintage.tv",62],["primeanimesex.com",62],["realjapansex.com",62],["realmomsex.com",62],["redsexhub.com",62],["retroporn.world",62],["retrosexfilms.com",62],["sex-free-movies.com",62],["sexanimesex.com",62],["sexanimetube.com",62],["sexjapantube.com",62],["sexmomvideos.com",62],["sexteenxxxtube.com",62],["sexxxanimal.com",62],["sexyoungtube.com",62],["sexyvintageporn.com",62],["spicyvintageporn.com",62],["sunporno.club",62],["tabooanime.club",62],["teenextrem.com",62],["teenfucksex.com",62],["teenhost.net",62],["teensex.*",62],["teensexass.com",62],["tnaflix.asia",62],["totalfuckmovies.com",62],["totalmaturefuck.com",62],["txxx.asia",62],["vintagetube.*",62],["voyeurpornsex.com",62],["warmteensex.com",62],["wetasiancreampie.com",62],["wildhentaitube.com",62],["wowyoungsex.com",62],["xhamster-art.com",62],["xmovie.pro",62],["xnudevideos.com",62],["xnxxjapon.com",62],["xpics.me",62],["xvide.me",62],["xxxanimefuck.com",62],["xxxanimevideos.com",62],["xxxanimemovies.com",62],["xxxhentaimovies.com",62],["xxxhothub.com",62],["xxxjapaneseporntube.com",62],["xxxlargeporn.com",62],["xxxmomz.com",62],["xxxmovies.*",62],["xxxpornmilf.com",62],["xxxpussyclips.com",62],["xxxpussysextube.com",62],["xxxretrofuck.com",62],["xxxsex.pro",62],["xxxsexyjapanese.com",62],["xxxteenyporn.com",62],["xxxvideo.asia",62],["xxxyoungtv.com",62],["youjizzz.club",62],["youngpussyfuck.com",62],["bayimg.com",63],["celeb.gate.cc",64],["kinoger.re",65],["usersdrive.com",65],["desi.upn.bio",65],["zooqle.*",66],["masterplayer.xyz",67],["pussy-hub.com",67],["porndex.com",68],["compucalitv.com",69],["hdfull.*",70],["diariodenavarra.es",71],["mangamanga.*",72],["streameast.*",73],["thestreameast.*",73],["pennlive.com",74],["beautypageants.indiatimes.com",75],["01fmovies.com",76],["vev.*",77],["vidop.*",77],["lnk2.cc",78],["fullhdxxx.com",79],["classicpornbest.com",79],["www-daftarharga.blogspot.com",[79,138]],["1youngteenporn.com",79],["miraculous.to",[79,188]],["vtube.to",79],["zone-telechargement.*",79],["xstory-fr.com",79],["gosexpod.com",80],["tubepornclassic.com",81],["shemalez.com",81],["otakukan.com",82],["xcafe.com",83],["pornfd.com",83],["venusarchives.com",83],["imagehaha.com",84],["imagenpic.com",84],["imageshimage.com",84],["imagetwist.com",84],["megalink.*",85],["k1nk.co",85],["watchasians.cc",85],["lulustream.com",85],["lulustream.live",85],["luluvdo.com",85],["vibestreams.*",85],["gmx.*",86],["web.de",86],["news18.com",87],["thelanb.com",88],["dropmms.com",88],["softwaredescargas.com",89],["cracking-dz.com",90],["mega1080p.*",91],["anitube.*",91],["gazzetta.it",92],["9hentai.*",93],["gnula.*",94],["dziennikbaltycki.pl",95],["dzienniklodzki.pl",95],["dziennikpolski24.pl",95],["dziennikzachodni.pl",95],["echodnia.eu",95],["expressbydgoski.pl",95],["expressilustrowany.pl",95],["gazetakrakowska.pl",95],["gazetalubuska.pl",95],["gazetawroclawska.pl",95],["gk24.pl",95],["gloswielkopolski.pl",95],["gol24.pl",95],["gp24.pl",95],["gra.pl",95],["gs24.pl",95],["kurierlubelski.pl",95],["motofakty.pl",95],["naszemiasto.pl",95],["nowiny24.pl",95],["nowosci.com.pl",95],["nto.pl",95],["polskatimes.pl",95],["pomorska.pl",95],["poranny.pl",95],["sportowy24.pl",95],["strefaagro.pl",95],["strefabiznesu.pl",95],["stronakobiet.pl",95],["telemagazyn.pl",95],["to.com.pl",95],["wspolczesna.pl",95],["courseclub.me",95],["azrom.net",95],["alttyab.net",95],["esopress.com",95],["nesiaku.my.id",95],["onemanhua.com",96],["freeindianporn.mobi",96],["dr-farfar.com",97],["boyfriendtv.com",98],["brandstofprijzen.info",99],["netfuck.net",100],["gaypornhdfree.*",100],["blog24.me",[100,108]],["nulljungle.com",100],["kisahdunia.com",100],["cinemakottaga.*",100],["privatemoviez.*",100],["sqlserveregitimleri.com",100],["tutcourse.com",100],["warddogs.com",100],["iimanga.com",100],["tinhocdongthap.com",100],["tremamnon.com",100],["423down.com",100],["brizzynovel.com",100],["jugomobile.com",100],["freecodezilla.net",100],["apkmaven.*",100],["iconmonstr.com",100],["rbxscripts.net",100],["comentariodetexto.com",100],["wordpredia.com",100],["allfaucet.xyz",[100,108]],["titbytz.tk",100],["replica-watch.info",100],["alludemycourses.com",100],["kayifamilytv.com",100],["interfans.org",100],["iir.ai",101],["popcornstream.*",102],["qpython.club",103],["dktechnicalmate.com",103],["recipahi.com",103],["e9china.net",104],["ontools.net",104],["marketbeat.com",105],["hentaipornpics.net",106],["jobzhub.store",107],["fitdynamos.com",107],["labgame.io",107],["ohionowcast.info",108],["wiour.com",108],["bitzite.com",[108,113,114]],["appsbull.com",108],["diudemy.com",108],["maqal360.com",[108,116,117]],["bitcotasks.com",108],["videolyrics.in",108],["manofadan.com",108],["cempakajaya.com",108],["tagecoin.com",108],["naijafav.top",108],["ourcoincash.xyz",108],["claimcoins.site",108],["cryptosh.pro",108],["eftacrypto.com",108],["fescrypto.com",108],["earnhub.net",108],["kiddyshort.com",108],["tronxminer.com",108],["neverdims.com",108],["homeairquality.org",109],["cety.app",[110,111]],["exego.app",110],["cutlink.net",110],["cutyurls.com",110],["cutty.app",110],["cutnet.net",110],["jixo.online",110],["cuty.me",111],["exnion.com",111],["upfion.com",[111,127]],["upfiles.app",[111,127]],["upfiles-urls.com",[111,127]],["vikingf1le.us.to",111],["gamerxyt.com",111],["up4stream.com",111],["ups2up.fun",111],["championdrive.co",111],["adcrypto.net",112],["admediaflex.com",112],["aduzz.com",112],["bitcrypto.info",112],["cdrab.com",112],["datacheap.io",112],["hbz.us",112],["savego.org",112],["owsafe.com",112],["sportweb.info",112],["gfx-station.com",113],["buzzheavier.com",114],["flashbang.sh",114],["trashbytes.net",114],["aiimgvlog.fun",115],["6indianporn.com",115],["amateurebonypics.com",115],["amateuryoungpics.com",115],["amigosporn.top",115],["cinemabg.net",115],["desimmshd.com",115],["everia.club",115],["frauporno.com",115],["givemeaporn.com",115],["hitomi.la",115],["jav-asia.top",115],["javfull.net",115],["javideo.net",115],["javsunday.com",115],["kr18plus.com",115],["luscious.net",115],["missavtv.com",115],["pilibook.com",115],["pornborne.com",115],["porngrey.com",115],["pornktube.*",115],["pornx.tube",115],["qqxnxx.com",115],["sexvideos.host",115],["submilf.com",115],["subtaboo.com",115],["tktube.com",115],["watchseries.*",115],["xfrenchies.com",115],["moderngyan.com",118],["sattakingcharts.in",118],["bgmi32bitapk.in",118],["bankshiksha.in",118],["earn.mpscstudyhub.com",118],["earn.quotesopia.com",118],["money.quotesopia.com",118],["best-mobilegames.com",118],["learn.moderngyan.com",118],["bharatsarkarijobalert.com",118],["quotesopia.com",118],["creditsgoal.com",118],["coingraph.us",119],["momo-net.com",119],["milfnut.*",119],["maxgaming.fi",119],["cybercityhelp.in",120],["travel.vebma.com",121],["cloud.majalahhewan.com",121],["crm.cekresi.me",121],["ai.tempatwisata.pro",121],["pinloker.com",121],["sekilastekno.com",121],["mrproblogger.com",122],["themezon.net",122],["dagensnytt.com",122],["azmath.info",123],["azsoft.*",123],["downfile.site",123],["downphanmem.com",123],["expertvn.com",123],["memangbau.com",123],["trangchu.news",123],["aztravels.net",123],["ielts-isa.edu.vn",123],["techedubyte.com",[123,234,235]],["jpopsingles.eu",123],["aipebel.com",123],["link.paid4link.com",[124,125]],["driveup.space",126],["crypt.cybar.xyz",126],["dynamicminister.net",126],["gofirmware.com",126],["national-park.com",126],["forgee.xyz",126],["gamehub.cam",126],["cutyion.com",127],["weshare.is",129],["file.gocmod.com",129],["hdhub4u.fail",130],["hubdrive.wales",130],["moviesubtitles.click",130],["telegratuita.com",130],["camarchive.tv",131],["flixbaba.*",131],["freejav.guru",131],["gntai.*",131],["grantorrent.*",131],["hentai2read.com",131],["icyporno.com",131],["illink.net",131],["javtiful.com",131],["m-hentai.net",131],["mejortorrent.*",131],["mejortorrento.*",131],["mejortorrents.*",131],["mejortorrents1.*",131],["mejortorrentt.*",131],["pornblade.com",131],["pornfelix.com",131],["pornxxxxtube.net",131],["redwap.me",131],["redwap2.com",131],["redwap3.com",131],["sunporno.com",131],["ver-comics-porno.com",131],["ver-mangas-porno.com",131],["x-fetish.tube",131],["x-tg.tube",131],["x-video.tube",131],["xanimeporn.com",131],["xxxvideohd.net",131],["zetporn.com",131],["gofile.download",131],["simpcity.*",132],["gameofporn.com",133],["0dramacool.net",134],["0gomovie.*",134],["0gomovies.*",134],["185.53.88.104",134],["185.53.88.204",134],["185.53.88.15",134],["123moviefree.*",134],["1kmovies.*",134],["1madrasdub.*",134],["1primewire.*",134],["2embed.*",134],["2madrasdub.*",134],["2umovies.*",134],["4anime.*",134],["9animetv.to",134],["aagmaal.com",134],["abysscdn.com",134],["adblockplustape.*",134],["ajkalerbarta.com",134],["altadefinizione01.*",134],["androidapks.biz",134],["androidsite.net",134],["animeonlinefree.org",134],["animesite.net",134],["animespank.com",134],["aniworld.to",134],["apkmody.io",134],["appsfree4u.com",134],["atomixhq.*",134],["audioz.download",134],["awafim.tv",134],["beinmatch.*",134],["bengalisite.com",134],["brmovies.*",134],["ch-play.com",134],["cima4u.*",134],["clickforhire.com",134],["clicknupload.*",134],["cloudy.pk",134],["cmovies.*",134],["computercrack.com",134],["coolcast2.com",134],["crackedsoftware.biz",134],["crackfree.org",134],["cricfree.*",134],["crichd.*",134],["cryptoblog24.info",134],["cuatrolatastv.blogspot.com",134],["cydiasources.net",134],["decmelfot.xyz",134],["dirproxy.com",134],["dood.*",134],["dopebox.to",134],["downloadapk.info",134],["downloadapps.info",134],["downloadgames.info",134],["downloadmusic.info",134],["downloadsite.org",134],["downloadwella.com",134],["ebooksite.org",134],["educationtips213.blogspot.com",134],["egyup.live",134],["embed.meomeo.pw",134],["embed.scdn.to",134],["emulatorsite.com",134],["f1stream.*",134],["fakedetail.com",134],["faselhd.*",134],["fbstream.*",134],["fclecteur.com",134],["filemoon.*",134],["filepress.*",[134,214]],["files.im",134],["filmlinks4u.*",134],["filmpertutti.*",134],["filmyzilla.*",134],["flexyhit.com",134],["fmovies.*",134],["freeflix.info",134],["freemoviesu4.com",134],["freeplayervideo.com",134],["freesoccer.net",134],["french-stream.*",134],["fseries.org",134],["fzlink.*",134],["gamefast.org",134],["gamesite.info",134],["gettapeads.com",134],["gmanga.me",134],["gocast123.me",134],["gofilms4u.*",134],["gogoanime.*",134],["gomoviz.*",134],["gooplay.net",134],["gostreamon.net",134],["harimanga.com",134],["hdmoviefair.*",134],["hdmovies4u.*",134],["hdmovies50.*",134],["hdmoviesfair.*",134],["healthnewsreel.com",134],["hexupload.net",134],["hh3dhay.*",134],["hinatasoul.com",134],["hindilinks4u.*",134],["hindisite.net",134],["holymanga.net",134],["hotmasti.*",134],["hurawatch.*",134],["hxfile.co",134],["isosite.org",134],["iv-soft.com",134],["januflix.expert",134],["jewelry.com.my",134],["johnwardflighttraining.com",134],["kabarportal.com",134],["klmanga.*",134],["klubsports.*",134],["kstorymedia.com",134],["la123movies.org",134],["lespassionsdechinouk.com",134],["libertestreamvf.*",134],["lilymanga.net",134],["linksdegrupos.com.br",134],["linkz.wiki",134],["livetvon.*",134],["livestreamtv.pk",134],["macsite.info",134],["manga1000.*",134],["manga1001.*",134],["mangaraw.*",134],["mangarawjp.*",134],["mangasite.org",134],["manhuascan.com",134],["megamovies.org",134],["mlbstream.*",134],["moddroid.com",134],["motogpstream.*",134],["movi.pk",[134,165]],["moviefree2.com",134],["movierulz.*",134],["movies123.*",134],["movies-watch.com.pk",134],["movies2watch.*",134],["moviesden.*",134],["moviesite.app",134],["moviesonline.fm",134],["moviesx.org",134],["moviezaddiction.*",134],["musicsite.biz",134],["myfernweh.com",134],["myviid.com",134],["nazarickol.com",134],["nbastream.*",134],["netcine.*",134],["nflstream.*",134],["nhlstream.*",134],["noob4cast.com",134],["oko.sh",134],["onlinewatchmoviespk.*",134],["orangeink.pk",134],["pahaplayers.click",134],["patchsite.net",134],["pctfenix.*",134],["pctnew.*",134],["pdfsite.net",134],["pksmovies.*",134],["play1002.com",134],["player-cdn.com",134],["plyjam.*",134],["plylive.*",134],["pogolinks.*",134],["popcorntime.*",134],["poscitech.*",134],["productkeysite.com",134],["projectfreetv.one",134],["romsite.org",134],["rugbystreams.*",134],["rytmp3.io",134],["send.cm",134],["seriesite.net",134],["seriezloaded.com.ng",134],["serijehaha.com",134],["shahed4u.*",134],["sflix.*",134],["shrugemojis.com",134],["siteapk.net",134],["siteflix.org",134],["sitegames.net",134],["sitekeys.net",134],["sitepdf.com",134],["sitesunblocked.*",134],["sitetorrent.com",134],["softwaresite.net",134],["solarmovies.*",134],["sportbar.live",134],["sportcast.*",134],["sportskart.*",134],["sports-stream.*",134],["ssyoutube.com",134],["stardima.com",134],["stream4free.live",134],["streaming-french.*",134],["streamers.*",134],["streamingcommunity.*",[134,200]],["superapk.org",134],["supermovies.org",134],["t20cup.*",134],["tainio-mania.online",134],["talaba.su",134],["tamilguns.org",134],["tatabrada.tv",134],["techtrendmakers.com",134],["tennisstreams.*",134],["thememypc.net",134],["thripy.com",134],["torrentdosfilmes.*",134],["toonanime.*",134],["travelplanspro.com",134],["tusfiles.com",134],["tvonlinesports.com",134],["tvply.*",134],["ufcstream.*",134],["ultramovies.org",134],["uploadbank.com",134],["uptomega.*",134],["uqload.*",134],["urdubolo.pk",134],["vudeo.*",134],["vidoo.*",134],["vidspeeds.com",134],["vipboxtv.*",134],["viprow.*",134],["warezsite.net",134],["watchmovies2.com",134],["watchsite.net",134],["watchsouthpark.tv",134],["web.livecricket.is",134],["webseries.club",134],["y2mate.com",134],["yesmovies.*",134],["yomovies.*",134],["yomovies1.*",134],["youapk.net",134],["youtube4kdownloader.com",134],["yt2mp3s.*",134],["yts-subs.com",134],["kat.*",134],["katbay.*",134],["kickass.*",134],["kickasshydra.*",134],["kickasskat.*",134],["kickass2.*",134],["kickasstorrents.*",134],["kat2.*",134],["kattracker.*",134],["thekat.*",134],["thekickass.*",134],["kickassz.*",134],["kickasstorrents2.*",134],["topkickass.*",134],["kickassgo.*",134],["kkickass.*",134],["kkat.*",134],["kickasst.*",134],["kick4ss.*",134],["cineb.rs",135],["moviesjoyhd.to",135],["rawkuma.com",[135,182]],["nekolink.site",136],["foxhq.com",137],["advantien.com",139],["bailbondsfinder.com",139],["bg-gledai.*",139],["bigpiecreative.com",139],["childrenslibrarylady.com",139],["classifarms.com",139],["comtasq.ca",139],["crone.es",139],["ctrmarketingsolutions.com",139],["dropnudes.com",139],["ftuapps.dev",139],["gendatabase.com",139],["ghscanner.com",139],["gledaitv.*",139],["grsprotection.com",139],["gruporafa.com.br",139],["inmatefindcalifornia.com",139],["inmatesearchidaho.com",139],["itsonsitetv.com",139],["mfmfinancials.com",139],["myproplugins.com",139],["nurulislam.org",139],["onehack.us",139],["ovester.com",139],["paste.bin.sx",139],["privatenudes.com",139],["renoconcrete.ca",139],["richieashbeck.com",139],["sat.technology",139],["short1ink.com",139],["stpm.co.uk",139],["wegotcookies.co",139],["mathcrave.com",139],["vip-box.app",139],["filmyzones.com",140],["gamer18.net",140],["pornflixhd.com",140],["androidpolice.com",141],["cbr.com",141],["gamerant.com",141],["howtogeek.com",141],["thegamer.com",141],["winfuture.de",142],["emturbovid.com",143],["findjav.com",143],["javggvideo.xyz",143],["mmtv01.xyz",143],["stbturbo.xyz",143],["trailerhg.xyz",143],["turboplayers.xyz",143],["komikdewasa.art",144],["daemon-hentai.com",[145,146]],["daemonanime.net",[145,147]],["flight-report.com",148],["vulture.com",149],["megaplayer.bokracdn.run",150],["hentaistream.com",151],["siteunblocked.info",152],["larvelfaucet.com",153],["feyorra.top",153],["claimtrx.com",153],["pagalmovies.*",154],["7starhd.*",154],["jalshamoviez.*",154],["moviesyug.net",154],["9xupload.*",154],["bdupload.*",154],["rdxhd1.*",154],["parispi.net",155],["hentaicloud.com",156],["nuvid.*",156],["tio.ch",157],["lavanguardia.com",157],["news.bg",[157,229]],["tu.no",157],["paperzonevn.com",158],["dailyvideoreports.net",159],["lewd.ninja",160],["systemnews24.com",161],["niusdiario.es",162],["playporngames.com",163],["descargatepelis.com",163],["javx.*",163],["kungfutv.net",163],["freemagazines.top",164],["freepreset.net",164],["moviessources.*",166],["cutesexyteengirls.com",167],["haho.moe",168],["nicy-spicy.pw",169],["novelmultiverse.com",170],["mylegalporno.com",171],["embedsports.me",172],["embedstream.me",172],["jumbtv.com",172],["reliabletv.me",172],["guardaserie.*",173],["cine-calidad.*",174],["xnxx.com",175],["xvideos.*",175],["thecut.com",176],["novelism.jp",177],["alphapolis.co.jp",178],["game3rb.com",179],["javhub.net",179],["thotvids.com",180],["tokuzilla.net",180],["tokuzl.net",180],["berklee.edu",181],["imeteo.sk",183],["youtubemp3donusturucu.net",184],["videovard.*",185],["cluset.com",186],["homemoviestube.com",186],["sexseeimage.com",186],["alueviesti.fi",187],["kiuruvesilehti.fi",187],["lempaala.ideapark.fi",187],["olutposti.fi",187],["urjalansanomat.fi",187],["tainhanhvn.com",189],["titantv.com",190],["cocomanga.com",191],["animelatinohd.com",191],["buondua.com",192],["m.liputan6.com",194],["stardewids.com",[194,211]],["ingles.com",195],["spanishdict.com",195],["surfline.com",196],["dongknows.com",197],["amateur8.com",198],["freeporn8.com",198],["maturetubehere.com",198],["corriere.it",199],["oggi.it",199],["apkcombo.com",201],["sponsorhunter.com",202],["novelssites.com",203],["haxina.com",204],["scimagojr.com",204],["dramafren.net",204],["myperfectweather.com",204],["torrentmac.net",205],["udvl.com",206],["dlpanda.com",207],["einrichtungsbeispiele.de",208],["weadown.com",209],["molotov.tv",210],["commands.gg",211],["smgplaza.com",212],["freepik.com",213],["sportnews.to",215],["soccershoes.blog",215],["shineads.*",215],["diyphotography.net",216],["bitchesgirls.com",217],["cdn.bg-gledai.*",218],["cdn.gledaitv.*",218],["explorecams.com",219],["minecraft.buzz",219],["hiraethtranslation.com",220],["programmingeeksclub.com",221],["diendancauduong.com",222],["androidadult.com",223],["parentcircle.com",224],["h-game18.xyz",225],["wheelofgold.com",226],["davescomputertips.com",227],["historyofroyalwomen.com",227],["motchill.*",228],["lifestyle.bg",229],["topsport.bg",229],["webcafe.bg",229],["freepikdownloader.com",230],["freepasses.org",231],["iusedtobeaboss.com",232],["blogtruyenmoi.com",233],["repretel.com",236],["tubereader.me",236],["graphicget.com",237],["qiwi.gg",[238,239]],["sonixgvn.net",240],["alliptvlinks.com",241],["smashyplayer.top",242],["upns.*",242],["xvideos.com",243],["xvideos2.com",243],["fullxh.com",244],["galleryxh.site",244],["megaxh.com",244],["movingxh.world",244],["seexh.com",244],["unlockxh4.com",244],["valuexh.life",244],["xhaccess.com",244],["xhadult2.com",244],["xhadult3.com",244],["xhadult4.com",244],["xhadult5.com",244],["xhamster.*",244],["xhamster1.*",244],["xhamster10.*",244],["xhamster11.*",244],["xhamster12.*",244],["xhamster13.*",244],["xhamster14.*",244],["xhamster15.*",244],["xhamster16.*",244],["xhamster17.*",244],["xhamster18.*",244],["xhamster19.*",244],["xhamster20.*",244],["xhamster2.*",244],["xhamster3.*",244],["xhamster4.*",244],["xhamster42.*",244],["xhamster46.com",244],["xhamster5.*",244],["xhamster7.*",244],["xhamster8.*",244],["xhamsterporno.mx",244],["xhbig.com",244],["xhbranch5.com",244],["xhchannel.com",244],["xhdate.world",244],["xhlease.world",244],["xhmoon5.com",244],["xhofficial.com",244],["xhopen.com",244],["xhplanet1.com",244],["xhplanet2.com",244],["xhreal2.com",244],["xhreal3.com",244],["xhspot.com",244],["xhtotal.com",244],["xhtree.com",244],["xhvictory.com",244],["xhwebsite.com",244],["xhwebsite2.com",244],["xhwebsite5.com",244],["xhwide1.com",244],["xhwide2.com",244],["xhwide5.com",244],["katfile.com",245],["readcomiconline.*",246],["nekopoi.*",247],["ukchat.co.uk",248],["hivelr.com",249],["koyso.*",250],["skidrowcodex.net",251],["takimag.com",252],["digi.no",253],["twi-fans.com",254],["learn-cpp.org",255],["terashare.co",256],["pornwex.tv",257],["smithsonianmag.com",258],["homesports.net",259],["realmoasis.com",260],["javfc2.xyz",261],["gobankingrates.com",262],["hiddenleaf.to",263],["ronorp.net",264],["gdflix.*",265],["a1movies.*",266],["videovak.com",267],["a-lohas.jp",268],["akirabox.com",269],["purplex.app",270],["maggotdrowning.com",271],["bilinovel.com",272],["esportstales.com",273],["streamup.ws",274],["pagalfree.com",275],["pagalworld.us",275],["pornharlot.net",276],["umatechnology.org",277],["rarbg.how",278],["4live.online",279],["friv.com",280],["rlxoff.com",281],["solobari.it",282],["hydrogen.lat",283],["criollasx.com",284],["pantieshub.net",285],["idnes.cz",[286,287]]]);
const exceptionsMap = new Map([["hubdrive.com",[35]],["hubdrive.de",[35]]]);
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
