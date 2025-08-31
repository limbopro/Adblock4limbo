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
const argsList = [["show-login-layer-article"],["||!!"],["adsbygoogle"],["AdBlocker"],["ThriveGlobal"],["check","100"],["ads","2000"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["#advert-tracker","500"],["()","3000"],["()","1000"],["w3ad"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["faq/whitelist"],["modal"],["offsetHeight"],["adblock"],["body"],["null"],["appendMessage"],["()","5000"],["vSiteRefresher"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"],["adsbygoogle","2000"],["adb-enabled"],[".LoginSection"],["detect_modal"],["(!0)","8000"],["ad_blocker_detector_modal"],["clientHeight"]];
const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["animekai.*",1],["anigo.to",1],["yflix.to",1],["tides.net",2],["9xbuddy.com",2],["zerogpt.net",2],["yuuki.me",2],["lazyadmin.nl",3],["watson.de",3],["watson.ch",3],["99bitcoins.com",4],["hqq.tv",5],["columbiaspectator.com",6],["mediafire.com",7],["webcodegeeks.com",8],["books-world.net",9],["pc3mag.com",9],["opedge.com",10],["bronze-bravery.com",10],["ultimate-bravery.net",10],["htmlreference.io",10],["short-story.net",10],["sbenny.com",10],["fabricjs.com",11],["bucketpages.com",12],["steptalk.org",13],["boerse-express.com",14],["numberempire.com",15],["howjsay.com",16],["cagesideseats.com",16],["vpnmentor.com",17],["tomshw.it",17],["wizcase.com",17],["portableapps.com",18],["reviewmeta.com",18],["heroesneverdie.com",19],["curbed.com",19],["eater.com",19],["funnyordie.com",19],["mmafighting.com",19],["mmamania.com",19],["polygon.com",19],["racked.com",19],["riftherald.com",19],["sbnation.com",19],["theverge.com",19],["vox.com",19],["twinkietown.com",19],["addons.opera.com",20],["ruwix.com",21],["zulily.com",22],["rp5.by",23],["turbolab.it",24],["lookmovie.ag",25],["lifo.gr",26],["anisearch.de",27],["anisearch.com",27],["xe.gr",28],["liverpool.no",29],["fotor.com",29],["playbill.com",29],["xxxonlinegames.com",29],["olarila.com",29],["fairyabc.com",30],["asheville.com",30],["ajanstv.com.tr",30],["minecraftforge.net",31],["theherald-news.com",32],["libgen.*",33],["keybr.com",34],["gamebanana.com",35],["searchenginejournal.com",36],["mocospace.com",37],["karamellstore.com.br",38],["mdlinx.com",39],["infoplease.com",39],["htforum.net",39],["underconsideration.com",40],["foreignaffairs.com",41],["dxmaps.com",42],["photoshop-online.biz",43],["ukworkshop.co.uk",43],["endorfinese.com.br",43],["segnidalcielo.it",43],["deezer.com",44],["handball-world.news",45],["mobiflip.de",45],["titanic-magazin.de",45],["mimikama.org",45],["langweiledich.net",45],["der-postillon.com",45],["perlentaucher.de",45],["lwlies.com",45],["serieslyawesome.tv",45],["critic.de",45],["mediotejo.net",45],["nahrungsmittel-intoleranz.com",45],["madeinbocholt.de",45],["goodnews-magazin.de",45],["wallauonline.de",45],["cleanthinking.de",45],["affiliate.fc2.com",46],["4x4earth.com",47],["diffchecker.com",48],["malekal.com",49],["audiostereo.pl",49],["guides4gamers.com",50],["polyflore.net",51],["icy-veins.com",52],["cpuid.com",53],["webcamtaxi.com",54],["dreamstime.com",55],["megapixl.com",56],["cissamagazine.com.br",57],["utour.me",58],["fosspost.org",59],["123movies.*",60],["theepochtimes.com",61],["xtv.cz",62],["drawasaurus.org",63],["katholisches.info",64],["hollywoodmask.com",64],["streaminglearningcenter.com",65],["prepostseo.com",66],["tiermaker.com",67],["hqq.to",68],["zefoy.com",68],["tuborstb.co",68],["emturbovid.com",68],["pawastreams.pro",68],["shopomo.co.uk",69],["techus.website",69],["criticalthinking.org",70],["zwei-euro.com",71],["elitepvpers.com",72],["geeksforgeeks.org",[73,74]],["fnbrjp.com",75],["moviepl.xyz",76],["leekduck.com",77],["aberdeennews.com",78],["alamogordonews.com",78],["amarillo.com",78],["amestrib.com",78],["app.com",78],["argusleader.com",78],["augustachronicle.com",78],["azcentral.com",78],["battlecreekenquirer.com",78],["beaconjournal.com",78],["blueridgenow.com",78],["buckscountycouriertimes.com",78],["bucyrustelegraphforum.com",78],["burlingtoncountytimes.com",78],["burlingtonfreepress.com",78],["caller.com",78],["cantondailyledger.com",78],["cantonrep.com",78],["capecodtimes.com",78],["cheboygannews.com",78],["chieftain.com",78],["chillicothegazette.com",78],["cincinnati.com",78],["citizen-times.com",78],["cjonline.com",78],["clarionledger.com",78],["coloradoan.com",78],["columbiadailyherald.com",78],["columbiatribune.com",78],["commercialappeal.com",78],["coshoctontribune.com",78],["courier-journal.com",78],["courier-tribune.com",78],["courierpostonline.com",78],["courierpress.com",78],["currentargus.com",78],["daily-jeff.com",78],["daily-times.com",78],["dailyamerican.com",78],["dailycomet.com",78],["dailycommercial.com",78],["dailyrecord.com",78],["dailyworld.com",78],["delawareonline.com",78],["delmarvanow.com",78],["demingheadlight.com",78],["democratandchronicle.com",78],["desertsun.com",78],["desmoinesregister.com",78],["devilslakejournal.com",78],["dispatch.com",78],["dnj.com",78],["ellwoodcityledger.com",78],["elpasotimes.com",78],["enterprisenews.com",78],["eveningsun.com",78],["eveningtribune.com",78],["examiner-enterprise.com",78],["fayobserver.com",78],["fdlreporter.com",78],["floridatoday.com",78],["fosters.com",78],["freep.com",78],["gadsdentimes.com",78],["gainesville.com",78],["galesburg.com",78],["gastongazette.com",78],["goerie.com",78],["gosanangelo.com",78],["goupstate.com",78],["greatfallstribune.com",78],["greenbaypressgazette.com",78],["greenvilleonline.com",78],["hattiesburgamerican.com",78],["heraldmailmedia.com",78],["heraldnews.com",78],["heraldtribune.com",78],["hillsdale.net",78],["hollandsentinel.com",78],["hoosiertimes.com",78],["houmatoday.com",78],["htrnews.com",78],["hutchnews.com",78],["indeonline.com",78],["independentmail.com",78],["indystar.com",78],["ithacajournal.com",78],["jacksonsun.com",78],["jacksonville.com",78],["jconline.com",78],["jdnews.com",78],["journalstandard.com",78],["jsonline.com",78],["kinston.com",78],["kitsapsun.com",78],["knoxnews.com",78],["lancastereaglegazette.com",78],["lansingstatejournal.com",78],["lcsun-news.com",78],["ldnews.com",78],["lenconnect.com",78],["lincolncourier.com",78],["livingstondaily.com",78],["lohud.com",78],["lubbockonline.com",78],["mansfieldnewsjournal.com",78],["marionstar.com",78],["marshfieldnewsherald.com",78],["mcdonoughvoice.com",78],["metrowestdailynews.com",78],["milforddailynews.com",78],["monroenews.com",78],["montgomeryadvertiser.com",78],["mpnnow.com",78],["mycentraljersey.com",78],["naplesnews.com",78],["newarkadvocate.com",78],["newbernsj.com",78],["newportri.com",78],["news-journalonline.com",78],["news-leader.com",78],["news-press.com",78],["newschief.com",78],["newsherald.com",78],["newsleader.com",78],["njherald.com",78],["northjersey.com",78],["norwichbulletin.com",78],["nwfdailynews.com",78],["oakridger.com",78],["ocala.com",78],["oklahoman.com",78],["onlineathens.com",78],["pal-item.com",78],["palmbeachdailynews.com",78],["palmbeachpost.com",78],["patriotledger.com",78],["pekintimes.com",78],["petoskeynews.com",78],["pjstar.com",78],["pnj.com",78],["poconorecord.com",78],["pontiacdailyleader.com",78],["portclintonnewsherald.com",78],["postcrescent.com",78],["poughkeepsiejournal.com",78],["press-citizen.com",78],["pressconnects.com",78],["progress-index.com",78],["providencejournal.com",78],["publicopiniononline.com",78],["record-courier.com",78],["recordnet.com",78],["recordonline.com",78],["redding.com",78],["registerguard.com",78],["reporter-times.com",78],["reporternews.com",78],["rgj.com",78],["rrstar.com",78],["ruidosonews.com",78],["salina.com",78],["savannahnow.com",78],["scsun-news.com",78],["sctimes.com",78],["seacoastonline.com",78],["sheboyganpress.com",78],["shelbystar.com",78],["shreveporttimes.com",78],["sj-r.com",78],["sooeveningnews.com",78],["southbendtribune.com",78],["southcoasttoday.com",78],["starcourier.com",78],["stargazette.com",78],["starnewsonline.com",78],["statesman.com",78],["statesmanjournal.com",78],["staugustine.com",78],["stevenspointjournal.com",78],["sturgisjournal.com",78],["swtimes.com",78],["tallahassee.com",78],["tauntongazette.com",78],["tcpalm.com",78],["telegram.com",78],["tennessean.com",78],["the-daily-record.com",78],["the-dispatch.com",78],["the-leader.com",78],["the-review.com",78],["theadvertiser.com",78],["thecalifornian.com",78],["thedailyjournal.com",78],["thedailyreporter.com",78],["thegardnernews.com",78],["thegleaner.com",78],["thehawkeye.com",78],["theintell.com",78],["theleafchronicle.com",78],["theledger.com",78],["thenews-messenger.com",78],["thenewsstar.com",78],["thenorthwestern.com",78],["thepublicopinion.com",78],["therecordherald.com",78],["thespectrum.com",78],["thestarpress.com",78],["thetimesherald.com",78],["thetimesnews.com",78],["thetowntalk.com",78],["times-gazette.com",78],["timesonline.com",78],["timesrecordnews.com",78],["timesreporter.com",78],["timestelegram.com",78],["tmnews.com",78],["tricountyindependent.com",78],["tuscaloosanews.com",78],["usatoday.com",78],["uticaod.com",78],["vcstar.com",78],["visaliatimesdelta.com",78],["vvdailypress.com",78],["wausaudailyherald.com",78],["wisconsinrapidstribune.com",78],["ydr.com",78],["zanesvilletimesrecorder.com",78],["craftpip.github.io",79],["pixwox.com",80],["sflix.to",81],["thizissam.in",82],["ikorektor.pl",83],["telenovelas-turcas.com.es",84],["solarmovie.*",84],["phimfit.com",84],["goldenstateofmind.com",85],["neoseeker.com",86],["tumblr.com",87],["aniwave.*",88],["anix.*",88],["flixhq.*",88],["flixrave.to",88],["hdtoday.so",88],["vidplay.site",88],["vid2faf.site",88],["galinos.gr",89],["bluesnews.com",90],["oceanplay.org",91],["bembed.net",91],["embedv.net",91],["listeamed.net",91],["v6embed.xyz",91],["vembed.*",91],["vid-guard.com",91],["notificationsounds.com",92],["tweaking4all.com",92],["zonatmo.com",93],["openanesthesia.org",94],["manhwa18.cc",95],["filiser.eu",96],["wishflix.cc",96],["zalukaj.io",96],["qrcode.best",97],["pogdesign.co.uk",98]]);
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
