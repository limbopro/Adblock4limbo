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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["ai_adb"],["match","100"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["nextFunction"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["offset"],["contrformpub"],["trigger","0"],["popup"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["1e3*"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["_0x","1000"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["'])?"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["/adblock|googletag/"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"],["googleFC"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,8,9]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,126]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,150]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,283]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["newsrade.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["freethesaurus.com",7],["thefreedictionary.com",7],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["starleaks.org",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["tinhocdongthap.com",9],["sakarnewz.com",9],["downloadr.in",9],["topcomicporno.com",9],["dongknows.com",9],["traderepublic.community",9],["babia.to",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["mbc2.live",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["mangapt.com",9],["seriesperu.com",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,282]],["topsporter.net",[9,282]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["hq-links.com",9],["mobilkulup.com",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["surfsees.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["blackhatworld.com",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["mediafire.com",10],["wcoanimedub.tv",11],["wcoforever.net",11],["openspeedtest.com",11],["addtobucketlist.com",11],["3dzip.org",[11,80]],["ilmeteo.it",11],["wcoforever.com",11],["comprovendolibri.it",11],["healthelia.com",11],["keephealth.info",12],["afreesms.com",13],["kinoger.re",13],["laksa19.github.io",13],["javcl.com",13],["tvlogy.to",13],["live.dragaoconnect.net",13],["beststremo.com",13],["seznam.cz",13],["seznamzpravy.cz",13],["xerifetech.com",13],["wallpapershome.com",15],["anghami.com",16],["wired.com",17],["tutele.sx",18],["footyhunter3.xyz",18],["magesypro.pro",[19,20]],["audiotools.pro",20],["magesy.blog",[20,21,22]],["robloxscripts.com",21],["libreriamo.it",21],["postazap.com",21],["medebooks.xyz",21],["tutorials-technology.info",21],["mashtips.com",21],["marriedgames.com.br",21],["4allprograms.me",21],["nurgsm.com",21],["certbyte.com",21],["plugincrack.com",21],["gamingdeputy.com",21],["freewebcart.com",21],["katestube.com",23],["short.pe",23],["footystreams.net",23],["seattletimes.com",24],["bestgames.com",25],["yiv.com",25],["globalrph.com",26],["e-glossa.it",27],["webcheats.com.br",28],["gala.fr",30],["gentside.com",30],["geo.fr",30],["hbrfrance.fr",30],["nationalgeographic.fr",30],["ohmymag.com",30],["serengo.net",30],["vsd.fr",30],["updato.com",[31,48]],["methbox.com",32],["daizurin.com",32],["pendekarsubs.us",32],["dreamfancy.org",32],["rysafe.blogspot.com",32],["techacode.com",32],["toppng.com",32],["th-world.com",32],["avjamack.com",32],["avjamak.net",32],["dlhd.sx",33],["embedstream.me",33],["yts-subs.net",33],["cnnamador.com",34],["nudecelebforum.com",35],["pronpic.org",36],["thewebflash.com",37],["discordfastfood.com",37],["xup.in",37],["popularmechanics.com",38],["op.gg",39],["lequipe.fr",40],["comunidadgzone.es",41],["mp3fy.com",41],["lebensmittelpraxis.de",41],["ebookdz.com",41],["forum-pokemon-go.fr",41],["praxis-jugendarbeit.de",41],["gdrivez.xyz",41],["dictionnaire-medical.net",41],["cle0desktop.blogspot.com",41],["up-load.io",41],["direct-link.net",41],["direkt-wissen.com",41],["keysbrasil.blogspot.com",41],["hotpress.info",41],["turkleech.com",41],["anibatch.me",41],["anime-i.com",41],["plex-guide.de",41],["healthtune.site",41],["gewinde-normen.de",41],["tucinehd.com",41],["jellynote.com",42],["eporner.com",44],["pornbimbo.com",45],["allmonitors24.com",45],["4j.com",45],["avoiderrors.com",46],["cgtips.org",[46,228]],["sitarchive.com",46],["livenewsof.com",46],["topnewsshow.com",46],["gatcha.org",46],["empregoestagios.com",46],["everydayonsales.com",46],["kusonime.com",46],["aagmaal.xyz",46],["suicidepics.com",46],["codesnail.com",46],["codingshiksha.com",46],["graphicux.com",46],["asyadrama.com",46],["bitcoinegypt.news",46],["citychilli.com",46],["talkjarvis.com",46],["hdmotori.it",47],["femdomtb.com",49],["camhub.cc",49],["bobs-tube.com",49],["ru-xvideos.me",49],["pornfd.com",49],["popno-tour.net",49],["molll.mobi",49],["watchmdh.to",49],["camwhores.tv",49],["elfqrin.com",50],["satcesc.com",51],["apfelpatient.de",51],["lusthero.com",52],["m2list.com",53],["embed.nana2play.com",53],["elahmad.com",53],["dofusports.xyz",53],["dallasnews.com",54],["lnk.news",55],["lnk.parts",55],["efukt.com",56],["wendycode.com",56],["springfieldspringfield.co.uk",57],["porndoe.com",58],["smsget.net",[59,60]],["kjanime.net",61],["gioialive.it",62],["classicreload.com",63],["scriptzhub.com",63],["hotpornfile.org",64],["coolsoft.altervista.org",64],["hackedonlinegames.com",64],["jkoding.xyz",64],["settlersonlinemaps.com",64],["magdownload.org",64],["kpkuang.org",64],["shareus.site",64],["crypto4yu.com",64],["faucetwork.space",64],["thenightwithoutthedawn.blogspot.com",64],["entutes.com",64],["claimlite.club",64],["bazadecrypto.com",[64,329]],["chicoer.com",65],["bostonherald.com",65],["dailycamera.com",65],["maxcheaters.com",66],["rbxoffers.com",66],["mhn.quest",66],["leagueofgraphs.com",66],["hieunguyenphoto.com",66],["benzinpreis.de",66],["postimees.ee",66],["police.community",66],["gisarea.com",66],["schaken-mods.com",66],["theclashify.com",66],["txori.com",66],["olarila.com",66],["deletedspeedstreams.blogspot.com",66],["schooltravelorganiser.com",66],["xhardhempus.net",66],["sportsplays.com",67],["pornvideotop.com",69],["xstory-fr.com",69],["krotkoosporcie.pl",69],["deinesexfilme.com",70],["einfachtitten.com",70],["halloporno.com",70],["herzporno.com",70],["lesbenhd.com",70],["milffabrik.com",[70,257]],["porn-monkey.com",70],["porndrake.com",70],["pornhubdeutsch.net",70],["pornoaffe.com",70],["pornodavid.com",70],["pornoente.tv",[70,257]],["pornofisch.com",70],["pornofelix.com",70],["pornohammer.com",70],["pornohelm.com",70],["pornoklinge.com",70],["pornotom.com",[70,257]],["pornotommy.com",70],["pornovideos-hd.com",70],["pornozebra.com",[70,257]],["xhamsterdeutsch.xyz",70],["xnxx-sexfilme.com",70],["zerion.cc",70],["letribunaldunet.fr",71],["vladan.fr",71],["live-tv-channels.org",72],["eslfast.com",73],["freegamescasual.com",74],["tcpvpn.com",75],["oko.sh",75],["timesnownews.com",75],["timesnowhindi.com",75],["timesnowmarathi.com",75],["zoomtventertainment.com",75],["tsubasa.im",76],["xxxuno.com",77],["sholah.net",78],["2rdroid.com",78],["bisceglielive.it",79],["pandajogosgratis.com.br",81],["5278.cc",82],["altblogger.net",83],["hl-live.de",83],["wohnmobilforum.de",83],["nulledbear.com",83],["sinnerclownceviri.net",83],["satoshi-win.xyz",83],["encurtandourl.com",[83,143]],["freedeepweb.blogspot.com",83],["freesoft.id",83],["zcteam.id",83],["www-daftarharga.blogspot.com",83],["ear-phone-review.com",83],["telefullenvivo.com",83],["listatv.pl",83],["ltc-faucet.xyz",83],["coin-profits.xyz",83],["relampagomovies.com",83],["tonspion.de",85],["duplichecker.com",86],["plagiarismchecker.co",86],["plagiarismdetector.net",86],["searchenginereports.net",86],["giallozafferano.it",87],["autojournal.fr",87],["autoplus.fr",87],["sportauto.fr",87],["linkspaid.com",88],["proxydocker.com",88],["beeimg.com",[89,90]],["emturbovid.com",90],["findjav.com",90],["mmtv01.xyz",90],["stbturbo.xyz",90],["ftlauderdalebeachcam.com",91],["ftlauderdalewebcam.com",91],["juneauharborwebcam.com",91],["keywestharborwebcam.com",91],["kittycatcam.com",91],["mahobeachcam.com",91],["miamiairportcam.com",91],["morganhillwebcam.com",91],["njwildlifecam.com",91],["nyharborwebcam.com",91],["paradiseislandcam.com",91],["pompanobeachcam.com",91],["portbermudawebcam.com",91],["portcanaveralwebcam.com",91],["portevergladeswebcam.com",91],["portmiamiwebcam.com",91],["portnywebcam.com",91],["portnassauwebcam.com",91],["portstmaartenwebcam.com",91],["portstthomaswebcam.com",91],["porttampawebcam.com",91],["sxmislandcam.com",91],["themes-dl.com",91],["badassdownloader.com",91],["badasshardcore.com",91],["badassoftcore.com",91],["nulljungle.com",91],["teevee.asia",91],["otakukan.com",91],["gearingcommander.com",93],["generate.plus",94],["calculate.plus",94],["avcesar.com",95],["audiotag.info",96],["tudigitale.it",97],["ibcomputing.com",98],["legia.net",99],["acapellas4u.co.uk",100],["streamhentaimovies.com",101],["konten.co.id",102],["diariodenavarra.es",103],["tubereader.me",103],["scripai.com",103],["myfxbook.com",103],["whatfontis.com",103],["xiaomifans.pl",104],["eletronicabr.com",104],["optifine.net",105],["luzernerzeitung.ch",106],["tagblatt.ch",106],["spellcheck.net",107],["spellchecker.net",107],["spellweb.com",107],["ableitungsrechner.net",108],["alternet.org",109],["gourmetsupremacy.com",109],["shrib.com",110],["pandafiles.com",111],["vidia.tv",[111,132]],["hortonanderfarom.blogspot.com",111],["clarifystraight.com",111],["tutelehd3.xyz",112],["mega4upload.com",112],["coolcast2.com",112],["techclips.net",112],["earthquakecensus.com",112],["footyhunter.lol",112],["gamerarcades.com",112],["poscitech.click",112],["starlive.stream",112],["utopianwilderness.com",112],["wecast.to",112],["sportbar.live",112],["lordchannel.com",112],["play-old-pc-games.com",113],["tunovelaligera.com",114],["tapchipi.com",114],["cuitandokter.com",114],["tech-blogs.com",114],["cardiagn.com",114],["dcleakers.com",114],["esgeeks.com",114],["pugliain.net",114],["uplod.net",114],["worldfreeware.com",114],["fikiri.net",114],["myhackingworld.com",114],["phoenixfansub.com",114],["freecourseweb.com",115],["devcourseweb.com",115],["coursewikia.com",115],["courseboat.com",115],["coursehulu.com",115],["lne.es",119],["pornult.com",120],["webcamsdolls.com",120],["bitcotasks.com",[120,165]],["adsy.pw",120],["playstore.pw",120],["exactpay.online",120],["thothd.to",120],["proplanta.de",121],["hydrogenassociation.org",122],["ludigames.com",122],["sportitalialive.com",122],["made-by.org",122],["xenvn.com",122],["worldtravelling.com",122],["igirls.in",122],["technichero.com",122],["roshiyatech.my.id",122],["24sport.stream",122],["aeroxplorer.com",122],["mad4wheels.com",123],["logi.im",123],["emailnator.com",123],["textograto.com",124],["voyageforum.com",125],["hmc-id.blogspot.com",125],["jemerik.com",125],["myabandonware.com",125],["chatta.it",127],["ketubanjiwa.com",128],["nsfw247.to",129],["funzen.net",129],["fighter.stream",129],["ilclubdellericette.it",129],["hubstream.in",129],["extremereportbot.com",130],["getintopc.com",131],["qoshe.com",133],["lowellsun.com",134],["mamadu.pl",134],["dobrapogoda24.pl",134],["motohigh.pl",134],["namasce.pl",134],["ultimate-catch.eu",135],["cpopchanelofficial.com",136],["creditcardgenerator.com",137],["creditcardrush.com",137],["bostoncommons.net",137],["thejobsmovie.com",137],["livsavr.co",137],["nilopolisonline.com.br",138],["mesquitaonline.com",138],["yellowbridge.com",138],["socialgirls.im",139],["yaoiotaku.com",140],["camhub.world",141],["moneyhouse.ch",142],["ihow.info",143],["filesus.com",143],["sturls.com",143],["re.two.re",143],["turbo1.co",143],["cartoonsarea.xyz",143],["valeronevijao.com",144],["cigarlessarefy.com",144],["figeterpiazine.com",144],["yodelswartlike.com",144],["generatesnitrosate.com",144],["crownmakermacaronicism.com",144],["chromotypic.com",144],["gamoneinterrupted.com",144],["metagnathtuggers.com",144],["wolfdyslectic.com",144],["rationalityaloelike.com",144],["sizyreelingly.com",144],["simpulumlamerop.com",144],["urochsunloath.com",144],["monorhinouscassaba.com",144],["counterclockwisejacky.com",144],["35volitantplimsoles5.com",144],["scatch176duplicities.com",144],["antecoxalbobbing1010.com",144],["boonlessbestselling244.com",144],["cyamidpulverulence530.com",144],["guidon40hyporadius9.com",144],["449unceremoniousnasoseptal.com",144],["19turanosephantasia.com",144],["30sensualizeexpression.com",144],["321naturelikefurfuroid.com",144],["745mingiestblissfully.com",144],["availedsmallest.com",144],["greaseball6eventual20.com",144],["toxitabellaeatrebates306.com",144],["20demidistance9elongations.com",144],["audaciousdefaulthouse.com",144],["fittingcentermondaysunday.com",144],["fraudclatterflyingcar.com",144],["launchreliantcleaverriver.com",144],["matriculant401merited.com",144],["realfinanceblogcenter.com",144],["reputationsheriffkennethsand.com",144],["telyn610zoanthropy.com",144],["tubelessceliolymph.com",144],["tummulerviolableness.com",144],["un-block-voe.net",144],["v-o-e-unblock.com",144],["voe-un-block.com",144],["voeun-block.net",144],["voeunbl0ck.com",144],["voeunblck.com",144],["voeunblk.com",144],["voeunblock.com",144],["voeunblock1.com",144],["voeunblock2.com",144],["voeunblock3.com",144],["agefi.fr",145],["cariskuy.com",146],["letras2.com",146],["yusepjaelani.blogspot.com",147],["letras.mus.br",148],["mtlurb.com",149],["port.hu",150],["acdriftingpro.com",150],["flight-report.com",150],["forumdz.com",150],["abandonmail.com",150],["flmods.com",150],["zilinak.sk",150],["projectfreetv.stream",150],["hotdesimms.com",150],["pdfaid.com",150],["mconverter.eu",150],["dzeko11.net",[150,282]],["mail.com",150],["expresskaszubski.pl",150],["moegirl.org.cn",150],["onemanhua.com",151],["t3n.de",152],["allindiaroundup.com",153],["vectorizer.io",154],["smgplaza.com",154],["onehack.us",154],["thapcam.net",154],["thefastlaneforum.com",155],["trade2win.com",156],["modagamers.com",157],["freemagazines.top",157],["straatosphere.com",157],["rule34porn.net",157],["nullpk.com",157],["adslink.pw",157],["downloadudemy.com",157],["picgiraffe.com",157],["weadown.com",157],["freepornsex.net",157],["nurparatodos.com.ar",157],["librospreuniversitariospdf.blogspot.com",158],["msdos-games.com",158],["blocklayer.com",158],["forexeen.us",158],["khsm.io",158],["webcreator-journal.com",158],["nu6i-bg-net.com",158],["routech.ro",159],["hokej.net",159],["turkmmo.com",160],["palermotoday.it",161],["baritoday.it",161],["trentotoday.it",161],["agrigentonotizie.it",161],["anconatoday.it",161],["arezzonotizie.it",161],["avellinotoday.it",161],["bresciatoday.it",161],["brindisireport.it",161],["casertanews.it",161],["cataniatoday.it",161],["cesenatoday.it",161],["chietitoday.it",161],["forlitoday.it",161],["frosinonetoday.it",161],["genovatoday.it",161],["ilpescara.it",161],["ilpiacenza.it",161],["latinatoday.it",161],["lecceprima.it",161],["leccotoday.it",161],["livornotoday.it",161],["messinatoday.it",161],["milanotoday.it",161],["modenatoday.it",161],["monzatoday.it",161],["novaratoday.it",161],["padovaoggi.it",161],["parmatoday.it",161],["perugiatoday.it",161],["pisatoday.it",161],["quicomo.it",161],["ravennatoday.it",161],["reggiotoday.it",161],["riminitoday.it",161],["romatoday.it",161],["salernotoday.it",161],["sondriotoday.it",161],["sportpiacenza.it",161],["ternitoday.it",161],["today.it",161],["torinotoday.it",161],["trevisotoday.it",161],["triesteprima.it",161],["udinetoday.it",161],["veneziatoday.it",161],["vicenzatoday.it",161],["thumpertalk.com",162],["arkcod.org",162],["facciabuco.com",163],["softx64.com",164],["thelayoff.com",165],["manwan.xyz",165],["blog.coinsrise.net",165],["blog.cryptowidgets.net",165],["blog.insurancegold.in",165],["blog.wiki-topia.com",165],["blog.coinsvalue.net",165],["blog.cookinguide.net",165],["blog.freeoseocheck.com",165],["blog.makeupguide.net",165],["blog.carstopia.net",165],["blog.carsmania.net",165],["shorterall.com",165],["blog24.me",165],["maxstream.video",165],["maxlinks.online",165],["tvepg.eu",165],["pstream.net",166],["dailymaverick.co.za",167],["apps2app.com",168],["cheatermad.com",169],["ville-ideale.fr",170],["eodev.com",171],["tickzoo.tv",172],["fm-arena.com",173],["tradersunion.com",174],["tandess.com",175],["faqwiki.us",176],["sonixgvn.net",176],["spontacts.com",177],["dankmemer.lol",178],["apkmoddone.com",179],["getexploits.com",180],["fplstatistics.com",181],["breitbart.com",182],["salidzini.lv",183],["choosingnothing.com",184],["cryptorank.io",[185,186]],["th.gl",187],["4kwebplay.xyz",188],["qqwebplay.xyz",188],["viwlivehdplay.ru",188],["molbiotools.com",189],["vods.tv",190],["18xxx.xyz",191],["raidrush.net",192],["xnxxcom.xyz",193],["videzz.net",194],["spambox.xyz",195],["starkroboticsfrc.com",196],["sinonimos.de",196],["antonimos.de",196],["quesignifi.ca",196],["tiktokrealtime.com",196],["tiktokcounter.net",196],["tpayr.xyz",196],["poqzn.xyz",196],["ashrfd.xyz",196],["rezsx.xyz",196],["tryzt.xyz",196],["ashrff.xyz",196],["rezst.xyz",196],["dawenet.com",196],["erzar.xyz",196],["waezm.xyz",196],["waezg.xyz",196],["cryptednews.space",196],["vivuq.com",196],["swgop.com",196],["vbnmll.com",196],["telcoinfo.online",196],["dshytb.com",196],["enit.in",197],["financerites.com",197],["fadedfeet.com",198],["homeculina.com",198],["ineedskin.com",198],["kenzo-flowertag.com",198],["lawyex.co",198],["mdn.lol",198],["bitzite.com",199],["coingraph.us",200],["impact24.us",200],["apkmodvn.com",201],["mod1s.com",201],["dl.apkmoddone.com",202],["my-code4you.blogspot.com",203],["vrcmods.com",204],["osuskinner.com",204],["osuskins.net",204],["pentruea.com",[205,206]],["mchacks.net",207],["why-tech.it",208],["compsmag.com",209],["tapetus.pl",210],["gaystream.online",211],["bembed.net",211],["elbailedeltroleo.site",211],["embedv.net",211],["fslinks.org",211],["listeamed.net",211],["v6embed.xyz",211],["vgplayer.xyz",211],["vid-guard.com",211],["autoroad.cz",212],["brawlhalla.fr",212],["tecnobillo.com",212],["sexcamfreeporn.com",213],["breatheheavy.com",214],["wenxuecity.com",215],["key-hub.eu",216],["fabioambrosi.it",217],["tattle.life",218],["emuenzen.de",218],["terrylove.com",218],["mynet.com",219],["cidade.iol.pt",220],["fantacalcio.it",221],["hentaifreak.org",222],["hypebeast.com",223],["krankheiten-simulieren.de",224],["catholic.com",225],["ad-doge.com",226],["3dmodelshare.org",227],["gourmetscans.net",228],["techinferno.com",229],["ibeconomist.com",230],["bookriot.com",231],["purposegames.com",232],["schoolcheats.net",232],["globo.com",233],["latimes.com",233],["claimrbx.gg",234],["perelki.net",235],["vpn-anbieter-vergleich-test.de",236],["livingincebuforums.com",237],["paperzonevn.com",238],["alltechnerd.com",239],["malaysianwireless.com",240],["erinsakura.com",241],["infofuge.com",241],["freejav.guru",241],["novelmultiverse.com",241],["fritidsmarkedet.dk",242],["maskinbladet.dk",242],["15min.lt",243],["baddiehub.com",244],["mr9soft.com",245],["21porno.com",246],["adult-sex-gamess.com",247],["hentaigames.app",247],["mobilesexgamesx.com",247],["mysexgamer.com",247],["porngameshd.com",247],["sexgamescc.com",247],["xnxx-sex-videos.com",247],["f2movies.to",248],["freeporncave.com",249],["tubsxxx.com",250],["pornojenny.com",251],["subtitle.one",252],["manga18fx.com",253],["freebnbcoin.com",253],["sextvx.com",254],["studydhaba.com",255],["freecourse.tech",255],["victor-mochere.com",255],["papunika.com",255],["mobilanyheter.net",255],["prajwaldesai.com",[255,274]],["ftuapps.dev",255],["muztext.com",256],["pornohans.com",257],["nursexfilme.com",257],["pornohirsch.net",257],["xhamster-sexvideos.com",257],["pornoschlange.com",257],["hdpornos.net",257],["gutesexfilme.com",257],["short1.site",257],["zona-leros.com",257],["charbelnemnom.com",258],["simplebits.io",259],["online-fix.me",260],["gamersdiscussionhub.com",261],["owlzo.com",262],["q1003.com",263],["blogpascher.com",264],["testserver.pro",265],["lifestyle.bg",265],["money.bg",265],["news.bg",265],["topsport.bg",265],["webcafe.bg",265],["mgnet.xyz",266],["advertiserandtimes.co.uk",267],["xvideos2020.me",268],["111.90.159.132",269],["techsolveprac.com",270],["joomlabeginner.com",271],["largescaleforums.com",272],["dubznetwork.com",273],["hentaidexy.com",275],["code2care.org",276],["xxxxsx.com",278],["ngontinh24.com",279],["freemcserver.net",280],["idevicecentral.com",281],["zona11.com",282],["scsport.live",282],["mangacrab.com",284],["idnes.cz",285],["viefaucet.com",286],["cloud-computing-central.com",287],["afk.guide",288],["businessnamegenerator.com",289],["derstandard.at",290],["derstandard.de",290],["rocketnews24.com",291],["soranews24.com",291],["youpouch.com",291],["ilsole24ore.com",292],["ipacrack.com",293],["hentaiporn.one",294],["infokik.com",295],["daemonanime.net",296],["daemon-hentai.com",296],["deezer.com",297],["fosslinux.com",298],["shrdsk.me",299],["examword.com",300],["sempreupdate.com.br",300],["tribuna.com",301],["trendsderzukunft.de",302],["gal-dem.com",302],["lostineu.eu",302],["oggitreviso.it",302],["speisekarte.de",302],["mixed.de",302],["lightnovelspot.com",[303,304]],["lightnovelworld.com",[303,304]],["novelpub.com",[303,304]],["webnovelpub.com",[303,304]],["mail.yahoo.com",305],["hwzone.co.il",306],["nammakalvi.com",307],["javmoon.me",308],["c2g.at",309],["terafly.me",309],["elamigos-games.com",309],["elamigos-games.net",309],["dktechnicalmate.com",310],["recipahi.com",310],["converter-btc.world",310],["kaystls.site",311],["aquarius-horoscopes.com",312],["cancer-horoscopes.com",312],["dubipc.blogspot.com",312],["echoes.gr",312],["engel-horoskop.de",312],["freegames44.com",312],["fuerzasarmadas.eu",312],["gemini-horoscopes.com",312],["jurukunci.net",312],["krebs-horoskop.com",312],["leo-horoscopes.com",312],["maliekrani.com",312],["nklinks.click",312],["ourenseando.es",312],["pisces-horoscopes.com",312],["radio-en-direct.fr",312],["sagittarius-horoscopes.com",312],["scorpio-horoscopes.com",312],["singlehoroskop-loewe.de",312],["skat-karten.de",312],["skorpion-horoskop.com",312],["taurus-horoscopes.com",312],["the1security.com",312],["torrentmovies.online",312],["virgo-horoscopes.com",312],["zonamarela.blogspot.com",312],["yoima.hatenadiary.com",312],["vpntester.org",313],["watchhentai.net",314],["japscan.lol",315],["digitask.ru",316],["tempumail.com",317],["sexvideos.host",318],["10alert.com",320],["cryptstream.de",321],["nydus.org",321],["techhelpbd.com",322],["fapdrop.com",323],["cellmapper.net",324],["hdrez.com",325],["youwatch-serie.com",325],["newscon.org",326],["printablecreative.com",327],["comohoy.com",328],["leak.sx",328],["paste.bin.sx",328],["pornleaks.in",328],["merlininkazani.com",328],["j91.asia",330],["jeniusplay.com",331],["indianyug.com",332],["rgb.vn",332],["needrom.com",333],["criptologico.com",334],["megadrive-emulator.com",335],["eromanga-show.com",336],["hentai-one.com",336],["hentaipaw.com",336],["10minuteemails.com",337],["luxusmail.org",337],["w3cub.com",338],["bangpremier.com",339],["nyaa.iss.ink",340],["tnp98.xyz",342],["freepdfcomic.com",343],["memedroid.com",344],["animesync.org",345],["karaoketexty.cz",346],["filmizlehdfilm.com",347],["fullfilmizle.cc",347],["resortcams.com",348],["mjakmama24.pl",350],["security-demo.extrahop.com",351],["lastampa.it",352]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,6]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",5],["eztv",5],["sushi-scan",9],["spigotunlocked",9],["ahmedmode",9],["kissasian",12],["rp5",13],["mma-core",14],["yts",18],["720pstream",18],["1stream",18],["magesy",19],["shortzzy",21],["thefmovies",23],["urlcero",29],["totaldebrid",32],["sandrives",32],["fxporn69",41],["aliancapes",41],["pouvideo",43],["povvideo",43],["povw1deo",43],["povwideo",43],["powv1deo",43],["powvibeo",43],["powvideo",43],["powvldeo",43],["tubsexer",49],["porno-tour",49],["lenkino",49],["pornomoll",49],["camsclips",49],["m4ufree",53],["writedroid",64],["telerium",68],["pandafreegames",84],["thoptv",92],["streameast",112],["thestreameast",112],["daddylivehd",112],["solvetube",116],["hdfilme",117],["pornhub",118],["wcofun",125],["bollyholic",129],["gotxx",143],["turkanime",144],["voe-unblock",144],["khatrimaza",157],["pogolinks",157],["popcornstream",159],["brainly",171],["oploverz",172],["vembed",211],["xhamsterdeutsch",257],["privatemoviez",261],["gmx",277],["lightnovelpub",[303,304]],["camcaps",319],["drivebot",341],["thenextplanet1",342],["filmizletv",347],["autoscout24",349]]);

const exceptionsMap = new Map([["panel.freemcserver.net",[280]]]);

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
