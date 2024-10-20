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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["offset"],["contrformpub"],["trigger","0"],["popup"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["Ads"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["sandbox"],["afterOpen"],["getComputedStyle(testAd)"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["_0x","1000"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["/adblock|googletag|==|\\.length/"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"],["googleFC"],["replaceChildren"],["hasAdblock"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,8,9]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,119]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,144]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,283]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,279]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["freethesaurus.com",7],["thefreedictionary.com",7],["hdbox.ws",9],["todopolicia.com",9],["scat.gold",9],["freecoursesite.com",9],["windowcleaningforums.co.uk",9],["cruisingearth.com",9],["hobby-machinist.com",9],["freegogpcgames.com",9],["starleaks.org",9],["latitude.to",9],["kitchennovel.com",9],["w3layouts.com",9],["blog.receivefreesms.co.uk",9],["eductin.com",9],["dealsfinders.blog",9],["audiobooks4soul.com",9],["tinhocdongthap.com",9],["sakarnewz.com",9],["downloadr.in",9],["topcomicporno.com",9],["dongknows.com",9],["traderepublic.community",9],["celtadigital.com",9],["iptvrun.com",9],["adsup.lk",9],["cryptomonitor.in",9],["areatopik.com",9],["cardscanner.co",9],["nullforums.net",9],["courseclub.me",9],["tamarindoyam.com",9],["jeep-cj.com",9],["choiceofmods.com",9],["myqqjd.com",9],["ssdtop.com",9],["apkhex.com",9],["gezegenforum.com",9],["mbc2.live",9],["iptvapps.net",9],["null-scripts.net",9],["nullscripts.net",9],["bloground.ro",9],["witcherhour.com",9],["ottverse.com",9],["torrentmac.net",9],["mazakony.com",9],["laptechinfo.com",9],["mc-at.org",9],["playstationhaber.com",9],["mangapt.com",9],["seriesperu.com",9],["pesprofessionals.com",9],["wpsimplehacks.com",9],["sportshub.to",[9,278]],["topsporter.net",[9,278]],["darkwanderer.net",9],["truckingboards.com",9],["coldfrm.org",9],["azrom.net",9],["freepatternsarea.com",9],["alttyab.net",9],["hq-links.com",9],["mobilkulup.com",9],["esopress.com",9],["nesiaku.my.id",9],["jipinsoft.com",9],["surfsees.com",9],["truthnews.de",9],["farsinama.com",9],["worldofiptv.com",9],["vuinsider.com",9],["crazydl.net",9],["gamemodsbase.com",9],["babiato.tech",9],["secuhex.com",9],["turkishaudiocenter.com",9],["galaxyos.net",9],["blackhatworld.com",9],["bizdustry.com",9],["storefront.com.ng",9],["pkbiosfix.com",9],["casi3.xyz",9],["mediafire.com",10],["wcoanimedub.tv",11],["wcoforever.net",11],["openspeedtest.com",11],["addtobucketlist.com",11],["3dzip.org",[11,75]],["ilmeteo.it",11],["wcoforever.com",11],["comprovendolibri.it",11],["healthelia.com",11],["keephealth.info",12],["afreesms.com",13],["kinoger.re",13],["laksa19.github.io",13],["javcl.com",13],["tvlogy.to",13],["live.dragaoconnect.net",13],["beststremo.com",13],["seznam.cz",13],["seznamzpravy.cz",13],["xerifetech.com",13],["freemcserver.net",13],["wallpapershome.com",15],["anghami.com",16],["wired.com",17],["tutele.sx",18],["footyhunter3.xyz",18],["katestube.com",19],["short.pe",19],["footystreams.net",19],["seattletimes.com",20],["bestgames.com",21],["yiv.com",21],["globalrph.com",22],["e-glossa.it",23],["webcheats.com.br",24],["gala.fr",26],["gentside.com",26],["geo.fr",26],["hbrfrance.fr",26],["nationalgeographic.fr",26],["ohmymag.com",26],["serengo.net",26],["vsd.fr",26],["updato.com",[27,44]],["methbox.com",28],["daizurin.com",28],["pendekarsubs.us",28],["dreamfancy.org",28],["rysafe.blogspot.com",28],["techacode.com",28],["toppng.com",28],["th-world.com",28],["avjamack.com",28],["avjamak.net",28],["dlhd.sx",29],["embedstream.me",29],["yts-subs.net",29],["cnnamador.com",30],["nudecelebforum.com",31],["pronpic.org",32],["thewebflash.com",33],["discordfastfood.com",33],["xup.in",33],["popularmechanics.com",34],["op.gg",35],["lequipe.fr",36],["comunidadgzone.es",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["plex-guide.de",37],["healthtune.site",37],["gewinde-normen.de",37],["tucinehd.com",37],["jellynote.com",38],["eporner.com",40],["pornbimbo.com",41],["4j.com",41],["avoiderrors.com",42],["cgtips.org",[42,224]],["sitarchive.com",42],["livenewsof.com",42],["topnewsshow.com",42],["gatcha.org",42],["empregoestagios.com",42],["everydayonsales.com",42],["kusonime.com",42],["aagmaal.xyz",42],["suicidepics.com",42],["codesnail.com",42],["codingshiksha.com",42],["graphicux.com",42],["asyadrama.com",42],["bitcoinegypt.news",42],["citychilli.com",42],["talkjarvis.com",42],["hdmotori.it",43],["femdomtb.com",45],["camhub.cc",45],["bobs-tube.com",45],["pornfd.com",45],["popno-tour.net",45],["molll.mobi",45],["watchmdh.to",45],["camwhores.tv",45],["elfqrin.com",46],["satcesc.com",47],["apfelpatient.de",47],["lusthero.com",48],["m2list.com",49],["embed.nana2play.com",49],["elahmad.com",49],["dofusports.xyz",49],["dallasnews.com",50],["lnk.news",51],["lnk.parts",51],["efukt.com",52],["wendycode.com",52],["springfieldspringfield.co.uk",53],["porndoe.com",54],["smsget.net",[55,56]],["kjanime.net",57],["gioialive.it",58],["classicreload.com",59],["scriptzhub.com",59],["hotpornfile.org",60],["coolsoft.altervista.org",60],["hackedonlinegames.com",60],["jkoding.xyz",60],["dailytech-news.eu",60],["settlersonlinemaps.com",60],["magdownload.org",60],["kpkuang.org",60],["shareus.site",60],["crypto4yu.com",60],["faucetwork.space",60],["thenightwithoutthedawn.blogspot.com",60],["entutes.com",60],["claimlite.club",60],["bazadecrypto.com",[60,327]],["chicoer.com",61],["bostonherald.com",61],["dailycamera.com",61],["maxcheaters.com",62],["rbxoffers.com",62],["mhn.quest",62],["leagueofgraphs.com",62],["hieunguyenphoto.com",62],["benzinpreis.de",62],["postimees.ee",62],["police.community",62],["gisarea.com",62],["schaken-mods.com",62],["tvnet.lv",62],["theclashify.com",62],["txori.com",62],["olarila.com",62],["deletedspeedstreams.blogspot.com",62],["schooltravelorganiser.com",62],["xhardhempus.net",62],["sportsplays.com",63],["pornvideotop.com",65],["xstory-fr.com",65],["krotkoosporcie.pl",65],["deinesexfilme.com",66],["einfachtitten.com",66],["halloporno.com",66],["herzporno.com",66],["lesbenhd.com",66],["milffabrik.com",[66,253]],["porn-monkey.com",66],["porndrake.com",66],["pornhubdeutsch.net",66],["pornoaffe.com",66],["pornodavid.com",66],["pornoente.tv",[66,253]],["pornofisch.com",66],["pornofelix.com",66],["pornohammer.com",66],["pornohelm.com",66],["pornoklinge.com",66],["pornotom.com",[66,253]],["pornotommy.com",66],["pornovideos-hd.com",66],["pornozebra.com",[66,253]],["xhamsterdeutsch.xyz",66],["xnxx-sexfilme.com",66],["zerion.cc",66],["letribunaldunet.fr",67],["vladan.fr",67],["live-tv-channels.org",68],["eslfast.com",69],["freegamescasual.com",70],["tcpvpn.com",71],["oko.sh",71],["timesnownews.com",71],["timesnowhindi.com",71],["timesnowmarathi.com",71],["zoomtventertainment.com",71],["tsubasa.im",72],["sholah.net",73],["2rdroid.com",73],["bisceglielive.it",74],["pandajogosgratis.com.br",76],["5278.cc",77],["tonspion.de",79],["duplichecker.com",80],["plagiarismchecker.co",80],["plagiarismdetector.net",80],["searchenginereports.net",80],["giallozafferano.it",81],["autojournal.fr",81],["autoplus.fr",81],["sportauto.fr",81],["linkspaid.com",82],["proxydocker.com",82],["beeimg.com",[83,84]],["emturbovid.com",84],["findjav.com",84],["javggvideo.xyz",84],["mmtv01.xyz",84],["stbturbo.xyz",84],["streamsilk.com",84],["ftlauderdalebeachcam.com",85],["ftlauderdalewebcam.com",85],["juneauharborwebcam.com",85],["keywestharborwebcam.com",85],["kittycatcam.com",85],["mahobeachcam.com",85],["miamiairportcam.com",85],["morganhillwebcam.com",85],["njwildlifecam.com",85],["nyharborwebcam.com",85],["paradiseislandcam.com",85],["pompanobeachcam.com",85],["portbermudawebcam.com",85],["portcanaveralwebcam.com",85],["portevergladeswebcam.com",85],["portmiamiwebcam.com",85],["portnywebcam.com",85],["portnassauwebcam.com",85],["portstmaartenwebcam.com",85],["portstthomaswebcam.com",85],["porttampawebcam.com",85],["sxmislandcam.com",85],["themes-dl.com",85],["badassdownloader.com",85],["badasshardcore.com",85],["badassoftcore.com",85],["nulljungle.com",85],["teevee.asia",85],["otakukan.com",85],["gearingcommander.com",87],["generate.plus",88],["calculate.plus",88],["avcesar.com",89],["audiotag.info",90],["tudigitale.it",91],["ibcomputing.com",92],["legia.net",93],["acapellas4u.co.uk",94],["robloxscripts.com",95],["libreriamo.it",95],["postazap.com",95],["medebooks.xyz",95],["tutorials-technology.info",95],["mashtips.com",95],["marriedgames.com.br",95],["4allprograms.me",95],["nurgsm.com",95],["certbyte.com",95],["plugincrack.com",95],["gamingdeputy.com",95],["freewebcart.com",95],["streamhentaimovies.com",96],["konten.co.id",97],["diariodenavarra.es",98],["tubereader.me",98],["scripai.com",98],["myfxbook.com",98],["whatfontis.com",98],["xiaomifans.pl",99],["eletronicabr.com",99],["optifine.net",100],["luzernerzeitung.ch",101],["tagblatt.ch",101],["spellcheck.net",102],["spellchecker.net",102],["spellweb.com",102],["ableitungsrechner.net",103],["alternet.org",104],["gourmetsupremacy.com",104],["shrib.com",105],["pandafiles.com",106],["vidia.tv",[106,125]],["hortonanderfarom.blogspot.com",106],["clarifystraight.com",106],["tutelehd3.xyz",107],["mega4upload.com",107],["coolcast2.com",107],["techclips.net",107],["earthquakecensus.com",107],["footyhunter.lol",107],["gamerarcades.com",107],["poscitech.click",107],["starlive.stream",107],["utopianwilderness.com",107],["wecast.to",107],["sportbar.live",107],["lordchannel.com",107],["tunovelaligera.com",108],["tapchipi.com",108],["cuitandokter.com",108],["tech-blogs.com",108],["cardiagn.com",108],["dcleakers.com",108],["esgeeks.com",108],["pugliain.net",108],["uplod.net",108],["worldfreeware.com",108],["fikiri.net",108],["myhackingworld.com",108],["phoenixfansub.com",108],["freecourseweb.com",109],["devcourseweb.com",109],["coursewikia.com",109],["courseboat.com",109],["coursehulu.com",109],["lne.es",112],["pornult.com",113],["webcamsdolls.com",113],["bitcotasks.com",[113,159]],["adsy.pw",113],["playstore.pw",113],["exactpay.online",113],["thothd.to",113],["proplanta.de",114],["hydrogenassociation.org",115],["ludigames.com",115],["sportitalialive.com",115],["made-by.org",115],["xenvn.com",115],["worldtravelling.com",115],["igirls.in",115],["technichero.com",115],["roshiyatech.my.id",115],["24sport.stream",115],["androidadult.com",115],["aeroxplorer.com",115],["mad4wheels.com",116],["logi.im",116],["emailnator.com",116],["textograto.com",117],["voyageforum.com",118],["hmc-id.blogspot.com",118],["ilforumdeibrutti.is",118],["myabandonware.com",118],["chatta.it",120],["ketubanjiwa.com",121],["nsfw247.to",122],["funzen.net",122],["fighter.stream",122],["ilclubdellericette.it",122],["hubstream.in",122],["extremereportbot.com",123],["getintopc.com",124],["qoshe.com",126],["lowellsun.com",127],["mamadu.pl",127],["dobrapogoda24.pl",127],["motohigh.pl",127],["namasce.pl",127],["ultimate-catch.eu",128],["cpopchanelofficial.com",129],["creditcardgenerator.com",130],["creditcardrush.com",130],["bostoncommons.net",130],["thejobsmovie.com",130],["livsavr.co",130],["hl-live.de",131],["wohnmobilforum.de",131],["nulledbear.com",131],["sinnerclownceviri.net",131],["satoshi-win.xyz",131],["encurtandourl.com",[131,137]],["freedeepweb.blogspot.com",131],["freesoft.id",131],["zcteam.id",131],["www-daftarharga.blogspot.com",131],["ear-phone-review.com",131],["telefullenvivo.com",131],["listatv.pl",131],["daemon-hentai.com",[131,295]],["ltc-faucet.xyz",131],["coin-profits.xyz",131],["relampagomovies.com",131],["nilopolisonline.com.br",132],["mesquitaonline.com",132],["yellowbridge.com",132],["socialgirls.im",133],["yaoiotaku.com",134],["camhub.world",135],["moneyhouse.ch",136],["ihow.info",137],["hartico.tv",137],["filesus.com",137],["sturls.com",137],["re.two.re",137],["turbo1.co",137],["cartoonsarea.xyz",137],["valeronevijao.com",138],["cigarlessarefy.com",138],["figeterpiazine.com",138],["yodelswartlike.com",138],["generatesnitrosate.com",138],["crownmakermacaronicism.com",138],["chromotypic.com",138],["gamoneinterrupted.com",138],["metagnathtuggers.com",138],["wolfdyslectic.com",138],["rationalityaloelike.com",138],["sizyreelingly.com",138],["simpulumlamerop.com",138],["urochsunloath.com",138],["monorhinouscassaba.com",138],["counterclockwisejacky.com",138],["35volitantplimsoles5.com",138],["scatch176duplicities.com",138],["antecoxalbobbing1010.com",138],["boonlessbestselling244.com",138],["cyamidpulverulence530.com",138],["guidon40hyporadius9.com",138],["449unceremoniousnasoseptal.com",138],["19turanosephantasia.com",138],["30sensualizeexpression.com",138],["321naturelikefurfuroid.com",138],["745mingiestblissfully.com",138],["availedsmallest.com",138],["greaseball6eventual20.com",138],["toxitabellaeatrebates306.com",138],["20demidistance9elongations.com",138],["audaciousdefaulthouse.com",138],["fittingcentermondaysunday.com",138],["fraudclatterflyingcar.com",138],["launchreliantcleaverriver.com",138],["matriculant401merited.com",138],["realfinanceblogcenter.com",138],["reputationsheriffkennethsand.com",138],["telyn610zoanthropy.com",138],["tubelessceliolymph.com",138],["tummulerviolableness.com",138],["un-block-voe.net",138],["v-o-e-unblock.com",138],["voe-un-block.com",138],["voeun-block.net",138],["voeunbl0ck.com",138],["voeunblck.com",138],["voeunblk.com",138],["voeunblock.com",138],["voeunblock1.com",138],["voeunblock2.com",138],["voeunblock3.com",138],["agefi.fr",139],["cariskuy.com",140],["letras2.com",140],["yusepjaelani.blogspot.com",141],["letras.mus.br",142],["mtlurb.com",143],["port.hu",144],["acdriftingpro.com",144],["flight-report.com",144],["forumdz.com",144],["abandonmail.com",144],["flmods.com",144],["zilinak.sk",144],["projectfreetv.stream",144],["hotdesimms.com",144],["pdfaid.com",144],["dzeko11.net",[144,278]],["bootdey.com",144],["mail.com",144],["expresskaszubski.pl",144],["moegirl.org.cn",144],["onemanhua.com",145],["t3n.de",146],["allindiaroundup.com",147],["vectorizer.io",148],["smgplaza.com",148],["onehack.us",148],["thapcam.net",148],["thefastlaneforum.com",149],["trade2win.com",150],["modagamers.com",151],["freemagazines.top",151],["straatosphere.com",151],["rule34porn.net",151],["nullpk.com",151],["adslink.pw",151],["downloadudemy.com",151],["picgiraffe.com",151],["weadown.com",151],["freepornsex.net",151],["nurparatodos.com.ar",151],["librospreuniversitariospdf.blogspot.com",152],["msdos-games.com",152],["blocklayer.com",152],["forexeen.us",152],["khsm.io",152],["webcreator-journal.com",152],["nu6i-bg-net.com",152],["routech.ro",153],["hokej.net",153],["turkmmo.com",154],["palermotoday.it",155],["baritoday.it",155],["trentotoday.it",155],["agrigentonotizie.it",155],["anconatoday.it",155],["arezzonotizie.it",155],["avellinotoday.it",155],["bresciatoday.it",155],["brindisireport.it",155],["casertanews.it",155],["cataniatoday.it",155],["cesenatoday.it",155],["chietitoday.it",155],["forlitoday.it",155],["frosinonetoday.it",155],["genovatoday.it",155],["ilpescara.it",155],["ilpiacenza.it",155],["latinatoday.it",155],["lecceprima.it",155],["leccotoday.it",155],["livornotoday.it",155],["messinatoday.it",155],["milanotoday.it",155],["modenatoday.it",155],["monzatoday.it",155],["novaratoday.it",155],["padovaoggi.it",155],["parmatoday.it",155],["perugiatoday.it",155],["pisatoday.it",155],["quicomo.it",155],["ravennatoday.it",155],["reggiotoday.it",155],["riminitoday.it",155],["romatoday.it",155],["salernotoday.it",155],["sondriotoday.it",155],["sportpiacenza.it",155],["ternitoday.it",155],["today.it",155],["torinotoday.it",155],["trevisotoday.it",155],["triesteprima.it",155],["udinetoday.it",155],["veneziatoday.it",155],["vicenzatoday.it",155],["thumpertalk.com",156],["arkcod.org",156],["facciabuco.com",157],["softx64.com",158],["thelayoff.com",159],["manwan.xyz",159],["blog.coinsrise.net",159],["blog.cryptowidgets.net",159],["blog.insurancegold.in",159],["blog.wiki-topia.com",159],["blog.coinsvalue.net",159],["blog.cookinguide.net",159],["blog.freeoseocheck.com",159],["blog.makeupguide.net",159],["blog.carstopia.net",159],["blog.carsmania.net",159],["shorterall.com",159],["blog24.me",159],["maxstream.video",159],["maxlinks.online",159],["tvepg.eu",159],["dailymaverick.co.za",160],["apps2app.com",161],["cheatermad.com",162],["ville-ideale.fr",163],["eodev.com",164],["tickzoo.tv",165],["fm-arena.com",166],["tradersunion.com",167],["tandess.com",168],["faqwiki.us",169],["sonixgvn.net",169],["spontacts.com",170],["dankmemer.lol",171],["getexploits.com",172],["fplstatistics.com",173],["raenonx.cc",[174,279]],["deezer.com",174],["breitbart.com",175],["salidzini.lv",176],["choosingnothing.com",177],["cryptorank.io",[178,179]],["th.gl",180],["4kwebplay.xyz",181],["qqwebplay.xyz",181],["viwlivehdplay.ru",181],["molbiotools.com",182],["vods.tv",183],["18xxx.xyz",184],["raidrush.net",185],["xnxxcom.xyz",186],["videzz.net",187],["spambox.xyz",188],["melaniezettofrais.online",189],["giga-uqload.xyz",190],["gaystream.online",190],["bembed.net",190],["elbailedeltroleo.site",190],["embedv.net",190],["fslinks.org",190],["listeamed.net",190],["v6embed.xyz",190],["vgplayer.xyz",190],["vid-guard.com",190],["vidguard.online",190],["en-thunderscans.com",191],["starkroboticsfrc.com",192],["sinonimos.de",192],["antonimos.de",192],["quesignifi.ca",192],["tiktokrealtime.com",192],["tiktokcounter.net",192],["tpayr.xyz",192],["poqzn.xyz",192],["ashrfd.xyz",192],["rezsx.xyz",192],["tryzt.xyz",192],["ashrff.xyz",192],["rezst.xyz",192],["dawenet.com",192],["erzar.xyz",192],["waezm.xyz",192],["waezg.xyz",192],["blackwoodacademy.org",192],["cryptednews.space",192],["vivuq.com",192],["swgop.com",192],["vbnmll.com",192],["telcoinfo.online",192],["dshytb.com",192],["enit.in",193],["financerites.com",193],["fadedfeet.com",194],["homeculina.com",194],["ineedskin.com",194],["kenzo-flowertag.com",194],["lawyex.co",194],["mdn.lol",194],["bitzite.com",195],["coingraph.us",196],["impact24.us",196],["apkmodvn.com",197],["mod1s.com",197],["apkmoddone.com",198],["dl.apkmoddone.com",199],["phongroblox.com",199],["my-code4you.blogspot.com",200],["vrcmods.com",201],["osuskinner.com",201],["osuskins.net",201],["pentruea.com",[202,203]],["mchacks.net",204],["why-tech.it",205],["compsmag.com",206],["tapetus.pl",207],["autoroad.cz",208],["brawlhalla.fr",208],["tecnobillo.com",208],["sexcamfreeporn.com",209],["breatheheavy.com",210],["wenxuecity.com",211],["key-hub.eu",212],["fabioambrosi.it",213],["tattle.life",214],["emuenzen.de",214],["terrylove.com",214],["mynet.com",[215,279]],["cidade.iol.pt",216],["fantacalcio.it",217],["hentaifreak.org",218],["hypebeast.com",219],["krankheiten-simulieren.de",220],["catholic.com",221],["ad-doge.com",222],["3dmodelshare.org",223],["gourmetscans.net",224],["techinferno.com",225],["ibeconomist.com",226],["bookriot.com",227],["purposegames.com",228],["globo.com",229],["latimes.com",229],["claimrbx.gg",230],["perelki.net",231],["vpn-anbieter-vergleich-test.de",232],["livingincebuforums.com",233],["paperzonevn.com",234],["alltechnerd.com",235],["malaysianwireless.com",236],["erinsakura.com",237],["infofuge.com",237],["freejav.guru",237],["novelmultiverse.com",237],["fritidsmarkedet.dk",238],["maskinbladet.dk",238],["15min.lt",239],["baddiehub.com",240],["mr9soft.com",241],["21porno.com",242],["adult-sex-gamess.com",243],["hentaigames.app",243],["mobilesexgamesx.com",243],["mysexgamer.com",243],["porngameshd.com",243],["sexgamescc.com",243],["xnxx-sex-videos.com",243],["f2movies.to",244],["freeporncave.com",245],["tubsxxx.com",246],["pornojenny.com",247],["subtitle.one",248],["manga18fx.com",249],["freebnbcoin.com",249],["sextvx.com",250],["studydhaba.com",251],["freecourse.tech",251],["victor-mochere.com",251],["papunika.com",251],["mobilanyheter.net",251],["prajwaldesai.com",[251,270]],["ftuapps.dev",251],["muztext.com",252],["pornohans.com",253],["nursexfilme.com",253],["pornohirsch.net",253],["xhamster-sexvideos.com",253],["pornoschlange.com",253],["hdpornos.net",253],["gutesexfilme.com",253],["short1.site",253],["zona-leros.com",253],["charbelnemnom.com",254],["simplebits.io",255],["online-fix.me",256],["gamersdiscussionhub.com",257],["owlzo.com",258],["q1003.com",259],["blogpascher.com",260],["testserver.pro",261],["lifestyle.bg",261],["money.bg",261],["news.bg",261],["topsport.bg",261],["webcafe.bg",261],["mgnet.xyz",262],["advertiserandtimes.co.uk",263],["xvideos2020.me",264],["111.90.159.132",265],["techsolveprac.com",266],["joomlabeginner.com",267],["largescaleforums.com",268],["dubznetwork.com",269],["hentaidexy.com",271],["babia.to",272],["code2care.org",273],["xxxxsx.com",275],["ngontinh24.com",276],["idevicecentral.com",277],["zona11.com",278],["scsport.live",278],["blog.esuteru.com",279],["blog.livedoor.jp",279],["carscoops.com",279],["dziennik.pl",279],["eurointegration.com.ua",279],["flatpanelshd.com",279],["fourfourtwo.co.kr",279],["issuya.com",279],["itainews.com",279],["iusm.co.kr",279],["logicieleducatif.fr",279],["mydaily.co.kr",279],["onlinegdb.com",279],["picrew.me",279],["pravda.com.ua",279],["reportera.co.kr",279],["sportsrec.com",279],["sportsseoul.com",279],["taxguru.in",279],["text-compare.com",279],["thestar.co.uk",279],["tweaksforgeeks.com",279],["videogamemods.com",279],["wfmz.com",279],["worldhistory.org",279],["yorkshirepost.co.uk",279],["etnews.com",279],["wort-suchen.de",279],["word-grabber.com",279],["palabr.as",279],["motscroises.fr",279],["cruciverba.it",279],["oradesibiu.ro",279],["w.grapps.me",279],["gazetaprawna.pl",279],["pressian.com",279],["indiatimes.com",279],["missyusa.com",279],["aikatu.jp",279],["adintrend.tv",279],["ark-unity.com",279],["cool-style.com.tw",279],["doanhnghiepvn.vn",279],["thesaurus.net",280],["automobile-catalog.com",280],["motorbikecatalog.com",280],["maketecheasier.com",280],["mlbpark.donga.com",281],["jjang0u.com",282],["mangacrab.com",284],["viefaucet.com",285],["cloud-computing-central.com",286],["afk.guide",287],["businessnamegenerator.com",288],["derstandard.at",289],["derstandard.de",289],["rocketnews24.com",290],["soranews24.com",290],["youpouch.com",290],["ilsole24ore.com",291],["ipacrack.com",292],["hentaiporn.one",293],["infokik.com",294],["daemonanime.net",295],["fosslinux.com",296],["shrdsk.me",297],["examword.com",298],["sempreupdate.com.br",298],["tribuna.com",299],["trendsderzukunft.de",300],["gal-dem.com",300],["lostineu.eu",300],["oggitreviso.it",300],["speisekarte.de",300],["mixed.de",300],["lightnovelspot.com",[301,302]],["lightnovelworld.com",[301,302]],["novelpub.com",[301,302]],["webnovelpub.com",[301,302]],["mail.yahoo.com",303],["hwzone.co.il",304],["nammakalvi.com",305],["javmoon.me",306],["c2g.at",307],["terafly.me",307],["elamigos-games.com",307],["elamigos-games.net",307],["dktechnicalmate.com",308],["recipahi.com",308],["converter-btc.world",308],["kaystls.site",309],["aquarius-horoscopes.com",310],["cancer-horoscopes.com",310],["dubipc.blogspot.com",310],["echoes.gr",310],["engel-horoskop.de",310],["freegames44.com",310],["fuerzasarmadas.eu",310],["gemini-horoscopes.com",310],["jurukunci.net",310],["krebs-horoskop.com",310],["leo-horoscopes.com",310],["maliekrani.com",310],["nklinks.click",310],["ourenseando.es",310],["pisces-horoscopes.com",310],["radio-en-direct.fr",310],["sagittarius-horoscopes.com",310],["scorpio-horoscopes.com",310],["singlehoroskop-loewe.de",310],["skat-karten.de",310],["skorpion-horoskop.com",310],["taurus-horoscopes.com",310],["the1security.com",310],["torrentmovies.online",310],["virgo-horoscopes.com",310],["zonamarela.blogspot.com",310],["yoima.hatenadiary.com",310],["vpntester.org",311],["watchhentai.net",312],["japscan.lol",[313,351]],["digitask.ru",314],["tempumail.com",315],["sexvideos.host",316],["10alert.com",318],["cryptstream.de",319],["nydus.org",319],["techhelpbd.com",320],["fapdrop.com",321],["cellmapper.net",322],["hdrez.com",323],["youwatch-serie.com",323],["newscon.org",324],["printablecreative.com",325],["comohoy.com",326],["leak.sx",326],["paste.bin.sx",326],["pornleaks.in",326],["merlininkazani.com",326],["j91.asia",328],["jeniusplay.com",329],["indianyug.com",330],["rgb.vn",330],["needrom.com",331],["criptologico.com",332],["megadrive-emulator.com",333],["eromanga-show.com",334],["hentai-one.com",334],["hentaipaw.com",334],["10minuteemails.com",335],["luxusmail.org",335],["w3cub.com",336],["bangpremier.com",337],["nyaa.iss.ink",338],["tnp98.xyz",340],["freepdfcomic.com",341],["memedroid.com",342],["animesync.org",343],["karaoketexty.cz",344],["filmizlehdfilm.com",345],["fullfilmizle.cc",345],["resortcams.com",346],["mjakmama24.pl",348],["security-demo.extrahop.com",349],["lastampa.it",350],["coempregos.com.br",352]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,6]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",5],["eztv",5],["sushi-scan",9],["spigotunlocked",9],["ahmedmode",9],["kissasian",12],["rp5",13],["mma-core",14],["yts",18],["720pstream",18],["1stream",18],["thefmovies",19],["urlcero",25],["totaldebrid",28],["sandrives",28],["fxporn69",37],["aliancapes",37],["pouvideo",39],["povvideo",39],["povw1deo",39],["povwideo",39],["powv1deo",39],["powvibeo",39],["powvideo",39],["powvldeo",39],["tubsexer",45],["porno-tour",45],["lenkino",45],["pornomoll",45],["camsclips",45],["m4ufree",49],["writedroid",60],["telerium",64],["pandafreegames",78],["thoptv",86],["shortzzy",95],["streameast",107],["thestreameast",107],["daddylivehd",107],["solvetube",110],["pornhub",111],["wcofun",118],["bollyholic",122],["gotxx",137],["turkanime",138],["voe-unblock",138],["khatrimaza",151],["pogolinks",151],["popcornstream",153],["brainly",164],["oploverz",165],["vembed",190],["xhamsterdeutsch",253],["privatemoviez",257],["gmx",274],["lightnovelpub",[301,302]],["camcaps",317],["drivebot",339],["thenextplanet1",340],["filmizletv",345],["autoscout24",347]]);

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
    proxyApplyFn('setTimeout', function setTimeout(context) {
        const { callArgs } = context;
        const a = callArgs[0] instanceof Function
            ? String(safe.Function_toString(callArgs[0]))
            : String(callArgs[0]);
        const b = callArgs[1];
        if ( needle === '' && delay === undefined ) {
            safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
            return context.reflect();
        }
        let defuse;
        if ( needle !== '' ) {
            defuse = reNeedle.test(a) !== needleNot;
        }
        if ( defuse !== false && delay !== undefined ) {
            defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
        }
        if ( defuse ) {
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
                this.callFn = this.callArgs = undefined;
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
                this.callFn = this.thisArg = this.callArgs = undefined;
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
