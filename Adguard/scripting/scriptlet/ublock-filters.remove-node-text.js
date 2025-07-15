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
(function uBOL_removeNodeText() {

/******************************************************************************/

function removeNodeText(
    nodeName,
    includes,
    ...extraArgs
) {
    replaceNodeTextFn(nodeName, '', '', 'includes', includes || '', ...extraArgs);
}

function replaceNodeTextFn(
    nodeName = '',
    pattern = '',
    replacement = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('replace-node-text.fn', ...Array.from(arguments));
    const reNodeName = safe.patternToRegex(nodeName, 'i', true);
    const rePattern = safe.patternToRegex(pattern, 'gms');
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const reIncludes = extraArgs.includes || extraArgs.condition
        ? safe.patternToRegex(extraArgs.includes || extraArgs.condition, 'ms')
        : null;
    const reExcludes = extraArgs.excludes
        ? safe.patternToRegex(extraArgs.excludes, 'ms')
        : null;
    const stop = (takeRecord = true) => {
        if ( takeRecord ) {
            handleMutations(observer.takeRecords());
        }
        observer.disconnect();
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Quitting');
        }
    };
    const textContentFactory = (( ) => {
        const out = { createScript: s => s };
        const { trustedTypes: tt } = self;
        if ( tt instanceof Object ) {
            if ( typeof tt.getPropertyType === 'function' ) {
                if ( tt.getPropertyType('script', 'textContent') === 'TrustedScript' ) {
                    return tt.createPolicy(getRandomTokenFn(), out);
                }
            }
        }
        return out;
    })();
    let sedCount = extraArgs.sedCount || 0;
    const handleNode = node => {
        const before = node.textContent;
        if ( reIncludes ) {
            reIncludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reIncludes, before) === false ) { return true; }
        }
        if ( reExcludes ) {
            reExcludes.lastIndex = 0;
            if ( safe.RegExp_test.call(reExcludes, before) ) { return true; }
        }
        rePattern.lastIndex = 0;
        if ( safe.RegExp_test.call(rePattern, before) === false ) { return true; }
        rePattern.lastIndex = 0;
        const after = pattern !== ''
            ? before.replace(rePattern, replacement)
            : replacement;
        node.textContent = node.nodeName === 'SCRIPT'
            ? textContentFactory.createScript(after)
            : after;
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Text before:\n${before.trim()}`);
        }
        safe.uboLog(logPrefix, `Text after:\n${after.trim()}`);
        return sedCount === 0 || (sedCount -= 1) !== 0;
    };
    const handleMutations = mutations => {
        for ( const mutation of mutations ) {
            for ( const node of mutation.addedNodes ) {
                if ( reNodeName.test(node.nodeName) === false ) { continue; }
                if ( handleNode(node) ) { continue; }
                stop(false); return;
            }
        }
    };
    const observer = new MutationObserver(handleMutations);
    observer.observe(document, { childList: true, subtree: true });
    if ( document.documentElement ) {
        const treeWalker = document.createTreeWalker(
            document.documentElement,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
        );
        let count = 0;
        for (;;) {
            const node = treeWalker.nextNode();
            count += 1;
            if ( node === null ) { break; }
            if ( reNodeName.test(node.nodeName) === false ) { continue; }
            if ( node === document.currentScript ) { continue; }
            if ( handleNode(node) ) { continue; }
            stop(); break;
        }
        safe.uboLog(logPrefix, `${count} nodes present before installing mutation observer`);
    }
    if ( extraArgs.stay ) { return; }
    runAt(( ) => {
        const quitAfter = extraArgs.quitAfter || 0;
        if ( quitAfter !== 0 ) {
            setTimeout(( ) => { stop(); }, quitAfter);
        } else {
            stop();
        }
    }, 'interactive');
}

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","detectAdBlock"],["script","ctrlKey"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|\\]\\([\"']_aQS0/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","\"data-sdk\""],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","popundersPerIP"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/AdBlock/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/detect|WebAssembly/"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["nontonx.com",3],["pandadoc.com",4],["web.de",5],["skidrowreloaded.com",[6,18]],["1337x.*",[6,18]],["1stream.eu",6],["4kwebplay.xyz",6],["alldownplay.xyz",6],["anime4i.vip",6],["antennasports.ru",6],["boxingstream.me",6],["buffstreams.app",6],["claplivehdplay.ru",[6,209]],["cracksports.me",[6,17]],["cricstream.me",6],["dartsstreams.com",6],["euro2024direct.ru",6],["ext.to",6],["extrem-down.*",6],["extreme-down.*",6],["eztv.*",6],["eztvx.to",6],["f1box.me",6],["flix-wave.*",6],["flixrave.me",6],["golfstreams.me",6],["hikaritv.xyz",6],["kenitv.me",[6,17]],["lewblivehdplay.ru",[6,209]],["mixdrop.*",[6,18]],["mlbbite.net",6],["mlbstreams.ai",6],["motogpstream.me",6],["nbabox.me",6],["nflbox.me",6],["nhlbox.me",6],["qatarstreams.me",[6,17]],["qqwebplay.xyz",[6,209]],["rnbastreams.com",6],["rugbystreams.me",6],["sanet.*",6],["socceronline.me",6],["soccerworldcup.me",[6,17]],["sportshd.*",6],["streamed.su",6],["sushiscan.net",6],["topstreams.info",6],["totalsportek.to",6],["tvableon.me",[6,17]],["vibestreams.*",6],["vipstand.pm",6],["worldsports.me",6],["x1337x.*",6],["wawacity.*",6],["720pstream.*",[6,68]],["embedsports.me",[6,95]],["embedstream.me",[6,17,18,68,95]],["jumbtv.com",[6,95]],["reliabletv.me",[6,95]],["topembed.pw",[6,70,209]],["crackstreamer.net",6],["methstreamer.com",6],["vidsrc.*",[6,17,68]],["vidco.pro",[6,68]],["freestreams-live.*>>",6],["moviepilot.de",[7,60]],["userupload.*",8],["cinedesi.in",8],["intro-hd.net",8],["monacomatin.mc",8],["nodo313.net",8],["mhdtvsports.*",[8,11]],["hesgoal-tv.io",8],["hesgoal-vip.io",8],["earn.punjabworks.com",8],["mahajobwala.in",8],["solewe.com",8],["panel.play.hosting",8],["total-sportek.to",8],["hesgoal-vip.to",8],["shoot-yalla.me",8],["shoot-yalla-tv.live",8],["pahe.*",[9,18,70]],["soap2day.*",9],["yts.mx",10],["magesypro.com",11],["pinsystem.co.uk",11],["elrellano.com",11],["tinyppt.com",11],["veganab.co",11],["camdigest.com",11],["learnmany.in",11],["amanguides.com",[11,39]],["highkeyfinance.com",[11,39]],["appkamods.com",11],["techacode.com",11],["djqunjab.in",11],["downfile.site",11],["expertvn.com",11],["trangchu.news",11],["3dmodelshare.org",11],["nulleb.com",11],["asiaon.top",11],["reset-scans.*",11],["thecustomrom.com",11],["snlookup.com",11],["bingotingo.com",11],["ghior.com",11],["3dmili.com",11],["karanpc.com",11],["plc247.com",11],["apkdelisi.net",11],["freepasses.org",11],["poplinks.*",[11,43]],["tomarnarede.pt",11],["basketballbuzz.ca",11],["dribbblegraphics.com",11],["kemiox.com",11],["teksnologi.com",11],["bharathwick.com",11],["descargaspcpro.net",11],["dx-tv.com",[11,18]],["rt3dmodels.com",11],["plc4me.com",11],["blisseyhusbands.com",11],["mhdsports.*",11],["mhdsportstv.*",11],["mhdtvworld.*",11],["mhdtvmax.*",11],["mhdstream.*",11],["madaradex.org",11],["trigonevo.com",11],["franceprefecture.fr",11],["jazbaat.in",11],["aipebel.com",11],["audiotools.blog",11],["embdproxy.xyz",11],["hqq.*",12],["waaw.*",12],["pixhost.*",13],["vipbox.*",14],["telerium.*",15],["apex2nova.com",15],["hoca5.com",15],["germancarforum.com",16],["cybercityhelp.in",16],["innateblogger.com",16],["omeuemprego.online",16],["viprow.*",[17,18,68]],["bluemediadownload.*",17],["bluemediafile.*",17],["bluemedialink.*",17],["bluemediastorage.*",17],["bluemediaurls.*",17],["urlbluemedia.*",17],["bowfile.com",17],["cloudvideo.tv",[17,68]],["cloudvideotv.*",[17,68]],["coloredmanga.com",17],["exeo.app",17],["hiphopa.net",[17,18]],["megaup.net",17],["olympicstreams.co",[17,68]],["tv247.us",[17,18]],["uploadhaven.com",17],["userscloud.com",[17,68]],["streamnoads.com",[17,18,68,87]],["mlbbox.me",17],["vikingf1le.us.to",17],["neodrive.xyz",17],["mdfx9dc8n.net",18],["mdzsmutpcvykb.net",18],["mixdrop21.net",18],["mixdropjmk.pw",18],["123-movies.*",18],["123movieshd.*",18],["123movieshub.*",18],["123moviesme.*",18],["1337x.ninjaproxy1.com",18],["141jav.com",18],["141tube.com",18],["1bit.space",18],["1bitspace.com",18],["1stream.*",18],["1tamilmv.*",18],["2ddl.*",18],["2umovies.*",18],["3dporndude.com",18],["3hiidude.*",18],["4archive.org",18],["4horlover.com",18],["4stream.*",18],["560pmovie.com",18],["5movies.*",18],["7hitmovies.*",18],["85tube.com",18],["85videos.com",18],["9xmovie.*",18],["aagmaal.*",[18,68]],["acefile.co",18],["actusports.eu",18],["adblockeronstape.*",[18,87]],["adblockeronstreamtape.*",18],["adblockplustape.*",[18,87]],["adblockstreamtape.*",[18,87]],["adblockstrtape.*",[18,87]],["adblockstrtech.*",[18,87]],["adblocktape.*",[18,87]],["adclickersbot.com",18],["adcorto.*",18],["adricami.com",18],["adslink.pw",18],["adultstvlive.com",18],["adz7short.space",18],["aeblender.com",18],["affordwonder.net",18],["ahdafnews.blogspot.com",18],["aiblog.tv",[18,71]],["ak47sports.com",18],["akuma.moe",18],["alexsports.*",18],["alexsportss.*",18],["alexsportz.*",18],["allplayer.tk",18],["amateurblog.tv",[18,71]],["androidadult.com",[18,235]],["anhsexjav.xyz",18],["anidl.org",18],["anime-loads.org",18],["animeblkom.net",18],["animefire.plus",18],["animelek.me",18],["animepahe.*",18],["animesanka.*",18],["animesorionvip.net",18],["animespire.net",18],["animestotais.xyz",18],["animeyt.es",18],["animixplay.*",18],["aniplay.*",18],["anroll.net",18],["antiadtape.*",[18,87]],["anymoviess.xyz",18],["aotonline.org",18],["asenshu.com",18],["asialiveaction.com",18],["asianclipdedhd.net",18],["asianclub.*",18],["ask4movie.*",18],["askim-bg.com",18],["asumsikedaishop.com",18],["atomixhq.*",[18,68]],["atomohd.*",18],["avcrempie.com",18],["avseesee.com",18],["gettapeads.com",[18,87]],["bajarjuegospcgratis.com",18],["balkanteka.net",18],["beinmatch.*",[18,27]],["belowporn.com",18],["bestgirlsexy.com",18],["bestnhl.com",18],["bestporn4free.com",18],["bestporncomix.com",18],["bet36.es",18],["bgwp.cc",[18,23]],["bhaai.*",18],["bigwarp.*",18],["bikinbayi.com",18],["bikinitryon.net",18],["birdurls.com",18],["bitsearch.to",18],["blackcockadventure.com",18],["blackcockchurch.org",18],["blackporncrazy.com",18],["blizzboygames.net",18],["blizzpaste.com",18],["blkom.com",18],["blog-peliculas.com",18],["blogtrabalhista.com",18],["blurayufr.*",18],["bobsvagene.club",18],["bokep.im",18],["bokep.top",18],["boyfuck.me",18],["brilian-news.id",18],["brupload.net",18],["buffstreams.*",18],["buzter.xyz",18],["caitlin.top",18],["camchickscaps.com",18],["camgirls.casa",18],["canalesportivo.*",18],["cashurl.in",18],["catchthrust.net",18],["ccurl.net",[18,68]],["celebrity-leaks.net",18],["cgpelis.net",18],["charexempire.com",18],["clickndownload.*",18],["clicknupload.*",[18,70]],["clik.pw",18],["coin-free.com",[18,37]],["coins100s.fun",18],["comohoy.com",18],["compucalitv.com",18],["coolcast2.com",18],["coreradio.online",18],["cosplaytab.com",18],["countylocalnews.com",18],["cpmlink.net",18],["crackstreamshd.click",18],["crespomods.com",18],["crisanimex.com",18],["crunchyscan.fr",18],["cuevana3.fan",18],["cuevana3hd.com",18],["cumception.com",18],["cutpaid.com",18],["daddylive.*",[18,68,207]],["daddylivehd.*",[18,68]],["dailyuploads.net",18],["datawav.club",18],["daughtertraining.com",18],["ddrmovies.*",18],["deepgoretube.site",18],["deltabit.co",18],["deporte-libre.top",18],["depvailon.com",18],["derleta.com",18],["desiremovies.*",18],["desivdo.com",18],["desixx.net",18],["detikkebumen.com",18],["deutschepornos.me",18],["devlib.*",18],["diasoft.xyz",18],["directupload.net",18],["divxtotal.*",18],["divxtotal1.*",18],["dixva.com",18],["dlhd.*",18],["doctormalay.com",18],["dofusports.xyz",18],["doods.cam",18],["doodskin.lat",18],["downloadrips.com",18],["downvod.com",18],["dphunters.mom",18],["dragontranslation.com",18],["dvdfullestrenos.com",18],["dvdplay.*",[18,68]],["ebookbb.com",18],["ebookhunter.net",18],["egyanime.com",18],["egygost.com",18],["ekasiwap.com",18],["electro-torrent.pl",18],["elixx.*",18],["enjoy4k.*",18],["eplayer.click",18],["erovoice.us",18],["eroxxx.us",18],["estrenosdoramas.net",18],["estrenosflix.*",18],["estrenosflux.*",18],["estrenosgo.*",18],["everia.club",18],["everythinginherenet.blogspot.com",18],["extratorrent.st",18],["extremotvplay.com",18],["f1stream.*",18],["fapinporn.com",18],["fapptime.com",18],["fastreams.live",18],["faucethero.com",18],["favoyeurtube.net",18],["fbstream.*",18],["fc2db.com",18],["femdom-joi.com",18],["fenixsite.net",18],["file4go.*",18],["filegram.to",[18,66,71]],["fileone.tv",18],["film1k.com",18],["filmeonline2023.net",18],["filmesonlinex.org",18],["filmesonlinexhd.biz",[18,68]],["filmisub.cc",18],["filmovitica.com",18],["filmymaza.blogspot.com",18],["filmyzilla.*",[18,68]],["filthy.family",18],["findav.*",18],["findporn.*",18],["flickzap.com",18],["flixmaza.*",18],["flizmovies.*",18],["flostreams.xyz",18],["flyfaucet.com",18],["footyhunter.lol",18],["forex-trnd.com",18],["forumchat.club",18],["forumlovers.club",18],["freeomovie.co.in",18],["freeomovie.to",18],["freeporncomic.net",18],["freepornhdonlinegay.com",18],["freeproxy.io",18],["freeshot.live",18],["freetvsports.*",18],["freeuse.me",18],["freeusexporn.com",18],["fsharetv.cc",18],["fsicomics.com",18],["fullymaza.*",18],["g-porno.com",18],["g-streaming.com",18],["g3g.*",18],["galinhasamurai.com",18],["gamepcfull.com",18],["gameronix.com",18],["gamesmountain.com",18],["gamesrepacks.com",18],["gamingguru.fr",18],["gamovideo.com",18],["garota.cf",18],["gaydelicious.com",18],["gaypornhdfree.com",18],["gaypornhot.com",18],["gaypornmasters.com",18],["gaysex69.net",18],["gemstreams.com",18],["get-to.link",18],["girlscanner.org",18],["giurgiuveanul.ro",18],["gledajcrtace.xyz",18],["gocast2.com",18],["gomo.to",18],["gostosa.cf",18],["gotxx.*",18],["grantorrent.*",18],["gratispaste.com",18],["gravureblog.tv",[18,71]],["haho.moe",18],["hayhd.net",18],["hdmoviesfair.*",[18,68]],["hdmoviesflix.*",18],["hdpornflix.com",18],["hdsaprevodom.com",18],["hdstreamss.club",18],["hentaiporno.xxx",18],["hentais.tube",18],["hentaistream.co",18],["hentaitk.net",18],["hentaitube.online",18],["hentaiworld.tv",18],["hesgoal.tv",18],["hexupload.net",18],["hhkungfu.tv",18],["highlanderhelp.com",18],["hiidudemoviez.*",18],["hindimovies.to",[18,68]],["hindimoviestv.com",18],["hiperdex.com",18],["hispasexy.org",18],["hitprn.com",18],["hivflix.me",18],["hoca4u.com",18],["hollymoviehd.cc",18],["hoodsite.com",18],["hopepaste.download",18],["hornylips.com",18],["hotgranny.live",18],["hotmama.live",18],["hqcelebcorner.net",18],["huren.best",18],["hwnaturkya.com",[18,68]],["hxfile.co",[18,68]],["igfap.com",18],["iklandb.com",18],["illink.net",18],["imgsen.*",18],["imgsex.xyz",18],["imgsto.*",18],["imgtraffic.com",18],["imx.to",18],["incest.*",18],["incestflix.*",18],["influencersgonewild.org",18],["infosgj.free.fr",18],["investnewsbrazil.com",18],["itdmusics.com",18],["itopmusic.*",18],["itsuseful.site",18],["itunesfre.com",18],["iwatchfriendsonline.net",[18,141]],["japangaysex.com",18],["jav-fun.cc",18],["jav-noni.cc",18],["javboys.tv",18],["javcl.com",18],["javf.net",18],["javhay.net",18],["javhoho.com",18],["javhun.com",18],["javleak.com",18],["javmost.*",18],["javporn.best",18],["javsek.net",18],["javsex.to",18],["javtiful.com",[18,20]],["jimdofree.com",18],["jiofiles.org",18],["jorpetz.com",18],["jp-films.com",18],["jpop80ss3.blogspot.com",18],["jpopsingles.eu",[18,185]],["kantotflix.net",18],["kantotinyo.com",18],["kaoskrew.org",18],["kaplog.com",18],["keeplinks.*",18],["keepvid.*",18],["keralahd.*",18],["keralatvbox.com",18],["khatrimazaful.*",18],["khatrimazafull.*",[18,71]],["kickassanimes.io",18],["kimochi.info",18],["kimochi.tv",18],["kinemania.tv",18],["kissasian.*",18],["koltry.life",18],["konstantinova.net",18],["koora-online.live",18],["kunmanga.com",18],["kwithsub.com",18],["lat69.me",18],["latinblog.tv",[18,71]],["latinomegahd.net",18],["leechall.*",18],["leechpremium.link",18],["legendas.dev",18],["legendei.net",18],["lighterlegend.com",18],["linclik.com",18],["linkebr.com",18],["linkrex.net",18],["linkshorts.*",18],["lulu.st",18],["lulustream.com",[18,70]],["lulustream.live",18],["luluvdo.com",18],["luluvdoo.com",18],["mangagenki.me",18],["mangahere.onl",18],["mangaweb.xyz",18],["mangoporn.net",18],["mangovideo.*",18],["manhwahentai.me",18],["masahub.com",18],["masahub.net",18],["masaporn.*",18],["maturegrannyfuck.com",18],["mdy48tn97.com",18],["mediapemersatubangsa.com",18],["mega-mkv.com",18],["megapastes.com",18],["megapornpics.com",18],["messitv.net",18],["meusanimes.net",18],["milfmoza.com",18],["milfnut.*",18],["milfzr.com",18],["millionscast.com",18],["mimaletamusical.blogspot.com",18],["miniurl.*",18],["mirrorace.*",18],["mitly.us",18],["mixdroop.*",18],["mixixxx000000.cyou",18],["mkv-pastes.com",18],["mkvcage.*",18],["mlbstream.*",18],["mlsbd.*",18],["mmsbee.*",18],["monaskuliner.ac.id",18],["moredesi.com",18],["motogpstream.*",18],["movgotv.net",18],["movi.pk",18],["movieplex.*",18],["movierulzlink.*",18],["movies123.*",18],["moviesflix.*",18],["moviesmeta.*",18],["moviesmod.com.pl",18],["moviessources.*",18],["moviesverse.*",18],["movieswbb.com",18],["moviewatch.com.pk",18],["moviezwaphd.*",18],["mp4upload.com",18],["mrskin.live",18],["mrunblock.*",18],["multicanaistv.com",18],["mundowuxia.com",18],["myeasymusic.ir",18],["myonvideo.com",18],["myyouporn.com",18],["mzansifun.com",18],["narutoget.info",18],["naughtypiss.com",18],["nbastream.*",18],["nekopoi.*",[18,71]],["nerdiess.com",18],["netfuck.net",18],["new-fs.eu",18],["newmovierulz.*",18],["newtorrentgame.com",18],["neymartv.net",18],["nflstream.*",18],["nflstreams.me",18],["nhlstream.*",18],["nicekkk.com",18],["nicesss.com",18],["nlegs.com",18],["noblocktape.*",[18,87]],["nocensor.*",18],["noni-jav.com",18],["notformembersonly.com",18],["novamovie.net",18],["novelpdf.xyz",18],["novelssites.com",[18,68]],["novelup.top",18],["nsfwr34.com",18],["nu6i-bg-net.com",18],["nudebabesin3d.com",18],["nzbstars.com",18],["o2tvseries.com",18],["ohjav.com",18],["ojearnovelas.com",18],["okanime.xyz",18],["olweb.tv",18],["on9.stream",18],["onepiece-mangaonline.com",18],["onifile.com",18],["onionstream.live",18],["onlinesaprevodom.net",18],["onlyfams.*",18],["onlyfullporn.video",18],["onplustv.live",18],["originporn.com",18],["ouo.*",18],["ovagames.com",18],["palimas.org",18],["password69.com",18],["pastemytxt.com",18],["payskip.org",18],["pctfenix.*",[18,68]],["pctnew.*",[18,68]],["peeplink.in",18],["peliculas24.*",18],["peliculasmx.net",18],["pelisflix20.*",18],["pelisplus.*",18],["pencarian.link",18],["pendidikandasar.net",18],["pervertgirlsvideos.com",18],["pervyvideos.com",18],["phim12h.com",18],["picdollar.com",18],["picsxxxporn.com",18],["pinayscandalz.com",18],["pinkueiga.net",18],["piratebay.*",18],["piratefast.xyz",18],["piratehaven.xyz",18],["pirateiro.com",18],["playtube.co.za",18],["plugintorrent.com",18],["plyjam.*",18],["plylive.*",18],["plyvdo.*",18],["pmvzone.com",18],["porndish.com",18],["pornez.net",18],["pornfetishbdsm.com",18],["pornfits.com",18],["pornhd720p.com",18],["pornhoarder.*",[18,228]],["pornobr.club",18],["pornobr.ninja",18],["pornodominicano.net",18],["pornofaps.com",18],["pornoflux.com",18],["pornotorrent.com.br",18],["pornredit.com",18],["pornstarsyfamosas.es",18],["pornstreams.co",18],["porntn.com",18],["pornxbit.com",18],["pornxday.com",18],["portaldasnovinhas.shop",18],["portugues-fcr.blogspot.com",18],["poseyoung.com",18],["pover.org",18],["prbay.*",18],["projectfreetv.*",18],["proxybit.*",18],["proxyninja.org",18],["psarips.*",18],["pubfilmz.com",18],["publicsexamateurs.com",18],["punanihub.com",18],["pxxbay.com",18],["r18.best",18],["racaty.*",18],["ragnaru.net",18],["rapbeh.net",18],["rapelust.com",18],["rapload.org",18],["read-onepiece.net",18],["readhunters.xyz",18],["remaxhd.*",18],["reshare.pm",18],["retro-fucking.com",18],["retrotv.org",18],["rintor.*",18],["rnbxclusive.*",18],["rnbxclusive0.*",18],["rnbxclusive1.*",18],["robaldowns.com",18],["rockdilla.com",18],["rojadirecta.*",18],["rojadirectaenvivo.*",18],["rojitadirecta.blogspot.com",18],["romancetv.site",18],["rsoccerlink.site",18],["rugbystreams.*",18],["rule34.club",18],["rule34hentai.net",18],["rumahbokep-id.com",18],["sadisflix.*",18],["safego.cc",18],["safetxt.*",18],["sakurafile.com",18],["samax63.lol",18],["satoshi-win.xyz",18],["savefiles.com",[18,66]],["scat.gold",18],["scatfap.com",18],["scatkings.com",18],["scnlog.me",18],["scripts-webmasters.net",18],["serie-turche.com",18],["serijefilmovi.com",18],["sexcomics.me",18],["sexdicted.com",18],["sexgay18.com",18],["sexiezpix.com",18],["sexofilm.co",18],["sextgem.com",18],["sextubebbw.com",18],["sgpics.net",18],["shadowrangers.*",18],["shadowrangers.live",18],["shahee4u.cam",18],["shahi4u.*",18],["shahid4u1.*",18],["shahid4uu.*",18],["shahiid-anime.net",18],["shavetape.*",18],["shemale6.com",18],["shid4u.*",18],["shinden.pl",18],["short.es",18],["shortearn.*",18],["shorten.*",18],["shorttey.*",18],["shortzzy.*",18],["showmanga.blog.fc2.com",18],["shrt10.com",18],["sideplusleaks.net",18],["silverblog.tv",[18,71]],["silverpic.com",18],["sinhalasub.life",18],["sinsitio.site",18],["sinvida.me",18],["skidrowcpy.com",18],["skymovieshd.*",18],["slut.mom",18],["smallencode.me",18],["smoner.com",18],["smplace.com",18],["soccerinhd.com",[18,68]],["socceron.name",18],["socceronline.*",[18,68]],["socialblog.tv",[18,71]],["softairbay.com",18],["softarchive.*",18],["sokobj.com",18],["songsio.com",18],["souexatasmais.com",18],["sportbar.live",18],["sports-stream.*",18],["sportstream1.cfd",18],["sporttuna.*",18],["srt.am",18],["srts.me",18],["sshhaa.*",18],["stapadblockuser.*",[18,87]],["stape.*",[18,87]],["stapewithadblock.*",18],["starblog.tv",[18,71]],["starmusiq.*",18],["stbemuiptv.com",18],["stockingfetishvideo.com",18],["strcloud.*",[18,87]],["stream.crichd.vip",18],["stream.lc",18],["stream25.xyz",18],["streamadblocker.*",[18,68,87]],["streamadblockplus.*",[18,87]],["streambee.to",18],["streambucket.net",18],["streamcdn.*",18],["streamcenter.pro",18],["streamers.watch",18],["streamgo.to",18],["streamhub.*",18],["streamingclic.com",18],["streamkiste.tv",18],["streamoupload.xyz",18],["streamservicehd.click",18],["streamsport.*",18],["streamta.*",[18,87]],["streamtape.*",[18,71,87]],["streamtapeadblockuser.*",[18,87]],["streamvid.net",[18,28]],["strikeout.*",[18,70]],["strtape.*",[18,87]],["strtapeadblock.*",[18,87]],["strtapeadblocker.*",[18,87]],["strtapewithadblock.*",18],["strtpe.*",[18,87]],["subtitleporn.com",18],["subtitles.cam",18],["suicidepics.com",18],["supertelevisionhd.com",18],["supexfeeds.com",18],["swatchseries.*",18],["swiftload.io",18],["swipebreed.net",18],["swzz.xyz",18],["sxnaar.com",18],["tabooflix.*",18],["taboosex.club",18],["tapeantiads.com",[18,87]],["tapeblocker.com",[18,87]],["tapenoads.com",[18,87]],["tapewithadblock.org",[18,87,268]],["teamos.xyz",18],["teen-wave.com",18],["teenporncrazy.com",18],["telegramgroups.xyz",18],["telenovelasweb.com",18],["tennisstreams.*",18],["tensei-shitara-slime-datta-ken.com",18],["tfp.is",18],["tgo-tv.co",[18,68]],["thaihotmodels.com",18],["theblueclit.com",18],["thebussybandit.com",18],["thedaddy.*",[18,207]],["thelastdisaster.vip",18],["themoviesflix.*",18],["thepiratebay.*",18],["thepiratebay0.org",18],["thepiratebay10.info",18],["thesexcloud.com",18],["thothub.today",18],["tightsexteens.com",18],["tlnovelas.net",18],["tmearn.*",18],["tojav.net",18],["tokusatsuindo.com",18],["toonanime.*",18],["top16.net",18],["topdrama.net",18],["topvideosgay.com",18],["torlock.*",18],["tormalayalam.*",18],["torrage.info",18],["torrents.vip",18],["torrentz2eu.*",18],["torrsexvid.com",18],["tpb-proxy.xyz",18],["trannyteca.com",18],["trendytalker.com",18],["tuktukcinma.com",18],["tumanga.net",18],["turbogvideos.com",18],["turboimagehost.com",18],["turbovid.me",18],["turkishseriestv.org",18],["turksub24.net",18],["tutele.sx",18],["tutelehd.*",18],["tvglobe.me",18],["tvpclive.com",18],["tvply.*",18],["tvs-widget.com",18],["tvseries.video",18],["u4m.*",18],["ucptt.com",18],["ufaucet.online",18],["ufcfight.online",18],["ufcstream.*",18],["ultrahorny.com",18],["ultraten.net",18],["unblocknow.*",18],["unblockweb.me",18],["underhentai.net",18],["uniqueten.net",18],["uns.bio",18],["upbaam.com",18],["uploadbuzz.*",18],["upstream.to",18],["usagoals.*",18],["valhallas.click",[18,140]],["valeriabelen.com",18],["verdragonball.online",18],["vexmoviex.*",18],["vfxmed.com",18],["vidclouds.*",18],["video.az",18],["videostreaming.rocks",18],["videowood.tv",18],["vidlox.*",18],["vidorg.net",18],["vidtapes.com",18],["vidz7.com",18],["vikistream.com",18],["vinovo.to",18],["vipboxtv.*",[18,68]],["vipleague.*",[18,231]],["virpe.cc",18],["visifilmai.org",18],["viveseries.com",18],["vladrustov.sx",18],["volokit2.com",[18,207]],["vstorrent.org",18],["w-hentai.com",18],["watch-series.*",18],["watchbrooklynnine-nine.com",18],["watchelementaryonline.com",18],["watchjavidol.com",18],["watchkobestreams.info",18],["watchlostonline.net",18],["watchmodernfamilyonline.com",18],["watchmonkonline.com",18],["watchrulesofengagementonline.com",18],["watchseries.*",18],["webcamrips.com",18],["wincest.xyz",18],["wolverdon.fun",18],["wordcounter.icu",18],["worldmovies.store",18],["worldstreams.click",18],["wpdeployit.com",18],["wqstreams.tk",18],["wwwsct.com",18],["xanimeporn.com",18],["xblog.tv",[18,71]],["xclusivejams.*",18],["xmoviesforyou.*",18],["xn--verseriesespaollatino-obc.online",18],["xpornium.net",18],["xsober.com",18],["xvip.lat",18],["xxgasm.com",18],["xxvideoss.org",18],["xxx18.uno",18],["xxxdominicana.com",18],["xxxfree.watch",18],["xxxmax.net",18],["xxxwebdlxxx.top",18],["xxxxvideo.uno",18],["yabai.si",18],["yeshd.net",18],["youdbox.*",18],["youjax.com",18],["yourdailypornvideos.ws",18],["yourupload.com",18],["youswear.com",18],["ytmp3eu.*",18],["yts-subs.*",18],["yts.*",18],["ytstv.me",18],["yumeost.net",18],["zerion.cc",18],["zerocoin.top",18],["zitss.xyz",18],["zooqle.*",18],["zpaste.net",18],["fastreams.com",18],["sky-sports.store",18],["streamsoccer.site",18],["tntsports.store",18],["wowstreams.co",18],["dutchycorp.*",19],["faucet.ovh",19],["mmacore.tv",20],["nxbrew.net",20],["brawlify.com",20],["oko.sh",21],["variety.com",[22,78]],["gameskinny.com",22],["deadline.com",[22,78]],["mlive.com",[22,78]],["doujindesu.*",23],["atlasstudiousa.com",23],["51bonusrummy.in",[23,71]],["washingtonpost.com",24],["gosexpod.com",25],["sexo5k.com",26],["truyen-hentai.com",26],["theshedend.com",28],["zeroupload.com",28],["securenetsystems.net",28],["miniwebtool.com",28],["bchtechnologies.com",28],["eracast.cc",28],["flatai.org",28],["leeapk.com",28],["spiegel.de",29],["jacquieetmichel.net",30],["hausbau-forum.de",31],["althub.club",31],["kiemlua.com",31],["tea-coffee.net",32],["spatsify.com",32],["newedutopics.com",32],["getviralreach.in",32],["edukaroo.com",32],["funkeypagali.com",32],["careersides.com",32],["nayisahara.com",32],["wikifilmia.com",32],["infinityskull.com",32],["viewmyknowledge.com",32],["iisfvirtual.in",32],["starxinvestor.com",32],["jkssbalerts.com",32],["imagereviser.com",33],["labgame.io",[34,35]],["kenzo-flowertag.com",36],["mdn.lol",36],["btcbitco.in",37],["btcsatoshi.net",37],["cempakajaya.com",37],["crypto4yu.com",37],["manofadan.com",37],["readbitcoin.org",37],["wiour.com",37],["tremamnon.com",37],["bitsmagic.fun",37],["ourcoincash.xyz",37],["aylink.co",38],["sugarona.com",39],["nishankhatri.xyz",39],["cety.app",40],["exe-urls.com",40],["exego.app",40],["cutlink.net",40],["cutyurls.com",40],["cutty.app",40],["cutnet.net",40],["jixo.online",40],["tinys.click",41],["loan.creditsgoal.com",41],["rupyaworld.com",41],["vahantoday.com",41],["techawaaz.in",41],["loan.bgmi32bitapk.in",41],["formyanime.com",41],["gsm-solution.com",41],["h-donghua.com",41],["hindisubbedacademy.com",41],["hm4tech.info",41],["mydverse.*",41],["panelprograms.blogspot.com",41],["ripexbooster.xyz",41],["serial4.com",41],["tutorgaming.com",41],["everydaytechvams.com",41],["dipsnp.com",41],["cccam4sat.com",41],["diendancauduong.com",41],["zeemoontv-24.blogspot.com",41],["stitichsports.com",41],["aiimgvlog.fun",42],["appsbull.com",43],["diudemy.com",43],["maqal360.com",43],["androjungle.com",43],["bookszone.in",43],["shortix.co",43],["makefreecallsonline.com",43],["msonglyrics.com",43],["app-sorteos.com",43],["bokugents.com",43],["client.pylexnodes.net",43],["btvplus.bg",43],["listar-mc.net",43],["blog24.me",[44,45]],["coingraph.us",46],["impact24.us",46],["iconicblogger.com",47],["auto-crypto.click",47],["tpi.li",48],["oii.la",[48,70]],["shrinke.*",49],["shrinkme.*",49],["smutty.com",49],["e-sushi.fr",49],["gayforfans.com",49],["freeadultcomix.com",49],["down.dataaps.com",49],["filmweb.pl",[49,180]],["livecamrips.*",49],["safetxt.net",49],["filespayouts.com",49],["atglinks.com",50],["kbconlinegame.com",51],["hamrojaagir.com",51],["odijob.com",51],["stfly.biz",52],["airevue.net",52],["atravan.net",52],["simana.online",53],["fooak.com",53],["joktop.com",53],["evernia.site",53],["falpus.com",53],["rfiql.com",54],["gujjukhabar.in",54],["smartfeecalculator.com",54],["djxmaza.in",54],["thecubexguide.com",54],["jytechs.in",54],["financacerta.com",55],["encurtads.net",55],["mastkhabre.com",56],["weshare.is",57],["rokni.xyz",58],["keedabankingnews.com",58],["pig69.com",58],["cosplay18.pics",[58,256]],["3dsfree.org",59],["alpin.de",60],["boersennews.de",60],["chefkoch.de",60],["chip.de",60],["clever-tanken.de",60],["desired.de",60],["donnerwetter.de",60],["fanfiktion.de",60],["focus.de",60],["formel1.de",60],["frustfrei-lernen.de",60],["gewinnspiele.tv",60],["giga.de",60],["gut-erklaert.de",60],["kino.de",60],["messen.de",60],["nickles.de",60],["nordbayern.de",60],["spielfilm.de",60],["teltarif.de",[60,61]],["unsere-helden.com",60],["weltfussball.at",60],["watson.de",60],["mactechnews.de",60],["sport1.de",60],["welt.de",60],["sport.de",60],["allthingsvegas.com",62],["100percentfedup.com",62],["beforeitsnews.com",62],["concomber.com",62],["conservativefiringline.com",62],["dailylol.com",62],["funnyand.com",62],["letocard.fr",62],["mamieastuce.com",62],["meilleurpronostic.fr",62],["patriotnationpress.com",62],["toptenz.net",62],["vitamiiin.com",62],["writerscafe.org",62],["populist.press",62],["dailytruthreport.com",62],["livinggospeldaily.com",62],["first-names-meanings.com",62],["welovetrump.com",62],["thehayride.com",62],["thelibertydaily.com",62],["thepoke.co.uk",62],["thepolitistick.com",62],["theblacksphere.net",62],["shark-tank.com",62],["naturalblaze.com",62],["greatamericanrepublic.com",62],["dailysurge.com",62],["truthlion.com",62],["flagandcross.com",62],["westword.com",62],["republicbrief.com",62],["freedomfirstnetwork.com",62],["phoenixnewtimes.com",62],["designbump.com",62],["clashdaily.com",62],["madworldnews.com",62],["reviveusa.com",62],["sonsoflibertymedia.com",62],["thedesigninspiration.com",62],["videogamesblogger.com",62],["protrumpnews.com",62],["thepalmierireport.com",62],["kresy.pl",62],["thepatriotjournal.com",62],["thegatewaypundit.com",62],["wltreport.com",62],["miaminewtimes.com",62],["politicalsignal.com",62],["rightwingnews.com",62],["bigleaguepolitics.com",62],["comicallyincorrect.com",62],["upornia.com",63],["pillowcase.su",64],["akaihentai.com",65],["cine-calidad.*",65],["fastpic.org",[65,71]],["veryfreeporn.com",65],["pornoenspanish.es",65],["theporngod.com",65],["besthdgayporn.com",66],["drivenime.com",66],["erothots1.com",66],["javup.org",66],["shemaleup.net",66],["transflix.net",66],["worthcrete.com",66],["hentaihere.com",67],["player.smashy.stream",67],["player.smashystream.com",67],["123movies.*",68],["123moviesla.*",68],["123movieweb.*",68],["2embed.*",68],["9xmovies.*",68],["adsh.cc",68],["adshort.*",68],["afilmyhouse.blogspot.com",68],["ak.sv",68],["allmovieshub.*",68],["api.webs.moe",68],["apkmody.io",68],["asianplay.*",68],["atishmkv.*",68],["backfirstwo.site",68],["bflix.*",68],["crazyblog.in",68],["cricstream.*",68],["crictime.*",68],["cuervotv.me",68],["divicast.com",68],["dood.*",[68,186]],["dooood.*",[68,186]],["embed.meomeo.pw",68],["extramovies.*",68],["faselhd.*",68],["faselhds.*",68],["filemoon.*",68],["filmeserialeonline.org",68],["filmy.*",68],["filmyhit.*",68],["filmywap.*",68],["flexyhit.com",68],["fmovies.*",68],["foreverwallpapers.com",68],["french-streams.cc",68],["gdplayer.*",68],["goku.*",68],["gomovies.*",68],["gowatchseries.*",68],["hdfungamezz.*",68],["hdtoday.to",68],["hinatasoul.com",68],["hindilinks4u.*",68],["hurawatch.*",[68,214]],["igg-games.com",68],["infinityscans.net",68],["jalshamoviezhd.*",68],["livecricket.*",68],["mangareader.to",68],["mgnetu.com",68],["mhdsport.*",68],["mkvcinemas.*",68],["movies2watch.*",68],["moviespapa.*",68],["mp3juice.info",68],["mp4moviez.*",68],["mydownloadtube.*",68],["myflixerz.to",68],["nowmetv.net",68],["nowsportstv.com",68],["nuroflix.*",68],["nxbrew.com",68],["o2tvseries.*",68],["o2tvseriesz.*",68],["oii.io",68],["paidshitforfree.com",68],["pepperlive.info",68],["pirlotv.*",68],["playertv.net",68],["poscitech.*",68],["primewire.*",68],["redecanais.*",68],["roystream.com",68],["rssing.com",68],["s.to",68],["serienstream.*",68],["sflix.*",68],["shahed4u.*",68],["shaheed4u.*",68],["share.filesh.site",68],["sharkfish.xyz",68],["skidrowcodex.net",68],["smartermuver.com",68],["speedostream.*",68],["sportcast.*",68],["sportskart.*",68],["stream4free.live",68],["streamingcommunity.*",[68,70,107]],["tamilarasan.*",68],["tamilfreemp3songs.*",68],["tamilmobilemovies.in",68],["tamilprinthd.*",68],["tapeadsenjoyer.com",[68,87]],["thewatchseries.live",68],["tnmusic.in",68],["torrentdosfilmes.*",68],["travelplanspro.com",68],["tubemate.*",68],["tusfiles.com",68],["tutlehd4.com",68],["twstalker.com",68],["uploadrar.*",68],["uqload.*",68],["vid-guard.com",68],["vidcloud9.*",68],["vido.*",68],["vidoo.*",68],["vidsaver.net",68],["vidspeeds.com",68],["viralitytoday.com",68],["voiranime.stream",68],["vudeo.*",68],["vumoo.*",68],["watchdoctorwhoonline.com",68],["watchomovies.*",[68,104]],["watchserie.online",68],["woxikon.in",68],["www-y2mate.com",68],["yesmovies.*",68],["ylink.bid",68],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",68],["kickassanime.*",69],["11xmovies.*",70],["cinego.tv",70],["dokoembed.pw",70],["ev01.to",70],["fojik.*",70],["fstream365.com",70],["fzmovies.*",70],["linkz.*",70],["minoplres.xyz",70],["mostream.us",70],["moviedokan.*",70],["myflixer.*",70],["prmovies.*",70],["readcomiconline.li",70],["s3embtaku.pro",70],["sflix2.to",70],["sportshub.stream",70],["streamblasters.*",70],["topcinema.cam",70],["webxzplay.cfd",70],["zonatmo.com",70],["animesaturn.cx",70],["filecrypt.*",70],["hunterscomics.com",70],["aniwave.uk",70],["dojing.net",71],["krx18.com",71],["loadx.ws",71],["mangaforfree.com",71],["pornx.to",71],["savefiles.*",[71,247]],["streampoi.com",71],["strmup.to",[71,140]],["up4stream.com",[71,104]],["ups2up.fun",[71,104]],["videq.stream",71],["xmegadrive.com",71],["rahim-soft.com",71],["x-video.tube",71],["rubystm.com",71],["rubyvid.com",71],["rubyvidhub.com",71],["stmruby.com",71],["streamruby.com",71],["poophd.cc",71],["windowsreport.com",71],["fuckflix.click",71],["celebzcircle.com",72],["bi-girl.net",72],["ftuapps.*",72],["hentaiseason.com",72],["hoodtrendspredict.com",72],["marcialhub.xyz",72],["odiadance.com",72],["osteusfilmestuga.online",72],["ragnarokscanlation.opchapters.com",72],["sampledrive.org",72],["showflix.*",72],["swordalada.org",72],["tvappapk.com",72],["twobluescans.com",[72,73]],["varnascan.xyz",72],["hallofseries.com",74],["luciferdonghua.in",74],["truyentranhfull.net",74],["fcportables.com",74],["repack-games.com",74],["ibooks.to",74],["blog.tangwudi.com",74],["filecatchers.com",74],["babaktv.com",74],["samchui.com",75],["sandrarose.com",75],["sherdog.com",75],["sidereel.com",75],["silive.com",75],["simpleflying.com",75],["sloughexpress.co.uk",75],["spacenews.com",75],["sportsgamblingpodcast.com",75],["spotofteadesigns.com",75],["stacysrandomthoughts.com",75],["ssnewstelegram.com",75],["superherohype.com",[75,78]],["tablelifeblog.com",75],["thebeautysection.com",75],["thecelticblog.com",75],["thecurvyfashionista.com",75],["thefashionspot.com",75],["thegamescabin.com",75],["thenerdyme.com",75],["thenonconsumeradvocate.com",75],["theprudentgarden.com",75],["thethings.com",75],["timesnews.net",75],["topspeed.com",75],["toyotaklub.org.pl",75],["travelingformiles.com",75],["tutsnode.org",75],["viralviralvideos.com",75],["wannacomewith.com",75],["wimp.com",[75,78]],["windsorexpress.co.uk",75],["woojr.com",75],["worldoftravelswithkids.com",75],["worldsurfleague.com",75],["cheatsheet.com",76],["pwinsider.com",76],["c-span.org",77],["15min.lt",78],["247sports.com",78],["abc17news.com",78],["agrodigital.com",78],["al.com",78],["aliontherunblog.com",78],["allaboutthetea.com",78],["allmovie.com",78],["allmusic.com",78],["allthingsthrifty.com",78],["amessagewithabottle.com",78],["artforum.com",78],["artnews.com",78],["awkward.com",78],["barcablaugranes.com",78],["barnsleychronicle.com",78],["bethcakes.com",78],["betweenenglandandiowa.com",78],["bgr.com",78],["blazersedge.com",78],["blogher.com",78],["blu-ray.com",78],["bluegraygal.com",78],["briefeguru.de",78],["brobible.com",78],["cagesideseats.com",78],["cbsnews.com",78],["cbssports.com",[78,252]],["celiacandthebeast.com",78],["chaptercheats.com",78],["cleveland.com",78],["clickondetroit.com",78],["commercialcompetentedigitale.ro",78],["dailydot.com",78],["dailykos.com",78],["dailyvoice.com",78],["danslescoulisses.com",78],["decider.com",78],["didyouknowfacts.com",78],["dogtime.com",78],["eater.com",78],["ebaumsworld.com",78],["eldiariony.com",78],["fark.com",78],["femestella.com",78],["fmradiofree.com",78],["footwearnews.com",78],["free-power-point-templates.com",78],["freeconvert.com",78],["frogsandsnailsandpuppydogtail.com",78],["funtasticlife.com",78],["fwmadebycarli.com",78],["golfdigest.com",78],["gulflive.com",78],["hollywoodreporter.com",78],["homeglowdesign.com",78],["honeygirlsworld.com",78],["ibtimes.co.in",78],["imgur.com",78],["indiewire.com",78],["intouchweekly.com",78],["jasminemaria.com",78],["kens5.com",78],["kion546.com",78],["knowyourmeme.com",78],["last.fm",78],["lehighvalleylive.com",78],["lettyskitchen.com",78],["lifeandstylemag.com",78],["lifeinleggings.com",78],["lizzieinlace.com",78],["localnews8.com",78],["lonestarlive.com",78],["madeeveryday.com",78],["maidenhead-advertiser.co.uk",78],["mandatory.com",78],["mardomreport.net",78],["masslive.com",78],["melangery.com",78],["mmamania.com",78],["momtastic.com",78],["mostlymorgan.com",78],["motherwellmag.com",78],["musicfeeds.com.au",78],["naszemiasto.pl",78],["nationalpost.com",78],["nationalreview.com",78],["nbcsports.com",78],["news.com.au",78],["ninersnation.com",78],["nj.com",78],["nordot.app",78],["nothingbutnewcastle.com",78],["nsjonline.com",78],["nypost.com",78],["observer.com",78],["oregonlive.com",78],["pagesix.com",78],["patheos.com",78],["pennlive.com",78],["playstationlifestyle.net",78],["puckermom.com",78],["reelmama.com",78],["robbreport.com",78],["rollingstone.com",78],["royalmailchat.co.uk",78],["sbnation.com",78],["sheknows.com",78],["sneakernews.com",78],["sourcingjournal.com",78],["sport-fm.gr",78],["stylecaster.com",78],["syracuse.com",78],["tastingtable.com",78],["thecw.com",78],["thedailymeal.com",78],["theflowspace.com",78],["themarysue.com",78],["tokfm.pl",78],["torontosun.com",78],["tvline.com",78],["usmagazine.com",78],["wallup.net",78],["weather.com",78],["worldstar.com",78],["worldstarhiphop.com",78],["wwd.com",78],["yourcountdown.to",78],["automobile-catalog.com",[79,80,81]],["baseballchannel.jp",[79,80]],["hoyme.jp",79],["motorbikecatalog.com",[79,80,81]],["topstarnews.net",79],["islamicfinder.org",79],["secure-signup.net",79],["dramabeans.com",79],["dropgame.jp",[79,80]],["manta.com",79],["tportal.hr",79],["tvtropes.org",79],["convertcase.net",79],["uranai.nosv.org",80],["yakkun.com",80],["24sata.hr",80],["373news.com",80],["alc.co.jp",80],["allthetests.com",80],["animanch.com",80],["aniroleplay.com",80],["apkmirror.com",[80,184]],["areaconnect.com",80],["as-web.jp",80],["aucfree.com",80],["autoby.jp",80],["autoc-one.jp",80],["autofrage.net",80],["bab.la",80],["babla.*",80],["bien.hu",80],["carscoops.com",80],["cesoirtv.com",80],["chanto.jp.net",80],["cinetrafic.fr",80],["cocokara-next.com",80],["collinsdictionary.com",80],["computerfrage.net",80],["crosswordsolver.com",80],["cruciverba.it",80],["cults3d.com",80],["daily.co.jp",80],["dailynewshungary.com",80],["dayspedia.com",80],["dictionary.cambridge.org",80],["dictionnaire.lerobert.com",80],["dnevno.hr",80],["drweil.com",80],["dziennik.pl",80],["eigachannel.jp",80],["ev-times.com",80],["finanzfrage.net",80],["footballchannel.jp",80],["forsal.pl",80],["freemcserver.net",80],["fxstreet-id.com",80],["fxstreet-vn.com",80],["fxstreet.*",80],["game8.jp",80],["gardeningsoul.com",80],["gazetaprawna.pl",80],["gesundheitsfrage.net",80],["gifu-np.co.jp",80],["gigafile.nu",80],["globalrph.com",80],["golf-live.at",80],["grapee.jp",80],["gutefrage.net",80],["hb-nippon.com",80],["heureka.cz",80],["horairesdouverture24.fr",80],["hotcopper.co.nz",80],["hotcopper.com.au",80],["idokep.hu",80],["indiatimes.com",80],["infor.pl",80],["iza.ne.jp",80],["j-cast.com",80],["j-town.net",80],["j7p.jp",80],["jablickar.cz",80],["javatpoint.com",80],["jikayosha.jp",80],["judgehype.com",80],["kinmaweb.jp",80],["km77.com",80],["kobe-journal.com",80],["kreuzwortraetsel.de",80],["kurashinista.jp",80],["kurashiru.com",80],["kyoteibiyori.com",80],["lacuarta.com",80],["lakeshowlife.com",80],["laleggepertutti.it",80],["langenscheidt.com",80],["laposte.net",80],["lawyersgunsmoneyblog.com",80],["ldoceonline.com",80],["listentotaxman.com",80],["livenewschat.eu",80],["luremaga.jp",80],["mahjongchest.com",80],["mainichi.jp",80],["maketecheasier.com",[80,81]],["malaymail.com",80],["mamastar.jp",80],["mathplayzone.com",80],["meteo60.fr",80],["midhudsonnews.com",80],["minesweeperquest.com",80],["minkou.jp",80],["modhub.us",80],["moin.de",80],["motorradfrage.net",80],["motscroises.fr",80],["muragon.com",80],["nana-press.com",80],["natalie.mu",80],["nationaltoday.com",80],["nbadraft.net",80],["news.zerkalo.io",80],["newsinlevels.com",80],["newsweekjapan.jp",80],["niketalk.com",80],["nikkan-gendai.com",80],["nouvelobs.com",80],["nyitvatartas24.hu",80],["oeffnungszeitenbuch.de",80],["onlineradiobox.com",80],["operawire.com",80],["optionsprofitcalculator.com",80],["oraridiapertura24.it",80],["oxfordlearnersdictionaries.com",80],["palabr.as",80],["pashplus.jp",80],["persoenlich.com",80],["petitfute.com",80],["play-games.com",80],["powerpyx.com",80],["pptvhd36.com",80],["profitline.hu",80],["puzzlegarage.com",80],["quefaire.be",80],["radio-australia.org",80],["radio-osterreich.at",80],["raetsel-hilfe.de",80],["ranking.net",80],["references.be",80],["reisefrage.net",80],["relevantmagazine.com",80],["reptilesmagazine.com",80],["roleplayer.me",80],["rostercon.com",80],["samsungmagazine.eu",80],["sankei.com",80],["sanspo.com",80],["scribens.com",80],["scribens.fr",80],["slashdot.org",80],["soccerdigestweb.com",80],["solitairehut.com",80],["sourceforge.net",[80,84]],["southhemitv.com",80],["sportalkorea.com",80],["sportlerfrage.net",80],["syosetu.com",80],["szamoldki.hu",80],["talkwithstranger.com",80],["the-crossword-solver.com",80],["thedigestweb.com",80],["traicy.com",80],["transparentcalifornia.com",80],["transparentnevada.com",80],["trilltrill.jp",80],["tunebat.com",80],["tvtv.ca",80],["tvtv.us",80],["tweaktown.com",80],["twn.hu",80],["tyda.se",80],["ufret.jp",80],["uptodown.com",80],["verkaufsoffener-sonntag.com",80],["vimm.net",80],["wamgame.jp",80],["watchdocumentaries.com",80],["webdesignledger.com",80],["wetteronline.de",80],["wfmz.com",80],["winfuture.de",80],["word-grabber.com",80],["worldjournal.com",80],["wort-suchen.de",80],["woxikon.*",80],["young-machine.com",80],["yugioh-starlight.com",80],["yutura.net",80],["zagreb.info",80],["zakzak.co.jp",80],["2chblog.jp",80],["2monkeys.jp",80],["46matome.net",80],["akb48glabo.com",80],["akb48matomemory.com",80],["alfalfalfa.com",80],["all-nationz.com",80],["anihatsu.com",80],["aqua2ch.net",80],["blog.esuteru.com",80],["blog.livedoor.jp",80],["blog.jp",80],["blogo.jp",80],["chaos2ch.com",80],["choco0202.work",80],["crx7601.com",80],["danseisama.com",80],["dareda.net",80],["digital-thread.com",80],["doorblog.jp",80],["exawarosu.net",80],["fgochaldeas.com",80],["football-2ch.com",80],["gekiyaku.com",80],["golog.jp",80],["hacchaka.net",80],["heartlife-matome.com",80],["liblo.jp",80],["fesoku.net",80],["fiveslot777.com",80],["gamejksokuhou.com",80],["girlsreport.net",80],["girlsvip-matome.com",80],["grasoku.com",80],["gundamlog.com",80],["honyaku-channel.net",80],["ikarishintou.com",80],["imas-cg.net",80],["imihu.net",80],["inutomo11.com",80],["itainews.com",80],["itaishinja.com",80],["jin115.com",80],["jisaka.com",80],["jnews1.com",80],["jumpsokuhou.com",80],["jyoseisama.com",80],["keyakizaka46matomemory.net",80],["kidan-m.com",80],["kijoden.com",80],["kijolariat.net",80],["kijolifehack.com",80],["kijomatomelog.com",80],["kijyokatu.com",80],["kijyomatome.com",80],["kijyomatome-ch.com",80],["kijyomita.com",80],["kirarafan.com",80],["kitimama-matome.net",80],["kitizawa.com",80],["konoyubitomare.jp",80],["kotaro269.com",80],["kyousoku.net",80],["ldblog.jp",80],["livedoor.biz",80],["livedoor.blog",80],["majikichi.com",80],["matacoco.com",80],["matomeblade.com",80],["matomelotte.com",80],["matometemitatta.com",80],["mojomojo-licarca.com",80],["morikinoko.com",80],["nandemo-uketori.com",80],["netatama.net",80],["news-buzz1.com",80],["news30over.com",80],["nishinippon.co.jp",80],["nmb48-mtm.com",80],["norisoku.com",80],["npb-news.com",80],["ocsoku.com",80],["okusama-kijyo.com",80],["onecall2ch.com",80],["onihimechan.com",80],["orusoku.com",80],["otakomu.jp",80],["otoko-honne.com",80],["oumaga-times.com",80],["outdoormatome.com",80],["pachinkopachisro.com",80],["paranormal-ch.com",80],["recosoku.com",80],["s2-log.com",80],["saikyo-jump.com",80],["shuraba-matome.com",80],["ske48matome.net",80],["squallchannel.com",80],["sukattojapan.com",80],["sumaburayasan.com",80],["sutekinakijo.com",80],["usi32.com",80],["uwakich.com",80],["uwakitaiken.com",80],["vault76.info",80],["vipnews.jp",80],["vippers.jp",80],["vipsister23.com",80],["vtubernews.jp",80],["watarukiti.com",80],["world-fusigi.net",80],["zakuzaku911.com",80],["zch-vip.com",80],["interfootball.co.kr",81],["a-ha.io",81],["cboard.net",81],["jjang0u.com",81],["joongdo.co.kr",81],["viva100.com",81],["gamingdeputy.com",81],["alle-tests.nl",81],["tweaksforgeeks.com",81],["m.inven.co.kr",81],["mlbpark.donga.com",81],["meconomynews.com",81],["brandbrief.co.kr",81],["motorgraph.com",81],["bleepingcomputer.com",82],["pravda.com.ua",82],["ap7am.com",83],["cinema.com.my",83],["dolldivine.com",83],["giornalone.it",83],["iplocation.net",83],["jamaicajawapos.com",83],["jutarnji.hr",83],["kompasiana.com",83],["mediaindonesia.com",83],["niice-woker.com",83],["slobodnadalmacija.hr",83],["upmedia.mg",83],["mentalfloss.com",85],["isgfrm.com",86],["advertisertape.com",87],["tapeadvertisement.com",87],["tapelovesads.org",87],["watchadsontape.com",87],["vosfemmes.com",88],["voyeurfrance.net",88],["hyundaitucson.info",89],["exambd.net",90],["cgtips.org",91],["freewebcart.com",92],["freemagazines.top",92],["siamblockchain.com",92],["emuenzen.de",93],["kickass.*",94],["unblocked.id",96],["listendata.com",97],["7xm.xyz",97],["fastupload.io",97],["azmath.info",97],["wouterplanet.com",98],["xenvn.com",99],["pfps.gg",100],["4kporn.xxx",101],["androidacy.com",102],["4porn4.com",103],["bestpornflix.com",104],["freeroms.com",104],["andhrafriends.com",104],["723qrh1p.fun",104],["98zero.com",105],["mediaset.es",105],["updatewallah.in",105],["hwbusters.com",105],["beatsnoop.com",106],["fetchpik.com",106],["hackerranksolution.in",106],["camsrip.com",106],["btcbunch.com",108],["teachoo.com",[109,110]],["mafiatown.pl",111],["bitcotasks.com",112],["hilites.today",113],["udvl.com",114],["www.chip.de",[115,116,117,118]],["topsporter.net",119],["sportshub.to",119],["myanimelist.net",120],["unofficialtwrp.com",121],["codec.kyiv.ua",121],["kimcilonlyofc.com",121],["bitcosite.com",122],["bitzite.com",122],["teluguflix.*",123],["hacoos.com",124],["watchhentai.net",125],["hes-goals.io",125],["pkbiosfix.com",125],["casi3.xyz",125],["zefoy.com",126],["mailgen.biz",127],["tempinbox.xyz",127],["vidello.net",128],["newscon.org",129],["yunjiema.top",129],["pcgeeks-games.com",129],["resizer.myct.jp",130],["gametohkenranbu.sakuraweb.com",131],["jisakuhibi.jp",132],["rank1-media.com",132],["lifematome.blog",133],["fm.sekkaku.net",134],["dvdrev.com",135],["betweenjpandkr.blog",136],["nft-media.net",137],["ghacks.net",138],["leak.sx",139],["paste.bin.sx",139],["pornleaks.in",139],["aliezstream.pro",140],["daddy-stream.xyz",140],["daddylive1.*",140],["esportivos.*",140],["instream.pro",140],["mylivestream.pro",140],["poscitechs.*",140],["powerover.online",140],["sportea.link",140],["sportsurge.stream",140],["ufckhabib.com",140],["ustream.pro",140],["animeshqip.site",140],["apkship.shop",140],["buzter.pro",140],["enjoysports.bond",140],["filedot.to",140],["foreverquote.xyz",140],["hdstream.one",140],["kingstreamz.site",140],["live.fastsports.store",140],["livesnow.me",140],["livesports4u.pw",140],["masterpro.click",140],["nuxhallas.click",140],["papahd.info",140],["rgshows.me",140],["sportmargin.live",140],["sportmargin.online",140],["sportsloverz.xyz",140],["supertipzz.online",140],["totalfhdsport.xyz",140],["ultrastreamlinks.xyz",140],["usgate.xyz",140],["webmaal.cfd",140],["wizistreamz.xyz",140],["educ4m.com",140],["fromwatch.com",140],["visualnewshub.com",140],["khoaiphim.com",142],["haafedk2.com",143],["jovemnerd.com.br",144],["totalcsgo.com",145],["manysex.com",146],["gaminginfos.com",147],["tinxahoivn.com",148],["m.4khd.com",149],["westmanga.*",149],["automoto.it",150],["fordownloader.com",151],["codelivly.com",152],["tchatche.com",153],["cryptoearns.com",153],["lordchannel.com",154],["novelhall.com",155],["bagi.co.in",156],["keran.co",156],["biblestudytools.com",157],["christianheadlines.com",157],["ibelieve.com",157],["kuponigo.com",158],["inxxx.com",159],["bemyhole.com",159],["embedwish.com",160],["leakslove.net",160],["jenismac.com",161],["vxetable.cn",162],["nizarstream.com",163],["donghuaworld.com",164],["letsdopuzzles.com",165],["rediff.com",166],["igay69.com",167],["dzapk.com",168],["darknessporn.com",169],["familyporner.com",169],["freepublicporn.com",169],["pisshamster.com",169],["punishworld.com",169],["xanimu.com",169],["tainio-mania.online",170],["eroticmoviesonline.me",171],["series9movies.com",171],["teleclub.xyz",172],["ecamrips.com",173],["showcamrips.com",173],["tucinehd.com",174],["9animetv.to",175],["qiwi.gg",176],["jornadaperfecta.com",177],["loseart.com",178],["sousou-no-frieren.com",179],["unite-guide.com",181],["thebullspen.com",182],["receitasdaora.online",183],["hiraethtranslation.com",185],["all3do.com",186],["d0000d.com",186],["d000d.com",186],["d0o0d.com",186],["do0od.com",186],["do7go.com",186],["doods.*",186],["doodstream.*",186],["dooodster.com",186],["doply.net",186],["ds2play.com",186],["ds2video.com",186],["vidply.com",186],["vide0.net",186],["xfreehd.com",187],["freethesaurus.com",188],["thefreedictionary.com",188],["dexterclearance.com",189],["x86.co.kr",190],["onlyfaucet.com",191],["x-x-x.tube",192],["fdownloader.net",193],["thehackernews.com",194],["mielec.pl",195],["treasl.com",196],["mrbenne.com",197],["cnpics.org",[198,256]],["ovabee.com",198],["porn4f.com",198],["cnxx.me",[198,256]],["ai18.pics",[198,256]],["sportsonline.si",199],["fiuxy2.co",200],["animeunity.to",201],["tokopedia.com",202],["remixsearch.net",203],["remixsearch.es",203],["onlineweb.tools",203],["sharing.wtf",203],["2024tv.ru",204],["modrinth.com",205],["curseforge.com",205],["xnxxcom.xyz",206],["sportsurge.net",207],["joyousplay.xyz",207],["quest4play.xyz",[207,209]],["generalpill.net",207],["moneycontrol.com",208],["cookiewebplay.xyz",209],["ilovetoplay.xyz",209],["streamcaster.live",209],["weblivehdplay.ru",209],["nontongo.win",210],["m9.news",211],["callofwar.com",212],["secondhandsongs.com",213],["nohost.one",214],["vidbinge.com",214],["send.cm",215],["send.now",215],["3rooodnews.net",216],["xxxbfvideo.net",217],["filmy4wap.co.in",218],["filmy4waps.org",218],["gameshop4u.com",219],["regenzi.site",219],["historicaerials.com",220],["handirect.fr",221],["animefenix.tv",222],["fsiblog3.club",223],["kamababa.desi",223],["sat-sharing.com",223],["getfiles.co.uk",224],["genelify.com",225],["dhtpre.com",226],["xbaaz.com",227],["lineupexperts.com",229],["fearmp4.ru",230],["buffsports.*",231],["fbstreams.*",231],["wavewalt.me",231],["m.shuhaige.net",232],["streamingnow.mov",233],["thesciencetoday.com",234],["sportnews.to",234],["ghbrisk.com",236],["iplayerhls.com",236],["bacasitus.com",237],["katoikos.world",237],["abstream.to",238],["pawastreams.pro",239],["rebajagratis.com",240],["tv.latinlucha.es",240],["fetcheveryone.com",241],["reviewdiv.com",242],["laurelberninteriors.com",243],["godlike.com",244],["godlikeproductions.com",244],["bestsportslive.org",245],["bestreamsports.org",246],["streamhls.to",248],["xmalay1.net",249],["letemsvetemapplem.eu",250],["pc-builds.com",251],["watch-dbz57.funonline.co.in",253],["live4all.net",254],["pokemon-project.com",255],["3minx.com",256],["555fap.com",256],["blackwidof.org",256],["fc2ppv.stream",256],["hentai4f.com",256],["hentaipig.com",256],["javball.com",256],["javbee.vip",256],["javring.com",256],["javsunday.com",256],["kin8-av.com",256],["porn4f.org",256],["sweetie-fox.com",256],["xcamcovid.com",256],["moviesonlinefree.*",257],["fileszero.com",258],["viralharami.com",258],["bmamag.com",259],["bmacanberra.wpcomstaging.com",259],["cinemastervip.com",260],["mmsbee42.com",261],["mmsmasala.com",261],["cefirates.com",262],["comicleaks.com",262],["tapmyback.com",262],["ping.gg",262],["nookgaming.com",262],["creatordrop.com",262],["bitdomain.biz",262],["fort-shop.kiev.ua",262],["accuretawealth.com",262],["resourceya.com",262],["tracktheta.com",262],["adaptive.marketing",262],["camberlion.com",262],["trybawaryjny.pl",262],["segops.madisonspecs.com",262],["stresshelden-coaching.de",262],["controlconceptsusa.com",262],["ryaktive.com",262],["tip.etip-staging.etip.io",262],["future-fortune.com",263],["furucombo.app",263],["bolighub.dk",263],["intercity.technology",264],["freelancer.taxmachine.be",264],["adria.gg",264],["fjlaboratories.com",264],["abhijith.page",264],["helpmonks.com",264],["dataunlocker.com",265],["proboards.com",266],["winclassic.net",266],["farmersjournal.ie",267]]);
const exceptionsMap = new Map([["chatango.com",[6]],["twitter.com",[6]],["youtube.com",[6]]]);
const hasEntities = true;
const hasAncestors = true;

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
    try { removeNodeText(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
