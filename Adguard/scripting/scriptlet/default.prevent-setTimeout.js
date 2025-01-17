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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["displayAdBlockedVideo"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["0x"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["displayAdBlockerMessage"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["afterOpen"],["chkADB"],["onDetected"],["fuckadb"],["/aframe|querySelector/"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["popup"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["offset"],["contrformpub"],["trigger","0"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["getComputedStyle(testAd)"],["affiliate"],["data-google-query-id"],["document['\\x"],["hasAdblock"],["/adblock|isblock/i"],["googleFC"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,6,7]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,115]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,140]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,250]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,246]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["hdbox.ws",7],["todopolicia.com",7],["scat.gold",7],["freecoursesite.com",7],["windowcleaningforums.co.uk",7],["cruisingearth.com",7],["hobby-machinist.com",7],["freegogpcgames.com",7],["latitude.to",7],["kitchennovel.com",7],["w3layouts.com",7],["blog.receivefreesms.co.uk",7],["eductin.com",7],["dealsfinders.blog",7],["audiobooks4soul.com",7],["tinhocdongthap.com",7],["sakarnewz.com",7],["downloadr.in",7],["topcomicporno.com",7],["dongknows.com",7],["celtadigital.com",7],["iptvrun.com",7],["adsup.lk",7],["cryptomonitor.in",7],["areatopik.com",7],["cardscanner.co",7],["nullforums.net",7],["courseclub.me",7],["tamarindoyam.com",7],["jeep-cj.com",7],["choiceofmods.com",7],["myqqjd.com",7],["ssdtop.com",7],["apkhex.com",7],["gezegenforum.com",7],["iptvapps.net",7],["null-scripts.net",7],["nullscripts.net",7],["bloground.ro",7],["witcherhour.com",7],["ottverse.com",7],["torrentmac.net",7],["mazakony.com",7],["laptechinfo.com",7],["mc-at.org",7],["playstationhaber.com",7],["seriesperu.com",7],["pesprofessionals.com",7],["wpsimplehacks.com",7],["sportshub.to",[7,245]],["topsporter.net",[7,245]],["darkwanderer.net",7],["truckingboards.com",7],["coldfrm.org",7],["azrom.net",7],["freepatternsarea.com",7],["alttyab.net",7],["hq-links.com",7],["mobilkulup.com",7],["esopress.com",7],["nesiaku.my.id",7],["jipinsoft.com",7],["surfsees.com",7],["truthnews.de",7],["farsinama.com",7],["worldofiptv.com",7],["vuinsider.com",7],["crazydl.net",7],["gamemodsbase.com",7],["babiato.tech",7],["secuhex.com",7],["turkishaudiocenter.com",7],["galaxyos.net",7],["bizdustry.com",7],["storefront.com.ng",7],["pkbiosfix.com",7],["casi3.xyz",7],["starleaks.org",7],["mediafire.com",8],["wcoanimedub.tv",9],["wcoforever.net",9],["openspeedtest.com",9],["addtobucketlist.com",9],["3dzip.org",[9,71]],["ilmeteo.it",9],["wcoforever.com",9],["comprovendolibri.it",9],["healthelia.com",9],["keephealth.info",10],["anghami.com",12],["wired.com",13],["tutele.sx",14],["katestube.com",15],["short.pe",15],["footystreams.net",15],["seattletimes.com",16],["bestgames.com",17],["yiv.com",17],["globalrph.com",18],["e-glossa.it",19],["webcheats.com.br",20],["gala.fr",22],["gentside.com",22],["geo.fr",22],["hbrfrance.fr",22],["nationalgeographic.fr",22],["ohmymag.com",22],["serengo.net",22],["vsd.fr",22],["updato.com",[23,40]],["methbox.com",24],["daizurin.com",24],["pendekarsubs.us",24],["dreamfancy.org",24],["rysafe.blogspot.com",24],["techacode.com",24],["toppng.com",24],["th-world.com",24],["avjamack.com",24],["avjamak.net",24],["dlhd.sx",25],["embedstream.me",25],["yts-subs.net",25],["cnnamador.com",26],["nudecelebforum.com",27],["pronpic.org",28],["thewebflash.com",29],["discordfastfood.com",29],["xup.in",29],["popularmechanics.com",30],["op.gg",31],["lequipe.fr",32],["comunidadgzone.es",33],["mp3fy.com",33],["lebensmittelpraxis.de",33],["ebookdz.com",33],["forum-pokemon-go.fr",33],["praxis-jugendarbeit.de",33],["dictionnaire-medical.net",33],["cle0desktop.blogspot.com",33],["up-load.io",33],["direct-link.net",33],["direkt-wissen.com",33],["keysbrasil.blogspot.com",33],["hotpress.info",33],["turkleech.com",33],["anibatch.me",33],["anime-i.com",33],["healthtune.site",33],["gewinde-normen.de",33],["tucinehd.com",33],["plex-guide.de",33],["jellynote.com",34],["eporner.com",36],["pornbimbo.com",37],["4j.com",37],["avoiderrors.com",38],["sitarchive.com",38],["livenewsof.com",38],["topnewsshow.com",38],["gatcha.org",38],["empregoestagios.com",38],["everydayonsales.com",38],["kusonime.com",38],["suicidepics.com",38],["codesnail.com",38],["codingshiksha.com",38],["graphicux.com",38],["asyadrama.com",38],["bitcoinegypt.news",38],["citychilli.com",38],["talkjarvis.com",38],["hdmotori.it",39],["femdomtb.com",41],["camhub.cc",41],["bobs-tube.com",41],["pornfd.com",41],["popno-tour.net",41],["molll.mobi",41],["watchmdh.to",41],["camwhores.tv",41],["elfqrin.com",42],["satcesc.com",43],["apfelpatient.de",43],["lusthero.com",44],["m2list.com",45],["embed.nana2play.com",45],["elahmad.com",45],["dofusports.xyz",45],["dallasnews.com",46],["lnk.news",47],["lnk.parts",47],["efukt.com",48],["wendycode.com",48],["springfieldspringfield.co.uk",49],["porndoe.com",50],["smsget.net",[51,52]],["kjanime.net",53],["gioialive.it",54],["classicreload.com",55],["scriptzhub.com",55],["hotpornfile.org",56],["coolsoft.altervista.org",56],["hackedonlinegames.com",56],["dailytech-news.eu",56],["settlersonlinemaps.com",56],["ad-doge.com",56],["magdownload.org",56],["kpkuang.org",56],["shareus.site",56],["crypto4yu.com",56],["faucetwork.space",56],["thenightwithoutthedawn.blogspot.com",56],["entutes.com",56],["claimlite.club",56],["newscon.org",56],["chicoer.com",57],["bostonherald.com",57],["dailycamera.com",57],["maxcheaters.com",58],["rbxoffers.com",58],["postimees.ee",58],["police.community",58],["gisarea.com",58],["schaken-mods.com",58],["tvnet.lv",58],["theclashify.com",58],["txori.com",58],["olarila.com",58],["deletedspeedstreams.blogspot.com",58],["schooltravelorganiser.com",58],["xhardhempus.net",58],["mhn.quest",58],["leagueofgraphs.com",58],["hieunguyenphoto.com",58],["benzinpreis.de",58],["sportsplays.com",59],["pornvideotop.com",61],["krotkoosporcie.pl",61],["xstory-fr.com",61],["deinesexfilme.com",62],["einfachtitten.com",62],["halloporno.com",62],["herzporno.com",62],["lesbenhd.com",62],["milffabrik.com",[62,218]],["porn-monkey.com",62],["porndrake.com",62],["pornhubdeutsch.net",62],["pornoaffe.com",62],["pornodavid.com",62],["pornoente.tv",[62,218]],["pornofisch.com",62],["pornofelix.com",62],["pornohammer.com",62],["pornohelm.com",62],["pornoklinge.com",62],["pornotom.com",[62,218]],["pornotommy.com",62],["pornovideos-hd.com",62],["pornozebra.com",[62,218]],["xhamsterdeutsch.xyz",62],["xnxx-sexfilme.com",62],["zerion.cc",62],["letribunaldunet.fr",63],["vladan.fr",63],["live-tv-channels.org",64],["eslfast.com",65],["freegamescasual.com",66],["tcpvpn.com",67],["oko.sh",67],["timesnownews.com",67],["timesnowhindi.com",67],["timesnowmarathi.com",67],["zoomtventertainment.com",67],["tsubasa.im",68],["sholah.net",69],["2rdroid.com",69],["bisceglielive.it",70],["pandajogosgratis.com.br",72],["5278.cc",73],["tonspion.de",75],["duplichecker.com",76],["plagiarismchecker.co",76],["plagiarismdetector.net",76],["searchenginereports.net",76],["giallozafferano.it",77],["autojournal.fr",77],["autoplus.fr",77],["sportauto.fr",77],["linkspaid.com",78],["proxydocker.com",78],["beeimg.com",[79,80]],["emturbovid.com",80],["findjav.com",80],["javggvideo.xyz",80],["mmtv01.xyz",80],["stbturbo.xyz",80],["streamsilk.com",80],["ftlauderdalebeachcam.com",81],["ftlauderdalewebcam.com",81],["juneauharborwebcam.com",81],["keywestharborwebcam.com",81],["kittycatcam.com",81],["mahobeachcam.com",81],["miamiairportcam.com",81],["morganhillwebcam.com",81],["njwildlifecam.com",81],["nyharborwebcam.com",81],["paradiseislandcam.com",81],["pompanobeachcam.com",81],["portbermudawebcam.com",81],["portcanaveralwebcam.com",81],["portevergladeswebcam.com",81],["portmiamiwebcam.com",81],["portnywebcam.com",81],["portnassauwebcam.com",81],["portstmaartenwebcam.com",81],["portstthomaswebcam.com",81],["porttampawebcam.com",81],["sxmislandcam.com",81],["themes-dl.com",81],["badassdownloader.com",81],["badasshardcore.com",81],["badassoftcore.com",81],["nulljungle.com",81],["teevee.asia",81],["otakukan.com",81],["gearingcommander.com",83],["generate.plus",84],["calculate.plus",84],["avcesar.com",85],["audiotag.info",86],["tudigitale.it",87],["ibcomputing.com",88],["legia.net",89],["acapellas4u.co.uk",90],["robloxscripts.com",91],["libreriamo.it",91],["postazap.com",91],["medebooks.xyz",91],["mashtips.com",91],["marriedgames.com.br",91],["4allprograms.me",91],["nurgsm.com",91],["certbyte.com",91],["plugincrack.com",91],["gamingdeputy.com",91],["freewebcart.com",91],["streamhentaimovies.com",92],["konten.co.id",93],["diariodenavarra.es",94],["scripai.com",94],["myfxbook.com",94],["whatfontis.com",94],["tubereader.me",94],["xiaomifans.pl",95],["eletronicabr.com",95],["optifine.net",96],["luzernerzeitung.ch",97],["tagblatt.ch",97],["spellcheck.net",98],["spellchecker.net",98],["spellweb.com",98],["ableitungsrechner.net",99],["alternet.org",100],["gourmetsupremacy.com",100],["shrib.com",101],["pandafiles.com",102],["vidia.tv",[102,121]],["hortonanderfarom.blogspot.com",102],["coolcast2.com",103],["techclips.net",103],["earthquakecensus.com",103],["footyhunter.lol",103],["gamerarcades.com",103],["poscitech.click",103],["starlive.stream",103],["utopianwilderness.com",103],["wecast.to",103],["sportbar.live",103],["tunovelaligera.com",104],["tapchipi.com",104],["cuitandokter.com",104],["tech-blogs.com",104],["cardiagn.com",104],["dcleakers.com",104],["esgeeks.com",104],["pugliain.net",104],["uplod.net",104],["worldfreeware.com",104],["fikiri.net",104],["myhackingworld.com",104],["phoenixfansub.com",104],["freecourseweb.com",105],["devcourseweb.com",105],["coursewikia.com",105],["courseboat.com",105],["coursehulu.com",105],["lne.es",108],["pornult.com",109],["webcamsdolls.com",109],["bitcotasks.com",[109,156]],["adsy.pw",109],["playstore.pw",109],["exactpay.online",109],["thothd.to",109],["proplanta.de",110],["hydrogenassociation.org",111],["ludigames.com",111],["made-by.org",111],["xenvn.com",111],["worldtravelling.com",111],["igirls.in",111],["technichero.com",111],["roshiyatech.my.id",111],["24sport.stream",111],["androidadult.com",111],["aeroxplorer.com",111],["sportitalialive.com",111],["mad4wheels.com",112],["logi.im",112],["emailnator.com",112],["textograto.com",113],["voyageforum.com",114],["hmc-id.blogspot.com",114],["myabandonware.com",114],["ilforumdeibrutti.is",114],["chatta.it",116],["ketubanjiwa.com",117],["nsfw247.to",118],["funzen.net",118],["ilclubdellericette.it",118],["extremereportbot.com",119],["getintopc.com",120],["qoshe.com",122],["lowellsun.com",123],["mamadu.pl",123],["dobrapogoda24.pl",123],["motohigh.pl",123],["namasce.pl",123],["ultimate-catch.eu",124],["cpopchanelofficial.com",125],["creditcardgenerator.com",126],["creditcardrush.com",126],["bostoncommons.net",126],["thejobsmovie.com",126],["livsavr.co",126],["hl-live.de",127],["satoshi-win.xyz",127],["encurtandourl.com",[127,133]],["freesoft.id",127],["zcteam.id",127],["www-daftarharga.blogspot.com",127],["ear-phone-review.com",127],["telefullenvivo.com",127],["listatv.pl",127],["daemon-hentai.com",[127,263]],["coin-profits.xyz",127],["relampagomovies.com",127],["wohnmobilforum.de",127],["nulledbear.com",127],["sinnerclownceviri.net",127],["nilopolisonline.com.br",128],["mesquitaonline.com",128],["yellowbridge.com",128],["socialgirls.im",129],["yaoiotaku.com",130],["camhub.world",131],["moneyhouse.ch",132],["ihow.info",133],["filesus.com",133],["sturls.com",133],["re.two.re",133],["turbo1.co",133],["cartoonsarea.xyz",133],["hartico.tv",133],["valeronevijao.com",134],["cigarlessarefy.com",134],["figeterpiazine.com",134],["yodelswartlike.com",134],["generatesnitrosate.com",134],["crownmakermacaronicism.com",134],["chromotypic.com",134],["gamoneinterrupted.com",134],["metagnathtuggers.com",134],["wolfdyslectic.com",134],["rationalityaloelike.com",134],["sizyreelingly.com",134],["simpulumlamerop.com",134],["urochsunloath.com",134],["monorhinouscassaba.com",134],["counterclockwisejacky.com",134],["35volitantplimsoles5.com",134],["scatch176duplicities.com",134],["antecoxalbobbing1010.com",134],["boonlessbestselling244.com",134],["cyamidpulverulence530.com",134],["guidon40hyporadius9.com",134],["449unceremoniousnasoseptal.com",134],["19turanosephantasia.com",134],["30sensualizeexpression.com",134],["321naturelikefurfuroid.com",134],["745mingiestblissfully.com",134],["availedsmallest.com",134],["greaseball6eventual20.com",134],["toxitabellaeatrebates306.com",134],["20demidistance9elongations.com",134],["audaciousdefaulthouse.com",134],["fittingcentermondaysunday.com",134],["fraudclatterflyingcar.com",134],["launchreliantcleaverriver.com",134],["matriculant401merited.com",134],["realfinanceblogcenter.com",134],["reputationsheriffkennethsand.com",134],["telyn610zoanthropy.com",134],["tubelessceliolymph.com",134],["tummulerviolableness.com",134],["un-block-voe.net",134],["v-o-e-unblock.com",134],["voe-un-block.com",134],["voeun-block.net",134],["voeunbl0ck.com",134],["voeunblck.com",134],["voeunblk.com",134],["voeunblock.com",134],["voeunblock1.com",134],["voeunblock2.com",134],["voeunblock3.com",134],["agefi.fr",135],["cariskuy.com",136],["letras2.com",136],["yusepjaelani.blogspot.com",137],["letras.mus.br",138],["mtlurb.com",139],["port.hu",140],["acdriftingpro.com",140],["flight-report.com",140],["forumdz.com",140],["abandonmail.com",140],["flmods.com",140],["zilinak.sk",140],["projectfreetv.stream",140],["hotdesimms.com",140],["pdfaid.com",140],["dzeko11.net",[140,245]],["bootdey.com",140],["mail.com",140],["expresskaszubski.pl",140],["moegirl.org.cn",140],["flix-wave.lol",140],["fmovies0.cc",140],["onemanhua.com",141],["laksa19.github.io",142],["javcl.com",142],["tvlogy.to",142],["live.dragaoconnect.net",142],["beststremo.com",142],["seznamzpravy.cz",142],["xerifetech.com",142],["freemcserver.net",142],["t3n.de",143],["allindiaroundup.com",144],["vectorizer.io",145],["smgplaza.com",145],["onehack.us",145],["thapcam.net",145],["thefastlaneforum.com",146],["trade2win.com",147],["modagamers.com",148],["freemagazines.top",148],["straatosphere.com",148],["rule34porn.net",148],["nullpk.com",148],["adslink.pw",148],["downloadudemy.com",148],["picgiraffe.com",148],["weadown.com",148],["freepornsex.net",148],["nurparatodos.com.ar",148],["librospreuniversitariospdf.blogspot.com",149],["forexeen.us",149],["khsm.io",149],["webcreator-journal.com",149],["nu6i-bg-net.com",149],["msdos-games.com",149],["blocklayer.com",149],["routech.ro",150],["hokej.net",150],["turkmmo.com",151],["palermotoday.it",152],["baritoday.it",152],["trentotoday.it",152],["agrigentonotizie.it",152],["anconatoday.it",152],["arezzonotizie.it",152],["avellinotoday.it",152],["bresciatoday.it",152],["brindisireport.it",152],["casertanews.it",152],["cataniatoday.it",152],["cesenatoday.it",152],["chietitoday.it",152],["forlitoday.it",152],["frosinonetoday.it",152],["genovatoday.it",152],["ilpescara.it",152],["ilpiacenza.it",152],["latinatoday.it",152],["lecceprima.it",152],["leccotoday.it",152],["livornotoday.it",152],["messinatoday.it",152],["milanotoday.it",152],["modenatoday.it",152],["monzatoday.it",152],["novaratoday.it",152],["padovaoggi.it",152],["parmatoday.it",152],["perugiatoday.it",152],["pisatoday.it",152],["quicomo.it",152],["ravennatoday.it",152],["reggiotoday.it",152],["riminitoday.it",152],["romatoday.it",152],["salernotoday.it",152],["sondriotoday.it",152],["sportpiacenza.it",152],["ternitoday.it",152],["today.it",152],["torinotoday.it",152],["trevisotoday.it",152],["triesteprima.it",152],["udinetoday.it",152],["veneziatoday.it",152],["vicenzatoday.it",152],["thumpertalk.com",153],["arkcod.org",153],["facciabuco.com",154],["softx64.com",155],["thelayoff.com",156],["blog.coinsrise.net",156],["blog.cryptowidgets.net",156],["blog.insurancegold.in",156],["blog.wiki-topia.com",156],["blog.coinsvalue.net",156],["blog.cookinguide.net",156],["blog.freeoseocheck.com",156],["blog.makeupguide.net",156],["blog.carstopia.net",156],["blog.carsmania.net",156],["shorterall.com",156],["blog24.me",156],["maxstream.video",156],["tvepg.eu",156],["manwan.xyz",156],["dailymaverick.co.za",157],["apps2app.com",158],["starkroboticsfrc.com",159],["sinonimos.de",159],["antonimos.de",159],["quesignifi.ca",159],["tiktokrealtime.com",159],["tiktokcounter.net",159],["tpayr.xyz",159],["poqzn.xyz",159],["ashrfd.xyz",159],["rezsx.xyz",159],["tryzt.xyz",159],["ashrff.xyz",159],["rezst.xyz",159],["dawenet.com",159],["erzar.xyz",159],["waezm.xyz",159],["waezg.xyz",159],["blackwoodacademy.org",159],["cryptednews.space",159],["vivuq.com",159],["swgop.com",159],["vbnmll.com",159],["telcoinfo.online",159],["dshytb.com",159],["enit.in",160],["financerites.com",160],["fadedfeet.com",161],["homeculina.com",161],["ineedskin.com",161],["kenzo-flowertag.com",161],["lawyex.co",161],["mdn.lol",161],["bitzite.com",162],["coingraph.us",163],["impact24.us",163],["apkmodvn.com",164],["mod1s.com",164],["apkmoddone.com",165],["dl.apkmoddone.com",166],["phongroblox.com",166],["shortencash.click",167],["my-code4you.blogspot.com",168],["vrcmods.com",169],["osuskinner.com",169],["osuskins.net",169],["pentruea.com",[170,171]],["mchacks.net",172],["why-tech.it",173],["compsmag.com",174],["tapetus.pl",175],["autoroad.cz",176],["brawlhalla.fr",176],["tecnobillo.com",176],["sexcamfreeporn.com",177],["breatheheavy.com",178],["wenxuecity.com",179],["key-hub.eu",180],["fabioambrosi.it",181],["tattle.life",182],["emuenzen.de",182],["terrylove.com",182],["mynet.com",[183,246]],["cidade.iol.pt",184],["fantacalcio.it",185],["hentaifreak.org",186],["hypebeast.com",187],["krankheiten-simulieren.de",188],["catholic.com",189],["3dmodelshare.org",190],["techinferno.com",191],["ibeconomist.com",192],["bookriot.com",193],["purposegames.com",194],["globo.com",195],["latimes.com",195],["claimrbx.gg",196],["perelki.net",197],["vpn-anbieter-vergleich-test.de",198],["livingincebuforums.com",199],["paperzonevn.com",200],["alltechnerd.com",201],["malaysianwireless.com",202],["erinsakura.com",203],["infofuge.com",203],["freejav.guru",203],["novelmultiverse.com",203],["fritidsmarkedet.dk",204],["maskinbladet.dk",204],["15min.lt",205],["baddiehub.com",206],["mr9soft.com",207],["21porno.com",208],["adult-sex-gamess.com",209],["hentaigames.app",209],["mobilesexgamesx.com",209],["mysexgamer.com",209],["porngameshd.com",209],["sexgamescc.com",209],["xnxx-sex-videos.com",209],["f2movies.to",210],["freeporncave.com",211],["tubsxxx.com",212],["subtitle.one",213],["manga18fx.com",214],["freebnbcoin.com",214],["sextvx.com",215],["studydhaba.com",216],["freecourse.tech",216],["victor-mochere.com",216],["papunika.com",216],["mobilanyheter.net",216],["prajwaldesai.com",[216,236]],["ftuapps.dev",216],["muztext.com",217],["pornohans.com",218],["nursexfilme.com",218],["pornohirsch.net",218],["xhamster-sexvideos.com",218],["pornoschlange.com",218],["hdpornos.net",218],["gutesexfilme.com",218],["short1.site",218],["zona-leros.com",218],["charbelnemnom.com",219],["simplebits.io",220],["online-fix.me",221],["gamersdiscussionhub.com",222],["owlzo.com",223],["q1003.com",224],["blogpascher.com",225],["testserver.pro",226],["lifestyle.bg",226],["money.bg",226],["news.bg",226],["topsport.bg",226],["webcafe.bg",226],["schoolcheats.net",227],["mgnet.xyz",228],["advertiserandtimes.co.uk",229],["xvideos2020.me",230],["111.90.159.132",231],["techsolveprac.com",232],["joomlabeginner.com",233],["largescaleforums.com",234],["dubznetwork.com",235],["hentaidexy.com",237],["traderepublic.community",238],["babia.to",239],["code2care.org",240],["xxxxsx.com",242],["ngontinh24.com",243],["idevicecentral.com",244],["zona11.com",245],["scsport.live",245],["blog.esuteru.com",246],["blog.livedoor.jp",246],["carscoops.com",246],["dziennik.pl",246],["eurointegration.com.ua",246],["flatpanelshd.com",246],["fourfourtwo.co.kr",246],["hoyme.jp",246],["issuya.com",246],["itainews.com",246],["iusm.co.kr",246],["logicieleducatif.fr",246],["mydaily.co.kr",246],["onlinegdb.com",246],["picrew.me",246],["pravda.com.ua",246],["reportera.co.kr",246],["sportsrec.com",246],["sportsseoul.com",246],["taxguru.in",246],["text-compare.com",246],["tweaksforgeeks.com",246],["videogamemods.com",246],["wfmz.com",246],["worldhistory.org",246],["etnews.com",246],["palabr.as",246],["motscroises.fr",246],["cruciverba.it",246],["oradesibiu.ro",246],["w.grapps.me",246],["gazetaprawna.pl",246],["pressian.com",246],["raenonx.cc",[246,264]],["indiatimes.com",246],["missyusa.com",246],["aikatu.jp",246],["adintrend.tv",246],["ark-unity.com",246],["cool-style.com.tw",246],["doanhnghiepvn.vn",246],["thesaurus.net",247],["automobile-catalog.com",247],["motorbikecatalog.com",247],["maketecheasier.com",247],["mlbpark.donga.com",248],["jjang0u.com",249],["mangacrab.com",251],["viefaucet.com",252],["cloud-computing-central.com",253],["afk.guide",254],["businessnamegenerator.com",255],["derstandard.at",256],["derstandard.de",256],["rocketnews24.com",257],["soranews24.com",257],["youpouch.com",257],["gourmetscans.net",258],["ilsole24ore.com",259],["ipacrack.com",260],["hentaiporn.one",261],["infokik.com",262],["daemonanime.net",263],["deezer.com",264],["fosslinux.com",265],["shrdsk.me",266],["examword.com",267],["sempreupdate.com.br",267],["tribuna.com",268],["trendsderzukunft.de",269],["gal-dem.com",269],["lostineu.eu",269],["oggitreviso.it",269],["speisekarte.de",269],["mixed.de",269],["lightnovelspot.com",[270,271]],["lightnovelworld.com",[270,271]],["novelpub.com",[270,271]],["webnovelpub.com",[270,271]],["mail.yahoo.com",272],["hwzone.co.il",273],["nammakalvi.com",274],["c2g.at",275],["terafly.me",275],["elamigos-games.com",275],["elamigos-games.net",275],["dktechnicalmate.com",276],["recipahi.com",276],["kaystls.site",277],["aquarius-horoscopes.com",278],["cancer-horoscopes.com",278],["dubipc.blogspot.com",278],["echoes.gr",278],["engel-horoskop.de",278],["freegames44.com",278],["fuerzasarmadas.eu",278],["gemini-horoscopes.com",278],["jurukunci.net",278],["krebs-horoskop.com",278],["leo-horoscopes.com",278],["maliekrani.com",278],["nklinks.click",278],["ourenseando.es",278],["pisces-horoscopes.com",278],["radio-en-direct.fr",278],["sagittarius-horoscopes.com",278],["scorpio-horoscopes.com",278],["singlehoroskop-loewe.de",278],["skat-karten.de",278],["skorpion-horoskop.com",278],["taurus-horoscopes.com",278],["the1security.com",278],["torrentmovies.online",278],["virgo-horoscopes.com",278],["zonamarela.blogspot.com",278],["yoima.hatenadiary.com",278],["vpntester.org",279],["japscan.lol",280],["digitask.ru",281],["tempumail.com",282],["sexvideos.host",283],["10alert.com",285],["cryptstream.de",286],["nydus.org",286],["techhelpbd.com",287],["fapdrop.com",288],["cellmapper.net",289],["hdrez.com",290],["youwatch-serie.com",290],["bembed.net",291],["elbailedeltroleo.site",291],["embedv.net",291],["fslinks.org",291],["listeamed.net",291],["v6embed.xyz",291],["vgplayer.xyz",291],["vid-guard.com",291],["giga-uqload.xyz",291],["printablecreative.com",292],["peachprintable.com",292],["comohoy.com",293],["leak.sx",293],["paste.bin.sx",293],["pornleaks.in",293],["merlininkazani.com",293],["j91.asia",294],["rekidai-info.github.io",295],["jeniusplay.com",296],["indianyug.com",297],["rgb.vn",297],["needrom.com",298],["criptologico.com",299],["megadrive-emulator.com",300],["eromanga-show.com",301],["hentai-one.com",301],["hentaipaw.com",301],["10minuteemails.com",302],["luxusmail.org",302],["w3cub.com",303],["bangpremier.com",304],["nyaa.iss.ink",305],["tnp98.xyz",307],["freepdfcomic.com",308],["techedubyte.com",309],["tickzoo.tv",310],["memedroid.com",311],["animesync.org",312],["karaoketexty.cz",313],["filmizlehdfilm.com",314],["fullfilmizle.cc",314],["gofilmizle.net",314],["resortcams.com",315],["cheatography.com",315],["sonixgvn.net",316],["faqwiki.us",316],["mjakmama24.pl",318],["cheatermad.com",319],["ville-ideale.fr",320],["eodev.com",321],["xfreehd.com",322],["freethesaurus.com",323],["thefreedictionary.com",323],["fm-arena.com",324],["tradersunion.com",325],["tandess.com",326],["allosurf.net",326],["spontacts.com",327],["dankmemer.lol",328],["getexploits.com",329],["fplstatistics.com",330],["breitbart.com",331],["salidzini.lv",332],["choosingnothing.com",333],["cryptorank.io",[334,335]],["th.gl",336],["4kwebplay.xyz",337],["qqwebplay.xyz",337],["viwlivehdplay.ru",337],["molbiotools.com",338],["vods.tv",339],["18xxx.xyz",340],["raidrush.net",341],["xnxxcom.xyz",342],["videzz.net",343],["spambox.xyz",344],["dreamdth.com",345],["freemodsapp.in",345],["onlytech.com",345],["melaniezettofrais.online",346],["player.jeansaispasplus.homes",346],["en-thunderscans.com",347],["historicaerials.com",349],["iqksisgw.xyz",350],["caroloportunidades.com.br",351],["coempregos.com.br",351],["foodiesgallery.com",351],["vikatan.com",352],["lastampa.it",353]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",1],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["eztv",5],["1337x",5],["sushi-scan",7],["spigotunlocked",7],["ahmedmode",7],["kissasian",10],["mma-core",11],["yts",14],["720pstream",14],["1stream",14],["thefmovies",15],["urlcero",21],["totaldebrid",24],["sandrives",24],["fxporn69",33],["aliancapes",33],["pouvideo",35],["povvideo",35],["povw1deo",35],["povwideo",35],["powv1deo",35],["powvibeo",35],["powvideo",35],["powvldeo",35],["tubsexer",41],["porno-tour",41],["lenkino",41],["pornomoll",41],["camsclips",41],["m4ufree",45],["writedroid",56],["telerium",60],["pandafreegames",74],["thoptv",82],["shortzzy",91],["streameast",103],["thestreameast",103],["daddylivehd",103],["solvetube",106],["pornhub",107],["wcofun",114],["bollyholic",118],["gotxx",133],["turkanime",134],["voe-unblock",134],["rp5",142],["khatrimaza",148],["pogolinks",148],["popcornstream",150],["xhamsterdeutsch",218],["privatemoviez",222],["gmx",241],["lightnovelpub",[270,271]],["camcaps",284],["vembed",291],["moflix-stream",[291,348]],["drivebot",306],["thenextplanet1",307],["oploverz",310],["filmizletv",314],["autoscout24",317],["brainly",321]]);

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
