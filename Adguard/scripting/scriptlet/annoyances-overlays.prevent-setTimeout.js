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

/* eslint-disable indent */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_preventSetTimeout = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["show-login-layer-article"],["ThriveGlobal"],["checkForAds"],["check","100"],["ads","2000"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["adsbygoogle"],["__ext_loaded"],["slideout"],["AdBlocker"],["modal"],["offsetHeight"],["adblock"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"],["adsbygoogle","2000"],["adb-enabled"],["detectLoop"],[".LoginSection"],["detect_modal"]];

const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["99bitcoins.com",1],["myfxbook.com",2],["hqq.tv",3],["columbiaspectator.com",4],["mediafire.com",5],["webcodegeeks.com",6],["books-world.net",7],["pc3mag.com",7],["opedge.com",8],["bronze-bravery.com",8],["ultimate-bravery.net",8],["htmlreference.io",8],["short-story.net",8],["sbenny.com",8],["fabricjs.com",9],["wildstarlogs.com",10],["boerse-express.com",10],["bucketpages.com",11],["steptalk.org",12],["numberempire.com",13],["howjsay.com",14],["cagesideseats.com",14],["vpnmentor.com",15],["tomshw.it",15],["wizcase.com",15],["portableapps.com",16],["reviewmeta.com",16],["heroesneverdie.com",17],["curbed.com",17],["eater.com",17],["funnyordie.com",17],["mmafighting.com",17],["mmamania.com",17],["polygon.com",17],["racked.com",17],["riftherald.com",17],["sbnation.com",17],["theverge.com",17],["vox.com",17],["twinkietown.com",17],["addons.opera.com",18],["ruwix.com",19],["zulily.com",20],["rp5.by",21],["turbolab.it",22],["9xbuddy.com",23],["zerogpt.net",23],["lookmovie.ag",24],["lifo.gr",25],["watson.de",26],["watson.ch",26],["xe.gr",27],["jsfiddle.net",27],["liverpool.no",28],["fotor.com",28],["playbill.com",28],["xxxonlinegames.com",28],["olarila.com",28],["fairyabc.com",29],["asheville.com",29],["ajanstv.com.tr",29],["minecraftforge.net",30],["theherald-news.com",31],["keybr.com",33],["searchenginejournal.com",34],["mocospace.com",35],["karamellstore.com.br",36],["mdlinx.com",37],["infoplease.com",37],["htforum.net",37],["underconsideration.com",38],["foreignaffairs.com",39],["dxmaps.com",40],["photoshop-online.biz",41],["ukworkshop.co.uk",41],["endorfinese.com.br",41],["segnidalcielo.it",41],["2iptv.com",41],["deezer.com",42],["handball-world.news",43],["mobiflip.de",43],["titanic-magazin.de",43],["mimikama.org",43],["langweiledich.net",43],["der-postillon.com",43],["perlentaucher.de",43],["lwlies.com",43],["serieslyawesome.tv",43],["critic.de",43],["mediotejo.net",43],["nahrungsmittel-intoleranz.com",43],["madeinbocholt.de",43],["goodnews-magazin.de",43],["affiliate.fc2.com",44],["4x4earth.com",45],["diffchecker.com",46],["malekal.com",47],["audiostereo.pl",47],["guides4gamers.com",48],["polyflore.net",49],["icy-veins.com",50],["cpuid.com",51],["webcamtaxi.com",52],["dreamstime.com",53],["megapixl.com",54],["cissamagazine.com.br",55],["utour.me",56],["fosspost.org",57],["theepochtimes.com",59],["xtv.cz",60],["drawasaurus.org",61],["katholisches.info",62],["hollywoodmask.com",62],["streaminglearningcenter.com",63],["prepostseo.com",64],["tiermaker.com",65],["hqq.to",66],["zefoy.com",66],["tuborstb.co",66],["emturbovid.com",66],["anime3s.com",66],["animet1.net",66],["shopomo.co.uk",67],["techus.website",67],["criticalthinking.org",68],["zwei-euro.com",69],["elitepvpers.com",70],["geeksforgeeks.org",[71,72]],["fnbrjp.com",73],["moviepl.xyz",74],["leekduck.com",75],["aberdeennews.com",76],["alamogordonews.com",76],["amarillo.com",76],["amestrib.com",76],["app.com",76],["argusleader.com",76],["augustachronicle.com",76],["azcentral.com",76],["battlecreekenquirer.com",76],["beaconjournal.com",76],["blueridgenow.com",76],["buckscountycouriertimes.com",76],["bucyrustelegraphforum.com",76],["burlingtoncountytimes.com",76],["burlingtonfreepress.com",76],["caller.com",76],["cantondailyledger.com",76],["cantonrep.com",76],["capecodtimes.com",76],["cheboygannews.com",76],["chieftain.com",76],["chillicothegazette.com",76],["cincinnati.com",76],["citizen-times.com",76],["cjonline.com",76],["clarionledger.com",76],["coloradoan.com",76],["columbiadailyherald.com",76],["columbiatribune.com",76],["commercialappeal.com",76],["coshoctontribune.com",76],["courier-journal.com",76],["courier-tribune.com",76],["courierpostonline.com",76],["courierpress.com",76],["currentargus.com",76],["daily-jeff.com",76],["daily-times.com",76],["dailyamerican.com",76],["dailycomet.com",76],["dailycommercial.com",76],["dailyrecord.com",76],["dailyworld.com",76],["delawareonline.com",76],["delmarvanow.com",76],["demingheadlight.com",76],["democratandchronicle.com",76],["desertsun.com",76],["desmoinesregister.com",76],["devilslakejournal.com",76],["dispatch.com",76],["dnj.com",76],["ellwoodcityledger.com",76],["elpasotimes.com",76],["enterprisenews.com",76],["eveningsun.com",76],["eveningtribune.com",76],["examiner-enterprise.com",76],["fayobserver.com",76],["fdlreporter.com",76],["floridatoday.com",76],["fosters.com",76],["freep.com",76],["gadsdentimes.com",76],["gainesville.com",76],["galesburg.com",76],["gastongazette.com",76],["goerie.com",76],["gosanangelo.com",76],["goupstate.com",76],["greatfallstribune.com",76],["greenbaypressgazette.com",76],["greenvilleonline.com",76],["hattiesburgamerican.com",76],["heraldmailmedia.com",76],["heraldnews.com",76],["heraldtribune.com",76],["hillsdale.net",76],["hollandsentinel.com",76],["hoosiertimes.com",76],["houmatoday.com",76],["htrnews.com",76],["hutchnews.com",76],["indeonline.com",76],["independentmail.com",76],["indystar.com",76],["ithacajournal.com",76],["jacksonsun.com",76],["jacksonville.com",76],["jconline.com",76],["jdnews.com",76],["journalstandard.com",76],["jsonline.com",76],["kinston.com",76],["kitsapsun.com",76],["knoxnews.com",76],["lancastereaglegazette.com",76],["lansingstatejournal.com",76],["lcsun-news.com",76],["ldnews.com",76],["lenconnect.com",76],["lincolncourier.com",76],["livingstondaily.com",76],["lohud.com",76],["lubbockonline.com",76],["mansfieldnewsjournal.com",76],["marionstar.com",76],["marshfieldnewsherald.com",76],["mcdonoughvoice.com",76],["metrowestdailynews.com",76],["milforddailynews.com",76],["monroenews.com",76],["montgomeryadvertiser.com",76],["mpnnow.com",76],["mycentraljersey.com",76],["naplesnews.com",76],["newarkadvocate.com",76],["newbernsj.com",76],["newportri.com",76],["news-journalonline.com",76],["news-leader.com",76],["news-press.com",76],["newschief.com",76],["newsherald.com",76],["newsleader.com",76],["njherald.com",76],["northjersey.com",76],["norwichbulletin.com",76],["nwfdailynews.com",76],["oakridger.com",76],["ocala.com",76],["oklahoman.com",76],["onlineathens.com",76],["pal-item.com",76],["palmbeachdailynews.com",76],["palmbeachpost.com",76],["patriotledger.com",76],["pekintimes.com",76],["petoskeynews.com",76],["pjstar.com",76],["pnj.com",76],["poconorecord.com",76],["pontiacdailyleader.com",76],["portclintonnewsherald.com",76],["postcrescent.com",76],["poughkeepsiejournal.com",76],["press-citizen.com",76],["pressconnects.com",76],["progress-index.com",76],["providencejournal.com",76],["publicopiniononline.com",76],["record-courier.com",76],["recordnet.com",76],["recordonline.com",76],["redding.com",76],["registerguard.com",76],["reporter-times.com",76],["reporternews.com",76],["rgj.com",76],["rrstar.com",76],["ruidosonews.com",76],["salina.com",76],["savannahnow.com",76],["scsun-news.com",76],["sctimes.com",76],["seacoastonline.com",76],["sheboyganpress.com",76],["shelbystar.com",76],["shreveporttimes.com",76],["sj-r.com",76],["sooeveningnews.com",76],["southbendtribune.com",76],["southcoasttoday.com",76],["starcourier.com",76],["stargazette.com",76],["starnewsonline.com",76],["statesman.com",76],["statesmanjournal.com",76],["staugustine.com",76],["stevenspointjournal.com",76],["sturgisjournal.com",76],["swtimes.com",76],["tallahassee.com",76],["tauntongazette.com",76],["tcpalm.com",76],["telegram.com",76],["tennessean.com",76],["the-daily-record.com",76],["the-dispatch.com",76],["the-leader.com",76],["the-review.com",76],["theadvertiser.com",76],["thecalifornian.com",76],["thedailyjournal.com",76],["thedailyreporter.com",76],["thegardnernews.com",76],["thegleaner.com",76],["thehawkeye.com",76],["theintell.com",76],["theleafchronicle.com",76],["theledger.com",76],["thenews-messenger.com",76],["thenewsstar.com",76],["thenorthwestern.com",76],["thepublicopinion.com",76],["therecordherald.com",76],["thespectrum.com",76],["thestarpress.com",76],["thetimesherald.com",76],["thetimesnews.com",76],["thetowntalk.com",76],["times-gazette.com",76],["timesonline.com",76],["timesrecordnews.com",76],["timesreporter.com",76],["timestelegram.com",76],["tmnews.com",76],["tricountyindependent.com",76],["tuscaloosanews.com",76],["usatoday.com",76],["uticaod.com",76],["vcstar.com",76],["visaliatimesdelta.com",76],["vvdailypress.com",76],["wausaudailyherald.com",76],["wisconsinrapidstribune.com",76],["ydr.com",76],["zanesvilletimesrecorder.com",76],["craftpip.github.io",77],["pixwox.com",78],["sflix.to",79],["thizissam.in",80],["ikorektor.pl",81],["telenovelas-turcas.com.es",82],["phimfit.com",82],["goldenstateofmind.com",83],["neoseeker.com",84],["tumblr.com",85],["animesuge.to",86],["flixrave.to",86],["hdtoday.so",86],["hurawatch.bz",86],["vidplay.site",86],["vid2faf.site",86],["galinos.gr",87],["bluesnews.com",88],["oceanplay.org",89],["bembed.net",89],["embedv.net",89],["fslinks.org",89],["listeamed.net",89],["v6embed.xyz",89],["vgplayer.xyz",89],["vid-guard.com",89],["notificationsounds.com",90],["tweaking4all.com",90],["zonatmo.com",91],["yugenanime.sx",92],["yugenanime.tv",92],["openanesthesia.org",93],["manhwa18.cc",94]]);

const entitiesMap = new Map([["libgen",32],["123movies",58],["solarmovie",82],["aniwave",86],["anix",86],["flixhq",86],["vembed",89]]);

const exceptionsMap = new Map([]);

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
                this.callFn = this.callArgs = undefined;
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
                this.callFn = this.thisArg = this.callArgs = undefined;
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
            this.max = parseInt(s.slice(1), 10) || Number.MAX_SAFE_INTEGER;
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
            catch(ex) {
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { preventSetTimeout(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_preventSetTimeout();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
