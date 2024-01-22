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

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["loadAdmiral","noopFunc"],["ezAardvarkDetected","false"],["alert","undefined"],["ads_enabled","true"],["nitroAds.loaded","true"],["google_ad_modifications","{}"],["ANN.ads.adblocked","false"],["inxBX.failed","false"],["isadblocking","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["Object.prototype.adPlayerId",""],["QiyiPlayerProphetData.a.data","{}"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["aoAdBlockDetected","false"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["history.state","undefined"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,109]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,111]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["localnews8.com",7],["tempumail.com",7],["nbcsports.com",7],["cbssports.com",[7,8]],["touchtapplay.com",7],["realsport101.com",7],["gameskinny.com",7],["pcinvasion.com",7],["pc-builds.com",7],["svg.com",7],["syracuse.com",7],["allmovie.com",7],["racinggames.gg",7],["si.com",7],["ksdk.com",7],["slashgear.com",7],["sidereel.com",7],["primagames.com",7],["delmarvanow.com",7],["gfinityesports.com",7],["kooora.com",7],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,19]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,167]],["walterfootball.com",7],["boredpanda.com",7],["cleveland.com",7],["scitechdaily.com",9],["thewindowsclub.com",9],["tekniknot.com",10],["it-actual.ru",10],["radarbox.com",11],["maxroll.gg",12],["cheatnetwork.eu",13],["crackwatcher.com",13],["animenewsnetwork.com",14],["posti.mail.ee",15],["inbox.lv",15],["workingdays.org",16],["stash.sussy.moe",17],["android.com.pl",18],["fosslinux.com",20],["nexusmods.com",21],["1001tracklists.com",23],["autogaleria.pl",24],["basicweb.ru",25],["brainly.com",26],["brighteon.com",27],["cda.pl",28],["chefkoch.de",29],["chip.de",30],["civicx.com",31],["comnuan.com",32],["corriere.it",33],["creatur.io",34],["drnasserelbatal.com",34],["file.fm",34],["files.fm",34],["gamehag.com",34],["onlinehashcrack.com",34],["scantrad.net",34],["timebucks.com",34],["uderent.com",34],["cx30-forum.de",[35,36]],["telefon-treff.de",[35,36]],["cyberpedia.su",37],["kukuo.tw",37],["studopedia.info",37],["infopedia.su",37],["studopedia.net",37],["studopedia.su",37],["studopedia.org",37],["studopedia.ru",37],["studopedia.com.ua",37],["lektsii.org",37],["mydocx.ru",37],["dallasobserver.com",38],["digilibraries.com",39],["dniwolne.eu",40],["jeshoots.com",40],["webcamtaxi.com",40],["doodlr.io",41],["evades.io",42],["everyeye.it",43],["foxnews.com",44],["gameblog.fr",45],["lapumia.org",45],["gazzetta.it",46],["icy-veins.com",47],["inoreader.com",[48,49]],["investing.com",50],["lowcygier.pl",51],["malaysiastock.biz",52],["marriedgames.com.br",53],["megagames.com",54],["metasrc.com",55],["meteoblue.com",56],["mgsm.pl",57],["minijuegos.com",58],["miniwebtool.com",59],["mrexcel.com",60],["nu.nl",61],["how-to-pc.info",62],["easy-learn-tech.info",62],["one-click-tutorials.info",62],["solvetube.site",62],["getintopc.com",62],["preguntandroid.com",63],["iteramos.com",63],["pyrogram.org",64],["qiwihelp.net",65],["r3owners.net",66],["remont-aud.net",67],["salon.com",[68,69]],["satelliteguys.us",70],["signupgenius.com",71],["ingles.com",[72,73,74]],["spanishdict.com",[72,73,74]],["starsandstripesfc.com",75],["polygon.com",75],["strangermeetup.com",[76,158]],["thec64community.online",77],["thehindu.com",78],["titulky.com",[79,80]],["ucoin.net",81],["venea.net",82],["vimm.net",83],["wikihow.com",84],["wvnews.com",85],["xgp.pl",86],["yorumbudur.com",87],["yusepjaelani.blogspot.com",88],["sports.iqiyi.com",89],["m.iqiyi.com",89],["www.iqiyi.com",[90,91,92]],["theharborside.org",93],["fleetstar.com",93],["resources.harneys.com",93],["zeomega.com",93],["marketing.rsvpportal.com",93],["westernstatescat.com",93],["freedomiot.ai",93],["unifilabs.com",93],["weather.com",94],["m.rp5.ru",95],["m.rp5.by",95],["m.rp5.kz",95],["m.rp5.co.uk",95],["m.rp5.md",95],["rp5.ru",96],["rp5.ua",96],["rp5.by",96],["rp5.kz",96],["rp5.co.uk",96],["rp5.md",96],["hdrezka320rtq.org",97],["rezka-ua.tv",97],["hdrezkabmmshq.org",97],["hdrezkafh28d9.org",97],["hdrezkasmakyy.org",97],["hdrezkafhs83u.org",97],["hdrezkahs920s.org",97],["hdrezka.in",97],["hdrezkat5ee2w.org",97],["hdrezkagdvv2b.net",97],["hdrezka66yhfg.net",97],["hdrezka77ftyy.net",97],["hdrezka.rest",97],["hdrezkaffsg67.net",97],["hdrezkafjk2he.net",97],["hdrezkahf22hh.net",97],["hdrezkahdg24s.net",97],["hdrezkabbdh4d.net",97],["hdrezkajjfhr5.net",97],["27p6qp79zyr1.net",97],["hdrezka19139.org",97],["hdrezkap3g.org",97],["hdrezkapez.org",97],["hdrezkapoi.org",97],["hdrezkarty.org",97],["hdrezkacvb.org",97],["hdrezka.ag",97],["upivi.com",97],["hdrezka.me",97],["ikinopoisk.com",97],["kinopub.me",97],["3ivi.com",97],["rezkify.com",97],["aghdrezka.com",97],["hdrezka.re",97],["bestofkinopoisk.com",97],["rezkance.com",97],["rezkery.com",97],["rezkily.com",97],["ezhdrezka.com",97],["akinopoisk.com",97],["hdrezkaonline.com",97],["drhdrezka.com",97],["mrhdrezka.com",97],["hdrezka.sh",97],["ehdrezka.com",97],["nukinopoisk.com",97],["livekinopoisk.com",97],["betahdrezka.com",97],["cokinopoisk.com",97],["hdrezka-ag.com",97],["hdrezka.club",97],["hdrezka.cm",97],["hdrezka.co",97],["hdrezka.name",97],["hdrezka.site",97],["hdrezka.today",97],["hdrezka.tv",97],["hdrezka.website",97],["hdrezkaag.net",97],["hdrezkaweb.com",97],["hdrezkayou.com",97],["instahdrezka.com",97],["myhdrezka.com",97],["freehdrezka.com",97],["rezka.ag",97],["tryhdrezka.com",97],["cnet.com",98],["edurev.in",99],["defenseone.com",100],["govexec.com",100],["nextgov.com",100],["route-fifty.com",100],["ktmmobile.com",101],["startech.com.bd",102],["onlinecourses.ooo",103],["juracademy.de",104],["vk.com",[105,106]],["instagram.com",107],["smocca.jp",108],["community.oneplus.com",109],["lnc.nc",109],["superfilmes.ph",109],["meduza.global.ssl.fastly.net",109],["meduza.io",109],["yenisafak.com",109],["offidocs.com",109],["onedio.com",109],["hpplus.jp",109],["fullfilmcibaba1.com",109],["joom.com",109],["nbc.com",109],["maximum.ru",109],["ch3plus.com",109],["dropmefiles.com",109],["reddit.com",109],["life.ru",109],["macwelt.de",110],["pcwelt.de",110],["itemsatis.com",112],["dailymail.co.uk",113],["auchan.ua",114],["quizangel.com",115],["binge.buzz",116],["magicvalley.com",117],["brutal.io",[18,230]],["impots.gouv.fr",118],["realcleardefense.com",119],["xclient.info",120],["bejson.com",120],["gardenista.com",121],["gearside.com",122],["nytimes.com",[123,124]],["tvtropes.org",125],["justtrucks.com.au",126],["cittadinanza.biz",127],["glistranieri.it",127],["viralinindia.net",[127,137]],["ideapod.com",[127,137]],["privivkainfo.ru",127],["awebstories.com",[127,217]],["ancient.eu",128],["intramed.net",45],["protest.eu",129],["northwestfirearms.com",130],["techkings.org",130],["spookshow.net",131],["fosshub.com",132],["pokemonforever.com",133],["carsguide.com.au",134],["humo.be",135],["apksecured.com",136],["intergate.info",136],["alphapolis.co.jp",[136,161]],["chronologia.pl",[136,161]],["reportergazeta.pl",[136,161,164]],["odiarioonline.com.br",[136,173]],["nordkorea-info.de",136],["geotips.net",[136,178]],["televisiongratishd.com",[136,173,183]],["noweconomy.live",136],["naaree.com",[136,173]],["cda-hd.cc",136],["hqq.to",[136,174,191]],["tv-tokyo.co.jp",136],["arti-definisi-pengertian.info",136],["webwereld.nl",138],["palemoon.org",139],["wheel-size.com",140],["aoezone.net",141],["radioony.fm",142],["mexiconewsdaily.com",143],["technologyreview.com",144],["bdcraft.net",145],["wired.co.uk",146],["gq-magazine.co.uk",146],["glamourmagazine.co.uk",146],["youtube.com",147],["buienradar.nl",148],["watson.de",149],["clk.ink",150],["zerodot1.gitlab.io",[151,152]],["1009thecat.com",153],["1013katy.com",153],["1013themix.com",153],["1015jackfm.com",153],["1015khits.com",153],["1015thefox.com",153],["1017thebeach.com",153],["1017theteam.com",153],["1019hot.com",153],["1019online.com",153],["1019thekeg.com",153],["101thefox.net",153],["101wkqx.com",153],["1021nashicon.com",153],["1021thefox.com",153],["1023thewolf.com",153],["1025jackfm.com",153],["1027thevibe.com",153],["1029nashicon.com",153],["102thebear.com",153],["1031nowfm.com",153],["1031radiom.com",153],["1035memphis.com",153],["1035thegame.com",153],["1035wrbo.com",153],["1037nash.com",153],["1039bobfm.com",153],["1039wvbo.com",153],["1041wdlt.com",153],["1043thebridge.com",153],["1043thebridge.net",153],["1043thevibe.com",153],["1045thedan.com",153],["1045thezone.com",153],["1045wjjk.com",153],["1047krez.com",153],["1049nashicon.com",153],["1049thehits.com",153],["104thehawk.com",153],["1050talk.com",153],["1053classichits.com",153],["1053hotfm.com",153],["1053thebear.com",153],["1053thepoint.com",153],["1053thepoint.net",153],["1053wow.com",153],["1055kbuck.com",153],["1055thecat.com",153],["1057kokz.com",153],["1057nowfm.com",153],["1057thebear.com",153],["1057thex.com",153],["1057thexrocks.com",153],["1061theunderground.com",153],["1063spinfm.com",153],["1063thevibe.com",153],["1063wovo.com",153],["1065theticket.com",153],["1067thekrewe.com",153],["106x.com",153],["1070wnct.com",153],["1071bobfm.com",153],["1071thepeak.com",153],["1071thepoint.com",153],["1073wsjy.com",153],["1075nowfm.com",153],["1075thegame.com",153],["1077lakefm.com",153],["1077thebone.com",153],["1077theisland.com",153],["1079nashicon.com",153],["107countrypsk.com",153],["107nashicon.com",153],["1090kaay.com",153],["1220wkrs.com",153],["1230espnsports.com",153],["1230theteam.com",153],["1280wnam.com",153],["1290wlby.com",153],["1320thefan.com",153],["1340wmsa.com",153],["1430wcmy.com",153],["1450kven.com",153],["1480kyos.com",153],["1490wosh.com",153],["1510kga.com",153],["1590walg.com",153],["1620thezone.com",153],["1700thechamp.com",153],["2hoursmattpinfield.com",153],["600wrqx.com",153],["600wsom.com",153],["610knml.com",153],["630wpro.com",153],["640wxsm.com",153],["660wxqw.com",153],["680thefan.com",153],["770kkob.com",153],["790business.com",153],["790wpic.com",153],["810whb.com",153],["860kkat.com",153],["860utahsbigtalker.com",153],["900theticket.com",153],["921theticket.com",153],["923krst.com",153],["923thewolf.com",153],["925nashicon.com",153],["925thebear.com",153],["925thewolf.com",153],["927bobfm.com",153],["929peakfm.com",153],["929thewave.com",153],["929wbpm.com",153],["92kqrs.com",153],["92profm.com",153],["92qnashville.com",153],["931nashicon.com",153],["931thebeat.com",153],["933nashicon.com",153],["935nashfm.com",153],["935wrqn.com",153],["937nashicon.com",153],["937nowfm.com",153],["937themountain.com",153],["939northpoleradio.com",153],["939theville.com",153],["939xindy.com",153],["93q.com",153],["93wkct.com",153],["93x.com",153],["940wfaw.com",153],["941ksky.com",153],["941thebear.com",153],["941thehits.com",153],["945thedrive.com",153],["945thehawkradio.com",153],["947qdr.com",153],["947wls.com",153],["949kcmo.com",153],["949radiojondeek.com",153],["949starcountry.com",153],["949theoutlaw.com",153],["94rockradio.net",153],["951nashfm.com",153],["951kbby.com",153],["953hlf.com",153],["953thebeach.com",153],["953thescore.com",153],["955bobfm.com",153],["955glo.com",153],["955nashicon.com",153],["955thefan.com",153],["955thevibe.com",153],["957kboy.com",153],["957kpur.com",153],["957nashicon.com",153],["957thevibe.com",153],["957thewolfonline.com",153],["959therocket.com",153],["95sx.com",153],["95wiil.com",153],["95x.com",153],["961bbb.com",153],["961jamz.com",153],["961sox.com",153],["961wsox.com",153],["963nashicon.com",153],["963thezone.com",153],["963wdvd.com",153],["967shinefm.com",153],["969lacaliente.com",153],["969thewolf.com",153],["96key.com",153],["96kzel.com",153],["973eagle.com",153],["973nashfm.com",153],["975kabx.com",153],["975thevibe.com",153],["975wabd.com",153],["979nashfm.com",153],["979espnradio.com",153],["979nashicon.com",153],["979wvok.com",153],["979x.com",153],["97bht.com",153],["97rock.com",153],["980waav.com",153],["980wxlm.com",153],["981thebeat.com",153],["981themax.com",153],["981thevalley.com",153],["983nashicon.com",153],["983thekeg.com",153],["983vibe.com",153],["983wlcs.com",153],["985kissfm.net",153],["989magicfm.com",153],["989thebridge.com",153],["98theticket.com",153],["993kjoy.com",153],["995thejock.com",153],["995thewolf.com",153],["997cyk.com",153],["997cyk.org",153],["997kmjj.com",153],["997themix.com",153],["997wpro.com",153],["997wtn.com",153],["999thebuzz.com",153],["999thefoxrocks.com",153],["999thehawk.com",153],["99x.com",153],["kjmo.com",153],["nashfm100.com",153],["nashfm923krst.com",153],["nashfm1033.com",153],["nashfm1055.com",153],["nashfm929.com",153],["nashfm931.com",153],["nashfm941.com",153],["nashfm949.com",153],["nashfm981.com",153],["nashfmwisconsin.com",153],["nashicon989.com",153],["v100rocks.com",153],["albanymagic.com",153],["alice1077.com",153],["allthehitsb951.com",153],["alt1019.com",153],["alt1049albany.com",153],["alt2k.com",153],["alt923.com",153],["alt98.com",153],["am630.net",153],["amarillosrockstation.com",153],["americanpatriotmedia.com",153],["annarbors107one.com",153],["atlantasrockstation.com",153],["atlsportsx.com",153],["b106fm.com",153],["b1073.com",153],["b95.com",153],["b979.net",153],["b98.com",153],["b985slo.com",153],["b987.com",153],["bakersfieldespn.com",153],["bakersfieldespnsports.com",153],["beach985.com",153],["beachboogieandblues.com",153],["bear104.com",153],["big1013.com",153],["bigcheese1079.com",153],["bigcountry1073.com",153],["bigdawg985.com",153],["bigdog1067.com",153],["bigfrog101.com",153],["bigfroggy1053.com",153],["bigtalk1490.com",153],["blairgarner.com",153],["blazin1023.com",153],["blazin923.com",153],["bloomingtonhits.com",153],["bobfmspringfield.com",153],["bowlinggreensam.com",153],["bull973.com",153],["bxr.com",153],["caperadio1550.com",153],["catcountry.com",153],["catcountry96.com",153],["catcountryvermont.com",153],["cbssports1430.com",153],["cbssportserie.com",153],["cbssportsharrisburg.com",153],["cbssportsradio1430.com",153],["chicothunderheads.com",153],["christmas989.com",153],["ckrv.com",153],["classicfox.com",153],["classichits1033.com",153],["classichitsmy1059.com",153],["classichitswnyq.com",153],["classy100.com",153],["coast1013.com",153],["coast973.com",153],["country105fm.net",153],["countrycountdownusa.com",153],["countrylegends1059.com",153],["countrymi.com",153],["coyote1025.com",153],["cumulusdigital.com",153],["digitalsolutions201.com",153],["e93fm.com",153],["eagle97.com",153],["eagle993.com",153],["easy991.com",153],["ed.fm",153],["elizabethtownradio.com",153],["energy939indy.com",153],["espn1320columbia.com",153],["espn910.com",153],["espnhonolulu.com",153],["espnlouisville.com",153],["espnlv.com",153],["espnradio1280.com",153],["espnradio927.com",153],["espnradio941.com",153],["espnsyracuse.com",153],["espnur.com",153],["espnwestpalm.com",153],["espnwilmington.com",153],["fly92.com",153],["fly923.com",153],["fm102milwaukee.com",153],["fm102one.com",153],["fonzfm.com",153],["forevereaston.com",153],["forevermediayork.com",153],["fox969.com",153],["foxcincinnati.com",153],["foxsportsredding.com",153],["froggy1003.com",153],["froggy101fm.com",153],["froggy981.com",153],["froggy99.net",153],["froggycountry.net",153],["froggyland.com",153],["fuego1029.com",153],["fun1013.com",153],["fun969fm.com",153],["generations1023.com",153],["glory985.com",153],["go106.com",153],["goradioheartland.com",153],["gospel900.com",153],["gulf104.com",153],["heaven1460.com",153],["heaven983.com",153],["hitkicker997.com",153],["hitpage.com",153],["hits931fm.com",153],["hits96.com",153],["hits965.com",153],["hot1005.com",153],["hot100blono.com",153],["hot100nrv.com",153],["hot101.com",153],["hot102.net",153],["hot1033.com",153],["hot1039.com",153],["hot1047fm.com",153],["hot1057.com",153],["hot1063.com",153],["hot1067fm.com",153],["hot1067pa.com",153],["hot1077radio.com",153],["hot92and100.com",153],["hot933hits.com",153],["hot941.com",153],["hot967fm.com",153],["hvradionet.com",153],["i973hits.com",153],["ilovethehits.com",153],["indysmix.com",153],["jammin999fm.com",153],["jamz963.com",153],["jox2fm.com",153],["joxfm.com",153],["k100country.com",153],["k104online.com",153],["k105country.com",153],["k92radio.com",153],["k983.com",153],["kabc.com",153],["kaok.com",153],["kaperadio1550.com",153],["katm.com",153],["katt.com",153],["kbcy.com",153],["kber.com",153],["kboi.com",153],["kbul.com",153],["kbull93.com",153],["kcchiefsradio.com",153],["kcheradio.com",153],["kcmotalkradio.com",153],["kcmxam.com",153],["kennradio.com",153],["kernradio.com",153],["kesn1033.com",153],["key101fm.com",153],["kfru.com",153],["kftx.com",153],["kgfm.com",153],["kgfw.com",153],["kggo.com",153],["kgmo.com",153],["kgoradio.com",153],["khay.com",153],["khfm.com",153],["khfm.org",153],["khit1075.com",153],["khop.com",153],["khvl.com",153],["kiimfm.com",153],["kiss-1031.com",153],["kix1029.com",153],["kix106.com",153],["kix96.com",153],["kizn.com",153],["kjjy.com",153],["kjoy.com",153],["kkcy.com",153],["kkfm.com",153],["kkgb.com",153],["kkgl.com",153],["kkoh.com",153],["klif.com",153],["klik1240.com",153],["klin.com",153],["klur.com",153],["kmaj.com",153],["kmaj1440.com",153],["kmez1029.com",153],["kmjnow.com",153],["knbr.com",153],["knek.com",153],["kobfm.com",153],["kpla.com",153],["kpur107.com",153],["kqfc.com",153],["kqky.com",153],["kqms.com",153],["kqxy.com",153],["krbe.com",153],["krmd.com",153],["krny.com",153],["krrq.com",153],["krush925.com",153],["kruz1033.com",153],["ksam1017.com",153],["kscrhits.com",153],["kscs.com",153],["ksfo.com",153],["kshasta.com",153],["ksks.com",153],["ksmb.com",153],["ktcx.com",153],["ktik.com",153],["ktop1490.com",153],["ktucam.com",153],["kubaradio.com",153],["kubb.com",153],["kugn.com",153],["kuzz.com",153],["kuzzradio.com",153],["kvor.com",153],["kwin.com",153],["kwwr.com",153],["kxel.com",153],["kxzz1580am.com",153],["kyis.com",153],["kykz.com",153],["kzwafm.com",153],["la103.com",153],["laindomable.com",153],["laleync.com",153],["lanuevaomaha.com",153],["lite102.com",153],["literock105fm.com",153],["love105fm.com",153],["lvfoxsports.com",153],["magic1029fm.com",153],["magic1039fm.com",153],["magic1069.com",153],["magic1073.com",153],["magic1073fm.com",153],["magic93fm.com",153],["magic943fm.com",153],["magic979wtrg.com",153],["magic995abq.com",153],["majic97monroe.com",153],["majicspace.com",153],["maverick1023.com",153],["max94one.com",153],["maxrocks.net",153],["mega979.com",153],["mgeradio.com",153],["milwaukeesparty.com",153],["mix103.com",153],["mix1077albany.com",153],["mix965.net",153],["modernrock987.com",153],["montanassuperstation.com",153],["movin993.com",153],["muskegonnashicon.com",153],["my1059.com",153],["my961.com",153],["myblono.com",153],["mycolumbiabasin.com",153],["myfroggy95.com",153],["mykiss973.com",153],["mymagic106.com",153],["mymix1051.com",153],["mymix1061.com",153],["mymix961.com",153],["mystar98.com",153],["nashcountrydaily.com",153],["nashdetroit.com",153],["nashfm1007.com",153],["nashfm1011.com",153],["nashfm1017.com",153],["nashfm1025.com",153],["nashfm1027.com",153],["nashfm1061.com",153],["nashfm1065.com",153],["nashfm923.com",153],["nashfm937.com",153],["nashfm943.com",153],["nashfm951.com",153],["nashfm973.com",153],["nashfm991.com",153],["nashfmgreenbay.com",153],["nashfmsjo.com",153],["nashnightslive.net",153],["nashpensacola.com",153],["ncsportsradio.com",153],["nepasespnradio.com",153],["neuhoffmedia.com",153],["neuhoffmedialafayette.com",153],["newcountry963.com",153],["newsradio1029.com",153],["newsradio1440.com",153],["newsradioflorida.com",153],["newsradiokkob.com",153],["newsserver1.com",153],["newsserver2.com",153],["newsserver3.com",153],["newstalk1030.com",153],["newstalk1290koil.com",153],["newstalk730.com",153],["newstalk987.com",153],["newstalkwsba.com",153],["newswebradiocompany.net",153],["now937.com",153],["nrgmedia.com",153],["nrq.com",153],["og979.com",153],["okiecountry1017.com",153],["oldiesz104.com",153],["ottawaradio.net",153],["pensacolasjet.com",153],["peorias923.com",153],["picklefm.com",153],["pikefm.com",153],["planet1067.com",153],["pmbbroadcasting.com",153],["pmbradio.com",153],["power1021.com",153],["power103.com",153],["power1057.com",153],["power1069fm.com",153],["power923.com",153],["power94radio.com",153],["power955.com",153],["powerhits95.com",153],["powerslc.com",153],["praise1025fm.com",153],["purerock96.com",153],["q1005.com",153],["q1031fm.com",153],["q105.fm",153],["q1055.com",153],["q1061.com",153],["q106dot5.com",153],["q973radio.com",153],["q97country.com",153],["q98fm.com",153],["q997atlanta.com",153],["q99fm.com",153],["radio1039ny.com",153],["radiorockriver.com",153],["radiowoodstock.com",153],["realcountry1280whvr.com",153],["realcountryhv.com",153],["red1031.com",153],["red945.com",153],["rewind1019.com",153],["rickandsasha.com",153],["rock101.net",153],["rock1015.com",153],["rock103albany.com",153],["rock103rocks.com",153],["rock106.net",153],["rock107fm.com",153],["rock108.com",153],["rock945vt.com",153],["rockdaily.com",153],["rocknews.com",153],["rockofsavannah.com",153],["rockofsavannah.net",153],["softrock941.com",153],["southernillinoisnow.com",153],["southernsportstoday.com",153],["sportsanimal920.com",153],["sportsanimalabq.com",153],["sportscapitoldc.com",153],["sportshubtriad.com",153],["sportsradio1270.com",153],["sportsradio1440.com",153],["sportsradio1560.com",153],["sportsradio590am.com",153],["sportsradio740.com",153],["sportsradio967.com",153],["sportsradio970.com",153],["sportsradiobeaumont.com",153],["sportsradioberks.com",153],["sportsradiownml.com",153],["star98.net",153],["starfm1023.com",153],["starsplash.com",153],["stevegormanrocks.com",153],["sunny1031.com",153],["sunny1069fm.com",153],["sunny923.com",153],["sunny983.com",153],["sunnymuskegon.com",153],["supertalk1570.com",153],["sweet985.com",153],["talk104fm.com",153],["talk995.com",153],["talkradio1007.com",153],["tbhpod.com",153],["teammyrtlebeach.com",153],["test107.com",153],["thebear925.com",153],["thebigjab.com",153],["thebigstation93blx.com",153],["theblairgarnershow.com",153],["theconclave.com",153],["thefan1075.com",153],["thefanfm.com",153],["thegame541.com",153],["thehippo.com",153],["thehot1039.com",153],["thenewhotfm.com",153],["thenewpulsefm.com",153],["thepointontheweb.com",153],["therebelrocks.com",153],["therocket951.com",153],["therockstationz93.com",153],["thescore1260.com",153],["thesportsanimal.com",153],["theticket.com",153],["theticket1007.com",153],["theticket102.com",153],["theticket1590.com",153],["theticketmi.com",153],["thetybentlishow.com",153],["thevalley981.com",153],["thewolf1051.com",153],["thewolf951.com",153],["thisisqmusic.com",153],["thunder1073.com",153],["triadsports.com",153],["tuligaradio.com",153],["umpsports.com",153],["v100fm.com",153],["v1033.com",153],["vermilioncountyfirst.com",153],["vermillioncountyfirst.com",153],["w3dcountry.com",153],["w4country.com",153],["wa1a.com",153],["wabcradio.com",153],["walk975.com",153],["walkradio.com",153],["warm1033.com",153],["warm98.com",153],["waysam.com",153],["wbap.com",153],["wbbw.com",153],["wbmq.net",153],["wbnq.com",153],["wbpm929.com",153],["wbpmfm.com",153],["wbwn.com",153],["wcbm.com",153],["wceiradio.com",153],["wcfx.com",153],["wchv.com",153],["wclg.com",153],["wcoapensacola.com",153],["wcpqfm.com",153],["wcpt820.com",153],["wcpt820.net",153],["wcpt820am.com",153],["wcpt820am.net",153],["wcptam.com",153],["wcptam.net",153],["wcptamfm.com",153],["wcptamfm.net",153],["wcptamfm.org",153],["wcpyfm.com",153],["wctk.com",153],["wddoam.com",153],["wden.com",153],["wdml.com",153],["wdst.com",153],["wdst.org",153],["wdzz.com",153],["wedg.com",153],["werkfm.net",153],["werkradio.com",153],["wfasam.com",153],["wfav951.com",153],["wfmd.com",153],["wfms.com",153],["wfnc640am.com",153],["wfre.com",153],["wftw.com",153],["wgh1310.com",153],["wghsolidgold.com",153],["wglx.com",153],["wgni.com",153],["wgow.com",153],["wgowam.com",153],["wgrr.com",153],["whdg.com",153],["wheelz1045.com",153],["whli.com",153],["whrpfm.com",153],["whtt.com",153],["whud.com",153],["wild1029.com",153],["wild1049hd.com",153],["wild1061.com",153],["wild993fm.com",153],["wildcatsradio1290.com",153],["wink104.com",153],["winxfm.com",153],["wiog.com",153],["wiov.com",153],["wiov985.com",153],["wivk.com",153],["wivr1017.com",153],["wizn.com",153],["wjbc.com",153],["wjcw.com",153],["wjez.com",153],["wjjr.net",153],["wjoxam.com",153],["wjr.com",153],["wkav.com",153],["wkbethepoint.com",153],["wkga975.com",153],["wkhx.com",153],["wkmoradio.com",153],["wkol.com",153],["wkrs.com",153],["wkrufm.com",153],["wksm.com",153],["wkydeportes.com",153],["wlaq1410.com",153],["wlav.com",153],["wlbc.com",153],["wlevradio.com",153],["wlkwradio.com",153],["wlok.com",153],["wlsam.com",153],["wlum.com",153],["wlup.com",153],["wlwi.com",153],["wmac-am.com",153],["wmal.com",153],["wmqa.com",153],["wncv.com",153],["wogb.fm",153],["woko.com",153],["womg.com",153],["woodstockbroadcasting.com",153],["woodstockcommunication.com",153],["woodstockradio.net",153],["woodstocktv.net",153],["wovo1063.com",153],["wovofm.com",153],["wqut.com",153],["wqvealbany.com",153],["wrganews.com",153],["wrgm.com",153],["wrlo.com",153],["wrr101.com",153],["wrul.com",153],["wsba910.com",153],["wsfl.com",153],["wsjssports.com",153],["wskz.com",153],["wsyb1380am.com",153],["wtka.com",153],["wtma.com",153],["wtrxsports.com",153],["wttlradio.com",153],["wuuqradio.com",153],["wvel.com",153],["wvli927.com",153],["wvlkam.com",153],["wvnn.com",153],["wwck.com",153],["wwki.com",153],["wwqq101.com",153],["wxfx.com",153],["wxkr.com",153],["wxpkfm.com",153],["wynn1063.com",153],["wzpl.com",153],["wzyp.com",153],["wzzl.com",153],["x1051kc.com",153],["x95radio.com",153],["xs961.com",153],["xtrasports1300.com",153],["y-103.com",153],["y101hits.com",153],["y102montgomery.com",153],["y1065.com",153],["yesfm.net",153],["z1023online.com",153],["z1029.com",153],["z1075.com",153],["z937.com",153],["z93jamz.com",153],["z96.com",153],["z971.com",153],["zone1150.com",153],["zrock103.com",153],["zrockfm.com",153],["windows101tricks.com",154],["waaw.tv",155],["hqq.tv",[155,156]],["fontsfree.pro",157],["adslayuda.com",159],["avdelphi.com",160],["ds2play.com",162],["ds2video.com",162],["d0o0d.com",162],["vidembed.me",162],["mzzcloud.life",162],["videobot.stream",162],["justswallows.net",162],["onscreensvideo.com",162],["katerionews.com",162],["telenovelas-turcas.com.es",162],["kmo.to",162],["jeniusplay.com",[162,231]],["rsadnetworkinfo.com",[162,173]],["rsinsuranceinfo.com",[162,173]],["rsfinanceinfo.com",[162,173]],["rsgamer.app",[162,173]],["rssoftwareinfo.com",[162,173]],["rshostinginfo.com",[162,173]],["rseducationinfo.com",[162,173]],["4x4earth.com",70],["jootc.com",[163,164]],["photobank.mainichi.co.jp",165],["tbs.co.jp",166],["sovetromantica.com",168],["longecity.org",169],["magnet-novels.com",170],["torrentlawyer.com",[170,175,180,181]],["fruit01.xyz",171],["lyricstranslate.com",172],["hardcoregames.ca",173],["allsmo.com",173],["themosvagas.com.br",173],["urbharat.xyz",173],["sportnews.to",[173,183]],["2embed.ru",174],["sbasian.pro",174],["miraculous.to",[174,194]],["vtplayer.net",174],["pepperlive.info",174],["unbiasedsenseevent.com",174],["maxt.church",174],["cool-etv.net",174],["vgembed.com",[174,225]],["photopea.com",174],["szkolawohyn.pl",175],["virpe.cc",175],["gmarket.co.kr",[175,181]],["paesifantasma.it",176],["talpo.it",176],["quora.com",177],["gmx.net",179],["hoca4u.com",181],["youmath.it",182],["renditepassive.net",[184,185,186,187,188]],["360doc.com",189],["logonews.cn",190],["thetodaypost.com",[191,196,200]],["cloudcomputingtopics.net",191],["0123movies.ch",[191,196,200,229]],["epn.bz",67],["affbank.com",34],["gardenia.net",[192,193]],["novelpia.com",[195,196]],["blueraindrops.com",198],["animecruzers.com",199],["descargatepelis.com",200],["news.ntv.co.jp",200],["bestjavporn.com",201],["mm9841.cc",201],["ggwash.org",[202,203]],["cinegrabber.com",206],["layarkacaxxi.icu",207],["readawrite.com",[208,209,210,211,212,213,214]],["dropgalaxy.com",215],["morosedog.gitlab.io",216],["indianhealthyrecipes.com",218],["tarnkappe.info",219],["heavyfetish.com",220],["joysound.com",[221,222,223]],["colors.sonicthehedgehog.com",[223,226]],["leakedzone.com",227],["mehoathinh2.com",228],["powerline.io",230],["bestx.stream",232],["moviesapi.club",232],["watchx.top",232],["enduro-mtb.com",233],["kukaj.io",234],["animesaga.in",235],["animesuge.to",236],["aniwave.to",236],["hdtoday.so",236],["hurawatch.bz",236],["lazyadmin.nl",7],["thejakartapost.com",237],["fullxh.com",238],["megaxh.com",238],["unlockxh4.com",238],["xhadult2.com",238],["xhadult3.com",238],["xhadult4.com",238],["xhadult5.com",238],["xhamster46.com",238],["xhday.com",238],["xhday1.com",238],["xhmoon5.com",238],["xhplanet1.com",238],["xhplanet2.com",238],["xhreal2.com",238],["xhreal3.com",238],["xhtab2.com",238],["xhvictory.com",238],["xhwebsite.com",238],["xhwebsite2.com",238],["xhwide1.com",238],["xhwide8.com",238],["marinetraffic.com",239],["ymovies.vip",240],["aniwatch.to",240],["megacloud.tv",240],["netuplayer.top",240],["stbnetu.xyz",240],["androidpolice.com",241],["makeuseof.com",241],["movieweb.com",241],["xda-developers.com",241],["thegamer.com",241],["cbr.com",241],["gamerant.com",241],["screenrant.com",241],["howtogeek.com",241],["thethings.com",241],["simpleflying.com",241],["dualshockers.com",241],["digminecraft.com",242]]);

const entitiesMap = new Map([["18comic",22],["earnload",150],["hindipix",[155,156]],["doods",162],["videovard",162],["123movies",174],["brainly",197],["ask4movie",[204,205]],["bluemediafile",224],["vidplay",236],["hamsterix",238],["xhamster",238],["xhamster1",238],["xhamster10",238],["xhamster11",238],["xhamster12",238],["xhamster13",238],["xhamster14",238],["xhamster15",238],["xhamster16",238],["xhamster17",238],["xhamster18",238],["xhamster19",238],["xhamster20",238],["xhamster2",238],["xhamster3",238],["xhamster4",238],["xhamster5",238],["xhamster7",238],["xhamster8",238],["netu",240]]);

const exceptionsMap = new Map([["m.rp5.ru",[96]],["m.rp5.by",[96]],["m.rp5.kz",[96]],["m.rp5.co.uk",[96]],["m.rp5.md",[96]]]);

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
