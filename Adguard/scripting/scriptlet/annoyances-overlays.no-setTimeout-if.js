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

const argsList = [["SMOKESCREEN"],["mdp-deblocker"],[".first().height()"],["type","1000"],["showAd"],["chkADB"],["adblock"],["$(\"ins\").css"],["/0===.\\.offsetHeight/"],["adBlockEnabled","3000"],["wpcom_ad_wrap"],["#rbm_block_active"],["/offsetHeight[\\s\\S]*?offsetWidth[\\s\\S]*?\\.parentNode\\.removeChild/"],["white-list us"],["blockerDetected"],["/function\\(\\)\\{var.[a-z]\\=[a-z]\\.getElementById/","3000"],["google_ads_frame"],["AdBlockerCheck"],["adsbygoogle"],["広告"],["test.offsetHeight"],["()=>","5000"],["if($(\"ins\").css"],[".offsetHeight === 0"],["\"none\"===window.getComputedStyle"],["comBlocked"],["showads","7000"],[".height() == 0"],["appendMessage"],["adblockNotif"],["testAdBlock"],["xdBlockEnabled","100"],["bottomad"],["/[a-w0-9]{12,}/"],["o.customPassLogin()"],["facebook","200"],["shownJoinInModal"],["/autoShow.*localStorage\\.setItem\\(.auto_login_show_count/"],[".login-modal-btn:eq(0)"],["initialisePopupModal"],["mfp_login-register"],["","15000"],["OpenModal(\"popup_warning_modal\")"],["pbAdBlockHooks"],["Cookie.get(\"contribute-modal"],["#modal-id"],["userVisited"],["#PatronModal"],["isshowmodal","3000"],["init_no_delay"],["modalOpen()"],["jQuery.colorbox"],["cd-user-modal"],["advice-popup"],["#send_enquery_popup_load"],["$('.spg-"],["newsletter_show()","2000"],["signupPopup"],["#sign-up-campaign"],["#FloaterModal"],["newsletterModalContent",""],["displayPopup()"],["#IdentifiedPopUpHTML"],["hhModal","5000"],["SignUPPopup_load","5000"],["setPopup"],["mweb_to_app_popup"],["popupObject"],["popup_create_subscribtion"],["newsletter"],["function(){return i(!0)}","3000"],["refreshCount()"],["#newsletter-dialog"],["adsbygoogle","2000"],["checkAdStatus","500"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["modal"],["offsetHeight"],["0x"],["","7000"],["body"],["null"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["support-jsfiddle"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"]];

const hostnamesMap = new Map([["e.mail.ru",0],["octavius.mail.ru",0],["wpnull7.com",1],["xdarom.com",1],["elitepvpers.com",[2,140]],["online2pdf.com",3],["myfxbook.com",[4,77]],["printablecreative.com",5],["strategium.ru",6],["bitcompiler.com",6],["penize.cz",6],["tvfeed.in",6],["libgen.rocks",7],["thecrimson.com",8],["tumblr.com",[9,155]],["ghxi.com",10],["andrialive.it",11],["lavocedimanduria.it",11],["gioialive.it",11],["terlizzilive.it",11],["as.com",12],["foxnews.com",12],["foxbusiness.com",12],["babycenter.com",13],["cnbeta.com",14],["daz3d.ru",15],["dragcave.net",[16,73]],["dumpert.nl",17],["erfahrungen.com",18],["howjsay.com",[18,88]],["reviewmeta.com",[18,90]],["testserver.pro",18],["fnbrjp.com",19],["imtranslator.net",20],["psychic.de",20],["keybr.com",[21,105]],["libgen.lc",22],["maidenhead-advertiser.co.uk",23],["mainpost.de",24],["mapa-turystyczna.pl",25],["mc-at.org",26],["motoroids.com",27],["ogznet.com",28],["postimees.ee",29],["salidzini.lv",30],["seomagnifier.com",31],["whatfontis.com",32],["online-fix.me",33],["tieba.baidu.com",34],["latestdeals.co.uk",35],["workspacetips.io",36],["haokan.baidu.com",37],["geeksforgeeks.org",[38,141,142]],["pianistmagazine.com",39],["forvo.com",40],["perfecthealthclinic.com",41],["linkneverdie.net",42],["desktopnexus.com",43],["themoscowtimes.com",44],["bilety24.uk",45],["oneesports.vn",46],["koronawirusunas.pl",47],["webukatu.com",48],["1000.menu",49],["arcserve.com",50],["cdotrends.com",51],["mondaq.com",52],["princetonreview.com",53],["medsurgeindia.com",54],["vegasslotsonline.com",55],["doorofperception.com",56],["edutopia.org",57],["plugin-alliance.com",58],["arbeitsrecht.org",59],["villeroy-boch.de",60],["downloadfreecourse.com",61],["indiamart.com",62],["afitness.ru",63],["dreamstime.com",64],["rzetelnafirma.pl",65],["tiki.vn",66],["g-school.co.kr",67],["zumub.com",68],["aritzia.com",69],["goal.com",70],["letpub.com.cn",71],["mecze.com",72],["relyonhorror.com",74],["evworld.com",75],["columbiaspectator.com",75],["99bitcoins.com",76],["hqq.tv",78],["mediafire.com",79],["webcodegeeks.com",80],["books-world.net",81],["pc3mag.com",81],["opedge.com",82],["bronze-bravery.com",82],["ultimate-bravery.net",82],["htmlreference.io",82],["short-story.net",82],["sbenny.com",82],["fabricjs.com",83],["wildstarlogs.com",84],["boerse-express.com",84],["bucketpages.com",85],["steptalk.org",86],["numberempire.com",87],["cagesideseats.com",88],["vpnmentor.com",89],["tomshw.it",89],["wizcase.com",89],["portableapps.com",90],["heroesneverdie.com",91],["curbed.com",91],["eater.com",91],["funnyordie.com",91],["mmafighting.com",91],["mmamania.com",91],["polygon.com",91],["racked.com",91],["riftherald.com",91],["sbnation.com",91],["theverge.com",91],["vox.com",91],["twinkietown.com",91],["addons.opera.com",92],["ruwix.com",93],["zulily.com",94],["rp5.by",95],["turbolab.it",96],["9xbuddy.com",18],["zerogpt.net",18],["lookmovie.ag",97],["lifo.gr",98],["xe.gr",99],["liverpool.no",100],["fotor.com",100],["playbill.com",100],["xxxonlinegames.com",100],["olarila.com",100],["fairyabc.com",6],["asheville.com",6],["mobilarena.hu",101],["aniwave.to",[101,156]],["bflix.io",101],["f2movies.ru",101],["movies2watch.ru",101],["putlockernew.vc",101],["swatchseries.ru",101],["vidplay.site",[101,156]],["vidstream.pro",101],["mcloud.to",101],["gamepod.hu",102],["itcafe.hu",102],["prohardver.hu",102],["minecraftforge.net",103],["theherald-news.com",104],["animesuge.to",104],["fmoviesz.to",104],["hdtoday.so",104],["hurawatch.bz",104],["searchenginejournal.com",106],["mocospace.com",107],["karamellstore.com.br",108],["mdlinx.com",109],["infoplease.com",109],["htforum.net",109],["underconsideration.com",110],["foreignaffairs.com",111],["dxmaps.com",112],["photoshop-online.biz",113],["ukworkshop.co.uk",113],["endorfinese.com.br",113],["segnidalcielo.it",113],["2iptv.com",113],["deezer.com",114],["handball-world.news",115],["mobiflip.de",115],["titanic-magazin.de",115],["mimikama.org",115],["langweiledich.net",115],["der-postillon.com",115],["perlentaucher.de",115],["lwlies.com",115],["serieslyawesome.tv",115],["critic.de",115],["mediotejo.net",115],["nahrungsmittel-intoleranz.com",115],["madeinbocholt.de",115],["zwei-euro.com",115],["affiliate.fc2.com",116],["4x4earth.com",117],["diffchecker.com",118],["malekal.com",119],["audiostereo.pl",119],["guides4gamers.com",120],["polyflore.net",121],["icy-veins.com",122],["cpuid.com",123],["webcamtaxi.com",124],["megapixl.com",125],["cissamagazine.com.br",126],["utour.me",127],["fosspost.org",128],["2embed.ru",129],["theepochtimes.com",130],["xtv.cz",131],["drawasaurus.org",132],["katholisches.info",133],["hollywoodmask.com",133],["streaminglearningcenter.com",134],["prepostseo.com",135],["tiermaker.com",136],["hqq.to",137],["zefoy.com",137],["tuborstb.co",137],["emturbovid.com",137],["shopomo.co.uk",138],["techus.website",138],["criticalthinking.org",139],["moviepl.xyz",143],["leekduck.com",144],["aberdeennews.com",145],["alamogordonews.com",145],["amarillo.com",145],["amestrib.com",145],["app.com",145],["argusleader.com",145],["augustachronicle.com",145],["azcentral.com",145],["battlecreekenquirer.com",145],["beaconjournal.com",145],["blueridgenow.com",145],["buckscountycouriertimes.com",145],["bucyrustelegraphforum.com",145],["burlingtoncountytimes.com",145],["burlingtonfreepress.com",145],["caller.com",145],["cantondailyledger.com",145],["cantonrep.com",145],["capecodtimes.com",145],["cheboygannews.com",145],["chieftain.com",145],["chillicothegazette.com",145],["cincinnati.com",145],["citizen-times.com",145],["cjonline.com",145],["clarionledger.com",145],["coloradoan.com",145],["columbiadailyherald.com",145],["columbiatribune.com",145],["commercialappeal.com",145],["coshoctontribune.com",145],["courier-journal.com",145],["courier-tribune.com",145],["courierpostonline.com",145],["courierpress.com",145],["currentargus.com",145],["daily-jeff.com",145],["daily-times.com",145],["dailyamerican.com",145],["dailycomet.com",145],["dailycommercial.com",145],["dailyrecord.com",145],["dailyworld.com",145],["delawareonline.com",145],["delmarvanow.com",145],["demingheadlight.com",145],["democratandchronicle.com",145],["desertsun.com",145],["desmoinesregister.com",145],["devilslakejournal.com",145],["dispatch.com",145],["dnj.com",145],["ellwoodcityledger.com",145],["elpasotimes.com",145],["enterprisenews.com",145],["eveningsun.com",145],["eveningtribune.com",145],["examiner-enterprise.com",145],["fayobserver.com",145],["fdlreporter.com",145],["floridatoday.com",145],["fosters.com",145],["freep.com",145],["gadsdentimes.com",145],["gainesville.com",145],["galesburg.com",145],["gastongazette.com",145],["goerie.com",145],["gosanangelo.com",145],["goupstate.com",145],["greatfallstribune.com",145],["greenbaypressgazette.com",145],["greenvilleonline.com",145],["hattiesburgamerican.com",145],["heraldmailmedia.com",145],["heraldnews.com",145],["heraldtribune.com",145],["hillsdale.net",145],["hollandsentinel.com",145],["hoosiertimes.com",145],["houmatoday.com",145],["htrnews.com",145],["hutchnews.com",145],["indeonline.com",145],["independentmail.com",145],["indystar.com",145],["ithacajournal.com",145],["jacksonsun.com",145],["jacksonville.com",145],["jconline.com",145],["jdnews.com",145],["journalstandard.com",145],["jsonline.com",145],["kinston.com",145],["kitsapsun.com",145],["knoxnews.com",145],["lancastereaglegazette.com",145],["lansingstatejournal.com",145],["lcsun-news.com",145],["ldnews.com",145],["lenconnect.com",145],["lincolncourier.com",145],["livingstondaily.com",145],["lohud.com",145],["lubbockonline.com",145],["mansfieldnewsjournal.com",145],["marionstar.com",145],["marshfieldnewsherald.com",145],["mcdonoughvoice.com",145],["metrowestdailynews.com",145],["milforddailynews.com",145],["monroenews.com",145],["montgomeryadvertiser.com",145],["mpnnow.com",145],["mycentraljersey.com",145],["naplesnews.com",145],["newarkadvocate.com",145],["newbernsj.com",145],["newportri.com",145],["news-journalonline.com",145],["news-leader.com",145],["news-press.com",145],["newschief.com",145],["newsherald.com",145],["newsleader.com",145],["njherald.com",145],["northjersey.com",145],["norwichbulletin.com",145],["nwfdailynews.com",145],["oakridger.com",145],["ocala.com",145],["oklahoman.com",145],["onlineathens.com",145],["pal-item.com",145],["palmbeachdailynews.com",145],["palmbeachpost.com",145],["patriotledger.com",145],["pekintimes.com",145],["petoskeynews.com",145],["pjstar.com",145],["pnj.com",145],["poconorecord.com",145],["pontiacdailyleader.com",145],["portclintonnewsherald.com",145],["postcrescent.com",145],["poughkeepsiejournal.com",145],["press-citizen.com",145],["pressconnects.com",145],["progress-index.com",145],["providencejournal.com",145],["publicopiniononline.com",145],["record-courier.com",145],["recordnet.com",145],["recordonline.com",145],["redding.com",145],["registerguard.com",145],["reporter-times.com",145],["reporternews.com",145],["rgj.com",145],["rrstar.com",145],["ruidosonews.com",145],["salina.com",145],["savannahnow.com",145],["scsun-news.com",145],["sctimes.com",145],["seacoastonline.com",145],["sheboyganpress.com",145],["shelbystar.com",145],["shreveporttimes.com",145],["sj-r.com",145],["sooeveningnews.com",145],["southbendtribune.com",145],["southcoasttoday.com",145],["starcourier.com",145],["stargazette.com",145],["starnewsonline.com",145],["statesman.com",145],["statesmanjournal.com",145],["staugustine.com",145],["stevenspointjournal.com",145],["sturgisjournal.com",145],["swtimes.com",145],["tallahassee.com",145],["tauntongazette.com",145],["tcpalm.com",145],["telegram.com",145],["tennessean.com",145],["the-daily-record.com",145],["the-dispatch.com",145],["the-leader.com",145],["the-review.com",145],["theadvertiser.com",145],["thecalifornian.com",145],["thedailyjournal.com",145],["thedailyreporter.com",145],["thegardnernews.com",145],["thegleaner.com",145],["thehawkeye.com",145],["theintell.com",145],["theleafchronicle.com",145],["theledger.com",145],["thenews-messenger.com",145],["thenewsstar.com",145],["thenorthwestern.com",145],["thepublicopinion.com",145],["therecordherald.com",145],["thespectrum.com",145],["thestarpress.com",145],["thetimesherald.com",145],["thetimesnews.com",145],["thetowntalk.com",145],["times-gazette.com",145],["timesonline.com",145],["timesrecordnews.com",145],["timesreporter.com",145],["timestelegram.com",145],["tmnews.com",145],["tricountyindependent.com",145],["tuscaloosanews.com",145],["usatoday.com",145],["uticaod.com",145],["vcstar.com",145],["visaliatimesdelta.com",145],["vvdailypress.com",145],["wausaudailyherald.com",145],["wisconsinrapidstribune.com",145],["ydr.com",145],["zanesvilletimesrecorder.com",145],["craftpip.github.io",146],["pixwox.com",147],["sflix.to",148],["thizissam.in",149],["jsfiddle.net",150],["ikorektor.pl",151],["telenovelas-turcas.com.es",152],["goldenstateofmind.com",153],["neoseeker.com",154],["galinos.gr",157],["bluesnews.com",158],["oceanplay.org",159]]);

const entitiesMap = new Map([["flixhq",[101,156]],["fmovies",101],["fmoviesz",101],["libgen",28],["123movies",129],["solarmovie",152]]);

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
