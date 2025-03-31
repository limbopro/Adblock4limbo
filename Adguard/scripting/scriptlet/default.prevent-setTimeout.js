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
const argsList = [["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["isDesktopApp","1000"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["afterOpen"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["()","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["checkAds"],["documentElement.innerHTML"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["/Ads|adbl/"],["/show|innerHTML/"],["getComputedStyle"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["loadBanners"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["atob","120000"],["#ad_blocker_detector"],["googleFC"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["IKDESW"]];
const hostnamesMap = new Map([["m.timesofindia.com",0],["timesofindia.indiatimes.com",0],["youmath.it",0],["redensarten-index.de",0],["lesoir.be",0],["electriciansforums.net",0],["keralatelecom.info",0],["universegunz.net",0],["happypenguin.altervista.org",0],["everyeye.it",0],["eztv.*",0],["bluedrake42.com",0],["supermarioemulator.com",0],["futbollibrehd.com",0],["eska.pl",0],["eskarock.pl",0],["voxfm.pl",0],["mathaeser.de",0],["1337x.*",0],["betaseries.com",0],["free-sms-receive.com",0],["sms-receive-online.com",0],["computer76.ru",0],["golem.de",[1,2,156]],["hdbox.ws",2],["todopolicia.com",2],["scat.gold",2],["freecoursesite.com",2],["windowcleaningforums.co.uk",2],["cruisingearth.com",2],["hobby-machinist.com",2],["freegogpcgames.com",2],["latitude.to",2],["kitchennovel.com",2],["w3layouts.com",2],["blog.receivefreesms.co.uk",2],["eductin.com",2],["dealsfinders.blog",2],["audiobooks4soul.com",2],["tinhocdongthap.com",2],["sakarnewz.com",2],["downloadr.in",2],["topcomicporno.com",2],["sushi-scan.*",2],["celtadigital.com",2],["iptvrun.com",2],["adsup.lk",2],["cryptomonitor.in",2],["areatopik.com",2],["cardscanner.co",2],["nullforums.net",2],["courseclub.me",2],["tamarindoyam.com",2],["jeep-cj.com",2],["choiceofmods.com",2],["myqqjd.com",2],["ssdtop.com",2],["apkhex.com",2],["gezegenforum.com",2],["iptvapps.net",2],["null-scripts.net",2],["nullscripts.net",2],["bloground.ro",2],["witcherhour.com",2],["ottverse.com",2],["torrentmac.net",2],["mazakony.com",2],["laptechinfo.com",2],["mc-at.org",2],["playstationhaber.com",2],["seriesperu.com",2],["spigotunlocked.*",2],["pesprofessionals.com",2],["wpsimplehacks.com",2],["sportshub.to",[2,236]],["topsporter.net",[2,236]],["darkwanderer.net",2],["truckingboards.com",2],["coldfrm.org",2],["azrom.net",2],["freepatternsarea.com",2],["alttyab.net",2],["ahmedmode.*",2],["mobilkulup.com",2],["esopress.com",2],["nesiaku.my.id",2],["jipinsoft.com",2],["surfsees.com",2],["truthnews.de",2],["farsinama.com",2],["worldofiptv.com",2],["vuinsider.com",2],["crazydl.net",2],["gamemodsbase.com",2],["babiato.tech",2],["secuhex.com",2],["turkishaudiocenter.com",2],["galaxyos.net",2],["bizdustry.com",2],["storefront.com.ng",2],["pkbiosfix.com",2],["casi3.xyz",2],["starleaks.org",2],["forum-xiaomi.com",2],["mediafire.com",3],["wcoanimedub.tv",4],["wcoforever.net",4],["openspeedtest.com",4],["addtobucketlist.com",4],["3dzip.org",[4,63]],["ilmeteo.it",4],["wcoforever.com",4],["comprovendolibri.it",4],["healthelia.com",4],["keephealth.info",5],["kissasian.*",5],["anghami.com",6],["yts.*",7],["720pstream.*",7],["1stream.*",7],["tutele.sx",7],["katestube.com",8],["short.pe",8],["thefmovies.*",8],["footystreams.net",8],["seattletimes.com",9],["bestgames.com",10],["yiv.com",10],["globalrph.com",11],["e-glossa.it",12],["webcheats.com.br",13],["urlcero.*",14],["gala.fr",15],["gentside.com",15],["geo.fr",15],["hbrfrance.fr",15],["nationalgeographic.fr",15],["ohmymag.com",15],["serengo.net",15],["vsd.fr",15],["updato.com",[16,32]],["totaldebrid.*",17],["sandrives.*",17],["daizurin.com",17],["pendekarsubs.us",17],["dreamfancy.org",17],["rysafe.blogspot.com",17],["techacode.com",17],["toppng.com",17],["th-world.com",17],["avjamack.com",17],["avjamak.net",17],["dlhd.sx",18],["embedstream.me",18],["yts-subs.net",18],["cnnamador.com",19],["nudecelebforum.com",20],["pronpic.org",21],["thewebflash.com",22],["discordfastfood.com",22],["xup.in",22],["popularmechanics.com",23],["op.gg",24],["comunidadgzone.es",25],["fxporn69.*",25],["mp3fy.com",25],["lebensmittelpraxis.de",25],["aliancapes.*",25],["ebookdz.com",25],["forum-pokemon-go.fr",25],["praxis-jugendarbeit.de",25],["dictionnaire-medical.net",25],["cle0desktop.blogspot.com",25],["up-load.io",25],["keysbrasil.blogspot.com",25],["hotpress.info",25],["turkleech.com",25],["anibatch.me",25],["anime-i.com",25],["healthtune.site",25],["gewinde-normen.de",25],["tucinehd.com",25],["plex-guide.de",25],["jellynote.com",26],["pouvideo.*",27],["povvideo.*",27],["povw1deo.*",27],["povwideo.*",27],["powv1deo.*",27],["powvibeo.*",27],["powvideo.*",27],["powvldeo.*",27],["eporner.com",28],["pornbimbo.com",29],["4j.com",29],["avoiderrors.com",30],["sitarchive.com",30],["livenewsof.com",30],["topnewsshow.com",30],["gatcha.org",30],["empregoestagios.com",30],["everydayonsales.com",30],["kusonime.com",30],["suicidepics.com",30],["codesnail.com",30],["codingshiksha.com",30],["graphicux.com",30],["asyadrama.com",30],["bitcoinegypt.news",30],["citychilli.com",30],["talkjarvis.com",30],["hdmotori.it",31],["tubsexer.*",33],["femdomtb.com",33],["porno-tour.*",33],["bobs-tube.com",33],["lenkino.*",33],["pornfd.com",33],["pornomoll.*",33],["camsclips.*",33],["popno-tour.net",33],["watchmdh.to",33],["camwhores.tv",33],["camhub.cc",33],["elfqrin.com",34],["satcesc.com",35],["apfelpatient.de",35],["lusthero.com",36],["m4ufree.*",37],["m2list.com",37],["embed.nana2play.com",37],["elahmad.com",37],["dofusports.xyz",37],["dallasnews.com",38],["lnk.news",39],["lnk.parts",39],["efukt.com",40],["wendycode.com",40],["springfieldspringfield.co.uk",41],["porndoe.com",42],["smsget.net",[43,44]],["kjanime.net",45],["gioialive.it",46],["classicreload.com",47],["scriptzhub.com",47],["hotpornfile.org",48],["coolsoft.altervista.org",48],["hackedonlinegames.com",48],["dailytech-news.eu",48],["settlersonlinemaps.com",48],["ad-doge.com",48],["magdownload.org",48],["kpkuang.org",48],["crypto4yu.com",48],["faucetwork.space",48],["writedroid.*",48],["thenightwithoutthedawn.blogspot.com",48],["entutes.com",48],["claimlite.club",48],["newscon.org",48],["rl6mans.com",48],["chicoer.com",49],["bostonherald.com",49],["dailycamera.com",49],["maxcheaters.com",50],["postimees.ee",50],["police.community",50],["gisarea.com",50],["schaken-mods.com",50],["tvnet.lv",50],["theclashify.com",50],["txori.com",50],["olarila.com",50],["deletedspeedstreams.blogspot.com",50],["schooltravelorganiser.com",50],["xhardhempus.net",50],["mhn.quest",50],["leagueofgraphs.com",50],["hieunguyenphoto.com",50],["benzinpreis.de",50],["sportsplays.com",51],["telerium.*",52],["pornvideotop.com",53],["krotkoosporcie.pl",53],["xstory-fr.com",53],["ytapi.cc",53],["deinesexfilme.com",54],["einfachtitten.com",54],["halloporno.com",54],["herzporno.com",54],["lesbenhd.com",54],["milffabrik.com",[54,208]],["porn-monkey.com",54],["porndrake.com",54],["pornhubdeutsch.net",54],["pornoaffe.com",54],["pornodavid.com",54],["pornoente.tv",[54,208]],["pornofisch.com",54],["pornofelix.com",54],["pornohammer.com",54],["pornohelm.com",54],["pornoklinge.com",54],["pornotom.com",[54,208]],["pornotommy.com",54],["pornovideos-hd.com",54],["pornozebra.com",[54,208]],["xhamsterdeutsch.xyz",54],["xnxx-sexfilme.com",54],["letribunaldunet.fr",55],["vladan.fr",55],["live-tv-channels.org",56],["eslfast.com",57],["freegamescasual.com",58],["tcpvpn.com",59],["oko.sh",59],["timesnownews.com",59],["timesnowhindi.com",59],["timesnowmarathi.com",59],["zoomtventertainment.com",59],["tsubasa.im",60],["sholah.net",61],["2rdroid.com",61],["bisceglielive.it",62],["pandajogosgratis.com.br",64],["5278.cc",65],["pandafreegames.*",66],["tonspion.de",67],["duplichecker.com",68],["plagiarismchecker.co",68],["plagiarismdetector.net",68],["searchenginereports.net",68],["smallseotools.com",69],["linkspaid.com",70],["proxydocker.com",70],["beeimg.com",[71,72]],["emturbovid.com",72],["findjav.com",72],["javggvideo.xyz",72],["mmtv01.xyz",72],["stbturbo.xyz",72],["streamsilk.com",72],["ftlauderdalebeachcam.com",73],["ftlauderdalewebcam.com",73],["juneauharborwebcam.com",73],["keywestharborwebcam.com",73],["kittycatcam.com",73],["mahobeachcam.com",73],["miamiairportcam.com",73],["morganhillwebcam.com",73],["njwildlifecam.com",73],["nyharborwebcam.com",73],["paradiseislandcam.com",73],["pompanobeachcam.com",73],["portbermudawebcam.com",73],["portcanaveralwebcam.com",73],["portevergladeswebcam.com",73],["portmiamiwebcam.com",73],["portnywebcam.com",73],["portnassauwebcam.com",73],["portstmaartenwebcam.com",73],["portstthomaswebcam.com",73],["porttampawebcam.com",73],["sxmislandcam.com",73],["themes-dl.com",73],["badassdownloader.com",73],["badasshardcore.com",73],["badassoftcore.com",73],["nulljungle.com",73],["teevee.asia",73],["otakukan.com",73],["thoptv.*",74],["vinomo.xyz",75],["bembed.net",75],["embedv.net",75],["fslinks.org",75],["listeamed.net",75],["v6embed.xyz",75],["vembed.*",75],["vgplayer.xyz",75],["vid-guard.com",75],["giga-uqload.xyz",75],["moflix-stream.*",[75,338]],["gearingcommander.com",76],["generate.plus",77],["calculate.plus",77],["avcesar.com",78],["audiotag.info",79],["tudigitale.it",80],["ibcomputing.com",81],["legia.net",82],["acapellas4u.co.uk",83],["robloxscripts.com",84],["libreriamo.it",84],["postazap.com",84],["medebooks.xyz",84],["mashtips.com",84],["marriedgames.com.br",84],["4allprograms.me",84],["shortzzy.*",84],["nurgsm.com",84],["certbyte.com",84],["plugincrack.com",84],["gamingdeputy.com",84],["freewebcart.com",84],["autojournal.fr",85],["autoplus.fr",85],["sportauto.fr",85],["streamhentaimovies.com",86],["konten.co.id",87],["diariodenavarra.es",88],["scripai.com",88],["myfxbook.com",88],["whatfontis.com",88],["tubereader.me",88],["xiaomifans.pl",89],["eletronicabr.com",89],["optifine.net",90],["luzernerzeitung.ch",91],["tagblatt.ch",91],["spellcheck.net",92],["spellchecker.net",92],["spellweb.com",92],["ableitungsrechner.net",93],["alternet.org",94],["gourmetsupremacy.com",94],["shrib.com",95],["streameast.*",96],["thestreameast.*",96],["coolcast2.com",96],["techclips.net",96],["daddylivehd.*",96],["footyhunter.lol",96],["poscitech.click",96],["wecast.to",96],["sportbar.live",96],["freecourseweb.com",97],["devcourseweb.com",97],["coursewikia.com",97],["courseboat.com",97],["coursehulu.com",97],["pornhub.*",98],["lne.es",99],["pornult.com",100],["webcamsdolls.com",100],["bitcotasks.com",[100,142]],["adsy.pw",100],["playstore.pw",100],["exactpay.online",100],["thothd.to",100],["proplanta.de",101],["mad4wheels.com",102],["logi.im",102],["emailnator.com",102],["textograto.com",103],["voyageforum.com",104],["hmc-id.blogspot.com",104],["myabandonware.com",104],["wcofun.*",104],["ilforumdeibrutti.is",104],["prad.de",[105,156]],["chatta.it",106],["ketubanjiwa.com",107],["nsfw247.to",108],["funzen.net",108],["ilclubdellericette.it",108],["bollyholic.*",108],["extremereportbot.com",109],["getintopc.com",110],["qoshe.com",111],["lowellsun.com",112],["mamadu.pl",112],["dobrapogoda24.pl",112],["motohigh.pl",112],["namasce.pl",112],["ultimate-catch.eu",113],["cpopchanelofficial.com",114],["creditcardgenerator.com",115],["creditcardrush.com",115],["bostoncommons.net",115],["thejobsmovie.com",115],["hl-live.de",116],["satoshi-win.xyz",116],["encurtandourl.com",[116,120]],["www-daftarharga.blogspot.com",116],["ear-phone-review.com",116],["telefullenvivo.com",116],["listatv.pl",116],["daemon-hentai.com",[116,255]],["coin-profits.xyz",116],["relampagomovies.com",116],["wohnmobilforum.de",116],["nulledbear.com",116],["sinnerclownceviri.net",116],["nilopolisonline.com.br",117],["mesquitaonline.com",117],["yellowbridge.com",117],["yaoiotaku.com",118],["moneyhouse.ch",119],["ihow.info",120],["filesus.com",120],["gotxx.*",120],["sturls.com",120],["re.two.re",120],["turbo1.co",120],["cartoonsarea.xyz",120],["hartico.tv",120],["cupra.forum",120],["turkanime.*",121],["valeronevijao.com",121],["cigarlessarefy.com",121],["figeterpiazine.com",121],["yodelswartlike.com",121],["generatesnitrosate.com",121],["crownmakermacaronicism.com",121],["chromotypic.com",121],["gamoneinterrupted.com",121],["metagnathtuggers.com",121],["wolfdyslectic.com",121],["rationalityaloelike.com",121],["sizyreelingly.com",121],["simpulumlamerop.com",121],["urochsunloath.com",121],["monorhinouscassaba.com",121],["counterclockwisejacky.com",121],["35volitantplimsoles5.com",121],["scatch176duplicities.com",121],["antecoxalbobbing1010.com",121],["boonlessbestselling244.com",121],["cyamidpulverulence530.com",121],["guidon40hyporadius9.com",121],["449unceremoniousnasoseptal.com",121],["19turanosephantasia.com",121],["30sensualizeexpression.com",121],["321naturelikefurfuroid.com",121],["745mingiestblissfully.com",121],["availedsmallest.com",121],["greaseball6eventual20.com",121],["toxitabellaeatrebates306.com",121],["20demidistance9elongations.com",121],["audaciousdefaulthouse.com",121],["fittingcentermondaysunday.com",121],["fraudclatterflyingcar.com",121],["launchreliantcleaverriver.com",121],["matriculant401merited.com",121],["realfinanceblogcenter.com",121],["reputationsheriffkennethsand.com",121],["telyn610zoanthropy.com",121],["tubelessceliolymph.com",121],["tummulerviolableness.com",121],["un-block-voe.net",121],["v-o-e-unblock.com",121],["voe-un-block.com",121],["voe-unblock.*",121],["voeun-block.net",121],["voeunbl0ck.com",121],["voeunblck.com",121],["voeunblk.com",121],["voeunblock.com",121],["voeunblock1.com",121],["voeunblock2.com",121],["voeunblock3.com",121],["agefi.fr",122],["cariskuy.com",123],["letras2.com",123],["yusepjaelani.blogspot.com",124],["letras.mus.br",125],["mtlurb.com",126],["port.hu",127],["psychic.de",[127,156]],["forumdz.com",127],["abandonmail.com",127],["flmods.com",127],["zilinak.sk",127],["projectfreetv.stream",127],["hotdesimms.com",127],["pdfaid.com",127],["bootdey.com",127],["mail.com",127],["expresskaszubski.pl",127],["moegirl.org.cn",127],["flix-wave.lol",127],["fmovies0.cc",127],["worthcrete.com",127],["onemanhua.com",128],["laksa19.github.io",129],["javcl.com",129],["tvlogy.to",129],["rp5.*",129],["live.dragaoconnect.net",129],["beststremo.com",129],["seznamzpravy.cz",129],["xerifetech.com",129],["freemcserver.net",129],["t3n.de",130],["allindiaroundup.com",131],["tapchipi.com",132],["cuitandokter.com",132],["tech-blogs.com",132],["cardiagn.com",132],["dcleakers.com",132],["esgeeks.com",132],["pugliain.net",132],["uplod.net",132],["worldfreeware.com",132],["fikiri.net",132],["myhackingworld.com",132],["phoenixfansub.com",132],["vectorizer.io",133],["smgplaza.com",133],["onehack.us",133],["thapcam.net",133],["breznikar.com",133],["thefastlaneforum.com",134],["trade2win.com",135],["modagamers.com",136],["khatrimaza.*",136],["freemagazines.top",136],["pogolinks.*",136],["straatosphere.com",136],["rule34porn.net",136],["nullpk.com",136],["adslink.pw",136],["downloadudemy.com",136],["picgiraffe.com",136],["weadown.com",136],["freepornsex.net",136],["nurparatodos.com.ar",136],["popcornstream.*",137],["routech.ro",137],["hokej.net",137],["turkmmo.com",138],["acdriftingpro.com",139],["palermotoday.it",140],["baritoday.it",140],["trentotoday.it",140],["agrigentonotizie.it",140],["anconatoday.it",140],["arezzonotizie.it",140],["avellinotoday.it",140],["bresciatoday.it",140],["brindisireport.it",140],["casertanews.it",140],["cataniatoday.it",140],["cesenatoday.it",140],["chietitoday.it",140],["forlitoday.it",140],["frosinonetoday.it",140],["genovatoday.it",140],["ilpescara.it",140],["ilpiacenza.it",140],["latinatoday.it",140],["lecceprima.it",140],["leccotoday.it",140],["livornotoday.it",140],["messinatoday.it",140],["milanotoday.it",140],["modenatoday.it",140],["monzatoday.it",140],["novaratoday.it",140],["padovaoggi.it",140],["parmatoday.it",140],["perugiatoday.it",140],["pisatoday.it",140],["quicomo.it",140],["ravennatoday.it",140],["reggiotoday.it",140],["riminitoday.it",140],["romatoday.it",140],["salernotoday.it",140],["sondriotoday.it",140],["sportpiacenza.it",140],["ternitoday.it",140],["today.it",140],["torinotoday.it",140],["trevisotoday.it",140],["triesteprima.it",140],["udinetoday.it",140],["veneziatoday.it",140],["vicenzatoday.it",140],["thumpertalk.com",141],["arkcod.org",141],["thelayoff.com",142],["blog.coinsrise.net",142],["blog.cryptowidgets.net",142],["blog.insurancegold.in",142],["blog.wiki-topia.com",142],["blog.coinsvalue.net",142],["blog.cookinguide.net",142],["blog.freeoseocheck.com",142],["blog.makeupguide.net",142],["blog.carstopia.net",142],["blog.carsmania.net",142],["shorterall.com",142],["blog24.me",142],["maxstream.video",142],["tvepg.eu",142],["manwan.xyz",142],["dailymaverick.co.za",143],["ludigames.com",144],["made-by.org",144],["xenvn.com",144],["worldtravelling.com",144],["igirls.in",144],["technichero.com",144],["androidadult.com",144],["aeroxplorer.com",144],["sportitalialive.com",144],["call-bomber.info",145],["kajernews.com",145],["vyaapaarguru.in",145],["mchacks.net",145],["starkroboticsfrc.com",146],["sinonimos.de",146],["antonimos.de",146],["quesignifi.ca",146],["tiktokrealtime.com",146],["tiktokcounter.net",146],["tpayr.xyz",146],["poqzn.xyz",146],["ashrfd.xyz",146],["rezsx.xyz",146],["tryzt.xyz",146],["ashrff.xyz",146],["rezst.xyz",146],["dawenet.com",146],["erzar.xyz",146],["waezm.xyz",146],["waezg.xyz",146],["blackwoodacademy.org",146],["cryptednews.space",146],["vivuq.com",146],["swgop.com",146],["vbnmll.com",146],["telcoinfo.online",146],["dshytb.com",146],["fadedfeet.com",147],["homeculina.com",147],["ineedskin.com",147],["kenzo-flowertag.com",147],["lawyex.co",147],["mdn.lol",147],["bitzite.com",148],["coingraph.us",149],["impact24.us",149],["apkmodvn.com",150],["mod1s.com",150],["apkmoddone.com",151],["dl.apkmoddone.com",152],["phongroblox.com",152],["financacerta.com",153],["encurtads.net",153],["shortencash.click",154],["lablue.*",155],["4-liga.com",156],["4fansites.de",156],["4players.de",156],["9monate.de",156],["aachener-nachrichten.de",156],["aachener-zeitung.de",156],["abendblatt.de",156],["abendzeitung-muenchen.de",156],["about-drinks.com",156],["abseits-ka.de",156],["airliners.de",156],["ajaxshowtime.com",156],["allgemeine-zeitung.de",156],["alpin.de",156],["antenne.de",156],["arcor.de",156],["areadvd.de",156],["areamobile.de",156],["ariva.de",156],["astronews.com",156],["aussenwirtschaftslupe.de",156],["auszeit.bio",156],["auto-motor-und-sport.de",156],["auto-service.de",156],["autobild.de",156],["autoextrem.de",156],["autopixx.de",156],["autorevue.at",156],["autotrader.nl",156],["az-online.de",156],["baby-vornamen.de",156],["babyclub.de",156],["bafoeg-aktuell.de",156],["berliner-kurier.de",156],["berliner-zeitung.de",156],["bigfm.de",156],["bikerszene.de",156],["bildderfrau.de",156],["blackd.de",156],["blick.de",156],["boerse-online.de",156],["boerse.de",156],["boersennews.de",156],["braunschweiger-zeitung.de",156],["brieffreunde.de",156],["brigitte.de",156],["buerstaedter-zeitung.de",156],["buffed.de",156],["businessinsider.de",156],["buzzfeed.at",156],["buzzfeed.de",156],["caravaning.de",156],["cavallo.de",156],["chefkoch.de",156],["cinema.de",156],["clever-tanken.de",156],["computerbild.de",156],["computerhilfen.de",156],["comunio-cl.com",156],["comunio.*",156],["connect.de",156],["chip.de",156],["da-imnetz.de",156],["dasgelbeblatt.de",156],["dbna.com",156],["dbna.de",156],["deichstube.de",156],["deine-tierwelt.de",156],["der-betze-brennt.de",156],["derwesten.de",156],["desired.de",156],["dhd24.com",156],["dieblaue24.com",156],["digitalfernsehen.de",156],["dnn.de",156],["donnerwetter.de",156],["e-hausaufgaben.de",156],["e-mountainbike.com",156],["eatsmarter.de",156],["echo-online.de",156],["ecomento.de",156],["einfachschoen.me",156],["elektrobike-online.com",156],["eltern.de",156],["epochtimes.de",156],["essen-und-trinken.de",156],["express.de",156],["extratipp.com",156],["familie.de",156],["fanfiktion.de",156],["fehmarn24.de",156],["fettspielen.de",156],["fid-gesundheitswissen.de",156],["finanzen.*",156],["finanznachrichten.de",156],["finanztreff.de",156],["finya.de",156],["firmenwissen.de",156],["fitforfun.de",156],["fnp.de",156],["football365.fr",156],["formel1.de",156],["fr.de",156],["frankfurter-wochenblatt.de",156],["freenet.de",156],["fremdwort.de",156],["froheweihnachten.info",156],["frustfrei-lernen.de",156],["fuldaerzeitung.de",156],["funandnews.de",156],["fussballdaten.de",156],["futurezone.de",156],["gala.de",156],["gamepro.de",156],["gamersglobal.de",156],["gamesaktuell.de",156],["gamestar.de",156],["gameswelt.*",156],["gamezone.de",156],["gartendialog.de",156],["gartenlexikon.de",156],["gedichte.ws",156],["geissblog.koeln",156],["gelnhaeuser-tageblatt.de",156],["general-anzeiger-bonn.de",156],["geniale-tricks.com",156],["genialetricks.de",156],["gesund-vital.de",156],["gesundheit.de",156],["gevestor.de",156],["gewinnspiele.tv",156],["giessener-allgemeine.de",156],["giessener-anzeiger.de",156],["gifhorner-rundschau.de",156],["giga.de",156],["gipfelbuch.ch",156],["gmuender-tagespost.de",156],["gruenderlexikon.de",156],["gusto.at",156],["gut-erklaert.de",156],["gutfuerdich.co",156],["hallo-muenchen.de",156],["hamburg.de",156],["hanauer.de",156],["hardwareluxx.de",156],["hartziv.org",156],["harzkurier.de",156],["haus-garten-test.de",156],["hausgarten.net",156],["haustec.de",156],["haz.de",156],["heftig.*",156],["heidelberg24.de",156],["heilpraxisnet.de",156],["heise.de",156],["helmstedter-nachrichten.de",156],["hersfelder-zeitung.de",156],["hftg.co",156],["hifi-forum.de",156],["hna.de",156],["hochheimer-zeitung.de",156],["hoerzu.de",156],["hofheimer-zeitung.de",156],["iban-rechner.de",156],["ikz-online.de",156],["immobilienscout24.de",156],["ingame.de",156],["inside-digital.de",156],["inside-handy.de",156],["investor-verlag.de",156],["jappy.com",156],["jpgames.de",156],["kabeleins.de",156],["kachelmannwetter.com",156],["kamelle.de",156],["kicker.de",156],["kindergeld.org",156],["klettern-magazin.de",156],["klettern.de",156],["kochbar.de",156],["kreis-anzeiger.de",156],["kreisbote.de",156],["kreiszeitung.de",156],["ksta.de",156],["kurierverlag.de",156],["lachainemeteo.com",156],["lampertheimer-zeitung.de",156],["landwirt.com",156],["laut.de",156],["lauterbacher-anzeiger.de",156],["leckerschmecker.me",156],["leinetal24.de",156],["lesfoodies.com",156],["levif.be",156],["lifeline.de",156],["liga3-online.de",156],["likemag.com",156],["linux-community.de",156],["linux-magazin.de",156],["live.vodafone.de",156],["ln-online.de",156],["lokalo24.de",156],["lustaufsleben.at",156],["lustich.de",156],["lvz.de",156],["lz.de",156],["mactechnews.de",156],["macwelt.de",156],["macworld.co.uk",156],["mail.de",156],["main-spitze.de",156],["manager-magazin.de",156],["manga-tube.me",156],["mathebibel.de",156],["mathepower.com",156],["maz-online.de",156],["medisite.fr",156],["mehr-tanken.de",156],["mein-kummerkasten.de",156],["mein-mmo.de",156],["mein-wahres-ich.de",156],["meine-anzeigenzeitung.de",156],["meinestadt.de",156],["menshealth.de",156],["mercato365.com",156],["merkur.de",156],["messen.de",156],["metal-hammer.de",156],["metalflirt.de",156],["meteologix.com",156],["minecraft-serverlist.net",156],["mittelbayerische.de",156],["modhoster.de",156],["moin.de",156],["mopo.de",156],["morgenpost.de",156],["motor-talk.de",156],["motorbasar.de",156],["motorradonline.de",156],["motorsport-total.com",156],["motortests.de",156],["mountainbike-magazin.de",156],["moviejones.de",156],["moviepilot.de",156],["mt.de",156],["mtb-news.de",156],["musiker-board.de",156],["musikexpress.de",156],["musikradar.de",156],["mz-web.de",156],["n-tv.de",156],["naumburger-tageblatt.de",156],["netzwelt.de",156],["neuepresse.de",156],["neueroeffnung.info",156],["news.at",156],["news.de",156],["news38.de",156],["newsbreak24.de",156],["nickles.de",156],["nicknight.de",156],["nl.hardware.info",156],["nn.de",156],["nnn.de",156],["nordbayern.de",156],["notebookchat.com",156],["notebookcheck-ru.com",156],["notebookcheck-tr.com",156],["notebookcheck.*",156],["noz-cdn.de",156],["noz.de",156],["nrz.de",156],["nw.de",156],["nwzonline.de",156],["oberhessische-zeitung.de",156],["och.to",156],["oeffentlicher-dienst.info",156],["onlinekosten.de",156],["onvista.de",156],["op-marburg.de",156],["op-online.de",156],["outdoor-magazin.com",156],["outdoorchannel.de",156],["paradisi.de",156],["pc-magazin.de",156],["pcgames.de",156],["pcgameshardware.de",156],["pcwelt.de",156],["pcworld.es",156],["peiner-nachrichten.de",156],["pferde.de",156],["pietsmiet.de",156],["pixelio.de",156],["pkw-forum.de",156],["playboy.de",156],["playfront.de",156],["pnn.de",156],["pons.com",156],["prignitzer.de",156],["profil.at",156],["promipool.de",156],["promobil.de",156],["prosiebenmaxx.de",156],["quoka.de",156],["radio.at",156],["radio.de",156],["radio.dk",156],["radio.es",156],["radio.fr",156],["radio.it",156],["radio.net",156],["radio.pl",156],["radio.pt",156],["radio.se",156],["ran.de",156],["readmore.de",156],["rechtslupe.de",156],["recording.de",156],["rennrad-news.de",156],["reuters.com",156],["reviersport.de",156],["rhein-main-presse.de",156],["rheinische-anzeigenblaetter.de",156],["rimondo.com",156],["roadbike.de",156],["roemische-zahlen.net",156],["rollingstone.de",156],["rot-blau.com",156],["rp-online.de",156],["rtl.de",[156,241]],["rtv.de",156],["rugby365.fr",156],["ruhr24.de",156],["rundschau-online.de",156],["runnersworld.de",156],["safelist.eu",156],["salzgitter-zeitung.de",156],["sat1.de",156],["sat1gold.de",156],["schoener-wohnen.de",156],["schwaebische-post.de",156],["schwarzwaelder-bote.de",156],["serienjunkies.de",156],["shz.de",156],["sixx.de",156],["skodacommunity.de",156],["smart-wohnen.net",156],["sn.at",156],["sozialversicherung-kompetent.de",156],["spiegel.de",156],["spielen.de",156],["spieletipps.de",156],["spielfilm.de",156],["sport.de",156],["sport1.de",156],["sport365.fr",156],["sportal.de",156],["spox.com",156],["stern.de",156],["stuttgarter-nachrichten.de",156],["stuttgarter-zeitung.de",156],["sueddeutsche.de",156],["svz.de",156],["szene1.at",156],["szene38.de",156],["t-online.de",156],["tagesspiegel.de",156],["taschenhirn.de",156],["techadvisor.co.uk",156],["techstage.de",156],["tele5.de",156],["teltarif.de",156],["testedich.*",156],["the-voice-of-germany.de",156],["thueringen24.de",156],["tichyseinblick.de",156],["tierfreund.co",156],["tiervermittlung.de",156],["torgranate.de",156],["transfermarkt.*",156],["trend.at",156],["truckscout24.*",156],["tv-media.at",156],["tvdigital.de",156],["tvinfo.de",156],["tvspielfilm.de",156],["tvtoday.de",156],["tvtv.*",156],["tz.de",156],["unicum.de",156],["unnuetzes.com",156],["unsere-helden.com",156],["unterhalt.net",156],["usinger-anzeiger.de",156],["usp-forum.de",156],["videogameszone.de",156],["vienna.at",156],["vip.de",156],["virtualnights.com",156],["vox.de",156],["wa.de",156],["wallstreet-online.de",[156,159]],["waz.de",156],["weather.us",156],["webfail.com",156],["weihnachten.me",156],["weihnachts-bilder.org",156],["weihnachts-filme.com",156],["welt.de",156],["weltfussball.at",156],["weristdeinfreund.de",156],["werkzeug-news.de",156],["werra-rundschau.de",156],["wetterauer-zeitung.de",156],["wetteronline.*",156],["wieistmeineip.*",156],["wiesbadener-kurier.de",156],["wiesbadener-tagblatt.de",156],["winboard.org",156],["windows-7-forum.net",156],["winfuture.de",[156,237]],["wintotal.de",156],["wlz-online.de",156],["wn.de",156],["wohngeld.org",156],["wolfenbuetteler-zeitung.de",156],["wolfsburger-nachrichten.de",156],["woman.at",156],["womenshealth.de",156],["wormser-zeitung.de",156],["woxikon.de",156],["wp.de",156],["wr.de",156],["wunderweib.de",156],["yachtrevue.at",156],["ze.tt",156],["zeit.de",156],["meineorte.com",157],["osthessen-news.de",157],["techadvisor.com",157],["focus.de",157],["wetter.*",158],["my-code4you.blogspot.com",160],["vrcmods.com",161],["osuskinner.com",161],["osuskins.net",161],["pentruea.com",[162,163]],["why-tech.it",164],["compsmag.com",165],["tapetus.pl",166],["autoroad.cz",167],["brawlhalla.fr",167],["tecnobillo.com",167],["sexcamfreeporn.com",168],["breatheheavy.com",169],["wenxuecity.com",170],["key-hub.eu",171],["fabioambrosi.it",172],["tattle.life",173],["emuenzen.de",173],["terrylove.com",173],["mynet.com",[174,237]],["cidade.iol.pt",175],["fantacalcio.it",176],["hentaifreak.org",177],["hypebeast.com",178],["krankheiten-simulieren.de",179],["catholic.com",180],["3dmodelshare.org",181],["techinferno.com",182],["ibeconomist.com",183],["bookriot.com",184],["purposegames.com",185],["globo.com",186],["latimes.com",186],["claimrbx.gg",187],["perelki.net",188],["vpn-anbieter-vergleich-test.de",189],["livingincebuforums.com",190],["paperzonevn.com",191],["alltechnerd.com",192],["malaysianwireless.com",193],["erinsakura.com",194],["infofuge.com",194],["freejav.guru",194],["novelmultiverse.com",194],["fritidsmarkedet.dk",195],["maskinbladet.dk",195],["15min.lt",196],["baddiehub.com",197],["mr9soft.com",198],["21porno.com",199],["adult-sex-gamess.com",200],["hentaigames.app",200],["mobilesexgamesx.com",200],["mysexgamer.com",200],["porngameshd.com",200],["sexgamescc.com",200],["xnxx-sex-videos.com",200],["f2movies.to",201],["freeporncave.com",202],["tubsxxx.com",203],["manga18fx.com",204],["freebnbcoin.com",204],["sextvx.com",205],["studydhaba.com",206],["freecourse.tech",206],["victor-mochere.com",206],["papunika.com",206],["mobilanyheter.net",206],["prajwaldesai.com",[206,226]],["ftuapps.dev",206],["muztext.com",207],["pornohans.com",208],["nursexfilme.com",208],["pornohirsch.net",208],["xhamster-sexvideos.com",208],["pornoschlange.com",208],["xhamsterdeutsch.*",208],["hdpornos.net",208],["gutesexfilme.com",208],["zona-leros.com",208],["charbelnemnom.com",209],["simplebits.io",210],["online-fix.me",211],["privatemoviez.*",212],["gamersdiscussionhub.com",212],["owlzo.com",213],["q1003.com",214],["blogpascher.com",215],["testserver.pro",216],["lifestyle.bg",216],["money.bg",216],["news.bg",216],["topsport.bg",216],["webcafe.bg",216],["schoolcheats.net",217],["mgnet.xyz",218],["advertiserandtimes.co.uk",219],["xvideos2020.me",220],["111.90.159.132",221],["techsolveprac.com",222],["joomlabeginner.com",223],["largescaleforums.com",224],["dubznetwork.com",225],["dongknows.com",227],["traderepublic.community",228],["khsm.io",229],["webcreator-journal.com",229],["nu6i-bg-net.com",229],["msdos-games.com",229],["blocklayer.com",229],["weknowconquer.com",229],["babia.to",230],["code2care.org",231],["gmx.*",232],["xxxxsx.com",233],["ngontinh24.com",234],["idevicecentral.com",235],["dzeko11.net",236],["carscoops.com",237],["dziennik.pl",237],["eurointegration.com.ua",237],["flatpanelshd.com",237],["fourfourtwo.co.kr",237],["hoyme.jp",237],["issuya.com",237],["itainews.com",237],["iusm.co.kr",237],["logicieleducatif.fr",237],["mydaily.co.kr",237],["onlinegdb.com",237],["picrew.me",237],["pravda.com.ua",237],["reportera.co.kr",237],["sportsrec.com",237],["sportsseoul.com",237],["text-compare.com",237],["tweaksforgeeks.com",237],["wfmz.com",237],["worldhistory.org",237],["etnews.com",237],["palabr.as",237],["motscroises.fr",237],["cruciverba.it",237],["oradesibiu.ro",237],["w.grapps.me",237],["gazetaprawna.pl",237],["pressian.com",237],["raenonx.cc",[237,256]],["indiatimes.com",237],["missyusa.com",237],["aikatu.jp",237],["ark-unity.com",237],["cool-style.com.tw",237],["doanhnghiepvn.vn",237],["thesaurus.net",238],["automobile-catalog.com",238],["motorbikecatalog.com",238],["maketecheasier.com",238],["mlbpark.donga.com",239],["jjang0u.com",240],["mangacrab.com",242],["hortonanderfarom.blogspot.com",243],["viefaucet.com",244],["pourcesoir.in",244],["cloud-computing-central.com",245],["afk.guide",246],["businessnamegenerator.com",247],["derstandard.at",248],["derstandard.de",248],["rocketnews24.com",249],["soranews24.com",249],["youpouch.com",249],["gourmetscans.net",250],["ilsole24ore.com",251],["ipacrack.com",252],["hentaiporn.one",253],["infokik.com",254],["daemonanime.net",255],["bgmateriali.com",255],["deezer.com",256],["fosslinux.com",257],["shrdsk.me",258],["examword.com",259],["sempreupdate.com.br",259],["tribuna.com",260],["trendsderzukunft.de",261],["gal-dem.com",261],["lostineu.eu",261],["oggitreviso.it",261],["speisekarte.de",261],["mixed.de",261],["lightnovelpub.*",[262,263]],["lightnovelspot.com",[262,263]],["lightnovelworld.com",[262,263]],["novelpub.com",[262,263]],["webnovelpub.com",[262,263]],["mail.yahoo.com",264],["hwzone.co.il",265],["nammakalvi.com",266],["c2g.at",267],["terafly.me",267],["elamigos-games.com",267],["elamigos-games.net",267],["dktechnicalmate.com",268],["recipahi.com",268],["kaystls.site",269],["aquarius-horoscopes.com",270],["cancer-horoscopes.com",270],["dubipc.blogspot.com",270],["echoes.gr",270],["engel-horoskop.de",270],["freegames44.com",270],["fuerzasarmadas.eu",270],["gemini-horoscopes.com",270],["jurukunci.net",270],["krebs-horoskop.com",270],["leo-horoscopes.com",270],["maliekrani.com",270],["nklinks.click",270],["ourenseando.es",270],["pisces-horoscopes.com",270],["radio-en-direct.fr",270],["sagittarius-horoscopes.com",270],["scorpio-horoscopes.com",270],["singlehoroskop-loewe.de",270],["skat-karten.de",270],["skorpion-horoskop.com",270],["taurus-horoscopes.com",270],["the1security.com",270],["virgo-horoscopes.com",270],["zonamarela.blogspot.com",270],["yoima.hatenadiary.com",270],["vpntester.org",271],["japscan.lol",272],["digitask.ru",273],["tempumail.com",274],["sexvideos.host",275],["camcaps.*",276],["10alert.com",277],["cryptstream.de",278],["nydus.org",278],["techhelpbd.com",279],["fapdrop.com",280],["cellmapper.net",281],["hdrez.com",282],["youwatch-serie.com",282],["russland.jetzt",282],["printablecreative.com",283],["peachprintable.com",283],["comohoy.com",284],["leak.sx",284],["paste.bin.sx",284],["pornleaks.in",284],["merlininkazani.com",284],["j91.asia",285],["rekidai-info.github.io",286],["jeniusplay.com",287],["indianyug.com",288],["rgb.vn",288],["needrom.com",289],["criptologico.com",290],["megadrive-emulator.com",291],["eromanga-show.com",292],["hentai-one.com",292],["hentaipaw.com",292],["10minuteemails.com",293],["luxusmail.org",293],["w3cub.com",294],["bangpremier.com",295],["nyaa.iss.ink",296],["drivebot.*",297],["thenextplanet1.*",298],["tnp98.xyz",298],["freepdfcomic.com",299],["techedubyte.com",300],["tickzoo.tv",301],["oploverz.*",301],["memedroid.com",302],["royalroad.com",303],["karaoketexty.cz",304],["filmizlehdfilm.com",305],["filmizletv.*",305],["fullfilmizle.cc",305],["gofilmizle.net",305],["resortcams.com",306],["cheatography.com",306],["sonixgvn.net",307],["autoscout24.*",308],["mjakmama24.pl",309],["cheatermad.com",310],["ville-ideale.fr",311],["brainly.*",312],["eodev.com",312],["xfreehd.com",313],["freethesaurus.com",314],["thefreedictionary.com",314],["fm-arena.com",315],["tradersunion.com",316],["tandess.com",317],["allosurf.net",317],["spontacts.com",318],["dankmemer.lol",319],["getexploits.com",320],["fplstatistics.com",321],["breitbart.com",322],["salidzini.lv",323],["choosingnothing.com",324],["cryptorank.io",[325,326]],["4kwebplay.xyz",327],["qqwebplay.xyz",327],["viwlivehdplay.ru",327],["molbiotools.com",328],["vods.tv",329],["18xxx.xyz",330],["raidrush.net",331],["xnxxcom.xyz",332],["videzz.net",333],["spambox.xyz",334],["dreamdth.com",335],["freemodsapp.in",335],["onlytech.com",335],["player.jeansaispasplus.homes",336],["en-thunderscans.com",337],["iqksisgw.xyz",339],["caroloportunidades.com.br",340],["coempregos.com.br",340],["foodiesgallery.com",340],["vikatan.com",341],["camhub.world",342],["mma-core.*",343],["teracourses.com",344],["streambtw.com",345],["qrcodemonkey.net",346],["lastampa.it",347],["infinityscans.xyz",348],["infinityscans.net",348],["infinityscans.org",348],["dogdrip.net",349],["infinityfree.com",349],["smsonline.cloud",[349,350]],["faqwiki.us",351],["cool-web.de",352],["gps-cache.de",352],["web-spiele.de",352],["fun-seiten.de",352],["photo-alben.de",352],["wetter-vorhersage.de",352],["coolsoftware.de",352],["kryptografie.de",352],["cool--web-de.translate.goog",352],["gps--cache-de.translate.goog",352],["web--spiele-de.translate.goog",352],["fun--seiten-de.translate.goog",352],["photo--alben-de.translate.goog",352],["wetter--vorhersage-de.translate.goog",352],["coolsoftware-de.translate.goog",352],["kryptografie-de.translate.goog",352]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

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
