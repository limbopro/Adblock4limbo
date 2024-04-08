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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["ai_adb"],["match","100"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["_0x"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["nextFunction"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["offset"],["contrformpub"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["1e3*"],["current.children"],["adStatus"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["setAntiAb"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x","5000"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,9,10]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,129]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,153]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,268]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["economictimes.indiatimes.com",5],["m.timesofindia.com",6],["timesofindia.indiatimes.com",6],["youmath.it",6],["redensarten-index.de",6],["lesoir.be",6],["electriciansforums.net",6],["keralatelecom.info",6],["betaseries.com",6],["universegunz.net",6],["happypenguin.altervista.org",6],["everyeye.it",6],["bluedrake42.com",6],["streamservicehd.click",6],["supermarioemulator.com",6],["futbollibrehd.com",6],["newsrade.com",6],["eska.pl",6],["eskarock.pl",6],["voxfm.pl",6],["mathaeser.de",6],["freethesaurus.com",8],["thefreedictionary.com",8],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["dongknows.com",10],["traderepublic.community",10],["babia.to",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["mbc2.live",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["mangapt.com",10],["seriesperu.com",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,267]],["topsporter.net",[10,267]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["hq-links.com",10],["mobilkulup.com",10],["esopress.com",10],["rttar.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["surfsees.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["blackhatworld.com",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,82]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["keephealth.info",13],["afreesms.com",14],["kinoger.re",14],["laksa19.github.io",14],["javcl.com",14],["tvlogy.to",14],["live.dragaoconnect.net",14],["beststremo.com",14],["seznam.cz",14],["seznamzpravy.cz",14],["xerifetech.com",14],["wallpapershome.com",16],["imgkings.com",17],["pornvideotop.com",17],["xstory-fr.com",17],["krotkoosporcie.pl",17],["anghami.com",18],["wired.com",19],["tutele.sx",20],["footyhunter3.xyz",20],["magesypro.pro",[21,22]],["audiotools.pro",22],["magesy.blog",[22,23,24]],["robloxscripts.com",23],["libreriamo.it",23],["postazap.com",23],["medebooks.xyz",23],["tutorials-technology.info",23],["mashtips.com",23],["marriedgames.com.br",23],["4allprograms.me",23],["nurgsm.com",23],["certbyte.com",23],["plugincrack.com",23],["gamingdeputy.com",23],["freewebcart.com",23],["katestube.com",25],["short.pe",25],["footystreams.net",25],["seattletimes.com",26],["yiv.com",27],["globalrph.com",28],["e-glossa.it",29],["freewebscript.com",30],["webcheats.com.br",31],["gala.fr",33],["gentside.com",33],["geo.fr",33],["hbrfrance.fr",33],["nationalgeographic.fr",33],["ohmymag.com",33],["serengo.net",33],["vsd.fr",33],["updato.com",[34,53]],["methbox.com",35],["daizurin.com",35],["pendekarsubs.us",35],["dreamfancy.org",35],["rysafe.blogspot.com",35],["techacode.com",35],["toppng.com",35],["th-world.com",35],["avjamack.com",35],["avjamak.net",35],["tickzoo.tv",36],["bersamatekno.com",37],["hotpornfile.org",37],["coolsoft.altervista.org",37],["hackedonlinegames.com",37],["jkoding.xyz",37],["cheater.ninja",37],["settlersonlinemaps.com",37],["magdownload.org",37],["kpkuang.org",37],["shareus.site",37],["crypto4yu.com",37],["faucetwork.space",37],["thenightwithoutthedawn.blogspot.com",37],["entutes.com",37],["claimlite.club",37],["bazadecrypto.com",[37,313]],["dlhd.sx",38],["embedstream.me",38],["yts-subs.net",38],["cnnamador.com",39],["nudecelebforum.com",40],["pronpic.org",41],["thewebflash.com",42],["discordfastfood.com",42],["xup.in",42],["popularmechanics.com",43],["op.gg",44],["lequipe.fr",45],["comunidadgzone.es",46],["mp3fy.com",46],["lebensmittelpraxis.de",46],["ebookdz.com",46],["forum-pokemon-go.fr",46],["praxis-jugendarbeit.de",46],["gdrivez.xyz",46],["dictionnaire-medical.net",46],["cle0desktop.blogspot.com",46],["up-load.io",46],["direct-link.net",46],["direkt-wissen.com",46],["keysbrasil.blogspot.com",46],["hotpress.info",46],["turkleech.com",46],["anibatch.me",46],["anime-i.com",46],["plex-guide.de",46],["healthtune.site",46],["gewinde-normen.de",46],["tucinehd.com",46],["jellynote.com",47],["eporner.com",49],["pornbimbo.com",50],["allmonitors24.com",50],["4j.com",50],["avoiderrors.com",51],["cgtips.org",[51,212]],["sitarchive.com",51],["livenewsof.com",51],["topnewsshow.com",51],["gatcha.org",51],["empregoestagios.com",51],["everydayonsales.com",51],["kusonime.com",51],["aagmaal.xyz",51],["suicidepics.com",51],["codesnail.com",51],["codingshiksha.com",51],["graphicux.com",51],["asyadrama.com",51],["bitcoinegypt.news",51],["citychilli.com",51],["talkjarvis.com",51],["hdmotori.it",52],["femdomtb.com",54],["camhub.cc",54],["bobs-tube.com",54],["ru-xvideos.me",54],["pornfd.com",54],["popno-tour.net",54],["molll.mobi",54],["watchmdh.to",54],["camwhores.tv",54],["elfqrin.com",55],["satcesc.com",56],["apfelpatient.de",56],["lusthero.com",57],["m2list.com",58],["embed.nana2play.com",58],["elahmad.com",58],["dofusports.xyz",58],["dallasnews.com",59],["lnk.news",60],["lnk.parts",60],["efukt.com",61],["wendycode.com",61],["springfieldspringfield.co.uk",62],["porndoe.com",63],["smsget.net",[64,65]],["kjanime.net",66],["gioialive.it",67],["classicreload.com",68],["scriptzhub.com",68],["chicoer.com",69],["bostonherald.com",69],["dailycamera.com",69],["maxcheaters.com",70],["rbxoffers.com",70],["mhn.quest",70],["leagueofgraphs.com",70],["hieunguyenphoto.com",70],["texteditor.nsspot.net",70],["benzinpreis.de",70],["postimees.ee",70],["police.community",70],["gisarea.com",70],["schaken-mods.com",70],["theclashify.com",70],["newscon.org",70],["txori.com",70],["olarila.com",70],["deletedspeedstreams.blogspot.com",70],["schooltravelorganiser.com",70],["xhardhempus.net",70],["sportsplays.com",71],["deinesexfilme.com",73],["einfachtitten.com",73],["halloporno.com",73],["herzporno.com",73],["lesbenhd.com",73],["milffabrik.com",[73,242]],["porn-monkey.com",73],["porndrake.com",73],["pornhubdeutsch.net",73],["pornoaffe.com",73],["pornodavid.com",73],["pornoente.tv",[73,242]],["pornofisch.com",73],["pornofelix.com",73],["pornohammer.com",73],["pornohelm.com",73],["pornoklinge.com",73],["pornotom.com",[73,242]],["pornotommy.com",73],["pornovideos-hd.com",73],["pornozebra.com",[73,242]],["xhamsterdeutsch.xyz",73],["xnxx-sexfilme.com",73],["zerion.cc",73],["letribunaldunet.fr",74],["vladan.fr",74],["live-tv-channels.org",75],["eslfast.com",76],["freegamescasual.com",77],["tcpvpn.com",78],["oko.sh",78],["timesnownews.com",78],["timesnowhindi.com",78],["timesnowmarathi.com",78],["zoomtventertainment.com",78],["xxxuno.com",79],["sholah.net",80],["2rdroid.com",80],["bisceglielive.it",81],["pandajogosgratis.com.br",83],["5278.cc",84],["altblogger.net",85],["hl-live.de",85],["wohnmobilforum.de",85],["nulledbear.com",85],["satoshi-win.xyz",85],["encurtandourl.com",[85,146]],["freedeepweb.blogspot.com",85],["freesoft.id",85],["zcteam.id",85],["www-daftarharga.blogspot.com",85],["ear-phone-review.com",85],["telefullenvivo.com",85],["listatv.pl",85],["ltc-faucet.xyz",85],["coin-profits.xyz",85],["relampagomovies.com",85],["tonspion.de",87],["duplichecker.com",88],["plagiarismchecker.co",88],["plagiarismdetector.net",88],["searchenginereports.net",88],["giallozafferano.it",89],["autojournal.fr",89],["autoplus.fr",89],["sportauto.fr",89],["linkspaid.com",90],["proxydocker.com",90],["beeimg.com",[91,92]],["emturbovid.com",92],["ftlauderdalebeachcam.com",93],["ftlauderdalewebcam.com",93],["juneauharborwebcam.com",93],["keywestharborwebcam.com",93],["kittycatcam.com",93],["mahobeachcam.com",93],["miamiairportcam.com",93],["morganhillwebcam.com",93],["njwildlifecam.com",93],["nyharborwebcam.com",93],["paradiseislandcam.com",93],["pompanobeachcam.com",93],["portbermudawebcam.com",93],["portcanaveralwebcam.com",93],["portevergladeswebcam.com",93],["portmiamiwebcam.com",93],["portnywebcam.com",93],["portnassauwebcam.com",93],["portstmaartenwebcam.com",93],["portstthomaswebcam.com",93],["porttampawebcam.com",93],["sxmislandcam.com",93],["gearingcommander.com",93],["themes-dl.com",93],["badassdownloader.com",93],["badasshardcore.com",93],["badassoftcore.com",93],["nulljungle.com",93],["teevee.asia",93],["otakukan.com",93],["generate.plus",95],["calculate.plus",95],["avcesar.com",96],["audiotag.info",97],["tudigitale.it",98],["ibcomputing.com",99],["eodev.com",100],["legia.net",101],["acapellas4u.co.uk",102],["streamhentaimovies.com",103],["konten.co.id",104],["diariodenavarra.es",105],["tubereader.me",105],["scripai.com",105],["myfxbook.com",105],["whatfontis.com",105],["xiaomifans.pl",106],["eletronicabr.com",106],["optifine.net",107],["luzernerzeitung.ch",108],["tagblatt.ch",108],["spellcheck.net",109],["spellchecker.net",109],["spellweb.com",109],["ableitungsrechner.net",110],["alternet.org",111],["gourmetsupremacy.com",111],["imtranslator.net",112],["shrib.com",113],["pandafiles.com",114],["vidia.tv",[114,135]],["hortonanderfarom.blogspot.com",114],["clarifystraight.com",114],["tutelehd3.xyz",115],["mega4upload.com",115],["coolcast2.com",115],["techclips.net",115],["earthquakecensus.com",115],["footyhunter.lol",115],["gamerarcades.com",115],["poscitech.click",115],["starlive.stream",115],["utopianwilderness.com",115],["wecast.to",115],["sportbar.live",115],["lordchannel.com",115],["play-old-pc-games.com",116],["tunovelaligera.com",117],["tapchipi.com",117],["cuitandokter.com",117],["tech-blogs.com",117],["cardiagn.com",117],["dcleakers.com",117],["esgeeks.com",117],["pugliain.net",117],["uplod.net",117],["worldfreeware.com",117],["fikiri.net",117],["myhackingworld.com",117],["phoenixfansub.com",117],["freecourseweb.com",118],["devcourseweb.com",118],["coursewikia.com",118],["courseboat.com",118],["coursehulu.com",118],["lne.es",122],["pornult.com",123],["webcamsdolls.com",123],["bitcotasks.com",[123,168]],["adsy.pw",123],["playstore.pw",123],["exactpay.online",123],["thothd.to",123],["proplanta.de",124],["hydrogenassociation.org",125],["ludigames.com",125],["sportitalialive.com",125],["tii.la",125],["made-by.org",125],["xenvn.com",125],["worldtravelling.com",125],["igirls.in",125],["technichero.com",125],["roshiyatech.my.id",125],["24sport.stream",125],["aeroxplorer.com",125],["mad4wheels.com",126],["logi.im",126],["emailnator.com",126],["textograto.com",127],["voyageforum.com",128],["hmc-id.blogspot.com",128],["jemerik.com",128],["myabandonware.com",128],["chatta.it",130],["ketubanjiwa.com",131],["nsfw247.to",132],["funzen.net",132],["fighter.stream",132],["ilclubdellericette.it",132],["hubstream.in",132],["extremereportbot.com",133],["getintopc.com",134],["qoshe.com",136],["lowellsun.com",137],["mamadu.pl",137],["dobrapogoda24.pl",137],["motohigh.pl",137],["namasce.pl",137],["ultimate-catch.eu",138],["cpopchanelofficial.com",139],["creditcardgenerator.com",140],["creditcardrush.com",140],["bostoncommons.net",140],["thejobsmovie.com",140],["livsavr.co",140],["nilopolisonline.com.br",141],["mesquitaonline.com",141],["yellowbridge.com",141],["socialgirls.im",142],["yaoiotaku.com",143],["camhub.world",144],["moneyhouse.ch",145],["ihow.info",146],["filesus.com",146],["sturls.com",146],["re.two.re",146],["turbo1.co",146],["cartoonsarea.xyz",146],["valeronevijao.com",147],["cigarlessarefy.com",147],["figeterpiazine.com",147],["yodelswartlike.com",147],["generatesnitrosate.com",147],["crownmakermacaronicism.com",147],["chromotypic.com",147],["gamoneinterrupted.com",147],["metagnathtuggers.com",147],["wolfdyslectic.com",147],["rationalityaloelike.com",147],["sizyreelingly.com",147],["simpulumlamerop.com",147],["urochsunloath.com",147],["monorhinouscassaba.com",147],["counterclockwisejacky.com",147],["35volitantplimsoles5.com",147],["scatch176duplicities.com",147],["antecoxalbobbing1010.com",147],["boonlessbestselling244.com",147],["cyamidpulverulence530.com",147],["guidon40hyporadius9.com",147],["449unceremoniousnasoseptal.com",147],["19turanosephantasia.com",147],["30sensualizeexpression.com",147],["321naturelikefurfuroid.com",147],["745mingiestblissfully.com",147],["availedsmallest.com",147],["greaseball6eventual20.com",147],["toxitabellaeatrebates306.com",147],["20demidistance9elongations.com",147],["audaciousdefaulthouse.com",147],["fittingcentermondaysunday.com",147],["fraudclatterflyingcar.com",147],["launchreliantcleaverriver.com",147],["matriculant401merited.com",147],["realfinanceblogcenter.com",147],["reputationsheriffkennethsand.com",147],["telyn610zoanthropy.com",147],["tubelessceliolymph.com",147],["tummulerviolableness.com",147],["un-block-voe.net",147],["v-o-e-unblock.com",147],["voe-un-block.com",147],["voeun-block.net",147],["voeunbl0ck.com",147],["voeunblck.com",147],["voeunblk.com",147],["voeunblock.com",147],["voeunblock1.com",147],["voeunblock2.com",147],["voeunblock3.com",147],["agefi.fr",148],["cariskuy.com",149],["letras2.com",149],["yusepjaelani.blogspot.com",150],["letras.mus.br",151],["mtlurb.com",152],["port.hu",153],["acdriftingpro.com",153],["flight-report.com",153],["forumdz.com",153],["abandonmail.com",153],["flmods.com",153],["zilinak.sk",153],["projectfreetv.stream",153],["hotdesimms.com",153],["pdfaid.com",153],["mconverter.eu",153],["dzeko11.net",[153,267]],["mail.com",153],["expresskaszubski.pl",153],["moegirl.org.cn",153],["onemanhua.com",154],["t3n.de",155],["allindiaroundup.com",156],["vectorizer.io",157],["smgplaza.com",157],["onehack.us",157],["thapcam.net",157],["thefastlaneforum.com",158],["trade2win.com",159],["gmodleaks.com",159],["modagamers.com",160],["freemagazines.top",160],["straatosphere.com",160],["nullpk.com",160],["adslink.pw",160],["downloadudemy.com",160],["picgiraffe.com",160],["weadown.com",160],["freepornsex.net",160],["nurparatodos.com.ar",160],["librospreuniversitariospdf.blogspot.com",161],["msdos-games.com",161],["forexeen.us",161],["khsm.io",161],["webcreator-journal.com",161],["nu6i-bg-net.com",161],["routech.ro",162],["hokej.net",162],["turkmmo.com",163],["palermotoday.it",164],["baritoday.it",164],["trentotoday.it",164],["agrigentonotizie.it",164],["anconatoday.it",164],["arezzonotizie.it",164],["avellinotoday.it",164],["bresciatoday.it",164],["brindisireport.it",164],["casertanews.it",164],["cataniatoday.it",164],["cesenatoday.it",164],["chietitoday.it",164],["forlitoday.it",164],["frosinonetoday.it",164],["genovatoday.it",164],["ilpescara.it",164],["ilpiacenza.it",164],["latinatoday.it",164],["lecceprima.it",164],["leccotoday.it",164],["livornotoday.it",164],["messinatoday.it",164],["milanotoday.it",164],["modenatoday.it",164],["monzatoday.it",164],["novaratoday.it",164],["padovaoggi.it",164],["parmatoday.it",164],["perugiatoday.it",164],["pisatoday.it",164],["quicomo.it",164],["ravennatoday.it",164],["reggiotoday.it",164],["riminitoday.it",164],["romatoday.it",164],["salernotoday.it",164],["sondriotoday.it",164],["sportpiacenza.it",164],["ternitoday.it",164],["today.it",164],["torinotoday.it",164],["trevisotoday.it",164],["triesteprima.it",164],["udinetoday.it",164],["veneziatoday.it",164],["vicenzatoday.it",164],["thumpertalk.com",165],["arkcod.org",165],["facciabuco.com",166],["softx64.com",167],["thelayoff.com",168],["blog.cryptowidgets.net",168],["blog.insurancegold.in",168],["blog.wiki-topia.com",168],["blog.coinsvalue.net",168],["blog.cookinguide.net",168],["blog.freeoseocheck.com",168],["blog.makeupguide.net",168],["blog.carstopia.net",168],["blog.carsmania.net",168],["shorterall.com",168],["blog24.me",168],["maxstream.video",168],["maxlinks.online",168],["tvepg.eu",168],["pstream.net",169],["dailymaverick.co.za",170],["apps2app.com",171],["cheatermad.com",172],["ville-ideale.fr",173],["fm-arena.com",174],["tradersunion.com",175],["tandess.com",176],["faqwiki.us",177],["sonixgvn.net",177],["spontacts.com",178],["dankmemer.lol",179],["apkmoddone.com",180],["getexploits.com",181],["fplstatistics.com",182],["enit.in",183],["financerites.com",183],["fadedfeet.com",184],["homeculina.com",184],["ineedskin.com",184],["kenzo-flowertag.com",184],["lawyex.co",184],["mdn.lol",184],["bitzite.com",185],["coingraph.us",186],["impact24.us",186],["my-code4you.blogspot.com",187],["vrcmods.com",188],["osuskinner.com",188],["osuskins.net",188],["pentruea.com",[189,190]],["mchacks.net",191],["why-tech.it",192],["compsmag.com",193],["tapetus.pl",194],["gaystream.online",195],["bembed.net",195],["embedv.net",195],["fslinks.org",195],["v6embed.xyz",195],["vgplayer.xyz",195],["vid-guard.com",195],["autoroad.cz",196],["brawlhalla.fr",196],["tecnobillo.com",196],["sexcamfreeporn.com",197],["breatheheavy.com",198],["wenxuecity.com",199],["key-hub.eu",200],["fabioambrosi.it",201],["tattle.life",202],["emuenzen.de",202],["terrylove.com",202],["mynet.com",203],["cidade.iol.pt",204],["fantacalcio.it",205],["hentaifreak.org",206],["hypebeast.com",207],["krankheiten-simulieren.de",208],["catholic.com",209],["ad-doge.com",210],["3dmodelshare.org",211],["gourmetscans.net",212],["techinferno.com",213],["ibeconomist.com",214],["bookriot.com",215],["purposegames.com",216],["schoolcheats.net",216],["globo.com",217],["latimes.com",217],["claimrbx.gg",218],["perelki.net",219],["vpn-anbieter-vergleich-test.de",220],["livingincebuforums.com",221],["paperzonevn.com",222],["alltechnerd.com",223],["malaysianwireless.com",224],["erinsakura.com",225],["infofuge.com",225],["freejav.guru",225],["novelmultiverse.com",225],["fritidsmarkedet.dk",226],["maskinbladet.dk",226],["15min.lt",227],["lewdninja.com",228],["lewd.ninja",228],["baddiehub.com",229],["mr9soft.com",230],["21porno.com",231],["adult-sex-gamess.com",232],["hentaigames.app",232],["mobilesexgamesx.com",232],["mysexgamer.com",232],["porngameshd.com",232],["sexgamescc.com",232],["xnxx-sex-videos.com",232],["f2movies.to",233],["freeporncave.com",234],["tubsxxx.com",235],["pornojenny.com",236],["subtitle.one",237],["manga18fx.com",238],["freebnbcoin.com",238],["sextvx.com",239],["studydhaba.com",240],["freecourse.tech",240],["victor-mochere.com",240],["papunika.com",240],["mobilanyheter.net",240],["prajwaldesai.com",[240,259]],["ftuapps.dev",240],["muztext.com",241],["pornohans.com",242],["nursexfilme.com",242],["pornohirsch.net",242],["xhamster-sexvideos.com",242],["pornoschlange.com",242],["hdpornos.net",242],["gutesexfilme.com",242],["short1.site",242],["zona-leros.com",242],["charbelnemnom.com",243],["simplebits.io",244],["online-fix.me",245],["gamersdiscussionhub.com",246],["owlzo.com",247],["q1003.com",248],["blogpascher.com",249],["testserver.pro",250],["lifestyle.bg",250],["money.bg",250],["news.bg",250],["topsport.bg",250],["webcafe.bg",250],["mgnet.xyz",251],["advertiserandtimes.co.uk",252],["xvideos2020.me",253],["111.90.159.132",254],["techsolveprac.com",255],["joomlabeginner.com",256],["largescaleforums.com",257],["dubznetwork.com",258],["mundodonghua.com",258],["hentaidexy.com",260],["code2care.org",261],["xxxxsx.com",263],["ngontinh24.com",264],["panel.freemcserver.net",265],["idevicecentral.com",266],["zona11.com",267],["scsport.live",267],["mangacrab.com",269],["idnes.cz",270],["viefaucet.com",271],["cloud-computing-central.com",272],["afk.guide",273],["businessnamegenerator.com",274],["derstandard.at",275],["derstandard.de",275],["rocketnews24.com",276],["soranews24.com",276],["youpouch.com",276],["ilsole24ore.com",277],["ipacrack.com",278],["hentaiporn.one",279],["infokik.com",280],["daemonanime.net",281],["daemon-hentai.com",281],["deezer.com",282],["fosslinux.com",283],["shrdsk.me",284],["examword.com",285],["sempreupdate.com.br",285],["tribuna.com",286],["trendsderzukunft.de",287],["gal-dem.com",287],["lostineu.eu",287],["oggitreviso.it",287],["speisekarte.de",287],["mixed.de",287],["lightnovelspot.com",[288,289]],["lightnovelworld.com",[288,289]],["novelpub.com",[288,289]],["webnovelpub.com",[288,289]],["mail.yahoo.com",290],["hwzone.co.il",291],["nammakalvi.com",292],["javmoon.me",293],["c2g.at",294],["terafly.me",294],["elamigos-games.com",294],["elamigos-games.net",294],["dktechnicalmate.com",295],["recipahi.com",295],["converter-btc.world",295],["kaystls.site",296],["aquarius-horoscopes.com",297],["cancer-horoscopes.com",297],["dubipc.blogspot.com",297],["echoes.gr",297],["engel-horoskop.de",297],["freegames44.com",297],["fuerzasarmadas.eu",297],["gemini-horoscopes.com",297],["jurukunci.net",297],["krebs-horoskop.com",297],["leo-horoscopes.com",297],["maliekrani.com",297],["nklinks.click",297],["ourenseando.es",297],["pisces-horoscopes.com",297],["radio-en-direct.fr",297],["sagittarius-horoscopes.com",297],["scorpio-horoscopes.com",297],["singlehoroskop-loewe.de",297],["skat-karten.de",297],["skorpion-horoskop.com",297],["taurus-horoscopes.com",297],["the1security.com",297],["torrentmovies.online",297],["virgo-horoscopes.com",297],["zonamarela.blogspot.com",297],["yoima.hatenadiary.com",297],["vpntester.org",298],["watchhentai.net",299],["japscan.lol",300],["digitask.ru",301],["tempumail.com",302],["sexvideos.host",303],["10alert.com",305],["cryptstream.de",306],["nydus.org",306],["techhelpbd.com",307],["fapdrop.com",308],["cellmapper.net",309],["hdrez.com",310],["youwatch-serie.com",310],["printablecreative.com",311],["comohoy.com",312],["leak.sx",312],["paste.bin.sx",312],["pornleaks.in",312],["merlininkazani.com",312],["j91.asia",314],["jeniusplay.com",315],["indianyug.com",316],["rgb.vn",316],["needrom.com",317],["criptologico.com",318],["megadrive-emulator.com",319],["eromanga-show.com",320],["hentai-one.com",320],["hentaipaw.com",320],["10minuteemails.com",321],["luxusmail.org",321],["w3cub.com",322],["bangpremier.com",323],["nyaa.iss.ink",324],["tnp98.xyz",326],["freepdfcomic.com",327],["memedroid.com",328],["animesync.org",329],["karaoketexty.cz",330],["resortcams.com",331],["mjakmama24.pl",333],["security-demo.extrahop.com",334]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,7]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",6],["eztv",6],["sushi-scan",10],["spigotunlocked",10],["ahmedmode",10],["kissasian",13],["rp5",14],["mma-core",15],["yts",20],["720pstream",20],["1stream",20],["magesy",21],["shortzzy",23],["thefmovies",25],["urlcero",32],["totaldebrid",35],["sandrives",35],["oploverz",36],["writedroid",37],["fxporn69",46],["aliancapes",46],["pouvideo",48],["povvideo",48],["povw1deo",48],["povwideo",48],["powv1deo",48],["powvibeo",48],["powvideo",48],["powvldeo",48],["tubsexer",54],["porno-tour",54],["lenkino",54],["pornomoll",54],["camsclips",54],["m4ufree",58],["telerium",72],["pandafreegames",86],["thoptv",94],["brainly",100],["streameast",115],["thestreameast",115],["daddylivehd",115],["solvetube",119],["hdfilme",120],["pornhub",121],["wcofun",128],["bollyholic",132],["gotxx",146],["turkanime",147],["voe-unblock",147],["khatrimaza",160],["pogolinks",160],["popcornstream",162],["vembed",195],["xhamsterdeutsch",242],["privatemoviez",246],["gmx",262],["lightnovelpub",[288,289]],["camcaps",304],["drivebot",325],["thenextplanet1",326],["autoscout24",332]]);

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
