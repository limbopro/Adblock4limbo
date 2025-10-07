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
        proxyApplyFn.isCtor = new Map();
    }
    if ( proxyApplyFn.isCtor.has(target) === false ) {
        proxyApplyFn.isCtor.set(target, fn.prototype?.constructor === fn);
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
    if ( proxyApplyFn.isCtor.get(target) ) {
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
const argsList = [["=document[_0x"],["/&&\\s*[A-Z]{4,}\\(\\)/"],["/\\(\\s*[\\s$0-9A-Z_a-z]*\\)\\s*=>|^\\s*function\\s*\\(\\s*[\\s$0-9A-Z_a-z]*\\)\\s*\\{.{35,100}|document\\[|nextElementSibling/","1000"],["]();}","500"],[")](this,...","3000-6000"],["(new Error(","3000-6000"],[".offsetHeight>0"],["adblock"],["/constructor\\.prototype|amzn_aps_csm|\\'\\/hithere\\'|YW16bl9hcHNfY3Nt|cmVwb3J0RXJyb3Jz|L3ZlcnktcGxlYXNl|getAdnginName|hasOwnProperty|location/"],["googleFC"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["admc"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["'0x"],["document.querySelector","5000"],["nextFunction","250"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["nextFunction","2000"],["byepopup","5000"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["abDetected"],["$"],["KeepOpeningPops","1000"],["location.href"],["adb","0"],["adBlocked"],["warning","100"],["adsbygoogle"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["displayCookieWallBanner"],["pum-open"],["overlay","2000"],["/adblock/i"],["Math.round","1000"],["adblock","5"],["ag_adBlockerDetected"],["null"],["adb","6000"],["sadbl"],["brave_load_popup"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["test","100"],["purple_box"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["mdp"],["modal"],[".show","1000"],["afterOpen"],[".show"],["showModal"],["blur"],["samOverlay"],["native"],["bADBlock"],["location"],["alert"],["t()","0"],["ads"],["alert","2000"],["/adblock|isRequestPresent/"],["documentElement.innerHTML"],["_0x","500"],["isRequestPresent"],["checkAdblock"],["1e3*"],["","2000"],["/^/","1000"],["checkAdBlock"],["displayAdBlockerMessage"],["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["/loadMomoVip|loadExo|includeSpecial/"],["appendChild"],["affiliate"],["getComputedStyle"],["displayMessage","2000"],["AdDetect"],["ai_"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["[native code]","500"],["consent"],["await _0x"],["adbl"],["openPopunder"],["closeBanner"],[".getComputedStyle"],["offsetHeight"],["offsetLeft"],["height"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["fetch"],["window.location.href=link"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["/debugger|offsetParent/"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["answers"],["top-right","2000"],["enforceAdStatus"],["display","5000"],["eb"],["/adb/i"],[").show()"],["","1000"],["site-access"],["/Ads|adbl|offsetHeight/"],["/show|innerHTML/"],["/show|document\\.createElement/"],["MobileInGameGames"],["Msg"],["UABP"],["()","150"],["href"],["aaaaa-modal"],["()=>"],["null","10"],["","500"],["pop"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["ga"],["keepChecking"],["myTestAd"],["click"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML|setTimeout/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],[".redirect"],["/AdBlock/i"],["popup"],["/adScriptPath|MMDConfig/"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["","2000-5000"],["contrformpub"],["trigger","0"],["ADB"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["getComputedStyle(testAd)"],[".adv-"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["test.remove","100"],["adblock","2000"],["adBlockerModal"],["","10000-15000"],["adex"],["length"],["atob","120000"],["#ad_blocker_detector"],["push"],["AdBlocker"],["wbDeadHinweis"],["","10000"],["fired"],["mode:\"no-cors\""],["Visibility"],["TNCMS.DMP"],["ast"],["googlesyndication"],["start"],["moneyDetect"],["sub"],["/createElement|addEventListener|clientHeight/"],["testAd"]];
const hostnamesMap = new Map([["japscan.*",[0,1,2]],["poophq.com",3],["veev.to",3],["dogdrip.net",4],["infinityfree.com",4],["smsonline.cloud",[4,5]],["faqwiki.us",6],["mail.yahoo.com",[7,324]],["maxcheaters.com",7],["postimees.ee",7],["police.community",7],["gisarea.com",7],["schaken-mods.com",7],["tvnet.lv",7],["theclashify.com",7],["txori.com",7],["olarila.com",7],["deletedspeedstreams.blogspot.com",7],["schooltravelorganiser.com",7],["xhardhempus.net",7],["mhn.quest",7],["leagueofgraphs.com",7],["hieunguyenphoto.com",7],["benzinpreis.de",7],["client.falixnodes.net",8],["lastampa.it",9],["m.timesofindia.com",10],["timesofindia.indiatimes.com",10],["youmath.it",10],["redensarten-index.de",10],["lesoir.be",10],["electriciansforums.net",10],["keralatelecom.info",10],["universegunz.net",10],["happypenguin.altervista.org",10],["everyeye.it",10],["eztv.*",10],["bluedrake42.com",10],["supermarioemulator.com",10],["futbollibrehd.com",10],["eska.pl",10],["eskarock.pl",10],["voxfm.pl",10],["mathaeser.de",10],["betaseries.com",10],["free-sms-receive.com",10],["sms-receive-online.com",10],["computer76.ru",10],["golem.de",[11,12,159]],["hdbox.ws",12],["todopolicia.com",12],["scat.gold",12],["freecoursesite.com",12],["windowcleaningforums.co.uk",12],["cruisingearth.com",12],["hobby-machinist.com",12],["freegogpcgames.com",12],["latitude.to",12],["kitchennovel.com",12],["w3layouts.com",12],["blog.receivefreesms.co.uk",12],["eductin.com",12],["dealsfinders.blog",12],["audiobooks4soul.com",12],["downloadr.in",12],["topcomicporno.com",12],["sushi-scan.*",12],["celtadigital.com",12],["iptvrun.com",12],["adsup.lk",12],["cryptomonitor.in",12],["areatopik.com",12],["cardscanner.co",12],["nullforums.net",12],["courseclub.me",12],["tamarindoyam.com",12],["jeep-cj.com",12],["choiceofmods.com",12],["myqqjd.com",12],["ssdtop.com",12],["apkhex.com",12],["gezegenforum.com",12],["iptvapps.net",12],["null-scripts.net",12],["nullscripts.net",12],["bloground.ro",12],["witcherhour.com",12],["ottverse.com",12],["torrentmac.net",12],["mazakony.com",12],["laptechinfo.com",12],["mc-at.org",12],["playstationhaber.com",12],["seriesperu.com",12],["spigotunlocked.*",12],["pesprofessionals.com",12],["wpsimplehacks.com",12],["sportshub.to",[12,268]],["topsporter.net",[12,268]],["darkwanderer.net",12],["truckingboards.com",12],["coldfrm.org",12],["azrom.net",12],["freepatternsarea.com",12],["alttyab.net",12],["ahmedmode.*",12],["esopress.com",12],["nesiaku.my.id",12],["jipinsoft.com",12],["truthnews.de",12],["farsinama.com",12],["worldofiptv.com",12],["vuinsider.com",12],["crazydl.net",12],["gamemodsbase.com",12],["babiato.tech",12],["secuhex.com",12],["turkishaudiocenter.com",12],["galaxyos.net",12],["bizdustry.com",12],["storefront.com.ng",12],["pkbiosfix.com",12],["casi3.xyz",12],["forum-xiaomi.com",12],["mediafire.com",13],["wcoanimedub.tv",14],["wcoforever.net",14],["openspeedtest.com",14],["addtobucketlist.com",14],["3dzip.org",[14,68]],["ilmeteo.it",14],["wcoforever.com",14],["comprovendolibri.it",14],["healthelia.com",14],["yts.*",15],["720pstream.*",15],["1stream.*",15],["seattletimes.com",16],["bestgames.com",17],["yiv.com",17],["globalrph.com",18],["e-glossa.it",19],["webcheats.com.br",20],["urlcero.*",21],["gala.fr",22],["gentside.com",22],["geo.fr",22],["hbrfrance.fr",22],["nationalgeographic.fr",22],["ohmymag.com",22],["serengo.net",22],["vsd.fr",22],["short.pe",23],["thefmovies.*",23],["footystreams.net",23],["katestube.com",23],["updato.com",[24,37]],["totaldebrid.*",25],["sandrives.*",25],["daizurin.com",25],["pendekarsubs.us",25],["dreamfancy.org",25],["rysafe.blogspot.com",25],["techacode.com",25],["toppng.com",25],["th-world.com",25],["avjamack.com",25],["avjamak.net",25],["cnnamador.com",26],["nudecelebforum.com",27],["pronpic.org",28],["thewebflash.com",29],["discordfastfood.com",29],["xup.in",29],["popularmechanics.com",30],["comunidadgzone.es",31],["fxporn69.*",31],["mp3fy.com",31],["lebensmittelpraxis.de",31],["aliancapes.*",31],["forum-pokemon-go.fr",31],["praxis-jugendarbeit.de",31],["dictionnaire-medical.net",31],["cle0desktop.blogspot.com",31],["up-load.io",31],["keysbrasil.blogspot.com",31],["hotpress.info",31],["turkleech.com",31],["anibatch.me",31],["anime-i.com",31],["gewinde-normen.de",31],["tucinehd.com",31],["kdramasmaza.com.pk",31],["jellynote.com",32],["eporner.com",33],["pornbimbo.com",34],["4j.com",34],["avoiderrors.com",35],["sitarchive.com",35],["livenewsof.com",35],["topnewsshow.com",35],["gatcha.org",35],["kusonime.com",35],["suicidepics.com",35],["codesnail.com",35],["codingshiksha.com",35],["graphicux.com",35],["citychilli.com",35],["talkjarvis.com",35],["hdmotori.it",36],["tubsexer.*",38],["femdomtb.com",38],["porno-tour.*",38],["lenkino.*",38],["bobs-tube.com",38],["pornfd.com",38],["pornomoll.*",38],["camsclips.*",38],["popno-tour.net",38],["watchmdh.to",38],["camwhores.tv",38],["camhub.cc",38],["elfqrin.com",39],["satcesc.com",40],["apfelpatient.de",40],["lusthero.com",41],["m4ufree.*",42],["m2list.com",42],["embed.nana2play.com",42],["dallasnews.com",43],["lnk.news",44],["lnk.parts",44],["efukt.com",45],["wendycode.com",45],["springfieldspringfield.co.uk",46],["porndoe.com",47],["smsget.net",[48,49]],["kjanime.net",50],["gioialive.it",51],["classicreload.com",52],["scriptzhub.com",52],["hotpornfile.org",53],["coolsoft.altervista.org",53],["hackedonlinegames.com",53],["dailytech-news.eu",53],["settlersonlinemaps.com",53],["ad-doge.com",53],["magdownload.org",53],["kpkuang.org",53],["crypto4yu.com",53],["writedroid.*",53],["thenightwithoutthedawn.blogspot.com",53],["claimlite.club",53],["newscon.org",53],["rl6mans.com",53],["chicoer.com",54],["bostonherald.com",54],["dailycamera.com",54],["sportsplays.com",55],["ebookdz.com",56],["telerium.*",57],["pornvideotop.com",58],["arolinks.com",58],["xstory-fr.com",58],["1337x.*",58],["x1337x.*",58],["1337x.ninjaproxy1.com",58],["ytapi.cc",58],["letribunaldunet.fr",59],["vladan.fr",59],["live-tv-channels.org",60],["eslfast.com",61],["ge-map-overlays.appspot.com",62],["mad4wheels.com",62],["1xanimes.in",62],["logi.im",62],["emailnator.com",62],["claudelog.com",62],["freegamescasual.com",63],["tcpvpn.com",64],["oko.sh",64],["timesnownews.com",64],["timesnowhindi.com",64],["timesnowmarathi.com",64],["zoomtventertainment.com",64],["tsubasa.im",65],["sholah.net",66],["2rdroid.com",66],["bisceglielive.it",67],["pandajogosgratis.com.br",69],["5278.cc",70],["pandafreegames.*",71],["tonspion.de",72],["duplichecker.com",73],["plagiarismchecker.co",73],["plagiarismdetector.net",73],["searchenginereports.net",73],["smallseotools.com",74],["linkspaid.com",75],["proxydocker.com",75],["beeimg.com",[76,77]],["emturbovid.com",77],["findjav.com",77],["javggvideo.xyz",77],["mmtv01.xyz",77],["stbturbo.xyz",77],["trailerhg.xyz",77],["turboplayers.xyz",77],["turbovidhls.com",77],["viralharami.com",77],["ftlauderdalebeachcam.com",78],["ftlauderdalewebcam.com",78],["juneauharborwebcam.com",78],["keywestharborwebcam.com",78],["kittycatcam.com",78],["mahobeachcam.com",78],["miamiairportcam.com",78],["morganhillwebcam.com",78],["njwildlifecam.com",78],["nyharborwebcam.com",78],["paradiseislandcam.com",78],["pompanobeachcam.com",78],["portbermudawebcam.com",78],["portcanaveralwebcam.com",78],["portevergladeswebcam.com",78],["portmiamiwebcam.com",78],["portnywebcam.com",78],["portnassauwebcam.com",78],["portstmaartenwebcam.com",78],["portstthomaswebcam.com",78],["porttampawebcam.com",78],["sxmislandcam.com",78],["themes-dl.com",78],["badassdownloader.com",78],["badasshardcore.com",78],["badassoftcore.com",78],["nulljungle.com",78],["teevee.asia",78],["otakukan.com",78],["thoptv.*",79],["gearingcommander.com",80],["generate.plus",81],["calculate.plus",81],["avcesar.com",82],["audiotag.info",83],["tudigitale.it",84],["ibcomputing.com",85],["legia.net",86],["acapellas4u.co.uk",87],["robloxscripts.com",88],["libreriamo.it",88],["postazap.com",88],["filmyzones.com",88],["medebooks.xyz",88],["mashtips.com",88],["marriedgames.com.br",88],["4allprograms.me",88],["shortzzy.*",88],["nurgsm.com",88],["plugincrack.com",88],["gamingdeputy.com",88],["freewebcart.com",88],["gamekult.com",89],["streamhentaimovies.com",90],["konten.co.id",91],["diariodenavarra.es",92],["scripai.com",92],["myfxbook.com",92],["whatfontis.com",92],["katfile.*",92],["tubereader.me",92],["optifine.net",93],["luzernerzeitung.ch",94],["tagblatt.ch",94],["ableitungsrechner.net",95],["alternet.org",96],["gourmetsupremacy.com",96],["shrib.com",97],["streameast.*",98],["thestreameast.*",98],["techclips.net",98],["daddylivehd.*",98],["footyhunter.lol",98],["wecast.to",98],["freecourseweb.com",99],["coursewikia.com",99],["courseboat.com",99],["pornhub.*",100],["lne.es",[101,374]],["pornult.com",102],["webcamsdolls.com",102],["bitcotasks.com",[102,144]],["adsy.pw",102],["playstore.pw",102],["exactpay.online",102],["thothd.to",102],["proplanta.de",103],["textograto.com",104],["voyageforum.com",105],["hmc-id.blogspot.com",105],["myabandonware.com",105],["wcofun.*",105],["ilforumdeibrutti.is",105],["prad.de",[106,159]],["chatta.it",107],["ketubanjiwa.com",108],["nsfw247.to",109],["funzen.net",109],["extremereportbot.com",110],["getintopc.com",111],["qoshe.com",112],["lowellsun.com",113],["mamadu.pl",113],["dobrapogoda24.pl",113],["motohigh.pl",113],["namasce.pl",113],["ultimate-catch.eu",114],["cpopchanelofficial.com",115],["creditcardgenerator.com",116],["creditcardrush.com",116],["bostoncommons.net",116],["thejobsmovie.com",116],["hl-live.de",117],["satoshi-win.xyz",117],["encurtandourl.com",[117,121]],["www-daftarharga.blogspot.com",117],["ear-phone-review.com",117],["telefullenvivo.com",117],["listatv.pl",117],["coin-profits.xyz",117],["relampagomovies.com",117],["wohnmobilforum.de",117],["nulledbear.com",117],["sinnerclownceviri.net",117],["nilopolisonline.com.br",118],["mesquitaonline.com",118],["yellowbridge.com",118],["yaoiotaku.com",119],["moneyhouse.ch",120],["ihow.info",121],["filesus.com",121],["gotxx.*",121],["sturls.com",121],["turbo1.co",121],["hartico.tv",121],["cupra.forum",121],["turkanime.*",122],["valeronevijao.com",122],["yodelswartlike.com",122],["generatesnitrosate.com",122],["gamoneinterrupted.com",122],["metagnathtuggers.com",122],["rationalityaloelike.com",122],["sizyreelingly.com",122],["urochsunloath.com",122],["monorhinouscassaba.com",122],["antecoxalbobbing1010.com",122],["boonlessbestselling244.com",122],["cyamidpulverulence530.com",122],["guidon40hyporadius9.com",122],["449unceremoniousnasoseptal.com",122],["30sensualizeexpression.com",122],["greaseball6eventual20.com",122],["toxitabellaeatrebates306.com",122],["20demidistance9elongations.com",122],["audaciousdefaulthouse.com",122],["fittingcentermondaysunday.com",122],["launchreliantcleaverriver.com",122],["matriculant401merited.com",122],["realfinanceblogcenter.com",122],["telyn610zoanthropy.com",122],["un-block-voe.net",122],["v-o-e-unblock.com",122],["voe-un-block.com",122],["voe-unblock.*",122],["voeunbl0ck.com",122],["voeunblck.com",122],["voeunblk.com",122],["voeunblock.com",122],["voeunblock2.com",122],["voeunblock3.com",122],["agefi.fr",123],["cariskuy.com",124],["letras2.com",124],["yusepjaelani.blogspot.com",125],["letras.mus.br",126],["eletronicabr.com",127],["mtlurb.com",128],["onemanhua.com",129],["laksa19.github.io",130],["javcl.com",130],["tvlogy.to",130],["rp5.*",130],["live.dragaoconnect.net",130],["seznamzpravy.cz",130],["xerifetech.com",130],["freemcserver.net",130],["t3n.de",131],["allindiaroundup.com",132],["tapchipi.com",133],["dcleakers.com",133],["esgeeks.com",133],["pugliain.net",133],["uplod.net",133],["worldfreeware.com",133],["tech-blogs.com",133],["cardiagn.com",133],["fikiri.net",133],["myhackingworld.com",133],["vectorizer.io",134],["onehack.us",134],["smgplaza.com",134],["thapcam.net",134],["breznikar.com",134],["thefastlaneforum.com",135],["5flix.top",136],["bembed.net",136],["embedv.net",136],["javguard.club",136],["listeamed.net",136],["v6embed.xyz",136],["vembed.*",136],["vid-guard.com",136],["vidguardto.xyz",136],["yesmovies.*>>",136],["pistona.xyz",136],["vinomo.xyz",136],["moflix-stream.*",[136,165]],["trade2win.com",137],["modagamers.com",138],["khatrimaza.*",138],["freemagazines.top",138],["pogolinks.*",138],["straatosphere.com",138],["nullpk.com",138],["adslink.pw",138],["downloadudemy.com",138],["picgiraffe.com",138],["weadown.com",138],["freepornsex.net",138],["nurparatodos.com.ar",138],["popcornstream.*",139],["routech.ro",139],["hokej.net",139],["turkmmo.com",140],["acdriftingpro.com",141],["palermotoday.it",142],["baritoday.it",142],["trentotoday.it",142],["agrigentonotizie.it",142],["anconatoday.it",142],["arezzonotizie.it",142],["avellinotoday.it",142],["bresciatoday.it",142],["brindisireport.it",142],["casertanews.it",142],["cataniatoday.it",142],["cesenatoday.it",142],["chietitoday.it",142],["forlitoday.it",142],["frosinonetoday.it",142],["genovatoday.it",142],["ilpescara.it",142],["ilpiacenza.it",142],["latinatoday.it",142],["lecceprima.it",142],["leccotoday.it",142],["livornotoday.it",142],["messinatoday.it",142],["milanotoday.it",142],["modenatoday.it",142],["monzatoday.it",142],["novaratoday.it",142],["padovaoggi.it",142],["parmatoday.it",142],["perugiatoday.it",142],["pisatoday.it",142],["quicomo.it",142],["ravennatoday.it",142],["reggiotoday.it",142],["riminitoday.it",142],["romatoday.it",142],["salernotoday.it",142],["sondriotoday.it",142],["sportpiacenza.it",142],["ternitoday.it",142],["today.it",142],["torinotoday.it",142],["trevisotoday.it",142],["triesteprima.it",142],["udinetoday.it",142],["veneziatoday.it",142],["vicenzatoday.it",142],["thumpertalk.com",143],["austiblox.net",143],["thelayoff.com",144],["shorterall.com",144],["maxstream.video",144],["tvepg.eu",144],["manwan.xyz",144],["dailymaverick.co.za",145],["ludigames.com",146],["made-by.org",146],["worldtravelling.com",146],["technichero.com",146],["androidadult.com",146],["aeroxplorer.com",146],["sportitalialive.com",146],["adrinolinks.com",147],["link.vipurl.in",147],["nanolinks.in",147],["fadedfeet.com",148],["homeculina.com",148],["ineedskin.com",148],["kenzo-flowertag.com",148],["lawyex.co",148],["mdn.lol",148],["starkroboticsfrc.com",149],["sinonimos.de",149],["antonimos.de",149],["quesignifi.ca",149],["tiktokrealtime.com",149],["tiktokcounter.net",149],["tpayr.xyz",149],["poqzn.xyz",149],["ashrfd.xyz",149],["rezsx.xyz",149],["tryzt.xyz",149],["ashrff.xyz",149],["rezst.xyz",149],["dawenet.com",149],["erzar.xyz",149],["waezm.xyz",149],["waezg.xyz",149],["blackwoodacademy.org",149],["cryptednews.space",149],["vivuq.com",149],["swgop.com",149],["vbnmll.com",149],["telcoinfo.online",149],["dshytb.com",149],["bitzite.com",150],["coingraph.us",151],["impact24.us",151],["tpi.li",152],["oii.la",152],["www.apkmoddone.com",153],["sitemini.io.vn",154],["vip1s.top",154],["dl.apkmoddone.com",155],["phongroblox.com",155],["financacerta.com",156],["encurtads.net",156],["shortencash.click",157],["lablue.*",158],["4-liga.com",159],["4fansites.de",159],["4players.de",159],["9monate.de",159],["aachener-nachrichten.de",159],["aachener-zeitung.de",159],["abendblatt.de",159],["abendzeitung-muenchen.de",159],["about-drinks.com",159],["abseits-ka.de",159],["airliners.de",159],["ajaxshowtime.com",159],["allgemeine-zeitung.de",159],["alpin.de",159],["antenne.de",159],["arcor.de",159],["areadvd.de",159],["areamobile.de",159],["ariva.de",159],["astronews.com",159],["aussenwirtschaftslupe.de",159],["auszeit.bio",159],["auto-motor-und-sport.de",159],["auto-service.de",159],["autobild.de",159],["autoextrem.de",159],["autopixx.de",159],["autorevue.at",159],["autotrader.nl",159],["az-online.de",159],["baby-vornamen.de",159],["babyclub.de",159],["bafoeg-aktuell.de",159],["berliner-kurier.de",159],["berliner-zeitung.de",159],["bigfm.de",159],["bikerszene.de",159],["bildderfrau.de",159],["blackd.de",159],["blick.de",159],["boerse-online.de",159],["boerse.de",159],["boersennews.de",159],["braunschweiger-zeitung.de",159],["brieffreunde.de",159],["brigitte.de",159],["buerstaedter-zeitung.de",159],["buffed.de",159],["businessinsider.de",159],["buzzfeed.at",159],["buzzfeed.de",159],["caravaning.de",159],["cavallo.de",159],["chefkoch.de",159],["cinema.de",159],["clever-tanken.de",159],["computerbild.de",159],["computerhilfen.de",159],["comunio-cl.com",159],["comunio.*",159],["connect.de",159],["chip.de",159],["da-imnetz.de",159],["dasgelbeblatt.de",159],["dbna.com",159],["dbna.de",159],["deichstube.de",159],["deine-tierwelt.de",159],["der-betze-brennt.de",159],["derwesten.de",159],["desired.de",159],["dhd24.com",159],["dieblaue24.com",159],["digitalfernsehen.de",159],["dnn.de",159],["donnerwetter.de",159],["e-hausaufgaben.de",159],["e-mountainbike.com",159],["eatsmarter.de",159],["echo-online.de",159],["ecomento.de",159],["einfachschoen.me",159],["elektrobike-online.com",159],["eltern.de",159],["epochtimes.de",159],["essen-und-trinken.de",159],["express.de",159],["extratipp.com",159],["familie.de",159],["fanfiktion.de",159],["fehmarn24.de",159],["fettspielen.de",159],["fid-gesundheitswissen.de",159],["finanzen.*",159],["finanznachrichten.de",159],["finanztreff.de",159],["finya.de",159],["firmenwissen.de",159],["fitforfun.de",159],["fnp.de",159],["football365.fr",159],["formel1.de",159],["fr.de",159],["frankfurter-wochenblatt.de",159],["freenet.de",159],["fremdwort.de",159],["froheweihnachten.info",159],["frustfrei-lernen.de",159],["fuldaerzeitung.de",159],["funandnews.de",159],["fussballdaten.de",159],["futurezone.de",159],["gala.de",159],["gamepro.de",159],["gamersglobal.de",159],["gamesaktuell.de",159],["gamestar.de",159],["gameswelt.*",159],["gamezone.de",159],["gartendialog.de",159],["gartenlexikon.de",159],["gedichte.ws",159],["geissblog.koeln",159],["gelnhaeuser-tageblatt.de",159],["general-anzeiger-bonn.de",159],["geniale-tricks.com",159],["genialetricks.de",159],["gesund-vital.de",159],["gesundheit.de",159],["gevestor.de",159],["gewinnspiele.tv",159],["giessener-allgemeine.de",159],["giessener-anzeiger.de",159],["gifhorner-rundschau.de",159],["giga.de",159],["gipfelbuch.ch",159],["gmuender-tagespost.de",159],["gruenderlexikon.de",159],["gusto.at",159],["gut-erklaert.de",159],["gutfuerdich.co",159],["hallo-muenchen.de",159],["hamburg.de",159],["hanauer.de",159],["hardwareluxx.de",159],["hartziv.org",159],["harzkurier.de",159],["haus-garten-test.de",159],["hausgarten.net",159],["haustec.de",159],["haz.de",159],["heftig.*",159],["heidelberg24.de",159],["heilpraxisnet.de",159],["heise.de",159],["helmstedter-nachrichten.de",159],["hersfelder-zeitung.de",159],["hftg.co",159],["hifi-forum.de",159],["hna.de",159],["hochheimer-zeitung.de",159],["hoerzu.de",159],["hofheimer-zeitung.de",159],["iban-rechner.de",159],["ikz-online.de",159],["immobilienscout24.de",159],["ingame.de",159],["inside-digital.de",159],["inside-handy.de",159],["investor-verlag.de",159],["jappy.com",159],["jpgames.de",159],["kabeleins.de",159],["kachelmannwetter.com",159],["kamelle.de",159],["kicker.de",159],["kindergeld.org",159],["klettern-magazin.de",159],["klettern.de",159],["kochbar.de",159],["kreis-anzeiger.de",159],["kreisbote.de",159],["kreiszeitung.de",159],["ksta.de",159],["kurierverlag.de",159],["lachainemeteo.com",159],["lampertheimer-zeitung.de",159],["landwirt.com",159],["laut.de",159],["lauterbacher-anzeiger.de",159],["leckerschmecker.me",159],["leinetal24.de",159],["lesfoodies.com",159],["levif.be",159],["lifeline.de",159],["liga3-online.de",159],["likemag.com",159],["linux-community.de",159],["linux-magazin.de",159],["live.vodafone.de",159],["ln-online.de",159],["lokalo24.de",159],["lustaufsleben.at",159],["lustich.de",159],["lvz.de",159],["lz.de",159],["mactechnews.de",159],["macwelt.de",159],["macworld.co.uk",159],["mail.de",159],["main-spitze.de",159],["manager-magazin.de",159],["manga-tube.me",159],["mathebibel.de",159],["mathepower.com",159],["maz-online.de",159],["medisite.fr",159],["mehr-tanken.de",159],["mein-kummerkasten.de",159],["mein-mmo.de",159],["mein-wahres-ich.de",159],["meine-anzeigenzeitung.de",159],["meinestadt.de",159],["menshealth.de",159],["mercato365.com",159],["merkur.de",159],["messen.de",159],["metal-hammer.de",159],["metalflirt.de",159],["meteologix.com",159],["minecraft-serverlist.net",159],["mittelbayerische.de",159],["modhoster.de",159],["moin.de",159],["mopo.de",159],["morgenpost.de",159],["motor-talk.de",159],["motorbasar.de",159],["motorradonline.de",159],["motorsport-total.com",159],["motortests.de",159],["mountainbike-magazin.de",159],["moviejones.de",159],["moviepilot.de",159],["mt.de",159],["mtb-news.de",159],["musiker-board.de",159],["musikexpress.de",159],["musikradar.de",159],["mz-web.de",159],["n-tv.de",159],["naumburger-tageblatt.de",159],["netzwelt.de",159],["neuepresse.de",159],["neueroeffnung.info",159],["news.at",159],["news.de",159],["news38.de",159],["newsbreak24.de",159],["nickles.de",159],["nicknight.de",159],["nl.hardware.info",159],["nn.de",159],["nnn.de",159],["nordbayern.de",159],["notebookchat.com",159],["notebookcheck-ru.com",159],["notebookcheck-tr.com",159],["notebookcheck.*",159],["noz-cdn.de",159],["noz.de",159],["nrz.de",159],["nw.de",159],["nwzonline.de",159],["oberhessische-zeitung.de",159],["och.to",159],["oeffentlicher-dienst.info",159],["onlinekosten.de",159],["onvista.de",159],["op-marburg.de",159],["op-online.de",159],["outdoor-magazin.com",159],["outdoorchannel.de",159],["paradisi.de",159],["pc-magazin.de",159],["pcgames.de",159],["pcgameshardware.de",159],["pcwelt.de",159],["pcworld.es",159],["peiner-nachrichten.de",159],["pferde.de",159],["pietsmiet.de",159],["pixelio.de",159],["pkw-forum.de",159],["playboy.de",159],["playfront.de",159],["pnn.de",159],["pons.com",159],["prignitzer.de",159],["profil.at",159],["promipool.de",159],["promobil.de",159],["prosiebenmaxx.de",159],["psychic.de",[159,181]],["quoka.de",159],["radio.at",159],["radio.de",159],["radio.dk",159],["radio.es",159],["radio.fr",159],["radio.it",159],["radio.net",159],["radio.pl",159],["radio.pt",159],["radio.se",159],["ran.de",159],["readmore.de",159],["rechtslupe.de",159],["recording.de",159],["rennrad-news.de",159],["reuters.com",159],["reviersport.de",159],["rhein-main-presse.de",159],["rheinische-anzeigenblaetter.de",159],["rimondo.com",159],["roadbike.de",159],["roemische-zahlen.net",159],["rollingstone.de",159],["rot-blau.com",159],["rp-online.de",159],["rtl.de",[159,255]],["rtv.de",159],["rugby365.fr",159],["ruhr24.de",159],["rundschau-online.de",159],["runnersworld.de",159],["safelist.eu",159],["salzgitter-zeitung.de",159],["sat1.de",159],["sat1gold.de",159],["schoener-wohnen.de",159],["schwaebische-post.de",159],["schwarzwaelder-bote.de",159],["serienjunkies.de",159],["shz.de",159],["sixx.de",159],["skodacommunity.de",159],["smart-wohnen.net",159],["sn.at",159],["sozialversicherung-kompetent.de",159],["spiegel.de",159],["spielen.de",159],["spieletipps.de",159],["spielfilm.de",159],["sport.de",159],["sport1.de",159],["sport365.fr",159],["sportal.de",159],["spox.com",159],["stern.de",159],["stuttgarter-nachrichten.de",159],["stuttgarter-zeitung.de",159],["sueddeutsche.de",159],["svz.de",159],["szene1.at",159],["szene38.de",159],["t-online.de",159],["tagesspiegel.de",159],["taschenhirn.de",159],["techadvisor.co.uk",159],["techstage.de",159],["tele5.de",159],["teltarif.de",159],["testedich.*",159],["the-voice-of-germany.de",159],["thueringen24.de",159],["tichyseinblick.de",159],["tierfreund.co",159],["tiervermittlung.de",159],["torgranate.de",159],["transfermarkt.*",159],["trend.at",159],["truckscout24.*",159],["tv-media.at",159],["tvdigital.de",159],["tvinfo.de",159],["tvspielfilm.de",159],["tvtoday.de",159],["tvtv.*",159],["tz.de",[159,174]],["unicum.de",159],["unnuetzes.com",159],["unsere-helden.com",159],["unterhalt.net",159],["usinger-anzeiger.de",159],["usp-forum.de",159],["videogameszone.de",159],["vienna.at",159],["vip.de",159],["virtualnights.com",159],["vox.de",159],["wa.de",159],["wallstreet-online.de",[159,162]],["waz.de",159],["weather.us",159],["webfail.com",159],["weihnachten.me",159],["weihnachts-bilder.org",159],["weihnachts-filme.com",159],["welt.de",159],["weltfussball.at",159],["weristdeinfreund.de",159],["werkzeug-news.de",159],["werra-rundschau.de",159],["wetterauer-zeitung.de",159],["wetteronline.*",159],["wieistmeineip.*",159],["wiesbadener-kurier.de",159],["wiesbadener-tagblatt.de",159],["winboard.org",159],["windows-7-forum.net",159],["winfuture.de",[159,170]],["wintotal.de",159],["wlz-online.de",159],["wn.de",159],["wohngeld.org",159],["wolfenbuetteler-zeitung.de",159],["wolfsburger-nachrichten.de",159],["woman.at",159],["womenshealth.de",159],["wormser-zeitung.de",159],["woxikon.de",159],["wp.de",159],["wr.de",159],["wunderweib.de",159],["yachtrevue.at",159],["ze.tt",159],["zeit.de",159],["lecker.de",159],["meineorte.com",160],["osthessen-news.de",160],["techadvisor.com",160],["focus.de",160],["wetter.*",161],["herzporno.net",163],["pornhub-sexfilme.net",163],["pornojenny.net",163],["pornoleon.com",163],["deinesexfilme.com",164],["einfachtitten.com",164],["lesbenhd.com",164],["milffabrik.com",[164,226]],["porn-monkey.com",164],["porndrake.com",164],["pornhubdeutsch.net",164],["pornoaffe.com",164],["pornodavid.com",164],["pornoente.tv",[164,226]],["pornofisch.com",164],["pornofelix.com",164],["pornohammer.com",164],["pornohelm.com",164],["pornoklinge.com",164],["pornotom.com",[164,226]],["pornotommy.com",164],["pornovideos-hd.com",164],["pornozebra.com",[164,226]],["xhamsterdeutsch.xyz",164],["xnxx-sexfilme.com",164],["nu6i-bg-net.com",166],["kiaclub.cz",166],["khsm.io",166],["webcreator-journal.com",166],["msdos-games.com",166],["blocklayer.com",166],["animeshqip.org",166],["weknowconquer.com",166],["giff.cloud",166],["aquarius-horoscopes.com",167],["cancer-horoscopes.com",167],["dubipc.blogspot.com",167],["echoes.gr",167],["engel-horoskop.de",167],["freegames44.com",167],["fuerzasarmadas.eu",167],["gemini-horoscopes.com",167],["jurukunci.net",167],["krebs-horoskop.com",167],["leo-horoscopes.com",167],["maliekrani.com",167],["nklinks.click",167],["ourenseando.es",167],["pisces-horoscopes.com",167],["radio-en-direct.fr",167],["sagittarius-horoscopes.com",167],["scorpio-horoscopes.com",167],["singlehoroskop-loewe.de",167],["skat-karten.de",167],["skorpion-horoskop.com",167],["taurus-horoscopes.com",167],["the1security.com",167],["virgo-horoscopes.com",167],["zonamarela.blogspot.com",167],["yoima.hatenadiary.com",167],["kaystls.site",168],["ftuapps.dev",169],["studydhaba.com",169],["freecourse.tech",169],["victor-mochere.com",169],["papunika.com",169],["mobilanyheter.net",169],["prajwaldesai.com",[169,244]],["carscoops.com",170],["dziennik.pl",170],["eurointegration.com.ua",170],["flatpanelshd.com",170],["footballtransfer.com.ua",170],["footballtransfer.ru",170],["hoyme.jp",170],["issuya.com",170],["itainews.com",170],["iusm.co.kr",170],["logicieleducatif.fr",170],["mynet.com",[170,195]],["onlinegdb.com",170],["picrew.me",170],["pravda.com.ua",170],["reportera.co.kr",170],["sportanalytic.com",170],["sportsrec.com",170],["sportsseoul.com",170],["text-compare.com",170],["tweaksforgeeks.com",170],["wfmz.com",170],["worldhistory.org",170],["palabr.as",170],["motscroises.fr",170],["cruciverba.it",170],["w.grapps.me",170],["gazetaprawna.pl",170],["pressian.com",170],["raenonx.cc",[170,271]],["indiatimes.com",170],["missyusa.com",170],["aikatu.jp",170],["ark-unity.com",170],["cool-style.com.tw",170],["doanhnghiepvn.vn",170],["mykhel.com",170],["automobile-catalog.com",171],["motorbikecatalog.com",171],["maketecheasier.com",171],["mlbpark.donga.com",172],["jjang0u.com",173],["neowin.net",174],["newatlas.com",174],["12thmanrising.com",174],["aroundthefoghorn.com",174],["arrowheadaddict.com",174],["badgerofhonor.com",174],["bamahammer.com",174],["beargoggleson.com",174],["beyondtheflag.com",174],["blackandteal.com",174],["blogredmachine.com",174],["bluemanhoop.com",174],["boltbeat.com",174],["bosoxinjection.com",174],["buffalowdown.com",174],["caneswarning.com",174],["catcrave.com",174],["chopchat.com",174],["climbingtalshill.com",174],["cubbiescrib.com",174],["dailyknicks.com",174],["dairylandexpress.com",174],["dawindycity.com",174],["dawnofthedawg.com",174],["detroitjockcity.com",174],["dodgersway.com",174],["ebonybird.com",174],["fansided.com",174],["gbmwolverine.com",174],["gmenhq.com",174],["hailfloridahail.com",174],["hardwoodhoudini.com",174],["horseshoeheroes.com",174],["housethathankbuilt.com",174],["huskercorner.com",174],["insidetheiggles.com",174],["jaysjournal.com",174],["justblogbaby.com",174],["kckingdom.com",174],["kingjamesgospel.com",174],["lakeshowlife.com",174],["lombardiave.com",174],["motorcitybengals.com",174],["musketfire.com",174],["nflspinzone.com",174],["ninernoise.com",174],["nugglove.com",174],["phinphanatic.com",174],["pistonpowered.com",174],["predominantlyorange.com",174],["ramblinfan.com",174],["redbirdrants.com",174],["reviewingthebrew.com",174],["riggosrag.com",174],["ripcityproject.com",174],["risingapple.com",174],["rumbunter.com",174],["scarletandgame.com",174],["section215.com",174],["sidelionreport.com",174],["slapthesign.com",174],["sodomojo.com",174],["stillcurtain.com",174],["stormininnorman.com",174],["stripehype.com",174],["thatballsouttahere.com",174],["thejetpress.com",174],["thelandryhat.com",174],["thepewterplank.com",174],["thesmokingcuban.com",174],["thevikingage.com",174],["thunderousintentions.com",174],["valleyofthesuns.com",174],["whodatdish.com",174],["yanksgoyard.com",174],["auto-swiat.pl",175],["download.kingtecnologia.com",176],["daemonanime.net",177],["bgmateriali.com",177],["daemon-hentai.com",178],["embedtv.net",179],["tinhte.vn",180],["forumdz.com",181],["zilinak.sk",181],["pdfaid.com",181],["bootdey.com",181],["mail.com",181],["moegirl.org.cn",181],["flix-wave.lol",181],["fmovies0.cc",181],["worthcrete.com",181],["infomatricula.pt",181],["my-code4you.blogspot.com",182],["vrcmods.com",183],["osuskinner.com",183],["osuskins.net",183],["pentruea.com",184],["mchacks.net",185],["why-tech.it",186],["compsmag.com",187],["tapetus.pl",188],["autoroad.cz",189],["brawlhalla.fr",189],["tecnobillo.com",189],["pokemon-project.com",189],["breatheheavy.com",190],["wenxuecity.com",191],["key-hub.eu",192],["fabioambrosi.it",193],["tattle.life",194],["emuenzen.de",194],["terrylove.com",194],["cidade.iol.pt",196],["fantacalcio.it",197],["hentaifreak.org",198],["hypebeast.com",199],["krankheiten-simulieren.de",200],["catholic.com",201],["techinferno.com",202],["ibeconomist.com",203],["bookriot.com",204],["purposegames.com",205],["globo.com",206],["latimes.com",206],["claimrbx.gg",207],["perelki.net",208],["vpn-anbieter-vergleich-test.de",209],["livingincebuforums.com",210],["paperzonevn.com",211],["alltechnerd.com",212],["malaysianwireless.com",213],["erinsakura.com",214],["infofuge.com",214],["freejav.guru",214],["novelmultiverse.com",214],["fritidsmarkedet.dk",215],["maskinbladet.dk",215],["15min.lt",216],["baddiehub.com",217],["mr9soft.com",218],["adult-sex-gamess.com",219],["hentaigames.app",219],["mobilesexgamesx.com",219],["mysexgamer.com",219],["porngameshd.com",219],["sexgamescc.com",219],["xnxx-sex-videos.com",219],["f2movies.to",220],["freeporncave.com",221],["tubsxxx.com",222],["manga18fx.com",223],["freebnbcoin.com",223],["sextvx.com",224],["muztext.com",225],["pornohans.com",226],["nursexfilme.com",226],["pornohirsch.net",226],["xhamster-sexvideos.com",226],["pornoschlange.com",226],["xhamsterdeutsch.*",226],["hdpornos.net",226],["gutesexfilme.com",226],["zona-leros.com",226],["charbelnemnom.com",227],["simplebits.io",228],["online-fix.me",229],["privatemoviez.*",230],["gamersdiscussionhub.com",230],["elahmad.com",231],["owlzo.com",232],["q1003.com",233],["blogpascher.com",234],["testserver.pro",235],["lifestyle.bg",235],["money.bg",235],["news.bg",235],["topsport.bg",235],["webcafe.bg",235],["schoolcheats.net",236],["mgnet.xyz",237],["advertiserandtimes.co.uk",238],["techsolveprac.com",239],["joomlabeginner.com",240],["askpaccosi.com",241],["largescaleforums.com",242],["dubznetwork.com",243],["dongknows.com",245],["traderepublic.community",246],["babia.to",247],["html5.gamemonetize.co",248],["code2care.org",249],["gmx.*",250],["yts-subs.net",251],["dlhd.sx",251],["xxxxsx.com",252],["ngontinh24.com",253],["idevicecentral.com",254],["mangacrab.com",256],["hortonanderfarom.blogspot.com",257],["viefaucet.com",258],["pourcesoir.in",258],["cloud-computing-central.com",259],["afk.guide",260],["businessnamegenerator.com",261],["derstandard.at",262],["derstandard.de",262],["rocketnews24.com",263],["soranews24.com",263],["youpouch.com",263],["gourmetscans.net",264],["ilsole24ore.com",265],["ipacrack.com",266],["infokik.com",267],["porhubvideo.com",269],["webseriessex.com",269],["panuvideo.com",[269,270]],["pornktubes.net",269],["deezer.com",271],["fosslinux.com",272],["shrdsk.me",273],["examword.com",274],["sempreupdate.com.br",274],["tribuna.com",275],["trendsderzukunft.de",276],["gal-dem.com",276],["lostineu.eu",276],["oggitreviso.it",276],["speisekarte.de",276],["mixed.de",276],["lightnovelspot.com",[277,278]],["novelpub.com",[277,278]],["webnovelpub.com",[277,278]],["hwzone.co.il",279],["nammakalvi.com",280],["igay69.com",280],["c2g.at",281],["terafly.me",281],["elamigos-games.com",281],["elamigos-games.net",281],["elamigosgames.org",281],["dktechnicalmate.com",282],["recipahi.com",282],["vpntester.org",283],["japscan.lol",284],["digitask.ru",285],["tempumail.com",286],["sexvideos.host",287],["camcaps.*",288],["10alert.com",289],["cryptstream.de",290],["nydus.org",290],["techhelpbd.com",291],["fapdrop.com",292],["cellmapper.net",293],["hdrez.com",294],["youwatch-serie.com",294],["russland.jetzt",294],["printablecreative.com",295],["peachprintable.com",295],["comohoy.com",296],["leak.sx",296],["paste.bin.sx",296],["pornleaks.in",296],["merlininkazani.com",296],["j91.asia",297],["jeniusplay.com",298],["indianyug.com",299],["rgb.vn",299],["needrom.com",300],["criptologico.com",301],["megadrive-emulator.com",302],["eromanga-show.com",303],["hentai-one.com",303],["hentaipaw.com",303],["10minuteemails.com",304],["luxusmail.org",304],["w3cub.com",305],["bangpremier.com",306],["nyaa.iss.ink",307],["drivebot.*",308],["thenextplanet1.*",309],["tnp98.xyz",309],["techedubyte.com",310],["poplinks.*",311],["tickzoo.tv",312],["oploverz.*",312],["memedroid.com",313],["karaoketexty.cz",314],["filmizlehdfilm.com",315],["filmizletv.*",315],["fullfilmizle.cc",315],["gofilmizle.net",315],["resortcams.com",316],["cheatography.com",316],["sonixgvn.net",317],["autoscout24.*",318],["mjakmama24.pl",319],["cheatermad.com",320],["work.ink",321],["ville-ideale.fr",322],["brainly.*",323],["eodev.com",323],["xfreehd.com",325],["freethesaurus.com",326],["thefreedictionary.com",326],["fm-arena.com",327],["tradersunion.com",328],["tandess.com",329],["allosurf.net",329],["spontacts.com",330],["dankmemer.lol",331],["getexploits.com",332],["fplstatistics.com",333],["breitbart.com",334],["salidzini.lv",335],["cryptorank.io",[336,337]],["qqwebplay.xyz",338],["molbiotools.com",339],["vods.tv",340],["18xxx.xyz",[341,375]],["raidrush.net",342],["xnxxcom.xyz",343],["videzz.net",344],["spambox.xyz",345],["dreamdth.com",346],["freemodsapp.in",346],["onlytech.com",346],["en-thunderscans.com",347],["infinityscans.xyz",348],["infinityscans.net",348],["infinityscans.org",348],["iqksisgw.xyz",349],["caroloportunidades.com.br",350],["coempregos.com.br",350],["foodiesgallery.com",350],["vikatan.com",351],["camhub.world",352],["mma-core.*",353],["pouvideo.*",354],["povvideo.*",354],["povw1deo.*",354],["povwideo.*",354],["powv1deo.*",354],["powvibeo.*",354],["powvideo.*",354],["powvldeo.*",354],["op.gg",355],["teracourses.com",356],["servustv.com",[357,358]],["freevipservers.net",359],["streambtw.com",360],["qrcodemonkey.net",361],["streamup.ws",362],["tv-films.co.uk",363],["cool--web-de.translate.goog",[364,365]],["gps--cache-de.translate.goog",[364,365]],["web--spiele-de.translate.goog",[364,365]],["fun--seiten-de.translate.goog",[364,365]],["photo--alben-de.translate.goog",[364,365]],["wetter--vorhersage-de.translate.goog",[364,365]],["coolsoftware-de.translate.goog",[364,365]],["kryptografie-de.translate.goog",[364,365]],["cool--domains-de.translate.goog",[364,365]],["net--tours-de.translate.goog",[364,365]],["such--maschine-de.translate.goog",[364,365]],["qul-de.translate.goog",[364,365]],["mailtool-de.translate.goog",[364,365]],["c--ix-de.translate.goog",[364,365]],["softwareengineer-de.translate.goog",[364,365]],["net--tools-de.translate.goog",[364,365]],["hilfen-de.translate.goog",[364,365]],["45er-de.translate.goog",[364,365]],["cooldns-de.translate.goog",[364,365]],["hardware--entwicklung-de.translate.goog",[364,365]],["bgsi.gg",366],["kio.ac",367],["friv.com",368],["tdtnews.com",369],["santafenewmexican.com",369],["sextb.*>>",370],["nepalieducate.com",371],["idlixku.com",372],["freegames.com",373],["levante-emv.com",374],["mallorcazeitung.es",374],["regio7.cat",374],["superdeporte.es",374],["laopiniondezamora.es",374],["laopiniondemurcia.es",374],["laopiniondemalaga.es",374],["laopinioncoruna.es",374],["lacronicabadajoz.com",374],["informacion.es",374],["farodevigo.es",374],["emporda.info",374],["elperiodicomediterraneo.com",374],["elperiodicoextremadura.com",374],["epe.es",374],["elperiodicodearagon.com",374],["eldia.es",374],["elcorreoweb.es",374],["diariodemallorca.es",374],["diariodeibiza.es",374],["diariocordoba.com",374],["diaridegirona.cat",374],["elperiodico.com",374],["laprovincia.es",374],["4tube.live",375],["nxxn.live",375],["redtub.live",375],["olympustaff.com",376]]);
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
