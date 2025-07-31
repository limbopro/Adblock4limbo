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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","/google_jobrunner|blockAdBlock/"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","detectAdBlock"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","\"data-sdk\""],["script","_ADX_"],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","onload"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","popundersPerIP"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/AdBlock/i"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/detect|WebAssembly/"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","'hidden'"],["script","/dismissAdBlock|533092QTEErr/"],["script","debugger"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["nontonx.com",3],["pandadoc.com",4],["web.de",5],["skidrowreloaded.com",[6,18]],["1337x.*",[6,18]],["1stream.eu",6],["4kwebplay.xyz",6],["alldownplay.xyz",6],["anime4i.vip",6],["antennasports.ru",6],["boxingstream.me",6],["buffstreams.app",6],["claplivehdplay.ru",[6,212]],["cracksports.me",[6,17]],["cricstream.me",6],["cricstreams.re",[6,17]],["dartsstreams.com",6],["eurekaddl.baby",6],["euro2024direct.ru",6],["ext.to",6],["extrem-down.*",6],["extreme-down.*",6],["eztv.*",6],["eztvx.to",6],["f1box.me",6],["flix-wave.*",6],["flixrave.me",6],["golfstreams.me",6],["hikaritv.xyz",6],["ianimes.one",6],["jointexploit.net",[6,18]],["kenitv.me",[6,17]],["lewblivehdplay.ru",[6,212]],["mediacast.click",6],["mixdrop.*",[6,18]],["mlbbite.net",6],["mlbstreams.ai",6],["motogpstream.me",6],["nbabox.me",6],["nflbox.me",6],["nhlbox.me",6],["playcast.click",6],["qatarstreams.me",[6,17]],["qqwebplay.xyz",[6,212]],["rnbastreams.com",6],["rugbystreams.me",6],["sanet.*",6],["socceronline.me",6],["soccerworldcup.me",[6,17]],["sportshd.*",6],["sportzonline.si",6],["streamed.su",6],["sushiscan.net",6],["topstreams.info",6],["totalsportek.to",6],["tvableon.me",[6,17]],["vecloud.eu",6],["vibestreams.*",6],["vipstand.pm",6],["webcamrips.to",6],["worldsports.me",6],["x1337x.*",6],["wawacity.*",6],["720pstream.*",[6,70]],["embedsports.me",[6,98]],["embedstream.me",[6,17,18,70,98]],["jumbtv.com",[6,98]],["reliabletv.me",[6,98]],["topembed.pw",[6,72,212]],["crackstreamer.net",6],["methstreamer.com",6],["vidsrc.*",[6,17,70]],["vidco.pro",[6,70]],["freestreams-live.*>>",6],["embed.wcostream.com",7],["moviepilot.de",[8,62]],["userupload.*",9],["cinedesi.in",9],["intro-hd.net",9],["monacomatin.mc",9],["nodo313.net",9],["mhdtvsports.*",[9,34]],["hesgoal-tv.io",9],["hesgoal-vip.io",9],["earn.punjabworks.com",9],["mahajobwala.in",9],["solewe.com",9],["panel.play.hosting",9],["total-sportek.to",9],["hesgoal-vip.to",9],["shoot-yalla.me",9],["shoot-yalla-tv.live",9],["pahe.*",[10,18,72]],["soap2day.*",10],["yts.mx",11],["hqq.*",12],["waaw.*",12],["pixhost.*",13],["vipbox.*",14],["telerium.*",15],["apex2nova.com",15],["hoca5.com",15],["germancarforum.com",16],["cybercityhelp.in",16],["innateblogger.com",16],["omeuemprego.online",16],["viprow.*",[17,18,70]],["bluemediadownload.*",17],["bluemediafile.*",17],["bluemedialink.*",17],["bluemediastorage.*",17],["bluemediaurls.*",17],["urlbluemedia.*",17],["bowfile.com",17],["cloudvideo.tv",[17,70]],["cloudvideotv.*",[17,70]],["coloredmanga.com",17],["exeo.app",17],["hiphopa.net",[17,18]],["megaup.net",17],["olympicstreams.co",[17,70]],["tv247.us",[17,18]],["uploadhaven.com",17],["userscloud.com",[17,70]],["streamnoads.com",[17,18,70,90]],["mlbbox.me",17],["vikingf1le.us.to",17],["neodrive.xyz",17],["mdfx9dc8n.net",18],["mdzsmutpcvykb.net",18],["mixdrop21.net",18],["mixdropjmk.pw",18],["123-movies.*",18],["123movieshd.*",18],["123movieshub.*",18],["123moviesme.*",18],["1337x.ninjaproxy1.com",18],["141jav.com",18],["141tube.com",18],["1bit.space",18],["1bitspace.com",18],["1stream.*",18],["1tamilmv.*",18],["2ddl.*",18],["2umovies.*",18],["3dporndude.com",18],["3hiidude.*",18],["4archive.org",18],["4horlover.com",18],["4stream.*",18],["560pmovie.com",18],["5movies.*",18],["7hitmovies.*",18],["85videos.com",18],["9xmovie.*",18],["aagmaal.*",[18,70]],["acefile.co",18],["actusports.eu",18],["adblockeronstape.*",[18,90]],["adblockeronstreamtape.*",18],["adblockplustape.*",[18,90]],["adblockstreamtape.*",[18,90]],["adblockstrtape.*",[18,90]],["adblockstrtech.*",[18,90]],["adblocktape.*",[18,90]],["adclickersbot.com",18],["adcorto.*",18],["adricami.com",18],["adslink.pw",18],["adultstvlive.com",18],["adz7short.space",18],["aeblender.com",18],["affordwonder.net",18],["ahdafnews.blogspot.com",18],["aiblog.tv",[18,73]],["ak47sports.com",18],["akuma.moe",18],["alexsports.*",18],["alexsportss.*",18],["alexsportz.*",18],["allplayer.tk",18],["amateurblog.tv",[18,73]],["androidadult.com",[18,238]],["anhsexjav.xyz",18],["anidl.org",18],["anime-loads.org",18],["animeblkom.net",18],["animefire.plus",18],["animelek.me",18],["animepahe.*",18],["animesanka.*",18],["animesorionvip.net",18],["animespire.net",18],["animestotais.xyz",18],["animeyt.es",18],["animixplay.*",18],["aniplay.*",18],["anroll.net",18],["antiadtape.*",[18,90]],["anymoviess.xyz",18],["aotonline.org",18],["asenshu.com",18],["asialiveaction.com",18],["asianclipdedhd.net",18],["asianclub.*",18],["ask4movie.*",18],["askim-bg.com",18],["asumsikedaishop.com",18],["atomixhq.*",[18,70]],["atomohd.*",18],["avcrempie.com",18],["avseesee.com",18],["gettapeads.com",[18,90]],["bajarjuegospcgratis.com",18],["balkanteka.net",18],["beinmatch.*",[18,26]],["belowporn.com",18],["bestgirlsexy.com",18],["bestnhl.com",18],["bestporncomix.com",18],["bhaai.*",18],["bigwarp.*",18],["bikinbayi.com",18],["bikinitryon.net",18],["birdurls.com",18],["bitsearch.to",18],["blackcockadventure.com",18],["blackcockchurch.org",18],["blackporncrazy.com",18],["blizzboygames.net",18],["blizzpaste.com",18],["blkom.com",18],["blog-peliculas.com",18],["blogtrabalhista.com",18],["blurayufr.*",18],["bobsvagene.club",18],["bokep.im",18],["bokep.top",18],["boyfuck.me",18],["brilian-news.id",18],["brupload.net",18],["buffstreams.*",18],["buzter.xyz",18],["caitlin.top",18],["camchickscaps.com",18],["camgirls.casa",18],["canalesportivo.*",18],["cashurl.in",18],["ccurl.net",[18,70]],["cdn1.site",[18,53]],["charexempire.com",18],["clickndownload.*",18],["clicknupload.*",[18,72]],["clik.pw",18],["coin-free.com",[18,38]],["coins100s.fun",18],["comohoy.com",18],["coolcast2.com",18],["cordneutral.net",18],["coreradio.online",18],["cosplaytab.com",18],["countylocalnews.com",18],["cpmlink.net",18],["crackstreamshd.click",18],["crespomods.com",18],["crisanimex.com",18],["crunchyscan.fr",18],["cuevana3.fan",18],["cuevana3hd.com",18],["cumception.com",18],["cutpaid.com",18],["daddylive.*",[18,70,210]],["daddylivehd.*",[18,70]],["dailyuploads.net",18],["datawav.club",18],["daughtertraining.com",18],["ddrmovies.*",18],["deepgoretube.site",18],["deltabit.co",18],["deporte-libre.top",18],["depvailon.com",18],["derleta.com",18],["desiremovies.*",18],["desivdo.com",18],["desixx.net",18],["detikkebumen.com",18],["deutschepornos.me",18],["devlib.*",18],["diasoft.xyz",18],["directupload.net",18],["divxtotal.*",18],["divxtotal1.*",18],["dixva.com",18],["dlhd.*",[18,210]],["doctormalay.com",18],["dofusports.xyz",18],["doods.cam",18],["doodskin.lat",18],["downloadrips.com",18],["downvod.com",18],["dphunters.mom",18],["dragontranslation.com",18],["dvdfullestrenos.com",18],["dvdplay.*",[18,70]],["dx-tv.com",[18,34]],["ebookbb.com",18],["ebookhunter.net",18],["egyanime.com",18],["egygost.com",18],["ekasiwap.com",18],["electro-torrent.pl",18],["elixx.*",18],["enjoy4k.*",18],["eplayer.click",18],["erovoice.us",18],["eroxxx.us",18],["estrenosdoramas.net",18],["estrenosflix.*",18],["estrenosflux.*",18],["estrenosgo.*",18],["everia.club",18],["everythinginherenet.blogspot.com",18],["extratorrent.st",18],["extremotvplay.com",18],["f1stream.*",18],["fapinporn.com",18],["fapptime.com",18],["fastreams.live",18],["faucethero.com",18],["favoyeurtube.net",18],["fbstream.*",18],["fc2db.com",18],["femdom-joi.com",18],["fenixsite.net",18],["file4go.*",18],["filegram.to",[18,68,73]],["fileone.tv",18],["film1k.com",18],["filmeonline2023.net",18],["filmesonlinex.org",18],["filmesonlinexhd.biz",[18,70]],["filmisub.cc",18],["filmovitica.com",18],["filmymaza.blogspot.com",18],["filmyzilla.*",[18,70]],["filthy.family",18],["findav.*",18],["findporn.*",18],["flickzap.com",18],["flixmaza.*",18],["flizmovies.*",18],["flostreams.xyz",18],["flyfaucet.com",18],["footyhunter.lol",18],["forex-trnd.com",18],["forumchat.club",18],["forumlovers.club",18],["freeomovie.co.in",18],["freeomovie.to",18],["freeporncomic.net",18],["freepornhdonlinegay.com",18],["freeproxy.io",18],["freeshot.live",18],["freetvsports.*",18],["freeuse.me",18],["freeusexporn.com",18],["fsharetv.cc",18],["fsicomics.com",18],["fullymaza.*",18],["g-porno.com",18],["g3g.*",18],["galinhasamurai.com",18],["gamepcfull.com",18],["gamesmountain.com",18],["gamesrepacks.com",18],["gamingguru.fr",18],["gamovideo.com",18],["garota.cf",18],["gaydelicious.com",18],["gaypornhdfree.com",18],["gaypornhot.com",18],["gaypornmasters.com",18],["gaysex69.net",18],["gemstreams.com",18],["get-to.link",18],["girlscanner.org",18],["giurgiuveanul.ro",18],["gledajcrtace.xyz",18],["gocast2.com",18],["gomo.to",18],["gostosa.cf",18],["gotxx.*",18],["grantorrent.*",18],["gratispaste.com",18],["gravureblog.tv",[18,73]],["gupload.xyz",18],["haho.moe",18],["hayhd.net",18],["hdmoviesfair.*",[18,70]],["hdmoviesflix.*",18],["hdpornflix.com",18],["hdsaprevodom.com",18],["hdstreamss.club",18],["hentaiporno.xxx",18],["hentais.tube",18],["hentaistream.co",18],["hentaitk.net",18],["hentaitube.online",18],["hentaiworld.tv",18],["hesgoal.tv",18],["hexupload.net",18],["hhkungfu.tv",18],["highlanderhelp.com",18],["hiidudemoviez.*",18],["hindimovies.to",[18,70]],["hindimoviestv.com",18],["hiperdex.com",18],["hispasexy.org",18],["hitprn.com",18],["hivflix.me",18],["hoca4u.com",18],["hollymoviehd.cc",18],["hoodsite.com",18],["hopepaste.download",18],["hornylips.com",18],["hotgranny.live",18],["hotmama.live",18],["hqcelebcorner.net",18],["huren.best",18],["hwnaturkya.com",[18,70]],["hxfile.co",[18,70]],["igfap.com",18],["iklandb.com",18],["illink.net",18],["imgsen.*",18],["imgsex.xyz",18],["imgsto.*",18],["imgtraffic.com",18],["imx.to",18],["incest.*",18],["incestflix.*",18],["influencersgonewild.org",18],["infosgj.free.fr",18],["investnewsbrazil.com",18],["itdmusics.com",18],["itopmusic.*",18],["itsuseful.site",18],["itunesfre.com",18],["iwatchfriendsonline.net",[18,144]],["japangaysex.com",18],["jav-fun.cc",18],["jav-noni.cc",18],["javboys.tv",18],["javcl.com",18],["jav-coco.com",18],["javhay.net",18],["javhoho.com",18],["javhun.com",18],["javleak.com",18],["javmost.*",18],["javporn.best",18],["javsek.net",18],["javsex.to",18],["javtiful.com",[18,20]],["jimdofree.com",18],["jiofiles.org",18],["jorpetz.com",18],["jp-films.com",18],["jpop80ss3.blogspot.com",18],["jpopsingles.eu",[18,188]],["justfullporn.net",18],["kantotflix.net",18],["kaplog.com",18],["keeplinks.*",18],["keepvid.*",18],["keralahd.*",18],["keralatvbox.com",18],["khatrimazaful.*",18],["khatrimazafull.*",[18,73]],["kickassanimes.io",18],["kimochi.info",18],["kimochi.tv",18],["kinemania.tv",18],["kissasian.*",18],["kolnovel.site",18],["koltry.life",18],["konstantinova.net",18],["koora-online.live",18],["kunmanga.com",18],["kwithsub.com",18],["lat69.me",18],["latinblog.tv",[18,73]],["latinomegahd.net",18],["leechall.*",18],["leechpremium.link",18],["legendas.dev",18],["legendei.net",18],["lighterlegend.com",18],["linclik.com",18],["linkebr.com",18],["linkrex.net",18],["linkshorts.*",18],["lulu.st",18],["lulustream.com",[18,72]],["lulustream.live",18],["luluvdo.com",18],["luluvdoo.com",18],["mangaweb.xyz",18],["mangovideo.*",18],["masahub.com",18],["masahub.net",18],["masaporn.*",18],["maturegrannyfuck.com",18],["mdy48tn97.com",18],["mediapemersatubangsa.com",18],["mega-mkv.com",18],["megapastes.com",18],["megapornpics.com",18],["messitv.net",18],["meusanimes.net",18],["mexa.sh",18],["milfmoza.com",18],["milfnut.*",18],["milfzr.com",18],["millionscast.com",18],["mimaletamusical.blogspot.com",18],["miniurl.*",18],["mirrorace.*",18],["mitly.us",18],["mixdroop.*",18],["mixixxx000000.cyou",18],["mixixxx696969.cyou",18],["mkv-pastes.com",18],["mkvcage.*",18],["mlbstream.*",18],["mlsbd.*",18],["mmsbee.*",18],["monaskuliner.ac.id",18],["moredesi.com",18],["motogpstream.*",18],["moutogami.com",18],["movgotv.net",18],["movi.pk",18],["movieplex.*",18],["movierulzlink.*",18],["movies123.*",18],["moviesflix.*",18],["moviesmeta.*",18],["moviesmod.com.pl",18],["moviessources.*",18],["moviesverse.*",18],["movieswbb.com",18],["moviewatch.com.pk",18],["moviezwaphd.*",18],["mp4upload.com",18],["mrskin.live",18],["mrunblock.*",18],["multicanaistv.com",18],["mundowuxia.com",18],["multicanais.*",18],["myeasymusic.ir",18],["myonvideo.com",18],["myyouporn.com",18],["mzansifun.com",18],["narutoget.info",18],["naughtypiss.com",18],["nbastream.*",18],["nekopoi.*",[18,73]],["nerdiess.com",18],["netfuck.net",18],["new-fs.eu",18],["newmovierulz.*",18],["newtorrentgame.com",18],["neymartv.net",18],["nflstream.*",18],["nflstreams.me",18],["nhlstream.*",18],["nicekkk.com",18],["nicesss.com",18],["nlegs.com",18],["noblocktape.*",[18,90]],["nocensor.*",18],["noni-jav.com",18],["notformembersonly.com",18],["novamovie.net",18],["novelpdf.xyz",18],["novelssites.com",[18,70]],["novelup.top",18],["nsfwr34.com",18],["nu6i-bg-net.com",18],["nudebabesin3d.com",18],["nzbstars.com",18],["o2tvseries.com",18],["ohjav.com",18],["ojearnovelas.com",18],["okanime.xyz",18],["olweb.tv",18],["on9.stream",18],["onepiece-mangaonline.com",18],["onifile.com",18],["onionstream.live",18],["onlinesaprevodom.net",18],["onlyfams.*",18],["onlyfullporn.video",18],["onplustv.live",18],["originporn.com",18],["ouo.*",18],["ovagames.com",18],["palimas.org",18],["password69.com",18],["pastemytxt.com",18],["payskip.org",18],["pctfenix.*",[18,70]],["pctnew.*",[18,70]],["peeplink.in",18],["peliculas24.*",18],["peliculasmx.net",18],["pelisflix20.*",18],["pelisplus.*",18],["pencarian.link",18],["pendidikandasar.net",18],["pervertgirlsvideos.com",18],["pervyvideos.com",18],["phim12h.com",18],["picdollar.com",18],["picsxxxporn.com",18],["pinayscandalz.com",18],["pinkueiga.net",18],["piratebay.*",18],["piratefast.xyz",18],["piratehaven.xyz",18],["pirateiro.com",18],["playtube.co.za",18],["plugintorrent.com",18],["plyjam.*",18],["plylive.*",18],["plyvdo.*",18],["pmvzone.com",18],["porndish.com",18],["pornez.net",18],["pornfetishbdsm.com",18],["pornfits.com",18],["pornhd720p.com",18],["pornhoarder.*",[18,231]],["pornobr.club",18],["pornobr.ninja",18],["pornodominicano.net",18],["pornofaps.com",18],["pornoflux.com",18],["pornotorrent.com.br",18],["pornredit.com",18],["pornstarsyfamosas.es",18],["pornstreams.co",18],["porntn.com",18],["pornxbit.com",18],["pornxday.com",18],["portaldasnovinhas.shop",18],["portugues-fcr.blogspot.com",18],["poseyoung.com",18],["pover.org",18],["prbay.*",18],["projectfreetv.*",18],["proxybit.*",18],["proxyninja.org",18],["psarips.*",18],["pubfilmz.com",18],["publicsexamateurs.com",18],["punanihub.com",18],["pxxbay.com",18],["r18.best",18],["racaty.*",18],["ragnaru.net",18],["rapbeh.net",18],["rapelust.com",18],["rapload.org",18],["read-onepiece.net",18],["readhunters.xyz",18],["remaxhd.*",18],["reshare.pm",18],["retro-fucking.com",18],["retrotv.org",18],["rintor.*",18],["rnbxclusive.*",18],["rnbxclusive0.*",18],["rnbxclusive1.*",18],["robaldowns.com",18],["rockdilla.com",18],["rojadirecta.*",18],["rojadirectaenvivo.*",18],["rojitadirecta.blogspot.com",18],["romancetv.site",18],["rsoccerlink.site",18],["rugbystreams.*",18],["rule34.club",18],["rule34hentai.net",18],["rumahbokep-id.com",18],["sadisflix.*",18],["safego.cc",18],["safetxt.*",18],["sakurafile.com",18],["samax63.lol",18],["satoshi-win.xyz",18],["savefiles.com",[18,68]],["scat.gold",18],["scatfap.com",18],["scatkings.com",18],["serie-turche.com",18],["sexdicted.com",18],["sexgay18.com",18],["sexiezpix.com",18],["sexofilm.co",18],["sextgem.com",18],["sextubebbw.com",18],["sgpics.net",18],["shadowrangers.*",18],["shadowrangers.live",18],["shahee4u.cam",18],["shahi4u.*",18],["shahid4u1.*",18],["shahid4uu.*",18],["shahiid-anime.net",18],["shavetape.*",18],["shemale6.com",18],["shemalegape.net",[18,67]],["shid4u.*",18],["shinden.pl",18],["short.es",18],["shortearn.*",18],["shorten.*",18],["shorttey.*",18],["shortzzy.*",18],["showmanga.blog.fc2.com",18],["shrt10.com",18],["sideplusleaks.net",18],["silverblog.tv",[18,73]],["silverpic.com",18],["sinhalasub.life",18],["sinsitio.site",18],["sinvida.me",18],["skidrowcpy.com",18],["skymovieshd.*",18],["slut.mom",18],["smallencode.me",18],["smoner.com",18],["smplace.com",18],["soccerinhd.com",[18,70]],["socceron.name",18],["socceronline.*",[18,70]],["socialblog.tv",[18,73]],["softairbay.com",18],["softarchive.*",18],["sokobj.com",18],["songsio.com",18],["souexatasmais.com",18],["sportbar.live",18],["sports-stream.*",18],["sportstream1.cfd",18],["sporttuna.*",18],["sporttunatv.*",18],["srt.am",18],["srts.me",18],["sshhaa.*",18],["stapadblockuser.*",[18,90]],["stape.*",[18,90]],["stapewithadblock.*",18],["starblog.tv",[18,73]],["starmusiq.*",18],["stbemuiptv.com",18],["stockingfetishvideo.com",18],["strcloud.*",[18,90]],["stream.crichd.vip",18],["stream.lc",18],["stream25.xyz",18],["streamadblocker.*",[18,70,90]],["streamadblockplus.*",[18,90]],["streambee.to",18],["streambucket.net",18],["streamcdn.*",18],["streamcenter.pro",18],["streamers.watch",18],["streamgo.to",18],["streamhub.*",18],["streamingclic.com",18],["streamkiste.tv",18],["streamoupload.xyz",18],["streamservicehd.click",18],["streamsport.*",18],["streamta.*",[18,90]],["streamtape.*",[18,73,90]],["streamtapeadblockuser.*",[18,90]],["streamvid.net",[18,27]],["strikeout.*",[18,72]],["strtape.*",[18,90]],["strtapeadblock.*",[18,90]],["strtapeadblocker.*",[18,90]],["strtapewithadblock.*",18],["strtpe.*",[18,90]],["subtitleporn.com",18],["subtitles.cam",18],["suicidepics.com",18],["supertelevisionhd.com",18],["supexfeeds.com",18],["swatchseries.*",18],["swiftload.io",18],["swipebreed.net",18],["swzz.xyz",18],["sxnaar.com",18],["tabooflix.*",18],["taboosex.club",18],["tapeantiads.com",[18,90]],["tapeblocker.com",[18,90]],["tapenoads.com",[18,90]],["tapepops.com",[18,73,90]],["tapewithadblock.org",[18,90,272]],["teamos.xyz",18],["teen-wave.com",18],["teenporncrazy.com",18],["telegramgroups.xyz",18],["telenovelasweb.com",18],["tennisstreams.*",18],["tensei-shitara-slime-datta-ken.com",18],["tfp.is",18],["tgo-tv.co",[18,70]],["thaihotmodels.com",18],["theblueclit.com",18],["thebussybandit.com",18],["thedaddy.*",[18,210]],["thelastdisaster.vip",18],["themoviesflix.*",18],["thepiratebay.*",18],["thepiratebay0.org",18],["thepiratebay10.info",18],["thesexcloud.com",18],["thothub.today",18],["tightsexteens.com",18],["tlnovelas.net",18],["tmearn.*",18],["tojav.net",18],["tokusatsuindo.com",18],["toonanime.*",18],["top16.net",18],["topdrama.net",18],["topvideosgay.com",18],["torlock.*",18],["tormalayalam.*",18],["torrage.info",18],["torrents.vip",18],["torrentz2eu.*",18],["torrsexvid.com",18],["tpb-proxy.xyz",18],["trannyteca.com",18],["trendytalker.com",18],["tuktukcinma.com",18],["tumanga.net",18],["turbogvideos.com",18],["turboimagehost.com",18],["turbovid.me",18],["turkishseriestv.org",18],["turksub24.net",18],["tutele.sx",18],["tutelehd.*",18],["tvglobe.me",18],["tvpclive.com",18],["tvply.*",18],["tvs-widget.com",18],["tvseries.video",18],["u4m.*",18],["ucptt.com",18],["ufaucet.online",18],["ufcfight.online",18],["ufcstream.*",18],["ultrahorny.com",18],["ultraten.net",18],["unblocknow.*",18],["unblockweb.me",18],["underhentai.net",18],["uniqueten.net",18],["uns.bio",18],["upbaam.com",18],["uploadbuzz.*",18],["upstream.to",18],["usagoals.*",18],["ustream.to",18],["valhallas.click",[18,143]],["valeriabelen.com",18],["verdragonball.online",18],["vexmoviex.*",18],["vfxmed.com",18],["vidclouds.*",18],["video.az",18],["videostreaming.rocks",18],["videowood.tv",18],["vidlox.*",18],["vidorg.net",18],["vidtapes.com",18],["vidz7.com",18],["vikistream.com",18],["vinovo.to",18],["vipboxtv.*",[18,70]],["vipleague.*",[18,234]],["virpe.cc",18],["visifilmai.org",18],["viveseries.com",18],["vladrustov.sx",18],["volokit2.com",[18,210]],["vstorrent.org",18],["w-hentai.com",18],["watch-series.*",18],["watchbrooklynnine-nine.com",18],["watchelementaryonline.com",18],["watchjavidol.com",18],["watchkobestreams.info",18],["watchlostonline.net",18],["watchmodernfamilyonline.com",18],["watchmonkonline.com",18],["watchrulesofengagementonline.com",18],["watchseries.*",18],["webcamrips.com",18],["wincest.xyz",18],["wolverdon.fun",18],["wordcounter.icu",18],["worldmovies.store",18],["worldstreams.click",18],["wpdeployit.com",18],["wqstreams.tk",18],["wwwsct.com",18],["xanimeporn.com",18],["xblog.tv",[18,73]],["xclusivejams.*",18],["xmoviesforyou.*",18],["xn--verseriesespaollatino-obc.online",18],["xpornium.net",18],["xsober.com",18],["xvip.lat",18],["xxgasm.com",18],["xxvideoss.org",18],["xxx18.uno",18],["xxxdominicana.com",18],["xxxfree.watch",18],["xxxmax.net",18],["xxxwebdlxxx.top",18],["xxxxvideo.uno",18],["yabai.si",18],["yeshd.net",18],["youdbox.*",18],["youjax.com",18],["yourdailypornvideos.ws",18],["yourupload.com",18],["youswear.com",18],["ytmp3eu.*",18],["yts-subs.*",18],["yts.*",18],["ytstv.me",18],["yumeost.net",18],["zerion.cc",18],["zerocoin.top",18],["zitss.xyz",18],["zooqle.*",18],["zpaste.net",18],["hitomi.la",18],["fastreams.com",18],["sky-sports.store",18],["streamsoccer.site",18],["tntsports.store",18],["wowstreams.co",18],["dutchycorp.*",19],["faucet.ovh",19],["mmacore.tv",20],["nxbrew.net",20],["brawlify.com",20],["oko.sh",21],["variety.com",[22,80]],["gameskinny.com",22],["deadline.com",[22,80]],["mlive.com",[22,80]],["washingtonpost.com",23],["gosexpod.com",24],["sexo5k.com",25],["truyen-hentai.com",25],["theshedend.com",27],["zeroupload.com",27],["securenetsystems.net",27],["miniwebtool.com",27],["bchtechnologies.com",27],["eracast.cc",27],["flatai.org",27],["leeapk.com",27],["spiegel.de",28],["jacquieetmichel.net",29],["hausbau-forum.de",30],["althub.club",30],["kiemlua.com",30],["doujindesu.*",31],["atlasstudiousa.com",31],["51bonusrummy.in",[31,73]],["tea-coffee.net",32],["spatsify.com",32],["newedutopics.com",32],["getviralreach.in",32],["edukaroo.com",32],["funkeypagali.com",32],["careersides.com",32],["nayisahara.com",32],["wikifilmia.com",32],["infinityskull.com",32],["viewmyknowledge.com",32],["iisfvirtual.in",32],["starxinvestor.com",32],["jkssbalerts.com",32],["imagereviser.com",33],["veganab.co",34],["camdigest.com",34],["learnmany.in",34],["amanguides.com",[34,40]],["highkeyfinance.com",[34,40]],["appkamods.com",34],["techacode.com",34],["djqunjab.in",34],["downfile.site",34],["expertvn.com",34],["trangchu.news",34],["shemaleraw.com",34],["thecustomrom.com",34],["nulleb.com",34],["snlookup.com",34],["bingotingo.com",34],["ghior.com",34],["3dmili.com",34],["karanpc.com",34],["plc247.com",34],["apkdelisi.net",34],["freepasses.org",34],["poplinks.*",[34,44]],["tomarnarede.pt",34],["basketballbuzz.ca",34],["dribbblegraphics.com",34],["kemiox.com",34],["teksnologi.com",34],["bharathwick.com",34],["descargaspcpro.net",34],["rt3dmodels.com",34],["plc4me.com",34],["blisseyhusbands.com",34],["mhdsports.*",34],["mhdsportstv.*",34],["mhdtvworld.*",34],["mhdtvmax.*",34],["mhdstream.*",34],["madaradex.org",34],["trigonevo.com",34],["franceprefecture.fr",34],["jazbaat.in",34],["aipebel.com",34],["audiotools.blog",34],["embdproxy.xyz",34],["jobzhub.store",[35,36]],["fitdynamos.com",[35,36]],["labgame.io",[35,36]],["kenzo-flowertag.com",37],["mdn.lol",37],["btcbitco.in",38],["btcsatoshi.net",38],["cempakajaya.com",38],["crypto4yu.com",38],["manofadan.com",38],["readbitcoin.org",38],["wiour.com",38],["tremamnon.com",38],["bitsmagic.fun",38],["ourcoincash.xyz",38],["aylink.co",39],["sugarona.com",40],["nishankhatri.xyz",40],["cety.app",41],["exe-urls.com",41],["exego.app",41],["cutlink.net",41],["cutyurls.com",41],["cutty.app",41],["cutnet.net",41],["jixo.online",41],["tinys.click",42],["loan.creditsgoal.com",42],["rupyaworld.com",42],["vahantoday.com",42],["techawaaz.in",42],["loan.bgmi32bitapk.in",42],["formyanime.com",42],["gsm-solution.com",42],["h-donghua.com",42],["hindisubbedacademy.com",42],["hm4tech.info",42],["mydverse.*",42],["panelprograms.blogspot.com",42],["ripexbooster.xyz",42],["serial4.com",42],["tutorgaming.com",42],["everydaytechvams.com",42],["dipsnp.com",42],["cccam4sat.com",42],["diendancauduong.com",42],["zeemoontv-24.blogspot.com",42],["stitichsports.com",42],["aiimgvlog.fun",43],["appsbull.com",44],["diudemy.com",44],["maqal360.com",44],["androjungle.com",44],["bookszone.in",44],["shortix.co",44],["makefreecallsonline.com",44],["msonglyrics.com",44],["app-sorteos.com",44],["bokugents.com",44],["client.pylexnodes.net",44],["btvplus.bg",44],["listar-mc.net",44],["blog24.me",[45,46]],["coingraph.us",47],["impact24.us",47],["iconicblogger.com",48],["auto-crypto.click",48],["tpi.li",49],["oii.la",[49,72]],["shrinke.*",50],["shrinkme.*",50],["smutty.com",50],["e-sushi.fr",50],["gayforfans.com",50],["freeadultcomix.com",50],["down.dataaps.com",50],["filmweb.pl",[50,183]],["livecamrips.*",50],["safetxt.net",50],["filespayouts.com",50],["atglinks.com",51],["kbconlinegame.com",52],["hamrojaagir.com",52],["odijob.com",52],["stfly.biz",53],["airevue.net",53],["atravan.net",53],["simana.online",54],["fooak.com",54],["joktop.com",54],["evernia.site",54],["falpus.com",54],["rfiql.com",55],["gujjukhabar.in",55],["smartfeecalculator.com",55],["djxmaza.in",55],["thecubexguide.com",55],["jytechs.in",55],["financacerta.com",56],["encurtads.net",56],["mastkhabre.com",57],["weshare.is",58],["vi-music.app",59],["instanders.app",59],["rokni.xyz",59],["keedabankingnews.com",59],["pig69.com",59],["cosplay18.pics",[59,259]],["3dsfree.org",60],["up4load.com",61],["alpin.de",62],["boersennews.de",62],["chefkoch.de",62],["chip.de",62],["clever-tanken.de",62],["desired.de",62],["donnerwetter.de",62],["fanfiktion.de",62],["focus.de",62],["formel1.de",62],["frustfrei-lernen.de",62],["gewinnspiele.tv",62],["giga.de",62],["gut-erklaert.de",62],["kino.de",62],["messen.de",62],["nickles.de",62],["nordbayern.de",62],["spielfilm.de",62],["teltarif.de",[62,63]],["unsere-helden.com",62],["weltfussball.at",62],["watson.de",62],["mactechnews.de",62],["sport1.de",62],["welt.de",62],["sport.de",62],["allthingsvegas.com",64],["100percentfedup.com",64],["beforeitsnews.com",64],["concomber.com",64],["conservativefiringline.com",64],["dailylol.com",64],["funnyand.com",64],["letocard.fr",64],["mamieastuce.com",64],["meilleurpronostic.fr",64],["patriotnationpress.com",64],["toptenz.net",64],["vitamiiin.com",64],["writerscafe.org",64],["populist.press",64],["dailytruthreport.com",64],["livinggospeldaily.com",64],["first-names-meanings.com",64],["welovetrump.com",64],["thehayride.com",64],["thelibertydaily.com",64],["thepoke.co.uk",64],["thepolitistick.com",64],["theblacksphere.net",64],["shark-tank.com",64],["naturalblaze.com",64],["greatamericanrepublic.com",64],["dailysurge.com",64],["truthlion.com",64],["flagandcross.com",64],["westword.com",64],["republicbrief.com",64],["freedomfirstnetwork.com",64],["phoenixnewtimes.com",64],["designbump.com",64],["clashdaily.com",64],["madworldnews.com",64],["reviveusa.com",64],["sonsoflibertymedia.com",64],["thedesigninspiration.com",64],["videogamesblogger.com",64],["protrumpnews.com",64],["thepalmierireport.com",64],["kresy.pl",64],["thepatriotjournal.com",64],["thegatewaypundit.com",64],["wltreport.com",64],["miaminewtimes.com",64],["politicalsignal.com",64],["rightwingnews.com",64],["bigleaguepolitics.com",64],["comicallyincorrect.com",64],["upornia.com",65],["pillowcase.su",66],["akaihentai.com",67],["cine-calidad.*",67],["fastpic.org",[67,73]],["forums.socialmediagirls.com",[67,73]],["monoschino2.com",67],["saradahentai.com",67],["veryfreeporn.com",67],["pornoenspanish.es",67],["theporngod.com",67],["besthdgayporn.com",68],["drivenime.com",68],["erothots1.com",68],["javup.org",68],["madouqu.com",68],["shemaleup.net",68],["transflix.net",68],["worthcrete.com",68],["hentaihere.com",69],["player.smashy.stream",69],["player.smashystream.com",69],["123movies.*",70],["123moviesla.*",70],["123movieweb.*",70],["2embed.*",70],["9xmovies.*",70],["adsh.cc",70],["adshort.*",70],["afilmyhouse.blogspot.com",70],["ak.sv",70],["allmovieshub.*",70],["api.webs.moe",70],["apkmody.io",70],["asianplay.*",70],["atishmkv.*",70],["backfirstwo.site",70],["bflix.*",70],["crazyblog.in",70],["cricstream.*",70],["crictime.*",70],["cuervotv.me",70],["divicast.com",70],["dood.*",[70,189]],["dooood.*",[70,189]],["embed.meomeo.pw",70],["extramovies.*",70],["faselhd.*",70],["faselhds.*",70],["filemoon.*",70],["filmeserialeonline.org",70],["filmy.*",70],["filmyhit.*",70],["filmywap.*",70],["flexyhit.com",70],["fmovies.*",70],["foreverwallpapers.com",70],["french-streams.cc",70],["gdplayer.*",70],["goku.*",70],["gomovies.*",70],["gowatchseries.*",70],["hdfungamezz.*",70],["hdtoday.to",70],["hinatasoul.com",70],["hindilinks4u.*",70],["hurawatch.*",[70,217]],["igg-games.com",70],["infinityscans.net",70],["jalshamoviezhd.*",70],["livecricket.*",70],["mangareader.to",70],["mhdsport.*",70],["mkvcinemas.*",70],["movies2watch.*",70],["moviespapa.*",70],["mp3juice.info",70],["mp4moviez.*",70],["mydownloadtube.*",70],["myflixerz.to",70],["nowmetv.net",70],["nowsportstv.com",70],["nuroflix.*",70],["nxbrew.com",70],["o2tvseries.*",70],["o2tvseriesz.*",70],["oii.io",70],["paidshitforfree.com",70],["pepperlive.info",70],["pirlotv.*",70],["playertv.net",70],["poscitech.*",70],["primewire.*",70],["redecanais.*",70],["roystream.com",70],["rssing.com",70],["s.to",70],["serienstream.*",70],["sflix.*",70],["shahed4u.*",70],["shaheed4u.*",70],["share.filesh.site",70],["sharkfish.xyz",70],["skidrowcodex.net",70],["smartermuver.com",70],["speedostream.*",70],["sportcast.*",70],["sportskart.*",70],["stream4free.live",70],["streamingcommunity.*",[70,72,110]],["tamilarasan.*",70],["tamilfreemp3songs.*",70],["tamilmobilemovies.in",70],["tamilprinthd.*",70],["tapeadsenjoyer.com",[70,73,90]],["thewatchseries.live",70],["tnmusic.in",70],["torrentdosfilmes.*",70],["travelplanspro.com",70],["tubemate.*",70],["tusfiles.com",70],["tutlehd4.com",70],["twstalker.com",70],["uploadrar.*",70],["uqload.*",70],["vid-guard.com",70],["vidcloud9.*",70],["vido.*",70],["vidoo.*",70],["vidsaver.net",70],["vidspeeds.com",70],["viralitytoday.com",70],["voiranime.stream",70],["vudeo.*",70],["vumoo.*",70],["watchdoctorwhoonline.com",70],["watchomovies.*",[70,107]],["watchserie.online",70],["woxikon.in",70],["www-y2mate.com",70],["yesmovies.*",70],["ylink.bid",70],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",70],["kickassanime.*",71],["11xmovies.*",72],["cinego.tv",72],["dokoembed.pw",72],["ev01.to",72],["fojik.*",72],["fstream365.com",72],["fzmovies.*",72],["linkz.*",72],["minoplres.xyz",72],["mostream.us",72],["moviedokan.*",72],["myflixer.*",72],["prmovies.*",72],["readcomiconline.li",72],["s3embtaku.pro",72],["sflix2.to",72],["sportshub.stream",72],["streamblasters.*",72],["topcinema.cam",72],["webxzplay.cfd",72],["zonatmo.com",72],["animesaturn.cx",72],["filecrypt.*",72],["hunterscomics.com",72],["aniwave.uk",72],["dojing.net",73],["javsubindo.com",73],["krx18.com",73],["loadx.ws",73],["mangaforfree.com",73],["pornx.to",73],["savefiles.*",[73,250]],["shavetape.cash",73],["strcloud.club",73],["strcloud.site",73],["streampoi.com",73],["strmup.to",[73,143]],["up4stream.com",[73,107]],["ups2up.fun",[73,107]],["videq.stream",73],["xmegadrive.com",73],["rahim-soft.com",73],["x-video.tube",73],["rubystm.com",73],["rubyvid.com",73],["rubyvidhub.com",73],["stmruby.com",73],["streamruby.com",73],["poophd.cc",73],["windowsreport.com",73],["fuckflix.click",73],["bi-girl.net",74],["ftuapps.*",74],["hentaiseason.com",74],["hoodtrendspredict.com",74],["marcialhub.xyz",74],["odiadance.com",74],["osteusfilmestuga.online",74],["ragnarokscanlation.opchapters.com",74],["sampledrive.org",74],["showflix.*",74],["swordalada.org",74],["tvappapk.com",74],["twobluescans.com",[74,75]],["varnascan.xyz",74],["bibliopanda.visblog.online",76],["hallofseries.com",76],["luciferdonghua.in",76],["truyentranhfull.net",76],["fcportables.com",76],["repack-games.com",76],["ibooks.to",76],["blog.tangwudi.com",76],["filecatchers.com",76],["babaktv.com",76],["samchui.com",77],["sandrarose.com",77],["sherdog.com",77],["sidereel.com",77],["silive.com",77],["simpleflying.com",77],["sloughexpress.co.uk",77],["spacenews.com",77],["sportsgamblingpodcast.com",77],["spotofteadesigns.com",77],["stacysrandomthoughts.com",77],["ssnewstelegram.com",77],["superherohype.com",[77,80]],["tablelifeblog.com",77],["thebeautysection.com",77],["thecelticblog.com",77],["thecurvyfashionista.com",77],["thefashionspot.com",77],["thegamescabin.com",77],["thenerdyme.com",77],["thenonconsumeradvocate.com",77],["theprudentgarden.com",77],["thethings.com",77],["timesnews.net",77],["topspeed.com",77],["toyotaklub.org.pl",77],["travelingformiles.com",77],["tutsnode.org",77],["viralviralvideos.com",77],["wannacomewith.com",77],["wimp.com",[77,80]],["windsorexpress.co.uk",77],["woojr.com",77],["worldoftravelswithkids.com",77],["worldsurfleague.com",77],["cheatsheet.com",78],["pwinsider.com",78],["c-span.org",79],["15min.lt",80],["247sports.com",80],["abc17news.com",80],["agrodigital.com",80],["al.com",80],["aliontherunblog.com",80],["allaboutthetea.com",80],["allmovie.com",80],["allmusic.com",80],["allthingsthrifty.com",80],["amessagewithabottle.com",80],["artforum.com",80],["artnews.com",80],["awkward.com",80],["barcablaugranes.com",80],["barnsleychronicle.com",80],["bethcakes.com",80],["betweenenglandandiowa.com",80],["bgr.com",80],["blazersedge.com",80],["blogher.com",80],["blu-ray.com",80],["bluegraygal.com",80],["briefeguru.de",80],["brobible.com",80],["cagesideseats.com",80],["cbsnews.com",80],["cbssports.com",[80,255]],["celiacandthebeast.com",80],["chaptercheats.com",80],["cleveland.com",80],["clickondetroit.com",80],["commercialcompetentedigitale.ro",80],["dailydot.com",80],["dailykos.com",80],["dailyvoice.com",80],["danslescoulisses.com",80],["decider.com",80],["didyouknowfacts.com",80],["dogtime.com",80],["dpreview.com",80],["ebaumsworld.com",80],["eldiariony.com",80],["fark.com",80],["femestella.com",80],["fmradiofree.com",80],["free-power-point-templates.com",80],["freeconvert.com",80],["frogsandsnailsandpuppydogtail.com",80],["funtasticlife.com",80],["fwmadebycarli.com",80],["golfdigest.com",80],["gulflive.com",80],["hollywoodreporter.com",80],["homeglowdesign.com",80],["honeygirlsworld.com",80],["ibtimes.co.in",80],["imgur.com",80],["indiewire.com",80],["intouchweekly.com",80],["jasminemaria.com",80],["kens5.com",80],["kion546.com",80],["knowyourmeme.com",80],["last.fm",80],["lehighvalleylive.com",80],["lettyskitchen.com",80],["lifeandstylemag.com",80],["lifeinleggings.com",80],["lizzieinlace.com",80],["localnews8.com",80],["lonestarlive.com",80],["madeeveryday.com",80],["maidenhead-advertiser.co.uk",80],["mandatory.com",80],["mardomreport.net",80],["masslive.com",80],["melangery.com",80],["miamiherald.com",80],["mmamania.com",80],["momtastic.com",80],["mostlymorgan.com",80],["motherwellmag.com",80],["musicfeeds.com.au",80],["naszemiasto.pl",80],["nationalpost.com",80],["nationalreview.com",80],["nbcsports.com",80],["news.com.au",80],["ninersnation.com",80],["nj.com",80],["nordot.app",80],["nothingbutnewcastle.com",80],["nsjonline.com",80],["nypost.com",80],["observer.com",80],["oregonlive.com",80],["pagesix.com",80],["patheos.com",80],["pennlive.com",80],["pep.ph",[80,85]],["playstationlifestyle.net",80],["puckermom.com",80],["reelmama.com",80],["rlfans.com",80],["robbreport.com",80],["rollingstone.com",80],["royalmailchat.co.uk",80],["sbnation.com",80],["sheknows.com",80],["sneakernews.com",80],["sourcingjournal.com",80],["sport-fm.gr",80],["stylecaster.com",80],["syracuse.com",80],["tastingtable.com",80],["thedailymeal.com",80],["theflowspace.com",80],["themarysue.com",80],["timesofisrael.com",80],["tokfm.pl",80],["torontosun.com",80],["tvline.com",80],["usmagazine.com",80],["wallup.net",80],["weather.com",80],["worldstar.com",80],["worldstarhiphop.com",80],["wwd.com",80],["wzzm13.com",80],["yourcountdown.to",80],["automobile-catalog.com",[81,82,83]],["baseballchannel.jp",[81,82]],["forum.mobilism.me",81],["gentosha-go.com",81],["hang.hu",81],["hoyme.jp",81],["motorbikecatalog.com",[81,82,83]],["pons.com",81],["wisevoter.com",81],["topstarnews.net",81],["islamicfinder.org",81],["secure-signup.net",81],["dramabeans.com",81],["dropgame.jp",[81,82]],["manta.com",81],["tportal.hr",81],["tvtropes.org",81],["convertcase.net",81],["uranai.nosv.org",82],["yakkun.com",82],["24sata.hr",82],["373news.com",82],["alc.co.jp",82],["allthetests.com",82],["animanch.com",82],["aniroleplay.com",82],["apkmirror.com",[82,187]],["areaconnect.com",82],["as-web.jp",82],["aucfree.com",82],["autoby.jp",82],["autoc-one.jp",82],["autofrage.net",82],["bab.la",82],["babla.*",82],["bien.hu",82],["boredpanda.com",82],["carscoops.com",82],["cesoirtv.com",82],["chanto.jp.net",82],["cinetrafic.fr",82],["cocokara-next.com",82],["collinsdictionary.com",82],["computerfrage.net",82],["crosswordsolver.com",82],["cruciverba.it",82],["cults3d.com",82],["daily.co.jp",82],["dailynewshungary.com",82],["dayspedia.com",82],["dictionary.cambridge.org",82],["dictionnaire.lerobert.com",82],["dnevno.hr",82],["dreamchance.net",82],["drweil.com",82],["dziennik.pl",82],["eigachannel.jp",82],["ev-times.com",82],["finanzfrage.net",82],["footballchannel.jp",82],["forsal.pl",82],["freemcserver.net",82],["fxstreet-id.com",82],["fxstreet-vn.com",82],["fxstreet.*",82],["game8.jp",82],["gardeningsoul.com",82],["gazetaprawna.pl",82],["gesundheitsfrage.net",82],["gifu-np.co.jp",82],["gigafile.nu",82],["globalrph.com",82],["golf-live.at",82],["grapee.jp",82],["gutefrage.net",82],["hb-nippon.com",82],["heureka.cz",82],["horairesdouverture24.fr",82],["hotcopper.co.nz",82],["hotcopper.com.au",82],["idokep.hu",82],["indiatimes.com",82],["infor.pl",82],["iza.ne.jp",82],["j-cast.com",82],["j-town.net",82],["j7p.jp",82],["jablickar.cz",82],["javatpoint.com",82],["jikayosha.jp",82],["judgehype.com",82],["kinmaweb.jp",82],["km77.com",82],["kobe-journal.com",82],["kreuzwortraetsel.de",82],["kurashinista.jp",82],["kurashiru.com",82],["kyoteibiyori.com",82],["lacuarta.com",82],["lakeshowlife.com",82],["laleggepertutti.it",82],["langenscheidt.com",82],["laposte.net",82],["lawyersgunsmoneyblog.com",82],["ldoceonline.com",82],["listentotaxman.com",82],["livenewschat.eu",82],["luremaga.jp",82],["mahjongchest.com",82],["mainichi.jp",82],["maketecheasier.com",[82,83]],["malaymail.com",82],["mamastar.jp",82],["mathplayzone.com",82],["meteo60.fr",82],["midhudsonnews.com",82],["minesweeperquest.com",82],["minkou.jp",82],["modhub.us",82],["moin.de",82],["motorradfrage.net",82],["motscroises.fr",82],["muragon.com",82],["nana-press.com",82],["natalie.mu",82],["nationaltoday.com",82],["nbadraft.net",82],["news.zerkalo.io",82],["newsinlevels.com",82],["newsweekjapan.jp",82],["niketalk.com",82],["nikkan-gendai.com",82],["nouvelobs.com",82],["nyitvatartas24.hu",82],["oeffnungszeitenbuch.de",82],["onlineradiobox.com",82],["operawire.com",82],["optionsprofitcalculator.com",82],["oraridiapertura24.it",82],["oxfordlearnersdictionaries.com",82],["palabr.as",82],["pashplus.jp",82],["persoenlich.com",82],["petitfute.com",82],["play-games.com",82],["powerpyx.com",82],["pptvhd36.com",82],["profitline.hu",82],["puzzlegarage.com",82],["quefaire.be",82],["radio-australia.org",82],["radio-osterreich.at",82],["raetsel-hilfe.de",82],["ranking.net",82],["references.be",82],["reisefrage.net",82],["relevantmagazine.com",82],["reptilesmagazine.com",82],["roleplayer.me",82],["rostercon.com",82],["samsungmagazine.eu",82],["sankei.com",82],["sanspo.com",82],["scribens.com",82],["scribens.fr",82],["slashdot.org",82],["soccerdigestweb.com",82],["solitairehut.com",82],["sourceforge.net",[82,86]],["southhemitv.com",82],["sportalkorea.com",82],["sportlerfrage.net",82],["syosetu.com",82],["szamoldki.hu",82],["talkwithstranger.com",82],["the-crossword-solver.com",82],["thedigestweb.com",82],["traicy.com",82],["transparentcalifornia.com",82],["transparentnevada.com",82],["trilltrill.jp",82],["tunebat.com",82],["tvtv.ca",82],["tvtv.us",82],["tweaktown.com",82],["twn.hu",82],["tyda.se",82],["ufret.jp",82],["uptodown.com",82],["verkaufsoffener-sonntag.com",82],["vimm.net",82],["wamgame.jp",82],["watchdocumentaries.com",82],["webdesignledger.com",82],["wetteronline.de",82],["wfmz.com",82],["winfuture.de",82],["word-grabber.com",82],["worldjournal.com",82],["wort-suchen.de",82],["woxikon.*",82],["young-machine.com",82],["yugioh-starlight.com",82],["yutura.net",82],["zagreb.info",82],["zakzak.co.jp",82],["2chblog.jp",82],["2monkeys.jp",82],["46matome.net",82],["akb48glabo.com",82],["akb48matomemory.com",82],["alfalfalfa.com",82],["all-nationz.com",82],["anihatsu.com",82],["aqua2ch.net",82],["blog.esuteru.com",82],["blog.livedoor.jp",82],["blog.jp",82],["blogo.jp",82],["chaos2ch.com",82],["choco0202.work",82],["crx7601.com",82],["danseisama.com",82],["dareda.net",82],["digital-thread.com",82],["doorblog.jp",82],["exawarosu.net",82],["fgochaldeas.com",82],["football-2ch.com",82],["gekiyaku.com",82],["golog.jp",82],["hacchaka.net",82],["heartlife-matome.com",82],["liblo.jp",82],["fesoku.net",82],["fiveslot777.com",82],["gamejksokuhou.com",82],["girlsreport.net",82],["girlsvip-matome.com",82],["grasoku.com",82],["gundamlog.com",82],["honyaku-channel.net",82],["ikarishintou.com",82],["imas-cg.net",82],["imihu.net",82],["inutomo11.com",82],["itainews.com",82],["itaishinja.com",82],["jin115.com",82],["jisaka.com",82],["jnews1.com",82],["jumpsokuhou.com",82],["jyoseisama.com",82],["keyakizaka46matomemory.net",82],["kidan-m.com",82],["kijoden.com",82],["kijolariat.net",82],["kijolifehack.com",82],["kijomatomelog.com",82],["kijyokatu.com",82],["kijyomatome.com",82],["kijyomatome-ch.com",82],["kijyomita.com",82],["kirarafan.com",82],["kitimama-matome.net",82],["kitizawa.com",82],["konoyubitomare.jp",82],["kotaro269.com",82],["kyousoku.net",82],["ldblog.jp",82],["livedoor.biz",82],["livedoor.blog",82],["majikichi.com",82],["matacoco.com",82],["matomeblade.com",82],["matomelotte.com",82],["matometemitatta.com",82],["mojomojo-licarca.com",82],["morikinoko.com",82],["nandemo-uketori.com",82],["netatama.net",82],["news-buzz1.com",82],["news30over.com",82],["nishinippon.co.jp",82],["nmb48-mtm.com",82],["norisoku.com",82],["npb-news.com",82],["ocsoku.com",82],["okusama-kijyo.com",82],["onecall2ch.com",82],["onihimechan.com",82],["orusoku.com",82],["otakomu.jp",82],["otoko-honne.com",82],["oumaga-times.com",82],["outdoormatome.com",82],["pachinkopachisro.com",82],["paranormal-ch.com",82],["recosoku.com",82],["s2-log.com",82],["saikyo-jump.com",82],["shuraba-matome.com",82],["ske48matome.net",82],["squallchannel.com",82],["sukattojapan.com",82],["sumaburayasan.com",82],["sutekinakijo.com",82],["usi32.com",82],["uwakich.com",82],["uwakitaiken.com",82],["vault76.info",82],["vipnews.jp",82],["vippers.jp",82],["vipsister23.com",82],["vtubernews.jp",82],["watarukiti.com",82],["world-fusigi.net",82],["zakuzaku911.com",82],["zch-vip.com",82],["interfootball.co.kr",83],["a-ha.io",83],["cboard.net",83],["jjang0u.com",83],["joongdo.co.kr",83],["viva100.com",83],["gamingdeputy.com",83],["alle-tests.nl",83],["tweaksforgeeks.com",83],["m.inven.co.kr",83],["mlbpark.donga.com",83],["meconomynews.com",83],["brandbrief.co.kr",83],["motorgraph.com",83],["bleepingcomputer.com",84],["pravda.com.ua",84],["ap7am.com",85],["cinema.com.my",85],["dolldivine.com",85],["giornalone.it",85],["iplocation.net",85],["jamaicajawapos.com",85],["jutarnji.hr",85],["kompasiana.com",85],["mediaindonesia.com",85],["niice-woker.com",85],["slobodnadalmacija.hr",85],["upmedia.mg",85],["mentalfloss.com",87],["hentaivost.fr",88],["isgfrm.com",89],["advertisertape.com",90],["tapeadvertisement.com",90],["tapelovesads.org",90],["watchadsontape.com",90],["vosfemmes.com",91],["voyeurfrance.net",91],["hyundaitucson.info",92],["exambd.net",93],["cgtips.org",94],["freewebcart.com",95],["freemagazines.top",95],["siamblockchain.com",95],["emuenzen.de",96],["kickass.*",97],["unblocked.id",99],["listendata.com",100],["7xm.xyz",100],["fastupload.io",100],["azmath.info",100],["wouterplanet.com",101],["xenvn.com",102],["pfps.gg",103],["4kporn.xxx",104],["androidacy.com",105],["4porn4.com",106],["bestpornflix.com",107],["freeroms.com",107],["andhrafriends.com",107],["723qrh1p.fun",107],["98zero.com",108],["mediaset.es",108],["updatewallah.in",108],["hwbusters.com",108],["beatsnoop.com",109],["fetchpik.com",109],["hackerranksolution.in",109],["camsrip.com",109],["file.org",109],["btcbunch.com",111],["teachoo.com",[112,113]],["mafiatown.pl",114],["bitcotasks.com",115],["hilites.today",116],["udvl.com",117],["www.chip.de",[118,119,120,121]],["topsporter.net",122],["sportshub.to",122],["myanimelist.net",123],["unofficialtwrp.com",124],["codec.kyiv.ua",124],["kimcilonlyofc.com",124],["bitcosite.com",125],["bitzite.com",125],["teluguflix.*",126],["hacoos.com",127],["watchhentai.net",128],["hes-goals.io",128],["pkbiosfix.com",128],["casi3.xyz",128],["zefoy.com",129],["mailgen.biz",130],["tempinbox.xyz",130],["vidello.net",131],["newscon.org",132],["yunjiema.top",132],["pcgeeks-games.com",132],["resizer.myct.jp",133],["gametohkenranbu.sakuraweb.com",134],["jisakuhibi.jp",135],["rank1-media.com",135],["lifematome.blog",136],["fm.sekkaku.net",137],["dvdrev.com",138],["betweenjpandkr.blog",139],["nft-media.net",140],["ghacks.net",141],["leak.sx",142],["paste.bin.sx",142],["pornleaks.in",142],["aliezstream.pro",143],["daddy-stream.xyz",143],["daddylive1.*",143],["esportivos.*",143],["instream.pro",143],["mylivestream.pro",143],["poscitechs.*",143],["powerover.online",143],["sportea.link",143],["sportsurge.stream",143],["ufckhabib.com",143],["ustream.pro",143],["animeshqip.site",143],["apkship.shop",143],["buzter.pro",143],["enjoysports.bond",143],["filedot.to",143],["foreverquote.xyz",143],["hdstream.one",143],["kingstreamz.site",143],["live.fastsports.store",143],["livesnow.me",143],["livesports4u.pw",143],["masterpro.click",143],["nuxhallas.click",143],["papahd.info",143],["rgshows.me",143],["sportmargin.live",143],["sportmargin.online",143],["sportsloverz.xyz",143],["supertipzz.online",143],["totalfhdsport.xyz",143],["ultrastreamlinks.xyz",143],["usgate.xyz",143],["webmaal.cfd",143],["wizistreamz.xyz",143],["educ4m.com",143],["fromwatch.com",143],["visualnewshub.com",143],["khoaiphim.com",145],["haafedk2.com",146],["jovemnerd.com.br",147],["totalcsgo.com",148],["manysex.com",149],["gaminginfos.com",150],["tinxahoivn.com",151],["m.4khd.com",152],["westmanga.*",152],["automoto.it",153],["fordownloader.com",154],["codelivly.com",155],["tchatche.com",156],["cryptoearns.com",156],["lordchannel.com",157],["novelhall.com",158],["bagi.co.in",159],["keran.co",159],["biblestudytools.com",160],["christianheadlines.com",160],["ibelieve.com",160],["kuponigo.com",161],["inxxx.com",162],["bemyhole.com",162],["embedwish.com",163],["leakslove.net",163],["jenismac.com",164],["vxetable.cn",165],["nizarstream.com",166],["donghuaworld.com",167],["letsdopuzzles.com",168],["rediff.com",169],["igay69.com",170],["dzapk.com",171],["darknessporn.com",172],["familyporner.com",172],["freepublicporn.com",172],["pisshamster.com",172],["punishworld.com",172],["xanimu.com",172],["tainio-mania.online",173],["eroticmoviesonline.me",174],["series9movies.com",174],["teleclub.xyz",175],["ecamrips.com",176],["showcamrips.com",176],["tucinehd.com",177],["9animetv.to",178],["qiwi.gg",179],["jornadaperfecta.com",180],["loseart.com",181],["sousou-no-frieren.com",182],["unite-guide.com",184],["thebullspen.com",185],["receitasdaora.online",186],["hiraethtranslation.com",188],["all3do.com",189],["d0000d.com",189],["d000d.com",189],["d0o0d.com",189],["do0od.com",189],["do7go.com",189],["doods.*",189],["doodstream.*",189],["dooodster.com",189],["doply.net",189],["ds2play.com",189],["ds2video.com",189],["vidply.com",189],["vide0.net",189],["vvide0.com",189],["xfreehd.com",190],["freethesaurus.com",191],["thefreedictionary.com",191],["dexterclearance.com",192],["x86.co.kr",193],["onlyfaucet.com",194],["x-x-x.tube",195],["fdownloader.net",196],["thehackernews.com",197],["mielec.pl",198],["treasl.com",199],["mrbenne.com",200],["cnpics.org",[201,259]],["ovabee.com",201],["porn4f.com",201],["cnxx.me",[201,259]],["ai18.pics",[201,259]],["sportsonline.si",202],["fiuxy2.co",203],["animeunity.to",204],["tokopedia.com",205],["remixsearch.net",206],["remixsearch.es",206],["onlineweb.tools",206],["sharing.wtf",206],["2024tv.ru",207],["modrinth.com",208],["curseforge.com",208],["xnxxcom.xyz",209],["sportsurge.net",210],["joyousplay.xyz",210],["quest4play.xyz",[210,212]],["generalpill.net",210],["moneycontrol.com",211],["cookiewebplay.xyz",212],["ilovetoplay.xyz",212],["streamcaster.live",212],["weblivehdplay.ru",212],["nontongo.win",213],["m9.news",214],["callofwar.com",215],["secondhandsongs.com",216],["nohost.one",217],["vidbinge.com",217],["send.cm",218],["send.now",218],["3rooodnews.net",219],["xxxbfvideo.net",220],["filmy4wap.co.in",221],["filmy4waps.org",221],["gameshop4u.com",222],["regenzi.site",222],["historicaerials.com",223],["handirect.fr",224],["animefenix.tv",225],["fsiblog3.club",226],["kamababa.desi",226],["sat-sharing.com",226],["getfiles.co.uk",227],["genelify.com",228],["dhtpre.com",229],["xbaaz.com",230],["lineupexperts.com",232],["fearmp4.ru",233],["buffsports.*",234],["fbstreams.*",234],["wavewalt.me",234],["m.shuhaige.net",235],["streamingnow.mov",236],["thesciencetoday.com",237],["sportnews.to",237],["ghbrisk.com",239],["iplayerhls.com",239],["bacasitus.com",240],["katoikos.world",240],["abstream.to",241],["pawastreams.pro",242],["rebajagratis.com",243],["tv.latinlucha.es",243],["fetcheveryone.com",244],["reviewdiv.com",245],["laurelberninteriors.com",246],["godlike.com",247],["godlikeproductions.com",247],["bestsportslive.org",248],["bestreamsports.org",249],["streamhls.to",251],["xmalay1.net",252],["letemsvetemapplem.eu",253],["pc-builds.com",254],["watch-dbz57.funonline.co.in",256],["live4all.net",257],["pokemon-project.com",258],["3minx.com",259],["555fap.com",259],["blackwidof.org",259],["fc2ppv.stream",259],["hentai4f.com",259],["hentaipig.com",259],["javball.com",259],["javbee.vip",259],["javring.com",259],["javsunday.com",259],["kin8-av.com",259],["porn4f.org",259],["sweetie-fox.com",259],["xcamcovid.com",259],["moviesonlinefree.*",260],["fileszero.com",261],["viralharami.com",261],["wstream.cloud",261],["bmamag.com",262],["bmacanberra.wpcomstaging.com",262],["cinemastervip.com",263],["mmsbee42.com",264],["mmsmasala.com",264],["andrenalynrushplay.cfd",265],["fnjplay.xyz",265],["cefirates.com",266],["comicleaks.com",266],["tapmyback.com",266],["ping.gg",266],["nookgaming.com",266],["creatordrop.com",266],["bitdomain.biz",266],["fort-shop.kiev.ua",266],["accuretawealth.com",266],["resourceya.com",266],["tracktheta.com",266],["adaptive.marketing",266],["camberlion.com",266],["trybawaryjny.pl",266],["segops.madisonspecs.com",266],["stresshelden-coaching.de",266],["controlconceptsusa.com",266],["ryaktive.com",266],["tip.etip-staging.etip.io",266],["future-fortune.com",267],["furucombo.app",267],["bolighub.dk",267],["intercity.technology",268],["freelancer.taxmachine.be",268],["adria.gg",268],["fjlaboratories.com",268],["abhijith.page",268],["helpmonks.com",268],["dataunlocker.com",269],["proboards.com",270],["winclassic.net",270],["farmersjournal.ie",271]]);
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
