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

const argsList = [["show-login-layer-article"],["adsbygoogle","2000"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["adsbygoogle"],["__ext_loaded"],["slideout"],["AdBlocker"],["modal"],["offsetHeight"],["adblock"],["0x"],["","7000"],["body"],["null"],["appendMessage"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["steady-adblock"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],["SignUPPopup_load","5000"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["Delay"],["$"],["onscroll","5500"],["login","5000"],["広告"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"]];

const hostnamesMap = new Map([["telecom.economictimes.indiatimes.com",0],["dragcave.net",1],["notificationsounds.com",1],["tweaking4all.com",1],["evworld.com",2],["columbiaspectator.com",2],["99bitcoins.com",3],["myfxbook.com",4],["hqq.tv",5],["mediafire.com",6],["webcodegeeks.com",7],["books-world.net",8],["pc3mag.com",8],["opedge.com",9],["bronze-bravery.com",9],["ultimate-bravery.net",9],["htmlreference.io",9],["short-story.net",9],["sbenny.com",9],["fabricjs.com",10],["wildstarlogs.com",11],["boerse-express.com",11],["bucketpages.com",12],["steptalk.org",13],["numberempire.com",14],["howjsay.com",15],["cagesideseats.com",15],["vpnmentor.com",16],["tomshw.it",16],["wizcase.com",16],["portableapps.com",17],["reviewmeta.com",17],["heroesneverdie.com",18],["curbed.com",18],["eater.com",18],["funnyordie.com",18],["mmafighting.com",18],["mmamania.com",18],["polygon.com",18],["racked.com",18],["riftherald.com",18],["sbnation.com",18],["theverge.com",18],["vox.com",18],["twinkietown.com",18],["addons.opera.com",19],["ruwix.com",20],["zulily.com",21],["rp5.by",22],["turbolab.it",23],["9xbuddy.com",24],["zerogpt.net",24],["lookmovie.ag",25],["lifo.gr",26],["watson.de",27],["watson.ch",27],["xe.gr",28],["jsfiddle.net",28],["liverpool.no",29],["fotor.com",29],["playbill.com",29],["xxxonlinegames.com",29],["olarila.com",29],["fairyabc.com",30],["asheville.com",30],["mobilarena.hu",31],["myflixerz.to",31],["gamepod.hu",32],["itcafe.hu",32],["prohardver.hu",32],["minecraftforge.net",33],["theherald-news.com",34],["keybr.com",36],["searchenginejournal.com",37],["mocospace.com",38],["karamellstore.com.br",39],["mdlinx.com",40],["infoplease.com",40],["htforum.net",40],["underconsideration.com",41],["foreignaffairs.com",42],["dxmaps.com",43],["photoshop-online.biz",44],["ukworkshop.co.uk",44],["endorfinese.com.br",44],["segnidalcielo.it",44],["2iptv.com",44],["deezer.com",45],["handball-world.news",46],["mobiflip.de",46],["titanic-magazin.de",46],["mimikama.org",46],["langweiledich.net",46],["der-postillon.com",46],["perlentaucher.de",46],["lwlies.com",46],["serieslyawesome.tv",46],["critic.de",46],["mediotejo.net",46],["nahrungsmittel-intoleranz.com",46],["madeinbocholt.de",46],["goodnews-magazin.de",46],["affiliate.fc2.com",47],["4x4earth.com",48],["diffchecker.com",49],["malekal.com",50],["audiostereo.pl",50],["guides4gamers.com",51],["polyflore.net",52],["icy-veins.com",53],["cpuid.com",54],["webcamtaxi.com",55],["dreamstime.com",56],["megapixl.com",57],["cissamagazine.com.br",58],["utour.me",59],["fosspost.org",60],["2embed.ru",61],["theepochtimes.com",62],["xtv.cz",63],["drawasaurus.org",64],["katholisches.info",65],["hollywoodmask.com",65],["streaminglearningcenter.com",66],["prepostseo.com",67],["tiermaker.com",68],["hqq.to",69],["zefoy.com",69],["tuborstb.co",69],["emturbovid.com",69],["anime3s.com",69],["animet1.net",69],["shopomo.co.uk",70],["techus.website",70],["criticalthinking.org",71],["zwei-euro.com",72],["elitepvpers.com",73],["geeksforgeeks.org",[74,75]],["fnbrjp.com",76],["moviepl.xyz",77],["leekduck.com",78],["aberdeennews.com",79],["alamogordonews.com",79],["amarillo.com",79],["amestrib.com",79],["app.com",79],["argusleader.com",79],["augustachronicle.com",79],["azcentral.com",79],["battlecreekenquirer.com",79],["beaconjournal.com",79],["blueridgenow.com",79],["buckscountycouriertimes.com",79],["bucyrustelegraphforum.com",79],["burlingtoncountytimes.com",79],["burlingtonfreepress.com",79],["caller.com",79],["cantondailyledger.com",79],["cantonrep.com",79],["capecodtimes.com",79],["cheboygannews.com",79],["chieftain.com",79],["chillicothegazette.com",79],["cincinnati.com",79],["citizen-times.com",79],["cjonline.com",79],["clarionledger.com",79],["coloradoan.com",79],["columbiadailyherald.com",79],["columbiatribune.com",79],["commercialappeal.com",79],["coshoctontribune.com",79],["courier-journal.com",79],["courier-tribune.com",79],["courierpostonline.com",79],["courierpress.com",79],["currentargus.com",79],["daily-jeff.com",79],["daily-times.com",79],["dailyamerican.com",79],["dailycomet.com",79],["dailycommercial.com",79],["dailyrecord.com",79],["dailyworld.com",79],["delawareonline.com",79],["delmarvanow.com",79],["demingheadlight.com",79],["democratandchronicle.com",79],["desertsun.com",79],["desmoinesregister.com",79],["devilslakejournal.com",79],["dispatch.com",79],["dnj.com",79],["ellwoodcityledger.com",79],["elpasotimes.com",79],["enterprisenews.com",79],["eveningsun.com",79],["eveningtribune.com",79],["examiner-enterprise.com",79],["fayobserver.com",79],["fdlreporter.com",79],["floridatoday.com",79],["fosters.com",79],["freep.com",79],["gadsdentimes.com",79],["gainesville.com",79],["galesburg.com",79],["gastongazette.com",79],["goerie.com",79],["gosanangelo.com",79],["goupstate.com",79],["greatfallstribune.com",79],["greenbaypressgazette.com",79],["greenvilleonline.com",79],["hattiesburgamerican.com",79],["heraldmailmedia.com",79],["heraldnews.com",79],["heraldtribune.com",79],["hillsdale.net",79],["hollandsentinel.com",79],["hoosiertimes.com",79],["houmatoday.com",79],["htrnews.com",79],["hutchnews.com",79],["indeonline.com",79],["independentmail.com",79],["indystar.com",79],["ithacajournal.com",79],["jacksonsun.com",79],["jacksonville.com",79],["jconline.com",79],["jdnews.com",79],["journalstandard.com",79],["jsonline.com",79],["kinston.com",79],["kitsapsun.com",79],["knoxnews.com",79],["lancastereaglegazette.com",79],["lansingstatejournal.com",79],["lcsun-news.com",79],["ldnews.com",79],["lenconnect.com",79],["lincolncourier.com",79],["livingstondaily.com",79],["lohud.com",79],["lubbockonline.com",79],["mansfieldnewsjournal.com",79],["marionstar.com",79],["marshfieldnewsherald.com",79],["mcdonoughvoice.com",79],["metrowestdailynews.com",79],["milforddailynews.com",79],["monroenews.com",79],["montgomeryadvertiser.com",79],["mpnnow.com",79],["mycentraljersey.com",79],["naplesnews.com",79],["newarkadvocate.com",79],["newbernsj.com",79],["newportri.com",79],["news-journalonline.com",79],["news-leader.com",79],["news-press.com",79],["newschief.com",79],["newsherald.com",79],["newsleader.com",79],["njherald.com",79],["northjersey.com",79],["norwichbulletin.com",79],["nwfdailynews.com",79],["oakridger.com",79],["ocala.com",79],["oklahoman.com",79],["onlineathens.com",79],["pal-item.com",79],["palmbeachdailynews.com",79],["palmbeachpost.com",79],["patriotledger.com",79],["pekintimes.com",79],["petoskeynews.com",79],["pjstar.com",79],["pnj.com",79],["poconorecord.com",79],["pontiacdailyleader.com",79],["portclintonnewsherald.com",79],["postcrescent.com",79],["poughkeepsiejournal.com",79],["press-citizen.com",79],["pressconnects.com",79],["progress-index.com",79],["providencejournal.com",79],["publicopiniononline.com",79],["record-courier.com",79],["recordnet.com",79],["recordonline.com",79],["redding.com",79],["registerguard.com",79],["reporter-times.com",79],["reporternews.com",79],["rgj.com",79],["rrstar.com",79],["ruidosonews.com",79],["salina.com",79],["savannahnow.com",79],["scsun-news.com",79],["sctimes.com",79],["seacoastonline.com",79],["sheboyganpress.com",79],["shelbystar.com",79],["shreveporttimes.com",79],["sj-r.com",79],["sooeveningnews.com",79],["southbendtribune.com",79],["southcoasttoday.com",79],["starcourier.com",79],["stargazette.com",79],["starnewsonline.com",79],["statesman.com",79],["statesmanjournal.com",79],["staugustine.com",79],["stevenspointjournal.com",79],["sturgisjournal.com",79],["swtimes.com",79],["tallahassee.com",79],["tauntongazette.com",79],["tcpalm.com",79],["telegram.com",79],["tennessean.com",79],["the-daily-record.com",79],["the-dispatch.com",79],["the-leader.com",79],["the-review.com",79],["theadvertiser.com",79],["thecalifornian.com",79],["thedailyjournal.com",79],["thedailyreporter.com",79],["thegardnernews.com",79],["thegleaner.com",79],["thehawkeye.com",79],["theintell.com",79],["theleafchronicle.com",79],["theledger.com",79],["thenews-messenger.com",79],["thenewsstar.com",79],["thenorthwestern.com",79],["thepublicopinion.com",79],["therecordherald.com",79],["thespectrum.com",79],["thestarpress.com",79],["thetimesherald.com",79],["thetimesnews.com",79],["thetowntalk.com",79],["times-gazette.com",79],["timesonline.com",79],["timesrecordnews.com",79],["timesreporter.com",79],["timestelegram.com",79],["tmnews.com",79],["tricountyindependent.com",79],["tuscaloosanews.com",79],["usatoday.com",79],["uticaod.com",79],["vcstar.com",79],["visaliatimesdelta.com",79],["vvdailypress.com",79],["wausaudailyherald.com",79],["wisconsinrapidstribune.com",79],["ydr.com",79],["zanesvilletimesrecorder.com",79],["craftpip.github.io",80],["pixwox.com",81],["sflix.to",82],["thizissam.in",83],["ikorektor.pl",84],["telenovelas-turcas.com.es",85],["phimfit.com",85],["goldenstateofmind.com",86],["neoseeker.com",87],["tumblr.com",88],["animesuge.to",89],["flixrave.to",89],["hdtoday.so",89],["hurawatch.bz",89],["vidplay.site",89],["vid2faf.site",89],["galinos.gr",90],["bluesnews.com",91],["oceanplay.org",92],["bembed.net",92],["embedv.net",92],["fslinks.org",92],["listeamed.net",92],["v6embed.xyz",92],["vgplayer.xyz",92],["vid-guard.com",92]]);

const entitiesMap = new Map([["libgen",35],["123movies",61],["solarmovie",85],["aniwave",89],["anix",89],["flixhq",89],["vembed",92]]);

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
    proxyApplyFn('setTimeout', function setTimeout(target, thisArg, args) {
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
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    if ( fn.prototype && fn.prototype.constructor === fn ) {
        context[prop] = new Proxy(fn, {
            construct: handler,
            get(target, prop, receiver) {
                if ( prop === 'toString' ) { return toString; }
                return Reflect.get(target, prop, receiver);
            },
        });
        return (...args) => Reflect.construct(...args);
    }
    context[prop] = new Proxy(fn, {
        apply: handler,
        get(target, prop, receiver) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop, receiver);
        },
    });
    return (...args) => Reflect.apply(...args);
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
