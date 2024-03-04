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

const argsList = [["SMOKESCREEN"],["mdp-deblocker"],[".first().height()"],["type","1000"],["showAd"],["chkADB"],["adblock"],["$(\"ins\").css"],["/0===.\\.offsetHeight/"],["adBlockEnabled","3000"],["wpcom_ad_wrap"],["#rbm_block_active"],["/offsetHeight[\\s\\S]*?offsetWidth[\\s\\S]*?\\.parentNode\\.removeChild/"],["white-list us"],["/function\\(\\)\\{var.[a-z]\\=[a-z]\\.getElementById/","3000"],["google_ads_frame"],["AdBlockerCheck"],["adsbygoogle"],["広告"],["test.offsetHeight"],["()=>","5000"],["if($(\"ins\").css"],[".offsetHeight === 0"],["\"none\"===window.getComputedStyle"],["comBlocked"],["showads","7000"],[".height() == 0"],["appendMessage"],["adblockNotif"],["testAdBlock"],["function() { if ((($('.y_banner #b0').length < 1","2000"],["xdBlockEnabled","100"],["bottomad"],["/[a-w0-9]{12,}/"],["showed_system_notice"],["o.customPassLogin()"],["facebook","200"],["shownJoinInModal"],["/autoShow.*localStorage\\.setItem\\(.auto_login_show_count/"],[".login-modal-btn:eq(0)"],["initialisePopupModal"],["mfp_login-register"],["","15000"],["OpenModal(\"popup_warning_modal\")"],["pbAdBlockHooks"],["Cookie.get(\"contribute-modal"],["#modal-id"],["userVisited"],["#PatronModal"],["isshowmodal","3000"],["init_no_delay"],["modalOpen()"],["jQuery.colorbox"],["cd-user-modal"],["advice-popup"],["#send_enquery_popup_load"],["$('.spg-"],["newsletter_show()","2000"],["signupPopup"],["#sign-up-campaign"],["#FloaterModal"],["newsletterModalContent",""],["displayPopup()"],["#IdentifiedPopUpHTML"],["hhModal","5000"],["SignUPPopup_load","5000"],["setPopup"],["mweb_to_app_popup"],["popupObject"],["popup_create_subscribtion"],["newsletter"],["function(){return i(!0)}","3000"],["refreshCount()"],["#newsletter-dialog"],["adsbygoogle","2000"],["checkAdStatus","500"],["ads","2000"],["ThriveGlobal"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["slideout"],["modal"],["offsetHeight"],["0x"],["","7000"],["body"],["null"],["()","5000"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["support-jsfiddle"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"],["pleaseSupportUs"],["nn_mpu1","5000"],["devtool"]];

const hostnamesMap = new Map([["e.mail.ru",0],["octavius.mail.ru",0],["wpnull7.com",1],["xdarom.com",1],["elitepvpers.com",[2,141]],["online2pdf.com",3],["myfxbook.com",[4,78]],["printablecreative.com",5],["strategium.ru",6],["bitcompiler.com",6],["penize.cz",6],["tvfeed.in",6],["libgen.rocks",7],["thecrimson.com",8],["tumblr.com",[9,156]],["ghxi.com",10],["andrialive.it",11],["lavocedimanduria.it",11],["gioialive.it",11],["terlizzilive.it",11],["as.com",12],["foxnews.com",12],["foxbusiness.com",12],["babycenter.com",13],["daz3d.ru",14],["dragcave.net",[15,74]],["dumpert.nl",16],["erfahrungen.com",17],["howjsay.com",[17,89]],["reviewmeta.com",[17,91]],["testserver.pro",17],["fnbrjp.com",18],["imtranslator.net",19],["psychic.de",19],["keybr.com",[20,106]],["libgen.lc",21],["maidenhead-advertiser.co.uk",22],["mainpost.de",23],["mapa-turystyczna.pl",24],["mc-at.org",25],["motoroids.com",26],["ogznet.com",27],["postimees.ee",28],["salidzini.lv",29],["savevideo.me",30],["seomagnifier.com",31],["whatfontis.com",32],["online-fix.me",33],["macked.app",34],["tieba.baidu.com",35],["latestdeals.co.uk",36],["workspacetips.io",37],["haokan.baidu.com",38],["geeksforgeeks.org",[39,142,143]],["pianistmagazine.com",40],["forvo.com",41],["perfecthealthclinic.com",42],["linkneverdie.net",43],["desktopnexus.com",44],["themoscowtimes.com",45],["bilety24.uk",46],["oneesports.vn",47],["koronawirusunas.pl",48],["webukatu.com",49],["1000.menu",50],["arcserve.com",51],["cdotrends.com",52],["mondaq.com",53],["princetonreview.com",54],["medsurgeindia.com",55],["vegasslotsonline.com",56],["doorofperception.com",57],["edutopia.org",58],["plugin-alliance.com",59],["arbeitsrecht.org",60],["villeroy-boch.de",61],["downloadfreecourse.com",62],["indiamart.com",63],["afitness.ru",64],["dreamstime.com",65],["rzetelnafirma.pl",66],["tiki.vn",67],["g-school.co.kr",68],["zumub.com",69],["aritzia.com",70],["goal.com",71],["letpub.com.cn",72],["mecze.com",73],["notificationsounds.com",74],["tweaking4all.com",74],["relyonhorror.com",75],["evworld.com",76],["columbiaspectator.com",76],["99bitcoins.com",77],["hqq.tv",79],["mediafire.com",80],["webcodegeeks.com",81],["books-world.net",82],["pc3mag.com",82],["opedge.com",83],["bronze-bravery.com",83],["ultimate-bravery.net",83],["htmlreference.io",83],["short-story.net",83],["sbenny.com",83],["fabricjs.com",84],["wildstarlogs.com",85],["boerse-express.com",85],["bucketpages.com",86],["steptalk.org",87],["numberempire.com",88],["cagesideseats.com",89],["vpnmentor.com",90],["tomshw.it",90],["wizcase.com",90],["portableapps.com",91],["heroesneverdie.com",92],["curbed.com",92],["eater.com",92],["funnyordie.com",92],["mmafighting.com",92],["mmamania.com",92],["polygon.com",92],["racked.com",92],["riftherald.com",92],["sbnation.com",92],["theverge.com",92],["vox.com",92],["twinkietown.com",92],["addons.opera.com",93],["ruwix.com",94],["zulily.com",95],["rp5.by",96],["turbolab.it",97],["9xbuddy.com",17],["zerogpt.net",17],["lookmovie.ag",98],["lifo.gr",99],["xe.gr",100],["liverpool.no",101],["fotor.com",101],["playbill.com",101],["xxxonlinegames.com",101],["olarila.com",101],["fairyabc.com",6],["asheville.com",6],["mobilarena.hu",102],["aniwave.to",[102,157]],["bflix.io",102],["f2movies.ru",102],["movies2watch.ru",102],["putlockernew.vc",102],["swatchseries.ru",102],["vidplay.site",[102,157]],["vidstream.pro",102],["mcloud.to",102],["gamepod.hu",103],["itcafe.hu",103],["prohardver.hu",103],["minecraftforge.net",104],["theherald-news.com",105],["searchenginejournal.com",107],["mocospace.com",108],["karamellstore.com.br",109],["mdlinx.com",110],["infoplease.com",110],["htforum.net",110],["underconsideration.com",111],["foreignaffairs.com",112],["dxmaps.com",113],["photoshop-online.biz",114],["ukworkshop.co.uk",114],["endorfinese.com.br",114],["segnidalcielo.it",114],["2iptv.com",114],["deezer.com",115],["handball-world.news",116],["mobiflip.de",116],["titanic-magazin.de",116],["mimikama.org",116],["langweiledich.net",116],["der-postillon.com",116],["perlentaucher.de",116],["lwlies.com",116],["serieslyawesome.tv",116],["critic.de",116],["mediotejo.net",116],["nahrungsmittel-intoleranz.com",116],["madeinbocholt.de",116],["zwei-euro.com",116],["affiliate.fc2.com",117],["4x4earth.com",118],["diffchecker.com",119],["malekal.com",120],["audiostereo.pl",120],["guides4gamers.com",121],["polyflore.net",122],["icy-veins.com",123],["cpuid.com",124],["webcamtaxi.com",125],["megapixl.com",126],["cissamagazine.com.br",127],["utour.me",128],["fosspost.org",129],["2embed.ru",130],["theepochtimes.com",131],["xtv.cz",132],["drawasaurus.org",133],["katholisches.info",134],["hollywoodmask.com",134],["streaminglearningcenter.com",135],["prepostseo.com",136],["tiermaker.com",137],["hqq.to",138],["zefoy.com",138],["tuborstb.co",138],["emturbovid.com",138],["shopomo.co.uk",139],["techus.website",139],["criticalthinking.org",140],["moviepl.xyz",144],["leekduck.com",145],["aberdeennews.com",146],["alamogordonews.com",146],["amarillo.com",146],["amestrib.com",146],["app.com",146],["argusleader.com",146],["augustachronicle.com",146],["azcentral.com",146],["battlecreekenquirer.com",146],["beaconjournal.com",146],["blueridgenow.com",146],["buckscountycouriertimes.com",146],["bucyrustelegraphforum.com",146],["burlingtoncountytimes.com",146],["burlingtonfreepress.com",146],["caller.com",146],["cantondailyledger.com",146],["cantonrep.com",146],["capecodtimes.com",146],["cheboygannews.com",146],["chieftain.com",146],["chillicothegazette.com",146],["cincinnati.com",146],["citizen-times.com",146],["cjonline.com",146],["clarionledger.com",146],["coloradoan.com",146],["columbiadailyherald.com",146],["columbiatribune.com",146],["commercialappeal.com",146],["coshoctontribune.com",146],["courier-journal.com",146],["courier-tribune.com",146],["courierpostonline.com",146],["courierpress.com",146],["currentargus.com",146],["daily-jeff.com",146],["daily-times.com",146],["dailyamerican.com",146],["dailycomet.com",146],["dailycommercial.com",146],["dailyrecord.com",146],["dailyworld.com",146],["delawareonline.com",146],["delmarvanow.com",146],["demingheadlight.com",146],["democratandchronicle.com",146],["desertsun.com",146],["desmoinesregister.com",146],["devilslakejournal.com",146],["dispatch.com",146],["dnj.com",146],["ellwoodcityledger.com",146],["elpasotimes.com",146],["enterprisenews.com",146],["eveningsun.com",146],["eveningtribune.com",146],["examiner-enterprise.com",146],["fayobserver.com",146],["fdlreporter.com",146],["floridatoday.com",146],["fosters.com",146],["freep.com",146],["gadsdentimes.com",146],["gainesville.com",146],["galesburg.com",146],["gastongazette.com",146],["goerie.com",146],["gosanangelo.com",146],["goupstate.com",146],["greatfallstribune.com",146],["greenbaypressgazette.com",146],["greenvilleonline.com",146],["hattiesburgamerican.com",146],["heraldmailmedia.com",146],["heraldnews.com",146],["heraldtribune.com",146],["hillsdale.net",146],["hollandsentinel.com",146],["hoosiertimes.com",146],["houmatoday.com",146],["htrnews.com",146],["hutchnews.com",146],["indeonline.com",146],["independentmail.com",146],["indystar.com",146],["ithacajournal.com",146],["jacksonsun.com",146],["jacksonville.com",146],["jconline.com",146],["jdnews.com",146],["journalstandard.com",146],["jsonline.com",146],["kinston.com",146],["kitsapsun.com",146],["knoxnews.com",146],["lancastereaglegazette.com",146],["lansingstatejournal.com",146],["lcsun-news.com",146],["ldnews.com",146],["lenconnect.com",146],["lincolncourier.com",146],["livingstondaily.com",146],["lohud.com",146],["lubbockonline.com",146],["mansfieldnewsjournal.com",146],["marionstar.com",146],["marshfieldnewsherald.com",146],["mcdonoughvoice.com",146],["metrowestdailynews.com",146],["milforddailynews.com",146],["monroenews.com",146],["montgomeryadvertiser.com",146],["mpnnow.com",146],["mycentraljersey.com",146],["naplesnews.com",146],["newarkadvocate.com",146],["newbernsj.com",146],["newportri.com",146],["news-journalonline.com",146],["news-leader.com",146],["news-press.com",146],["newschief.com",146],["newsherald.com",146],["newsleader.com",146],["njherald.com",146],["northjersey.com",146],["norwichbulletin.com",146],["nwfdailynews.com",146],["oakridger.com",146],["ocala.com",146],["oklahoman.com",146],["onlineathens.com",146],["pal-item.com",146],["palmbeachdailynews.com",146],["palmbeachpost.com",146],["patriotledger.com",146],["pekintimes.com",146],["petoskeynews.com",146],["pjstar.com",146],["pnj.com",146],["poconorecord.com",146],["pontiacdailyleader.com",146],["portclintonnewsherald.com",146],["postcrescent.com",146],["poughkeepsiejournal.com",146],["press-citizen.com",146],["pressconnects.com",146],["progress-index.com",146],["providencejournal.com",146],["publicopiniononline.com",146],["record-courier.com",146],["recordnet.com",146],["recordonline.com",146],["redding.com",146],["registerguard.com",146],["reporter-times.com",146],["reporternews.com",146],["rgj.com",146],["rrstar.com",146],["ruidosonews.com",146],["salina.com",146],["savannahnow.com",146],["scsun-news.com",146],["sctimes.com",146],["seacoastonline.com",146],["sheboyganpress.com",146],["shelbystar.com",146],["shreveporttimes.com",146],["sj-r.com",146],["sooeveningnews.com",146],["southbendtribune.com",146],["southcoasttoday.com",146],["starcourier.com",146],["stargazette.com",146],["starnewsonline.com",146],["statesman.com",146],["statesmanjournal.com",146],["staugustine.com",146],["stevenspointjournal.com",146],["sturgisjournal.com",146],["swtimes.com",146],["tallahassee.com",146],["tauntongazette.com",146],["tcpalm.com",146],["telegram.com",146],["tennessean.com",146],["the-daily-record.com",146],["the-dispatch.com",146],["the-leader.com",146],["the-review.com",146],["theadvertiser.com",146],["thecalifornian.com",146],["thedailyjournal.com",146],["thedailyreporter.com",146],["thegardnernews.com",146],["thegleaner.com",146],["thehawkeye.com",146],["theintell.com",146],["theleafchronicle.com",146],["theledger.com",146],["thenews-messenger.com",146],["thenewsstar.com",146],["thenorthwestern.com",146],["thepublicopinion.com",146],["therecordherald.com",146],["thespectrum.com",146],["thestarpress.com",146],["thetimesherald.com",146],["thetimesnews.com",146],["thetowntalk.com",146],["times-gazette.com",146],["timesonline.com",146],["timesrecordnews.com",146],["timesreporter.com",146],["timestelegram.com",146],["tmnews.com",146],["tricountyindependent.com",146],["tuscaloosanews.com",146],["usatoday.com",146],["uticaod.com",146],["vcstar.com",146],["visaliatimesdelta.com",146],["vvdailypress.com",146],["wausaudailyherald.com",146],["wisconsinrapidstribune.com",146],["ydr.com",146],["zanesvilletimesrecorder.com",146],["craftpip.github.io",147],["pixwox.com",148],["sflix.to",149],["thizissam.in",150],["jsfiddle.net",151],["ikorektor.pl",152],["telenovelas-turcas.com.es",153],["goldenstateofmind.com",154],["neoseeker.com",155],["animesuge.to",157],["fmoviesz.to",157],["hdtoday.so",157],["hurawatch.bz",157],["galinos.gr",158],["bluesnews.com",159],["oceanplay.org",160]]);

const entitiesMap = new Map([["flixhq",[102,157]],["fmovies",102],["fmoviesz",102],["libgen",27],["123movies",130],["solarmovie",153]]);

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
