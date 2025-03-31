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
const argsList = [["show-login-layer-article"],["checkForAds"],["check","100"],["ads","2000"],["Adblocker","10000"],["()","2000"],["()","4000"],["#advert-tracker","500"],["()","3000"],["()","1000"],["w3ad","1000"],["()","1500"],["adsBlocked"],["NoAd","8000"],["()","700"],["warning"],["adsbygoogle"],["AdBlocker"],["modal"],["adblock"],["body"],["null"],["appendMessage"],["()","5000"],["adblocker"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["offsetHeight"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["adBlockDetected"],["blocked","1000"],["blocker"],["an_message","500"],["pgblck"],["pop"],["ads"],["head"],["&adslot"],["ai_"],["$"],["広告"],["abp"],["show"],["adsok"],["length","3000"],["ad"],["concertAds"],["whetherdo"],["nn_mpu1","5000"],["adsbygoogle","2000"],["ThriveGlobal"],["scan","500"],["onload_popup","8000"],["bioEp.showPopup"],["innerHTML"],["showOverlay"],["loginModal","500"],["__ext_loaded"],["slideout"],["popup"],["exit_popup","10000"],["test.remove"],["noscroll","3000"],["offsetHeight","100"],["premium"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["_0x"],["pipaId","0"],["forceRefresh"],["debugger"],["donation-modal"],["Delay"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["gnt_mol_oy"],["devtools"],["popupScreen"],["_detectLoop"],["Premium"],["||null"],["pleaseSupportUs"],["devtool"],["detectLoop"],[".LoginSection"],["(!0)","8000"]];
const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["myfxbook.com",1],["hqq.tv",2],["columbiaspectator.com",3],["books-world.net",4],["pc3mag.com",4],["opedge.com",5],["bronze-bravery.com",5],["ultimate-bravery.net",5],["htmlreference.io",5],["short-story.net",5],["sbenny.com",5],["fabricjs.com",6],["bucketpages.com",7],["steptalk.org",8],["boerse-express.com",9],["numberempire.com",10],["howjsay.com",11],["cagesideseats.com",11],["heroesneverdie.com",12],["curbed.com",12],["eater.com",12],["funnyordie.com",12],["mmafighting.com",12],["mmamania.com",12],["polygon.com",12],["racked.com",12],["riftherald.com",12],["sbnation.com",12],["theverge.com",12],["vox.com",12],["twinkietown.com",12],["ruwix.com",13],["rp5.by",14],["turbolab.it",15],["9xbuddy.com",16],["zerogpt.net",16],["watson.de",17],["watson.ch",17],["xe.gr",18],["jsfiddle.net",18],["fairyabc.com",19],["asheville.com",19],["minecraftforge.net",20],["theherald-news.com",21],["libgen.*",22],["keybr.com",23],["mocospace.com",24],["dxmaps.com",25],["photoshop-online.biz",26],["endorfinese.com.br",26],["segnidalcielo.it",26],["2iptv.com",26],["ukworkshop.co.uk",26],["deezer.com",27],["handball-world.news",28],["mobiflip.de",28],["titanic-magazin.de",28],["mimikama.org",28],["langweiledich.net",28],["der-postillon.com",28],["perlentaucher.de",28],["lwlies.com",28],["serieslyawesome.tv",28],["critic.de",28],["mediotejo.net",28],["nahrungsmittel-intoleranz.com",28],["madeinbocholt.de",28],["goodnews-magazin.de",28],["wallauonline.de",28],["playbill.com",29],["olarila.com",29],["liverpool.no",29],["fotor.com",29],["xxxonlinegames.com",29],["affiliate.fc2.com",30],["4x4earth.com",31],["diffchecker.com",32],["malekal.com",33],["audiostereo.pl",33],["polyflore.net",34],["cpuid.com",35],["webcamtaxi.com",36],["fosspost.org",37],["xtv.cz",38],["katholisches.info",39],["hollywoodmask.com",39],["streaminglearningcenter.com",40],["prepostseo.com",41],["tiermaker.com",42],["shopomo.co.uk",43],["techus.website",43],["elitepvpers.com",44],["fnbrjp.com",45],["leekduck.com",46],["htforum.net",47],["mdlinx.com",47],["infoplease.com",47],["craftpip.github.io",48],["pixwox.com",49],["ikorektor.pl",50],["goldenstateofmind.com",51],["neoseeker.com",52],["bluesnews.com",53],["notificationsounds.com",54],["tweaking4all.com",54],["99bitcoins.com",55],["mediafire.com",56],["webcodegeeks.com",57],["vpnmentor.com",58],["tomshw.it",58],["wizcase.com",58],["portableapps.com",59],["reviewmeta.com",59],["addons.opera.com",60],["zulily.com",61],["lookmovie.ag",62],["lifo.gr",63],["searchenginejournal.com",64],["karamellstore.com.br",65],["underconsideration.com",66],["foreignaffairs.com",67],["guides4gamers.com",68],["icy-veins.com",69],["dreamstime.com",70],["megapixl.com",71],["cissamagazine.com.br",72],["utour.me",73],["123movies.*",74],["theepochtimes.com",75],["drawasaurus.org",76],["hqq.to",77],["zefoy.com",77],["tuborstb.co",77],["emturbovid.com",77],["anime3s.com",77],["animet1.net",77],["pawastreams.pro",77],["criticalthinking.org",78],["zwei-euro.com",79],["geeksforgeeks.org",[80,81]],["moviepl.xyz",82],["aberdeennews.com",83],["alamogordonews.com",83],["amarillo.com",83],["amestrib.com",83],["app.com",83],["argusleader.com",83],["augustachronicle.com",83],["azcentral.com",83],["battlecreekenquirer.com",83],["beaconjournal.com",83],["blueridgenow.com",83],["buckscountycouriertimes.com",83],["bucyrustelegraphforum.com",83],["burlingtoncountytimes.com",83],["burlingtonfreepress.com",83],["caller.com",83],["cantondailyledger.com",83],["cantonrep.com",83],["capecodtimes.com",83],["cheboygannews.com",83],["chieftain.com",83],["chillicothegazette.com",83],["cincinnati.com",83],["citizen-times.com",83],["cjonline.com",83],["clarionledger.com",83],["coloradoan.com",83],["columbiadailyherald.com",83],["columbiatribune.com",83],["commercialappeal.com",83],["coshoctontribune.com",83],["courier-journal.com",83],["courier-tribune.com",83],["courierpostonline.com",83],["courierpress.com",83],["currentargus.com",83],["daily-jeff.com",83],["daily-times.com",83],["dailyamerican.com",83],["dailycomet.com",83],["dailycommercial.com",83],["dailyrecord.com",83],["dailyworld.com",83],["delawareonline.com",83],["delmarvanow.com",83],["demingheadlight.com",83],["democratandchronicle.com",83],["desertsun.com",83],["desmoinesregister.com",83],["devilslakejournal.com",83],["dispatch.com",83],["dnj.com",83],["ellwoodcityledger.com",83],["elpasotimes.com",83],["enterprisenews.com",83],["eveningsun.com",83],["eveningtribune.com",83],["examiner-enterprise.com",83],["fayobserver.com",83],["fdlreporter.com",83],["floridatoday.com",83],["fosters.com",83],["freep.com",83],["gadsdentimes.com",83],["gainesville.com",83],["galesburg.com",83],["gastongazette.com",83],["goerie.com",83],["gosanangelo.com",83],["goupstate.com",83],["greatfallstribune.com",83],["greenbaypressgazette.com",83],["greenvilleonline.com",83],["hattiesburgamerican.com",83],["heraldmailmedia.com",83],["heraldnews.com",83],["heraldtribune.com",83],["hillsdale.net",83],["hollandsentinel.com",83],["hoosiertimes.com",83],["houmatoday.com",83],["htrnews.com",83],["hutchnews.com",83],["indeonline.com",83],["independentmail.com",83],["indystar.com",83],["ithacajournal.com",83],["jacksonsun.com",83],["jacksonville.com",83],["jconline.com",83],["jdnews.com",83],["journalstandard.com",83],["jsonline.com",83],["kinston.com",83],["kitsapsun.com",83],["knoxnews.com",83],["lancastereaglegazette.com",83],["lansingstatejournal.com",83],["lcsun-news.com",83],["ldnews.com",83],["lenconnect.com",83],["lincolncourier.com",83],["livingstondaily.com",83],["lohud.com",83],["lubbockonline.com",83],["mansfieldnewsjournal.com",83],["marionstar.com",83],["marshfieldnewsherald.com",83],["mcdonoughvoice.com",83],["metrowestdailynews.com",83],["milforddailynews.com",83],["monroenews.com",83],["montgomeryadvertiser.com",83],["mpnnow.com",83],["mycentraljersey.com",83],["naplesnews.com",83],["newarkadvocate.com",83],["newbernsj.com",83],["newportri.com",83],["news-journalonline.com",83],["news-leader.com",83],["news-press.com",83],["newschief.com",83],["newsherald.com",83],["newsleader.com",83],["njherald.com",83],["northjersey.com",83],["norwichbulletin.com",83],["nwfdailynews.com",83],["oakridger.com",83],["ocala.com",83],["oklahoman.com",83],["onlineathens.com",83],["pal-item.com",83],["palmbeachdailynews.com",83],["palmbeachpost.com",83],["patriotledger.com",83],["pekintimes.com",83],["petoskeynews.com",83],["pjstar.com",83],["pnj.com",83],["poconorecord.com",83],["pontiacdailyleader.com",83],["portclintonnewsherald.com",83],["postcrescent.com",83],["poughkeepsiejournal.com",83],["press-citizen.com",83],["pressconnects.com",83],["progress-index.com",83],["providencejournal.com",83],["publicopiniononline.com",83],["record-courier.com",83],["recordnet.com",83],["recordonline.com",83],["redding.com",83],["registerguard.com",83],["reporter-times.com",83],["reporternews.com",83],["rgj.com",83],["rrstar.com",83],["ruidosonews.com",83],["salina.com",83],["savannahnow.com",83],["scsun-news.com",83],["sctimes.com",83],["seacoastonline.com",83],["sheboyganpress.com",83],["shelbystar.com",83],["shreveporttimes.com",83],["sj-r.com",83],["sooeveningnews.com",83],["southbendtribune.com",83],["southcoasttoday.com",83],["starcourier.com",83],["stargazette.com",83],["starnewsonline.com",83],["statesman.com",83],["statesmanjournal.com",83],["staugustine.com",83],["stevenspointjournal.com",83],["sturgisjournal.com",83],["swtimes.com",83],["tallahassee.com",83],["tauntongazette.com",83],["tcpalm.com",83],["telegram.com",83],["tennessean.com",83],["the-daily-record.com",83],["the-dispatch.com",83],["the-leader.com",83],["the-review.com",83],["theadvertiser.com",83],["thecalifornian.com",83],["thedailyjournal.com",83],["thedailyreporter.com",83],["thegardnernews.com",83],["thegleaner.com",83],["thehawkeye.com",83],["theintell.com",83],["theleafchronicle.com",83],["theledger.com",83],["thenews-messenger.com",83],["thenewsstar.com",83],["thenorthwestern.com",83],["thepublicopinion.com",83],["therecordherald.com",83],["thespectrum.com",83],["thestarpress.com",83],["thetimesherald.com",83],["thetimesnews.com",83],["thetowntalk.com",83],["times-gazette.com",83],["timesonline.com",83],["timesrecordnews.com",83],["timesreporter.com",83],["timestelegram.com",83],["tmnews.com",83],["tricountyindependent.com",83],["tuscaloosanews.com",83],["usatoday.com",83],["uticaod.com",83],["vcstar.com",83],["visaliatimesdelta.com",83],["vvdailypress.com",83],["wausaudailyherald.com",83],["wisconsinrapidstribune.com",83],["ydr.com",83],["zanesvilletimesrecorder.com",83],["sflix.to",84],["thizissam.in",85],["telenovelas-turcas.com.es",86],["solarmovie.*",86],["phimfit.com",86],["tumblr.com",87],["animesuge.to",88],["aniwave.*",88],["anix.*",88],["flixhq.*",88],["flixrave.to",88],["hdtoday.so",88],["hurawatch.bz",88],["vidplay.site",88],["vid2faf.site",88],["galinos.gr",89],["oceanplay.org",90],["bembed.net",90],["embedv.net",90],["fslinks.org",90],["listeamed.net",90],["v6embed.xyz",90],["vembed.*",90],["vgplayer.xyz",90],["vid-guard.com",90],["yugenanime.sx",91],["yugenanime.tv",91],["openanesthesia.org",92],["filiser.eu",93],["wishflix.cc",93],["zalukaj.io",93]]);
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
