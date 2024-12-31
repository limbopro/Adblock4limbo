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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_preventSetTimeout = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["displayAdBlockerMessage"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["afterOpen"],["chkADB"],["onDetected"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["/^(?=.*location\\.href)(?!.*paragraph).*/s"],["data-google-query-id"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["googleFC"],["/location\\[.+\\]\\s*=\\s*[$\\w]+\\(\\d+\\)\\s*\\)\\s*\\}/"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,6,7]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,116]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,141]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,251]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,247]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["hdbox.ws",7],["todopolicia.com",7],["scat.gold",7],["freecoursesite.com",7],["windowcleaningforums.co.uk",7],["cruisingearth.com",7],["hobby-machinist.com",7],["freegogpcgames.com",7],["latitude.to",7],["kitchennovel.com",7],["w3layouts.com",7],["blog.receivefreesms.co.uk",7],["eductin.com",7],["dealsfinders.blog",7],["audiobooks4soul.com",7],["tinhocdongthap.com",7],["sakarnewz.com",7],["downloadr.in",7],["topcomicporno.com",7],["dongknows.com",7],["celtadigital.com",7],["iptvrun.com",7],["adsup.lk",7],["cryptomonitor.in",7],["areatopik.com",7],["cardscanner.co",7],["nullforums.net",7],["courseclub.me",7],["tamarindoyam.com",7],["jeep-cj.com",7],["choiceofmods.com",7],["myqqjd.com",7],["ssdtop.com",7],["apkhex.com",7],["gezegenforum.com",7],["mbc2.live",7],["iptvapps.net",7],["null-scripts.net",7],["nullscripts.net",7],["bloground.ro",7],["witcherhour.com",7],["ottverse.com",7],["torrentmac.net",7],["mazakony.com",7],["laptechinfo.com",7],["mc-at.org",7],["playstationhaber.com",7],["seriesperu.com",7],["pesprofessionals.com",7],["wpsimplehacks.com",7],["sportshub.to",[7,246]],["topsporter.net",[7,246]],["darkwanderer.net",7],["truckingboards.com",7],["coldfrm.org",7],["azrom.net",7],["freepatternsarea.com",7],["alttyab.net",7],["hq-links.com",7],["mobilkulup.com",7],["esopress.com",7],["nesiaku.my.id",7],["jipinsoft.com",7],["surfsees.com",7],["truthnews.de",7],["farsinama.com",7],["worldofiptv.com",7],["vuinsider.com",7],["crazydl.net",7],["gamemodsbase.com",7],["babiato.tech",7],["secuhex.com",7],["turkishaudiocenter.com",7],["galaxyos.net",7],["blackhatworld.com",7],["bizdustry.com",7],["storefront.com.ng",7],["pkbiosfix.com",7],["casi3.xyz",7],["starleaks.org",7],["mediafire.com",8],["wcoanimedub.tv",9],["wcoforever.net",9],["openspeedtest.com",9],["addtobucketlist.com",9],["3dzip.org",[9,72]],["ilmeteo.it",9],["wcoforever.com",9],["comprovendolibri.it",9],["healthelia.com",9],["keephealth.info",10],["wallpapershome.com",12],["anghami.com",13],["wired.com",14],["tutele.sx",15],["footyhunter3.xyz",15],["katestube.com",16],["short.pe",16],["footystreams.net",16],["seattletimes.com",17],["bestgames.com",18],["yiv.com",18],["globalrph.com",19],["e-glossa.it",20],["webcheats.com.br",21],["gala.fr",23],["gentside.com",23],["geo.fr",23],["hbrfrance.fr",23],["nationalgeographic.fr",23],["ohmymag.com",23],["serengo.net",23],["vsd.fr",23],["updato.com",[24,41]],["methbox.com",25],["daizurin.com",25],["pendekarsubs.us",25],["dreamfancy.org",25],["rysafe.blogspot.com",25],["techacode.com",25],["toppng.com",25],["th-world.com",25],["avjamack.com",25],["avjamak.net",25],["dlhd.sx",26],["embedstream.me",26],["yts-subs.net",26],["cnnamador.com",27],["nudecelebforum.com",28],["pronpic.org",29],["thewebflash.com",30],["discordfastfood.com",30],["xup.in",30],["popularmechanics.com",31],["op.gg",32],["lequipe.fr",33],["comunidadgzone.es",34],["mp3fy.com",34],["lebensmittelpraxis.de",34],["ebookdz.com",34],["forum-pokemon-go.fr",34],["praxis-jugendarbeit.de",34],["dictionnaire-medical.net",34],["cle0desktop.blogspot.com",34],["up-load.io",34],["direct-link.net",34],["direkt-wissen.com",34],["keysbrasil.blogspot.com",34],["hotpress.info",34],["turkleech.com",34],["anibatch.me",34],["anime-i.com",34],["healthtune.site",34],["gewinde-normen.de",34],["tucinehd.com",34],["plex-guide.de",34],["jellynote.com",35],["eporner.com",37],["pornbimbo.com",38],["4j.com",38],["avoiderrors.com",39],["sitarchive.com",39],["livenewsof.com",39],["topnewsshow.com",39],["gatcha.org",39],["empregoestagios.com",39],["everydayonsales.com",39],["kusonime.com",39],["aagmaal.xyz",39],["suicidepics.com",39],["codesnail.com",39],["codingshiksha.com",39],["graphicux.com",39],["asyadrama.com",39],["bitcoinegypt.news",39],["citychilli.com",39],["talkjarvis.com",39],["hdmotori.it",40],["femdomtb.com",42],["camhub.cc",42],["bobs-tube.com",42],["pornfd.com",42],["popno-tour.net",42],["molll.mobi",42],["watchmdh.to",42],["camwhores.tv",42],["elfqrin.com",43],["satcesc.com",44],["apfelpatient.de",44],["lusthero.com",45],["m2list.com",46],["embed.nana2play.com",46],["elahmad.com",46],["dofusports.xyz",46],["dallasnews.com",47],["lnk.news",48],["lnk.parts",48],["efukt.com",49],["wendycode.com",49],["springfieldspringfield.co.uk",50],["porndoe.com",51],["smsget.net",[52,53]],["kjanime.net",54],["gioialive.it",55],["classicreload.com",56],["scriptzhub.com",56],["hotpornfile.org",57],["coolsoft.altervista.org",57],["hackedonlinegames.com",57],["jkoding.xyz",57],["dailytech-news.eu",57],["settlersonlinemaps.com",57],["ad-doge.com",57],["magdownload.org",57],["kpkuang.org",57],["shareus.site",57],["crypto4yu.com",57],["faucetwork.space",57],["thenightwithoutthedawn.blogspot.com",57],["entutes.com",57],["claimlite.club",57],["newscon.org",57],["chicoer.com",58],["bostonherald.com",58],["dailycamera.com",58],["maxcheaters.com",59],["rbxoffers.com",59],["postimees.ee",59],["police.community",59],["gisarea.com",59],["schaken-mods.com",59],["tvnet.lv",59],["theclashify.com",59],["txori.com",59],["olarila.com",59],["deletedspeedstreams.blogspot.com",59],["schooltravelorganiser.com",59],["xhardhempus.net",59],["mhn.quest",59],["leagueofgraphs.com",59],["hieunguyenphoto.com",59],["benzinpreis.de",59],["sportsplays.com",60],["pornvideotop.com",62],["krotkoosporcie.pl",62],["xstory-fr.com",62],["deinesexfilme.com",63],["einfachtitten.com",63],["halloporno.com",63],["herzporno.com",63],["lesbenhd.com",63],["milffabrik.com",[63,219]],["porn-monkey.com",63],["porndrake.com",63],["pornhubdeutsch.net",63],["pornoaffe.com",63],["pornodavid.com",63],["pornoente.tv",[63,219]],["pornofisch.com",63],["pornofelix.com",63],["pornohammer.com",63],["pornohelm.com",63],["pornoklinge.com",63],["pornotom.com",[63,219]],["pornotommy.com",63],["pornovideos-hd.com",63],["pornozebra.com",[63,219]],["xhamsterdeutsch.xyz",63],["xnxx-sexfilme.com",63],["zerion.cc",63],["letribunaldunet.fr",64],["vladan.fr",64],["live-tv-channels.org",65],["eslfast.com",66],["freegamescasual.com",67],["tcpvpn.com",68],["oko.sh",68],["timesnownews.com",68],["timesnowhindi.com",68],["timesnowmarathi.com",68],["zoomtventertainment.com",68],["tsubasa.im",69],["sholah.net",70],["2rdroid.com",70],["bisceglielive.it",71],["pandajogosgratis.com.br",73],["5278.cc",74],["tonspion.de",76],["duplichecker.com",77],["plagiarismchecker.co",77],["plagiarismdetector.net",77],["searchenginereports.net",77],["giallozafferano.it",78],["autojournal.fr",78],["autoplus.fr",78],["sportauto.fr",78],["linkspaid.com",79],["proxydocker.com",79],["beeimg.com",[80,81]],["emturbovid.com",81],["findjav.com",81],["javggvideo.xyz",81],["mmtv01.xyz",81],["stbturbo.xyz",81],["streamsilk.com",81],["ftlauderdalebeachcam.com",82],["ftlauderdalewebcam.com",82],["juneauharborwebcam.com",82],["keywestharborwebcam.com",82],["kittycatcam.com",82],["mahobeachcam.com",82],["miamiairportcam.com",82],["morganhillwebcam.com",82],["njwildlifecam.com",82],["nyharborwebcam.com",82],["paradiseislandcam.com",82],["pompanobeachcam.com",82],["portbermudawebcam.com",82],["portcanaveralwebcam.com",82],["portevergladeswebcam.com",82],["portmiamiwebcam.com",82],["portnywebcam.com",82],["portnassauwebcam.com",82],["portstmaartenwebcam.com",82],["portstthomaswebcam.com",82],["porttampawebcam.com",82],["sxmislandcam.com",82],["themes-dl.com",82],["badassdownloader.com",82],["badasshardcore.com",82],["badassoftcore.com",82],["nulljungle.com",82],["teevee.asia",82],["otakukan.com",82],["gearingcommander.com",84],["generate.plus",85],["calculate.plus",85],["avcesar.com",86],["audiotag.info",87],["tudigitale.it",88],["ibcomputing.com",89],["legia.net",90],["acapellas4u.co.uk",91],["robloxscripts.com",92],["libreriamo.it",92],["postazap.com",92],["medebooks.xyz",92],["mashtips.com",92],["marriedgames.com.br",92],["4allprograms.me",92],["nurgsm.com",92],["certbyte.com",92],["plugincrack.com",92],["gamingdeputy.com",92],["freewebcart.com",92],["streamhentaimovies.com",93],["konten.co.id",94],["diariodenavarra.es",95],["scripai.com",95],["myfxbook.com",95],["whatfontis.com",95],["tubereader.me",95],["xiaomifans.pl",96],["eletronicabr.com",96],["optifine.net",97],["luzernerzeitung.ch",98],["tagblatt.ch",98],["spellcheck.net",99],["spellchecker.net",99],["spellweb.com",99],["ableitungsrechner.net",100],["alternet.org",101],["gourmetsupremacy.com",101],["shrib.com",102],["pandafiles.com",103],["vidia.tv",[103,122]],["hortonanderfarom.blogspot.com",103],["coolcast2.com",104],["techclips.net",104],["earthquakecensus.com",104],["footyhunter.lol",104],["gamerarcades.com",104],["poscitech.click",104],["starlive.stream",104],["utopianwilderness.com",104],["wecast.to",104],["sportbar.live",104],["tunovelaligera.com",105],["tapchipi.com",105],["cuitandokter.com",105],["tech-blogs.com",105],["cardiagn.com",105],["dcleakers.com",105],["esgeeks.com",105],["pugliain.net",105],["uplod.net",105],["worldfreeware.com",105],["fikiri.net",105],["myhackingworld.com",105],["phoenixfansub.com",105],["freecourseweb.com",106],["devcourseweb.com",106],["coursewikia.com",106],["courseboat.com",106],["coursehulu.com",106],["lne.es",109],["pornult.com",110],["webcamsdolls.com",110],["bitcotasks.com",[110,157]],["adsy.pw",110],["playstore.pw",110],["exactpay.online",110],["thothd.to",110],["proplanta.de",111],["hydrogenassociation.org",112],["ludigames.com",112],["made-by.org",112],["xenvn.com",112],["worldtravelling.com",112],["igirls.in",112],["technichero.com",112],["roshiyatech.my.id",112],["24sport.stream",112],["androidadult.com",112],["aeroxplorer.com",112],["sportitalialive.com",112],["mad4wheels.com",113],["logi.im",113],["emailnator.com",113],["textograto.com",114],["voyageforum.com",115],["hmc-id.blogspot.com",115],["myabandonware.com",115],["ilforumdeibrutti.is",115],["chatta.it",117],["ketubanjiwa.com",118],["nsfw247.to",119],["funzen.net",119],["ilclubdellericette.it",119],["extremereportbot.com",120],["getintopc.com",121],["qoshe.com",123],["lowellsun.com",124],["mamadu.pl",124],["dobrapogoda24.pl",124],["motohigh.pl",124],["namasce.pl",124],["ultimate-catch.eu",125],["cpopchanelofficial.com",126],["creditcardgenerator.com",127],["creditcardrush.com",127],["bostoncommons.net",127],["thejobsmovie.com",127],["livsavr.co",127],["hl-live.de",128],["satoshi-win.xyz",128],["encurtandourl.com",[128,134]],["freesoft.id",128],["zcteam.id",128],["www-daftarharga.blogspot.com",128],["ear-phone-review.com",128],["telefullenvivo.com",128],["listatv.pl",128],["daemon-hentai.com",[128,264]],["ltc-faucet.xyz",128],["coin-profits.xyz",128],["relampagomovies.com",128],["wohnmobilforum.de",128],["nulledbear.com",128],["sinnerclownceviri.net",128],["nilopolisonline.com.br",129],["mesquitaonline.com",129],["yellowbridge.com",129],["socialgirls.im",130],["yaoiotaku.com",131],["camhub.world",132],["moneyhouse.ch",133],["ihow.info",134],["filesus.com",134],["sturls.com",134],["re.two.re",134],["turbo1.co",134],["cartoonsarea.xyz",134],["hartico.tv",134],["valeronevijao.com",135],["cigarlessarefy.com",135],["figeterpiazine.com",135],["yodelswartlike.com",135],["generatesnitrosate.com",135],["crownmakermacaronicism.com",135],["chromotypic.com",135],["gamoneinterrupted.com",135],["metagnathtuggers.com",135],["wolfdyslectic.com",135],["rationalityaloelike.com",135],["sizyreelingly.com",135],["simpulumlamerop.com",135],["urochsunloath.com",135],["monorhinouscassaba.com",135],["counterclockwisejacky.com",135],["35volitantplimsoles5.com",135],["scatch176duplicities.com",135],["antecoxalbobbing1010.com",135],["boonlessbestselling244.com",135],["cyamidpulverulence530.com",135],["guidon40hyporadius9.com",135],["449unceremoniousnasoseptal.com",135],["19turanosephantasia.com",135],["30sensualizeexpression.com",135],["321naturelikefurfuroid.com",135],["745mingiestblissfully.com",135],["availedsmallest.com",135],["greaseball6eventual20.com",135],["toxitabellaeatrebates306.com",135],["20demidistance9elongations.com",135],["audaciousdefaulthouse.com",135],["fittingcentermondaysunday.com",135],["fraudclatterflyingcar.com",135],["launchreliantcleaverriver.com",135],["matriculant401merited.com",135],["realfinanceblogcenter.com",135],["reputationsheriffkennethsand.com",135],["telyn610zoanthropy.com",135],["tubelessceliolymph.com",135],["tummulerviolableness.com",135],["un-block-voe.net",135],["v-o-e-unblock.com",135],["voe-un-block.com",135],["voeun-block.net",135],["voeunbl0ck.com",135],["voeunblck.com",135],["voeunblk.com",135],["voeunblock.com",135],["voeunblock1.com",135],["voeunblock2.com",135],["voeunblock3.com",135],["agefi.fr",136],["cariskuy.com",137],["letras2.com",137],["yusepjaelani.blogspot.com",138],["letras.mus.br",139],["mtlurb.com",140],["port.hu",141],["acdriftingpro.com",141],["flight-report.com",141],["forumdz.com",141],["abandonmail.com",141],["flmods.com",141],["zilinak.sk",141],["projectfreetv.stream",141],["hotdesimms.com",141],["pdfaid.com",141],["dzeko11.net",[141,246]],["bootdey.com",141],["mail.com",141],["expresskaszubski.pl",141],["moegirl.org.cn",141],["flix-wave.lol",141],["fmovies0.cc",141],["onemanhua.com",142],["laksa19.github.io",143],["javcl.com",143],["tvlogy.to",143],["live.dragaoconnect.net",143],["beststremo.com",143],["seznam.cz",143],["seznamzpravy.cz",143],["xerifetech.com",143],["freemcserver.net",143],["t3n.de",144],["allindiaroundup.com",145],["vectorizer.io",146],["smgplaza.com",146],["onehack.us",146],["thapcam.net",146],["thefastlaneforum.com",147],["trade2win.com",148],["modagamers.com",149],["freemagazines.top",149],["straatosphere.com",149],["rule34porn.net",149],["nullpk.com",149],["adslink.pw",149],["downloadudemy.com",149],["picgiraffe.com",149],["weadown.com",149],["freepornsex.net",149],["nurparatodos.com.ar",149],["librospreuniversitariospdf.blogspot.com",150],["forexeen.us",150],["khsm.io",150],["webcreator-journal.com",150],["nu6i-bg-net.com",150],["msdos-games.com",150],["blocklayer.com",150],["routech.ro",151],["hokej.net",151],["turkmmo.com",152],["palermotoday.it",153],["baritoday.it",153],["trentotoday.it",153],["agrigentonotizie.it",153],["anconatoday.it",153],["arezzonotizie.it",153],["avellinotoday.it",153],["bresciatoday.it",153],["brindisireport.it",153],["casertanews.it",153],["cataniatoday.it",153],["cesenatoday.it",153],["chietitoday.it",153],["forlitoday.it",153],["frosinonetoday.it",153],["genovatoday.it",153],["ilpescara.it",153],["ilpiacenza.it",153],["latinatoday.it",153],["lecceprima.it",153],["leccotoday.it",153],["livornotoday.it",153],["messinatoday.it",153],["milanotoday.it",153],["modenatoday.it",153],["monzatoday.it",153],["novaratoday.it",153],["padovaoggi.it",153],["parmatoday.it",153],["perugiatoday.it",153],["pisatoday.it",153],["quicomo.it",153],["ravennatoday.it",153],["reggiotoday.it",153],["riminitoday.it",153],["romatoday.it",153],["salernotoday.it",153],["sondriotoday.it",153],["sportpiacenza.it",153],["ternitoday.it",153],["today.it",153],["torinotoday.it",153],["trevisotoday.it",153],["triesteprima.it",153],["udinetoday.it",153],["veneziatoday.it",153],["vicenzatoday.it",153],["thumpertalk.com",154],["arkcod.org",154],["facciabuco.com",155],["softx64.com",156],["thelayoff.com",157],["blog.coinsrise.net",157],["blog.cryptowidgets.net",157],["blog.insurancegold.in",157],["blog.wiki-topia.com",157],["blog.coinsvalue.net",157],["blog.cookinguide.net",157],["blog.freeoseocheck.com",157],["blog.makeupguide.net",157],["blog.carstopia.net",157],["blog.carsmania.net",157],["shorterall.com",157],["blog24.me",157],["maxstream.video",157],["maxlinks.online",157],["tvepg.eu",157],["manwan.xyz",157],["dailymaverick.co.za",158],["apps2app.com",159],["starkroboticsfrc.com",160],["sinonimos.de",160],["antonimos.de",160],["quesignifi.ca",160],["tiktokrealtime.com",160],["tiktokcounter.net",160],["tpayr.xyz",160],["poqzn.xyz",160],["ashrfd.xyz",160],["rezsx.xyz",160],["tryzt.xyz",160],["ashrff.xyz",160],["rezst.xyz",160],["dawenet.com",160],["erzar.xyz",160],["waezm.xyz",160],["waezg.xyz",160],["blackwoodacademy.org",160],["cryptednews.space",160],["vivuq.com",160],["swgop.com",160],["vbnmll.com",160],["telcoinfo.online",160],["dshytb.com",160],["enit.in",161],["financerites.com",161],["fadedfeet.com",162],["homeculina.com",162],["ineedskin.com",162],["kenzo-flowertag.com",162],["lawyex.co",162],["mdn.lol",162],["bitzite.com",163],["coingraph.us",164],["impact24.us",164],["apkmodvn.com",165],["mod1s.com",165],["apkmoddone.com",166],["dl.apkmoddone.com",167],["phongroblox.com",167],["shortencash.click",168],["my-code4you.blogspot.com",169],["vrcmods.com",170],["osuskinner.com",170],["osuskins.net",170],["pentruea.com",[171,172]],["mchacks.net",173],["why-tech.it",174],["compsmag.com",175],["tapetus.pl",176],["autoroad.cz",177],["brawlhalla.fr",177],["tecnobillo.com",177],["sexcamfreeporn.com",178],["breatheheavy.com",179],["wenxuecity.com",180],["key-hub.eu",181],["fabioambrosi.it",182],["tattle.life",183],["emuenzen.de",183],["terrylove.com",183],["mynet.com",[184,247]],["cidade.iol.pt",185],["fantacalcio.it",186],["hentaifreak.org",187],["hypebeast.com",188],["krankheiten-simulieren.de",189],["catholic.com",190],["3dmodelshare.org",191],["techinferno.com",192],["ibeconomist.com",193],["bookriot.com",194],["purposegames.com",195],["globo.com",196],["latimes.com",196],["claimrbx.gg",197],["perelki.net",198],["vpn-anbieter-vergleich-test.de",199],["livingincebuforums.com",200],["paperzonevn.com",201],["alltechnerd.com",202],["malaysianwireless.com",203],["erinsakura.com",204],["infofuge.com",204],["freejav.guru",204],["novelmultiverse.com",204],["fritidsmarkedet.dk",205],["maskinbladet.dk",205],["15min.lt",206],["baddiehub.com",207],["mr9soft.com",208],["21porno.com",209],["adult-sex-gamess.com",210],["hentaigames.app",210],["mobilesexgamesx.com",210],["mysexgamer.com",210],["porngameshd.com",210],["sexgamescc.com",210],["xnxx-sex-videos.com",210],["f2movies.to",211],["freeporncave.com",212],["tubsxxx.com",213],["subtitle.one",214],["manga18fx.com",215],["freebnbcoin.com",215],["sextvx.com",216],["studydhaba.com",217],["freecourse.tech",217],["victor-mochere.com",217],["papunika.com",217],["mobilanyheter.net",217],["prajwaldesai.com",[217,237]],["ftuapps.dev",217],["muztext.com",218],["pornohans.com",219],["nursexfilme.com",219],["pornohirsch.net",219],["xhamster-sexvideos.com",219],["pornoschlange.com",219],["hdpornos.net",219],["gutesexfilme.com",219],["short1.site",219],["zona-leros.com",219],["charbelnemnom.com",220],["simplebits.io",221],["online-fix.me",222],["gamersdiscussionhub.com",223],["owlzo.com",224],["q1003.com",225],["blogpascher.com",226],["testserver.pro",227],["lifestyle.bg",227],["money.bg",227],["news.bg",227],["topsport.bg",227],["webcafe.bg",227],["schoolcheats.net",228],["mgnet.xyz",229],["advertiserandtimes.co.uk",230],["xvideos2020.me",231],["111.90.159.132",232],["techsolveprac.com",233],["joomlabeginner.com",234],["largescaleforums.com",235],["dubznetwork.com",236],["hentaidexy.com",238],["traderepublic.community",239],["babia.to",240],["code2care.org",241],["xxxxsx.com",243],["ngontinh24.com",244],["idevicecentral.com",245],["zona11.com",246],["scsport.live",246],["blog.esuteru.com",247],["blog.livedoor.jp",247],["carscoops.com",247],["dziennik.pl",247],["eurointegration.com.ua",247],["flatpanelshd.com",247],["fourfourtwo.co.kr",247],["hoyme.jp",247],["issuya.com",247],["itainews.com",247],["iusm.co.kr",247],["logicieleducatif.fr",247],["mydaily.co.kr",247],["onlinegdb.com",247],["picrew.me",247],["pravda.com.ua",247],["reportera.co.kr",247],["sportsrec.com",247],["sportsseoul.com",247],["taxguru.in",247],["text-compare.com",247],["thestar.co.uk",247],["tweaksforgeeks.com",247],["videogamemods.com",247],["wfmz.com",247],["worldhistory.org",247],["yorkshirepost.co.uk",247],["etnews.com",247],["wort-suchen.de",247],["word-grabber.com",247],["palabr.as",247],["motscroises.fr",247],["cruciverba.it",247],["oradesibiu.ro",247],["w.grapps.me",247],["gazetaprawna.pl",247],["pressian.com",247],["raenonx.cc",[247,265]],["indiatimes.com",247],["missyusa.com",247],["aikatu.jp",247],["adintrend.tv",247],["ark-unity.com",247],["cool-style.com.tw",247],["doanhnghiepvn.vn",247],["thesaurus.net",248],["automobile-catalog.com",248],["motorbikecatalog.com",248],["maketecheasier.com",248],["mlbpark.donga.com",249],["jjang0u.com",250],["mangacrab.com",252],["viefaucet.com",253],["cloud-computing-central.com",254],["afk.guide",255],["businessnamegenerator.com",256],["derstandard.at",257],["derstandard.de",257],["rocketnews24.com",258],["soranews24.com",258],["youpouch.com",258],["gourmetscans.net",259],["ilsole24ore.com",260],["ipacrack.com",261],["hentaiporn.one",262],["infokik.com",263],["daemonanime.net",264],["deezer.com",265],["fosslinux.com",266],["shrdsk.me",267],["examword.com",268],["sempreupdate.com.br",268],["tribuna.com",269],["trendsderzukunft.de",270],["gal-dem.com",270],["lostineu.eu",270],["oggitreviso.it",270],["speisekarte.de",270],["mixed.de",270],["lightnovelspot.com",[271,272]],["lightnovelworld.com",[271,272]],["novelpub.com",[271,272]],["webnovelpub.com",[271,272]],["mail.yahoo.com",273],["hwzone.co.il",274],["nammakalvi.com",275],["c2g.at",276],["terafly.me",276],["elamigos-games.com",276],["elamigos-games.net",276],["dktechnicalmate.com",277],["recipahi.com",277],["kaystls.site",278],["aquarius-horoscopes.com",279],["cancer-horoscopes.com",279],["dubipc.blogspot.com",279],["echoes.gr",279],["engel-horoskop.de",279],["freegames44.com",279],["fuerzasarmadas.eu",279],["gemini-horoscopes.com",279],["jurukunci.net",279],["krebs-horoskop.com",279],["leo-horoscopes.com",279],["maliekrani.com",279],["nklinks.click",279],["ourenseando.es",279],["pisces-horoscopes.com",279],["radio-en-direct.fr",279],["sagittarius-horoscopes.com",279],["scorpio-horoscopes.com",279],["singlehoroskop-loewe.de",279],["skat-karten.de",279],["skorpion-horoskop.com",279],["taurus-horoscopes.com",279],["the1security.com",279],["torrentmovies.online",279],["virgo-horoscopes.com",279],["zonamarela.blogspot.com",279],["yoima.hatenadiary.com",279],["vpntester.org",280],["japscan.lol",281],["digitask.ru",282],["tempumail.com",283],["sexvideos.host",284],["10alert.com",286],["cryptstream.de",287],["nydus.org",287],["techhelpbd.com",288],["fapdrop.com",289],["cellmapper.net",290],["hdrez.com",291],["youwatch-serie.com",291],["bembed.net",292],["elbailedeltroleo.site",292],["embedv.net",292],["fslinks.org",292],["listeamed.net",292],["v6embed.xyz",292],["vgplayer.xyz",292],["vid-guard.com",292],["vidguard.online",292],["giga-uqload.xyz",292],["printablecreative.com",293],["peachprintable.com",293],["comohoy.com",294],["leak.sx",294],["paste.bin.sx",294],["pornleaks.in",294],["merlininkazani.com",294],["j91.asia",295],["jeniusplay.com",296],["indianyug.com",297],["rgb.vn",297],["needrom.com",298],["criptologico.com",299],["megadrive-emulator.com",300],["eromanga-show.com",301],["hentai-one.com",301],["hentaipaw.com",301],["10minuteemails.com",302],["luxusmail.org",302],["w3cub.com",303],["bangpremier.com",304],["nyaa.iss.ink",305],["tnp98.xyz",307],["freepdfcomic.com",308],["techedubyte.com",309],["tickzoo.tv",310],["memedroid.com",311],["animesync.org",312],["karaoketexty.cz",313],["filmizlehdfilm.com",314],["fullfilmizle.cc",314],["gofilmizle.net",314],["resortcams.com",315],["cheatography.com",315],["sonixgvn.net",316],["faqwiki.us",316],["mjakmama24.pl",318],["cheatermad.com",319],["ville-ideale.fr",320],["eodev.com",321],["xfreehd.com",322],["freethesaurus.com",323],["thefreedictionary.com",323],["fm-arena.com",324],["tradersunion.com",325],["tandess.com",326],["allosurf.net",326],["spontacts.com",327],["dankmemer.lol",328],["getexploits.com",329],["fplstatistics.com",330],["breitbart.com",331],["salidzini.lv",332],["choosingnothing.com",333],["cryptorank.io",[334,335]],["th.gl",336],["4kwebplay.xyz",337],["qqwebplay.xyz",337],["viwlivehdplay.ru",337],["molbiotools.com",338],["vods.tv",339],["18xxx.xyz",340],["raidrush.net",341],["xnxxcom.xyz",342],["videzz.net",343],["spambox.xyz",344],["dreamdth.com",345],["freemodsapp.in",345],["onlytech.com",345],["melaniezettofrais.online",346],["player.jeansaispasplus.homes",346],["en-thunderscans.com",347],["karistudio.com",349],["historicaerials.com",350],["iqksisgw.xyz",351],["caroloportunidades.com.br",352],["coempregos.com.br",352],["foodiesgallery.com",352],["vikatan.com",353],["lastampa.it",354],["rekidai-info.github.io",355]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",1],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["eztv",5],["1337x",5],["sushi-scan",7],["spigotunlocked",7],["ahmedmode",7],["kissasian",10],["mma-core",11],["yts",15],["720pstream",15],["1stream",15],["thefmovies",16],["urlcero",22],["totaldebrid",25],["sandrives",25],["fxporn69",34],["aliancapes",34],["pouvideo",36],["povvideo",36],["povw1deo",36],["povwideo",36],["powv1deo",36],["powvibeo",36],["powvideo",36],["powvldeo",36],["tubsexer",42],["porno-tour",42],["lenkino",42],["pornomoll",42],["camsclips",42],["m4ufree",46],["writedroid",57],["telerium",61],["pandafreegames",75],["thoptv",83],["shortzzy",92],["streameast",104],["thestreameast",104],["daddylivehd",104],["solvetube",107],["pornhub",108],["wcofun",115],["bollyholic",119],["gotxx",134],["turkanime",135],["voe-unblock",135],["rp5",143],["khatrimaza",149],["pogolinks",149],["popcornstream",151],["xhamsterdeutsch",219],["privatemoviez",223],["gmx",242],["lightnovelpub",[271,272]],["camcaps",285],["vembed",292],["moflix-stream",[292,348]],["drivebot",306],["thenextplanet1",307],["oploverz",310],["filmizletv",314],["autoscout24",317],["brainly",321]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function preventSetTimeout(
    needleRaw = '',
    delayRaw = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setTimeout', needleRaw, delayRaw);
    const needleNot = needleRaw.charAt(0) === '!';
    const reNeedle = safe.patternToRegex(needleNot ? needleRaw.slice(1) : needleRaw);
    const range = new RangeParser(delayRaw);
    proxyApplyFn('setTimeout', function(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
        const b = callArgs[1];
        if ( needleRaw === '' && range.unbound() ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        if ( reNeedle.test(a) !== needleNot && range.test(b) ) {
            callArgs[0] = function(){};
            safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
        }
        return context.reflect();
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
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = this.private = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

class RangeParser {
    constructor(s) {
        this.not = s.charAt(0) === '!';
        if ( this.not ) { s = s.slice(1); }
        if ( s === '' ) { return; }
        const pos = s.indexOf('-');
        if ( pos !== 0 ) {
            this.min = this.max = parseInt(s, 10) || 0;
        }
        if ( pos !== -1 ) {
            this.max = parseInt(s.slice(1), 10) || Number.MAX_SAFE_INTEGER;
        }
    }
    unbound() {
        return this.min === undefined && this.max === undefined;
    }
    test(v) {
        const n = Math.min(Math.max(Number(v) || 0, 0), Number.MAX_SAFE_INTEGER);
        if ( this.min === this.max ) {
            return (this.min === undefined || n === this.min) !== this.not;
        }
        if ( this.min === undefined ) {
            return (n <= this.max) !== this.not;
        }
        if ( this.max === undefined ) {
            return (n >= this.min) !== this.not;
        }
        return (n >= this.min && n <= this.max) !== this.not;
    }
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
        'String_split': String.prototype.split,
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
    try { preventSetTimeout(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_preventSetTimeout();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
