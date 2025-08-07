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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/\\.textContent|createObjectURL/"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","showRandomAd"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","\"data-sdk\""],["script","_ADX_"],["script","div.offsetHeight"],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","popundersPerIP"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/AdBlock/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/detect|WebAssembly/"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","debugger"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["cdn.bg-gledai.*",2],["cdn.gledaitv.*",2],["faqwiki.*",3],["snapwordz.com",3],["toolxox.com",3],["rl6mans.com",3],["nontonx.com",4],["embed.wcostream.com",5],["pandadoc.com",6],["web.de",7],["skidrowreloaded.com",[8,19]],["1337x.*",[8,19]],["1stream.eu",8],["4kwebplay.xyz",8],["alldownplay.xyz",8],["anime4i.vip",8],["antennasports.ru",8],["boxingstream.me",8],["buffstreams.app",8],["claplivehdplay.ru",[8,217]],["cracksports.me",[8,18]],["cricstream.me",8],["cricstreams.re",[8,18]],["dartsstreams.com",8],["eurekaddl.baby",8],["euro2024direct.ru",8],["ext.to",8],["extrem-down.*",8],["extreme-down.*",8],["eztv.*",8],["eztvx.to",8],["f1box.me",8],["filecrypt.cc",8],["flix-wave.*",8],["flixrave.me",8],["golfstreams.me",8],["hikaritv.xyz",8],["ianimes.one",8],["jointexploit.net",[8,19]],["kenitv.me",[8,18]],["lewblivehdplay.ru",[8,217]],["mediacast.click",8],["mixdrop.*",[8,19]],["mlbbite.net",8],["mlbstreams.ai",8],["motogpstream.me",8],["nbabox.me",8],["nflbox.me",8],["nhlbox.me",8],["playcast.click",8],["qatarstreams.me",[8,18]],["qqwebplay.xyz",[8,217]],["rnbastreams.com",8],["rugbystreams.me",8],["sanet.*",8],["socceronline.me",8],["soccerworldcup.me",[8,18]],["sportshd.*",8],["sportzonline.si",8],["streamed.su",8],["sushiscan.net",8],["topstreams.info",8],["totalsportek.to",8],["tvableon.me",[8,18]],["vecloud.eu",8],["vibestreams.*",8],["vipstand.pm",8],["webcamrips.to",8],["worldsports.me",8],["x1337x.*",8],["wawacity.*",8],["720pstream.*",[8,73]],["embedsports.me",[8,103]],["embedstream.me",[8,18,19,73,103]],["jumbtv.com",[8,103]],["reliabletv.me",[8,103]],["topembed.pw",[8,75,217]],["crackstreamer.net",8],["methstreamer.com",8],["vidsrc.*",[8,18,73]],["vidco.pro",[8,73]],["freestreams-live.*>>",8],["moviepilot.de",[9,65]],["userupload.*",10],["cinedesi.in",10],["intro-hd.net",10],["monacomatin.mc",10],["nodo313.net",10],["mhdtvsports.*",[10,36]],["hesgoal-tv.io",10],["hesgoal-vip.io",10],["earn.punjabworks.com",10],["mahajobwala.in",10],["solewe.com",10],["panel.play.hosting",10],["total-sportek.to",10],["hesgoal-vip.to",10],["shoot-yalla.me",10],["shoot-yalla-tv.live",10],["pahe.*",[11,19,75]],["soap2day.*",11],["yts.mx",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["viprow.*",[18,19,73]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,73]],["cloudvideotv.*",[18,73]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,19]],["megaup.net",18],["olympicstreams.co",[18,73]],["tv247.us",[18,19]],["uploadhaven.com",18],["userscloud.com",[18,73]],["streamnoads.com",[18,19,73,95]],["mlbbox.me",18],["vikingf1le.us.to",18],["neodrive.xyz",18],["mdfx9dc8n.net",19],["mdzsmutpcvykb.net",19],["mixdrop21.net",19],["mixdropjmk.pw",19],["123-movies.*",19],["123movieshd.*",19],["123movieshub.*",19],["123moviesme.*",19],["1337x.ninjaproxy1.com",19],["141jav.com",19],["141tube.com",19],["1bit.space",19],["1bitspace.com",19],["1stream.*",19],["1tamilmv.*",19],["2ddl.*",19],["2umovies.*",19],["3dporndude.com",19],["3hiidude.*",19],["4archive.org",19],["4horlover.com",19],["4stream.*",19],["560pmovie.com",19],["5movies.*",19],["7hitmovies.*",19],["85videos.com",19],["9xmovie.*",19],["aagmaal.*",[19,73]],["acefile.co",19],["actusports.eu",19],["adblockeronstape.*",[19,95]],["adblockeronstreamtape.*",19],["adblockplustape.*",[19,95]],["adblockstreamtape.*",[19,95]],["adblockstrtape.*",[19,95]],["adblockstrtech.*",[19,95]],["adblocktape.*",[19,95]],["adclickersbot.com",19],["adcorto.*",19],["adricami.com",19],["adslink.pw",19],["adultstvlive.com",19],["adz7short.space",19],["aeblender.com",19],["affordwonder.net",19],["ahdafnews.blogspot.com",19],["aiblog.tv",[19,76]],["ak47sports.com",19],["akuma.moe",19],["alexsports.*",19],["alexsportss.*",19],["alexsportz.*",19],["allplayer.tk",19],["amateurblog.tv",[19,76]],["androidadult.com",[19,243]],["anhsexjav.xyz",19],["anidl.org",19],["anime-loads.org",19],["animeblkom.net",19],["animefire.plus",19],["animelek.me",19],["animepahe.*",19],["animesanka.*",19],["animesorionvip.net",19],["animespire.net",19],["animestotais.xyz",19],["animeyt.es",19],["animixplay.*",19],["aniplay.*",19],["anroll.net",19],["antiadtape.*",[19,95]],["anymoviess.xyz",19],["aotonline.org",19],["asenshu.com",19],["asialiveaction.com",19],["asianclipdedhd.net",19],["asianclub.*",19],["ask4movie.*",19],["askim-bg.com",19],["asumsikedaishop.com",19],["atomixhq.*",[19,73]],["atomohd.*",19],["avcrempie.com",19],["avseesee.com",19],["gettapeads.com",[19,95]],["bajarjuegospcgratis.com",19],["balkanteka.net",19],["beinmatch.*",[19,27]],["belowporn.com",19],["bestgirlsexy.com",19],["bestnhl.com",19],["bestporncomix.com",19],["bhaai.*",19],["bigwarp.*",19],["bikinbayi.com",19],["bikinitryon.net",19],["birdurls.com",19],["bitsearch.to",19],["blackcockadventure.com",19],["blackcockchurch.org",19],["blackporncrazy.com",19],["blizzboygames.net",19],["blizzpaste.com",19],["blkom.com",19],["blog-peliculas.com",19],["blogtrabalhista.com",19],["blurayufr.*",19],["bobsvagene.club",19],["bokep.im",19],["bokep.top",19],["bokepnya.com",19],["boyfuck.me",19],["brilian-news.id",19],["brupload.net",19],["buffstreams.*",19],["buzter.xyz",19],["caitlin.top",19],["camchickscaps.com",19],["camgirls.casa",19],["canalesportivo.*",19],["cashurl.in",19],["ccurl.net",[19,73]],["cdn1.site",[19,55]],["charexempire.com",19],["clickndownload.*",19],["clicknupload.*",[19,75]],["clik.pw",19],["coin-free.com",[19,40]],["coins100s.fun",19],["comohoy.com",19],["coolcast2.com",19],["cordneutral.net",19],["coreradio.online",19],["cosplaytab.com",19],["countylocalnews.com",19],["cpmlink.net",19],["crackstreamshd.click",19],["crespomods.com",19],["crisanimex.com",19],["crunchyscan.fr",19],["cuevana3.fan",19],["cuevana3hd.com",19],["cumception.com",19],["cutpaid.com",19],["daddylive.*",[19,73,215]],["daddylivehd.*",[19,73]],["dailyuploads.net",19],["datawav.club",19],["daughtertraining.com",19],["ddrmovies.*",19],["deepgoretube.site",19],["deltabit.co",19],["deporte-libre.top",19],["depvailon.com",19],["derleta.com",19],["desiremovies.*",19],["desivdo.com",19],["desixx.net",19],["detikkebumen.com",19],["deutschepornos.me",19],["devlib.*",19],["diasoft.xyz",19],["dipelis.junctionjive.co.uk",19],["directupload.net",19],["divxtotal.*",19],["divxtotal1.*",19],["dixva.com",19],["dlhd.*",[19,215]],["doctormalay.com",19],["dofusports.xyz",19],["doods.cam",19],["doodskin.lat",19],["downloadrips.com",19],["downvod.com",19],["dphunters.mom",19],["dragontranslation.com",19],["dvdfullestrenos.com",19],["dvdplay.*",[19,73]],["dx-tv.com",[19,36]],["ebookbb.com",19],["ebookhunter.net",19],["egyanime.com",19],["egygost.com",19],["ekasiwap.com",19],["electro-torrent.pl",19],["elixx.*",19],["elrefugiodelpirata.com",19],["enjoy4k.*",19],["eplayer.click",19],["erovoice.us",19],["eroxxx.us",19],["estrenosdoramas.net",19],["estrenosflix.*",19],["estrenosflux.*",19],["estrenosgo.*",19],["everia.club",19],["everythinginherenet.blogspot.com",19],["extratorrent.st",19],["extremotvplay.com",19],["f1stream.*",19],["fapinporn.com",19],["fapptime.com",19],["fastreams.live",19],["faucethero.com",19],["favoyeurtube.net",19],["fbstream.*",19],["fc2db.com",19],["femdom-joi.com",19],["fenixsite.net",19],["file4go.*",19],["filegram.to",[19,71,76]],["fileone.tv",19],["film1k.com",19],["filmeonline2023.net",19],["filmesonlinex.org",19],["filmesonlinexhd.biz",[19,73]],["filmisub.cc",19],["filmovitica.com",19],["filmymaza.blogspot.com",19],["filmyzilla.*",[19,73]],["filthy.family",19],["findav.*",19],["findporn.*",19],["flickzap.com",19],["flixmaza.*",19],["flizmovies.*",19],["flostreams.xyz",19],["flyfaucet.com",19],["footyhunter.lol",19],["forex-trnd.com",19],["forumchat.club",19],["forumlovers.club",19],["freeomovie.co.in",19],["freeomovie.to",19],["freeporncomic.net",19],["freepornhdonlinegay.com",19],["freeproxy.io",19],["freeshot.live",19],["freetvsports.*",19],["freeuse.me",19],["freeusexporn.com",19],["fsharetv.cc",19],["fsicomics.com",19],["fullymaza.*",19],["g-porno.com",19],["g3g.*",19],["galinhasamurai.com",19],["gamepcfull.com",19],["gamesmountain.com",19],["gamesrepacks.com",19],["gamingguru.fr",19],["gamovideo.com",19],["garota.cf",19],["gaydelicious.com",19],["gaypornhdfree.com",19],["gaypornhot.com",19],["gaypornmasters.com",19],["gaysex69.net",19],["gemstreams.com",19],["get-to.link",19],["girlscanner.org",19],["giurgiuveanul.ro",19],["gledajcrtace.xyz",19],["gocast2.com",19],["gomo.to",19],["gostosa.cf",19],["gotxx.*",19],["grantorrent.*",19],["gratispaste.com",19],["gravureblog.tv",[19,76]],["gupload.xyz",19],["haho.moe",19],["hayhd.net",19],["hdmoviesfair.*",[19,73]],["hdmoviesflix.*",19],["hdpornflix.com",19],["hdsaprevodom.com",19],["hdstreamss.club",19],["hentaiporno.xxx",19],["hentais.tube",19],["hentaistream.co",19],["hentaitk.net",19],["hentaitube.online",19],["hentaiworld.tv",19],["hesgoal.tv",19],["hexupload.net",19],["hhkungfu.tv",19],["highlanderhelp.com",19],["hiidudemoviez.*",19],["hindimovies.to",[19,73]],["hindimoviestv.com",19],["hiperdex.com",19],["hispasexy.org",19],["hitprn.com",19],["hivflix.me",19],["hoca4u.com",19],["hollymoviehd.cc",19],["hoodsite.com",19],["hopepaste.download",19],["hornylips.com",19],["hotgranny.live",19],["hotmama.live",19],["hqcelebcorner.net",19],["huren.best",19],["hwnaturkya.com",[19,73]],["hxfile.co",[19,73]],["igfap.com",19],["iklandb.com",19],["illink.net",19],["imgsen.*",19],["imgsex.xyz",19],["imgsto.*",19],["imgtraffic.com",19],["imx.to",19],["incest.*",19],["incestflix.*",19],["influencersgonewild.org",19],["infosgj.free.fr",19],["investnewsbrazil.com",19],["itdmusics.com",19],["itopmusic.*",19],["itsuseful.site",19],["itunesfre.com",19],["iwatchfriendsonline.net",[19,149]],["japangaysex.com",19],["jav-fun.cc",19],["jav-noni.cc",19],["javboys.tv",19],["javcl.com",19],["jav-coco.com",19],["javhay.net",19],["javhoho.com",19],["javhun.com",19],["javleak.com",19],["javmost.*",19],["javporn.best",19],["javsek.net",19],["javsex.to",19],["javtiful.com",[19,21]],["jimdofree.com",19],["jiofiles.org",19],["jorpetz.com",19],["jp-films.com",19],["jpop80ss3.blogspot.com",19],["jpopsingles.eu",[19,193]],["justfullporn.net",19],["kantotflix.net",19],["kaplog.com",19],["keeplinks.*",19],["keepvid.*",19],["keralahd.*",19],["keralatvbox.com",19],["khatrimazaful.*",19],["khatrimazafull.*",[19,76]],["kickassanimes.io",19],["kimochi.info",19],["kimochi.tv",19],["kinemania.tv",19],["kissasian.*",19],["kolnovel.site",19],["koltry.life",19],["konstantinova.net",19],["koora-online.live",19],["kunmanga.com",19],["kwithsub.com",19],["lat69.me",19],["latinblog.tv",[19,76]],["latinomegahd.net",19],["leechall.*",19],["leechpremium.link",19],["legendas.dev",19],["legendei.net",19],["lighterlegend.com",19],["linclik.com",19],["linkebr.com",19],["linkrex.net",19],["linkshorts.*",19],["lulu.st",19],["lulustream.com",[19,75]],["lulustream.live",19],["luluvdo.com",19],["luluvdoo.com",19],["mangaweb.xyz",19],["mangovideo.*",19],["masahub.com",19],["masahub.net",19],["masaporn.*",19],["maturegrannyfuck.com",19],["mdy48tn97.com",19],["mediapemersatubangsa.com",19],["mega-mkv.com",19],["megapastes.com",19],["megapornpics.com",19],["messitv.net",19],["meusanimes.net",19],["mexa.sh",19],["milfmoza.com",19],["milfnut.*",19],["milfzr.com",19],["millionscast.com",19],["mimaletamusical.blogspot.com",19],["miniurl.*",19],["mirrorace.*",19],["mitly.us",19],["mixdroop.*",19],["mixixxx000000.cyou",19],["mixixxx696969.cyou",19],["mkv-pastes.com",19],["mkvcage.*",19],["mlbstream.*",19],["mlsbd.*",19],["mmsbee.*",19],["monaskuliner.ac.id",19],["moredesi.com",19],["motogpstream.*",19],["moutogami.com",19],["movgotv.net",19],["movi.pk",19],["movieplex.*",19],["movierulzlink.*",19],["movies123.*",19],["moviesflix.*",19],["moviesmeta.*",19],["moviesmod.com.pl",19],["moviessources.*",19],["moviesverse.*",19],["movieswbb.com",19],["moviewatch.com.pk",19],["moviezwaphd.*",19],["mp4upload.com",19],["mrskin.live",19],["mrunblock.*",19],["multicanaistv.com",19],["mundowuxia.com",19],["multicanais.*",19],["myeasymusic.ir",19],["myonvideo.com",19],["myyouporn.com",19],["mzansifun.com",19],["narutoget.info",19],["naughtypiss.com",19],["nbastream.*",19],["nekopoi.*",[19,76]],["nerdiess.com",19],["netfuck.net",19],["new-fs.eu",19],["newmovierulz.*",19],["newtorrentgame.com",19],["neymartv.net",19],["nflstream.*",19],["nflstreams.me",19],["nhlstream.*",19],["nicekkk.com",19],["nicesss.com",19],["nlegs.com",19],["noblocktape.*",[19,95]],["nocensor.*",19],["noni-jav.com",19],["notformembersonly.com",19],["novamovie.net",19],["novelpdf.xyz",19],["novelssites.com",[19,73]],["novelup.top",19],["nsfwr34.com",19],["nu6i-bg-net.com",19],["nudebabesin3d.com",19],["nzbstars.com",19],["o2tvseries.com",19],["ohjav.com",19],["ojearnovelas.com",19],["okanime.xyz",19],["olweb.tv",19],["on9.stream",19],["onepiece-mangaonline.com",19],["onifile.com",19],["onionstream.live",19],["onlinesaprevodom.net",19],["onlyfams.*",19],["onlyfullporn.video",19],["onplustv.live",19],["originporn.com",19],["ouo.*",19],["ovagames.com",19],["palimas.org",19],["password69.com",19],["pastemytxt.com",19],["payskip.org",19],["pctfenix.*",[19,73]],["pctnew.*",[19,73]],["peeplink.in",19],["peliculas24.*",19],["peliculasmx.net",19],["pelisflix20.*",19],["pelisplus.*",19],["pencarian.link",19],["pendidikandasar.net",19],["pervertgirlsvideos.com",19],["pervyvideos.com",19],["phim12h.com",19],["picdollar.com",19],["picsxxxporn.com",19],["pinayscandalz.com",19],["pinkueiga.net",19],["piratebay.*",19],["piratefast.xyz",19],["piratehaven.xyz",19],["pirateiro.com",19],["playtube.co.za",19],["plugintorrent.com",19],["plyjam.*",19],["plylive.*",19],["plyvdo.*",19],["pmvzone.com",19],["porndish.com",19],["pornez.net",19],["pornfetishbdsm.com",19],["pornfits.com",19],["pornhd720p.com",19],["pornhoarder.*",[19,236]],["pornobr.club",19],["pornobr.ninja",19],["pornodominicano.net",19],["pornofaps.com",19],["pornoflux.com",19],["pornotorrent.com.br",19],["pornredit.com",19],["pornstarsyfamosas.es",19],["pornstreams.co",19],["porntn.com",19],["pornxbit.com",19],["pornxday.com",19],["portaldasnovinhas.shop",19],["portugues-fcr.blogspot.com",19],["poseyoung.com",19],["pover.org",19],["prbay.*",19],["projectfreetv.*",19],["proxybit.*",19],["proxyninja.org",19],["psarips.*",19],["pubfilmz.com",19],["publicsexamateurs.com",19],["punanihub.com",19],["pxxbay.com",19],["r18.best",19],["racaty.*",19],["ragnaru.net",19],["rapbeh.net",19],["rapelust.com",19],["rapload.org",19],["read-onepiece.net",19],["readhunters.xyz",19],["remaxhd.*",19],["reshare.pm",19],["retro-fucking.com",19],["retrotv.org",19],["rintor.*",19],["rnbxclusive.*",19],["rnbxclusive0.*",19],["rnbxclusive1.*",19],["robaldowns.com",19],["rockdilla.com",19],["rojadirecta.*",19],["rojadirectaenvivo.*",19],["rojitadirecta.blogspot.com",19],["romancetv.site",19],["rsoccerlink.site",19],["rugbystreams.*",19],["rule34.club",19],["rule34hentai.net",19],["rumahbokep-id.com",19],["sadisflix.*",19],["safego.cc",19],["safetxt.*",19],["sakurafile.com",19],["samax63.lol",19],["satoshi-win.xyz",19],["savefiles.com",[19,71]],["scat.gold",19],["scatfap.com",19],["scatkings.com",19],["serie-turche.com",19],["sexdicted.com",19],["sexgay18.com",19],["sexiezpix.com",19],["sexofilm.co",19],["sextgem.com",19],["sextubebbw.com",19],["sgpics.net",19],["shadowrangers.*",19],["shadowrangers.live",19],["shahee4u.cam",19],["shahi4u.*",19],["shahid4u1.*",19],["shahid4uu.*",19],["shahiid-anime.net",19],["shavetape.*",19],["shemale6.com",19],["shemalegape.net",[19,70]],["shid4u.*",19],["shinden.pl",19],["short.es",19],["shortearn.*",19],["shorten.*",19],["shorttey.*",19],["shortzzy.*",19],["showmanga.blog.fc2.com",19],["shrt10.com",19],["sideplusleaks.net",19],["silverblog.tv",[19,76]],["silverpic.com",19],["sinhalasub.life",19],["sinsitio.site",19],["sinvida.me",19],["skidrowcpy.com",19],["skymovieshd.*",19],["slut.mom",19],["smallencode.me",19],["smoner.com",19],["smplace.com",19],["soccerinhd.com",[19,73]],["socceron.name",19],["socceronline.*",[19,73]],["socialblog.tv",[19,76]],["softairbay.com",19],["softarchive.*",19],["sokobj.com",19],["songsio.com",19],["souexatasmais.com",19],["sportbar.live",19],["sports-stream.*",19],["sportstream1.cfd",19],["sporttuna.*",19],["sporttunatv.*",19],["srt.am",19],["srts.me",19],["sshhaa.*",19],["stapadblockuser.*",[19,95]],["stape.*",[19,95]],["stapewithadblock.*",19],["starblog.tv",[19,76]],["starmusiq.*",19],["stbemuiptv.com",19],["stockingfetishvideo.com",19],["strcloud.*",[19,95]],["stream.crichd.vip",19],["stream.lc",19],["stream25.xyz",19],["streamadblocker.*",[19,73,95]],["streamadblockplus.*",[19,95]],["streambee.to",19],["streambucket.net",19],["streamcdn.*",19],["streamcenter.pro",19],["streamers.watch",19],["streamgo.to",19],["streamhub.*",19],["streamingclic.com",19],["streamkiste.tv",19],["streamoupload.xyz",19],["streamservicehd.click",19],["streamsport.*",19],["streamta.*",[19,95]],["streamtape.*",[19,76,95]],["streamtapeadblockuser.*",[19,95]],["streamvid.net",[19,28]],["strikeout.*",[19,75]],["strtape.*",[19,95]],["strtapeadblock.*",[19,95]],["strtapeadblocker.*",[19,95]],["strtapewithadblock.*",19],["strtpe.*",[19,95]],["subtitleporn.com",19],["subtitles.cam",19],["suicidepics.com",19],["supertelevisionhd.com",19],["supexfeeds.com",19],["swatchseries.*",19],["swiftload.io",19],["swipebreed.net",19],["swzz.xyz",19],["sxnaar.com",19],["tabooflix.*",19],["taboosex.club",19],["tapeantiads.com",[19,95]],["tapeblocker.com",[19,95]],["tapenoads.com",[19,95]],["tapepops.com",[19,76,95]],["tapewithadblock.org",[19,95,278]],["teamos.xyz",19],["teen-wave.com",19],["teenporncrazy.com",19],["telegramgroups.xyz",19],["telenovelasweb.com",19],["tennisstreams.*",19],["tensei-shitara-slime-datta-ken.com",19],["tfp.is",19],["tgo-tv.co",[19,73]],["thaihotmodels.com",19],["theblueclit.com",19],["thebussybandit.com",19],["thedaddy.*",[19,215]],["thelastdisaster.vip",19],["themoviesflix.*",19],["thepiratebay.*",19],["thepiratebay0.org",19],["thepiratebay10.info",19],["thesexcloud.com",19],["thothub.today",19],["tightsexteens.com",19],["tlnovelas.net",19],["tmearn.*",19],["tojav.net",19],["tokusatsuindo.com",19],["toonanime.*",19],["top16.net",19],["topdrama.net",19],["topvideosgay.com",19],["torlock.*",19],["tormalayalam.*",19],["torrage.info",19],["torrents.vip",19],["torrentz2eu.*",19],["torrsexvid.com",19],["tpb-proxy.xyz",19],["trannyteca.com",19],["trendytalker.com",19],["tuktukcinma.com",19],["tumanga.net",19],["turbogvideos.com",19],["turboimagehost.com",19],["turbovid.me",19],["turkishseriestv.org",19],["turksub24.net",19],["tutele.sx",19],["tutelehd.*",19],["tvglobe.me",19],["tvpclive.com",19],["tvply.*",19],["tvs-widget.com",19],["tvseries.video",19],["u4m.*",19],["ucptt.com",19],["ufaucet.online",19],["ufcfight.online",19],["ufcstream.*",19],["ultrahorny.com",19],["ultraten.net",19],["unblocknow.*",19],["unblockweb.me",19],["underhentai.net",19],["uniqueten.net",19],["uns.bio",19],["upbaam.com",19],["uploadbuzz.*",19],["upstream.to",19],["usagoals.*",19],["ustream.to",19],["valhallas.click",[19,148]],["valeriabelen.com",19],["verdragonball.online",19],["vexmoviex.*",19],["vfxmed.com",19],["vidclouds.*",19],["video.az",19],["videostreaming.rocks",19],["videowood.tv",19],["vidlox.*",19],["vidorg.net",19],["vidtapes.com",19],["vidz7.com",19],["vikistream.com",19],["vinovo.to",19],["vipboxtv.*",[19,73]],["vipleague.*",[19,239]],["virpe.cc",19],["visifilmai.org",19],["viveseries.com",19],["vladrustov.sx",19],["volokit2.com",[19,215]],["vstorrent.org",19],["w-hentai.com",19],["watch-series.*",19],["watchbrooklynnine-nine.com",19],["watchelementaryonline.com",19],["watchfamilyguyonline.com",19],["watchjavidol.com",19],["watchkobestreams.info",19],["watchlostonline.net",19],["watchmodernfamilyonline.com",19],["watchmonkonline.com",19],["watchrulesofengagementonline.com",19],["watchseries.*",19],["webcamrips.com",19],["wincest.xyz",19],["wolverdon.fun",19],["wordcounter.icu",19],["worldmovies.store",19],["worldstreams.click",19],["wpdeployit.com",19],["wqstreams.tk",19],["wwwsct.com",19],["xanimeporn.com",19],["xblog.tv",[19,76]],["xclusivejams.*",19],["xmoviesforyou.*",19],["xn--verseriesespaollatino-obc.online",19],["xpornium.net",19],["xsober.com",19],["xvip.lat",19],["xxgasm.com",19],["xxvideoss.org",19],["xxx18.uno",19],["xxxdominicana.com",19],["xxxfree.watch",19],["xxxmax.net",19],["xxxwebdlxxx.top",19],["xxxxvideo.uno",19],["yabai.si",19],["yeshd.net",19],["youdbox.*",19],["youjax.com",19],["yourdailypornvideos.ws",19],["yourupload.com",19],["youswear.com",19],["ytmp3eu.*",19],["yts-subs.*",19],["yts.*",19],["ytstv.me",19],["yumeost.net",19],["zerion.cc",19],["zerocoin.top",19],["zitss.xyz",19],["zooqle.*",19],["zpaste.net",19],["hitomi.la",19],["fastreams.com",19],["sky-sports.store",19],["streamsoccer.site",19],["tntsports.store",19],["wowstreams.co",19],["dutchycorp.*",20],["faucet.ovh",20],["mmacore.tv",21],["nxbrew.net",21],["brawlify.com",21],["oko.sh",22],["variety.com",[23,84]],["gameskinny.com",23],["deadline.com",[23,84]],["mlive.com",[23,84]],["washingtonpost.com",24],["gosexpod.com",25],["sexo5k.com",26],["truyen-hentai.com",26],["theshedend.com",28],["zeroupload.com",28],["securenetsystems.net",28],["miniwebtool.com",28],["bchtechnologies.com",28],["eracast.cc",28],["flatai.org",28],["leeapk.com",28],["spiegel.de",29],["jacquieetmichel.net",30],["hausbau-forum.de",31],["althub.club",31],["kiemlua.com",31],["doujindesu.*",32],["atlasstudiousa.com",32],["51bonusrummy.in",[32,76]],["adrino1.bonloan.xyz",33],["vi-music.app",33],["instanders.app",33],["rokni.xyz",33],["keedabankingnews.com",33],["pig69.com",33],["cosplay18.pics",[33,265]],["windroid777.com",33],["tea-coffee.net",34],["spatsify.com",34],["newedutopics.com",34],["getviralreach.in",34],["edukaroo.com",34],["funkeypagali.com",34],["careersides.com",34],["nayisahara.com",34],["wikifilmia.com",34],["infinityskull.com",34],["viewmyknowledge.com",34],["iisfvirtual.in",34],["starxinvestor.com",34],["jkssbalerts.com",34],["imagereviser.com",35],["veganab.co",36],["camdigest.com",36],["learnmany.in",36],["amanguides.com",[36,42]],["highkeyfinance.com",[36,42]],["appkamods.com",36],["techacode.com",36],["djqunjab.in",36],["downfile.site",36],["expertvn.com",36],["trangchu.news",36],["shemaleraw.com",36],["thecustomrom.com",36],["nulleb.com",36],["snlookup.com",36],["bingotingo.com",36],["ghior.com",36],["3dmili.com",36],["karanpc.com",36],["plc247.com",36],["apkdelisi.net",36],["freepasses.org",36],["poplinks.*",[36,46]],["tomarnarede.pt",36],["basketballbuzz.ca",36],["dribbblegraphics.com",36],["kemiox.com",36],["teksnologi.com",36],["bharathwick.com",36],["descargaspcpro.net",36],["rt3dmodels.com",36],["plc4me.com",36],["blisseyhusbands.com",36],["mhdsports.*",36],["mhdsportstv.*",36],["mhdtvworld.*",36],["mhdtvmax.*",36],["mhdstream.*",36],["madaradex.org",36],["trigonevo.com",36],["franceprefecture.fr",36],["jazbaat.in",36],["aipebel.com",36],["audiotools.blog",36],["embdproxy.xyz",36],["fc-lc.*",37],["jobzhub.store",38],["fitdynamos.com",38],["labgame.io",38],["kenzo-flowertag.com",39],["mdn.lol",39],["btcbitco.in",40],["btcsatoshi.net",40],["cempakajaya.com",40],["crypto4yu.com",40],["manofadan.com",40],["readbitcoin.org",40],["wiour.com",40],["tremamnon.com",40],["bitsmagic.fun",40],["ourcoincash.xyz",40],["aylink.co",41],["sugarona.com",42],["nishankhatri.xyz",42],["cety.app",43],["exe-urls.com",43],["exego.app",43],["cutlink.net",43],["cutyurls.com",43],["cutty.app",43],["cutnet.net",43],["jixo.online",43],["tinys.click",44],["loan.creditsgoal.com",44],["rupyaworld.com",44],["vahantoday.com",44],["techawaaz.in",44],["loan.bgmi32bitapk.in",44],["formyanime.com",44],["gsm-solution.com",44],["h-donghua.com",44],["hindisubbedacademy.com",44],["hm4tech.info",44],["mydverse.*",44],["panelprograms.blogspot.com",44],["ripexbooster.xyz",44],["serial4.com",44],["tutorgaming.com",44],["everydaytechvams.com",44],["dipsnp.com",44],["cccam4sat.com",44],["diendancauduong.com",44],["zeemoontv-24.blogspot.com",44],["stitichsports.com",44],["aiimgvlog.fun",45],["appsbull.com",46],["diudemy.com",46],["maqal360.com",46],["androjungle.com",46],["bookszone.in",46],["shortix.co",46],["makefreecallsonline.com",46],["msonglyrics.com",46],["app-sorteos.com",46],["bokugents.com",46],["client.pylexnodes.net",46],["btvplus.bg",46],["listar-mc.net",46],["blog24.me",[47,48]],["coingraph.us",49],["impact24.us",49],["iconicblogger.com",50],["auto-crypto.click",50],["tpi.li",51],["oii.la",[51,75]],["shrinke.*",52],["shrinkme.*",52],["smutty.com",52],["e-sushi.fr",52],["gayforfans.com",52],["freeadultcomix.com",52],["down.dataaps.com",52],["filmweb.pl",[52,188]],["livecamrips.*",52],["safetxt.net",52],["filespayouts.com",52],["atglinks.com",53],["kbconlinegame.com",54],["hamrojaagir.com",54],["odijob.com",54],["stfly.biz",55],["airevue.net",55],["atravan.net",55],["simana.online",56],["fooak.com",56],["joktop.com",56],["evernia.site",56],["falpus.com",56],["rfiql.com",57],["gujjukhabar.in",57],["smartfeecalculator.com",57],["djxmaza.in",57],["thecubexguide.com",57],["jytechs.in",57],["financacerta.com",58],["encurtads.net",58],["mastkhabre.com",59],["weshare.is",60],["winezones.in",61],["vplink.in",62],["3dsfree.org",63],["up4load.com",64],["alpin.de",65],["boersennews.de",65],["chefkoch.de",65],["chip.de",65],["clever-tanken.de",65],["desired.de",65],["donnerwetter.de",65],["fanfiktion.de",65],["focus.de",65],["formel1.de",65],["frustfrei-lernen.de",65],["gewinnspiele.tv",65],["giga.de",65],["gut-erklaert.de",65],["kino.de",65],["messen.de",65],["nickles.de",65],["nordbayern.de",65],["spielfilm.de",65],["teltarif.de",[65,66]],["unsere-helden.com",65],["weltfussball.at",65],["watson.de",65],["mactechnews.de",65],["sport1.de",65],["welt.de",65],["sport.de",65],["allthingsvegas.com",67],["100percentfedup.com",67],["beforeitsnews.com",67],["concomber.com",67],["conservativefiringline.com",67],["dailylol.com",67],["funnyand.com",67],["letocard.fr",67],["mamieastuce.com",67],["meilleurpronostic.fr",67],["patriotnationpress.com",67],["toptenz.net",67],["vitamiiin.com",67],["writerscafe.org",67],["populist.press",67],["dailytruthreport.com",67],["livinggospeldaily.com",67],["first-names-meanings.com",67],["welovetrump.com",67],["thehayride.com",67],["thelibertydaily.com",67],["thepoke.co.uk",67],["thepolitistick.com",67],["theblacksphere.net",67],["shark-tank.com",67],["naturalblaze.com",67],["greatamericanrepublic.com",67],["dailysurge.com",67],["truthlion.com",67],["flagandcross.com",67],["westword.com",67],["republicbrief.com",67],["freedomfirstnetwork.com",67],["phoenixnewtimes.com",67],["designbump.com",67],["clashdaily.com",67],["madworldnews.com",67],["reviveusa.com",67],["sonsoflibertymedia.com",67],["thedesigninspiration.com",67],["videogamesblogger.com",67],["protrumpnews.com",67],["thepalmierireport.com",67],["kresy.pl",67],["thepatriotjournal.com",67],["thegatewaypundit.com",67],["wltreport.com",67],["miaminewtimes.com",67],["politicalsignal.com",67],["rightwingnews.com",67],["bigleaguepolitics.com",67],["comicallyincorrect.com",67],["upornia.com",68],["pillowcase.su",69],["akaihentai.com",70],["cine-calidad.*",70],["fastpic.org",[70,76]],["forums.socialmediagirls.com",[70,76]],["monoschino2.com",70],["saradahentai.com",70],["sxyprn.*",70],["veryfreeporn.com",70],["pornoenspanish.es",70],["theporngod.com",70],["besthdgayporn.com",71],["dimensionalseduction.com",71],["drivenime.com",71],["erothots1.com",71],["javup.org",71],["madouqu.com",71],["shemaleup.net",71],["transflix.net",71],["worthcrete.com",71],["hentaihere.com",72],["player.smashy.stream",72],["player.smashystream.com",72],["123movies.*",73],["123moviesla.*",73],["123movieweb.*",73],["2embed.*",73],["9xmovies.*",73],["adsh.cc",73],["adshort.*",73],["afilmyhouse.blogspot.com",73],["ak.sv",73],["allmovieshub.*",73],["api.webs.moe",73],["apkmody.io",73],["asianplay.*",73],["atishmkv.*",73],["backfirstwo.site",73],["bflix.*",73],["crazyblog.in",73],["cricstream.*",73],["crictime.*",73],["cuervotv.me",73],["divicast.com",73],["dood.*",[73,194]],["dooood.*",[73,194]],["embed.meomeo.pw",73],["extramovies.*",73],["faselhd.*",73],["faselhds.*",73],["filemoon.*",73],["filmeserialeonline.org",73],["filmy.*",73],["filmyhit.*",73],["filmywap.*",73],["flexyhit.com",73],["fmovies.*",73],["foreverwallpapers.com",73],["french-streams.cc",73],["gdplayer.*",73],["goku.*",73],["gomovies.*",73],["gowatchseries.*",73],["hdfungamezz.*",73],["hdtoday.to",73],["hinatasoul.com",73],["hindilinks4u.*",73],["hurawatch.*",[73,222]],["igg-games.com",73],["infinityscans.net",73],["jalshamoviezhd.*",73],["livecricket.*",73],["mangareader.to",73],["mhdsport.*",73],["mkvcinemas.*",73],["movies2watch.*",73],["moviespapa.*",73],["mp3juice.info",73],["mp4moviez.*",73],["mydownloadtube.*",73],["myflixerz.to",73],["nowmetv.net",73],["nowsportstv.com",73],["nuroflix.*",73],["nxbrew.com",73],["o2tvseries.*",73],["o2tvseriesz.*",73],["oii.io",73],["paidshitforfree.com",73],["pepperlive.info",73],["pirlotv.*",73],["playertv.net",73],["poscitech.*",73],["primewire.*",73],["redecanais.*",73],["roystream.com",73],["rssing.com",73],["s.to",73],["serienstream.*",73],["sflix.*",73],["shahed4u.*",73],["shaheed4u.*",73],["share.filesh.site",73],["sharkfish.xyz",73],["skidrowcodex.net",73],["smartermuver.com",73],["speedostream.*",73],["sportcast.*",73],["sportskart.*",73],["stream4free.live",73],["streamingcommunity.*",[73,75,115]],["tamilarasan.*",73],["tamilfreemp3songs.*",73],["tamilmobilemovies.in",73],["tamilprinthd.*",73],["tapeadsenjoyer.com",[73,76,95]],["thewatchseries.live",73],["tnmusic.in",73],["torrentdosfilmes.*",73],["travelplanspro.com",73],["tubemate.*",73],["tusfiles.com",73],["tutlehd4.com",73],["twstalker.com",73],["uploadrar.*",73],["uqload.*",73],["vid-guard.com",73],["vidcloud9.*",73],["vido.*",73],["vidoo.*",73],["vidsaver.net",73],["vidspeeds.com",73],["viralitytoday.com",73],["voiranime.stream",73],["vudeo.*",73],["vumoo.*",73],["watchdoctorwhoonline.com",73],["watchomovies.*",[73,112]],["watchserie.online",73],["woxikon.in",73],["www-y2mate.com",73],["yesmovies.*",73],["ylink.bid",73],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",73],["kickassanime.*",74],["11xmovies.*",75],["cinego.tv",75],["dokoembed.pw",75],["ev01.to",75],["fojik.*",75],["fstream365.com",75],["fzmovies.*",75],["linkz.*",75],["minoplres.xyz",75],["mostream.us",75],["moviedokan.*",75],["myflixer.*",75],["prmovies.*",75],["readcomiconline.li",75],["s3embtaku.pro",75],["sflix2.to",75],["sportshub.stream",75],["streamblasters.*",75],["topcinema.cam",75],["webxzplay.cfd",75],["zonatmo.com",75],["animesaturn.cx",75],["filecrypt.*",75],["hunterscomics.com",75],["aniwave.uk",75],["dojing.net",76],["javsubindo.com",76],["krx18.com",76],["loadx.ws",76],["mangaforfree.com",76],["pornx.to",76],["savefiles.*",[76,256]],["shavetape.cash",76],["strcloud.club",76],["strcloud.site",76],["streampoi.com",76],["strmup.to",[76,148]],["up4stream.com",[76,112]],["ups2up.fun",[76,112]],["videq.stream",76],["xmegadrive.com",76],["rahim-soft.com",76],["x-video.tube",76],["rubystm.com",76],["rubyvid.com",76],["rubyvidhub.com",76],["stmruby.com",76],["streamruby.com",76],["poophd.cc",76],["windowsreport.com",76],["fuckflix.click",76],["kaa.to",77],["bi-girl.net",78],["ftuapps.*",78],["hentaiseason.com",78],["hoodtrendspredict.com",78],["marcialhub.xyz",78],["odiadance.com",78],["osteusfilmestuga.online",78],["ragnarokscanlation.opchapters.com",78],["sampledrive.org",78],["showflix.*",78],["swordalada.org",78],["tvappapk.com",78],["twobluescans.com",[78,79]],["varnascan.xyz",78],["bibliopanda.visblog.online",80],["hallofseries.com",80],["luciferdonghua.in",80],["toursetlist.com",80],["truyentranhfull.net",80],["fcportables.com",80],["repack-games.com",80],["ibooks.to",80],["blog.tangwudi.com",80],["filecatchers.com",80],["babaktv.com",80],["samchui.com",81],["sandrarose.com",81],["sherdog.com",81],["sidereel.com",81],["silive.com",[81,84]],["simpleflying.com",81],["sloughexpress.co.uk",81],["spacenews.com",81],["sportsgamblingpodcast.com",81],["spotofteadesigns.com",81],["stacysrandomthoughts.com",81],["ssnewstelegram.com",81],["superherohype.com",[81,84]],["tablelifeblog.com",81],["thebeautysection.com",81],["thecelticblog.com",81],["thecurvyfashionista.com",81],["thefashionspot.com",81],["thegamescabin.com",81],["thenerdyme.com",81],["thenonconsumeradvocate.com",81],["theprudentgarden.com",81],["thethings.com",81],["timesnews.net",81],["topspeed.com",81],["toyotaklub.org.pl",81],["travelingformiles.com",81],["tutsnode.org",81],["viralviralvideos.com",81],["wannacomewith.com",81],["wimp.com",[81,84]],["windsorexpress.co.uk",81],["woojr.com",81],["worldoftravelswithkids.com",81],["worldsurfleague.com",81],["cheatsheet.com",82],["pwinsider.com",82],["c-span.org",83],["15min.lt",84],["247sports.com",84],["abc17news.com",84],["agrodigital.com",84],["al.com",84],["aliontherunblog.com",84],["allaboutthetea.com",84],["allmovie.com",84],["allmusic.com",84],["allthingsthrifty.com",84],["amessagewithabottle.com",84],["artforum.com",84],["artnews.com",84],["awkward.com",84],["barcablaugranes.com",84],["barnsleychronicle.com",84],["bethcakes.com",84],["betweenenglandandiowa.com",84],["bgr.com",84],["blazersedge.com",84],["blogher.com",84],["blu-ray.com",84],["bluegraygal.com",84],["briefeguru.de",84],["brobible.com",84],["cagesideseats.com",84],["cbsnews.com",84],["cbssports.com",[84,261]],["celiacandthebeast.com",84],["chaptercheats.com",84],["cleveland.com",84],["clickondetroit.com",84],["commercialcompetentedigitale.ro",84],["dailydot.com",84],["dailykos.com",84],["dailyvoice.com",84],["danslescoulisses.com",84],["decider.com",84],["didyouknowfacts.com",84],["dogtime.com",84],["dpreview.com",84],["ebaumsworld.com",84],["eldiariony.com",84],["fark.com",84],["femestella.com",84],["fmradiofree.com",84],["free-power-point-templates.com",84],["freeconvert.com",84],["frogsandsnailsandpuppydogtail.com",84],["funtasticlife.com",84],["fwmadebycarli.com",84],["golfdigest.com",84],["gulflive.com",84],["hollywoodreporter.com",84],["homeglowdesign.com",84],["honeygirlsworld.com",84],["ibtimes.co.in",84],["imgur.com",84],["indiewire.com",84],["intouchweekly.com",84],["jasminemaria.com",84],["kens5.com",84],["kion546.com",84],["knowyourmeme.com",84],["last.fm",84],["lehighvalleylive.com",84],["lettyskitchen.com",84],["lifeandstylemag.com",84],["lifeinleggings.com",84],["lizzieinlace.com",84],["localnews8.com",84],["lonestarlive.com",84],["madeeveryday.com",84],["maidenhead-advertiser.co.uk",84],["mandatory.com",84],["mardomreport.net",84],["masslive.com",84],["melangery.com",84],["miamiherald.com",84],["mmamania.com",84],["momtastic.com",84],["mostlymorgan.com",84],["motherwellmag.com",84],["musicfeeds.com.au",84],["naszemiasto.pl",84],["nationalpost.com",84],["nationalreview.com",84],["nbcsports.com",84],["news.com.au",84],["ninersnation.com",84],["nj.com",84],["nordot.app",84],["nothingbutnewcastle.com",84],["nsjonline.com",84],["nypost.com",84],["observer.com",84],["oregonlive.com",84],["pagesix.com",84],["patheos.com",84],["pennlive.com",84],["pep.ph",[84,89]],["playstationlifestyle.net",84],["puckermom.com",84],["reelmama.com",84],["rlfans.com",84],["robbreport.com",84],["rollingstone.com",84],["royalmailchat.co.uk",84],["sbnation.com",84],["sheknows.com",84],["smartworld.it",84],["sneakernews.com",84],["sourcingjournal.com",84],["sport-fm.gr",84],["stylecaster.com",84],["syracuse.com",84],["tastingtable.com",84],["thedailymeal.com",84],["theflowspace.com",84],["themarysue.com",84],["tiermaker.com",84],["timesofisrael.com",84],["tokfm.pl",84],["torontosun.com",84],["tvline.com",84],["usmagazine.com",84],["wallup.net",84],["weather.com",84],["worldstar.com",84],["worldstarhiphop.com",84],["wwd.com",84],["wzzm13.com",84],["yourcountdown.to",84],["automobile-catalog.com",[85,86,87]],["baseballchannel.jp",[85,86]],["forum.mobilism.me",85],["gentosha-go.com",85],["hang.hu",85],["hoyme.jp",85],["motorbikecatalog.com",[85,86,87]],["pons.com",85],["wisevoter.com",85],["topstarnews.net",85],["islamicfinder.org",85],["secure-signup.net",85],["dramabeans.com",85],["dropgame.jp",[85,86]],["manta.com",85],["tportal.hr",85],["tvtropes.org",85],["convertcase.net",85],["uranai.nosv.org",86],["yakkun.com",86],["24sata.hr",86],["373news.com",86],["alc.co.jp",86],["allthetests.com",86],["animanch.com",86],["aniroleplay.com",86],["apkmirror.com",[86,192]],["areaconnect.com",86],["as-web.jp",86],["aucfree.com",86],["autoby.jp",86],["autoc-one.jp",86],["autofrage.net",86],["bab.la",86],["babla.*",86],["bien.hu",86],["boredpanda.com",86],["carscoops.com",86],["cesoirtv.com",86],["chanto.jp.net",86],["cinetrafic.fr",86],["cocokara-next.com",86],["collinsdictionary.com",86],["computerfrage.net",86],["crosswordsolver.com",86],["cruciverba.it",86],["cults3d.com",86],["daily.co.jp",86],["dailynewshungary.com",86],["dayspedia.com",86],["dictionary.cambridge.org",86],["dictionnaire.lerobert.com",86],["dnevno.hr",86],["dreamchance.net",86],["drweil.com",86],["dziennik.pl",86],["eigachannel.jp",86],["ev-times.com",86],["finanzfrage.net",86],["footballchannel.jp",86],["forsal.pl",86],["freemcserver.net",86],["futabanet.jp",86],["fxstreet-id.com",86],["fxstreet-vn.com",86],["fxstreet.*",86],["game8.jp",86],["gardeningsoul.com",86],["gazetaprawna.pl",86],["gesundheitsfrage.net",86],["gifu-np.co.jp",86],["gigafile.nu",86],["globalrph.com",86],["golf-live.at",86],["grapee.jp",86],["gutefrage.net",86],["hb-nippon.com",86],["heureka.cz",86],["horairesdouverture24.fr",86],["hotcopper.co.nz",86],["hotcopper.com.au",86],["idokep.hu",86],["indiatimes.com",86],["infor.pl",86],["iza.ne.jp",86],["j-cast.com",86],["j-town.net",86],["j7p.jp",86],["jablickar.cz",86],["javatpoint.com",86],["jikayosha.jp",86],["judgehype.com",86],["kinmaweb.jp",86],["km77.com",86],["kobe-journal.com",86],["kreuzwortraetsel.de",86],["kurashinista.jp",86],["kurashiru.com",86],["kyoteibiyori.com",86],["lacuarta.com",86],["lakeshowlife.com",86],["laleggepertutti.it",86],["langenscheidt.com",86],["laposte.net",86],["lawyersgunsmoneyblog.com",86],["ldoceonline.com",86],["listentotaxman.com",86],["livenewschat.eu",86],["luremaga.jp",86],["mahjongchest.com",86],["mainichi.jp",86],["maketecheasier.com",[86,87]],["malaymail.com",86],["mamastar.jp",86],["mathplayzone.com",86],["meteo60.fr",86],["midhudsonnews.com",86],["minesweeperquest.com",86],["minkou.jp",86],["modhub.us",86],["moin.de",86],["motorradfrage.net",86],["motscroises.fr",86],["muragon.com",86],["nana-press.com",86],["natalie.mu",86],["nationaltoday.com",86],["nbadraft.net",86],["news.zerkalo.io",86],["newsinlevels.com",86],["newsweekjapan.jp",86],["niketalk.com",86],["nikkan-gendai.com",86],["nouvelobs.com",86],["nyitvatartas24.hu",86],["oeffnungszeitenbuch.de",86],["onlineradiobox.com",86],["operawire.com",86],["optionsprofitcalculator.com",86],["oraridiapertura24.it",86],["oxfordlearnersdictionaries.com",86],["palabr.as",86],["pashplus.jp",86],["persoenlich.com",86],["petitfute.com",86],["play-games.com",86],["powerpyx.com",86],["pptvhd36.com",86],["profitline.hu",86],["puzzlegarage.com",86],["quefaire.be",86],["radio-australia.org",86],["radio-osterreich.at",86],["raetsel-hilfe.de",86],["raider.io",86],["ranking.net",86],["references.be",86],["reisefrage.net",86],["relevantmagazine.com",86],["reptilesmagazine.com",86],["roleplayer.me",86],["rostercon.com",86],["samsungmagazine.eu",86],["sankei.com",86],["sanspo.com",86],["scribens.com",86],["scribens.fr",86],["slashdot.org",86],["soccerdigestweb.com",86],["solitairehut.com",86],["sourceforge.net",[86,90]],["southhemitv.com",86],["sportalkorea.com",86],["sportlerfrage.net",86],["syosetu.com",86],["szamoldki.hu",86],["talkwithstranger.com",86],["the-crossword-solver.com",86],["thedigestweb.com",86],["traicy.com",86],["transparentcalifornia.com",86],["transparentnevada.com",86],["trilltrill.jp",86],["tunebat.com",86],["tvtv.ca",86],["tvtv.us",86],["tweaktown.com",86],["twn.hu",86],["tyda.se",86],["ufret.jp",86],["uptodown.com",86],["verkaufsoffener-sonntag.com",86],["vimm.net",86],["wamgame.jp",86],["watchdocumentaries.com",86],["webdesignledger.com",86],["wetteronline.de",86],["wfmz.com",86],["winfuture.de",86],["word-grabber.com",86],["worldjournal.com",86],["wort-suchen.de",86],["woxikon.*",86],["young-machine.com",86],["yugioh-starlight.com",86],["yutura.net",86],["zagreb.info",86],["zakzak.co.jp",86],["2chblog.jp",86],["2monkeys.jp",86],["46matome.net",86],["akb48glabo.com",86],["akb48matomemory.com",86],["alfalfalfa.com",86],["all-nationz.com",86],["anihatsu.com",86],["aqua2ch.net",86],["blog.esuteru.com",86],["blog.livedoor.jp",86],["blog.jp",86],["blogo.jp",86],["chaos2ch.com",86],["choco0202.work",86],["crx7601.com",86],["danseisama.com",86],["dareda.net",86],["digital-thread.com",86],["doorblog.jp",86],["exawarosu.net",86],["fgochaldeas.com",86],["football-2ch.com",86],["gekiyaku.com",86],["golog.jp",86],["hacchaka.net",86],["heartlife-matome.com",86],["liblo.jp",86],["fesoku.net",86],["fiveslot777.com",86],["gamejksokuhou.com",86],["girlsreport.net",86],["girlsvip-matome.com",86],["grasoku.com",86],["gundamlog.com",86],["honyaku-channel.net",86],["ikarishintou.com",86],["imas-cg.net",86],["imihu.net",86],["inutomo11.com",86],["itainews.com",86],["itaishinja.com",86],["jin115.com",86],["jisaka.com",86],["jnews1.com",86],["jumpsokuhou.com",86],["jyoseisama.com",86],["keyakizaka46matomemory.net",86],["kidan-m.com",86],["kijoden.com",86],["kijolariat.net",86],["kijolifehack.com",86],["kijomatomelog.com",86],["kijyokatu.com",86],["kijyomatome.com",86],["kijyomatome-ch.com",86],["kijyomita.com",86],["kirarafan.com",86],["kitimama-matome.net",86],["kitizawa.com",86],["konoyubitomare.jp",86],["kotaro269.com",86],["kyousoku.net",86],["ldblog.jp",86],["livedoor.biz",86],["livedoor.blog",86],["majikichi.com",86],["matacoco.com",86],["matomeblade.com",86],["matomelotte.com",86],["matometemitatta.com",86],["mojomojo-licarca.com",86],["morikinoko.com",86],["nandemo-uketori.com",86],["netatama.net",86],["news-buzz1.com",86],["news30over.com",86],["nishinippon.co.jp",86],["nmb48-mtm.com",86],["norisoku.com",86],["npb-news.com",86],["ocsoku.com",86],["okusama-kijyo.com",86],["onecall2ch.com",86],["onihimechan.com",86],["orusoku.com",86],["otakomu.jp",86],["otoko-honne.com",86],["oumaga-times.com",86],["outdoormatome.com",86],["pachinkopachisro.com",86],["paranormal-ch.com",86],["recosoku.com",86],["s2-log.com",86],["saikyo-jump.com",86],["shuraba-matome.com",86],["ske48matome.net",86],["squallchannel.com",86],["sukattojapan.com",86],["sumaburayasan.com",86],["sutekinakijo.com",86],["usi32.com",86],["uwakich.com",86],["uwakitaiken.com",86],["vault76.info",86],["vipnews.jp",86],["vippers.jp",86],["vipsister23.com",86],["vtubernews.jp",86],["watarukiti.com",86],["world-fusigi.net",86],["zakuzaku911.com",86],["zch-vip.com",86],["interfootball.co.kr",87],["a-ha.io",87],["cboard.net",87],["jjang0u.com",87],["joongdo.co.kr",87],["viva100.com",87],["gamingdeputy.com",87],["alle-tests.nl",87],["tweaksforgeeks.com",87],["m.inven.co.kr",87],["mlbpark.donga.com",87],["meconomynews.com",87],["brandbrief.co.kr",87],["motorgraph.com",87],["bleepingcomputer.com",88],["pravda.com.ua",88],["ap7am.com",89],["cinema.com.my",89],["dolldivine.com",89],["giornalone.it",89],["iplocation.net",89],["jamaicajawapos.com",89],["jutarnji.hr",89],["kompasiana.com",89],["mediaindonesia.com",89],["niice-woker.com",89],["slobodnadalmacija.hr",89],["upmedia.mg",89],["mentalfloss.com",91],["hentaivost.fr",92],["jelonka.com",93],["isgfrm.com",94],["advertisertape.com",95],["tapeadvertisement.com",95],["tapelovesads.org",95],["watchadsontape.com",95],["vosfemmes.com",96],["voyeurfrance.net",96],["hyundaitucson.info",97],["exambd.net",98],["cgtips.org",99],["freewebcart.com",100],["freemagazines.top",100],["siamblockchain.com",100],["emuenzen.de",101],["kickass.*",102],["unblocked.id",104],["listendata.com",105],["7xm.xyz",105],["fastupload.io",105],["azmath.info",105],["wouterplanet.com",106],["xenvn.com",107],["pfps.gg",108],["4kporn.xxx",109],["androidacy.com",110],["4porn4.com",111],["bestpornflix.com",112],["freeroms.com",112],["andhrafriends.com",112],["723qrh1p.fun",112],["98zero.com",113],["mediaset.es",113],["updatewallah.in",113],["hwbusters.com",113],["beatsnoop.com",114],["fetchpik.com",114],["hackerranksolution.in",114],["camsrip.com",114],["file.org",114],["btcbunch.com",116],["teachoo.com",[117,118]],["mafiatown.pl",119],["bitcotasks.com",120],["hilites.today",121],["udvl.com",122],["www.chip.de",[123,124,125,126]],["topsporter.net",127],["sportshub.to",127],["myanimelist.net",128],["unofficialtwrp.com",129],["codec.kyiv.ua",129],["kimcilonlyofc.com",129],["bitcosite.com",130],["bitzite.com",130],["teluguflix.*",131],["hacoos.com",132],["watchhentai.net",133],["hes-goals.io",133],["pkbiosfix.com",133],["casi3.xyz",133],["zefoy.com",134],["mailgen.biz",135],["tempinbox.xyz",135],["vidello.net",136],["newscon.org",137],["yunjiema.top",137],["pcgeeks-games.com",137],["resizer.myct.jp",138],["gametohkenranbu.sakuraweb.com",139],["jisakuhibi.jp",140],["rank1-media.com",140],["lifematome.blog",141],["fm.sekkaku.net",142],["dvdrev.com",143],["betweenjpandkr.blog",144],["nft-media.net",145],["ghacks.net",146],["leak.sx",147],["paste.bin.sx",147],["pornleaks.in",147],["luluvid.com",148],["aliezstream.pro",148],["daddy-stream.xyz",148],["daddylive1.*",148],["esportivos.*",148],["instream.pro",148],["mylivestream.pro",148],["poscitechs.*",148],["powerover.online",148],["sportea.link",148],["sportsurge.stream",148],["ufckhabib.com",148],["ustream.pro",148],["animeshqip.site",148],["apkship.shop",148],["buzter.pro",148],["enjoysports.bond",148],["filedot.to",148],["foreverquote.xyz",148],["hdstream.one",148],["kingstreamz.site",148],["live.fastsports.store",148],["livesnow.me",148],["livesports4u.pw",148],["masterpro.click",148],["nuxhallas.click",148],["papahd.info",148],["rgshows.me",148],["sportmargin.live",148],["sportmargin.online",148],["sportsloverz.xyz",148],["supertipzz.online",148],["totalfhdsport.xyz",148],["ultrastreamlinks.xyz",148],["usgate.xyz",148],["webmaal.cfd",148],["wizistreamz.xyz",148],["educ4m.com",148],["fromwatch.com",148],["visualnewshub.com",148],["khoaiphim.com",150],["haafedk2.com",151],["jovemnerd.com.br",152],["totalcsgo.com",153],["manysex.com",154],["gaminginfos.com",155],["tinxahoivn.com",156],["m.4khd.com",157],["westmanga.*",157],["automoto.it",158],["fordownloader.com",159],["codelivly.com",160],["tchatche.com",161],["cryptoearns.com",161],["lordchannel.com",162],["novelhall.com",163],["bagi.co.in",164],["keran.co",164],["biblestudytools.com",165],["christianheadlines.com",165],["ibelieve.com",165],["kuponigo.com",166],["inxxx.com",167],["bemyhole.com",167],["embedwish.com",168],["leakslove.net",168],["jenismac.com",169],["vxetable.cn",170],["nizarstream.com",171],["donghuaworld.com",172],["letsdopuzzles.com",173],["rediff.com",174],["igay69.com",175],["dzapk.com",176],["darknessporn.com",177],["familyporner.com",177],["freepublicporn.com",177],["pisshamster.com",177],["punishworld.com",177],["xanimu.com",177],["tainio-mania.online",178],["eroticmoviesonline.me",179],["series9movies.com",179],["teleclub.xyz",180],["ecamrips.com",181],["showcamrips.com",181],["tucinehd.com",182],["9animetv.to",183],["qiwi.gg",184],["jornadaperfecta.com",185],["loseart.com",186],["sousou-no-frieren.com",187],["unite-guide.com",189],["thebullspen.com",190],["receitasdaora.online",191],["hiraethtranslation.com",193],["all3do.com",194],["d-s.io",194],["d0000d.com",194],["d000d.com",194],["d0o0d.com",194],["do0od.com",194],["do7go.com",194],["doods.*",194],["doodstream.*",194],["dooodster.com",194],["doply.net",194],["ds2play.com",194],["ds2video.com",194],["vidply.com",194],["vide0.net",194],["vvide0.com",194],["xfreehd.com",195],["freethesaurus.com",196],["thefreedictionary.com",196],["dexterclearance.com",197],["x86.co.kr",198],["onlyfaucet.com",199],["x-x-x.tube",200],["fdownloader.net",201],["thehackernews.com",202],["mielec.pl",203],["treasl.com",204],["mrbenne.com",205],["cnpics.org",[206,265]],["ovabee.com",206],["porn4f.com",206],["cnxx.me",[206,265]],["ai18.pics",[206,265]],["sportsonline.si",207],["fiuxy2.co",208],["animeunity.to",209],["tokopedia.com",210],["remixsearch.net",211],["remixsearch.es",211],["onlineweb.tools",211],["sharing.wtf",211],["2024tv.ru",212],["modrinth.com",213],["curseforge.com",213],["xnxxcom.xyz",214],["sportsurge.net",215],["joyousplay.xyz",215],["quest4play.xyz",[215,217]],["generalpill.net",215],["moneycontrol.com",216],["cookiewebplay.xyz",217],["ilovetoplay.xyz",217],["streamcaster.live",217],["weblivehdplay.ru",217],["nontongo.win",218],["m9.news",219],["callofwar.com",220],["secondhandsongs.com",221],["nohost.one",222],["vidbinge.com",222],["send.cm",223],["send.now",223],["3rooodnews.net",224],["xxxbfvideo.net",225],["filmy4wap.co.in",226],["filmy4waps.org",226],["gameshop4u.com",227],["regenzi.site",227],["historicaerials.com",228],["handirect.fr",229],["animefenix.tv",230],["fsiblog3.club",231],["kamababa.desi",231],["sat-sharing.com",231],["getfiles.co.uk",232],["genelify.com",233],["dhtpre.com",234],["xbaaz.com",235],["lineupexperts.com",237],["fearmp4.ru",238],["buffsports.*",239],["fbstreams.*",239],["wavewalt.me",239],["m.shuhaige.net",240],["streamingnow.mov",241],["thesciencetoday.com",242],["sportnews.to",242],["ghbrisk.com",244],["iplayerhls.com",244],["bacasitus.com",245],["katoikos.world",245],["abstream.to",246],["pawastreams.pro",247],["rebajagratis.com",248],["tv.latinlucha.es",248],["fetcheveryone.com",249],["reviewdiv.com",250],["laurelberninteriors.com",251],["godlike.com",252],["godlikeproductions.com",252],["bestsportslive.org",253],["fsportshd.xyz>>",254],["stellarthread.com",254],["bestreamsports.org",255],["streamhls.to",257],["xmalay1.net",258],["letemsvetemapplem.eu",259],["pc-builds.com",260],["watch-dbz57.funonline.co.in",262],["live4all.net",263],["pokemon-project.com",264],["3minx.com",265],["555fap.com",265],["blackwidof.org",265],["fc2ppv.stream",265],["hentai4f.com",265],["hentaipig.com",265],["javball.com",265],["javbee.vip",265],["javring.com",265],["javsunday.com",265],["kin8-av.com",265],["porn4f.org",265],["sweetie-fox.com",265],["xcamcovid.com",265],["moviesonlinefree.*",266],["fileszero.com",267],["viralharami.com",267],["wstream.cloud",267],["bmamag.com",268],["bmacanberra.wpcomstaging.com",268],["cinemastervip.com",269],["mmsbee42.com",270],["mmsmasala.com",270],["andrenalynrushplay.cfd",271],["fnjplay.xyz",271],["cefirates.com",272],["comicleaks.com",272],["tapmyback.com",272],["ping.gg",272],["nookgaming.com",272],["creatordrop.com",272],["bitdomain.biz",272],["fort-shop.kiev.ua",272],["accuretawealth.com",272],["resourceya.com",272],["tracktheta.com",272],["adaptive.marketing",272],["camberlion.com",272],["trybawaryjny.pl",272],["segops.madisonspecs.com",272],["stresshelden-coaching.de",272],["controlconceptsusa.com",272],["ryaktive.com",272],["tip.etip-staging.etip.io",272],["future-fortune.com",273],["furucombo.app",273],["bolighub.dk",273],["intercity.technology",274],["freelancer.taxmachine.be",274],["adria.gg",274],["fjlaboratories.com",274],["abhijith.page",274],["helpmonks.com",274],["dataunlocker.com",275],["proboards.com",276],["winclassic.net",276],["farmersjournal.ie",277]]);
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
