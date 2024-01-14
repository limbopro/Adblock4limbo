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
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["loadAdmiral","noopFunc"],["ezAardvarkDetected","false"],["alert","undefined"],["ads_enabled","true"],["nitroAds.loaded","true"],["google_ad_modifications","{}"],["ANN.ads.adblocked","false"],["inxBX.failed","false"],["isadblocking","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["adsAllowed2","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["Object.prototype.adPlayerId",""],["QiyiPlayerProphetData.a.data","{}"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["aoAdBlockDetected","false"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["history.state","undefined"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,110]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,112]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["tempumail.com",7],["nbcsports.com",7],["cbssports.com",[7,8]],["touchtapplay.com",7],["realsport101.com",7],["gameskinny.com",7],["pcinvasion.com",7],["pc-builds.com",7],["svg.com",7],["syracuse.com",7],["allmovie.com",7],["racinggames.gg",7],["si.com",7],["ksdk.com",7],["slashgear.com",7],["sidereel.com",7],["primagames.com",7],["delmarvanow.com",7],["gfinityesports.com",7],["kooora.com",7],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,19]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,168]],["walterfootball.com",7],["boredpanda.com",7],["cleveland.com",7],["scitechdaily.com",9],["thewindowsclub.com",9],["tekniknot.com",10],["it-actual.ru",10],["radarbox.com",11],["maxroll.gg",12],["cheatnetwork.eu",13],["crackwatcher.com",13],["animenewsnetwork.com",14],["posti.mail.ee",15],["inbox.lv",15],["workingdays.org",16],["stash.sussy.moe",17],["android.com.pl",18],["fosslinux.com",20],["nexusmods.com",21],["1001tracklists.com",23],["autogaleria.pl",24],["basicweb.ru",25],["brainly.com",26],["brighteon.com",27],["cda.pl",28],["chefkoch.de",29],["chip.de",30],["civicx.com",31],["comnuan.com",32],["corriere.it",33],["creatur.io",34],["drnasserelbatal.com",34],["file.fm",34],["files.fm",34],["gamehag.com",34],["onlinehashcrack.com",34],["scantrad.net",34],["timebucks.com",34],["uderent.com",34],["ctrlv.cz",35],["cx30-forum.de",[36,37]],["telefon-treff.de",[36,37]],["cyberpedia.su",38],["kukuo.tw",38],["studopedia.info",38],["infopedia.su",38],["studopedia.net",38],["studopedia.su",38],["studopedia.org",38],["studopedia.ru",38],["studopedia.com.ua",38],["lektsii.org",38],["mydocx.ru",38],["dallasobserver.com",39],["digilibraries.com",40],["dniwolne.eu",41],["jeshoots.com",41],["webcamtaxi.com",41],["doodlr.io",42],["evades.io",43],["everyeye.it",44],["foxnews.com",45],["gameblog.fr",46],["lapumia.org",46],["gazzetta.it",47],["icy-veins.com",48],["inoreader.com",[49,50]],["investing.com",51],["lowcygier.pl",52],["malaysiastock.biz",53],["marriedgames.com.br",54],["megagames.com",55],["metasrc.com",56],["meteoblue.com",57],["mgsm.pl",58],["minijuegos.com",59],["miniwebtool.com",60],["mrexcel.com",61],["nu.nl",62],["how-to-pc.info",63],["easy-learn-tech.info",63],["one-click-tutorials.info",63],["solvetube.site",63],["getintopc.com",63],["preguntandroid.com",64],["iteramos.com",64],["pyrogram.org",65],["qiwihelp.net",66],["r3owners.net",67],["remont-aud.net",68],["salon.com",[69,70]],["satelliteguys.us",71],["signupgenius.com",72],["ingles.com",[73,74,75]],["spanishdict.com",[73,74,75]],["starsandstripesfc.com",76],["polygon.com",76],["strangermeetup.com",[77,159]],["thec64community.online",78],["thehindu.com",79],["titulky.com",[80,81]],["ucoin.net",82],["venea.net",83],["vimm.net",84],["wikihow.com",85],["wvnews.com",86],["xgp.pl",87],["yorumbudur.com",88],["yusepjaelani.blogspot.com",89],["sports.iqiyi.com",90],["m.iqiyi.com",90],["www.iqiyi.com",[91,92,93]],["theharborside.org",94],["fleetstar.com",94],["resources.harneys.com",94],["zeomega.com",94],["marketing.rsvpportal.com",94],["westernstatescat.com",94],["freedomiot.ai",94],["unifilabs.com",94],["weather.com",95],["m.rp5.ru",96],["m.rp5.by",96],["m.rp5.kz",96],["m.rp5.co.uk",96],["m.rp5.md",96],["rp5.ru",97],["rp5.ua",97],["rp5.by",97],["rp5.kz",97],["rp5.co.uk",97],["rp5.md",97],["hdrezka320rtq.org",98],["rezka-ua.tv",98],["hdrezkabmmshq.org",98],["hdrezkafh28d9.org",98],["hdrezkasmakyy.org",98],["hdrezkafhs83u.org",98],["hdrezkahs920s.org",98],["hdrezka.in",98],["hdrezkat5ee2w.org",98],["hdrezkagdvv2b.net",98],["hdrezka66yhfg.net",98],["hdrezka77ftyy.net",98],["hdrezka.rest",98],["hdrezkaffsg67.net",98],["hdrezkafjk2he.net",98],["hdrezkahf22hh.net",98],["hdrezkahdg24s.net",98],["hdrezkabbdh4d.net",98],["hdrezkajjfhr5.net",98],["27p6qp79zyr1.net",98],["hdrezka19139.org",98],["hdrezkap3g.org",98],["hdrezkapez.org",98],["hdrezkapoi.org",98],["hdrezkarty.org",98],["hdrezkacvb.org",98],["hdrezka.ag",98],["upivi.com",98],["hdrezka.me",98],["ikinopoisk.com",98],["kinopub.me",98],["3ivi.com",98],["rezkify.com",98],["aghdrezka.com",98],["hdrezka.re",98],["bestofkinopoisk.com",98],["rezkance.com",98],["rezkery.com",98],["rezkily.com",98],["ezhdrezka.com",98],["akinopoisk.com",98],["hdrezkaonline.com",98],["drhdrezka.com",98],["mrhdrezka.com",98],["hdrezka.sh",98],["ehdrezka.com",98],["nukinopoisk.com",98],["livekinopoisk.com",98],["betahdrezka.com",98],["cokinopoisk.com",98],["hdrezka-ag.com",98],["hdrezka.club",98],["hdrezka.cm",98],["hdrezka.co",98],["hdrezka.name",98],["hdrezka.site",98],["hdrezka.today",98],["hdrezka.tv",98],["hdrezka.website",98],["hdrezkaag.net",98],["hdrezkaweb.com",98],["hdrezkayou.com",98],["instahdrezka.com",98],["myhdrezka.com",98],["freehdrezka.com",98],["rezka.ag",98],["tryhdrezka.com",98],["cnet.com",99],["edurev.in",100],["defenseone.com",101],["govexec.com",101],["nextgov.com",101],["route-fifty.com",101],["ktmmobile.com",102],["startech.com.bd",103],["onlinecourses.ooo",104],["juracademy.de",105],["vk.com",[106,107]],["instagram.com",108],["smocca.jp",109],["community.oneplus.com",110],["lnc.nc",110],["superfilmes.ph",110],["meduza.global.ssl.fastly.net",110],["meduza.io",110],["yenisafak.com",110],["offidocs.com",110],["onedio.com",110],["hpplus.jp",110],["fullfilmcibaba1.com",110],["joom.com",110],["nbc.com",110],["maximum.ru",110],["ch3plus.com",110],["dropmefiles.com",110],["reddit.com",110],["life.ru",110],["macwelt.de",111],["pcwelt.de",111],["itemsatis.com",113],["dailymail.co.uk",114],["auchan.ua",115],["quizangel.com",116],["binge.buzz",117],["magicvalley.com",118],["brutal.io",[18,231]],["impots.gouv.fr",119],["realcleardefense.com",120],["xclient.info",121],["bejson.com",121],["gardenista.com",122],["gearside.com",123],["nytimes.com",[124,125]],["tvtropes.org",126],["justtrucks.com.au",127],["cittadinanza.biz",128],["glistranieri.it",128],["viralinindia.net",[128,138]],["ideapod.com",[128,138]],["privivkainfo.ru",128],["awebstories.com",[128,218]],["ancient.eu",129],["intramed.net",46],["protest.eu",130],["northwestfirearms.com",131],["techkings.org",131],["spookshow.net",132],["fosshub.com",133],["pokemonforever.com",134],["carsguide.com.au",135],["humo.be",136],["apksecured.com",137],["intergate.info",137],["alphapolis.co.jp",[137,162]],["chronologia.pl",[137,162]],["reportergazeta.pl",[137,162,165]],["odiarioonline.com.br",[137,174]],["nordkorea-info.de",137],["geotips.net",[137,179]],["televisiongratishd.com",[137,174,184]],["noweconomy.live",137],["naaree.com",[137,174]],["cda-hd.cc",137],["hqq.to",[137,175,192]],["tv-tokyo.co.jp",137],["arti-definisi-pengertian.info",137],["webwereld.nl",139],["palemoon.org",140],["wheel-size.com",141],["aoezone.net",142],["radioony.fm",143],["mexiconewsdaily.com",144],["technologyreview.com",145],["bdcraft.net",146],["wired.co.uk",147],["gq-magazine.co.uk",147],["glamourmagazine.co.uk",147],["youtube.com",148],["buienradar.nl",149],["watson.de",150],["clk.ink",151],["zerodot1.gitlab.io",[152,153]],["1009thecat.com",154],["1013katy.com",154],["1013themix.com",154],["1015jackfm.com",154],["1015khits.com",154],["1015thefox.com",154],["1017thebeach.com",154],["1017theteam.com",154],["1019hot.com",154],["1019online.com",154],["1019thekeg.com",154],["101thefox.net",154],["101wkqx.com",154],["1021nashicon.com",154],["1021thefox.com",154],["1023thewolf.com",154],["1025jackfm.com",154],["1027thevibe.com",154],["1029nashicon.com",154],["102thebear.com",154],["1031nowfm.com",154],["1031radiom.com",154],["1035memphis.com",154],["1035thegame.com",154],["1035wrbo.com",154],["1037nash.com",154],["1039bobfm.com",154],["1039wvbo.com",154],["1041wdlt.com",154],["1043thebridge.com",154],["1043thebridge.net",154],["1043thevibe.com",154],["1045thedan.com",154],["1045thezone.com",154],["1045wjjk.com",154],["1047krez.com",154],["1049nashicon.com",154],["1049thehits.com",154],["104thehawk.com",154],["1050talk.com",154],["1053classichits.com",154],["1053hotfm.com",154],["1053thebear.com",154],["1053thepoint.com",154],["1053thepoint.net",154],["1053wow.com",154],["1055kbuck.com",154],["1055thecat.com",154],["1057kokz.com",154],["1057nowfm.com",154],["1057thebear.com",154],["1057thex.com",154],["1057thexrocks.com",154],["1061theunderground.com",154],["1063spinfm.com",154],["1063thevibe.com",154],["1063wovo.com",154],["1065theticket.com",154],["1067thekrewe.com",154],["106x.com",154],["1070wnct.com",154],["1071bobfm.com",154],["1071thepeak.com",154],["1071thepoint.com",154],["1073wsjy.com",154],["1075nowfm.com",154],["1075thegame.com",154],["1077lakefm.com",154],["1077thebone.com",154],["1077theisland.com",154],["1079nashicon.com",154],["107countrypsk.com",154],["107nashicon.com",154],["1090kaay.com",154],["1220wkrs.com",154],["1230espnsports.com",154],["1230theteam.com",154],["1280wnam.com",154],["1290wlby.com",154],["1320thefan.com",154],["1340wmsa.com",154],["1430wcmy.com",154],["1450kven.com",154],["1480kyos.com",154],["1490wosh.com",154],["1510kga.com",154],["1590walg.com",154],["1620thezone.com",154],["1700thechamp.com",154],["2hoursmattpinfield.com",154],["600wrqx.com",154],["600wsom.com",154],["610knml.com",154],["630wpro.com",154],["640wxsm.com",154],["660wxqw.com",154],["680thefan.com",154],["770kkob.com",154],["790business.com",154],["790wpic.com",154],["810whb.com",154],["860kkat.com",154],["860utahsbigtalker.com",154],["900theticket.com",154],["921theticket.com",154],["923krst.com",154],["923thewolf.com",154],["925nashicon.com",154],["925thebear.com",154],["925thewolf.com",154],["927bobfm.com",154],["929peakfm.com",154],["929thewave.com",154],["929wbpm.com",154],["92kqrs.com",154],["92profm.com",154],["92qnashville.com",154],["931nashicon.com",154],["931thebeat.com",154],["933nashicon.com",154],["935nashfm.com",154],["935wrqn.com",154],["937nashicon.com",154],["937nowfm.com",154],["937themountain.com",154],["939northpoleradio.com",154],["939theville.com",154],["939xindy.com",154],["93q.com",154],["93wkct.com",154],["93x.com",154],["940wfaw.com",154],["941ksky.com",154],["941thebear.com",154],["941thehits.com",154],["945thedrive.com",154],["945thehawkradio.com",154],["947qdr.com",154],["947wls.com",154],["949kcmo.com",154],["949radiojondeek.com",154],["949starcountry.com",154],["949theoutlaw.com",154],["94rockradio.net",154],["951nashfm.com",154],["951kbby.com",154],["953hlf.com",154],["953thebeach.com",154],["953thescore.com",154],["955bobfm.com",154],["955glo.com",154],["955nashicon.com",154],["955thefan.com",154],["955thevibe.com",154],["957kboy.com",154],["957kpur.com",154],["957nashicon.com",154],["957thevibe.com",154],["957thewolfonline.com",154],["959therocket.com",154],["95sx.com",154],["95wiil.com",154],["95x.com",154],["961bbb.com",154],["961jamz.com",154],["961sox.com",154],["961wsox.com",154],["963nashicon.com",154],["963thezone.com",154],["963wdvd.com",154],["967shinefm.com",154],["969lacaliente.com",154],["969thewolf.com",154],["96key.com",154],["96kzel.com",154],["973eagle.com",154],["973nashfm.com",154],["975kabx.com",154],["975thevibe.com",154],["975wabd.com",154],["979nashfm.com",154],["979espnradio.com",154],["979nashicon.com",154],["979wvok.com",154],["979x.com",154],["97bht.com",154],["97rock.com",154],["980waav.com",154],["980wxlm.com",154],["981thebeat.com",154],["981themax.com",154],["981thevalley.com",154],["983nashicon.com",154],["983thekeg.com",154],["983vibe.com",154],["983wlcs.com",154],["985kissfm.net",154],["989magicfm.com",154],["989thebridge.com",154],["98theticket.com",154],["993kjoy.com",154],["995thejock.com",154],["995thewolf.com",154],["997cyk.com",154],["997cyk.org",154],["997kmjj.com",154],["997themix.com",154],["997wpro.com",154],["997wtn.com",154],["999thebuzz.com",154],["999thefoxrocks.com",154],["999thehawk.com",154],["99x.com",154],["kjmo.com",154],["nashfm100.com",154],["nashfm923krst.com",154],["nashfm1033.com",154],["nashfm1055.com",154],["nashfm929.com",154],["nashfm931.com",154],["nashfm941.com",154],["nashfm949.com",154],["nashfm981.com",154],["nashfmwisconsin.com",154],["nashicon989.com",154],["v100rocks.com",154],["albanymagic.com",154],["alice1077.com",154],["allthehitsb951.com",154],["alt1019.com",154],["alt1049albany.com",154],["alt2k.com",154],["alt923.com",154],["alt98.com",154],["am630.net",154],["amarillosrockstation.com",154],["americanpatriotmedia.com",154],["annarbors107one.com",154],["atlantasrockstation.com",154],["atlsportsx.com",154],["b106fm.com",154],["b1073.com",154],["b95.com",154],["b979.net",154],["b98.com",154],["b985slo.com",154],["b987.com",154],["bakersfieldespn.com",154],["bakersfieldespnsports.com",154],["beach985.com",154],["beachboogieandblues.com",154],["bear104.com",154],["big1013.com",154],["bigcheese1079.com",154],["bigcountry1073.com",154],["bigdawg985.com",154],["bigdog1067.com",154],["bigfrog101.com",154],["bigfroggy1053.com",154],["bigtalk1490.com",154],["blairgarner.com",154],["blazin1023.com",154],["blazin923.com",154],["bloomingtonhits.com",154],["bobfmspringfield.com",154],["bowlinggreensam.com",154],["bull973.com",154],["bxr.com",154],["caperadio1550.com",154],["catcountry.com",154],["catcountry96.com",154],["catcountryvermont.com",154],["cbssports1430.com",154],["cbssportserie.com",154],["cbssportsharrisburg.com",154],["cbssportsradio1430.com",154],["chicothunderheads.com",154],["christmas989.com",154],["ckrv.com",154],["classicfox.com",154],["classichits1033.com",154],["classichitsmy1059.com",154],["classichitswnyq.com",154],["classy100.com",154],["coast1013.com",154],["coast973.com",154],["country105fm.net",154],["countrycountdownusa.com",154],["countrylegends1059.com",154],["countrymi.com",154],["coyote1025.com",154],["cumulusdigital.com",154],["digitalsolutions201.com",154],["e93fm.com",154],["eagle97.com",154],["eagle993.com",154],["easy991.com",154],["ed.fm",154],["elizabethtownradio.com",154],["energy939indy.com",154],["espn1320columbia.com",154],["espn910.com",154],["espnhonolulu.com",154],["espnlouisville.com",154],["espnlv.com",154],["espnradio1280.com",154],["espnradio927.com",154],["espnradio941.com",154],["espnsyracuse.com",154],["espnur.com",154],["espnwestpalm.com",154],["espnwilmington.com",154],["fly92.com",154],["fly923.com",154],["fm102milwaukee.com",154],["fm102one.com",154],["fonzfm.com",154],["forevereaston.com",154],["forevermediayork.com",154],["fox969.com",154],["foxcincinnati.com",154],["foxsportsredding.com",154],["froggy1003.com",154],["froggy101fm.com",154],["froggy981.com",154],["froggy99.net",154],["froggycountry.net",154],["froggyland.com",154],["fuego1029.com",154],["fun1013.com",154],["fun969fm.com",154],["generations1023.com",154],["glory985.com",154],["go106.com",154],["goradioheartland.com",154],["gospel900.com",154],["gulf104.com",154],["heaven1460.com",154],["heaven983.com",154],["hitkicker997.com",154],["hitpage.com",154],["hits931fm.com",154],["hits96.com",154],["hits965.com",154],["hot1005.com",154],["hot100blono.com",154],["hot100nrv.com",154],["hot101.com",154],["hot102.net",154],["hot1033.com",154],["hot1039.com",154],["hot1047fm.com",154],["hot1057.com",154],["hot1063.com",154],["hot1067fm.com",154],["hot1067pa.com",154],["hot1077radio.com",154],["hot92and100.com",154],["hot933hits.com",154],["hot941.com",154],["hot967fm.com",154],["hvradionet.com",154],["i973hits.com",154],["ilovethehits.com",154],["indysmix.com",154],["jammin999fm.com",154],["jamz963.com",154],["jox2fm.com",154],["joxfm.com",154],["k100country.com",154],["k104online.com",154],["k105country.com",154],["k92radio.com",154],["k983.com",154],["kabc.com",154],["kaok.com",154],["kaperadio1550.com",154],["katm.com",154],["katt.com",154],["kbcy.com",154],["kber.com",154],["kboi.com",154],["kbul.com",154],["kbull93.com",154],["kcchiefsradio.com",154],["kcheradio.com",154],["kcmotalkradio.com",154],["kcmxam.com",154],["kennradio.com",154],["kernradio.com",154],["kesn1033.com",154],["key101fm.com",154],["kfru.com",154],["kftx.com",154],["kgfm.com",154],["kgfw.com",154],["kggo.com",154],["kgmo.com",154],["kgoradio.com",154],["khay.com",154],["khfm.com",154],["khfm.org",154],["khit1075.com",154],["khop.com",154],["khvl.com",154],["kiimfm.com",154],["kiss-1031.com",154],["kix1029.com",154],["kix106.com",154],["kix96.com",154],["kizn.com",154],["kjjy.com",154],["kjoy.com",154],["kkcy.com",154],["kkfm.com",154],["kkgb.com",154],["kkgl.com",154],["kkoh.com",154],["klif.com",154],["klik1240.com",154],["klin.com",154],["klur.com",154],["kmaj.com",154],["kmaj1440.com",154],["kmez1029.com",154],["kmjnow.com",154],["knbr.com",154],["knek.com",154],["kobfm.com",154],["kpla.com",154],["kpur107.com",154],["kqfc.com",154],["kqky.com",154],["kqms.com",154],["kqxy.com",154],["krbe.com",154],["krmd.com",154],["krny.com",154],["krrq.com",154],["krush925.com",154],["kruz1033.com",154],["ksam1017.com",154],["kscrhits.com",154],["kscs.com",154],["ksfo.com",154],["kshasta.com",154],["ksks.com",154],["ksmb.com",154],["ktcx.com",154],["ktik.com",154],["ktop1490.com",154],["ktucam.com",154],["kubaradio.com",154],["kubb.com",154],["kugn.com",154],["kuzz.com",154],["kuzzradio.com",154],["kvor.com",154],["kwin.com",154],["kwwr.com",154],["kxel.com",154],["kxzz1580am.com",154],["kyis.com",154],["kykz.com",154],["kzwafm.com",154],["la103.com",154],["laindomable.com",154],["laleync.com",154],["lanuevaomaha.com",154],["lite102.com",154],["literock105fm.com",154],["love105fm.com",154],["lvfoxsports.com",154],["magic1029fm.com",154],["magic1039fm.com",154],["magic1069.com",154],["magic1073.com",154],["magic1073fm.com",154],["magic93fm.com",154],["magic943fm.com",154],["magic979wtrg.com",154],["magic995abq.com",154],["majic97monroe.com",154],["majicspace.com",154],["maverick1023.com",154],["max94one.com",154],["maxrocks.net",154],["mega979.com",154],["mgeradio.com",154],["milwaukeesparty.com",154],["mix103.com",154],["mix1077albany.com",154],["mix965.net",154],["modernrock987.com",154],["montanassuperstation.com",154],["movin993.com",154],["muskegonnashicon.com",154],["my1059.com",154],["my961.com",154],["myblono.com",154],["mycolumbiabasin.com",154],["myfroggy95.com",154],["mykiss973.com",154],["mymagic106.com",154],["mymix1051.com",154],["mymix1061.com",154],["mymix961.com",154],["mystar98.com",154],["nashcountrydaily.com",154],["nashdetroit.com",154],["nashfm1007.com",154],["nashfm1011.com",154],["nashfm1017.com",154],["nashfm1025.com",154],["nashfm1027.com",154],["nashfm1061.com",154],["nashfm1065.com",154],["nashfm923.com",154],["nashfm937.com",154],["nashfm943.com",154],["nashfm951.com",154],["nashfm973.com",154],["nashfm991.com",154],["nashfmgreenbay.com",154],["nashfmsjo.com",154],["nashnightslive.net",154],["nashpensacola.com",154],["ncsportsradio.com",154],["nepasespnradio.com",154],["neuhoffmedia.com",154],["neuhoffmedialafayette.com",154],["newcountry963.com",154],["newsradio1029.com",154],["newsradio1440.com",154],["newsradioflorida.com",154],["newsradiokkob.com",154],["newsserver1.com",154],["newsserver2.com",154],["newsserver3.com",154],["newstalk1030.com",154],["newstalk1290koil.com",154],["newstalk730.com",154],["newstalk987.com",154],["newstalkwsba.com",154],["newswebradiocompany.net",154],["now937.com",154],["nrgmedia.com",154],["nrq.com",154],["og979.com",154],["okiecountry1017.com",154],["oldiesz104.com",154],["ottawaradio.net",154],["pensacolasjet.com",154],["peorias923.com",154],["picklefm.com",154],["pikefm.com",154],["planet1067.com",154],["pmbbroadcasting.com",154],["pmbradio.com",154],["power1021.com",154],["power103.com",154],["power1057.com",154],["power1069fm.com",154],["power923.com",154],["power94radio.com",154],["power955.com",154],["powerhits95.com",154],["powerslc.com",154],["praise1025fm.com",154],["purerock96.com",154],["q1005.com",154],["q1031fm.com",154],["q105.fm",154],["q1055.com",154],["q1061.com",154],["q106dot5.com",154],["q973radio.com",154],["q97country.com",154],["q98fm.com",154],["q997atlanta.com",154],["q99fm.com",154],["radio1039ny.com",154],["radiorockriver.com",154],["radiowoodstock.com",154],["realcountry1280whvr.com",154],["realcountryhv.com",154],["red1031.com",154],["red945.com",154],["rewind1019.com",154],["rickandsasha.com",154],["rock101.net",154],["rock1015.com",154],["rock103albany.com",154],["rock103rocks.com",154],["rock106.net",154],["rock107fm.com",154],["rock108.com",154],["rock945vt.com",154],["rockdaily.com",154],["rocknews.com",154],["rockofsavannah.com",154],["rockofsavannah.net",154],["softrock941.com",154],["southernillinoisnow.com",154],["southernsportstoday.com",154],["sportsanimal920.com",154],["sportsanimalabq.com",154],["sportscapitoldc.com",154],["sportshubtriad.com",154],["sportsradio1270.com",154],["sportsradio1440.com",154],["sportsradio1560.com",154],["sportsradio590am.com",154],["sportsradio740.com",154],["sportsradio967.com",154],["sportsradio970.com",154],["sportsradiobeaumont.com",154],["sportsradioberks.com",154],["sportsradiownml.com",154],["star98.net",154],["starfm1023.com",154],["starsplash.com",154],["stevegormanrocks.com",154],["sunny1031.com",154],["sunny1069fm.com",154],["sunny923.com",154],["sunny983.com",154],["sunnymuskegon.com",154],["supertalk1570.com",154],["sweet985.com",154],["talk104fm.com",154],["talk995.com",154],["talkradio1007.com",154],["tbhpod.com",154],["teammyrtlebeach.com",154],["test107.com",154],["thebear925.com",154],["thebigjab.com",154],["thebigstation93blx.com",154],["theblairgarnershow.com",154],["theconclave.com",154],["thefan1075.com",154],["thefanfm.com",154],["thegame541.com",154],["thehippo.com",154],["thehot1039.com",154],["thenewhotfm.com",154],["thenewpulsefm.com",154],["thepointontheweb.com",154],["therebelrocks.com",154],["therocket951.com",154],["therockstationz93.com",154],["thescore1260.com",154],["thesportsanimal.com",154],["theticket.com",154],["theticket1007.com",154],["theticket102.com",154],["theticket1590.com",154],["theticketmi.com",154],["thetybentlishow.com",154],["thevalley981.com",154],["thewolf1051.com",154],["thewolf951.com",154],["thisisqmusic.com",154],["thunder1073.com",154],["triadsports.com",154],["tuligaradio.com",154],["umpsports.com",154],["v100fm.com",154],["v1033.com",154],["vermilioncountyfirst.com",154],["vermillioncountyfirst.com",154],["w3dcountry.com",154],["w4country.com",154],["wa1a.com",154],["wabcradio.com",154],["walk975.com",154],["walkradio.com",154],["warm1033.com",154],["warm98.com",154],["waysam.com",154],["wbap.com",154],["wbbw.com",154],["wbmq.net",154],["wbnq.com",154],["wbpm929.com",154],["wbpmfm.com",154],["wbwn.com",154],["wcbm.com",154],["wceiradio.com",154],["wcfx.com",154],["wchv.com",154],["wclg.com",154],["wcoapensacola.com",154],["wcpqfm.com",154],["wcpt820.com",154],["wcpt820.net",154],["wcpt820am.com",154],["wcpt820am.net",154],["wcptam.com",154],["wcptam.net",154],["wcptamfm.com",154],["wcptamfm.net",154],["wcptamfm.org",154],["wcpyfm.com",154],["wctk.com",154],["wddoam.com",154],["wden.com",154],["wdml.com",154],["wdst.com",154],["wdst.org",154],["wdzz.com",154],["wedg.com",154],["werkfm.net",154],["werkradio.com",154],["wfasam.com",154],["wfav951.com",154],["wfmd.com",154],["wfms.com",154],["wfnc640am.com",154],["wfre.com",154],["wftw.com",154],["wgh1310.com",154],["wghsolidgold.com",154],["wglx.com",154],["wgni.com",154],["wgow.com",154],["wgowam.com",154],["wgrr.com",154],["whdg.com",154],["wheelz1045.com",154],["whli.com",154],["whrpfm.com",154],["whtt.com",154],["whud.com",154],["wild1029.com",154],["wild1049hd.com",154],["wild1061.com",154],["wild993fm.com",154],["wildcatsradio1290.com",154],["wink104.com",154],["winxfm.com",154],["wiog.com",154],["wiov.com",154],["wiov985.com",154],["wivk.com",154],["wivr1017.com",154],["wizn.com",154],["wjbc.com",154],["wjcw.com",154],["wjez.com",154],["wjjr.net",154],["wjoxam.com",154],["wjr.com",154],["wkav.com",154],["wkbethepoint.com",154],["wkga975.com",154],["wkhx.com",154],["wkmoradio.com",154],["wkol.com",154],["wkrs.com",154],["wkrufm.com",154],["wksm.com",154],["wkydeportes.com",154],["wlaq1410.com",154],["wlav.com",154],["wlbc.com",154],["wlevradio.com",154],["wlkwradio.com",154],["wlok.com",154],["wlsam.com",154],["wlum.com",154],["wlup.com",154],["wlwi.com",154],["wmac-am.com",154],["wmal.com",154],["wmqa.com",154],["wncv.com",154],["wogb.fm",154],["woko.com",154],["womg.com",154],["woodstockbroadcasting.com",154],["woodstockcommunication.com",154],["woodstockradio.net",154],["woodstocktv.net",154],["wovo1063.com",154],["wovofm.com",154],["wqut.com",154],["wqvealbany.com",154],["wrganews.com",154],["wrgm.com",154],["wrlo.com",154],["wrr101.com",154],["wrul.com",154],["wsba910.com",154],["wsfl.com",154],["wsjssports.com",154],["wskz.com",154],["wsyb1380am.com",154],["wtka.com",154],["wtma.com",154],["wtrxsports.com",154],["wttlradio.com",154],["wuuqradio.com",154],["wvel.com",154],["wvli927.com",154],["wvlkam.com",154],["wvnn.com",154],["wwck.com",154],["wwki.com",154],["wwqq101.com",154],["wxfx.com",154],["wxkr.com",154],["wxpkfm.com",154],["wynn1063.com",154],["wzpl.com",154],["wzyp.com",154],["wzzl.com",154],["x1051kc.com",154],["x95radio.com",154],["xs961.com",154],["xtrasports1300.com",154],["y-103.com",154],["y101hits.com",154],["y102montgomery.com",154],["y1065.com",154],["yesfm.net",154],["z1023online.com",154],["z1029.com",154],["z1075.com",154],["z937.com",154],["z93jamz.com",154],["z96.com",154],["z971.com",154],["zone1150.com",154],["zrock103.com",154],["zrockfm.com",154],["windows101tricks.com",155],["waaw.tv",156],["hqq.tv",[156,157]],["fontsfree.pro",158],["adslayuda.com",160],["avdelphi.com",161],["ds2play.com",163],["ds2video.com",163],["d0o0d.com",163],["vidembed.me",163],["mzzcloud.life",163],["videobot.stream",163],["justswallows.net",163],["onscreensvideo.com",163],["katerionews.com",163],["telenovelas-turcas.com.es",163],["kmo.to",163],["jeniusplay.com",[163,232]],["rsadnetworkinfo.com",[163,174]],["rsinsuranceinfo.com",[163,174]],["rsfinanceinfo.com",[163,174]],["rsgamer.app",[163,174]],["rssoftwareinfo.com",[163,174]],["rshostinginfo.com",[163,174]],["rseducationinfo.com",[163,174]],["4x4earth.com",71],["jootc.com",[164,165]],["photobank.mainichi.co.jp",166],["tbs.co.jp",167],["sovetromantica.com",169],["longecity.org",170],["magnet-novels.com",171],["torrentlawyer.com",[171,176,181,182]],["fruit01.xyz",172],["lyricstranslate.com",173],["hardcoregames.ca",174],["allsmo.com",174],["themosvagas.com.br",174],["urbharat.xyz",174],["sportnews.to",[174,184]],["2embed.ru",175],["sbasian.pro",175],["miraculous.to",[175,195]],["vtplayer.net",175],["pepperlive.info",175],["unbiasedsenseevent.com",175],["maxt.church",175],["cool-etv.net",175],["vgembed.com",[175,226]],["photopea.com",175],["szkolawohyn.pl",176],["virpe.cc",176],["gmarket.co.kr",[176,182]],["paesifantasma.it",177],["talpo.it",177],["quora.com",178],["gmx.net",180],["hoca4u.com",182],["youmath.it",183],["renditepassive.net",[185,186,187,188,189]],["360doc.com",190],["logonews.cn",191],["thetodaypost.com",[192,197,201]],["cloudcomputingtopics.net",192],["0123movies.ch",[192,197,201,230]],["epn.bz",68],["affbank.com",34],["gardenia.net",[193,194]],["novelpia.com",[196,197]],["blueraindrops.com",199],["animecruzers.com",200],["descargatepelis.com",201],["news.ntv.co.jp",201],["bestjavporn.com",202],["mm9841.cc",202],["ggwash.org",[203,204]],["cinegrabber.com",207],["layarkacaxxi.icu",208],["readawrite.com",[209,210,211,212,213,214,215]],["dropgalaxy.com",216],["morosedog.gitlab.io",217],["indianhealthyrecipes.com",219],["tarnkappe.info",220],["heavyfetish.com",221],["joysound.com",[222,223,224]],["colors.sonicthehedgehog.com",[224,227]],["leakedzone.com",228],["mehoathinh2.com",229],["powerline.io",231],["bestx.stream",233],["moviesapi.club",233],["watchx.top",233],["enduro-mtb.com",234],["kukaj.io",235],["animesaga.in",236],["animesuge.to",237],["aniwave.to",237],["hdtoday.so",237],["hurawatch.bz",237],["lazyadmin.nl",7],["thejakartapost.com",238],["fullxh.com",239],["megaxh.com",239],["unlockxh4.com",239],["xhadult2.com",239],["xhadult3.com",239],["xhadult4.com",239],["xhadult5.com",239],["xhamster46.com",239],["xhday.com",239],["xhday1.com",239],["xhmoon5.com",239],["xhplanet1.com",239],["xhplanet2.com",239],["xhreal2.com",239],["xhreal3.com",239],["xhtab2.com",239],["xhvictory.com",239],["xhwebsite.com",239],["xhwebsite2.com",239],["xhwide1.com",239],["xhwide8.com",239],["marinetraffic.com",240],["ymovies.vip",241],["aniwatch.to",241],["megacloud.tv",241],["netuplayer.top",241],["stbnetu.xyz",241],["androidpolice.com",242],["makeuseof.com",242],["movieweb.com",242],["xda-developers.com",242],["thegamer.com",242],["cbr.com",242],["gamerant.com",242],["screenrant.com",242],["howtogeek.com",242],["thethings.com",242],["simpleflying.com",242],["dualshockers.com",242],["digminecraft.com",243]]);

const entitiesMap = new Map([["18comic",22],["earnload",151],["hindipix",[156,157]],["doods",163],["videovard",163],["123movies",175],["brainly",198],["ask4movie",[205,206]],["bluemediafile",225],["vidplay",237],["hamsterix",239],["xhamster",239],["xhamster1",239],["xhamster10",239],["xhamster11",239],["xhamster12",239],["xhamster13",239],["xhamster14",239],["xhamster15",239],["xhamster16",239],["xhamster17",239],["xhamster18",239],["xhamster19",239],["xhamster20",239],["xhamster2",239],["xhamster3",239],["xhamster4",239],["xhamster5",239],["xhamster7",239],["xhamster8",239],["netu",241]]);

const exceptionsMap = new Map([["m.rp5.ru",[97]],["m.rp5.by",[97]],["m.rp5.kz",[97]],["m.rp5.co.uk",[97]],["m.rp5.md",[97]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
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
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    try { setConstant(...argsList[i]); }
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
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
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
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
