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

const argsList = [["SMOKESCREEN"],["mdp-deblocker"],["type","1000"],["showAd"],["chkADB"],["adblock"],["$(\"ins\").css"],["/0===.\\.offsetHeight/"],["adBlockEnabled","3000"],["wpcom_ad_wrap"],["#rbm_block_active"],["/offsetHeight[\\s\\S]*?offsetWidth[\\s\\S]*?\\.parentNode\\.removeChild/"],["white-list us"],["blockerDetected"],["/function\\(\\)\\{var.[a-z]\\=[a-z]\\.getElementById/","3000"],["google_ads_frame"],["AdBlockerCheck"],["adsbygoogle"],["広告"],["test.offsetHeight"],["()=>","5000"],["if($(\"ins\").css"],[".offsetHeight === 0"],["\"none\"===window.getComputedStyle"],["comBlocked"],["showads","7000"],[".height() == 0"],["appendMessage"],["adblockNotif"],["testAdBlock"],["xdBlockEnabled","100"],["bottomad"],["/[a-w0-9]{12,}/"],["o.customPassLogin()"],["facebook","200"],["shownJoinInModal"],["/autoShow.*localStorage\\.setItem\\(.auto_login_show_count/"],[".login-modal-btn:eq(0)"],["initialisePopupModal"],["mfp_login-register"],["","15000"],["OpenModal(\"popup_warning_modal\")"],["pbAdBlockHooks"],["Cookie.get(\"contribute-modal"],["#modal-id"],["userVisited"],["#PatronModal"],["isshowmodal","3000"],["init_no_delay"],["modalOpen()"],["jQuery.colorbox"],["cd-user-modal"],["advice-popup"],["#send_enquery_popup_load"],["$('.spg-"],["newsletter_show()","2000"],["/nltrShow30minFlag|js_primetargeting_popup/"],["signupPopup"],["#sign-up-campaign"],["#FloaterModal"],["newsletterModalContent",""],["displayPopup()"],["#IdentifiedPopUpHTML"],["hhModal","5000"],["SignUPPopup_load","5000"],["setPopup"],["mweb_to_app_popup"],["popupObject"],["popup_create_subscribtion"],["newsletter"],["function(){return i(!0)}","3000"],["refreshCount()"],["#newsletter-dialog"],["adsbygoogle","2000"],["checkAdStatus","500"],["ads","2000"],["ThriveGlobal"],["[native code]","500"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["increaserev"],["slideout"],["modal"],["check"],["offsetHeight"],["0x"],["","7000"],["body"],["null"],["","5000"],["[native code]"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["support-jsfiddle"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"]];

const hostnamesMap = new Map([["e.mail.ru",0],["octavius.mail.ru",0],["wpnull7.com",1],["xdarom.com",1],["online2pdf.com",[2,102]],["myfxbook.com",[3,78]],["printablecreative.com",4],["strategium.ru",5],["bitcompiler.com",5],["penize.cz",5],["tvfeed.in",5],["libgen.rocks",6],["thecrimson.com",7],["tumblr.com",[8,159]],["ghxi.com",9],["andrialive.it",10],["lavocedimanduria.it",10],["gioialive.it",10],["terlizzilive.it",10],["as.com",11],["foxnews.com",11],["foxbusiness.com",11],["babycenter.com",12],["cnbeta.com",13],["daz3d.ru",14],["dragcave.net",[15,73]],["dumpert.nl",16],["erfahrungen.com",17],["howjsay.com",[17,89]],["reviewmeta.com",[17,91]],["testserver.pro",17],["fnbrjp.com",18],["imtranslator.net",19],["psychic.de",19],["keybr.com",[20,108,109]],["libgen.lc",21],["maidenhead-advertiser.co.uk",22],["mainpost.de",23],["mapa-turystyczna.pl",24],["mc-at.org",25],["motoroids.com",26],["ogznet.com",27],["postimees.ee",28],["salidzini.lv",29],["seomagnifier.com",30],["whatfontis.com",31],["online-fix.me",32],["tieba.baidu.com",33],["latestdeals.co.uk",34],["workspacetips.io",35],["haokan.baidu.com",36],["geeksforgeeks.org",[37,145,146]],["pianistmagazine.com",38],["forvo.com",39],["perfecthealthclinic.com",40],["linkneverdie.net",41],["desktopnexus.com",42],["themoscowtimes.com",43],["bilety24.uk",44],["oneesports.vn",45],["koronawirusunas.pl",46],["webukatu.com",47],["1000.menu",48],["arcserve.com",49],["cdotrends.com",50],["mondaq.com",51],["princetonreview.com",52],["medsurgeindia.com",53],["vegasslotsonline.com",54],["doorofperception.com",55],["economictimes.indiatimes.com",56],["edutopia.org",57],["plugin-alliance.com",58],["arbeitsrecht.org",59],["villeroy-boch.de",60],["downloadfreecourse.com",61],["indiamart.com",62],["afitness.ru",63],["dreamstime.com",64],["rzetelnafirma.pl",65],["tiki.vn",66],["g-school.co.kr",67],["zumub.com",68],["aritzia.com",69],["goal.com",70],["letpub.com.cn",71],["mecze.com",72],["relyonhorror.com",74],["evworld.com",75],["columbiaspectator.com",75],["99bitcoins.com",76],["wyff4.com",77],["hqq.tv",79],["mediafire.com",80],["webcodegeeks.com",81],["books-world.net",82],["pc3mag.com",82],["opedge.com",83],["bronze-bravery.com",83],["ultimate-bravery.net",83],["htmlreference.io",83],["short-story.net",83],["sbenny.com",83],["fabricjs.com",84],["wildstarlogs.com",85],["boerse-express.com",85],["bucketpages.com",86],["steptalk.org",87],["numberempire.com",88],["cagesideseats.com",89],["vpnmentor.com",90],["tomshw.it",90],["wizcase.com",90],["portableapps.com",91],["heroesneverdie.com",92],["curbed.com",92],["eater.com",92],["funnyordie.com",92],["mmafighting.com",92],["mmamania.com",92],["polygon.com",92],["racked.com",92],["riftherald.com",92],["sbnation.com",92],["theverge.com",92],["vox.com",92],["twinkietown.com",92],["addons.opera.com",93],["ruwix.com",94],["zulily.com",95],["rp5.by",96],["turbolab.it",97],["9xbuddy.com",17],["zerogpt.net",17],["lookmovie.ag",98],["heidisql.com",99],["lifo.gr",100],["xe.gr",101],["typing-speed.net",102],["liverpool.no",103],["fotor.com",103],["playbill.com",103],["xxxonlinegames.com",103],["olarila.com",103],["fairyabc.com",5],["mobilarena.hu",104],["aniwave.to",[104,160]],["bflix.io",104],["f2movies.ru",104],["movies2watch.ru",104],["putlockernew.vc",104],["swatchseries.ru",104],["vidplay.site",[104,160]],["vidstream.pro",104],["mcloud.to",104],["gamepod.hu",105],["itcafe.hu",105],["prohardver.hu",105],["minecraftforge.net",106],["theherald-news.com",107],["searchenginejournal.com",110],["mocospace.com",111],["karamellstore.com.br",112],["mdlinx.com",113],["infoplease.com",113],["htforum.net",113],["underconsideration.com",114],["foreignaffairs.com",115],["dxmaps.com",116],["photoshop-online.biz",117],["ukworkshop.co.uk",117],["endorfinese.com.br",117],["segnidalcielo.it",117],["2iptv.com",117],["deezer.com",118],["handball-world.news",119],["mobiflip.de",119],["titanic-magazin.de",119],["mimikama.org",119],["langweiledich.net",119],["der-postillon.com",119],["perlentaucher.de",119],["lwlies.com",119],["serieslyawesome.tv",119],["critic.de",119],["mediotejo.net",119],["nahrungsmittel-intoleranz.com",119],["madeinbocholt.de",119],["zwei-euro.com",119],["affiliate.fc2.com",120],["4x4earth.com",121],["diffchecker.com",122],["malekal.com",123],["audiostereo.pl",123],["guides4gamers.com",124],["polyflore.net",125],["icy-veins.com",126],["cpuid.com",127],["webcamtaxi.com",128],["megapixl.com",129],["cissamagazine.com.br",130],["utour.me",131],["fosspost.org",132],["2embed.ru",133],["theepochtimes.com",134],["xtv.cz",135],["drawasaurus.org",136],["katholisches.info",137],["hollywoodmask.com",137],["streaminglearningcenter.com",138],["prepostseo.com",139],["tiermaker.com",140],["hqq.to",141],["zefoy.com",141],["shopomo.co.uk",142],["techus.website",142],["criticalthinking.org",143],["elitepvpers.com",144],["moviepl.xyz",147],["leekduck.com",148],["aberdeennews.com",149],["alamogordonews.com",149],["amarillo.com",149],["amestrib.com",149],["app.com",149],["argusleader.com",149],["augustachronicle.com",149],["azcentral.com",149],["battlecreekenquirer.com",149],["beaconjournal.com",149],["blueridgenow.com",149],["buckscountycouriertimes.com",149],["bucyrustelegraphforum.com",149],["burlingtoncountytimes.com",149],["burlingtonfreepress.com",149],["caller.com",149],["cantondailyledger.com",149],["cantonrep.com",149],["capecodtimes.com",149],["cheboygannews.com",149],["chieftain.com",149],["chillicothegazette.com",149],["cincinnati.com",149],["citizen-times.com",149],["cjonline.com",149],["clarionledger.com",149],["coloradoan.com",149],["columbiadailyherald.com",149],["columbiatribune.com",149],["commercialappeal.com",149],["coshoctontribune.com",149],["courier-journal.com",149],["courier-tribune.com",149],["courierpostonline.com",149],["courierpress.com",149],["currentargus.com",149],["daily-jeff.com",149],["daily-times.com",149],["dailyamerican.com",149],["dailycomet.com",149],["dailycommercial.com",149],["dailyrecord.com",149],["dailyworld.com",149],["delawareonline.com",149],["delmarvanow.com",149],["demingheadlight.com",149],["democratandchronicle.com",149],["desertsun.com",149],["desmoinesregister.com",149],["devilslakejournal.com",149],["dispatch.com",149],["dnj.com",149],["ellwoodcityledger.com",149],["elpasotimes.com",149],["enterprisenews.com",149],["eveningsun.com",149],["eveningtribune.com",149],["examiner-enterprise.com",149],["fayobserver.com",149],["fdlreporter.com",149],["floridatoday.com",149],["fosters.com",149],["freep.com",149],["gadsdentimes.com",149],["gainesville.com",149],["galesburg.com",149],["gastongazette.com",149],["goerie.com",149],["gosanangelo.com",149],["goupstate.com",149],["greatfallstribune.com",149],["greenbaypressgazette.com",149],["greenvilleonline.com",149],["hattiesburgamerican.com",149],["heraldmailmedia.com",149],["heraldnews.com",149],["heraldtribune.com",149],["hillsdale.net",149],["hollandsentinel.com",149],["hoosiertimes.com",149],["houmatoday.com",149],["htrnews.com",149],["hutchnews.com",149],["indeonline.com",149],["independentmail.com",149],["indystar.com",149],["ithacajournal.com",149],["jacksonsun.com",149],["jacksonville.com",149],["jconline.com",149],["jdnews.com",149],["journalstandard.com",149],["jsonline.com",149],["kinston.com",149],["kitsapsun.com",149],["knoxnews.com",149],["lancastereaglegazette.com",149],["lansingstatejournal.com",149],["lcsun-news.com",149],["ldnews.com",149],["lenconnect.com",149],["lincolncourier.com",149],["livingstondaily.com",149],["lohud.com",149],["lubbockonline.com",149],["mansfieldnewsjournal.com",149],["marionstar.com",149],["marshfieldnewsherald.com",149],["mcdonoughvoice.com",149],["metrowestdailynews.com",149],["milforddailynews.com",149],["monroenews.com",149],["montgomeryadvertiser.com",149],["mpnnow.com",149],["mycentraljersey.com",149],["naplesnews.com",149],["newarkadvocate.com",149],["newbernsj.com",149],["newportri.com",149],["news-journalonline.com",149],["news-leader.com",149],["news-press.com",149],["newschief.com",149],["newsherald.com",149],["newsleader.com",149],["njherald.com",149],["northjersey.com",149],["norwichbulletin.com",149],["nwfdailynews.com",149],["oakridger.com",149],["ocala.com",149],["oklahoman.com",149],["onlineathens.com",149],["pal-item.com",149],["palmbeachdailynews.com",149],["palmbeachpost.com",149],["patriotledger.com",149],["pekintimes.com",149],["petoskeynews.com",149],["pjstar.com",149],["pnj.com",149],["poconorecord.com",149],["pontiacdailyleader.com",149],["portclintonnewsherald.com",149],["postcrescent.com",149],["poughkeepsiejournal.com",149],["press-citizen.com",149],["pressconnects.com",149],["progress-index.com",149],["providencejournal.com",149],["publicopiniononline.com",149],["record-courier.com",149],["recordnet.com",149],["recordonline.com",149],["redding.com",149],["registerguard.com",149],["reporter-times.com",149],["reporternews.com",149],["rgj.com",149],["rrstar.com",149],["ruidosonews.com",149],["salina.com",149],["savannahnow.com",149],["scsun-news.com",149],["sctimes.com",149],["seacoastonline.com",149],["sheboyganpress.com",149],["shelbystar.com",149],["shreveporttimes.com",149],["sj-r.com",149],["sooeveningnews.com",149],["southbendtribune.com",149],["southcoasttoday.com",149],["starcourier.com",149],["stargazette.com",149],["starnewsonline.com",149],["statesman.com",149],["statesmanjournal.com",149],["staugustine.com",149],["stevenspointjournal.com",149],["sturgisjournal.com",149],["swtimes.com",149],["tallahassee.com",149],["tauntongazette.com",149],["tcpalm.com",149],["telegram.com",149],["tennessean.com",149],["the-daily-record.com",149],["the-dispatch.com",149],["the-leader.com",149],["the-review.com",149],["theadvertiser.com",149],["thecalifornian.com",149],["thedailyjournal.com",149],["thedailyreporter.com",149],["thegardnernews.com",149],["thegleaner.com",149],["thehawkeye.com",149],["theintell.com",149],["theleafchronicle.com",149],["theledger.com",149],["thenews-messenger.com",149],["thenewsstar.com",149],["thenorthwestern.com",149],["thepublicopinion.com",149],["therecordherald.com",149],["thespectrum.com",149],["thestarpress.com",149],["thetimesherald.com",149],["thetimesnews.com",149],["thetowntalk.com",149],["times-gazette.com",149],["timesonline.com",149],["timesrecordnews.com",149],["timesreporter.com",149],["timestelegram.com",149],["tmnews.com",149],["tricountyindependent.com",149],["tuscaloosanews.com",149],["usatoday.com",149],["uticaod.com",149],["vcstar.com",149],["visaliatimesdelta.com",149],["vvdailypress.com",149],["wausaudailyherald.com",149],["wisconsinrapidstribune.com",149],["ydr.com",149],["zanesvilletimesrecorder.com",149],["craftpip.github.io",150],["pixwox.com",151],["sflix.to",152],["thizissam.in",153],["jsfiddle.net",154],["ikorektor.pl",155],["telenovelas-turcas.com.es",156],["goldenstateofmind.com",157],["neoseeker.com",158]]);

const entitiesMap = new Map([["flixhq",[104,160]],["fmovies",104],["fmoviesz",104],["libgen",27],["123movies",133]]);

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
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
