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
const argsList = [["=document[_0x"],["DkQoS"],["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["documentElement.innerHTML"],["alert","2000"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["offsetHeight"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["mfp"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["myTestAd"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["/adObj|amzn_aps_csm|please-disable|function reportErrors/"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],[".adv-"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["","10000-15000"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["determineVisibility"],["TNCMS.DMP"]];
const hostnamesMap = new Map([["japscan.lol",[0,1,281]],["poophq.com",2],["veev.to",2],["dogdrip.net",3],["infinityfree.com",3],["smsonline.cloud",[3,4]],["faqwiki.us",5],["mail.yahoo.com",[6,275]],["maxcheaters.com",6],["postimees.ee",6],["police.community",6],["gisarea.com",6],["schaken-mods.com",6],["tvnet.lv",6],["theclashify.com",6],["txori.com",6],["olarila.com",6],["deletedspeedstreams.blogspot.com",6],["schooltravelorganiser.com",6],["xhardhempus.net",6],["mhn.quest",6],["leagueofgraphs.com",6],["hieunguyenphoto.com",6],["benzinpreis.de",6],["lastampa.it",7],["m.timesofindia.com",8],["timesofindia.indiatimes.com",8],["youmath.it",8],["redensarten-index.de",8],["lesoir.be",8],["electriciansforums.net",8],["keralatelecom.info",8],["universegunz.net",8],["happypenguin.altervista.org",8],["everyeye.it",8],["eztv.*",8],["bluedrake42.com",8],["supermarioemulator.com",8],["futbollibrehd.com",8],["eska.pl",8],["eskarock.pl",8],["voxfm.pl",8],["mathaeser.de",8],["betaseries.com",8],["free-sms-receive.com",8],["sms-receive-online.com",8],["computer76.ru",8],["golem.de",[9,10,158]],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["sushi-scan.*",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["seriesperu.com",10],["spigotunlocked.*",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,251]],["topsporter.net",[10,251]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["ahmedmode.*",10],["mobilkulup.com",10],["esopress.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["starleaks.org",10],["forum-xiaomi.com",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,68]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["yts.*",13],["720pstream.*",13],["1stream.*",13],["tutele.sx",13],["seattletimes.com",14],["bestgames.com",15],["yiv.com",15],["globalrph.com",16],["e-glossa.it",17],["webcheats.com.br",18],["urlcero.*",19],["gala.fr",20],["gentside.com",20],["geo.fr",20],["hbrfrance.fr",20],["nationalgeographic.fr",20],["ohmymag.com",20],["serengo.net",20],["vsd.fr",20],["short.pe",21],["thefmovies.*",21],["footystreams.net",21],["katestube.com",21],["updato.com",[22,37]],["totaldebrid.*",23],["sandrives.*",23],["daizurin.com",23],["pendekarsubs.us",23],["dreamfancy.org",23],["rysafe.blogspot.com",23],["techacode.com",23],["toppng.com",23],["th-world.com",23],["avjamack.com",23],["avjamak.net",23],["cnnamador.com",24],["nudecelebforum.com",25],["pronpic.org",26],["thewebflash.com",27],["discordfastfood.com",27],["xup.in",27],["popularmechanics.com",28],["op.gg",29],["comunidadgzone.es",30],["fxporn69.*",30],["mp3fy.com",30],["lebensmittelpraxis.de",30],["aliancapes.*",30],["forum-pokemon-go.fr",30],["praxis-jugendarbeit.de",30],["dictionnaire-medical.net",30],["cle0desktop.blogspot.com",30],["up-load.io",30],["keysbrasil.blogspot.com",30],["hotpress.info",30],["turkleech.com",30],["anibatch.me",30],["anime-i.com",30],["gewinde-normen.de",30],["tucinehd.com",30],["plex-guide.de",30],["kdramasmaza.com.pk",30],["jellynote.com",31],["pouvideo.*",32],["povvideo.*",32],["povw1deo.*",32],["povwideo.*",32],["powv1deo.*",32],["powvibeo.*",32],["powvideo.*",32],["powvldeo.*",32],["eporner.com",33],["pornbimbo.com",34],["4j.com",34],["avoiderrors.com",35],["sitarchive.com",35],["livenewsof.com",35],["topnewsshow.com",35],["gatcha.org",35],["kusonime.com",35],["suicidepics.com",35],["codesnail.com",35],["codingshiksha.com",35],["graphicux.com",35],["citychilli.com",35],["talkjarvis.com",35],["hdmotori.it",36],["tubsexer.*",38],["femdomtb.com",38],["porno-tour.*",38],["lenkino.*",38],["bobs-tube.com",38],["pornfd.com",38],["pornomoll.*",38],["camsclips.*",38],["popno-tour.net",38],["watchmdh.to",38],["camwhores.tv",38],["camhub.cc",38],["elfqrin.com",39],["satcesc.com",40],["apfelpatient.de",40],["lusthero.com",41],["m4ufree.*",42],["m2list.com",42],["embed.nana2play.com",42],["dallasnews.com",43],["lnk.news",44],["lnk.parts",44],["efukt.com",45],["wendycode.com",45],["springfieldspringfield.co.uk",46],["porndoe.com",47],["smsget.net",[48,49]],["kjanime.net",50],["gioialive.it",51],["classicreload.com",52],["scriptzhub.com",52],["hotpornfile.org",53],["coolsoft.altervista.org",53],["hackedonlinegames.com",53],["dailytech-news.eu",53],["settlersonlinemaps.com",53],["ad-doge.com",53],["magdownload.org",53],["kpkuang.org",53],["crypto4yu.com",53],["faucetwork.space",53],["writedroid.*",53],["thenightwithoutthedawn.blogspot.com",53],["entutes.com",53],["claimlite.club",53],["newscon.org",53],["rl6mans.com",53],["chicoer.com",54],["bostonherald.com",54],["dailycamera.com",54],["sportsplays.com",55],["ebookdz.com",56],["telerium.*",57],["pornvideotop.com",58],["krotkoosporcie.pl",58],["xstory-fr.com",58],["1337x.*",58],["x1337x.*",58],["1337x.ninjaproxy1.com",58],["ytapi.cc",58],["letribunaldunet.fr",59],["vladan.fr",59],["live-tv-channels.org",60],["eslfast.com",61],["ge-map-overlays.appspot.com",62],["mad4wheels.com",62],["1xanimes.in",62],["logi.im",62],["emailnator.com",62],["appnee.com",62],["freegamescasual.com",63],["tcpvpn.com",64],["oko.sh",64],["timesnownews.com",64],["timesnowhindi.com",64],["timesnowmarathi.com",64],["zoomtventertainment.com",64],["tsubasa.im",65],["sholah.net",66],["2rdroid.com",66],["bisceglielive.it",67],["pandajogosgratis.com.br",69],["5278.cc",70],["pandafreegames.*",71],["tonspion.de",72],["duplichecker.com",73],["plagiarismchecker.co",73],["plagiarismdetector.net",73],["searchenginereports.net",73],["smallseotools.com",74],["linkspaid.com",75],["proxydocker.com",75],["beeimg.com",[76,77]],["emturbovid.com",77],["findjav.com",77],["javggvideo.xyz",77],["mmtv01.xyz",77],["stbturbo.xyz",77],["streamsilk.com",77],["viralharami.com",77],["ftlauderdalebeachcam.com",78],["ftlauderdalewebcam.com",78],["juneauharborwebcam.com",78],["keywestharborwebcam.com",78],["kittycatcam.com",78],["mahobeachcam.com",78],["miamiairportcam.com",78],["morganhillwebcam.com",78],["njwildlifecam.com",78],["nyharborwebcam.com",78],["paradiseislandcam.com",78],["pompanobeachcam.com",78],["portbermudawebcam.com",78],["portcanaveralwebcam.com",78],["portevergladeswebcam.com",78],["portmiamiwebcam.com",78],["portnywebcam.com",78],["portnassauwebcam.com",78],["portstmaartenwebcam.com",78],["portstthomaswebcam.com",78],["porttampawebcam.com",78],["sxmislandcam.com",78],["themes-dl.com",78],["badassdownloader.com",78],["badasshardcore.com",78],["badassoftcore.com",78],["nulljungle.com",78],["teevee.asia",78],["otakukan.com",78],["thoptv.*",79],["gearingcommander.com",80],["generate.plus",81],["calculate.plus",81],["avcesar.com",82],["audiotag.info",83],["tudigitale.it",84],["ibcomputing.com",85],["legia.net",86],["acapellas4u.co.uk",87],["robloxscripts.com",88],["libreriamo.it",88],["postazap.com",88],["medebooks.xyz",88],["mashtips.com",88],["marriedgames.com.br",88],["4allprograms.me",88],["shortzzy.*",88],["nurgsm.com",88],["certbyte.com",88],["plugincrack.com",88],["gamingdeputy.com",88],["freewebcart.com",88],["gamekult.com",89],["streamhentaimovies.com",90],["konten.co.id",91],["diariodenavarra.es",92],["scripai.com",92],["myfxbook.com",92],["whatfontis.com",92],["tubereader.me",92],["optifine.net",93],["luzernerzeitung.ch",94],["tagblatt.ch",94],["ableitungsrechner.net",95],["alternet.org",96],["gourmetsupremacy.com",96],["shrib.com",97],["streameast.*",98],["thestreameast.*",98],["techclips.net",98],["daddylivehd.*",98],["footyhunter.lol",98],["poscitech.click",98],["wecast.to",98],["sportbar.live",98],["freecourseweb.com",99],["devcourseweb.com",99],["coursewikia.com",99],["courseboat.com",99],["coursehulu.com",99],["pornhub.*",100],["lne.es",101],["pornult.com",102],["webcamsdolls.com",102],["bitcotasks.com",[102,144]],["adsy.pw",102],["playstore.pw",102],["exactpay.online",102],["thothd.to",102],["proplanta.de",103],["textograto.com",104],["voyageforum.com",105],["hmc-id.blogspot.com",105],["myabandonware.com",105],["wcofun.*",105],["ilforumdeibrutti.is",105],["prad.de",[106,158]],["chatta.it",107],["ketubanjiwa.com",108],["nsfw247.to",109],["funzen.net",109],["ilclubdellericette.it",109],["bollyholic.*",109],["extremereportbot.com",110],["getintopc.com",111],["qoshe.com",112],["lowellsun.com",113],["mamadu.pl",113],["dobrapogoda24.pl",113],["motohigh.pl",113],["namasce.pl",113],["ultimate-catch.eu",114],["cpopchanelofficial.com",115],["creditcardgenerator.com",116],["creditcardrush.com",116],["bostoncommons.net",116],["thejobsmovie.com",116],["hl-live.de",117],["satoshi-win.xyz",117],["encurtandourl.com",[117,121]],["www-daftarharga.blogspot.com",117],["ear-phone-review.com",117],["telefullenvivo.com",117],["listatv.pl",117],["daemon-hentai.com",[117,266]],["coin-profits.xyz",117],["relampagomovies.com",117],["wohnmobilforum.de",117],["nulledbear.com",117],["sinnerclownceviri.net",117],["nilopolisonline.com.br",118],["mesquitaonline.com",118],["yellowbridge.com",118],["yaoiotaku.com",119],["moneyhouse.ch",120],["ihow.info",121],["filesus.com",121],["gotxx.*",121],["sturls.com",121],["turbo1.co",121],["hartico.tv",121],["cupra.forum",121],["turkanime.*",122],["valeronevijao.com",122],["cigarlessarefy.com",122],["yodelswartlike.com",122],["generatesnitrosate.com",122],["crownmakermacaronicism.com",122],["chromotypic.com",122],["gamoneinterrupted.com",122],["metagnathtuggers.com",122],["wolfdyslectic.com",122],["rationalityaloelike.com",122],["sizyreelingly.com",122],["simpulumlamerop.com",122],["urochsunloath.com",122],["monorhinouscassaba.com",122],["counterclockwisejacky.com",122],["35volitantplimsoles5.com",122],["scatch176duplicities.com",122],["antecoxalbobbing1010.com",122],["boonlessbestselling244.com",122],["cyamidpulverulence530.com",122],["guidon40hyporadius9.com",122],["449unceremoniousnasoseptal.com",122],["19turanosephantasia.com",122],["30sensualizeexpression.com",122],["321naturelikefurfuroid.com",122],["745mingiestblissfully.com",122],["availedsmallest.com",122],["greaseball6eventual20.com",122],["toxitabellaeatrebates306.com",122],["20demidistance9elongations.com",122],["audaciousdefaulthouse.com",122],["fittingcentermondaysunday.com",122],["fraudclatterflyingcar.com",122],["launchreliantcleaverriver.com",122],["matriculant401merited.com",122],["realfinanceblogcenter.com",122],["reputationsheriffkennethsand.com",122],["telyn610zoanthropy.com",122],["tubelessceliolymph.com",122],["tummulerviolableness.com",122],["un-block-voe.net",122],["v-o-e-unblock.com",122],["voe-un-block.com",122],["voe-unblock.*",122],["voeun-block.net",122],["voeunbl0ck.com",122],["voeunblck.com",122],["voeunblk.com",122],["voeunblock.com",122],["voeunblock1.com",122],["voeunblock2.com",122],["voeunblock3.com",122],["agefi.fr",123],["cariskuy.com",124],["letras2.com",124],["yusepjaelani.blogspot.com",125],["letras.mus.br",126],["eletronicabr.com",127],["mtlurb.com",128],["onemanhua.com",129],["laksa19.github.io",130],["javcl.com",130],["tvlogy.to",130],["rp5.*",130],["live.dragaoconnect.net",130],["seznamzpravy.cz",130],["xerifetech.com",130],["freemcserver.net",130],["t3n.de",131],["allindiaroundup.com",132],["tapchipi.com",133],["dcleakers.com",133],["esgeeks.com",133],["pugliain.net",133],["uplod.net",133],["worldfreeware.com",133],["cuitandokter.com",133],["tech-blogs.com",133],["cardiagn.com",133],["fikiri.net",133],["myhackingworld.com",133],["phoenixfansub.com",133],["vectorizer.io",134],["onehack.us",134],["smgplaza.com",134],["thapcam.net",134],["breznikar.com",134],["thefastlaneforum.com",135],["5flix.top",136],["bembed.net",136],["embedv.net",136],["fslinks.org",136],["javguard.club",136],["listeamed.net",136],["v6embed.xyz",136],["vembed.*",136],["vgplayer.xyz",136],["vid-guard.com",136],["vidguardto.xyz",136],["yesmovies.*>>",136],["pistona.xyz",136],["vinomo.xyz",136],["moflix-stream.*",[136,163]],["trade2win.com",137],["modagamers.com",138],["khatrimaza.*",138],["freemagazines.top",138],["pogolinks.*",138],["straatosphere.com",138],["nullpk.com",138],["adslink.pw",138],["downloadudemy.com",138],["picgiraffe.com",138],["weadown.com",138],["freepornsex.net",138],["nurparatodos.com.ar",138],["popcornstream.*",139],["routech.ro",139],["hokej.net",139],["turkmmo.com",140],["acdriftingpro.com",141],["palermotoday.it",142],["baritoday.it",142],["trentotoday.it",142],["agrigentonotizie.it",142],["anconatoday.it",142],["arezzonotizie.it",142],["avellinotoday.it",142],["bresciatoday.it",142],["brindisireport.it",142],["casertanews.it",142],["cataniatoday.it",142],["cesenatoday.it",142],["chietitoday.it",142],["forlitoday.it",142],["frosinonetoday.it",142],["genovatoday.it",142],["ilpescara.it",142],["ilpiacenza.it",142],["latinatoday.it",142],["lecceprima.it",142],["leccotoday.it",142],["livornotoday.it",142],["messinatoday.it",142],["milanotoday.it",142],["modenatoday.it",142],["monzatoday.it",142],["novaratoday.it",142],["padovaoggi.it",142],["parmatoday.it",142],["perugiatoday.it",142],["pisatoday.it",142],["quicomo.it",142],["ravennatoday.it",142],["reggiotoday.it",142],["riminitoday.it",142],["romatoday.it",142],["salernotoday.it",142],["sondriotoday.it",142],["sportpiacenza.it",142],["ternitoday.it",142],["today.it",142],["torinotoday.it",142],["trevisotoday.it",142],["triesteprima.it",142],["udinetoday.it",142],["veneziatoday.it",142],["vicenzatoday.it",142],["thumpertalk.com",143],["austiblox.net",143],["arkcod.org",143],["thelayoff.com",144],["shorterall.com",144],["blog24.me",144],["maxstream.video",144],["tvepg.eu",144],["manwan.xyz",144],["dailymaverick.co.za",145],["ludigames.com",146],["made-by.org",146],["worldtravelling.com",146],["technichero.com",146],["androidadult.com",146],["aeroxplorer.com",146],["sportitalialive.com",146],["infomatricula.pt",146],["starkroboticsfrc.com",147],["sinonimos.de",147],["antonimos.de",147],["quesignifi.ca",147],["tiktokrealtime.com",147],["tiktokcounter.net",147],["tpayr.xyz",147],["poqzn.xyz",147],["ashrfd.xyz",147],["rezsx.xyz",147],["tryzt.xyz",147],["ashrff.xyz",147],["rezst.xyz",147],["dawenet.com",147],["erzar.xyz",147],["waezm.xyz",147],["waezg.xyz",147],["blackwoodacademy.org",147],["cryptednews.space",147],["vivuq.com",147],["swgop.com",147],["vbnmll.com",147],["telcoinfo.online",147],["dshytb.com",147],["link.vipurl.in",148],["nanolinks.in",148],["adrinolinks.com",148],["fadedfeet.com",149],["homeculina.com",149],["ineedskin.com",149],["kenzo-flowertag.com",149],["lawyex.co",149],["mdn.lol",149],["bitzite.com",150],["coingraph.us",151],["impact24.us",151],["www.apkmoddone.com",152],["sitemini.io.vn",153],["vip1s.top",153],["dl.apkmoddone.com",154],["phongroblox.com",154],["financacerta.com",155],["encurtads.net",155],["shortencash.click",156],["lablue.*",157],["4-liga.com",158],["4fansites.de",158],["4players.de",158],["9monate.de",158],["aachener-nachrichten.de",158],["aachener-zeitung.de",158],["abendblatt.de",158],["abendzeitung-muenchen.de",158],["about-drinks.com",158],["abseits-ka.de",158],["airliners.de",158],["ajaxshowtime.com",158],["allgemeine-zeitung.de",158],["alpin.de",158],["antenne.de",158],["arcor.de",158],["areadvd.de",158],["areamobile.de",158],["ariva.de",158],["astronews.com",158],["aussenwirtschaftslupe.de",158],["auszeit.bio",158],["auto-motor-und-sport.de",158],["auto-service.de",158],["autobild.de",158],["autoextrem.de",158],["autopixx.de",158],["autorevue.at",158],["autotrader.nl",158],["az-online.de",158],["baby-vornamen.de",158],["babyclub.de",158],["bafoeg-aktuell.de",158],["berliner-kurier.de",158],["berliner-zeitung.de",158],["bigfm.de",158],["bikerszene.de",158],["bildderfrau.de",158],["blackd.de",158],["blick.de",158],["boerse-online.de",158],["boerse.de",158],["boersennews.de",158],["braunschweiger-zeitung.de",158],["brieffreunde.de",158],["brigitte.de",158],["buerstaedter-zeitung.de",158],["buffed.de",158],["businessinsider.de",158],["buzzfeed.at",158],["buzzfeed.de",158],["caravaning.de",158],["cavallo.de",158],["chefkoch.de",158],["cinema.de",158],["clever-tanken.de",158],["computerbild.de",158],["computerhilfen.de",158],["comunio-cl.com",158],["comunio.*",158],["connect.de",158],["chip.de",158],["da-imnetz.de",158],["dasgelbeblatt.de",158],["dbna.com",158],["dbna.de",158],["deichstube.de",158],["deine-tierwelt.de",158],["der-betze-brennt.de",158],["derwesten.de",158],["desired.de",158],["dhd24.com",158],["dieblaue24.com",158],["digitalfernsehen.de",158],["dnn.de",158],["donnerwetter.de",158],["e-hausaufgaben.de",158],["e-mountainbike.com",158],["eatsmarter.de",158],["echo-online.de",158],["ecomento.de",158],["einfachschoen.me",158],["elektrobike-online.com",158],["eltern.de",158],["epochtimes.de",158],["essen-und-trinken.de",158],["express.de",158],["extratipp.com",158],["familie.de",158],["fanfiktion.de",158],["fehmarn24.de",158],["fettspielen.de",158],["fid-gesundheitswissen.de",158],["finanzen.*",158],["finanznachrichten.de",158],["finanztreff.de",158],["finya.de",158],["firmenwissen.de",158],["fitforfun.de",158],["fnp.de",158],["football365.fr",158],["formel1.de",158],["fr.de",158],["frankfurter-wochenblatt.de",158],["freenet.de",158],["fremdwort.de",158],["froheweihnachten.info",158],["frustfrei-lernen.de",158],["fuldaerzeitung.de",158],["funandnews.de",158],["fussballdaten.de",158],["futurezone.de",158],["gala.de",158],["gamepro.de",158],["gamersglobal.de",158],["gamesaktuell.de",158],["gamestar.de",158],["gameswelt.*",158],["gamezone.de",158],["gartendialog.de",158],["gartenlexikon.de",158],["gedichte.ws",158],["geissblog.koeln",158],["gelnhaeuser-tageblatt.de",158],["general-anzeiger-bonn.de",158],["geniale-tricks.com",158],["genialetricks.de",158],["gesund-vital.de",158],["gesundheit.de",158],["gevestor.de",158],["gewinnspiele.tv",158],["giessener-allgemeine.de",158],["giessener-anzeiger.de",158],["gifhorner-rundschau.de",158],["giga.de",158],["gipfelbuch.ch",158],["gmuender-tagespost.de",158],["gruenderlexikon.de",158],["gusto.at",158],["gut-erklaert.de",158],["gutfuerdich.co",158],["hallo-muenchen.de",158],["hamburg.de",158],["hanauer.de",158],["hardwareluxx.de",158],["hartziv.org",158],["harzkurier.de",158],["haus-garten-test.de",158],["hausgarten.net",158],["haustec.de",158],["haz.de",158],["heftig.*",158],["heidelberg24.de",158],["heilpraxisnet.de",158],["heise.de",158],["helmstedter-nachrichten.de",158],["hersfelder-zeitung.de",158],["hftg.co",158],["hifi-forum.de",158],["hna.de",158],["hochheimer-zeitung.de",158],["hoerzu.de",158],["hofheimer-zeitung.de",158],["iban-rechner.de",158],["ikz-online.de",158],["immobilienscout24.de",158],["ingame.de",158],["inside-digital.de",158],["inside-handy.de",158],["investor-verlag.de",158],["jappy.com",158],["jpgames.de",158],["kabeleins.de",158],["kachelmannwetter.com",158],["kamelle.de",158],["kicker.de",158],["kindergeld.org",158],["klettern-magazin.de",158],["klettern.de",158],["kochbar.de",158],["kreis-anzeiger.de",158],["kreisbote.de",158],["kreiszeitung.de",158],["ksta.de",158],["kurierverlag.de",158],["lachainemeteo.com",158],["lampertheimer-zeitung.de",158],["landwirt.com",158],["laut.de",158],["lauterbacher-anzeiger.de",158],["leckerschmecker.me",158],["leinetal24.de",158],["lesfoodies.com",158],["levif.be",158],["lifeline.de",158],["liga3-online.de",158],["likemag.com",158],["linux-community.de",158],["linux-magazin.de",158],["live.vodafone.de",158],["ln-online.de",158],["lokalo24.de",158],["lustaufsleben.at",158],["lustich.de",158],["lvz.de",158],["lz.de",158],["mactechnews.de",158],["macwelt.de",158],["macworld.co.uk",158],["mail.de",158],["main-spitze.de",158],["manager-magazin.de",158],["manga-tube.me",158],["mathebibel.de",158],["mathepower.com",158],["maz-online.de",158],["medisite.fr",158],["mehr-tanken.de",158],["mein-kummerkasten.de",158],["mein-mmo.de",158],["mein-wahres-ich.de",158],["meine-anzeigenzeitung.de",158],["meinestadt.de",158],["menshealth.de",158],["mercato365.com",158],["merkur.de",158],["messen.de",158],["metal-hammer.de",158],["metalflirt.de",158],["meteologix.com",158],["minecraft-serverlist.net",158],["mittelbayerische.de",158],["modhoster.de",158],["moin.de",158],["mopo.de",158],["morgenpost.de",158],["motor-talk.de",158],["motorbasar.de",158],["motorradonline.de",158],["motorsport-total.com",158],["motortests.de",158],["mountainbike-magazin.de",158],["moviejones.de",158],["moviepilot.de",158],["mt.de",158],["mtb-news.de",158],["musiker-board.de",158],["musikexpress.de",158],["musikradar.de",158],["mz-web.de",158],["n-tv.de",158],["naumburger-tageblatt.de",158],["netzwelt.de",158],["neuepresse.de",158],["neueroeffnung.info",158],["news.at",158],["news.de",158],["news38.de",158],["newsbreak24.de",158],["nickles.de",158],["nicknight.de",158],["nl.hardware.info",158],["nn.de",158],["nnn.de",158],["nordbayern.de",158],["notebookchat.com",158],["notebookcheck-ru.com",158],["notebookcheck-tr.com",158],["notebookcheck.*",158],["noz-cdn.de",158],["noz.de",158],["nrz.de",158],["nw.de",158],["nwzonline.de",158],["oberhessische-zeitung.de",158],["och.to",158],["oeffentlicher-dienst.info",158],["onlinekosten.de",158],["onvista.de",158],["op-marburg.de",158],["op-online.de",158],["outdoor-magazin.com",158],["outdoorchannel.de",158],["paradisi.de",158],["pc-magazin.de",158],["pcgames.de",158],["pcgameshardware.de",158],["pcwelt.de",158],["pcworld.es",158],["peiner-nachrichten.de",158],["pferde.de",158],["pietsmiet.de",158],["pixelio.de",158],["pkw-forum.de",158],["playboy.de",158],["playfront.de",158],["pnn.de",158],["pons.com",158],["prignitzer.de",158],["profil.at",158],["promipool.de",158],["promobil.de",158],["prosiebenmaxx.de",158],["psychic.de",[158,173]],["quoka.de",158],["radio.at",158],["radio.de",158],["radio.dk",158],["radio.es",158],["radio.fr",158],["radio.it",158],["radio.net",158],["radio.pl",158],["radio.pt",158],["radio.se",158],["ran.de",158],["readmore.de",158],["rechtslupe.de",158],["recording.de",158],["rennrad-news.de",158],["reuters.com",158],["reviersport.de",158],["rhein-main-presse.de",158],["rheinische-anzeigenblaetter.de",158],["rimondo.com",158],["roadbike.de",158],["roemische-zahlen.net",158],["rollingstone.de",158],["rot-blau.com",158],["rp-online.de",158],["rtl.de",[158,252]],["rtv.de",158],["rugby365.fr",158],["ruhr24.de",158],["rundschau-online.de",158],["runnersworld.de",158],["safelist.eu",158],["salzgitter-zeitung.de",158],["sat1.de",158],["sat1gold.de",158],["schoener-wohnen.de",158],["schwaebische-post.de",158],["schwarzwaelder-bote.de",158],["serienjunkies.de",158],["shz.de",158],["sixx.de",158],["skodacommunity.de",158],["smart-wohnen.net",158],["sn.at",158],["sozialversicherung-kompetent.de",158],["spiegel.de",158],["spielen.de",158],["spieletipps.de",158],["spielfilm.de",158],["sport.de",158],["sport1.de",158],["sport365.fr",158],["sportal.de",158],["spox.com",158],["stern.de",158],["stuttgarter-nachrichten.de",158],["stuttgarter-zeitung.de",158],["sueddeutsche.de",158],["svz.de",158],["szene1.at",158],["szene38.de",158],["t-online.de",158],["tagesspiegel.de",158],["taschenhirn.de",158],["techadvisor.co.uk",158],["techstage.de",158],["tele5.de",158],["teltarif.de",158],["testedich.*",158],["the-voice-of-germany.de",158],["thueringen24.de",158],["tichyseinblick.de",158],["tierfreund.co",158],["tiervermittlung.de",158],["torgranate.de",158],["transfermarkt.*",158],["trend.at",158],["truckscout24.*",158],["tv-media.at",158],["tvdigital.de",158],["tvinfo.de",158],["tvspielfilm.de",158],["tvtoday.de",158],["tvtv.*",158],["tz.de",[158,172]],["unicum.de",158],["unnuetzes.com",158],["unsere-helden.com",158],["unterhalt.net",158],["usinger-anzeiger.de",158],["usp-forum.de",158],["videogameszone.de",158],["vienna.at",158],["vip.de",158],["virtualnights.com",158],["vox.de",158],["wa.de",158],["wallstreet-online.de",[158,161]],["waz.de",158],["weather.us",158],["webfail.com",158],["weihnachten.me",158],["weihnachts-bilder.org",158],["weihnachts-filme.com",158],["welt.de",158],["weltfussball.at",158],["weristdeinfreund.de",158],["werkzeug-news.de",158],["werra-rundschau.de",158],["wetterauer-zeitung.de",158],["wetteronline.*",158],["wieistmeineip.*",158],["wiesbadener-kurier.de",158],["wiesbadener-tagblatt.de",158],["winboard.org",158],["windows-7-forum.net",158],["winfuture.de",[158,168]],["wintotal.de",158],["wlz-online.de",158],["wn.de",158],["wohngeld.org",158],["wolfenbuetteler-zeitung.de",158],["wolfsburger-nachrichten.de",158],["woman.at",158],["womenshealth.de",158],["wormser-zeitung.de",158],["woxikon.de",158],["wp.de",158],["wr.de",158],["wunderweib.de",158],["yachtrevue.at",158],["ze.tt",158],["zeit.de",158],["meineorte.com",159],["osthessen-news.de",159],["techadvisor.com",159],["focus.de",159],["wetter.*",160],["deinesexfilme.com",162],["einfachtitten.com",162],["lesbenhd.com",162],["milffabrik.com",[162,222]],["porn-monkey.com",162],["porndrake.com",162],["pornhubdeutsch.net",162],["pornoaffe.com",162],["pornodavid.com",162],["pornoente.tv",[162,222]],["pornofisch.com",162],["pornofelix.com",162],["pornohammer.com",162],["pornohelm.com",162],["pornoklinge.com",162],["pornotom.com",[162,222]],["pornotommy.com",162],["pornovideos-hd.com",162],["pornozebra.com",[162,222]],["xhamsterdeutsch.xyz",162],["xnxx-sexfilme.com",162],["nu6i-bg-net.com",164],["khsm.io",164],["webcreator-journal.com",164],["msdos-games.com",164],["blocklayer.com",164],["weknowconquer.com",164],["giff.cloud",164],["aquarius-horoscopes.com",165],["cancer-horoscopes.com",165],["dubipc.blogspot.com",165],["echoes.gr",165],["engel-horoskop.de",165],["freegames44.com",165],["fuerzasarmadas.eu",165],["gemini-horoscopes.com",165],["jurukunci.net",165],["krebs-horoskop.com",165],["leo-horoscopes.com",165],["maliekrani.com",165],["nklinks.click",165],["ourenseando.es",165],["pisces-horoscopes.com",165],["radio-en-direct.fr",165],["sagittarius-horoscopes.com",165],["scorpio-horoscopes.com",165],["singlehoroskop-loewe.de",165],["skat-karten.de",165],["skorpion-horoskop.com",165],["taurus-horoscopes.com",165],["the1security.com",165],["virgo-horoscopes.com",165],["zonamarela.blogspot.com",165],["yoima.hatenadiary.com",165],["kaystls.site",166],["ftuapps.dev",167],["studydhaba.com",167],["freecourse.tech",167],["victor-mochere.com",167],["papunika.com",167],["mobilanyheter.net",167],["prajwaldesai.com",[167,241]],["carscoops.com",168],["dziennik.pl",168],["eurointegration.com.ua",168],["flatpanelshd.com",168],["footballtransfer.com.ua",168],["footballtransfer.ru",168],["hoyme.jp",168],["issuya.com",168],["itainews.com",168],["iusm.co.kr",168],["logicieleducatif.fr",168],["mynet.com",[168,189]],["onlinegdb.com",168],["picrew.me",168],["pravda.com.ua",168],["reportera.co.kr",168],["sportanalytic.com",168],["sportsrec.com",168],["sportsseoul.com",168],["text-compare.com",168],["tweaksforgeeks.com",168],["wfmz.com",168],["worldhistory.org",168],["palabr.as",168],["motscroises.fr",168],["cruciverba.it",168],["w.grapps.me",168],["gazetaprawna.pl",168],["pressian.com",168],["raenonx.cc",[168,267]],["indiatimes.com",168],["missyusa.com",168],["aikatu.jp",168],["ark-unity.com",168],["cool-style.com.tw",168],["doanhnghiepvn.vn",168],["mykhel.com",168],["automobile-catalog.com",169],["motorbikecatalog.com",169],["maketecheasier.com",169],["mlbpark.donga.com",170],["jjang0u.com",171],["forumdz.com",173],["abandonmail.com",173],["flmods.com",173],["zilinak.sk",173],["hotdesimms.com",173],["pdfaid.com",173],["bootdey.com",173],["mail.com",173],["expresskaszubski.pl",173],["moegirl.org.cn",173],["flix-wave.lol",173],["fmovies0.cc",173],["worthcrete.com",173],["my-code4you.blogspot.com",174],["vrcmods.com",175],["osuskinner.com",175],["osuskins.net",175],["pentruea.com",[176,177]],["mchacks.net",178],["why-tech.it",179],["compsmag.com",180],["tapetus.pl",181],["autoroad.cz",182],["brawlhalla.fr",182],["tecnobillo.com",182],["pokemon-project.com",182],["sexcamfreeporn.com",183],["breatheheavy.com",184],["wenxuecity.com",185],["key-hub.eu",186],["fabioambrosi.it",187],["tattle.life",188],["emuenzen.de",188],["terrylove.com",188],["cidade.iol.pt",190],["fantacalcio.it",191],["hentaifreak.org",192],["hypebeast.com",193],["krankheiten-simulieren.de",194],["catholic.com",195],["3dmodelshare.org",196],["techinferno.com",197],["ibeconomist.com",198],["bookriot.com",199],["purposegames.com",200],["globo.com",201],["latimes.com",201],["claimrbx.gg",202],["perelki.net",203],["vpn-anbieter-vergleich-test.de",204],["livingincebuforums.com",205],["paperzonevn.com",206],["alltechnerd.com",207],["malaysianwireless.com",208],["erinsakura.com",209],["infofuge.com",209],["freejav.guru",209],["novelmultiverse.com",209],["fritidsmarkedet.dk",210],["maskinbladet.dk",210],["15min.lt",211],["baddiehub.com",212],["mr9soft.com",213],["21porno.com",214],["adult-sex-gamess.com",215],["hentaigames.app",215],["mobilesexgamesx.com",215],["mysexgamer.com",215],["porngameshd.com",215],["sexgamescc.com",215],["xnxx-sex-videos.com",215],["f2movies.to",216],["freeporncave.com",217],["tubsxxx.com",218],["manga18fx.com",219],["freebnbcoin.com",219],["sextvx.com",220],["muztext.com",221],["pornohans.com",222],["nursexfilme.com",222],["pornohirsch.net",222],["xhamster-sexvideos.com",222],["pornoschlange.com",222],["xhamsterdeutsch.*",222],["hdpornos.net",222],["gutesexfilme.com",222],["zona-leros.com",222],["charbelnemnom.com",223],["simplebits.io",224],["online-fix.me",225],["privatemoviez.*",226],["gamersdiscussionhub.com",226],["elahmad.com",227],["owlzo.com",228],["q1003.com",229],["blogpascher.com",230],["testserver.pro",231],["lifestyle.bg",231],["money.bg",231],["news.bg",231],["topsport.bg",231],["webcafe.bg",231],["schoolcheats.net",232],["mgnet.xyz",233],["advertiserandtimes.co.uk",234],["111.90.159.132",235],["techsolveprac.com",236],["joomlabeginner.com",237],["askpaccosi.com",238],["largescaleforums.com",239],["dubznetwork.com",240],["dongknows.com",242],["traderepublic.community",243],["babia.to",244],["code2care.org",245],["gmx.*",246],["yts-subs.net",247],["dlhd.sx",247],["xxxxsx.com",248],["ngontinh24.com",249],["idevicecentral.com",250],["dzeko11.net",251],["mangacrab.com",253],["hortonanderfarom.blogspot.com",254],["viefaucet.com",255],["pourcesoir.in",255],["cloud-computing-central.com",256],["afk.guide",257],["businessnamegenerator.com",258],["derstandard.at",259],["derstandard.de",259],["rocketnews24.com",260],["soranews24.com",260],["youpouch.com",260],["gourmetscans.net",261],["ilsole24ore.com",262],["ipacrack.com",263],["infokik.com",264],["porhubvideo.com",265],["webseriessex.com",265],["panuvideo.com",265],["pornktubes.net",265],["daemonanime.net",266],["bgmateriali.com",266],["deezer.com",267],["fosslinux.com",268],["shrdsk.me",269],["examword.com",270],["sempreupdate.com.br",270],["tribuna.com",271],["trendsderzukunft.de",272],["gal-dem.com",272],["lostineu.eu",272],["oggitreviso.it",272],["speisekarte.de",272],["mixed.de",272],["lightnovelspot.com",[273,274]],["novelpub.com",[273,274]],["webnovelpub.com",[273,274]],["hwzone.co.il",276],["nammakalvi.com",277],["igay69.com",277],["c2g.at",278],["terafly.me",278],["elamigos-games.com",278],["elamigos-games.net",278],["elamigosgames.org",278],["dktechnicalmate.com",279],["recipahi.com",279],["vpntester.org",280],["digitask.ru",282],["tempumail.com",283],["sexvideos.host",284],["camcaps.*",285],["10alert.com",286],["cryptstream.de",287],["nydus.org",287],["techhelpbd.com",288],["fapdrop.com",289],["cellmapper.net",290],["hdrez.com",291],["youwatch-serie.com",291],["russland.jetzt",291],["printablecreative.com",292],["peachprintable.com",292],["comohoy.com",293],["leak.sx",293],["paste.bin.sx",293],["pornleaks.in",293],["merlininkazani.com",293],["j91.asia",294],["rekidai-info.github.io",295],["jeniusplay.com",296],["indianyug.com",297],["rgb.vn",297],["needrom.com",298],["criptologico.com",299],["megadrive-emulator.com",300],["eromanga-show.com",301],["hentai-one.com",301],["hentaipaw.com",301],["10minuteemails.com",302],["luxusmail.org",302],["w3cub.com",303],["bangpremier.com",304],["nyaa.iss.ink",305],["drivebot.*",306],["thenextplanet1.*",307],["tnp98.xyz",307],["client.falixnodes.net",308],["techedubyte.com",309],["tickzoo.tv",310],["oploverz.*",310],["memedroid.com",311],["karaoketexty.cz",312],["filmizlehdfilm.com",313],["filmizletv.*",313],["fullfilmizle.cc",313],["gofilmizle.net",313],["resortcams.com",314],["cheatography.com",314],["sonixgvn.net",315],["autoscout24.*",316],["mjakmama24.pl",317],["cheatermad.com",318],["ville-ideale.fr",319],["brainly.*",320],["eodev.com",320],["xfreehd.com",321],["freethesaurus.com",322],["thefreedictionary.com",322],["fm-arena.com",323],["tradersunion.com",324],["tandess.com",325],["allosurf.net",325],["spontacts.com",326],["dankmemer.lol",327],["getexploits.com",328],["fplstatistics.com",329],["breitbart.com",330],["salidzini.lv",331],["cryptorank.io",[332,333]],["4kwebplay.xyz",334],["qqwebplay.xyz",334],["viwlivehdplay.ru",334],["molbiotools.com",335],["vods.tv",336],["18xxx.xyz",337],["raidrush.net",338],["xnxxcom.xyz",339],["videzz.net",340],["spambox.xyz",341],["dreamdth.com",342],["freemodsapp.in",342],["onlytech.com",342],["player.jeansaispasplus.homes",343],["en-thunderscans.com",344],["infinityscans.xyz",345],["infinityscans.net",345],["infinityscans.org",345],["iqksisgw.xyz",346],["caroloportunidades.com.br",347],["coempregos.com.br",347],["foodiesgallery.com",347],["vikatan.com",348],["camhub.world",349],["mma-core.*",350],["teracourses.com",351],["servustv.com",352],["freevipservers.net",353],["streambtw.com",354],["qrcodemonkey.net",355],["streamup.ws",356],["tv-films.co.uk",357],["cool--web-de.translate.goog",[358,359]],["gps--cache-de.translate.goog",[358,359]],["web--spiele-de.translate.goog",[358,359]],["fun--seiten-de.translate.goog",[358,359]],["photo--alben-de.translate.goog",[358,359]],["wetter--vorhersage-de.translate.goog",[358,359]],["coolsoftware-de.translate.goog",[358,359]],["kryptografie-de.translate.goog",[358,359]],["cool--domains-de.translate.goog",[358,359]],["net--tours-de.translate.goog",[358,359]],["such--maschine-de.translate.goog",[358,359]],["qul-de.translate.goog",[358,359]],["mailtool-de.translate.goog",[358,359]],["c--ix-de.translate.goog",[358,359]],["softwareengineer-de.translate.goog",[358,359]],["net--tools-de.translate.goog",[358,359]],["hilfen-de.translate.goog",[358,359]],["45er-de.translate.goog",[358,359]],["cooldns-de.translate.goog",[358,359]],["hardware--entwicklung-de.translate.goog",[358,359]],["bgsi.gg",360],["friv.com",361],["tdtnews.com",362]]);
const exceptionsMap = new Map([["vvid30c.*",[136]]]);
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
