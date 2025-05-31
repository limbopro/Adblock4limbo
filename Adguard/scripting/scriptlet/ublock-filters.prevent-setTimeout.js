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
const argsList = [["innerHTML"],["]();}","500"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["documentElement.innerHTML"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["alert","2000"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["appendChild"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["offsetHeight"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["mfp"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["myTestAd"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["afterOpen"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["","10000-15000"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["()","5000"],["wbDeadHinweis"],["","10000"],["fired"]];
const hostnamesMap = new Map([["japscan.lol",[0,276]],["ftlauderdalebeachcam.com",0],["ftlauderdalewebcam.com",0],["juneauharborwebcam.com",0],["keywestharborwebcam.com",0],["kittycatcam.com",0],["mahobeachcam.com",0],["miamiairportcam.com",0],["morganhillwebcam.com",0],["njwildlifecam.com",0],["nyharborwebcam.com",0],["paradiseislandcam.com",0],["pompanobeachcam.com",0],["portbermudawebcam.com",0],["portcanaveralwebcam.com",0],["portevergladeswebcam.com",0],["portmiamiwebcam.com",0],["portnywebcam.com",0],["portnassauwebcam.com",0],["portstmaartenwebcam.com",0],["portstthomaswebcam.com",0],["porttampawebcam.com",0],["sxmislandcam.com",0],["themes-dl.com",0],["badassdownloader.com",0],["badasshardcore.com",0],["badassoftcore.com",0],["nulljungle.com",0],["teevee.asia",0],["otakukan.com",0],["poophq.com",1],["veev.to",1],["infinityscans.xyz",2],["infinityscans.net",2],["infinityscans.org",2],["dogdrip.net",3],["infinityfree.com",3],["smsonline.cloud",[3,4]],["faqwiki.us",5],["mail.yahoo.com",[6,270]],["maxcheaters.com",6],["postimees.ee",6],["police.community",6],["gisarea.com",6],["schaken-mods.com",6],["tvnet.lv",6],["theclashify.com",6],["txori.com",6],["olarila.com",6],["deletedspeedstreams.blogspot.com",6],["schooltravelorganiser.com",6],["xhardhempus.net",6],["mhn.quest",6],["leagueofgraphs.com",6],["hieunguyenphoto.com",6],["benzinpreis.de",6],["lastampa.it",7],["m.timesofindia.com",8],["timesofindia.indiatimes.com",8],["youmath.it",8],["redensarten-index.de",8],["lesoir.be",8],["electriciansforums.net",8],["keralatelecom.info",8],["universegunz.net",8],["happypenguin.altervista.org",8],["everyeye.it",8],["eztv.*",8],["bluedrake42.com",8],["supermarioemulator.com",8],["futbollibrehd.com",8],["eska.pl",8],["eskarock.pl",8],["voxfm.pl",8],["mathaeser.de",8],["betaseries.com",8],["free-sms-receive.com",8],["sms-receive-online.com",8],["computer76.ru",8],["golem.de",[9,10,154]],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["sushi-scan.*",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["seriesperu.com",10],["spigotunlocked.*",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,245]],["topsporter.net",[10,245]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["ahmedmode.*",10],["mobilkulup.com",10],["esopress.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["starleaks.org",10],["forum-xiaomi.com",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,67]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["yts.*",13],["720pstream.*",13],["1stream.*",13],["tutele.sx",13],["seattletimes.com",14],["bestgames.com",15],["yiv.com",15],["globalrph.com",16],["e-glossa.it",17],["webcheats.com.br",18],["urlcero.*",19],["gala.fr",20],["gentside.com",20],["geo.fr",20],["hbrfrance.fr",20],["nationalgeographic.fr",20],["ohmymag.com",20],["serengo.net",20],["vsd.fr",20],["short.pe",21],["thefmovies.*",21],["footystreams.net",21],["katestube.com",21],["updato.com",[22,37]],["totaldebrid.*",23],["sandrives.*",23],["daizurin.com",23],["pendekarsubs.us",23],["dreamfancy.org",23],["rysafe.blogspot.com",23],["techacode.com",23],["toppng.com",23],["th-world.com",23],["avjamack.com",23],["avjamak.net",23],["cnnamador.com",24],["nudecelebforum.com",25],["pronpic.org",26],["thewebflash.com",27],["discordfastfood.com",27],["xup.in",27],["popularmechanics.com",28],["op.gg",29],["comunidadgzone.es",30],["fxporn69.*",30],["mp3fy.com",30],["lebensmittelpraxis.de",30],["aliancapes.*",30],["ebookdz.com",30],["forum-pokemon-go.fr",30],["praxis-jugendarbeit.de",30],["dictionnaire-medical.net",30],["cle0desktop.blogspot.com",30],["up-load.io",30],["keysbrasil.blogspot.com",30],["hotpress.info",30],["turkleech.com",30],["anibatch.me",30],["anime-i.com",30],["gewinde-normen.de",30],["tucinehd.com",30],["plex-guide.de",30],["kdramasmaza.com.pk",30],["jellynote.com",31],["pouvideo.*",32],["povvideo.*",32],["povw1deo.*",32],["povwideo.*",32],["powv1deo.*",32],["powvibeo.*",32],["powvideo.*",32],["powvldeo.*",32],["eporner.com",33],["pornbimbo.com",34],["4j.com",34],["avoiderrors.com",35],["sitarchive.com",35],["livenewsof.com",35],["topnewsshow.com",35],["gatcha.org",35],["kusonime.com",35],["suicidepics.com",35],["codesnail.com",35],["codingshiksha.com",35],["graphicux.com",35],["citychilli.com",35],["talkjarvis.com",35],["hdmotori.it",36],["tubsexer.*",38],["femdomtb.com",38],["porno-tour.*",38],["lenkino.*",38],["bobs-tube.com",38],["pornfd.com",38],["pornomoll.*",38],["camsclips.*",38],["popno-tour.net",38],["watchmdh.to",38],["camwhores.tv",38],["camhub.cc",38],["elfqrin.com",39],["satcesc.com",40],["apfelpatient.de",40],["lusthero.com",41],["m4ufree.*",42],["m2list.com",42],["embed.nana2play.com",42],["elahmad.com",42],["dofusports.xyz",42],["dallasnews.com",43],["lnk.news",44],["lnk.parts",44],["efukt.com",45],["wendycode.com",45],["springfieldspringfield.co.uk",46],["porndoe.com",47],["smsget.net",[48,49]],["kjanime.net",50],["gioialive.it",51],["classicreload.com",52],["scriptzhub.com",52],["hotpornfile.org",53],["coolsoft.altervista.org",53],["hackedonlinegames.com",53],["dailytech-news.eu",53],["settlersonlinemaps.com",53],["ad-doge.com",53],["magdownload.org",53],["kpkuang.org",53],["crypto4yu.com",53],["faucetwork.space",53],["writedroid.*",53],["thenightwithoutthedawn.blogspot.com",53],["entutes.com",53],["claimlite.club",53],["newscon.org",53],["rl6mans.com",53],["chicoer.com",54],["bostonherald.com",54],["dailycamera.com",54],["sportsplays.com",55],["telerium.*",56],["pornvideotop.com",57],["krotkoosporcie.pl",57],["xstory-fr.com",57],["1337x.*",57],["x1337x.*",57],["1337x.ninjaproxy1.com",57],["ytapi.cc",57],["letribunaldunet.fr",58],["vladan.fr",58],["live-tv-channels.org",59],["eslfast.com",60],["ge-map-overlays.appspot.com",61],["mad4wheels.com",61],["1xanimes.in",61],["logi.im",61],["emailnator.com",61],["freegamescasual.com",62],["tcpvpn.com",63],["oko.sh",63],["timesnownews.com",63],["timesnowhindi.com",63],["timesnowmarathi.com",63],["zoomtventertainment.com",63],["tsubasa.im",64],["sholah.net",65],["2rdroid.com",65],["bisceglielive.it",66],["pandajogosgratis.com.br",68],["5278.cc",69],["pandafreegames.*",70],["tonspion.de",71],["duplichecker.com",72],["plagiarismchecker.co",72],["plagiarismdetector.net",72],["searchenginereports.net",72],["smallseotools.com",73],["linkspaid.com",74],["proxydocker.com",74],["beeimg.com",[75,76]],["emturbovid.com",76],["findjav.com",76],["javggvideo.xyz",76],["mmtv01.xyz",76],["stbturbo.xyz",76],["streamsilk.com",76],["thoptv.*",77],["gearingcommander.com",78],["generate.plus",79],["calculate.plus",79],["avcesar.com",80],["audiotag.info",81],["tudigitale.it",82],["ibcomputing.com",83],["legia.net",84],["acapellas4u.co.uk",85],["robloxscripts.com",86],["libreriamo.it",86],["postazap.com",86],["medebooks.xyz",86],["mashtips.com",86],["marriedgames.com.br",86],["4allprograms.me",86],["shortzzy.*",86],["nurgsm.com",86],["certbyte.com",86],["plugincrack.com",86],["gamingdeputy.com",86],["freewebcart.com",86],["streamhentaimovies.com",87],["konten.co.id",88],["diariodenavarra.es",89],["scripai.com",89],["myfxbook.com",89],["whatfontis.com",89],["tubereader.me",89],["optifine.net",90],["luzernerzeitung.ch",91],["tagblatt.ch",91],["ableitungsrechner.net",92],["alternet.org",93],["gourmetsupremacy.com",93],["shrib.com",94],["streameast.*",95],["thestreameast.*",95],["coolcast2.com",95],["techclips.net",95],["daddylivehd.*",95],["footyhunter.lol",95],["poscitech.click",95],["wecast.to",95],["sportbar.live",95],["freecourseweb.com",96],["devcourseweb.com",96],["coursewikia.com",96],["courseboat.com",96],["coursehulu.com",96],["pornhub.*",97],["lne.es",98],["pornult.com",99],["webcamsdolls.com",99],["bitcotasks.com",[99,140]],["adsy.pw",99],["playstore.pw",99],["exactpay.online",99],["thothd.to",99],["proplanta.de",100],["textograto.com",101],["voyageforum.com",102],["hmc-id.blogspot.com",102],["myabandonware.com",102],["wcofun.*",102],["ilforumdeibrutti.is",102],["prad.de",[103,154]],["chatta.it",104],["ketubanjiwa.com",105],["nsfw247.to",106],["funzen.net",106],["ilclubdellericette.it",106],["bollyholic.*",106],["extremereportbot.com",107],["getintopc.com",108],["qoshe.com",109],["lowellsun.com",110],["mamadu.pl",110],["dobrapogoda24.pl",110],["motohigh.pl",110],["namasce.pl",110],["ultimate-catch.eu",111],["cpopchanelofficial.com",112],["creditcardgenerator.com",113],["creditcardrush.com",113],["bostoncommons.net",113],["thejobsmovie.com",113],["hl-live.de",114],["satoshi-win.xyz",114],["encurtandourl.com",[114,118]],["www-daftarharga.blogspot.com",114],["ear-phone-review.com",114],["telefullenvivo.com",114],["listatv.pl",114],["daemon-hentai.com",[114,261]],["coin-profits.xyz",114],["relampagomovies.com",114],["wohnmobilforum.de",114],["nulledbear.com",114],["sinnerclownceviri.net",114],["nilopolisonline.com.br",115],["mesquitaonline.com",115],["yellowbridge.com",115],["yaoiotaku.com",116],["moneyhouse.ch",117],["ihow.info",118],["filesus.com",118],["gotxx.*",118],["sturls.com",118],["turbo1.co",118],["hartico.tv",118],["cupra.forum",118],["turkanime.*",119],["valeronevijao.com",119],["cigarlessarefy.com",119],["figeterpiazine.com",119],["yodelswartlike.com",119],["generatesnitrosate.com",119],["crownmakermacaronicism.com",119],["chromotypic.com",119],["gamoneinterrupted.com",119],["metagnathtuggers.com",119],["wolfdyslectic.com",119],["rationalityaloelike.com",119],["sizyreelingly.com",119],["simpulumlamerop.com",119],["urochsunloath.com",119],["monorhinouscassaba.com",119],["counterclockwisejacky.com",119],["35volitantplimsoles5.com",119],["scatch176duplicities.com",119],["antecoxalbobbing1010.com",119],["boonlessbestselling244.com",119],["cyamidpulverulence530.com",119],["guidon40hyporadius9.com",119],["449unceremoniousnasoseptal.com",119],["19turanosephantasia.com",119],["30sensualizeexpression.com",119],["321naturelikefurfuroid.com",119],["745mingiestblissfully.com",119],["availedsmallest.com",119],["greaseball6eventual20.com",119],["toxitabellaeatrebates306.com",119],["20demidistance9elongations.com",119],["audaciousdefaulthouse.com",119],["fittingcentermondaysunday.com",119],["fraudclatterflyingcar.com",119],["launchreliantcleaverriver.com",119],["matriculant401merited.com",119],["realfinanceblogcenter.com",119],["reputationsheriffkennethsand.com",119],["telyn610zoanthropy.com",119],["tubelessceliolymph.com",119],["tummulerviolableness.com",119],["un-block-voe.net",119],["v-o-e-unblock.com",119],["voe-un-block.com",119],["voe-unblock.*",119],["voeun-block.net",119],["voeunbl0ck.com",119],["voeunblck.com",119],["voeunblk.com",119],["voeunblock.com",119],["voeunblock1.com",119],["voeunblock2.com",119],["voeunblock3.com",119],["agefi.fr",120],["cariskuy.com",121],["letras2.com",121],["yusepjaelani.blogspot.com",122],["letras.mus.br",123],["eletronicabr.com",124],["mtlurb.com",125],["onemanhua.com",126],["laksa19.github.io",127],["javcl.com",127],["tvlogy.to",127],["rp5.*",127],["live.dragaoconnect.net",127],["beststremo.com",127],["seznamzpravy.cz",127],["xerifetech.com",127],["freemcserver.net",127],["t3n.de",128],["allindiaroundup.com",129],["tapchipi.com",130],["dcleakers.com",130],["esgeeks.com",130],["pugliain.net",130],["uplod.net",130],["worldfreeware.com",130],["cuitandokter.com",130],["tech-blogs.com",130],["cardiagn.com",130],["fikiri.net",130],["myhackingworld.com",130],["phoenixfansub.com",130],["vectorizer.io",131],["onehack.us",131],["smgplaza.com",131],["thapcam.net",131],["breznikar.com",131],["thefastlaneforum.com",132],["trade2win.com",133],["modagamers.com",134],["khatrimaza.*",134],["freemagazines.top",134],["pogolinks.*",134],["straatosphere.com",134],["nullpk.com",134],["adslink.pw",134],["downloadudemy.com",134],["picgiraffe.com",134],["weadown.com",134],["freepornsex.net",134],["nurparatodos.com.ar",134],["popcornstream.*",135],["routech.ro",135],["hokej.net",135],["turkmmo.com",136],["acdriftingpro.com",137],["palermotoday.it",138],["baritoday.it",138],["trentotoday.it",138],["agrigentonotizie.it",138],["anconatoday.it",138],["arezzonotizie.it",138],["avellinotoday.it",138],["bresciatoday.it",138],["brindisireport.it",138],["casertanews.it",138],["cataniatoday.it",138],["cesenatoday.it",138],["chietitoday.it",138],["forlitoday.it",138],["frosinonetoday.it",138],["genovatoday.it",138],["ilpescara.it",138],["ilpiacenza.it",138],["latinatoday.it",138],["lecceprima.it",138],["leccotoday.it",138],["livornotoday.it",138],["messinatoday.it",138],["milanotoday.it",138],["modenatoday.it",138],["monzatoday.it",138],["novaratoday.it",138],["padovaoggi.it",138],["parmatoday.it",138],["perugiatoday.it",138],["pisatoday.it",138],["quicomo.it",138],["ravennatoday.it",138],["reggiotoday.it",138],["riminitoday.it",138],["romatoday.it",138],["salernotoday.it",138],["sondriotoday.it",138],["sportpiacenza.it",138],["ternitoday.it",138],["today.it",138],["torinotoday.it",138],["trevisotoday.it",138],["triesteprima.it",138],["udinetoday.it",138],["veneziatoday.it",138],["vicenzatoday.it",138],["thumpertalk.com",139],["arkcod.org",139],["thelayoff.com",140],["blog.coinsrise.net",140],["blog.cryptowidgets.net",140],["blog.insurancegold.in",140],["blog.wiki-topia.com",140],["blog.coinsvalue.net",140],["blog.cookinguide.net",140],["blog.freeoseocheck.com",140],["blog.makeupguide.net",140],["blog.carstopia.net",140],["blog.carsmania.net",140],["shorterall.com",140],["blog24.me",140],["maxstream.video",140],["tvepg.eu",140],["manwan.xyz",140],["dailymaverick.co.za",141],["ludigames.com",142],["made-by.org",142],["worldtravelling.com",142],["igirls.in",142],["technichero.com",142],["androidadult.com",142],["aeroxplorer.com",142],["sportitalialive.com",142],["infomatricula.pt",142],["starkroboticsfrc.com",143],["sinonimos.de",143],["antonimos.de",143],["quesignifi.ca",143],["tiktokrealtime.com",143],["tiktokcounter.net",143],["tpayr.xyz",143],["poqzn.xyz",143],["ashrfd.xyz",143],["rezsx.xyz",143],["tryzt.xyz",143],["ashrff.xyz",143],["rezst.xyz",143],["dawenet.com",143],["erzar.xyz",143],["waezm.xyz",143],["waezg.xyz",143],["blackwoodacademy.org",143],["cryptednews.space",143],["vivuq.com",143],["swgop.com",143],["vbnmll.com",143],["telcoinfo.online",143],["dshytb.com",143],["fadedfeet.com",144],["homeculina.com",144],["ineedskin.com",144],["kenzo-flowertag.com",144],["lawyex.co",144],["mdn.lol",144],["bitzite.com",145],["coingraph.us",146],["impact24.us",146],["nanolinks.in",147],["adrinolinks.com",147],["link.vipurl.in",147],["www.apkmoddone.com",148],["sitemini.io.vn",149],["vip1s.top",149],["dl.apkmoddone.com",150],["phongroblox.com",150],["financacerta.com",151],["encurtads.net",151],["shortencash.click",152],["lablue.*",153],["4-liga.com",154],["4fansites.de",154],["4players.de",154],["9monate.de",154],["aachener-nachrichten.de",154],["aachener-zeitung.de",154],["abendblatt.de",154],["abendzeitung-muenchen.de",154],["about-drinks.com",154],["abseits-ka.de",154],["airliners.de",154],["ajaxshowtime.com",154],["allgemeine-zeitung.de",154],["alpin.de",154],["antenne.de",154],["arcor.de",154],["areadvd.de",154],["areamobile.de",154],["ariva.de",154],["astronews.com",154],["aussenwirtschaftslupe.de",154],["auszeit.bio",154],["auto-motor-und-sport.de",154],["auto-service.de",154],["autobild.de",154],["autoextrem.de",154],["autopixx.de",154],["autorevue.at",154],["autotrader.nl",154],["az-online.de",154],["baby-vornamen.de",154],["babyclub.de",154],["bafoeg-aktuell.de",154],["berliner-kurier.de",154],["berliner-zeitung.de",154],["bigfm.de",154],["bikerszene.de",154],["bildderfrau.de",154],["blackd.de",154],["blick.de",154],["boerse-online.de",154],["boerse.de",154],["boersennews.de",154],["braunschweiger-zeitung.de",154],["brieffreunde.de",154],["brigitte.de",154],["buerstaedter-zeitung.de",154],["buffed.de",154],["businessinsider.de",154],["buzzfeed.at",154],["buzzfeed.de",154],["caravaning.de",154],["cavallo.de",154],["chefkoch.de",154],["cinema.de",154],["clever-tanken.de",154],["computerbild.de",154],["computerhilfen.de",154],["comunio-cl.com",154],["comunio.*",154],["connect.de",154],["chip.de",154],["da-imnetz.de",154],["dasgelbeblatt.de",154],["dbna.com",154],["dbna.de",154],["deichstube.de",154],["deine-tierwelt.de",154],["der-betze-brennt.de",154],["derwesten.de",154],["desired.de",154],["dhd24.com",154],["dieblaue24.com",154],["digitalfernsehen.de",154],["dnn.de",154],["donnerwetter.de",154],["e-hausaufgaben.de",154],["e-mountainbike.com",154],["eatsmarter.de",154],["echo-online.de",154],["ecomento.de",154],["einfachschoen.me",154],["elektrobike-online.com",154],["eltern.de",154],["epochtimes.de",154],["essen-und-trinken.de",154],["express.de",154],["extratipp.com",154],["familie.de",154],["fanfiktion.de",154],["fehmarn24.de",154],["fettspielen.de",154],["fid-gesundheitswissen.de",154],["finanzen.*",154],["finanznachrichten.de",154],["finanztreff.de",154],["finya.de",154],["firmenwissen.de",154],["fitforfun.de",154],["fnp.de",154],["football365.fr",154],["formel1.de",154],["fr.de",154],["frankfurter-wochenblatt.de",154],["freenet.de",154],["fremdwort.de",154],["froheweihnachten.info",154],["frustfrei-lernen.de",154],["fuldaerzeitung.de",154],["funandnews.de",154],["fussballdaten.de",154],["futurezone.de",154],["gala.de",154],["gamepro.de",154],["gamersglobal.de",154],["gamesaktuell.de",154],["gamestar.de",154],["gameswelt.*",154],["gamezone.de",154],["gartendialog.de",154],["gartenlexikon.de",154],["gedichte.ws",154],["geissblog.koeln",154],["gelnhaeuser-tageblatt.de",154],["general-anzeiger-bonn.de",154],["geniale-tricks.com",154],["genialetricks.de",154],["gesund-vital.de",154],["gesundheit.de",154],["gevestor.de",154],["gewinnspiele.tv",154],["giessener-allgemeine.de",154],["giessener-anzeiger.de",154],["gifhorner-rundschau.de",154],["giga.de",154],["gipfelbuch.ch",154],["gmuender-tagespost.de",154],["gruenderlexikon.de",154],["gusto.at",154],["gut-erklaert.de",154],["gutfuerdich.co",154],["hallo-muenchen.de",154],["hamburg.de",154],["hanauer.de",154],["hardwareluxx.de",154],["hartziv.org",154],["harzkurier.de",154],["haus-garten-test.de",154],["hausgarten.net",154],["haustec.de",154],["haz.de",154],["heftig.*",154],["heidelberg24.de",154],["heilpraxisnet.de",154],["heise.de",154],["helmstedter-nachrichten.de",154],["hersfelder-zeitung.de",154],["hftg.co",154],["hifi-forum.de",154],["hna.de",154],["hochheimer-zeitung.de",154],["hoerzu.de",154],["hofheimer-zeitung.de",154],["iban-rechner.de",154],["ikz-online.de",154],["immobilienscout24.de",154],["ingame.de",154],["inside-digital.de",154],["inside-handy.de",154],["investor-verlag.de",154],["jappy.com",154],["jpgames.de",154],["kabeleins.de",154],["kachelmannwetter.com",154],["kamelle.de",154],["kicker.de",154],["kindergeld.org",154],["klettern-magazin.de",154],["klettern.de",154],["kochbar.de",154],["kreis-anzeiger.de",154],["kreisbote.de",154],["kreiszeitung.de",154],["ksta.de",154],["kurierverlag.de",154],["lachainemeteo.com",154],["lampertheimer-zeitung.de",154],["landwirt.com",154],["laut.de",154],["lauterbacher-anzeiger.de",154],["leckerschmecker.me",154],["leinetal24.de",154],["lesfoodies.com",154],["levif.be",154],["lifeline.de",154],["liga3-online.de",154],["likemag.com",154],["linux-community.de",154],["linux-magazin.de",154],["live.vodafone.de",154],["ln-online.de",154],["lokalo24.de",154],["lustaufsleben.at",154],["lustich.de",154],["lvz.de",154],["lz.de",154],["mactechnews.de",154],["macwelt.de",154],["macworld.co.uk",154],["mail.de",154],["main-spitze.de",154],["manager-magazin.de",154],["manga-tube.me",154],["mathebibel.de",154],["mathepower.com",154],["maz-online.de",154],["medisite.fr",154],["mehr-tanken.de",154],["mein-kummerkasten.de",154],["mein-mmo.de",154],["mein-wahres-ich.de",154],["meine-anzeigenzeitung.de",154],["meinestadt.de",154],["menshealth.de",154],["mercato365.com",154],["merkur.de",154],["messen.de",154],["metal-hammer.de",154],["metalflirt.de",154],["meteologix.com",154],["minecraft-serverlist.net",154],["mittelbayerische.de",154],["modhoster.de",154],["moin.de",154],["mopo.de",154],["morgenpost.de",154],["motor-talk.de",154],["motorbasar.de",154],["motorradonline.de",154],["motorsport-total.com",154],["motortests.de",154],["mountainbike-magazin.de",154],["moviejones.de",154],["moviepilot.de",154],["mt.de",154],["mtb-news.de",154],["musiker-board.de",154],["musikexpress.de",154],["musikradar.de",154],["mz-web.de",154],["n-tv.de",154],["naumburger-tageblatt.de",154],["netzwelt.de",154],["neuepresse.de",154],["neueroeffnung.info",154],["news.at",154],["news.de",154],["news38.de",154],["newsbreak24.de",154],["nickles.de",154],["nicknight.de",154],["nl.hardware.info",154],["nn.de",154],["nnn.de",154],["nordbayern.de",154],["notebookchat.com",154],["notebookcheck-ru.com",154],["notebookcheck-tr.com",154],["notebookcheck.*",154],["noz-cdn.de",154],["noz.de",154],["nrz.de",154],["nw.de",154],["nwzonline.de",154],["oberhessische-zeitung.de",154],["och.to",154],["oeffentlicher-dienst.info",154],["onlinekosten.de",154],["onvista.de",154],["op-marburg.de",154],["op-online.de",154],["outdoor-magazin.com",154],["outdoorchannel.de",154],["paradisi.de",154],["pc-magazin.de",154],["pcgames.de",154],["pcgameshardware.de",154],["pcwelt.de",154],["pcworld.es",154],["peiner-nachrichten.de",154],["pferde.de",154],["pietsmiet.de",154],["pixelio.de",154],["pkw-forum.de",154],["playboy.de",154],["playfront.de",154],["pnn.de",154],["pons.com",154],["prignitzer.de",154],["profil.at",154],["promipool.de",154],["promobil.de",154],["prosiebenmaxx.de",154],["psychic.de",[154,168]],["quoka.de",154],["radio.at",154],["radio.de",154],["radio.dk",154],["radio.es",154],["radio.fr",154],["radio.it",154],["radio.net",154],["radio.pl",154],["radio.pt",154],["radio.se",154],["ran.de",154],["readmore.de",154],["rechtslupe.de",154],["recording.de",154],["rennrad-news.de",154],["reuters.com",154],["reviersport.de",154],["rhein-main-presse.de",154],["rheinische-anzeigenblaetter.de",154],["rimondo.com",154],["roadbike.de",154],["roemische-zahlen.net",154],["rollingstone.de",154],["rot-blau.com",154],["rp-online.de",154],["rtl.de",[154,246]],["rtv.de",154],["rugby365.fr",154],["ruhr24.de",154],["rundschau-online.de",154],["runnersworld.de",154],["safelist.eu",154],["salzgitter-zeitung.de",154],["sat1.de",154],["sat1gold.de",154],["schoener-wohnen.de",154],["schwaebische-post.de",154],["schwarzwaelder-bote.de",154],["serienjunkies.de",154],["shz.de",154],["sixx.de",154],["skodacommunity.de",154],["smart-wohnen.net",154],["sn.at",154],["sozialversicherung-kompetent.de",154],["spiegel.de",154],["spielen.de",154],["spieletipps.de",154],["spielfilm.de",154],["sport.de",154],["sport1.de",154],["sport365.fr",154],["sportal.de",154],["spox.com",154],["stern.de",154],["stuttgarter-nachrichten.de",154],["stuttgarter-zeitung.de",154],["sueddeutsche.de",154],["svz.de",154],["szene1.at",154],["szene38.de",154],["t-online.de",154],["tagesspiegel.de",154],["taschenhirn.de",154],["techadvisor.co.uk",154],["techstage.de",154],["tele5.de",154],["teltarif.de",154],["testedich.*",154],["the-voice-of-germany.de",154],["thueringen24.de",154],["tichyseinblick.de",154],["tierfreund.co",154],["tiervermittlung.de",154],["torgranate.de",154],["transfermarkt.*",154],["trend.at",154],["truckscout24.*",154],["tv-media.at",154],["tvdigital.de",154],["tvinfo.de",154],["tvspielfilm.de",154],["tvtoday.de",154],["tvtv.*",154],["tz.de",[154,167]],["unicum.de",154],["unnuetzes.com",154],["unsere-helden.com",154],["unterhalt.net",154],["usinger-anzeiger.de",154],["usp-forum.de",154],["videogameszone.de",154],["vienna.at",154],["vip.de",154],["virtualnights.com",154],["vox.de",154],["wa.de",154],["wallstreet-online.de",[154,157]],["waz.de",154],["weather.us",154],["webfail.com",154],["weihnachten.me",154],["weihnachts-bilder.org",154],["weihnachts-filme.com",154],["welt.de",154],["weltfussball.at",154],["weristdeinfreund.de",154],["werkzeug-news.de",154],["werra-rundschau.de",154],["wetterauer-zeitung.de",154],["wetteronline.*",154],["wieistmeineip.*",154],["wiesbadener-kurier.de",154],["wiesbadener-tagblatt.de",154],["winboard.org",154],["windows-7-forum.net",154],["winfuture.de",[154,163]],["wintotal.de",154],["wlz-online.de",154],["wn.de",154],["wohngeld.org",154],["wolfenbuetteler-zeitung.de",154],["wolfsburger-nachrichten.de",154],["woman.at",154],["womenshealth.de",154],["wormser-zeitung.de",154],["woxikon.de",154],["wp.de",154],["wr.de",154],["wunderweib.de",154],["yachtrevue.at",154],["ze.tt",154],["zeit.de",154],["meineorte.com",155],["osthessen-news.de",155],["techadvisor.com",155],["focus.de",155],["wetter.*",156],["deinesexfilme.com",158],["einfachtitten.com",158],["lesbenhd.com",158],["milffabrik.com",[158,217]],["porn-monkey.com",158],["porndrake.com",158],["pornhubdeutsch.net",158],["pornoaffe.com",158],["pornodavid.com",158],["pornoente.tv",[158,217]],["pornofisch.com",158],["pornofelix.com",158],["pornohammer.com",158],["pornohelm.com",158],["pornoklinge.com",158],["pornotom.com",[158,217]],["pornotommy.com",158],["pornovideos-hd.com",158],["pornozebra.com",[158,217]],["xhamsterdeutsch.xyz",158],["xnxx-sexfilme.com",158],["nu6i-bg-net.com",159],["khsm.io",159],["webcreator-journal.com",159],["msdos-games.com",159],["blocklayer.com",159],["weknowconquer.com",159],["giff.cloud",159],["aquarius-horoscopes.com",160],["cancer-horoscopes.com",160],["dubipc.blogspot.com",160],["echoes.gr",160],["engel-horoskop.de",160],["freegames44.com",160],["fuerzasarmadas.eu",160],["gemini-horoscopes.com",160],["jurukunci.net",160],["krebs-horoskop.com",160],["leo-horoscopes.com",160],["maliekrani.com",160],["nklinks.click",160],["ourenseando.es",160],["pisces-horoscopes.com",160],["radio-en-direct.fr",160],["sagittarius-horoscopes.com",160],["scorpio-horoscopes.com",160],["singlehoroskop-loewe.de",160],["skat-karten.de",160],["skorpion-horoskop.com",160],["taurus-horoscopes.com",160],["the1security.com",160],["virgo-horoscopes.com",160],["zonamarela.blogspot.com",160],["yoima.hatenadiary.com",160],["kaystls.site",161],["ftuapps.dev",162],["studydhaba.com",162],["freecourse.tech",162],["victor-mochere.com",162],["papunika.com",162],["mobilanyheter.net",162],["prajwaldesai.com",[162,235]],["carscoops.com",163],["dziennik.pl",163],["eurointegration.com.ua",163],["flatpanelshd.com",163],["hoyme.jp",163],["issuya.com",163],["itainews.com",163],["iusm.co.kr",163],["logicieleducatif.fr",163],["mynet.com",[163,184]],["onlinegdb.com",163],["picrew.me",163],["pravda.com.ua",163],["reportera.co.kr",163],["sportsrec.com",163],["sportsseoul.com",163],["text-compare.com",163],["tweaksforgeeks.com",163],["wfmz.com",163],["worldhistory.org",163],["palabr.as",163],["motscroises.fr",163],["cruciverba.it",163],["w.grapps.me",163],["gazetaprawna.pl",163],["pressian.com",163],["raenonx.cc",[163,262]],["indiatimes.com",163],["missyusa.com",163],["aikatu.jp",163],["ark-unity.com",163],["cool-style.com.tw",163],["doanhnghiepvn.vn",163],["automobile-catalog.com",164],["motorbikecatalog.com",164],["maketecheasier.com",164],["mlbpark.donga.com",165],["jjang0u.com",166],["forumdz.com",168],["abandonmail.com",168],["flmods.com",168],["zilinak.sk",168],["hotdesimms.com",168],["pdfaid.com",168],["bootdey.com",168],["mail.com",168],["expresskaszubski.pl",168],["moegirl.org.cn",168],["flix-wave.lol",168],["fmovies0.cc",168],["worthcrete.com",168],["my-code4you.blogspot.com",169],["vrcmods.com",170],["osuskinner.com",170],["osuskins.net",170],["pentruea.com",[171,172]],["mchacks.net",173],["why-tech.it",174],["compsmag.com",175],["tapetus.pl",176],["autoroad.cz",177],["brawlhalla.fr",177],["tecnobillo.com",177],["sexcamfreeporn.com",178],["breatheheavy.com",179],["wenxuecity.com",180],["key-hub.eu",181],["fabioambrosi.it",182],["tattle.life",183],["emuenzen.de",183],["terrylove.com",183],["cidade.iol.pt",185],["fantacalcio.it",186],["hentaifreak.org",187],["hypebeast.com",188],["krankheiten-simulieren.de",189],["catholic.com",190],["3dmodelshare.org",191],["techinferno.com",192],["ibeconomist.com",193],["bookriot.com",194],["purposegames.com",195],["globo.com",196],["latimes.com",196],["claimrbx.gg",197],["perelki.net",198],["vpn-anbieter-vergleich-test.de",199],["livingincebuforums.com",200],["paperzonevn.com",201],["alltechnerd.com",202],["malaysianwireless.com",203],["erinsakura.com",204],["infofuge.com",204],["freejav.guru",204],["novelmultiverse.com",204],["fritidsmarkedet.dk",205],["maskinbladet.dk",205],["15min.lt",206],["baddiehub.com",207],["mr9soft.com",208],["21porno.com",209],["adult-sex-gamess.com",210],["hentaigames.app",210],["mobilesexgamesx.com",210],["mysexgamer.com",210],["porngameshd.com",210],["sexgamescc.com",210],["xnxx-sex-videos.com",210],["f2movies.to",211],["freeporncave.com",212],["tubsxxx.com",213],["manga18fx.com",214],["freebnbcoin.com",214],["sextvx.com",215],["muztext.com",216],["pornohans.com",217],["nursexfilme.com",217],["pornohirsch.net",217],["xhamster-sexvideos.com",217],["pornoschlange.com",217],["xhamsterdeutsch.*",217],["hdpornos.net",217],["gutesexfilme.com",217],["zona-leros.com",217],["charbelnemnom.com",218],["simplebits.io",219],["online-fix.me",220],["privatemoviez.*",221],["gamersdiscussionhub.com",221],["owlzo.com",222],["q1003.com",223],["blogpascher.com",224],["testserver.pro",225],["lifestyle.bg",225],["money.bg",225],["news.bg",225],["topsport.bg",225],["webcafe.bg",225],["schoolcheats.net",226],["mgnet.xyz",227],["advertiserandtimes.co.uk",228],["111.90.159.132",229],["techsolveprac.com",230],["joomlabeginner.com",231],["askpaccosi.com",232],["largescaleforums.com",233],["dubznetwork.com",234],["dongknows.com",236],["traderepublic.community",237],["babia.to",238],["code2care.org",239],["gmx.*",240],["yts-subs.net",241],["dlhd.sx",241],["xxxxsx.com",242],["ngontinh24.com",243],["idevicecentral.com",244],["dzeko11.net",245],["mangacrab.com",247],["hortonanderfarom.blogspot.com",248],["viefaucet.com",249],["pourcesoir.in",249],["cloud-computing-central.com",250],["afk.guide",251],["businessnamegenerator.com",252],["derstandard.at",253],["derstandard.de",253],["rocketnews24.com",254],["soranews24.com",254],["youpouch.com",254],["gourmetscans.net",255],["ilsole24ore.com",256],["ipacrack.com",257],["hentaiporn.one",258],["infokik.com",259],["porhubvideo.com",260],["webseriessex.com",260],["panuvideo.com",260],["pornktubes.net",260],["daemonanime.net",261],["bgmateriali.com",261],["deezer.com",262],["fosslinux.com",263],["shrdsk.me",264],["examword.com",265],["sempreupdate.com.br",265],["tribuna.com",266],["trendsderzukunft.de",267],["gal-dem.com",267],["lostineu.eu",267],["oggitreviso.it",267],["speisekarte.de",267],["mixed.de",267],["lightnovelpub.*",[268,269]],["lightnovelspot.com",[268,269]],["lightnovelworld.com",[268,269]],["novelpub.com",[268,269]],["webnovelpub.com",[268,269]],["hwzone.co.il",271],["nammakalvi.com",272],["igay69.com",272],["c2g.at",273],["terafly.me",273],["elamigos-games.com",273],["elamigos-games.net",273],["elamigosgames.org",273],["dktechnicalmate.com",274],["recipahi.com",274],["vpntester.org",275],["digitask.ru",277],["tempumail.com",278],["sexvideos.host",279],["camcaps.*",280],["10alert.com",281],["cryptstream.de",282],["nydus.org",282],["techhelpbd.com",283],["fapdrop.com",284],["cellmapper.net",285],["hdrez.com",286],["youwatch-serie.com",286],["russland.jetzt",286],["bembed.net",287],["embedv.net",287],["fslinks.org",287],["listeamed.net",287],["v6embed.xyz",287],["vembed.*",287],["vgplayer.xyz",287],["vid-guard.com",287],["vidguardto.xyz",287],["yesmovies.*>>",287],["pistona.xyz",287],["vinomo.xyz",287],["giga-uqload.xyz",287],["moflix-stream.*",[287,342]],["printablecreative.com",288],["peachprintable.com",288],["comohoy.com",289],["leak.sx",289],["paste.bin.sx",289],["pornleaks.in",289],["merlininkazani.com",289],["j91.asia",290],["rekidai-info.github.io",291],["jeniusplay.com",292],["indianyug.com",293],["rgb.vn",293],["needrom.com",294],["criptologico.com",295],["megadrive-emulator.com",296],["eromanga-show.com",297],["hentai-one.com",297],["hentaipaw.com",297],["10minuteemails.com",298],["luxusmail.org",298],["w3cub.com",299],["bangpremier.com",300],["nyaa.iss.ink",301],["drivebot.*",302],["thenextplanet1.*",303],["tnp98.xyz",303],["freepdfcomic.com",304],["techedubyte.com",305],["tickzoo.tv",306],["oploverz.*",306],["memedroid.com",307],["karaoketexty.cz",308],["filmizlehdfilm.com",309],["filmizletv.*",309],["fullfilmizle.cc",309],["gofilmizle.net",309],["resortcams.com",310],["cheatography.com",310],["sonixgvn.net",311],["autoscout24.*",312],["mjakmama24.pl",313],["cheatermad.com",314],["ville-ideale.fr",315],["brainly.*",316],["eodev.com",316],["xfreehd.com",317],["freethesaurus.com",318],["thefreedictionary.com",318],["fm-arena.com",319],["tradersunion.com",320],["tandess.com",321],["allosurf.net",321],["spontacts.com",322],["dankmemer.lol",323],["getexploits.com",324],["fplstatistics.com",325],["breitbart.com",326],["salidzini.lv",327],["choosingnothing.com",328],["cryptorank.io",[329,330]],["4kwebplay.xyz",331],["qqwebplay.xyz",331],["viwlivehdplay.ru",331],["molbiotools.com",332],["vods.tv",333],["18xxx.xyz",334],["raidrush.net",335],["xnxxcom.xyz",336],["videzz.net",337],["spambox.xyz",338],["dreamdth.com",339],["freemodsapp.in",339],["onlytech.com",339],["player.jeansaispasplus.homes",340],["en-thunderscans.com",341],["iqksisgw.xyz",343],["caroloportunidades.com.br",344],["coempregos.com.br",344],["foodiesgallery.com",344],["vikatan.com",345],["camhub.world",346],["mma-core.*",347],["teracourses.com",348],["servustv.com",349],["freevipservers.net",350],["streambtw.com",351],["qrcodemonkey.net",352],["streamup.ws",353],["tv-films.co.uk",354],["streambolt.tv",355],["strmbolt.com",355],["cool--web-de.translate.goog",[356,357]],["gps--cache-de.translate.goog",[356,357]],["web--spiele-de.translate.goog",[356,357]],["fun--seiten-de.translate.goog",[356,357]],["photo--alben-de.translate.goog",[356,357]],["wetter--vorhersage-de.translate.goog",[356,357]],["coolsoftware-de.translate.goog",[356,357]],["kryptografie-de.translate.goog",[356,357]],["cool--domains-de.translate.goog",[356,357]],["net--tours-de.translate.goog",[356,357]],["such--maschine-de.translate.goog",[356,357]],["qul-de.translate.goog",[356,357]],["mailtool-de.translate.goog",[356,357]],["c--ix-de.translate.goog",[356,357]],["softwareengineer-de.translate.goog",[356,357]],["net--tools-de.translate.goog",[356,357]],["hilfen-de.translate.goog",[356,357]],["45er-de.translate.goog",[356,357]],["cooldns-de.translate.goog",[356,357]],["hardware--entwicklung-de.translate.goog",[356,357]],["bgsi.gg",358]]);
const exceptionsMap = new Map([["vvid30c.*",[287]]]);
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
