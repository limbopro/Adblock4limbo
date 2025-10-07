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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","sandbox"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","adsBlocked"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","\"data-sdk\""],["script","head.appendChild.bind"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","createOverlay"],["script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["script","_ADX_"],["script","div.offsetHeight"],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","popundersPerIP"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/getComputedStyle|overlay/"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","/Popunder|Banner/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","self.loadPW"],["script","onload"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","/bait|adblock/i"],["script","debugger"],["script","decodeURIComponent"],["script","adblock_popup"],["script","MutationObserver"],["script","ad-gate"],["script","randPrefix"],["script",":visible"],["script","Datafadace"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","sendFakeRequest"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["im9.eu",2],["marinetraffic.live",2],["nontonx.com",3],["embed.wcostream.com",4],["pandadoc.com",5],["web.de",6],["skidrowreloaded.com",[7,18]],["1337x.*",[7,18]],["1stream.eu",7],["4kwebplay.xyz",7],["alldownplay.xyz",7],["anime4i.vip",7],["antennasports.ru",[7,69]],["boxingstream.me",7],["buffstreams.app",7],["claplivehdplay.ru",7],["cracksports.me",[7,17]],["cricstream.me",7],["cricstreams.re",[7,17]],["dartsstreams.com",7],["dl-protect.link",7],["eurekaddl.baby",7],["euro2024direct.ru",7],["ext.to",7],["extrem-down.*",7],["extreme-down.*",7],["eztv.*",7],["eztvx.to",7],["f1box.me",7],["filecrypt.cc",7],["flix-wave.*",7],["flixrave.me",7],["golfstreams.me",7],["hikaritv.xyz",7],["ianimes.one",7],["istreameast.app",7],["jointexploit.net",[7,18]],["kenitv.me",[7,17]],["lewblivehdplay.ru",[7,213]],["mediacast.click",7],["mixdrop.*",[7,18]],["mlbbite.net",7],["mlbstreams.ai",7],["motogpstream.me",7],["nbabox.me",7],["nflbite.com",7],["nflbox.me",7],["nhlbox.me",7],["ogladaj.in",7],["playcast.click",7],["qatarstreams.me",[7,17]],["qqwebplay.xyz",[7,213]],["reidoscanais.life",7],["rnbastreams.com",7],["rugbystreams.me",7],["sanet.*",7],["socceronline.me",7],["soccerworldcup.me",[7,17]],["sportshd.*",7],["sportzonline.si",7],["streamed.su",7],["sushiscan.net",7],["topstreams.info",7],["totalsportek.to",7],["tvableon.me",[7,17]],["vecloud.eu",7],["vibestreams.*",7],["vipstand.pm",7],["webcamrips.to",7],["worldsports.me",7],["x1337x.*",7],["zone-telechargement.*",7],["720pstream.*",[7,69]],["embedsports.me",[7,104]],["embedstream.me",[7,17,18,69,104]],["reliabletv.me",[7,104]],["topembed.pw",[7,71,213]],["crackstreamer.net",7],["vidsrc.*",[7,17,69]],["vidco.pro",[7,69]],["freestreams-live.*>>",7],["moviepilot.de",[8,61]],["userupload.*",9],["cinedesi.in",9],["turkedebiyati.org",9],["intro-hd.net",9],["monacomatin.mc",9],["nodo313.net",9],["mhdtvsports.*",[9,35]],["hesgoal-tv.io",9],["hesgoal-vip.io",9],["earn.punjabworks.com",9],["mahajobwala.in",9],["solewe.com",9],["panel.play.hosting",9],["total-sportek.to",9],["hesgoal-vip.to",9],["shoot-yalla.me",9],["shoot-yalla-tv.live",9],["pahe.*",[10,18,71]],["soap2day.*",10],["yts.mx",11],["hqq.*",12],["waaw.*",12],["pixhost.*",13],["vipbox.*",14],["telerium.*",15],["apex2nova.com",15],["hoca5.com",15],["germancarforum.com",16],["cybercityhelp.in",16],["innateblogger.com",16],["omeuemprego.online",16],["negyzetmeterarak.hu",16],["viprow.*",[17,18,69]],["bluemediadownload.*",17],["bluemediafile.*",17],["bluemedialink.*",17],["bluemediastorage.*",17],["bluemediaurls.*",17],["urlbluemedia.*",17],["bowfile.com",17],["cloudvideo.tv",[17,69]],["cloudvideotv.*",[17,69]],["coloredmanga.com",17],["exeo.app",17],["hiphopa.net",[17,18]],["megaup.net",17],["olympicstreams.co",[17,69]],["tv247.us",[17,18]],["uploadhaven.com",17],["userscloud.com",[17,69]],["streamnoads.com",[17,18,69,96]],["neodrive.xyz",17],["mdfx9dc8n.net",18],["mdzsmutpcvykb.net",18],["mixdrop21.net",18],["mixdropjmk.pw",18],["mexa.sh",18],["123-movies.*",18],["123movieshd.*",18],["123movieshub.*",18],["123moviesme.*",18],["1337x.ninjaproxy1.com",18],["1bit.space",18],["1bitspace.com",18],["1stream.*",18],["1tamilmv.*",18],["2ddl.*",18],["2umovies.*",18],["3dporndude.com",18],["3hiidude.*",18],["4archive.org",18],["4chanarchives.com",18],["4horlover.com",18],["4stream.*",18],["560pmovie.com",18],["5movies.*",18],["7hitmovies.*",18],["85videos.com",18],["9xmovie.*",18],["aagmaal.*",[18,69]],["acefile.co",18],["actusports.eu",18],["adblockeronstape.*",[18,96]],["adblockeronstreamtape.*",18],["adblockplustape.*",[18,96]],["adblockstreamtape.*",[18,96]],["adblockstrtape.*",[18,96]],["adblockstrtech.*",[18,96]],["adblocktape.*",[18,96]],["adclickersbot.com",18],["adcorto.*",18],["adricami.com",18],["adslink.pw",[18,67]],["adultstvlive.com",18],["adz7short.space",18],["aeblender.com",18],["affordwonder.net",18],["ahdafnews.blogspot.com",18],["aiblog.tv",[18,72]],["ak47sports.com",18],["akuma.moe",18],["alexsports.*",[18,251]],["alexsportss.*",18],["alexsportz.*",18],["allplayer.tk",18],["amateurblog.tv",[18,72]],["androidadult.com",[18,240]],["anhsexjav.xyz",18],["anidl.org",18],["anime-loads.org",18],["animeblkom.net",18],["animefire.plus",18],["animelek.me",18],["animepahe.*",18],["animesanka.*",18],["animesorionvip.net",18],["animespire.net",18],["animestotais.xyz",18],["animeyt.es",18],["animixplay.*",18],["aniplay.*",18],["anroll.net",18],["antiadtape.*",[18,96]],["anymoviess.xyz",18],["aotonline.org",18],["asenshu.com",18],["asialiveaction.com",18],["asianclipdedhd.net",18],["asianclub.*",18],["ask4movie.*",18],["askim-bg.com",18],["assistirtvonlinebr.net",18],["asumsikedaishop.com",18],["atomixhq.*",[18,69]],["atomohd.*",18],["avcrempie.com",18],["avseesee.com",18],["gettapeads.com",[18,96]],["bajarjuegospcgratis.com",18],["balkanteka.net",18],["beastvid.tv",18],["beinmatch.*",[18,26]],["belowporn.com",18],["bestgirlsexy.com",18],["bestnhl.com",18],["bestporncomix.com",18],["bhaai.*",18],["bigwarp.*",18],["bikinbayi.com",18],["bikinitryon.net",18],["birdurls.com",18],["bitsearch.to",18],["blackcockadventure.com",18],["blackcockchurch.org",18],["blackporncrazy.com",18],["blizzboygames.net",18],["blizzpaste.com",18],["blkom.com",18],["blog-peliculas.com",18],["blogtrabalhista.com",18],["blurayufr.*",18],["bobsvagene.club",18],["bokep.im",18],["bokep.top",18],["bokepnya.com",18],["bollyflix.cards",18],["boyfuck.me",18],["brilian-news.id",18],["brupload.net",18],["buffstreams.*",18],["buzter.xyz",18],["caitlin.top",18],["camchickscaps.com",18],["camgirls.casa",18],["canalesportivo.*",18],["cashurl.in",18],["ccurl.net",[18,69]],["cdn1.site",[18,52]],["charexempire.com",18],["cizgivedizi.com",18],["clickndownload.*",18],["clicknupload.*",[18,71]],["clik.pw",18],["coin-free.com",[18,39]],["coins100s.fun",18],["comohoy.com",18],["coolcast2.com",18],["cordneutral.net",18],["countylocalnews.com",18],["cpmlink.net",18],["crackstreamshd.click",18],["crespomods.com",18],["crisanimex.com",18],["crunchyscan.fr",18],["cuevana3.fan",18],["cuevana3hd.com",18],["cumception.com",18],["cutpaid.com",18],["daddylive.*",[18,69,211]],["daddylivehd.*",[18,69]],["daddylivestream.com",[18,211]],["dailyuploads.net",18],["darkmahou.org",18],["datawav.club",18],["daughtertraining.com",18],["ddrmovies.*",18],["deepgoretube.site",18],["deltabit.co",18],["deporte-libre.top",18],["depvailon.com",18],["derleta.com",18],["desiremovies.*",18],["desivdo.com",18],["desixx.net",18],["detikkebumen.com",18],["deutschepornos.me",18],["devlib.*",18],["diasoft.xyz",18],["dipelis.junctionjive.co.uk",18],["directupload.net",18],["divxtotal.*",18],["divxtotal1.*",18],["dixva.com",18],["djmaza.my",18],["dlhd.*",[18,211]],["doctormalay.com",18],["dofusports.xyz",18],["doods.cam",18],["doodskin.lat",18],["downloadrips.com",18],["downvod.com",18],["dphunters.mom",18],["dragontranslation.com",18],["dvdfullestrenos.com",18],["dvdplay.*",[18,69]],["dx-tv.com",[18,35]],["ebookbb.com",18],["ebookhunter.net",18],["egyanime.com",18],["egygost.com",18],["ekasiwap.com",18],["electro-torrent.pl",18],["elixx.*",18],["elrefugiodelpirata.com",18],["enjoy4k.*",18],["eplayer.click",18],["erovoice.us",18],["eroxxx.us",18],["estrenosdoramas.net",18],["estrenosflix.*",18],["estrenosflux.*",18],["estrenosgo.*",18],["everia.club",18],["everythinginherenet.blogspot.com",18],["extratorrent.st",18],["extremotvplay.com",18],["f1stream.*",18],["fapinporn.com",18],["fapptime.com",18],["fastreams.live",18],["faucethero.com",18],["favoyeurtube.net",18],["fbstream.*",18],["fc2db.com",18],["femdom-joi.com",[18,72]],["fenixsite.net",18],["file4go.*",18],["filegram.to",[18,67,72]],["fileone.tv",18],["film1k.com",18],["filmeonline2023.net",18],["filmesonlinex.org",18],["filmesonlinexhd.biz",18],["filmisub.cc",18],["filmovitica.com",18],["filmymaza.blogspot.com",18],["filmyzilla.*",[18,69]],["filthy.family",18],["findav.*",18],["findporn.*",18],["flickzap.com",18],["flixmaza.*",18],["flizmovies.*",18],["flostreams.xyz",18],["flyfaucet.com",18],["footyhunter.lol",18],["forex-trnd.com",18],["forumchat.club",18],["forumlovers.club",18],["freeomovie.co.in",18],["freeomovie.to",18],["freeporncomic.net",18],["freepornhdonlinegay.com",18],["freeproxy.io",18],["freeshot.live",18],["freetvsports.*",18],["freeuse.me",18],["freeusexporn.com",18],["fsharetv.cc",18],["fsicomics.com",18],["fullymaza.*",18],["g-porno.com",18],["g3g.*",18],["galinhasamurai.com",18],["gamepcfull.com",18],["gamesmountain.com",18],["gamesrepacks.com",18],["gamingguru.fr",18],["gamovideo.com",18],["garota.cf",18],["gaydelicious.com",18],["gayfor.us",18],["gaypornhdfree.com",18],["gaypornhot.com",18],["gaypornmasters.com",18],["gaysex69.net",18],["gemstreams.com",18],["get-to.link",18],["girlscanner.org",18],["giurgiuveanul.ro",18],["gledajcrtace.xyz",18],["gocast2.com",18],["gomo.to",18],["gostosa.cf",18],["gotxx.*",18],["grantorrent.*",18],["gratispaste.com",18],["gravureblog.tv",[18,72]],["gupload.xyz",18],["haho.moe",18],["hayhd.net",18],["hdmoviesfair.*",[18,69]],["hdmoviesflix.*",18],["hdpornflix.com",18],["hdsaprevodom.com",18],["hdstreamss.club",18],["hentaiporno.xxx",18],["hentais.tube",18],["hentaistream.co",18],["hentaitk.net",18],["hentaitube.online",18],["hentaiworld.tv",18],["hesgoal.tv",18],["hexupload.net",18],["hhkungfu.tv",18],["highlanderhelp.com",18],["hiidudemoviez.*",18],["hindimovies.to",[18,69]],["hindimoviestv.com",18],["hiperdex.com",18],["hispasexy.org",18],["hitomi.la",18],["hitprn.com",18],["hivflix.*",18],["hoca4u.com",18],["hollymoviehd.cc",18],["hoodsite.com",18],["hopepaste.download",18],["hornylips.com",18],["hotgranny.live",18],["hotmama.live",18],["hqcelebcorner.net",18],["huren.best",18],["hwnaturkya.com",[18,69]],["hxfile.co",[18,69]],["igfap.com",18],["iklandb.com",18],["illink.net",18],["imgsen.*",18],["imgsex.xyz",18],["imgsto.*",18],["imgtraffic.com",18],["imx.to",18],["incest.*",18],["incestflix.*",18],["influencersgonewild.org",18],["infosgj.free.fr",18],["investnewsbrazil.com",18],["itdmusics.com",18],["itopmusic.*",18],["itsuseful.site",18],["itunesfre.com",18],["iwatchfriendsonline.net",[18,148]],["japangaysex.com",18],["jav-noni.cc",18],["javboys.tv",18],["javcl.com",18],["jav-coco.com",18],["javhay.net",18],["javhun.com",18],["javleak.com",18],["javmost.*",18],["javporn.best",18],["javsek.net",18],["javsex.to",18],["javtiful.com",[18,20]],["jimdofree.com",18],["jiofiles.org",18],["jorpetz.com",18],["jp-films.com",18],["jpop80ss3.blogspot.com",18],["jpopsingles.eu",[18,191]],["jrants.com",[18,78]],["justfullporn.net",18],["kantotflix.net",18],["kaplog.com",18],["kasiporn.com",18],["keeplinks.*",18],["keepvid.*",18],["keralahd.*",18],["khatrimazaful.*",18],["khatrimazafull.*",[18,72]],["kimochi.info",18],["kimochi.tv",18],["kinemania.tv",18],["kissasian.*",18],["kolnovel.site",18],["koltry.life",18],["konstantinova.net",18],["koora-online.live",18],["kunmanga.com",[18,69]],["kwithsub.com",18],["lat69.me",18],["latinblog.tv",[18,72]],["latinomegahd.net",18],["leechall.*",18],["leechpremium.link",18],["legendas.dev",18],["legendei.net",18],["lighterlegend.com",18],["linclik.com",18],["linkebr.com",18],["linkrex.net",18],["linkshorts.*",18],["lulu.st",18],["lulustream.com",[18,71]],["lulustream.live",18],["luluvdo.com",18],["luluvdoo.com",18],["mangaweb.xyz",18],["mangovideo.*",18],["masahub.com",18],["masahub.net",18],["masaporn.*",18],["maturegrannyfuck.com",18],["mdy48tn97.com",18],["mediapemersatubangsa.com",18],["mega-mkv.com",18],["megapastes.com",18],["megapornpics.com",18],["messitv.net",18],["meusanimes.net",18],["milfmoza.com",18],["milfnut.*",18],["milfzr.com",18],["millionscast.com",18],["mimaletamusical.blogspot.com",18],["miniurl.*",18],["mirrorace.*",18],["mitly.us",18],["mixdroop.*",18],["mixixxx000000.cyou",18],["mixixxx696969.cyou",18],["miztv.top",18],["mkv-pastes.com",18],["mkvcage.*",18],["mlbstream.*",18],["mlsbd.*",18],["mmsbee.*",18],["monaskuliner.ac.id",18],["moredesi.com",18],["motogpstream.*",18],["moutogami.com",18],["movgotv.net",18],["movi.pk",18],["movieplex.*",18],["movierulzlink.*",18],["movies123.*",[18,72]],["moviesflix.*",18],["moviesmeta.*",18],["moviesmod.com.pl",18],["moviessources.*",18],["moviesverse.*",18],["movieswbb.com",18],["moviewatch.com.pk",18],["moviezwaphd.*",18],["mp4upload.com",18],["mrskin.live",18],["mrunblock.*",18],["multicanaistv.com",18],["mundowuxia.com",18],["multicanais.*",18],["myeasymusic.ir",18],["myonvideo.com",18],["myyouporn.com",18],["mzansifun.com",18],["naughtypiss.com",18],["nbastream.*",18],["nekopoi.*",[18,72]],["netfapx.com",18],["netfuck.net",18],["new-fs.eu",18],["newmovierulz.*",18],["newtorrentgame.com",18],["neymartv.net",18],["nflstream.*",18],["nflstreams.me",18],["nhlstream.*",18],["nicekkk.com",18],["nicesss.com",18],["nlegs.com",18],["noblocktape.*",[18,96]],["nocensor.*",18],["noni-jav.com",18],["notformembersonly.com",18],["novamovie.net",18],["novelpdf.xyz",18],["novelssites.com",[18,69]],["novelup.top",18],["nsfwr34.com",18],["nu6i-bg-net.com",18],["nudebabesin3d.com",18],["nzbstars.com",18],["o2tvseries.com",18],["ohjav.com",18],["ojearnovelas.com",18],["okanime.xyz",18],["olweb.tv",18],["olympusbiblioteca.site",18],["on9.stream",18],["onepiece-mangaonline.com",18],["onifile.com",18],["onionstream.live",18],["onlinesaprevodom.net",18],["onlyfams.*",18],["onlyfullporn.video",18],["onplustv.live",18],["originporn.com",18],["ouo.*",18],["ovagames.com",18],["pagalworld.cc",18],["pastemytxt.com",18],["payskip.org",18],["pctfenix.*",[18,69]],["pctnew.*",[18,69]],["peeplink.in",18],["peliculas24.*",18],["peliculasmx.net",18],["pelisflix20.*",18],["pelisplus.*",18],["pelisxporno.net",18],["pencarian.link",18],["pendidikandasar.net",18],["pervertgirlsvideos.com",18],["pervyvideos.com",18],["phim12h.com",18],["picdollar.com",18],["picsxxxporn.com",18],["pinayscandalz.com",18],["pinkueiga.net",18],["piratebay.*",18],["piratefast.xyz",18],["piratehaven.xyz",18],["pirateiro.com",18],["playtube.co.za",18],["plugintorrent.com",18],["plyjam.*",18],["plylive.*",18],["plyvdo.*",18],["pmvzone.com",18],["porndish.com",18],["pornez.net",18],["pornfetishbdsm.com",18],["pornfits.com",18],["pornhd720p.com",18],["pornhoarder.*",[18,231]],["pornobr.club",18],["pornobr.ninja",18],["pornodominicano.net",18],["pornofaps.com",18],["pornoflux.com",18],["pornotorrent.com.br",18],["pornredit.com",18],["pornstarsyfamosas.es",18],["pornstreams.co",18],["porntn.com",18],["pornxbit.com",18],["pornxday.com",18],["portaldasnovinhas.shop",18],["portugues-fcr.blogspot.com",18],["poseyoung.com",18],["pover.org",18],["prbay.*",18],["projectfreetv.*",18],["projeihale.com",18],["proxybit.*",18],["proxyninja.org",18],["psarips.*",18],["pubfilmz.com",18],["publicsexamateurs.com",18],["punanihub.com",18],["pxxbay.com",18],["qiqitvx84.shop",18],["r18.best",18],["racaty.*",18],["ragnaru.net",18],["rapbeh.net",18],["rapelust.com",18],["rapload.org",18],["read-onepiece.net",18],["readhunters.xyz",18],["remaxhd.*",18],["reshare.pm",18],["retro-fucking.com",18],["retrotv.org",18],["rintor.*",18],["rnbxclusive.*",18],["rnbxclusive0.*",18],["rnbxclusive1.*",18],["robaldowns.com",18],["rockdilla.com",18],["rojadirecta.*",18],["rojadirectaenvivo.*",18],["rojitadirecta.blogspot.com",18],["romancetv.site",18],["rsoccerlink.site",18],["rugbystreams.*",18],["rule34.club",18],["rule34hentai.net",18],["rumahbokep-id.com",18],["sadisflix.*",18],["safego.cc",18],["safetxt.*",18],["sakurafile.com",18],["samax63.lol",18],["sambalpuristar.in",18],["savefiles.com",[18,67]],["scat.gold",18],["scatfap.com",18],["scatkings.com",18],["sexdicted.com",18],["sexgay18.com",18],["sexiezpix.com",18],["sextubebbw.com",18],["sgpics.net",[18,72]],["shadowrangers.*",18],["shahed-4u.day",18],["shahee4u.cam",18],["shahhid4u.cam",18],["shahi4u.*",18],["shahid4u1.*",18],["shahid4uu.*",18],["shahiid-anime.net",18],["shaid4u.day",18],["shavetape.*",18],["shemale6.com",18],["shemalegape.net",[18,66]],["shid4u.*",18],["shinden.pl",18],["short.es",18],["shortearn.*",18],["shorten.*",18],["shorttey.*",18],["shortzzy.*",18],["sideplusleaks.net",18],["silverblog.tv",[18,72]],["silverpic.com",18],["sinsitio.site",18],["sinvida.me",18],["skidrowcpy.com",18],["skymovieshd.*",18],["slut.mom",18],["smallencode.me",18],["smoner.com",18],["smplace.com",18],["soccerinhd.com",[18,69]],["socceron.name",18],["socceronline.*",[18,69]],["socialblog.tv",[18,72]],["softairbay.com",18],["softarchive.*",18],["sokobj.com",18],["songsio.com",18],["souexatasmais.com",18],["speedporn.net",[18,72]],["sportbar.live",18],["sports-stream.*",18],["sportstream1.cfd",18],["sporttuna.*",18],["sporttunatv.*",18],["srt.am",18],["srts.me",18],["sshhaa.*",18],["stapadblockuser.*",[18,96]],["stape.*",[18,96]],["stapewithadblock.*",18],["starblog.tv",[18,72]],["starmusiq.*",18],["stbemuiptv.com",18],["stockingfetishvideo.com",18],["strcloud.*",[18,96]],["stream.crichd.vip",18],["stream.lc",18],["stream25.xyz",18],["streamadblocker.*",[18,69,96]],["streamadblockplus.*",[18,96]],["streambee.to",18],["streambucket.net",18],["streamcdn.*",18],["streamcenter.pro",18],["streamers.watch",18],["streamgo.to",18],["streamhub.*",[18,69]],["streamingclic.com",18],["streamkiste.tv",18],["streamoupload.xyz",18],["streamservicehd.click",18],["streamsport.*",18],["streamta.*",[18,96]],["streamtape.*",[18,72,96]],["streamtapeadblockuser.*",[18,96]],["streamvid.net",[18,27]],["strikeout.*",[18,71]],["strtape.*",[18,96]],["strtapeadblock.*",[18,96]],["strtapeadblocker.*",[18,96]],["strtapewithadblock.*",18],["strtpe.*",[18,96]],["subtitleporn.com",18],["subtitles.cam",18],["suicidepics.com",18],["supertelevisionhd.com",18],["supexfeeds.com",18],["swatchseries.*",18],["swiftload.io",18],["swipebreed.net",18],["swzz.xyz",18],["sxnaar.com",18],["tabooflix.*",18],["taboosex.club",18],["tapeantiads.com",[18,96]],["tapeblocker.com",[18,96]],["tapenoads.com",[18,96]],["tapepops.com",[18,72,96]],["tapewithadblock.org",[18,96,283]],["teamos.xyz",18],["telegramgroups.xyz",18],["telenovelasweb.com",18],["tempodeconhecer.blogs.sapo.pt",18],["tennisstreams.*",18],["tensei-shitara-slime-datta-ken.com",18],["tfp.is",18],["tgo-tv.co",[18,69]],["thaihotmodels.com",18],["theblueclit.com",18],["thebussybandit.com",18],["thedaddy.*",[18,211]],["thelastdisaster.vip",18],["themoviesflix.*",18],["thepiratebay.*",18],["thepiratebay0.org",18],["thepiratebay10.info",18],["thesexcloud.com",18],["thothub.today",18],["tightsexteens.com",18],["tlnovelas.net",18],["tmearn.*",18],["tojav.net",18],["tokusatsuindo.com",18],["tokyocafe.org",18],["toonanime.*",18],["top16.net",18],["topdrama.net",18],["topvideosgay.com",18],["torlock.*",18],["tormalayalam.*",18],["torrage.info",18],["torrents.vip",18],["torrentz2eu.*",18],["torrsexvid.com",18],["tpb-proxy.xyz",18],["trannyteca.com",18],["trendytalker.com",18],["tuktukcinma.com",18],["tumanga.net",18],["turbogvideos.com",18],["turboimagehost.com",18],["turbovid.me",18],["turkishseriestv.org",18],["turksub24.net",18],["tutele.sx",18],["tutelehd.*",18],["tvglobe.me",18],["tvpclive.com",18],["tvply.*",18],["tvs-widget.com",18],["tvseries.video",18],["u4m.*",18],["ucptt.com",18],["ufaucet.online",18],["ufcfight.online",18],["ufcstream.*",18],["ultrahorny.com",18],["ultraten.net",18],["unblocknow.*",18],["unblockweb.me",18],["underhentai.net",18],["uniqueten.net",18],["uns.bio",18],["upbaam.com",18],["uploadbuzz.*",18],["upstream.to",18],["upzur.com",18],["usagoals.*",18],["ustream.to",18],["valhallas.click",18],["valeriabelen.com",18],["verdragonball.online",18],["vexmoviex.*",18],["vfxmed.com",18],["vidclouds.*",18],["video.az",18],["videostreaming.rocks",18],["videowood.tv",18],["vidlox.*",18],["vidorg.net",18],["vidtapes.com",18],["vidz7.com",18],["vikistream.com",18],["vinovo.to",18],["vipboxtv.*",[18,69]],["vipleague.*",[18,235]],["virpe.cc",18],["visifilmai.org",18],["viveseries.com",18],["vladrustov.sx",18],["volokit2.com",[18,69,211]],["vstorrent.org",18],["w4hd.com",18],["watch-series.*",18],["watchbrooklynnine-nine.com",18],["watchelementaryonline.com",18],["watchf1full.com",18],["watchfamilyguyonline.com",18],["watchkobestreams.info",18],["watchlostonline.net",18],["watchmmafull.com",18],["watchmodernfamilyonline.com",18],["watchmonkonline.com",18],["watchrulesofengagementonline.com",18],["watchseries.*",18],["webcamrips.com",18],["wincest.xyz",18],["wolverdon.fun",18],["wordcounter.icu",18],["worldmovies.store",18],["worldstreams.click",18],["wpdeployit.com",18],["wqstreams.tk",18],["wwwsct.com",18],["x18hub.com",18],["xanimeporn.com",18],["xblog.tv",[18,72]],["xclusivejams.*",18],["xmoviesforyou.*",18],["xn--verseriesespaollatino-obc.online",18],["xpornium.net",18],["xsober.com",18],["xvip.lat",18],["xxgasm.com",18],["xxvideoss.org",18],["xxx18.uno",18],["xxxdominicana.com",18],["xxxfree.watch",18],["xxxmax.net",18],["xxxwebdlxxx.top",18],["xxxxvideo.uno",18],["yabai.si",18],["yeshd.net",18],["youdbox.*",18],["youjax.com",18],["yourdailypornvideos.ws",18],["yourupload.com",18],["youswear.com",18],["ytmp3eu.*",18],["yts-subs.*",18],["yts.*",18],["ytstv.me",18],["yumeost.net",18],["zerion.cc",18],["zerocoin.top",18],["zitss.xyz",18],["zooqle.*",18],["zpaste.net",18],["fastreams.com",18],["streamsoccer.site",18],["tntsports.store",18],["wowstreams.co",18],["dutchycorp.*",19],["faucet.ovh",19],["mmacore.tv",20],["nxbrew.net",20],["brawlify.com",20],["oko.sh",21],["variety.com",[22,82]],["gameskinny.com",22],["deadline.com",[22,82]],["mlive.com",[22,82]],["washingtonpost.com",23],["gosexpod.com",24],["sexo5k.com",25],["truyen-hentai.com",25],["theshedend.com",27],["cybermania.ws",27],["zeroupload.com",27],["securenetsystems.net",27],["miniwebtool.com",27],["bchtechnologies.com",27],["eracast.cc",27],["flatai.org",27],["leeapk.com",27],["spiegel.de",28],["jacquieetmichel.net",29],["hausbau-forum.de",30],["althub.club",30],["kiemlua.com",30],["doujindesu.*",31],["atlasstudiousa.com",31],["51bonusrummy.in",[31,72]],["tackledsoul.com",32],["adrino1.bonloan.xyz",32],["vi-music.app",32],["instanders.app",32],["rokni.xyz",32],["keedabankingnews.com",32],["sampledrive.org",[32,75]],["windroid777.com",32],["z80ne.com",32],["tea-coffee.net",33],["spatsify.com",33],["newedutopics.com",33],["getviralreach.in",33],["edukaroo.com",33],["funkeypagali.com",33],["careersides.com",33],["nayisahara.com",33],["wikifilmia.com",33],["infinityskull.com",33],["viewmyknowledge.com",33],["iisfvirtual.in",33],["starxinvestor.com",33],["jkssbalerts.com",33],["imagereviser.com",34],["veganab.co",35],["camdigest.com",35],["learnmany.in",35],["amanguides.com",[35,41]],["highkeyfinance.com",[35,41]],["appkamods.com",35],["techacode.com",35],["djqunjab.in",35],["downfile.site",35],["expertvn.com",35],["trangchu.news",35],["shemaleraw.com",35],["thecustomrom.com",35],["wemove-charity.org",35],["nulleb.com",35],["snlookup.com",35],["bingotingo.com",35],["ghior.com",35],["3dmili.com",35],["karanpc.com",35],["plc247.com",35],["apkdelisi.net",35],["freepasses.org",35],["poplinks.*",[35,45]],["tomarnarede.pt",35],["basketballbuzz.ca",35],["dribbblegraphics.com",35],["kemiox.com",35],["teksnologi.com",35],["bharathwick.com",35],["descargaspcpro.net",35],["rt3dmodels.com",35],["plc4me.com",35],["blisseyhusbands.com",35],["mhdsports.*",35],["mhdsportstv.*",35],["mhdtvworld.*",35],["mhdtvmax.*",35],["mhdstream.*",35],["madaradex.org",35],["trigonevo.com",35],["franceprefecture.fr",35],["jazbaat.in",35],["aipebel.com",35],["audiotools.blog",35],["embdproxy.xyz",35],["fc-lc.*",36],["jobzhub.store",37],["fitdynamos.com",37],["labgame.io",37],["kenzo-flowertag.com",38],["mdn.lol",38],["btcbitco.in",39],["btcsatoshi.net",39],["cempakajaya.com",39],["crypto4yu.com",39],["manofadan.com",39],["readbitcoin.org",39],["wiour.com",39],["tremamnon.com",39],["bitsmagic.fun",39],["ourcoincash.xyz",39],["aylink.co",40],["sugarona.com",41],["nishankhatri.xyz",41],["cety.app",42],["exe-urls.com",42],["exego.app",42],["cutlink.net",42],["cutyurls.com",42],["cutty.app",42],["cutnet.net",42],["jixo.online",42],["tinys.click",43],["loan.creditsgoal.com",43],["rupyaworld.com",43],["vahantoday.com",43],["techawaaz.in",43],["loan.bgmi32bitapk.in",43],["formyanime.com",43],["gsm-solution.com",43],["h-donghua.com",43],["hindisubbedacademy.com",43],["hm4tech.info",43],["mydverse.*",43],["panelprograms.blogspot.com",43],["ripexbooster.xyz",43],["serial4.com",43],["tutorgaming.com",43],["unblockedgamesgplus.gitlab.io",43],["everydaytechvams.com",43],["dipsnp.com",43],["cccam4sat.com",43],["diendancauduong.com",43],["stitichsports.com",43],["aiimgvlog.fun",44],["appsbull.com",45],["diudemy.com",45],["maqal360.com",45],["androjungle.com",45],["bookszone.in",45],["shortix.co",45],["makefreecallsonline.com",45],["msonglyrics.com",45],["app-sorteos.com",45],["bokugents.com",45],["client.pylexnodes.net",45],["btvplus.bg",45],["listar-mc.net",45],["coingraph.us",46],["impact24.us",46],["iconicblogger.com",47],["auto-crypto.click",47],["tpi.li",48],["shrinkme.*",49],["shrinke.*",49],["mrproblogger.com",49],["themezon.net",49],["smutty.com",49],["e-sushi.fr",49],["gayforfans.com",49],["freeadultcomix.com",49],["down.dataaps.com",49],["filmweb.pl",[49,186]],["livecamrips.*",49],["safetxt.net",49],["filespayouts.com",49],["atglinks.com",50],["kbconlinegame.com",51],["hamrojaagir.com",51],["odijob.com",51],["stfly.biz",52],["airevue.net",52],["atravan.net",52],["simana.online",53],["fooak.com",53],["joktop.com",53],["evernia.site",53],["falpus.com",53],["rfiql.com",54],["gujjukhabar.in",54],["smartfeecalculator.com",54],["djxmaza.in",54],["thecubexguide.com",54],["jytechs.in",54],["financacerta.com",55],["encurtads.net",55],["mastkhabre.com",56],["weshare.is",57],["vplink.in",58],["3dsfree.org",59],["up4load.com",60],["alpin.de",61],["boersennews.de",61],["chefkoch.de",61],["chip.de",61],["clever-tanken.de",61],["desired.de",61],["donnerwetter.de",61],["fanfiktion.de",61],["focus.de",61],["formel1.de",61],["frustfrei-lernen.de",61],["gewinnspiele.tv",61],["giga.de",61],["gut-erklaert.de",61],["kino.de",61],["messen.de",61],["nickles.de",61],["nordbayern.de",61],["spielfilm.de",61],["teltarif.de",[61,62]],["unsere-helden.com",61],["weltfussball.at",61],["watson.de",61],["mactechnews.de",61],["sport1.de",61],["welt.de",61],["sport.de",61],["allthingsvegas.com",63],["100percentfedup.com",63],["beforeitsnews.com",63],["concomber.com",63],["conservativefiringline.com",63],["dailylol.com",63],["funnyand.com",63],["letocard.fr",63],["mamieastuce.com",63],["meilleurpronostic.fr",63],["patriotnationpress.com",63],["toptenz.net",63],["vitamiiin.com",63],["writerscafe.org",63],["populist.press",63],["dailytruthreport.com",63],["livinggospeldaily.com",63],["first-names-meanings.com",63],["welovetrump.com",63],["thehayride.com",63],["thelibertydaily.com",63],["thepoke.co.uk",63],["thepolitistick.com",63],["theblacksphere.net",63],["shark-tank.com",63],["naturalblaze.com",63],["greatamericanrepublic.com",63],["dailysurge.com",63],["truthlion.com",63],["flagandcross.com",63],["westword.com",63],["republicbrief.com",63],["freedomfirstnetwork.com",63],["phoenixnewtimes.com",63],["designbump.com",63],["clashdaily.com",63],["madworldnews.com",63],["reviveusa.com",63],["sonsoflibertymedia.com",63],["thedesigninspiration.com",63],["videogamesblogger.com",63],["protrumpnews.com",63],["thepalmierireport.com",63],["kresy.pl",63],["thepatriotjournal.com",63],["thegatewaypundit.com",63],["wltreport.com",63],["miaminewtimes.com",63],["politicalsignal.com",63],["rightwingnews.com",63],["bigleaguepolitics.com",63],["comicallyincorrect.com",63],["upornia.com",64],["pillowcase.su",65],["akaihentai.com",66],["cine-calidad.*",66],["fastpic.org",[66,72]],["forums.socialmediagirls.com",[66,72]],["javtsunami.com",66],["manwa.me",66],["monoschino2.com",66],["saradahentai.com",66],["sxyprn.*",66],["tabooporn.tv",66],["veryfreeporn.com",66],["x-video.tube",66],["pornoenspanish.es",66],["theporngod.com",66],["tabootube.to",66],["bebasbokep.online",67],["besthdgayporn.com",67],["dimensionalseduction.com",67],["drivenime.com",67],["erothots1.com",67],["javup.org",67],["kaliscan.*",67],["madouqu.com",67],["shemaleup.net",67],["transflix.net",67],["worthcrete.com",67],["x-x-x.video",[67,270]],["hentaihere.com",68],["player.smashy.stream",68],["player.smashystream.com",68],["11xmovies.*",[69,71]],["123movies.*",69],["123moviesla.*",69],["123movieweb.*",69],["2embed.*",69],["3kmovies.*",69],["720pflix.*",69],["7starhd.*",69],["9xflix.*",69],["9xmovies.*",69],["adsh.cc",69],["adshort.*",69],["afilmyhouse.blogspot.com",69],["ak.sv",69],["aliezstream.pro",[69,170]],["allmovieshub.*",69],["animesultra.net",69],["api.webs.moe",69],["apkmody.io",69],["asianplay.*",69],["atishmkv.*",69],["backfirstwo.site",69],["bflix.*",69],["crazyblog.in",69],["cricstream.*",69],["crictime.*",69],["cuervotv.me",69],["defienietlynotme.com",69],["divicast.com",69],["dood.*",[69,90]],["dooood.*",[69,90]],["egybest.*",69],["embedme.*",69],["embedpk.net",69],["esportivos.site",69],["extramovies.*",69],["faselhd.*",69],["faselhds.*",69],["faselhdwatch.*",69],["filemoon.*",69],["filemooon.*",69],["filmeserialeonline.org",69],["filmy.*",69],["filmyhit.*",69],["filmywap.*",69],["finfang.*",69],["flexyhit.com",69],["flixhq.*",69],["fmembed.cc",69],["fmoonembed.*",69],["fmovies.*",69],["focus4ca.com",69],["footybite.to",69],["foreverwallpapers.com",69],["french-streams.cc",69],["gdplayer.*",69],["gdrivelatinohd.net",69],["globalstreams.xyz",69],["gocast.pro",69],["godzcast.com",69],["goku.sx",69],["gomovies.*",69],["gowatchseries.*",69],["hdfungamezz.*",69],["hdmovies23.*",69],["hdtoday.to",69],["hellnaw.*",69],["hianime.to",69],["hinatasoul.com",69],["hindilinks4u.*",69],["hurawatch.*",69],["igg-games.com",69],["infinityscans.net",69],["jalshamoviezhd.*",69],["kaido.to",69],["kerapoxy.*",69],["linkshub.*",69],["livecricket.*",69],["livestreames.us",69],["locatedinfain.com",69],["mangareader.to",69],["maxstream.*",69],["mhdsport.*",69],["mkvcinemas.*",69],["moonembed.*",69],["moviekids.tv",69],["movies2watch.*",69],["moviesda9.co",69],["moviespapa.*",69],["mp4moviez.*",69],["mydownloadtube.*",69],["myflixertv.to",69],["myflixerz.to",69],["mylivestream.pro",[69,170]],["nowmetv.net",69],["nowsportstv.com",69],["nuroflix.*",69],["nxbrew.com",69],["o2tvseries.*",69],["o2tvseriesz.*",69],["oii.io",69],["paidshitforfree.com",69],["pepperlive.info",69],["pirlotv.*",69],["pkspeed.net",69],["playertv.net",69],["poscitech.*",69],["primewire.*",69],["redecanais.*",69],["rgeyyddl.*",69],["ronaldo7.pro",69],["roystream.com",69],["rssing.com",69],["s.to",69],["serienstream.*",69],["sflix.*",69],["shahed4u.*",69],["shaheed4u.*",69],["share.filesh.site",69],["sharkfish.xyz",69],["skidrowcodex.net",69],["smartermuver.com",69],["speedostream.*",69],["sportcast.*",69],["sportshub.fan",69],["sportskart.*",69],["stream4free.live",69],["streamingcommunity.*",[69,71,115]],["sulleiman.com",69],["tamilarasan.*",69],["tamilfreemp3songs.*",69],["tamilmobilemovies.in",69],["tamilprinthd.*",69],["tapeadsenjoyer.com",[69,72,96]],["tapeadvertisement.com",[69,96]],["tapelovesads.org",[69,96]],["thewatchseries.live",69],["tnmusic.in",69],["torrentdosfilmes.*",69],["totalsportek.*",69],["travelplanspro.com",69],["tubemate.*",69],["tusfiles.com",69],["tutlehd4.com",69],["twstalker.com",69],["uploadrar.*",69],["uqload.*",69],["vegamovie.*",69],["vid-guard.com",69],["vidcloud9.*",69],["vido.*",69],["vidoo.*",69],["vidsaver.net",69],["vidspeeds.com",69],["viralitytoday.com",69],["voiranime.stream",69],["vpcxz19p.xyz",69],["vudeo.*",69],["vumoo.*",69],["watchdoctorwhoonline.com",69],["watchomovies.*",[69,112]],["watchserie.online",69],["woxikon.in",69],["www-y2mate.com",69],["yesmovies.*",69],["ylink.bid",69],["z12z0vla.*",69],["zvision.link",69],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",69],["kickassanime.*",70],["cinego.tv",71],["dokoembed.pw",71],["ev01.to",71],["fojik.*",71],["fstream365.com",71],["fzmovies.*",71],["linkz.*",71],["minoplres.xyz",71],["mostream.us",71],["moviedokan.*",71],["myflixer.*",71],["oii.la",71],["prmovies.*",71],["readcomiconline.li",71],["s3embtaku.pro",71],["sflix2.to",71],["sportshub.stream",71],["streamblasters.*",71],["topcinema.cam",71],["webxzplay.cfd",71],["zonatmo.com",71],["animesaturn.cx",71],["filecrypt.*",71],["hunterscomics.com",71],["aniwave.uk",71],["dojing.net",72],["fuckflix.click",72],["javsubindo.com",72],["krx18.com",72],["loadx.ws",72],["mangaforfree.com",72],["pornx.to",72],["savefiles.*",[72,253]],["shavetape.cash",72],["strcloud.club",72],["strcloud.site",72],["streampoi.com",72],["strmup.to",[72,170]],["up4stream.com",[72,112]],["ups2up.fun",[72,112]],["videq.stream",72],["xmegadrive.com",72],["rubystm.com",72],["rubyvid.com",72],["rubyvidhub.com",72],["stmruby.com",72],["streamruby.com",72],["kaa.to",73],["hyhd.org",74],["bi-girl.net",75],["ftuapps.*",75],["hentaiseason.com",75],["hoodtrendspredict.com",75],["marcialhub.xyz",75],["odiadance.com",75],["osteusfilmestuga.online",75],["ragnarokscanlation.opchapters.com",75],["showflix.*",75],["swordalada.org",75],["tvappapk.com",75],["twobluescans.com",[75,76]],["varnascan.xyz",75],["fcsnew.net",77],["bibliopanda.visblog.online",78],["hallofseries.com",78],["luciferdonghua.in",78],["toursetlist.com",78],["truyentranhfull.net",78],["fcportables.com",78],["repack-games.com",78],["ibooks.to",78],["blog.tangwudi.com",78],["filecatchers.com",78],["babaktv.com",78],["stacysrandomthoughts.com",79],["ssnewstelegram.com",79],["superherohype.com",[79,82]],["tablelifeblog.com",79],["thebeautysection.com",79],["thecurvyfashionista.com",79],["thefashionspot.com",79],["thegamescabin.com",79],["thenerdyme.com",79],["thenonconsumeradvocate.com",79],["theprudentgarden.com",79],["thethings.com",79],["timesnews.net",79],["topspeed.com",79],["toyotaklub.org.pl",79],["travelingformiles.com",79],["tutsnode.org",79],["viralviralvideos.com",79],["wannacomewith.com",79],["wimp.com",[79,82]],["windsorexpress.co.uk",79],["woojr.com",79],["worldoftravelswithkids.com",79],["worldsurfleague.com",79],["cheatsheet.com",80],["pwinsider.com",80],["c-span.org",81],["15min.lt",82],["247sports.com",82],["abc17news.com",82],["agrodigital.com",82],["al.com",82],["aliontherunblog.com",82],["allaboutthetea.com",82],["allmovie.com",82],["allmusic.com",82],["allthingsthrifty.com",82],["amessagewithabottle.com",82],["arstechnica.com",82],["artforum.com",82],["artnews.com",82],["audiomack.com",82],["awkward.com",82],["barcablaugranes.com",82],["barnsleychronicle.com",82],["bethcakes.com",82],["betweenenglandandiowa.com",82],["bgr.com",82],["billboard.com",82],["blazersedge.com",82],["blogher.com",82],["blu-ray.com",82],["bluegraygal.com",82],["briefeguru.de",82],["brobible.com",82],["cagesideseats.com",82],["cbsnews.com",82],["cbssports.com",[82,258]],["celiacandthebeast.com",82],["chaptercheats.com",82],["cleveland.com",82],["clickondetroit.com",82],["commercialcompetentedigitale.ro",82],["crooksandliars.com",82],["dailydot.com",82],["dailykos.com",82],["dailyvoice.com",82],["danslescoulisses.com",82],["decider.com",82],["didyouknowfacts.com",82],["dogtime.com",82],["dpreview.com",82],["ebaumsworld.com",82],["egoallstars.com",82],["eldiariony.com",82],["fark.com",82],["femestella.com",82],["flickr.com",82],["fmradiofree.com",82],["forums.hfboards.com",82],["free-power-point-templates.com",82],["freeconvert.com",82],["frogsandsnailsandpuppydogtail.com",82],["funtasticlife.com",82],["fwmadebycarli.com",82],["golfdigest.com",82],["grunge.com",82],["gulflive.com",82],["hollywoodreporter.com",82],["homeglowdesign.com",82],["honeygirlsworld.com",82],["ibtimes.co.in",82],["imgur.com",82],["indiewire.com",82],["intouchweekly.com",82],["jasminemaria.com",82],["kens5.com",82],["kion546.com",82],["knowyourmeme.com",82],["last.fm",82],["lehighvalleylive.com",82],["lettyskitchen.com",82],["lifeandstylemag.com",82],["lifeinleggings.com",82],["lizzieinlace.com",82],["localnews8.com",82],["lonestarlive.com",82],["madeeveryday.com",82],["maidenhead-advertiser.co.uk",82],["mandatory.com",82],["mardomreport.net",82],["masslive.com",82],["melangery.com",82],["miamiherald.com",82],["mmamania.com",82],["momtastic.com",82],["mostlymorgan.com",82],["motherwellmag.com",82],["musicfeeds.com.au",82],["naszemiasto.pl",82],["nationalpost.com",82],["nationalreview.com",82],["nbcsports.com",82],["news.com.au",82],["ninersnation.com",82],["nj.com",82],["nordot.app",82],["nothingbutnewcastle.com",82],["nsjonline.com",82],["nypost.com",82],["observer.com",82],["ontvtonight.com",82],["oregonlive.com",82],["pagesix.com",82],["patheos.com",82],["pennlive.com",82],["pep.ph",[82,87]],["phillyvoice.com",82],["playstationlifestyle.net",82],["puckermom.com",82],["reelmama.com",82],["rlfans.com",82],["robbreport.com",82],["rollingstone.com",82],["royalmailchat.co.uk",82],["sandrarose.com",82],["sbnation.com",82],["silive.com",82],["sheknows.com",82],["sidereel.com",82],["smartworld.it",82],["sneakernews.com",82],["sourcingjournal.com",82],["soldionline.it",82],["sport-fm.gr",82],["sportico.com",82],["sportsgamblingpodcast.com",82],["spotofteadesigns.com",82],["stylecaster.com",82],["syracuse.com",82],["tastingtable.com",82],["techcrunch.com",82],["thecelticblog.com",[82,84]],["thedailymeal.com",82],["theflowspace.com",82],["themarysue.com",82],["tiermaker.com",82],["timesofisrael.com",82],["tiscali.cz",82],["tokfm.pl",82],["torontosun.com",82],["tvline.com",82],["usmagazine.com",82],["wallup.net",82],["wcnc.com",82],["weather.com",82],["worldstar.com",82],["worldstarhiphop.com",82],["wwd.com",82],["wzzm13.com",82],["yourcountdown.to",82],["automobile-catalog.com",[83,84,85]],["baseballchannel.jp",[83,84]],["forum.mobilism.me",83],["gbatemp.net",83],["gentosha-go.com",83],["hang.hu",83],["hoyme.jp",83],["motorbikecatalog.com",[83,84,85]],["pons.com",83],["wisevoter.com",83],["topstarnews.net",83],["islamicfinder.org",83],["secure-signup.net",83],["dramabeans.com",83],["dropgame.jp",[83,84]],["manta.com",83],["tportal.hr",83],["tvtropes.org",83],["convertcase.net",83],["oricon.co.jp",84],["uranai.nosv.org",84],["yakkun.com",84],["24sata.hr",84],["373news.com",84],["actugaming.net",84],["aerotrader.com",84],["alc.co.jp",84],["alfa.lt",84],["allthetests.com",84],["animanch.com",84],["aniroleplay.com",84],["apkmirror.com",[84,190]],["areaconnect.com",84],["as-web.jp",84],["atvtrader.com",84],["aucfree.com",84],["autoby.jp",84],["autoc-one.jp",84],["autofrage.net",84],["bab.la",84],["babla.*",84],["bien.hu",84],["bilis.lt",84],["boredpanda.com",84],["bunshun.jp",84],["calculatorsoup.com",84],["carscoops.com",84],["cesoirtv.com",84],["chanto.jp.net",84],["cinetrafic.fr",84],["cocokara-next.com",84],["collinsdictionary.com",84],["commercialtrucktrader.com",84],["computerfrage.net",84],["crosswordsolver.com",84],["cruciverba.it",84],["cults3d.com",84],["culturequizz.com",84],["cycletrader.com",84],["daily.co.jp",84],["dailynewshungary.com",84],["dallashoopsjournal.com",84],["dayspedia.com",84],["dictionary.cambridge.org",84],["dictionnaire.lerobert.com",84],["dnevno.hr",84],["dreamchance.net",84],["drweil.com",84],["dziennik.pl",84],["ecranlarge.com",84],["eigachannel.jp",84],["equipmenttrader.com",84],["etaplius.lt",84],["ev-times.com",84],["finanzfrage.net",84],["footballchannel.jp",84],["forsal.pl",84],["freemcserver.net",84],["futabanet.jp",84],["fxstreet-id.com",84],["fxstreet-vn.com",84],["fxstreet.*",84],["game8.jp",84],["games.arkadium.com",84],["gamewith.jp",84],["gardeningsoul.com",84],["gazetaprawna.pl",84],["gesundheitsfrage.net",84],["gifu-np.co.jp",84],["gigafile.nu",84],["globalrph.com",84],["golf-live.at",84],["grapee.jp",84],["gutefrage.net",84],["happymoments.lol",84],["hb-nippon.com",84],["heureka.cz",84],["horairesdouverture24.fr",84],["hotcopper.co.nz",84],["hotcopper.com.au",84],["hvac-talk.com",84],["idokep.hu",84],["indiatimes.com",84],["infor.pl",84],["iza.ne.jp",84],["j-cast.com",84],["j-town.net",84],["j7p.jp",84],["jablickar.cz",84],["javatpoint.com",84],["jiji.com",84],["jikayosha.jp",84],["judgehype.com",84],["kinmaweb.jp",84],["km77.com",84],["kobe-journal.com",84],["kreuzwortraetsel.de",84],["kurashinista.jp",84],["kurashiru.com",84],["kyoteibiyori.com",84],["lacuarta.com",84],["laleggepertutti.it",84],["langenscheidt.com",84],["laposte.net",84],["lawyersgunsmoneyblog.com",84],["ldoceonline.com",84],["listentotaxman.com",84],["livenewschat.eu",84],["luremaga.jp",84],["mafab.hu",84],["mahjongchest.com",84],["mainichi.jp",84],["maketecheasier.com",[84,85]],["malaymail.com",84],["mamastar.jp",84],["mathplayzone.com",84],["meteo60.fr",84],["midhudsonnews.com",84],["minesweeperquest.com",84],["minkou.jp",84],["mmm.lt",84],["modhub.us",84],["modsfire.com",84],["moin.de",84],["motorradfrage.net",84],["motscroises.fr",84],["movie-locations.com",84],["muragon.com",84],["nana-press.com",84],["natalie.mu",84],["nationaltoday.com",84],["nbadraft.net",84],["newatlas.com",[84,89]],["news.zerkalo.io",84],["newsinlevels.com",84],["newsweekjapan.jp",84],["niketalk.com",84],["nikkan-gendai.com",84],["nlab.itmedia.co.jp",84],["notebookcheck.*",84],["notebookcheck-cn.com",84],["notebookcheck-hu.com",84],["notebookcheck-ru.com",84],["notebookcheck-tr.com",84],["nouvelobs.com",84],["nyitvatartas24.hu",84],["oeffnungszeitenbuch.de",84],["onlineradiobox.com",84],["operawire.com",84],["optionsprofitcalculator.com",84],["oraridiapertura24.it",84],["oxfordlearnersdictionaries.com",84],["palabr.as",84],["pashplus.jp",84],["persoenlich.com",84],["petitfute.com",84],["play-games.com",84],["popdaily.com.tw",84],["powerpyx.com",84],["pptvhd36.com",84],["profitline.hu",84],["programme-tv.net",84],["puzzlegarage.com",84],["pwctrader.com",84],["quefaire.be",84],["radio-australia.org",84],["radio-osterreich.at",84],["raetsel-hilfe.de",84],["raider.io",84],["ranking.net",84],["raskakcija.lt",84],["references.be",84],["reisefrage.net",84],["relevantmagazine.com",84],["reptilesmagazine.com",84],["roleplayer.me",84],["rostercon.com",84],["samsungmagazine.eu",84],["sankei.com",84],["sanspo.com",84],["scribens.com",84],["scribens.fr",84],["slashdot.org",84],["snowmobiletrader.com",84],["soccerdigestweb.com",84],["solitairehut.com",84],["sourceforge.net",84],["southhemitv.com",84],["sportalkorea.com",84],["sportlerfrage.net",84],["statecollege.com",84],["steamidfinder.com",84],["sudokutable.com",84],["superhonda.com",84],["syosetu.com",84],["szamoldki.hu",84],["talkwithstranger.com",84],["tbs.co.jp",84],["techdico.com",84],["the-crossword-solver.com",84],["thedigestweb.com",84],["thefirearmblog.com",84],["traicy.com",84],["transparentcalifornia.com",84],["transparentnevada.com",84],["trilltrill.jp",84],["tunebat.com",84],["tvtv.ca",84],["tvtv.us",84],["tweaktown.com",84],["twn.hu",84],["tyda.se",84],["ufret.jp",84],["universalis.fr",84],["uptodown.com",84],["uscreditcardguide.com",84],["verkaufsoffener-sonntag.com",84],["vimm.net",84],["wamgame.jp",84],["watchdocumentaries.com",84],["wattedoen.be",84],["webdesignledger.com",84],["weldingweb.com",84],["wetteronline.de",84],["wfmz.com",84],["wieistmeineip.*",84],["winfuture.de",84],["word-grabber.com",84],["worldjournal.com",84],["worldle.teuteuf.fr",84],["wort-suchen.de",84],["woxikon.*",84],["young-machine.com",84],["yugioh-starlight.com",84],["yutura.net",84],["zagreb.info",84],["zakzak.co.jp",84],["2chblog.jp",84],["2monkeys.jp",84],["46matome.net",84],["akb48glabo.com",84],["akb48matomemory.com",84],["alfalfalfa.com",84],["all-nationz.com",84],["anihatsu.com",84],["aqua2ch.net",84],["blog.esuteru.com",84],["blog.livedoor.jp",84],["blog.jp",84],["blogo.jp",84],["chaos2ch.com",84],["choco0202.work",84],["crx7601.com",84],["danseisama.com",84],["dareda.net",84],["digital-thread.com",84],["doorblog.jp",84],["exawarosu.net",84],["fgochaldeas.com",84],["football-2ch.com",84],["gekiyaku.com",84],["golog.jp",84],["hacchaka.net",84],["heartlife-matome.com",84],["liblo.jp",84],["fesoku.net",84],["fiveslot777.com",84],["gamejksokuhou.com",84],["girlsreport.net",84],["girlsvip-matome.com",84],["grasoku.com",84],["gundamlog.com",84],["honyaku-channel.net",84],["ikarishintou.com",84],["imas-cg.net",84],["imihu.net",84],["inutomo11.com",84],["itainews.com",84],["itaishinja.com",84],["jin115.com",84],["jisaka.com",84],["jnews1.com",84],["jumpsokuhou.com",84],["jyoseisama.com",84],["keyakizaka46matomemory.net",84],["kidan-m.com",84],["kijoden.com",84],["kijolariat.net",84],["kijolifehack.com",84],["kijomatomelog.com",84],["kijyokatu.com",84],["kijyomatome.com",84],["kijyomatome-ch.com",84],["kijyomita.com",84],["kirarafan.com",84],["kitimama-matome.net",84],["kitizawa.com",84],["konoyubitomare.jp",84],["kotaro269.com",84],["kyousoku.net",84],["ldblog.jp",84],["livedoor.biz",84],["livedoor.blog",84],["majikichi.com",84],["matacoco.com",84],["matomeblade.com",84],["matomelotte.com",84],["matometemitatta.com",84],["mojomojo-licarca.com",84],["morikinoko.com",84],["nandemo-uketori.com",84],["netatama.net",84],["news-buzz1.com",84],["news30over.com",84],["nishinippon.co.jp",84],["nmb48-mtm.com",84],["norisoku.com",84],["npb-news.com",84],["ocsoku.com",84],["okusama-kijyo.com",84],["onecall2ch.com",84],["onihimechan.com",84],["orusoku.com",84],["otakomu.jp",84],["otoko-honne.com",84],["oumaga-times.com",84],["outdoormatome.com",84],["pachinkopachisro.com",84],["paranormal-ch.com",84],["recosoku.com",84],["s2-log.com",84],["saikyo-jump.com",84],["shuraba-matome.com",84],["ske48matome.net",84],["squallchannel.com",84],["sukattojapan.com",84],["sumaburayasan.com",84],["sutekinakijo.com",84],["usi32.com",84],["uwakich.com",84],["uwakitaiken.com",84],["vault76.info",84],["vipnews.jp",84],["vippers.jp",84],["vipsister23.com",84],["vtubernews.jp",84],["watarukiti.com",84],["world-fusigi.net",84],["zakuzaku911.com",84],["zch-vip.com",84],["interfootball.co.kr",85],["a-ha.io",85],["cboard.net",85],["jjang0u.com",85],["joongdo.co.kr",85],["viva100.com",85],["gamingdeputy.com",85],["alle-tests.nl",85],["tweaksforgeeks.com",85],["m.inven.co.kr",85],["mlbpark.donga.com",85],["meconomynews.com",85],["brandbrief.co.kr",85],["motorgraph.com",85],["bleepingcomputer.com",86],["pravda.com.ua",86],["ap7am.com",87],["cinema.com.my",87],["dolldivine.com",87],["giornalone.it",87],["iplocation.net",87],["jamaicajawapos.com",87],["jutarnji.hr",87],["kompasiana.com",87],["mediaindonesia.com",87],["niice-woker.com",87],["slobodnadalmacija.hr",87],["upmedia.mg",87],["mentalfloss.com",88],["neowin.net",89],["all3do.com",90],["d-s.io",90],["d0000d.com",90],["d000d.com",90],["d0o0d.com",90],["do0od.com",90],["do7go.com",90],["doods.*",90],["doodstream.*",90],["dooodster.com",90],["doply.net",90],["ds2play.com",90],["ds2video.com",90],["vidply.com",90],["vide0.net",90],["vvide0.com",90],["bigwarp.cc",91],["3minx.com",92],["555fap.com",92],["ai18.pics",92],["anime-jav.com",92],["blackwidof.org",92],["chinese-pics.com",92],["cn-av.com",92],["cnpics.org",92],["cnxx.me",92],["cosplay-xxx.com",92],["cosplay18.pics",92],["fc2ppv.stream",92],["fikfok.net",92],["gofile.download",92],["hentai-sub.com",92],["hentai4f.com",92],["hentaicovid.com",92],["hentaipig.com",92],["hentaixnx.com",92],["idol69.net",92],["javball.com",92],["javbee.*",92],["javring.com",92],["javsunday.com",92],["javtele.net",92],["kin8-av.com",92],["kin8-jav.com",92],["kr-av.com",92],["ovabee.com",92],["pig69.com",92],["porn-pig.com",92],["porn4f.org",92],["sweetie-fox.com",92],["xcamcovid.com",92],["xxpics.org",92],["hentaivost.fr",93],["jelonka.com",94],["isgfrm.com",95],["advertisertape.com",96],["watchadsontape.com",96],["vosfemmes.com",97],["voyeurfrance.net",97],["hyundaitucson.info",98],["exambd.net",99],["cgtips.org",100],["freewebcart.com",101],["freemagazines.top",101],["siamblockchain.com",101],["emuenzen.de",102],["kickass.*",103],["unblocked.id",105],["listendata.com",106],["7xm.xyz",106],["fastupload.io",106],["azmath.info",106],["wouterplanet.com",107],["xenvn.com",108],["4kporn.xxx",109],["androidacy.com",110],["4porn4.com",111],["bestpornflix.com",112],["freeroms.com",112],["andhrafriends.com",112],["723qrh1p.fun",112],["98zero.com",113],["mediaset.es",113],["hwbusters.com",113],["beatsnoop.com",114],["fetchpik.com",114],["hackerranksolution.in",114],["camsrip.com",114],["file.org",114],["btcbunch.com",116],["teachoo.com",[117,118]],["mafiatown.pl",119],["bitcotasks.com",120],["hilites.today",121],["udvl.com",122],["www.chip.de",[123,124,125,126]],["topsporter.net",127],["sportshub.to",127],["myanimelist.net",128],["unofficialtwrp.com",129],["codec.kyiv.ua",129],["kimcilonlyofc.com",129],["bitcosite.com",130],["bitzite.com",130],["teluguflix.*",131],["hacoos.com",132],["watchhentai.net",133],["hes-goals.io",133],["pkbiosfix.com",133],["casi3.xyz",133],["zefoy.com",134],["mailgen.biz",135],["tempinbox.xyz",135],["vidello.net",136],["newscon.org",137],["yunjiema.top",137],["pcgeeks-games.com",137],["resizer.myct.jp",138],["gametohkenranbu.sakuraweb.com",139],["jisakuhibi.jp",140],["rank1-media.com",140],["lifematome.blog",141],["fm.sekkaku.net",142],["dvdrev.com",143],["betweenjpandkr.blog",144],["nft-media.net",145],["ghacks.net",146],["leak.sx",147],["paste.bin.sx",147],["pornleaks.in",147],["khoaiphim.com",149],["haafedk2.com",150],["jovemnerd.com.br",151],["totalcsgo.com",152],["manysex.com",153],["gaminginfos.com",154],["tinxahoivn.com",155],["m.4khd.com",156],["westmanga.*",156],["automoto.it",157],["fordownloader.com",158],["codelivly.com",159],["tchatche.com",160],["cryptoearns.com",160],["lordchannel.com",161],["novelhall.com",162],["bagi.co.in",163],["keran.co",163],["biblestudytools.com",164],["christianheadlines.com",164],["ibelieve.com",164],["kuponigo.com",165],["inxxx.com",166],["bemyhole.com",166],["embedwish.com",167],["jenismac.com",168],["vxetable.cn",169],["luluvid.com",170],["daddylive1.*",170],["esportivos.*",170],["instream.pro",170],["poscitechs.*",170],["powerover.online",170],["sportea.link",170],["ustream.pro",170],["animeshqip.site",170],["apkship.shop",170],["filedot.to",170],["hdstream.one",170],["kingstreamz.site",170],["live.fastsports.store",170],["livesnow.me",170],["livesports4u.pw",170],["nuxhallas.click",170],["papahd.info",170],["rgshows.me",170],["sportmargin.live",170],["sportmargin.online",170],["sportsloverz.xyz",170],["supertipzz.online",170],["ultrastreamlinks.xyz",170],["webmaal.cfd",170],["wizistreamz.xyz",170],["educ4m.com",170],["fromwatch.com",170],["visualnewshub.com",170],["donghuaworld.com",171],["letsdopuzzles.com",172],["rediff.com",173],["igay69.com",174],["dzapk.com",175],["darknessporn.com",176],["familyporner.com",176],["freepublicporn.com",176],["pisshamster.com",176],["punishworld.com",176],["xanimu.com",176],["tainio-mania.online",177],["eroticmoviesonline.me",178],["series9movies.com",178],["teleclub.xyz",179],["ecamrips.com",180],["showcamrips.com",180],["tucinehd.com",181],["uyeshare.cc",181],["9animetv.to",182],["qiwi.gg",183],["jornadaperfecta.com",184],["sousou-no-frieren.com",185],["unite-guide.com",187],["thebullspen.com",188],["receitasdaora.online",189],["hiraethtranslation.com",191],["xfreehd.com",192],["freethesaurus.com",193],["thefreedictionary.com",193],["dexterclearance.com",194],["x86.co.kr",195],["onlyfaucet.com",196],["x-x-x.tube",197],["fdownloader.net",198],["thehackernews.com",199],["mielec.pl",200],["treasl.com",201],["mrbenne.com",202],["sportsonline.si",203],["fiuxy2.co",204],["animeunity.to",205],["tokopedia.com",206],["remixsearch.net",207],["remixsearch.es",207],["onlineweb.tools",207],["sharing.wtf",207],["2024tv.ru",208],["modrinth.com",209],["curseforge.com",209],["xnxxcom.xyz",210],["sportsurge.net",211],["joyousplay.xyz",211],["quest4play.xyz",[211,213]],["moneycontrol.com",212],["cookiewebplay.xyz",213],["ilovetoplay.xyz",213],["streamcaster.live",213],["weblivehdplay.ru",213],["nontongo.win",214],["m9.news",215],["callofwar.com",216],["secondhandsongs.com",217],["nohost.one",218],["send.cm",219],["send.now",219],["3rooodnews.net",220],["xxxbfvideo.net",221],["filmy4wap.co.in",222],["filmy4waps.org",222],["gameshop4u.com",223],["regenzi.site",223],["historicaerials.com",224],["handirect.fr",225],["fsiblog3.club",226],["kamababa.desi",226],["sat-sharing.com",226],["getfiles.co.uk",227],["genelify.com",228],["dhtpre.com",229],["xbaaz.com",230],["lineupexperts.com",232],["fearmp4.ru",233],["appnee.com",234],["buffsports.*",235],["fbstreams.*",235],["omuzaani.me",235],["wavewalt.me",[235,251]],["pornoxo.com",236],["m.shuhaige.net",237],["streamingnow.mov",238],["thesciencetoday.com",239],["sportnews.to",239],["ghbrisk.com",241],["iplayerhls.com",241],["bacasitus.com",242],["katoikos.world",242],["abstream.to",243],["pawastreams.pro",244],["rebajagratis.com",245],["tv.latinlucha.es",245],["fetcheveryone.com",246],["reviewdiv.com",247],["laurelberninteriors.com",248],["godlike.com",249],["godlikeproductions.com",249],["bestsportslive.org",250],["alexsports.*>>",251],["btvsports.my>>",251],["cr7-soccer.store>>",251],["e2link.link>>",251],["fsportshd.xyz>>",251],["kakarotfoot.ru>>",251],["pelotalibrevivo.net>>",251],["powerover.site>>",251],["redditsoccerstreams.name>>",251],["sportstohfa.online>>",251],["sportzonline.site>>",251],["streamshunters.eu>>",251],["totalsportek1000.com>>",251],["worldsports.*>>",251],["7fractals.icu",251],["allevertakstream.space",251],["brainknock.net",251],["btvsports.my",251],["capo6play.com",251],["capoplay.net",251],["cdn256.xyz",251],["courseleader.net",251],["cr7-soccer.store",251],["dropbang.net",251],["e2link.link",251],["hornpot.net",251],["fsportshd.xyz",251],["ihdstreams.*",251],["kakarotfoot.ru",251],["meltol.net",251],["nativesurge.net",251],["powerover.site",251],["snapinstadownload.xyz",251],["sportstohfa.online",251],["sportzonline.site",251],["stellarthread.com",251],["streamshunters.eu",251],["totalsportek1000.com",251],["voodc.com",251],["worldsports.*",251],["ziggogratis.site",251],["bestreamsports.org",252],["streamhls.to",254],["xmalay1.net",255],["letemsvetemapplem.eu",256],["pc-builds.com",257],["emoji.gg",259],["pfps.gg",260],["live4all.net",261],["pokemon-project.com",262],["moviesonlinefree.*",263],["fileszero.com",264],["viralharami.com",264],["wstream.cloud",264],["bmamag.com",265],["bmacanberra.wpcomstaging.com",265],["cinemastervip.com",266],["mmsbee42.com",267],["mmsmasala.com",267],["idlixku.com",268],["andrenalynrushplay.cfd",269],["fnjplay.xyz",269],["porn4fans.com",271],["kaliscan.io",272],["webnoveltranslations.com",273],["techbloat.com",274],["elamigosweb.com",275],["mangacrab.org",276],["cefirates.com",277],["comicleaks.com",277],["tapmyback.com",277],["ping.gg",277],["nookgaming.com",277],["creatordrop.com",277],["bitdomain.biz",277],["fort-shop.kiev.ua",277],["accuretawealth.com",277],["resourceya.com",277],["tracktheta.com",277],["adaptive.marketing",277],["camberlion.com",277],["trybawaryjny.pl",277],["segops.madisonspecs.com",277],["stresshelden-coaching.de",277],["controlconceptsusa.com",277],["ryaktive.com",277],["tip.etip-staging.etip.io",277],["future-fortune.com",278],["furucombo.app",278],["bolighub.dk",278],["intercity.technology",279],["freelancer.taxmachine.be",279],["adria.gg",279],["fjlaboratories.com",279],["abhijith.page",279],["helpmonks.com",279],["dataunlocker.com",280],["proboards.com",281],["winclassic.net",281],["farmersjournal.ie",282],["zorroplay.xyz",284]]);
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
