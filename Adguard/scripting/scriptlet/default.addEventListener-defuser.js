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
const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];
const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["kissasian.*",5],["pinsystem.co.uk",5],["ancensored.com",5],["ganool.*",5],["mp3fiber.com",[5,24]],["xrivonet.info",5],["pirate.*",5],["piratebay.*",5],["pirateproxy.*",5],["proxytpb.*",5],["thepiratebay.*",5],["kingofdown.com",6],["radiotormentamx.com",6],["limetorrents.*",[6,10]],["king-pes.*",6],["quelleestladifference.fr",6],["depedlps.*",6],["otakuworldsite.blogspot.com",6],["ad-itech.blogspot.com",6],["komikcast.*",6],["unlockapk.com",6],["mobdi3ips.com",6],["socks24.org",6],["idedroidsafelink.*",6],["links-url.*",6],["interviewgig.com",6],["javaguides.net",6],["almohtarif-tech.net",6],["forum.release-apk.com",6],["devoloperxda.blogspot.com",6],["zwergenstadt.com",6],["primedeportes.es",6],["upxin.net",6],["ciudadblogger.com",6],["ke-1.com",6],["secretsdeepweb.blogspot.com",6],["bit-shares.com",6],["itdmusics.com",6],["aspdotnet-suresh.com",6],["tudo-para-android.com",6],["urdulibrarypk.blogspot.com",6],["zerotopay.com",6],["ak4eg.*",6],["akw.to",6],["mawsueaa.com",6],["hesgoal-live.io",6],["king-shoot.io",6],["9goals.live",6],["streanplay.*",7],["steanplay.*",7],["bibme.org",8],["citationmachine.net",8],["easybib.com",9],["pahe.*",10],["yts.*",10],["tube8.*",10],["topeuropix.*",10],["vermangasporno.com",10],["moviescounter.*",10],["imgtorrnt.in",10],["picbaron.com",[10,113]],["torrent9.*",10],["desiremovies.*",10],["letmejerk.com",10],["letmejerk2.com",10],["letmejerk3.com",10],["letmejerk4.com",10],["letmejerk5.com",10],["letmejerk6.com",10],["letmejerk7.com",10],["movs4u.*",10],["uwatchfree.*",10],["hydrax.*",10],["4movierulz.*",10],["projectfreetv.*",10],["arabseed.*",10],["btdb.*",[10,49]],["dlapk4all.com",10],["kropic.com",10],["kvador.com",10],["pdfindir.net",10],["brstej.com",10],["topwwnews.com",10],["xsanime.com",10],["vidlo.us",10],["youx.xxx",10],["world4ufree.*",10],["animeindo.asia",10],["streamsport.*",10],["rojadirectatvhd.*",10],["userload.*",10],["adclickersbot.com",10],["badtaste.it",11],["adyou.*",12],["gotporn.com",13],["freepornrocks.com",13],["tvhai.org",13],["realgfporn.com",[14,15]],["fxporn69.*",14],["thisvid.com",15],["xvideos-downloader.net",15],["imgspice.com",16],["vikiporn.com",17],["tnaflix.com",17],["hentai2w.com",[17,177]],["yourlust.com",17],["hotpornfile.org",17],["watchfreexxx.net",17],["vintageporntubes.com",17],["angelgals.com",17],["babesexy.com",17],["ganstamovies.com",17],["youngleak.com",17],["porndollz.com",17],["xnxxvideo.pro",17],["xvideosxporn.com",17],["filmpornofrancais.fr",17],["pictoa.com",[17,40]],["adultasianporn.com",17],["nsfwmonster.com",17],["girlsofdesire.org",17],["gaytail.com",17],["fetish-bb.com",17],["rumporn.com",17],["soyoungteens.com",17],["zubby.com",17],["lesbian8.com",17],["gayforfans.com",17],["reifporn.de",17],["javtsunami.com",17],["18tube.sex",17],["xxxextreme.org",17],["amateurs-fuck.com",17],["sex-amateur-clips.com",17],["hentaiworld.tv",17],["dads-banging-teens.com",17],["home-xxx-videos.com",17],["mature-chicks.com",17],["hqbang.com",17],["darknessporn.com",17],["familyporner.com",17],["freepublicporn.com",17],["pisshamster.com",17],["punishworld.com",17],["xanimu.com",17],["tubator.com",17],["pornhd.com",18],["cnnamador.com",[18,28]],["cle0desktop.blogspot.com",18],["turkanime.co",18],["rexporn.*",18],["movies07.*",18],["camclips.tv",[18,41]],["blackpornhq.com",18],["xsexpics.com",18],["ulsex.net",18],["wannafreeporn.com",18],["ytube2dl.com",18],["pornocomics.*",18],["multiup.us",18],["protege-torrent.com",18],["pussyspace.com",[19,20]],["pussyspace.net",[19,20]],["empflix.com",21],["cpmlink.net",22],["bdsmstreak.com",22],["cutpaid.com",22],["pornforrelax.com",22],["fatwhitebutt.com",22],["pornomoll.*",22],["short.pe",23],["gsurl.*",23],["totaldebrid.org",24],["freecoursesonline.*",24],["neko-miku.com",24],["lordpremium.*",24],["elsfile.org",24],["venstrike.jimdofree.com",24],["todovieneok.*",24],["schrauben-normen.de",24],["avengerinator.blogspot.com",24],["novablogitalia.*",24],["link-to.net",24],["hanimesubth.com",24],["gsmturkey.net",24],["anisubindo.*",24],["adshrink.it",24],["presentation-ppt.com",24],["mangacanblog.com",24],["pekalongan-cits.blogspot.com",24],["4tymode.win",24],["linkvertise.com",24],["reifenrechner.at",24],["tire-size-calculator.info",24],["linuxsecurity.com",24],["itsguider.com",24],["cotravinh.blogspot.com",24],["itudong.com",24],["shortx.net",24],["btvsports.*",24],["lecturel.com",24],["bakai.org",24],["nar.k-ba.net",24],["eurotruck2.com.br",24],["tiroalpaloes.com",24],["stream4free.*",24],["tiroalpaloes.net",24],["flixsix.com",24],["tiroalpaloweb.xyz",24],["mimaletadepeliculas.*",25],["bs.to",26],["burningseries.*",26],["efukt.com",26],["dz4soft.*",27],["generacionretro.net",27],["nuevos-mu.ucoz.com",27],["micloudfiles.com",27],["yoututosjeff.*",27],["ebookmed.*",27],["lanjutkeun.*",27],["mimaletamusical.blogspot.com",27],["novelasesp.*",27],["visionias.net",27],["singingdalong.*",27],["b3infoarena.in",27],["lurdchinexgist.blogspot.com",27],["thefreedommatrix.blogspot.com",27],["hentai-vl.blogspot.com",27],["projetomotog.blogspot.com",27],["ktmx.pro",27],["lirik3satu.blogspot.com",27],["marketmovers.it",27],["pharmaguideline.com",27],["safemaru.blogspot.com",27],["mixloads.com",27],["mangaromance.eu",27],["interssh.com",27],["freesoftpdfdownload.blogspot.com",27],["cirokun.blogspot.com",27],["myadslink.com",27],["blackavelic.com",27],["doujindesu.*",27],["server.satunivers.tv",27],["eg-akw.com",27],["xn--mgba7fjn.cc",27],["flashingjungle.com",28],["ma-x.org",29],["lavozdegalicia.es",29],["ddwloclawek.pl",29],["ki24.info",29],["xmovies8.*",30],["xmovies08.org",31],["globaldjmix.com",32],["desiupload.*",[33,134]],["hblinks.pro",33],["hubcdn.vip",33],["hubdrive.*",33],["90fpsconfig.in",33],["katdrive.link",33],["kmhd.net",33],["bollydrive.rest",33],["360news4u.net",33],["hypershort.com",[33,126]],["bollydrive.*",[33,136]],["zazzybabes.com",34],["haaretz.co.il",35],["haaretz.com",35],["slate.com",36],["megalinks.info",37],["megapastes.com",37],["mega-mkv.com",[37,38]],["mkv-pastes.com",37],["zpaste.net",37],["zlpaste.net",37],["9xlinks.site",37],["mega-dvdrip.*",38],["peliculas-dvdrip.*",38],["zona-leros.net",38],["desbloqueador.*",39],["cine.to",[40,183]],["newpelis.*",[40,47]],["pelix.*",[40,47]],["allcalidad.*",[40,177]],["khatrimaza.*",40],["kissasia.cc",40],["camwhores.*",41],["camwhorestv.*",41],["digjav.com",41],["uproxy.*",41],["videoszoofiliahd.com",42],["xxxtubezoo.com",43],["zooredtube.com",43],["uii.io",44],["megacams.me",45],["porndoe.com",46],["acienciasgalilei.com",48],["playrust.io",49],["payskip.org",50],["short-url.link",51],["tubedupe.com",52],["mirrorace.*",53],["fatgirlskinny.net",54],["polska-ie.com",54],["windowsmatters.com",54],["canaltdt.es",55],["masbrooo.com",55],["2ndrun.tv",55],["oncehelp.com",56],["curto.win",56],["smallseotools.com",57],["mixdrp.*",58],["macwelt.de",59],["pcwelt.de",59],["capital.de",59],["geo.de",59],["allmomsex.com",60],["allnewindianporn.com",60],["analxxxvideo.com",60],["animalextremesex.com",60],["anime3d.xyz",60],["animefuckmovies.com",60],["animepornfilm.com",60],["animesexbar.com",60],["animesexclip.com",60],["animexxxsex.com",60],["animexxxfilms.com",60],["anysex.club",60],["apetube.asia",60],["asianfuckmovies.com",60],["asianfucktube.com",60],["asianporn.sexy",60],["asiansex.*",60],["asiansexcilps.com",60],["beeg.fund",60],["beegvideoz.com",60],["bestasiansex.pro",60],["bravotube.asia",60],["brutalanimalsfuck.com",60],["candyteenporn.com",60],["daddyfuckmovies.com",60],["desifuckonline.com",60],["exclusiveasianporn.com",60],["exteenporn.com",60],["fantasticporn.net",60],["fantasticyoungporn.com",60],["fineasiansex.com",60],["firstasianpussy.com",60],["freeindiansextube.com",60],["freepornasians.com",60],["freerealvideo.com",60],["fuck-beeg.com",60],["fuck-xnxx.com",60],["fuckasian.pro",60],["fuckfuq.com",60],["fuckundies.com",60],["gojapaneseporn.com",60],["golderotica.com",60],["goodyoungsex.com",60],["goyoungporn.com",60],["hardxxxmoms.com",60],["hdvintagetube.com",60],["hentaiporn.me",60],["hentaisexfilms.com",60],["hentaisexuality.com",60],["hot-teens-movies.mobi",60],["hotanimepornvideos.com",60],["hotanimevideos.com",60],["hotasianpussysex.com",60],["hotjapaneseshows.com",60],["hotmaturetube.com",60],["hotmilfs.pro",60],["hotorientalporn.com",60],["hotpornyoung.com",60],["hotxxxjapanese.com",60],["hotxxxpussy.com",60],["indiafree.net",60],["indianpornvideo.online",60],["japanfuck.*",60],["japanporn.*",60],["japanpornclip.com",60],["japanesetube.video",60],["japansex.me",60],["japanesexxxporn.com",60],["japansporno.com",60],["japanxxx.asia",60],["japanxxxworld.com",60],["keezmovies.surf",60],["lingeriefuckvideo.com",60],["liveanimalporn.zooo.club",60],["madhentaitube.com",60],["megahentaitube.com",60],["megajapanesesex.com",60],["megajapantube.com",60],["milfxxxpussy.com",60],["momsextube.pro",60],["momxxxass.com",60],["monkeyanimalporn.com",60],["moviexxx.mobi",60],["newanimeporn.com",60],["newjapanesexxx.com",60],["nicematureporn.com",60],["nudeplayboygirls.com",60],["openxxxporn.com",60],["originalindianporn.com",60],["originalteentube.com",60],["pig-fuck.com",60],["plainasianporn.com",60],["popularasianxxx.com",60],["pornanimetube.com",60],["pornasians.pro",60],["pornhat.asia",60],["pornjapanesesex.com",60],["pornomovies.asia",60],["pornvintage.tv",60],["primeanimesex.com",60],["realjapansex.com",60],["realmomsex.com",60],["redsexhub.com",60],["retroporn.world",60],["retrosexfilms.com",60],["sex-free-movies.com",60],["sexanimesex.com",60],["sexanimetube.com",60],["sexjapantube.com",60],["sexmomvideos.com",60],["sexteenxxxtube.com",60],["sexxxanimal.com",60],["sexyoungtube.com",60],["sexyvintageporn.com",60],["sopornmovies.com",60],["spicyvintageporn.com",60],["sunporno.club",60],["tabooanime.club",60],["teenextrem.com",60],["teenfucksex.com",60],["teenhost.net",60],["teensex.*",60],["teensexass.com",60],["tnaflix.asia",60],["totalfuckmovies.com",60],["totalmaturefuck.com",60],["txxx.asia",60],["vintagetube.*",60],["voyeurpornsex.com",60],["warmteensex.com",60],["wetasiancreampie.com",60],["wildhentaitube.com",60],["wowyoungsex.com",60],["xhamster-art.com",60],["xmovie.pro",60],["xnudevideos.com",60],["xnxxjapon.com",60],["xpics.me",60],["xvide.me",60],["xxxanimefuck.com",60],["xxxanimevideos.com",60],["xxxanimemovies.com",60],["xxxhentaimovies.com",60],["xxxhothub.com",60],["xxxjapaneseporntube.com",60],["xxxlargeporn.com",60],["xxxmomz.com",60],["xxxmovies.*",60],["xxxpornmilf.com",60],["xxxpussyclips.com",60],["xxxpussysextube.com",60],["xxxretrofuck.com",60],["xxxsex.pro",60],["xxxsexyjapanese.com",60],["xxxteenyporn.com",60],["xxxvideo.asia",60],["xxxvideos.ink",60],["xxxyoungtv.com",60],["youjizzz.club",60],["youngpussyfuck.com",60],["bayimg.com",61],["celeb.gate.cc",62],["kinoger.re",63],["usersdrive.com",63],["desi.upn.bio",63],["zooqle.*",64],["masterplayer.xyz",65],["pussy-hub.com",65],["porndex.com",66],["compucalitv.com",67],["hdfull.*",68],["diariodenavarra.es",69],["mangamanga.*",70],["streameast.*",71],["thestreameast.*",71],["pennlive.com",72],["beautypageants.indiatimes.com",73],["01fmovies.com",74],["vev.*",75],["vidop.*",75],["lnk2.cc",76],["fullhdxxx.com",77],["luscious.net",[77,113]],["classicpornbest.com",77],["1youngteenporn.com",77],["www-daftarharga.blogspot.com",[77,167]],["miraculous.to",[77,173]],["vtube.to",77],["zone-telechargement.*",77],["xstory-fr.com",77],["1337x.*",77],["x1337x.*",77],["gosexpod.com",78],["tubepornclassic.com",79],["shemalez.com",79],["otakukan.com",80],["xcafe.com",81],["pornfd.com",81],["venusarchives.com",81],["imagehaha.com",82],["imagenpic.com",82],["imageshimage.com",82],["imagetwist.com",82],["megalink.*",83],["k1nk.co",83],["watchasians.cc",83],["lulustream.com",83],["luluvdo.com",83],["gmx.*",84],["web.de",84],["news18.com",85],["thelanb.com",86],["dropmms.com",86],["softwaredescargas.com",87],["cracking-dz.com",88],["mega1080p.*",89],["anitube.*",89],["gazzetta.it",90],["9hentai.*",91],["port.hu",92],["dziennikbaltycki.pl",93],["dzienniklodzki.pl",93],["dziennikpolski24.pl",93],["dziennikzachodni.pl",93],["echodnia.eu",93],["expressbydgoski.pl",93],["expressilustrowany.pl",93],["gazetakrakowska.pl",93],["gazetalubuska.pl",93],["gazetawroclawska.pl",93],["gk24.pl",93],["gloswielkopolski.pl",93],["gol24.pl",93],["gp24.pl",93],["gra.pl",93],["gs24.pl",93],["kurierlubelski.pl",93],["motofakty.pl",93],["naszemiasto.pl",93],["nowiny24.pl",93],["nowosci.com.pl",93],["nto.pl",93],["polskatimes.pl",93],["pomorska.pl",93],["poranny.pl",93],["sportowy24.pl",93],["strefaagro.pl",93],["strefabiznesu.pl",93],["stronakobiet.pl",93],["telemagazyn.pl",93],["to.com.pl",93],["wspolczesna.pl",93],["course9x.com",93],["courseclub.me",93],["azrom.net",93],["alttyab.net",93],["esopress.com",93],["nesiaku.my.id",93],["onemanhua.com",94],["freeindianporn.mobi",94],["dr-farfar.com",95],["boyfriendtv.com",96],["brandstofprijzen.info",97],["netfuck.net",98],["gaypornhdfree.*",98],["blog24.me",[98,106]],["kisahdunia.com",98],["cinemakottaga.*",98],["privatemoviez.*",98],["javsex.to",98],["nulljungle.com",98],["oyuncusoruyor.com",98],["pbarecap.ph",98],["sourds.net",98],["teknobalta.com",98],["tvinternetowa.info",98],["sqlserveregitimleri.com",98],["tutcourse.com",98],["readytechflip.com",98],["warddogs.com",98],["dvdgayporn.com",98],["iimanga.com",98],["tinhocdongthap.com",98],["tremamnon.com",98],["423down.com",98],["brizzynovel.com",98],["jugomobile.com",98],["freecodezilla.net",98],["apkmaven.*",98],["iconmonstr.com",98],["gay-tubes.cc",98],["rbxscripts.net",98],["comentariodetexto.com",98],["wordpredia.com",98],["allfaucet.xyz",[98,106]],["titbytz.tk",98],["replica-watch.info",98],["alludemycourses.com",98],["kayifamilytv.com",98],["interfans.org",98],["iir.ai",99],["popcornstream.*",100],["gameofporn.com",101],["qpython.club",102],["antifake-funko.fr",102],["dktechnicalmate.com",102],["recipahi.com",102],["e9china.net",103],["ontools.net",103],["marketbeat.com",104],["hentaipornpics.net",105],["ohionowcast.info",106],["wiour.com",106],["bitzite.com",[106,111,112]],["appsbull.com",106],["diudemy.com",106],["maqal360.com",[106,114,115]],["bitcotasks.com",106],["videolyrics.in",106],["manofadan.com",106],["cempakajaya.com",106],["tagecoin.com",106],["naijafav.top",106],["ourcoincash.xyz",106],["claimcoins.site",106],["cryptosh.pro",106],["eftacrypto.com",106],["fescrypto.com",106],["earnhub.net",106],["kiddyshort.com",106],["tronxminer.com",106],["neverdims.com",106],["homeairquality.org",107],["cety.app",[108,109]],["exego.app",108],["cutlink.net",108],["cutsy.net",108],["cutyurls.com",108],["cutty.app",108],["cutnet.net",108],["jixo.online",108],["cuty.me",109],["exnion.com",109],["upfiles.app",[109,125]],["upfiles-urls.com",[109,125]],["gamerxyt.com",109],["up4stream.com",109],["adcrypto.net",110],["admediaflex.com",110],["aduzz.com",110],["bitcrypto.info",110],["cdrab.com",110],["datacheap.io",110],["hbz.us",110],["savego.org",110],["owsafe.com",110],["sportweb.info",110],["gfx-station.com",111],["buzzheavier.com",112],["flashbang.sh",112],["trashbytes.net",112],["aiimgvlog.fun",113],["6indianporn.com",113],["amateurebonypics.com",113],["amateuryoungpics.com",113],["amigosporn.top",113],["cinemabg.net",113],["coomer.su",113],["desimmshd.com",113],["frauporno.com",113],["givemeaporn.com",113],["hitomi.la",113],["jav-asia.top",113],["javf.net",113],["javfull.net",113],["javideo.net",113],["javsunday.com",113],["kemono.su",113],["kr18plus.com",113],["missavtv.com",113],["pilibook.com",113],["pornborne.com",113],["porngrey.com",113],["pornktube.*",113],["qqxnxx.com",113],["sexvideos.host",113],["submilf.com",113],["subtaboo.com",113],["tktube.com",113],["watchseries.*",113],["xfrenchies.com",113],["soft98.ir",[114,136]],["moderngyan.com",116],["sattakingcharts.in",116],["freshbhojpuri.com",116],["bgmi32bitapk.in",116],["bankshiksha.in",116],["earn.mpscstudyhub.com",116],["earn.quotesopia.com",116],["money.quotesopia.com",116],["best-mobilegames.com",116],["learn.moderngyan.com",116],["bharatsarkarijobalert.com",116],["quotesopia.com",116],["creditsgoal.com",116],["coingraph.us",117],["momo-net.com",117],["milfnut.*",117],["maxgaming.fi",117],["cybercityhelp.in",118],["travel.vebma.com",119],["cloud.majalahhewan.com",119],["crm.cekresi.me",119],["ai.tempatwisata.pro",119],["pinloker.com",119],["sekilastekno.com",119],["mrproblogger.com",120],["themezon.net",120],["dagensnytt.com",120],["azmath.info",121],["azsoft.*",121],["downfile.site",121],["downphanmem.com",121],["expertvn.com",121],["memangbau.com",121],["trangchu.news",121],["aztravels.net",121],["ielts-isa.edu.vn",121],["techedubyte.com",[121,229]],["jpopsingles.eu",121],["aipebel.com",121],["link.paid4link.com",[122,123]],["driveup.sbs",124],["apimate.net",124],["dynamicminister.net",124],["gofirmware.com",124],["national-park.com",124],["forgee.xyz",124],["gamehub.cam",124],["upfion.com",125],["cutyion.com",125],["weshare.is",127],["file.gocmod.com",127],["flight-report.com",128],["vulture.com",129],["megaplayer.bokracdn.run",130],["hentaistream.com",131],["siteunblocked.info",132],["larvelfaucet.com",133],["feyorra.top",133],["claimtrx.com",133],["pagalmovies.*",134],["7starhd.*",134],["jalshamoviez.*",134],["moviesyug.net",134],["9xupload.*",134],["bdupload.*",134],["rdxhd1.*",134],["parispi.net",135],["hentaicloud.com",136],["nuvid.*",136],["justin.mp3quack.lol",136],["tio.ch",137],["lavanguardia.com",137],["tu.no",137],["paperzonevn.com",138],["dailyvideoreports.net",139],["lewd.ninja",140],["systemnews24.com",141],["incestvidz.com",142],["niusdiario.es",143],["playporngames.com",144],["javx.cc",144],["movi.pk",[145,148]],["moviessources.*",146],["cutesexyteengirls.com",147],["0dramacool.net",148],["0gomovie.*",148],["0gomovies.*",148],["185.53.88.104",148],["185.53.88.204",148],["185.53.88.15",148],["123moviefree.*",148],["123movies4k.net",148],["1kmovies.*",148],["1madrasdub.*",148],["1primewire.*",148],["1rowsports.com",148],["2embed.*",148],["2madrasdub.*",148],["2umovies.*",148],["4anime.*",148],["4share-mp3.net",148],["9animetv.to",148],["720pstream.me",148],["aagmaal.com",148],["abysscdn.com",148],["adblockplustape.*",148],["ajkalerbarta.com",148],["altadefinizione01.*",148],["androidapks.biz",148],["androidsite.net",148],["animeonlinefree.org",148],["animesite.net",148],["animespank.com",148],["aniworld.to",148],["apkmody.io",148],["appsfree4u.com",148],["atomixhq.*",148],["audioz.download",148],["awafim.tv",148],["bdnewszh.com",148],["beastlyprints.com",148],["beinmatch.*",148],["bengalisite.com",148],["bestfullmoviesinhd.org",148],["betteranime.net",148],["blacktiesports.live",148],["brmovies.*",148],["buffsports.stream",148],["ch-play.com",148],["cima4u.*",148],["clickforhire.com",148],["clicknupload.*",148],["cloudy.pk",148],["cmovies.*",148],["computercrack.com",148],["coolcast2.com",148],["crackedsoftware.biz",148],["crackfree.org",148],["cracksite.info",148],["cricfree.*",148],["crichd.*",148],["cryptoblog24.info",148],["cuatrolatastv.blogspot.com",148],["cydiasources.net",148],["decmelfot.xyz",148],["dirproxy.com",148],["dood.*",148],["dopebox.to",148],["downloadapk.info",148],["downloadapps.info",148],["downloadgames.info",148],["downloadmusic.info",148],["downloadsite.org",148],["downloadwella.com",148],["ebooksite.org",148],["educationtips213.blogspot.com",148],["egyup.live",148],["elgoles.pro",148],["embed.meomeo.pw",148],["embed.scdn.to",148],["emulatorsite.com",148],["essaysharkwriting.club",148],["exploreera.net",148],["extrafreetv.com",148],["f1stream.*",148],["fakedetail.com",148],["faselhd.*",148],["fbstream.*",148],["fclecteur.com",148],["filemoon.*",148],["filepress.*",[148,211]],["files.im",148],["filmlinks4u.*",148],["filmpertutti.*",148],["filmyzilla.*",148],["flexyhit.com",148],["fmoviefree.net",148],["fmovies24.com",148],["fmovies.*",148],["freeflix.info",148],["freemoviesu4.com",148],["freeplayervideo.com",148],["freesoccer.net",148],["french-stream.*",148],["fseries.org",148],["fzlink.*",148],["gamefast.org",148],["gamesite.info",148],["gettapeads.com",148],["gmanga.me",148],["gocast123.me",148],["gofilms4u.*",148],["gogoanime.*",148],["gogohd.net",148],["gogoplay5.com",148],["gomoviz.*",148],["gooplay.net",148],["gostreamon.net",148],["happy2hub.org",148],["harimanga.com",148],["hdmoviefair.*",148],["hdmovies4u.*",148],["hdmovies50.*",148],["hdmoviesfair.*",148],["healthnewsreel.com",148],["hexupload.net",148],["hh3dhay.*",148],["hinatasoul.com",148],["hindilinks4u.*",148],["hindisite.net",148],["holymanga.net",148],["hotmasti.*",148],["hurawatch.*",148],["hxfile.co",148],["isosite.org",148],["iv-soft.com",148],["januflix.expert",148],["jewelry.com.my",148],["johnwardflighttraining.com",148],["kabarportal.com",148],["klmanga.*",148],["klubsports.*",148],["kstorymedia.com",148],["la123movies.org",148],["lespassionsdechinouk.com",148],["libertestreamvf.*",148],["lilymanga.net",148],["linksdegrupos.com.br",148],["linkz.wiki",148],["livetvon.*",148],["livestreamtv.pk",148],["macsite.info",148],["manga1000.*",148],["manga1001.*",148],["mangaraw.*",148],["mangarawjp.*",148],["mangasite.org",148],["manhuascan.com",148],["megamovies.org",148],["membed.net",148],["mlbstream.*",148],["moddroid.com",148],["motogpstream.*",148],["moviefree2.com",148],["movierulz.*",148],["movies123.*",148],["movies-watch.com.pk",148],["movies2watch.*",148],["moviesden.*",148],["moviesite.app",148],["moviesonline.fm",148],["moviesx.org",148],["moviezaddiction.*",148],["msmoviesbd.com",148],["musicsite.biz",148],["myfernweh.com",148],["myviid.com",148],["nazarickol.com",148],["nbastream.*",148],["netcine.*",148],["nflstream.*",148],["nhlstream.*",148],["noob4cast.com",148],["nsw2u.com",[148,270]],["oko.sh",148],["onlinewatchmoviespk.*",148],["orangeink.pk",148],["pahaplayers.click",148],["patchsite.net",148],["pctfenix.*",148],["pctnew.*",148],["pdfsite.net",148],["pksmovies.*",148],["play1002.com",148],["player-cdn.com",148],["plyjam.*",148],["plylive.*",148],["pogolinks.*",148],["popcorntime.*",148],["poscitech.*",148],["productkeysite.com",148],["projectfreetv.one",148],["romsite.org",148],["rufiguta.com",148],["rugbystreams.*",148],["rytmp3.io",148],["send.cm",148],["seriesite.net",148],["seriezloaded.com.ng",148],["serijehaha.com",148],["shahed4u.*",148],["sflix.*",148],["shrugemojis.com",148],["siteapk.net",148],["siteflix.org",148],["sitegames.net",148],["sitekeys.net",148],["sitepdf.com",148],["sitesunblocked.*",148],["sitetorrent.com",148],["softwaresite.net",148],["solarmovies.*",148],["sportbar.live",148],["sportcast.*",148],["sportskart.*",148],["sports-stream.*",148],["ssyoutube.com",148],["stardima.com",148],["stream4free.live",148],["streaming-french.*",148],["streamers.*",148],["streamingcommunity.*",[148,193]],["superapk.org",148],["supermovies.org",148],["t20cup.*",148],["tainio-mania.online",148],["talaba.su",148],["tamilguns.org",148],["tatabrada.tv",148],["techtrendmakers.com",148],["tennisstreams.*",148],["thememypc.net",148],["thripy.com",148],["torrentdosfilmes.*",148],["toonanime.*",148],["travelplanspro.com",148],["turcasmania.com",148],["tusfiles.com",148],["tvonlinesports.com",148],["tvply.*",148],["ufcstream.*",148],["ultramovies.org",148],["uploadbank.com",148],["uptomega.*",148],["uqload.*",148],["urdubolo.pk",148],["vudeo.*",148],["vidoo.*",148],["vidspeeds.com",148],["vipboxtv.*",148],["viprow.*",148],["warezsite.net",148],["watchmovies2.com",148],["watchmoviesforfree.org",148],["watchofree.com",148],["watchsite.net",148],["watchsouthpark.tv",148],["watchtvch.club",148],["web.livecricket.is",148],["webseries.club",148],["worldcupstream.pm",148],["y2mate.com",148],["yesmovies.*",148],["yomovies.*",148],["yomovies1.*",148],["youapk.net",148],["youtube4kdownloader.com",148],["yt2mp3s.*",148],["yts-subs.com",148],["kat.*",148],["katbay.*",148],["kickass.*",148],["kickasshydra.*",148],["kickasskat.*",148],["kickass2.*",148],["kickasstorrents.*",148],["kat2.*",148],["kattracker.*",148],["thekat.*",148],["thekickass.*",148],["kickassz.*",148],["kickasstorrents2.*",148],["topkickass.*",148],["kickassgo.*",148],["kkickass.*",148],["kkat.*",148],["kickasst.*",148],["kick4ss.*",148],["haho.moe",149],["nicy-spicy.pw",150],["novelmultiverse.com",151],["mylegalporno.com",152],["embedsports.me",153],["embedstream.me",153],["jumbtv.com",153],["reliabletv.me",153],["guardaserie.*",154],["cine-calidad.*",155],["xnxx.com",156],["xvideos.*",156],["thecut.com",157],["novelism.jp",158],["alphapolis.co.jp",159],["game3rb.com",160],["javhub.net",160],["thotvids.com",161],["berklee.edu",162],["rawkuma.com",[163,164]],["moviesjoyhd.to",164],["cineb.rs",164],["imeteo.sk",165],["youtubemp3donusturucu.net",166],["surfsees.com",168],["vivo.st",[169,170]],["videovard.*",171],["alueviesti.fi",172],["kiuruvesilehti.fi",172],["lempaala.ideapark.fi",172],["olutposti.fi",172],["urjalansanomat.fi",172],["tainhanhvn.com",174],["titantv.com",175],["3cinfo.net",176],["camarchive.tv",177],["crownimg.com",177],["freejav.guru",177],["gntai.*",177],["grantorrent.*",177],["hentai2read.com",177],["icyporno.com",177],["illink.net",177],["javtiful.com",177],["m-hentai.net",177],["mejortorrent.*",177],["mejortorrento.*",177],["mejortorrents.*",177],["mejortorrents1.*",177],["mejortorrentt.*",177],["pornblade.com",177],["pornfelix.com",177],["pornxxxxtube.net",177],["redwap.me",177],["redwap2.com",177],["redwap3.com",177],["sunporno.com",177],["tubxporn.xxx",177],["ver-comics-porno.com",177],["ver-mangas-porno.com",177],["xanimeporn.com",177],["xxxvideohd.net",177],["zetporn.com",177],["simpcity.su",178],["cocomanga.com",179],["animelatinohd.com",179],["sampledrive.in",180],["sportnews.to",180],["soccershoes.blog",180],["shineads.*",180],["mcleaks.net",181],["explorecams.com",181],["minecraft.buzz",181],["chillx.top",182],["playerx.stream",182],["m.liputan6.com",184],["stardewids.com",[184,207]],["ingles.com",185],["spanishdict.com",185],["surfline.com",186],["rureka.com",187],["freepreset.net",188],["amateur8.com",189],["freeporn8.com",189],["maturetubehere.com",189],["embedo.co",190],["corriere.it",191],["oggi.it",191],["2the.space",192],["apkcombo.com",194],["winfuture.de",195],["sponsorhunter.com",196],["novelssites.com",197],["haxina.com",198],["scimagojr.com",198],["dramafren.net",198],["torrentmac.net",199],["udvl.com",200],["dlpanda.com",201],["socialmediagirls.com",202],["einrichtungsbeispiele.de",203],["weadown.com",204],["molotov.tv",205],["freecoursesonline.me",206],["adelsfun.com",206],["advantien.com",206],["bailbondsfinder.com",206],["bg-gledai.*",206],["bigpiecreative.com",206],["childrenslibrarylady.com",206],["classifarms.com",206],["comtasq.ca",206],["crone.es",206],["ctrmarketingsolutions.com",206],["dropnudes.com",206],["ftuapps.dev",206],["genzsport.com",206],["ghscanner.com",206],["gledaitv.*",206],["grsprotection.com",206],["gruporafa.com.br",206],["inmatefindcalifornia.com",206],["inmatesearchidaho.com",206],["itsonsitetv.com",206],["mfmfinancials.com",206],["myproplugins.com",206],["nurulislam.org",206],["onehack.us",206],["ovester.com",206],["paste.bin.sx",206],["privatenudes.com",206],["renoconcrete.ca",206],["richieashbeck.com",206],["sat.technology",206],["short1ink.com",206],["stpm.co.uk",206],["wegotcookies.co",206],["mathcrave.com",206],["marinetraffic.live",206],["commands.gg",207],["smgplaza.com",208],["emturbovid.com",209],["findjav.com",209],["javggvideo.xyz",209],["mmtv01.xyz",209],["stbturbo.xyz",209],["streamsilk.com",209],["freepik.com",210],["diyphotography.net",212],["bitchesgirls.com",213],["hiraethtranslation.com",214],["programmingeeksclub.com",215],["diendancauduong.com",216],["androidadult.com",217],["parentcircle.com",218],["h-game18.xyz",219],["wheelofgold.com",220],["davescomputertips.com",221],["historyofroyalwomen.com",221],["motchill.*",222],["lifestyle.bg",223],["news.bg",223],["topsport.bg",223],["webcafe.bg",223],["freepikdownloader.com",224],["freepasses.org",225],["iusedtobeaboss.com",226],["androidpolice.com",227],["cbr.com",227],["gamerant.com",227],["howtogeek.com",227],["thegamer.com",227],["blogtruyenmoi.com",228],["repretel.com",230],["tubereader.me",230],["graphicget.com",231],["qiwi.gg",[232,233]],["sonixgvn.net",234],["alliptvlinks.com",235],["smashyplayer.top",236],["upns.*",236],["xvideos.com",237],["xvideos2.com",237],["homemoviestube.com",238],["sexseeimage.com",238],["readcomiconline.*",239],["nekopoi.*",240],["ukchat.co.uk",241],["hivelr.com",242],["skidrowcodex.net",243],["takimag.com",244],["digi.no",245],["th.gl",246],["twi-fans.com",247],["learn-cpp.org",248],["terashare.co",249],["pornwex.tv",250],["smithsonianmag.com",251],["homesports.net",252],["realmoasis.com",253],["javfc2.xyz",254],["gobankingrates.com",255],["hiddenleaf.to",256],["ronorp.net",257],["gdflix.*",258],["a1movies.*",259],["videovak.com",260],["a-lohas.jp",261],["akirabox.com",262],["purplex.app",263],["maggotdrowning.com",264],["bilinovel.com",265],["esportstales.com",266],["idnes.cz",[267,268]],["cbc.ca",269]]);
const exceptionsMap = new Map([["forum.soft98.ir",[114,136]]]);
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
