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

const argsList = [["hasAdblock","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["bAdBlocker","false"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["mousehandler","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"]];

const hostnamesMap = new Map([["brutal.io",[0,121]],["impots.gouv.fr",1],["realcleardefense.com",2],["xclient.info",3],["bejson.com",3],["gardenista.com",4],["gearside.com",5],["nytimes.com",[6,7]],["tvtropes.org",8],["justtrucks.com.au",9],["cittadinanza.biz",10],["glistranieri.it",10],["viralinindia.net",[10,21]],["ideapod.com",[10,21]],["privivkainfo.ru",10],["awebstories.com",[10,108]],["ancient.eu",11],["intramed.net",12],["protest.eu",13],["northwestfirearms.com",14],["techkings.org",14],["spookshow.net",15],["fosshub.com",16],["pokemonforever.com",17],["carsguide.com.au",18],["humo.be",19],["apksecured.com",20],["intergate.info",20],["alphapolis.co.jp",[20,47]],["chronologia.pl",[20,47]],["reportergazeta.pl",[20,47,51]],["odiarioonline.com.br",[20,60]],["nordkorea-info.de",20],["geotips.net",[20,65]],["televisiongratishd.com",[20,60,70]],["noweconomy.live",20],["naaree.com",[20,60]],["cda-hd.cc",20],["hqq.to",[20,61,79]],["tv-tokyo.co.jp",20],["arti-definisi-pengertian.info",20],["studyadda.com",[20,140]],["webwereld.nl",22],["palemoon.org",23],["wheel-size.com",24],["aoezone.net",25],["radioony.fm",26],["mexiconewsdaily.com",27],["technologyreview.com",28],["bdcraft.net",29],["instagram.com",30],["wired.co.uk",31],["gq-magazine.co.uk",31],["glamourmagazine.co.uk",31],["m.youtube.com",32],["music.youtube.com",32],["tv.youtube.com",32],["www.youtube.com",32],["youtubekids.com",32],["buienradar.nl",33],["watson.de",34],["clk.ink",35],["zerodot1.gitlab.io",[36,37]],["1009thecat.com",38],["1013katy.com",38],["1013themix.com",38],["1015jackfm.com",38],["1015khits.com",38],["1015thefox.com",38],["1017thebeach.com",38],["1017theteam.com",38],["1019hot.com",38],["1019online.com",38],["1019thekeg.com",38],["101thefox.net",38],["101wkqx.com",38],["1021nashicon.com",38],["1021thefox.com",38],["1023thewolf.com",38],["1025jackfm.com",38],["1027thevibe.com",38],["1029nashicon.com",38],["102thebear.com",38],["1031nowfm.com",38],["1031radiom.com",38],["1035memphis.com",38],["1035thegame.com",38],["1035wrbo.com",38],["1037nash.com",38],["1039bobfm.com",38],["1039wvbo.com",38],["1041wdlt.com",38],["1043thebridge.com",38],["1043thebridge.net",38],["1043thevibe.com",38],["1045thedan.com",38],["1045thezone.com",38],["1045wjjk.com",38],["1047krez.com",38],["1049nashicon.com",38],["1049thehits.com",38],["104thehawk.com",38],["1050talk.com",38],["1053classichits.com",38],["1053hotfm.com",38],["1053thebear.com",38],["1053thepoint.com",38],["1053thepoint.net",38],["1053wow.com",38],["1055kbuck.com",38],["1055thecat.com",38],["1057kokz.com",38],["1057nowfm.com",38],["1057thebear.com",38],["1057thex.com",38],["1057thexrocks.com",38],["1061theunderground.com",38],["1063spinfm.com",38],["1063thevibe.com",38],["1063wovo.com",38],["1065theticket.com",38],["1067thekrewe.com",38],["106x.com",38],["1070wnct.com",38],["1071bobfm.com",38],["1071thepeak.com",38],["1071thepoint.com",38],["1073wsjy.com",38],["1075nowfm.com",38],["1075thegame.com",38],["1077lakefm.com",38],["1077thebone.com",38],["1077theisland.com",38],["1079nashicon.com",38],["107countrypsk.com",38],["107nashicon.com",38],["1090kaay.com",38],["1220wkrs.com",38],["1230espnsports.com",38],["1230theteam.com",38],["1280wnam.com",38],["1290wlby.com",38],["1320thefan.com",38],["1340wmsa.com",38],["1430wcmy.com",38],["1450kven.com",38],["1480kyos.com",38],["1490wosh.com",38],["1510kga.com",38],["1590walg.com",38],["1620thezone.com",38],["1700thechamp.com",38],["2hoursmattpinfield.com",38],["600wrqx.com",38],["600wsom.com",38],["610knml.com",38],["630wpro.com",38],["640wxsm.com",38],["660wxqw.com",38],["680thefan.com",38],["770kkob.com",38],["790business.com",38],["790wpic.com",38],["810whb.com",38],["860kkat.com",38],["860utahsbigtalker.com",38],["900theticket.com",38],["921theticket.com",38],["923krst.com",38],["923thewolf.com",38],["925nashicon.com",38],["925thebear.com",38],["925thewolf.com",38],["927bobfm.com",38],["929peakfm.com",38],["929thewave.com",38],["929wbpm.com",38],["92kqrs.com",38],["92profm.com",38],["92qnashville.com",38],["931nashicon.com",38],["931thebeat.com",38],["933nashicon.com",38],["935nashfm.com",38],["935wrqn.com",38],["937nashicon.com",38],["937nowfm.com",38],["937themountain.com",38],["939northpoleradio.com",38],["939theville.com",38],["939xindy.com",38],["93q.com",38],["93wkct.com",38],["93x.com",38],["940wfaw.com",38],["941ksky.com",38],["941thebear.com",38],["941thehits.com",38],["945thedrive.com",38],["945thehawkradio.com",38],["947qdr.com",38],["947wls.com",38],["949kcmo.com",38],["949radiojondeek.com",38],["949starcountry.com",38],["949theoutlaw.com",38],["94rockradio.net",38],["951nashfm.com",38],["951kbby.com",38],["953hlf.com",38],["953thebeach.com",38],["953thescore.com",38],["955bobfm.com",38],["955glo.com",38],["955nashicon.com",38],["955thefan.com",38],["955thevibe.com",38],["957kboy.com",38],["957kpur.com",38],["957nashicon.com",38],["957thevibe.com",38],["957thewolfonline.com",38],["959therocket.com",38],["95sx.com",38],["95wiil.com",38],["95x.com",38],["961bbb.com",38],["961jamz.com",38],["961sox.com",38],["961wsox.com",38],["963nashicon.com",38],["963thezone.com",38],["963wdvd.com",38],["967shinefm.com",38],["969lacaliente.com",38],["969thewolf.com",38],["96key.com",38],["96kzel.com",38],["973eagle.com",38],["973nashfm.com",38],["975kabx.com",38],["975thevibe.com",38],["975wabd.com",38],["979nashfm.com",38],["979espnradio.com",38],["979nashicon.com",38],["979wvok.com",38],["979x.com",38],["97bht.com",38],["97rock.com",38],["980waav.com",38],["980wxlm.com",38],["981thebeat.com",38],["981themax.com",38],["981thevalley.com",38],["983nashicon.com",38],["983thekeg.com",38],["983vibe.com",38],["983wlcs.com",38],["985kissfm.net",38],["989magicfm.com",38],["989thebridge.com",38],["98theticket.com",38],["993kjoy.com",38],["995thejock.com",38],["995thewolf.com",38],["997cyk.com",38],["997cyk.org",38],["997kmjj.com",38],["997themix.com",38],["997wpro.com",38],["997wtn.com",38],["999thebuzz.com",38],["999thefoxrocks.com",38],["999thehawk.com",38],["99x.com",38],["kjmo.com",38],["nashfm100.com",38],["nashfm923krst.com",38],["nashfm1033.com",38],["nashfm1055.com",38],["nashfm929.com",38],["nashfm931.com",38],["nashfm941.com",38],["nashfm949.com",38],["nashfm981.com",38],["nashfmwisconsin.com",38],["nashicon989.com",38],["v100rocks.com",38],["albanymagic.com",38],["alice1077.com",38],["allthehitsb951.com",38],["alt1019.com",38],["alt1049albany.com",38],["alt2k.com",38],["alt923.com",38],["alt98.com",38],["am630.net",38],["amarillosrockstation.com",38],["americanpatriotmedia.com",38],["annarbors107one.com",38],["atlantasrockstation.com",38],["atlsportsx.com",38],["b106fm.com",38],["b1073.com",38],["b95.com",38],["b979.net",38],["b98.com",38],["b985slo.com",38],["b987.com",38],["bakersfieldespn.com",38],["bakersfieldespnsports.com",38],["beach985.com",38],["beachboogieandblues.com",38],["bear104.com",38],["big1013.com",38],["bigcheese1079.com",38],["bigcountry1073.com",38],["bigdawg985.com",38],["bigdog1067.com",38],["bigfrog101.com",38],["bigfroggy1053.com",38],["bigtalk1490.com",38],["blairgarner.com",38],["blazin1023.com",38],["blazin923.com",38],["bloomingtonhits.com",38],["bobfmspringfield.com",38],["bowlinggreensam.com",38],["bull973.com",38],["bxr.com",38],["caperadio1550.com",38],["catcountry.com",38],["catcountry96.com",38],["catcountryvermont.com",38],["cbssports1430.com",38],["cbssportserie.com",38],["cbssportsharrisburg.com",38],["cbssportsradio1430.com",38],["chicothunderheads.com",38],["christmas989.com",38],["ckrv.com",38],["classicfox.com",38],["classichits1033.com",38],["classichitsmy1059.com",38],["classichitswnyq.com",38],["classy100.com",38],["coast1013.com",38],["coast973.com",38],["country105fm.net",38],["countrycountdownusa.com",38],["countrylegends1059.com",38],["countrymi.com",38],["coyote1025.com",38],["cumulusdigital.com",38],["digitalsolutions201.com",38],["e93fm.com",38],["eagle97.com",38],["eagle993.com",38],["easy991.com",38],["ed.fm",38],["elizabethtownradio.com",38],["energy939indy.com",38],["espn1320columbia.com",38],["espn910.com",38],["espnhonolulu.com",38],["espnlouisville.com",38],["espnlv.com",38],["espnradio1280.com",38],["espnradio927.com",38],["espnradio941.com",38],["espnsyracuse.com",38],["espnur.com",38],["espnwestpalm.com",38],["espnwilmington.com",38],["fly92.com",38],["fly923.com",38],["fm102milwaukee.com",38],["fm102one.com",38],["fonzfm.com",38],["forevereaston.com",38],["forevermediayork.com",38],["fox969.com",38],["foxcincinnati.com",38],["foxsportsredding.com",38],["froggy1003.com",38],["froggy101fm.com",38],["froggy981.com",38],["froggy99.net",38],["froggycountry.net",38],["froggyland.com",38],["fuego1029.com",38],["fun1013.com",38],["fun969fm.com",38],["generations1023.com",38],["glory985.com",38],["go106.com",38],["goradioheartland.com",38],["gospel900.com",38],["gulf104.com",38],["heaven1460.com",38],["heaven983.com",38],["hitkicker997.com",38],["hitpage.com",38],["hits931fm.com",38],["hits96.com",38],["hits965.com",38],["hot1005.com",38],["hot100blono.com",38],["hot100nrv.com",38],["hot101.com",38],["hot102.net",38],["hot1033.com",38],["hot1039.com",38],["hot1047fm.com",38],["hot1057.com",38],["hot1063.com",38],["hot1067fm.com",38],["hot1067pa.com",38],["hot1077radio.com",38],["hot92and100.com",38],["hot933hits.com",38],["hot941.com",38],["hot967fm.com",38],["hvradionet.com",38],["i973hits.com",38],["ilovethehits.com",38],["indysmix.com",38],["jammin999fm.com",38],["jamz963.com",38],["jox2fm.com",38],["joxfm.com",38],["k100country.com",38],["k104online.com",38],["k105country.com",38],["k92radio.com",38],["k983.com",38],["kabc.com",38],["kaok.com",38],["kaperadio1550.com",38],["katm.com",38],["katt.com",38],["kbcy.com",38],["kber.com",38],["kboi.com",38],["kbul.com",38],["kbull93.com",38],["kcchiefsradio.com",38],["kcheradio.com",38],["kcmotalkradio.com",38],["kcmxam.com",38],["kennradio.com",38],["kernradio.com",38],["kesn1033.com",38],["key101fm.com",38],["kfru.com",38],["kftx.com",38],["kgfm.com",38],["kgfw.com",38],["kggo.com",38],["kgmo.com",38],["kgoradio.com",38],["khay.com",38],["khfm.com",38],["khfm.org",38],["khit1075.com",38],["khop.com",38],["khvl.com",38],["kiimfm.com",38],["kiss-1031.com",38],["kix1029.com",38],["kix106.com",38],["kix96.com",38],["kizn.com",38],["kjjy.com",38],["kjoy.com",38],["kkcy.com",38],["kkfm.com",38],["kkgb.com",38],["kkgl.com",38],["kkoh.com",38],["klif.com",38],["klik1240.com",38],["klin.com",38],["klur.com",38],["kmaj.com",38],["kmaj1440.com",38],["kmez1029.com",38],["kmjnow.com",38],["knbr.com",38],["knek.com",38],["kobfm.com",38],["kpla.com",38],["kpur107.com",38],["kqfc.com",38],["kqky.com",38],["kqms.com",38],["kqxy.com",38],["krbe.com",38],["krmd.com",38],["krny.com",38],["krrq.com",38],["krush925.com",38],["kruz1033.com",38],["ksam1017.com",38],["kscrhits.com",38],["kscs.com",38],["ksfo.com",38],["kshasta.com",38],["ksks.com",38],["ksmb.com",38],["ktcx.com",38],["ktik.com",38],["ktop1490.com",38],["ktucam.com",38],["kubaradio.com",38],["kubb.com",38],["kugn.com",38],["kuzz.com",38],["kuzzradio.com",38],["kvor.com",38],["kwin.com",38],["kwwr.com",38],["kxel.com",38],["kxzz1580am.com",38],["kyis.com",38],["kykz.com",38],["kzwafm.com",38],["la103.com",38],["laindomable.com",38],["laleync.com",38],["lanuevaomaha.com",38],["lite102.com",38],["literock105fm.com",38],["love105fm.com",38],["lvfoxsports.com",38],["magic1029fm.com",38],["magic1039fm.com",38],["magic1069.com",38],["magic1073.com",38],["magic1073fm.com",38],["magic93fm.com",38],["magic943fm.com",38],["magic979wtrg.com",38],["magic995abq.com",38],["majic97monroe.com",38],["majicspace.com",38],["maverick1023.com",38],["max94one.com",38],["maxrocks.net",38],["mega979.com",38],["mgeradio.com",38],["milwaukeesparty.com",38],["mix103.com",38],["mix1077albany.com",38],["mix965.net",38],["modernrock987.com",38],["montanassuperstation.com",38],["movin993.com",38],["muskegonnashicon.com",38],["my1059.com",38],["my961.com",38],["myblono.com",38],["mycolumbiabasin.com",38],["myfroggy95.com",38],["mykiss973.com",38],["mymagic106.com",38],["mymix1051.com",38],["mymix1061.com",38],["mymix961.com",38],["mystar98.com",38],["nashcountrydaily.com",38],["nashdetroit.com",38],["nashfm1007.com",38],["nashfm1011.com",38],["nashfm1017.com",38],["nashfm1025.com",38],["nashfm1027.com",38],["nashfm1061.com",38],["nashfm1065.com",38],["nashfm923.com",38],["nashfm937.com",38],["nashfm943.com",38],["nashfm951.com",38],["nashfm973.com",38],["nashfm991.com",38],["nashfmgreenbay.com",38],["nashfmsjo.com",38],["nashnightslive.net",38],["nashpensacola.com",38],["ncsportsradio.com",38],["nepasespnradio.com",38],["neuhoffmedia.com",38],["neuhoffmedialafayette.com",38],["newcountry963.com",38],["newsradio1029.com",38],["newsradio1440.com",38],["newsradioflorida.com",38],["newsradiokkob.com",38],["newsserver1.com",38],["newsserver2.com",38],["newsserver3.com",38],["newstalk1030.com",38],["newstalk1290koil.com",38],["newstalk730.com",38],["newstalk987.com",38],["newstalkwsba.com",38],["newswebradiocompany.net",38],["now937.com",38],["nrgmedia.com",38],["nrq.com",38],["og979.com",38],["okiecountry1017.com",38],["oldiesz104.com",38],["ottawaradio.net",38],["pensacolasjet.com",38],["peorias923.com",38],["picklefm.com",38],["pikefm.com",38],["planet1067.com",38],["pmbbroadcasting.com",38],["pmbradio.com",38],["power1021.com",38],["power103.com",38],["power1057.com",38],["power1069fm.com",38],["power923.com",38],["power94radio.com",38],["power955.com",38],["powerhits95.com",38],["powerslc.com",38],["praise1025fm.com",38],["purerock96.com",38],["q1005.com",38],["q1031fm.com",38],["q105.fm",38],["q1055.com",38],["q1061.com",38],["q106dot5.com",38],["q973radio.com",38],["q97country.com",38],["q98fm.com",38],["q997atlanta.com",38],["q99fm.com",38],["radio1039ny.com",38],["radiorockriver.com",38],["radiowoodstock.com",38],["realcountry1280whvr.com",38],["realcountryhv.com",38],["red1031.com",38],["red945.com",38],["rewind1019.com",38],["rickandsasha.com",38],["rock101.net",38],["rock1015.com",38],["rock103albany.com",38],["rock103rocks.com",38],["rock106.net",38],["rock107fm.com",38],["rock108.com",38],["rock945vt.com",38],["rockdaily.com",38],["rocknews.com",38],["rockofsavannah.com",38],["rockofsavannah.net",38],["softrock941.com",38],["southernillinoisnow.com",38],["southernsportstoday.com",38],["sportsanimal920.com",38],["sportsanimalabq.com",38],["sportscapitoldc.com",38],["sportshubtriad.com",38],["sportsradio1270.com",38],["sportsradio1440.com",38],["sportsradio1560.com",38],["sportsradio590am.com",38],["sportsradio740.com",38],["sportsradio967.com",38],["sportsradio970.com",38],["sportsradiobeaumont.com",38],["sportsradioberks.com",38],["sportsradiownml.com",38],["star98.net",38],["starfm1023.com",38],["starsplash.com",38],["stevegormanrocks.com",38],["sunny1031.com",38],["sunny1069fm.com",38],["sunny923.com",38],["sunny983.com",38],["sunnymuskegon.com",38],["supertalk1570.com",38],["sweet985.com",38],["talk104fm.com",38],["talk995.com",38],["talkradio1007.com",38],["tbhpod.com",38],["teammyrtlebeach.com",38],["test107.com",38],["thebear925.com",38],["thebigjab.com",38],["thebigstation93blx.com",38],["theblairgarnershow.com",38],["theconclave.com",38],["thefan1075.com",38],["thefanfm.com",38],["thegame541.com",38],["thehippo.com",38],["thehot1039.com",38],["thenewhotfm.com",38],["thenewpulsefm.com",38],["thepointontheweb.com",38],["therebelrocks.com",38],["therocket951.com",38],["therockstationz93.com",38],["thescore1260.com",38],["thesportsanimal.com",38],["theticket.com",38],["theticket1007.com",38],["theticket102.com",38],["theticket1590.com",38],["theticketmi.com",38],["thetybentlishow.com",38],["thevalley981.com",38],["thewolf1051.com",38],["thewolf951.com",38],["thisisqmusic.com",38],["thunder1073.com",38],["triadsports.com",38],["tuligaradio.com",38],["umpsports.com",38],["v100fm.com",38],["v1033.com",38],["vermilioncountyfirst.com",38],["vermillioncountyfirst.com",38],["w3dcountry.com",38],["w4country.com",38],["wa1a.com",38],["wabcradio.com",38],["walk975.com",38],["walkradio.com",38],["warm1033.com",38],["warm98.com",38],["waysam.com",38],["wbap.com",38],["wbbw.com",38],["wbmq.net",38],["wbnq.com",38],["wbpm929.com",38],["wbpmfm.com",38],["wbwn.com",38],["wcbm.com",38],["wceiradio.com",38],["wcfx.com",38],["wchv.com",38],["wclg.com",38],["wcoapensacola.com",38],["wcpqfm.com",38],["wcpt820.com",38],["wcpt820.net",38],["wcpt820am.com",38],["wcpt820am.net",38],["wcptam.com",38],["wcptam.net",38],["wcptamfm.com",38],["wcptamfm.net",38],["wcptamfm.org",38],["wcpyfm.com",38],["wctk.com",38],["wddoam.com",38],["wden.com",38],["wdml.com",38],["wdst.com",38],["wdst.org",38],["wdzz.com",38],["wedg.com",38],["werkfm.net",38],["werkradio.com",38],["wfasam.com",38],["wfav951.com",38],["wfmd.com",38],["wfms.com",38],["wfnc640am.com",38],["wfre.com",38],["wftw.com",38],["wgh1310.com",38],["wghsolidgold.com",38],["wglx.com",38],["wgni.com",38],["wgow.com",38],["wgowam.com",38],["wgrr.com",38],["whdg.com",38],["wheelz1045.com",38],["whli.com",38],["whrpfm.com",38],["whtt.com",38],["whud.com",38],["wild1029.com",38],["wild1049hd.com",38],["wild1061.com",38],["wild993fm.com",38],["wildcatsradio1290.com",38],["wink104.com",38],["winxfm.com",38],["wiog.com",38],["wiov.com",38],["wiov985.com",38],["wivk.com",38],["wivr1017.com",38],["wizn.com",38],["wjbc.com",38],["wjcw.com",38],["wjez.com",38],["wjjr.net",38],["wjoxam.com",38],["wjr.com",38],["wkav.com",38],["wkbethepoint.com",38],["wkga975.com",38],["wkhx.com",38],["wkmoradio.com",38],["wkol.com",38],["wkrs.com",38],["wkrufm.com",38],["wksm.com",38],["wkydeportes.com",38],["wlaq1410.com",38],["wlav.com",38],["wlbc.com",38],["wlevradio.com",38],["wlkwradio.com",38],["wlok.com",38],["wlsam.com",38],["wlum.com",38],["wlup.com",38],["wlwi.com",38],["wmac-am.com",38],["wmal.com",38],["wmqa.com",38],["wncv.com",38],["wogb.fm",38],["woko.com",38],["womg.com",38],["woodstockbroadcasting.com",38],["woodstockcommunication.com",38],["woodstockradio.net",38],["woodstocktv.net",38],["wovo1063.com",38],["wovofm.com",38],["wqut.com",38],["wqvealbany.com",38],["wrganews.com",38],["wrgm.com",38],["wrlo.com",38],["wrr101.com",38],["wrul.com",38],["wsba910.com",38],["wsfl.com",38],["wsjssports.com",38],["wskz.com",38],["wsyb1380am.com",38],["wtka.com",38],["wtma.com",38],["wtrxsports.com",38],["wttlradio.com",38],["wuuqradio.com",38],["wvel.com",38],["wvli927.com",38],["wvlkam.com",38],["wvnn.com",38],["wwck.com",38],["wwki.com",38],["wwqq101.com",38],["wxfx.com",38],["wxkr.com",38],["wxpkfm.com",38],["wynn1063.com",38],["wzpl.com",38],["wzyp.com",38],["wzzl.com",38],["x1051kc.com",38],["x95radio.com",38],["xs961.com",38],["xtrasports1300.com",38],["y-103.com",38],["y101hits.com",38],["y102montgomery.com",38],["y1065.com",38],["yesfm.net",38],["z1023online.com",38],["z1029.com",38],["z1075.com",38],["z937.com",38],["z93jamz.com",38],["z96.com",38],["z971.com",38],["zone1150.com",38],["zrock103.com",38],["zrockfm.com",38],["windows101tricks.com",39],["waaw.tv",40],["hqq.tv",[40,41]],["fontsfree.pro",42],["strangermeetup.com",43],["radarbox.com",44],["adslayuda.com",45],["avdelphi.com",46],["ds2play.com",48],["ds2video.com",48],["d0o0d.com",48],["vidembed.me",48],["mzzcloud.life",48],["videobot.stream",48],["justswallows.net",48],["onscreensvideo.com",48],["katerionews.com",48],["telenovelas-turcas.com.es",48],["kmo.to",48],["jeniusplay.com",[48,122]],["4x4earth.com",49],["jootc.com",[50,51]],["photobank.mainichi.co.jp",52],["tbs.co.jp",53],["rottentomatoes.com",54],["sovetromantica.com",55],["longecity.org",56],["magnet-novels.com",57],["torrentlawyer.com",[57,62,67,68]],["fruit01.xyz",58],["lyricstranslate.com",59],["hardcoregames.ca",60],["allsmo.com",60],["themosvagas.com.br",60],["urbharat.xyz",60],["sportnews.to",[60,70]],["2embed.ru",61],["sbasian.pro",61],["miraculous.to",[61,84]],["vtplayer.net",61],["webnovel.com",61],["pepperlive.info",61],["unbiasedsenseevent.com",61],["maxt.church",61],["cool-etv.net",61],["vgembed.com",[61,116]],["photopea.com",61],["szkolawohyn.pl",62],["virpe.cc",62],["gmarket.co.kr",[62,68]],["paesifantasma.it",63],["talpo.it",63],["quora.com",64],["gmx.net",66],["hoca4u.com",68],["youmath.it",69],["renditepassive.net",[71,72,73,74,75]],["360doc.com",76],["logonews.cn",77],["spanishdict.com",78],["thetodaypost.com",[79,87,91]],["cloudcomputingtopics.net",79],["0123movies.ch",[79,87,91,120]],["epn.bz",80],["affbank.com",81],["gardenia.net",[82,83]],["meteoblue.com",85],["novelpia.com",[86,87]],["blueraindrops.com",89],["animecruzers.com",90],["descargatepelis.com",91],["news.ntv.co.jp",91],["bongdaplus.vn",91],["bestjavporn.com",92],["mm9841.cc",92],["ggwash.org",[93,94]],["watch.lonelil.com",96],["cinegrabber.com",97],["layarkacaxxi.icu",98],["readawrite.com",[99,100,101,102,103,104,105]],["dropgalaxy.com",106],["morosedog.gitlab.io",107],["indianhealthyrecipes.com",109],["tarnkappe.info",110],["heavyfetish.com",111],["joysound.com",[112,113,114]],["colors.sonicthehedgehog.com",[114,117]],["leakedzone.com",118],["mehoathinh2.com",119],["powerline.io",121],["bestx.stream",123],["moviesapi.club",123],["watchx.top",123],["enduro-mtb.com",124],["kukaj.io",125],["animesaga.in",126],["animesuge.to",127],["aniwave.to",127],["hdtoday.so",127],["hurawatch.bz",127],["lazyadmin.nl",128],["thejakartapost.com",129],["fullxh.com",130],["megaxh.com",130],["unlockxh4.com",130],["xhadult2.com",130],["xhadult3.com",130],["xhadult4.com",130],["xhadult5.com",130],["xhamster46.com",130],["xhday.com",130],["xhday1.com",130],["xhmoon5.com",130],["xhplanet1.com",130],["xhplanet2.com",130],["xhreal2.com",130],["xhreal3.com",130],["xhtab2.com",130],["xhvictory.com",130],["xhwebsite.com",130],["xhwebsite2.com",130],["xhwide1.com",130],["xhwide8.com",130],["marinetraffic.com",131],["ymovies.vip",132],["aniwatch.to",132],["megacloud.tv",132],["rapid-cloud.co",132],["rabbitstream.net",132],["pupupul.site",132],["netuplayer.top",132],["stbnetu.xyz",132],["thotsbay.tv",132],["vipstreams.in",132],["gdplayertv.top",132],["mixstreams.top",132],["tvfreemium.top",132],["animenewsnetwork.com",133],["androidpolice.com",134],["makeuseof.com",134],["movieweb.com",134],["xda-developers.com",134],["thegamer.com",134],["cbr.com",134],["gamerant.com",134],["screenrant.com",134],["howtogeek.com",134],["thethings.com",134],["simpleflying.com",134],["dualshockers.com",134],["digminecraft.com",135],["how-to-pc.info",136],["programming-link.info",136],["maxroll.gg",137],["tv.bdix.app",138],["hitokageproduction.com",139],["dngz.net",141],["vnexpress.net",142]]);

const entitiesMap = new Map([["earnload",35],["hindipix",[40,41]],["vidsrc",40],["doods",48],["videovard",48],["123movies",61],["brainly",88],["ask4movie",[95,96]],["bluemediafile",115],["anix",127],["vidplay",127],["hamsterix",130],["xhamster",130],["xhamster1",130],["xhamster10",130],["xhamster11",130],["xhamster12",130],["xhamster13",130],["xhamster14",130],["xhamster15",130],["xhamster16",130],["xhamster17",130],["xhamster18",130],["xhamster19",130],["xhamster20",130],["xhamster2",130],["xhamster3",130],["xhamster4",130],["xhamster5",130],["xhamster7",130],["xhamster8",130],["hianime",132],["netu",132]]);

const exceptionsMap = new Map([]);

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
