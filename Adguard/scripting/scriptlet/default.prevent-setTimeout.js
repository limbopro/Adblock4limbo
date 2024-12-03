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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["adb"],["nrWrapper"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["isDesktopApp","1000"],["Bait"],["admc"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["location.href"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["location.href","10000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/innerHTML|AdBlock/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["mdp"],["brave_load_popup"],["0x","3000"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["nextFunction"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["t()","0"],["$"],["offset"],["contrformpub"],["trigger","0"],["popup"],["/\\.append|\\.innerHTML|undefined|\\.css|blocker|flex|\\$\\('|obfuscatedMsg/"],["warn"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["current.children"],["adStatus"],["Ads"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["/\\{[a-z]\\(!0\\)\\}/"],["error"],["stackTrace"],["inner-ad"],["_ET"],[".clientHeight"],["getComputedStyle(el)"],["location.replace"],["console.clear"],["ad_block_detector"],["document.createElement"],["sandbox"],["afterOpen"],["getComputedStyle(testAd)"],["adblocker"],["affiliate"],["/^(?=.*location\\.href)(?!.*paragraph).*/s"],["document['\\x"],["documentElement.innerHTML"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["adsPost"],["1e3*"],["_0x","1000"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["blooket-answers"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["/show|innerHTML/"],["/show|document\\.createElement/"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["error-report.com"],["loader.min.js"],["content-loader.com"],["()=>","5000"],["null","10"],["","500"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],[".data?"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock|innerHTML/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],[".redirect"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["psresimler"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["googleFC"],["/function\\(\\)\\{var|getPropertyValue|fontSize|0px|\\/00/"],["hasAdblock"],["()=>l(X"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,7,8]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["mactechnews.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,118]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,143]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,288]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport1.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["teltarif.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",[1,284]],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["m.timesofindia.com",5],["timesofindia.indiatimes.com",5],["youmath.it",5],["redensarten-index.de",5],["lesoir.be",5],["electriciansforums.net",5],["keralatelecom.info",5],["betaseries.com",5],["free-sms-receive.com",5],["sms-receive-online.com",5],["universegunz.net",5],["happypenguin.altervista.org",5],["everyeye.it",5],["bluedrake42.com",5],["streamservicehd.click",5],["supermarioemulator.com",5],["futbollibrehd.com",5],["eska.pl",5],["eskarock.pl",5],["voxfm.pl",5],["mathaeser.de",5],["hdbox.ws",8],["todopolicia.com",8],["scat.gold",8],["freecoursesite.com",8],["windowcleaningforums.co.uk",8],["cruisingearth.com",8],["hobby-machinist.com",8],["freegogpcgames.com",8],["starleaks.org",8],["latitude.to",8],["kitchennovel.com",8],["w3layouts.com",8],["blog.receivefreesms.co.uk",8],["eductin.com",8],["dealsfinders.blog",8],["audiobooks4soul.com",8],["tinhocdongthap.com",8],["sakarnewz.com",8],["downloadr.in",8],["topcomicporno.com",8],["dongknows.com",8],["celtadigital.com",8],["iptvrun.com",8],["adsup.lk",8],["cryptomonitor.in",8],["areatopik.com",8],["cardscanner.co",8],["nullforums.net",8],["courseclub.me",8],["tamarindoyam.com",8],["jeep-cj.com",8],["choiceofmods.com",8],["myqqjd.com",8],["ssdtop.com",8],["apkhex.com",8],["gezegenforum.com",8],["mbc2.live",8],["iptvapps.net",8],["null-scripts.net",8],["nullscripts.net",8],["bloground.ro",8],["witcherhour.com",8],["ottverse.com",8],["torrentmac.net",8],["mazakony.com",8],["laptechinfo.com",8],["mc-at.org",8],["playstationhaber.com",8],["mangapt.com",8],["seriesperu.com",8],["pesprofessionals.com",8],["wpsimplehacks.com",8],["sportshub.to",[8,283]],["topsporter.net",[8,283]],["darkwanderer.net",8],["truckingboards.com",8],["coldfrm.org",8],["azrom.net",8],["freepatternsarea.com",8],["alttyab.net",8],["hq-links.com",8],["mobilkulup.com",8],["esopress.com",8],["nesiaku.my.id",8],["jipinsoft.com",8],["surfsees.com",8],["truthnews.de",8],["farsinama.com",8],["worldofiptv.com",8],["vuinsider.com",8],["crazydl.net",8],["gamemodsbase.com",8],["babiato.tech",8],["secuhex.com",8],["turkishaudiocenter.com",8],["galaxyos.net",8],["blackhatworld.com",8],["bizdustry.com",8],["storefront.com.ng",8],["pkbiosfix.com",8],["casi3.xyz",8],["mediafire.com",9],["wcoanimedub.tv",10],["wcoforever.net",10],["openspeedtest.com",10],["addtobucketlist.com",10],["3dzip.org",[10,74]],["ilmeteo.it",10],["wcoforever.com",10],["comprovendolibri.it",10],["healthelia.com",10],["keephealth.info",11],["afreesms.com",12],["laksa19.github.io",12],["javcl.com",12],["tvlogy.to",12],["live.dragaoconnect.net",12],["beststremo.com",12],["seznam.cz",12],["seznamzpravy.cz",12],["xerifetech.com",12],["freemcserver.net",12],["wallpapershome.com",14],["anghami.com",15],["wired.com",16],["tutele.sx",17],["footyhunter3.xyz",17],["katestube.com",18],["short.pe",18],["footystreams.net",18],["seattletimes.com",19],["bestgames.com",20],["yiv.com",20],["globalrph.com",21],["e-glossa.it",22],["webcheats.com.br",23],["gala.fr",25],["gentside.com",25],["geo.fr",25],["hbrfrance.fr",25],["nationalgeographic.fr",25],["ohmymag.com",25],["serengo.net",25],["vsd.fr",25],["updato.com",[26,43]],["methbox.com",27],["daizurin.com",27],["pendekarsubs.us",27],["dreamfancy.org",27],["rysafe.blogspot.com",27],["techacode.com",27],["toppng.com",27],["th-world.com",27],["avjamack.com",27],["avjamak.net",27],["dlhd.sx",28],["embedstream.me",28],["yts-subs.net",28],["cnnamador.com",29],["nudecelebforum.com",30],["pronpic.org",31],["thewebflash.com",32],["discordfastfood.com",32],["xup.in",32],["popularmechanics.com",33],["op.gg",34],["lequipe.fr",35],["comunidadgzone.es",36],["mp3fy.com",36],["lebensmittelpraxis.de",36],["ebookdz.com",36],["forum-pokemon-go.fr",36],["praxis-jugendarbeit.de",36],["dictionnaire-medical.net",36],["cle0desktop.blogspot.com",36],["up-load.io",36],["direct-link.net",36],["direkt-wissen.com",36],["keysbrasil.blogspot.com",36],["hotpress.info",36],["turkleech.com",36],["anibatch.me",36],["anime-i.com",36],["plex-guide.de",36],["healthtune.site",36],["gewinde-normen.de",36],["tucinehd.com",36],["jellynote.com",37],["eporner.com",39],["pornbimbo.com",40],["4j.com",40],["avoiderrors.com",41],["sitarchive.com",41],["livenewsof.com",41],["topnewsshow.com",41],["gatcha.org",41],["empregoestagios.com",41],["everydayonsales.com",41],["kusonime.com",41],["aagmaal.xyz",41],["suicidepics.com",41],["codesnail.com",41],["codingshiksha.com",41],["graphicux.com",41],["asyadrama.com",41],["bitcoinegypt.news",41],["citychilli.com",41],["talkjarvis.com",41],["hdmotori.it",42],["femdomtb.com",44],["camhub.cc",44],["bobs-tube.com",44],["pornfd.com",44],["popno-tour.net",44],["molll.mobi",44],["watchmdh.to",44],["camwhores.tv",44],["elfqrin.com",45],["satcesc.com",46],["apfelpatient.de",46],["lusthero.com",47],["m2list.com",48],["embed.nana2play.com",48],["elahmad.com",48],["dofusports.xyz",48],["dallasnews.com",49],["lnk.news",50],["lnk.parts",50],["efukt.com",51],["wendycode.com",51],["springfieldspringfield.co.uk",52],["porndoe.com",53],["smsget.net",[54,55]],["kjanime.net",56],["gioialive.it",57],["classicreload.com",58],["scriptzhub.com",58],["hotpornfile.org",59],["coolsoft.altervista.org",59],["hackedonlinegames.com",59],["jkoding.xyz",59],["dailytech-news.eu",59],["settlersonlinemaps.com",59],["ad-doge.com",59],["magdownload.org",59],["kpkuang.org",59],["shareus.site",59],["crypto4yu.com",59],["faucetwork.space",59],["thenightwithoutthedawn.blogspot.com",59],["entutes.com",59],["claimlite.club",59],["bazadecrypto.com",[59,332]],["chicoer.com",60],["bostonherald.com",60],["dailycamera.com",60],["maxcheaters.com",61],["rbxoffers.com",61],["mhn.quest",61],["leagueofgraphs.com",61],["hieunguyenphoto.com",61],["benzinpreis.de",61],["postimees.ee",61],["police.community",61],["gisarea.com",61],["schaken-mods.com",61],["tvnet.lv",61],["theclashify.com",61],["txori.com",61],["olarila.com",61],["deletedspeedstreams.blogspot.com",61],["schooltravelorganiser.com",61],["xhardhempus.net",61],["sportsplays.com",62],["pornvideotop.com",64],["xstory-fr.com",64],["krotkoosporcie.pl",64],["deinesexfilme.com",65],["einfachtitten.com",65],["halloporno.com",65],["herzporno.com",65],["lesbenhd.com",65],["milffabrik.com",[65,256]],["porn-monkey.com",65],["porndrake.com",65],["pornhubdeutsch.net",65],["pornoaffe.com",65],["pornodavid.com",65],["pornoente.tv",[65,256]],["pornofisch.com",65],["pornofelix.com",65],["pornohammer.com",65],["pornohelm.com",65],["pornoklinge.com",65],["pornotom.com",[65,256]],["pornotommy.com",65],["pornovideos-hd.com",65],["pornozebra.com",[65,256]],["xhamsterdeutsch.xyz",65],["xnxx-sexfilme.com",65],["zerion.cc",65],["letribunaldunet.fr",66],["vladan.fr",66],["live-tv-channels.org",67],["eslfast.com",68],["freegamescasual.com",69],["tcpvpn.com",70],["oko.sh",70],["timesnownews.com",70],["timesnowhindi.com",70],["timesnowmarathi.com",70],["zoomtventertainment.com",70],["tsubasa.im",71],["sholah.net",72],["2rdroid.com",72],["bisceglielive.it",73],["pandajogosgratis.com.br",75],["5278.cc",76],["tonspion.de",78],["duplichecker.com",79],["plagiarismchecker.co",79],["plagiarismdetector.net",79],["searchenginereports.net",79],["giallozafferano.it",80],["autojournal.fr",80],["autoplus.fr",80],["sportauto.fr",80],["linkspaid.com",81],["proxydocker.com",81],["beeimg.com",[82,83]],["emturbovid.com",83],["findjav.com",83],["javggvideo.xyz",83],["mmtv01.xyz",83],["stbturbo.xyz",83],["streamsilk.com",83],["ftlauderdalebeachcam.com",84],["ftlauderdalewebcam.com",84],["juneauharborwebcam.com",84],["keywestharborwebcam.com",84],["kittycatcam.com",84],["mahobeachcam.com",84],["miamiairportcam.com",84],["morganhillwebcam.com",84],["njwildlifecam.com",84],["nyharborwebcam.com",84],["paradiseislandcam.com",84],["pompanobeachcam.com",84],["portbermudawebcam.com",84],["portcanaveralwebcam.com",84],["portevergladeswebcam.com",84],["portmiamiwebcam.com",84],["portnywebcam.com",84],["portnassauwebcam.com",84],["portstmaartenwebcam.com",84],["portstthomaswebcam.com",84],["porttampawebcam.com",84],["sxmislandcam.com",84],["themes-dl.com",84],["badassdownloader.com",84],["badasshardcore.com",84],["badassoftcore.com",84],["nulljungle.com",84],["teevee.asia",84],["otakukan.com",84],["gearingcommander.com",86],["generate.plus",87],["calculate.plus",87],["avcesar.com",88],["audiotag.info",89],["tudigitale.it",90],["ibcomputing.com",91],["legia.net",92],["acapellas4u.co.uk",93],["robloxscripts.com",94],["libreriamo.it",94],["postazap.com",94],["medebooks.xyz",94],["mashtips.com",94],["marriedgames.com.br",94],["4allprograms.me",94],["nurgsm.com",94],["certbyte.com",94],["plugincrack.com",94],["gamingdeputy.com",94],["freewebcart.com",94],["streamhentaimovies.com",95],["konten.co.id",96],["diariodenavarra.es",97],["tubereader.me",97],["scripai.com",97],["myfxbook.com",97],["whatfontis.com",97],["xiaomifans.pl",98],["eletronicabr.com",98],["optifine.net",99],["luzernerzeitung.ch",100],["tagblatt.ch",100],["spellcheck.net",101],["spellchecker.net",101],["spellweb.com",101],["ableitungsrechner.net",102],["alternet.org",103],["gourmetsupremacy.com",103],["shrib.com",104],["pandafiles.com",105],["vidia.tv",[105,124]],["hortonanderfarom.blogspot.com",105],["clarifystraight.com",105],["tutelehd3.xyz",106],["mega4upload.com",106],["coolcast2.com",106],["techclips.net",106],["earthquakecensus.com",106],["footyhunter.lol",106],["gamerarcades.com",106],["poscitech.click",106],["starlive.stream",106],["utopianwilderness.com",106],["wecast.to",106],["sportbar.live",106],["tunovelaligera.com",107],["tapchipi.com",107],["cuitandokter.com",107],["tech-blogs.com",107],["cardiagn.com",107],["dcleakers.com",107],["esgeeks.com",107],["pugliain.net",107],["uplod.net",107],["worldfreeware.com",107],["fikiri.net",107],["myhackingworld.com",107],["phoenixfansub.com",107],["freecourseweb.com",108],["devcourseweb.com",108],["coursewikia.com",108],["courseboat.com",108],["coursehulu.com",108],["lne.es",111],["pornult.com",112],["webcamsdolls.com",112],["bitcotasks.com",[112,158]],["adsy.pw",112],["playstore.pw",112],["exactpay.online",112],["thothd.to",112],["proplanta.de",113],["hydrogenassociation.org",114],["ludigames.com",114],["sportitalialive.com",114],["made-by.org",114],["xenvn.com",114],["worldtravelling.com",114],["igirls.in",114],["technichero.com",114],["roshiyatech.my.id",114],["24sport.stream",114],["androidadult.com",114],["aeroxplorer.com",114],["mad4wheels.com",115],["logi.im",115],["emailnator.com",115],["textograto.com",116],["voyageforum.com",117],["hmc-id.blogspot.com",117],["ilforumdeibrutti.is",117],["myabandonware.com",117],["chatta.it",119],["ketubanjiwa.com",120],["nsfw247.to",121],["funzen.net",121],["fighter.stream",121],["ilclubdellericette.it",121],["hubstream.in",121],["extremereportbot.com",122],["getintopc.com",123],["qoshe.com",125],["lowellsun.com",126],["mamadu.pl",126],["dobrapogoda24.pl",126],["motohigh.pl",126],["namasce.pl",126],["ultimate-catch.eu",127],["cpopchanelofficial.com",128],["creditcardgenerator.com",129],["creditcardrush.com",129],["bostoncommons.net",129],["thejobsmovie.com",129],["livsavr.co",129],["hl-live.de",130],["wohnmobilforum.de",130],["nulledbear.com",130],["sinnerclownceviri.net",130],["satoshi-win.xyz",130],["encurtandourl.com",[130,136]],["freesoft.id",130],["zcteam.id",130],["www-daftarharga.blogspot.com",130],["ear-phone-review.com",130],["telefullenvivo.com",130],["listatv.pl",130],["daemon-hentai.com",[130,301]],["ltc-faucet.xyz",130],["coin-profits.xyz",130],["relampagomovies.com",130],["nilopolisonline.com.br",131],["mesquitaonline.com",131],["yellowbridge.com",131],["socialgirls.im",132],["yaoiotaku.com",133],["camhub.world",134],["moneyhouse.ch",135],["ihow.info",136],["hartico.tv",136],["filesus.com",136],["sturls.com",136],["re.two.re",136],["turbo1.co",136],["cartoonsarea.xyz",136],["valeronevijao.com",137],["cigarlessarefy.com",137],["figeterpiazine.com",137],["yodelswartlike.com",137],["generatesnitrosate.com",137],["crownmakermacaronicism.com",137],["chromotypic.com",137],["gamoneinterrupted.com",137],["metagnathtuggers.com",137],["wolfdyslectic.com",137],["rationalityaloelike.com",137],["sizyreelingly.com",137],["simpulumlamerop.com",137],["urochsunloath.com",137],["monorhinouscassaba.com",137],["counterclockwisejacky.com",137],["35volitantplimsoles5.com",137],["scatch176duplicities.com",137],["antecoxalbobbing1010.com",137],["boonlessbestselling244.com",137],["cyamidpulverulence530.com",137],["guidon40hyporadius9.com",137],["449unceremoniousnasoseptal.com",137],["19turanosephantasia.com",137],["30sensualizeexpression.com",137],["321naturelikefurfuroid.com",137],["745mingiestblissfully.com",137],["availedsmallest.com",137],["greaseball6eventual20.com",137],["toxitabellaeatrebates306.com",137],["20demidistance9elongations.com",137],["audaciousdefaulthouse.com",137],["fittingcentermondaysunday.com",137],["fraudclatterflyingcar.com",137],["launchreliantcleaverriver.com",137],["matriculant401merited.com",137],["realfinanceblogcenter.com",137],["reputationsheriffkennethsand.com",137],["telyn610zoanthropy.com",137],["tubelessceliolymph.com",137],["tummulerviolableness.com",137],["un-block-voe.net",137],["v-o-e-unblock.com",137],["voe-un-block.com",137],["voeun-block.net",137],["voeunbl0ck.com",137],["voeunblck.com",137],["voeunblk.com",137],["voeunblock.com",137],["voeunblock1.com",137],["voeunblock2.com",137],["voeunblock3.com",137],["agefi.fr",138],["cariskuy.com",139],["letras2.com",139],["yusepjaelani.blogspot.com",140],["letras.mus.br",141],["mtlurb.com",142],["port.hu",143],["acdriftingpro.com",143],["flix-wave.lol",143],["flight-report.com",143],["forumdz.com",143],["abandonmail.com",143],["flmods.com",143],["zilinak.sk",143],["projectfreetv.stream",143],["hotdesimms.com",143],["pdfaid.com",143],["dzeko11.net",[143,283]],["bootdey.com",143],["mail.com",143],["expresskaszubski.pl",143],["moegirl.org.cn",143],["onemanhua.com",144],["t3n.de",145],["allindiaroundup.com",146],["vectorizer.io",147],["smgplaza.com",147],["onehack.us",147],["thapcam.net",147],["thefastlaneforum.com",148],["trade2win.com",149],["modagamers.com",150],["freemagazines.top",150],["straatosphere.com",150],["rule34porn.net",150],["nullpk.com",150],["adslink.pw",150],["downloadudemy.com",150],["picgiraffe.com",150],["weadown.com",150],["freepornsex.net",150],["nurparatodos.com.ar",150],["librospreuniversitariospdf.blogspot.com",151],["msdos-games.com",151],["blocklayer.com",151],["forexeen.us",151],["khsm.io",151],["webcreator-journal.com",151],["nu6i-bg-net.com",151],["routech.ro",152],["hokej.net",152],["turkmmo.com",153],["palermotoday.it",154],["baritoday.it",154],["trentotoday.it",154],["agrigentonotizie.it",154],["anconatoday.it",154],["arezzonotizie.it",154],["avellinotoday.it",154],["bresciatoday.it",154],["brindisireport.it",154],["casertanews.it",154],["cataniatoday.it",154],["cesenatoday.it",154],["chietitoday.it",154],["forlitoday.it",154],["frosinonetoday.it",154],["genovatoday.it",154],["ilpescara.it",154],["ilpiacenza.it",154],["latinatoday.it",154],["lecceprima.it",154],["leccotoday.it",154],["livornotoday.it",154],["messinatoday.it",154],["milanotoday.it",154],["modenatoday.it",154],["monzatoday.it",154],["novaratoday.it",154],["padovaoggi.it",154],["parmatoday.it",154],["perugiatoday.it",154],["pisatoday.it",154],["quicomo.it",154],["ravennatoday.it",154],["reggiotoday.it",154],["riminitoday.it",154],["romatoday.it",154],["salernotoday.it",154],["sondriotoday.it",154],["sportpiacenza.it",154],["ternitoday.it",154],["today.it",154],["torinotoday.it",154],["trevisotoday.it",154],["triesteprima.it",154],["udinetoday.it",154],["veneziatoday.it",154],["vicenzatoday.it",154],["thumpertalk.com",155],["arkcod.org",155],["facciabuco.com",156],["softx64.com",157],["thelayoff.com",158],["manwan.xyz",158],["blog.coinsrise.net",158],["blog.cryptowidgets.net",158],["blog.insurancegold.in",158],["blog.wiki-topia.com",158],["blog.coinsvalue.net",158],["blog.cookinguide.net",158],["blog.freeoseocheck.com",158],["blog.makeupguide.net",158],["blog.carstopia.net",158],["blog.carsmania.net",158],["shorterall.com",158],["blog24.me",158],["maxstream.video",158],["maxlinks.online",158],["tvepg.eu",158],["dailymaverick.co.za",159],["apps2app.com",160],["cheatermad.com",161],["ville-ideale.fr",162],["eodev.com",163],["tickzoo.tv",164],["xfreehd.com",165],["freethesaurus.com",166],["thefreedictionary.com",166],["fm-arena.com",167],["tradersunion.com",168],["tandess.com",169],["allosurf.net",169],["faqwiki.us",170],["sonixgvn.net",170],["spontacts.com",171],["dankmemer.lol",172],["getexploits.com",173],["fplstatistics.com",174],["raenonx.cc",[175,284]],["deezer.com",175],["breitbart.com",176],["salidzini.lv",177],["choosingnothing.com",178],["cryptorank.io",[179,180]],["th.gl",181],["4kwebplay.xyz",182],["qqwebplay.xyz",182],["viwlivehdplay.ru",182],["molbiotools.com",183],["vods.tv",184],["18xxx.xyz",185],["raidrush.net",186],["xnxxcom.xyz",187],["videzz.net",188],["spambox.xyz",189],["dreamdth.com",190],["freemodsapp.in",190],["onlytech.com",190],["melaniezettofrais.online",191],["player.jeansaispasplus.homes",191],["giga-uqload.xyz",192],["gaystream.online",192],["bembed.net",192],["elbailedeltroleo.site",192],["embedv.net",192],["fslinks.org",192],["listeamed.net",192],["v6embed.xyz",192],["vgplayer.xyz",192],["vid-guard.com",192],["vidguard.online",192],["en-thunderscans.com",193],["cheatography.com",194],["resortcams.com",194],["karistudio.com",196],["iqksisgw.xyz",197],["starkroboticsfrc.com",198],["sinonimos.de",198],["antonimos.de",198],["quesignifi.ca",198],["tiktokrealtime.com",198],["tiktokcounter.net",198],["tpayr.xyz",198],["poqzn.xyz",198],["ashrfd.xyz",198],["rezsx.xyz",198],["tryzt.xyz",198],["ashrff.xyz",198],["rezst.xyz",198],["dawenet.com",198],["erzar.xyz",198],["waezm.xyz",198],["waezg.xyz",198],["blackwoodacademy.org",198],["cryptednews.space",198],["vivuq.com",198],["swgop.com",198],["vbnmll.com",198],["telcoinfo.online",198],["dshytb.com",198],["enit.in",199],["financerites.com",199],["fadedfeet.com",200],["homeculina.com",200],["ineedskin.com",200],["kenzo-flowertag.com",200],["lawyex.co",200],["mdn.lol",200],["bitzite.com",201],["coingraph.us",202],["impact24.us",202],["apkmodvn.com",203],["mod1s.com",203],["apkmoddone.com",204],["dl.apkmoddone.com",205],["phongroblox.com",205],["my-code4you.blogspot.com",206],["vrcmods.com",207],["osuskinner.com",207],["osuskins.net",207],["pentruea.com",[208,209]],["mchacks.net",210],["why-tech.it",211],["compsmag.com",212],["tapetus.pl",213],["autoroad.cz",214],["brawlhalla.fr",214],["tecnobillo.com",214],["sexcamfreeporn.com",215],["breatheheavy.com",216],["wenxuecity.com",217],["key-hub.eu",218],["fabioambrosi.it",219],["tattle.life",220],["emuenzen.de",220],["terrylove.com",220],["mynet.com",[221,284]],["cidade.iol.pt",222],["fantacalcio.it",223],["hentaifreak.org",224],["hypebeast.com",225],["krankheiten-simulieren.de",226],["catholic.com",227],["3dmodelshare.org",228],["techinferno.com",229],["ibeconomist.com",230],["bookriot.com",231],["purposegames.com",232],["globo.com",233],["latimes.com",233],["claimrbx.gg",234],["perelki.net",235],["vpn-anbieter-vergleich-test.de",236],["livingincebuforums.com",237],["paperzonevn.com",238],["alltechnerd.com",239],["malaysianwireless.com",240],["erinsakura.com",241],["infofuge.com",241],["freejav.guru",241],["novelmultiverse.com",241],["fritidsmarkedet.dk",242],["maskinbladet.dk",242],["15min.lt",243],["baddiehub.com",244],["mr9soft.com",245],["21porno.com",246],["adult-sex-gamess.com",247],["hentaigames.app",247],["mobilesexgamesx.com",247],["mysexgamer.com",247],["porngameshd.com",247],["sexgamescc.com",247],["xnxx-sex-videos.com",247],["f2movies.to",248],["freeporncave.com",249],["tubsxxx.com",250],["subtitle.one",251],["manga18fx.com",252],["freebnbcoin.com",252],["sextvx.com",253],["studydhaba.com",254],["freecourse.tech",254],["victor-mochere.com",254],["papunika.com",254],["mobilanyheter.net",254],["prajwaldesai.com",[254,274]],["ftuapps.dev",254],["muztext.com",255],["pornohans.com",256],["nursexfilme.com",256],["pornohirsch.net",256],["xhamster-sexvideos.com",256],["pornoschlange.com",256],["hdpornos.net",256],["gutesexfilme.com",256],["short1.site",256],["zona-leros.com",256],["charbelnemnom.com",257],["simplebits.io",258],["online-fix.me",259],["gamersdiscussionhub.com",260],["owlzo.com",261],["q1003.com",262],["blogpascher.com",263],["testserver.pro",264],["lifestyle.bg",264],["money.bg",264],["news.bg",264],["topsport.bg",264],["webcafe.bg",264],["schoolcheats.net",265],["mgnet.xyz",266],["advertiserandtimes.co.uk",267],["xvideos2020.me",268],["111.90.159.132",269],["techsolveprac.com",270],["joomlabeginner.com",271],["largescaleforums.com",272],["dubznetwork.com",273],["hentaidexy.com",275],["traderepublic.community",276],["babia.to",277],["code2care.org",278],["xxxxsx.com",280],["ngontinh24.com",281],["idevicecentral.com",282],["zona11.com",283],["scsport.live",283],["blog.esuteru.com",284],["blog.livedoor.jp",284],["carscoops.com",284],["dziennik.pl",284],["eurointegration.com.ua",284],["flatpanelshd.com",284],["fourfourtwo.co.kr",284],["hoyme.jp",284],["issuya.com",284],["itainews.com",284],["iusm.co.kr",284],["logicieleducatif.fr",284],["mydaily.co.kr",284],["onlinegdb.com",284],["picrew.me",284],["pravda.com.ua",284],["reportera.co.kr",284],["sportsrec.com",284],["sportsseoul.com",284],["taxguru.in",284],["text-compare.com",284],["thestar.co.uk",284],["tweaksforgeeks.com",284],["videogamemods.com",284],["wfmz.com",284],["worldhistory.org",284],["yorkshirepost.co.uk",284],["etnews.com",284],["wort-suchen.de",284],["word-grabber.com",284],["palabr.as",284],["motscroises.fr",284],["cruciverba.it",284],["oradesibiu.ro",284],["w.grapps.me",284],["gazetaprawna.pl",284],["pressian.com",284],["indiatimes.com",284],["missyusa.com",284],["aikatu.jp",284],["adintrend.tv",284],["ark-unity.com",284],["cool-style.com.tw",284],["doanhnghiepvn.vn",284],["thesaurus.net",285],["automobile-catalog.com",285],["motorbikecatalog.com",285],["maketecheasier.com",285],["mlbpark.donga.com",286],["jjang0u.com",287],["mangacrab.com",289],["viefaucet.com",290],["cloud-computing-central.com",291],["afk.guide",292],["businessnamegenerator.com",293],["derstandard.at",294],["derstandard.de",294],["rocketnews24.com",295],["soranews24.com",295],["youpouch.com",295],["gourmetscans.net",296],["ilsole24ore.com",297],["ipacrack.com",298],["hentaiporn.one",299],["infokik.com",300],["daemonanime.net",301],["fosslinux.com",302],["shrdsk.me",303],["examword.com",304],["sempreupdate.com.br",304],["tribuna.com",305],["trendsderzukunft.de",306],["gal-dem.com",306],["lostineu.eu",306],["oggitreviso.it",306],["speisekarte.de",306],["mixed.de",306],["lightnovelspot.com",[307,308]],["lightnovelworld.com",[307,308]],["novelpub.com",[307,308]],["webnovelpub.com",[307,308]],["mail.yahoo.com",309],["hwzone.co.il",310],["nammakalvi.com",311],["javmoon.me",312],["c2g.at",313],["terafly.me",313],["elamigos-games.com",313],["elamigos-games.net",313],["dktechnicalmate.com",314],["recipahi.com",314],["converter-btc.world",314],["kaystls.site",315],["aquarius-horoscopes.com",316],["cancer-horoscopes.com",316],["dubipc.blogspot.com",316],["echoes.gr",316],["engel-horoskop.de",316],["freegames44.com",316],["fuerzasarmadas.eu",316],["gemini-horoscopes.com",316],["jurukunci.net",316],["krebs-horoskop.com",316],["leo-horoscopes.com",316],["maliekrani.com",316],["nklinks.click",316],["ourenseando.es",316],["pisces-horoscopes.com",316],["radio-en-direct.fr",316],["sagittarius-horoscopes.com",316],["scorpio-horoscopes.com",316],["singlehoroskop-loewe.de",316],["skat-karten.de",316],["skorpion-horoskop.com",316],["taurus-horoscopes.com",316],["the1security.com",316],["torrentmovies.online",316],["virgo-horoscopes.com",316],["zonamarela.blogspot.com",316],["yoima.hatenadiary.com",316],["vpntester.org",317],["watchhentai.net",318],["japscan.lol",[319,355]],["digitask.ru",320],["tempumail.com",321],["sexvideos.host",322],["10alert.com",324],["cryptstream.de",325],["nydus.org",325],["techhelpbd.com",326],["fapdrop.com",327],["cellmapper.net",328],["hdrez.com",329],["youwatch-serie.com",329],["printablecreative.com",330],["comohoy.com",331],["leak.sx",331],["paste.bin.sx",331],["pornleaks.in",331],["merlininkazani.com",331],["j91.asia",333],["jeniusplay.com",334],["indianyug.com",335],["rgb.vn",335],["needrom.com",336],["criptologico.com",337],["megadrive-emulator.com",338],["eromanga-show.com",339],["hentai-one.com",339],["hentaipaw.com",339],["10minuteemails.com",340],["luxusmail.org",340],["w3cub.com",341],["bangpremier.com",342],["nyaa.iss.ink",343],["tnp98.xyz",345],["freepdfcomic.com",346],["techedubyte.com",347],["memedroid.com",348],["animesync.org",349],["karaoketexty.cz",350],["filmizlehdfilm.com",351],["fullfilmizle.cc",351],["mjakmama24.pl",353],["lastampa.it",354],["caroloportunidades.com.br",356],["coempregos.com.br",356],["foodiesgallery.com",356],["wiki.yjsnpi.nu",357]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,6]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",5],["eztv",5],["sushi-scan",8],["spigotunlocked",8],["ahmedmode",8],["kissasian",11],["rp5",12],["mma-core",13],["yts",17],["720pstream",17],["1stream",17],["thefmovies",18],["urlcero",24],["totaldebrid",27],["sandrives",27],["fxporn69",36],["aliancapes",36],["pouvideo",38],["povvideo",38],["povw1deo",38],["povwideo",38],["powv1deo",38],["powvibeo",38],["powvideo",38],["powvldeo",38],["tubsexer",44],["porno-tour",44],["lenkino",44],["pornomoll",44],["camsclips",44],["m4ufree",48],["writedroid",59],["telerium",63],["pandafreegames",77],["thoptv",85],["shortzzy",94],["streameast",106],["thestreameast",106],["daddylivehd",106],["solvetube",109],["pornhub",110],["wcofun",117],["bollyholic",121],["gotxx",136],["turkanime",137],["voe-unblock",137],["khatrimaza",150],["pogolinks",150],["popcornstream",152],["brainly",163],["oploverz",164],["moflix-stream",[192,195]],["vembed",192],["xhamsterdeutsch",256],["privatemoviez",260],["gmx",279],["lightnovelpub",[307,308]],["camcaps",323],["drivebot",344],["thenextplanet1",345],["filmizletv",351],["autoscout24",352]]);

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
