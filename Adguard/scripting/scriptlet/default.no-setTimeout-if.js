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
/* global cloneInto */

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetTimeoutIf = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["offset"],["contrformpub"],["trigger","0"],["popup"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["sandbox"],["afterOpen"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["_0x","1000"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["()=>","5000"],["null","10"],["","500"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["/adblock|googletag/"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"],["googleFC"],["hasAdblock"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,8,9]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,121]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,146]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,283]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,280]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["freethesaurus.com",7],["thefreedictionary.com",7],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["starleaks.org",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["tinhocdongthap.com",9],["sakarnewz.com",9],["downloadr.in",9],["topcomicporno.com",9],["dongknows.com",9],["traderepublic.community",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["mbc2.live",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["mangapt.com",9],["seriesperu.com",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,279]],["topsporter.net",[9,279]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["hq-links.com",9],["mobilkulup.com",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["surfsees.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["blackhatworld.com",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["mediafire.com",10],["wcoanimedub.tv",11],["wcoforever.net",11],["openspeedtest.com",11],["addtobucketlist.com",11],["3dzip.org",[11,75]],["ilmeteo.it",11],["wcoforever.com",11],["comprovendolibri.it",11],["healthelia.com",11],["keephealth.info",12],["afreesms.com",13],["kinoger.re",13],["laksa19.github.io",13],["javcl.com",13],["tvlogy.to",13],["live.dragaoconnect.net",13],["beststremo.com",13],["seznam.cz",13],["seznamzpravy.cz",13],["xerifetech.com",13],["freemcserver.net",13],["wallpapershome.com",15],["anghami.com",16],["wired.com",17],["tutele.sx",18],["footyhunter3.xyz",18],["katestube.com",19],["short.pe",19],["footystreams.net",19],["seattletimes.com",20],["bestgames.com",21],["yiv.com",21],["globalrph.com",22],["e-glossa.it",23],["webcheats.com.br",24],["gala.fr",26],["gentside.com",26],["geo.fr",26],["hbrfrance.fr",26],["nationalgeographic.fr",26],["ohmymag.com",26],["serengo.net",26],["vsd.fr",26],["updato.com",[27,44]],["methbox.com",28],["daizurin.com",28],["pendekarsubs.us",28],["dreamfancy.org",28],["rysafe.blogspot.com",28],["techacode.com",28],["toppng.com",28],["th-world.com",28],["avjamack.com",28],["avjamak.net",28],["dlhd.sx",29],["embedstream.me",29],["yts-subs.net",29],["cnnamador.com",30],["nudecelebforum.com",31],["pronpic.org",32],["thewebflash.com",33],["discordfastfood.com",33],["xup.in",33],["popularmechanics.com",34],["op.gg",35],["lequipe.fr",36],["comunidadgzone.es",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["plex-guide.de",37],["healthtune.site",37],["gewinde-normen.de",37],["tucinehd.com",37],["jellynote.com",38],["eporner.com",40],["pornbimbo.com",41],["4j.com",41],["avoiderrors.com",42],["cgtips.org",[42,225]],["sitarchive.com",42],["livenewsof.com",42],["topnewsshow.com",42],["gatcha.org",42],["empregoestagios.com",42],["everydayonsales.com",42],["kusonime.com",42],["aagmaal.xyz",42],["suicidepics.com",42],["codesnail.com",42],["codingshiksha.com",42],["graphicux.com",42],["asyadrama.com",42],["bitcoinegypt.news",42],["citychilli.com",42],["talkjarvis.com",42],["hdmotori.it",43],["femdomtb.com",45],["camhub.cc",45],["bobs-tube.com",45],["ru-xvideos.me",45],["pornfd.com",45],["popno-tour.net",45],["molll.mobi",45],["watchmdh.to",45],["camwhores.tv",45],["elfqrin.com",46],["satcesc.com",47],["apfelpatient.de",47],["lusthero.com",48],["m2list.com",49],["embed.nana2play.com",49],["elahmad.com",49],["dofusports.xyz",49],["dallasnews.com",50],["lnk.news",51],["lnk.parts",51],["efukt.com",52],["wendycode.com",52],["springfieldspringfield.co.uk",53],["porndoe.com",54],["smsget.net",[55,56]],["kjanime.net",57],["gioialive.it",58],["classicreload.com",59],["scriptzhub.com",59],["hotpornfile.org",60],["coolsoft.altervista.org",60],["hackedonlinegames.com",60],["jkoding.xyz",60],["settlersonlinemaps.com",60],["magdownload.org",60],["kpkuang.org",60],["shareus.site",60],["crypto4yu.com",60],["faucetwork.space",60],["thenightwithoutthedawn.blogspot.com",60],["entutes.com",60],["claimlite.club",60],["bazadecrypto.com",[60,328]],["chicoer.com",61],["bostonherald.com",61],["dailycamera.com",61],["maxcheaters.com",62],["rbxoffers.com",62],["mhn.quest",62],["leagueofgraphs.com",62],["hieunguyenphoto.com",62],["benzinpreis.de",62],["postimees.ee",62],["police.community",62],["gisarea.com",62],["schaken-mods.com",62],["theclashify.com",62],["txori.com",62],["olarila.com",62],["deletedspeedstreams.blogspot.com",62],["schooltravelorganiser.com",62],["xhardhempus.net",62],["sportsplays.com",63],["pornvideotop.com",65],["xstory-fr.com",65],["krotkoosporcie.pl",65],["deinesexfilme.com",66],["einfachtitten.com",66],["halloporno.com",66],["herzporno.com",66],["lesbenhd.com",66],["milffabrik.com",[66,254]],["porn-monkey.com",66],["porndrake.com",66],["pornhubdeutsch.net",66],["pornoaffe.com",66],["pornodavid.com",66],["pornoente.tv",[66,254]],["pornofisch.com",66],["pornofelix.com",66],["pornohammer.com",66],["pornohelm.com",66],["pornoklinge.com",66],["pornotom.com",[66,254]],["pornotommy.com",66],["pornovideos-hd.com",66],["pornozebra.com",[66,254]],["xhamsterdeutsch.xyz",66],["xnxx-sexfilme.com",66],["zerion.cc",66],["letribunaldunet.fr",67],["vladan.fr",67],["live-tv-channels.org",68],["eslfast.com",69],["freegamescasual.com",70],["tcpvpn.com",71],["oko.sh",71],["timesnownews.com",71],["timesnowhindi.com",71],["timesnowmarathi.com",71],["zoomtventertainment.com",71],["tsubasa.im",72],["sholah.net",73],["2rdroid.com",73],["bisceglielive.it",74],["pandajogosgratis.com.br",76],["5278.cc",77],["tonspion.de",79],["duplichecker.com",80],["plagiarismchecker.co",80],["plagiarismdetector.net",80],["searchenginereports.net",80],["giallozafferano.it",81],["autojournal.fr",81],["autoplus.fr",81],["sportauto.fr",81],["linkspaid.com",82],["proxydocker.com",82],["beeimg.com",[83,84]],["emturbovid.com",84],["findjav.com",84],["mmtv01.xyz",84],["stbturbo.xyz",84],["streamsilk.com",84],["ftlauderdalebeachcam.com",85],["ftlauderdalewebcam.com",85],["juneauharborwebcam.com",85],["keywestharborwebcam.com",85],["kittycatcam.com",85],["mahobeachcam.com",85],["miamiairportcam.com",85],["morganhillwebcam.com",85],["njwildlifecam.com",85],["nyharborwebcam.com",85],["paradiseislandcam.com",85],["pompanobeachcam.com",85],["portbermudawebcam.com",85],["portcanaveralwebcam.com",85],["portevergladeswebcam.com",85],["portmiamiwebcam.com",85],["portnywebcam.com",85],["portnassauwebcam.com",85],["portstmaartenwebcam.com",85],["portstthomaswebcam.com",85],["porttampawebcam.com",85],["sxmislandcam.com",85],["themes-dl.com",85],["badassdownloader.com",85],["badasshardcore.com",85],["badassoftcore.com",85],["nulljungle.com",85],["teevee.asia",85],["otakukan.com",85],["gearingcommander.com",87],["generate.plus",88],["calculate.plus",88],["avcesar.com",89],["audiotag.info",90],["tudigitale.it",91],["ibcomputing.com",92],["legia.net",93],["acapellas4u.co.uk",94],["robloxscripts.com",95],["libreriamo.it",95],["postazap.com",95],["medebooks.xyz",95],["tutorials-technology.info",95],["mashtips.com",95],["marriedgames.com.br",95],["4allprograms.me",95],["nurgsm.com",95],["certbyte.com",95],["plugincrack.com",95],["gamingdeputy.com",95],["freewebcart.com",95],["streamhentaimovies.com",96],["konten.co.id",97],["diariodenavarra.es",98],["tubereader.me",98],["scripai.com",98],["myfxbook.com",98],["whatfontis.com",98],["xiaomifans.pl",99],["eletronicabr.com",99],["optifine.net",100],["luzernerzeitung.ch",101],["tagblatt.ch",101],["spellcheck.net",102],["spellchecker.net",102],["spellweb.com",102],["ableitungsrechner.net",103],["alternet.org",104],["gourmetsupremacy.com",104],["shrib.com",105],["pandafiles.com",106],["vidia.tv",[106,127]],["hortonanderfarom.blogspot.com",106],["clarifystraight.com",106],["tutelehd3.xyz",107],["mega4upload.com",107],["coolcast2.com",107],["techclips.net",107],["earthquakecensus.com",107],["footyhunter.lol",107],["gamerarcades.com",107],["poscitech.click",107],["starlive.stream",107],["utopianwilderness.com",107],["wecast.to",107],["sportbar.live",107],["lordchannel.com",107],["play-old-pc-games.com",108],["tunovelaligera.com",109],["tapchipi.com",109],["cuitandokter.com",109],["tech-blogs.com",109],["cardiagn.com",109],["dcleakers.com",109],["esgeeks.com",109],["pugliain.net",109],["uplod.net",109],["worldfreeware.com",109],["fikiri.net",109],["myhackingworld.com",109],["phoenixfansub.com",109],["freecourseweb.com",110],["devcourseweb.com",110],["coursewikia.com",110],["courseboat.com",110],["coursehulu.com",110],["lne.es",114],["pornult.com",115],["webcamsdolls.com",115],["bitcotasks.com",[115,161]],["adsy.pw",115],["playstore.pw",115],["exactpay.online",115],["thothd.to",115],["proplanta.de",116],["hydrogenassociation.org",117],["ludigames.com",117],["sportitalialive.com",117],["made-by.org",117],["xenvn.com",117],["worldtravelling.com",117],["igirls.in",117],["technichero.com",117],["roshiyatech.my.id",117],["24sport.stream",117],["aeroxplorer.com",117],["mad4wheels.com",118],["logi.im",118],["emailnator.com",118],["textograto.com",119],["voyageforum.com",120],["hmc-id.blogspot.com",120],["jemerik.com",120],["myabandonware.com",120],["chatta.it",122],["ketubanjiwa.com",123],["nsfw247.to",124],["funzen.net",124],["fighter.stream",124],["ilclubdellericette.it",124],["hubstream.in",124],["extremereportbot.com",125],["getintopc.com",126],["qoshe.com",128],["lowellsun.com",129],["mamadu.pl",129],["dobrapogoda24.pl",129],["motohigh.pl",129],["namasce.pl",129],["ultimate-catch.eu",130],["cpopchanelofficial.com",131],["creditcardgenerator.com",132],["creditcardrush.com",132],["bostoncommons.net",132],["thejobsmovie.com",132],["livsavr.co",132],["hl-live.de",133],["wohnmobilforum.de",133],["nulledbear.com",133],["sinnerclownceviri.net",133],["satoshi-win.xyz",133],["encurtandourl.com",[133,139]],["freedeepweb.blogspot.com",133],["freesoft.id",133],["zcteam.id",133],["www-daftarharga.blogspot.com",133],["ear-phone-review.com",133],["telefullenvivo.com",133],["listatv.pl",133],["ltc-faucet.xyz",133],["coin-profits.xyz",133],["relampagomovies.com",133],["nilopolisonline.com.br",134],["mesquitaonline.com",134],["yellowbridge.com",134],["socialgirls.im",135],["yaoiotaku.com",136],["camhub.world",137],["moneyhouse.ch",138],["ihow.info",139],["hartico.tv",139],["filesus.com",139],["sturls.com",139],["re.two.re",139],["turbo1.co",139],["cartoonsarea.xyz",139],["valeronevijao.com",140],["cigarlessarefy.com",140],["figeterpiazine.com",140],["yodelswartlike.com",140],["generatesnitrosate.com",140],["crownmakermacaronicism.com",140],["chromotypic.com",140],["gamoneinterrupted.com",140],["metagnathtuggers.com",140],["wolfdyslectic.com",140],["rationalityaloelike.com",140],["sizyreelingly.com",140],["simpulumlamerop.com",140],["urochsunloath.com",140],["monorhinouscassaba.com",140],["counterclockwisejacky.com",140],["35volitantplimsoles5.com",140],["scatch176duplicities.com",140],["antecoxalbobbing1010.com",140],["boonlessbestselling244.com",140],["cyamidpulverulence530.com",140],["guidon40hyporadius9.com",140],["449unceremoniousnasoseptal.com",140],["19turanosephantasia.com",140],["30sensualizeexpression.com",140],["321naturelikefurfuroid.com",140],["745mingiestblissfully.com",140],["availedsmallest.com",140],["greaseball6eventual20.com",140],["toxitabellaeatrebates306.com",140],["20demidistance9elongations.com",140],["audaciousdefaulthouse.com",140],["fittingcentermondaysunday.com",140],["fraudclatterflyingcar.com",140],["launchreliantcleaverriver.com",140],["matriculant401merited.com",140],["realfinanceblogcenter.com",140],["reputationsheriffkennethsand.com",140],["telyn610zoanthropy.com",140],["tubelessceliolymph.com",140],["tummulerviolableness.com",140],["un-block-voe.net",140],["v-o-e-unblock.com",140],["voe-un-block.com",140],["voeun-block.net",140],["voeunbl0ck.com",140],["voeunblck.com",140],["voeunblk.com",140],["voeunblock.com",140],["voeunblock1.com",140],["voeunblock2.com",140],["voeunblock3.com",140],["agefi.fr",141],["cariskuy.com",142],["letras2.com",142],["yusepjaelani.blogspot.com",143],["letras.mus.br",144],["mtlurb.com",145],["port.hu",146],["acdriftingpro.com",146],["flight-report.com",146],["forumdz.com",146],["abandonmail.com",146],["flmods.com",146],["zilinak.sk",146],["projectfreetv.stream",146],["hotdesimms.com",146],["pdfaid.com",146],["mconverter.eu",146],["dzeko11.net",[146,279]],["bootdey.com",146],["mail.com",146],["expresskaszubski.pl",146],["moegirl.org.cn",146],["onemanhua.com",147],["t3n.de",148],["allindiaroundup.com",149],["vectorizer.io",150],["smgplaza.com",150],["onehack.us",150],["thapcam.net",150],["thefastlaneforum.com",151],["trade2win.com",152],["modagamers.com",153],["freemagazines.top",153],["straatosphere.com",153],["rule34porn.net",153],["nullpk.com",153],["adslink.pw",153],["downloadudemy.com",153],["picgiraffe.com",153],["weadown.com",153],["freepornsex.net",153],["nurparatodos.com.ar",153],["librospreuniversitariospdf.blogspot.com",154],["msdos-games.com",154],["blocklayer.com",154],["forexeen.us",154],["khsm.io",154],["webcreator-journal.com",154],["nu6i-bg-net.com",154],["routech.ro",155],["hokej.net",155],["turkmmo.com",156],["palermotoday.it",157],["baritoday.it",157],["trentotoday.it",157],["agrigentonotizie.it",157],["anconatoday.it",157],["arezzonotizie.it",157],["avellinotoday.it",157],["bresciatoday.it",157],["brindisireport.it",157],["casertanews.it",157],["cataniatoday.it",157],["cesenatoday.it",157],["chietitoday.it",157],["forlitoday.it",157],["frosinonetoday.it",157],["genovatoday.it",157],["ilpescara.it",157],["ilpiacenza.it",157],["latinatoday.it",157],["lecceprima.it",157],["leccotoday.it",157],["livornotoday.it",157],["messinatoday.it",157],["milanotoday.it",157],["modenatoday.it",157],["monzatoday.it",157],["novaratoday.it",157],["padovaoggi.it",157],["parmatoday.it",157],["perugiatoday.it",157],["pisatoday.it",157],["quicomo.it",157],["ravennatoday.it",157],["reggiotoday.it",157],["riminitoday.it",157],["romatoday.it",157],["salernotoday.it",157],["sondriotoday.it",157],["sportpiacenza.it",157],["ternitoday.it",157],["today.it",157],["torinotoday.it",157],["trevisotoday.it",157],["triesteprima.it",157],["udinetoday.it",157],["veneziatoday.it",157],["vicenzatoday.it",157],["thumpertalk.com",158],["arkcod.org",158],["facciabuco.com",159],["softx64.com",160],["thelayoff.com",161],["manwan.xyz",161],["blog.coinsrise.net",161],["blog.cryptowidgets.net",161],["blog.insurancegold.in",161],["blog.wiki-topia.com",161],["blog.coinsvalue.net",161],["blog.cookinguide.net",161],["blog.freeoseocheck.com",161],["blog.makeupguide.net",161],["blog.carstopia.net",161],["blog.carsmania.net",161],["shorterall.com",161],["blog24.me",161],["maxstream.video",161],["maxlinks.online",161],["tvepg.eu",161],["pstream.net",162],["dailymaverick.co.za",163],["apps2app.com",164],["cheatermad.com",165],["ville-ideale.fr",166],["eodev.com",167],["tickzoo.tv",168],["fm-arena.com",169],["tradersunion.com",170],["tandess.com",171],["faqwiki.us",172],["sonixgvn.net",172],["spontacts.com",173],["dankmemer.lol",174],["getexploits.com",175],["fplstatistics.com",176],["breitbart.com",177],["salidzini.lv",178],["choosingnothing.com",179],["cryptorank.io",[180,181]],["th.gl",182],["4kwebplay.xyz",183],["qqwebplay.xyz",183],["viwlivehdplay.ru",183],["molbiotools.com",184],["vods.tv",185],["18xxx.xyz",186],["raidrush.net",187],["xnxxcom.xyz",188],["videzz.net",189],["spambox.xyz",190],["melaniezettofrais.online",191],["giga-uqload.xyz",192],["gaystream.online",192],["bembed.net",192],["elbailedeltroleo.site",192],["embedv.net",192],["fslinks.org",192],["listeamed.net",192],["v6embed.xyz",192],["vgplayer.xyz",192],["vid-guard.com",192],["vidguard.online",192],["starkroboticsfrc.com",193],["sinonimos.de",193],["antonimos.de",193],["quesignifi.ca",193],["tiktokrealtime.com",193],["tiktokcounter.net",193],["tpayr.xyz",193],["poqzn.xyz",193],["ashrfd.xyz",193],["rezsx.xyz",193],["tryzt.xyz",193],["ashrff.xyz",193],["rezst.xyz",193],["dawenet.com",193],["erzar.xyz",193],["waezm.xyz",193],["waezg.xyz",193],["blackwoodacademy.org",193],["cryptednews.space",193],["vivuq.com",193],["swgop.com",193],["vbnmll.com",193],["telcoinfo.online",193],["dshytb.com",193],["enit.in",194],["financerites.com",194],["fadedfeet.com",195],["homeculina.com",195],["ineedskin.com",195],["kenzo-flowertag.com",195],["lawyex.co",195],["mdn.lol",195],["bitzite.com",196],["coingraph.us",197],["impact24.us",197],["apkmodvn.com",198],["mod1s.com",198],["apkmoddone.com",199],["dl.apkmoddone.com",200],["phongroblox.com",200],["my-code4you.blogspot.com",201],["vrcmods.com",202],["osuskinner.com",202],["osuskins.net",202],["pentruea.com",[203,204]],["mchacks.net",205],["why-tech.it",206],["compsmag.com",207],["tapetus.pl",208],["autoroad.cz",209],["brawlhalla.fr",209],["tecnobillo.com",209],["sexcamfreeporn.com",210],["breatheheavy.com",211],["wenxuecity.com",212],["key-hub.eu",213],["fabioambrosi.it",214],["tattle.life",215],["emuenzen.de",215],["terrylove.com",215],["mynet.com",[216,280]],["cidade.iol.pt",217],["fantacalcio.it",218],["hentaifreak.org",219],["hypebeast.com",220],["krankheiten-simulieren.de",221],["catholic.com",222],["ad-doge.com",223],["3dmodelshare.org",224],["gourmetscans.net",225],["techinferno.com",226],["ibeconomist.com",227],["bookriot.com",228],["purposegames.com",229],["globo.com",230],["latimes.com",230],["claimrbx.gg",231],["perelki.net",232],["vpn-anbieter-vergleich-test.de",233],["livingincebuforums.com",234],["paperzonevn.com",235],["alltechnerd.com",236],["malaysianwireless.com",237],["erinsakura.com",238],["infofuge.com",238],["freejav.guru",238],["novelmultiverse.com",238],["fritidsmarkedet.dk",239],["maskinbladet.dk",239],["15min.lt",240],["baddiehub.com",241],["mr9soft.com",242],["21porno.com",243],["adult-sex-gamess.com",244],["hentaigames.app",244],["mobilesexgamesx.com",244],["mysexgamer.com",244],["porngameshd.com",244],["sexgamescc.com",244],["xnxx-sex-videos.com",244],["f2movies.to",245],["freeporncave.com",246],["tubsxxx.com",247],["pornojenny.com",248],["subtitle.one",249],["manga18fx.com",250],["freebnbcoin.com",250],["sextvx.com",251],["studydhaba.com",252],["freecourse.tech",252],["victor-mochere.com",252],["papunika.com",252],["mobilanyheter.net",252],["prajwaldesai.com",[252,271]],["ftuapps.dev",252],["muztext.com",253],["pornohans.com",254],["nursexfilme.com",254],["pornohirsch.net",254],["xhamster-sexvideos.com",254],["pornoschlange.com",254],["hdpornos.net",254],["gutesexfilme.com",254],["short1.site",254],["zona-leros.com",254],["charbelnemnom.com",255],["simplebits.io",256],["online-fix.me",257],["gamersdiscussionhub.com",258],["owlzo.com",259],["q1003.com",260],["blogpascher.com",261],["testserver.pro",262],["lifestyle.bg",262],["money.bg",262],["news.bg",262],["topsport.bg",262],["webcafe.bg",262],["mgnet.xyz",263],["advertiserandtimes.co.uk",264],["xvideos2020.me",265],["111.90.159.132",266],["techsolveprac.com",267],["joomlabeginner.com",268],["largescaleforums.com",269],["dubznetwork.com",270],["hentaidexy.com",272],["babia.to",273],["code2care.org",274],["xxxxsx.com",276],["ngontinh24.com",277],["idevicecentral.com",278],["zona11.com",279],["scsport.live",279],["blog.esuteru.com",280],["blog.livedoor.jp",280],["carscoops.com",280],["dziennik.pl",280],["eurointegration.com.ua",280],["flatpanelshd.com",280],["fourfourtwo.co.kr",280],["issuya.com",280],["itainews.com",280],["iusm.co.kr",280],["logicieleducatif.fr",280],["mydaily.co.kr",280],["onlinegdb.com",280],["pravda.com.ua",280],["reportera.co.kr",280],["sportsrec.com",280],["sportsseoul.com",280],["taxguru.in",280],["text-compare.com",280],["thestar.co.uk",280],["tweaksforgeeks.com",280],["videogamemods.com",280],["wfmz.com",280],["worldhistory.org",280],["yorkshirepost.co.uk",280],["etnews.com",280],["wort-suchen.de",280],["word-grabber.com",280],["palabr.as",280],["motscroises.fr",280],["cruciverba.it",280],["raenonx.cc",280],["indiatimes.com",280],["thesaurus.net",281],["automobile-catalog.com",281],["motorbikecatalog.com",281],["maketecheasier.com",281],["jjang0u.com",282],["mangacrab.com",284],["viefaucet.com",285],["cloud-computing-central.com",286],["afk.guide",287],["businessnamegenerator.com",288],["derstandard.at",289],["derstandard.de",289],["rocketnews24.com",290],["soranews24.com",290],["youpouch.com",290],["ilsole24ore.com",291],["ipacrack.com",292],["hentaiporn.one",293],["infokik.com",294],["daemonanime.net",295],["daemon-hentai.com",295],["deezer.com",296],["fosslinux.com",297],["shrdsk.me",298],["examword.com",299],["sempreupdate.com.br",299],["tribuna.com",300],["trendsderzukunft.de",301],["gal-dem.com",301],["lostineu.eu",301],["oggitreviso.it",301],["speisekarte.de",301],["mixed.de",301],["lightnovelspot.com",[302,303]],["lightnovelworld.com",[302,303]],["novelpub.com",[302,303]],["webnovelpub.com",[302,303]],["mail.yahoo.com",304],["hwzone.co.il",305],["nammakalvi.com",306],["javmoon.me",307],["c2g.at",308],["terafly.me",308],["elamigos-games.com",308],["elamigos-games.net",308],["dktechnicalmate.com",309],["recipahi.com",309],["converter-btc.world",309],["kaystls.site",310],["aquarius-horoscopes.com",311],["cancer-horoscopes.com",311],["dubipc.blogspot.com",311],["echoes.gr",311],["engel-horoskop.de",311],["freegames44.com",311],["fuerzasarmadas.eu",311],["gemini-horoscopes.com",311],["jurukunci.net",311],["krebs-horoskop.com",311],["leo-horoscopes.com",311],["maliekrani.com",311],["nklinks.click",311],["ourenseando.es",311],["pisces-horoscopes.com",311],["radio-en-direct.fr",311],["sagittarius-horoscopes.com",311],["scorpio-horoscopes.com",311],["singlehoroskop-loewe.de",311],["skat-karten.de",311],["skorpion-horoskop.com",311],["taurus-horoscopes.com",311],["the1security.com",311],["torrentmovies.online",311],["virgo-horoscopes.com",311],["zonamarela.blogspot.com",311],["yoima.hatenadiary.com",311],["vpntester.org",312],["watchhentai.net",313],["japscan.lol",314],["digitask.ru",315],["tempumail.com",316],["sexvideos.host",317],["10alert.com",319],["cryptstream.de",320],["nydus.org",320],["techhelpbd.com",321],["fapdrop.com",322],["cellmapper.net",323],["hdrez.com",324],["youwatch-serie.com",324],["newscon.org",325],["printablecreative.com",326],["comohoy.com",327],["leak.sx",327],["paste.bin.sx",327],["pornleaks.in",327],["merlininkazani.com",327],["j91.asia",329],["jeniusplay.com",330],["indianyug.com",331],["rgb.vn",331],["needrom.com",332],["criptologico.com",333],["megadrive-emulator.com",334],["eromanga-show.com",335],["hentai-one.com",335],["hentaipaw.com",335],["10minuteemails.com",336],["luxusmail.org",336],["w3cub.com",337],["bangpremier.com",338],["nyaa.iss.ink",339],["tnp98.xyz",341],["freepdfcomic.com",342],["memedroid.com",343],["animesync.org",344],["karaoketexty.cz",345],["filmizlehdfilm.com",346],["fullfilmizle.cc",346],["resortcams.com",347],["mjakmama24.pl",349],["security-demo.extrahop.com",350],["lastampa.it",351],["caroloportunidades.com.br",352],["connectionbrazilusa.com",352]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,6]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",5],["eztv",5],["sushi-scan",9],["spigotunlocked",9],["ahmedmode",9],["kissasian",12],["rp5",13],["mma-core",14],["yts",18],["720pstream",18],["1stream",18],["thefmovies",19],["urlcero",25],["totaldebrid",28],["sandrives",28],["fxporn69",37],["aliancapes",37],["pouvideo",39],["povvideo",39],["povw1deo",39],["povwideo",39],["powv1deo",39],["powvibeo",39],["powvideo",39],["powvldeo",39],["tubsexer",45],["porno-tour",45],["lenkino",45],["pornomoll",45],["camsclips",45],["m4ufree",49],["writedroid",60],["telerium",64],["pandafreegames",78],["thoptv",86],["shortzzy",95],["streameast",107],["thestreameast",107],["daddylivehd",107],["solvetube",111],["hdfilme",112],["pornhub",113],["wcofun",120],["bollyholic",124],["gotxx",139],["turkanime",140],["voe-unblock",140],["khatrimaza",153],["pogolinks",153],["popcornstream",155],["brainly",167],["oploverz",168],["vembed",192],["xhamsterdeutsch",254],["privatemoviez",258],["gmx",275],["lightnovelpub",[302,303]],["camcaps",318],["drivebot",340],["thenextplanet1",341],["filmizletv",346],["autoscout24",348]]);

const exceptionsMap = new Map([["panel.freemcserver.net",[13]]]);

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
    proxyApplyFn('setTimeout', function setTimeout(target, thisArg, args) {
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
    });
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    if ( fn.prototype && fn.prototype.constructor === fn ) {
        context[prop] = new Proxy(fn, {
            construct: handler,
            get(target, prop, receiver) {
                if ( prop === 'toString' ) { return toString; }
                return Reflect.get(target, prop, receiver);
            },
        });
        return (...args) => Reflect.construct(...args);
    }
    context[prop] = new Proxy(fn, {
        apply: handler,
        get(target, prop, receiver) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop, receiver);
        },
    });
    return (...args) => Reflect.apply(...args);
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
