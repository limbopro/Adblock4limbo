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

const argsList = [["adsbygoogle","2000"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["adsbygoogle"],["__ext_loaded"],["slideout"],["modal"],["offsetHeight"],["adblock"],["0x"],["","7000"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"]];

const hostnamesMap = new Map([["dragcave.net",0],["notificationsounds.com",0],["tweaking4all.com",0],["evworld.com",1],["columbiaspectator.com",1],["99bitcoins.com",2],["myfxbook.com",3],["hqq.tv",4],["mediafire.com",5],["webcodegeeks.com",6],["books-world.net",7],["pc3mag.com",7],["opedge.com",8],["bronze-bravery.com",8],["ultimate-bravery.net",8],["htmlreference.io",8],["short-story.net",8],["sbenny.com",8],["fabricjs.com",9],["wildstarlogs.com",10],["boerse-express.com",10],["bucketpages.com",11],["steptalk.org",12],["numberempire.com",13],["howjsay.com",14],["cagesideseats.com",14],["vpnmentor.com",15],["tomshw.it",15],["wizcase.com",15],["portableapps.com",16],["reviewmeta.com",16],["heroesneverdie.com",17],["curbed.com",17],["eater.com",17],["funnyordie.com",17],["mmafighting.com",17],["mmamania.com",17],["polygon.com",17],["racked.com",17],["riftherald.com",17],["sbnation.com",17],["theverge.com",17],["vox.com",17],["twinkietown.com",17],["addons.opera.com",18],["ruwix.com",19],["zulily.com",20],["rp5.by",21],["turbolab.it",22],["9xbuddy.com",23],["zerogpt.net",23],["lookmovie.ag",24],["lifo.gr",25],["xe.gr",26],["jsfiddle.net",26],["liverpool.no",27],["fotor.com",27],["playbill.com",27],["xxxonlinegames.com",27],["olarila.com",27],["fairyabc.com",28],["asheville.com",28],["mobilarena.hu",29],["aniwave.to",[29,86]],["bflix.io",29],["f2movies.ru",29],["movies2watch.ru",29],["putlockernew.vc",29],["swatchseries.ru",29],["vidplay.site",[29,86]],["vidstream.pro",29],["mcloud.to",29],["myflixerz.to",29],["gamepod.hu",30],["itcafe.hu",30],["prohardver.hu",30],["minecraftforge.net",31],["theherald-news.com",32],["keybr.com",34],["searchenginejournal.com",35],["mocospace.com",36],["karamellstore.com.br",37],["mdlinx.com",38],["infoplease.com",38],["htforum.net",38],["underconsideration.com",39],["foreignaffairs.com",40],["dxmaps.com",41],["photoshop-online.biz",42],["ukworkshop.co.uk",42],["endorfinese.com.br",42],["segnidalcielo.it",42],["2iptv.com",42],["deezer.com",43],["handball-world.news",44],["mobiflip.de",44],["titanic-magazin.de",44],["mimikama.org",44],["langweiledich.net",44],["der-postillon.com",44],["perlentaucher.de",44],["lwlies.com",44],["serieslyawesome.tv",44],["critic.de",44],["mediotejo.net",44],["nahrungsmittel-intoleranz.com",44],["madeinbocholt.de",44],["goodnews-magazin.de",44],["zwei-euro.com",44],["affiliate.fc2.com",45],["4x4earth.com",46],["diffchecker.com",47],["malekal.com",48],["audiostereo.pl",48],["guides4gamers.com",49],["polyflore.net",50],["icy-veins.com",51],["cpuid.com",52],["webcamtaxi.com",53],["dreamstime.com",54],["megapixl.com",55],["cissamagazine.com.br",56],["utour.me",57],["fosspost.org",58],["2embed.ru",59],["theepochtimes.com",60],["xtv.cz",61],["drawasaurus.org",62],["katholisches.info",63],["hollywoodmask.com",63],["streaminglearningcenter.com",64],["prepostseo.com",65],["tiermaker.com",66],["hqq.to",67],["zefoy.com",67],["tuborstb.co",67],["emturbovid.com",67],["shopomo.co.uk",68],["techus.website",68],["criticalthinking.org",69],["elitepvpers.com",70],["geeksforgeeks.org",[71,72]],["fnbrjp.com",73],["moviepl.xyz",74],["leekduck.com",75],["aberdeennews.com",76],["alamogordonews.com",76],["amarillo.com",76],["amestrib.com",76],["app.com",76],["argusleader.com",76],["augustachronicle.com",76],["azcentral.com",76],["battlecreekenquirer.com",76],["beaconjournal.com",76],["blueridgenow.com",76],["buckscountycouriertimes.com",76],["bucyrustelegraphforum.com",76],["burlingtoncountytimes.com",76],["burlingtonfreepress.com",76],["caller.com",76],["cantondailyledger.com",76],["cantonrep.com",76],["capecodtimes.com",76],["cheboygannews.com",76],["chieftain.com",76],["chillicothegazette.com",76],["cincinnati.com",76],["citizen-times.com",76],["cjonline.com",76],["clarionledger.com",76],["coloradoan.com",76],["columbiadailyherald.com",76],["columbiatribune.com",76],["commercialappeal.com",76],["coshoctontribune.com",76],["courier-journal.com",76],["courier-tribune.com",76],["courierpostonline.com",76],["courierpress.com",76],["currentargus.com",76],["daily-jeff.com",76],["daily-times.com",76],["dailyamerican.com",76],["dailycomet.com",76],["dailycommercial.com",76],["dailyrecord.com",76],["dailyworld.com",76],["delawareonline.com",76],["delmarvanow.com",76],["demingheadlight.com",76],["democratandchronicle.com",76],["desertsun.com",76],["desmoinesregister.com",76],["devilslakejournal.com",76],["dispatch.com",76],["dnj.com",76],["ellwoodcityledger.com",76],["elpasotimes.com",76],["enterprisenews.com",76],["eveningsun.com",76],["eveningtribune.com",76],["examiner-enterprise.com",76],["fayobserver.com",76],["fdlreporter.com",76],["floridatoday.com",76],["fosters.com",76],["freep.com",76],["gadsdentimes.com",76],["gainesville.com",76],["galesburg.com",76],["gastongazette.com",76],["goerie.com",76],["gosanangelo.com",76],["goupstate.com",76],["greatfallstribune.com",76],["greenbaypressgazette.com",76],["greenvilleonline.com",76],["hattiesburgamerican.com",76],["heraldmailmedia.com",76],["heraldnews.com",76],["heraldtribune.com",76],["hillsdale.net",76],["hollandsentinel.com",76],["hoosiertimes.com",76],["houmatoday.com",76],["htrnews.com",76],["hutchnews.com",76],["indeonline.com",76],["independentmail.com",76],["indystar.com",76],["ithacajournal.com",76],["jacksonsun.com",76],["jacksonville.com",76],["jconline.com",76],["jdnews.com",76],["journalstandard.com",76],["jsonline.com",76],["kinston.com",76],["kitsapsun.com",76],["knoxnews.com",76],["lancastereaglegazette.com",76],["lansingstatejournal.com",76],["lcsun-news.com",76],["ldnews.com",76],["lenconnect.com",76],["lincolncourier.com",76],["livingstondaily.com",76],["lohud.com",76],["lubbockonline.com",76],["mansfieldnewsjournal.com",76],["marionstar.com",76],["marshfieldnewsherald.com",76],["mcdonoughvoice.com",76],["metrowestdailynews.com",76],["milforddailynews.com",76],["monroenews.com",76],["montgomeryadvertiser.com",76],["mpnnow.com",76],["mycentraljersey.com",76],["naplesnews.com",76],["newarkadvocate.com",76],["newbernsj.com",76],["newportri.com",76],["news-journalonline.com",76],["news-leader.com",76],["news-press.com",76],["newschief.com",76],["newsherald.com",76],["newsleader.com",76],["njherald.com",76],["northjersey.com",76],["norwichbulletin.com",76],["nwfdailynews.com",76],["oakridger.com",76],["ocala.com",76],["oklahoman.com",76],["onlineathens.com",76],["pal-item.com",76],["palmbeachdailynews.com",76],["palmbeachpost.com",76],["patriotledger.com",76],["pekintimes.com",76],["petoskeynews.com",76],["pjstar.com",76],["pnj.com",76],["poconorecord.com",76],["pontiacdailyleader.com",76],["portclintonnewsherald.com",76],["postcrescent.com",76],["poughkeepsiejournal.com",76],["press-citizen.com",76],["pressconnects.com",76],["progress-index.com",76],["providencejournal.com",76],["publicopiniononline.com",76],["record-courier.com",76],["recordnet.com",76],["recordonline.com",76],["redding.com",76],["registerguard.com",76],["reporter-times.com",76],["reporternews.com",76],["rgj.com",76],["rrstar.com",76],["ruidosonews.com",76],["salina.com",76],["savannahnow.com",76],["scsun-news.com",76],["sctimes.com",76],["seacoastonline.com",76],["sheboyganpress.com",76],["shelbystar.com",76],["shreveporttimes.com",76],["sj-r.com",76],["sooeveningnews.com",76],["southbendtribune.com",76],["southcoasttoday.com",76],["starcourier.com",76],["stargazette.com",76],["starnewsonline.com",76],["statesman.com",76],["statesmanjournal.com",76],["staugustine.com",76],["stevenspointjournal.com",76],["sturgisjournal.com",76],["swtimes.com",76],["tallahassee.com",76],["tauntongazette.com",76],["tcpalm.com",76],["telegram.com",76],["tennessean.com",76],["the-daily-record.com",76],["the-dispatch.com",76],["the-leader.com",76],["the-review.com",76],["theadvertiser.com",76],["thecalifornian.com",76],["thedailyjournal.com",76],["thedailyreporter.com",76],["thegardnernews.com",76],["thegleaner.com",76],["thehawkeye.com",76],["theintell.com",76],["theleafchronicle.com",76],["theledger.com",76],["thenews-messenger.com",76],["thenewsstar.com",76],["thenorthwestern.com",76],["thepublicopinion.com",76],["therecordherald.com",76],["thespectrum.com",76],["thestarpress.com",76],["thetimesherald.com",76],["thetimesnews.com",76],["thetowntalk.com",76],["times-gazette.com",76],["timesonline.com",76],["timesrecordnews.com",76],["timesreporter.com",76],["timestelegram.com",76],["tmnews.com",76],["tricountyindependent.com",76],["tuscaloosanews.com",76],["usatoday.com",76],["uticaod.com",76],["vcstar.com",76],["visaliatimesdelta.com",76],["vvdailypress.com",76],["wausaudailyherald.com",76],["wisconsinrapidstribune.com",76],["ydr.com",76],["zanesvilletimesrecorder.com",76],["craftpip.github.io",77],["pixwox.com",78],["sflix.to",79],["thizissam.in",80],["ikorektor.pl",81],["telenovelas-turcas.com.es",82],["goldenstateofmind.com",83],["neoseeker.com",84],["tumblr.com",85],["animesuge.to",86],["fmoviesz.to",86],["hdtoday.so",86],["hurawatch.bz",86],["galinos.gr",87],["bluesnews.com",88],["oceanplay.org",89]]);

const entitiesMap = new Map([["flixhq",[29,86]],["fmovies",29],["fmoviesz",29],["libgen",33],["123movies",59],["solarmovie",82]]);

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
