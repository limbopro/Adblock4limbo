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

// ruleset: annoyances-overlays

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
const argsList = [["show-login-layer-article"],["||!!"],["adsbygoogle"],["AdBlocker"],["pro-modal"],["googlesyndication"],["ThriveGlobal"],["check","100"],["ads","2000"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["#advert-tracker","500"],["()","3000"],["()","1000"],["w3ad"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["faq/whitelist"],["modal"],["offsetHeight"],["adblock"],["body"],["null"],["appendMessage"],["()","5000"],["vSiteRefresher"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"],["adsbygoogle","2000"],["adb-enabled"],[".LoginSection"],["detect_modal"],["(!0)","8000"],["ad_blocker_detector_modal"],["clientHeight"]];
const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["animekai.*",1],["anigo.to",1],["sflix.fi",1],["yflix.to",1],["tides.net",2],["9xbuddy.com",2],["zerogpt.net",2],["yuuki.me",2],["lazyadmin.nl",3],["watson.de",3],["watson.ch",3],["pokeos.com",4],["flagle.io",5],["99bitcoins.com",6],["hqq.tv",7],["columbiaspectator.com",8],["mediafire.com",9],["webcodegeeks.com",10],["books-world.net",11],["pc3mag.com",11],["opedge.com",12],["bronze-bravery.com",12],["ultimate-bravery.net",12],["htmlreference.io",12],["short-story.net",12],["sbenny.com",12],["fabricjs.com",13],["bucketpages.com",14],["steptalk.org",15],["boerse-express.com",16],["numberempire.com",17],["howjsay.com",18],["cagesideseats.com",18],["vpnmentor.com",19],["tomshw.it",19],["wizcase.com",19],["portableapps.com",20],["reviewmeta.com",20],["heroesneverdie.com",21],["curbed.com",21],["eater.com",21],["funnyordie.com",21],["mmafighting.com",21],["mmamania.com",21],["polygon.com",21],["racked.com",21],["riftherald.com",21],["sbnation.com",21],["theverge.com",21],["vox.com",21],["twinkietown.com",21],["addons.opera.com",22],["ruwix.com",23],["zulily.com",24],["rp5.by",25],["turbolab.it",26],["lookmovie.ag",27],["lifo.gr",28],["anisearch.de",29],["anisearch.com",29],["xe.gr",30],["liverpool.no",31],["fotor.com",31],["playbill.com",31],["xxxonlinegames.com",31],["olarila.com",31],["fairyabc.com",32],["asheville.com",32],["ajanstv.com.tr",32],["minecraftforge.net",33],["theherald-news.com",34],["libgen.*",35],["keybr.com",36],["gamebanana.com",37],["searchenginejournal.com",38],["mocospace.com",39],["karamellstore.com.br",40],["mdlinx.com",41],["infoplease.com",41],["htforum.net",41],["underconsideration.com",42],["foreignaffairs.com",43],["dxmaps.com",44],["photoshop-online.biz",45],["ukworkshop.co.uk",45],["endorfinese.com.br",45],["segnidalcielo.it",45],["deezer.com",46],["affiliate.fc2.com",47],["4x4earth.com",48],["diffchecker.com",49],["malekal.com",50],["audiostereo.pl",50],["guides4gamers.com",51],["polyflore.net",52],["icy-veins.com",53],["cpuid.com",54],["webcamtaxi.com",55],["dreamstime.com",56],["megapixl.com",57],["cissamagazine.com.br",58],["utour.me",59],["fosspost.org",60],["123movies.*",61],["theepochtimes.com",62],["xtv.cz",63],["drawasaurus.org",64],["katholisches.info",65],["hollywoodmask.com",65],["streaminglearningcenter.com",66],["prepostseo.com",67],["tiermaker.com",68],["hqq.to",69],["zefoy.com",69],["tuborstb.co",69],["emturbovid.com",69],["pawastreams.pro",69],["shopomo.co.uk",70],["techus.website",70],["criticalthinking.org",71],["zwei-euro.com",72],["elitepvpers.com",73],["geeksforgeeks.org",[74,75]],["fnbrjp.com",76],["moviepl.xyz",77],["leekduck.com",78],["aberdeennews.com",79],["alamogordonews.com",79],["amarillo.com",79],["amestrib.com",79],["app.com",79],["argusleader.com",79],["augustachronicle.com",79],["azcentral.com",79],["battlecreekenquirer.com",79],["beaconjournal.com",79],["blueridgenow.com",79],["buckscountycouriertimes.com",79],["bucyrustelegraphforum.com",79],["burlingtoncountytimes.com",79],["burlingtonfreepress.com",79],["caller.com",79],["cantondailyledger.com",79],["cantonrep.com",79],["capecodtimes.com",79],["cheboygannews.com",79],["chieftain.com",79],["chillicothegazette.com",79],["cincinnati.com",79],["citizen-times.com",79],["cjonline.com",79],["clarionledger.com",79],["coloradoan.com",79],["columbiadailyherald.com",79],["columbiatribune.com",79],["commercialappeal.com",79],["coshoctontribune.com",79],["courier-journal.com",79],["courier-tribune.com",79],["courierpostonline.com",79],["courierpress.com",79],["currentargus.com",79],["daily-jeff.com",79],["daily-times.com",79],["dailyamerican.com",79],["dailycomet.com",79],["dailycommercial.com",79],["dailyrecord.com",79],["dailyworld.com",79],["delawareonline.com",79],["delmarvanow.com",79],["demingheadlight.com",79],["democratandchronicle.com",79],["desertsun.com",79],["desmoinesregister.com",79],["devilslakejournal.com",79],["dispatch.com",79],["dnj.com",79],["ellwoodcityledger.com",79],["elpasotimes.com",79],["enterprisenews.com",79],["eveningsun.com",79],["eveningtribune.com",79],["examiner-enterprise.com",79],["fayobserver.com",79],["fdlreporter.com",79],["floridatoday.com",79],["fosters.com",79],["freep.com",79],["gadsdentimes.com",79],["gainesville.com",79],["galesburg.com",79],["gastongazette.com",79],["goerie.com",79],["gosanangelo.com",79],["goupstate.com",79],["greatfallstribune.com",79],["greenbaypressgazette.com",79],["greenvilleonline.com",79],["hattiesburgamerican.com",79],["heraldmailmedia.com",79],["heraldnews.com",79],["heraldtribune.com",79],["hillsdale.net",79],["hollandsentinel.com",79],["hoosiertimes.com",79],["houmatoday.com",79],["htrnews.com",79],["hutchnews.com",79],["indeonline.com",79],["independentmail.com",79],["indystar.com",79],["ithacajournal.com",79],["jacksonsun.com",79],["jacksonville.com",79],["jconline.com",79],["jdnews.com",79],["journalstandard.com",79],["jsonline.com",79],["kinston.com",79],["kitsapsun.com",79],["knoxnews.com",79],["lancastereaglegazette.com",79],["lansingstatejournal.com",79],["lcsun-news.com",79],["ldnews.com",79],["lenconnect.com",79],["lincolncourier.com",79],["livingstondaily.com",79],["lohud.com",79],["lubbockonline.com",79],["mansfieldnewsjournal.com",79],["marionstar.com",79],["marshfieldnewsherald.com",79],["mcdonoughvoice.com",79],["metrowestdailynews.com",79],["milforddailynews.com",79],["monroenews.com",79],["montgomeryadvertiser.com",79],["mpnnow.com",79],["mycentraljersey.com",79],["naplesnews.com",79],["newarkadvocate.com",79],["newbernsj.com",79],["newportri.com",79],["news-journalonline.com",79],["news-leader.com",79],["news-press.com",79],["newschief.com",79],["newsherald.com",79],["newsleader.com",79],["njherald.com",79],["northjersey.com",79],["norwichbulletin.com",79],["nwfdailynews.com",79],["oakridger.com",79],["ocala.com",79],["oklahoman.com",79],["onlineathens.com",79],["pal-item.com",79],["palmbeachdailynews.com",79],["palmbeachpost.com",79],["patriotledger.com",79],["pekintimes.com",79],["petoskeynews.com",79],["pjstar.com",79],["pnj.com",79],["poconorecord.com",79],["pontiacdailyleader.com",79],["portclintonnewsherald.com",79],["postcrescent.com",79],["poughkeepsiejournal.com",79],["press-citizen.com",79],["pressconnects.com",79],["progress-index.com",79],["providencejournal.com",79],["publicopiniononline.com",79],["record-courier.com",79],["recordnet.com",79],["recordonline.com",79],["redding.com",79],["registerguard.com",79],["reporter-times.com",79],["reporternews.com",79],["rgj.com",79],["rrstar.com",79],["ruidosonews.com",79],["salina.com",79],["savannahnow.com",79],["scsun-news.com",79],["sctimes.com",79],["seacoastonline.com",79],["sheboyganpress.com",79],["shelbystar.com",79],["shreveporttimes.com",79],["sj-r.com",79],["sooeveningnews.com",79],["southbendtribune.com",79],["southcoasttoday.com",79],["starcourier.com",79],["stargazette.com",79],["starnewsonline.com",79],["statesman.com",79],["statesmanjournal.com",79],["staugustine.com",79],["stevenspointjournal.com",79],["sturgisjournal.com",79],["swtimes.com",79],["tallahassee.com",79],["tauntongazette.com",79],["tcpalm.com",79],["telegram.com",79],["tennessean.com",79],["the-daily-record.com",79],["the-dispatch.com",79],["the-leader.com",79],["the-review.com",79],["theadvertiser.com",79],["thecalifornian.com",79],["thedailyjournal.com",79],["thedailyreporter.com",79],["thegardnernews.com",79],["thegleaner.com",79],["thehawkeye.com",79],["theintell.com",79],["theleafchronicle.com",79],["theledger.com",79],["thenews-messenger.com",79],["thenewsstar.com",79],["thenorthwestern.com",79],["thepublicopinion.com",79],["therecordherald.com",79],["thespectrum.com",79],["thestarpress.com",79],["thetimesherald.com",79],["thetimesnews.com",79],["thetowntalk.com",79],["times-gazette.com",79],["timesonline.com",79],["timesrecordnews.com",79],["timesreporter.com",79],["timestelegram.com",79],["tmnews.com",79],["tricountyindependent.com",79],["tuscaloosanews.com",79],["usatoday.com",79],["uticaod.com",79],["vcstar.com",79],["visaliatimesdelta.com",79],["vvdailypress.com",79],["wausaudailyherald.com",79],["wisconsinrapidstribune.com",79],["ydr.com",79],["zanesvilletimesrecorder.com",79],["craftpip.github.io",80],["pixwox.com",81],["sflix.to",82],["thizissam.in",83],["ikorektor.pl",84],["telenovelas-turcas.com.es",85],["solarmovie.*",85],["phimfit.com",85],["goldenstateofmind.com",86],["neoseeker.com",87],["tumblr.com",88],["aniwave.*",89],["anix.*",89],["flixhq.*",89],["flixrave.to",89],["hdtoday.so",89],["vidplay.site",89],["vid2faf.site",89],["galinos.gr",90],["bluesnews.com",91],["oceanplay.org",92],["bembed.net",92],["embedv.net",92],["listeamed.net",92],["v6embed.xyz",92],["vembed.*",92],["vid-guard.com",92],["notificationsounds.com",93],["tweaking4all.com",93],["zonatmo.com",94],["openanesthesia.org",95],["manhwa18.cc",96],["filiser.eu",97],["wishflix.cc",97],["zalukaj.io",97],["qrcode.best",98],["pogdesign.co.uk",99]]);
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
