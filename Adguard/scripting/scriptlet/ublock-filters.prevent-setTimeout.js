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
    if ( fn.prototype?.constructor === fn ) {
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
const argsList = [["]();}","500"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["wbDeadHinweis"],["adblock"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["isDesktopApp","1000"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["documentElement.innerHTML"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["alert","2000"],["1e3*"],["","1999"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["appendChild"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["offsetHeight"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["myTestAd"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["afterOpen"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["","10000-15000"],["atob","120000"],["#ad_blocker_detector"],["AdBlocker"]];
const hostnamesMap = new Map([["poophq.com",0],["veev.to",0],["infinityscans.xyz",1],["infinityscans.net",1],["infinityscans.org",1],["dogdrip.net",2],["infinityfree.com",2],["smsonline.cloud",[2,3]],["faqwiki.us",4],["cool--web-de.translate.goog",5],["gps--cache-de.translate.goog",5],["web--spiele-de.translate.goog",5],["fun--seiten-de.translate.goog",5],["photo--alben-de.translate.goog",5],["wetter--vorhersage-de.translate.goog",5],["coolsoftware-de.translate.goog",5],["kryptografie-de.translate.goog",5],["cool--domains-de.translate.goog",5],["net--tours-de.translate.goog",5],["such--maschine-de.translate.goog",5],["qul-de.translate.goog",5],["mailtool-de.translate.goog",5],["c--ix-de.translate.goog",5],["softwareengineer-de.translate.goog",5],["net--tools-de.translate.goog",5],["hilfen-de.translate.goog",5],["45er-de.translate.goog",5],["cooldns-de.translate.goog",5],["hardware--entwicklung-de.translate.goog",5],["mail.yahoo.com",[6,272]],["maxcheaters.com",6],["postimees.ee",6],["police.community",6],["gisarea.com",6],["schaken-mods.com",6],["tvnet.lv",6],["theclashify.com",6],["txori.com",6],["olarila.com",6],["deletedspeedstreams.blogspot.com",6],["schooltravelorganiser.com",6],["xhardhempus.net",6],["mhn.quest",6],["leagueofgraphs.com",6],["hieunguyenphoto.com",6],["benzinpreis.de",6],["lastampa.it",7],["m.timesofindia.com",8],["timesofindia.indiatimes.com",8],["youmath.it",8],["redensarten-index.de",8],["lesoir.be",8],["electriciansforums.net",8],["keralatelecom.info",8],["universegunz.net",8],["happypenguin.altervista.org",8],["everyeye.it",8],["eztv.*",8],["bluedrake42.com",8],["supermarioemulator.com",8],["futbollibrehd.com",8],["eska.pl",8],["eskarock.pl",8],["voxfm.pl",8],["mathaeser.de",8],["1337x.*",8],["betaseries.com",8],["free-sms-receive.com",8],["sms-receive-online.com",8],["computer76.ru",8],["golem.de",[9,10,158]],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["sushi-scan.*",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["seriesperu.com",10],["spigotunlocked.*",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,247]],["topsporter.net",[10,247]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["ahmedmode.*",10],["mobilkulup.com",10],["esopress.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["starleaks.org",10],["forum-xiaomi.com",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,69]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["anghami.com",13],["yts.*",14],["720pstream.*",14],["1stream.*",14],["tutele.sx",14],["katestube.com",15],["short.pe",15],["thefmovies.*",15],["footystreams.net",15],["seattletimes.com",16],["bestgames.com",17],["yiv.com",17],["globalrph.com",18],["e-glossa.it",19],["webcheats.com.br",20],["urlcero.*",21],["gala.fr",22],["gentside.com",22],["geo.fr",22],["hbrfrance.fr",22],["nationalgeographic.fr",22],["ohmymag.com",22],["serengo.net",22],["vsd.fr",22],["updato.com",[23,39]],["totaldebrid.*",24],["sandrives.*",24],["daizurin.com",24],["pendekarsubs.us",24],["dreamfancy.org",24],["rysafe.blogspot.com",24],["techacode.com",24],["toppng.com",24],["th-world.com",24],["avjamack.com",24],["avjamak.net",24],["dlhd.sx",25],["yts-subs.net",25],["cnnamador.com",26],["nudecelebforum.com",27],["pronpic.org",28],["thewebflash.com",29],["discordfastfood.com",29],["xup.in",29],["popularmechanics.com",30],["op.gg",31],["comunidadgzone.es",32],["fxporn69.*",32],["mp3fy.com",32],["lebensmittelpraxis.de",32],["aliancapes.*",32],["ebookdz.com",32],["forum-pokemon-go.fr",32],["praxis-jugendarbeit.de",32],["dictionnaire-medical.net",32],["cle0desktop.blogspot.com",32],["up-load.io",32],["keysbrasil.blogspot.com",32],["hotpress.info",32],["turkleech.com",32],["anibatch.me",32],["anime-i.com",32],["gewinde-normen.de",32],["tucinehd.com",32],["plex-guide.de",32],["kdramasmaza.com.pk",32],["jellynote.com",33],["pouvideo.*",34],["povvideo.*",34],["povw1deo.*",34],["povwideo.*",34],["powv1deo.*",34],["powvibeo.*",34],["powvideo.*",34],["powvldeo.*",34],["eporner.com",35],["pornbimbo.com",36],["4j.com",36],["avoiderrors.com",37],["sitarchive.com",37],["livenewsof.com",37],["topnewsshow.com",37],["gatcha.org",37],["kusonime.com",37],["suicidepics.com",37],["codesnail.com",37],["codingshiksha.com",37],["graphicux.com",37],["citychilli.com",37],["talkjarvis.com",37],["hdmotori.it",38],["tubsexer.*",40],["femdomtb.com",40],["porno-tour.*",40],["lenkino.*",40],["bobs-tube.com",40],["pornfd.com",40],["pornomoll.*",40],["camsclips.*",40],["popno-tour.net",40],["watchmdh.to",40],["camwhores.tv",40],["camhub.cc",40],["elfqrin.com",41],["satcesc.com",42],["apfelpatient.de",42],["lusthero.com",43],["m4ufree.*",44],["m2list.com",44],["embed.nana2play.com",44],["elahmad.com",44],["dofusports.xyz",44],["dallasnews.com",45],["lnk.news",46],["lnk.parts",46],["efukt.com",47],["wendycode.com",47],["springfieldspringfield.co.uk",48],["porndoe.com",49],["smsget.net",[50,51]],["kjanime.net",52],["gioialive.it",53],["classicreload.com",54],["scriptzhub.com",54],["hotpornfile.org",55],["coolsoft.altervista.org",55],["hackedonlinegames.com",55],["dailytech-news.eu",55],["settlersonlinemaps.com",55],["ad-doge.com",55],["magdownload.org",55],["kpkuang.org",55],["crypto4yu.com",55],["faucetwork.space",55],["writedroid.*",55],["thenightwithoutthedawn.blogspot.com",55],["entutes.com",55],["claimlite.club",55],["newscon.org",55],["rl6mans.com",55],["chicoer.com",56],["bostonherald.com",56],["dailycamera.com",56],["sportsplays.com",57],["telerium.*",58],["pornvideotop.com",59],["krotkoosporcie.pl",59],["xstory-fr.com",59],["ytapi.cc",59],["letribunaldunet.fr",60],["vladan.fr",60],["live-tv-channels.org",61],["eslfast.com",62],["ge-map-overlays.appspot.com",63],["mad4wheels.com",63],["1xanimes.in",63],["logi.im",63],["emailnator.com",63],["freegamescasual.com",64],["tcpvpn.com",65],["oko.sh",65],["timesnownews.com",65],["timesnowhindi.com",65],["timesnowmarathi.com",65],["zoomtventertainment.com",65],["tsubasa.im",66],["sholah.net",67],["2rdroid.com",67],["bisceglielive.it",68],["pandajogosgratis.com.br",70],["5278.cc",71],["pandafreegames.*",72],["tonspion.de",73],["duplichecker.com",74],["plagiarismchecker.co",74],["plagiarismdetector.net",74],["searchenginereports.net",74],["smallseotools.com",75],["linkspaid.com",76],["proxydocker.com",76],["beeimg.com",[77,78]],["emturbovid.com",78],["findjav.com",78],["javggvideo.xyz",78],["mmtv01.xyz",78],["stbturbo.xyz",78],["streamsilk.com",78],["ftlauderdalebeachcam.com",79],["ftlauderdalewebcam.com",79],["juneauharborwebcam.com",79],["keywestharborwebcam.com",79],["kittycatcam.com",79],["mahobeachcam.com",79],["miamiairportcam.com",79],["morganhillwebcam.com",79],["njwildlifecam.com",79],["nyharborwebcam.com",79],["paradiseislandcam.com",79],["pompanobeachcam.com",79],["portbermudawebcam.com",79],["portcanaveralwebcam.com",79],["portevergladeswebcam.com",79],["portmiamiwebcam.com",79],["portnywebcam.com",79],["portnassauwebcam.com",79],["portstmaartenwebcam.com",79],["portstthomaswebcam.com",79],["porttampawebcam.com",79],["sxmislandcam.com",79],["themes-dl.com",79],["badassdownloader.com",79],["badasshardcore.com",79],["badassoftcore.com",79],["nulljungle.com",79],["teevee.asia",79],["otakukan.com",79],["thoptv.*",80],["gearingcommander.com",81],["generate.plus",82],["calculate.plus",82],["avcesar.com",83],["audiotag.info",84],["tudigitale.it",85],["ibcomputing.com",86],["legia.net",87],["acapellas4u.co.uk",88],["robloxscripts.com",89],["libreriamo.it",89],["postazap.com",89],["medebooks.xyz",89],["mashtips.com",89],["marriedgames.com.br",89],["4allprograms.me",89],["shortzzy.*",89],["nurgsm.com",89],["certbyte.com",89],["plugincrack.com",89],["gamingdeputy.com",89],["freewebcart.com",89],["streamhentaimovies.com",90],["konten.co.id",91],["diariodenavarra.es",92],["scripai.com",92],["myfxbook.com",92],["whatfontis.com",92],["tubereader.me",92],["optifine.net",93],["luzernerzeitung.ch",94],["tagblatt.ch",94],["ableitungsrechner.net",95],["alternet.org",96],["gourmetsupremacy.com",96],["shrib.com",97],["streameast.*",98],["thestreameast.*",98],["coolcast2.com",98],["techclips.net",98],["daddylivehd.*",98],["footyhunter.lol",98],["poscitech.click",98],["wecast.to",98],["sportbar.live",98],["freecourseweb.com",99],["devcourseweb.com",99],["coursewikia.com",99],["courseboat.com",99],["coursehulu.com",99],["pornhub.*",100],["lne.es",101],["pornult.com",102],["webcamsdolls.com",102],["bitcotasks.com",[102,143]],["adsy.pw",102],["playstore.pw",102],["exactpay.online",102],["thothd.to",102],["proplanta.de",103],["textograto.com",104],["voyageforum.com",105],["hmc-id.blogspot.com",105],["myabandonware.com",105],["wcofun.*",105],["ilforumdeibrutti.is",105],["prad.de",[106,158]],["chatta.it",107],["ketubanjiwa.com",108],["nsfw247.to",109],["funzen.net",109],["ilclubdellericette.it",109],["bollyholic.*",109],["extremereportbot.com",110],["getintopc.com",111],["qoshe.com",112],["lowellsun.com",113],["mamadu.pl",113],["dobrapogoda24.pl",113],["motohigh.pl",113],["namasce.pl",113],["ultimate-catch.eu",114],["cpopchanelofficial.com",115],["creditcardgenerator.com",116],["creditcardrush.com",116],["bostoncommons.net",116],["thejobsmovie.com",116],["hl-live.de",117],["satoshi-win.xyz",117],["encurtandourl.com",[117,121]],["www-daftarharga.blogspot.com",117],["ear-phone-review.com",117],["telefullenvivo.com",117],["listatv.pl",117],["daemon-hentai.com",[117,263]],["coin-profits.xyz",117],["relampagomovies.com",117],["wohnmobilforum.de",117],["nulledbear.com",117],["sinnerclownceviri.net",117],["nilopolisonline.com.br",118],["mesquitaonline.com",118],["yellowbridge.com",118],["yaoiotaku.com",119],["moneyhouse.ch",120],["ihow.info",121],["filesus.com",121],["gotxx.*",121],["sturls.com",121],["re.two.re",121],["turbo1.co",121],["cartoonsarea.xyz",121],["hartico.tv",121],["cupra.forum",121],["turkanime.*",122],["valeronevijao.com",122],["cigarlessarefy.com",122],["figeterpiazine.com",122],["yodelswartlike.com",122],["generatesnitrosate.com",122],["crownmakermacaronicism.com",122],["chromotypic.com",122],["gamoneinterrupted.com",122],["metagnathtuggers.com",122],["wolfdyslectic.com",122],["rationalityaloelike.com",122],["sizyreelingly.com",122],["simpulumlamerop.com",122],["urochsunloath.com",122],["monorhinouscassaba.com",122],["counterclockwisejacky.com",122],["35volitantplimsoles5.com",122],["scatch176duplicities.com",122],["antecoxalbobbing1010.com",122],["boonlessbestselling244.com",122],["cyamidpulverulence530.com",122],["guidon40hyporadius9.com",122],["449unceremoniousnasoseptal.com",122],["19turanosephantasia.com",122],["30sensualizeexpression.com",122],["321naturelikefurfuroid.com",122],["745mingiestblissfully.com",122],["availedsmallest.com",122],["greaseball6eventual20.com",122],["toxitabellaeatrebates306.com",122],["20demidistance9elongations.com",122],["audaciousdefaulthouse.com",122],["fittingcentermondaysunday.com",122],["fraudclatterflyingcar.com",122],["launchreliantcleaverriver.com",122],["matriculant401merited.com",122],["realfinanceblogcenter.com",122],["reputationsheriffkennethsand.com",122],["telyn610zoanthropy.com",122],["tubelessceliolymph.com",122],["tummulerviolableness.com",122],["un-block-voe.net",122],["v-o-e-unblock.com",122],["voe-un-block.com",122],["voe-unblock.*",122],["voeun-block.net",122],["voeunbl0ck.com",122],["voeunblck.com",122],["voeunblk.com",122],["voeunblock.com",122],["voeunblock1.com",122],["voeunblock2.com",122],["voeunblock3.com",122],["agefi.fr",123],["cariskuy.com",124],["letras2.com",124],["yusepjaelani.blogspot.com",125],["letras.mus.br",126],["eletronicabr.com",127],["mtlurb.com",128],["onemanhua.com",129],["laksa19.github.io",130],["javcl.com",130],["tvlogy.to",130],["rp5.*",130],["live.dragaoconnect.net",130],["beststremo.com",130],["seznamzpravy.cz",130],["xerifetech.com",130],["freemcserver.net",130],["t3n.de",131],["allindiaroundup.com",132],["tapchipi.com",133],["cuitandokter.com",133],["tech-blogs.com",133],["cardiagn.com",133],["dcleakers.com",133],["esgeeks.com",133],["pugliain.net",133],["uplod.net",133],["worldfreeware.com",133],["fikiri.net",133],["myhackingworld.com",133],["phoenixfansub.com",133],["vectorizer.io",134],["onehack.us",134],["smgplaza.com",134],["thapcam.net",134],["breznikar.com",134],["thefastlaneforum.com",135],["trade2win.com",136],["modagamers.com",137],["khatrimaza.*",137],["freemagazines.top",137],["pogolinks.*",137],["straatosphere.com",137],["rule34porn.net",137],["nullpk.com",137],["adslink.pw",137],["downloadudemy.com",137],["picgiraffe.com",137],["weadown.com",137],["freepornsex.net",137],["nurparatodos.com.ar",137],["popcornstream.*",138],["routech.ro",138],["hokej.net",138],["turkmmo.com",139],["acdriftingpro.com",140],["palermotoday.it",141],["baritoday.it",141],["trentotoday.it",141],["agrigentonotizie.it",141],["anconatoday.it",141],["arezzonotizie.it",141],["avellinotoday.it",141],["bresciatoday.it",141],["brindisireport.it",141],["casertanews.it",141],["cataniatoday.it",141],["cesenatoday.it",141],["chietitoday.it",141],["forlitoday.it",141],["frosinonetoday.it",141],["genovatoday.it",141],["ilpescara.it",141],["ilpiacenza.it",141],["latinatoday.it",141],["lecceprima.it",141],["leccotoday.it",141],["livornotoday.it",141],["messinatoday.it",141],["milanotoday.it",141],["modenatoday.it",141],["monzatoday.it",141],["novaratoday.it",141],["padovaoggi.it",141],["parmatoday.it",141],["perugiatoday.it",141],["pisatoday.it",141],["quicomo.it",141],["ravennatoday.it",141],["reggiotoday.it",141],["riminitoday.it",141],["romatoday.it",141],["salernotoday.it",141],["sondriotoday.it",141],["sportpiacenza.it",141],["ternitoday.it",141],["today.it",141],["torinotoday.it",141],["trevisotoday.it",141],["triesteprima.it",141],["udinetoday.it",141],["veneziatoday.it",141],["vicenzatoday.it",141],["thumpertalk.com",142],["arkcod.org",142],["thelayoff.com",143],["blog.coinsrise.net",143],["blog.cryptowidgets.net",143],["blog.insurancegold.in",143],["blog.wiki-topia.com",143],["blog.coinsvalue.net",143],["blog.cookinguide.net",143],["blog.freeoseocheck.com",143],["blog.makeupguide.net",143],["blog.carstopia.net",143],["blog.carsmania.net",143],["shorterall.com",143],["blog24.me",143],["maxstream.video",143],["tvepg.eu",143],["manwan.xyz",143],["dailymaverick.co.za",144],["ludigames.com",145],["made-by.org",145],["worldtravelling.com",145],["igirls.in",145],["technichero.com",145],["androidadult.com",145],["aeroxplorer.com",145],["sportitalialive.com",145],["starkroboticsfrc.com",146],["sinonimos.de",146],["antonimos.de",146],["quesignifi.ca",146],["tiktokrealtime.com",146],["tiktokcounter.net",146],["tpayr.xyz",146],["poqzn.xyz",146],["ashrfd.xyz",146],["rezsx.xyz",146],["tryzt.xyz",146],["ashrff.xyz",146],["rezst.xyz",146],["dawenet.com",146],["erzar.xyz",146],["waezm.xyz",146],["waezg.xyz",146],["blackwoodacademy.org",146],["cryptednews.space",146],["vivuq.com",146],["swgop.com",146],["vbnmll.com",146],["telcoinfo.online",146],["dshytb.com",146],["fadedfeet.com",147],["homeculina.com",147],["ineedskin.com",147],["kenzo-flowertag.com",147],["lawyex.co",147],["mdn.lol",147],["bitzite.com",148],["coingraph.us",149],["impact24.us",149],["nanolinks.in",150],["adrinolinks.com",150],["link.vipurl.in",150],["apkmoddone.com",151],["sitemini.io.vn",[152,153]],["vip1s.top",[152,153]],["phongroblox.com",154],["financacerta.com",155],["encurtads.net",155],["shortencash.click",156],["lablue.*",157],["4-liga.com",158],["4fansites.de",158],["4players.de",158],["9monate.de",158],["aachener-nachrichten.de",158],["aachener-zeitung.de",158],["abendblatt.de",158],["abendzeitung-muenchen.de",158],["about-drinks.com",158],["abseits-ka.de",158],["airliners.de",158],["ajaxshowtime.com",158],["allgemeine-zeitung.de",158],["alpin.de",158],["antenne.de",158],["arcor.de",158],["areadvd.de",158],["areamobile.de",158],["ariva.de",158],["astronews.com",158],["aussenwirtschaftslupe.de",158],["auszeit.bio",158],["auto-motor-und-sport.de",158],["auto-service.de",158],["autobild.de",158],["autoextrem.de",158],["autopixx.de",158],["autorevue.at",158],["autotrader.nl",158],["az-online.de",158],["baby-vornamen.de",158],["babyclub.de",158],["bafoeg-aktuell.de",158],["berliner-kurier.de",158],["berliner-zeitung.de",158],["bigfm.de",158],["bikerszene.de",158],["bildderfrau.de",158],["blackd.de",158],["blick.de",158],["boerse-online.de",158],["boerse.de",158],["boersennews.de",158],["braunschweiger-zeitung.de",158],["brieffreunde.de",158],["brigitte.de",158],["buerstaedter-zeitung.de",158],["buffed.de",158],["businessinsider.de",158],["buzzfeed.at",158],["buzzfeed.de",158],["caravaning.de",158],["cavallo.de",158],["chefkoch.de",158],["cinema.de",158],["clever-tanken.de",158],["computerbild.de",158],["computerhilfen.de",158],["comunio-cl.com",158],["comunio.*",158],["connect.de",158],["chip.de",158],["da-imnetz.de",158],["dasgelbeblatt.de",158],["dbna.com",158],["dbna.de",158],["deichstube.de",158],["deine-tierwelt.de",158],["der-betze-brennt.de",158],["derwesten.de",158],["desired.de",158],["dhd24.com",158],["dieblaue24.com",158],["digitalfernsehen.de",158],["dnn.de",158],["donnerwetter.de",158],["e-hausaufgaben.de",158],["e-mountainbike.com",158],["eatsmarter.de",158],["echo-online.de",158],["ecomento.de",158],["einfachschoen.me",158],["elektrobike-online.com",158],["eltern.de",158],["epochtimes.de",158],["essen-und-trinken.de",158],["express.de",158],["extratipp.com",158],["familie.de",158],["fanfiktion.de",158],["fehmarn24.de",158],["fettspielen.de",158],["fid-gesundheitswissen.de",158],["finanzen.*",158],["finanznachrichten.de",158],["finanztreff.de",158],["finya.de",158],["firmenwissen.de",158],["fitforfun.de",158],["fnp.de",158],["football365.fr",158],["formel1.de",158],["fr.de",158],["frankfurter-wochenblatt.de",158],["freenet.de",158],["fremdwort.de",158],["froheweihnachten.info",158],["frustfrei-lernen.de",158],["fuldaerzeitung.de",158],["funandnews.de",158],["fussballdaten.de",158],["futurezone.de",158],["gala.de",158],["gamepro.de",158],["gamersglobal.de",158],["gamesaktuell.de",158],["gamestar.de",158],["gameswelt.*",158],["gamezone.de",158],["gartendialog.de",158],["gartenlexikon.de",158],["gedichte.ws",158],["geissblog.koeln",158],["gelnhaeuser-tageblatt.de",158],["general-anzeiger-bonn.de",158],["geniale-tricks.com",158],["genialetricks.de",158],["gesund-vital.de",158],["gesundheit.de",158],["gevestor.de",158],["gewinnspiele.tv",158],["giessener-allgemeine.de",158],["giessener-anzeiger.de",158],["gifhorner-rundschau.de",158],["giga.de",158],["gipfelbuch.ch",158],["gmuender-tagespost.de",158],["gruenderlexikon.de",158],["gusto.at",158],["gut-erklaert.de",158],["gutfuerdich.co",158],["hallo-muenchen.de",158],["hamburg.de",158],["hanauer.de",158],["hardwareluxx.de",158],["hartziv.org",158],["harzkurier.de",158],["haus-garten-test.de",158],["hausgarten.net",158],["haustec.de",158],["haz.de",158],["heftig.*",158],["heidelberg24.de",158],["heilpraxisnet.de",158],["heise.de",158],["helmstedter-nachrichten.de",158],["hersfelder-zeitung.de",158],["hftg.co",158],["hifi-forum.de",158],["hna.de",158],["hochheimer-zeitung.de",158],["hoerzu.de",158],["hofheimer-zeitung.de",158],["iban-rechner.de",158],["ikz-online.de",158],["immobilienscout24.de",158],["ingame.de",158],["inside-digital.de",158],["inside-handy.de",158],["investor-verlag.de",158],["jappy.com",158],["jpgames.de",158],["kabeleins.de",158],["kachelmannwetter.com",158],["kamelle.de",158],["kicker.de",158],["kindergeld.org",158],["klettern-magazin.de",158],["klettern.de",158],["kochbar.de",158],["kreis-anzeiger.de",158],["kreisbote.de",158],["kreiszeitung.de",158],["ksta.de",158],["kurierverlag.de",158],["lachainemeteo.com",158],["lampertheimer-zeitung.de",158],["landwirt.com",158],["laut.de",158],["lauterbacher-anzeiger.de",158],["leckerschmecker.me",158],["leinetal24.de",158],["lesfoodies.com",158],["levif.be",158],["lifeline.de",158],["liga3-online.de",158],["likemag.com",158],["linux-community.de",158],["linux-magazin.de",158],["live.vodafone.de",158],["ln-online.de",158],["lokalo24.de",158],["lustaufsleben.at",158],["lustich.de",158],["lvz.de",158],["lz.de",158],["mactechnews.de",158],["macwelt.de",158],["macworld.co.uk",158],["mail.de",158],["main-spitze.de",158],["manager-magazin.de",158],["manga-tube.me",158],["mathebibel.de",158],["mathepower.com",158],["maz-online.de",158],["medisite.fr",158],["mehr-tanken.de",158],["mein-kummerkasten.de",158],["mein-mmo.de",158],["mein-wahres-ich.de",158],["meine-anzeigenzeitung.de",158],["meinestadt.de",158],["menshealth.de",158],["mercato365.com",158],["merkur.de",158],["messen.de",158],["metal-hammer.de",158],["metalflirt.de",158],["meteologix.com",158],["minecraft-serverlist.net",158],["mittelbayerische.de",158],["modhoster.de",158],["moin.de",158],["mopo.de",158],["morgenpost.de",158],["motor-talk.de",158],["motorbasar.de",158],["motorradonline.de",158],["motorsport-total.com",158],["motortests.de",158],["mountainbike-magazin.de",158],["moviejones.de",158],["moviepilot.de",158],["mt.de",158],["mtb-news.de",158],["musiker-board.de",158],["musikexpress.de",158],["musikradar.de",158],["mz-web.de",158],["n-tv.de",158],["naumburger-tageblatt.de",158],["netzwelt.de",158],["neuepresse.de",158],["neueroeffnung.info",158],["news.at",158],["news.de",158],["news38.de",158],["newsbreak24.de",158],["nickles.de",158],["nicknight.de",158],["nl.hardware.info",158],["nn.de",158],["nnn.de",158],["nordbayern.de",158],["notebookchat.com",158],["notebookcheck-ru.com",158],["notebookcheck-tr.com",158],["notebookcheck.*",158],["noz-cdn.de",158],["noz.de",158],["nrz.de",158],["nw.de",158],["nwzonline.de",158],["oberhessische-zeitung.de",158],["och.to",158],["oeffentlicher-dienst.info",158],["onlinekosten.de",158],["onvista.de",158],["op-marburg.de",158],["op-online.de",158],["outdoor-magazin.com",158],["outdoorchannel.de",158],["paradisi.de",158],["pc-magazin.de",158],["pcgames.de",158],["pcgameshardware.de",158],["pcwelt.de",158],["pcworld.es",158],["peiner-nachrichten.de",158],["pferde.de",158],["pietsmiet.de",158],["pixelio.de",158],["pkw-forum.de",158],["playboy.de",158],["playfront.de",158],["pnn.de",158],["pons.com",158],["prignitzer.de",158],["profil.at",158],["promipool.de",158],["promobil.de",158],["prosiebenmaxx.de",158],["psychic.de",[158,171]],["quoka.de",158],["radio.at",158],["radio.de",158],["radio.dk",158],["radio.es",158],["radio.fr",158],["radio.it",158],["radio.net",158],["radio.pl",158],["radio.pt",158],["radio.se",158],["ran.de",158],["readmore.de",158],["rechtslupe.de",158],["recording.de",158],["rennrad-news.de",158],["reuters.com",158],["reviersport.de",158],["rhein-main-presse.de",158],["rheinische-anzeigenblaetter.de",158],["rimondo.com",158],["roadbike.de",158],["roemische-zahlen.net",158],["rollingstone.de",158],["rot-blau.com",158],["rp-online.de",158],["rtl.de",[158,248]],["rtv.de",158],["rugby365.fr",158],["ruhr24.de",158],["rundschau-online.de",158],["runnersworld.de",158],["safelist.eu",158],["salzgitter-zeitung.de",158],["sat1.de",158],["sat1gold.de",158],["schoener-wohnen.de",158],["schwaebische-post.de",158],["schwarzwaelder-bote.de",158],["serienjunkies.de",158],["shz.de",158],["sixx.de",158],["skodacommunity.de",158],["smart-wohnen.net",158],["sn.at",158],["sozialversicherung-kompetent.de",158],["spiegel.de",158],["spielen.de",158],["spieletipps.de",158],["spielfilm.de",158],["sport.de",158],["sport1.de",158],["sport365.fr",158],["sportal.de",158],["spox.com",158],["stern.de",158],["stuttgarter-nachrichten.de",158],["stuttgarter-zeitung.de",158],["sueddeutsche.de",158],["svz.de",158],["szene1.at",158],["szene38.de",158],["t-online.de",158],["tagesspiegel.de",158],["taschenhirn.de",158],["techadvisor.co.uk",158],["techstage.de",158],["tele5.de",158],["teltarif.de",158],["testedich.*",158],["the-voice-of-germany.de",158],["thueringen24.de",158],["tichyseinblick.de",158],["tierfreund.co",158],["tiervermittlung.de",158],["torgranate.de",158],["transfermarkt.*",158],["trend.at",158],["truckscout24.*",158],["tv-media.at",158],["tvdigital.de",158],["tvinfo.de",158],["tvspielfilm.de",158],["tvtoday.de",158],["tvtv.*",158],["tz.de",158],["unicum.de",158],["unnuetzes.com",158],["unsere-helden.com",158],["unterhalt.net",158],["usinger-anzeiger.de",158],["usp-forum.de",158],["videogameszone.de",158],["vienna.at",158],["vip.de",158],["virtualnights.com",158],["vox.de",158],["wa.de",158],["wallstreet-online.de",[158,161]],["waz.de",158],["weather.us",158],["webfail.com",158],["weihnachten.me",158],["weihnachts-bilder.org",158],["weihnachts-filme.com",158],["welt.de",158],["weltfussball.at",158],["weristdeinfreund.de",158],["werkzeug-news.de",158],["werra-rundschau.de",158],["wetterauer-zeitung.de",158],["wetteronline.*",158],["wieistmeineip.*",158],["wiesbadener-kurier.de",158],["wiesbadener-tagblatt.de",158],["winboard.org",158],["windows-7-forum.net",158],["winfuture.de",[158,167]],["wintotal.de",158],["wlz-online.de",158],["wn.de",158],["wohngeld.org",158],["wolfenbuetteler-zeitung.de",158],["wolfsburger-nachrichten.de",158],["woman.at",158],["womenshealth.de",158],["wormser-zeitung.de",158],["woxikon.de",158],["wp.de",158],["wr.de",158],["wunderweib.de",158],["yachtrevue.at",158],["ze.tt",158],["zeit.de",158],["meineorte.com",159],["osthessen-news.de",159],["techadvisor.com",159],["focus.de",159],["wetter.*",160],["deinesexfilme.com",162],["einfachtitten.com",162],["lesbenhd.com",162],["milffabrik.com",[162,220]],["porn-monkey.com",162],["porndrake.com",162],["pornhubdeutsch.net",162],["pornoaffe.com",162],["pornodavid.com",162],["pornoente.tv",[162,220]],["pornofisch.com",162],["pornofelix.com",162],["pornohammer.com",162],["pornohelm.com",162],["pornoklinge.com",162],["pornotom.com",[162,220]],["pornotommy.com",162],["pornovideos-hd.com",162],["pornozebra.com",[162,220]],["xhamsterdeutsch.xyz",162],["xnxx-sexfilme.com",162],["nu6i-bg-net.com",163],["khsm.io",163],["webcreator-journal.com",163],["msdos-games.com",163],["blocklayer.com",163],["weknowconquer.com",163],["aquarius-horoscopes.com",164],["cancer-horoscopes.com",164],["dubipc.blogspot.com",164],["echoes.gr",164],["engel-horoskop.de",164],["freegames44.com",164],["fuerzasarmadas.eu",164],["gemini-horoscopes.com",164],["jurukunci.net",164],["krebs-horoskop.com",164],["leo-horoscopes.com",164],["maliekrani.com",164],["nklinks.click",164],["ourenseando.es",164],["pisces-horoscopes.com",164],["radio-en-direct.fr",164],["sagittarius-horoscopes.com",164],["scorpio-horoscopes.com",164],["singlehoroskop-loewe.de",164],["skat-karten.de",164],["skorpion-horoskop.com",164],["taurus-horoscopes.com",164],["the1security.com",164],["virgo-horoscopes.com",164],["zonamarela.blogspot.com",164],["yoima.hatenadiary.com",164],["kaystls.site",165],["ftuapps.dev",166],["studydhaba.com",166],["freecourse.tech",166],["victor-mochere.com",166],["papunika.com",166],["mobilanyheter.net",166],["prajwaldesai.com",[166,238]],["carscoops.com",167],["dziennik.pl",167],["eurointegration.com.ua",167],["flatpanelshd.com",167],["hoyme.jp",167],["issuya.com",167],["itainews.com",167],["iusm.co.kr",167],["logicieleducatif.fr",167],["mynet.com",[167,187]],["onlinegdb.com",167],["picrew.me",167],["pravda.com.ua",167],["reportera.co.kr",167],["sportsrec.com",167],["sportsseoul.com",167],["text-compare.com",167],["tweaksforgeeks.com",167],["wfmz.com",167],["worldhistory.org",167],["palabr.as",167],["motscroises.fr",167],["cruciverba.it",167],["w.grapps.me",167],["gazetaprawna.pl",167],["pressian.com",167],["raenonx.cc",[167,264]],["indiatimes.com",167],["missyusa.com",167],["aikatu.jp",167],["ark-unity.com",167],["cool-style.com.tw",167],["doanhnghiepvn.vn",167],["automobile-catalog.com",168],["motorbikecatalog.com",168],["maketecheasier.com",168],["mlbpark.donga.com",169],["jjang0u.com",170],["forumdz.com",171],["abandonmail.com",171],["flmods.com",171],["zilinak.sk",171],["projectfreetv.stream",171],["hotdesimms.com",171],["pdfaid.com",171],["bootdey.com",171],["mail.com",171],["expresskaszubski.pl",171],["moegirl.org.cn",171],["flix-wave.lol",171],["fmovies0.cc",171],["worthcrete.com",171],["my-code4you.blogspot.com",172],["vrcmods.com",173],["osuskinner.com",173],["osuskins.net",173],["pentruea.com",[174,175]],["mchacks.net",176],["why-tech.it",177],["compsmag.com",178],["tapetus.pl",179],["autoroad.cz",180],["brawlhalla.fr",180],["tecnobillo.com",180],["sexcamfreeporn.com",181],["breatheheavy.com",182],["wenxuecity.com",183],["key-hub.eu",184],["fabioambrosi.it",185],["tattle.life",186],["emuenzen.de",186],["terrylove.com",186],["cidade.iol.pt",188],["fantacalcio.it",189],["hentaifreak.org",190],["hypebeast.com",191],["krankheiten-simulieren.de",192],["catholic.com",193],["3dmodelshare.org",194],["techinferno.com",195],["ibeconomist.com",196],["bookriot.com",197],["purposegames.com",198],["globo.com",199],["latimes.com",199],["claimrbx.gg",200],["perelki.net",201],["vpn-anbieter-vergleich-test.de",202],["livingincebuforums.com",203],["paperzonevn.com",204],["alltechnerd.com",205],["malaysianwireless.com",206],["erinsakura.com",207],["infofuge.com",207],["freejav.guru",207],["novelmultiverse.com",207],["fritidsmarkedet.dk",208],["maskinbladet.dk",208],["15min.lt",209],["baddiehub.com",210],["mr9soft.com",211],["21porno.com",212],["adult-sex-gamess.com",213],["hentaigames.app",213],["mobilesexgamesx.com",213],["mysexgamer.com",213],["porngameshd.com",213],["sexgamescc.com",213],["xnxx-sex-videos.com",213],["f2movies.to",214],["freeporncave.com",215],["tubsxxx.com",216],["manga18fx.com",217],["freebnbcoin.com",217],["sextvx.com",218],["muztext.com",219],["pornohans.com",220],["nursexfilme.com",220],["pornohirsch.net",220],["xhamster-sexvideos.com",220],["pornoschlange.com",220],["xhamsterdeutsch.*",220],["hdpornos.net",220],["gutesexfilme.com",220],["zona-leros.com",220],["charbelnemnom.com",221],["simplebits.io",222],["online-fix.me",223],["privatemoviez.*",224],["gamersdiscussionhub.com",224],["owlzo.com",225],["q1003.com",226],["blogpascher.com",227],["testserver.pro",228],["lifestyle.bg",228],["money.bg",228],["news.bg",228],["topsport.bg",228],["webcafe.bg",228],["schoolcheats.net",229],["mgnet.xyz",230],["advertiserandtimes.co.uk",231],["xvideos2020.me",232],["111.90.159.132",233],["techsolveprac.com",234],["joomlabeginner.com",235],["largescaleforums.com",236],["dubznetwork.com",237],["dongknows.com",239],["traderepublic.community",240],["babia.to",241],["code2care.org",242],["gmx.*",243],["xxxxsx.com",244],["ngontinh24.com",245],["idevicecentral.com",246],["dzeko11.net",247],["mangacrab.com",249],["hortonanderfarom.blogspot.com",250],["viefaucet.com",251],["pourcesoir.in",251],["cloud-computing-central.com",252],["afk.guide",253],["businessnamegenerator.com",254],["derstandard.at",255],["derstandard.de",255],["rocketnews24.com",256],["soranews24.com",256],["youpouch.com",256],["gourmetscans.net",257],["ilsole24ore.com",258],["ipacrack.com",259],["hentaiporn.one",260],["infokik.com",261],["porhubvideo.com",262],["webseriessex.com",262],["panuvideo.com",262],["pornktubes.net",262],["daemonanime.net",263],["bgmateriali.com",263],["deezer.com",264],["fosslinux.com",265],["shrdsk.me",266],["examword.com",267],["sempreupdate.com.br",267],["tribuna.com",268],["trendsderzukunft.de",269],["gal-dem.com",269],["lostineu.eu",269],["oggitreviso.it",269],["speisekarte.de",269],["mixed.de",269],["lightnovelpub.*",[270,271]],["lightnovelspot.com",[270,271]],["lightnovelworld.com",[270,271]],["novelpub.com",[270,271]],["webnovelpub.com",[270,271]],["hwzone.co.il",273],["nammakalvi.com",274],["c2g.at",275],["terafly.me",275],["elamigos-games.com",275],["elamigos-games.net",275],["elamigosgames.org",275],["dktechnicalmate.com",276],["recipahi.com",276],["vpntester.org",277],["japscan.lol",278],["digitask.ru",279],["tempumail.com",280],["sexvideos.host",281],["camcaps.*",282],["10alert.com",283],["cryptstream.de",284],["nydus.org",284],["techhelpbd.com",285],["fapdrop.com",286],["cellmapper.net",287],["hdrez.com",288],["youwatch-serie.com",288],["russland.jetzt",288],["bembed.net",289],["embedv.net",289],["fslinks.org",289],["listeamed.net",289],["v6embed.xyz",289],["vembed.*",289],["vgplayer.xyz",289],["vid-guard.com",289],["yesmovies.*>>",289],["pistona.xyz",289],["vinomo.xyz",289],["giga-uqload.xyz",289],["moflix-stream.*",[289,344]],["printablecreative.com",290],["peachprintable.com",290],["comohoy.com",291],["leak.sx",291],["paste.bin.sx",291],["pornleaks.in",291],["merlininkazani.com",291],["j91.asia",292],["rekidai-info.github.io",293],["jeniusplay.com",294],["indianyug.com",295],["rgb.vn",295],["needrom.com",296],["criptologico.com",297],["megadrive-emulator.com",298],["eromanga-show.com",299],["hentai-one.com",299],["hentaipaw.com",299],["10minuteemails.com",300],["luxusmail.org",300],["w3cub.com",301],["bangpremier.com",302],["nyaa.iss.ink",303],["drivebot.*",304],["thenextplanet1.*",305],["tnp98.xyz",305],["freepdfcomic.com",306],["techedubyte.com",307],["tickzoo.tv",308],["oploverz.*",308],["memedroid.com",309],["karaoketexty.cz",310],["filmizlehdfilm.com",311],["filmizletv.*",311],["fullfilmizle.cc",311],["gofilmizle.net",311],["resortcams.com",312],["cheatography.com",312],["sonixgvn.net",313],["autoscout24.*",314],["mjakmama24.pl",315],["cheatermad.com",316],["ville-ideale.fr",317],["brainly.*",318],["eodev.com",318],["xfreehd.com",319],["freethesaurus.com",320],["thefreedictionary.com",320],["fm-arena.com",321],["tradersunion.com",322],["tandess.com",323],["allosurf.net",323],["spontacts.com",324],["dankmemer.lol",325],["getexploits.com",326],["fplstatistics.com",327],["breitbart.com",328],["salidzini.lv",329],["choosingnothing.com",330],["cryptorank.io",[331,332]],["4kwebplay.xyz",333],["qqwebplay.xyz",333],["viwlivehdplay.ru",333],["molbiotools.com",334],["vods.tv",335],["18xxx.xyz",336],["raidrush.net",337],["xnxxcom.xyz",338],["videzz.net",339],["spambox.xyz",340],["dreamdth.com",341],["freemodsapp.in",341],["onlytech.com",341],["player.jeansaispasplus.homes",342],["en-thunderscans.com",343],["iqksisgw.xyz",345],["caroloportunidades.com.br",346],["coempregos.com.br",346],["foodiesgallery.com",346],["vikatan.com",347],["camhub.world",348],["mma-core.*",349],["teracourses.com",350],["servustv.com",351],["streambtw.com",352],["qrcodemonkey.net",353],["tv-films.co.uk",354]]);
const exceptionsMap = new Map([["vvid30c.*",[289]]]);
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
