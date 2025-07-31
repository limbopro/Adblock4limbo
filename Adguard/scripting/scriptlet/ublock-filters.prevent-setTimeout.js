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
const argsList = [["=document[_0x"],["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["documentElement.innerHTML"],["alert","2000"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["await _0x"],["offsetHeight"],["offsetLeft"],["height"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["mfp"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["/location.href|location = atob/"],["/adObj|amzn_aps_csm|please-disable|function reportErrors|YW16bl9hcHNfY3Nt|cmVwb3J0RXJyb3Jz|L3ZlcnktcGxlYXNl/"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["Ad","5000"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],[".adv-"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["test.remove","100"],["adBlockerModal"],["","10000-15000"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["determineVisibility"],["TNCMS.DMP"],["ast"],["googlesyndication"],["setInterval"],["moneyDetect"]];
const hostnamesMap = new Map([["japscan.*",0],["poophq.com",1],["veev.to",1],["dogdrip.net",2],["infinityfree.com",2],["smsonline.cloud",[2,3]],["faqwiki.us",4],["mail.yahoo.com",[5,273]],["maxcheaters.com",5],["postimees.ee",5],["police.community",5],["gisarea.com",5],["schaken-mods.com",5],["tvnet.lv",5],["theclashify.com",5],["txori.com",5],["olarila.com",5],["deletedspeedstreams.blogspot.com",5],["schooltravelorganiser.com",5],["xhardhempus.net",5],["mhn.quest",5],["leagueofgraphs.com",5],["hieunguyenphoto.com",5],["benzinpreis.de",5],["lastampa.it",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["eztv.*",7],["bluedrake42.com",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["betaseries.com",7],["free-sms-receive.com",7],["sms-receive-online.com",7],["computer76.ru",7],["golem.de",[8,9,156]],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["tinhocdongthap.com",9],["downloadr.in",9],["topcomicporno.com",9],["sushi-scan.*",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["seriesperu.com",9],["spigotunlocked.*",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,262]],["topsporter.net",[9,262]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["ahmedmode.*",9],["mobilkulup.com",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["starleaks.org",9],["forum-xiaomi.com",9],["mediafire.com",10],["wcoanimedub.tv",11],["wcoforever.net",11],["openspeedtest.com",11],["addtobucketlist.com",11],["3dzip.org",[11,66]],["ilmeteo.it",11],["wcoforever.com",11],["comprovendolibri.it",11],["healthelia.com",11],["yts.*",12],["720pstream.*",12],["1stream.*",12],["tutele.sx",12],["seattletimes.com",13],["bestgames.com",14],["yiv.com",14],["globalrph.com",15],["e-glossa.it",16],["webcheats.com.br",17],["urlcero.*",18],["gala.fr",19],["gentside.com",19],["geo.fr",19],["hbrfrance.fr",19],["nationalgeographic.fr",19],["ohmymag.com",19],["serengo.net",19],["vsd.fr",19],["short.pe",20],["thefmovies.*",20],["footystreams.net",20],["katestube.com",20],["updato.com",[21,35]],["totaldebrid.*",22],["sandrives.*",22],["daizurin.com",22],["pendekarsubs.us",22],["dreamfancy.org",22],["rysafe.blogspot.com",22],["techacode.com",22],["toppng.com",22],["th-world.com",22],["avjamack.com",22],["avjamak.net",22],["cnnamador.com",23],["nudecelebforum.com",24],["pronpic.org",25],["thewebflash.com",26],["discordfastfood.com",26],["xup.in",26],["popularmechanics.com",27],["op.gg",28],["comunidadgzone.es",29],["fxporn69.*",29],["mp3fy.com",29],["lebensmittelpraxis.de",29],["aliancapes.*",29],["forum-pokemon-go.fr",29],["praxis-jugendarbeit.de",29],["dictionnaire-medical.net",29],["cle0desktop.blogspot.com",29],["up-load.io",29],["keysbrasil.blogspot.com",29],["hotpress.info",29],["turkleech.com",29],["anibatch.me",29],["anime-i.com",29],["gewinde-normen.de",29],["tucinehd.com",29],["kdramasmaza.com.pk",29],["jellynote.com",30],["eporner.com",31],["pornbimbo.com",32],["4j.com",32],["avoiderrors.com",33],["sitarchive.com",33],["livenewsof.com",33],["topnewsshow.com",33],["gatcha.org",33],["kusonime.com",33],["suicidepics.com",33],["codesnail.com",33],["codingshiksha.com",33],["graphicux.com",33],["citychilli.com",33],["talkjarvis.com",33],["hdmotori.it",34],["tubsexer.*",36],["femdomtb.com",36],["porno-tour.*",36],["lenkino.*",36],["bobs-tube.com",36],["pornfd.com",36],["pornomoll.*",36],["camsclips.*",36],["popno-tour.net",36],["watchmdh.to",36],["camwhores.tv",36],["camhub.cc",36],["elfqrin.com",37],["satcesc.com",38],["apfelpatient.de",38],["lusthero.com",39],["m4ufree.*",40],["m2list.com",40],["embed.nana2play.com",40],["dallasnews.com",41],["lnk.news",42],["lnk.parts",42],["efukt.com",43],["wendycode.com",43],["springfieldspringfield.co.uk",44],["porndoe.com",45],["smsget.net",[46,47]],["kjanime.net",48],["gioialive.it",49],["classicreload.com",50],["scriptzhub.com",50],["hotpornfile.org",51],["coolsoft.altervista.org",51],["hackedonlinegames.com",51],["dailytech-news.eu",51],["settlersonlinemaps.com",51],["ad-doge.com",51],["magdownload.org",51],["kpkuang.org",51],["crypto4yu.com",51],["faucetwork.space",51],["writedroid.*",51],["thenightwithoutthedawn.blogspot.com",51],["entutes.com",51],["claimlite.club",51],["newscon.org",51],["rl6mans.com",51],["chicoer.com",52],["bostonherald.com",52],["dailycamera.com",52],["sportsplays.com",53],["ebookdz.com",54],["telerium.*",55],["pornvideotop.com",56],["krotkoosporcie.pl",56],["xstory-fr.com",56],["1337x.*",56],["x1337x.*",56],["1337x.ninjaproxy1.com",56],["ytapi.cc",56],["letribunaldunet.fr",57],["vladan.fr",57],["live-tv-channels.org",58],["eslfast.com",59],["ge-map-overlays.appspot.com",60],["mad4wheels.com",60],["1xanimes.in",60],["logi.im",60],["emailnator.com",60],["appnee.com",60],["freegamescasual.com",61],["tcpvpn.com",62],["oko.sh",62],["timesnownews.com",62],["timesnowhindi.com",62],["timesnowmarathi.com",62],["zoomtventertainment.com",62],["tsubasa.im",63],["sholah.net",64],["2rdroid.com",64],["bisceglielive.it",65],["pandajogosgratis.com.br",67],["5278.cc",68],["pandafreegames.*",69],["tonspion.de",70],["duplichecker.com",71],["plagiarismchecker.co",71],["plagiarismdetector.net",71],["searchenginereports.net",71],["smallseotools.com",72],["linkspaid.com",73],["proxydocker.com",73],["beeimg.com",[74,75]],["emturbovid.com",75],["findjav.com",75],["javggvideo.xyz",75],["mmtv01.xyz",75],["stbturbo.xyz",75],["trailerhg.xyz",75],["turboplayers.xyz",75],["viralharami.com",75],["ftlauderdalebeachcam.com",76],["ftlauderdalewebcam.com",76],["juneauharborwebcam.com",76],["keywestharborwebcam.com",76],["kittycatcam.com",76],["mahobeachcam.com",76],["miamiairportcam.com",76],["morganhillwebcam.com",76],["njwildlifecam.com",76],["nyharborwebcam.com",76],["paradiseislandcam.com",76],["pompanobeachcam.com",76],["portbermudawebcam.com",76],["portcanaveralwebcam.com",76],["portevergladeswebcam.com",76],["portmiamiwebcam.com",76],["portnywebcam.com",76],["portnassauwebcam.com",76],["portstmaartenwebcam.com",76],["portstthomaswebcam.com",76],["porttampawebcam.com",76],["sxmislandcam.com",76],["themes-dl.com",76],["badassdownloader.com",76],["badasshardcore.com",76],["badassoftcore.com",76],["nulljungle.com",76],["teevee.asia",76],["otakukan.com",76],["thoptv.*",77],["gearingcommander.com",78],["generate.plus",79],["calculate.plus",79],["avcesar.com",80],["audiotag.info",81],["tudigitale.it",82],["ibcomputing.com",83],["legia.net",84],["acapellas4u.co.uk",85],["robloxscripts.com",86],["libreriamo.it",86],["postazap.com",86],["filmyzones.com",86],["medebooks.xyz",86],["mashtips.com",86],["marriedgames.com.br",86],["4allprograms.me",86],["shortzzy.*",86],["nurgsm.com",86],["certbyte.com",86],["plugincrack.com",86],["gamingdeputy.com",86],["freewebcart.com",86],["gamekult.com",87],["streamhentaimovies.com",88],["konten.co.id",89],["diariodenavarra.es",90],["scripai.com",90],["myfxbook.com",90],["whatfontis.com",90],["tubereader.me",90],["optifine.net",91],["luzernerzeitung.ch",92],["tagblatt.ch",92],["ableitungsrechner.net",93],["alternet.org",94],["gourmetsupremacy.com",94],["shrib.com",95],["streameast.*",96],["thestreameast.*",96],["techclips.net",96],["daddylivehd.*",96],["footyhunter.lol",96],["poscitech.click",96],["wecast.to",96],["sportbar.live",96],["freecourseweb.com",97],["devcourseweb.com",97],["coursewikia.com",97],["courseboat.com",97],["pornhub.*",98],["lne.es",99],["pornult.com",100],["webcamsdolls.com",100],["bitcotasks.com",[100,142]],["adsy.pw",100],["playstore.pw",100],["exactpay.online",100],["thothd.to",100],["proplanta.de",101],["textograto.com",102],["voyageforum.com",103],["hmc-id.blogspot.com",103],["myabandonware.com",103],["wcofun.*",103],["ilforumdeibrutti.is",103],["prad.de",[104,156]],["chatta.it",105],["ketubanjiwa.com",106],["nsfw247.to",107],["funzen.net",107],["extremereportbot.com",108],["getintopc.com",109],["qoshe.com",110],["lowellsun.com",111],["mamadu.pl",111],["dobrapogoda24.pl",111],["motohigh.pl",111],["namasce.pl",111],["ultimate-catch.eu",112],["cpopchanelofficial.com",113],["creditcardgenerator.com",114],["creditcardrush.com",114],["bostoncommons.net",114],["thejobsmovie.com",114],["hl-live.de",115],["satoshi-win.xyz",115],["encurtandourl.com",[115,119]],["www-daftarharga.blogspot.com",115],["ear-phone-review.com",115],["telefullenvivo.com",115],["listatv.pl",115],["daemon-hentai.com",[115,264]],["coin-profits.xyz",115],["relampagomovies.com",115],["wohnmobilforum.de",115],["nulledbear.com",115],["sinnerclownceviri.net",115],["nilopolisonline.com.br",116],["mesquitaonline.com",116],["yellowbridge.com",116],["yaoiotaku.com",117],["moneyhouse.ch",118],["ihow.info",119],["filesus.com",119],["gotxx.*",119],["sturls.com",119],["turbo1.co",119],["hartico.tv",119],["cupra.forum",119],["turkanime.*",120],["valeronevijao.com",120],["yodelswartlike.com",120],["generatesnitrosate.com",120],["gamoneinterrupted.com",120],["metagnathtuggers.com",120],["wolfdyslectic.com",120],["rationalityaloelike.com",120],["sizyreelingly.com",120],["urochsunloath.com",120],["monorhinouscassaba.com",120],["35volitantplimsoles5.com",120],["antecoxalbobbing1010.com",120],["boonlessbestselling244.com",120],["cyamidpulverulence530.com",120],["guidon40hyporadius9.com",120],["449unceremoniousnasoseptal.com",120],["30sensualizeexpression.com",120],["greaseball6eventual20.com",120],["toxitabellaeatrebates306.com",120],["20demidistance9elongations.com",120],["audaciousdefaulthouse.com",120],["fittingcentermondaysunday.com",120],["launchreliantcleaverriver.com",120],["matriculant401merited.com",120],["realfinanceblogcenter.com",120],["telyn610zoanthropy.com",120],["un-block-voe.net",120],["v-o-e-unblock.com",120],["voe-un-block.com",120],["voe-unblock.*",120],["voeun-block.net",120],["voeunbl0ck.com",120],["voeunblck.com",120],["voeunblk.com",120],["voeunblock.com",120],["voeunblock2.com",120],["voeunblock3.com",120],["agefi.fr",121],["cariskuy.com",122],["letras2.com",122],["yusepjaelani.blogspot.com",123],["letras.mus.br",124],["eletronicabr.com",125],["mtlurb.com",126],["onemanhua.com",127],["laksa19.github.io",128],["javcl.com",128],["tvlogy.to",128],["rp5.*",128],["live.dragaoconnect.net",128],["seznamzpravy.cz",128],["xerifetech.com",128],["freemcserver.net",128],["t3n.de",129],["allindiaroundup.com",130],["tapchipi.com",131],["dcleakers.com",131],["esgeeks.com",131],["pugliain.net",131],["uplod.net",131],["worldfreeware.com",131],["tech-blogs.com",131],["cardiagn.com",131],["fikiri.net",131],["myhackingworld.com",131],["phoenixfansub.com",131],["vectorizer.io",132],["onehack.us",132],["smgplaza.com",132],["thapcam.net",132],["breznikar.com",132],["thefastlaneforum.com",133],["5flix.top",134],["bembed.net",134],["embedv.net",134],["javguard.club",134],["listeamed.net",134],["v6embed.xyz",134],["vembed.*",134],["vid-guard.com",134],["vidguardto.xyz",134],["yesmovies.*>>",134],["pistona.xyz",134],["vinomo.xyz",134],["moflix-stream.*",[134,161]],["trade2win.com",135],["modagamers.com",136],["khatrimaza.*",136],["freemagazines.top",136],["pogolinks.*",136],["straatosphere.com",136],["nullpk.com",136],["adslink.pw",136],["downloadudemy.com",136],["picgiraffe.com",136],["weadown.com",136],["freepornsex.net",136],["nurparatodos.com.ar",136],["popcornstream.*",137],["routech.ro",137],["hokej.net",137],["turkmmo.com",138],["acdriftingpro.com",139],["palermotoday.it",140],["baritoday.it",140],["trentotoday.it",140],["agrigentonotizie.it",140],["anconatoday.it",140],["arezzonotizie.it",140],["avellinotoday.it",140],["bresciatoday.it",140],["brindisireport.it",140],["casertanews.it",140],["cataniatoday.it",140],["cesenatoday.it",140],["chietitoday.it",140],["forlitoday.it",140],["frosinonetoday.it",140],["genovatoday.it",140],["ilpescara.it",140],["ilpiacenza.it",140],["latinatoday.it",140],["lecceprima.it",140],["leccotoday.it",140],["livornotoday.it",140],["messinatoday.it",140],["milanotoday.it",140],["modenatoday.it",140],["monzatoday.it",140],["novaratoday.it",140],["padovaoggi.it",140],["parmatoday.it",140],["perugiatoday.it",140],["pisatoday.it",140],["quicomo.it",140],["ravennatoday.it",140],["reggiotoday.it",140],["riminitoday.it",140],["romatoday.it",140],["salernotoday.it",140],["sondriotoday.it",140],["sportpiacenza.it",140],["ternitoday.it",140],["today.it",140],["torinotoday.it",140],["trevisotoday.it",140],["triesteprima.it",140],["udinetoday.it",140],["veneziatoday.it",140],["vicenzatoday.it",140],["thumpertalk.com",141],["austiblox.net",141],["arkcod.org",141],["thelayoff.com",142],["shorterall.com",142],["blog24.me",142],["maxstream.video",142],["tvepg.eu",142],["manwan.xyz",142],["dailymaverick.co.za",143],["ludigames.com",144],["made-by.org",144],["worldtravelling.com",144],["technichero.com",144],["androidadult.com",144],["aeroxplorer.com",144],["sportitalialive.com",144],["infomatricula.pt",[144,366]],["starkroboticsfrc.com",145],["sinonimos.de",145],["antonimos.de",145],["quesignifi.ca",145],["tiktokrealtime.com",145],["tiktokcounter.net",145],["tpayr.xyz",145],["poqzn.xyz",145],["ashrfd.xyz",145],["rezsx.xyz",145],["tryzt.xyz",145],["ashrff.xyz",145],["rezst.xyz",145],["dawenet.com",145],["erzar.xyz",145],["waezm.xyz",145],["waezg.xyz",145],["blackwoodacademy.org",145],["cryptednews.space",145],["vivuq.com",145],["swgop.com",145],["vbnmll.com",145],["telcoinfo.online",145],["dshytb.com",145],["link.vipurl.in",146],["nanolinks.in",146],["adrinolinks.com",146],["fadedfeet.com",147],["homeculina.com",147],["ineedskin.com",147],["kenzo-flowertag.com",147],["lawyex.co",147],["mdn.lol",147],["bitzite.com",148],["coingraph.us",149],["impact24.us",149],["www.apkmoddone.com",150],["sitemini.io.vn",151],["vip1s.top",151],["dl.apkmoddone.com",152],["phongroblox.com",152],["financacerta.com",153],["encurtads.net",153],["shortencash.click",154],["lablue.*",155],["4-liga.com",156],["4fansites.de",156],["4players.de",156],["9monate.de",156],["aachener-nachrichten.de",156],["aachener-zeitung.de",156],["abendblatt.de",156],["abendzeitung-muenchen.de",156],["about-drinks.com",156],["abseits-ka.de",156],["airliners.de",156],["ajaxshowtime.com",156],["allgemeine-zeitung.de",156],["alpin.de",156],["antenne.de",156],["arcor.de",156],["areadvd.de",156],["areamobile.de",156],["ariva.de",156],["astronews.com",156],["aussenwirtschaftslupe.de",156],["auszeit.bio",156],["auto-motor-und-sport.de",156],["auto-service.de",156],["autobild.de",156],["autoextrem.de",156],["autopixx.de",156],["autorevue.at",156],["autotrader.nl",156],["az-online.de",156],["baby-vornamen.de",156],["babyclub.de",156],["bafoeg-aktuell.de",156],["berliner-kurier.de",156],["berliner-zeitung.de",156],["bigfm.de",156],["bikerszene.de",156],["bildderfrau.de",156],["blackd.de",156],["blick.de",156],["boerse-online.de",156],["boerse.de",156],["boersennews.de",156],["braunschweiger-zeitung.de",156],["brieffreunde.de",156],["brigitte.de",156],["buerstaedter-zeitung.de",156],["buffed.de",156],["businessinsider.de",156],["buzzfeed.at",156],["buzzfeed.de",156],["caravaning.de",156],["cavallo.de",156],["chefkoch.de",156],["cinema.de",156],["clever-tanken.de",156],["computerbild.de",156],["computerhilfen.de",156],["comunio-cl.com",156],["comunio.*",156],["connect.de",156],["chip.de",156],["da-imnetz.de",156],["dasgelbeblatt.de",156],["dbna.com",156],["dbna.de",156],["deichstube.de",156],["deine-tierwelt.de",156],["der-betze-brennt.de",156],["derwesten.de",156],["desired.de",156],["dhd24.com",156],["dieblaue24.com",156],["digitalfernsehen.de",156],["dnn.de",156],["donnerwetter.de",156],["e-hausaufgaben.de",156],["e-mountainbike.com",156],["eatsmarter.de",156],["echo-online.de",156],["ecomento.de",156],["einfachschoen.me",156],["elektrobike-online.com",156],["eltern.de",156],["epochtimes.de",156],["essen-und-trinken.de",156],["express.de",156],["extratipp.com",156],["familie.de",156],["fanfiktion.de",156],["fehmarn24.de",156],["fettspielen.de",156],["fid-gesundheitswissen.de",156],["finanzen.*",156],["finanznachrichten.de",156],["finanztreff.de",156],["finya.de",156],["firmenwissen.de",156],["fitforfun.de",156],["fnp.de",156],["football365.fr",156],["formel1.de",156],["fr.de",156],["frankfurter-wochenblatt.de",156],["freenet.de",156],["fremdwort.de",156],["froheweihnachten.info",156],["frustfrei-lernen.de",156],["fuldaerzeitung.de",156],["funandnews.de",156],["fussballdaten.de",156],["futurezone.de",156],["gala.de",156],["gamepro.de",156],["gamersglobal.de",156],["gamesaktuell.de",156],["gamestar.de",156],["gameswelt.*",156],["gamezone.de",156],["gartendialog.de",156],["gartenlexikon.de",156],["gedichte.ws",156],["geissblog.koeln",156],["gelnhaeuser-tageblatt.de",156],["general-anzeiger-bonn.de",156],["geniale-tricks.com",156],["genialetricks.de",156],["gesund-vital.de",156],["gesundheit.de",156],["gevestor.de",156],["gewinnspiele.tv",156],["giessener-allgemeine.de",156],["giessener-anzeiger.de",156],["gifhorner-rundschau.de",156],["giga.de",156],["gipfelbuch.ch",156],["gmuender-tagespost.de",156],["gruenderlexikon.de",156],["gusto.at",156],["gut-erklaert.de",156],["gutfuerdich.co",156],["hallo-muenchen.de",156],["hamburg.de",156],["hanauer.de",156],["hardwareluxx.de",156],["hartziv.org",156],["harzkurier.de",156],["haus-garten-test.de",156],["hausgarten.net",156],["haustec.de",156],["haz.de",156],["heftig.*",156],["heidelberg24.de",156],["heilpraxisnet.de",156],["heise.de",156],["helmstedter-nachrichten.de",156],["hersfelder-zeitung.de",156],["hftg.co",156],["hifi-forum.de",156],["hna.de",156],["hochheimer-zeitung.de",156],["hoerzu.de",156],["hofheimer-zeitung.de",156],["iban-rechner.de",156],["ikz-online.de",156],["immobilienscout24.de",156],["ingame.de",156],["inside-digital.de",156],["inside-handy.de",156],["investor-verlag.de",156],["jappy.com",156],["jpgames.de",156],["kabeleins.de",156],["kachelmannwetter.com",156],["kamelle.de",156],["kicker.de",156],["kindergeld.org",156],["klettern-magazin.de",156],["klettern.de",156],["kochbar.de",156],["kreis-anzeiger.de",156],["kreisbote.de",156],["kreiszeitung.de",156],["ksta.de",156],["kurierverlag.de",156],["lachainemeteo.com",156],["lampertheimer-zeitung.de",156],["landwirt.com",156],["laut.de",156],["lauterbacher-anzeiger.de",156],["leckerschmecker.me",156],["leinetal24.de",156],["lesfoodies.com",156],["levif.be",156],["lifeline.de",156],["liga3-online.de",156],["likemag.com",156],["linux-community.de",156],["linux-magazin.de",156],["live.vodafone.de",156],["ln-online.de",156],["lokalo24.de",156],["lustaufsleben.at",156],["lustich.de",156],["lvz.de",156],["lz.de",156],["mactechnews.de",156],["macwelt.de",156],["macworld.co.uk",156],["mail.de",156],["main-spitze.de",156],["manager-magazin.de",156],["manga-tube.me",156],["mathebibel.de",156],["mathepower.com",156],["maz-online.de",156],["medisite.fr",156],["mehr-tanken.de",156],["mein-kummerkasten.de",156],["mein-mmo.de",156],["mein-wahres-ich.de",156],["meine-anzeigenzeitung.de",156],["meinestadt.de",156],["menshealth.de",156],["mercato365.com",156],["merkur.de",156],["messen.de",156],["metal-hammer.de",156],["metalflirt.de",156],["meteologix.com",156],["minecraft-serverlist.net",156],["mittelbayerische.de",156],["modhoster.de",156],["moin.de",156],["mopo.de",156],["morgenpost.de",156],["motor-talk.de",156],["motorbasar.de",156],["motorradonline.de",156],["motorsport-total.com",156],["motortests.de",156],["mountainbike-magazin.de",156],["moviejones.de",156],["moviepilot.de",156],["mt.de",156],["mtb-news.de",156],["musiker-board.de",156],["musikexpress.de",156],["musikradar.de",156],["mz-web.de",156],["n-tv.de",156],["naumburger-tageblatt.de",156],["netzwelt.de",156],["neuepresse.de",156],["neueroeffnung.info",156],["news.at",156],["news.de",156],["news38.de",156],["newsbreak24.de",156],["nickles.de",156],["nicknight.de",156],["nl.hardware.info",156],["nn.de",156],["nnn.de",156],["nordbayern.de",156],["notebookchat.com",156],["notebookcheck-ru.com",156],["notebookcheck-tr.com",156],["notebookcheck.*",156],["noz-cdn.de",156],["noz.de",156],["nrz.de",156],["nw.de",156],["nwzonline.de",156],["oberhessische-zeitung.de",156],["och.to",156],["oeffentlicher-dienst.info",156],["onlinekosten.de",156],["onvista.de",156],["op-marburg.de",156],["op-online.de",156],["outdoor-magazin.com",156],["outdoorchannel.de",156],["paradisi.de",156],["pc-magazin.de",156],["pcgames.de",156],["pcgameshardware.de",156],["pcwelt.de",156],["pcworld.es",156],["peiner-nachrichten.de",156],["pferde.de",156],["pietsmiet.de",156],["pixelio.de",156],["pkw-forum.de",156],["playboy.de",156],["playfront.de",156],["pnn.de",156],["pons.com",156],["prignitzer.de",156],["profil.at",156],["promipool.de",156],["promobil.de",156],["prosiebenmaxx.de",156],["psychic.de",[156,172]],["quoka.de",156],["radio.at",156],["radio.de",156],["radio.dk",156],["radio.es",156],["radio.fr",156],["radio.it",156],["radio.net",156],["radio.pl",156],["radio.pt",156],["radio.se",156],["ran.de",156],["readmore.de",156],["rechtslupe.de",156],["recording.de",156],["rennrad-news.de",156],["reuters.com",156],["reviersport.de",156],["rhein-main-presse.de",156],["rheinische-anzeigenblaetter.de",156],["rimondo.com",156],["roadbike.de",156],["roemische-zahlen.net",156],["rollingstone.de",156],["rot-blau.com",156],["rp-online.de",156],["rtl.de",[156,249]],["rtv.de",156],["rugby365.fr",156],["ruhr24.de",156],["rundschau-online.de",156],["runnersworld.de",156],["safelist.eu",156],["salzgitter-zeitung.de",156],["sat1.de",156],["sat1gold.de",156],["schoener-wohnen.de",156],["schwaebische-post.de",156],["schwarzwaelder-bote.de",156],["serienjunkies.de",156],["shz.de",156],["sixx.de",156],["skodacommunity.de",156],["smart-wohnen.net",156],["sn.at",156],["sozialversicherung-kompetent.de",156],["spiegel.de",156],["spielen.de",156],["spieletipps.de",156],["spielfilm.de",156],["sport.de",156],["sport1.de",156],["sport365.fr",156],["sportal.de",156],["spox.com",156],["stern.de",156],["stuttgarter-nachrichten.de",156],["stuttgarter-zeitung.de",156],["sueddeutsche.de",156],["svz.de",156],["szene1.at",156],["szene38.de",156],["t-online.de",156],["tagesspiegel.de",156],["taschenhirn.de",156],["techadvisor.co.uk",156],["techstage.de",156],["tele5.de",156],["teltarif.de",156],["testedich.*",156],["the-voice-of-germany.de",156],["thueringen24.de",156],["tichyseinblick.de",156],["tierfreund.co",156],["tiervermittlung.de",156],["torgranate.de",156],["transfermarkt.*",156],["trend.at",156],["truckscout24.*",156],["tv-media.at",156],["tvdigital.de",156],["tvinfo.de",156],["tvspielfilm.de",156],["tvtoday.de",156],["tvtv.*",156],["tz.de",[156,170]],["unicum.de",156],["unnuetzes.com",156],["unsere-helden.com",156],["unterhalt.net",156],["usinger-anzeiger.de",156],["usp-forum.de",156],["videogameszone.de",156],["vienna.at",156],["vip.de",156],["virtualnights.com",156],["vox.de",156],["wa.de",156],["wallstreet-online.de",[156,159]],["waz.de",156],["weather.us",156],["webfail.com",156],["weihnachten.me",156],["weihnachts-bilder.org",156],["weihnachts-filme.com",156],["welt.de",156],["weltfussball.at",156],["weristdeinfreund.de",156],["werkzeug-news.de",156],["werra-rundschau.de",156],["wetterauer-zeitung.de",156],["wetteronline.*",156],["wieistmeineip.*",156],["wiesbadener-kurier.de",156],["wiesbadener-tagblatt.de",156],["winboard.org",156],["windows-7-forum.net",156],["winfuture.de",[156,166]],["wintotal.de",156],["wlz-online.de",156],["wn.de",156],["wohngeld.org",156],["wolfenbuetteler-zeitung.de",156],["wolfsburger-nachrichten.de",156],["woman.at",156],["womenshealth.de",156],["wormser-zeitung.de",156],["woxikon.de",156],["wp.de",156],["wr.de",156],["wunderweib.de",156],["yachtrevue.at",156],["ze.tt",156],["zeit.de",156],["meineorte.com",157],["osthessen-news.de",157],["techadvisor.com",157],["focus.de",157],["wetter.*",158],["deinesexfilme.com",160],["einfachtitten.com",160],["lesbenhd.com",160],["milffabrik.com",[160,219]],["porn-monkey.com",160],["porndrake.com",160],["pornhubdeutsch.net",160],["pornoaffe.com",160],["pornodavid.com",160],["pornoente.tv",[160,219]],["pornofisch.com",160],["pornofelix.com",160],["pornohammer.com",160],["pornohelm.com",160],["pornoklinge.com",160],["pornotom.com",[160,219]],["pornotommy.com",160],["pornovideos-hd.com",160],["pornozebra.com",[160,219]],["xhamsterdeutsch.xyz",160],["xnxx-sexfilme.com",160],["nu6i-bg-net.com",162],["khsm.io",162],["webcreator-journal.com",162],["msdos-games.com",162],["blocklayer.com",162],["weknowconquer.com",162],["giff.cloud",162],["aquarius-horoscopes.com",163],["cancer-horoscopes.com",163],["dubipc.blogspot.com",163],["echoes.gr",163],["engel-horoskop.de",163],["freegames44.com",163],["fuerzasarmadas.eu",163],["gemini-horoscopes.com",163],["jurukunci.net",163],["krebs-horoskop.com",163],["leo-horoscopes.com",163],["maliekrani.com",163],["nklinks.click",163],["ourenseando.es",163],["pisces-horoscopes.com",163],["radio-en-direct.fr",163],["sagittarius-horoscopes.com",163],["scorpio-horoscopes.com",163],["singlehoroskop-loewe.de",163],["skat-karten.de",163],["skorpion-horoskop.com",163],["taurus-horoscopes.com",163],["the1security.com",163],["virgo-horoscopes.com",163],["zonamarela.blogspot.com",163],["yoima.hatenadiary.com",163],["kaystls.site",164],["ftuapps.dev",165],["studydhaba.com",165],["freecourse.tech",165],["victor-mochere.com",165],["papunika.com",165],["mobilanyheter.net",165],["prajwaldesai.com",[165,238]],["carscoops.com",166],["dziennik.pl",166],["eurointegration.com.ua",166],["flatpanelshd.com",166],["footballtransfer.com.ua",166],["footballtransfer.ru",166],["hoyme.jp",166],["issuya.com",166],["itainews.com",166],["iusm.co.kr",166],["logicieleducatif.fr",166],["mynet.com",[166,187]],["onlinegdb.com",166],["picrew.me",166],["pravda.com.ua",166],["reportera.co.kr",166],["sportanalytic.com",166],["sportsrec.com",166],["sportsseoul.com",166],["text-compare.com",166],["tweaksforgeeks.com",166],["wfmz.com",166],["worldhistory.org",166],["palabr.as",166],["motscroises.fr",166],["cruciverba.it",166],["w.grapps.me",166],["gazetaprawna.pl",166],["pressian.com",166],["raenonx.cc",[166,265]],["indiatimes.com",166],["missyusa.com",166],["aikatu.jp",166],["ark-unity.com",166],["cool-style.com.tw",166],["doanhnghiepvn.vn",166],["mykhel.com",166],["automobile-catalog.com",167],["motorbikecatalog.com",167],["maketecheasier.com",167],["mlbpark.donga.com",168],["jjang0u.com",169],["download.kingtecnologia.com",171],["forumdz.com",172],["abandonmail.com",172],["flmods.com",172],["zilinak.sk",172],["hotdesimms.com",172],["pdfaid.com",172],["bootdey.com",172],["mail.com",172],["expresskaszubski.pl",172],["moegirl.org.cn",172],["flix-wave.lol",172],["fmovies0.cc",172],["worthcrete.com",172],["my-code4you.blogspot.com",173],["vrcmods.com",174],["osuskinner.com",174],["osuskins.net",174],["pentruea.com",175],["mchacks.net",176],["why-tech.it",177],["compsmag.com",178],["tapetus.pl",179],["autoroad.cz",180],["brawlhalla.fr",180],["tecnobillo.com",180],["pokemon-project.com",180],["sexcamfreeporn.com",181],["breatheheavy.com",182],["wenxuecity.com",183],["key-hub.eu",184],["fabioambrosi.it",185],["tattle.life",186],["emuenzen.de",186],["terrylove.com",186],["cidade.iol.pt",188],["fantacalcio.it",189],["hentaifreak.org",190],["hypebeast.com",191],["krankheiten-simulieren.de",192],["catholic.com",193],["techinferno.com",194],["ibeconomist.com",195],["bookriot.com",196],["purposegames.com",197],["globo.com",198],["latimes.com",198],["claimrbx.gg",199],["perelki.net",200],["vpn-anbieter-vergleich-test.de",201],["livingincebuforums.com",202],["paperzonevn.com",203],["alltechnerd.com",204],["malaysianwireless.com",205],["erinsakura.com",206],["infofuge.com",206],["freejav.guru",206],["novelmultiverse.com",206],["fritidsmarkedet.dk",207],["maskinbladet.dk",207],["15min.lt",208],["baddiehub.com",209],["mr9soft.com",210],["21porno.com",211],["adult-sex-gamess.com",212],["hentaigames.app",212],["mobilesexgamesx.com",212],["mysexgamer.com",212],["porngameshd.com",212],["sexgamescc.com",212],["xnxx-sex-videos.com",212],["f2movies.to",213],["freeporncave.com",214],["tubsxxx.com",215],["manga18fx.com",216],["freebnbcoin.com",216],["sextvx.com",217],["muztext.com",218],["pornohans.com",219],["nursexfilme.com",219],["pornohirsch.net",219],["xhamster-sexvideos.com",219],["pornoschlange.com",219],["xhamsterdeutsch.*",219],["hdpornos.net",219],["gutesexfilme.com",219],["zona-leros.com",219],["charbelnemnom.com",220],["simplebits.io",221],["online-fix.me",222],["privatemoviez.*",223],["gamersdiscussionhub.com",223],["elahmad.com",224],["owlzo.com",225],["q1003.com",226],["blogpascher.com",227],["testserver.pro",228],["lifestyle.bg",228],["money.bg",228],["news.bg",228],["topsport.bg",228],["webcafe.bg",228],["schoolcheats.net",229],["mgnet.xyz",230],["advertiserandtimes.co.uk",231],["111.90.159.132",232],["techsolveprac.com",233],["joomlabeginner.com",234],["askpaccosi.com",235],["largescaleforums.com",236],["dubznetwork.com",237],["dongknows.com",239],["traderepublic.community",240],["babia.to",241],["html5.gamemonetize.co",242],["code2care.org",243],["gmx.*",244],["yts-subs.net",245],["dlhd.sx",245],["xxxxsx.com",246],["ngontinh24.com",247],["idevicecentral.com",248],["mangacrab.com",250],["hortonanderfarom.blogspot.com",251],["viefaucet.com",252],["pourcesoir.in",252],["cloud-computing-central.com",253],["afk.guide",254],["businessnamegenerator.com",255],["derstandard.at",256],["derstandard.de",256],["rocketnews24.com",257],["soranews24.com",257],["youpouch.com",257],["gourmetscans.net",258],["ilsole24ore.com",259],["ipacrack.com",260],["infokik.com",261],["porhubvideo.com",263],["webseriessex.com",263],["panuvideo.com",263],["pornktubes.net",263],["daemonanime.net",264],["bgmateriali.com",264],["deezer.com",265],["fosslinux.com",266],["shrdsk.me",267],["examword.com",268],["sempreupdate.com.br",268],["tribuna.com",269],["trendsderzukunft.de",270],["gal-dem.com",270],["lostineu.eu",270],["oggitreviso.it",270],["speisekarte.de",270],["mixed.de",270],["lightnovelspot.com",[271,272]],["novelpub.com",[271,272]],["webnovelpub.com",[271,272]],["hwzone.co.il",274],["nammakalvi.com",275],["igay69.com",275],["c2g.at",276],["terafly.me",276],["elamigos-games.com",276],["elamigos-games.net",276],["elamigosgames.org",276],["dktechnicalmate.com",277],["recipahi.com",277],["vpntester.org",278],["japscan.lol",279],["digitask.ru",280],["tempumail.com",281],["sexvideos.host",282],["camcaps.*",283],["10alert.com",284],["cryptstream.de",285],["nydus.org",285],["techhelpbd.com",286],["fapdrop.com",287],["cellmapper.net",288],["hdrez.com",289],["youwatch-serie.com",289],["russland.jetzt",289],["printablecreative.com",290],["peachprintable.com",290],["comohoy.com",291],["leak.sx",291],["paste.bin.sx",291],["pornleaks.in",291],["merlininkazani.com",291],["j91.asia",292],["rekidai-info.github.io",293],["jeniusplay.com",294],["indianyug.com",295],["rgb.vn",295],["needrom.com",296],["criptologico.com",297],["megadrive-emulator.com",298],["eromanga-show.com",299],["hentai-one.com",299],["hentaipaw.com",299],["10minuteemails.com",300],["luxusmail.org",300],["w3cub.com",301],["bangpremier.com",302],["nyaa.iss.ink",303],["drivebot.*",304],["thenextplanet1.*",305],["tnp98.xyz",305],["client.falixnodes.net",[306,307]],["techedubyte.com",308],["tickzoo.tv",309],["oploverz.*",309],["memedroid.com",310],["karaoketexty.cz",311],["filmizlehdfilm.com",312],["filmizletv.*",312],["fullfilmizle.cc",312],["gofilmizle.net",312],["resortcams.com",313],["cheatography.com",313],["sonixgvn.net",314],["autoscout24.*",315],["mjakmama24.pl",316],["cheatermad.com",317],["work.ink",318],["ville-ideale.fr",319],["brainly.*",320],["eodev.com",320],["xfreehd.com",321],["freethesaurus.com",322],["thefreedictionary.com",322],["fm-arena.com",323],["tradersunion.com",324],["tandess.com",325],["allosurf.net",325],["spontacts.com",326],["dankmemer.lol",327],["getexploits.com",328],["fplstatistics.com",329],["breitbart.com",330],["salidzini.lv",331],["cryptorank.io",[332,333]],["4kwebplay.xyz",334],["qqwebplay.xyz",334],["molbiotools.com",335],["vods.tv",336],["18xxx.xyz",337],["raidrush.net",338],["xnxxcom.xyz",339],["videzz.net",340],["spambox.xyz",341],["dreamdth.com",342],["freemodsapp.in",342],["onlytech.com",342],["player.jeansaispasplus.homes",343],["en-thunderscans.com",344],["infinityscans.xyz",345],["infinityscans.net",345],["infinityscans.org",345],["iqksisgw.xyz",346],["caroloportunidades.com.br",347],["coempregos.com.br",347],["foodiesgallery.com",347],["vikatan.com",348],["camhub.world",349],["mma-core.*",350],["pouvideo.*",351],["povvideo.*",351],["povw1deo.*",351],["povwideo.*",351],["powv1deo.*",351],["powvibeo.*",351],["powvideo.*",351],["powvldeo.*",351],["teracourses.com",352],["servustv.com",353],["freevipservers.net",354],["streambtw.com",355],["qrcodemonkey.net",356],["streamup.ws",357],["tv-films.co.uk",358],["cool--web-de.translate.goog",[359,360]],["gps--cache-de.translate.goog",[359,360]],["web--spiele-de.translate.goog",[359,360]],["fun--seiten-de.translate.goog",[359,360]],["photo--alben-de.translate.goog",[359,360]],["wetter--vorhersage-de.translate.goog",[359,360]],["coolsoftware-de.translate.goog",[359,360]],["kryptografie-de.translate.goog",[359,360]],["cool--domains-de.translate.goog",[359,360]],["net--tours-de.translate.goog",[359,360]],["such--maschine-de.translate.goog",[359,360]],["qul-de.translate.goog",[359,360]],["mailtool-de.translate.goog",[359,360]],["c--ix-de.translate.goog",[359,360]],["softwareengineer-de.translate.goog",[359,360]],["net--tools-de.translate.goog",[359,360]],["hilfen-de.translate.goog",[359,360]],["45er-de.translate.goog",[359,360]],["cooldns-de.translate.goog",[359,360]],["hardware--entwicklung-de.translate.goog",[359,360]],["bgsi.gg",361],["friv.com",362],["tdtnews.com",363],["santafenewmexican.com",363],["sextb.*>>",364],["nepalieducate.com",365],["freegames.com",367]]);
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
