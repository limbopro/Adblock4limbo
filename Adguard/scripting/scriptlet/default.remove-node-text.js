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
const argsList = [["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","exdynsrv"],["script","/delete window|adserverDomain|FingerprintJS/"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","window.adblockDetector"],["script","DName"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","popUp"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","/popunder|isAdBlock|admvn.src/i"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth|eval/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script",".xyz/script/"],["script","adrecover.com"],["script","html-load.com"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","Brave"],["script","await"],["script","Object.keys(window.adngin).length"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","\"\").split(\",\")[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"/"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/$.*open/"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","__adblocker"],["script","/alert|brave|blocker/i"],["script","delete window"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","\"data-adm-url\""],["script","NREUM"]];
const hostnamesMap = new Map([["web.de",0],["skidrowreloaded.com",[1,12]],["wawacity.*",1],["720pstream.*",[1,67]],["embedsports.me",[1,71]],["embedstream.me",[1,11,12,67,71]],["jumbtv.com",[1,71]],["reliabletv.me",[1,71]],["topembed.pw",[1,69,212]],["crackstreamer.net",1],["methstreamer.com",1],["rnbastreams.com",1],["vidsrc.*",[1,11,67]],["1stream.eu",1],["4kwebplay.xyz",1],["anime4i.vip",1],["antennasports.ru",1],["buffsports.me",[1,67]],["buffstreams.app",1],["claplivehdplay.ru",[1,212]],["cracksports.me",[1,11]],["euro2024direct.ru",1],["ext.to",1],["extreme-down.*",1],["eztv.tf",1],["eztvx.to",1],["flix-wave.*",1],["hikaritv.xyz",1],["kenitv.me",[1,11,12]],["lewblivehdplay.ru",[1,212]],["mixdrop.*",[1,12]],["mlbbite.net",1],["mlbstreams.ai",1],["qatarstreams.me",[1,11]],["qqwebplay.xyz",[1,212]],["sanet.*",1],["soccerworldcup.me",[1,11]],["sportshd.*",1],["topstreams.info",1],["totalsportek.to",1],["viwlivehdplay.ru",1],["vidco.pro",[1,67]],["moviepilot.de",[2,54]],["userupload.*",3],["cinedesi.in",3],["intro-hd.net",3],["monacomatin.mc",3],["nodo313.net",3],["hesgoal-tv.io",3],["hesgoal-vip.io",3],["earn.punjabworks.com",3],["mahajobwala.in",3],["solewe.com",3],["panel.play.hosting",3],["pahe.*",[4,12,69]],["soap2day.*",4],["yts.mx",5],["magesypro.com",6],["pinsystem.co.uk",6],["elrellano.com",6],["tinyppt.com",6],["veganab.co",6],["camdigest.com",6],["learnmany.in",6],["amanguides.com",[6,34]],["highkeyfinance.com",[6,34]],["appkamods.com",6],["techacode.com",6],["djqunjab.in",6],["downfile.site",6],["expertvn.com",6],["trangchu.news",6],["3dmodelshare.org",6],["nulleb.com",6],["asiaon.top",6],["reset-scans.*",6],["coursesghar.com",6],["thecustomrom.com",6],["snlookup.com",6],["bingotingo.com",6],["ghior.com",6],["3dmili.com",6],["karanpc.com",6],["plc247.com",6],["apkdelisi.net",6],["freepasses.org",6],["poplinks.*",[6,38]],["tomarnarede.pt",6],["basketballbuzz.ca",6],["dribbblegraphics.com",6],["kemiox.com",6],["teksnologi.com",6],["bharathwick.com",6],["descargaspcpro.net",6],["dx-tv.com",6],["rt3dmodels.com",6],["plc4me.com",6],["blisseyhusbands.com",6],["mhdsports.*",6],["mhdsportstv.*",6],["mhdtvsports.*",6],["mhdtvworld.*",6],["mhdtvmax.*",6],["mhdstream.*",6],["madaradex.org",6],["trigonevo.com",6],["franceprefecture.fr",6],["jazbaat.in",6],["aipebel.com",6],["audiotools.blog",6],["embdproxy.xyz",6],["hqq.*",7],["waaw.*",7],["pixhost.*",8],["vipbox.*",9],["germancarforum.com",10],["cybercityhelp.in",10],["innateblogger.com",10],["omeuemprego.online",10],["viprow.*",[11,12,67]],["bluemediadownload.*",11],["bluemediafile.*",11],["bluemedialink.*",11],["bluemediastorage.*",11],["bluemediaurls.*",11],["urlbluemedia.*",11],["streamnoads.com",[11,12,58,67]],["bowfile.com",11],["cloudvideo.tv",[11,67]],["cloudvideotv.*",[11,67]],["coloredmanga.com",11],["exeo.app",11],["hiphopa.net",[11,12]],["megaup.net",11],["olympicstreams.co",[11,67]],["tv247.us",[11,12]],["uploadhaven.com",11],["userscloud.com",[11,67]],["mlbbox.me",11],["vikingf1le.us.to",11],["neodrive.xyz",11],["mdfx9dc8n.net",12],["mdzsmutpcvykb.net",12],["mixdrop21.net",12],["mixdropjmk.pw",12],["123-movies.*",12],["123movieshd.*",12],["123movieshub.*",12],["123moviesme.*",12],["1337x.*",[12,186]],["141jav.com",12],["1bit.space",12],["1bitspace.com",12],["1stream.*",12],["1tamilmv.*",12],["2ddl.*",12],["2umovies.*",12],["345movies.com",12],["3dporndude.com",12],["3hiidude.*",12],["4archive.org",12],["4horlover.com",12],["4stream.*",12],["560pmovie.com",12],["5movies.*",12],["7hitmovies.*",12],["85tube.com",12],["85videos.com",12],["9xmovie.*",12],["aagmaal.*",[12,67]],["acefile.co",12],["actusports.eu",12],["adblockeronstape.*",[12,58]],["adblockeronstreamtape.*",12],["adblockplustape.*",[12,58]],["adblockstreamtape.*",[12,58]],["adblockstrtape.*",[12,58]],["adblockstrtech.*",[12,58]],["adblocktape.*",[12,58]],["adclickersbot.com",12],["adcorto.*",12],["adricami.com",12],["adslink.pw",12],["adultstvlive.com",12],["adz7short.space",12],["aeblender.com",12],["ahdafnews.blogspot.com",12],["ak47sports.com",12],["akuma.moe",12],["alexsports.*",12],["alexsportss.*",12],["alexsportz.*",12],["allplayer.tk",12],["amateurblog.tv",12],["androidadult.com",[12,238]],["anhsexjav.xyz",12],["anidl.org",12],["anime-loads.org",12],["animeblkom.net",12],["animefire.plus",12],["animelek.me",12],["animepahe.*",12],["animesanka.*",12],["animespire.net",12],["animestotais.xyz",12],["animeyt.es",12],["animixplay.*",12],["aniplay.*",12],["anroll.net",12],["antiadtape.*",[12,58]],["anymoviess.xyz",12],["aotonline.org",12],["asenshu.com",12],["asialiveaction.com",12],["asianclipdedhd.net",12],["asianclub.*",12],["ask4movie.*",12],["askim-bg.com",12],["asumsikedaishop.com",12],["atomixhq.*",[12,67]],["atomohd.*",12],["avcrempie.com",12],["avseesee.com",12],["gettapeads.com",[12,58]],["backfirstwo.com",12],["bajarjuegospcgratis.com",12],["balkanportal.net",12],["balkanteka.net",12],["bdnewszh.com",[12,67]],["beinmatch.*",[12,21]],["belowporn.com",12],["bestgirlsexy.com",12],["bestnhl.com",12],["bestporn4free.com",12],["bestporncomix.com",12],["bet36.es",12],["bgwp.cc",[12,17]],["bhaai.*",12],["bikinitryon.net",12],["birdurls.com",12],["bitsearch.to",12],["blackcockadventure.com",12],["blackcockchurch.org",12],["blackporncrazy.com",12],["blizzboygames.net",12],["blizzpaste.com",12],["blkom.com",12],["blog-peliculas.com",12],["blogtrabalhista.com",12],["blurayufr.*",12],["bobsvagene.club",12],["bolly4umovies.click",12],["bonusharian.pro",12],["brilian-news.id",12],["brupload.net",12],["bucitana.com",12],["buffstreams.*",12],["camchickscaps.com",12],["camgirlcum.com",12],["camgirls.casa",12],["canalesportivo.*",12],["cashurl.in",12],["castingx.net",12],["ccurl.net",[12,67]],["celebrity-leaks.net",12],["cgpelis.net",12],["charexempire.com",12],["choosingnothing.com",12],["clasico.tv",12],["clickndownload.*",12],["clicknupload.*",12],["clik.pw",12],["coin-free.com",[12,31]],["coins100s.fun",12],["comicsmanics.com",12],["compucalitv.com",12],["coolcast2.com",12],["cosplaytab.com",12],["countylocalnews.com",12],["cpmlink.net",12],["crackstreamshd.click",12],["crespomods.com",12],["crisanimex.com",12],["crunchyscan.fr",12],["cuevana3.fan",12],["cuevana3hd.com",12],["cumception.com",12],["cutpaid.com",12],["daddylive.*",[12,67,210]],["daddylivehd.*",[12,67]],["dailyuploads.net",12],["datawav.club",12],["daughtertraining.com",12],["ddrmovies.*",12],["deepgoretube.site",12],["deltabit.co",12],["deporte-libre.top",12],["depvailon.com",12],["derleta.com",12],["desiremovies.*",12],["desivdo.com",12],["desixx.net",12],["detikkebumen.com",12],["deutschepornos.me",12],["devlib.*",12],["diasoft.xyz",12],["directupload.net",12],["diskusscan.com",12],["divxtotal.*",12],["divxtotal1.*",12],["dixva.com",12],["dlhd.*",12],["doctormalay.com",12],["dofusports.xyz",12],["dogemate.com",12],["doods.cam",12],["doodskin.lat",12],["downloadrips.com",12],["downvod.com",12],["dphunters.mom",12],["dragontranslation.com",12],["dvdfullestrenos.com",12],["dvdplay.*",[12,67]],["ebookbb.com",12],["ebookhunter.net",12],["egyanime.com",12],["egygost.com",12],["egyshare.cc",12],["ekasiwap.com",12],["electro-torrent.pl",12],["elil.cc",12],["elixx.*",12],["enjoy4k.*",12],["eplayer.click",12],["erovoice.us",12],["eroxxx.us",12],["estrenosdoramas.net",12],["estrenosflix.*",12],["estrenosflux.*",12],["estrenosgo.*",12],["everia.club",12],["everythinginherenet.blogspot.com",12],["extrafreetv.com",12],["extremotvplay.com",12],["f1stream.*",12],["fapinporn.com",12],["fapptime.com",12],["fashionblog.tv",12],["fastreams.live",12],["faucethero.com",12],["fbstream.*",12],["fembed.com",12],["femdom-joi.com",12],["file4go.*",12],["fileone.tv",12],["film1k.com",12],["filmeonline2023.net",12],["filmesonlinex.org",12],["filmesonlinexhd.biz",[12,67]],["filmovitica.com",12],["filmymaza.blogspot.com",12],["filmyzilla.*",[12,67]],["filthy.family",12],["findav.*",12],["findporn.*",12],["fixfinder.click",12],["flixmaza.*",12],["flizmovies.*",12],["flostreams.xyz",12],["flyfaucet.com",12],["footyhunter.lol",12],["forex-trnd.com",12],["forumchat.club",12],["forumlovers.club",12],["freemoviesonline.biz",12],["freeomovie.co.in",12],["freeomovie.to",12],["freeporncomic.net",12],["freepornhdonlinegay.com",12],["freeproxy.io",12],["freetvsports.*",12],["freeuse.me",12],["freeusexporn.com",12],["fsharetv.cc",12],["fsicomics.com",12],["fullymaza.*",12],["g3g.*",12],["galinhasamurai.com",12],["gamepcfull.com",12],["gameronix.com",12],["gamesfullx.com",12],["gameshdlive.net",12],["gamesmountain.com",12],["gamesrepacks.com",12],["gamingguru.fr",12],["gamovideo.com",12],["garota.cf",12],["gaydelicious.com",12],["gaypornhot.com",12],["gaypornmasters.com",12],["gaysex69.net",12],["gemstreams.com",12],["get-to.link",12],["girlscanner.org",12],["giurgiuveanul.ro",12],["gledajcrtace.xyz",12],["gocast2.com",12],["gomo.to",12],["gostosa.cf",12],["gotxx.*",12],["grantorrent.*",12],["gtlink.co",12],["gwiazdypornosow.pl",12],["haho.moe",12],["hatsukimanga.com",12],["hayhd.net",12],["hdmoviesfair.*",[12,67]],["hdmoviesflix.*",12],["hdsaprevodom.com",12],["hdstreamss.club",12],["hentais.tube",12],["hentaistream.co",12],["hentaitk.net",12],["hentaitube.online",12],["hentaiworld.tv",12],["hesgoal.tv",12],["hexupload.net",12],["hhkungfu.tv",12],["highlanderhelp.com",12],["hiidudemoviez.*",12],["hindimean.com",12],["hindimovies.to",[12,67]],["hiperdex.com",12],["hispasexy.org",12],["hitprn.com",12],["hoca4u.com",12],["hollymoviehd.cc",12],["hoodsite.com",12],["hopepaste.download",12],["hornylips.com",12],["hotgranny.live",12],["hotmama.live",12],["hqcelebcorner.net",12],["huren.best",12],["hwnaturkya.com",[12,67]],["hxfile.co",[12,67]],["igfap.com",12],["iklandb.com",12],["illink.net",12],["imgkings.com",12],["imgsen.*",12],["imgsex.xyz",12],["imgsto.*",12],["imx.to",12],["incest.*",12],["incestflix.*",12],["influencersgonewild.org",12],["infosgj.free.fr",12],["investnewsbrazil.com",12],["itdmusics.com",12],["itopmusic.*",12],["itsuseful.site",12],["itunesfre.com",12],["iwatchfriendsonline.net",[12,131]],["jackstreams.com",12],["jatimupdate24.com",12],["jav-fun.cc",12],["jav-noni.cc",12],["jav-scvp.com",12],["javcl.com",12],["javf.net",12],["javhay.net",12],["javhoho.com",12],["javhun.com",12],["javleak.com",12],["javmost.*",12],["javporn.best",12],["javsek.net",12],["javsex.to",12],["javtiful.com",[12,14]],["jimdofree.com",12],["jiofiles.org",12],["jorpetz.com",12],["jp-films.com",12],["jpop80ss3.blogspot.com",12],["jpopsingles.eu",[12,188]],["kantotflix.net",12],["kantotinyo.com",12],["kaoskrew.org",12],["kaplog.com",12],["keeplinks.*",12],["keepvid.*",12],["keralahd.*",12],["keralatvbox.com",12],["khatrimazaful.*",12],["khatrimazafull.*",[12,61]],["kickassanimes.io",12],["kimochi.info",12],["kimochi.tv",12],["kinemania.tv",12],["konstantinova.net",12],["koora-online.live",12],["kunmanga.com",12],["kutmoney.com",12],["kwithsub.com",12],["lat69.me",12],["latinblog.tv",12],["latinomegahd.net",12],["leechall.*",12],["leechpremium.link",12],["legendas.dev",12],["legendei.net",12],["lightdlmovies.blogspot.com",12],["lighterlegend.com",12],["linclik.com",12],["linkebr.com",12],["linkrex.net",12],["linkshorts.*",12],["lulu.st",12],["lulustream.com",[12,69]],["luluvdo.com",12],["manga-oni.com",12],["mangaboat.com",12],["mangagenki.me",12],["mangahere.onl",12],["mangaweb.xyz",12],["mangoporn.net",12],["mangovideo.*",12],["manhwahentai.me",12],["masahub.com",12],["masahub.net",12],["masaporn.*",12],["maturegrannyfuck.com",12],["mdy48tn97.com",12],["mediapemersatubangsa.com",12],["mega-mkv.com",12],["megapastes.com",12],["megapornpics.com",12],["messitv.net",12],["meusanimes.net",12],["milfmoza.com",12],["milfzr.com",12],["millionscast.com",12],["mimaletamusical.blogspot.com",12],["miniurl.*",12],["mirrorace.*",12],["mitly.us",12],["mixdroop.*",12],["mkv-pastes.com",12],["mkvcage.*",12],["mlbstream.*",12],["mlsbd.*",12],["mmsbee.*",12],["monaskuliner.ac.id",12],["moredesi.com",12],["motogpstream.*",12],["movgotv.net",12],["movi.pk",12],["movieplex.*",12],["movierulzlink.*",12],["movies123.*",12],["moviesflix.*",12],["moviesmeta.*",12],["moviessources.*",12],["moviesverse.*",12],["movieswbb.com",12],["moviewatch.com.pk",12],["moviezwaphd.*",12],["mp4upload.com",12],["mrskin.live",12],["mrunblock.*",12],["multicanaistv.com",12],["mundowuxia.com",12],["myeasymusic.ir",12],["myonvideo.com",12],["myyouporn.com",12],["narutoget.info",12],["naughtypiss.com",12],["nbastream.*",12],["nerdiess.com",12],["new-fs.eu",12],["newmovierulz.*",12],["newtorrentgame.com",12],["nflstream.*",12],["nflstreams.me",12],["nhlstream.*",12],["niaomea.me",[12,67]],["nicekkk.com",12],["nicesss.com",12],["nlegs.com",12],["noblocktape.*",[12,58]],["nocensor.*",12],["nolive.me",[12,67]],["notformembersonly.com",12],["novamovie.net",12],["novelpdf.xyz",12],["novelssites.com",[12,67]],["novelup.top",12],["nsfwr34.com",12],["nu6i-bg-net.com",12],["nudebabesin3d.com",12],["nukedfans.com",12],["nuoga.eu",12],["nzbstars.com",12],["o2tvseries.com",12],["ohjav.com",12],["ojearnovelas.com",12],["okanime.xyz",12],["olweb.tv",12],["on9.stream",12],["onepiece-mangaonline.com",12],["onifile.com",12],["onionstream.live",12],["onlinesaprevodom.net",12],["onlyfams.*",12],["onlyfullporn.video",12],["onplustv.live",12],["originporn.com",12],["ouo.*",12],["ovagames.com",12],["ovamusic.com",12],["packsporn.com",12],["pahaplayers.click",12],["palimas.org",12],["password69.com",12],["pastemytxt.com",12],["payskip.org",12],["pctfenix.*",[12,67]],["pctnew.*",[12,67]],["peeplink.in",12],["peliculas24.*",12],["peliculasmx.net",12],["pelisplus.*",12],["pervertgirlsvideos.com",12],["pervyvideos.com",12],["phim12h.com",12],["picdollar.com",12],["pickteenz.com",12],["picsxxxporn.com",12],["pinayscandalz.com",12],["pinkueiga.net",12],["piratebay.*",12],["piratefast.xyz",12],["piratehaven.xyz",12],["pirateiro.com",12],["pirlotvonline.org",12],["playtube.co.za",12],["plugintorrent.com",12],["plyjam.*",12],["plylive.*",12],["plyvdo.*",12],["pmvzone.com",12],["porndish.com",12],["pornez.net",12],["pornfetishbdsm.com",12],["pornfits.com",12],["pornhd720p.com",12],["pornhoarder.*",[12,231]],["pornobr.club",12],["pornobr.ninja",12],["pornodominicano.net",12],["pornofaps.com",12],["pornoflux.com",12],["pornotorrent.com.br",12],["pornredit.com",12],["pornstarsyfamosas.es",12],["pornstreams.co",12],["porntn.com",12],["pornxbit.com",12],["pornxday.com",12],["portaldasnovinhas.shop",12],["portugues-fcr.blogspot.com",12],["poscitesch.com",[12,67]],["poseyoung.com",12],["pover.org",12],["prbay.*",12],["projectfreetv.*",12],["proxybit.*",12],["proxyninja.org",12],["psarips.*",12],["pubfilmz.com",12],["publicsexamateurs.com",12],["punanihub.com",12],["putlocker5movies.org",12],["pxxbay.com",12],["r18.best",12],["racaty.*",12],["ragnaru.net",12],["rapbeh.net",12],["rapelust.com",12],["rapload.org",12],["read-onepiece.net",12],["remaxhd.*",12],["retro-fucking.com",12],["retrotv.org",12],["rintor.*",12],["rnbxclusive.*",12],["rnbxclusive0.*",12],["rnbxclusive1.*",12],["robaldowns.com",12],["rockdilla.com",12],["rojadirecta.*",12],["rojadirectaenvivo.*",12],["rojadirectatvenvivo.com",12],["rojitadirecta.blogspot.com",12],["romancetv.site",12],["rsoccerlink.site",12],["rugbystreams.*",12],["rule34.club",12],["rule34hentai.net",12],["rumahbokep-id.com",12],["sadisflix.*",12],["safego.cc",12],["safetxt.*",12],["sakurafile.com",12],["satoshi-win.xyz",12],["scat.gold",12],["scatfap.com",12],["scatkings.com",12],["scnlog.me",12],["scripts-webmasters.net",12],["serie-turche.com",12],["serijefilmovi.com",12],["sexcomics.me",12],["sexdicted.com",12],["sexgay18.com",12],["sexofilm.co",12],["sextgem.com",12],["sextubebbw.com",12],["sgpics.net",12],["shadowrangers.*",12],["shadowrangers.live",12],["shahee4u.cam",12],["shahi4u.*",12],["shahid4u1.*",12],["shahid4uu.*",12],["shahiid-anime.net",12],["shavetape.*",12],["shemale6.com",12],["shid4u.*",12],["shinden.pl",12],["short.es",12],["shortearn.*",12],["shorten.*",12],["shorttey.*",12],["shortzzy.*",12],["showmanga.blog.fc2.com",12],["shrt10.com",12],["shurt.pw",12],["sideplusleaks.net",12],["silverblog.tv",12],["silverpic.com",12],["sinhalasub.life",12],["sinsitio.site",12],["sinvida.me",12],["skidrowcpy.com",12],["skidrowfull.com",12],["skymovieshd.*",12],["slut.mom",12],["smallencode.me",12],["smoner.com",12],["smplace.com",12],["soccerinhd.com",[12,67]],["socceron.name",12],["socceronline.*",[12,67]],["softairbay.com",12],["softarchive.*",12],["sokobj.com",12],["songsio.com",12],["souexatasmais.com",12],["sportbar.live",12],["sports-stream.*",12],["sportstream1.cfd",12],["sporttuna.*",12],["srt.am",12],["srts.me",12],["sshhaa.*",12],["stapadblockuser.*",[12,58]],["stape.*",[12,58]],["stapewithadblock.*",12],["starmusiq.*",12],["stbemuiptv.com",12],["stockingfetishvideo.com",12],["strcloud.*",[12,58]],["stream.crichd.vip",12],["stream.lc",12],["stream25.xyz",12],["streamadblocker.*",[12,58,67]],["streamadblockplus.*",[12,58]],["streambee.to",12],["streamcdn.*",12],["streamcenter.pro",12],["streamers.watch",12],["streamgo.to",12],["streamhub.*",12],["streamkiste.tv",12],["streamoupload.xyz",12],["streamservicehd.click",12],["streamsport.*",12],["streamta.*",[12,58]],["streamtape.*",[12,58]],["streamtapeadblockuser.*",[12,58]],["streamvid.net",[12,22]],["strikeout.*",[12,69]],["strtape.*",[12,58]],["strtapeadblock.*",[12,58]],["strtapeadblocker.*",[12,58]],["strtapewithadblock.*",12],["strtpe.*",[12,58]],["subtitleporn.com",12],["subtitles.cam",12],["suicidepics.com",12],["supertelevisionhd.com",12],["supexfeeds.com",12],["swatchseries.*",12],["swiftload.io",12],["swipebreed.net",12],["swzz.xyz",12],["sxnaar.com",12],["tabooflix.*",12],["tabooporns.com",12],["taboosex.club",12],["tapeantiads.com",[12,58]],["tapeblocker.com",[12,58]],["tapenoads.com",[12,58]],["tapewithadblock.org",[12,58,255]],["teamos.xyz",12],["teen-wave.com",12],["teenporncrazy.com",12],["telegramgroups.xyz",12],["telenovelasweb.com",12],["tennisstreams.*",12],["tensei-shitara-slime-datta-ken.com",12],["tfp.is",12],["tgo-tv.co",[12,67]],["thaihotmodels.com",12],["theblueclit.com",12],["thebussybandit.com",12],["thedaddy.to",[12,210]],["theicongenerator.com",12],["thelastdisaster.vip",12],["themoviesflix.*",12],["thepiratebay.*",12],["thepiratebay0.org",12],["thepiratebay10.info",12],["thesexcloud.com",12],["thothub.today",12],["tightsexteens.com",12],["tmearn.*",12],["tojav.net",12],["tokyoblog.tv",12],["toonanime.*",12],["top16.net",12],["topvideosgay.com",12],["torlock.*",12],["tormalayalam.*",12],["torrage.info",12],["torrents.vip",12],["torrentz2eu.*",12],["torrsexvid.com",12],["tpb-proxy.xyz",12],["trannyteca.com",12],["trendytalker.com",12],["tumanga.net",12],["turbogvideos.com",12],["turbovid.me",12],["turkishseriestv.org",12],["turksub24.net",12],["tutele.sx",12],["tutelehd.*",12],["tvglobe.me",12],["tvpclive.com",12],["tvply.*",12],["tvs-widget.com",12],["tvseries.video",12],["u4m.*",12],["ucptt.com",12],["ufaucet.online",12],["ufcfight.online",12],["ufcstream.*",12],["ultrahorny.com",12],["ultraten.net",12],["unblocknow.*",12],["unblockweb.me",12],["underhentai.net",12],["uniqueten.net",12],["upbaam.com",12],["uploadbuzz.*",12],["upstream.to",12],["usagoals.*",12],["valeriabelen.com",12],["verdragonball.online",12],["vexmoviex.*",12],["vfxmed.com",12],["vidclouds.*",12],["video.az",12],["videostreaming.rocks",12],["videowood.tv",12],["vidlox.*",12],["vidorg.net",12],["vidtapes.com",12],["vidz7.com",12],["vikistream.com",12],["vikv.net",12],["vipboxtv.*",[12,67]],["vipleague.*",[12,234]],["virpe.cc",12],["visifilmai.org",12],["viveseries.com",12],["vladrustov.sx",12],["volokit2.com",[12,210]],["vstorrent.org",12],["w-hentai.com",12],["watch-series.*",12],["watchbrooklynnine-nine.com",12],["watchelementaryonline.com",12],["watchjavidol.com",12],["watchkobestreams.info",12],["watchlostonline.net",12],["watchmonkonline.com",12],["watchrulesofengagementonline.com",12],["watchseries.*",12],["watchthekingofqueens.com",12],["webcamrips.com",12],["wincest.xyz",12],["wolverdon.fun",12],["wordcounter.icu",12],["worldmovies.store",12],["worldstreams.click",12],["wpdeployit.com",12],["wqstreams.tk",12],["wwwsct.com",12],["xanimeporn.com",12],["xblog.tv",12],["xclusivejams.*",12],["xmoviesforyou.*",12],["xn--verseriesespaollatino-obc.online",12],["xn--xvideos-espaol-1nb.com",12],["xpornium.net",12],["xsober.com",12],["xvip.lat",12],["xxgasm.com",12],["xxvideoss.org",12],["xxx18.uno",12],["xxxdominicana.com",12],["xxxfree.watch",12],["xxxmax.net",12],["xxxwebdlxxx.top",12],["xxxxvideo.uno",12],["y2b.wiki",12],["yabai.si",12],["yadixv.com",12],["yayanimes.net",12],["yeshd.net",12],["yodbox.com",12],["youdbox.*",12],["youjax.com",12],["yourdailypornvideos.ws",12],["yourupload.com",12],["ytmp3eu.*",12],["yts-subs.*",12],["yts.*",12],["ytstv.me",12],["zerion.cc",12],["zerocoin.top",12],["zitss.xyz",12],["zooqle.*",12],["zpaste.net",12],["1337x.ninjaproxy1.com",12],["y2tube.pro",12],["freeshot.live",12],["fastreams.com",12],["redittsports.com",12],["sky-sports.store",12],["streamsoccer.site",12],["tntsports.store",12],["wowstreams.co",12],["zdsptv.com",12],["tuktukcinma.com",12],["dutchycorp.*",13],["faucet.ovh",13],["mmacore.tv",14],["nxbrew.net",14],["oko.sh",[15,43,44]],["variety.com",16],["gameskinny.com",16],["deadline.com",16],["mlive.com",[16,147,151]],["doujindesu.*",17],["atlasstudiousa.com",17],["51bonusrummy.in",[17,61]],["washingtonpost.com",18],["gosexpod.com",19],["sexo5k.com",20],["truyen-hentai.com",20],["theshedend.com",22],["zeroupload.com",22],["securenetsystems.net",22],["miniwebtool.com",22],["bchtechnologies.com",22],["eracast.cc",22],["flatai.org",22],["spiegel.de",23],["jacquieetmichel.net",24],["hausbau-forum.de",25],["althub.club",25],["kiemlua.com",25],["tea-coffee.net",26],["spatsify.com",26],["newedutopics.com",26],["getviralreach.in",26],["edukaroo.com",26],["funkeypagali.com",26],["careersides.com",26],["nayisahara.com",26],["wikifilmia.com",26],["infinityskull.com",26],["viewmyknowledge.com",26],["iisfvirtual.in",26],["starxinvestor.com",26],["jkssbalerts.com",26],["imagereviser.com",27],["labgame.io",[28,29]],["kenzo-flowertag.com",30],["mdn.lol",30],["btcbitco.in",31],["btcsatoshi.net",31],["cempakajaya.com",31],["crypto4yu.com",31],["gainl.ink",31],["manofadan.com",31],["readbitcoin.org",31],["wiour.com",31],["tremamnon.com",31],["bitsmagic.fun",31],["ourcoincash.xyz",31],["blog.cryptowidgets.net",32],["blog.insurancegold.in",32],["blog.wiki-topia.com",32],["blog.coinsvalue.net",32],["blog.cookinguide.net",32],["blog.freeoseocheck.com",32],["aylink.co",33],["sugarona.com",34],["nishankhatri.xyz",34],["cety.app",35],["exe-urls.com",35],["exego.app",35],["cutlink.net",35],["cutsy.net",35],["cutyurls.com",35],["cutty.app",35],["cutnet.net",35],["jixo.online",35],["tinys.click",36],["diendancauduong.com",36],["formyanime.com",36],["gsm-solution.com",36],["h-donghua.com",36],["hindisubbedacademy.com",36],["mydverse.*",36],["ripexbooster.xyz",36],["serial4.com",36],["tutorgaming.com",36],["everydaytechvams.com",36],["dipsnp.com",36],["cccam4sat.com",36],["zeemoontv-24.blogspot.com",36],["stitichsports.com",36],["aiimgvlog.fun",37],["appsbull.com",38],["diudemy.com",38],["maqal360.com",38],["mphealth.online",38],["makefreecallsonline.com",38],["androjungle.com",38],["bookszone.in",38],["drakescans.com",38],["shortix.co",38],["msonglyrics.com",38],["app-sorteos.com",38],["bokugents.com",38],["client.pylexnodes.net",38],["btvplus.bg",38],["blog24.me",[39,40]],["coingraph.us",41],["impact24.us",41],["iconicblogger.com",42],["auto-crypto.click",42],["tvi.la",[43,44]],["iir.la",[43,44]],["tii.la",[43,44]],["ckk.ai",[43,44]],["oei.la",[43,44]],["lnbz.la",[43,44]],["oii.la",[43,44,69]],["tpi.li",[43,44]],["shrinke.*",45],["shrinkme.*",45],["smutty.com",45],["e-sushi.fr",45],["freeadultcomix.com",45],["down.dataaps.com",45],["filmweb.pl",45],["livecamrips.*",45],["safetxt.net",45],["filespayouts.com",45],["atglinks.com",46],["kbconlinegame.com",47],["hamrojaagir.com",47],["odijob.com",47],["stfly.biz",48],["airevue.net",48],["atravan.net",48],["simana.online",49],["fooak.com",49],["joktop.com",49],["evernia.site",49],["falpus.com",49],["rfiql.com",50],["gujjukhabar.in",50],["smartfeecalculator.com",50],["djxmaza.in",50],["thecubexguide.com",50],["jytechs.in",50],["financacerta.com",51],["encurtads.net",51],["mastkhabre.com",52],["weshare.is",53],["alpin.de",54],["boersennews.de",54],["chefkoch.de",54],["chip.de",54],["clever-tanken.de",54],["desired.de",54],["donnerwetter.de",54],["fanfiktion.de",54],["focus.de",54],["formel1.de",54],["frustfrei-lernen.de",54],["gewinnspiele.tv",54],["giga.de",54],["gut-erklaert.de",54],["kino.de",54],["messen.de",54],["nickles.de",54],["nordbayern.de",54],["spielfilm.de",54],["teltarif.de",[54,55]],["unsere-helden.com",54],["weltfussball.at",54],["watson.de",54],["mactechnews.de",54],["sport1.de",54],["welt.de",54],["sport.de",54],["allthingsvegas.com",56],["100percentfedup.com",56],["beforeitsnews.com",56],["concomber.com",56],["conservativebrief.com",56],["conservativefiringline.com",56],["dailylol.com",56],["funnyand.com",56],["letocard.fr",56],["mamieastuce.com",56],["meilleurpronostic.fr",56],["patriotnationpress.com",56],["toptenz.net",56],["vitamiiin.com",56],["writerscafe.org",56],["populist.press",56],["dailytruthreport.com",56],["livinggospeldaily.com",56],["first-names-meanings.com",56],["welovetrump.com",56],["thehayride.com",56],["thelibertydaily.com",56],["thepoke.co.uk",56],["thepolitistick.com",56],["theblacksphere.net",56],["shark-tank.com",56],["naturalblaze.com",56],["greatamericanrepublic.com",56],["dailysurge.com",56],["truthlion.com",56],["flagandcross.com",56],["westword.com",56],["republicbrief.com",56],["freedomfirstnetwork.com",56],["phoenixnewtimes.com",56],["designbump.com",56],["clashdaily.com",56],["madworldnews.com",56],["reviveusa.com",56],["sonsoflibertymedia.com",56],["thedesigninspiration.com",56],["videogamesblogger.com",56],["protrumpnews.com",56],["thepalmierireport.com",56],["kresy.pl",56],["thepatriotjournal.com",56],["gellerreport.com",56],["thegatewaypundit.com",56],["wltreport.com",56],["miaminewtimes.com",56],["politicalsignal.com",56],["rightwingnews.com",56],["bigleaguepolitics.com",56],["comicallyincorrect.com",56],["upornia.com",57],["advertisertape.com",58],["tapeadsenjoyer.com",[58,67]],["tapeadvertisement.com",58],["tapelovesads.org",58],["watchadsontape.com",58],["vosfemmes.com",59],["voyeurfrance.net",59],["bollyflix.*",60],["neymartv.net",60],["streamhd247.info",60],["samax63.lol",60],["hindimoviestv.com",60],["buzter.xyz",60],["valhallas.click",60],["cuervotv.me",[60,67]],["aliezstream.pro",60],["daddy-stream.xyz",60],["daddylive1.*",60],["esportivos.*",60],["instream.pro",60],["mylivestream.pro",60],["poscitechs.*",60],["powerover.online",60],["sportea.link",60],["sportsurge.stream",60],["ufckhabib.com",60],["ustream.pro",60],["animeshqip.site",60],["apkship.shop",60],["buzter.pro",60],["enjoysports.bond",60],["filedot.to",60],["foreverquote.xyz",60],["hdstream.one",60],["kingstreamz.site",60],["live.fastsports.store",60],["livesnow.me",60],["livesports4u.pw",60],["masterpro.click",60],["nuxhallas.click",60],["papahd.info",60],["rgshows.me",60],["sportmargin.live",60],["sportmargin.online",60],["sportsloverz.xyz",60],["sportzlive.shop",60],["supertipzz.online",60],["totalfhdsport.xyz",60],["ultrastreamlinks.xyz",60],["usgate.xyz",60],["webmaal.cfd",60],["wizistreamz.xyz",60],["worldstreamz.shop",60],["g-porno.com",60],["g-streaming.com",60],["educ4m.com",60],["fromwatch.com",60],["visualnewshub.com",60],["bigwarp.*",60],["animeshqip.org",60],["uns.bio",60],["reshare.pm",60],["videograbber.cc",60],["rahim-soft.com",61],["nekopoi.*",61],["x-video.tube",61],["rubystm.com",61],["rubyvid.com",61],["streamruby.com",61],["poophd.cc",61],["windowsreport.com",61],["fuckflix.click",61],["hyundaitucson.info",62],["exambd.net",63],["cgtips.org",64],["freewebcart.com",65],["freemagazines.top",65],["siamblockchain.com",65],["emuenzen.de",66],["123movies.*",67],["123moviesla.*",67],["123movieweb.*",67],["2embed.*",67],["9xmovies.*",67],["adsh.cc",67],["adshort.*",67],["afilmyhouse.blogspot.com",67],["ak.sv",67],["allmovieshub.*",67],["animesultra.com",67],["api.webs.moe",67],["apkmody.io",67],["asianplay.*",67],["atishmkv.*",67],["attvideo.com",67],["backfirstwo.site",67],["bflix.*",67],["crazyblog.in",67],["cricstream.*",67],["crictime.*",67],["divicast.com",67],["dlhd.so",67],["dood.*",[67,189]],["dooood.*",[67,189]],["embed.meomeo.pw",67],["extramovies.*",67],["faselhd.*",67],["faselhds.*",67],["filemoon.*",67],["filmeserialeonline.org",67],["filmy.*",67],["filmyhit.*",67],["filmywap.*",67],["flexyhit.com",67],["fmovies.*",67],["foreverwallpapers.com",67],["french-streams.cc",67],["fslinks.org",67],["gdplayer.*",67],["goku.*",67],["gomovies.*",67],["gowatchseries.*",67],["hdfungamezz.*",67],["hdtoday.to",67],["hinatasoul.com",67],["hindilinks4u.*",67],["hurawatch.*",67],["igg-games.com",67],["infinityscans.net",67],["jalshamoviezhd.*",67],["livecricket.*",67],["mangareader.to",67],["membed.net",67],["mgnetu.com",67],["mhdsport.*",67],["mkvcinemas.*",[67,187]],["movies2watch.*",67],["moviespapa.*",67],["mp3juice.info",67],["mp3juices.cc",67],["mp4moviez.*",67],["mydownloadtube.*",67],["myflixerz.to",67],["nowmetv.net",67],["nowsportstv.com",67],["nuroflix.*",67],["nxbrew.com",67],["o2tvseries.*",67],["o2tvseriesz.*",67],["oii.io",67],["paidshitforfree.com",67],["pepperlive.info",67],["pirlotv.*",67],["playertv.net",67],["poscitech.*",67],["primewire.*",67],["putlocker68.com",67],["redecanais.*",67],["roystream.com",67],["rssing.com",67],["s.to",67],["serienstream.*",67],["sflix.*",67],["shahed4u.*",67],["shaheed4u.*",67],["share.filesh.site",67],["sharkfish.xyz",67],["skidrowcodex.net",67],["smartermuver.com",67],["speedostream.*",67],["sportcast.*",67],["sports-stream.site",67],["sportskart.*",67],["stream4free.live",67],["streamingcommunity.*",[67,69,83]],["tamilarasan.*",67],["tamilfreemp3songs.*",67],["tamilmobilemovies.in",67],["tamilprinthd.*",67],["thewatchseries.live",67],["tnmusic.in",67],["torrentdosfilmes.*",67],["travelplanspro.com",67],["tubemate.*",67],["tusfiles.com",67],["tutlehd4.com",67],["twstalker.com",67],["uploadrar.*",67],["uqload.*",67],["vid-guard.com",67],["vidcloud9.*",67],["vido.*",67],["vidoo.*",67],["vidsaver.net",67],["vidspeeds.com",67],["viralitytoday.com",67],["voiranime.stream",67],["vudeo.*",67],["vumoo.*",67],["watchdoctorwhoonline.com",67],["watchomovies.*",[67,80]],["watchserie.online",67],["webhostingpost.com",67],["woxikon.in",67],["www-y2mate.com",67],["yesmovies.*",67],["ylink.bid",67],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",67],["kickassanime.*",68],["11xmovies.*",69],["buffshub.stream",69],["cinego.tv",69],["ev01.to",69],["fstream365.com",69],["fzmovies.*",69],["linkz.*",69],["minoplres.xyz",69],["mostream.us",69],["myflixer.*",69],["prmovies.*",69],["readcomiconline.li",69],["s3embtaku.pro",69],["sflix2.to",69],["sportshub.stream",69],["streamblasters.*",69],["topcinema.cam",69],["zonatmo.com",69],["animesaturn.cx",69],["filecrypt.*",69],["hunterscomics.com",69],["aniwave.uk",69],["kickass.*",70],["unblocked.id",72],["listendata.com",73],["7xm.xyz",73],["fastupload.io",73],["azmath.info",73],["wouterplanet.com",74],["androidacy.com",75],["pillowcase.su",76],["cine-calidad.*",77],["veryfreeporn.com",77],["theporngod.com",77],["besthdgayporn.com",78],["drivenime.com",78],["erothots1.com",78],["javup.org",78],["savefiles.com",78],["shemaleup.net",78],["transflix.net",78],["4porn4.com",79],["bestpornflix.com",80],["freeroms.com",80],["andhrafriends.com",80],["723qrh1p.fun",80],["98zero.com",81],["mediaset.es",81],["updatewallah.in",81],["hwbusters.com",81],["beatsnoop.com",82],["fetchpik.com",82],["hackerranksolution.in",82],["camsrip.com",82],["help.sakarnewz.com",82],["austiblox.net",84],["btcbunch.com",85],["teachoo.com",[86,87]],["automobile-catalog.com",[88,89,94]],["motorbikecatalog.com",[88,89,94]],["topstarnews.net",88],["islamicfinder.org",88],["secure-signup.net",88],["dramabeans.com",88],["dropgame.jp",88],["manta.com",88],["tportal.hr",88],["tvtropes.org",88],["wouldurather.io",88],["convertcase.net",88],["interfootball.co.kr",89],["a-ha.io",89],["cboard.net",89],["jjang0u.com",89],["joongdo.co.kr",89],["viva100.com",89],["gamingdeputy.com",89],["thesaurus.net",89],["alle-tests.nl",89],["maketecheasier.com",[89,94]],["tweaksforgeeks.com",89],["m.inven.co.kr",89],["mlbpark.donga.com",89],["meconomynews.com",89],["brandbrief.co.kr",89],["motorgraph.com",89],["worldhistory.org",90],["bleepingcomputer.com",91],["lovelive-petitsoku.com",91],["pravda.com.ua",91],["mariowiki.com",92],["ap7am.com",93],["cinema.com.my",93],["dolldivine.com",93],["giornalone.it",93],["iplocation.net",93],["jamaicaobserver.com",93],["jawapos.com",93],["jutarnji.hr",93],["kompasiana.com",93],["mediaindonesia.com",93],["nmplus.hk",93],["slobodnadalmacija.hr",93],["upmedia.mg",93],["allthetests.com",94],["animanch.com",94],["aniroleplay.com",94],["apkmirror.com",[94,183]],["autoby.jp",94],["autofrage.net",94],["carscoops.com",94],["chanto.jp.net",94],["cinetrafic.fr",94],["cocokara-next.com",94],["computerfrage.net",94],["crosswordsolver.com",94],["cruciverba.it",94],["daily.co.jp",94],["dictionnaire.lerobert.com",94],["dnevno.hr",94],["drweil.com",94],["dziennik.pl",94],["forsal.pl",94],["freemcserver.net",94],["game8.jp",94],["gardeningsoul.com",94],["gazetaprawna.pl",94],["globalrph.com",94],["golf-live.at",94],["heureka.cz",94],["horairesdouverture24.fr",94],["indiatimes.com",94],["infor.pl",94],["iza.ne.jp",94],["j-cast.com",94],["j-town.net",94],["jablickar.cz",94],["javatpoint.com",94],["kinmaweb.jp",94],["kreuzwortraetsel.de",94],["kurashiru.com",94],["kyoteibiyori.com",94],["lacuarta.com",94],["laleggepertutti.it",94],["livenewschat.eu",94],["malaymail.com",94],["mamastar.jp",94],["mirrored.to",94],["modhub.us",94],["motscroises.fr",94],["nana-press.com",94],["nikkan-gendai.com",94],["nyitvatartas24.hu",94],["oeffnungszeitenbuch.de",94],["onecall2ch.com",94],["oraridiapertura24.it",94],["palabr.as",94],["persoenlich.com",94],["petitfute.com",94],["play-games.com",94],["powerpyx.com",94],["quefaire.be",94],["raetsel-hilfe.de",94],["ranking.net",94],["roleplayer.me",94],["rostercon.com",94],["samsungmagazine.eu",94],["slashdot.org",94],["sourceforge.net",94],["syosetu.com",94],["talkwithstranger.com",94],["the-crossword-solver.com",94],["thestockmarketwatch.com",94],["transparentcalifornia.com",94],["transparentnevada.com",94],["trilltrill.jp",94],["tvtv.ca",94],["tvtv.us",94],["ufret.jp",94],["verkaufsoffener-sonntag.com",94],["watchdocumentaries.com",94],["webdesignledger.com",94],["wetteronline.de",94],["wfmz.com",94],["winfuture.de",94],["word-grabber.com",94],["wort-suchen.de",94],["woxikon.*",94],["yugioh-starlight.com",94],["yutura.net",94],["zagreb.info",94],["2chblog.jp",94],["2monkeys.jp",94],["46matome.net",94],["akb48glabo.com",94],["akb48matomemory.com",94],["alfalfalfa.com",94],["all-nationz.com",94],["anihatsu.com",94],["aqua2ch.net",94],["blog.esuteru.com",94],["blog.livedoor.jp",94],["blog.jp",94],["blogo.jp",94],["chaos2ch.com",94],["choco0202.work",94],["crx7601.com",94],["danseisama.com",94],["dareda.net",94],["digital-thread.com",94],["doorblog.jp",94],["exawarosu.net",94],["fgochaldeas.com",94],["football-2ch.com",94],["gekiyaku.com",94],["golog.jp",94],["hacchaka.net",94],["heartlife-matome.com",94],["liblo.jp",94],["fesoku.net",94],["fiveslot777.com",94],["gamejksokuhou.com",94],["girlsreport.net",94],["girlsvip-matome.com",94],["grasoku.com",94],["gundamlog.com",94],["honyaku-channel.net",94],["ikarishintou.com",94],["imas-cg.net",94],["imihu.net",94],["inutomo11.com",94],["itainews.com",94],["itaishinja.com",94],["jin115.com",94],["jisaka.com",94],["jnews1.com",94],["jumpsokuhou.com",94],["jyoseisama.com",94],["keyakizaka46matomemory.net",94],["kidan-m.com",94],["kijoden.com",94],["kijolariat.net",94],["kijolifehack.com",94],["kijomatomelog.com",94],["kijyokatu.com",94],["kijyomatome.com",94],["kijyomatome-ch.com",94],["kijyomita.com",94],["kirarafan.com",94],["kitimama-matome.net",94],["kitizawa.com",94],["konoyubitomare.jp",94],["kotaro269.com",94],["kyousoku.net",94],["ldblog.jp",94],["livedoor.biz",94],["livedoor.blog",94],["majikichi.com",94],["matacoco.com",94],["matomeblade.com",94],["matomelotte.com",94],["matometemitatta.com",94],["mojomojo-licarca.com",94],["morikinoko.com",94],["nandemo-uketori.com",94],["netatama.net",94],["news-buzz1.com",94],["news30over.com",94],["nmb48-mtm.com",94],["norisoku.com",94],["npb-news.com",94],["ocsoku.com",94],["okusama-kijyo.com",94],["onihimechan.com",94],["orusoku.com",94],["otakomu.jp",94],["otoko-honne.com",94],["oumaga-times.com",94],["outdoormatome.com",94],["pachinkopachisro.com",94],["paranormal-ch.com",94],["recosoku.com",94],["s2-log.com",94],["saikyo-jump.com",94],["shuraba-matome.com",94],["ske48matome.net",94],["squallchannel.com",94],["sukattojapan.com",94],["sumaburayasan.com",94],["usi32.com",94],["uwakich.com",94],["uwakitaiken.com",94],["vault76.info",94],["vipnews.jp",94],["vippers.jp",94],["vipsister23.com",94],["vtubernews.jp",94],["watarukiti.com",94],["world-fusigi.net",94],["zakuzaku911.com",94],["zch-vip.com",94],["mafiatown.pl",95],["bitcotasks.com",96],["hilites.today",97],["udvl.com",98],["www.chip.de",[99,100,101,102]],["topsporter.net",103],["sportshub.to",103],["streamcheck.link",104],["myanimelist.net",105],["unofficialtwrp.com",106],["codec.kyiv.ua",106],["kimcilonlyofc.com",106],["bitcosite.com",107],["bitzite.com",107],["celebzcircle.com",108],["bi-girl.net",108],["ftuapps.*",108],["hentaiseason.com",108],["hoodtrendspredict.com",108],["marcialhub.xyz",108],["odiadance.com",108],["osteusfilmestuga.online",108],["ragnarokscanlation.opchapters.com",108],["sampledrive.org",108],["showflix.*",108],["swordalada.org",108],["tojimangas.com",108],["tvappapk.com",108],["twobluescans.com",[108,109]],["varnascan.xyz",108],["teluguflix.*",110],["hacoos.com",111],["watchhentai.net",112],["hes-goals.io",112],["pkbiosfix.com",112],["casi3.xyz",112],["bondagevalley.cc",113],["zefoy.com",114],["mailgen.biz",115],["tempinbox.xyz",115],["vidello.net",116],["newscon.org",117],["yunjiema.top",117],["pcgeeks-games.com",117],["resizer.myct.jp",118],["gametohkenranbu.sakuraweb.com",119],["jisakuhibi.jp",120],["rank1-media.com",120],["lifematome.blog",121],["fm.sekkaku.net",122],["free-avx.jp",123],["dvdrev.com",124],["betweenjpandkr.blog",125],["nft-media.net",126],["ghacks.net",127],["leak.sx",128],["paste.bin.sx",128],["pornleaks.in",128],["truyentranhfull.net",129],["fcportables.com",129],["repack-games.com",129],["ibooks.to",129],["blog.tangwudi.com",129],["filecatchers.com",129],["actvid.*",130],["zoechip.com",130],["nohost.one",130],["vidbinge.com",130],["nectareousoverelate.com",132],["khoaiphim.com",133],["haafedk2.com",134],["fordownloader.com",134],["jovemnerd.com.br",135],["totalcsgo.com",136],["vivamax.asia",137],["manysex.com",138],["gaminginfos.com",139],["tinxahoivn.com",140],["automoto.it",141],["codelivly.com",142],["tchatche.com",143],["cryptoearns.com",143],["lordchannel.com",144],["client.falixnodes.net",145],["novelhall.com",146],["madeeveryday.com",147],["maidenhead-advertiser.co.uk",147],["mardomreport.net",147],["melangery.com",147],["milestomemories.com",147],["modernmom.com",147],["momtastic.com",147],["mostlymorgan.com",147],["motherwellmag.com",147],["muddybootsanddiamonds.com",147],["musicfeeds.com.au",147],["mylifefromhome.com",147],["nationalreview.com",147],["nordot.app",147],["oakvillenews.org",147],["observer.com",147],["ourlittlesliceofheaven.com",147],["palachinkablog.com",147],["patheos.com",147],["pinkonthecheek.com",147],["politicususa.com",147],["predic.ro",147],["puckermom.com",147],["qtoptens.com",147],["realgm.com",147],["reelmama.com",147],["robbreport.com",147],["royalmailchat.co.uk",147],["samchui.com",147],["sandrarose.com",147],["sherdog.com",147],["sidereel.com",147],["silive.com",147],["simpleflying.com",147],["sloughexpress.co.uk",147],["spacenews.com",147],["sportsgamblingpodcast.com",147],["spotofteadesigns.com",147],["stacysrandomthoughts.com",147],["ssnewstelegram.com",147],["superherohype.com",[147,151]],["tablelifeblog.com",147],["thebeautysection.com",147],["thecelticblog.com",147],["thecurvyfashionista.com",147],["thefashionspot.com",147],["thegamescabin.com",147],["thenerdyme.com",147],["thenonconsumeradvocate.com",147],["theprudentgarden.com",147],["thethings.com",147],["timesnews.net",147],["topspeed.com",147],["toyotaklub.org.pl",147],["travelingformiles.com",147],["tutsnode.org",147],["viralviralvideos.com",147],["wannacomewith.com",147],["wimp.com",[147,151]],["windsorexpress.co.uk",147],["woojr.com",147],["worldoftravelswithkids.com",147],["worldsurfleague.com",147],["abc17news.com",[147,150]],["adoredbyalex.com",147],["agrodigital.com",[147,150]],["al.com",[147,150]],["aliontherunblog.com",[147,150]],["allaboutthetea.com",[147,150]],["allmovie.com",[147,150]],["allmusic.com",[147,150]],["allthingsthrifty.com",[147,150]],["amessagewithabottle.com",[147,150]],["androidpolice.com",147],["antyradio.pl",147],["artforum.com",[147,150]],["artnews.com",[147,150]],["awkward.com",[147,150]],["awkwardmom.com",[147,150]],["bailiwickexpress.com",147],["barnsleychronicle.com",[147,151]],["becomingpeculiar.com",147],["bethcakes.com",[147,151]],["blogher.com",[147,151]],["bluegraygal.com",[147,151]],["briefeguru.de",[147,151]],["carmagazine.co.uk",147],["cattime.com",147],["cbr.com",147],["chaptercheats.com",[147,151]],["cleveland.com",[147,151]],["collider.com",147],["comingsoon.net",147],["commercialobserver.com",[147,151]],["competentedigitale.ro",[147,151]],["crafty.house",147],["dailyvoice.com",[147,151]],["decider.com",[147,151]],["didyouknowfacts.com",[147,151]],["dogtime.com",[147,151]],["dualshockers.com",147],["dustyoldthing.com",147],["faithhub.net",147],["femestella.com",[147,151]],["footwearnews.com",[147,151]],["freeconvert.com",[147,151]],["frogsandsnailsandpuppydogtail.com",[147,151]],["fsm-media.com",147],["funtasticlife.com",[147,151]],["fwmadebycarli.com",[147,151]],["gamerant.com",147],["gfinityesports.com",147],["givemesport.com",147],["gulflive.com",[147,151]],["helloflo.com",147],["homeglowdesign.com",[147,151]],["honeygirlsworld.com",[147,151]],["hotcars.com",147],["howtogeek.com",147],["insider-gaming.com",147],["insurancejournal.com",147],["jasminemaria.com",[147,151]],["kion546.com",[147,151]],["lehighvalleylive.com",[147,151]],["lettyskitchen.com",[147,151]],["lifeinleggings.com",[147,151]],["liveandletsfly.com",147],["lizzieinlace.com",[147,151]],["localnews8.com",[147,151]],["lonestarlive.com",[147,151]],["makeuseof.com",147],["masslive.com",[147,151,257]],["movieweb.com",147],["nj.com",[147,151]],["nothingbutnewcastle.com",[147,151]],["nsjonline.com",[147,151]],["oregonlive.com",[147,151]],["pagesix.com",[147,151,257]],["pennlive.com",[147,151,257]],["screenrant.com",147],["sheknows.com",[147,151]],["syracuse.com",[147,151,257]],["thegamer.com",147],["tvline.com",[147,151]],["cheatsheet.com",148],["pwinsider.com",148],["baeldung.com",148],["mensjournal.com",148],["c-span.org",149],["15min.lt",150],["247sports.com",[150,257]],["barcablaugranes.com",151],["betweenenglandandiowa.com",151],["bgr.com",151],["blazersedge.com",151],["blu-ray.com",151],["brobible.com",151],["cagesideseats.com",151],["cbsnews.com",[151,257]],["cbssports.com",[151,257]],["celiacandthebeast.com",151],["clickondetroit.com",151],["dailydot.com",151],["dailykos.com",151],["eater.com",151],["eldiariony.com",151],["fark.com",151],["free-power-point-templates.com",151],["golfdigest.com",151],["ibtimes.co.in",151],["imgur.com",151],["indiewire.com",[151,257]],["intouchweekly.com",151],["knowyourmeme.com",151],["last.fm",151],["lifeandstylemag.com",151],["mandatory.com",151],["naszemiasto.pl",151],["nationalpost.com",151],["nbcsports.com",151],["news.com.au",151],["ninersnation.com",151],["nypost.com",[151,257]],["playstationlifestyle.net",151],["rollingstone.com",151],["sbnation.com",151],["sneakernews.com",151],["sport-fm.gr",151],["stylecaster.com",151],["tastingtable.com",151],["thecw.com",151],["thedailymeal.com",151],["theflowspace.com",151],["themarysue.com",151],["tokfm.pl",151],["torontosun.com",151],["usmagazine.com",151],["wallup.net",151],["worldstar.com",151],["worldstarhiphop.com",151],["yourcountdown.to",151],["bagi.co.in",152],["keran.co",152],["biblestudytools.com",153],["christianheadlines.com",153],["ibelieve.com",153],["kuponigo.com",154],["inxxx.com",155],["bemyhole.com",155],["ipaspot.app",156],["embedwish.com",157],["filelions.live",157],["leakslove.net",157],["jenismac.com",158],["vxetable.cn",159],["nizarstream.com",160],["snapwordz.com",161],["toolxox.com",161],["rl6mans.com",161],["faqwiki.us",161],["donghuaworld.com",162],["letsdopuzzles.com",163],["rediff.com",164],["igay69.com",165],["kimcilonly.link",166],["dzapk.com",167],["darknessporn.com",168],["familyporner.com",168],["freepublicporn.com",168],["pisshamster.com",168],["punishworld.com",168],["xanimu.com",168],["pig69.com",169],["cosplay18.pics",169],["sexwebvideo.com",169],["sexwebvideo.net",169],["tainio-mania.online",170],["eroticmoviesonline.me",171],["teleclub.xyz",172],["ecamrips.com",173],["showcamrips.com",173],["tucinehd.com",174],["worthcrete.com",174],["9animetv.to",175],["qiwi.gg",176],["jornadaperfecta.com",177],["loseart.com",178],["sousou-no-frieren.com",179],["unite-guide.com",180],["thebullspen.com",181],["receitasdaora.online",182],["streambucket.net",184],["nontongo.win",184],["player.smashy.stream",185],["player.smashystream.com",185],["hentaihere.com",185],["torrentdownload.*",187],["cineb.rs",187],["123animehub.cc",187],["tukipasti.com",187],["cataz.to",187],["netmovies.to",187],["hiraethtranslation.com",188],["all3do.com",189],["do7go.com",189],["d0000d.com",189],["d000d.com",189],["d0o0d.com",189],["do0od.com",189],["doods.pro",189],["doodstream.*",189],["dooodster.com",189],["ds2play.com",189],["ds2video.com",189],["vidply.com",189],["xfreehd.com",190],["freethesaurus.com",191],["thefreedictionary.com",191],["dexterclearance.com",192],["x86.co.kr",193],["onlyfaucet.com",194],["x-x-x.tube",195],["fdownloader.net",196],["thehackernews.com",197],["mielec.pl",198],["treasl.com",199],["mrbenne.com",200],["cnpics.org",201],["ovabee.com",201],["porn4f.com",201],["cnxx.me",201],["ai18.pics",201],["sportsonline.si",202],["fiuxy2.co",203],["animeunity.to",204],["tokopedia.com",205],["remixsearch.net",206],["remixsearch.es",206],["onlineweb.tools",206],["sharing.wtf",206],["2024tv.ru",207],["modrinth.com",208],["curseforge.com",208],["xnxxcom.xyz",209],["sportsurge.net",210],["joyousplay.xyz",210],["quest4play.xyz",[210,212]],["generalpill.net",210],["moneycontrol.com",211],["cookiewebplay.xyz",212],["ilovetoplay.xyz",212],["streamcaster.live",212],["weblivehdplay.ru",212],["oaaxpgp3.xyz",213],["m9.news",214],["callofwar.com",215],["secondhandsongs.com",216],["nudezzers.org",217],["send.cm",218],["send.now",218],["3rooodnews.net",219],["xxxbfvideo.net",220],["filmy4wap.co.in",221],["filmy4waps.org",221],["gameshop4u.com",222],["regenzi.site",222],["historicaerials.com",223],["handirect.fr",224],["animefenix.tv",225],["fsiblog3.club",226],["kamababa.desi",226],["sat-sharing.com",226],["getfiles.co.uk",227],["genelify.com",228],["dhtpre.com",229],["xbaaz.com",230],["lineupexperts.com",232],["fearmp4.ru",233],["fbstreams.*",234],["m.shuhaige.net",235],["streamingnow.mov",236],["thesciencetoday.com",237],["sportnews.to",237],["ghbrisk.com",239],["iplayerhls.com",239],["bacasitus.com",240],["katoikos.world",240],["abstream.to",241],["pawastreams.pro",242],["rebajagratis.com",243],["tv.latinlucha.es",243],["fetcheveryone.com",244],["reviewdiv.com",245],["laurelberninteriors.com",246],["godlike.com",247],["godlikeproductions.com",247],["apex2nova.com",248],["botcomics.com",249],["cefirates.com",249],["chandlerorchards.com",249],["comicleaks.com",249],["marketdata.app",249],["monumentmetals.com",249],["tapmyback.com",249],["ping.gg",249],["revistaferramental.com.br",249],["hawpar.com",249],["alpacafinance.org",[249,250]],["nookgaming.com",249],["enkeleksamen.no",249],["kvest.ee",249],["creatordrop.com",249],["panpots.com",249],["cybernetman.com",249],["bitdomain.biz",249],["gerardbosch.xyz",249],["fort-shop.kiev.ua",249],["accuretawealth.com",249],["resourceya.com",249],["tracktheta.com",249],["camberlion.com",249],["replai.io",249],["trybawaryjny.pl",249],["segops.madisonspecs.com",249],["stresshelden-coaching.de",249],["controlconceptsusa.com",249],["ryaktive.com",249],["tip.etip-staging.etip.io",249],["tt.live",250],["future-fortune.com",250],["adventuretix.com",250],["bolighub.dk",250],["panprices.com",251],["intercity.technology",251],["freelancer.taxmachine.be",251],["adria.gg",251],["fjlaboratories.com",251],["emanualonline.com",251],["abhijith.page",251],["helpmonks.com",251],["dataunlocker.com",252],["proboards.com",253],["winclassic.net",253],["farmersjournal.ie",254],["pandadoc.com",256],["abema.tv",258]]);
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
