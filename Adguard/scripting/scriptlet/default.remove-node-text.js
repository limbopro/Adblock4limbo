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
                    return tt.createPolicy(getRandomToken(), out);
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

function getRandomToken() {
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
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
const argsList = [["script","DisplayAcceptableAdIfAdblocked"],["script","adslotFilledByCriteo"],["script","/==undefined.*body/"],["script","\"Anzeige\""],["script","adserverDomain"],["script","Promise"],["script","/adbl/i"],["script","Reflect"],["script","document.write"],["script","deblocker"],["script","self == top"],["script","/popunder|isAdBlock|admvn.src/i"],["script","exdynsrv"],["script","adsbygoogle"],["script","FingerprintJS"],["script","/h=decodeURIComponent|popundersPerIP/"],["script","/adblock.php"],["script","/adb/i"],["script","/document\\.createElement|\\.banner-in/"],["script","admbenefits"],["script","WebAssembly"],["script","/\\badblock\\b/"],["script","myreadCookie"],["script","ExoLoader"],["script","/?key.*open/","condition","key"],["script","adblock"],["script","homad"],["script","popUnderUrl"],["script","Adblock"],["script","/ABDetected|navigator.brave|fetch/"],["script","/ai_|b2a/"],["script","/bypass.php"],["script","htmls"],["script","/\\/detected\\.html|Adblock/"],["script","toast"],["script","AdbModel"],["script","/popup/i"],["script","antiAdBlockerHandler"],["script","/ad\\s?block|adsBlocked|document\\.write\\(unescape\\('|devtool/i"],["script","onerror"],["script","location.assign"],["script","location.href"],["script","/checkAdBlocker|AdblockRegixFinder/"],["script","catch"],["script",";break;case $."],["script","adb_detected"],["script","window.open"],["script","/aclib|break;|zoneNativeSett/"],["script","/fetch|popupshow/"],["script","justDetectAdblock"],["script","/FingerprintJS|openPopup/"],["script","DisableDevtool"],["script","/adsbygoogle|detectAdBlock/"],["script","onDevToolOpen"],["script","/WebAssembly|forceunder/"],["script","/isAdBlocked|popUnderUrl/"],["script","popundersPerIP"],["script","wpadmngr.com"],["script","/adb|offsetWidth/i"],["script","contextmenu"],["script","/adblock|var Data.*];/"],["script","var Data"],["script","replace"],["script",";}}};break;case $."],["script","globalThis;break;case"],["script","{delete window["],["style","text-decoration"],["script","/break;case|FingerprintJS/"],["script","push"],["script","AdBlocker"],["script","clicky"],["script","charCodeAt"],["script","/h=decodeURIComponent|\"popundersPerIP\"/"],["script","popMagic"],["script","/popMagic|pop1stp/"],["script","localStorage"],["script","popunder"],["script","adbl"],["script","googlesyndication"],["script","blockAdBlock"],["script","/adblock|location\\.replace/"],["script","/downloadJSAtOnload|Object.prototype.toString.call/"],["script","numberPages"],["script","brave"],["script","error-report.com"],["script","KCgpPT57bGV0IGU"],["script","adShield"],["script","Ad-Shield"],["script",".xyz/script/"],["script","adrecover.com"],["script","html-load.com"],["script","AreLoaded"],["script","AdblockRegixFinder"],["script","/adScript|adsBlocked/"],["script","serve"],["script","?metric=transit.counter&key=fail_redirect&tags="],["script","/pushAdTag|link_click|getAds/"],["script","/\\', [0-9]{5}\\)\\]\\; \\}/"],["script","/\\\",\\\"clickp\\\"\\:\\\"[0-9]{1,2}\\\"/"],["script","/ConsoleBan|alert|AdBlocker/"],["script","runPop"],["style","body:not(.ownlist)"],["script","mdpDeblocker"],["script","alert","condition","adblock"],["script","/decodeURIComponent\\(escape|fairAdblock/"],["script","/ai_|googletag|adb/"],["script","/deblocker|chp_ad/"],["script","await fetch"],["script","AdBlock"],["script","innerHTML"],["script","/'.adsbygoogle'|text-danger|warning|Adblock|_0x/"],["script","insertAdjacentHTML"],["script","popUnder"],["script","adb"],["#text","/スポンサーリンク|Sponsored Link|广告/"],["#text","スポンサーリンク"],["#text","スポンサードリンク"],["#text","/\\[vkExUnit_ad area=(after|before)\\]/"],["#text","【広告】"],["#text","【PR】"],["#text","関連動画"],["#text","PR:"],["script","leave_recommend"],["#text","/Advertisement/"],["script","navigator.brave"],["script","ai_adb"],["script","HTMLAllCollection"],["script","liedetector"],["script","popWin"],["script","end_click"],["script","ad blocker"],["script","closeAd"],["script","/adconfig/i"],["script","AdblockDetector"],["script","is_antiblock_refresh"],["script","/userAgent|adb|htmls/"],["script","myModal"],["script","app_checkext"],["script","clientHeight"],["script","await"],["script","Object.keys(window.adngin).length"],["script","axios"],["script","\"v4ac1eiZr0\""],["script","admiral"],["script","'').split(',')[4]"],["script","\"\").split(\",\")[4]"],["script","/\"v4ac1eiZr0\"|\"\"\\)\\.split\\(\",\"\\)\\[4\\]|(\\.localStorage\\)|JSON\\.parse\\(\\w)\\.getItem\\(\"/"],["script","/charAt|XMLHttpRequest/"],["script","AdBlockEnabled"],["script","window.location.replace"],["script","/$.*open/"],["script","Brave"],["script","egoTab"],["script","abDetectorPro"],["script","/$.*(css|oncontextmenu)/"],["script","/eval.*RegExp/"],["script","wwads"],["script","/\\[\\'push\\'\\]/"],["script","/adblock/i"],["script","/$.*adUnits/"],["script","RegExp"],["script","doOpen"],["script","/ads?Block/i"],["script","chkADB"],["script","Symbol.iterator"],["script","ai_cookie"],["script","/innerHTML.*appendChild/"],["script","Exo"],["script","detectAdBlock"],["script","AaDetector"],["script","popup"],["script","/window\\[\\'open\\'\\]/"],["script","Error"],["script","/document\\.head\\.appendChild|window\\.open/"],["script","pop1stp"],["script","Number"],["script","NEXT_REDIRECT"],["script","ad-block-activated"],["script","insertBefore"],["script","pop.doEvent"],["script","detect"],["script","fetch"],["script","/hasAdblock|detect/"],["script","document.createTextNode"],["script","/h=decodeURIComponent|popundersPerIP|adserverDomain/"],["script","/shown_at|WebAssembly/"],["script","style"],["script","shown_at"],["script","adsSrc"],["script","/adblock|popunder|openedPop|WebAssembly/"],["script","/popMagic|nativeads|navigator\\.brave|\\.abk_msg|\\.innerHTML|ad block|manipulation/"],["script","window.warn"],["script","adBlock"],["script","adBlockDetected"],["script","/fetch|adb/i"],["script","location"],["script","showAd"],["script","imgSrc"],["script","document.createElement(\"script\")"],["script","antiAdBlock"],["script","/fairAdblock|popMagic/"],["script","/pop1stp|detectAdBlock/"],["script","aclib.runPop"],["script","mega-enlace.com/ext.php?o="],["script","Popup"],["script","displayAdsV3"],["script","adblocker"],["script","break;case"],["h2","/creeperhost/i"],["script","/interceptClickEvent|onbeforeunload|popMagic|location\\.replace/"],["script","/adserverDomain|\\);break;case /"],["script","initializeInterstitial"],["script","popupBackground"],["script","Math.floor"],["script","m9-ad-modal"],["script","Anzeige"],["script","blocking"],["script","adBlockNotice"],["script","LieDetector"],["script","advads"],["script","document.cookie"],["script","/h=decodeURIComponent|popundersPerIP|window\\.open|\\.createElement/"],["script","/_0x|brave|onerror/"],["script","window.googletag.pubads"],["script","kmtAdsData"],["script","wpadmngr"],["script","navigator.userAgent"],["script","checkAdBlock"],["script","detectedAdblock"],["script","setADBFlag"],["script","/h=decodeURIComponent|popundersPerIP|wpadmngr|popMagic/"],["script","/wpadmngr|adserverDomain/"],["script","/account_ad_blocker|tmaAB/"],["script","ads_block"],["script","/adserverDomain|delete window|FingerprintJS/"],["script","return a.split"],["script","/popundersPerIP|adserverDomain|wpadmngr/"],["script","==\"]"],["script","ads-blocked"],["script","#adbd"],["script","AdBl"],["script","/adblock|Cuba|noadb/i"],["script","/adserverDomain|ai_cookie/"],["script","/adsBlocked|\"popundersPerIP\"/"],["script","ab.php"],["script","wpquads_adblocker_check"],["script","callbackAdsBlocked"],["script","__adblocker"],["script","/join\\(\\'\\'\\)/"],["script","/join\\(\\\"\\\"\\)/"],["script","api.dataunlocker.com"],["script","/^Function\\(\\\"/"],["script","vglnk"],["script","/detect|FingerprintJS/"],["script","/RegExp\\(\\'/","condition","RegExp"],["script","adBlockEnabled"],["script","\"data-adm-url\""],["script","NREUM"]];
const hostnamesMap = new Map([["alpin.de",0],["boersennews.de",0],["chefkoch.de",0],["chip.de",0],["clever-tanken.de",0],["desired.de",0],["donnerwetter.de",0],["fanfiktion.de",0],["focus.de",0],["formel1.de",0],["frustfrei-lernen.de",0],["gewinnspiele.tv",0],["giga.de",0],["gut-erklaert.de",0],["kino.de",0],["messen.de",0],["nickles.de",0],["nordbayern.de",0],["spielfilm.de",0],["teltarif.de",[0,1]],["unsere-helden.com",0],["weltfussball.at",0],["watson.de",0],["moviepilot.de",[0,5]],["mactechnews.de",0],["sport1.de",0],["welt.de",0],["sport.de",0],["allthingsvegas.com",2],["100percentfedup.com",2],["beforeitsnews.com",2],["concomber.com",2],["conservativebrief.com",2],["conservativefiringline.com",2],["dailylol.com",2],["funnyand.com",2],["letocard.fr",2],["mamieastuce.com",2],["meilleurpronostic.fr",2],["patriotnationpress.com",2],["toptenz.net",2],["vitamiiin.com",2],["writerscafe.org",2],["populist.press",2],["dailytruthreport.com",2],["livinggospeldaily.com",2],["first-names-meanings.com",2],["welovetrump.com",2],["thehayride.com",2],["thelibertydaily.com",2],["thepoke.co.uk",2],["thepolitistick.com",2],["theblacksphere.net",2],["shark-tank.com",2],["naturalblaze.com",2],["greatamericanrepublic.com",2],["dailysurge.com",2],["truthlion.com",2],["flagandcross.com",2],["westword.com",2],["republicbrief.com",2],["freedomfirstnetwork.com",2],["phoenixnewtimes.com",2],["designbump.com",2],["clashdaily.com",2],["madworldnews.com",2],["reviveusa.com",2],["sonsoflibertymedia.com",2],["thedesigninspiration.com",2],["videogamesblogger.com",2],["protrumpnews.com",2],["thepalmierireport.com",2],["kresy.pl",2],["thepatriotjournal.com",2],["gellerreport.com",2],["thegatewaypundit.com",2],["wltreport.com",2],["miaminewtimes.com",2],["politicalsignal.com",2],["rightwingnews.com",2],["bigleaguepolitics.com",2],["comicallyincorrect.com",2],["web.de",3],["skidrowreloaded.com",[4,15]],["wawacity.*",4],["720pstream.*",[4,63]],["embedsports.me",[4,67]],["embedstream.me",[4,14,15,63,67]],["jumbtv.com",[4,67]],["reliabletv.me",[4,67]],["topembed.pw",[4,65,212]],["crackstreamer.net",4],["methstreamer.com",4],["rnbastreams.com",4],["vidsrc.*",[4,14,63]],["1stream.eu",4],["4kwebplay.xyz",4],["anime4i.vip",4],["antennasports.ru",4],["buffsports.me",[4,63]],["buffstreams.app",4],["claplivehdplay.ru",[4,212]],["cracksports.me",[4,14]],["euro2024direct.ru",4],["ext.to",4],["extreme-down.*",4],["eztv.tf",4],["eztvx.to",4],["flix-wave.*",4],["hikaritv.xyz",4],["kenitv.me",[4,14,15]],["lewblivehdplay.ru",[4,212]],["mixdrop.*",[4,15]],["mlbbite.net",4],["mlbstreams.ai",4],["qatarstreams.me",[4,14]],["qqwebplay.xyz",[4,212]],["sanet.*",4],["soccerworldcup.me",[4,14]],["sportshd.*",4],["topstreams.info",4],["totalsportek.to",4],["viwlivehdplay.ru",4],["vidco.pro",[4,63]],["userupload.*",6],["cinedesi.in",6],["intro-hd.net",6],["monacomatin.mc",6],["nodo313.net",6],["hesgoal-tv.io",6],["hesgoal-vip.io",6],["earn.punjabworks.com",6],["mahajobwala.in",6],["solewe.com",6],["pahe.*",[7,15,65]],["soap2day.*",7],["yts.mx",8],["magesypro.com",9],["pinsystem.co.uk",9],["elrellano.com",9],["tinyppt.com",9],["veganab.co",9],["camdigest.com",9],["learnmany.in",9],["amanguides.com",[9,35]],["highkeyfinance.com",[9,35]],["appkamods.com",9],["techacode.com",9],["djqunjab.in",9],["downfile.site",9],["expertvn.com",9],["trangchu.news",9],["3dmodelshare.org",9],["nulleb.com",9],["asiaon.top",9],["reset-scans.*",9],["coursesghar.com",9],["thecustomrom.com",9],["snlookup.com",9],["bingotingo.com",9],["ghior.com",9],["3dmili.com",9],["karanpc.com",9],["plc247.com",9],["apkdelisi.net",9],["freepasses.org",9],["poplinks.*",[9,39]],["tomarnarede.pt",9],["basketballbuzz.ca",9],["dribbblegraphics.com",9],["kemiox.com",9],["teksnologi.com",9],["bharathwick.com",9],["descargaspcpro.net",9],["dx-tv.com",9],["rt3dmodels.com",9],["plc4me.com",9],["blisseyhusbands.com",9],["mhdsports.*",9],["mhdsportstv.*",9],["mhdtvsports.*",9],["mhdtvworld.*",9],["mhdtvmax.*",9],["mhdstream.*",9],["madaradex.org",9],["trigonevo.com",9],["franceprefecture.fr",9],["jazbaat.in",9],["aipebel.com",9],["audiotools.blog",9],["embdproxy.xyz",9],["hqq.*",10],["waaw.*",10],["upornia.com",11],["pixhost.*",12],["germancarforum.com",13],["cybercityhelp.in",13],["innateblogger.com",13],["omeuemprego.online",13],["viprow.*",[14,15,63]],["bluemediadownload.*",14],["bluemediafile.*",14],["bluemedialink.*",14],["bluemediastorage.*",14],["bluemediaurls.*",14],["urlbluemedia.*",14],["streamnoads.com",[14,15,54,63]],["bowfile.com",14],["cloudvideo.tv",[14,63]],["cloudvideotv.*",[14,63]],["coloredmanga.com",14],["exeo.app",14],["hiphopa.net",[14,15]],["megaup.net",14],["olympicstreams.co",[14,63]],["tv247.us",[14,15]],["uploadhaven.com",14],["userscloud.com",[14,63]],["mlbbox.me",14],["vikingf1le.us.to",14],["neodrive.xyz",14],["mdfx9dc8n.net",15],["mdzsmutpcvykb.net",15],["mixdrop21.net",15],["mixdropjmk.pw",15],["123-movies.*",15],["123movieshd.*",15],["123movieshub.*",15],["123moviesme.*",15],["1337x.*",[15,186]],["141jav.com",15],["1bit.space",15],["1bitspace.com",15],["1stream.*",15],["1tamilmv.*",15],["2ddl.*",15],["2umovies.*",15],["345movies.com",15],["3dporndude.com",15],["3hiidude.*",15],["4archive.org",15],["4horlover.com",15],["4stream.*",15],["560pmovie.com",15],["5movies.*",15],["7hitmovies.*",15],["85tube.com",15],["85videos.com",15],["9xmovie.*",15],["aagmaal.*",[15,63]],["acefile.co",15],["actusports.eu",15],["adblockeronstape.*",[15,54]],["adblockeronstreamtape.*",15],["adblockplustape.*",[15,54]],["adblockstreamtape.*",[15,54]],["adblockstrtape.*",[15,54]],["adblockstrtech.*",[15,54]],["adblocktape.*",[15,54]],["adclickersbot.com",15],["adcorto.*",15],["adricami.com",15],["adslink.pw",15],["adultstvlive.com",15],["adz7short.space",15],["aeblender.com",15],["ahdafnews.blogspot.com",15],["ak47sports.com",15],["akuma.moe",15],["alexsports.*",15],["alexsportss.*",15],["alexsportz.*",15],["allplayer.tk",15],["amateurblog.tv",15],["androidadult.com",[15,238]],["anhsexjav.xyz",15],["anidl.org",15],["anime-loads.org",15],["animeblkom.net",15],["animefire.plus",15],["animelek.me",15],["animepahe.*",15],["animesanka.*",15],["animespire.net",15],["animestotais.xyz",15],["animeyt.es",15],["animixplay.*",15],["aniplay.*",15],["anroll.net",15],["antiadtape.*",[15,54]],["anymoviess.xyz",15],["aotonline.org",15],["asenshu.com",15],["asialiveaction.com",15],["asianclipdedhd.net",15],["asianclub.*",15],["ask4movie.*",15],["askim-bg.com",15],["asumsikedaishop.com",15],["atomixhq.*",[15,63]],["atomohd.*",15],["avcrempie.com",15],["avseesee.com",15],["gettapeads.com",[15,54]],["backfirstwo.com",15],["bajarjuegospcgratis.com",15],["balkanportal.net",15],["balkanteka.net",15],["bdnewszh.com",[15,63]],["beinmatch.*",[15,24]],["belowporn.com",15],["bestgirlsexy.com",15],["bestnhl.com",15],["bestporn4free.com",15],["bestporncomix.com",15],["bet36.es",15],["bgwp.cc",[15,20]],["bhaai.*",15],["bikinitryon.net",15],["birdurls.com",15],["bitsearch.to",15],["blackcockadventure.com",15],["blackcockchurch.org",15],["blackporncrazy.com",15],["blizzboygames.net",15],["blizzpaste.com",15],["blkom.com",15],["blog-peliculas.com",15],["blogtrabalhista.com",15],["blurayufr.*",15],["bobsvagene.club",15],["bolly4umovies.click",15],["bonusharian.pro",15],["brilian-news.id",15],["brupload.net",15],["bucitana.com",15],["buffstreams.*",15],["camchickscaps.com",15],["camgirlcum.com",15],["camgirls.casa",15],["canalesportivo.*",15],["cashurl.in",15],["castingx.net",15],["ccurl.net",[15,63]],["celebrity-leaks.net",15],["cgpelis.net",15],["charexempire.com",15],["choosingnothing.com",15],["clasico.tv",15],["clickndownload.*",15],["clicknupload.*",15],["clik.pw",15],["coin-free.com",[15,32]],["coins100s.fun",15],["comicsmanics.com",15],["compucalitv.com",15],["coolcast2.com",15],["cosplaytab.com",15],["countylocalnews.com",15],["cpmlink.net",15],["crackstreamshd.click",15],["crespomods.com",15],["crisanimex.com",15],["crunchyscan.fr",15],["cuevana3.fan",15],["cuevana3hd.com",15],["cumception.com",15],["cutpaid.com",15],["daddylive.*",[15,63,210]],["daddylivehd.*",[15,63]],["dailyuploads.net",15],["datawav.club",15],["daughtertraining.com",15],["ddrmovies.*",15],["deepgoretube.site",15],["deltabit.co",15],["deporte-libre.top",15],["depvailon.com",15],["derleta.com",15],["desiremovies.*",15],["desivdo.com",15],["desixx.net",15],["detikkebumen.com",15],["deutschepornos.me",15],["devlib.*",15],["diasoft.xyz",15],["directupload.net",15],["diskusscan.com",15],["divxtotal.*",15],["divxtotal1.*",15],["dixva.com",15],["dlhd.*",15],["doctormalay.com",15],["dofusports.xyz",15],["dogemate.com",15],["doods.cam",15],["doodskin.lat",15],["downloadrips.com",15],["downvod.com",15],["dphunters.mom",15],["dragontranslation.com",15],["dvdfullestrenos.com",15],["dvdplay.*",[15,63]],["ebookbb.com",15],["ebookhunter.net",15],["egyanime.com",15],["egygost.com",15],["egyshare.cc",15],["ekasiwap.com",15],["electro-torrent.pl",15],["elil.cc",15],["elixx.*",15],["enjoy4k.*",15],["eplayer.click",15],["erovoice.us",15],["eroxxx.us",15],["estrenosdoramas.net",15],["estrenosflix.*",15],["estrenosflux.*",15],["estrenosgo.*",15],["everia.club",15],["everythinginherenet.blogspot.com",15],["extrafreetv.com",15],["extremotvplay.com",15],["f1stream.*",15],["fapinporn.com",15],["fapptime.com",15],["fashionblog.tv",15],["fastreams.live",15],["faucethero.com",15],["fbstream.*",15],["fembed.com",15],["femdom-joi.com",15],["file4go.*",15],["fileone.tv",15],["film1k.com",15],["filmeonline2023.net",15],["filmesonlinex.org",15],["filmesonlinexhd.biz",[15,63]],["filmovitica.com",15],["filmymaza.blogspot.com",15],["filmyzilla.*",[15,63]],["filthy.family",15],["findav.*",15],["findporn.*",15],["fixfinder.click",15],["flixmaza.*",15],["flizmovies.*",15],["flostreams.xyz",15],["flyfaucet.com",15],["footyhunter.lol",15],["forex-trnd.com",15],["forumchat.club",15],["forumlovers.club",15],["freemoviesonline.biz",15],["freeomovie.co.in",15],["freeomovie.to",15],["freeporncomic.net",15],["freepornhdonlinegay.com",15],["freeproxy.io",15],["freetvsports.*",15],["freeuse.me",15],["freeusexporn.com",15],["fsharetv.cc",15],["fsicomics.com",15],["fullymaza.*",15],["g3g.*",15],["galinhasamurai.com",15],["gamepcfull.com",15],["gameronix.com",15],["gamesfullx.com",15],["gameshdlive.net",15],["gamesmountain.com",15],["gamesrepacks.com",15],["gamingguru.fr",15],["gamovideo.com",15],["garota.cf",15],["gaydelicious.com",15],["gaypornmasters.com",15],["gaysex69.net",15],["gemstreams.com",15],["get-to.link",15],["girlscanner.org",15],["giurgiuveanul.ro",15],["gledajcrtace.xyz",15],["gocast2.com",15],["gomo.to",15],["gostosa.cf",15],["gotxx.*",15],["grantorrent.*",15],["gtlink.co",15],["gwiazdypornosow.pl",15],["haho.moe",15],["hatsukimanga.com",15],["hayhd.net",15],["hdmoviesfair.*",[15,63]],["hdmoviesflix.*",15],["hdsaprevodom.com",15],["hdstreamss.club",15],["hentais.tube",15],["hentaistream.co",15],["hentaitk.net",15],["hentaitube.online",15],["hentaiworld.tv",15],["hesgoal.tv",15],["hexupload.net",15],["hhkungfu.tv",15],["highlanderhelp.com",15],["hiidudemoviez.*",15],["hindimean.com",15],["hindimovies.to",[15,63]],["hiperdex.com",15],["hispasexy.org",15],["hitprn.com",15],["hoca4u.com",15],["hollymoviehd.cc",15],["hoodsite.com",15],["hopepaste.download",15],["hornylips.com",15],["hotgranny.live",15],["hotmama.live",15],["hqcelebcorner.net",15],["huren.best",15],["hwnaturkya.com",[15,63]],["hxfile.co",[15,63]],["igfap.com",15],["iklandb.com",15],["illink.net",15],["imgkings.com",15],["imgsen.*",15],["imgsex.xyz",15],["imgsto.*",15],["imx.to",15],["incest.*",15],["incestflix.*",15],["influencersgonewild.org",15],["infosgj.free.fr",15],["investnewsbrazil.com",15],["itdmusics.com",15],["itopmusic.*",15],["itsuseful.site",15],["itunesfre.com",15],["iwatchfriendsonline.net",[15,127]],["jackstreams.com",15],["jatimupdate24.com",15],["jav-fun.cc",15],["jav-noni.cc",15],["jav-scvp.com",15],["javcl.com",15],["javf.net",15],["javhay.net",15],["javhoho.com",15],["javhun.com",15],["javleak.com",15],["javmost.*",15],["javporn.best",15],["javsek.net",15],["javsex.to",15],["javtiful.com",[15,17]],["jimdofree.com",15],["jiofiles.org",15],["jorpetz.com",15],["jp-films.com",15],["jpop80ss3.blogspot.com",15],["jpopsingles.eu",[15,188]],["kantotflix.net",15],["kantotinyo.com",15],["kaoskrew.org",15],["kaplog.com",15],["keeplinks.*",15],["keepvid.*",15],["keralahd.*",15],["keralatvbox.com",15],["khatrimazaful.*",15],["khatrimazafull.*",[15,57]],["kickassanimes.io",15],["kimochi.info",15],["kimochi.tv",15],["kinemania.tv",15],["konstantinova.net",15],["koora-online.live",15],["kunmanga.com",15],["kutmoney.com",15],["kwithsub.com",15],["lat69.me",15],["latinblog.tv",15],["latinomegahd.net",15],["leechall.*",15],["leechpremium.link",15],["legendas.dev",15],["legendei.net",15],["lightdlmovies.blogspot.com",15],["lighterlegend.com",15],["linclik.com",15],["linkebr.com",15],["linkrex.net",15],["linkshorts.*",15],["lulu.st",15],["lulustream.com",[15,65]],["luluvdo.com",15],["manga-oni.com",15],["mangaboat.com",15],["mangagenki.me",15],["mangahere.onl",15],["mangaweb.xyz",15],["mangoporn.net",15],["mangovideo.*",15],["manhwahentai.me",15],["masahub.com",15],["masahub.net",15],["masaporn.*",15],["maturegrannyfuck.com",15],["mdy48tn97.com",15],["mediapemersatubangsa.com",15],["mega-mkv.com",15],["megapastes.com",15],["megapornpics.com",15],["messitv.net",15],["meusanimes.net",15],["milfmoza.com",15],["milfzr.com",15],["millionscast.com",15],["mimaletamusical.blogspot.com",15],["miniurl.*",15],["mirrorace.*",15],["mitly.us",15],["mixdroop.*",15],["mkv-pastes.com",15],["mkvcage.*",15],["mlbstream.*",15],["mlsbd.*",15],["mmsbee.*",15],["monaskuliner.ac.id",15],["moredesi.com",15],["motogpstream.*",15],["movgotv.net",15],["movi.pk",15],["movieplex.*",15],["movierulzlink.*",15],["movies123.*",15],["moviesflix.*",15],["moviesmeta.*",15],["moviessources.*",15],["moviesverse.*",15],["movieswbb.com",15],["moviewatch.com.pk",15],["moviezwaphd.*",15],["mp4upload.com",15],["mrskin.live",15],["mrunblock.*",15],["multicanaistv.com",15],["mundowuxia.com",15],["myeasymusic.ir",15],["myonvideo.com",15],["myyouporn.com",15],["narutoget.info",15],["naughtypiss.com",15],["nbastream.*",15],["nerdiess.com",15],["new-fs.eu",15],["newmovierulz.*",15],["newtorrentgame.com",15],["nflstream.*",15],["nflstreams.me",15],["nhlstream.*",15],["niaomea.me",[15,63]],["nicekkk.com",15],["nicesss.com",15],["nlegs.com",15],["noblocktape.*",[15,54]],["nocensor.*",15],["nolive.me",[15,63]],["notformembersonly.com",15],["novamovie.net",15],["novelpdf.xyz",15],["novelssites.com",[15,63]],["novelup.top",15],["nsfwr34.com",15],["nu6i-bg-net.com",15],["nudebabesin3d.com",15],["nukedfans.com",15],["nuoga.eu",15],["nzbstars.com",15],["o2tvseries.com",15],["ohjav.com",15],["ojearnovelas.com",15],["okanime.xyz",15],["olweb.tv",15],["on9.stream",15],["onepiece-mangaonline.com",15],["onifile.com",15],["onionstream.live",15],["onlinesaprevodom.net",15],["onlyfams.*",15],["onlyfullporn.video",15],["onplustv.live",15],["originporn.com",15],["ouo.*",15],["ovagames.com",15],["ovamusic.com",15],["packsporn.com",15],["pahaplayers.click",15],["palimas.org",15],["password69.com",15],["pastemytxt.com",15],["payskip.org",15],["pctfenix.*",[15,63]],["pctnew.*",[15,63]],["peeplink.in",15],["peliculas24.*",15],["peliculasmx.net",15],["pelisplus.*",15],["pervertgirlsvideos.com",15],["pervyvideos.com",15],["phim12h.com",15],["picdollar.com",15],["pickteenz.com",15],["picsxxxporn.com",15],["pinayscandalz.com",15],["pinkueiga.net",15],["piratebay.*",15],["piratefast.xyz",15],["piratehaven.xyz",15],["pirateiro.com",15],["pirlotvonline.org",15],["playtube.co.za",15],["plugintorrent.com",15],["plyjam.*",15],["plylive.*",15],["plyvdo.*",15],["pmvzone.com",15],["porndish.com",15],["pornez.net",15],["pornfetishbdsm.com",15],["pornfits.com",15],["pornhd720p.com",15],["pornhoarder.*",[15,231]],["pornobr.club",15],["pornobr.ninja",15],["pornodominicano.net",15],["pornofaps.com",15],["pornoflux.com",15],["pornotorrent.com.br",15],["pornredit.com",15],["pornstarsyfamosas.es",15],["pornstreams.co",15],["porntn.com",15],["pornxbit.com",15],["pornxday.com",15],["portaldasnovinhas.shop",15],["portugues-fcr.blogspot.com",15],["poscitesch.com",[15,63]],["poseyoung.com",15],["pover.org",15],["prbay.*",15],["projectfreetv.*",15],["proxybit.*",15],["proxyninja.org",15],["psarips.*",15],["pubfilmz.com",15],["publicsexamateurs.com",15],["punanihub.com",15],["putlocker5movies.org",15],["pxxbay.com",15],["r18.best",15],["racaty.*",15],["ragnaru.net",15],["rapbeh.net",15],["rapelust.com",15],["rapload.org",15],["read-onepiece.net",15],["remaxhd.*",15],["retro-fucking.com",15],["retrotv.org",15],["rintor.*",15],["rnbxclusive.*",15],["rnbxclusive0.*",15],["rnbxclusive1.*",15],["robaldowns.com",15],["rockdilla.com",15],["rojadirecta.*",15],["rojadirectaenvivo.*",15],["rojadirectatvenvivo.com",15],["rojitadirecta.blogspot.com",15],["romancetv.site",15],["rsoccerlink.site",15],["rugbystreams.*",15],["rule34.club",15],["rule34hentai.net",15],["rumahbokep-id.com",15],["sadisflix.*",15],["safego.cc",15],["safetxt.*",15],["sakurafile.com",15],["satoshi-win.xyz",15],["scat.gold",15],["scatfap.com",15],["scatkings.com",15],["scnlog.me",15],["scripts-webmasters.net",15],["serie-turche.com",15],["serijefilmovi.com",15],["sexcomics.me",15],["sexdicted.com",15],["sexgay18.com",15],["sexofilm.co",15],["sextgem.com",15],["sextubebbw.com",15],["sgpics.net",15],["shadowrangers.*",15],["shadowrangers.live",15],["shahee4u.cam",15],["shahi4u.*",15],["shahid4u1.*",15],["shahid4uu.*",15],["shahiid-anime.net",15],["shavetape.*",15],["shemale6.com",15],["shid4u.*",15],["shinden.pl",15],["short.es",15],["shortearn.*",15],["shorten.*",15],["shorttey.*",15],["shortzzy.*",15],["showmanga.blog.fc2.com",15],["shrt10.com",15],["shurt.pw",15],["sideplusleaks.net",15],["silverblog.tv",15],["silverpic.com",15],["sinhalasub.life",15],["sinsitio.site",15],["sinvida.me",15],["skidrowcpy.com",15],["skidrowfull.com",15],["skymovieshd.*",15],["slut.mom",15],["smallencode.me",15],["smoner.com",15],["smplace.com",15],["soccerinhd.com",[15,63]],["socceron.name",15],["socceronline.*",[15,63]],["softairbay.com",15],["softarchive.*",15],["sokobj.com",15],["songsio.com",15],["souexatasmais.com",15],["sportbar.live",15],["sports-stream.*",15],["sportstream1.cfd",15],["sporttuna.*",15],["srt.am",15],["srts.me",15],["sshhaa.*",15],["stapadblockuser.*",[15,54]],["stape.*",[15,54]],["stapewithadblock.*",15],["starmusiq.*",15],["stbemuiptv.com",15],["stockingfetishvideo.com",15],["strcloud.*",[15,54]],["stream.crichd.vip",15],["stream.lc",15],["stream25.xyz",15],["streamadblocker.*",[15,54,63]],["streamadblockplus.*",[15,54]],["streambee.to",15],["streamcdn.*",15],["streamcenter.pro",15],["streamers.watch",15],["streamgo.to",15],["streamhub.*",15],["streamkiste.tv",15],["streamoupload.xyz",15],["streamservicehd.click",15],["streamsport.*",15],["streamta.*",[15,54]],["streamtape.*",[15,54]],["streamtapeadblockuser.*",[15,54]],["streamvid.net",[15,25]],["strikeout.*",[15,65]],["strtape.*",[15,54]],["strtapeadblock.*",[15,54]],["strtapeadblocker.*",[15,54]],["strtapewithadblock.*",15],["strtpe.*",[15,54]],["subtitleporn.com",15],["subtitles.cam",15],["suicidepics.com",15],["supertelevisionhd.com",15],["supexfeeds.com",15],["swatchseries.*",15],["swiftload.io",15],["swipebreed.net",15],["swzz.xyz",15],["sxnaar.com",15],["tabooflix.*",15],["tabooporns.com",15],["taboosex.club",15],["tapeantiads.com",[15,54]],["tapeblocker.com",[15,54]],["tapenoads.com",[15,54]],["tapewithadblock.org",[15,54,254]],["teamos.xyz",15],["teen-wave.com",15],["teenporncrazy.com",15],["telegramgroups.xyz",15],["telenovelasweb.com",15],["tennisstreams.*",15],["tensei-shitara-slime-datta-ken.com",15],["tfp.is",15],["tgo-tv.co",[15,63]],["thaihotmodels.com",15],["theblueclit.com",15],["thebussybandit.com",15],["thedaddy.to",[15,210]],["theicongenerator.com",15],["thelastdisaster.vip",15],["themoviesflix.*",15],["thepiratebay.*",15],["thepiratebay0.org",15],["thepiratebay10.info",15],["thesexcloud.com",15],["thothub.today",15],["tightsexteens.com",15],["tmearn.*",15],["tojav.net",15],["tokyoblog.tv",15],["toonanime.*",15],["top16.net",15],["topvideosgay.com",15],["torlock.*",15],["tormalayalam.*",15],["torrage.info",15],["torrents.vip",15],["torrentz2eu.*",15],["torrsexvid.com",15],["tpb-proxy.xyz",15],["trannyteca.com",15],["trendytalker.com",15],["tumanga.net",15],["turbogvideos.com",15],["turbovid.me",15],["turkishseriestv.org",15],["turksub24.net",15],["tutele.sx",15],["tutelehd.*",15],["tvglobe.me",15],["tvpclive.com",15],["tvply.*",15],["tvs-widget.com",15],["tvseries.video",15],["u4m.*",15],["ucptt.com",15],["ufaucet.online",15],["ufcfight.online",15],["ufcstream.*",15],["ultrahorny.com",15],["ultraten.net",15],["unblocknow.*",15],["unblockweb.me",15],["underhentai.net",15],["uniqueten.net",15],["upbaam.com",15],["uploadbuzz.*",15],["upstream.to",15],["usagoals.*",15],["valeriabelen.com",15],["verdragonball.online",15],["vexmoviex.*",15],["vfxmed.com",15],["vidclouds.*",15],["video.az",15],["videostreaming.rocks",15],["videowood.tv",15],["vidlox.*",15],["vidorg.net",15],["vidtapes.com",15],["vidz7.com",15],["vikistream.com",15],["vikv.net",15],["vipbox.*",[15,63]],["vipboxtv.*",[15,63]],["vipleague.*",[15,234]],["virpe.cc",15],["visifilmai.org",15],["viveseries.com",15],["vladrustov.sx",15],["volokit2.com",[15,210]],["vstorrent.org",15],["w-hentai.com",15],["watch-series.*",15],["watchbrooklynnine-nine.com",15],["watchelementaryonline.com",15],["watchjavidol.com",15],["watchkobestreams.info",15],["watchlostonline.net",15],["watchmonkonline.com",15],["watchrulesofengagementonline.com",15],["watchseries.*",15],["watchthekingofqueens.com",15],["webcamrips.com",15],["wincest.xyz",15],["wolverdon.fun",15],["wordcounter.icu",15],["worldmovies.store",15],["worldstreams.click",15],["wpdeployit.com",15],["wqstreams.tk",15],["wwwsct.com",15],["xanimeporn.com",15],["xblog.tv",15],["xclusivejams.*",15],["xmoviesforyou.*",15],["xn--verseriesespaollatino-obc.online",15],["xn--xvideos-espaol-1nb.com",15],["xpornium.net",15],["xsober.com",15],["xvip.lat",15],["xxgasm.com",15],["xxvideoss.org",15],["xxx18.uno",15],["xxxdominicana.com",15],["xxxfree.watch",15],["xxxmax.net",15],["xxxwebdlxxx.top",15],["xxxxvideo.uno",15],["y2b.wiki",15],["yabai.si",15],["yadixv.com",15],["yayanimes.net",15],["yeshd.net",15],["yodbox.com",15],["youdbox.*",15],["youjax.com",15],["yourdailypornvideos.ws",15],["yourupload.com",15],["ytmp3eu.*",15],["yts-subs.*",15],["yts.*",15],["ytstv.me",15],["zerion.cc",15],["zerocoin.top",15],["zitss.xyz",15],["zooqle.*",15],["zpaste.net",15],["1337x.ninjaproxy1.com",15],["y2tube.pro",15],["freeshot.live",15],["fastreams.com",15],["redittsports.com",15],["sky-sports.store",15],["streamsoccer.site",15],["tntsports.store",15],["wowstreams.co",15],["zdsptv.com",15],["tuktukcinma.com",15],["dutchycorp.*",16],["faucet.ovh",16],["mmacore.tv",17],["nxbrew.net",17],["oko.sh",[18,44,45]],["variety.com",19],["gameskinny.com",19],["deadline.com",19],["mlive.com",[19,142,146]],["atlasstudiousa.com",20],["51bonusrummy.in",[20,57]],["washingtonpost.com",21],["gosexpod.com",22],["sexo5k.com",23],["truyen-hentai.com",23],["theshedend.com",25],["zeroupload.com",25],["securenetsystems.net",25],["miniwebtool.com",25],["bchtechnologies.com",25],["eracast.cc",25],["flatai.org",25],["spiegel.de",26],["jacquieetmichel.net",27],["hausbau-forum.de",28],["althub.club",28],["kiemlua.com",28],["tea-coffee.net",29],["spatsify.com",29],["newedutopics.com",29],["getviralreach.in",29],["edukaroo.com",29],["funkeypagali.com",29],["careersides.com",29],["nayisahara.com",29],["wikifilmia.com",29],["infinityskull.com",29],["viewmyknowledge.com",29],["iisfvirtual.in",29],["starxinvestor.com",29],["jkssbalerts.com",29],["imagereviser.com",30],["kenzo-flowertag.com",31],["mdn.lol",31],["btcbitco.in",32],["btcsatoshi.net",32],["cempakajaya.com",32],["crypto4yu.com",32],["gainl.ink",32],["manofadan.com",32],["readbitcoin.org",32],["wiour.com",32],["tremamnon.com",32],["bitsmagic.fun",32],["ourcoincash.xyz",32],["blog.cryptowidgets.net",33],["blog.insurancegold.in",33],["blog.wiki-topia.com",33],["blog.coinsvalue.net",33],["blog.cookinguide.net",33],["blog.freeoseocheck.com",33],["aylink.co",34],["sugarona.com",35],["nishankhatri.xyz",35],["cety.app",36],["exe-urls.com",36],["exego.app",36],["cutlink.net",36],["cutsy.net",36],["cutyurls.com",36],["cutty.app",36],["cutnet.net",36],["jixo.online",36],["tinys.click",37],["diendancauduong.com",37],["answerpython.com",37],["formyanime.com",37],["gsm-solution.com",37],["h-donghua.com",37],["hindisubbedacademy.com",37],["linksdramas2.blogspot.com",37],["mydverse.*",37],["pkgovjobz.com",37],["ripexbooster.xyz",37],["serial4.com",37],["serial412.blogspot.com",37],["sigmalinks.in",37],["tutorgaming.com",37],["everydaytechvams.com",37],["dipsnp.com",37],["cccam4sat.com",37],["zeemoontv-24.blogspot.com",37],["stitichsports.com",37],["aiimgvlog.fun",38],["appsbull.com",39],["diudemy.com",39],["maqal360.com",39],["mphealth.online",39],["makefreecallsonline.com",39],["androjungle.com",39],["bookszone.in",39],["drakescans.com",39],["shortix.co",39],["msonglyrics.com",39],["app-sorteos.com",39],["bokugents.com",39],["client.pylexnodes.net",39],["btvplus.bg",39],["blog24.me",[40,41]],["coingraph.us",42],["impact24.us",42],["iconicblogger.com",43],["auto-crypto.click",43],["tvi.la",[44,45]],["iir.la",[44,45]],["tii.la",[44,45]],["ckk.ai",[44,45]],["oei.la",[44,45]],["lnbz.la",[44,45]],["oii.la",[44,45,65]],["tpi.li",[44,45]],["shrinke.*",46],["shrinkme.*",46],["smutty.com",46],["e-sushi.fr",46],["freeadultcomix.com",46],["down.dataaps.com",46],["filmweb.pl",46],["livecamrips.*",46],["safetxt.net",46],["filespayouts.com",46],["atglinks.com",47],["kbconlinegame.com",48],["hamrojaagir.com",48],["odijob.com",48],["blogesque.net",49],["bookbucketlyst.com",49],["explorosity.net",49],["optimizepics.com",49],["stfly.*",49],["stly.*",49],["torovalley.net",49],["travize.net",49],["trekcheck.net",49],["metoza.net",49],["techlike.net",49],["snaplessons.net",49],["atravan.net",49],["transoa.net",49],["techmize.net",49],["crenue.net",49],["simana.online",50],["fooak.com",50],["joktop.com",50],["evernia.site",50],["falpus.com",50],["rfiql.com",51],["gujjukhabar.in",51],["smartfeecalculator.com",51],["djxmaza.in",51],["thecubexguide.com",51],["jytechs.in",51],["mastkhabre.com",52],["weshare.is",53],["advertisertape.com",54],["tapeadsenjoyer.com",[54,63]],["tapeadvertisement.com",54],["tapelovesads.org",54],["watchadsontape.com",54],["vosfemmes.com",55],["voyeurfrance.net",55],["bollyflix.*",56],["neymartv.net",56],["streamhd247.info",56],["samax63.lol",56],["hindimoviestv.com",56],["buzter.xyz",56],["valhallas.click",56],["cuervotv.me",[56,63]],["aliezstream.pro",56],["daddy-stream.xyz",56],["daddylive1.*",56],["esportivos.*",56],["instream.pro",56],["mylivestream.pro",56],["poscitechs.*",56],["powerover.online",56],["sportea.link",56],["sportsurge.stream",56],["ufckhabib.com",56],["ustream.pro",56],["animeshqip.site",56],["apkship.shop",56],["buzter.pro",56],["enjoysports.bond",56],["filedot.to",56],["foreverquote.xyz",56],["hdstream.one",56],["kingstreamz.site",56],["live.fastsports.store",56],["livesnow.me",56],["livesports4u.pw",56],["masterpro.click",56],["nuxhallas.click",56],["papahd.info",56],["rgshows.me",56],["sportmargin.live",56],["sportmargin.online",56],["sportsloverz.xyz",56],["sportzlive.shop",56],["supertipzz.online",56],["totalfhdsport.xyz",56],["ultrastreamlinks.xyz",56],["usgate.xyz",56],["webmaal.cfd",56],["wizistreamz.xyz",56],["worldstreamz.shop",56],["g-porno.com",56],["g-streaming.com",56],["educ4m.com",56],["fromwatch.com",56],["visualnewshub.com",56],["bigwarp.*",56],["animeshqip.org",56],["uns.bio",56],["reshare.pm",56],["videograbber.cc",56],["rahim-soft.com",57],["nekopoi.*",57],["x-video.tube",57],["rubystm.com",57],["rubyvid.com",57],["streamruby.com",57],["poophd.cc",57],["windowsreport.com",57],["fuckflix.click",57],["hyundaitucson.info",58],["exambd.net",59],["cgtips.org",60],["freewebcart.com",61],["siamblockchain.com",61],["emuenzen.de",62],["123movies.*",63],["123moviesla.*",63],["123movieweb.*",63],["2embed.*",63],["9xmovies.*",63],["adsh.cc",63],["adshort.*",63],["afilmyhouse.blogspot.com",63],["ak.sv",63],["allmovieshub.*",63],["animesultra.com",63],["api.webs.moe",63],["apkmody.io",63],["asianplay.*",63],["atishmkv.*",63],["attvideo.com",63],["backfirstwo.site",[63,157]],["bflix.*",63],["crazyblog.in",63],["cricstream.*",63],["crictime.*",63],["divicast.com",63],["dlhd.so",63],["dood.*",[63,189]],["dooood.*",[63,189]],["embed.meomeo.pw",63],["extramovies.*",63],["faselhd.*",63],["faselhds.*",63],["filemoon.*",63],["filmeserialeonline.org",63],["filmy.*",63],["filmyhit.*",63],["filmywap.*",63],["flexyhit.com",63],["fmovies.*",63],["foreverwallpapers.com",63],["french-streams.cc",63],["fslinks.org",63],["gdplayer.*",63],["goku.*",63],["gomovies.*",63],["gowatchseries.*",63],["hdfungamezz.*",63],["hdtoday.to",63],["hinatasoul.com",63],["hindilinks4u.*",63],["hurawatch.*",63],["igg-games.com",63],["infinityscans.net",63],["jalshamoviezhd.*",63],["livecricket.*",63],["mangareader.to",63],["membed.net",63],["mgnetu.com",63],["mhdsport.*",63],["mkvcinemas.*",[63,187]],["movies2watch.*",63],["moviespapa.*",63],["mp3juice.info",63],["mp3juices.cc",63],["mp4moviez.*",63],["mydownloadtube.*",63],["myflixerz.to",63],["nowmetv.net",63],["nowsportstv.com",63],["nuroflix.*",63],["nxbrew.com",63],["o2tvseries.*",63],["o2tvseriesz.*",63],["oii.io",63],["paidshitforfree.com",63],["pepperlive.info",63],["pirlotv.*",63],["playertv.net",63],["poscitech.*",63],["primewire.*",63],["putlocker68.com",63],["redecanais.*",63],["roystream.com",63],["rssing.com",63],["s.to",63],["serienstream.*",63],["sflix.*",63],["shahed4u.*",63],["shaheed4u.*",63],["share.filesh.site",63],["sharkfish.xyz",63],["skidrowcodex.net",63],["smartermuver.com",63],["speedostream.*",63],["sportcast.*",63],["sports-stream.site",63],["sportskart.*",63],["stream4free.live",63],["streamingcommunity.*",[63,65,79]],["tamilarasan.*",63],["tamilfreemp3songs.*",63],["tamilmobilemovies.in",63],["tamilprinthd.*",63],["thewatchseries.live",63],["tnmusic.in",63],["torrentdosfilmes.*",63],["travelplanspro.com",63],["tubemate.*",63],["tusfiles.com",63],["tutlehd4.com",63],["twstalker.com",63],["uploadrar.*",63],["uqload.*",63],["vid-guard.com",63],["vidcloud9.*",63],["vido.*",63],["vidoo.*",63],["vidsaver.net",63],["vidspeeds.com",63],["viralitytoday.com",63],["voiranime.stream",63],["vudeo.*",63],["vumoo.*",63],["watchdoctorwhoonline.com",63],["watchomovies.*",[63,76]],["watchserie.online",63],["webhostingpost.com",63],["woxikon.in",63],["www-y2mate.com",63],["yesmovies.*",63],["ylink.bid",63],["xn-----0b4asja7ccgu2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e8qri.xn--1ck2e1b",63],["kickassanime.*",64],["11xmovies.*",65],["buffshub.stream",65],["cinego.tv",65],["ev01.to",65],["fstream365.com",65],["fzmovies.*",65],["linkz.*",65],["minoplres.xyz",65],["mostream.us",65],["myflixer.*",65],["prmovies.*",65],["readcomiconline.li",65],["s3embtaku.pro",65],["sflix2.to",65],["sportshub.stream",65],["streamblasters.*",65],["topcinema.cam",65],["zonatmo.com",65],["animesaturn.cx",65],["filecrypt.*",65],["hunterscomics.com",65],["aniwave.uk",65],["kickass.*",66],["unblocked.id",68],["listendata.com",69],["7xm.xyz",69],["fastupload.io",69],["azmath.info",69],["wouterplanet.com",70],["androidacy.com",71],["pillowcase.su",72],["cine-calidad.*",73],["veryfreeporn.com",73],["theporngod.com",73],["besthdgayporn.com",74],["drivenime.com",74],["erothots1.com",74],["javup.org",74],["shemaleup.net",74],["transflix.net",74],["4porn4.com",75],["bestpornflix.com",76],["freeroms.com",76],["soap2day-online.com",76],["andhrafriends.com",76],["723qrh1p.fun",76],["98zero.com",77],["mediaset.es",77],["updatewallah.in",77],["beatsnoop.com",78],["fetchpik.com",78],["hackerranksolution.in",78],["camsrip.com",78],["help.sakarnewz.com",78],["austiblox.net",80],["btcbunch.com",81],["teachoo.com",[82,83]],["automobile-catalog.com",[84,85,90]],["motorbikecatalog.com",[84,85,90]],["topstarnews.net",84],["islamicfinder.org",84],["secure-signup.net",84],["dramabeans.com",84],["manta.com",84],["tportal.hr",84],["tvtropes.org",84],["wouldurather.io",84],["convertcase.net",84],["interfootball.co.kr",85],["a-ha.io",85],["cboard.net",85],["jjang0u.com",85],["joongdo.co.kr",85],["viva100.com",85],["gamingdeputy.com",85],["thesaurus.net",85],["alle-tests.nl",85],["maketecheasier.com",85],["allthekingz.com",85],["tweaksforgeeks.com",85],["m.inven.co.kr",85],["mlbpark.donga.com",85],["meconomynews.com",85],["brandbrief.co.kr",85],["motorgraph.com",85],["worldhistory.org",86],["bleepingcomputer.com",87],["lovelive-petitsoku.com",87],["pravda.com.ua",87],["mariowiki.com",88],["ap7am.com",89],["cinema.com.my",89],["dolldivine.com",89],["giornalone.it",89],["iplocation.net",89],["jamaicaobserver.com",89],["jawapos.com",89],["jutarnji.hr",89],["kompasiana.com",89],["mediaindonesia.com",89],["nmplus.hk",89],["slobodnadalmacija.hr",89],["upmedia.mg",89],["allthetests.com",90],["animanch.com",90],["aniroleplay.com",90],["apkmirror.com",[90,183]],["autoby.jp",90],["autofrage.net",90],["carscoops.com",90],["cinetrafic.fr",90],["computerfrage.net",90],["crosswordsolver.com",90],["cruciverba.it",90],["daily.co.jp",90],["dailydot.com",90],["dnevno.hr",90],["dziennik.pl",90],["forsal.pl",90],["freemcserver.net",90],["game8.jp",90],["gazetaprawna.pl",90],["globalrph.com",90],["golf-live.at",90],["heureka.cz",90],["horairesdouverture24.fr",90],["indiatimes.com",90],["infor.pl",90],["iza.ne.jp",90],["j-cast.com",90],["j-town.net",90],["jablickar.cz",90],["javatpoint.com",90],["kinmaweb.jp",90],["kreuzwortraetsel.de",90],["kurashiru.com",90],["kyoteibiyori.com",90],["lacuarta.com",90],["laleggepertutti.it",90],["livenewschat.eu",90],["mamastar.jp",90],["mirrored.to",90],["modhub.us",90],["motscroises.fr",90],["nana-press.com",90],["nikkan-gendai.com",90],["nyitvatartas24.hu",90],["oeffnungszeitenbuch.de",90],["onecall2ch.com",90],["oraridiapertura24.it",90],["palabr.as",90],["persoenlich.com",90],["petitfute.com",90],["powerpyx.com",90],["quefaire.be",90],["raetsel-hilfe.de",90],["ranking.net",90],["roleplayer.me",90],["rostercon.com",90],["samsungmagazine.eu",90],["slashdot.org",90],["sourceforge.net",90],["syosetu.com",90],["talkwithstranger.com",90],["the-crossword-solver.com",90],["thestockmarketwatch.com",90],["transparentcalifornia.com",90],["transparentnevada.com",90],["trilltrill.jp",90],["tvtv.ca",90],["tvtv.us",90],["verkaufsoffener-sonntag.com",90],["watchdocumentaries.com",90],["webdesignledger.com",90],["wetteronline.de",90],["wfmz.com",90],["winfuture.de",90],["word-grabber.com",90],["wort-suchen.de",90],["woxikon.*",90],["yugioh-starlight.com",90],["yutura.net",90],["zagreb.info",90],["2chblog.jp",90],["2monkeys.jp",90],["46matome.net",90],["akb48glabo.com",90],["akb48matomemory.com",90],["alfalfalfa.com",90],["all-nationz.com",90],["anihatsu.com",90],["aqua2ch.net",90],["blog.esuteru.com",90],["blog.livedoor.jp",90],["blog.jp",90],["blogo.jp",90],["chaos2ch.com",90],["choco0202.work",90],["crx7601.com",90],["danseisama.com",90],["dareda.net",90],["digital-thread.com",90],["doorblog.jp",90],["exawarosu.net",90],["fgochaldeas.com",90],["football-2ch.com",90],["gekiyaku.com",90],["golog.jp",90],["hacchaka.net",90],["heartlife-matome.com",90],["liblo.jp",90],["fesoku.net",90],["fiveslot777.com",90],["gamejksokuhou.com",90],["girlsreport.net",90],["girlsvip-matome.com",90],["grasoku.com",90],["gundamlog.com",90],["honyaku-channel.net",90],["ikarishintou.com",90],["imas-cg.net",90],["imihu.net",90],["inutomo11.com",90],["itainews.com",90],["itaishinja.com",90],["jin115.com",90],["jisaka.com",90],["jnews1.com",90],["jumpsokuhou.com",90],["jyoseisama.com",90],["keyakizaka46matomemory.net",90],["kidan-m.com",90],["kijoden.com",90],["kijolariat.net",90],["kijolifehack.com",90],["kijomatomelog.com",90],["kijyokatu.com",90],["kijyomatome.com",90],["kijyomatome-ch.com",90],["kijyomita.com",90],["kirarafan.com",90],["kitimama-matome.net",90],["kitizawa.com",90],["konoyubitomare.jp",90],["kotaro269.com",90],["kyousoku.net",90],["ldblog.jp",90],["livedoor.biz",90],["livedoor.blog",90],["majikichi.com",90],["matacoco.com",90],["matomeblade.com",90],["matomelotte.com",90],["matometemitatta.com",90],["mojomojo-licarca.com",90],["morikinoko.com",90],["nandemo-uketori.com",90],["netatama.net",90],["news-buzz1.com",90],["news30over.com",90],["nmb48-mtm.com",90],["norisoku.com",90],["npb-news.com",90],["ocsoku.com",90],["okusama-kijyo.com",90],["onihimechan.com",90],["orusoku.com",90],["otakomu.jp",90],["otoko-honne.com",90],["oumaga-times.com",90],["outdoormatome.com",90],["pachinkopachisro.com",90],["paranormal-ch.com",90],["recosoku.com",90],["s2-log.com",90],["saikyo-jump.com",90],["shuraba-matome.com",90],["ske48matome.net",90],["squallchannel.com",90],["sukattojapan.com",90],["sumaburayasan.com",90],["usi32.com",90],["uwakich.com",90],["uwakitaiken.com",90],["vault76.info",90],["vipnews.jp",90],["vtubernews.jp",90],["watarukiti.com",90],["world-fusigi.net",90],["zakuzaku911.com",90],["zch-vip.com",90],["mafiatown.pl",91],["bitcotasks.com",92],["hilites.today",93],["udvl.com",94],["www.chip.de",[95,96,97,98]],["topsporter.net",99],["sportshub.to",99],["streamcheck.link",100],["myanimelist.net",101],["unofficialtwrp.com",102],["codec.kyiv.ua",102],["kimcilonlyofc.com",102],["bitcosite.com",103],["bitzite.com",103],["celebzcircle.com",104],["bi-girl.net",104],["ftuapps.*",104],["hentaiseason.com",104],["hoodtrendspredict.com",104],["marcialhub.xyz",104],["odiadance.com",104],["osteusfilmestuga.online",104],["ragnarokscanlation.opchapters.com",104],["sampledrive.org",104],["showflix.*",104],["swordalada.org",104],["tojimangas.com",104],["tvappapk.com",104],["twobluescans.com",[104,105]],["varnascan.xyz",104],["teluguflix.*",106],["hacoos.com",107],["watchhentai.net",108],["hes-goals.io",108],["pkbiosfix.com",108],["casi3.xyz",108],["bondagevalley.cc",109],["zefoy.com",110],["mailgen.biz",111],["tempinbox.xyz",111],["vidello.net",112],["newscon.org",113],["yunjiema.top",113],["pcgeeks-games.com",113],["resizer.myct.jp",114],["gametohkenranbu.sakuraweb.com",115],["jisakuhibi.jp",116],["rank1-media.com",116],["lifematome.blog",117],["fm.sekkaku.net",118],["free-avx.jp",119],["dvdrev.com",120],["betweenjpandkr.blog",121],["nft-media.net",122],["ghacks.net",123],["leak.sx",124],["paste.bin.sx",124],["pornleaks.in",124],["truyentranhfull.net",125],["fcportables.com",125],["repack-games.com",125],["ibooks.to",125],["blog.tangwudi.com",125],["filecatchers.com",125],["actvid.*",126],["zoechip.com",126],["nohost.one",126],["vidbinge.com",126],["nectareousoverelate.com",128],["khoaiphim.com",129],["haafedk2.com",130],["fordownloader.com",130],["jovemnerd.com.br",131],["totalcsgo.com",132],["vivamax.asia",133],["manysex.com",134],["gaminginfos.com",135],["tinxahoivn.com",136],["automoto.it",137],["codelivly.com",138],["lordchannel.com",139],["client.falixnodes.net",140],["novelhall.com",141],["madeeveryday.com",142],["maidenhead-advertiser.co.uk",142],["mardomreport.net",142],["melangery.com",142],["milestomemories.com",142],["modernmom.com",142],["momtastic.com",142],["mostlymorgan.com",142],["motherwellmag.com",142],["muddybootsanddiamonds.com",142],["musicfeeds.com.au",142],["mylifefromhome.com",142],["nationalreview.com",142],["nordot.app",142],["oakvillenews.org",142],["observer.com",142],["ourlittlesliceofheaven.com",142],["palachinkablog.com",142],["patheos.com",142],["pinkonthecheek.com",142],["politicususa.com",142],["predic.ro",142],["puckermom.com",142],["qtoptens.com",142],["realgm.com",142],["reelmama.com",142],["robbreport.com",142],["royalmailchat.co.uk",142],["samchui.com",142],["sandrarose.com",142],["sherdog.com",142],["sidereel.com",142],["silive.com",142],["simpleflying.com",142],["sloughexpress.co.uk",142],["spacenews.com",142],["sportsgamblingpodcast.com",142],["spotofteadesigns.com",142],["stacysrandomthoughts.com",142],["ssnewstelegram.com",142],["superherohype.com",[142,146]],["tablelifeblog.com",142],["thebeautysection.com",142],["thecelticblog.com",142],["thecurvyfashionista.com",142],["thefashionspot.com",142],["thegamescabin.com",142],["thenerdyme.com",142],["thenonconsumeradvocate.com",142],["theprudentgarden.com",142],["thethings.com",142],["timesnews.net",142],["topspeed.com",142],["toyotaklub.org.pl",142],["travelingformiles.com",142],["tutsnode.org",142],["viralviralvideos.com",142],["wannacomewith.com",142],["wimp.com",[142,146]],["windsorexpress.co.uk",142],["woojr.com",142],["worldoftravelswithkids.com",142],["worldsurfleague.com",142],["abc17news.com",[142,145]],["adoredbyalex.com",142],["agrodigital.com",[142,145]],["al.com",[142,145]],["aliontherunblog.com",[142,145]],["allaboutthetea.com",[142,145]],["allmovie.com",[142,145]],["allmusic.com",[142,145]],["allthingsthrifty.com",[142,145]],["amessagewithabottle.com",[142,145]],["androidpolice.com",142],["antyradio.pl",142],["artforum.com",[142,145]],["artnews.com",[142,145]],["awkward.com",[142,145]],["awkwardmom.com",[142,145]],["bailiwickexpress.com",142],["barnsleychronicle.com",[142,146]],["becomingpeculiar.com",142],["bethcakes.com",[142,146]],["blogher.com",[142,146]],["bluegraygal.com",[142,146]],["briefeguru.de",[142,146]],["carmagazine.co.uk",142],["cattime.com",142],["cbr.com",142],["chaptercheats.com",[142,146]],["cleveland.com",[142,146]],["collider.com",142],["comingsoon.net",142],["commercialobserver.com",[142,146]],["competentedigitale.ro",[142,146]],["crafty.house",142],["dailyvoice.com",[142,146]],["decider.com",[142,146]],["didyouknowfacts.com",[142,146]],["dogtime.com",[142,146]],["dualshockers.com",142],["dustyoldthing.com",142],["faithhub.net",142],["femestella.com",[142,146]],["footwearnews.com",[142,146]],["freeconvert.com",[142,146]],["frogsandsnailsandpuppydogtail.com",[142,146]],["fsm-media.com",142],["funtasticlife.com",[142,146]],["fwmadebycarli.com",[142,146]],["gamerant.com",142],["gfinityesports.com",142],["givemesport.com",142],["gulflive.com",[142,146]],["helloflo.com",142],["homeglowdesign.com",[142,146]],["honeygirlsworld.com",[142,146]],["hotcars.com",142],["howtogeek.com",142],["insider-gaming.com",142],["insurancejournal.com",142],["jasminemaria.com",[142,146]],["kion546.com",[142,146]],["lehighvalleylive.com",[142,146]],["lettyskitchen.com",[142,146]],["lifeinleggings.com",[142,146]],["liveandletsfly.com",142],["lizzieinlace.com",[142,146]],["localnews8.com",[142,146]],["lonestarlive.com",[142,146]],["makeuseof.com",142],["masslive.com",[142,146,256]],["movieweb.com",142],["nj.com",[142,146]],["nothingbutnewcastle.com",[142,146]],["nsjonline.com",[142,146]],["oregonlive.com",[142,146]],["pagesix.com",[142,146,256]],["pennlive.com",[142,146,256]],["screenrant.com",142],["sheknows.com",[142,146]],["syracuse.com",[142,146,256]],["thegamer.com",142],["tvline.com",[142,146]],["cheatsheet.com",143],["pwinsider.com",143],["baeldung.com",143],["mensjournal.com",143],["c-span.org",144],["15min.lt",145],["247sports.com",[145,256]],["barcablaugranes.com",146],["betweenenglandandiowa.com",146],["bgr.com",146],["blazersedge.com",146],["blu-ray.com",146],["brobible.com",146],["cagesideseats.com",146],["cbsnews.com",[146,256]],["cbssports.com",[146,256]],["celiacandthebeast.com",146],["clickondetroit.com",146],["dailykos.com",146],["eater.com",146],["eldiariony.com",146],["fark.com",146],["free-power-point-templates.com",146],["golfdigest.com",146],["ibtimes.co.in",146],["imgur.com",146],["indiewire.com",[146,256]],["intouchweekly.com",146],["knowyourmeme.com",146],["last.fm",146],["lifeandstylemag.com",146],["mandatory.com",146],["naszemiasto.pl",146],["nationalpost.com",146],["nbcsports.com",146],["news.com.au",146],["ninersnation.com",146],["nypost.com",[146,256]],["playstationlifestyle.net",146],["rollingstone.com",146],["sbnation.com",146],["sneakernews.com",146],["sport-fm.gr",146],["stylecaster.com",146],["tastingtable.com",146],["thecw.com",146],["thedailymeal.com",146],["theflowspace.com",146],["themarysue.com",146],["tokfm.pl",146],["torontosun.com",146],["usmagazine.com",146],["wallup.net",146],["worldstar.com",146],["worldstarhiphop.com",146],["yourcountdown.to",146],["bagi.co.in",147],["keran.co",147],["biblestudytools.com",148],["christianheadlines.com",148],["ibelieve.com",148],["kuponigo.com",149],["kimcilonly.site",150],["kimcilonly.link",150],["cryptoearns.com",151],["inxxx.com",152],["bemyhole.com",152],["ipaspot.app",153],["embedwish.com",154],["filelions.live",154],["leakslove.net",154],["jenismac.com",155],["vxetable.cn",156],["jewelavid.com",157],["nizarstream.com",157],["snapwordz.com",158],["toolxox.com",158],["rl6mans.com",158],["idol69.net",158],["plumbersforums.net",159],["gulio.site",160],["izlekolik.net",161],["donghuaworld.com",162],["letsdopuzzles.com",163],["rediff.com",164],["igay69.com",165],["dzapk.com",166],["darknessporn.com",167],["familyporner.com",167],["freepublicporn.com",167],["pisshamster.com",167],["punishworld.com",167],["xanimu.com",167],["pig69.com",168],["cosplay18.pics",168],["sexwebvideo.com",168],["sexwebvideo.net",168],["tainio-mania.online",169],["javhdo.net",170],["eroticmoviesonline.me",171],["teleclub.xyz",172],["ecamrips.com",173],["showcamrips.com",173],["tucinehd.com",174],["9animetv.to",175],["qiwi.gg",176],["jornadaperfecta.com",177],["loseart.com",178],["sousou-no-frieren.com",179],["unite-guide.com",180],["thebullspen.com",181],["receitasdaora.online",182],["streambucket.net",184],["nontongo.win",184],["player.smashy.stream",185],["player.smashystream.com",185],["hentaihere.com",185],["torrentdownload.*",187],["cineb.rs",187],["123animehub.cc",187],["tukipasti.com",187],["cataz.to",187],["netmovies.to",187],["hiraethtranslation.com",188],["d0000d.com",189],["d000d.com",189],["d0o0d.com",189],["do0od.com",189],["doods.pro",189],["doodstream.*",189],["dooodster.com",189],["ds2play.com",189],["ds2video.com",189],["vidply.com",189],["xfreehd.com",190],["freethesaurus.com",191],["thefreedictionary.com",191],["dexterclearance.com",192],["x86.co.kr",193],["onlyfaucet.com",194],["x-x-x.tube",195],["fdownloader.net",196],["thehackernews.com",197],["mielec.pl",198],["treasl.com",199],["mrbenne.com",200],["cnpics.org",201],["ovabee.com",201],["porn4f.com",201],["cnxx.me",201],["ai18.pics",201],["sportsonline.si",202],["fiuxy2.co",203],["animeunity.to",204],["tokopedia.com",205],["remixsearch.net",206],["remixsearch.es",206],["onlineweb.tools",206],["sharing.wtf",206],["2024tv.ru",207],["modrinth.com",208],["curseforge.com",208],["xnxxcom.xyz",209],["sportsurge.net",210],["joyousplay.xyz",210],["quest4play.xyz",[210,212]],["generalpill.net",210],["moneycontrol.com",211],["cookiewebplay.xyz",212],["ilovetoplay.xyz",212],["streamcaster.live",212],["weblivehdplay.ru",212],["oaaxpgp3.xyz",213],["m9.news",214],["callofwar.com",215],["secondhandsongs.com",216],["nudezzers.org",217],["send.cm",218],["send.now",218],["3rooodnews.net",219],["xxxbfvideo.net",220],["filmy4wap.co.in",221],["filmy4waps.org",221],["gameshop4u.com",222],["regenzi.site",222],["historicaerials.com",223],["handirect.fr",224],["animefenix.tv",225],["fsiblog3.club",226],["kamababa.desi",226],["getfiles.co.uk",227],["genelify.com",228],["dhtpre.com",229],["xbaaz.com",230],["lineupexperts.com",232],["fearmp4.ru",233],["fbstreams.*",234],["m.shuhaige.net",235],["streamingnow.mov",236],["thesciencetoday.com",237],["ghbrisk.com",239],["iplayerhls.com",239],["bacasitus.com",240],["katoikos.world",240],["abstream.to",241],["pawastreams.pro",242],["rebajagratis.com",243],["tv.latinlucha.es",243],["fetcheveryone.com",244],["reviewdiv.com",245],["tojimanhwas.com",246],["laurelberninteriors.com",247],["botcomics.com",248],["cefirates.com",248],["chandlerorchards.com",248],["comicleaks.com",248],["marketdata.app",248],["monumentmetals.com",248],["tapmyback.com",248],["ping.gg",248],["revistaferramental.com.br",248],["hawpar.com",248],["alpacafinance.org",[248,249]],["nookgaming.com",248],["enkeleksamen.no",248],["kvest.ee",248],["creatordrop.com",248],["panpots.com",248],["cybernetman.com",248],["bitdomain.biz",248],["gerardbosch.xyz",248],["fort-shop.kiev.ua",248],["accuretawealth.com",248],["resourceya.com",248],["tracktheta.com",248],["camberlion.com",248],["replai.io",248],["trybawaryjny.pl",248],["segops.madisonspecs.com",248],["stresshelden-coaching.de",248],["controlconceptsusa.com",248],["ryaktive.com",248],["tip.etip-staging.etip.io",248],["tt.live",249],["future-fortune.com",249],["adventuretix.com",249],["bolighub.dk",249],["panprices.com",250],["intercity.technology",250],["freelancer.taxmachine.be",250],["adria.gg",250],["fjlaboratories.com",250],["emanualonline.com",250],["abhijith.page",250],["helpmonks.com",250],["dataunlocker.com",251],["proboards.com",252],["winclassic.net",252],["farmersjournal.ie",253],["pandadoc.com",255],["abema.tv",257]]);
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
