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
const argsList = [["show-login-layer-article"],["adsbygoogle"],["ThriveGlobal"],["check","100"],["ads","2000"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["#advert-tracker","500"],["()","3000"],["()","1000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["AdBlocker"],["modal"],["offsetHeight"],["adblock"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"],["adsbygoogle","2000"],["adb-enabled"],["detectLoop"],[".LoginSection"],["detect_modal"],["(!0)","8000"]];
const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["tides.net",1],["9xbuddy.com",1],["zerogpt.net",1],["99bitcoins.com",2],["hqq.tv",3],["columbiaspectator.com",4],["mediafire.com",5],["webcodegeeks.com",6],["books-world.net",7],["pc3mag.com",7],["opedge.com",8],["bronze-bravery.com",8],["ultimate-bravery.net",8],["htmlreference.io",8],["short-story.net",8],["sbenny.com",8],["fabricjs.com",9],["bucketpages.com",10],["steptalk.org",11],["boerse-express.com",12],["numberempire.com",13],["howjsay.com",14],["cagesideseats.com",14],["vpnmentor.com",15],["tomshw.it",15],["wizcase.com",15],["portableapps.com",16],["reviewmeta.com",16],["heroesneverdie.com",17],["curbed.com",17],["eater.com",17],["funnyordie.com",17],["mmafighting.com",17],["mmamania.com",17],["polygon.com",17],["racked.com",17],["riftherald.com",17],["sbnation.com",17],["theverge.com",17],["vox.com",17],["twinkietown.com",17],["addons.opera.com",18],["ruwix.com",19],["zulily.com",20],["rp5.by",21],["turbolab.it",22],["lookmovie.ag",23],["lifo.gr",24],["watson.de",25],["watson.ch",25],["xe.gr",26],["jsfiddle.net",26],["liverpool.no",27],["fotor.com",27],["playbill.com",27],["xxxonlinegames.com",27],["olarila.com",27],["fairyabc.com",28],["asheville.com",28],["ajanstv.com.tr",28],["minecraftforge.net",29],["theherald-news.com",30],["libgen.*",31],["keybr.com",32],["searchenginejournal.com",33],["mocospace.com",34],["karamellstore.com.br",35],["mdlinx.com",36],["infoplease.com",36],["htforum.net",36],["underconsideration.com",37],["foreignaffairs.com",38],["dxmaps.com",39],["photoshop-online.biz",40],["ukworkshop.co.uk",40],["endorfinese.com.br",40],["segnidalcielo.it",40],["2iptv.com",40],["deezer.com",41],["handball-world.news",42],["mobiflip.de",42],["titanic-magazin.de",42],["mimikama.org",42],["langweiledich.net",42],["der-postillon.com",42],["perlentaucher.de",42],["lwlies.com",42],["serieslyawesome.tv",42],["critic.de",42],["mediotejo.net",42],["nahrungsmittel-intoleranz.com",42],["madeinbocholt.de",42],["goodnews-magazin.de",42],["wallauonline.de",42],["cleanthinking.de",42],["affiliate.fc2.com",43],["4x4earth.com",44],["diffchecker.com",45],["malekal.com",46],["audiostereo.pl",46],["guides4gamers.com",47],["polyflore.net",48],["icy-veins.com",49],["cpuid.com",50],["webcamtaxi.com",51],["dreamstime.com",52],["megapixl.com",53],["cissamagazine.com.br",54],["utour.me",55],["fosspost.org",56],["123movies.*",57],["theepochtimes.com",58],["xtv.cz",59],["drawasaurus.org",60],["katholisches.info",61],["hollywoodmask.com",61],["streaminglearningcenter.com",62],["prepostseo.com",63],["tiermaker.com",64],["hqq.to",65],["zefoy.com",65],["tuborstb.co",65],["emturbovid.com",65],["anime3s.com",65],["animet1.net",65],["pawastreams.pro",65],["shopomo.co.uk",66],["techus.website",66],["criticalthinking.org",67],["zwei-euro.com",68],["elitepvpers.com",69],["geeksforgeeks.org",[70,71]],["fnbrjp.com",72],["moviepl.xyz",73],["leekduck.com",74],["aberdeennews.com",75],["alamogordonews.com",75],["amarillo.com",75],["amestrib.com",75],["app.com",75],["argusleader.com",75],["augustachronicle.com",75],["azcentral.com",75],["battlecreekenquirer.com",75],["beaconjournal.com",75],["blueridgenow.com",75],["buckscountycouriertimes.com",75],["bucyrustelegraphforum.com",75],["burlingtoncountytimes.com",75],["burlingtonfreepress.com",75],["caller.com",75],["cantondailyledger.com",75],["cantonrep.com",75],["capecodtimes.com",75],["cheboygannews.com",75],["chieftain.com",75],["chillicothegazette.com",75],["cincinnati.com",75],["citizen-times.com",75],["cjonline.com",75],["clarionledger.com",75],["coloradoan.com",75],["columbiadailyherald.com",75],["columbiatribune.com",75],["commercialappeal.com",75],["coshoctontribune.com",75],["courier-journal.com",75],["courier-tribune.com",75],["courierpostonline.com",75],["courierpress.com",75],["currentargus.com",75],["daily-jeff.com",75],["daily-times.com",75],["dailyamerican.com",75],["dailycomet.com",75],["dailycommercial.com",75],["dailyrecord.com",75],["dailyworld.com",75],["delawareonline.com",75],["delmarvanow.com",75],["demingheadlight.com",75],["democratandchronicle.com",75],["desertsun.com",75],["desmoinesregister.com",75],["devilslakejournal.com",75],["dispatch.com",75],["dnj.com",75],["ellwoodcityledger.com",75],["elpasotimes.com",75],["enterprisenews.com",75],["eveningsun.com",75],["eveningtribune.com",75],["examiner-enterprise.com",75],["fayobserver.com",75],["fdlreporter.com",75],["floridatoday.com",75],["fosters.com",75],["freep.com",75],["gadsdentimes.com",75],["gainesville.com",75],["galesburg.com",75],["gastongazette.com",75],["goerie.com",75],["gosanangelo.com",75],["goupstate.com",75],["greatfallstribune.com",75],["greenbaypressgazette.com",75],["greenvilleonline.com",75],["hattiesburgamerican.com",75],["heraldmailmedia.com",75],["heraldnews.com",75],["heraldtribune.com",75],["hillsdale.net",75],["hollandsentinel.com",75],["hoosiertimes.com",75],["houmatoday.com",75],["htrnews.com",75],["hutchnews.com",75],["indeonline.com",75],["independentmail.com",75],["indystar.com",75],["ithacajournal.com",75],["jacksonsun.com",75],["jacksonville.com",75],["jconline.com",75],["jdnews.com",75],["journalstandard.com",75],["jsonline.com",75],["kinston.com",75],["kitsapsun.com",75],["knoxnews.com",75],["lancastereaglegazette.com",75],["lansingstatejournal.com",75],["lcsun-news.com",75],["ldnews.com",75],["lenconnect.com",75],["lincolncourier.com",75],["livingstondaily.com",75],["lohud.com",75],["lubbockonline.com",75],["mansfieldnewsjournal.com",75],["marionstar.com",75],["marshfieldnewsherald.com",75],["mcdonoughvoice.com",75],["metrowestdailynews.com",75],["milforddailynews.com",75],["monroenews.com",75],["montgomeryadvertiser.com",75],["mpnnow.com",75],["mycentraljersey.com",75],["naplesnews.com",75],["newarkadvocate.com",75],["newbernsj.com",75],["newportri.com",75],["news-journalonline.com",75],["news-leader.com",75],["news-press.com",75],["newschief.com",75],["newsherald.com",75],["newsleader.com",75],["njherald.com",75],["northjersey.com",75],["norwichbulletin.com",75],["nwfdailynews.com",75],["oakridger.com",75],["ocala.com",75],["oklahoman.com",75],["onlineathens.com",75],["pal-item.com",75],["palmbeachdailynews.com",75],["palmbeachpost.com",75],["patriotledger.com",75],["pekintimes.com",75],["petoskeynews.com",75],["pjstar.com",75],["pnj.com",75],["poconorecord.com",75],["pontiacdailyleader.com",75],["portclintonnewsherald.com",75],["postcrescent.com",75],["poughkeepsiejournal.com",75],["press-citizen.com",75],["pressconnects.com",75],["progress-index.com",75],["providencejournal.com",75],["publicopiniononline.com",75],["record-courier.com",75],["recordnet.com",75],["recordonline.com",75],["redding.com",75],["registerguard.com",75],["reporter-times.com",75],["reporternews.com",75],["rgj.com",75],["rrstar.com",75],["ruidosonews.com",75],["salina.com",75],["savannahnow.com",75],["scsun-news.com",75],["sctimes.com",75],["seacoastonline.com",75],["sheboyganpress.com",75],["shelbystar.com",75],["shreveporttimes.com",75],["sj-r.com",75],["sooeveningnews.com",75],["southbendtribune.com",75],["southcoasttoday.com",75],["starcourier.com",75],["stargazette.com",75],["starnewsonline.com",75],["statesman.com",75],["statesmanjournal.com",75],["staugustine.com",75],["stevenspointjournal.com",75],["sturgisjournal.com",75],["swtimes.com",75],["tallahassee.com",75],["tauntongazette.com",75],["tcpalm.com",75],["telegram.com",75],["tennessean.com",75],["the-daily-record.com",75],["the-dispatch.com",75],["the-leader.com",75],["the-review.com",75],["theadvertiser.com",75],["thecalifornian.com",75],["thedailyjournal.com",75],["thedailyreporter.com",75],["thegardnernews.com",75],["thegleaner.com",75],["thehawkeye.com",75],["theintell.com",75],["theleafchronicle.com",75],["theledger.com",75],["thenews-messenger.com",75],["thenewsstar.com",75],["thenorthwestern.com",75],["thepublicopinion.com",75],["therecordherald.com",75],["thespectrum.com",75],["thestarpress.com",75],["thetimesherald.com",75],["thetimesnews.com",75],["thetowntalk.com",75],["times-gazette.com",75],["timesonline.com",75],["timesrecordnews.com",75],["timesreporter.com",75],["timestelegram.com",75],["tmnews.com",75],["tricountyindependent.com",75],["tuscaloosanews.com",75],["usatoday.com",75],["uticaod.com",75],["vcstar.com",75],["visaliatimesdelta.com",75],["vvdailypress.com",75],["wausaudailyherald.com",75],["wisconsinrapidstribune.com",75],["ydr.com",75],["zanesvilletimesrecorder.com",75],["craftpip.github.io",76],["pixwox.com",77],["sflix.to",78],["thizissam.in",79],["ikorektor.pl",80],["telenovelas-turcas.com.es",81],["solarmovie.*",81],["phimfit.com",81],["goldenstateofmind.com",82],["neoseeker.com",83],["tumblr.com",84],["animesuge.to",85],["aniwave.*",85],["anix.*",85],["flixhq.*",85],["flixrave.to",85],["hdtoday.so",85],["hurawatch.bz",85],["vidplay.site",85],["vid2faf.site",85],["galinos.gr",86],["bluesnews.com",87],["oceanplay.org",88],["bembed.net",88],["embedv.net",88],["fslinks.org",88],["listeamed.net",88],["v6embed.xyz",88],["vembed.*",88],["vgplayer.xyz",88],["vid-guard.com",88],["notificationsounds.com",89],["tweaking4all.com",89],["zonatmo.com",90],["yugenanime.sx",91],["yugenanime.tv",91],["openanesthesia.org",92],["manhwa18.cc",93],["filiser.eu",94],["wishflix.cc",94],["zalukaj.io",94]]);
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
