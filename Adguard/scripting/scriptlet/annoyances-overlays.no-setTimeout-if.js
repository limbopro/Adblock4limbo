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

const argsList = [["mdp-deblocker"],["type","1000"],["showAd"],["chkADB"],["adblock"],["$(\"ins\").css"],["/0===.\\.offsetHeight/"],["adBlockEnabled","3000"],["wpcom_ad_wrap"],["#rbm_block_active"],["/offsetHeight[\\s\\S]*?offsetWidth[\\s\\S]*?\\.parentNode\\.removeChild/"],["white-list us"],["blockerDetected"],["/function\\(\\)\\{var.[a-z]\\=[a-z]\\.getElementById/","3000"],["google_ads_frame"],["AdBlockerCheck"],["adsbygoogle"],["広告"],["test.offsetHeight"],["()=>","5000"],["if($(\"ins\").css"],[".offsetHeight === 0"],["\"none\"===window.getComputedStyle"],["comBlocked"],["showads","7000"],[".height() == 0"],["appendMessage"],["adblockNotif"],["testAdBlock"],["xdBlockEnabled","100"],["bottomad"],["/[a-w0-9]{12,}/"],["facebook","200"],["shownJoinInModal"],["/autoShow.*localStorage\\.setItem\\(.auto_login_show_count/"],[".login-modal-btn:eq(0)"],["initialisePopupModal"],["mfp_login-register"],["","15000"],["OpenModal(\"popup_warning_modal\")"],["pbAdBlockHooks"],["Cookie.get(\"contribute-modal"],["#modal-id"],["userVisited"],["#PatronModal"],["isshowmodal","3000"],["init_no_delay"],["modalOpen()"],["jQuery.colorbox"],["cd-user-modal"],["advice-popup"],["#send_enquery_popup_load"],["$('.spg-"],["newsletter_show()","2000"],["/nltrShow30minFlag|js_primetargeting_popup/"],["signupPopup"],["#sign-up-campaign"],["#FloaterModal"],["newsletterModalContent",""],["displayPopup()"],["#IdentifiedPopUpHTML"],["hhModal","5000"],["SignUPPopup_load","5000"],["setPopup"],["mweb_to_app_popup"],["popupObject"],["popup_create_subscribtion"],["newsletter"],["function(){return i(!0)}","3000"],["refreshCount()"],["#newsletter-dialog"],["adsbygoogle","2000"],["checkAdStatus","500"],["ads","2000"],["ThriveGlobal"],["[native code]","500"],["checkForAds"],["check","100"],["scan","500"],["onload_popup","8000"],["Adblocker","10000"],["()","2000"],["()","4000"],["()","1000"],["#advert-tracker","500"],["()","3000"],["w3ad","1000"],["()","1500"],["bioEp.showPopup"],["innerHTML"],["adsBlocked"],["showOverlay"],["NoAd","8000"],["loginModal","500"],["()","700"],["warning"],["__ext_loaded"],["increaserev"],["slideout"],["modal"],["check"],["offsetHeight"],["0x"],["","7000"],["body"],["null"],["","5000"],["[native code]"],["popup"],["adblocker"],["exit_popup","10000"],["show"],["test.remove"],["noscroll","3000"],["adsbygoogle","5000"],["google_jobrunner"],["bait"],["Delay"],["checkFeed","1000"],["samOverlay"],["adStillHere"],["adb"],["offsetHeight","100"],["adBlockDetected"],["premium"],["blocked","1000"],["blocker"],[".modal","1000"],["Zord.analytics.registerBeforeLeaveEvent","3000"],["myModal","3000"],["an_message","500"],["_0x"],["pipaId","0"],["pgblck"],["forceRefresh"],["pop"],["ads"],["head"],["&adslot"],["debugger"],["ai_"],["donation-modal"],["$"],["onscroll","5500"],["login","5000"],["devtoolIsOpening","100"],["abp"],["gnt_mol_oy"],["adsok"],["length","3000"],["devtools"],["popupScreen"],["support-jsfiddle"],["ad"],["_detectLoop"],["concertAds"],["whetherdo"],["Premium"],["||null"]];

const hostnamesMap = new Map([["wpnull7.com",0],["xdarom.com",0],["online2pdf.com",[1,100]],["myfxbook.com",[2,76]],["printablecreative.com",3],["strategium.ru",4],["bitcompiler.com",4],["penize.cz",4],["tvfeed.in",4],["libgen.rocks",5],["thecrimson.com",6],["tumblr.com",[7,157]],["ghxi.com",8],["andrialive.it",9],["lavocedimanduria.it",9],["gioialive.it",9],["terlizzilive.it",9],["as.com",10],["foxnews.com",10],["foxbusiness.com",10],["babycenter.com",11],["cnbeta.com",12],["daz3d.ru",13],["dragcave.net",[14,71]],["dumpert.nl",15],["erfahrungen.com",16],["howjsay.com",[16,87]],["reviewmeta.com",[16,89]],["testserver.pro",16],["fnbrjp.com",17],["imtranslator.net",18],["psychic.de",18],["keybr.com",[19,106,107]],["libgen.lc",20],["maidenhead-advertiser.co.uk",21],["mainpost.de",22],["mapa-turystyczna.pl",23],["mc-at.org",24],["motoroids.com",25],["ogznet.com",26],["postimees.ee",27],["salidzini.lv",28],["seomagnifier.com",29],["whatfontis.com",30],["online-fix.me",31],["latestdeals.co.uk",32],["workspacetips.io",33],["haokan.baidu.com",34],["geeksforgeeks.org",[35,143,144]],["pianistmagazine.com",36],["forvo.com",37],["perfecthealthclinic.com",38],["linkneverdie.net",39],["desktopnexus.com",40],["themoscowtimes.com",41],["bilety24.uk",42],["oneesports.vn",43],["koronawirusunas.pl",44],["webukatu.com",45],["1000.menu",46],["arcserve.com",47],["cdotrends.com",48],["mondaq.com",49],["princetonreview.com",50],["medsurgeindia.com",51],["vegasslotsonline.com",52],["doorofperception.com",53],["economictimes.indiatimes.com",54],["edutopia.org",55],["plugin-alliance.com",56],["arbeitsrecht.org",57],["villeroy-boch.de",58],["downloadfreecourse.com",59],["indiamart.com",60],["afitness.ru",61],["dreamstime.com",62],["rzetelnafirma.pl",63],["tiki.vn",64],["g-school.co.kr",65],["zumub.com",66],["aritzia.com",67],["goal.com",68],["letpub.com.cn",69],["mecze.com",70],["relyonhorror.com",72],["evworld.com",73],["columbiaspectator.com",73],["99bitcoins.com",74],["wyff4.com",75],["hqq.tv",77],["mediafire.com",78],["webcodegeeks.com",79],["books-world.net",80],["pc3mag.com",80],["opedge.com",81],["bronze-bravery.com",81],["ultimate-bravery.net",81],["htmlreference.io",81],["short-story.net",81],["sbenny.com",81],["fabricjs.com",82],["wildstarlogs.com",83],["boerse-express.com",83],["bucketpages.com",84],["steptalk.org",85],["numberempire.com",86],["cagesideseats.com",87],["vpnmentor.com",88],["tomshw.it",88],["wizcase.com",88],["portableapps.com",89],["heroesneverdie.com",90],["curbed.com",90],["eater.com",90],["funnyordie.com",90],["mmafighting.com",90],["mmamania.com",90],["polygon.com",90],["racked.com",90],["riftherald.com",90],["sbnation.com",90],["theverge.com",90],["vox.com",90],["twinkietown.com",90],["addons.opera.com",91],["ruwix.com",92],["zulily.com",93],["rp5.by",94],["turbolab.it",95],["9xbuddy.com",16],["zerogpt.net",16],["lookmovie.ag",96],["heidisql.com",97],["lifo.gr",98],["xe.gr",99],["typing-speed.net",100],["liverpool.no",101],["fotor.com",101],["playbill.com",101],["xxxonlinegames.com",101],["olarila.com",101],["fairyabc.com",4],["mobilarena.hu",102],["aniwave.to",[102,158]],["bflix.io",102],["f2movies.ru",102],["movies2watch.ru",102],["putlockernew.vc",102],["swatchseries.ru",102],["vidplay.site",[102,158]],["vidstream.pro",102],["mcloud.to",102],["gamepod.hu",103],["itcafe.hu",103],["prohardver.hu",103],["minecraftforge.net",104],["theherald-news.com",105],["searchenginejournal.com",108],["mocospace.com",109],["karamellstore.com.br",110],["mdlinx.com",111],["infoplease.com",111],["htforum.net",111],["underconsideration.com",112],["foreignaffairs.com",113],["dxmaps.com",114],["photoshop-online.biz",115],["ukworkshop.co.uk",115],["endorfinese.com.br",115],["segnidalcielo.it",115],["2iptv.com",115],["deezer.com",116],["handball-world.news",117],["mobiflip.de",117],["titanic-magazin.de",117],["mimikama.org",117],["langweiledich.net",117],["der-postillon.com",117],["perlentaucher.de",117],["lwlies.com",117],["serieslyawesome.tv",117],["critic.de",117],["mediotejo.net",117],["nahrungsmittel-intoleranz.com",117],["madeinbocholt.de",117],["zwei-euro.com",117],["affiliate.fc2.com",118],["4x4earth.com",119],["diffchecker.com",120],["malekal.com",121],["audiostereo.pl",121],["guides4gamers.com",122],["polyflore.net",123],["icy-veins.com",124],["cpuid.com",125],["webcamtaxi.com",126],["megapixl.com",127],["cissamagazine.com.br",128],["utour.me",129],["fosspost.org",130],["2embed.ru",131],["theepochtimes.com",132],["xtv.cz",133],["drawasaurus.org",134],["katholisches.info",135],["hollywoodmask.com",135],["streaminglearningcenter.com",136],["prepostseo.com",137],["tiermaker.com",138],["hqq.to",139],["zefoy.com",139],["shopomo.co.uk",140],["techus.website",140],["criticalthinking.org",141],["elitepvpers.com",142],["moviepl.xyz",145],["leekduck.com",146],["aberdeennews.com",147],["alamogordonews.com",147],["amarillo.com",147],["amestrib.com",147],["app.com",147],["argusleader.com",147],["augustachronicle.com",147],["azcentral.com",147],["battlecreekenquirer.com",147],["beaconjournal.com",147],["blueridgenow.com",147],["buckscountycouriertimes.com",147],["bucyrustelegraphforum.com",147],["burlingtoncountytimes.com",147],["burlingtonfreepress.com",147],["caller.com",147],["cantondailyledger.com",147],["cantonrep.com",147],["capecodtimes.com",147],["cheboygannews.com",147],["chieftain.com",147],["chillicothegazette.com",147],["cincinnati.com",147],["citizen-times.com",147],["cjonline.com",147],["clarionledger.com",147],["coloradoan.com",147],["columbiadailyherald.com",147],["columbiatribune.com",147],["commercialappeal.com",147],["coshoctontribune.com",147],["courier-journal.com",147],["courier-tribune.com",147],["courierpostonline.com",147],["courierpress.com",147],["currentargus.com",147],["daily-jeff.com",147],["daily-times.com",147],["dailyamerican.com",147],["dailycomet.com",147],["dailycommercial.com",147],["dailyrecord.com",147],["dailyworld.com",147],["delawareonline.com",147],["delmarvanow.com",147],["demingheadlight.com",147],["democratandchronicle.com",147],["desertsun.com",147],["desmoinesregister.com",147],["devilslakejournal.com",147],["dispatch.com",147],["dnj.com",147],["ellwoodcityledger.com",147],["elpasotimes.com",147],["enterprisenews.com",147],["eveningsun.com",147],["eveningtribune.com",147],["examiner-enterprise.com",147],["fayobserver.com",147],["fdlreporter.com",147],["floridatoday.com",147],["fosters.com",147],["freep.com",147],["gadsdentimes.com",147],["gainesville.com",147],["galesburg.com",147],["gastongazette.com",147],["goerie.com",147],["gosanangelo.com",147],["goupstate.com",147],["greatfallstribune.com",147],["greenbaypressgazette.com",147],["greenvilleonline.com",147],["hattiesburgamerican.com",147],["heraldmailmedia.com",147],["heraldnews.com",147],["heraldtribune.com",147],["hillsdale.net",147],["hollandsentinel.com",147],["hoosiertimes.com",147],["houmatoday.com",147],["htrnews.com",147],["hutchnews.com",147],["indeonline.com",147],["independentmail.com",147],["indystar.com",147],["ithacajournal.com",147],["jacksonsun.com",147],["jacksonville.com",147],["jconline.com",147],["jdnews.com",147],["journalstandard.com",147],["jsonline.com",147],["kinston.com",147],["kitsapsun.com",147],["knoxnews.com",147],["lancastereaglegazette.com",147],["lansingstatejournal.com",147],["lcsun-news.com",147],["ldnews.com",147],["lenconnect.com",147],["lincolncourier.com",147],["livingstondaily.com",147],["lohud.com",147],["lubbockonline.com",147],["mansfieldnewsjournal.com",147],["marionstar.com",147],["marshfieldnewsherald.com",147],["mcdonoughvoice.com",147],["metrowestdailynews.com",147],["milforddailynews.com",147],["monroenews.com",147],["montgomeryadvertiser.com",147],["mpnnow.com",147],["mycentraljersey.com",147],["naplesnews.com",147],["newarkadvocate.com",147],["newbernsj.com",147],["newportri.com",147],["news-journalonline.com",147],["news-leader.com",147],["news-press.com",147],["newschief.com",147],["newsherald.com",147],["newsleader.com",147],["njherald.com",147],["northjersey.com",147],["norwichbulletin.com",147],["nwfdailynews.com",147],["oakridger.com",147],["ocala.com",147],["oklahoman.com",147],["onlineathens.com",147],["pal-item.com",147],["palmbeachdailynews.com",147],["palmbeachpost.com",147],["patriotledger.com",147],["pekintimes.com",147],["petoskeynews.com",147],["pjstar.com",147],["pnj.com",147],["poconorecord.com",147],["pontiacdailyleader.com",147],["portclintonnewsherald.com",147],["postcrescent.com",147],["poughkeepsiejournal.com",147],["press-citizen.com",147],["pressconnects.com",147],["progress-index.com",147],["providencejournal.com",147],["publicopiniononline.com",147],["record-courier.com",147],["recordnet.com",147],["recordonline.com",147],["redding.com",147],["registerguard.com",147],["reporter-times.com",147],["reporternews.com",147],["rgj.com",147],["rrstar.com",147],["ruidosonews.com",147],["salina.com",147],["savannahnow.com",147],["scsun-news.com",147],["sctimes.com",147],["seacoastonline.com",147],["sheboyganpress.com",147],["shelbystar.com",147],["shreveporttimes.com",147],["sj-r.com",147],["sooeveningnews.com",147],["southbendtribune.com",147],["southcoasttoday.com",147],["starcourier.com",147],["stargazette.com",147],["starnewsonline.com",147],["statesman.com",147],["statesmanjournal.com",147],["staugustine.com",147],["stevenspointjournal.com",147],["sturgisjournal.com",147],["swtimes.com",147],["tallahassee.com",147],["tauntongazette.com",147],["tcpalm.com",147],["telegram.com",147],["tennessean.com",147],["the-daily-record.com",147],["the-dispatch.com",147],["the-leader.com",147],["the-review.com",147],["theadvertiser.com",147],["thecalifornian.com",147],["thedailyjournal.com",147],["thedailyreporter.com",147],["thegardnernews.com",147],["thegleaner.com",147],["thehawkeye.com",147],["theintell.com",147],["theleafchronicle.com",147],["theledger.com",147],["thenews-messenger.com",147],["thenewsstar.com",147],["thenorthwestern.com",147],["thepublicopinion.com",147],["therecordherald.com",147],["thespectrum.com",147],["thestarpress.com",147],["thetimesherald.com",147],["thetimesnews.com",147],["thetowntalk.com",147],["times-gazette.com",147],["timesonline.com",147],["timesrecordnews.com",147],["timesreporter.com",147],["timestelegram.com",147],["tmnews.com",147],["tricountyindependent.com",147],["tuscaloosanews.com",147],["usatoday.com",147],["uticaod.com",147],["vcstar.com",147],["visaliatimesdelta.com",147],["vvdailypress.com",147],["wausaudailyherald.com",147],["wisconsinrapidstribune.com",147],["ydr.com",147],["zanesvilletimesrecorder.com",147],["craftpip.github.io",148],["pixwox.com",149],["sflix.to",150],["thizissam.in",151],["jsfiddle.net",152],["ikorektor.pl",153],["telenovelas-turcas.com.es",154],["goldenstateofmind.com",155],["neoseeker.com",156]]);

const entitiesMap = new Map([["flixhq",[102,158]],["fmovies",102],["fmoviesz",102],["libgen",26],["123movies",131]]);

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
