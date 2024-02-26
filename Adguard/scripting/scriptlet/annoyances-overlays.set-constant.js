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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["Object.prototype.renderTo","undefined"],["Object.prototype.blockId","undefined"],["Object.prototype.hasShadowDomSupport","undefined"],["Object.prototype.BannerDirect","undefined"],["Object.prototype.registerPlacement","undefined"],["Object.prototype.isAdblockEnable","noopFunc"],["Object.prototype.renderDirect","undefined"],["admiral","noopFunc"],["loadAdmiral","noopFunc"],["ezAardvarkDetected","false"],["nitroAds.abp","true"],["alert","undefined"],["aa_abd_modal_create","noopFunc"],["ads_enabled","true"],["nitroAds.loaded","true"],["google_ad_modifications","{}"],["ANN.ads.adblocked","false"],["inxBX.failed","false"],["isadblocking","false"],["checkAdBlock","noopFunc"],["hasAdblock","false"],["ads.adBlockDetected","false"],["penci_adlbock","undefined"],["blockingAds","false"],["nerverblock_callback","noopFunc"],["showAds","true"],["isAdblockEnabled","false"],["popUpInfo","noopFunc"],["jsData.adsEnabled","false"],["brighteonSpecial","true"],["adblockV1","true"],["adblocker_is_off","true"],["TfmediaExtFolEngineLoaded","true"],["Object.prototype.rellect_adblock_detector","false"],["cmnnrunads","true"],["isAdblockEnable","false"],["canRunAds","true"],["cwAdblockDisabled1","true"],["cwAdblockDisabled2","true"],["adsbygoogle.loaded","true"],["VMG.Components.Adblock","false"],["detect","undefined"],["google_jobrunner","noopFunc"],["isAdBlockActive","false"],["adBlockerDetected","false"],["google_ad_block","false"],["googlefc","null"],["adblock","false"],["adv_openx_oas_ads","true"],["icy_veins_blocked","false"],["cr","0"],["gn","true"],["window.google_ad_status","1"],["niceAdsCheck","true"],["google_ad_status","1"],["adning_no_adblock","true"],["jQuery.adblock","false"],["AdBlocker","false"],["mb.advertisingShouldBeEnabled","false"],["checkAdblockBait","noopFunc"],["MP.lib.adBlockEnabled","noopFunc"],["adBlockEnabled","false"],["adblockDetector","noopFunc"],["isAdBlockEnabled","false"],["pqdxwidthqt","false"],["googlefc.getAdBlockerStatus","noopFunc"],["adsOk","true"],["flatPM_adbDetect","noopFunc"],["XenForo.rellect.AdBlockDetector","noopFunc"],["ab","false"],["data.ad_free","true"],["use_adblock","false"],["adBlockDetected","false"],["sugabuAdsLoaded","true"],["SD_IS_BLOCKING","false"],["sd_adBlockDetector","{}"],["SD_BLOCKTHROUGH","true"],["ConcertAds","true"],["window.adsEnabled","true"],["_ABE","undefined"],["Adblock","false"],["foolish_script_is_here","noopFunc"],["showBanner600","true"],["window.canRunAds","true"],["ab.isTrig","false"],["adsbygoogle.push.length","1"],["_ads","true"],["__tnt.advertisements","noopFunc"],["advanced_ads_pro.adblocker_active","false"],["ads","true"],["AdBlockSELECTOR","undefined"],["Object.prototype.adPlayerId",""],["QiyiPlayerProphetData.a.data","{}"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["aoAdBlockDetected","false"],["adBlockerReady","false"],["adFilters","undefined"],["Object.prototype.cABNoCheck","undefined"],["window.abc","false"],["__NUXT__.state.services.features.shoppingExtensionPopupArticle","undefined"],["openOverlaySignup","noopFunc"],["GEMG.ConversionModule","noopFunc"],["mainBottomBanner","noopFunc"],["app.enablePopup","false"],["wp_subscribe_popup","noopFunc"],["initExitIntent","noopFunc"],["window.Unauthorized2","undefined"],["window.PageBottomBanners.initUnauthBanner","noopFunc"],["_sharedData.is_whitelisted_crawl_bot","true"],["history.state","undefined"],["Notification.requestPermission","noopFunc"],["firebase.messaging","noopFunc"],["Object.prototype.PushSubscription",""],["PushSubscription","undefined"],["PushManager","undefined"],["navigator.geolocation","{}"],["arrJsConfig.enablePushNotification","0"],["smartech","noopFunc"],["show_dimissable_registration","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["document.onkeydown","trueFunc"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"]];

const hostnamesMap = new Map([["www.kinopoisk.ru",0],["rg.ru",[0,111]],["kufar.by",0],["24smi.org",1],["echo.msk.ru",[2,3,113]],["dzen.ru",4],["my.mail.ru",5],["sports.ru",6],["mlive.com",7],["thestreet.com",7],["oregonlive.com",7],["bringmethenews.com",7],["cbssports.com",[7,8]],["localnews8.com",7],["tempumail.com",7],["nbcsports.com",7],["touchtapplay.com",7],["realsport101.com",7],["gameskinny.com",7],["pcinvasion.com",7],["pc-builds.com",7],["svg.com",7],["syracuse.com",7],["allmovie.com",7],["racinggames.gg",7],["si.com",7],["ksdk.com",7],["slashgear.com",7],["sidereel.com",7],["primagames.com",7],["delmarvanow.com",7],["gfinityesports.com",7],["kooora.com",7],["realclearpolitics.com",7],["calculator-online.net",7],["givemesport.com",7],["reuters.com",7],["ranker.com",7],["milestomemories.com",7],["epicstream.com",7],["worldhistory.org",7],["radiozet.pl",7],["momtastic.com",7],["recordnet.com",7],["citizen-times.com",7],["tennessean.com",7],["clarionledger.com",7],["phillyburbs.com",7],["usatoday.com",[7,21]],["wrestlinginc.com",7],["videogamer.com",7],["motorbiscuit.com",7],["grandprix247.com",7],["familyminded.com",7],["xcalibrscans.com",7],["cbsnews.com",7],["finviz.com",7],["ign.com",7],["workandmoney.com",7],["today.com",7],["rottentomatoes.com",[7,169]],["walterfootball.com",7],["boredpanda.com",7],["cleveland.com",7],["scitechdaily.com",9],["thewindowsclub.com",9],["twitchmetrics.net",10],["tekniknot.com",11],["it-actual.ru",11],["triblive.com",12],["radarbox.com",13],["maxroll.gg",14],["cheatnetwork.eu",15],["crackwatcher.com",15],["animenewsnetwork.com",16],["posti.mail.ee",17],["inbox.lv",17],["workingdays.org",18],["stash.sussy.moe",19],["android.com.pl",20],["fosslinux.com",22],["nexusmods.com",23],["1001tracklists.com",25],["autogaleria.pl",26],["basicweb.ru",27],["brainly.com",28],["brighteon.com",29],["cda.pl",30],["chefkoch.de",31],["chip.de",32],["civicx.com",33],["comnuan.com",34],["corriere.it",35],["creatur.io",36],["drnasserelbatal.com",36],["file.fm",36],["files.fm",36],["gamehag.com",36],["onlinehashcrack.com",36],["scantrad.net",36],["timebucks.com",36],["uderent.com",36],["cx30-forum.de",[37,38]],["telefon-treff.de",[37,38]],["cyberpedia.su",39],["kukuo.tw",39],["studopedia.info",39],["infopedia.su",39],["studopedia.net",39],["studopedia.su",39],["studopedia.org",39],["studopedia.ru",39],["studopedia.com.ua",39],["lektsii.org",39],["mydocx.ru",39],["dallasobserver.com",40],["digilibraries.com",41],["dniwolne.eu",42],["jeshoots.com",42],["webcamtaxi.com",42],["doodlr.io",43],["evades.io",44],["everyeye.it",45],["foxnews.com",46],["gameblog.fr",47],["lapumia.org",47],["gazzetta.it",48],["icy-veins.com",49],["inoreader.com",[50,51]],["investing.com",52],["lowcygier.pl",53],["malaysiastock.biz",54],["marriedgames.com.br",55],["megagames.com",56],["metasrc.com",57],["meteoblue.com",58],["mgsm.pl",59],["minijuegos.com",60],["miniwebtool.com",61],["mrexcel.com",62],["nu.nl",63],["how-to-pc.info",64],["easy-learn-tech.info",64],["one-click-tutorials.info",64],["solvetube.site",64],["getintopc.com",64],["preguntandroid.com",65],["iteramos.com",65],["pyrogram.org",66],["qiwihelp.net",67],["r3owners.net",68],["remont-aud.net",69],["salon.com",[70,71]],["satelliteguys.us",72],["signupgenius.com",73],["ingles.com",[74,75,76]],["spanishdict.com",[74,75,76]],["starsandstripesfc.com",77],["polygon.com",77],["strangermeetup.com",[78,160]],["thec64community.online",79],["thehindu.com",80],["titulky.com",[81,82]],["ucoin.net",83],["venea.net",84],["vimm.net",85],["wikihow.com",86],["wvnews.com",87],["xgp.pl",88],["yorumbudur.com",89],["yusepjaelani.blogspot.com",90],["sports.iqiyi.com",91],["www.iqiyi.com",[92,93,94]],["theharborside.org",95],["fleetstar.com",95],["resources.harneys.com",95],["zeomega.com",95],["marketing.rsvpportal.com",95],["westernstatescat.com",95],["freedomiot.ai",95],["unifilabs.com",95],["weather.com",96],["m.rp5.ru",97],["m.rp5.by",97],["m.rp5.kz",97],["m.rp5.co.uk",97],["m.rp5.md",97],["rp5.ru",98],["rp5.ua",98],["rp5.by",98],["rp5.kz",98],["rp5.co.uk",98],["rp5.md",98],["hdrezka1qkpbx.org",99],["hdrezka320rtq.org",99],["rezka-ua.tv",99],["hdrezkabmmshq.org",99],["hdrezkafh28d9.org",99],["hdrezkasmakyy.org",99],["hdrezkafhs83u.org",99],["hdrezkahs920s.org",99],["hdrezka.in",99],["hdrezkat5ee2w.org",99],["hdrezka66yhfg.net",99],["hdrezka.rest",99],["hdrezkahf22hh.net",99],["hdrezkahdg24s.net",99],["hdrezkabbdh4d.net",99],["hdrezkajjfhr5.net",99],["27p6qp79zyr1.net",99],["hdrezka19139.org",99],["hdrezkap3g.org",99],["hdrezkapez.org",99],["hdrezkarty.org",99],["hdrezkacvb.org",99],["hdrezka.ag",99],["upivi.com",99],["hdrezka.me",99],["ikinopoisk.com",99],["kinopub.me",99],["3ivi.com",99],["rezkify.com",99],["bestofkinopoisk.com",99],["rezkery.com",99],["rezkily.com",99],["hdrezkaonline.com",99],["mrhdrezka.com",99],["hdrezka.sh",99],["livekinopoisk.com",99],["cokinopoisk.com",99],["hdrezka-ag.com",99],["hdrezka.club",99],["hdrezka.cm",99],["hdrezka.co",99],["hdrezka.name",99],["hdrezka.site",99],["hdrezka.today",99],["hdrezka.tv",99],["hdrezka.website",99],["hdrezkaag.net",99],["hdrezkayou.com",99],["instahdrezka.com",99],["freehdrezka.com",99],["rezka.ag",99],["tryhdrezka.com",99],["cnet.com",100],["edurev.in",101],["defenseone.com",102],["govexec.com",102],["nextgov.com",102],["route-fifty.com",102],["ktmmobile.com",103],["startech.com.bd",104],["onlinecourses.ooo",105],["juracademy.de",106],["vk.com",[107,108]],["instagram.com",109],["smocca.jp",110],["shiftdelete.net",111],["community.oneplus.com",111],["lnc.nc",111],["superfilmes.ph",111],["meduza.global.ssl.fastly.net",111],["meduza.io",111],["yenisafak.com",111],["offidocs.com",111],["onedio.com",111],["hpplus.jp",111],["fullfilmcibaba1.com",111],["joom.com",111],["nbc.com",111],["maximum.ru",111],["ch3plus.com",111],["dropmefiles.com",111],["reddit.com",111],["life.ru",111],["macwelt.de",112],["pcwelt.de",112],["itemsatis.com",114],["dailymail.co.uk",115],["auchan.ua",116],["quizangel.com",117],["binge.buzz",118],["magicvalley.com",119],["brutal.io",[20,232]],["impots.gouv.fr",120],["realcleardefense.com",121],["xclient.info",122],["bejson.com",122],["gardenista.com",123],["gearside.com",124],["nytimes.com",[125,126]],["tvtropes.org",127],["justtrucks.com.au",128],["cittadinanza.biz",129],["glistranieri.it",129],["viralinindia.net",[129,139]],["ideapod.com",[129,139]],["privivkainfo.ru",129],["awebstories.com",[129,219]],["ancient.eu",130],["intramed.net",47],["protest.eu",131],["northwestfirearms.com",132],["techkings.org",132],["spookshow.net",133],["fosshub.com",134],["pokemonforever.com",135],["carsguide.com.au",136],["humo.be",137],["apksecured.com",138],["intergate.info",138],["alphapolis.co.jp",[138,163]],["chronologia.pl",[138,163]],["reportergazeta.pl",[138,163,166]],["odiarioonline.com.br",[138,175]],["nordkorea-info.de",138],["geotips.net",[138,180]],["televisiongratishd.com",[138,175,185]],["noweconomy.live",138],["naaree.com",[138,175]],["cda-hd.cc",138],["hqq.to",[138,176,193]],["tv-tokyo.co.jp",138],["arti-definisi-pengertian.info",138],["studyadda.com",[138,247]],["webwereld.nl",140],["palemoon.org",141],["wheel-size.com",142],["aoezone.net",143],["radioony.fm",144],["mexiconewsdaily.com",145],["technologyreview.com",146],["bdcraft.net",147],["wired.co.uk",148],["gq-magazine.co.uk",148],["glamourmagazine.co.uk",148],["m.youtube.com",149],["music.youtube.com",149],["tv.youtube.com",149],["www.youtube.com",149],["youtubekids.com",149],["buienradar.nl",150],["watson.de",151],["clk.ink",152],["zerodot1.gitlab.io",[153,154]],["1009thecat.com",155],["1013katy.com",155],["1013themix.com",155],["1015jackfm.com",155],["1015khits.com",155],["1015thefox.com",155],["1017thebeach.com",155],["1017theteam.com",155],["1019hot.com",155],["1019online.com",155],["1019thekeg.com",155],["101thefox.net",155],["101wkqx.com",155],["1021nashicon.com",155],["1021thefox.com",155],["1023thewolf.com",155],["1025jackfm.com",155],["1027thevibe.com",155],["1029nashicon.com",155],["102thebear.com",155],["1031nowfm.com",155],["1031radiom.com",155],["1035memphis.com",155],["1035thegame.com",155],["1035wrbo.com",155],["1037nash.com",155],["1039bobfm.com",155],["1039wvbo.com",155],["1041wdlt.com",155],["1043thebridge.com",155],["1043thebridge.net",155],["1043thevibe.com",155],["1045thedan.com",155],["1045thezone.com",155],["1045wjjk.com",155],["1047krez.com",155],["1049nashicon.com",155],["1049thehits.com",155],["104thehawk.com",155],["1050talk.com",155],["1053classichits.com",155],["1053hotfm.com",155],["1053thebear.com",155],["1053thepoint.com",155],["1053thepoint.net",155],["1053wow.com",155],["1055kbuck.com",155],["1055thecat.com",155],["1057kokz.com",155],["1057nowfm.com",155],["1057thebear.com",155],["1057thex.com",155],["1057thexrocks.com",155],["1061theunderground.com",155],["1063spinfm.com",155],["1063thevibe.com",155],["1063wovo.com",155],["1065theticket.com",155],["1067thekrewe.com",155],["106x.com",155],["1070wnct.com",155],["1071bobfm.com",155],["1071thepeak.com",155],["1071thepoint.com",155],["1073wsjy.com",155],["1075nowfm.com",155],["1075thegame.com",155],["1077lakefm.com",155],["1077thebone.com",155],["1077theisland.com",155],["1079nashicon.com",155],["107countrypsk.com",155],["107nashicon.com",155],["1090kaay.com",155],["1220wkrs.com",155],["1230espnsports.com",155],["1230theteam.com",155],["1280wnam.com",155],["1290wlby.com",155],["1320thefan.com",155],["1340wmsa.com",155],["1430wcmy.com",155],["1450kven.com",155],["1480kyos.com",155],["1490wosh.com",155],["1510kga.com",155],["1590walg.com",155],["1620thezone.com",155],["1700thechamp.com",155],["2hoursmattpinfield.com",155],["600wrqx.com",155],["600wsom.com",155],["610knml.com",155],["630wpro.com",155],["640wxsm.com",155],["660wxqw.com",155],["680thefan.com",155],["770kkob.com",155],["790business.com",155],["790wpic.com",155],["810whb.com",155],["860kkat.com",155],["860utahsbigtalker.com",155],["900theticket.com",155],["921theticket.com",155],["923krst.com",155],["923thewolf.com",155],["925nashicon.com",155],["925thebear.com",155],["925thewolf.com",155],["927bobfm.com",155],["929peakfm.com",155],["929thewave.com",155],["929wbpm.com",155],["92kqrs.com",155],["92profm.com",155],["92qnashville.com",155],["931nashicon.com",155],["931thebeat.com",155],["933nashicon.com",155],["935nashfm.com",155],["935wrqn.com",155],["937nashicon.com",155],["937nowfm.com",155],["937themountain.com",155],["939northpoleradio.com",155],["939theville.com",155],["939xindy.com",155],["93q.com",155],["93wkct.com",155],["93x.com",155],["940wfaw.com",155],["941ksky.com",155],["941thebear.com",155],["941thehits.com",155],["945thedrive.com",155],["945thehawkradio.com",155],["947qdr.com",155],["947wls.com",155],["949kcmo.com",155],["949radiojondeek.com",155],["949starcountry.com",155],["949theoutlaw.com",155],["94rockradio.net",155],["951nashfm.com",155],["951kbby.com",155],["953hlf.com",155],["953thebeach.com",155],["953thescore.com",155],["955bobfm.com",155],["955glo.com",155],["955nashicon.com",155],["955thefan.com",155],["955thevibe.com",155],["957kboy.com",155],["957kpur.com",155],["957nashicon.com",155],["957thevibe.com",155],["957thewolfonline.com",155],["959therocket.com",155],["95sx.com",155],["95wiil.com",155],["95x.com",155],["961bbb.com",155],["961jamz.com",155],["961sox.com",155],["961wsox.com",155],["963nashicon.com",155],["963thezone.com",155],["963wdvd.com",155],["967shinefm.com",155],["969lacaliente.com",155],["969thewolf.com",155],["96key.com",155],["96kzel.com",155],["973eagle.com",155],["973nashfm.com",155],["975kabx.com",155],["975thevibe.com",155],["975wabd.com",155],["979nashfm.com",155],["979espnradio.com",155],["979nashicon.com",155],["979wvok.com",155],["979x.com",155],["97bht.com",155],["97rock.com",155],["980waav.com",155],["980wxlm.com",155],["981thebeat.com",155],["981themax.com",155],["981thevalley.com",155],["983nashicon.com",155],["983thekeg.com",155],["983vibe.com",155],["983wlcs.com",155],["985kissfm.net",155],["989magicfm.com",155],["989thebridge.com",155],["98theticket.com",155],["993kjoy.com",155],["995thejock.com",155],["995thewolf.com",155],["997cyk.com",155],["997cyk.org",155],["997kmjj.com",155],["997themix.com",155],["997wpro.com",155],["997wtn.com",155],["999thebuzz.com",155],["999thefoxrocks.com",155],["999thehawk.com",155],["99x.com",155],["kjmo.com",155],["nashfm100.com",155],["nashfm923krst.com",155],["nashfm1033.com",155],["nashfm1055.com",155],["nashfm929.com",155],["nashfm931.com",155],["nashfm941.com",155],["nashfm949.com",155],["nashfm981.com",155],["nashfmwisconsin.com",155],["nashicon989.com",155],["v100rocks.com",155],["albanymagic.com",155],["alice1077.com",155],["allthehitsb951.com",155],["alt1019.com",155],["alt1049albany.com",155],["alt2k.com",155],["alt923.com",155],["alt98.com",155],["am630.net",155],["amarillosrockstation.com",155],["americanpatriotmedia.com",155],["annarbors107one.com",155],["atlantasrockstation.com",155],["atlsportsx.com",155],["b106fm.com",155],["b1073.com",155],["b95.com",155],["b979.net",155],["b98.com",155],["b985slo.com",155],["b987.com",155],["bakersfieldespn.com",155],["bakersfieldespnsports.com",155],["beach985.com",155],["beachboogieandblues.com",155],["bear104.com",155],["big1013.com",155],["bigcheese1079.com",155],["bigcountry1073.com",155],["bigdawg985.com",155],["bigdog1067.com",155],["bigfrog101.com",155],["bigfroggy1053.com",155],["bigtalk1490.com",155],["blairgarner.com",155],["blazin1023.com",155],["blazin923.com",155],["bloomingtonhits.com",155],["bobfmspringfield.com",155],["bowlinggreensam.com",155],["bull973.com",155],["bxr.com",155],["caperadio1550.com",155],["catcountry.com",155],["catcountry96.com",155],["catcountryvermont.com",155],["cbssports1430.com",155],["cbssportserie.com",155],["cbssportsharrisburg.com",155],["cbssportsradio1430.com",155],["chicothunderheads.com",155],["christmas989.com",155],["ckrv.com",155],["classicfox.com",155],["classichits1033.com",155],["classichitsmy1059.com",155],["classichitswnyq.com",155],["classy100.com",155],["coast1013.com",155],["coast973.com",155],["country105fm.net",155],["countrycountdownusa.com",155],["countrylegends1059.com",155],["countrymi.com",155],["coyote1025.com",155],["cumulusdigital.com",155],["digitalsolutions201.com",155],["e93fm.com",155],["eagle97.com",155],["eagle993.com",155],["easy991.com",155],["ed.fm",155],["elizabethtownradio.com",155],["energy939indy.com",155],["espn1320columbia.com",155],["espn910.com",155],["espnhonolulu.com",155],["espnlouisville.com",155],["espnlv.com",155],["espnradio1280.com",155],["espnradio927.com",155],["espnradio941.com",155],["espnsyracuse.com",155],["espnur.com",155],["espnwestpalm.com",155],["espnwilmington.com",155],["fly92.com",155],["fly923.com",155],["fm102milwaukee.com",155],["fm102one.com",155],["fonzfm.com",155],["forevereaston.com",155],["forevermediayork.com",155],["fox969.com",155],["foxcincinnati.com",155],["foxsportsredding.com",155],["froggy1003.com",155],["froggy101fm.com",155],["froggy981.com",155],["froggy99.net",155],["froggycountry.net",155],["froggyland.com",155],["fuego1029.com",155],["fun1013.com",155],["fun969fm.com",155],["generations1023.com",155],["glory985.com",155],["go106.com",155],["goradioheartland.com",155],["gospel900.com",155],["gulf104.com",155],["heaven1460.com",155],["heaven983.com",155],["hitkicker997.com",155],["hitpage.com",155],["hits931fm.com",155],["hits96.com",155],["hits965.com",155],["hot1005.com",155],["hot100blono.com",155],["hot100nrv.com",155],["hot101.com",155],["hot102.net",155],["hot1033.com",155],["hot1039.com",155],["hot1047fm.com",155],["hot1057.com",155],["hot1063.com",155],["hot1067fm.com",155],["hot1067pa.com",155],["hot1077radio.com",155],["hot92and100.com",155],["hot933hits.com",155],["hot941.com",155],["hot967fm.com",155],["hvradionet.com",155],["i973hits.com",155],["ilovethehits.com",155],["indysmix.com",155],["jammin999fm.com",155],["jamz963.com",155],["jox2fm.com",155],["joxfm.com",155],["k100country.com",155],["k104online.com",155],["k105country.com",155],["k92radio.com",155],["k983.com",155],["kabc.com",155],["kaok.com",155],["kaperadio1550.com",155],["katm.com",155],["katt.com",155],["kbcy.com",155],["kber.com",155],["kboi.com",155],["kbul.com",155],["kbull93.com",155],["kcchiefsradio.com",155],["kcheradio.com",155],["kcmotalkradio.com",155],["kcmxam.com",155],["kennradio.com",155],["kernradio.com",155],["kesn1033.com",155],["key101fm.com",155],["kfru.com",155],["kftx.com",155],["kgfm.com",155],["kgfw.com",155],["kggo.com",155],["kgmo.com",155],["kgoradio.com",155],["khay.com",155],["khfm.com",155],["khfm.org",155],["khit1075.com",155],["khop.com",155],["khvl.com",155],["kiimfm.com",155],["kiss-1031.com",155],["kix1029.com",155],["kix106.com",155],["kix96.com",155],["kizn.com",155],["kjjy.com",155],["kjoy.com",155],["kkcy.com",155],["kkfm.com",155],["kkgb.com",155],["kkgl.com",155],["kkoh.com",155],["klif.com",155],["klik1240.com",155],["klin.com",155],["klur.com",155],["kmaj.com",155],["kmaj1440.com",155],["kmez1029.com",155],["kmjnow.com",155],["knbr.com",155],["knek.com",155],["kobfm.com",155],["kpla.com",155],["kpur107.com",155],["kqfc.com",155],["kqky.com",155],["kqms.com",155],["kqxy.com",155],["krbe.com",155],["krmd.com",155],["krny.com",155],["krrq.com",155],["krush925.com",155],["kruz1033.com",155],["ksam1017.com",155],["kscrhits.com",155],["kscs.com",155],["ksfo.com",155],["kshasta.com",155],["ksks.com",155],["ksmb.com",155],["ktcx.com",155],["ktik.com",155],["ktop1490.com",155],["ktucam.com",155],["kubaradio.com",155],["kubb.com",155],["kugn.com",155],["kuzz.com",155],["kuzzradio.com",155],["kvor.com",155],["kwin.com",155],["kwwr.com",155],["kxel.com",155],["kxzz1580am.com",155],["kyis.com",155],["kykz.com",155],["kzwafm.com",155],["la103.com",155],["laindomable.com",155],["laleync.com",155],["lanuevaomaha.com",155],["lite102.com",155],["literock105fm.com",155],["love105fm.com",155],["lvfoxsports.com",155],["magic1029fm.com",155],["magic1039fm.com",155],["magic1069.com",155],["magic1073.com",155],["magic1073fm.com",155],["magic93fm.com",155],["magic943fm.com",155],["magic979wtrg.com",155],["magic995abq.com",155],["majic97monroe.com",155],["majicspace.com",155],["maverick1023.com",155],["max94one.com",155],["maxrocks.net",155],["mega979.com",155],["mgeradio.com",155],["milwaukeesparty.com",155],["mix103.com",155],["mix1077albany.com",155],["mix965.net",155],["modernrock987.com",155],["montanassuperstation.com",155],["movin993.com",155],["muskegonnashicon.com",155],["my1059.com",155],["my961.com",155],["myblono.com",155],["mycolumbiabasin.com",155],["myfroggy95.com",155],["mykiss973.com",155],["mymagic106.com",155],["mymix1051.com",155],["mymix1061.com",155],["mymix961.com",155],["mystar98.com",155],["nashcountrydaily.com",155],["nashdetroit.com",155],["nashfm1007.com",155],["nashfm1011.com",155],["nashfm1017.com",155],["nashfm1025.com",155],["nashfm1027.com",155],["nashfm1061.com",155],["nashfm1065.com",155],["nashfm923.com",155],["nashfm937.com",155],["nashfm943.com",155],["nashfm951.com",155],["nashfm973.com",155],["nashfm991.com",155],["nashfmgreenbay.com",155],["nashfmsjo.com",155],["nashnightslive.net",155],["nashpensacola.com",155],["ncsportsradio.com",155],["nepasespnradio.com",155],["neuhoffmedia.com",155],["neuhoffmedialafayette.com",155],["newcountry963.com",155],["newsradio1029.com",155],["newsradio1440.com",155],["newsradioflorida.com",155],["newsradiokkob.com",155],["newsserver1.com",155],["newsserver2.com",155],["newsserver3.com",155],["newstalk1030.com",155],["newstalk1290koil.com",155],["newstalk730.com",155],["newstalk987.com",155],["newstalkwsba.com",155],["newswebradiocompany.net",155],["now937.com",155],["nrgmedia.com",155],["nrq.com",155],["og979.com",155],["okiecountry1017.com",155],["oldiesz104.com",155],["ottawaradio.net",155],["pensacolasjet.com",155],["peorias923.com",155],["picklefm.com",155],["pikefm.com",155],["planet1067.com",155],["pmbbroadcasting.com",155],["pmbradio.com",155],["power1021.com",155],["power103.com",155],["power1057.com",155],["power1069fm.com",155],["power923.com",155],["power94radio.com",155],["power955.com",155],["powerhits95.com",155],["powerslc.com",155],["praise1025fm.com",155],["purerock96.com",155],["q1005.com",155],["q1031fm.com",155],["q105.fm",155],["q1055.com",155],["q1061.com",155],["q106dot5.com",155],["q973radio.com",155],["q97country.com",155],["q98fm.com",155],["q997atlanta.com",155],["q99fm.com",155],["radio1039ny.com",155],["radiorockriver.com",155],["radiowoodstock.com",155],["realcountry1280whvr.com",155],["realcountryhv.com",155],["red1031.com",155],["red945.com",155],["rewind1019.com",155],["rickandsasha.com",155],["rock101.net",155],["rock1015.com",155],["rock103albany.com",155],["rock103rocks.com",155],["rock106.net",155],["rock107fm.com",155],["rock108.com",155],["rock945vt.com",155],["rockdaily.com",155],["rocknews.com",155],["rockofsavannah.com",155],["rockofsavannah.net",155],["softrock941.com",155],["southernillinoisnow.com",155],["southernsportstoday.com",155],["sportsanimal920.com",155],["sportsanimalabq.com",155],["sportscapitoldc.com",155],["sportshubtriad.com",155],["sportsradio1270.com",155],["sportsradio1440.com",155],["sportsradio1560.com",155],["sportsradio590am.com",155],["sportsradio740.com",155],["sportsradio967.com",155],["sportsradio970.com",155],["sportsradiobeaumont.com",155],["sportsradioberks.com",155],["sportsradiownml.com",155],["star98.net",155],["starfm1023.com",155],["starsplash.com",155],["stevegormanrocks.com",155],["sunny1031.com",155],["sunny1069fm.com",155],["sunny923.com",155],["sunny983.com",155],["sunnymuskegon.com",155],["supertalk1570.com",155],["sweet985.com",155],["talk104fm.com",155],["talk995.com",155],["talkradio1007.com",155],["tbhpod.com",155],["teammyrtlebeach.com",155],["test107.com",155],["thebear925.com",155],["thebigjab.com",155],["thebigstation93blx.com",155],["theblairgarnershow.com",155],["theconclave.com",155],["thefan1075.com",155],["thefanfm.com",155],["thegame541.com",155],["thehippo.com",155],["thehot1039.com",155],["thenewhotfm.com",155],["thenewpulsefm.com",155],["thepointontheweb.com",155],["therebelrocks.com",155],["therocket951.com",155],["therockstationz93.com",155],["thescore1260.com",155],["thesportsanimal.com",155],["theticket.com",155],["theticket1007.com",155],["theticket102.com",155],["theticket1590.com",155],["theticketmi.com",155],["thetybentlishow.com",155],["thevalley981.com",155],["thewolf1051.com",155],["thewolf951.com",155],["thisisqmusic.com",155],["thunder1073.com",155],["triadsports.com",155],["tuligaradio.com",155],["umpsports.com",155],["v100fm.com",155],["v1033.com",155],["vermilioncountyfirst.com",155],["vermillioncountyfirst.com",155],["w3dcountry.com",155],["w4country.com",155],["wa1a.com",155],["wabcradio.com",155],["walk975.com",155],["walkradio.com",155],["warm1033.com",155],["warm98.com",155],["waysam.com",155],["wbap.com",155],["wbbw.com",155],["wbmq.net",155],["wbnq.com",155],["wbpm929.com",155],["wbpmfm.com",155],["wbwn.com",155],["wcbm.com",155],["wceiradio.com",155],["wcfx.com",155],["wchv.com",155],["wclg.com",155],["wcoapensacola.com",155],["wcpqfm.com",155],["wcpt820.com",155],["wcpt820.net",155],["wcpt820am.com",155],["wcpt820am.net",155],["wcptam.com",155],["wcptam.net",155],["wcptamfm.com",155],["wcptamfm.net",155],["wcptamfm.org",155],["wcpyfm.com",155],["wctk.com",155],["wddoam.com",155],["wden.com",155],["wdml.com",155],["wdst.com",155],["wdst.org",155],["wdzz.com",155],["wedg.com",155],["werkfm.net",155],["werkradio.com",155],["wfasam.com",155],["wfav951.com",155],["wfmd.com",155],["wfms.com",155],["wfnc640am.com",155],["wfre.com",155],["wftw.com",155],["wgh1310.com",155],["wghsolidgold.com",155],["wglx.com",155],["wgni.com",155],["wgow.com",155],["wgowam.com",155],["wgrr.com",155],["whdg.com",155],["wheelz1045.com",155],["whli.com",155],["whrpfm.com",155],["whtt.com",155],["whud.com",155],["wild1029.com",155],["wild1049hd.com",155],["wild1061.com",155],["wild993fm.com",155],["wildcatsradio1290.com",155],["wink104.com",155],["winxfm.com",155],["wiog.com",155],["wiov.com",155],["wiov985.com",155],["wivk.com",155],["wivr1017.com",155],["wizn.com",155],["wjbc.com",155],["wjcw.com",155],["wjez.com",155],["wjjr.net",155],["wjoxam.com",155],["wjr.com",155],["wkav.com",155],["wkbethepoint.com",155],["wkga975.com",155],["wkhx.com",155],["wkmoradio.com",155],["wkol.com",155],["wkrs.com",155],["wkrufm.com",155],["wksm.com",155],["wkydeportes.com",155],["wlaq1410.com",155],["wlav.com",155],["wlbc.com",155],["wlevradio.com",155],["wlkwradio.com",155],["wlok.com",155],["wlsam.com",155],["wlum.com",155],["wlup.com",155],["wlwi.com",155],["wmac-am.com",155],["wmal.com",155],["wmqa.com",155],["wncv.com",155],["wogb.fm",155],["woko.com",155],["womg.com",155],["woodstockbroadcasting.com",155],["woodstockcommunication.com",155],["woodstockradio.net",155],["woodstocktv.net",155],["wovo1063.com",155],["wovofm.com",155],["wqut.com",155],["wqvealbany.com",155],["wrganews.com",155],["wrgm.com",155],["wrlo.com",155],["wrr101.com",155],["wrul.com",155],["wsba910.com",155],["wsfl.com",155],["wsjssports.com",155],["wskz.com",155],["wsyb1380am.com",155],["wtka.com",155],["wtma.com",155],["wtrxsports.com",155],["wttlradio.com",155],["wuuqradio.com",155],["wvel.com",155],["wvli927.com",155],["wvlkam.com",155],["wvnn.com",155],["wwck.com",155],["wwki.com",155],["wwqq101.com",155],["wxfx.com",155],["wxkr.com",155],["wxpkfm.com",155],["wynn1063.com",155],["wzpl.com",155],["wzyp.com",155],["wzzl.com",155],["x1051kc.com",155],["x95radio.com",155],["xs961.com",155],["xtrasports1300.com",155],["y-103.com",155],["y101hits.com",155],["y102montgomery.com",155],["y1065.com",155],["yesfm.net",155],["z1023online.com",155],["z1029.com",155],["z1075.com",155],["z937.com",155],["z93jamz.com",155],["z96.com",155],["z971.com",155],["zone1150.com",155],["zrock103.com",155],["zrockfm.com",155],["windows101tricks.com",156],["waaw.tv",157],["hqq.tv",[157,158]],["fontsfree.pro",159],["adslayuda.com",161],["avdelphi.com",162],["ds2play.com",164],["ds2video.com",164],["d0o0d.com",164],["vidembed.me",164],["mzzcloud.life",164],["videobot.stream",164],["justswallows.net",164],["onscreensvideo.com",164],["katerionews.com",164],["telenovelas-turcas.com.es",164],["kmo.to",164],["jeniusplay.com",[164,233]],["rsadnetworkinfo.com",[164,175]],["rsinsuranceinfo.com",[164,175]],["rsfinanceinfo.com",[164,175]],["rsgamer.app",[164,175]],["rssoftwareinfo.com",[164,175]],["rshostinginfo.com",[164,175]],["rseducationinfo.com",[164,175]],["4x4earth.com",72],["jootc.com",[165,166]],["photobank.mainichi.co.jp",167],["tbs.co.jp",168],["sovetromantica.com",170],["longecity.org",171],["magnet-novels.com",172],["torrentlawyer.com",[172,177,182,183]],["fruit01.xyz",173],["lyricstranslate.com",174],["hardcoregames.ca",175],["allsmo.com",175],["themosvagas.com.br",175],["urbharat.xyz",175],["sportnews.to",[175,185]],["2embed.ru",176],["sbasian.pro",176],["miraculous.to",[176,196]],["vtplayer.net",176],["webnovel.com",176],["pepperlive.info",176],["unbiasedsenseevent.com",176],["maxt.church",176],["cool-etv.net",176],["vgembed.com",[176,227]],["photopea.com",176],["szkolawohyn.pl",177],["virpe.cc",177],["gmarket.co.kr",[177,183]],["paesifantasma.it",178],["talpo.it",178],["quora.com",179],["gmx.net",181],["hoca4u.com",183],["youmath.it",184],["renditepassive.net",[186,187,188,189,190]],["360doc.com",191],["logonews.cn",192],["thetodaypost.com",[193,198,202]],["cloudcomputingtopics.net",193],["0123movies.ch",[193,198,202,231]],["epn.bz",69],["affbank.com",36],["gardenia.net",[194,195]],["novelpia.com",[197,198]],["blueraindrops.com",200],["animecruzers.com",201],["descargatepelis.com",202],["news.ntv.co.jp",202],["bestjavporn.com",203],["mm9841.cc",203],["ggwash.org",[204,205]],["watch.lonelil.com",207],["cinegrabber.com",208],["layarkacaxxi.icu",209],["readawrite.com",[210,211,212,213,214,215,216]],["dropgalaxy.com",217],["morosedog.gitlab.io",218],["indianhealthyrecipes.com",220],["tarnkappe.info",221],["heavyfetish.com",222],["joysound.com",[223,224,225]],["colors.sonicthehedgehog.com",[225,228]],["leakedzone.com",229],["mehoathinh2.com",230],["powerline.io",232],["bestx.stream",234],["moviesapi.club",234],["watchx.top",234],["enduro-mtb.com",235],["kukaj.io",236],["animesaga.in",237],["animesuge.to",238],["aniwave.to",238],["hdtoday.so",238],["hurawatch.bz",238],["lazyadmin.nl",7],["thejakartapost.com",239],["fullxh.com",240],["megaxh.com",240],["unlockxh4.com",240],["xhadult2.com",240],["xhadult3.com",240],["xhadult4.com",240],["xhadult5.com",240],["xhamster46.com",240],["xhday.com",240],["xhday1.com",240],["xhmoon5.com",240],["xhplanet1.com",240],["xhplanet2.com",240],["xhreal2.com",240],["xhreal3.com",240],["xhtab2.com",240],["xhvictory.com",240],["xhwebsite.com",240],["xhwebsite2.com",240],["xhwide1.com",240],["xhwide8.com",240],["marinetraffic.com",241],["ymovies.vip",242],["aniwatch.to",242],["megacloud.tv",242],["netuplayer.top",242],["stbnetu.xyz",242],["thotsbay.tv",242],["androidpolice.com",243],["makeuseof.com",243],["movieweb.com",243],["xda-developers.com",243],["thegamer.com",243],["cbr.com",243],["gamerant.com",243],["screenrant.com",243],["howtogeek.com",243],["thethings.com",243],["simpleflying.com",243],["dualshockers.com",243],["digminecraft.com",244],["programming-link.info",64],["tv.bdix.app",245],["hitokageproduction.com",246],["dngz.net",248]]);

const entitiesMap = new Map([["18comic",24],["earnload",152],["hindipix",[157,158]],["doods",164],["videovard",164],["123movies",176],["brainly",199],["ask4movie",[206,207]],["bluemediafile",226],["anix",238],["vidplay",238],["hamsterix",240],["xhamster",240],["xhamster1",240],["xhamster10",240],["xhamster11",240],["xhamster12",240],["xhamster13",240],["xhamster14",240],["xhamster15",240],["xhamster16",240],["xhamster17",240],["xhamster18",240],["xhamster19",240],["xhamster20",240],["xhamster2",240],["xhamster3",240],["xhamster4",240],["xhamster5",240],["xhamster7",240],["xhamster8",240],["netu",242]]);

const exceptionsMap = new Map([["m.rp5.ru",[98]],["m.rp5.by",[98]],["m.rp5.kz",[98]],["m.rp5.co.uk",[98]],["m.rp5.md",[98]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
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
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
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
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
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
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
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
        setConstant(chain, rawValue);
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

function validateConstantFn(trusted, raw) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
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
