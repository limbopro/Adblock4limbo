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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","adserverDomain","excludes","debugger"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/exoloader/i"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","sandbox"],["script","var FingerprintJS="],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","adsBlocked"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","\"data-sdk\""],["script","/wcomAdBlock|error-report\\.com/"],["script","head.appendChild.bind"],["script","/^\\(async\\(\\)=>\\{function.{1,200}head.{1,100}\\.bind.{1,900}location\\.href.{1,100}\\}\\)\\(\\);$/"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["script","pingUrl"],["script","ads"],["script","_ADX_"],["script","div.offsetHeight"],["script","/adbl|RegExp/i"],["script","/popup|arrDirectLink/"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/[0-9]{4","5}\\)\\]\\; \\} else \\{/"],["script","/[0-9]{4","5}\\)\\] \\= [0-9]{2}\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:[0-9]{1,2}\\}\\;/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","popundersPerIP"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","'hidden'"],["script","kmtAdsData"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/getComputedStyle|overlay/"],["script","/Popunder|Banner/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","self.loadPW"],["script","onload"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/banner/i"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","/dismissAdBlock|533092QTEErr/"],["script","/bait|adblock/i"],["script","debugger"],["script","decodeURIComponent"],["script","adblock_popup"],["script","MutationObserver"],["script","ad-gate"],["script","isWindows"],["script",":visible"],["script","Datafadace"],["script","/popunder/i"],["script","adConfig"],["script","enable_ad_block_detector"],["script","/FingerprintJS|Adcash/"],["script","/const ads/i"],["#text","adinserter"],["script",".innerWidth"],["script","AD_URL"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","sendFakeRequest"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["gameplayneo.com",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["im9.eu",2],["marinetraffic.live",2],["nontonx.com",3],["embed.wcostream.com",4],["omuzaani.me",[5,77]],["pandadoc.com",6],["web.de",7],["skidrowreloaded.com",[8,65]],["1337x.*",[8,65]],["1stream.eu",8],["4kwebplay.xyz",8],["alldownplay.xyz",8],["anime4i.vip",8],["antennasports.ru",[8,71]],["asiaflix.in",8],["boxingstream.me",8],["buffstreams.app",8],["claplivehdplay.ru",8],["cracksports.me",[8,18]],["cricstream.me",8],["cricstreams.re",[8,18]],["dartsstreams.com",8],["dl-protect.link",8],["eurekaddl.baby",8],["euro2024direct.ru",8],["ext.to",8],["extrem-down.*",8],["extreme-down.*",8],["eztv.*",8],["eztvx.to",8],["f1box.me",8],["filecrypt.cc",8],["flix-wave.*",8],["flixrave.me",8],["golfstreams.me",8],["hikaritv.xyz",8],["ianimes.one",8],["istreameast.app",8],["jointexploit.net",[8,65]],["kenitv.me",[8,18]],["lewblivehdplay.ru",[8,221]],["mediacast.click",8],["mixdrop.*",[8,65]],["mlbbite.net",8],["mlbstreams.ai",8],["motogpstream.me",8],["nbabox.me",8],["nflbite.com",8],["nflbox.me",8],["nhlbox.me",8],["ogladaj.in",8],["playcast.click",8],["playoffsstream.com",8],["qatarstreams.me",[8,18]],["qqwebplay.xyz",[8,221]],["reidoscanais.life",8],["restlessouter.net",8],["rnbastreams.com",8],["rugbystreams.me",8],["sanet.*",8],["socceronline.me",8],["soccerworldcup.me",[8,18]],["sportshd.*",8],["sportzonline.si",8],["streamed.su",8],["sushiscan.net",8],["topstreams.info",8],["totalsportek.to",8],["tvableon.me",[8,18]],["vecloud.eu",8],["vibestreams.*",8],["vipstand.pm",8],["webcamrips.to",8],["worldsports.me",8],["x1337x.*",8],["zone-telechargement.*",8],["720pstream.*",[8,71]],["embedsports.me",[8,111]],["embedstream.me",[8,18,65,71,111]],["reliabletv.me",[8,111]],["topembed.pw",[8,73,221]],["crackstreamer.net",8],["vidsrc.*",[8,18,71]],["vidco.pro",[8,71]],["freestreams-live.*>>",8],["moviepilot.de",[9,61]],["userupload.*",10],["cinedesi.in",10],["turkedebiyati.org",10],["intro-hd.net",10],["monacomatin.mc",10],["nodo313.net",10],["mhdtvsports.*",[10,35]],["hesgoal-tv.io",10],["hesgoal-vip.io",10],["earn.punjabworks.com",10],["mahajobwala.in",10],["solewe.com",10],["panel.play.hosting",10],["total-sportek.to",10],["hesgoal-vip.to",10],["shoot-yalla.me",10],["shoot-yalla-tv.live",10],["pahe.*",[11,65,73]],["soap2day.*",11],["yts.mx",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["negyzetmeterarak.hu",17],["viprow.*",[18,65,71]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,71]],["cloudvideotv.*",[18,71]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,65]],["megaup.net",18],["olympicstreams.co",[18,71]],["tv247.us",[18,65]],["uploadhaven.com",18],["userscloud.com",[18,71]],["streamnoads.com",[18,65,71,103]],["neodrive.xyz",18],["dutchycorp.*",19],["faucet.ovh",19],["mmacore.tv",20],["javtiful.com",[20,65]],["nxbrew.net",20],["brawlify.com",20],["oko.sh",21],["variety.com",[22,85]],["gameskinny.com",22],["deadline.com",[22,85]],["mlive.com",[22,85]],["washingtonpost.com",23],["gosexpod.com",24],["sexo5k.com",25],["truyen-hentai.com",25],["beinmatch.*",[26,65]],["theshedend.com",27],["cybermania.ws",27],["zeroupload.com",27],["streamvid.net",[27,65]],["securenetsystems.net",27],["miniwebtool.com",27],["bchtechnologies.com",27],["eracast.cc",27],["flatai.org",27],["leeapk.com",27],["spiegel.de",28],["jacquieetmichel.net",29],["hausbau-forum.de",30],["althub.club",30],["kiemlua.com",30],["doujindesu.*",31],["atlasstudiousa.com",31],["51bonusrummy.in",[31,74]],["tackledsoul.com",32],["adrino1.bonloan.xyz",32],["vi-music.app",32],["instanders.app",32],["rokni.xyz",32],["keedabankingnews.com",32],["sampledrive.org",[32,78]],["windroid777.com",32],["z80ne.com",32],["tea-coffee.net",33],["spatsify.com",33],["newedutopics.com",33],["getviralreach.in",33],["edukaroo.com",33],["funkeypagali.com",33],["careersides.com",33],["nayisahara.com",33],["wikifilmia.com",33],["infinityskull.com",33],["viewmyknowledge.com",33],["iisfvirtual.in",33],["starxinvestor.com",33],["jkssbalerts.com",33],["imagereviser.com",34],["veganab.co",35],["camdigest.com",35],["learnmany.in",35],["amanguides.com",[35,41]],["highkeyfinance.com",[35,41]],["appkamods.com",35],["techacode.com",35],["djqunjab.in",35],["downfile.site",35],["expertvn.com",35],["trangchu.news",35],["shemaleraw.com",35],["thecustomrom.com",35],["wemove-charity.org",35],["nulleb.com",35],["snlookup.com",35],["bingotingo.com",35],["ghior.com",35],["3dmili.com",35],["karanpc.com",35],["plc247.com",35],["apkdelisi.net",35],["freepasses.org",35],["poplinks.*",[35,45]],["tomarnarede.pt",35],["basketballbuzz.ca",35],["dribbblegraphics.com",35],["kemiox.com",35],["teksnologi.com",35],["bharathwick.com",35],["descargaspcpro.net",35],["dx-tv.com",[35,65]],["rt3dmodels.com",35],["plc4me.com",35],["blisseyhusbands.com",35],["mhdsports.*",35],["mhdsportstv.*",35],["mhdtvworld.*",35],["mhdtvmax.*",35],["mhdstream.*",35],["madaradex.org",35],["trigonevo.com",35],["franceprefecture.fr",35],["jazbaat.in",35],["aipebel.com",35],["audiotools.blog",35],["embdproxy.xyz",35],["fc-lc.*",36],["jobzhub.store",37],["fitdynamos.com",37],["labgame.io",37],["kenzo-flowertag.com",38],["mdn.lol",38],["btcbitco.in",39],["btcsatoshi.net",39],["cempakajaya.com",39],["crypto4yu.com",39],["manofadan.com",39],["readbitcoin.org",39],["wiour.com",39],["coin-free.com",[39,65]],["tremamnon.com",39],["bitsmagic.fun",39],["ourcoincash.xyz",39],["aylink.co",40],["sugarona.com",41],["nishankhatri.xyz",41],["cety.app",42],["exe-urls.com",42],["exego.app",42],["cutlink.net",42],["cutyurls.com",42],["cutty.app",42],["cutnet.net",42],["jixo.online",42],["ios.codevn.net",42],["tinys.click",43],["loan.creditsgoal.com",43],["rupyaworld.com",43],["vahantoday.com",43],["techawaaz.in",43],["loan.bgmi32bitapk.in",43],["formyanime.com",43],["gsm-solution.com",43],["h-donghua.com",43],["hindisubbedacademy.com",43],["hm4tech.info",43],["mydverse.*",43],["panelprograms.blogspot.com",43],["ripexbooster.xyz",43],["serial4.com",43],["tutorgaming.com",43],["unblockedgamesgplus.gitlab.io",43],["everydaytechvams.com",43],["dipsnp.com",43],["cccam4sat.com",43],["diendancauduong.com",43],["stitichsports.com",43],["aiimgvlog.fun",44],["appsbull.com",45],["diudemy.com",45],["maqal360.com",45],["androjungle.com",45],["bookszone.in",45],["shortix.co",45],["makefreecallsonline.com",45],["msonglyrics.com",45],["app-sorteos.com",45],["bokugents.com",45],["client.pylexnodes.net",45],["btvplus.bg",45],["listar-mc.net",45],["coingraph.us",46],["impact24.us",46],["iconicblogger.com",47],["auto-crypto.click",47],["tpi.li",48],["shrinkme.*",49],["shrinke.*",49],["mrproblogger.com",49],["themezon.net",49],["smutty.com",49],["e-sushi.fr",49],["gayforfans.com",49],["freeadultcomix.com",49],["down.dataaps.com",49],["filmweb.pl",[49,194]],["livecamrips.*",49],["safetxt.net",49],["filespayouts.com",49],["atglinks.com",50],["kbconlinegame.com",51],["hamrojaagir.com",51],["odijob.com",51],["stfly.biz",52],["airevue.net",52],["atravan.net",52],["cdn1.site",[52,65]],["simana.online",53],["fooak.com",53],["joktop.com",53],["evernia.site",53],["falpus.com",53],["rfiql.com",54],["gujjukhabar.in",54],["smartfeecalculator.com",54],["djxmaza.in",54],["thecubexguide.com",54],["jytechs.in",54],["financacerta.com",55],["encurtads.net",55],["mastkhabre.com",56],["weshare.is",57],["vplink.in",58],["3dsfree.org",59],["up4load.com",60],["alpin.de",61],["boersennews.de",61],["chefkoch.de",61],["chip.de",61],["clever-tanken.de",61],["desired.de",61],["donnerwetter.de",61],["fanfiktion.de",61],["focus.de",61],["formel1.de",61],["frustfrei-lernen.de",61],["gewinnspiele.tv",61],["giga.de",61],["gut-erklaert.de",61],["kino.de",61],["messen.de",61],["nickles.de",61],["nordbayern.de",61],["spielfilm.de",61],["teltarif.de",[61,62]],["unsere-helden.com",61],["weltfussball.at",61],["watson.de",61],["mactechnews.de",61],["sport1.de",61],["welt.de",61],["sport.de",61],["allthingsvegas.com",63],["100percentfedup.com",63],["beforeitsnews.com",63],["concomber.com",63],["conservativefiringline.com",63],["dailylol.com",63],["funnyand.com",63],["letocard.fr",63],["mamieastuce.com",63],["meilleurpronostic.fr",63],["patriotnationpress.com",63],["toptenz.net",63],["vitamiiin.com",63],["writerscafe.org",63],["populist.press",63],["dailytruthreport.com",63],["livinggospeldaily.com",63],["first-names-meanings.com",63],["welovetrump.com",63],["thehayride.com",63],["thelibertydaily.com",63],["thepoke.co.uk",63],["thepolitistick.com",63],["theblacksphere.net",63],["shark-tank.com",63],["naturalblaze.com",63],["greatamericanrepublic.com",63],["dailysurge.com",63],["truthlion.com",63],["flagandcross.com",63],["westword.com",63],["republicbrief.com",63],["freedomfirstnetwork.com",63],["phoenixnewtimes.com",63],["designbump.com",63],["clashdaily.com",63],["madworldnews.com",63],["reviveusa.com",63],["sonsoflibertymedia.com",63],["thedesigninspiration.com",63],["videogamesblogger.com",63],["protrumpnews.com",63],["thepalmierireport.com",63],["kresy.pl",63],["thepatriotjournal.com",63],["thegatewaypundit.com",63],["wltreport.com",63],["miaminewtimes.com",63],["politicalsignal.com",63],["rightwingnews.com",63],["bigleaguepolitics.com",63],["comicallyincorrect.com",63],["upornia.com",64],["mexa.sh",65],["123-movies.*",65],["123movieshd.*",65],["123movieshub.*",65],["123moviesme.*",65],["1337x.ninjaproxy1.com",65],["1bit.space",65],["1bitspace.com",65],["1stream.*",65],["1tamilmv.*",65],["2ddl.*",65],["2umovies.*",65],["3dporndude.com",65],["3hiidude.*",65],["4archive.org",65],["4chanarchives.com",65],["4horlover.com",65],["4stream.*",65],["560pmovie.com",65],["5movies.*",65],["7hitmovies.*",65],["85videos.com",65],["9xmovie.*",65],["aagmaal.*",[65,71]],["acefile.co",65],["actusports.eu",65],["adblockeronstape.*",[65,103]],["adblockeronstreamtape.*",65],["adblockplustape.*",[65,103]],["adblockstreamtape.*",[65,103]],["adblockstrtape.*",[65,103]],["adblockstrtech.*",[65,103]],["adblocktape.*",[65,103]],["adclickersbot.com",65],["adcorto.*",65],["adricami.com",65],["adslink.pw",[65,68]],["adultstvlive.com",65],["adz7short.space",65],["aeblender.com",65],["affordwonder.net",65],["ahdafnews.blogspot.com",65],["aiblog.tv",[65,74]],["ak47sports.com",65],["akuma.moe",65],["alexsports.*",[65,259]],["alexsportss.*",65],["alexsportz.*",65],["allplayer.tk",65],["amateurblog.tv",[65,74]],["androidadult.com",[65,248]],["anhsexjav.xyz",65],["anidl.org",65],["anime-loads.org",65],["animeblkom.net",65],["animefire.plus",65],["animelek.me",65],["animepahe.*",65],["animesanka.*",65],["animesorionvip.net",65],["animespire.net",65],["animestotais.xyz",65],["animeyt.es",65],["animixplay.*",65],["aniplay.*",65],["anroll.net",65],["antiadtape.*",[65,103]],["anymoviess.xyz",65],["aotonline.org",65],["asenshu.com",65],["asialiveaction.com",65],["asianclipdedhd.net",65],["asianclub.*",65],["ask4movie.*",65],["askim-bg.com",65],["assistirtvonlinebr.net",65],["asumsikedaishop.com",65],["atomixhq.*",[65,71]],["atomohd.*",65],["avcrempie.com",65],["avseesee.com",65],["gettapeads.com",[65,103]],["bajarjuegospcgratis.com",65],["balkanteka.net",65],["beastvid.tv",65],["belowporn.com",65],["bestgirlsexy.com",65],["bestnhl.com",65],["bestporncomix.com",65],["bhaai.*",65],["bigwarp.*",65],["bikinbayi.com",65],["bikinitryon.net",65],["birdurls.com",65],["bitsearch.to",65],["blackcockadventure.com",65],["blackcockchurch.org",65],["blackporncrazy.com",65],["blizzboygames.net",65],["blizzpaste.com",65],["blkom.com",65],["blog-peliculas.com",65],["blogtrabalhista.com",65],["blurayufr.*",65],["bobsvagene.club",65],["bokep.im",65],["bokep.top",65],["bokepnya.com",65],["bollyflix.cards",65],["boyfuck.me",65],["brilian-news.id",65],["brupload.net",65],["buffstreams.*",65],["buzter.xyz",65],["caitlin.top",65],["camchickscaps.com",65],["camgirls.casa",65],["canalesportivo.*",65],["cashurl.in",65],["ccurl.net",[65,71]],["charexempire.com",65],["cizgivedizi.com",65],["clickndownload.*",65],["clicknupload.*",[65,73]],["clik.pw",65],["coins100s.fun",65],["comohoy.com",65],["coolcast2.com",65],["cordneutral.net",65],["countylocalnews.com",65],["cpmlink.net",65],["crackstreamshd.click",65],["crespomods.com",65],["crisanimex.com",65],["crunchyscan.fr",65],["cuevana3.fan",65],["cuevana3hd.com",65],["cumception.com",65],["cutpaid.com",65],["daddylive.*",[65,71,219]],["daddylivehd.*",[65,71]],["daddylivestream.com",[65,219]],["dailyuploads.net",65],["darkmahou.org",65],["datawav.club",65],["daughtertraining.com",65],["ddrmovies.*",65],["deepgoretube.site",65],["deltabit.co",65],["deporte-libre.top",65],["depvailon.com",65],["derleta.com",65],["desiremovies.*",65],["desivdo.com",65],["desixx.net",65],["detikkebumen.com",65],["deutschepornos.me",65],["devlib.*",65],["diasoft.xyz",65],["dipelis.junctionjive.co.uk",65],["directupload.net",65],["divxtotal.*",65],["divxtotal1.*",65],["dixva.com",65],["djmaza.my",65],["dlhd.*",[65,219]],["doctormalay.com",65],["dofusports.xyz",65],["doods.cam",65],["doodskin.lat",65],["downloadrips.com",65],["downvod.com",65],["dphunters.mom",65],["dragontranslation.com",65],["dvdfullestrenos.com",65],["dvdplay.*",[65,71]],["ebookbb.com",65],["ebookhunter.net",65],["egyanime.com",65],["egygost.com",65],["ekasiwap.com",65],["electro-torrent.pl",65],["elixx.*",65],["elrefugiodelpirata.com",65],["enjoy4k.*",65],["eplayer.click",65],["erovoice.us",65],["eroxxx.us",65],["estrenosdoramas.net",65],["estrenosflix.*",65],["estrenosflux.*",65],["estrenosgo.*",65],["everia.club",65],["everythinginherenet.blogspot.com",65],["extratorrent.st",65],["extremotvplay.com",65],["f1stream.*",65],["fapptime.com",65],["faucethero.com",65],["favoyeurtube.net",65],["fbstream.*",65],["fc2db.com",65],["femdom-joi.com",[65,74]],["fenixsite.net",65],["file4go.*",65],["filegram.to",[65,68,74]],["fileone.tv",65],["film1k.com",65],["filmeonline2023.net",65],["filmesonlinex.org",65],["filmesonlinexhd.biz",65],["filmisub.cc",65],["filmnudes.com",65],["filmovitica.com",65],["filmymaza.blogspot.com",65],["filmyzilla.*",[65,71]],["filthy.family",65],["findav.*",65],["findporn.*",65],["flickzap.com",65],["flixmaza.*",65],["flizmovies.*",65],["flostreams.xyz",65],["flyfaucet.com",65],["footyhunter.lol",65],["forex-trnd.com",65],["forumchat.club",65],["forumlovers.club",65],["freeomovie.co.in",65],["freeomovie.to",65],["freeporncomic.net",65],["freepornhdonlinegay.com",65],["freeproxy.io",65],["freeshot.live",65],["freetvsports.*",65],["freeuse.me",65],["freeusexporn.com",65],["fsharetv.cc",65],["fsicomics.com",65],["fullymaza.*",65],["g-porno.com",65],["g3g.*",65],["galinhasamurai.com",65],["gamepcfull.com",65],["gamesmountain.com",65],["gamesrepacks.com",65],["gamingguru.fr",65],["gamovideo.com",65],["garota.cf",65],["gaydelicious.com",65],["gayfor.us",65],["gaypornhdfree.com",65],["gaypornhot.com",65],["gaypornmasters.com",65],["gaysex69.net",65],["gemstreams.com",65],["get-to.link",65],["girlscanner.org",65],["giurgiuveanul.ro",65],["gledajcrtace.xyz",65],["gocast2.com",65],["gomo.to",65],["gostosa.cf",65],["gotxx.*",65],["grantorrent.*",65],["gratispaste.com",65],["gravureblog.tv",[65,74]],["gupload.xyz",65],["haho.moe",65],["hayhd.net",65],["hdmoviesfair.*",[65,71]],["hdmoviesflix.*",65],["hdpornflix.com",65],["hdsaprevodom.com",65],["hdstreamss.club",65],["hentaiporno.xxx",65],["hentais.tube",65],["hentaistream.co",65],["hentaitk.net",65],["hentaitube.online",65],["hentaiworld.tv",65],["hesgoal.tv",65],["hexupload.net",65],["hhkungfu.tv",65],["highlanderhelp.com",65],["hiidudemoviez.*",65],["hindimovies.to",[65,71]],["hindimoviestv.com",65],["hiperdex.com",65],["hispasexy.org",65],["hitomi.la",65],["hitprn.com",65],["hivflix.*",65],["hoca4u.com",65],["hollymoviehd.cc",65],["hoodsite.com",65],["hopepaste.download",65],["hornylips.com",65],["hotgranny.live",65],["hotmama.live",65],["hqcelebcorner.net",65],["huren.best",65],["hwnaturkya.com",[65,71]],["hxfile.co",[65,71]],["igfap.com",65],["iklandb.com",65],["illink.net",65],["imgsen.*",65],["imgsex.xyz",65],["imgsto.*",65],["imgtraffic.com",65],["imx.to",65],["incest.*",65],["incestflix.*",65],["influencersgonewild.org",65],["infosgj.free.fr",65],["investnewsbrazil.com",65],["itdmusics.com",65],["itopmusic.*",65],["itsuseful.site",65],["itunesfre.com",65],["iwatchfriendsonline.net",[65,156]],["japangaysex.com",65],["jav-noni.cc",65],["javboys.tv",65],["javcl.com",65],["jav-coco.com",65],["javhay.net",65],["javhun.com",65],["javleak.com",65],["javmost.*",65],["javporn.best",65],["javsek.net",65],["javsex.to",65],["jimdofree.com",65],["jiofiles.org",65],["jorpetz.com",65],["jp-films.com",65],["jpop80ss3.blogspot.com",65],["jpopsingles.eu",[65,199]],["jrants.com",[65,81]],["justfullporn.net",65],["kantotflix.net",65],["kaplog.com",65],["kasiporn.com",65],["keeplinks.*",65],["keepvid.*",65],["keralahd.*",65],["khatrimazaful.*",65],["khatrimazafull.*",[65,74]],["kimochi.info",65],["kimochi.tv",65],["kinemania.tv",65],["kissasian.*",65],["kolnovel.site",65],["koltry.life",65],["konstantinova.net",65],["koora-online.live",65],["kunmanga.com",[65,71]],["kwithsub.com",65],["lat69.me",65],["latinblog.tv",[65,74]],["latinomegahd.net",65],["leechall.*",65],["leechpremium.link",65],["legendas.dev",65],["legendei.net",65],["lighterlegend.com",65],["linclik.com",65],["linkebr.com",65],["linkrex.net",65],["linkshorts.*",65],["lulu.st",65],["lulustream.com",[65,73]],["lulustream.live",65],["luluvdo.com",65],["luluvdoo.com",65],["mangaweb.xyz",65],["mangovideo.*",65],["masahub.com",65],["masahub.net",65],["masaporn.*",65],["maturegrannyfuck.com",65],["mdfx9dc8n.net",65],["mdy48tn97.com",65],["mediapemersatubangsa.com",65],["mega-mkv.com",65],["megapastes.com",65],["megapornpics.com",65],["messitv.net",65],["meusanimes.net",65],["milfmoza.com",65],["milfnut.*",65],["milfzr.com",65],["millionscast.com",65],["mimaletamusical.blogspot.com",65],["miniurl.*",65],["mirrorace.*",65],["mitly.us",65],["mixdroop.*",65],["mixiporn.fun",65],["miztv.top",65],["mkv-pastes.com",65],["mkvcage.*",65],["mlbstream.*",65],["mlsbd.*",65],["mmsbee.*",65],["monaskuliner.ac.id",65],["moredesi.com",65],["motogpstream.*",65],["moutogami.com",65],["movgotv.net",65],["movi.pk",65],["movieplex.*",65],["movierulzlink.*",65],["movies123.*",[65,74]],["moviesflix.*",65],["moviesmeta.*",65],["moviesmod.com.pl",65],["moviessources.*",65],["moviesverse.*",65],["movieswbb.com",65],["moviewatch.com.pk",65],["moviezwaphd.*",65],["mp4upload.com",65],["mrskin.live",65],["mrunblock.*",65],["multicanaistv.com",65],["mundowuxia.com",65],["multicanais.*",65],["myeasymusic.ir",65],["myonvideo.com",65],["myyouporn.com",65],["mzansifun.com",65],["naughtypiss.com",65],["nbastream.*",65],["nekopoi.*",[65,74]],["netfapx.com",65],["netfuck.net",65],["new-fs.eu",65],["newmovierulz.*",65],["newtorrentgame.com",65],["neymartv.net",65],["nflstream.*",65],["nflstreams.me",65],["nhlstream.*",65],["nicekkk.com",65],["nicesss.com",65],["nlegs.com",65],["noblocktape.*",[65,103]],["nocensor.*",65],["noni-jav.com",65],["notformembersonly.com",65],["novamovie.net",65],["novelpdf.xyz",65],["novelssites.com",[65,71]],["novelup.top",65],["nsfwr34.com",65],["nu6i-bg-net.com",65],["nudebabesin3d.com",65],["nzbstars.com",65],["o2tvseries.com",65],["ohjav.com",65],["ojearnovelas.com",65],["okanime.xyz",65],["olweb.tv",65],["olympusbiblioteca.site",65],["on9.stream",65],["onepiece-mangaonline.com",65],["onifile.com",65],["onionstream.live",65],["onlinesaprevodom.net",65],["onlyfams.*",65],["onlyfullporn.video",65],["onplustv.live",65],["originporn.com",65],["ouo.*",65],["ovagames.com",65],["pagalworld.cc",65],["pastemytxt.com",65],["payskip.org",65],["pctfenix.*",[65,71]],["pctnew.*",[65,71]],["peeplink.in",65],["peliculas24.*",65],["peliculasmx.net",65],["pelisflix20.*",65],["pelisplus.*",65],["pelisxporno.net",65],["pencarian.link",65],["pendidikandasar.net",65],["pervertgirlsvideos.com",65],["pervyvideos.com",65],["phim12h.com",65],["picdollar.com",65],["picsxxxporn.com",65],["pinayscandalz.com",65],["pinkueiga.net",65],["piratebay.*",65],["piratefast.xyz",65],["piratehaven.xyz",65],["pirateiro.com",65],["playtube.co.za",65],["plugintorrent.com",65],["plyjam.*",65],["plylive.*",65],["plyvdo.*",65],["pmvzone.com",65],["porndish.com",65],["pornez.net",65],["pornfetishbdsm.com",65],["pornfits.com",65],["pornhd720p.com",65],["pornhoarder.*",[65,240]],["pornobr.club",65],["pornobr.ninja",65],["pornodominicano.net",65],["pornofaps.com",65],["pornoflux.com",65],["pornotorrent.com.br",65],["pornredit.com",65],["pornstarsyfamosas.es",65],["pornstreams.co",65],["porntn.com",65],["pornxbit.com",65],["pornxday.com",65],["portaldasnovinhas.shop",65],["portugues-fcr.blogspot.com",65],["poseyoung.com",65],["pover.org",65],["prbay.*",65],["projectfreetv.*",65],["projeihale.com",65],["proxybit.*",65],["proxyninja.org",65],["psarips.*",65],["pubfilmz.com",65],["publicsexamateurs.com",65],["punanihub.com",65],["pxxbay.com",65],["qiqitvx84.shop",65],["r18.best",65],["racaty.*",65],["ragnaru.net",65],["rapbeh.net",65],["rapelust.com",65],["rapload.org",65],["read-onepiece.net",65],["readhunters.xyz",65],["remaxhd.*",65],["reshare.pm",65],["retro-fucking.com",65],["retrotv.org",65],["rintor.*",65],["rnbxclusive.*",65],["rnbxclusive0.*",65],["rnbxclusive1.*",65],["robaldowns.com",65],["rockdilla.com",65],["rojadirecta.*",65],["rojadirectaenvivo.*",65],["rojitadirecta.blogspot.com",65],["romancetv.site",65],["rsoccerlink.site",65],["rugbystreams.*",65],["rule34.club",65],["rule34hentai.net",65],["rumahbokep-id.com",65],["sadisflix.*",65],["safego.cc",65],["safetxt.*",65],["sakurafile.com",65],["samax63.lol",65],["sambalpuristar.in",65],["savefiles.com",[65,68]],["scat.gold",65],["scatfap.com",65],["scatkings.com",65],["sexdicted.com",65],["sexgay18.com",65],["sexiezpix.com",65],["sextubebbw.com",65],["sgpics.net",[65,74]],["shadowrangers.*",65],["shahed-4u.day",65],["shahee4u.cam",65],["shahhid4u.cam",65],["shahi4u.*",65],["shahid4u.*",65],["shahid4u1.*",65],["shahid4uu.*",65],["shahiid-anime.net",65],["shaid4u.day",65],["shavetape.*",65],["shemale6.com",65],["shemalegape.net",[65,67]],["shid4u.*",65],["shinden.pl",65],["short.es",65],["shortearn.*",65],["shorten.*",65],["shorttey.*",65],["shortzzy.*",65],["sideplusleaks.net",65],["silverblog.tv",[65,74]],["silverpic.com",65],["sinsitio.site",65],["skidrowcpy.com",65],["skymovieshd.*",65],["slut.mom",65],["smallencode.me",65],["smoner.com",65],["smplace.com",65],["socceron.name",65],["socceronline.*",[65,71]],["socialblog.tv",[65,74]],["softairbay.com",65],["softarchive.*",65],["sokobj.com",65],["songsio.com",65],["souexatasmais.com",65],["speedporn.net",[65,74]],["sportbar.live",65],["sports-stream.*",65],["sportstream1.cfd",65],["sporttuna.*",65],["sporttunatv.*",65],["srt.am",65],["srts.me",65],["sshhaa.*",65],["stapadblockuser.*",[65,103]],["stape.*",[65,103]],["stapewithadblock.*",65],["starblog.tv",[65,74]],["starmusiq.*",65],["stbemuiptv.com",65],["stockingfetishvideo.com",65],["strcloud.*",[65,103]],["stream.crichd.vip",65],["stream.lc",65],["stream25.xyz",65],["streamadblocker.*",[65,71,103]],["streamadblockplus.*",[65,103]],["streambee.to",65],["streambucket.net",65],["streamcdn.*",65],["streamcenter.pro",65],["streamers.watch",65],["streamgo.to",65],["streamhub.*",[65,71]],["streamingclic.com",65],["streamkiste.tv",65],["streamoupload.xyz",65],["streamservicehd.click",65],["streamsport.*",65],["streamta.*",[65,103]],["streamtape.*",[65,74,103]],["streamtapeadblockuser.*",[65,103]],["strikeout.*",[65,73]],["strtape.*",[65,103]],["strtapeadblock.*",[65,103]],["strtapeadblocker.*",[65,103]],["strtapewithadblock.*",65],["strtpe.*",[65,103]],["subtitleporn.com",65],["subtitles.cam",65],["suicidepics.com",65],["supertelevisionhd.com",65],["supexfeeds.com",65],["swatchseries.*",65],["swiftload.io",65],["swipebreed.net",65],["swzz.xyz",65],["sxnaar.com",65],["tabooflix.*",65],["taboosex.club",65],["tapeantiads.com",[65,103]],["tapeblocker.com",[65,103]],["tapenoads.com",[65,103]],["tapepops.com",[65,74,103]],["tapewithadblock.org",[65,103,299]],["teamos.xyz",65],["telegramgroups.xyz",65],["tempodeconhecer.blogs.sapo.pt",65],["tennisstreams.*",65],["tfp.is",65],["tgo-tv.co",[65,71]],["thaihotmodels.com",65],["theblueclit.com",65],["thebussybandit.com",65],["thedaddy.*",[65,219]],["thelastdisaster.vip",65],["themoviesflix.*",65],["thepiratebay.*",65],["thepiratebay0.org",65],["thepiratebay10.info",65],["thesexcloud.com",65],["thothub.today",65],["tightsexteens.com",65],["tlnovelas.net",65],["tmearn.*",65],["tojav.net",65],["tokusatsuindo.com",65],["tokyocafe.org",65],["toonanime.*",65],["top16.net",65],["topdrama.net",65],["topvideosgay.com",65],["torlock.*",65],["tormalayalam.*",65],["torrage.info",65],["torrents.vip",65],["torrentz2eu.*",65],["torrsexvid.com",65],["tpb-proxy.xyz",65],["trannyteca.com",65],["trendytalker.com",65],["tuktukcinma.com",65],["tumanga.net",65],["turbogvideos.com",65],["turboimagehost.com",65],["turbovid.me",65],["turkishseriestv.org",65],["turksub24.net",65],["tutele.sx",65],["tutelehd.*",65],["tv247us.live",65],["tvglobe.me",65],["tvpclive.com",65],["tvply.*",65],["tvs-widget.com",65],["tvseries.video",65],["u4m.*",65],["ucptt.com",65],["ufaucet.online",65],["ufcfight.online",65],["ufcstream.*",65],["ultrahorny.com",65],["ultraten.net",65],["unblocknow.*",65],["unblockweb.me",65],["underhentai.net",65],["uniqueten.net",65],["uns.bio",65],["upbaam.com",65],["uploadbuzz.*",65],["upstream.to",65],["upzur.com",65],["usagoals.*",65],["ustream.to",65],["valhallas.click",65],["valeriabelen.com",65],["vegamoviies.*",65],["verdragonball.online",65],["vexmoviex.*",65],["vfxmed.com",65],["vidclouds.*",65],["video.az",65],["videostreaming.rocks",65],["videowood.tv",65],["vidlox.*",65],["vidorg.net",65],["vidtapes.com",65],["vidz7.com",65],["vikistream.com",65],["vinovo.to",65],["vipboxtv.*",[65,71]],["vipleague.*",65],["viral.wf",65],["virpe.cc",65],["visifilmai.org",65],["viveseries.com",65],["vladrustov.sx",65],["volokit2.com",[65,71,219]],["vstorrent.org",65],["w4hd.com",65],["watch-series.*",65],["watchbrooklynnine-nine.com",65],["watchelementaryonline.com",65],["watchf1full.com",65],["watchfamilyguyonline.com",65],["watchkobestreams.info",65],["watchlostonline.net",65],["watchmmafull.com",65],["watchmodernfamilyonline.com",65],["watchmonkonline.com",65],["watchrulesofengagementonline.com",65],["watchseries.*",65],["webcamrips.com",65],["wincest.xyz",65],["wolverdon.fun",65],["wordcounter.icu",65],["worldmovies.store",65],["worldstreams.click",65],["wpdeployit.com",65],["wqstreams.tk",65],["wwwsct.com",65],["x18hub.com",65],["xanimeporn.com",65],["xblog.tv",[65,74]],["xclusivejams.*",65],["xmoviesforyou.*",65],["xn--verseriesespaollatino-obc.online",65],["xpornium.net",65],["xsober.com",65],["xvip.lat",65],["xxgasm.com",65],["xxvideoss.org",65],["xxx18.uno",65],["xxxdominicana.com",65],["xxxfree.watch",65],["xxxmax.net",65],["xxxwebdlxxx.top",65],["xxxxvideo.uno",65],["yabai.si",65],["yeshd.net",65],["youdbox.*",65],["youjax.com",65],["yourdailypornvideos.ws",65],["yourupload.com",65],["youswear.com",65],["ytmp3eu.*",65],["yts-subs.*",65],["yts.*",65],["ytstv.me",65],["yumeost.net",65],["zerion.cc",65],["zerocoin.top",65],["zitss.xyz",65],["zooqle.*",65],["zpaste.net",65],["md3b0j6hj.com",65],["mdzsmutpcvykb.net",65],["mixdrop21.net",65],["mixdropjmk.pw",65],["fastreams.com",65],["streamsoccer.site",65],["tntsports.store",65],["wowstreams.co",65],["pillowcase.su",66],["akaihentai.com",67],["cine-calidad.*",67],["fastpic.org",[67,74]],["forums.socialmediagirls.com",[67,74]],["javtsunami.com",67],["manwa.me",67],["monoschino2.com",67],["saradahentai.com",67],["sxyprn.*",67],["tabooporn.tv",67],["veryfreeporn.com",67],["x-video.tube",67],["pornoenspanish.es",67],["theporngod.com",67],["tabootube.to",67],["bebasbokep.online",68],["besthdgayporn.com",68],["bokepindo13.*",68],["dimensionalseduction.com",68],["drivenime.com",68],["erothots1.com",68],["javbobo.com",68],["javup.org",68],["kaliscan.*",68],["madouqu.com",68],["shemaleup.net",68],["transflix.net",68],["worthcrete.com",68],["x-x-x.video",[68,278]],["malluporno.com",69],["hentaihere.com",70],["player.smashy.stream",70],["player.smashystream.com",70],["11xmovies.*",[71,73]],["123movies.*",71],["123moviesla.*",71],["123movieweb.*",71],["2embed.*",71],["3kmovies.*",71],["720pflix.*",71],["7starhd.*",71],["9xflix.*",71],["9xmovies.*",71],["adsh.cc",71],["adshort.*",71],["afilmyhouse.blogspot.com",71],["ak.sv",71],["aliezstream.pro",[71,178]],["allmovieshub.*",71],["animesultra.net",71],["api.webs.moe",71],["apkmody.io",71],["asianplay.*",71],["atishmkv.*",71],["backfirstwo.site",71],["bflix.*",71],["crazyblog.in",71],["cricstream.*",71],["crictime.*",71],["cuervotv.me",71],["defienietlynotme.com",71],["divicast.com",71],["dood.*",[71,95]],["dooood.*",[71,95]],["egybest.*",71],["embedme.*",71],["embedpk.net",71],["esportivos.site",71],["extramovies.*",71],["faselhd.*",71],["faselhds.*",71],["faselhdwatch.*",71],["filemoon.*",71],["filemooon.*",71],["filmeserialeonline.org",71],["filmy.*",71],["filmyhit.*",71],["filmywap.*",71],["finfang.*",71],["flexyhit.com",71],["flixhq.*",71],["fmembed.cc",71],["fmoonembed.*",71],["fmovies.*",71],["focus4ca.com",71],["footybite.to",71],["foreverwallpapers.com",71],["french-streams.cc",71],["gdplayer.*",71],["gdrivelatinohd.net",71],["globalstreams.xyz",71],["gocast.pro",71],["godzcast.com",71],["goku.sx",71],["gomovies.*",71],["gowatchseries.*",71],["hdfungamezz.*",71],["hdmovies23.*",71],["hdtoday.to",71],["hellnaw.*",71],["hianime.to",71],["hinatasoul.com",71],["hindilinks4u.*",71],["hurawatch.*",71],["igg-games.com",71],["infinityscans.net",71],["jalshamoviezhd.*",71],["kaido.to",71],["kerapoxy.*",71],["linkshub.*",71],["livecricket.*",71],["livestreames.us",71],["locatedinfain.com",71],["mangareader.to",71],["maxstream.*",71],["mhdsport.*",71],["mkvcinemas.*",71],["moonembed.*",71],["moviekids.tv",71],["movies2watch.*",71],["moviesda9.co",71],["moviespapa.*",71],["mp4moviez.*",71],["mydownloadtube.*",71],["myflixertv.to",71],["myflixerz.to",71],["mylivestream.pro",[71,178]],["nowmetv.net",71],["nowsportstv.com",71],["nuroflix.*",71],["nxbrew.com",71],["o2tvseries.*",71],["o2tvseriesz.*",71],["oii.io",71],["paidshitforfree.com",71],["pepperlive.info",71],["pirlotv.*",71],["pkspeed.net",71],["playertv.net",71],["poscitech.*",71],["primewire.*",71],["redecanais.*",71],["rgeyyddl.*",71],["ronaldo7.pro",71],["roystream.com",71],["rssing.com",71],["s.to",71],["serienstream.*",71],["sflix.*",71],["shahed4u.*",71],["shaheed4u.*",71],["share.filesh.site",71],["sharkfish.xyz",71],["skidrowcodex.net",71],["smartermuver.com",71],["speedostream.*",71],["sportcast.*",71],["sportshub.fan",71],["sportskart.*",71],["stream4free.live",71],["streamingcommunity.*",[71,73,122]],["sulleiman.com",71],["tamilarasan.*",71],["tamilfreemp3songs.*",71],["tamilmobilemovies.in",71],["tamilprinthd.*",71],["tapeadsenjoyer.com",[71,74,103]],["tapeadvertisement.com",[71,103]],["tapelovesads.org",[71,103]],["thewatchseries.live",71],["tnmusic.in",71],["torrentdosfilmes.*",71],["totalsportek.*",71],["travelplanspro.com",71],["tubemate.*",71],["tusfiles.com",71],["tutlehd4.com",71],["twstalker.com",71],["uploadrar.*",71],["uqload.*",71],["vegamovie.*",71],["vid-guard.com",71],["vidcloud9.*",71],["vido.*",71],["vidoo.*",71],["vidsaver.net",71],["vidspeeds.com",71],["viralitytoday.com",71],["voiranime.stream",71],["vpcxz19p.xyz",71],["vudeo.*",71],["vumoo.*",71],["watchdoctorwhoonline.com",71],["watchomovies.*",[71,119]],["watchserie.online",71],["woxikon.in",71],["www-y2mate.com",71],["yesmovies.*",71],["ylink.bid",71],["z12z0vla.*",71],["zvision.link",71],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",71],["kickassanime.*",72],["cinego.tv",73],["dokoembed.pw",73],["ev01.to",73],["fojik.*",73],["fstream365.com",73],["fzmovies.*",73],["linkz.*",73],["minoplres.xyz",73],["mostream.us",73],["moviedokan.*",73],["myflixer.*",73],["oii.la",73],["prmovies.*",73],["readcomiconline.li",73],["s3embtaku.pro",73],["sflix2.to",73],["sportshub.stream",73],["streamblasters.*",73],["streamtpmedia.com",73],["topcinema.cam",73],["webxzplay.cfd",73],["zonatmo.com",73],["animesaturn.cx",73],["filecrypt.*",73],["hunterscomics.com",73],["aniwave.uk",73],["dojing.net",74],["fuckflix.click",74],["javsubindo.com",74],["krx18.com",74],["loadx.ws",74],["mangaforfree.com",74],["pornx.to",74],["savefiles.*",[74,261]],["shavetape.cash",74],["strcloud.club",74],["strcloud.site",74],["streampoi.com",74],["strmup.to",[74,178]],["up4stream.com",[74,119]],["ups2up.fun",[74,119]],["videq.stream",74],["xmegadrive.com",74],["rubystm.com",74],["rubyvid.com",74],["rubyvidhub.com",74],["stmruby.com",74],["streamruby.com",74],["kaa.to",75],["hyhd.org",76],["bi-girl.net",78],["ftuapps.*",78],["hentaiseason.com",78],["hoodtrendspredict.com",78],["marcialhub.xyz",78],["odiadance.com",78],["osteusfilmestuga.online",78],["ragnarokscanlation.opchapters.com",78],["showflix.*",78],["swordalada.org",78],["tvappapk.com",78],["twobluescans.com",[78,79]],["varnascan.xyz",78],["fcsnew.net",80],["bibliopanda.visblog.online",81],["hallofseries.com",81],["luciferdonghua.in",81],["toursetlist.com",81],["truyentranhfull.net",81],["fcportables.com",81],["repack-games.com",81],["ibooks.to",81],["blog.tangwudi.com",81],["filecatchers.com",81],["babaktv.com",81],["tablelifeblog.com",82],["thebeautysection.com",82],["thecurvyfashionista.com",82],["thefashionspot.com",82],["thegamescabin.com",82],["thenerdyme.com",82],["thenonconsumeradvocate.com",82],["theprudentgarden.com",82],["thethings.com",82],["timesnews.net",82],["topspeed.com",82],["toyotaklub.org.pl",82],["travelingformiles.com",82],["tutsnode.org",82],["viralviralvideos.com",82],["wannacomewith.com",82],["wimp.com",[82,85]],["windsorexpress.co.uk",82],["woojr.com",82],["worldoftravelswithkids.com",82],["worldsurfleague.com",82],["cheatsheet.com",83],["pwinsider.com",83],["c-span.org",84],["15min.lt",85],["247sports.com",85],["abc17news.com",85],["addictinggames.com",85],["agrodigital.com",85],["al.com",85],["aliontherunblog.com",85],["allaboutthetea.com",85],["allmovie.com",85],["allmusic.com",85],["allthingsthrifty.com",85],["amessagewithabottle.com",85],["arstechnica.com",85],["artforum.com",85],["artnews.com",85],["audiomack.com",85],["awkward.com",85],["barcablaugranes.com",85],["barnsleychronicle.com",85],["bethcakes.com",85],["betweenenglandandiowa.com",85],["bgr.com",85],["billboard.com",85],["blazersedge.com",85],["blogher.com",85],["blu-ray.com",85],["bluegraygal.com",85],["briefeguru.de",85],["brobible.com",85],["cagesideseats.com",85],["cbsnews.com",85],["cbssports.com",[85,266]],["celiacandthebeast.com",85],["chaptercheats.com",85],["cleveland.com",85],["clickondetroit.com",85],["commercialcompetentedigitale.ro",85],["crooksandliars.com",85],["dailydot.com",85],["dailykos.com",85],["dailyvoice.com",85],["danslescoulisses.com",85],["decider.com",85],["didyouknowfacts.com",85],["dogtime.com",85],["dpreview.com",85],["ebaumsworld.com",85],["egoallstars.com",85],["eldiariony.com",85],["fark.com",85],["femestella.com",85],["flickr.com",85],["fmradiofree.com",85],["forums.hfboards.com",85],["free-power-point-templates.com",85],["freeconvert.com",85],["frogsandsnailsandpuppydogtail.com",85],["funtasticlife.com",85],["fwmadebycarli.com",85],["golfdigest.com",85],["grunge.com",85],["gulflive.com",85],["hollywoodreporter.com",85],["homeglowdesign.com",85],["honeygirlsworld.com",85],["ibtimes.co.in",85],["imgur.com",85],["indiewire.com",85],["intouchweekly.com",85],["jasminemaria.com",85],["kens5.com",85],["kion546.com",85],["knowyourmeme.com",85],["last.fm",85],["lehighvalleylive.com",85],["lettyskitchen.com",85],["lifeandstylemag.com",85],["lifeinleggings.com",85],["lizzieinlace.com",85],["localnews8.com",85],["lonestarlive.com",85],["madeeveryday.com",85],["maidenhead-advertiser.co.uk",85],["mandatory.com",85],["mardomreport.net",85],["masslive.com",85],["melangery.com",85],["miamiherald.com",85],["mmamania.com",85],["momtastic.com",85],["mostlymorgan.com",85],["motherwellmag.com",85],["motorsport.com",85],["musicfeeds.com.au",85],["naszemiasto.pl",85],["nationalpost.com",85],["nationalreview.com",85],["nbcsports.com",85],["news.com.au",85],["ninersnation.com",85],["nj.com",85],["nordot.app",85],["nothingbutnewcastle.com",85],["nsjonline.com",85],["nypost.com",85],["observer.com",85],["ontvtonight.com",85],["oregonlive.com",85],["pagesix.com",85],["patheos.com",85],["pcbolsa.com",85],["pennlive.com",85],["pep.ph",[85,90]],["phillyvoice.com",85],["playstationlifestyle.net",85],["puckermom.com",85],["reelmama.com",85],["rlfans.com",85],["robbreport.com",85],["rollingstone.com",85],["royalmailchat.co.uk",85],["sandrarose.com",85],["sbnation.com",85],["silive.com",85],["sheknows.com",85],["sidereel.com",85],["smartworld.it",85],["sneakernews.com",85],["sourcingjournal.com",85],["soldionline.it",85],["sport-fm.gr",85],["sportico.com",85],["sportsgamblingpodcast.com",85],["spotofteadesigns.com",85],["ssnewstelegram.com",85],["stacysrandomthoughts.com",85],["stylecaster.com",85],["superherohype.com",85],["syracuse.com",85],["tastingtable.com",85],["techcrunch.com",85],["thecelticblog.com",[85,87]],["thedailymeal.com",85],["theflowspace.com",85],["themarysue.com",85],["thenerdstash.com",85],["tiermaker.com",85],["timesofisrael.com",85],["tiscali.cz",85],["tokfm.pl",85],["torontosun.com",85],["tvline.com",85],["usmagazine.com",85],["wallup.net",85],["wcnc.com",85],["weather.com",85],["worldstar.com",85],["worldstarhiphop.com",85],["wwd.com",85],["wzzm13.com",85],["yourcountdown.to",85],["automobile-catalog.com",[86,87]],["baseballchannel.jp",[86,87]],["forum.mobilism.me",86],["gbatemp.net",86],["gentosha-go.com",86],["hang.hu",86],["hoyme.jp",86],["motorbikecatalog.com",[86,87]],["sharemods.com",86],["wisevoter.com",86],["topstarnews.net",86],["islamicfinder.org",86],["secure-signup.net",86],["dramabeans.com",86],["dropgame.jp",[86,87]],["manta.com",86],["tportal.hr",86],["tvtropes.org",[86,291]],["convertcase.net",86],["oricon.co.jp",87],["uranai.nosv.org",87],["yakkun.com",87],["24sata.hr",87],["373news.com",87],["actugaming.net",87],["aerotrader.com",87],["alc.co.jp",87],["alfa.lt",87],["allthetests.com",87],["animanch.com",87],["aniroleplay.com",87],["apkmirror.com",[87,198]],["areaconnect.com",87],["as-web.jp",87],["atvtrader.com",87],["aucfree.com",87],["autoby.jp",87],["autoc-one.jp",87],["autofrage.net",87],["bab.la",87],["babla.*",87],["bien.hu",87],["bilis.lt",87],["boredpanda.com",87],["bunshun.jp",87],["calculatorsoup.com",87],["carscoops.com",87],["cesoirtv.com",87],["chanto.jp.net",87],["cinetrafic.fr",87],["cocokara-next.com",87],["collinsdictionary.com",87],["commercialtrucktrader.com",87],["computerfrage.net",87],["crosswordsolver.com",87],["cruciverba.it",87],["cults3d.com",87],["culturequizz.com",87],["cycletrader.com",87],["daily.co.jp",87],["dailynewshungary.com",87],["dallashoopsjournal.com",87],["dayspedia.com",87],["dictionary.cambridge.org",87],["dictionnaire.lerobert.com",87],["dnevno.hr",87],["dreamchance.net",87],["drweil.com",87],["dziennik.pl",87],["ecranlarge.com",87],["eigachannel.jp",87],["equipmenttrader.com",87],["etaplius.lt",87],["ev-times.com",87],["finanzfrage.net",87],["footballchannel.jp",87],["forsal.pl",87],["freemcserver.net",87],["futabanet.jp",87],["fxstreet-id.com",87],["fxstreet-vn.com",87],["fxstreet.*",87],["game8.jp",87],["games.arkadium.com",87],["gamewith.jp",87],["gardeningsoul.com",87],["gazetaprawna.pl",87],["gesundheitsfrage.net",87],["gifu-np.co.jp",87],["gigafile.nu",87],["globalrph.com",87],["golf-live.at",87],["grapee.jp",87],["gutefrage.net",87],["happymoments.lol",87],["hb-nippon.com",87],["heureka.cz",87],["hochi.news",87],["horairesdouverture24.fr",87],["hotcopper.co.nz",87],["hotcopper.com.au",87],["hvac-talk.com",87],["idokep.hu",87],["indiatimes.com",87],["infor.pl",87],["invoice-generator.com",87],["iza.ne.jp",87],["j-cast.com",87],["j-town.net",87],["j7p.jp",87],["jablickar.cz",87],["javatpoint.com",87],["jiji.com",87],["jikayosha.jp",87],["judgehype.com",87],["kinmaweb.jp",87],["km77.com",87],["kobe-journal.com",87],["kreuzwortraetsel.de",87],["kurashinista.jp",87],["kurashiru.com",87],["kyoteibiyori.com",87],["lacuarta.com",87],["laleggepertutti.it",87],["langenscheidt.com",87],["laposte.net",87],["lawyersgunsmoneyblog.com",87],["ldoceonline.com",87],["listentotaxman.com",87],["livenewschat.eu",87],["luremaga.jp",87],["mafab.hu",87],["mahjongchest.com",87],["mainichi.jp",87],["maketecheasier.com",[87,88]],["malaymail.com",87],["mamastar.jp",87],["mathplayzone.com",87],["meteo60.fr",87],["midhudsonnews.com",87],["minesweeperquest.com",87],["minkou.jp",87],["mmm.lt",87],["modhub.us",87],["modsfire.com",87],["moin.de",87],["motorradfrage.net",87],["motscroises.fr",87],["movie-locations.com",87],["muragon.com",87],["namemc.com",87],["nana-press.com",87],["natalie.mu",87],["nationaltoday.com",87],["nbadraft.net",87],["newatlas.com",[87,93,94]],["news.zerkalo.io",87],["newsinlevels.com",87],["newsweekjapan.jp",87],["niketalk.com",87],["nikkan-gendai.com",87],["nlab.itmedia.co.jp",87],["notebookcheck.*",87],["notebookcheck-cn.com",87],["notebookcheck-hu.com",87],["notebookcheck-ru.com",87],["notebookcheck-tr.com",87],["nouvelobs.com",87],["nyitvatartas24.hu",87],["oeffnungszeitenbuch.de",87],["onlineradiobox.com",87],["operawire.com",87],["optionsprofitcalculator.com",87],["oraridiapertura24.it",87],["oxfordlearnersdictionaries.com",87],["palabr.as",87],["pashplus.jp",87],["persoenlich.com",87],["petitfute.com",87],["play-games.com",87],["popdaily.com.tw",87],["powerpyx.com",87],["pptvhd36.com",87],["profitline.hu",87],["programme-tv.net",87],["puzzlegarage.com",87],["pwctrader.com",87],["quefaire.be",87],["radio-australia.org",87],["radio-osterreich.at",87],["raetsel-hilfe.de",87],["raider.io",87],["ranking.net",87],["raskakcija.lt",87],["references.be",87],["reisefrage.net",87],["relevantmagazine.com",87],["reptilesmagazine.com",87],["roleplayer.me",87],["rostercon.com",87],["samsungmagazine.eu",87],["sankei.com",87],["sanspo.com",87],["scribens.com",87],["scribens.fr",87],["si.com",87],["slashdot.org",87],["snowmobiletrader.com",87],["soccerdigestweb.com",87],["solitairehut.com",87],["sourceforge.net",87],["southhemitv.com",87],["sportalkorea.com",87],["sportlerfrage.net",87],["statecollege.com",87],["steamidfinder.com",87],["stocktwits.com",87],["sudokutable.com",87],["superhonda.com",87],["syosetu.com",87],["szamoldki.hu",87],["talkwithstranger.com",87],["tastesbetterfromscratch.com",87],["tbs.co.jp",87],["techdico.com",87],["the-crossword-solver.com",87],["thedigestweb.com",87],["thefirearmblog.com",87],["traicy.com",87],["transparentcalifornia.com",87],["transparentnevada.com",87],["trilltrill.jp",87],["tunebat.com",87],["tvtv.ca",87],["tvtv.us",87],["tweaktown.com",87],["twn.hu",87],["tyda.se",87],["ufret.jp",87],["universalis.fr",87],["uptodown.com",87],["uscreditcardguide.com",87],["verkaufsoffener-sonntag.com",87],["vimm.net",87],["wamgame.jp",87],["watchdocumentaries.com",87],["wattedoen.be",87],["webdesignledger.com",87],["weldingweb.com",87],["wetteronline.de",87],["wfmz.com",87],["wieistmeineip.*",87],["winfuture.de",87],["word-grabber.com",87],["worldjournal.com",87],["worldle.teuteuf.fr",87],["wort-suchen.de",87],["woxikon.*",87],["young-machine.com",87],["yugioh-starlight.com",87],["yutura.net",87],["zagreb.info",87],["zakzak.co.jp",87],["pons.com",87],["2chblog.jp",87],["2monkeys.jp",87],["46matome.net",87],["akb48glabo.com",87],["akb48matomemory.com",87],["alfalfalfa.com",87],["all-nationz.com",87],["anihatsu.com",87],["aqua2ch.net",87],["blog.esuteru.com",87],["blog.livedoor.jp",87],["blog.jp",87],["blogo.jp",87],["chaos2ch.com",87],["choco0202.work",87],["crx7601.com",87],["danseisama.com",87],["dareda.net",87],["digital-thread.com",87],["doorblog.jp",87],["exawarosu.net",87],["fgochaldeas.com",87],["football-2ch.com",87],["gekiyaku.com",87],["golog.jp",87],["hacchaka.net",87],["heartlife-matome.com",87],["liblo.jp",87],["fesoku.net",87],["fiveslot777.com",87],["gamejksokuhou.com",87],["girlsreport.net",87],["girlsvip-matome.com",87],["grasoku.com",87],["gundamlog.com",87],["honyaku-channel.net",87],["ikarishintou.com",87],["imas-cg.net",87],["imihu.net",87],["inutomo11.com",87],["itainews.com",87],["itaishinja.com",87],["jin115.com",87],["jisaka.com",87],["jnews1.com",87],["jumpsokuhou.com",87],["jyoseisama.com",87],["keyakizaka46matomemory.net",87],["kidan-m.com",87],["kijoden.com",87],["kijolariat.net",87],["kijolifehack.com",87],["kijomatomelog.com",87],["kijyokatu.com",87],["kijyomatome.com",87],["kijyomatome-ch.com",87],["kijyomita.com",87],["kirarafan.com",87],["kitimama-matome.net",87],["kitizawa.com",87],["konoyubitomare.jp",87],["kotaro269.com",87],["kyousoku.net",87],["ldblog.jp",87],["livedoor.biz",87],["livedoor.blog",87],["majikichi.com",87],["matacoco.com",87],["matomeblade.com",87],["matomelotte.com",87],["matometemitatta.com",87],["mojomojo-licarca.com",87],["morikinoko.com",87],["nandemo-uketori.com",87],["netatama.net",87],["news-buzz1.com",87],["news30over.com",87],["nishinippon.co.jp",87],["nmb48-mtm.com",87],["norisoku.com",87],["npb-news.com",87],["ocsoku.com",87],["okusama-kijyo.com",87],["onecall2ch.com",87],["onihimechan.com",87],["orusoku.com",87],["otakomu.jp",87],["otoko-honne.com",87],["oumaga-times.com",87],["outdoormatome.com",87],["pachinkopachisro.com",87],["paranormal-ch.com",87],["recosoku.com",87],["s2-log.com",87],["saikyo-jump.com",87],["shuraba-matome.com",87],["ske48matome.net",87],["squallchannel.com",87],["sukattojapan.com",87],["sumaburayasan.com",87],["sutekinakijo.com",87],["usi32.com",87],["uwakich.com",87],["uwakitaiken.com",87],["vault76.info",87],["vipnews.jp",87],["vippers.jp",87],["vipsister23.com",87],["vtubernews.jp",87],["watarukiti.com",87],["world-fusigi.net",87],["zakuzaku911.com",87],["zch-vip.com",87],["300cforums.com",87],["a5oc.com",87],["acuraworld.com",87],["airsoftsociety.com",87],["allpar.com",87],["aquaticplantcentral.com",87],["astraownersnetwork.co.uk",87],["avsforum.com",87],["babybmw.net",87],["beesource.com",87],["bimmerwerkz.com",87],["can-amforum.com",87],["canadianmoneyforum.com",87],["catfish1.com",87],["chevymalibuforum.com",87],["chinacarforums.com",87],["chihuahua-people.com",87],["coloradofans.com",87],["dairygoatinfo.com",87],["digitalhome.ca",87],["diychatroom.com",87],["fordescape.org",87],["fullsizebronco.com",87],["mazda3revolution.com",87],["mdxers.org",87],["mytractorforum.com",87],["odyclub.com",87],["rootzwiki.com",87],["skyscrapercity.com",87],["speypages.com",87],["techguy.org",87],["techsupportforum.com",87],["theakforum.net",87],["trailvoy.com",87],["vwvortex.com",87],["interfootball.co.kr",88],["a-ha.io",88],["cboard.net",88],["jjang0u.com",88],["joongdo.co.kr",88],["viva100.com",88],["tweaksforgeeks.com",88],["m.inven.co.kr",88],["mlbpark.donga.com",88],["meconomynews.com",88],["brandbrief.co.kr",88],["motorgraph.com",88],["bleepingcomputer.com",89],["pravda.com.ua",89],["ap7am.com",90],["cinema.com.my",90],["dolldivine.com",90],["giornalone.it",90],["iplocation.net",90],["jamaicajawapos.com",90],["jutarnji.hr",90],["kompasiana.com",90],["mediaindonesia.com",90],["niice-woker.com",90],["slobodnadalmacija.hr",90],["upmedia.mg",90],["mentalfloss.com",91],["wetter.com",92],["neowin.net",[93,94]],["razzball.com",[93,94]],["dnevnik.hr",94],["all3do.com",95],["d-s.io",95],["d0000d.com",95],["d000d.com",95],["d0o0d.com",95],["do0od.com",95],["do7go.com",95],["doods.*",95],["doodstream.*",95],["dooodster.com",95],["doply.net",95],["ds2play.com",95],["ds2video.com",95],["vidply.com",95],["vide0.net",95],["vvide0.com",95],["3minx.com",96],["555fap.com",96],["ai18.pics",96],["anime-jav.com",96],["blackwidof.org",96],["chinese-pics.com",96],["cn-av.com",96],["cnpics.org",96],["cnxx.me",96],["cosplay-xxx.com",96],["cosplay18.pics",96],["fc2ppv.stream",96],["fikfok.net",96],["gofile.download",96],["hentai-sub.com",96],["hentai4f.com",96],["hentaicovid.com",96],["hentaipig.com",96],["hentaixnx.com",96],["idol69.net",96],["javball.com",96],["javbee.*",96],["javring.com",96],["javsunday.com",96],["javtele.net",96],["kin8-av.com",96],["kin8-jav.com",96],["kr-av.com",96],["ovabee.com",96],["pig69.com",96],["porn-pig.com",96],["porn4f.org",96],["sweetie-fox.com",96],["xcamcovid.com",96],["xxpics.org",96],["lidovky.cz",97],["sbazar.cz",98],["hentaivost.fr",99],["jelonka.com",100],["isgfrm.com",101],["lokhung888.com",102],["advertisertape.com",103],["watchadsontape.com",103],["vosfemmes.com",104],["voyeurfrance.net",104],["hyundaitucson.info",105],["exambd.net",106],["cgtips.org",107],["freewebcart.com",108],["freemagazines.top",108],["siamblockchain.com",108],["emuenzen.de",109],["kickass.*",110],["unblocked.id",112],["listendata.com",113],["7xm.xyz",113],["fastupload.io",113],["azmath.info",113],["wouterplanet.com",114],["xenvn.com",115],["4kporn.xxx",116],["androidacy.com",117],["4porn4.com",118],["bestpornflix.com",119],["freeroms.com",119],["andhrafriends.com",119],["723qrh1p.fun",119],["98zero.com",120],["mediaset.es",120],["hwbusters.com",120],["beatsnoop.com",121],["fetchpik.com",121],["hackerranksolution.in",121],["camsrip.com",121],["file.org",121],["btcbunch.com",123],["teachoo.com",[124,125]],["mafiatown.pl",126],["bitcotasks.com",127],["hilites.today",128],["udvl.com",129],["www.chip.de",[130,131,132,133,134]],["topsporter.net",135],["sportshub.to",135],["myanimelist.net",136],["unofficialtwrp.com",137],["codec.kyiv.ua",137],["kimcilonlyofc.com",137],["bitcosite.com",138],["bitzite.com",138],["teluguflix.*",139],["hacoos.com",140],["watchhentai.net",141],["hes-goals.io",141],["pkbiosfix.com",141],["casi3.xyz",141],["zefoy.com",142],["mailgen.biz",143],["tempinbox.xyz",143],["vidello.net",144],["newscon.org",145],["yunjiema.top",145],["pcgeeks-games.com",145],["resizer.myct.jp",146],["gametohkenranbu.sakuraweb.com",147],["jisakuhibi.jp",148],["rank1-media.com",148],["lifematome.blog",149],["fm.sekkaku.net",150],["dvdrev.com",151],["betweenjpandkr.blog",152],["nft-media.net",153],["ghacks.net",154],["leak.sx",155],["paste.bin.sx",155],["pornleaks.in",155],["khoaiphim.com",157],["haafedk2.com",158],["jovemnerd.com.br",159],["totalcsgo.com",160],["manysex.com",161],["gaminginfos.com",162],["tinxahoivn.com",163],["m.4khd.com",164],["westmanga.*",164],["automoto.it",165],["fordownloader.com",166],["codelivly.com",167],["tchatche.com",168],["cryptoearns.com",168],["lordchannel.com",169],["novelhall.com",170],["bagi.co.in",171],["keran.co",171],["biblestudytools.com",172],["christianheadlines.com",172],["ibelieve.com",172],["kuponigo.com",173],["inxxx.com",174],["bemyhole.com",174],["embedwish.com",175],["jenismac.com",176],["vxetable.cn",177],["luluvid.com",178],["daddylive1.*",178],["esportivos.*",178],["instream.pro",178],["poscitechs.*",178],["powerover.online",178],["sportea.link",178],["ustream.pro",178],["animeshqip.site",178],["apkship.shop",178],["filedot.to",178],["hdstream.one",178],["kingstreamz.site",178],["live.fastsports.store",178],["livesnow.me",178],["livesports4u.pw",178],["nuxhallas.click",178],["papahd.info",178],["rgshows.me",178],["sportmargin.live",178],["sportmargin.online",178],["sportsloverz.xyz",178],["supertipzz.online",178],["ultrastreamlinks.xyz",178],["webmaal.cfd",178],["wizistreamz.xyz",178],["educ4m.com",178],["fromwatch.com",178],["visualnewshub.com",178],["donghuaworld.com",179],["letsdopuzzles.com",180],["rediff.com",181],["igay69.com",182],["dzapk.com",183],["darknessporn.com",184],["familyporner.com",184],["freepublicporn.com",184],["pisshamster.com",184],["punishworld.com",184],["xanimu.com",184],["tainio-mania.online",185],["eroticmoviesonline.me",186],["series9movies.com",186],["teleclub.xyz",187],["ecamrips.com",188],["showcamrips.com",188],["tucinehd.com",189],["uyeshare.cc",189],["9animetv.to",190],["qiwi.gg",191],["jornadaperfecta.com",192],["sousou-no-frieren.com",193],["unite-guide.com",195],["thebullspen.com",196],["receitasdaora.online",197],["hiraethtranslation.com",199],["xfreehd.com",200],["freethesaurus.com",201],["thefreedictionary.com",201],["dexterclearance.com",202],["x86.co.kr",203],["onlyfaucet.com",204],["x-x-x.tube",205],["fdownloader.net",206],["thehackernews.com",207],["mielec.pl",208],["treasl.com",209],["mrbenne.com",210],["sportsonline.si",211],["fiuxy2.co",212],["animeunity.to",213],["tokopedia.com",214],["remixsearch.net",215],["remixsearch.es",215],["onlineweb.tools",215],["sharing.wtf",215],["2024tv.ru",216],["modrinth.com",217],["curseforge.com",217],["xnxxcom.xyz",218],["sportsurge.net",219],["joyousplay.xyz",219],["quest4play.xyz",[219,221]],["moneycontrol.com",220],["cookiewebplay.xyz",221],["ilovetoplay.xyz",221],["streamcaster.live",221],["weblivehdplay.ru",221],["nontongo.win",222],["m9.news",223],["callofwar.com",224],["secondhandsongs.com",225],["nohost.one",226],["send.cm",227],["send.now",227],["3rooodnews.net",228],["xxxbfvideo.net",229],["filmy4wap.co.in",230],["filmy4waps.org",230],["gameshop4u.com",231],["regenzi.site",231],["historicaerials.com",[232,233]],["cinemastervip.com",233],["handirect.fr",234],["fsiblog3.club",235],["kamababa.desi",235],["sat-sharing.com",235],["getfiles.co.uk",236],["genelify.com",237],["dhtpre.com",238],["xbaaz.com",239],["lineupexperts.com",241],["fearmp4.ru",242],["appnee.com",243],["pornoxo.com",244],["m.shuhaige.net",245],["streamingnow.mov",246],["thesciencetoday.com",247],["sportnews.to",247],["ghbrisk.com",249],["iplayerhls.com",249],["bacasitus.com",250],["katoikos.world",250],["abstream.to",251],["pawastreams.pro",252],["rebajagratis.com",253],["tv.latinlucha.es",253],["fetcheveryone.com",254],["reviewdiv.com",255],["laurelberninteriors.com",256],["godlike.com",257],["godlikeproductions.com",257],["bestsportslive.org",258],["alexsports.*>>",259],["btvsports.my>>",259],["cr7-soccer.store>>",259],["e2link.link>>",259],["fsportshd.xyz>>",259],["kakarotfoot.ru>>",259],["pelotalibrevivo.net>>",259],["powerover.site>>",259],["redditsoccerstreams.name>>",259],["sportstohfa.online>>",259],["sportzonline.site>>",259],["streamshunters.eu>>",259],["totalsportek1000.com>>",259],["worldsports.*>>",259],["7fractals.icu",259],["allevertakstream.space",259],["brainknock.net",259],["btvsports.my",259],["capo6play.com",259],["capoplay.net",259],["cdn256.xyz",259],["courseleader.net",259],["cr7-soccer.store",259],["dropbang.net",259],["e2link.link",259],["hornpot.net",259],["fsportshd.xyz",259],["ihdstreams.*",259],["kakarotfoot.ru",259],["meltol.net",259],["nativesurge.net",259],["powerover.site",259],["snapinstadownload.xyz",259],["sportstohfa.online",259],["sportzonline.site",259],["stellarthread.com",259],["streamshunters.eu",259],["totalsportek1000.com",259],["voodc.com",259],["wavewalt.me",259],["worldsports.*",259],["ziggogratis.site",259],["bestreamsports.org",260],["streamhls.to",262],["xmalay1.net",263],["letemsvetemapplem.eu",264],["pc-builds.com",265],["emoji.gg",267],["pfps.gg",268],["live4all.net",269],["pokemon-project.com",270],["umatechnology.org",271],["moviesonlinefree.*",272],["fileszero.com",273],["viralharami.com",273],["wstream.cloud",273],["bmamag.com",274],["bmacanberra.wpcomstaging.com",274],["mmsbee42.com",275],["mmsmasala.com",275],["idlixku.com",276],["andrenalynrushplay.cfd",277],["fnjplay.xyz",277],["porn4fans.com",279],["kaliscan.io",280],["webnoveltranslations.com",281],["geekchamp.com",282],["mobilestalk.net",282],["techbloat.com",282],["techyorker.com",282],["elamigosweb.com",283],["mangacrab.org",284],["webtoon.xyz",285],["manhwaclub.net",286],["edumail.su",287],["rainmail.xyz",287],["mlbbox.me",288],["mgeko.cc",289],["sizecharts.net",290],["talksport.com",292],["cefirates.com",293],["comicleaks.com",293],["tapmyback.com",293],["ping.gg",293],["nookgaming.com",293],["creatordrop.com",293],["bitdomain.biz",293],["fort-shop.kiev.ua",293],["accuretawealth.com",293],["resourceya.com",293],["tracktheta.com",293],["adaptive.marketing",293],["camberlion.com",293],["trybawaryjny.pl",293],["segops.madisonspecs.com",293],["stresshelden-coaching.de",293],["controlconceptsusa.com",293],["ryaktive.com",293],["tip.etip-staging.etip.io",293],["future-fortune.com",294],["furucombo.app",294],["bolighub.dk",294],["intercity.technology",295],["freelancer.taxmachine.be",295],["adria.gg",295],["fjlaboratories.com",295],["abhijith.page",295],["helpmonks.com",295],["dataunlocker.com",296],["proboards.com",297],["winclassic.net",297],["farmersjournal.ie",298],["jxoplay.xyz",300],["zorroplay.xyz",300],["dlhd.*>>",300]]);
const exceptionsMap = new Map([["chatango.com",[8,300]],["twitter.com",[8]],["youtube.com",[8]]]);
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
