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
const argsList = [["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["click","Event"],["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["/^(?:click|mousedown)$/","_0x"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","'\\'"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["mousedown","shown_at"],["","focus"],["load","abDetectorPro"],["error","blocker"],["load","error-report.com"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["load","Adblock"],["DOMContentLoaded","window.open"],["DOMContentLoaded","atob"],["","vads"],["devtoolschange"],["beforeunload"],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["load","popMagic"],["click","popurl"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["/click|mousedown/","catch"],["","init"],["adb"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","AdBlocker"],["","showModal"],["","goog"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["DOMContentLoaded","adsSrc"],["","AdB"],["load","adSession"],["np.detect"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","","elements","a#dlink"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","Promise"],["DOMContentLoaded","anchor.href"],["click","popupInterval"],["click","pingUrl"],["mousedown","scoreUrl"],["","Adb"]];
const hostnamesMap = new Map([["cbc.ca",0],["io.google",1],["newser.com",2],["sport1.de",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["kingofdown.com",7],["radiotormentamx.com",7],["limetorrents.*",[7,11]],["king-pes.*",7],["quelleestladifference.fr",7],["depedlps.*",7],["otakuworldsite.blogspot.com",7],["ad-itech.blogspot.com",7],["komikcast.*",7],["unlockapk.com",7],["mobdi3ips.com",7],["socks24.org",7],["idedroidsafelink.*",7],["links-url.*",7],["interviewgig.com",7],["javaguides.net",7],["almohtarif-tech.net",7],["devoloperxda.blogspot.com",7],["zwergenstadt.com",7],["primedeportes.es",7],["upxin.net",7],["ciudadblogger.com",7],["ke-1.com",7],["bit-shares.com",7],["itdmusics.com",7],["aspdotnet-suresh.com",7],["tudo-para-android.com",7],["zerotopay.com",7],["ak4eg.*",7],["akw.to",7],["mawsueaa.com",7],["hesgoal-live.io",7],["streanplay.*",8],["steanplay.*",8],["bibme.org",9],["citationmachine.net",9],["easybib.com",10],["pahe.*",11],["yts.*",11],["tube8.*",11],["topeuropix.*",11],["vermangasporno.com",11],["moviescounter.*",11],["imgtorrnt.in",11],["picbaron.com",[11,113]],["torrent9.*",11],["desiremovies.*",11],["letmejerk.com",11],["letmejerk2.com",11],["letmejerk3.com",11],["letmejerk4.com",11],["letmejerk5.com",11],["letmejerk6.com",11],["letmejerk7.com",11],["movs4u.*",11],["uwatchfree.*",11],["hydrax.*",11],["4movierulz.*",11],["projectfreetv.*",11],["arabseed.*",11],["btdb.*",[11,50]],["dlapk4all.com",11],["kropic.com",11],["kvador.com",11],["pdfindir.net",11],["brstej.com",11],["topwwnews.com",11],["xsanime.com",11],["vidlo.us",11],["youx.xxx",11],["world4ufree.*",11],["animeindo.asia",11],["streamsport.*",11],["rojadirectatvhd.*",11],["userload.*",11],["badtaste.it",12],["adyou.*",13],["gotporn.com",14],["freepornrocks.com",14],["tvhai.org",14],["footybite.to",14],["totalsportek.*",14],["totalsportekhd.com",14],["xn--mlaregvle-02af.nu",14],["realgfporn.com",[15,16]],["fxporn69.*",15],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["pornomico.com",18],["yourlust.com",18],["hd-easyporn.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["hentaihere.com",18],["ganstamovies.com",18],["youngleak.com",18],["jizzberry.com",18],["porndollz.com",18],["xnxxvideo.pro",18],["xvideosxporn.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,42]],["pornohirsch.net",18],["herzporno.*",18],["deinesexfilme.com",18],["einfachtitten.com",18],["halloporno.*",18],["lesbenhd.com",18],["milffabrik.com",18],["porn-monkey.com",18],["porndrake.com",18],["pornhubdeutsch.net",18],["pornoaffe.com",18],["pornodavid.com",18],["pornoente.tv",18],["pornofisch.com",18],["pornofelix.com",18],["pornohammer.com",18],["pornohelm.com",18],["pornoklinge.com",18],["pornotom.com",18],["pornotommy.com",18],["pornovideos-hd.com",18],["pornozebra.com",18],["xhamsterdeutsch.xyz",18],["xnxx-sexfilme.com",18],["youlikeboys.com",18],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["hentai2w.com",[18,128]],["pornhd.com",19],["cnnamador.com",[19,30]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["rexporn.*",19],["movies07.*",19],["camclips.tv",[19,43]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["pornocomics.*",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["pornomoll.*",23],["short.pe",24],["gsurl.*",24],["pinsystem.co.uk",25],["ancensored.com",25],["ganool.*",25],["mp3fiber.com",[25,26]],["xrivonet.info",25],["pirate.*",25],["piratebay.*",25],["pirateproxy.*",25],["proxytpb.*",25],["thepiratebay.*",25],["totaldebrid.org",26],["freecoursesonline.*",26],["lordpremium.*",26],["schrauben-normen.de",26],["avengerinator.blogspot.com",26],["novablogitalia.*",26],["link-to.net",26],["hanimesubth.com",26],["gsmturkey.net",26],["anisubindo.*",26],["adshrink.it",26],["presentation-ppt.com",26],["mangacanblog.com",26],["pekalongan-cits.blogspot.com",26],["4tymode.win",26],["linkvertise.com",26],["reifenrechner.at",26],["tire-size-calculator.info",26],["linuxsecurity.com",26],["itsguider.com",26],["cotravinh.blogspot.com",26],["itudong.com",26],["shortx.net",26],["btvsports.*",26],["lecturel.com",26],["bakai.org",26],["nar.k-ba.net",26],["eurotruck2.com.br",26],["tiroalpaloes.com",26],["stream4free.*",26],["tiroalpaloes.net",26],["flixsix.com",26],["tiroalpaloweb.xyz",26],["mimaletadepeliculas.*",27],["bs.to",28],["burningseries.*",28],["efukt.com",28],["dz4soft.*",29],["generacionretro.net",29],["nuevos-mu.ucoz.com",29],["micloudfiles.com",29],["yoututosjeff.*",29],["ebookmed.*",29],["lanjutkeun.*",29],["mimaletamusical.blogspot.com",29],["novelasesp.*",29],["visionias.net",29],["singingdalong.*",29],["b3infoarena.in",29],["lurdchinexgist.blogspot.com",29],["thefreedommatrix.blogspot.com",29],["hentai-vl.blogspot.com",29],["projetomotog.blogspot.com",29],["ktmx.pro",29],["lirik3satu.blogspot.com",29],["marketmovers.it",29],["pharmaguideline.com",29],["mixloads.com",29],["mangaromance.eu",29],["interssh.com",29],["freesoftpdfdownload.blogspot.com",29],["myadslink.com",29],["blackavelic.com",29],["doujindesu.*",29],["server.satunivers.tv",29],["eg-akw.com",29],["xn--mgba7fjn.cc",29],["flashingjungle.com",30],["ma-x.org",31],["lavozdegalicia.es",31],["ddwloclawek.pl",31],["ki24.info",31],["xmovies8.*",32],["xmovies08.org",33],["globaldjmix.com",34],["desiupload.*",[35,143]],["hblinks.pro",35],["hubcdn.vip",35],["hubdrive.*",35],["90fpsconfig.in",35],["katdrive.link",35],["kmhd.net",35],["bollydrive.rest",35],["360news4u.net",35],["hypershort.com",[35,126]],["bollydrive.*",[35,145]],["zazzybabes.com",36],["haaretz.co.il",37],["haaretz.com",37],["slate.com",38],["megalinks.info",39],["megapastes.com",39],["mega-mkv.com",[39,40]],["mkv-pastes.com",39],["zpaste.net",39],["zlpaste.net",39],["9xlinks.site",39],["mega-dvdrip.*",40],["peliculas-dvdrip.*",40],["desbloqueador.*",41],["cine.to",[42,184]],["newpelis.*",[42,48]],["pelix.*",[42,48]],["allcalidad.*",[42,128]],["khatrimaza.*",42],["kissasia.cc",42],["camwhores.*",43],["camwhorestv.*",43],["digjav.com",43],["uproxy.*",43],["videoszoofiliahd.com",44],["xxxtubezoo.com",45],["zooredtube.com",45],["uii.io",46],["porndoe.com",47],["acienciasgalilei.com",49],["playrust.io",50],["payskip.org",51],["short-url.link",52],["tubedupe.com",53],["mirrorace.*",54],["fatgirlskinny.net",55],["polska-ie.com",55],["windowsmatters.com",55],["canaltdt.es",56],["masbrooo.com",56],["2ndrun.tv",56],["oncehelp.com",57],["curto.win",57],["smallseotools.com",58],["mixdrp.*",59],["macwelt.de",60],["pcwelt.de",60],["capital.de",60],["geo.de",60],["allmomsex.com",61],["allnewindianporn.com",61],["analxxxvideo.com",61],["animalextremesex.com",61],["anime3d.xyz",61],["animefuckmovies.com",61],["animepornfilm.com",61],["animesexbar.com",61],["animesexclip.com",61],["animexxxsex.com",61],["animexxxfilms.com",61],["anysex.club",61],["apetube.asia",61],["asianfuckmovies.com",61],["asianfucktube.com",61],["asianporn.sexy",61],["asiansex.*",61],["asiansexcilps.com",61],["beeg.fund",61],["beegvideoz.com",61],["bestasiansex.pro",61],["bravotube.asia",61],["brutalanimalsfuck.com",61],["candyteenporn.com",61],["daddyfuckmovies.com",61],["desifuckonline.com",61],["exclusiveasianporn.com",61],["exteenporn.com",61],["fantasticporn.net",61],["fantasticyoungporn.com",61],["fineasiansex.com",61],["firstasianpussy.com",61],["freeindiansextube.com",61],["freepornasians.com",61],["freerealvideo.com",61],["fuck-beeg.com",61],["fuck-xnxx.com",61],["fuckasian.pro",61],["fuckfuq.com",61],["fuckundies.com",61],["gojapaneseporn.com",61],["golderotica.com",61],["goodyoungsex.com",61],["goyoungporn.com",61],["hardxxxmoms.com",61],["hdvintagetube.com",61],["hentaiporn.me",61],["hentaisexfilms.com",61],["hentaisexuality.com",61],["hot-teens-movies.mobi",61],["hotanimepornvideos.com",61],["hotanimevideos.com",61],["hotasianpussysex.com",61],["hotjapaneseshows.com",61],["hotmaturetube.com",61],["hotmilfs.pro",61],["hotorientalporn.com",61],["hotpornyoung.com",61],["hotxxxjapanese.com",61],["hotxxxpussy.com",61],["indiafree.net",61],["indianpornvideo.online",61],["japanfuck.*",61],["japanporn.*",61],["japanpornclip.com",61],["japanesetube.video",61],["japansex.me",61],["japanesexxxporn.com",61],["japansporno.com",61],["japanxxx.asia",61],["japanxxxworld.com",61],["keezmovies.surf",61],["lingeriefuckvideo.com",61],["liveanimalporn.zooo.club",61],["madhentaitube.com",61],["megahentaitube.com",61],["megajapanesesex.com",61],["megajapantube.com",61],["milfxxxpussy.com",61],["momsextube.pro",61],["momxxxass.com",61],["monkeyanimalporn.com",61],["moviexxx.mobi",61],["newanimeporn.com",61],["newjapanesexxx.com",61],["nicematureporn.com",61],["nudeplayboygirls.com",61],["openxxxporn.com",61],["originalindianporn.com",61],["originalteentube.com",61],["pig-fuck.com",61],["plainasianporn.com",61],["popularasianxxx.com",61],["pornanimetube.com",61],["pornasians.pro",61],["pornhat.asia",61],["pornjapanesesex.com",61],["pornomovies.asia",61],["pornvintage.tv",61],["primeanimesex.com",61],["realjapansex.com",61],["realmomsex.com",61],["redsexhub.com",61],["retroporn.world",61],["retrosexfilms.com",61],["sex-free-movies.com",61],["sexanimesex.com",61],["sexanimetube.com",61],["sexjapantube.com",61],["sexmomvideos.com",61],["sexteenxxxtube.com",61],["sexxxanimal.com",61],["sexyoungtube.com",61],["sexyvintageporn.com",61],["sopornmovies.com",61],["spicyvintageporn.com",61],["sunporno.club",61],["tabooanime.club",61],["teenextrem.com",61],["teenfucksex.com",61],["teenhost.net",61],["teensex.*",61],["teensexass.com",61],["tnaflix.asia",61],["totalfuckmovies.com",61],["totalmaturefuck.com",61],["txxx.asia",61],["vintagetube.*",61],["voyeurpornsex.com",61],["warmteensex.com",61],["wetasiancreampie.com",61],["wildhentaitube.com",61],["wowyoungsex.com",61],["xhamster-art.com",61],["xmovie.pro",61],["xnudevideos.com",61],["xnxxjapon.com",61],["xpics.me",61],["xvide.me",61],["xxxanimefuck.com",61],["xxxanimevideos.com",61],["xxxanimemovies.com",61],["xxxhentaimovies.com",61],["xxxhothub.com",61],["xxxjapaneseporntube.com",61],["xxxlargeporn.com",61],["xxxmomz.com",61],["xxxmovies.*",61],["xxxpornmilf.com",61],["xxxpussyclips.com",61],["xxxpussysextube.com",61],["xxxretrofuck.com",61],["xxxsex.pro",61],["xxxsexyjapanese.com",61],["xxxteenyporn.com",61],["xxxvideo.asia",61],["xxxvideos.ink",61],["xxxyoungtv.com",61],["youjizzz.club",61],["youngpussyfuck.com",61],["bayimg.com",62],["celeb.gate.cc",63],["kinoger.re",64],["usersdrive.com",64],["desi.upn.bio",64],["zooqle.*",65],["masterplayer.xyz",66],["pussy-hub.com",66],["porndex.com",67],["compucalitv.com",68],["hdfull.*",69],["diariodenavarra.es",70],["mangamanga.*",71],["streameast.*",72],["thestreameast.*",72],["pennlive.com",73],["beautypageants.indiatimes.com",74],["01fmovies.com",75],["vev.*",76],["vidop.*",76],["lnk2.cc",77],["fullhdxxx.com",78],["luscious.net",[78,113]],["classicpornbest.com",78],["www-daftarharga.blogspot.com",[78,133]],["1youngteenporn.com",78],["miraculous.to",[78,177]],["vtube.to",78],["zone-telechargement.*",78],["xstory-fr.com",78],["gosexpod.com",79],["tubepornclassic.com",80],["shemalez.com",80],["otakukan.com",81],["xcafe.com",82],["pornfd.com",82],["venusarchives.com",82],["imagehaha.com",83],["imagenpic.com",83],["imageshimage.com",83],["imagetwist.com",83],["megalink.*",84],["k1nk.co",84],["watchasians.cc",84],["lulustream.com",84],["luluvdo.com",84],["vibestreams.*",84],["gmx.*",85],["web.de",85],["news18.com",86],["thelanb.com",87],["dropmms.com",87],["softwaredescargas.com",88],["cracking-dz.com",89],["mega1080p.*",90],["anitube.*",90],["gazzetta.it",91],["9hentai.*",92],["dziennikbaltycki.pl",93],["dzienniklodzki.pl",93],["dziennikpolski24.pl",93],["dziennikzachodni.pl",93],["echodnia.eu",93],["expressbydgoski.pl",93],["expressilustrowany.pl",93],["gazetakrakowska.pl",93],["gazetalubuska.pl",93],["gazetawroclawska.pl",93],["gk24.pl",93],["gloswielkopolski.pl",93],["gol24.pl",93],["gp24.pl",93],["gra.pl",93],["gs24.pl",93],["kurierlubelski.pl",93],["motofakty.pl",93],["naszemiasto.pl",93],["nowiny24.pl",93],["nowosci.com.pl",93],["nto.pl",93],["polskatimes.pl",93],["pomorska.pl",93],["poranny.pl",93],["sportowy24.pl",93],["strefaagro.pl",93],["strefabiznesu.pl",93],["stronakobiet.pl",93],["telemagazyn.pl",93],["to.com.pl",93],["wspolczesna.pl",93],["course9x.com",93],["courseclub.me",93],["azrom.net",93],["alttyab.net",93],["esopress.com",93],["nesiaku.my.id",93],["onemanhua.com",94],["freeindianporn.mobi",94],["dr-farfar.com",95],["boyfriendtv.com",96],["brandstofprijzen.info",97],["netfuck.net",98],["gaypornhdfree.*",98],["blog24.me",[98,106]],["kisahdunia.com",98],["cinemakottaga.*",98],["privatemoviez.*",98],["nulljungle.com",98],["oyuncusoruyor.com",98],["pbarecap.ph",98],["sourds.net",98],["teknobalta.com",98],["tvinternetowa.info",98],["sqlserveregitimleri.com",98],["tutcourse.com",98],["warddogs.com",98],["dvdgayporn.com",98],["iimanga.com",98],["tinhocdongthap.com",98],["tremamnon.com",98],["423down.com",98],["brizzynovel.com",98],["jugomobile.com",98],["freecodezilla.net",98],["apkmaven.*",98],["iconmonstr.com",98],["rbxscripts.net",98],["comentariodetexto.com",98],["wordpredia.com",98],["allfaucet.xyz",[98,106]],["titbytz.tk",98],["replica-watch.info",98],["alludemycourses.com",98],["kayifamilytv.com",98],["interfans.org",98],["iir.ai",99],["popcornstream.*",100],["qpython.club",101],["antifake-funko.fr",101],["dktechnicalmate.com",101],["recipahi.com",101],["e9china.net",102],["ontools.net",102],["marketbeat.com",103],["hentaipornpics.net",104],["labgame.io",105],["ohionowcast.info",106],["wiour.com",106],["bitzite.com",[106,111,112]],["appsbull.com",106],["diudemy.com",106],["maqal360.com",[106,114,115]],["bitcotasks.com",106],["videolyrics.in",106],["manofadan.com",106],["cempakajaya.com",106],["tagecoin.com",106],["naijafav.top",106],["ourcoincash.xyz",106],["claimcoins.site",106],["cryptosh.pro",106],["eftacrypto.com",106],["fescrypto.com",106],["earnhub.net",106],["kiddyshort.com",106],["tronxminer.com",106],["neverdims.com",106],["homeairquality.org",107],["cety.app",[108,109]],["exego.app",108],["cutlink.net",108],["cutsy.net",108],["cutyurls.com",108],["cutty.app",108],["cutnet.net",108],["jixo.online",108],["cuty.me",109],["exnion.com",109],["upfion.com",[109,125]],["upfiles.app",[109,125]],["upfiles-urls.com",[109,125]],["vikingf1le.us.to",109],["gamerxyt.com",109],["up4stream.com",109],["ups2up.fun",109],["championdrive.co",109],["adcrypto.net",110],["admediaflex.com",110],["aduzz.com",110],["bitcrypto.info",110],["cdrab.com",110],["datacheap.io",110],["hbz.us",110],["savego.org",110],["owsafe.com",110],["sportweb.info",110],["gfx-station.com",111],["buzzheavier.com",112],["flashbang.sh",112],["trashbytes.net",112],["aiimgvlog.fun",113],["6indianporn.com",113],["amateurebonypics.com",113],["amateuryoungpics.com",113],["amigosporn.top",113],["cinemabg.net",113],["coomer.su",113],["desimmshd.com",113],["everia.club",113],["frauporno.com",113],["givemeaporn.com",113],["hitomi.la",113],["jav-asia.top",113],["javf.net",113],["javfull.net",113],["javideo.net",113],["javsunday.com",113],["kemono.su",113],["kr18plus.com",113],["missavtv.com",113],["pilibook.com",113],["pornborne.com",113],["porngrey.com",113],["pornktube.*",113],["pornx.tube",113],["qqxnxx.com",113],["sexvideos.host",113],["submilf.com",113],["subtaboo.com",113],["tktube.com",113],["watchseries.*",113],["xfrenchies.com",113],["soft98.ir",[114,145]],["moderngyan.com",116],["sattakingcharts.in",116],["freshbhojpuri.com",116],["bgmi32bitapk.in",116],["bankshiksha.in",116],["earn.mpscstudyhub.com",116],["earn.quotesopia.com",116],["money.quotesopia.com",116],["best-mobilegames.com",116],["learn.moderngyan.com",116],["bharatsarkarijobalert.com",116],["quotesopia.com",116],["creditsgoal.com",116],["coingraph.us",117],["momo-net.com",117],["milfnut.*",117],["maxgaming.fi",117],["cybercityhelp.in",118],["travel.vebma.com",119],["cloud.majalahhewan.com",119],["crm.cekresi.me",119],["ai.tempatwisata.pro",119],["pinloker.com",119],["sekilastekno.com",119],["mrproblogger.com",120],["themezon.net",120],["dagensnytt.com",120],["azmath.info",121],["azsoft.*",121],["downfile.site",121],["downphanmem.com",121],["expertvn.com",121],["memangbau.com",121],["trangchu.news",121],["aztravels.net",121],["ielts-isa.edu.vn",121],["techedubyte.com",[121,226]],["jpopsingles.eu",121],["aipebel.com",121],["link.paid4link.com",[122,123]],["driveup.sbs",124],["apimate.net",124],["dynamicminister.net",124],["gofirmware.com",124],["national-park.com",124],["forgee.xyz",124],["gamehub.cam",124],["cutyion.com",125],["weshare.is",127],["file.gocmod.com",127],["camarchive.tv",128],["crownimg.com",128],["flixbaba.*",128],["freejav.guru",128],["gntai.*",128],["grantorrent.*",128],["hentai2read.com",128],["icyporno.com",128],["illink.net",128],["javtiful.com",128],["m-hentai.net",128],["mejortorrent.*",128],["mejortorrento.*",128],["mejortorrents.*",128],["mejortorrents1.*",128],["mejortorrentt.*",128],["pornblade.com",128],["pornfelix.com",128],["pornxxxxtube.net",128],["redwap.me",128],["redwap2.com",128],["redwap3.com",128],["sunporno.com",128],["tubxporn.xxx",128],["ver-comics-porno.com",128],["ver-mangas-porno.com",128],["xanimeporn.com",128],["xxxvideohd.net",128],["zetporn.com",128],["simpcity.su",129],["gameofporn.com",130],["0dramacool.net",131],["0gomovie.*",131],["0gomovies.*",131],["185.53.88.104",131],["185.53.88.204",131],["185.53.88.15",131],["123moviefree.*",131],["123movies4k.net",131],["1kmovies.*",131],["1madrasdub.*",131],["1primewire.*",131],["1rowsports.com",131],["2embed.*",131],["2madrasdub.*",131],["2umovies.*",131],["4anime.*",131],["4share-mp3.net",131],["9animetv.to",131],["720pstream.me",131],["aagmaal.com",131],["abysscdn.com",131],["adblockplustape.*",131],["ajkalerbarta.com",131],["altadefinizione01.*",131],["androidapks.biz",131],["androidsite.net",131],["animeonlinefree.org",131],["animesite.net",131],["animespank.com",131],["aniworld.to",131],["apkmody.io",131],["appsfree4u.com",131],["atomixhq.*",131],["audioz.download",131],["awafim.tv",131],["bdnewszh.com",131],["beastlyprints.com",131],["beinmatch.*",131],["bengalisite.com",131],["brmovies.*",131],["ch-play.com",131],["cima4u.*",131],["clickforhire.com",131],["clicknupload.*",131],["cloudy.pk",131],["cmovies.*",131],["computercrack.com",131],["coolcast2.com",131],["crackedsoftware.biz",131],["crackfree.org",131],["cricfree.*",131],["crichd.*",131],["cryptoblog24.info",131],["cuatrolatastv.blogspot.com",131],["cydiasources.net",131],["decmelfot.xyz",131],["dirproxy.com",131],["dood.*",131],["dopebox.to",131],["downloadapk.info",131],["downloadapps.info",131],["downloadgames.info",131],["downloadmusic.info",131],["downloadsite.org",131],["downloadwella.com",131],["ebooksite.org",131],["educationtips213.blogspot.com",131],["egyup.live",131],["elgoles.pro",131],["embed.meomeo.pw",131],["embed.scdn.to",131],["emulatorsite.com",131],["essaysharkwriting.club",131],["exploreera.net",131],["extrafreetv.com",131],["f1stream.*",131],["fakedetail.com",131],["faselhd.*",131],["fbstream.*",131],["fclecteur.com",131],["filemoon.*",131],["filepress.*",[131,207]],["files.im",131],["filmlinks4u.*",131],["filmpertutti.*",131],["filmyzilla.*",131],["flexyhit.com",131],["fmoviefree.net",131],["fmovies24.com",131],["fmovies.*",131],["freeflix.info",131],["freemoviesu4.com",131],["freeplayervideo.com",131],["freesoccer.net",131],["french-stream.*",131],["fseries.org",131],["fzlink.*",131],["gamefast.org",131],["gamesite.info",131],["gettapeads.com",131],["gmanga.me",131],["gocast123.me",131],["gofilms4u.*",131],["gogoanime.*",131],["gogohd.net",131],["gogoplay5.com",131],["gomoviz.*",131],["gooplay.net",131],["gostreamon.net",131],["happy2hub.org",131],["harimanga.com",131],["hdmoviefair.*",131],["hdmovies4u.*",131],["hdmovies50.*",131],["hdmoviesfair.*",131],["healthnewsreel.com",131],["hexupload.net",131],["hh3dhay.*",131],["hinatasoul.com",131],["hindilinks4u.*",131],["hindisite.net",131],["holymanga.net",131],["hotmasti.*",131],["hurawatch.*",131],["hxfile.co",131],["isosite.org",131],["iv-soft.com",131],["januflix.expert",131],["jewelry.com.my",131],["johnwardflighttraining.com",131],["kabarportal.com",131],["klmanga.*",131],["klubsports.*",131],["kstorymedia.com",131],["la123movies.org",131],["lespassionsdechinouk.com",131],["libertestreamvf.*",131],["lilymanga.net",131],["linksdegrupos.com.br",131],["linkz.wiki",131],["livetvon.*",131],["livestreamtv.pk",131],["macsite.info",131],["manga1000.*",131],["manga1001.*",131],["mangaraw.*",131],["mangarawjp.*",131],["mangasite.org",131],["manhuascan.com",131],["megamovies.org",131],["membed.net",131],["mlbstream.*",131],["moddroid.com",131],["motogpstream.*",131],["movi.pk",[131,154]],["moviefree2.com",131],["movierulz.*",131],["movies123.*",131],["movies-watch.com.pk",131],["movies2watch.*",131],["moviesden.*",131],["moviesite.app",131],["moviesonline.fm",131],["moviesx.org",131],["moviezaddiction.*",131],["msmoviesbd.com",131],["musicsite.biz",131],["myfernweh.com",131],["myviid.com",131],["nazarickol.com",131],["nbastream.*",131],["netcine.*",131],["nflstream.*",131],["nhlstream.*",131],["noob4cast.com",131],["nsw2u.com",[131,269]],["oko.sh",131],["onlinewatchmoviespk.*",131],["orangeink.pk",131],["pahaplayers.click",131],["patchsite.net",131],["pctfenix.*",131],["pctnew.*",131],["pdfsite.net",131],["pksmovies.*",131],["play1002.com",131],["player-cdn.com",131],["plyjam.*",131],["plylive.*",131],["pogolinks.*",131],["popcorntime.*",131],["poscitech.*",131],["productkeysite.com",131],["projectfreetv.one",131],["romsite.org",131],["rufiguta.com",131],["rugbystreams.*",131],["rytmp3.io",131],["send.cm",131],["seriesite.net",131],["seriezloaded.com.ng",131],["serijehaha.com",131],["shahed4u.*",131],["sflix.*",131],["shrugemojis.com",131],["siteapk.net",131],["siteflix.org",131],["sitegames.net",131],["sitekeys.net",131],["sitepdf.com",131],["sitesunblocked.*",131],["sitetorrent.com",131],["softwaresite.net",131],["solarmovies.*",131],["sportbar.live",131],["sportcast.*",131],["sportskart.*",131],["sports-stream.*",131],["ssyoutube.com",131],["stardima.com",131],["stream4free.live",131],["streaming-french.*",131],["streamers.*",131],["streamingcommunity.*",[131,192]],["superapk.org",131],["supermovies.org",131],["t20cup.*",131],["tainio-mania.online",131],["talaba.su",131],["tamilguns.org",131],["tatabrada.tv",131],["techtrendmakers.com",131],["tennisstreams.*",131],["thememypc.net",131],["thripy.com",131],["torrentdosfilmes.*",131],["toonanime.*",131],["travelplanspro.com",131],["turcasmania.com",131],["tusfiles.com",131],["tvonlinesports.com",131],["tvply.*",131],["ufcstream.*",131],["ultramovies.org",131],["uploadbank.com",131],["uptomega.*",131],["uqload.*",131],["urdubolo.pk",131],["vudeo.*",131],["vidoo.*",131],["vidspeeds.com",131],["vipboxtv.*",131],["viprow.*",131],["warezsite.net",131],["watchmovies2.com",131],["watchmoviesforfree.org",131],["watchofree.com",131],["watchsite.net",131],["watchsouthpark.tv",131],["watchtvch.club",131],["web.livecricket.is",131],["webseries.club",131],["worldcupstream.pm",131],["y2mate.com",131],["yesmovies.*",131],["yomovies.*",131],["yomovies1.*",131],["youapk.net",131],["youtube4kdownloader.com",131],["yt2mp3s.*",131],["yts-subs.com",131],["kat.*",131],["katbay.*",131],["kickass.*",131],["kickasshydra.*",131],["kickasskat.*",131],["kickass2.*",131],["kickasstorrents.*",131],["kat2.*",131],["kattracker.*",131],["thekat.*",131],["thekickass.*",131],["kickassz.*",131],["kickasstorrents2.*",131],["topkickass.*",131],["kickassgo.*",131],["kkickass.*",131],["kkat.*",131],["kickasst.*",131],["kick4ss.*",131],["cineb.rs",132],["moviesjoyhd.to",132],["rawkuma.com",[132,171]],["adelsfun.com",134],["advantien.com",134],["bailbondsfinder.com",134],["bg-gledai.*",134],["bigpiecreative.com",134],["childrenslibrarylady.com",134],["classifarms.com",134],["comtasq.ca",134],["crone.es",134],["ctrmarketingsolutions.com",134],["dropnudes.com",134],["ftuapps.dev",134],["gendatabase.com",134],["genzsport.com",134],["ghscanner.com",134],["gledaitv.*",134],["grsprotection.com",134],["gruporafa.com.br",134],["inmatefindcalifornia.com",134],["inmatesearchidaho.com",134],["itsonsitetv.com",134],["mfmfinancials.com",134],["myproplugins.com",134],["nurulislam.org",134],["onehack.us",134],["ovester.com",134],["paste.bin.sx",134],["privatenudes.com",134],["renoconcrete.ca",134],["richieashbeck.com",134],["sat.technology",134],["short1ink.com",134],["stpm.co.uk",134],["wegotcookies.co",134],["mathcrave.com",134],["vip-box.app",134],["androidpolice.com",135],["cbr.com",135],["gamerant.com",135],["howtogeek.com",135],["thegamer.com",135],["winfuture.de",136],["flight-report.com",137],["vulture.com",138],["megaplayer.bokracdn.run",139],["hentaistream.com",140],["siteunblocked.info",141],["larvelfaucet.com",142],["feyorra.top",142],["claimtrx.com",142],["pagalmovies.*",143],["7starhd.*",143],["jalshamoviez.*",143],["moviesyug.net",143],["9xupload.*",143],["bdupload.*",143],["rdxhd1.*",143],["parispi.net",144],["hentaicloud.com",145],["nuvid.*",145],["tio.ch",146],["lavanguardia.com",146],["news.bg",[146,221]],["tu.no",146],["paperzonevn.com",147],["dailyvideoreports.net",148],["lewd.ninja",149],["systemnews24.com",150],["niusdiario.es",151],["playporngames.com",152],["javx.*",152],["freemagazines.top",153],["freepreset.net",153],["moviessources.*",155],["cutesexyteengirls.com",156],["haho.moe",157],["nicy-spicy.pw",158],["novelmultiverse.com",159],["mylegalporno.com",160],["embedsports.me",161],["embedstream.me",161],["jumbtv.com",161],["reliabletv.me",161],["guardaserie.*",162],["cine-calidad.*",163],["xnxx.com",164],["xvideos.*",164],["thecut.com",165],["novelism.jp",166],["alphapolis.co.jp",167],["game3rb.com",168],["javhub.net",168],["thotvids.com",169],["berklee.edu",170],["imeteo.sk",172],["youtubemp3donusturucu.net",173],["videovard.*",174],["cluset.com",175],["homemoviestube.com",175],["sexseeimage.com",175],["alueviesti.fi",176],["kiuruvesilehti.fi",176],["lempaala.ideapark.fi",176],["olutposti.fi",176],["urjalansanomat.fi",176],["tainhanhvn.com",178],["titantv.com",179],["3cinfo.net",180],["cocomanga.com",181],["animelatinohd.com",181],["buondua.com",182],["chillx.top",183],["playerx.stream",183],["m.liputan6.com",185],["stardewids.com",[185,203]],["ingles.com",186],["spanishdict.com",186],["surfline.com",187],["rureka.com",188],["amateur8.com",189],["freeporn8.com",189],["maturetubehere.com",189],["embedo.co",190],["corriere.it",191],["oggi.it",191],["apkcombo.com",193],["sponsorhunter.com",194],["novelssites.com",195],["haxina.com",196],["scimagojr.com",196],["dramafren.net",196],["torrentmac.net",197],["udvl.com",198],["dlpanda.com",199],["einrichtungsbeispiele.de",200],["weadown.com",201],["molotov.tv",202],["commands.gg",203],["smgplaza.com",204],["emturbovid.com",205],["findjav.com",205],["javggvideo.xyz",205],["mmtv01.xyz",205],["stbturbo.xyz",205],["streamsilk.com",205],["freepik.com",206],["sportnews.to",208],["soccershoes.blog",208],["shineads.*",208],["diyphotography.net",209],["bitchesgirls.com",210],["explorecams.com",211],["minecraft.buzz",211],["hiraethtranslation.com",212],["programmingeeksclub.com",213],["diendancauduong.com",214],["androidadult.com",215],["parentcircle.com",216],["h-game18.xyz",217],["wheelofgold.com",218],["davescomputertips.com",219],["historyofroyalwomen.com",219],["motchill.*",220],["lifestyle.bg",221],["topsport.bg",221],["webcafe.bg",221],["freepikdownloader.com",222],["freepasses.org",223],["iusedtobeaboss.com",224],["blogtruyenmoi.com",225],["repretel.com",227],["tubereader.me",227],["graphicget.com",228],["qiwi.gg",[229,230]],["sonixgvn.net",231],["alliptvlinks.com",232],["smashyplayer.top",233],["upns.*",233],["xvideos.com",234],["xvideos2.com",234],["katfile.com",235],["readcomiconline.*",236],["nekopoi.*",237],["ukchat.co.uk",238],["hivelr.com",239],["skidrowcodex.net",240],["takimag.com",241],["digi.no",242],["th.gl",243],["twi-fans.com",244],["learn-cpp.org",245],["terashare.co",246],["pornwex.tv",247],["smithsonianmag.com",248],["homesports.net",249],["realmoasis.com",250],["javfc2.xyz",251],["gobankingrates.com",252],["hiddenleaf.to",253],["ronorp.net",254],["gdflix.*",255],["a1movies.*",256],["videovak.com",257],["a-lohas.jp",258],["akirabox.com",259],["purplex.app",260],["maggotdrowning.com",261],["bilinovel.com",262],["esportstales.com",263],["streamup.ws",264],["pagalfree.com",265],["pagalworld.us",265],["pornharlot.net",266],["idnes.cz",[267,268]]]);
const exceptionsMap = new Map([["forum.soft98.ir",[114,145]]]);
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
