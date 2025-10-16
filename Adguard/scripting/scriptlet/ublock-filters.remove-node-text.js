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
const argsList = [["script","window,\"fetch\""],["script","offsetParent"],["script","/adblock/i"],["script","location.reload"],["script","/google_jobrunner|AdBlock|pubadx|embed\\.html/i"],["script","/aps_csm|reportErrors|adinterval|YWRuZ2lu|yepyouyesobject|gettheName|Object\\.keys|window\\[|snigel|adblock/"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","WebAssembly"],["script","detectAdBlock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","deblocker"],["script","/DName|#iframe_id/"],["script","adblockDetector"],["script","/bypass.php"],["script","htmls"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|AdBlockCheck|;break;case \\$\\./i"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","firstp"],["script","ctrlKey"],["script","/\\);break;case|advert_|POPUNDER_URL|adblock/"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","/exoloader/i"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","\"adserverDomain\""],["script","sandbox"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","adsBlocked"],["script","ai_adb"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"|[\"']_aQS0\\w+[\"']/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","Ad-Shield"],["script","adrecover.com"],["script","\"data-sdk\""],["script","head.appendChild.bind"],["script","/^\\(async\\(\\)=>\\{function.{1,200}head.{1,100}\\.bind.{1,900}location\\.href.{1,100}\\}\\)\\(\\);$/"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/detectAdblock|WebAssembly|pop1stp|popMagic/i"],["script","_ADX_"],["script","div.offsetHeight"],["script","/adbl|RegExp/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","Popunder"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","liedetector"],["script","end_click"],["script","getComputedStyle"],["script","closeAd"],["script","/adconfig/i"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","open"],["script","app_checkext"],["script","ad blocker"],["script","clientHeight"],["script","Brave"],["script","await"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","popundersPerIP"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","pop.doEvent"],["script","Ads"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","adsSrc"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","HTMLAllCollection"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","'hidden'"],["script","kmtAdsData"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/getComputedStyle|overlay/"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","/Popunder|Banner/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/ai_|eval|Google/"],["script","/delete window|popundersPerIP|FingerprintJS|adserverDomain|globalThis;break;case|ai_adb|adContainer/"],["script","/eval|adb/i"],["script","catcher"],["script","/setADBFlag|cRAds|\\;break\\;case|adManager|const popup/"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","self.loadPW"],["script","onload"],["script","/andbox|adBlock|data-zone|histats|contextmenu|ConsoleBan/"],["script","closePlayer"],["script","/banner/i"],["script","_0x"],["script","destroyContent"],["script","advanced_ads_check_adblocker"],["script","/dismissAdBlock|533092QTEErr/"],["script","/bait|adblock/i"],["script","debugger"],["script","decodeURIComponent"],["script","adblock_popup"],["script","MutationObserver"],["script","ad-gate"],["script","randPrefix"],["script",":visible"],["script","Datafadace"],["script","/popunder/i"],["script","adConfig"],["script","enable_ad_block_detector"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","sendFakeRequest"]];
const hostnamesMap = new Map([["www.youtube.com",0],["poophq.com",1],["veev.to",1],["faqwiki.*",2],["snapwordz.com",2],["toolxox.com",2],["rl6mans.com",2],["im9.eu",2],["marinetraffic.live",2],["nontonx.com",3],["embed.wcostream.com",4],["client.falixnodes.net",5],["pandadoc.com",6],["web.de",7],["skidrowreloaded.com",[8,65]],["1337x.*",[8,65]],["1stream.eu",8],["4kwebplay.xyz",8],["alldownplay.xyz",8],["anime4i.vip",8],["antennasports.ru",[8,71]],["boxingstream.me",8],["buffstreams.app",8],["claplivehdplay.ru",8],["cracksports.me",[8,18]],["cricstream.me",8],["cricstreams.re",[8,18]],["dartsstreams.com",8],["dl-protect.link",8],["eurekaddl.baby",8],["euro2024direct.ru",8],["ext.to",8],["extrem-down.*",8],["extreme-down.*",8],["eztv.*",8],["eztvx.to",8],["f1box.me",8],["filecrypt.cc",8],["flix-wave.*",8],["flixrave.me",8],["golfstreams.me",8],["hikaritv.xyz",8],["ianimes.one",8],["istreameast.app",8],["jointexploit.net",[8,65]],["kenitv.me",[8,18]],["lewblivehdplay.ru",[8,215]],["mediacast.click",8],["mixdrop.*",[8,65]],["mlbbite.net",8],["mlbstreams.ai",8],["motogpstream.me",8],["nbabox.me",8],["nflbite.com",8],["nflbox.me",8],["nhlbox.me",8],["ogladaj.in",8],["playcast.click",8],["qatarstreams.me",[8,18]],["qqwebplay.xyz",[8,215]],["reidoscanais.life",8],["rnbastreams.com",8],["rugbystreams.me",8],["sanet.*",8],["socceronline.me",8],["soccerworldcup.me",[8,18]],["sportshd.*",8],["sportzonline.si",8],["streamed.su",8],["sushiscan.net",8],["topstreams.info",8],["totalsportek.to",8],["tvableon.me",[8,18]],["vecloud.eu",8],["vibestreams.*",8],["vipstand.pm",8],["webcamrips.to",8],["worldsports.me",8],["x1337x.*",8],["zone-telechargement.*",8],["720pstream.*",[8,71]],["embedsports.me",[8,106]],["embedstream.me",[8,18,65,71,106]],["reliabletv.me",[8,106]],["topembed.pw",[8,73,215]],["crackstreamer.net",8],["vidsrc.*",[8,18,71]],["vidco.pro",[8,71]],["freestreams-live.*>>",8],["moviepilot.de",[9,61]],["userupload.*",10],["cinedesi.in",10],["turkedebiyati.org",10],["intro-hd.net",10],["monacomatin.mc",10],["nodo313.net",10],["mhdtvsports.*",[10,35]],["hesgoal-tv.io",10],["hesgoal-vip.io",10],["earn.punjabworks.com",10],["mahajobwala.in",10],["solewe.com",10],["panel.play.hosting",10],["total-sportek.to",10],["hesgoal-vip.to",10],["shoot-yalla.me",10],["shoot-yalla-tv.live",10],["pahe.*",[11,65,73]],["soap2day.*",11],["yts.mx",12],["hqq.*",13],["waaw.*",13],["pixhost.*",14],["vipbox.*",15],["telerium.*",16],["apex2nova.com",16],["hoca5.com",16],["germancarforum.com",17],["cybercityhelp.in",17],["innateblogger.com",17],["omeuemprego.online",17],["negyzetmeterarak.hu",17],["viprow.*",[18,65,71]],["bluemediadownload.*",18],["bluemediafile.*",18],["bluemedialink.*",18],["bluemediastorage.*",18],["bluemediaurls.*",18],["urlbluemedia.*",18],["bowfile.com",18],["cloudvideo.tv",[18,71]],["cloudvideotv.*",[18,71]],["coloredmanga.com",18],["exeo.app",18],["hiphopa.net",[18,65]],["megaup.net",18],["olympicstreams.co",[18,71]],["tv247.us",[18,65]],["uploadhaven.com",18],["userscloud.com",[18,71]],["streamnoads.com",[18,65,71,98]],["neodrive.xyz",18],["dutchycorp.*",19],["faucet.ovh",19],["mmacore.tv",20],["javtiful.com",[20,65]],["nxbrew.net",20],["brawlify.com",20],["oko.sh",21],["variety.com",[22,84]],["gameskinny.com",22],["deadline.com",[22,84]],["mlive.com",[22,84]],["washingtonpost.com",23],["gosexpod.com",24],["sexo5k.com",25],["truyen-hentai.com",25],["beinmatch.*",[26,65]],["theshedend.com",27],["cybermania.ws",27],["zeroupload.com",27],["streamvid.net",[27,65]],["securenetsystems.net",27],["miniwebtool.com",27],["bchtechnologies.com",27],["eracast.cc",27],["flatai.org",27],["leeapk.com",27],["spiegel.de",28],["jacquieetmichel.net",29],["hausbau-forum.de",30],["althub.club",30],["kiemlua.com",30],["doujindesu.*",31],["atlasstudiousa.com",31],["51bonusrummy.in",[31,74]],["tackledsoul.com",32],["adrino1.bonloan.xyz",32],["vi-music.app",32],["instanders.app",32],["rokni.xyz",32],["keedabankingnews.com",32],["sampledrive.org",[32,77]],["windroid777.com",32],["z80ne.com",32],["tea-coffee.net",33],["spatsify.com",33],["newedutopics.com",33],["getviralreach.in",33],["edukaroo.com",33],["funkeypagali.com",33],["careersides.com",33],["nayisahara.com",33],["wikifilmia.com",33],["infinityskull.com",33],["viewmyknowledge.com",33],["iisfvirtual.in",33],["starxinvestor.com",33],["jkssbalerts.com",33],["imagereviser.com",34],["veganab.co",35],["camdigest.com",35],["learnmany.in",35],["amanguides.com",[35,41]],["highkeyfinance.com",[35,41]],["appkamods.com",35],["techacode.com",35],["djqunjab.in",35],["downfile.site",35],["expertvn.com",35],["trangchu.news",35],["shemaleraw.com",35],["thecustomrom.com",35],["wemove-charity.org",35],["nulleb.com",35],["snlookup.com",35],["bingotingo.com",35],["ghior.com",35],["3dmili.com",35],["karanpc.com",35],["plc247.com",35],["apkdelisi.net",35],["freepasses.org",35],["poplinks.*",[35,45]],["tomarnarede.pt",35],["basketballbuzz.ca",35],["dribbblegraphics.com",35],["kemiox.com",35],["teksnologi.com",35],["bharathwick.com",35],["descargaspcpro.net",35],["dx-tv.com",[35,65]],["rt3dmodels.com",35],["plc4me.com",35],["blisseyhusbands.com",35],["mhdsports.*",35],["mhdsportstv.*",35],["mhdtvworld.*",35],["mhdtvmax.*",35],["mhdstream.*",35],["madaradex.org",35],["trigonevo.com",35],["franceprefecture.fr",35],["jazbaat.in",35],["aipebel.com",35],["audiotools.blog",35],["embdproxy.xyz",35],["fc-lc.*",36],["jobzhub.store",37],["fitdynamos.com",37],["labgame.io",37],["kenzo-flowertag.com",38],["mdn.lol",38],["btcbitco.in",39],["btcsatoshi.net",39],["cempakajaya.com",39],["crypto4yu.com",39],["manofadan.com",39],["readbitcoin.org",39],["wiour.com",39],["coin-free.com",[39,65]],["tremamnon.com",39],["bitsmagic.fun",39],["ourcoincash.xyz",39],["aylink.co",40],["sugarona.com",41],["nishankhatri.xyz",41],["cety.app",42],["exe-urls.com",42],["exego.app",42],["cutlink.net",42],["cutyurls.com",42],["cutty.app",42],["cutnet.net",42],["jixo.online",42],["ios.codevn.net",42],["tinys.click",43],["loan.creditsgoal.com",43],["rupyaworld.com",43],["vahantoday.com",43],["techawaaz.in",43],["loan.bgmi32bitapk.in",43],["formyanime.com",43],["gsm-solution.com",43],["h-donghua.com",43],["hindisubbedacademy.com",43],["hm4tech.info",43],["mydverse.*",43],["panelprograms.blogspot.com",43],["ripexbooster.xyz",43],["serial4.com",43],["tutorgaming.com",43],["unblockedgamesgplus.gitlab.io",43],["everydaytechvams.com",43],["dipsnp.com",43],["cccam4sat.com",43],["diendancauduong.com",43],["stitichsports.com",43],["aiimgvlog.fun",44],["appsbull.com",45],["diudemy.com",45],["maqal360.com",45],["androjungle.com",45],["bookszone.in",45],["shortix.co",45],["makefreecallsonline.com",45],["msonglyrics.com",45],["app-sorteos.com",45],["bokugents.com",45],["client.pylexnodes.net",45],["btvplus.bg",45],["listar-mc.net",45],["coingraph.us",46],["impact24.us",46],["iconicblogger.com",47],["auto-crypto.click",47],["tpi.li",48],["shrinkme.*",49],["shrinke.*",49],["mrproblogger.com",49],["themezon.net",49],["smutty.com",49],["e-sushi.fr",49],["gayforfans.com",49],["freeadultcomix.com",49],["down.dataaps.com",49],["filmweb.pl",[49,188]],["livecamrips.*",49],["safetxt.net",49],["filespayouts.com",49],["atglinks.com",50],["kbconlinegame.com",51],["hamrojaagir.com",51],["odijob.com",51],["stfly.biz",52],["airevue.net",52],["atravan.net",52],["cdn1.site",[52,65]],["simana.online",53],["fooak.com",53],["joktop.com",53],["evernia.site",53],["falpus.com",53],["rfiql.com",54],["gujjukhabar.in",54],["smartfeecalculator.com",54],["djxmaza.in",54],["thecubexguide.com",54],["jytechs.in",54],["financacerta.com",55],["encurtads.net",55],["mastkhabre.com",56],["weshare.is",57],["vplink.in",58],["3dsfree.org",59],["up4load.com",60],["alpin.de",61],["boersennews.de",61],["chefkoch.de",61],["chip.de",61],["clever-tanken.de",61],["desired.de",61],["donnerwetter.de",61],["fanfiktion.de",61],["focus.de",61],["formel1.de",61],["frustfrei-lernen.de",61],["gewinnspiele.tv",61],["giga.de",61],["gut-erklaert.de",61],["kino.de",61],["messen.de",61],["nickles.de",61],["nordbayern.de",61],["spielfilm.de",61],["teltarif.de",[61,62]],["unsere-helden.com",61],["weltfussball.at",61],["watson.de",61],["mactechnews.de",61],["sport1.de",61],["welt.de",61],["sport.de",61],["allthingsvegas.com",63],["100percentfedup.com",63],["beforeitsnews.com",63],["concomber.com",63],["conservativefiringline.com",63],["dailylol.com",63],["funnyand.com",63],["letocard.fr",63],["mamieastuce.com",63],["meilleurpronostic.fr",63],["patriotnationpress.com",63],["toptenz.net",63],["vitamiiin.com",63],["writerscafe.org",63],["populist.press",63],["dailytruthreport.com",63],["livinggospeldaily.com",63],["first-names-meanings.com",63],["welovetrump.com",63],["thehayride.com",63],["thelibertydaily.com",63],["thepoke.co.uk",63],["thepolitistick.com",63],["theblacksphere.net",63],["shark-tank.com",63],["naturalblaze.com",63],["greatamericanrepublic.com",63],["dailysurge.com",63],["truthlion.com",63],["flagandcross.com",63],["westword.com",63],["republicbrief.com",63],["freedomfirstnetwork.com",63],["phoenixnewtimes.com",63],["designbump.com",63],["clashdaily.com",63],["madworldnews.com",63],["reviveusa.com",63],["sonsoflibertymedia.com",63],["thedesigninspiration.com",63],["videogamesblogger.com",63],["protrumpnews.com",63],["thepalmierireport.com",63],["kresy.pl",63],["thepatriotjournal.com",63],["thegatewaypundit.com",63],["wltreport.com",63],["miaminewtimes.com",63],["politicalsignal.com",63],["rightwingnews.com",63],["bigleaguepolitics.com",63],["comicallyincorrect.com",63],["upornia.com",64],["mexa.sh",65],["123-movies.*",65],["123movieshd.*",65],["123movieshub.*",65],["123moviesme.*",65],["1337x.ninjaproxy1.com",65],["1bit.space",65],["1bitspace.com",65],["1stream.*",65],["1tamilmv.*",65],["2ddl.*",65],["2umovies.*",65],["3dporndude.com",65],["3hiidude.*",65],["4archive.org",65],["4chanarchives.com",65],["4horlover.com",65],["4stream.*",65],["560pmovie.com",65],["5movies.*",65],["7hitmovies.*",65],["85videos.com",65],["9xmovie.*",65],["aagmaal.*",[65,71]],["acefile.co",65],["actusports.eu",65],["adblockeronstape.*",[65,98]],["adblockeronstreamtape.*",65],["adblockplustape.*",[65,98]],["adblockstreamtape.*",[65,98]],["adblockstrtape.*",[65,98]],["adblockstrtech.*",[65,98]],["adblocktape.*",[65,98]],["adclickersbot.com",65],["adcorto.*",65],["adricami.com",65],["adslink.pw",[65,68]],["adultstvlive.com",65],["adz7short.space",65],["aeblender.com",65],["affordwonder.net",65],["ahdafnews.blogspot.com",65],["aiblog.tv",[65,74]],["ak47sports.com",65],["akuma.moe",65],["alexsports.*",[65,254]],["alexsportss.*",65],["alexsportz.*",65],["allplayer.tk",65],["amateurblog.tv",[65,74]],["androidadult.com",[65,243]],["anhsexjav.xyz",65],["anidl.org",65],["anime-loads.org",65],["animeblkom.net",65],["animefire.plus",65],["animelek.me",65],["animepahe.*",65],["animesanka.*",65],["animesorionvip.net",65],["animespire.net",65],["animestotais.xyz",65],["animeyt.es",65],["animixplay.*",65],["aniplay.*",65],["anroll.net",65],["antiadtape.*",[65,98]],["anymoviess.xyz",65],["aotonline.org",65],["asenshu.com",65],["asialiveaction.com",65],["asianclipdedhd.net",65],["asianclub.*",65],["ask4movie.*",65],["askim-bg.com",65],["assistirtvonlinebr.net",65],["asumsikedaishop.com",65],["atomixhq.*",[65,71]],["atomohd.*",65],["avcrempie.com",65],["avseesee.com",65],["gettapeads.com",[65,98]],["bajarjuegospcgratis.com",65],["balkanteka.net",65],["beastvid.tv",65],["belowporn.com",65],["bestgirlsexy.com",65],["bestnhl.com",65],["bestporncomix.com",65],["bhaai.*",65],["bigwarp.*",65],["bikinbayi.com",65],["bikinitryon.net",65],["birdurls.com",65],["bitsearch.to",65],["blackcockadventure.com",65],["blackcockchurch.org",65],["blackporncrazy.com",65],["blizzboygames.net",65],["blizzpaste.com",65],["blkom.com",65],["blog-peliculas.com",65],["blogtrabalhista.com",65],["blurayufr.*",65],["bobsvagene.club",65],["bokep.im",65],["bokep.top",65],["bokepnya.com",65],["bollyflix.cards",65],["boyfuck.me",65],["brilian-news.id",65],["brupload.net",65],["buffstreams.*",65],["buzter.xyz",65],["caitlin.top",65],["camchickscaps.com",65],["camgirls.casa",65],["canalesportivo.*",65],["cashurl.in",65],["ccurl.net",[65,71]],["charexempire.com",65],["cizgivedizi.com",65],["clickndownload.*",65],["clicknupload.*",[65,73]],["clik.pw",65],["coins100s.fun",65],["comohoy.com",65],["coolcast2.com",65],["cordneutral.net",65],["countylocalnews.com",65],["cpmlink.net",65],["crackstreamshd.click",65],["crespomods.com",65],["crisanimex.com",65],["crunchyscan.fr",65],["cuevana3.fan",65],["cuevana3hd.com",65],["cumception.com",65],["cutpaid.com",65],["daddylive.*",[65,71,213]],["daddylivehd.*",[65,71]],["daddylivestream.com",[65,213]],["dailyuploads.net",65],["darkmahou.org",65],["datawav.club",65],["daughtertraining.com",65],["ddrmovies.*",65],["deepgoretube.site",65],["deltabit.co",65],["deporte-libre.top",65],["depvailon.com",65],["derleta.com",65],["desiremovies.*",65],["desivdo.com",65],["desixx.net",65],["detikkebumen.com",65],["deutschepornos.me",65],["devlib.*",65],["diasoft.xyz",65],["dipelis.junctionjive.co.uk",65],["directupload.net",65],["divxtotal.*",65],["divxtotal1.*",65],["dixva.com",65],["djmaza.my",65],["dlhd.*",[65,213]],["doctormalay.com",65],["dofusports.xyz",65],["doods.cam",65],["doodskin.lat",65],["downloadrips.com",65],["downvod.com",65],["dphunters.mom",65],["dragontranslation.com",65],["dvdfullestrenos.com",65],["dvdplay.*",[65,71]],["ebookbb.com",65],["ebookhunter.net",65],["egyanime.com",65],["egygost.com",65],["ekasiwap.com",65],["electro-torrent.pl",65],["elixx.*",65],["elrefugiodelpirata.com",65],["enjoy4k.*",65],["eplayer.click",65],["erovoice.us",65],["eroxxx.us",65],["estrenosdoramas.net",65],["estrenosflix.*",65],["estrenosflux.*",65],["estrenosgo.*",65],["everia.club",65],["everythinginherenet.blogspot.com",65],["extratorrent.st",65],["extremotvplay.com",65],["f1stream.*",65],["fapptime.com",65],["faucethero.com",65],["favoyeurtube.net",65],["fbstream.*",65],["fc2db.com",65],["femdom-joi.com",[65,74]],["fenixsite.net",65],["file4go.*",65],["filegram.to",[65,68,74]],["fileone.tv",65],["film1k.com",65],["filmeonline2023.net",65],["filmesonlinex.org",65],["filmesonlinexhd.biz",65],["filmisub.cc",65],["filmnudes.com",65],["filmovitica.com",65],["filmymaza.blogspot.com",65],["filmyzilla.*",[65,71]],["filthy.family",65],["findav.*",65],["findporn.*",65],["flickzap.com",65],["flixmaza.*",65],["flizmovies.*",65],["flostreams.xyz",65],["flyfaucet.com",65],["footyhunter.lol",65],["forex-trnd.com",65],["forumchat.club",65],["forumlovers.club",65],["freeomovie.co.in",65],["freeomovie.to",65],["freeporncomic.net",65],["freepornhdonlinegay.com",65],["freeproxy.io",65],["freeshot.live",65],["freetvsports.*",65],["freeuse.me",65],["freeusexporn.com",65],["fsharetv.cc",65],["fsicomics.com",65],["fullymaza.*",65],["g-porno.com",65],["g3g.*",65],["galinhasamurai.com",65],["gamepcfull.com",65],["gamesmountain.com",65],["gamesrepacks.com",65],["gamingguru.fr",65],["gamovideo.com",65],["garota.cf",65],["gaydelicious.com",65],["gayfor.us",65],["gaypornhdfree.com",65],["gaypornhot.com",65],["gaypornmasters.com",65],["gaysex69.net",65],["gemstreams.com",65],["get-to.link",65],["girlscanner.org",65],["giurgiuveanul.ro",65],["gledajcrtace.xyz",65],["gocast2.com",65],["gomo.to",65],["gostosa.cf",65],["gotxx.*",65],["grantorrent.*",65],["gratispaste.com",65],["gravureblog.tv",[65,74]],["gupload.xyz",65],["haho.moe",65],["hayhd.net",65],["hdmoviesfair.*",[65,71]],["hdmoviesflix.*",65],["hdpornflix.com",65],["hdsaprevodom.com",65],["hdstreamss.club",65],["hentaiporno.xxx",65],["hentais.tube",65],["hentaistream.co",65],["hentaitk.net",65],["hentaitube.online",65],["hentaiworld.tv",65],["hesgoal.tv",65],["hexupload.net",65],["hhkungfu.tv",65],["highlanderhelp.com",65],["hiidudemoviez.*",65],["hindimovies.to",[65,71]],["hindimoviestv.com",65],["hiperdex.com",65],["hispasexy.org",65],["hitomi.la",65],["hitprn.com",65],["hivflix.*",65],["hoca4u.com",65],["hollymoviehd.cc",65],["hoodsite.com",65],["hopepaste.download",65],["hornylips.com",65],["hotgranny.live",65],["hotmama.live",65],["hqcelebcorner.net",65],["huren.best",65],["hwnaturkya.com",[65,71]],["hxfile.co",[65,71]],["igfap.com",65],["iklandb.com",65],["illink.net",65],["imgsen.*",65],["imgsex.xyz",65],["imgsto.*",65],["imgtraffic.com",65],["imx.to",65],["incest.*",65],["incestflix.*",65],["influencersgonewild.org",65],["infosgj.free.fr",65],["investnewsbrazil.com",65],["itdmusics.com",65],["itopmusic.*",65],["itsuseful.site",65],["itunesfre.com",65],["iwatchfriendsonline.net",[65,150]],["japangaysex.com",65],["jav-noni.cc",65],["javboys.tv",65],["javcl.com",65],["jav-coco.com",65],["javhay.net",65],["javhun.com",65],["javleak.com",65],["javmost.*",65],["javporn.best",65],["javsek.net",65],["javsex.to",65],["jimdofree.com",65],["jiofiles.org",65],["jorpetz.com",65],["jp-films.com",65],["jpop80ss3.blogspot.com",65],["jpopsingles.eu",[65,193]],["jrants.com",[65,80]],["justfullporn.net",65],["kantotflix.net",65],["kaplog.com",65],["kasiporn.com",65],["keeplinks.*",65],["keepvid.*",65],["keralahd.*",65],["khatrimazaful.*",65],["khatrimazafull.*",[65,74]],["kimochi.info",65],["kimochi.tv",65],["kinemania.tv",65],["kissasian.*",65],["kolnovel.site",65],["koltry.life",65],["konstantinova.net",65],["koora-online.live",65],["kunmanga.com",[65,71]],["kwithsub.com",65],["lat69.me",65],["latinblog.tv",[65,74]],["latinomegahd.net",65],["leechall.*",65],["leechpremium.link",65],["legendas.dev",65],["legendei.net",65],["lighterlegend.com",65],["linclik.com",65],["linkebr.com",65],["linkrex.net",65],["linkshorts.*",65],["lulu.st",65],["lulustream.com",[65,73]],["lulustream.live",65],["luluvdo.com",65],["luluvdoo.com",65],["mangaweb.xyz",65],["mangovideo.*",65],["masahub.com",65],["masahub.net",65],["masaporn.*",65],["maturegrannyfuck.com",65],["mdfx9dc8n.net",65],["mdy48tn97.com",65],["mediapemersatubangsa.com",65],["mega-mkv.com",65],["megapastes.com",65],["megapornpics.com",65],["messitv.net",65],["meusanimes.net",65],["milfmoza.com",65],["milfnut.*",65],["milfzr.com",65],["millionscast.com",65],["mimaletamusical.blogspot.com",65],["miniurl.*",65],["mirrorace.*",65],["mitly.us",65],["mixdroop.*",65],["mixiporn.fun",65],["miztv.top",65],["mkv-pastes.com",65],["mkvcage.*",65],["mlbstream.*",65],["mlsbd.*",65],["mmsbee.*",65],["monaskuliner.ac.id",65],["moredesi.com",65],["motogpstream.*",65],["moutogami.com",65],["movgotv.net",65],["movi.pk",65],["movieplex.*",65],["movierulzlink.*",65],["movies123.*",[65,74]],["moviesflix.*",65],["moviesmeta.*",65],["moviesmod.com.pl",65],["moviessources.*",65],["moviesverse.*",65],["movieswbb.com",65],["moviewatch.com.pk",65],["moviezwaphd.*",65],["mp4upload.com",65],["mrskin.live",65],["mrunblock.*",65],["multicanaistv.com",65],["mundowuxia.com",65],["multicanais.*",65],["myeasymusic.ir",65],["myonvideo.com",65],["myyouporn.com",65],["mzansifun.com",65],["naughtypiss.com",65],["nbastream.*",65],["nekopoi.*",[65,74]],["netfapx.com",65],["netfuck.net",65],["new-fs.eu",65],["newmovierulz.*",65],["newtorrentgame.com",65],["neymartv.net",65],["nflstream.*",65],["nflstreams.me",65],["nhlstream.*",65],["nicekkk.com",65],["nicesss.com",65],["nlegs.com",65],["noblocktape.*",[65,98]],["nocensor.*",65],["noni-jav.com",65],["notformembersonly.com",65],["novamovie.net",65],["novelpdf.xyz",65],["novelssites.com",[65,71]],["novelup.top",65],["nsfwr34.com",65],["nu6i-bg-net.com",65],["nudebabesin3d.com",65],["nzbstars.com",65],["o2tvseries.com",65],["ohjav.com",65],["ojearnovelas.com",65],["okanime.xyz",65],["olweb.tv",65],["olympusbiblioteca.site",65],["on9.stream",65],["onepiece-mangaonline.com",65],["onifile.com",65],["onionstream.live",65],["onlinesaprevodom.net",65],["onlyfams.*",65],["onlyfullporn.video",65],["onplustv.live",65],["originporn.com",65],["ouo.*",65],["ovagames.com",65],["pagalworld.cc",65],["pastemytxt.com",65],["payskip.org",65],["pctfenix.*",[65,71]],["pctnew.*",[65,71]],["peeplink.in",65],["peliculas24.*",65],["peliculasmx.net",65],["pelisflix20.*",65],["pelisplus.*",65],["pelisxporno.net",65],["pencarian.link",65],["pendidikandasar.net",65],["pervertgirlsvideos.com",65],["pervyvideos.com",65],["phim12h.com",65],["picdollar.com",65],["picsxxxporn.com",65],["pinayscandalz.com",65],["pinkueiga.net",65],["piratebay.*",65],["piratefast.xyz",65],["piratehaven.xyz",65],["pirateiro.com",65],["playtube.co.za",65],["plugintorrent.com",65],["plyjam.*",65],["plylive.*",65],["plyvdo.*",65],["pmvzone.com",65],["porndish.com",65],["pornez.net",65],["pornfetishbdsm.com",65],["pornfits.com",65],["pornhd720p.com",65],["pornhoarder.*",[65,234]],["pornobr.club",65],["pornobr.ninja",65],["pornodominicano.net",65],["pornofaps.com",65],["pornoflux.com",65],["pornotorrent.com.br",65],["pornredit.com",65],["pornstarsyfamosas.es",65],["pornstreams.co",65],["porntn.com",65],["pornxbit.com",65],["pornxday.com",65],["portaldasnovinhas.shop",65],["portugues-fcr.blogspot.com",65],["poseyoung.com",65],["pover.org",65],["prbay.*",65],["projectfreetv.*",65],["projeihale.com",65],["proxybit.*",65],["proxyninja.org",65],["psarips.*",65],["pubfilmz.com",65],["publicsexamateurs.com",65],["punanihub.com",65],["pxxbay.com",65],["qiqitvx84.shop",65],["r18.best",65],["racaty.*",65],["ragnaru.net",65],["rapbeh.net",65],["rapelust.com",65],["rapload.org",65],["read-onepiece.net",65],["readhunters.xyz",65],["remaxhd.*",65],["reshare.pm",65],["retro-fucking.com",65],["retrotv.org",65],["rintor.*",65],["rnbxclusive.*",65],["rnbxclusive0.*",65],["rnbxclusive1.*",65],["robaldowns.com",65],["rockdilla.com",65],["rojadirecta.*",65],["rojadirectaenvivo.*",65],["rojitadirecta.blogspot.com",65],["romancetv.site",65],["rsoccerlink.site",65],["rugbystreams.*",65],["rule34.club",65],["rule34hentai.net",65],["rumahbokep-id.com",65],["sadisflix.*",65],["safego.cc",65],["safetxt.*",65],["sakurafile.com",65],["samax63.lol",65],["sambalpuristar.in",65],["savefiles.com",[65,68]],["scat.gold",65],["scatfap.com",65],["scatkings.com",65],["sexdicted.com",65],["sexgay18.com",65],["sexiezpix.com",65],["sextubebbw.com",65],["sgpics.net",[65,74]],["shadowrangers.*",65],["shahed-4u.day",65],["shahee4u.cam",65],["shahhid4u.cam",65],["shahi4u.*",65],["shahid4u1.*",65],["shahid4uu.*",65],["shahiid-anime.net",65],["shaid4u.day",65],["shavetape.*",65],["shemale6.com",65],["shemalegape.net",[65,67]],["shid4u.*",65],["shinden.pl",65],["short.es",65],["shortearn.*",65],["shorten.*",65],["shorttey.*",65],["shortzzy.*",65],["sideplusleaks.net",65],["silverblog.tv",[65,74]],["silverpic.com",65],["sinsitio.site",65],["sinvida.me",65],["skidrowcpy.com",65],["skymovieshd.*",65],["slut.mom",65],["smallencode.me",65],["smoner.com",65],["smplace.com",65],["soccerinhd.com",[65,71]],["socceron.name",65],["socceronline.*",[65,71]],["socialblog.tv",[65,74]],["softairbay.com",65],["softarchive.*",65],["sokobj.com",65],["songsio.com",65],["souexatasmais.com",65],["speedporn.net",[65,74]],["sportbar.live",65],["sports-stream.*",65],["sportstream1.cfd",65],["sporttuna.*",65],["sporttunatv.*",65],["srt.am",65],["srts.me",65],["sshhaa.*",65],["stapadblockuser.*",[65,98]],["stape.*",[65,98]],["stapewithadblock.*",65],["starblog.tv",[65,74]],["starmusiq.*",65],["stbemuiptv.com",65],["stockingfetishvideo.com",65],["strcloud.*",[65,98]],["stream.crichd.vip",65],["stream.lc",65],["stream25.xyz",65],["streamadblocker.*",[65,71,98]],["streamadblockplus.*",[65,98]],["streambee.to",65],["streambucket.net",65],["streamcdn.*",65],["streamcenter.pro",65],["streamers.watch",65],["streamgo.to",65],["streamhub.*",[65,71]],["streamingclic.com",65],["streamkiste.tv",65],["streamoupload.xyz",65],["streamservicehd.click",65],["streamsport.*",65],["streamta.*",[65,98]],["streamtape.*",[65,74,98]],["streamtapeadblockuser.*",[65,98]],["strikeout.*",[65,73]],["strtape.*",[65,98]],["strtapeadblock.*",[65,98]],["strtapeadblocker.*",[65,98]],["strtapewithadblock.*",65],["strtpe.*",[65,98]],["subtitleporn.com",65],["subtitles.cam",65],["suicidepics.com",65],["supertelevisionhd.com",65],["supexfeeds.com",65],["swatchseries.*",65],["swiftload.io",65],["swipebreed.net",65],["swzz.xyz",65],["sxnaar.com",65],["tabooflix.*",65],["taboosex.club",65],["tapeantiads.com",[65,98]],["tapeblocker.com",[65,98]],["tapenoads.com",[65,98]],["tapepops.com",[65,74,98]],["tapewithadblock.org",[65,98,289]],["teamos.xyz",65],["telegramgroups.xyz",65],["tempodeconhecer.blogs.sapo.pt",65],["tennisstreams.*",65],["tfp.is",65],["tgo-tv.co",[65,71]],["thaihotmodels.com",65],["theblueclit.com",65],["thebussybandit.com",65],["thedaddy.*",[65,213]],["thelastdisaster.vip",65],["themoviesflix.*",65],["thepiratebay.*",65],["thepiratebay0.org",65],["thepiratebay10.info",65],["thesexcloud.com",65],["thothub.today",65],["tightsexteens.com",65],["tlnovelas.net",65],["tmearn.*",65],["tojav.net",65],["tokusatsuindo.com",65],["tokyocafe.org",65],["toonanime.*",65],["top16.net",65],["topdrama.net",65],["topvideosgay.com",65],["torlock.*",65],["tormalayalam.*",65],["torrage.info",65],["torrents.vip",65],["torrentz2eu.*",65],["torrsexvid.com",65],["tpb-proxy.xyz",65],["trannyteca.com",65],["trendytalker.com",65],["tuktukcinma.com",65],["tumanga.net",65],["turbogvideos.com",65],["turboimagehost.com",65],["turbovid.me",65],["turkishseriestv.org",65],["turksub24.net",65],["tutele.sx",65],["tutelehd.*",65],["tv247us.live",65],["tvglobe.me",65],["tvpclive.com",65],["tvply.*",65],["tvs-widget.com",65],["tvseries.video",65],["u4m.*",65],["ucptt.com",65],["ufaucet.online",65],["ufcfight.online",65],["ufcstream.*",65],["ultrahorny.com",65],["ultraten.net",65],["unblocknow.*",65],["unblockweb.me",65],["underhentai.net",65],["uniqueten.net",65],["uns.bio",65],["upbaam.com",65],["uploadbuzz.*",65],["upstream.to",65],["upzur.com",65],["usagoals.*",65],["ustream.to",65],["valhallas.click",65],["valeriabelen.com",65],["vegamoviies.*",65],["verdragonball.online",65],["vexmoviex.*",65],["vfxmed.com",65],["vidclouds.*",65],["video.az",65],["videostreaming.rocks",65],["videowood.tv",65],["vidlox.*",65],["vidorg.net",65],["vidtapes.com",65],["vidz7.com",65],["vikistream.com",65],["vinovo.to",65],["vipboxtv.*",[65,71]],["vipleague.*",[65,238]],["virpe.cc",65],["visifilmai.org",65],["viveseries.com",65],["vladrustov.sx",65],["volokit2.com",[65,71,213]],["vstorrent.org",65],["w4hd.com",65],["watch-series.*",65],["watchbrooklynnine-nine.com",65],["watchelementaryonline.com",65],["watchf1full.com",65],["watchfamilyguyonline.com",65],["watchkobestreams.info",65],["watchlostonline.net",65],["watchmmafull.com",65],["watchmodernfamilyonline.com",65],["watchmonkonline.com",65],["watchrulesofengagementonline.com",65],["watchseries.*",65],["webcamrips.com",65],["wincest.xyz",65],["wolverdon.fun",65],["wordcounter.icu",65],["worldmovies.store",65],["worldstreams.click",65],["wpdeployit.com",65],["wqstreams.tk",65],["wwwsct.com",65],["x18hub.com",65],["xanimeporn.com",65],["xblog.tv",[65,74]],["xclusivejams.*",65],["xmoviesforyou.*",65],["xn--verseriesespaollatino-obc.online",65],["xpornium.net",65],["xsober.com",65],["xvip.lat",65],["xxgasm.com",65],["xxvideoss.org",65],["xxx18.uno",65],["xxxdominicana.com",65],["xxxfree.watch",65],["xxxmax.net",65],["xxxwebdlxxx.top",65],["xxxxvideo.uno",65],["yabai.si",65],["yeshd.net",65],["youdbox.*",65],["youjax.com",65],["yourdailypornvideos.ws",65],["yourupload.com",65],["youswear.com",65],["ytmp3eu.*",65],["yts-subs.*",65],["yts.*",65],["ytstv.me",65],["yumeost.net",65],["zerion.cc",65],["zerocoin.top",65],["zitss.xyz",65],["zooqle.*",65],["zpaste.net",65],["md3b0j6hj.com",65],["mdzsmutpcvykb.net",65],["mixdrop21.net",65],["mixdropjmk.pw",65],["fastreams.com",65],["streamsoccer.site",65],["tntsports.store",65],["wowstreams.co",65],["pillowcase.su",66],["akaihentai.com",67],["cine-calidad.*",67],["fastpic.org",[67,74]],["forums.socialmediagirls.com",[67,74]],["javtsunami.com",67],["manwa.me",67],["monoschino2.com",67],["saradahentai.com",67],["sxyprn.*",67],["tabooporn.tv",67],["veryfreeporn.com",67],["x-video.tube",67],["pornoenspanish.es",67],["theporngod.com",67],["tabootube.to",67],["bebasbokep.online",68],["besthdgayporn.com",68],["bokepindo13.vin",68],["dimensionalseduction.com",68],["drivenime.com",68],["erothots1.com",68],["javbobo.com",68],["javup.org",68],["kaliscan.*",68],["madouqu.com",68],["shemaleup.net",68],["transflix.net",68],["worthcrete.com",68],["x-x-x.video",[68,273]],["malluporno.com",69],["hentaihere.com",70],["player.smashy.stream",70],["player.smashystream.com",70],["11xmovies.*",[71,73]],["123movies.*",71],["123moviesla.*",71],["123movieweb.*",71],["2embed.*",71],["3kmovies.*",71],["720pflix.*",71],["7starhd.*",71],["9xflix.*",71],["9xmovies.*",71],["adsh.cc",71],["adshort.*",71],["afilmyhouse.blogspot.com",71],["ak.sv",71],["aliezstream.pro",[71,172]],["allmovieshub.*",71],["animesultra.net",71],["api.webs.moe",71],["apkmody.io",71],["asianplay.*",71],["atishmkv.*",71],["backfirstwo.site",71],["bflix.*",71],["crazyblog.in",71],["cricstream.*",71],["crictime.*",71],["cuervotv.me",71],["defienietlynotme.com",71],["divicast.com",71],["dood.*",[71,93]],["dooood.*",[71,93]],["egybest.*",71],["embedme.*",71],["embedpk.net",71],["esportivos.site",71],["extramovies.*",71],["faselhd.*",71],["faselhds.*",71],["faselhdwatch.*",71],["filemoon.*",71],["filemooon.*",71],["filmeserialeonline.org",71],["filmy.*",71],["filmyhit.*",71],["filmywap.*",71],["finfang.*",71],["flexyhit.com",71],["flixhq.*",71],["fmembed.cc",71],["fmoonembed.*",71],["fmovies.*",71],["focus4ca.com",71],["footybite.to",71],["foreverwallpapers.com",71],["french-streams.cc",71],["gdplayer.*",71],["gdrivelatinohd.net",71],["globalstreams.xyz",71],["gocast.pro",71],["godzcast.com",71],["goku.sx",71],["gomovies.*",71],["gowatchseries.*",71],["hdfungamezz.*",71],["hdmovies23.*",71],["hdtoday.to",71],["hellnaw.*",71],["hianime.to",71],["hinatasoul.com",71],["hindilinks4u.*",71],["hurawatch.*",71],["igg-games.com",71],["infinityscans.net",71],["jalshamoviezhd.*",71],["kaido.to",71],["kerapoxy.*",71],["linkshub.*",71],["livecricket.*",71],["livestreames.us",71],["locatedinfain.com",71],["mangareader.to",71],["maxstream.*",71],["mhdsport.*",71],["mkvcinemas.*",71],["moonembed.*",71],["moviekids.tv",71],["movies2watch.*",71],["moviesda9.co",71],["moviespapa.*",71],["mp4moviez.*",71],["mydownloadtube.*",71],["myflixertv.to",71],["myflixerz.to",71],["mylivestream.pro",[71,172]],["nowmetv.net",71],["nowsportstv.com",71],["nuroflix.*",71],["nxbrew.com",71],["o2tvseries.*",71],["o2tvseriesz.*",71],["oii.io",71],["paidshitforfree.com",71],["pepperlive.info",71],["pirlotv.*",71],["pkspeed.net",71],["playertv.net",71],["poscitech.*",71],["primewire.*",71],["redecanais.*",71],["rgeyyddl.*",71],["ronaldo7.pro",71],["roystream.com",71],["rssing.com",71],["s.to",71],["serienstream.*",71],["sflix.*",71],["shahed4u.*",71],["shaheed4u.*",71],["share.filesh.site",71],["sharkfish.xyz",71],["skidrowcodex.net",71],["smartermuver.com",71],["speedostream.*",71],["sportcast.*",71],["sportshub.fan",71],["sportskart.*",71],["stream4free.live",71],["streamingcommunity.*",[71,73,117]],["sulleiman.com",71],["tamilarasan.*",71],["tamilfreemp3songs.*",71],["tamilmobilemovies.in",71],["tamilprinthd.*",71],["tapeadsenjoyer.com",[71,74,98]],["tapeadvertisement.com",[71,98]],["tapelovesads.org",[71,98]],["thewatchseries.live",71],["tnmusic.in",71],["torrentdosfilmes.*",71],["totalsportek.*",71],["travelplanspro.com",71],["tubemate.*",71],["tusfiles.com",71],["tutlehd4.com",71],["twstalker.com",71],["uploadrar.*",71],["uqload.*",71],["vegamovie.*",71],["vid-guard.com",71],["vidcloud9.*",71],["vido.*",71],["vidoo.*",71],["vidsaver.net",71],["vidspeeds.com",71],["viralitytoday.com",71],["voiranime.stream",71],["vpcxz19p.xyz",71],["vudeo.*",71],["vumoo.*",71],["watchdoctorwhoonline.com",71],["watchomovies.*",[71,114]],["watchserie.online",71],["woxikon.in",71],["www-y2mate.com",71],["yesmovies.*",71],["ylink.bid",71],["z12z0vla.*",71],["zvision.link",71],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",71],["kickassanime.*",72],["cinego.tv",73],["dokoembed.pw",73],["ev01.to",73],["fojik.*",73],["fstream365.com",73],["fzmovies.*",73],["linkz.*",73],["minoplres.xyz",73],["mostream.us",73],["moviedokan.*",73],["myflixer.*",73],["oii.la",73],["prmovies.*",73],["readcomiconline.li",73],["s3embtaku.pro",73],["sflix2.to",73],["sportshub.stream",73],["streamblasters.*",73],["topcinema.cam",73],["webxzplay.cfd",73],["zonatmo.com",73],["animesaturn.cx",73],["filecrypt.*",73],["hunterscomics.com",73],["aniwave.uk",73],["dojing.net",74],["fuckflix.click",74],["javsubindo.com",74],["krx18.com",74],["loadx.ws",74],["mangaforfree.com",74],["pornx.to",74],["savefiles.*",[74,256]],["shavetape.cash",74],["strcloud.club",74],["strcloud.site",74],["streampoi.com",74],["strmup.to",[74,172]],["up4stream.com",[74,114]],["ups2up.fun",[74,114]],["videq.stream",74],["xmegadrive.com",74],["rubystm.com",74],["rubyvid.com",74],["rubyvidhub.com",74],["stmruby.com",74],["streamruby.com",74],["kaa.to",75],["hyhd.org",76],["bi-girl.net",77],["ftuapps.*",77],["hentaiseason.com",77],["hoodtrendspredict.com",77],["marcialhub.xyz",77],["odiadance.com",77],["osteusfilmestuga.online",77],["ragnarokscanlation.opchapters.com",77],["showflix.*",77],["swordalada.org",77],["tvappapk.com",77],["twobluescans.com",[77,78]],["varnascan.xyz",77],["fcsnew.net",79],["bibliopanda.visblog.online",80],["hallofseries.com",80],["luciferdonghua.in",80],["toursetlist.com",80],["truyentranhfull.net",80],["fcportables.com",80],["repack-games.com",80],["ibooks.to",80],["blog.tangwudi.com",80],["filecatchers.com",80],["babaktv.com",80],["tablelifeblog.com",81],["thebeautysection.com",81],["thecurvyfashionista.com",81],["thefashionspot.com",81],["thegamescabin.com",81],["thenerdyme.com",81],["thenonconsumeradvocate.com",81],["theprudentgarden.com",81],["thethings.com",81],["timesnews.net",81],["topspeed.com",81],["toyotaklub.org.pl",81],["travelingformiles.com",81],["tutsnode.org",81],["viralviralvideos.com",81],["wannacomewith.com",81],["wimp.com",[81,84]],["windsorexpress.co.uk",81],["woojr.com",81],["worldoftravelswithkids.com",81],["worldsurfleague.com",81],["cheatsheet.com",82],["pwinsider.com",82],["c-span.org",83],["15min.lt",84],["247sports.com",84],["abc17news.com",84],["addictinggames.com",84],["agrodigital.com",84],["al.com",84],["aliontherunblog.com",84],["allaboutthetea.com",84],["allmovie.com",84],["allmusic.com",84],["allthingsthrifty.com",84],["amessagewithabottle.com",84],["arstechnica.com",84],["artforum.com",84],["artnews.com",84],["audiomack.com",84],["awkward.com",84],["barcablaugranes.com",84],["barnsleychronicle.com",84],["bethcakes.com",84],["betweenenglandandiowa.com",84],["bgr.com",84],["billboard.com",84],["blazersedge.com",84],["blogher.com",84],["blu-ray.com",84],["bluegraygal.com",84],["briefeguru.de",84],["brobible.com",84],["cagesideseats.com",84],["cbsnews.com",84],["cbssports.com",[84,261]],["celiacandthebeast.com",84],["chaptercheats.com",84],["cleveland.com",84],["clickondetroit.com",84],["commercialcompetentedigitale.ro",84],["crooksandliars.com",84],["dailydot.com",84],["dailykos.com",84],["dailyvoice.com",84],["danslescoulisses.com",84],["decider.com",84],["didyouknowfacts.com",84],["dogtime.com",84],["dpreview.com",84],["ebaumsworld.com",84],["egoallstars.com",84],["eldiariony.com",84],["fark.com",84],["femestella.com",84],["flickr.com",84],["fmradiofree.com",84],["forums.hfboards.com",84],["free-power-point-templates.com",84],["freeconvert.com",84],["frogsandsnailsandpuppydogtail.com",84],["funtasticlife.com",84],["fwmadebycarli.com",84],["golfdigest.com",84],["grunge.com",84],["gulflive.com",84],["hollywoodreporter.com",84],["homeglowdesign.com",84],["honeygirlsworld.com",84],["ibtimes.co.in",84],["imgur.com",84],["indiewire.com",84],["intouchweekly.com",84],["jasminemaria.com",84],["kens5.com",84],["kion546.com",84],["knowyourmeme.com",84],["last.fm",84],["lehighvalleylive.com",84],["lettyskitchen.com",84],["lifeandstylemag.com",84],["lifeinleggings.com",84],["lizzieinlace.com",84],["localnews8.com",84],["lonestarlive.com",84],["madeeveryday.com",84],["maidenhead-advertiser.co.uk",84],["mandatory.com",84],["mardomreport.net",84],["masslive.com",84],["melangery.com",84],["miamiherald.com",84],["mmamania.com",84],["momtastic.com",84],["mostlymorgan.com",84],["motherwellmag.com",84],["motorsport.com",84],["musicfeeds.com.au",84],["naszemiasto.pl",84],["nationalpost.com",84],["nationalreview.com",84],["nbcsports.com",84],["news.com.au",84],["ninersnation.com",84],["nj.com",84],["nordot.app",84],["nothingbutnewcastle.com",84],["nsjonline.com",84],["nypost.com",84],["observer.com",84],["ontvtonight.com",84],["oregonlive.com",84],["pagesix.com",84],["patheos.com",84],["pcbolsa.com",84],["pennlive.com",84],["pep.ph",[84,89]],["phillyvoice.com",84],["playstationlifestyle.net",84],["puckermom.com",84],["reelmama.com",84],["rlfans.com",84],["robbreport.com",84],["rollingstone.com",84],["royalmailchat.co.uk",84],["sandrarose.com",84],["sbnation.com",84],["silive.com",84],["sheknows.com",84],["sidereel.com",84],["smartworld.it",84],["sneakernews.com",84],["sourcingjournal.com",84],["soldionline.it",84],["sport-fm.gr",84],["sportico.com",84],["sportsgamblingpodcast.com",84],["spotofteadesigns.com",84],["ssnewstelegram.com",84],["stacysrandomthoughts.com",84],["stylecaster.com",84],["superherohype.com",84],["syracuse.com",84],["tastingtable.com",84],["techcrunch.com",84],["thecelticblog.com",[84,86]],["thedailymeal.com",84],["theflowspace.com",84],["themarysue.com",84],["tiermaker.com",84],["timesofisrael.com",84],["tiscali.cz",84],["tokfm.pl",84],["torontosun.com",84],["tvline.com",84],["usmagazine.com",84],["wallup.net",84],["wcnc.com",84],["weather.com",84],["worldstar.com",84],["worldstarhiphop.com",84],["wwd.com",84],["wzzm13.com",84],["yourcountdown.to",84],["automobile-catalog.com",[85,86,87]],["baseballchannel.jp",[85,86]],["forum.mobilism.me",85],["gbatemp.net",85],["gentosha-go.com",85],["hang.hu",85],["hoyme.jp",85],["motorbikecatalog.com",[85,86,87]],["pons.com",85],["wisevoter.com",85],["topstarnews.net",85],["islamicfinder.org",85],["secure-signup.net",85],["dramabeans.com",85],["dropgame.jp",[85,86]],["manta.com",85],["tportal.hr",85],["tvtropes.org",85],["convertcase.net",85],["oricon.co.jp",86],["uranai.nosv.org",86],["yakkun.com",86],["24sata.hr",86],["373news.com",86],["actugaming.net",86],["aerotrader.com",86],["alc.co.jp",86],["alfa.lt",86],["allthetests.com",86],["animanch.com",86],["aniroleplay.com",86],["apkmirror.com",[86,192]],["areaconnect.com",86],["as-web.jp",86],["atvtrader.com",86],["aucfree.com",86],["autoby.jp",86],["autoc-one.jp",86],["autofrage.net",86],["bab.la",86],["babla.*",86],["bien.hu",86],["bilis.lt",86],["boredpanda.com",86],["bunshun.jp",86],["calculatorsoup.com",86],["carscoops.com",86],["cesoirtv.com",86],["chanto.jp.net",86],["cinetrafic.fr",86],["cocokara-next.com",86],["collinsdictionary.com",86],["commercialtrucktrader.com",86],["computerfrage.net",86],["crosswordsolver.com",86],["cruciverba.it",86],["cults3d.com",86],["culturequizz.com",86],["cycletrader.com",86],["daily.co.jp",86],["dailynewshungary.com",86],["dallashoopsjournal.com",86],["dayspedia.com",86],["dictionary.cambridge.org",86],["dictionnaire.lerobert.com",86],["dnevno.hr",86],["dreamchance.net",86],["drweil.com",86],["dziennik.pl",86],["ecranlarge.com",86],["eigachannel.jp",86],["equipmenttrader.com",86],["etaplius.lt",86],["ev-times.com",86],["finanzfrage.net",86],["footballchannel.jp",86],["forsal.pl",86],["freemcserver.net",86],["futabanet.jp",86],["fxstreet-id.com",86],["fxstreet-vn.com",86],["fxstreet.*",86],["game8.jp",86],["games.arkadium.com",86],["gamewith.jp",86],["gardeningsoul.com",86],["gazetaprawna.pl",86],["gesundheitsfrage.net",86],["gifu-np.co.jp",86],["gigafile.nu",86],["globalrph.com",86],["golf-live.at",86],["grapee.jp",86],["gutefrage.net",86],["happymoments.lol",86],["hb-nippon.com",86],["heureka.cz",86],["horairesdouverture24.fr",86],["hotcopper.co.nz",86],["hotcopper.com.au",86],["hvac-talk.com",86],["idokep.hu",86],["indiatimes.com",86],["infor.pl",86],["iza.ne.jp",86],["j-cast.com",86],["j-town.net",86],["j7p.jp",86],["jablickar.cz",86],["javatpoint.com",86],["jiji.com",86],["jikayosha.jp",86],["judgehype.com",86],["kinmaweb.jp",86],["km77.com",86],["kobe-journal.com",86],["kreuzwortraetsel.de",86],["kurashinista.jp",86],["kurashiru.com",86],["kyoteibiyori.com",86],["lacuarta.com",86],["laleggepertutti.it",86],["langenscheidt.com",86],["laposte.net",86],["lawyersgunsmoneyblog.com",86],["ldoceonline.com",86],["listentotaxman.com",86],["livenewschat.eu",86],["luremaga.jp",86],["mafab.hu",86],["mahjongchest.com",86],["mainichi.jp",86],["maketecheasier.com",[86,87]],["malaymail.com",86],["mamastar.jp",86],["mathplayzone.com",86],["meteo60.fr",86],["midhudsonnews.com",86],["minesweeperquest.com",86],["minkou.jp",86],["mmm.lt",86],["modhub.us",86],["modsfire.com",86],["moin.de",86],["motorradfrage.net",86],["motscroises.fr",86],["movie-locations.com",86],["muragon.com",86],["nana-press.com",86],["natalie.mu",86],["nationaltoday.com",86],["nbadraft.net",86],["newatlas.com",[86,91,92]],["news.zerkalo.io",86],["newsinlevels.com",86],["newsweekjapan.jp",86],["niketalk.com",86],["nikkan-gendai.com",86],["nlab.itmedia.co.jp",86],["notebookcheck.*",86],["notebookcheck-cn.com",86],["notebookcheck-hu.com",86],["notebookcheck-ru.com",86],["notebookcheck-tr.com",86],["nouvelobs.com",86],["nyitvatartas24.hu",86],["oeffnungszeitenbuch.de",86],["onlineradiobox.com",86],["operawire.com",86],["optionsprofitcalculator.com",86],["oraridiapertura24.it",86],["oxfordlearnersdictionaries.com",86],["palabr.as",86],["pashplus.jp",86],["persoenlich.com",86],["petitfute.com",86],["play-games.com",86],["popdaily.com.tw",86],["powerpyx.com",86],["pptvhd36.com",86],["profitline.hu",86],["programme-tv.net",86],["puzzlegarage.com",86],["pwctrader.com",86],["quefaire.be",86],["radio-australia.org",86],["radio-osterreich.at",86],["raetsel-hilfe.de",86],["raider.io",86],["ranking.net",86],["raskakcija.lt",86],["references.be",86],["reisefrage.net",86],["relevantmagazine.com",86],["reptilesmagazine.com",86],["roleplayer.me",86],["rostercon.com",86],["samsungmagazine.eu",86],["sankei.com",86],["sanspo.com",86],["scribens.com",86],["scribens.fr",86],["slashdot.org",86],["snowmobiletrader.com",86],["soccerdigestweb.com",86],["solitairehut.com",86],["sourceforge.net",86],["southhemitv.com",86],["sportalkorea.com",86],["sportlerfrage.net",86],["statecollege.com",86],["steamidfinder.com",86],["sudokutable.com",86],["superhonda.com",86],["syosetu.com",86],["szamoldki.hu",86],["talkwithstranger.com",86],["tbs.co.jp",86],["techdico.com",86],["the-crossword-solver.com",86],["thedigestweb.com",86],["thefirearmblog.com",86],["traicy.com",86],["transparentcalifornia.com",86],["transparentnevada.com",86],["trilltrill.jp",86],["tunebat.com",86],["tvtv.ca",86],["tvtv.us",86],["tweaktown.com",86],["twn.hu",86],["tyda.se",86],["ufret.jp",86],["universalis.fr",86],["uptodown.com",86],["uscreditcardguide.com",86],["verkaufsoffener-sonntag.com",86],["vimm.net",86],["wamgame.jp",86],["watchdocumentaries.com",86],["wattedoen.be",86],["webdesignledger.com",86],["weldingweb.com",86],["wetteronline.de",86],["wfmz.com",86],["wieistmeineip.*",86],["winfuture.de",86],["word-grabber.com",86],["worldjournal.com",86],["worldle.teuteuf.fr",86],["wort-suchen.de",86],["woxikon.*",86],["young-machine.com",86],["yugioh-starlight.com",86],["yutura.net",86],["zagreb.info",86],["zakzak.co.jp",86],["2chblog.jp",86],["2monkeys.jp",86],["46matome.net",86],["akb48glabo.com",86],["akb48matomemory.com",86],["alfalfalfa.com",86],["all-nationz.com",86],["anihatsu.com",86],["aqua2ch.net",86],["blog.esuteru.com",86],["blog.livedoor.jp",86],["blog.jp",86],["blogo.jp",86],["chaos2ch.com",86],["choco0202.work",86],["crx7601.com",86],["danseisama.com",86],["dareda.net",86],["digital-thread.com",86],["doorblog.jp",86],["exawarosu.net",86],["fgochaldeas.com",86],["football-2ch.com",86],["gekiyaku.com",86],["golog.jp",86],["hacchaka.net",86],["heartlife-matome.com",86],["liblo.jp",86],["fesoku.net",86],["fiveslot777.com",86],["gamejksokuhou.com",86],["girlsreport.net",86],["girlsvip-matome.com",86],["grasoku.com",86],["gundamlog.com",86],["honyaku-channel.net",86],["ikarishintou.com",86],["imas-cg.net",86],["imihu.net",86],["inutomo11.com",86],["itainews.com",86],["itaishinja.com",86],["jin115.com",86],["jisaka.com",86],["jnews1.com",86],["jumpsokuhou.com",86],["jyoseisama.com",86],["keyakizaka46matomemory.net",86],["kidan-m.com",86],["kijoden.com",86],["kijolariat.net",86],["kijolifehack.com",86],["kijomatomelog.com",86],["kijyokatu.com",86],["kijyomatome.com",86],["kijyomatome-ch.com",86],["kijyomita.com",86],["kirarafan.com",86],["kitimama-matome.net",86],["kitizawa.com",86],["konoyubitomare.jp",86],["kotaro269.com",86],["kyousoku.net",86],["ldblog.jp",86],["livedoor.biz",86],["livedoor.blog",86],["majikichi.com",86],["matacoco.com",86],["matomeblade.com",86],["matomelotte.com",86],["matometemitatta.com",86],["mojomojo-licarca.com",86],["morikinoko.com",86],["nandemo-uketori.com",86],["netatama.net",86],["news-buzz1.com",86],["news30over.com",86],["nishinippon.co.jp",86],["nmb48-mtm.com",86],["norisoku.com",86],["npb-news.com",86],["ocsoku.com",86],["okusama-kijyo.com",86],["onecall2ch.com",86],["onihimechan.com",86],["orusoku.com",86],["otakomu.jp",86],["otoko-honne.com",86],["oumaga-times.com",86],["outdoormatome.com",86],["pachinkopachisro.com",86],["paranormal-ch.com",86],["recosoku.com",86],["s2-log.com",86],["saikyo-jump.com",86],["shuraba-matome.com",86],["ske48matome.net",86],["squallchannel.com",86],["sukattojapan.com",86],["sumaburayasan.com",86],["sutekinakijo.com",86],["usi32.com",86],["uwakich.com",86],["uwakitaiken.com",86],["vault76.info",86],["vipnews.jp",86],["vippers.jp",86],["vipsister23.com",86],["vtubernews.jp",86],["watarukiti.com",86],["world-fusigi.net",86],["zakuzaku911.com",86],["zch-vip.com",86],["300cforums.com",86],["a5oc.com",86],["acuraworld.com",86],["airsoftsociety.com",86],["allpar.com",86],["aquaticplantcentral.com",86],["astraownersnetwork.co.uk",86],["avsforum.com",86],["babybmw.net",86],["beesource.com",86],["bimmerwerkz.com",86],["can-amforum.com",86],["canadianmoneyforum.com",86],["catfish1.com",86],["chevymalibuforum.com",86],["chinacarforums.com",86],["chihuahua-people.com",86],["coloradofans.com",86],["dairygoatinfo.com",86],["digitalhome.ca",86],["diychatroom.com",86],["fordescape.org",86],["fullsizebronco.com",86],["mazda3revolution.com",86],["mdxers.org",86],["mytractorforum.com",86],["odyclub.com",86],["rootzwiki.com",86],["skyscrapercity.com",86],["speypages.com",86],["techguy.org",86],["techsupportforum.com",86],["theakforum.net",86],["trailvoy.com",86],["vwvortex.com",86],["interfootball.co.kr",87],["a-ha.io",87],["cboard.net",87],["jjang0u.com",87],["joongdo.co.kr",87],["viva100.com",87],["gamingdeputy.com",87],["alle-tests.nl",87],["tweaksforgeeks.com",87],["m.inven.co.kr",87],["mlbpark.donga.com",87],["meconomynews.com",87],["brandbrief.co.kr",87],["motorgraph.com",87],["bleepingcomputer.com",88],["pravda.com.ua",88],["ap7am.com",89],["cinema.com.my",89],["dolldivine.com",89],["giornalone.it",89],["iplocation.net",89],["jamaicajawapos.com",89],["jutarnji.hr",89],["kompasiana.com",89],["mediaindonesia.com",89],["niice-woker.com",89],["slobodnadalmacija.hr",89],["upmedia.mg",89],["mentalfloss.com",90],["neowin.net",[91,92]],["razzball.com",[91,92]],["all3do.com",93],["d-s.io",93],["d0000d.com",93],["d000d.com",93],["d0o0d.com",93],["do0od.com",93],["do7go.com",93],["doods.*",93],["doodstream.*",93],["dooodster.com",93],["doply.net",93],["ds2play.com",93],["ds2video.com",93],["vidply.com",93],["vide0.net",93],["vvide0.com",93],["3minx.com",94],["555fap.com",94],["ai18.pics",94],["anime-jav.com",94],["blackwidof.org",94],["chinese-pics.com",94],["cn-av.com",94],["cnpics.org",94],["cnxx.me",94],["cosplay-xxx.com",94],["cosplay18.pics",94],["fc2ppv.stream",94],["fikfok.net",94],["gofile.download",94],["hentai-sub.com",94],["hentai4f.com",94],["hentaicovid.com",94],["hentaipig.com",94],["hentaixnx.com",94],["idol69.net",94],["javball.com",94],["javbee.*",94],["javring.com",94],["javsunday.com",94],["javtele.net",94],["kin8-av.com",94],["kin8-jav.com",94],["kr-av.com",94],["ovabee.com",94],["pig69.com",94],["porn-pig.com",94],["porn4f.org",94],["sweetie-fox.com",94],["xcamcovid.com",94],["xxpics.org",94],["hentaivost.fr",95],["jelonka.com",96],["isgfrm.com",97],["advertisertape.com",98],["watchadsontape.com",98],["vosfemmes.com",99],["voyeurfrance.net",99],["hyundaitucson.info",100],["exambd.net",101],["cgtips.org",102],["freewebcart.com",103],["freemagazines.top",103],["siamblockchain.com",103],["emuenzen.de",104],["kickass.*",105],["unblocked.id",107],["listendata.com",108],["7xm.xyz",108],["fastupload.io",108],["azmath.info",108],["wouterplanet.com",109],["xenvn.com",110],["4kporn.xxx",111],["androidacy.com",112],["4porn4.com",113],["bestpornflix.com",114],["freeroms.com",114],["andhrafriends.com",114],["723qrh1p.fun",114],["98zero.com",115],["mediaset.es",115],["hwbusters.com",115],["beatsnoop.com",116],["fetchpik.com",116],["hackerranksolution.in",116],["camsrip.com",116],["file.org",116],["btcbunch.com",118],["teachoo.com",[119,120]],["mafiatown.pl",121],["bitcotasks.com",122],["hilites.today",123],["udvl.com",124],["www.chip.de",[125,126,127,128]],["topsporter.net",129],["sportshub.to",129],["myanimelist.net",130],["unofficialtwrp.com",131],["codec.kyiv.ua",131],["kimcilonlyofc.com",131],["bitcosite.com",132],["bitzite.com",132],["teluguflix.*",133],["hacoos.com",134],["watchhentai.net",135],["hes-goals.io",135],["pkbiosfix.com",135],["casi3.xyz",135],["zefoy.com",136],["mailgen.biz",137],["tempinbox.xyz",137],["vidello.net",138],["newscon.org",139],["yunjiema.top",139],["pcgeeks-games.com",139],["resizer.myct.jp",140],["gametohkenranbu.sakuraweb.com",141],["jisakuhibi.jp",142],["rank1-media.com",142],["lifematome.blog",143],["fm.sekkaku.net",144],["dvdrev.com",145],["betweenjpandkr.blog",146],["nft-media.net",147],["ghacks.net",148],["leak.sx",149],["paste.bin.sx",149],["pornleaks.in",149],["khoaiphim.com",151],["haafedk2.com",152],["jovemnerd.com.br",153],["totalcsgo.com",154],["manysex.com",155],["gaminginfos.com",156],["tinxahoivn.com",157],["m.4khd.com",158],["westmanga.*",158],["automoto.it",159],["fordownloader.com",160],["codelivly.com",161],["tchatche.com",162],["cryptoearns.com",162],["lordchannel.com",163],["novelhall.com",164],["bagi.co.in",165],["keran.co",165],["biblestudytools.com",166],["christianheadlines.com",166],["ibelieve.com",166],["kuponigo.com",167],["inxxx.com",168],["bemyhole.com",168],["embedwish.com",169],["jenismac.com",170],["vxetable.cn",171],["luluvid.com",172],["daddylive1.*",172],["esportivos.*",172],["instream.pro",172],["poscitechs.*",172],["powerover.online",172],["sportea.link",172],["ustream.pro",172],["animeshqip.site",172],["apkship.shop",172],["filedot.to",172],["hdstream.one",172],["kingstreamz.site",172],["live.fastsports.store",172],["livesnow.me",172],["livesports4u.pw",172],["nuxhallas.click",172],["papahd.info",172],["rgshows.me",172],["sportmargin.live",172],["sportmargin.online",172],["sportsloverz.xyz",172],["supertipzz.online",172],["ultrastreamlinks.xyz",172],["webmaal.cfd",172],["wizistreamz.xyz",172],["educ4m.com",172],["fromwatch.com",172],["visualnewshub.com",172],["donghuaworld.com",173],["letsdopuzzles.com",174],["rediff.com",175],["igay69.com",176],["dzapk.com",177],["darknessporn.com",178],["familyporner.com",178],["freepublicporn.com",178],["pisshamster.com",178],["punishworld.com",178],["xanimu.com",178],["tainio-mania.online",179],["eroticmoviesonline.me",180],["series9movies.com",180],["teleclub.xyz",181],["ecamrips.com",182],["showcamrips.com",182],["tucinehd.com",183],["uyeshare.cc",183],["9animetv.to",184],["qiwi.gg",185],["jornadaperfecta.com",186],["sousou-no-frieren.com",187],["unite-guide.com",189],["thebullspen.com",190],["receitasdaora.online",191],["hiraethtranslation.com",193],["xfreehd.com",194],["freethesaurus.com",195],["thefreedictionary.com",195],["dexterclearance.com",196],["x86.co.kr",197],["onlyfaucet.com",198],["x-x-x.tube",199],["fdownloader.net",200],["thehackernews.com",201],["mielec.pl",202],["treasl.com",203],["mrbenne.com",204],["sportsonline.si",205],["fiuxy2.co",206],["animeunity.to",207],["tokopedia.com",208],["remixsearch.net",209],["remixsearch.es",209],["onlineweb.tools",209],["sharing.wtf",209],["2024tv.ru",210],["modrinth.com",211],["curseforge.com",211],["xnxxcom.xyz",212],["sportsurge.net",213],["joyousplay.xyz",213],["quest4play.xyz",[213,215]],["moneycontrol.com",214],["cookiewebplay.xyz",215],["ilovetoplay.xyz",215],["streamcaster.live",215],["weblivehdplay.ru",215],["nontongo.win",216],["m9.news",217],["callofwar.com",218],["secondhandsongs.com",219],["nohost.one",220],["send.cm",221],["send.now",221],["3rooodnews.net",222],["xxxbfvideo.net",223],["filmy4wap.co.in",224],["filmy4waps.org",224],["gameshop4u.com",225],["regenzi.site",225],["historicaerials.com",[226,227]],["cinemastervip.com",227],["handirect.fr",228],["fsiblog3.club",229],["kamababa.desi",229],["sat-sharing.com",229],["getfiles.co.uk",230],["genelify.com",231],["dhtpre.com",232],["xbaaz.com",233],["lineupexperts.com",235],["fearmp4.ru",236],["appnee.com",237],["buffsports.*",238],["fbstreams.*",238],["omuzaani.me",238],["wavewalt.me",[238,254]],["pornoxo.com",239],["m.shuhaige.net",240],["streamingnow.mov",241],["thesciencetoday.com",242],["sportnews.to",242],["ghbrisk.com",244],["iplayerhls.com",244],["bacasitus.com",245],["katoikos.world",245],["abstream.to",246],["pawastreams.pro",247],["rebajagratis.com",248],["tv.latinlucha.es",248],["fetcheveryone.com",249],["reviewdiv.com",250],["laurelberninteriors.com",251],["godlike.com",252],["godlikeproductions.com",252],["bestsportslive.org",253],["alexsports.*>>",254],["btvsports.my>>",254],["cr7-soccer.store>>",254],["e2link.link>>",254],["fsportshd.xyz>>",254],["kakarotfoot.ru>>",254],["pelotalibrevivo.net>>",254],["powerover.site>>",254],["redditsoccerstreams.name>>",254],["sportstohfa.online>>",254],["sportzonline.site>>",254],["streamshunters.eu>>",254],["totalsportek1000.com>>",254],["worldsports.*>>",254],["7fractals.icu",254],["allevertakstream.space",254],["brainknock.net",254],["btvsports.my",254],["capo6play.com",254],["capoplay.net",254],["cdn256.xyz",254],["courseleader.net",254],["cr7-soccer.store",254],["dropbang.net",254],["e2link.link",254],["hornpot.net",254],["fsportshd.xyz",254],["ihdstreams.*",254],["kakarotfoot.ru",254],["meltol.net",254],["nativesurge.net",254],["powerover.site",254],["snapinstadownload.xyz",254],["sportstohfa.online",254],["sportzonline.site",254],["stellarthread.com",254],["streamshunters.eu",254],["totalsportek1000.com",254],["voodc.com",254],["worldsports.*",254],["ziggogratis.site",254],["bestreamsports.org",255],["streamhls.to",257],["xmalay1.net",258],["letemsvetemapplem.eu",259],["pc-builds.com",260],["emoji.gg",262],["pfps.gg",263],["live4all.net",264],["pokemon-project.com",265],["umatechnology.org",266],["moviesonlinefree.*",267],["fileszero.com",268],["viralharami.com",268],["wstream.cloud",268],["bmamag.com",269],["bmacanberra.wpcomstaging.com",269],["mmsbee42.com",270],["mmsmasala.com",270],["idlixku.com",271],["andrenalynrushplay.cfd",272],["fnjplay.xyz",272],["porn4fans.com",274],["kaliscan.io",275],["webnoveltranslations.com",276],["techbloat.com",277],["elamigosweb.com",278],["mangacrab.org",279],["webtoon.xyz",280],["manhwaclub.net",281],["edumail.su",282],["cefirates.com",283],["comicleaks.com",283],["tapmyback.com",283],["ping.gg",283],["nookgaming.com",283],["creatordrop.com",283],["bitdomain.biz",283],["fort-shop.kiev.ua",283],["accuretawealth.com",283],["resourceya.com",283],["tracktheta.com",283],["adaptive.marketing",283],["camberlion.com",283],["trybawaryjny.pl",283],["segops.madisonspecs.com",283],["stresshelden-coaching.de",283],["controlconceptsusa.com",283],["ryaktive.com",283],["tip.etip-staging.etip.io",283],["future-fortune.com",284],["furucombo.app",284],["bolighub.dk",284],["intercity.technology",285],["freelancer.taxmachine.be",285],["adria.gg",285],["fjlaboratories.com",285],["abhijith.page",285],["helpmonks.com",285],["dataunlocker.com",286],["proboards.com",287],["winclassic.net",287],["farmersjournal.ie",288],["jxoplay.xyz",290],["zorroplay.xyz",290],["dlhd.*>>",290]]);
const exceptionsMap = new Map([["chatango.com",[8,290]],["twitter.com",[8]],["youtube.com",[8]]]);
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
