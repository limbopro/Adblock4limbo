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
const argsList = [["show-login-layer-article"],["||!!"],["adsbygoogle"],["AdBlocker"],["ThriveGlobal"],["check","100"],["ads","2000"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["#advert-tracker","500"],["()","3000"],["()","1000"],["w3ad"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["faq/whitelist"],["modal"],["offsetHeight"],["adblock"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"],["adsbygoogle","2000"],["adb-enabled"],[".LoginSection"],["detect_modal"],["(!0)","8000"]];
const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["animekai.*",1],["anigo.to",1],["yflix.to",1],["tides.net",2],["9xbuddy.com",2],["zerogpt.net",2],["yuuki.me",2],["lazyadmin.nl",3],["watson.de",3],["watson.ch",3],["99bitcoins.com",4],["hqq.tv",5],["columbiaspectator.com",6],["mediafire.com",7],["webcodegeeks.com",8],["books-world.net",9],["pc3mag.com",9],["opedge.com",10],["bronze-bravery.com",10],["ultimate-bravery.net",10],["htmlreference.io",10],["short-story.net",10],["sbenny.com",10],["fabricjs.com",11],["bucketpages.com",12],["steptalk.org",13],["boerse-express.com",14],["numberempire.com",15],["howjsay.com",16],["cagesideseats.com",16],["vpnmentor.com",17],["tomshw.it",17],["wizcase.com",17],["portableapps.com",18],["reviewmeta.com",18],["heroesneverdie.com",19],["curbed.com",19],["eater.com",19],["funnyordie.com",19],["mmafighting.com",19],["mmamania.com",19],["polygon.com",19],["racked.com",19],["riftherald.com",19],["sbnation.com",19],["theverge.com",19],["vox.com",19],["twinkietown.com",19],["addons.opera.com",20],["ruwix.com",21],["zulily.com",22],["rp5.by",23],["turbolab.it",24],["lookmovie.ag",25],["lifo.gr",26],["anisearch.de",27],["anisearch.com",27],["xe.gr",28],["liverpool.no",29],["fotor.com",29],["playbill.com",29],["xxxonlinegames.com",29],["olarila.com",29],["fairyabc.com",30],["asheville.com",30],["ajanstv.com.tr",30],["minecraftforge.net",31],["theherald-news.com",32],["libgen.*",33],["keybr.com",34],["searchenginejournal.com",35],["mocospace.com",36],["karamellstore.com.br",37],["mdlinx.com",38],["infoplease.com",38],["htforum.net",38],["underconsideration.com",39],["foreignaffairs.com",40],["dxmaps.com",41],["photoshop-online.biz",42],["ukworkshop.co.uk",42],["endorfinese.com.br",42],["segnidalcielo.it",42],["deezer.com",43],["handball-world.news",44],["mobiflip.de",44],["titanic-magazin.de",44],["mimikama.org",44],["langweiledich.net",44],["der-postillon.com",44],["perlentaucher.de",44],["lwlies.com",44],["serieslyawesome.tv",44],["critic.de",44],["mediotejo.net",44],["nahrungsmittel-intoleranz.com",44],["madeinbocholt.de",44],["goodnews-magazin.de",44],["wallauonline.de",44],["cleanthinking.de",44],["affiliate.fc2.com",45],["4x4earth.com",46],["diffchecker.com",47],["malekal.com",48],["audiostereo.pl",48],["guides4gamers.com",49],["polyflore.net",50],["icy-veins.com",51],["cpuid.com",52],["webcamtaxi.com",53],["dreamstime.com",54],["megapixl.com",55],["cissamagazine.com.br",56],["utour.me",57],["fosspost.org",58],["123movies.*",59],["theepochtimes.com",60],["xtv.cz",61],["drawasaurus.org",62],["katholisches.info",63],["hollywoodmask.com",63],["streaminglearningcenter.com",64],["prepostseo.com",65],["tiermaker.com",66],["hqq.to",67],["zefoy.com",67],["tuborstb.co",67],["emturbovid.com",67],["pawastreams.pro",67],["shopomo.co.uk",68],["techus.website",68],["criticalthinking.org",69],["zwei-euro.com",70],["elitepvpers.com",71],["geeksforgeeks.org",[72,73]],["fnbrjp.com",74],["moviepl.xyz",75],["leekduck.com",76],["aberdeennews.com",77],["alamogordonews.com",77],["amarillo.com",77],["amestrib.com",77],["app.com",77],["argusleader.com",77],["augustachronicle.com",77],["azcentral.com",77],["battlecreekenquirer.com",77],["beaconjournal.com",77],["blueridgenow.com",77],["buckscountycouriertimes.com",77],["bucyrustelegraphforum.com",77],["burlingtoncountytimes.com",77],["burlingtonfreepress.com",77],["caller.com",77],["cantondailyledger.com",77],["cantonrep.com",77],["capecodtimes.com",77],["cheboygannews.com",77],["chieftain.com",77],["chillicothegazette.com",77],["cincinnati.com",77],["citizen-times.com",77],["cjonline.com",77],["clarionledger.com",77],["coloradoan.com",77],["columbiadailyherald.com",77],["columbiatribune.com",77],["commercialappeal.com",77],["coshoctontribune.com",77],["courier-journal.com",77],["courier-tribune.com",77],["courierpostonline.com",77],["courierpress.com",77],["currentargus.com",77],["daily-jeff.com",77],["daily-times.com",77],["dailyamerican.com",77],["dailycomet.com",77],["dailycommercial.com",77],["dailyrecord.com",77],["dailyworld.com",77],["delawareonline.com",77],["delmarvanow.com",77],["demingheadlight.com",77],["democratandchronicle.com",77],["desertsun.com",77],["desmoinesregister.com",77],["devilslakejournal.com",77],["dispatch.com",77],["dnj.com",77],["ellwoodcityledger.com",77],["elpasotimes.com",77],["enterprisenews.com",77],["eveningsun.com",77],["eveningtribune.com",77],["examiner-enterprise.com",77],["fayobserver.com",77],["fdlreporter.com",77],["floridatoday.com",77],["fosters.com",77],["freep.com",77],["gadsdentimes.com",77],["gainesville.com",77],["galesburg.com",77],["gastongazette.com",77],["goerie.com",77],["gosanangelo.com",77],["goupstate.com",77],["greatfallstribune.com",77],["greenbaypressgazette.com",77],["greenvilleonline.com",77],["hattiesburgamerican.com",77],["heraldmailmedia.com",77],["heraldnews.com",77],["heraldtribune.com",77],["hillsdale.net",77],["hollandsentinel.com",77],["hoosiertimes.com",77],["houmatoday.com",77],["htrnews.com",77],["hutchnews.com",77],["indeonline.com",77],["independentmail.com",77],["indystar.com",77],["ithacajournal.com",77],["jacksonsun.com",77],["jacksonville.com",77],["jconline.com",77],["jdnews.com",77],["journalstandard.com",77],["jsonline.com",77],["kinston.com",77],["kitsapsun.com",77],["knoxnews.com",77],["lancastereaglegazette.com",77],["lansingstatejournal.com",77],["lcsun-news.com",77],["ldnews.com",77],["lenconnect.com",77],["lincolncourier.com",77],["livingstondaily.com",77],["lohud.com",77],["lubbockonline.com",77],["mansfieldnewsjournal.com",77],["marionstar.com",77],["marshfieldnewsherald.com",77],["mcdonoughvoice.com",77],["metrowestdailynews.com",77],["milforddailynews.com",77],["monroenews.com",77],["montgomeryadvertiser.com",77],["mpnnow.com",77],["mycentraljersey.com",77],["naplesnews.com",77],["newarkadvocate.com",77],["newbernsj.com",77],["newportri.com",77],["news-journalonline.com",77],["news-leader.com",77],["news-press.com",77],["newschief.com",77],["newsherald.com",77],["newsleader.com",77],["njherald.com",77],["northjersey.com",77],["norwichbulletin.com",77],["nwfdailynews.com",77],["oakridger.com",77],["ocala.com",77],["oklahoman.com",77],["onlineathens.com",77],["pal-item.com",77],["palmbeachdailynews.com",77],["palmbeachpost.com",77],["patriotledger.com",77],["pekintimes.com",77],["petoskeynews.com",77],["pjstar.com",77],["pnj.com",77],["poconorecord.com",77],["pontiacdailyleader.com",77],["portclintonnewsherald.com",77],["postcrescent.com",77],["poughkeepsiejournal.com",77],["press-citizen.com",77],["pressconnects.com",77],["progress-index.com",77],["providencejournal.com",77],["publicopiniononline.com",77],["record-courier.com",77],["recordnet.com",77],["recordonline.com",77],["redding.com",77],["registerguard.com",77],["reporter-times.com",77],["reporternews.com",77],["rgj.com",77],["rrstar.com",77],["ruidosonews.com",77],["salina.com",77],["savannahnow.com",77],["scsun-news.com",77],["sctimes.com",77],["seacoastonline.com",77],["sheboyganpress.com",77],["shelbystar.com",77],["shreveporttimes.com",77],["sj-r.com",77],["sooeveningnews.com",77],["southbendtribune.com",77],["southcoasttoday.com",77],["starcourier.com",77],["stargazette.com",77],["starnewsonline.com",77],["statesman.com",77],["statesmanjournal.com",77],["staugustine.com",77],["stevenspointjournal.com",77],["sturgisjournal.com",77],["swtimes.com",77],["tallahassee.com",77],["tauntongazette.com",77],["tcpalm.com",77],["telegram.com",77],["tennessean.com",77],["the-daily-record.com",77],["the-dispatch.com",77],["the-leader.com",77],["the-review.com",77],["theadvertiser.com",77],["thecalifornian.com",77],["thedailyjournal.com",77],["thedailyreporter.com",77],["thegardnernews.com",77],["thegleaner.com",77],["thehawkeye.com",77],["theintell.com",77],["theleafchronicle.com",77],["theledger.com",77],["thenews-messenger.com",77],["thenewsstar.com",77],["thenorthwestern.com",77],["thepublicopinion.com",77],["therecordherald.com",77],["thespectrum.com",77],["thestarpress.com",77],["thetimesherald.com",77],["thetimesnews.com",77],["thetowntalk.com",77],["times-gazette.com",77],["timesonline.com",77],["timesrecordnews.com",77],["timesreporter.com",77],["timestelegram.com",77],["tmnews.com",77],["tricountyindependent.com",77],["tuscaloosanews.com",77],["usatoday.com",77],["uticaod.com",77],["vcstar.com",77],["visaliatimesdelta.com",77],["vvdailypress.com",77],["wausaudailyherald.com",77],["wisconsinrapidstribune.com",77],["ydr.com",77],["zanesvilletimesrecorder.com",77],["craftpip.github.io",78],["pixwox.com",79],["sflix.to",80],["thizissam.in",81],["ikorektor.pl",82],["telenovelas-turcas.com.es",83],["solarmovie.*",83],["phimfit.com",83],["goldenstateofmind.com",84],["neoseeker.com",85],["tumblr.com",86],["aniwave.*",87],["anix.*",87],["flixhq.*",87],["flixrave.to",87],["hdtoday.so",87],["vidplay.site",87],["vid2faf.site",87],["galinos.gr",88],["bluesnews.com",89],["oceanplay.org",90],["bembed.net",90],["embedv.net",90],["listeamed.net",90],["v6embed.xyz",90],["vembed.*",90],["vid-guard.com",90],["notificationsounds.com",91],["tweaking4all.com",91],["zonatmo.com",92],["openanesthesia.org",93],["manhwa18.cc",94],["filiser.eu",95],["wishflix.cc",95],["zalukaj.io",95]]);
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
