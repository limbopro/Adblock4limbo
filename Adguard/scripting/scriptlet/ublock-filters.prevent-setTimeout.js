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
(function uBOL_preventSetTimeout() {

/******************************************************************************/

function preventSetTimeout(
    needleRaw = '',
    delayRaw = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setTimeout', needleRaw, delayRaw);
    const needleNot = needleRaw.charAt(0) === '!';
    const reNeedle = safe.patternToRegex(needleNot ? needleRaw.slice(1) : needleRaw);
    const range = new RangeParser(delayRaw);
    proxyApplyFn('setTimeout', function(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? safe.String(safe.Function_toString(callArgs[0]))
            : safe.String(callArgs[0]);
        const b = callArgs[1];
        if ( needleRaw === '' && range.unbound() ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        if ( reNeedle.test(a) !== needleNot && range.test(b) ) {
            callArgs[0] = function(){};
            safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
        }
        return context.reflect();
    });
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
        proxyApplyFn.isCtor = new Map();
    }
    if ( proxyApplyFn.isCtor.has(target) === false ) {
        proxyApplyFn.isCtor.set(target, fn.prototype?.constructor === fn);
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( proxyApplyFn.isCtor.get(target) ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

class RangeParser {
    constructor(s) {
        this.not = s.charAt(0) === '!';
        if ( this.not ) { s = s.slice(1); }
        if ( s === '' ) { return; }
        const pos = s.indexOf('-');
        if ( pos !== 0 ) {
            this.min = this.max = parseInt(s, 10) || 0;
        }
        if ( pos !== -1 ) {
            this.max = parseInt(s.slice(pos + 1), 10) || Number.MAX_SAFE_INTEGER;
        }
    }
    unbound() {
        return this.min === undefined && this.max === undefined;
    }
    test(v) {
        const n = Math.min(Math.max(Number(v) || 0, 0), Number.MAX_SAFE_INTEGER);
        if ( this.min === this.max ) {
            return (this.min === undefined || n === this.min) !== this.not;
        }
        if ( this.min === undefined ) {
            return (n <= this.max) !== this.not;
        }
        if ( this.max === undefined ) {
            return (n >= this.min) !== this.not;
        }
        return (n >= this.min && n <= this.max) !== this.not;
    }
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
const argsList = [["=document[_0x"],["/&&\\s*[A-Z]{4,}\\(\\)/"],["/\\(\\s*[\\s$0-9A-Z_a-z]*\\)\\s*=>|^\\s*function\\s*\\(\\s*[\\s$0-9A-Z_a-z]*\\)\\s*\\{.{35,100}|document\\[|nextElementSibling/","1000"],["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["/constructor\\.prototype|Object\\.getPrototypeOf|amzn_aps_csm|\\'\\/neptune\\'|yehauser|adngin.|hasOwnProperty|location|substring\\(7/"],["document.body","5000"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["alert","2000"],["/adblock|isRequestPresent/"],["documentElement.innerHTML"],["_0x","500"],["isRequestPresent"],["checkAdblock"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["/loadMomoVip|loadExo|includeSpecial/"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["consent"],["await _0x"],["adbl"],["openPopunder"],["closeBanner"],[".getComputedStyle"],["offsetHeight"],["offsetLeft"],["height"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["click"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],[".redirect"],["/AdBlock/i"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["","2000-5000"],["contrformpub"],["trigger","0"],["ADB"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["getComputedStyle(testAd)"],[".adv-"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["test.remove","100"],["adblock","2000"],["adBlockerModal"],["","10000-15000"],["/adex|loadAds|adCollapsedCount|ad-?block/i"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["mode:\"no-cors\""],["Visibility"],["TNCMS.DMP"],["ast"],["googlesyndication"],["start"],["moneyDetect"],["sub"],["/createElement|addEventListener|clientHeight/"],["testAd"],[".redirected"]];
const hostnamesMap = new Map([["japscan.*",[0,1,2]],["poophq.com",3],["veev.to",3],["dogdrip.net",4],["infinityfree.com",4],["smsonline.cloud",[4,5]],["faqwiki.us",6],["mail.yahoo.com",[7,325]],["maxcheaters.com",7],["postimees.ee",7],["police.community",7],["gisarea.com",7],["schaken-mods.com",7],["tvnet.lv",7],["theclashify.com",7],["txori.com",7],["olarila.com",7],["deletedspeedstreams.blogspot.com",7],["schooltravelorganiser.com",7],["xhardhempus.net",7],["mhn.quest",7],["leagueofgraphs.com",7],["hieunguyenphoto.com",7],["benzinpreis.de",7],["client.falixnodes.net",[8,9]],["lastampa.it",10],["m.timesofindia.com",11],["timesofindia.indiatimes.com",11],["youmath.it",11],["redensarten-index.de",11],["lesoir.be",11],["electriciansforums.net",11],["keralatelecom.info",11],["universegunz.net",11],["happypenguin.altervista.org",11],["everyeye.it",11],["eztv.*",11],["bluedrake42.com",11],["supermarioemulator.com",11],["futbollibrehd.com",11],["eska.pl",11],["eskarock.pl",11],["voxfm.pl",11],["mathaeser.de",11],["betaseries.com",11],["free-sms-receive.com",11],["sms-receive-online.com",11],["computer76.ru",11],["golem.de",[12,13,160]],["hdbox.ws",13],["todopolicia.com",13],["scat.gold",13],["freecoursesite.com",13],["windowcleaningforums.co.uk",13],["cruisingearth.com",13],["hobby-machinist.com",13],["freegogpcgames.com",13],["latitude.to",13],["kitchennovel.com",13],["w3layouts.com",13],["blog.receivefreesms.co.uk",13],["eductin.com",13],["dealsfinders.blog",13],["audiobooks4soul.com",13],["downloadr.in",13],["topcomicporno.com",13],["sushi-scan.*",13],["celtadigital.com",13],["iptvrun.com",13],["adsup.lk",13],["cryptomonitor.in",13],["areatopik.com",13],["cardscanner.co",13],["nullforums.net",13],["courseclub.me",13],["tamarindoyam.com",13],["jeep-cj.com",13],["choiceofmods.com",13],["myqqjd.com",13],["ssdtop.com",13],["apkhex.com",13],["gezegenforum.com",13],["iptvapps.net",13],["null-scripts.net",13],["nullscripts.net",13],["bloground.ro",13],["witcherhour.com",13],["ottverse.com",13],["torrentmac.net",13],["mazakony.com",13],["laptechinfo.com",13],["mc-at.org",13],["playstationhaber.com",13],["seriesperu.com",13],["spigotunlocked.*",13],["pesprofessionals.com",13],["wpsimplehacks.com",13],["sportshub.to",[13,269]],["topsporter.net",[13,269]],["darkwanderer.net",13],["truckingboards.com",13],["coldfrm.org",13],["azrom.net",13],["freepatternsarea.com",13],["alttyab.net",13],["ahmedmode.*",13],["esopress.com",13],["nesiaku.my.id",13],["jipinsoft.com",13],["truthnews.de",13],["farsinama.com",13],["worldofiptv.com",13],["vuinsider.com",13],["crazydl.net",13],["gamemodsbase.com",13],["babiato.tech",13],["secuhex.com",13],["turkishaudiocenter.com",13],["galaxyos.net",13],["bizdustry.com",13],["storefront.com.ng",13],["pkbiosfix.com",13],["casi3.xyz",13],["forum-xiaomi.com",13],["mediafire.com",14],["wcoanimedub.tv",15],["wcoforever.net",15],["openspeedtest.com",15],["addtobucketlist.com",15],["3dzip.org",[15,69]],["ilmeteo.it",15],["wcoforever.com",15],["comprovendolibri.it",15],["healthelia.com",15],["yts.*",16],["720pstream.*",16],["1stream.*",16],["seattletimes.com",17],["bestgames.com",18],["yiv.com",18],["globalrph.com",19],["e-glossa.it",20],["webcheats.com.br",21],["urlcero.*",22],["gala.fr",23],["gentside.com",23],["geo.fr",23],["hbrfrance.fr",23],["nationalgeographic.fr",23],["ohmymag.com",23],["serengo.net",23],["vsd.fr",23],["short.pe",24],["thefmovies.*",24],["footystreams.net",24],["katestube.com",24],["updato.com",[25,38]],["totaldebrid.*",26],["sandrives.*",26],["daizurin.com",26],["pendekarsubs.us",26],["dreamfancy.org",26],["rysafe.blogspot.com",26],["techacode.com",26],["toppng.com",26],["th-world.com",26],["avjamack.com",26],["avjamak.net",26],["cnnamador.com",27],["nudecelebforum.com",28],["pronpic.org",29],["thewebflash.com",30],["discordfastfood.com",30],["xup.in",30],["popularmechanics.com",31],["comunidadgzone.es",32],["fxporn69.*",32],["mp3fy.com",32],["lebensmittelpraxis.de",32],["aliancapes.*",32],["forum-pokemon-go.fr",32],["praxis-jugendarbeit.de",32],["dictionnaire-medical.net",32],["cle0desktop.blogspot.com",32],["up-load.io",32],["keysbrasil.blogspot.com",32],["hotpress.info",32],["turkleech.com",32],["anibatch.me",32],["anime-i.com",32],["gewinde-normen.de",32],["tucinehd.com",32],["kdramasmaza.com.pk",32],["jellynote.com",33],["eporner.com",34],["pornbimbo.com",35],["4j.com",35],["avoiderrors.com",36],["sitarchive.com",36],["livenewsof.com",36],["topnewsshow.com",36],["gatcha.org",36],["kusonime.com",36],["suicidepics.com",36],["codesnail.com",36],["codingshiksha.com",36],["graphicux.com",36],["citychilli.com",36],["talkjarvis.com",36],["hdmotori.it",37],["tubsexer.*",39],["femdomtb.com",39],["porno-tour.*",39],["lenkino.*",39],["bobs-tube.com",39],["pornfd.com",39],["pornomoll.*",39],["camsclips.*",39],["popno-tour.net",39],["watchmdh.to",39],["camwhores.tv",39],["camhub.cc",39],["elfqrin.com",40],["satcesc.com",41],["apfelpatient.de",41],["lusthero.com",42],["m4ufree.*",43],["m2list.com",43],["embed.nana2play.com",43],["dallasnews.com",44],["lnk.news",45],["lnk.parts",45],["efukt.com",46],["wendycode.com",46],["springfieldspringfield.co.uk",47],["porndoe.com",48],["smsget.net",[49,50]],["kjanime.net",51],["gioialive.it",52],["classicreload.com",53],["scriptzhub.com",53],["hotpornfile.org",54],["coolsoft.altervista.org",54],["hackedonlinegames.com",54],["dailytech-news.eu",54],["settlersonlinemaps.com",54],["ad-doge.com",54],["magdownload.org",54],["kpkuang.org",54],["crypto4yu.com",54],["writedroid.*",54],["thenightwithoutthedawn.blogspot.com",54],["claimlite.club",54],["newscon.org",54],["rl6mans.com",54],["chicoer.com",55],["bostonherald.com",55],["dailycamera.com",55],["sportsplays.com",56],["ebookdz.com",57],["telerium.*",58],["pornvideotop.com",59],["arolinks.com",59],["xstory-fr.com",59],["1337x.*",59],["x1337x.*",59],["1337x.ninjaproxy1.com",59],["ytapi.cc",59],["letribunaldunet.fr",60],["vladan.fr",60],["live-tv-channels.org",61],["eslfast.com",62],["ge-map-overlays.appspot.com",63],["mad4wheels.com",63],["1xanimes.in",63],["logi.im",63],["emailnator.com",63],["claudelog.com",63],["freegamescasual.com",64],["tcpvpn.com",65],["oko.sh",65],["timesnownews.com",65],["timesnowhindi.com",65],["timesnowmarathi.com",65],["zoomtventertainment.com",65],["tsubasa.im",66],["sholah.net",67],["2rdroid.com",67],["bisceglielive.it",68],["pandajogosgratis.com.br",70],["5278.cc",71],["pandafreegames.*",72],["tonspion.de",73],["duplichecker.com",74],["plagiarismchecker.co",74],["plagiarismdetector.net",74],["searchenginereports.net",74],["smallseotools.com",75],["linkspaid.com",76],["proxydocker.com",76],["beeimg.com",[77,78]],["emturbovid.com",78],["findjav.com",78],["javggvideo.xyz",78],["mmtv01.xyz",78],["stbturbo.xyz",78],["trailerhg.xyz",78],["turboplayers.xyz",78],["turbovidhls.com",78],["viralharami.com",78],["ftlauderdalebeachcam.com",79],["ftlauderdalewebcam.com",79],["juneauharborwebcam.com",79],["keywestharborwebcam.com",79],["kittycatcam.com",79],["mahobeachcam.com",79],["miamiairportcam.com",79],["morganhillwebcam.com",79],["njwildlifecam.com",79],["nyharborwebcam.com",79],["paradiseislandcam.com",79],["pompanobeachcam.com",79],["portbermudawebcam.com",79],["portcanaveralwebcam.com",79],["portevergladeswebcam.com",79],["portmiamiwebcam.com",79],["portnywebcam.com",79],["portnassauwebcam.com",79],["portstmaartenwebcam.com",79],["portstthomaswebcam.com",79],["porttampawebcam.com",79],["sxmislandcam.com",79],["themes-dl.com",79],["badassdownloader.com",79],["badasshardcore.com",79],["badassoftcore.com",79],["nulljungle.com",79],["teevee.asia",79],["otakukan.com",79],["thoptv.*",80],["gearingcommander.com",81],["generate.plus",82],["calculate.plus",82],["avcesar.com",83],["audiotag.info",84],["tudigitale.it",85],["ibcomputing.com",86],["legia.net",87],["acapellas4u.co.uk",88],["robloxscripts.com",89],["libreriamo.it",89],["postazap.com",89],["filmyzones.com",89],["medebooks.xyz",89],["mashtips.com",89],["marriedgames.com.br",89],["4allprograms.me",89],["shortzzy.*",89],["nurgsm.com",89],["plugincrack.com",89],["gamingdeputy.com",89],["freewebcart.com",89],["gamekult.com",90],["streamhentaimovies.com",91],["konten.co.id",92],["diariodenavarra.es",93],["scripai.com",93],["myfxbook.com",93],["whatfontis.com",93],["katfile.*",93],["tubereader.me",93],["optifine.net",94],["luzernerzeitung.ch",95],["tagblatt.ch",95],["ableitungsrechner.net",96],["alternet.org",97],["gourmetsupremacy.com",97],["shrib.com",98],["streameast.*",99],["thestreameast.*",99],["techclips.net",99],["daddylivehd.*",99],["footyhunter.lol",99],["wecast.to",99],["freecourseweb.com",100],["coursewikia.com",100],["courseboat.com",100],["pornhub.*",101],["lne.es",[102,375]],["pornult.com",103],["webcamsdolls.com",103],["bitcotasks.com",[103,145]],["adsy.pw",103],["playstore.pw",103],["exactpay.online",103],["thothd.to",103],["proplanta.de",104],["textograto.com",105],["voyageforum.com",106],["hmc-id.blogspot.com",106],["myabandonware.com",106],["wcofun.*",106],["ilforumdeibrutti.is",106],["prad.de",[107,160]],["chatta.it",108],["ketubanjiwa.com",109],["nsfw247.to",110],["funzen.net",110],["extremereportbot.com",111],["getintopc.com",112],["qoshe.com",113],["lowellsun.com",114],["mamadu.pl",114],["dobrapogoda24.pl",114],["motohigh.pl",114],["namasce.pl",114],["ultimate-catch.eu",115],["cpopchanelofficial.com",116],["creditcardgenerator.com",117],["creditcardrush.com",117],["bostoncommons.net",117],["thejobsmovie.com",117],["hl-live.de",118],["satoshi-win.xyz",118],["encurtandourl.com",[118,122]],["www-daftarharga.blogspot.com",118],["ear-phone-review.com",118],["telefullenvivo.com",118],["listatv.pl",118],["coin-profits.xyz",118],["relampagomovies.com",118],["wohnmobilforum.de",118],["nulledbear.com",118],["sinnerclownceviri.net",118],["nilopolisonline.com.br",119],["mesquitaonline.com",119],["yellowbridge.com",119],["yaoiotaku.com",120],["moneyhouse.ch",121],["ihow.info",122],["filesus.com",122],["gotxx.*",122],["sturls.com",122],["turbo1.co",122],["hartico.tv",122],["cupra.forum",122],["turkanime.*",123],["valeronevijao.com",123],["yodelswartlike.com",123],["generatesnitrosate.com",123],["gamoneinterrupted.com",123],["metagnathtuggers.com",123],["rationalityaloelike.com",123],["sizyreelingly.com",123],["urochsunloath.com",123],["monorhinouscassaba.com",123],["antecoxalbobbing1010.com",123],["boonlessbestselling244.com",123],["cyamidpulverulence530.com",123],["guidon40hyporadius9.com",123],["449unceremoniousnasoseptal.com",123],["30sensualizeexpression.com",123],["greaseball6eventual20.com",123],["toxitabellaeatrebates306.com",123],["20demidistance9elongations.com",123],["audaciousdefaulthouse.com",123],["fittingcentermondaysunday.com",123],["launchreliantcleaverriver.com",123],["matriculant401merited.com",123],["realfinanceblogcenter.com",123],["telyn610zoanthropy.com",123],["un-block-voe.net",123],["v-o-e-unblock.com",123],["voe-un-block.com",123],["voe-unblock.*",123],["voeunbl0ck.com",123],["voeunblck.com",123],["voeunblk.com",123],["voeunblock.com",123],["voeunblock2.com",123],["voeunblock3.com",123],["agefi.fr",124],["cariskuy.com",125],["letras2.com",125],["yusepjaelani.blogspot.com",126],["letras.mus.br",127],["eletronicabr.com",128],["mtlurb.com",129],["onemanhua.com",130],["laksa19.github.io",131],["javcl.com",131],["tvlogy.to",131],["rp5.*",131],["live.dragaoconnect.net",131],["seznamzpravy.cz",131],["xerifetech.com",131],["freemcserver.net",131],["t3n.de",132],["allindiaroundup.com",133],["tapchipi.com",134],["dcleakers.com",134],["esgeeks.com",134],["pugliain.net",134],["uplod.net",134],["worldfreeware.com",134],["tech-blogs.com",134],["cardiagn.com",134],["fikiri.net",134],["myhackingworld.com",134],["vectorizer.io",135],["onehack.us",135],["smgplaza.com",135],["thapcam.net",135],["breznikar.com",135],["thefastlaneforum.com",136],["5flix.top",137],["bembed.net",137],["embedv.net",137],["javguard.club",137],["listeamed.net",137],["v6embed.xyz",137],["vembed.*",137],["vid-guard.com",137],["vidguardto.xyz",137],["yesmovies.*>>",137],["pistona.xyz",137],["vinomo.xyz",137],["moflix-stream.*",[137,166]],["trade2win.com",138],["modagamers.com",139],["khatrimaza.*",139],["freemagazines.top",139],["pogolinks.*",139],["straatosphere.com",139],["nullpk.com",139],["adslink.pw",139],["downloadudemy.com",139],["picgiraffe.com",139],["weadown.com",139],["freepornsex.net",139],["nurparatodos.com.ar",139],["popcornstream.*",140],["routech.ro",140],["hokej.net",140],["turkmmo.com",141],["acdriftingpro.com",142],["palermotoday.it",143],["baritoday.it",143],["trentotoday.it",143],["agrigentonotizie.it",143],["anconatoday.it",143],["arezzonotizie.it",143],["avellinotoday.it",143],["bresciatoday.it",143],["brindisireport.it",143],["casertanews.it",143],["cataniatoday.it",143],["cesenatoday.it",143],["chietitoday.it",143],["forlitoday.it",143],["frosinonetoday.it",143],["genovatoday.it",143],["ilpescara.it",143],["ilpiacenza.it",143],["latinatoday.it",143],["lecceprima.it",143],["leccotoday.it",143],["livornotoday.it",143],["messinatoday.it",143],["milanotoday.it",143],["modenatoday.it",143],["monzatoday.it",143],["novaratoday.it",143],["padovaoggi.it",143],["parmatoday.it",143],["perugiatoday.it",143],["pisatoday.it",143],["quicomo.it",143],["ravennatoday.it",143],["reggiotoday.it",143],["riminitoday.it",143],["romatoday.it",143],["salernotoday.it",143],["sondriotoday.it",143],["sportpiacenza.it",143],["ternitoday.it",143],["today.it",143],["torinotoday.it",143],["trevisotoday.it",143],["triesteprima.it",143],["udinetoday.it",143],["veneziatoday.it",143],["vicenzatoday.it",143],["thumpertalk.com",144],["austiblox.net",144],["thelayoff.com",145],["shorterall.com",145],["maxstream.video",145],["tvepg.eu",145],["manwan.xyz",145],["dailymaverick.co.za",146],["ludigames.com",147],["made-by.org",147],["worldtravelling.com",147],["technichero.com",147],["androidadult.com",147],["aeroxplorer.com",147],["sportitalialive.com",147],["adrinolinks.com",148],["link.vipurl.in",148],["nanolinks.in",148],["fadedfeet.com",149],["homeculina.com",149],["ineedskin.com",149],["kenzo-flowertag.com",149],["lawyex.co",149],["mdn.lol",149],["starkroboticsfrc.com",150],["sinonimos.de",150],["antonimos.de",150],["quesignifi.ca",150],["tiktokrealtime.com",150],["tiktokcounter.net",150],["tpayr.xyz",150],["poqzn.xyz",150],["ashrfd.xyz",150],["rezsx.xyz",150],["tryzt.xyz",150],["ashrff.xyz",150],["rezst.xyz",150],["dawenet.com",150],["erzar.xyz",150],["waezm.xyz",150],["waezg.xyz",150],["blackwoodacademy.org",150],["cryptednews.space",150],["vivuq.com",150],["swgop.com",150],["vbnmll.com",150],["telcoinfo.online",150],["dshytb.com",150],["bitzite.com",151],["coingraph.us",152],["impact24.us",152],["tpi.li",153],["oii.la",153],["www.apkmoddone.com",154],["sitemini.io.vn",155],["vip1s.top",155],["dl.apkmoddone.com",156],["phongroblox.com",156],["financacerta.com",157],["encurtads.net",157],["shortencash.click",158],["lablue.*",159],["4-liga.com",160],["4fansites.de",160],["4players.de",160],["9monate.de",160],["aachener-nachrichten.de",160],["aachener-zeitung.de",160],["abendblatt.de",160],["abendzeitung-muenchen.de",160],["about-drinks.com",160],["abseits-ka.de",160],["airliners.de",160],["ajaxshowtime.com",160],["allgemeine-zeitung.de",160],["alpin.de",160],["antenne.de",160],["arcor.de",160],["areadvd.de",160],["areamobile.de",160],["ariva.de",160],["astronews.com",160],["aussenwirtschaftslupe.de",160],["auszeit.bio",160],["auto-motor-und-sport.de",160],["auto-service.de",160],["autobild.de",160],["autoextrem.de",160],["autopixx.de",160],["autorevue.at",160],["autotrader.nl",160],["az-online.de",160],["baby-vornamen.de",160],["babyclub.de",160],["bafoeg-aktuell.de",160],["berliner-kurier.de",160],["berliner-zeitung.de",160],["bigfm.de",160],["bikerszene.de",160],["bildderfrau.de",160],["blackd.de",160],["blick.de",160],["boerse-online.de",160],["boerse.de",160],["boersennews.de",160],["braunschweiger-zeitung.de",160],["brieffreunde.de",160],["brigitte.de",160],["buerstaedter-zeitung.de",160],["buffed.de",160],["businessinsider.de",160],["buzzfeed.at",160],["buzzfeed.de",160],["caravaning.de",160],["cavallo.de",160],["chefkoch.de",160],["cinema.de",160],["clever-tanken.de",160],["computerbild.de",160],["computerhilfen.de",160],["comunio-cl.com",160],["comunio.*",160],["connect.de",160],["chip.de",160],["da-imnetz.de",160],["dasgelbeblatt.de",160],["dbna.com",160],["dbna.de",160],["deichstube.de",160],["deine-tierwelt.de",160],["der-betze-brennt.de",160],["derwesten.de",160],["desired.de",160],["dhd24.com",160],["dieblaue24.com",160],["digitalfernsehen.de",160],["dnn.de",160],["donnerwetter.de",160],["e-hausaufgaben.de",160],["e-mountainbike.com",160],["eatsmarter.de",160],["echo-online.de",160],["ecomento.de",160],["einfachschoen.me",160],["elektrobike-online.com",160],["eltern.de",160],["epochtimes.de",160],["essen-und-trinken.de",160],["express.de",160],["extratipp.com",160],["familie.de",160],["fanfiktion.de",160],["fehmarn24.de",160],["fettspielen.de",160],["fid-gesundheitswissen.de",160],["finanzen.*",160],["finanznachrichten.de",160],["finanztreff.de",160],["finya.de",160],["firmenwissen.de",160],["fitforfun.de",160],["fnp.de",160],["football365.fr",160],["formel1.de",160],["fr.de",160],["frankfurter-wochenblatt.de",160],["freenet.de",160],["fremdwort.de",160],["froheweihnachten.info",160],["frustfrei-lernen.de",160],["fuldaerzeitung.de",160],["funandnews.de",160],["fussballdaten.de",160],["futurezone.de",160],["gala.de",160],["gamepro.de",160],["gamersglobal.de",160],["gamesaktuell.de",160],["gamestar.de",160],["gameswelt.*",160],["gamezone.de",160],["gartendialog.de",160],["gartenlexikon.de",160],["gedichte.ws",160],["geissblog.koeln",160],["gelnhaeuser-tageblatt.de",160],["general-anzeiger-bonn.de",160],["geniale-tricks.com",160],["genialetricks.de",160],["gesund-vital.de",160],["gesundheit.de",160],["gevestor.de",160],["gewinnspiele.tv",160],["giessener-allgemeine.de",160],["giessener-anzeiger.de",160],["gifhorner-rundschau.de",160],["giga.de",160],["gipfelbuch.ch",160],["gmuender-tagespost.de",160],["gruenderlexikon.de",160],["gusto.at",160],["gut-erklaert.de",160],["gutfuerdich.co",160],["hallo-muenchen.de",160],["hamburg.de",160],["hanauer.de",160],["hardwareluxx.de",160],["hartziv.org",160],["harzkurier.de",160],["haus-garten-test.de",160],["hausgarten.net",160],["haustec.de",160],["haz.de",160],["heftig.*",160],["heidelberg24.de",160],["heilpraxisnet.de",160],["heise.de",160],["helmstedter-nachrichten.de",160],["hersfelder-zeitung.de",160],["hftg.co",160],["hifi-forum.de",160],["hna.de",160],["hochheimer-zeitung.de",160],["hoerzu.de",160],["hofheimer-zeitung.de",160],["iban-rechner.de",160],["ikz-online.de",160],["immobilienscout24.de",160],["ingame.de",160],["inside-digital.de",160],["inside-handy.de",160],["investor-verlag.de",160],["jappy.com",160],["jpgames.de",160],["kabeleins.de",160],["kachelmannwetter.com",160],["kamelle.de",160],["kicker.de",160],["kindergeld.org",160],["klettern-magazin.de",160],["klettern.de",160],["kochbar.de",160],["kreis-anzeiger.de",160],["kreisbote.de",160],["kreiszeitung.de",160],["ksta.de",160],["kurierverlag.de",160],["lachainemeteo.com",160],["lampertheimer-zeitung.de",160],["landwirt.com",160],["laut.de",160],["lauterbacher-anzeiger.de",160],["leckerschmecker.me",160],["leinetal24.de",160],["lesfoodies.com",160],["levif.be",160],["lifeline.de",160],["liga3-online.de",160],["likemag.com",160],["linux-community.de",160],["linux-magazin.de",160],["live.vodafone.de",160],["ln-online.de",160],["lokalo24.de",160],["lustaufsleben.at",160],["lustich.de",160],["lvz.de",160],["lz.de",160],["mactechnews.de",160],["macwelt.de",160],["macworld.co.uk",160],["mail.de",160],["main-spitze.de",160],["manager-magazin.de",160],["manga-tube.me",160],["mathebibel.de",160],["mathepower.com",160],["maz-online.de",160],["medisite.fr",160],["mehr-tanken.de",160],["mein-kummerkasten.de",160],["mein-mmo.de",160],["mein-wahres-ich.de",160],["meine-anzeigenzeitung.de",160],["meinestadt.de",160],["menshealth.de",160],["mercato365.com",160],["merkur.de",160],["messen.de",160],["metal-hammer.de",160],["metalflirt.de",160],["meteologix.com",160],["minecraft-serverlist.net",160],["mittelbayerische.de",160],["modhoster.de",160],["moin.de",160],["mopo.de",160],["morgenpost.de",160],["motor-talk.de",160],["motorbasar.de",160],["motorradonline.de",160],["motorsport-total.com",160],["motortests.de",160],["mountainbike-magazin.de",160],["moviejones.de",160],["moviepilot.de",160],["mt.de",160],["mtb-news.de",160],["musiker-board.de",160],["musikexpress.de",160],["musikradar.de",160],["mz-web.de",160],["n-tv.de",160],["naumburger-tageblatt.de",160],["netzwelt.de",160],["neuepresse.de",160],["neueroeffnung.info",160],["news.at",160],["news.de",160],["news38.de",160],["newsbreak24.de",160],["nickles.de",160],["nicknight.de",160],["nl.hardware.info",160],["nn.de",160],["nnn.de",160],["nordbayern.de",160],["notebookchat.com",160],["notebookcheck-ru.com",160],["notebookcheck-tr.com",160],["notebookcheck.*",160],["noz-cdn.de",160],["noz.de",160],["nrz.de",160],["nw.de",160],["nwzonline.de",160],["oberhessische-zeitung.de",160],["och.to",160],["oeffentlicher-dienst.info",160],["onlinekosten.de",160],["onvista.de",160],["op-marburg.de",160],["op-online.de",160],["outdoor-magazin.com",160],["outdoorchannel.de",160],["paradisi.de",160],["pc-magazin.de",160],["pcgames.de",160],["pcgameshardware.de",160],["pcwelt.de",160],["pcworld.es",160],["peiner-nachrichten.de",160],["pferde.de",160],["pietsmiet.de",160],["pixelio.de",160],["pkw-forum.de",160],["playboy.de",160],["playfront.de",160],["pnn.de",160],["pons.com",160],["prignitzer.de",160],["profil.at",160],["promipool.de",160],["promobil.de",160],["prosiebenmaxx.de",160],["psychic.de",[160,182]],["quoka.de",160],["radio.at",160],["radio.de",160],["radio.dk",160],["radio.es",160],["radio.fr",160],["radio.it",160],["radio.net",160],["radio.pl",160],["radio.pt",160],["radio.se",160],["ran.de",160],["readmore.de",160],["rechtslupe.de",160],["recording.de",160],["rennrad-news.de",160],["reuters.com",160],["reviersport.de",160],["rhein-main-presse.de",160],["rheinische-anzeigenblaetter.de",160],["rimondo.com",160],["roadbike.de",160],["roemische-zahlen.net",160],["rollingstone.de",160],["rot-blau.com",160],["rp-online.de",160],["rtl.de",[160,256]],["rtv.de",160],["rugby365.fr",160],["ruhr24.de",160],["rundschau-online.de",160],["runnersworld.de",160],["safelist.eu",160],["salzgitter-zeitung.de",160],["sat1.de",160],["sat1gold.de",160],["schoener-wohnen.de",160],["schwaebische-post.de",160],["schwarzwaelder-bote.de",160],["serienjunkies.de",160],["shz.de",160],["sixx.de",160],["skodacommunity.de",160],["smart-wohnen.net",160],["sn.at",160],["sozialversicherung-kompetent.de",160],["spiegel.de",160],["spielen.de",160],["spieletipps.de",160],["spielfilm.de",160],["sport.de",160],["sport1.de",160],["sport365.fr",160],["sportal.de",160],["spox.com",160],["stern.de",160],["stuttgarter-nachrichten.de",160],["stuttgarter-zeitung.de",160],["sueddeutsche.de",160],["svz.de",160],["szene1.at",160],["szene38.de",160],["t-online.de",160],["tagesspiegel.de",160],["taschenhirn.de",160],["techadvisor.co.uk",160],["techstage.de",160],["tele5.de",160],["teltarif.de",160],["testedich.*",160],["the-voice-of-germany.de",160],["thueringen24.de",160],["tichyseinblick.de",160],["tierfreund.co",160],["tiervermittlung.de",160],["torgranate.de",160],["transfermarkt.*",160],["trend.at",160],["truckscout24.*",160],["tv-media.at",160],["tvdigital.de",160],["tvinfo.de",160],["tvspielfilm.de",160],["tvtoday.de",160],["tvtv.*",160],["tz.de",[160,175]],["unicum.de",160],["unnuetzes.com",160],["unsere-helden.com",160],["unterhalt.net",160],["usinger-anzeiger.de",160],["usp-forum.de",160],["videogameszone.de",160],["vienna.at",160],["vip.de",160],["virtualnights.com",160],["vox.de",160],["wa.de",160],["wallstreet-online.de",[160,163]],["waz.de",160],["weather.us",160],["webfail.com",160],["weihnachten.me",160],["weihnachts-bilder.org",160],["weihnachts-filme.com",160],["welt.de",160],["weltfussball.at",160],["weristdeinfreund.de",160],["werkzeug-news.de",160],["werra-rundschau.de",160],["wetterauer-zeitung.de",160],["wetteronline.*",160],["wieistmeineip.*",160],["wiesbadener-kurier.de",160],["wiesbadener-tagblatt.de",160],["winboard.org",160],["windows-7-forum.net",160],["winfuture.de",[160,171]],["wintotal.de",160],["wlz-online.de",160],["wn.de",160],["wohngeld.org",160],["wolfenbuetteler-zeitung.de",160],["wolfsburger-nachrichten.de",160],["woman.at",160],["womenshealth.de",160],["wormser-zeitung.de",160],["woxikon.de",160],["wp.de",160],["wr.de",160],["wunderweib.de",160],["yachtrevue.at",160],["ze.tt",160],["zeit.de",160],["lecker.de",160],["meineorte.com",161],["osthessen-news.de",161],["techadvisor.com",161],["focus.de",161],["wetter.*",162],["herzporno.net",164],["pornhub-sexfilme.net",164],["pornojenny.net",164],["pornoleon.com",164],["deinesexfilme.com",165],["einfachtitten.com",165],["lesbenhd.com",165],["milffabrik.com",[165,227]],["porn-monkey.com",165],["porndrake.com",165],["pornhubdeutsch.net",165],["pornoaffe.com",165],["pornodavid.com",165],["pornoente.tv",[165,227]],["pornofisch.com",165],["pornofelix.com",165],["pornohammer.com",165],["pornohelm.com",165],["pornoklinge.com",165],["pornotom.com",[165,227]],["pornotommy.com",165],["pornovideos-hd.com",165],["pornozebra.com",[165,227]],["xhamsterdeutsch.xyz",165],["xnxx-sexfilme.com",165],["nu6i-bg-net.com",167],["kiaclub.cz",167],["khsm.io",167],["webcreator-journal.com",167],["msdos-games.com",167],["blocklayer.com",167],["animeshqip.org",167],["weknowconquer.com",167],["giff.cloud",167],["aquarius-horoscopes.com",168],["cancer-horoscopes.com",168],["dubipc.blogspot.com",168],["echoes.gr",168],["engel-horoskop.de",168],["freegames44.com",168],["fuerzasarmadas.eu",168],["gemini-horoscopes.com",168],["jurukunci.net",168],["krebs-horoskop.com",168],["leo-horoscopes.com",168],["maliekrani.com",168],["nklinks.click",168],["ourenseando.es",168],["pisces-horoscopes.com",168],["radio-en-direct.fr",168],["sagittarius-horoscopes.com",168],["scorpio-horoscopes.com",168],["singlehoroskop-loewe.de",168],["skat-karten.de",168],["skorpion-horoskop.com",168],["taurus-horoscopes.com",168],["the1security.com",168],["virgo-horoscopes.com",168],["zonamarela.blogspot.com",168],["yoima.hatenadiary.com",168],["kaystls.site",169],["ftuapps.dev",170],["studydhaba.com",170],["freecourse.tech",170],["victor-mochere.com",170],["papunika.com",170],["mobilanyheter.net",170],["prajwaldesai.com",[170,245]],["carscoops.com",171],["dziennik.pl",171],["eurointegration.com.ua",171],["flatpanelshd.com",171],["footballtransfer.com.ua",171],["footballtransfer.ru",171],["hoyme.jp",171],["issuya.com",171],["itainews.com",171],["iusm.co.kr",171],["logicieleducatif.fr",171],["mynet.com",[171,196]],["onlinegdb.com",171],["picrew.me",171],["pravda.com.ua",171],["reportera.co.kr",171],["sportanalytic.com",171],["sportsrec.com",171],["sportsseoul.com",171],["text-compare.com",171],["tweaksforgeeks.com",171],["wfmz.com",171],["worldhistory.org",171],["palabr.as",171],["motscroises.fr",171],["cruciverba.it",171],["w.grapps.me",171],["gazetaprawna.pl",171],["pressian.com",171],["raenonx.cc",[171,272]],["indiatimes.com",171],["missyusa.com",171],["aikatu.jp",171],["ark-unity.com",171],["cool-style.com.tw",171],["doanhnghiepvn.vn",171],["mykhel.com",171],["automobile-catalog.com",172],["motorbikecatalog.com",172],["maketecheasier.com",172],["mlbpark.donga.com",173],["jjang0u.com",174],["neowin.net",175],["newatlas.com",175],["razzball.com",175],["12thmanrising.com",175],["aroundthefoghorn.com",175],["arrowheadaddict.com",175],["badgerofhonor.com",175],["bamahammer.com",175],["beargoggleson.com",175],["beyondtheflag.com",175],["blackandteal.com",175],["blogredmachine.com",175],["bluemanhoop.com",175],["boltbeat.com",175],["bosoxinjection.com",175],["buffalowdown.com",175],["caneswarning.com",175],["catcrave.com",175],["chopchat.com",175],["climbingtalshill.com",175],["cubbiescrib.com",175],["dailyknicks.com",175],["dairylandexpress.com",175],["dawindycity.com",175],["dawnofthedawg.com",175],["detroitjockcity.com",175],["dodgersway.com",175],["ebonybird.com",175],["fansided.com",175],["gbmwolverine.com",175],["gmenhq.com",175],["hailfloridahail.com",175],["hardwoodhoudini.com",175],["horseshoeheroes.com",175],["housethathankbuilt.com",175],["huskercorner.com",175],["insidetheiggles.com",175],["jaysjournal.com",175],["justblogbaby.com",175],["kckingdom.com",175],["kingjamesgospel.com",175],["lakeshowlife.com",175],["lombardiave.com",175],["motorcitybengals.com",175],["musketfire.com",175],["nflspinzone.com",175],["ninernoise.com",175],["nugglove.com",175],["phinphanatic.com",175],["pistonpowered.com",175],["predominantlyorange.com",175],["ramblinfan.com",175],["redbirdrants.com",175],["reviewingthebrew.com",175],["riggosrag.com",175],["ripcityproject.com",175],["risingapple.com",175],["rumbunter.com",175],["scarletandgame.com",175],["section215.com",175],["sidelionreport.com",175],["slapthesign.com",175],["sodomojo.com",175],["stillcurtain.com",175],["stormininnorman.com",175],["stripehype.com",175],["thatballsouttahere.com",175],["thejetpress.com",175],["thelandryhat.com",175],["thepewterplank.com",175],["thesmokingcuban.com",175],["thevikingage.com",175],["thunderousintentions.com",175],["valleyofthesuns.com",175],["whodatdish.com",175],["yanksgoyard.com",175],["auto-swiat.pl",176],["download.kingtecnologia.com",177],["daemonanime.net",178],["bgmateriali.com",178],["daemon-hentai.com",179],["embedtv.net",180],["tinhte.vn",181],["app.simracing.gp",181],["forumdz.com",182],["zilinak.sk",182],["pdfaid.com",182],["bootdey.com",182],["mail.com",182],["moegirl.org.cn",182],["flix-wave.lol",182],["fmovies0.cc",182],["worthcrete.com",182],["infomatricula.pt",182],["my-code4you.blogspot.com",183],["vrcmods.com",184],["osuskinner.com",184],["osuskins.net",184],["pentruea.com",185],["mchacks.net",186],["why-tech.it",187],["compsmag.com",188],["tapetus.pl",189],["autoroad.cz",190],["brawlhalla.fr",190],["tecnobillo.com",190],["pokemon-project.com",190],["breatheheavy.com",191],["wenxuecity.com",192],["key-hub.eu",193],["fabioambrosi.it",194],["tattle.life",195],["emuenzen.de",195],["terrylove.com",195],["cidade.iol.pt",197],["fantacalcio.it",198],["hentaifreak.org",199],["hypebeast.com",200],["krankheiten-simulieren.de",201],["catholic.com",202],["techinferno.com",203],["ibeconomist.com",204],["bookriot.com",205],["purposegames.com",206],["globo.com",207],["latimes.com",207],["claimrbx.gg",208],["perelki.net",209],["vpn-anbieter-vergleich-test.de",210],["livingincebuforums.com",211],["tv247us.live",211],["paperzonevn.com",212],["alltechnerd.com",213],["malaysianwireless.com",214],["erinsakura.com",215],["infofuge.com",215],["freejav.guru",215],["novelmultiverse.com",215],["fritidsmarkedet.dk",216],["maskinbladet.dk",216],["15min.lt",217],["baddiehub.com",218],["mr9soft.com",219],["adult-sex-gamess.com",220],["hentaigames.app",220],["mobilesexgamesx.com",220],["mysexgamer.com",220],["porngameshd.com",220],["sexgamescc.com",220],["xnxx-sex-videos.com",220],["f2movies.to",221],["freeporncave.com",222],["tubsxxx.com",223],["manga18fx.com",224],["freebnbcoin.com",224],["sextvx.com",225],["muztext.com",226],["pornohans.com",227],["nursexfilme.com",227],["pornohirsch.net",227],["xhamster-sexvideos.com",227],["pornoschlange.com",227],["xhamsterdeutsch.*",227],["hdpornos.net",227],["gutesexfilme.com",227],["zona-leros.com",227],["charbelnemnom.com",228],["simplebits.io",229],["online-fix.me",230],["privatemoviez.*",231],["gamersdiscussionhub.com",231],["elahmad.com",232],["owlzo.com",233],["q1003.com",234],["blogpascher.com",235],["testserver.pro",236],["lifestyle.bg",236],["money.bg",236],["news.bg",236],["topsport.bg",236],["webcafe.bg",236],["schoolcheats.net",237],["mgnet.xyz",238],["advertiserandtimes.co.uk",239],["techsolveprac.com",240],["joomlabeginner.com",241],["askpaccosi.com",242],["largescaleforums.com",243],["dubznetwork.com",244],["dongknows.com",246],["traderepublic.community",247],["babia.to",248],["html5.gamemonetize.co",249],["code2care.org",250],["gmx.*",251],["yts-subs.net",252],["dlhd.sx",252],["xxxxsx.com",253],["ngontinh24.com",254],["idevicecentral.com",255],["mangacrab.com",257],["hortonanderfarom.blogspot.com",258],["viefaucet.com",259],["pourcesoir.in",259],["cloud-computing-central.com",260],["afk.guide",261],["businessnamegenerator.com",262],["derstandard.at",263],["derstandard.de",263],["rocketnews24.com",264],["soranews24.com",264],["youpouch.com",264],["gourmetscans.net",265],["ilsole24ore.com",266],["ipacrack.com",267],["infokik.com",268],["porhubvideo.com",270],["webseriessex.com",270],["panuvideo.com",[270,271]],["pornktubes.net",270],["deezer.com",272],["fosslinux.com",273],["shrdsk.me",274],["examword.com",275],["sempreupdate.com.br",275],["tribuna.com",276],["trendsderzukunft.de",277],["gal-dem.com",277],["lostineu.eu",277],["oggitreviso.it",277],["speisekarte.de",277],["mixed.de",277],["lightnovelspot.com",[278,279]],["novelpub.com",[278,279]],["webnovelpub.com",[278,279]],["hwzone.co.il",280],["nammakalvi.com",281],["igay69.com",281],["c2g.at",282],["terafly.me",282],["elamigos-games.com",282],["elamigos-games.net",282],["elamigosgames.org",282],["dktechnicalmate.com",283],["recipahi.com",283],["vpntester.org",284],["japscan.lol",285],["digitask.ru",286],["tempumail.com",287],["sexvideos.host",288],["camcaps.*",289],["10alert.com",290],["cryptstream.de",291],["nydus.org",291],["techhelpbd.com",292],["fapdrop.com",293],["cellmapper.net",294],["hdrez.com",295],["youwatch-serie.com",295],["russland.jetzt",295],["printablecreative.com",296],["peachprintable.com",296],["comohoy.com",297],["leak.sx",297],["paste.bin.sx",297],["pornleaks.in",297],["merlininkazani.com",297],["j91.asia",298],["jeniusplay.com",299],["indianyug.com",300],["rgb.vn",300],["needrom.com",301],["criptologico.com",302],["megadrive-emulator.com",303],["eromanga-show.com",304],["hentai-one.com",304],["hentaipaw.com",304],["10minuteemails.com",305],["luxusmail.org",305],["w3cub.com",306],["bangpremier.com",307],["nyaa.iss.ink",308],["drivebot.*",309],["thenextplanet1.*",310],["tnp98.xyz",310],["techedubyte.com",311],["poplinks.*",312],["tickzoo.tv",313],["oploverz.*",313],["memedroid.com",314],["karaoketexty.cz",315],["filmizlehdfilm.com",316],["filmizletv.*",316],["fullfilmizle.cc",316],["gofilmizle.net",316],["resortcams.com",317],["cheatography.com",317],["sonixgvn.net",318],["autoscout24.*",319],["mjakmama24.pl",320],["cheatermad.com",321],["work.ink",322],["ville-ideale.fr",323],["brainly.*",324],["eodev.com",324],["xfreehd.com",326],["freethesaurus.com",327],["thefreedictionary.com",327],["fm-arena.com",328],["tradersunion.com",329],["tandess.com",330],["allosurf.net",330],["spontacts.com",331],["dankmemer.lol",332],["getexploits.com",333],["fplstatistics.com",334],["breitbart.com",335],["salidzini.lv",336],["cryptorank.io",[337,338]],["qqwebplay.xyz",339],["molbiotools.com",340],["vods.tv",341],["18xxx.xyz",[342,376]],["raidrush.net",343],["xnxxcom.xyz",344],["videzz.net",345],["spambox.xyz",346],["dreamdth.com",347],["freemodsapp.in",347],["onlytech.com",347],["en-thunderscans.com",348],["infinityscans.xyz",349],["infinityscans.net",349],["infinityscans.org",349],["iqksisgw.xyz",350],["caroloportunidades.com.br",351],["coempregos.com.br",351],["foodiesgallery.com",351],["vikatan.com",352],["camhub.world",353],["mma-core.*",354],["pouvideo.*",355],["povvideo.*",355],["povw1deo.*",355],["povwideo.*",355],["powv1deo.*",355],["powvibeo.*",355],["powvideo.*",355],["powvldeo.*",355],["op.gg",356],["teracourses.com",357],["servustv.com",[358,359]],["freevipservers.net",360],["streambtw.com",361],["qrcodemonkey.net",362],["streamup.ws",363],["tv-films.co.uk",364],["cool--web-de.translate.goog",[365,366]],["gps--cache-de.translate.goog",[365,366]],["web--spiele-de.translate.goog",[365,366]],["fun--seiten-de.translate.goog",[365,366]],["photo--alben-de.translate.goog",[365,366]],["wetter--vorhersage-de.translate.goog",[365,366]],["coolsoftware-de.translate.goog",[365,366]],["kryptografie-de.translate.goog",[365,366]],["cool--domains-de.translate.goog",[365,366]],["net--tours-de.translate.goog",[365,366]],["such--maschine-de.translate.goog",[365,366]],["qul-de.translate.goog",[365,366]],["mailtool-de.translate.goog",[365,366]],["c--ix-de.translate.goog",[365,366]],["softwareengineer-de.translate.goog",[365,366]],["net--tools-de.translate.goog",[365,366]],["hilfen-de.translate.goog",[365,366]],["45er-de.translate.goog",[365,366]],["cooldns-de.translate.goog",[365,366]],["hardware--entwicklung-de.translate.goog",[365,366]],["bgsi.gg",367],["kio.ac",368],["friv.com",369],["tdtnews.com",370],["santafenewmexican.com",370],["sextb.*>>",371],["nepalieducate.com",372],["idlixku.com",373],["freegames.com",374],["levante-emv.com",375],["mallorcazeitung.es",375],["regio7.cat",375],["superdeporte.es",375],["laopiniondezamora.es",375],["laopiniondemurcia.es",375],["laopiniondemalaga.es",375],["laopinioncoruna.es",375],["lacronicabadajoz.com",375],["informacion.es",375],["farodevigo.es",375],["emporda.info",375],["elperiodicomediterraneo.com",375],["elperiodicoextremadura.com",375],["epe.es",375],["elperiodicodearagon.com",375],["eldia.es",375],["elcorreoweb.es",375],["diariodemallorca.es",375],["diariodeibiza.es",375],["diariocordoba.com",375],["diaridegirona.cat",375],["elperiodico.com",375],["laprovincia.es",375],["4tube.live",376],["nxxn.live",376],["redtub.live",376],["olympustaff.com",377],["imleagues.com",378]]);
const exceptionsMap = new Map([["vvid30c.*",[137]]]);
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
    try { preventSetTimeout(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
