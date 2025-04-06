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
const argsList = [["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","getPopUrl"],["script","/popMagic|pop1stp/"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script",".xyz/script/"],["script","adrecover.com"],["script","html-load.com"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","Brave"],["script","await"],["script","Object.keys(window.adngin).length"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","\"\").split(\",\")[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"/"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/$.*open/"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","delete window"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","\"data-adm-url\""],["script","NREUM"]];
const hostnamesMap = new Map([["web.de",0],["skidrowreloaded.com",[1,12]],["wawacity.*",1],["720pstream.*",[1,71]],["embedsports.me",[1,75]],["embedstream.me",[1,11,12,71,75]],["jumbtv.com",[1,75]],["reliabletv.me",[1,75]],["topembed.pw",[1,73,213]],["crackstreamer.net",1],["methstreamer.com",1],["rnbastreams.com",1],["vidsrc.*",[1,11,71]],["1stream.eu",1],["4kwebplay.xyz",1],["anime4i.vip",1],["antennasports.ru",1],["buffsports.me",[1,71]],["buffstreams.app",1],["claplivehdplay.ru",[1,213]],["cracksports.me",[1,11]],["euro2024direct.ru",1],["ext.to",1],["extreme-down.*",1],["eztv.tf",1],["eztvx.to",1],["flix-wave.*",1],["hikaritv.xyz",1],["kenitv.me",[1,11,12]],["lewblivehdplay.ru",[1,213]],["mixdrop.*",[1,12]],["mlbbite.net",1],["mlbstreams.ai",1],["qatarstreams.me",[1,11]],["qqwebplay.xyz",[1,213]],["sanet.*",1],["soccerworldcup.me",[1,11]],["sportshd.*",1],["topstreams.info",1],["totalsportek.to",1],["viwlivehdplay.ru",1],["vidco.pro",[1,71]],["moviepilot.de",[2,54]],["userupload.*",3],["cinedesi.in",3],["intro-hd.net",3],["monacomatin.mc",3],["nodo313.net",3],["hesgoal-tv.io",3],["hesgoal-vip.io",3],["earn.punjabworks.com",3],["mahajobwala.in",3],["solewe.com",3],["panel.play.hosting",3],["pahe.*",[4,12,73]],["soap2day.*",4],["yts.mx",5],["magesypro.com",6],["pinsystem.co.uk",6],["elrellano.com",6],["tinyppt.com",6],["veganab.co",6],["camdigest.com",6],["learnmany.in",6],["amanguides.com",[6,34]],["highkeyfinance.com",[6,34]],["appkamods.com",6],["techacode.com",6],["djqunjab.in",6],["downfile.site",6],["expertvn.com",6],["trangchu.news",6],["3dmodelshare.org",6],["nulleb.com",6],["asiaon.top",6],["reset-scans.*",6],["coursesghar.com",6],["thecustomrom.com",6],["snlookup.com",6],["bingotingo.com",6],["ghior.com",6],["3dmili.com",6],["karanpc.com",6],["plc247.com",6],["apkdelisi.net",6],["freepasses.org",6],["poplinks.*",[6,38]],["tomarnarede.pt",6],["basketballbuzz.ca",6],["dribbblegraphics.com",6],["kemiox.com",6],["teksnologi.com",6],["bharathwick.com",6],["descargaspcpro.net",6],["dx-tv.com",6],["rt3dmodels.com",6],["plc4me.com",6],["blisseyhusbands.com",6],["mhdsports.*",6],["mhdsportstv.*",6],["mhdtvsports.*",6],["mhdtvworld.*",6],["mhdtvmax.*",6],["mhdstream.*",6],["madaradex.org",6],["trigonevo.com",6],["franceprefecture.fr",6],["jazbaat.in",6],["aipebel.com",6],["audiotools.blog",6],["embdproxy.xyz",6],["hqq.*",7],["waaw.*",7],["pixhost.*",8],["vipbox.*",9],["germancarforum.com",10],["cybercityhelp.in",10],["innateblogger.com",10],["omeuemprego.online",10],["viprow.*",[11,12,71]],["bluemediadownload.*",11],["bluemediafile.*",11],["bluemedialink.*",11],["bluemediastorage.*",11],["bluemediaurls.*",11],["urlbluemedia.*",11],["streamnoads.com",[11,12,62,71]],["bowfile.com",11],["cloudvideo.tv",[11,71]],["cloudvideotv.*",[11,71]],["coloredmanga.com",11],["exeo.app",11],["hiphopa.net",[11,12]],["megaup.net",11],["olympicstreams.co",[11,71]],["tv247.us",[11,12]],["uploadhaven.com",11],["userscloud.com",[11,71]],["mlbbox.me",11],["vikingf1le.us.to",11],["neodrive.xyz",11],["mdfx9dc8n.net",12],["mdzsmutpcvykb.net",12],["mixdrop21.net",12],["mixdropjmk.pw",12],["123-movies.*",12],["123movieshd.*",12],["123movieshub.*",12],["123moviesme.*",12],["1337x.*",[12,187]],["141jav.com",12],["1bit.space",12],["1bitspace.com",12],["1stream.*",12],["1tamilmv.*",12],["2ddl.*",12],["2umovies.*",12],["345movies.com",12],["3dporndude.com",12],["3hiidude.*",12],["4archive.org",12],["4horlover.com",12],["4stream.*",12],["560pmovie.com",12],["5movies.*",12],["7hitmovies.*",12],["85tube.com",12],["85videos.com",12],["9xmovie.*",12],["aagmaal.*",[12,71]],["acefile.co",12],["actusports.eu",12],["adblockeronstape.*",[12,62]],["adblockeronstreamtape.*",12],["adblockplustape.*",[12,62]],["adblockstreamtape.*",[12,62]],["adblockstrtape.*",[12,62]],["adblockstrtech.*",[12,62]],["adblocktape.*",[12,62]],["adclickersbot.com",12],["adcorto.*",12],["adricami.com",12],["adslink.pw",12],["adultstvlive.com",12],["adz7short.space",12],["aeblender.com",12],["ahdafnews.blogspot.com",12],["ak47sports.com",12],["akuma.moe",12],["alexsports.*",12],["alexsportss.*",12],["alexsportz.*",12],["allplayer.tk",12],["amateurblog.tv",12],["androidadult.com",[12,239]],["anhsexjav.xyz",12],["anidl.org",12],["anime-loads.org",12],["animeblkom.net",12],["animefire.plus",12],["animelek.me",12],["animepahe.*",12],["animesanka.*",12],["animespire.net",12],["animestotais.xyz",12],["animeyt.es",12],["animixplay.*",12],["aniplay.*",12],["anroll.net",12],["antiadtape.*",[12,62]],["anymoviess.xyz",12],["aotonline.org",12],["asenshu.com",12],["asialiveaction.com",12],["asianclipdedhd.net",12],["asianclub.*",12],["ask4movie.*",12],["askim-bg.com",12],["asumsikedaishop.com",12],["atomixhq.*",[12,71]],["atomohd.*",12],["avcrempie.com",12],["avseesee.com",12],["gettapeads.com",[12,62]],["backfirstwo.com",12],["bajarjuegospcgratis.com",12],["balkanportal.net",12],["balkanteka.net",12],["bdnewszh.com",[12,71]],["beinmatch.*",[12,21]],["belowporn.com",12],["bestgirlsexy.com",12],["bestnhl.com",12],["bestporn4free.com",12],["bestporncomix.com",12],["bet36.es",12],["bgwp.cc",[12,17]],["bhaai.*",12],["bikinitryon.net",12],["birdurls.com",12],["bitsearch.to",12],["blackcockadventure.com",12],["blackcockchurch.org",12],["blackporncrazy.com",12],["blizzboygames.net",12],["blizzpaste.com",12],["blkom.com",12],["blog-peliculas.com",12],["blogtrabalhista.com",12],["blurayufr.*",12],["bobsvagene.club",12],["bolly4umovies.click",12],["bonusharian.pro",12],["brilian-news.id",12],["brupload.net",12],["bucitana.com",12],["buffstreams.*",12],["camchickscaps.com",12],["camgirlcum.com",12],["camgirls.casa",12],["canalesportivo.*",12],["cashurl.in",12],["castingx.net",12],["ccurl.net",[12,71]],["celebrity-leaks.net",12],["cgpelis.net",12],["charexempire.com",12],["choosingnothing.com",12],["clasico.tv",12],["clickndownload.*",12],["clicknupload.*",12],["clik.pw",12],["coin-free.com",[12,31]],["coins100s.fun",12],["comicsmanics.com",12],["compucalitv.com",12],["coolcast2.com",12],["cosplaytab.com",12],["countylocalnews.com",12],["cpmlink.net",12],["crackstreamshd.click",12],["crespomods.com",12],["crisanimex.com",12],["crunchyscan.fr",12],["cuevana3.fan",12],["cuevana3hd.com",12],["cumception.com",12],["cutpaid.com",12],["daddylive.*",[12,71,211]],["daddylivehd.*",[12,71]],["dailyuploads.net",12],["datawav.club",12],["daughtertraining.com",12],["ddrmovies.*",12],["deepgoretube.site",12],["deltabit.co",12],["deporte-libre.top",12],["depvailon.com",12],["derleta.com",12],["desiremovies.*",12],["desivdo.com",12],["desixx.net",12],["detikkebumen.com",12],["deutschepornos.me",12],["devlib.*",12],["diasoft.xyz",12],["directupload.net",12],["diskusscan.com",12],["divxtotal.*",12],["divxtotal1.*",12],["dixva.com",12],["dlhd.*",12],["doctormalay.com",12],["dofusports.xyz",12],["dogemate.com",12],["doods.cam",12],["doodskin.lat",12],["downloadrips.com",12],["downvod.com",12],["dphunters.mom",12],["dragontranslation.com",12],["dvdfullestrenos.com",12],["dvdplay.*",[12,71]],["ebookbb.com",12],["ebookhunter.net",12],["egyanime.com",12],["egygost.com",12],["egyshare.cc",12],["ekasiwap.com",12],["electro-torrent.pl",12],["elil.cc",12],["elixx.*",12],["enjoy4k.*",12],["eplayer.click",12],["erovoice.us",12],["eroxxx.us",12],["estrenosdoramas.net",12],["estrenosflix.*",12],["estrenosflux.*",12],["estrenosgo.*",12],["everia.club",12],["everythinginherenet.blogspot.com",12],["extrafreetv.com",12],["extremotvplay.com",12],["f1stream.*",12],["fapinporn.com",12],["fapptime.com",12],["fashionblog.tv",12],["fastreams.live",12],["faucethero.com",12],["fbstream.*",12],["fembed.com",12],["femdom-joi.com",12],["file4go.*",12],["fileone.tv",12],["film1k.com",12],["filmeonline2023.net",12],["filmesonlinex.org",12],["filmesonlinexhd.biz",[12,71]],["filmovitica.com",12],["filmymaza.blogspot.com",12],["filmyzilla.*",[12,71]],["filthy.family",12],["findav.*",12],["findporn.*",12],["fixfinder.click",12],["flixmaza.*",12],["flizmovies.*",12],["flostreams.xyz",12],["flyfaucet.com",12],["footyhunter.lol",12],["forex-trnd.com",12],["forumchat.club",12],["forumlovers.club",12],["freemoviesonline.biz",12],["freeomovie.co.in",12],["freeomovie.to",12],["freeporncomic.net",12],["freepornhdonlinegay.com",12],["freeproxy.io",12],["freetvsports.*",12],["freeuse.me",12],["freeusexporn.com",12],["fsharetv.cc",12],["fsicomics.com",12],["fullymaza.*",12],["g3g.*",12],["galinhasamurai.com",12],["gamepcfull.com",12],["gameronix.com",12],["gamesfullx.com",12],["gameshdlive.net",12],["gamesmountain.com",12],["gamesrepacks.com",12],["gamingguru.fr",12],["gamovideo.com",12],["garota.cf",12],["gaydelicious.com",12],["gaypornhot.com",12],["gaypornmasters.com",12],["gaysex69.net",12],["gemstreams.com",12],["get-to.link",12],["girlscanner.org",12],["giurgiuveanul.ro",12],["gledajcrtace.xyz",12],["gocast2.com",12],["gomo.to",12],["gostosa.cf",12],["gotxx.*",12],["grantorrent.*",12],["gtlink.co",12],["gwiazdypornosow.pl",12],["haho.moe",12],["hatsukimanga.com",12],["hayhd.net",12],["hdmoviesfair.*",[12,71]],["hdmoviesflix.*",12],["hdsaprevodom.com",12],["hdstreamss.club",12],["hentais.tube",12],["hentaistream.co",12],["hentaitk.net",12],["hentaitube.online",12],["hentaiworld.tv",12],["hesgoal.tv",12],["hexupload.net",12],["hhkungfu.tv",12],["highlanderhelp.com",12],["hiidudemoviez.*",12],["hindimean.com",12],["hindimovies.to",[12,71]],["hiperdex.com",12],["hispasexy.org",12],["hitprn.com",12],["hoca4u.com",12],["hollymoviehd.cc",12],["hoodsite.com",12],["hopepaste.download",12],["hornylips.com",12],["hotgranny.live",12],["hotmama.live",12],["hqcelebcorner.net",12],["huren.best",12],["hwnaturkya.com",[12,71]],["hxfile.co",[12,71]],["igfap.com",12],["iklandb.com",12],["illink.net",12],["imgkings.com",12],["imgsen.*",12],["imgsex.xyz",12],["imgsto.*",12],["imx.to",12],["incest.*",12],["incestflix.*",12],["influencersgonewild.org",12],["infosgj.free.fr",12],["investnewsbrazil.com",12],["itdmusics.com",12],["itopmusic.*",12],["itsuseful.site",12],["itunesfre.com",12],["iwatchfriendsonline.net",[12,132]],["jackstreams.com",12],["jatimupdate24.com",12],["jav-fun.cc",12],["jav-noni.cc",12],["jav-scvp.com",12],["javcl.com",12],["javf.net",12],["javhay.net",12],["javhoho.com",12],["javhun.com",12],["javleak.com",12],["javmost.*",12],["javporn.best",12],["javsek.net",12],["javsex.to",12],["javtiful.com",[12,14]],["jimdofree.com",12],["jiofiles.org",12],["jorpetz.com",12],["jp-films.com",12],["jpop80ss3.blogspot.com",12],["jpopsingles.eu",[12,189]],["kantotflix.net",12],["kantotinyo.com",12],["kaoskrew.org",12],["kaplog.com",12],["keeplinks.*",12],["keepvid.*",12],["keralahd.*",12],["keralatvbox.com",12],["khatrimazaful.*",12],["khatrimazafull.*",[12,65]],["kickassanimes.io",12],["kimochi.info",12],["kimochi.tv",12],["kinemania.tv",12],["kissasian.*",12],["konstantinova.net",12],["koora-online.live",12],["kunmanga.com",12],["kutmoney.com",12],["kwithsub.com",12],["lat69.me",12],["latinblog.tv",12],["latinomegahd.net",12],["leechall.*",12],["leechpremium.link",12],["legendas.dev",12],["legendei.net",12],["lightdlmovies.blogspot.com",12],["lighterlegend.com",12],["linclik.com",12],["linkebr.com",12],["linkrex.net",12],["linkshorts.*",12],["lulu.st",12],["lulustream.com",[12,73]],["luluvdo.com",12],["manga-oni.com",12],["mangaboat.com",12],["mangagenki.me",12],["mangahere.onl",12],["mangaweb.xyz",12],["mangoporn.net",12],["mangovideo.*",12],["manhwahentai.me",12],["masahub.com",12],["masahub.net",12],["masaporn.*",12],["maturegrannyfuck.com",12],["mdy48tn97.com",12],["mediapemersatubangsa.com",12],["mega-mkv.com",12],["megapastes.com",12],["megapornpics.com",12],["messitv.net",12],["meusanimes.net",12],["milfmoza.com",12],["milfzr.com",12],["millionscast.com",12],["mimaletamusical.blogspot.com",12],["miniurl.*",12],["mirrorace.*",12],["mitly.us",12],["mixdroop.*",12],["mkv-pastes.com",12],["mkvcage.*",12],["mlbstream.*",12],["mlsbd.*",12],["mmsbee.*",12],["monaskuliner.ac.id",12],["moredesi.com",12],["motogpstream.*",12],["movgotv.net",12],["movi.pk",12],["movieplex.*",12],["movierulzlink.*",12],["movies123.*",12],["moviesflix.*",12],["moviesmeta.*",12],["moviessources.*",12],["moviesverse.*",12],["movieswbb.com",12],["moviewatch.com.pk",12],["moviezwaphd.*",12],["mp4upload.com",12],["mrskin.live",12],["mrunblock.*",12],["multicanaistv.com",12],["mundowuxia.com",12],["myeasymusic.ir",12],["myonvideo.com",12],["myyouporn.com",12],["narutoget.info",12],["naughtypiss.com",12],["nbastream.*",12],["nerdiess.com",12],["new-fs.eu",12],["newmovierulz.*",12],["newtorrentgame.com",12],["nflstream.*",12],["nflstreams.me",12],["nhlstream.*",12],["niaomea.me",[12,71]],["nicekkk.com",12],["nicesss.com",12],["nlegs.com",12],["noblocktape.*",[12,62]],["nocensor.*",12],["nolive.me",[12,71]],["notformembersonly.com",12],["novamovie.net",12],["novelpdf.xyz",12],["novelssites.com",[12,71]],["novelup.top",12],["nsfwr34.com",12],["nu6i-bg-net.com",12],["nudebabesin3d.com",12],["nukedfans.com",12],["nuoga.eu",12],["nzbstars.com",12],["o2tvseries.com",12],["ohjav.com",12],["ojearnovelas.com",12],["okanime.xyz",12],["olweb.tv",12],["on9.stream",12],["onepiece-mangaonline.com",12],["onifile.com",12],["onionstream.live",12],["onlinesaprevodom.net",12],["onlyfams.*",12],["onlyfullporn.video",12],["onplustv.live",12],["originporn.com",12],["ouo.*",12],["ovagames.com",12],["ovamusic.com",12],["packsporn.com",12],["pahaplayers.click",12],["palimas.org",12],["password69.com",12],["pastemytxt.com",12],["payskip.org",12],["pctfenix.*",[12,71]],["pctnew.*",[12,71]],["peeplink.in",12],["peliculas24.*",12],["peliculasmx.net",12],["pelisplus.*",12],["pervertgirlsvideos.com",12],["pervyvideos.com",12],["phim12h.com",12],["picdollar.com",12],["pickteenz.com",12],["picsxxxporn.com",12],["pinayscandalz.com",12],["pinkueiga.net",12],["piratebay.*",12],["piratefast.xyz",12],["piratehaven.xyz",12],["pirateiro.com",12],["pirlotvonline.org",12],["playtube.co.za",12],["plugintorrent.com",12],["plyjam.*",12],["plylive.*",12],["plyvdo.*",12],["pmvzone.com",12],["porndish.com",12],["pornez.net",12],["pornfetishbdsm.com",12],["pornfits.com",12],["pornhd720p.com",12],["pornhoarder.*",[12,232]],["pornobr.club",12],["pornobr.ninja",12],["pornodominicano.net",12],["pornofaps.com",12],["pornoflux.com",12],["pornotorrent.com.br",12],["pornredit.com",12],["pornstarsyfamosas.es",12],["pornstreams.co",12],["porntn.com",12],["pornxbit.com",12],["pornxday.com",12],["portaldasnovinhas.shop",12],["portugues-fcr.blogspot.com",12],["poscitesch.com",[12,71]],["poseyoung.com",12],["pover.org",12],["prbay.*",12],["projectfreetv.*",12],["proxybit.*",12],["proxyninja.org",12],["psarips.*",12],["pubfilmz.com",12],["publicsexamateurs.com",12],["punanihub.com",12],["putlocker5movies.org",12],["pxxbay.com",12],["r18.best",12],["racaty.*",12],["ragnaru.net",12],["rapbeh.net",12],["rapelust.com",12],["rapload.org",12],["read-onepiece.net",12],["remaxhd.*",12],["retro-fucking.com",12],["retrotv.org",12],["rintor.*",12],["rnbxclusive.*",12],["rnbxclusive0.*",12],["rnbxclusive1.*",12],["robaldowns.com",12],["rockdilla.com",12],["rojadirecta.*",12],["rojadirectaenvivo.*",12],["rojadirectatvenvivo.com",12],["rojitadirecta.blogspot.com",12],["romancetv.site",12],["rsoccerlink.site",12],["rugbystreams.*",12],["rule34.club",12],["rule34hentai.net",12],["rumahbokep-id.com",12],["sadisflix.*",12],["safego.cc",12],["safetxt.*",12],["sakurafile.com",12],["satoshi-win.xyz",12],["scat.gold",12],["scatfap.com",12],["scatkings.com",12],["scnlog.me",12],["scripts-webmasters.net",12],["serie-turche.com",12],["serijefilmovi.com",12],["sexcomics.me",12],["sexdicted.com",12],["sexgay18.com",12],["sexofilm.co",12],["sextgem.com",12],["sextubebbw.com",12],["sgpics.net",12],["shadowrangers.*",12],["shadowrangers.live",12],["shahee4u.cam",12],["shahi4u.*",12],["shahid4u1.*",12],["shahid4uu.*",12],["shahiid-anime.net",12],["shavetape.*",12],["shemale6.com",12],["shid4u.*",12],["shinden.pl",12],["short.es",12],["shortearn.*",12],["shorten.*",12],["shorttey.*",12],["shortzzy.*",12],["showmanga.blog.fc2.com",12],["shrt10.com",12],["shurt.pw",12],["sideplusleaks.net",12],["silverblog.tv",12],["silverpic.com",12],["sinhalasub.life",12],["sinsitio.site",12],["sinvida.me",12],["skidrowcpy.com",12],["skidrowfull.com",12],["skymovieshd.*",12],["slut.mom",12],["smallencode.me",12],["smoner.com",12],["smplace.com",12],["soccerinhd.com",[12,71]],["socceron.name",12],["socceronline.*",[12,71]],["softairbay.com",12],["softarchive.*",12],["sokobj.com",12],["songsio.com",12],["souexatasmais.com",12],["sportbar.live",12],["sports-stream.*",12],["sportstream1.cfd",12],["sporttuna.*",12],["srt.am",12],["srts.me",12],["sshhaa.*",12],["stapadblockuser.*",[12,62]],["stape.*",[12,62]],["stapewithadblock.*",12],["starmusiq.*",12],["stbemuiptv.com",12],["stockingfetishvideo.com",12],["strcloud.*",[12,62]],["stream.crichd.vip",12],["stream.lc",12],["stream25.xyz",12],["streamadblocker.*",[12,62,71]],["streamadblockplus.*",[12,62]],["streambee.to",12],["streamcdn.*",12],["streamcenter.pro",12],["streamers.watch",12],["streamgo.to",12],["streamhub.*",12],["streamkiste.tv",12],["streamoupload.xyz",12],["streamservicehd.click",12],["streamsport.*",12],["streamta.*",[12,62]],["streamtape.*",[12,62]],["streamtapeadblockuser.*",[12,62]],["streamvid.net",[12,22]],["strikeout.*",[12,73]],["strtape.*",[12,62]],["strtapeadblock.*",[12,62]],["strtapeadblocker.*",[12,62]],["strtapewithadblock.*",12],["strtpe.*",[12,62]],["subtitleporn.com",12],["subtitles.cam",12],["suicidepics.com",12],["supertelevisionhd.com",12],["supexfeeds.com",12],["swatchseries.*",12],["swiftload.io",12],["swipebreed.net",12],["swzz.xyz",12],["sxnaar.com",12],["tabooflix.*",12],["tabooporns.com",12],["taboosex.club",12],["tapeantiads.com",[12,62]],["tapeblocker.com",[12,62]],["tapenoads.com",[12,62]],["tapewithadblock.org",[12,62,256]],["teamos.xyz",12],["teen-wave.com",12],["teenporncrazy.com",12],["telegramgroups.xyz",12],["telenovelasweb.com",12],["tennisstreams.*",12],["tensei-shitara-slime-datta-ken.com",12],["tfp.is",12],["tgo-tv.co",[12,71]],["thaihotmodels.com",12],["theblueclit.com",12],["thebussybandit.com",12],["thedaddy.to",[12,211]],["theicongenerator.com",12],["thelastdisaster.vip",12],["themoviesflix.*",12],["thepiratebay.*",12],["thepiratebay0.org",12],["thepiratebay10.info",12],["thesexcloud.com",12],["thothub.today",12],["tightsexteens.com",12],["tmearn.*",12],["tojav.net",12],["tokyoblog.tv",12],["toonanime.*",12],["top16.net",12],["topvideosgay.com",12],["torlock.*",12],["tormalayalam.*",12],["torrage.info",12],["torrents.vip",12],["torrentz2eu.*",12],["torrsexvid.com",12],["tpb-proxy.xyz",12],["trannyteca.com",12],["trendytalker.com",12],["tumanga.net",12],["turbogvideos.com",12],["turbovid.me",12],["turkishseriestv.org",12],["turksub24.net",12],["tutele.sx",12],["tutelehd.*",12],["tvglobe.me",12],["tvpclive.com",12],["tvply.*",12],["tvs-widget.com",12],["tvseries.video",12],["u4m.*",12],["ucptt.com",12],["ufaucet.online",12],["ufcfight.online",12],["ufcstream.*",12],["ultrahorny.com",12],["ultraten.net",12],["unblocknow.*",12],["unblockweb.me",12],["underhentai.net",12],["uniqueten.net",12],["upbaam.com",12],["uploadbuzz.*",12],["upstream.to",12],["usagoals.*",12],["valeriabelen.com",12],["verdragonball.online",12],["vexmoviex.*",12],["vfxmed.com",12],["vidclouds.*",12],["video.az",12],["videostreaming.rocks",12],["videowood.tv",12],["vidlox.*",12],["vidorg.net",12],["vidtapes.com",12],["vidz7.com",12],["vikistream.com",12],["vikv.net",12],["vipboxtv.*",[12,71]],["vipleague.*",[12,235]],["virpe.cc",12],["visifilmai.org",12],["viveseries.com",12],["vladrustov.sx",12],["volokit2.com",[12,211]],["vstorrent.org",12],["w-hentai.com",12],["watch-series.*",12],["watchbrooklynnine-nine.com",12],["watchelementaryonline.com",12],["watchjavidol.com",12],["watchkobestreams.info",12],["watchlostonline.net",12],["watchmonkonline.com",12],["watchrulesofengagementonline.com",12],["watchseries.*",12],["watchthekingofqueens.com",12],["webcamrips.com",12],["wincest.xyz",12],["wolverdon.fun",12],["wordcounter.icu",12],["worldmovies.store",12],["worldstreams.click",12],["wpdeployit.com",12],["wqstreams.tk",12],["wwwsct.com",12],["xanimeporn.com",12],["xblog.tv",12],["xclusivejams.*",12],["xmoviesforyou.*",12],["xn--verseriesespaollatino-obc.online",12],["xn--xvideos-espaol-1nb.com",12],["xpornium.net",12],["xsober.com",12],["xvip.lat",12],["xxgasm.com",12],["xxvideoss.org",12],["xxx18.uno",12],["xxxdominicana.com",12],["xxxfree.watch",12],["xxxmax.net",12],["xxxwebdlxxx.top",12],["xxxxvideo.uno",12],["y2b.wiki",12],["yabai.si",12],["yadixv.com",12],["yayanimes.net",12],["yeshd.net",12],["yodbox.com",12],["youdbox.*",12],["youjax.com",12],["yourdailypornvideos.ws",12],["yourupload.com",12],["ytmp3eu.*",12],["yts-subs.*",12],["yts.*",12],["ytstv.me",12],["zerion.cc",12],["zerocoin.top",12],["zitss.xyz",12],["zooqle.*",12],["zpaste.net",12],["1337x.ninjaproxy1.com",12],["y2tube.pro",12],["freeshot.live",12],["fastreams.com",12],["redittsports.com",12],["sky-sports.store",12],["streamsoccer.site",12],["tntsports.store",12],["wowstreams.co",12],["zdsptv.com",12],["tuktukcinma.com",12],["dutchycorp.*",13],["faucet.ovh",13],["mmacore.tv",14],["nxbrew.net",14],["oko.sh",[15,43,44]],["variety.com",16],["gameskinny.com",16],["deadline.com",16],["mlive.com",[16,148,152]],["doujindesu.*",17],["atlasstudiousa.com",17],["51bonusrummy.in",[17,65]],["washingtonpost.com",18],["gosexpod.com",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",22],["zeroupload.com",22],["securenetsystems.net",22],["miniwebtool.com",22],["bchtechnologies.com",22],["eracast.cc",22],["flatai.org",22],["spiegel.de",23],["jacquieetmichel.net",24],["hausbau-forum.de",25],["althub.club",25],["kiemlua.com",25],["tea-coffee.net",26],["spatsify.com",26],["newedutopics.com",26],["getviralreach.in",26],["edukaroo.com",26],["funkeypagali.com",26],["careersides.com",26],["nayisahara.com",26],["wikifilmia.com",26],["infinityskull.com",26],["viewmyknowledge.com",26],["iisfvirtual.in",26],["starxinvestor.com",26],["jkssbalerts.com",26],["imagereviser.com",27],["labgame.io",[28,29]],["kenzo-flowertag.com",30],["mdn.lol",30],["btcbitco.in",31],["btcsatoshi.net",31],["cempakajaya.com",31],["crypto4yu.com",31],["gainl.ink",31],["manofadan.com",31],["readbitcoin.org",31],["wiour.com",31],["tremamnon.com",31],["bitsmagic.fun",31],["ourcoincash.xyz",31],["blog.cryptowidgets.net",32],["blog.insurancegold.in",32],["blog.wiki-topia.com",32],["blog.coinsvalue.net",32],["blog.cookinguide.net",32],["blog.freeoseocheck.com",32],["aylink.co",33],["sugarona.com",34],["nishankhatri.xyz",34],["cety.app",35],["exe-urls.com",35],["exego.app",35],["cutlink.net",35],["cutsy.net",35],["cutyurls.com",35],["cutty.app",35],["cutnet.net",35],["jixo.online",35],["tinys.click",36],["diendancauduong.com",36],["formyanime.com",36],["gsm-solution.com",36],["h-donghua.com",36],["hindisubbedacademy.com",36],["mydverse.*",36],["ripexbooster.xyz",36],["serial4.com",36],["tutorgaming.com",36],["everydaytechvams.com",36],["dipsnp.com",36],["cccam4sat.com",36],["zeemoontv-24.blogspot.com",36],["stitichsports.com",36],["aiimgvlog.fun",37],["appsbull.com",38],["diudemy.com",38],["maqal360.com",38],["mphealth.online",38],["makefreecallsonline.com",38],["androjungle.com",38],["bookszone.in",38],["drakescans.com",38],["shortix.co",38],["msonglyrics.com",38],["app-sorteos.com",38],["bokugents.com",38],["client.pylexnodes.net",38],["btvplus.bg",38],["blog24.me",[39,40]],["coingraph.us",41],["impact24.us",41],["iconicblogger.com",42],["auto-crypto.click",42],["tvi.la",[43,44]],["iir.la",[43,44]],["tii.la",[43,44]],["ckk.ai",[43,44]],["oei.la",[43,44]],["lnbz.la",[43,44]],["oii.la",[43,44,73]],["tpi.li",[43,44]],["shrinke.*",45],["shrinkme.*",45],["smutty.com",45],["e-sushi.fr",45],["freeadultcomix.com",45],["down.dataaps.com",45],["filmweb.pl",45],["livecamrips.*",45],["safetxt.net",45],["filespayouts.com",45],["atglinks.com",46],["kbconlinegame.com",47],["hamrojaagir.com",47],["odijob.com",47],["stfly.biz",48],["airevue.net",48],["atravan.net",48],["simana.online",49],["fooak.com",49],["joktop.com",49],["evernia.site",49],["falpus.com",49],["rfiql.com",50],["gujjukhabar.in",50],["smartfeecalculator.com",50],["djxmaza.in",50],["thecubexguide.com",50],["jytechs.in",50],["financacerta.com",51],["encurtads.net",51],["mastkhabre.com",52],["weshare.is",53],["alpin.de",54],["boersennews.de",54],["chefkoch.de",54],["chip.de",54],["clever-tanken.de",54],["desired.de",54],["donnerwetter.de",54],["fanfiktion.de",54],["focus.de",54],["formel1.de",54],["frustfrei-lernen.de",54],["gewinnspiele.tv",54],["giga.de",54],["gut-erklaert.de",54],["kino.de",54],["messen.de",54],["nickles.de",54],["nordbayern.de",54],["spielfilm.de",54],["teltarif.de",[54,55]],["unsere-helden.com",54],["weltfussball.at",54],["watson.de",54],["mactechnews.de",54],["sport1.de",54],["welt.de",54],["sport.de",54],["allthingsvegas.com",56],["100percentfedup.com",56],["beforeitsnews.com",56],["concomber.com",56],["conservativebrief.com",56],["conservativefiringline.com",56],["dailylol.com",56],["funnyand.com",56],["letocard.fr",56],["mamieastuce.com",56],["meilleurpronostic.fr",56],["patriotnationpress.com",56],["toptenz.net",56],["vitamiiin.com",56],["writerscafe.org",56],["populist.press",56],["dailytruthreport.com",56],["livinggospeldaily.com",56],["first-names-meanings.com",56],["welovetrump.com",56],["thehayride.com",56],["thelibertydaily.com",56],["thepoke.co.uk",56],["thepolitistick.com",56],["theblacksphere.net",56],["shark-tank.com",56],["naturalblaze.com",56],["greatamericanrepublic.com",56],["dailysurge.com",56],["truthlion.com",56],["flagandcross.com",56],["westword.com",56],["republicbrief.com",56],["freedomfirstnetwork.com",56],["phoenixnewtimes.com",56],["designbump.com",56],["clashdaily.com",56],["madworldnews.com",56],["reviveusa.com",56],["sonsoflibertymedia.com",56],["thedesigninspiration.com",56],["videogamesblogger.com",56],["protrumpnews.com",56],["thepalmierireport.com",56],["kresy.pl",56],["thepatriotjournal.com",56],["gellerreport.com",56],["thegatewaypundit.com",56],["wltreport.com",56],["miaminewtimes.com",56],["politicalsignal.com",56],["rightwingnews.com",56],["bigleaguepolitics.com",56],["comicallyincorrect.com",56],["upornia.com",57],["pillowcase.su",58],["cine-calidad.*",59],["veryfreeporn.com",59],["theporngod.com",59],["asiangay.tv",60],["japangaysex.com",60],["besthdgayporn.com",61],["drivenime.com",61],["erothots1.com",61],["javup.org",61],["savefiles.com",61],["shemaleup.net",61],["transflix.net",61],["worthcrete.com",61],["advertisertape.com",62],["tapeadsenjoyer.com",[62,71]],["tapeadvertisement.com",62],["tapelovesads.org",62],["watchadsontape.com",62],["vosfemmes.com",63],["voyeurfrance.net",63],["bollyflix.*",64],["neymartv.net",64],["streamhd247.info",64],["samax63.lol",64],["hindimoviestv.com",64],["buzter.xyz",64],["valhallas.click",64],["cuervotv.me",[64,71]],["aliezstream.pro",64],["daddy-stream.xyz",64],["daddylive1.*",64],["esportivos.*",64],["instream.pro",64],["mylivestream.pro",64],["poscitechs.*",64],["powerover.online",64],["sportea.link",64],["sportsurge.stream",64],["ufckhabib.com",64],["ustream.pro",64],["animeshqip.site",64],["apkship.shop",64],["buzter.pro",64],["enjoysports.bond",64],["filedot.to",64],["foreverquote.xyz",64],["hdstream.one",64],["kingstreamz.site",64],["live.fastsports.store",64],["livesnow.me",64],["livesports4u.pw",64],["masterpro.click",64],["nuxhallas.click",64],["papahd.info",64],["rgshows.me",64],["sportmargin.live",64],["sportmargin.online",64],["sportsloverz.xyz",64],["sportzlive.shop",64],["supertipzz.online",64],["totalfhdsport.xyz",64],["ultrastreamlinks.xyz",64],["usgate.xyz",64],["webmaal.cfd",64],["wizistreamz.xyz",64],["worldstreamz.shop",64],["g-porno.com",64],["g-streaming.com",64],["educ4m.com",64],["fromwatch.com",64],["visualnewshub.com",64],["bigwarp.*",64],["animeshqip.org",64],["uns.bio",64],["reshare.pm",64],["videograbber.cc",64],["rahim-soft.com",65],["nekopoi.*",65],["x-video.tube",65],["rubystm.com",65],["rubyvid.com",65],["streamruby.com",65],["poophd.cc",65],["windowsreport.com",65],["fuckflix.click",65],["hyundaitucson.info",66],["exambd.net",67],["cgtips.org",68],["freewebcart.com",69],["freemagazines.top",69],["siamblockchain.com",69],["emuenzen.de",70],["123movies.*",71],["123moviesla.*",71],["123movieweb.*",71],["2embed.*",71],["9xmovies.*",71],["adsh.cc",71],["adshort.*",71],["afilmyhouse.blogspot.com",71],["ak.sv",71],["allmovieshub.*",71],["animesultra.com",71],["api.webs.moe",71],["apkmody.io",71],["asianplay.*",71],["atishmkv.*",71],["attvideo.com",71],["backfirstwo.site",71],["bflix.*",71],["crazyblog.in",71],["cricstream.*",71],["crictime.*",71],["divicast.com",71],["dlhd.so",71],["dood.*",[71,190]],["dooood.*",[71,190]],["embed.meomeo.pw",71],["extramovies.*",71],["faselhd.*",71],["faselhds.*",71],["filemoon.*",71],["filmeserialeonline.org",71],["filmy.*",71],["filmyhit.*",71],["filmywap.*",71],["flexyhit.com",71],["fmovies.*",71],["foreverwallpapers.com",71],["french-streams.cc",71],["fslinks.org",71],["gdplayer.*",71],["goku.*",71],["gomovies.*",71],["gowatchseries.*",71],["hdfungamezz.*",71],["hdtoday.to",71],["hinatasoul.com",71],["hindilinks4u.*",71],["hurawatch.*",71],["igg-games.com",71],["infinityscans.net",71],["jalshamoviezhd.*",71],["livecricket.*",71],["mangareader.to",71],["membed.net",71],["mgnetu.com",71],["mhdsport.*",71],["mkvcinemas.*",[71,188]],["movies2watch.*",71],["moviespapa.*",71],["mp3juice.info",71],["mp3juices.cc",71],["mp4moviez.*",71],["mydownloadtube.*",71],["myflixerz.to",71],["nowmetv.net",71],["nowsportstv.com",71],["nuroflix.*",71],["nxbrew.com",71],["o2tvseries.*",71],["o2tvseriesz.*",71],["oii.io",71],["paidshitforfree.com",71],["pepperlive.info",71],["pirlotv.*",71],["playertv.net",71],["poscitech.*",71],["primewire.*",71],["putlocker68.com",71],["redecanais.*",71],["roystream.com",71],["rssing.com",71],["s.to",71],["serienstream.*",71],["sflix.*",71],["shahed4u.*",71],["shaheed4u.*",71],["share.filesh.site",71],["sharkfish.xyz",71],["skidrowcodex.net",71],["smartermuver.com",71],["speedostream.*",71],["sportcast.*",71],["sports-stream.site",71],["sportskart.*",71],["stream4free.live",71],["streamingcommunity.*",[71,73,84]],["tamilarasan.*",71],["tamilfreemp3songs.*",71],["tamilmobilemovies.in",71],["tamilprinthd.*",71],["thewatchseries.live",71],["tnmusic.in",71],["torrentdosfilmes.*",71],["travelplanspro.com",71],["tubemate.*",71],["tusfiles.com",71],["tutlehd4.com",71],["twstalker.com",71],["uploadrar.*",71],["uqload.*",71],["vid-guard.com",71],["vidcloud9.*",71],["vido.*",71],["vidoo.*",71],["vidsaver.net",71],["vidspeeds.com",71],["viralitytoday.com",71],["voiranime.stream",71],["vudeo.*",71],["vumoo.*",71],["watchdoctorwhoonline.com",71],["watchomovies.*",[71,81]],["watchserie.online",71],["webhostingpost.com",71],["woxikon.in",71],["www-y2mate.com",71],["yesmovies.*",71],["ylink.bid",71],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",71],["kickassanime.*",72],["11xmovies.*",73],["buffshub.stream",73],["cinego.tv",73],["ev01.to",73],["fstream365.com",73],["fzmovies.*",73],["linkz.*",73],["minoplres.xyz",73],["mostream.us",73],["myflixer.*",73],["prmovies.*",73],["readcomiconline.li",73],["s3embtaku.pro",73],["sflix2.to",73],["sportshub.stream",73],["streamblasters.*",73],["topcinema.cam",73],["zonatmo.com",73],["animesaturn.cx",73],["filecrypt.*",73],["hunterscomics.com",73],["aniwave.uk",73],["kickass.*",74],["unblocked.id",76],["listendata.com",77],["7xm.xyz",77],["fastupload.io",77],["azmath.info",77],["wouterplanet.com",78],["androidacy.com",79],["4porn4.com",80],["bestpornflix.com",81],["freeroms.com",81],["andhrafriends.com",81],["723qrh1p.fun",81],["98zero.com",82],["mediaset.es",82],["updatewallah.in",82],["hwbusters.com",82],["beatsnoop.com",83],["fetchpik.com",83],["hackerranksolution.in",83],["camsrip.com",83],["help.sakarnewz.com",83],["austiblox.net",85],["btcbunch.com",86],["teachoo.com",[87,88]],["automobile-catalog.com",[89,90,95]],["motorbikecatalog.com",[89,90,95]],["topstarnews.net",89],["islamicfinder.org",89],["secure-signup.net",89],["dramabeans.com",89],["dropgame.jp",[89,95]],["manta.com",89],["tportal.hr",89],["tvtropes.org",89],["wouldurather.io",89],["convertcase.net",89],["interfootball.co.kr",90],["a-ha.io",90],["cboard.net",90],["jjang0u.com",90],["joongdo.co.kr",90],["viva100.com",90],["gamingdeputy.com",90],["thesaurus.net",90],["alle-tests.nl",90],["maketecheasier.com",[90,95]],["tweaksforgeeks.com",90],["m.inven.co.kr",90],["mlbpark.donga.com",90],["meconomynews.com",90],["brandbrief.co.kr",90],["motorgraph.com",90],["worldhistory.org",91],["bleepingcomputer.com",92],["lovelive-petitsoku.com",92],["pravda.com.ua",92],["mariowiki.com",93],["ap7am.com",94],["cinema.com.my",94],["dolldivine.com",94],["giornalone.it",94],["iplocation.net",94],["jamaicaobserver.com",94],["jawapos.com",94],["jutarnji.hr",94],["kompasiana.com",94],["mediaindonesia.com",94],["nmplus.hk",94],["slobodnadalmacija.hr",94],["upmedia.mg",94],["allthetests.com",95],["animanch.com",95],["aniroleplay.com",95],["apkmirror.com",[95,184]],["autoby.jp",95],["autofrage.net",95],["carscoops.com",95],["chanto.jp.net",95],["cinetrafic.fr",95],["cocokara-next.com",95],["computerfrage.net",95],["crosswordsolver.com",95],["cruciverba.it",95],["daily.co.jp",95],["dictionnaire.lerobert.com",95],["dnevno.hr",95],["drweil.com",95],["dziennik.pl",95],["forsal.pl",95],["freemcserver.net",95],["game8.jp",95],["gardeningsoul.com",95],["gazetaprawna.pl",95],["globalrph.com",95],["golf-live.at",95],["heureka.cz",95],["horairesdouverture24.fr",95],["indiatimes.com",95],["infor.pl",95],["iza.ne.jp",95],["j-cast.com",95],["j-town.net",95],["jablickar.cz",95],["javatpoint.com",95],["kinmaweb.jp",95],["kreuzwortraetsel.de",95],["kurashiru.com",95],["kyoteibiyori.com",95],["lacuarta.com",95],["laleggepertutti.it",95],["livenewschat.eu",95],["malaymail.com",95],["mamastar.jp",95],["mirrored.to",95],["modhub.us",95],["motscroises.fr",95],["nana-press.com",95],["nikkan-gendai.com",95],["nyitvatartas24.hu",95],["oeffnungszeitenbuch.de",95],["onecall2ch.com",95],["oraridiapertura24.it",95],["palabr.as",95],["persoenlich.com",95],["petitfute.com",95],["play-games.com",95],["powerpyx.com",95],["quefaire.be",95],["raetsel-hilfe.de",95],["ranking.net",95],["roleplayer.me",95],["rostercon.com",95],["samsungmagazine.eu",95],["slashdot.org",95],["sourceforge.net",95],["syosetu.com",95],["talkwithstranger.com",95],["the-crossword-solver.com",95],["thestockmarketwatch.com",95],["transparentcalifornia.com",95],["transparentnevada.com",95],["trilltrill.jp",95],["tvtv.ca",95],["tvtv.us",95],["ufret.jp",95],["verkaufsoffener-sonntag.com",95],["watchdocumentaries.com",95],["webdesignledger.com",95],["wetteronline.de",95],["wfmz.com",95],["winfuture.de",95],["word-grabber.com",95],["wort-suchen.de",95],["woxikon.*",95],["yugioh-starlight.com",95],["yutura.net",95],["zagreb.info",95],["2chblog.jp",95],["2monkeys.jp",95],["46matome.net",95],["akb48glabo.com",95],["akb48matomemory.com",95],["alfalfalfa.com",95],["all-nationz.com",95],["anihatsu.com",95],["aqua2ch.net",95],["blog.esuteru.com",95],["blog.livedoor.jp",95],["blog.jp",95],["blogo.jp",95],["chaos2ch.com",95],["choco0202.work",95],["crx7601.com",95],["danseisama.com",95],["dareda.net",95],["digital-thread.com",95],["doorblog.jp",95],["exawarosu.net",95],["fgochaldeas.com",95],["football-2ch.com",95],["gekiyaku.com",95],["golog.jp",95],["hacchaka.net",95],["heartlife-matome.com",95],["liblo.jp",95],["fesoku.net",95],["fiveslot777.com",95],["gamejksokuhou.com",95],["girlsreport.net",95],["girlsvip-matome.com",95],["grasoku.com",95],["gundamlog.com",95],["honyaku-channel.net",95],["ikarishintou.com",95],["imas-cg.net",95],["imihu.net",95],["inutomo11.com",95],["itainews.com",95],["itaishinja.com",95],["jin115.com",95],["jisaka.com",95],["jnews1.com",95],["jumpsokuhou.com",95],["jyoseisama.com",95],["keyakizaka46matomemory.net",95],["kidan-m.com",95],["kijoden.com",95],["kijolariat.net",95],["kijolifehack.com",95],["kijomatomelog.com",95],["kijyokatu.com",95],["kijyomatome.com",95],["kijyomatome-ch.com",95],["kijyomita.com",95],["kirarafan.com",95],["kitimama-matome.net",95],["kitizawa.com",95],["konoyubitomare.jp",95],["kotaro269.com",95],["kyousoku.net",95],["ldblog.jp",95],["livedoor.biz",95],["livedoor.blog",95],["majikichi.com",95],["matacoco.com",95],["matomeblade.com",95],["matomelotte.com",95],["matometemitatta.com",95],["mojomojo-licarca.com",95],["morikinoko.com",95],["nandemo-uketori.com",95],["netatama.net",95],["news-buzz1.com",95],["news30over.com",95],["nmb48-mtm.com",95],["norisoku.com",95],["npb-news.com",95],["ocsoku.com",95],["okusama-kijyo.com",95],["onihimechan.com",95],["orusoku.com",95],["otakomu.jp",95],["otoko-honne.com",95],["oumaga-times.com",95],["outdoormatome.com",95],["pachinkopachisro.com",95],["paranormal-ch.com",95],["recosoku.com",95],["s2-log.com",95],["saikyo-jump.com",95],["shuraba-matome.com",95],["ske48matome.net",95],["squallchannel.com",95],["sukattojapan.com",95],["sumaburayasan.com",95],["usi32.com",95],["uwakich.com",95],["uwakitaiken.com",95],["vault76.info",95],["vipnews.jp",95],["vippers.jp",95],["vipsister23.com",95],["vtubernews.jp",95],["watarukiti.com",95],["world-fusigi.net",95],["zakuzaku911.com",95],["zch-vip.com",95],["mafiatown.pl",96],["bitcotasks.com",97],["hilites.today",98],["udvl.com",99],["www.chip.de",[100,101,102,103]],["topsporter.net",104],["sportshub.to",104],["streamcheck.link",105],["myanimelist.net",106],["unofficialtwrp.com",107],["codec.kyiv.ua",107],["kimcilonlyofc.com",107],["bitcosite.com",108],["bitzite.com",108],["celebzcircle.com",109],["bi-girl.net",109],["ftuapps.*",109],["hentaiseason.com",109],["hoodtrendspredict.com",109],["marcialhub.xyz",109],["odiadance.com",109],["osteusfilmestuga.online",109],["ragnarokscanlation.opchapters.com",109],["sampledrive.org",109],["showflix.*",109],["swordalada.org",109],["tojimangas.com",109],["tvappapk.com",109],["twobluescans.com",[109,110]],["varnascan.xyz",109],["teluguflix.*",111],["hacoos.com",112],["watchhentai.net",113],["hes-goals.io",113],["pkbiosfix.com",113],["casi3.xyz",113],["bondagevalley.cc",114],["zefoy.com",115],["mailgen.biz",116],["tempinbox.xyz",116],["vidello.net",117],["newscon.org",118],["yunjiema.top",118],["pcgeeks-games.com",118],["resizer.myct.jp",119],["gametohkenranbu.sakuraweb.com",120],["jisakuhibi.jp",121],["rank1-media.com",121],["lifematome.blog",122],["fm.sekkaku.net",123],["free-avx.jp",124],["dvdrev.com",125],["betweenjpandkr.blog",126],["nft-media.net",127],["ghacks.net",128],["leak.sx",129],["paste.bin.sx",129],["pornleaks.in",129],["truyentranhfull.net",130],["fcportables.com",130],["repack-games.com",130],["ibooks.to",130],["blog.tangwudi.com",130],["filecatchers.com",130],["actvid.*",131],["zoechip.com",131],["nohost.one",131],["vidbinge.com",131],["nectareousoverelate.com",133],["khoaiphim.com",134],["haafedk2.com",135],["fordownloader.com",135],["jovemnerd.com.br",136],["totalcsgo.com",137],["vivamax.asia",138],["manysex.com",139],["gaminginfos.com",140],["tinxahoivn.com",141],["automoto.it",142],["codelivly.com",143],["tchatche.com",144],["cryptoearns.com",144],["lordchannel.com",145],["client.falixnodes.net",146],["novelhall.com",147],["madeeveryday.com",148],["maidenhead-advertiser.co.uk",148],["mardomreport.net",148],["melangery.com",148],["milestomemories.com",148],["modernmom.com",148],["momtastic.com",148],["mostlymorgan.com",148],["motherwellmag.com",148],["muddybootsanddiamonds.com",148],["musicfeeds.com.au",148],["mylifefromhome.com",148],["nationalreview.com",148],["nordot.app",148],["oakvillenews.org",148],["observer.com",148],["ourlittlesliceofheaven.com",148],["palachinkablog.com",148],["patheos.com",148],["pinkonthecheek.com",148],["politicususa.com",148],["predic.ro",148],["puckermom.com",148],["qtoptens.com",148],["realgm.com",148],["reelmama.com",148],["robbreport.com",148],["royalmailchat.co.uk",148],["samchui.com",148],["sandrarose.com",148],["sherdog.com",148],["sidereel.com",148],["silive.com",148],["simpleflying.com",148],["sloughexpress.co.uk",148],["spacenews.com",148],["sportsgamblingpodcast.com",148],["spotofteadesigns.com",148],["stacysrandomthoughts.com",148],["ssnewstelegram.com",148],["superherohype.com",[148,152]],["tablelifeblog.com",148],["thebeautysection.com",148],["thecelticblog.com",148],["thecurvyfashionista.com",148],["thefashionspot.com",148],["thegamescabin.com",148],["thenerdyme.com",148],["thenonconsumeradvocate.com",148],["theprudentgarden.com",148],["thethings.com",148],["timesnews.net",148],["topspeed.com",148],["toyotaklub.org.pl",148],["travelingformiles.com",148],["tutsnode.org",148],["viralviralvideos.com",148],["wannacomewith.com",148],["wimp.com",[148,152]],["windsorexpress.co.uk",148],["woojr.com",148],["worldoftravelswithkids.com",148],["worldsurfleague.com",148],["abc17news.com",[148,151]],["adoredbyalex.com",148],["agrodigital.com",[148,151]],["al.com",[148,151]],["aliontherunblog.com",[148,151]],["allaboutthetea.com",[148,151]],["allmovie.com",[148,151]],["allmusic.com",[148,151]],["allthingsthrifty.com",[148,151]],["amessagewithabottle.com",[148,151]],["androidpolice.com",148],["antyradio.pl",148],["artforum.com",[148,151]],["artnews.com",[148,151]],["awkward.com",[148,151]],["awkwardmom.com",[148,151]],["bailiwickexpress.com",148],["barnsleychronicle.com",[148,152]],["becomingpeculiar.com",148],["bethcakes.com",[148,152]],["blogher.com",[148,152]],["bluegraygal.com",[148,152]],["briefeguru.de",[148,152]],["carmagazine.co.uk",148],["cattime.com",148],["cbr.com",148],["chaptercheats.com",[148,152]],["cleveland.com",[148,152]],["collider.com",148],["comingsoon.net",148],["commercialobserver.com",[148,152]],["competentedigitale.ro",[148,152]],["crafty.house",148],["dailyvoice.com",[148,152]],["decider.com",[148,152]],["didyouknowfacts.com",[148,152]],["dogtime.com",[148,152]],["dualshockers.com",148],["dustyoldthing.com",148],["faithhub.net",148],["femestella.com",[148,152]],["footwearnews.com",[148,152]],["freeconvert.com",[148,152]],["frogsandsnailsandpuppydogtail.com",[148,152]],["fsm-media.com",148],["funtasticlife.com",[148,152]],["fwmadebycarli.com",[148,152]],["gamerant.com",148],["gfinityesports.com",148],["givemesport.com",148],["gulflive.com",[148,152]],["helloflo.com",148],["homeglowdesign.com",[148,152]],["honeygirlsworld.com",[148,152]],["hotcars.com",148],["howtogeek.com",148],["insider-gaming.com",148],["insurancejournal.com",148],["jasminemaria.com",[148,152]],["kion546.com",[148,152]],["lehighvalleylive.com",[148,152]],["lettyskitchen.com",[148,152]],["lifeinleggings.com",[148,152]],["liveandletsfly.com",148],["lizzieinlace.com",[148,152]],["localnews8.com",[148,152]],["lonestarlive.com",[148,152]],["makeuseof.com",148],["masslive.com",[148,152,258]],["movieweb.com",148],["nj.com",[148,152]],["nothingbutnewcastle.com",[148,152]],["nsjonline.com",[148,152]],["oregonlive.com",[148,152]],["pagesix.com",[148,152,258]],["pennlive.com",[148,152,258]],["screenrant.com",148],["sheknows.com",[148,152]],["syracuse.com",[148,152,258]],["thegamer.com",148],["tvline.com",[148,152]],["cheatsheet.com",149],["pwinsider.com",149],["baeldung.com",149],["mensjournal.com",149],["c-span.org",150],["15min.lt",151],["247sports.com",[151,258]],["barcablaugranes.com",152],["betweenenglandandiowa.com",152],["bgr.com",152],["blazersedge.com",152],["blu-ray.com",152],["brobible.com",152],["cagesideseats.com",152],["cbsnews.com",[152,258]],["cbssports.com",[152,258]],["celiacandthebeast.com",152],["clickondetroit.com",152],["dailydot.com",152],["dailykos.com",152],["eater.com",152],["eldiariony.com",152],["fark.com",152],["free-power-point-templates.com",152],["golfdigest.com",152],["ibtimes.co.in",152],["imgur.com",152],["indiewire.com",[152,258]],["intouchweekly.com",152],["knowyourmeme.com",152],["last.fm",152],["lifeandstylemag.com",152],["mandatory.com",152],["naszemiasto.pl",152],["nationalpost.com",152],["nbcsports.com",152],["news.com.au",152],["ninersnation.com",152],["nypost.com",[152,258]],["playstationlifestyle.net",152],["rollingstone.com",152],["sbnation.com",152],["sneakernews.com",152],["sport-fm.gr",152],["stylecaster.com",152],["tastingtable.com",152],["thecw.com",152],["thedailymeal.com",152],["theflowspace.com",152],["themarysue.com",152],["tokfm.pl",152],["torontosun.com",152],["usmagazine.com",152],["wallup.net",152],["worldstar.com",152],["worldstarhiphop.com",152],["yourcountdown.to",152],["bagi.co.in",153],["keran.co",153],["biblestudytools.com",154],["christianheadlines.com",154],["ibelieve.com",154],["kuponigo.com",155],["inxxx.com",156],["bemyhole.com",156],["ipaspot.app",157],["embedwish.com",158],["filelions.live",158],["leakslove.net",158],["jenismac.com",159],["vxetable.cn",160],["nizarstream.com",161],["snapwordz.com",162],["toolxox.com",162],["rl6mans.com",162],["faqwiki.us",162],["donghuaworld.com",163],["letsdopuzzles.com",164],["rediff.com",165],["igay69.com",166],["kimcilonly.link",167],["dzapk.com",168],["darknessporn.com",169],["familyporner.com",169],["freepublicporn.com",169],["pisshamster.com",169],["punishworld.com",169],["xanimu.com",169],["pig69.com",170],["cosplay18.pics",170],["sexwebvideo.com",170],["sexwebvideo.net",170],["tainio-mania.online",171],["eroticmoviesonline.me",172],["teleclub.xyz",173],["ecamrips.com",174],["showcamrips.com",174],["tucinehd.com",175],["9animetv.to",176],["qiwi.gg",177],["jornadaperfecta.com",178],["loseart.com",179],["sousou-no-frieren.com",180],["unite-guide.com",181],["thebullspen.com",182],["receitasdaora.online",183],["streambucket.net",185],["nontongo.win",185],["player.smashy.stream",186],["player.smashystream.com",186],["hentaihere.com",186],["torrentdownload.*",188],["cineb.rs",188],["123animehub.cc",188],["tukipasti.com",188],["cataz.to",188],["netmovies.to",188],["hiraethtranslation.com",189],["all3do.com",190],["do7go.com",190],["d0000d.com",190],["d000d.com",190],["d0o0d.com",190],["do0od.com",190],["doods.pro",190],["doodstream.*",190],["dooodster.com",190],["ds2play.com",190],["ds2video.com",190],["vidply.com",190],["xfreehd.com",191],["freethesaurus.com",192],["thefreedictionary.com",192],["dexterclearance.com",193],["x86.co.kr",194],["onlyfaucet.com",195],["x-x-x.tube",196],["fdownloader.net",197],["thehackernews.com",198],["mielec.pl",199],["treasl.com",200],["mrbenne.com",201],["cnpics.org",202],["ovabee.com",202],["porn4f.com",202],["cnxx.me",202],["ai18.pics",202],["sportsonline.si",203],["fiuxy2.co",204],["animeunity.to",205],["tokopedia.com",206],["remixsearch.net",207],["remixsearch.es",207],["onlineweb.tools",207],["sharing.wtf",207],["2024tv.ru",208],["modrinth.com",209],["curseforge.com",209],["xnxxcom.xyz",210],["sportsurge.net",211],["joyousplay.xyz",211],["quest4play.xyz",[211,213]],["generalpill.net",211],["moneycontrol.com",212],["cookiewebplay.xyz",213],["ilovetoplay.xyz",213],["streamcaster.live",213],["weblivehdplay.ru",213],["oaaxpgp3.xyz",214],["m9.news",215],["callofwar.com",216],["secondhandsongs.com",217],["nudezzers.org",218],["send.cm",219],["send.now",219],["3rooodnews.net",220],["xxxbfvideo.net",221],["filmy4wap.co.in",222],["filmy4waps.org",222],["gameshop4u.com",223],["regenzi.site",223],["historicaerials.com",224],["handirect.fr",225],["animefenix.tv",226],["fsiblog3.club",227],["kamababa.desi",227],["sat-sharing.com",227],["getfiles.co.uk",228],["genelify.com",229],["dhtpre.com",230],["xbaaz.com",231],["lineupexperts.com",233],["fearmp4.ru",234],["fbstreams.*",235],["m.shuhaige.net",236],["streamingnow.mov",237],["thesciencetoday.com",238],["sportnews.to",238],["ghbrisk.com",240],["iplayerhls.com",240],["bacasitus.com",241],["katoikos.world",241],["abstream.to",242],["pawastreams.pro",243],["rebajagratis.com",244],["tv.latinlucha.es",244],["fetcheveryone.com",245],["reviewdiv.com",246],["laurelberninteriors.com",247],["godlike.com",248],["godlikeproductions.com",248],["apex2nova.com",249],["botcomics.com",250],["cefirates.com",250],["chandlerorchards.com",250],["comicleaks.com",250],["marketdata.app",250],["monumentmetals.com",250],["tapmyback.com",250],["ping.gg",250],["revistaferramental.com.br",250],["hawpar.com",250],["alpacafinance.org",[250,251]],["nookgaming.com",250],["enkeleksamen.no",250],["kvest.ee",250],["creatordrop.com",250],["panpots.com",250],["cybernetman.com",250],["bitdomain.biz",250],["gerardbosch.xyz",250],["fort-shop.kiev.ua",250],["accuretawealth.com",250],["resourceya.com",250],["tracktheta.com",250],["camberlion.com",250],["replai.io",250],["trybawaryjny.pl",250],["segops.madisonspecs.com",250],["stresshelden-coaching.de",250],["controlconceptsusa.com",250],["ryaktive.com",250],["tip.etip-staging.etip.io",250],["tt.live",251],["future-fortune.com",251],["adventuretix.com",251],["bolighub.dk",251],["panprices.com",252],["intercity.technology",252],["freelancer.taxmachine.be",252],["adria.gg",252],["fjlaboratories.com",252],["emanualonline.com",252],["abhijith.page",252],["helpmonks.com",252],["dataunlocker.com",253],["proboards.com",254],["winclassic.net",254],["farmersjournal.ie",255],["pandadoc.com",257],["abema.tv",259]]);
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
