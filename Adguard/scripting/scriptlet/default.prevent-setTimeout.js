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

// ruleset: default

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
const argsList = [["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["isDesktopApp","1000"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["()","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["documentElement.innerHTML"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["alert","2000"],["adsPost"],["1e3*"],["/^/","1000"],["=document[","2000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["appendChild"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["/Ads|adbl/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["myTestAd"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["afterOpen"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["","10000-15000"],["atob","120000"],["#ad_blocker_detector"],["AdBlocker"],["googleFC"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"]];
const hostnamesMap = new Map([["m.timesofindia.com",0],["timesofindia.indiatimes.com",0],["youmath.it",0],["redensarten-index.de",0],["lesoir.be",0],["electriciansforums.net",0],["keralatelecom.info",0],["universegunz.net",0],["happypenguin.altervista.org",0],["everyeye.it",0],["eztv.*",0],["bluedrake42.com",0],["supermarioemulator.com",0],["futbollibrehd.com",0],["eska.pl",0],["eskarock.pl",0],["voxfm.pl",0],["mathaeser.de",0],["1337x.*",0],["betaseries.com",0],["free-sms-receive.com",0],["sms-receive-online.com",0],["computer76.ru",0],["golem.de",[1,2,154]],["hdbox.ws",2],["todopolicia.com",2],["scat.gold",2],["freecoursesite.com",2],["windowcleaningforums.co.uk",2],["cruisingearth.com",2],["hobby-machinist.com",2],["freegogpcgames.com",2],["latitude.to",2],["kitchennovel.com",2],["w3layouts.com",2],["blog.receivefreesms.co.uk",2],["eductin.com",2],["dealsfinders.blog",2],["audiobooks4soul.com",2],["tinhocdongthap.com",2],["sakarnewz.com",2],["downloadr.in",2],["topcomicporno.com",2],["sushi-scan.*",2],["celtadigital.com",2],["iptvrun.com",2],["adsup.lk",2],["cryptomonitor.in",2],["areatopik.com",2],["cardscanner.co",2],["nullforums.net",2],["courseclub.me",2],["tamarindoyam.com",2],["jeep-cj.com",2],["choiceofmods.com",2],["myqqjd.com",2],["ssdtop.com",2],["apkhex.com",2],["gezegenforum.com",2],["iptvapps.net",2],["null-scripts.net",2],["nullscripts.net",2],["bloground.ro",2],["witcherhour.com",2],["ottverse.com",2],["torrentmac.net",2],["mazakony.com",2],["laptechinfo.com",2],["mc-at.org",2],["playstationhaber.com",2],["seriesperu.com",2],["spigotunlocked.*",2],["pesprofessionals.com",2],["wpsimplehacks.com",2],["sportshub.to",[2,242]],["topsporter.net",[2,242]],["darkwanderer.net",2],["truckingboards.com",2],["coldfrm.org",2],["azrom.net",2],["freepatternsarea.com",2],["alttyab.net",2],["ahmedmode.*",2],["mobilkulup.com",2],["esopress.com",2],["nesiaku.my.id",2],["jipinsoft.com",2],["truthnews.de",2],["farsinama.com",2],["worldofiptv.com",2],["vuinsider.com",2],["crazydl.net",2],["gamemodsbase.com",2],["babiato.tech",2],["secuhex.com",2],["turkishaudiocenter.com",2],["galaxyos.net",2],["bizdustry.com",2],["storefront.com.ng",2],["pkbiosfix.com",2],["casi3.xyz",2],["starleaks.org",2],["forum-xiaomi.com",2],["mediafire.com",3],["wcoanimedub.tv",4],["wcoforever.net",4],["openspeedtest.com",4],["addtobucketlist.com",4],["3dzip.org",[4,62]],["ilmeteo.it",4],["wcoforever.com",4],["comprovendolibri.it",4],["healthelia.com",4],["anghami.com",5],["yts.*",6],["720pstream.*",6],["1stream.*",6],["tutele.sx",6],["katestube.com",7],["short.pe",7],["thefmovies.*",7],["footystreams.net",7],["seattletimes.com",8],["bestgames.com",9],["yiv.com",9],["globalrph.com",10],["e-glossa.it",11],["webcheats.com.br",12],["urlcero.*",13],["gala.fr",14],["gentside.com",14],["geo.fr",14],["hbrfrance.fr",14],["nationalgeographic.fr",14],["ohmymag.com",14],["serengo.net",14],["vsd.fr",14],["updato.com",[15,31]],["totaldebrid.*",16],["sandrives.*",16],["daizurin.com",16],["pendekarsubs.us",16],["dreamfancy.org",16],["rysafe.blogspot.com",16],["techacode.com",16],["toppng.com",16],["th-world.com",16],["avjamack.com",16],["avjamak.net",16],["dlhd.sx",17],["yts-subs.net",17],["cnnamador.com",18],["nudecelebforum.com",19],["pronpic.org",20],["thewebflash.com",21],["discordfastfood.com",21],["xup.in",21],["popularmechanics.com",22],["op.gg",23],["comunidadgzone.es",24],["fxporn69.*",24],["mp3fy.com",24],["lebensmittelpraxis.de",24],["aliancapes.*",24],["ebookdz.com",24],["forum-pokemon-go.fr",24],["praxis-jugendarbeit.de",24],["dictionnaire-medical.net",24],["cle0desktop.blogspot.com",24],["up-load.io",24],["keysbrasil.blogspot.com",24],["hotpress.info",24],["turkleech.com",24],["anibatch.me",24],["anime-i.com",24],["gewinde-normen.de",24],["tucinehd.com",24],["plex-guide.de",24],["kdramasmaza.com.pk",24],["jellynote.com",25],["pouvideo.*",26],["povvideo.*",26],["povw1deo.*",26],["povwideo.*",26],["powv1deo.*",26],["powvibeo.*",26],["powvideo.*",26],["powvldeo.*",26],["eporner.com",27],["pornbimbo.com",28],["4j.com",28],["avoiderrors.com",29],["sitarchive.com",29],["livenewsof.com",29],["topnewsshow.com",29],["gatcha.org",29],["kusonime.com",29],["suicidepics.com",29],["codesnail.com",29],["codingshiksha.com",29],["graphicux.com",29],["citychilli.com",29],["talkjarvis.com",29],["hdmotori.it",30],["tubsexer.*",32],["femdomtb.com",32],["porno-tour.*",32],["lenkino.*",32],["bobs-tube.com",32],["pornfd.com",32],["pornomoll.*",32],["camsclips.*",32],["popno-tour.net",32],["watchmdh.to",32],["camwhores.tv",32],["camhub.cc",32],["elfqrin.com",33],["satcesc.com",34],["apfelpatient.de",34],["lusthero.com",35],["m4ufree.*",36],["m2list.com",36],["embed.nana2play.com",36],["elahmad.com",36],["dofusports.xyz",36],["dallasnews.com",37],["lnk.news",38],["lnk.parts",38],["efukt.com",39],["wendycode.com",39],["springfieldspringfield.co.uk",40],["porndoe.com",41],["smsget.net",[42,43]],["kjanime.net",44],["gioialive.it",45],["classicreload.com",46],["scriptzhub.com",46],["hotpornfile.org",47],["coolsoft.altervista.org",47],["hackedonlinegames.com",47],["dailytech-news.eu",47],["settlersonlinemaps.com",47],["ad-doge.com",47],["magdownload.org",47],["kpkuang.org",47],["crypto4yu.com",47],["faucetwork.space",47],["writedroid.*",47],["thenightwithoutthedawn.blogspot.com",47],["entutes.com",47],["claimlite.club",47],["newscon.org",47],["rl6mans.com",47],["chicoer.com",48],["bostonherald.com",48],["dailycamera.com",48],["maxcheaters.com",49],["postimees.ee",49],["police.community",49],["gisarea.com",49],["schaken-mods.com",49],["tvnet.lv",49],["theclashify.com",49],["txori.com",49],["olarila.com",49],["deletedspeedstreams.blogspot.com",49],["schooltravelorganiser.com",49],["xhardhempus.net",49],["mhn.quest",49],["leagueofgraphs.com",49],["hieunguyenphoto.com",49],["benzinpreis.de",49],["mail.yahoo.com",[49,267]],["sportsplays.com",50],["telerium.*",51],["pornvideotop.com",52],["krotkoosporcie.pl",52],["xstory-fr.com",52],["ytapi.cc",52],["letribunaldunet.fr",53],["vladan.fr",53],["live-tv-channels.org",54],["eslfast.com",55],["ge-map-overlays.appspot.com",56],["mad4wheels.com",56],["1xanimes.in",56],["logi.im",56],["emailnator.com",56],["freegamescasual.com",57],["tcpvpn.com",58],["oko.sh",58],["timesnownews.com",58],["timesnowhindi.com",58],["timesnowmarathi.com",58],["zoomtventertainment.com",58],["tsubasa.im",59],["sholah.net",60],["2rdroid.com",60],["bisceglielive.it",61],["pandajogosgratis.com.br",63],["5278.cc",64],["pandafreegames.*",65],["tonspion.de",66],["duplichecker.com",67],["plagiarismchecker.co",67],["plagiarismdetector.net",67],["searchenginereports.net",67],["smallseotools.com",68],["linkspaid.com",69],["proxydocker.com",69],["beeimg.com",[70,71]],["emturbovid.com",71],["findjav.com",71],["javggvideo.xyz",71],["mmtv01.xyz",71],["stbturbo.xyz",71],["streamsilk.com",71],["ftlauderdalebeachcam.com",72],["ftlauderdalewebcam.com",72],["juneauharborwebcam.com",72],["keywestharborwebcam.com",72],["kittycatcam.com",72],["mahobeachcam.com",72],["miamiairportcam.com",72],["morganhillwebcam.com",72],["njwildlifecam.com",72],["nyharborwebcam.com",72],["paradiseislandcam.com",72],["pompanobeachcam.com",72],["portbermudawebcam.com",72],["portcanaveralwebcam.com",72],["portevergladeswebcam.com",72],["portmiamiwebcam.com",72],["portnywebcam.com",72],["portnassauwebcam.com",72],["portstmaartenwebcam.com",72],["portstthomaswebcam.com",72],["porttampawebcam.com",72],["sxmislandcam.com",72],["themes-dl.com",72],["badassdownloader.com",72],["badasshardcore.com",72],["badassoftcore.com",72],["nulljungle.com",72],["teevee.asia",72],["otakukan.com",72],["thoptv.*",73],["gearingcommander.com",74],["generate.plus",75],["calculate.plus",75],["avcesar.com",76],["audiotag.info",77],["tudigitale.it",78],["ibcomputing.com",79],["legia.net",80],["acapellas4u.co.uk",81],["robloxscripts.com",82],["libreriamo.it",82],["postazap.com",82],["medebooks.xyz",82],["mashtips.com",82],["marriedgames.com.br",82],["4allprograms.me",82],["shortzzy.*",82],["nurgsm.com",82],["certbyte.com",82],["plugincrack.com",82],["gamingdeputy.com",82],["freewebcart.com",82],["autojournal.fr",83],["autoplus.fr",83],["sportauto.fr",83],["streamhentaimovies.com",84],["konten.co.id",85],["diariodenavarra.es",86],["scripai.com",86],["myfxbook.com",86],["whatfontis.com",86],["tubereader.me",86],["xiaomifans.pl",87],["eletronicabr.com",87],["optifine.net",88],["luzernerzeitung.ch",89],["tagblatt.ch",89],["spellcheck.net",90],["spellchecker.net",90],["spellweb.com",90],["ableitungsrechner.net",91],["alternet.org",92],["gourmetsupremacy.com",92],["shrib.com",93],["streameast.*",94],["thestreameast.*",94],["coolcast2.com",94],["techclips.net",94],["daddylivehd.*",94],["footyhunter.lol",94],["poscitech.click",94],["wecast.to",94],["sportbar.live",94],["freecourseweb.com",95],["devcourseweb.com",95],["coursewikia.com",95],["courseboat.com",95],["coursehulu.com",95],["pornhub.*",96],["lne.es",97],["pornult.com",98],["webcamsdolls.com",98],["bitcotasks.com",[98,139]],["adsy.pw",98],["playstore.pw",98],["exactpay.online",98],["thothd.to",98],["proplanta.de",99],["textograto.com",100],["voyageforum.com",101],["hmc-id.blogspot.com",101],["myabandonware.com",101],["wcofun.*",101],["ilforumdeibrutti.is",101],["prad.de",[102,154]],["chatta.it",103],["ketubanjiwa.com",104],["nsfw247.to",105],["funzen.net",105],["ilclubdellericette.it",105],["bollyholic.*",105],["extremereportbot.com",106],["getintopc.com",107],["qoshe.com",108],["lowellsun.com",109],["mamadu.pl",109],["dobrapogoda24.pl",109],["motohigh.pl",109],["namasce.pl",109],["ultimate-catch.eu",110],["cpopchanelofficial.com",111],["creditcardgenerator.com",112],["creditcardrush.com",112],["bostoncommons.net",112],["thejobsmovie.com",112],["hl-live.de",113],["satoshi-win.xyz",113],["encurtandourl.com",[113,117]],["www-daftarharga.blogspot.com",113],["ear-phone-review.com",113],["telefullenvivo.com",113],["listatv.pl",113],["daemon-hentai.com",[113,258]],["coin-profits.xyz",113],["relampagomovies.com",113],["wohnmobilforum.de",113],["nulledbear.com",113],["sinnerclownceviri.net",113],["nilopolisonline.com.br",114],["mesquitaonline.com",114],["yellowbridge.com",114],["yaoiotaku.com",115],["moneyhouse.ch",116],["ihow.info",117],["filesus.com",117],["gotxx.*",117],["sturls.com",117],["re.two.re",117],["turbo1.co",117],["cartoonsarea.xyz",117],["hartico.tv",117],["cupra.forum",117],["turkanime.*",118],["valeronevijao.com",118],["cigarlessarefy.com",118],["figeterpiazine.com",118],["yodelswartlike.com",118],["generatesnitrosate.com",118],["crownmakermacaronicism.com",118],["chromotypic.com",118],["gamoneinterrupted.com",118],["metagnathtuggers.com",118],["wolfdyslectic.com",118],["rationalityaloelike.com",118],["sizyreelingly.com",118],["simpulumlamerop.com",118],["urochsunloath.com",118],["monorhinouscassaba.com",118],["counterclockwisejacky.com",118],["35volitantplimsoles5.com",118],["scatch176duplicities.com",118],["antecoxalbobbing1010.com",118],["boonlessbestselling244.com",118],["cyamidpulverulence530.com",118],["guidon40hyporadius9.com",118],["449unceremoniousnasoseptal.com",118],["19turanosephantasia.com",118],["30sensualizeexpression.com",118],["321naturelikefurfuroid.com",118],["745mingiestblissfully.com",118],["availedsmallest.com",118],["greaseball6eventual20.com",118],["toxitabellaeatrebates306.com",118],["20demidistance9elongations.com",118],["audaciousdefaulthouse.com",118],["fittingcentermondaysunday.com",118],["fraudclatterflyingcar.com",118],["launchreliantcleaverriver.com",118],["matriculant401merited.com",118],["realfinanceblogcenter.com",118],["reputationsheriffkennethsand.com",118],["telyn610zoanthropy.com",118],["tubelessceliolymph.com",118],["tummulerviolableness.com",118],["un-block-voe.net",118],["v-o-e-unblock.com",118],["voe-un-block.com",118],["voe-unblock.*",118],["voeun-block.net",118],["voeunbl0ck.com",118],["voeunblck.com",118],["voeunblk.com",118],["voeunblock.com",118],["voeunblock1.com",118],["voeunblock2.com",118],["voeunblock3.com",118],["agefi.fr",119],["cariskuy.com",120],["letras2.com",120],["yusepjaelani.blogspot.com",121],["letras.mus.br",122],["mtlurb.com",123],["port.hu",124],["psychic.de",[124,154]],["forumdz.com",124],["abandonmail.com",124],["flmods.com",124],["zilinak.sk",124],["projectfreetv.stream",124],["hotdesimms.com",124],["pdfaid.com",124],["bootdey.com",124],["mail.com",124],["expresskaszubski.pl",124],["moegirl.org.cn",124],["flix-wave.lol",124],["fmovies0.cc",124],["worthcrete.com",124],["onemanhua.com",125],["laksa19.github.io",126],["javcl.com",126],["tvlogy.to",126],["rp5.*",126],["live.dragaoconnect.net",126],["beststremo.com",126],["seznamzpravy.cz",126],["xerifetech.com",126],["freemcserver.net",126],["t3n.de",127],["allindiaroundup.com",128],["tapchipi.com",129],["cuitandokter.com",129],["tech-blogs.com",129],["cardiagn.com",129],["dcleakers.com",129],["esgeeks.com",129],["pugliain.net",129],["uplod.net",129],["worldfreeware.com",129],["fikiri.net",129],["myhackingworld.com",129],["phoenixfansub.com",129],["vectorizer.io",130],["smgplaza.com",130],["onehack.us",130],["thapcam.net",130],["breznikar.com",130],["thefastlaneforum.com",131],["trade2win.com",132],["modagamers.com",133],["khatrimaza.*",133],["freemagazines.top",133],["pogolinks.*",133],["straatosphere.com",133],["rule34porn.net",133],["nullpk.com",133],["adslink.pw",133],["downloadudemy.com",133],["picgiraffe.com",133],["weadown.com",133],["freepornsex.net",133],["nurparatodos.com.ar",133],["popcornstream.*",134],["routech.ro",134],["hokej.net",134],["turkmmo.com",135],["acdriftingpro.com",136],["palermotoday.it",137],["baritoday.it",137],["trentotoday.it",137],["agrigentonotizie.it",137],["anconatoday.it",137],["arezzonotizie.it",137],["avellinotoday.it",137],["bresciatoday.it",137],["brindisireport.it",137],["casertanews.it",137],["cataniatoday.it",137],["cesenatoday.it",137],["chietitoday.it",137],["forlitoday.it",137],["frosinonetoday.it",137],["genovatoday.it",137],["ilpescara.it",137],["ilpiacenza.it",137],["latinatoday.it",137],["lecceprima.it",137],["leccotoday.it",137],["livornotoday.it",137],["messinatoday.it",137],["milanotoday.it",137],["modenatoday.it",137],["monzatoday.it",137],["novaratoday.it",137],["padovaoggi.it",137],["parmatoday.it",137],["perugiatoday.it",137],["pisatoday.it",137],["quicomo.it",137],["ravennatoday.it",137],["reggiotoday.it",137],["riminitoday.it",137],["romatoday.it",137],["salernotoday.it",137],["sondriotoday.it",137],["sportpiacenza.it",137],["ternitoday.it",137],["today.it",137],["torinotoday.it",137],["trevisotoday.it",137],["triesteprima.it",137],["udinetoday.it",137],["veneziatoday.it",137],["vicenzatoday.it",137],["thumpertalk.com",138],["arkcod.org",138],["thelayoff.com",139],["blog.coinsrise.net",139],["blog.cryptowidgets.net",139],["blog.insurancegold.in",139],["blog.wiki-topia.com",139],["blog.coinsvalue.net",139],["blog.cookinguide.net",139],["blog.freeoseocheck.com",139],["blog.makeupguide.net",139],["blog.carstopia.net",139],["blog.carsmania.net",139],["shorterall.com",139],["blog24.me",139],["maxstream.video",139],["tvepg.eu",139],["manwan.xyz",139],["dailymaverick.co.za",140],["ludigames.com",141],["made-by.org",141],["worldtravelling.com",141],["igirls.in",141],["technichero.com",141],["androidadult.com",141],["aeroxplorer.com",141],["sportitalialive.com",141],["starkroboticsfrc.com",142],["sinonimos.de",142],["antonimos.de",142],["quesignifi.ca",142],["tiktokrealtime.com",142],["tiktokcounter.net",142],["tpayr.xyz",142],["poqzn.xyz",142],["ashrfd.xyz",142],["rezsx.xyz",142],["tryzt.xyz",142],["ashrff.xyz",142],["rezst.xyz",142],["dawenet.com",142],["erzar.xyz",142],["waezm.xyz",142],["waezg.xyz",142],["blackwoodacademy.org",142],["cryptednews.space",142],["vivuq.com",142],["swgop.com",142],["vbnmll.com",142],["telcoinfo.online",142],["dshytb.com",142],["fadedfeet.com",143],["homeculina.com",143],["ineedskin.com",143],["kenzo-flowertag.com",143],["lawyex.co",143],["mdn.lol",143],["bitzite.com",144],["coingraph.us",145],["impact24.us",145],["nanolinks.in",146],["adrinolinks.com",146],["link.vipurl.in",146],["apkmodvn.com",147],["mod1s.com",147],["apkmoddone.com",148],["dl.apkmoddone.com",149],["phongroblox.com",149],["sitemini.io.vn",150],["vip1s.top",150],["financacerta.com",151],["encurtads.net",151],["shortencash.click",152],["lablue.*",153],["4-liga.com",154],["4fansites.de",154],["4players.de",154],["9monate.de",154],["aachener-nachrichten.de",154],["aachener-zeitung.de",154],["abendblatt.de",154],["abendzeitung-muenchen.de",154],["about-drinks.com",154],["abseits-ka.de",154],["airliners.de",154],["ajaxshowtime.com",154],["allgemeine-zeitung.de",154],["alpin.de",154],["antenne.de",154],["arcor.de",154],["areadvd.de",154],["areamobile.de",154],["ariva.de",154],["astronews.com",154],["aussenwirtschaftslupe.de",154],["auszeit.bio",154],["auto-motor-und-sport.de",154],["auto-service.de",154],["autobild.de",154],["autoextrem.de",154],["autopixx.de",154],["autorevue.at",154],["autotrader.nl",154],["az-online.de",154],["baby-vornamen.de",154],["babyclub.de",154],["bafoeg-aktuell.de",154],["berliner-kurier.de",154],["berliner-zeitung.de",154],["bigfm.de",154],["bikerszene.de",154],["bildderfrau.de",154],["blackd.de",154],["blick.de",154],["boerse-online.de",154],["boerse.de",154],["boersennews.de",154],["braunschweiger-zeitung.de",154],["brieffreunde.de",154],["brigitte.de",154],["buerstaedter-zeitung.de",154],["buffed.de",154],["businessinsider.de",154],["buzzfeed.at",154],["buzzfeed.de",154],["caravaning.de",154],["cavallo.de",154],["chefkoch.de",154],["cinema.de",154],["clever-tanken.de",154],["computerbild.de",154],["computerhilfen.de",154],["comunio-cl.com",154],["comunio.*",154],["connect.de",154],["chip.de",154],["da-imnetz.de",154],["dasgelbeblatt.de",154],["dbna.com",154],["dbna.de",154],["deichstube.de",154],["deine-tierwelt.de",154],["der-betze-brennt.de",154],["derwesten.de",154],["desired.de",154],["dhd24.com",154],["dieblaue24.com",154],["digitalfernsehen.de",154],["dnn.de",154],["donnerwetter.de",154],["e-hausaufgaben.de",154],["e-mountainbike.com",154],["eatsmarter.de",154],["echo-online.de",154],["ecomento.de",154],["einfachschoen.me",154],["elektrobike-online.com",154],["eltern.de",154],["epochtimes.de",154],["essen-und-trinken.de",154],["express.de",154],["extratipp.com",154],["familie.de",154],["fanfiktion.de",154],["fehmarn24.de",154],["fettspielen.de",154],["fid-gesundheitswissen.de",154],["finanzen.*",154],["finanznachrichten.de",154],["finanztreff.de",154],["finya.de",154],["firmenwissen.de",154],["fitforfun.de",154],["fnp.de",154],["football365.fr",154],["formel1.de",154],["fr.de",154],["frankfurter-wochenblatt.de",154],["freenet.de",154],["fremdwort.de",154],["froheweihnachten.info",154],["frustfrei-lernen.de",154],["fuldaerzeitung.de",154],["funandnews.de",154],["fussballdaten.de",154],["futurezone.de",154],["gala.de",154],["gamepro.de",154],["gamersglobal.de",154],["gamesaktuell.de",154],["gamestar.de",154],["gameswelt.*",154],["gamezone.de",154],["gartendialog.de",154],["gartenlexikon.de",154],["gedichte.ws",154],["geissblog.koeln",154],["gelnhaeuser-tageblatt.de",154],["general-anzeiger-bonn.de",154],["geniale-tricks.com",154],["genialetricks.de",154],["gesund-vital.de",154],["gesundheit.de",154],["gevestor.de",154],["gewinnspiele.tv",154],["giessener-allgemeine.de",154],["giessener-anzeiger.de",154],["gifhorner-rundschau.de",154],["giga.de",154],["gipfelbuch.ch",154],["gmuender-tagespost.de",154],["gruenderlexikon.de",154],["gusto.at",154],["gut-erklaert.de",154],["gutfuerdich.co",154],["hallo-muenchen.de",154],["hamburg.de",154],["hanauer.de",154],["hardwareluxx.de",154],["hartziv.org",154],["harzkurier.de",154],["haus-garten-test.de",154],["hausgarten.net",154],["haustec.de",154],["haz.de",154],["heftig.*",154],["heidelberg24.de",154],["heilpraxisnet.de",154],["heise.de",154],["helmstedter-nachrichten.de",154],["hersfelder-zeitung.de",154],["hftg.co",154],["hifi-forum.de",154],["hna.de",154],["hochheimer-zeitung.de",154],["hoerzu.de",154],["hofheimer-zeitung.de",154],["iban-rechner.de",154],["ikz-online.de",154],["immobilienscout24.de",154],["ingame.de",154],["inside-digital.de",154],["inside-handy.de",154],["investor-verlag.de",154],["jappy.com",154],["jpgames.de",154],["kabeleins.de",154],["kachelmannwetter.com",154],["kamelle.de",154],["kicker.de",154],["kindergeld.org",154],["klettern-magazin.de",154],["klettern.de",154],["kochbar.de",154],["kreis-anzeiger.de",154],["kreisbote.de",154],["kreiszeitung.de",154],["ksta.de",154],["kurierverlag.de",154],["lachainemeteo.com",154],["lampertheimer-zeitung.de",154],["landwirt.com",154],["laut.de",154],["lauterbacher-anzeiger.de",154],["leckerschmecker.me",154],["leinetal24.de",154],["lesfoodies.com",154],["levif.be",154],["lifeline.de",154],["liga3-online.de",154],["likemag.com",154],["linux-community.de",154],["linux-magazin.de",154],["live.vodafone.de",154],["ln-online.de",154],["lokalo24.de",154],["lustaufsleben.at",154],["lustich.de",154],["lvz.de",154],["lz.de",154],["mactechnews.de",154],["macwelt.de",154],["macworld.co.uk",154],["mail.de",154],["main-spitze.de",154],["manager-magazin.de",154],["manga-tube.me",154],["mathebibel.de",154],["mathepower.com",154],["maz-online.de",154],["medisite.fr",154],["mehr-tanken.de",154],["mein-kummerkasten.de",154],["mein-mmo.de",154],["mein-wahres-ich.de",154],["meine-anzeigenzeitung.de",154],["meinestadt.de",154],["menshealth.de",154],["mercato365.com",154],["merkur.de",154],["messen.de",154],["metal-hammer.de",154],["metalflirt.de",154],["meteologix.com",154],["minecraft-serverlist.net",154],["mittelbayerische.de",154],["modhoster.de",154],["moin.de",154],["mopo.de",154],["morgenpost.de",154],["motor-talk.de",154],["motorbasar.de",154],["motorradonline.de",154],["motorsport-total.com",154],["motortests.de",154],["mountainbike-magazin.de",154],["moviejones.de",154],["moviepilot.de",154],["mt.de",154],["mtb-news.de",154],["musiker-board.de",154],["musikexpress.de",154],["musikradar.de",154],["mz-web.de",154],["n-tv.de",154],["naumburger-tageblatt.de",154],["netzwelt.de",154],["neuepresse.de",154],["neueroeffnung.info",154],["news.at",154],["news.de",154],["news38.de",154],["newsbreak24.de",154],["nickles.de",154],["nicknight.de",154],["nl.hardware.info",154],["nn.de",154],["nnn.de",154],["nordbayern.de",154],["notebookchat.com",154],["notebookcheck-ru.com",154],["notebookcheck-tr.com",154],["notebookcheck.*",154],["noz-cdn.de",154],["noz.de",154],["nrz.de",154],["nw.de",154],["nwzonline.de",154],["oberhessische-zeitung.de",154],["och.to",154],["oeffentlicher-dienst.info",154],["onlinekosten.de",154],["onvista.de",154],["op-marburg.de",154],["op-online.de",154],["outdoor-magazin.com",154],["outdoorchannel.de",154],["paradisi.de",154],["pc-magazin.de",154],["pcgames.de",154],["pcgameshardware.de",154],["pcwelt.de",154],["pcworld.es",154],["peiner-nachrichten.de",154],["pferde.de",154],["pietsmiet.de",154],["pixelio.de",154],["pkw-forum.de",154],["playboy.de",154],["playfront.de",154],["pnn.de",154],["pons.com",154],["prignitzer.de",154],["profil.at",154],["promipool.de",154],["promobil.de",154],["prosiebenmaxx.de",154],["quoka.de",154],["radio.at",154],["radio.de",154],["radio.dk",154],["radio.es",154],["radio.fr",154],["radio.it",154],["radio.net",154],["radio.pl",154],["radio.pt",154],["radio.se",154],["ran.de",154],["readmore.de",154],["rechtslupe.de",154],["recording.de",154],["rennrad-news.de",154],["reuters.com",154],["reviersport.de",154],["rhein-main-presse.de",154],["rheinische-anzeigenblaetter.de",154],["rimondo.com",154],["roadbike.de",154],["roemische-zahlen.net",154],["rollingstone.de",154],["rot-blau.com",154],["rp-online.de",154],["rtl.de",[154,243]],["rtv.de",154],["rugby365.fr",154],["ruhr24.de",154],["rundschau-online.de",154],["runnersworld.de",154],["safelist.eu",154],["salzgitter-zeitung.de",154],["sat1.de",154],["sat1gold.de",154],["schoener-wohnen.de",154],["schwaebische-post.de",154],["schwarzwaelder-bote.de",154],["serienjunkies.de",154],["shz.de",154],["sixx.de",154],["skodacommunity.de",154],["smart-wohnen.net",154],["sn.at",154],["sozialversicherung-kompetent.de",154],["spiegel.de",154],["spielen.de",154],["spieletipps.de",154],["spielfilm.de",154],["sport.de",154],["sport1.de",154],["sport365.fr",154],["sportal.de",154],["spox.com",154],["stern.de",154],["stuttgarter-nachrichten.de",154],["stuttgarter-zeitung.de",154],["sueddeutsche.de",154],["svz.de",154],["szene1.at",154],["szene38.de",154],["t-online.de",154],["tagesspiegel.de",154],["taschenhirn.de",154],["techadvisor.co.uk",154],["techstage.de",154],["tele5.de",154],["teltarif.de",154],["testedich.*",154],["the-voice-of-germany.de",154],["thueringen24.de",154],["tichyseinblick.de",154],["tierfreund.co",154],["tiervermittlung.de",154],["torgranate.de",154],["transfermarkt.*",154],["trend.at",154],["truckscout24.*",154],["tv-media.at",154],["tvdigital.de",154],["tvinfo.de",154],["tvspielfilm.de",154],["tvtoday.de",154],["tvtv.*",154],["tz.de",154],["unicum.de",154],["unnuetzes.com",154],["unsere-helden.com",154],["unterhalt.net",154],["usinger-anzeiger.de",154],["usp-forum.de",154],["videogameszone.de",154],["vienna.at",154],["vip.de",154],["virtualnights.com",154],["vox.de",154],["wa.de",154],["wallstreet-online.de",[154,157]],["waz.de",154],["weather.us",154],["webfail.com",154],["weihnachten.me",154],["weihnachts-bilder.org",154],["weihnachts-filme.com",154],["welt.de",154],["weltfussball.at",154],["weristdeinfreund.de",154],["werkzeug-news.de",154],["werra-rundschau.de",154],["wetterauer-zeitung.de",154],["wetteronline.*",154],["wieistmeineip.*",154],["wiesbadener-kurier.de",154],["wiesbadener-tagblatt.de",154],["winboard.org",154],["windows-7-forum.net",154],["winfuture.de",[154,162]],["wintotal.de",154],["wlz-online.de",154],["wn.de",154],["wohngeld.org",154],["wolfenbuetteler-zeitung.de",154],["wolfsburger-nachrichten.de",154],["woman.at",154],["womenshealth.de",154],["wormser-zeitung.de",154],["woxikon.de",154],["wp.de",154],["wr.de",154],["wunderweib.de",154],["yachtrevue.at",154],["ze.tt",154],["zeit.de",154],["meineorte.com",155],["osthessen-news.de",155],["techadvisor.com",155],["focus.de",155],["wetter.*",156],["deinesexfilme.com",158],["einfachtitten.com",158],["lesbenhd.com",158],["milffabrik.com",[158,215]],["porn-monkey.com",158],["porndrake.com",158],["pornhubdeutsch.net",158],["pornoaffe.com",158],["pornodavid.com",158],["pornoente.tv",[158,215]],["pornofisch.com",158],["pornofelix.com",158],["pornohammer.com",158],["pornohelm.com",158],["pornoklinge.com",158],["pornotom.com",[158,215]],["pornotommy.com",158],["pornovideos-hd.com",158],["pornozebra.com",[158,215]],["xhamsterdeutsch.xyz",158],["xnxx-sexfilme.com",158],["nu6i-bg-net.com",159],["khsm.io",159],["webcreator-journal.com",159],["msdos-games.com",159],["blocklayer.com",159],["weknowconquer.com",159],["aquarius-horoscopes.com",160],["cancer-horoscopes.com",160],["dubipc.blogspot.com",160],["echoes.gr",160],["engel-horoskop.de",160],["freegames44.com",160],["fuerzasarmadas.eu",160],["gemini-horoscopes.com",160],["jurukunci.net",160],["krebs-horoskop.com",160],["leo-horoscopes.com",160],["maliekrani.com",160],["nklinks.click",160],["ourenseando.es",160],["pisces-horoscopes.com",160],["radio-en-direct.fr",160],["sagittarius-horoscopes.com",160],["scorpio-horoscopes.com",160],["singlehoroskop-loewe.de",160],["skat-karten.de",160],["skorpion-horoskop.com",160],["taurus-horoscopes.com",160],["the1security.com",160],["virgo-horoscopes.com",160],["zonamarela.blogspot.com",160],["yoima.hatenadiary.com",160],["kaystls.site",161],["carscoops.com",162],["dziennik.pl",162],["eurointegration.com.ua",162],["flatpanelshd.com",162],["fourfourtwo.co.kr",162],["hoyme.jp",162],["issuya.com",162],["itainews.com",162],["iusm.co.kr",162],["logicieleducatif.fr",162],["mynet.com",[162,181]],["onlinegdb.com",162],["picrew.me",162],["pravda.com.ua",162],["reportera.co.kr",162],["sportsrec.com",162],["sportsseoul.com",162],["text-compare.com",162],["tweaksforgeeks.com",162],["wfmz.com",162],["worldhistory.org",162],["palabr.as",162],["motscroises.fr",162],["cruciverba.it",162],["w.grapps.me",162],["gazetaprawna.pl",162],["pressian.com",162],["raenonx.cc",[162,259]],["indiatimes.com",162],["missyusa.com",162],["aikatu.jp",162],["ark-unity.com",162],["cool-style.com.tw",162],["doanhnghiepvn.vn",162],["automobile-catalog.com",163],["motorbikecatalog.com",163],["maketecheasier.com",163],["mlbpark.donga.com",164],["jjang0u.com",165],["my-code4you.blogspot.com",166],["vrcmods.com",167],["osuskinner.com",167],["osuskins.net",167],["pentruea.com",[168,169]],["mchacks.net",170],["why-tech.it",171],["compsmag.com",172],["tapetus.pl",173],["autoroad.cz",174],["brawlhalla.fr",174],["tecnobillo.com",174],["sexcamfreeporn.com",175],["breatheheavy.com",176],["wenxuecity.com",177],["key-hub.eu",178],["fabioambrosi.it",179],["tattle.life",180],["emuenzen.de",180],["terrylove.com",180],["cidade.iol.pt",182],["fantacalcio.it",183],["hentaifreak.org",184],["hypebeast.com",185],["krankheiten-simulieren.de",186],["catholic.com",187],["3dmodelshare.org",188],["techinferno.com",189],["ibeconomist.com",190],["bookriot.com",191],["purposegames.com",192],["globo.com",193],["latimes.com",193],["claimrbx.gg",194],["perelki.net",195],["vpn-anbieter-vergleich-test.de",196],["livingincebuforums.com",197],["paperzonevn.com",198],["alltechnerd.com",199],["malaysianwireless.com",200],["erinsakura.com",201],["infofuge.com",201],["freejav.guru",201],["novelmultiverse.com",201],["fritidsmarkedet.dk",202],["maskinbladet.dk",202],["15min.lt",203],["baddiehub.com",204],["mr9soft.com",205],["21porno.com",206],["adult-sex-gamess.com",207],["hentaigames.app",207],["mobilesexgamesx.com",207],["mysexgamer.com",207],["porngameshd.com",207],["sexgamescc.com",207],["xnxx-sex-videos.com",207],["f2movies.to",208],["freeporncave.com",209],["tubsxxx.com",210],["manga18fx.com",211],["freebnbcoin.com",211],["sextvx.com",212],["studydhaba.com",213],["freecourse.tech",213],["victor-mochere.com",213],["papunika.com",213],["mobilanyheter.net",213],["prajwaldesai.com",[213,233]],["ftuapps.dev",213],["muztext.com",214],["pornohans.com",215],["nursexfilme.com",215],["pornohirsch.net",215],["xhamster-sexvideos.com",215],["pornoschlange.com",215],["xhamsterdeutsch.*",215],["hdpornos.net",215],["gutesexfilme.com",215],["zona-leros.com",215],["charbelnemnom.com",216],["simplebits.io",217],["online-fix.me",218],["privatemoviez.*",219],["gamersdiscussionhub.com",219],["owlzo.com",220],["q1003.com",221],["blogpascher.com",222],["testserver.pro",223],["lifestyle.bg",223],["money.bg",223],["news.bg",223],["topsport.bg",223],["webcafe.bg",223],["schoolcheats.net",224],["mgnet.xyz",225],["advertiserandtimes.co.uk",226],["xvideos2020.me",227],["111.90.159.132",228],["techsolveprac.com",229],["joomlabeginner.com",230],["largescaleforums.com",231],["dubznetwork.com",232],["dongknows.com",234],["traderepublic.community",235],["babia.to",236],["code2care.org",237],["gmx.*",238],["xxxxsx.com",239],["ngontinh24.com",240],["idevicecentral.com",241],["dzeko11.net",242],["mangacrab.com",244],["hortonanderfarom.blogspot.com",245],["viefaucet.com",246],["pourcesoir.in",246],["cloud-computing-central.com",247],["afk.guide",248],["businessnamegenerator.com",249],["derstandard.at",250],["derstandard.de",250],["rocketnews24.com",251],["soranews24.com",251],["youpouch.com",251],["gourmetscans.net",252],["ilsole24ore.com",253],["ipacrack.com",254],["hentaiporn.one",255],["infokik.com",256],["porhubvideo.com",257],["webseriessex.com",257],["panuvideo.com",257],["pornktubes.net",257],["daemonanime.net",258],["bgmateriali.com",258],["deezer.com",259],["fosslinux.com",260],["shrdsk.me",261],["examword.com",262],["sempreupdate.com.br",262],["tribuna.com",263],["trendsderzukunft.de",264],["gal-dem.com",264],["lostineu.eu",264],["oggitreviso.it",264],["speisekarte.de",264],["mixed.de",264],["lightnovelpub.*",[265,266]],["lightnovelspot.com",[265,266]],["lightnovelworld.com",[265,266]],["novelpub.com",[265,266]],["webnovelpub.com",[265,266]],["hwzone.co.il",268],["nammakalvi.com",269],["c2g.at",270],["terafly.me",270],["elamigos-games.com",270],["elamigos-games.net",270],["elamigosgames.org",270],["dktechnicalmate.com",271],["recipahi.com",271],["vpntester.org",272],["japscan.lol",273],["digitask.ru",274],["tempumail.com",275],["sexvideos.host",276],["camcaps.*",277],["10alert.com",278],["cryptstream.de",279],["nydus.org",279],["techhelpbd.com",280],["fapdrop.com",281],["cellmapper.net",282],["hdrez.com",283],["youwatch-serie.com",283],["russland.jetzt",283],["bembed.net",284],["embedv.net",284],["fslinks.org",284],["listeamed.net",284],["v6embed.xyz",284],["vembed.*",284],["vgplayer.xyz",284],["vid-guard.com",284],["yesmovies.*>>",284],["pistona.xyz",284],["vinomo.xyz",284],["giga-uqload.xyz",284],["moflix-stream.*",[284,339]],["printablecreative.com",285],["peachprintable.com",285],["comohoy.com",286],["leak.sx",286],["paste.bin.sx",286],["pornleaks.in",286],["merlininkazani.com",286],["j91.asia",287],["rekidai-info.github.io",288],["jeniusplay.com",289],["indianyug.com",290],["rgb.vn",290],["needrom.com",291],["criptologico.com",292],["megadrive-emulator.com",293],["eromanga-show.com",294],["hentai-one.com",294],["hentaipaw.com",294],["10minuteemails.com",295],["luxusmail.org",295],["w3cub.com",296],["bangpremier.com",297],["nyaa.iss.ink",298],["drivebot.*",299],["thenextplanet1.*",300],["tnp98.xyz",300],["freepdfcomic.com",301],["techedubyte.com",302],["tickzoo.tv",303],["oploverz.*",303],["memedroid.com",304],["karaoketexty.cz",305],["filmizlehdfilm.com",306],["filmizletv.*",306],["fullfilmizle.cc",306],["gofilmizle.net",306],["resortcams.com",307],["cheatography.com",307],["sonixgvn.net",308],["autoscout24.*",309],["mjakmama24.pl",310],["cheatermad.com",311],["ville-ideale.fr",312],["brainly.*",313],["eodev.com",313],["xfreehd.com",314],["freethesaurus.com",315],["thefreedictionary.com",315],["fm-arena.com",316],["tradersunion.com",317],["tandess.com",318],["allosurf.net",318],["spontacts.com",319],["dankmemer.lol",320],["getexploits.com",321],["fplstatistics.com",322],["breitbart.com",323],["salidzini.lv",324],["choosingnothing.com",325],["cryptorank.io",[326,327]],["4kwebplay.xyz",328],["qqwebplay.xyz",328],["viwlivehdplay.ru",328],["molbiotools.com",329],["vods.tv",330],["18xxx.xyz",331],["raidrush.net",332],["xnxxcom.xyz",333],["videzz.net",334],["spambox.xyz",335],["dreamdth.com",336],["freemodsapp.in",336],["onlytech.com",336],["player.jeansaispasplus.homes",337],["en-thunderscans.com",338],["iqksisgw.xyz",340],["caroloportunidades.com.br",341],["coempregos.com.br",341],["foodiesgallery.com",341],["vikatan.com",342],["camhub.world",343],["mma-core.*",344],["teracourses.com",345],["servustv.com",346],["streambtw.com",347],["qrcodemonkey.net",348],["tv-films.co.uk",349],["lastampa.it",350],["infinityscans.xyz",351],["infinityscans.net",351],["infinityscans.org",351],["dogdrip.net",352],["infinityfree.com",352],["smsonline.cloud",[352,353]],["faqwiki.us",354]]);
const exceptionsMap = new Map([["vvid30c.*",[284]]]);
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
