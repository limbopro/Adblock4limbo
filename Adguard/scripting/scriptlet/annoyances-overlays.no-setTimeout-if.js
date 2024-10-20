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
/* global cloneInto */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetTimeoutIf = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["show-login-layer-article"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["adsbygoogle"],["__ext_loaded"],["slideout"],["AdBlocker"],["modal"],["offsetHeight"],["adblock"],["0x"],["","7000"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"],["adsbygoogle","2000"],["adb-enabled"]];

const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["evworld.com",1],["columbiaspectator.com",1],["99bitcoins.com",2],["myfxbook.com",3],["hqq.tv",4],["mediafire.com",5],["webcodegeeks.com",6],["books-world.net",7],["pc3mag.com",7],["opedge.com",8],["bronze-bravery.com",8],["ultimate-bravery.net",8],["htmlreference.io",8],["short-story.net",8],["sbenny.com",8],["fabricjs.com",9],["wildstarlogs.com",10],["boerse-express.com",10],["bucketpages.com",11],["steptalk.org",12],["numberempire.com",13],["howjsay.com",14],["cagesideseats.com",14],["vpnmentor.com",15],["tomshw.it",15],["wizcase.com",15],["portableapps.com",16],["reviewmeta.com",16],["heroesneverdie.com",17],["curbed.com",17],["eater.com",17],["funnyordie.com",17],["mmafighting.com",17],["mmamania.com",17],["polygon.com",17],["racked.com",17],["riftherald.com",17],["sbnation.com",17],["theverge.com",17],["vox.com",17],["twinkietown.com",17],["addons.opera.com",18],["ruwix.com",19],["zulily.com",20],["rp5.by",21],["turbolab.it",22],["9xbuddy.com",23],["zerogpt.net",23],["lookmovie.ag",24],["lifo.gr",25],["watson.de",26],["watson.ch",26],["xe.gr",27],["jsfiddle.net",27],["liverpool.no",28],["fotor.com",28],["playbill.com",28],["xxxonlinegames.com",28],["olarila.com",28],["fairyabc.com",29],["asheville.com",29],["mobilarena.hu",30],["myflixerz.to",30],["gamepod.hu",31],["itcafe.hu",31],["prohardver.hu",31],["minecraftforge.net",32],["theherald-news.com",33],["keybr.com",35],["searchenginejournal.com",36],["mocospace.com",37],["karamellstore.com.br",38],["mdlinx.com",39],["infoplease.com",39],["htforum.net",39],["underconsideration.com",40],["foreignaffairs.com",41],["dxmaps.com",42],["photoshop-online.biz",43],["ukworkshop.co.uk",43],["endorfinese.com.br",43],["segnidalcielo.it",43],["2iptv.com",43],["deezer.com",44],["handball-world.news",45],["mobiflip.de",45],["titanic-magazin.de",45],["mimikama.org",45],["langweiledich.net",45],["der-postillon.com",45],["perlentaucher.de",45],["lwlies.com",45],["serieslyawesome.tv",45],["critic.de",45],["mediotejo.net",45],["nahrungsmittel-intoleranz.com",45],["madeinbocholt.de",45],["goodnews-magazin.de",45],["affiliate.fc2.com",46],["4x4earth.com",47],["diffchecker.com",48],["malekal.com",49],["audiostereo.pl",49],["guides4gamers.com",50],["polyflore.net",51],["icy-veins.com",52],["cpuid.com",53],["webcamtaxi.com",54],["dreamstime.com",55],["megapixl.com",56],["cissamagazine.com.br",57],["utour.me",58],["fosspost.org",59],["2embed.ru",60],["theepochtimes.com",61],["xtv.cz",62],["drawasaurus.org",63],["katholisches.info",64],["hollywoodmask.com",64],["streaminglearningcenter.com",65],["prepostseo.com",66],["tiermaker.com",67],["hqq.to",68],["zefoy.com",68],["tuborstb.co",68],["emturbovid.com",68],["anime3s.com",68],["animet1.net",68],["shopomo.co.uk",69],["techus.website",69],["criticalthinking.org",70],["zwei-euro.com",71],["elitepvpers.com",72],["geeksforgeeks.org",[73,74]],["fnbrjp.com",75],["moviepl.xyz",76],["leekduck.com",77],["aberdeennews.com",78],["alamogordonews.com",78],["amarillo.com",78],["amestrib.com",78],["app.com",78],["argusleader.com",78],["augustachronicle.com",78],["azcentral.com",78],["battlecreekenquirer.com",78],["beaconjournal.com",78],["blueridgenow.com",78],["buckscountycouriertimes.com",78],["bucyrustelegraphforum.com",78],["burlingtoncountytimes.com",78],["burlingtonfreepress.com",78],["caller.com",78],["cantondailyledger.com",78],["cantonrep.com",78],["capecodtimes.com",78],["cheboygannews.com",78],["chieftain.com",78],["chillicothegazette.com",78],["cincinnati.com",78],["citizen-times.com",78],["cjonline.com",78],["clarionledger.com",78],["coloradoan.com",78],["columbiadailyherald.com",78],["columbiatribune.com",78],["commercialappeal.com",78],["coshoctontribune.com",78],["courier-journal.com",78],["courier-tribune.com",78],["courierpostonline.com",78],["courierpress.com",78],["currentargus.com",78],["daily-jeff.com",78],["daily-times.com",78],["dailyamerican.com",78],["dailycomet.com",78],["dailycommercial.com",78],["dailyrecord.com",78],["dailyworld.com",78],["delawareonline.com",78],["delmarvanow.com",78],["demingheadlight.com",78],["democratandchronicle.com",78],["desertsun.com",78],["desmoinesregister.com",78],["devilslakejournal.com",78],["dispatch.com",78],["dnj.com",78],["ellwoodcityledger.com",78],["elpasotimes.com",78],["enterprisenews.com",78],["eveningsun.com",78],["eveningtribune.com",78],["examiner-enterprise.com",78],["fayobserver.com",78],["fdlreporter.com",78],["floridatoday.com",78],["fosters.com",78],["freep.com",78],["gadsdentimes.com",78],["gainesville.com",78],["galesburg.com",78],["gastongazette.com",78],["goerie.com",78],["gosanangelo.com",78],["goupstate.com",78],["greatfallstribune.com",78],["greenbaypressgazette.com",78],["greenvilleonline.com",78],["hattiesburgamerican.com",78],["heraldmailmedia.com",78],["heraldnews.com",78],["heraldtribune.com",78],["hillsdale.net",78],["hollandsentinel.com",78],["hoosiertimes.com",78],["houmatoday.com",78],["htrnews.com",78],["hutchnews.com",78],["indeonline.com",78],["independentmail.com",78],["indystar.com",78],["ithacajournal.com",78],["jacksonsun.com",78],["jacksonville.com",78],["jconline.com",78],["jdnews.com",78],["journalstandard.com",78],["jsonline.com",78],["kinston.com",78],["kitsapsun.com",78],["knoxnews.com",78],["lancastereaglegazette.com",78],["lansingstatejournal.com",78],["lcsun-news.com",78],["ldnews.com",78],["lenconnect.com",78],["lincolncourier.com",78],["livingstondaily.com",78],["lohud.com",78],["lubbockonline.com",78],["mansfieldnewsjournal.com",78],["marionstar.com",78],["marshfieldnewsherald.com",78],["mcdonoughvoice.com",78],["metrowestdailynews.com",78],["milforddailynews.com",78],["monroenews.com",78],["montgomeryadvertiser.com",78],["mpnnow.com",78],["mycentraljersey.com",78],["naplesnews.com",78],["newarkadvocate.com",78],["newbernsj.com",78],["newportri.com",78],["news-journalonline.com",78],["news-leader.com",78],["news-press.com",78],["newschief.com",78],["newsherald.com",78],["newsleader.com",78],["njherald.com",78],["northjersey.com",78],["norwichbulletin.com",78],["nwfdailynews.com",78],["oakridger.com",78],["ocala.com",78],["oklahoman.com",78],["onlineathens.com",78],["pal-item.com",78],["palmbeachdailynews.com",78],["palmbeachpost.com",78],["patriotledger.com",78],["pekintimes.com",78],["petoskeynews.com",78],["pjstar.com",78],["pnj.com",78],["poconorecord.com",78],["pontiacdailyleader.com",78],["portclintonnewsherald.com",78],["postcrescent.com",78],["poughkeepsiejournal.com",78],["press-citizen.com",78],["pressconnects.com",78],["progress-index.com",78],["providencejournal.com",78],["publicopiniononline.com",78],["record-courier.com",78],["recordnet.com",78],["recordonline.com",78],["redding.com",78],["registerguard.com",78],["reporter-times.com",78],["reporternews.com",78],["rgj.com",78],["rrstar.com",78],["ruidosonews.com",78],["salina.com",78],["savannahnow.com",78],["scsun-news.com",78],["sctimes.com",78],["seacoastonline.com",78],["sheboyganpress.com",78],["shelbystar.com",78],["shreveporttimes.com",78],["sj-r.com",78],["sooeveningnews.com",78],["southbendtribune.com",78],["southcoasttoday.com",78],["starcourier.com",78],["stargazette.com",78],["starnewsonline.com",78],["statesman.com",78],["statesmanjournal.com",78],["staugustine.com",78],["stevenspointjournal.com",78],["sturgisjournal.com",78],["swtimes.com",78],["tallahassee.com",78],["tauntongazette.com",78],["tcpalm.com",78],["telegram.com",78],["tennessean.com",78],["the-daily-record.com",78],["the-dispatch.com",78],["the-leader.com",78],["the-review.com",78],["theadvertiser.com",78],["thecalifornian.com",78],["thedailyjournal.com",78],["thedailyreporter.com",78],["thegardnernews.com",78],["thegleaner.com",78],["thehawkeye.com",78],["theintell.com",78],["theleafchronicle.com",78],["theledger.com",78],["thenews-messenger.com",78],["thenewsstar.com",78],["thenorthwestern.com",78],["thepublicopinion.com",78],["therecordherald.com",78],["thespectrum.com",78],["thestarpress.com",78],["thetimesherald.com",78],["thetimesnews.com",78],["thetowntalk.com",78],["times-gazette.com",78],["timesonline.com",78],["timesrecordnews.com",78],["timesreporter.com",78],["timestelegram.com",78],["tmnews.com",78],["tricountyindependent.com",78],["tuscaloosanews.com",78],["usatoday.com",78],["uticaod.com",78],["vcstar.com",78],["visaliatimesdelta.com",78],["vvdailypress.com",78],["wausaudailyherald.com",78],["wisconsinrapidstribune.com",78],["ydr.com",78],["zanesvilletimesrecorder.com",78],["craftpip.github.io",79],["pixwox.com",80],["sflix.to",81],["thizissam.in",82],["ikorektor.pl",83],["telenovelas-turcas.com.es",84],["phimfit.com",84],["goldenstateofmind.com",85],["neoseeker.com",86],["tumblr.com",87],["animesuge.to",88],["flixrave.to",88],["hdtoday.so",88],["hurawatch.bz",88],["vidplay.site",88],["vid2faf.site",88],["galinos.gr",89],["bluesnews.com",90],["oceanplay.org",91],["bembed.net",91],["embedv.net",91],["fslinks.org",91],["listeamed.net",91],["v6embed.xyz",91],["vgplayer.xyz",91],["vid-guard.com",91],["notificationsounds.com",92],["tweaking4all.com",92],["zonatmo.com",93]]);

const entitiesMap = new Map([["libgen",34],["123movies",60],["solarmovie",84],["aniwave",88],["anix",88],["flixhq",88],["vembed",91]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setTimeout', needle, delay);
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const reNeedle = safe.patternToRegex(needle);
    proxyApplyFn('setTimeout', function setTimeout(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
        const b = callArgs[1];
        if ( needle === '' && delay === undefined ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        let defuse;
        if ( needle !== '' ) {
            defuse = reNeedle.test(a) !== needleNot;
        }
        if ( defuse !== false && delay !== undefined ) {
            defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
        }
        if ( defuse ) {
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
    try { noSetTimeoutIf(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noSetTimeoutIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noSetTimeoutIf = cloneInto([
            [ '(', uBOL_noSetTimeoutIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noSetTimeoutIf);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_noSetTimeoutIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
