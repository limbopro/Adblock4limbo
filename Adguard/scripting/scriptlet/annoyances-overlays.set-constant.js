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

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["ezAardvarkDetected","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["adsAllowed2","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["inxBX.failed","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["alert","undefined"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["WO.adblock.useAdblocker","false"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["history.state","undefined"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["WSI.contentPersonalization.hideEmailCaptureOverlay","true"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["displayed","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["is_adblocker_in_use","false"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["pbi_analytics","true"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["console.clear","undefined"],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["devtoolsDetector","1"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,100]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,102]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,11]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,161]],["walterfootball.com",7],["dotesports.com",7],["boredpanda.com",7],["cleveland.com",7],["scitechdaily.com",8],["thewindowsclub.com",8],["stash.sussy.moe",9],["android.com.pl",10],["fosslinux.com",12],["nexusmods.com",13],["1001tracklists.com",15],["autogaleria.pl",16],["basicweb.ru",17],["brainly.com",18],["brighteon.com",19],["cda.pl",20],["chefkoch.de",21],["chip.de",22],["civicx.com",23],["comnuan.com",24],["corriere.it",25],["creatur.io",26],["drnasserelbatal.com",26],["file.fm",26],["files.fm",26],["gamehag.com",26],["onlinehashcrack.com",26],["scantrad.net",26],["timebucks.com",26],["uderent.com",26],["ctrlv.cz",27],["cx30-forum.de",[28,29]],["telefon-treff.de",[28,29]],["cyberpedia.su",30],["kukuo.tw",30],["studopedia.info",30],["infopedia.su",30],["studopedia.net",30],["studopedia.su",30],["studopedia.org",30],["studopedia.ru",30],["studopedia.com.ua",30],["lektsii.org",30],["mydocx.ru",30],["dallasobserver.com",31],["digilibraries.com",32],["dniwolne.eu",33],["jeshoots.com",33],["webcamtaxi.com",33],["doodlr.io",34],["evades.io",35],["everyeye.it",36],["foxnews.com",37],["gameblog.fr",38],["lapumia.org",38],["gazzetta.it",39],["icy-veins.com",40],["inbox.lv",41],["inoreader.com",[42,43]],["investing.com",44],["it-actual.ru",45],["lowcygier.pl",46],["malaysiastock.biz",47],["marriedgames.com.br",48],["megagames.com",49],["metasrc.com",50],["meteoblue.com",51],["mgsm.pl",52],["minijuegos.com",53],["miniwebtool.com",54],["mrexcel.com",55],["nu.nl",[56,119]],["easy-learn-tech.info",57],["one-click-tutorials.info",57],["solvetube.site",57],["getintopc.com",57],["preguntandroid.com",58],["iteramos.com",58],["pyrogram.org",59],["qiwihelp.net",60],["r3owners.net",61],["remont-aud.net",62],["salon.com",[63,64]],["satelliteguys.us",65],["signupgenius.com",66],["ingles.com",[67,68,69]],["spanishdict.com",[67,68,69]],["starsandstripesfc.com",70],["polygon.com",70],["strangermeetup.com",[71,152]],["thec64community.online",72],["thehindu.com",73],["titulky.com",[74,75]],["ucoin.net",76],["venea.net",77],["vimm.net",78],["wikihow.com",79],["wvnews.com",80],["xgp.pl",81],["yorumbudur.com",82],["yusepjaelani.blogspot.com",83],["weather.com",84],["m.rp5.ru",85],["m.rp5.by",85],["m.rp5.kz",85],["m.rp5.co.uk",85],["m.rp5.md",85],["rp5.ru",86],["rp5.ua",86],["rp5.by",86],["rp5.kz",86],["rp5.co.uk",86],["rp5.md",86],["wetteronline.de",87],["hdrezkabmmshq.org",88],["hdrezkafh28d9.org",88],["hdrezkasmakyy.org",88],["hdrezkafhs83u.org",88],["hdrezkahs920s.org",88],["hdrezka.in",88],["hdrezkat5ee2w.org",88],["hdrezkagdvv2b.net",88],["hdrezka66yhfg.net",88],["hdrezka77ftyy.net",88],["hdrezka.rest",88],["hdrezkaffsg67.net",88],["hdrezkafjk2he.net",88],["hdrezkahf22hh.net",88],["hdrezkahdg24s.net",88],["hdrezkabbdh4d.net",88],["hdrezkajjfhr5.net",88],["27p6qp79zyr1.net",88],["hdrezka19139.org",88],["hdrezkap3g.org",88],["hdrezkapez.org",88],["hdrezkapoi.org",88],["hdrezkarty.org",88],["hdrezkacvb.org",88],["hdrezka.ag",88],["upivi.com",88],["hdrezka.me",88],["ikinopoisk.com",88],["kinopub.me",88],["3ivi.com",88],["rezkify.com",88],["aghdrezka.com",88],["hdrezka.re",88],["bestofkinopoisk.com",88],["rezkance.com",88],["rezkery.com",88],["rezkily.com",88],["ezhdrezka.com",88],["akinopoisk.com",88],["hdrezkaonline.com",88],["drhdrezka.com",88],["mrhdrezka.com",88],["hdrezka.sh",88],["ehdrezka.com",88],["nukinopoisk.com",88],["livekinopoisk.com",88],["betahdrezka.com",88],["cokinopoisk.com",88],["hdrezka-ag.com",88],["hdrezka.club",88],["hdrezka.cm",88],["hdrezka.co",88],["hdrezka.name",88],["hdrezka.site",88],["hdrezka.today",88],["hdrezka.tv",88],["hdrezka.website",88],["hdrezkaag.net",88],["hdrezkaweb.com",88],["hdrezkayou.com",88],["instahdrezka.com",88],["myhdrezka.com",88],["freehdrezka.com",88],["rezka.ag",88],["tryhdrezka.com",88],["cnet.com",89],["edurev.in",90],["defenseone.com",91],["govexec.com",91],["nextgov.com",91],["route-fifty.com",91],["ktmmobile.com",92],["startech.com.bd",93],["onlinecourses.ooo",94],["juracademy.de",95],["vk.com",[96,97]],["instagram.com",98],["smocca.jp",99],["lnc.nc",100],["superfilmes.ph",100],["meduza.global.ssl.fastly.net",100],["meduza.io",100],["yenisafak.com",100],["offidocs.com",100],["onedio.com",100],["hpplus.jp",100],["fullfilmcibaba1.com",100],["joom.com",100],["nbc.com",100],["sport-express.ru",100],["maximum.ru",100],["ch3plus.com",100],["dropmefiles.com",100],["reddit.com",100],["life.ru",100],["macwelt.de",101],["pcwelt.de",101],["itemsatis.com",103],["dailymail.co.uk",104],["auchan.ua",105],["quizangel.com",106],["binge.buzz",107],["pbteen.com",108],["potterybarn.com",108],["potterybarnkids.com",108],["westelm.com",108],["williams-sonoma.com",108],["magicvalley.com",109],["brutal.io",[10,227]],["impots.gouv.fr",110],["realcleardefense.com",111],["xclient.info",112],["bejson.com",112],["gardenista.com",113],["opensubtitles.org",114],["gearside.com",115],["nytimes.com",[116,117]],["tvtropes.org",118],["justtrucks.com.au",120],["cittadinanza.biz",121],["glistranieri.it",121],["viralinindia.net",[121,131]],["ideapod.com",[121,131]],["privivkainfo.ru",121],["awebstories.com",[121,213]],["ancient.eu",122],["intramed.net",38],["protest.eu",123],["northwestfirearms.com",124],["techkings.org",124],["spookshow.net",125],["fosshub.com",126],["pokemonforever.com",127],["carsguide.com.au",128],["humo.be",129],["apksecured.com",130],["intergate.info",130],["alphapolis.co.jp",[130,156]],["chronologia.pl",[130,156]],["reportergazeta.pl",[130,156,158]],["odiarioonline.com.br",[130,167]],["nordkorea-info.de",130],["geotips.net",[130,173]],["televisiongratishd.com",[130,167,178]],["noweconomy.live",130],["naaree.com",[130,167]],["cda-hd.cc",130],["hqq.to",[130,168,186]],["tv-tokyo.co.jp",130],["arti-definisi-pengertian.info",130],["webwereld.nl",132],["palemoon.org",133],["wheel-size.com",134],["aoezone.net",135],["radioony.fm",136],["mexiconewsdaily.com",137],["technologyreview.com",138],["bdcraft.net",139],["wired.co.uk",140],["gq-magazine.co.uk",140],["glamourmagazine.co.uk",140],["youtube.com",141],["buienradar.nl",142],["watson.de",143],["clk.ink",144],["zerodot1.gitlab.io",[145,146]],["1009thecat.com",147],["1013katy.com",147],["1013themix.com",147],["1015jackfm.com",147],["1015khits.com",147],["1015thefox.com",147],["1017thebeach.com",147],["1017theteam.com",147],["1019hot.com",147],["1019online.com",147],["1019thekeg.com",147],["101thefox.net",147],["101wkqx.com",147],["1021nashicon.com",147],["1021thefox.com",147],["1023thewolf.com",147],["1025jackfm.com",147],["1027thevibe.com",147],["1029nashicon.com",147],["102thebear.com",147],["1031nowfm.com",147],["1031radiom.com",147],["1035memphis.com",147],["1035thegame.com",147],["1035wrbo.com",147],["1037nash.com",147],["1039bobfm.com",147],["1039wvbo.com",147],["1041wdlt.com",147],["1043thebridge.com",147],["1043thebridge.net",147],["1043thevibe.com",147],["1045thedan.com",147],["1045thezone.com",147],["1045wjjk.com",147],["1047krez.com",147],["1049nashicon.com",147],["1049thehits.com",147],["104thehawk.com",147],["1050talk.com",147],["1053classichits.com",147],["1053hotfm.com",147],["1053thebear.com",147],["1053thepoint.com",147],["1053thepoint.net",147],["1053wow.com",147],["1055kbuck.com",147],["1055thecat.com",147],["1057kokz.com",147],["1057nowfm.com",147],["1057thebear.com",147],["1057thex.com",147],["1057thexrocks.com",147],["1061theunderground.com",147],["1063spinfm.com",147],["1063thevibe.com",147],["1063wovo.com",147],["1065theticket.com",147],["1067thekrewe.com",147],["106x.com",147],["1070wnct.com",147],["1071bobfm.com",147],["1071thepeak.com",147],["1071thepoint.com",147],["1073wsjy.com",147],["1075nowfm.com",147],["1075thegame.com",147],["1077lakefm.com",147],["1077thebone.com",147],["1077theisland.com",147],["1079nashicon.com",147],["107countrypsk.com",147],["107nashicon.com",147],["1090kaay.com",147],["1220wkrs.com",147],["1230espnsports.com",147],["1230theteam.com",147],["1280wnam.com",147],["1290wlby.com",147],["1320thefan.com",147],["1340wmsa.com",147],["1430wcmy.com",147],["1450kven.com",147],["1480kyos.com",147],["1490wosh.com",147],["1510kga.com",147],["1590walg.com",147],["1620thezone.com",147],["1700thechamp.com",147],["2hoursmattpinfield.com",147],["600wrqx.com",147],["600wsom.com",147],["610knml.com",147],["630wpro.com",147],["640wxsm.com",147],["660wxqw.com",147],["680thefan.com",147],["770kkob.com",147],["790business.com",147],["790wpic.com",147],["810whb.com",147],["860kkat.com",147],["860utahsbigtalker.com",147],["900theticket.com",147],["921theticket.com",147],["923krst.com",147],["923thewolf.com",147],["925nashicon.com",147],["925thebear.com",147],["925thewolf.com",147],["927bobfm.com",147],["929peakfm.com",147],["929thewave.com",147],["929wbpm.com",147],["92kqrs.com",147],["92profm.com",147],["92qnashville.com",147],["931nashicon.com",147],["931thebeat.com",147],["933nashicon.com",147],["935nashfm.com",147],["935wrqn.com",147],["937nashicon.com",147],["937nowfm.com",147],["937themountain.com",147],["939northpoleradio.com",147],["939theville.com",147],["939xindy.com",147],["93q.com",147],["93wkct.com",147],["93x.com",147],["940wfaw.com",147],["941ksky.com",147],["941thebear.com",147],["941thehits.com",147],["945thedrive.com",147],["945thehawkradio.com",147],["947qdr.com",147],["947wls.com",147],["949kcmo.com",147],["949radiojondeek.com",147],["949starcountry.com",147],["949theoutlaw.com",147],["94rockradio.net",147],["951nashfm.com",147],["951kbby.com",147],["953hlf.com",147],["953thebeach.com",147],["953thescore.com",147],["955bobfm.com",147],["955glo.com",147],["955nashicon.com",147],["955thefan.com",147],["955thevibe.com",147],["957kboy.com",147],["957kpur.com",147],["957nashicon.com",147],["957thevibe.com",147],["957thewolfonline.com",147],["959therocket.com",147],["95sx.com",147],["95wiil.com",147],["95x.com",147],["961bbb.com",147],["961jamz.com",147],["961sox.com",147],["961wsox.com",147],["963nashicon.com",147],["963thezone.com",147],["963wdvd.com",147],["967shinefm.com",147],["969lacaliente.com",147],["969thewolf.com",147],["96key.com",147],["96kzel.com",147],["973eagle.com",147],["973nashfm.com",147],["975kabx.com",147],["975thevibe.com",147],["975wabd.com",147],["979nashfm.com",147],["979espnradio.com",147],["979nashicon.com",147],["979wvok.com",147],["979x.com",147],["97bht.com",147],["97rock.com",147],["980waav.com",147],["980wxlm.com",147],["981thebeat.com",147],["981themax.com",147],["981thevalley.com",147],["983nashicon.com",147],["983thekeg.com",147],["983vibe.com",147],["983wlcs.com",147],["985kissfm.net",147],["989magicfm.com",147],["989thebridge.com",147],["98theticket.com",147],["993kjoy.com",147],["995thejock.com",147],["995thewolf.com",147],["997cyk.com",147],["997cyk.org",147],["997kmjj.com",147],["997themix.com",147],["997wpro.com",147],["997wtn.com",147],["999thebuzz.com",147],["999thefoxrocks.com",147],["999thehawk.com",147],["99x.com",147],["kjmo.com",147],["nashfm100.com",147],["nashfm923krst.com",147],["nashfm1033.com",147],["nashfm1055.com",147],["nashfm929.com",147],["nashfm931.com",147],["nashfm941.com",147],["nashfm949.com",147],["nashfm981.com",147],["nashfmwisconsin.com",147],["nashicon989.com",147],["v100rocks.com",147],["albanymagic.com",147],["alice1077.com",147],["allthehitsb951.com",147],["alt1019.com",147],["alt1049albany.com",147],["alt2k.com",147],["alt923.com",147],["alt98.com",147],["am630.net",147],["amarillosrockstation.com",147],["americanpatriotmedia.com",147],["annarbors107one.com",147],["atlantasrockstation.com",147],["atlsportsx.com",147],["b106fm.com",147],["b1073.com",147],["b95.com",147],["b979.net",147],["b98.com",147],["b985slo.com",147],["b987.com",147],["bakersfieldespn.com",147],["bakersfieldespnsports.com",147],["beach985.com",147],["beachboogieandblues.com",147],["bear104.com",147],["big1013.com",147],["bigcheese1079.com",147],["bigcountry1073.com",147],["bigdawg985.com",147],["bigdog1067.com",147],["bigfrog101.com",147],["bigfroggy1053.com",147],["bigtalk1490.com",147],["blairgarner.com",147],["blazin1023.com",147],["blazin923.com",147],["bloomingtonhits.com",147],["bobfmspringfield.com",147],["bowlinggreensam.com",147],["bull973.com",147],["bxr.com",147],["caperadio1550.com",147],["catcountry.com",147],["catcountry96.com",147],["catcountryvermont.com",147],["cbssports1430.com",147],["cbssportserie.com",147],["cbssportsharrisburg.com",147],["cbssportsradio1430.com",147],["chicothunderheads.com",147],["christmas989.com",147],["ckrv.com",147],["classicfox.com",147],["classichits1033.com",147],["classichitsmy1059.com",147],["classichitswnyq.com",147],["classy100.com",147],["coast1013.com",147],["coast973.com",147],["country105fm.net",147],["countrycountdownusa.com",147],["countrylegends1059.com",147],["countrymi.com",147],["coyote1025.com",147],["cumulusdigital.com",147],["digitalsolutions201.com",147],["e93fm.com",147],["eagle97.com",147],["eagle993.com",147],["easy991.com",147],["ed.fm",147],["elizabethtownradio.com",147],["energy939indy.com",147],["espn1320columbia.com",147],["espn910.com",147],["espnhonolulu.com",147],["espnlouisville.com",147],["espnlv.com",147],["espnradio1280.com",147],["espnradio927.com",147],["espnradio941.com",147],["espnsyracuse.com",147],["espnur.com",147],["espnwestpalm.com",147],["espnwilmington.com",147],["fly92.com",147],["fly923.com",147],["fm102milwaukee.com",147],["fm102one.com",147],["fonzfm.com",147],["forevereaston.com",147],["forevermediayork.com",147],["fox969.com",147],["foxcincinnati.com",147],["foxsportsredding.com",147],["froggy1003.com",147],["froggy101fm.com",147],["froggy981.com",147],["froggy99.net",147],["froggycountry.net",147],["froggyland.com",147],["fuego1029.com",147],["fun1013.com",147],["fun969fm.com",147],["generations1023.com",147],["glory985.com",147],["go106.com",147],["goradioheartland.com",147],["gospel900.com",147],["gulf104.com",147],["heaven1460.com",147],["heaven983.com",147],["hitkicker997.com",147],["hitpage.com",147],["hits931fm.com",147],["hits96.com",147],["hits965.com",147],["hot1005.com",147],["hot100blono.com",147],["hot100nrv.com",147],["hot101.com",147],["hot102.net",147],["hot1033.com",147],["hot1039.com",147],["hot1047fm.com",147],["hot1057.com",147],["hot1063.com",147],["hot1067fm.com",147],["hot1067pa.com",147],["hot1077radio.com",147],["hot92and100.com",147],["hot933hits.com",147],["hot941.com",147],["hot967fm.com",147],["hvradionet.com",147],["i973hits.com",147],["ilovethehits.com",147],["indysmix.com",147],["jammin999fm.com",147],["jamz963.com",147],["jox2fm.com",147],["joxfm.com",147],["k100country.com",147],["k104online.com",147],["k105country.com",147],["k92radio.com",147],["k983.com",147],["kabc.com",147],["kaok.com",147],["kaperadio1550.com",147],["katm.com",147],["katt.com",147],["kbcy.com",147],["kber.com",147],["kboi.com",147],["kbul.com",147],["kbull93.com",147],["kcchiefsradio.com",147],["kcheradio.com",147],["kcmotalkradio.com",147],["kcmxam.com",147],["kennradio.com",147],["kernradio.com",147],["kesn1033.com",147],["key101fm.com",147],["kfru.com",147],["kftx.com",147],["kgfm.com",147],["kgfw.com",147],["kggo.com",147],["kgmo.com",147],["kgoradio.com",147],["khay.com",147],["khfm.com",147],["khfm.org",147],["khit1075.com",147],["khop.com",147],["khvl.com",147],["kiimfm.com",147],["kiss-1031.com",147],["kix1029.com",147],["kix106.com",147],["kix96.com",147],["kizn.com",147],["kjjy.com",147],["kjoy.com",147],["kkcy.com",147],["kkfm.com",147],["kkgb.com",147],["kkgl.com",147],["kkoh.com",147],["klif.com",147],["klik1240.com",147],["klin.com",147],["klur.com",147],["kmaj.com",147],["kmaj1440.com",147],["kmez1029.com",147],["kmjnow.com",147],["knbr.com",147],["knek.com",147],["kobfm.com",147],["kpla.com",147],["kpur107.com",147],["kqfc.com",147],["kqky.com",147],["kqms.com",147],["kqxy.com",147],["krbe.com",147],["krmd.com",147],["krny.com",147],["krrq.com",147],["krush925.com",147],["kruz1033.com",147],["ksam1017.com",147],["kscrhits.com",147],["kscs.com",147],["ksfo.com",147],["kshasta.com",147],["ksks.com",147],["ksmb.com",147],["ktcx.com",147],["ktik.com",147],["ktop1490.com",147],["ktucam.com",147],["kubaradio.com",147],["kubb.com",147],["kugn.com",147],["kuzz.com",147],["kuzzradio.com",147],["kvor.com",147],["kwin.com",147],["kwwr.com",147],["kxel.com",147],["kxzz1580am.com",147],["kyis.com",147],["kykz.com",147],["kzwafm.com",147],["la103.com",147],["laindomable.com",147],["laleync.com",147],["lanuevaomaha.com",147],["lite102.com",147],["literock105fm.com",147],["love105fm.com",147],["lvfoxsports.com",147],["magic1029fm.com",147],["magic1039fm.com",147],["magic1069.com",147],["magic1073.com",147],["magic1073fm.com",147],["magic93fm.com",147],["magic943fm.com",147],["magic979wtrg.com",147],["magic995abq.com",147],["majic97monroe.com",147],["majicspace.com",147],["maverick1023.com",147],["max94one.com",147],["maxrocks.net",147],["mega979.com",147],["mgeradio.com",147],["milwaukeesparty.com",147],["mix103.com",147],["mix1077albany.com",147],["mix965.net",147],["modernrock987.com",147],["montanassuperstation.com",147],["movin993.com",147],["muskegonnashicon.com",147],["my1059.com",147],["my961.com",147],["myblono.com",147],["mycolumbiabasin.com",147],["myfroggy95.com",147],["mykiss973.com",147],["mymagic106.com",147],["mymix1051.com",147],["mymix1061.com",147],["mymix961.com",147],["mystar98.com",147],["nashcountrydaily.com",147],["nashdetroit.com",147],["nashfm1007.com",147],["nashfm1011.com",147],["nashfm1017.com",147],["nashfm1025.com",147],["nashfm1027.com",147],["nashfm1061.com",147],["nashfm1065.com",147],["nashfm923.com",147],["nashfm937.com",147],["nashfm943.com",147],["nashfm951.com",147],["nashfm973.com",147],["nashfm991.com",147],["nashfmgreenbay.com",147],["nashfmsjo.com",147],["nashnightslive.net",147],["nashpensacola.com",147],["ncsportsradio.com",147],["nepasespnradio.com",147],["neuhoffmedia.com",147],["neuhoffmedialafayette.com",147],["newcountry963.com",147],["newsradio1029.com",147],["newsradio1440.com",147],["newsradioflorida.com",147],["newsradiokkob.com",147],["newsserver1.com",147],["newsserver2.com",147],["newsserver3.com",147],["newstalk1030.com",147],["newstalk1290koil.com",147],["newstalk730.com",147],["newstalk987.com",147],["newstalkwsba.com",147],["newswebradiocompany.net",147],["now937.com",147],["nrgmedia.com",147],["nrq.com",147],["og979.com",147],["okiecountry1017.com",147],["oldiesz104.com",147],["ottawaradio.net",147],["pensacolasjet.com",147],["peorias923.com",147],["picklefm.com",147],["pikefm.com",147],["planet1067.com",147],["pmbbroadcasting.com",147],["pmbradio.com",147],["power1021.com",147],["power103.com",147],["power1057.com",147],["power1069fm.com",147],["power923.com",147],["power94radio.com",147],["power955.com",147],["powerhits95.com",147],["powerslc.com",147],["praise1025fm.com",147],["purerock96.com",147],["q1005.com",147],["q1031fm.com",147],["q105.fm",147],["q1055.com",147],["q1061.com",147],["q106dot5.com",147],["q973radio.com",147],["q97country.com",147],["q98fm.com",147],["q997atlanta.com",147],["q99fm.com",147],["radio1039ny.com",147],["radiorockriver.com",147],["radiowoodstock.com",147],["realcountry1280whvr.com",147],["realcountryhv.com",147],["red1031.com",147],["red945.com",147],["rewind1019.com",147],["rickandsasha.com",147],["rock101.net",147],["rock1015.com",147],["rock103albany.com",147],["rock103rocks.com",147],["rock106.net",147],["rock107fm.com",147],["rock108.com",147],["rock945vt.com",147],["rockdaily.com",147],["rocknews.com",147],["rockofsavannah.com",147],["rockofsavannah.net",147],["softrock941.com",147],["southernillinoisnow.com",147],["southernsportstoday.com",147],["sportsanimal920.com",147],["sportsanimalabq.com",147],["sportscapitoldc.com",147],["sportshubtriad.com",147],["sportsradio1270.com",147],["sportsradio1440.com",147],["sportsradio1560.com",147],["sportsradio590am.com",147],["sportsradio740.com",147],["sportsradio967.com",147],["sportsradio970.com",147],["sportsradiobeaumont.com",147],["sportsradioberks.com",147],["sportsradiownml.com",147],["star98.net",147],["starfm1023.com",147],["starsplash.com",147],["stevegormanrocks.com",147],["sunny1031.com",147],["sunny1069fm.com",147],["sunny923.com",147],["sunny983.com",147],["sunnymuskegon.com",147],["supertalk1570.com",147],["sweet985.com",147],["talk104fm.com",147],["talk995.com",147],["talkradio1007.com",147],["tbhpod.com",147],["teammyrtlebeach.com",147],["test107.com",147],["thebear925.com",147],["thebigjab.com",147],["thebigstation93blx.com",147],["theblairgarnershow.com",147],["theconclave.com",147],["thefan1075.com",147],["thefanfm.com",147],["thegame541.com",147],["thehippo.com",147],["thehot1039.com",147],["thenewhotfm.com",147],["thenewpulsefm.com",147],["thepointontheweb.com",147],["therebelrocks.com",147],["therocket951.com",147],["therockstationz93.com",147],["thescore1260.com",147],["thesportsanimal.com",147],["theticket.com",147],["theticket1007.com",147],["theticket102.com",147],["theticket1590.com",147],["theticketmi.com",147],["thetybentlishow.com",147],["thevalley981.com",147],["thewolf1051.com",147],["thewolf951.com",147],["thisisqmusic.com",147],["thunder1073.com",147],["triadsports.com",147],["tuligaradio.com",147],["umpsports.com",147],["v100fm.com",147],["v1033.com",147],["vermilioncountyfirst.com",147],["vermillioncountyfirst.com",147],["w3dcountry.com",147],["w4country.com",147],["wa1a.com",147],["wabcradio.com",147],["walk975.com",147],["walkradio.com",147],["warm1033.com",147],["warm98.com",147],["waysam.com",147],["wbap.com",147],["wbbw.com",147],["wbmq.net",147],["wbnq.com",147],["wbpm929.com",147],["wbpmfm.com",147],["wbwn.com",147],["wcbm.com",147],["wceiradio.com",147],["wcfx.com",147],["wchv.com",147],["wclg.com",147],["wcoapensacola.com",147],["wcpqfm.com",147],["wcpt820.com",147],["wcpt820.net",147],["wcpt820am.com",147],["wcpt820am.net",147],["wcptam.com",147],["wcptam.net",147],["wcptamfm.com",147],["wcptamfm.net",147],["wcptamfm.org",147],["wcpyfm.com",147],["wctk.com",147],["wddoam.com",147],["wden.com",147],["wdml.com",147],["wdst.com",147],["wdst.org",147],["wdzz.com",147],["wedg.com",147],["werkfm.net",147],["werkradio.com",147],["wfasam.com",147],["wfav951.com",147],["wfmd.com",147],["wfms.com",147],["wfnc640am.com",147],["wfre.com",147],["wftw.com",147],["wgh1310.com",147],["wghsolidgold.com",147],["wglx.com",147],["wgni.com",147],["wgow.com",147],["wgowam.com",147],["wgrr.com",147],["whdg.com",147],["wheelz1045.com",147],["whli.com",147],["whrpfm.com",147],["whtt.com",147],["whud.com",147],["wild1029.com",147],["wild1049hd.com",147],["wild1061.com",147],["wild993fm.com",147],["wildcatsradio1290.com",147],["wink104.com",147],["winxfm.com",147],["wiog.com",147],["wiov.com",147],["wiov985.com",147],["wivk.com",147],["wivr1017.com",147],["wizn.com",147],["wjbc.com",147],["wjcw.com",147],["wjez.com",147],["wjjr.net",147],["wjoxam.com",147],["wjr.com",147],["wkav.com",147],["wkbethepoint.com",147],["wkga975.com",147],["wkhx.com",147],["wkmoradio.com",147],["wkol.com",147],["wkrs.com",147],["wkrufm.com",147],["wksm.com",147],["wkydeportes.com",147],["wlaq1410.com",147],["wlav.com",147],["wlbc.com",147],["wlevradio.com",147],["wlkwradio.com",147],["wlok.com",147],["wlsam.com",147],["wlum.com",147],["wlup.com",147],["wlwi.com",147],["wmac-am.com",147],["wmal.com",147],["wmqa.com",147],["wncv.com",147],["wogb.fm",147],["woko.com",147],["womg.com",147],["woodstockbroadcasting.com",147],["woodstockcommunication.com",147],["woodstockradio.net",147],["woodstocktv.net",147],["wovo1063.com",147],["wovofm.com",147],["wqut.com",147],["wqvealbany.com",147],["wrganews.com",147],["wrgm.com",147],["wrlo.com",147],["wrr101.com",147],["wrul.com",147],["wsba910.com",147],["wsfl.com",147],["wsjssports.com",147],["wskz.com",147],["wsyb1380am.com",147],["wtka.com",147],["wtma.com",147],["wtrxsports.com",147],["wttlradio.com",147],["wuuqradio.com",147],["wvel.com",147],["wvli927.com",147],["wvlkam.com",147],["wvnn.com",147],["wwck.com",147],["wwki.com",147],["wwqq101.com",147],["wxfx.com",147],["wxkr.com",147],["wxpkfm.com",147],["wynn1063.com",147],["wzpl.com",147],["wzyp.com",147],["wzzl.com",147],["x1051kc.com",147],["x95radio.com",147],["xs961.com",147],["xtrasports1300.com",147],["y-103.com",147],["y101hits.com",147],["y102montgomery.com",147],["y1065.com",147],["yesfm.net",147],["z1023online.com",147],["z1029.com",147],["z1075.com",147],["z937.com",147],["z93jamz.com",147],["z96.com",147],["z971.com",147],["zone1150.com",147],["zrock103.com",147],["zrockfm.com",147],["windows101tricks.com",148],["waaw.tv",149],["hqq.tv",[149,150]],["fontsfree.pro",151],["radarbox.com",153],["adslayuda.com",154],["avdelphi.com",155],["4x4earth.com",65],["jootc.com",[157,158]],["photobank.mainichi.co.jp",159],["tbs.co.jp",160],["sovetromantica.com",162],["longecity.org",163],["magnet-novels.com",164],["torrentlawyer.com",[164,169,175,176]],["fruit01.xyz",165],["lyricstranslate.com",166],["hardcoregames.ca",167],["allsmo.com",167],["themosvagas.com.br",167],["urbharat.xyz",167],["sportnews.to",[167,178]],["2embed.ru",168],["sbasian.pro",168],["miraculous.to",[168,189]],["vtplayer.net",168],["pepperlive.info",168],["unbiasedsenseevent.com",168],["maxt.church",168],["cool-etv.net",168],["vgembed.com",[168,222]],["szkolawohyn.pl",169],["virpe.cc",169],["gmarket.co.kr",[169,176]],["paesifantasma.it",170],["talpo.it",170],["pbinfo.ro",171],["quora.com",172],["gmx.net",174],["youmath.it",177],["renditepassive.net",[179,180,181,182,183]],["360doc.com",184],["logonews.cn",185],["thetodaypost.com",[186,191,196]],["cloudcomputingtopics.net",186],["0123movies.ch",[186,191,196,226]],["epn.bz",62],["affbank.com",26],["gardenia.net",[187,188]],["novelpia.com",[190,191]],["blueraindrops.com",193],["vidembed.me",194],["mzzcloud.life",194],["videobot.stream",194],["player.tabooporns.com",194],["justswallows.net",194],["onscreensvideo.com",194],["katerionews.com",194],["telenovelas-turcas.com.es",194],["kmo.to",194],["jeniusplay.com",[194,228]],["animecruzers.com",195],["descargatepelis.com",196],["news.ntv.co.jp",196],["bestjavporn.com",197],["mm9841.cc",197],["ggwash.org",[198,199]],["cinegrabber.com",202],["layarkacaxxi.icu",203],["readawrite.com",[204,205,206,207,208,209,210]],["dropgalaxy.com",211],["morosedog.gitlab.io",212],["indianhealthyrecipes.com",214],["tarnkappe.info",215],["phimz.org",216],["heavyfetish.com",217],["joysound.com",[218,219,220]],["colors.sonicthehedgehog.com",[220,223]],["leakedzone.com",224],["mehoathinh2.com",225],["powerline.io",227],["bestx.stream",229],["enduro-mtb.com",230],["kukaj.io",231],["animesaga.in",232]]);

const entitiesMap = new Map([["18comic",14],["earnload",144],["hindipix",[149,150]],["123movies",168],["brainly",192],["videovard",194],["ask4movie",[200,201]],["bluemediafile",221]]);

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
