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
const argsList = [["=document[_0x"],["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["documentElement.innerHTML"],["alert","2000"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["offsetHeight"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["mfp"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["/adObj|amzn_aps_csm|please-disable|function reportErrors/"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["Ad","5000"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],[".adv-"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["","10000-15000"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["determineVisibility"],["TNCMS.DMP"]];
const hostnamesMap = new Map([["japscan.lol",[0,280]],["poophq.com",1],["veev.to",1],["dogdrip.net",2],["infinityfree.com",2],["smsonline.cloud",[2,3]],["faqwiki.us",4],["mail.yahoo.com",[5,274]],["maxcheaters.com",5],["postimees.ee",5],["police.community",5],["gisarea.com",5],["schaken-mods.com",5],["tvnet.lv",5],["theclashify.com",5],["txori.com",5],["olarila.com",5],["deletedspeedstreams.blogspot.com",5],["schooltravelorganiser.com",5],["xhardhempus.net",5],["mhn.quest",5],["leagueofgraphs.com",5],["hieunguyenphoto.com",5],["benzinpreis.de",5],["lastampa.it",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["eztv.*",7],["bluedrake42.com",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["betaseries.com",7],["free-sms-receive.com",7],["sms-receive-online.com",7],["computer76.ru",7],["golem.de",[8,9,157]],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["tinhocdongthap.com",9],["downloadr.in",9],["topcomicporno.com",9],["sushi-scan.*",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["seriesperu.com",9],["spigotunlocked.*",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,263]],["topsporter.net",[9,263]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["ahmedmode.*",9],["mobilkulup.com",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["starleaks.org",9],["forum-xiaomi.com",9],["mediafire.com",10],["wcoanimedub.tv",11],["wcoforever.net",11],["openspeedtest.com",11],["addtobucketlist.com",11],["3dzip.org",[11,67]],["ilmeteo.it",11],["wcoforever.com",11],["comprovendolibri.it",11],["healthelia.com",11],["yts.*",12],["720pstream.*",12],["1stream.*",12],["tutele.sx",12],["seattletimes.com",13],["bestgames.com",14],["yiv.com",14],["globalrph.com",15],["e-glossa.it",16],["webcheats.com.br",17],["urlcero.*",18],["gala.fr",19],["gentside.com",19],["geo.fr",19],["hbrfrance.fr",19],["nationalgeographic.fr",19],["ohmymag.com",19],["serengo.net",19],["vsd.fr",19],["short.pe",20],["thefmovies.*",20],["footystreams.net",20],["katestube.com",20],["updato.com",[21,36]],["totaldebrid.*",22],["sandrives.*",22],["daizurin.com",22],["pendekarsubs.us",22],["dreamfancy.org",22],["rysafe.blogspot.com",22],["techacode.com",22],["toppng.com",22],["th-world.com",22],["avjamack.com",22],["avjamak.net",22],["cnnamador.com",23],["nudecelebforum.com",24],["pronpic.org",25],["thewebflash.com",26],["discordfastfood.com",26],["xup.in",26],["popularmechanics.com",27],["op.gg",28],["comunidadgzone.es",29],["fxporn69.*",29],["mp3fy.com",29],["lebensmittelpraxis.de",29],["aliancapes.*",29],["forum-pokemon-go.fr",29],["praxis-jugendarbeit.de",29],["dictionnaire-medical.net",29],["cle0desktop.blogspot.com",29],["up-load.io",29],["keysbrasil.blogspot.com",29],["hotpress.info",29],["turkleech.com",29],["anibatch.me",29],["anime-i.com",29],["gewinde-normen.de",29],["tucinehd.com",29],["kdramasmaza.com.pk",29],["jellynote.com",30],["pouvideo.*",31],["povvideo.*",31],["povw1deo.*",31],["povwideo.*",31],["powv1deo.*",31],["powvibeo.*",31],["powvideo.*",31],["powvldeo.*",31],["eporner.com",32],["pornbimbo.com",33],["4j.com",33],["avoiderrors.com",34],["sitarchive.com",34],["livenewsof.com",34],["topnewsshow.com",34],["gatcha.org",34],["kusonime.com",34],["suicidepics.com",34],["codesnail.com",34],["codingshiksha.com",34],["graphicux.com",34],["citychilli.com",34],["talkjarvis.com",34],["hdmotori.it",35],["tubsexer.*",37],["femdomtb.com",37],["porno-tour.*",37],["lenkino.*",37],["bobs-tube.com",37],["pornfd.com",37],["pornomoll.*",37],["camsclips.*",37],["popno-tour.net",37],["watchmdh.to",37],["camwhores.tv",37],["camhub.cc",37],["elfqrin.com",38],["satcesc.com",39],["apfelpatient.de",39],["lusthero.com",40],["m4ufree.*",41],["m2list.com",41],["embed.nana2play.com",41],["dallasnews.com",42],["lnk.news",43],["lnk.parts",43],["efukt.com",44],["wendycode.com",44],["springfieldspringfield.co.uk",45],["porndoe.com",46],["smsget.net",[47,48]],["kjanime.net",49],["gioialive.it",50],["classicreload.com",51],["scriptzhub.com",51],["hotpornfile.org",52],["coolsoft.altervista.org",52],["hackedonlinegames.com",52],["dailytech-news.eu",52],["settlersonlinemaps.com",52],["ad-doge.com",52],["magdownload.org",52],["kpkuang.org",52],["crypto4yu.com",52],["faucetwork.space",52],["writedroid.*",52],["thenightwithoutthedawn.blogspot.com",52],["entutes.com",52],["claimlite.club",52],["newscon.org",52],["rl6mans.com",52],["chicoer.com",53],["bostonherald.com",53],["dailycamera.com",53],["sportsplays.com",54],["ebookdz.com",55],["telerium.*",56],["pornvideotop.com",57],["krotkoosporcie.pl",57],["xstory-fr.com",57],["1337x.*",57],["x1337x.*",57],["1337x.ninjaproxy1.com",57],["ytapi.cc",57],["letribunaldunet.fr",58],["vladan.fr",58],["live-tv-channels.org",59],["eslfast.com",60],["ge-map-overlays.appspot.com",61],["mad4wheels.com",61],["1xanimes.in",61],["logi.im",61],["emailnator.com",61],["appnee.com",61],["freegamescasual.com",62],["tcpvpn.com",63],["oko.sh",63],["timesnownews.com",63],["timesnowhindi.com",63],["timesnowmarathi.com",63],["zoomtventertainment.com",63],["tsubasa.im",64],["sholah.net",65],["2rdroid.com",65],["bisceglielive.it",66],["pandajogosgratis.com.br",68],["5278.cc",69],["pandafreegames.*",70],["tonspion.de",71],["duplichecker.com",72],["plagiarismchecker.co",72],["plagiarismdetector.net",72],["searchenginereports.net",72],["smallseotools.com",73],["linkspaid.com",74],["proxydocker.com",74],["beeimg.com",[75,76]],["emturbovid.com",76],["findjav.com",76],["javggvideo.xyz",76],["mmtv01.xyz",76],["stbturbo.xyz",76],["viralharami.com",76],["ftlauderdalebeachcam.com",77],["ftlauderdalewebcam.com",77],["juneauharborwebcam.com",77],["keywestharborwebcam.com",77],["kittycatcam.com",77],["mahobeachcam.com",77],["miamiairportcam.com",77],["morganhillwebcam.com",77],["njwildlifecam.com",77],["nyharborwebcam.com",77],["paradiseislandcam.com",77],["pompanobeachcam.com",77],["portbermudawebcam.com",77],["portcanaveralwebcam.com",77],["portevergladeswebcam.com",77],["portmiamiwebcam.com",77],["portnywebcam.com",77],["portnassauwebcam.com",77],["portstmaartenwebcam.com",77],["portstthomaswebcam.com",77],["porttampawebcam.com",77],["sxmislandcam.com",77],["themes-dl.com",77],["badassdownloader.com",77],["badasshardcore.com",77],["badassoftcore.com",77],["nulljungle.com",77],["teevee.asia",77],["otakukan.com",77],["thoptv.*",78],["gearingcommander.com",79],["generate.plus",80],["calculate.plus",80],["avcesar.com",81],["audiotag.info",82],["tudigitale.it",83],["ibcomputing.com",84],["legia.net",85],["acapellas4u.co.uk",86],["robloxscripts.com",87],["libreriamo.it",87],["postazap.com",87],["filmyzones.com",87],["medebooks.xyz",87],["mashtips.com",87],["marriedgames.com.br",87],["4allprograms.me",87],["shortzzy.*",87],["nurgsm.com",87],["certbyte.com",87],["plugincrack.com",87],["gamingdeputy.com",87],["freewebcart.com",87],["gamekult.com",88],["streamhentaimovies.com",89],["konten.co.id",90],["diariodenavarra.es",91],["scripai.com",91],["myfxbook.com",91],["whatfontis.com",91],["tubereader.me",91],["optifine.net",92],["luzernerzeitung.ch",93],["tagblatt.ch",93],["ableitungsrechner.net",94],["alternet.org",95],["gourmetsupremacy.com",95],["shrib.com",96],["streameast.*",97],["thestreameast.*",97],["techclips.net",97],["daddylivehd.*",97],["footyhunter.lol",97],["poscitech.click",97],["wecast.to",97],["sportbar.live",97],["freecourseweb.com",98],["devcourseweb.com",98],["coursewikia.com",98],["courseboat.com",98],["pornhub.*",99],["lne.es",100],["pornult.com",101],["webcamsdolls.com",101],["bitcotasks.com",[101,143]],["adsy.pw",101],["playstore.pw",101],["exactpay.online",101],["thothd.to",101],["proplanta.de",102],["textograto.com",103],["voyageforum.com",104],["hmc-id.blogspot.com",104],["myabandonware.com",104],["wcofun.*",104],["ilforumdeibrutti.is",104],["prad.de",[105,157]],["chatta.it",106],["ketubanjiwa.com",107],["nsfw247.to",108],["funzen.net",108],["ilclubdellericette.it",108],["bollyholic.*",108],["extremereportbot.com",109],["getintopc.com",110],["qoshe.com",111],["lowellsun.com",112],["mamadu.pl",112],["dobrapogoda24.pl",112],["motohigh.pl",112],["namasce.pl",112],["ultimate-catch.eu",113],["cpopchanelofficial.com",114],["creditcardgenerator.com",115],["creditcardrush.com",115],["bostoncommons.net",115],["thejobsmovie.com",115],["hl-live.de",116],["satoshi-win.xyz",116],["encurtandourl.com",[116,120]],["www-daftarharga.blogspot.com",116],["ear-phone-review.com",116],["telefullenvivo.com",116],["listatv.pl",116],["daemon-hentai.com",[116,265]],["coin-profits.xyz",116],["relampagomovies.com",116],["wohnmobilforum.de",116],["nulledbear.com",116],["sinnerclownceviri.net",116],["nilopolisonline.com.br",117],["mesquitaonline.com",117],["yellowbridge.com",117],["yaoiotaku.com",118],["moneyhouse.ch",119],["ihow.info",120],["filesus.com",120],["gotxx.*",120],["sturls.com",120],["turbo1.co",120],["hartico.tv",120],["cupra.forum",120],["turkanime.*",121],["valeronevijao.com",121],["yodelswartlike.com",121],["generatesnitrosate.com",121],["gamoneinterrupted.com",121],["metagnathtuggers.com",121],["wolfdyslectic.com",121],["rationalityaloelike.com",121],["sizyreelingly.com",121],["urochsunloath.com",121],["monorhinouscassaba.com",121],["35volitantplimsoles5.com",121],["antecoxalbobbing1010.com",121],["boonlessbestselling244.com",121],["cyamidpulverulence530.com",121],["guidon40hyporadius9.com",121],["449unceremoniousnasoseptal.com",121],["30sensualizeexpression.com",121],["greaseball6eventual20.com",121],["toxitabellaeatrebates306.com",121],["20demidistance9elongations.com",121],["audaciousdefaulthouse.com",121],["fittingcentermondaysunday.com",121],["launchreliantcleaverriver.com",121],["matriculant401merited.com",121],["realfinanceblogcenter.com",121],["telyn610zoanthropy.com",121],["un-block-voe.net",121],["v-o-e-unblock.com",121],["voe-un-block.com",121],["voe-unblock.*",121],["voeun-block.net",121],["voeunbl0ck.com",121],["voeunblck.com",121],["voeunblk.com",121],["voeunblock.com",121],["voeunblock2.com",121],["voeunblock3.com",121],["agefi.fr",122],["cariskuy.com",123],["letras2.com",123],["yusepjaelani.blogspot.com",124],["letras.mus.br",125],["eletronicabr.com",126],["mtlurb.com",127],["onemanhua.com",128],["laksa19.github.io",129],["javcl.com",129],["tvlogy.to",129],["rp5.*",129],["live.dragaoconnect.net",129],["seznamzpravy.cz",129],["xerifetech.com",129],["freemcserver.net",129],["t3n.de",130],["allindiaroundup.com",131],["tapchipi.com",132],["dcleakers.com",132],["esgeeks.com",132],["pugliain.net",132],["uplod.net",132],["worldfreeware.com",132],["tech-blogs.com",132],["cardiagn.com",132],["fikiri.net",132],["myhackingworld.com",132],["phoenixfansub.com",132],["vectorizer.io",133],["onehack.us",133],["smgplaza.com",133],["thapcam.net",133],["breznikar.com",133],["thefastlaneforum.com",134],["5flix.top",135],["bembed.net",135],["embedv.net",135],["javguard.club",135],["listeamed.net",135],["v6embed.xyz",135],["vembed.*",135],["vid-guard.com",135],["vidguardto.xyz",135],["yesmovies.*>>",135],["pistona.xyz",135],["vinomo.xyz",135],["moflix-stream.*",[135,162]],["trade2win.com",136],["modagamers.com",137],["khatrimaza.*",137],["freemagazines.top",137],["pogolinks.*",137],["straatosphere.com",137],["nullpk.com",137],["adslink.pw",137],["downloadudemy.com",137],["picgiraffe.com",137],["weadown.com",137],["freepornsex.net",137],["nurparatodos.com.ar",137],["popcornstream.*",138],["routech.ro",138],["hokej.net",138],["turkmmo.com",139],["acdriftingpro.com",140],["palermotoday.it",141],["baritoday.it",141],["trentotoday.it",141],["agrigentonotizie.it",141],["anconatoday.it",141],["arezzonotizie.it",141],["avellinotoday.it",141],["bresciatoday.it",141],["brindisireport.it",141],["casertanews.it",141],["cataniatoday.it",141],["cesenatoday.it",141],["chietitoday.it",141],["forlitoday.it",141],["frosinonetoday.it",141],["genovatoday.it",141],["ilpescara.it",141],["ilpiacenza.it",141],["latinatoday.it",141],["lecceprima.it",141],["leccotoday.it",141],["livornotoday.it",141],["messinatoday.it",141],["milanotoday.it",141],["modenatoday.it",141],["monzatoday.it",141],["novaratoday.it",141],["padovaoggi.it",141],["parmatoday.it",141],["perugiatoday.it",141],["pisatoday.it",141],["quicomo.it",141],["ravennatoday.it",141],["reggiotoday.it",141],["riminitoday.it",141],["romatoday.it",141],["salernotoday.it",141],["sondriotoday.it",141],["sportpiacenza.it",141],["ternitoday.it",141],["today.it",141],["torinotoday.it",141],["trevisotoday.it",141],["triesteprima.it",141],["udinetoday.it",141],["veneziatoday.it",141],["vicenzatoday.it",141],["thumpertalk.com",142],["austiblox.net",142],["arkcod.org",142],["thelayoff.com",143],["shorterall.com",143],["blog24.me",143],["maxstream.video",143],["tvepg.eu",143],["manwan.xyz",143],["dailymaverick.co.za",144],["ludigames.com",145],["made-by.org",145],["worldtravelling.com",145],["technichero.com",145],["androidadult.com",145],["aeroxplorer.com",145],["sportitalialive.com",145],["infomatricula.pt",145],["starkroboticsfrc.com",146],["sinonimos.de",146],["antonimos.de",146],["quesignifi.ca",146],["tiktokrealtime.com",146],["tiktokcounter.net",146],["tpayr.xyz",146],["poqzn.xyz",146],["ashrfd.xyz",146],["rezsx.xyz",146],["tryzt.xyz",146],["ashrff.xyz",146],["rezst.xyz",146],["dawenet.com",146],["erzar.xyz",146],["waezm.xyz",146],["waezg.xyz",146],["blackwoodacademy.org",146],["cryptednews.space",146],["vivuq.com",146],["swgop.com",146],["vbnmll.com",146],["telcoinfo.online",146],["dshytb.com",146],["link.vipurl.in",147],["nanolinks.in",147],["adrinolinks.com",147],["fadedfeet.com",148],["homeculina.com",148],["ineedskin.com",148],["kenzo-flowertag.com",148],["lawyex.co",148],["mdn.lol",148],["bitzite.com",149],["coingraph.us",150],["impact24.us",150],["www.apkmoddone.com",151],["sitemini.io.vn",152],["vip1s.top",152],["dl.apkmoddone.com",153],["phongroblox.com",153],["financacerta.com",154],["encurtads.net",154],["shortencash.click",155],["lablue.*",156],["4-liga.com",157],["4fansites.de",157],["4players.de",157],["9monate.de",157],["aachener-nachrichten.de",157],["aachener-zeitung.de",157],["abendblatt.de",157],["abendzeitung-muenchen.de",157],["about-drinks.com",157],["abseits-ka.de",157],["airliners.de",157],["ajaxshowtime.com",157],["allgemeine-zeitung.de",157],["alpin.de",157],["antenne.de",157],["arcor.de",157],["areadvd.de",157],["areamobile.de",157],["ariva.de",157],["astronews.com",157],["aussenwirtschaftslupe.de",157],["auszeit.bio",157],["auto-motor-und-sport.de",157],["auto-service.de",157],["autobild.de",157],["autoextrem.de",157],["autopixx.de",157],["autorevue.at",157],["autotrader.nl",157],["az-online.de",157],["baby-vornamen.de",157],["babyclub.de",157],["bafoeg-aktuell.de",157],["berliner-kurier.de",157],["berliner-zeitung.de",157],["bigfm.de",157],["bikerszene.de",157],["bildderfrau.de",157],["blackd.de",157],["blick.de",157],["boerse-online.de",157],["boerse.de",157],["boersennews.de",157],["braunschweiger-zeitung.de",157],["brieffreunde.de",157],["brigitte.de",157],["buerstaedter-zeitung.de",157],["buffed.de",157],["businessinsider.de",157],["buzzfeed.at",157],["buzzfeed.de",157],["caravaning.de",157],["cavallo.de",157],["chefkoch.de",157],["cinema.de",157],["clever-tanken.de",157],["computerbild.de",157],["computerhilfen.de",157],["comunio-cl.com",157],["comunio.*",157],["connect.de",157],["chip.de",157],["da-imnetz.de",157],["dasgelbeblatt.de",157],["dbna.com",157],["dbna.de",157],["deichstube.de",157],["deine-tierwelt.de",157],["der-betze-brennt.de",157],["derwesten.de",157],["desired.de",157],["dhd24.com",157],["dieblaue24.com",157],["digitalfernsehen.de",157],["dnn.de",157],["donnerwetter.de",157],["e-hausaufgaben.de",157],["e-mountainbike.com",157],["eatsmarter.de",157],["echo-online.de",157],["ecomento.de",157],["einfachschoen.me",157],["elektrobike-online.com",157],["eltern.de",157],["epochtimes.de",157],["essen-und-trinken.de",157],["express.de",157],["extratipp.com",157],["familie.de",157],["fanfiktion.de",157],["fehmarn24.de",157],["fettspielen.de",157],["fid-gesundheitswissen.de",157],["finanzen.*",157],["finanznachrichten.de",157],["finanztreff.de",157],["finya.de",157],["firmenwissen.de",157],["fitforfun.de",157],["fnp.de",157],["football365.fr",157],["formel1.de",157],["fr.de",157],["frankfurter-wochenblatt.de",157],["freenet.de",157],["fremdwort.de",157],["froheweihnachten.info",157],["frustfrei-lernen.de",157],["fuldaerzeitung.de",157],["funandnews.de",157],["fussballdaten.de",157],["futurezone.de",157],["gala.de",157],["gamepro.de",157],["gamersglobal.de",157],["gamesaktuell.de",157],["gamestar.de",157],["gameswelt.*",157],["gamezone.de",157],["gartendialog.de",157],["gartenlexikon.de",157],["gedichte.ws",157],["geissblog.koeln",157],["gelnhaeuser-tageblatt.de",157],["general-anzeiger-bonn.de",157],["geniale-tricks.com",157],["genialetricks.de",157],["gesund-vital.de",157],["gesundheit.de",157],["gevestor.de",157],["gewinnspiele.tv",157],["giessener-allgemeine.de",157],["giessener-anzeiger.de",157],["gifhorner-rundschau.de",157],["giga.de",157],["gipfelbuch.ch",157],["gmuender-tagespost.de",157],["gruenderlexikon.de",157],["gusto.at",157],["gut-erklaert.de",157],["gutfuerdich.co",157],["hallo-muenchen.de",157],["hamburg.de",157],["hanauer.de",157],["hardwareluxx.de",157],["hartziv.org",157],["harzkurier.de",157],["haus-garten-test.de",157],["hausgarten.net",157],["haustec.de",157],["haz.de",157],["heftig.*",157],["heidelberg24.de",157],["heilpraxisnet.de",157],["heise.de",157],["helmstedter-nachrichten.de",157],["hersfelder-zeitung.de",157],["hftg.co",157],["hifi-forum.de",157],["hna.de",157],["hochheimer-zeitung.de",157],["hoerzu.de",157],["hofheimer-zeitung.de",157],["iban-rechner.de",157],["ikz-online.de",157],["immobilienscout24.de",157],["ingame.de",157],["inside-digital.de",157],["inside-handy.de",157],["investor-verlag.de",157],["jappy.com",157],["jpgames.de",157],["kabeleins.de",157],["kachelmannwetter.com",157],["kamelle.de",157],["kicker.de",157],["kindergeld.org",157],["klettern-magazin.de",157],["klettern.de",157],["kochbar.de",157],["kreis-anzeiger.de",157],["kreisbote.de",157],["kreiszeitung.de",157],["ksta.de",157],["kurierverlag.de",157],["lachainemeteo.com",157],["lampertheimer-zeitung.de",157],["landwirt.com",157],["laut.de",157],["lauterbacher-anzeiger.de",157],["leckerschmecker.me",157],["leinetal24.de",157],["lesfoodies.com",157],["levif.be",157],["lifeline.de",157],["liga3-online.de",157],["likemag.com",157],["linux-community.de",157],["linux-magazin.de",157],["live.vodafone.de",157],["ln-online.de",157],["lokalo24.de",157],["lustaufsleben.at",157],["lustich.de",157],["lvz.de",157],["lz.de",157],["mactechnews.de",157],["macwelt.de",157],["macworld.co.uk",157],["mail.de",157],["main-spitze.de",157],["manager-magazin.de",157],["manga-tube.me",157],["mathebibel.de",157],["mathepower.com",157],["maz-online.de",157],["medisite.fr",157],["mehr-tanken.de",157],["mein-kummerkasten.de",157],["mein-mmo.de",157],["mein-wahres-ich.de",157],["meine-anzeigenzeitung.de",157],["meinestadt.de",157],["menshealth.de",157],["mercato365.com",157],["merkur.de",157],["messen.de",157],["metal-hammer.de",157],["metalflirt.de",157],["meteologix.com",157],["minecraft-serverlist.net",157],["mittelbayerische.de",157],["modhoster.de",157],["moin.de",157],["mopo.de",157],["morgenpost.de",157],["motor-talk.de",157],["motorbasar.de",157],["motorradonline.de",157],["motorsport-total.com",157],["motortests.de",157],["mountainbike-magazin.de",157],["moviejones.de",157],["moviepilot.de",157],["mt.de",157],["mtb-news.de",157],["musiker-board.de",157],["musikexpress.de",157],["musikradar.de",157],["mz-web.de",157],["n-tv.de",157],["naumburger-tageblatt.de",157],["netzwelt.de",157],["neuepresse.de",157],["neueroeffnung.info",157],["news.at",157],["news.de",157],["news38.de",157],["newsbreak24.de",157],["nickles.de",157],["nicknight.de",157],["nl.hardware.info",157],["nn.de",157],["nnn.de",157],["nordbayern.de",157],["notebookchat.com",157],["notebookcheck-ru.com",157],["notebookcheck-tr.com",157],["notebookcheck.*",157],["noz-cdn.de",157],["noz.de",157],["nrz.de",157],["nw.de",157],["nwzonline.de",157],["oberhessische-zeitung.de",157],["och.to",157],["oeffentlicher-dienst.info",157],["onlinekosten.de",157],["onvista.de",157],["op-marburg.de",157],["op-online.de",157],["outdoor-magazin.com",157],["outdoorchannel.de",157],["paradisi.de",157],["pc-magazin.de",157],["pcgames.de",157],["pcgameshardware.de",157],["pcwelt.de",157],["pcworld.es",157],["peiner-nachrichten.de",157],["pferde.de",157],["pietsmiet.de",157],["pixelio.de",157],["pkw-forum.de",157],["playboy.de",157],["playfront.de",157],["pnn.de",157],["pons.com",157],["prignitzer.de",157],["profil.at",157],["promipool.de",157],["promobil.de",157],["prosiebenmaxx.de",157],["psychic.de",[157,172]],["quoka.de",157],["radio.at",157],["radio.de",157],["radio.dk",157],["radio.es",157],["radio.fr",157],["radio.it",157],["radio.net",157],["radio.pl",157],["radio.pt",157],["radio.se",157],["ran.de",157],["readmore.de",157],["rechtslupe.de",157],["recording.de",157],["rennrad-news.de",157],["reuters.com",157],["reviersport.de",157],["rhein-main-presse.de",157],["rheinische-anzeigenblaetter.de",157],["rimondo.com",157],["roadbike.de",157],["roemische-zahlen.net",157],["rollingstone.de",157],["rot-blau.com",157],["rp-online.de",157],["rtl.de",[157,250]],["rtv.de",157],["rugby365.fr",157],["ruhr24.de",157],["rundschau-online.de",157],["runnersworld.de",157],["safelist.eu",157],["salzgitter-zeitung.de",157],["sat1.de",157],["sat1gold.de",157],["schoener-wohnen.de",157],["schwaebische-post.de",157],["schwarzwaelder-bote.de",157],["serienjunkies.de",157],["shz.de",157],["sixx.de",157],["skodacommunity.de",157],["smart-wohnen.net",157],["sn.at",157],["sozialversicherung-kompetent.de",157],["spiegel.de",157],["spielen.de",157],["spieletipps.de",157],["spielfilm.de",157],["sport.de",157],["sport1.de",157],["sport365.fr",157],["sportal.de",157],["spox.com",157],["stern.de",157],["stuttgarter-nachrichten.de",157],["stuttgarter-zeitung.de",157],["sueddeutsche.de",157],["svz.de",157],["szene1.at",157],["szene38.de",157],["t-online.de",157],["tagesspiegel.de",157],["taschenhirn.de",157],["techadvisor.co.uk",157],["techstage.de",157],["tele5.de",157],["teltarif.de",157],["testedich.*",157],["the-voice-of-germany.de",157],["thueringen24.de",157],["tichyseinblick.de",157],["tierfreund.co",157],["tiervermittlung.de",157],["torgranate.de",157],["transfermarkt.*",157],["trend.at",157],["truckscout24.*",157],["tv-media.at",157],["tvdigital.de",157],["tvinfo.de",157],["tvspielfilm.de",157],["tvtoday.de",157],["tvtv.*",157],["tz.de",[157,171]],["unicum.de",157],["unnuetzes.com",157],["unsere-helden.com",157],["unterhalt.net",157],["usinger-anzeiger.de",157],["usp-forum.de",157],["videogameszone.de",157],["vienna.at",157],["vip.de",157],["virtualnights.com",157],["vox.de",157],["wa.de",157],["wallstreet-online.de",[157,160]],["waz.de",157],["weather.us",157],["webfail.com",157],["weihnachten.me",157],["weihnachts-bilder.org",157],["weihnachts-filme.com",157],["welt.de",157],["weltfussball.at",157],["weristdeinfreund.de",157],["werkzeug-news.de",157],["werra-rundschau.de",157],["wetterauer-zeitung.de",157],["wetteronline.*",157],["wieistmeineip.*",157],["wiesbadener-kurier.de",157],["wiesbadener-tagblatt.de",157],["winboard.org",157],["windows-7-forum.net",157],["winfuture.de",[157,167]],["wintotal.de",157],["wlz-online.de",157],["wn.de",157],["wohngeld.org",157],["wolfenbuetteler-zeitung.de",157],["wolfsburger-nachrichten.de",157],["woman.at",157],["womenshealth.de",157],["wormser-zeitung.de",157],["woxikon.de",157],["wp.de",157],["wr.de",157],["wunderweib.de",157],["yachtrevue.at",157],["ze.tt",157],["zeit.de",157],["meineorte.com",158],["osthessen-news.de",158],["techadvisor.com",158],["focus.de",158],["wetter.*",159],["deinesexfilme.com",161],["einfachtitten.com",161],["lesbenhd.com",161],["milffabrik.com",[161,221]],["porn-monkey.com",161],["porndrake.com",161],["pornhubdeutsch.net",161],["pornoaffe.com",161],["pornodavid.com",161],["pornoente.tv",[161,221]],["pornofisch.com",161],["pornofelix.com",161],["pornohammer.com",161],["pornohelm.com",161],["pornoklinge.com",161],["pornotom.com",[161,221]],["pornotommy.com",161],["pornovideos-hd.com",161],["pornozebra.com",[161,221]],["xhamsterdeutsch.xyz",161],["xnxx-sexfilme.com",161],["nu6i-bg-net.com",163],["khsm.io",163],["webcreator-journal.com",163],["msdos-games.com",163],["blocklayer.com",163],["weknowconquer.com",163],["giff.cloud",163],["aquarius-horoscopes.com",164],["cancer-horoscopes.com",164],["dubipc.blogspot.com",164],["echoes.gr",164],["engel-horoskop.de",164],["freegames44.com",164],["fuerzasarmadas.eu",164],["gemini-horoscopes.com",164],["jurukunci.net",164],["krebs-horoskop.com",164],["leo-horoscopes.com",164],["maliekrani.com",164],["nklinks.click",164],["ourenseando.es",164],["pisces-horoscopes.com",164],["radio-en-direct.fr",164],["sagittarius-horoscopes.com",164],["scorpio-horoscopes.com",164],["singlehoroskop-loewe.de",164],["skat-karten.de",164],["skorpion-horoskop.com",164],["taurus-horoscopes.com",164],["the1security.com",164],["virgo-horoscopes.com",164],["zonamarela.blogspot.com",164],["yoima.hatenadiary.com",164],["kaystls.site",165],["ftuapps.dev",166],["studydhaba.com",166],["freecourse.tech",166],["victor-mochere.com",166],["papunika.com",166],["mobilanyheter.net",166],["prajwaldesai.com",[166,240]],["carscoops.com",167],["dziennik.pl",167],["eurointegration.com.ua",167],["flatpanelshd.com",167],["footballtransfer.com.ua",167],["footballtransfer.ru",167],["hoyme.jp",167],["issuya.com",167],["itainews.com",167],["iusm.co.kr",167],["logicieleducatif.fr",167],["mynet.com",[167,188]],["onlinegdb.com",167],["picrew.me",167],["pravda.com.ua",167],["reportera.co.kr",167],["sportanalytic.com",167],["sportsrec.com",167],["sportsseoul.com",167],["text-compare.com",167],["tweaksforgeeks.com",167],["wfmz.com",167],["worldhistory.org",167],["palabr.as",167],["motscroises.fr",167],["cruciverba.it",167],["w.grapps.me",167],["gazetaprawna.pl",167],["pressian.com",167],["raenonx.cc",[167,266]],["indiatimes.com",167],["missyusa.com",167],["aikatu.jp",167],["ark-unity.com",167],["cool-style.com.tw",167],["doanhnghiepvn.vn",167],["mykhel.com",167],["automobile-catalog.com",168],["motorbikecatalog.com",168],["maketecheasier.com",168],["mlbpark.donga.com",169],["jjang0u.com",170],["forumdz.com",172],["abandonmail.com",172],["flmods.com",172],["zilinak.sk",172],["hotdesimms.com",172],["pdfaid.com",172],["bootdey.com",172],["mail.com",172],["expresskaszubski.pl",172],["moegirl.org.cn",172],["flix-wave.lol",172],["fmovies0.cc",172],["worthcrete.com",172],["my-code4you.blogspot.com",173],["vrcmods.com",174],["osuskinner.com",174],["osuskins.net",174],["pentruea.com",[175,176]],["mchacks.net",177],["why-tech.it",178],["compsmag.com",179],["tapetus.pl",180],["autoroad.cz",181],["brawlhalla.fr",181],["tecnobillo.com",181],["pokemon-project.com",181],["sexcamfreeporn.com",182],["breatheheavy.com",183],["wenxuecity.com",184],["key-hub.eu",185],["fabioambrosi.it",186],["tattle.life",187],["emuenzen.de",187],["terrylove.com",187],["cidade.iol.pt",189],["fantacalcio.it",190],["hentaifreak.org",191],["hypebeast.com",192],["krankheiten-simulieren.de",193],["catholic.com",194],["3dmodelshare.org",195],["techinferno.com",196],["ibeconomist.com",197],["bookriot.com",198],["purposegames.com",199],["globo.com",200],["latimes.com",200],["claimrbx.gg",201],["perelki.net",202],["vpn-anbieter-vergleich-test.de",203],["livingincebuforums.com",204],["paperzonevn.com",205],["alltechnerd.com",206],["malaysianwireless.com",207],["erinsakura.com",208],["infofuge.com",208],["freejav.guru",208],["novelmultiverse.com",208],["fritidsmarkedet.dk",209],["maskinbladet.dk",209],["15min.lt",210],["baddiehub.com",211],["mr9soft.com",212],["21porno.com",213],["adult-sex-gamess.com",214],["hentaigames.app",214],["mobilesexgamesx.com",214],["mysexgamer.com",214],["porngameshd.com",214],["sexgamescc.com",214],["xnxx-sex-videos.com",214],["f2movies.to",215],["freeporncave.com",216],["tubsxxx.com",217],["manga18fx.com",218],["freebnbcoin.com",218],["sextvx.com",219],["muztext.com",220],["pornohans.com",221],["nursexfilme.com",221],["pornohirsch.net",221],["xhamster-sexvideos.com",221],["pornoschlange.com",221],["xhamsterdeutsch.*",221],["hdpornos.net",221],["gutesexfilme.com",221],["zona-leros.com",221],["charbelnemnom.com",222],["simplebits.io",223],["online-fix.me",224],["privatemoviez.*",225],["gamersdiscussionhub.com",225],["elahmad.com",226],["owlzo.com",227],["q1003.com",228],["blogpascher.com",229],["testserver.pro",230],["lifestyle.bg",230],["money.bg",230],["news.bg",230],["topsport.bg",230],["webcafe.bg",230],["schoolcheats.net",231],["mgnet.xyz",232],["advertiserandtimes.co.uk",233],["111.90.159.132",234],["techsolveprac.com",235],["joomlabeginner.com",236],["askpaccosi.com",237],["largescaleforums.com",238],["dubznetwork.com",239],["dongknows.com",241],["traderepublic.community",242],["babia.to",243],["code2care.org",244],["gmx.*",245],["yts-subs.net",246],["dlhd.sx",246],["xxxxsx.com",247],["ngontinh24.com",248],["idevicecentral.com",249],["mangacrab.com",251],["hortonanderfarom.blogspot.com",252],["viefaucet.com",253],["pourcesoir.in",253],["cloud-computing-central.com",254],["afk.guide",255],["businessnamegenerator.com",256],["derstandard.at",257],["derstandard.de",257],["rocketnews24.com",258],["soranews24.com",258],["youpouch.com",258],["gourmetscans.net",259],["ilsole24ore.com",260],["ipacrack.com",261],["infokik.com",262],["porhubvideo.com",264],["webseriessex.com",264],["panuvideo.com",264],["pornktubes.net",264],["daemonanime.net",265],["bgmateriali.com",265],["deezer.com",266],["fosslinux.com",267],["shrdsk.me",268],["examword.com",269],["sempreupdate.com.br",269],["tribuna.com",270],["trendsderzukunft.de",271],["gal-dem.com",271],["lostineu.eu",271],["oggitreviso.it",271],["speisekarte.de",271],["mixed.de",271],["lightnovelspot.com",[272,273]],["novelpub.com",[272,273]],["webnovelpub.com",[272,273]],["hwzone.co.il",275],["nammakalvi.com",276],["igay69.com",276],["c2g.at",277],["terafly.me",277],["elamigos-games.com",277],["elamigos-games.net",277],["elamigosgames.org",277],["dktechnicalmate.com",278],["recipahi.com",278],["vpntester.org",279],["digitask.ru",281],["tempumail.com",282],["sexvideos.host",283],["camcaps.*",284],["10alert.com",285],["cryptstream.de",286],["nydus.org",286],["techhelpbd.com",287],["fapdrop.com",288],["cellmapper.net",289],["hdrez.com",290],["youwatch-serie.com",290],["russland.jetzt",290],["printablecreative.com",291],["peachprintable.com",291],["comohoy.com",292],["leak.sx",292],["paste.bin.sx",292],["pornleaks.in",292],["merlininkazani.com",292],["j91.asia",293],["rekidai-info.github.io",294],["jeniusplay.com",295],["indianyug.com",296],["rgb.vn",296],["needrom.com",297],["criptologico.com",298],["megadrive-emulator.com",299],["eromanga-show.com",300],["hentai-one.com",300],["hentaipaw.com",300],["10minuteemails.com",301],["luxusmail.org",301],["w3cub.com",302],["bangpremier.com",303],["nyaa.iss.ink",304],["drivebot.*",305],["thenextplanet1.*",306],["tnp98.xyz",306],["client.falixnodes.net",307],["techedubyte.com",308],["tickzoo.tv",309],["oploverz.*",309],["memedroid.com",310],["karaoketexty.cz",311],["filmizlehdfilm.com",312],["filmizletv.*",312],["fullfilmizle.cc",312],["gofilmizle.net",312],["resortcams.com",313],["cheatography.com",313],["sonixgvn.net",314],["autoscout24.*",315],["mjakmama24.pl",316],["cheatermad.com",317],["work.ink",318],["ville-ideale.fr",319],["brainly.*",320],["eodev.com",320],["xfreehd.com",321],["freethesaurus.com",322],["thefreedictionary.com",322],["fm-arena.com",323],["tradersunion.com",324],["tandess.com",325],["allosurf.net",325],["spontacts.com",326],["dankmemer.lol",327],["getexploits.com",328],["fplstatistics.com",329],["breitbart.com",330],["salidzini.lv",331],["cryptorank.io",[332,333]],["4kwebplay.xyz",334],["qqwebplay.xyz",334],["molbiotools.com",335],["vods.tv",336],["18xxx.xyz",337],["raidrush.net",338],["xnxxcom.xyz",339],["videzz.net",340],["spambox.xyz",341],["dreamdth.com",342],["freemodsapp.in",342],["onlytech.com",342],["player.jeansaispasplus.homes",343],["en-thunderscans.com",344],["infinityscans.xyz",345],["infinityscans.net",345],["infinityscans.org",345],["iqksisgw.xyz",346],["caroloportunidades.com.br",347],["coempregos.com.br",347],["foodiesgallery.com",347],["vikatan.com",348],["camhub.world",349],["mma-core.*",350],["teracourses.com",351],["servustv.com",352],["freevipservers.net",353],["streambtw.com",354],["qrcodemonkey.net",355],["streamup.ws",356],["tv-films.co.uk",357],["cool--web-de.translate.goog",[358,359]],["gps--cache-de.translate.goog",[358,359]],["web--spiele-de.translate.goog",[358,359]],["fun--seiten-de.translate.goog",[358,359]],["photo--alben-de.translate.goog",[358,359]],["wetter--vorhersage-de.translate.goog",[358,359]],["coolsoftware-de.translate.goog",[358,359]],["kryptografie-de.translate.goog",[358,359]],["cool--domains-de.translate.goog",[358,359]],["net--tours-de.translate.goog",[358,359]],["such--maschine-de.translate.goog",[358,359]],["qul-de.translate.goog",[358,359]],["mailtool-de.translate.goog",[358,359]],["c--ix-de.translate.goog",[358,359]],["softwareengineer-de.translate.goog",[358,359]],["net--tools-de.translate.goog",[358,359]],["hilfen-de.translate.goog",[358,359]],["45er-de.translate.goog",[358,359]],["cooldns-de.translate.goog",[358,359]],["hardware--entwicklung-de.translate.goog",[358,359]],["bgsi.gg",360],["friv.com",361],["tdtnews.com",362],["santafenewmexican.com",362]]);
const exceptionsMap = new Map([["vvid30c.*",[135]]]);
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
