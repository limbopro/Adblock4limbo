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
const argsList = [["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["/offsetHeight|loaded/"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["google_jobrunner"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["alert","2000"],["/adblock|isRequestPresent/"],["documentElement.innerHTML"],["_0x","500"],["isRequestPresent"],["checkAdblock"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["/loadMomoVip|loadExo|includeSpecial/"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["consent"],["await _0x"],["adbl"],["openPopunder"],["closeBanner"],[".getComputedStyle"],["offsetHeight"],["offsetLeft"],["height"],["location.href","1000"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["click"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],[".redirect"],["/AdBlock/i"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["","2000-5000"],["contrformpub"],["trigger","0"],["ADB"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["getComputedStyle(testAd)"],[".adv-"],["/Executed|modal/"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["/location\\.(replace|href)|stopAndExitFullscreen/"],["displayAdBlockedVideo"],["test.remove","100"],["adblock","2000"],["adBlockerModal"],["","10000-15000"],["/adex|loadAds|adCollapsedCount|ad-?block/i"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["mode:\"no-cors\""],["Visibility"],["ast"],["googlesyndication"],["start"],["moneyDetect"],["sub"],["/createElement|addEventListener|clientHeight/"],["testAd"],[".redirected"],["TNCMS.DMP"],["doubleclick"],["[native code]","120000"]];
const hostnamesMap = new Map([["poophq.com",0],["veev.to",0],["dogdrip.net",1],["infinityfree.com",1],["smsonline.cloud",[1,2]],["welt.de",[1,155]],["faqwiki.us",3],["mail.yahoo.com",[4,321]],["maxcheaters.com",4],["postimees.ee",4],["police.community",4],["gisarea.com",4],["schaken-mods.com",4],["tvnet.lv",4],["theclashify.com",4],["txori.com",4],["olarila.com",4],["deletedspeedstreams.blogspot.com",4],["schooltravelorganiser.com",4],["xhardhempus.net",4],["mhn.quest",4],["leagueofgraphs.com",4],["hieunguyenphoto.com",4],["benzinpreis.de",4],["tvtropes.org",5],["lastampa.it",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["eztv.*",7],["bluedrake42.com",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["betaseries.com",7],["free-sms-receive.com",7],["sms-receive-online.com",7],["computer76.ru",7],["golem.de",[8,9,155]],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["downloadr.in",9],["topcomicporno.com",9],["sushi-scan.*",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["seriesperu.com",9],["spigotunlocked.*",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,265]],["topsporter.net",[9,265]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["ahmedmode.*",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["forum-xiaomi.com",9],["mediafire.com",10],["yts.*",11],["720pstream.*",11],["1stream.*",11],["seattletimes.com",12],["bestgames.com",13],["yiv.com",13],["globalrph.com",14],["e-glossa.it",15],["webcheats.com.br",16],["urlcero.*",17],["elamigosgamez.com",17],["gala.fr",18],["gentside.com",18],["geo.fr",18],["hbrfrance.fr",18],["nationalgeographic.fr",18],["ohmymag.com",18],["serengo.net",18],["vsd.fr",18],["short.pe",19],["thefmovies.*",19],["footystreams.net",19],["katestube.com",19],["updato.com",[20,33]],["totaldebrid.*",21],["sandrives.*",21],["daizurin.com",21],["pendekarsubs.us",21],["dreamfancy.org",21],["rysafe.blogspot.com",21],["techacode.com",21],["toppng.com",21],["th-world.com",21],["avjamack.com",21],["avjamak.net",21],["cnnamador.com",22],["nudecelebforum.com",23],["pronpic.org",24],["thewebflash.com",25],["discordfastfood.com",25],["xup.in",25],["popularmechanics.com",26],["comunidadgzone.es",27],["fxporn69.*",27],["mp3fy.com",27],["lebensmittelpraxis.de",27],["aliancapes.*",27],["forum-pokemon-go.fr",27],["praxis-jugendarbeit.de",27],["dictionnaire-medical.net",27],["cle0desktop.blogspot.com",27],["up-load.io",27],["keysbrasil.blogspot.com",27],["hotpress.info",27],["turkleech.com",27],["anibatch.me",27],["anime-i.com",27],["gewinde-normen.de",27],["tucinehd.com",27],["kdramasmaza.com.pk",27],["jellynote.com",28],["eporner.com",29],["pornbimbo.com",30],["4j.com",30],["avoiderrors.com",31],["sitarchive.com",31],["livenewsof.com",31],["topnewsshow.com",31],["gatcha.org",31],["kusonime.com",31],["suicidepics.com",31],["codesnail.com",31],["codingshiksha.com",31],["graphicux.com",31],["citychilli.com",31],["talkjarvis.com",31],["hdmotori.it",32],["tubsexer.*",34],["femdomtb.com",34],["porno-tour.*",34],["lenkino.*",34],["bobs-tube.com",34],["pornfd.com",34],["pornomoll.*",34],["camsclips.*",34],["popno-tour.net",34],["watchmdh.to",34],["camwhores.tv",34],["camhub.cc",34],["elfqrin.com",35],["satcesc.com",36],["apfelpatient.de",36],["lusthero.com",37],["m4ufree.*",38],["m2list.com",38],["embed.nana2play.com",38],["dallasnews.com",39],["lnk.news",40],["lnk.parts",40],["efukt.com",41],["wendycode.com",41],["springfieldspringfield.co.uk",42],["porndoe.com",43],["smsget.net",[44,45]],["kjanime.net",46],["gioialive.it",47],["classicreload.com",48],["scriptzhub.com",48],["hotpornfile.org",49],["coolsoft.altervista.org",49],["hackedonlinegames.com",49],["dailytech-news.eu",49],["settlersonlinemaps.com",49],["ad-doge.com",49],["magdownload.org",49],["kpkuang.org",49],["crypto4yu.com",49],["writedroid.*",49],["thenightwithoutthedawn.blogspot.com",49],["claimlite.club",49],["newscon.org",49],["rl6mans.com",49],["chicoer.com",50],["bostonherald.com",50],["dailycamera.com",50],["sportsplays.com",51],["ebookdz.com",52],["telerium.*",53],["pornvideotop.com",54],["arolinks.com",54],["xstory-fr.com",54],["1337x.*",54],["x1337x.*",54],["1337x.ninjaproxy1.com",54],["ytapi.cc",54],["letribunaldunet.fr",55],["vladan.fr",55],["live-tv-channels.org",56],["eslfast.com",57],["ge-map-overlays.appspot.com",58],["mad4wheels.com",58],["1xanimes.in",58],["logi.im",58],["emailnator.com",58],["claudelog.com",58],["freegamescasual.com",59],["tcpvpn.com",60],["oko.sh",60],["timesnownews.com",60],["timesnowhindi.com",60],["timesnowmarathi.com",60],["zoomtventertainment.com",60],["tsubasa.im",61],["sholah.net",62],["2rdroid.com",62],["bisceglielive.it",63],["openspeedtest.com",64],["addtobucketlist.com",64],["3dzip.org",[64,65]],["ilmeteo.it",64],["wcoforever.com",64],["comprovendolibri.it",64],["healthelia.com",64],["wcoanimedub.tv",64],["wcoforever.net",64],["pandajogosgratis.com.br",66],["5278.cc",67],["pandafreegames.*",68],["tonspion.de",69],["duplichecker.com",70],["plagiarismchecker.co",70],["plagiarismdetector.net",70],["searchenginereports.net",70],["smallseotools.com",71],["linkspaid.com",72],["proxydocker.com",72],["beeimg.com",[73,74]],["emturbovid.com",74],["findjav.com",74],["javggvideo.xyz",74],["mmtv01.xyz",74],["stbturbo.xyz",74],["trailerhg.xyz",74],["turboplayers.xyz",74],["turbovidhls.com",74],["viralharami.com",74],["ftlauderdalebeachcam.com",75],["ftlauderdalewebcam.com",75],["juneauharborwebcam.com",75],["keywestharborwebcam.com",75],["kittycatcam.com",75],["mahobeachcam.com",75],["miamiairportcam.com",75],["morganhillwebcam.com",75],["njwildlifecam.com",75],["nyharborwebcam.com",75],["paradiseislandcam.com",75],["pompanobeachcam.com",75],["portbermudawebcam.com",75],["portcanaveralwebcam.com",75],["portevergladeswebcam.com",75],["portmiamiwebcam.com",75],["portnywebcam.com",75],["portnassauwebcam.com",75],["portstmaartenwebcam.com",75],["portstthomaswebcam.com",75],["porttampawebcam.com",75],["sxmislandcam.com",75],["themes-dl.com",75],["badassdownloader.com",75],["badasshardcore.com",75],["badassoftcore.com",75],["nulljungle.com",75],["teevee.asia",75],["otakukan.com",75],["thoptv.*",76],["gearingcommander.com",77],["generate.plus",78],["calculate.plus",78],["avcesar.com",79],["audiotag.info",80],["tudigitale.it",81],["ibcomputing.com",82],["legia.net",83],["acapellas4u.co.uk",84],["robloxscripts.com",85],["libreriamo.it",85],["postazap.com",85],["filmyzones.com",85],["medebooks.xyz",85],["mashtips.com",85],["marriedgames.com.br",85],["4allprograms.me",85],["shortzzy.*",85],["nurgsm.com",85],["plugincrack.com",85],["gamingdeputy.com",85],["freewebcart.com",85],["gamekult.com",86],["streamhentaimovies.com",87],["konten.co.id",88],["diariodenavarra.es",89],["scripai.com",89],["myfxbook.com",89],["whatfontis.com",89],["katfile.*",89],["tubereader.me",89],["optifine.net",90],["luzernerzeitung.ch",91],["tagblatt.ch",91],["ableitungsrechner.net",92],["alternet.org",93],["gourmetsupremacy.com",93],["shrib.com",94],["streameast.*",95],["thestreameast.*",95],["techclips.net",95],["daddylivehd.*",95],["footyhunter.lol",95],["wecast.to",95],["freecourseweb.com",96],["coursewikia.com",96],["courseboat.com",96],["pornhub.*",97],["lne.es",[98,372]],["pornult.com",99],["webcamsdolls.com",99],["bitcotasks.com",[99,140]],["adsy.pw",99],["playstore.pw",99],["exactpay.online",99],["thothd.to",99],["proplanta.de",100],["textograto.com",101],["voyageforum.com",102],["hmc-id.blogspot.com",102],["myabandonware.com",102],["wcofun.*",102],["ilforumdeibrutti.is",102],["prad.de",[103,155]],["chatta.it",104],["ketubanjiwa.com",105],["nsfw247.to",106],["funzen.net",106],["extremereportbot.com",107],["getintopc.com",108],["qoshe.com",109],["lowellsun.com",110],["mamadu.pl",110],["dobrapogoda24.pl",110],["motohigh.pl",110],["namasce.pl",110],["ultimate-catch.eu",111],["cpopchanelofficial.com",112],["creditcardgenerator.com",113],["creditcardrush.com",113],["bostoncommons.net",113],["thejobsmovie.com",113],["hl-live.de",114],["satoshi-win.xyz",114],["encurtandourl.com",[114,118]],["www-daftarharga.blogspot.com",114],["ear-phone-review.com",114],["telefullenvivo.com",114],["listatv.pl",114],["coin-profits.xyz",114],["relampagomovies.com",114],["wohnmobilforum.de",114],["nulledbear.com",114],["sinnerclownceviri.net",114],["nilopolisonline.com.br",115],["mesquitaonline.com",115],["yellowbridge.com",115],["yaoiotaku.com",116],["moneyhouse.ch",117],["ihow.info",118],["filesus.com",118],["gotxx.*",118],["sturls.com",118],["turbo1.co",118],["hartico.tv",118],["cupra.forum",118],["turkanime.*",119],["valeronevijao.com",119],["yodelswartlike.com",119],["generatesnitrosate.com",119],["gamoneinterrupted.com",119],["metagnathtuggers.com",119],["rationalityaloelike.com",119],["sizyreelingly.com",119],["urochsunloath.com",119],["monorhinouscassaba.com",119],["antecoxalbobbing1010.com",119],["boonlessbestselling244.com",119],["cyamidpulverulence530.com",119],["guidon40hyporadius9.com",119],["449unceremoniousnasoseptal.com",119],["30sensualizeexpression.com",119],["greaseball6eventual20.com",119],["toxitabellaeatrebates306.com",119],["20demidistance9elongations.com",119],["audaciousdefaulthouse.com",119],["fittingcentermondaysunday.com",119],["launchreliantcleaverriver.com",119],["matriculant401merited.com",119],["realfinanceblogcenter.com",119],["telyn610zoanthropy.com",119],["un-block-voe.net",119],["v-o-e-unblock.com",119],["voe-un-block.com",119],["voe-unblock.*",119],["voeunbl0ck.com",119],["voeunblck.com",119],["voeunblk.com",119],["voeunblock.com",119],["voeunblock2.com",119],["voeunblock3.com",119],["agefi.fr",120],["cariskuy.com",121],["letras2.com",121],["yusepjaelani.blogspot.com",122],["letras.mus.br",123],["eletronicabr.com",124],["mtlurb.com",125],["onemanhua.com",126],["laksa19.github.io",127],["javcl.com",127],["tvlogy.to",127],["rp5.*",127],["live.dragaoconnect.net",127],["seznamzpravy.cz",127],["xerifetech.com",127],["freemcserver.net",127],["allindiaroundup.com",128],["tapchipi.com",129],["dcleakers.com",129],["esgeeks.com",129],["pugliain.net",129],["uplod.net",129],["worldfreeware.com",129],["tech-blogs.com",129],["cardiagn.com",129],["fikiri.net",129],["myhackingworld.com",129],["vectorizer.io",130],["onehack.us",130],["smgplaza.com",130],["thapcam.net",130],["breznikar.com",130],["thefastlaneforum.com",131],["5flix.top",132],["bembed.net",132],["embedv.net",132],["javguard.club",132],["listeamed.net",132],["v6embed.xyz",132],["vembed.*",132],["vid-guard.com",132],["vidguardto.xyz",132],["yesmovies.*>>",132],["pistona.xyz",132],["vinomo.xyz",132],["moflix-stream.*",[132,161]],["trade2win.com",133],["modagamers.com",134],["khatrimaza.*",134],["freemagazines.top",134],["pogolinks.*",134],["straatosphere.com",134],["nullpk.com",134],["adslink.pw",134],["downloadudemy.com",134],["picgiraffe.com",134],["weadown.com",134],["freepornsex.net",134],["nurparatodos.com.ar",134],["popcornstream.*",135],["routech.ro",135],["hokej.net",135],["turkmmo.com",136],["acdriftingpro.com",137],["palermotoday.it",138],["baritoday.it",138],["trentotoday.it",138],["agrigentonotizie.it",138],["anconatoday.it",138],["arezzonotizie.it",138],["avellinotoday.it",138],["bresciatoday.it",138],["brindisireport.it",138],["casertanews.it",138],["cataniatoday.it",138],["cesenatoday.it",138],["chietitoday.it",138],["forlitoday.it",138],["frosinonetoday.it",138],["genovatoday.it",138],["ilpescara.it",138],["ilpiacenza.it",138],["latinatoday.it",138],["lecceprima.it",138],["leccotoday.it",138],["livornotoday.it",138],["messinatoday.it",138],["milanotoday.it",138],["modenatoday.it",138],["monzatoday.it",138],["novaratoday.it",138],["padovaoggi.it",138],["parmatoday.it",138],["perugiatoday.it",138],["pisatoday.it",138],["quicomo.it",138],["ravennatoday.it",138],["reggiotoday.it",138],["riminitoday.it",138],["romatoday.it",138],["salernotoday.it",138],["sondriotoday.it",138],["sportpiacenza.it",138],["ternitoday.it",138],["today.it",138],["torinotoday.it",138],["trevisotoday.it",138],["triesteprima.it",138],["udinetoday.it",138],["veneziatoday.it",138],["vicenzatoday.it",138],["thumpertalk.com",139],["austiblox.net",139],["thelayoff.com",140],["shorterall.com",140],["maxstream.video",140],["tvepg.eu",140],["manwan.xyz",140],["dailymaverick.co.za",141],["ludigames.com",142],["made-by.org",142],["worldtravelling.com",142],["technichero.com",142],["androidadult.com",142],["aeroxplorer.com",142],["sportitalialive.com",142],["adrinolinks.com",143],["link.vipurl.in",143],["nanolinks.in",143],["fadedfeet.com",144],["homeculina.com",144],["ineedskin.com",144],["kenzo-flowertag.com",144],["lawyex.co",144],["mdn.lol",144],["starkroboticsfrc.com",145],["sinonimos.de",145],["antonimos.de",145],["quesignifi.ca",145],["tiktokrealtime.com",145],["tiktokcounter.net",145],["tpayr.xyz",145],["poqzn.xyz",145],["ashrfd.xyz",145],["rezsx.xyz",145],["tryzt.xyz",145],["ashrff.xyz",145],["rezst.xyz",145],["dawenet.com",145],["erzar.xyz",145],["waezm.xyz",145],["waezg.xyz",145],["blackwoodacademy.org",145],["cryptednews.space",145],["vivuq.com",145],["swgop.com",145],["vbnmll.com",145],["telcoinfo.online",145],["dshytb.com",145],["bitzite.com",146],["coingraph.us",147],["impact24.us",147],["tpi.li",148],["oii.la",148],["www.apkmoddone.com",149],["sitemini.io.vn",150],["vip1s.top",150],["dl.apkmoddone.com",151],["phongroblox.com",151],["financacerta.com",152],["encurtads.net",152],["shortencash.click",153],["lablue.*",154],["4-liga.com",155],["4fansites.de",155],["4players.de",155],["9monate.de",155],["aachener-nachrichten.de",155],["aachener-zeitung.de",155],["abendblatt.de",155],["abendzeitung-muenchen.de",155],["about-drinks.com",155],["abseits-ka.de",155],["airliners.de",155],["ajaxshowtime.com",155],["allgemeine-zeitung.de",155],["alpin.de",155],["antenne.de",155],["arcor.de",155],["areadvd.de",155],["areamobile.de",155],["ariva.de",155],["astronews.com",155],["aussenwirtschaftslupe.de",155],["auszeit.bio",155],["auto-motor-und-sport.de",155],["auto-service.de",155],["autobild.de",155],["autoextrem.de",155],["autopixx.de",155],["autorevue.at",155],["autotrader.nl",155],["az-online.de",155],["baby-vornamen.de",155],["babyclub.de",155],["bafoeg-aktuell.de",155],["berliner-kurier.de",155],["berliner-zeitung.de",155],["bigfm.de",155],["bikerszene.de",155],["bildderfrau.de",155],["blackd.de",155],["blick.de",155],["boerse-online.de",155],["boerse.de",155],["boersennews.de",155],["braunschweiger-zeitung.de",155],["brieffreunde.de",155],["brigitte.de",155],["buerstaedter-zeitung.de",155],["buffed.de",155],["businessinsider.de",155],["buzzfeed.at",155],["buzzfeed.de",155],["caravaning.de",155],["cavallo.de",155],["chefkoch.de",155],["cinema.de",155],["clever-tanken.de",155],["computerbild.de",155],["computerhilfen.de",155],["comunio-cl.com",155],["comunio.*",155],["connect.de",155],["chip.de",155],["da-imnetz.de",155],["dasgelbeblatt.de",155],["dbna.com",155],["dbna.de",155],["deichstube.de",155],["deine-tierwelt.de",155],["der-betze-brennt.de",155],["derwesten.de",155],["desired.de",155],["dhd24.com",155],["dieblaue24.com",155],["digitalfernsehen.de",155],["dnn.de",155],["donnerwetter.de",155],["e-hausaufgaben.de",155],["e-mountainbike.com",155],["eatsmarter.de",155],["echo-online.de",155],["ecomento.de",155],["einfachschoen.me",155],["elektrobike-online.com",155],["eltern.de",155],["epochtimes.de",155],["essen-und-trinken.de",155],["express.de",155],["extratipp.com",155],["familie.de",155],["fanfiktion.de",155],["fehmarn24.de",155],["fettspielen.de",155],["fid-gesundheitswissen.de",155],["finanzen.*",155],["finanznachrichten.de",155],["finanztreff.de",155],["finya.de",155],["firmenwissen.de",155],["fitforfun.de",155],["fnp.de",155],["football365.fr",155],["formel1.de",155],["fr.de",155],["frankfurter-wochenblatt.de",155],["freenet.de",155],["fremdwort.de",155],["froheweihnachten.info",155],["frustfrei-lernen.de",155],["fuldaerzeitung.de",155],["funandnews.de",155],["fussballdaten.de",155],["futurezone.de",155],["gala.de",155],["gamepro.de",155],["gamersglobal.de",155],["gamesaktuell.de",155],["gamestar.de",155],["gameswelt.*",155],["gamezone.de",155],["gartendialog.de",155],["gartenlexikon.de",155],["gedichte.ws",155],["geissblog.koeln",155],["gelnhaeuser-tageblatt.de",155],["general-anzeiger-bonn.de",155],["geniale-tricks.com",155],["genialetricks.de",155],["gesund-vital.de",155],["gesundheit.de",155],["gevestor.de",155],["gewinnspiele.tv",155],["giessener-allgemeine.de",155],["giessener-anzeiger.de",155],["gifhorner-rundschau.de",155],["giga.de",155],["gipfelbuch.ch",155],["gmuender-tagespost.de",155],["gruenderlexikon.de",155],["gusto.at",155],["gut-erklaert.de",155],["gutfuerdich.co",155],["hallo-muenchen.de",155],["hamburg.de",155],["hanauer.de",155],["hardwareluxx.de",155],["hartziv.org",155],["harzkurier.de",155],["haus-garten-test.de",155],["hausgarten.net",155],["haustec.de",155],["haz.de",155],["heftig.*",155],["heidelberg24.de",155],["heilpraxisnet.de",155],["heise.de",155],["helmstedter-nachrichten.de",155],["hersfelder-zeitung.de",155],["hftg.co",155],["hifi-forum.de",155],["hna.de",155],["hochheimer-zeitung.de",155],["hoerzu.de",155],["hofheimer-zeitung.de",155],["iban-rechner.de",155],["ikz-online.de",155],["immobilienscout24.de",155],["ingame.de",155],["inside-digital.de",155],["inside-handy.de",155],["investor-verlag.de",155],["jappy.com",155],["jpgames.de",155],["kabeleins.de",155],["kachelmannwetter.com",155],["kamelle.de",155],["kicker.de",155],["kindergeld.org",155],["klettern-magazin.de",155],["klettern.de",155],["kochbar.de",155],["kreis-anzeiger.de",155],["kreisbote.de",155],["kreiszeitung.de",155],["ksta.de",155],["kurierverlag.de",155],["lachainemeteo.com",155],["lampertheimer-zeitung.de",155],["landwirt.com",155],["laut.de",155],["lauterbacher-anzeiger.de",155],["leckerschmecker.me",155],["leinetal24.de",155],["lesfoodies.com",155],["levif.be",155],["lifeline.de",155],["liga3-online.de",155],["likemag.com",155],["linux-community.de",155],["linux-magazin.de",155],["live.vodafone.de",155],["ln-online.de",155],["lokalo24.de",155],["lustaufsleben.at",155],["lustich.de",155],["lvz.de",155],["lz.de",155],["mactechnews.de",155],["macwelt.de",155],["macworld.co.uk",155],["mail.de",155],["main-spitze.de",155],["manager-magazin.de",155],["manga-tube.me",155],["mathebibel.de",155],["mathepower.com",155],["maz-online.de",155],["medisite.fr",155],["mehr-tanken.de",155],["mein-kummerkasten.de",155],["mein-mmo.de",155],["mein-wahres-ich.de",155],["meine-anzeigenzeitung.de",155],["meinestadt.de",155],["menshealth.de",155],["mercato365.com",155],["merkur.de",155],["messen.de",155],["metal-hammer.de",155],["metalflirt.de",155],["meteologix.com",155],["minecraft-serverlist.net",155],["mittelbayerische.de",155],["modhoster.de",155],["moin.de",155],["mopo.de",155],["morgenpost.de",155],["motor-talk.de",155],["motorbasar.de",155],["motorradonline.de",155],["motorsport-total.com",155],["motortests.de",155],["mountainbike-magazin.de",155],["moviejones.de",155],["moviepilot.de",155],["mt.de",155],["mtb-news.de",155],["musiker-board.de",155],["musikexpress.de",155],["musikradar.de",155],["mz-web.de",155],["n-tv.de",155],["naumburger-tageblatt.de",155],["netzwelt.de",155],["neuepresse.de",155],["neueroeffnung.info",155],["news.at",155],["news.de",155],["news38.de",155],["newsbreak24.de",155],["nickles.de",155],["nicknight.de",155],["nl.hardware.info",155],["nn.de",155],["nnn.de",155],["nordbayern.de",155],["notebookchat.com",155],["notebookcheck-ru.com",155],["notebookcheck-tr.com",155],["notebookcheck.*",155],["noz-cdn.de",155],["noz.de",155],["nrz.de",155],["nw.de",155],["nwzonline.de",155],["oberhessische-zeitung.de",155],["och.to",155],["oeffentlicher-dienst.info",155],["onlinekosten.de",155],["onvista.de",155],["op-marburg.de",155],["op-online.de",155],["outdoor-magazin.com",155],["outdoorchannel.de",155],["paradisi.de",155],["pc-magazin.de",155],["pcgames.de",155],["pcgameshardware.de",155],["pcwelt.de",155],["pcworld.es",155],["peiner-nachrichten.de",155],["pferde.de",155],["pietsmiet.de",155],["pixelio.de",155],["pkw-forum.de",155],["playboy.de",155],["playfront.de",155],["pnn.de",155],["pons.com",155],["prignitzer.de",155],["profil.at",155],["promipool.de",155],["promobil.de",155],["prosiebenmaxx.de",155],["psychic.de",[155,177]],["quoka.de",155],["radio.at",155],["radio.de",155],["radio.dk",155],["radio.es",155],["radio.fr",155],["radio.it",155],["radio.net",155],["radio.pl",155],["radio.pt",155],["radio.se",155],["ran.de",155],["readmore.de",155],["rechtslupe.de",155],["recording.de",155],["rennrad-news.de",155],["reuters.com",155],["reviersport.de",155],["rhein-main-presse.de",155],["rheinische-anzeigenblaetter.de",155],["rimondo.com",155],["roadbike.de",155],["roemische-zahlen.net",155],["rollingstone.de",155],["rot-blau.com",155],["rp-online.de",155],["rtl.de",[155,252]],["rtv.de",155],["rugby365.fr",155],["ruhr24.de",155],["rundschau-online.de",155],["runnersworld.de",155],["safelist.eu",155],["salzgitter-zeitung.de",155],["sat1.de",155],["sat1gold.de",155],["schoener-wohnen.de",155],["schwaebische-post.de",155],["schwarzwaelder-bote.de",155],["serienjunkies.de",155],["shz.de",155],["sixx.de",155],["skodacommunity.de",155],["smart-wohnen.net",155],["sn.at",155],["sozialversicherung-kompetent.de",155],["spiegel.de",155],["spielen.de",155],["spieletipps.de",155],["spielfilm.de",155],["sport.de",155],["sport1.de",155],["sport365.fr",155],["sportal.de",155],["spox.com",155],["stern.de",155],["stuttgarter-nachrichten.de",155],["stuttgarter-zeitung.de",155],["sueddeutsche.de",155],["svz.de",155],["szene1.at",155],["szene38.de",155],["t-online.de",155],["tagesspiegel.de",155],["taschenhirn.de",155],["techadvisor.co.uk",155],["techstage.de",155],["tele5.de",155],["teltarif.de",155],["testedich.*",155],["the-voice-of-germany.de",155],["thueringen24.de",155],["tichyseinblick.de",155],["tierfreund.co",155],["tiervermittlung.de",155],["torgranate.de",155],["transfermarkt.*",155],["trend.at",155],["truckscout24.*",155],["tv-media.at",155],["tvdigital.de",155],["tvinfo.de",155],["tvspielfilm.de",155],["tvtoday.de",155],["tvtv.*",155],["tz.de",[155,170]],["unicum.de",155],["unnuetzes.com",155],["unsere-helden.com",155],["unterhalt.net",155],["usinger-anzeiger.de",155],["usp-forum.de",155],["videogameszone.de",155],["vienna.at",155],["vip.de",155],["virtualnights.com",155],["vox.de",155],["wa.de",155],["wallstreet-online.de",[155,158]],["waz.de",155],["weather.us",155],["webfail.com",155],["weihnachten.me",155],["weihnachts-bilder.org",155],["weihnachts-filme.com",155],["weltfussball.at",155],["weristdeinfreund.de",155],["werkzeug-news.de",155],["werra-rundschau.de",155],["wetterauer-zeitung.de",155],["wetteronline.*",155],["wieistmeineip.*",155],["wiesbadener-kurier.de",155],["wiesbadener-tagblatt.de",155],["winboard.org",155],["windows-7-forum.net",155],["winfuture.de",[155,166]],["wintotal.de",155],["wlz-online.de",155],["wn.de",155],["wohngeld.org",155],["wolfenbuetteler-zeitung.de",155],["wolfsburger-nachrichten.de",155],["woman.at",155],["womenshealth.de",155],["wormser-zeitung.de",155],["woxikon.de",155],["wp.de",155],["wr.de",155],["wunderweib.de",155],["yachtrevue.at",155],["ze.tt",155],["zeit.de",155],["lecker.de",155],["meineorte.com",156],["osthessen-news.de",156],["techadvisor.com",156],["focus.de",156],["wetter.*",157],["herzporno.net",159],["pornhub-sexfilme.net",159],["pornojenny.net",159],["pornoleon.com",159],["deinesexfilme.com",160],["einfachtitten.com",160],["lesbenhd.com",160],["milffabrik.com",[160,223]],["porn-monkey.com",160],["porndrake.com",160],["pornhubdeutsch.net",160],["pornoaffe.com",160],["pornodavid.com",160],["pornoente.tv",[160,223]],["pornofisch.com",160],["pornofelix.com",160],["pornohammer.com",160],["pornohelm.com",160],["pornoklinge.com",160],["pornotom.com",[160,223]],["pornotommy.com",160],["pornovideos-hd.com",160],["pornozebra.com",[160,223]],["xhamsterdeutsch.xyz",160],["xnxx-sexfilme.com",160],["nu6i-bg-net.com",162],["kiaclub.cz",162],["khsm.io",162],["webcreator-journal.com",162],["msdos-games.com",162],["blocklayer.com",162],["animeshqip.org",162],["weknowconquer.com",162],["giff.cloud",162],["aquarius-horoscopes.com",163],["cancer-horoscopes.com",163],["dubipc.blogspot.com",163],["echoes.gr",163],["engel-horoskop.de",163],["freegames44.com",163],["fuerzasarmadas.eu",163],["gemini-horoscopes.com",163],["jurukunci.net",163],["krebs-horoskop.com",163],["leo-horoscopes.com",163],["maliekrani.com",163],["nklinks.click",163],["ourenseando.es",163],["pisces-horoscopes.com",163],["radio-en-direct.fr",163],["sagittarius-horoscopes.com",163],["scorpio-horoscopes.com",163],["singlehoroskop-loewe.de",163],["skat-karten.de",163],["skorpion-horoskop.com",163],["taurus-horoscopes.com",163],["the1security.com",163],["virgo-horoscopes.com",163],["zonamarela.blogspot.com",163],["yoima.hatenadiary.com",163],["kaystls.site",164],["ftuapps.dev",165],["studydhaba.com",165],["freecourse.tech",165],["victor-mochere.com",165],["papunika.com",165],["mobilanyheter.net",165],["prajwaldesai.com",[165,241]],["carscoops.com",166],["dziennik.pl",166],["eurointegration.com.ua",166],["flatpanelshd.com",166],["footballtransfer.com.ua",166],["footballtransfer.ru",166],["hoyme.jp",166],["issuya.com",166],["itainews.com",166],["iusm.co.kr",166],["logicieleducatif.fr",166],["mynet.com",[166,192]],["onlinegdb.com",166],["picrew.me",166],["pravda.com.ua",166],["reportera.co.kr",166],["sportanalytic.com",166],["sportsrec.com",166],["sportsseoul.com",166],["text-compare.com",166],["tweaksforgeeks.com",166],["wfmz.com",166],["worldhistory.org",166],["palabr.as",166],["motscroises.fr",166],["cruciverba.it",166],["w.grapps.me",166],["gazetaprawna.pl",166],["pressian.com",166],["raenonx.cc",[166,268]],["indiatimes.com",166],["missyusa.com",166],["aikatu.jp",166],["ark-unity.com",166],["cool-style.com.tw",166],["doanhnghiepvn.vn",166],["mykhel.com",166],["automobile-catalog.com",167],["motorbikecatalog.com",167],["maketecheasier.com",167],["mlbpark.donga.com",168],["jjang0u.com",169],["neowin.net",170],["newatlas.com",170],["razzball.com",170],["12thmanrising.com",170],["aroundthefoghorn.com",170],["arrowheadaddict.com",170],["badgerofhonor.com",170],["bamahammer.com",170],["beargoggleson.com",170],["beyondtheflag.com",170],["blackandteal.com",170],["blogredmachine.com",170],["bluemanhoop.com",170],["boltbeat.com",170],["bosoxinjection.com",170],["buffalowdown.com",170],["caneswarning.com",170],["catcrave.com",170],["chopchat.com",170],["climbingtalshill.com",170],["cubbiescrib.com",170],["dailyknicks.com",170],["dairylandexpress.com",170],["dawindycity.com",170],["dawnofthedawg.com",170],["detroitjockcity.com",170],["dodgersway.com",170],["ebonybird.com",170],["fansided.com",170],["gbmwolverine.com",170],["gmenhq.com",170],["hailfloridahail.com",170],["hardwoodhoudini.com",170],["horseshoeheroes.com",170],["housethathankbuilt.com",170],["huskercorner.com",170],["insidetheiggles.com",170],["jaysjournal.com",170],["justblogbaby.com",170],["kckingdom.com",170],["kingjamesgospel.com",170],["lakeshowlife.com",170],["lombardiave.com",170],["motorcitybengals.com",170],["musketfire.com",170],["nflspinzone.com",170],["ninernoise.com",170],["nugglove.com",170],["phinphanatic.com",170],["pistonpowered.com",170],["predominantlyorange.com",170],["ramblinfan.com",170],["redbirdrants.com",170],["reviewingthebrew.com",170],["riggosrag.com",170],["ripcityproject.com",170],["risingapple.com",170],["rumbunter.com",170],["scarletandgame.com",170],["section215.com",170],["sidelionreport.com",170],["slapthesign.com",170],["sodomojo.com",170],["stillcurtain.com",170],["stormininnorman.com",170],["stripehype.com",170],["thatballsouttahere.com",170],["thejetpress.com",170],["thelandryhat.com",170],["thepewterplank.com",170],["thesmokingcuban.com",170],["thevikingage.com",170],["thunderousintentions.com",170],["valleyofthesuns.com",170],["whodatdish.com",170],["yanksgoyard.com",170],["auto-swiat.pl",171],["download.kingtecnologia.com",172],["daemonanime.net",173],["bgmateriali.com",173],["daemon-hentai.com",174],["embedtv.net",175],["tinhte.vn",176],["app.simracing.gp",176],["forumdz.com",177],["zilinak.sk",177],["pdfaid.com",177],["bootdey.com",177],["mail.com",177],["moegirl.org.cn",177],["flix-wave.lol",177],["fmovies0.cc",177],["worthcrete.com",177],["infomatricula.pt",177],["my-code4you.blogspot.com",178],["vrcmods.com",179],["osuskinner.com",179],["osuskins.net",179],["uploadhub.*",180],["pentruea.com",181],["mchacks.net",182],["why-tech.it",183],["compsmag.com",184],["tapetus.pl",185],["autoroad.cz",186],["brawlhalla.fr",186],["tecnobillo.com",186],["pokemon-project.com",186],["breatheheavy.com",187],["wenxuecity.com",188],["key-hub.eu",189],["fabioambrosi.it",190],["tattle.life",191],["emuenzen.de",191],["terrylove.com",191],["cidade.iol.pt",193],["fantacalcio.it",194],["hentaifreak.org",195],["hypebeast.com",196],["krankheiten-simulieren.de",197],["catholic.com",198],["techinferno.com",199],["ibeconomist.com",200],["bookriot.com",201],["purposegames.com",202],["globo.com",203],["latimes.com",203],["claimrbx.gg",204],["perelki.net",205],["vpn-anbieter-vergleich-test.de",206],["livingincebuforums.com",207],["tv247us.live",207],["paperzonevn.com",208],["alltechnerd.com",209],["malaysianwireless.com",210],["erinsakura.com",211],["infofuge.com",211],["freejav.guru",211],["novelmultiverse.com",211],["fritidsmarkedet.dk",212],["maskinbladet.dk",212],["15min.lt",213],["baddiehub.com",214],["mr9soft.com",215],["adult-sex-gamess.com",216],["hentaigames.app",216],["mobilesexgamesx.com",216],["mysexgamer.com",216],["porngameshd.com",216],["sexgamescc.com",216],["xnxx-sex-videos.com",216],["f2movies.to",217],["freeporncave.com",218],["tubsxxx.com",219],["manga18fx.com",220],["freebnbcoin.com",220],["sextvx.com",221],["muztext.com",222],["pornohans.com",223],["nursexfilme.com",223],["pornohirsch.net",223],["xhamster-sexvideos.com",223],["pornoschlange.com",223],["xhamsterdeutsch.*",223],["hdpornos.net",223],["gutesexfilme.com",223],["zona-leros.com",223],["charbelnemnom.com",224],["simplebits.io",225],["online-fix.me",226],["privatemoviez.*",227],["gamersdiscussionhub.com",227],["elahmad.com",228],["owlzo.com",229],["q1003.com",230],["blogpascher.com",231],["testserver.pro",232],["lifestyle.bg",232],["money.bg",232],["news.bg",232],["topsport.bg",232],["webcafe.bg",232],["schoolcheats.net",233],["mgnet.xyz",234],["advertiserandtimes.co.uk",235],["techsolveprac.com",236],["joomlabeginner.com",237],["askpaccosi.com",238],["largescaleforums.com",239],["dubznetwork.com",240],["dongknows.com",242],["traderepublic.community",243],["babia.to",244],["html5.gamemonetize.co",245],["code2care.org",246],["gmx.*",247],["yts-subs.net",248],["dlhd.sx",248],["xxxxsx.com",249],["ngontinh24.com",250],["idevicecentral.com",251],["mangacrab.com",253],["hortonanderfarom.blogspot.com",254],["viefaucet.com",255],["pourcesoir.in",255],["cloud-computing-central.com",256],["afk.guide",257],["businessnamegenerator.com",258],["derstandard.at",259],["derstandard.de",259],["rocketnews24.com",260],["soranews24.com",260],["youpouch.com",260],["gourmetscans.net",261],["ilsole24ore.com",262],["ipacrack.com",263],["infokik.com",264],["porhubvideo.com",266],["webseriessex.com",266],["panuvideo.com",[266,267]],["pornktubes.net",266],["deezer.com",268],["fosslinux.com",269],["shrdsk.me",270],["examword.com",271],["sempreupdate.com.br",271],["tribuna.com",272],["trendsderzukunft.de",273],["gal-dem.com",273],["lostineu.eu",273],["oggitreviso.it",273],["speisekarte.de",273],["mixed.de",273],["lightnovelspot.com",[274,275]],["novelpub.com",[274,275]],["webnovelpub.com",[274,275]],["snopes.com",275],["hwzone.co.il",276],["nammakalvi.com",277],["igay69.com",277],["c2g.at",278],["terafly.me",278],["elamigos-games.com",278],["elamigos-games.net",278],["elamigosgames.org",278],["dktechnicalmate.com",279],["recipahi.com",279],["vpntester.org",280],["japscan.lol",281],["digitask.ru",282],["tempumail.com",283],["sexvideos.host",284],["camcaps.*",285],["10alert.com",286],["cryptstream.de",287],["nydus.org",287],["techhelpbd.com",288],["fapdrop.com",289],["cellmapper.net",290],["hdrez.com",291],["youwatch-serie.com",291],["russland.jetzt",291],["printablecreative.com",292],["peachprintable.com",292],["comohoy.com",293],["leak.sx",293],["paste.bin.sx",293],["pornleaks.in",293],["merlininkazani.com",293],["j91.asia",294],["jeniusplay.com",295],["indianyug.com",296],["rgb.vn",296],["needrom.com",297],["criptologico.com",298],["megadrive-emulator.com",299],["eromanga-show.com",300],["hentai-one.com",300],["hentaipaw.com",300],["10minuteemails.com",301],["luxusmail.org",301],["w3cub.com",302],["bangpremier.com",303],["nyaa.iss.ink",304],["drivebot.*",305],["thenextplanet1.*",306],["tnp98.xyz",306],["techedubyte.com",307],["poplinks.*",308],["tickzoo.tv",309],["oploverz.*",309],["memedroid.com",310],["karaoketexty.cz",311],["filmizlehdfilm.com",312],["filmizletv.*",312],["fullfilmizle.cc",312],["gofilmizle.net",312],["resortcams.com",313],["cheatography.com",313],["sonixgvn.net",314],["autoscout24.*",315],["mjakmama24.pl",316],["cheatermad.com",317],["work.ink",318],["ville-ideale.fr",319],["brainly.*",320],["eodev.com",320],["xfreehd.com",322],["freethesaurus.com",323],["thefreedictionary.com",323],["fm-arena.com",324],["tradersunion.com",325],["tandess.com",326],["allosurf.net",326],["spontacts.com",327],["dankmemer.lol",328],["getexploits.com",329],["fplstatistics.com",330],["breitbart.com",331],["salidzini.lv",332],["cryptorank.io",[333,334]],["qqwebplay.xyz",335],["molbiotools.com",336],["vods.tv",337],["18xxx.xyz",[338,373]],["raidrush.net",339],["xnxxcom.xyz",340],["videzz.net",341],["spambox.xyz",342],["dreamdth.com",343],["freemodsapp.in",343],["onlytech.com",343],["en-thunderscans.com",344],["infinityscans.xyz",345],["infinityscans.net",345],["infinityscans.org",345],["historicaerials.com",346],["iqksisgw.xyz",347],["caroloportunidades.com.br",348],["coempregos.com.br",348],["foodiesgallery.com",348],["vikatan.com",349],["camhub.world",350],["omuzaani.me",351],["mma-core.*",352],["pouvideo.*",353],["povvideo.*",353],["povw1deo.*",353],["povwideo.*",353],["powv1deo.*",353],["powvibeo.*",353],["powvideo.*",353],["powvldeo.*",353],["op.gg",354],["teracourses.com",355],["servustv.com",[356,357]],["freevipservers.net",358],["streambtw.com",359],["qrcodemonkey.net",360],["streamup.ws",361],["tv-films.co.uk",362],["cool--web-de.translate.goog",[363,364]],["gps--cache-de.translate.goog",[363,364]],["web--spiele-de.translate.goog",[363,364]],["fun--seiten-de.translate.goog",[363,364]],["photo--alben-de.translate.goog",[363,364]],["wetter--vorhersage-de.translate.goog",[363,364]],["coolsoftware-de.translate.goog",[363,364]],["kryptografie-de.translate.goog",[363,364]],["cool--domains-de.translate.goog",[363,364]],["net--tours-de.translate.goog",[363,364]],["such--maschine-de.translate.goog",[363,364]],["qul-de.translate.goog",[363,364]],["mailtool-de.translate.goog",[363,364]],["c--ix-de.translate.goog",[363,364]],["softwareengineer-de.translate.goog",[363,364]],["net--tools-de.translate.goog",[363,364]],["hilfen-de.translate.goog",[363,364]],["45er-de.translate.goog",[363,364]],["cooldns-de.translate.goog",[363,364]],["hardware--entwicklung-de.translate.goog",[363,364]],["bgsi.gg",365],["kio.ac",366],["friv.com",367],["sextb.*>>",368],["nepalieducate.com",369],["tsz.com.np",369],["idlixku.com",370],["freegames.com",371],["levante-emv.com",372],["mallorcazeitung.es",372],["regio7.cat",372],["superdeporte.es",372],["laopiniondezamora.es",372],["laopiniondemurcia.es",372],["laopiniondemalaga.es",372],["laopinioncoruna.es",372],["lacronicabadajoz.com",372],["informacion.es",372],["farodevigo.es",372],["emporda.info",372],["elperiodicomediterraneo.com",372],["elperiodicoextremadura.com",372],["epe.es",372],["elperiodicodearagon.com",372],["eldia.es",372],["elcorreoweb.es",372],["diariodemallorca.es",372],["diariodeibiza.es",372],["diariocordoba.com",372],["diaridegirona.cat",372],["elperiodico.com",372],["laprovincia.es",372],["4tube.live",373],["nxxn.live",373],["redtub.live",373],["olympustaff.com",374],["imleagues.com",375],["loudountimes.com",376],["santafenewmexican.com",376],["tdtnews.com",376],["atalantini.online",377],["dataunlocker.com",378]]);
const exceptionsMap = new Map([["vvid30c.*",[132]]]);
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
