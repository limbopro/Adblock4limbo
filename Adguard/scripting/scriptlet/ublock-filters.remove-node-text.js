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
const argsList = [["script","/adblock/i"],["script","adBlockEnabled"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script","/adb_detected|;break;case \\$\\./"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","detectAdBlock"],["script","ctrlKey"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","getPopUrl"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","wpadmngr.com"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"/"],["script","error-report.com"],["script","html-load.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","popundersPerIP"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","XV"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","Brave"],["script","await"],["script","Object.keys(window.adngin).length"],["script","axios"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/$.*open/"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly|wpadmngr/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/eval|adb/i"],["script","catcher"],["script","/isAdBlockActive|WebAssembly/"],["script","videoList"],["script","freestar"],["script","/admiral/i"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"]];
const hostnamesMap = new Map([["faqwiki.*",0],["snapwordz.com",0],["toolxox.com",0],["rl6mans.com",0],["pandadoc.com",1],["web.de",2],["skidrowreloaded.com",[3,15]],["wawacity.*",3],["720pstream.*",[3,67]],["embedsports.me",[3,93]],["embedstream.me",[3,14,15,67,93]],["jumbtv.com",[3,93]],["reliabletv.me",[3,93]],["topembed.pw",[3,69,214]],["crackstreamer.net",3],["methstreamer.com",3],["rnbastreams.com",3],["vidsrc.*",[3,14,67]],["1stream.eu",3],["4kwebplay.xyz",3],["anime4i.vip",3],["antennasports.ru",3],["buffsports.me",[3,67]],["buffstreams.app",3],["claplivehdplay.ru",[3,214]],["cracksports.me",[3,14]],["euro2024direct.ru",3],["ext.to",3],["extreme-down.*",3],["eztv.tf",3],["eztvx.to",3],["flix-wave.*",3],["hikaritv.xyz",3],["kenitv.me",[3,14,15]],["lewblivehdplay.ru",[3,214]],["mixdrop.*",[3,15]],["mlbbite.net",3],["mlbstreams.ai",3],["qatarstreams.me",[3,14]],["qqwebplay.xyz",[3,214]],["sanet.*",3],["soccerworldcup.me",[3,14]],["sportshd.*",3],["topstreams.info",3],["totalsportek.to",3],["viwlivehdplay.ru",3],["vidco.pro",[3,67]],["moviepilot.de",[4,58]],["userupload.*",5],["cinedesi.in",5],["intro-hd.net",5],["monacomatin.mc",5],["nodo313.net",5],["hesgoal-tv.io",5],["hesgoal-vip.io",5],["earn.punjabworks.com",5],["mahajobwala.in",5],["solewe.com",5],["panel.play.hosting",5],["pahe.*",[6,15,69]],["soap2day.*",6],["yts.mx",7],["magesypro.com",8],["pinsystem.co.uk",8],["elrellano.com",8],["tinyppt.com",8],["veganab.co",8],["camdigest.com",8],["learnmany.in",8],["amanguides.com",[8,37]],["highkeyfinance.com",[8,37]],["appkamods.com",8],["techacode.com",8],["djqunjab.in",8],["downfile.site",8],["expertvn.com",8],["trangchu.news",8],["3dmodelshare.org",8],["nulleb.com",8],["asiaon.top",8],["reset-scans.*",8],["coursesghar.com",8],["thecustomrom.com",8],["snlookup.com",8],["bingotingo.com",8],["ghior.com",8],["3dmili.com",8],["karanpc.com",8],["plc247.com",8],["apkdelisi.net",8],["freepasses.org",8],["poplinks.*",[8,41]],["tomarnarede.pt",8],["basketballbuzz.ca",8],["dribbblegraphics.com",8],["kemiox.com",8],["teksnologi.com",8],["bharathwick.com",8],["descargaspcpro.net",8],["dx-tv.com",8],["rt3dmodels.com",8],["plc4me.com",8],["blisseyhusbands.com",8],["mhdsports.*",8],["mhdsportstv.*",8],["mhdtvsports.*",8],["mhdtvworld.*",8],["mhdtvmax.*",8],["mhdstream.*",8],["madaradex.org",8],["trigonevo.com",8],["franceprefecture.fr",8],["jazbaat.in",8],["aipebel.com",8],["audiotools.blog",8],["embdproxy.xyz",8],["hqq.*",9],["waaw.*",9],["pixhost.*",10],["vipbox.*",11],["telerium.*",12],["apex2nova.com",12],["germancarforum.com",13],["cybercityhelp.in",13],["innateblogger.com",13],["omeuemprego.online",13],["viprow.*",[14,15,67]],["bluemediadownload.*",14],["bluemediafile.*",14],["bluemedialink.*",14],["bluemediastorage.*",14],["bluemediaurls.*",14],["urlbluemedia.*",14],["streamnoads.com",[14,15,67,84]],["bowfile.com",14],["cloudvideo.tv",[14,67]],["cloudvideotv.*",[14,67]],["coloredmanga.com",14],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["olympicstreams.co",[14,67]],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,67]],["mlbbox.me",14],["vikingf1le.us.to",14],["neodrive.xyz",14],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["123-movies.*",15],["123movieshd.*",15],["123movieshub.*",15],["123moviesme.*",15],["1337x.*",[15,188]],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["1stream.*",15],["1tamilmv.*",15],["2ddl.*",15],["2umovies.*",15],["345movies.com",15],["3dporndude.com",15],["3hiidude.*",15],["4archive.org",15],["4horlover.com",15],["4stream.*",15],["560pmovie.com",15],["5movies.*",15],["7hitmovies.*",15],["85tube.com",15],["85videos.com",15],["9xmovie.*",15],["aagmaal.*",[15,67]],["acefile.co",15],["actusports.eu",15],["adblockeronstape.*",[15,84]],["adblockeronstreamtape.*",15],["adblockplustape.*",[15,84]],["adblockstreamtape.*",[15,84]],["adblockstrtape.*",[15,84]],["adblockstrtech.*",[15,84]],["adblocktape.*",[15,84]],["adclickersbot.com",15],["adcorto.*",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["aiblog.tv",[15,70]],["ak47sports.com",15],["akuma.moe",15],["alexsports.*",15],["alexsportss.*",15],["alexsportz.*",15],["allplayer.tk",15],["amateurblog.tv",[15,70]],["androidadult.com",[15,240]],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.plus",15],["animelek.me",15],["animepahe.*",15],["animesanka.*",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["animixplay.*",15],["aniplay.*",15],["anroll.net",15],["antiadtape.*",[15,84]],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["asianclub.*",15],["ask4movie.*",15],["askim-bg.com",15],["asumsikedaishop.com",15],["atomixhq.*",[15,67]],["atomohd.*",15],["avcrempie.com",15],["avseesee.com",15],["gettapeads.com",[15,84]],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,67]],["beinmatch.*",[15,24]],["belowporn.com",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bgwp.cc",[15,20]],["bhaai.*",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["blurayufr.*",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["buffstreams.*",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["canalesportivo.*",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,67]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["choosingnothing.com",15],["clasico.tv",15],["clickndownload.*",15],["clicknupload.*",15],["clik.pw",15],["coin-free.com",[15,34]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["cutpaid.com",15],["daddylive.*",[15,67,212]],["daddylivehd.*",[15,67]],["dailyuploads.net",15],["datawav.club",15],["daughtertraining.com",15],["ddrmovies.*",15],["deepgoretube.site",15],["deltabit.co",15],["deporte-libre.top",15],["depvailon.com",15],["derleta.com",15],["desiremovies.*",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["devlib.*",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["divxtotal.*",15],["divxtotal1.*",15],["dixva.com",15],["dlhd.*",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["dvdfullestrenos.com",15],["dvdplay.*",[15,67]],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["elixx.*",15],["enjoy4k.*",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["estrenosflix.*",15],["estrenosflux.*",15],["estrenosgo.*",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["f1stream.*",15],["fapinporn.com",15],["fapptime.com",15],["fastreams.live",15],["faucethero.com",15],["fbstream.*",15],["fembed.com",15],["femdom-joi.com",15],["fenixsite.net",15],["file4go.*",15],["filegram.to",[15,70]],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,67]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filmyzilla.*",[15,67]],["filthy.family",15],["findav.*",15],["findporn.*",15],["fixfinder.click",15],["flixmaza.*",15],["flizmovies.*",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freetvsports.*",15],["freeuse.me",15],["freeusexporn.com",15],["fsharetv.cc",15],["fsicomics.com",15],["fullymaza.*",15],["g3g.*",15],["galinhasamurai.com",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornhot.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gotxx.*",15],["grantorrent.*",15],["gravureblog.tv",[15,70]],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdmoviesfair.*",[15,67]],["hdmoviesflix.*",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hiidudemoviez.*",15],["hindimean.com",15],["hindimovies.to",[15,67]],["hiperdex.com",15],["hispasexy.org",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,67]],["hxfile.co",[15,67]],["igfap.com",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsen.*",15],["imgsex.xyz",15],["imgsto.*",15],["imx.to",15],["incest.*",15],["incestflix.*",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itopmusic.*",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,142]],["jackstreams.com",15],["jatimupdate24.com",15],["jav-fun.cc",15],["jav-noni.cc",15],["jav-scvp.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javmost.*",15],["javporn.best",15],["javsek.net",15],["javsex.to",15],["javtiful.com",[15,17]],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",[15,190]],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keeplinks.*",15],["keepvid.*",15],["keralahd.*",15],["keralatvbox.com",15],["khatrimazaful.*",15],["khatrimazafull.*",[15,70]],["kickassanimes.io",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["kissasian.*",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["lat69.me",15],["latinblog.tv",[15,70]],["latinomegahd.net",15],["leechall.*",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["linkshorts.*",15],["lulu.st",15],["lulustream.com",[15,69]],["luluvdo.com",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["mangovideo.*",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["masaporn.*",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["miniurl.*",15],["mirrorace.*",15],["mitly.us",15],["mixdroop.*",15],["mkv-pastes.com",15],["mkvcage.*",15],["mlbstream.*",15],["mlsbd.*",15],["mmsbee.*",15],["monaskuliner.ac.id",15],["moredesi.com",15],["motogpstream.*",15],["movgotv.net",15],["movi.pk",15],["movieplex.*",15],["movierulzlink.*",15],["movies123.*",15],["moviesflix.*",15],["moviesmeta.*",15],["moviessources.*",15],["moviesverse.*",15],["movieswbb.com",15],["moviewatch.com.pk",15],["moviezwaphd.*",15],["mp4upload.com",15],["mrskin.live",15],["mrunblock.*",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["mzansifun.com",15],["narutoget.info",15],["naughtypiss.com",15],["nbastream.*",15],["nekopoi.*",[15,70]],["nerdiess.com",15],["new-fs.eu",15],["newmovierulz.*",15],["newtorrentgame.com",15],["nflstream.*",15],["nflstreams.me",15],["nhlstream.*",15],["niaomea.me",[15,67]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["noblocktape.*",[15,84]],["nocensor.*",15],["nolive.me",[15,67]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,67]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["o2tvseries.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olweb.tv",15],["on9.stream",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfams.*",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ouo.*",15],["ovagames.com",15],["ovamusic.com",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["password69.com",15],["pastemytxt.com",15],["payskip.org",15],["pctfenix.*",[15,67]],["pctnew.*",[15,67]],["peeplink.in",15],["peliculas24.*",15],["peliculasmx.net",15],["pelisplus.*",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratebay.*",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["plyjam.*",15],["plylive.*",15],["plyvdo.*",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornhoarder.*",[15,233]],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscitesch.com",[15,67]],["poseyoung.com",15],["pover.org",15],["prbay.*",15],["projectfreetv.*",15],["proxybit.*",15],["proxyninja.org",15],["psarips.*",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["racaty.*",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["readhunters.xyz",15],["remaxhd.*",15],["retro-fucking.com",15],["retrotv.org",15],["rintor.*",15],["rnbxclusive.*",15],["rnbxclusive0.*",15],["rnbxclusive1.*",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirecta.*",15],["rojadirectaenvivo.*",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rsoccerlink.site",15],["rugbystreams.*",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["sadisflix.*",15],["safego.cc",15],["safetxt.*",15],["sakurafile.com",15],["satoshi-win.xyz",15],["savefiles.com",[15,65,251]],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexiezpix.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.*",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahi4u.*",15],["shahid4u1.*",15],["shahid4uu.*",15],["shahiid-anime.net",15],["shavetape.*",15],["shemale6.com",15],["shid4u.*",15],["shinden.pl",15],["short.es",15],["shortearn.*",15],["shorten.*",15],["shorttey.*",15],["shortzzy.*",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",[15,70]],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["sinvida.me",15],["skidrowcpy.com",15],["skidrowfull.com",15],["skymovieshd.*",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",[15,67]],["socceron.name",15],["socceronline.*",[15,67]],["socialblog.tv",[15,70]],["softairbay.com",15],["softarchive.*",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sports-stream.*",15],["sportstream1.cfd",15],["sporttuna.*",15],["srt.am",15],["srts.me",15],["sshhaa.*",15],["stapadblockuser.*",[15,84]],["stape.*",[15,84]],["stapewithadblock.*",15],["starblog.tv",[15,70]],["starmusiq.*",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["strcloud.*",[15,84]],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streamadblocker.*",[15,67,84]],["streamadblockplus.*",[15,84]],["streambee.to",15],["streamcdn.*",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamhub.*",15],["streamkiste.tv",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamsport.*",15],["streamta.*",[15,84]],["streamtape.*",[15,84]],["streamtapeadblockuser.*",[15,84]],["streamvid.net",[15,25]],["strikeout.*",[15,69]],["strtape.*",[15,84]],["strtapeadblock.*",[15,84]],["strtapeadblocker.*",[15,84]],["strtapewithadblock.*",15],["strtpe.*",[15,84]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swatchseries.*",15],["swiftload.io",15],["swipebreed.net",15],["swzz.xyz",15],["sxnaar.com",15],["tabooflix.*",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",[15,84]],["tapeblocker.com",[15,84]],["tapenoads.com",[15,84]],["tapewithadblock.org",[15,84,262]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tennisstreams.*",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,67]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["thedaddy.to",[15,212]],["theicongenerator.com",15],["thelastdisaster.vip",15],["themoviesflix.*",15],["thepiratebay.*",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tmearn.*",15],["tojav.net",15],["toonanime.*",15],["top16.net",15],["topvideosgay.com",15],["torlock.*",15],["tormalayalam.*",15],["torrage.info",15],["torrents.vip",15],["torrentz2eu.*",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tutelehd.*",15],["tvglobe.me",15],["tvpclive.com",15],["tvply.*",15],["tvs-widget.com",15],["tvseries.video",15],["u4m.*",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["ufcstream.*",15],["ultrahorny.com",15],["ultraten.net",15],["unblocknow.*",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["uploadbuzz.*",15],["upstream.to",15],["usagoals.*",15],["valeriabelen.com",15],["verdragonball.online",15],["vexmoviex.*",15],["vfxmed.com",15],["vidclouds.*",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidlox.*",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["vinovo.to",15],["vipboxtv.*",[15,67]],["vipleague.*",[15,236]],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",[15,212]],["vstorrent.org",15],["w-hentai.com",15],["watch-series.*",15],["watchbrooklynnine-nine.com",15],["watchelementaryonline.com",15],["watchjavidol.com",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchmonkonline.com",15],["watchrulesofengagementonline.com",15],["watchseries.*",15],["watchthekingofqueens.com",15],["webcamrips.com",15],["wincest.xyz",15],["wolverdon.fun",15],["wordcounter.icu",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",[15,70]],["xclusivejams.*",15],["xmoviesforyou.*",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youdbox.*",15],["youjax.com",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytmp3eu.*",15],["yts-subs.*",15],["yts.*",15],["ytstv.me",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zooqle.*",15],["zpaste.net",15],["1337x.ninjaproxy1.com",15],["y2tube.pro",15],["freeshot.live",15],["fastreams.com",15],["redittsports.com",15],["sky-sports.store",15],["streamsoccer.site",15],["tntsports.store",15],["wowstreams.co",15],["zdsptv.com",15],["tuktukcinma.com",15],["dutchycorp.*",16],["faucet.ovh",16],["mmacore.tv",17],["nxbrew.net",17],["oko.sh",18],["variety.com",19],["gameskinny.com",19],["deadline.com",19],["mlive.com",[19,76]],["doujindesu.*",20],["atlasstudiousa.com",20],["51bonusrummy.in",[20,70]],["washingtonpost.com",21],["gosexpod.com",22],["sexo5k.com",23],["truyen-hentai.com",23],["theshedend.com",25],["zeroupload.com",25],["securenetsystems.net",25],["miniwebtool.com",25],["bchtechnologies.com",25],["eracast.cc",25],["flatai.org",25],["spiegel.de",26],["jacquieetmichel.net",27],["hausbau-forum.de",28],["althub.club",28],["kiemlua.com",28],["tea-coffee.net",29],["spatsify.com",29],["newedutopics.com",29],["getviralreach.in",29],["edukaroo.com",29],["funkeypagali.com",29],["careersides.com",29],["nayisahara.com",29],["wikifilmia.com",29],["infinityskull.com",29],["viewmyknowledge.com",29],["iisfvirtual.in",29],["starxinvestor.com",29],["jkssbalerts.com",29],["imagereviser.com",30],["labgame.io",[31,32]],["kenzo-flowertag.com",33],["mdn.lol",33],["btcbitco.in",34],["btcsatoshi.net",34],["cempakajaya.com",34],["crypto4yu.com",34],["gainl.ink",34],["manofadan.com",34],["readbitcoin.org",34],["wiour.com",34],["tremamnon.com",34],["bitsmagic.fun",34],["ourcoincash.xyz",34],["blog.cryptowidgets.net",35],["blog.insurancegold.in",35],["blog.wiki-topia.com",35],["blog.coinsvalue.net",35],["blog.cookinguide.net",35],["blog.freeoseocheck.com",35],["aylink.co",36],["sugarona.com",37],["nishankhatri.xyz",37],["cety.app",38],["exe-urls.com",38],["exego.app",38],["cutlink.net",38],["cutsy.net",38],["cutyurls.com",38],["cutty.app",38],["cutnet.net",38],["jixo.online",38],["tinys.click",39],["loan.creditsgoal.com",39],["rupyaworld.com",39],["vahantoday.com",39],["techawaaz.in",39],["loan.bgmi32bitapk.in",39],["diendancauduong.com",39],["formyanime.com",39],["gsm-solution.com",39],["h-donghua.com",39],["hindisubbedacademy.com",39],["mydverse.*",39],["ripexbooster.xyz",39],["serial4.com",39],["tutorgaming.com",39],["everydaytechvams.com",39],["dipsnp.com",39],["cccam4sat.com",39],["zeemoontv-24.blogspot.com",39],["stitichsports.com",39],["aiimgvlog.fun",40],["appsbull.com",41],["diudemy.com",41],["maqal360.com",41],["androjungle.com",41],["bookszone.in",41],["drakescans.com",41],["shortix.co",41],["makefreecallsonline.com",41],["msonglyrics.com",41],["app-sorteos.com",41],["bokugents.com",41],["client.pylexnodes.net",41],["btvplus.bg",41],["listar-mc.net",41],["blog24.me",[42,43]],["coingraph.us",44],["impact24.us",44],["iconicblogger.com",45],["auto-crypto.click",45],["tpi.li",46],["oii.la",[46,69]],["shrinke.*",47],["shrinkme.*",47],["smutty.com",47],["e-sushi.fr",47],["gayforfans.com",47],["freeadultcomix.com",47],["down.dataaps.com",47],["filmweb.pl",47],["livecamrips.*",47],["safetxt.net",47],["filespayouts.com",47],["atglinks.com",48],["kbconlinegame.com",49],["hamrojaagir.com",49],["odijob.com",49],["stfly.biz",50],["airevue.net",50],["atravan.net",50],["simana.online",51],["fooak.com",51],["joktop.com",51],["evernia.site",51],["falpus.com",51],["rfiql.com",52],["gujjukhabar.in",52],["smartfeecalculator.com",52],["djxmaza.in",52],["thecubexguide.com",52],["jytechs.in",52],["financacerta.com",53],["encurtads.net",53],["mastkhabre.com",54],["weshare.is",55],["rokni.xyz",56],["keedabankingnews.com",56],["pig69.com",56],["cosplay18.pics",56],["sexwebvideo.com",56],["sexwebvideo.net",56],["3dsfree.org",57],["alpin.de",58],["boersennews.de",58],["chefkoch.de",58],["chip.de",58],["clever-tanken.de",58],["desired.de",58],["donnerwetter.de",58],["fanfiktion.de",58],["focus.de",58],["formel1.de",58],["frustfrei-lernen.de",58],["gewinnspiele.tv",58],["giga.de",58],["gut-erklaert.de",58],["kino.de",58],["messen.de",58],["nickles.de",58],["nordbayern.de",58],["spielfilm.de",58],["teltarif.de",[58,59]],["unsere-helden.com",58],["weltfussball.at",58],["watson.de",58],["mactechnews.de",58],["sport1.de",58],["welt.de",58],["sport.de",58],["allthingsvegas.com",60],["100percentfedup.com",60],["beforeitsnews.com",60],["concomber.com",60],["conservativefiringline.com",60],["dailylol.com",60],["funnyand.com",60],["letocard.fr",60],["mamieastuce.com",60],["meilleurpronostic.fr",60],["patriotnationpress.com",60],["toptenz.net",60],["vitamiiin.com",60],["writerscafe.org",60],["populist.press",60],["dailytruthreport.com",60],["livinggospeldaily.com",60],["first-names-meanings.com",60],["welovetrump.com",60],["thehayride.com",60],["thelibertydaily.com",60],["thepoke.co.uk",60],["thepolitistick.com",60],["theblacksphere.net",60],["shark-tank.com",60],["naturalblaze.com",60],["greatamericanrepublic.com",60],["dailysurge.com",60],["truthlion.com",60],["flagandcross.com",60],["westword.com",60],["republicbrief.com",60],["freedomfirstnetwork.com",60],["phoenixnewtimes.com",60],["designbump.com",60],["clashdaily.com",60],["madworldnews.com",60],["reviveusa.com",60],["sonsoflibertymedia.com",60],["thedesigninspiration.com",60],["videogamesblogger.com",60],["protrumpnews.com",60],["thepalmierireport.com",60],["kresy.pl",60],["thepatriotjournal.com",60],["thegatewaypundit.com",60],["wltreport.com",60],["miaminewtimes.com",60],["politicalsignal.com",60],["rightwingnews.com",60],["bigleaguepolitics.com",60],["comicallyincorrect.com",60],["upornia.com",61],["pillowcase.su",62],["cine-calidad.*",63],["veryfreeporn.com",63],["theporngod.com",63],["asiangay.tv",64],["hentairead.io",64],["japangaysex.com",64],["mangagun.net",64],["mangajikan.com",64],["nicomanga.com",64],["nudeslegion.com",64],["rawinu.com",64],["weloma.art",64],["welovemanga.one",64],["besthdgayporn.com",65],["drivenime.com",65],["erothots1.com",65],["javup.org",65],["shemaleup.net",65],["transflix.net",65],["worthcrete.com",65],["hentaihere.com",66],["player.smashy.stream",66],["player.smashystream.com",66],["123movies.*",67],["123moviesla.*",67],["123movieweb.*",67],["2embed.*",67],["9xmovies.*",67],["adsh.cc",67],["adshort.*",67],["afilmyhouse.blogspot.com",67],["ak.sv",67],["allmovieshub.*",67],["animesultra.com",67],["api.webs.moe",67],["apkmody.io",67],["asianplay.*",67],["atishmkv.*",67],["attvideo.com",67],["backfirstwo.site",67],["bflix.*",67],["crazyblog.in",67],["cricstream.*",67],["crictime.*",67],["cuervotv.me",[67,86]],["divicast.com",67],["dlhd.so",67],["dood.*",[67,191]],["dooood.*",[67,191]],["embed.meomeo.pw",67],["extramovies.*",67],["faselhd.*",67],["faselhds.*",67],["filemoon.*",67],["filmeserialeonline.org",67],["filmy.*",67],["filmyhit.*",67],["filmywap.*",67],["flexyhit.com",67],["fmovies.*",67],["foreverwallpapers.com",67],["french-streams.cc",67],["fslinks.org",67],["gdplayer.*",67],["goku.*",67],["gomovies.*",67],["gowatchseries.*",67],["hdfungamezz.*",67],["hdtoday.to",67],["hinatasoul.com",67],["hindilinks4u.*",67],["hurawatch.*",[67,141]],["igg-games.com",67],["infinityscans.net",67],["jalshamoviezhd.*",67],["livecricket.*",67],["mangareader.to",67],["membed.net",67],["mgnetu.com",67],["mhdsport.*",67],["mkvcinemas.*",[67,189]],["movies2watch.*",67],["moviespapa.*",67],["mp3juice.info",67],["mp3juices.cc",67],["mp4moviez.*",67],["mydownloadtube.*",67],["myflixerz.to",67],["nowmetv.net",67],["nowsportstv.com",67],["nuroflix.*",67],["nxbrew.com",67],["o2tvseries.*",67],["o2tvseriesz.*",67],["oii.io",67],["paidshitforfree.com",67],["pepperlive.info",67],["pirlotv.*",67],["playertv.net",67],["poscitech.*",67],["primewire.*",67],["putlocker68.com",67],["redecanais.*",67],["roystream.com",67],["rssing.com",67],["s.to",67],["serienstream.*",67],["sflix.*",67],["shahed4u.*",67],["shaheed4u.*",67],["share.filesh.site",67],["sharkfish.xyz",67],["skidrowcodex.net",67],["smartermuver.com",67],["speedostream.*",67],["sportcast.*",67],["sports-stream.site",67],["sportskart.*",67],["stream4free.live",67],["streamingcommunity.*",[67,69,103]],["tamilarasan.*",67],["tamilfreemp3songs.*",67],["tamilmobilemovies.in",67],["tamilprinthd.*",67],["tapeadsenjoyer.com",[67,84]],["thewatchseries.live",67],["tnmusic.in",67],["torrentdosfilmes.*",67],["travelplanspro.com",67],["tubemate.*",67],["tusfiles.com",67],["tutlehd4.com",67],["twstalker.com",67],["uploadrar.*",67],["uqload.*",67],["vid-guard.com",67],["vidcloud9.*",67],["vido.*",67],["vidoo.*",67],["vidsaver.net",67],["vidspeeds.com",67],["viralitytoday.com",67],["voiranime.stream",67],["vudeo.*",67],["vumoo.*",67],["watchdoctorwhoonline.com",67],["watchomovies.*",[67,100]],["watchserie.online",67],["webhostingpost.com",67],["woxikon.in",67],["www-y2mate.com",67],["yesmovies.*",67],["ylink.bid",67],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",67],["kickassanime.*",68],["11xmovies.*",69],["buffshub.stream",69],["cinego.tv",69],["dokoembed.pw",69],["ev01.to",69],["fojik.site",69],["fstream365.com",69],["fzmovies.*",69],["linkz.*",69],["minoplres.xyz",69],["mostream.us",69],["moviedokan.*",69],["myflixer.*",69],["prmovies.*",69],["readcomiconline.li",69],["s3embtaku.pro",69],["sflix2.to",69],["sportshub.stream",69],["streamblasters.*",69],["topcinema.cam",69],["webxzplay.cfd",69],["zonatmo.com",69],["animesaturn.cx",69],["filecrypt.*",69],["hunterscomics.com",69],["aniwave.uk",69],["streampoi.com",70],["rahim-soft.com",70],["x-video.tube",70],["rubystm.com",70],["rubyvid.com",70],["rubyvidhub.com",70],["stmruby.com",70],["streamruby.com",70],["poophd.cc",70],["windowsreport.com",70],["fuckflix.click",70],["celebzcircle.com",71],["bi-girl.net",71],["ftuapps.*",71],["hentaiseason.com",71],["hoodtrendspredict.com",71],["marcialhub.xyz",71],["odiadance.com",71],["osteusfilmestuga.online",71],["ragnarokscanlation.opchapters.com",71],["sampledrive.org",71],["showflix.*",71],["swordalada.org",71],["tojimangas.com",71],["tvappapk.com",71],["twobluescans.com",[71,72]],["varnascan.xyz",71],["madeeveryday.com",73],["maidenhead-advertiser.co.uk",73],["mardomreport.net",73],["melangery.com",73],["milestomemories.com",73],["modernmom.com",73],["momtastic.com",73],["mostlymorgan.com",73],["motherwellmag.com",73],["muddybootsanddiamonds.com",73],["musicfeeds.com.au",73],["mylifefromhome.com",73],["nationalreview.com",73],["nordot.app",73],["oakvillenews.org",73],["observer.com",73],["ourlittlesliceofheaven.com",73],["palachinkablog.com",73],["patheos.com",73],["pinkonthecheek.com",73],["politicususa.com",73],["predic.ro",73],["puckermom.com",73],["qtoptens.com",73],["realgm.com",73],["reelmama.com",73],["robbreport.com",73],["royalmailchat.co.uk",73],["samchui.com",73],["sandrarose.com",73],["sherdog.com",73],["sidereel.com",73],["silive.com",73],["simpleflying.com",73],["sloughexpress.co.uk",73],["spacenews.com",73],["sportsgamblingpodcast.com",73],["spotofteadesigns.com",73],["stacysrandomthoughts.com",73],["ssnewstelegram.com",73],["superherohype.com",[73,76]],["tablelifeblog.com",73],["thebeautysection.com",73],["thecelticblog.com",73],["thecurvyfashionista.com",73],["thefashionspot.com",73],["thegamescabin.com",73],["thenerdyme.com",73],["thenonconsumeradvocate.com",73],["theprudentgarden.com",73],["thethings.com",73],["timesnews.net",73],["topspeed.com",73],["toyotaklub.org.pl",73],["travelingformiles.com",73],["tutsnode.org",73],["viralviralvideos.com",73],["wannacomewith.com",73],["wimp.com",[73,76]],["windsorexpress.co.uk",73],["woojr.com",73],["worldoftravelswithkids.com",73],["worldsurfleague.com",73],["cheatsheet.com",74],["pwinsider.com",74],["c-span.org",75],["15min.lt",76],["247sports.com",76],["abc17news.com",76],["agrodigital.com",76],["al.com",76],["aliontherunblog.com",76],["allaboutthetea.com",76],["allmovie.com",76],["allmusic.com",76],["allthingsthrifty.com",76],["amessagewithabottle.com",76],["artforum.com",76],["artnews.com",76],["awkward.com",76],["awkwardmom.com",76],["barcablaugranes.com",76],["barnsleychronicle.com",76],["bethcakes.com",76],["betweenenglandandiowa.com",76],["bgr.com",76],["blazersedge.com",76],["blogher.com",76],["blu-ray.com",76],["bluegraygal.com",76],["briefeguru.de",76],["brobible.com",76],["cagesideseats.com",76],["cbsnews.com",76],["cbssports.com",[76,255]],["celiacandthebeast.com",76],["chaptercheats.com",76],["cleveland.com",76],["clickondetroit.com",76],["commercialobserver.com",76],["competentedigitale.ro",76],["dailydot.com",76],["dailykos.com",76],["dailyvoice.com",76],["decider.com",76],["didyouknowfacts.com",76],["dogtime.com",76],["eater.com",76],["eldiariony.com",76],["fark.com",76],["femestella.com",76],["footwearnews.com",76],["free-power-point-templates.com",76],["freeconvert.com",76],["frogsandsnailsandpuppydogtail.com",76],["funtasticlife.com",76],["fwmadebycarli.com",76],["golfdigest.com",76],["gulflive.com",76],["homeglowdesign.com",76],["honeygirlsworld.com",76],["ibtimes.co.in",76],["imgur.com",76],["indiewire.com",76],["intouchweekly.com",76],["jasminemaria.com",76],["knowyourmeme.com",76],["kion546.com",76],["last.fm",76],["lehighvalleylive.com",76],["lettyskitchen.com",76],["lifeandstylemag.com",76],["lifeinleggings.com",76],["lizzieinlace.com",76],["localnews8.com",76],["lonestarlive.com",76],["mandatory.com",76],["masslive.com",76],["mmamania.com",76],["naszemiasto.pl",76],["nationalpost.com",76],["nbcsports.com",76],["news.com.au",76],["ninersnation.com",76],["nj.com",76],["nothingbutnewcastle.com",76],["nsjonline.com",76],["nypost.com",76],["oregonlive.com",76],["pagesix.com",76],["pennlive.com",76],["playstationlifestyle.net",76],["rollingstone.com",76],["sbnation.com",76],["sheknows.com",76],["sneakernews.com",76],["sport-fm.gr",76],["stylecaster.com",76],["syracuse.com",76],["tastingtable.com",76],["thecw.com",76],["thedailymeal.com",76],["theflowspace.com",76],["themarysue.com",76],["tokfm.pl",76],["torontosun.com",76],["tvline.com",76],["usmagazine.com",76],["wallup.net",76],["worldstar.com",76],["worldstarhiphop.com",76],["yourcountdown.to",76],["automobile-catalog.com",[77,78,79]],["motorbikecatalog.com",[77,78,79]],["topstarnews.net",77],["islamicfinder.org",77],["secure-signup.net",77],["dramabeans.com",77],["dropgame.jp",[77,78]],["manta.com",77],["tportal.hr",77],["tvtropes.org",77],["convertcase.net",77],["yakkun.com",78],["373news.com",78],["alc.co.jp",78],["allthetests.com",78],["animanch.com",78],["aniroleplay.com",78],["apkmirror.com",[78,186]],["aucfree.com",78],["autoby.jp",78],["autofrage.net",78],["carscoops.com",78],["chanto.jp.net",78],["cinetrafic.fr",78],["cocokara-next.com",78],["computerfrage.net",78],["crosswordsolver.com",78],["cruciverba.it",78],["daily.co.jp",78],["dictionnaire.lerobert.com",78],["dnevno.hr",78],["drweil.com",78],["dziennik.pl",78],["forsal.pl",78],["freemcserver.net",78],["game8.jp",78],["gardeningsoul.com",78],["gazetaprawna.pl",78],["gigafile.nu",78],["globalrph.com",78],["golf-live.at",78],["grapee.jp",78],["gutefrage.net",78],["heureka.cz",78],["horairesdouverture24.fr",78],["indiatimes.com",78],["infor.pl",78],["iza.ne.jp",78],["j-cast.com",78],["j-town.net",78],["jablickar.cz",78],["javatpoint.com",78],["kinmaweb.jp",78],["kobe-journal.com",78],["kreuzwortraetsel.de",78],["kurashiru.com",78],["kyoteibiyori.com",78],["lacuarta.com",78],["laleggepertutti.it",78],["langenscheidt.com",78],["livenewschat.eu",78],["luremaga.jp",78],["malaymail.com",78],["mamastar.jp",78],["maketecheasier.com",[78,79]],["minkou.jp",78],["modhub.us",78],["motscroises.fr",78],["muragon.com",78],["nana-press.com",78],["natalie.mu",78],["niketalk.com",78],["nikkan-gendai.com",78],["oeffnungszeitenbuch.de",78],["onecall2ch.com",78],["oraridiapertura24.it",78],["oxfordlearnersdictionaries.com",78],["palabr.as",78],["pashplus.jp",78],["persoenlich.com",78],["petitfute.com",78],["play-games.com",78],["powerpyx.com",78],["quefaire.be",78],["raetsel-hilfe.de",78],["ranking.net",78],["roleplayer.me",78],["rostercon.com",78],["samsungmagazine.eu",78],["sankei.com",78],["sanspo.com",78],["slashdot.org",78],["sourceforge.net",[78,83]],["syosetu.com",78],["talkwithstranger.com",78],["the-crossword-solver.com",78],["transparentcalifornia.com",78],["transparentnevada.com",78],["trilltrill.jp",78],["tvtv.ca",78],["tvtv.us",78],["ufret.jp",78],["uranai.nosv.org",78],["watchdocumentaries.com",78],["webdesignledger.com",78],["wetteronline.de",78],["wfmz.com",78],["winfuture.de",78],["word-grabber.com",78],["wort-suchen.de",78],["woxikon.*",78],["young-machine.com",78],["yugioh-starlight.com",78],["yutura.net",78],["zagreb.info",78],["zakzak.co.jp",78],["2chblog.jp",78],["2monkeys.jp",78],["46matome.net",78],["akb48glabo.com",78],["akb48matomemory.com",78],["alfalfalfa.com",78],["all-nationz.com",78],["anihatsu.com",78],["aqua2ch.net",78],["blog.esuteru.com",78],["blog.livedoor.jp",78],["blog.jp",78],["blogo.jp",78],["chaos2ch.com",78],["choco0202.work",78],["crx7601.com",78],["danseisama.com",78],["dareda.net",78],["digital-thread.com",78],["doorblog.jp",78],["exawarosu.net",78],["fgochaldeas.com",78],["football-2ch.com",78],["gekiyaku.com",78],["golog.jp",78],["hacchaka.net",78],["heartlife-matome.com",78],["liblo.jp",78],["fesoku.net",78],["fiveslot777.com",78],["gamejksokuhou.com",78],["girlsreport.net",78],["girlsvip-matome.com",78],["grasoku.com",78],["gundamlog.com",78],["honyaku-channel.net",78],["ikarishintou.com",78],["imas-cg.net",78],["imihu.net",78],["inutomo11.com",78],["itainews.com",78],["itaishinja.com",78],["jin115.com",78],["jisaka.com",78],["jnews1.com",78],["jumpsokuhou.com",78],["jyoseisama.com",78],["keyakizaka46matomemory.net",78],["kidan-m.com",78],["kijoden.com",78],["kijolariat.net",78],["kijolifehack.com",78],["kijomatomelog.com",78],["kijyokatu.com",78],["kijyomatome.com",78],["kijyomatome-ch.com",78],["kijyomita.com",78],["kirarafan.com",78],["kitimama-matome.net",78],["kitizawa.com",78],["konoyubitomare.jp",78],["kotaro269.com",78],["kyousoku.net",78],["ldblog.jp",78],["livedoor.biz",78],["livedoor.blog",78],["majikichi.com",78],["matacoco.com",78],["matomeblade.com",78],["matomelotte.com",78],["matometemitatta.com",78],["mojomojo-licarca.com",78],["morikinoko.com",78],["nandemo-uketori.com",78],["netatama.net",78],["news-buzz1.com",78],["news30over.com",78],["nmb48-mtm.com",78],["norisoku.com",78],["npb-news.com",78],["ocsoku.com",78],["okusama-kijyo.com",78],["onihimechan.com",78],["orusoku.com",78],["otakomu.jp",78],["otoko-honne.com",78],["oumaga-times.com",78],["outdoormatome.com",78],["pachinkopachisro.com",78],["paranormal-ch.com",78],["recosoku.com",78],["s2-log.com",78],["saikyo-jump.com",78],["shuraba-matome.com",78],["ske48matome.net",78],["squallchannel.com",78],["sukattojapan.com",78],["sumaburayasan.com",78],["usi32.com",78],["uwakich.com",78],["uwakitaiken.com",78],["vault76.info",78],["vipnews.jp",78],["vippers.jp",78],["vipsister23.com",78],["vtubernews.jp",78],["watarukiti.com",78],["world-fusigi.net",78],["zakuzaku911.com",78],["zch-vip.com",78],["interfootball.co.kr",79],["a-ha.io",79],["cboard.net",79],["jjang0u.com",79],["joongdo.co.kr",79],["viva100.com",79],["gamingdeputy.com",79],["alle-tests.nl",79],["tweaksforgeeks.com",79],["m.inven.co.kr",79],["mlbpark.donga.com",79],["meconomynews.com",79],["brandbrief.co.kr",79],["motorgraph.com",79],["worldhistory.org",80],["bleepingcomputer.com",81],["pravda.com.ua",81],["ap7am.com",82],["cinema.com.my",82],["dolldivine.com",82],["giornalone.it",82],["iplocation.net",82],["jamaicaobserver.com",82],["jawapos.com",82],["jutarnji.hr",82],["kompasiana.com",82],["mediaindonesia.com",82],["slobodnadalmacija.hr",82],["upmedia.mg",82],["advertisertape.com",84],["tapeadvertisement.com",84],["tapelovesads.org",84],["watchadsontape.com",84],["vosfemmes.com",85],["voyeurfrance.net",85],["bollyflix.*",86],["neymartv.net",86],["streamhd247.info",86],["samax63.lol",86],["hindimoviestv.com",86],["buzter.xyz",86],["valhallas.click",86],["aliezstream.pro",86],["daddy-stream.xyz",86],["daddylive1.*",86],["esportivos.*",86],["instream.pro",86],["mylivestream.pro",86],["poscitechs.*",86],["powerover.online",86],["sportea.link",86],["sportsurge.stream",86],["ufckhabib.com",86],["ustream.pro",86],["animeshqip.site",86],["apkship.shop",86],["buzter.pro",86],["enjoysports.bond",86],["filedot.to",86],["foreverquote.xyz",86],["hdstream.one",86],["kingstreamz.site",86],["live.fastsports.store",86],["livesnow.me",86],["livesports4u.pw",86],["masterpro.click",86],["nuxhallas.click",86],["papahd.info",86],["rgshows.me",86],["sportmargin.live",86],["sportmargin.online",86],["sportsloverz.xyz",86],["sportzlive.shop",86],["supertipzz.online",86],["totalfhdsport.xyz",86],["ultrastreamlinks.xyz",86],["usgate.xyz",86],["webmaal.cfd",86],["wizistreamz.xyz",86],["worldstreamz.shop",86],["g-porno.com",86],["g-streaming.com",86],["educ4m.com",86],["fromwatch.com",86],["visualnewshub.com",86],["bigwarp.*",86],["animeshqip.org",86],["uns.bio",86],["reshare.pm",86],["videograbber.cc",86],["affordwonder.net",86],["hyundaitucson.info",87],["exambd.net",88],["cgtips.org",89],["freewebcart.com",90],["freemagazines.top",90],["siamblockchain.com",90],["emuenzen.de",91],["kickass.*",92],["unblocked.id",94],["listendata.com",95],["7xm.xyz",95],["fastupload.io",95],["azmath.info",95],["wouterplanet.com",96],["xenvn.com",97],["androidacy.com",98],["4porn4.com",99],["bestpornflix.com",100],["freeroms.com",100],["andhrafriends.com",100],["723qrh1p.fun",100],["up4stream.com",100],["ups2up.fun",100],["98zero.com",101],["mediaset.es",101],["updatewallah.in",101],["hwbusters.com",101],["beatsnoop.com",102],["fetchpik.com",102],["hackerranksolution.in",102],["camsrip.com",102],["help.sakarnewz.com",102],["austiblox.net",104],["btcbunch.com",105],["teachoo.com",[106,107]],["mafiatown.pl",108],["bitcotasks.com",109],["hilites.today",110],["udvl.com",111],["www.chip.de",[112,113,114,115]],["topsporter.net",116],["sportshub.to",116],["streamcheck.link",117],["myanimelist.net",118],["unofficialtwrp.com",119],["codec.kyiv.ua",119],["kimcilonlyofc.com",119],["bitcosite.com",120],["bitzite.com",120],["teluguflix.*",121],["hacoos.com",122],["watchhentai.net",123],["hes-goals.io",123],["pkbiosfix.com",123],["casi3.xyz",123],["bondagevalley.cc",124],["zefoy.com",125],["mailgen.biz",126],["tempinbox.xyz",126],["vidello.net",127],["newscon.org",128],["yunjiema.top",128],["pcgeeks-games.com",128],["resizer.myct.jp",129],["gametohkenranbu.sakuraweb.com",130],["jisakuhibi.jp",131],["rank1-media.com",131],["lifematome.blog",132],["fm.sekkaku.net",133],["free-avx.jp",134],["dvdrev.com",135],["betweenjpandkr.blog",136],["nft-media.net",137],["ghacks.net",138],["leak.sx",139],["paste.bin.sx",139],["pornleaks.in",139],["truyentranhfull.net",140],["fcportables.com",140],["repack-games.com",140],["ibooks.to",140],["blog.tangwudi.com",140],["filecatchers.com",140],["babaktv.com",140],["actvid.*",141],["zoechip.com",141],["nohost.one",141],["vidbinge.com",141],["nectareousoverelate.com",143],["khoaiphim.com",144],["haafedk2.com",145],["fordownloader.com",145],["jovemnerd.com.br",146],["totalcsgo.com",147],["vivamax.asia",148],["manysex.com",149],["gaminginfos.com",150],["tinxahoivn.com",151],["automoto.it",152],["codelivly.com",153],["tchatche.com",154],["cryptoearns.com",154],["lordchannel.com",155],["client.falixnodes.net",156],["novelhall.com",157],["bagi.co.in",158],["keran.co",158],["biblestudytools.com",159],["christianheadlines.com",159],["ibelieve.com",159],["kuponigo.com",160],["inxxx.com",161],["bemyhole.com",161],["embedwish.com",162],["filelions.live",162],["leakslove.net",162],["jenismac.com",163],["vxetable.cn",164],["nizarstream.com",165],["donghuaworld.com",166],["letsdopuzzles.com",167],["rediff.com",168],["igay69.com",169],["kimcilonly.link",170],["dzapk.com",171],["darknessporn.com",172],["familyporner.com",172],["freepublicporn.com",172],["pisshamster.com",172],["punishworld.com",172],["xanimu.com",172],["tainio-mania.online",173],["eroticmoviesonline.me",174],["teleclub.xyz",175],["ecamrips.com",176],["showcamrips.com",176],["tucinehd.com",177],["9animetv.to",178],["qiwi.gg",179],["jornadaperfecta.com",180],["loseart.com",181],["sousou-no-frieren.com",182],["unite-guide.com",183],["thebullspen.com",184],["receitasdaora.online",185],["streambucket.net",187],["nontongo.win",187],["torrentdownload.*",189],["cineb.rs",189],["123animehub.cc",189],["tukipasti.com",189],["cataz.to",189],["netmovies.to",189],["hiraethtranslation.com",190],["all3do.com",191],["do7go.com",191],["d0000d.com",191],["d000d.com",191],["d0o0d.com",191],["do0od.com",191],["doods.*",191],["doodstream.*",191],["dooodster.com",191],["ds2play.com",191],["ds2video.com",191],["vidply.com",191],["xfreehd.com",192],["freethesaurus.com",193],["thefreedictionary.com",193],["dexterclearance.com",194],["x86.co.kr",195],["onlyfaucet.com",196],["x-x-x.tube",197],["fdownloader.net",198],["thehackernews.com",199],["mielec.pl",200],["treasl.com",201],["mrbenne.com",202],["cnpics.org",203],["ovabee.com",203],["porn4f.com",203],["cnxx.me",203],["ai18.pics",203],["sportsonline.si",204],["fiuxy2.co",205],["animeunity.to",206],["tokopedia.com",207],["remixsearch.net",208],["remixsearch.es",208],["onlineweb.tools",208],["sharing.wtf",208],["2024tv.ru",209],["modrinth.com",210],["curseforge.com",210],["xnxxcom.xyz",211],["sportsurge.net",212],["joyousplay.xyz",212],["quest4play.xyz",[212,214]],["generalpill.net",212],["moneycontrol.com",213],["cookiewebplay.xyz",214],["ilovetoplay.xyz",214],["streamcaster.live",214],["weblivehdplay.ru",214],["oaaxpgp3.xyz",215],["m9.news",216],["callofwar.com",217],["secondhandsongs.com",218],["nudezzers.org",219],["send.cm",220],["send.now",220],["3rooodnews.net",221],["xxxbfvideo.net",222],["filmy4wap.co.in",223],["filmy4waps.org",223],["gameshop4u.com",224],["regenzi.site",224],["historicaerials.com",225],["handirect.fr",226],["animefenix.tv",227],["fsiblog3.club",228],["kamababa.desi",228],["sat-sharing.com",228],["getfiles.co.uk",229],["genelify.com",230],["dhtpre.com",231],["xbaaz.com",232],["lineupexperts.com",234],["fearmp4.ru",235],["fbstreams.*",236],["m.shuhaige.net",237],["streamingnow.mov",238],["thesciencetoday.com",239],["sportnews.to",239],["ghbrisk.com",241],["iplayerhls.com",241],["bacasitus.com",242],["katoikos.world",242],["abstream.to",243],["pawastreams.pro",244],["rebajagratis.com",245],["tv.latinlucha.es",245],["fetcheveryone.com",246],["reviewdiv.com",247],["laurelberninteriors.com",248],["godlike.com",249],["godlikeproductions.com",249],["bestreamsports.org",250],["xmalay1.net",252],["letemsvetemapplem.eu",253],["pc-builds.com",254],["cefirates.com",256],["comicleaks.com",256],["tapmyback.com",256],["ping.gg",256],["nookgaming.com",256],["creatordrop.com",256],["bitdomain.biz",256],["fort-shop.kiev.ua",256],["accuretawealth.com",256],["resourceya.com",256],["tracktheta.com",256],["adaptive.marketing",256],["camberlion.com",256],["trybawaryjny.pl",256],["segops.madisonspecs.com",256],["stresshelden-coaching.de",256],["controlconceptsusa.com",256],["ryaktive.com",256],["tip.etip-staging.etip.io",256],["future-fortune.com",257],["furucombo.app",257],["bolighub.dk",257],["intercity.technology",258],["freelancer.taxmachine.be",258],["adria.gg",258],["fjlaboratories.com",258],["abhijith.page",258],["helpmonks.com",258],["dataunlocker.com",259],["proboards.com",260],["winclassic.net",260],["farmersjournal.ie",261]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

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
