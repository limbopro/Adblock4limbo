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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","uAssets"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","detectAdBlock"],["script","ctrlKey"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|\\]\\([\"']_aQS0/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","\"data-sdk\""],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","popundersPerIP"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/$.*open/"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/AdBlock/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/detect|WebAssembly/"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["nontonx.com",[3,4]],["pandadoc.com",5],["web.de",6],["skidrowreloaded.com",[7,19]],["1337x.*",[7,19]],["1stream.eu",7],["4kwebplay.xyz",7],["alldownplay.xyz",7],["anime4i.vip",7],["antennasports.ru",7],["boxingstream.me",7],["buffsports.*",7],["buffstreams.app",7],["claplivehdplay.ru",[7,214]],["cracksports.me",[7,18]],["cricstream.me",7],["dartsstreams.com",7],["euro2024direct.ru",7],["ext.to",7],["extrem-down.*",7],["extreme-down.*",7],["eztv.*",7],["eztvx.to",7],["f1box.me",7],["flix-wave.*",7],["flixrave.me",7],["golfstreams.me",7],["hikaritv.xyz",7],["kenitv.me",[7,18]],["lewblivehdplay.ru",[7,214]],["mixdrop.*",[7,19]],["mlbbite.net",7],["mlbstreams.ai",7],["motogpstream.me",7],["nbabox.me",7],["nflbox.me",7],["nhlbox.me",7],["qatarstreams.me",[7,18]],["qqwebplay.xyz",[7,214]],["rnbastreams.com",7],["rugbystreams.me",7],["sanet.*",7],["socceronline.me",7],["soccerworldcup.me",[7,18]],["sportshd.*",7],["streamed.su",7],["sushiscan.net",7],["topstreams.info",7],["totalsportek.to",7],["tvableon.me",[7,18]],["vibestreams.*",7],["vipstand.pm",7],["viwlivehdplay.ru",7],["worldsports.me",7],["x1337x.*",7],["wawacity.*",7],["720pstream.*",[7,69]],["embedsports.me",[7,96]],["embedstream.me",[7,18,19,69,96]],["jumbtv.com",[7,96]],["reliabletv.me",[7,96]],["topembed.pw",[7,71,214]],["crackstreamer.net",7],["methstreamer.com",7],["vidsrc.*",[7,18,69]],["vidco.pro",[7,69]],["freestreams-live.*>>",7],["moviepilot.de",[8,61]],["userupload.*",9],["cinedesi.in",9],["intro-hd.net",9],["monacomatin.mc",9],["nodo313.net",9],["mhdtvsports.*",[9,12]],["hesgoal-tv.io",9],["hesgoal-vip.io",9],["earn.punjabworks.com",9],["mahajobwala.in",9],["solewe.com",9],["panel.play.hosting",9],["total-sportek.to",9],["hesgoal-vip.to",9],["shoot-yalla.me",9],["shoot-yalla-tv.live",9],["pahe.*",[10,19,71]],["soap2day.*",10],["yts.mx",11],["magesypro.com",12],["pinsystem.co.uk",12],["elrellano.com",12],["tinyppt.com",12],["veganab.co",12],["camdigest.com",12],["learnmany.in",12],["amanguides.com",[12,40]],["highkeyfinance.com",[12,40]],["appkamods.com",12],["techacode.com",12],["djqunjab.in",12],["downfile.site",12],["expertvn.com",12],["trangchu.news",12],["3dmodelshare.org",12],["nulleb.com",12],["asiaon.top",12],["reset-scans.*",12],["coursesghar.com",12],["thecustomrom.com",12],["snlookup.com",12],["bingotingo.com",12],["ghior.com",12],["3dmili.com",12],["karanpc.com",12],["plc247.com",12],["apkdelisi.net",12],["freepasses.org",12],["poplinks.*",[12,44]],["tomarnarede.pt",12],["basketballbuzz.ca",12],["dribbblegraphics.com",12],["kemiox.com",12],["teksnologi.com",12],["bharathwick.com",12],["descargaspcpro.net",12],["dx-tv.com",[12,19]],["rt3dmodels.com",12],["plc4me.com",12],["blisseyhusbands.com",12],["mhdsports.*",12],["mhdsportstv.*",12],["mhdtvworld.*",12],["mhdtvmax.*",12],["mhdstream.*",12],["madaradex.org",12],["trigonevo.com",12],["franceprefecture.fr",12],["jazbaat.in",12],["aipebel.com",12],["audiotools.blog",12],["embdproxy.xyz",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["viprow.*",[18,19,69]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,69]],["cloudvideotv.*",[18,69]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,19]],["megaup.net",18],["olympicstreams.co",[18,69]],["tv247.us",[18,19]],["uploadhaven.com",18],["userscloud.com",[18,69]],["streamnoads.com",[18,19,69,88]],["mlbbox.me",18],["vikingf1le.us.to",18],["neodrive.xyz",18],["mdfx9dc8n.net",19],["mdzsmutpcvykb.net",19],["mixdrop21.net",19],["mixdropjmk.pw",19],["123-movies.*",19],["123movieshd.*",19],["123movieshub.*",19],["123moviesme.*",19],["1337x.ninjaproxy1.com",19],["141jav.com",19],["1bit.space",19],["1bitspace.com",19],["1stream.*",19],["1tamilmv.*",19],["2ddl.*",19],["2umovies.*",19],["345movies.com",19],["3dporndude.com",19],["3hiidude.*",19],["4archive.org",19],["4horlover.com",19],["4stream.*",19],["560pmovie.com",19],["5movies.*",19],["7hitmovies.*",19],["85tube.com",19],["85videos.com",19],["9xmovie.*",19],["aagmaal.*",[19,69]],["acefile.co",19],["actusports.eu",19],["adblockeronstape.*",[19,88]],["adblockeronstreamtape.*",19],["adblockplustape.*",[19,88]],["adblockstreamtape.*",[19,88]],["adblockstrtape.*",[19,88]],["adblockstrtech.*",[19,88]],["adblocktape.*",[19,88]],["adclickersbot.com",19],["adcorto.*",19],["adricami.com",19],["adslink.pw",19],["adultstvlive.com",19],["adz7short.space",19],["aeblender.com",19],["affordwonder.net",19],["ahdafnews.blogspot.com",19],["aiblog.tv",[19,72]],["ak47sports.com",19],["akuma.moe",19],["alexsports.*",19],["alexsportss.*",19],["alexsportz.*",19],["allplayer.tk",19],["amateurblog.tv",[19,72]],["androidadult.com",[19,241]],["anhsexjav.xyz",19],["anidl.org",19],["anime-loads.org",19],["animeblkom.net",19],["animefire.plus",19],["animelek.me",19],["animepahe.*",19],["animesanka.*",19],["animesorionvip.net",19],["animespire.net",19],["animestotais.xyz",19],["animeyt.es",19],["animixplay.*",19],["aniplay.*",19],["anroll.net",19],["antiadtape.*",[19,88]],["anymoviess.xyz",19],["aotonline.org",19],["asenshu.com",19],["asialiveaction.com",19],["asianclipdedhd.net",19],["asianclub.*",19],["ask4movie.*",19],["askim-bg.com",19],["asumsikedaishop.com",19],["atomixhq.*",[19,69]],["atomohd.*",19],["avcrempie.com",19],["avseesee.com",19],["gettapeads.com",[19,88]],["bajarjuegospcgratis.com",19],["balkanteka.net",19],["beinmatch.*",[19,28]],["belowporn.com",19],["bestgirlsexy.com",19],["bestnhl.com",19],["bestporn4free.com",19],["bestporncomix.com",19],["bet36.es",19],["bgwp.cc",[19,24]],["bhaai.*",19],["bigwarp.*",19],["bikinbayi.com",19],["bikinitryon.net",19],["birdurls.com",19],["bitsearch.to",19],["blackcockadventure.com",19],["blackcockchurch.org",19],["blackporncrazy.com",19],["blizzboygames.net",19],["blizzpaste.com",19],["blkom.com",19],["blog-peliculas.com",19],["blogtrabalhista.com",19],["blurayufr.*",19],["bobsvagene.club",19],["bokep.im",19],["bokep.top",19],["bolly4umovies.click",19],["boyfuck.me",19],["brilian-news.id",19],["brupload.net",19],["buffstreams.*",19],["buzter.xyz",19],["caitlin.top",19],["camchickscaps.com",19],["camgirls.casa",19],["canalesportivo.*",19],["cashurl.in",19],["catchthrust.net",19],["ccurl.net",[19,69]],["celebrity-leaks.net",19],["cgpelis.net",19],["charexempire.com",19],["clickndownload.*",19],["clicknupload.*",[19,71]],["clik.pw",19],["coin-free.com",[19,38]],["coins100s.fun",19],["comohoy.com",19],["compucalitv.com",19],["coolcast2.com",19],["coreradio.online",19],["cosplaytab.com",19],["countylocalnews.com",19],["cpmlink.net",19],["crackstreamshd.click",19],["crespomods.com",19],["crisanimex.com",19],["crunchyscan.fr",19],["cuevana3.fan",19],["cuevana3hd.com",19],["cumception.com",19],["cutpaid.com",19],["daddylive.*",[19,69,212]],["daddylivehd.*",[19,69]],["dailyuploads.net",19],["datawav.club",19],["daughtertraining.com",19],["ddrmovies.*",19],["deepgoretube.site",19],["deltabit.co",19],["deporte-libre.top",19],["depvailon.com",19],["derleta.com",19],["desiremovies.*",19],["desivdo.com",19],["desixx.net",19],["detikkebumen.com",19],["deutschepornos.me",19],["devlib.*",19],["diasoft.xyz",19],["directupload.net",19],["divxtotal.*",19],["divxtotal1.*",19],["dixva.com",19],["dlhd.*",19],["doctormalay.com",19],["dofusports.xyz",19],["doods.cam",19],["doodskin.lat",19],["downloadrips.com",19],["downvod.com",19],["dphunters.mom",19],["dragontranslation.com",19],["dvdfullestrenos.com",19],["dvdplay.*",[19,69]],["ebookbb.com",19],["ebookhunter.net",19],["egyanime.com",19],["egygost.com",19],["ekasiwap.com",19],["electro-torrent.pl",19],["elixx.*",19],["enjoy4k.*",19],["eplayer.click",19],["erovoice.us",19],["eroxxx.us",19],["estrenosdoramas.net",19],["estrenosflix.*",19],["estrenosflux.*",19],["estrenosgo.*",19],["everia.club",19],["everythinginherenet.blogspot.com",19],["extrafreetv.com",19],["extratorrent.st",19],["extremotvplay.com",19],["f1stream.*",19],["fapinporn.com",19],["fapptime.com",19],["fastreams.live",19],["faucethero.com",19],["favoyeurtube.net",19],["fbstream.*",19],["fc2db.com",19],["femdom-joi.com",19],["fenixsite.net",19],["file4go.*",19],["filegram.to",[19,67,72]],["fileone.tv",19],["film1k.com",19],["filmeonline2023.net",19],["filmesonlinex.org",19],["filmesonlinexhd.biz",[19,69]],["filmisub.cc",19],["filmovitica.com",19],["filmymaza.blogspot.com",19],["filmyzilla.*",[19,69]],["filthy.family",19],["findav.*",19],["findporn.*",19],["flickzap.com",19],["flixmaza.*",19],["flizmovies.*",19],["flostreams.xyz",19],["flyfaucet.com",19],["footyhunter.lol",19],["forex-trnd.com",19],["forumchat.club",19],["forumlovers.club",19],["freemoviesonline.biz",19],["freeomovie.co.in",19],["freeomovie.to",19],["freeporncomic.net",19],["freepornhdonlinegay.com",19],["freeproxy.io",19],["freeshot.live",19],["freetvsports.*",19],["freeuse.me",19],["freeusexporn.com",19],["fsharetv.cc",19],["fsicomics.com",19],["fullymaza.*",19],["g-porno.com",19],["g-streaming.com",19],["g3g.*",19],["galinhasamurai.com",19],["gamepcfull.com",19],["gameronix.com",19],["gamesmountain.com",19],["gamesrepacks.com",19],["gamingguru.fr",19],["gamovideo.com",19],["garota.cf",19],["gaydelicious.com",19],["gaypornhdfree.com",19],["gaypornhot.com",19],["gaypornmasters.com",19],["gaysex69.net",19],["gemstreams.com",19],["get-to.link",19],["girlscanner.org",19],["giurgiuveanul.ro",19],["gledajcrtace.xyz",19],["gocast2.com",19],["gomo.to",19],["gostosa.cf",19],["gotxx.*",19],["grantorrent.*",19],["gratispaste.com",19],["gravureblog.tv",[19,72]],["haho.moe",19],["hayhd.net",19],["hdmoviesfair.*",[19,69]],["hdmoviesflix.*",19],["hdpornflix.com",19],["hdsaprevodom.com",19],["hdstreamss.club",19],["hentaiporno.xxx",19],["hentais.tube",19],["hentaistream.co",19],["hentaitk.net",19],["hentaitube.online",19],["hentaiworld.tv",19],["hesgoal.tv",19],["hexupload.net",19],["hhkungfu.tv",19],["highlanderhelp.com",19],["hiidudemoviez.*",19],["hindimovies.to",[19,69]],["hindimoviestv.com",19],["hiperdex.com",19],["hispasexy.org",19],["hitprn.com",19],["hoca4u.com",19],["hollymoviehd.cc",19],["hoodsite.com",19],["hopepaste.download",19],["hornylips.com",19],["hotgranny.live",19],["hotmama.live",19],["hqcelebcorner.net",19],["huren.best",19],["hwnaturkya.com",[19,69]],["hxfile.co",[19,69]],["igfap.com",19],["iklandb.com",19],["illink.net",19],["imgsen.*",19],["imgsex.xyz",19],["imgsto.*",19],["imgtraffic.com",19],["imx.to",19],["incest.*",19],["incestflix.*",19],["influencersgonewild.org",19],["infosgj.free.fr",19],["investnewsbrazil.com",19],["itdmusics.com",19],["itopmusic.*",19],["itsuseful.site",19],["itunesfre.com",19],["iwatchfriendsonline.net",[19,144]],["jackstreams.com",19],["japangaysex.com",19],["jatimupdate24.com",19],["jav-fun.cc",19],["jav-noni.cc",19],["javboys.tv",19],["javcl.com",19],["javf.net",19],["javhay.net",19],["javhoho.com",19],["javhun.com",19],["javleak.com",19],["javmost.*",19],["javporn.best",19],["javsek.net",19],["javsex.to",19],["javtiful.com",[19,21]],["jimdofree.com",19],["jiofiles.org",19],["jorpetz.com",19],["jp-films.com",19],["jpop80ss3.blogspot.com",19],["jpopsingles.eu",[19,190]],["kantotflix.net",19],["kantotinyo.com",19],["kaoskrew.org",19],["kaplog.com",19],["keeplinks.*",19],["keepvid.*",19],["keralahd.*",19],["keralatvbox.com",19],["khatrimazaful.*",19],["khatrimazafull.*",[19,72]],["kickassanimes.io",19],["kimochi.info",19],["kimochi.tv",19],["kinemania.tv",19],["kissasian.*",19],["konstantinova.net",19],["koora-online.live",19],["kunmanga.com",19],["kwithsub.com",19],["lat69.me",19],["latinblog.tv",[19,72]],["latinomegahd.net",19],["leechall.*",19],["leechpremium.link",19],["legendas.dev",19],["legendei.net",19],["lightdlmovies.blogspot.com",19],["lighterlegend.com",19],["linclik.com",19],["linkebr.com",19],["linkrex.net",19],["linkshorts.*",19],["lulu.st",19],["lulustream.com",[19,71]],["lulustream.live",19],["luluvdo.com",19],["luluvdoo.com",19],["mangagenki.me",19],["mangahere.onl",19],["mangaweb.xyz",19],["mangoporn.net",19],["mangovideo.*",19],["manhwahentai.me",19],["masahub.com",19],["masahub.net",19],["masaporn.*",19],["maturegrannyfuck.com",19],["mdy48tn97.com",19],["mediapemersatubangsa.com",19],["mega-mkv.com",19],["megapastes.com",19],["megapornpics.com",19],["messitv.net",19],["meusanimes.net",19],["milfmoza.com",19],["milfnut.*",19],["milfzr.com",19],["millionscast.com",19],["mimaletamusical.blogspot.com",19],["miniurl.*",19],["mirrorace.*",19],["mitly.us",19],["mixdroop.*",19],["mixixxx000000.cyou",19],["mkv-pastes.com",19],["mkvcage.*",19],["mlbstream.*",19],["mlsbd.*",19],["mmsbee.*",19],["monaskuliner.ac.id",19],["moredesi.com",19],["motogpstream.*",19],["movgotv.net",19],["movi.pk",19],["movieplex.*",19],["movierulzlink.*",19],["movies123.*",19],["moviesflix.*",19],["moviesmeta.*",19],["moviesmod.com.pl",19],["moviessources.*",19],["moviesverse.*",19],["movieswbb.com",19],["moviewatch.com.pk",19],["moviezwaphd.*",19],["mp4upload.com",19],["mrskin.live",19],["mrunblock.*",19],["multicanaistv.com",19],["mundowuxia.com",19],["myeasymusic.ir",19],["myonvideo.com",19],["myyouporn.com",19],["mzansifun.com",19],["narutoget.info",19],["naughtypiss.com",19],["nbastream.*",19],["nekopoi.*",[19,72]],["nerdiess.com",19],["netfuck.net",19],["new-fs.eu",19],["newmovierulz.*",19],["newtorrentgame.com",19],["neymartv.net",19],["nflstream.*",19],["nflstreams.me",19],["nhlstream.*",19],["nicekkk.com",19],["nicesss.com",19],["nlegs.com",19],["noblocktape.*",[19,88]],["nocensor.*",19],["noni-jav.com",19],["notformembersonly.com",19],["novamovie.net",19],["novelpdf.xyz",19],["novelssites.com",[19,69]],["novelup.top",19],["nsfwr34.com",19],["nu6i-bg-net.com",19],["nudebabesin3d.com",19],["nzbstars.com",19],["o2tvseries.com",19],["ohjav.com",19],["ojearnovelas.com",19],["okanime.xyz",19],["olweb.tv",19],["on9.stream",19],["onepiece-mangaonline.com",19],["onifile.com",19],["onionstream.live",19],["onlinesaprevodom.net",19],["onlyfams.*",19],["onlyfullporn.video",19],["onplustv.live",19],["originporn.com",19],["ouo.*",19],["ovagames.com",19],["palimas.org",19],["password69.com",19],["pastemytxt.com",19],["payskip.org",19],["pctfenix.*",[19,69]],["pctnew.*",[19,69]],["peeplink.in",19],["peliculas24.*",19],["peliculasmx.net",19],["pelisflix20.*",19],["pelisplus.*",19],["pencarian.link",19],["pendidikandasar.net",19],["pervertgirlsvideos.com",19],["pervyvideos.com",19],["phim12h.com",19],["picdollar.com",19],["picsxxxporn.com",19],["pinayscandalz.com",19],["pinkueiga.net",19],["piratebay.*",19],["piratefast.xyz",19],["piratehaven.xyz",19],["pirateiro.com",19],["pirlotvonline.org",19],["playtube.co.za",19],["plugintorrent.com",19],["plyjam.*",19],["plylive.*",19],["plyvdo.*",19],["pmvzone.com",19],["porndish.com",19],["pornez.net",19],["pornfetishbdsm.com",19],["pornfits.com",19],["pornhd720p.com",19],["pornhoarder.*",[19,234]],["pornobr.club",19],["pornobr.ninja",19],["pornodominicano.net",19],["pornofaps.com",19],["pornoflux.com",19],["pornotorrent.com.br",19],["pornredit.com",19],["pornstarsyfamosas.es",19],["pornstreams.co",19],["porntn.com",19],["pornxbit.com",19],["pornxday.com",19],["portaldasnovinhas.shop",19],["portugues-fcr.blogspot.com",19],["poseyoung.com",19],["pover.org",19],["prbay.*",19],["projectfreetv.*",19],["proxybit.*",19],["proxyninja.org",19],["psarips.*",19],["pubfilmz.com",19],["publicsexamateurs.com",19],["punanihub.com",19],["putlocker5movies.org",19],["pxxbay.com",19],["r18.best",19],["racaty.*",19],["ragnaru.net",19],["rapbeh.net",19],["rapelust.com",19],["rapload.org",19],["read-onepiece.net",19],["readhunters.xyz",19],["remaxhd.*",19],["reshare.pm",19],["retro-fucking.com",19],["retrotv.org",19],["rintor.*",19],["rnbxclusive.*",19],["rnbxclusive0.*",19],["rnbxclusive1.*",19],["robaldowns.com",19],["rockdilla.com",19],["rojadirecta.*",19],["rojadirectaenvivo.*",19],["rojitadirecta.blogspot.com",19],["romancetv.site",19],["rsoccerlink.site",19],["rugbystreams.*",19],["rule34.club",19],["rule34hentai.net",19],["rumahbokep-id.com",19],["sadisflix.*",19],["safego.cc",19],["safetxt.*",19],["sakurafile.com",19],["samax63.lol",19],["satoshi-win.xyz",19],["savefiles.com",[19,67]],["scat.gold",19],["scatfap.com",19],["scatkings.com",19],["scnlog.me",19],["scripts-webmasters.net",19],["serie-turche.com",19],["serijefilmovi.com",19],["sexcomics.me",19],["sexdicted.com",19],["sexgay18.com",19],["sexiezpix.com",19],["sexofilm.co",19],["sextgem.com",19],["sextubebbw.com",19],["sgpics.net",19],["shadowrangers.*",19],["shadowrangers.live",19],["shahee4u.cam",19],["shahi4u.*",19],["shahid4u1.*",19],["shahid4uu.*",19],["shahiid-anime.net",19],["shavetape.*",19],["shemale6.com",19],["shid4u.*",19],["shinden.pl",19],["short.es",19],["shortearn.*",19],["shorten.*",19],["shorttey.*",19],["shortzzy.*",19],["showmanga.blog.fc2.com",19],["shrt10.com",19],["sideplusleaks.net",19],["silverblog.tv",[19,72]],["silverpic.com",19],["sinhalasub.life",19],["sinsitio.site",19],["sinvida.me",19],["skidrowcpy.com",19],["skymovieshd.*",19],["slut.mom",19],["smallencode.me",19],["smoner.com",19],["smplace.com",19],["soccerinhd.com",[19,69]],["socceron.name",19],["socceronline.*",[19,69]],["socialblog.tv",[19,72]],["softairbay.com",19],["softarchive.*",19],["sokobj.com",19],["songsio.com",19],["souexatasmais.com",19],["sportbar.live",19],["sports-stream.*",19],["sportstream1.cfd",19],["sporttuna.*",19],["srt.am",19],["srts.me",19],["sshhaa.*",19],["stapadblockuser.*",[19,88]],["stape.*",[19,88]],["stapewithadblock.*",19],["starblog.tv",[19,72]],["starmusiq.*",19],["stbemuiptv.com",19],["stockingfetishvideo.com",19],["strcloud.*",[19,88]],["stream.crichd.vip",19],["stream.lc",19],["stream25.xyz",19],["streamadblocker.*",[19,69,88]],["streamadblockplus.*",[19,88]],["streambee.to",19],["streambucket.net",19],["streamcdn.*",19],["streamcenter.pro",19],["streamers.watch",19],["streamgo.to",19],["streamhub.*",19],["streamingclic.com",19],["streamkiste.tv",19],["streamoupload.xyz",19],["streamservicehd.click",19],["streamsport.*",19],["streamta.*",[19,88]],["streamtape.*",[19,72,88]],["streamtapeadblockuser.*",[19,88]],["streamvid.net",[19,29]],["strikeout.*",[19,71]],["strtape.*",[19,88]],["strtapeadblock.*",[19,88]],["strtapeadblocker.*",[19,88]],["strtapewithadblock.*",19],["strtpe.*",[19,88]],["subtitleporn.com",19],["subtitles.cam",19],["suicidepics.com",19],["supertelevisionhd.com",19],["supexfeeds.com",19],["swatchseries.*",19],["swiftload.io",19],["swipebreed.net",19],["swzz.xyz",19],["sxnaar.com",19],["tabooflix.*",19],["taboosex.club",19],["tapeantiads.com",[19,88]],["tapeblocker.com",[19,88]],["tapenoads.com",[19,88]],["tapewithadblock.org",[19,88,274]],["teamos.xyz",19],["teen-wave.com",19],["teenporncrazy.com",19],["telegramgroups.xyz",19],["telenovelasweb.com",19],["tennisstreams.*",19],["tensei-shitara-slime-datta-ken.com",19],["tfp.is",19],["tgo-tv.co",[19,69]],["thaihotmodels.com",19],["theblueclit.com",19],["thebussybandit.com",19],["thedaddy.*",[19,212]],["thelastdisaster.vip",19],["themoviesflix.*",19],["thepiratebay.*",19],["thepiratebay0.org",19],["thepiratebay10.info",19],["thesexcloud.com",19],["thothub.today",19],["tightsexteens.com",19],["tlnovelas.net",19],["tmearn.*",19],["tojav.net",19],["tokusatsuindo.com",19],["toonanime.*",19],["top16.net",19],["topdrama.net",19],["topvideosgay.com",19],["torlock.*",19],["tormalayalam.*",19],["torrage.info",19],["torrents.vip",19],["torrentz2eu.*",19],["torrsexvid.com",19],["tpb-proxy.xyz",19],["trannyteca.com",19],["trendytalker.com",19],["tuktukcinma.com",19],["tumanga.net",19],["turbogvideos.com",19],["turboimagehost.com",19],["turbovid.me",19],["turkishseriestv.org",19],["turksub24.net",19],["tutele.sx",19],["tutelehd.*",19],["tvglobe.me",19],["tvpclive.com",19],["tvply.*",19],["tvs-widget.com",19],["tvseries.video",19],["u4m.*",19],["ucptt.com",19],["ufaucet.online",19],["ufcfight.online",19],["ufcstream.*",19],["ultrahorny.com",19],["ultraten.net",19],["unblocknow.*",19],["unblockweb.me",19],["underhentai.net",19],["uniqueten.net",19],["uns.bio",19],["upbaam.com",19],["uploadbuzz.*",19],["upstream.to",19],["usagoals.*",19],["valhallas.click",[19,143]],["valeriabelen.com",19],["verdragonball.online",19],["vexmoviex.*",19],["vfxmed.com",19],["vidclouds.*",19],["video.az",19],["videostreaming.rocks",19],["videowood.tv",19],["vidlox.*",19],["vidorg.net",19],["vidtapes.com",19],["vidz7.com",19],["vikistream.com",19],["vinovo.to",19],["vipboxtv.*",[19,69]],["vipleague.*",[19,237]],["virpe.cc",19],["visifilmai.org",19],["viveseries.com",19],["vladrustov.sx",19],["volokit2.com",[19,212]],["vstorrent.org",19],["w-hentai.com",19],["watch-series.*",19],["watchbrooklynnine-nine.com",19],["watchelementaryonline.com",19],["watchjavidol.com",19],["watchkobestreams.info",19],["watchlostonline.net",19],["watchmodernfamilyonline.com",19],["watchmonkonline.com",19],["watchrulesofengagementonline.com",19],["watchseries.*",19],["webcamrips.com",19],["wincest.xyz",19],["wolverdon.fun",19],["wordcounter.icu",19],["worldmovies.store",19],["worldstreams.click",19],["wpdeployit.com",19],["wqstreams.tk",19],["wwwsct.com",19],["xanimeporn.com",19],["xblog.tv",[19,72]],["xclusivejams.*",19],["xmoviesforyou.*",19],["xn--verseriesespaollatino-obc.online",19],["xpornium.net",19],["xsober.com",19],["xvip.lat",19],["xxgasm.com",19],["xxvideoss.org",19],["xxx18.uno",19],["xxxdominicana.com",19],["xxxfree.watch",19],["xxxmax.net",19],["xxxwebdlxxx.top",19],["xxxxvideo.uno",19],["yabai.si",19],["yeshd.net",19],["youdbox.*",19],["youjax.com",19],["yourdailypornvideos.ws",19],["yourupload.com",19],["youswear.com",19],["ytmp3eu.*",19],["yts-subs.*",19],["yts.*",19],["ytstv.me",19],["yumeost.net",19],["zerion.cc",19],["zerocoin.top",19],["zitss.xyz",19],["zooqle.*",19],["zpaste.net",19],["fastreams.com",19],["redittsports.com",19],["sky-sports.store",19],["streamsoccer.site",19],["tntsports.store",19],["wowstreams.co",19],["dutchycorp.*",20],["faucet.ovh",20],["mmacore.tv",21],["nxbrew.net",21],["brawlify.com",21],["oko.sh",22],["variety.com",[23,79]],["gameskinny.com",23],["deadline.com",[23,79]],["mlive.com",[23,79]],["doujindesu.*",24],["atlasstudiousa.com",24],["51bonusrummy.in",[24,72]],["washingtonpost.com",25],["gosexpod.com",26],["sexo5k.com",27],["truyen-hentai.com",27],["theshedend.com",29],["zeroupload.com",29],["securenetsystems.net",29],["miniwebtool.com",29],["bchtechnologies.com",29],["eracast.cc",29],["flatai.org",29],["leeapk.com",29],["spiegel.de",30],["jacquieetmichel.net",31],["hausbau-forum.de",32],["althub.club",32],["kiemlua.com",32],["tea-coffee.net",33],["spatsify.com",33],["newedutopics.com",33],["getviralreach.in",33],["edukaroo.com",33],["funkeypagali.com",33],["careersides.com",33],["nayisahara.com",33],["wikifilmia.com",33],["infinityskull.com",33],["viewmyknowledge.com",33],["iisfvirtual.in",33],["starxinvestor.com",33],["jkssbalerts.com",33],["imagereviser.com",34],["labgame.io",[35,36]],["kenzo-flowertag.com",37],["mdn.lol",37],["btcbitco.in",38],["btcsatoshi.net",38],["cempakajaya.com",38],["crypto4yu.com",38],["manofadan.com",38],["readbitcoin.org",38],["wiour.com",38],["tremamnon.com",38],["bitsmagic.fun",38],["ourcoincash.xyz",38],["aylink.co",39],["sugarona.com",40],["nishankhatri.xyz",40],["cety.app",41],["exe-urls.com",41],["exego.app",41],["cutlink.net",41],["cutyurls.com",41],["cutty.app",41],["cutnet.net",41],["jixo.online",41],["tinys.click",42],["loan.creditsgoal.com",42],["rupyaworld.com",42],["vahantoday.com",42],["techawaaz.in",42],["loan.bgmi32bitapk.in",42],["formyanime.com",42],["gsm-solution.com",42],["h-donghua.com",42],["hindisubbedacademy.com",42],["hm4tech.info",42],["mydverse.*",42],["panelprograms.blogspot.com",42],["ripexbooster.xyz",42],["serial4.com",42],["tutorgaming.com",42],["everydaytechvams.com",42],["dipsnp.com",42],["cccam4sat.com",42],["diendancauduong.com",42],["zeemoontv-24.blogspot.com",42],["stitichsports.com",42],["aiimgvlog.fun",43],["appsbull.com",44],["diudemy.com",44],["maqal360.com",44],["androjungle.com",44],["bookszone.in",44],["drakescans.com",44],["shortix.co",44],["makefreecallsonline.com",44],["msonglyrics.com",44],["app-sorteos.com",44],["bokugents.com",44],["client.pylexnodes.net",44],["btvplus.bg",44],["listar-mc.net",44],["blog24.me",[45,46]],["coingraph.us",47],["impact24.us",47],["iconicblogger.com",48],["auto-crypto.click",48],["tpi.li",49],["oii.la",[49,71]],["shrinke.*",50],["shrinkme.*",50],["smutty.com",50],["e-sushi.fr",50],["gayforfans.com",50],["freeadultcomix.com",50],["down.dataaps.com",50],["filmweb.pl",[50,185]],["livecamrips.*",50],["safetxt.net",50],["filespayouts.com",50],["atglinks.com",51],["kbconlinegame.com",52],["hamrojaagir.com",52],["odijob.com",52],["stfly.biz",53],["airevue.net",53],["atravan.net",53],["simana.online",54],["fooak.com",54],["joktop.com",54],["evernia.site",54],["falpus.com",54],["rfiql.com",55],["gujjukhabar.in",55],["smartfeecalculator.com",55],["djxmaza.in",55],["thecubexguide.com",55],["jytechs.in",55],["financacerta.com",56],["encurtads.net",56],["mastkhabre.com",57],["weshare.is",58],["rokni.xyz",59],["keedabankingnews.com",59],["pig69.com",59],["cosplay18.pics",[59,262]],["3dsfree.org",60],["alpin.de",61],["boersennews.de",61],["chefkoch.de",61],["chip.de",61],["clever-tanken.de",61],["desired.de",61],["donnerwetter.de",61],["fanfiktion.de",61],["focus.de",61],["formel1.de",61],["frustfrei-lernen.de",61],["gewinnspiele.tv",61],["giga.de",61],["gut-erklaert.de",61],["kino.de",61],["messen.de",61],["nickles.de",61],["nordbayern.de",61],["spielfilm.de",61],["teltarif.de",[61,62]],["unsere-helden.com",61],["weltfussball.at",61],["watson.de",61],["mactechnews.de",61],["sport1.de",61],["welt.de",61],["sport.de",61],["allthingsvegas.com",63],["100percentfedup.com",63],["beforeitsnews.com",63],["concomber.com",63],["conservativefiringline.com",63],["dailylol.com",63],["funnyand.com",63],["letocard.fr",63],["mamieastuce.com",63],["meilleurpronostic.fr",63],["patriotnationpress.com",63],["toptenz.net",63],["vitamiiin.com",63],["writerscafe.org",63],["populist.press",63],["dailytruthreport.com",63],["livinggospeldaily.com",63],["first-names-meanings.com",63],["welovetrump.com",63],["thehayride.com",63],["thelibertydaily.com",63],["thepoke.co.uk",63],["thepolitistick.com",63],["theblacksphere.net",63],["shark-tank.com",63],["naturalblaze.com",63],["greatamericanrepublic.com",63],["dailysurge.com",63],["truthlion.com",63],["flagandcross.com",63],["westword.com",63],["republicbrief.com",63],["freedomfirstnetwork.com",63],["phoenixnewtimes.com",63],["designbump.com",63],["clashdaily.com",63],["madworldnews.com",63],["reviveusa.com",63],["sonsoflibertymedia.com",63],["thedesigninspiration.com",63],["videogamesblogger.com",63],["protrumpnews.com",63],["thepalmierireport.com",63],["kresy.pl",63],["thepatriotjournal.com",63],["thegatewaypundit.com",63],["wltreport.com",63],["miaminewtimes.com",63],["politicalsignal.com",63],["rightwingnews.com",63],["bigleaguepolitics.com",63],["comicallyincorrect.com",63],["upornia.com",64],["pillowcase.su",65],["akaihentai.com",66],["cine-calidad.*",66],["veryfreeporn.com",66],["theporngod.com",66],["besthdgayporn.com",67],["drivenime.com",67],["erothots1.com",67],["javup.org",67],["shemaleup.net",67],["transflix.net",67],["worthcrete.com",67],["hentaihere.com",68],["player.smashy.stream",68],["player.smashystream.com",68],["123movies.*",69],["123moviesla.*",69],["123movieweb.*",69],["2embed.*",69],["9xmovies.*",69],["adsh.cc",69],["adshort.*",69],["afilmyhouse.blogspot.com",69],["ak.sv",69],["allmovieshub.*",69],["animesultra.com",69],["api.webs.moe",69],["apkmody.io",69],["asianplay.*",69],["atishmkv.*",69],["attvideo.com",69],["backfirstwo.site",69],["bflix.*",69],["buffsports.me",69],["crazyblog.in",69],["cricstream.*",69],["crictime.*",69],["cuervotv.me",69],["divicast.com",69],["dlhd.so",69],["dood.*",[69,191]],["dooood.*",[69,191]],["embed.meomeo.pw",69],["extramovies.*",69],["faselhd.*",69],["faselhds.*",69],["filemoon.*",69],["filmeserialeonline.org",69],["filmy.*",69],["filmyhit.*",69],["filmywap.*",69],["flexyhit.com",69],["fmovies.*",69],["foreverwallpapers.com",69],["french-streams.cc",69],["fslinks.org",69],["gdplayer.*",69],["goku.*",69],["gomovies.*",69],["gowatchseries.*",69],["hdfungamezz.*",69],["hdtoday.to",69],["hinatasoul.com",69],["hindilinks4u.*",69],["hurawatch.*",[69,220]],["igg-games.com",69],["infinityscans.net",69],["jalshamoviezhd.*",69],["livecricket.*",69],["mangareader.to",69],["membed.net",69],["mgnetu.com",69],["mhdsport.*",69],["mkvcinemas.*",69],["movies2watch.*",69],["moviespapa.*",69],["mp3juice.info",69],["mp3juices.cc",69],["mp4moviez.*",69],["mydownloadtube.*",69],["myflixerz.to",69],["nowmetv.net",69],["nowsportstv.com",69],["nuroflix.*",69],["nxbrew.com",69],["o2tvseries.*",69],["o2tvseriesz.*",69],["oii.io",69],["paidshitforfree.com",69],["pepperlive.info",69],["pirlotv.*",69],["playertv.net",69],["poscitech.*",69],["primewire.*",69],["putlocker68.com",69],["redecanais.*",69],["roystream.com",69],["rssing.com",69],["s.to",69],["serienstream.*",69],["sflix.*",69],["shahed4u.*",69],["shaheed4u.*",69],["share.filesh.site",69],["sharkfish.xyz",69],["skidrowcodex.net",69],["smartermuver.com",69],["speedostream.*",69],["sportcast.*",69],["sports-stream.site",69],["sportskart.*",69],["stream4free.live",69],["streamingcommunity.*",[69,71,108]],["tamilarasan.*",69],["tamilfreemp3songs.*",69],["tamilmobilemovies.in",69],["tamilprinthd.*",69],["tapeadsenjoyer.com",[69,88]],["thewatchseries.live",69],["tnmusic.in",69],["torrentdosfilmes.*",69],["travelplanspro.com",69],["tubemate.*",69],["tusfiles.com",69],["tutlehd4.com",69],["twstalker.com",69],["uploadrar.*",69],["uqload.*",69],["vid-guard.com",69],["vidcloud9.*",69],["vido.*",69],["vidoo.*",69],["vidsaver.net",69],["vidspeeds.com",69],["viralitytoday.com",69],["voiranime.stream",69],["vudeo.*",69],["vumoo.*",69],["watchdoctorwhoonline.com",69],["watchomovies.*",[69,105]],["watchserie.online",69],["woxikon.in",69],["www-y2mate.com",69],["yesmovies.*",69],["ylink.bid",69],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",69],["kickassanime.*",70],["11xmovies.*",71],["cinego.tv",71],["dokoembed.pw",71],["ev01.to",71],["fojik.*",71],["fstream365.com",71],["fzmovies.*",71],["linkz.*",71],["minoplres.xyz",71],["mostream.us",71],["moviedokan.*",71],["myflixer.*",71],["prmovies.*",71],["readcomiconline.li",71],["s3embtaku.pro",71],["sflix2.to",71],["sportshub.stream",71],["streamblasters.*",71],["topcinema.cam",71],["webxzplay.cfd",71],["zonatmo.com",71],["animesaturn.cx",71],["filecrypt.*",71],["hunterscomics.com",71],["aniwave.uk",71],["dojing.net",72],["krx18.com",72],["mangaforfree.com",72],["pornx.to",72],["savefiles.*",[72,253]],["streampoi.com",72],["strmup.to",[72,143]],["up4stream.com",[72,105]],["ups2up.fun",[72,105]],["videq.stream",72],["xmegadrive.com",72],["rahim-soft.com",72],["x-video.tube",72],["rubystm.com",72],["rubyvid.com",72],["rubyvidhub.com",72],["stmruby.com",72],["streamruby.com",72],["poophd.cc",72],["windowsreport.com",72],["fuckflix.click",72],["celebzcircle.com",73],["bi-girl.net",73],["ftuapps.*",73],["hentaiseason.com",73],["hoodtrendspredict.com",73],["marcialhub.xyz",73],["odiadance.com",73],["osteusfilmestuga.online",73],["ragnarokscanlation.opchapters.com",73],["sampledrive.org",73],["showflix.*",73],["swordalada.org",73],["tvappapk.com",73],["twobluescans.com",[73,74]],["varnascan.xyz",73],["hallofseries.com",75],["luciferdonghua.in",75],["truyentranhfull.net",75],["fcportables.com",75],["repack-games.com",75],["ibooks.to",75],["blog.tangwudi.com",75],["filecatchers.com",75],["babaktv.com",75],["samchui.com",76],["sandrarose.com",76],["sherdog.com",76],["sidereel.com",76],["silive.com",76],["simpleflying.com",76],["sloughexpress.co.uk",76],["spacenews.com",76],["sportsgamblingpodcast.com",76],["spotofteadesigns.com",76],["stacysrandomthoughts.com",76],["ssnewstelegram.com",76],["superherohype.com",[76,79]],["tablelifeblog.com",76],["thebeautysection.com",76],["thecelticblog.com",76],["thecurvyfashionista.com",76],["thefashionspot.com",76],["thegamescabin.com",76],["thenerdyme.com",76],["thenonconsumeradvocate.com",76],["theprudentgarden.com",76],["thethings.com",76],["timesnews.net",76],["topspeed.com",76],["toyotaklub.org.pl",76],["travelingformiles.com",76],["tutsnode.org",76],["viralviralvideos.com",76],["wannacomewith.com",76],["wimp.com",[76,79]],["windsorexpress.co.uk",76],["woojr.com",76],["worldoftravelswithkids.com",76],["worldsurfleague.com",76],["cheatsheet.com",77],["pwinsider.com",77],["c-span.org",78],["15min.lt",79],["247sports.com",79],["abc17news.com",79],["agrodigital.com",79],["al.com",79],["aliontherunblog.com",79],["allaboutthetea.com",79],["allmovie.com",79],["allmusic.com",79],["allthingsthrifty.com",79],["amessagewithabottle.com",79],["artforum.com",79],["artnews.com",79],["awkward.com",79],["barcablaugranes.com",79],["barnsleychronicle.com",79],["bethcakes.com",79],["betweenenglandandiowa.com",79],["bgr.com",79],["blazersedge.com",79],["blogher.com",79],["blu-ray.com",79],["bluegraygal.com",79],["briefeguru.de",79],["brobible.com",79],["cagesideseats.com",79],["cbsnews.com",79],["cbssports.com",[79,258]],["celiacandthebeast.com",79],["chaptercheats.com",79],["cleveland.com",79],["clickondetroit.com",79],["commercialcompetentedigitale.ro",79],["dailydot.com",79],["dailykos.com",79],["dailyvoice.com",79],["decider.com",79],["didyouknowfacts.com",79],["dogtime.com",79],["eater.com",79],["ebaumsworld.com",79],["eldiariony.com",79],["fark.com",79],["femestella.com",79],["fmradiofree.com",79],["footwearnews.com",79],["free-power-point-templates.com",79],["freeconvert.com",79],["frogsandsnailsandpuppydogtail.com",79],["funtasticlife.com",79],["fwmadebycarli.com",79],["golfdigest.com",79],["gulflive.com",79],["hollywoodreporter.com",79],["homeglowdesign.com",79],["honeygirlsworld.com",79],["ibtimes.co.in",79],["imgur.com",79],["indiewire.com",79],["intouchweekly.com",79],["jasminemaria.com",79],["kens5.com",79],["kion546.com",79],["knowyourmeme.com",79],["last.fm",79],["lehighvalleylive.com",79],["lettyskitchen.com",79],["lifeandstylemag.com",79],["lifeinleggings.com",79],["lizzieinlace.com",79],["localnews8.com",79],["lonestarlive.com",79],["madeeveryday.com",79],["maidenhead-advertiser.co.uk",79],["mandatory.com",79],["mardomreport.net",79],["masslive.com",79],["melangery.com",79],["mmamania.com",79],["momtastic.com",79],["mostlymorgan.com",79],["motherwellmag.com",79],["musicfeeds.com.au",79],["naszemiasto.pl",79],["nationalpost.com",79],["nationalreview.com",79],["nbcsports.com",79],["news.com.au",79],["ninersnation.com",79],["nj.com",79],["nordot.app",79],["nothingbutnewcastle.com",79],["nsjonline.com",79],["nypost.com",79],["observer.com",79],["oregonlive.com",79],["pagesix.com",79],["patheos.com",79],["pennlive.com",79],["playstationlifestyle.net",79],["puckermom.com",79],["reelmama.com",79],["robbreport.com",79],["rollingstone.com",79],["royalmailchat.co.uk",79],["sbnation.com",79],["sheknows.com",79],["sneakernews.com",79],["sourcingjournal.com",79],["sport-fm.gr",79],["stylecaster.com",79],["syracuse.com",79],["tastingtable.com",79],["thecw.com",79],["thedailymeal.com",79],["theflowspace.com",79],["themarysue.com",79],["tokfm.pl",79],["torontosun.com",79],["tvline.com",79],["usmagazine.com",79],["wallup.net",79],["weather.com",79],["worldstar.com",79],["worldstarhiphop.com",79],["wwd.com",79],["yourcountdown.to",79],["automobile-catalog.com",[80,81,82]],["baseballchannel.jp",[80,81]],["hoyme.jp",80],["motorbikecatalog.com",[80,81,82]],["topstarnews.net",80],["islamicfinder.org",80],["secure-signup.net",80],["dramabeans.com",80],["dropgame.jp",[80,81]],["manta.com",80],["tportal.hr",80],["tvtropes.org",80],["convertcase.net",80],["uranai.nosv.org",81],["yakkun.com",81],["373news.com",81],["alc.co.jp",81],["allthetests.com",81],["animanch.com",81],["aniroleplay.com",81],["apkmirror.com",[81,189]],["areaconnect.com",81],["as-web.jp",81],["aucfree.com",81],["autoby.jp",81],["autoc-one.jp",81],["autofrage.net",81],["bab.la",81],["babla.*",81],["bien.hu",81],["carscoops.com",81],["cesoirtv.com",81],["chanto.jp.net",81],["cinetrafic.fr",81],["cocokara-next.com",81],["collinsdictionary.com",81],["computerfrage.net",81],["crosswordsolver.com",81],["cruciverba.it",81],["cults3d.com",81],["daily.co.jp",81],["dailynewshungary.com",81],["dayspedia.com",81],["dictionary.cambridge.org",81],["dictionnaire.lerobert.com",81],["dnevno.hr",81],["drweil.com",81],["dziennik.pl",81],["eigachannel.jp",81],["ev-times.com",81],["finanzfrage.net",81],["footballchannel.jp",81],["forsal.pl",81],["freemcserver.net",81],["fxstreet-id.com",81],["fxstreet-vn.com",81],["fxstreet.*",81],["game8.jp",81],["gardeningsoul.com",81],["gazetaprawna.pl",81],["gesundheitsfrage.net",81],["gifu-np.co.jp",81],["gigafile.nu",81],["globalrph.com",81],["golf-live.at",81],["grapee.jp",81],["gutefrage.net",81],["hb-nippon.com",81],["heureka.cz",81],["horairesdouverture24.fr",81],["hotcopper.co.nz",81],["hotcopper.com.au",81],["idokep.hu",81],["indiatimes.com",81],["infor.pl",81],["iza.ne.jp",81],["j-cast.com",81],["j-town.net",81],["j7p.jp",81],["jablickar.cz",81],["javatpoint.com",81],["jikayosha.jp",81],["judgehype.com",81],["kinmaweb.jp",81],["km77.com",81],["kobe-journal.com",81],["kreuzwortraetsel.de",81],["kurashinista.jp",81],["kurashiru.com",81],["kyoteibiyori.com",81],["lacuarta.com",81],["lakeshowlife.com",81],["laleggepertutti.it",81],["langenscheidt.com",81],["laposte.net",81],["lawyersgunsmoneyblog.com",81],["ldoceonline.com",81],["listentotaxman.com",81],["livenewschat.eu",81],["luremaga.jp",81],["mahjongchest.com",81],["mainichi.jp",81],["maketecheasier.com",[81,82]],["malaymail.com",81],["mamastar.jp",81],["mathplayzone.com",81],["meteo60.fr",81],["midhudsonnews.com",81],["minesweeperquest.com",81],["minkou.jp",81],["modhub.us",81],["moin.de",81],["motorradfrage.net",81],["motscroises.fr",81],["muragon.com",81],["nana-press.com",81],["natalie.mu",81],["nationaltoday.com",81],["nbadraft.net",81],["newsinlevels.com",81],["newsweekjapan.jp",81],["niketalk.com",81],["nikkan-gendai.com",81],["nouvelobs.com",81],["nyitvatartas24.hu",81],["oeffnungszeitenbuch.de",81],["onlineradiobox.com",81],["operawire.com",81],["optionsprofitcalculator.com",81],["oraridiapertura24.it",81],["oxfordlearnersdictionaries.com",81],["palabr.as",81],["pashplus.jp",81],["persoenlich.com",81],["petitfute.com",81],["play-games.com",81],["powerpyx.com",81],["pptvhd36.com",81],["profitline.hu",81],["puzzlegarage.com",81],["quefaire.be",81],["radio-australia.org",81],["radio-osterreich.at",81],["raetsel-hilfe.de",81],["ranking.net",81],["references.be",81],["reisefrage.net",81],["relevantmagazine.com",81],["reptilesmagazine.com",81],["roleplayer.me",81],["rostercon.com",81],["samsungmagazine.eu",81],["sankei.com",81],["sanspo.com",81],["scribens.com",81],["scribens.fr",81],["slashdot.org",81],["soccerdigestweb.com",81],["solitairehut.com",81],["sourceforge.net",[81,85]],["southhemitv.com",81],["sportalkorea.com",81],["sportlerfrage.net",81],["syosetu.com",81],["szamoldki.hu",81],["talkwithstranger.com",81],["the-crossword-solver.com",81],["thedigestweb.com",81],["traicy.com",81],["transparentcalifornia.com",81],["transparentnevada.com",81],["trilltrill.jp",81],["tunebat.com",81],["tvtv.ca",81],["tvtv.us",81],["tweaktown.com",81],["twn.hu",81],["tyda.se",81],["ufret.jp",81],["uptodown.com",81],["verkaufsoffener-sonntag.com",81],["vimm.net",81],["wamgame.jp",81],["watchdocumentaries.com",81],["webdesignledger.com",81],["wetteronline.de",81],["wfmz.com",81],["winfuture.de",81],["word-grabber.com",81],["worldjournal.com",81],["wort-suchen.de",81],["woxikon.*",81],["young-machine.com",81],["yugioh-starlight.com",81],["yutura.net",81],["zagreb.info",81],["zakzak.co.jp",81],["2chblog.jp",81],["2monkeys.jp",81],["46matome.net",81],["akb48glabo.com",81],["akb48matomemory.com",81],["alfalfalfa.com",81],["all-nationz.com",81],["anihatsu.com",81],["aqua2ch.net",81],["blog.esuteru.com",81],["blog.livedoor.jp",81],["blog.jp",81],["blogo.jp",81],["chaos2ch.com",81],["choco0202.work",81],["crx7601.com",81],["danseisama.com",81],["dareda.net",81],["digital-thread.com",81],["doorblog.jp",81],["exawarosu.net",81],["fgochaldeas.com",81],["football-2ch.com",81],["gekiyaku.com",81],["golog.jp",81],["hacchaka.net",81],["heartlife-matome.com",81],["liblo.jp",81],["fesoku.net",81],["fiveslot777.com",81],["gamejksokuhou.com",81],["girlsreport.net",81],["girlsvip-matome.com",81],["grasoku.com",81],["gundamlog.com",81],["honyaku-channel.net",81],["ikarishintou.com",81],["imas-cg.net",81],["imihu.net",81],["inutomo11.com",81],["itainews.com",81],["itaishinja.com",81],["jin115.com",81],["jisaka.com",81],["jnews1.com",81],["jumpsokuhou.com",81],["jyoseisama.com",81],["keyakizaka46matomemory.net",81],["kidan-m.com",81],["kijoden.com",81],["kijolariat.net",81],["kijolifehack.com",81],["kijomatomelog.com",81],["kijyokatu.com",81],["kijyomatome.com",81],["kijyomatome-ch.com",81],["kijyomita.com",81],["kirarafan.com",81],["kitimama-matome.net",81],["kitizawa.com",81],["konoyubitomare.jp",81],["kotaro269.com",81],["kyousoku.net",81],["ldblog.jp",81],["livedoor.biz",81],["livedoor.blog",81],["majikichi.com",81],["matacoco.com",81],["matomeblade.com",81],["matomelotte.com",81],["matometemitatta.com",81],["mojomojo-licarca.com",81],["morikinoko.com",81],["nandemo-uketori.com",81],["netatama.net",81],["news-buzz1.com",81],["news30over.com",81],["nishinippon.co.jp",81],["nmb48-mtm.com",81],["norisoku.com",81],["npb-news.com",81],["ocsoku.com",81],["okusama-kijyo.com",81],["onecall2ch.com",81],["onihimechan.com",81],["orusoku.com",81],["otakomu.jp",81],["otoko-honne.com",81],["oumaga-times.com",81],["outdoormatome.com",81],["pachinkopachisro.com",81],["paranormal-ch.com",81],["recosoku.com",81],["s2-log.com",81],["saikyo-jump.com",81],["shuraba-matome.com",81],["ske48matome.net",81],["squallchannel.com",81],["sukattojapan.com",81],["sumaburayasan.com",81],["sutekinakijo.com",81],["usi32.com",81],["uwakich.com",81],["uwakitaiken.com",81],["vault76.info",81],["vipnews.jp",81],["vippers.jp",81],["vipsister23.com",81],["vtubernews.jp",81],["watarukiti.com",81],["world-fusigi.net",81],["zakuzaku911.com",81],["zch-vip.com",81],["interfootball.co.kr",82],["a-ha.io",82],["cboard.net",82],["jjang0u.com",82],["joongdo.co.kr",82],["viva100.com",82],["gamingdeputy.com",82],["alle-tests.nl",82],["tweaksforgeeks.com",82],["m.inven.co.kr",82],["mlbpark.donga.com",82],["meconomynews.com",82],["brandbrief.co.kr",82],["motorgraph.com",82],["bleepingcomputer.com",83],["pravda.com.ua",83],["ap7am.com",84],["cinema.com.my",84],["dolldivine.com",84],["giornalone.it",84],["iplocation.net",84],["jamaicajawapos.com",84],["jutarnji.hr",84],["kompasiana.com",84],["mediaindonesia.com",84],["niice-woker.com",84],["slobodnadalmacija.hr",84],["upmedia.mg",84],["mentalfloss.com",86],["isgfrm.com",87],["advertisertape.com",88],["tapeadvertisement.com",88],["tapelovesads.org",88],["watchadsontape.com",88],["vosfemmes.com",89],["voyeurfrance.net",89],["hyundaitucson.info",90],["exambd.net",91],["cgtips.org",92],["freewebcart.com",93],["freemagazines.top",93],["siamblockchain.com",93],["emuenzen.de",94],["kickass.*",95],["unblocked.id",97],["listendata.com",98],["7xm.xyz",98],["fastupload.io",98],["azmath.info",98],["wouterplanet.com",99],["xenvn.com",100],["pfps.gg",101],["4kporn.xxx",102],["androidacy.com",103],["4porn4.com",104],["bestpornflix.com",105],["freeroms.com",105],["andhrafriends.com",105],["723qrh1p.fun",105],["98zero.com",106],["mediaset.es",106],["updatewallah.in",106],["hwbusters.com",106],["beatsnoop.com",107],["fetchpik.com",107],["hackerranksolution.in",107],["camsrip.com",107],["help.sakarnewz.com",107],["btcbunch.com",109],["teachoo.com",[110,111]],["mafiatown.pl",112],["bitcotasks.com",113],["hilites.today",114],["udvl.com",115],["www.chip.de",[116,117,118,119]],["topsporter.net",120],["sportshub.to",120],["streamcheck.link",121],["myanimelist.net",122],["unofficialtwrp.com",123],["codec.kyiv.ua",123],["kimcilonlyofc.com",123],["bitcosite.com",124],["bitzite.com",124],["teluguflix.*",125],["hacoos.com",126],["watchhentai.net",127],["hes-goals.io",127],["pkbiosfix.com",127],["casi3.xyz",127],["zefoy.com",128],["mailgen.biz",129],["tempinbox.xyz",129],["vidello.net",130],["newscon.org",131],["yunjiema.top",131],["pcgeeks-games.com",131],["resizer.myct.jp",132],["gametohkenranbu.sakuraweb.com",133],["jisakuhibi.jp",134],["rank1-media.com",134],["lifematome.blog",135],["fm.sekkaku.net",136],["free-avx.jp",137],["dvdrev.com",138],["betweenjpandkr.blog",139],["nft-media.net",140],["ghacks.net",141],["leak.sx",142],["paste.bin.sx",142],["pornleaks.in",142],["aliezstream.pro",143],["daddy-stream.xyz",143],["daddylive1.*",143],["esportivos.*",143],["instream.pro",143],["mylivestream.pro",143],["poscitechs.*",143],["powerover.online",143],["sportea.link",143],["sportsurge.stream",143],["ufckhabib.com",143],["ustream.pro",143],["animeshqip.site",143],["apkship.shop",143],["buzter.pro",143],["enjoysports.bond",143],["filedot.to",143],["foreverquote.xyz",143],["hdstream.one",143],["kingstreamz.site",143],["live.fastsports.store",143],["livesnow.me",143],["livesports4u.pw",143],["masterpro.click",143],["nuxhallas.click",143],["papahd.info",143],["rgshows.me",143],["sportmargin.live",143],["sportmargin.online",143],["sportsloverz.xyz",143],["sportzlive.shop",143],["supertipzz.online",143],["totalfhdsport.xyz",143],["ultrastreamlinks.xyz",143],["usgate.xyz",143],["webmaal.cfd",143],["wizistreamz.xyz",143],["worldstreamz.shop",143],["educ4m.com",143],["fromwatch.com",143],["visualnewshub.com",143],["nectareousoverelate.com",145],["khoaiphim.com",146],["haafedk2.com",147],["fordownloader.com",147],["jovemnerd.com.br",148],["totalcsgo.com",149],["vivamax.asia",150],["manysex.com",151],["gaminginfos.com",152],["tinxahoivn.com",153],["m.4khd.com",154],["westmanga.*",154],["automoto.it",155],["codelivly.com",156],["tchatche.com",157],["cryptoearns.com",157],["lordchannel.com",158],["novelhall.com",159],["bagi.co.in",160],["keran.co",160],["biblestudytools.com",161],["christianheadlines.com",161],["ibelieve.com",161],["kuponigo.com",162],["inxxx.com",163],["bemyhole.com",163],["embedwish.com",164],["filelions.live",164],["leakslove.net",164],["jenismac.com",165],["vxetable.cn",166],["nizarstream.com",167],["donghuaworld.com",168],["letsdopuzzles.com",169],["rediff.com",170],["igay69.com",171],["kimcilonly.link",172],["dzapk.com",173],["darknessporn.com",174],["familyporner.com",174],["freepublicporn.com",174],["pisshamster.com",174],["punishworld.com",174],["xanimu.com",174],["tainio-mania.online",175],["eroticmoviesonline.me",176],["series9movies.com",176],["teleclub.xyz",177],["ecamrips.com",178],["showcamrips.com",178],["tucinehd.com",179],["9animetv.to",180],["qiwi.gg",181],["jornadaperfecta.com",182],["loseart.com",183],["sousou-no-frieren.com",184],["unite-guide.com",186],["thebullspen.com",187],["receitasdaora.online",188],["hiraethtranslation.com",190],["all3do.com",191],["d0000d.com",191],["d000d.com",191],["d0o0d.com",191],["do0od.com",191],["do7go.com",191],["doods.*",191],["doodstream.*",191],["dooodster.com",191],["doply.net",191],["ds2play.com",191],["ds2video.com",191],["vidply.com",191],["vide0.net",191],["xfreehd.com",192],["freethesaurus.com",193],["thefreedictionary.com",193],["dexterclearance.com",194],["x86.co.kr",195],["onlyfaucet.com",196],["x-x-x.tube",197],["fdownloader.net",198],["thehackernews.com",199],["mielec.pl",200],["treasl.com",201],["mrbenne.com",202],["cnpics.org",[203,262]],["ovabee.com",203],["porn4f.com",203],["cnxx.me",[203,262]],["ai18.pics",[203,262]],["sportsonline.si",204],["fiuxy2.co",205],["animeunity.to",206],["tokopedia.com",207],["remixsearch.net",208],["remixsearch.es",208],["onlineweb.tools",208],["sharing.wtf",208],["2024tv.ru",209],["modrinth.com",210],["curseforge.com",210],["xnxxcom.xyz",211],["sportsurge.net",212],["joyousplay.xyz",212],["quest4play.xyz",[212,214]],["generalpill.net",212],["moneycontrol.com",213],["cookiewebplay.xyz",214],["ilovetoplay.xyz",214],["streamcaster.live",214],["weblivehdplay.ru",214],["nontongo.win",215],["m9.news",216],["callofwar.com",217],["secondhandsongs.com",218],["nudezzers.org",219],["nohost.one",220],["vidbinge.com",220],["send.cm",221],["send.now",221],["3rooodnews.net",222],["xxxbfvideo.net",223],["filmy4wap.co.in",224],["filmy4waps.org",224],["gameshop4u.com",225],["regenzi.site",225],["historicaerials.com",226],["handirect.fr",227],["animefenix.tv",228],["fsiblog3.club",229],["kamababa.desi",229],["sat-sharing.com",229],["getfiles.co.uk",230],["genelify.com",231],["dhtpre.com",232],["xbaaz.com",233],["lineupexperts.com",235],["fearmp4.ru",236],["fbstreams.*",237],["wavewalt.me",237],["m.shuhaige.net",238],["streamingnow.mov",239],["thesciencetoday.com",240],["sportnews.to",240],["ghbrisk.com",242],["iplayerhls.com",242],["bacasitus.com",243],["katoikos.world",243],["abstream.to",244],["pawastreams.pro",245],["rebajagratis.com",246],["tv.latinlucha.es",246],["fetcheveryone.com",247],["reviewdiv.com",248],["laurelberninteriors.com",249],["godlike.com",250],["godlikeproductions.com",250],["bestsportslive.org",251],["bestreamsports.org",252],["streamhls.to",254],["xmalay1.net",255],["letemsvetemapplem.eu",256],["pc-builds.com",257],["watch-dbz57.funonline.co.in",259],["live4all.net",260],["pokemon-project.com",261],["3minx.com",262],["555fap.com",262],["blackwidof.org",262],["fc2ppv.stream",262],["hentai4f.com",262],["hentaipig.com",262],["javball.com",262],["javbee.vip",262],["javring.com",262],["javsunday.com",262],["kin8-av.com",262],["porn4f.org",262],["sweetie-fox.com",262],["xcamcovid.com",262],["moviesonlinefree.*",263],["fileszero.com",264],["viralharami.com",264],["bmamag.com",265],["bmacanberra.wpcomstaging.com",265],["cinemastervip.com",266],["mmsbee42.com",267],["mmsmasala.com",267],["cefirates.com",268],["comicleaks.com",268],["tapmyback.com",268],["ping.gg",268],["nookgaming.com",268],["creatordrop.com",268],["bitdomain.biz",268],["fort-shop.kiev.ua",268],["accuretawealth.com",268],["resourceya.com",268],["tracktheta.com",268],["adaptive.marketing",268],["camberlion.com",268],["trybawaryjny.pl",268],["segops.madisonspecs.com",268],["stresshelden-coaching.de",268],["controlconceptsusa.com",268],["ryaktive.com",268],["tip.etip-staging.etip.io",268],["future-fortune.com",269],["furucombo.app",269],["bolighub.dk",269],["intercity.technology",270],["freelancer.taxmachine.be",270],["adria.gg",270],["fjlaboratories.com",270],["abhijith.page",270],["helpmonks.com",270],["dataunlocker.com",271],["proboards.com",272],["winclassic.net",272],["farmersjournal.ie",273]]);
const exceptionsMap = new Map([["chatango.com",[7]],["twitter.com",[7]],["youtube.com",[7]]]);
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
