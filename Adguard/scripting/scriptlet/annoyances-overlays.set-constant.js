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
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["ezAardvarkDetected","false"],["inxBX.failed","false"],["isadblocking","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["adsAllowed2","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["alert","undefined"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["WO.adblock.useAdblocker","false"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["history.state","undefined"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["WSI.contentPersonalization.hideEmailCaptureOverlay","true"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["displayed","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["is_adblocker_in_use","false"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["pbi_analytics","true"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["console.clear","undefined"],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["devtoolsDetector","1"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,101]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,103]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["kooora.com",7],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,13]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,162]],["walterfootball.com",7],["dotesports.com",7],["boredpanda.com",7],["cleveland.com",7],["scitechdaily.com",8],["thewindowsclub.com",8],["posti.mail.ee",9],["inbox.lv",9],["workingdays.org",10],["stash.sussy.moe",11],["android.com.pl",12],["fosslinux.com",14],["nexusmods.com",15],["1001tracklists.com",17],["autogaleria.pl",18],["basicweb.ru",19],["brainly.com",20],["brighteon.com",21],["cda.pl",22],["chefkoch.de",23],["chip.de",24],["civicx.com",25],["comnuan.com",26],["corriere.it",27],["creatur.io",28],["drnasserelbatal.com",28],["file.fm",28],["files.fm",28],["gamehag.com",28],["onlinehashcrack.com",28],["scantrad.net",28],["timebucks.com",28],["uderent.com",28],["ctrlv.cz",29],["cx30-forum.de",[30,31]],["telefon-treff.de",[30,31]],["cyberpedia.su",32],["kukuo.tw",32],["studopedia.info",32],["infopedia.su",32],["studopedia.net",32],["studopedia.su",32],["studopedia.org",32],["studopedia.ru",32],["studopedia.com.ua",32],["lektsii.org",32],["mydocx.ru",32],["dallasobserver.com",33],["digilibraries.com",34],["dniwolne.eu",35],["jeshoots.com",35],["webcamtaxi.com",35],["doodlr.io",36],["evades.io",37],["everyeye.it",38],["foxnews.com",39],["gameblog.fr",40],["lapumia.org",40],["gazzetta.it",41],["icy-veins.com",42],["inoreader.com",[43,44]],["investing.com",45],["it-actual.ru",46],["lowcygier.pl",47],["malaysiastock.biz",48],["marriedgames.com.br",49],["megagames.com",50],["metasrc.com",51],["meteoblue.com",52],["mgsm.pl",53],["minijuegos.com",54],["miniwebtool.com",55],["mrexcel.com",56],["nu.nl",[57,120]],["easy-learn-tech.info",58],["one-click-tutorials.info",58],["solvetube.site",58],["getintopc.com",58],["preguntandroid.com",59],["iteramos.com",59],["pyrogram.org",60],["qiwihelp.net",61],["r3owners.net",62],["remont-aud.net",63],["salon.com",[64,65]],["satelliteguys.us",66],["signupgenius.com",67],["ingles.com",[68,69,70]],["spanishdict.com",[68,69,70]],["starsandstripesfc.com",71],["polygon.com",71],["strangermeetup.com",[72,153]],["thec64community.online",73],["thehindu.com",74],["titulky.com",[75,76]],["ucoin.net",77],["venea.net",78],["vimm.net",79],["wikihow.com",80],["wvnews.com",81],["xgp.pl",82],["yorumbudur.com",83],["yusepjaelani.blogspot.com",84],["weather.com",85],["m.rp5.ru",86],["m.rp5.by",86],["m.rp5.kz",86],["m.rp5.co.uk",86],["m.rp5.md",86],["rp5.ru",87],["rp5.ua",87],["rp5.by",87],["rp5.kz",87],["rp5.co.uk",87],["rp5.md",87],["wetteronline.de",88],["hdrezkabmmshq.org",89],["hdrezkafh28d9.org",89],["hdrezkasmakyy.org",89],["hdrezkafhs83u.org",89],["hdrezkahs920s.org",89],["hdrezka.in",89],["hdrezkat5ee2w.org",89],["hdrezkagdvv2b.net",89],["hdrezka66yhfg.net",89],["hdrezka77ftyy.net",89],["hdrezka.rest",89],["hdrezkaffsg67.net",89],["hdrezkafjk2he.net",89],["hdrezkahf22hh.net",89],["hdrezkahdg24s.net",89],["hdrezkabbdh4d.net",89],["hdrezkajjfhr5.net",89],["27p6qp79zyr1.net",89],["hdrezka19139.org",89],["hdrezkap3g.org",89],["hdrezkapez.org",89],["hdrezkapoi.org",89],["hdrezkarty.org",89],["hdrezkacvb.org",89],["hdrezka.ag",89],["upivi.com",89],["hdrezka.me",89],["ikinopoisk.com",89],["kinopub.me",89],["3ivi.com",89],["rezkify.com",89],["aghdrezka.com",89],["hdrezka.re",89],["bestofkinopoisk.com",89],["rezkance.com",89],["rezkery.com",89],["rezkily.com",89],["ezhdrezka.com",89],["akinopoisk.com",89],["hdrezkaonline.com",89],["drhdrezka.com",89],["mrhdrezka.com",89],["hdrezka.sh",89],["ehdrezka.com",89],["nukinopoisk.com",89],["livekinopoisk.com",89],["betahdrezka.com",89],["cokinopoisk.com",89],["hdrezka-ag.com",89],["hdrezka.club",89],["hdrezka.cm",89],["hdrezka.co",89],["hdrezka.name",89],["hdrezka.site",89],["hdrezka.today",89],["hdrezka.tv",89],["hdrezka.website",89],["hdrezkaag.net",89],["hdrezkaweb.com",89],["hdrezkayou.com",89],["instahdrezka.com",89],["myhdrezka.com",89],["freehdrezka.com",89],["rezka.ag",89],["tryhdrezka.com",89],["cnet.com",90],["edurev.in",91],["defenseone.com",92],["govexec.com",92],["nextgov.com",92],["route-fifty.com",92],["ktmmobile.com",93],["startech.com.bd",94],["onlinecourses.ooo",95],["juracademy.de",96],["vk.com",[97,98]],["instagram.com",99],["smocca.jp",100],["lnc.nc",101],["superfilmes.ph",101],["meduza.global.ssl.fastly.net",101],["meduza.io",101],["yenisafak.com",101],["offidocs.com",101],["onedio.com",101],["hpplus.jp",101],["fullfilmcibaba1.com",101],["joom.com",101],["nbc.com",101],["maximum.ru",101],["ch3plus.com",101],["dropmefiles.com",101],["reddit.com",101],["life.ru",101],["macwelt.de",102],["pcwelt.de",102],["itemsatis.com",104],["dailymail.co.uk",105],["auchan.ua",106],["quizangel.com",107],["binge.buzz",108],["pbteen.com",109],["potterybarn.com",109],["potterybarnkids.com",109],["westelm.com",109],["williams-sonoma.com",109],["magicvalley.com",110],["brutal.io",[12,228]],["impots.gouv.fr",111],["realcleardefense.com",112],["xclient.info",113],["bejson.com",113],["gardenista.com",114],["opensubtitles.org",115],["gearside.com",116],["nytimes.com",[117,118]],["tvtropes.org",119],["justtrucks.com.au",121],["cittadinanza.biz",122],["glistranieri.it",122],["viralinindia.net",[122,132]],["ideapod.com",[122,132]],["privivkainfo.ru",122],["awebstories.com",[122,214]],["ancient.eu",123],["intramed.net",40],["protest.eu",124],["northwestfirearms.com",125],["techkings.org",125],["spookshow.net",126],["fosshub.com",127],["pokemonforever.com",128],["carsguide.com.au",129],["humo.be",130],["apksecured.com",131],["intergate.info",131],["alphapolis.co.jp",[131,157]],["chronologia.pl",[131,157]],["reportergazeta.pl",[131,157,159]],["odiarioonline.com.br",[131,168]],["nordkorea-info.de",131],["geotips.net",[131,174]],["televisiongratishd.com",[131,168,179]],["noweconomy.live",131],["naaree.com",[131,168]],["cda-hd.cc",131],["hqq.to",[131,169,187]],["tv-tokyo.co.jp",131],["arti-definisi-pengertian.info",131],["webwereld.nl",133],["palemoon.org",134],["wheel-size.com",135],["aoezone.net",136],["radioony.fm",137],["mexiconewsdaily.com",138],["technologyreview.com",139],["bdcraft.net",140],["wired.co.uk",141],["gq-magazine.co.uk",141],["glamourmagazine.co.uk",141],["youtube.com",142],["buienradar.nl",143],["watson.de",144],["clk.ink",145],["zerodot1.gitlab.io",[146,147]],["1009thecat.com",148],["1013katy.com",148],["1013themix.com",148],["1015jackfm.com",148],["1015khits.com",148],["1015thefox.com",148],["1017thebeach.com",148],["1017theteam.com",148],["1019hot.com",148],["1019online.com",148],["1019thekeg.com",148],["101thefox.net",148],["101wkqx.com",148],["1021nashicon.com",148],["1021thefox.com",148],["1023thewolf.com",148],["1025jackfm.com",148],["1027thevibe.com",148],["1029nashicon.com",148],["102thebear.com",148],["1031nowfm.com",148],["1031radiom.com",148],["1035memphis.com",148],["1035thegame.com",148],["1035wrbo.com",148],["1037nash.com",148],["1039bobfm.com",148],["1039wvbo.com",148],["1041wdlt.com",148],["1043thebridge.com",148],["1043thebridge.net",148],["1043thevibe.com",148],["1045thedan.com",148],["1045thezone.com",148],["1045wjjk.com",148],["1047krez.com",148],["1049nashicon.com",148],["1049thehits.com",148],["104thehawk.com",148],["1050talk.com",148],["1053classichits.com",148],["1053hotfm.com",148],["1053thebear.com",148],["1053thepoint.com",148],["1053thepoint.net",148],["1053wow.com",148],["1055kbuck.com",148],["1055thecat.com",148],["1057kokz.com",148],["1057nowfm.com",148],["1057thebear.com",148],["1057thex.com",148],["1057thexrocks.com",148],["1061theunderground.com",148],["1063spinfm.com",148],["1063thevibe.com",148],["1063wovo.com",148],["1065theticket.com",148],["1067thekrewe.com",148],["106x.com",148],["1070wnct.com",148],["1071bobfm.com",148],["1071thepeak.com",148],["1071thepoint.com",148],["1073wsjy.com",148],["1075nowfm.com",148],["1075thegame.com",148],["1077lakefm.com",148],["1077thebone.com",148],["1077theisland.com",148],["1079nashicon.com",148],["107countrypsk.com",148],["107nashicon.com",148],["1090kaay.com",148],["1220wkrs.com",148],["1230espnsports.com",148],["1230theteam.com",148],["1280wnam.com",148],["1290wlby.com",148],["1320thefan.com",148],["1340wmsa.com",148],["1430wcmy.com",148],["1450kven.com",148],["1480kyos.com",148],["1490wosh.com",148],["1510kga.com",148],["1590walg.com",148],["1620thezone.com",148],["1700thechamp.com",148],["2hoursmattpinfield.com",148],["600wrqx.com",148],["600wsom.com",148],["610knml.com",148],["630wpro.com",148],["640wxsm.com",148],["660wxqw.com",148],["680thefan.com",148],["770kkob.com",148],["790business.com",148],["790wpic.com",148],["810whb.com",148],["860kkat.com",148],["860utahsbigtalker.com",148],["900theticket.com",148],["921theticket.com",148],["923krst.com",148],["923thewolf.com",148],["925nashicon.com",148],["925thebear.com",148],["925thewolf.com",148],["927bobfm.com",148],["929peakfm.com",148],["929thewave.com",148],["929wbpm.com",148],["92kqrs.com",148],["92profm.com",148],["92qnashville.com",148],["931nashicon.com",148],["931thebeat.com",148],["933nashicon.com",148],["935nashfm.com",148],["935wrqn.com",148],["937nashicon.com",148],["937nowfm.com",148],["937themountain.com",148],["939northpoleradio.com",148],["939theville.com",148],["939xindy.com",148],["93q.com",148],["93wkct.com",148],["93x.com",148],["940wfaw.com",148],["941ksky.com",148],["941thebear.com",148],["941thehits.com",148],["945thedrive.com",148],["945thehawkradio.com",148],["947qdr.com",148],["947wls.com",148],["949kcmo.com",148],["949radiojondeek.com",148],["949starcountry.com",148],["949theoutlaw.com",148],["94rockradio.net",148],["951nashfm.com",148],["951kbby.com",148],["953hlf.com",148],["953thebeach.com",148],["953thescore.com",148],["955bobfm.com",148],["955glo.com",148],["955nashicon.com",148],["955thefan.com",148],["955thevibe.com",148],["957kboy.com",148],["957kpur.com",148],["957nashicon.com",148],["957thevibe.com",148],["957thewolfonline.com",148],["959therocket.com",148],["95sx.com",148],["95wiil.com",148],["95x.com",148],["961bbb.com",148],["961jamz.com",148],["961sox.com",148],["961wsox.com",148],["963nashicon.com",148],["963thezone.com",148],["963wdvd.com",148],["967shinefm.com",148],["969lacaliente.com",148],["969thewolf.com",148],["96key.com",148],["96kzel.com",148],["973eagle.com",148],["973nashfm.com",148],["975kabx.com",148],["975thevibe.com",148],["975wabd.com",148],["979nashfm.com",148],["979espnradio.com",148],["979nashicon.com",148],["979wvok.com",148],["979x.com",148],["97bht.com",148],["97rock.com",148],["980waav.com",148],["980wxlm.com",148],["981thebeat.com",148],["981themax.com",148],["981thevalley.com",148],["983nashicon.com",148],["983thekeg.com",148],["983vibe.com",148],["983wlcs.com",148],["985kissfm.net",148],["989magicfm.com",148],["989thebridge.com",148],["98theticket.com",148],["993kjoy.com",148],["995thejock.com",148],["995thewolf.com",148],["997cyk.com",148],["997cyk.org",148],["997kmjj.com",148],["997themix.com",148],["997wpro.com",148],["997wtn.com",148],["999thebuzz.com",148],["999thefoxrocks.com",148],["999thehawk.com",148],["99x.com",148],["kjmo.com",148],["nashfm100.com",148],["nashfm923krst.com",148],["nashfm1033.com",148],["nashfm1055.com",148],["nashfm929.com",148],["nashfm931.com",148],["nashfm941.com",148],["nashfm949.com",148],["nashfm981.com",148],["nashfmwisconsin.com",148],["nashicon989.com",148],["v100rocks.com",148],["albanymagic.com",148],["alice1077.com",148],["allthehitsb951.com",148],["alt1019.com",148],["alt1049albany.com",148],["alt2k.com",148],["alt923.com",148],["alt98.com",148],["am630.net",148],["amarillosrockstation.com",148],["americanpatriotmedia.com",148],["annarbors107one.com",148],["atlantasrockstation.com",148],["atlsportsx.com",148],["b106fm.com",148],["b1073.com",148],["b95.com",148],["b979.net",148],["b98.com",148],["b985slo.com",148],["b987.com",148],["bakersfieldespn.com",148],["bakersfieldespnsports.com",148],["beach985.com",148],["beachboogieandblues.com",148],["bear104.com",148],["big1013.com",148],["bigcheese1079.com",148],["bigcountry1073.com",148],["bigdawg985.com",148],["bigdog1067.com",148],["bigfrog101.com",148],["bigfroggy1053.com",148],["bigtalk1490.com",148],["blairgarner.com",148],["blazin1023.com",148],["blazin923.com",148],["bloomingtonhits.com",148],["bobfmspringfield.com",148],["bowlinggreensam.com",148],["bull973.com",148],["bxr.com",148],["caperadio1550.com",148],["catcountry.com",148],["catcountry96.com",148],["catcountryvermont.com",148],["cbssports1430.com",148],["cbssportserie.com",148],["cbssportsharrisburg.com",148],["cbssportsradio1430.com",148],["chicothunderheads.com",148],["christmas989.com",148],["ckrv.com",148],["classicfox.com",148],["classichits1033.com",148],["classichitsmy1059.com",148],["classichitswnyq.com",148],["classy100.com",148],["coast1013.com",148],["coast973.com",148],["country105fm.net",148],["countrycountdownusa.com",148],["countrylegends1059.com",148],["countrymi.com",148],["coyote1025.com",148],["cumulusdigital.com",148],["digitalsolutions201.com",148],["e93fm.com",148],["eagle97.com",148],["eagle993.com",148],["easy991.com",148],["ed.fm",148],["elizabethtownradio.com",148],["energy939indy.com",148],["espn1320columbia.com",148],["espn910.com",148],["espnhonolulu.com",148],["espnlouisville.com",148],["espnlv.com",148],["espnradio1280.com",148],["espnradio927.com",148],["espnradio941.com",148],["espnsyracuse.com",148],["espnur.com",148],["espnwestpalm.com",148],["espnwilmington.com",148],["fly92.com",148],["fly923.com",148],["fm102milwaukee.com",148],["fm102one.com",148],["fonzfm.com",148],["forevereaston.com",148],["forevermediayork.com",148],["fox969.com",148],["foxcincinnati.com",148],["foxsportsredding.com",148],["froggy1003.com",148],["froggy101fm.com",148],["froggy981.com",148],["froggy99.net",148],["froggycountry.net",148],["froggyland.com",148],["fuego1029.com",148],["fun1013.com",148],["fun969fm.com",148],["generations1023.com",148],["glory985.com",148],["go106.com",148],["goradioheartland.com",148],["gospel900.com",148],["gulf104.com",148],["heaven1460.com",148],["heaven983.com",148],["hitkicker997.com",148],["hitpage.com",148],["hits931fm.com",148],["hits96.com",148],["hits965.com",148],["hot1005.com",148],["hot100blono.com",148],["hot100nrv.com",148],["hot101.com",148],["hot102.net",148],["hot1033.com",148],["hot1039.com",148],["hot1047fm.com",148],["hot1057.com",148],["hot1063.com",148],["hot1067fm.com",148],["hot1067pa.com",148],["hot1077radio.com",148],["hot92and100.com",148],["hot933hits.com",148],["hot941.com",148],["hot967fm.com",148],["hvradionet.com",148],["i973hits.com",148],["ilovethehits.com",148],["indysmix.com",148],["jammin999fm.com",148],["jamz963.com",148],["jox2fm.com",148],["joxfm.com",148],["k100country.com",148],["k104online.com",148],["k105country.com",148],["k92radio.com",148],["k983.com",148],["kabc.com",148],["kaok.com",148],["kaperadio1550.com",148],["katm.com",148],["katt.com",148],["kbcy.com",148],["kber.com",148],["kboi.com",148],["kbul.com",148],["kbull93.com",148],["kcchiefsradio.com",148],["kcheradio.com",148],["kcmotalkradio.com",148],["kcmxam.com",148],["kennradio.com",148],["kernradio.com",148],["kesn1033.com",148],["key101fm.com",148],["kfru.com",148],["kftx.com",148],["kgfm.com",148],["kgfw.com",148],["kggo.com",148],["kgmo.com",148],["kgoradio.com",148],["khay.com",148],["khfm.com",148],["khfm.org",148],["khit1075.com",148],["khop.com",148],["khvl.com",148],["kiimfm.com",148],["kiss-1031.com",148],["kix1029.com",148],["kix106.com",148],["kix96.com",148],["kizn.com",148],["kjjy.com",148],["kjoy.com",148],["kkcy.com",148],["kkfm.com",148],["kkgb.com",148],["kkgl.com",148],["kkoh.com",148],["klif.com",148],["klik1240.com",148],["klin.com",148],["klur.com",148],["kmaj.com",148],["kmaj1440.com",148],["kmez1029.com",148],["kmjnow.com",148],["knbr.com",148],["knek.com",148],["kobfm.com",148],["kpla.com",148],["kpur107.com",148],["kqfc.com",148],["kqky.com",148],["kqms.com",148],["kqxy.com",148],["krbe.com",148],["krmd.com",148],["krny.com",148],["krrq.com",148],["krush925.com",148],["kruz1033.com",148],["ksam1017.com",148],["kscrhits.com",148],["kscs.com",148],["ksfo.com",148],["kshasta.com",148],["ksks.com",148],["ksmb.com",148],["ktcx.com",148],["ktik.com",148],["ktop1490.com",148],["ktucam.com",148],["kubaradio.com",148],["kubb.com",148],["kugn.com",148],["kuzz.com",148],["kuzzradio.com",148],["kvor.com",148],["kwin.com",148],["kwwr.com",148],["kxel.com",148],["kxzz1580am.com",148],["kyis.com",148],["kykz.com",148],["kzwafm.com",148],["la103.com",148],["laindomable.com",148],["laleync.com",148],["lanuevaomaha.com",148],["lite102.com",148],["literock105fm.com",148],["love105fm.com",148],["lvfoxsports.com",148],["magic1029fm.com",148],["magic1039fm.com",148],["magic1069.com",148],["magic1073.com",148],["magic1073fm.com",148],["magic93fm.com",148],["magic943fm.com",148],["magic979wtrg.com",148],["magic995abq.com",148],["majic97monroe.com",148],["majicspace.com",148],["maverick1023.com",148],["max94one.com",148],["maxrocks.net",148],["mega979.com",148],["mgeradio.com",148],["milwaukeesparty.com",148],["mix103.com",148],["mix1077albany.com",148],["mix965.net",148],["modernrock987.com",148],["montanassuperstation.com",148],["movin993.com",148],["muskegonnashicon.com",148],["my1059.com",148],["my961.com",148],["myblono.com",148],["mycolumbiabasin.com",148],["myfroggy95.com",148],["mykiss973.com",148],["mymagic106.com",148],["mymix1051.com",148],["mymix1061.com",148],["mymix961.com",148],["mystar98.com",148],["nashcountrydaily.com",148],["nashdetroit.com",148],["nashfm1007.com",148],["nashfm1011.com",148],["nashfm1017.com",148],["nashfm1025.com",148],["nashfm1027.com",148],["nashfm1061.com",148],["nashfm1065.com",148],["nashfm923.com",148],["nashfm937.com",148],["nashfm943.com",148],["nashfm951.com",148],["nashfm973.com",148],["nashfm991.com",148],["nashfmgreenbay.com",148],["nashfmsjo.com",148],["nashnightslive.net",148],["nashpensacola.com",148],["ncsportsradio.com",148],["nepasespnradio.com",148],["neuhoffmedia.com",148],["neuhoffmedialafayette.com",148],["newcountry963.com",148],["newsradio1029.com",148],["newsradio1440.com",148],["newsradioflorida.com",148],["newsradiokkob.com",148],["newsserver1.com",148],["newsserver2.com",148],["newsserver3.com",148],["newstalk1030.com",148],["newstalk1290koil.com",148],["newstalk730.com",148],["newstalk987.com",148],["newstalkwsba.com",148],["newswebradiocompany.net",148],["now937.com",148],["nrgmedia.com",148],["nrq.com",148],["og979.com",148],["okiecountry1017.com",148],["oldiesz104.com",148],["ottawaradio.net",148],["pensacolasjet.com",148],["peorias923.com",148],["picklefm.com",148],["pikefm.com",148],["planet1067.com",148],["pmbbroadcasting.com",148],["pmbradio.com",148],["power1021.com",148],["power103.com",148],["power1057.com",148],["power1069fm.com",148],["power923.com",148],["power94radio.com",148],["power955.com",148],["powerhits95.com",148],["powerslc.com",148],["praise1025fm.com",148],["purerock96.com",148],["q1005.com",148],["q1031fm.com",148],["q105.fm",148],["q1055.com",148],["q1061.com",148],["q106dot5.com",148],["q973radio.com",148],["q97country.com",148],["q98fm.com",148],["q997atlanta.com",148],["q99fm.com",148],["radio1039ny.com",148],["radiorockriver.com",148],["radiowoodstock.com",148],["realcountry1280whvr.com",148],["realcountryhv.com",148],["red1031.com",148],["red945.com",148],["rewind1019.com",148],["rickandsasha.com",148],["rock101.net",148],["rock1015.com",148],["rock103albany.com",148],["rock103rocks.com",148],["rock106.net",148],["rock107fm.com",148],["rock108.com",148],["rock945vt.com",148],["rockdaily.com",148],["rocknews.com",148],["rockofsavannah.com",148],["rockofsavannah.net",148],["softrock941.com",148],["southernillinoisnow.com",148],["southernsportstoday.com",148],["sportsanimal920.com",148],["sportsanimalabq.com",148],["sportscapitoldc.com",148],["sportshubtriad.com",148],["sportsradio1270.com",148],["sportsradio1440.com",148],["sportsradio1560.com",148],["sportsradio590am.com",148],["sportsradio740.com",148],["sportsradio967.com",148],["sportsradio970.com",148],["sportsradiobeaumont.com",148],["sportsradioberks.com",148],["sportsradiownml.com",148],["star98.net",148],["starfm1023.com",148],["starsplash.com",148],["stevegormanrocks.com",148],["sunny1031.com",148],["sunny1069fm.com",148],["sunny923.com",148],["sunny983.com",148],["sunnymuskegon.com",148],["supertalk1570.com",148],["sweet985.com",148],["talk104fm.com",148],["talk995.com",148],["talkradio1007.com",148],["tbhpod.com",148],["teammyrtlebeach.com",148],["test107.com",148],["thebear925.com",148],["thebigjab.com",148],["thebigstation93blx.com",148],["theblairgarnershow.com",148],["theconclave.com",148],["thefan1075.com",148],["thefanfm.com",148],["thegame541.com",148],["thehippo.com",148],["thehot1039.com",148],["thenewhotfm.com",148],["thenewpulsefm.com",148],["thepointontheweb.com",148],["therebelrocks.com",148],["therocket951.com",148],["therockstationz93.com",148],["thescore1260.com",148],["thesportsanimal.com",148],["theticket.com",148],["theticket1007.com",148],["theticket102.com",148],["theticket1590.com",148],["theticketmi.com",148],["thetybentlishow.com",148],["thevalley981.com",148],["thewolf1051.com",148],["thewolf951.com",148],["thisisqmusic.com",148],["thunder1073.com",148],["triadsports.com",148],["tuligaradio.com",148],["umpsports.com",148],["v100fm.com",148],["v1033.com",148],["vermilioncountyfirst.com",148],["vermillioncountyfirst.com",148],["w3dcountry.com",148],["w4country.com",148],["wa1a.com",148],["wabcradio.com",148],["walk975.com",148],["walkradio.com",148],["warm1033.com",148],["warm98.com",148],["waysam.com",148],["wbap.com",148],["wbbw.com",148],["wbmq.net",148],["wbnq.com",148],["wbpm929.com",148],["wbpmfm.com",148],["wbwn.com",148],["wcbm.com",148],["wceiradio.com",148],["wcfx.com",148],["wchv.com",148],["wclg.com",148],["wcoapensacola.com",148],["wcpqfm.com",148],["wcpt820.com",148],["wcpt820.net",148],["wcpt820am.com",148],["wcpt820am.net",148],["wcptam.com",148],["wcptam.net",148],["wcptamfm.com",148],["wcptamfm.net",148],["wcptamfm.org",148],["wcpyfm.com",148],["wctk.com",148],["wddoam.com",148],["wden.com",148],["wdml.com",148],["wdst.com",148],["wdst.org",148],["wdzz.com",148],["wedg.com",148],["werkfm.net",148],["werkradio.com",148],["wfasam.com",148],["wfav951.com",148],["wfmd.com",148],["wfms.com",148],["wfnc640am.com",148],["wfre.com",148],["wftw.com",148],["wgh1310.com",148],["wghsolidgold.com",148],["wglx.com",148],["wgni.com",148],["wgow.com",148],["wgowam.com",148],["wgrr.com",148],["whdg.com",148],["wheelz1045.com",148],["whli.com",148],["whrpfm.com",148],["whtt.com",148],["whud.com",148],["wild1029.com",148],["wild1049hd.com",148],["wild1061.com",148],["wild993fm.com",148],["wildcatsradio1290.com",148],["wink104.com",148],["winxfm.com",148],["wiog.com",148],["wiov.com",148],["wiov985.com",148],["wivk.com",148],["wivr1017.com",148],["wizn.com",148],["wjbc.com",148],["wjcw.com",148],["wjez.com",148],["wjjr.net",148],["wjoxam.com",148],["wjr.com",148],["wkav.com",148],["wkbethepoint.com",148],["wkga975.com",148],["wkhx.com",148],["wkmoradio.com",148],["wkol.com",148],["wkrs.com",148],["wkrufm.com",148],["wksm.com",148],["wkydeportes.com",148],["wlaq1410.com",148],["wlav.com",148],["wlbc.com",148],["wlevradio.com",148],["wlkwradio.com",148],["wlok.com",148],["wlsam.com",148],["wlum.com",148],["wlup.com",148],["wlwi.com",148],["wmac-am.com",148],["wmal.com",148],["wmqa.com",148],["wncv.com",148],["wogb.fm",148],["woko.com",148],["womg.com",148],["woodstockbroadcasting.com",148],["woodstockcommunication.com",148],["woodstockradio.net",148],["woodstocktv.net",148],["wovo1063.com",148],["wovofm.com",148],["wqut.com",148],["wqvealbany.com",148],["wrganews.com",148],["wrgm.com",148],["wrlo.com",148],["wrr101.com",148],["wrul.com",148],["wsba910.com",148],["wsfl.com",148],["wsjssports.com",148],["wskz.com",148],["wsyb1380am.com",148],["wtka.com",148],["wtma.com",148],["wtrxsports.com",148],["wttlradio.com",148],["wuuqradio.com",148],["wvel.com",148],["wvli927.com",148],["wvlkam.com",148],["wvnn.com",148],["wwck.com",148],["wwki.com",148],["wwqq101.com",148],["wxfx.com",148],["wxkr.com",148],["wxpkfm.com",148],["wynn1063.com",148],["wzpl.com",148],["wzyp.com",148],["wzzl.com",148],["x1051kc.com",148],["x95radio.com",148],["xs961.com",148],["xtrasports1300.com",148],["y-103.com",148],["y101hits.com",148],["y102montgomery.com",148],["y1065.com",148],["yesfm.net",148],["z1023online.com",148],["z1029.com",148],["z1075.com",148],["z937.com",148],["z93jamz.com",148],["z96.com",148],["z971.com",148],["zone1150.com",148],["zrock103.com",148],["zrockfm.com",148],["windows101tricks.com",149],["waaw.tv",150],["hqq.tv",[150,151]],["fontsfree.pro",152],["radarbox.com",154],["adslayuda.com",155],["avdelphi.com",156],["4x4earth.com",66],["jootc.com",[158,159]],["photobank.mainichi.co.jp",160],["tbs.co.jp",161],["sovetromantica.com",163],["longecity.org",164],["magnet-novels.com",165],["torrentlawyer.com",[165,170,176,177]],["fruit01.xyz",166],["lyricstranslate.com",167],["hardcoregames.ca",168],["allsmo.com",168],["themosvagas.com.br",168],["urbharat.xyz",168],["sportnews.to",[168,179]],["2embed.ru",169],["sbasian.pro",169],["miraculous.to",[169,190]],["vtplayer.net",169],["pepperlive.info",169],["unbiasedsenseevent.com",169],["maxt.church",169],["cool-etv.net",169],["vgembed.com",[169,223]],["szkolawohyn.pl",170],["virpe.cc",170],["gmarket.co.kr",[170,177]],["paesifantasma.it",171],["talpo.it",171],["pbinfo.ro",172],["quora.com",173],["gmx.net",175],["youmath.it",178],["renditepassive.net",[180,181,182,183,184]],["360doc.com",185],["logonews.cn",186],["thetodaypost.com",[187,192,197]],["cloudcomputingtopics.net",187],["0123movies.ch",[187,192,197,227]],["epn.bz",63],["affbank.com",28],["gardenia.net",[188,189]],["novelpia.com",[191,192]],["blueraindrops.com",194],["vidembed.me",195],["mzzcloud.life",195],["videobot.stream",195],["player.tabooporns.com",195],["justswallows.net",195],["onscreensvideo.com",195],["katerionews.com",195],["telenovelas-turcas.com.es",195],["kmo.to",195],["jeniusplay.com",[195,229]],["animecruzers.com",196],["descargatepelis.com",197],["news.ntv.co.jp",197],["bestjavporn.com",198],["mm9841.cc",198],["ggwash.org",[199,200]],["cinegrabber.com",203],["layarkacaxxi.icu",204],["readawrite.com",[205,206,207,208,209,210,211]],["dropgalaxy.com",212],["morosedog.gitlab.io",213],["indianhealthyrecipes.com",215],["tarnkappe.info",216],["phimz.org",217],["heavyfetish.com",218],["joysound.com",[219,220,221]],["colors.sonicthehedgehog.com",[221,224]],["leakedzone.com",225],["mehoathinh2.com",226],["powerline.io",228],["bestx.stream",230],["enduro-mtb.com",231],["kukaj.io",232],["animesaga.in",233],["thejakartapost.com",234],["fullxh.com",235],["megaxh.com",235],["unlockxh4.com",235],["xhadult2.com",235],["xhadult3.com",235],["xhadult4.com",235],["xhadult5.com",235],["xhamster46.com",235],["xhday.com",235],["xhday1.com",235],["xhmoon5.com",235],["xhplanet1.com",235],["xhplanet2.com",235],["xhreal2.com",235],["xhreal3.com",235],["xhtab2.com",235],["xhvictory.com",235],["xhwebsite.com",235],["xhwebsite2.com",235],["xhwide1.com",235],["xhwide8.com",235]]);

const entitiesMap = new Map([["18comic",16],["earnload",145],["hindipix",[150,151]],["123movies",169],["brainly",193],["videovard",195],["ask4movie",[201,202]],["bluemediafile",222],["hamsterix",235],["xhamster",235],["xhamster1",235],["xhamster10",235],["xhamster11",235],["xhamster12",235],["xhamster13",235],["xhamster14",235],["xhamster15",235],["xhamster16",235],["xhamster17",235],["xhamster18",235],["xhamster19",235],["xhamster20",235],["xhamster2",235],["xhamster3",235],["xhamster4",235],["xhamster5",235],["xhamster7",235],["xhamster8",235]]);

const exceptionsMap = new Map([["m.rp5.ru",[87]],["m.rp5.by",[87]],["m.rp5.kz",[87]],["m.rp5.co.uk",[87]],["m.rp5.md",[87]]]);

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
        } else if ( cValue === '[]' ) {
            cValue = [];
        } else if ( cValue === '{}' ) {
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
                try { cValue = safe.jsonParse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => cValue;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => cValue);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(cValue);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(cValue);
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
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
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
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
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
                    if ( a instanceof Object ) {
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
        'Error': self.Error,
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
