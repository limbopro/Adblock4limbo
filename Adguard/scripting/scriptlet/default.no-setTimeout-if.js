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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["ai_adb"],["match","100"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["nextFunction"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["offset"],["contrformpub"],["trigger","0"],["popup"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["1e3*"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["?window[_0x"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x63"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"],["return"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,8,9]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,125]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,149]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,280]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["newsrade.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["freethesaurus.com",7],["thefreedictionary.com",7],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["starleaks.org",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["tinhocdongthap.com",9],["sakarnewz.com",9],["downloadr.in",9],["topcomicporno.com",9],["dongknows.com",9],["traderepublic.community",9],["babia.to",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["mbc2.live",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["mangapt.com",9],["seriesperu.com",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,279]],["topsporter.net",[9,279]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["hq-links.com",9],["mobilkulup.com",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["surfsees.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["blackhatworld.com",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["mediafire.com",10],["wcoanimedub.tv",11],["wcoforever.net",11],["openspeedtest.com",11],["addtobucketlist.com",11],["3dzip.org",[11,80]],["ilmeteo.it",11],["wcoforever.com",11],["comprovendolibri.it",11],["healthelia.com",11],["keephealth.info",12],["afreesms.com",13],["kinoger.re",13],["laksa19.github.io",13],["javcl.com",13],["tvlogy.to",13],["live.dragaoconnect.net",13],["beststremo.com",13],["seznam.cz",13],["seznamzpravy.cz",13],["xerifetech.com",13],["wallpapershome.com",15],["anghami.com",16],["wired.com",17],["tutele.sx",18],["footyhunter3.xyz",18],["magesypro.pro",[19,20]],["audiotools.pro",20],["magesy.blog",[20,21,22]],["robloxscripts.com",21],["libreriamo.it",21],["postazap.com",21],["medebooks.xyz",21],["tutorials-technology.info",21],["mashtips.com",21],["marriedgames.com.br",21],["4allprograms.me",21],["nurgsm.com",21],["certbyte.com",21],["plugincrack.com",21],["gamingdeputy.com",21],["freewebcart.com",21],["katestube.com",23],["short.pe",23],["footystreams.net",23],["seattletimes.com",24],["bestgames.com",25],["yiv.com",25],["globalrph.com",26],["e-glossa.it",27],["webcheats.com.br",28],["gala.fr",30],["gentside.com",30],["geo.fr",30],["hbrfrance.fr",30],["nationalgeographic.fr",30],["ohmymag.com",30],["serengo.net",30],["vsd.fr",30],["updato.com",[31,48]],["methbox.com",32],["daizurin.com",32],["pendekarsubs.us",32],["dreamfancy.org",32],["rysafe.blogspot.com",32],["techacode.com",32],["toppng.com",32],["th-world.com",32],["avjamack.com",32],["avjamak.net",32],["dlhd.sx",33],["embedstream.me",33],["yts-subs.net",33],["cnnamador.com",34],["nudecelebforum.com",35],["pronpic.org",36],["thewebflash.com",37],["discordfastfood.com",37],["xup.in",37],["popularmechanics.com",38],["op.gg",39],["lequipe.fr",40],["comunidadgzone.es",41],["mp3fy.com",41],["lebensmittelpraxis.de",41],["ebookdz.com",41],["forum-pokemon-go.fr",41],["praxis-jugendarbeit.de",41],["gdrivez.xyz",41],["dictionnaire-medical.net",41],["cle0desktop.blogspot.com",41],["up-load.io",41],["direct-link.net",41],["direkt-wissen.com",41],["keysbrasil.blogspot.com",41],["hotpress.info",41],["turkleech.com",41],["anibatch.me",41],["anime-i.com",41],["plex-guide.de",41],["healthtune.site",41],["gewinde-normen.de",41],["tucinehd.com",41],["jellynote.com",42],["eporner.com",44],["pornbimbo.com",45],["allmonitors24.com",45],["4j.com",45],["avoiderrors.com",46],["cgtips.org",[46,225]],["sitarchive.com",46],["livenewsof.com",46],["topnewsshow.com",46],["gatcha.org",46],["empregoestagios.com",46],["everydayonsales.com",46],["kusonime.com",46],["aagmaal.xyz",46],["suicidepics.com",46],["codesnail.com",46],["codingshiksha.com",46],["graphicux.com",46],["asyadrama.com",46],["bitcoinegypt.news",46],["citychilli.com",46],["talkjarvis.com",46],["hdmotori.it",47],["femdomtb.com",49],["camhub.cc",49],["bobs-tube.com",49],["ru-xvideos.me",49],["pornfd.com",49],["popno-tour.net",49],["molll.mobi",49],["watchmdh.to",49],["camwhores.tv",49],["elfqrin.com",50],["satcesc.com",51],["apfelpatient.de",51],["lusthero.com",52],["m2list.com",53],["embed.nana2play.com",53],["elahmad.com",53],["dofusports.xyz",53],["dallasnews.com",54],["lnk.news",55],["lnk.parts",55],["efukt.com",56],["wendycode.com",56],["springfieldspringfield.co.uk",57],["porndoe.com",58],["smsget.net",[59,60]],["kjanime.net",61],["gioialive.it",62],["classicreload.com",63],["scriptzhub.com",63],["hotpornfile.org",64],["coolsoft.altervista.org",64],["hackedonlinegames.com",64],["jkoding.xyz",64],["settlersonlinemaps.com",64],["magdownload.org",64],["kpkuang.org",64],["shareus.site",64],["crypto4yu.com",64],["faucetwork.space",64],["thenightwithoutthedawn.blogspot.com",64],["entutes.com",64],["claimlite.club",64],["bazadecrypto.com",[64,325]],["chicoer.com",65],["bostonherald.com",65],["dailycamera.com",65],["maxcheaters.com",66],["rbxoffers.com",66],["mhn.quest",66],["leagueofgraphs.com",66],["hieunguyenphoto.com",66],["benzinpreis.de",66],["postimees.ee",66],["police.community",66],["gisarea.com",66],["schaken-mods.com",66],["theclashify.com",66],["newscon.org",66],["txori.com",66],["olarila.com",66],["deletedspeedstreams.blogspot.com",66],["schooltravelorganiser.com",66],["xhardhempus.net",66],["sportsplays.com",67],["pornvideotop.com",69],["xstory-fr.com",69],["krotkoosporcie.pl",69],["deinesexfilme.com",70],["einfachtitten.com",70],["halloporno.com",70],["herzporno.com",70],["lesbenhd.com",70],["milffabrik.com",[70,254]],["porn-monkey.com",70],["porndrake.com",70],["pornhubdeutsch.net",70],["pornoaffe.com",70],["pornodavid.com",70],["pornoente.tv",[70,254]],["pornofisch.com",70],["pornofelix.com",70],["pornohammer.com",70],["pornohelm.com",70],["pornoklinge.com",70],["pornotom.com",[70,254]],["pornotommy.com",70],["pornovideos-hd.com",70],["pornozebra.com",[70,254]],["xhamsterdeutsch.xyz",70],["xnxx-sexfilme.com",70],["zerion.cc",70],["letribunaldunet.fr",71],["vladan.fr",71],["live-tv-channels.org",72],["eslfast.com",73],["freegamescasual.com",74],["tcpvpn.com",75],["oko.sh",75],["timesnownews.com",75],["timesnowhindi.com",75],["timesnowmarathi.com",75],["zoomtventertainment.com",75],["tsubasa.im",76],["xxxuno.com",77],["sholah.net",78],["2rdroid.com",78],["bisceglielive.it",79],["pandajogosgratis.com.br",81],["5278.cc",82],["altblogger.net",83],["hl-live.de",83],["wohnmobilforum.de",83],["nulledbear.com",83],["sinnerclownceviri.net",83],["satoshi-win.xyz",83],["encurtandourl.com",[83,142]],["freedeepweb.blogspot.com",83],["freesoft.id",83],["zcteam.id",83],["www-daftarharga.blogspot.com",83],["ear-phone-review.com",83],["telefullenvivo.com",83],["listatv.pl",83],["ltc-faucet.xyz",83],["coin-profits.xyz",83],["relampagomovies.com",83],["tonspion.de",85],["duplichecker.com",86],["plagiarismchecker.co",86],["plagiarismdetector.net",86],["searchenginereports.net",86],["giallozafferano.it",87],["autojournal.fr",87],["autoplus.fr",87],["sportauto.fr",87],["linkspaid.com",88],["proxydocker.com",88],["beeimg.com",[89,90]],["emturbovid.com",90],["ftlauderdalebeachcam.com",91],["ftlauderdalewebcam.com",91],["juneauharborwebcam.com",91],["keywestharborwebcam.com",91],["kittycatcam.com",91],["mahobeachcam.com",91],["miamiairportcam.com",91],["morganhillwebcam.com",91],["njwildlifecam.com",91],["nyharborwebcam.com",91],["paradiseislandcam.com",91],["pompanobeachcam.com",91],["portbermudawebcam.com",91],["portcanaveralwebcam.com",91],["portevergladeswebcam.com",91],["portmiamiwebcam.com",91],["portnywebcam.com",91],["portnassauwebcam.com",91],["portstmaartenwebcam.com",91],["portstthomaswebcam.com",91],["porttampawebcam.com",91],["sxmislandcam.com",91],["gearingcommander.com",91],["themes-dl.com",91],["badassdownloader.com",91],["badasshardcore.com",91],["badassoftcore.com",91],["nulljungle.com",91],["teevee.asia",91],["otakukan.com",91],["generate.plus",93],["calculate.plus",93],["avcesar.com",94],["audiotag.info",95],["tudigitale.it",96],["ibcomputing.com",97],["legia.net",98],["acapellas4u.co.uk",99],["streamhentaimovies.com",100],["konten.co.id",101],["diariodenavarra.es",102],["tubereader.me",102],["scripai.com",102],["myfxbook.com",102],["whatfontis.com",102],["xiaomifans.pl",103],["eletronicabr.com",103],["optifine.net",104],["luzernerzeitung.ch",105],["tagblatt.ch",105],["spellcheck.net",106],["spellchecker.net",106],["spellweb.com",106],["ableitungsrechner.net",107],["alternet.org",108],["gourmetsupremacy.com",108],["shrib.com",109],["pandafiles.com",110],["vidia.tv",[110,131]],["hortonanderfarom.blogspot.com",110],["clarifystraight.com",110],["tutelehd3.xyz",111],["mega4upload.com",111],["coolcast2.com",111],["techclips.net",111],["earthquakecensus.com",111],["footyhunter.lol",111],["gamerarcades.com",111],["poscitech.click",111],["starlive.stream",111],["utopianwilderness.com",111],["wecast.to",111],["sportbar.live",111],["lordchannel.com",111],["play-old-pc-games.com",112],["tunovelaligera.com",113],["tapchipi.com",113],["cuitandokter.com",113],["tech-blogs.com",113],["cardiagn.com",113],["dcleakers.com",113],["esgeeks.com",113],["pugliain.net",113],["uplod.net",113],["worldfreeware.com",113],["fikiri.net",113],["myhackingworld.com",113],["phoenixfansub.com",113],["freecourseweb.com",114],["devcourseweb.com",114],["coursewikia.com",114],["courseboat.com",114],["coursehulu.com",114],["lne.es",118],["pornult.com",119],["webcamsdolls.com",119],["bitcotasks.com",[119,164]],["adsy.pw",119],["playstore.pw",119],["exactpay.online",119],["thothd.to",119],["proplanta.de",120],["hydrogenassociation.org",121],["ludigames.com",121],["sportitalialive.com",121],["made-by.org",121],["xenvn.com",121],["worldtravelling.com",121],["igirls.in",121],["technichero.com",121],["roshiyatech.my.id",121],["24sport.stream",121],["aeroxplorer.com",121],["mad4wheels.com",122],["logi.im",122],["emailnator.com",122],["textograto.com",123],["voyageforum.com",124],["hmc-id.blogspot.com",124],["jemerik.com",124],["myabandonware.com",124],["chatta.it",126],["ketubanjiwa.com",127],["nsfw247.to",128],["funzen.net",128],["fighter.stream",128],["ilclubdellericette.it",128],["hubstream.in",128],["extremereportbot.com",129],["getintopc.com",130],["qoshe.com",132],["lowellsun.com",133],["mamadu.pl",133],["dobrapogoda24.pl",133],["motohigh.pl",133],["namasce.pl",133],["ultimate-catch.eu",134],["cpopchanelofficial.com",135],["creditcardgenerator.com",136],["creditcardrush.com",136],["bostoncommons.net",136],["thejobsmovie.com",136],["livsavr.co",136],["nilopolisonline.com.br",137],["mesquitaonline.com",137],["yellowbridge.com",137],["socialgirls.im",138],["yaoiotaku.com",139],["camhub.world",140],["moneyhouse.ch",141],["ihow.info",142],["filesus.com",142],["sturls.com",142],["re.two.re",142],["turbo1.co",142],["cartoonsarea.xyz",142],["valeronevijao.com",143],["cigarlessarefy.com",143],["figeterpiazine.com",143],["yodelswartlike.com",143],["generatesnitrosate.com",143],["crownmakermacaronicism.com",143],["chromotypic.com",143],["gamoneinterrupted.com",143],["metagnathtuggers.com",143],["wolfdyslectic.com",143],["rationalityaloelike.com",143],["sizyreelingly.com",143],["simpulumlamerop.com",143],["urochsunloath.com",143],["monorhinouscassaba.com",143],["counterclockwisejacky.com",143],["35volitantplimsoles5.com",143],["scatch176duplicities.com",143],["antecoxalbobbing1010.com",143],["boonlessbestselling244.com",143],["cyamidpulverulence530.com",143],["guidon40hyporadius9.com",143],["449unceremoniousnasoseptal.com",143],["19turanosephantasia.com",143],["30sensualizeexpression.com",143],["321naturelikefurfuroid.com",143],["745mingiestblissfully.com",143],["availedsmallest.com",143],["greaseball6eventual20.com",143],["toxitabellaeatrebates306.com",143],["20demidistance9elongations.com",143],["audaciousdefaulthouse.com",143],["fittingcentermondaysunday.com",143],["fraudclatterflyingcar.com",143],["launchreliantcleaverriver.com",143],["matriculant401merited.com",143],["realfinanceblogcenter.com",143],["reputationsheriffkennethsand.com",143],["telyn610zoanthropy.com",143],["tubelessceliolymph.com",143],["tummulerviolableness.com",143],["un-block-voe.net",143],["v-o-e-unblock.com",143],["voe-un-block.com",143],["voeun-block.net",143],["voeunbl0ck.com",143],["voeunblck.com",143],["voeunblk.com",143],["voeunblock.com",143],["voeunblock1.com",143],["voeunblock2.com",143],["voeunblock3.com",143],["agefi.fr",144],["cariskuy.com",145],["letras2.com",145],["yusepjaelani.blogspot.com",146],["letras.mus.br",147],["mtlurb.com",148],["port.hu",149],["acdriftingpro.com",149],["flight-report.com",149],["forumdz.com",149],["abandonmail.com",149],["flmods.com",149],["zilinak.sk",149],["projectfreetv.stream",149],["hotdesimms.com",149],["pdfaid.com",149],["mconverter.eu",149],["dzeko11.net",[149,279]],["mail.com",149],["expresskaszubski.pl",149],["moegirl.org.cn",149],["onemanhua.com",150],["t3n.de",151],["allindiaroundup.com",152],["vectorizer.io",153],["smgplaza.com",153],["onehack.us",153],["thapcam.net",153],["thefastlaneforum.com",154],["trade2win.com",155],["modagamers.com",156],["freemagazines.top",156],["straatosphere.com",156],["rule34porn.net",156],["nullpk.com",156],["adslink.pw",156],["downloadudemy.com",156],["picgiraffe.com",156],["weadown.com",156],["freepornsex.net",156],["nurparatodos.com.ar",156],["librospreuniversitariospdf.blogspot.com",157],["msdos-games.com",157],["blocklayer.com",157],["forexeen.us",157],["khsm.io",157],["webcreator-journal.com",157],["nu6i-bg-net.com",157],["routech.ro",158],["hokej.net",158],["turkmmo.com",159],["palermotoday.it",160],["baritoday.it",160],["trentotoday.it",160],["agrigentonotizie.it",160],["anconatoday.it",160],["arezzonotizie.it",160],["avellinotoday.it",160],["bresciatoday.it",160],["brindisireport.it",160],["casertanews.it",160],["cataniatoday.it",160],["cesenatoday.it",160],["chietitoday.it",160],["forlitoday.it",160],["frosinonetoday.it",160],["genovatoday.it",160],["ilpescara.it",160],["ilpiacenza.it",160],["latinatoday.it",160],["lecceprima.it",160],["leccotoday.it",160],["livornotoday.it",160],["messinatoday.it",160],["milanotoday.it",160],["modenatoday.it",160],["monzatoday.it",160],["novaratoday.it",160],["padovaoggi.it",160],["parmatoday.it",160],["perugiatoday.it",160],["pisatoday.it",160],["quicomo.it",160],["ravennatoday.it",160],["reggiotoday.it",160],["riminitoday.it",160],["romatoday.it",160],["salernotoday.it",160],["sondriotoday.it",160],["sportpiacenza.it",160],["ternitoday.it",160],["today.it",160],["torinotoday.it",160],["trevisotoday.it",160],["triesteprima.it",160],["udinetoday.it",160],["veneziatoday.it",160],["vicenzatoday.it",160],["thumpertalk.com",161],["arkcod.org",161],["facciabuco.com",162],["softx64.com",163],["thelayoff.com",164],["manwan.xyz",164],["blog.cryptowidgets.net",164],["blog.insurancegold.in",164],["blog.wiki-topia.com",164],["blog.coinsvalue.net",164],["blog.cookinguide.net",164],["blog.freeoseocheck.com",164],["blog.makeupguide.net",164],["blog.carstopia.net",164],["blog.carsmania.net",164],["shorterall.com",164],["blog24.me",164],["maxstream.video",164],["maxlinks.online",164],["tvepg.eu",164],["pstream.net",165],["dailymaverick.co.za",166],["apps2app.com",167],["cheatermad.com",168],["ville-ideale.fr",169],["eodev.com",170],["tickzoo.tv",171],["fm-arena.com",172],["tradersunion.com",173],["tandess.com",174],["faqwiki.us",175],["sonixgvn.net",175],["spontacts.com",176],["dankmemer.lol",177],["apkmoddone.com",178],["getexploits.com",179],["fplstatistics.com",180],["breitbart.com",181],["salidzini.lv",182],["choosingnothing.com",183],["cryptorank.io",184],["th.gl",185],["4kwebplay.xyz",186],["qqwebplay.xyz",186],["viwlivehdplay.ru",186],["molbiotools.com",187],["vods.tv",188],["18xxx.xyz",189],["raidrush.net",190],["xnxxcom.xyz",191],["videzz.net",192],["spambox.xyz",193],["enit.in",194],["financerites.com",194],["fadedfeet.com",195],["homeculina.com",195],["ineedskin.com",195],["kenzo-flowertag.com",195],["lawyex.co",195],["mdn.lol",195],["bitzite.com",196],["coingraph.us",197],["impact24.us",197],["mod1s.com",198],["dl.apkmoddone.com",199],["my-code4you.blogspot.com",200],["vrcmods.com",201],["osuskinner.com",201],["osuskins.net",201],["pentruea.com",[202,203]],["mchacks.net",204],["why-tech.it",205],["compsmag.com",206],["tapetus.pl",207],["gaystream.online",208],["bembed.net",208],["elbailedeltroleo.site",208],["embedv.net",208],["fslinks.org",208],["listeamed.net",208],["v6embed.xyz",208],["vgplayer.xyz",208],["vid-guard.com",208],["autoroad.cz",209],["brawlhalla.fr",209],["tecnobillo.com",209],["sexcamfreeporn.com",210],["breatheheavy.com",211],["wenxuecity.com",212],["key-hub.eu",213],["fabioambrosi.it",214],["tattle.life",215],["emuenzen.de",215],["terrylove.com",215],["mynet.com",216],["cidade.iol.pt",217],["fantacalcio.it",218],["hentaifreak.org",219],["hypebeast.com",220],["krankheiten-simulieren.de",221],["catholic.com",222],["ad-doge.com",223],["3dmodelshare.org",224],["gourmetscans.net",225],["techinferno.com",226],["ibeconomist.com",227],["bookriot.com",228],["purposegames.com",229],["schoolcheats.net",229],["globo.com",230],["latimes.com",230],["claimrbx.gg",231],["perelki.net",232],["vpn-anbieter-vergleich-test.de",233],["livingincebuforums.com",234],["paperzonevn.com",235],["alltechnerd.com",236],["malaysianwireless.com",237],["erinsakura.com",238],["infofuge.com",238],["freejav.guru",238],["novelmultiverse.com",238],["fritidsmarkedet.dk",239],["maskinbladet.dk",239],["15min.lt",240],["baddiehub.com",241],["mr9soft.com",242],["21porno.com",243],["adult-sex-gamess.com",244],["hentaigames.app",244],["mobilesexgamesx.com",244],["mysexgamer.com",244],["porngameshd.com",244],["sexgamescc.com",244],["xnxx-sex-videos.com",244],["f2movies.to",245],["freeporncave.com",246],["tubsxxx.com",247],["pornojenny.com",248],["subtitle.one",249],["manga18fx.com",250],["freebnbcoin.com",250],["sextvx.com",251],["studydhaba.com",252],["freecourse.tech",252],["victor-mochere.com",252],["papunika.com",252],["mobilanyheter.net",252],["prajwaldesai.com",[252,271]],["ftuapps.dev",252],["muztext.com",253],["pornohans.com",254],["nursexfilme.com",254],["pornohirsch.net",254],["xhamster-sexvideos.com",254],["pornoschlange.com",254],["hdpornos.net",254],["gutesexfilme.com",254],["short1.site",254],["zona-leros.com",254],["charbelnemnom.com",255],["simplebits.io",256],["online-fix.me",257],["gamersdiscussionhub.com",258],["owlzo.com",259],["q1003.com",260],["blogpascher.com",261],["testserver.pro",262],["lifestyle.bg",262],["money.bg",262],["news.bg",262],["topsport.bg",262],["webcafe.bg",262],["mgnet.xyz",263],["advertiserandtimes.co.uk",264],["xvideos2020.me",265],["111.90.159.132",266],["techsolveprac.com",267],["joomlabeginner.com",268],["largescaleforums.com",269],["dubznetwork.com",270],["hentaidexy.com",272],["code2care.org",273],["xxxxsx.com",275],["ngontinh24.com",276],["panel.freemcserver.net",277],["idevicecentral.com",278],["zona11.com",279],["scsport.live",279],["mangacrab.com",281],["idnes.cz",282],["viefaucet.com",283],["cloud-computing-central.com",284],["afk.guide",285],["businessnamegenerator.com",286],["derstandard.at",287],["derstandard.de",287],["rocketnews24.com",288],["soranews24.com",288],["youpouch.com",288],["ilsole24ore.com",289],["ipacrack.com",290],["hentaiporn.one",291],["infokik.com",292],["daemonanime.net",293],["daemon-hentai.com",293],["deezer.com",294],["fosslinux.com",295],["shrdsk.me",296],["examword.com",297],["sempreupdate.com.br",297],["tribuna.com",298],["trendsderzukunft.de",299],["gal-dem.com",299],["lostineu.eu",299],["oggitreviso.it",299],["speisekarte.de",299],["mixed.de",299],["lightnovelspot.com",[300,301]],["lightnovelworld.com",[300,301]],["novelpub.com",[300,301]],["webnovelpub.com",[300,301]],["mail.yahoo.com",302],["hwzone.co.il",303],["nammakalvi.com",304],["javmoon.me",305],["c2g.at",306],["terafly.me",306],["elamigos-games.com",306],["elamigos-games.net",306],["dktechnicalmate.com",307],["recipahi.com",307],["converter-btc.world",307],["kaystls.site",308],["aquarius-horoscopes.com",309],["cancer-horoscopes.com",309],["dubipc.blogspot.com",309],["echoes.gr",309],["engel-horoskop.de",309],["freegames44.com",309],["fuerzasarmadas.eu",309],["gemini-horoscopes.com",309],["jurukunci.net",309],["krebs-horoskop.com",309],["leo-horoscopes.com",309],["maliekrani.com",309],["nklinks.click",309],["ourenseando.es",309],["pisces-horoscopes.com",309],["radio-en-direct.fr",309],["sagittarius-horoscopes.com",309],["scorpio-horoscopes.com",309],["singlehoroskop-loewe.de",309],["skat-karten.de",309],["skorpion-horoskop.com",309],["taurus-horoscopes.com",309],["the1security.com",309],["torrentmovies.online",309],["virgo-horoscopes.com",309],["zonamarela.blogspot.com",309],["yoima.hatenadiary.com",309],["vpntester.org",310],["watchhentai.net",311],["japscan.lol",312],["digitask.ru",313],["tempumail.com",314],["sexvideos.host",315],["10alert.com",317],["cryptstream.de",318],["nydus.org",318],["techhelpbd.com",319],["fapdrop.com",320],["cellmapper.net",321],["hdrez.com",322],["youwatch-serie.com",322],["printablecreative.com",323],["comohoy.com",324],["leak.sx",324],["paste.bin.sx",324],["pornleaks.in",324],["merlininkazani.com",324],["j91.asia",326],["jeniusplay.com",327],["indianyug.com",328],["rgb.vn",328],["needrom.com",329],["criptologico.com",330],["megadrive-emulator.com",331],["eromanga-show.com",332],["hentai-one.com",332],["hentaipaw.com",332],["10minuteemails.com",333],["luxusmail.org",333],["w3cub.com",334],["bangpremier.com",335],["nyaa.iss.ink",336],["tnp98.xyz",338],["freepdfcomic.com",339],["memedroid.com",340],["animesync.org",341],["karaoketexty.cz",342],["resortcams.com",343],["mjakmama24.pl",345],["security-demo.extrahop.com",346],["kotobank.jp",347]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,6]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",5],["eztv",5],["sushi-scan",9],["spigotunlocked",9],["ahmedmode",9],["kissasian",12],["rp5",13],["mma-core",14],["yts",18],["720pstream",18],["1stream",18],["magesy",19],["shortzzy",21],["thefmovies",23],["urlcero",29],["totaldebrid",32],["sandrives",32],["fxporn69",41],["aliancapes",41],["pouvideo",43],["povvideo",43],["povw1deo",43],["povwideo",43],["powv1deo",43],["powvibeo",43],["powvideo",43],["powvldeo",43],["tubsexer",49],["porno-tour",49],["lenkino",49],["pornomoll",49],["camsclips",49],["m4ufree",53],["writedroid",64],["telerium",68],["pandafreegames",84],["thoptv",92],["streameast",111],["thestreameast",111],["daddylivehd",111],["solvetube",115],["hdfilme",116],["pornhub",117],["wcofun",124],["bollyholic",128],["gotxx",142],["turkanime",143],["voe-unblock",143],["khatrimaza",156],["pogolinks",156],["popcornstream",158],["brainly",170],["oploverz",171],["vembed",208],["xhamsterdeutsch",254],["privatemoviez",258],["gmx",274],["lightnovelpub",[300,301]],["camcaps",316],["drivebot",337],["thenextplanet1",338],["autoscout24",344]]);

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
