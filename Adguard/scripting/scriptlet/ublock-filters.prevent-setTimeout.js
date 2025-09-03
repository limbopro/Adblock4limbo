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
const argsList = [["=document[_0x"],["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["/mylovelyobj|amzn_aps_csm|\\'\\/hello\\'|YW16bl9hcHNfY3Nt|cmVwb3J0RXJyb3Jz|L3ZlcnktcGxlYXNl|getAdnginName|hasOwnProperty|location/"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["alert","2000"],["/adblock|isRequestPresent/"],["documentElement.innerHTML"],["_0x","500"],["isRequestPresent"],["checkAdblock"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["/loadMomoVip|loadExo|includeSpecial/"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["consent"],["await _0x"],["adbl"],["openPopunder"],["offsetHeight"],["offsetLeft"],["height"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["click"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["/location.href|location = atob/"],[".redirect"],["/AdBlock/i"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["Ad","5000"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["getComputedStyle(testAd)"],[".adv-"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["test.remove","100"],["adBlockerModal"],["","10000-15000"],["adex"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["mode:\"no-cors\""],["Visibility"],["TNCMS.DMP"],["ast"],["googlesyndication"],["moneyDetect"],["sub"],["/createElement|addEventListener|clientHeight/"]];
const hostnamesMap = new Map([["japscan.*",0],["poophq.com",1],["veev.to",1],["dogdrip.net",2],["infinityfree.com",2],["smsonline.cloud",[2,3]],["faqwiki.us",4],["mail.yahoo.com",[5,276]],["maxcheaters.com",5],["postimees.ee",5],["police.community",5],["gisarea.com",5],["schaken-mods.com",5],["tvnet.lv",5],["theclashify.com",5],["txori.com",5],["olarila.com",5],["deletedspeedstreams.blogspot.com",5],["schooltravelorganiser.com",5],["xhardhempus.net",5],["mhn.quest",5],["leagueofgraphs.com",5],["hieunguyenphoto.com",5],["benzinpreis.de",5],["client.falixnodes.net",[6,309]],["lastampa.it",7],["m.timesofindia.com",8],["timesofindia.indiatimes.com",8],["youmath.it",8],["redensarten-index.de",8],["lesoir.be",8],["electriciansforums.net",8],["keralatelecom.info",8],["universegunz.net",8],["happypenguin.altervista.org",8],["everyeye.it",8],["eztv.*",8],["bluedrake42.com",8],["supermarioemulator.com",8],["futbollibrehd.com",8],["eska.pl",8],["eskarock.pl",8],["voxfm.pl",8],["mathaeser.de",8],["betaseries.com",8],["free-sms-receive.com",8],["sms-receive-online.com",8],["computer76.ru",8],["golem.de",[9,10,158]],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["downloadr.in",10],["topcomicporno.com",10],["sushi-scan.*",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["seriesperu.com",10],["spigotunlocked.*",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,265]],["topsporter.net",[10,265]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["ahmedmode.*",10],["esopress.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["forum-xiaomi.com",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,67]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["yts.*",13],["720pstream.*",13],["1stream.*",13],["seattletimes.com",14],["bestgames.com",15],["yiv.com",15],["globalrph.com",16],["e-glossa.it",17],["webcheats.com.br",18],["urlcero.*",19],["gala.fr",20],["gentside.com",20],["geo.fr",20],["hbrfrance.fr",20],["nationalgeographic.fr",20],["ohmymag.com",20],["serengo.net",20],["vsd.fr",20],["short.pe",21],["thefmovies.*",21],["footystreams.net",21],["katestube.com",21],["updato.com",[22,36]],["totaldebrid.*",23],["sandrives.*",23],["daizurin.com",23],["pendekarsubs.us",23],["dreamfancy.org",23],["rysafe.blogspot.com",23],["techacode.com",23],["toppng.com",23],["th-world.com",23],["avjamack.com",23],["avjamak.net",23],["cnnamador.com",24],["nudecelebforum.com",25],["pronpic.org",26],["thewebflash.com",27],["discordfastfood.com",27],["xup.in",27],["popularmechanics.com",28],["op.gg",29],["comunidadgzone.es",30],["fxporn69.*",30],["mp3fy.com",30],["lebensmittelpraxis.de",30],["aliancapes.*",30],["forum-pokemon-go.fr",30],["praxis-jugendarbeit.de",30],["dictionnaire-medical.net",30],["cle0desktop.blogspot.com",30],["up-load.io",30],["keysbrasil.blogspot.com",30],["hotpress.info",30],["turkleech.com",30],["anibatch.me",30],["anime-i.com",30],["gewinde-normen.de",30],["tucinehd.com",30],["kdramasmaza.com.pk",30],["jellynote.com",31],["eporner.com",32],["pornbimbo.com",33],["4j.com",33],["avoiderrors.com",34],["sitarchive.com",34],["livenewsof.com",34],["topnewsshow.com",34],["gatcha.org",34],["kusonime.com",34],["suicidepics.com",34],["codesnail.com",34],["codingshiksha.com",34],["graphicux.com",34],["citychilli.com",34],["talkjarvis.com",34],["hdmotori.it",35],["tubsexer.*",37],["femdomtb.com",37],["porno-tour.*",37],["lenkino.*",37],["bobs-tube.com",37],["pornfd.com",37],["pornomoll.*",37],["camsclips.*",37],["popno-tour.net",37],["watchmdh.to",37],["camwhores.tv",37],["camhub.cc",37],["elfqrin.com",38],["satcesc.com",39],["apfelpatient.de",39],["lusthero.com",40],["m4ufree.*",41],["m2list.com",41],["embed.nana2play.com",41],["dallasnews.com",42],["lnk.news",43],["lnk.parts",43],["efukt.com",44],["wendycode.com",44],["springfieldspringfield.co.uk",45],["porndoe.com",46],["smsget.net",[47,48]],["kjanime.net",49],["gioialive.it",50],["classicreload.com",51],["scriptzhub.com",51],["hotpornfile.org",52],["coolsoft.altervista.org",52],["hackedonlinegames.com",52],["dailytech-news.eu",52],["settlersonlinemaps.com",52],["ad-doge.com",52],["magdownload.org",52],["kpkuang.org",52],["crypto4yu.com",52],["writedroid.*",52],["thenightwithoutthedawn.blogspot.com",52],["claimlite.club",52],["newscon.org",52],["rl6mans.com",52],["chicoer.com",53],["bostonherald.com",53],["dailycamera.com",53],["sportsplays.com",54],["ebookdz.com",55],["telerium.*",56],["pornvideotop.com",57],["arolinks.com",57],["xstory-fr.com",57],["1337x.*",57],["x1337x.*",57],["1337x.ninjaproxy1.com",57],["ytapi.cc",57],["letribunaldunet.fr",58],["vladan.fr",58],["live-tv-channels.org",59],["eslfast.com",60],["ge-map-overlays.appspot.com",61],["mad4wheels.com",61],["1xanimes.in",61],["logi.im",61],["emailnator.com",61],["freegamescasual.com",62],["tcpvpn.com",63],["oko.sh",63],["timesnownews.com",63],["timesnowhindi.com",63],["timesnowmarathi.com",63],["zoomtventertainment.com",63],["tsubasa.im",64],["sholah.net",65],["2rdroid.com",65],["bisceglielive.it",66],["pandajogosgratis.com.br",68],["5278.cc",69],["pandafreegames.*",70],["tonspion.de",71],["duplichecker.com",72],["plagiarismchecker.co",72],["plagiarismdetector.net",72],["searchenginereports.net",72],["smallseotools.com",73],["linkspaid.com",74],["proxydocker.com",74],["beeimg.com",[75,76]],["emturbovid.com",76],["findjav.com",76],["javggvideo.xyz",76],["mmtv01.xyz",76],["stbturbo.xyz",76],["trailerhg.xyz",76],["turboplayers.xyz",76],["turbovidhls.com",76],["viralharami.com",76],["ftlauderdalebeachcam.com",77],["ftlauderdalewebcam.com",77],["juneauharborwebcam.com",77],["keywestharborwebcam.com",77],["kittycatcam.com",77],["mahobeachcam.com",77],["miamiairportcam.com",77],["morganhillwebcam.com",77],["njwildlifecam.com",77],["nyharborwebcam.com",77],["paradiseislandcam.com",77],["pompanobeachcam.com",77],["portbermudawebcam.com",77],["portcanaveralwebcam.com",77],["portevergladeswebcam.com",77],["portmiamiwebcam.com",77],["portnywebcam.com",77],["portnassauwebcam.com",77],["portstmaartenwebcam.com",77],["portstthomaswebcam.com",77],["porttampawebcam.com",77],["sxmislandcam.com",77],["themes-dl.com",77],["badassdownloader.com",77],["badasshardcore.com",77],["badassoftcore.com",77],["nulljungle.com",77],["teevee.asia",77],["otakukan.com",77],["thoptv.*",78],["gearingcommander.com",79],["generate.plus",80],["calculate.plus",80],["avcesar.com",81],["audiotag.info",82],["tudigitale.it",83],["ibcomputing.com",84],["legia.net",85],["acapellas4u.co.uk",86],["robloxscripts.com",87],["libreriamo.it",87],["postazap.com",87],["filmyzones.com",87],["medebooks.xyz",87],["mashtips.com",87],["marriedgames.com.br",87],["4allprograms.me",87],["shortzzy.*",87],["nurgsm.com",87],["plugincrack.com",87],["gamingdeputy.com",87],["freewebcart.com",87],["gamekult.com",88],["streamhentaimovies.com",89],["konten.co.id",90],["diariodenavarra.es",91],["scripai.com",91],["myfxbook.com",91],["whatfontis.com",91],["tubereader.me",91],["optifine.net",92],["luzernerzeitung.ch",93],["tagblatt.ch",93],["ableitungsrechner.net",94],["alternet.org",95],["gourmetsupremacy.com",95],["shrib.com",96],["streameast.*",97],["thestreameast.*",97],["techclips.net",97],["daddylivehd.*",97],["footyhunter.lol",97],["wecast.to",97],["freecourseweb.com",98],["coursewikia.com",98],["courseboat.com",98],["pornhub.*",99],["lne.es",[100,371]],["pornult.com",101],["webcamsdolls.com",101],["bitcotasks.com",[101,143]],["adsy.pw",101],["playstore.pw",101],["exactpay.online",101],["thothd.to",101],["proplanta.de",102],["textograto.com",103],["voyageforum.com",104],["hmc-id.blogspot.com",104],["myabandonware.com",104],["wcofun.*",104],["ilforumdeibrutti.is",104],["prad.de",[105,158]],["chatta.it",106],["ketubanjiwa.com",107],["nsfw247.to",108],["funzen.net",108],["extremereportbot.com",109],["getintopc.com",110],["qoshe.com",111],["lowellsun.com",112],["mamadu.pl",112],["dobrapogoda24.pl",112],["motohigh.pl",112],["namasce.pl",112],["ultimate-catch.eu",113],["cpopchanelofficial.com",114],["creditcardgenerator.com",115],["creditcardrush.com",115],["bostoncommons.net",115],["thejobsmovie.com",115],["hl-live.de",116],["satoshi-win.xyz",116],["encurtandourl.com",[116,120]],["www-daftarharga.blogspot.com",116],["ear-phone-review.com",116],["telefullenvivo.com",116],["listatv.pl",116],["coin-profits.xyz",116],["relampagomovies.com",116],["wohnmobilforum.de",116],["nulledbear.com",116],["sinnerclownceviri.net",116],["nilopolisonline.com.br",117],["mesquitaonline.com",117],["yellowbridge.com",117],["yaoiotaku.com",118],["moneyhouse.ch",119],["ihow.info",120],["filesus.com",120],["gotxx.*",120],["sturls.com",120],["turbo1.co",120],["hartico.tv",120],["cupra.forum",120],["turkanime.*",121],["valeronevijao.com",121],["yodelswartlike.com",121],["generatesnitrosate.com",121],["gamoneinterrupted.com",121],["metagnathtuggers.com",121],["rationalityaloelike.com",121],["sizyreelingly.com",121],["urochsunloath.com",121],["monorhinouscassaba.com",121],["antecoxalbobbing1010.com",121],["boonlessbestselling244.com",121],["cyamidpulverulence530.com",121],["guidon40hyporadius9.com",121],["449unceremoniousnasoseptal.com",121],["30sensualizeexpression.com",121],["greaseball6eventual20.com",121],["toxitabellaeatrebates306.com",121],["20demidistance9elongations.com",121],["audaciousdefaulthouse.com",121],["fittingcentermondaysunday.com",121],["launchreliantcleaverriver.com",121],["matriculant401merited.com",121],["realfinanceblogcenter.com",121],["telyn610zoanthropy.com",121],["un-block-voe.net",121],["v-o-e-unblock.com",121],["voe-un-block.com",121],["voe-unblock.*",121],["voeunbl0ck.com",121],["voeunblck.com",121],["voeunblk.com",121],["voeunblock.com",121],["voeunblock2.com",121],["voeunblock3.com",121],["agefi.fr",122],["cariskuy.com",123],["letras2.com",123],["yusepjaelani.blogspot.com",124],["letras.mus.br",125],["eletronicabr.com",126],["mtlurb.com",127],["onemanhua.com",128],["laksa19.github.io",129],["javcl.com",129],["tvlogy.to",129],["rp5.*",129],["live.dragaoconnect.net",129],["seznamzpravy.cz",129],["xerifetech.com",129],["freemcserver.net",129],["t3n.de",130],["allindiaroundup.com",131],["tapchipi.com",132],["dcleakers.com",132],["esgeeks.com",132],["pugliain.net",132],["uplod.net",132],["worldfreeware.com",132],["tech-blogs.com",132],["cardiagn.com",132],["fikiri.net",132],["myhackingworld.com",132],["vectorizer.io",133],["onehack.us",133],["smgplaza.com",133],["thapcam.net",133],["breznikar.com",133],["thefastlaneforum.com",134],["5flix.top",135],["bembed.net",135],["embedv.net",135],["javguard.club",135],["listeamed.net",135],["v6embed.xyz",135],["vembed.*",135],["vid-guard.com",135],["vidguardto.xyz",135],["yesmovies.*>>",135],["pistona.xyz",135],["vinomo.xyz",135],["moflix-stream.*",[135,164]],["trade2win.com",136],["modagamers.com",137],["khatrimaza.*",137],["freemagazines.top",137],["pogolinks.*",137],["straatosphere.com",137],["nullpk.com",137],["adslink.pw",137],["downloadudemy.com",137],["picgiraffe.com",137],["weadown.com",137],["freepornsex.net",137],["nurparatodos.com.ar",137],["popcornstream.*",138],["routech.ro",138],["hokej.net",138],["turkmmo.com",139],["acdriftingpro.com",140],["palermotoday.it",141],["baritoday.it",141],["trentotoday.it",141],["agrigentonotizie.it",141],["anconatoday.it",141],["arezzonotizie.it",141],["avellinotoday.it",141],["bresciatoday.it",141],["brindisireport.it",141],["casertanews.it",141],["cataniatoday.it",141],["cesenatoday.it",141],["chietitoday.it",141],["forlitoday.it",141],["frosinonetoday.it",141],["genovatoday.it",141],["ilpescara.it",141],["ilpiacenza.it",141],["latinatoday.it",141],["lecceprima.it",141],["leccotoday.it",141],["livornotoday.it",141],["messinatoday.it",141],["milanotoday.it",141],["modenatoday.it",141],["monzatoday.it",141],["novaratoday.it",141],["padovaoggi.it",141],["parmatoday.it",141],["perugiatoday.it",141],["pisatoday.it",141],["quicomo.it",141],["ravennatoday.it",141],["reggiotoday.it",141],["riminitoday.it",141],["romatoday.it",141],["salernotoday.it",141],["sondriotoday.it",141],["sportpiacenza.it",141],["ternitoday.it",141],["today.it",141],["torinotoday.it",141],["trevisotoday.it",141],["triesteprima.it",141],["udinetoday.it",141],["veneziatoday.it",141],["vicenzatoday.it",141],["thumpertalk.com",142],["austiblox.net",142],["thelayoff.com",143],["shorterall.com",143],["maxstream.video",143],["tvepg.eu",143],["manwan.xyz",143],["dailymaverick.co.za",144],["ludigames.com",145],["made-by.org",145],["worldtravelling.com",145],["technichero.com",145],["androidadult.com",145],["aeroxplorer.com",145],["sportitalialive.com",145],["adrinolinks.com",146],["link.vipurl.in",146],["nanolinks.in",146],["fadedfeet.com",147],["homeculina.com",147],["ineedskin.com",147],["kenzo-flowertag.com",147],["lawyex.co",147],["mdn.lol",147],["starkroboticsfrc.com",148],["sinonimos.de",148],["antonimos.de",148],["quesignifi.ca",148],["tiktokrealtime.com",148],["tiktokcounter.net",148],["tpayr.xyz",148],["poqzn.xyz",148],["ashrfd.xyz",148],["rezsx.xyz",148],["tryzt.xyz",148],["ashrff.xyz",148],["rezst.xyz",148],["dawenet.com",148],["erzar.xyz",148],["waezm.xyz",148],["waezg.xyz",148],["blackwoodacademy.org",148],["cryptednews.space",148],["vivuq.com",148],["swgop.com",148],["vbnmll.com",148],["telcoinfo.online",148],["dshytb.com",148],["bitzite.com",149],["coingraph.us",150],["impact24.us",150],["tpi.li",151],["oii.la",151],["www.apkmoddone.com",152],["sitemini.io.vn",153],["vip1s.top",153],["dl.apkmoddone.com",154],["phongroblox.com",154],["financacerta.com",155],["encurtads.net",155],["shortencash.click",156],["lablue.*",157],["4-liga.com",158],["4fansites.de",158],["4players.de",158],["9monate.de",158],["aachener-nachrichten.de",158],["aachener-zeitung.de",158],["abendblatt.de",158],["abendzeitung-muenchen.de",158],["about-drinks.com",158],["abseits-ka.de",158],["airliners.de",158],["ajaxshowtime.com",158],["allgemeine-zeitung.de",158],["alpin.de",158],["antenne.de",158],["arcor.de",158],["areadvd.de",158],["areamobile.de",158],["ariva.de",158],["astronews.com",158],["aussenwirtschaftslupe.de",158],["auszeit.bio",158],["auto-motor-und-sport.de",158],["auto-service.de",158],["autobild.de",158],["autoextrem.de",158],["autopixx.de",158],["autorevue.at",158],["autotrader.nl",158],["az-online.de",158],["baby-vornamen.de",158],["babyclub.de",158],["bafoeg-aktuell.de",158],["berliner-kurier.de",158],["berliner-zeitung.de",158],["bigfm.de",158],["bikerszene.de",158],["bildderfrau.de",158],["blackd.de",158],["blick.de",158],["boerse-online.de",158],["boerse.de",158],["boersennews.de",158],["braunschweiger-zeitung.de",158],["brieffreunde.de",158],["brigitte.de",158],["buerstaedter-zeitung.de",158],["buffed.de",158],["businessinsider.de",158],["buzzfeed.at",158],["buzzfeed.de",158],["caravaning.de",158],["cavallo.de",158],["chefkoch.de",158],["cinema.de",158],["clever-tanken.de",158],["computerbild.de",158],["computerhilfen.de",158],["comunio-cl.com",158],["comunio.*",158],["connect.de",158],["chip.de",158],["da-imnetz.de",158],["dasgelbeblatt.de",158],["dbna.com",158],["dbna.de",158],["deichstube.de",158],["deine-tierwelt.de",158],["der-betze-brennt.de",158],["derwesten.de",158],["desired.de",158],["dhd24.com",158],["dieblaue24.com",158],["digitalfernsehen.de",158],["dnn.de",158],["donnerwetter.de",158],["e-hausaufgaben.de",158],["e-mountainbike.com",158],["eatsmarter.de",158],["echo-online.de",158],["ecomento.de",158],["einfachschoen.me",158],["elektrobike-online.com",158],["eltern.de",158],["epochtimes.de",158],["essen-und-trinken.de",158],["express.de",158],["extratipp.com",158],["familie.de",158],["fanfiktion.de",158],["fehmarn24.de",158],["fettspielen.de",158],["fid-gesundheitswissen.de",158],["finanzen.*",158],["finanznachrichten.de",158],["finanztreff.de",158],["finya.de",158],["firmenwissen.de",158],["fitforfun.de",158],["fnp.de",158],["football365.fr",158],["formel1.de",158],["fr.de",158],["frankfurter-wochenblatt.de",158],["freenet.de",158],["fremdwort.de",158],["froheweihnachten.info",158],["frustfrei-lernen.de",158],["fuldaerzeitung.de",158],["funandnews.de",158],["fussballdaten.de",158],["futurezone.de",158],["gala.de",158],["gamepro.de",158],["gamersglobal.de",158],["gamesaktuell.de",158],["gamestar.de",158],["gameswelt.*",158],["gamezone.de",158],["gartendialog.de",158],["gartenlexikon.de",158],["gedichte.ws",158],["geissblog.koeln",158],["gelnhaeuser-tageblatt.de",158],["general-anzeiger-bonn.de",158],["geniale-tricks.com",158],["genialetricks.de",158],["gesund-vital.de",158],["gesundheit.de",158],["gevestor.de",158],["gewinnspiele.tv",158],["giessener-allgemeine.de",158],["giessener-anzeiger.de",158],["gifhorner-rundschau.de",158],["giga.de",158],["gipfelbuch.ch",158],["gmuender-tagespost.de",158],["gruenderlexikon.de",158],["gusto.at",158],["gut-erklaert.de",158],["gutfuerdich.co",158],["hallo-muenchen.de",158],["hamburg.de",158],["hanauer.de",158],["hardwareluxx.de",158],["hartziv.org",158],["harzkurier.de",158],["haus-garten-test.de",158],["hausgarten.net",158],["haustec.de",158],["haz.de",158],["heftig.*",158],["heidelberg24.de",158],["heilpraxisnet.de",158],["heise.de",158],["helmstedter-nachrichten.de",158],["hersfelder-zeitung.de",158],["hftg.co",158],["hifi-forum.de",158],["hna.de",158],["hochheimer-zeitung.de",158],["hoerzu.de",158],["hofheimer-zeitung.de",158],["iban-rechner.de",158],["ikz-online.de",158],["immobilienscout24.de",158],["ingame.de",158],["inside-digital.de",158],["inside-handy.de",158],["investor-verlag.de",158],["jappy.com",158],["jpgames.de",158],["kabeleins.de",158],["kachelmannwetter.com",158],["kamelle.de",158],["kicker.de",158],["kindergeld.org",158],["klettern-magazin.de",158],["klettern.de",158],["kochbar.de",158],["kreis-anzeiger.de",158],["kreisbote.de",158],["kreiszeitung.de",158],["ksta.de",158],["kurierverlag.de",158],["lachainemeteo.com",158],["lampertheimer-zeitung.de",158],["landwirt.com",158],["laut.de",158],["lauterbacher-anzeiger.de",158],["leckerschmecker.me",158],["leinetal24.de",158],["lesfoodies.com",158],["levif.be",158],["lifeline.de",158],["liga3-online.de",158],["likemag.com",158],["linux-community.de",158],["linux-magazin.de",158],["live.vodafone.de",158],["ln-online.de",158],["lokalo24.de",158],["lustaufsleben.at",158],["lustich.de",158],["lvz.de",158],["lz.de",158],["mactechnews.de",158],["macwelt.de",158],["macworld.co.uk",158],["mail.de",158],["main-spitze.de",158],["manager-magazin.de",158],["manga-tube.me",158],["mathebibel.de",158],["mathepower.com",158],["maz-online.de",158],["medisite.fr",158],["mehr-tanken.de",158],["mein-kummerkasten.de",158],["mein-mmo.de",158],["mein-wahres-ich.de",158],["meine-anzeigenzeitung.de",158],["meinestadt.de",158],["menshealth.de",158],["mercato365.com",158],["merkur.de",158],["messen.de",158],["metal-hammer.de",158],["metalflirt.de",158],["meteologix.com",158],["minecraft-serverlist.net",158],["mittelbayerische.de",158],["modhoster.de",158],["moin.de",158],["mopo.de",158],["morgenpost.de",158],["motor-talk.de",158],["motorbasar.de",158],["motorradonline.de",158],["motorsport-total.com",158],["motortests.de",158],["mountainbike-magazin.de",158],["moviejones.de",158],["moviepilot.de",158],["mt.de",158],["mtb-news.de",158],["musiker-board.de",158],["musikexpress.de",158],["musikradar.de",158],["mz-web.de",158],["n-tv.de",158],["naumburger-tageblatt.de",158],["netzwelt.de",158],["neuepresse.de",158],["neueroeffnung.info",158],["news.at",158],["news.de",158],["news38.de",158],["newsbreak24.de",158],["nickles.de",158],["nicknight.de",158],["nl.hardware.info",158],["nn.de",158],["nnn.de",158],["nordbayern.de",158],["notebookchat.com",158],["notebookcheck-ru.com",158],["notebookcheck-tr.com",158],["notebookcheck.*",158],["noz-cdn.de",158],["noz.de",158],["nrz.de",158],["nw.de",158],["nwzonline.de",158],["oberhessische-zeitung.de",158],["och.to",158],["oeffentlicher-dienst.info",158],["onlinekosten.de",158],["onvista.de",158],["op-marburg.de",158],["op-online.de",158],["outdoor-magazin.com",158],["outdoorchannel.de",158],["paradisi.de",158],["pc-magazin.de",158],["pcgames.de",158],["pcgameshardware.de",158],["pcwelt.de",158],["pcworld.es",158],["peiner-nachrichten.de",158],["pferde.de",158],["pietsmiet.de",158],["pixelio.de",158],["pkw-forum.de",158],["playboy.de",158],["playfront.de",158],["pnn.de",158],["pons.com",158],["prignitzer.de",158],["profil.at",158],["promipool.de",158],["promobil.de",158],["prosiebenmaxx.de",158],["psychic.de",[158,178]],["quoka.de",158],["radio.at",158],["radio.de",158],["radio.dk",158],["radio.es",158],["radio.fr",158],["radio.it",158],["radio.net",158],["radio.pl",158],["radio.pt",158],["radio.se",158],["ran.de",158],["readmore.de",158],["rechtslupe.de",158],["recording.de",158],["rennrad-news.de",158],["reuters.com",158],["reviersport.de",158],["rhein-main-presse.de",158],["rheinische-anzeigenblaetter.de",158],["rimondo.com",158],["roadbike.de",158],["roemische-zahlen.net",158],["rollingstone.de",158],["rot-blau.com",158],["rp-online.de",158],["rtl.de",[158,252]],["rtv.de",158],["rugby365.fr",158],["ruhr24.de",158],["rundschau-online.de",158],["runnersworld.de",158],["safelist.eu",158],["salzgitter-zeitung.de",158],["sat1.de",158],["sat1gold.de",158],["schoener-wohnen.de",158],["schwaebische-post.de",158],["schwarzwaelder-bote.de",158],["serienjunkies.de",158],["shz.de",158],["sixx.de",158],["skodacommunity.de",158],["smart-wohnen.net",158],["sn.at",158],["sozialversicherung-kompetent.de",158],["spiegel.de",158],["spielen.de",158],["spieletipps.de",158],["spielfilm.de",158],["sport.de",158],["sport1.de",158],["sport365.fr",158],["sportal.de",158],["spox.com",158],["stern.de",158],["stuttgarter-nachrichten.de",158],["stuttgarter-zeitung.de",158],["sueddeutsche.de",158],["svz.de",158],["szene1.at",158],["szene38.de",158],["t-online.de",158],["tagesspiegel.de",158],["taschenhirn.de",158],["techadvisor.co.uk",158],["techstage.de",158],["tele5.de",158],["teltarif.de",158],["testedich.*",158],["the-voice-of-germany.de",158],["thueringen24.de",158],["tichyseinblick.de",158],["tierfreund.co",158],["tiervermittlung.de",158],["torgranate.de",158],["transfermarkt.*",158],["trend.at",158],["truckscout24.*",158],["tv-media.at",158],["tvdigital.de",158],["tvinfo.de",158],["tvspielfilm.de",158],["tvtoday.de",158],["tvtv.*",158],["tz.de",[158,173]],["unicum.de",158],["unnuetzes.com",158],["unsere-helden.com",158],["unterhalt.net",158],["usinger-anzeiger.de",158],["usp-forum.de",158],["videogameszone.de",158],["vienna.at",158],["vip.de",158],["virtualnights.com",158],["vox.de",158],["wa.de",158],["wallstreet-online.de",[158,161]],["waz.de",158],["weather.us",158],["webfail.com",158],["weihnachten.me",158],["weihnachts-bilder.org",158],["weihnachts-filme.com",158],["welt.de",158],["weltfussball.at",158],["weristdeinfreund.de",158],["werkzeug-news.de",158],["werra-rundschau.de",158],["wetterauer-zeitung.de",158],["wetteronline.*",158],["wieistmeineip.*",158],["wiesbadener-kurier.de",158],["wiesbadener-tagblatt.de",158],["winboard.org",158],["windows-7-forum.net",158],["winfuture.de",[158,169]],["wintotal.de",158],["wlz-online.de",158],["wn.de",158],["wohngeld.org",158],["wolfenbuetteler-zeitung.de",158],["wolfsburger-nachrichten.de",158],["woman.at",158],["womenshealth.de",158],["wormser-zeitung.de",158],["woxikon.de",158],["wp.de",158],["wr.de",158],["wunderweib.de",158],["yachtrevue.at",158],["ze.tt",158],["zeit.de",158],["lecker.de",158],["meineorte.com",159],["osthessen-news.de",159],["techadvisor.com",159],["focus.de",159],["wetter.*",160],["herzporno.net",162],["deinesexfilme.com",163],["einfachtitten.com",163],["lesbenhd.com",163],["milffabrik.com",[163,223]],["porn-monkey.com",163],["porndrake.com",163],["pornhubdeutsch.net",163],["pornoaffe.com",163],["pornodavid.com",163],["pornoente.tv",[163,223]],["pornofisch.com",163],["pornofelix.com",163],["pornohammer.com",163],["pornohelm.com",163],["pornoklinge.com",163],["pornotom.com",[163,223]],["pornotommy.com",163],["pornovideos-hd.com",163],["pornozebra.com",[163,223]],["xhamsterdeutsch.xyz",163],["xnxx-sexfilme.com",163],["nu6i-bg-net.com",165],["kiaclub.cz",165],["khsm.io",165],["webcreator-journal.com",165],["msdos-games.com",165],["blocklayer.com",165],["weknowconquer.com",165],["giff.cloud",165],["aquarius-horoscopes.com",166],["cancer-horoscopes.com",166],["dubipc.blogspot.com",166],["echoes.gr",166],["engel-horoskop.de",166],["freegames44.com",166],["fuerzasarmadas.eu",166],["gemini-horoscopes.com",166],["jurukunci.net",166],["krebs-horoskop.com",166],["leo-horoscopes.com",166],["maliekrani.com",166],["nklinks.click",166],["ourenseando.es",166],["pisces-horoscopes.com",166],["radio-en-direct.fr",166],["sagittarius-horoscopes.com",166],["scorpio-horoscopes.com",166],["singlehoroskop-loewe.de",166],["skat-karten.de",166],["skorpion-horoskop.com",166],["taurus-horoscopes.com",166],["the1security.com",166],["virgo-horoscopes.com",166],["zonamarela.blogspot.com",166],["yoima.hatenadiary.com",166],["kaystls.site",167],["ftuapps.dev",168],["studydhaba.com",168],["freecourse.tech",168],["victor-mochere.com",168],["papunika.com",168],["mobilanyheter.net",168],["prajwaldesai.com",[168,241]],["carscoops.com",169],["dziennik.pl",169],["eurointegration.com.ua",169],["flatpanelshd.com",169],["footballtransfer.com.ua",169],["footballtransfer.ru",169],["hoyme.jp",169],["issuya.com",169],["itainews.com",169],["iusm.co.kr",169],["logicieleducatif.fr",169],["mynet.com",[169,192]],["onlinegdb.com",169],["picrew.me",169],["pravda.com.ua",169],["reportera.co.kr",169],["sportanalytic.com",169],["sportsrec.com",169],["sportsseoul.com",169],["text-compare.com",169],["tweaksforgeeks.com",169],["wfmz.com",169],["worldhistory.org",169],["palabr.as",169],["motscroises.fr",169],["cruciverba.it",169],["w.grapps.me",169],["gazetaprawna.pl",169],["pressian.com",169],["raenonx.cc",[169,268]],["indiatimes.com",169],["missyusa.com",169],["aikatu.jp",169],["ark-unity.com",169],["cool-style.com.tw",169],["doanhnghiepvn.vn",169],["mykhel.com",169],["automobile-catalog.com",170],["motorbikecatalog.com",170],["maketecheasier.com",170],["mlbpark.donga.com",171],["jjang0u.com",172],["auto-swiat.pl",174],["download.kingtecnologia.com",175],["daemonanime.net",176],["bgmateriali.com",176],["daemon-hentai.com",177],["forumdz.com",178],["zilinak.sk",178],["pdfaid.com",178],["bootdey.com",178],["mail.com",178],["expresskaszubski.pl",178],["moegirl.org.cn",178],["flix-wave.lol",178],["fmovies0.cc",178],["worthcrete.com",178],["infomatricula.pt",178],["my-code4you.blogspot.com",179],["vrcmods.com",180],["osuskinner.com",180],["osuskins.net",180],["pentruea.com",181],["mchacks.net",182],["why-tech.it",183],["compsmag.com",184],["tapetus.pl",185],["autoroad.cz",186],["brawlhalla.fr",186],["tecnobillo.com",186],["pokemon-project.com",186],["breatheheavy.com",187],["wenxuecity.com",188],["key-hub.eu",189],["fabioambrosi.it",190],["tattle.life",191],["emuenzen.de",191],["terrylove.com",191],["cidade.iol.pt",193],["fantacalcio.it",194],["hentaifreak.org",195],["hypebeast.com",196],["krankheiten-simulieren.de",197],["catholic.com",198],["techinferno.com",199],["ibeconomist.com",200],["bookriot.com",201],["purposegames.com",202],["globo.com",203],["latimes.com",203],["claimrbx.gg",204],["perelki.net",205],["vpn-anbieter-vergleich-test.de",206],["livingincebuforums.com",207],["paperzonevn.com",208],["alltechnerd.com",209],["malaysianwireless.com",210],["erinsakura.com",211],["infofuge.com",211],["freejav.guru",211],["novelmultiverse.com",211],["fritidsmarkedet.dk",212],["maskinbladet.dk",212],["15min.lt",213],["baddiehub.com",214],["mr9soft.com",215],["adult-sex-gamess.com",216],["hentaigames.app",216],["mobilesexgamesx.com",216],["mysexgamer.com",216],["porngameshd.com",216],["sexgamescc.com",216],["xnxx-sex-videos.com",216],["f2movies.to",217],["freeporncave.com",218],["tubsxxx.com",219],["manga18fx.com",220],["freebnbcoin.com",220],["sextvx.com",221],["muztext.com",222],["pornohans.com",223],["nursexfilme.com",223],["pornohirsch.net",223],["xhamster-sexvideos.com",223],["pornoschlange.com",223],["xhamsterdeutsch.*",223],["hdpornos.net",223],["gutesexfilme.com",223],["zona-leros.com",223],["charbelnemnom.com",224],["simplebits.io",225],["online-fix.me",226],["privatemoviez.*",227],["gamersdiscussionhub.com",227],["elahmad.com",228],["owlzo.com",229],["q1003.com",230],["blogpascher.com",231],["testserver.pro",232],["lifestyle.bg",232],["money.bg",232],["news.bg",232],["topsport.bg",232],["webcafe.bg",232],["schoolcheats.net",233],["mgnet.xyz",234],["advertiserandtimes.co.uk",235],["techsolveprac.com",236],["joomlabeginner.com",237],["askpaccosi.com",238],["largescaleforums.com",239],["dubznetwork.com",240],["dongknows.com",242],["traderepublic.community",243],["babia.to",244],["html5.gamemonetize.co",245],["code2care.org",246],["gmx.*",247],["yts-subs.net",248],["dlhd.sx",248],["xxxxsx.com",249],["ngontinh24.com",250],["idevicecentral.com",251],["mangacrab.com",253],["hortonanderfarom.blogspot.com",254],["viefaucet.com",255],["pourcesoir.in",255],["cloud-computing-central.com",256],["afk.guide",257],["businessnamegenerator.com",258],["derstandard.at",259],["derstandard.de",259],["rocketnews24.com",260],["soranews24.com",260],["youpouch.com",260],["gourmetscans.net",261],["ilsole24ore.com",262],["ipacrack.com",263],["infokik.com",264],["porhubvideo.com",266],["webseriessex.com",266],["panuvideo.com",[266,267]],["pornktubes.net",266],["deezer.com",268],["fosslinux.com",269],["shrdsk.me",270],["examword.com",271],["sempreupdate.com.br",271],["tribuna.com",272],["trendsderzukunft.de",273],["gal-dem.com",273],["lostineu.eu",273],["oggitreviso.it",273],["speisekarte.de",273],["mixed.de",273],["lightnovelspot.com",[274,275]],["novelpub.com",[274,275]],["webnovelpub.com",[274,275]],["hwzone.co.il",277],["nammakalvi.com",278],["igay69.com",278],["c2g.at",279],["terafly.me",279],["elamigos-games.com",279],["elamigos-games.net",279],["elamigosgames.org",279],["dktechnicalmate.com",280],["recipahi.com",280],["vpntester.org",281],["japscan.lol",282],["digitask.ru",283],["tempumail.com",284],["sexvideos.host",285],["camcaps.*",286],["10alert.com",287],["cryptstream.de",288],["nydus.org",288],["techhelpbd.com",289],["fapdrop.com",290],["cellmapper.net",291],["hdrez.com",292],["youwatch-serie.com",292],["russland.jetzt",292],["printablecreative.com",293],["peachprintable.com",293],["comohoy.com",294],["leak.sx",294],["paste.bin.sx",294],["pornleaks.in",294],["merlininkazani.com",294],["j91.asia",295],["rekidai-info.github.io",296],["jeniusplay.com",297],["indianyug.com",298],["rgb.vn",298],["needrom.com",299],["criptologico.com",300],["megadrive-emulator.com",301],["eromanga-show.com",302],["hentai-one.com",302],["hentaipaw.com",302],["10minuteemails.com",303],["luxusmail.org",303],["w3cub.com",304],["bangpremier.com",305],["nyaa.iss.ink",306],["drivebot.*",307],["thenextplanet1.*",308],["tnp98.xyz",308],["techedubyte.com",310],["poplinks.*",311],["tickzoo.tv",312],["oploverz.*",312],["memedroid.com",313],["karaoketexty.cz",314],["filmizlehdfilm.com",315],["filmizletv.*",315],["fullfilmizle.cc",315],["gofilmizle.net",315],["resortcams.com",316],["cheatography.com",316],["sonixgvn.net",317],["autoscout24.*",318],["mjakmama24.pl",319],["cheatermad.com",320],["work.ink",321],["ville-ideale.fr",322],["brainly.*",323],["eodev.com",323],["xfreehd.com",324],["freethesaurus.com",325],["thefreedictionary.com",325],["fm-arena.com",326],["tradersunion.com",327],["tandess.com",328],["allosurf.net",328],["spontacts.com",329],["dankmemer.lol",330],["getexploits.com",331],["fplstatistics.com",332],["breitbart.com",333],["salidzini.lv",334],["cryptorank.io",[335,336]],["qqwebplay.xyz",337],["molbiotools.com",338],["vods.tv",339],["18xxx.xyz",[340,372]],["raidrush.net",341],["xnxxcom.xyz",342],["videzz.net",343],["spambox.xyz",344],["dreamdth.com",345],["freemodsapp.in",345],["onlytech.com",345],["en-thunderscans.com",346],["infinityscans.xyz",347],["infinityscans.net",347],["infinityscans.org",347],["iqksisgw.xyz",348],["caroloportunidades.com.br",349],["coempregos.com.br",349],["foodiesgallery.com",349],["vikatan.com",350],["camhub.world",351],["mma-core.*",352],["pouvideo.*",353],["povvideo.*",353],["povw1deo.*",353],["povwideo.*",353],["powv1deo.*",353],["powvibeo.*",353],["powvideo.*",353],["powvldeo.*",353],["teracourses.com",354],["servustv.com",[355,356]],["freevipservers.net",357],["streambtw.com",358],["qrcodemonkey.net",359],["streamup.ws",360],["tv-films.co.uk",361],["cool--web-de.translate.goog",[362,363]],["gps--cache-de.translate.goog",[362,363]],["web--spiele-de.translate.goog",[362,363]],["fun--seiten-de.translate.goog",[362,363]],["photo--alben-de.translate.goog",[362,363]],["wetter--vorhersage-de.translate.goog",[362,363]],["coolsoftware-de.translate.goog",[362,363]],["kryptografie-de.translate.goog",[362,363]],["cool--domains-de.translate.goog",[362,363]],["net--tours-de.translate.goog",[362,363]],["such--maschine-de.translate.goog",[362,363]],["qul-de.translate.goog",[362,363]],["mailtool-de.translate.goog",[362,363]],["c--ix-de.translate.goog",[362,363]],["softwareengineer-de.translate.goog",[362,363]],["net--tools-de.translate.goog",[362,363]],["hilfen-de.translate.goog",[362,363]],["45er-de.translate.goog",[362,363]],["cooldns-de.translate.goog",[362,363]],["hardware--entwicklung-de.translate.goog",[362,363]],["bgsi.gg",364],["kio.ac",365],["friv.com",366],["tdtnews.com",367],["santafenewmexican.com",367],["sextb.*>>",368],["nepalieducate.com",369],["freegames.com",370],["levante-emv.com",371],["mallorcazeitung.es",371],["regio7.cat",371],["superdeporte.es",371],["laopiniondezamora.es",371],["laopiniondemurcia.es",371],["laopiniondemalaga.es",371],["laopinioncoruna.es",371],["lacronicabadajoz.com",371],["informacion.es",371],["farodevigo.es",371],["emporda.info",371],["elperiodicomediterraneo.com",371],["elperiodicoextremadura.com",371],["epe.es",371],["elperiodicodearagon.com",371],["eldia.es",371],["elcorreoweb.es",371],["diariodemallorca.es",371],["diariodeibiza.es",371],["diariocordoba.com",371],["diaridegirona.cat",371],["elperiodico.com",371],["laprovincia.es",371],["4tube.live",372],["nxxn.live",372],["redtub.live",372]]);
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
