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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/\\.textContent|createObjectURL/"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","sandbox"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","\"data-sdk\""],["script","createOverlay"],["script","/detectAdblock|WebAssembly|pop1stp|popMagic/"],["script","_ADX_"],["script","div.offsetHeight"],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","popundersPerIP"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/AdBlock/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","debugger"],["script","decodeURIComponent"],["script","adblock_popup"],["script","MutationObserver"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["cdn.bg-gledai.*",2],["cdn.gledaitv.*",2],["faqwiki.*",3],["snapwordz.com",3],["toolxox.com",3],["rl6mans.com",3],["im9.eu",3],["nontonx.com",4],["embed.wcostream.com",5],["pandadoc.com",6],["web.de",7],["skidrowreloaded.com",[8,19]],["1337x.*",[8,19]],["1stream.eu",8],["4kwebplay.xyz",8],["alldownplay.xyz",8],["anime4i.vip",8],["antennasports.ru",8],["boxingstream.me",8],["buffstreams.app",8],["claplivehdplay.ru",[8,215]],["cracksports.me",[8,18]],["cricstream.me",8],["cricstreams.re",[8,18]],["dartsstreams.com",8],["dl-protect.link",8],["eurekaddl.baby",8],["euro2024direct.ru",8],["ext.to",8],["extrem-down.*",8],["extreme-down.*",8],["eztv.*",8],["eztvx.to",8],["f1box.me",8],["filecrypt.cc",8],["flix-wave.*",8],["flixrave.me",8],["golfstreams.me",8],["hikaritv.xyz",8],["ianimes.one",8],["jointexploit.net",[8,19]],["kenitv.me",[8,18]],["lewblivehdplay.ru",[8,215]],["mediacast.click",8],["mixdrop.*",[8,19]],["mlbbite.net",8],["mlbstreams.ai",8],["motogpstream.me",8],["nbabox.me",8],["nflbox.me",8],["nhlbox.me",8],["playcast.click",8],["qatarstreams.me",[8,18]],["qqwebplay.xyz",[8,215]],["rnbastreams.com",8],["rugbystreams.me",8],["sanet.*",8],["socceronline.me",8],["soccerworldcup.me",[8,18]],["sportshd.*",8],["sportzonline.si",8],["streamed.su",8],["sushiscan.net",8],["topstreams.info",8],["totalsportek.to",8],["tvableon.me",[8,18]],["vecloud.eu",8],["vibestreams.*",8],["vipstand.pm",8],["webcamrips.to",8],["worldsports.me",8],["x1337x.*",8],["zone-telechargement.*",8],["720pstream.*",[8,70]],["embedsports.me",[8,103]],["embedstream.me",[8,18,19,70,103]],["jumbtv.com",[8,103]],["reliabletv.me",[8,103]],["topembed.pw",[8,72,215]],["crackstreamer.net",8],["methstreamer.com",8],["vidsrc.*",[8,18,70]],["vidco.pro",[8,70]],["freestreams-live.*>>",8],["moviepilot.de",[9,62]],["userupload.*",10],["cinedesi.in",10],["intro-hd.net",10],["monacomatin.mc",10],["nodo313.net",10],["mhdtvsports.*",[10,36]],["hesgoal-tv.io",10],["hesgoal-vip.io",10],["earn.punjabworks.com",10],["mahajobwala.in",10],["solewe.com",10],["panel.play.hosting",10],["total-sportek.to",10],["hesgoal-vip.to",10],["shoot-yalla.me",10],["shoot-yalla-tv.live",10],["pahe.*",[11,19,72]],["soap2day.*",11],["yts.mx",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["negyzetmeterarak.hu",17],["viprow.*",[18,19,70]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,70]],["cloudvideotv.*",[18,70]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,19]],["megaup.net",18],["olympicstreams.co",[18,70]],["tv247.us",[18,19]],["uploadhaven.com",18],["userscloud.com",[18,70]],["streamnoads.com",[18,19,70,95]],["neodrive.xyz",18],["mdfx9dc8n.net",19],["mdzsmutpcvykb.net",19],["mixdrop21.net",19],["mixdropjmk.pw",19],["123-movies.*",19],["123movieshd.*",19],["123movieshub.*",19],["123moviesme.*",19],["1337x.ninjaproxy1.com",19],["141jav.com",19],["141tube.com",19],["1bit.space",19],["1bitspace.com",19],["1stream.*",19],["1tamilmv.*",19],["2ddl.*",19],["2umovies.*",19],["3dporndude.com",19],["3hiidude.*",19],["4archive.org",19],["4horlover.com",19],["4stream.*",19],["560pmovie.com",19],["5movies.*",19],["7hitmovies.*",19],["85videos.com",19],["9xmovie.*",19],["aagmaal.*",[19,70]],["acefile.co",19],["actusports.eu",19],["adblockeronstape.*",[19,95]],["adblockeronstreamtape.*",19],["adblockplustape.*",[19,95]],["adblockstreamtape.*",[19,95]],["adblockstrtape.*",[19,95]],["adblockstrtech.*",[19,95]],["adblocktape.*",[19,95]],["adclickersbot.com",19],["adcorto.*",19],["adricami.com",19],["adslink.pw",19],["adultstvlive.com",19],["adz7short.space",19],["aeblender.com",19],["affordwonder.net",19],["ahdafnews.blogspot.com",19],["aiblog.tv",[19,73]],["ak47sports.com",19],["akuma.moe",19],["alexsports.*",[19,251]],["alexsportss.*",19],["alexsportz.*",19],["allplayer.tk",19],["amateurblog.tv",[19,73]],["androidadult.com",[19,240]],["anhsexjav.xyz",19],["anidl.org",19],["anime-loads.org",19],["animeblkom.net",19],["animefire.plus",19],["animelek.me",19],["animepahe.*",19],["animesanka.*",19],["animesorionvip.net",19],["animespire.net",19],["animestotais.xyz",19],["animeyt.es",19],["animixplay.*",19],["aniplay.*",19],["anroll.net",19],["antiadtape.*",[19,95]],["anymoviess.xyz",19],["aotonline.org",19],["asenshu.com",19],["asialiveaction.com",19],["asianclipdedhd.net",19],["asianclub.*",19],["ask4movie.*",19],["askim-bg.com",19],["asumsikedaishop.com",19],["atomixhq.*",[19,70]],["atomohd.*",19],["avcrempie.com",19],["avseesee.com",19],["gettapeads.com",[19,95]],["bajarjuegospcgratis.com",19],["balkanteka.net",19],["beastvid.tv",19],["beinmatch.*",[19,27]],["belowporn.com",19],["bestgirlsexy.com",19],["bestnhl.com",19],["bestporncomix.com",19],["bhaai.*",19],["bigwarp.*",19],["bikinbayi.com",19],["bikinitryon.net",19],["birdurls.com",19],["bitsearch.to",19],["blackcockadventure.com",19],["blackcockchurch.org",19],["blackporncrazy.com",19],["blizzboygames.net",19],["blizzpaste.com",19],["blkom.com",19],["blog-peliculas.com",19],["blogtrabalhista.com",19],["blurayufr.*",19],["bobsvagene.club",19],["bokep.im",19],["bokep.top",19],["bokepnya.com",19],["boyfuck.me",19],["brilian-news.id",19],["brupload.net",19],["buffstreams.*",19],["buzter.xyz",19],["caitlin.top",19],["camchickscaps.com",19],["camgirls.casa",19],["canalesportivo.*",19],["cashurl.in",19],["ccurl.net",[19,70]],["cdn1.site",[19,53]],["charexempire.com",19],["clickndownload.*",19],["clicknupload.*",[19,72]],["clik.pw",19],["coin-free.com",[19,40]],["coins100s.fun",19],["comohoy.com",19],["coolcast2.com",19],["cordneutral.net",19],["coreradio.online",19],["cosplaytab.com",19],["countylocalnews.com",19],["cpmlink.net",19],["crackstreamshd.click",19],["crespomods.com",19],["crisanimex.com",19],["crunchyscan.fr",19],["cuevana3.fan",19],["cuevana3hd.com",19],["cumception.com",19],["cutpaid.com",19],["daddylive.*",[19,70,213]],["daddylivehd.*",[19,70]],["dailyuploads.net",19],["datawav.club",19],["daughtertraining.com",19],["ddrmovies.*",19],["deepgoretube.site",19],["deltabit.co",19],["deporte-libre.top",19],["depvailon.com",19],["derleta.com",19],["desiremovies.*",19],["desivdo.com",19],["desixx.net",19],["detikkebumen.com",19],["deutschepornos.me",19],["devlib.*",19],["diasoft.xyz",19],["dipelis.junctionjive.co.uk",19],["directupload.net",19],["divxtotal.*",19],["divxtotal1.*",19],["dixva.com",19],["dlhd.*",[19,213]],["doctormalay.com",19],["dofusports.xyz",19],["doods.cam",19],["doodskin.lat",19],["downloadrips.com",19],["downvod.com",19],["dphunters.mom",19],["dragontranslation.com",19],["dvdfullestrenos.com",19],["dvdplay.*",[19,70]],["dx-tv.com",[19,36]],["ebookbb.com",19],["ebookhunter.net",19],["egyanime.com",19],["egygost.com",19],["ekasiwap.com",19],["electro-torrent.pl",19],["elixx.*",19],["elrefugiodelpirata.com",19],["enjoy4k.*",19],["eplayer.click",19],["erovoice.us",19],["eroxxx.us",19],["estrenosdoramas.net",19],["estrenosflix.*",19],["estrenosflux.*",19],["estrenosgo.*",19],["everia.club",19],["everythinginherenet.blogspot.com",19],["extratorrent.st",19],["extremotvplay.com",19],["f1stream.*",19],["fapinporn.com",19],["fapptime.com",19],["fastreams.live",19],["faucethero.com",19],["favoyeurtube.net",19],["fbstream.*",19],["fc2db.com",19],["femdom-joi.com",[19,73]],["fenixsite.net",19],["file4go.*",19],["filegram.to",[19,68,73]],["fileone.tv",19],["film1k.com",19],["filmeonline2023.net",19],["filmesonlinex.org",19],["filmesonlinexhd.biz",[19,70]],["filmisub.cc",19],["filmovitica.com",19],["filmymaza.blogspot.com",19],["filmyzilla.*",[19,70]],["filthy.family",19],["findav.*",19],["findporn.*",19],["flickzap.com",19],["flixmaza.*",19],["flizmovies.*",19],["flostreams.xyz",19],["flyfaucet.com",19],["footyhunter.lol",19],["forex-trnd.com",19],["forumchat.club",19],["forumlovers.club",19],["freeomovie.co.in",19],["freeomovie.to",19],["freeporncomic.net",19],["freepornhdonlinegay.com",19],["freeproxy.io",19],["freeshot.live",19],["freetvsports.*",19],["freeuse.me",19],["freeusexporn.com",19],["fsharetv.cc",19],["fsicomics.com",19],["fullymaza.*",19],["g-porno.com",19],["g3g.*",19],["galinhasamurai.com",19],["gamepcfull.com",19],["gamesmountain.com",19],["gamesrepacks.com",19],["gamingguru.fr",19],["gamovideo.com",19],["garota.cf",19],["gaydelicious.com",19],["gaypornhdfree.com",19],["gaypornhot.com",19],["gaypornmasters.com",19],["gaysex69.net",19],["gemstreams.com",19],["get-to.link",19],["girlscanner.org",19],["giurgiuveanul.ro",19],["gledajcrtace.xyz",19],["gocast2.com",19],["gomo.to",19],["gostosa.cf",19],["gotxx.*",19],["grantorrent.*",19],["gratispaste.com",19],["gravureblog.tv",[19,73]],["gupload.xyz",19],["haho.moe",19],["hayhd.net",19],["hdmoviesfair.*",[19,70]],["hdmoviesflix.*",19],["hdpornflix.com",19],["hdsaprevodom.com",19],["hdstreamss.club",19],["hentaiporno.xxx",19],["hentais.tube",19],["hentaistream.co",19],["hentaitk.net",19],["hentaitube.online",19],["hentaiworld.tv",19],["hesgoal.tv",19],["hexupload.net",19],["hhkungfu.tv",19],["highlanderhelp.com",19],["hiidudemoviez.*",19],["hindimovies.to",[19,70]],["hindimoviestv.com",19],["hiperdex.com",19],["hispasexy.org",19],["hitprn.com",19],["hivflix.*",19],["hoca4u.com",19],["hollymoviehd.cc",19],["hoodsite.com",19],["hopepaste.download",19],["hornylips.com",19],["hotgranny.live",19],["hotmama.live",19],["hqcelebcorner.net",19],["huren.best",19],["hwnaturkya.com",[19,70]],["hxfile.co",[19,70]],["igfap.com",19],["iklandb.com",19],["illink.net",19],["imgsen.*",19],["imgsex.xyz",19],["imgsto.*",19],["imgtraffic.com",19],["imx.to",19],["incest.*",19],["incestflix.*",19],["influencersgonewild.org",19],["infosgj.free.fr",19],["investnewsbrazil.com",19],["itdmusics.com",19],["itopmusic.*",19],["itsuseful.site",19],["itunesfre.com",19],["iwatchfriendsonline.net",[19,149]],["japangaysex.com",19],["jav-noni.cc",19],["javboys.tv",19],["javcl.com",19],["jav-coco.com",19],["javhay.net",19],["javhun.com",19],["javleak.com",19],["javmost.*",19],["javporn.best",19],["javsek.net",19],["javsex.to",19],["javtiful.com",[19,21]],["jimdofree.com",19],["jiofiles.org",19],["jorpetz.com",19],["jp-films.com",19],["jpop80ss3.blogspot.com",19],["jpopsingles.eu",[19,192]],["jrants.com",[19,78]],["justfullporn.net",19],["kantotflix.net",19],["kaplog.com",19],["keeplinks.*",19],["keepvid.*",19],["keralahd.*",19],["khatrimazaful.*",19],["khatrimazafull.*",[19,73]],["kimochi.info",19],["kimochi.tv",19],["kinemania.tv",19],["kissasian.*",19],["kolnovel.site",19],["koltry.life",19],["konstantinova.net",19],["koora-online.live",19],["kunmanga.com",19],["kwithsub.com",19],["lat69.me",19],["latinblog.tv",[19,73]],["latinomegahd.net",19],["leechall.*",19],["leechpremium.link",19],["legendas.dev",19],["legendei.net",19],["lighterlegend.com",19],["linclik.com",19],["linkebr.com",19],["linkrex.net",19],["linkshorts.*",19],["lulu.st",19],["lulustream.com",[19,72]],["lulustream.live",19],["luluvdo.com",19],["luluvdoo.com",19],["mangaweb.xyz",19],["mangovideo.*",19],["masahub.com",19],["masahub.net",19],["masaporn.*",19],["maturegrannyfuck.com",19],["mdy48tn97.com",19],["mediapemersatubangsa.com",19],["mega-mkv.com",19],["megapastes.com",19],["megapornpics.com",19],["messitv.net",19],["meusanimes.net",19],["mexa.sh",19],["milfmoza.com",19],["milfnut.*",19],["milfzr.com",19],["millionscast.com",19],["mimaletamusical.blogspot.com",19],["miniurl.*",19],["mirrorace.*",19],["mitly.us",19],["mixdroop.*",19],["mixixxx000000.cyou",19],["mixixxx696969.cyou",19],["mkv-pastes.com",19],["mkvcage.*",19],["mlbstream.*",19],["mlsbd.*",19],["mmsbee.*",19],["monaskuliner.ac.id",19],["moredesi.com",19],["motogpstream.*",19],["moutogami.com",19],["movgotv.net",19],["movi.pk",19],["movieplex.*",19],["movierulzlink.*",19],["movies123.*",19],["moviesflix.*",19],["moviesmeta.*",19],["moviesmod.com.pl",19],["moviessources.*",19],["moviesverse.*",19],["movieswbb.com",19],["moviewatch.com.pk",19],["moviezwaphd.*",19],["mp4upload.com",19],["mrskin.live",19],["mrunblock.*",19],["multicanaistv.com",19],["mundowuxia.com",19],["multicanais.*",19],["myeasymusic.ir",19],["myonvideo.com",19],["myyouporn.com",19],["mzansifun.com",19],["naughtypiss.com",19],["nbastream.*",19],["nekopoi.*",[19,73]],["netfapx.com",19],["netfuck.net",19],["new-fs.eu",19],["newmovierulz.*",19],["newtorrentgame.com",19],["neymartv.net",19],["nflstream.*",19],["nflstreams.me",19],["nhlstream.*",19],["nicekkk.com",19],["nicesss.com",19],["nlegs.com",19],["noblocktape.*",[19,95]],["nocensor.*",19],["noni-jav.com",19],["notformembersonly.com",19],["novamovie.net",19],["novelpdf.xyz",19],["novelssites.com",[19,70]],["novelup.top",19],["nsfwr34.com",19],["nu6i-bg-net.com",19],["nudebabesin3d.com",19],["nzbstars.com",19],["o2tvseries.com",19],["ohjav.com",19],["ojearnovelas.com",19],["okanime.xyz",19],["olweb.tv",19],["on9.stream",19],["onepiece-mangaonline.com",19],["onifile.com",19],["onionstream.live",19],["onlinesaprevodom.net",19],["onlyfams.*",19],["onlyfullporn.video",19],["onplustv.live",19],["originporn.com",19],["ouo.*",19],["ovagames.com",19],["pastemytxt.com",19],["payskip.org",19],["pctfenix.*",[19,70]],["pctnew.*",[19,70]],["peeplink.in",19],["peliculas24.*",19],["peliculasmx.net",19],["pelisflix20.*",19],["pelisplus.*",19],["pelisxporno.net",19],["pencarian.link",19],["pendidikandasar.net",19],["pervertgirlsvideos.com",19],["pervyvideos.com",19],["phim12h.com",19],["picdollar.com",19],["picsxxxporn.com",19],["pinayscandalz.com",19],["pinkueiga.net",19],["piratebay.*",19],["piratefast.xyz",19],["piratehaven.xyz",19],["pirateiro.com",19],["playtube.co.za",19],["plugintorrent.com",19],["plyjam.*",19],["plylive.*",19],["plyvdo.*",19],["pmvzone.com",19],["porndish.com",19],["pornez.net",19],["pornfetishbdsm.com",19],["pornfits.com",19],["pornhd720p.com",19],["pornhoarder.*",[19,233]],["pornobr.club",19],["pornobr.ninja",19],["pornodominicano.net",19],["pornofaps.com",19],["pornoflux.com",19],["pornotorrent.com.br",19],["pornredit.com",19],["pornstarsyfamosas.es",19],["pornstreams.co",19],["porntn.com",19],["pornxbit.com",19],["pornxday.com",19],["portaldasnovinhas.shop",19],["portugues-fcr.blogspot.com",19],["poseyoung.com",19],["pover.org",19],["prbay.*",19],["projectfreetv.*",19],["proxybit.*",19],["proxyninja.org",19],["psarips.*",19],["pubfilmz.com",19],["publicsexamateurs.com",19],["punanihub.com",19],["pxxbay.com",19],["qiqitvx84.shop",19],["r18.best",19],["racaty.*",19],["ragnaru.net",19],["rapbeh.net",19],["rapelust.com",19],["rapload.org",19],["read-onepiece.net",19],["readhunters.xyz",19],["remaxhd.*",19],["reshare.pm",19],["retro-fucking.com",19],["retrotv.org",19],["rintor.*",19],["rnbxclusive.*",19],["rnbxclusive0.*",19],["rnbxclusive1.*",19],["robaldowns.com",19],["rockdilla.com",19],["rojadirecta.*",19],["rojadirectaenvivo.*",19],["rojitadirecta.blogspot.com",19],["romancetv.site",19],["rsoccerlink.site",19],["rugbystreams.*",19],["rule34.club",19],["rule34hentai.net",19],["rumahbokep-id.com",19],["sadisflix.*",19],["safego.cc",19],["safetxt.*",19],["sakurafile.com",19],["samax63.lol",19],["satoshi-win.xyz",19],["savefiles.com",[19,68]],["scat.gold",19],["scatfap.com",19],["scatkings.com",19],["serie-turche.com",19],["sexdicted.com",19],["sexgay18.com",19],["sexiezpix.com",19],["sexofilm.co",19],["sextgem.com",19],["sextubebbw.com",19],["sgpics.net",19],["shadowrangers.*",19],["shadowrangers.live",19],["shahee4u.cam",19],["shahi4u.*",19],["shahid4u1.*",19],["shahid4uu.*",19],["shahiid-anime.net",19],["shavetape.*",19],["shemale6.com",19],["shemalegape.net",[19,67]],["shid4u.*",19],["shinden.pl",19],["short.es",19],["shortearn.*",19],["shorten.*",19],["shorttey.*",19],["shortzzy.*",19],["showmanga.blog.fc2.com",19],["shrt10.com",19],["sideplusleaks.net",19],["silverblog.tv",[19,73]],["silverpic.com",19],["sinhalasub.life",19],["sinsitio.site",19],["sinvida.me",19],["skidrowcpy.com",19],["skymovieshd.*",19],["slut.mom",19],["smallencode.me",19],["smoner.com",19],["smplace.com",19],["soccerinhd.com",[19,70]],["socceron.name",19],["socceronline.*",[19,70]],["socialblog.tv",[19,73]],["softairbay.com",19],["softarchive.*",19],["sokobj.com",19],["songsio.com",19],["souexatasmais.com",19],["sportbar.live",19],["sports-stream.*",19],["sportstream1.cfd",19],["sporttuna.*",19],["sporttunatv.*",19],["srt.am",19],["srts.me",19],["sshhaa.*",19],["stapadblockuser.*",[19,95]],["stape.*",[19,95]],["stapewithadblock.*",19],["starblog.tv",[19,73]],["starmusiq.*",19],["stbemuiptv.com",19],["stockingfetishvideo.com",19],["strcloud.*",[19,95]],["stream.crichd.vip",19],["stream.lc",19],["stream25.xyz",19],["streamadblocker.*",[19,70,95]],["streamadblockplus.*",[19,95]],["streambee.to",19],["streambucket.net",19],["streamcdn.*",19],["streamcenter.pro",19],["streamers.watch",19],["streamgo.to",19],["streamhub.*",19],["streamingclic.com",19],["streamkiste.tv",19],["streamoupload.xyz",19],["streamservicehd.click",19],["streamsport.*",19],["streamta.*",[19,95]],["streamtape.*",[19,73,95]],["streamtapeadblockuser.*",[19,95]],["streamvid.net",[19,28]],["strikeout.*",[19,72]],["strtape.*",[19,95]],["strtapeadblock.*",[19,95]],["strtapeadblocker.*",[19,95]],["strtapewithadblock.*",19],["strtpe.*",[19,95]],["subtitleporn.com",19],["subtitles.cam",19],["suicidepics.com",19],["supertelevisionhd.com",19],["supexfeeds.com",19],["swatchseries.*",19],["swiftload.io",19],["swipebreed.net",19],["swzz.xyz",19],["sxnaar.com",19],["tabooflix.*",19],["taboosex.club",19],["tapeantiads.com",[19,95]],["tapeblocker.com",[19,95]],["tapenoads.com",[19,95]],["tapepops.com",[19,73,95]],["tapewithadblock.org",[19,95,277]],["teamos.xyz",19],["telegramgroups.xyz",19],["telenovelasweb.com",19],["tempodeconhecer.blogs.sapo.pt",19],["tennisstreams.*",19],["tensei-shitara-slime-datta-ken.com",19],["tfp.is",19],["tgo-tv.co",[19,70]],["thaihotmodels.com",19],["theblueclit.com",19],["thebussybandit.com",19],["thedaddy.*",[19,213]],["thelastdisaster.vip",19],["themoviesflix.*",19],["thepiratebay.*",19],["thepiratebay0.org",19],["thepiratebay10.info",19],["thesexcloud.com",19],["thothub.today",19],["tightsexteens.com",19],["tlnovelas.net",19],["tmearn.*",19],["tojav.net",19],["tokusatsuindo.com",19],["toonanime.*",19],["top16.net",19],["topdrama.net",19],["topvideosgay.com",19],["torlock.*",19],["tormalayalam.*",19],["torrage.info",19],["torrents.vip",19],["torrentz2eu.*",19],["torrsexvid.com",19],["tpb-proxy.xyz",19],["trannyteca.com",19],["trendytalker.com",19],["tuktukcinma.com",19],["tumanga.net",19],["turbogvideos.com",19],["turboimagehost.com",19],["turbovid.me",19],["turkishseriestv.org",19],["turksub24.net",19],["tutele.sx",19],["tutelehd.*",19],["tvglobe.me",19],["tvpclive.com",19],["tvply.*",19],["tvs-widget.com",19],["tvseries.video",19],["u4m.*",19],["ucptt.com",19],["ufaucet.online",19],["ufcfight.online",19],["ufcstream.*",19],["ultrahorny.com",19],["ultraten.net",19],["unblocknow.*",19],["unblockweb.me",19],["underhentai.net",19],["uniqueten.net",19],["uns.bio",19],["upbaam.com",19],["uploadbuzz.*",19],["upstream.to",19],["upzur.com",19],["usagoals.*",19],["ustream.to",19],["valhallas.click",[19,148]],["valeriabelen.com",19],["verdragonball.online",19],["vexmoviex.*",19],["vfxmed.com",19],["vidclouds.*",19],["video.az",19],["videostreaming.rocks",19],["videowood.tv",19],["vidlox.*",19],["vidorg.net",19],["vidtapes.com",19],["vidz7.com",19],["vikistream.com",19],["vinovo.to",19],["vipboxtv.*",[19,70]],["vipleague.*",[19,236]],["virpe.cc",19],["visifilmai.org",19],["viveseries.com",19],["vladrustov.sx",19],["volokit2.com",[19,213]],["vstorrent.org",19],["w-hentai.com",19],["w4hd.com",19],["watch-series.*",19],["watchbrooklynnine-nine.com",19],["watchelementaryonline.com",19],["watchfamilyguyonline.com",19],["watchjavidol.com",19],["watchkobestreams.info",19],["watchlostonline.net",19],["watchmodernfamilyonline.com",19],["watchmonkonline.com",19],["watchrulesofengagementonline.com",19],["watchseries.*",19],["webcamrips.com",19],["wincest.xyz",19],["wolverdon.fun",19],["wordcounter.icu",19],["worldmovies.store",19],["worldstreams.click",19],["wpdeployit.com",19],["wqstreams.tk",19],["wwwsct.com",19],["xanimeporn.com",19],["xblog.tv",[19,73]],["xclusivejams.*",19],["xmoviesforyou.*",19],["xn--verseriesespaollatino-obc.online",19],["xpornium.net",19],["xsober.com",19],["xvip.lat",19],["xxgasm.com",19],["xxvideoss.org",19],["xxx18.uno",19],["xxxdominicana.com",19],["xxxfree.watch",19],["xxxmax.net",19],["xxxwebdlxxx.top",19],["xxxxvideo.uno",19],["yabai.si",19],["yeshd.net",19],["youdbox.*",19],["youjax.com",19],["yourdailypornvideos.ws",19],["yourupload.com",19],["youswear.com",19],["ytmp3eu.*",19],["yts-subs.*",19],["yts.*",19],["ytstv.me",19],["yumeost.net",19],["zerion.cc",19],["zerocoin.top",19],["zitss.xyz",19],["zooqle.*",19],["zpaste.net",19],["hitomi.la",19],["fastreams.com",19],["sky-sports.store",19],["streamsoccer.site",19],["tntsports.store",19],["wowstreams.co",19],["dutchycorp.*",20],["faucet.ovh",20],["mmacore.tv",21],["nxbrew.net",21],["brawlify.com",21],["oko.sh",22],["variety.com",[23,82]],["gameskinny.com",23],["deadline.com",[23,82]],["mlive.com",[23,82]],["washingtonpost.com",24],["gosexpod.com",25],["sexo5k.com",26],["truyen-hentai.com",26],["theshedend.com",28],["zeroupload.com",28],["securenetsystems.net",28],["miniwebtool.com",28],["bchtechnologies.com",28],["eracast.cc",28],["flatai.org",28],["leeapk.com",28],["spiegel.de",29],["jacquieetmichel.net",30],["hausbau-forum.de",31],["althub.club",31],["kiemlua.com",31],["doujindesu.*",32],["atlasstudiousa.com",32],["51bonusrummy.in",[32,73]],["tackledsoul.com",33],["adrino1.bonloan.xyz",33],["vi-music.app",33],["instanders.app",33],["rokni.xyz",33],["keedabankingnews.com",33],["sampledrive.org",[33,76]],["windroid777.com",33],["tea-coffee.net",34],["spatsify.com",34],["newedutopics.com",34],["getviralreach.in",34],["edukaroo.com",34],["funkeypagali.com",34],["careersides.com",34],["nayisahara.com",34],["wikifilmia.com",34],["infinityskull.com",34],["viewmyknowledge.com",34],["iisfvirtual.in",34],["starxinvestor.com",34],["jkssbalerts.com",34],["imagereviser.com",35],["veganab.co",36],["camdigest.com",36],["learnmany.in",36],["amanguides.com",[36,42]],["highkeyfinance.com",[36,42]],["appkamods.com",36],["techacode.com",36],["djqunjab.in",36],["downfile.site",36],["expertvn.com",36],["trangchu.news",36],["shemaleraw.com",36],["thecustomrom.com",36],["wemove-charity.org",36],["nulleb.com",36],["snlookup.com",36],["bingotingo.com",36],["ghior.com",36],["3dmili.com",36],["karanpc.com",36],["plc247.com",36],["apkdelisi.net",36],["freepasses.org",36],["poplinks.*",[36,46]],["tomarnarede.pt",36],["basketballbuzz.ca",36],["dribbblegraphics.com",36],["kemiox.com",36],["teksnologi.com",36],["bharathwick.com",36],["descargaspcpro.net",36],["rt3dmodels.com",36],["plc4me.com",36],["blisseyhusbands.com",36],["mhdsports.*",36],["mhdsportstv.*",36],["mhdtvworld.*",36],["mhdtvmax.*",36],["mhdstream.*",36],["madaradex.org",36],["trigonevo.com",36],["franceprefecture.fr",36],["jazbaat.in",36],["aipebel.com",36],["audiotools.blog",36],["embdproxy.xyz",36],["fc-lc.*",37],["jobzhub.store",38],["fitdynamos.com",38],["labgame.io",38],["kenzo-flowertag.com",39],["mdn.lol",39],["btcbitco.in",40],["btcsatoshi.net",40],["cempakajaya.com",40],["crypto4yu.com",40],["manofadan.com",40],["readbitcoin.org",40],["wiour.com",40],["tremamnon.com",40],["bitsmagic.fun",40],["ourcoincash.xyz",40],["aylink.co",41],["sugarona.com",42],["nishankhatri.xyz",42],["cety.app",43],["exe-urls.com",43],["exego.app",43],["cutlink.net",43],["cutyurls.com",43],["cutty.app",43],["cutnet.net",43],["jixo.online",43],["tinys.click",44],["loan.creditsgoal.com",44],["rupyaworld.com",44],["vahantoday.com",44],["techawaaz.in",44],["loan.bgmi32bitapk.in",44],["formyanime.com",44],["gsm-solution.com",44],["h-donghua.com",44],["hindisubbedacademy.com",44],["hm4tech.info",44],["mydverse.*",44],["panelprograms.blogspot.com",44],["ripexbooster.xyz",44],["serial4.com",44],["tutorgaming.com",44],["everydaytechvams.com",44],["dipsnp.com",44],["cccam4sat.com",44],["diendancauduong.com",44],["zeemoontv-24.blogspot.com",44],["stitichsports.com",44],["aiimgvlog.fun",45],["appsbull.com",46],["diudemy.com",46],["maqal360.com",46],["androjungle.com",46],["bookszone.in",46],["shortix.co",46],["makefreecallsonline.com",46],["msonglyrics.com",46],["app-sorteos.com",46],["bokugents.com",46],["client.pylexnodes.net",46],["btvplus.bg",46],["listar-mc.net",46],["coingraph.us",47],["impact24.us",47],["iconicblogger.com",48],["auto-crypto.click",48],["tpi.li",49],["oii.la",[49,72]],["shrinkme.*",50],["shrinke.*",50],["mrproblogger.com",50],["themezon.net",50],["smutty.com",50],["e-sushi.fr",50],["gayforfans.com",50],["freeadultcomix.com",50],["down.dataaps.com",50],["filmweb.pl",[50,187]],["livecamrips.*",50],["safetxt.net",50],["filespayouts.com",50],["atglinks.com",51],["kbconlinegame.com",52],["hamrojaagir.com",52],["odijob.com",52],["stfly.biz",53],["airevue.net",53],["atravan.net",53],["simana.online",54],["fooak.com",54],["joktop.com",54],["evernia.site",54],["falpus.com",54],["rfiql.com",55],["gujjukhabar.in",55],["smartfeecalculator.com",55],["djxmaza.in",55],["thecubexguide.com",55],["jytechs.in",55],["financacerta.com",56],["encurtads.net",56],["mastkhabre.com",57],["weshare.is",58],["vplink.in",59],["3dsfree.org",60],["up4load.com",61],["alpin.de",62],["boersennews.de",62],["chefkoch.de",62],["chip.de",62],["clever-tanken.de",62],["desired.de",62],["donnerwetter.de",62],["fanfiktion.de",62],["focus.de",62],["formel1.de",62],["frustfrei-lernen.de",62],["gewinnspiele.tv",62],["giga.de",62],["gut-erklaert.de",62],["kino.de",62],["messen.de",62],["nickles.de",62],["nordbayern.de",62],["spielfilm.de",62],["teltarif.de",[62,63]],["unsere-helden.com",62],["weltfussball.at",62],["watson.de",62],["mactechnews.de",62],["sport1.de",62],["welt.de",62],["sport.de",62],["allthingsvegas.com",64],["100percentfedup.com",64],["beforeitsnews.com",64],["concomber.com",64],["conservativefiringline.com",64],["dailylol.com",64],["funnyand.com",64],["letocard.fr",64],["mamieastuce.com",64],["meilleurpronostic.fr",64],["patriotnationpress.com",64],["toptenz.net",64],["vitamiiin.com",64],["writerscafe.org",64],["populist.press",64],["dailytruthreport.com",64],["livinggospeldaily.com",64],["first-names-meanings.com",64],["welovetrump.com",64],["thehayride.com",64],["thelibertydaily.com",64],["thepoke.co.uk",64],["thepolitistick.com",64],["theblacksphere.net",64],["shark-tank.com",64],["naturalblaze.com",64],["greatamericanrepublic.com",64],["dailysurge.com",64],["truthlion.com",64],["flagandcross.com",64],["westword.com",64],["republicbrief.com",64],["freedomfirstnetwork.com",64],["phoenixnewtimes.com",64],["designbump.com",64],["clashdaily.com",64],["madworldnews.com",64],["reviveusa.com",64],["sonsoflibertymedia.com",64],["thedesigninspiration.com",64],["videogamesblogger.com",64],["protrumpnews.com",64],["thepalmierireport.com",64],["kresy.pl",64],["thepatriotjournal.com",64],["thegatewaypundit.com",64],["wltreport.com",64],["miaminewtimes.com",64],["politicalsignal.com",64],["rightwingnews.com",64],["bigleaguepolitics.com",64],["comicallyincorrect.com",64],["upornia.com",65],["pillowcase.su",66],["akaihentai.com",67],["cine-calidad.*",67],["fastpic.org",[67,73]],["forums.socialmediagirls.com",[67,73]],["javtsunami.com",67],["monoschino2.com",67],["saradahentai.com",67],["sxyprn.*",67],["tabooporn.tv",67],["veryfreeporn.com",67],["x-video.tube",67],["pornoenspanish.es",67],["theporngod.com",67],["tabootube.to",67],["bebasbokep.online",68],["besthdgayporn.com",68],["dimensionalseduction.com",68],["drivenime.com",68],["erothots1.com",68],["javup.org",68],["kaliscan.io",[68,270]],["madouqu.com",68],["shemaleup.net",68],["transflix.net",68],["worthcrete.com",68],["x-x-x.video",[68,268]],["hentaihere.com",69],["player.smashy.stream",69],["player.smashystream.com",69],["123movies.*",70],["123moviesla.*",70],["123movieweb.*",70],["2embed.*",70],["9xmovies.*",70],["adsh.cc",70],["adshort.*",70],["afilmyhouse.blogspot.com",70],["ak.sv",70],["allmovieshub.*",70],["api.webs.moe",70],["apkmody.io",70],["asianplay.*",70],["atishmkv.*",70],["backfirstwo.site",70],["bflix.*",70],["crazyblog.in",70],["cricstream.*",70],["crictime.*",70],["cuervotv.me",70],["divicast.com",70],["dood.*",[70,193]],["dooood.*",[70,193]],["embed.meomeo.pw",70],["extramovies.*",70],["faselhd.*",70],["faselhds.*",70],["filemoon.*",70],["filmeserialeonline.org",70],["filmy.*",70],["filmyhit.*",70],["filmywap.*",70],["flexyhit.com",70],["fmovies.*",70],["foreverwallpapers.com",70],["french-streams.cc",70],["gdplayer.*",70],["goku.*",70],["gomovies.*",70],["gowatchseries.*",70],["hdfungamezz.*",70],["hdtoday.to",70],["hinatasoul.com",70],["hindilinks4u.*",70],["hurawatch.*",70],["igg-games.com",70],["infinityscans.net",70],["jalshamoviezhd.*",70],["livecricket.*",70],["mangareader.to",70],["mhdsport.*",70],["mkvcinemas.*",70],["movies2watch.*",70],["moviespapa.*",70],["mp3juice.info",70],["mp4moviez.*",70],["mydownloadtube.*",70],["myflixerz.to",70],["nowmetv.net",70],["nowsportstv.com",70],["nuroflix.*",70],["nxbrew.com",70],["o2tvseries.*",70],["o2tvseriesz.*",70],["oii.io",70],["paidshitforfree.com",70],["pepperlive.info",70],["pirlotv.*",70],["playertv.net",70],["poscitech.*",70],["primewire.*",70],["redecanais.*",70],["roystream.com",70],["rssing.com",70],["s.to",70],["serienstream.*",70],["sflix.*",70],["shahed4u.*",70],["shaheed4u.*",70],["share.filesh.site",70],["sharkfish.xyz",70],["skidrowcodex.net",70],["smartermuver.com",70],["speedostream.*",70],["sportcast.*",70],["sportskart.*",70],["stream4free.live",70],["streamingcommunity.*",[70,72,115]],["tamilarasan.*",70],["tamilfreemp3songs.*",70],["tamilmobilemovies.in",70],["tamilprinthd.*",70],["tapeadsenjoyer.com",[70,73,95]],["thewatchseries.live",70],["tnmusic.in",70],["torrentdosfilmes.*",70],["travelplanspro.com",70],["tubemate.*",70],["tusfiles.com",70],["tutlehd4.com",70],["twstalker.com",70],["uploadrar.*",70],["uqload.*",70],["vid-guard.com",70],["vidcloud9.*",70],["vido.*",70],["vidoo.*",70],["vidsaver.net",70],["vidspeeds.com",70],["viralitytoday.com",70],["voiranime.stream",70],["vudeo.*",70],["vumoo.*",70],["watchdoctorwhoonline.com",70],["watchomovies.*",[70,112]],["watchserie.online",70],["woxikon.in",70],["www-y2mate.com",70],["yesmovies.*",70],["ylink.bid",70],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",70],["kickassanime.*",71],["11xmovies.*",72],["cinego.tv",72],["dokoembed.pw",72],["ev01.to",72],["fojik.*",72],["fstream365.com",72],["fzmovies.*",72],["linkz.*",72],["minoplres.xyz",72],["mostream.us",72],["moviedokan.*",72],["myflixer.*",72],["prmovies.*",72],["readcomiconline.li",72],["s3embtaku.pro",72],["sflix2.to",72],["sportshub.stream",72],["streamblasters.*",72],["topcinema.cam",72],["webxzplay.cfd",72],["zonatmo.com",72],["animesaturn.cx",72],["filecrypt.*",72],["hunterscomics.com",72],["aniwave.uk",72],["dojing.net",73],["fuckflix.click",73],["javsubindo.com",73],["krx18.com",73],["loadx.ws",73],["mangaforfree.com",73],["pornx.to",73],["savefiles.*",[73,253]],["shavetape.cash",73],["strcloud.club",73],["strcloud.site",73],["streampoi.com",73],["strmup.to",[73,148]],["up4stream.com",[73,112]],["ups2up.fun",[73,112]],["videq.stream",73],["xmegadrive.com",73],["rubystm.com",73],["rubyvid.com",73],["rubyvidhub.com",73],["stmruby.com",73],["streamruby.com",73],["kaa.to",74],["hyhd.org",75],["bi-girl.net",76],["ftuapps.*",76],["hentaiseason.com",76],["hoodtrendspredict.com",76],["marcialhub.xyz",76],["odiadance.com",76],["osteusfilmestuga.online",76],["ragnarokscanlation.opchapters.com",76],["showflix.*",76],["swordalada.org",76],["tvappapk.com",76],["twobluescans.com",[76,77]],["varnascan.xyz",76],["bibliopanda.visblog.online",78],["hallofseries.com",78],["luciferdonghua.in",78],["toursetlist.com",78],["truyentranhfull.net",78],["fcportables.com",78],["repack-games.com",78],["ibooks.to",78],["blog.tangwudi.com",78],["filecatchers.com",78],["babaktv.com",78],["sherdog.com",79],["sidereel.com",79],["silive.com",[79,82]],["simpleflying.com",79],["sloughexpress.co.uk",79],["spacenews.com",79],["sportsgamblingpodcast.com",79],["spotofteadesigns.com",79],["stacysrandomthoughts.com",79],["ssnewstelegram.com",79],["superherohype.com",[79,82]],["tablelifeblog.com",79],["thebeautysection.com",79],["thecelticblog.com",79],["thecurvyfashionista.com",79],["thefashionspot.com",79],["thegamescabin.com",79],["thenerdyme.com",79],["thenonconsumeradvocate.com",79],["theprudentgarden.com",79],["thethings.com",79],["timesnews.net",79],["topspeed.com",79],["toyotaklub.org.pl",79],["travelingformiles.com",79],["tutsnode.org",79],["viralviralvideos.com",79],["wannacomewith.com",79],["wimp.com",[79,82]],["windsorexpress.co.uk",79],["woojr.com",79],["worldoftravelswithkids.com",79],["worldsurfleague.com",79],["cheatsheet.com",80],["pwinsider.com",80],["c-span.org",81],["15min.lt",82],["247sports.com",82],["abc17news.com",82],["agrodigital.com",82],["al.com",82],["aliontherunblog.com",82],["allaboutthetea.com",82],["allmovie.com",82],["allmusic.com",82],["allthingsthrifty.com",82],["amessagewithabottle.com",82],["arstechnica.com",82],["artforum.com",82],["artnews.com",82],["audiomack.com",82],["awkward.com",82],["barcablaugranes.com",82],["barnsleychronicle.com",82],["bethcakes.com",82],["betweenenglandandiowa.com",82],["bgr.com",82],["billboard.com",82],["blazersedge.com",82],["blogher.com",82],["blu-ray.com",82],["bluegraygal.com",82],["briefeguru.de",82],["brobible.com",82],["cagesideseats.com",82],["cbsnews.com",82],["cbssports.com",[82,258]],["celiacandthebeast.com",82],["chaptercheats.com",82],["cleveland.com",82],["clickondetroit.com",82],["commercialcompetentedigitale.ro",82],["crooksandliars.com",82],["dailydot.com",82],["dailykos.com",82],["dailyvoice.com",82],["danslescoulisses.com",82],["decider.com",82],["didyouknowfacts.com",82],["dogtime.com",82],["dpreview.com",82],["ebaumsworld.com",82],["eldiariony.com",82],["fark.com",82],["femestella.com",82],["fmradiofree.com",82],["free-power-point-templates.com",82],["freeconvert.com",82],["frogsandsnailsandpuppydogtail.com",82],["funtasticlife.com",82],["fwmadebycarli.com",82],["golfdigest.com",82],["grunge.com",82],["gulflive.com",82],["hollywoodreporter.com",82],["homeglowdesign.com",82],["honeygirlsworld.com",82],["ibtimes.co.in",82],["imgur.com",82],["indiewire.com",82],["intouchweekly.com",82],["jasminemaria.com",82],["kens5.com",82],["kion546.com",82],["knowyourmeme.com",82],["last.fm",82],["lehighvalleylive.com",82],["lettyskitchen.com",82],["lifeandstylemag.com",82],["lifeinleggings.com",82],["lizzieinlace.com",82],["localnews8.com",82],["lonestarlive.com",82],["madeeveryday.com",82],["maidenhead-advertiser.co.uk",82],["mandatory.com",82],["mardomreport.net",82],["masslive.com",82],["melangery.com",82],["miamiherald.com",82],["mmamania.com",82],["momtastic.com",82],["mostlymorgan.com",82],["motherwellmag.com",82],["musicfeeds.com.au",82],["naszemiasto.pl",82],["nationalpost.com",82],["nationalreview.com",82],["nbcsports.com",82],["news.com.au",82],["ninersnation.com",82],["nj.com",82],["nordot.app",82],["nothingbutnewcastle.com",82],["nsjonline.com",82],["nypost.com",82],["observer.com",82],["ontvtonight.com",82],["oregonlive.com",82],["pagesix.com",82],["patheos.com",82],["pennlive.com",82],["pep.ph",[82,87]],["phillyvoice.com",82],["playstationlifestyle.net",82],["puckermom.com",82],["reelmama.com",82],["rlfans.com",82],["robbreport.com",82],["rollingstone.com",82],["royalmailchat.co.uk",82],["sandrarose.com",82],["sbnation.com",82],["sheknows.com",82],["smartworld.it",82],["sneakernews.com",82],["sourcingjournal.com",82],["soldionline.it",82],["sport-fm.gr",82],["stylecaster.com",82],["syracuse.com",82],["tastingtable.com",82],["techcrunch.com",82],["thedailymeal.com",82],["theflowspace.com",82],["themarysue.com",82],["tiermaker.com",82],["timesofisrael.com",82],["tiscali.cz",82],["tokfm.pl",82],["torontosun.com",82],["tvline.com",82],["usmagazine.com",82],["wallup.net",82],["weather.com",82],["worldstar.com",82],["worldstarhiphop.com",82],["wwd.com",82],["wzzm13.com",82],["yourcountdown.to",82],["automobile-catalog.com",[83,84,85]],["baseballchannel.jp",[83,84]],["forum.mobilism.me",83],["gbatemp.net",83],["gentosha-go.com",83],["hang.hu",83],["hoyme.jp",83],["motorbikecatalog.com",[83,84,85]],["pons.com",83],["wisevoter.com",83],["topstarnews.net",83],["islamicfinder.org",83],["secure-signup.net",83],["dramabeans.com",83],["dropgame.jp",[83,84]],["manta.com",83],["tportal.hr",83],["tvtropes.org",83],["convertcase.net",83],["oricon.co.jp",84],["uranai.nosv.org",84],["yakkun.com",84],["24sata.hr",84],["373news.com",84],["actugaming.net",84],["alc.co.jp",84],["allthetests.com",84],["animanch.com",84],["aniroleplay.com",84],["apkmirror.com",[84,191]],["areaconnect.com",84],["as-web.jp",84],["aucfree.com",84],["autoby.jp",84],["autoc-one.jp",84],["autofrage.net",84],["bab.la",84],["babla.*",84],["bien.hu",84],["boredpanda.com",84],["carscoops.com",84],["cesoirtv.com",84],["chanto.jp.net",84],["cinetrafic.fr",84],["cocokara-next.com",84],["collinsdictionary.com",84],["computerfrage.net",84],["crosswordsolver.com",84],["cruciverba.it",84],["cults3d.com",84],["culturequizz.com",84],["daily.co.jp",84],["dailynewshungary.com",84],["dallashoopsjournal.com",84],["dayspedia.com",84],["dictionary.cambridge.org",84],["dictionnaire.lerobert.com",84],["dnevno.hr",84],["dreamchance.net",84],["drweil.com",84],["dziennik.pl",84],["ecranlarge.com",84],["eigachannel.jp",84],["ev-times.com",84],["finanzfrage.net",84],["footballchannel.jp",84],["forsal.pl",84],["freemcserver.net",84],["futabanet.jp",84],["fxstreet-id.com",84],["fxstreet-vn.com",84],["fxstreet.*",84],["game8.jp",84],["gardeningsoul.com",84],["gazetaprawna.pl",84],["gesundheitsfrage.net",84],["gifu-np.co.jp",84],["gigafile.nu",84],["globalrph.com",84],["golf-live.at",84],["grapee.jp",84],["gutefrage.net",84],["hb-nippon.com",84],["heureka.cz",84],["horairesdouverture24.fr",84],["hotcopper.co.nz",84],["hotcopper.com.au",84],["idokep.hu",84],["indiatimes.com",84],["infor.pl",84],["iza.ne.jp",84],["j-cast.com",84],["j-town.net",84],["j7p.jp",84],["jablickar.cz",84],["javatpoint.com",84],["jiji.com",84],["jikayosha.jp",84],["judgehype.com",84],["kinmaweb.jp",84],["km77.com",84],["kobe-journal.com",84],["kreuzwortraetsel.de",84],["kurashinista.jp",84],["kurashiru.com",84],["kyoteibiyori.com",84],["lacuarta.com",84],["lakeshowlife.com",84],["laleggepertutti.it",84],["langenscheidt.com",84],["laposte.net",84],["lawyersgunsmoneyblog.com",84],["ldoceonline.com",84],["listentotaxman.com",84],["livenewschat.eu",84],["luremaga.jp",84],["mafab.hu",84],["mahjongchest.com",84],["mainichi.jp",84],["maketecheasier.com",[84,85]],["malaymail.com",84],["mamastar.jp",84],["mathplayzone.com",84],["meteo60.fr",84],["midhudsonnews.com",84],["minesweeperquest.com",84],["minkou.jp",84],["modhub.us",84],["moin.de",84],["motorradfrage.net",84],["motscroises.fr",84],["muragon.com",84],["nana-press.com",84],["natalie.mu",84],["nationaltoday.com",84],["nbadraft.net",84],["news.zerkalo.io",84],["newsinlevels.com",84],["newsweekjapan.jp",84],["niketalk.com",84],["nikkan-gendai.com",84],["nlab.itmedia.co.jp",84],["nouvelobs.com",84],["nyitvatartas24.hu",84],["oeffnungszeitenbuch.de",84],["onlineradiobox.com",84],["operawire.com",84],["optionsprofitcalculator.com",84],["oraridiapertura24.it",84],["oxfordlearnersdictionaries.com",84],["palabr.as",84],["pashplus.jp",84],["persoenlich.com",84],["petitfute.com",84],["play-games.com",84],["popdaily.com.tw",84],["powerpyx.com",84],["pptvhd36.com",84],["profitline.hu",84],["puzzlegarage.com",84],["quefaire.be",84],["radio-australia.org",84],["radio-osterreich.at",84],["raetsel-hilfe.de",84],["raider.io",84],["ranking.net",84],["references.be",84],["reisefrage.net",84],["relevantmagazine.com",84],["reptilesmagazine.com",84],["roleplayer.me",84],["rostercon.com",84],["samsungmagazine.eu",84],["sankei.com",84],["sanspo.com",84],["scribens.com",84],["scribens.fr",84],["slashdot.org",84],["soccerdigestweb.com",84],["solitairehut.com",84],["sourceforge.net",[84,88]],["southhemitv.com",84],["sportalkorea.com",84],["sportlerfrage.net",84],["statecollege.com",84],["syosetu.com",84],["szamoldki.hu",84],["talkwithstranger.com",84],["the-crossword-solver.com",84],["thedigestweb.com",84],["traicy.com",84],["transparentcalifornia.com",84],["transparentnevada.com",84],["trilltrill.jp",84],["tunebat.com",84],["tvtv.ca",84],["tvtv.us",84],["tweaktown.com",84],["twn.hu",84],["tyda.se",84],["ufret.jp",84],["uptodown.com",84],["verkaufsoffener-sonntag.com",84],["vimm.net",84],["wamgame.jp",84],["watchdocumentaries.com",84],["wattedoen.be",84],["webdesignledger.com",84],["wetteronline.de",84],["wfmz.com",84],["winfuture.de",84],["word-grabber.com",84],["worldjournal.com",84],["wort-suchen.de",84],["woxikon.*",84],["young-machine.com",84],["yugioh-starlight.com",84],["yutura.net",84],["zagreb.info",84],["zakzak.co.jp",84],["2chblog.jp",84],["2monkeys.jp",84],["46matome.net",84],["akb48glabo.com",84],["akb48matomemory.com",84],["alfalfalfa.com",84],["all-nationz.com",84],["anihatsu.com",84],["aqua2ch.net",84],["blog.esuteru.com",84],["blog.livedoor.jp",84],["blog.jp",84],["blogo.jp",84],["chaos2ch.com",84],["choco0202.work",84],["crx7601.com",84],["danseisama.com",84],["dareda.net",84],["digital-thread.com",84],["doorblog.jp",84],["exawarosu.net",84],["fgochaldeas.com",84],["football-2ch.com",84],["gekiyaku.com",84],["golog.jp",84],["hacchaka.net",84],["heartlife-matome.com",84],["liblo.jp",84],["fesoku.net",84],["fiveslot777.com",84],["gamejksokuhou.com",84],["girlsreport.net",84],["girlsvip-matome.com",84],["grasoku.com",84],["gundamlog.com",84],["honyaku-channel.net",84],["ikarishintou.com",84],["imas-cg.net",84],["imihu.net",84],["inutomo11.com",84],["itainews.com",84],["itaishinja.com",84],["jin115.com",84],["jisaka.com",84],["jnews1.com",84],["jumpsokuhou.com",84],["jyoseisama.com",84],["keyakizaka46matomemory.net",84],["kidan-m.com",84],["kijoden.com",84],["kijolariat.net",84],["kijolifehack.com",84],["kijomatomelog.com",84],["kijyokatu.com",84],["kijyomatome.com",84],["kijyomatome-ch.com",84],["kijyomita.com",84],["kirarafan.com",84],["kitimama-matome.net",84],["kitizawa.com",84],["konoyubitomare.jp",84],["kotaro269.com",84],["kyousoku.net",84],["ldblog.jp",84],["livedoor.biz",84],["livedoor.blog",84],["majikichi.com",84],["matacoco.com",84],["matomeblade.com",84],["matomelotte.com",84],["matometemitatta.com",84],["mojomojo-licarca.com",84],["morikinoko.com",84],["nandemo-uketori.com",84],["netatama.net",84],["news-buzz1.com",84],["news30over.com",84],["nishinippon.co.jp",84],["nmb48-mtm.com",84],["norisoku.com",84],["npb-news.com",84],["ocsoku.com",84],["okusama-kijyo.com",84],["onecall2ch.com",84],["onihimechan.com",84],["orusoku.com",84],["otakomu.jp",84],["otoko-honne.com",84],["oumaga-times.com",84],["outdoormatome.com",84],["pachinkopachisro.com",84],["paranormal-ch.com",84],["recosoku.com",84],["s2-log.com",84],["saikyo-jump.com",84],["shuraba-matome.com",84],["ske48matome.net",84],["squallchannel.com",84],["sukattojapan.com",84],["sumaburayasan.com",84],["sutekinakijo.com",84],["usi32.com",84],["uwakich.com",84],["uwakitaiken.com",84],["vault76.info",84],["vipnews.jp",84],["vippers.jp",84],["vipsister23.com",84],["vtubernews.jp",84],["watarukiti.com",84],["world-fusigi.net",84],["zakuzaku911.com",84],["zch-vip.com",84],["interfootball.co.kr",85],["a-ha.io",85],["cboard.net",85],["jjang0u.com",85],["joongdo.co.kr",85],["viva100.com",85],["gamingdeputy.com",85],["alle-tests.nl",85],["tweaksforgeeks.com",85],["m.inven.co.kr",85],["mlbpark.donga.com",85],["meconomynews.com",85],["brandbrief.co.kr",85],["motorgraph.com",85],["bleepingcomputer.com",86],["pravda.com.ua",86],["ap7am.com",87],["cinema.com.my",87],["dolldivine.com",87],["giornalone.it",87],["iplocation.net",87],["jamaicajawapos.com",87],["jutarnji.hr",87],["kompasiana.com",87],["mediaindonesia.com",87],["niice-woker.com",87],["slobodnadalmacija.hr",87],["upmedia.mg",87],["mentalfloss.com",89],["bigwarp.cc",90],["3minx.com",91],["555fap.com",91],["ai18.pics",91],["anime-jav.com",91],["blackwidof.org",91],["chinese-pics.com",91],["cn-av.com",91],["cnpics.org",91],["cnxx.me",91],["cosplay-xxx.com",91],["cosplay18.pics",91],["fc2ppv.stream",91],["fikfok.net",91],["gofile.download",91],["hentai-sub.com",91],["hentai4f.com",91],["hentaicovid.com",91],["hentaipig.com",91],["hentaixnx.com",91],["idol69.net",91],["javball.com",91],["javbee.*",91],["javring.com",91],["javsunday.com",91],["javtele.net",91],["kin8-av.com",91],["kin8-jav.com",91],["kr-av.com",91],["ovabee.com",91],["pig69.com",91],["porn-pig.com",91],["porn4f.org",91],["sweetie-fox.com",91],["xcamcovid.com",91],["xxpics.org",91],["hentaivost.fr",92],["jelonka.com",93],["isgfrm.com",94],["advertisertape.com",95],["tapeadvertisement.com",95],["tapelovesads.org",95],["watchadsontape.com",95],["vosfemmes.com",96],["voyeurfrance.net",96],["hyundaitucson.info",97],["exambd.net",98],["cgtips.org",99],["freewebcart.com",100],["freemagazines.top",100],["siamblockchain.com",100],["emuenzen.de",101],["kickass.*",102],["unblocked.id",104],["listendata.com",105],["7xm.xyz",105],["fastupload.io",105],["azmath.info",105],["wouterplanet.com",106],["xenvn.com",107],["pfps.gg",108],["4kporn.xxx",109],["androidacy.com",110],["4porn4.com",111],["bestpornflix.com",112],["freeroms.com",112],["andhrafriends.com",112],["723qrh1p.fun",112],["98zero.com",113],["mediaset.es",113],["updatewallah.in",113],["hwbusters.com",113],["beatsnoop.com",114],["fetchpik.com",114],["hackerranksolution.in",114],["camsrip.com",114],["file.org",114],["btcbunch.com",116],["teachoo.com",[117,118]],["mafiatown.pl",119],["bitcotasks.com",120],["hilites.today",121],["udvl.com",122],["www.chip.de",[123,124,125,126]],["topsporter.net",127],["sportshub.to",127],["myanimelist.net",128],["unofficialtwrp.com",129],["codec.kyiv.ua",129],["kimcilonlyofc.com",129],["bitcosite.com",130],["bitzite.com",130],["teluguflix.*",131],["hacoos.com",132],["watchhentai.net",133],["hes-goals.io",133],["pkbiosfix.com",133],["casi3.xyz",133],["zefoy.com",134],["mailgen.biz",135],["tempinbox.xyz",135],["vidello.net",136],["newscon.org",137],["yunjiema.top",137],["pcgeeks-games.com",137],["resizer.myct.jp",138],["gametohkenranbu.sakuraweb.com",139],["jisakuhibi.jp",140],["rank1-media.com",140],["lifematome.blog",141],["fm.sekkaku.net",142],["dvdrev.com",143],["betweenjpandkr.blog",144],["nft-media.net",145],["ghacks.net",146],["leak.sx",147],["paste.bin.sx",147],["pornleaks.in",147],["luluvid.com",148],["aliezstream.pro",148],["daddy-stream.xyz",148],["daddylive1.*",148],["esportivos.*",148],["instream.pro",148],["mylivestream.pro",148],["poscitechs.*",148],["powerover.online",148],["sportea.link",148],["sportsurge.stream",148],["ufckhabib.com",148],["ustream.pro",148],["animeshqip.site",148],["apkship.shop",148],["buzter.pro",148],["enjoysports.bond",148],["filedot.to",148],["foreverquote.xyz",148],["hdstream.one",148],["kingstreamz.site",148],["live.fastsports.store",148],["livesnow.me",148],["livesports4u.pw",148],["masterpro.click",148],["nuxhallas.click",148],["papahd.info",148],["rgshows.me",148],["sportmargin.live",148],["sportmargin.online",148],["sportsloverz.xyz",148],["supertipzz.online",148],["totalfhdsport.xyz",148],["ultrastreamlinks.xyz",148],["usgate.xyz",148],["webmaal.cfd",148],["wizistreamz.xyz",148],["educ4m.com",148],["fromwatch.com",148],["visualnewshub.com",148],["khoaiphim.com",150],["haafedk2.com",151],["jovemnerd.com.br",152],["totalcsgo.com",153],["manysex.com",154],["gaminginfos.com",155],["tinxahoivn.com",156],["m.4khd.com",157],["westmanga.*",157],["automoto.it",158],["fordownloader.com",159],["codelivly.com",160],["tchatche.com",161],["cryptoearns.com",161],["lordchannel.com",162],["novelhall.com",163],["bagi.co.in",164],["keran.co",164],["biblestudytools.com",165],["christianheadlines.com",165],["ibelieve.com",165],["kuponigo.com",166],["inxxx.com",167],["bemyhole.com",167],["embedwish.com",168],["leakslove.net",168],["jenismac.com",169],["vxetable.cn",170],["nizarstream.com",171],["donghuaworld.com",172],["letsdopuzzles.com",173],["rediff.com",174],["igay69.com",175],["dzapk.com",176],["darknessporn.com",177],["familyporner.com",177],["freepublicporn.com",177],["pisshamster.com",177],["punishworld.com",177],["xanimu.com",177],["tainio-mania.online",178],["eroticmoviesonline.me",179],["series9movies.com",179],["teleclub.xyz",180],["ecamrips.com",181],["showcamrips.com",181],["tucinehd.com",182],["9animetv.to",183],["qiwi.gg",184],["jornadaperfecta.com",185],["sousou-no-frieren.com",186],["unite-guide.com",188],["thebullspen.com",189],["receitasdaora.online",190],["hiraethtranslation.com",192],["all3do.com",193],["d-s.io",193],["d0000d.com",193],["d000d.com",193],["d0o0d.com",193],["do0od.com",193],["do7go.com",193],["doods.*",193],["doodstream.*",193],["dooodster.com",193],["doply.net",193],["ds2play.com",193],["ds2video.com",193],["vidply.com",193],["vide0.net",193],["vvide0.com",193],["xfreehd.com",194],["freethesaurus.com",195],["thefreedictionary.com",195],["dexterclearance.com",196],["x86.co.kr",197],["onlyfaucet.com",198],["x-x-x.tube",199],["fdownloader.net",200],["thehackernews.com",201],["mielec.pl",202],["treasl.com",203],["mrbenne.com",204],["sportsonline.si",205],["fiuxy2.co",206],["animeunity.to",207],["tokopedia.com",208],["remixsearch.net",209],["remixsearch.es",209],["onlineweb.tools",209],["sharing.wtf",209],["2024tv.ru",210],["modrinth.com",211],["curseforge.com",211],["xnxxcom.xyz",212],["sportsurge.net",213],["joyousplay.xyz",213],["quest4play.xyz",[213,215]],["generalpill.net",213],["moneycontrol.com",214],["cookiewebplay.xyz",215],["ilovetoplay.xyz",215],["streamcaster.live",215],["weblivehdplay.ru",215],["nontongo.win",216],["m9.news",217],["callofwar.com",218],["secondhandsongs.com",219],["nohost.one",220],["vidbinge.com",220],["send.cm",221],["send.now",221],["3rooodnews.net",222],["xxxbfvideo.net",223],["filmy4wap.co.in",224],["filmy4waps.org",224],["gameshop4u.com",225],["regenzi.site",225],["historicaerials.com",226],["handirect.fr",227],["fsiblog3.club",228],["kamababa.desi",228],["sat-sharing.com",228],["getfiles.co.uk",229],["genelify.com",230],["dhtpre.com",231],["xbaaz.com",232],["lineupexperts.com",234],["fearmp4.ru",235],["buffsports.*",236],["fbstreams.*",236],["wavewalt.me",[236,251]],["m.shuhaige.net",237],["streamingnow.mov",238],["thesciencetoday.com",239],["sportnews.to",239],["ghbrisk.com",241],["iplayerhls.com",241],["bacasitus.com",242],["katoikos.world",242],["abstream.to",243],["pawastreams.pro",244],["rebajagratis.com",245],["tv.latinlucha.es",245],["fetcheveryone.com",246],["reviewdiv.com",247],["laurelberninteriors.com",248],["godlike.com",249],["godlikeproductions.com",249],["bestsportslive.org",250],["alexsports.*>>",251],["btvsports.my>>",251],["cr7-soccer.store>>",251],["e2link.link>>",251],["fsportshd.xyz>>",251],["kakarotfoot.ru>>",251],["pelotalibrevivo.net>>",251],["powerover.site>>",251],["sportstohfa.online>>",251],["streamshunters.eu>>",251],["totalsportek1000.com>>",251],["worldsports.*>>",251],["7fractals.icu",251],["allevertakstream.space",251],["brainknock.net",251],["btvsports.my",251],["capo6play.com",251],["capoplay.net",251],["cdn256.xyz",251],["courseleader.net",251],["cr7-soccer.store",251],["dropbang.net",251],["e2link.link",251],["hornpot.net",251],["fsportshd.xyz",251],["ihdstreams.*",251],["kakarotfoot.ru",251],["meltol.net",251],["powerover.site",251],["snapinstadownload.xyz",251],["sportstohfa.online",251],["stellarthread.com",251],["streamshunters.eu",251],["totalsportek1000.com",251],["voodc.com",251],["worldsports.*",251],["ziggogratis.site",251],["bestreamsports.org",252],["streamhls.to",254],["xmalay1.net",255],["letemsvetemapplem.eu",256],["pc-builds.com",257],["watch-dbz57.funonline.co.in",259],["live4all.net",260],["pokemon-project.com",261],["moviesonlinefree.*",262],["fileszero.com",263],["viralharami.com",263],["wstream.cloud",263],["bmamag.com",264],["bmacanberra.wpcomstaging.com",264],["cinemastervip.com",265],["mmsbee42.com",266],["mmsmasala.com",266],["andrenalynrushplay.cfd",267],["fnjplay.xyz",267],["porn4fans.com",269],["cefirates.com",271],["comicleaks.com",271],["tapmyback.com",271],["ping.gg",271],["nookgaming.com",271],["creatordrop.com",271],["bitdomain.biz",271],["fort-shop.kiev.ua",271],["accuretawealth.com",271],["resourceya.com",271],["tracktheta.com",271],["adaptive.marketing",271],["camberlion.com",271],["trybawaryjny.pl",271],["segops.madisonspecs.com",271],["stresshelden-coaching.de",271],["controlconceptsusa.com",271],["ryaktive.com",271],["tip.etip-staging.etip.io",271],["future-fortune.com",272],["furucombo.app",272],["bolighub.dk",272],["intercity.technology",273],["freelancer.taxmachine.be",273],["adria.gg",273],["fjlaboratories.com",273],["abhijith.page",273],["helpmonks.com",273],["dataunlocker.com",274],["proboards.com",275],["winclassic.net",275],["farmersjournal.ie",276]]);
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
