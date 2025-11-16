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
const argsList = [["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["/\\+\\+|setTimeout|\\.close\\(\\)|Loading|&&delete/"],["native code","10-1000"],["/offsetHeight|loaded/"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["google_jobrunner"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["alert","2000"],["/adblock|isRequestPresent/"],["documentElement.innerHTML"],["_0x","500"],["isRequestPresent"],["checkAdblock"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["/loadMomoVip|loadExo|includeSpecial/"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["consent"],["await _0x"],["adbl"],["openPopunder"],["closeBanner"],[".getComputedStyle"],["offsetHeight"],["offsetLeft"],["height"],["location.href","1000"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["click"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],[".redirect"],["/AdBlock/i"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["","2000-5000"],["contrformpub"],["trigger","0"],["ADB"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["getComputedStyle(testAd)"],[".adv-"],["/Executed|modal/"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["/location\\.(replace|href)|stopAndExitFullscreen/"],["displayAdBlockedVideo"],["test.remove","100"],["adblock","2000"],["adBlockerModal"],["","10000-15000"],["/adex|loadAds|adCollapsedCount|ad-?block/i"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["mode:\"no-cors\""],["Visibility"],["ast"],["googlesyndication"],["start"],["moneyDetect"],["sub"],["/createElement|addEventListener|clientHeight/"],["testAd"],[".redirected"],["TNCMS.DMP"],["doubleclick"],["document.body.style.overflow"],["[native code]","120000"]];
const hostnamesMap = new Map([["poophq.com",0],["veev.to",0],["dogdrip.net",1],["infinityfree.com",1],["smsonline.cloud",[1,2]],["welt.de",[1,157]],["faqwiki.us",3],["mail.yahoo.com",[4,323]],["maxcheaters.com",4],["postimees.ee",4],["police.community",4],["gisarea.com",4],["schaken-mods.com",4],["tvnet.lv",4],["theclashify.com",4],["txori.com",4],["olarila.com",4],["deletedspeedstreams.blogspot.com",4],["schooltravelorganiser.com",4],["xhardhempus.net",4],["mhn.quest",4],["leagueofgraphs.com",4],["hieunguyenphoto.com",4],["benzinpreis.de",4],["th.gl",[5,6]],["tvtropes.org",7],["lastampa.it",8],["m.timesofindia.com",9],["timesofindia.indiatimes.com",9],["youmath.it",9],["redensarten-index.de",9],["lesoir.be",9],["electriciansforums.net",9],["keralatelecom.info",9],["universegunz.net",9],["happypenguin.altervista.org",9],["everyeye.it",9],["eztv.*",9],["bluedrake42.com",9],["supermarioemulator.com",9],["futbollibrehd.com",9],["eska.pl",9],["eskarock.pl",9],["voxfm.pl",9],["mathaeser.de",9],["betaseries.com",9],["free-sms-receive.com",9],["sms-receive-online.com",9],["computer76.ru",9],["golem.de",[10,11,157]],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["downloadr.in",11],["topcomicporno.com",11],["sushi-scan.*",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["jeep-cj.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["seriesperu.com",11],["spigotunlocked.*",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,267]],["topsporter.net",[11,267]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["ahmedmode.*",11],["esopress.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["bizdustry.com",11],["storefront.com.ng",11],["pkbiosfix.com",11],["casi3.xyz",11],["forum-xiaomi.com",11],["mediafire.com",12],["yts.*",13],["720pstream.*",13],["1stream.*",13],["seattletimes.com",14],["bestgames.com",15],["yiv.com",15],["globalrph.com",16],["e-glossa.it",17],["webcheats.com.br",18],["urlcero.*",19],["elamigosgamez.com",19],["gala.fr",20],["gentside.com",20],["geo.fr",20],["hbrfrance.fr",20],["nationalgeographic.fr",20],["ohmymag.com",20],["serengo.net",20],["vsd.fr",20],["short.pe",21],["thefmovies.*",21],["footystreams.net",21],["katestube.com",21],["updato.com",[22,35]],["totaldebrid.*",23],["sandrives.*",23],["daizurin.com",23],["pendekarsubs.us",23],["dreamfancy.org",23],["rysafe.blogspot.com",23],["techacode.com",23],["toppng.com",23],["th-world.com",23],["avjamack.com",23],["avjamak.net",23],["cnnamador.com",24],["nudecelebforum.com",25],["pronpic.org",26],["thewebflash.com",27],["discordfastfood.com",27],["xup.in",27],["popularmechanics.com",28],["comunidadgzone.es",29],["fxporn69.*",29],["mp3fy.com",29],["lebensmittelpraxis.de",29],["aliancapes.*",29],["forum-pokemon-go.fr",29],["praxis-jugendarbeit.de",29],["dictionnaire-medical.net",29],["cle0desktop.blogspot.com",29],["up-load.io",29],["keysbrasil.blogspot.com",29],["hotpress.info",29],["turkleech.com",29],["anibatch.me",29],["anime-i.com",29],["gewinde-normen.de",29],["tucinehd.com",29],["kdramasmaza.com.pk",29],["jellynote.com",30],["eporner.com",31],["pornbimbo.com",32],["4j.com",32],["avoiderrors.com",33],["sitarchive.com",33],["livenewsof.com",33],["topnewsshow.com",33],["gatcha.org",33],["kusonime.com",33],["suicidepics.com",33],["codesnail.com",33],["codingshiksha.com",33],["graphicux.com",33],["citychilli.com",33],["talkjarvis.com",33],["hdmotori.it",34],["tubsexer.*",36],["femdomtb.com",36],["porno-tour.*",36],["lenkino.*",36],["bobs-tube.com",36],["pornfd.com",36],["pornomoll.*",36],["camsclips.*",36],["popno-tour.net",36],["watchmdh.to",36],["camwhores.tv",36],["camhub.cc",36],["elfqrin.com",37],["satcesc.com",38],["apfelpatient.de",38],["lusthero.com",39],["m4ufree.*",40],["m2list.com",40],["embed.nana2play.com",40],["dallasnews.com",41],["lnk.news",42],["lnk.parts",42],["efukt.com",43],["wendycode.com",43],["springfieldspringfield.co.uk",44],["porndoe.com",45],["smsget.net",[46,47]],["kjanime.net",48],["gioialive.it",49],["classicreload.com",50],["scriptzhub.com",50],["hotpornfile.org",51],["coolsoft.altervista.org",51],["hackedonlinegames.com",51],["dailytech-news.eu",51],["settlersonlinemaps.com",51],["ad-doge.com",51],["magdownload.org",51],["kpkuang.org",51],["crypto4yu.com",51],["writedroid.*",51],["thenightwithoutthedawn.blogspot.com",51],["claimlite.club",51],["newscon.org",51],["rl6mans.com",51],["chicoer.com",52],["bostonherald.com",52],["dailycamera.com",52],["sportsplays.com",53],["ebookdz.com",54],["telerium.*",55],["pornvideotop.com",56],["arolinks.com",56],["xstory-fr.com",56],["1337x.*",56],["x1337x.*",56],["1337x.ninjaproxy1.com",56],["ytapi.cc",56],["letribunaldunet.fr",57],["vladan.fr",57],["live-tv-channels.org",58],["eslfast.com",59],["ge-map-overlays.appspot.com",60],["mad4wheels.com",60],["1xanimes.in",60],["logi.im",60],["emailnator.com",60],["claudelog.com",60],["freegamescasual.com",61],["tcpvpn.com",62],["oko.sh",62],["timesnownews.com",62],["timesnowhindi.com",62],["timesnowmarathi.com",62],["zoomtventertainment.com",62],["tsubasa.im",63],["sholah.net",64],["2rdroid.com",64],["bisceglielive.it",65],["openspeedtest.com",66],["addtobucketlist.com",66],["3dzip.org",[66,67]],["ilmeteo.it",66],["wcoforever.com",66],["comprovendolibri.it",66],["healthelia.com",66],["wcoanimedub.tv",66],["wcoforever.net",66],["pandajogosgratis.com.br",68],["5278.cc",69],["pandafreegames.*",70],["tonspion.de",71],["duplichecker.com",72],["plagiarismchecker.co",72],["plagiarismdetector.net",72],["searchenginereports.net",72],["smallseotools.com",73],["linkspaid.com",74],["proxydocker.com",74],["beeimg.com",[75,76]],["emturbovid.com",76],["findjav.com",76],["javggvideo.xyz",76],["mmtv01.xyz",76],["stbturbo.xyz",76],["trailerhg.xyz",76],["turboplayers.xyz",76],["turbovidhls.com",76],["viralharami.com",76],["ftlauderdalebeachcam.com",77],["ftlauderdalewebcam.com",77],["juneauharborwebcam.com",77],["keywestharborwebcam.com",77],["kittycatcam.com",77],["mahobeachcam.com",77],["miamiairportcam.com",77],["morganhillwebcam.com",77],["njwildlifecam.com",77],["nyharborwebcam.com",77],["paradiseislandcam.com",77],["pompanobeachcam.com",77],["portbermudawebcam.com",77],["portcanaveralwebcam.com",77],["portevergladeswebcam.com",77],["portmiamiwebcam.com",77],["portnywebcam.com",77],["portnassauwebcam.com",77],["portstmaartenwebcam.com",77],["portstthomaswebcam.com",77],["porttampawebcam.com",77],["sxmislandcam.com",77],["themes-dl.com",77],["badassdownloader.com",77],["badasshardcore.com",77],["badassoftcore.com",77],["nulljungle.com",77],["teevee.asia",77],["otakukan.com",77],["thoptv.*",78],["gearingcommander.com",79],["generate.plus",80],["calculate.plus",80],["avcesar.com",81],["audiotag.info",82],["tudigitale.it",83],["ibcomputing.com",84],["legia.net",85],["acapellas4u.co.uk",86],["robloxscripts.com",87],["libreriamo.it",87],["postazap.com",87],["filmyzones.com",87],["medebooks.xyz",87],["mashtips.com",87],["marriedgames.com.br",87],["4allprograms.me",87],["shortzzy.*",87],["nurgsm.com",87],["plugincrack.com",87],["gamingdeputy.com",87],["freewebcart.com",87],["gamekult.com",88],["streamhentaimovies.com",89],["konten.co.id",90],["diariodenavarra.es",91],["scripai.com",91],["myfxbook.com",91],["whatfontis.com",91],["katfile.*",91],["tubereader.me",91],["optifine.net",92],["luzernerzeitung.ch",93],["tagblatt.ch",93],["ableitungsrechner.net",94],["alternet.org",95],["gourmetsupremacy.com",95],["shrib.com",96],["streameast.*",97],["thestreameast.*",97],["techclips.net",97],["daddylivehd.*",97],["footyhunter.lol",97],["wecast.to",97],["freecourseweb.com",98],["coursewikia.com",98],["courseboat.com",98],["pornhub.*",99],["lne.es",[100,374]],["pornult.com",101],["webcamsdolls.com",101],["bitcotasks.com",[101,142]],["adsy.pw",101],["playstore.pw",101],["exactpay.online",101],["thothd.to",101],["proplanta.de",102],["textograto.com",103],["voyageforum.com",104],["hmc-id.blogspot.com",104],["myabandonware.com",104],["wcofun.*",104],["ilforumdeibrutti.is",104],["prad.de",[105,157]],["chatta.it",106],["ketubanjiwa.com",107],["nsfw247.to",108],["funzen.net",108],["extremereportbot.com",109],["getintopc.com",110],["qoshe.com",111],["lowellsun.com",112],["mamadu.pl",112],["dobrapogoda24.pl",112],["motohigh.pl",112],["namasce.pl",112],["ultimate-catch.eu",113],["cpopchanelofficial.com",114],["creditcardgenerator.com",115],["creditcardrush.com",115],["bostoncommons.net",115],["thejobsmovie.com",115],["hl-live.de",116],["satoshi-win.xyz",116],["encurtandourl.com",[116,120]],["www-daftarharga.blogspot.com",116],["ear-phone-review.com",116],["telefullenvivo.com",116],["listatv.pl",116],["coin-profits.xyz",116],["relampagomovies.com",116],["wohnmobilforum.de",116],["nulledbear.com",116],["sinnerclownceviri.net",116],["nilopolisonline.com.br",117],["mesquitaonline.com",117],["yellowbridge.com",117],["yaoiotaku.com",118],["moneyhouse.ch",119],["ihow.info",120],["filesus.com",120],["gotxx.*",120],["sturls.com",120],["turbo1.co",120],["hartico.tv",120],["cupra.forum",120],["turkanime.*",121],["valeronevijao.com",121],["yodelswartlike.com",121],["generatesnitrosate.com",121],["gamoneinterrupted.com",121],["metagnathtuggers.com",121],["rationalityaloelike.com",121],["sizyreelingly.com",121],["urochsunloath.com",121],["monorhinouscassaba.com",121],["antecoxalbobbing1010.com",121],["boonlessbestselling244.com",121],["cyamidpulverulence530.com",121],["guidon40hyporadius9.com",121],["449unceremoniousnasoseptal.com",121],["30sensualizeexpression.com",121],["greaseball6eventual20.com",121],["toxitabellaeatrebates306.com",121],["20demidistance9elongations.com",121],["audaciousdefaulthouse.com",121],["fittingcentermondaysunday.com",121],["launchreliantcleaverriver.com",121],["matriculant401merited.com",121],["realfinanceblogcenter.com",121],["telyn610zoanthropy.com",121],["un-block-voe.net",121],["v-o-e-unblock.com",121],["voe-un-block.com",121],["voe-unblock.*",121],["voeunbl0ck.com",121],["voeunblck.com",121],["voeunblk.com",121],["voeunblock.com",121],["voeunblock2.com",121],["voeunblock3.com",121],["agefi.fr",122],["cariskuy.com",123],["letras2.com",123],["yusepjaelani.blogspot.com",124],["letras.mus.br",125],["eletronicabr.com",126],["mtlurb.com",127],["onemanhua.com",128],["laksa19.github.io",129],["javcl.com",129],["tvlogy.to",129],["rp5.*",129],["live.dragaoconnect.net",129],["seznamzpravy.cz",129],["xerifetech.com",129],["freemcserver.net",129],["allindiaroundup.com",130],["tapchipi.com",131],["dcleakers.com",131],["esgeeks.com",131],["pugliain.net",131],["uplod.net",131],["worldfreeware.com",131],["tech-blogs.com",131],["cardiagn.com",131],["fikiri.net",131],["myhackingworld.com",131],["vectorizer.io",132],["onehack.us",132],["smgplaza.com",132],["thapcam.net",132],["breznikar.com",132],["thefastlaneforum.com",133],["5flix.top",134],["bembed.net",134],["embedv.net",134],["javguard.club",134],["listeamed.net",134],["v6embed.xyz",134],["vembed.*",134],["vid-guard.com",134],["vidguardto.xyz",134],["yesmovies.*>>",134],["pistona.xyz",134],["vinomo.xyz",134],["moflix-stream.*",[134,163]],["trade2win.com",135],["modagamers.com",136],["khatrimaza.*",136],["freemagazines.top",136],["pogolinks.*",136],["straatosphere.com",136],["nullpk.com",136],["adslink.pw",136],["downloadudemy.com",136],["picgiraffe.com",136],["weadown.com",136],["freepornsex.net",136],["nurparatodos.com.ar",136],["popcornstream.*",137],["routech.ro",137],["hokej.net",137],["turkmmo.com",138],["acdriftingpro.com",139],["palermotoday.it",140],["baritoday.it",140],["trentotoday.it",140],["agrigentonotizie.it",140],["anconatoday.it",140],["arezzonotizie.it",140],["avellinotoday.it",140],["bresciatoday.it",140],["brindisireport.it",140],["casertanews.it",140],["cataniatoday.it",140],["cesenatoday.it",140],["chietitoday.it",140],["forlitoday.it",140],["frosinonetoday.it",140],["genovatoday.it",140],["ilpescara.it",140],["ilpiacenza.it",140],["latinatoday.it",140],["lecceprima.it",140],["leccotoday.it",140],["livornotoday.it",140],["messinatoday.it",140],["milanotoday.it",140],["modenatoday.it",140],["monzatoday.it",140],["novaratoday.it",140],["padovaoggi.it",140],["parmatoday.it",140],["perugiatoday.it",140],["pisatoday.it",140],["quicomo.it",140],["ravennatoday.it",140],["reggiotoday.it",140],["riminitoday.it",140],["romatoday.it",140],["salernotoday.it",140],["sondriotoday.it",140],["sportpiacenza.it",140],["ternitoday.it",140],["today.it",140],["torinotoday.it",140],["trevisotoday.it",140],["triesteprima.it",140],["udinetoday.it",140],["veneziatoday.it",140],["vicenzatoday.it",140],["thumpertalk.com",141],["austiblox.net",141],["thelayoff.com",142],["shorterall.com",142],["maxstream.video",142],["tvepg.eu",142],["manwan.xyz",142],["dailymaverick.co.za",143],["ludigames.com",144],["made-by.org",144],["worldtravelling.com",144],["technichero.com",144],["androidadult.com",144],["aeroxplorer.com",144],["sportitalialive.com",144],["adrinolinks.com",145],["link.vipurl.in",145],["nanolinks.in",145],["fadedfeet.com",146],["homeculina.com",146],["ineedskin.com",146],["kenzo-flowertag.com",146],["lawyex.co",146],["mdn.lol",146],["starkroboticsfrc.com",147],["sinonimos.de",147],["antonimos.de",147],["quesignifi.ca",147],["tiktokrealtime.com",147],["tiktokcounter.net",147],["tpayr.xyz",147],["poqzn.xyz",147],["ashrfd.xyz",147],["rezsx.xyz",147],["tryzt.xyz",147],["ashrff.xyz",147],["rezst.xyz",147],["dawenet.com",147],["erzar.xyz",147],["waezm.xyz",147],["waezg.xyz",147],["blackwoodacademy.org",147],["cryptednews.space",147],["vivuq.com",147],["swgop.com",147],["vbnmll.com",147],["telcoinfo.online",147],["dshytb.com",147],["bitzite.com",148],["coingraph.us",149],["impact24.us",149],["tpi.li",150],["oii.la",150],["www.apkmoddone.com",151],["sitemini.io.vn",152],["vip1s.top",152],["dl.apkmoddone.com",153],["phongroblox.com",153],["financacerta.com",154],["encurtads.net",154],["shortencash.click",155],["lablue.*",156],["4-liga.com",157],["4fansites.de",157],["4players.de",157],["9monate.de",157],["aachener-nachrichten.de",157],["aachener-zeitung.de",157],["abendblatt.de",157],["abendzeitung-muenchen.de",157],["about-drinks.com",157],["abseits-ka.de",157],["airliners.de",157],["ajaxshowtime.com",157],["allgemeine-zeitung.de",157],["alpin.de",157],["antenne.de",157],["arcor.de",157],["areadvd.de",157],["areamobile.de",157],["ariva.de",157],["astronews.com",157],["aussenwirtschaftslupe.de",157],["auszeit.bio",157],["auto-motor-und-sport.de",157],["auto-service.de",157],["autobild.de",157],["autoextrem.de",157],["autopixx.de",157],["autorevue.at",157],["autotrader.nl",157],["az-online.de",157],["baby-vornamen.de",157],["babyclub.de",157],["bafoeg-aktuell.de",157],["berliner-kurier.de",157],["berliner-zeitung.de",157],["bigfm.de",157],["bikerszene.de",157],["bildderfrau.de",157],["blackd.de",157],["blick.de",157],["boerse-online.de",157],["boerse.de",157],["boersennews.de",157],["braunschweiger-zeitung.de",157],["brieffreunde.de",157],["brigitte.de",157],["buerstaedter-zeitung.de",157],["buffed.de",157],["businessinsider.de",157],["buzzfeed.at",157],["buzzfeed.de",157],["caravaning.de",157],["cavallo.de",157],["chefkoch.de",157],["cinema.de",157],["clever-tanken.de",157],["computerbild.de",157],["computerhilfen.de",157],["comunio-cl.com",157],["comunio.*",157],["connect.de",157],["chip.de",157],["da-imnetz.de",157],["dasgelbeblatt.de",157],["dbna.com",157],["dbna.de",157],["deichstube.de",157],["deine-tierwelt.de",157],["der-betze-brennt.de",157],["derwesten.de",157],["desired.de",157],["dhd24.com",157],["dieblaue24.com",157],["digitalfernsehen.de",157],["dnn.de",157],["donnerwetter.de",157],["e-hausaufgaben.de",157],["e-mountainbike.com",157],["eatsmarter.de",157],["echo-online.de",157],["ecomento.de",157],["einfachschoen.me",157],["elektrobike-online.com",157],["eltern.de",157],["epochtimes.de",157],["essen-und-trinken.de",157],["express.de",157],["extratipp.com",157],["familie.de",157],["fanfiktion.de",157],["fehmarn24.de",157],["fettspielen.de",157],["fid-gesundheitswissen.de",157],["finanzen.*",157],["finanznachrichten.de",157],["finanztreff.de",157],["finya.de",157],["firmenwissen.de",157],["fitforfun.de",157],["fnp.de",157],["football365.fr",157],["formel1.de",157],["fr.de",157],["frankfurter-wochenblatt.de",157],["freenet.de",157],["fremdwort.de",157],["froheweihnachten.info",157],["frustfrei-lernen.de",157],["fuldaerzeitung.de",157],["funandnews.de",157],["fussballdaten.de",157],["futurezone.de",157],["gala.de",157],["gamepro.de",157],["gamersglobal.de",157],["gamesaktuell.de",157],["gamestar.de",157],["gameswelt.*",157],["gamezone.de",157],["gartendialog.de",157],["gartenlexikon.de",157],["gedichte.ws",157],["geissblog.koeln",157],["gelnhaeuser-tageblatt.de",157],["general-anzeiger-bonn.de",157],["geniale-tricks.com",157],["genialetricks.de",157],["gesund-vital.de",157],["gesundheit.de",157],["gevestor.de",157],["gewinnspiele.tv",157],["giessener-allgemeine.de",157],["giessener-anzeiger.de",157],["gifhorner-rundschau.de",157],["giga.de",157],["gipfelbuch.ch",157],["gmuender-tagespost.de",157],["gruenderlexikon.de",157],["gusto.at",157],["gut-erklaert.de",157],["gutfuerdich.co",157],["hallo-muenchen.de",157],["hamburg.de",157],["hanauer.de",157],["hardwareluxx.de",157],["hartziv.org",157],["harzkurier.de",157],["haus-garten-test.de",157],["hausgarten.net",157],["haustec.de",157],["haz.de",157],["heftig.*",157],["heidelberg24.de",157],["heilpraxisnet.de",157],["heise.de",157],["helmstedter-nachrichten.de",157],["hersfelder-zeitung.de",157],["hftg.co",157],["hifi-forum.de",157],["hna.de",157],["hochheimer-zeitung.de",157],["hoerzu.de",157],["hofheimer-zeitung.de",157],["iban-rechner.de",157],["ikz-online.de",157],["immobilienscout24.de",157],["ingame.de",157],["inside-digital.de",157],["inside-handy.de",157],["investor-verlag.de",157],["jappy.com",157],["jpgames.de",157],["kabeleins.de",157],["kachelmannwetter.com",157],["kamelle.de",157],["kicker.de",157],["kindergeld.org",157],["klettern-magazin.de",157],["klettern.de",157],["kochbar.de",157],["kreis-anzeiger.de",157],["kreisbote.de",157],["kreiszeitung.de",157],["ksta.de",157],["kurierverlag.de",157],["lachainemeteo.com",157],["lampertheimer-zeitung.de",157],["landwirt.com",157],["laut.de",157],["lauterbacher-anzeiger.de",157],["leckerschmecker.me",157],["leinetal24.de",157],["lesfoodies.com",157],["levif.be",157],["lifeline.de",157],["liga3-online.de",157],["likemag.com",157],["linux-community.de",157],["linux-magazin.de",157],["live.vodafone.de",157],["ln-online.de",157],["lokalo24.de",157],["lustaufsleben.at",157],["lustich.de",157],["lvz.de",157],["lz.de",157],["mactechnews.de",157],["macwelt.de",157],["macworld.co.uk",157],["mail.de",157],["main-spitze.de",157],["manager-magazin.de",157],["manga-tube.me",157],["mathebibel.de",157],["mathepower.com",157],["maz-online.de",157],["medisite.fr",157],["mehr-tanken.de",157],["mein-kummerkasten.de",157],["mein-mmo.de",157],["mein-wahres-ich.de",157],["meine-anzeigenzeitung.de",157],["meinestadt.de",157],["menshealth.de",157],["mercato365.com",157],["merkur.de",157],["messen.de",157],["metal-hammer.de",157],["metalflirt.de",157],["meteologix.com",157],["minecraft-serverlist.net",157],["mittelbayerische.de",157],["modhoster.de",157],["moin.de",157],["mopo.de",157],["morgenpost.de",157],["motor-talk.de",157],["motorbasar.de",157],["motorradonline.de",157],["motorsport-total.com",157],["motortests.de",157],["mountainbike-magazin.de",157],["moviejones.de",157],["moviepilot.de",157],["mt.de",157],["mtb-news.de",157],["musiker-board.de",157],["musikexpress.de",157],["musikradar.de",157],["mz-web.de",157],["n-tv.de",157],["naumburger-tageblatt.de",157],["netzwelt.de",157],["neuepresse.de",157],["neueroeffnung.info",157],["news.at",157],["news.de",157],["news38.de",157],["newsbreak24.de",157],["nickles.de",157],["nicknight.de",157],["nl.hardware.info",157],["nn.de",157],["nnn.de",157],["nordbayern.de",157],["notebookchat.com",157],["notebookcheck-ru.com",157],["notebookcheck-tr.com",157],["notebookcheck.*",157],["noz-cdn.de",157],["noz.de",157],["nrz.de",157],["nw.de",157],["nwzonline.de",157],["oberhessische-zeitung.de",157],["och.to",157],["oeffentlicher-dienst.info",157],["onlinekosten.de",157],["onvista.de",157],["op-marburg.de",157],["op-online.de",157],["outdoor-magazin.com",157],["outdoorchannel.de",157],["paradisi.de",157],["pc-magazin.de",157],["pcgames.de",157],["pcgameshardware.de",157],["pcwelt.de",157],["pcworld.es",157],["peiner-nachrichten.de",157],["pferde.de",157],["pietsmiet.de",157],["pixelio.de",157],["pkw-forum.de",157],["playboy.de",157],["playfront.de",157],["pnn.de",157],["pons.com",157],["prignitzer.de",157],["profil.at",157],["promipool.de",157],["promobil.de",157],["prosiebenmaxx.de",157],["psychic.de",[157,179]],["quoka.de",157],["radio.at",157],["radio.de",157],["radio.dk",157],["radio.es",157],["radio.fr",157],["radio.it",157],["radio.net",157],["radio.pl",157],["radio.pt",157],["radio.se",157],["ran.de",157],["readmore.de",157],["rechtslupe.de",157],["recording.de",157],["rennrad-news.de",157],["reuters.com",157],["reviersport.de",157],["rhein-main-presse.de",157],["rheinische-anzeigenblaetter.de",157],["rimondo.com",157],["roadbike.de",157],["roemische-zahlen.net",157],["rollingstone.de",157],["rot-blau.com",157],["rp-online.de",157],["rtl.de",[157,254]],["rtv.de",157],["rugby365.fr",157],["ruhr24.de",157],["rundschau-online.de",157],["runnersworld.de",157],["safelist.eu",157],["salzgitter-zeitung.de",157],["sat1.de",157],["sat1gold.de",157],["schoener-wohnen.de",157],["schwaebische-post.de",157],["schwarzwaelder-bote.de",157],["serienjunkies.de",157],["shz.de",157],["sixx.de",157],["skodacommunity.de",157],["smart-wohnen.net",157],["sn.at",157],["sozialversicherung-kompetent.de",157],["spiegel.de",157],["spielen.de",157],["spieletipps.de",157],["spielfilm.de",157],["sport.de",157],["sport1.de",157],["sport365.fr",157],["sportal.de",157],["spox.com",157],["stern.de",157],["stuttgarter-nachrichten.de",157],["stuttgarter-zeitung.de",157],["sueddeutsche.de",157],["svz.de",157],["szene1.at",157],["szene38.de",157],["t-online.de",157],["tagesspiegel.de",157],["taschenhirn.de",157],["techadvisor.co.uk",157],["techstage.de",157],["tele5.de",157],["teltarif.de",157],["testedich.*",157],["the-voice-of-germany.de",157],["thueringen24.de",157],["tichyseinblick.de",157],["tierfreund.co",157],["tiervermittlung.de",157],["torgranate.de",157],["transfermarkt.*",157],["trend.at",157],["truckscout24.*",157],["tv-media.at",157],["tvdigital.de",157],["tvinfo.de",157],["tvspielfilm.de",157],["tvtoday.de",157],["tvtv.*",157],["tz.de",[157,172]],["unicum.de",157],["unnuetzes.com",157],["unsere-helden.com",157],["unterhalt.net",157],["usinger-anzeiger.de",157],["usp-forum.de",157],["videogameszone.de",157],["vienna.at",157],["vip.de",157],["virtualnights.com",157],["vox.de",157],["wa.de",157],["wallstreet-online.de",[157,160]],["waz.de",157],["weather.us",157],["webfail.com",157],["weihnachten.me",157],["weihnachts-bilder.org",157],["weihnachts-filme.com",157],["weltfussball.at",157],["weristdeinfreund.de",157],["werkzeug-news.de",157],["werra-rundschau.de",157],["wetterauer-zeitung.de",157],["wetteronline.*",157],["wieistmeineip.*",157],["wiesbadener-kurier.de",157],["wiesbadener-tagblatt.de",157],["winboard.org",157],["windows-7-forum.net",157],["winfuture.de",[157,168]],["wintotal.de",157],["wlz-online.de",157],["wn.de",157],["wohngeld.org",157],["wolfenbuetteler-zeitung.de",157],["wolfsburger-nachrichten.de",157],["woman.at",157],["womenshealth.de",157],["wormser-zeitung.de",157],["woxikon.de",157],["wp.de",157],["wr.de",157],["wunderweib.de",157],["yachtrevue.at",157],["ze.tt",157],["zeit.de",157],["lecker.de",157],["meineorte.com",158],["osthessen-news.de",158],["techadvisor.com",158],["focus.de",158],["wetter.*",159],["herzporno.net",161],["pornhub-sexfilme.net",161],["pornojenny.net",161],["pornoleon.com",161],["deinesexfilme.com",162],["einfachtitten.com",162],["lesbenhd.com",162],["milffabrik.com",[162,225]],["porn-monkey.com",162],["porndrake.com",162],["pornhubdeutsch.net",162],["pornoaffe.com",162],["pornodavid.com",162],["pornoente.tv",[162,225]],["pornofisch.com",162],["pornofelix.com",162],["pornohammer.com",162],["pornohelm.com",162],["pornoklinge.com",162],["pornotom.com",[162,225]],["pornotommy.com",162],["pornovideos-hd.com",162],["pornozebra.com",[162,225]],["xhamsterdeutsch.xyz",162],["xnxx-sexfilme.com",162],["nu6i-bg-net.com",164],["kiaclub.cz",164],["khsm.io",164],["webcreator-journal.com",164],["msdos-games.com",164],["blocklayer.com",164],["animeshqip.org",164],["weknowconquer.com",164],["giff.cloud",164],["aquarius-horoscopes.com",165],["cancer-horoscopes.com",165],["dubipc.blogspot.com",165],["echoes.gr",165],["engel-horoskop.de",165],["freegames44.com",165],["fuerzasarmadas.eu",165],["gemini-horoscopes.com",165],["jurukunci.net",165],["krebs-horoskop.com",165],["leo-horoscopes.com",165],["maliekrani.com",165],["nklinks.click",165],["ourenseando.es",165],["pisces-horoscopes.com",165],["radio-en-direct.fr",165],["sagittarius-horoscopes.com",165],["scorpio-horoscopes.com",165],["singlehoroskop-loewe.de",165],["skat-karten.de",165],["skorpion-horoskop.com",165],["taurus-horoscopes.com",165],["the1security.com",165],["virgo-horoscopes.com",165],["zonamarela.blogspot.com",165],["yoima.hatenadiary.com",165],["kaystls.site",166],["ftuapps.dev",167],["studydhaba.com",167],["freecourse.tech",167],["victor-mochere.com",167],["papunika.com",167],["mobilanyheter.net",167],["prajwaldesai.com",[167,243]],["carscoops.com",168],["dziennik.pl",168],["eurointegration.com.ua",168],["flatpanelshd.com",168],["footballtransfer.com.ua",168],["footballtransfer.ru",168],["hoyme.jp",168],["issuya.com",168],["itainews.com",168],["iusm.co.kr",168],["mynet.com",[168,194]],["onlinegdb.com",168],["picrew.me",168],["pravda.com.ua",168],["reportera.co.kr",168],["sportanalytic.com",168],["sportsrec.com",168],["sportsseoul.com",168],["text-compare.com",168],["tweaksforgeeks.com",168],["wfmz.com",168],["worldhistory.org",168],["palabr.as",168],["motscroises.fr",168],["cruciverba.it",168],["w.grapps.me",168],["gazetaprawna.pl",168],["pressian.com",168],["raenonx.cc",[168,270]],["indiatimes.com",168],["missyusa.com",168],["aikatu.jp",168],["ark-unity.com",168],["cool-style.com.tw",168],["doanhnghiepvn.vn",168],["mykhel.com",168],["automobile-catalog.com",169],["motorbikecatalog.com",169],["maketecheasier.com",169],["mlbpark.donga.com",170],["jjang0u.com",171],["neowin.net",172],["newatlas.com",172],["razzball.com",172],["12thmanrising.com",172],["aroundthefoghorn.com",172],["arrowheadaddict.com",172],["badgerofhonor.com",172],["bamahammer.com",172],["beargoggleson.com",172],["beyondtheflag.com",172],["blackandteal.com",172],["blogredmachine.com",172],["bluemanhoop.com",172],["boltbeat.com",172],["bosoxinjection.com",172],["buffalowdown.com",172],["caneswarning.com",172],["catcrave.com",172],["chopchat.com",172],["climbingtalshill.com",172],["cubbiescrib.com",172],["dailyknicks.com",172],["dairylandexpress.com",172],["dawindycity.com",172],["dawnofthedawg.com",172],["detroitjockcity.com",172],["dodgersway.com",172],["ebonybird.com",172],["fansided.com",172],["gbmwolverine.com",172],["gmenhq.com",172],["hailfloridahail.com",172],["hardwoodhoudini.com",172],["horseshoeheroes.com",172],["housethathankbuilt.com",172],["huskercorner.com",172],["insidetheiggles.com",172],["jaysjournal.com",172],["justblogbaby.com",172],["kckingdom.com",172],["kingjamesgospel.com",172],["lakeshowlife.com",172],["lombardiave.com",172],["motorcitybengals.com",172],["musketfire.com",172],["nflspinzone.com",172],["ninernoise.com",172],["nugglove.com",172],["phinphanatic.com",172],["pistonpowered.com",172],["predominantlyorange.com",172],["ramblinfan.com",172],["redbirdrants.com",172],["reviewingthebrew.com",172],["riggosrag.com",172],["ripcityproject.com",172],["risingapple.com",172],["rumbunter.com",172],["scarletandgame.com",172],["section215.com",172],["sidelionreport.com",172],["slapthesign.com",172],["sodomojo.com",172],["stillcurtain.com",172],["stormininnorman.com",172],["stripehype.com",172],["thatballsouttahere.com",172],["thejetpress.com",172],["thelandryhat.com",172],["thepewterplank.com",172],["thesmokingcuban.com",172],["thevikingage.com",172],["thunderousintentions.com",172],["valleyofthesuns.com",172],["whodatdish.com",172],["yanksgoyard.com",172],["auto-swiat.pl",173],["download.kingtecnologia.com",174],["daemonanime.net",175],["bgmateriali.com",175],["daemon-hentai.com",176],["embedtv.net",177],["tinhte.vn",178],["app.simracing.gp",178],["forumdz.com",179],["zilinak.sk",179],["pdfaid.com",179],["bootdey.com",179],["mail.com",179],["moegirl.org.cn",179],["flix-wave.lol",179],["fmovies0.cc",179],["worthcrete.com",179],["infomatricula.pt",179],["my-code4you.blogspot.com",180],["vrcmods.com",181],["osuskinner.com",181],["osuskins.net",181],["uploadhub.*",182],["pentruea.com",183],["mchacks.net",184],["why-tech.it",185],["compsmag.com",186],["tapetus.pl",187],["autoroad.cz",188],["brawlhalla.fr",188],["tecnobillo.com",188],["pokemon-project.com",188],["breatheheavy.com",189],["wenxuecity.com",190],["key-hub.eu",191],["fabioambrosi.it",192],["tattle.life",193],["emuenzen.de",193],["terrylove.com",193],["cidade.iol.pt",195],["fantacalcio.it",196],["hentaifreak.org",197],["hypebeast.com",198],["krankheiten-simulieren.de",199],["catholic.com",200],["techinferno.com",201],["ibeconomist.com",202],["bookriot.com",203],["purposegames.com",204],["globo.com",205],["latimes.com",205],["claimrbx.gg",206],["perelki.net",207],["vpn-anbieter-vergleich-test.de",208],["livingincebuforums.com",209],["tv247us.live",209],["paperzonevn.com",210],["alltechnerd.com",211],["malaysianwireless.com",212],["erinsakura.com",213],["infofuge.com",213],["freejav.guru",213],["novelmultiverse.com",213],["fritidsmarkedet.dk",214],["maskinbladet.dk",214],["15min.lt",215],["baddiehub.com",216],["mr9soft.com",217],["adult-sex-gamess.com",218],["hentaigames.app",218],["mobilesexgamesx.com",218],["mysexgamer.com",218],["porngameshd.com",218],["sexgamescc.com",218],["xnxx-sex-videos.com",218],["f2movies.to",219],["freeporncave.com",220],["tubsxxx.com",221],["manga18fx.com",222],["freebnbcoin.com",222],["sextvx.com",223],["muztext.com",224],["pornohans.com",225],["nursexfilme.com",225],["pornohirsch.net",225],["xhamster-sexvideos.com",225],["pornoschlange.com",225],["xhamsterdeutsch.*",225],["hdpornos.net",225],["gutesexfilme.com",225],["zona-leros.com",225],["charbelnemnom.com",226],["simplebits.io",227],["online-fix.me",228],["privatemoviez.*",229],["gamersdiscussionhub.com",229],["elahmad.com",230],["owlzo.com",231],["q1003.com",232],["blogpascher.com",233],["testserver.pro",234],["lifestyle.bg",234],["money.bg",234],["news.bg",234],["topsport.bg",234],["webcafe.bg",234],["schoolcheats.net",235],["mgnet.xyz",236],["advertiserandtimes.co.uk",237],["techsolveprac.com",238],["joomlabeginner.com",239],["askpaccosi.com",240],["largescaleforums.com",241],["dubznetwork.com",242],["dongknows.com",244],["traderepublic.community",245],["babia.to",246],["html5.gamemonetize.co",247],["code2care.org",248],["gmx.*",249],["yts-subs.net",250],["dlhd.sx",250],["xxxxsx.com",251],["ngontinh24.com",252],["idevicecentral.com",253],["mangacrab.com",255],["hortonanderfarom.blogspot.com",256],["viefaucet.com",257],["pourcesoir.in",257],["cloud-computing-central.com",258],["afk.guide",259],["businessnamegenerator.com",260],["derstandard.at",261],["derstandard.de",261],["rocketnews24.com",262],["soranews24.com",262],["youpouch.com",262],["gourmetscans.net",263],["ilsole24ore.com",264],["ipacrack.com",265],["infokik.com",266],["porhubvideo.com",268],["webseriessex.com",268],["panuvideo.com",[268,269]],["pornktubes.net",268],["deezer.com",270],["fosslinux.com",271],["shrdsk.me",272],["examword.com",273],["sempreupdate.com.br",273],["tribuna.com",274],["trendsderzukunft.de",275],["gal-dem.com",275],["lostineu.eu",275],["oggitreviso.it",275],["speisekarte.de",275],["mixed.de",275],["lightnovelspot.com",[276,277]],["novelpub.com",[276,277]],["webnovelpub.com",[276,277]],["snopes.com",277],["hwzone.co.il",278],["nammakalvi.com",279],["igay69.com",279],["c2g.at",280],["terafly.me",280],["elamigos-games.com",280],["elamigos-games.net",280],["elamigosgames.org",280],["dktechnicalmate.com",281],["recipahi.com",281],["vpntester.org",282],["japscan.lol",283],["digitask.ru",284],["tempumail.com",285],["sexvideos.host",286],["camcaps.*",287],["10alert.com",288],["cryptstream.de",289],["nydus.org",289],["techhelpbd.com",290],["fapdrop.com",291],["cellmapper.net",292],["hdrez.com",293],["youwatch-serie.com",293],["russland.jetzt",293],["printablecreative.com",294],["peachprintable.com",294],["comohoy.com",295],["leak.sx",295],["paste.bin.sx",295],["pornleaks.in",295],["merlininkazani.com",295],["j91.asia",296],["jeniusplay.com",297],["indianyug.com",298],["rgb.vn",298],["needrom.com",299],["criptologico.com",300],["megadrive-emulator.com",301],["eromanga-show.com",302],["hentai-one.com",302],["hentaipaw.com",302],["10minuteemails.com",303],["luxusmail.org",303],["w3cub.com",304],["bangpremier.com",305],["nyaa.iss.ink",306],["drivebot.*",307],["thenextplanet1.*",308],["tnp98.xyz",308],["techedubyte.com",309],["poplinks.*",310],["tickzoo.tv",311],["oploverz.*",311],["memedroid.com",312],["karaoketexty.cz",313],["filmizlehdfilm.com",314],["filmizletv.*",314],["fullfilmizle.cc",314],["gofilmizle.net",314],["resortcams.com",315],["cheatography.com",315],["sonixgvn.net",316],["autoscout24.*",317],["mjakmama24.pl",318],["cheatermad.com",319],["work.ink",320],["ville-ideale.fr",321],["brainly.*",322],["eodev.com",322],["xfreehd.com",324],["freethesaurus.com",325],["thefreedictionary.com",325],["fm-arena.com",326],["tradersunion.com",327],["tandess.com",328],["allosurf.net",328],["spontacts.com",329],["dankmemer.lol",330],["getexploits.com",331],["fplstatistics.com",332],["breitbart.com",333],["salidzini.lv",334],["cryptorank.io",[335,336]],["qqwebplay.xyz",337],["molbiotools.com",338],["vods.tv",339],["18xxx.xyz",[340,375]],["raidrush.net",341],["xnxxcom.xyz",342],["videzz.net",343],["spambox.xyz",344],["dreamdth.com",345],["freemodsapp.in",345],["onlytech.com",345],["en-thunderscans.com",346],["infinityscans.xyz",347],["infinityscans.net",347],["infinityscans.org",347],["historicaerials.com",348],["iqksisgw.xyz",349],["caroloportunidades.com.br",350],["coempregos.com.br",350],["foodiesgallery.com",350],["vikatan.com",351],["camhub.world",352],["omuzaani.me",353],["mma-core.*",354],["pouvideo.*",355],["povvideo.*",355],["povw1deo.*",355],["povwideo.*",355],["powv1deo.*",355],["powvibeo.*",355],["powvideo.*",355],["powvldeo.*",355],["op.gg",356],["teracourses.com",357],["servustv.com",[358,359]],["freevipservers.net",360],["streambtw.com",361],["qrcodemonkey.net",362],["streamup.ws",363],["tv-films.co.uk",364],["cool--web-de.translate.goog",[365,366]],["gps--cache-de.translate.goog",[365,366]],["web--spiele-de.translate.goog",[365,366]],["fun--seiten-de.translate.goog",[365,366]],["photo--alben-de.translate.goog",[365,366]],["wetter--vorhersage-de.translate.goog",[365,366]],["coolsoftware-de.translate.goog",[365,366]],["kryptografie-de.translate.goog",[365,366]],["cool--domains-de.translate.goog",[365,366]],["net--tours-de.translate.goog",[365,366]],["such--maschine-de.translate.goog",[365,366]],["qul-de.translate.goog",[365,366]],["mailtool-de.translate.goog",[365,366]],["c--ix-de.translate.goog",[365,366]],["softwareengineer-de.translate.goog",[365,366]],["net--tools-de.translate.goog",[365,366]],["hilfen-de.translate.goog",[365,366]],["45er-de.translate.goog",[365,366]],["cooldns-de.translate.goog",[365,366]],["hardware--entwicklung-de.translate.goog",[365,366]],["bgsi.gg",367],["kio.ac",368],["friv.com",369],["sextb.*>>",370],["nepalieducate.com",371],["tsz.com.np",371],["idlixku.com",372],["freegames.com",373],["levante-emv.com",374],["mallorcazeitung.es",374],["regio7.cat",374],["superdeporte.es",374],["laopiniondezamora.es",374],["laopiniondemurcia.es",374],["laopiniondemalaga.es",374],["laopinioncoruna.es",374],["lacronicabadajoz.com",374],["informacion.es",374],["farodevigo.es",374],["emporda.info",374],["elperiodicomediterraneo.com",374],["elperiodicoextremadura.com",374],["epe.es",374],["elperiodicodearagon.com",374],["eldia.es",374],["elcorreoweb.es",374],["diariodemallorca.es",374],["diariodeibiza.es",374],["diariocordoba.com",374],["diaridegirona.cat",374],["elperiodico.com",374],["laprovincia.es",374],["4tube.live",375],["nxxn.live",375],["redtub.live",375],["olympustaff.com",376],["imleagues.com",377],["loudountimes.com",378],["santafenewmexican.com",378],["tdtnews.com",378],["atalantini.online",379],["nicematin.com",380],["dataunlocker.com",381]]);
const exceptionsMap = new Map([["vvid30c.*",[134]]]);
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
