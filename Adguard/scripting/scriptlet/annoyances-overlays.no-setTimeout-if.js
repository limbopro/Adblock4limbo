/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["SMOKESCREEN"],["mdp-deblocker"],[".first().height()"],["type","1000"],["showAd"],["chkADB"],["adblock"],["$(\"ins\").css"],["/0===.\\.offsetHeight/"],["adBlockEnabled","3000"],["wpcom_ad_wrap"],["#rbm_block_active"],["/offsetHeight[\\s\\S]*?offsetWidth[\\s\\S]*?\\.parentNode\\.removeChild/"],["white-list us"],["blockerDetected"],["/function\\(\\)\\{var.[a-z]\\=[a-z]\\.getElementById/","3000"],["google_ads_frame"],["AdBlockerCheck"],["adsbygoogle"],["広告"],["test.offsetHeight"],["()=>","5000"],["if($(\"ins\").css"],[".offsetHeight === 0"],["\"none\"===window.getComputedStyle"],["comBlocked"],["showads","7000"],[".height() == 0"],["appendMessage"],["adblockNotif"],["testAdBlock"],["xdBlockEnabled","100"],["bottomad"],["/[a-w0-9]{12,}/"],["o.customPassLogin()"],["facebook","200"],["shownJoinInModal"],["/autoShow.*localStorage\\.setItem\\(.auto_login_show_count/"],[".login-modal-btn:eq(0)"],["initialisePopupModal"],["mfp_login-register"],["","15000"],["OpenModal(\"popup_warning_modal\")"],["pbAdBlockHooks"],["Cookie.get(\"contribute-modal"],["#modal-id"],["userVisited"],["#PatronModal"],["isshowmodal","3000"],["init_no_delay"],["modalOpen()"],["jQuery.colorbox"],["cd-user-modal"],["advice-popup"],["#send_enquery_popup_load"],["$('.spg-"],["newsletter_show()","2000"],["/nltrShow30minFlag|js_primetargeting_popup/"],["signupPopup"],["#sign-up-campaign"],["#FloaterModal"],["newsletterModalContent",""],["displayPopup()"],["#IdentifiedPopUpHTML"],["hhModal","5000"],["SignUPPopup_load","5000"],["setPopup"],["mweb_to_app_popup"],["popupObject"],["popup_create_subscribtion"],["newsletter"],["function(){return i(!0)}","3000"],["refreshCount()"],["#newsletter-dialog"],["adsbygoogle","2000"],["checkAdStatus","500"],["ads","2000"],["ThriveGlobal"],["[native code]","500"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["increaserev"],["slideout"],["modal"],["check"],["offsetHeight"],["0x"],["","7000"],["body"],["null"],["","5000"],["[native code]"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["support-jsfiddle"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"]];

const hostnamesMap = new Map([["e.mail.ru",0],["octavius.mail.ru",0],["wpnull7.com",1],["xdarom.com",1],["elitepvpers.com",[2,145]],["online2pdf.com",[3,103]],["myfxbook.com",[4,79]],["printablecreative.com",5],["strategium.ru",6],["bitcompiler.com",6],["penize.cz",6],["tvfeed.in",6],["libgen.rocks",7],["thecrimson.com",8],["tumblr.com",[9,160]],["ghxi.com",10],["andrialive.it",11],["lavocedimanduria.it",11],["gioialive.it",11],["terlizzilive.it",11],["as.com",12],["foxnews.com",12],["foxbusiness.com",12],["babycenter.com",13],["cnbeta.com",14],["daz3d.ru",15],["dragcave.net",[16,74]],["dumpert.nl",17],["erfahrungen.com",18],["howjsay.com",[18,90]],["reviewmeta.com",[18,92]],["testserver.pro",18],["fnbrjp.com",19],["imtranslator.net",20],["psychic.de",20],["keybr.com",[21,109,110]],["libgen.lc",22],["maidenhead-advertiser.co.uk",23],["mainpost.de",24],["mapa-turystyczna.pl",25],["mc-at.org",26],["motoroids.com",27],["ogznet.com",28],["postimees.ee",29],["salidzini.lv",30],["seomagnifier.com",31],["whatfontis.com",32],["online-fix.me",33],["tieba.baidu.com",34],["latestdeals.co.uk",35],["workspacetips.io",36],["haokan.baidu.com",37],["geeksforgeeks.org",[38,146,147]],["pianistmagazine.com",39],["forvo.com",40],["perfecthealthclinic.com",41],["linkneverdie.net",42],["desktopnexus.com",43],["themoscowtimes.com",44],["bilety24.uk",45],["oneesports.vn",46],["koronawirusunas.pl",47],["webukatu.com",48],["1000.menu",49],["arcserve.com",50],["cdotrends.com",51],["mondaq.com",52],["princetonreview.com",53],["medsurgeindia.com",54],["vegasslotsonline.com",55],["doorofperception.com",56],["economictimes.indiatimes.com",57],["edutopia.org",58],["plugin-alliance.com",59],["arbeitsrecht.org",60],["villeroy-boch.de",61],["downloadfreecourse.com",62],["indiamart.com",63],["afitness.ru",64],["dreamstime.com",65],["rzetelnafirma.pl",66],["tiki.vn",67],["g-school.co.kr",68],["zumub.com",69],["aritzia.com",70],["goal.com",71],["letpub.com.cn",72],["mecze.com",73],["relyonhorror.com",75],["evworld.com",76],["columbiaspectator.com",76],["99bitcoins.com",77],["wyff4.com",78],["hqq.tv",80],["mediafire.com",81],["webcodegeeks.com",82],["books-world.net",83],["pc3mag.com",83],["opedge.com",84],["bronze-bravery.com",84],["ultimate-bravery.net",84],["htmlreference.io",84],["short-story.net",84],["sbenny.com",84],["fabricjs.com",85],["wildstarlogs.com",86],["boerse-express.com",86],["bucketpages.com",87],["steptalk.org",88],["numberempire.com",89],["cagesideseats.com",90],["vpnmentor.com",91],["tomshw.it",91],["wizcase.com",91],["portableapps.com",92],["heroesneverdie.com",93],["curbed.com",93],["eater.com",93],["funnyordie.com",93],["mmafighting.com",93],["mmamania.com",93],["polygon.com",93],["racked.com",93],["riftherald.com",93],["sbnation.com",93],["theverge.com",93],["vox.com",93],["twinkietown.com",93],["addons.opera.com",94],["ruwix.com",95],["zulily.com",96],["rp5.by",97],["turbolab.it",98],["9xbuddy.com",18],["zerogpt.net",18],["lookmovie.ag",99],["heidisql.com",100],["lifo.gr",101],["xe.gr",102],["typing-speed.net",103],["liverpool.no",104],["fotor.com",104],["playbill.com",104],["xxxonlinegames.com",104],["olarila.com",104],["fairyabc.com",6],["mobilarena.hu",105],["aniwave.to",[105,161]],["bflix.io",105],["f2movies.ru",105],["movies2watch.ru",105],["putlockernew.vc",105],["swatchseries.ru",105],["vidplay.site",[105,161]],["vidstream.pro",105],["mcloud.to",105],["gamepod.hu",106],["itcafe.hu",106],["prohardver.hu",106],["minecraftforge.net",107],["theherald-news.com",108],["searchenginejournal.com",111],["mocospace.com",112],["karamellstore.com.br",113],["mdlinx.com",114],["infoplease.com",114],["htforum.net",114],["underconsideration.com",115],["foreignaffairs.com",116],["dxmaps.com",117],["photoshop-online.biz",118],["ukworkshop.co.uk",118],["endorfinese.com.br",118],["segnidalcielo.it",118],["2iptv.com",118],["deezer.com",119],["handball-world.news",120],["mobiflip.de",120],["titanic-magazin.de",120],["mimikama.org",120],["langweiledich.net",120],["der-postillon.com",120],["perlentaucher.de",120],["lwlies.com",120],["serieslyawesome.tv",120],["critic.de",120],["mediotejo.net",120],["nahrungsmittel-intoleranz.com",120],["madeinbocholt.de",120],["zwei-euro.com",120],["affiliate.fc2.com",121],["4x4earth.com",122],["diffchecker.com",123],["malekal.com",124],["audiostereo.pl",124],["guides4gamers.com",125],["polyflore.net",126],["icy-veins.com",127],["cpuid.com",128],["webcamtaxi.com",129],["megapixl.com",130],["cissamagazine.com.br",131],["utour.me",132],["fosspost.org",133],["2embed.ru",134],["theepochtimes.com",135],["xtv.cz",136],["drawasaurus.org",137],["katholisches.info",138],["hollywoodmask.com",138],["streaminglearningcenter.com",139],["prepostseo.com",140],["tiermaker.com",141],["hqq.to",142],["zefoy.com",142],["shopomo.co.uk",143],["techus.website",143],["criticalthinking.org",144],["moviepl.xyz",148],["leekduck.com",149],["aberdeennews.com",150],["alamogordonews.com",150],["amarillo.com",150],["amestrib.com",150],["app.com",150],["argusleader.com",150],["augustachronicle.com",150],["azcentral.com",150],["battlecreekenquirer.com",150],["beaconjournal.com",150],["blueridgenow.com",150],["buckscountycouriertimes.com",150],["bucyrustelegraphforum.com",150],["burlingtoncountytimes.com",150],["burlingtonfreepress.com",150],["caller.com",150],["cantondailyledger.com",150],["cantonrep.com",150],["capecodtimes.com",150],["cheboygannews.com",150],["chieftain.com",150],["chillicothegazette.com",150],["cincinnati.com",150],["citizen-times.com",150],["cjonline.com",150],["clarionledger.com",150],["coloradoan.com",150],["columbiadailyherald.com",150],["columbiatribune.com",150],["commercialappeal.com",150],["coshoctontribune.com",150],["courier-journal.com",150],["courier-tribune.com",150],["courierpostonline.com",150],["courierpress.com",150],["currentargus.com",150],["daily-jeff.com",150],["daily-times.com",150],["dailyamerican.com",150],["dailycomet.com",150],["dailycommercial.com",150],["dailyrecord.com",150],["dailyworld.com",150],["delawareonline.com",150],["delmarvanow.com",150],["demingheadlight.com",150],["democratandchronicle.com",150],["desertsun.com",150],["desmoinesregister.com",150],["devilslakejournal.com",150],["dispatch.com",150],["dnj.com",150],["ellwoodcityledger.com",150],["elpasotimes.com",150],["enterprisenews.com",150],["eveningsun.com",150],["eveningtribune.com",150],["examiner-enterprise.com",150],["fayobserver.com",150],["fdlreporter.com",150],["floridatoday.com",150],["fosters.com",150],["freep.com",150],["gadsdentimes.com",150],["gainesville.com",150],["galesburg.com",150],["gastongazette.com",150],["goerie.com",150],["gosanangelo.com",150],["goupstate.com",150],["greatfallstribune.com",150],["greenbaypressgazette.com",150],["greenvilleonline.com",150],["hattiesburgamerican.com",150],["heraldmailmedia.com",150],["heraldnews.com",150],["heraldtribune.com",150],["hillsdale.net",150],["hollandsentinel.com",150],["hoosiertimes.com",150],["houmatoday.com",150],["htrnews.com",150],["hutchnews.com",150],["indeonline.com",150],["independentmail.com",150],["indystar.com",150],["ithacajournal.com",150],["jacksonsun.com",150],["jacksonville.com",150],["jconline.com",150],["jdnews.com",150],["journalstandard.com",150],["jsonline.com",150],["kinston.com",150],["kitsapsun.com",150],["knoxnews.com",150],["lancastereaglegazette.com",150],["lansingstatejournal.com",150],["lcsun-news.com",150],["ldnews.com",150],["lenconnect.com",150],["lincolncourier.com",150],["livingstondaily.com",150],["lohud.com",150],["lubbockonline.com",150],["mansfieldnewsjournal.com",150],["marionstar.com",150],["marshfieldnewsherald.com",150],["mcdonoughvoice.com",150],["metrowestdailynews.com",150],["milforddailynews.com",150],["monroenews.com",150],["montgomeryadvertiser.com",150],["mpnnow.com",150],["mycentraljersey.com",150],["naplesnews.com",150],["newarkadvocate.com",150],["newbernsj.com",150],["newportri.com",150],["news-journalonline.com",150],["news-leader.com",150],["news-press.com",150],["newschief.com",150],["newsherald.com",150],["newsleader.com",150],["njherald.com",150],["northjersey.com",150],["norwichbulletin.com",150],["nwfdailynews.com",150],["oakridger.com",150],["ocala.com",150],["oklahoman.com",150],["onlineathens.com",150],["pal-item.com",150],["palmbeachdailynews.com",150],["palmbeachpost.com",150],["patriotledger.com",150],["pekintimes.com",150],["petoskeynews.com",150],["pjstar.com",150],["pnj.com",150],["poconorecord.com",150],["pontiacdailyleader.com",150],["portclintonnewsherald.com",150],["postcrescent.com",150],["poughkeepsiejournal.com",150],["press-citizen.com",150],["pressconnects.com",150],["progress-index.com",150],["providencejournal.com",150],["publicopiniononline.com",150],["record-courier.com",150],["recordnet.com",150],["recordonline.com",150],["redding.com",150],["registerguard.com",150],["reporter-times.com",150],["reporternews.com",150],["rgj.com",150],["rrstar.com",150],["ruidosonews.com",150],["salina.com",150],["savannahnow.com",150],["scsun-news.com",150],["sctimes.com",150],["seacoastonline.com",150],["sheboyganpress.com",150],["shelbystar.com",150],["shreveporttimes.com",150],["sj-r.com",150],["sooeveningnews.com",150],["southbendtribune.com",150],["southcoasttoday.com",150],["starcourier.com",150],["stargazette.com",150],["starnewsonline.com",150],["statesman.com",150],["statesmanjournal.com",150],["staugustine.com",150],["stevenspointjournal.com",150],["sturgisjournal.com",150],["swtimes.com",150],["tallahassee.com",150],["tauntongazette.com",150],["tcpalm.com",150],["telegram.com",150],["tennessean.com",150],["the-daily-record.com",150],["the-dispatch.com",150],["the-leader.com",150],["the-review.com",150],["theadvertiser.com",150],["thecalifornian.com",150],["thedailyjournal.com",150],["thedailyreporter.com",150],["thegardnernews.com",150],["thegleaner.com",150],["thehawkeye.com",150],["theintell.com",150],["theleafchronicle.com",150],["theledger.com",150],["thenews-messenger.com",150],["thenewsstar.com",150],["thenorthwestern.com",150],["thepublicopinion.com",150],["therecordherald.com",150],["thespectrum.com",150],["thestarpress.com",150],["thetimesherald.com",150],["thetimesnews.com",150],["thetowntalk.com",150],["times-gazette.com",150],["timesonline.com",150],["timesrecordnews.com",150],["timesreporter.com",150],["timestelegram.com",150],["tmnews.com",150],["tricountyindependent.com",150],["tuscaloosanews.com",150],["usatoday.com",150],["uticaod.com",150],["vcstar.com",150],["visaliatimesdelta.com",150],["vvdailypress.com",150],["wausaudailyherald.com",150],["wisconsinrapidstribune.com",150],["ydr.com",150],["zanesvilletimesrecorder.com",150],["craftpip.github.io",151],["pixwox.com",152],["sflix.to",153],["thizissam.in",154],["jsfiddle.net",155],["ikorektor.pl",156],["telenovelas-turcas.com.es",157],["goldenstateofmind.com",158],["neoseeker.com",159]]);

const entitiesMap = new Map([["flixhq",[105,161]],["fmovies",105],["fmoviesz",105],["libgen",28],["123movies",134]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = safe.patternToRegex(needle);
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setTimeout("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
