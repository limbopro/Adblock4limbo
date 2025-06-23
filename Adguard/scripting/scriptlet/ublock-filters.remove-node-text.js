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
const argsList = [["script","window,\"fetch\""],["script","/adblock/i"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","detectAdBlock"],["script","ctrlKey"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|\\]\\([\"']_aQS0/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","popundersPerIP"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/$.*open/"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","open"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","ADBlock"],["script","/admiral/i"],["script","/AdBlock/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/detect|WebAssembly/"],["script","_0x"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["faqwiki.*",1],["snapwordz.com",1],["toolxox.com",1],["rl6mans.com",1],["pandadoc.com",2],["web.de",3],["skidrowreloaded.com",[4,16]],["1337x.*",[4,16]],["1stream.eu",4],["4kwebplay.xyz",4],["alldownplay.xyz",4],["anime4i.vip",4],["antennasports.ru",4],["boxingstream.me",4],["buffsports.me",[4,67]],["buffstreams.app",4],["claplivehdplay.ru",[4,210]],["cracksports.me",[4,15]],["cricstream.me",4],["dartsstreams.com",4],["euro2024direct.ru",4],["ext.to",4],["extreme-down.*",4],["eztv.*",4],["eztvx.to",4],["f1box.me",4],["flix-wave.*",4],["flixrave.me",4],["golfstreams.me",4],["hikaritv.xyz",4],["kenitv.me",[4,15]],["lewblivehdplay.ru",[4,210]],["mixdrop.*",[4,16]],["mlbbite.net",4],["mlbstreams.ai",4],["motogpstream.me",4],["nbabox.me",4],["nflbox.me",4],["nhlbox.me",4],["qatarstreams.me",[4,15]],["qqwebplay.xyz",[4,210]],["rnbastreams.com",4],["rugbystreams.me",4],["sanet.*",4],["socceronline.me",4],["soccerworldcup.me",[4,15]],["sportshd.*",4],["streamed.su",4],["sushiscan.net",4],["topstreams.info",4],["totalsportek.to",4],["tvableon.me",[4,15]],["vibestreams.*",4],["vipstand.pm",4],["viwlivehdplay.ru",4],["worldsports.me",4],["x1337x.*",4],["wawacity.*",4],["720pstream.*",[4,67]],["embedsports.me",[4,92]],["embedstream.me",[4,15,16,67,92]],["jumbtv.com",[4,92]],["reliabletv.me",[4,92]],["topembed.pw",[4,69,210]],["crackstreamer.net",4],["methstreamer.com",4],["vidsrc.*",[4,15,67]],["vidco.pro",[4,67]],["freestreams-live.*>>",4],["moviepilot.de",[5,59]],["userupload.*",6],["cinedesi.in",6],["intro-hd.net",6],["monacomatin.mc",6],["nodo313.net",6],["mhdtvsports.*",[6,9]],["hesgoal-tv.io",6],["hesgoal-vip.io",6],["earn.punjabworks.com",6],["mahajobwala.in",6],["solewe.com",6],["panel.play.hosting",6],["total-sportek.to",6],["hesgoal-vip.to",6],["shoot-yalla.me",6],["shoot-yalla-tv.live",6],["pahe.*",[7,16,69]],["soap2day.*",7],["yts.mx",8],["magesypro.com",9],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["veganab.co",9],["camdigest.com",9],["learnmany.in",9],["amanguides.com",[9,38]],["highkeyfinance.com",[9,38]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["reset-scans.*",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["apkdelisi.net",9],["freepasses.org",9],["poplinks.*",[9,42]],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["teksnologi.com",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",[9,16]],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["mhdsports.*",9],["mhdsportstv.*",9],["mhdtvworld.*",9],["mhdtvmax.*",9],["mhdstream.*",9],["madaradex.org",9],["trigonevo.com",9],["franceprefecture.fr",9],["jazbaat.in",9],["aipebel.com",9],["audiotools.blog",9],["embdproxy.xyz",9],["hqq.*",10],["waaw.*",10],["pixhost.*",11],["vipbox.*",12],["telerium.*",13],["apex2nova.com",13],["hoca5.com",13],["germancarforum.com",14],["cybercityhelp.in",14],["innateblogger.com",14],["omeuemprego.online",14],["viprow.*",[15,16,67]],["bluemediadownload.*",15],["bluemediafile.*",15],["bluemedialink.*",15],["bluemediastorage.*",15],["bluemediaurls.*",15],["urlbluemedia.*",15],["bowfile.com",15],["cloudvideo.tv",[15,67]],["cloudvideotv.*",[15,67]],["coloredmanga.com",15],["exeo.app",15],["hiphopa.net",[15,16]],["megaup.net",15],["olympicstreams.co",[15,67]],["tv247.us",[15,16]],["uploadhaven.com",15],["userscloud.com",[15,67]],["streamnoads.com",[15,16,67,84]],["mlbbox.me",15],["vikingf1le.us.to",15],["neodrive.xyz",15],["mdfx9dc8n.net",16],["mdzsmutpcvykb.net",16],["mixdrop21.net",16],["mixdropjmk.pw",16],["123-movies.*",16],["123movieshd.*",16],["123movieshub.*",16],["123moviesme.*",16],["1337x.ninjaproxy1.com",16],["141jav.com",16],["1bit.space",16],["1bitspace.com",16],["1stream.*",16],["1tamilmv.*",16],["2ddl.*",16],["2umovies.*",16],["345movies.com",16],["3dporndude.com",16],["3hiidude.*",16],["4archive.org",16],["4horlover.com",16],["4stream.*",16],["560pmovie.com",16],["5movies.*",16],["7hitmovies.*",16],["85tube.com",16],["85videos.com",16],["9xmovie.*",16],["aagmaal.*",[16,67]],["acefile.co",16],["actusports.eu",16],["adblockeronstape.*",[16,84]],["adblockeronstreamtape.*",16],["adblockplustape.*",[16,84]],["adblockstreamtape.*",[16,84]],["adblockstrtape.*",[16,84]],["adblockstrtech.*",[16,84]],["adblocktape.*",[16,84]],["adclickersbot.com",16],["adcorto.*",16],["adricami.com",16],["adslink.pw",16],["adultstvlive.com",16],["adz7short.space",16],["aeblender.com",16],["affordwonder.net",16],["ahdafnews.blogspot.com",16],["aiblog.tv",[16,70]],["ak47sports.com",16],["akuma.moe",16],["alexsports.*",16],["alexsportss.*",16],["alexsportz.*",16],["allplayer.tk",16],["amateurblog.tv",[16,70]],["androidadult.com",[16,237]],["anhsexjav.xyz",16],["anidl.org",16],["anime-loads.org",16],["animeblkom.net",16],["animefire.plus",16],["animelek.me",16],["animepahe.*",16],["animesanka.*",16],["animesorionvip.net",16],["animespire.net",16],["animestotais.xyz",16],["animeyt.es",16],["animixplay.*",16],["aniplay.*",16],["anroll.net",16],["antiadtape.*",[16,84]],["anymoviess.xyz",16],["aotonline.org",16],["asenshu.com",16],["asialiveaction.com",16],["asianclipdedhd.net",16],["asianclub.*",16],["ask4movie.*",16],["askim-bg.com",16],["asumsikedaishop.com",16],["atomixhq.*",[16,67]],["atomohd.*",16],["avcrempie.com",16],["avseesee.com",16],["gettapeads.com",[16,84]],["bajarjuegospcgratis.com",16],["balkanteka.net",16],["bdnewszh.com",[16,67]],["beinmatch.*",[16,25]],["belowporn.com",16],["bestgirlsexy.com",16],["bestnhl.com",16],["bestporn4free.com",16],["bestporncomix.com",16],["bet36.es",16],["bgwp.cc",[16,21]],["bhaai.*",16],["bigwarp.*",16],["bikinbayi.com",16],["bikinitryon.net",16],["birdurls.com",16],["bitsearch.to",16],["blackcockadventure.com",16],["blackcockchurch.org",16],["blackporncrazy.com",16],["blizzboygames.net",16],["blizzpaste.com",16],["blkom.com",16],["blog-peliculas.com",16],["blogtrabalhista.com",16],["blurayufr.*",16],["bobsvagene.club",16],["bokep.im",16],["bokep.top",16],["bolly4umovies.click",16],["bonusharian.pro",16],["boyfuck.me",16],["brilian-news.id",16],["brupload.net",16],["bucitana.com",16],["buffstreams.*",16],["buzter.xyz",16],["caitlin.top",16],["camchickscaps.com",16],["camgirls.casa",16],["canalesportivo.*",16],["cashurl.in",16],["catchthrust.net",16],["ccurl.net",[16,67]],["celebrity-leaks.net",16],["cgpelis.net",16],["charexempire.com",16],["choosingnothing.com",16],["clasico.tv",16],["clickndownload.*",16],["clicknupload.*",16],["clik.pw",16],["coin-free.com",[16,35]],["coins100s.fun",16],["comicsmanics.com",16],["comohoy.com",16],["compucalitv.com",16],["coolcast2.com",16],["coreradio.online",16],["cosplaytab.com",16],["countylocalnews.com",16],["cpmlink.net",16],["crackstreamshd.click",16],["crespomods.com",16],["crisanimex.com",16],["crunchyscan.fr",16],["cuevana3.fan",16],["cuevana3hd.com",16],["cumception.com",16],["cutpaid.com",16],["daddylive.*",[16,67,208]],["daddylivehd.*",[16,67]],["dailyuploads.net",16],["datawav.club",16],["daughtertraining.com",16],["ddrmovies.*",16],["deepgoretube.site",16],["deltabit.co",16],["deporte-libre.top",16],["depvailon.com",16],["derleta.com",16],["desiremovies.*",16],["desivdo.com",16],["desixx.net",16],["detikkebumen.com",16],["deutschepornos.me",16],["devlib.*",16],["diasoft.xyz",16],["directupload.net",16],["divxtotal.*",16],["divxtotal1.*",16],["dixva.com",16],["dlhd.*",16],["doctormalay.com",16],["dofusports.xyz",16],["dogemate.com",16],["doods.cam",16],["doodskin.lat",16],["downloadrips.com",16],["downvod.com",16],["dphunters.mom",16],["dragontranslation.com",16],["dvdfullestrenos.com",16],["dvdplay.*",[16,67]],["ebookbb.com",16],["ebookhunter.net",16],["egyanime.com",16],["egygost.com",16],["egyshare.cc",16],["ekasiwap.com",16],["electro-torrent.pl",16],["elil.cc",16],["elixx.*",16],["enjoy4k.*",16],["eplayer.click",16],["erovoice.us",16],["eroxxx.us",16],["estrenosdoramas.net",16],["estrenosflix.*",16],["estrenosflux.*",16],["estrenosgo.*",16],["everia.club",16],["everythinginherenet.blogspot.com",16],["extrafreetv.com",16],["extratorrent.st",16],["extremotvplay.com",16],["f1stream.*",16],["fapinporn.com",16],["fapptime.com",16],["fastreams.live",16],["faucethero.com",16],["favoyeurtube.net",16],["fbstream.*",16],["fc2db.com",16],["fembed.com",16],["femdom-joi.com",16],["fenixsite.net",16],["file4go.*",16],["filegram.to",[16,65,70]],["fileone.tv",16],["film1k.com",16],["filmeonline2023.net",16],["filmesonlinex.org",16],["filmesonlinexhd.biz",[16,67]],["filmisub.cc",16],["filmovitica.com",16],["filmymaza.blogspot.com",16],["filmyzilla.*",[16,67]],["filthy.family",16],["findav.*",16],["findporn.*",16],["fixfinder.click",16],["flickzap.com",16],["flixmaza.*",16],["flizmovies.*",16],["flostreams.xyz",16],["flyfaucet.com",16],["footyhunter.lol",16],["forex-trnd.com",16],["forumchat.club",16],["forumlovers.club",16],["freemoviesonline.biz",16],["freeomovie.co.in",16],["freeomovie.to",16],["freeporncomic.net",16],["freepornhdonlinegay.com",16],["freeproxy.io",16],["freeshot.live",16],["freetvsports.*",16],["freeuse.me",16],["freeusexporn.com",16],["fsharetv.cc",16],["fsicomics.com",16],["fullymaza.*",16],["g-porno.com",16],["g-streaming.com",16],["g3g.*",16],["galinhasamurai.com",16],["gamepcfull.com",16],["gameronix.com",16],["gamesfullx.com",16],["gameshdlive.net",16],["gamesmountain.com",16],["gamesrepacks.com",16],["gamingguru.fr",16],["gamovideo.com",16],["garota.cf",16],["gaydelicious.com",16],["gaypornhdfree.com",16],["gaypornhot.com",16],["gaypornmasters.com",16],["gaysex69.net",16],["gemstreams.com",16],["get-to.link",16],["girlscanner.org",16],["giurgiuveanul.ro",16],["gledajcrtace.xyz",16],["gocast2.com",16],["gomo.to",16],["gostosa.cf",16],["gotxx.*",16],["grantorrent.*",16],["gratispaste.com",16],["gravureblog.tv",[16,70]],["gwiazdypornosow.pl",16],["haho.moe",16],["hatsukimanga.com",16],["hayhd.net",16],["hdmoviesfair.*",[16,67]],["hdmoviesflix.*",16],["hdpornflix.com",16],["hdsaprevodom.com",16],["hdstreamss.club",16],["hentais.tube",16],["hentaistream.co",16],["hentaitk.net",16],["hentaitube.online",16],["hentaiworld.tv",16],["hesgoal.tv",16],["hexupload.net",16],["hhkungfu.tv",16],["highlanderhelp.com",16],["hiidudemoviez.*",16],["hindimean.com",16],["hindimovies.to",[16,67]],["hindimoviestv.com",16],["hiperdex.com",16],["hispasexy.org",16],["hitprn.com",16],["hoca4u.com",16],["hollymoviehd.cc",16],["hoodsite.com",16],["hopepaste.download",16],["hornylips.com",16],["hotgranny.live",16],["hotmama.live",16],["hqcelebcorner.net",16],["huren.best",16],["hwnaturkya.com",[16,67]],["hxfile.co",[16,67]],["igfap.com",16],["iklandb.com",16],["illink.net",16],["imgkings.com",16],["imgsen.*",16],["imgsex.xyz",16],["imgsto.*",16],["imgtraffic.com",16],["imx.to",16],["incest.*",16],["incestflix.*",16],["influencersgonewild.org",16],["infosgj.free.fr",16],["investnewsbrazil.com",16],["itdmusics.com",16],["itopmusic.*",16],["itsuseful.site",16],["itunesfre.com",16],["iwatchfriendsonline.net",[16,140]],["jackstreams.com",16],["japangaysex.com",16],["jatimupdate24.com",16],["jav-fun.cc",16],["jav-noni.cc",16],["jav-scvp.com",16],["javboys.tv",16],["javcl.com",16],["javf.net",16],["javhay.net",16],["javhoho.com",16],["javhun.com",16],["javleak.com",16],["javmost.*",16],["javporn.best",16],["javsek.net",16],["javsex.to",16],["javtiful.com",[16,18]],["jimdofree.com",16],["jiofiles.org",16],["jorpetz.com",16],["jp-films.com",16],["jpop80ss3.blogspot.com",16],["jpopsingles.eu",[16,185]],["kantotflix.net",16],["kantotinyo.com",16],["kaoskrew.org",16],["kaplog.com",16],["keeplinks.*",16],["keepvid.*",16],["keralahd.*",16],["keralatvbox.com",16],["khatrimazaful.*",16],["khatrimazafull.*",[16,70]],["kickassanimes.io",16],["kimochi.info",16],["kimochi.tv",16],["kinemania.tv",16],["kissasian.*",16],["konstantinova.net",16],["koora-online.live",16],["kunmanga.com",16],["kutmoney.com",16],["kwithsub.com",16],["lat69.me",16],["latinblog.tv",[16,70]],["latinomegahd.net",16],["leechall.*",16],["leechpremium.link",16],["legendas.dev",16],["legendei.net",16],["lightdlmovies.blogspot.com",16],["lighterlegend.com",16],["linclik.com",16],["linkebr.com",16],["linkrex.net",16],["linkshorts.*",16],["lulu.st",16],["lulustream.com",[16,69]],["luluvdo.com",16],["luluvdoo.com",16],["mangagenki.me",16],["mangahere.onl",16],["mangaweb.xyz",16],["mangoporn.net",16],["mangovideo.*",16],["manhwahentai.me",16],["masahub.com",16],["masahub.net",16],["masaporn.*",16],["maturegrannyfuck.com",16],["mdy48tn97.com",16],["mediapemersatubangsa.com",16],["mega-mkv.com",16],["megapastes.com",16],["megapornpics.com",16],["messitv.net",16],["meusanimes.net",16],["milfmoza.com",16],["milfnut.*",16],["milfzr.com",16],["millionscast.com",16],["mimaletamusical.blogspot.com",16],["miniurl.*",16],["mirrorace.*",16],["mitly.us",16],["mixdroop.*",16],["mixixxx000000.cyou",16],["mkv-pastes.com",16],["mkvcage.*",16],["mlbstream.*",16],["mlsbd.*",16],["mmsbee.*",16],["monaskuliner.ac.id",16],["moredesi.com",16],["motogpstream.*",16],["movgotv.net",16],["movi.pk",16],["movieplex.*",16],["movierulzlink.*",16],["movies123.*",16],["moviesflix.*",16],["moviesmeta.*",16],["moviesmod.com.pl",16],["moviessources.*",16],["moviesverse.*",16],["movieswbb.com",16],["moviewatch.com.pk",16],["moviezwaphd.*",16],["mp4upload.com",16],["mrskin.live",16],["mrunblock.*",16],["multicanaistv.com",16],["mundowuxia.com",16],["myeasymusic.ir",16],["myonvideo.com",16],["myyouporn.com",16],["mzansifun.com",16],["narutoget.info",16],["naughtypiss.com",16],["nbastream.*",16],["nekopoi.*",[16,70]],["nerdiess.com",16],["netfuck.net",16],["new-fs.eu",16],["newmovierulz.*",16],["newtorrentgame.com",16],["neymartv.net",16],["nflstream.*",16],["nflstreams.me",16],["nhlstream.*",16],["nicekkk.com",16],["nicesss.com",16],["nlegs.com",16],["noblocktape.*",[16,84]],["nocensor.*",16],["nolive.me",[16,67]],["noni-jav.com",16],["notformembersonly.com",16],["novamovie.net",16],["novelpdf.xyz",16],["novelssites.com",[16,67]],["novelup.top",16],["nsfwr34.com",16],["nu6i-bg-net.com",16],["nudebabesin3d.com",16],["nukedfans.com",16],["nuoga.eu",16],["nzbstars.com",16],["o2tvseries.com",16],["ohjav.com",16],["ojearnovelas.com",16],["okanime.xyz",16],["olweb.tv",16],["on9.stream",16],["onepiece-mangaonline.com",16],["onifile.com",16],["onionstream.live",16],["onlinesaprevodom.net",16],["onlyfams.*",16],["onlyfullporn.video",16],["onplustv.live",16],["originporn.com",16],["ouo.*",16],["ovagames.com",16],["ovamusic.com",16],["palimas.org",16],["password69.com",16],["pastemytxt.com",16],["payskip.org",16],["pctfenix.*",[16,67]],["pctnew.*",[16,67]],["peeplink.in",16],["peliculas24.*",16],["peliculasmx.net",16],["pelisflix20.*",16],["pelisplus.*",16],["pencarian.link",16],["pendidikandasar.net",16],["pervertgirlsvideos.com",16],["pervyvideos.com",16],["phim12h.com",16],["picdollar.com",16],["pickteenz.com",16],["picsxxxporn.com",16],["pinayscandalz.com",16],["pinkueiga.net",16],["piratebay.*",16],["piratefast.xyz",16],["piratehaven.xyz",16],["pirateiro.com",16],["pirlotvonline.org",16],["playtube.co.za",16],["plugintorrent.com",16],["plyjam.*",16],["plylive.*",16],["plyvdo.*",16],["pmvzone.com",16],["porndish.com",16],["pornez.net",16],["pornfetishbdsm.com",16],["pornfits.com",16],["pornhd720p.com",16],["pornhoarder.*",[16,230]],["pornobr.club",16],["pornobr.ninja",16],["pornodominicano.net",16],["pornofaps.com",16],["pornoflux.com",16],["pornotorrent.com.br",16],["pornredit.com",16],["pornstarsyfamosas.es",16],["pornstreams.co",16],["porntn.com",16],["pornxbit.com",16],["pornxday.com",16],["portaldasnovinhas.shop",16],["portugues-fcr.blogspot.com",16],["poscitesch.com",[16,67]],["poseyoung.com",16],["pover.org",16],["prbay.*",16],["projectfreetv.*",16],["proxybit.*",16],["proxyninja.org",16],["psarips.*",16],["pubfilmz.com",16],["publicsexamateurs.com",16],["punanihub.com",16],["putlocker5movies.org",16],["pxxbay.com",16],["r18.best",16],["racaty.*",16],["ragnaru.net",16],["rapbeh.net",16],["rapelust.com",16],["rapload.org",16],["read-onepiece.net",16],["readhunters.xyz",16],["remaxhd.*",16],["reshare.pm",16],["retro-fucking.com",16],["retrotv.org",16],["rintor.*",16],["rnbxclusive.*",16],["rnbxclusive0.*",16],["rnbxclusive1.*",16],["robaldowns.com",16],["rockdilla.com",16],["rojadirecta.*",16],["rojadirectaenvivo.*",16],["rojadirectatvenvivo.com",16],["rojitadirecta.blogspot.com",16],["romancetv.site",16],["rsoccerlink.site",16],["rugbystreams.*",16],["rule34.club",16],["rule34hentai.net",16],["rumahbokep-id.com",16],["sadisflix.*",16],["safego.cc",16],["safetxt.*",16],["sakurafile.com",16],["samax63.lol",16],["satoshi-win.xyz",16],["savefiles.com",[16,65,70,249]],["scat.gold",16],["scatfap.com",16],["scatkings.com",16],["scnlog.me",16],["scripts-webmasters.net",16],["serie-turche.com",16],["serijefilmovi.com",16],["sexcomics.me",16],["sexdicted.com",16],["sexgay18.com",16],["sexiezpix.com",16],["sexofilm.co",16],["sextgem.com",16],["sextubebbw.com",16],["sgpics.net",16],["shadowrangers.*",16],["shadowrangers.live",16],["shahee4u.cam",16],["shahi4u.*",16],["shahid4u1.*",16],["shahid4uu.*",16],["shahiid-anime.net",16],["shavetape.*",16],["shemale6.com",16],["shid4u.*",16],["shinden.pl",16],["short.es",16],["shortearn.*",16],["shorten.*",16],["shorttey.*",16],["shortzzy.*",16],["showmanga.blog.fc2.com",16],["shrt10.com",16],["shurt.pw",16],["sideplusleaks.net",16],["silverblog.tv",[16,70]],["silverpic.com",16],["sinhalasub.life",16],["sinsitio.site",16],["sinvida.me",16],["skidrowcpy.com",16],["skidrowfull.com",16],["skymovieshd.*",16],["slut.mom",16],["smallencode.me",16],["smoner.com",16],["smplace.com",16],["soccerinhd.com",[16,67]],["socceron.name",16],["socceronline.*",[16,67]],["socialblog.tv",[16,70]],["softairbay.com",16],["softarchive.*",16],["sokobj.com",16],["songsio.com",16],["souexatasmais.com",16],["sportbar.live",16],["sports-stream.*",16],["sportstream1.cfd",16],["sporttuna.*",16],["srt.am",16],["srts.me",16],["sshhaa.*",16],["stapadblockuser.*",[16,84]],["stape.*",[16,84]],["stapewithadblock.*",16],["starblog.tv",[16,70]],["starmusiq.*",16],["stbemuiptv.com",16],["stockingfetishvideo.com",16],["strcloud.*",[16,84]],["stream.crichd.vip",16],["stream.lc",16],["stream25.xyz",16],["streamadblocker.*",[16,67,84]],["streamadblockplus.*",[16,84]],["streambee.to",16],["streambucket.net",16],["streamcdn.*",16],["streamcenter.pro",16],["streamers.watch",16],["streamgo.to",16],["streamhub.*",16],["streamingclic.com",16],["streamkiste.tv",16],["streamoupload.xyz",16],["streamservicehd.click",16],["streamsport.*",16],["streamta.*",[16,84]],["streamtape.*",[16,70,84]],["streamtapeadblockuser.*",[16,84]],["streamvid.net",[16,26]],["strikeout.*",[16,69]],["strtape.*",[16,84]],["strtapeadblock.*",[16,84]],["strtapeadblocker.*",[16,84]],["strtapewithadblock.*",16],["strtpe.*",[16,84]],["subtitleporn.com",16],["subtitles.cam",16],["suicidepics.com",16],["supertelevisionhd.com",16],["supexfeeds.com",16],["swatchseries.*",16],["swiftload.io",16],["swipebreed.net",16],["swzz.xyz",16],["sxnaar.com",16],["tabooflix.*",16],["tabooporns.com",16],["taboosex.club",16],["tapeantiads.com",[16,84]],["tapeblocker.com",[16,84]],["tapenoads.com",[16,84]],["tapewithadblock.org",[16,84,267]],["teamos.xyz",16],["teen-wave.com",16],["teenporncrazy.com",16],["telegramgroups.xyz",16],["telenovelasweb.com",16],["tennisstreams.*",16],["tensei-shitara-slime-datta-ken.com",16],["tfp.is",16],["tgo-tv.co",[16,67]],["thaihotmodels.com",16],["theblueclit.com",16],["thebussybandit.com",16],["thedaddy.to",[16,208]],["theicongenerator.com",16],["thelastdisaster.vip",16],["themoviesflix.*",16],["thepiratebay.*",16],["thepiratebay0.org",16],["thepiratebay10.info",16],["thesexcloud.com",16],["thothub.today",16],["tightsexteens.com",16],["tlnovelas.net",16],["tmearn.*",16],["tojav.net",16],["tokusatsuindo.com",16],["toonanime.*",16],["top16.net",16],["topdrama.net",16],["topvideosgay.com",16],["torlock.*",16],["tormalayalam.*",16],["torrage.info",16],["torrents.vip",16],["torrentz2eu.*",16],["torrsexvid.com",16],["tpb-proxy.xyz",16],["trannyteca.com",16],["trendytalker.com",16],["tuktukcinma.com",16],["tumanga.net",16],["turbogvideos.com",16],["turboimagehost.com",16],["turbovid.me",16],["turkishseriestv.org",16],["turksub24.net",16],["tutele.sx",16],["tutelehd.*",16],["tvglobe.me",16],["tvpclive.com",16],["tvply.*",16],["tvs-widget.com",16],["tvseries.video",16],["u4m.*",16],["ucptt.com",16],["ufaucet.online",16],["ufcfight.online",16],["ufcstream.*",16],["ultrahorny.com",16],["ultraten.net",16],["unblocknow.*",16],["unblockweb.me",16],["underhentai.net",16],["uniqueten.net",16],["uns.bio",16],["upbaam.com",16],["uploadbuzz.*",16],["upstream.to",16],["usagoals.*",16],["valhallas.click",[16,139]],["valeriabelen.com",16],["verdragonball.online",16],["vexmoviex.*",16],["vfxmed.com",16],["vidclouds.*",16],["video.az",16],["videograbber.cc",16],["videostreaming.rocks",16],["videowood.tv",16],["vidlox.*",16],["vidorg.net",16],["vidtapes.com",16],["vidz7.com",16],["vikistream.com",16],["vikv.net",16],["vinovo.to",16],["vipboxtv.*",[16,67]],["vipleague.*",[16,233]],["virpe.cc",16],["visifilmai.org",16],["viveseries.com",16],["vladrustov.sx",16],["volokit2.com",[16,208]],["vstorrent.org",16],["w-hentai.com",16],["watch-series.*",16],["watchbrooklynnine-nine.com",16],["watchelementaryonline.com",16],["watchjavidol.com",16],["watchkobestreams.info",16],["watchlostonline.net",16],["watchmodernfamilyonline.com",16],["watchmonkonline.com",16],["watchrulesofengagementonline.com",16],["watchseries.*",16],["watchthekingofqueens.com",16],["webcamrips.com",16],["wincest.xyz",16],["wolverdon.fun",16],["wordcounter.icu",16],["worldmovies.store",16],["worldstreams.click",16],["wpdeployit.com",16],["wqstreams.tk",16],["wwwsct.com",16],["xanimeporn.com",16],["xblog.tv",[16,70]],["xclusivejams.*",16],["xmoviesforyou.*",16],["xn--verseriesespaollatino-obc.online",16],["xn--xvideos-espaol-1nb.com",16],["xpornium.net",16],["xsober.com",16],["xvip.lat",16],["xxgasm.com",16],["xxvideoss.org",16],["xxx18.uno",16],["xxxdominicana.com",16],["xxxfree.watch",16],["xxxmax.net",16],["xxxwebdlxxx.top",16],["xxxxvideo.uno",16],["y2b.wiki",16],["y2tube.pro",16],["yabai.si",16],["yadixv.com",16],["yayanimes.net",16],["yeshd.net",16],["youdbox.*",16],["youjax.com",16],["yourdailypornvideos.ws",16],["yourupload.com",16],["youswear.com",16],["ytmp3eu.*",16],["yts-subs.*",16],["yts.*",16],["ytstv.me",16],["zerion.cc",16],["zerocoin.top",16],["zitss.xyz",16],["zooqle.*",16],["zpaste.net",16],["fastreams.com",16],["redittsports.com",16],["sky-sports.store",16],["streamsoccer.site",16],["tntsports.store",16],["wowstreams.co",16],["dutchycorp.*",17],["faucet.ovh",17],["mmacore.tv",18],["nxbrew.net",18],["brawlify.com",18],["oko.sh",19],["variety.com",[20,77]],["gameskinny.com",20],["deadline.com",[20,77]],["mlive.com",[20,77]],["doujindesu.*",21],["atlasstudiousa.com",21],["51bonusrummy.in",[21,70]],["washingtonpost.com",22],["gosexpod.com",23],["sexo5k.com",24],["truyen-hentai.com",24],["theshedend.com",26],["zeroupload.com",26],["securenetsystems.net",26],["miniwebtool.com",26],["bchtechnologies.com",26],["eracast.cc",26],["flatai.org",26],["leeapk.com",26],["spiegel.de",27],["jacquieetmichel.net",28],["hausbau-forum.de",29],["althub.club",29],["kiemlua.com",29],["tea-coffee.net",30],["spatsify.com",30],["newedutopics.com",30],["getviralreach.in",30],["edukaroo.com",30],["funkeypagali.com",30],["careersides.com",30],["nayisahara.com",30],["wikifilmia.com",30],["infinityskull.com",30],["viewmyknowledge.com",30],["iisfvirtual.in",30],["starxinvestor.com",30],["jkssbalerts.com",30],["imagereviser.com",31],["labgame.io",[32,33]],["kenzo-flowertag.com",34],["mdn.lol",34],["btcbitco.in",35],["btcsatoshi.net",35],["cempakajaya.com",35],["crypto4yu.com",35],["gainl.ink",35],["manofadan.com",35],["readbitcoin.org",35],["wiour.com",35],["tremamnon.com",35],["bitsmagic.fun",35],["ourcoincash.xyz",35],["blog.cryptowidgets.net",36],["blog.insurancegold.in",36],["blog.wiki-topia.com",36],["blog.coinsvalue.net",36],["blog.cookinguide.net",36],["blog.freeoseocheck.com",36],["aylink.co",37],["sugarona.com",38],["nishankhatri.xyz",38],["cety.app",39],["exe-urls.com",39],["exego.app",39],["cutlink.net",39],["cutsy.net",39],["cutyurls.com",39],["cutty.app",39],["cutnet.net",39],["jixo.online",39],["tinys.click",40],["loan.creditsgoal.com",40],["rupyaworld.com",40],["vahantoday.com",40],["techawaaz.in",40],["loan.bgmi32bitapk.in",40],["formyanime.com",40],["gsm-solution.com",40],["h-donghua.com",40],["hindisubbedacademy.com",40],["hm4tech.info",40],["mydverse.*",40],["panelprograms.blogspot.com",40],["ripexbooster.xyz",40],["serial4.com",40],["tutorgaming.com",40],["everydaytechvams.com",40],["dipsnp.com",40],["cccam4sat.com",40],["diendancauduong.com",40],["zeemoontv-24.blogspot.com",40],["stitichsports.com",40],["aiimgvlog.fun",41],["appsbull.com",42],["diudemy.com",42],["maqal360.com",42],["androjungle.com",42],["bookszone.in",42],["drakescans.com",42],["shortix.co",42],["makefreecallsonline.com",42],["msonglyrics.com",42],["app-sorteos.com",42],["bokugents.com",42],["client.pylexnodes.net",42],["btvplus.bg",42],["listar-mc.net",42],["blog24.me",[43,44]],["coingraph.us",45],["impact24.us",45],["iconicblogger.com",46],["auto-crypto.click",46],["tpi.li",47],["oii.la",[47,69]],["shrinke.*",48],["shrinkme.*",48],["smutty.com",48],["e-sushi.fr",48],["gayforfans.com",48],["freeadultcomix.com",48],["down.dataaps.com",48],["filmweb.pl",[48,180]],["livecamrips.*",48],["safetxt.net",48],["filespayouts.com",48],["atglinks.com",49],["kbconlinegame.com",50],["hamrojaagir.com",50],["odijob.com",50],["stfly.biz",51],["airevue.net",51],["atravan.net",51],["simana.online",52],["fooak.com",52],["joktop.com",52],["evernia.site",52],["falpus.com",52],["rfiql.com",53],["gujjukhabar.in",53],["smartfeecalculator.com",53],["djxmaza.in",53],["thecubexguide.com",53],["jytechs.in",53],["financacerta.com",54],["encurtads.net",54],["mastkhabre.com",55],["weshare.is",56],["rokni.xyz",57],["keedabankingnews.com",57],["pig69.com",57],["cosplay18.pics",[57,259]],["3dsfree.org",58],["alpin.de",59],["boersennews.de",59],["chefkoch.de",59],["chip.de",59],["clever-tanken.de",59],["desired.de",59],["donnerwetter.de",59],["fanfiktion.de",59],["focus.de",59],["formel1.de",59],["frustfrei-lernen.de",59],["gewinnspiele.tv",59],["giga.de",59],["gut-erklaert.de",59],["kino.de",59],["messen.de",59],["nickles.de",59],["nordbayern.de",59],["spielfilm.de",59],["teltarif.de",[59,60]],["unsere-helden.com",59],["weltfussball.at",59],["watson.de",59],["mactechnews.de",59],["sport1.de",59],["welt.de",59],["sport.de",59],["allthingsvegas.com",61],["100percentfedup.com",61],["beforeitsnews.com",61],["concomber.com",61],["conservativefiringline.com",61],["dailylol.com",61],["funnyand.com",61],["letocard.fr",61],["mamieastuce.com",61],["meilleurpronostic.fr",61],["patriotnationpress.com",61],["toptenz.net",61],["vitamiiin.com",61],["writerscafe.org",61],["populist.press",61],["dailytruthreport.com",61],["livinggospeldaily.com",61],["first-names-meanings.com",61],["welovetrump.com",61],["thehayride.com",61],["thelibertydaily.com",61],["thepoke.co.uk",61],["thepolitistick.com",61],["theblacksphere.net",61],["shark-tank.com",61],["naturalblaze.com",61],["greatamericanrepublic.com",61],["dailysurge.com",61],["truthlion.com",61],["flagandcross.com",61],["westword.com",61],["republicbrief.com",61],["freedomfirstnetwork.com",61],["phoenixnewtimes.com",61],["designbump.com",61],["clashdaily.com",61],["madworldnews.com",61],["reviveusa.com",61],["sonsoflibertymedia.com",61],["thedesigninspiration.com",61],["videogamesblogger.com",61],["protrumpnews.com",61],["thepalmierireport.com",61],["kresy.pl",61],["thepatriotjournal.com",61],["thegatewaypundit.com",61],["wltreport.com",61],["miaminewtimes.com",61],["politicalsignal.com",61],["rightwingnews.com",61],["bigleaguepolitics.com",61],["comicallyincorrect.com",61],["upornia.com",62],["pillowcase.su",63],["akaihentai.com",64],["cine-calidad.*",64],["veryfreeporn.com",64],["theporngod.com",64],["besthdgayporn.com",65],["drivenime.com",65],["erothots1.com",65],["javup.org",65],["shemaleup.net",65],["transflix.net",65],["worthcrete.com",65],["hentaihere.com",66],["player.smashy.stream",66],["player.smashystream.com",66],["123movies.*",67],["123moviesla.*",67],["123movieweb.*",67],["2embed.*",67],["9xmovies.*",67],["adsh.cc",67],["adshort.*",67],["afilmyhouse.blogspot.com",67],["ak.sv",67],["allmovieshub.*",67],["animesultra.com",67],["api.webs.moe",67],["apkmody.io",67],["asianplay.*",67],["atishmkv.*",67],["attvideo.com",67],["backfirstwo.site",67],["bflix.*",67],["crazyblog.in",67],["cricstream.*",67],["crictime.*",67],["cuervotv.me",67],["divicast.com",67],["dlhd.so",67],["dood.*",[67,186]],["dooood.*",[67,186]],["embed.meomeo.pw",67],["extramovies.*",67],["faselhd.*",67],["faselhds.*",67],["filemoon.*",67],["filmeserialeonline.org",67],["filmy.*",67],["filmyhit.*",67],["filmywap.*",67],["flexyhit.com",67],["fmovies.*",67],["foreverwallpapers.com",67],["french-streams.cc",67],["fslinks.org",67],["gdplayer.*",67],["goku.*",67],["gomovies.*",67],["gowatchseries.*",67],["hdfungamezz.*",67],["hdtoday.to",67],["hinatasoul.com",67],["hindilinks4u.*",67],["hurawatch.*",[67,216]],["igg-games.com",67],["infinityscans.net",67],["jalshamoviezhd.*",67],["livecricket.*",67],["mangareader.to",67],["membed.net",67],["mgnetu.com",67],["mhdsport.*",67],["mkvcinemas.*",67],["movies2watch.*",67],["moviespapa.*",67],["mp3juice.info",67],["mp3juices.cc",67],["mp4moviez.*",67],["mydownloadtube.*",67],["myflixerz.to",67],["nowmetv.net",67],["nowsportstv.com",67],["nuroflix.*",67],["nxbrew.com",67],["o2tvseries.*",67],["o2tvseriesz.*",67],["oii.io",67],["paidshitforfree.com",67],["pepperlive.info",67],["pirlotv.*",67],["playertv.net",67],["poscitech.*",67],["primewire.*",67],["putlocker68.com",67],["redecanais.*",67],["roystream.com",67],["rssing.com",67],["s.to",67],["serienstream.*",67],["sflix.*",67],["shahed4u.*",67],["shaheed4u.*",67],["share.filesh.site",67],["sharkfish.xyz",67],["skidrowcodex.net",67],["smartermuver.com",67],["speedostream.*",67],["sportcast.*",67],["sports-stream.site",67],["sportskart.*",67],["stream4free.live",67],["streamingcommunity.*",[67,69,104]],["tamilarasan.*",67],["tamilfreemp3songs.*",67],["tamilmobilemovies.in",67],["tamilprinthd.*",67],["tapeadsenjoyer.com",[67,84]],["thewatchseries.live",67],["tnmusic.in",67],["torrentdosfilmes.*",67],["travelplanspro.com",67],["tubemate.*",67],["tusfiles.com",67],["tutlehd4.com",67],["twstalker.com",67],["uploadrar.*",67],["uqload.*",67],["vid-guard.com",67],["vidcloud9.*",67],["vido.*",67],["vidoo.*",67],["vidsaver.net",67],["vidspeeds.com",67],["viralitytoday.com",67],["voiranime.stream",67],["vudeo.*",67],["vumoo.*",67],["watchdoctorwhoonline.com",67],["watchomovies.*",[67,101]],["watchserie.online",67],["webhostingpost.com",67],["woxikon.in",67],["www-y2mate.com",67],["yesmovies.*",67],["ylink.bid",67],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",67],["kickassanime.*",68],["11xmovies.*",69],["cinego.tv",69],["dokoembed.pw",69],["ev01.to",69],["fojik.*",69],["fstream365.com",69],["fzmovies.*",69],["linkz.*",69],["minoplres.xyz",69],["mostream.us",69],["moviedokan.*",69],["myflixer.*",69],["prmovies.*",69],["readcomiconline.li",69],["s3embtaku.pro",69],["sflix2.to",69],["sportshub.stream",69],["streamblasters.*",69],["topcinema.cam",69],["webxzplay.cfd",69],["zonatmo.com",69],["animesaturn.cx",69],["filecrypt.*",69],["hunterscomics.com",69],["aniwave.uk",69],["dojing.net",70],["krx18.com",70],["mangaforfree.com",70],["pornx.to",70],["streampoi.com",70],["up4stream.com",[70,101]],["ups2up.fun",[70,101]],["xmegadrive.com",70],["rahim-soft.com",70],["x-video.tube",70],["rubystm.com",70],["rubyvid.com",70],["rubyvidhub.com",70],["stmruby.com",70],["streamruby.com",70],["poophd.cc",70],["windowsreport.com",70],["fuckflix.click",70],["celebzcircle.com",71],["bi-girl.net",71],["ftuapps.*",71],["hentaiseason.com",71],["hoodtrendspredict.com",71],["marcialhub.xyz",71],["odiadance.com",71],["osteusfilmestuga.online",71],["ragnarokscanlation.opchapters.com",71],["sampledrive.org",71],["showflix.*",71],["swordalada.org",71],["tvappapk.com",71],["twobluescans.com",[71,72]],["varnascan.xyz",71],["hallofseries.com",73],["luciferdonghua.in",73],["truyentranhfull.net",73],["fcportables.com",73],["repack-games.com",73],["ibooks.to",73],["blog.tangwudi.com",73],["filecatchers.com",73],["babaktv.com",73],["mylifefromhome.com",74],["nationalreview.com",74],["nordot.app",74],["oakvillenews.org",74],["observer.com",74],["ourlittlesliceofheaven.com",74],["palachinkablog.com",74],["patheos.com",74],["pinkonthecheek.com",74],["politicususa.com",74],["predic.ro",74],["puckermom.com",74],["qtoptens.com",74],["realgm.com",74],["reelmama.com",74],["robbreport.com",[74,77]],["royalmailchat.co.uk",74],["samchui.com",74],["sandrarose.com",74],["sherdog.com",74],["sidereel.com",74],["silive.com",74],["simpleflying.com",74],["sloughexpress.co.uk",74],["spacenews.com",74],["sportsgamblingpodcast.com",74],["spotofteadesigns.com",74],["stacysrandomthoughts.com",74],["ssnewstelegram.com",74],["superherohype.com",[74,77]],["tablelifeblog.com",74],["thebeautysection.com",74],["thecelticblog.com",74],["thecurvyfashionista.com",74],["thefashionspot.com",74],["thegamescabin.com",74],["thenerdyme.com",74],["thenonconsumeradvocate.com",74],["theprudentgarden.com",74],["thethings.com",74],["timesnews.net",74],["topspeed.com",74],["toyotaklub.org.pl",74],["travelingformiles.com",74],["tutsnode.org",74],["viralviralvideos.com",74],["wannacomewith.com",74],["wimp.com",[74,77]],["windsorexpress.co.uk",74],["woojr.com",74],["worldoftravelswithkids.com",74],["worldsurfleague.com",74],["cheatsheet.com",75],["pwinsider.com",75],["c-span.org",76],["15min.lt",77],["247sports.com",77],["abc17news.com",77],["agrodigital.com",77],["al.com",77],["aliontherunblog.com",77],["allaboutthetea.com",77],["allmovie.com",77],["allmusic.com",77],["allthingsthrifty.com",77],["amessagewithabottle.com",77],["artforum.com",77],["artnews.com",77],["awkward.com",77],["barcablaugranes.com",77],["barnsleychronicle.com",77],["bethcakes.com",77],["betweenenglandandiowa.com",77],["bgr.com",77],["blazersedge.com",77],["blogher.com",77],["blu-ray.com",77],["bluegraygal.com",77],["briefeguru.de",77],["brobible.com",77],["cagesideseats.com",77],["cbsnews.com",77],["cbssports.com",[77,255]],["celiacandthebeast.com",77],["chaptercheats.com",77],["cleveland.com",77],["clickondetroit.com",77],["commercialobserver.com",77],["competentedigitale.ro",77],["dailydot.com",77],["dailykos.com",77],["dailyvoice.com",77],["decider.com",77],["didyouknowfacts.com",77],["dogtime.com",77],["eater.com",77],["eldiariony.com",77],["fark.com",77],["femestella.com",77],["fmradiofree.com",77],["footwearnews.com",77],["free-power-point-templates.com",77],["freeconvert.com",77],["frogsandsnailsandpuppydogtail.com",77],["funtasticlife.com",77],["fwmadebycarli.com",77],["golfdigest.com",77],["gulflive.com",77],["hollywoodreporter.com",77],["homeglowdesign.com",77],["honeygirlsworld.com",77],["ibtimes.co.in",77],["imgur.com",77],["indiewire.com",77],["intouchweekly.com",77],["jasminemaria.com",77],["kens5.com",77],["kion546.com",77],["knowyourmeme.com",77],["last.fm",77],["lehighvalleylive.com",77],["lettyskitchen.com",77],["lifeandstylemag.com",77],["lifeinleggings.com",77],["lizzieinlace.com",77],["localnews8.com",77],["lonestarlive.com",77],["madeeveryday.com",77],["maidenhead-advertiser.co.uk",77],["mandatory.com",77],["mardomreport.net",77],["masslive.com",77],["melangery.com",77],["mmamania.com",77],["momtastic.com",77],["mostlymorgan.com",77],["motherwellmag.com",77],["musicfeeds.com.au",77],["naszemiasto.pl",77],["nationalpost.com",77],["nbcsports.com",77],["news.com.au",77],["ninersnation.com",77],["nj.com",77],["nothingbutnewcastle.com",77],["nsjonline.com",77],["nypost.com",77],["oregonlive.com",77],["pagesix.com",77],["pennlive.com",77],["playstationlifestyle.net",77],["rollingstone.com",77],["sbnation.com",77],["sheknows.com",77],["sneakernews.com",77],["sourcingjournal.com",77],["sport-fm.gr",77],["stylecaster.com",77],["syracuse.com",77],["tastingtable.com",77],["thecw.com",77],["thedailymeal.com",77],["theflowspace.com",77],["themarysue.com",77],["tokfm.pl",77],["torontosun.com",77],["tvline.com",77],["usmagazine.com",77],["wallup.net",77],["weather.com",77],["worldstar.com",77],["worldstarhiphop.com",77],["wwd.com",77],["yourcountdown.to",77],["automobile-catalog.com",[78,79,80]],["baseballchannel.jp",[78,79]],["hoyme.jp",78],["motorbikecatalog.com",[78,79,80]],["topstarnews.net",78],["islamicfinder.org",78],["secure-signup.net",78],["dramabeans.com",78],["dropgame.jp",[78,79]],["manta.com",78],["tportal.hr",78],["tvtropes.org",78],["convertcase.net",78],["uranai.nosv.org",79],["yakkun.com",79],["373news.com",79],["alc.co.jp",79],["allthetests.com",79],["animanch.com",79],["aniroleplay.com",79],["apkmirror.com",[79,184]],["areaconnect.com",79],["as-web.jp",79],["aucfree.com",79],["autoby.jp",79],["autofrage.net",79],["bab.la",79],["babla.*",79],["carscoops.com",79],["chanto.jp.net",79],["cinetrafic.fr",79],["cocokara-next.com",79],["collinsdictionary.com",79],["computerfrage.net",79],["crosswordsolver.com",79],["cruciverba.it",79],["cults3d.com",79],["daily.co.jp",79],["dailynewshungary.com",79],["dayspedia.com",79],["dictionary.cambridge.org",79],["dictionnaire.lerobert.com",79],["dnevno.hr",79],["drweil.com",79],["dziennik.pl",79],["eigachannel.jp",79],["ev-times.com",79],["finanzfrage.net",79],["footballchannel.jp",79],["forsal.pl",79],["freemcserver.net",79],["fxstreet-id.com",79],["fxstreet-vn.com",79],["fxstreet.*",79],["game8.jp",79],["gardeningsoul.com",79],["gazetaprawna.pl",79],["gesundheitsfrage.net",79],["gigafile.nu",79],["globalrph.com",79],["golf-live.at",79],["grapee.jp",79],["gutefrage.net",79],["heureka.cz",79],["horairesdouverture24.fr",79],["hotcopper.com.au",79],["indiatimes.com",79],["infor.pl",79],["iza.ne.jp",79],["j-cast.com",79],["j-town.net",79],["jablickar.cz",79],["javatpoint.com",79],["jikayosha.jp",79],["judgehype.com",79],["kinmaweb.jp",79],["km77.com",79],["idokep.hu",79],["kobe-journal.com",79],["kreuzwortraetsel.de",79],["kurashiru.com",79],["kyoteibiyori.com",79],["lacuarta.com",79],["lakeshowlife.com",79],["laleggepertutti.it",79],["langenscheidt.com",79],["laposte.net",79],["lawyersgunsmoneyblog.com",79],["ldoceonline.com",79],["letemsvetemapplem.eu",[79,252]],["listentotaxman.com",79],["livenewschat.eu",79],["luremaga.jp",79],["mainichi.jp",79],["maketecheasier.com",[79,80]],["malaymail.com",79],["mamastar.jp",79],["mathplayzone.com",79],["midhudsonnews.com",79],["minkou.jp",79],["modhub.us",79],["motorradfrage.net",79],["motscroises.fr",79],["muragon.com",79],["nana-press.com",79],["natalie.mu",79],["nbadraft.net",79],["newsinlevels.com",79],["newsweekjapan.jp",79],["niketalk.com",79],["nikkan-gendai.com",79],["oeffnungszeitenbuch.de",79],["onlineradiobox.com",79],["operawire.com",79],["optionsprofitcalculator.com",79],["oraridiapertura24.it",79],["oxfordlearnersdictionaries.com",79],["palabr.as",79],["pashplus.jp",79],["persoenlich.com",79],["petitfute.com",79],["play-games.com",79],["powerpyx.com",79],["pptvhd36.com",79],["profitline.hu",79],["quefaire.be",79],["radio-australia.org",79],["radio-osterreich.at",79],["raetsel-hilfe.de",79],["ranking.net",79],["references.be",79],["reisefrage.net",79],["relevantmagazine.com",79],["reptilesmagazine.com",79],["roleplayer.me",79],["rostercon.com",79],["samsungmagazine.eu",79],["sankei.com",79],["sanspo.com",79],["scribens.com",79],["scribens.fr",79],["slashdot.org",79],["soccerdigestweb.com",79],["sourceforge.net",[79,83]],["southhemitv.com",79],["sportalkorea.com",79],["sportlerfrage.net",79],["syosetu.com",79],["szamoldki.hu",79],["talkwithstranger.com",79],["the-crossword-solver.com",79],["thedigestweb.com",79],["traicy.com",79],["transparentcalifornia.com",79],["transparentnevada.com",79],["trilltrill.jp",79],["tunebat.com",79],["tvtv.ca",79],["tvtv.us",79],["tweaktown.com",79],["tyda.se",79],["ufret.jp",79],["uptodown.com",79],["verkaufsoffener-sonntag.com",79],["wamgame.jp",79],["watchdocumentaries.com",79],["webdesignledger.com",79],["wetteronline.de",79],["wfmz.com",79],["winfuture.de",79],["word-grabber.com",79],["worldjournal.com",79],["wort-suchen.de",79],["woxikon.*",79],["young-machine.com",79],["yugioh-starlight.com",79],["yutura.net",79],["zagreb.info",79],["zakzak.co.jp",79],["2chblog.jp",79],["2monkeys.jp",79],["46matome.net",79],["akb48glabo.com",79],["akb48matomemory.com",79],["alfalfalfa.com",79],["all-nationz.com",79],["anihatsu.com",79],["aqua2ch.net",79],["blog.esuteru.com",79],["blog.livedoor.jp",79],["blog.jp",79],["blogo.jp",79],["chaos2ch.com",79],["choco0202.work",79],["crx7601.com",79],["danseisama.com",79],["dareda.net",79],["digital-thread.com",79],["doorblog.jp",79],["exawarosu.net",79],["fgochaldeas.com",79],["football-2ch.com",79],["gekiyaku.com",79],["golog.jp",79],["hacchaka.net",79],["heartlife-matome.com",79],["liblo.jp",79],["fesoku.net",79],["fiveslot777.com",79],["gamejksokuhou.com",79],["girlsreport.net",79],["girlsvip-matome.com",79],["grasoku.com",79],["gundamlog.com",79],["honyaku-channel.net",79],["ikarishintou.com",79],["imas-cg.net",79],["imihu.net",79],["inutomo11.com",79],["itainews.com",79],["itaishinja.com",79],["jin115.com",79],["jisaka.com",79],["jnews1.com",79],["jumpsokuhou.com",79],["jyoseisama.com",79],["keyakizaka46matomemory.net",79],["kidan-m.com",79],["kijoden.com",79],["kijolariat.net",79],["kijolifehack.com",79],["kijomatomelog.com",79],["kijyokatu.com",79],["kijyomatome.com",79],["kijyomatome-ch.com",79],["kijyomita.com",79],["kirarafan.com",79],["kitimama-matome.net",79],["kitizawa.com",79],["konoyubitomare.jp",79],["kotaro269.com",79],["kyousoku.net",79],["ldblog.jp",79],["livedoor.biz",79],["livedoor.blog",79],["majikichi.com",79],["matacoco.com",79],["matomeblade.com",79],["matomelotte.com",79],["matometemitatta.com",79],["mojomojo-licarca.com",79],["morikinoko.com",79],["nandemo-uketori.com",79],["netatama.net",79],["news-buzz1.com",79],["news30over.com",79],["nishinippon.co.jp",79],["nmb48-mtm.com",79],["norisoku.com",79],["npb-news.com",79],["ocsoku.com",79],["okusama-kijyo.com",79],["onecall2ch.com",79],["onihimechan.com",79],["orusoku.com",79],["otakomu.jp",79],["otoko-honne.com",79],["oumaga-times.com",79],["outdoormatome.com",79],["pachinkopachisro.com",79],["paranormal-ch.com",79],["recosoku.com",79],["s2-log.com",79],["saikyo-jump.com",79],["shuraba-matome.com",79],["ske48matome.net",79],["squallchannel.com",79],["sukattojapan.com",79],["sumaburayasan.com",79],["sutekinakijo.com",79],["usi32.com",79],["uwakich.com",79],["uwakitaiken.com",79],["vault76.info",79],["vipnews.jp",79],["vippers.jp",79],["vipsister23.com",79],["vtubernews.jp",79],["watarukiti.com",79],["world-fusigi.net",79],["zakuzaku911.com",79],["zch-vip.com",79],["interfootball.co.kr",80],["a-ha.io",80],["cboard.net",80],["jjang0u.com",80],["joongdo.co.kr",80],["viva100.com",80],["gamingdeputy.com",80],["alle-tests.nl",80],["tweaksforgeeks.com",80],["m.inven.co.kr",80],["mlbpark.donga.com",80],["meconomynews.com",80],["brandbrief.co.kr",80],["motorgraph.com",80],["bleepingcomputer.com",81],["pravda.com.ua",81],["ap7am.com",82],["cinema.com.my",82],["dolldivine.com",82],["giornalone.it",82],["iplocation.net",82],["jamaicaobserver.com",82],["jawapos.com",82],["jutarnji.hr",82],["kompasiana.com",82],["mediaindonesia.com",82],["niice-woker.com",82],["slobodnadalmacija.hr",82],["upmedia.mg",82],["advertisertape.com",84],["tapeadvertisement.com",84],["tapelovesads.org",84],["watchadsontape.com",84],["vosfemmes.com",85],["voyeurfrance.net",85],["hyundaitucson.info",86],["exambd.net",87],["cgtips.org",88],["freewebcart.com",89],["freemagazines.top",89],["siamblockchain.com",89],["emuenzen.de",90],["kickass.*",91],["unblocked.id",93],["listendata.com",94],["7xm.xyz",94],["fastupload.io",94],["azmath.info",94],["wouterplanet.com",95],["xenvn.com",96],["pfps.gg",97],["4kporn.xxx",98],["androidacy.com",99],["4porn4.com",100],["bestpornflix.com",101],["freeroms.com",101],["andhrafriends.com",101],["723qrh1p.fun",101],["98zero.com",102],["mediaset.es",102],["updatewallah.in",102],["hwbusters.com",102],["beatsnoop.com",103],["fetchpik.com",103],["hackerranksolution.in",103],["camsrip.com",103],["help.sakarnewz.com",103],["btcbunch.com",105],["teachoo.com",[106,107]],["mafiatown.pl",108],["bitcotasks.com",109],["hilites.today",110],["udvl.com",111],["www.chip.de",[112,113,114,115]],["topsporter.net",116],["sportshub.to",116],["streamcheck.link",117],["myanimelist.net",118],["unofficialtwrp.com",119],["codec.kyiv.ua",119],["kimcilonlyofc.com",119],["bitcosite.com",120],["bitzite.com",120],["teluguflix.*",121],["hacoos.com",122],["watchhentai.net",123],["hes-goals.io",123],["pkbiosfix.com",123],["casi3.xyz",123],["zefoy.com",124],["mailgen.biz",125],["tempinbox.xyz",125],["vidello.net",126],["newscon.org",127],["yunjiema.top",127],["pcgeeks-games.com",127],["resizer.myct.jp",128],["gametohkenranbu.sakuraweb.com",129],["jisakuhibi.jp",130],["rank1-media.com",130],["lifematome.blog",131],["fm.sekkaku.net",132],["free-avx.jp",133],["dvdrev.com",134],["betweenjpandkr.blog",135],["nft-media.net",136],["ghacks.net",137],["leak.sx",138],["paste.bin.sx",138],["pornleaks.in",138],["aliezstream.pro",139],["daddy-stream.xyz",139],["daddylive1.*",139],["esportivos.*",139],["instream.pro",139],["mylivestream.pro",139],["poscitechs.*",139],["powerover.online",139],["sportea.link",139],["sportsurge.stream",139],["ufckhabib.com",139],["ustream.pro",139],["animeshqip.site",139],["apkship.shop",139],["buzter.pro",139],["enjoysports.bond",139],["filedot.to",139],["foreverquote.xyz",139],["hdstream.one",139],["kingstreamz.site",139],["live.fastsports.store",139],["livesnow.me",139],["livesports4u.pw",139],["masterpro.click",139],["nuxhallas.click",139],["papahd.info",139],["rgshows.me",139],["sportmargin.live",139],["sportmargin.online",139],["sportsloverz.xyz",139],["sportzlive.shop",139],["supertipzz.online",139],["totalfhdsport.xyz",139],["ultrastreamlinks.xyz",139],["usgate.xyz",139],["webmaal.cfd",139],["wizistreamz.xyz",139],["worldstreamz.shop",139],["educ4m.com",139],["fromwatch.com",139],["visualnewshub.com",139],["nectareousoverelate.com",141],["khoaiphim.com",142],["haafedk2.com",143],["fordownloader.com",143],["jovemnerd.com.br",144],["totalcsgo.com",145],["vivamax.asia",146],["manysex.com",147],["gaminginfos.com",148],["tinxahoivn.com",149],["automoto.it",150],["codelivly.com",151],["tchatche.com",152],["cryptoearns.com",152],["lordchannel.com",153],["novelhall.com",154],["bagi.co.in",155],["keran.co",155],["biblestudytools.com",156],["christianheadlines.com",156],["ibelieve.com",156],["kuponigo.com",157],["inxxx.com",158],["bemyhole.com",158],["embedwish.com",159],["filelions.live",159],["leakslove.net",159],["jenismac.com",160],["vxetable.cn",161],["nizarstream.com",162],["donghuaworld.com",163],["letsdopuzzles.com",164],["rediff.com",165],["igay69.com",166],["kimcilonly.link",167],["dzapk.com",168],["darknessporn.com",169],["familyporner.com",169],["freepublicporn.com",169],["pisshamster.com",169],["punishworld.com",169],["xanimu.com",169],["tainio-mania.online",170],["eroticmoviesonline.me",171],["series9movies.com",171],["teleclub.xyz",172],["ecamrips.com",173],["showcamrips.com",173],["tucinehd.com",174],["9animetv.to",175],["qiwi.gg",176],["jornadaperfecta.com",177],["loseart.com",178],["sousou-no-frieren.com",179],["unite-guide.com",181],["thebullspen.com",182],["receitasdaora.online",183],["hiraethtranslation.com",185],["all3do.com",186],["d0000d.com",186],["d000d.com",186],["d0o0d.com",186],["do0od.com",186],["do7go.com",186],["doods.*",186],["doodstream.*",186],["dooodster.com",186],["doply.net",186],["ds2play.com",186],["ds2video.com",186],["vidply.com",186],["vide0.net",186],["xfreehd.com",187],["freethesaurus.com",188],["thefreedictionary.com",188],["dexterclearance.com",189],["x86.co.kr",190],["westmanga.*",191],["onlyfaucet.com",192],["x-x-x.tube",193],["fdownloader.net",194],["thehackernews.com",195],["mielec.pl",196],["treasl.com",197],["mrbenne.com",198],["cnpics.org",[199,259]],["ovabee.com",199],["porn4f.com",199],["cnxx.me",[199,259]],["ai18.pics",[199,259]],["sportsonline.si",200],["fiuxy2.co",201],["animeunity.to",202],["tokopedia.com",203],["remixsearch.net",204],["remixsearch.es",204],["onlineweb.tools",204],["sharing.wtf",204],["2024tv.ru",205],["modrinth.com",206],["curseforge.com",206],["xnxxcom.xyz",207],["sportsurge.net",208],["joyousplay.xyz",208],["quest4play.xyz",[208,210]],["generalpill.net",208],["moneycontrol.com",209],["cookiewebplay.xyz",210],["ilovetoplay.xyz",210],["streamcaster.live",210],["weblivehdplay.ru",210],["nontongo.win",211],["m9.news",212],["callofwar.com",213],["secondhandsongs.com",214],["nudezzers.org",215],["nohost.one",216],["vidbinge.com",216],["send.cm",217],["send.now",217],["3rooodnews.net",218],["xxxbfvideo.net",219],["filmy4wap.co.in",220],["filmy4waps.org",220],["gameshop4u.com",221],["regenzi.site",221],["historicaerials.com",222],["handirect.fr",223],["animefenix.tv",224],["fsiblog3.club",225],["kamababa.desi",225],["sat-sharing.com",225],["getfiles.co.uk",226],["genelify.com",227],["dhtpre.com",228],["xbaaz.com",229],["lineupexperts.com",231],["fearmp4.ru",232],["fbstreams.*",233],["m.shuhaige.net",234],["streamingnow.mov",235],["thesciencetoday.com",236],["sportnews.to",236],["ghbrisk.com",238],["iplayerhls.com",238],["bacasitus.com",239],["katoikos.world",239],["abstream.to",240],["pawastreams.pro",241],["rebajagratis.com",242],["tv.latinlucha.es",242],["fetcheveryone.com",243],["reviewdiv.com",244],["laurelberninteriors.com",245],["godlike.com",246],["godlikeproductions.com",246],["bestsportslive.org",247],["bestreamsports.org",248],["streamhls.to",250],["xmalay1.net",251],["pc-builds.com",253],["streambolt.tv",254],["watch-dbz57.funonline.co.in",256],["live4all.net",257],["pokemon-project.com",258],["3minx.com",259],["555fap.com",259],["blackwidof.org",259],["fc2ppv.stream",259],["hentai4f.com",259],["hentaipig.com",259],["javball.com",259],["javbee.vip",259],["javring.com",259],["javsunday.com",259],["kin8-av.com",259],["porn4f.org",259],["sweetie-fox.com",259],["xcamcovid.com",259],["moviesonlinefree.*",260],["cefirates.com",261],["comicleaks.com",261],["tapmyback.com",261],["ping.gg",261],["nookgaming.com",261],["creatordrop.com",261],["bitdomain.biz",261],["fort-shop.kiev.ua",261],["accuretawealth.com",261],["resourceya.com",261],["tracktheta.com",261],["adaptive.marketing",261],["camberlion.com",261],["trybawaryjny.pl",261],["segops.madisonspecs.com",261],["stresshelden-coaching.de",261],["controlconceptsusa.com",261],["ryaktive.com",261],["tip.etip-staging.etip.io",261],["future-fortune.com",262],["furucombo.app",262],["bolighub.dk",262],["intercity.technology",263],["freelancer.taxmachine.be",263],["adria.gg",263],["fjlaboratories.com",263],["abhijith.page",263],["helpmonks.com",263],["dataunlocker.com",264],["proboards.com",265],["winclassic.net",265],["farmersjournal.ie",266]]);
const exceptionsMap = new Map([["chatango.com",[4]],["twitter.com",[4]],["youtube.com",[4]]]);
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
