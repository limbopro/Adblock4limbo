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
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["isDesktopApp","1000"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["afterOpen"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["()","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["pop"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["ads"],["$"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["displayAdBlockerMessage"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["/Ads|adbl/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["atob","120000"],["googleFC"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"]];
const hostnamesMap = new Map([["lablue.*",0],["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["autotrader.nl",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["comunio.*",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanzen.*",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gameswelt.*",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,6,7]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heftig.*",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["notebookcheck.*",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,110]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,135]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,247]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["testedich.*",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["transfermarkt.*",1],["trend.at",1],["truckscout24.*",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tvtv.*",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wetteronline.*",1],["wieistmeineip.*",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,243]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["wunderweib.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["wetter.*",3],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["eztv.*",5],["bluedrake42.com",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["1337x.*",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["computer76.ru",5],["hdbox.ws",7],["todopolicia.com",7],["scat.gold",7],["freecoursesite.com",7],["windowcleaningforums.co.uk",7],["cruisingearth.com",7],["hobby-machinist.com",7],["freegogpcgames.com",7],["latitude.to",7],["kitchennovel.com",7],["w3layouts.com",7],["blog.receivefreesms.co.uk",7],["eductin.com",7],["dealsfinders.blog",7],["audiobooks4soul.com",7],["tinhocdongthap.com",7],["sakarnewz.com",7],["downloadr.in",7],["topcomicporno.com",7],["sushi-scan.*",7],["celtadigital.com",7],["iptvrun.com",7],["adsup.lk",7],["cryptomonitor.in",7],["areatopik.com",7],["cardscanner.co",7],["nullforums.net",7],["courseclub.me",7],["tamarindoyam.com",7],["jeep-cj.com",7],["choiceofmods.com",7],["myqqjd.com",7],["ssdtop.com",7],["apkhex.com",7],["gezegenforum.com",7],["iptvapps.net",7],["null-scripts.net",7],["nullscripts.net",7],["bloground.ro",7],["witcherhour.com",7],["ottverse.com",7],["torrentmac.net",7],["mazakony.com",7],["laptechinfo.com",7],["mc-at.org",7],["playstationhaber.com",7],["seriesperu.com",7],["spigotunlocked.*",7],["pesprofessionals.com",7],["wpsimplehacks.com",7],["sportshub.to",[7,242]],["topsporter.net",[7,242]],["darkwanderer.net",7],["truckingboards.com",7],["coldfrm.org",7],["azrom.net",7],["freepatternsarea.com",7],["alttyab.net",7],["ahmedmode.*",7],["mobilkulup.com",7],["esopress.com",7],["nesiaku.my.id",7],["jipinsoft.com",7],["surfsees.com",7],["truthnews.de",7],["farsinama.com",7],["worldofiptv.com",7],["vuinsider.com",7],["crazydl.net",7],["gamemodsbase.com",7],["babiato.tech",7],["secuhex.com",7],["turkishaudiocenter.com",7],["galaxyos.net",7],["bizdustry.com",7],["storefront.com.ng",7],["pkbiosfix.com",7],["casi3.xyz",7],["starleaks.org",7],["forum-xiaomi.com",7],["mediafire.com",8],["wcoanimedub.tv",9],["wcoforever.net",9],["openspeedtest.com",9],["addtobucketlist.com",9],["3dzip.org",[9,68]],["ilmeteo.it",9],["wcoforever.com",9],["comprovendolibri.it",9],["healthelia.com",9],["keephealth.info",10],["kissasian.*",10],["anghami.com",11],["yts.*",12],["720pstream.*",12],["1stream.*",12],["tutele.sx",12],["katestube.com",13],["short.pe",13],["thefmovies.*",13],["footystreams.net",13],["seattletimes.com",14],["bestgames.com",15],["yiv.com",15],["globalrph.com",16],["e-glossa.it",17],["webcheats.com.br",18],["urlcero.*",19],["gala.fr",20],["gentside.com",20],["geo.fr",20],["hbrfrance.fr",20],["nationalgeographic.fr",20],["ohmymag.com",20],["serengo.net",20],["vsd.fr",20],["updato.com",[21,37]],["totaldebrid.*",22],["sandrives.*",22],["daizurin.com",22],["pendekarsubs.us",22],["dreamfancy.org",22],["rysafe.blogspot.com",22],["techacode.com",22],["toppng.com",22],["th-world.com",22],["avjamack.com",22],["avjamak.net",22],["dlhd.sx",23],["embedstream.me",23],["yts-subs.net",23],["cnnamador.com",24],["nudecelebforum.com",25],["pronpic.org",26],["thewebflash.com",27],["discordfastfood.com",27],["xup.in",27],["popularmechanics.com",28],["op.gg",29],["comunidadgzone.es",30],["fxporn69.*",30],["mp3fy.com",30],["lebensmittelpraxis.de",30],["aliancapes.*",30],["ebookdz.com",30],["forum-pokemon-go.fr",30],["praxis-jugendarbeit.de",30],["dictionnaire-medical.net",30],["cle0desktop.blogspot.com",30],["up-load.io",30],["keysbrasil.blogspot.com",30],["hotpress.info",30],["turkleech.com",30],["anibatch.me",30],["anime-i.com",30],["healthtune.site",30],["gewinde-normen.de",30],["tucinehd.com",30],["plex-guide.de",30],["jellynote.com",31],["pouvideo.*",32],["povvideo.*",32],["povw1deo.*",32],["povwideo.*",32],["powv1deo.*",32],["powvibeo.*",32],["powvideo.*",32],["powvldeo.*",32],["eporner.com",33],["pornbimbo.com",34],["4j.com",34],["avoiderrors.com",35],["sitarchive.com",35],["livenewsof.com",35],["topnewsshow.com",35],["gatcha.org",35],["empregoestagios.com",35],["everydayonsales.com",35],["kusonime.com",35],["suicidepics.com",35],["codesnail.com",35],["codingshiksha.com",35],["graphicux.com",35],["asyadrama.com",35],["bitcoinegypt.news",35],["citychilli.com",35],["talkjarvis.com",35],["hdmotori.it",36],["tubsexer.*",38],["femdomtb.com",38],["porno-tour.*",38],["bobs-tube.com",38],["lenkino.*",38],["pornfd.com",38],["pornomoll.*",38],["camsclips.*",38],["popno-tour.net",38],["molll.mobi",38],["watchmdh.to",38],["camwhores.tv",38],["camhub.cc",38],["elfqrin.com",39],["satcesc.com",40],["apfelpatient.de",40],["lusthero.com",41],["m4ufree.*",42],["m2list.com",42],["embed.nana2play.com",42],["elahmad.com",42],["dofusports.xyz",42],["dallasnews.com",43],["lnk.news",44],["lnk.parts",44],["efukt.com",45],["wendycode.com",45],["springfieldspringfield.co.uk",46],["porndoe.com",47],["smsget.net",[48,49]],["kjanime.net",50],["gioialive.it",51],["classicreload.com",52],["scriptzhub.com",52],["hotpornfile.org",53],["coolsoft.altervista.org",53],["hackedonlinegames.com",53],["dailytech-news.eu",53],["settlersonlinemaps.com",53],["ad-doge.com",53],["magdownload.org",53],["kpkuang.org",53],["shareus.site",53],["crypto4yu.com",53],["faucetwork.space",53],["writedroid.*",53],["thenightwithoutthedawn.blogspot.com",53],["entutes.com",53],["claimlite.club",53],["newscon.org",53],["chicoer.com",54],["bostonherald.com",54],["dailycamera.com",54],["maxcheaters.com",55],["rbxoffers.com",55],["postimees.ee",55],["police.community",55],["gisarea.com",55],["schaken-mods.com",55],["tvnet.lv",55],["theclashify.com",55],["txori.com",55],["olarila.com",55],["deletedspeedstreams.blogspot.com",55],["schooltravelorganiser.com",55],["xhardhempus.net",55],["mhn.quest",55],["leagueofgraphs.com",55],["hieunguyenphoto.com",55],["benzinpreis.de",55],["sportsplays.com",56],["telerium.*",57],["pornvideotop.com",58],["krotkoosporcie.pl",58],["xstory-fr.com",58],["ytapi.cc",58],["deinesexfilme.com",59],["einfachtitten.com",59],["halloporno.com",59],["herzporno.com",59],["lesbenhd.com",59],["milffabrik.com",[59,215]],["porn-monkey.com",59],["porndrake.com",59],["pornhubdeutsch.net",59],["pornoaffe.com",59],["pornodavid.com",59],["pornoente.tv",[59,215]],["pornofisch.com",59],["pornofelix.com",59],["pornohammer.com",59],["pornohelm.com",59],["pornoklinge.com",59],["pornotom.com",[59,215]],["pornotommy.com",59],["pornovideos-hd.com",59],["pornozebra.com",[59,215]],["xhamsterdeutsch.xyz",59],["xnxx-sexfilme.com",59],["letribunaldunet.fr",60],["vladan.fr",60],["live-tv-channels.org",61],["eslfast.com",62],["freegamescasual.com",63],["tcpvpn.com",64],["oko.sh",64],["timesnownews.com",64],["timesnowhindi.com",64],["timesnowmarathi.com",64],["zoomtventertainment.com",64],["tsubasa.im",65],["sholah.net",66],["2rdroid.com",66],["bisceglielive.it",67],["pandajogosgratis.com.br",69],["5278.cc",70],["pandafreegames.*",71],["tonspion.de",72],["duplichecker.com",73],["plagiarismchecker.co",73],["plagiarismdetector.net",73],["searchenginereports.net",73],["smallseotools.com",74],["linkspaid.com",75],["proxydocker.com",75],["beeimg.com",[76,77]],["emturbovid.com",77],["findjav.com",77],["javggvideo.xyz",77],["mmtv01.xyz",77],["stbturbo.xyz",77],["streamsilk.com",77],["ftlauderdalebeachcam.com",78],["ftlauderdalewebcam.com",78],["juneauharborwebcam.com",78],["keywestharborwebcam.com",78],["kittycatcam.com",78],["mahobeachcam.com",78],["miamiairportcam.com",78],["morganhillwebcam.com",78],["njwildlifecam.com",78],["nyharborwebcam.com",78],["paradiseislandcam.com",78],["pompanobeachcam.com",78],["portbermudawebcam.com",78],["portcanaveralwebcam.com",78],["portevergladeswebcam.com",78],["portmiamiwebcam.com",78],["portnywebcam.com",78],["portnassauwebcam.com",78],["portstmaartenwebcam.com",78],["portstthomaswebcam.com",78],["porttampawebcam.com",78],["sxmislandcam.com",78],["themes-dl.com",78],["badassdownloader.com",78],["badasshardcore.com",78],["badassoftcore.com",78],["nulljungle.com",78],["teevee.asia",78],["otakukan.com",78],["thoptv.*",79],["vinomo.xyz",80],["bembed.net",80],["embedv.net",80],["fslinks.org",80],["listeamed.net",80],["v6embed.xyz",80],["vembed.*",80],["vgplayer.xyz",80],["vid-guard.com",80],["giga-uqload.xyz",80],["moflix-stream.*",[80,343]],["gearingcommander.com",81],["generate.plus",82],["calculate.plus",82],["avcesar.com",83],["audiotag.info",84],["tudigitale.it",85],["ibcomputing.com",86],["legia.net",87],["acapellas4u.co.uk",88],["robloxscripts.com",89],["libreriamo.it",89],["postazap.com",89],["medebooks.xyz",89],["mashtips.com",89],["marriedgames.com.br",89],["4allprograms.me",89],["shortzzy.*",89],["nurgsm.com",89],["certbyte.com",89],["plugincrack.com",89],["gamingdeputy.com",89],["freewebcart.com",89],["autojournal.fr",90],["autoplus.fr",90],["sportauto.fr",90],["streamhentaimovies.com",91],["konten.co.id",92],["diariodenavarra.es",93],["scripai.com",93],["myfxbook.com",93],["whatfontis.com",93],["tubereader.me",93],["xiaomifans.pl",94],["eletronicabr.com",94],["optifine.net",95],["luzernerzeitung.ch",96],["tagblatt.ch",96],["spellcheck.net",97],["spellchecker.net",97],["spellweb.com",97],["ableitungsrechner.net",98],["alternet.org",99],["gourmetsupremacy.com",99],["shrib.com",100],["streameast.*",101],["thestreameast.*",101],["coolcast2.com",101],["techclips.net",101],["daddylivehd.*",101],["footyhunter.lol",101],["poscitech.click",101],["wecast.to",101],["sportbar.live",101],["freecourseweb.com",102],["devcourseweb.com",102],["coursewikia.com",102],["courseboat.com",102],["coursehulu.com",102],["pornhub.*",103],["lne.es",104],["pornult.com",105],["webcamsdolls.com",105],["bitcotasks.com",[105,152]],["adsy.pw",105],["playstore.pw",105],["exactpay.online",105],["thothd.to",105],["proplanta.de",106],["mad4wheels.com",107],["logi.im",107],["emailnator.com",107],["textograto.com",108],["voyageforum.com",109],["hmc-id.blogspot.com",109],["myabandonware.com",109],["wcofun.*",109],["ilforumdeibrutti.is",109],["chatta.it",111],["ketubanjiwa.com",112],["nsfw247.to",113],["funzen.net",113],["ilclubdellericette.it",113],["bollyholic.*",113],["extremereportbot.com",114],["getintopc.com",115],["vidia.tv",[116,117]],["hortonanderfarom.blogspot.com",117],["qoshe.com",118],["lowellsun.com",119],["mamadu.pl",119],["dobrapogoda24.pl",119],["motohigh.pl",119],["namasce.pl",119],["ultimate-catch.eu",120],["cpopchanelofficial.com",121],["creditcardgenerator.com",122],["creditcardrush.com",122],["bostoncommons.net",122],["thejobsmovie.com",122],["hl-live.de",123],["satoshi-win.xyz",123],["encurtandourl.com",[123,128]],["freesoft.id",123],["zcteam.id",123],["www-daftarharga.blogspot.com",123],["ear-phone-review.com",123],["telefullenvivo.com",123],["listatv.pl",123],["daemon-hentai.com",[123,260]],["coin-profits.xyz",123],["relampagomovies.com",123],["wohnmobilforum.de",123],["nulledbear.com",123],["sinnerclownceviri.net",123],["nilopolisonline.com.br",124],["mesquitaonline.com",124],["yellowbridge.com",124],["socialgirls.im",125],["yaoiotaku.com",126],["moneyhouse.ch",127],["ihow.info",128],["filesus.com",128],["gotxx.*",128],["sturls.com",128],["re.two.re",128],["turbo1.co",128],["cartoonsarea.xyz",128],["hartico.tv",128],["cupra.forum",128],["turkanime.*",129],["valeronevijao.com",129],["cigarlessarefy.com",129],["figeterpiazine.com",129],["yodelswartlike.com",129],["generatesnitrosate.com",129],["crownmakermacaronicism.com",129],["chromotypic.com",129],["gamoneinterrupted.com",129],["metagnathtuggers.com",129],["wolfdyslectic.com",129],["rationalityaloelike.com",129],["sizyreelingly.com",129],["simpulumlamerop.com",129],["urochsunloath.com",129],["monorhinouscassaba.com",129],["counterclockwisejacky.com",129],["35volitantplimsoles5.com",129],["scatch176duplicities.com",129],["antecoxalbobbing1010.com",129],["boonlessbestselling244.com",129],["cyamidpulverulence530.com",129],["guidon40hyporadius9.com",129],["449unceremoniousnasoseptal.com",129],["19turanosephantasia.com",129],["30sensualizeexpression.com",129],["321naturelikefurfuroid.com",129],["745mingiestblissfully.com",129],["availedsmallest.com",129],["greaseball6eventual20.com",129],["toxitabellaeatrebates306.com",129],["20demidistance9elongations.com",129],["audaciousdefaulthouse.com",129],["fittingcentermondaysunday.com",129],["fraudclatterflyingcar.com",129],["launchreliantcleaverriver.com",129],["matriculant401merited.com",129],["realfinanceblogcenter.com",129],["reputationsheriffkennethsand.com",129],["telyn610zoanthropy.com",129],["tubelessceliolymph.com",129],["tummulerviolableness.com",129],["un-block-voe.net",129],["v-o-e-unblock.com",129],["voe-un-block.com",129],["voe-unblock.*",129],["voeun-block.net",129],["voeunbl0ck.com",129],["voeunblck.com",129],["voeunblk.com",129],["voeunblock.com",129],["voeunblock1.com",129],["voeunblock2.com",129],["voeunblock3.com",129],["agefi.fr",130],["cariskuy.com",131],["letras2.com",131],["yusepjaelani.blogspot.com",132],["letras.mus.br",133],["mtlurb.com",134],["port.hu",135],["acdriftingpro.com",135],["forumdz.com",135],["abandonmail.com",135],["flmods.com",135],["zilinak.sk",135],["projectfreetv.stream",135],["hotdesimms.com",135],["pdfaid.com",135],["bootdey.com",135],["mail.com",135],["expresskaszubski.pl",135],["moegirl.org.cn",135],["flix-wave.lol",135],["fmovies0.cc",135],["onemanhua.com",136],["laksa19.github.io",137],["javcl.com",137],["tvlogy.to",137],["rp5.*",137],["live.dragaoconnect.net",137],["beststremo.com",137],["seznamzpravy.cz",137],["xerifetech.com",137],["freemcserver.net",137],["t3n.de",138],["allindiaroundup.com",139],["tapchipi.com",140],["cuitandokter.com",140],["tech-blogs.com",140],["cardiagn.com",140],["dcleakers.com",140],["esgeeks.com",140],["pugliain.net",140],["uplod.net",140],["worldfreeware.com",140],["fikiri.net",140],["myhackingworld.com",140],["phoenixfansub.com",140],["vectorizer.io",141],["smgplaza.com",141],["onehack.us",141],["thapcam.net",141],["thefastlaneforum.com",142],["trade2win.com",143],["modagamers.com",144],["khatrimaza.*",144],["freemagazines.top",144],["pogolinks.*",144],["straatosphere.com",144],["rule34porn.net",144],["nullpk.com",144],["adslink.pw",144],["downloadudemy.com",144],["picgiraffe.com",144],["weadown.com",144],["freepornsex.net",144],["nurparatodos.com.ar",144],["librospreuniversitariospdf.blogspot.com",145],["khsm.io",145],["webcreator-journal.com",145],["nu6i-bg-net.com",145],["msdos-games.com",145],["blocklayer.com",145],["weknowconquer.com",145],["popcornstream.*",146],["routech.ro",146],["hokej.net",146],["turkmmo.com",147],["palermotoday.it",148],["baritoday.it",148],["trentotoday.it",148],["agrigentonotizie.it",148],["anconatoday.it",148],["arezzonotizie.it",148],["avellinotoday.it",148],["bresciatoday.it",148],["brindisireport.it",148],["casertanews.it",148],["cataniatoday.it",148],["cesenatoday.it",148],["chietitoday.it",148],["forlitoday.it",148],["frosinonetoday.it",148],["genovatoday.it",148],["ilpescara.it",148],["ilpiacenza.it",148],["latinatoday.it",148],["lecceprima.it",148],["leccotoday.it",148],["livornotoday.it",148],["messinatoday.it",148],["milanotoday.it",148],["modenatoday.it",148],["monzatoday.it",148],["novaratoday.it",148],["padovaoggi.it",148],["parmatoday.it",148],["perugiatoday.it",148],["pisatoday.it",148],["quicomo.it",148],["ravennatoday.it",148],["reggiotoday.it",148],["riminitoday.it",148],["romatoday.it",148],["salernotoday.it",148],["sondriotoday.it",148],["sportpiacenza.it",148],["ternitoday.it",148],["today.it",148],["torinotoday.it",148],["trevisotoday.it",148],["triesteprima.it",148],["udinetoday.it",148],["veneziatoday.it",148],["vicenzatoday.it",148],["thumpertalk.com",149],["arkcod.org",149],["facciabuco.com",150],["softx64.com",151],["thelayoff.com",152],["blog.coinsrise.net",152],["blog.cryptowidgets.net",152],["blog.insurancegold.in",152],["blog.wiki-topia.com",152],["blog.coinsvalue.net",152],["blog.cookinguide.net",152],["blog.freeoseocheck.com",152],["blog.makeupguide.net",152],["blog.carstopia.net",152],["blog.carsmania.net",152],["shorterall.com",152],["blog24.me",152],["maxstream.video",152],["tvepg.eu",152],["manwan.xyz",152],["dailymaverick.co.za",153],["ludigames.com",154],["made-by.org",154],["xenvn.com",154],["worldtravelling.com",154],["igirls.in",154],["technichero.com",154],["roshiyatech.my.id",154],["androidadult.com",154],["aeroxplorer.com",154],["sportitalialive.com",154],["apps2app.com",155],["starkroboticsfrc.com",156],["sinonimos.de",156],["antonimos.de",156],["quesignifi.ca",156],["tiktokrealtime.com",156],["tiktokcounter.net",156],["tpayr.xyz",156],["poqzn.xyz",156],["ashrfd.xyz",156],["rezsx.xyz",156],["tryzt.xyz",156],["ashrff.xyz",156],["rezst.xyz",156],["dawenet.com",156],["erzar.xyz",156],["waezm.xyz",156],["waezg.xyz",156],["blackwoodacademy.org",156],["cryptednews.space",156],["vivuq.com",156],["swgop.com",156],["vbnmll.com",156],["telcoinfo.online",156],["dshytb.com",156],["enit.in",157],["financerites.com",157],["fadedfeet.com",158],["homeculina.com",158],["ineedskin.com",158],["kenzo-flowertag.com",158],["lawyex.co",158],["mdn.lol",158],["bitzite.com",159],["coingraph.us",160],["impact24.us",160],["apkmodvn.com",161],["mod1s.com",161],["apkmoddone.com",162],["dl.apkmoddone.com",163],["phongroblox.com",163],["shortencash.click",164],["my-code4you.blogspot.com",165],["vrcmods.com",166],["osuskinner.com",166],["osuskins.net",166],["pentruea.com",[167,168]],["mchacks.net",169],["why-tech.it",170],["compsmag.com",171],["tapetus.pl",172],["autoroad.cz",173],["brawlhalla.fr",173],["tecnobillo.com",173],["sexcamfreeporn.com",174],["breatheheavy.com",175],["wenxuecity.com",176],["key-hub.eu",177],["fabioambrosi.it",178],["tattle.life",179],["emuenzen.de",179],["terrylove.com",179],["mynet.com",[180,243]],["cidade.iol.pt",181],["fantacalcio.it",182],["hentaifreak.org",183],["hypebeast.com",184],["krankheiten-simulieren.de",185],["catholic.com",186],["3dmodelshare.org",187],["techinferno.com",188],["ibeconomist.com",189],["bookriot.com",190],["purposegames.com",191],["globo.com",192],["latimes.com",192],["claimrbx.gg",193],["perelki.net",194],["vpn-anbieter-vergleich-test.de",195],["livingincebuforums.com",196],["paperzonevn.com",197],["alltechnerd.com",198],["malaysianwireless.com",199],["erinsakura.com",200],["infofuge.com",200],["freejav.guru",200],["novelmultiverse.com",200],["fritidsmarkedet.dk",201],["maskinbladet.dk",201],["15min.lt",202],["baddiehub.com",203],["mr9soft.com",204],["21porno.com",205],["adult-sex-gamess.com",206],["hentaigames.app",206],["mobilesexgamesx.com",206],["mysexgamer.com",206],["porngameshd.com",206],["sexgamescc.com",206],["xnxx-sex-videos.com",206],["f2movies.to",207],["freeporncave.com",208],["tubsxxx.com",209],["subtitle.one",210],["manga18fx.com",211],["freebnbcoin.com",211],["sextvx.com",212],["studydhaba.com",213],["freecourse.tech",213],["victor-mochere.com",213],["papunika.com",213],["mobilanyheter.net",213],["prajwaldesai.com",[213,233]],["ftuapps.dev",213],["muztext.com",214],["pornohans.com",215],["nursexfilme.com",215],["pornohirsch.net",215],["xhamster-sexvideos.com",215],["pornoschlange.com",215],["xhamsterdeutsch.*",215],["hdpornos.net",215],["gutesexfilme.com",215],["zona-leros.com",215],["charbelnemnom.com",216],["simplebits.io",217],["online-fix.me",218],["privatemoviez.*",219],["gamersdiscussionhub.com",219],["owlzo.com",220],["q1003.com",221],["blogpascher.com",222],["testserver.pro",223],["lifestyle.bg",223],["money.bg",223],["news.bg",223],["topsport.bg",223],["webcafe.bg",223],["schoolcheats.net",224],["mgnet.xyz",225],["advertiserandtimes.co.uk",226],["xvideos2020.me",227],["111.90.159.132",228],["techsolveprac.com",229],["joomlabeginner.com",230],["largescaleforums.com",231],["dubznetwork.com",232],["dongknows.com",234],["traderepublic.community",235],["babia.to",236],["code2care.org",237],["gmx.*",238],["xxxxsx.com",239],["ngontinh24.com",240],["idevicecentral.com",241],["dzeko11.net",242],["carscoops.com",243],["dziennik.pl",243],["eurointegration.com.ua",243],["flatpanelshd.com",243],["fourfourtwo.co.kr",243],["hoyme.jp",243],["issuya.com",243],["itainews.com",243],["iusm.co.kr",243],["logicieleducatif.fr",243],["mydaily.co.kr",243],["onlinegdb.com",243],["picrew.me",243],["pravda.com.ua",243],["reportera.co.kr",243],["sportsrec.com",243],["sportsseoul.com",243],["text-compare.com",243],["tweaksforgeeks.com",243],["wfmz.com",243],["worldhistory.org",243],["etnews.com",243],["palabr.as",243],["motscroises.fr",243],["cruciverba.it",243],["oradesibiu.ro",243],["w.grapps.me",243],["gazetaprawna.pl",243],["pressian.com",243],["raenonx.cc",[243,261]],["indiatimes.com",243],["missyusa.com",243],["aikatu.jp",243],["adintrend.tv",243],["ark-unity.com",243],["cool-style.com.tw",243],["doanhnghiepvn.vn",243],["thesaurus.net",244],["automobile-catalog.com",244],["motorbikecatalog.com",244],["maketecheasier.com",244],["mlbpark.donga.com",245],["jjang0u.com",246],["mangacrab.com",248],["viefaucet.com",249],["pourcesoir.in",249],["cloud-computing-central.com",250],["afk.guide",251],["businessnamegenerator.com",252],["derstandard.at",253],["derstandard.de",253],["rocketnews24.com",254],["soranews24.com",254],["youpouch.com",254],["gourmetscans.net",255],["ilsole24ore.com",256],["ipacrack.com",257],["hentaiporn.one",258],["infokik.com",259],["daemonanime.net",260],["bgmateriali.com",260],["deezer.com",261],["fosslinux.com",262],["shrdsk.me",263],["examword.com",264],["sempreupdate.com.br",264],["tribuna.com",265],["trendsderzukunft.de",266],["gal-dem.com",266],["lostineu.eu",266],["oggitreviso.it",266],["speisekarte.de",266],["mixed.de",266],["lightnovelpub.*",[267,268]],["lightnovelspot.com",[267,268]],["lightnovelworld.com",[267,268]],["novelpub.com",[267,268]],["webnovelpub.com",[267,268]],["mail.yahoo.com",269],["hwzone.co.il",270],["nammakalvi.com",271],["c2g.at",272],["terafly.me",272],["elamigos-games.com",272],["elamigos-games.net",272],["dktechnicalmate.com",273],["recipahi.com",273],["kaystls.site",274],["aquarius-horoscopes.com",275],["cancer-horoscopes.com",275],["dubipc.blogspot.com",275],["echoes.gr",275],["engel-horoskop.de",275],["freegames44.com",275],["fuerzasarmadas.eu",275],["gemini-horoscopes.com",275],["jurukunci.net",275],["krebs-horoskop.com",275],["leo-horoscopes.com",275],["maliekrani.com",275],["nklinks.click",275],["ourenseando.es",275],["pisces-horoscopes.com",275],["radio-en-direct.fr",275],["sagittarius-horoscopes.com",275],["scorpio-horoscopes.com",275],["singlehoroskop-loewe.de",275],["skat-karten.de",275],["skorpion-horoskop.com",275],["taurus-horoscopes.com",275],["the1security.com",275],["virgo-horoscopes.com",275],["zonamarela.blogspot.com",275],["yoima.hatenadiary.com",275],["vpntester.org",276],["japscan.lol",277],["digitask.ru",278],["tempumail.com",279],["sexvideos.host",280],["camcaps.*",281],["10alert.com",282],["cryptstream.de",283],["nydus.org",283],["techhelpbd.com",284],["fapdrop.com",285],["cellmapper.net",286],["hdrez.com",287],["youwatch-serie.com",287],["russland.jetzt",287],["printablecreative.com",288],["peachprintable.com",288],["comohoy.com",289],["leak.sx",289],["paste.bin.sx",289],["pornleaks.in",289],["merlininkazani.com",289],["j91.asia",290],["rekidai-info.github.io",291],["jeniusplay.com",292],["indianyug.com",293],["rgb.vn",293],["needrom.com",294],["criptologico.com",295],["megadrive-emulator.com",296],["eromanga-show.com",297],["hentai-one.com",297],["hentaipaw.com",297],["10minuteemails.com",298],["luxusmail.org",298],["w3cub.com",299],["bangpremier.com",300],["nyaa.iss.ink",301],["drivebot.*",302],["thenextplanet1.*",303],["tnp98.xyz",303],["freepdfcomic.com",304],["techedubyte.com",305],["tickzoo.tv",306],["oploverz.*",306],["memedroid.com",307],["animesync.org",308],["karaoketexty.cz",309],["filmizlehdfilm.com",310],["filmizletv.*",310],["fullfilmizle.cc",310],["gofilmizle.net",310],["resortcams.com",311],["cheatography.com",311],["sonixgvn.net",312],["faqwiki.us",312],["autoscout24.*",313],["mjakmama24.pl",314],["cheatermad.com",315],["ville-ideale.fr",316],["brainly.*",317],["eodev.com",317],["xfreehd.com",318],["freethesaurus.com",319],["thefreedictionary.com",319],["fm-arena.com",320],["tradersunion.com",321],["tandess.com",322],["allosurf.net",322],["spontacts.com",323],["dankmemer.lol",324],["getexploits.com",325],["fplstatistics.com",326],["breitbart.com",327],["salidzini.lv",328],["choosingnothing.com",329],["cryptorank.io",[330,331]],["4kwebplay.xyz",332],["qqwebplay.xyz",332],["viwlivehdplay.ru",332],["molbiotools.com",333],["vods.tv",334],["18xxx.xyz",335],["raidrush.net",336],["xnxxcom.xyz",337],["videzz.net",338],["spambox.xyz",339],["dreamdth.com",340],["freemodsapp.in",340],["onlytech.com",340],["player.jeansaispasplus.homes",341],["en-thunderscans.com",342],["iqksisgw.xyz",344],["caroloportunidades.com.br",345],["coempregos.com.br",345],["foodiesgallery.com",345],["vikatan.com",346],["camhub.world",347],["mma-core.*",348],["teracourses.com",349],["streambtw.com",350],["lastampa.it",351],["infinityscans.xyz",352],["infinityscans.net",352],["infinityscans.org",352],["dogdrip.net",353],["infinityfree.com",353],["smsonline.cloud",[353,354]]]);
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
