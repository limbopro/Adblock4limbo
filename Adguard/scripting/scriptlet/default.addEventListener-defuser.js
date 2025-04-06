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
const argsList = [["load","Object"],["load","hard_block"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["load","onload"],["","BACK"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","creativeLoaded-"],["/^load[A-Za-z]{12,}/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["/^(?:click|mousedown)$/","_0x"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["","history.go"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["DOMContentLoaded","history.go"],["load","bypass"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu","preventDefault"],["visibilitychange","remainingSeconds"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["load","doTest"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["click","maxclick"],["click","","elements","#get-link-button"],["click","window.open"],["click","shouldOpenPopUp"],["click","adForm"],["blur"],["click","popMagic"],["","shouldShow"],["","exopop"],["load","/AdBlock/i"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["click","open"],["error"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["DOMContentLoaded","/dyn\\.ads|loadAdsDelayed/"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["DOMContentLoaded","atob"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["click","popName"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["/adblock/i"],["load","google-analytics"],["","sessionStorage"],["click","/form\\.submit|urlToOpen/"],["DOMContentLoaded","overlays"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["","adsense"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["load","puHref"],["click","Ads"],["mouseup","open"],["DOMContentLoaded","adBlockNotice"],["DOMContentLoaded","_0x"],["DOMContentLoaded","detect"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];
const hostnamesMap = new Map([["newser.com",0],["sport1.de",1],["timesofindia.indiatimes.com",2],["drrtyr.mx",2],["pinoyalbums.com",2],["multiplayer.it",2],["mediafire.com",[3,4]],["kingofdown.com",5],["radiotormentamx.com",5],["limetorrents.*",[5,9]],["king-pes.*",5],["quelleestladifference.fr",5],["depedlps.*",5],["otakuworldsite.blogspot.com",5],["ad-itech.blogspot.com",5],["komikcast.*",5],["unlockapk.com",5],["mobdi3ips.com",5],["socks24.org",5],["idedroidsafelink.*",5],["links-url.*",5],["interviewgig.com",5],["javaguides.net",5],["almohtarif-tech.net",5],["forum.release-apk.com",5],["devoloperxda.blogspot.com",5],["zwergenstadt.com",5],["primedeportes.es",5],["upxin.net",5],["ciudadblogger.com",5],["ke-1.com",5],["secretsdeepweb.blogspot.com",5],["bit-shares.com",5],["itdmusics.com",5],["aspdotnet-suresh.com",5],["tudo-para-android.com",5],["urdulibrarypk.blogspot.com",5],["zerotopay.com",5],["ak4eg.*",5],["akw.to",5],["mawsueaa.com",5],["hesgoal-live.io",5],["king-shoot.io",5],["9goals.live",5],["streanplay.*",6],["steanplay.*",6],["bibme.org",7],["citationmachine.net",7],["easybib.com",8],["pahe.*",9],["yts.*",9],["tube8.*",9],["topeuropix.*",9],["vermangasporno.com",9],["moviescounter.*",9],["imgtorrnt.in",9],["picbaron.com",[9,112]],["torrent9.*",9],["desiremovies.*",9],["letmejerk.com",9],["letmejerk2.com",9],["letmejerk3.com",9],["letmejerk4.com",9],["letmejerk5.com",9],["letmejerk6.com",9],["letmejerk7.com",9],["movs4u.*",9],["uwatchfree.*",9],["hydrax.*",9],["4movierulz.*",9],["projectfreetv.*",9],["arabseed.*",9],["btdb.*",[9,49]],["dlapk4all.com",9],["kropic.com",9],["kvador.com",9],["pdfindir.net",9],["brstej.com",9],["topwwnews.com",9],["xsanime.com",9],["vidlo.us",9],["youx.xxx",9],["world4ufree.*",9],["animeindo.asia",9],["streamsport.*",9],["rojadirectatvhd.*",9],["userload.*",9],["adclickersbot.com",9],["badtaste.it",10],["adyou.*",11],["gotporn.com",12],["freepornrocks.com",12],["tvhai.org",12],["realgfporn.com",[13,14]],["fxporn69.*",13],["thisvid.com",14],["xvideos-downloader.net",14],["imgspice.com",15],["vikiporn.com",16],["tnaflix.com",16],["hentai2w.com",[16,127]],["yourlust.com",16],["hotpornfile.org",16],["watchfreexxx.net",16],["vintageporntubes.com",16],["angelgals.com",16],["babesexy.com",16],["ganstamovies.com",16],["youngleak.com",16],["porndollz.com",16],["xnxxvideo.pro",16],["xvideosxporn.com",16],["filmpornofrancais.fr",16],["pictoa.com",[16,40]],["adultasianporn.com",16],["nsfwmonster.com",16],["girlsofdesire.org",16],["gaytail.com",16],["fetish-bb.com",16],["rumporn.com",16],["soyoungteens.com",16],["zubby.com",16],["lesbian8.com",16],["gayforfans.com",16],["reifporn.de",16],["javtsunami.com",16],["18tube.sex",16],["xxxextreme.org",16],["amateurs-fuck.com",16],["sex-amateur-clips.com",16],["hentaiworld.tv",16],["dads-banging-teens.com",16],["home-xxx-videos.com",16],["mature-chicks.com",16],["hqbang.com",16],["darknessporn.com",16],["familyporner.com",16],["freepublicporn.com",16],["pisshamster.com",16],["punishworld.com",16],["xanimu.com",16],["tubator.com",16],["pornhd.com",17],["cnnamador.com",[17,28]],["cle0desktop.blogspot.com",17],["turkanime.co",17],["rexporn.*",17],["movies07.*",17],["camclips.tv",[17,41]],["blackpornhq.com",17],["xsexpics.com",17],["ulsex.net",17],["wannafreeporn.com",17],["ytube2dl.com",17],["pornocomics.*",17],["multiup.us",17],["protege-torrent.com",17],["pussyspace.com",[18,19]],["pussyspace.net",[18,19]],["empflix.com",20],["cpmlink.net",21],["bdsmstreak.com",21],["cutpaid.com",21],["pornforrelax.com",21],["fatwhitebutt.com",21],["pornomoll.*",21],["short.pe",22],["gsurl.*",22],["pinsystem.co.uk",23],["ancensored.com",23],["ganool.*",23],["mp3fiber.com",[23,24]],["xrivonet.info",23],["pirate.*",23],["piratebay.*",23],["pirateproxy.*",23],["proxytpb.*",23],["thepiratebay.*",23],["totaldebrid.org",24],["freecoursesonline.*",24],["neko-miku.com",24],["lordpremium.*",24],["elsfile.org",24],["venstrike.jimdofree.com",24],["todovieneok.*",24],["schrauben-normen.de",24],["avengerinator.blogspot.com",24],["novablogitalia.*",24],["link-to.net",24],["hanimesubth.com",24],["gsmturkey.net",24],["anisubindo.*",24],["adshrink.it",24],["presentation-ppt.com",24],["mangacanblog.com",24],["pekalongan-cits.blogspot.com",24],["4tymode.win",24],["linkvertise.com",24],["reifenrechner.at",24],["tire-size-calculator.info",24],["linuxsecurity.com",24],["itsguider.com",24],["cotravinh.blogspot.com",24],["itudong.com",24],["shortx.net",24],["btvsports.*",24],["lecturel.com",24],["bakai.org",24],["nar.k-ba.net",24],["eurotruck2.com.br",24],["tiroalpaloes.com",24],["stream4free.*",24],["tiroalpaloes.net",24],["flixsix.com",24],["tiroalpaloweb.xyz",24],["mimaletadepeliculas.*",25],["bs.to",26],["burningseries.*",26],["efukt.com",26],["dz4soft.*",27],["generacionretro.net",27],["nuevos-mu.ucoz.com",27],["micloudfiles.com",27],["yoututosjeff.*",27],["ebookmed.*",27],["lanjutkeun.*",27],["mimaletamusical.blogspot.com",27],["novelasesp.*",27],["visionias.net",27],["singingdalong.*",27],["b3infoarena.in",27],["lurdchinexgist.blogspot.com",27],["thefreedommatrix.blogspot.com",27],["hentai-vl.blogspot.com",27],["projetomotog.blogspot.com",27],["ktmx.pro",27],["lirik3satu.blogspot.com",27],["marketmovers.it",27],["pharmaguideline.com",27],["safemaru.blogspot.com",27],["mixloads.com",27],["mangaromance.eu",27],["interssh.com",27],["freesoftpdfdownload.blogspot.com",27],["cirokun.blogspot.com",27],["myadslink.com",27],["blackavelic.com",27],["doujindesu.*",27],["server.satunivers.tv",27],["eg-akw.com",27],["xn--mgba7fjn.cc",27],["flashingjungle.com",28],["ma-x.org",29],["lavozdegalicia.es",29],["ddwloclawek.pl",29],["ki24.info",29],["xmovies8.*",30],["xmovies08.org",31],["globaldjmix.com",32],["desiupload.*",[33,136]],["hblinks.pro",33],["hubcdn.vip",33],["hubdrive.*",33],["90fpsconfig.in",33],["katdrive.link",33],["kmhd.net",33],["bollydrive.rest",33],["360news4u.net",33],["hypershort.com",[33,125]],["bollydrive.*",[33,138]],["zazzybabes.com",34],["haaretz.co.il",35],["haaretz.com",35],["slate.com",36],["megalinks.info",37],["megapastes.com",37],["mega-mkv.com",[37,38]],["mkv-pastes.com",37],["zpaste.net",37],["zlpaste.net",37],["9xlinks.site",37],["mega-dvdrip.*",38],["peliculas-dvdrip.*",38],["zona-leros.net",38],["desbloqueador.*",39],["cine.to",[40,183]],["newpelis.*",[40,47]],["pelix.*",[40,47]],["allcalidad.*",[40,127]],["khatrimaza.*",40],["kissasia.cc",40],["camwhores.*",41],["camwhorestv.*",41],["digjav.com",41],["uproxy.*",41],["videoszoofiliahd.com",42],["xxxtubezoo.com",43],["zooredtube.com",43],["uii.io",44],["megacams.me",45],["porndoe.com",46],["acienciasgalilei.com",48],["playrust.io",49],["payskip.org",50],["short-url.link",51],["tubedupe.com",52],["mirrorace.*",53],["fatgirlskinny.net",54],["polska-ie.com",54],["windowsmatters.com",54],["canaltdt.es",55],["masbrooo.com",55],["2ndrun.tv",55],["oncehelp.com",56],["curto.win",56],["smallseotools.com",57],["mixdrp.*",58],["macwelt.de",59],["pcwelt.de",59],["capital.de",59],["geo.de",59],["allmomsex.com",60],["allnewindianporn.com",60],["analxxxvideo.com",60],["animalextremesex.com",60],["anime3d.xyz",60],["animefuckmovies.com",60],["animepornfilm.com",60],["animesexbar.com",60],["animesexclip.com",60],["animexxxsex.com",60],["animexxxfilms.com",60],["anysex.club",60],["apetube.asia",60],["asianfuckmovies.com",60],["asianfucktube.com",60],["asianporn.sexy",60],["asiansex.*",60],["asiansexcilps.com",60],["beeg.fund",60],["beegvideoz.com",60],["bestasiansex.pro",60],["bravotube.asia",60],["brutalanimalsfuck.com",60],["candyteenporn.com",60],["daddyfuckmovies.com",60],["desifuckonline.com",60],["exclusiveasianporn.com",60],["exteenporn.com",60],["fantasticporn.net",60],["fantasticyoungporn.com",60],["fineasiansex.com",60],["firstasianpussy.com",60],["freeindiansextube.com",60],["freepornasians.com",60],["freerealvideo.com",60],["fuck-beeg.com",60],["fuck-xnxx.com",60],["fuckasian.pro",60],["fuckfuq.com",60],["fuckundies.com",60],["gojapaneseporn.com",60],["golderotica.com",60],["goodyoungsex.com",60],["goyoungporn.com",60],["hardxxxmoms.com",60],["hdvintagetube.com",60],["hentaiporn.me",60],["hentaisexfilms.com",60],["hentaisexuality.com",60],["hot-teens-movies.mobi",60],["hotanimepornvideos.com",60],["hotanimevideos.com",60],["hotasianpussysex.com",60],["hotjapaneseshows.com",60],["hotmaturetube.com",60],["hotmilfs.pro",60],["hotorientalporn.com",60],["hotpornyoung.com",60],["hotxxxjapanese.com",60],["hotxxxpussy.com",60],["indiafree.net",60],["indianpornvideo.online",60],["japanfuck.*",60],["japanporn.*",60],["japanpornclip.com",60],["japanesetube.video",60],["japansex.me",60],["japanesexxxporn.com",60],["japansporno.com",60],["japanxxx.asia",60],["japanxxxworld.com",60],["keezmovies.surf",60],["lingeriefuckvideo.com",60],["liveanimalporn.zooo.club",60],["madhentaitube.com",60],["megahentaitube.com",60],["megajapanesesex.com",60],["megajapantube.com",60],["milfxxxpussy.com",60],["momsextube.pro",60],["momxxxass.com",60],["monkeyanimalporn.com",60],["moviexxx.mobi",60],["newanimeporn.com",60],["newjapanesexxx.com",60],["nicematureporn.com",60],["nudeplayboygirls.com",60],["openxxxporn.com",60],["originalindianporn.com",60],["originalteentube.com",60],["pig-fuck.com",60],["plainasianporn.com",60],["popularasianxxx.com",60],["pornanimetube.com",60],["pornasians.pro",60],["pornhat.asia",60],["pornjapanesesex.com",60],["pornomovies.asia",60],["pornvintage.tv",60],["primeanimesex.com",60],["realjapansex.com",60],["realmomsex.com",60],["redsexhub.com",60],["retroporn.world",60],["retrosexfilms.com",60],["sex-free-movies.com",60],["sexanimesex.com",60],["sexanimetube.com",60],["sexjapantube.com",60],["sexmomvideos.com",60],["sexteenxxxtube.com",60],["sexxxanimal.com",60],["sexyoungtube.com",60],["sexyvintageporn.com",60],["sopornmovies.com",60],["spicyvintageporn.com",60],["sunporno.club",60],["tabooanime.club",60],["teenextrem.com",60],["teenfucksex.com",60],["teenhost.net",60],["teensex.*",60],["teensexass.com",60],["tnaflix.asia",60],["totalfuckmovies.com",60],["totalmaturefuck.com",60],["txxx.asia",60],["vintagetube.*",60],["voyeurpornsex.com",60],["warmteensex.com",60],["wetasiancreampie.com",60],["wildhentaitube.com",60],["wowyoungsex.com",60],["xhamster-art.com",60],["xmovie.pro",60],["xnudevideos.com",60],["xnxxjapon.com",60],["xpics.me",60],["xvide.me",60],["xxxanimefuck.com",60],["xxxanimevideos.com",60],["xxxanimemovies.com",60],["xxxhentaimovies.com",60],["xxxhothub.com",60],["xxxjapaneseporntube.com",60],["xxxlargeporn.com",60],["xxxmomz.com",60],["xxxmovies.*",60],["xxxpornmilf.com",60],["xxxpussyclips.com",60],["xxxpussysextube.com",60],["xxxretrofuck.com",60],["xxxsex.pro",60],["xxxsexyjapanese.com",60],["xxxteenyporn.com",60],["xxxvideo.asia",60],["xxxvideos.ink",60],["xxxyoungtv.com",60],["youjizzz.club",60],["youngpussyfuck.com",60],["bayimg.com",61],["celeb.gate.cc",62],["kinoger.re",63],["usersdrive.com",63],["desi.upn.bio",63],["zooqle.*",64],["masterplayer.xyz",65],["pussy-hub.com",65],["porndex.com",66],["compucalitv.com",67],["hdfull.*",68],["diariodenavarra.es",69],["mangamanga.*",70],["streameast.*",71],["thestreameast.*",71],["pennlive.com",72],["beautypageants.indiatimes.com",73],["01fmovies.com",74],["vev.*",75],["vidop.*",75],["lnk2.cc",76],["fullhdxxx.com",77],["luscious.net",[77,112]],["classicpornbest.com",77],["1youngteenporn.com",77],["www-daftarharga.blogspot.com",[77,169]],["miraculous.to",[77,175]],["vtube.to",77],["zone-telechargement.*",77],["xstory-fr.com",77],["1337x.*",77],["x1337x.*",77],["gosexpod.com",78],["tubepornclassic.com",79],["shemalez.com",79],["otakukan.com",80],["xcafe.com",81],["pornfd.com",81],["venusarchives.com",81],["imagehaha.com",82],["imagenpic.com",82],["imageshimage.com",82],["imagetwist.com",82],["megalink.*",83],["k1nk.co",83],["watchasians.cc",83],["lulustream.com",83],["luluvdo.com",83],["gmx.*",84],["web.de",84],["news18.com",85],["thelanb.com",86],["dropmms.com",86],["softwaredescargas.com",87],["cracking-dz.com",88],["mega1080p.*",89],["anitube.*",89],["gazzetta.it",90],["9hentai.*",91],["port.hu",92],["dziennikbaltycki.pl",93],["dzienniklodzki.pl",93],["dziennikpolski24.pl",93],["dziennikzachodni.pl",93],["echodnia.eu",93],["expressbydgoski.pl",93],["expressilustrowany.pl",93],["gazetakrakowska.pl",93],["gazetalubuska.pl",93],["gazetawroclawska.pl",93],["gk24.pl",93],["gloswielkopolski.pl",93],["gol24.pl",93],["gp24.pl",93],["gra.pl",93],["gs24.pl",93],["kurierlubelski.pl",93],["motofakty.pl",93],["naszemiasto.pl",93],["nowiny24.pl",93],["nowosci.com.pl",93],["nto.pl",93],["polskatimes.pl",93],["pomorska.pl",93],["poranny.pl",93],["sportowy24.pl",93],["strefaagro.pl",93],["strefabiznesu.pl",93],["stronakobiet.pl",93],["telemagazyn.pl",93],["to.com.pl",93],["wspolczesna.pl",93],["course9x.com",93],["courseclub.me",93],["azrom.net",93],["alttyab.net",93],["esopress.com",93],["nesiaku.my.id",93],["onemanhua.com",94],["freeindianporn.mobi",94],["dr-farfar.com",95],["boyfriendtv.com",96],["brandstofprijzen.info",97],["netfuck.net",98],["gaypornhdfree.*",98],["blog24.me",[98,105]],["kisahdunia.com",98],["cinemakottaga.*",98],["privatemoviez.*",98],["javsex.to",98],["nulljungle.com",98],["oyuncusoruyor.com",98],["pbarecap.ph",98],["sourds.net",98],["teknobalta.com",98],["tvinternetowa.info",98],["sqlserveregitimleri.com",98],["tutcourse.com",98],["readytechflip.com",98],["warddogs.com",98],["dvdgayporn.com",98],["iimanga.com",98],["tinhocdongthap.com",98],["tremamnon.com",98],["423down.com",98],["brizzynovel.com",98],["jugomobile.com",98],["freecodezilla.net",98],["apkmaven.*",98],["iconmonstr.com",98],["gay-tubes.cc",98],["rbxscripts.net",98],["comentariodetexto.com",98],["wordpredia.com",98],["allfaucet.xyz",[98,105]],["titbytz.tk",98],["replica-watch.info",98],["alludemycourses.com",98],["kayifamilytv.com",98],["interfans.org",98],["iir.ai",99],["popcornstream.*",100],["qpython.club",101],["antifake-funko.fr",101],["dktechnicalmate.com",101],["recipahi.com",101],["e9china.net",102],["ontools.net",102],["marketbeat.com",103],["hentaipornpics.net",104],["ohionowcast.info",105],["wiour.com",105],["bitzite.com",[105,110,111]],["appsbull.com",105],["diudemy.com",105],["maqal360.com",[105,113,114]],["bitcotasks.com",105],["videolyrics.in",105],["manofadan.com",105],["cempakajaya.com",105],["tagecoin.com",105],["naijafav.top",105],["ourcoincash.xyz",105],["claimcoins.site",105],["cryptosh.pro",105],["eftacrypto.com",105],["fescrypto.com",105],["earnhub.net",105],["kiddyshort.com",105],["tronxminer.com",105],["neverdims.com",105],["homeairquality.org",106],["cety.app",[107,108]],["exego.app",107],["cutlink.net",107],["cutsy.net",107],["cutyurls.com",107],["cutty.app",107],["cutnet.net",107],["jixo.online",107],["cuty.me",108],["exnion.com",108],["upfiles.app",[108,124]],["upfiles-urls.com",[108,124]],["gamerxyt.com",108],["up4stream.com",108],["adcrypto.net",109],["admediaflex.com",109],["aduzz.com",109],["bitcrypto.info",109],["cdrab.com",109],["datacheap.io",109],["hbz.us",109],["savego.org",109],["owsafe.com",109],["sportweb.info",109],["gfx-station.com",110],["buzzheavier.com",111],["flashbang.sh",111],["trashbytes.net",111],["aiimgvlog.fun",112],["6indianporn.com",112],["amateurebonypics.com",112],["amateuryoungpics.com",112],["amigosporn.top",112],["cinemabg.net",112],["coomer.su",112],["desimmshd.com",112],["frauporno.com",112],["givemeaporn.com",112],["hitomi.la",112],["jav-asia.top",112],["javf.net",112],["javfull.net",112],["javideo.net",112],["javsunday.com",112],["kemono.su",112],["kr18plus.com",112],["missavtv.com",112],["pilibook.com",112],["pornborne.com",112],["porngrey.com",112],["pornktube.*",112],["qqxnxx.com",112],["sexvideos.host",112],["submilf.com",112],["subtaboo.com",112],["tktube.com",112],["watchseries.*",112],["xfrenchies.com",112],["soft98.ir",[113,138]],["moderngyan.com",115],["sattakingcharts.in",115],["freshbhojpuri.com",115],["bgmi32bitapk.in",115],["bankshiksha.in",115],["earn.mpscstudyhub.com",115],["earn.quotesopia.com",115],["money.quotesopia.com",115],["best-mobilegames.com",115],["learn.moderngyan.com",115],["bharatsarkarijobalert.com",115],["quotesopia.com",115],["creditsgoal.com",115],["coingraph.us",116],["momo-net.com",116],["milfnut.*",116],["maxgaming.fi",116],["cybercityhelp.in",117],["travel.vebma.com",118],["cloud.majalahhewan.com",118],["crm.cekresi.me",118],["ai.tempatwisata.pro",118],["pinloker.com",118],["sekilastekno.com",118],["mrproblogger.com",119],["themezon.net",119],["dagensnytt.com",119],["azmath.info",120],["azsoft.*",120],["downfile.site",120],["downphanmem.com",120],["expertvn.com",120],["memangbau.com",120],["trangchu.news",120],["aztravels.net",120],["ielts-isa.edu.vn",120],["techedubyte.com",[120,229]],["jpopsingles.eu",120],["aipebel.com",120],["link.paid4link.com",[121,122]],["driveup.sbs",123],["apimate.net",123],["dynamicminister.net",123],["gofirmware.com",123],["national-park.com",123],["forgee.xyz",123],["gamehub.cam",123],["upfion.com",124],["cutyion.com",124],["weshare.is",126],["file.gocmod.com",126],["camarchive.tv",127],["crownimg.com",127],["freejav.guru",127],["gntai.*",127],["grantorrent.*",127],["hentai2read.com",127],["icyporno.com",127],["illink.net",127],["javtiful.com",127],["m-hentai.net",127],["mejortorrent.*",127],["mejortorrento.*",127],["mejortorrents.*",127],["mejortorrents1.*",127],["mejortorrentt.*",127],["pornblade.com",127],["pornfelix.com",127],["pornxxxxtube.net",127],["redwap.me",127],["redwap2.com",127],["redwap3.com",127],["sunporno.com",127],["tubxporn.xxx",127],["ver-comics-porno.com",127],["ver-mangas-porno.com",127],["xanimeporn.com",127],["xxxvideohd.net",127],["zetporn.com",127],["simpcity.su",128],["gameofporn.com",129],["flight-report.com",130],["vulture.com",131],["megaplayer.bokracdn.run",132],["hentaistream.com",133],["siteunblocked.info",134],["larvelfaucet.com",135],["feyorra.top",135],["claimtrx.com",135],["pagalmovies.*",136],["7starhd.*",136],["jalshamoviez.*",136],["moviesyug.net",136],["9xupload.*",136],["bdupload.*",136],["rdxhd1.*",136],["parispi.net",137],["hentaicloud.com",138],["nuvid.*",138],["justin.mp3quack.lol",138],["tio.ch",139],["lavanguardia.com",139],["tu.no",139],["paperzonevn.com",140],["dailyvideoreports.net",141],["lewd.ninja",142],["systemnews24.com",143],["incestvidz.com",144],["niusdiario.es",145],["playporngames.com",146],["javx.cc",146],["movi.pk",[147,150]],["moviessources.*",148],["cutesexyteengirls.com",149],["0dramacool.net",150],["0gomovie.*",150],["0gomovies.*",150],["185.53.88.104",150],["185.53.88.204",150],["185.53.88.15",150],["123moviefree.*",150],["123movies4k.net",150],["1kmovies.*",150],["1madrasdub.*",150],["1primewire.*",150],["1rowsports.com",150],["2embed.*",150],["2madrasdub.*",150],["2umovies.*",150],["4anime.*",150],["4share-mp3.net",150],["9animetv.to",150],["720pstream.me",150],["aagmaal.com",150],["abysscdn.com",150],["adblockplustape.*",150],["ajkalerbarta.com",150],["altadefinizione01.*",150],["androidapks.biz",150],["androidsite.net",150],["animeonlinefree.org",150],["animesite.net",150],["animespank.com",150],["aniworld.to",150],["apkmody.io",150],["appsfree4u.com",150],["atomixhq.*",150],["audioz.download",150],["awafim.tv",150],["bdnewszh.com",150],["beastlyprints.com",150],["beinmatch.*",150],["bengalisite.com",150],["bestfullmoviesinhd.org",150],["betteranime.net",150],["blacktiesports.live",150],["brmovies.*",150],["buffsports.stream",150],["ch-play.com",150],["cima4u.*",150],["clickforhire.com",150],["clicknupload.*",150],["cloudy.pk",150],["cmovies.*",150],["computercrack.com",150],["coolcast2.com",150],["crackedsoftware.biz",150],["crackfree.org",150],["cracksite.info",150],["cricfree.*",150],["crichd.*",150],["cryptoblog24.info",150],["cuatrolatastv.blogspot.com",150],["cydiasources.net",150],["decmelfot.xyz",150],["dirproxy.com",150],["dood.*",150],["dopebox.to",150],["downloadapk.info",150],["downloadapps.info",150],["downloadgames.info",150],["downloadmusic.info",150],["downloadsite.org",150],["downloadwella.com",150],["ebooksite.org",150],["educationtips213.blogspot.com",150],["egyup.live",150],["elgoles.pro",150],["embed.meomeo.pw",150],["embed.scdn.to",150],["emulatorsite.com",150],["essaysharkwriting.club",150],["exploreera.net",150],["extrafreetv.com",150],["f1stream.*",150],["fakedetail.com",150],["faselhd.*",150],["fbstream.*",150],["fclecteur.com",150],["filemoon.*",150],["filepress.*",[150,211]],["files.im",150],["filmlinks4u.*",150],["filmpertutti.*",150],["filmyzilla.*",150],["flexyhit.com",150],["fmoviefree.net",150],["fmovies24.com",150],["fmovies.*",150],["freeflix.info",150],["freemoviesu4.com",150],["freeplayervideo.com",150],["freesoccer.net",150],["french-stream.*",150],["fseries.org",150],["fzlink.*",150],["gamefast.org",150],["gamesite.info",150],["gettapeads.com",150],["gmanga.me",150],["gocast123.me",150],["gofilms4u.*",150],["gogoanime.*",150],["gogohd.net",150],["gogoplay5.com",150],["gomoviz.*",150],["gooplay.net",150],["gostreamon.net",150],["happy2hub.org",150],["harimanga.com",150],["hdmoviefair.*",150],["hdmovies4u.*",150],["hdmovies50.*",150],["hdmoviesfair.*",150],["healthnewsreel.com",150],["hexupload.net",150],["hh3dhay.*",150],["hinatasoul.com",150],["hindilinks4u.*",150],["hindisite.net",150],["holymanga.net",150],["hotmasti.*",150],["hurawatch.*",150],["hxfile.co",150],["isosite.org",150],["iv-soft.com",150],["januflix.expert",150],["jewelry.com.my",150],["johnwardflighttraining.com",150],["kabarportal.com",150],["klmanga.*",150],["klubsports.*",150],["kstorymedia.com",150],["la123movies.org",150],["lespassionsdechinouk.com",150],["libertestreamvf.*",150],["lilymanga.net",150],["linksdegrupos.com.br",150],["linkz.wiki",150],["livetvon.*",150],["livestreamtv.pk",150],["macsite.info",150],["manga1000.*",150],["manga1001.*",150],["mangaraw.*",150],["mangarawjp.*",150],["mangasite.org",150],["manhuascan.com",150],["megamovies.org",150],["membed.net",150],["mlbstream.*",150],["moddroid.com",150],["motogpstream.*",150],["moviefree2.com",150],["movierulz.*",150],["movies123.*",150],["movies-watch.com.pk",150],["movies2watch.*",150],["moviesden.*",150],["moviesite.app",150],["moviesonline.fm",150],["moviesx.org",150],["moviezaddiction.*",150],["msmoviesbd.com",150],["musicsite.biz",150],["myfernweh.com",150],["myviid.com",150],["nazarickol.com",150],["nbastream.*",150],["netcine.*",150],["nflstream.*",150],["nhlstream.*",150],["noob4cast.com",150],["nsw2u.com",[150,270]],["oko.sh",150],["onlinewatchmoviespk.*",150],["orangeink.pk",150],["pahaplayers.click",150],["patchsite.net",150],["pctfenix.*",150],["pctnew.*",150],["pdfsite.net",150],["pksmovies.*",150],["play1002.com",150],["player-cdn.com",150],["plyjam.*",150],["plylive.*",150],["pogolinks.*",150],["popcorntime.*",150],["poscitech.*",150],["productkeysite.com",150],["projectfreetv.one",150],["romsite.org",150],["rufiguta.com",150],["rugbystreams.*",150],["rytmp3.io",150],["send.cm",150],["seriesite.net",150],["seriezloaded.com.ng",150],["serijehaha.com",150],["shahed4u.*",150],["sflix.*",150],["shrugemojis.com",150],["siteapk.net",150],["siteflix.org",150],["sitegames.net",150],["sitekeys.net",150],["sitepdf.com",150],["sitesunblocked.*",150],["sitetorrent.com",150],["softwaresite.net",150],["solarmovies.*",150],["sportbar.live",150],["sportcast.*",150],["sportskart.*",150],["sports-stream.*",150],["ssyoutube.com",150],["stardima.com",150],["stream4free.live",150],["streaming-french.*",150],["streamers.*",150],["streamingcommunity.*",[150,193]],["superapk.org",150],["supermovies.org",150],["t20cup.*",150],["tainio-mania.online",150],["talaba.su",150],["tamilguns.org",150],["tatabrada.tv",150],["techtrendmakers.com",150],["tennisstreams.*",150],["thememypc.net",150],["thripy.com",150],["torrentdosfilmes.*",150],["toonanime.*",150],["travelplanspro.com",150],["turcasmania.com",150],["tusfiles.com",150],["tvonlinesports.com",150],["tvply.*",150],["ufcstream.*",150],["ultramovies.org",150],["uploadbank.com",150],["uptomega.*",150],["uqload.*",150],["urdubolo.pk",150],["vudeo.*",150],["vidoo.*",150],["vidspeeds.com",150],["vipboxtv.*",150],["viprow.*",150],["warezsite.net",150],["watchmovies2.com",150],["watchmoviesforfree.org",150],["watchofree.com",150],["watchsite.net",150],["watchsouthpark.tv",150],["watchtvch.club",150],["web.livecricket.is",150],["webseries.club",150],["worldcupstream.pm",150],["y2mate.com",150],["yesmovies.*",150],["yomovies.*",150],["yomovies1.*",150],["youapk.net",150],["youtube4kdownloader.com",150],["yt2mp3s.*",150],["yts-subs.com",150],["kat.*",150],["katbay.*",150],["kickass.*",150],["kickasshydra.*",150],["kickasskat.*",150],["kickass2.*",150],["kickasstorrents.*",150],["kat2.*",150],["kattracker.*",150],["thekat.*",150],["thekickass.*",150],["kickassz.*",150],["kickasstorrents2.*",150],["topkickass.*",150],["kickassgo.*",150],["kkickass.*",150],["kkat.*",150],["kickasst.*",150],["kick4ss.*",150],["haho.moe",151],["nicy-spicy.pw",152],["novelmultiverse.com",153],["mylegalporno.com",154],["embedsports.me",155],["embedstream.me",155],["jumbtv.com",155],["reliabletv.me",155],["guardaserie.*",156],["cine-calidad.*",157],["xnxx.com",158],["xvideos.*",158],["thecut.com",159],["novelism.jp",160],["alphapolis.co.jp",161],["game3rb.com",162],["javhub.net",162],["thotvids.com",163],["berklee.edu",164],["rawkuma.com",[165,166]],["moviesjoyhd.to",166],["cineb.rs",166],["imeteo.sk",167],["youtubemp3donusturucu.net",168],["surfsees.com",170],["vivo.st",[171,172]],["videovard.*",173],["alueviesti.fi",174],["kiuruvesilehti.fi",174],["lempaala.ideapark.fi",174],["olutposti.fi",174],["urjalansanomat.fi",174],["tainhanhvn.com",176],["titantv.com",177],["3cinfo.net",178],["cocomanga.com",179],["animelatinohd.com",179],["sampledrive.in",180],["sportnews.to",180],["soccershoes.blog",180],["shineads.*",180],["mcleaks.net",181],["explorecams.com",181],["minecraft.buzz",181],["chillx.top",182],["playerx.stream",182],["m.liputan6.com",184],["stardewids.com",[184,207]],["ingles.com",185],["spanishdict.com",185],["surfline.com",186],["rureka.com",187],["freepreset.net",188],["amateur8.com",189],["freeporn8.com",189],["maturetubehere.com",189],["embedo.co",190],["corriere.it",191],["oggi.it",191],["2the.space",192],["apkcombo.com",194],["winfuture.de",195],["sponsorhunter.com",196],["novelssites.com",197],["haxina.com",198],["scimagojr.com",198],["dramafren.net",198],["torrentmac.net",199],["udvl.com",200],["dlpanda.com",201],["socialmediagirls.com",202],["einrichtungsbeispiele.de",203],["weadown.com",204],["molotov.tv",205],["freecoursesonline.me",206],["adelsfun.com",206],["advantien.com",206],["bailbondsfinder.com",206],["bg-gledai.*",206],["bigpiecreative.com",206],["childrenslibrarylady.com",206],["classifarms.com",206],["comtasq.ca",206],["crone.es",206],["ctrmarketingsolutions.com",206],["dropnudes.com",206],["ftuapps.dev",206],["genzsport.com",206],["ghscanner.com",206],["gledaitv.*",206],["grsprotection.com",206],["gruporafa.com.br",206],["inmatefindcalifornia.com",206],["inmatesearchidaho.com",206],["itsonsitetv.com",206],["mfmfinancials.com",206],["myproplugins.com",206],["nurulislam.org",206],["onehack.us",206],["ovester.com",206],["paste.bin.sx",206],["privatenudes.com",206],["renoconcrete.ca",206],["richieashbeck.com",206],["sat.technology",206],["short1ink.com",206],["stpm.co.uk",206],["wegotcookies.co",206],["mathcrave.com",206],["marinetraffic.live",206],["commands.gg",207],["smgplaza.com",208],["emturbovid.com",209],["findjav.com",209],["javggvideo.xyz",209],["mmtv01.xyz",209],["stbturbo.xyz",209],["streamsilk.com",209],["freepik.com",210],["diyphotography.net",212],["bitchesgirls.com",213],["hiraethtranslation.com",214],["programmingeeksclub.com",215],["diendancauduong.com",216],["androidadult.com",217],["parentcircle.com",218],["h-game18.xyz",219],["wheelofgold.com",220],["davescomputertips.com",221],["historyofroyalwomen.com",221],["motchill.*",222],["lifestyle.bg",223],["news.bg",223],["topsport.bg",223],["webcafe.bg",223],["freepikdownloader.com",224],["freepasses.org",225],["iusedtobeaboss.com",226],["androidpolice.com",227],["cbr.com",227],["gamerant.com",227],["howtogeek.com",227],["thegamer.com",227],["blogtruyenmoi.com",228],["repretel.com",230],["tubereader.me",230],["graphicget.com",231],["qiwi.gg",[232,233]],["sonixgvn.net",234],["alliptvlinks.com",235],["smashyplayer.top",236],["upns.*",236],["xvideos.com",237],["xvideos2.com",237],["homemoviestube.com",238],["sexseeimage.com",238],["readcomiconline.*",239],["nekopoi.*",240],["ukchat.co.uk",241],["hivelr.com",242],["skidrowcodex.net",243],["takimag.com",244],["digi.no",245],["th.gl",246],["twi-fans.com",247],["learn-cpp.org",248],["terashare.co",249],["pornwex.tv",250],["smithsonianmag.com",251],["homesports.net",252],["realmoasis.com",253],["javfc2.xyz",254],["gobankingrates.com",255],["hiddenleaf.to",256],["ronorp.net",257],["gdflix.*",258],["a1movies.*",259],["videovak.com",260],["a-lohas.jp",261],["akirabox.com",262],["purplex.app",263],["maggotdrowning.com",264],["bilinovel.com",265],["esportstales.com",266],["idnes.cz",[267,268]],["cbc.ca",269]]);
const exceptionsMap = new Map([["forum.soft98.ir",[113,138]]]);
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
