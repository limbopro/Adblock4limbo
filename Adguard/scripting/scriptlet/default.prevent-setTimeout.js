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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["offset"],["contrformpub"],["trigger","0"],["popup"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["Ads"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["afterOpen"],["getComputedStyle(testAd)"],["adblocker"],["affiliate"],["/^(?=.*location\\.href)(?!.*paragraph).*/s"],["document['\\x"],["hasAdblock"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["/^/","1000"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["/adbl/i"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["()=>{var"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["googleFC"],["()=>k(S(4"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,6,7]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,117]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,142]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,288]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,284]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["hdbox.ws",7],["todopolicia.com",7],["scat.gold",7],["freecoursesite.com",7],["windowcleaningforums.co.uk",7],["cruisingearth.com",7],["hobby-machinist.com",7],["freegogpcgames.com",7],["starleaks.org",7],["latitude.to",7],["kitchennovel.com",7],["w3layouts.com",7],["blog.receivefreesms.co.uk",7],["eductin.com",7],["dealsfinders.blog",7],["audiobooks4soul.com",7],["tinhocdongthap.com",7],["sakarnewz.com",7],["downloadr.in",7],["topcomicporno.com",7],["dongknows.com",7],["celtadigital.com",7],["iptvrun.com",7],["adsup.lk",7],["cryptomonitor.in",7],["areatopik.com",7],["cardscanner.co",7],["nullforums.net",7],["courseclub.me",7],["tamarindoyam.com",7],["jeep-cj.com",7],["choiceofmods.com",7],["myqqjd.com",7],["ssdtop.com",7],["apkhex.com",7],["gezegenforum.com",7],["mbc2.live",7],["iptvapps.net",7],["null-scripts.net",7],["nullscripts.net",7],["bloground.ro",7],["witcherhour.com",7],["ottverse.com",7],["torrentmac.net",7],["mazakony.com",7],["laptechinfo.com",7],["mc-at.org",7],["playstationhaber.com",7],["mangapt.com",7],["seriesperu.com",7],["pesprofessionals.com",7],["wpsimplehacks.com",7],["sportshub.to",[7,283]],["topsporter.net",[7,283]],["darkwanderer.net",7],["truckingboards.com",7],["coldfrm.org",7],["azrom.net",7],["freepatternsarea.com",7],["alttyab.net",7],["hq-links.com",7],["mobilkulup.com",7],["esopress.com",7],["nesiaku.my.id",7],["jipinsoft.com",7],["surfsees.com",7],["truthnews.de",7],["farsinama.com",7],["worldofiptv.com",7],["vuinsider.com",7],["crazydl.net",7],["gamemodsbase.com",7],["babiato.tech",7],["secuhex.com",7],["turkishaudiocenter.com",7],["galaxyos.net",7],["blackhatworld.com",7],["bizdustry.com",7],["storefront.com.ng",7],["pkbiosfix.com",7],["casi3.xyz",7],["mediafire.com",8],["wcoanimedub.tv",9],["wcoforever.net",9],["openspeedtest.com",9],["addtobucketlist.com",9],["3dzip.org",[9,73]],["ilmeteo.it",9],["wcoforever.com",9],["comprovendolibri.it",9],["healthelia.com",9],["keephealth.info",10],["afreesms.com",11],["laksa19.github.io",11],["javcl.com",11],["tvlogy.to",11],["live.dragaoconnect.net",11],["beststremo.com",11],["seznam.cz",11],["seznamzpravy.cz",11],["xerifetech.com",11],["freemcserver.net",11],["wallpapershome.com",13],["anghami.com",14],["wired.com",15],["tutele.sx",16],["footyhunter3.xyz",16],["katestube.com",17],["short.pe",17],["footystreams.net",17],["seattletimes.com",18],["bestgames.com",19],["yiv.com",19],["globalrph.com",20],["e-glossa.it",21],["webcheats.com.br",22],["gala.fr",24],["gentside.com",24],["geo.fr",24],["hbrfrance.fr",24],["nationalgeographic.fr",24],["ohmymag.com",24],["serengo.net",24],["vsd.fr",24],["updato.com",[25,42]],["methbox.com",26],["daizurin.com",26],["pendekarsubs.us",26],["dreamfancy.org",26],["rysafe.blogspot.com",26],["techacode.com",26],["toppng.com",26],["th-world.com",26],["avjamack.com",26],["avjamak.net",26],["dlhd.sx",27],["embedstream.me",27],["yts-subs.net",27],["cnnamador.com",28],["nudecelebforum.com",29],["pronpic.org",30],["thewebflash.com",31],["discordfastfood.com",31],["xup.in",31],["popularmechanics.com",32],["op.gg",33],["lequipe.fr",34],["comunidadgzone.es",35],["mp3fy.com",35],["lebensmittelpraxis.de",35],["ebookdz.com",35],["forum-pokemon-go.fr",35],["praxis-jugendarbeit.de",35],["dictionnaire-medical.net",35],["cle0desktop.blogspot.com",35],["up-load.io",35],["direct-link.net",35],["direkt-wissen.com",35],["keysbrasil.blogspot.com",35],["hotpress.info",35],["turkleech.com",35],["anibatch.me",35],["anime-i.com",35],["plex-guide.de",35],["healthtune.site",35],["gewinde-normen.de",35],["tucinehd.com",35],["jellynote.com",36],["eporner.com",38],["pornbimbo.com",39],["4j.com",39],["avoiderrors.com",40],["sitarchive.com",40],["livenewsof.com",40],["topnewsshow.com",40],["gatcha.org",40],["empregoestagios.com",40],["everydayonsales.com",40],["kusonime.com",40],["aagmaal.xyz",40],["suicidepics.com",40],["codesnail.com",40],["codingshiksha.com",40],["graphicux.com",40],["asyadrama.com",40],["bitcoinegypt.news",40],["citychilli.com",40],["talkjarvis.com",40],["hdmotori.it",41],["femdomtb.com",43],["camhub.cc",43],["bobs-tube.com",43],["pornfd.com",43],["popno-tour.net",43],["molll.mobi",43],["watchmdh.to",43],["camwhores.tv",43],["elfqrin.com",44],["satcesc.com",45],["apfelpatient.de",45],["lusthero.com",46],["m2list.com",47],["embed.nana2play.com",47],["elahmad.com",47],["dofusports.xyz",47],["dallasnews.com",48],["lnk.news",49],["lnk.parts",49],["efukt.com",50],["wendycode.com",50],["springfieldspringfield.co.uk",51],["porndoe.com",52],["smsget.net",[53,54]],["kjanime.net",55],["gioialive.it",56],["classicreload.com",57],["scriptzhub.com",57],["hotpornfile.org",58],["coolsoft.altervista.org",58],["hackedonlinegames.com",58],["jkoding.xyz",58],["dailytech-news.eu",58],["settlersonlinemaps.com",58],["ad-doge.com",58],["magdownload.org",58],["kpkuang.org",58],["shareus.site",58],["crypto4yu.com",58],["faucetwork.space",58],["thenightwithoutthedawn.blogspot.com",58],["entutes.com",58],["claimlite.club",58],["bazadecrypto.com",[58,332]],["chicoer.com",59],["bostonherald.com",59],["dailycamera.com",59],["maxcheaters.com",60],["rbxoffers.com",60],["mhn.quest",60],["leagueofgraphs.com",60],["hieunguyenphoto.com",60],["benzinpreis.de",60],["postimees.ee",60],["police.community",60],["gisarea.com",60],["schaken-mods.com",60],["tvnet.lv",60],["theclashify.com",60],["txori.com",60],["olarila.com",60],["deletedspeedstreams.blogspot.com",60],["schooltravelorganiser.com",60],["xhardhempus.net",60],["sportsplays.com",61],["pornvideotop.com",63],["xstory-fr.com",63],["krotkoosporcie.pl",63],["deinesexfilme.com",64],["einfachtitten.com",64],["halloporno.com",64],["herzporno.com",64],["lesbenhd.com",64],["milffabrik.com",[64,256]],["porn-monkey.com",64],["porndrake.com",64],["pornhubdeutsch.net",64],["pornoaffe.com",64],["pornodavid.com",64],["pornoente.tv",[64,256]],["pornofisch.com",64],["pornofelix.com",64],["pornohammer.com",64],["pornohelm.com",64],["pornoklinge.com",64],["pornotom.com",[64,256]],["pornotommy.com",64],["pornovideos-hd.com",64],["pornozebra.com",[64,256]],["xhamsterdeutsch.xyz",64],["xnxx-sexfilme.com",64],["zerion.cc",64],["letribunaldunet.fr",65],["vladan.fr",65],["live-tv-channels.org",66],["eslfast.com",67],["freegamescasual.com",68],["tcpvpn.com",69],["oko.sh",69],["timesnownews.com",69],["timesnowhindi.com",69],["timesnowmarathi.com",69],["zoomtventertainment.com",69],["tsubasa.im",70],["sholah.net",71],["2rdroid.com",71],["bisceglielive.it",72],["pandajogosgratis.com.br",74],["5278.cc",75],["tonspion.de",77],["duplichecker.com",78],["plagiarismchecker.co",78],["plagiarismdetector.net",78],["searchenginereports.net",78],["giallozafferano.it",79],["autojournal.fr",79],["autoplus.fr",79],["sportauto.fr",79],["linkspaid.com",80],["proxydocker.com",80],["beeimg.com",[81,82]],["emturbovid.com",82],["findjav.com",82],["javggvideo.xyz",82],["mmtv01.xyz",82],["stbturbo.xyz",82],["streamsilk.com",82],["ftlauderdalebeachcam.com",83],["ftlauderdalewebcam.com",83],["juneauharborwebcam.com",83],["keywestharborwebcam.com",83],["kittycatcam.com",83],["mahobeachcam.com",83],["miamiairportcam.com",83],["morganhillwebcam.com",83],["njwildlifecam.com",83],["nyharborwebcam.com",83],["paradiseislandcam.com",83],["pompanobeachcam.com",83],["portbermudawebcam.com",83],["portcanaveralwebcam.com",83],["portevergladeswebcam.com",83],["portmiamiwebcam.com",83],["portnywebcam.com",83],["portnassauwebcam.com",83],["portstmaartenwebcam.com",83],["portstthomaswebcam.com",83],["porttampawebcam.com",83],["sxmislandcam.com",83],["themes-dl.com",83],["badassdownloader.com",83],["badasshardcore.com",83],["badassoftcore.com",83],["nulljungle.com",83],["teevee.asia",83],["otakukan.com",83],["gearingcommander.com",85],["generate.plus",86],["calculate.plus",86],["avcesar.com",87],["audiotag.info",88],["tudigitale.it",89],["ibcomputing.com",90],["legia.net",91],["acapellas4u.co.uk",92],["robloxscripts.com",93],["libreriamo.it",93],["postazap.com",93],["medebooks.xyz",93],["mashtips.com",93],["marriedgames.com.br",93],["4allprograms.me",93],["nurgsm.com",93],["certbyte.com",93],["plugincrack.com",93],["gamingdeputy.com",93],["freewebcart.com",93],["streamhentaimovies.com",94],["konten.co.id",95],["diariodenavarra.es",96],["tubereader.me",96],["scripai.com",96],["myfxbook.com",96],["whatfontis.com",96],["xiaomifans.pl",97],["eletronicabr.com",97],["optifine.net",98],["luzernerzeitung.ch",99],["tagblatt.ch",99],["spellcheck.net",100],["spellchecker.net",100],["spellweb.com",100],["ableitungsrechner.net",101],["alternet.org",102],["gourmetsupremacy.com",102],["shrib.com",103],["pandafiles.com",104],["vidia.tv",[104,123]],["hortonanderfarom.blogspot.com",104],["clarifystraight.com",104],["tutelehd3.xyz",105],["mega4upload.com",105],["coolcast2.com",105],["techclips.net",105],["earthquakecensus.com",105],["footyhunter.lol",105],["gamerarcades.com",105],["poscitech.click",105],["starlive.stream",105],["utopianwilderness.com",105],["wecast.to",105],["sportbar.live",105],["tunovelaligera.com",106],["tapchipi.com",106],["cuitandokter.com",106],["tech-blogs.com",106],["cardiagn.com",106],["dcleakers.com",106],["esgeeks.com",106],["pugliain.net",106],["uplod.net",106],["worldfreeware.com",106],["fikiri.net",106],["myhackingworld.com",106],["phoenixfansub.com",106],["freecourseweb.com",107],["devcourseweb.com",107],["coursewikia.com",107],["courseboat.com",107],["coursehulu.com",107],["lne.es",110],["pornult.com",111],["webcamsdolls.com",111],["bitcotasks.com",[111,157]],["adsy.pw",111],["playstore.pw",111],["exactpay.online",111],["thothd.to",111],["proplanta.de",112],["hydrogenassociation.org",113],["ludigames.com",113],["sportitalialive.com",113],["made-by.org",113],["xenvn.com",113],["worldtravelling.com",113],["igirls.in",113],["technichero.com",113],["roshiyatech.my.id",113],["24sport.stream",113],["androidadult.com",113],["aeroxplorer.com",113],["mad4wheels.com",114],["logi.im",114],["emailnator.com",114],["textograto.com",115],["voyageforum.com",116],["hmc-id.blogspot.com",116],["ilforumdeibrutti.is",116],["myabandonware.com",116],["chatta.it",118],["ketubanjiwa.com",119],["nsfw247.to",120],["funzen.net",120],["ilclubdellericette.it",120],["hubstream.in",120],["extremereportbot.com",121],["getintopc.com",122],["qoshe.com",124],["lowellsun.com",125],["mamadu.pl",125],["dobrapogoda24.pl",125],["motohigh.pl",125],["namasce.pl",125],["ultimate-catch.eu",126],["cpopchanelofficial.com",127],["creditcardgenerator.com",128],["creditcardrush.com",128],["bostoncommons.net",128],["thejobsmovie.com",128],["livsavr.co",128],["hl-live.de",129],["wohnmobilforum.de",129],["nulledbear.com",129],["sinnerclownceviri.net",129],["satoshi-win.xyz",129],["encurtandourl.com",[129,135]],["freesoft.id",129],["zcteam.id",129],["www-daftarharga.blogspot.com",129],["ear-phone-review.com",129],["telefullenvivo.com",129],["listatv.pl",129],["daemon-hentai.com",[129,301]],["ltc-faucet.xyz",129],["coin-profits.xyz",129],["relampagomovies.com",129],["nilopolisonline.com.br",130],["mesquitaonline.com",130],["yellowbridge.com",130],["socialgirls.im",131],["yaoiotaku.com",132],["camhub.world",133],["moneyhouse.ch",134],["ihow.info",135],["hartico.tv",135],["filesus.com",135],["sturls.com",135],["re.two.re",135],["turbo1.co",135],["cartoonsarea.xyz",135],["valeronevijao.com",136],["cigarlessarefy.com",136],["figeterpiazine.com",136],["yodelswartlike.com",136],["generatesnitrosate.com",136],["crownmakermacaronicism.com",136],["chromotypic.com",136],["gamoneinterrupted.com",136],["metagnathtuggers.com",136],["wolfdyslectic.com",136],["rationalityaloelike.com",136],["sizyreelingly.com",136],["simpulumlamerop.com",136],["urochsunloath.com",136],["monorhinouscassaba.com",136],["counterclockwisejacky.com",136],["35volitantplimsoles5.com",136],["scatch176duplicities.com",136],["antecoxalbobbing1010.com",136],["boonlessbestselling244.com",136],["cyamidpulverulence530.com",136],["guidon40hyporadius9.com",136],["449unceremoniousnasoseptal.com",136],["19turanosephantasia.com",136],["30sensualizeexpression.com",136],["321naturelikefurfuroid.com",136],["745mingiestblissfully.com",136],["availedsmallest.com",136],["greaseball6eventual20.com",136],["toxitabellaeatrebates306.com",136],["20demidistance9elongations.com",136],["audaciousdefaulthouse.com",136],["fittingcentermondaysunday.com",136],["fraudclatterflyingcar.com",136],["launchreliantcleaverriver.com",136],["matriculant401merited.com",136],["realfinanceblogcenter.com",136],["reputationsheriffkennethsand.com",136],["telyn610zoanthropy.com",136],["tubelessceliolymph.com",136],["tummulerviolableness.com",136],["un-block-voe.net",136],["v-o-e-unblock.com",136],["voe-un-block.com",136],["voeun-block.net",136],["voeunbl0ck.com",136],["voeunblck.com",136],["voeunblk.com",136],["voeunblock.com",136],["voeunblock1.com",136],["voeunblock2.com",136],["voeunblock3.com",136],["agefi.fr",137],["cariskuy.com",138],["letras2.com",138],["yusepjaelani.blogspot.com",139],["letras.mus.br",140],["mtlurb.com",141],["port.hu",142],["acdriftingpro.com",142],["flix-wave.lol",142],["flight-report.com",142],["forumdz.com",142],["abandonmail.com",142],["flmods.com",142],["zilinak.sk",142],["projectfreetv.stream",142],["hotdesimms.com",142],["pdfaid.com",142],["dzeko11.net",[142,283]],["bootdey.com",142],["mail.com",142],["expresskaszubski.pl",142],["moegirl.org.cn",142],["onemanhua.com",143],["t3n.de",144],["allindiaroundup.com",145],["vectorizer.io",146],["smgplaza.com",146],["onehack.us",146],["thapcam.net",146],["thefastlaneforum.com",147],["trade2win.com",148],["modagamers.com",149],["freemagazines.top",149],["straatosphere.com",149],["rule34porn.net",149],["nullpk.com",149],["adslink.pw",149],["downloadudemy.com",149],["picgiraffe.com",149],["weadown.com",149],["freepornsex.net",149],["nurparatodos.com.ar",149],["librospreuniversitariospdf.blogspot.com",150],["msdos-games.com",150],["blocklayer.com",150],["forexeen.us",150],["khsm.io",150],["webcreator-journal.com",150],["nu6i-bg-net.com",150],["routech.ro",151],["hokej.net",151],["turkmmo.com",152],["palermotoday.it",153],["baritoday.it",153],["trentotoday.it",153],["agrigentonotizie.it",153],["anconatoday.it",153],["arezzonotizie.it",153],["avellinotoday.it",153],["bresciatoday.it",153],["brindisireport.it",153],["casertanews.it",153],["cataniatoday.it",153],["cesenatoday.it",153],["chietitoday.it",153],["forlitoday.it",153],["frosinonetoday.it",153],["genovatoday.it",153],["ilpescara.it",153],["ilpiacenza.it",153],["latinatoday.it",153],["lecceprima.it",153],["leccotoday.it",153],["livornotoday.it",153],["messinatoday.it",153],["milanotoday.it",153],["modenatoday.it",153],["monzatoday.it",153],["novaratoday.it",153],["padovaoggi.it",153],["parmatoday.it",153],["perugiatoday.it",153],["pisatoday.it",153],["quicomo.it",153],["ravennatoday.it",153],["reggiotoday.it",153],["riminitoday.it",153],["romatoday.it",153],["salernotoday.it",153],["sondriotoday.it",153],["sportpiacenza.it",153],["ternitoday.it",153],["today.it",153],["torinotoday.it",153],["trevisotoday.it",153],["triesteprima.it",153],["udinetoday.it",153],["veneziatoday.it",153],["vicenzatoday.it",153],["thumpertalk.com",154],["arkcod.org",154],["facciabuco.com",155],["softx64.com",156],["thelayoff.com",157],["manwan.xyz",157],["blog.coinsrise.net",157],["blog.cryptowidgets.net",157],["blog.insurancegold.in",157],["blog.wiki-topia.com",157],["blog.coinsvalue.net",157],["blog.cookinguide.net",157],["blog.freeoseocheck.com",157],["blog.makeupguide.net",157],["blog.carstopia.net",157],["blog.carsmania.net",157],["shorterall.com",157],["blog24.me",157],["maxstream.video",157],["maxlinks.online",157],["tvepg.eu",157],["dailymaverick.co.za",158],["apps2app.com",159],["cheatermad.com",160],["ville-ideale.fr",161],["eodev.com",162],["tickzoo.tv",163],["xfreehd.com",164],["freethesaurus.com",165],["thefreedictionary.com",165],["fm-arena.com",166],["tradersunion.com",167],["tandess.com",168],["allosurf.net",168],["faqwiki.us",169],["sonixgvn.net",169],["spontacts.com",170],["dankmemer.lol",171],["getexploits.com",172],["fplstatistics.com",173],["raenonx.cc",[174,284]],["deezer.com",174],["breitbart.com",175],["salidzini.lv",176],["choosingnothing.com",177],["cryptorank.io",[178,179]],["th.gl",180],["4kwebplay.xyz",181],["qqwebplay.xyz",181],["viwlivehdplay.ru",181],["molbiotools.com",182],["vods.tv",183],["18xxx.xyz",184],["raidrush.net",185],["xnxxcom.xyz",186],["videzz.net",187],["spambox.xyz",188],["dreamdth.com",189],["freemodsapp.in",189],["onlytech.com",189],["melaniezettofrais.online",190],["player.jeansaispasplus.homes",190],["giga-uqload.xyz",191],["bembed.net",191],["elbailedeltroleo.site",191],["embedv.net",191],["fslinks.org",191],["listeamed.net",191],["v6embed.xyz",191],["vgplayer.xyz",191],["vid-guard.com",191],["vidguard.online",191],["en-thunderscans.com",192],["cheatography.com",193],["resortcams.com",193],["karistudio.com",195],["iqksisgw.xyz",196],["caroloportunidades.com.br",197],["coempregos.com.br",197],["foodiesgallery.com",197],["starkroboticsfrc.com",198],["sinonimos.de",198],["antonimos.de",198],["quesignifi.ca",198],["tiktokrealtime.com",198],["tiktokcounter.net",198],["tpayr.xyz",198],["poqzn.xyz",198],["ashrfd.xyz",198],["rezsx.xyz",198],["tryzt.xyz",198],["ashrff.xyz",198],["rezst.xyz",198],["dawenet.com",198],["erzar.xyz",198],["waezm.xyz",198],["waezg.xyz",198],["blackwoodacademy.org",198],["cryptednews.space",198],["vivuq.com",198],["swgop.com",198],["vbnmll.com",198],["telcoinfo.online",198],["dshytb.com",198],["enit.in",199],["financerites.com",199],["fadedfeet.com",200],["homeculina.com",200],["ineedskin.com",200],["kenzo-flowertag.com",200],["lawyex.co",200],["mdn.lol",200],["bitzite.com",201],["coingraph.us",202],["impact24.us",202],["apkmodvn.com",203],["mod1s.com",203],["apkmoddone.com",204],["dl.apkmoddone.com",205],["phongroblox.com",205],["my-code4you.blogspot.com",206],["vrcmods.com",207],["osuskinner.com",207],["osuskins.net",207],["pentruea.com",[208,209]],["mchacks.net",210],["why-tech.it",211],["compsmag.com",212],["tapetus.pl",213],["autoroad.cz",214],["brawlhalla.fr",214],["tecnobillo.com",214],["sexcamfreeporn.com",215],["breatheheavy.com",216],["wenxuecity.com",217],["key-hub.eu",218],["fabioambrosi.it",219],["tattle.life",220],["emuenzen.de",220],["terrylove.com",220],["mynet.com",[221,284]],["cidade.iol.pt",222],["fantacalcio.it",223],["hentaifreak.org",224],["hypebeast.com",225],["krankheiten-simulieren.de",226],["catholic.com",227],["3dmodelshare.org",228],["techinferno.com",229],["ibeconomist.com",230],["bookriot.com",231],["purposegames.com",232],["globo.com",233],["latimes.com",233],["claimrbx.gg",234],["perelki.net",235],["vpn-anbieter-vergleich-test.de",236],["livingincebuforums.com",237],["paperzonevn.com",238],["alltechnerd.com",239],["malaysianwireless.com",240],["erinsakura.com",241],["infofuge.com",241],["freejav.guru",241],["novelmultiverse.com",241],["fritidsmarkedet.dk",242],["maskinbladet.dk",242],["15min.lt",243],["baddiehub.com",244],["mr9soft.com",245],["21porno.com",246],["adult-sex-gamess.com",247],["hentaigames.app",247],["mobilesexgamesx.com",247],["mysexgamer.com",247],["porngameshd.com",247],["sexgamescc.com",247],["xnxx-sex-videos.com",247],["f2movies.to",248],["freeporncave.com",249],["tubsxxx.com",250],["subtitle.one",251],["manga18fx.com",252],["freebnbcoin.com",252],["sextvx.com",253],["studydhaba.com",254],["freecourse.tech",254],["victor-mochere.com",254],["papunika.com",254],["mobilanyheter.net",254],["prajwaldesai.com",[254,274]],["ftuapps.dev",254],["muztext.com",255],["pornohans.com",256],["nursexfilme.com",256],["pornohirsch.net",256],["xhamster-sexvideos.com",256],["pornoschlange.com",256],["hdpornos.net",256],["gutesexfilme.com",256],["short1.site",256],["zona-leros.com",256],["charbelnemnom.com",257],["simplebits.io",258],["online-fix.me",259],["gamersdiscussionhub.com",260],["owlzo.com",261],["q1003.com",262],["blogpascher.com",263],["testserver.pro",264],["lifestyle.bg",264],["money.bg",264],["news.bg",264],["topsport.bg",264],["webcafe.bg",264],["schoolcheats.net",265],["mgnet.xyz",266],["advertiserandtimes.co.uk",267],["xvideos2020.me",268],["111.90.159.132",269],["techsolveprac.com",270],["joomlabeginner.com",271],["largescaleforums.com",272],["dubznetwork.com",273],["hentaidexy.com",275],["traderepublic.community",276],["babia.to",277],["code2care.org",278],["xxxxsx.com",280],["ngontinh24.com",281],["idevicecentral.com",282],["zona11.com",283],["scsport.live",283],["blog.esuteru.com",284],["blog.livedoor.jp",284],["carscoops.com",284],["dziennik.pl",284],["eurointegration.com.ua",284],["flatpanelshd.com",284],["fourfourtwo.co.kr",284],["hoyme.jp",284],["issuya.com",284],["itainews.com",284],["iusm.co.kr",284],["logicieleducatif.fr",284],["mydaily.co.kr",284],["onlinegdb.com",284],["picrew.me",284],["pravda.com.ua",284],["reportera.co.kr",284],["sportsrec.com",284],["sportsseoul.com",284],["taxguru.in",284],["text-compare.com",284],["thestar.co.uk",284],["tweaksforgeeks.com",284],["videogamemods.com",284],["wfmz.com",284],["worldhistory.org",284],["yorkshirepost.co.uk",284],["etnews.com",284],["wort-suchen.de",284],["word-grabber.com",284],["palabr.as",284],["motscroises.fr",284],["cruciverba.it",284],["oradesibiu.ro",284],["w.grapps.me",284],["gazetaprawna.pl",284],["pressian.com",284],["indiatimes.com",284],["missyusa.com",284],["aikatu.jp",284],["adintrend.tv",284],["ark-unity.com",284],["cool-style.com.tw",284],["doanhnghiepvn.vn",284],["thesaurus.net",285],["automobile-catalog.com",285],["motorbikecatalog.com",285],["maketecheasier.com",285],["mlbpark.donga.com",286],["jjang0u.com",287],["mangacrab.com",289],["viefaucet.com",290],["cloud-computing-central.com",291],["afk.guide",292],["businessnamegenerator.com",293],["derstandard.at",294],["derstandard.de",294],["rocketnews24.com",295],["soranews24.com",295],["youpouch.com",295],["gourmetscans.net",296],["ilsole24ore.com",297],["ipacrack.com",298],["hentaiporn.one",299],["infokik.com",300],["daemonanime.net",301],["fosslinux.com",302],["shrdsk.me",303],["examword.com",304],["sempreupdate.com.br",304],["tribuna.com",305],["trendsderzukunft.de",306],["gal-dem.com",306],["lostineu.eu",306],["oggitreviso.it",306],["speisekarte.de",306],["mixed.de",306],["lightnovelspot.com",[307,308]],["lightnovelworld.com",[307,308]],["novelpub.com",[307,308]],["webnovelpub.com",[307,308]],["mail.yahoo.com",309],["hwzone.co.il",310],["nammakalvi.com",311],["javmoon.me",312],["c2g.at",313],["terafly.me",313],["elamigos-games.com",313],["elamigos-games.net",313],["dktechnicalmate.com",314],["recipahi.com",314],["converter-btc.world",314],["kaystls.site",315],["aquarius-horoscopes.com",316],["cancer-horoscopes.com",316],["dubipc.blogspot.com",316],["echoes.gr",316],["engel-horoskop.de",316],["freegames44.com",316],["fuerzasarmadas.eu",316],["gemini-horoscopes.com",316],["jurukunci.net",316],["krebs-horoskop.com",316],["leo-horoscopes.com",316],["maliekrani.com",316],["nklinks.click",316],["ourenseando.es",316],["pisces-horoscopes.com",316],["radio-en-direct.fr",316],["sagittarius-horoscopes.com",316],["scorpio-horoscopes.com",316],["singlehoroskop-loewe.de",316],["skat-karten.de",316],["skorpion-horoskop.com",316],["taurus-horoscopes.com",316],["the1security.com",316],["torrentmovies.online",316],["virgo-horoscopes.com",316],["zonamarela.blogspot.com",316],["yoima.hatenadiary.com",316],["vpntester.org",317],["watchhentai.net",318],["japscan.lol",319],["digitask.ru",320],["tempumail.com",321],["sexvideos.host",322],["10alert.com",324],["cryptstream.de",325],["nydus.org",325],["techhelpbd.com",326],["fapdrop.com",327],["cellmapper.net",328],["hdrez.com",329],["youwatch-serie.com",329],["printablecreative.com",330],["comohoy.com",331],["leak.sx",331],["paste.bin.sx",331],["pornleaks.in",331],["merlininkazani.com",331],["j91.asia",333],["rekidai-info.github.io",334],["jeniusplay.com",335],["indianyug.com",336],["rgb.vn",336],["needrom.com",337],["criptologico.com",338],["megadrive-emulator.com",339],["eromanga-show.com",340],["hentai-one.com",340],["hentaipaw.com",340],["10minuteemails.com",341],["luxusmail.org",341],["w3cub.com",342],["bangpremier.com",343],["nyaa.iss.ink",344],["tnp98.xyz",346],["freepdfcomic.com",347],["techedubyte.com",348],["memedroid.com",349],["animesync.org",350],["karaoketexty.cz",351],["filmizlehdfilm.com",352],["fullfilmizle.cc",352],["gofilmizle.net",352],["mjakmama24.pl",354],["lastampa.it",355],["wiki.yjsnpi.nu",356]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",1],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",5],["eztv",5],["sushi-scan",7],["spigotunlocked",7],["ahmedmode",7],["kissasian",10],["rp5",11],["mma-core",12],["yts",16],["720pstream",16],["1stream",16],["thefmovies",17],["urlcero",23],["totaldebrid",26],["sandrives",26],["fxporn69",35],["aliancapes",35],["pouvideo",37],["povvideo",37],["povw1deo",37],["povwideo",37],["powv1deo",37],["powvibeo",37],["powvideo",37],["powvldeo",37],["tubsexer",43],["porno-tour",43],["lenkino",43],["pornomoll",43],["camsclips",43],["m4ufree",47],["writedroid",58],["telerium",62],["pandafreegames",76],["thoptv",84],["shortzzy",93],["streameast",105],["thestreameast",105],["daddylivehd",105],["solvetube",108],["pornhub",109],["wcofun",116],["bollyholic",120],["gotxx",135],["turkanime",136],["voe-unblock",136],["khatrimaza",149],["pogolinks",149],["popcornstream",151],["brainly",162],["oploverz",163],["moflix-stream",[191,194]],["vembed",191],["xhamsterdeutsch",256],["privatemoviez",260],["gmx",279],["lightnovelpub",[307,308]],["camcaps",323],["drivebot",345],["thenextplanet1",346],["filmizletv",352],["autoscout24",353]]);

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
