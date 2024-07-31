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

const argsList = [["hasAdblock","false"],["PASSER_videoPAS_apres","0"],["warning_widget.check_ad_block_status","noopFunc"],["killads","true"],["adsAreBlocked","false"],["nebula.session.flags.adblock","undefined"],["_adBlockCheck","true"],["navigator.storage.estimate","undefined"],["valid_user","true"],["Drupal.behaviors.detectAdblockers","noopFunc"],["disableSelection","noopFunc"],["ADBdetected","noopFunc"],["adblock","false"],["BIA.ADBLOCKER","false"],["samDetected","true"],["adBlockFunction","trueFunc"],["checkAds","trueFunc"],["google_jobrunner","true"],["isAdblockDisabled","true"],["checkPrivacyWall","noopFunc"],["document.oncontextmenu","null"],["nocontext","noopFunc"],["adsAreShown","true"],["abd","false"],["detector_active","true"],["aoezone_adchecker","true"],["pageService.initDownloadProtection","noopFunc"],["detectPrivateMode","noopFunc"],["webkitRequestFileSystem","undefined"],["adsbygoogle","null"],["_sharedData.is_whitelisted_crawl_bot","true"],["ads_not_blocked","true"],["ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["hideBannerBlockedMessage","true"],["blurred","false"],["document.oncontextmenu","undefined"],["alert","trueFunc"],["TGMP_OBJ_CACHE.tritonsee_client.playAttemptsCount","trueFunc"],["better_ads_adblock","0"],["console.clear","trueFunc"],["console.debug","trueFunc"],["adBlock","false"],["adsEnabled","true"],["ads_enabled","true"],["better_ads_adblock","null"],["f12lock","false"],["document.onselectstart","null"],["console.clear","undefined"],["adBlockDetected","false"],["document.onkeyup","null"],["document.ondragstart","null"],["commonUtil.openToast","null"],["NS_TVER_EQ.checkEndEQ","trueFunc"],["mps._queue.abdetect","null"],["fuckAdBlock","trueFunc"],["abp","false"],["document.onselectstart","noopFunc"],["document.onkeydown","noopFunc"],["getSelection","undefined"],["document.onkeydown","null"],["console.clear","noopFunc"],["document.oncontextmenu","noopFunc"],["x5engine.utils.imCodeProtection","null"],["ansFrontendGlobals.settings.signupWallType","undefined"],["onload","null"],["document.documentElement.AdBlockDetection","noopFunc"],["document.ondragstart","noopFunc"],["document.onmousedown","noopFunc"],["disableselect","trueFunc"],["document.onkeypress","null"],["document.oncontextmenu",""],["document.onselectstart",""],["document.onkeydown",""],["document.onmousedown",""],["document.onclick",""],["document.body.onmouseup","null"],["document.oncopy","null"],["SD_BLOCKTHROUGH","true"],["document.onkeydown","trueFunc"],["ab","false"],["canRunAds","true"],["document.body.oncut","null"],["document.body.oncopy","null"],["console.log","noopFunc"],["mb.advertisingShouldBeEnabled","false"],["document.ondragstart","trueFunc"],["document.onselectstart","trueFunc"],["jsData.hasVideoMeteringUnlogEnabled","undefined"],["lepopup_abd_enabled",""],["Object.prototype.preroll","[]"],["document.oncontextmenu","trueFunc"],["devtoolsDetector","undefined"],["Object.prototype.bgOverlay","noopFunc"],["Object.prototype.fixedContentPos","noopFunc"],["console.dir","noopFunc"],["navigator.userAgent",""],["devtoolIsOpening","noopFunc"],["devtoolIsOpening","undefined"],["securityTool.disableRightClick","noopFunc"],["securityTool.disableF12","noopFunc"],["securityTool.disableCtrlP","noopFunc"],["securityTool.disableCtrlS","noopFunc"],["securityTool.disablePrintScreen","noopFunc"],["securityTool.disablePrintThisPage","noopFunc"],["securityTool.disableElementForPrintThisPage","noopFunc"],["checkAds","noopFunc"],["stopPrntScr","noopFunc"],["disableSelection","undefined"],["traffective","true"],["nocontext","undefined"],["disable_hot_keys","undefined"],["flashvars.autoplay",""],["document.body.oncopy","null","3"],["document.body.onselectstart","null","3"],["document.body.oncontextmenu","null","3"],["Time_Start","0"],["DD","trueFunc"],["document.oncontextmenu","null","3"],["Object.prototype._detectLoop","noopFunc"],["forbiddenList","[]"],["document.onkeypress","trueFunc"],["document.oncontextmenu","true"],["Object.prototype._detectLoop","undefined"],["devtoolsDetector","{}"],["SteadyWidgetSettings.adblockActive","false"],["devtoolsOpen","false"],["devtoolsDetector","noopFunc"],["DisDevTool","undefined"],["admiral","noopFunc"],["document.oncopy","noopFunc"],["initials.urls.bannerCheckUrl",""],["mtGlobal.disabledAds","true"],["devtoolsDetector.launch","noopFunc"],["ANN.ads.adblocked","false"],["maxUnauthenicatedArticleViews","null"],["placeAdsHandler","noopFunc"],["ramp.addUnits","noopFunc"],["pqdxwidthqt","false"],["nitroAds.loaded","true"],["jh_disabled_options_data","null"],["topMessage","noopFunc"],["document.onmousedown","null"],["forbidDebug","noopFunc"],["adblock","2"],["__NEXT_DATA__.props.pageProps.adPlacements","undefined"],["login_completed","true"],["console.table","trueFunc"],["console.log","trueFunc"]];

const hostnamesMap = new Map([["brutal.io",[0,121]],["impots.gouv.fr",1],["realcleardefense.com",2],["xclient.info",3],["bejson.com",3],["gardenista.com",4],["gearside.com",5],["nytimes.com",[6,7]],["tvtropes.org",8],["justtrucks.com.au",9],["cittadinanza.biz",10],["glistranieri.it",10],["viralinindia.net",[10,21]],["ideapod.com",[10,21]],["privivkainfo.ru",10],["awebstories.com",[10,106]],["ancient.eu",11],["intramed.net",12],["protest.eu",13],["northwestfirearms.com",14],["techkings.org",14],["spookshow.net",15],["fosshub.com",16],["pokemonforever.com",17],["carsguide.com.au",18],["humo.be",19],["apksecured.com",20],["intergate.info",20],["alphapolis.co.jp",[20,46]],["chronologia.pl",[20,46]],["reportergazeta.pl",[20,46,50]],["odiarioonline.com.br",[20,59]],["nordkorea-info.de",20],["geotips.net",[20,64]],["televisiongratishd.com",[20,59,69]],["noweconomy.live",20],["naaree.com",[20,59]],["cda-hd.cc",20],["hqq.to",[20,60,78]],["tv-tokyo.co.jp",20],["arti-definisi-pengertian.info",20],["studyadda.com",[20,141]],["webwereld.nl",22],["palemoon.org",23],["wheel-size.com",24],["aoezone.net",25],["radioony.fm",26],["mexiconewsdaily.com",27],["technologyreview.com",28],["bdcraft.net",29],["instagram.com",30],["wired.co.uk",31],["gq-magazine.co.uk",31],["glamourmagazine.co.uk",31],["m.youtube.com",32],["music.youtube.com",32],["tv.youtube.com",32],["www.youtube.com",32],["youtubekids.com",32],["buienradar.nl",33],["clk.ink",34],["zerodot1.gitlab.io",[35,36]],["1009thecat.com",37],["1013katy.com",37],["1013themix.com",37],["1015jackfm.com",37],["1015khits.com",37],["1015thefox.com",37],["1017thebeach.com",37],["1017theteam.com",37],["1019hot.com",37],["1019online.com",37],["1019thekeg.com",37],["101thefox.net",37],["101wkqx.com",37],["1021nashicon.com",37],["1021thefox.com",37],["1023thewolf.com",37],["1025jackfm.com",37],["1027thevibe.com",37],["1029nashicon.com",37],["102thebear.com",37],["1031nowfm.com",37],["1031radiom.com",37],["1035memphis.com",37],["1035thegame.com",37],["1035wrbo.com",37],["1037nash.com",37],["1039bobfm.com",37],["1039wvbo.com",37],["1041wdlt.com",37],["1043thebridge.com",37],["1043thebridge.net",37],["1043thevibe.com",37],["1045thedan.com",37],["1045thezone.com",37],["1045wjjk.com",37],["1047krez.com",37],["1049nashicon.com",37],["1049thehits.com",37],["104thehawk.com",37],["1050talk.com",37],["1053classichits.com",37],["1053hotfm.com",37],["1053thebear.com",37],["1053thepoint.com",37],["1053thepoint.net",37],["1053wow.com",37],["1055kbuck.com",37],["1055thecat.com",37],["1057kokz.com",37],["1057nowfm.com",37],["1057thebear.com",37],["1057thex.com",37],["1057thexrocks.com",37],["1061theunderground.com",37],["1063spinfm.com",37],["1063thevibe.com",37],["1063wovo.com",37],["1065theticket.com",37],["1067thekrewe.com",37],["106x.com",37],["1070wnct.com",37],["1071bobfm.com",37],["1071thepeak.com",37],["1071thepoint.com",37],["1073wsjy.com",37],["1075nowfm.com",37],["1075thegame.com",37],["1077lakefm.com",37],["1077thebone.com",37],["1077theisland.com",37],["1079nashicon.com",37],["107countrypsk.com",37],["107nashicon.com",37],["1090kaay.com",37],["1220wkrs.com",37],["1230espnsports.com",37],["1230theteam.com",37],["1280wnam.com",37],["1290wlby.com",37],["1320thefan.com",37],["1340wmsa.com",37],["1430wcmy.com",37],["1450kven.com",37],["1480kyos.com",37],["1490wosh.com",37],["1510kga.com",37],["1590walg.com",37],["1620thezone.com",37],["1700thechamp.com",37],["2hoursmattpinfield.com",37],["600wrqx.com",37],["600wsom.com",37],["610knml.com",37],["630wpro.com",37],["640wxsm.com",37],["660wxqw.com",37],["680thefan.com",37],["770kkob.com",37],["790business.com",37],["790wpic.com",37],["810whb.com",37],["860kkat.com",37],["860utahsbigtalker.com",37],["900theticket.com",37],["921theticket.com",37],["923krst.com",37],["923thewolf.com",37],["925nashicon.com",37],["925thebear.com",37],["925thewolf.com",37],["927bobfm.com",37],["929peakfm.com",37],["929thewave.com",37],["929wbpm.com",37],["92kqrs.com",37],["92profm.com",37],["92qnashville.com",37],["931nashicon.com",37],["931thebeat.com",37],["933nashicon.com",37],["935nashfm.com",37],["935wrqn.com",37],["937nashicon.com",37],["937nowfm.com",37],["937themountain.com",37],["939northpoleradio.com",37],["939theville.com",37],["939xindy.com",37],["93q.com",37],["93wkct.com",37],["93x.com",37],["940wfaw.com",37],["941ksky.com",37],["941thebear.com",37],["941thehits.com",37],["945thedrive.com",37],["945thehawkradio.com",37],["947qdr.com",37],["947wls.com",37],["949kcmo.com",37],["949radiojondeek.com",37],["949starcountry.com",37],["949theoutlaw.com",37],["94rockradio.net",37],["951nashfm.com",37],["951kbby.com",37],["953hlf.com",37],["953thebeach.com",37],["953thescore.com",37],["955bobfm.com",37],["955glo.com",37],["955nashicon.com",37],["955thefan.com",37],["955thevibe.com",37],["957kboy.com",37],["957kpur.com",37],["957nashicon.com",37],["957thevibe.com",37],["957thewolfonline.com",37],["959therocket.com",37],["95sx.com",37],["95wiil.com",37],["95x.com",37],["961bbb.com",37],["961jamz.com",37],["961sox.com",37],["961wsox.com",37],["963nashicon.com",37],["963thezone.com",37],["963wdvd.com",37],["967shinefm.com",37],["969lacaliente.com",37],["969thewolf.com",37],["96key.com",37],["96kzel.com",37],["973eagle.com",37],["973nashfm.com",37],["975kabx.com",37],["975thevibe.com",37],["975wabd.com",37],["979nashfm.com",37],["979espnradio.com",37],["979nashicon.com",37],["979wvok.com",37],["979x.com",37],["97bht.com",37],["97rock.com",37],["980waav.com",37],["980wxlm.com",37],["981thebeat.com",37],["981themax.com",37],["981thevalley.com",37],["983nashicon.com",37],["983thekeg.com",37],["983vibe.com",37],["983wlcs.com",37],["985kissfm.net",37],["989magicfm.com",37],["989thebridge.com",37],["98theticket.com",37],["993kjoy.com",37],["995thejock.com",37],["995thewolf.com",37],["997cyk.com",37],["997cyk.org",37],["997kmjj.com",37],["997themix.com",37],["997wpro.com",37],["997wtn.com",37],["999thebuzz.com",37],["999thefoxrocks.com",37],["999thehawk.com",37],["99x.com",37],["kjmo.com",37],["nashfm100.com",37],["nashfm923krst.com",37],["nashfm1033.com",37],["nashfm1055.com",37],["nashfm929.com",37],["nashfm931.com",37],["nashfm941.com",37],["nashfm949.com",37],["nashfm981.com",37],["nashfmwisconsin.com",37],["nashicon989.com",37],["v100rocks.com",37],["albanymagic.com",37],["alice1077.com",37],["allthehitsb951.com",37],["alt1019.com",37],["alt1049albany.com",37],["alt2k.com",37],["alt923.com",37],["alt98.com",37],["am630.net",37],["amarillosrockstation.com",37],["americanpatriotmedia.com",37],["annarbors107one.com",37],["atlantasrockstation.com",37],["atlsportsx.com",37],["b106fm.com",37],["b1073.com",37],["b95.com",37],["b979.net",37],["b98.com",37],["b985slo.com",37],["b987.com",37],["bakersfieldespn.com",37],["bakersfieldespnsports.com",37],["beach985.com",37],["beachboogieandblues.com",37],["bear104.com",37],["big1013.com",37],["bigcheese1079.com",37],["bigcountry1073.com",37],["bigdawg985.com",37],["bigdog1067.com",37],["bigfrog101.com",37],["bigfroggy1053.com",37],["bigtalk1490.com",37],["blairgarner.com",37],["blazin1023.com",37],["blazin923.com",37],["bloomingtonhits.com",37],["bobfmspringfield.com",37],["bowlinggreensam.com",37],["bull973.com",37],["bxr.com",37],["caperadio1550.com",37],["catcountry.com",37],["catcountry96.com",37],["catcountryvermont.com",37],["cbssports1430.com",37],["cbssportserie.com",37],["cbssportsharrisburg.com",37],["cbssportsradio1430.com",37],["chicothunderheads.com",37],["christmas989.com",37],["ckrv.com",37],["classicfox.com",37],["classichits1033.com",37],["classichitsmy1059.com",37],["classichitswnyq.com",37],["classy100.com",37],["coast1013.com",37],["coast973.com",37],["country105fm.net",37],["countrycountdownusa.com",37],["countrylegends1059.com",37],["countrymi.com",37],["coyote1025.com",37],["cumulusdigital.com",37],["digitalsolutions201.com",37],["e93fm.com",37],["eagle97.com",37],["eagle993.com",37],["easy991.com",37],["ed.fm",37],["elizabethtownradio.com",37],["energy939indy.com",37],["espn1320columbia.com",37],["espn910.com",37],["espnhonolulu.com",37],["espnlouisville.com",37],["espnlv.com",37],["espnradio1280.com",37],["espnradio927.com",37],["espnradio941.com",37],["espnsyracuse.com",37],["espnur.com",37],["espnwestpalm.com",37],["espnwilmington.com",37],["fly92.com",37],["fly923.com",37],["fm102milwaukee.com",37],["fm102one.com",37],["fonzfm.com",37],["forevereaston.com",37],["forevermediayork.com",37],["fox969.com",37],["foxcincinnati.com",37],["foxsportsredding.com",37],["froggy1003.com",37],["froggy101fm.com",37],["froggy981.com",37],["froggy99.net",37],["froggycountry.net",37],["froggyland.com",37],["fuego1029.com",37],["fun1013.com",37],["fun969fm.com",37],["generations1023.com",37],["glory985.com",37],["go106.com",37],["goradioheartland.com",37],["gospel900.com",37],["gulf104.com",37],["heaven1460.com",37],["heaven983.com",37],["hitkicker997.com",37],["hitpage.com",37],["hits931fm.com",37],["hits96.com",37],["hits965.com",37],["hot1005.com",37],["hot100blono.com",37],["hot100nrv.com",37],["hot101.com",37],["hot102.net",37],["hot1033.com",37],["hot1039.com",37],["hot1047fm.com",37],["hot1057.com",37],["hot1063.com",37],["hot1067fm.com",37],["hot1067pa.com",37],["hot1077radio.com",37],["hot92and100.com",37],["hot933hits.com",37],["hot941.com",37],["hot967fm.com",37],["hvradionet.com",37],["i973hits.com",37],["ilovethehits.com",37],["indysmix.com",37],["jammin999fm.com",37],["jamz963.com",37],["jox2fm.com",37],["joxfm.com",37],["k100country.com",37],["k104online.com",37],["k105country.com",37],["k92radio.com",37],["k983.com",37],["kabc.com",37],["kaok.com",37],["kaperadio1550.com",37],["katm.com",37],["katt.com",37],["kbcy.com",37],["kber.com",37],["kboi.com",37],["kbul.com",37],["kbull93.com",37],["kcchiefsradio.com",37],["kcheradio.com",37],["kcmotalkradio.com",37],["kcmxam.com",37],["kennradio.com",37],["kernradio.com",37],["kesn1033.com",37],["key101fm.com",37],["kfru.com",37],["kftx.com",37],["kgfm.com",37],["kgfw.com",37],["kggo.com",37],["kgmo.com",37],["kgoradio.com",37],["khay.com",37],["khfm.com",37],["khfm.org",37],["khit1075.com",37],["khop.com",37],["khvl.com",37],["kiimfm.com",37],["kiss-1031.com",37],["kix1029.com",37],["kix106.com",37],["kix96.com",37],["kizn.com",37],["kjjy.com",37],["kjoy.com",37],["kkcy.com",37],["kkfm.com",37],["kkgb.com",37],["kkgl.com",37],["kkoh.com",37],["klif.com",37],["klik1240.com",37],["klin.com",37],["klur.com",37],["kmaj.com",37],["kmaj1440.com",37],["kmez1029.com",37],["kmjnow.com",37],["knbr.com",37],["knek.com",37],["kobfm.com",37],["kpla.com",37],["kpur107.com",37],["kqfc.com",37],["kqky.com",37],["kqms.com",37],["kqxy.com",37],["krbe.com",37],["krmd.com",37],["krny.com",37],["krrq.com",37],["krush925.com",37],["kruz1033.com",37],["ksam1017.com",37],["kscrhits.com",37],["kscs.com",37],["ksfo.com",37],["kshasta.com",37],["ksks.com",37],["ksmb.com",37],["ktcx.com",37],["ktik.com",37],["ktop1490.com",37],["ktucam.com",37],["kubaradio.com",37],["kubb.com",37],["kugn.com",37],["kuzz.com",37],["kuzzradio.com",37],["kvor.com",37],["kwin.com",37],["kwwr.com",37],["kxel.com",37],["kxzz1580am.com",37],["kyis.com",37],["kykz.com",37],["kzwafm.com",37],["la103.com",37],["laindomable.com",37],["laleync.com",37],["lanuevaomaha.com",37],["lite102.com",37],["literock105fm.com",37],["love105fm.com",37],["lvfoxsports.com",37],["magic1029fm.com",37],["magic1039fm.com",37],["magic1069.com",37],["magic1073.com",37],["magic1073fm.com",37],["magic93fm.com",37],["magic943fm.com",37],["magic979wtrg.com",37],["magic995abq.com",37],["majic97monroe.com",37],["majicspace.com",37],["maverick1023.com",37],["max94one.com",37],["maxrocks.net",37],["mega979.com",37],["mgeradio.com",37],["milwaukeesparty.com",37],["mix103.com",37],["mix1077albany.com",37],["mix965.net",37],["modernrock987.com",37],["montanassuperstation.com",37],["movin993.com",37],["muskegonnashicon.com",37],["my1059.com",37],["my961.com",37],["myblono.com",37],["mycolumbiabasin.com",37],["myfroggy95.com",37],["mykiss973.com",37],["mymagic106.com",37],["mymix1051.com",37],["mymix1061.com",37],["mymix961.com",37],["mystar98.com",37],["nashcountrydaily.com",37],["nashdetroit.com",37],["nashfm1007.com",37],["nashfm1011.com",37],["nashfm1017.com",37],["nashfm1025.com",37],["nashfm1027.com",37],["nashfm1061.com",37],["nashfm1065.com",37],["nashfm923.com",37],["nashfm937.com",37],["nashfm943.com",37],["nashfm951.com",37],["nashfm973.com",37],["nashfm991.com",37],["nashfmgreenbay.com",37],["nashfmsjo.com",37],["nashnightslive.net",37],["nashpensacola.com",37],["ncsportsradio.com",37],["nepasespnradio.com",37],["neuhoffmedia.com",37],["neuhoffmedialafayette.com",37],["newcountry963.com",37],["newsradio1029.com",37],["newsradio1440.com",37],["newsradioflorida.com",37],["newsradiokkob.com",37],["newsserver1.com",37],["newsserver2.com",37],["newsserver3.com",37],["newstalk1030.com",37],["newstalk1290koil.com",37],["newstalk730.com",37],["newstalk987.com",37],["newstalkwsba.com",37],["newswebradiocompany.net",37],["now937.com",37],["nrgmedia.com",37],["nrq.com",37],["og979.com",37],["okiecountry1017.com",37],["oldiesz104.com",37],["ottawaradio.net",37],["pensacolasjet.com",37],["peorias923.com",37],["picklefm.com",37],["pikefm.com",37],["planet1067.com",37],["pmbbroadcasting.com",37],["pmbradio.com",37],["power1021.com",37],["power103.com",37],["power1057.com",37],["power1069fm.com",37],["power923.com",37],["power94radio.com",37],["power955.com",37],["powerhits95.com",37],["powerslc.com",37],["praise1025fm.com",37],["purerock96.com",37],["q1005.com",37],["q1031fm.com",37],["q105.fm",37],["q1055.com",37],["q1061.com",37],["q106dot5.com",37],["q973radio.com",37],["q97country.com",37],["q98fm.com",37],["q997atlanta.com",37],["q99fm.com",37],["radio1039ny.com",37],["radiorockriver.com",37],["radiowoodstock.com",37],["realcountry1280whvr.com",37],["realcountryhv.com",37],["red1031.com",37],["red945.com",37],["rewind1019.com",37],["rickandsasha.com",37],["rock101.net",37],["rock1015.com",37],["rock103albany.com",37],["rock103rocks.com",37],["rock106.net",37],["rock107fm.com",37],["rock108.com",37],["rock945vt.com",37],["rockdaily.com",37],["rocknews.com",37],["rockofsavannah.com",37],["rockofsavannah.net",37],["softrock941.com",37],["southernillinoisnow.com",37],["southernsportstoday.com",37],["sportsanimal920.com",37],["sportsanimalabq.com",37],["sportscapitoldc.com",37],["sportshubtriad.com",37],["sportsradio1270.com",37],["sportsradio1440.com",37],["sportsradio1560.com",37],["sportsradio590am.com",37],["sportsradio740.com",37],["sportsradio967.com",37],["sportsradio970.com",37],["sportsradiobeaumont.com",37],["sportsradioberks.com",37],["sportsradiownml.com",37],["star98.net",37],["starfm1023.com",37],["starsplash.com",37],["stevegormanrocks.com",37],["sunny1031.com",37],["sunny1069fm.com",37],["sunny923.com",37],["sunny983.com",37],["sunnymuskegon.com",37],["supertalk1570.com",37],["sweet985.com",37],["talk104fm.com",37],["talk995.com",37],["talkradio1007.com",37],["tbhpod.com",37],["teammyrtlebeach.com",37],["test107.com",37],["thebear925.com",37],["thebigjab.com",37],["thebigstation93blx.com",37],["theblairgarnershow.com",37],["theconclave.com",37],["thefan1075.com",37],["thefanfm.com",37],["thegame541.com",37],["thehippo.com",37],["thehot1039.com",37],["thenewhotfm.com",37],["thenewpulsefm.com",37],["thepointontheweb.com",37],["therebelrocks.com",37],["therocket951.com",37],["therockstationz93.com",37],["thescore1260.com",37],["thesportsanimal.com",37],["theticket.com",37],["theticket1007.com",37],["theticket102.com",37],["theticket1590.com",37],["theticketmi.com",37],["thetybentlishow.com",37],["thevalley981.com",37],["thewolf1051.com",37],["thewolf951.com",37],["thisisqmusic.com",37],["thunder1073.com",37],["triadsports.com",37],["tuligaradio.com",37],["umpsports.com",37],["v100fm.com",37],["v1033.com",37],["vermilioncountyfirst.com",37],["vermillioncountyfirst.com",37],["w3dcountry.com",37],["w4country.com",37],["wa1a.com",37],["wabcradio.com",37],["walk975.com",37],["walkradio.com",37],["warm1033.com",37],["warm98.com",37],["waysam.com",37],["wbap.com",37],["wbbw.com",37],["wbmq.net",37],["wbnq.com",37],["wbpm929.com",37],["wbpmfm.com",37],["wbwn.com",37],["wcbm.com",37],["wceiradio.com",37],["wcfx.com",37],["wchv.com",37],["wclg.com",37],["wcoapensacola.com",37],["wcpqfm.com",37],["wcpt820.com",37],["wcpt820.net",37],["wcpt820am.com",37],["wcpt820am.net",37],["wcptam.com",37],["wcptam.net",37],["wcptamfm.com",37],["wcptamfm.net",37],["wcptamfm.org",37],["wcpyfm.com",37],["wctk.com",37],["wddoam.com",37],["wden.com",37],["wdml.com",37],["wdst.com",37],["wdst.org",37],["wdzz.com",37],["wedg.com",37],["werkfm.net",37],["werkradio.com",37],["wfasam.com",37],["wfav951.com",37],["wfmd.com",37],["wfms.com",37],["wfnc640am.com",37],["wfre.com",37],["wftw.com",37],["wgh1310.com",37],["wghsolidgold.com",37],["wglx.com",37],["wgni.com",37],["wgow.com",37],["wgowam.com",37],["wgrr.com",37],["whdg.com",37],["wheelz1045.com",37],["whli.com",37],["whrpfm.com",37],["whtt.com",37],["whud.com",37],["wild1029.com",37],["wild1049hd.com",37],["wild1061.com",37],["wild993fm.com",37],["wildcatsradio1290.com",37],["wink104.com",37],["winxfm.com",37],["wiog.com",37],["wiov.com",37],["wiov985.com",37],["wivk.com",37],["wivr1017.com",37],["wizn.com",37],["wjbc.com",37],["wjcw.com",37],["wjez.com",37],["wjjr.net",37],["wjoxam.com",37],["wjr.com",37],["wkav.com",37],["wkbethepoint.com",37],["wkga975.com",37],["wkhx.com",37],["wkmoradio.com",37],["wkol.com",37],["wkrs.com",37],["wkrufm.com",37],["wksm.com",37],["wkydeportes.com",37],["wlaq1410.com",37],["wlav.com",37],["wlbc.com",37],["wlevradio.com",37],["wlkwradio.com",37],["wlok.com",37],["wlsam.com",37],["wlum.com",37],["wlup.com",37],["wlwi.com",37],["wmac-am.com",37],["wmal.com",37],["wmqa.com",37],["wncv.com",37],["wogb.fm",37],["woko.com",37],["womg.com",37],["woodstockbroadcasting.com",37],["woodstockcommunication.com",37],["woodstockradio.net",37],["woodstocktv.net",37],["wovo1063.com",37],["wovofm.com",37],["wqut.com",37],["wqvealbany.com",37],["wrganews.com",37],["wrgm.com",37],["wrlo.com",37],["wrr101.com",37],["wrul.com",37],["wsba910.com",37],["wsfl.com",37],["wsjssports.com",37],["wskz.com",37],["wsyb1380am.com",37],["wtka.com",37],["wtma.com",37],["wtrxsports.com",37],["wttlradio.com",37],["wuuqradio.com",37],["wvel.com",37],["wvli927.com",37],["wvlkam.com",37],["wvnn.com",37],["wwck.com",37],["wwki.com",37],["wwqq101.com",37],["wxfx.com",37],["wxkr.com",37],["wxpkfm.com",37],["wynn1063.com",37],["wzpl.com",37],["wzyp.com",37],["wzzl.com",37],["x1051kc.com",37],["x95radio.com",37],["xs961.com",37],["xtrasports1300.com",37],["y-103.com",37],["y101hits.com",37],["y102montgomery.com",37],["y1065.com",37],["yesfm.net",37],["z1023online.com",37],["z1029.com",37],["z1075.com",37],["z937.com",37],["z93jamz.com",37],["z96.com",37],["z971.com",37],["zone1150.com",37],["zrock103.com",37],["zrockfm.com",37],["windows101tricks.com",38],["waaw.tv",39],["hqq.tv",[39,40]],["tv.verizon.com",[39,146,147]],["fontsfree.pro",41],["strangermeetup.com",42],["radarbox.com",43],["adslayuda.com",44],["avdelphi.com",45],["ds2play.com",47],["ds2video.com",47],["d0o0d.com",47],["vidembed.me",47],["mzzcloud.life",47],["videobot.stream",47],["justswallows.net",47],["onscreensvideo.com",47],["katerionews.com",47],["telenovelas-turcas.com.es",47],["kmo.to",47],["jeniusplay.com",[47,122]],["4x4earth.com",48],["jootc.com",[49,50]],["photobank.mainichi.co.jp",51],["tbs.co.jp",52],["rottentomatoes.com",53],["sovetromantica.com",54],["longecity.org",55],["magnet-novels.com",56],["torrentlawyer.com",[56,61,66,67]],["fruit01.xyz",57],["lyricstranslate.com",58],["hardcoregames.ca",59],["allsmo.com",59],["themosvagas.com.br",59],["urbharat.xyz",59],["sportnews.to",[59,69]],["2embed.ru",60],["sbasian.pro",60],["miraculous.to",[60,83]],["vtplayer.net",60],["webnovel.com",60],["pepperlive.info",60],["unbiasedsenseevent.com",60],["maxt.church",60],["cool-etv.net",60],["vgembed.com",[60,116]],["photopea.com",60],["szkolawohyn.pl",61],["virpe.cc",61],["gmarket.co.kr",[61,67]],["paesifantasma.it",62],["talpo.it",62],["quora.com",63],["gmx.net",65],["hoca4u.com",67],["youmath.it",68],["renditepassive.net",[70,71,72,73,74]],["360doc.com",75],["logonews.cn",76],["spanishdict.com",77],["thetodaypost.com",[78,86,90]],["cloudcomputingtopics.net",78],["0123movies.ch",[78,86,90,120]],["epn.bz",79],["affbank.com",80],["gardenia.net",[81,82]],["meteoblue.com",84],["novelpia.com",[85,86]],["blueraindrops.com",88],["animecruzers.com",89],["descargatepelis.com",90],["news.ntv.co.jp",90],["bongdaplus.vn",90],["bestjavporn.com",91],["mm9841.cc",91],["ggwash.org",[92,93]],["watch.lonelil.com",95],["cinegrabber.com",96],["layarkacaxxi.icu",97],["readawrite.com",[98,99,100,101,102,103,104]],["morosedog.gitlab.io",105],["indianhealthyrecipes.com",107],["tarnkappe.info",108],["secondlifetranslations.com",[109,110]],["heavyfetish.com",111],["joysound.com",[112,113,114]],["colors.sonicthehedgehog.com",[114,117]],["leakedzone.com",118],["mehoathinh2.com",119],["powerline.io",121],["bestx.stream",123],["moviesapi.club",123],["watchx.top",123],["enduro-mtb.com",124],["kukaj.io",125],["animesaga.in",126],["animesuge.to",127],["hdtoday.so",127],["hurawatch.bz",127],["vid2faf.site",127],["lazyadmin.nl",128],["thejakartapost.com",129],["buktube.com",130],["fullxh.com",130],["megaxh.com",130],["movingxh.world",130],["seexh.com",130],["taoxh.life",130],["unlockxh4.com",130],["xhaccess.com",130],["xhadult2.com",130],["xhadult3.com",130],["xhadult4.com",130],["xhadult5.com",130],["xhamster46.com",130],["xhbig.com",130],["xhday.com",130],["xhday1.com",130],["xhmoon5.com",130],["xhplanet1.com",130],["xhplanet2.com",130],["xhreal2.com",130],["xhreal3.com",130],["xhtab2.com",130],["xhtree.com",130],["xhvictory.com",130],["xhwebsite.com",130],["xhwebsite2.com",130],["xhwide1.com",130],["marinetraffic.com",131],["ymovies.vip",132],["aniwatch.to",132],["aniwatchtv.to",132],["megacloud.tv",132],["rapid-cloud.co",132],["rabbitstream.net",132],["pupupul.site",132],["netuplayer.top",132],["stbnetu.xyz",132],["thotsbay.tv",132],["vipstreams.in",132],["freewatchtv.top",132],["mixstreams.top",132],["tvfreemium.top",132],["abysscdn.com",132],["animenewsnetwork.com",133],["androidpolice.com",134],["makeuseof.com",134],["movieweb.com",134],["xda-developers.com",134],["thegamer.com",134],["cbr.com",134],["gamerant.com",134],["screenrant.com",134],["howtogeek.com",134],["thethings.com",134],["simpleflying.com",134],["dualshockers.com",134],["digminecraft.com",135],["arras.io",136],["arras.netlify.app",136],["arrax.io",136],["how-to-pc.info",137],["programming-link.info",137],["maxroll.gg",138],["tv.bdix.app",139],["hitokageproduction.com",140],["dngz.net",142],["vnexpress.net",143],["archon.gg",144],["einthusan.tv",145]]);

const entitiesMap = new Map([["earnload",34],["hindipix",[39,40]],["vidsrc",39],["braflix",[39,146,147]],["doods",47],["videovard",47],["123movies",60],["brainly",87],["ask4movie",[94,95]],["bluemediafile",115],["aniwave",127],["anix",127],["vidplay",127],["hamsterix",130],["xhamster",130],["xhamster1",130],["xhamster10",130],["xhamster11",130],["xhamster12",130],["xhamster13",130],["xhamster14",130],["xhamster15",130],["xhamster16",130],["xhamster17",130],["xhamster18",130],["xhamster19",130],["xhamster20",130],["xhamster2",130],["xhamster3",130],["xhamster4",130],["xhamster42",130],["xhamster5",130],["xhamster7",130],["xhamster8",130],["hianime",132],["netu",132],["gdplayertv",132]]);

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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
