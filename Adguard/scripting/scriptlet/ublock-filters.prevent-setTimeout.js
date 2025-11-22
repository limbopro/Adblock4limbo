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
const argsList = [["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["/\\+\\+|setTimeout|\\.close\\(\\)|Loading|&&delete/"],["/offsetHeight|loaded/"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["google_jobrunner"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["alert","2000"],["/adblock|isRequestPresent/"],["documentElement.innerHTML"],["_0x","500"],["isRequestPresent"],["checkAdblock"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["/loadMomoVip|loadExo|includeSpecial/"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["consent"],["await _0x"],["adbl"],["openPopunder"],["closeBanner"],[".getComputedStyle"],["offsetHeight"],["offsetLeft"],["height"],["location.href","1000"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["click"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],[".redirect"],["/AdBlock/i"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["","2000-5000"],["contrformpub"],["trigger","0"],["ADB"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["getComputedStyle(testAd)"],[".adv-"],["/Executed|modal/"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["/location\\.(replace|href)|stopAndExitFullscreen/"],["displayAdBlockedVideo"],["test.remove","100"],["adblock","2000"],["adBlockerModal"],["","10000-15000"],["/adex|loadAds|adCollapsedCount|ad-?block/i"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["mode:\"no-cors\""],["Visibility"],["ast"],["googlesyndication"],["start"],["moneyDetect"],["sub"],["/createElement|addEventListener|clientHeight/"],["testAd"],[".redirected"],["TNCMS.DMP"],["doubleclick"],["document.body.style.overflow"],["[native code]","120000"]];
const hostnamesMap = new Map([["poophq.com",0],["veev.to",0],["dogdrip.net",1],["infinityfree.com",1],["smsonline.cloud",[1,2]],["welt.de",[1,156]],["faqwiki.us",3],["mail.yahoo.com",[4,322]],["maxcheaters.com",4],["postimees.ee",4],["police.community",4],["gisarea.com",4],["schaken-mods.com",4],["tvnet.lv",4],["theclashify.com",4],["txori.com",4],["olarila.com",4],["deletedspeedstreams.blogspot.com",4],["schooltravelorganiser.com",4],["xhardhempus.net",4],["mhn.quest",4],["leagueofgraphs.com",4],["hieunguyenphoto.com",4],["benzinpreis.de",4],["fit4art.com",4],["th.gl",5],["tvtropes.org",6],["lastampa.it",7],["m.timesofindia.com",8],["timesofindia.indiatimes.com",8],["youmath.it",8],["redensarten-index.de",8],["lesoir.be",8],["electriciansforums.net",8],["keralatelecom.info",8],["universegunz.net",8],["happypenguin.altervista.org",8],["everyeye.it",8],["eztv.*",8],["bluedrake42.com",8],["supermarioemulator.com",8],["futbollibrehd.com",8],["eska.pl",8],["eskarock.pl",8],["voxfm.pl",8],["mathaeser.de",8],["betaseries.com",8],["free-sms-receive.com",8],["sms-receive-online.com",8],["computer76.ru",8],["golem.de",[9,10,156]],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["downloadr.in",10],["topcomicporno.com",10],["sushi-scan.*",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["seriesperu.com",10],["spigotunlocked.*",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,266]],["topsporter.net",[10,266]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["ahmedmode.*",10],["esopress.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["forum-xiaomi.com",10],["mediafire.com",11],["yts.*",12],["720pstream.*",12],["1stream.*",12],["seattletimes.com",13],["bestgames.com",14],["yiv.com",14],["globalrph.com",15],["e-glossa.it",16],["webcheats.com.br",17],["urlcero.*",18],["elamigosgamez.com",18],["gala.fr",19],["gentside.com",19],["geo.fr",19],["hbrfrance.fr",19],["nationalgeographic.fr",19],["ohmymag.com",19],["serengo.net",19],["vsd.fr",19],["short.pe",20],["thefmovies.*",20],["footystreams.net",20],["katestube.com",20],["updato.com",[21,34]],["totaldebrid.*",22],["sandrives.*",22],["daizurin.com",22],["pendekarsubs.us",22],["dreamfancy.org",22],["rysafe.blogspot.com",22],["techacode.com",22],["toppng.com",22],["th-world.com",22],["avjamack.com",22],["avjamak.net",22],["cnnamador.com",23],["nudecelebforum.com",24],["pronpic.org",25],["thewebflash.com",26],["discordfastfood.com",26],["xup.in",26],["popularmechanics.com",27],["comunidadgzone.es",28],["fxporn69.*",28],["mp3fy.com",28],["lebensmittelpraxis.de",28],["aliancapes.*",28],["forum-pokemon-go.fr",28],["praxis-jugendarbeit.de",28],["dictionnaire-medical.net",28],["cle0desktop.blogspot.com",28],["up-load.io",28],["keysbrasil.blogspot.com",28],["hotpress.info",28],["turkleech.com",28],["anibatch.me",28],["anime-i.com",28],["gewinde-normen.de",28],["tucinehd.com",28],["kdramasmaza.com.pk",28],["jellynote.com",29],["eporner.com",30],["pornbimbo.com",31],["4j.com",31],["avoiderrors.com",32],["sitarchive.com",32],["livenewsof.com",32],["topnewsshow.com",32],["gatcha.org",32],["kusonime.com",32],["suicidepics.com",32],["codesnail.com",32],["codingshiksha.com",32],["graphicux.com",32],["citychilli.com",32],["talkjarvis.com",32],["hdmotori.it",33],["tubsexer.*",35],["femdomtb.com",35],["porno-tour.*",35],["lenkino.*",35],["bobs-tube.com",35],["pornfd.com",35],["pornomoll.*",35],["camsclips.*",35],["popno-tour.net",35],["watchmdh.to",35],["camwhores.tv",35],["camhub.cc",35],["elfqrin.com",36],["satcesc.com",37],["apfelpatient.de",37],["lusthero.com",38],["m4ufree.*",39],["m2list.com",39],["embed.nana2play.com",39],["dallasnews.com",40],["lnk.news",41],["lnk.parts",41],["efukt.com",42],["wendycode.com",42],["springfieldspringfield.co.uk",43],["porndoe.com",44],["smsget.net",[45,46]],["kjanime.net",47],["gioialive.it",48],["classicreload.com",49],["scriptzhub.com",49],["hotpornfile.org",50],["coolsoft.altervista.org",50],["hackedonlinegames.com",50],["dailytech-news.eu",50],["settlersonlinemaps.com",50],["ad-doge.com",50],["magdownload.org",50],["kpkuang.org",50],["crypto4yu.com",50],["writedroid.*",50],["thenightwithoutthedawn.blogspot.com",50],["claimlite.club",50],["newscon.org",50],["rl6mans.com",50],["chicoer.com",51],["bostonherald.com",51],["dailycamera.com",51],["sportsplays.com",52],["ebookdz.com",53],["telerium.*",54],["pornvideotop.com",55],["arolinks.com",55],["xstory-fr.com",55],["1337x.*",55],["x1337x.*",55],["1337x.ninjaproxy1.com",55],["ytapi.cc",55],["letribunaldunet.fr",56],["vladan.fr",56],["live-tv-channels.org",57],["eslfast.com",58],["ge-map-overlays.appspot.com",59],["mad4wheels.com",59],["1xanimes.in",59],["logi.im",59],["emailnator.com",59],["claudelog.com",59],["freegamescasual.com",60],["tcpvpn.com",61],["oko.sh",61],["timesnownews.com",61],["timesnowhindi.com",61],["timesnowmarathi.com",61],["zoomtventertainment.com",61],["tsubasa.im",62],["sholah.net",63],["2rdroid.com",63],["bisceglielive.it",64],["openspeedtest.com",65],["addtobucketlist.com",65],["3dzip.org",[65,66]],["ilmeteo.it",65],["wcoforever.com",65],["comprovendolibri.it",65],["healthelia.com",65],["wcoanimedub.tv",65],["wcoforever.net",65],["pandajogosgratis.com.br",67],["5278.cc",68],["pandafreegames.*",69],["tonspion.de",70],["duplichecker.com",71],["plagiarismchecker.co",71],["plagiarismdetector.net",71],["searchenginereports.net",71],["smallseotools.com",72],["linkspaid.com",73],["proxydocker.com",73],["beeimg.com",[74,75]],["emturbovid.com",75],["findjav.com",75],["javggvideo.xyz",75],["mmtv01.xyz",75],["stbturbo.xyz",75],["trailerhg.xyz",75],["turboplayers.xyz",75],["turbovidhls.com",75],["viralharami.com",75],["ftlauderdalebeachcam.com",76],["ftlauderdalewebcam.com",76],["juneauharborwebcam.com",76],["keywestharborwebcam.com",76],["kittycatcam.com",76],["mahobeachcam.com",76],["miamiairportcam.com",76],["morganhillwebcam.com",76],["njwildlifecam.com",76],["nyharborwebcam.com",76],["paradiseislandcam.com",76],["pompanobeachcam.com",76],["portbermudawebcam.com",76],["portcanaveralwebcam.com",76],["portevergladeswebcam.com",76],["portmiamiwebcam.com",76],["portnywebcam.com",76],["portnassauwebcam.com",76],["portstmaartenwebcam.com",76],["portstthomaswebcam.com",76],["porttampawebcam.com",76],["sxmislandcam.com",76],["themes-dl.com",76],["badassdownloader.com",76],["badasshardcore.com",76],["badassoftcore.com",76],["nulljungle.com",76],["teevee.asia",76],["otakukan.com",76],["thoptv.*",77],["gearingcommander.com",78],["generate.plus",79],["calculate.plus",79],["avcesar.com",80],["audiotag.info",81],["tudigitale.it",82],["ibcomputing.com",83],["legia.net",84],["acapellas4u.co.uk",85],["robloxscripts.com",86],["libreriamo.it",86],["postazap.com",86],["filmyzones.com",86],["medebooks.xyz",86],["mashtips.com",86],["marriedgames.com.br",86],["4allprograms.me",86],["shortzzy.*",86],["nurgsm.com",86],["plugincrack.com",86],["gamingdeputy.com",86],["freewebcart.com",86],["gamekult.com",87],["streamhentaimovies.com",88],["konten.co.id",89],["diariodenavarra.es",90],["scripai.com",90],["myfxbook.com",90],["whatfontis.com",90],["katfile.*",90],["tubereader.me",90],["optifine.net",91],["luzernerzeitung.ch",92],["tagblatt.ch",92],["ableitungsrechner.net",93],["alternet.org",94],["gourmetsupremacy.com",94],["shrib.com",95],["streameast.*",96],["thestreameast.*",96],["techclips.net",96],["daddylivehd.*",96],["footyhunter.lol",96],["wecast.to",96],["freecourseweb.com",97],["coursewikia.com",97],["courseboat.com",97],["pornhub.*",98],["lne.es",[99,373]],["pornult.com",100],["webcamsdolls.com",100],["bitcotasks.com",[100,141]],["adsy.pw",100],["playstore.pw",100],["exactpay.online",100],["thothd.to",100],["proplanta.de",101],["textograto.com",102],["voyageforum.com",103],["hmc-id.blogspot.com",103],["myabandonware.com",103],["wcofun.*",103],["ilforumdeibrutti.is",103],["prad.de",[104,156]],["chatta.it",105],["ketubanjiwa.com",106],["nsfw247.to",107],["funzen.net",107],["extremereportbot.com",108],["getintopc.com",109],["qoshe.com",110],["lowellsun.com",111],["mamadu.pl",111],["dobrapogoda24.pl",111],["motohigh.pl",111],["namasce.pl",111],["ultimate-catch.eu",112],["cpopchanelofficial.com",113],["creditcardgenerator.com",114],["creditcardrush.com",114],["bostoncommons.net",114],["thejobsmovie.com",114],["hl-live.de",115],["satoshi-win.xyz",115],["encurtandourl.com",[115,119]],["www-daftarharga.blogspot.com",115],["ear-phone-review.com",115],["telefullenvivo.com",115],["listatv.pl",115],["coin-profits.xyz",115],["relampagomovies.com",115],["wohnmobilforum.de",115],["nulledbear.com",115],["sinnerclownceviri.net",115],["nilopolisonline.com.br",116],["mesquitaonline.com",116],["yellowbridge.com",116],["yaoiotaku.com",117],["moneyhouse.ch",118],["ihow.info",119],["filesus.com",119],["gotxx.*",119],["sturls.com",119],["turbo1.co",119],["hartico.tv",119],["cupra.forum",119],["turkanime.*",120],["valeronevijao.com",120],["yodelswartlike.com",120],["generatesnitrosate.com",120],["gamoneinterrupted.com",120],["metagnathtuggers.com",120],["rationalityaloelike.com",120],["sizyreelingly.com",120],["urochsunloath.com",120],["monorhinouscassaba.com",120],["antecoxalbobbing1010.com",120],["boonlessbestselling244.com",120],["cyamidpulverulence530.com",120],["guidon40hyporadius9.com",120],["449unceremoniousnasoseptal.com",120],["30sensualizeexpression.com",120],["greaseball6eventual20.com",120],["toxitabellaeatrebates306.com",120],["20demidistance9elongations.com",120],["audaciousdefaulthouse.com",120],["fittingcentermondaysunday.com",120],["launchreliantcleaverriver.com",120],["matriculant401merited.com",120],["realfinanceblogcenter.com",120],["telyn610zoanthropy.com",120],["un-block-voe.net",120],["v-o-e-unblock.com",120],["voe-un-block.com",120],["voe-unblock.*",120],["voeunbl0ck.com",120],["voeunblck.com",120],["voeunblk.com",120],["voeunblock.com",120],["voeunblock2.com",120],["voeunblock3.com",120],["agefi.fr",121],["cariskuy.com",122],["letras2.com",122],["yusepjaelani.blogspot.com",123],["letras.mus.br",124],["eletronicabr.com",125],["mtlurb.com",126],["onemanhua.com",127],["laksa19.github.io",128],["javcl.com",128],["tvlogy.to",128],["rp5.*",128],["live.dragaoconnect.net",128],["seznamzpravy.cz",128],["xerifetech.com",128],["freemcserver.net",128],["allindiaroundup.com",129],["tapchipi.com",130],["dcleakers.com",130],["esgeeks.com",130],["pugliain.net",130],["uplod.net",130],["worldfreeware.com",130],["tech-blogs.com",130],["cardiagn.com",130],["fikiri.net",130],["myhackingworld.com",130],["vectorizer.io",131],["onehack.us",131],["smgplaza.com",131],["thapcam.net",131],["breznikar.com",131],["thefastlaneforum.com",132],["5flix.top",133],["bembed.net",133],["embedv.net",133],["javguard.club",133],["listeamed.net",133],["v6embed.xyz",133],["vembed.*",133],["vid-guard.com",133],["vidguardto.xyz",133],["yesmovies.*>>",133],["pistona.xyz",133],["vinomo.xyz",133],["moflix-stream.*",[133,162]],["trade2win.com",134],["modagamers.com",135],["khatrimaza.*",135],["freemagazines.top",135],["pogolinks.*",135],["straatosphere.com",135],["nullpk.com",135],["adslink.pw",135],["downloadudemy.com",135],["picgiraffe.com",135],["weadown.com",135],["freepornsex.net",135],["nurparatodos.com.ar",135],["popcornstream.*",136],["routech.ro",136],["hokej.net",136],["turkmmo.com",137],["acdriftingpro.com",138],["palermotoday.it",139],["baritoday.it",139],["trentotoday.it",139],["agrigentonotizie.it",139],["anconatoday.it",139],["arezzonotizie.it",139],["avellinotoday.it",139],["bresciatoday.it",139],["brindisireport.it",139],["casertanews.it",139],["cataniatoday.it",139],["cesenatoday.it",139],["chietitoday.it",139],["forlitoday.it",139],["frosinonetoday.it",139],["genovatoday.it",139],["ilpescara.it",139],["ilpiacenza.it",139],["latinatoday.it",139],["lecceprima.it",139],["leccotoday.it",139],["livornotoday.it",139],["messinatoday.it",139],["milanotoday.it",139],["modenatoday.it",139],["monzatoday.it",139],["novaratoday.it",139],["padovaoggi.it",139],["parmatoday.it",139],["perugiatoday.it",139],["pisatoday.it",139],["quicomo.it",139],["ravennatoday.it",139],["reggiotoday.it",139],["riminitoday.it",139],["romatoday.it",139],["salernotoday.it",139],["sondriotoday.it",139],["sportpiacenza.it",139],["ternitoday.it",139],["today.it",139],["torinotoday.it",139],["trevisotoday.it",139],["triesteprima.it",139],["udinetoday.it",139],["veneziatoday.it",139],["vicenzatoday.it",139],["thumpertalk.com",140],["austiblox.net",140],["thelayoff.com",141],["shorterall.com",141],["maxstream.video",141],["tvepg.eu",141],["manwan.xyz",141],["dailymaverick.co.za",142],["ludigames.com",143],["made-by.org",143],["worldtravelling.com",143],["technichero.com",143],["androidadult.com",143],["aeroxplorer.com",143],["sportitalialive.com",143],["adrinolinks.com",144],["link.vipurl.in",144],["nanolinks.in",144],["fadedfeet.com",145],["homeculina.com",145],["ineedskin.com",145],["kenzo-flowertag.com",145],["lawyex.co",145],["mdn.lol",145],["starkroboticsfrc.com",146],["sinonimos.de",146],["antonimos.de",146],["quesignifi.ca",146],["tiktokrealtime.com",146],["tiktokcounter.net",146],["tpayr.xyz",146],["poqzn.xyz",146],["ashrfd.xyz",146],["rezsx.xyz",146],["tryzt.xyz",146],["ashrff.xyz",146],["rezst.xyz",146],["dawenet.com",146],["erzar.xyz",146],["waezm.xyz",146],["waezg.xyz",146],["blackwoodacademy.org",146],["cryptednews.space",146],["vivuq.com",146],["swgop.com",146],["vbnmll.com",146],["telcoinfo.online",146],["dshytb.com",146],["bitzite.com",147],["coingraph.us",148],["impact24.us",148],["tpi.li",149],["oii.la",149],["www.apkmoddone.com",150],["sitemini.io.vn",151],["vip1s.top",151],["dl.apkmoddone.com",152],["phongroblox.com",152],["financacerta.com",153],["encurtads.net",153],["shortencash.click",154],["lablue.*",155],["4-liga.com",156],["4fansites.de",156],["4players.de",156],["9monate.de",156],["aachener-nachrichten.de",156],["aachener-zeitung.de",156],["abendblatt.de",156],["abendzeitung-muenchen.de",156],["about-drinks.com",156],["abseits-ka.de",156],["airliners.de",156],["ajaxshowtime.com",156],["allgemeine-zeitung.de",156],["alpin.de",156],["antenne.de",156],["arcor.de",156],["areadvd.de",156],["areamobile.de",156],["ariva.de",156],["astronews.com",156],["aussenwirtschaftslupe.de",156],["auszeit.bio",156],["auto-motor-und-sport.de",156],["auto-service.de",156],["autobild.de",156],["autoextrem.de",156],["autopixx.de",156],["autorevue.at",156],["autotrader.nl",156],["az-online.de",156],["baby-vornamen.de",156],["babyclub.de",156],["bafoeg-aktuell.de",156],["berliner-kurier.de",156],["berliner-zeitung.de",156],["bigfm.de",156],["bikerszene.de",156],["bildderfrau.de",156],["blackd.de",156],["blick.de",156],["boerse-online.de",156],["boerse.de",156],["boersennews.de",156],["braunschweiger-zeitung.de",156],["brieffreunde.de",156],["brigitte.de",156],["buerstaedter-zeitung.de",156],["buffed.de",156],["businessinsider.de",156],["buzzfeed.at",156],["buzzfeed.de",156],["caravaning.de",156],["cavallo.de",156],["chefkoch.de",156],["cinema.de",156],["clever-tanken.de",156],["computerbild.de",156],["computerhilfen.de",156],["comunio-cl.com",156],["comunio.*",156],["connect.de",156],["chip.de",156],["da-imnetz.de",156],["dasgelbeblatt.de",156],["dbna.com",156],["dbna.de",156],["deichstube.de",156],["deine-tierwelt.de",156],["der-betze-brennt.de",156],["derwesten.de",156],["desired.de",156],["dhd24.com",156],["dieblaue24.com",156],["digitalfernsehen.de",156],["dnn.de",156],["donnerwetter.de",156],["e-hausaufgaben.de",156],["e-mountainbike.com",156],["eatsmarter.de",156],["echo-online.de",156],["ecomento.de",156],["einfachschoen.me",156],["elektrobike-online.com",156],["eltern.de",156],["epochtimes.de",156],["essen-und-trinken.de",156],["express.de",156],["extratipp.com",156],["familie.de",156],["fanfiktion.de",156],["fehmarn24.de",156],["fettspielen.de",156],["fid-gesundheitswissen.de",156],["finanzen.*",156],["finanznachrichten.de",156],["finanztreff.de",156],["finya.de",156],["firmenwissen.de",156],["fitforfun.de",156],["fnp.de",156],["football365.fr",156],["formel1.de",156],["fr.de",156],["frankfurter-wochenblatt.de",156],["freenet.de",156],["fremdwort.de",156],["froheweihnachten.info",156],["frustfrei-lernen.de",156],["fuldaerzeitung.de",156],["funandnews.de",156],["fussballdaten.de",156],["futurezone.de",156],["gala.de",156],["gamepro.de",156],["gamersglobal.de",156],["gamesaktuell.de",156],["gamestar.de",156],["gameswelt.*",156],["gamezone.de",156],["gartendialog.de",156],["gartenlexikon.de",156],["gedichte.ws",156],["geissblog.koeln",156],["gelnhaeuser-tageblatt.de",156],["general-anzeiger-bonn.de",156],["geniale-tricks.com",156],["genialetricks.de",156],["gesund-vital.de",156],["gesundheit.de",156],["gevestor.de",156],["gewinnspiele.tv",156],["giessener-allgemeine.de",156],["giessener-anzeiger.de",156],["gifhorner-rundschau.de",156],["giga.de",156],["gipfelbuch.ch",156],["gmuender-tagespost.de",156],["gruenderlexikon.de",156],["gusto.at",156],["gut-erklaert.de",156],["gutfuerdich.co",156],["hallo-muenchen.de",156],["hamburg.de",156],["hanauer.de",156],["hardwareluxx.de",156],["hartziv.org",156],["harzkurier.de",156],["haus-garten-test.de",156],["hausgarten.net",156],["haustec.de",156],["haz.de",156],["heftig.*",156],["heidelberg24.de",156],["heilpraxisnet.de",156],["heise.de",156],["helmstedter-nachrichten.de",156],["hersfelder-zeitung.de",156],["hftg.co",156],["hifi-forum.de",156],["hna.de",156],["hochheimer-zeitung.de",156],["hoerzu.de",156],["hofheimer-zeitung.de",156],["iban-rechner.de",156],["ikz-online.de",156],["immobilienscout24.de",156],["ingame.de",156],["inside-digital.de",156],["inside-handy.de",156],["investor-verlag.de",156],["jappy.com",156],["jpgames.de",156],["kabeleins.de",156],["kachelmannwetter.com",156],["kamelle.de",156],["kicker.de",156],["kindergeld.org",156],["klettern-magazin.de",156],["klettern.de",156],["kochbar.de",156],["kreis-anzeiger.de",156],["kreisbote.de",156],["kreiszeitung.de",156],["ksta.de",156],["kurierverlag.de",156],["lachainemeteo.com",156],["lampertheimer-zeitung.de",156],["landwirt.com",156],["laut.de",156],["lauterbacher-anzeiger.de",156],["leckerschmecker.me",156],["leinetal24.de",156],["lesfoodies.com",156],["levif.be",156],["lifeline.de",156],["liga3-online.de",156],["likemag.com",156],["linux-community.de",156],["linux-magazin.de",156],["live.vodafone.de",156],["ln-online.de",156],["lokalo24.de",156],["lustaufsleben.at",156],["lustich.de",156],["lvz.de",156],["lz.de",156],["mactechnews.de",156],["macwelt.de",156],["macworld.co.uk",156],["mail.de",156],["main-spitze.de",156],["manager-magazin.de",156],["manga-tube.me",156],["mathebibel.de",156],["mathepower.com",156],["maz-online.de",156],["medisite.fr",156],["mehr-tanken.de",156],["mein-kummerkasten.de",156],["mein-mmo.de",156],["mein-wahres-ich.de",156],["meine-anzeigenzeitung.de",156],["meinestadt.de",156],["menshealth.de",156],["mercato365.com",156],["merkur.de",156],["messen.de",156],["metal-hammer.de",156],["metalflirt.de",156],["meteologix.com",156],["minecraft-serverlist.net",156],["mittelbayerische.de",156],["modhoster.de",156],["moin.de",156],["mopo.de",156],["morgenpost.de",156],["motor-talk.de",156],["motorbasar.de",156],["motorradonline.de",156],["motorsport-total.com",156],["motortests.de",156],["mountainbike-magazin.de",156],["moviejones.de",156],["moviepilot.de",156],["mt.de",156],["mtb-news.de",156],["musiker-board.de",156],["musikexpress.de",156],["musikradar.de",156],["mz-web.de",156],["n-tv.de",156],["naumburger-tageblatt.de",156],["netzwelt.de",156],["neuepresse.de",156],["neueroeffnung.info",156],["news.at",156],["news.de",156],["news38.de",156],["newsbreak24.de",156],["nickles.de",156],["nicknight.de",156],["nl.hardware.info",156],["nn.de",156],["nnn.de",156],["nordbayern.de",156],["notebookchat.com",156],["notebookcheck-ru.com",156],["notebookcheck-tr.com",156],["notebookcheck.*",156],["noz-cdn.de",156],["noz.de",156],["nrz.de",156],["nw.de",156],["nwzonline.de",156],["oberhessische-zeitung.de",156],["och.to",156],["oeffentlicher-dienst.info",156],["onlinekosten.de",156],["onvista.de",156],["op-marburg.de",156],["op-online.de",156],["outdoor-magazin.com",156],["outdoorchannel.de",156],["paradisi.de",156],["pc-magazin.de",156],["pcgames.de",156],["pcgameshardware.de",156],["pcwelt.de",156],["pcworld.es",156],["peiner-nachrichten.de",156],["pferde.de",156],["pietsmiet.de",156],["pixelio.de",156],["pkw-forum.de",156],["playboy.de",156],["playfront.de",156],["pnn.de",156],["pons.com",156],["prignitzer.de",156],["profil.at",156],["promipool.de",156],["promobil.de",156],["prosiebenmaxx.de",156],["psychic.de",[156,178]],["quoka.de",156],["radio.at",156],["radio.de",156],["radio.dk",156],["radio.es",156],["radio.fr",156],["radio.it",156],["radio.net",156],["radio.pl",156],["radio.pt",156],["radio.se",156],["ran.de",156],["readmore.de",156],["rechtslupe.de",156],["recording.de",156],["rennrad-news.de",156],["reuters.com",156],["reviersport.de",156],["rhein-main-presse.de",156],["rheinische-anzeigenblaetter.de",156],["rimondo.com",156],["roadbike.de",156],["roemische-zahlen.net",156],["rollingstone.de",156],["rot-blau.com",156],["rp-online.de",156],["rtl.de",[156,253]],["rtv.de",156],["rugby365.fr",156],["ruhr24.de",156],["rundschau-online.de",156],["runnersworld.de",156],["safelist.eu",156],["salzgitter-zeitung.de",156],["sat1.de",156],["sat1gold.de",156],["schoener-wohnen.de",156],["schwaebische-post.de",156],["schwarzwaelder-bote.de",156],["serienjunkies.de",156],["shz.de",156],["sixx.de",156],["skodacommunity.de",156],["smart-wohnen.net",156],["sn.at",156],["sozialversicherung-kompetent.de",156],["spiegel.de",156],["spielen.de",156],["spieletipps.de",156],["spielfilm.de",156],["sport.de",156],["sport1.de",156],["sport365.fr",156],["sportal.de",156],["spox.com",156],["stern.de",156],["stuttgarter-nachrichten.de",156],["stuttgarter-zeitung.de",156],["sueddeutsche.de",156],["svz.de",156],["szene1.at",156],["szene38.de",156],["t-online.de",156],["tagesspiegel.de",156],["taschenhirn.de",156],["techadvisor.co.uk",156],["techstage.de",156],["tele5.de",156],["teltarif.de",156],["testedich.*",156],["the-voice-of-germany.de",156],["thueringen24.de",156],["tichyseinblick.de",156],["tierfreund.co",156],["tiervermittlung.de",156],["torgranate.de",156],["transfermarkt.*",156],["trend.at",156],["truckscout24.*",156],["tv-media.at",156],["tvdigital.de",156],["tvinfo.de",156],["tvspielfilm.de",156],["tvtoday.de",156],["tvtv.*",156],["tz.de",[156,171]],["unicum.de",156],["unnuetzes.com",156],["unsere-helden.com",156],["unterhalt.net",156],["usinger-anzeiger.de",156],["usp-forum.de",156],["videogameszone.de",156],["vienna.at",156],["vip.de",156],["virtualnights.com",156],["vox.de",156],["wa.de",156],["wallstreet-online.de",[156,159]],["waz.de",156],["weather.us",156],["webfail.com",156],["weihnachten.me",156],["weihnachts-bilder.org",156],["weihnachts-filme.com",156],["weltfussball.at",156],["weristdeinfreund.de",156],["werkzeug-news.de",156],["werra-rundschau.de",156],["wetterauer-zeitung.de",156],["wetteronline.*",156],["wieistmeineip.*",156],["wiesbadener-kurier.de",156],["wiesbadener-tagblatt.de",156],["winboard.org",156],["windows-7-forum.net",156],["winfuture.de",[156,167]],["wintotal.de",156],["wlz-online.de",156],["wn.de",156],["wohngeld.org",156],["wolfenbuetteler-zeitung.de",156],["wolfsburger-nachrichten.de",156],["woman.at",156],["womenshealth.de",156],["wormser-zeitung.de",156],["woxikon.de",156],["wp.de",156],["wr.de",156],["wunderweib.de",156],["yachtrevue.at",156],["ze.tt",156],["zeit.de",156],["lecker.de",156],["meineorte.com",157],["osthessen-news.de",157],["techadvisor.com",157],["focus.de",157],["wetter.*",158],["herzporno.net",160],["pornhub-sexfilme.net",160],["pornojenny.net",160],["pornoleon.com",160],["deinesexfilme.com",161],["einfachtitten.com",161],["lesbenhd.com",161],["milffabrik.com",[161,224]],["porn-monkey.com",161],["porndrake.com",161],["pornhubdeutsch.net",161],["pornoaffe.com",161],["pornodavid.com",161],["pornoente.tv",[161,224]],["pornofisch.com",161],["pornofelix.com",161],["pornohammer.com",161],["pornohelm.com",161],["pornoklinge.com",161],["pornotom.com",[161,224]],["pornotommy.com",161],["pornovideos-hd.com",161],["pornozebra.com",[161,224]],["xhamsterdeutsch.xyz",161],["xnxx-sexfilme.com",161],["nu6i-bg-net.com",163],["kiaclub.cz",163],["khsm.io",163],["webcreator-journal.com",163],["msdos-games.com",163],["blocklayer.com",163],["animeshqip.org",163],["weknowconquer.com",163],["giff.cloud",163],["aquarius-horoscopes.com",164],["cancer-horoscopes.com",164],["dubipc.blogspot.com",164],["echoes.gr",164],["engel-horoskop.de",164],["freegames44.com",164],["fuerzasarmadas.eu",164],["gemini-horoscopes.com",164],["jurukunci.net",164],["krebs-horoskop.com",164],["leo-horoscopes.com",164],["maliekrani.com",164],["nklinks.click",164],["ourenseando.es",164],["pisces-horoscopes.com",164],["radio-en-direct.fr",164],["sagittarius-horoscopes.com",164],["scorpio-horoscopes.com",164],["singlehoroskop-loewe.de",164],["skat-karten.de",164],["skorpion-horoskop.com",164],["taurus-horoscopes.com",164],["the1security.com",164],["virgo-horoscopes.com",164],["zonamarela.blogspot.com",164],["yoima.hatenadiary.com",164],["kaystls.site",165],["ftuapps.dev",166],["studydhaba.com",166],["freecourse.tech",166],["victor-mochere.com",166],["papunika.com",166],["mobilanyheter.net",166],["prajwaldesai.com",[166,242]],["carscoops.com",167],["dziennik.pl",167],["eurointegration.com.ua",167],["flatpanelshd.com",167],["footballtransfer.com.ua",167],["footballtransfer.ru",167],["hoyme.jp",167],["issuya.com",167],["itainews.com",167],["iusm.co.kr",167],["mynet.com",[167,193]],["onlinegdb.com",167],["picrew.me",167],["pravda.com.ua",167],["reportera.co.kr",167],["sportanalytic.com",167],["sportsrec.com",167],["sportsseoul.com",167],["text-compare.com",167],["tweaksforgeeks.com",167],["wfmz.com",167],["worldhistory.org",167],["palabr.as",167],["motscroises.fr",167],["cruciverba.it",167],["w.grapps.me",167],["gazetaprawna.pl",167],["pressian.com",167],["raenonx.cc",[167,269]],["indiatimes.com",167],["missyusa.com",167],["aikatu.jp",167],["ark-unity.com",167],["cool-style.com.tw",167],["doanhnghiepvn.vn",167],["mykhel.com",167],["automobile-catalog.com",168],["motorbikecatalog.com",168],["maketecheasier.com",168],["mlbpark.donga.com",169],["jjang0u.com",170],["neowin.net",171],["newatlas.com",171],["razzball.com",171],["12thmanrising.com",171],["aroundthefoghorn.com",171],["arrowheadaddict.com",171],["badgerofhonor.com",171],["bamahammer.com",171],["beargoggleson.com",171],["beyondtheflag.com",171],["blackandteal.com",171],["blogredmachine.com",171],["bluemanhoop.com",171],["boltbeat.com",171],["bosoxinjection.com",171],["buffalowdown.com",171],["caneswarning.com",171],["catcrave.com",171],["chopchat.com",171],["climbingtalshill.com",171],["cubbiescrib.com",171],["dailyknicks.com",171],["dairylandexpress.com",171],["dawindycity.com",171],["dawnofthedawg.com",171],["detroitjockcity.com",171],["dodgersway.com",171],["ebonybird.com",171],["fansided.com",171],["gbmwolverine.com",171],["gmenhq.com",171],["hailfloridahail.com",171],["hardwoodhoudini.com",171],["horseshoeheroes.com",171],["housethathankbuilt.com",171],["huskercorner.com",171],["insidetheiggles.com",171],["jaysjournal.com",171],["justblogbaby.com",171],["kckingdom.com",171],["kingjamesgospel.com",171],["lakeshowlife.com",171],["lombardiave.com",171],["motorcitybengals.com",171],["musketfire.com",171],["nflspinzone.com",171],["ninernoise.com",171],["nugglove.com",171],["phinphanatic.com",171],["pistonpowered.com",171],["predominantlyorange.com",171],["ramblinfan.com",171],["redbirdrants.com",171],["reviewingthebrew.com",171],["riggosrag.com",171],["ripcityproject.com",171],["risingapple.com",171],["rumbunter.com",171],["scarletandgame.com",171],["section215.com",171],["sidelionreport.com",171],["slapthesign.com",171],["sodomojo.com",171],["stillcurtain.com",171],["stormininnorman.com",171],["stripehype.com",171],["thatballsouttahere.com",171],["thejetpress.com",171],["thelandryhat.com",171],["thepewterplank.com",171],["thesmokingcuban.com",171],["thevikingage.com",171],["thunderousintentions.com",171],["valleyofthesuns.com",171],["whodatdish.com",171],["yanksgoyard.com",171],["auto-swiat.pl",172],["download.kingtecnologia.com",173],["daemonanime.net",174],["bgmateriali.com",174],["daemon-hentai.com",175],["embedtv.net",176],["tinhte.vn",177],["app.simracing.gp",177],["forumdz.com",178],["zilinak.sk",178],["pdfaid.com",178],["bootdey.com",178],["mail.com",178],["moegirl.org.cn",178],["flix-wave.lol",178],["fmovies0.cc",178],["worthcrete.com",178],["infomatricula.pt",178],["my-code4you.blogspot.com",179],["vrcmods.com",180],["osuskinner.com",180],["osuskins.net",180],["uploadhub.*",181],["pentruea.com",182],["mchacks.net",183],["why-tech.it",184],["compsmag.com",185],["tapetus.pl",186],["autoroad.cz",187],["brawlhalla.fr",187],["tecnobillo.com",187],["breatheheavy.com",188],["wenxuecity.com",189],["key-hub.eu",190],["fabioambrosi.it",191],["tattle.life",192],["emuenzen.de",192],["terrylove.com",192],["cidade.iol.pt",194],["fantacalcio.it",195],["hentaifreak.org",196],["hypebeast.com",197],["krankheiten-simulieren.de",198],["catholic.com",199],["techinferno.com",200],["ibeconomist.com",201],["bookriot.com",202],["purposegames.com",203],["globo.com",204],["latimes.com",204],["claimrbx.gg",205],["perelki.net",206],["vpn-anbieter-vergleich-test.de",207],["livingincebuforums.com",208],["tv247us.live",208],["paperzonevn.com",209],["alltechnerd.com",210],["malaysianwireless.com",211],["erinsakura.com",212],["infofuge.com",212],["freejav.guru",212],["novelmultiverse.com",212],["fritidsmarkedet.dk",213],["maskinbladet.dk",213],["15min.lt",214],["baddiehub.com",215],["mr9soft.com",216],["adult-sex-gamess.com",217],["hentaigames.app",217],["mobilesexgamesx.com",217],["mysexgamer.com",217],["porngameshd.com",217],["sexgamescc.com",217],["xnxx-sex-videos.com",217],["f2movies.to",218],["freeporncave.com",219],["tubsxxx.com",220],["manga18fx.com",221],["freebnbcoin.com",221],["sextvx.com",222],["muztext.com",223],["pornohans.com",224],["nursexfilme.com",224],["pornohirsch.net",224],["xhamster-sexvideos.com",224],["pornoschlange.com",224],["xhamsterdeutsch.*",224],["hdpornos.net",224],["gutesexfilme.com",224],["zona-leros.com",224],["charbelnemnom.com",225],["simplebits.io",226],["online-fix.me",227],["privatemoviez.*",228],["gamersdiscussionhub.com",228],["elahmad.com",229],["owlzo.com",230],["q1003.com",231],["blogpascher.com",232],["testserver.pro",233],["lifestyle.bg",233],["money.bg",233],["news.bg",233],["topsport.bg",233],["webcafe.bg",233],["schoolcheats.net",234],["mgnet.xyz",235],["advertiserandtimes.co.uk",236],["techsolveprac.com",237],["joomlabeginner.com",238],["askpaccosi.com",239],["largescaleforums.com",240],["dubznetwork.com",241],["dongknows.com",243],["traderepublic.community",244],["babia.to",245],["html5.gamemonetize.co",246],["code2care.org",247],["gmx.*",248],["yts-subs.net",249],["dlhd.sx",249],["xxxxsx.com",250],["ngontinh24.com",251],["idevicecentral.com",252],["mangacrab.com",254],["hortonanderfarom.blogspot.com",255],["viefaucet.com",256],["pourcesoir.in",256],["cloud-computing-central.com",257],["afk.guide",258],["businessnamegenerator.com",259],["derstandard.at",260],["derstandard.de",260],["rocketnews24.com",261],["soranews24.com",261],["youpouch.com",261],["gourmetscans.net",262],["ilsole24ore.com",263],["ipacrack.com",264],["infokik.com",265],["porhubvideo.com",267],["webseriessex.com",267],["panuvideo.com",[267,268]],["pornktubes.net",267],["deezer.com",269],["fosslinux.com",270],["shrdsk.me",271],["examword.com",272],["sempreupdate.com.br",272],["tribuna.com",273],["trendsderzukunft.de",274],["gal-dem.com",274],["lostineu.eu",274],["oggitreviso.it",274],["speisekarte.de",274],["mixed.de",274],["lightnovelspot.com",[275,276]],["novelpub.com",[275,276]],["webnovelpub.com",[275,276]],["snopes.com",276],["hwzone.co.il",277],["nammakalvi.com",278],["igay69.com",278],["c2g.at",279],["terafly.me",279],["elamigos-games.com",279],["elamigos-games.net",279],["elamigosgames.org",279],["dktechnicalmate.com",280],["recipahi.com",280],["vpntester.org",281],["japscan.lol",282],["digitask.ru",283],["tempumail.com",284],["sexvideos.host",285],["camcaps.*",286],["10alert.com",287],["cryptstream.de",288],["nydus.org",288],["techhelpbd.com",289],["fapdrop.com",290],["cellmapper.net",291],["hdrez.com",292],["youwatch-serie.com",292],["russland.jetzt",292],["printablecreative.com",293],["peachprintable.com",293],["comohoy.com",294],["leak.sx",294],["paste.bin.sx",294],["pornleaks.in",294],["merlininkazani.com",294],["j91.asia",295],["jeniusplay.com",296],["indianyug.com",297],["rgb.vn",297],["needrom.com",298],["criptologico.com",299],["megadrive-emulator.com",300],["eromanga-show.com",301],["hentai-one.com",301],["hentaipaw.com",301],["10minuteemails.com",302],["luxusmail.org",302],["w3cub.com",303],["bangpremier.com",304],["nyaa.iss.ink",305],["drivebot.*",306],["thenextplanet1.*",307],["tnp98.xyz",307],["techedubyte.com",308],["poplinks.*",309],["tickzoo.tv",310],["oploverz.*",310],["memedroid.com",311],["karaoketexty.cz",312],["filmizlehdfilm.com",313],["filmizletv.*",313],["fullfilmizle.cc",313],["gofilmizle.net",313],["resortcams.com",314],["cheatography.com",314],["sonixgvn.net",315],["autoscout24.*",316],["mjakmama24.pl",317],["cheatermad.com",318],["work.ink",319],["ville-ideale.fr",320],["brainly.*",321],["eodev.com",321],["xfreehd.com",323],["freethesaurus.com",324],["thefreedictionary.com",324],["fm-arena.com",325],["tradersunion.com",326],["tandess.com",327],["allosurf.net",327],["spontacts.com",328],["dankmemer.lol",329],["getexploits.com",330],["fplstatistics.com",331],["breitbart.com",332],["salidzini.lv",333],["cryptorank.io",[334,335]],["qqwebplay.xyz",336],["molbiotools.com",337],["vods.tv",338],["18xxx.xyz",[339,374]],["raidrush.net",340],["xnxxcom.xyz",341],["videzz.net",342],["spambox.xyz",343],["dreamdth.com",344],["freemodsapp.in",344],["onlytech.com",344],["en-thunderscans.com",345],["infinityscans.xyz",346],["infinityscans.net",346],["infinityscans.org",346],["historicaerials.com",347],["iqksisgw.xyz",348],["caroloportunidades.com.br",349],["coempregos.com.br",349],["foodiesgallery.com",349],["vikatan.com",350],["camhub.world",351],["omuzaani.me",352],["mma-core.*",353],["pouvideo.*",354],["povvideo.*",354],["povw1deo.*",354],["povwideo.*",354],["powv1deo.*",354],["powvibeo.*",354],["powvideo.*",354],["powvldeo.*",354],["op.gg",355],["teracourses.com",356],["servustv.com",[357,358]],["freevipservers.net",359],["streambtw.com",360],["qrcodemonkey.net",361],["streamup.ws",362],["tv-films.co.uk",363],["cool--web-de.translate.goog",[364,365]],["gps--cache-de.translate.goog",[364,365]],["web--spiele-de.translate.goog",[364,365]],["fun--seiten-de.translate.goog",[364,365]],["photo--alben-de.translate.goog",[364,365]],["wetter--vorhersage-de.translate.goog",[364,365]],["coolsoftware-de.translate.goog",[364,365]],["kryptografie-de.translate.goog",[364,365]],["cool--domains-de.translate.goog",[364,365]],["net--tours-de.translate.goog",[364,365]],["such--maschine-de.translate.goog",[364,365]],["qul-de.translate.goog",[364,365]],["mailtool-de.translate.goog",[364,365]],["c--ix-de.translate.goog",[364,365]],["softwareengineer-de.translate.goog",[364,365]],["net--tools-de.translate.goog",[364,365]],["hilfen-de.translate.goog",[364,365]],["45er-de.translate.goog",[364,365]],["cooldns-de.translate.goog",[364,365]],["hardware--entwicklung-de.translate.goog",[364,365]],["bgsi.gg",366],["kio.ac",367],["friv.com",368],["sextb.*>>",369],["nepalieducate.com",370],["tsz.com.np",370],["idlixku.com",371],["freegames.com",372],["levante-emv.com",373],["mallorcazeitung.es",373],["regio7.cat",373],["superdeporte.es",373],["laopiniondezamora.es",373],["laopiniondemurcia.es",373],["laopiniondemalaga.es",373],["laopinioncoruna.es",373],["lacronicabadajoz.com",373],["informacion.es",373],["farodevigo.es",373],["emporda.info",373],["elperiodicomediterraneo.com",373],["elperiodicoextremadura.com",373],["epe.es",373],["elperiodicodearagon.com",373],["eldia.es",373],["elcorreoweb.es",373],["diariodemallorca.es",373],["diariodeibiza.es",373],["diariocordoba.com",373],["diaridegirona.cat",373],["elperiodico.com",373],["laprovincia.es",373],["4tube.live",374],["nxxn.live",374],["redtub.live",374],["olympustaff.com",375],["imleagues.com",376],["loudountimes.com",377],["santafenewmexican.com",377],["tdtnews.com",377],["atalantini.online",378],["nicematin.com",379],["dataunlocker.com",380]]);
const exceptionsMap = new Map([["vvid30c.*",[133]]]);
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
