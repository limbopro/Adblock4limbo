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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetTimeoutIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["ai_adb"],["match","100"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["nextFunction"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["offset"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["1e3*"],["current.children"],["adStatus"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["setAntiAb"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x","5000"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,9,10]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,132]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,156]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,270]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["economictimes.indiatimes.com",5],["m.timesofindia.com",6],["timesofindia.indiatimes.com",6],["youmath.it",6],["redensarten-index.de",6],["lesoir.be",6],["electriciansforums.net",6],["keralatelecom.info",6],["betaseries.com",6],["universegunz.net",6],["happypenguin.altervista.org",6],["everyeye.it",6],["bluedrake42.com",6],["streamservicehd.click",6],["supermarioemulator.com",6],["futbollibrehd.com",6],["newsrade.com",6],["eska.pl",6],["eskarock.pl",6],["voxfm.pl",6],["mathaeser.de",6],["freethesaurus.com",8],["thefreedictionary.com",8],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["dongknows.com",10],["traderepublic.community",10],["babia.to",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["mbc2.live",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["mangapt.com",10],["seriesperu.com",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,269]],["topsporter.net",[10,269]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["hq-links.com",10],["mobilkulup.com",10],["esopress.com",10],["rttar.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["surfsees.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["blackhatworld.com",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,85]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["keephealth.info",13],["afreesms.com",14],["kinoger.re",14],["laksa19.github.io",14],["javcl.com",14],["tvlogy.to",14],["live.dragaoconnect.net",14],["beststremo.com",14],["seznam.cz",14],["seznamzpravy.cz",14],["xerifetech.com",14],["wallpapershome.com",16],["ville-ideale.fr",17],["calciomercato.it",18],["calciomercato.com",19],["bersamatekno.com",19],["hotpornfile.org",19],["coolsoft.altervista.org",19],["hackedonlinegames.com",19],["jkoding.xyz",19],["cheater.ninja",19],["settlersonlinemaps.com",19],["magdownload.org",19],["kpkuang.org",19],["shareus.site",19],["crypto4yu.com",19],["faucetwork.space",19],["thenightwithoutthedawn.blogspot.com",19],["entutes.com",19],["claimlite.club",19],["bazadecrypto.com",[19,315]],["whosampled.com",20],["imgkings.com",21],["pornvideotop.com",21],["xstory-fr.com",21],["krotkoosporcie.pl",21],["anghami.com",22],["wired.com",23],["tutele.sx",24],["footyhunter3.xyz",24],["magesypro.pro",[25,26]],["audiotools.pro",26],["magesy.blog",[26,27,28]],["robloxscripts.com",27],["libreriamo.it",27],["postazap.com",27],["medebooks.xyz",27],["tutorials-technology.info",27],["mashtips.com",27],["marriedgames.com.br",27],["4allprograms.me",27],["nurgsm.com",27],["certbyte.com",27],["plugincrack.com",27],["gamingdeputy.com",27],["freewebcart.com",27],["katestube.com",29],["short.pe",29],["footystreams.net",29],["seattletimes.com",30],["yiv.com",31],["globalrph.com",32],["e-glossa.it",33],["freewebscript.com",34],["webcheats.com.br",35],["gala.fr",37],["gentside.com",37],["geo.fr",37],["hbrfrance.fr",37],["nationalgeographic.fr",37],["ohmymag.com",37],["serengo.net",37],["vsd.fr",37],["updato.com",[38,56]],["methbox.com",39],["daizurin.com",39],["pendekarsubs.us",39],["dreamfancy.org",39],["rysafe.blogspot.com",39],["techacode.com",39],["toppng.com",39],["th-world.com",39],["avjamack.com",39],["avjamak.net",39],["tickzoo.tv",40],["dlhd.sx",41],["embedstream.me",41],["yts-subs.net",41],["cnnamador.com",42],["nudecelebforum.com",43],["pronpic.org",44],["thewebflash.com",45],["discordfastfood.com",45],["xup.in",45],["popularmechanics.com",46],["op.gg",47],["lequipe.fr",48],["comunidadgzone.es",49],["mp3fy.com",49],["lebensmittelpraxis.de",49],["ebookdz.com",49],["forum-pokemon-go.fr",49],["praxis-jugendarbeit.de",49],["gdrivez.xyz",49],["dictionnaire-medical.net",49],["cle0desktop.blogspot.com",49],["up-load.io",49],["direct-link.net",49],["direkt-wissen.com",49],["keysbrasil.blogspot.com",49],["hotpress.info",49],["turkleech.com",49],["anibatch.me",49],["anime-i.com",49],["plex-guide.de",49],["healthtune.site",49],["gewinde-normen.de",49],["tucinehd.com",49],["jellynote.com",50],["eporner.com",52],["pornbimbo.com",53],["allmonitors24.com",53],["4j.com",53],["avoiderrors.com",54],["cgtips.org",[54,214]],["sitarchive.com",54],["livenewsof.com",54],["topnewsshow.com",54],["gatcha.org",54],["empregoestagios.com",54],["everydayonsales.com",54],["kusonime.com",54],["aagmaal.xyz",54],["suicidepics.com",54],["codesnail.com",54],["codingshiksha.com",54],["graphicux.com",54],["asyadrama.com",54],["bitcoinegypt.news",54],["citychilli.com",54],["talkjarvis.com",54],["hdmotori.it",55],["femdomtb.com",57],["camhub.cc",57],["bobs-tube.com",57],["ru-xvideos.me",57],["pornfd.com",57],["popno-tour.net",57],["molll.mobi",57],["watchmdh.to",57],["camwhores.tv",57],["elfqrin.com",58],["satcesc.com",59],["apfelpatient.de",59],["lusthero.com",60],["m2list.com",61],["embed.nana2play.com",61],["elahmad.com",61],["dofusports.xyz",61],["dallasnews.com",62],["lnk.news",63],["lnk.parts",63],["efukt.com",64],["wendycode.com",64],["springfieldspringfield.co.uk",65],["porndoe.com",66],["smsget.net",[67,68]],["kjanime.net",69],["gioialive.it",70],["classicreload.com",71],["scriptzhub.com",71],["chicoer.com",72],["bostonherald.com",72],["dailycamera.com",72],["maxcheaters.com",73],["rbxoffers.com",73],["mhn.quest",73],["leagueofgraphs.com",73],["hieunguyenphoto.com",73],["texteditor.nsspot.net",73],["postimees.ee",73],["police.community",73],["gisarea.com",73],["schaken-mods.com",73],["theclashify.com",73],["newscon.org",73],["txori.com",73],["olarila.com",73],["deletedspeedstreams.blogspot.com",73],["schooltravelorganiser.com",73],["xhardhempus.net",73],["sportsplays.com",74],["deinesexfilme.com",76],["einfachtitten.com",76],["halloporno.com",76],["herzporno.com",76],["lesbenhd.com",76],["milffabrik.com",[76,244]],["porn-monkey.com",76],["porndrake.com",76],["pornhubdeutsch.net",76],["pornoaffe.com",76],["pornodavid.com",76],["pornoente.tv",[76,244]],["pornofisch.com",76],["pornofelix.com",76],["pornohammer.com",76],["pornohelm.com",76],["pornoklinge.com",76],["pornotom.com",[76,244]],["pornotommy.com",76],["pornovideos-hd.com",76],["pornozebra.com",[76,244]],["xhamsterdeutsch.xyz",76],["xnxx-sexfilme.com",76],["zerion.cc",76],["letribunaldunet.fr",77],["vladan.fr",77],["live-tv-channels.org",78],["eslfast.com",79],["freegamescasual.com",80],["tcpvpn.com",81],["oko.sh",81],["timesnownews.com",81],["timesnowhindi.com",81],["timesnowmarathi.com",81],["zoomtventertainment.com",81],["xxxuno.com",82],["sholah.net",83],["2rdroid.com",83],["bisceglielive.it",84],["pandajogosgratis.com.br",86],["5278.cc",87],["altblogger.net",88],["hl-live.de",88],["wohnmobilforum.de",88],["nulledbear.com",88],["satoshi-win.xyz",88],["encurtandourl.com",[88,149]],["freedeepweb.blogspot.com",88],["freesoft.id",88],["zcteam.id",88],["www-daftarharga.blogspot.com",88],["ear-phone-review.com",88],["telefullenvivo.com",88],["listatv.pl",88],["ltc-faucet.xyz",88],["coin-profits.xyz",88],["relampagomovies.com",88],["tonspion.de",90],["duplichecker.com",91],["plagiarismchecker.co",91],["plagiarismdetector.net",91],["searchenginereports.net",91],["giallozafferano.it",92],["autojournal.fr",92],["autoplus.fr",92],["sportauto.fr",92],["linkspaid.com",93],["proxydocker.com",93],["beeimg.com",[94,95]],["emturbovid.com",95],["ftlauderdalebeachcam.com",96],["ftlauderdalewebcam.com",96],["juneauharborwebcam.com",96],["keywestharborwebcam.com",96],["kittycatcam.com",96],["mahobeachcam.com",96],["miamiairportcam.com",96],["morganhillwebcam.com",96],["njwildlifecam.com",96],["nyharborwebcam.com",96],["paradiseislandcam.com",96],["pompanobeachcam.com",96],["portbermudawebcam.com",96],["portcanaveralwebcam.com",96],["portevergladeswebcam.com",96],["portmiamiwebcam.com",96],["portnywebcam.com",96],["portnassauwebcam.com",96],["portstmaartenwebcam.com",96],["portstthomaswebcam.com",96],["porttampawebcam.com",96],["sxmislandcam.com",96],["gearingcommander.com",96],["themes-dl.com",96],["badassdownloader.com",96],["badasshardcore.com",96],["badassoftcore.com",96],["nulljungle.com",96],["teevee.asia",96],["otakukan.com",96],["generate.plus",98],["calculate.plus",98],["avcesar.com",99],["audiotag.info",100],["tudigitale.it",101],["ibcomputing.com",102],["eodev.com",103],["legia.net",104],["acapellas4u.co.uk",105],["streamhentaimovies.com",106],["konten.co.id",107],["diariodenavarra.es",108],["scripai.com",108],["myfxbook.com",108],["whatfontis.com",108],["xiaomifans.pl",109],["eletronicabr.com",109],["optifine.net",110],["luzernerzeitung.ch",111],["tagblatt.ch",111],["spellcheck.net",112],["spellchecker.net",112],["spellweb.com",112],["ableitungsrechner.net",113],["alternet.org",114],["gourmetsupremacy.com",114],["imtranslator.net",115],["shrib.com",116],["pandafiles.com",117],["vidia.tv",[117,138]],["hortonanderfarom.blogspot.com",117],["clarifystraight.com",117],["tutelehd3.xyz",118],["mega4upload.com",118],["coolcast2.com",118],["techclips.net",118],["earthquakecensus.com",118],["footyhunter.lol",118],["gamerarcades.com",118],["poscitech.click",118],["starlive.stream",118],["utopianwilderness.com",118],["wecast.to",118],["sportbar.live",118],["lordchannel.com",118],["play-old-pc-games.com",119],["tunovelaligera.com",120],["tapchipi.com",120],["cuitandokter.com",120],["tech-blogs.com",120],["cardiagn.com",120],["dcleakers.com",120],["esgeeks.com",120],["pugliain.net",120],["uplod.net",120],["worldfreeware.com",120],["fikiri.net",120],["myhackingworld.com",120],["phoenixfansub.com",120],["freecourseweb.com",121],["devcourseweb.com",121],["coursewikia.com",121],["courseboat.com",121],["coursehulu.com",121],["lne.es",125],["pornult.com",126],["webcamsdolls.com",126],["bitcotasks.com",[126,171]],["adsy.pw",126],["playstore.pw",126],["exactpay.online",126],["thothd.to",126],["proplanta.de",127],["hydrogenassociation.org",128],["ludigames.com",128],["sportitalialive.com",128],["tii.la",128],["made-by.org",128],["xenvn.com",128],["worldtravelling.com",128],["igirls.in",128],["technichero.com",128],["roshiyatech.my.id",128],["24sport.stream",128],["aeroxplorer.com",128],["mad4wheels.com",129],["logi.im",129],["emailnator.com",129],["textograto.com",130],["voyageforum.com",131],["hmc-id.blogspot.com",131],["jemerik.com",131],["myabandonware.com",131],["chatta.it",133],["ketubanjiwa.com",134],["nsfw247.to",135],["funzen.net",135],["fighter.stream",135],["ilclubdellericette.it",135],["hubstream.in",135],["extremereportbot.com",136],["getintopc.com",137],["qoshe.com",139],["lowellsun.com",140],["mamadu.pl",140],["dobrapogoda24.pl",140],["motohigh.pl",140],["namasce.pl",140],["ultimate-catch.eu",141],["cpopchanelofficial.com",142],["creditcardgenerator.com",143],["creditcardrush.com",143],["bostoncommons.net",143],["thejobsmovie.com",143],["livsavr.co",143],["nilopolisonline.com.br",144],["mesquitaonline.com",144],["yellowbridge.com",144],["socialgirls.im",145],["yaoiotaku.com",146],["camhub.world",147],["moneyhouse.ch",148],["ihow.info",149],["filesus.com",149],["sturls.com",149],["re.two.re",149],["turbo1.co",149],["cartoonsarea.xyz",149],["valeronevijao.com",150],["cigarlessarefy.com",150],["figeterpiazine.com",150],["yodelswartlike.com",150],["generatesnitrosate.com",150],["crownmakermacaronicism.com",150],["chromotypic.com",150],["gamoneinterrupted.com",150],["metagnathtuggers.com",150],["wolfdyslectic.com",150],["rationalityaloelike.com",150],["sizyreelingly.com",150],["simpulumlamerop.com",150],["urochsunloath.com",150],["monorhinouscassaba.com",150],["counterclockwisejacky.com",150],["35volitantplimsoles5.com",150],["scatch176duplicities.com",150],["antecoxalbobbing1010.com",150],["boonlessbestselling244.com",150],["cyamidpulverulence530.com",150],["guidon40hyporadius9.com",150],["449unceremoniousnasoseptal.com",150],["19turanosephantasia.com",150],["30sensualizeexpression.com",150],["321naturelikefurfuroid.com",150],["745mingiestblissfully.com",150],["availedsmallest.com",150],["greaseball6eventual20.com",150],["toxitabellaeatrebates306.com",150],["20demidistance9elongations.com",150],["audaciousdefaulthouse.com",150],["fittingcentermondaysunday.com",150],["fraudclatterflyingcar.com",150],["launchreliantcleaverriver.com",150],["matriculant401merited.com",150],["realfinanceblogcenter.com",150],["reputationsheriffkennethsand.com",150],["telyn610zoanthropy.com",150],["tubelessceliolymph.com",150],["tummulerviolableness.com",150],["un-block-voe.net",150],["v-o-e-unblock.com",150],["voe-un-block.com",150],["voeun-block.net",150],["voeunbl0ck.com",150],["voeunblck.com",150],["voeunblk.com",150],["voeunblock.com",150],["voeunblock1.com",150],["voeunblock2.com",150],["voeunblock3.com",150],["agefi.fr",151],["cariskuy.com",152],["letras2.com",152],["yusepjaelani.blogspot.com",153],["letras.mus.br",154],["mtlurb.com",155],["port.hu",156],["acdriftingpro.com",156],["flight-report.com",156],["forumdz.com",156],["abandonmail.com",156],["flmods.com",156],["zilinak.sk",156],["projectfreetv.stream",156],["hotdesimms.com",156],["pdfaid.com",156],["mconverter.eu",156],["dzeko11.net",[156,269]],["mail.com",156],["expresskaszubski.pl",156],["moegirl.org.cn",156],["onemanhua.com",157],["t3n.de",158],["allindiaroundup.com",159],["vectorizer.io",160],["smgplaza.com",160],["onehack.us",160],["thapcam.net",160],["thefastlaneforum.com",161],["trade2win.com",162],["gmodleaks.com",162],["modagamers.com",163],["freemagazines.top",163],["straatosphere.com",163],["nullpk.com",163],["adslink.pw",163],["downloadudemy.com",163],["picgiraffe.com",163],["weadown.com",163],["freepornsex.net",163],["nurparatodos.com.ar",163],["librospreuniversitariospdf.blogspot.com",164],["msdos-games.com",164],["forexeen.us",164],["khsm.io",164],["webcreator-journal.com",164],["nu6i-bg-net.com",164],["routech.ro",165],["hokej.net",165],["turkmmo.com",166],["palermotoday.it",167],["baritoday.it",167],["trentotoday.it",167],["agrigentonotizie.it",167],["anconatoday.it",167],["arezzonotizie.it",167],["avellinotoday.it",167],["bresciatoday.it",167],["brindisireport.it",167],["casertanews.it",167],["cataniatoday.it",167],["cesenatoday.it",167],["chietitoday.it",167],["forlitoday.it",167],["frosinonetoday.it",167],["genovatoday.it",167],["ilpescara.it",167],["ilpiacenza.it",167],["latinatoday.it",167],["lecceprima.it",167],["leccotoday.it",167],["livornotoday.it",167],["messinatoday.it",167],["milanotoday.it",167],["modenatoday.it",167],["monzatoday.it",167],["novaratoday.it",167],["padovaoggi.it",167],["parmatoday.it",167],["perugiatoday.it",167],["pisatoday.it",167],["quicomo.it",167],["ravennatoday.it",167],["reggiotoday.it",167],["riminitoday.it",167],["romatoday.it",167],["salernotoday.it",167],["sondriotoday.it",167],["sportpiacenza.it",167],["ternitoday.it",167],["today.it",167],["torinotoday.it",167],["trevisotoday.it",167],["triesteprima.it",167],["udinetoday.it",167],["veneziatoday.it",167],["vicenzatoday.it",167],["thumpertalk.com",168],["arkcod.org",168],["facciabuco.com",169],["softx64.com",170],["thelayoff.com",171],["blog.cryptowidgets.net",171],["blog.insurancegold.in",171],["blog.wiki-topia.com",171],["blog.coinsvalue.net",171],["blog.cookinguide.net",171],["blog.freeoseocheck.com",171],["blog.makeupguide.net",171],["blog.carstopia.net",171],["blog.carsmania.net",171],["shorterall.com",171],["blog24.me",171],["maxstream.video",171],["maxlinks.online",171],["tvepg.eu",171],["pstream.net",172],["dailymaverick.co.za",173],["apps2app.com",174],["cheatermad.com",175],["fm-arena.com",176],["tradersunion.com",177],["tandess.com",178],["faqwiki.us",179],["sonixgvn.net",179],["spontacts.com",180],["dankmemer.lol",181],["apkmoddone.com",182],["getexploits.com",183],["fplstatistics.com",184],["enit.in",185],["financerites.com",185],["fadedfeet.com",186],["homeculina.com",186],["ineedskin.com",186],["kenzo-flowertag.com",186],["lawyex.co",186],["mdn.lol",186],["bitzite.com",187],["coingraph.us",188],["impact24.us",188],["my-code4you.blogspot.com",189],["vrcmods.com",190],["osuskinner.com",190],["osuskins.net",190],["pentruea.com",[191,192]],["mchacks.net",193],["why-tech.it",194],["compsmag.com",195],["tapetus.pl",196],["gaystream.online",197],["bembed.net",197],["embedv.net",197],["fslinks.org",197],["v6embed.xyz",197],["vgplayer.xyz",197],["vid-guard.com",197],["autoroad.cz",198],["brawlhalla.fr",198],["tecnobillo.com",198],["sexcamfreeporn.com",199],["breatheheavy.com",200],["wenxuecity.com",201],["key-hub.eu",202],["fabioambrosi.it",203],["tattle.life",204],["emuenzen.de",204],["terrylove.com",204],["mynet.com",205],["cidade.iol.pt",206],["fantacalcio.it",207],["hentaifreak.org",208],["hypebeast.com",209],["krankheiten-simulieren.de",210],["catholic.com",211],["ad-doge.com",212],["3dmodelshare.org",213],["gourmetscans.net",214],["techinferno.com",215],["ibeconomist.com",216],["bookriot.com",217],["purposegames.com",218],["schoolcheats.net",218],["globo.com",219],["latimes.com",219],["claimrbx.gg",220],["perelki.net",221],["vpn-anbieter-vergleich-test.de",222],["livingincebuforums.com",223],["paperzonevn.com",224],["alltechnerd.com",225],["malaysianwireless.com",226],["erinsakura.com",227],["infofuge.com",227],["freejav.guru",227],["novelmultiverse.com",227],["fritidsmarkedet.dk",228],["maskinbladet.dk",228],["15min.lt",229],["lewdninja.com",230],["lewd.ninja",230],["baddiehub.com",231],["mr9soft.com",232],["21porno.com",233],["adult-sex-gamess.com",234],["hentaigames.app",234],["mobilesexgamesx.com",234],["mysexgamer.com",234],["porngameshd.com",234],["sexgamescc.com",234],["xnxx-sex-videos.com",234],["f2movies.to",235],["freeporncave.com",236],["tubsxxx.com",237],["pornojenny.com",238],["subtitle.one",239],["manga18fx.com",240],["freebnbcoin.com",240],["sextvx.com",241],["studydhaba.com",242],["freecourse.tech",242],["victor-mochere.com",242],["papunika.com",242],["mobilanyheter.net",242],["prajwaldesai.com",[242,261]],["ftuapps.dev",242],["muztext.com",243],["pornohans.com",244],["nursexfilme.com",244],["pornohirsch.net",244],["xhamster-sexvideos.com",244],["pornoschlange.com",244],["hdpornos.net",244],["gutesexfilme.com",244],["short1.site",244],["zona-leros.com",244],["charbelnemnom.com",245],["simplebits.io",246],["online-fix.me",247],["gamersdiscussionhub.com",248],["owlzo.com",249],["q1003.com",250],["blogpascher.com",251],["testserver.pro",252],["lifestyle.bg",252],["money.bg",252],["news.bg",252],["topsport.bg",252],["webcafe.bg",252],["mgnet.xyz",253],["advertiserandtimes.co.uk",254],["xvideos2020.me",255],["111.90.159.132",256],["techsolveprac.com",257],["joomlabeginner.com",258],["largescaleforums.com",259],["dubznetwork.com",260],["mundodonghua.com",260],["hentaidexy.com",262],["code2care.org",263],["xxxxsx.com",265],["ngontinh24.com",266],["panel.freemcserver.net",267],["idevicecentral.com",268],["zona11.com",269],["scsport.live",269],["mangacrab.com",271],["idnes.cz",272],["viefaucet.com",273],["cloud-computing-central.com",274],["afk.guide",275],["businessnamegenerator.com",276],["derstandard.at",277],["derstandard.de",277],["rocketnews24.com",278],["soranews24.com",278],["youpouch.com",278],["ilsole24ore.com",279],["ipacrack.com",280],["hentaiporn.one",281],["infokik.com",282],["daemonanime.net",283],["daemon-hentai.com",283],["deezer.com",284],["fosslinux.com",285],["shrdsk.me",286],["examword.com",287],["sempreupdate.com.br",287],["tribuna.com",288],["trendsderzukunft.de",289],["gal-dem.com",289],["lostineu.eu",289],["oggitreviso.it",289],["speisekarte.de",289],["mixed.de",289],["lightnovelspot.com",[290,291]],["lightnovelworld.com",[290,291]],["novelpub.com",[290,291]],["webnovelpub.com",[290,291]],["mail.yahoo.com",292],["hwzone.co.il",293],["nammakalvi.com",294],["javmoon.me",295],["c2g.at",296],["terafly.me",296],["elamigos-games.com",296],["elamigos-games.net",296],["dktechnicalmate.com",297],["recipahi.com",297],["converter-btc.world",297],["kaystls.site",298],["aquarius-horoscopes.com",299],["cancer-horoscopes.com",299],["dubipc.blogspot.com",299],["echoes.gr",299],["engel-horoskop.de",299],["freegames44.com",299],["fuerzasarmadas.eu",299],["gemini-horoscopes.com",299],["jurukunci.net",299],["krebs-horoskop.com",299],["leo-horoscopes.com",299],["maliekrani.com",299],["nklinks.click",299],["ourenseando.es",299],["pisces-horoscopes.com",299],["radio-en-direct.fr",299],["sagittarius-horoscopes.com",299],["scorpio-horoscopes.com",299],["singlehoroskop-loewe.de",299],["skat-karten.de",299],["skorpion-horoskop.com",299],["taurus-horoscopes.com",299],["the1security.com",299],["torrentmovies.online",299],["virgo-horoscopes.com",299],["zonamarela.blogspot.com",299],["yoima.hatenadiary.com",299],["vpntester.org",300],["watchhentai.net",301],["japscan.lol",302],["digitask.ru",303],["tempumail.com",304],["sexvideos.host",305],["10alert.com",307],["cryptstream.de",308],["nydus.org",308],["techhelpbd.com",309],["fapdrop.com",310],["cellmapper.net",311],["hdrez.com",312],["youwatch-serie.com",312],["printablecreative.com",313],["comohoy.com",314],["leak.sx",314],["paste.bin.sx",314],["pornleaks.in",314],["merlininkazani.com",314],["faindx.com",316],["j91.asia",317],["jeniusplay.com",318],["indianyug.com",319],["rgb.vn",319],["needrom.com",320],["criptologico.com",321],["megadrive-emulator.com",322],["eromanga-show.com",323],["hentai-one.com",323],["hentaipaw.com",323],["10minuteemails.com",324],["luxusmail.org",324],["w3cub.com",325],["bangpremier.com",326],["nyaa.iss.ink",327],["tnp98.xyz",329],["freepdfcomic.com",330],["memedroid.com",331],["animesync.org",332],["karaoketexty.cz",333],["resortcams.com",334],["mjakmama24.pl",336],["security-demo.extrahop.com",337]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,7]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",6],["eztv",6],["sushi-scan",10],["spigotunlocked",10],["ahmedmode",10],["kissasian",13],["rp5",14],["mma-core",15],["writedroid",19],["yts",24],["720pstream",24],["1stream",24],["magesy",25],["shortzzy",27],["thefmovies",29],["urlcero",36],["totaldebrid",39],["sandrives",39],["oploverz",40],["fxporn69",49],["aliancapes",49],["pouvideo",51],["povvideo",51],["povw1deo",51],["povwideo",51],["powv1deo",51],["powvibeo",51],["powvideo",51],["powvldeo",51],["tubsexer",57],["porno-tour",57],["lenkino",57],["pornomoll",57],["camsclips",57],["m4ufree",61],["telerium",75],["pandafreegames",89],["thoptv",97],["brainly",103],["streameast",118],["thestreameast",118],["daddylivehd",118],["solvetube",122],["hdfilme",123],["pornhub",124],["wcofun",131],["bollyholic",135],["gotxx",149],["turkanime",150],["voe-unblock",150],["khatrimaza",163],["pogolinks",163],["popcornstream",165],["vembed",197],["xhamsterdeutsch",244],["privatemoviez",248],["gmx",264],["lightnovelpub",[290,291]],["camcaps",306],["drivebot",328],["thenextplanet1",329],["autoscout24",335]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setTimeout', needle, delay);
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const reNeedle = safe.patternToRegex(needle);
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( needle === '' && delay === undefined ) {
                safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
                return Reflect.apply(target, thisArg, args);
            }
            let defuse;
            if ( needle !== '' ) {
                defuse = reNeedle.test(a) !== needleNot;
            }
            if ( defuse !== false && delay !== undefined ) {
                defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
            }
            if ( defuse ) {
                args[0] = function(){};
                safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
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
