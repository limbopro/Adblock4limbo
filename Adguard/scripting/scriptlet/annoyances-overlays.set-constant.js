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

/* eslint-disable indent */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["killads","true"],["PASSER_videoPAS_apres","0"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["blurred","false"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.debug","trueFunc"],["console.clear","trueFunc"],["adBlock","false"],["document.oncontextmenu","undefined"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["document.onselectstart","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["console.clear","throwFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["devtoolsDetector","{}"],["placeAdsHandler","noopFunc"],["ramp.addUnits","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"],["DisableDevtool","noopFunc"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"],["Object.prototype.disableMenu","false"]];

const hostnamesMap = new Map([["xclient.info",0],["bejson.com",0],["impots.gouv.fr",1],["gearside.com",2],["nytimes.com",[3,4]],["tvtropes.org",5],["justtrucks.com.au",6],["cittadinanza.biz",7],["glistranieri.it",7],["ideapod.com",[7,18]],["privivkainfo.ru",7],["awebstories.com",[7,102]],["ancient.eu",8],["intramed.net",9],["protest.eu",10],["northwestfirearms.com",11],["techkings.org",11],["spookshow.net",12],["fosshub.com",13],["pokemonforever.com",14],["carsguide.com.au",15],["humo.be",16],["apksecured.com",17],["intergate.info",17],["alphapolis.co.jp",[17,42]],["chronologia.pl",[17,42]],["reportergazeta.pl",[17,42,46]],["odiarioonline.com.br",[17,54]],["nordkorea-info.de",17],["geotips.net",[17,59]],["televisiongratishd.com",[17,54,65]],["noweconomy.live",17],["naaree.com",[17,54]],["cda-hd.cc",17],["hqq.to",[17,55,74]],["tv-tokyo.co.jp",17],["arti-definisi-pengertian.info",17],["studyadda.com",[17,138]],["webwereld.nl",19],["palemoon.org",20],["wheel-size.com",21],["aoezone.net",22],["radioony.fm",23],["mexiconewsdaily.com",24],["technologyreview.com",25],["bdcraft.net",26],["instagram.com",27],["wired.co.uk",28],["gq-magazine.co.uk",28],["glamourmagazine.co.uk",28],["m.youtube.com",29],["music.youtube.com",29],["tv.youtube.com",29],["www.youtube.com",29],["youtubekids.com",29],["buienradar.nl",30],["clk.ink",31],["1009thecat.com",32],["1013katy.com",32],["1013themix.com",32],["1015jackfm.com",32],["1015khits.com",32],["1015thefox.com",32],["1017thebeach.com",32],["1017theteam.com",32],["1019hot.com",32],["1019online.com",32],["1019thekeg.com",32],["101thefox.net",32],["101wkqx.com",32],["1021nashicon.com",32],["1021thefox.com",32],["1023thewolf.com",32],["1025jackfm.com",32],["1027thevibe.com",32],["1029nashicon.com",32],["102thebear.com",32],["1031nowfm.com",32],["1031radiom.com",32],["1035memphis.com",32],["1035thegame.com",32],["1035wrbo.com",32],["1037nash.com",32],["1039bobfm.com",32],["1039wvbo.com",32],["1041wdlt.com",32],["1043thebridge.com",32],["1043thebridge.net",32],["1043thevibe.com",32],["1045thedan.com",32],["1045thezone.com",32],["1045wjjk.com",32],["1047krez.com",32],["1049nashicon.com",32],["1049thehits.com",32],["104thehawk.com",32],["1050talk.com",32],["1053classichits.com",32],["1053hotfm.com",32],["1053thebear.com",32],["1053thepoint.com",32],["1053thepoint.net",32],["1053wow.com",32],["1055kbuck.com",32],["1055thecat.com",32],["1057kokz.com",32],["1057nowfm.com",32],["1057thebear.com",32],["1057thex.com",32],["1057thexrocks.com",32],["1061theunderground.com",32],["1063spinfm.com",32],["1063thevibe.com",32],["1063wovo.com",32],["1065theticket.com",32],["1067thekrewe.com",32],["106x.com",32],["1070wnct.com",32],["1071bobfm.com",32],["1071thepeak.com",32],["1071thepoint.com",32],["1073wsjy.com",32],["1075nowfm.com",32],["1075thegame.com",32],["1077lakefm.com",32],["1077thebone.com",32],["1077theisland.com",32],["1079nashicon.com",32],["107countrypsk.com",32],["107nashicon.com",32],["1090kaay.com",32],["1220wkrs.com",32],["1230espnsports.com",32],["1230theteam.com",32],["1280wnam.com",32],["1290wlby.com",32],["1320thefan.com",32],["1340wmsa.com",32],["1430wcmy.com",32],["1450kven.com",32],["1480kyos.com",32],["1490wosh.com",32],["1510kga.com",32],["1590walg.com",32],["1620thezone.com",32],["1700thechamp.com",32],["2hoursmattpinfield.com",32],["600wrqx.com",32],["600wsom.com",32],["610knml.com",32],["630wpro.com",32],["640wxsm.com",32],["660wxqw.com",32],["680thefan.com",32],["770kkob.com",32],["790business.com",32],["790wpic.com",32],["810whb.com",32],["860kkat.com",32],["860utahsbigtalker.com",32],["900theticket.com",32],["921theticket.com",32],["923krst.com",32],["923thewolf.com",32],["925nashicon.com",32],["925thebear.com",32],["925thewolf.com",32],["927bobfm.com",32],["929peakfm.com",32],["929thewave.com",32],["929wbpm.com",32],["92kqrs.com",32],["92profm.com",32],["92qnashville.com",32],["931nashicon.com",32],["931thebeat.com",32],["933nashicon.com",32],["935nashfm.com",32],["935wrqn.com",32],["937nashicon.com",32],["937nowfm.com",32],["937themountain.com",32],["939northpoleradio.com",32],["939theville.com",32],["939xindy.com",32],["93q.com",32],["93wkct.com",32],["93x.com",32],["940wfaw.com",32],["941ksky.com",32],["941thebear.com",32],["941thehits.com",32],["945thedrive.com",32],["945thehawkradio.com",32],["947qdr.com",32],["947wls.com",32],["949kcmo.com",32],["949radiojondeek.com",32],["949starcountry.com",32],["949theoutlaw.com",32],["94rockradio.net",32],["951nashfm.com",32],["951kbby.com",32],["953hlf.com",32],["953thebeach.com",32],["953thescore.com",32],["955bobfm.com",32],["955glo.com",32],["955nashicon.com",32],["955thefan.com",32],["955thevibe.com",32],["957kboy.com",32],["957kpur.com",32],["957nashicon.com",32],["957thevibe.com",32],["957thewolfonline.com",32],["959therocket.com",32],["95sx.com",32],["95wiil.com",32],["95x.com",32],["961bbb.com",32],["961jamz.com",32],["961sox.com",32],["961wsox.com",32],["963nashicon.com",32],["963thezone.com",32],["963wdvd.com",32],["967shinefm.com",32],["969lacaliente.com",32],["969thewolf.com",32],["96key.com",32],["96kzel.com",32],["973eagle.com",32],["973nashfm.com",32],["975kabx.com",32],["975thevibe.com",32],["975wabd.com",32],["979nashfm.com",32],["979espnradio.com",32],["979nashicon.com",32],["979wvok.com",32],["979x.com",32],["97bht.com",32],["97rock.com",32],["980waav.com",32],["980wxlm.com",32],["981thebeat.com",32],["981themax.com",32],["981thevalley.com",32],["983nashicon.com",32],["983thekeg.com",32],["983vibe.com",32],["983wlcs.com",32],["985kissfm.net",32],["989magicfm.com",32],["989thebridge.com",32],["98theticket.com",32],["993kjoy.com",32],["995thejock.com",32],["995thewolf.com",32],["997cyk.com",32],["997cyk.org",32],["997kmjj.com",32],["997themix.com",32],["997wpro.com",32],["997wtn.com",32],["999thebuzz.com",32],["999thefoxrocks.com",32],["999thehawk.com",32],["99x.com",32],["kjmo.com",32],["nashfm100.com",32],["nashfm923krst.com",32],["nashfm1033.com",32],["nashfm1055.com",32],["nashfm929.com",32],["nashfm931.com",32],["nashfm941.com",32],["nashfm949.com",32],["nashfm981.com",32],["nashfmwisconsin.com",32],["nashicon989.com",32],["v100rocks.com",32],["albanymagic.com",32],["alice1077.com",32],["allthehitsb951.com",32],["alt1019.com",32],["alt1049albany.com",32],["alt2k.com",32],["alt923.com",32],["alt98.com",32],["am630.net",32],["amarillosrockstation.com",32],["americanpatriotmedia.com",32],["annarbors107one.com",32],["atlantasrockstation.com",32],["atlsportsx.com",32],["b106fm.com",32],["b1073.com",32],["b95.com",32],["b979.net",32],["b98.com",32],["b985slo.com",32],["b987.com",32],["bakersfieldespn.com",32],["bakersfieldespnsports.com",32],["beach985.com",32],["beachboogieandblues.com",32],["bear104.com",32],["big1013.com",32],["bigcheese1079.com",32],["bigcountry1073.com",32],["bigdawg985.com",32],["bigdog1067.com",32],["bigfrog101.com",32],["bigfroggy1053.com",32],["bigtalk1490.com",32],["blairgarner.com",32],["blazin1023.com",32],["blazin923.com",32],["bloomingtonhits.com",32],["bobfmspringfield.com",32],["bowlinggreensam.com",32],["bull973.com",32],["bxr.com",32],["caperadio1550.com",32],["catcountry.com",32],["catcountry96.com",32],["catcountryvermont.com",32],["cbssports1430.com",32],["cbssportserie.com",32],["cbssportsharrisburg.com",32],["cbssportsradio1430.com",32],["chicothunderheads.com",32],["christmas989.com",32],["ckrv.com",32],["classicfox.com",32],["classichits1033.com",32],["classichitsmy1059.com",32],["classichitswnyq.com",32],["classy100.com",32],["coast1013.com",32],["coast973.com",32],["country105fm.net",32],["countrycountdownusa.com",32],["countrylegends1059.com",32],["countrymi.com",32],["coyote1025.com",32],["cumulusdigital.com",32],["digitalsolutions201.com",32],["e93fm.com",32],["eagle97.com",32],["eagle993.com",32],["easy991.com",32],["ed.fm",32],["elizabethtownradio.com",32],["energy939indy.com",32],["espn1320columbia.com",32],["espn910.com",32],["espnhonolulu.com",32],["espnlouisville.com",32],["espnlv.com",32],["espnradio1280.com",32],["espnradio927.com",32],["espnradio941.com",32],["espnsyracuse.com",32],["espnur.com",32],["espnwestpalm.com",32],["espnwilmington.com",32],["fly92.com",32],["fly923.com",32],["fm102milwaukee.com",32],["fm102one.com",32],["fonzfm.com",32],["forevereaston.com",32],["forevermediayork.com",32],["fox969.com",32],["foxcincinnati.com",32],["foxsportsredding.com",32],["froggy1003.com",32],["froggy101fm.com",32],["froggy981.com",32],["froggy99.net",32],["froggycountry.net",32],["froggyland.com",32],["fuego1029.com",32],["fun1013.com",32],["fun969fm.com",32],["generations1023.com",32],["glory985.com",32],["go106.com",32],["goradioheartland.com",32],["gospel900.com",32],["gulf104.com",32],["heaven1460.com",32],["heaven983.com",32],["hitkicker997.com",32],["hitpage.com",32],["hits931fm.com",32],["hits96.com",32],["hits965.com",32],["hot1005.com",32],["hot100blono.com",32],["hot100nrv.com",32],["hot101.com",32],["hot102.net",32],["hot1033.com",32],["hot1039.com",32],["hot1047fm.com",32],["hot1057.com",32],["hot1063.com",32],["hot1067fm.com",32],["hot1067pa.com",32],["hot1077radio.com",32],["hot92and100.com",32],["hot933hits.com",32],["hot941.com",32],["hot967fm.com",32],["hvradionet.com",32],["i973hits.com",32],["ilovethehits.com",32],["indysmix.com",32],["jammin999fm.com",32],["jamz963.com",32],["jox2fm.com",32],["joxfm.com",32],["k100country.com",32],["k104online.com",32],["k105country.com",32],["k92radio.com",32],["k983.com",32],["kabc.com",32],["kaok.com",32],["kaperadio1550.com",32],["katm.com",32],["katt.com",32],["kbcy.com",32],["kber.com",32],["kboi.com",32],["kbul.com",32],["kbull93.com",32],["kcchiefsradio.com",32],["kcheradio.com",32],["kcmotalkradio.com",32],["kcmxam.com",32],["kennradio.com",32],["kernradio.com",32],["kesn1033.com",32],["key101fm.com",32],["kfru.com",32],["kftx.com",32],["kgfm.com",32],["kgfw.com",32],["kggo.com",32],["kgmo.com",32],["kgoradio.com",32],["khay.com",32],["khfm.com",32],["khfm.org",32],["khit1075.com",32],["khop.com",32],["khvl.com",32],["kiimfm.com",32],["kiss-1031.com",32],["kix1029.com",32],["kix106.com",32],["kix96.com",32],["kizn.com",32],["kjjy.com",32],["kjoy.com",32],["kkcy.com",32],["kkfm.com",32],["kkgb.com",32],["kkgl.com",32],["kkoh.com",32],["klif.com",32],["klik1240.com",32],["klin.com",32],["klur.com",32],["kmaj.com",32],["kmaj1440.com",32],["kmez1029.com",32],["kmjnow.com",32],["knbr.com",32],["knek.com",32],["kobfm.com",32],["kpla.com",32],["kpur107.com",32],["kqfc.com",32],["kqky.com",32],["kqms.com",32],["kqxy.com",32],["krbe.com",32],["krmd.com",32],["krny.com",32],["krrq.com",32],["krush925.com",32],["kruz1033.com",32],["ksam1017.com",32],["kscrhits.com",32],["kscs.com",32],["ksfo.com",32],["kshasta.com",32],["ksks.com",32],["ksmb.com",32],["ktcx.com",32],["ktik.com",32],["ktop1490.com",32],["ktucam.com",32],["kubaradio.com",32],["kubb.com",32],["kugn.com",32],["kuzz.com",32],["kuzzradio.com",32],["kvor.com",32],["kwin.com",32],["kwwr.com",32],["kxel.com",32],["kxzz1580am.com",32],["kyis.com",32],["kykz.com",32],["kzwafm.com",32],["la103.com",32],["laindomable.com",32],["laleync.com",32],["lanuevaomaha.com",32],["lite102.com",32],["literock105fm.com",32],["love105fm.com",32],["lvfoxsports.com",32],["magic1029fm.com",32],["magic1039fm.com",32],["magic1069.com",32],["magic1073.com",32],["magic1073fm.com",32],["magic93fm.com",32],["magic943fm.com",32],["magic979wtrg.com",32],["magic995abq.com",32],["majic97monroe.com",32],["majicspace.com",32],["maverick1023.com",32],["max94one.com",32],["maxrocks.net",32],["mega979.com",32],["mgeradio.com",32],["milwaukeesparty.com",32],["mix103.com",32],["mix1077albany.com",32],["mix965.net",32],["modernrock987.com",32],["montanassuperstation.com",32],["movin993.com",32],["muskegonnashicon.com",32],["my1059.com",32],["my961.com",32],["myblono.com",32],["mycolumbiabasin.com",32],["myfroggy95.com",32],["mykiss973.com",32],["mymagic106.com",32],["mymix1051.com",32],["mymix1061.com",32],["mymix961.com",32],["mystar98.com",32],["nashcountrydaily.com",32],["nashdetroit.com",32],["nashfm1007.com",32],["nashfm1011.com",32],["nashfm1017.com",32],["nashfm1025.com",32],["nashfm1027.com",32],["nashfm1061.com",32],["nashfm1065.com",32],["nashfm923.com",32],["nashfm937.com",32],["nashfm943.com",32],["nashfm951.com",32],["nashfm973.com",32],["nashfm991.com",32],["nashfmgreenbay.com",32],["nashfmsjo.com",32],["nashnightslive.net",32],["nashpensacola.com",32],["ncsportsradio.com",32],["nepasespnradio.com",32],["neuhoffmedia.com",32],["neuhoffmedialafayette.com",32],["newcountry963.com",32],["newsradio1029.com",32],["newsradio1440.com",32],["newsradioflorida.com",32],["newsradiokkob.com",32],["newsserver1.com",32],["newsserver2.com",32],["newsserver3.com",32],["newstalk1030.com",32],["newstalk1290koil.com",32],["newstalk730.com",32],["newstalk987.com",32],["newstalkwsba.com",32],["newswebradiocompany.net",32],["now937.com",32],["nrgmedia.com",32],["nrq.com",32],["og979.com",32],["okiecountry1017.com",32],["oldiesz104.com",32],["ottawaradio.net",32],["pensacolasjet.com",32],["peorias923.com",32],["picklefm.com",32],["pikefm.com",32],["planet1067.com",32],["pmbbroadcasting.com",32],["pmbradio.com",32],["power1021.com",32],["power103.com",32],["power1057.com",32],["power1069fm.com",32],["power923.com",32],["power94radio.com",32],["power955.com",32],["powerhits95.com",32],["powerslc.com",32],["praise1025fm.com",32],["purerock96.com",32],["q1005.com",32],["q1031fm.com",32],["q105.fm",32],["q1055.com",32],["q1061.com",32],["q106dot5.com",32],["q973radio.com",32],["q97country.com",32],["q98fm.com",32],["q997atlanta.com",32],["q99fm.com",32],["radio1039ny.com",32],["radiorockriver.com",32],["radiowoodstock.com",32],["realcountry1280whvr.com",32],["realcountryhv.com",32],["red1031.com",32],["red945.com",32],["rewind1019.com",32],["rickandsasha.com",32],["rock101.net",32],["rock1015.com",32],["rock103albany.com",32],["rock103rocks.com",32],["rock106.net",32],["rock107fm.com",32],["rock108.com",32],["rock945vt.com",32],["rockdaily.com",32],["rocknews.com",32],["rockofsavannah.com",32],["rockofsavannah.net",32],["softrock941.com",32],["southernillinoisnow.com",32],["southernsportstoday.com",32],["sportsanimal920.com",32],["sportsanimalabq.com",32],["sportscapitoldc.com",32],["sportshubtriad.com",32],["sportsradio1270.com",32],["sportsradio1440.com",32],["sportsradio1560.com",32],["sportsradio590am.com",32],["sportsradio740.com",32],["sportsradio967.com",32],["sportsradio970.com",32],["sportsradiobeaumont.com",32],["sportsradioberks.com",32],["sportsradiownml.com",32],["star98.net",32],["starfm1023.com",32],["starsplash.com",32],["stevegormanrocks.com",32],["sunny1031.com",32],["sunny1069fm.com",32],["sunny923.com",32],["sunny983.com",32],["sunnymuskegon.com",32],["supertalk1570.com",32],["sweet985.com",32],["talk104fm.com",32],["talk995.com",32],["talkradio1007.com",32],["tbhpod.com",32],["teammyrtlebeach.com",32],["test107.com",32],["thebear925.com",32],["thebigjab.com",32],["thebigstation93blx.com",32],["theblairgarnershow.com",32],["theconclave.com",32],["thefan1075.com",32],["thefanfm.com",32],["thegame541.com",32],["thehippo.com",32],["thehot1039.com",32],["thenewhotfm.com",32],["thenewpulsefm.com",32],["thepointontheweb.com",32],["therebelrocks.com",32],["therocket951.com",32],["therockstationz93.com",32],["thescore1260.com",32],["thesportsanimal.com",32],["theticket.com",32],["theticket1007.com",32],["theticket102.com",32],["theticket1590.com",32],["theticketmi.com",32],["thetybentlishow.com",32],["thevalley981.com",32],["thewolf1051.com",32],["thewolf951.com",32],["thisisqmusic.com",32],["thunder1073.com",32],["triadsports.com",32],["tuligaradio.com",32],["umpsports.com",32],["v100fm.com",32],["v1033.com",32],["vermilioncountyfirst.com",32],["vermillioncountyfirst.com",32],["w3dcountry.com",32],["w4country.com",32],["wa1a.com",32],["wabcradio.com",32],["walk975.com",32],["walkradio.com",32],["warm1033.com",32],["warm98.com",32],["waysam.com",32],["wbap.com",32],["wbbw.com",32],["wbmq.net",32],["wbnq.com",32],["wbpm929.com",32],["wbpmfm.com",32],["wbwn.com",32],["wcbm.com",32],["wceiradio.com",32],["wcfx.com",32],["wchv.com",32],["wclg.com",32],["wcoapensacola.com",32],["wcpqfm.com",32],["wcpt820.com",32],["wcpt820.net",32],["wcpt820am.com",32],["wcpt820am.net",32],["wcptam.com",32],["wcptam.net",32],["wcptamfm.com",32],["wcptamfm.net",32],["wcptamfm.org",32],["wcpyfm.com",32],["wctk.com",32],["wddoam.com",32],["wden.com",32],["wdml.com",32],["wdst.com",32],["wdst.org",32],["wdzz.com",32],["wedg.com",32],["werkfm.net",32],["werkradio.com",32],["wfasam.com",32],["wfav951.com",32],["wfmd.com",32],["wfms.com",32],["wfnc640am.com",32],["wfre.com",32],["wftw.com",32],["wgh1310.com",32],["wghsolidgold.com",32],["wglx.com",32],["wgni.com",32],["wgow.com",32],["wgowam.com",32],["wgrr.com",32],["whdg.com",32],["wheelz1045.com",32],["whli.com",32],["whrpfm.com",32],["whtt.com",32],["whud.com",32],["wild1029.com",32],["wild1049hd.com",32],["wild1061.com",32],["wild993fm.com",32],["wildcatsradio1290.com",32],["wink104.com",32],["winxfm.com",32],["wiog.com",32],["wiov.com",32],["wiov985.com",32],["wivk.com",32],["wivr1017.com",32],["wizn.com",32],["wjbc.com",32],["wjcw.com",32],["wjez.com",32],["wjjr.net",32],["wjoxam.com",32],["wjr.com",32],["wkav.com",32],["wkbethepoint.com",32],["wkga975.com",32],["wkhx.com",32],["wkmoradio.com",32],["wkol.com",32],["wkrs.com",32],["wkrufm.com",32],["wksm.com",32],["wkydeportes.com",32],["wlaq1410.com",32],["wlav.com",32],["wlbc.com",32],["wlevradio.com",32],["wlkwradio.com",32],["wlok.com",32],["wlsam.com",32],["wlum.com",32],["wlup.com",32],["wlwi.com",32],["wmac-am.com",32],["wmal.com",32],["wmqa.com",32],["wncv.com",32],["wogb.fm",32],["woko.com",32],["womg.com",32],["woodstockbroadcasting.com",32],["woodstockcommunication.com",32],["woodstockradio.net",32],["woodstocktv.net",32],["wovo1063.com",32],["wovofm.com",32],["wqut.com",32],["wqvealbany.com",32],["wrganews.com",32],["wrgm.com",32],["wrlo.com",32],["wrr101.com",32],["wrul.com",32],["wsba910.com",32],["wsfl.com",32],["wsjssports.com",32],["wskz.com",32],["wsyb1380am.com",32],["wtka.com",32],["wtma.com",32],["wtrxsports.com",32],["wttlradio.com",32],["wuuqradio.com",32],["wvel.com",32],["wvli927.com",32],["wvlkam.com",32],["wvnn.com",32],["wwck.com",32],["wwki.com",32],["wwqq101.com",32],["wxfx.com",32],["wxkr.com",32],["wxpkfm.com",32],["wynn1063.com",32],["wzpl.com",32],["wzyp.com",32],["wzzl.com",32],["x1051kc.com",32],["x95radio.com",32],["xs961.com",32],["xtrasports1300.com",32],["y-103.com",32],["y101hits.com",32],["y102montgomery.com",32],["y1065.com",32],["yesfm.net",32],["z1023online.com",32],["z1029.com",32],["z1075.com",32],["z937.com",32],["z93jamz.com",32],["z96.com",32],["z971.com",32],["zone1150.com",32],["zrock103.com",32],["zrockfm.com",32],["windows101tricks.com",33],["moflix-stream.day",[35,144,145]],["tv.verizon.com",[35,144,145]],["fontsfree.pro",36],["oceanof-games.com",37],["strangermeetup.com",38],["radarbox.com",39],["adslayuda.com",40],["avdelphi.com",41],["ds2play.com",43],["ds2video.com",43],["d0o0d.com",43],["vidembed.me",43],["mzzcloud.life",43],["videobot.stream",43],["justswallows.net",43],["onscreensvideo.com",43],["katerionews.com",43],["telenovelas-turcas.com.es",43],["kmo.to",43],["jeniusplay.com",[43,118]],["southcloud.tv",43],["d0000d.com",43],["4x4earth.com",44],["jootc.com",[45,46]],["photobank.mainichi.co.jp",47],["tbs.co.jp",48],["rottentomatoes.com",49],["sovetromantica.com",50],["longecity.org",51],["fruit01.xyz",52],["lyricstranslate.com",53],["hardcoregames.ca",54],["allsmo.com",54],["themosvagas.com.br",54],["urbharat.xyz",54],["sportnews.to",[54,65]],["sbasian.pro",55],["miraculous.to",[55,79]],["vtplayer.net",55],["webnovel.com",55],["pepperlive.info",55],["unbiasedsenseevent.com",55],["maxt.church",55],["cool-etv.net",55],["vgembed.com",[55,112]],["photopea.com",55],["szkolawohyn.pl",56],["torrentlawyer.com",[56,61,62,63]],["virpe.cc",56],["gmarket.co.kr",[56,62]],["paesifantasma.it",57],["talpo.it",57],["quora.com",58],["gmx.net",60],["hoca4u.com",62],["youmath.it",64],["renditepassive.net",[66,67,68,69,70]],["360doc.com",71],["logonews.cn",72],["spanishdict.com",73],["thetodaypost.com",[74,82,86]],["cloudcomputingtopics.net",74],["0123movies.ch",[74,82,86,116]],["epn.bz",75],["affbank.com",76],["gardenia.net",[77,78]],["meteoblue.com",80],["novelpia.com",[81,82]],["blueraindrops.com",84],["animecruzers.com",85],["descargatepelis.com",86],["news.ntv.co.jp",86],["bongdaplus.vn",86],["bestjavporn.com",87],["mm9841.cc",87],["ggwash.org",[88,89]],["watch.lonelil.com",91],["cinegrabber.com",92],["layarkacaxxi.icu",93],["readawrite.com",[94,95,96,97,98,99,100]],["morosedog.gitlab.io",101],["indianhealthyrecipes.com",103],["tarnkappe.info",104],["secondlifetranslations.com",[105,106]],["heavyfetish.com",107],["joysound.com",[108,109,110]],["colors.sonicthehedgehog.com",[110,113]],["leakedzone.com",114],["mehoathinh2.com",115],["brutal.io",117],["powerline.io",117],["enduro-mtb.com",119],["kukaj.io",120],["animesaga.in",121],["animesuge.to",122],["flixrave.to",122],["hdtoday.so",122],["hurawatch.bz",122],["vid2faf.site",122],["lazyadmin.nl",123],["thejakartapost.com",124],["buktube.com",125],["fullxh.com",125],["galleryxh.site",125],["megaxh.com",125],["movingxh.world",125],["seexh.com",125],["unlockxh4.com",125],["valuexh.life",125],["xhaccess.com",125],["xhadult2.com",125],["xhadult3.com",125],["xhadult4.com",125],["xhadult5.com",125],["xhamster46.com",125],["xhamsterporno.mx",125],["xhbig.com",125],["xhbranch5.com",125],["xhchannel.com",125],["xhchannel2.com",125],["xhdate.world",125],["xhday.com",125],["xhday1.com",125],["xhlease.world",125],["xhmoon5.com",125],["xhofficial.com",125],["xhopen.com",125],["xhplanet1.com",125],["xhplanet2.com",125],["xhreal2.com",125],["xhreal3.com",125],["xhspot.com",125],["xhtab2.com",125],["xhtab4.com",125],["xhtotal.com",125],["xhtree.com",125],["xhvictory.com",125],["xhwebsite.com",125],["xhwebsite2.com",125],["xhwebsite5.com",125],["xhwide1.com",125],["xhwide2.com",125],["xhwide5.com",125],["xhxh3.xyz",125],["marinetraffic.com",126],["ymovies.vip",127],["aniwatch.to",127],["aniwatchtv.to",127],["megacloud.tv",127],["putlocker.vip",127],["rapid-cloud.co",127],["rabbitstream.net",127],["pupupul.site",127],["netuplayer.top",127],["stbnetu.xyz",127],["thotsbay.tv",127],["vipstreams.in",127],["freewatchtv.top",127],["mixstreams.top",127],["tvfreemium.top",127],["abysscdn.com",127],["grostembed.online",128],["megacloud.tube",128],["premiumembeding.cloud",128],["venusembed.site",128],["animenewsnetwork.com",129],["androidpolice.com",130],["makeuseof.com",130],["movieweb.com",130],["xda-developers.com",130],["thegamer.com",130],["cbr.com",130],["gamerant.com",130],["screenrant.com",130],["howtogeek.com",130],["thethings.com",130],["simpleflying.com",130],["dualshockers.com",130],["moviesapi.club",131],["bestx.stream",131],["watchx.top",131],["yugenanime.sx",131],["yugenanime.tv",131],["digminecraft.com",132],["arras.io",133],["arras.netlify.app",133],["arrax.io",133],["how-to-pc.info",134],["programming-link.info",134],["maxroll.gg",135],["tv.bdix.app",136],["hitokageproduction.com",137],["dngz.net",139],["vnexpress.net",140],["archon.gg",142],["einthusan.tv",143],["sussytoons.site",146]]);

const entitiesMap = new Map([["earnload",31],["hindipix",[34,35]],["vidsrc",[35,141]],["doods",43],["videovard",43],["123movies",55],["brainly",83],["ask4movie",[90,91]],["bluemediafile",111],["aniwave",122],["anix",122],["vidplay",122],["hamsterix",125],["xhamster",125],["xhamster1",125],["xhamster10",125],["xhamster11",125],["xhamster12",125],["xhamster13",125],["xhamster14",125],["xhamster15",125],["xhamster16",125],["xhamster17",125],["xhamster18",125],["xhamster19",125],["xhamster20",125],["xhamster2",125],["xhamster3",125],["xhamster4",125],["xhamster42",125],["xhamster5",125],["xhamster7",125],["xhamster8",125],["hianime",127],["netu",127],["gdplayertv",127]]);

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
        let normalValue = validateConstantFn(trusted, rawValue, extraArgs);
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
            'loading': 1, 'asap': 1,
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
                return { matchAll: true, expect: true };
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

function validateConstantFn(trusted, raw, extraArgs = {}) {
    const safe = safeSelf();
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
    } else if ( raw === 'throwFunc' ) {
        value = function(){ throw ''; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('json:') ) {
            try { value = safe.JSON_parse(raw.slice(5)); } catch(ex) { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
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
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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

uBOL_setConstant();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
