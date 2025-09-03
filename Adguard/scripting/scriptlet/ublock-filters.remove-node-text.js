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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/\\.textContent|createObjectURL|Function\\(decodedScript\\)/"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","sandbox"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","adsBlocked"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","\"data-sdk\""],["script","createOverlay"],["script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["script","_ADX_"],["script","div.offsetHeight"],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","randvar"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","popundersPerIP"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/getComputedStyle|overlay/"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","debugger"],["script","decodeURIComponent"],["script","adblock_popup"],["script","MutationObserver"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["cdn.gledaitv.*",2],["faqwiki.*",3],["snapwordz.com",3],["toolxox.com",3],["rl6mans.com",3],["im9.eu",3],["nontonx.com",4],["embed.wcostream.com",5],["pandadoc.com",6],["web.de",7],["skidrowreloaded.com",[8,19]],["1337x.*",[8,19]],["1stream.eu",8],["4kwebplay.xyz",8],["alldownplay.xyz",8],["anime4i.vip",8],["antennasports.ru",8],["boxingstream.me",8],["buffstreams.app",8],["claplivehdplay.ru",8],["cracksports.me",[8,18]],["cricstream.me",8],["cricstreams.re",[8,18]],["dartsstreams.com",8],["dl-protect.link",8],["eurekaddl.baby",8],["euro2024direct.ru",8],["ext.to",8],["extrem-down.*",8],["extreme-down.*",8],["eztv.*",8],["eztvx.to",8],["f1box.me",8],["filecrypt.cc",8],["flix-wave.*",8],["flixrave.me",8],["golfstreams.me",8],["hikaritv.xyz",8],["ianimes.one",8],["istreameast.app",8],["jointexploit.net",[8,19]],["kenitv.me",[8,18]],["lewblivehdplay.ru",[8,216]],["mediacast.click",8],["mixdrop.*",[8,19]],["mlbbite.net",8],["mlbstreams.ai",8],["motogpstream.me",8],["nbabox.me",8],["nflbite.com",8],["nflbox.me",8],["nhlbox.me",8],["ogladaj.in",8],["playcast.click",8],["qatarstreams.me",[8,18]],["qqwebplay.xyz",[8,216]],["rnbastreams.com",8],["rugbystreams.me",8],["sanet.*",8],["socceronline.me",8],["soccerworldcup.me",[8,18]],["sportshd.*",8],["sportzonline.si",8],["streamed.su",8],["sushiscan.net",8],["topstreams.info",8],["totalsportek.to",8],["tvableon.me",[8,18]],["vecloud.eu",8],["vibestreams.*",8],["vipstand.pm",8],["webcamrips.to",8],["worldsports.me",8],["x1337x.*",8],["zone-telechargement.*",8],["720pstream.*",[8,70]],["embedsports.me",[8,104]],["embedstream.me",[8,18,19,70,104]],["reliabletv.me",[8,104]],["topembed.pw",[8,72,216]],["crackstreamer.net",8],["vidsrc.*",[8,18,70]],["vidco.pro",[8,70]],["freestreams-live.*>>",8],["moviepilot.de",[9,62]],["userupload.*",10],["cinedesi.in",10],["intro-hd.net",10],["monacomatin.mc",10],["nodo313.net",10],["mhdtvsports.*",[10,36]],["hesgoal-tv.io",10],["hesgoal-vip.io",10],["earn.punjabworks.com",10],["mahajobwala.in",10],["solewe.com",10],["panel.play.hosting",10],["total-sportek.to",10],["hesgoal-vip.to",10],["shoot-yalla.me",10],["shoot-yalla-tv.live",10],["pahe.*",[11,19,72]],["soap2day.*",11],["yts.mx",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["negyzetmeterarak.hu",17],["viprow.*",[18,19,70]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,70]],["cloudvideotv.*",[18,70]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,19]],["megaup.net",18],["olympicstreams.co",[18,70]],["tv247.us",[18,19]],["uploadhaven.com",18],["userscloud.com",[18,70]],["streamnoads.com",[18,19,70,96]],["neodrive.xyz",18],["mdfx9dc8n.net",19],["mdzsmutpcvykb.net",19],["mixdrop21.net",19],["mixdropjmk.pw",19],["123-movies.*",19],["123movieshd.*",19],["123movieshub.*",19],["123moviesme.*",19],["1337x.ninjaproxy1.com",19],["1bit.space",19],["1bitspace.com",19],["1stream.*",19],["1tamilmv.*",19],["2ddl.*",19],["2umovies.*",19],["3dporndude.com",19],["3hiidude.*",19],["4archive.org",19],["4chanarchives.com",19],["4horlover.com",19],["4stream.*",19],["560pmovie.com",19],["5movies.*",19],["7hitmovies.*",19],["85videos.com",19],["9xmovie.*",19],["aagmaal.*",[19,70]],["acefile.co",19],["actusports.eu",19],["adblockeronstape.*",[19,96]],["adblockeronstreamtape.*",19],["adblockplustape.*",[19,96]],["adblockstreamtape.*",[19,96]],["adblockstrtape.*",[19,96]],["adblockstrtech.*",[19,96]],["adblocktape.*",[19,96]],["adclickersbot.com",19],["adcorto.*",19],["adricami.com",19],["adslink.pw",[19,68]],["adultstvlive.com",19],["adz7short.space",19],["aeblender.com",19],["affordwonder.net",19],["ahdafnews.blogspot.com",19],["aiblog.tv",[19,73]],["ak47sports.com",19],["akuma.moe",19],["alexsports.*",[19,253]],["alexsportss.*",19],["alexsportz.*",19],["allplayer.tk",19],["amateurblog.tv",[19,73]],["androidadult.com",[19,242]],["anhsexjav.xyz",19],["anidl.org",19],["anime-loads.org",19],["animeblkom.net",19],["animefire.plus",19],["animelek.me",19],["animepahe.*",19],["animesanka.*",19],["animesorionvip.net",19],["animespire.net",19],["animestotais.xyz",19],["animeyt.es",19],["animixplay.*",19],["aniplay.*",19],["anroll.net",19],["antiadtape.*",[19,96]],["anymoviess.xyz",19],["aotonline.org",19],["asenshu.com",19],["asialiveaction.com",19],["asianclipdedhd.net",19],["asianclub.*",19],["ask4movie.*",19],["askim-bg.com",19],["asumsikedaishop.com",19],["atomixhq.*",[19,70]],["atomohd.*",19],["avcrempie.com",19],["avseesee.com",19],["gettapeads.com",[19,96]],["bajarjuegospcgratis.com",19],["balkanteka.net",19],["beastvid.tv",19],["beinmatch.*",[19,27]],["belowporn.com",19],["bestgirlsexy.com",19],["bestnhl.com",19],["bestporncomix.com",19],["bhaai.*",19],["bigwarp.*",19],["bikinbayi.com",19],["bikinitryon.net",19],["birdurls.com",19],["bitsearch.to",19],["blackcockadventure.com",19],["blackcockchurch.org",19],["blackporncrazy.com",19],["blizzboygames.net",19],["blizzpaste.com",19],["blkom.com",19],["blog-peliculas.com",19],["blogtrabalhista.com",19],["blurayufr.*",19],["bobsvagene.club",19],["bokep.im",19],["bokep.top",19],["bokepnya.com",19],["boyfuck.me",19],["brilian-news.id",19],["brupload.net",19],["buffstreams.*",19],["buzter.xyz",19],["caitlin.top",19],["camchickscaps.com",19],["camgirls.casa",19],["canalesportivo.*",19],["cashurl.in",19],["ccurl.net",[19,70]],["cdn1.site",[19,53]],["charexempire.com",19],["clickndownload.*",19],["clicknupload.*",[19,72]],["clik.pw",19],["coin-free.com",[19,40]],["coins100s.fun",19],["comohoy.com",19],["coolcast2.com",19],["cordneutral.net",19],["coreradio.online",19],["cosplaytab.com",19],["countylocalnews.com",19],["cpmlink.net",19],["crackstreamshd.click",19],["crespomods.com",19],["crisanimex.com",19],["crunchyscan.fr",19],["cuevana3.fan",19],["cuevana3hd.com",19],["cumception.com",19],["cutpaid.com",19],["daddylive.*",[19,70,214]],["daddylivehd.*",[19,70]],["daddylivestream.com",[19,214]],["dailyuploads.net",19],["darkmahou.org",19],["datawav.club",19],["daughtertraining.com",19],["ddrmovies.*",19],["deepgoretube.site",19],["deltabit.co",19],["deporte-libre.top",19],["depvailon.com",19],["derleta.com",19],["desiremovies.*",19],["desivdo.com",19],["desixx.net",19],["detikkebumen.com",19],["deutschepornos.me",19],["devlib.*",19],["diasoft.xyz",19],["dipelis.junctionjive.co.uk",19],["directupload.net",19],["divxtotal.*",19],["divxtotal1.*",19],["dixva.com",19],["dlhd.*",[19,214]],["doctormalay.com",19],["dofusports.xyz",19],["doods.cam",19],["doodskin.lat",19],["downloadrips.com",19],["downvod.com",19],["dphunters.mom",19],["dragontranslation.com",19],["dvdfullestrenos.com",19],["dvdplay.*",[19,70]],["dx-tv.com",[19,36]],["ebookbb.com",19],["ebookhunter.net",19],["egyanime.com",19],["egygost.com",19],["ekasiwap.com",19],["electro-torrent.pl",19],["elixx.*",19],["elrefugiodelpirata.com",19],["enjoy4k.*",19],["eplayer.click",19],["erovoice.us",19],["eroxxx.us",19],["estrenosdoramas.net",19],["estrenosflix.*",19],["estrenosflux.*",19],["estrenosgo.*",19],["everia.club",19],["everythinginherenet.blogspot.com",19],["extratorrent.st",19],["extremotvplay.com",19],["f1stream.*",19],["fapinporn.com",19],["fapptime.com",19],["fastreams.live",19],["faucethero.com",19],["favoyeurtube.net",19],["fbstream.*",19],["fc2db.com",19],["femdom-joi.com",[19,73]],["fenixsite.net",19],["file4go.*",19],["filegram.to",[19,68,73]],["fileone.tv",19],["film1k.com",19],["filmeonline2023.net",19],["filmesonlinex.org",19],["filmesonlinexhd.biz",[19,70]],["filmisub.cc",19],["filmovitica.com",19],["filmymaza.blogspot.com",19],["filmyzilla.*",[19,70]],["filthy.family",19],["findav.*",19],["findporn.*",19],["flickzap.com",19],["flixmaza.*",19],["flizmovies.*",19],["flostreams.xyz",19],["flyfaucet.com",19],["footyhunter.lol",19],["forex-trnd.com",19],["forumchat.club",19],["forumlovers.club",19],["freeomovie.co.in",19],["freeomovie.to",19],["freeporncomic.net",19],["freepornhdonlinegay.com",19],["freeproxy.io",19],["freeshot.live",19],["freetvsports.*",19],["freeuse.me",19],["freeusexporn.com",19],["fsharetv.cc",19],["fsicomics.com",19],["fullymaza.*",19],["g-porno.com",19],["g3g.*",19],["galinhasamurai.com",19],["gamepcfull.com",19],["gamesmountain.com",19],["gamesrepacks.com",19],["gamingguru.fr",19],["gamovideo.com",19],["garota.cf",19],["gaydelicious.com",19],["gaypornhdfree.com",19],["gaypornhot.com",19],["gaypornmasters.com",19],["gaysex69.net",19],["gemstreams.com",19],["get-to.link",19],["girlscanner.org",19],["giurgiuveanul.ro",19],["gledajcrtace.xyz",19],["gocast2.com",19],["gomo.to",19],["gostosa.cf",19],["gotxx.*",19],["grantorrent.*",19],["gratispaste.com",19],["gravureblog.tv",[19,73]],["gupload.xyz",19],["haho.moe",19],["hayhd.net",19],["hdmoviesfair.*",[19,70]],["hdmoviesflix.*",19],["hdpornflix.com",19],["hdsaprevodom.com",19],["hdstreamss.club",19],["hentaiporno.xxx",19],["hentais.tube",19],["hentaistream.co",19],["hentaitk.net",19],["hentaitube.online",19],["hentaiworld.tv",19],["hesgoal.tv",19],["hexupload.net",19],["hhkungfu.tv",19],["highlanderhelp.com",19],["hiidudemoviez.*",19],["hindimovies.to",[19,70]],["hindimoviestv.com",19],["hiperdex.com",19],["hispasexy.org",19],["hitprn.com",19],["hivflix.*",19],["hoca4u.com",19],["hollymoviehd.cc",19],["hoodsite.com",19],["hopepaste.download",19],["hornylips.com",19],["hotgranny.live",19],["hotmama.live",19],["hqcelebcorner.net",19],["huren.best",19],["hwnaturkya.com",[19,70]],["hxfile.co",[19,70]],["igfap.com",19],["iklandb.com",19],["illink.net",19],["imgsen.*",19],["imgsex.xyz",19],["imgsto.*",19],["imgtraffic.com",19],["imx.to",19],["incest.*",19],["incestflix.*",19],["influencersgonewild.org",19],["infosgj.free.fr",19],["investnewsbrazil.com",19],["itdmusics.com",19],["itopmusic.*",19],["itsuseful.site",19],["itunesfre.com",19],["iwatchfriendsonline.net",[19,150]],["japangaysex.com",19],["jav-noni.cc",19],["javboys.tv",19],["javcl.com",19],["jav-coco.com",19],["javhay.net",19],["javhun.com",19],["javleak.com",19],["javmost.*",19],["javporn.best",19],["javsek.net",19],["javsex.to",19],["javtiful.com",[19,21]],["jimdofree.com",19],["jiofiles.org",19],["jorpetz.com",19],["jp-films.com",19],["jpop80ss3.blogspot.com",19],["jpopsingles.eu",[19,193]],["jrants.com",[19,79]],["justfullporn.net",19],["kantotflix.net",19],["kaplog.com",19],["keeplinks.*",19],["keepvid.*",19],["keralahd.*",19],["khatrimazaful.*",19],["khatrimazafull.*",[19,73]],["kimochi.info",19],["kimochi.tv",19],["kinemania.tv",19],["kissasian.*",19],["kolnovel.site",19],["koltry.life",19],["konstantinova.net",19],["koora-online.live",19],["kunmanga.com",19],["kwithsub.com",19],["lat69.me",19],["latinblog.tv",[19,73]],["latinomegahd.net",19],["leechall.*",19],["leechpremium.link",19],["legendas.dev",19],["legendei.net",19],["lighterlegend.com",19],["linclik.com",19],["linkebr.com",19],["linkrex.net",19],["linkshorts.*",19],["lulu.st",19],["lulustream.com",[19,72]],["lulustream.live",19],["luluvdo.com",19],["luluvdoo.com",19],["mangaweb.xyz",19],["mangovideo.*",19],["masahub.com",19],["masahub.net",19],["masaporn.*",19],["maturegrannyfuck.com",19],["mdy48tn97.com",19],["mediapemersatubangsa.com",19],["mega-mkv.com",19],["megapastes.com",19],["megapornpics.com",19],["messitv.net",19],["meusanimes.net",19],["mexa.sh",19],["milfmoza.com",19],["milfnut.*",19],["milfzr.com",19],["millionscast.com",19],["mimaletamusical.blogspot.com",19],["miniurl.*",19],["mirrorace.*",19],["mitly.us",19],["mixdroop.*",19],["mixixxx000000.cyou",19],["mixixxx696969.cyou",19],["mkv-pastes.com",19],["mkvcage.*",19],["mlbstream.*",19],["mlsbd.*",19],["mmsbee.*",19],["monaskuliner.ac.id",19],["moredesi.com",19],["motogpstream.*",19],["moutogami.com",19],["movgotv.net",19],["movi.pk",19],["movieplex.*",19],["movierulzlink.*",19],["movies123.*",19],["moviesflix.*",19],["moviesmeta.*",19],["moviesmod.com.pl",19],["moviessources.*",19],["moviesverse.*",19],["movieswbb.com",19],["moviewatch.com.pk",19],["moviezwaphd.*",19],["mp4upload.com",19],["mrskin.live",19],["mrunblock.*",19],["multicanaistv.com",19],["mundowuxia.com",19],["multicanais.*",19],["myeasymusic.ir",19],["myonvideo.com",19],["myyouporn.com",19],["mzansifun.com",19],["naughtypiss.com",19],["nbastream.*",19],["nekopoi.*",[19,73]],["netfapx.com",19],["netfuck.net",19],["new-fs.eu",19],["newmovierulz.*",19],["newtorrentgame.com",19],["neymartv.net",19],["nflstream.*",19],["nflstreams.me",19],["nhlstream.*",19],["nicekkk.com",19],["nicesss.com",19],["nlegs.com",19],["noblocktape.*",[19,96]],["nocensor.*",19],["noni-jav.com",19],["notformembersonly.com",19],["novamovie.net",19],["novelpdf.xyz",19],["novelssites.com",[19,70]],["novelup.top",19],["nsfwr34.com",19],["nu6i-bg-net.com",19],["nudebabesin3d.com",19],["nzbstars.com",19],["o2tvseries.com",19],["ohjav.com",19],["ojearnovelas.com",19],["okanime.xyz",19],["olweb.tv",19],["on9.stream",19],["onepiece-mangaonline.com",19],["onifile.com",19],["onionstream.live",19],["onlinesaprevodom.net",19],["onlyfams.*",19],["onlyfullporn.video",19],["onplustv.live",19],["originporn.com",19],["ouo.*",19],["ovagames.com",19],["pastemytxt.com",19],["payskip.org",19],["pctfenix.*",[19,70]],["pctnew.*",[19,70]],["peeplink.in",19],["peliculas24.*",19],["peliculasmx.net",19],["pelisflix20.*",19],["pelisplus.*",19],["pelisxporno.net",19],["pencarian.link",19],["pendidikandasar.net",19],["pervertgirlsvideos.com",19],["pervyvideos.com",19],["phim12h.com",19],["picdollar.com",19],["picsxxxporn.com",19],["pinayscandalz.com",19],["pinkueiga.net",19],["piratebay.*",19],["piratefast.xyz",19],["piratehaven.xyz",19],["pirateiro.com",19],["playtube.co.za",19],["plugintorrent.com",19],["plyjam.*",19],["plylive.*",19],["plyvdo.*",19],["pmvzone.com",19],["porndish.com",19],["pornez.net",19],["pornfetishbdsm.com",19],["pornfits.com",19],["pornhd720p.com",19],["pornhoarder.*",[19,234]],["pornobr.club",19],["pornobr.ninja",19],["pornodominicano.net",19],["pornofaps.com",19],["pornoflux.com",19],["pornotorrent.com.br",19],["pornredit.com",19],["pornstarsyfamosas.es",19],["pornstreams.co",19],["porntn.com",19],["pornxbit.com",19],["pornxday.com",19],["portaldasnovinhas.shop",19],["portugues-fcr.blogspot.com",19],["poseyoung.com",19],["pover.org",19],["prbay.*",19],["projectfreetv.*",19],["proxybit.*",19],["proxyninja.org",19],["psarips.*",19],["pubfilmz.com",19],["publicsexamateurs.com",19],["punanihub.com",19],["pxxbay.com",19],["qiqitvx84.shop",19],["r18.best",19],["racaty.*",19],["ragnaru.net",19],["rapbeh.net",19],["rapelust.com",19],["rapload.org",19],["read-onepiece.net",19],["readhunters.xyz",19],["remaxhd.*",19],["reshare.pm",19],["retro-fucking.com",19],["retrotv.org",19],["rintor.*",19],["rnbxclusive.*",19],["rnbxclusive0.*",19],["rnbxclusive1.*",19],["robaldowns.com",19],["rockdilla.com",19],["rojadirecta.*",19],["rojadirectaenvivo.*",19],["rojitadirecta.blogspot.com",19],["romancetv.site",19],["rsoccerlink.site",19],["rugbystreams.*",19],["rule34.club",19],["rule34hentai.net",19],["rumahbokep-id.com",19],["sadisflix.*",19],["safego.cc",19],["safetxt.*",19],["sakurafile.com",19],["samax63.lol",19],["satoshi-win.xyz",19],["savefiles.com",[19,68]],["scat.gold",19],["scatfap.com",19],["scatkings.com",19],["serie-turche.com",19],["sexdicted.com",19],["sexgay18.com",19],["sexiezpix.com",19],["sexofilm.co",19],["sextgem.com",19],["sextubebbw.com",19],["sgpics.net",19],["shadowrangers.*",19],["shadowrangers.live",19],["shahee4u.cam",19],["shahi4u.*",19],["shahid4u1.*",19],["shahid4uu.*",19],["shahiid-anime.net",19],["shavetape.*",19],["shemale6.com",19],["shemalegape.net",[19,67]],["shid4u.*",19],["shinden.pl",19],["short.es",19],["shortearn.*",19],["shorten.*",19],["shorttey.*",19],["shortzzy.*",19],["showmanga.blog.fc2.com",19],["shrt10.com",19],["sideplusleaks.net",19],["silverblog.tv",[19,73]],["silverpic.com",19],["sinhalasub.life",19],["sinsitio.site",19],["sinvida.me",19],["skidrowcpy.com",19],["skymovieshd.*",19],["slut.mom",19],["smallencode.me",19],["smoner.com",19],["smplace.com",19],["soccerinhd.com",[19,70]],["socceron.name",19],["socceronline.*",[19,70]],["socialblog.tv",[19,73]],["softairbay.com",19],["softarchive.*",19],["sokobj.com",19],["songsio.com",19],["souexatasmais.com",19],["sportbar.live",19],["sports-stream.*",19],["sportstream1.cfd",19],["sporttuna.*",19],["sporttunatv.*",19],["srt.am",19],["srts.me",19],["sshhaa.*",19],["stapadblockuser.*",[19,96]],["stape.*",[19,96]],["stapewithadblock.*",19],["starblog.tv",[19,73]],["starmusiq.*",19],["stbemuiptv.com",19],["stockingfetishvideo.com",19],["strcloud.*",[19,96]],["stream.crichd.vip",19],["stream.lc",19],["stream25.xyz",19],["streamadblocker.*",[19,70,96]],["streamadblockplus.*",[19,96]],["streambee.to",19],["streambucket.net",19],["streamcdn.*",19],["streamcenter.pro",19],["streamers.watch",19],["streamgo.to",19],["streamhub.*",19],["streamingclic.com",19],["streamkiste.tv",19],["streamoupload.xyz",19],["streamservicehd.click",19],["streamsport.*",19],["streamta.*",[19,96]],["streamtape.*",[19,73,96]],["streamtapeadblockuser.*",[19,96]],["streamvid.net",[19,28]],["strikeout.*",[19,72]],["strtape.*",[19,96]],["strtapeadblock.*",[19,96]],["strtapeadblocker.*",[19,96]],["strtapewithadblock.*",19],["strtpe.*",[19,96]],["subtitleporn.com",19],["subtitles.cam",19],["suicidepics.com",19],["supertelevisionhd.com",19],["supexfeeds.com",19],["swatchseries.*",19],["swiftload.io",19],["swipebreed.net",19],["swzz.xyz",19],["sxnaar.com",19],["tabooflix.*",19],["taboosex.club",19],["tapeantiads.com",[19,96]],["tapeblocker.com",[19,96]],["tapenoads.com",[19,96]],["tapepops.com",[19,73,96]],["tapewithadblock.org",[19,96,278]],["teamos.xyz",19],["telegramgroups.xyz",19],["telenovelasweb.com",19],["tempodeconhecer.blogs.sapo.pt",19],["tennisstreams.*",19],["tensei-shitara-slime-datta-ken.com",19],["tfp.is",19],["tgo-tv.co",[19,70]],["thaihotmodels.com",19],["theblueclit.com",19],["thebussybandit.com",19],["thedaddy.*",[19,214]],["thelastdisaster.vip",19],["themoviesflix.*",19],["thepiratebay.*",19],["thepiratebay0.org",19],["thepiratebay10.info",19],["thesexcloud.com",19],["thothub.today",19],["tightsexteens.com",19],["tlnovelas.net",19],["tmearn.*",19],["tojav.net",19],["tokusatsuindo.com",19],["toonanime.*",19],["top16.net",19],["topdrama.net",19],["topvideosgay.com",19],["torlock.*",19],["tormalayalam.*",19],["torrage.info",19],["torrents.vip",19],["torrentz2eu.*",19],["torrsexvid.com",19],["tpb-proxy.xyz",19],["trannyteca.com",19],["trendytalker.com",19],["tuktukcinma.com",19],["tumanga.net",19],["turbogvideos.com",19],["turboimagehost.com",19],["turbovid.me",19],["turkishseriestv.org",19],["turksub24.net",19],["tutele.sx",19],["tutelehd.*",19],["tvglobe.me",19],["tvpclive.com",19],["tvply.*",19],["tvs-widget.com",19],["tvseries.video",19],["u4m.*",19],["ucptt.com",19],["ufaucet.online",19],["ufcfight.online",19],["ufcstream.*",19],["ultrahorny.com",19],["ultraten.net",19],["unblocknow.*",19],["unblockweb.me",19],["underhentai.net",19],["uniqueten.net",19],["uns.bio",19],["upbaam.com",19],["uploadbuzz.*",19],["upstream.to",19],["upzur.com",19],["usagoals.*",19],["ustream.to",19],["valhallas.click",19],["valeriabelen.com",19],["verdragonball.online",19],["vexmoviex.*",19],["vfxmed.com",19],["vidclouds.*",19],["video.az",19],["videostreaming.rocks",19],["videowood.tv",19],["vidlox.*",19],["vidorg.net",19],["vidtapes.com",19],["vidz7.com",19],["vikistream.com",19],["vinovo.to",19],["vipboxtv.*",[19,70]],["vipleague.*",[19,238]],["virpe.cc",19],["visifilmai.org",19],["viveseries.com",19],["vladrustov.sx",19],["volokit2.com",[19,214]],["vstorrent.org",19],["w-hentai.com",19],["w4hd.com",19],["watch-series.*",19],["watchbrooklynnine-nine.com",19],["watchelementaryonline.com",19],["watchf1full.com",19],["watchfamilyguyonline.com",19],["watchjavidol.com",19],["watchkobestreams.info",19],["watchlostonline.net",19],["watchmodernfamilyonline.com",19],["watchmonkonline.com",19],["watchrulesofengagementonline.com",19],["watchseries.*",19],["webcamrips.com",19],["wincest.xyz",19],["wolverdon.fun",19],["wordcounter.icu",19],["worldmovies.store",19],["worldstreams.click",19],["wpdeployit.com",19],["wqstreams.tk",19],["wwwsct.com",19],["xanimeporn.com",19],["xblog.tv",[19,73]],["xclusivejams.*",19],["xmoviesforyou.*",19],["xn--verseriesespaollatino-obc.online",19],["xpornium.net",19],["xsober.com",19],["xvip.lat",19],["xxgasm.com",19],["xxvideoss.org",19],["xxx18.uno",19],["xxxdominicana.com",19],["xxxfree.watch",19],["xxxmax.net",19],["xxxwebdlxxx.top",19],["xxxxvideo.uno",19],["yabai.si",19],["yeshd.net",19],["youdbox.*",19],["youjax.com",19],["yourdailypornvideos.ws",19],["yourupload.com",19],["youswear.com",19],["ytmp3eu.*",19],["yts-subs.*",19],["yts.*",19],["ytstv.me",19],["yumeost.net",19],["zerion.cc",19],["zerocoin.top",19],["zitss.xyz",19],["zooqle.*",19],["zpaste.net",19],["hitomi.la",19],["fastreams.com",19],["streamsoccer.site",19],["tntsports.store",19],["wowstreams.co",19],["dutchycorp.*",20],["faucet.ovh",20],["mmacore.tv",21],["nxbrew.net",21],["brawlify.com",21],["oko.sh",22],["variety.com",[23,83]],["gameskinny.com",23],["deadline.com",[23,83]],["mlive.com",[23,83]],["washingtonpost.com",24],["gosexpod.com",25],["sexo5k.com",26],["truyen-hentai.com",26],["theshedend.com",28],["zeroupload.com",28],["securenetsystems.net",28],["miniwebtool.com",28],["bchtechnologies.com",28],["eracast.cc",28],["flatai.org",28],["leeapk.com",28],["spiegel.de",29],["jacquieetmichel.net",30],["hausbau-forum.de",31],["althub.club",31],["kiemlua.com",31],["doujindesu.*",32],["atlasstudiousa.com",32],["51bonusrummy.in",[32,73]],["tackledsoul.com",33],["adrino1.bonloan.xyz",33],["vi-music.app",33],["instanders.app",33],["rokni.xyz",33],["keedabankingnews.com",33],["sampledrive.org",[33,76]],["windroid777.com",33],["z80ne.com",33],["tea-coffee.net",34],["spatsify.com",34],["newedutopics.com",34],["getviralreach.in",34],["edukaroo.com",34],["funkeypagali.com",34],["careersides.com",34],["nayisahara.com",34],["wikifilmia.com",34],["infinityskull.com",34],["viewmyknowledge.com",34],["iisfvirtual.in",34],["starxinvestor.com",34],["jkssbalerts.com",34],["imagereviser.com",35],["veganab.co",36],["camdigest.com",36],["learnmany.in",36],["amanguides.com",[36,42]],["highkeyfinance.com",[36,42]],["appkamods.com",36],["techacode.com",36],["djqunjab.in",36],["downfile.site",36],["expertvn.com",36],["trangchu.news",36],["shemaleraw.com",36],["thecustomrom.com",36],["wemove-charity.org",36],["nulleb.com",36],["snlookup.com",36],["bingotingo.com",36],["ghior.com",36],["3dmili.com",36],["karanpc.com",36],["plc247.com",36],["apkdelisi.net",36],["freepasses.org",36],["poplinks.*",[36,46]],["tomarnarede.pt",36],["basketballbuzz.ca",36],["dribbblegraphics.com",36],["kemiox.com",36],["teksnologi.com",36],["bharathwick.com",36],["descargaspcpro.net",36],["rt3dmodels.com",36],["plc4me.com",36],["blisseyhusbands.com",36],["mhdsports.*",36],["mhdsportstv.*",36],["mhdtvworld.*",36],["mhdtvmax.*",36],["mhdstream.*",36],["madaradex.org",36],["trigonevo.com",36],["franceprefecture.fr",36],["jazbaat.in",36],["aipebel.com",36],["audiotools.blog",36],["embdproxy.xyz",36],["fc-lc.*",37],["jobzhub.store",38],["fitdynamos.com",38],["labgame.io",38],["kenzo-flowertag.com",39],["mdn.lol",39],["btcbitco.in",40],["btcsatoshi.net",40],["cempakajaya.com",40],["crypto4yu.com",40],["manofadan.com",40],["readbitcoin.org",40],["wiour.com",40],["tremamnon.com",40],["bitsmagic.fun",40],["ourcoincash.xyz",40],["aylink.co",41],["sugarona.com",42],["nishankhatri.xyz",42],["cety.app",43],["exe-urls.com",43],["exego.app",43],["cutlink.net",43],["cutyurls.com",43],["cutty.app",43],["cutnet.net",43],["jixo.online",43],["tinys.click",44],["loan.creditsgoal.com",44],["rupyaworld.com",44],["vahantoday.com",44],["techawaaz.in",44],["loan.bgmi32bitapk.in",44],["formyanime.com",44],["gsm-solution.com",44],["h-donghua.com",44],["hindisubbedacademy.com",44],["hm4tech.info",44],["mydverse.*",44],["panelprograms.blogspot.com",44],["ripexbooster.xyz",44],["serial4.com",44],["tutorgaming.com",44],["everydaytechvams.com",44],["dipsnp.com",44],["cccam4sat.com",44],["diendancauduong.com",44],["stitichsports.com",44],["aiimgvlog.fun",45],["appsbull.com",46],["diudemy.com",46],["maqal360.com",46],["androjungle.com",46],["bookszone.in",46],["shortix.co",46],["makefreecallsonline.com",46],["msonglyrics.com",46],["app-sorteos.com",46],["bokugents.com",46],["client.pylexnodes.net",46],["btvplus.bg",46],["listar-mc.net",46],["coingraph.us",47],["impact24.us",47],["iconicblogger.com",48],["auto-crypto.click",48],["tpi.li",49],["oii.la",[49,72]],["shrinkme.*",50],["shrinke.*",50],["mrproblogger.com",50],["themezon.net",50],["smutty.com",50],["e-sushi.fr",50],["gayforfans.com",50],["freeadultcomix.com",50],["down.dataaps.com",50],["filmweb.pl",[50,188]],["livecamrips.*",50],["safetxt.net",50],["filespayouts.com",50],["atglinks.com",51],["kbconlinegame.com",52],["hamrojaagir.com",52],["odijob.com",52],["stfly.biz",53],["airevue.net",53],["atravan.net",53],["simana.online",54],["fooak.com",54],["joktop.com",54],["evernia.site",54],["falpus.com",54],["rfiql.com",55],["gujjukhabar.in",55],["smartfeecalculator.com",55],["djxmaza.in",55],["thecubexguide.com",55],["jytechs.in",55],["financacerta.com",56],["encurtads.net",56],["mastkhabre.com",57],["weshare.is",58],["vplink.in",59],["3dsfree.org",60],["up4load.com",61],["alpin.de",62],["boersennews.de",62],["chefkoch.de",62],["chip.de",62],["clever-tanken.de",62],["desired.de",62],["donnerwetter.de",62],["fanfiktion.de",62],["focus.de",62],["formel1.de",62],["frustfrei-lernen.de",62],["gewinnspiele.tv",62],["giga.de",62],["gut-erklaert.de",62],["kino.de",62],["messen.de",62],["nickles.de",62],["nordbayern.de",62],["spielfilm.de",62],["teltarif.de",[62,63]],["unsere-helden.com",62],["weltfussball.at",62],["watson.de",62],["mactechnews.de",62],["sport1.de",62],["welt.de",62],["sport.de",62],["allthingsvegas.com",64],["100percentfedup.com",64],["beforeitsnews.com",64],["concomber.com",64],["conservativefiringline.com",64],["dailylol.com",64],["funnyand.com",64],["letocard.fr",64],["mamieastuce.com",64],["meilleurpronostic.fr",64],["patriotnationpress.com",64],["toptenz.net",64],["vitamiiin.com",64],["writerscafe.org",64],["populist.press",64],["dailytruthreport.com",64],["livinggospeldaily.com",64],["first-names-meanings.com",64],["welovetrump.com",64],["thehayride.com",64],["thelibertydaily.com",64],["thepoke.co.uk",64],["thepolitistick.com",64],["theblacksphere.net",64],["shark-tank.com",64],["naturalblaze.com",64],["greatamericanrepublic.com",64],["dailysurge.com",64],["truthlion.com",64],["flagandcross.com",64],["westword.com",64],["republicbrief.com",64],["freedomfirstnetwork.com",64],["phoenixnewtimes.com",64],["designbump.com",64],["clashdaily.com",64],["madworldnews.com",64],["reviveusa.com",64],["sonsoflibertymedia.com",64],["thedesigninspiration.com",64],["videogamesblogger.com",64],["protrumpnews.com",64],["thepalmierireport.com",64],["kresy.pl",64],["thepatriotjournal.com",64],["thegatewaypundit.com",64],["wltreport.com",64],["miaminewtimes.com",64],["politicalsignal.com",64],["rightwingnews.com",64],["bigleaguepolitics.com",64],["comicallyincorrect.com",64],["upornia.com",65],["pillowcase.su",66],["akaihentai.com",67],["cine-calidad.*",67],["fastpic.org",[67,73]],["forums.socialmediagirls.com",[67,73]],["javtsunami.com",67],["monoschino2.com",67],["saradahentai.com",67],["sxyprn.*",67],["tabooporn.tv",67],["veryfreeporn.com",67],["x-video.tube",67],["pornoenspanish.es",67],["theporngod.com",67],["tabootube.to",67],["bebasbokep.online",68],["besthdgayporn.com",68],["dimensionalseduction.com",68],["drivenime.com",68],["erothots1.com",68],["javup.org",68],["kaliscan.*",68],["madouqu.com",68],["shemaleup.net",68],["transflix.net",68],["worthcrete.com",68],["x-x-x.video",[68,269]],["hentaihere.com",69],["player.smashy.stream",69],["player.smashystream.com",69],["123movies.*",70],["123moviesla.*",70],["123movieweb.*",70],["2embed.*",70],["9xmovies.*",70],["adsh.cc",70],["adshort.*",70],["afilmyhouse.blogspot.com",70],["ak.sv",70],["allmovieshub.*",70],["api.webs.moe",70],["apkmody.io",70],["asianplay.*",70],["atishmkv.*",70],["backfirstwo.site",70],["bflix.*",70],["crazyblog.in",70],["cricstream.*",70],["crictime.*",70],["cuervotv.me",70],["divicast.com",70],["dood.*",[70,194]],["dooood.*",[70,194]],["embed.meomeo.pw",70],["extramovies.*",70],["faselhd.*",70],["faselhds.*",70],["filemoon.*",70],["filmeserialeonline.org",70],["filmy.*",70],["filmyhit.*",70],["filmywap.*",70],["flexyhit.com",70],["fmovies.*",70],["foreverwallpapers.com",70],["french-streams.cc",70],["gdplayer.*",70],["goku.*",70],["gomovies.*",70],["gowatchseries.*",70],["hdfungamezz.*",70],["hdtoday.to",70],["hinatasoul.com",70],["hindilinks4u.*",70],["hurawatch.*",70],["igg-games.com",70],["infinityscans.net",70],["jalshamoviezhd.*",70],["livecricket.*",70],["mangareader.to",70],["mhdsport.*",70],["mkvcinemas.*",70],["movies2watch.*",70],["moviespapa.*",70],["mp3juice.info",70],["mp4moviez.*",70],["mydownloadtube.*",70],["myflixerz.to",70],["nowmetv.net",70],["nowsportstv.com",70],["nuroflix.*",70],["nxbrew.com",70],["o2tvseries.*",70],["o2tvseriesz.*",70],["oii.io",70],["paidshitforfree.com",70],["pepperlive.info",70],["pirlotv.*",70],["playertv.net",70],["poscitech.*",70],["primewire.*",70],["redecanais.*",70],["roystream.com",70],["rssing.com",70],["s.to",70],["serienstream.*",70],["sflix.*",70],["shahed4u.*",70],["shaheed4u.*",70],["share.filesh.site",70],["sharkfish.xyz",70],["skidrowcodex.net",70],["smartermuver.com",70],["speedostream.*",70],["sportcast.*",70],["sportskart.*",70],["stream4free.live",70],["streamingcommunity.*",[70,72,116]],["tamilarasan.*",70],["tamilfreemp3songs.*",70],["tamilmobilemovies.in",70],["tamilprinthd.*",70],["tapeadsenjoyer.com",[70,73,96]],["thewatchseries.live",70],["tnmusic.in",70],["torrentdosfilmes.*",70],["travelplanspro.com",70],["tubemate.*",70],["tusfiles.com",70],["tutlehd4.com",70],["twstalker.com",70],["uploadrar.*",70],["uqload.*",70],["vid-guard.com",70],["vidcloud9.*",70],["vido.*",70],["vidoo.*",70],["vidsaver.net",70],["vidspeeds.com",70],["viralitytoday.com",70],["voiranime.stream",70],["vudeo.*",70],["vumoo.*",70],["watchdoctorwhoonline.com",70],["watchomovies.*",[70,113]],["watchserie.online",70],["woxikon.in",70],["www-y2mate.com",70],["yesmovies.*",70],["ylink.bid",70],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",70],["kickassanime.*",71],["11xmovies.*",72],["cinego.tv",72],["dokoembed.pw",72],["ev01.to",72],["fojik.*",72],["fstream365.com",72],["fzmovies.*",72],["linkz.*",72],["minoplres.xyz",72],["mostream.us",72],["moviedokan.*",72],["myflixer.*",72],["prmovies.*",72],["readcomiconline.li",72],["s3embtaku.pro",72],["sflix2.to",72],["sportshub.stream",72],["streamblasters.*",72],["topcinema.cam",72],["webxzplay.cfd",72],["zonatmo.com",72],["animesaturn.cx",72],["filecrypt.*",72],["hunterscomics.com",72],["aniwave.uk",72],["dojing.net",73],["fuckflix.click",73],["javsubindo.com",73],["krx18.com",73],["loadx.ws",73],["mangaforfree.com",73],["pornx.to",73],["savefiles.*",[73,255]],["shavetape.cash",73],["strcloud.club",73],["strcloud.site",73],["streampoi.com",73],["strmup.to",[73,172]],["up4stream.com",[73,113]],["ups2up.fun",[73,113]],["videq.stream",73],["xmegadrive.com",73],["rubystm.com",73],["rubyvid.com",73],["rubyvidhub.com",73],["stmruby.com",73],["streamruby.com",73],["kaa.to",74],["hyhd.org",75],["bi-girl.net",76],["ftuapps.*",76],["hentaiseason.com",76],["hoodtrendspredict.com",76],["marcialhub.xyz",76],["odiadance.com",76],["osteusfilmestuga.online",76],["ragnarokscanlation.opchapters.com",76],["showflix.*",76],["swordalada.org",76],["tvappapk.com",76],["twobluescans.com",[76,77]],["varnascan.xyz",76],["fcsnew.net",78],["bibliopanda.visblog.online",79],["hallofseries.com",79],["luciferdonghua.in",79],["toursetlist.com",79],["truyentranhfull.net",79],["fcportables.com",79],["repack-games.com",79],["ibooks.to",79],["blog.tangwudi.com",79],["filecatchers.com",79],["babaktv.com",79],["silive.com",[80,83]],["simpleflying.com",80],["sloughexpress.co.uk",80],["spacenews.com",80],["sportsgamblingpodcast.com",80],["spotofteadesigns.com",80],["stacysrandomthoughts.com",80],["ssnewstelegram.com",80],["superherohype.com",[80,83]],["tablelifeblog.com",80],["thebeautysection.com",80],["thecelticblog.com",80],["thecurvyfashionista.com",80],["thefashionspot.com",80],["thegamescabin.com",80],["thenerdyme.com",80],["thenonconsumeradvocate.com",80],["theprudentgarden.com",80],["thethings.com",80],["timesnews.net",80],["topspeed.com",80],["toyotaklub.org.pl",80],["travelingformiles.com",80],["tutsnode.org",80],["viralviralvideos.com",80],["wannacomewith.com",80],["wimp.com",[80,83]],["windsorexpress.co.uk",80],["woojr.com",80],["worldoftravelswithkids.com",80],["worldsurfleague.com",80],["cheatsheet.com",81],["pwinsider.com",81],["c-span.org",82],["15min.lt",83],["247sports.com",83],["abc17news.com",83],["agrodigital.com",83],["al.com",83],["aliontherunblog.com",83],["allaboutthetea.com",83],["allmovie.com",83],["allmusic.com",83],["allthingsthrifty.com",83],["amessagewithabottle.com",83],["arstechnica.com",83],["artforum.com",83],["artnews.com",83],["audiomack.com",83],["awkward.com",83],["barcablaugranes.com",83],["barnsleychronicle.com",83],["bethcakes.com",83],["betweenenglandandiowa.com",83],["bgr.com",83],["billboard.com",83],["blazersedge.com",83],["blogher.com",83],["blu-ray.com",83],["bluegraygal.com",83],["briefeguru.de",83],["brobible.com",83],["cagesideseats.com",83],["cbsnews.com",83],["cbssports.com",[83,260]],["celiacandthebeast.com",83],["chaptercheats.com",83],["cleveland.com",83],["clickondetroit.com",83],["commercialcompetentedigitale.ro",83],["crooksandliars.com",83],["dailydot.com",83],["dailykos.com",83],["dailyvoice.com",83],["danslescoulisses.com",83],["decider.com",83],["didyouknowfacts.com",83],["dogtime.com",83],["dpreview.com",83],["ebaumsworld.com",83],["egoallstars.com",83],["eldiariony.com",83],["fark.com",83],["femestella.com",83],["fmradiofree.com",83],["free-power-point-templates.com",83],["freeconvert.com",83],["frogsandsnailsandpuppydogtail.com",83],["funtasticlife.com",83],["fwmadebycarli.com",83],["golfdigest.com",83],["grunge.com",83],["gulflive.com",83],["hollywoodreporter.com",83],["homeglowdesign.com",83],["honeygirlsworld.com",83],["ibtimes.co.in",83],["imgur.com",83],["indiewire.com",83],["intouchweekly.com",83],["jasminemaria.com",83],["kens5.com",83],["kion546.com",83],["knowyourmeme.com",83],["last.fm",83],["lehighvalleylive.com",83],["lettyskitchen.com",83],["lifeandstylemag.com",83],["lifeinleggings.com",83],["lizzieinlace.com",83],["localnews8.com",83],["lonestarlive.com",83],["madeeveryday.com",83],["maidenhead-advertiser.co.uk",83],["mandatory.com",83],["mardomreport.net",83],["masslive.com",83],["melangery.com",83],["miamiherald.com",83],["mmamania.com",83],["momtastic.com",83],["mostlymorgan.com",83],["motherwellmag.com",83],["musicfeeds.com.au",83],["naszemiasto.pl",83],["nationalpost.com",83],["nationalreview.com",83],["nbcsports.com",83],["news.com.au",83],["ninersnation.com",83],["nj.com",83],["nordot.app",83],["nothingbutnewcastle.com",83],["nsjonline.com",83],["nypost.com",83],["observer.com",83],["ontvtonight.com",83],["oregonlive.com",83],["pagesix.com",83],["patheos.com",83],["pennlive.com",83],["pep.ph",[83,88]],["phillyvoice.com",83],["playstationlifestyle.net",83],["puckermom.com",83],["reelmama.com",83],["rlfans.com",83],["robbreport.com",83],["rollingstone.com",83],["royalmailchat.co.uk",83],["sandrarose.com",83],["sbnation.com",83],["sheknows.com",83],["sidereel.com",83],["smartworld.it",83],["sneakernews.com",83],["sourcingjournal.com",83],["soldionline.it",83],["sport-fm.gr",83],["stylecaster.com",83],["syracuse.com",83],["tastingtable.com",83],["techcrunch.com",83],["thedailymeal.com",83],["theflowspace.com",83],["themarysue.com",83],["tiermaker.com",83],["timesofisrael.com",83],["tiscali.cz",83],["tokfm.pl",83],["torontosun.com",83],["tvline.com",83],["usmagazine.com",83],["wallup.net",83],["weather.com",83],["worldstar.com",83],["worldstarhiphop.com",83],["wwd.com",83],["wzzm13.com",83],["yourcountdown.to",83],["automobile-catalog.com",[84,85,86]],["baseballchannel.jp",[84,85]],["forum.mobilism.me",84],["gbatemp.net",84],["gentosha-go.com",84],["hang.hu",84],["hoyme.jp",84],["motorbikecatalog.com",[84,85,86]],["pons.com",84],["wisevoter.com",84],["topstarnews.net",84],["islamicfinder.org",84],["secure-signup.net",84],["dramabeans.com",84],["dropgame.jp",[84,85]],["manta.com",84],["tportal.hr",84],["tvtropes.org",84],["convertcase.net",84],["oricon.co.jp",85],["uranai.nosv.org",85],["yakkun.com",85],["24sata.hr",85],["373news.com",85],["actugaming.net",85],["alc.co.jp",85],["allthetests.com",85],["animanch.com",85],["aniroleplay.com",85],["apkmirror.com",[85,192]],["areaconnect.com",85],["as-web.jp",85],["aucfree.com",85],["autoby.jp",85],["autoc-one.jp",85],["autofrage.net",85],["bab.la",85],["babla.*",85],["bien.hu",85],["boredpanda.com",85],["carscoops.com",85],["cesoirtv.com",85],["chanto.jp.net",85],["cinetrafic.fr",85],["cocokara-next.com",85],["collinsdictionary.com",85],["computerfrage.net",85],["crosswordsolver.com",85],["cruciverba.it",85],["cults3d.com",85],["culturequizz.com",85],["daily.co.jp",85],["dailynewshungary.com",85],["dallashoopsjournal.com",85],["dayspedia.com",85],["dictionary.cambridge.org",85],["dictionnaire.lerobert.com",85],["dnevno.hr",85],["dreamchance.net",85],["drweil.com",85],["dziennik.pl",85],["ecranlarge.com",85],["eigachannel.jp",85],["ev-times.com",85],["finanzfrage.net",85],["footballchannel.jp",85],["forsal.pl",85],["freemcserver.net",85],["futabanet.jp",85],["fxstreet-id.com",85],["fxstreet-vn.com",85],["fxstreet.*",85],["game8.jp",85],["gardeningsoul.com",85],["gazetaprawna.pl",85],["gesundheitsfrage.net",85],["gifu-np.co.jp",85],["gigafile.nu",85],["globalrph.com",85],["golf-live.at",85],["grapee.jp",85],["gutefrage.net",85],["hb-nippon.com",85],["heureka.cz",85],["horairesdouverture24.fr",85],["hotcopper.co.nz",85],["hotcopper.com.au",85],["idokep.hu",85],["indiatimes.com",85],["infor.pl",85],["iza.ne.jp",85],["j-cast.com",85],["j-town.net",85],["j7p.jp",85],["jablickar.cz",85],["javatpoint.com",85],["jiji.com",85],["jikayosha.jp",85],["judgehype.com",85],["kinmaweb.jp",85],["km77.com",85],["kobe-journal.com",85],["kreuzwortraetsel.de",85],["kurashinista.jp",85],["kurashiru.com",85],["kyoteibiyori.com",85],["lacuarta.com",85],["lakeshowlife.com",85],["laleggepertutti.it",85],["langenscheidt.com",85],["laposte.net",85],["lawyersgunsmoneyblog.com",85],["ldoceonline.com",85],["listentotaxman.com",85],["livenewschat.eu",85],["luremaga.jp",85],["mafab.hu",85],["mahjongchest.com",85],["mainichi.jp",85],["maketecheasier.com",[85,86]],["malaymail.com",85],["mamastar.jp",85],["mathplayzone.com",85],["meteo60.fr",85],["midhudsonnews.com",85],["minesweeperquest.com",85],["minkou.jp",85],["modhub.us",85],["moin.de",85],["motorradfrage.net",85],["motscroises.fr",85],["muragon.com",85],["nana-press.com",85],["natalie.mu",85],["nationaltoday.com",85],["nbadraft.net",85],["news.zerkalo.io",85],["newsinlevels.com",85],["newsweekjapan.jp",85],["niketalk.com",85],["nikkan-gendai.com",85],["nlab.itmedia.co.jp",85],["nouvelobs.com",85],["nyitvatartas24.hu",85],["oeffnungszeitenbuch.de",85],["onlineradiobox.com",85],["operawire.com",85],["optionsprofitcalculator.com",85],["oraridiapertura24.it",85],["oxfordlearnersdictionaries.com",85],["palabr.as",85],["pashplus.jp",85],["persoenlich.com",85],["petitfute.com",85],["play-games.com",85],["popdaily.com.tw",85],["powerpyx.com",85],["pptvhd36.com",85],["profitline.hu",85],["puzzlegarage.com",85],["quefaire.be",85],["radio-australia.org",85],["radio-osterreich.at",85],["raetsel-hilfe.de",85],["raider.io",85],["ranking.net",85],["references.be",85],["reisefrage.net",85],["relevantmagazine.com",85],["reptilesmagazine.com",85],["roleplayer.me",85],["rostercon.com",85],["samsungmagazine.eu",85],["sankei.com",85],["sanspo.com",85],["scribens.com",85],["scribens.fr",85],["slashdot.org",85],["soccerdigestweb.com",85],["solitairehut.com",85],["sourceforge.net",[85,89]],["southhemitv.com",85],["sportalkorea.com",85],["sportlerfrage.net",85],["statecollege.com",85],["syosetu.com",85],["szamoldki.hu",85],["talkwithstranger.com",85],["the-crossword-solver.com",85],["thedigestweb.com",85],["traicy.com",85],["transparentcalifornia.com",85],["transparentnevada.com",85],["trilltrill.jp",85],["tunebat.com",85],["tvtv.ca",85],["tvtv.us",85],["tweaktown.com",85],["twn.hu",85],["tyda.se",85],["ufret.jp",85],["uptodown.com",85],["uscreditcardguide.com",85],["verkaufsoffener-sonntag.com",85],["vimm.net",85],["wamgame.jp",85],["watchdocumentaries.com",85],["wattedoen.be",85],["webdesignledger.com",85],["wetteronline.de",85],["wfmz.com",85],["winfuture.de",85],["word-grabber.com",85],["worldjournal.com",85],["wort-suchen.de",85],["woxikon.*",85],["young-machine.com",85],["yugioh-starlight.com",85],["yutura.net",85],["zagreb.info",85],["zakzak.co.jp",85],["2chblog.jp",85],["2monkeys.jp",85],["46matome.net",85],["akb48glabo.com",85],["akb48matomemory.com",85],["alfalfalfa.com",85],["all-nationz.com",85],["anihatsu.com",85],["aqua2ch.net",85],["blog.esuteru.com",85],["blog.livedoor.jp",85],["blog.jp",85],["blogo.jp",85],["chaos2ch.com",85],["choco0202.work",85],["crx7601.com",85],["danseisama.com",85],["dareda.net",85],["digital-thread.com",85],["doorblog.jp",85],["exawarosu.net",85],["fgochaldeas.com",85],["football-2ch.com",85],["gekiyaku.com",85],["golog.jp",85],["hacchaka.net",85],["heartlife-matome.com",85],["liblo.jp",85],["fesoku.net",85],["fiveslot777.com",85],["gamejksokuhou.com",85],["girlsreport.net",85],["girlsvip-matome.com",85],["grasoku.com",85],["gundamlog.com",85],["honyaku-channel.net",85],["ikarishintou.com",85],["imas-cg.net",85],["imihu.net",85],["inutomo11.com",85],["itainews.com",85],["itaishinja.com",85],["jin115.com",85],["jisaka.com",85],["jnews1.com",85],["jumpsokuhou.com",85],["jyoseisama.com",85],["keyakizaka46matomemory.net",85],["kidan-m.com",85],["kijoden.com",85],["kijolariat.net",85],["kijolifehack.com",85],["kijomatomelog.com",85],["kijyokatu.com",85],["kijyomatome.com",85],["kijyomatome-ch.com",85],["kijyomita.com",85],["kirarafan.com",85],["kitimama-matome.net",85],["kitizawa.com",85],["konoyubitomare.jp",85],["kotaro269.com",85],["kyousoku.net",85],["ldblog.jp",85],["livedoor.biz",85],["livedoor.blog",85],["majikichi.com",85],["matacoco.com",85],["matomeblade.com",85],["matomelotte.com",85],["matometemitatta.com",85],["mojomojo-licarca.com",85],["morikinoko.com",85],["nandemo-uketori.com",85],["netatama.net",85],["news-buzz1.com",85],["news30over.com",85],["nishinippon.co.jp",85],["nmb48-mtm.com",85],["norisoku.com",85],["npb-news.com",85],["ocsoku.com",85],["okusama-kijyo.com",85],["onecall2ch.com",85],["onihimechan.com",85],["orusoku.com",85],["otakomu.jp",85],["otoko-honne.com",85],["oumaga-times.com",85],["outdoormatome.com",85],["pachinkopachisro.com",85],["paranormal-ch.com",85],["recosoku.com",85],["s2-log.com",85],["saikyo-jump.com",85],["shuraba-matome.com",85],["ske48matome.net",85],["squallchannel.com",85],["sukattojapan.com",85],["sumaburayasan.com",85],["sutekinakijo.com",85],["usi32.com",85],["uwakich.com",85],["uwakitaiken.com",85],["vault76.info",85],["vipnews.jp",85],["vippers.jp",85],["vipsister23.com",85],["vtubernews.jp",85],["watarukiti.com",85],["world-fusigi.net",85],["zakuzaku911.com",85],["zch-vip.com",85],["interfootball.co.kr",86],["a-ha.io",86],["cboard.net",86],["jjang0u.com",86],["joongdo.co.kr",86],["viva100.com",86],["gamingdeputy.com",86],["alle-tests.nl",86],["tweaksforgeeks.com",86],["m.inven.co.kr",86],["mlbpark.donga.com",86],["meconomynews.com",86],["brandbrief.co.kr",86],["motorgraph.com",86],["bleepingcomputer.com",87],["pravda.com.ua",87],["ap7am.com",88],["cinema.com.my",88],["dolldivine.com",88],["giornalone.it",88],["iplocation.net",88],["jamaicajawapos.com",88],["jutarnji.hr",88],["kompasiana.com",88],["mediaindonesia.com",88],["niice-woker.com",88],["slobodnadalmacija.hr",88],["upmedia.mg",88],["mentalfloss.com",90],["bigwarp.cc",91],["3minx.com",92],["555fap.com",92],["ai18.pics",92],["anime-jav.com",92],["blackwidof.org",92],["chinese-pics.com",92],["cn-av.com",92],["cnpics.org",92],["cnxx.me",92],["cosplay-xxx.com",92],["cosplay18.pics",92],["fc2ppv.stream",92],["fikfok.net",92],["gofile.download",92],["hentai-sub.com",92],["hentai4f.com",92],["hentaicovid.com",92],["hentaipig.com",92],["hentaixnx.com",92],["idol69.net",92],["javball.com",92],["javbee.*",92],["javring.com",92],["javsunday.com",92],["javtele.net",92],["kin8-av.com",92],["kin8-jav.com",92],["kr-av.com",92],["ovabee.com",92],["pig69.com",92],["porn-pig.com",92],["porn4f.org",92],["sweetie-fox.com",92],["xcamcovid.com",92],["xxpics.org",92],["hentaivost.fr",93],["jelonka.com",94],["isgfrm.com",95],["advertisertape.com",96],["tapeadvertisement.com",96],["tapelovesads.org",96],["watchadsontape.com",96],["vosfemmes.com",97],["voyeurfrance.net",97],["hyundaitucson.info",98],["exambd.net",99],["cgtips.org",100],["freewebcart.com",101],["freemagazines.top",101],["siamblockchain.com",101],["emuenzen.de",102],["kickass.*",103],["unblocked.id",105],["listendata.com",106],["7xm.xyz",106],["fastupload.io",106],["azmath.info",106],["wouterplanet.com",107],["xenvn.com",108],["pfps.gg",109],["4kporn.xxx",110],["androidacy.com",111],["4porn4.com",112],["bestpornflix.com",113],["freeroms.com",113],["andhrafriends.com",113],["723qrh1p.fun",113],["98zero.com",114],["mediaset.es",114],["hwbusters.com",114],["beatsnoop.com",115],["fetchpik.com",115],["hackerranksolution.in",115],["camsrip.com",115],["file.org",115],["btcbunch.com",117],["teachoo.com",[118,119]],["mafiatown.pl",120],["bitcotasks.com",121],["hilites.today",122],["udvl.com",123],["www.chip.de",[124,125,126,127]],["topsporter.net",128],["sportshub.to",128],["myanimelist.net",129],["unofficialtwrp.com",130],["codec.kyiv.ua",130],["kimcilonlyofc.com",130],["bitcosite.com",131],["bitzite.com",131],["wirtualnemedia.pl",132],["teluguflix.*",133],["hacoos.com",134],["watchhentai.net",135],["hes-goals.io",135],["pkbiosfix.com",135],["casi3.xyz",135],["zefoy.com",136],["mailgen.biz",137],["tempinbox.xyz",137],["vidello.net",138],["newscon.org",139],["yunjiema.top",139],["pcgeeks-games.com",139],["resizer.myct.jp",140],["gametohkenranbu.sakuraweb.com",141],["jisakuhibi.jp",142],["rank1-media.com",142],["lifematome.blog",143],["fm.sekkaku.net",144],["dvdrev.com",145],["betweenjpandkr.blog",146],["nft-media.net",147],["ghacks.net",148],["leak.sx",149],["paste.bin.sx",149],["pornleaks.in",149],["khoaiphim.com",151],["haafedk2.com",152],["jovemnerd.com.br",153],["totalcsgo.com",154],["manysex.com",155],["gaminginfos.com",156],["tinxahoivn.com",157],["m.4khd.com",158],["westmanga.*",158],["automoto.it",159],["fordownloader.com",160],["codelivly.com",161],["tchatche.com",162],["cryptoearns.com",162],["lordchannel.com",163],["novelhall.com",164],["bagi.co.in",165],["keran.co",165],["biblestudytools.com",166],["christianheadlines.com",166],["ibelieve.com",166],["kuponigo.com",167],["inxxx.com",168],["bemyhole.com",168],["embedwish.com",169],["jenismac.com",170],["vxetable.cn",171],["luluvid.com",172],["aliezstream.pro",172],["daddylive1.*",172],["esportivos.*",172],["instream.pro",172],["mylivestream.pro",172],["poscitechs.*",172],["powerover.online",172],["sportea.link",172],["ustream.pro",172],["animeshqip.site",172],["apkship.shop",172],["filedot.to",172],["hdstream.one",172],["kingstreamz.site",172],["live.fastsports.store",172],["livesnow.me",172],["livesports4u.pw",172],["nuxhallas.click",172],["papahd.info",172],["rgshows.me",172],["sportmargin.live",172],["sportmargin.online",172],["sportsloverz.xyz",172],["supertipzz.online",172],["ultrastreamlinks.xyz",172],["webmaal.cfd",172],["wizistreamz.xyz",172],["educ4m.com",172],["fromwatch.com",172],["visualnewshub.com",172],["donghuaworld.com",173],["letsdopuzzles.com",174],["rediff.com",175],["igay69.com",176],["dzapk.com",177],["darknessporn.com",178],["familyporner.com",178],["freepublicporn.com",178],["pisshamster.com",178],["punishworld.com",178],["xanimu.com",178],["tainio-mania.online",179],["eroticmoviesonline.me",180],["series9movies.com",180],["teleclub.xyz",181],["ecamrips.com",182],["showcamrips.com",182],["tucinehd.com",183],["9animetv.to",184],["qiwi.gg",185],["jornadaperfecta.com",186],["sousou-no-frieren.com",187],["unite-guide.com",189],["thebullspen.com",190],["receitasdaora.online",191],["hiraethtranslation.com",193],["all3do.com",194],["d-s.io",194],["d0000d.com",194],["d000d.com",194],["d0o0d.com",194],["do0od.com",194],["do7go.com",194],["doods.*",194],["doodstream.*",194],["dooodster.com",194],["doply.net",194],["ds2play.com",194],["ds2video.com",194],["vidply.com",194],["vide0.net",194],["vvide0.com",194],["xfreehd.com",195],["freethesaurus.com",196],["thefreedictionary.com",196],["dexterclearance.com",197],["x86.co.kr",198],["onlyfaucet.com",199],["x-x-x.tube",200],["fdownloader.net",201],["thehackernews.com",202],["mielec.pl",203],["treasl.com",204],["mrbenne.com",205],["sportsonline.si",206],["fiuxy2.co",207],["animeunity.to",208],["tokopedia.com",209],["remixsearch.net",210],["remixsearch.es",210],["onlineweb.tools",210],["sharing.wtf",210],["2024tv.ru",211],["modrinth.com",212],["curseforge.com",212],["xnxxcom.xyz",213],["sportsurge.net",214],["joyousplay.xyz",214],["quest4play.xyz",[214,216]],["moneycontrol.com",215],["cookiewebplay.xyz",216],["ilovetoplay.xyz",216],["streamcaster.live",216],["weblivehdplay.ru",216],["nontongo.win",217],["m9.news",218],["callofwar.com",219],["secondhandsongs.com",220],["nohost.one",221],["send.cm",222],["send.now",222],["3rooodnews.net",223],["xxxbfvideo.net",224],["filmy4wap.co.in",225],["filmy4waps.org",225],["gameshop4u.com",226],["regenzi.site",226],["historicaerials.com",227],["handirect.fr",228],["fsiblog3.club",229],["kamababa.desi",229],["sat-sharing.com",229],["getfiles.co.uk",230],["genelify.com",231],["dhtpre.com",232],["xbaaz.com",233],["lineupexperts.com",235],["fearmp4.ru",236],["appnee.com",237],["buffsports.*",238],["fbstreams.*",238],["wavewalt.me",[238,253]],["m.shuhaige.net",239],["streamingnow.mov",240],["thesciencetoday.com",241],["sportnews.to",241],["ghbrisk.com",243],["iplayerhls.com",243],["bacasitus.com",244],["katoikos.world",244],["abstream.to",245],["pawastreams.pro",246],["rebajagratis.com",247],["tv.latinlucha.es",247],["fetcheveryone.com",248],["reviewdiv.com",249],["laurelberninteriors.com",250],["godlike.com",251],["godlikeproductions.com",251],["bestsportslive.org",252],["alexsports.*>>",253],["btvsports.my>>",253],["cr7-soccer.store>>",253],["e2link.link>>",253],["fsportshd.xyz>>",253],["kakarotfoot.ru>>",253],["pelotalibrevivo.net>>",253],["powerover.site>>",253],["sportstohfa.online>>",253],["streamshunters.eu>>",253],["totalsportek1000.com>>",253],["worldsports.*>>",253],["7fractals.icu",253],["allevertakstream.space",253],["brainknock.net",253],["btvsports.my",253],["capo6play.com",253],["capoplay.net",253],["cdn256.xyz",253],["courseleader.net",253],["cr7-soccer.store",253],["dropbang.net",253],["e2link.link",253],["hornpot.net",253],["fsportshd.xyz",253],["ihdstreams.*",253],["kakarotfoot.ru",253],["meltol.net",253],["powerover.site",253],["snapinstadownload.xyz",253],["sportstohfa.online",253],["stellarthread.com",253],["streamshunters.eu",253],["totalsportek1000.com",253],["voodc.com",253],["worldsports.*",253],["ziggogratis.site",253],["bestreamsports.org",254],["streamhls.to",256],["xmalay1.net",257],["letemsvetemapplem.eu",258],["pc-builds.com",259],["live4all.net",261],["pokemon-project.com",262],["moviesonlinefree.*",263],["fileszero.com",264],["viralharami.com",264],["wstream.cloud",264],["bmamag.com",265],["bmacanberra.wpcomstaging.com",265],["cinemastervip.com",266],["mmsbee42.com",267],["mmsmasala.com",267],["andrenalynrushplay.cfd",268],["fnjplay.xyz",268],["porn4fans.com",270],["kaliscan.io",271],["cefirates.com",272],["comicleaks.com",272],["tapmyback.com",272],["ping.gg",272],["nookgaming.com",272],["creatordrop.com",272],["bitdomain.biz",272],["fort-shop.kiev.ua",272],["accuretawealth.com",272],["resourceya.com",272],["tracktheta.com",272],["adaptive.marketing",272],["camberlion.com",272],["trybawaryjny.pl",272],["segops.madisonspecs.com",272],["stresshelden-coaching.de",272],["controlconceptsusa.com",272],["ryaktive.com",272],["tip.etip-staging.etip.io",272],["future-fortune.com",273],["furucombo.app",273],["bolighub.dk",273],["intercity.technology",274],["freelancer.taxmachine.be",274],["adria.gg",274],["fjlaboratories.com",274],["abhijith.page",274],["helpmonks.com",274],["dataunlocker.com",275],["proboards.com",276],["winclassic.net",276],["farmersjournal.ie",277]]);
const exceptionsMap = new Map([["chatango.com",[8]],["twitter.com",[8]],["youtube.com",[8]]]);
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
