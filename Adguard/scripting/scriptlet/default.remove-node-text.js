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

// ruleset: default

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
const argsList = [["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","delete window"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","getPopUrl"],["script","/popMagic|pop1stp/"],["script","/shown_at|WebAssembly/"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script","adrecover.com"],["script","/bizx|prebid/"],["script","html-load.com"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","Brave"],["script","await"],["script","Object.keys(window.adngin).length"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","\"\").split(\",\")[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"/"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/$.*open/"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb|popundersPerIP/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","/eval|adb/i"],["script","/isAdBlockActive|WebAssembly/"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","\"data-adm-url\""],["script","NREUM"]];
const hostnamesMap = new Map([["web.de",0],["skidrowreloaded.com",[1,13]],["wawacity.*",1],["720pstream.*",[1,64]],["embedsports.me",[1,86]],["embedstream.me",[1,12,13,64,86]],["jumbtv.com",[1,86]],["reliabletv.me",[1,86]],["topembed.pw",[1,66,214]],["crackstreamer.net",1],["methstreamer.com",1],["rnbastreams.com",1],["vidsrc.*",[1,12,64]],["1stream.eu",1],["4kwebplay.xyz",1],["anime4i.vip",1],["antennasports.ru",1],["buffsports.me",[1,64]],["buffstreams.app",1],["claplivehdplay.ru",[1,214]],["cracksports.me",[1,12]],["euro2024direct.ru",1],["ext.to",1],["extreme-down.*",1],["eztv.tf",1],["eztvx.to",1],["flix-wave.*",1],["hikaritv.xyz",1],["kenitv.me",[1,12,13]],["lewblivehdplay.ru",[1,214]],["mixdrop.*",[1,13]],["mlbbite.net",1],["mlbstreams.ai",1],["qatarstreams.me",[1,12]],["qqwebplay.xyz",[1,214]],["sanet.*",1],["soccerworldcup.me",[1,12]],["sportshd.*",1],["topstreams.info",1],["totalsportek.to",1],["viwlivehdplay.ru",1],["vidco.pro",[1,64]],["moviepilot.de",[2,55]],["userupload.*",3],["cinedesi.in",3],["intro-hd.net",3],["monacomatin.mc",3],["nodo313.net",3],["hesgoal-tv.io",3],["hesgoal-vip.io",3],["earn.punjabworks.com",3],["mahajobwala.in",3],["solewe.com",3],["panel.play.hosting",3],["pahe.*",[4,13,66]],["soap2day.*",4],["yts.mx",5],["magesypro.com",6],["pinsystem.co.uk",6],["elrellano.com",6],["tinyppt.com",6],["veganab.co",6],["camdigest.com",6],["learnmany.in",6],["amanguides.com",[6,35]],["highkeyfinance.com",[6,35]],["appkamods.com",6],["techacode.com",6],["djqunjab.in",6],["downfile.site",6],["expertvn.com",6],["trangchu.news",6],["3dmodelshare.org",6],["nulleb.com",6],["asiaon.top",6],["reset-scans.*",6],["coursesghar.com",6],["thecustomrom.com",6],["snlookup.com",6],["bingotingo.com",6],["ghior.com",6],["3dmili.com",6],["karanpc.com",6],["plc247.com",6],["apkdelisi.net",6],["freepasses.org",6],["poplinks.*",[6,39]],["tomarnarede.pt",6],["basketballbuzz.ca",6],["dribbblegraphics.com",6],["kemiox.com",6],["teksnologi.com",6],["bharathwick.com",6],["descargaspcpro.net",6],["dx-tv.com",6],["rt3dmodels.com",6],["plc4me.com",6],["blisseyhusbands.com",6],["mhdsports.*",6],["mhdsportstv.*",6],["mhdtvsports.*",6],["mhdtvworld.*",6],["mhdtvmax.*",6],["mhdstream.*",6],["madaradex.org",6],["trigonevo.com",6],["franceprefecture.fr",6],["jazbaat.in",6],["aipebel.com",6],["audiotools.blog",6],["embdproxy.xyz",6],["hqq.*",7],["waaw.*",7],["pixhost.*",8],["vipbox.*",9],["telerium.*",10],["apex2nova.com",10],["germancarforum.com",11],["cybercityhelp.in",11],["innateblogger.com",11],["omeuemprego.online",11],["viprow.*",[12,13,64]],["bluemediadownload.*",12],["bluemediafile.*",12],["bluemedialink.*",12],["bluemediastorage.*",12],["bluemediaurls.*",12],["urlbluemedia.*",12],["streamnoads.com",[12,13,64,76]],["bowfile.com",12],["cloudvideo.tv",[12,64]],["cloudvideotv.*",[12,64]],["coloredmanga.com",12],["exeo.app",12],["hiphopa.net",[12,13]],["megaup.net",12],["olympicstreams.co",[12,64]],["tv247.us",[12,13]],["uploadhaven.com",12],["userscloud.com",[12,64]],["mlbbox.me",12],["vikingf1le.us.to",12],["neodrive.xyz",12],["mdfx9dc8n.net",13],["mdzsmutpcvykb.net",13],["mixdrop21.net",13],["mixdropjmk.pw",13],["123-movies.*",13],["123movieshd.*",13],["123movieshub.*",13],["123moviesme.*",13],["1337x.*",[13,188]],["141jav.com",13],["1bit.space",13],["1bitspace.com",13],["1stream.*",13],["1tamilmv.*",13],["2ddl.*",13],["2umovies.*",13],["345movies.com",13],["3dporndude.com",13],["3hiidude.*",13],["4archive.org",13],["4horlover.com",13],["4stream.*",13],["560pmovie.com",13],["5movies.*",13],["7hitmovies.*",13],["85tube.com",13],["85videos.com",13],["9xmovie.*",13],["aagmaal.*",[13,64]],["acefile.co",13],["actusports.eu",13],["adblockeronstape.*",[13,76]],["adblockeronstreamtape.*",13],["adblockplustape.*",[13,76]],["adblockstreamtape.*",[13,76]],["adblockstrtape.*",[13,76]],["adblockstrtech.*",[13,76]],["adblocktape.*",[13,76]],["adclickersbot.com",13],["adcorto.*",13],["adricami.com",13],["adslink.pw",13],["adultstvlive.com",13],["adz7short.space",13],["aeblender.com",13],["ahdafnews.blogspot.com",13],["ak47sports.com",13],["akuma.moe",13],["alexsports.*",13],["alexsportss.*",13],["alexsportz.*",13],["allplayer.tk",13],["amateurblog.tv",13],["androidadult.com",[13,240]],["anhsexjav.xyz",13],["anidl.org",13],["anime-loads.org",13],["animeblkom.net",13],["animefire.plus",13],["animelek.me",13],["animepahe.*",13],["animesanka.*",13],["animespire.net",13],["animestotais.xyz",13],["animeyt.es",13],["animixplay.*",13],["aniplay.*",13],["anroll.net",13],["antiadtape.*",[13,76]],["anymoviess.xyz",13],["aotonline.org",13],["asenshu.com",13],["asialiveaction.com",13],["asianclipdedhd.net",13],["asianclub.*",13],["ask4movie.*",13],["askim-bg.com",13],["asumsikedaishop.com",13],["atomixhq.*",[13,64]],["atomohd.*",13],["avcrempie.com",13],["avseesee.com",13],["gettapeads.com",[13,76]],["backfirstwo.com",13],["bajarjuegospcgratis.com",13],["balkanportal.net",13],["balkanteka.net",13],["bdnewszh.com",[13,64]],["beinmatch.*",[13,22]],["belowporn.com",13],["bestgirlsexy.com",13],["bestnhl.com",13],["bestporn4free.com",13],["bestporncomix.com",13],["bet36.es",13],["bgwp.cc",[13,18]],["bhaai.*",13],["bikinitryon.net",13],["birdurls.com",13],["bitsearch.to",13],["blackcockadventure.com",13],["blackcockchurch.org",13],["blackporncrazy.com",13],["blizzboygames.net",13],["blizzpaste.com",13],["blkom.com",13],["blog-peliculas.com",13],["blogtrabalhista.com",13],["blurayufr.*",13],["bobsvagene.club",13],["bolly4umovies.click",13],["bonusharian.pro",13],["brilian-news.id",13],["brupload.net",13],["bucitana.com",13],["buffstreams.*",13],["camchickscaps.com",13],["camgirlcum.com",13],["camgirls.casa",13],["canalesportivo.*",13],["cashurl.in",13],["castingx.net",13],["ccurl.net",[13,64]],["celebrity-leaks.net",13],["cgpelis.net",13],["charexempire.com",13],["choosingnothing.com",13],["clasico.tv",13],["clickndownload.*",13],["clicknupload.*",13],["clik.pw",13],["coin-free.com",[13,32]],["coins100s.fun",13],["comicsmanics.com",13],["compucalitv.com",13],["coolcast2.com",13],["cosplaytab.com",13],["countylocalnews.com",13],["cpmlink.net",13],["crackstreamshd.click",13],["crespomods.com",13],["crisanimex.com",13],["crunchyscan.fr",13],["cuevana3.fan",13],["cuevana3hd.com",13],["cumception.com",13],["cutpaid.com",13],["daddylive.*",[13,64,212]],["daddylivehd.*",[13,64]],["dailyuploads.net",13],["datawav.club",13],["daughtertraining.com",13],["ddrmovies.*",13],["deepgoretube.site",13],["deltabit.co",13],["deporte-libre.top",13],["depvailon.com",13],["derleta.com",13],["desiremovies.*",13],["desivdo.com",13],["desixx.net",13],["detikkebumen.com",13],["deutschepornos.me",13],["devlib.*",13],["diasoft.xyz",13],["directupload.net",13],["diskusscan.com",13],["divxtotal.*",13],["divxtotal1.*",13],["dixva.com",13],["dlhd.*",13],["doctormalay.com",13],["dofusports.xyz",13],["dogemate.com",13],["doods.cam",13],["doodskin.lat",13],["downloadrips.com",13],["downvod.com",13],["dphunters.mom",13],["dragontranslation.com",13],["dvdfullestrenos.com",13],["dvdplay.*",[13,64]],["ebookbb.com",13],["ebookhunter.net",13],["egyanime.com",13],["egygost.com",13],["egyshare.cc",13],["ekasiwap.com",13],["electro-torrent.pl",13],["elil.cc",13],["elixx.*",13],["enjoy4k.*",13],["eplayer.click",13],["erovoice.us",13],["eroxxx.us",13],["estrenosdoramas.net",13],["estrenosflix.*",13],["estrenosflux.*",13],["estrenosgo.*",13],["everia.club",13],["everythinginherenet.blogspot.com",13],["extrafreetv.com",13],["extremotvplay.com",13],["f1stream.*",13],["fapinporn.com",13],["fapptime.com",13],["fashionblog.tv",13],["fastreams.live",13],["faucethero.com",13],["fbstream.*",13],["fembed.com",13],["femdom-joi.com",13],["file4go.*",13],["fileone.tv",13],["film1k.com",13],["filmeonline2023.net",13],["filmesonlinex.org",13],["filmesonlinexhd.biz",[13,64]],["filmovitica.com",13],["filmymaza.blogspot.com",13],["filmyzilla.*",[13,64]],["filthy.family",13],["findav.*",13],["findporn.*",13],["fixfinder.click",13],["flixmaza.*",13],["flizmovies.*",13],["flostreams.xyz",13],["flyfaucet.com",13],["footyhunter.lol",13],["forex-trnd.com",13],["forumchat.club",13],["forumlovers.club",13],["freemoviesonline.biz",13],["freeomovie.co.in",13],["freeomovie.to",13],["freeporncomic.net",13],["freepornhdonlinegay.com",13],["freeproxy.io",13],["freetvsports.*",13],["freeuse.me",13],["freeusexporn.com",13],["fsharetv.cc",13],["fsicomics.com",13],["fullymaza.*",13],["g3g.*",13],["galinhasamurai.com",13],["gamepcfull.com",13],["gameronix.com",13],["gamesfullx.com",13],["gameshdlive.net",13],["gamesmountain.com",13],["gamesrepacks.com",13],["gamingguru.fr",13],["gamovideo.com",13],["garota.cf",13],["gaydelicious.com",13],["gaypornhot.com",13],["gaypornmasters.com",13],["gaysex69.net",13],["gemstreams.com",13],["get-to.link",13],["girlscanner.org",13],["giurgiuveanul.ro",13],["gledajcrtace.xyz",13],["gocast2.com",13],["gomo.to",13],["gostosa.cf",13],["gotxx.*",13],["grantorrent.*",13],["gtlink.co",13],["gwiazdypornosow.pl",13],["haho.moe",13],["hatsukimanga.com",13],["hayhd.net",13],["hdmoviesfair.*",[13,64]],["hdmoviesflix.*",13],["hdsaprevodom.com",13],["hdstreamss.club",13],["hentais.tube",13],["hentaistream.co",13],["hentaitk.net",13],["hentaitube.online",13],["hentaiworld.tv",13],["hesgoal.tv",13],["hexupload.net",13],["hhkungfu.tv",13],["highlanderhelp.com",13],["hiidudemoviez.*",13],["hindimean.com",13],["hindimovies.to",[13,64]],["hiperdex.com",13],["hispasexy.org",13],["hitprn.com",13],["hoca4u.com",13],["hollymoviehd.cc",13],["hoodsite.com",13],["hopepaste.download",13],["hornylips.com",13],["hotgranny.live",13],["hotmama.live",13],["hqcelebcorner.net",13],["huren.best",13],["hwnaturkya.com",[13,64]],["hxfile.co",[13,64]],["igfap.com",13],["iklandb.com",13],["illink.net",13],["imgkings.com",13],["imgsen.*",13],["imgsex.xyz",13],["imgsto.*",13],["imx.to",13],["incest.*",13],["incestflix.*",13],["influencersgonewild.org",13],["infosgj.free.fr",13],["investnewsbrazil.com",13],["itdmusics.com",13],["itopmusic.*",13],["itsuseful.site",13],["itunesfre.com",13],["iwatchfriendsonline.net",[13,134]],["jackstreams.com",13],["jatimupdate24.com",13],["jav-fun.cc",13],["jav-noni.cc",13],["jav-scvp.com",13],["javcl.com",13],["javf.net",13],["javhay.net",13],["javhoho.com",13],["javhun.com",13],["javleak.com",13],["javmost.*",13],["javporn.best",13],["javsek.net",13],["javsex.to",13],["javtiful.com",[13,15]],["jimdofree.com",13],["jiofiles.org",13],["jorpetz.com",13],["jp-films.com",13],["jpop80ss3.blogspot.com",13],["jpopsingles.eu",[13,190]],["kantotflix.net",13],["kantotinyo.com",13],["kaoskrew.org",13],["kaplog.com",13],["keeplinks.*",13],["keepvid.*",13],["keralahd.*",13],["keralatvbox.com",13],["khatrimazaful.*",13],["khatrimazafull.*",[13,79]],["kickassanimes.io",13],["kimochi.info",13],["kimochi.tv",13],["kinemania.tv",13],["kissasian.*",13],["konstantinova.net",13],["koora-online.live",13],["kunmanga.com",13],["kutmoney.com",13],["kwithsub.com",13],["lat69.me",13],["latinblog.tv",13],["latinomegahd.net",13],["leechall.*",13],["leechpremium.link",13],["legendas.dev",13],["legendei.net",13],["lightdlmovies.blogspot.com",13],["lighterlegend.com",13],["linclik.com",13],["linkebr.com",13],["linkrex.net",13],["linkshorts.*",13],["lulu.st",13],["lulustream.com",[13,66]],["luluvdo.com",13],["manga-oni.com",13],["mangaboat.com",13],["mangagenki.me",13],["mangahere.onl",13],["mangaweb.xyz",13],["mangoporn.net",13],["mangovideo.*",13],["manhwahentai.me",13],["masahub.com",13],["masahub.net",13],["masaporn.*",13],["maturegrannyfuck.com",13],["mdy48tn97.com",13],["mediapemersatubangsa.com",13],["mega-mkv.com",13],["megapastes.com",13],["megapornpics.com",13],["messitv.net",13],["meusanimes.net",13],["milfmoza.com",13],["milfzr.com",13],["millionscast.com",13],["mimaletamusical.blogspot.com",13],["miniurl.*",13],["mirrorace.*",13],["mitly.us",13],["mixdroop.*",13],["mkv-pastes.com",13],["mkvcage.*",13],["mlbstream.*",13],["mlsbd.*",13],["mmsbee.*",13],["monaskuliner.ac.id",13],["moredesi.com",13],["motogpstream.*",13],["movgotv.net",13],["movi.pk",13],["movieplex.*",13],["movierulzlink.*",13],["movies123.*",13],["moviesflix.*",13],["moviesmeta.*",13],["moviessources.*",13],["moviesverse.*",13],["movieswbb.com",13],["moviewatch.com.pk",13],["moviezwaphd.*",13],["mp4upload.com",13],["mrskin.live",13],["mrunblock.*",13],["multicanaistv.com",13],["mundowuxia.com",13],["myeasymusic.ir",13],["myonvideo.com",13],["myyouporn.com",13],["narutoget.info",13],["naughtypiss.com",13],["nbastream.*",13],["nekopoi.*",[13,79]],["nerdiess.com",13],["new-fs.eu",13],["newmovierulz.*",13],["newtorrentgame.com",13],["nflstream.*",13],["nflstreams.me",13],["nhlstream.*",13],["niaomea.me",[13,64]],["nicekkk.com",13],["nicesss.com",13],["nlegs.com",13],["noblocktape.*",[13,76]],["nocensor.*",13],["nolive.me",[13,64]],["notformembersonly.com",13],["novamovie.net",13],["novelpdf.xyz",13],["novelssites.com",[13,64]],["novelup.top",13],["nsfwr34.com",13],["nu6i-bg-net.com",13],["nudebabesin3d.com",13],["nukedfans.com",13],["nuoga.eu",13],["nzbstars.com",13],["o2tvseries.com",13],["ohjav.com",13],["ojearnovelas.com",13],["okanime.xyz",13],["olweb.tv",13],["on9.stream",13],["onepiece-mangaonline.com",13],["onifile.com",13],["onionstream.live",13],["onlinesaprevodom.net",13],["onlyfams.*",13],["onlyfullporn.video",13],["onplustv.live",13],["originporn.com",13],["ouo.*",13],["ovagames.com",13],["ovamusic.com",13],["packsporn.com",13],["pahaplayers.click",13],["palimas.org",13],["password69.com",13],["pastemytxt.com",13],["payskip.org",13],["pctfenix.*",[13,64]],["pctnew.*",[13,64]],["peeplink.in",13],["peliculas24.*",13],["peliculasmx.net",13],["pelisplus.*",13],["pervertgirlsvideos.com",13],["pervyvideos.com",13],["phim12h.com",13],["picdollar.com",13],["pickteenz.com",13],["picsxxxporn.com",13],["pinayscandalz.com",13],["pinkueiga.net",13],["piratebay.*",13],["piratefast.xyz",13],["piratehaven.xyz",13],["pirateiro.com",13],["pirlotvonline.org",13],["playtube.co.za",13],["plugintorrent.com",13],["plyjam.*",13],["plylive.*",13],["plyvdo.*",13],["pmvzone.com",13],["porndish.com",13],["pornez.net",13],["pornfetishbdsm.com",13],["pornfits.com",13],["pornhd720p.com",13],["pornhoarder.*",[13,233]],["pornobr.club",13],["pornobr.ninja",13],["pornodominicano.net",13],["pornofaps.com",13],["pornoflux.com",13],["pornotorrent.com.br",13],["pornredit.com",13],["pornstarsyfamosas.es",13],["pornstreams.co",13],["porntn.com",13],["pornxbit.com",13],["pornxday.com",13],["portaldasnovinhas.shop",13],["portugues-fcr.blogspot.com",13],["poscitesch.com",[13,64]],["poseyoung.com",13],["pover.org",13],["prbay.*",13],["projectfreetv.*",13],["proxybit.*",13],["proxyninja.org",13],["psarips.*",13],["pubfilmz.com",13],["publicsexamateurs.com",13],["punanihub.com",13],["putlocker5movies.org",13],["pxxbay.com",13],["r18.best",13],["racaty.*",13],["ragnaru.net",13],["rapbeh.net",13],["rapelust.com",13],["rapload.org",13],["read-onepiece.net",13],["remaxhd.*",13],["retro-fucking.com",13],["retrotv.org",13],["rintor.*",13],["rnbxclusive.*",13],["rnbxclusive0.*",13],["rnbxclusive1.*",13],["robaldowns.com",13],["rockdilla.com",13],["rojadirecta.*",13],["rojadirectaenvivo.*",13],["rojadirectatvenvivo.com",13],["rojitadirecta.blogspot.com",13],["romancetv.site",13],["rsoccerlink.site",13],["rugbystreams.*",13],["rule34.club",13],["rule34hentai.net",13],["rumahbokep-id.com",13],["sadisflix.*",13],["safego.cc",13],["safetxt.*",13],["sakurafile.com",13],["satoshi-win.xyz",13],["scat.gold",13],["scatfap.com",13],["scatkings.com",13],["scnlog.me",13],["scripts-webmasters.net",13],["serie-turche.com",13],["serijefilmovi.com",13],["sexcomics.me",13],["sexdicted.com",13],["sexgay18.com",13],["sexiezpix.com",13],["sexofilm.co",13],["sextgem.com",13],["sextubebbw.com",13],["sgpics.net",13],["shadowrangers.*",13],["shadowrangers.live",13],["shahee4u.cam",13],["shahi4u.*",13],["shahid4u1.*",13],["shahid4uu.*",13],["shahiid-anime.net",13],["shavetape.*",13],["shemale6.com",13],["shid4u.*",13],["shinden.pl",13],["short.es",13],["shortearn.*",13],["shorten.*",13],["shorttey.*",13],["shortzzy.*",13],["showmanga.blog.fc2.com",13],["shrt10.com",13],["shurt.pw",13],["sideplusleaks.net",13],["silverblog.tv",13],["silverpic.com",13],["sinhalasub.life",13],["sinsitio.site",13],["sinvida.me",13],["skidrowcpy.com",13],["skidrowfull.com",13],["skymovieshd.*",13],["slut.mom",13],["smallencode.me",13],["smoner.com",13],["smplace.com",13],["soccerinhd.com",[13,64]],["socceron.name",13],["socceronline.*",[13,64]],["softairbay.com",13],["softarchive.*",13],["sokobj.com",13],["songsio.com",13],["souexatasmais.com",13],["sportbar.live",13],["sports-stream.*",13],["sportstream1.cfd",13],["sporttuna.*",13],["srt.am",13],["srts.me",13],["sshhaa.*",13],["stapadblockuser.*",[13,76]],["stape.*",[13,76]],["stapewithadblock.*",13],["starmusiq.*",13],["stbemuiptv.com",13],["stockingfetishvideo.com",13],["strcloud.*",[13,76]],["stream.crichd.vip",13],["stream.lc",13],["stream25.xyz",13],["streamadblocker.*",[13,64,76]],["streamadblockplus.*",[13,76]],["streambee.to",13],["streamcdn.*",13],["streamcenter.pro",13],["streamers.watch",13],["streamgo.to",13],["streamhub.*",13],["streamkiste.tv",13],["streamoupload.xyz",13],["streamservicehd.click",13],["streamsport.*",13],["streamta.*",[13,76]],["streamtape.*",[13,76]],["streamtapeadblockuser.*",[13,76]],["streamvid.net",[13,23]],["strikeout.*",[13,66]],["strtape.*",[13,76]],["strtapeadblock.*",[13,76]],["strtapeadblocker.*",[13,76]],["strtapewithadblock.*",13],["strtpe.*",[13,76]],["subtitleporn.com",13],["subtitles.cam",13],["suicidepics.com",13],["supertelevisionhd.com",13],["supexfeeds.com",13],["swatchseries.*",13],["swiftload.io",13],["swipebreed.net",13],["swzz.xyz",13],["sxnaar.com",13],["tabooflix.*",13],["tabooporns.com",13],["taboosex.club",13],["tapeantiads.com",[13,76]],["tapeblocker.com",[13,76]],["tapenoads.com",[13,76]],["tapewithadblock.org",[13,76,258]],["teamos.xyz",13],["teen-wave.com",13],["teenporncrazy.com",13],["telegramgroups.xyz",13],["telenovelasweb.com",13],["tennisstreams.*",13],["tensei-shitara-slime-datta-ken.com",13],["tfp.is",13],["tgo-tv.co",[13,64]],["thaihotmodels.com",13],["theblueclit.com",13],["thebussybandit.com",13],["thedaddy.to",[13,212]],["theicongenerator.com",13],["thelastdisaster.vip",13],["themoviesflix.*",13],["thepiratebay.*",13],["thepiratebay0.org",13],["thepiratebay10.info",13],["thesexcloud.com",13],["thothub.today",13],["tightsexteens.com",13],["tmearn.*",13],["tojav.net",13],["tokyoblog.tv",13],["toonanime.*",13],["top16.net",13],["topvideosgay.com",13],["torlock.*",13],["tormalayalam.*",13],["torrage.info",13],["torrents.vip",13],["torrentz2eu.*",13],["torrsexvid.com",13],["tpb-proxy.xyz",13],["trannyteca.com",13],["trendytalker.com",13],["tumanga.net",13],["turbogvideos.com",13],["turbovid.me",13],["turkishseriestv.org",13],["turksub24.net",13],["tutele.sx",13],["tutelehd.*",13],["tvglobe.me",13],["tvpclive.com",13],["tvply.*",13],["tvs-widget.com",13],["tvseries.video",13],["u4m.*",13],["ucptt.com",13],["ufaucet.online",13],["ufcfight.online",13],["ufcstream.*",13],["ultrahorny.com",13],["ultraten.net",13],["unblocknow.*",13],["unblockweb.me",13],["underhentai.net",13],["uniqueten.net",13],["upbaam.com",13],["uploadbuzz.*",13],["upstream.to",13],["usagoals.*",13],["valeriabelen.com",13],["verdragonball.online",13],["vexmoviex.*",13],["vfxmed.com",13],["vidclouds.*",13],["video.az",13],["videostreaming.rocks",13],["videowood.tv",13],["vidlox.*",13],["vidorg.net",13],["vidtapes.com",13],["vidz7.com",13],["vikistream.com",13],["vikv.net",13],["vipboxtv.*",[13,64]],["vipleague.*",[13,236]],["virpe.cc",13],["visifilmai.org",13],["viveseries.com",13],["vladrustov.sx",13],["volokit2.com",[13,212]],["vstorrent.org",13],["w-hentai.com",13],["watch-series.*",13],["watchbrooklynnine-nine.com",13],["watchelementaryonline.com",13],["watchjavidol.com",13],["watchkobestreams.info",13],["watchlostonline.net",13],["watchmonkonline.com",13],["watchrulesofengagementonline.com",13],["watchseries.*",13],["watchthekingofqueens.com",13],["webcamrips.com",13],["wincest.xyz",13],["wolverdon.fun",13],["wordcounter.icu",13],["worldmovies.store",13],["worldstreams.click",13],["wpdeployit.com",13],["wqstreams.tk",13],["wwwsct.com",13],["xanimeporn.com",13],["xblog.tv",13],["xclusivejams.*",13],["xmoviesforyou.*",13],["xn--verseriesespaollatino-obc.online",13],["xn--xvideos-espaol-1nb.com",13],["xpornium.net",13],["xsober.com",13],["xvip.lat",13],["xxgasm.com",13],["xxvideoss.org",13],["xxx18.uno",13],["xxxdominicana.com",13],["xxxfree.watch",13],["xxxmax.net",13],["xxxwebdlxxx.top",13],["xxxxvideo.uno",13],["y2b.wiki",13],["yabai.si",13],["yadixv.com",13],["yayanimes.net",13],["yeshd.net",13],["yodbox.com",13],["youdbox.*",13],["youjax.com",13],["yourdailypornvideos.ws",13],["yourupload.com",13],["ytmp3eu.*",13],["yts-subs.*",13],["yts.*",13],["ytstv.me",13],["zerion.cc",13],["zerocoin.top",13],["zitss.xyz",13],["zooqle.*",13],["zpaste.net",13],["1337x.ninjaproxy1.com",13],["y2tube.pro",13],["freeshot.live",13],["fastreams.com",13],["redittsports.com",13],["sky-sports.store",13],["streamsoccer.site",13],["tntsports.store",13],["wowstreams.co",13],["zdsptv.com",13],["tuktukcinma.com",13],["dutchycorp.*",14],["faucet.ovh",14],["mmacore.tv",15],["nxbrew.net",15],["oko.sh",[16,44,45]],["variety.com",17],["gameskinny.com",17],["deadline.com",17],["mlive.com",[17,150,154]],["doujindesu.*",18],["atlasstudiousa.com",18],["51bonusrummy.in",[18,79]],["washingtonpost.com",19],["gosexpod.com",20],["sexo5k.com",21],["truyen-hentai.com",21],["theshedend.com",23],["zeroupload.com",23],["securenetsystems.net",23],["miniwebtool.com",23],["bchtechnologies.com",23],["eracast.cc",23],["flatai.org",23],["spiegel.de",24],["jacquieetmichel.net",25],["hausbau-forum.de",26],["althub.club",26],["kiemlua.com",26],["tea-coffee.net",27],["spatsify.com",27],["newedutopics.com",27],["getviralreach.in",27],["edukaroo.com",27],["funkeypagali.com",27],["careersides.com",27],["nayisahara.com",27],["wikifilmia.com",27],["infinityskull.com",27],["viewmyknowledge.com",27],["iisfvirtual.in",27],["starxinvestor.com",27],["jkssbalerts.com",27],["imagereviser.com",28],["labgame.io",[29,30]],["kenzo-flowertag.com",31],["mdn.lol",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["tremamnon.com",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["blog.cryptowidgets.net",33],["blog.insurancegold.in",33],["blog.wiki-topia.com",33],["blog.coinsvalue.net",33],["blog.cookinguide.net",33],["blog.freeoseocheck.com",33],["aylink.co",34],["sugarona.com",35],["nishankhatri.xyz",35],["cety.app",36],["exe-urls.com",36],["exego.app",36],["cutlink.net",36],["cutsy.net",36],["cutyurls.com",36],["cutty.app",36],["cutnet.net",36],["jixo.online",36],["tinys.click",37],["loan.creditsgoal.com",37],["rupyaworld.com",37],["vahantoday.com",37],["techawaaz.in",37],["loan.bgmi32bitapk.in",37],["diendancauduong.com",37],["formyanime.com",37],["gsm-solution.com",37],["h-donghua.com",37],["hindisubbedacademy.com",37],["mydverse.*",37],["ripexbooster.xyz",37],["serial4.com",37],["tutorgaming.com",37],["everydaytechvams.com",37],["dipsnp.com",37],["cccam4sat.com",37],["zeemoontv-24.blogspot.com",37],["stitichsports.com",37],["aiimgvlog.fun",38],["appsbull.com",39],["diudemy.com",39],["maqal360.com",39],["androjungle.com",39],["bookszone.in",39],["drakescans.com",39],["shortix.co",39],["makefreecallsonline.com",39],["msonglyrics.com",39],["app-sorteos.com",39],["bokugents.com",39],["client.pylexnodes.net",39],["btvplus.bg",39],["blog24.me",[40,41]],["coingraph.us",42],["impact24.us",42],["iconicblogger.com",43],["auto-crypto.click",43],["tvi.la",[44,45]],["iir.la",[44,45]],["tii.la",[44,45]],["ckk.ai",[44,45]],["oei.la",[44,45]],["lnbz.la",[44,45]],["oii.la",[44,45,66]],["tpi.li",[44,45]],["shrinke.*",46],["shrinkme.*",46],["smutty.com",46],["e-sushi.fr",46],["gayforfans.com",46],["freeadultcomix.com",46],["down.dataaps.com",46],["filmweb.pl",46],["livecamrips.*",46],["safetxt.net",46],["filespayouts.com",46],["atglinks.com",47],["kbconlinegame.com",48],["hamrojaagir.com",48],["odijob.com",48],["stfly.biz",49],["airevue.net",49],["atravan.net",49],["simana.online",50],["fooak.com",50],["joktop.com",50],["evernia.site",50],["falpus.com",50],["rfiql.com",51],["gujjukhabar.in",51],["smartfeecalculator.com",51],["djxmaza.in",51],["thecubexguide.com",51],["jytechs.in",51],["financacerta.com",52],["encurtads.net",52],["mastkhabre.com",53],["weshare.is",54],["alpin.de",55],["boersennews.de",55],["chefkoch.de",55],["chip.de",55],["clever-tanken.de",55],["desired.de",55],["donnerwetter.de",55],["fanfiktion.de",55],["focus.de",55],["formel1.de",55],["frustfrei-lernen.de",55],["gewinnspiele.tv",55],["giga.de",55],["gut-erklaert.de",55],["kino.de",55],["messen.de",55],["nickles.de",55],["nordbayern.de",55],["spielfilm.de",55],["teltarif.de",[55,56]],["unsere-helden.com",55],["weltfussball.at",55],["watson.de",55],["mactechnews.de",55],["sport1.de",55],["welt.de",55],["sport.de",55],["allthingsvegas.com",57],["100percentfedup.com",57],["beforeitsnews.com",57],["concomber.com",57],["conservativefiringline.com",57],["dailylol.com",57],["funnyand.com",57],["letocard.fr",57],["mamieastuce.com",57],["meilleurpronostic.fr",57],["patriotnationpress.com",57],["toptenz.net",57],["vitamiiin.com",57],["writerscafe.org",57],["populist.press",57],["dailytruthreport.com",57],["livinggospeldaily.com",57],["first-names-meanings.com",57],["welovetrump.com",57],["thehayride.com",57],["thelibertydaily.com",57],["thepoke.co.uk",57],["thepolitistick.com",57],["theblacksphere.net",57],["shark-tank.com",57],["naturalblaze.com",57],["greatamericanrepublic.com",57],["dailysurge.com",57],["truthlion.com",57],["flagandcross.com",57],["westword.com",57],["republicbrief.com",57],["freedomfirstnetwork.com",57],["phoenixnewtimes.com",57],["designbump.com",57],["clashdaily.com",57],["madworldnews.com",57],["reviveusa.com",57],["sonsoflibertymedia.com",57],["thedesigninspiration.com",57],["videogamesblogger.com",57],["protrumpnews.com",57],["thepalmierireport.com",57],["kresy.pl",57],["thepatriotjournal.com",57],["thegatewaypundit.com",57],["wltreport.com",57],["miaminewtimes.com",57],["politicalsignal.com",57],["rightwingnews.com",57],["bigleaguepolitics.com",57],["comicallyincorrect.com",57],["upornia.com",58],["pillowcase.su",59],["cine-calidad.*",60],["veryfreeporn.com",60],["theporngod.com",60],["asiangay.tv",61],["japangaysex.com",61],["nudeslegion.com",61],["besthdgayporn.com",62],["drivenime.com",62],["erothots1.com",62],["javup.org",62],["savefiles.com",62],["shemaleup.net",62],["transflix.net",62],["worthcrete.com",62],["hentaihere.com",63],["player.smashy.stream",63],["player.smashystream.com",63],["123movies.*",64],["123moviesla.*",64],["123movieweb.*",64],["2embed.*",64],["9xmovies.*",64],["adsh.cc",64],["adshort.*",64],["afilmyhouse.blogspot.com",64],["ak.sv",64],["allmovieshub.*",64],["animesultra.com",64],["api.webs.moe",64],["apkmody.io",64],["asianplay.*",64],["atishmkv.*",64],["attvideo.com",64],["backfirstwo.site",64],["bflix.*",64],["crazyblog.in",64],["cricstream.*",64],["crictime.*",64],["cuervotv.me",[64,78]],["divicast.com",64],["dlhd.so",64],["dood.*",[64,191]],["dooood.*",[64,191]],["embed.meomeo.pw",64],["extramovies.*",64],["faselhd.*",64],["faselhds.*",64],["filemoon.*",64],["filmeserialeonline.org",64],["filmy.*",64],["filmyhit.*",64],["filmywap.*",64],["flexyhit.com",64],["fmovies.*",64],["foreverwallpapers.com",64],["french-streams.cc",64],["fslinks.org",64],["gdplayer.*",64],["goku.*",64],["gomovies.*",64],["gowatchseries.*",64],["hdfungamezz.*",64],["hdtoday.to",64],["hinatasoul.com",64],["hindilinks4u.*",64],["hurawatch.*",[64,133]],["igg-games.com",64],["infinityscans.net",64],["jalshamoviezhd.*",64],["livecricket.*",64],["mangareader.to",64],["membed.net",64],["mgnetu.com",64],["mhdsport.*",64],["mkvcinemas.*",[64,189]],["movies2watch.*",64],["moviespapa.*",64],["mp3juice.info",64],["mp3juices.cc",64],["mp4moviez.*",64],["mydownloadtube.*",64],["myflixerz.to",64],["nowmetv.net",64],["nowsportstv.com",64],["nuroflix.*",64],["nxbrew.com",64],["o2tvseries.*",64],["o2tvseriesz.*",64],["oii.io",64],["paidshitforfree.com",64],["pepperlive.info",64],["pirlotv.*",64],["playertv.net",64],["poscitech.*",64],["primewire.*",64],["putlocker68.com",64],["redecanais.*",64],["roystream.com",64],["rssing.com",64],["s.to",64],["serienstream.*",64],["sflix.*",64],["shahed4u.*",64],["shaheed4u.*",64],["share.filesh.site",64],["sharkfish.xyz",64],["skidrowcodex.net",64],["smartermuver.com",64],["speedostream.*",64],["sportcast.*",64],["sports-stream.site",64],["sportskart.*",64],["stream4free.live",64],["streamingcommunity.*",[64,66,95]],["tamilarasan.*",64],["tamilfreemp3songs.*",64],["tamilmobilemovies.in",64],["tamilprinthd.*",64],["tapeadsenjoyer.com",[64,76]],["thewatchseries.live",64],["tnmusic.in",64],["torrentdosfilmes.*",64],["travelplanspro.com",64],["tubemate.*",64],["tusfiles.com",64],["tutlehd4.com",64],["twstalker.com",64],["uploadrar.*",64],["uqload.*",64],["vid-guard.com",64],["vidcloud9.*",64],["vido.*",64],["vidoo.*",64],["vidsaver.net",64],["vidspeeds.com",64],["viralitytoday.com",64],["voiranime.stream",64],["vudeo.*",64],["vumoo.*",64],["watchdoctorwhoonline.com",64],["watchomovies.*",[64,92]],["watchserie.online",64],["webhostingpost.com",64],["woxikon.in",64],["www-y2mate.com",64],["yesmovies.*",64],["ylink.bid",64],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",64],["kickassanime.*",65],["11xmovies.*",66],["buffshub.stream",66],["cinego.tv",66],["dokoembed.pw",66],["ev01.to",66],["fojik.site",66],["fstream365.com",66],["fzmovies.*",66],["linkz.*",66],["minoplres.xyz",66],["mostream.us",66],["moviedokan.*",66],["myflixer.*",66],["prmovies.*",66],["readcomiconline.li",66],["s3embtaku.pro",66],["sflix2.to",66],["sportshub.stream",66],["streamblasters.*",66],["topcinema.cam",66],["webxzplay.cfd",66],["zonatmo.com",66],["animesaturn.cx",66],["filecrypt.*",66],["hunterscomics.com",66],["aniwave.uk",66],["celebzcircle.com",67],["bi-girl.net",67],["ftuapps.*",67],["hentaiseason.com",67],["hoodtrendspredict.com",67],["marcialhub.xyz",67],["odiadance.com",67],["osteusfilmestuga.online",67],["ragnarokscanlation.opchapters.com",67],["sampledrive.org",67],["showflix.*",67],["swordalada.org",67],["tojimangas.com",67],["tvappapk.com",67],["twobluescans.com",[67,68]],["varnascan.xyz",67],["automobile-catalog.com",[69,70,75]],["motorbikecatalog.com",[69,70,75]],["topstarnews.net",69],["islamicfinder.org",69],["secure-signup.net",69],["dramabeans.com",69],["dropgame.jp",[69,75]],["manta.com",69],["tportal.hr",69],["tvtropes.org",69],["wouldurather.io",69],["convertcase.net",69],["interfootball.co.kr",70],["a-ha.io",70],["cboard.net",70],["jjang0u.com",70],["joongdo.co.kr",70],["viva100.com",70],["gamingdeputy.com",70],["thesaurus.net",70],["alle-tests.nl",70],["maketecheasier.com",[70,75]],["tweaksforgeeks.com",70],["m.inven.co.kr",70],["mlbpark.donga.com",70],["meconomynews.com",70],["brandbrief.co.kr",70],["motorgraph.com",70],["worldhistory.org",71],["bleepingcomputer.com",72],["pravda.com.ua",72],["ap7am.com",73],["cinema.com.my",73],["dolldivine.com",73],["giornalone.it",73],["iplocation.net",73],["jamaicaobserver.com",73],["jawapos.com",73],["jutarnji.hr",73],["kompasiana.com",73],["mediaindonesia.com",73],["slobodnadalmacija.hr",73],["upmedia.mg",73],["sourceforge.net",[74,75]],["alc.co.jp",75],["allthetests.com",75],["animanch.com",75],["aniroleplay.com",75],["apkmirror.com",[75,186]],["autoby.jp",75],["autofrage.net",75],["carscoops.com",75],["chanto.jp.net",75],["cinetrafic.fr",75],["cocokara-next.com",75],["computerfrage.net",75],["crosswordsolver.com",75],["cruciverba.it",75],["daily.co.jp",75],["dictionnaire.lerobert.com",75],["dnevno.hr",75],["drweil.com",75],["dziennik.pl",75],["forsal.pl",75],["freemcserver.net",75],["game8.jp",75],["gardeningsoul.com",75],["gazetaprawna.pl",75],["gigafile.nu",75],["globalrph.com",75],["golf-live.at",75],["heureka.cz",75],["horairesdouverture24.fr",75],["indiatimes.com",75],["infor.pl",75],["iza.ne.jp",75],["j-cast.com",75],["j-town.net",75],["jablickar.cz",75],["javatpoint.com",75],["kinmaweb.jp",75],["kobe-journal.com",75],["kreuzwortraetsel.de",75],["kurashiru.com",75],["kyoteibiyori.com",75],["lacuarta.com",75],["laleggepertutti.it",75],["livenewschat.eu",75],["malaymail.com",75],["mamastar.jp",75],["modhub.us",75],["motscroises.fr",75],["muragon.com",75],["nana-press.com",75],["niketalk.com",75],["nikkan-gendai.com",75],["oeffnungszeitenbuch.de",75],["onecall2ch.com",75],["oraridiapertura24.it",75],["oxfordlearnersdictionaries.com",75],["palabr.as",75],["persoenlich.com",75],["petitfute.com",75],["play-games.com",75],["powerpyx.com",75],["quefaire.be",75],["raetsel-hilfe.de",75],["ranking.net",75],["roleplayer.me",75],["rostercon.com",75],["samsungmagazine.eu",75],["sankei.com",75],["sanspo.com",75],["slashdot.org",75],["syosetu.com",75],["talkwithstranger.com",75],["the-crossword-solver.com",75],["thestockmarketwatch.com",75],["transparentcalifornia.com",75],["transparentnevada.com",75],["trilltrill.jp",75],["tvtv.ca",75],["tvtv.us",75],["ufret.jp",75],["verkaufsoffener-sonntag.com",75],["watchdocumentaries.com",75],["webdesignledger.com",75],["wetteronline.de",75],["wfmz.com",75],["winfuture.de",75],["word-grabber.com",75],["wort-suchen.de",75],["woxikon.*",75],["yugioh-starlight.com",75],["yutura.net",75],["zagreb.info",75],["zakzak.co.jp",75],["2chblog.jp",75],["2monkeys.jp",75],["46matome.net",75],["akb48glabo.com",75],["akb48matomemory.com",75],["alfalfalfa.com",75],["all-nationz.com",75],["anihatsu.com",75],["aqua2ch.net",75],["blog.esuteru.com",75],["blog.livedoor.jp",75],["blog.jp",75],["blogo.jp",75],["chaos2ch.com",75],["choco0202.work",75],["crx7601.com",75],["danseisama.com",75],["dareda.net",75],["digital-thread.com",75],["doorblog.jp",75],["exawarosu.net",75],["fgochaldeas.com",75],["football-2ch.com",75],["gekiyaku.com",75],["golog.jp",75],["hacchaka.net",75],["heartlife-matome.com",75],["liblo.jp",75],["fesoku.net",75],["fiveslot777.com",75],["gamejksokuhou.com",75],["girlsreport.net",75],["girlsvip-matome.com",75],["grasoku.com",75],["gundamlog.com",75],["honyaku-channel.net",75],["ikarishintou.com",75],["imas-cg.net",75],["imihu.net",75],["inutomo11.com",75],["itainews.com",75],["itaishinja.com",75],["jin115.com",75],["jisaka.com",75],["jnews1.com",75],["jumpsokuhou.com",75],["jyoseisama.com",75],["keyakizaka46matomemory.net",75],["kidan-m.com",75],["kijoden.com",75],["kijolariat.net",75],["kijolifehack.com",75],["kijomatomelog.com",75],["kijyokatu.com",75],["kijyomatome.com",75],["kijyomatome-ch.com",75],["kijyomita.com",75],["kirarafan.com",75],["kitimama-matome.net",75],["kitizawa.com",75],["konoyubitomare.jp",75],["kotaro269.com",75],["kyousoku.net",75],["ldblog.jp",75],["livedoor.biz",75],["livedoor.blog",75],["majikichi.com",75],["matacoco.com",75],["matomeblade.com",75],["matomelotte.com",75],["matometemitatta.com",75],["mojomojo-licarca.com",75],["morikinoko.com",75],["nandemo-uketori.com",75],["netatama.net",75],["news-buzz1.com",75],["news30over.com",75],["nmb48-mtm.com",75],["norisoku.com",75],["npb-news.com",75],["ocsoku.com",75],["okusama-kijyo.com",75],["onihimechan.com",75],["orusoku.com",75],["otakomu.jp",75],["otoko-honne.com",75],["oumaga-times.com",75],["outdoormatome.com",75],["pachinkopachisro.com",75],["paranormal-ch.com",75],["recosoku.com",75],["s2-log.com",75],["saikyo-jump.com",75],["shuraba-matome.com",75],["ske48matome.net",75],["squallchannel.com",75],["sukattojapan.com",75],["sumaburayasan.com",75],["usi32.com",75],["uwakich.com",75],["uwakitaiken.com",75],["vault76.info",75],["vipnews.jp",75],["vippers.jp",75],["vipsister23.com",75],["vtubernews.jp",75],["watarukiti.com",75],["world-fusigi.net",75],["zakuzaku911.com",75],["zch-vip.com",75],["advertisertape.com",76],["tapeadvertisement.com",76],["tapelovesads.org",76],["watchadsontape.com",76],["vosfemmes.com",77],["voyeurfrance.net",77],["bollyflix.*",78],["neymartv.net",78],["streamhd247.info",78],["samax63.lol",78],["hindimoviestv.com",78],["buzter.xyz",78],["valhallas.click",78],["aliezstream.pro",78],["daddy-stream.xyz",78],["daddylive1.*",78],["esportivos.*",78],["instream.pro",78],["mylivestream.pro",78],["poscitechs.*",78],["powerover.online",78],["sportea.link",78],["sportsurge.stream",78],["ufckhabib.com",78],["ustream.pro",78],["animeshqip.site",78],["apkship.shop",78],["buzter.pro",78],["enjoysports.bond",78],["filedot.to",78],["foreverquote.xyz",78],["hdstream.one",78],["kingstreamz.site",78],["live.fastsports.store",78],["livesnow.me",78],["livesports4u.pw",78],["masterpro.click",78],["nuxhallas.click",78],["papahd.info",78],["rgshows.me",78],["sportmargin.live",78],["sportmargin.online",78],["sportsloverz.xyz",78],["sportzlive.shop",78],["supertipzz.online",78],["totalfhdsport.xyz",78],["ultrastreamlinks.xyz",78],["usgate.xyz",78],["webmaal.cfd",78],["wizistreamz.xyz",78],["worldstreamz.shop",78],["g-porno.com",78],["g-streaming.com",78],["educ4m.com",78],["fromwatch.com",78],["visualnewshub.com",78],["bigwarp.*",78],["animeshqip.org",78],["uns.bio",78],["reshare.pm",78],["videograbber.cc",78],["affordwonder.net",78],["rahim-soft.com",79],["x-video.tube",79],["rubystm.com",79],["rubyvid.com",79],["rubyvidhub.com",79],["stmruby.com",79],["streamruby.com",79],["poophd.cc",79],["windowsreport.com",79],["fuckflix.click",79],["hyundaitucson.info",80],["exambd.net",81],["cgtips.org",82],["freewebcart.com",83],["freemagazines.top",83],["siamblockchain.com",83],["emuenzen.de",84],["kickass.*",85],["unblocked.id",87],["listendata.com",88],["7xm.xyz",88],["fastupload.io",88],["azmath.info",88],["wouterplanet.com",89],["androidacy.com",90],["4porn4.com",91],["bestpornflix.com",92],["freeroms.com",92],["andhrafriends.com",92],["723qrh1p.fun",92],["up4stream.com",92],["ups2up.fun",92],["98zero.com",93],["mediaset.es",93],["updatewallah.in",93],["hwbusters.com",93],["beatsnoop.com",94],["fetchpik.com",94],["hackerranksolution.in",94],["camsrip.com",94],["help.sakarnewz.com",94],["austiblox.net",96],["btcbunch.com",97],["teachoo.com",[98,99]],["mafiatown.pl",100],["bitcotasks.com",101],["hilites.today",102],["udvl.com",103],["www.chip.de",[104,105,106,107]],["topsporter.net",108],["sportshub.to",108],["streamcheck.link",109],["myanimelist.net",110],["unofficialtwrp.com",111],["codec.kyiv.ua",111],["kimcilonlyofc.com",111],["bitcosite.com",112],["bitzite.com",112],["teluguflix.*",113],["hacoos.com",114],["watchhentai.net",115],["hes-goals.io",115],["pkbiosfix.com",115],["casi3.xyz",115],["bondagevalley.cc",116],["zefoy.com",117],["mailgen.biz",118],["tempinbox.xyz",118],["vidello.net",119],["newscon.org",120],["yunjiema.top",120],["pcgeeks-games.com",120],["resizer.myct.jp",121],["gametohkenranbu.sakuraweb.com",122],["jisakuhibi.jp",123],["rank1-media.com",123],["lifematome.blog",124],["fm.sekkaku.net",125],["free-avx.jp",126],["dvdrev.com",127],["betweenjpandkr.blog",128],["nft-media.net",129],["ghacks.net",130],["leak.sx",131],["paste.bin.sx",131],["pornleaks.in",131],["truyentranhfull.net",132],["fcportables.com",132],["repack-games.com",132],["ibooks.to",132],["blog.tangwudi.com",132],["filecatchers.com",132],["babaktv.com",132],["actvid.*",133],["zoechip.com",133],["nohost.one",133],["vidbinge.com",133],["nectareousoverelate.com",135],["khoaiphim.com",136],["haafedk2.com",137],["fordownloader.com",137],["jovemnerd.com.br",138],["totalcsgo.com",139],["vivamax.asia",140],["manysex.com",141],["gaminginfos.com",142],["tinxahoivn.com",143],["automoto.it",144],["codelivly.com",145],["tchatche.com",146],["cryptoearns.com",146],["lordchannel.com",147],["client.falixnodes.net",148],["novelhall.com",149],["madeeveryday.com",150],["maidenhead-advertiser.co.uk",150],["mardomreport.net",150],["melangery.com",150],["milestomemories.com",150],["modernmom.com",150],["momtastic.com",150],["mostlymorgan.com",150],["motherwellmag.com",150],["muddybootsanddiamonds.com",150],["musicfeeds.com.au",150],["mylifefromhome.com",150],["nationalreview.com",150],["nordot.app",150],["oakvillenews.org",150],["observer.com",150],["ourlittlesliceofheaven.com",150],["palachinkablog.com",150],["patheos.com",150],["pinkonthecheek.com",150],["politicususa.com",150],["predic.ro",150],["puckermom.com",150],["qtoptens.com",150],["realgm.com",150],["reelmama.com",150],["robbreport.com",150],["royalmailchat.co.uk",150],["samchui.com",150],["sandrarose.com",150],["sherdog.com",150],["sidereel.com",150],["silive.com",150],["simpleflying.com",150],["sloughexpress.co.uk",150],["spacenews.com",150],["sportsgamblingpodcast.com",150],["spotofteadesigns.com",150],["stacysrandomthoughts.com",150],["ssnewstelegram.com",150],["superherohype.com",[150,154]],["tablelifeblog.com",150],["thebeautysection.com",150],["thecelticblog.com",150],["thecurvyfashionista.com",150],["thefashionspot.com",150],["thegamescabin.com",150],["thenerdyme.com",150],["thenonconsumeradvocate.com",150],["theprudentgarden.com",150],["thethings.com",150],["timesnews.net",150],["topspeed.com",150],["toyotaklub.org.pl",150],["travelingformiles.com",150],["tutsnode.org",150],["viralviralvideos.com",150],["wannacomewith.com",150],["wimp.com",[150,154]],["windsorexpress.co.uk",150],["woojr.com",150],["worldoftravelswithkids.com",150],["worldsurfleague.com",150],["abc17news.com",[150,153]],["adoredbyalex.com",150],["agrodigital.com",[150,153]],["al.com",[150,153]],["aliontherunblog.com",[150,153]],["allaboutthetea.com",[150,153]],["allmovie.com",[150,153]],["allmusic.com",[150,153]],["allthingsthrifty.com",[150,153]],["amessagewithabottle.com",[150,153]],["androidpolice.com",150],["antyradio.pl",150],["artforum.com",[150,153]],["artnews.com",[150,153]],["awkward.com",[150,153]],["awkwardmom.com",[150,153]],["bailiwickexpress.com",150],["barnsleychronicle.com",[150,154]],["becomingpeculiar.com",150],["bethcakes.com",[150,154]],["blogher.com",[150,154]],["bluegraygal.com",[150,154]],["briefeguru.de",[150,154]],["carmagazine.co.uk",150],["cattime.com",150],["cbr.com",150],["chaptercheats.com",[150,154]],["cleveland.com",[150,154]],["collider.com",150],["comingsoon.net",150],["commercialobserver.com",[150,154]],["competentedigitale.ro",[150,154]],["crafty.house",150],["dailyvoice.com",[150,154]],["decider.com",[150,154]],["didyouknowfacts.com",[150,154]],["dogtime.com",[150,154]],["dualshockers.com",150],["dustyoldthing.com",150],["faithhub.net",150],["femestella.com",[150,154]],["footwearnews.com",[150,154]],["freeconvert.com",[150,154]],["frogsandsnailsandpuppydogtail.com",[150,154]],["fsm-media.com",150],["funtasticlife.com",[150,154]],["fwmadebycarli.com",[150,154]],["gamerant.com",150],["gfinityesports.com",150],["givemesport.com",150],["gulflive.com",[150,154]],["helloflo.com",150],["homeglowdesign.com",[150,154]],["honeygirlsworld.com",[150,154]],["hotcars.com",150],["howtogeek.com",150],["insider-gaming.com",150],["insurancejournal.com",150],["jasminemaria.com",[150,154]],["kion546.com",[150,154]],["lehighvalleylive.com",[150,154]],["lettyskitchen.com",[150,154]],["lifeinleggings.com",[150,154]],["liveandletsfly.com",150],["lizzieinlace.com",[150,154]],["localnews8.com",[150,154]],["lonestarlive.com",[150,154]],["makeuseof.com",150],["masslive.com",[150,154,260]],["movieweb.com",150],["nj.com",[150,154]],["nothingbutnewcastle.com",[150,154]],["nsjonline.com",[150,154]],["oregonlive.com",[150,154]],["pagesix.com",[150,154,260]],["pennlive.com",[150,154,260]],["screenrant.com",150],["sheknows.com",[150,154]],["syracuse.com",[150,154,260]],["thegamer.com",150],["tvline.com",[150,154]],["cheatsheet.com",151],["pwinsider.com",151],["baeldung.com",151],["mensjournal.com",151],["c-span.org",152],["15min.lt",153],["247sports.com",[153,260]],["barcablaugranes.com",154],["betweenenglandandiowa.com",154],["bgr.com",154],["blazersedge.com",154],["blu-ray.com",154],["brobible.com",154],["cagesideseats.com",154],["cbsnews.com",[154,260]],["cbssports.com",[154,260]],["celiacandthebeast.com",154],["clickondetroit.com",154],["dailydot.com",154],["dailykos.com",154],["eater.com",154],["eldiariony.com",154],["fark.com",154],["free-power-point-templates.com",154],["golfdigest.com",154],["ibtimes.co.in",154],["imgur.com",154],["indiewire.com",[154,260]],["intouchweekly.com",154],["knowyourmeme.com",154],["last.fm",154],["lifeandstylemag.com",154],["mandatory.com",154],["naszemiasto.pl",154],["nationalpost.com",154],["nbcsports.com",154],["news.com.au",154],["ninersnation.com",154],["nypost.com",[154,260]],["playstationlifestyle.net",154],["rollingstone.com",154],["sbnation.com",154],["sneakernews.com",154],["sport-fm.gr",154],["stylecaster.com",154],["tastingtable.com",154],["thecw.com",154],["thedailymeal.com",154],["theflowspace.com",154],["themarysue.com",154],["tokfm.pl",154],["torontosun.com",154],["usmagazine.com",154],["wallup.net",154],["worldstar.com",154],["worldstarhiphop.com",154],["yourcountdown.to",154],["bagi.co.in",155],["keran.co",155],["biblestudytools.com",156],["christianheadlines.com",156],["ibelieve.com",156],["kuponigo.com",157],["inxxx.com",158],["bemyhole.com",158],["ipaspot.app",159],["embedwish.com",160],["filelions.live",160],["leakslove.net",160],["jenismac.com",161],["vxetable.cn",162],["nizarstream.com",163],["snapwordz.com",164],["toolxox.com",164],["rl6mans.com",164],["faqwiki.us",164],["donghuaworld.com",165],["letsdopuzzles.com",166],["rediff.com",167],["igay69.com",168],["kimcilonly.link",169],["dzapk.com",170],["darknessporn.com",171],["familyporner.com",171],["freepublicporn.com",171],["pisshamster.com",171],["punishworld.com",171],["xanimu.com",171],["pig69.com",172],["cosplay18.pics",172],["sexwebvideo.com",172],["sexwebvideo.net",172],["tainio-mania.online",173],["eroticmoviesonline.me",174],["teleclub.xyz",175],["ecamrips.com",176],["showcamrips.com",176],["tucinehd.com",177],["9animetv.to",178],["qiwi.gg",179],["jornadaperfecta.com",180],["loseart.com",181],["sousou-no-frieren.com",182],["unite-guide.com",183],["thebullspen.com",184],["receitasdaora.online",185],["streambucket.net",187],["nontongo.win",187],["torrentdownload.*",189],["cineb.rs",189],["123animehub.cc",189],["tukipasti.com",189],["cataz.to",189],["netmovies.to",189],["hiraethtranslation.com",190],["all3do.com",191],["do7go.com",191],["d0000d.com",191],["d000d.com",191],["d0o0d.com",191],["do0od.com",191],["doods.pro",191],["doodstream.*",191],["dooodster.com",191],["ds2play.com",191],["ds2video.com",191],["vidply.com",191],["xfreehd.com",192],["freethesaurus.com",193],["thefreedictionary.com",193],["dexterclearance.com",194],["x86.co.kr",195],["onlyfaucet.com",196],["x-x-x.tube",197],["fdownloader.net",198],["thehackernews.com",199],["mielec.pl",200],["treasl.com",201],["mrbenne.com",202],["cnpics.org",203],["ovabee.com",203],["porn4f.com",203],["cnxx.me",203],["ai18.pics",203],["sportsonline.si",204],["fiuxy2.co",205],["animeunity.to",206],["tokopedia.com",207],["remixsearch.net",208],["remixsearch.es",208],["onlineweb.tools",208],["sharing.wtf",208],["2024tv.ru",209],["modrinth.com",210],["curseforge.com",210],["xnxxcom.xyz",211],["sportsurge.net",212],["joyousplay.xyz",212],["quest4play.xyz",[212,214]],["generalpill.net",212],["moneycontrol.com",213],["cookiewebplay.xyz",214],["ilovetoplay.xyz",214],["streamcaster.live",214],["weblivehdplay.ru",214],["oaaxpgp3.xyz",215],["m9.news",216],["callofwar.com",217],["secondhandsongs.com",218],["nudezzers.org",219],["send.cm",220],["send.now",220],["3rooodnews.net",221],["xxxbfvideo.net",222],["filmy4wap.co.in",223],["filmy4waps.org",223],["gameshop4u.com",224],["regenzi.site",224],["historicaerials.com",225],["handirect.fr",226],["animefenix.tv",227],["fsiblog3.club",228],["kamababa.desi",228],["sat-sharing.com",228],["getfiles.co.uk",229],["genelify.com",230],["dhtpre.com",231],["xbaaz.com",232],["lineupexperts.com",234],["fearmp4.ru",235],["fbstreams.*",236],["m.shuhaige.net",237],["streamingnow.mov",238],["thesciencetoday.com",239],["sportnews.to",239],["ghbrisk.com",241],["iplayerhls.com",241],["bacasitus.com",242],["katoikos.world",242],["abstream.to",243],["pawastreams.pro",244],["rebajagratis.com",245],["tv.latinlucha.es",245],["fetcheveryone.com",246],["reviewdiv.com",247],["laurelberninteriors.com",248],["godlike.com",249],["godlikeproductions.com",249],["bestreamsports.org",250],["xmalay1.net",251],["botcomics.com",252],["cefirates.com",252],["chandlerorchards.com",252],["comicleaks.com",252],["marketdata.app",252],["monumentmetals.com",252],["tapmyback.com",252],["ping.gg",252],["revistaferramental.com.br",252],["hawpar.com",252],["alpacafinance.org",[252,253]],["nookgaming.com",252],["enkeleksamen.no",252],["kvest.ee",252],["creatordrop.com",252],["panpots.com",252],["cybernetman.com",252],["bitdomain.biz",252],["gerardbosch.xyz",252],["fort-shop.kiev.ua",252],["accuretawealth.com",252],["resourceya.com",252],["tracktheta.com",252],["camberlion.com",252],["replai.io",252],["trybawaryjny.pl",252],["segops.madisonspecs.com",252],["stresshelden-coaching.de",252],["controlconceptsusa.com",252],["ryaktive.com",252],["tip.etip-staging.etip.io",252],["tt.live",253],["future-fortune.com",253],["adventuretix.com",253],["bolighub.dk",253],["panprices.com",254],["intercity.technology",254],["freelancer.taxmachine.be",254],["adria.gg",254],["fjlaboratories.com",254],["emanualonline.com",254],["abhijith.page",254],["helpmonks.com",254],["dataunlocker.com",255],["proboards.com",256],["winclassic.net",256],["farmersjournal.ie",257],["pandadoc.com",259],["abema.tv",261]]);
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
