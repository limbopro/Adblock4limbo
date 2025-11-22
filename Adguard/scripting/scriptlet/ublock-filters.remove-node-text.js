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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","adserverDomain","excludes","debugger"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script",".onerror"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/exoloader/i"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","sandbox"],["script","var FingerprintJS="],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","adsBlocked"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","/\\(async\\(\\)=>\\{try\\{(const|var)/"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","\"data-sdk\""],["script","/wcomAdBlock|error-report\\.com/"],["script","head.appendChild.bind"],["script","/^\\(async\\(\\)=>\\{function.{1,200}head.{1,100}\\.bind.{1,900}location\\.href.{1,100}\\}\\)\\(\\);$/"],["script","\"https://html-load.com/loader.min.js\""],["script","await eval"],["script","domain=?eventId=&error="],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["script","_cpv"],["script","pingUrl"],["script","ads"],["script","_ADX_"],["script","dataLayer"],["script","location.href"],["script","div.offsetHeight"],["script","/bait/i"],["script","/adbl|RegExp/i"],["script","/popup|arrDirectLink/"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{3}\\)\\]\\; \\}  \\}/"],["script","/\\\",\\\"clickp\\\"\\:[0-9]{1,2}\\}\\;/"],["script","textContent"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","popundersPerIP"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","'hidden'"],["script","kmtAdsData"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/getComputedStyle|overlay/"],["script","/videoAssetId.+introSplashVideo.+renderStoresWidgetsPendingList/s"],["script","/Popunder|Banner/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","self.loadPW"],["script","onload"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/banner/i"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","/dismissAdBlock|533092QTEErr/"],["script","/bait|adblock/i"],["script","debugger"],["script","decodeURIComponent"],["script","adblock_popup"],["script","MutationObserver"],["script","ad-gate"],["script","isWindows"],["script",":visible"],["script","Datafadace"],["script","/popunder/i"],["script","adConfig"],["script","enable_ad_block_detector"],["script","/FingerprintJS|Adcash/"],["script","/const ads/i"],["#text","adinserter"],["script","AD_URL"],["script","/pirate/i"],["script","offsetHeight"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","sendFakeRequest"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["gameplayneo.com",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["im9.eu",2],["marinetraffic.live",2],["nontonx.com",3],["embed.wcostream.com",4],["omuzaani.me",[5,78]],["pandadoc.com",6],["web.de",7],["skidrowreloaded.com",[8,66]],["1337x.*",[8,66]],["1stream.eu",8],["4kwebplay.xyz",8],["alldownplay.xyz",8],["anime4i.vip",8],["antennasports.ru",[8,72]],["asiaflix.in",8],["boxingstream.me",8],["buffstreams.app",8],["claplivehdplay.ru",8],["cracksports.me",[8,18,269]],["cricstream.me",8],["cricstreams.re",[8,18]],["dartsstreams.com",8],["dl-protect.link",8],["eurekaddl.baby",8],["euro2024direct.ru",8],["ext.to",8],["extrem-down.*",8],["extreme-down.*",8],["eztv.*",8],["eztvx.to",8],["f1box.me",8],["filecrypt.cc",8],["flix-wave.*",8],["flixrave.me",8],["golfstreams.me",8],["hikaritv.xyz",8],["ianimes.one",8],["istreameast.app",8],["jointexploit.net",[8,66]],["kenitv.me",[8,18]],["lewblivehdplay.ru",[8,230]],["mediacast.click",8],["mixdrop.*",[8,66]],["mlbbite.net",8],["mlbstreams.ai",8],["motogpstream.me",8],["nbabox.me",8],["nflbite.com",8],["nflbox.me",8],["nhlbox.me",8],["ogladaj.in",8],["playcast.click",8],["playoffsstream.com",8],["qatarstreams.me",[8,18,269]],["qqwebplay.xyz",[8,230]],["reidoscanais.life",8],["restlessouter.net",8],["rnbastreams.com",8],["rugbystreams.me",8],["sanet.*",8],["seir-sanduk.com",[8,66]],["socceronline.me",8],["soccerworldcup.me",[8,18,269]],["sportshd.*",8],["sportzonline.si",8],["streamed.su",8],["sushiscan.net",8],["topstreams.info",8],["totalsportek.to",8],["tvableon.me",[8,18]],["vecloud.eu",8],["vibestreams.*",8],["vipstand.pm",8],["webcamrips.to",8],["worldsports.me",8],["x1337x.*",8],["zone-telechargement.*",8],["720pstream.*",[8,72]],["embedsports.me",[8,120]],["embedstream.me",[8,18,66,72,120]],["reliabletv.me",[8,120]],["topembed.pw",[8,74,230]],["crackstreamer.net",8],["vidsrc.*",[8,18,72]],["vidco.pro",[8,72]],["freestreams-live.*>>",8],["moviepilot.de",[9,62]],["userupload.*",10],["cinedesi.in",10],["turkedebiyati.org",10],["intro-hd.net",10],["monacomatin.mc",10],["nodo313.net",10],["mhdtvsports.*",[10,35]],["hesgoal-tv.io",10],["hesgoal-vip.io",10],["earn.punjabworks.com",10],["mahajobwala.in",10],["solewe.com",10],["panel.play.hosting",10],["total-sportek.to",10],["hesgoal-vip.to",10],["shoot-yalla.me",10],["shoot-yalla-tv.live",10],["pahe.*",[11,66,74]],["soap2day.*",11],["yts.mx",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["negyzetmeterarak.hu",17],["viprow.*",[18,66,72]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,72]],["cloudvideotv.*",[18,72]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,66]],["megaup.net",18],["olympicstreams.co",[18,72]],["tv247.us",[18,66]],["uploadhaven.com",18],["userscloud.com",[18,72]],["streamnoads.com",[18,66,72,112]],["neodrive.xyz",18],["dutchycorp.*",19],["faucet.ovh",19],["mmacore.tv",20],["javtiful.com",[20,66]],["nxbrew.net",20],["brawlify.com",20],["oko.sh",21],["variety.com",[22,86,88]],["gameskinny.com",22],["deadline.com",[22,86]],["mlive.com",[22,86]],["washingtonpost.com",23],["gosexpod.com",24],["sexo5k.com",25],["truyen-hentai.com",25],["beinmatch.*",[26,66]],["theshedend.com",27],["zeroupload.com",27],["streamvid.net",[27,66]],["securenetsystems.net",27],["miniwebtool.com",27],["bchtechnologies.com",27],["eracast.cc",27],["flatai.org",27],["leeapk.com",27],["spiegel.de",28],["jacquieetmichel.net",29],["hausbau-forum.de",30],["althub.club",30],["kiemlua.com",30],["doujindesu.*",31],["atlasstudiousa.com",31],["51bonusrummy.in",[31,75]],["tackledsoul.com",32],["adrino1.bonloan.xyz",32],["vi-music.app",32],["instanders.app",32],["rokni.xyz",32],["keedabankingnews.com",32],["sampledrive.org",[32,79]],["windroid777.com",32],["z80ne.com",32],["tea-coffee.net",33],["spatsify.com",33],["newedutopics.com",33],["getviralreach.in",33],["edukaroo.com",33],["funkeypagali.com",33],["careersides.com",33],["nayisahara.com",33],["wikifilmia.com",33],["infinityskull.com",33],["viewmyknowledge.com",33],["iisfvirtual.in",33],["starxinvestor.com",33],["jkssbalerts.com",33],["imagereviser.com",34],["veganab.co",35],["camdigest.com",35],["learnmany.in",35],["amanguides.com",[35,41]],["highkeyfinance.com",[35,41]],["appkamods.com",35],["techacode.com",35],["djqunjab.in",35],["downfile.site",35],["expertvn.com",35],["trangchu.news",35],["shemaleraw.com",35],["thecustomrom.com",35],["wemove-charity.org",35],["nulleb.com",35],["snlookup.com",35],["bingotingo.com",35],["ghior.com",35],["3dmili.com",35],["karanpc.com",35],["plc247.com",35],["apkdelisi.net",35],["freepasses.org",35],["poplinks.*",[35,45]],["tomarnarede.pt",35],["basketballbuzz.ca",35],["dribbblegraphics.com",35],["kemiox.com",35],["teksnologi.com",35],["bharathwick.com",35],["descargaspcpro.net",35],["dx-tv.com",[35,66]],["rt3dmodels.com",35],["plc4me.com",35],["blisseyhusbands.com",35],["mhdsports.*",35],["mhdsportstv.*",35],["mhdtvworld.*",35],["mhdtvmax.*",35],["mhdstream.*",35],["madaradex.org",35],["trigonevo.com",35],["franceprefecture.fr",35],["jazbaat.in",35],["aipebel.com",35],["audiotools.blog",35],["embdproxy.xyz",35],["fc-lc.*",36],["jobzhub.store",37],["fitdynamos.com",37],["labgame.io",37],["kenzo-flowertag.com",38],["mdn.lol",38],["btcbitco.in",39],["btcsatoshi.net",39],["cempakajaya.com",39],["crypto4yu.com",39],["manofadan.com",39],["readbitcoin.org",39],["wiour.com",39],["coin-free.com",[39,66]],["tremamnon.com",39],["bitsmagic.fun",39],["ourcoincash.xyz",39],["aylink.co",40],["sugarona.com",41],["nishankhatri.xyz",41],["cety.app",42],["exe-urls.com",42],["exego.app",42],["cutlink.net",42],["cutyurls.com",42],["cutty.app",42],["cutnet.net",42],["jixo.online",42],["ios.codevn.net",42],["tinys.click",43],["loan.creditsgoal.com",43],["rupyaworld.com",43],["vahantoday.com",43],["techawaaz.in",43],["loan.bgmi32bitapk.in",43],["formyanime.com",43],["gsm-solution.com",43],["h-donghua.com",43],["hindisubbedacademy.com",43],["hm4tech.info",43],["mydverse.*",43],["panelprograms.blogspot.com",43],["ripexbooster.xyz",43],["serial4.com",43],["tutorgaming.com",43],["unblockedgamesgplus.gitlab.io",43],["everydaytechvams.com",43],["dipsnp.com",43],["cccam4sat.com",43],["diendancauduong.com",43],["stitichsports.com",43],["aiimgvlog.fun",44],["appsbull.com",45],["diudemy.com",45],["maqal360.com",45],["androjungle.com",45],["bookszone.in",45],["shortix.co",45],["makefreecallsonline.com",45],["msonglyrics.com",45],["app-sorteos.com",45],["bokugents.com",45],["client.pylexnodes.net",45],["btvplus.bg",45],["listar-mc.net",45],["coingraph.us",46],["impact24.us",46],["iconicblogger.com",47],["auto-crypto.click",47],["tpi.li",48],["shrinkme.*",49],["shrinke.*",49],["mrproblogger.com",49],["themezon.net",49],["smutty.com",49],["e-sushi.fr",49],["gayforfans.com",49],["freeadultcomix.com",49],["down.dataaps.com",49],["filmweb.pl",[49,203]],["livecamrips.*",49],["safetxt.net",49],["filespayouts.com",49],["atglinks.com",50],["kbconlinegame.com",51],["hamrojaagir.com",51],["odijob.com",51],["stfly.biz",52],["airevue.net",52],["atravan.net",52],["cdn1.site",[52,66]],["simana.online",53],["fooak.com",53],["joktop.com",53],["evernia.site",53],["falpus.com",53],["rfiql.com",54],["gujjukhabar.in",54],["smartfeecalculator.com",54],["djxmaza.in",54],["thecubexguide.com",54],["jytechs.in",54],["financacerta.com",55],["encurtads.net",55],["mastkhabre.com",56],["weshare.is",57],["vplink.in",58],["3dsfree.org",59],["up4load.com",60],["gamesmain.xyz",61],["pcoptimizedsettings.com",61],["alpin.de",62],["boersennews.de",62],["chefkoch.de",62],["chip.de",62],["clever-tanken.de",62],["desired.de",62],["donnerwetter.de",62],["fanfiktion.de",62],["focus.de",62],["formel1.de",62],["frustfrei-lernen.de",62],["gewinnspiele.tv",62],["giga.de",62],["gut-erklaert.de",62],["kino.de",62],["messen.de",62],["nickles.de",62],["nordbayern.de",62],["spielfilm.de",62],["teltarif.de",[62,63]],["unsere-helden.com",62],["weltfussball.at",62],["watson.de",62],["mactechnews.de",62],["sport1.de",62],["welt.de",[62,88,98]],["sport.de",62],["allthingsvegas.com",64],["100percentfedup.com",64],["beforeitsnews.com",64],["concomber.com",64],["conservativefiringline.com",64],["dailylol.com",64],["funnyand.com",64],["letocard.fr",64],["mamieastuce.com",64],["meilleurpronostic.fr",64],["patriotnationpress.com",64],["toptenz.net",64],["vitamiiin.com",64],["writerscafe.org",64],["populist.press",64],["dailytruthreport.com",64],["livinggospeldaily.com",64],["first-names-meanings.com",64],["welovetrump.com",64],["thehayride.com",64],["thelibertydaily.com",64],["thepoke.co.uk",64],["thepolitistick.com",64],["theblacksphere.net",64],["shark-tank.com",64],["naturalblaze.com",64],["greatamericanrepublic.com",64],["dailysurge.com",64],["truthlion.com",64],["flagandcross.com",64],["westword.com",64],["republicbrief.com",64],["freedomfirstnetwork.com",64],["phoenixnewtimes.com",64],["designbump.com",64],["clashdaily.com",64],["madworldnews.com",64],["reviveusa.com",64],["sonsoflibertymedia.com",64],["thedesigninspiration.com",64],["videogamesblogger.com",64],["protrumpnews.com",64],["thepalmierireport.com",64],["kresy.pl",64],["thepatriotjournal.com",64],["thegatewaypundit.com",64],["wltreport.com",64],["miaminewtimes.com",64],["politicalsignal.com",64],["rightwingnews.com",64],["bigleaguepolitics.com",64],["comicallyincorrect.com",64],["upornia.com",65],["mexa.sh",66],["123-movies.*",66],["123movieshd.*",66],["123movieshub.*",66],["123moviesme.*",66],["1337x.ninjaproxy1.com",66],["1bit.space",66],["1bitspace.com",66],["1stream.*",66],["1tamilmv.*",66],["2ddl.*",66],["2umovies.*",66],["3dporndude.com",66],["3hiidude.*",66],["4archive.org",66],["4chanarchives.com",66],["4horlover.com",66],["4stream.*",66],["560pmovie.com",66],["5movies.*",66],["7hitmovies.*",66],["85videos.com",66],["9xmovie.*",66],["aagmaal.*",[66,72]],["acefile.co",66],["actusports.eu",66],["adblockeronstape.*",[66,112]],["adblockeronstreamtape.*",66],["adblockplustape.*",[66,112]],["adblockstreamtape.*",[66,112]],["adblockstrtape.*",[66,112]],["adblockstrtech.*",[66,112]],["adblocktape.*",[66,112]],["adclickersbot.com",66],["adcorto.*",66],["adricami.com",66],["adslink.pw",[66,69]],["adultstvlive.com",66],["adz7short.space",66],["aeblender.com",66],["affordwonder.net",66],["ahdafnews.blogspot.com",66],["aiblog.tv",[66,75]],["ak47sports.com",66],["akuma.moe",66],["alexsports.*",[66,269]],["alexsportss.*",66],["alexsportz.*",66],["allplayer.tk",66],["amateurblog.tv",[66,75]],["androidadult.com",[66,258]],["anhsexjav.xyz",66],["anidl.org",66],["anime-loads.org",66],["animeblkom.net",66],["animefire.plus",66],["animelek.me",66],["animepahe.*",66],["animesanka.*",66],["animesorionvip.net",66],["animespire.net",66],["animestotais.xyz",66],["animeyt.es",66],["animixplay.*",66],["aniplay.*",66],["anroll.net",66],["antiadtape.*",[66,112]],["anymoviess.xyz",66],["aotonline.org",66],["asenshu.com",66],["asialiveaction.com",66],["asianclipdedhd.net",66],["asianclub.*",66],["ask4movie.*",66],["askim-bg.com",66],["assistirtvonlinebr.net",66],["asumsikedaishop.com",66],["atomixhq.*",[66,72]],["atomohd.*",66],["avcrempie.com",66],["avseesee.com",66],["gettapeads.com",[66,112]],["bajarjuegospcgratis.com",66],["balkanteka.net",66],["beastvid.tv",66],["belowporn.com",66],["bestgirlsexy.com",66],["bestnhl.com",66],["bestporncomix.com",66],["bhaai.*",66],["bigwarp.*",66],["bikinbayi.com",66],["bikinitryon.net",66],["birdurls.com",66],["bitsearch.to",66],["blackcockadventure.com",66],["blackcockchurch.org",66],["blackporncrazy.com",66],["blizzboygames.net",66],["blizzpaste.com",66],["blkom.com",66],["blog-peliculas.com",66],["blogtrabalhista.com",66],["blurayufr.*",66],["bobsvagene.club",66],["bokep.im",66],["bokep.top",66],["bokepnya.com",66],["bollyflix.cards",66],["boyfuck.me",66],["brilian-news.id",66],["brupload.net",66],["buffstreams.*",66],["buzter.xyz",66],["caitlin.top",66],["camchickscaps.com",66],["camgirls.casa",66],["canalesportivo.*",66],["cashurl.in",66],["ccurl.net",[66,72]],["charexempire.com",66],["cizgivedizi.com",66],["clickndownload.*",66],["clicknupload.*",[66,74]],["clik.pw",66],["coins100s.fun",66],["comohoy.com",66],["coolcast2.com",66],["cordneutral.net",66],["countylocalnews.com",66],["cpmlink.net",66],["crackstreamshd.click",66],["crespomods.com",66],["crisanimex.com",66],["crunchyscan.fr",66],["cuevana3.fan",66],["cuevana3hd.com",66],["cumception.com",66],["cutpaid.com",66],["daddylive.*",[66,72,228]],["daddylivehd.*",[66,72]],["daddylivestream.com",[66,228]],["dailyuploads.net",66],["darkmahou.org",66],["datawav.club",66],["daughtertraining.com",66],["ddrmovies.*",66],["deepgoretube.site",66],["deltabit.co",66],["deporte-libre.top",66],["depvailon.com",66],["derleta.com",66],["desiremovies.*",66],["desivdo.com",66],["desixx.net",66],["detikkebumen.com",66],["deutschepornos.me",66],["devlib.*",66],["diasoft.xyz",66],["dipelis.junctionjive.co.uk",66],["directupload.net",66],["divxtotal.*",66],["divxtotal1.*",66],["dixva.com",66],["djmaza.my",66],["dlhd.*",[66,228]],["doctormalay.com",66],["dofusports.xyz",66],["doods.cam",66],["doodskin.lat",66],["downloadrips.com",66],["downvod.com",66],["dphunters.mom",66],["dragontranslation.com",66],["dvdfullestrenos.com",66],["dvdplay.*",[66,72]],["ebookbb.com",66],["ebookhunter.net",66],["egyanime.com",66],["egygost.com",66],["ekasiwap.com",66],["electro-torrent.pl",66],["elixx.*",66],["elrefugiodelpirata.com",66],["enjoy4k.*",66],["eplayer.click",66],["erovoice.us",66],["eroxxx.us",66],["estrenosdoramas.net",66],["estrenosflix.*",66],["estrenosflux.*",66],["estrenosgo.*",66],["everia.club",66],["everythinginherenet.blogspot.com",66],["extratorrent.st",66],["extremotvplay.com",66],["f1stream.*",66],["fapptime.com",66],["faucethero.com",66],["favoyeurtube.net",66],["fbstream.*",66],["fc2db.com",66],["femdom-joi.com",[66,75]],["fenixsite.net",66],["file4go.*",66],["fileone.tv",66],["film1k.com",66],["filmesonlinex.org",66],["filmesonlinexhd.biz",66],["filmisub.cc",66],["filmnudes.com",66],["filmovitica.com",66],["filmymaza.blogspot.com",66],["filmyzilla.*",[66,72]],["filthy.family",66],["findav.*",66],["findporn.*",66],["flickzap.com",66],["flixmaza.*",66],["flizmovies.*",66],["flostreams.xyz",66],["flyfaucet.com",66],["footyhunter.lol",66],["forex-trnd.com",66],["forumchat.club",66],["forumlovers.club",66],["freeomovie.co.in",66],["freeomovie.to",66],["freeporncomic.net",66],["freepornhdonlinegay.com",66],["freeproxy.io",66],["freeshot.live",66],["freetvsports.*",66],["freeuse.me",66],["freeusexporn.com",66],["fsharetv.cc",66],["fsicomics.com",66],["fullboys.com",66],["fullymaza.*",66],["g-porno.com",66],["g3g.*",66],["galinhasamurai.com",66],["gamepcfull.com",66],["gamesmountain.com",66],["gamesrepacks.com",66],["gamingguru.fr",66],["gamovideo.com",66],["garota.cf",66],["gaydelicious.com",66],["gayfor.us",66],["gaypornhdfree.com",66],["gaypornhot.com",66],["gaypornmasters.com",66],["gaysex69.net",66],["gemstreams.com",66],["get-to.link",66],["girlscanner.org",66],["giurgiuveanul.ro",66],["gledajcrtace.xyz",66],["gocast2.com",66],["gomo.to",66],["gostosa.cf",66],["gotxx.*",66],["grantorrent.*",66],["gratispaste.com",66],["gravureblog.tv",[66,75]],["gupload.xyz",66],["haho.moe",66],["hayhd.net",66],["hdmoviesfair.*",[66,72]],["hdmoviesflix.*",66],["hdpornflix.com",66],["hdsaprevodom.com",66],["hdstreamss.club",66],["hentaiporno.xxx",66],["hentais.tube",66],["hentaistream.co",66],["hentaitk.net",66],["hentaitube.online",66],["hentaiworld.tv",66],["hesgoal.tv",66],["hexupload.net",66],["hhkungfu.tv",66],["highlanderhelp.com",66],["hiidudemoviez.*",66],["hindimovies.to",[66,72]],["hindimoviestv.com",66],["hiperdex.com",66],["hispasexy.org",66],["hitomi.la",66],["hitprn.com",66],["hivflix.*",66],["hoca4u.com",66],["hollymoviehd.cc",66],["hoodsite.com",66],["hopepaste.download",66],["hornylips.com",66],["hotgranny.live",66],["hotmama.live",66],["hqcelebcorner.net",66],["huren.best",66],["hwnaturkya.com",[66,72]],["hxfile.co",[66,72]],["igfap.com",66],["iklandb.com",66],["illink.net",66],["imgsen.*",66],["imgsex.xyz",66],["imgsto.*",66],["imgtraffic.com",66],["imx.to",66],["incest.*",66],["incestflix.*",66],["influencersgonewild.org",66],["infosgj.free.fr",66],["investnewsbrazil.com",66],["itdmusics.com",66],["itopmusic.*",66],["itsuseful.site",66],["itunesfre.com",66],["iwatchfriendsonline.net",[66,165]],["japangaysex.com",66],["jav-noni.cc",66],["javboys.tv",66],["javcl.com",66],["jav-coco.com",66],["javhay.net",66],["javhun.com",66],["javleak.com",66],["javmost.*",66],["javporn.best",66],["javsek.net",66],["javsex.to",66],["jimdofree.com",66],["jiofiles.org",66],["jorpetz.com",66],["jp-films.com",66],["jpop80ss3.blogspot.com",66],["jpopsingles.eu",[66,208]],["jrants.com",[66,82]],["justfullporn.net",66],["kantotflix.net",66],["kaplog.com",66],["kasiporn.com",66],["keeplinks.*",66],["keepvid.*",66],["keralahd.*",66],["khatrimazaful.*",66],["khatrimazafull.*",[66,75]],["kimochi.info",66],["kimochi.tv",66],["kinemania.tv",66],["kissasian.*",66],["kolnovel.site",66],["koltry.life",66],["konstantinova.net",66],["koora-online.live",66],["kunmanga.com",[66,72]],["kwithsub.com",66],["lat69.me",66],["latinblog.tv",[66,75]],["latinomegahd.net",66],["leechall.*",66],["leechpremium.link",66],["legendas.dev",66],["legendei.net",66],["lighterlegend.com",66],["linclik.com",66],["linkebr.com",66],["linkrex.net",66],["linkshorts.*",66],["lulu.st",66],["lulustream.com",[66,74]],["lulustream.live",66],["luluvdo.com",66],["luluvdoo.com",66],["mangaweb.xyz",66],["mangovideo.*",66],["masahub.com",66],["masahub.net",66],["masaporn.*",66],["maturegrannyfuck.com",66],["mdfx9dc8n.net",66],["mdy48tn97.com",66],["mediapemersatubangsa.com",66],["mega-mkv.com",66],["megapastes.com",66],["megapornpics.com",66],["messitv.net",66],["meusanimes.net",66],["milfmoza.com",66],["milfnut.*",66],["milfzr.com",66],["millionscast.com",66],["mimaletamusical.blogspot.com",66],["miniurl.*",66],["mirrorace.*",66],["mitly.us",66],["mixdroop.*",66],["mixiporn.fun",66],["miztv.top",66],["mkv-pastes.com",66],["mkvcage.*",66],["mlbstream.*",66],["mlsbd.*",66],["mmsbee.*",66],["monaskuliner.ac.id",66],["moredesi.com",66],["motogpstream.*",66],["moutogami.com",66],["movgotv.net",66],["movi.pk",66],["movieplex.*",66],["movierulzlink.*",66],["movies123.*",[66,75]],["moviesflix.*",66],["moviesmeta.*",66],["moviesmod.com.pl",66],["moviessources.*",66],["moviesverse.*",66],["movieswbb.com",66],["moviewatch.com.pk",66],["moviezwaphd.*",66],["mp4upload.com",66],["mrskin.live",66],["mrunblock.*",66],["multicanaistv.com",66],["mundowuxia.com",66],["multicanais.*",66],["myeasymusic.ir",66],["myonvideo.com",66],["myyouporn.com",66],["mzansifun.com",66],["naughtypiss.com",66],["nbastream.*",66],["nekopoi.*",[66,75]],["netfapx.com",66],["netfuck.net",66],["new-fs.eu",66],["newmovierulz.*",66],["newtorrentgame.com",66],["neymartv.net",66],["nflstream.*",66],["nflstreams.me",66],["nhlstream.*",66],["nicekkk.com",66],["nicesss.com",66],["nlegs.com",66],["noblocktape.*",[66,112]],["nocensor.*",66],["noni-jav.com",66],["notformembersonly.com",66],["novamovie.net",66],["novelpdf.xyz",66],["novelssites.com",[66,72]],["novelup.top",66],["nsfwr34.com",66],["nu6i-bg-net.com",66],["nudebabesin3d.com",66],["nzbstars.com",66],["o2tvseries.com",66],["ohjav.com",66],["ojearnovelas.com",66],["okanime.xyz",66],["olweb.tv",66],["olympusbiblioteca.site",66],["on9.stream",66],["onepiece-mangaonline.com",66],["onifile.com",66],["onionstream.live",66],["onlinesaprevodom.net",66],["onlyfams.*",66],["onlyfullporn.video",66],["onplustv.live",66],["originporn.com",66],["ouo.*",66],["ovagames.com",66],["pagalworld.cc",66],["pastemytxt.com",66],["payskip.org",66],["pctfenix.*",[66,72]],["pctnew.*",[66,72]],["peeplink.in",66],["peliculas24.*",66],["peliculasmx.net",66],["pelisflix20.*",66],["pelisplus.*",66],["pelisxporno.net",66],["pencarian.link",66],["pendidikandasar.net",66],["pervertgirlsvideos.com",66],["pervyvideos.com",66],["phim12h.com",66],["picdollar.com",66],["picsxxxporn.com",66],["pinayscandalz.com",66],["pinkueiga.net",66],["piratebay.*",66],["piratefast.xyz",66],["piratehaven.xyz",66],["pirateiro.com",66],["playtube.co.za",66],["plugintorrent.com",66],["plyjam.*",66],["plylive.*",66],["plyvdo.*",66],["pmvzone.com",66],["porndish.com",66],["pornez.net",66],["pornfetishbdsm.com",66],["pornfits.com",66],["pornhd720p.com",66],["pornhoarder.*",[66,249]],["pornobr.club",66],["pornobr.ninja",66],["pornodominicano.net",66],["pornofaps.com",66],["pornoflux.com",66],["pornotorrent.com.br",66],["pornredit.com",66],["pornstarsyfamosas.es",66],["pornstreams.co",66],["porntn.com",66],["pornxbit.com",66],["pornxday.com",66],["portaldasnovinhas.shop",66],["portugues-fcr.blogspot.com",66],["poseyoung.com",66],["pover.org",66],["prbay.*",66],["projectfreetv.*",66],["projeihale.com",66],["proxybit.*",66],["proxyninja.org",66],["psarips.*",66],["pubfilmz.com",66],["publicsexamateurs.com",66],["punanihub.com",66],["pxxbay.com",66],["qiqitvx84.shop",66],["r18.best",66],["racaty.*",66],["ragnaru.net",66],["rapbeh.net",66],["rapelust.com",66],["rapload.org",66],["read-onepiece.net",66],["readhunters.xyz",66],["remaxhd.*",66],["reshare.pm",66],["retro-fucking.com",66],["retrotv.org",66],["rintor.*",66],["rnbxclusive.*",66],["rnbxclusive0.*",66],["rnbxclusive1.*",66],["robaldowns.com",66],["rockdilla.com",66],["rojadirecta.*",66],["rojadirectaenvivo.*",66],["rojitadirecta.blogspot.com",66],["romancetv.site",66],["rsoccerlink.site",66],["rugbystreams.*",66],["rule34.club",66],["rule34hentai.net",66],["rumahbokep-id.com",66],["sadisflix.*",66],["safego.cc",66],["safetxt.*",66],["sakurafile.com",66],["samax63.lol",66],["sambalpuristar.in",66],["savefiles.com",[66,69]],["scat.gold",66],["scatfap.com",66],["scatkings.com",66],["seirsanduk.*",66],["sexdicted.com",66],["sexgay18.com",66],["sexiezpix.com",66],["sextubebbw.com",66],["sgpics.net",[66,75]],["shadowrangers.*",66],["shahed-4u.day",66],["shahed4u.*",[66,72]],["shahee4u.cam",66],["shahhid4u.cam",66],["shahi4u.*",66],["shahid4u.*",66],["shahid4u1.*",66],["shahid4uu.*",66],["shahiid-anime.net",66],["shaid4u.day",66],["shavetape.*",66],["shemale6.com",66],["shemalegape.net",[66,68]],["shid4u.*",66],["shinden.pl",66],["short.es",66],["shortearn.*",66],["shorten.*",66],["shorttey.*",66],["shortzzy.*",66],["sideplusleaks.net",66],["silverblog.tv",[66,75]],["silverpic.com",66],["sinsitio.site",66],["skidrowcpy.com",66],["skymovieshd.*",66],["slut.mom",66],["smallencode.me",66],["smoner.com",66],["smplace.com",66],["socceron.name",66],["socceronline.*",[66,72]],["socialblog.tv",[66,75]],["softairbay.com",66],["softarchive.*",66],["songsio.com",66],["souexatasmais.com",66],["speedporn.net",[66,75]],["sportbar.live",66],["sports-stream.*",66],["sportstream1.cfd",66],["sporttuna.*",66],["sporttunatv.*",66],["srt.am",66],["sshhaa.*",66],["stapadblockuser.*",[66,112]],["stape.*",[66,112]],["stapewithadblock.*",66],["starblog.tv",[66,75]],["starmusiq.*",66],["stbemuiptv.com",66],["stockingfetishvideo.com",66],["strcloud.*",[66,112]],["stream.crichd.vip",66],["stream25.xyz",66],["streamadblocker.*",[66,72,112]],["streamadblockplus.*",[66,112]],["streambee.to",66],["streambucket.net",66],["streamcdn.*",66],["streamcenter.pro",66],["streamhub.*",[66,72]],["streamingclic.com",66],["streamkiste.tv",66],["streamoupload.xyz",66],["streamservicehd.click",66],["streamsport.*",66],["streamta.*",[66,112]],["streamtape.*",[66,75,112]],["streamtapeadblockuser.*",[66,112]],["strikeout.*",[66,74]],["strtape.*",[66,112]],["strtapeadblock.*",[66,112]],["strtapeadblocker.*",[66,112]],["strtapewithadblock.*",66],["strtpe.*",[66,112]],["subtitleporn.com",66],["subtitles.cam",66],["suicidepics.com",66],["supertelevisionhd.com",66],["supexfeeds.com",66],["swatchseries.*",66],["swiftload.io",66],["swipebreed.net",66],["swzz.xyz",66],["sxnaar.com",66],["tabooflix.*",66],["taboosex.club",66],["tapeantiads.com",[66,112]],["tapeblocker.com",[66,112]],["tapenoads.com",[66,112]],["tapepops.com",[66,75,112]],["tapewithadblock.org",[66,112,310]],["teamos.xyz",66],["telegramgroups.xyz",66],["tempodeconhecer.blogs.sapo.pt",66],["tennisstreams.*",66],["tfp.is",66],["tgo-tv.co",[66,72]],["thaihotmodels.com",66],["theblueclit.com",66],["thebussybandit.com",66],["thedaddy.*",[66,228]],["thelastdisaster.vip",66],["themoviesflix.*",66],["thepiratebay.*",66],["thepiratebay0.org",66],["thepiratebay10.info",66],["thesexcloud.com",66],["thothub.today",66],["tightsexteens.com",66],["tlnovelas.net",66],["tmearn.*",66],["tojav.net",66],["tokusatsuindo.com",66],["tokyocafe.org",66],["toonanime.*",66],["top16.net",66],["topdrama.net",66],["topvideosgay.com",66],["torlock.*",66],["tormalayalam.*",66],["torrage.info",66],["torrents.vip",66],["torrentz2eu.*",66],["torrsexvid.com",66],["tpb-proxy.xyz",66],["trannyteca.com",66],["trendytalker.com",66],["tuktukcinma.com",66],["tumanga.net",66],["turbogvideos.com",66],["turboimagehost.com",66],["turbovid.me",66],["turkishseriestv.org",66],["turksub24.net",66],["tutele.sx",66],["tutelehd.*",66],["tv247us.live",66],["tvglobe.me",66],["tvpclive.com",66],["tvply.*",66],["tvs-widget.com",66],["tvseries.video",66],["u4m.*",66],["ucptt.com",66],["ufaucet.online",66],["ufcfight.online",66],["ufcstream.*",66],["ultrahorny.com",66],["ultraten.net",66],["unblocknow.*",66],["unblockweb.me",66],["underhentai.net",66],["uniqueten.net",66],["uns.bio",66],["upbaam.com",66],["uploadbuzz.*",66],["upstream.to",66],["upzur.com",66],["usagoals.*",66],["ustream.to",66],["valhallas.click",66],["valeriabelen.com",66],["vegamoviies.*",66],["verdragonball.online",66],["vexmoviex.*",66],["vfxmed.com",66],["vidclouds.*",66],["video.az",66],["videostreaming.rocks",66],["videowood.tv",66],["vidlox.*",66],["vidorg.net",66],["vidtapes.com",66],["vidz7.com",66],["vikistream.com",66],["vinovo.to",66],["vipboxtv.*",[66,72]],["vipleague.*",66],["viral.wf",66],["virpe.cc",66],["visifilmai.org",66],["viveseries.com",66],["vladrustov.sx",66],["volokit2.com",[66,72,228]],["vstorrent.org",66],["w4hd.com",66],["watch-series.*",66],["watchbrooklynnine-nine.com",66],["watchelementaryonline.com",66],["watchf1full.com",66],["watchfamilyguyonline.com",66],["watchkobestreams.info",66],["watchlostonline.net",66],["watchmmafull.com",66],["watchmodernfamilyonline.com",66],["watchmonkonline.com",66],["watchrulesofengagementonline.com",66],["watchseries.*",66],["webcamrips.com",66],["wincest.xyz",66],["wolverdon.fun",66],["wordcounter.icu",66],["worldmovies.store",66],["worldstreams.click",66],["wpdeployit.com",66],["wqstreams.tk",66],["wwwsct.com",66],["x18hub.com",66],["xanimeporn.com",66],["xblog.tv",[66,75]],["xclusivejams.*",66],["xmoviesforyou.*",66],["xn--verseriesespaollatino-obc.online",66],["xpornium.net",66],["xsober.com",66],["xvip.lat",66],["xxgasm.com",66],["xxvideoss.org",66],["xxx18.uno",66],["xxxdominicana.com",66],["xxxfree.watch",66],["xxxmax.net",66],["xxxwebdlxxx.top",66],["xxxxvideo.uno",66],["yabai.si",66],["yeshd.net",66],["youdbox.*",66],["youjax.com",66],["yourdailypornvideos.ws",66],["yourupload.com",66],["youswear.com",66],["ytmp3eu.*",66],["yts-subs.*",66],["yts.*",66],["ytstv.me",66],["yumeost.net",66],["zerion.cc",66],["zerocoin.top",66],["zitss.xyz",66],["zooqle.*",66],["zpaste.net",66],["md3b0j6hj.com",66],["mdzsmutpcvykb.net",66],["mixdrop21.net",66],["mixdropjmk.pw",66],["fastreams.com",66],["streamsoccer.site",66],["tntsports.store",66],["wowstreams.co",66],["pillowcase.su",67],["akaihentai.com",68],["cine-calidad.*",68],["fastpic.org",[68,75]],["forums.socialmediagirls.com",[68,75]],["javtsunami.com",68],["manwa.me",68],["monoschino2.com",68],["saradahentai.com",68],["sxyprn.*",68],["tabooporn.tv",68],["veryfreeporn.com",68],["x-video.tube",68],["pornoenspanish.es",68],["theporngod.com",68],["tabootube.to",68],["bebasbokep.online",69],["besthdgayporn.com",69],["bokepindo13.*",69],["dimensionalseduction.com",69],["drivenime.com",69],["erothots1.com",69],["javbobo.com",69],["javup.org",69],["kaliscan.*",69],["likemanga.ink",69],["madouqu.com",69],["shemaleup.net",69],["transflix.net",69],["worthcrete.com",69],["x-x-x.video",[69,288]],["malluporno.com",70],["hentaihere.com",71],["player.smashy.stream",71],["player.smashystream.com",71],["11xmovies.*",[72,74]],["123movies.*",72],["123moviesla.*",72],["123movieweb.*",72],["2embed.*",72],["3kmovies.*",72],["720pflix.*",72],["7starhd.*",72],["9xflix.*",72],["9xmovies.*",72],["adsh.cc",72],["adshort.*",72],["afilmyhouse.blogspot.com",72],["ak.sv",72],["aliezstream.pro",[72,187]],["allmovieshub.*",72],["animesultra.net",72],["api.webs.moe",72],["apkmody.io",72],["asianplay.*",72],["atishmkv.*",72],["backfirstwo.site",72],["bflix.*",72],["crazyblog.in",72],["cricstream.*",72],["crictime.*",72],["cuervotv.me",72],["defienietlynotme.com",72],["divicast.com",72],["dood.*",[72,100]],["dooood.*",[72,100]],["egybest.*",72],["embedme.*",72],["embedpk.net",72],["esportivos.site",72],["extramovies.*",72],["faselhd.*",72],["faselhds.*",72],["faselhdwatch.*",72],["filemoon.*",72],["filemooon.*",72],["filmeserialeonline.org",72],["filmy.*",72],["filmyhit.*",72],["filmywap.*",72],["finfang.*",72],["flexyhit.com",72],["flixhq.*",72],["fmembed.cc",72],["fmoonembed.*",72],["fmovies.*",72],["focus4ca.com",72],["footybite.to",72],["foreverwallpapers.com",72],["french-streams.cc",72],["gdplayer.*",72],["gdrivelatinohd.net",72],["globalstreams.xyz",72],["gocast.pro",72],["godzcast.com",72],["goku.sx",72],["gomovies.*",72],["gowatchseries.*",72],["hdfungamezz.*",72],["hdmovies23.*",72],["hdtoday.to",72],["hellnaw.*",72],["hianime.to",72],["hinatasoul.com",72],["hindilinks4u.*",72],["hurawatch.*",72],["igg-games.com",72],["infinityscans.net",72],["jalshamoviezhd.*",72],["kaido.to",72],["kerapoxy.*",72],["linkshub.*",72],["livecricket.*",72],["livestreames.us",72],["locatedinfain.com",72],["mangareader.to",72],["maxstream.*",72],["mhdsport.*",72],["mkvcinemas.*",72],["moonembed.*",72],["moviekids.tv",72],["movies2watch.*",72],["moviesda9.co",72],["moviespapa.*",72],["mp4moviez.*",72],["mydownloadtube.*",72],["myflixertv.to",72],["myflixerz.to",72],["mylivestream.pro",[72,187]],["nowmetv.net",72],["nowsportstv.com",72],["nuroflix.*",72],["nxbrew.com",72],["o2tvseries.*",72],["o2tvseriesz.*",72],["oii.io",72],["paidshitforfree.com",72],["pepperlive.info",72],["pirlotv.*",72],["pkspeed.net",72],["playertv.net",72],["poscitech.*",72],["primewire.*",72],["redecanais.*",72],["rgeyyddl.*",72],["ronaldo7.pro",72],["roystream.com",72],["rssing.com",72],["s.to",72],["serienstream.*",72],["sflix.*",72],["shaheed4u.*",72],["share.filesh.site",72],["sharkfish.xyz",72],["skidrowcodex.net",72],["smartermuver.com",72],["speedostream.*",72],["sportcast.*",72],["sportshub.fan",72],["sportskart.*",72],["stream4free.live",72],["streamingcommunity.*",[72,74,131]],["sulleiman.com",72],["tamilarasan.*",72],["tamilfreemp3songs.*",72],["tamilmobilemovies.in",72],["tamilprinthd.*",72],["tapeadsenjoyer.com",[72,75,112]],["tapeadvertisement.com",[72,112]],["tapelovesads.org",[72,112]],["thewatchseries.live",72],["tnmusic.in",72],["torrentdosfilmes.*",72],["totalsportek.*",72],["travelplanspro.com",72],["tubemate.*",72],["tusfiles.com",72],["tutlehd4.com",72],["twstalker.com",72],["uploadrar.*",72],["uqload.*",72],["vegamovie.*",72],["vid-guard.com",72],["vidcloud9.*",72],["vido.*",72],["vidoo.*",72],["vidsaver.net",72],["vidspeeds.com",72],["viralitytoday.com",72],["voiranime.stream",72],["vpcxz19p.xyz",72],["vudeo.*",72],["vumoo.*",72],["watchdoctorwhoonline.com",72],["watchomovies.*",[72,128]],["watchserie.online",72],["woxikon.in",72],["www-y2mate.com",72],["yesmovies.*",72],["ylink.bid",72],["z12z0vla.*",72],["zvision.link",72],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",72],["kickassanime.*",73],["cinego.tv",74],["dokoembed.pw",74],["ev01.to",74],["fojik.*",74],["fstream365.com",74],["fzmovies.*",74],["linkz.*",74],["minoplres.xyz",74],["mostream.us",74],["moviedokan.*",74],["myflixer.*",74],["oii.la",74],["prmovies.*",74],["readcomiconline.li",74],["s3embtaku.pro",74],["sflix2.to",74],["sportshub.stream",74],["streamblasters.*",74],["streamtpmedia.com",74],["topcinema.cam",74],["webxzplay.cfd",74],["zonatmo.com",74],["animesaturn.cx",74],["filecrypt.*",74],["hunterscomics.com",74],["aniwave.uk",74],["dojing.net",75],["fuckflix.click",75],["javsubindo.com",75],["krx18.com",75],["loadx.ws",75],["mangaforfree.com",75],["noindexscan.com",75],["pornx.to",75],["savefiles.*",[75,271]],["shavetape.cash",75],["strcloud.club",75],["strcloud.site",75],["streampoi.com",75],["strmup.to",[75,187]],["thefap.net",75],["up4stream.com",[75,128]],["ups2up.fun",[75,128]],["videq.stream",75],["xmegadrive.com",75],["rubystm.com",75],["rubyvid.com",75],["rubyvidhub.com",75],["stmruby.com",75],["streamruby.com",75],["kaa.to",76],["hyhd.org",77],["bi-girl.net",79],["ftuapps.*",79],["hentaiseason.com",79],["hoodtrendspredict.com",79],["marcialhub.xyz",79],["odiadance.com",79],["osteusfilmestuga.online",79],["ragnarokscanlation.opchapters.com",79],["showflix.*",79],["swordalada.org",79],["tvappapk.com",79],["twobluescans.com",[79,80]],["varnascan.xyz",79],["fcsnew.net",81],["bibliopanda.visblog.online",82],["hallofseries.com",82],["luciferdonghua.in",82],["superfastrelease.xyz",82],["toursetlist.com",82],["truyentranhfull.net",82],["fcportables.com",82],["repack-games.com",82],["ibooks.to",82],["blog.tangwudi.com",82],["filecatchers.com",82],["babaktv.com",82],["tablelifeblog.com",83],["thebeautysection.com",83],["thecurvyfashionista.com",83],["thefashionspot.com",83],["thegamescabin.com",83],["thenerdyme.com",83],["thenonconsumeradvocate.com",83],["theprudentgarden.com",83],["thethings.com",83],["timesnews.net",83],["topspeed.com",83],["toyotaklub.org.pl",83],["travelingformiles.com",83],["tutsnode.org",83],["viralviralvideos.com",83],["wannacomewith.com",83],["wimp.com",[83,86]],["windsorexpress.co.uk",83],["woojr.com",83],["worldoftravelswithkids.com",83],["worldsurfleague.com",83],["cheatsheet.com",84],["pwinsider.com",84],["c-span.org",85],["15min.lt",86],["247sports.com",86],["abc17news.com",86],["addictinggames.com",86],["agrodigital.com",86],["al.com",86],["aliontherunblog.com",86],["allaboutthetea.com",86],["allmovie.com",86],["allmusic.com",86],["allthingsthrifty.com",86],["amessagewithabottle.com",86],["arstechnica.com",86],["artforum.com",86],["artnews.com",86],["audiomack.com",86],["awkward.com",86],["barcablaugranes.com",86],["barnsleychronicle.com",86],["bethcakes.com",86],["betweenenglandandiowa.com",86],["bgr.com",86],["billboard.com",86],["blazersedge.com",86],["blogher.com",86],["blu-ray.com",86],["bluegraygal.com",86],["briefeguru.de",86],["brobible.com",86],["cagesideseats.com",86],["cbsnews.com",86],["cbssports.com",[86,276]],["celiacandthebeast.com",86],["chaptercheats.com",86],["cleveland.com",86],["clickondetroit.com",86],["commercialcompetentedigitale.ro",86],["crooksandliars.com",86],["dailydot.com",86],["dailykos.com",86],["dailyvoice.com",86],["danslescoulisses.com",86],["decider.com",86],["didyouknowfacts.com",86],["dogtime.com",86],["dpreview.com",86],["ebaumsworld.com",86],["egoallstars.com",86],["eldiariony.com",86],["fark.com",86],["femestella.com",86],["flickr.com",86],["fmradiofree.com",86],["forums.hfboards.com",86],["free-power-point-templates.com",86],["freeconvert.com",86],["frogsandsnailsandpuppydogtail.com",86],["funtasticlife.com",86],["fwmadebycarli.com",86],["golfdigest.com",86],["grunge.com",86],["gulflive.com",86],["hollywoodreporter.com",86],["homeglowdesign.com",86],["honeygirlsworld.com",86],["ibtimes.co.in",86],["imgur.com",86],["indiewire.com",86],["intouchweekly.com",86],["jasminemaria.com",86],["kens5.com",86],["kion546.com",86],["knowyourmeme.com",86],["krem.com",86],["last.fm",86],["lehighvalleylive.com",86],["lettyskitchen.com",86],["lifeandstylemag.com",86],["lifeinleggings.com",86],["lizzieinlace.com",86],["localnews8.com",86],["lonestarlive.com",86],["madeeveryday.com",86],["maidenhead-advertiser.co.uk",86],["mandatory.com",86],["mardomreport.net",86],["masslive.com",86],["melangery.com",86],["miamiherald.com",86],["mmamania.com",86],["momtastic.com",86],["mostlymorgan.com",86],["motherwellmag.com",86],["motor1.com",86],["motorsport.com",86],["musicfeeds.com.au",86],["naszemiasto.pl",86],["nationalpost.com",86],["nationalreview.com",86],["nbcsports.com",86],["news.com.au",86],["ninersnation.com",86],["nj.com",86],["nordot.app",86],["nothingbutnewcastle.com",86],["nsjonline.com",86],["nypost.com",86],["observer.com",86],["ontvtonight.com",86],["oregonlive.com",86],["pagesix.com",86],["patheos.com",86],["pcbolsa.com",86],["pennlive.com",86],["pep.ph",[86,92]],["phillyvoice.com",86],["playstationlifestyle.net",86],["puckermom.com",86],["reelmama.com",86],["rlfans.com",86],["robbreport.com",86],["rollingstone.com",86],["royalmailchat.co.uk",86],["sandrarose.com",86],["sbnation.com",86],["silive.com",86],["sheknows.com",86],["sidereel.com",86],["smartworld.it",86],["sneakernews.com",86],["sourcingjournal.com",86],["soldionline.it",86],["sport-fm.gr",86],["sportico.com",86],["sportsgamblingpodcast.com",86],["spotofteadesigns.com",86],["ssnewstelegram.com",86],["stacysrandomthoughts.com",86],["stylecaster.com",86],["superherohype.com",86],["syracuse.com",86],["tastingtable.com",86],["techcrunch.com",86],["thecelticblog.com",[86,88]],["thedailymeal.com",86],["theflowspace.com",86],["themarysue.com",86],["thenerdstash.com",86],["tiermaker.com",86],["timesofisrael.com",86],["tiscali.cz",86],["tokfm.pl",86],["torontosun.com",86],["tvline.com",86],["usmagazine.com",86],["wallup.net",86],["wcnc.com",86],["weather.com",86],["worldstar.com",86],["worldstarhiphop.com",86],["wwd.com",86],["wzzm13.com",86],["yourcountdown.to",86],["automobile-catalog.com",[87,88]],["baseballchannel.jp",[87,88]],["forum.mobilism.me",87],["gbatemp.net",87],["gentosha-go.com",87],["hang.hu",87],["hoyme.jp",87],["motorbikecatalog.com",[87,88]],["sharemods.com",87],["wisevoter.com",87],["topstarnews.net",87],["islamicfinder.org",87],["secure-signup.net",87],["dramabeans.com",87],["dropgame.jp",[87,88]],["manta.com",87],["tportal.hr",87],["tvtropes.org",87],["convertcase.net",87],["divinedaolibrary.com",[88,89]],["jaysbrickblog.com",88],["oricon.co.jp",[88,89]],["uranai.nosv.org",88],["yakkun.com",88],["24sata.hr",88],["373news.com",88],["actugaming.net",88],["aerotrader.com",88],["aina.lt",88],["alc.co.jp",88],["alfa.lt",88],["allthetests.com",88],["animanch.com",88],["aniroleplay.com",88],["anyksta.lt",88],["apkmirror.com",[88,207]],["areaconnect.com",88],["as-web.jp",88],["askpython.com",88],["atlasandboots.com",88],["atvtrader.com",88],["aucfree.com",88],["autoby.jp",88],["autoc-one.jp",88],["autofrage.net",88],["bab.la",88],["babla.*",88],["bien.hu",88],["bilis.lt",88],["boredpanda.com",88],["buchstaben.com",88],["budgetbytes.com",88],["bunshun.jp",88],["cadryskitchen.com",88],["calculatorsoup.com",88],["carscoops.com",88],["cesoirtv.com",88],["chanto.jp.net",88],["chocolatecoveredkatie.com",88],["cinetrafic.fr",88],["cocokara-next.com",88],["collinsdictionary.com",88],["commercialtrucktrader.com",88],["computerfrage.net",88],["crosswordsolver.com",88],["cruciverba.it",88],["cults3d.com",88],["culturequizz.com",88],["curbsideclassic.com",88],["cycletrader.com",88],["daily.co.jp",88],["dailynewshungary.com",88],["dallashoopsjournal.com",88],["daveockop.com",88],["dayspedia.com",88],["dict.cc",88],["dictionary.cambridge.org",88],["dictionnaire.lerobert.com",88],["dnevno.hr",88],["donbalon.com",88],["dreamchance.net",88],["driveteslacanada.ca",88],["drweil.com",88],["dziennik.pl",88],["ecranlarge.com",88],["eigachannel.jp",88],["equipmenttrader.com",88],["etaplius.lt",88],["ev-times.com",88],["finanzfrage.net",88],["fixthecfaa.com",88],["footballchannel.jp",88],["forsal.pl",88],["freemcserver.net",88],["freeride.com",88],["futabanet.jp",88],["fxstreet-id.com",88],["fxstreet-vn.com",88],["fxstreet.*",88],["game8.jp",88],["games.arkadium.com",88],["gamewith.jp",88],["gamingsmart.com",88],["gardeningsoul.com",88],["gazetaprawna.pl",88],["gerbeaud.com",88],["gesundheitsfrage.net",88],["gifu-np.co.jp",88],["gigafile.nu",88],["globalrph.com",88],["golf-live.at",88],["grapee.jp",88],["gutefrage.net",88],["happymoments.lol",88],["hb-nippon.com",88],["heureka.cz",88],["hochi.news",88],["horairesdouverture24.fr",88],["hotcopper.co.nz",88],["hotcopper.com.au",88],["hvac-talk.com",88],["idokep.hu",88],["indianhealthyrecipes.com",88],["indiatimes.com",88],["infor.pl",88],["invoice-generator.com",88],["iza.ne.jp",88],["j-cast.com",88],["j-town.net",88],["j7p.jp",88],["jablickar.cz",88],["javatpoint.com",88],["jigsawexplorer.com",88],["jiji.com",88],["jikayosha.jp",88],["judgehype.com",88],["kinmaweb.jp",88],["km77.com",88],["kobe-journal.com",88],["kreuzwortraetsel.de",88],["kurashinista.jp",88],["kurashiru.com",88],["kyoteibiyori.com",88],["lacuarta.com",88],["laleggepertutti.it",88],["langenscheidt.com",88],["laposte.net",88],["lawyersgunsmoneyblog.com",88],["ldoceonline.com",88],["lessdebt.com",88],["listentotaxman.com",88],["livenewschat.eu",88],["logicieleducatif.fr",88],["luremaga.jp",88],["mafab.hu",88],["mahjongchest.com",88],["mainichi.jp",88],["maketecheasier.com",[88,90]],["malaymail.com",88],["mamastar.jp",88],["marineinsight.com",88],["mathplayzone.com",88],["meteo60.fr",88],["midhudsonnews.com",88],["minesweeperquest.com",88],["minkou.jp",88],["mmm.lt",88],["modhub.us",88],["modsbase.com",88],["modsfire.com",88],["moin.de",88],["motor-fan.jp",88],["motorradfrage.net",88],["motscroises.fr",88],["movie-locations.com",88],["muragon.com",88],["mykoreankitchen.com",88],["namemc.com",88],["nana-press.com",88],["natalie.mu",88],["nationaltoday.com",88],["nbadraft.net",88],["newatlas.com",[88,95,96]],["news.zerkalo.io",88],["newsinlevels.com",88],["newsweekjapan.jp",88],["newsyou.info",88],["niketalk.com",88],["nikkan-gendai.com",88],["nintendoeverything.com",88],["nlab.itmedia.co.jp",88],["notebookcheck-cn.com",88],["notebookcheck-hu.com",88],["notebookcheck-ru.com",88],["notebookcheck-tr.com",88],["notebookcheck.*",88],["nouvelobs.com",88],["nyitvatartas24.hu",88],["oeffnungszeitenbuch.de",88],["onlineradiobox.com",88],["operawire.com",88],["optionsprofitcalculator.com",88],["oraridiapertura24.it",88],["overclock.net",88],["oxfordlearnersdictionaries.com",88],["palabr.as",88],["pashplus.jp",88],["persoenlich.com",88],["petitfute.com",88],["petitrobert.fr",88],["play-games.com",88],["pllive.xmediaeg.com",88],["pons.com",88],["popdaily.com.tw",88],["powerpyx.com",88],["pptvhd36.com",88],["profitline.hu",88],["programme-tv.net",88],["puzzlegarage.com",88],["pwctrader.com",88],["quefaire.be",88],["radio-australia.org",88],["radio-osterreich.at",88],["raetsel-hilfe.de",88],["raider.io",88],["ranking.net",88],["raskakcija.lt",88],["references.be",88],["reisefrage.net",88],["relevantmagazine.com",88],["reptilesmagazine.com",88],["respublika.lt",88],["roleplayer.me",88],["rostercon.com",88],["rvtrader.com",88],["samsungmagazine.eu",88],["sankei.com",88],["sanspo.com",88],["scribens.com",88],["scribens.fr",88],["sekunde.lt",88],["siennachat.com",88],["slashdot.org",88],["snowmobiletrader.com",88],["soccerdigestweb.com",88],["solitairehut.com",88],["sourceforge.net",88],["southhemitv.com",88],["spaghetti-interactive.it",88],["spendwithpennies.com",88],["sportalkorea.com",88],["sportlerfrage.net",88],["statecollege.com",88],["stayglam.com",88],["steamidfinder.com",88],["stocktwits.com",88],["sudokutable.com",88],["superhonda.com",88],["syosetu.com",88],["szamoldki.hu",88],["talkwithstranger.com",88],["tastesbetterfromscratch.com",88],["tbs.co.jp",88],["techdico.com",88],["the-crossword-solver.com",88],["thedigestweb.com",88],["thefirearmblog.com",88],["traicy.com",88],["transparentcalifornia.com",88],["transparentnevada.com",88],["trilltrill.jp",88],["tunebat.com",88],["tvtv.ca",88],["tvtv.us",88],["tweaktown.com",88],["twn.hu",88],["tyda.se",88],["ufret.jp",88],["universalis.fr",88],["uptodown.com",88],["uscreditcardguide.com",88],["verkaufsoffener-sonntag.com",88],["videocelts.com",88],["vimm.net",88],["wallpapers.com",88],["wamgame.jp",88],["watchdocumentaries.com",88],["wattedoen.be",88],["webdesignledger.com",88],["weldingweb.com",88],["wetteronline.de",88],["wfmz.com",88],["whec.com",88],["wieistmeineip.*",88],["winfuture.de",88],["word-grabber.com",88],["wordhippo.com",88],["worldjournal.com",88],["worldle.teuteuf.fr",88],["wort-suchen.de",88],["woxikon.*",88],["young-machine.com",88],["yugioh-starlight.com",88],["yutura.net",88],["zagreb.info",88],["zakzak.co.jp",88],["2chblog.jp",88],["2monkeys.jp",88],["46matome.net",88],["akb48glabo.com",88],["akb48matomemory.com",88],["alfalfalfa.com",88],["all-nationz.com",88],["anihatsu.com",88],["aqua2ch.net",88],["blog.esuteru.com",88],["blog.livedoor.jp",88],["blog.jp",88],["blogo.jp",88],["chaos2ch.com",88],["choco0202.work",88],["crx7601.com",88],["danseisama.com",88],["dareda.net",88],["digital-thread.com",88],["doorblog.jp",88],["exawarosu.net",88],["fgochaldeas.com",88],["football-2ch.com",88],["gekiyaku.com",88],["golog.jp",88],["hacchaka.net",88],["heartlife-matome.com",88],["liblo.jp",88],["fesoku.net",88],["fiveslot777.com",88],["gamejksokuhou.com",88],["girlsreport.net",88],["girlsvip-matome.com",88],["grasoku.com",88],["gundamlog.com",88],["honyaku-channel.net",88],["ikarishintou.com",88],["imas-cg.net",88],["imihu.net",88],["inutomo11.com",88],["itainews.com",88],["itaishinja.com",88],["jin115.com",88],["jisaka.com",88],["jnews1.com",88],["jumpsokuhou.com",88],["jyoseisama.com",88],["keyakizaka46matomemory.net",88],["kidan-m.com",88],["kijoden.com",88],["kijolariat.net",88],["kijolifehack.com",88],["kijomatomelog.com",88],["kijyokatu.com",88],["kijyomatome.com",88],["kijyomatome-ch.com",88],["kijyomita.com",88],["kirarafan.com",88],["kitimama-matome.net",88],["kitizawa.com",88],["konoyubitomare.jp",88],["kotaro269.com",88],["kyousoku.net",88],["ldblog.jp",88],["livedoor.biz",88],["livedoor.blog",88],["majikichi.com",88],["matacoco.com",88],["matomeblade.com",88],["matomelotte.com",88],["matometemitatta.com",88],["mojomojo-licarca.com",88],["morikinoko.com",88],["nandemo-uketori.com",88],["netatama.net",88],["news-buzz1.com",88],["news30over.com",88],["nishinippon.co.jp",88],["nmb48-mtm.com",88],["norisoku.com",88],["npb-news.com",88],["ocsoku.com",88],["okusama-kijyo.com",88],["onecall2ch.com",88],["onihimechan.com",88],["orusoku.com",88],["otakomu.jp",88],["otoko-honne.com",88],["oumaga-times.com",88],["outdoormatome.com",88],["pachinkopachisro.com",88],["paranormal-ch.com",88],["recosoku.com",88],["s2-log.com",88],["saikyo-jump.com",88],["shuraba-matome.com",88],["ske48matome.net",88],["squallchannel.com",88],["sukattojapan.com",88],["sumaburayasan.com",88],["sutekinakijo.com",88],["usi32.com",88],["uwakich.com",88],["uwakitaiken.com",88],["vault76.info",88],["vipnews.jp",88],["vippers.jp",88],["vipsister23.com",88],["vtubernews.jp",88],["watarukiti.com",88],["world-fusigi.net",88],["zakuzaku911.com",88],["zch-vip.com",88],["300cforums.com",88],["a5oc.com",88],["acuraworld.com",88],["airsoftsociety.com",88],["allfordmustangs.com",88],["allpar.com",88],["aquaticplantcentral.com",88],["astraownersnetwork.co.uk",88],["avsforum.com",88],["babybmw.net",88],["beesource.com",88],["bimmerwerkz.com",88],["can-amforum.com",88],["canadianmoneyforum.com",88],["catfish1.com",88],["chevymalibuforum.com",88],["chinacarforums.com",88],["chihuahua-people.com",88],["coloradofans.com",88],["dairygoatinfo.com",88],["digitalhome.ca",88],["diychatroom.com",88],["fordescape.org",88],["fullsizebronco.com",88],["gencoupe.com",88],["mazda3revolution.com",88],["mdxers.org",88],["mytractorforum.com",88],["odyclub.com",88],["pelotonforum.com",88],["robloxforum.com",88],["rootzwiki.com",88],["sigtalk.com",88],["skyscrapercity.com",88],["speypages.com",88],["subaruoutback.org",88],["techguy.org",88],["techsupportforum.com",88],["theakforum.net",88],["trailvoy.com",88],["vwvortex.com",88],["browneyedbaker.com",88],["cookieandkate.com",88],["damndelicious.net",88],["happyveggiekitchen.com",88],["homemadehome.com",88],["howsweeteats.com",88],["kimscravings.com",88],["nocrumbsleft.net",88],["pancakerecipes.com",88],["pumpkinnspice.com",88],["the-girl-who-ate-everything.com",88],["wellnessbykay.com",88],["computerbild.de",89],["doviz.com",89],["scribd.com",89],["thelayoff.com",89],["interfootball.co.kr",90],["a-ha.io",90],["cboard.net",90],["jjang0u.com",90],["joongdo.co.kr",90],["viva100.com",90],["tweaksforgeeks.com",90],["m.inven.co.kr",90],["mlbpark.donga.com",90],["meconomynews.com",90],["brandbrief.co.kr",90],["motorgraph.com",90],["bleepingcomputer.com",91],["pravda.com.ua",91],["ap7am.com",92],["cinema.com.my",92],["dolldivine.com",92],["giornalone.it",92],["iplocation.net",92],["jamaicajawapos.com",92],["jutarnji.hr",92],["kompasiana.com",92],["mediaindonesia.com",92],["niice-woker.com",92],["slobodnadalmacija.hr",92],["upmedia.mg",92],["mentalfloss.com",93],["wetter.com",94],["neowin.net",[95,96]],["nextchessmove.com",95],["razzball.com",[95,96]],["dnevnik.hr",[96,98]],["si.com",97],["boardingarea.com",98],["singjupost.com",99],["all3do.com",100],["d-s.io",100],["d0000d.com",100],["d000d.com",100],["d0o0d.com",100],["do0od.com",100],["do7go.com",100],["doods.*",100],["doodstream.*",100],["dooodster.com",100],["doply.net",100],["ds2play.com",100],["ds2video.com",100],["vidply.com",100],["vide0.net",100],["vvide0.com",100],["3minx.com",101],["555fap.com",101],["ai18.pics",101],["anime-jav.com",101],["blackwidof.org",101],["chinese-pics.com",101],["cn-av.com",101],["cnpics.org",101],["cnxx.me",101],["cosplay-xxx.com",101],["cosplay18.pics",101],["fc2ppv.stream",101],["fikfok.net",101],["gofile.download",101],["hentai-sub.com",101],["hentai4f.com",101],["hentaicovid.com",101],["hentaipig.com",101],["hentaixnx.com",101],["idol69.net",101],["javball.com",101],["javbee.*",101],["javring.com",101],["javsunday.com",101],["javtele.net",101],["kin8-av.com",101],["kin8-jav.com",101],["kr-av.com",101],["ovabee.com",101],["pig69.com",101],["porn-pig.com",101],["porn4f.org",101],["sweetie-fox.com",101],["xcamcovid.com",101],["xxpics.org",101],["shipin188.com",102],["expres.cz",103],["lidovky.cz",103],["sbazar.cz",104],["hentaivost.fr",105],["ariase.com",106],["komikdewasa.art",107],["jelonka.com",108],["infogenyus.top",109],["isgfrm.com",110],["lokhung888.com",111],["advertisertape.com",112],["watchadsontape.com",112],["vosfemmes.com",113],["voyeurfrance.net",113],["hyundaitucson.info",114],["exambd.net",115],["cgtips.org",116],["freewebcart.com",117],["freemagazines.top",117],["siamblockchain.com",117],["emuenzen.de",118],["kickass.*",119],["unblocked.id",121],["listendata.com",122],["7xm.xyz",122],["fastupload.io",122],["azmath.info",122],["wouterplanet.com",123],["xenvn.com",124],["4kporn.xxx",125],["androidacy.com",126],["4porn4.com",127],["bestpornflix.com",128],["freeroms.com",128],["andhrafriends.com",128],["723qrh1p.fun",128],["98zero.com",129],["mediaset.es",129],["hwbusters.com",129],["beatsnoop.com",130],["fetchpik.com",130],["hackerranksolution.in",130],["camsrip.com",130],["file.org",130],["btcbunch.com",132],["teachoo.com",[133,134]],["mafiatown.pl",135],["bitcotasks.com",136],["hilites.today",137],["udvl.com",138],["www.chip.de",[139,140,141,142]],["ipalibrary.me",143],["topsporter.net",144],["sportshub.to",144],["myanimelist.net",145],["unofficialtwrp.com",146],["codec.kyiv.ua",146],["kimcilonlyofc.com",146],["bitcosite.com",147],["bitzite.com",147],["teluguflix.*",148],["hacoos.com",149],["watchhentai.net",150],["hes-goals.io",150],["pkbiosfix.com",150],["casi3.xyz",150],["zefoy.com",151],["mailgen.biz",152],["tempinbox.xyz",152],["vidello.net",153],["newscon.org",154],["yunjiema.top",154],["pcgeeks-games.com",154],["narviks.nl",154],["resizer.myct.jp",155],["gametohkenranbu.sakuraweb.com",156],["jisakuhibi.jp",157],["rank1-media.com",157],["lifematome.blog",158],["fm.sekkaku.net",159],["dvdrev.com",160],["betweenjpandkr.blog",161],["nft-media.net",162],["ghacks.net",163],["leak.sx",164],["paste.bin.sx",164],["pornleaks.in",164],["khoaiphim.com",166],["haafedk2.com",167],["jovemnerd.com.br",168],["totalcsgo.com",169],["manysex.com",170],["gaminginfos.com",171],["tinxahoivn.com",172],["m.4khd.com",173],["westmanga.*",173],["automoto.it",174],["fordownloader.com",175],["codelivly.com",176],["tchatche.com",177],["cryptoearns.com",177],["lordchannel.com",178],["novelhall.com",179],["bagi.co.in",180],["keran.co",180],["biblestudytools.com",181],["christianheadlines.com",181],["ibelieve.com",181],["kuponigo.com",182],["inxxx.com",183],["bemyhole.com",183],["embedwish.com",184],["jenismac.com",185],["vxetable.cn",186],["luluvid.com",187],["daddylive1.*",187],["esportivos.*",187],["instream.pro",187],["poscitechs.*",187],["powerover.online",187],["sportea.link",187],["ustream.pro",187],["animeshqip.site",187],["apkship.shop",187],["filedot.to",187],["hdstream.one",187],["kingstreamz.site",187],["live.fastsports.store",187],["livesnow.me",187],["livesports4u.pw",187],["nuxhallas.click",187],["papahd.info",187],["sportmargin.live",187],["sportmargin.online",187],["sportsloverz.xyz",187],["supertipzz.online",187],["ultrastreamlinks.xyz",187],["webmaal.cfd",187],["wizistreamz.xyz",187],["educ4m.com",187],["fromwatch.com",187],["visualnewshub.com",187],["moviebaztv.com",187],["donghuaworld.com",188],["letsdopuzzles.com",189],["rediff.com",190],["igay69.com",191],["dzapk.com",192],["darknessporn.com",193],["familyporner.com",193],["freepublicporn.com",193],["pisshamster.com",193],["punishworld.com",193],["xanimu.com",193],["tainio-mania.online",194],["eroticmoviesonline.me",195],["series9movies.com",195],["teleclub.xyz",196],["ecamrips.com",197],["showcamrips.com",197],["tucinehd.com",198],["uyeshare.cc",198],["9animetv.to",199],["qiwi.gg",200],["jornadaperfecta.com",201],["sousou-no-frieren.com",202],["unite-guide.com",204],["pornohexen.com",204],["thebullspen.com",205],["receitasdaora.online",206],["hiraethtranslation.com",208],["xfreehd.com",209],["freethesaurus.com",210],["thefreedictionary.com",210],["dexterclearance.com",211],["x86.co.kr",212],["onlyfaucet.com",213],["x-x-x.tube",214],["fdownloader.net",215],["thehackernews.com",216],["mielec.pl",217],["treasl.com",218],["mrbenne.com",219],["sportsonline.si",220],["fiuxy2.co",221],["animeunity.to",222],["tokopedia.com",223],["remixsearch.net",224],["remixsearch.es",224],["onlineweb.tools",224],["sharing.wtf",224],["2024tv.ru",225],["modrinth.com",226],["curseforge.com",226],["xnxxcom.xyz",227],["sportsurge.net",228],["joyousplay.xyz",228],["quest4play.xyz",[228,230]],["moneycontrol.com",229],["cookiewebplay.xyz",230],["ilovetoplay.xyz",230],["streamcaster.live",230],["weblivehdplay.ru",230],["nontongo.win",231],["m9.news",232],["callofwar.com",233],["secondhandsongs.com",234],["nohost.one",235],["send.cm",236],["send.now",236],["3rooodnews.net",237],["xxxbfvideo.net",238],["filmy4wap.co.in",239],["filmy4waps.org",239],["gameshop4u.com",240],["regenzi.site",240],["historicaerials.com",[241,242]],["cinemastervip.com",242],["handirect.fr",243],["fsiblog3.club",244],["kamababa.desi",244],["sat-sharing.com",244],["getfiles.co.uk",245],["genelify.com",246],["dhtpre.com",247],["xbaaz.com",248],["lineupexperts.com",250],["fearmp4.ru",251],["appnee.com",252],["www.amazon.com",253],["pornoxo.com",254],["m.shuhaige.net",255],["streamingnow.mov",256],["thesciencetoday.com",257],["sportnews.to",257],["ghbrisk.com",259],["iplayerhls.com",259],["bacasitus.com",260],["katoikos.world",260],["abstream.to",261],["pawastreams.pro",262],["rebajagratis.com",263],["tv.latinlucha.es",263],["fetcheveryone.com",264],["reviewdiv.com",265],["laurelberninteriors.com",266],["godlike.com",267],["godlikeproductions.com",267],["bestsportslive.org",268],["alexsports.*>>",269],["btvsports.my>>",269],["cr7-soccer.store>>",269],["cracksports.me>>",269],["cricwatch.io>>",269],["e2link.link>>",269],["fsportshd.xyz>>",269],["kakarotfoot.ru>>",269],["nbabox.co>>",269],["pelotalibrevivo.net>>",269],["powerover.site>>",269],["qatarstreams.me>>",269],["redditsoccerstreams.name>>",269],["soccerworldcup.me>>",269],["sportstohfa.online>>",269],["sportzonline.site>>",269],["stream.nflbox.me>>",269],["streamshunters.eu>>",269],["totalsportek1000.com>>",269],["worldsports.*>>",269],["7fractals.icu",269],["allevertakstream.space",269],["brainknock.net",269],["btvsports.my",269],["capo6play.com",269],["capoplay.net",269],["cdn256.xyz",269],["courseleader.net",269],["cr7-soccer.store",269],["cricwatch.io",269],["dropbang.net",269],["e2link.link",269],["hornpot.net",269],["fsportshd.xyz",269],["ihdstreams.*",269],["kakarotfoot.ru",269],["meltol.net",269],["nativesurge.net",269],["nbabox.co",269],["powerover.site",269],["snapinstadownload.xyz",269],["sportstohfa.online",269],["sportzonline.site",269],["stellarthread.com",269],["sterham.net",269],["stream.nflbox.me",269],["streamshunters.eu",269],["totalsportek1000.com",269],["voodc.com",269],["wavewalt.me",269],["worldsports.*",269],["ziggogratis.site",269],["bestreamsports.org",270],["streamhls.to",272],["xmalay1.net",273],["letemsvetemapplem.eu",274],["pc-builds.com",275],["emoji.gg",277],["pfps.gg",278],["live4all.net",279],["pokemon-project.com",280],["umatechnology.org",281],["moviesonlinefree.*",282],["fileszero.com",283],["viralharami.com",283],["wstream.cloud",283],["bmamag.com",284],["bmacanberra.wpcomstaging.com",284],["mmsbee42.com",285],["mmsmasala.com",285],["idlixku.com",286],["andrenalynrushplay.cfd",287],["fnjplay.xyz",287],["porn4fans.com",289],["kaliscan.io",290],["webnoveltranslations.com",291],["geekchamp.com",292],["mobilestalk.net",292],["techbloat.com",292],["techyorker.com",292],["elamigosweb.com",293],["mangacrab.org",294],["webtoon.xyz",295],["manhwaclub.net",296],["edumail.su",297],["rainmail.xyz",297],["mlbbox.me",298],["mgeko.cc",299],["sizecharts.net",300],["talksport.com",301],["seoschmiede.at",302],["tryigit.dev",303],["cefirates.com",304],["comicleaks.com",304],["tapmyback.com",304],["ping.gg",304],["nookgaming.com",304],["creatordrop.com",304],["bitdomain.biz",304],["fort-shop.kiev.ua",304],["accuretawealth.com",304],["resourceya.com",304],["tracktheta.com",304],["adaptive.marketing",304],["camberlion.com",304],["trybawaryjny.pl",304],["segops.madisonspecs.com",304],["stresshelden-coaching.de",304],["controlconceptsusa.com",304],["ryaktive.com",304],["tip.etip-staging.etip.io",304],["future-fortune.com",305],["furucombo.app",305],["bolighub.dk",305],["intercity.technology",306],["freelancer.taxmachine.be",306],["adria.gg",306],["fjlaboratories.com",306],["abhijith.page",306],["helpmonks.com",306],["dataunlocker.com",307],["proboards.com",308],["winclassic.net",308],["farmersjournal.ie",309],["jxoplay.xyz",311],["zorroplay.xyz",311],["dlhd.*>>",311]]);
const exceptionsMap = new Map([["chatango.com",[8,269,311]],["twitter.com",[8]],["youtube.com",[8]]]);
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
