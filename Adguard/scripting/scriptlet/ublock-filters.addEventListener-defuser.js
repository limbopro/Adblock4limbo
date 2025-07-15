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
const argsList = [["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["click","Event"],["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["/^(?:click|mousedown)$/","_0x"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["load","nextFunction"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","'\\'"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["click","","elements",".post.movies"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["DOMContentLoaded","script[data-domain="],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["mousedown","shown_at"],["/click|mouse/","[native code]","elements","document"],["load","crakPopInParams"],["","focus"],["load","abDetectorPro"],["DOMContentLoaded","src=atob"],["error","blocker"],["load","error-report.com"],["click","tampilkanUrl"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["load","Adblock"],["DOMContentLoaded","window.open"],["DOMContentLoaded","atob"],["","vads"],["devtoolschange"],["beforeunload"],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["load","popMagic"],["click","popurl"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["load",".innerHTML"],["/click|mousedown/","catch"],["adb"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","AdBlocker"],["","showModal"],["","goog"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["DOMContentLoaded","adsSrc"],["","AdB"],["load","adSession"],["DOMContentLoaded",".textContent"],["np.detect"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","","elements","a#dlink"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["click","localStorage"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","Promise"],["DOMContentLoaded","anchor.href"],["click","popupInterval"],["DOMContentLoaded","-banner"],["click","PopURL"],["DOMContentLoaded","checkAdBlocker"],["DOMContentLoaded","determineVisibility"],["DOMContentLoaded","Popunder"],["click","pingUrl"],["mousedown","scoreUrl"]];
const hostnamesMap = new Map([["cbc.ca",0],["io.google",1],["newser.com",2],["sport1.de",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["kingofdown.com",7],["radiotormentamx.com",7],["limetorrents.*",[7,11]],["king-pes.*",7],["quelleestladifference.fr",7],["depedlps.*",7],["otakuworldsite.blogspot.com",7],["ad-itech.blogspot.com",7],["komikcast.*",7],["unlockapk.com",7],["mobdi3ips.com",7],["socks24.org",7],["idedroidsafelink.*",7],["links-url.*",7],["interviewgig.com",7],["javaguides.net",7],["almohtarif-tech.net",7],["devoloperxda.blogspot.com",7],["zwergenstadt.com",7],["upxin.net",7],["ciudadblogger.com",7],["ke-1.com",7],["bit-shares.com",7],["itdmusics.com",7],["aspdotnet-suresh.com",7],["tudo-para-android.com",7],["zerotopay.com",7],["ak4eg.*",7],["mawsueaa.com",7],["hesgoal-live.io",7],["streanplay.*",8],["steanplay.*",8],["bibme.org",9],["citationmachine.net",9],["easybib.com",10],["pahe.*",11],["yts.*",11],["tube8.*",11],["topeuropix.*",11],["vermangasporno.com",11],["moviescounter.*",11],["imgtorrnt.in",11],["picbaron.com",[11,114]],["torrent9.*",11],["desiremovies.*",11],["letmejerk.com",11],["letmejerk2.com",11],["letmejerk3.com",11],["letmejerk4.com",11],["letmejerk5.com",11],["letmejerk6.com",11],["letmejerk7.com",11],["movs4u.*",11],["uwatchfree.*",11],["hydrax.*",11],["4movierulz.*",11],["projectfreetv.*",11],["arabseed.*",11],["btdb.*",[11,50]],["dlapk4all.com",11],["kropic.com",11],["pdfindir.net",11],["brstej.com",11],["topwwnews.com",11],["xsanime.com",11],["vidlo.us",11],["youx.xxx",11],["world4ufree.*",11],["animeindo.asia",11],["streamsport.*",11],["rojadirectatvhd.*",11],["userload.*",11],["badtaste.it",12],["adyou.*",13],["gotporn.com",14],["freepornrocks.com",14],["footybite.to",14],["rargb.to",14],["totalsportek.*",14],["totalsportekhd.com",14],["xn--mlaregvle-02af.nu",14],["realgfporn.com",[15,16]],["fxporn69.*",15],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["pornomico.com",18],["yourlust.com",18],["hd-easyporn.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["youlikeboys.com",18],["hentaihere.com",18],["ganstamovies.com",18],["youngleak.com",18],["jizzberry.com",18],["porndollz.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,42]],["pornohirsch.net",18],["herzporno.*",18],["deinesexfilme.com",18],["einfachtitten.com",18],["halloporno.*",18],["lesbenhd.com",18],["milffabrik.com",18],["porn-monkey.com",18],["porndrake.com",18],["pornhubdeutsch.net",18],["pornoaffe.com",18],["pornodavid.com",18],["pornoente.tv",18],["pornofisch.com",18],["pornofelix.com",18],["pornohammer.com",18],["pornohelm.com",18],["pornoklinge.com",18],["pornotom.com",18],["pornotommy.com",18],["pornovideos-hd.com",18],["pornozebra.com",18],["xhamsterdeutsch.xyz",18],["xnxx-sexfilme.com",18],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["hentai2w.com",[18,130]],["pornhd.com",19],["cnnamador.com",[19,29]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["rexporn.*",19],["movies07.*",19],["camclips.tv",[19,43]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["pornocomics.*",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["pornomoll.*",23],["short.pe",24],["gsurl.*",24],["pinsystem.co.uk",25],["ancensored.com",25],["ganool.*",25],["mp3fiber.com",[25,33]],["xrivonet.info",25],["pirate.*",25],["piratebay.*",25],["pirateproxy.*",25],["proxytpb.*",25],["thepiratebay.*",25],["mimaletadepeliculas.*",26],["bs.to",27],["burningseries.*",27],["efukt.com",27],["dz4soft.*",28],["generacionretro.net",28],["nuevos-mu.ucoz.com",28],["micloudfiles.com",28],["yoututosjeff.*",28],["ebookmed.*",28],["lanjutkeun.*",28],["mimaletamusical.blogspot.com",28],["novelasesp.*",28],["visionias.net",28],["singingdalong.*",28],["b3infoarena.in",28],["lurdchinexgist.blogspot.com",28],["thefreedommatrix.blogspot.com",28],["hentai-vl.blogspot.com",28],["projetomotog.blogspot.com",28],["ktmx.pro",28],["lirik3satu.blogspot.com",28],["marketmovers.it",28],["pharmaguideline.com",28],["mixloads.com",28],["mangaromance.eu",28],["interssh.com",28],["freesoftpdfdownload.blogspot.com",28],["myadslink.com",28],["blackavelic.com",28],["doujindesu.*",28],["server.satunivers.tv",28],["eg-akw.com",28],["xn--mgba7fjn.cc",28],["flashingjungle.com",29],["ma-x.org",30],["lavozdegalicia.es",30],["ddwloclawek.pl",30],["ki24.info",30],["xmovies8.*",31],["xmovies08.org",32],["freecoursesonline.*",33],["lordpremium.*",33],["schrauben-normen.de",33],["avengerinator.blogspot.com",33],["novablogitalia.*",33],["link-to.net",33],["hanimesubth.com",33],["gsmturkey.net",33],["anisubindo.*",33],["adshrink.it",33],["presentation-ppt.com",33],["mangacanblog.com",33],["pekalongan-cits.blogspot.com",33],["4tymode.win",33],["linkvertise.com",33],["reifenrechner.at",33],["tire-size-calculator.info",33],["linuxsecurity.com",33],["itsguider.com",33],["cotravinh.blogspot.com",33],["itudong.com",33],["shortx.net",33],["btvsports.*",33],["lecturel.com",33],["bakai.org",33],["nar.k-ba.net",33],["eurotruck2.com.br",33],["tiroalpaloes.com",33],["stream4free.*",33],["tiroalpaloes.net",33],["flixsix.com",33],["tiroalpaloweb.xyz",33],["globaldjmix.com",34],["desiupload.*",[35,149]],["hblinks.pro",35],["hubcdn.vip",35],["hubdrive.*",35],["90fpsconfig.in",35],["katdrive.link",35],["kmhd.net",35],["bollydrive.rest",35],["360news4u.net",35],["hypershort.com",[35,127]],["bollydrive.*",[35,151]],["zazzybabes.com",36],["haaretz.co.il",37],["haaretz.com",37],["slate.com",38],["megalinks.info",39],["megapastes.com",39],["mega-mkv.com",[39,40]],["mkv-pastes.com",39],["zpaste.net",39],["zlpaste.net",39],["9xlinks.site",39],["mega-dvdrip.*",40],["peliculas-dvdrip.*",40],["desbloqueador.*",41],["cine.to",[42,188]],["newpelis.*",[42,48]],["pelix.*",[42,48]],["allcalidad.*",[42,130]],["khatrimaza.*",42],["kissasia.cc",42],["camwhores.*",43],["camwhorestv.*",43],["digjav.com",43],["uproxy.*",43],["videoszoofiliahd.com",44],["xxxtubezoo.com",45],["zooredtube.com",45],["uii.io",46],["porndoe.com",47],["acienciasgalilei.com",49],["playrust.io",50],["payskip.org",51],["short-url.link",52],["tubedupe.com",53],["mirrorace.*",54],["fatgirlskinny.net",55],["polska-ie.com",55],["windowsmatters.com",55],["canaltdt.es",56],["masbrooo.com",56],["2ndrun.tv",56],["oncehelp.com",57],["curto.win",57],["smallseotools.com",58],["mixdrp.*",59],["macwelt.de",60],["pcwelt.de",60],["capital.de",60],["geo.de",60],["allmomsex.com",61],["allnewindianporn.com",61],["analxxxvideo.com",61],["animalextremesex.com",61],["anime3d.xyz",61],["animefuckmovies.com",61],["animepornfilm.com",61],["animesexbar.com",61],["animesexclip.com",61],["animexxxsex.com",61],["animexxxfilms.com",61],["anysex.club",61],["apetube.asia",61],["asianfuckmovies.com",61],["asianfucktube.com",61],["asianporn.sexy",61],["asiansex.*",61],["asiansexcilps.com",61],["beeg.fund",61],["beegvideoz.com",61],["bestasiansex.pro",61],["bravotube.asia",61],["brutalanimalsfuck.com",61],["candyteenporn.com",61],["daddyfuckmovies.com",61],["desifuckonline.com",61],["exclusiveasianporn.com",61],["exteenporn.com",61],["fantasticporn.net",61],["fantasticyoungporn.com",61],["fineasiansex.com",61],["firstasianpussy.com",61],["freeindiansextube.com",61],["freepornasians.com",61],["freerealvideo.com",61],["fuck-beeg.com",61],["fuck-xnxx.com",61],["fuckfuq.com",61],["fuckundies.com",61],["gojapaneseporn.com",61],["golderotica.com",61],["goodyoungsex.com",61],["goyoungporn.com",61],["hardxxxmoms.com",61],["hdvintagetube.com",61],["hentaiporn.me",61],["hentaisexfilms.com",61],["hentaisexuality.com",61],["hot-teens-movies.mobi",61],["hotanimepornvideos.com",61],["hotanimevideos.com",61],["hotasianpussysex.com",61],["hotjapaneseshows.com",61],["hotmaturetube.com",61],["hotmilfs.pro",61],["hotorientalporn.com",61],["hotpornyoung.com",61],["hotxxxjapanese.com",61],["hotxxxpussy.com",61],["indiafree.net",61],["indianpornvideo.online",61],["japanfuck.*",61],["japanporn.*",61],["japanpornclip.com",61],["japanesetube.video",61],["japansex.me",61],["japanesexxxporn.com",61],["japansporno.com",61],["japanxxx.asia",61],["japanxxxworld.com",61],["keezmovies.surf",61],["lingeriefuckvideo.com",61],["liveanimalporn.zooo.club",61],["madhentaitube.com",61],["megahentaitube.com",61],["megajapanesesex.com",61],["megajapantube.com",61],["milfxxxpussy.com",61],["momsextube.pro",61],["momxxxass.com",61],["monkeyanimalporn.com",61],["moviexxx.mobi",61],["newanimeporn.com",61],["newjapanesexxx.com",61],["nicematureporn.com",61],["nudeplayboygirls.com",61],["originalindianporn.com",61],["originalteentube.com",61],["pig-fuck.com",61],["plainasianporn.com",61],["popularasianxxx.com",61],["pornanimetube.com",61],["pornasians.pro",61],["pornhat.asia",61],["pornjapanesesex.com",61],["pornvintage.tv",61],["primeanimesex.com",61],["realjapansex.com",61],["realmomsex.com",61],["redsexhub.com",61],["retroporn.world",61],["retrosexfilms.com",61],["sex-free-movies.com",61],["sexanimesex.com",61],["sexanimetube.com",61],["sexjapantube.com",61],["sexmomvideos.com",61],["sexteenxxxtube.com",61],["sexxxanimal.com",61],["sexyoungtube.com",61],["sexyvintageporn.com",61],["spicyvintageporn.com",61],["sunporno.club",61],["tabooanime.club",61],["teenextrem.com",61],["teenfucksex.com",61],["teenhost.net",61],["teensex.*",61],["teensexass.com",61],["tnaflix.asia",61],["totalfuckmovies.com",61],["totalmaturefuck.com",61],["txxx.asia",61],["vintagetube.*",61],["voyeurpornsex.com",61],["warmteensex.com",61],["wetasiancreampie.com",61],["wildhentaitube.com",61],["wowyoungsex.com",61],["xhamster-art.com",61],["xmovie.pro",61],["xnudevideos.com",61],["xnxxjapon.com",61],["xpics.me",61],["xvide.me",61],["xxxanimefuck.com",61],["xxxanimevideos.com",61],["xxxanimemovies.com",61],["xxxhentaimovies.com",61],["xxxhothub.com",61],["xxxjapaneseporntube.com",61],["xxxlargeporn.com",61],["xxxmomz.com",61],["xxxmovies.*",61],["xxxpornmilf.com",61],["xxxpussyclips.com",61],["xxxpussysextube.com",61],["xxxretrofuck.com",61],["xxxsex.pro",61],["xxxsexyjapanese.com",61],["xxxteenyporn.com",61],["xxxvideo.asia",61],["xxxyoungtv.com",61],["youjizzz.club",61],["youngpussyfuck.com",61],["bayimg.com",62],["celeb.gate.cc",63],["kinoger.re",64],["usersdrive.com",64],["desi.upn.bio",64],["zooqle.*",65],["masterplayer.xyz",66],["pussy-hub.com",66],["porndex.com",67],["compucalitv.com",68],["hdfull.*",69],["diariodenavarra.es",70],["mangamanga.*",71],["streameast.*",72],["thestreameast.*",72],["pennlive.com",73],["beautypageants.indiatimes.com",74],["01fmovies.com",75],["vev.*",76],["vidop.*",76],["lnk2.cc",77],["fullhdxxx.com",78],["classicpornbest.com",78],["www-daftarharga.blogspot.com",[78,137]],["1youngteenporn.com",78],["miraculous.to",[78,183]],["vtube.to",78],["zone-telechargement.*",78],["xstory-fr.com",78],["gosexpod.com",79],["tubepornclassic.com",80],["shemalez.com",80],["otakukan.com",81],["xcafe.com",82],["pornfd.com",82],["venusarchives.com",82],["imagehaha.com",83],["imagenpic.com",83],["imageshimage.com",83],["imagetwist.com",83],["megalink.*",84],["k1nk.co",84],["watchasians.cc",84],["lulustream.com",84],["lulustream.live",84],["luluvdo.com",84],["vibestreams.*",84],["gmx.*",85],["web.de",85],["news18.com",86],["thelanb.com",87],["dropmms.com",87],["softwaredescargas.com",88],["cracking-dz.com",89],["mega1080p.*",90],["anitube.*",90],["gazzetta.it",91],["9hentai.*",92],["gnula.*",93],["dziennikbaltycki.pl",94],["dzienniklodzki.pl",94],["dziennikpolski24.pl",94],["dziennikzachodni.pl",94],["echodnia.eu",94],["expressbydgoski.pl",94],["expressilustrowany.pl",94],["gazetakrakowska.pl",94],["gazetalubuska.pl",94],["gazetawroclawska.pl",94],["gk24.pl",94],["gloswielkopolski.pl",94],["gol24.pl",94],["gp24.pl",94],["gra.pl",94],["gs24.pl",94],["kurierlubelski.pl",94],["motofakty.pl",94],["naszemiasto.pl",94],["nowiny24.pl",94],["nowosci.com.pl",94],["nto.pl",94],["polskatimes.pl",94],["pomorska.pl",94],["poranny.pl",94],["sportowy24.pl",94],["strefaagro.pl",94],["strefabiznesu.pl",94],["stronakobiet.pl",94],["telemagazyn.pl",94],["to.com.pl",94],["wspolczesna.pl",94],["courseclub.me",94],["azrom.net",94],["alttyab.net",94],["esopress.com",94],["nesiaku.my.id",94],["onemanhua.com",95],["freeindianporn.mobi",95],["dr-farfar.com",96],["boyfriendtv.com",97],["brandstofprijzen.info",98],["netfuck.net",99],["gaypornhdfree.*",99],["blog24.me",[99,107]],["kisahdunia.com",99],["cinemakottaga.*",99],["privatemoviez.*",99],["nulljungle.com",99],["oyuncusoruyor.com",99],["pbarecap.ph",99],["sourds.net",99],["teknobalta.com",99],["tvinternetowa.info",99],["sqlserveregitimleri.com",99],["tutcourse.com",99],["warddogs.com",99],["iimanga.com",99],["tinhocdongthap.com",99],["tremamnon.com",99],["423down.com",99],["brizzynovel.com",99],["jugomobile.com",99],["freecodezilla.net",99],["apkmaven.*",99],["iconmonstr.com",99],["rbxscripts.net",99],["comentariodetexto.com",99],["wordpredia.com",99],["allfaucet.xyz",[99,107]],["titbytz.tk",99],["replica-watch.info",99],["alludemycourses.com",99],["kayifamilytv.com",99],["interfans.org",99],["iir.ai",100],["popcornstream.*",101],["qpython.club",102],["dktechnicalmate.com",102],["recipahi.com",102],["e9china.net",103],["ontools.net",103],["marketbeat.com",104],["hentaipornpics.net",105],["labgame.io",106],["ohionowcast.info",107],["wiour.com",107],["bitzite.com",[107,112,113]],["appsbull.com",107],["diudemy.com",107],["maqal360.com",[107,115,116]],["bitcotasks.com",107],["videolyrics.in",107],["manofadan.com",107],["cempakajaya.com",107],["tagecoin.com",107],["naijafav.top",107],["ourcoincash.xyz",107],["claimcoins.site",107],["cryptosh.pro",107],["eftacrypto.com",107],["fescrypto.com",107],["earnhub.net",107],["kiddyshort.com",107],["tronxminer.com",107],["neverdims.com",107],["homeairquality.org",108],["cety.app",[109,110]],["exego.app",109],["cutlink.net",109],["cutyurls.com",109],["cutty.app",109],["cutnet.net",109],["jixo.online",109],["cuty.me",110],["exnion.com",110],["upfion.com",[110,126]],["upfiles.app",[110,126]],["upfiles-urls.com",[110,126]],["vikingf1le.us.to",110],["gamerxyt.com",110],["up4stream.com",110],["ups2up.fun",110],["championdrive.co",110],["adcrypto.net",111],["admediaflex.com",111],["aduzz.com",111],["bitcrypto.info",111],["cdrab.com",111],["datacheap.io",111],["hbz.us",111],["savego.org",111],["owsafe.com",111],["sportweb.info",111],["gfx-station.com",112],["buzzheavier.com",113],["flashbang.sh",113],["trashbytes.net",113],["aiimgvlog.fun",114],["6indianporn.com",114],["amateurebonypics.com",114],["amateuryoungpics.com",114],["amigosporn.top",114],["cinemabg.net",114],["coomer.su",114],["desimmshd.com",114],["everia.club",114],["frauporno.com",114],["givemeaporn.com",114],["hitomi.la",114],["jav-asia.top",114],["javf.net",114],["javfull.net",114],["javideo.net",114],["javsunday.com",114],["kemono.su",114],["kr18plus.com",114],["luscious.net",114],["missavtv.com",114],["pilibook.com",114],["pornborne.com",114],["porngrey.com",114],["pornktube.*",114],["pornx.tube",114],["qqxnxx.com",114],["sexvideos.host",114],["submilf.com",114],["subtaboo.com",114],["tktube.com",114],["watchseries.*",114],["xfrenchies.com",114],["soft98.ir",[115,151]],["moderngyan.com",117],["sattakingcharts.in",117],["bgmi32bitapk.in",117],["bankshiksha.in",117],["earn.mpscstudyhub.com",117],["earn.quotesopia.com",117],["money.quotesopia.com",117],["best-mobilegames.com",117],["learn.moderngyan.com",117],["bharatsarkarijobalert.com",117],["quotesopia.com",117],["creditsgoal.com",117],["coingraph.us",118],["momo-net.com",118],["milfnut.*",118],["maxgaming.fi",118],["cybercityhelp.in",119],["travel.vebma.com",120],["cloud.majalahhewan.com",120],["crm.cekresi.me",120],["ai.tempatwisata.pro",120],["pinloker.com",120],["sekilastekno.com",120],["mrproblogger.com",121],["themezon.net",121],["dagensnytt.com",121],["azmath.info",122],["azsoft.*",122],["downfile.site",122],["downphanmem.com",122],["expertvn.com",122],["memangbau.com",122],["trangchu.news",122],["aztravels.net",122],["ielts-isa.edu.vn",122],["techedubyte.com",[122,230]],["jpopsingles.eu",122],["aipebel.com",122],["link.paid4link.com",[123,124]],["driveup.sbs",125],["crypt.cybar.xyz",125],["dynamicminister.net",125],["gofirmware.com",125],["national-park.com",125],["forgee.xyz",125],["gamehub.cam",125],["cutyion.com",126],["weshare.is",128],["file.gocmod.com",128],["hdhub4u.fail",129],["hubdrive.wales",129],["moviesubtitles.click",129],["telegratuita.com",129],["camarchive.tv",130],["flixbaba.*",130],["freejav.guru",130],["gntai.*",130],["grantorrent.*",130],["hentai2read.com",130],["icyporno.com",130],["illink.net",130],["javtiful.com",130],["m-hentai.net",130],["mejortorrent.*",130],["mejortorrento.*",130],["mejortorrents.*",130],["mejortorrents1.*",130],["mejortorrentt.*",130],["pornblade.com",130],["pornfelix.com",130],["pornxxxxtube.net",130],["redwap.me",130],["redwap2.com",130],["redwap3.com",130],["sunporno.com",130],["ver-comics-porno.com",130],["ver-mangas-porno.com",130],["x-fetish.tube",130],["x-tg.tube",130],["x-video.tube",130],["xanimeporn.com",130],["xxxvideohd.net",130],["zetporn.com",130],["gofile.download",130],["simpcity.su",131],["gameofporn.com",132],["0dramacool.net",133],["0gomovie.*",133],["0gomovies.*",133],["185.53.88.104",133],["185.53.88.204",133],["185.53.88.15",133],["123moviefree.*",133],["1kmovies.*",133],["1madrasdub.*",133],["1primewire.*",133],["2embed.*",133],["2madrasdub.*",133],["2umovies.*",133],["4anime.*",133],["9animetv.to",133],["aagmaal.com",133],["abysscdn.com",133],["adblockplustape.*",133],["ajkalerbarta.com",133],["altadefinizione01.*",133],["androidapks.biz",133],["androidsite.net",133],["animeonlinefree.org",133],["animesite.net",133],["animespank.com",133],["aniworld.to",133],["apkmody.io",133],["appsfree4u.com",133],["atomixhq.*",133],["audioz.download",133],["awafim.tv",133],["beinmatch.*",133],["bengalisite.com",133],["brmovies.*",133],["ch-play.com",133],["cima4u.*",133],["clickforhire.com",133],["clicknupload.*",133],["cloudy.pk",133],["cmovies.*",133],["computercrack.com",133],["coolcast2.com",133],["crackedsoftware.biz",133],["crackfree.org",133],["cricfree.*",133],["crichd.*",133],["cryptoblog24.info",133],["cuatrolatastv.blogspot.com",133],["cydiasources.net",133],["decmelfot.xyz",133],["dirproxy.com",133],["dood.*",133],["dopebox.to",133],["downloadapk.info",133],["downloadapps.info",133],["downloadgames.info",133],["downloadmusic.info",133],["downloadsite.org",133],["downloadwella.com",133],["ebooksite.org",133],["educationtips213.blogspot.com",133],["egyup.live",133],["embed.meomeo.pw",133],["embed.scdn.to",133],["emulatorsite.com",133],["f1stream.*",133],["fakedetail.com",133],["faselhd.*",133],["fbstream.*",133],["fclecteur.com",133],["filemoon.*",133],["filepress.*",[133,210]],["files.im",133],["filmlinks4u.*",133],["filmpertutti.*",133],["filmyzilla.*",133],["flexyhit.com",133],["fmovies.*",133],["freeflix.info",133],["freemoviesu4.com",133],["freeplayervideo.com",133],["freesoccer.net",133],["french-stream.*",133],["fseries.org",133],["fzlink.*",133],["gamefast.org",133],["gamesite.info",133],["gettapeads.com",133],["gmanga.me",133],["gocast123.me",133],["gofilms4u.*",133],["gogoanime.*",133],["gomoviz.*",133],["gooplay.net",133],["gostreamon.net",133],["harimanga.com",133],["hdmoviefair.*",133],["hdmovies4u.*",133],["hdmovies50.*",133],["hdmoviesfair.*",133],["healthnewsreel.com",133],["hexupload.net",133],["hh3dhay.*",133],["hinatasoul.com",133],["hindilinks4u.*",133],["hindisite.net",133],["holymanga.net",133],["hotmasti.*",133],["hurawatch.*",133],["hxfile.co",133],["isosite.org",133],["iv-soft.com",133],["januflix.expert",133],["jewelry.com.my",133],["johnwardflighttraining.com",133],["kabarportal.com",133],["klmanga.*",133],["klubsports.*",133],["kstorymedia.com",133],["la123movies.org",133],["lespassionsdechinouk.com",133],["libertestreamvf.*",133],["lilymanga.net",133],["linksdegrupos.com.br",133],["linkz.wiki",133],["livetvon.*",133],["livestreamtv.pk",133],["macsite.info",133],["manga1000.*",133],["manga1001.*",133],["mangaraw.*",133],["mangarawjp.*",133],["mangasite.org",133],["manhuascan.com",133],["megamovies.org",133],["mlbstream.*",133],["moddroid.com",133],["motogpstream.*",133],["movi.pk",[133,160]],["moviefree2.com",133],["movierulz.*",133],["movies123.*",133],["movies-watch.com.pk",133],["movies2watch.*",133],["moviesden.*",133],["moviesite.app",133],["moviesonline.fm",133],["moviesx.org",133],["moviezaddiction.*",133],["musicsite.biz",133],["myfernweh.com",133],["myviid.com",133],["nazarickol.com",133],["nbastream.*",133],["netcine.*",133],["nflstream.*",133],["nhlstream.*",133],["noob4cast.com",133],["oko.sh",133],["onlinewatchmoviespk.*",133],["orangeink.pk",133],["pahaplayers.click",133],["patchsite.net",133],["pctfenix.*",133],["pctnew.*",133],["pdfsite.net",133],["pksmovies.*",133],["play1002.com",133],["player-cdn.com",133],["plyjam.*",133],["plylive.*",133],["pogolinks.*",133],["popcorntime.*",133],["poscitech.*",133],["productkeysite.com",133],["projectfreetv.one",133],["romsite.org",133],["rugbystreams.*",133],["rytmp3.io",133],["send.cm",133],["seriesite.net",133],["seriezloaded.com.ng",133],["serijehaha.com",133],["shahed4u.*",133],["sflix.*",133],["shrugemojis.com",133],["siteapk.net",133],["siteflix.org",133],["sitegames.net",133],["sitekeys.net",133],["sitepdf.com",133],["sitesunblocked.*",133],["sitetorrent.com",133],["softwaresite.net",133],["solarmovies.*",133],["sportbar.live",133],["sportcast.*",133],["sportskart.*",133],["sports-stream.*",133],["ssyoutube.com",133],["stardima.com",133],["stream4free.live",133],["streaming-french.*",133],["streamers.*",133],["streamingcommunity.*",[133,195]],["superapk.org",133],["supermovies.org",133],["t20cup.*",133],["tainio-mania.online",133],["talaba.su",133],["tamilguns.org",133],["tatabrada.tv",133],["techtrendmakers.com",133],["tennisstreams.*",133],["thememypc.net",133],["thripy.com",133],["torrentdosfilmes.*",133],["toonanime.*",133],["travelplanspro.com",133],["tusfiles.com",133],["tvonlinesports.com",133],["tvply.*",133],["ufcstream.*",133],["ultramovies.org",133],["uploadbank.com",133],["uptomega.*",133],["uqload.*",133],["urdubolo.pk",133],["vudeo.*",133],["vidoo.*",133],["vidspeeds.com",133],["vipboxtv.*",133],["viprow.*",133],["warezsite.net",133],["watchmovies2.com",133],["watchsite.net",133],["watchsouthpark.tv",133],["web.livecricket.is",133],["webseries.club",133],["y2mate.com",133],["yesmovies.*",133],["yomovies.*",133],["yomovies1.*",133],["youapk.net",133],["youtube4kdownloader.com",133],["yt2mp3s.*",133],["yts-subs.com",133],["kat.*",133],["katbay.*",133],["kickass.*",133],["kickasshydra.*",133],["kickasskat.*",133],["kickass2.*",133],["kickasstorrents.*",133],["kat2.*",133],["kattracker.*",133],["thekat.*",133],["thekickass.*",133],["kickassz.*",133],["kickasstorrents2.*",133],["topkickass.*",133],["kickassgo.*",133],["kkickass.*",133],["kkat.*",133],["kickasst.*",133],["kick4ss.*",133],["cineb.rs",134],["moviesjoyhd.to",134],["rawkuma.com",[134,177]],["nekolink.site",135],["foxhq.com",136],["advantien.com",138],["bailbondsfinder.com",138],["bg-gledai.*",138],["bigpiecreative.com",138],["childrenslibrarylady.com",138],["classifarms.com",138],["comtasq.ca",138],["crone.es",138],["ctrmarketingsolutions.com",138],["dropnudes.com",138],["ftuapps.dev",138],["gendatabase.com",138],["ghscanner.com",138],["gledaitv.*",138],["grsprotection.com",138],["gruporafa.com.br",138],["inmatefindcalifornia.com",138],["inmatesearchidaho.com",138],["itsonsitetv.com",138],["mfmfinancials.com",138],["myproplugins.com",138],["nurulislam.org",138],["onehack.us",138],["ovester.com",138],["paste.bin.sx",138],["privatenudes.com",138],["renoconcrete.ca",138],["richieashbeck.com",138],["sat.technology",138],["short1ink.com",138],["stpm.co.uk",138],["wegotcookies.co",138],["mathcrave.com",138],["vip-box.app",138],["filmyzones.com",139],["gamer18.net",139],["pornflixhd.com",139],["androidpolice.com",140],["cbr.com",140],["gamerant.com",140],["howtogeek.com",140],["thegamer.com",140],["winfuture.de",141],["komikdewasa.art",142],["flight-report.com",143],["vulture.com",144],["megaplayer.bokracdn.run",145],["hentaistream.com",146],["siteunblocked.info",147],["larvelfaucet.com",148],["feyorra.top",148],["claimtrx.com",148],["pagalmovies.*",149],["7starhd.*",149],["jalshamoviez.*",149],["moviesyug.net",149],["9xupload.*",149],["bdupload.*",149],["rdxhd1.*",149],["parispi.net",150],["hentaicloud.com",151],["nuvid.*",151],["tio.ch",152],["lavanguardia.com",152],["news.bg",[152,225]],["tu.no",152],["paperzonevn.com",153],["dailyvideoreports.net",154],["lewd.ninja",155],["systemnews24.com",156],["niusdiario.es",157],["playporngames.com",158],["descargatepelis.com",158],["javx.*",158],["kungfutv.net",158],["freemagazines.top",159],["freepreset.net",159],["moviessources.*",161],["cutesexyteengirls.com",162],["haho.moe",163],["nicy-spicy.pw",164],["novelmultiverse.com",165],["mylegalporno.com",166],["embedsports.me",167],["embedstream.me",167],["jumbtv.com",167],["reliabletv.me",167],["guardaserie.*",168],["cine-calidad.*",169],["xnxx.com",170],["xvideos.*",170],["thecut.com",171],["novelism.jp",172],["alphapolis.co.jp",173],["game3rb.com",174],["javhub.net",174],["thotvids.com",175],["tokuzl.net",175],["berklee.edu",176],["imeteo.sk",178],["youtubemp3donusturucu.net",179],["videovard.*",180],["cluset.com",181],["homemoviestube.com",181],["sexseeimage.com",181],["alueviesti.fi",182],["kiuruvesilehti.fi",182],["lempaala.ideapark.fi",182],["olutposti.fi",182],["urjalansanomat.fi",182],["tainhanhvn.com",184],["titantv.com",185],["cocomanga.com",186],["animelatinohd.com",186],["buondua.com",187],["m.liputan6.com",189],["stardewids.com",[189,206]],["ingles.com",190],["spanishdict.com",190],["surfline.com",191],["dongknows.com",192],["amateur8.com",193],["freeporn8.com",193],["maturetubehere.com",193],["corriere.it",194],["oggi.it",194],["apkcombo.com",196],["sponsorhunter.com",197],["novelssites.com",198],["haxina.com",199],["scimagojr.com",199],["dramafren.net",199],["torrentmac.net",200],["udvl.com",201],["dlpanda.com",202],["einrichtungsbeispiele.de",203],["weadown.com",204],["molotov.tv",205],["commands.gg",206],["smgplaza.com",207],["emturbovid.com",208],["findjav.com",208],["javggvideo.xyz",208],["mmtv01.xyz",208],["stbturbo.xyz",208],["freepik.com",209],["sportnews.to",211],["soccershoes.blog",211],["shineads.*",211],["diyphotography.net",212],["bitchesgirls.com",213],["cdn.bg-gledai.*",214],["explorecams.com",215],["minecraft.buzz",215],["hiraethtranslation.com",216],["programmingeeksclub.com",217],["diendancauduong.com",218],["androidadult.com",219],["parentcircle.com",220],["h-game18.xyz",221],["wheelofgold.com",222],["davescomputertips.com",223],["historyofroyalwomen.com",223],["motchill.*",224],["lifestyle.bg",225],["topsport.bg",225],["webcafe.bg",225],["freepikdownloader.com",226],["freepasses.org",227],["iusedtobeaboss.com",228],["blogtruyenmoi.com",229],["repretel.com",231],["tubereader.me",231],["graphicget.com",232],["qiwi.gg",[233,234]],["sonixgvn.net",235],["alliptvlinks.com",236],["smashyplayer.top",237],["upns.*",237],["xvideos.com",238],["xvideos2.com",238],["katfile.com",239],["readcomiconline.*",240],["nekopoi.*",241],["ukchat.co.uk",242],["hivelr.com",243],["koyso.*",244],["skidrowcodex.net",245],["takimag.com",246],["digi.no",247],["th.gl",248],["twi-fans.com",249],["learn-cpp.org",250],["terashare.co",251],["pornwex.tv",252],["smithsonianmag.com",253],["homesports.net",254],["realmoasis.com",255],["javfc2.xyz",256],["gobankingrates.com",257],["hiddenleaf.to",258],["ronorp.net",259],["gdflix.*",260],["a1movies.*",261],["videovak.com",262],["a-lohas.jp",263],["akirabox.com",264],["purplex.app",265],["maggotdrowning.com",266],["bilinovel.com",267],["esportstales.com",268],["streamup.ws",269],["pagalfree.com",270],["pagalworld.us",270],["pornharlot.net",271],["umatechnology.org",272],["rarbg.how",273],["4live.online",274],["friv.com",275],["rlxoff.com",276],["idnes.cz",[277,278]]]);
const exceptionsMap = new Map([["hubdrive.com",[35]],["hubdrive.de",[35]],["forum.soft98.ir",[115,151]]]);
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
