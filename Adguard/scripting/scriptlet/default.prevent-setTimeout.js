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
const argsList = [["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["isDesktopApp","1000"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["afterOpen"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["()","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["checkAds"],["documentElement.innerHTML"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["/Ads|adbl/"],["/show|innerHTML/"],["getComputedStyle"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["loadBanners"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["atob","120000"],["#ad_blocker_detector"],["googleFC"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["IKDESW"]];
const hostnamesMap = new Map([["m.timesofindia.com",0],["timesofindia.indiatimes.com",0],["youmath.it",0],["redensarten-index.de",0],["lesoir.be",0],["electriciansforums.net",0],["keralatelecom.info",0],["universegunz.net",0],["happypenguin.altervista.org",0],["everyeye.it",0],["eztv.*",0],["bluedrake42.com",0],["supermarioemulator.com",0],["futbollibrehd.com",0],["eska.pl",0],["eskarock.pl",0],["voxfm.pl",0],["mathaeser.de",0],["1337x.*",0],["betaseries.com",0],["free-sms-receive.com",0],["sms-receive-online.com",0],["computer76.ru",0],["golem.de",[1,2,155]],["hdbox.ws",2],["todopolicia.com",2],["scat.gold",2],["freecoursesite.com",2],["windowcleaningforums.co.uk",2],["cruisingearth.com",2],["hobby-machinist.com",2],["freegogpcgames.com",2],["latitude.to",2],["kitchennovel.com",2],["w3layouts.com",2],["blog.receivefreesms.co.uk",2],["eductin.com",2],["dealsfinders.blog",2],["audiobooks4soul.com",2],["tinhocdongthap.com",2],["sakarnewz.com",2],["downloadr.in",2],["topcomicporno.com",2],["sushi-scan.*",2],["celtadigital.com",2],["iptvrun.com",2],["adsup.lk",2],["cryptomonitor.in",2],["areatopik.com",2],["cardscanner.co",2],["nullforums.net",2],["courseclub.me",2],["tamarindoyam.com",2],["jeep-cj.com",2],["choiceofmods.com",2],["myqqjd.com",2],["ssdtop.com",2],["apkhex.com",2],["gezegenforum.com",2],["iptvapps.net",2],["null-scripts.net",2],["nullscripts.net",2],["bloground.ro",2],["witcherhour.com",2],["ottverse.com",2],["torrentmac.net",2],["mazakony.com",2],["laptechinfo.com",2],["mc-at.org",2],["playstationhaber.com",2],["seriesperu.com",2],["spigotunlocked.*",2],["pesprofessionals.com",2],["wpsimplehacks.com",2],["sportshub.to",[2,235]],["topsporter.net",[2,235]],["darkwanderer.net",2],["truckingboards.com",2],["coldfrm.org",2],["azrom.net",2],["freepatternsarea.com",2],["alttyab.net",2],["ahmedmode.*",2],["mobilkulup.com",2],["esopress.com",2],["nesiaku.my.id",2],["jipinsoft.com",2],["surfsees.com",2],["truthnews.de",2],["farsinama.com",2],["worldofiptv.com",2],["vuinsider.com",2],["crazydl.net",2],["gamemodsbase.com",2],["babiato.tech",2],["secuhex.com",2],["turkishaudiocenter.com",2],["galaxyos.net",2],["bizdustry.com",2],["storefront.com.ng",2],["pkbiosfix.com",2],["casi3.xyz",2],["starleaks.org",2],["forum-xiaomi.com",2],["mediafire.com",3],["wcoanimedub.tv",4],["wcoforever.net",4],["openspeedtest.com",4],["addtobucketlist.com",4],["3dzip.org",[4,62]],["ilmeteo.it",4],["wcoforever.com",4],["comprovendolibri.it",4],["healthelia.com",4],["anghami.com",5],["yts.*",6],["720pstream.*",6],["1stream.*",6],["tutele.sx",6],["katestube.com",7],["short.pe",7],["thefmovies.*",7],["footystreams.net",7],["seattletimes.com",8],["bestgames.com",9],["yiv.com",9],["globalrph.com",10],["e-glossa.it",11],["webcheats.com.br",12],["urlcero.*",13],["gala.fr",14],["gentside.com",14],["geo.fr",14],["hbrfrance.fr",14],["nationalgeographic.fr",14],["ohmymag.com",14],["serengo.net",14],["vsd.fr",14],["updato.com",[15,31]],["totaldebrid.*",16],["sandrives.*",16],["daizurin.com",16],["pendekarsubs.us",16],["dreamfancy.org",16],["rysafe.blogspot.com",16],["techacode.com",16],["toppng.com",16],["th-world.com",16],["avjamack.com",16],["avjamak.net",16],["dlhd.sx",17],["embedstream.me",17],["yts-subs.net",17],["cnnamador.com",18],["nudecelebforum.com",19],["pronpic.org",20],["thewebflash.com",21],["discordfastfood.com",21],["xup.in",21],["popularmechanics.com",22],["op.gg",23],["comunidadgzone.es",24],["fxporn69.*",24],["mp3fy.com",24],["lebensmittelpraxis.de",24],["aliancapes.*",24],["ebookdz.com",24],["forum-pokemon-go.fr",24],["praxis-jugendarbeit.de",24],["dictionnaire-medical.net",24],["cle0desktop.blogspot.com",24],["up-load.io",24],["keysbrasil.blogspot.com",24],["hotpress.info",24],["turkleech.com",24],["anibatch.me",24],["anime-i.com",24],["healthtune.site",24],["gewinde-normen.de",24],["tucinehd.com",24],["plex-guide.de",24],["kdramasmaza.com.pk",24],["jellynote.com",25],["pouvideo.*",26],["povvideo.*",26],["povw1deo.*",26],["povwideo.*",26],["powv1deo.*",26],["powvibeo.*",26],["powvideo.*",26],["powvldeo.*",26],["eporner.com",27],["pornbimbo.com",28],["4j.com",28],["avoiderrors.com",29],["sitarchive.com",29],["livenewsof.com",29],["topnewsshow.com",29],["gatcha.org",29],["empregoestagios.com",29],["everydayonsales.com",29],["kusonime.com",29],["suicidepics.com",29],["codesnail.com",29],["codingshiksha.com",29],["graphicux.com",29],["asyadrama.com",29],["bitcoinegypt.news",29],["citychilli.com",29],["talkjarvis.com",29],["hdmotori.it",30],["tubsexer.*",32],["femdomtb.com",32],["porno-tour.*",32],["lenkino.*",32],["bobs-tube.com",32],["pornfd.com",32],["pornomoll.*",32],["camsclips.*",32],["popno-tour.net",32],["watchmdh.to",32],["camwhores.tv",32],["camhub.cc",32],["elfqrin.com",33],["satcesc.com",34],["apfelpatient.de",34],["lusthero.com",35],["m4ufree.*",36],["m2list.com",36],["embed.nana2play.com",36],["elahmad.com",36],["dofusports.xyz",36],["dallasnews.com",37],["lnk.news",38],["lnk.parts",38],["efukt.com",39],["wendycode.com",39],["springfieldspringfield.co.uk",40],["porndoe.com",41],["smsget.net",[42,43]],["kjanime.net",44],["gioialive.it",45],["classicreload.com",46],["scriptzhub.com",46],["hotpornfile.org",47],["coolsoft.altervista.org",47],["hackedonlinegames.com",47],["dailytech-news.eu",47],["settlersonlinemaps.com",47],["ad-doge.com",47],["magdownload.org",47],["kpkuang.org",47],["crypto4yu.com",47],["faucetwork.space",47],["writedroid.*",47],["thenightwithoutthedawn.blogspot.com",47],["entutes.com",47],["claimlite.club",47],["newscon.org",47],["rl6mans.com",47],["chicoer.com",48],["bostonherald.com",48],["dailycamera.com",48],["maxcheaters.com",49],["postimees.ee",49],["police.community",49],["gisarea.com",49],["schaken-mods.com",49],["tvnet.lv",49],["theclashify.com",49],["txori.com",49],["olarila.com",49],["deletedspeedstreams.blogspot.com",49],["schooltravelorganiser.com",49],["xhardhempus.net",49],["mhn.quest",49],["leagueofgraphs.com",49],["hieunguyenphoto.com",49],["benzinpreis.de",49],["sportsplays.com",50],["telerium.*",51],["pornvideotop.com",52],["krotkoosporcie.pl",52],["xstory-fr.com",52],["ytapi.cc",52],["deinesexfilme.com",53],["einfachtitten.com",53],["halloporno.com",53],["herzporno.com",53],["lesbenhd.com",53],["milffabrik.com",[53,207]],["porn-monkey.com",53],["porndrake.com",53],["pornhubdeutsch.net",53],["pornoaffe.com",53],["pornodavid.com",53],["pornoente.tv",[53,207]],["pornofisch.com",53],["pornofelix.com",53],["pornohammer.com",53],["pornohelm.com",53],["pornoklinge.com",53],["pornotom.com",[53,207]],["pornotommy.com",53],["pornovideos-hd.com",53],["pornozebra.com",[53,207]],["xhamsterdeutsch.xyz",53],["xnxx-sexfilme.com",53],["letribunaldunet.fr",54],["vladan.fr",54],["live-tv-channels.org",55],["eslfast.com",56],["freegamescasual.com",57],["tcpvpn.com",58],["oko.sh",58],["timesnownews.com",58],["timesnowhindi.com",58],["timesnowmarathi.com",58],["zoomtventertainment.com",58],["tsubasa.im",59],["sholah.net",60],["2rdroid.com",60],["bisceglielive.it",61],["pandajogosgratis.com.br",63],["5278.cc",64],["pandafreegames.*",65],["tonspion.de",66],["duplichecker.com",67],["plagiarismchecker.co",67],["plagiarismdetector.net",67],["searchenginereports.net",67],["smallseotools.com",68],["linkspaid.com",69],["proxydocker.com",69],["beeimg.com",[70,71]],["emturbovid.com",71],["findjav.com",71],["javggvideo.xyz",71],["mmtv01.xyz",71],["stbturbo.xyz",71],["streamsilk.com",71],["ftlauderdalebeachcam.com",72],["ftlauderdalewebcam.com",72],["juneauharborwebcam.com",72],["keywestharborwebcam.com",72],["kittycatcam.com",72],["mahobeachcam.com",72],["miamiairportcam.com",72],["morganhillwebcam.com",72],["njwildlifecam.com",72],["nyharborwebcam.com",72],["paradiseislandcam.com",72],["pompanobeachcam.com",72],["portbermudawebcam.com",72],["portcanaveralwebcam.com",72],["portevergladeswebcam.com",72],["portmiamiwebcam.com",72],["portnywebcam.com",72],["portnassauwebcam.com",72],["portstmaartenwebcam.com",72],["portstthomaswebcam.com",72],["porttampawebcam.com",72],["sxmislandcam.com",72],["themes-dl.com",72],["badassdownloader.com",72],["badasshardcore.com",72],["badassoftcore.com",72],["nulljungle.com",72],["teevee.asia",72],["otakukan.com",72],["thoptv.*",73],["vinomo.xyz",74],["bembed.net",74],["embedv.net",74],["fslinks.org",74],["listeamed.net",74],["v6embed.xyz",74],["vembed.*",74],["vgplayer.xyz",74],["vid-guard.com",74],["giga-uqload.xyz",74],["moflix-stream.*",[74,337]],["gearingcommander.com",75],["generate.plus",76],["calculate.plus",76],["avcesar.com",77],["audiotag.info",78],["tudigitale.it",79],["ibcomputing.com",80],["legia.net",81],["acapellas4u.co.uk",82],["robloxscripts.com",83],["libreriamo.it",83],["postazap.com",83],["medebooks.xyz",83],["mashtips.com",83],["marriedgames.com.br",83],["4allprograms.me",83],["shortzzy.*",83],["nurgsm.com",83],["certbyte.com",83],["plugincrack.com",83],["gamingdeputy.com",83],["freewebcart.com",83],["autojournal.fr",84],["autoplus.fr",84],["sportauto.fr",84],["streamhentaimovies.com",85],["konten.co.id",86],["diariodenavarra.es",87],["scripai.com",87],["myfxbook.com",87],["whatfontis.com",87],["tubereader.me",87],["xiaomifans.pl",88],["eletronicabr.com",88],["optifine.net",89],["luzernerzeitung.ch",90],["tagblatt.ch",90],["spellcheck.net",91],["spellchecker.net",91],["spellweb.com",91],["ableitungsrechner.net",92],["alternet.org",93],["gourmetsupremacy.com",93],["shrib.com",94],["streameast.*",95],["thestreameast.*",95],["coolcast2.com",95],["techclips.net",95],["daddylivehd.*",95],["footyhunter.lol",95],["poscitech.click",95],["wecast.to",95],["sportbar.live",95],["freecourseweb.com",96],["devcourseweb.com",96],["coursewikia.com",96],["courseboat.com",96],["coursehulu.com",96],["pornhub.*",97],["lne.es",98],["pornult.com",99],["webcamsdolls.com",99],["bitcotasks.com",[99,141]],["adsy.pw",99],["playstore.pw",99],["exactpay.online",99],["thothd.to",99],["proplanta.de",100],["mad4wheels.com",101],["1xanimes.in",101],["logi.im",101],["emailnator.com",101],["textograto.com",102],["voyageforum.com",103],["hmc-id.blogspot.com",103],["myabandonware.com",103],["wcofun.*",103],["ilforumdeibrutti.is",103],["prad.de",[104,155]],["chatta.it",105],["ketubanjiwa.com",106],["nsfw247.to",107],["funzen.net",107],["ilclubdellericette.it",107],["bollyholic.*",107],["extremereportbot.com",108],["getintopc.com",109],["qoshe.com",110],["lowellsun.com",111],["mamadu.pl",111],["dobrapogoda24.pl",111],["motohigh.pl",111],["namasce.pl",111],["ultimate-catch.eu",112],["cpopchanelofficial.com",113],["creditcardgenerator.com",114],["creditcardrush.com",114],["bostoncommons.net",114],["thejobsmovie.com",114],["hl-live.de",115],["satoshi-win.xyz",115],["encurtandourl.com",[115,119]],["www-daftarharga.blogspot.com",115],["ear-phone-review.com",115],["telefullenvivo.com",115],["listatv.pl",115],["daemon-hentai.com",[115,254]],["coin-profits.xyz",115],["relampagomovies.com",115],["wohnmobilforum.de",115],["nulledbear.com",115],["sinnerclownceviri.net",115],["nilopolisonline.com.br",116],["mesquitaonline.com",116],["yellowbridge.com",116],["yaoiotaku.com",117],["moneyhouse.ch",118],["ihow.info",119],["filesus.com",119],["gotxx.*",119],["sturls.com",119],["re.two.re",119],["turbo1.co",119],["cartoonsarea.xyz",119],["hartico.tv",119],["cupra.forum",119],["turkanime.*",120],["valeronevijao.com",120],["cigarlessarefy.com",120],["figeterpiazine.com",120],["yodelswartlike.com",120],["generatesnitrosate.com",120],["crownmakermacaronicism.com",120],["chromotypic.com",120],["gamoneinterrupted.com",120],["metagnathtuggers.com",120],["wolfdyslectic.com",120],["rationalityaloelike.com",120],["sizyreelingly.com",120],["simpulumlamerop.com",120],["urochsunloath.com",120],["monorhinouscassaba.com",120],["counterclockwisejacky.com",120],["35volitantplimsoles5.com",120],["scatch176duplicities.com",120],["antecoxalbobbing1010.com",120],["boonlessbestselling244.com",120],["cyamidpulverulence530.com",120],["guidon40hyporadius9.com",120],["449unceremoniousnasoseptal.com",120],["19turanosephantasia.com",120],["30sensualizeexpression.com",120],["321naturelikefurfuroid.com",120],["745mingiestblissfully.com",120],["availedsmallest.com",120],["greaseball6eventual20.com",120],["toxitabellaeatrebates306.com",120],["20demidistance9elongations.com",120],["audaciousdefaulthouse.com",120],["fittingcentermondaysunday.com",120],["fraudclatterflyingcar.com",120],["launchreliantcleaverriver.com",120],["matriculant401merited.com",120],["realfinanceblogcenter.com",120],["reputationsheriffkennethsand.com",120],["telyn610zoanthropy.com",120],["tubelessceliolymph.com",120],["tummulerviolableness.com",120],["un-block-voe.net",120],["v-o-e-unblock.com",120],["voe-un-block.com",120],["voe-unblock.*",120],["voeun-block.net",120],["voeunbl0ck.com",120],["voeunblck.com",120],["voeunblk.com",120],["voeunblock.com",120],["voeunblock1.com",120],["voeunblock2.com",120],["voeunblock3.com",120],["agefi.fr",121],["cariskuy.com",122],["letras2.com",122],["yusepjaelani.blogspot.com",123],["letras.mus.br",124],["mtlurb.com",125],["port.hu",126],["psychic.de",[126,155]],["forumdz.com",126],["abandonmail.com",126],["flmods.com",126],["zilinak.sk",126],["projectfreetv.stream",126],["hotdesimms.com",126],["pdfaid.com",126],["bootdey.com",126],["mail.com",126],["expresskaszubski.pl",126],["moegirl.org.cn",126],["flix-wave.lol",126],["fmovies0.cc",126],["worthcrete.com",126],["onemanhua.com",127],["laksa19.github.io",128],["javcl.com",128],["tvlogy.to",128],["rp5.*",128],["live.dragaoconnect.net",128],["beststremo.com",128],["seznamzpravy.cz",128],["xerifetech.com",128],["freemcserver.net",128],["t3n.de",129],["allindiaroundup.com",130],["tapchipi.com",131],["cuitandokter.com",131],["tech-blogs.com",131],["cardiagn.com",131],["dcleakers.com",131],["esgeeks.com",131],["pugliain.net",131],["uplod.net",131],["worldfreeware.com",131],["fikiri.net",131],["myhackingworld.com",131],["phoenixfansub.com",131],["vectorizer.io",132],["smgplaza.com",132],["onehack.us",132],["thapcam.net",132],["breznikar.com",132],["thefastlaneforum.com",133],["trade2win.com",134],["modagamers.com",135],["khatrimaza.*",135],["freemagazines.top",135],["pogolinks.*",135],["straatosphere.com",135],["rule34porn.net",135],["nullpk.com",135],["adslink.pw",135],["downloadudemy.com",135],["picgiraffe.com",135],["weadown.com",135],["freepornsex.net",135],["nurparatodos.com.ar",135],["popcornstream.*",136],["routech.ro",136],["hokej.net",136],["turkmmo.com",137],["acdriftingpro.com",138],["palermotoday.it",139],["baritoday.it",139],["trentotoday.it",139],["agrigentonotizie.it",139],["anconatoday.it",139],["arezzonotizie.it",139],["avellinotoday.it",139],["bresciatoday.it",139],["brindisireport.it",139],["casertanews.it",139],["cataniatoday.it",139],["cesenatoday.it",139],["chietitoday.it",139],["forlitoday.it",139],["frosinonetoday.it",139],["genovatoday.it",139],["ilpescara.it",139],["ilpiacenza.it",139],["latinatoday.it",139],["lecceprima.it",139],["leccotoday.it",139],["livornotoday.it",139],["messinatoday.it",139],["milanotoday.it",139],["modenatoday.it",139],["monzatoday.it",139],["novaratoday.it",139],["padovaoggi.it",139],["parmatoday.it",139],["perugiatoday.it",139],["pisatoday.it",139],["quicomo.it",139],["ravennatoday.it",139],["reggiotoday.it",139],["riminitoday.it",139],["romatoday.it",139],["salernotoday.it",139],["sondriotoday.it",139],["sportpiacenza.it",139],["ternitoday.it",139],["today.it",139],["torinotoday.it",139],["trevisotoday.it",139],["triesteprima.it",139],["udinetoday.it",139],["veneziatoday.it",139],["vicenzatoday.it",139],["thumpertalk.com",140],["arkcod.org",140],["thelayoff.com",141],["blog.coinsrise.net",141],["blog.cryptowidgets.net",141],["blog.insurancegold.in",141],["blog.wiki-topia.com",141],["blog.coinsvalue.net",141],["blog.cookinguide.net",141],["blog.freeoseocheck.com",141],["blog.makeupguide.net",141],["blog.carstopia.net",141],["blog.carsmania.net",141],["shorterall.com",141],["blog24.me",141],["maxstream.video",141],["tvepg.eu",141],["manwan.xyz",141],["dailymaverick.co.za",142],["ludigames.com",143],["made-by.org",143],["xenvn.com",143],["worldtravelling.com",143],["igirls.in",143],["technichero.com",143],["androidadult.com",143],["aeroxplorer.com",143],["sportitalialive.com",143],["call-bomber.info",144],["kajernews.com",144],["vyaapaarguru.in",144],["mchacks.net",144],["starkroboticsfrc.com",145],["sinonimos.de",145],["antonimos.de",145],["quesignifi.ca",145],["tiktokrealtime.com",145],["tiktokcounter.net",145],["tpayr.xyz",145],["poqzn.xyz",145],["ashrfd.xyz",145],["rezsx.xyz",145],["tryzt.xyz",145],["ashrff.xyz",145],["rezst.xyz",145],["dawenet.com",145],["erzar.xyz",145],["waezm.xyz",145],["waezg.xyz",145],["blackwoodacademy.org",145],["cryptednews.space",145],["vivuq.com",145],["swgop.com",145],["vbnmll.com",145],["telcoinfo.online",145],["dshytb.com",145],["fadedfeet.com",146],["homeculina.com",146],["ineedskin.com",146],["kenzo-flowertag.com",146],["lawyex.co",146],["mdn.lol",146],["bitzite.com",147],["coingraph.us",148],["impact24.us",148],["apkmodvn.com",149],["mod1s.com",149],["apkmoddone.com",150],["dl.apkmoddone.com",151],["phongroblox.com",151],["financacerta.com",152],["encurtads.net",152],["shortencash.click",153],["lablue.*",154],["4-liga.com",155],["4fansites.de",155],["4players.de",155],["9monate.de",155],["aachener-nachrichten.de",155],["aachener-zeitung.de",155],["abendblatt.de",155],["abendzeitung-muenchen.de",155],["about-drinks.com",155],["abseits-ka.de",155],["airliners.de",155],["ajaxshowtime.com",155],["allgemeine-zeitung.de",155],["alpin.de",155],["antenne.de",155],["arcor.de",155],["areadvd.de",155],["areamobile.de",155],["ariva.de",155],["astronews.com",155],["aussenwirtschaftslupe.de",155],["auszeit.bio",155],["auto-motor-und-sport.de",155],["auto-service.de",155],["autobild.de",155],["autoextrem.de",155],["autopixx.de",155],["autorevue.at",155],["autotrader.nl",155],["az-online.de",155],["baby-vornamen.de",155],["babyclub.de",155],["bafoeg-aktuell.de",155],["berliner-kurier.de",155],["berliner-zeitung.de",155],["bigfm.de",155],["bikerszene.de",155],["bildderfrau.de",155],["blackd.de",155],["blick.de",155],["boerse-online.de",155],["boerse.de",155],["boersennews.de",155],["braunschweiger-zeitung.de",155],["brieffreunde.de",155],["brigitte.de",155],["buerstaedter-zeitung.de",155],["buffed.de",155],["businessinsider.de",155],["buzzfeed.at",155],["buzzfeed.de",155],["caravaning.de",155],["cavallo.de",155],["chefkoch.de",155],["cinema.de",155],["clever-tanken.de",155],["computerbild.de",155],["computerhilfen.de",155],["comunio-cl.com",155],["comunio.*",155],["connect.de",155],["chip.de",155],["da-imnetz.de",155],["dasgelbeblatt.de",155],["dbna.com",155],["dbna.de",155],["deichstube.de",155],["deine-tierwelt.de",155],["der-betze-brennt.de",155],["derwesten.de",155],["desired.de",155],["dhd24.com",155],["dieblaue24.com",155],["digitalfernsehen.de",155],["dnn.de",155],["donnerwetter.de",155],["e-hausaufgaben.de",155],["e-mountainbike.com",155],["eatsmarter.de",155],["echo-online.de",155],["ecomento.de",155],["einfachschoen.me",155],["elektrobike-online.com",155],["eltern.de",155],["epochtimes.de",155],["essen-und-trinken.de",155],["express.de",155],["extratipp.com",155],["familie.de",155],["fanfiktion.de",155],["fehmarn24.de",155],["fettspielen.de",155],["fid-gesundheitswissen.de",155],["finanzen.*",155],["finanznachrichten.de",155],["finanztreff.de",155],["finya.de",155],["firmenwissen.de",155],["fitforfun.de",155],["fnp.de",155],["football365.fr",155],["formel1.de",155],["fr.de",155],["frankfurter-wochenblatt.de",155],["freenet.de",155],["fremdwort.de",155],["froheweihnachten.info",155],["frustfrei-lernen.de",155],["fuldaerzeitung.de",155],["funandnews.de",155],["fussballdaten.de",155],["futurezone.de",155],["gala.de",155],["gamepro.de",155],["gamersglobal.de",155],["gamesaktuell.de",155],["gamestar.de",155],["gameswelt.*",155],["gamezone.de",155],["gartendialog.de",155],["gartenlexikon.de",155],["gedichte.ws",155],["geissblog.koeln",155],["gelnhaeuser-tageblatt.de",155],["general-anzeiger-bonn.de",155],["geniale-tricks.com",155],["genialetricks.de",155],["gesund-vital.de",155],["gesundheit.de",155],["gevestor.de",155],["gewinnspiele.tv",155],["giessener-allgemeine.de",155],["giessener-anzeiger.de",155],["gifhorner-rundschau.de",155],["giga.de",155],["gipfelbuch.ch",155],["gmuender-tagespost.de",155],["gruenderlexikon.de",155],["gusto.at",155],["gut-erklaert.de",155],["gutfuerdich.co",155],["hallo-muenchen.de",155],["hamburg.de",155],["hanauer.de",155],["hardwareluxx.de",155],["hartziv.org",155],["harzkurier.de",155],["haus-garten-test.de",155],["hausgarten.net",155],["haustec.de",155],["haz.de",155],["heftig.*",155],["heidelberg24.de",155],["heilpraxisnet.de",155],["heise.de",155],["helmstedter-nachrichten.de",155],["hersfelder-zeitung.de",155],["hftg.co",155],["hifi-forum.de",155],["hna.de",155],["hochheimer-zeitung.de",155],["hoerzu.de",155],["hofheimer-zeitung.de",155],["iban-rechner.de",155],["ikz-online.de",155],["immobilienscout24.de",155],["ingame.de",155],["inside-digital.de",155],["inside-handy.de",155],["investor-verlag.de",155],["jappy.com",155],["jpgames.de",155],["kabeleins.de",155],["kachelmannwetter.com",155],["kamelle.de",155],["kicker.de",155],["kindergeld.org",155],["klettern-magazin.de",155],["klettern.de",155],["kochbar.de",155],["kreis-anzeiger.de",155],["kreisbote.de",155],["kreiszeitung.de",155],["ksta.de",155],["kurierverlag.de",155],["lachainemeteo.com",155],["lampertheimer-zeitung.de",155],["landwirt.com",155],["laut.de",155],["lauterbacher-anzeiger.de",155],["leckerschmecker.me",155],["leinetal24.de",155],["lesfoodies.com",155],["levif.be",155],["lifeline.de",155],["liga3-online.de",155],["likemag.com",155],["linux-community.de",155],["linux-magazin.de",155],["live.vodafone.de",155],["ln-online.de",155],["lokalo24.de",155],["lustaufsleben.at",155],["lustich.de",155],["lvz.de",155],["lz.de",155],["mactechnews.de",155],["macwelt.de",155],["macworld.co.uk",155],["mail.de",155],["main-spitze.de",155],["manager-magazin.de",155],["manga-tube.me",155],["mathebibel.de",155],["mathepower.com",155],["maz-online.de",155],["medisite.fr",155],["mehr-tanken.de",155],["mein-kummerkasten.de",155],["mein-mmo.de",155],["mein-wahres-ich.de",155],["meine-anzeigenzeitung.de",155],["meinestadt.de",155],["menshealth.de",155],["mercato365.com",155],["merkur.de",155],["messen.de",155],["metal-hammer.de",155],["metalflirt.de",155],["meteologix.com",155],["minecraft-serverlist.net",155],["mittelbayerische.de",155],["modhoster.de",155],["moin.de",155],["mopo.de",155],["morgenpost.de",155],["motor-talk.de",155],["motorbasar.de",155],["motorradonline.de",155],["motorsport-total.com",155],["motortests.de",155],["mountainbike-magazin.de",155],["moviejones.de",155],["moviepilot.de",155],["mt.de",155],["mtb-news.de",155],["musiker-board.de",155],["musikexpress.de",155],["musikradar.de",155],["mz-web.de",155],["n-tv.de",155],["naumburger-tageblatt.de",155],["netzwelt.de",155],["neuepresse.de",155],["neueroeffnung.info",155],["news.at",155],["news.de",155],["news38.de",155],["newsbreak24.de",155],["nickles.de",155],["nicknight.de",155],["nl.hardware.info",155],["nn.de",155],["nnn.de",155],["nordbayern.de",155],["notebookchat.com",155],["notebookcheck-ru.com",155],["notebookcheck-tr.com",155],["notebookcheck.*",155],["noz-cdn.de",155],["noz.de",155],["nrz.de",155],["nw.de",155],["nwzonline.de",155],["oberhessische-zeitung.de",155],["och.to",155],["oeffentlicher-dienst.info",155],["onlinekosten.de",155],["onvista.de",155],["op-marburg.de",155],["op-online.de",155],["outdoor-magazin.com",155],["outdoorchannel.de",155],["paradisi.de",155],["pc-magazin.de",155],["pcgames.de",155],["pcgameshardware.de",155],["pcwelt.de",155],["pcworld.es",155],["peiner-nachrichten.de",155],["pferde.de",155],["pietsmiet.de",155],["pixelio.de",155],["pkw-forum.de",155],["playboy.de",155],["playfront.de",155],["pnn.de",155],["pons.com",155],["prignitzer.de",155],["profil.at",155],["promipool.de",155],["promobil.de",155],["prosiebenmaxx.de",155],["quoka.de",155],["radio.at",155],["radio.de",155],["radio.dk",155],["radio.es",155],["radio.fr",155],["radio.it",155],["radio.net",155],["radio.pl",155],["radio.pt",155],["radio.se",155],["ran.de",155],["readmore.de",155],["rechtslupe.de",155],["recording.de",155],["rennrad-news.de",155],["reuters.com",155],["reviersport.de",155],["rhein-main-presse.de",155],["rheinische-anzeigenblaetter.de",155],["rimondo.com",155],["roadbike.de",155],["roemische-zahlen.net",155],["rollingstone.de",155],["rot-blau.com",155],["rp-online.de",155],["rtl.de",[155,240]],["rtv.de",155],["rugby365.fr",155],["ruhr24.de",155],["rundschau-online.de",155],["runnersworld.de",155],["safelist.eu",155],["salzgitter-zeitung.de",155],["sat1.de",155],["sat1gold.de",155],["schoener-wohnen.de",155],["schwaebische-post.de",155],["schwarzwaelder-bote.de",155],["serienjunkies.de",155],["shz.de",155],["sixx.de",155],["skodacommunity.de",155],["smart-wohnen.net",155],["sn.at",155],["sozialversicherung-kompetent.de",155],["spiegel.de",155],["spielen.de",155],["spieletipps.de",155],["spielfilm.de",155],["sport.de",155],["sport1.de",155],["sport365.fr",155],["sportal.de",155],["spox.com",155],["stern.de",155],["stuttgarter-nachrichten.de",155],["stuttgarter-zeitung.de",155],["sueddeutsche.de",155],["svz.de",155],["szene1.at",155],["szene38.de",155],["t-online.de",155],["tagesspiegel.de",155],["taschenhirn.de",155],["techadvisor.co.uk",155],["techstage.de",155],["tele5.de",155],["teltarif.de",155],["testedich.*",155],["the-voice-of-germany.de",155],["thueringen24.de",155],["tichyseinblick.de",155],["tierfreund.co",155],["tiervermittlung.de",155],["torgranate.de",155],["transfermarkt.*",155],["trend.at",155],["truckscout24.*",155],["tv-media.at",155],["tvdigital.de",155],["tvinfo.de",155],["tvspielfilm.de",155],["tvtoday.de",155],["tvtv.*",155],["tz.de",155],["unicum.de",155],["unnuetzes.com",155],["unsere-helden.com",155],["unterhalt.net",155],["usinger-anzeiger.de",155],["usp-forum.de",155],["videogameszone.de",155],["vienna.at",155],["vip.de",155],["virtualnights.com",155],["vox.de",155],["wa.de",155],["wallstreet-online.de",[155,158]],["waz.de",155],["weather.us",155],["webfail.com",155],["weihnachten.me",155],["weihnachts-bilder.org",155],["weihnachts-filme.com",155],["welt.de",155],["weltfussball.at",155],["weristdeinfreund.de",155],["werkzeug-news.de",155],["werra-rundschau.de",155],["wetterauer-zeitung.de",155],["wetteronline.*",155],["wieistmeineip.*",155],["wiesbadener-kurier.de",155],["wiesbadener-tagblatt.de",155],["winboard.org",155],["windows-7-forum.net",155],["winfuture.de",[155,236]],["wintotal.de",155],["wlz-online.de",155],["wn.de",155],["wohngeld.org",155],["wolfenbuetteler-zeitung.de",155],["wolfsburger-nachrichten.de",155],["woman.at",155],["womenshealth.de",155],["wormser-zeitung.de",155],["woxikon.de",155],["wp.de",155],["wr.de",155],["wunderweib.de",155],["yachtrevue.at",155],["ze.tt",155],["zeit.de",155],["meineorte.com",156],["osthessen-news.de",156],["techadvisor.com",156],["focus.de",156],["wetter.*",157],["my-code4you.blogspot.com",159],["vrcmods.com",160],["osuskinner.com",160],["osuskins.net",160],["pentruea.com",[161,162]],["why-tech.it",163],["compsmag.com",164],["tapetus.pl",165],["autoroad.cz",166],["brawlhalla.fr",166],["tecnobillo.com",166],["sexcamfreeporn.com",167],["breatheheavy.com",168],["wenxuecity.com",169],["key-hub.eu",170],["fabioambrosi.it",171],["tattle.life",172],["emuenzen.de",172],["terrylove.com",172],["mynet.com",[173,236]],["cidade.iol.pt",174],["fantacalcio.it",175],["hentaifreak.org",176],["hypebeast.com",177],["krankheiten-simulieren.de",178],["catholic.com",179],["3dmodelshare.org",180],["techinferno.com",181],["ibeconomist.com",182],["bookriot.com",183],["purposegames.com",184],["globo.com",185],["latimes.com",185],["claimrbx.gg",186],["perelki.net",187],["vpn-anbieter-vergleich-test.de",188],["livingincebuforums.com",189],["paperzonevn.com",190],["alltechnerd.com",191],["malaysianwireless.com",192],["erinsakura.com",193],["infofuge.com",193],["freejav.guru",193],["novelmultiverse.com",193],["fritidsmarkedet.dk",194],["maskinbladet.dk",194],["15min.lt",195],["baddiehub.com",196],["mr9soft.com",197],["21porno.com",198],["adult-sex-gamess.com",199],["hentaigames.app",199],["mobilesexgamesx.com",199],["mysexgamer.com",199],["porngameshd.com",199],["sexgamescc.com",199],["xnxx-sex-videos.com",199],["f2movies.to",200],["freeporncave.com",201],["tubsxxx.com",202],["manga18fx.com",203],["freebnbcoin.com",203],["sextvx.com",204],["studydhaba.com",205],["freecourse.tech",205],["victor-mochere.com",205],["papunika.com",205],["mobilanyheter.net",205],["prajwaldesai.com",[205,225]],["ftuapps.dev",205],["muztext.com",206],["pornohans.com",207],["nursexfilme.com",207],["pornohirsch.net",207],["xhamster-sexvideos.com",207],["pornoschlange.com",207],["xhamsterdeutsch.*",207],["hdpornos.net",207],["gutesexfilme.com",207],["zona-leros.com",207],["charbelnemnom.com",208],["simplebits.io",209],["online-fix.me",210],["privatemoviez.*",211],["gamersdiscussionhub.com",211],["owlzo.com",212],["q1003.com",213],["blogpascher.com",214],["testserver.pro",215],["lifestyle.bg",215],["money.bg",215],["news.bg",215],["topsport.bg",215],["webcafe.bg",215],["schoolcheats.net",216],["mgnet.xyz",217],["advertiserandtimes.co.uk",218],["xvideos2020.me",219],["111.90.159.132",220],["techsolveprac.com",221],["joomlabeginner.com",222],["largescaleforums.com",223],["dubznetwork.com",224],["dongknows.com",226],["traderepublic.community",227],["khsm.io",228],["webcreator-journal.com",228],["nu6i-bg-net.com",228],["msdos-games.com",228],["blocklayer.com",228],["weknowconquer.com",228],["babia.to",229],["code2care.org",230],["gmx.*",231],["xxxxsx.com",232],["ngontinh24.com",233],["idevicecentral.com",234],["dzeko11.net",235],["carscoops.com",236],["dziennik.pl",236],["eurointegration.com.ua",236],["flatpanelshd.com",236],["fourfourtwo.co.kr",236],["hoyme.jp",236],["issuya.com",236],["itainews.com",236],["iusm.co.kr",236],["logicieleducatif.fr",236],["mydaily.co.kr",236],["onlinegdb.com",236],["picrew.me",236],["pravda.com.ua",236],["reportera.co.kr",236],["sportsrec.com",236],["sportsseoul.com",236],["text-compare.com",236],["tweaksforgeeks.com",236],["wfmz.com",236],["worldhistory.org",236],["etnews.com",236],["palabr.as",236],["motscroises.fr",236],["cruciverba.it",236],["oradesibiu.ro",236],["w.grapps.me",236],["gazetaprawna.pl",236],["pressian.com",236],["raenonx.cc",[236,255]],["indiatimes.com",236],["missyusa.com",236],["aikatu.jp",236],["ark-unity.com",236],["cool-style.com.tw",236],["doanhnghiepvn.vn",236],["thesaurus.net",237],["automobile-catalog.com",237],["motorbikecatalog.com",237],["maketecheasier.com",237],["mlbpark.donga.com",238],["jjang0u.com",239],["mangacrab.com",241],["hortonanderfarom.blogspot.com",242],["viefaucet.com",243],["pourcesoir.in",243],["cloud-computing-central.com",244],["afk.guide",245],["businessnamegenerator.com",246],["derstandard.at",247],["derstandard.de",247],["rocketnews24.com",248],["soranews24.com",248],["youpouch.com",248],["gourmetscans.net",249],["ilsole24ore.com",250],["ipacrack.com",251],["hentaiporn.one",252],["infokik.com",253],["daemonanime.net",254],["bgmateriali.com",254],["deezer.com",255],["fosslinux.com",256],["shrdsk.me",257],["examword.com",258],["sempreupdate.com.br",258],["tribuna.com",259],["trendsderzukunft.de",260],["gal-dem.com",260],["lostineu.eu",260],["oggitreviso.it",260],["speisekarte.de",260],["mixed.de",260],["lightnovelpub.*",[261,262]],["lightnovelspot.com",[261,262]],["lightnovelworld.com",[261,262]],["novelpub.com",[261,262]],["webnovelpub.com",[261,262]],["mail.yahoo.com",263],["hwzone.co.il",264],["nammakalvi.com",265],["c2g.at",266],["terafly.me",266],["elamigos-games.com",266],["elamigos-games.net",266],["dktechnicalmate.com",267],["recipahi.com",267],["kaystls.site",268],["aquarius-horoscopes.com",269],["cancer-horoscopes.com",269],["dubipc.blogspot.com",269],["echoes.gr",269],["engel-horoskop.de",269],["freegames44.com",269],["fuerzasarmadas.eu",269],["gemini-horoscopes.com",269],["jurukunci.net",269],["krebs-horoskop.com",269],["leo-horoscopes.com",269],["maliekrani.com",269],["nklinks.click",269],["ourenseando.es",269],["pisces-horoscopes.com",269],["radio-en-direct.fr",269],["sagittarius-horoscopes.com",269],["scorpio-horoscopes.com",269],["singlehoroskop-loewe.de",269],["skat-karten.de",269],["skorpion-horoskop.com",269],["taurus-horoscopes.com",269],["the1security.com",269],["virgo-horoscopes.com",269],["zonamarela.blogspot.com",269],["yoima.hatenadiary.com",269],["vpntester.org",270],["japscan.lol",271],["digitask.ru",272],["tempumail.com",273],["sexvideos.host",274],["camcaps.*",275],["10alert.com",276],["cryptstream.de",277],["nydus.org",277],["techhelpbd.com",278],["fapdrop.com",279],["cellmapper.net",280],["hdrez.com",281],["youwatch-serie.com",281],["russland.jetzt",281],["printablecreative.com",282],["peachprintable.com",282],["comohoy.com",283],["leak.sx",283],["paste.bin.sx",283],["pornleaks.in",283],["merlininkazani.com",283],["j91.asia",284],["rekidai-info.github.io",285],["jeniusplay.com",286],["indianyug.com",287],["rgb.vn",287],["needrom.com",288],["criptologico.com",289],["megadrive-emulator.com",290],["eromanga-show.com",291],["hentai-one.com",291],["hentaipaw.com",291],["10minuteemails.com",292],["luxusmail.org",292],["w3cub.com",293],["bangpremier.com",294],["nyaa.iss.ink",295],["drivebot.*",296],["thenextplanet1.*",297],["tnp98.xyz",297],["freepdfcomic.com",298],["techedubyte.com",299],["tickzoo.tv",300],["oploverz.*",300],["memedroid.com",301],["royalroad.com",302],["karaoketexty.cz",303],["filmizlehdfilm.com",304],["filmizletv.*",304],["fullfilmizle.cc",304],["gofilmizle.net",304],["resortcams.com",305],["cheatography.com",305],["sonixgvn.net",306],["autoscout24.*",307],["mjakmama24.pl",308],["cheatermad.com",309],["ville-ideale.fr",310],["brainly.*",311],["eodev.com",311],["xfreehd.com",312],["freethesaurus.com",313],["thefreedictionary.com",313],["fm-arena.com",314],["tradersunion.com",315],["tandess.com",316],["allosurf.net",316],["spontacts.com",317],["dankmemer.lol",318],["getexploits.com",319],["fplstatistics.com",320],["breitbart.com",321],["salidzini.lv",322],["choosingnothing.com",323],["cryptorank.io",[324,325]],["4kwebplay.xyz",326],["qqwebplay.xyz",326],["viwlivehdplay.ru",326],["molbiotools.com",327],["vods.tv",328],["18xxx.xyz",329],["raidrush.net",330],["xnxxcom.xyz",331],["videzz.net",332],["spambox.xyz",333],["dreamdth.com",334],["freemodsapp.in",334],["onlytech.com",334],["player.jeansaispasplus.homes",335],["en-thunderscans.com",336],["iqksisgw.xyz",338],["caroloportunidades.com.br",339],["coempregos.com.br",339],["foodiesgallery.com",339],["vikatan.com",340],["camhub.world",341],["mma-core.*",342],["teracourses.com",343],["streambtw.com",344],["qrcodemonkey.net",345],["lastampa.it",346],["infinityscans.xyz",347],["infinityscans.net",347],["infinityscans.org",347],["dogdrip.net",348],["infinityfree.com",348],["smsonline.cloud",[348,349]],["faqwiki.us",350],["cool-web.de",351],["gps-cache.de",351],["web-spiele.de",351],["fun-seiten.de",351],["photo-alben.de",351],["wetter-vorhersage.de",351],["coolsoftware.de",351],["kryptografie.de",351],["cool--web-de.translate.goog",351],["gps--cache-de.translate.goog",351],["web--spiele-de.translate.goog",351],["fun--seiten-de.translate.goog",351],["photo--alben-de.translate.goog",351],["wetter--vorhersage-de.translate.goog",351],["coolsoftware-de.translate.goog",351],["kryptografie-de.translate.goog",351]]);
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
