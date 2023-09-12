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

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["ezAardvarkDetected","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["adsAllowed2","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["inxBX.failed","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["alert","undefined"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["WO.adblock.useAdblocker","false"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["WSI.contentPersonalization.hideEmailCaptureOverlay","true"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["displayed","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["is_adblocker_in_use","false"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["pbi_analytics","true"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["adblock","0"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["console.clear","undefined"],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["devtoolsDetector","1"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,99]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,101]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["howtogeek.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,11]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,160]],["walterfootball.com",7],["dotesports.com",7],["boredpanda.com",7],["cleveland.com",7],["scitechdaily.com",8],["thewindowsclub.com",8],["stash.sussy.moe",9],["android.com.pl",10],["fosslinux.com",12],["nexusmods.com",13],["1001tracklists.com",15],["autogaleria.pl",16],["basicweb.ru",17],["brainly.com",18],["brighteon.com",19],["cda.pl",20],["chefkoch.de",21],["chip.de",22],["civicx.com",23],["comnuan.com",24],["corriere.it",25],["creatur.io",26],["drnasserelbatal.com",26],["file.fm",26],["files.fm",26],["gamehag.com",26],["onlinehashcrack.com",26],["scantrad.net",26],["timebucks.com",26],["uderent.com",26],["ctrlv.cz",27],["cx30-forum.de",[28,29]],["telefon-treff.de",[28,29]],["cyberpedia.su",30],["kukuo.tw",30],["studopedia.info",30],["infopedia.su",30],["studopedia.net",30],["studopedia.su",30],["studopedia.org",30],["studopedia.ru",30],["studopedia.com.ua",30],["lektsii.org",30],["mydocx.ru",30],["dallasobserver.com",31],["digilibraries.com",32],["dniwolne.eu",33],["jeshoots.com",33],["webcamtaxi.com",33],["doodlr.io",34],["evades.io",35],["everyeye.it",36],["foxnews.com",37],["gameblog.fr",38],["lapumia.org",38],["gazzetta.it",39],["icy-veins.com",40],["inbox.lv",41],["inoreader.com",[42,43]],["investing.com",44],["it-actual.ru",45],["lowcygier.pl",46],["malaysiastock.biz",47],["marriedgames.com.br",48],["megagames.com",49],["metasrc.com",50],["meteoblue.com",51],["mgsm.pl",52],["minijuegos.com",53],["miniwebtool.com",54],["mrexcel.com",55],["nu.nl",[56,118]],["easy-learn-tech.info",57],["one-click-tutorials.info",57],["solvetube.site",57],["getintopc.com",57],["preguntandroid.com",58],["iteramos.com",58],["pyrogram.org",59],["qiwihelp.net",60],["r3owners.net",61],["remont-aud.net",62],["salon.com",[63,64]],["satelliteguys.us",65],["signupgenius.com",66],["ingles.com",[67,68,69]],["spanishdict.com",[67,68,69]],["starsandstripesfc.com",70],["polygon.com",70],["strangermeetup.com",[71,151]],["thec64community.online",72],["thehindu.com",73],["titulky.com",[74,75]],["ucoin.net",76],["venea.net",77],["vimm.net",78],["wikihow.com",79],["wvnews.com",80],["xgp.pl",81],["yorumbudur.com",82],["yusepjaelani.blogspot.com",83],["weather.com",84],["m.rp5.ru",85],["m.rp5.by",85],["m.rp5.kz",85],["m.rp5.co.uk",85],["m.rp5.md",85],["rp5.ru",86],["rp5.ua",86],["rp5.by",86],["rp5.kz",86],["rp5.co.uk",86],["rp5.md",86],["wetteronline.de",87],["hdrezkabmmshq.org",88],["hdrezkafh28d9.org",88],["hdrezkasmakyy.org",88],["hdrezkafhs83u.org",88],["hdrezkahs920s.org",88],["hdrezka.in",88],["hdrezkat5ee2w.org",88],["hdrezkagdvv2b.net",88],["hdrezka66yhfg.net",88],["hdrezka77ftyy.net",88],["hdrezka.rest",88],["hdrezkaffsg67.net",88],["hdrezkafjk2he.net",88],["hdrezkahf22hh.net",88],["hdrezkahdg24s.net",88],["hdrezkabbdh4d.net",88],["hdrezkajjfhr5.net",88],["27p6qp79zyr1.net",88],["hdrezka19139.org",88],["hdrezkap3g.org",88],["hdrezkapez.org",88],["hdrezkapoi.org",88],["hdrezkarty.org",88],["hdrezkacvb.org",88],["hdrezka.ag",88],["upivi.com",88],["hdrezka.me",88],["ikinopoisk.com",88],["kinopub.me",88],["3ivi.com",88],["rezkify.com",88],["aghdrezka.com",88],["hdrezka.re",88],["bestofkinopoisk.com",88],["rezkance.com",88],["rezkery.com",88],["rezkily.com",88],["ezhdrezka.com",88],["akinopoisk.com",88],["hdrezkaonline.com",88],["drhdrezka.com",88],["mrhdrezka.com",88],["hdrezka.sh",88],["ehdrezka.com",88],["nukinopoisk.com",88],["livekinopoisk.com",88],["betahdrezka.com",88],["cokinopoisk.com",88],["hdrezka-ag.com",88],["hdrezka.club",88],["hdrezka.cm",88],["hdrezka.co",88],["hdrezka.name",88],["hdrezka.site",88],["hdrezka.today",88],["hdrezka.tv",88],["hdrezka.website",88],["hdrezkaag.net",88],["hdrezkaweb.com",88],["hdrezkayou.com",88],["instahdrezka.com",88],["myhdrezka.com",88],["freehdrezka.com",88],["rezka.ag",88],["tryhdrezka.com",88],["cnet.com",89],["edurev.in",90],["defenseone.com",91],["govexec.com",91],["nextgov.com",91],["route-fifty.com",91],["ktmmobile.com",92],["startech.com.bd",93],["onlinecourses.ooo",94],["juracademy.de",95],["vk.com",[96,97]],["instagram.com",98],["superfilmes.ph",99],["meduza.global.ssl.fastly.net",99],["meduza.io",99],["yenisafak.com",99],["offidocs.com",99],["onedio.com",99],["hpplus.jp",99],["fullfilmcibaba1.com",99],["joom.com",99],["nbc.com",99],["sport-express.ru",99],["maximum.ru",99],["ch3plus.com",99],["dropmefiles.com",99],["reddit.com",99],["life.ru",99],["macwelt.de",100],["pcwelt.de",100],["itemsatis.com",102],["dailymail.co.uk",103],["auchan.ua",104],["quizangel.com",105],["binge.buzz",106],["pbteen.com",107],["potterybarn.com",107],["potterybarnkids.com",107],["westelm.com",107],["williams-sonoma.com",107],["magicvalley.com",108],["brutal.io",[10,227]],["impots.gouv.fr",109],["realcleardefense.com",110],["xclient.info",111],["bejson.com",111],["gardenista.com",112],["opensubtitles.org",113],["gearside.com",114],["nytimes.com",[115,116]],["tvtropes.org",117],["justtrucks.com.au",119],["cittadinanza.biz",120],["glistranieri.it",120],["viralinindia.net",[120,130]],["ideapod.com",[120,130]],["privivkainfo.ru",120],["awebstories.com",[120,213]],["ancient.eu",121],["intramed.net",38],["protest.eu",122],["northwestfirearms.com",123],["techkings.org",123],["spookshow.net",124],["fosshub.com",125],["pokemonforever.com",126],["carsguide.com.au",127],["humo.be",128],["apksecured.com",129],["intergate.info",129],["alphapolis.co.jp",[129,155]],["chronologia.pl",[129,155]],["reportergazeta.pl",[129,155,157]],["odiarioonline.com.br",[129,166]],["nordkorea-info.de",129],["geotips.net",[129,172]],["televisiongratishd.com",[129,166,178]],["noweconomy.live",129],["naaree.com",[129,166]],["cda-hd.cc",129],["hqq.to",[129,167,186]],["tv-tokyo.co.jp",129],["arti-definisi-pengertian.info",129],["webwereld.nl",131],["palemoon.org",132],["wheel-size.com",133],["aoezone.net",134],["radioony.fm",135],["mexiconewsdaily.com",136],["technologyreview.com",137],["bdcraft.net",138],["wired.co.uk",139],["gq-magazine.co.uk",139],["glamourmagazine.co.uk",139],["youtube.com",140],["buienradar.nl",141],["watson.de",142],["clk.ink",143],["zerodot1.gitlab.io",[144,145]],["1009thecat.com",146],["1013katy.com",146],["1013themix.com",146],["1015jackfm.com",146],["1015khits.com",146],["1015thefox.com",146],["1017thebeach.com",146],["1017theteam.com",146],["1019hot.com",146],["1019online.com",146],["1019thekeg.com",146],["101thefox.net",146],["101wkqx.com",146],["1021nashicon.com",146],["1021thefox.com",146],["1023thewolf.com",146],["1025jackfm.com",146],["1027thevibe.com",146],["1029nashicon.com",146],["102thebear.com",146],["1031nowfm.com",146],["1031radiom.com",146],["1035memphis.com",146],["1035thegame.com",146],["1035wrbo.com",146],["1037nash.com",146],["1039bobfm.com",146],["1039wvbo.com",146],["1041wdlt.com",146],["1043thebridge.com",146],["1043thebridge.net",146],["1043thevibe.com",146],["1045thedan.com",146],["1045thezone.com",146],["1045wjjk.com",146],["1047krez.com",146],["1049nashicon.com",146],["1049thehits.com",146],["104thehawk.com",146],["1050talk.com",146],["1053classichits.com",146],["1053hotfm.com",146],["1053thebear.com",146],["1053thepoint.com",146],["1053thepoint.net",146],["1053wow.com",146],["1055kbuck.com",146],["1055thecat.com",146],["1057kokz.com",146],["1057nowfm.com",146],["1057thebear.com",146],["1057thex.com",146],["1057thexrocks.com",146],["1061theunderground.com",146],["1063spinfm.com",146],["1063thevibe.com",146],["1063wovo.com",146],["1065theticket.com",146],["1067thekrewe.com",146],["106x.com",146],["1070wnct.com",146],["1071bobfm.com",146],["1071thepeak.com",146],["1071thepoint.com",146],["1073wsjy.com",146],["1075nowfm.com",146],["1075thegame.com",146],["1077lakefm.com",146],["1077thebone.com",146],["1077theisland.com",146],["1079nashicon.com",146],["107countrypsk.com",146],["107nashicon.com",146],["1090kaay.com",146],["1220wkrs.com",146],["1230espnsports.com",146],["1230theteam.com",146],["1280wnam.com",146],["1290wlby.com",146],["1320thefan.com",146],["1340wmsa.com",146],["1430wcmy.com",146],["1450kven.com",146],["1480kyos.com",146],["1490wosh.com",146],["1510kga.com",146],["1590walg.com",146],["1620thezone.com",146],["1700thechamp.com",146],["2hoursmattpinfield.com",146],["600wrqx.com",146],["600wsom.com",146],["610knml.com",146],["630wpro.com",146],["640wxsm.com",146],["660wxqw.com",146],["680thefan.com",146],["770kkob.com",146],["790business.com",146],["790wpic.com",146],["810whb.com",146],["860kkat.com",146],["860utahsbigtalker.com",146],["900theticket.com",146],["921theticket.com",146],["923krst.com",146],["923thewolf.com",146],["925nashicon.com",146],["925thebear.com",146],["925thewolf.com",146],["927bobfm.com",146],["929peakfm.com",146],["929thewave.com",146],["929wbpm.com",146],["92kqrs.com",146],["92profm.com",146],["92qnashville.com",146],["931nashicon.com",146],["931thebeat.com",146],["933nashicon.com",146],["935nashfm.com",146],["935wrqn.com",146],["937nashicon.com",146],["937nowfm.com",146],["937themountain.com",146],["939northpoleradio.com",146],["939theville.com",146],["939xindy.com",146],["93q.com",146],["93wkct.com",146],["93x.com",146],["940wfaw.com",146],["941ksky.com",146],["941thebear.com",146],["941thehits.com",146],["945thedrive.com",146],["945thehawkradio.com",146],["947qdr.com",146],["947wls.com",146],["949kcmo.com",146],["949radiojondeek.com",146],["949starcountry.com",146],["949theoutlaw.com",146],["94rockradio.net",146],["951nashfm.com",146],["951kbby.com",146],["953hlf.com",146],["953thebeach.com",146],["953thescore.com",146],["955bobfm.com",146],["955glo.com",146],["955nashicon.com",146],["955thefan.com",146],["955thevibe.com",146],["957kboy.com",146],["957kpur.com",146],["957nashicon.com",146],["957thevibe.com",146],["957thewolfonline.com",146],["959therocket.com",146],["95sx.com",146],["95wiil.com",146],["95x.com",146],["961bbb.com",146],["961jamz.com",146],["961sox.com",146],["961wsox.com",146],["963nashicon.com",146],["963thezone.com",146],["963wdvd.com",146],["967shinefm.com",146],["969lacaliente.com",146],["969thewolf.com",146],["96key.com",146],["96kzel.com",146],["973eagle.com",146],["973nashfm.com",146],["975kabx.com",146],["975thevibe.com",146],["975wabd.com",146],["979nashfm.com",146],["979espnradio.com",146],["979nashicon.com",146],["979wvok.com",146],["979x.com",146],["97bht.com",146],["97rock.com",146],["980waav.com",146],["980wxlm.com",146],["981thebeat.com",146],["981themax.com",146],["981thevalley.com",146],["983nashicon.com",146],["983thekeg.com",146],["983vibe.com",146],["983wlcs.com",146],["985kissfm.net",146],["989magicfm.com",146],["989thebridge.com",146],["98theticket.com",146],["993kjoy.com",146],["995thejock.com",146],["995thewolf.com",146],["997cyk.com",146],["997cyk.org",146],["997kmjj.com",146],["997themix.com",146],["997wpro.com",146],["997wtn.com",146],["999thebuzz.com",146],["999thefoxrocks.com",146],["999thehawk.com",146],["99x.com",146],["kjmo.com",146],["nashfm100.com",146],["nashfm923krst.com",146],["nashfm1033.com",146],["nashfm1055.com",146],["nashfm929.com",146],["nashfm931.com",146],["nashfm941.com",146],["nashfm949.com",146],["nashfm981.com",146],["nashfmwisconsin.com",146],["nashicon989.com",146],["v100rocks.com",146],["albanymagic.com",146],["alice1077.com",146],["allthehitsb951.com",146],["alt1019.com",146],["alt1049albany.com",146],["alt2k.com",146],["alt923.com",146],["alt98.com",146],["am630.net",146],["amarillosrockstation.com",146],["americanpatriotmedia.com",146],["annarbors107one.com",146],["atlantasrockstation.com",146],["atlsportsx.com",146],["b106fm.com",146],["b1073.com",146],["b95.com",146],["b979.net",146],["b98.com",146],["b985slo.com",146],["b987.com",146],["bakersfieldespn.com",146],["bakersfieldespnsports.com",146],["beach985.com",146],["beachboogieandblues.com",146],["bear104.com",146],["big1013.com",146],["bigcheese1079.com",146],["bigcountry1073.com",146],["bigdawg985.com",146],["bigdog1067.com",146],["bigfrog101.com",146],["bigfroggy1053.com",146],["bigtalk1490.com",146],["blairgarner.com",146],["blazin1023.com",146],["blazin923.com",146],["bloomingtonhits.com",146],["bobfmspringfield.com",146],["bowlinggreensam.com",146],["bull973.com",146],["bxr.com",146],["caperadio1550.com",146],["catcountry.com",146],["catcountry96.com",146],["catcountryvermont.com",146],["cbssports1430.com",146],["cbssportserie.com",146],["cbssportsharrisburg.com",146],["cbssportsradio1430.com",146],["chicothunderheads.com",146],["christmas989.com",146],["ckrv.com",146],["classicfox.com",146],["classichits1033.com",146],["classichitsmy1059.com",146],["classichitswnyq.com",146],["classy100.com",146],["coast1013.com",146],["coast973.com",146],["country105fm.net",146],["countrycountdownusa.com",146],["countrylegends1059.com",146],["countrymi.com",146],["coyote1025.com",146],["cumulusdigital.com",146],["digitalsolutions201.com",146],["e93fm.com",146],["eagle97.com",146],["eagle993.com",146],["easy991.com",146],["ed.fm",146],["elizabethtownradio.com",146],["energy939indy.com",146],["espn1320columbia.com",146],["espn910.com",146],["espnhonolulu.com",146],["espnlouisville.com",146],["espnlv.com",146],["espnradio1280.com",146],["espnradio927.com",146],["espnradio941.com",146],["espnsyracuse.com",146],["espnur.com",146],["espnwestpalm.com",146],["espnwilmington.com",146],["fly92.com",146],["fly923.com",146],["fm102milwaukee.com",146],["fm102one.com",146],["fonzfm.com",146],["forevereaston.com",146],["forevermediayork.com",146],["fox969.com",146],["foxcincinnati.com",146],["foxsportsredding.com",146],["froggy1003.com",146],["froggy101fm.com",146],["froggy981.com",146],["froggy99.net",146],["froggycountry.net",146],["froggyland.com",146],["fuego1029.com",146],["fun1013.com",146],["fun969fm.com",146],["generations1023.com",146],["glory985.com",146],["go106.com",146],["goradioheartland.com",146],["gospel900.com",146],["gulf104.com",146],["heaven1460.com",146],["heaven983.com",146],["hitkicker997.com",146],["hitpage.com",146],["hits931fm.com",146],["hits96.com",146],["hits965.com",146],["hot1005.com",146],["hot100blono.com",146],["hot100nrv.com",146],["hot101.com",146],["hot102.net",146],["hot1033.com",146],["hot1039.com",146],["hot1047fm.com",146],["hot1057.com",146],["hot1063.com",146],["hot1067fm.com",146],["hot1067pa.com",146],["hot1077radio.com",146],["hot92and100.com",146],["hot933hits.com",146],["hot941.com",146],["hot967fm.com",146],["hvradionet.com",146],["i973hits.com",146],["ilovethehits.com",146],["indysmix.com",146],["jammin999fm.com",146],["jamz963.com",146],["jox2fm.com",146],["joxfm.com",146],["k100country.com",146],["k104online.com",146],["k105country.com",146],["k92radio.com",146],["k983.com",146],["kabc.com",146],["kaok.com",146],["kaperadio1550.com",146],["katm.com",146],["katt.com",146],["kbcy.com",146],["kber.com",146],["kboi.com",146],["kbul.com",146],["kbull93.com",146],["kcchiefsradio.com",146],["kcheradio.com",146],["kcmotalkradio.com",146],["kcmxam.com",146],["kennradio.com",146],["kernradio.com",146],["kesn1033.com",146],["key101fm.com",146],["kfru.com",146],["kftx.com",146],["kgfm.com",146],["kgfw.com",146],["kggo.com",146],["kgmo.com",146],["kgoradio.com",146],["khay.com",146],["khfm.com",146],["khfm.org",146],["khit1075.com",146],["khop.com",146],["khvl.com",146],["kiimfm.com",146],["kiss-1031.com",146],["kix1029.com",146],["kix106.com",146],["kix96.com",146],["kizn.com",146],["kjjy.com",146],["kjoy.com",146],["kkcy.com",146],["kkfm.com",146],["kkgb.com",146],["kkgl.com",146],["kkoh.com",146],["klif.com",146],["klik1240.com",146],["klin.com",146],["klur.com",146],["kmaj.com",146],["kmaj1440.com",146],["kmez1029.com",146],["kmjnow.com",146],["knbr.com",146],["knek.com",146],["kobfm.com",146],["kpla.com",146],["kpur107.com",146],["kqfc.com",146],["kqky.com",146],["kqms.com",146],["kqxy.com",146],["krbe.com",146],["krmd.com",146],["krny.com",146],["krrq.com",146],["krush925.com",146],["kruz1033.com",146],["ksam1017.com",146],["kscrhits.com",146],["kscs.com",146],["ksfo.com",146],["kshasta.com",146],["ksks.com",146],["ksmb.com",146],["ktcx.com",146],["ktik.com",146],["ktop1490.com",146],["ktucam.com",146],["kubaradio.com",146],["kubb.com",146],["kugn.com",146],["kuzz.com",146],["kuzzradio.com",146],["kvor.com",146],["kwin.com",146],["kwwr.com",146],["kxel.com",146],["kxzz1580am.com",146],["kyis.com",146],["kykz.com",146],["kzwafm.com",146],["la103.com",146],["laindomable.com",146],["laleync.com",146],["lanuevaomaha.com",146],["lite102.com",146],["literock105fm.com",146],["love105fm.com",146],["lvfoxsports.com",146],["magic1029fm.com",146],["magic1039fm.com",146],["magic1069.com",146],["magic1073.com",146],["magic1073fm.com",146],["magic93fm.com",146],["magic943fm.com",146],["magic979wtrg.com",146],["magic995abq.com",146],["majic97monroe.com",146],["majicspace.com",146],["maverick1023.com",146],["max94one.com",146],["maxrocks.net",146],["mega979.com",146],["mgeradio.com",146],["milwaukeesparty.com",146],["mix103.com",146],["mix1077albany.com",146],["mix965.net",146],["modernrock987.com",146],["montanassuperstation.com",146],["movin993.com",146],["muskegonnashicon.com",146],["my1059.com",146],["my961.com",146],["myblono.com",146],["mycolumbiabasin.com",146],["myfroggy95.com",146],["mykiss973.com",146],["mymagic106.com",146],["mymix1051.com",146],["mymix1061.com",146],["mymix961.com",146],["mystar98.com",146],["nashcountrydaily.com",146],["nashdetroit.com",146],["nashfm1007.com",146],["nashfm1011.com",146],["nashfm1017.com",146],["nashfm1025.com",146],["nashfm1027.com",146],["nashfm1061.com",146],["nashfm1065.com",146],["nashfm923.com",146],["nashfm937.com",146],["nashfm943.com",146],["nashfm951.com",146],["nashfm973.com",146],["nashfm991.com",146],["nashfmgreenbay.com",146],["nashfmsjo.com",146],["nashnightslive.net",146],["nashpensacola.com",146],["ncsportsradio.com",146],["nepasespnradio.com",146],["neuhoffmedia.com",146],["neuhoffmedialafayette.com",146],["newcountry963.com",146],["newsradio1029.com",146],["newsradio1440.com",146],["newsradioflorida.com",146],["newsradiokkob.com",146],["newsserver1.com",146],["newsserver2.com",146],["newsserver3.com",146],["newstalk1030.com",146],["newstalk1290koil.com",146],["newstalk730.com",146],["newstalk987.com",146],["newstalkwsba.com",146],["newswebradiocompany.net",146],["now937.com",146],["nrgmedia.com",146],["nrq.com",146],["og979.com",146],["okiecountry1017.com",146],["oldiesz104.com",146],["ottawaradio.net",146],["pensacolasjet.com",146],["peorias923.com",146],["picklefm.com",146],["pikefm.com",146],["planet1067.com",146],["pmbbroadcasting.com",146],["pmbradio.com",146],["power1021.com",146],["power103.com",146],["power1057.com",146],["power1069fm.com",146],["power923.com",146],["power94radio.com",146],["power955.com",146],["powerhits95.com",146],["powerslc.com",146],["praise1025fm.com",146],["purerock96.com",146],["q1005.com",146],["q1031fm.com",146],["q105.fm",146],["q1055.com",146],["q1061.com",146],["q106dot5.com",146],["q973radio.com",146],["q97country.com",146],["q98fm.com",146],["q997atlanta.com",146],["q99fm.com",146],["radio1039ny.com",146],["radiorockriver.com",146],["radiowoodstock.com",146],["realcountry1280whvr.com",146],["realcountryhv.com",146],["red1031.com",146],["red945.com",146],["rewind1019.com",146],["rickandsasha.com",146],["rock101.net",146],["rock1015.com",146],["rock103albany.com",146],["rock103rocks.com",146],["rock106.net",146],["rock107fm.com",146],["rock108.com",146],["rock945vt.com",146],["rockdaily.com",146],["rocknews.com",146],["rockofsavannah.com",146],["rockofsavannah.net",146],["softrock941.com",146],["southernillinoisnow.com",146],["southernsportstoday.com",146],["sportsanimal920.com",146],["sportsanimalabq.com",146],["sportscapitoldc.com",146],["sportshubtriad.com",146],["sportsradio1270.com",146],["sportsradio1440.com",146],["sportsradio1560.com",146],["sportsradio590am.com",146],["sportsradio740.com",146],["sportsradio967.com",146],["sportsradio970.com",146],["sportsradiobeaumont.com",146],["sportsradioberks.com",146],["sportsradiownml.com",146],["star98.net",146],["starfm1023.com",146],["starsplash.com",146],["stevegormanrocks.com",146],["sunny1031.com",146],["sunny1069fm.com",146],["sunny923.com",146],["sunny983.com",146],["sunnymuskegon.com",146],["supertalk1570.com",146],["sweet985.com",146],["talk104fm.com",146],["talk995.com",146],["talkradio1007.com",146],["tbhpod.com",146],["teammyrtlebeach.com",146],["test107.com",146],["thebear925.com",146],["thebigjab.com",146],["thebigstation93blx.com",146],["theblairgarnershow.com",146],["theconclave.com",146],["thefan1075.com",146],["thefanfm.com",146],["thegame541.com",146],["thehippo.com",146],["thehot1039.com",146],["thenewhotfm.com",146],["thenewpulsefm.com",146],["thepointontheweb.com",146],["therebelrocks.com",146],["therocket951.com",146],["therockstationz93.com",146],["thescore1260.com",146],["thesportsanimal.com",146],["theticket.com",146],["theticket1007.com",146],["theticket102.com",146],["theticket1590.com",146],["theticketmi.com",146],["thetybentlishow.com",146],["thevalley981.com",146],["thewolf1051.com",146],["thewolf951.com",146],["thisisqmusic.com",146],["thunder1073.com",146],["triadsports.com",146],["tuligaradio.com",146],["umpsports.com",146],["v100fm.com",146],["v1033.com",146],["vermilioncountyfirst.com",146],["vermillioncountyfirst.com",146],["w3dcountry.com",146],["w4country.com",146],["wa1a.com",146],["wabcradio.com",146],["walk975.com",146],["walkradio.com",146],["warm1033.com",146],["warm98.com",146],["waysam.com",146],["wbap.com",146],["wbbw.com",146],["wbmq.net",146],["wbnq.com",146],["wbpm929.com",146],["wbpmfm.com",146],["wbwn.com",146],["wcbm.com",146],["wceiradio.com",146],["wcfx.com",146],["wchv.com",146],["wclg.com",146],["wcoapensacola.com",146],["wcpqfm.com",146],["wcpt820.com",146],["wcpt820.net",146],["wcpt820am.com",146],["wcpt820am.net",146],["wcptam.com",146],["wcptam.net",146],["wcptamfm.com",146],["wcptamfm.net",146],["wcptamfm.org",146],["wcpyfm.com",146],["wctk.com",146],["wddoam.com",146],["wden.com",146],["wdml.com",146],["wdst.com",146],["wdst.org",146],["wdzz.com",146],["wedg.com",146],["werkfm.net",146],["werkradio.com",146],["wfasam.com",146],["wfav951.com",146],["wfmd.com",146],["wfms.com",146],["wfnc640am.com",146],["wfre.com",146],["wftw.com",146],["wgh1310.com",146],["wghsolidgold.com",146],["wglx.com",146],["wgni.com",146],["wgow.com",146],["wgowam.com",146],["wgrr.com",146],["whdg.com",146],["wheelz1045.com",146],["whli.com",146],["whrpfm.com",146],["whtt.com",146],["whud.com",146],["wild1029.com",146],["wild1049hd.com",146],["wild1061.com",146],["wild993fm.com",146],["wildcatsradio1290.com",146],["wink104.com",146],["winxfm.com",146],["wiog.com",146],["wiov.com",146],["wiov985.com",146],["wivk.com",146],["wivr1017.com",146],["wizn.com",146],["wjbc.com",146],["wjcw.com",146],["wjez.com",146],["wjjr.net",146],["wjoxam.com",146],["wjr.com",146],["wkav.com",146],["wkbethepoint.com",146],["wkga975.com",146],["wkhx.com",146],["wkmoradio.com",146],["wkol.com",146],["wkrs.com",146],["wkrufm.com",146],["wksm.com",146],["wkydeportes.com",146],["wlaq1410.com",146],["wlav.com",146],["wlbc.com",146],["wlevradio.com",146],["wlkwradio.com",146],["wlok.com",146],["wlsam.com",146],["wlum.com",146],["wlup.com",146],["wlwi.com",146],["wmac-am.com",146],["wmal.com",146],["wmqa.com",146],["wncv.com",146],["wogb.fm",146],["woko.com",146],["womg.com",146],["woodstockbroadcasting.com",146],["woodstockcommunication.com",146],["woodstockradio.net",146],["woodstocktv.net",146],["wovo1063.com",146],["wovofm.com",146],["wqut.com",146],["wqvealbany.com",146],["wrganews.com",146],["wrgm.com",146],["wrlo.com",146],["wrr101.com",146],["wrul.com",146],["wsba910.com",146],["wsfl.com",146],["wsjssports.com",146],["wskz.com",146],["wsyb1380am.com",146],["wtka.com",146],["wtma.com",146],["wtrxsports.com",146],["wttlradio.com",146],["wuuqradio.com",146],["wvel.com",146],["wvli927.com",146],["wvlkam.com",146],["wvnn.com",146],["wwck.com",146],["wwki.com",146],["wwqq101.com",146],["wxfx.com",146],["wxkr.com",146],["wxpkfm.com",146],["wynn1063.com",146],["wzpl.com",146],["wzyp.com",146],["wzzl.com",146],["x1051kc.com",146],["x95radio.com",146],["xs961.com",146],["xtrasports1300.com",146],["y-103.com",146],["y101hits.com",146],["y102montgomery.com",146],["y1065.com",146],["yesfm.net",146],["z1023online.com",146],["z1029.com",146],["z1075.com",146],["z937.com",146],["z93jamz.com",146],["z96.com",146],["z971.com",146],["zone1150.com",146],["zrock103.com",146],["zrockfm.com",146],["windows101tricks.com",147],["waaw.tv",148],["hqq.tv",[148,149]],["fontsfree.pro",150],["radarbox.com",152],["adslayuda.com",153],["avdelphi.com",154],["4x4earth.com",65],["jootc.com",[156,157]],["photobank.mainichi.co.jp",158],["tbs.co.jp",159],["sovetromantica.com",161],["longecity.org",162],["magnet-novels.com",163],["torrentlawyer.com",[163,168,175,176]],["fruit01.xyz",164],["lyricstranslate.com",165],["hardcoregames.ca",166],["allsmo.com",166],["themosvagas.com.br",166],["urbharat.xyz",166],["sportnews.to",[166,178]],["2embed.ru",167],["sbasian.pro",167],["miraculous.to",[167,189]],["vtplayer.net",167],["pepperlive.info",167],["unbiasedsenseevent.com",167],["maxt.church",167],["cool-etv.net",167],["vgembed.com",[167,222]],["szkolawohyn.pl",168],["virpe.cc",168],["gmarket.co.kr",[168,176]],["paesifantasma.it",169],["talpo.it",169],["pbinfo.ro",170],["quora.com",171],["gmx.net",173],["girlscene.nl",174],["youmath.it",177],["renditepassive.net",[179,180,181,182,183]],["360doc.com",184],["logonews.cn",185],["thetodaypost.com",[186,191,196]],["cloudcomputingtopics.net",186],["0123movies.ch",[186,191,196,226]],["epn.bz",62],["affbank.com",26],["gardenia.net",[187,188]],["novelpia.com",[190,191]],["blueraindrops.com",193],["vidembed.me",194],["mzzcloud.life",194],["videobot.stream",194],["player.tabooporns.com",194],["justswallows.net",194],["onscreensvideo.com",194],["katerionews.com",194],["telenovelas-turcas.com.es",194],["kmo.to",194],["jeniusplay.com",[194,228]],["animecruzers.com",195],["descargatepelis.com",196],["news.ntv.co.jp",196],["bestjavporn.com",197],["mm9841.cc",197],["ggwash.org",[198,199]],["cinegrabber.com",202],["layarkacaxxi.icu",203],["readawrite.com",[204,205,206,207,208,209,210]],["dropgalaxy.com",211],["morosedog.gitlab.io",212],["indianhealthyrecipes.com",214],["tarnkappe.info",215],["phimz.org",216],["heavyfetish.com",217],["joysound.com",[218,219,220]],["colors.sonicthehedgehog.com",[220,223]],["leakedzone.com",224],["mehoathinh2.com",225],["powerline.io",227],["bestx.stream",229],["enduro-mtb.com",230],["kukaj.io",231],["animesaga.in",232]]);

const entitiesMap = new Map([["18comic",14],["earnload",143],["hindipix",[148,149]],["123movies",167],["brainly",192],["videovard",194],["ask4movie",[200,201]],["bluemediafile",221]]);

const exceptionsMap = new Map([["m.rp5.ru",[86]],["m.rp5.by",[86]],["m.rp5.kz",[86]],["m.rp5.co.uk",[86]],["m.rp5.md",[86]]]);

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
