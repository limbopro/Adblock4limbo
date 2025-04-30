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
const argsList = [["/keydown|scroll|touchmove|touchstart|wheel/","function(_0x"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["/^(?:click|mousedown)$/","_0x"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["click","popMagic"],["","shouldShow"],["","exopop"],["","break;case $."],["","focus"],["load","abDetectorPro"],["error","blocker"],["load","error-report.com"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["mouseup","catch"],["click","clickCount"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","","elements","a#dlink"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["DOMContentLoaded","Promise"],["DOMContentLoaded","anchor.href"],["click","pingUrl"],["mousedown","scoreUrl"],["","Adb"]];
const hostnamesMap = new Map([["pvpoke-re.com",0],["cbc.ca",1],["newser.com",2],["sport1.de",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["kingofdown.com",7],["radiotormentamx.com",7],["limetorrents.*",[7,11]],["king-pes.*",7],["quelleestladifference.fr",7],["depedlps.*",7],["otakuworldsite.blogspot.com",7],["ad-itech.blogspot.com",7],["komikcast.*",7],["unlockapk.com",7],["mobdi3ips.com",7],["socks24.org",7],["idedroidsafelink.*",7],["links-url.*",7],["interviewgig.com",7],["javaguides.net",7],["almohtarif-tech.net",7],["forum.release-apk.com",7],["devoloperxda.blogspot.com",7],["zwergenstadt.com",7],["primedeportes.es",7],["upxin.net",7],["ciudadblogger.com",7],["ke-1.com",7],["secretsdeepweb.blogspot.com",7],["bit-shares.com",7],["itdmusics.com",7],["aspdotnet-suresh.com",7],["tudo-para-android.com",7],["urdulibrarypk.blogspot.com",7],["zerotopay.com",7],["ak4eg.*",7],["akw.to",7],["mawsueaa.com",7],["hesgoal-live.io",7],["king-shoot.io",7],["9goals.live",7],["streanplay.*",8],["steanplay.*",8],["bibme.org",9],["citationmachine.net",9],["easybib.com",10],["pahe.*",11],["yts.*",11],["tube8.*",11],["topeuropix.*",11],["vermangasporno.com",11],["moviescounter.*",11],["imgtorrnt.in",11],["picbaron.com",[11,112]],["torrent9.*",11],["desiremovies.*",11],["letmejerk.com",11],["letmejerk2.com",11],["letmejerk3.com",11],["letmejerk4.com",11],["letmejerk5.com",11],["letmejerk6.com",11],["letmejerk7.com",11],["movs4u.*",11],["uwatchfree.*",11],["hydrax.*",11],["4movierulz.*",11],["projectfreetv.*",11],["arabseed.*",11],["btdb.*",[11,50]],["dlapk4all.com",11],["kropic.com",11],["kvador.com",11],["pdfindir.net",11],["brstej.com",11],["topwwnews.com",11],["xsanime.com",11],["vidlo.us",11],["youx.xxx",11],["world4ufree.*",11],["animeindo.asia",11],["streamsport.*",11],["rojadirectatvhd.*",11],["userload.*",11],["adclickersbot.com",11],["badtaste.it",12],["adyou.*",13],["gotporn.com",14],["freepornrocks.com",14],["tvhai.org",14],["realgfporn.com",[15,16]],["fxporn69.*",15],["thisvid.com",16],["xvideos-downloader.net",16],["imgspice.com",17],["vikiporn.com",18],["tnaflix.com",18],["pornomico.com",18],["hentai2w.com",[18,127]],["yourlust.com",18],["hd-easyporn.com",18],["hotpornfile.org",18],["watchfreexxx.net",18],["vintageporntubes.com",18],["angelgals.com",18],["babesexy.com",18],["hentaihere.com",18],["ganstamovies.com",18],["youngleak.com",18],["jizzberry.com",18],["porndollz.com",18],["xnxxvideo.pro",18],["xvideosxporn.com",18],["filmpornofrancais.fr",18],["pictoa.com",[18,42]],["pornohirsch.net",18],["herzporno.*",18],["deinesexfilme.com",18],["einfachtitten.com",18],["halloporno.*",18],["lesbenhd.com",18],["milffabrik.com",18],["porn-monkey.com",18],["porndrake.com",18],["pornhubdeutsch.net",18],["pornoaffe.com",18],["pornodavid.com",18],["pornoente.tv",18],["pornofisch.com",18],["pornofelix.com",18],["pornohammer.com",18],["pornohelm.com",18],["pornoklinge.com",18],["pornotom.com",18],["pornotommy.com",18],["pornovideos-hd.com",18],["pornozebra.com",18],["xhamsterdeutsch.xyz",18],["xnxx-sexfilme.com",18],["youlikeboys.com",18],["adultasianporn.com",18],["nsfwmonster.com",18],["girlsofdesire.org",18],["gaytail.com",18],["fetish-bb.com",18],["rumporn.com",18],["soyoungteens.com",18],["zubby.com",18],["lesbian8.com",18],["gayforfans.com",18],["reifporn.de",18],["javtsunami.com",18],["18tube.sex",18],["xxxextreme.org",18],["amateurs-fuck.com",18],["sex-amateur-clips.com",18],["hentaiworld.tv",18],["dads-banging-teens.com",18],["home-xxx-videos.com",18],["mature-chicks.com",18],["hqbang.com",18],["darknessporn.com",18],["familyporner.com",18],["freepublicporn.com",18],["pisshamster.com",18],["punishworld.com",18],["xanimu.com",18],["tubator.com",18],["pornhd.com",19],["cnnamador.com",[19,30]],["cle0desktop.blogspot.com",19],["turkanime.co",19],["rexporn.*",19],["movies07.*",19],["camclips.tv",[19,43]],["blackpornhq.com",19],["xsexpics.com",19],["ulsex.net",19],["wannafreeporn.com",19],["ytube2dl.com",19],["pornocomics.*",19],["multiup.us",19],["protege-torrent.com",19],["pussyspace.com",[20,21]],["pussyspace.net",[20,21]],["empflix.com",22],["cpmlink.net",23],["bdsmstreak.com",23],["cutpaid.com",23],["pornforrelax.com",23],["fatwhitebutt.com",23],["pornomoll.*",23],["short.pe",24],["gsurl.*",24],["pinsystem.co.uk",25],["ancensored.com",25],["ganool.*",25],["mp3fiber.com",[25,26]],["xrivonet.info",25],["pirate.*",25],["piratebay.*",25],["pirateproxy.*",25],["proxytpb.*",25],["thepiratebay.*",25],["totaldebrid.org",26],["freecoursesonline.*",26],["lordpremium.*",26],["schrauben-normen.de",26],["avengerinator.blogspot.com",26],["novablogitalia.*",26],["link-to.net",26],["hanimesubth.com",26],["gsmturkey.net",26],["anisubindo.*",26],["adshrink.it",26],["presentation-ppt.com",26],["mangacanblog.com",26],["pekalongan-cits.blogspot.com",26],["4tymode.win",26],["linkvertise.com",26],["reifenrechner.at",26],["tire-size-calculator.info",26],["linuxsecurity.com",26],["itsguider.com",26],["cotravinh.blogspot.com",26],["itudong.com",26],["shortx.net",26],["btvsports.*",26],["lecturel.com",26],["bakai.org",26],["nar.k-ba.net",26],["eurotruck2.com.br",26],["tiroalpaloes.com",26],["stream4free.*",26],["tiroalpaloes.net",26],["flixsix.com",26],["tiroalpaloweb.xyz",26],["mimaletadepeliculas.*",27],["bs.to",28],["burningseries.*",28],["efukt.com",28],["dz4soft.*",29],["generacionretro.net",29],["nuevos-mu.ucoz.com",29],["micloudfiles.com",29],["yoututosjeff.*",29],["ebookmed.*",29],["lanjutkeun.*",29],["mimaletamusical.blogspot.com",29],["novelasesp.*",29],["visionias.net",29],["singingdalong.*",29],["b3infoarena.in",29],["lurdchinexgist.blogspot.com",29],["thefreedommatrix.blogspot.com",29],["hentai-vl.blogspot.com",29],["projetomotog.blogspot.com",29],["ktmx.pro",29],["lirik3satu.blogspot.com",29],["marketmovers.it",29],["pharmaguideline.com",29],["mixloads.com",29],["mangaromance.eu",29],["interssh.com",29],["freesoftpdfdownload.blogspot.com",29],["myadslink.com",29],["blackavelic.com",29],["doujindesu.*",29],["server.satunivers.tv",29],["eg-akw.com",29],["xn--mgba7fjn.cc",29],["flashingjungle.com",30],["ma-x.org",31],["lavozdegalicia.es",31],["ddwloclawek.pl",31],["ki24.info",31],["xmovies8.*",32],["xmovies08.org",33],["globaldjmix.com",34],["desiupload.*",[35,141]],["hblinks.pro",35],["hubcdn.vip",35],["hubdrive.*",35],["90fpsconfig.in",35],["katdrive.link",35],["kmhd.net",35],["bollydrive.rest",35],["360news4u.net",35],["hypershort.com",[35,125]],["bollydrive.*",[35,143]],["zazzybabes.com",36],["haaretz.co.il",37],["haaretz.com",37],["slate.com",38],["megalinks.info",39],["megapastes.com",39],["mega-mkv.com",[39,40]],["mkv-pastes.com",39],["zpaste.net",39],["zlpaste.net",39],["9xlinks.site",39],["mega-dvdrip.*",40],["peliculas-dvdrip.*",40],["desbloqueador.*",41],["cine.to",[42,184]],["newpelis.*",[42,48]],["pelix.*",[42,48]],["allcalidad.*",[42,127]],["khatrimaza.*",42],["kissasia.cc",42],["camwhores.*",43],["camwhorestv.*",43],["digjav.com",43],["uproxy.*",43],["videoszoofiliahd.com",44],["xxxtubezoo.com",45],["zooredtube.com",45],["uii.io",46],["porndoe.com",47],["acienciasgalilei.com",49],["playrust.io",50],["payskip.org",51],["short-url.link",52],["tubedupe.com",53],["mirrorace.*",54],["fatgirlskinny.net",55],["polska-ie.com",55],["windowsmatters.com",55],["canaltdt.es",56],["masbrooo.com",56],["2ndrun.tv",56],["oncehelp.com",57],["curto.win",57],["smallseotools.com",58],["mixdrp.*",59],["macwelt.de",60],["pcwelt.de",60],["capital.de",60],["geo.de",60],["allmomsex.com",61],["allnewindianporn.com",61],["analxxxvideo.com",61],["animalextremesex.com",61],["anime3d.xyz",61],["animefuckmovies.com",61],["animepornfilm.com",61],["animesexbar.com",61],["animesexclip.com",61],["animexxxsex.com",61],["animexxxfilms.com",61],["anysex.club",61],["apetube.asia",61],["asianfuckmovies.com",61],["asianfucktube.com",61],["asianporn.sexy",61],["asiansex.*",61],["asiansexcilps.com",61],["beeg.fund",61],["beegvideoz.com",61],["bestasiansex.pro",61],["bravotube.asia",61],["brutalanimalsfuck.com",61],["candyteenporn.com",61],["daddyfuckmovies.com",61],["desifuckonline.com",61],["exclusiveasianporn.com",61],["exteenporn.com",61],["fantasticporn.net",61],["fantasticyoungporn.com",61],["fineasiansex.com",61],["firstasianpussy.com",61],["freeindiansextube.com",61],["freepornasians.com",61],["freerealvideo.com",61],["fuck-beeg.com",61],["fuck-xnxx.com",61],["fuckasian.pro",61],["fuckfuq.com",61],["fuckundies.com",61],["gojapaneseporn.com",61],["golderotica.com",61],["goodyoungsex.com",61],["goyoungporn.com",61],["hardxxxmoms.com",61],["hdvintagetube.com",61],["hentaiporn.me",61],["hentaisexfilms.com",61],["hentaisexuality.com",61],["hot-teens-movies.mobi",61],["hotanimepornvideos.com",61],["hotanimevideos.com",61],["hotasianpussysex.com",61],["hotjapaneseshows.com",61],["hotmaturetube.com",61],["hotmilfs.pro",61],["hotorientalporn.com",61],["hotpornyoung.com",61],["hotxxxjapanese.com",61],["hotxxxpussy.com",61],["indiafree.net",61],["indianpornvideo.online",61],["japanfuck.*",61],["japanporn.*",61],["japanpornclip.com",61],["japanesetube.video",61],["japansex.me",61],["japanesexxxporn.com",61],["japansporno.com",61],["japanxxx.asia",61],["japanxxxworld.com",61],["keezmovies.surf",61],["lingeriefuckvideo.com",61],["liveanimalporn.zooo.club",61],["madhentaitube.com",61],["megahentaitube.com",61],["megajapanesesex.com",61],["megajapantube.com",61],["milfxxxpussy.com",61],["momsextube.pro",61],["momxxxass.com",61],["monkeyanimalporn.com",61],["moviexxx.mobi",61],["newanimeporn.com",61],["newjapanesexxx.com",61],["nicematureporn.com",61],["nudeplayboygirls.com",61],["openxxxporn.com",61],["originalindianporn.com",61],["originalteentube.com",61],["pig-fuck.com",61],["plainasianporn.com",61],["popularasianxxx.com",61],["pornanimetube.com",61],["pornasians.pro",61],["pornhat.asia",61],["pornjapanesesex.com",61],["pornomovies.asia",61],["pornvintage.tv",61],["primeanimesex.com",61],["realjapansex.com",61],["realmomsex.com",61],["redsexhub.com",61],["retroporn.world",61],["retrosexfilms.com",61],["sex-free-movies.com",61],["sexanimesex.com",61],["sexanimetube.com",61],["sexjapantube.com",61],["sexmomvideos.com",61],["sexteenxxxtube.com",61],["sexxxanimal.com",61],["sexyoungtube.com",61],["sexyvintageporn.com",61],["sopornmovies.com",61],["spicyvintageporn.com",61],["sunporno.club",61],["tabooanime.club",61],["teenextrem.com",61],["teenfucksex.com",61],["teenhost.net",61],["teensex.*",61],["teensexass.com",61],["tnaflix.asia",61],["totalfuckmovies.com",61],["totalmaturefuck.com",61],["txxx.asia",61],["vintagetube.*",61],["voyeurpornsex.com",61],["warmteensex.com",61],["wetasiancreampie.com",61],["wildhentaitube.com",61],["wowyoungsex.com",61],["xhamster-art.com",61],["xmovie.pro",61],["xnudevideos.com",61],["xnxxjapon.com",61],["xpics.me",61],["xvide.me",61],["xxxanimefuck.com",61],["xxxanimevideos.com",61],["xxxanimemovies.com",61],["xxxhentaimovies.com",61],["xxxhothub.com",61],["xxxjapaneseporntube.com",61],["xxxlargeporn.com",61],["xxxmomz.com",61],["xxxmovies.*",61],["xxxpornmilf.com",61],["xxxpussyclips.com",61],["xxxpussysextube.com",61],["xxxretrofuck.com",61],["xxxsex.pro",61],["xxxsexyjapanese.com",61],["xxxteenyporn.com",61],["xxxvideo.asia",61],["xxxvideos.ink",61],["xxxyoungtv.com",61],["youjizzz.club",61],["youngpussyfuck.com",61],["bayimg.com",62],["celeb.gate.cc",63],["kinoger.re",64],["usersdrive.com",64],["desi.upn.bio",64],["zooqle.*",65],["masterplayer.xyz",66],["pussy-hub.com",66],["porndex.com",67],["compucalitv.com",68],["hdfull.*",69],["diariodenavarra.es",70],["mangamanga.*",71],["streameast.*",72],["thestreameast.*",72],["pennlive.com",73],["beautypageants.indiatimes.com",74],["01fmovies.com",75],["vev.*",76],["vidop.*",76],["lnk2.cc",77],["fullhdxxx.com",78],["luscious.net",[78,112]],["classicpornbest.com",78],["www-daftarharga.blogspot.com",[78,131]],["1youngteenporn.com",78],["miraculous.to",[78,176]],["vtube.to",78],["zone-telechargement.*",78],["xstory-fr.com",78],["1337x.*",78],["x1337x.*",78],["gosexpod.com",79],["tubepornclassic.com",80],["shemalez.com",80],["otakukan.com",81],["xcafe.com",82],["pornfd.com",82],["venusarchives.com",82],["imagehaha.com",83],["imagenpic.com",83],["imageshimage.com",83],["imagetwist.com",83],["megalink.*",84],["k1nk.co",84],["watchasians.cc",84],["lulustream.com",84],["luluvdo.com",84],["gmx.*",85],["web.de",85],["news18.com",86],["thelanb.com",87],["dropmms.com",87],["softwaredescargas.com",88],["cracking-dz.com",89],["mega1080p.*",90],["anitube.*",90],["gazzetta.it",91],["9hentai.*",92],["dziennikbaltycki.pl",93],["dzienniklodzki.pl",93],["dziennikpolski24.pl",93],["dziennikzachodni.pl",93],["echodnia.eu",93],["expressbydgoski.pl",93],["expressilustrowany.pl",93],["gazetakrakowska.pl",93],["gazetalubuska.pl",93],["gazetawroclawska.pl",93],["gk24.pl",93],["gloswielkopolski.pl",93],["gol24.pl",93],["gp24.pl",93],["gra.pl",93],["gs24.pl",93],["kurierlubelski.pl",93],["motofakty.pl",93],["naszemiasto.pl",93],["nowiny24.pl",93],["nowosci.com.pl",93],["nto.pl",93],["polskatimes.pl",93],["pomorska.pl",93],["poranny.pl",93],["sportowy24.pl",93],["strefaagro.pl",93],["strefabiznesu.pl",93],["stronakobiet.pl",93],["telemagazyn.pl",93],["to.com.pl",93],["wspolczesna.pl",93],["course9x.com",93],["courseclub.me",93],["azrom.net",93],["alttyab.net",93],["esopress.com",93],["nesiaku.my.id",93],["onemanhua.com",94],["freeindianporn.mobi",94],["dr-farfar.com",95],["boyfriendtv.com",96],["brandstofprijzen.info",97],["netfuck.net",98],["gaypornhdfree.*",98],["blog24.me",[98,105]],["kisahdunia.com",98],["cinemakottaga.*",98],["privatemoviez.*",98],["nulljungle.com",98],["oyuncusoruyor.com",98],["pbarecap.ph",98],["sourds.net",98],["teknobalta.com",98],["tvinternetowa.info",98],["sqlserveregitimleri.com",98],["tutcourse.com",98],["readytechflip.com",98],["warddogs.com",98],["dvdgayporn.com",98],["iimanga.com",98],["tinhocdongthap.com",98],["tremamnon.com",98],["423down.com",98],["brizzynovel.com",98],["jugomobile.com",98],["freecodezilla.net",98],["apkmaven.*",98],["iconmonstr.com",98],["gay-tubes.cc",98],["rbxscripts.net",98],["comentariodetexto.com",98],["wordpredia.com",98],["allfaucet.xyz",[98,105]],["titbytz.tk",98],["replica-watch.info",98],["alludemycourses.com",98],["kayifamilytv.com",98],["interfans.org",98],["iir.ai",99],["popcornstream.*",100],["qpython.club",101],["antifake-funko.fr",101],["dktechnicalmate.com",101],["recipahi.com",101],["e9china.net",102],["ontools.net",102],["marketbeat.com",103],["hentaipornpics.net",104],["ohionowcast.info",105],["wiour.com",105],["bitzite.com",[105,110,111]],["appsbull.com",105],["diudemy.com",105],["maqal360.com",[105,113,114]],["bitcotasks.com",105],["videolyrics.in",105],["manofadan.com",105],["cempakajaya.com",105],["tagecoin.com",105],["naijafav.top",105],["ourcoincash.xyz",105],["claimcoins.site",105],["cryptosh.pro",105],["eftacrypto.com",105],["fescrypto.com",105],["earnhub.net",105],["kiddyshort.com",105],["tronxminer.com",105],["neverdims.com",105],["homeairquality.org",106],["cety.app",[107,108]],["exego.app",107],["cutlink.net",107],["cutsy.net",107],["cutyurls.com",107],["cutty.app",107],["cutnet.net",107],["jixo.online",107],["cuty.me",108],["exnion.com",108],["upfion.com",[108,124]],["upfiles.app",[108,124]],["upfiles-urls.com",[108,124]],["vikingf1le.us.to",108],["gamerxyt.com",108],["up4stream.com",108],["ups2up.fun",108],["adcrypto.net",109],["admediaflex.com",109],["aduzz.com",109],["bitcrypto.info",109],["cdrab.com",109],["datacheap.io",109],["hbz.us",109],["savego.org",109],["owsafe.com",109],["sportweb.info",109],["gfx-station.com",110],["buzzheavier.com",111],["flashbang.sh",111],["trashbytes.net",111],["aiimgvlog.fun",112],["6indianporn.com",112],["amateurebonypics.com",112],["amateuryoungpics.com",112],["amigosporn.top",112],["cinemabg.net",112],["coomer.su",112],["desimmshd.com",112],["everia.club",112],["frauporno.com",112],["givemeaporn.com",112],["hitomi.la",112],["jav-asia.top",112],["javf.net",112],["javfull.net",112],["javideo.net",112],["javsunday.com",112],["kemono.su",112],["kr18plus.com",112],["missavtv.com",112],["pilibook.com",112],["pornborne.com",112],["porngrey.com",112],["pornktube.*",112],["pornx.tube",112],["qqxnxx.com",112],["sexvideos.host",112],["submilf.com",112],["subtaboo.com",112],["tktube.com",112],["watchseries.*",112],["xfrenchies.com",112],["soft98.ir",[113,143]],["moderngyan.com",115],["sattakingcharts.in",115],["freshbhojpuri.com",115],["bgmi32bitapk.in",115],["bankshiksha.in",115],["earn.mpscstudyhub.com",115],["earn.quotesopia.com",115],["money.quotesopia.com",115],["best-mobilegames.com",115],["learn.moderngyan.com",115],["bharatsarkarijobalert.com",115],["quotesopia.com",115],["creditsgoal.com",115],["coingraph.us",116],["momo-net.com",116],["milfnut.*",116],["maxgaming.fi",116],["cybercityhelp.in",117],["travel.vebma.com",118],["cloud.majalahhewan.com",118],["crm.cekresi.me",118],["ai.tempatwisata.pro",118],["pinloker.com",118],["sekilastekno.com",118],["mrproblogger.com",119],["themezon.net",119],["dagensnytt.com",119],["azmath.info",120],["azsoft.*",120],["downfile.site",120],["downphanmem.com",120],["expertvn.com",120],["memangbau.com",120],["trangchu.news",120],["aztravels.net",120],["ielts-isa.edu.vn",120],["techedubyte.com",[120,227]],["jpopsingles.eu",120],["aipebel.com",120],["link.paid4link.com",[121,122]],["driveup.sbs",123],["apimate.net",123],["dynamicminister.net",123],["gofirmware.com",123],["national-park.com",123],["forgee.xyz",123],["gamehub.cam",123],["cutyion.com",124],["weshare.is",126],["file.gocmod.com",126],["camarchive.tv",127],["crownimg.com",127],["freejav.guru",127],["gntai.*",127],["grantorrent.*",127],["hentai2read.com",127],["icyporno.com",127],["illink.net",127],["javtiful.com",127],["m-hentai.net",127],["mejortorrent.*",127],["mejortorrento.*",127],["mejortorrents.*",127],["mejortorrents1.*",127],["mejortorrentt.*",127],["pornblade.com",127],["pornfelix.com",127],["pornxxxxtube.net",127],["redwap.me",127],["redwap2.com",127],["redwap3.com",127],["sunporno.com",127],["tubxporn.xxx",127],["ver-comics-porno.com",127],["ver-mangas-porno.com",127],["xanimeporn.com",127],["xxxvideohd.net",127],["zetporn.com",127],["simpcity.su",128],["gameofporn.com",129],["0dramacool.net",130],["0gomovie.*",130],["0gomovies.*",130],["185.53.88.104",130],["185.53.88.204",130],["185.53.88.15",130],["123moviefree.*",130],["123movies4k.net",130],["1kmovies.*",130],["1madrasdub.*",130],["1primewire.*",130],["1rowsports.com",130],["2embed.*",130],["2madrasdub.*",130],["2umovies.*",130],["4anime.*",130],["4share-mp3.net",130],["9animetv.to",130],["720pstream.me",130],["aagmaal.com",130],["abysscdn.com",130],["adblockplustape.*",130],["ajkalerbarta.com",130],["altadefinizione01.*",130],["androidapks.biz",130],["androidsite.net",130],["animeonlinefree.org",130],["animesite.net",130],["animespank.com",130],["aniworld.to",130],["apkmody.io",130],["appsfree4u.com",130],["atomixhq.*",130],["audioz.download",130],["awafim.tv",130],["bdnewszh.com",130],["beastlyprints.com",130],["beinmatch.*",130],["bengalisite.com",130],["bestfullmoviesinhd.org",130],["betteranime.net",130],["blacktiesports.live",130],["brmovies.*",130],["buffsports.stream",130],["ch-play.com",130],["cima4u.*",130],["clickforhire.com",130],["clicknupload.*",130],["cloudy.pk",130],["cmovies.*",130],["computercrack.com",130],["coolcast2.com",130],["crackedsoftware.biz",130],["crackfree.org",130],["cracksite.info",130],["cricfree.*",130],["crichd.*",130],["cryptoblog24.info",130],["cuatrolatastv.blogspot.com",130],["cydiasources.net",130],["decmelfot.xyz",130],["dirproxy.com",130],["dood.*",130],["dopebox.to",130],["downloadapk.info",130],["downloadapps.info",130],["downloadgames.info",130],["downloadmusic.info",130],["downloadsite.org",130],["downloadwella.com",130],["ebooksite.org",130],["educationtips213.blogspot.com",130],["egyup.live",130],["elgoles.pro",130],["embed.meomeo.pw",130],["embed.scdn.to",130],["emulatorsite.com",130],["essaysharkwriting.club",130],["exploreera.net",130],["extrafreetv.com",130],["f1stream.*",130],["fakedetail.com",130],["faselhd.*",130],["fbstream.*",130],["fclecteur.com",130],["filemoon.*",130],["filepress.*",[130,210]],["files.im",130],["filmlinks4u.*",130],["filmpertutti.*",130],["filmyzilla.*",130],["flexyhit.com",130],["fmoviefree.net",130],["fmovies24.com",130],["fmovies.*",130],["freeflix.info",130],["freemoviesu4.com",130],["freeplayervideo.com",130],["freesoccer.net",130],["french-stream.*",130],["fseries.org",130],["fzlink.*",130],["gamefast.org",130],["gamesite.info",130],["gettapeads.com",130],["gmanga.me",130],["gocast123.me",130],["gofilms4u.*",130],["gogoanime.*",130],["gogohd.net",130],["gogoplay5.com",130],["gomoviz.*",130],["gooplay.net",130],["gostreamon.net",130],["happy2hub.org",130],["harimanga.com",130],["hdmoviefair.*",130],["hdmovies4u.*",130],["hdmovies50.*",130],["hdmoviesfair.*",130],["healthnewsreel.com",130],["hexupload.net",130],["hh3dhay.*",130],["hinatasoul.com",130],["hindilinks4u.*",130],["hindisite.net",130],["holymanga.net",130],["hotmasti.*",130],["hurawatch.*",130],["hxfile.co",130],["isosite.org",130],["iv-soft.com",130],["januflix.expert",130],["jewelry.com.my",130],["johnwardflighttraining.com",130],["kabarportal.com",130],["klmanga.*",130],["klubsports.*",130],["kstorymedia.com",130],["la123movies.org",130],["lespassionsdechinouk.com",130],["libertestreamvf.*",130],["lilymanga.net",130],["linksdegrupos.com.br",130],["linkz.wiki",130],["livetvon.*",130],["livestreamtv.pk",130],["macsite.info",130],["manga1000.*",130],["manga1001.*",130],["mangaraw.*",130],["mangarawjp.*",130],["mangasite.org",130],["manhuascan.com",130],["megamovies.org",130],["membed.net",130],["mlbstream.*",130],["moddroid.com",130],["motogpstream.*",130],["movi.pk",[130,152]],["moviefree2.com",130],["movierulz.*",130],["movies123.*",130],["movies-watch.com.pk",130],["movies2watch.*",130],["moviesden.*",130],["moviesite.app",130],["moviesonline.fm",130],["moviesx.org",130],["moviezaddiction.*",130],["msmoviesbd.com",130],["musicsite.biz",130],["myfernweh.com",130],["myviid.com",130],["nazarickol.com",130],["nbastream.*",130],["netcine.*",130],["nflstream.*",130],["nhlstream.*",130],["noob4cast.com",130],["nsw2u.com",[130,269]],["oko.sh",130],["onlinewatchmoviespk.*",130],["orangeink.pk",130],["pahaplayers.click",130],["patchsite.net",130],["pctfenix.*",130],["pctnew.*",130],["pdfsite.net",130],["pksmovies.*",130],["play1002.com",130],["player-cdn.com",130],["plyjam.*",130],["plylive.*",130],["pogolinks.*",130],["popcorntime.*",130],["poscitech.*",130],["productkeysite.com",130],["projectfreetv.one",130],["romsite.org",130],["rufiguta.com",130],["rugbystreams.*",130],["rytmp3.io",130],["send.cm",130],["seriesite.net",130],["seriezloaded.com.ng",130],["serijehaha.com",130],["shahed4u.*",130],["sflix.*",130],["shrugemojis.com",130],["siteapk.net",130],["siteflix.org",130],["sitegames.net",130],["sitekeys.net",130],["sitepdf.com",130],["sitesunblocked.*",130],["sitetorrent.com",130],["softwaresite.net",130],["solarmovies.*",130],["sportbar.live",130],["sportcast.*",130],["sportskart.*",130],["sports-stream.*",130],["ssyoutube.com",130],["stardima.com",130],["stream4free.live",130],["streaming-french.*",130],["streamers.*",130],["streamingcommunity.*",[130,194]],["superapk.org",130],["supermovies.org",130],["t20cup.*",130],["tainio-mania.online",130],["talaba.su",130],["tamilguns.org",130],["tatabrada.tv",130],["techtrendmakers.com",130],["tennisstreams.*",130],["thememypc.net",130],["thripy.com",130],["torrentdosfilmes.*",130],["toonanime.*",130],["travelplanspro.com",130],["turcasmania.com",130],["tusfiles.com",130],["tvonlinesports.com",130],["tvply.*",130],["ufcstream.*",130],["ultramovies.org",130],["uploadbank.com",130],["uptomega.*",130],["uqload.*",130],["urdubolo.pk",130],["vudeo.*",130],["vidoo.*",130],["vidspeeds.com",130],["vipboxtv.*",130],["viprow.*",130],["warezsite.net",130],["watchmovies2.com",130],["watchmoviesforfree.org",130],["watchofree.com",130],["watchsite.net",130],["watchsouthpark.tv",130],["watchtvch.club",130],["web.livecricket.is",130],["webseries.club",130],["worldcupstream.pm",130],["y2mate.com",130],["yesmovies.*",130],["yomovies.*",130],["yomovies1.*",130],["youapk.net",130],["youtube4kdownloader.com",130],["yt2mp3s.*",130],["yts-subs.com",130],["kat.*",130],["katbay.*",130],["kickass.*",130],["kickasshydra.*",130],["kickasskat.*",130],["kickass2.*",130],["kickasstorrents.*",130],["kat2.*",130],["kattracker.*",130],["thekat.*",130],["thekickass.*",130],["kickassz.*",130],["kickasstorrents2.*",130],["topkickass.*",130],["kickassgo.*",130],["kkickass.*",130],["kkat.*",130],["kickasst.*",130],["kick4ss.*",130],["adelsfun.com",132],["advantien.com",132],["bailbondsfinder.com",132],["bg-gledai.*",132],["bigpiecreative.com",132],["childrenslibrarylady.com",132],["classifarms.com",132],["comtasq.ca",132],["crone.es",132],["ctrmarketingsolutions.com",132],["dropnudes.com",132],["ftuapps.dev",132],["genzsport.com",132],["ghscanner.com",132],["gledaitv.*",132],["grsprotection.com",132],["gruporafa.com.br",132],["inmatefindcalifornia.com",132],["inmatesearchidaho.com",132],["itsonsitetv.com",132],["mfmfinancials.com",132],["myproplugins.com",132],["nurulislam.org",132],["onehack.us",132],["ovester.com",132],["paste.bin.sx",132],["privatenudes.com",132],["renoconcrete.ca",132],["richieashbeck.com",132],["sat.technology",132],["short1ink.com",132],["stpm.co.uk",132],["wegotcookies.co",132],["mathcrave.com",132],["androidpolice.com",133],["cbr.com",133],["gamerant.com",133],["howtogeek.com",133],["thegamer.com",133],["winfuture.de",134],["flight-report.com",135],["vulture.com",136],["megaplayer.bokracdn.run",137],["hentaistream.com",138],["siteunblocked.info",139],["larvelfaucet.com",140],["feyorra.top",140],["claimtrx.com",140],["pagalmovies.*",141],["7starhd.*",141],["jalshamoviez.*",141],["moviesyug.net",141],["9xupload.*",141],["bdupload.*",141],["rdxhd1.*",141],["parispi.net",142],["hentaicloud.com",143],["nuvid.*",143],["tio.ch",144],["lavanguardia.com",144],["tu.no",144],["paperzonevn.com",145],["dailyvideoreports.net",146],["lewd.ninja",147],["systemnews24.com",148],["incestvidz.com",149],["niusdiario.es",150],["playporngames.com",151],["javx.*",151],["moviessources.*",153],["cutesexyteengirls.com",154],["haho.moe",155],["nicy-spicy.pw",156],["novelmultiverse.com",157],["mylegalporno.com",158],["embedsports.me",159],["embedstream.me",159],["jumbtv.com",159],["reliabletv.me",159],["guardaserie.*",160],["cine-calidad.*",161],["xnxx.com",162],["xvideos.*",162],["thecut.com",163],["novelism.jp",164],["alphapolis.co.jp",165],["game3rb.com",166],["javhub.net",166],["thotvids.com",167],["berklee.edu",168],["rawkuma.com",[169,170]],["moviesjoyhd.to",170],["cineb.rs",170],["imeteo.sk",171],["youtubemp3donusturucu.net",172],["videovard.*",173],["cluset.com",174],["homemoviestube.com",174],["sexseeimage.com",174],["alueviesti.fi",175],["kiuruvesilehti.fi",175],["lempaala.ideapark.fi",175],["olutposti.fi",175],["urjalansanomat.fi",175],["tainhanhvn.com",177],["titantv.com",178],["3cinfo.net",179],["cocomanga.com",180],["animelatinohd.com",180],["sampledrive.in",181],["sportnews.to",181],["soccershoes.blog",181],["shineads.*",181],["mcleaks.net",182],["explorecams.com",182],["minecraft.buzz",182],["chillx.top",183],["playerx.stream",183],["m.liputan6.com",185],["stardewids.com",[185,206]],["ingles.com",186],["spanishdict.com",186],["surfline.com",187],["rureka.com",188],["freepreset.net",189],["amateur8.com",190],["freeporn8.com",190],["maturetubehere.com",190],["embedo.co",191],["corriere.it",192],["oggi.it",192],["2the.space",193],["apkcombo.com",195],["sponsorhunter.com",196],["novelssites.com",197],["haxina.com",198],["scimagojr.com",198],["dramafren.net",198],["torrentmac.net",199],["udvl.com",200],["dlpanda.com",201],["socialmediagirls.com",202],["einrichtungsbeispiele.de",203],["weadown.com",204],["molotov.tv",205],["commands.gg",206],["smgplaza.com",207],["emturbovid.com",208],["findjav.com",208],["javggvideo.xyz",208],["mmtv01.xyz",208],["stbturbo.xyz",208],["streamsilk.com",208],["freepik.com",209],["diyphotography.net",211],["bitchesgirls.com",212],["hiraethtranslation.com",213],["programmingeeksclub.com",214],["diendancauduong.com",215],["androidadult.com",216],["parentcircle.com",217],["h-game18.xyz",218],["wheelofgold.com",219],["davescomputertips.com",220],["historyofroyalwomen.com",220],["motchill.*",221],["lifestyle.bg",222],["news.bg",222],["topsport.bg",222],["webcafe.bg",222],["freepikdownloader.com",223],["freepasses.org",224],["iusedtobeaboss.com",225],["blogtruyenmoi.com",226],["repretel.com",228],["tubereader.me",228],["graphicget.com",229],["qiwi.gg",[230,231]],["sonixgvn.net",232],["alliptvlinks.com",233],["smashyplayer.top",234],["upns.*",234],["xvideos.com",235],["xvideos2.com",235],["katfile.com",236],["readcomiconline.*",237],["nekopoi.*",238],["ukchat.co.uk",239],["hivelr.com",240],["skidrowcodex.net",241],["takimag.com",242],["digi.no",243],["th.gl",244],["twi-fans.com",245],["learn-cpp.org",246],["terashare.co",247],["pornwex.tv",248],["smithsonianmag.com",249],["homesports.net",250],["realmoasis.com",251],["javfc2.xyz",252],["gobankingrates.com",253],["hiddenleaf.to",254],["ronorp.net",255],["gdflix.*",256],["a1movies.*",257],["videovak.com",258],["a-lohas.jp",259],["akirabox.com",260],["purplex.app",261],["maggotdrowning.com",262],["bilinovel.com",263],["esportstales.com",264],["streamup.ws",265],["pagalfree.com",266],["pagalworld.us",266],["idnes.cz",[267,268]]]);
const exceptionsMap = new Map([["forum.soft98.ir",[113,143]]]);
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
