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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetTimeoutIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["adsbygoogle","2000"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["adsbygoogle"],["__ext_loaded"],["slideout"],["AdBlocker"],["modal"],["offsetHeight"],["adblock"],["0x"],["","7000"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"]];

const hostnamesMap = new Map([["dragcave.net",0],["notificationsounds.com",0],["tweaking4all.com",0],["evworld.com",1],["columbiaspectator.com",1],["99bitcoins.com",2],["myfxbook.com",3],["hqq.tv",4],["mediafire.com",5],["webcodegeeks.com",6],["books-world.net",7],["pc3mag.com",7],["opedge.com",8],["bronze-bravery.com",8],["ultimate-bravery.net",8],["htmlreference.io",8],["short-story.net",8],["sbenny.com",8],["fabricjs.com",9],["wildstarlogs.com",10],["boerse-express.com",10],["bucketpages.com",11],["steptalk.org",12],["numberempire.com",13],["howjsay.com",14],["cagesideseats.com",14],["vpnmentor.com",15],["tomshw.it",15],["wizcase.com",15],["portableapps.com",16],["reviewmeta.com",16],["heroesneverdie.com",17],["curbed.com",17],["eater.com",17],["funnyordie.com",17],["mmafighting.com",17],["mmamania.com",17],["polygon.com",17],["racked.com",17],["riftherald.com",17],["sbnation.com",17],["theverge.com",17],["vox.com",17],["twinkietown.com",17],["addons.opera.com",18],["ruwix.com",19],["zulily.com",20],["rp5.by",21],["turbolab.it",22],["9xbuddy.com",23],["zerogpt.net",23],["lookmovie.ag",24],["lifo.gr",25],["watson.de",26],["watson.ch",26],["xe.gr",27],["jsfiddle.net",27],["liverpool.no",28],["fotor.com",28],["playbill.com",28],["xxxonlinegames.com",28],["olarila.com",28],["fairyabc.com",29],["asheville.com",29],["mobilarena.hu",30],["bflix.io",30],["f2movies.ru",30],["movies2watch.ru",30],["putlockernew.vc",30],["swatchseries.ru",30],["vidplay.site",[30,87]],["vidstream.pro",30],["mcloud.to",30],["myflixerz.to",30],["gamepod.hu",31],["itcafe.hu",31],["prohardver.hu",31],["minecraftforge.net",32],["theherald-news.com",33],["keybr.com",35],["searchenginejournal.com",36],["mocospace.com",37],["karamellstore.com.br",38],["mdlinx.com",39],["infoplease.com",39],["htforum.net",39],["underconsideration.com",40],["foreignaffairs.com",41],["dxmaps.com",42],["photoshop-online.biz",43],["ukworkshop.co.uk",43],["endorfinese.com.br",43],["segnidalcielo.it",43],["2iptv.com",43],["deezer.com",44],["handball-world.news",45],["mobiflip.de",45],["titanic-magazin.de",45],["mimikama.org",45],["langweiledich.net",45],["der-postillon.com",45],["perlentaucher.de",45],["lwlies.com",45],["serieslyawesome.tv",45],["critic.de",45],["mediotejo.net",45],["nahrungsmittel-intoleranz.com",45],["madeinbocholt.de",45],["goodnews-magazin.de",45],["zwei-euro.com",45],["affiliate.fc2.com",46],["4x4earth.com",47],["diffchecker.com",48],["malekal.com",49],["audiostereo.pl",49],["guides4gamers.com",50],["polyflore.net",51],["icy-veins.com",52],["cpuid.com",53],["webcamtaxi.com",54],["dreamstime.com",55],["megapixl.com",56],["cissamagazine.com.br",57],["utour.me",58],["fosspost.org",59],["2embed.ru",60],["theepochtimes.com",61],["xtv.cz",62],["drawasaurus.org",63],["katholisches.info",64],["hollywoodmask.com",64],["streaminglearningcenter.com",65],["prepostseo.com",66],["tiermaker.com",67],["hqq.to",68],["zefoy.com",68],["tuborstb.co",68],["emturbovid.com",68],["shopomo.co.uk",69],["techus.website",69],["criticalthinking.org",70],["elitepvpers.com",71],["geeksforgeeks.org",[72,73]],["fnbrjp.com",74],["moviepl.xyz",75],["leekduck.com",76],["aberdeennews.com",77],["alamogordonews.com",77],["amarillo.com",77],["amestrib.com",77],["app.com",77],["argusleader.com",77],["augustachronicle.com",77],["azcentral.com",77],["battlecreekenquirer.com",77],["beaconjournal.com",77],["blueridgenow.com",77],["buckscountycouriertimes.com",77],["bucyrustelegraphforum.com",77],["burlingtoncountytimes.com",77],["burlingtonfreepress.com",77],["caller.com",77],["cantondailyledger.com",77],["cantonrep.com",77],["capecodtimes.com",77],["cheboygannews.com",77],["chieftain.com",77],["chillicothegazette.com",77],["cincinnati.com",77],["citizen-times.com",77],["cjonline.com",77],["clarionledger.com",77],["coloradoan.com",77],["columbiadailyherald.com",77],["columbiatribune.com",77],["commercialappeal.com",77],["coshoctontribune.com",77],["courier-journal.com",77],["courier-tribune.com",77],["courierpostonline.com",77],["courierpress.com",77],["currentargus.com",77],["daily-jeff.com",77],["daily-times.com",77],["dailyamerican.com",77],["dailycomet.com",77],["dailycommercial.com",77],["dailyrecord.com",77],["dailyworld.com",77],["delawareonline.com",77],["delmarvanow.com",77],["demingheadlight.com",77],["democratandchronicle.com",77],["desertsun.com",77],["desmoinesregister.com",77],["devilslakejournal.com",77],["dispatch.com",77],["dnj.com",77],["ellwoodcityledger.com",77],["elpasotimes.com",77],["enterprisenews.com",77],["eveningsun.com",77],["eveningtribune.com",77],["examiner-enterprise.com",77],["fayobserver.com",77],["fdlreporter.com",77],["floridatoday.com",77],["fosters.com",77],["freep.com",77],["gadsdentimes.com",77],["gainesville.com",77],["galesburg.com",77],["gastongazette.com",77],["goerie.com",77],["gosanangelo.com",77],["goupstate.com",77],["greatfallstribune.com",77],["greenbaypressgazette.com",77],["greenvilleonline.com",77],["hattiesburgamerican.com",77],["heraldmailmedia.com",77],["heraldnews.com",77],["heraldtribune.com",77],["hillsdale.net",77],["hollandsentinel.com",77],["hoosiertimes.com",77],["houmatoday.com",77],["htrnews.com",77],["hutchnews.com",77],["indeonline.com",77],["independentmail.com",77],["indystar.com",77],["ithacajournal.com",77],["jacksonsun.com",77],["jacksonville.com",77],["jconline.com",77],["jdnews.com",77],["journalstandard.com",77],["jsonline.com",77],["kinston.com",77],["kitsapsun.com",77],["knoxnews.com",77],["lancastereaglegazette.com",77],["lansingstatejournal.com",77],["lcsun-news.com",77],["ldnews.com",77],["lenconnect.com",77],["lincolncourier.com",77],["livingstondaily.com",77],["lohud.com",77],["lubbockonline.com",77],["mansfieldnewsjournal.com",77],["marionstar.com",77],["marshfieldnewsherald.com",77],["mcdonoughvoice.com",77],["metrowestdailynews.com",77],["milforddailynews.com",77],["monroenews.com",77],["montgomeryadvertiser.com",77],["mpnnow.com",77],["mycentraljersey.com",77],["naplesnews.com",77],["newarkadvocate.com",77],["newbernsj.com",77],["newportri.com",77],["news-journalonline.com",77],["news-leader.com",77],["news-press.com",77],["newschief.com",77],["newsherald.com",77],["newsleader.com",77],["njherald.com",77],["northjersey.com",77],["norwichbulletin.com",77],["nwfdailynews.com",77],["oakridger.com",77],["ocala.com",77],["oklahoman.com",77],["onlineathens.com",77],["pal-item.com",77],["palmbeachdailynews.com",77],["palmbeachpost.com",77],["patriotledger.com",77],["pekintimes.com",77],["petoskeynews.com",77],["pjstar.com",77],["pnj.com",77],["poconorecord.com",77],["pontiacdailyleader.com",77],["portclintonnewsherald.com",77],["postcrescent.com",77],["poughkeepsiejournal.com",77],["press-citizen.com",77],["pressconnects.com",77],["progress-index.com",77],["providencejournal.com",77],["publicopiniononline.com",77],["record-courier.com",77],["recordnet.com",77],["recordonline.com",77],["redding.com",77],["registerguard.com",77],["reporter-times.com",77],["reporternews.com",77],["rgj.com",77],["rrstar.com",77],["ruidosonews.com",77],["salina.com",77],["savannahnow.com",77],["scsun-news.com",77],["sctimes.com",77],["seacoastonline.com",77],["sheboyganpress.com",77],["shelbystar.com",77],["shreveporttimes.com",77],["sj-r.com",77],["sooeveningnews.com",77],["southbendtribune.com",77],["southcoasttoday.com",77],["starcourier.com",77],["stargazette.com",77],["starnewsonline.com",77],["statesman.com",77],["statesmanjournal.com",77],["staugustine.com",77],["stevenspointjournal.com",77],["sturgisjournal.com",77],["swtimes.com",77],["tallahassee.com",77],["tauntongazette.com",77],["tcpalm.com",77],["telegram.com",77],["tennessean.com",77],["the-daily-record.com",77],["the-dispatch.com",77],["the-leader.com",77],["the-review.com",77],["theadvertiser.com",77],["thecalifornian.com",77],["thedailyjournal.com",77],["thedailyreporter.com",77],["thegardnernews.com",77],["thegleaner.com",77],["thehawkeye.com",77],["theintell.com",77],["theleafchronicle.com",77],["theledger.com",77],["thenews-messenger.com",77],["thenewsstar.com",77],["thenorthwestern.com",77],["thepublicopinion.com",77],["therecordherald.com",77],["thespectrum.com",77],["thestarpress.com",77],["thetimesherald.com",77],["thetimesnews.com",77],["thetowntalk.com",77],["times-gazette.com",77],["timesonline.com",77],["timesrecordnews.com",77],["timesreporter.com",77],["timestelegram.com",77],["tmnews.com",77],["tricountyindependent.com",77],["tuscaloosanews.com",77],["usatoday.com",77],["uticaod.com",77],["vcstar.com",77],["visaliatimesdelta.com",77],["vvdailypress.com",77],["wausaudailyherald.com",77],["wisconsinrapidstribune.com",77],["ydr.com",77],["zanesvilletimesrecorder.com",77],["craftpip.github.io",78],["pixwox.com",79],["sflix.to",80],["thizissam.in",81],["ikorektor.pl",82],["telenovelas-turcas.com.es",83],["goldenstateofmind.com",84],["neoseeker.com",85],["tumblr.com",86],["animesuge.to",87],["hdtoday.so",87],["hurawatch.bz",87],["galinos.gr",88],["bluesnews.com",89],["oceanplay.org",90],["bembed.net",90],["embedv.net",90],["fslinks.org",90],["listeamed.net",90],["v6embed.xyz",90],["vgplayer.xyz",90],["vid-guard.com",90]]);

const entitiesMap = new Map([["aniwave",[30,87]],["flixhq",[30,87]],["fmovies",30],["fmovies24",[30,87]],["fmoviesz",[30,87]],["libgen",34],["123movies",60],["solarmovie",83],["vembed",90]]);

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
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( needle === '' && delay === undefined ) {
                safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
                return Reflect.apply(target, thisArg, args);
            }
            let defuse;
            if ( needle !== '' ) {
                defuse = reNeedle.test(a) !== needleNot;
            }
            if ( defuse !== false && delay !== undefined ) {
                defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
            }
            if ( defuse ) {
                args[0] = function(){};
                safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
            }
            return Reflect.apply(target, thisArg, args);
        },
        get(target, prop, receiver) {
            if ( prop === 'toString' ) {
                return target.toString.bind(target);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
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
