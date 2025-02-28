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

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_preventSetTimeout = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["isDesktopApp","1000"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["adrecover"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["afterOpen"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["()","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["displayAdBlockerMessage"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/","1000-"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["data-google-query-id"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["visibility","2000"],["displayAdBlockedVideo"],["adBlockerModal"],["googleFC"],["_detectLoop"],[".adv-"],[")](this,...","3000-6000"],["(new Error(","3000-6000"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["autotrader.nl",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,6,7]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,114]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,138]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,248]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,244]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["wunderweib.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["computer76.ru",5],["hdbox.ws",7],["todopolicia.com",7],["scat.gold",7],["freecoursesite.com",7],["windowcleaningforums.co.uk",7],["cruisingearth.com",7],["hobby-machinist.com",7],["freegogpcgames.com",7],["latitude.to",7],["kitchennovel.com",7],["w3layouts.com",7],["blog.receivefreesms.co.uk",7],["eductin.com",7],["dealsfinders.blog",7],["audiobooks4soul.com",7],["tinhocdongthap.com",7],["sakarnewz.com",7],["downloadr.in",7],["topcomicporno.com",7],["dongknows.com",7],["celtadigital.com",7],["iptvrun.com",7],["adsup.lk",7],["cryptomonitor.in",7],["areatopik.com",7],["cardscanner.co",7],["nullforums.net",7],["courseclub.me",7],["tamarindoyam.com",7],["jeep-cj.com",7],["choiceofmods.com",7],["myqqjd.com",7],["ssdtop.com",7],["apkhex.com",7],["gezegenforum.com",7],["iptvapps.net",7],["null-scripts.net",7],["nullscripts.net",7],["bloground.ro",7],["witcherhour.com",7],["ottverse.com",7],["torrentmac.net",7],["mazakony.com",7],["laptechinfo.com",7],["mc-at.org",7],["playstationhaber.com",7],["seriesperu.com",7],["pesprofessionals.com",7],["wpsimplehacks.com",7],["sportshub.to",[7,243]],["topsporter.net",[7,243]],["darkwanderer.net",7],["truckingboards.com",7],["coldfrm.org",7],["azrom.net",7],["freepatternsarea.com",7],["alttyab.net",7],["mobilkulup.com",7],["esopress.com",7],["nesiaku.my.id",7],["jipinsoft.com",7],["surfsees.com",7],["truthnews.de",7],["farsinama.com",7],["worldofiptv.com",7],["vuinsider.com",7],["crazydl.net",7],["gamemodsbase.com",7],["babiato.tech",7],["secuhex.com",7],["turkishaudiocenter.com",7],["galaxyos.net",7],["bizdustry.com",7],["storefront.com.ng",7],["pkbiosfix.com",7],["casi3.xyz",7],["starleaks.org",7],["mediafire.com",8],["wcoanimedub.tv",9],["wcoforever.net",9],["openspeedtest.com",9],["addtobucketlist.com",9],["3dzip.org",[9,68]],["ilmeteo.it",9],["wcoforever.com",9],["comprovendolibri.it",9],["healthelia.com",9],["keephealth.info",10],["anghami.com",11],["tutele.sx",12],["katestube.com",13],["short.pe",13],["footystreams.net",13],["seattletimes.com",14],["bestgames.com",15],["yiv.com",15],["globalrph.com",16],["e-glossa.it",17],["webcheats.com.br",18],["gala.fr",20],["gentside.com",20],["geo.fr",20],["hbrfrance.fr",20],["nationalgeographic.fr",20],["ohmymag.com",20],["serengo.net",20],["vsd.fr",20],["updato.com",[21,37]],["daizurin.com",22],["pendekarsubs.us",22],["dreamfancy.org",22],["rysafe.blogspot.com",22],["techacode.com",22],["toppng.com",22],["th-world.com",22],["avjamack.com",22],["avjamak.net",22],["dlhd.sx",23],["embedstream.me",23],["yts-subs.net",23],["cnnamador.com",24],["nudecelebforum.com",25],["pronpic.org",26],["thewebflash.com",27],["discordfastfood.com",27],["xup.in",27],["popularmechanics.com",28],["op.gg",29],["comunidadgzone.es",30],["mp3fy.com",30],["lebensmittelpraxis.de",30],["ebookdz.com",30],["forum-pokemon-go.fr",30],["praxis-jugendarbeit.de",30],["dictionnaire-medical.net",30],["cle0desktop.blogspot.com",30],["up-load.io",30],["direct-link.net",30],["direkt-wissen.com",30],["keysbrasil.blogspot.com",30],["hotpress.info",30],["turkleech.com",30],["anibatch.me",30],["anime-i.com",30],["healthtune.site",30],["gewinde-normen.de",30],["tucinehd.com",30],["plex-guide.de",30],["jellynote.com",31],["eporner.com",33],["pornbimbo.com",34],["4j.com",34],["avoiderrors.com",35],["sitarchive.com",35],["livenewsof.com",35],["topnewsshow.com",35],["gatcha.org",35],["empregoestagios.com",35],["everydayonsales.com",35],["kusonime.com",35],["suicidepics.com",35],["codesnail.com",35],["codingshiksha.com",35],["graphicux.com",35],["asyadrama.com",35],["bitcoinegypt.news",35],["citychilli.com",35],["talkjarvis.com",35],["hdmotori.it",36],["femdomtb.com",38],["bobs-tube.com",38],["pornfd.com",38],["popno-tour.net",38],["molll.mobi",38],["watchmdh.to",38],["camwhores.tv",38],["camhub.cc",38],["elfqrin.com",39],["satcesc.com",40],["apfelpatient.de",40],["lusthero.com",41],["m2list.com",42],["embed.nana2play.com",42],["elahmad.com",42],["dofusports.xyz",42],["dallasnews.com",43],["lnk.news",44],["lnk.parts",44],["efukt.com",45],["wendycode.com",45],["springfieldspringfield.co.uk",46],["porndoe.com",47],["smsget.net",[48,49]],["kjanime.net",50],["gioialive.it",51],["classicreload.com",52],["scriptzhub.com",52],["hotpornfile.org",53],["coolsoft.altervista.org",53],["hackedonlinegames.com",53],["dailytech-news.eu",53],["settlersonlinemaps.com",53],["ad-doge.com",53],["magdownload.org",53],["kpkuang.org",53],["shareus.site",53],["crypto4yu.com",53],["faucetwork.space",53],["thenightwithoutthedawn.blogspot.com",53],["entutes.com",53],["claimlite.club",53],["newscon.org",53],["chicoer.com",54],["bostonherald.com",54],["dailycamera.com",54],["maxcheaters.com",55],["rbxoffers.com",55],["postimees.ee",55],["police.community",55],["gisarea.com",55],["schaken-mods.com",55],["tvnet.lv",55],["theclashify.com",55],["txori.com",55],["olarila.com",55],["deletedspeedstreams.blogspot.com",55],["schooltravelorganiser.com",55],["xhardhempus.net",55],["mhn.quest",55],["leagueofgraphs.com",55],["hieunguyenphoto.com",55],["benzinpreis.de",55],["sportsplays.com",56],["pornvideotop.com",58],["krotkoosporcie.pl",58],["xstory-fr.com",58],["ytapi.cc",58],["deinesexfilme.com",59],["einfachtitten.com",59],["halloporno.com",59],["herzporno.com",59],["lesbenhd.com",59],["milffabrik.com",[59,216]],["porn-monkey.com",59],["porndrake.com",59],["pornhubdeutsch.net",59],["pornoaffe.com",59],["pornodavid.com",59],["pornoente.tv",[59,216]],["pornofisch.com",59],["pornofelix.com",59],["pornohammer.com",59],["pornohelm.com",59],["pornoklinge.com",59],["pornotom.com",[59,216]],["pornotommy.com",59],["pornovideos-hd.com",59],["pornozebra.com",[59,216]],["xhamsterdeutsch.xyz",59],["xnxx-sexfilme.com",59],["zerion.cc",59],["letribunaldunet.fr",60],["vladan.fr",60],["live-tv-channels.org",61],["eslfast.com",62],["freegamescasual.com",63],["tcpvpn.com",64],["oko.sh",64],["timesnownews.com",64],["timesnowhindi.com",64],["timesnowmarathi.com",64],["zoomtventertainment.com",64],["tsubasa.im",65],["sholah.net",66],["2rdroid.com",66],["bisceglielive.it",67],["pandajogosgratis.com.br",69],["5278.cc",70],["tonspion.de",72],["duplichecker.com",73],["plagiarismchecker.co",73],["plagiarismdetector.net",73],["searchenginereports.net",73],["smallseotools.com",74],["linkspaid.com",75],["proxydocker.com",75],["beeimg.com",[76,77]],["emturbovid.com",77],["findjav.com",77],["javggvideo.xyz",77],["mmtv01.xyz",77],["stbturbo.xyz",77],["streamsilk.com",77],["ftlauderdalebeachcam.com",78],["ftlauderdalewebcam.com",78],["juneauharborwebcam.com",78],["keywestharborwebcam.com",78],["kittycatcam.com",78],["mahobeachcam.com",78],["miamiairportcam.com",78],["morganhillwebcam.com",78],["njwildlifecam.com",78],["nyharborwebcam.com",78],["paradiseislandcam.com",78],["pompanobeachcam.com",78],["portbermudawebcam.com",78],["portcanaveralwebcam.com",78],["portevergladeswebcam.com",78],["portmiamiwebcam.com",78],["portnywebcam.com",78],["portnassauwebcam.com",78],["portstmaartenwebcam.com",78],["portstthomaswebcam.com",78],["porttampawebcam.com",78],["sxmislandcam.com",78],["themes-dl.com",78],["badassdownloader.com",78],["badasshardcore.com",78],["badassoftcore.com",78],["nulljungle.com",78],["teevee.asia",78],["otakukan.com",78],["vinomo.xyz",80],["bembed.net",80],["embedv.net",80],["fslinks.org",80],["listeamed.net",80],["v6embed.xyz",80],["vgplayer.xyz",80],["vid-guard.com",80],["giga-uqload.xyz",80],["gearingcommander.com",81],["generate.plus",82],["calculate.plus",82],["avcesar.com",83],["audiotag.info",84],["tudigitale.it",85],["ibcomputing.com",86],["legia.net",87],["acapellas4u.co.uk",88],["robloxscripts.com",89],["libreriamo.it",89],["postazap.com",89],["medebooks.xyz",89],["mashtips.com",89],["marriedgames.com.br",89],["4allprograms.me",89],["nurgsm.com",89],["certbyte.com",89],["plugincrack.com",89],["gamingdeputy.com",89],["freewebcart.com",89],["autojournal.fr",90],["autoplus.fr",90],["sportauto.fr",90],["streamhentaimovies.com",91],["konten.co.id",92],["diariodenavarra.es",93],["scripai.com",93],["myfxbook.com",93],["whatfontis.com",93],["tubereader.me",93],["xiaomifans.pl",94],["eletronicabr.com",94],["optifine.net",95],["luzernerzeitung.ch",96],["tagblatt.ch",96],["spellcheck.net",97],["spellchecker.net",97],["spellweb.com",97],["ableitungsrechner.net",98],["alternet.org",99],["gourmetsupremacy.com",99],["shrib.com",100],["pandafiles.com",101],["vidia.tv",[101,120]],["hortonanderfarom.blogspot.com",101],["coolcast2.com",102],["techclips.net",102],["footyhunter.lol",102],["poscitech.click",102],["wecast.to",102],["sportbar.live",102],["tunovelaligera.com",103],["tapchipi.com",103],["cuitandokter.com",103],["tech-blogs.com",103],["cardiagn.com",103],["dcleakers.com",103],["esgeeks.com",103],["pugliain.net",103],["uplod.net",103],["worldfreeware.com",103],["fikiri.net",103],["myhackingworld.com",103],["phoenixfansub.com",103],["freecourseweb.com",104],["devcourseweb.com",104],["coursewikia.com",104],["courseboat.com",104],["coursehulu.com",104],["lne.es",107],["pornult.com",108],["webcamsdolls.com",108],["bitcotasks.com",[108,154]],["adsy.pw",108],["playstore.pw",108],["exactpay.online",108],["thothd.to",108],["proplanta.de",109],["hydrogenassociation.org",110],["ludigames.com",110],["made-by.org",110],["xenvn.com",110],["worldtravelling.com",110],["igirls.in",110],["technichero.com",110],["roshiyatech.my.id",110],["androidadult.com",110],["aeroxplorer.com",110],["sportitalialive.com",110],["mad4wheels.com",111],["logi.im",111],["emailnator.com",111],["textograto.com",112],["voyageforum.com",113],["hmc-id.blogspot.com",113],["myabandonware.com",113],["ilforumdeibrutti.is",113],["chatta.it",115],["ketubanjiwa.com",116],["nsfw247.to",117],["funzen.net",117],["ilclubdellericette.it",117],["extremereportbot.com",118],["getintopc.com",119],["qoshe.com",121],["lowellsun.com",122],["mamadu.pl",122],["dobrapogoda24.pl",122],["motohigh.pl",122],["namasce.pl",122],["ultimate-catch.eu",123],["cpopchanelofficial.com",124],["creditcardgenerator.com",125],["creditcardrush.com",125],["bostoncommons.net",125],["thejobsmovie.com",125],["hl-live.de",126],["satoshi-win.xyz",126],["encurtandourl.com",[126,131]],["freesoft.id",126],["zcteam.id",126],["www-daftarharga.blogspot.com",126],["ear-phone-review.com",126],["telefullenvivo.com",126],["listatv.pl",126],["daemon-hentai.com",[126,261]],["coin-profits.xyz",126],["relampagomovies.com",126],["wohnmobilforum.de",126],["nulledbear.com",126],["sinnerclownceviri.net",126],["nilopolisonline.com.br",127],["mesquitaonline.com",127],["yellowbridge.com",127],["socialgirls.im",128],["yaoiotaku.com",129],["moneyhouse.ch",130],["ihow.info",131],["filesus.com",131],["sturls.com",131],["re.two.re",131],["turbo1.co",131],["cartoonsarea.xyz",131],["hartico.tv",131],["valeronevijao.com",132],["cigarlessarefy.com",132],["figeterpiazine.com",132],["yodelswartlike.com",132],["generatesnitrosate.com",132],["crownmakermacaronicism.com",132],["chromotypic.com",132],["gamoneinterrupted.com",132],["metagnathtuggers.com",132],["wolfdyslectic.com",132],["rationalityaloelike.com",132],["sizyreelingly.com",132],["simpulumlamerop.com",132],["urochsunloath.com",132],["monorhinouscassaba.com",132],["counterclockwisejacky.com",132],["35volitantplimsoles5.com",132],["scatch176duplicities.com",132],["antecoxalbobbing1010.com",132],["boonlessbestselling244.com",132],["cyamidpulverulence530.com",132],["guidon40hyporadius9.com",132],["449unceremoniousnasoseptal.com",132],["19turanosephantasia.com",132],["30sensualizeexpression.com",132],["321naturelikefurfuroid.com",132],["745mingiestblissfully.com",132],["availedsmallest.com",132],["greaseball6eventual20.com",132],["toxitabellaeatrebates306.com",132],["20demidistance9elongations.com",132],["audaciousdefaulthouse.com",132],["fittingcentermondaysunday.com",132],["fraudclatterflyingcar.com",132],["launchreliantcleaverriver.com",132],["matriculant401merited.com",132],["realfinanceblogcenter.com",132],["reputationsheriffkennethsand.com",132],["telyn610zoanthropy.com",132],["tubelessceliolymph.com",132],["tummulerviolableness.com",132],["un-block-voe.net",132],["v-o-e-unblock.com",132],["voe-un-block.com",132],["voeun-block.net",132],["voeunbl0ck.com",132],["voeunblck.com",132],["voeunblk.com",132],["voeunblock.com",132],["voeunblock1.com",132],["voeunblock2.com",132],["voeunblock3.com",132],["agefi.fr",133],["cariskuy.com",134],["letras2.com",134],["yusepjaelani.blogspot.com",135],["letras.mus.br",136],["mtlurb.com",137],["port.hu",138],["acdriftingpro.com",138],["forumdz.com",138],["abandonmail.com",138],["flmods.com",138],["zilinak.sk",138],["projectfreetv.stream",138],["hotdesimms.com",138],["pdfaid.com",138],["dzeko11.net",[138,243]],["bootdey.com",138],["mail.com",138],["expresskaszubski.pl",138],["moegirl.org.cn",138],["flix-wave.lol",138],["fmovies0.cc",138],["onemanhua.com",139],["laksa19.github.io",140],["javcl.com",140],["tvlogy.to",140],["live.dragaoconnect.net",140],["beststremo.com",140],["seznamzpravy.cz",140],["xerifetech.com",140],["freemcserver.net",140],["t3n.de",141],["allindiaroundup.com",142],["vectorizer.io",143],["smgplaza.com",143],["onehack.us",143],["thapcam.net",143],["thefastlaneforum.com",144],["trade2win.com",145],["modagamers.com",146],["freemagazines.top",146],["straatosphere.com",146],["rule34porn.net",146],["nullpk.com",146],["adslink.pw",146],["downloadudemy.com",146],["picgiraffe.com",146],["weadown.com",146],["freepornsex.net",146],["nurparatodos.com.ar",146],["librospreuniversitariospdf.blogspot.com",147],["forexeen.us",147],["khsm.io",147],["webcreator-journal.com",147],["nu6i-bg-net.com",147],["msdos-games.com",147],["blocklayer.com",147],["routech.ro",148],["hokej.net",148],["turkmmo.com",149],["palermotoday.it",150],["baritoday.it",150],["trentotoday.it",150],["agrigentonotizie.it",150],["anconatoday.it",150],["arezzonotizie.it",150],["avellinotoday.it",150],["bresciatoday.it",150],["brindisireport.it",150],["casertanews.it",150],["cataniatoday.it",150],["cesenatoday.it",150],["chietitoday.it",150],["forlitoday.it",150],["frosinonetoday.it",150],["genovatoday.it",150],["ilpescara.it",150],["ilpiacenza.it",150],["latinatoday.it",150],["lecceprima.it",150],["leccotoday.it",150],["livornotoday.it",150],["messinatoday.it",150],["milanotoday.it",150],["modenatoday.it",150],["monzatoday.it",150],["novaratoday.it",150],["padovaoggi.it",150],["parmatoday.it",150],["perugiatoday.it",150],["pisatoday.it",150],["quicomo.it",150],["ravennatoday.it",150],["reggiotoday.it",150],["riminitoday.it",150],["romatoday.it",150],["salernotoday.it",150],["sondriotoday.it",150],["sportpiacenza.it",150],["ternitoday.it",150],["today.it",150],["torinotoday.it",150],["trevisotoday.it",150],["triesteprima.it",150],["udinetoday.it",150],["veneziatoday.it",150],["vicenzatoday.it",150],["thumpertalk.com",151],["arkcod.org",151],["facciabuco.com",152],["softx64.com",153],["thelayoff.com",154],["blog.coinsrise.net",154],["blog.cryptowidgets.net",154],["blog.insurancegold.in",154],["blog.wiki-topia.com",154],["blog.coinsvalue.net",154],["blog.cookinguide.net",154],["blog.freeoseocheck.com",154],["blog.makeupguide.net",154],["blog.carstopia.net",154],["blog.carsmania.net",154],["shorterall.com",154],["blog24.me",154],["maxstream.video",154],["tvepg.eu",154],["manwan.xyz",154],["dailymaverick.co.za",155],["apps2app.com",156],["starkroboticsfrc.com",157],["sinonimos.de",157],["antonimos.de",157],["quesignifi.ca",157],["tiktokrealtime.com",157],["tiktokcounter.net",157],["tpayr.xyz",157],["poqzn.xyz",157],["ashrfd.xyz",157],["rezsx.xyz",157],["tryzt.xyz",157],["ashrff.xyz",157],["rezst.xyz",157],["dawenet.com",157],["erzar.xyz",157],["waezm.xyz",157],["waezg.xyz",157],["blackwoodacademy.org",157],["cryptednews.space",157],["vivuq.com",157],["swgop.com",157],["vbnmll.com",157],["telcoinfo.online",157],["dshytb.com",157],["enit.in",158],["financerites.com",158],["fadedfeet.com",159],["homeculina.com",159],["ineedskin.com",159],["kenzo-flowertag.com",159],["lawyex.co",159],["mdn.lol",159],["bitzite.com",160],["coingraph.us",161],["impact24.us",161],["apkmodvn.com",162],["mod1s.com",162],["apkmoddone.com",163],["dl.apkmoddone.com",164],["phongroblox.com",164],["shortencash.click",165],["my-code4you.blogspot.com",166],["vrcmods.com",167],["osuskinner.com",167],["osuskins.net",167],["pentruea.com",[168,169]],["mchacks.net",170],["why-tech.it",171],["compsmag.com",172],["tapetus.pl",173],["autoroad.cz",174],["brawlhalla.fr",174],["tecnobillo.com",174],["sexcamfreeporn.com",175],["breatheheavy.com",176],["wenxuecity.com",177],["key-hub.eu",178],["fabioambrosi.it",179],["tattle.life",180],["emuenzen.de",180],["terrylove.com",180],["mynet.com",[181,244]],["cidade.iol.pt",182],["fantacalcio.it",183],["hentaifreak.org",184],["hypebeast.com",185],["krankheiten-simulieren.de",186],["catholic.com",187],["3dmodelshare.org",188],["techinferno.com",189],["ibeconomist.com",190],["bookriot.com",191],["purposegames.com",192],["globo.com",193],["latimes.com",193],["claimrbx.gg",194],["perelki.net",195],["vpn-anbieter-vergleich-test.de",196],["livingincebuforums.com",197],["paperzonevn.com",198],["alltechnerd.com",199],["malaysianwireless.com",200],["erinsakura.com",201],["infofuge.com",201],["freejav.guru",201],["novelmultiverse.com",201],["fritidsmarkedet.dk",202],["maskinbladet.dk",202],["15min.lt",203],["baddiehub.com",204],["mr9soft.com",205],["21porno.com",206],["adult-sex-gamess.com",207],["hentaigames.app",207],["mobilesexgamesx.com",207],["mysexgamer.com",207],["porngameshd.com",207],["sexgamescc.com",207],["xnxx-sex-videos.com",207],["f2movies.to",208],["freeporncave.com",209],["tubsxxx.com",210],["subtitle.one",211],["manga18fx.com",212],["freebnbcoin.com",212],["sextvx.com",213],["studydhaba.com",214],["freecourse.tech",214],["victor-mochere.com",214],["papunika.com",214],["mobilanyheter.net",214],["prajwaldesai.com",[214,234]],["ftuapps.dev",214],["muztext.com",215],["pornohans.com",216],["nursexfilme.com",216],["pornohirsch.net",216],["xhamster-sexvideos.com",216],["pornoschlange.com",216],["hdpornos.net",216],["gutesexfilme.com",216],["zona-leros.com",216],["charbelnemnom.com",217],["simplebits.io",218],["online-fix.me",219],["gamersdiscussionhub.com",220],["owlzo.com",221],["q1003.com",222],["blogpascher.com",223],["testserver.pro",224],["lifestyle.bg",224],["money.bg",224],["news.bg",224],["topsport.bg",224],["webcafe.bg",224],["schoolcheats.net",225],["mgnet.xyz",226],["advertiserandtimes.co.uk",227],["xvideos2020.me",228],["111.90.159.132",229],["techsolveprac.com",230],["joomlabeginner.com",231],["largescaleforums.com",232],["dubznetwork.com",233],["hentaidexy.com",235],["traderepublic.community",236],["babia.to",237],["code2care.org",238],["xxxxsx.com",240],["ngontinh24.com",241],["idevicecentral.com",242],["carscoops.com",244],["dziennik.pl",244],["eurointegration.com.ua",244],["flatpanelshd.com",244],["fourfourtwo.co.kr",244],["hoyme.jp",244],["issuya.com",244],["itainews.com",244],["iusm.co.kr",244],["logicieleducatif.fr",244],["mydaily.co.kr",244],["onlinegdb.com",244],["picrew.me",244],["pravda.com.ua",244],["reportera.co.kr",244],["sportsrec.com",244],["sportsseoul.com",244],["text-compare.com",244],["tweaksforgeeks.com",244],["wfmz.com",244],["worldhistory.org",244],["etnews.com",244],["palabr.as",244],["motscroises.fr",244],["cruciverba.it",244],["oradesibiu.ro",244],["w.grapps.me",244],["gazetaprawna.pl",244],["pressian.com",244],["raenonx.cc",[244,262]],["indiatimes.com",244],["missyusa.com",244],["aikatu.jp",244],["adintrend.tv",244],["ark-unity.com",244],["cool-style.com.tw",244],["doanhnghiepvn.vn",244],["thesaurus.net",245],["automobile-catalog.com",245],["motorbikecatalog.com",245],["maketecheasier.com",245],["mlbpark.donga.com",246],["jjang0u.com",247],["mangacrab.com",249],["viefaucet.com",250],["pourcesoir.in",250],["cloud-computing-central.com",251],["afk.guide",252],["businessnamegenerator.com",253],["derstandard.at",254],["derstandard.de",254],["rocketnews24.com",255],["soranews24.com",255],["youpouch.com",255],["gourmetscans.net",256],["ilsole24ore.com",257],["ipacrack.com",258],["hentaiporn.one",259],["infokik.com",260],["daemonanime.net",261],["bgmateriali.com",261],["deezer.com",262],["fosslinux.com",263],["shrdsk.me",264],["examword.com",265],["sempreupdate.com.br",265],["tribuna.com",266],["trendsderzukunft.de",267],["gal-dem.com",267],["lostineu.eu",267],["oggitreviso.it",267],["speisekarte.de",267],["mixed.de",267],["lightnovelspot.com",[268,269]],["lightnovelworld.com",[268,269]],["novelpub.com",[268,269]],["webnovelpub.com",[268,269]],["mail.yahoo.com",270],["hwzone.co.il",271],["nammakalvi.com",272],["c2g.at",273],["terafly.me",273],["elamigos-games.com",273],["elamigos-games.net",273],["dktechnicalmate.com",274],["recipahi.com",274],["kaystls.site",275],["aquarius-horoscopes.com",276],["cancer-horoscopes.com",276],["dubipc.blogspot.com",276],["echoes.gr",276],["engel-horoskop.de",276],["freegames44.com",276],["fuerzasarmadas.eu",276],["gemini-horoscopes.com",276],["jurukunci.net",276],["krebs-horoskop.com",276],["leo-horoscopes.com",276],["maliekrani.com",276],["nklinks.click",276],["ourenseando.es",276],["pisces-horoscopes.com",276],["radio-en-direct.fr",276],["sagittarius-horoscopes.com",276],["scorpio-horoscopes.com",276],["singlehoroskop-loewe.de",276],["skat-karten.de",276],["skorpion-horoskop.com",276],["taurus-horoscopes.com",276],["the1security.com",276],["virgo-horoscopes.com",276],["zonamarela.blogspot.com",276],["yoima.hatenadiary.com",276],["vpntester.org",277],["japscan.lol",278],["digitask.ru",279],["tempumail.com",280],["sexvideos.host",281],["10alert.com",283],["cryptstream.de",284],["nydus.org",284],["techhelpbd.com",285],["fapdrop.com",286],["cellmapper.net",287],["hdrez.com",288],["youwatch-serie.com",288],["russland.jetzt",288],["printablecreative.com",289],["peachprintable.com",289],["comohoy.com",290],["leak.sx",290],["paste.bin.sx",290],["pornleaks.in",290],["merlininkazani.com",290],["j91.asia",291],["rekidai-info.github.io",292],["jeniusplay.com",293],["indianyug.com",294],["rgb.vn",294],["needrom.com",295],["criptologico.com",296],["megadrive-emulator.com",297],["eromanga-show.com",298],["hentai-one.com",298],["hentaipaw.com",298],["10minuteemails.com",299],["luxusmail.org",299],["w3cub.com",300],["bangpremier.com",301],["nyaa.iss.ink",302],["tnp98.xyz",304],["freepdfcomic.com",305],["techedubyte.com",306],["tickzoo.tv",307],["memedroid.com",308],["animesync.org",309],["karaoketexty.cz",310],["filmizlehdfilm.com",311],["fullfilmizle.cc",311],["gofilmizle.net",311],["resortcams.com",312],["cheatography.com",312],["sonixgvn.net",313],["faqwiki.us",313],["mjakmama24.pl",315],["cheatermad.com",316],["ville-ideale.fr",317],["eodev.com",318],["xfreehd.com",319],["freethesaurus.com",320],["thefreedictionary.com",320],["fm-arena.com",321],["tradersunion.com",322],["tandess.com",323],["allosurf.net",323],["spontacts.com",324],["dankmemer.lol",325],["getexploits.com",326],["fplstatistics.com",327],["breitbart.com",328],["salidzini.lv",329],["choosingnothing.com",330],["cryptorank.io",[331,332]],["4kwebplay.xyz",333],["qqwebplay.xyz",333],["viwlivehdplay.ru",333],["molbiotools.com",334],["vods.tv",335],["18xxx.xyz",336],["raidrush.net",337],["xnxxcom.xyz",338],["videzz.net",339],["spambox.xyz",340],["dreamdth.com",341],["freemodsapp.in",341],["onlytech.com",341],["player.jeansaispasplus.homes",342],["en-thunderscans.com",343],["historicaerials.com",345],["iqksisgw.xyz",346],["caroloportunidades.com.br",347],["coempregos.com.br",347],["foodiesgallery.com",347],["vikatan.com",348],["camhub.world",349],["teracourses.com",351],["lastampa.it",352],["poophq.com",353],["veev.to",353],["infinityscans.xyz",354],["infinityscans.net",354],["infinityscans.org",354],["dogdrip.net",355],["infinityfree.com",355],["slashdot.org",355],["smsonline.cloud",[355,356]]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",1],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["eztv",5],["1337x",5],["sushi-scan",7],["spigotunlocked",7],["ahmedmode",7],["kissasian",10],["yts",12],["720pstream",12],["1stream",12],["thefmovies",13],["urlcero",19],["totaldebrid",22],["sandrives",22],["fxporn69",30],["aliancapes",30],["pouvideo",32],["povvideo",32],["povw1deo",32],["povwideo",32],["powv1deo",32],["powvibeo",32],["powvideo",32],["powvldeo",32],["tubsexer",38],["porno-tour",38],["lenkino",38],["pornomoll",38],["camsclips",38],["m4ufree",42],["writedroid",53],["telerium",57],["pandafreegames",71],["thoptv",79],["vembed",80],["moflix-stream",[80,344]],["shortzzy",89],["streameast",102],["thestreameast",102],["daddylivehd",102],["solvetube",105],["pornhub",106],["wcofun",113],["bollyholic",117],["gotxx",131],["turkanime",132],["voe-unblock",132],["rp5",140],["khatrimaza",146],["pogolinks",146],["popcornstream",148],["xhamsterdeutsch",216],["privatemoviez",220],["gmx",239],["lightnovelpub",[268,269]],["camcaps",282],["drivebot",303],["thenextplanet1",304],["oploverz",307],["filmizletv",311],["autoscout24",314],["brainly",318],["mma-core",350]]);

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
            catch {
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
    } catch {
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
} catch {
}
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
    catch { }
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
