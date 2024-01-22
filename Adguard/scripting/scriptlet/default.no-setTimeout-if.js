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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["null)","10"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["offsetParent"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["instance.check","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["()","0"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["ai_adb"],["t()","0"],["$"],["getComputedStyle","2000"],["","5"],["/adblock|isRequestPresent/"],["offsetLeft"],[".show()","1000"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],[".length","2000"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["setAntiAb"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["atob"],["devtool"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x","5000"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["fetch"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["/adblock/i"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"],["document.body.innerHTML"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["focus.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,10,11]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,136]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,161]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,264]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["teltarif.de",5],["economictimes.indiatimes.com",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["bluedrake42.com",7],["streamservicehd.click",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["newsrade.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["freethesaurus.com",9],["thefreedictionary.com",9],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["tinhocdongthap.com",11],["sakarnewz.com",11],["downloadr.in",11],["topcomicporno.com",11],["dongknows.com",11],["traderepublic.community",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["mbc2.live",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["mangapt.com",11],["seriesperu.com",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,263]],["topsporter.net",[11,263]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["hq-links.com",11],["mobilkulup.com",11],["esopress.com",11],["rttar.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["surfsees.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["blackhatworld.com",11],["bizdustry.com",11],["storefront.com.ng",11],["pkbiosfix.com",11],["casi3.xyz",11],["geektime.co.il",12],["bild.de",13],["mediafire.com",14],["wcoanimedub.tv",15],["wcoforever.net",15],["openspeedtest.com",15],["addtobucketlist.com",15],["3dzip.org",[15,89]],["ilmeteo.it",15],["wcoforever.com",15],["comprovendolibri.it",15],["healthelia.com",15],["keephealth.info",16],["australianfrequentflyer.com.au",17],["afreesms.com",18],["kinoger.re",18],["laksa19.github.io",18],["javcl.com",18],["upvideo.to",18],["tvlogy.to",18],["live.dragaoconnect.net",18],["beststremo.com",18],["seznam.cz",18],["seznamzpravy.cz",18],["xerifetech.com",18],["wallpapershome.com",20],["ville-ideale.fr",21],["calciomercato.it",22],["calciomercato.com",23],["bersamatekno.com",23],["hotpornfile.org",23],["robloxscripts.com",23],["coolsoft.altervista.org",23],["worldcupfootball.me",[23,28]],["hackedonlinegames.com",23],["jkoding.xyz",23],["settlersonlinemaps.com",23],["1cloudfile.com",23],["magdownload.org",23],["kpkuang.org",23],["shareus.site",23],["crypto4yu.com",23],["faucetwork.space",23],["thenightwithoutthedawn.blogspot.com",23],["entutes.com",23],["claimlite.club",23],["bazadecrypto.com",[23,309]],["whosampled.com",24],["imgkings.com",25],["pornvideotop.com",25],["krotkoosporcie.pl",25],["anghami.com",26],["wired.com",27],["tutele.sx",28],["footyhunter3.xyz",28],["magesypro.pro",[29,30]],["audiotools.pro",30],["magesy.blog",30],["audioztools.com",[30,31]],["altblogger.net",31],["hl-live.de",31],["satoshi-win.xyz",31],["encurtandourl.com",[31,153]],["freedeepweb.blogspot.com",31],["freesoft.id",31],["zcteam.id",31],["www-daftarharga.blogspot.com",31],["ear-phone-review.com",31],["telefullenvivo.com",31],["listatv.pl",31],["ltc-faucet.xyz",31],["coin-profits.xyz",31],["relampagomovies.com",31],["katestube.com",32],["short.pe",32],["footystreams.net",32],["seattletimes.com",33],["yiv.com",34],["globalrph.com",35],["e-glossa.it",36],["java-forum.org",37],["comunidadgzone.es",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["plex-guide.de",37],["healthtune.site",37],["gewinde-normen.de",37],["tucinehd.com",37],["freewebscript.com",38],["webcheats.com.br",39],["gala.fr",41],["gentside.com",41],["geo.fr",41],["hbrfrance.fr",41],["nationalgeographic.fr",41],["ohmymag.com",41],["serengo.net",41],["vsd.fr",41],["updato.com",[42,59]],["methbox.com",43],["daizurin.com",43],["pendekarsubs.us",43],["dreamfancy.org",43],["rysafe.blogspot.com",43],["techacode.com",43],["toppng.com",43],["th-world.com",43],["avjamack.com",43],["avjamak.net",43],["tickzoo.tv",44],["dlhd.sx",45],["embedstream.me",45],["yts-subs.net",45],["cnnamador.com",46],["nudecelebforum.com",47],["pronpic.org",48],["thewebflash.com",49],["discordfastfood.com",49],["xup.in",49],["popularmechanics.com",50],["op.gg",51],["lequipe.fr",52],["jellynote.com",53],["eporner.com",55],["pornbimbo.com",56],["allmonitors24.com",56],["4j.com",56],["avoiderrors.com",57],["cgtips.org",[57,209]],["sitarchive.com",57],["livenewsof.com",57],["topnewsshow.com",57],["gatcha.org",57],["empregoestagios.com",57],["everydayonsales.com",57],["kusonime.com",57],["aagmaal.xyz",57],["suicidepics.com",57],["codesnail.com",57],["codingshiksha.com",57],["graphicux.com",57],["hardcoregames.ca",57],["asyadrama.com",57],["bitcoinegypt.news",57],["citychilli.com",57],["talkjarvis.com",57],["hdmotori.it",58],["femdomtb.com",60],["camhub.cc",60],["bobs-tube.com",60],["ru-xvideos.me",60],["pornfd.com",60],["popno-tour.net",60],["molll.mobi",60],["watchmdh.to",60],["camwhores.tv",60],["elfqrin.com",61],["satcesc.com",62],["apfelpatient.de",62],["lusthero.com",63],["m2list.com",64],["embed.nana2play.com",64],["elahmad.com",64],["dofusports.xyz",64],["dallasnews.com",65],["lnk.news",66],["lnk.parts",66],["efukt.com",67],["wendycode.com",67],["springfieldspringfield.co.uk",68],["porndoe.com",69],["smsget.net",[70,71]],["kjanime.net",72],["gioialive.it",73],["classicreload.com",74],["chicoer.com",75],["bostonherald.com",75],["dailycamera.com",75],["gomiblog.com",76],["maxcheaters.com",77],["rbxoffers.com",77],["mhn.quest",77],["postimees.ee",77],["police.community",77],["gisarea.com",77],["schaken-mods.com",77],["theclashify.com",77],["newscon.org",77],["txori.com",77],["olarila.com",77],["deletedspeedstreams.blogspot.com",77],["schooltravelorganiser.com",77],["xhardhempus.net",77],["sportsplays.com",78],["deinesexfilme.com",80],["einfachtitten.com",80],["halloporno.com",80],["herzporno.com",80],["lesbenhd.com",80],["milffabrik.com",[80,239]],["porn-monkey.com",80],["porndrake.com",80],["pornhubdeutsch.net",80],["pornoaffe.com",80],["pornodavid.com",80],["pornoente.tv",[80,239]],["pornofisch.com",80],["pornofelix.com",80],["pornohammer.com",80],["pornohelm.com",80],["pornoklinge.com",80],["pornotom.com",[80,239]],["pornotommy.com",80],["pornovideos-hd.com",80],["pornozebra.com",[80,239]],["xhamsterdeutsch.xyz",80],["xnxx-sexfilme.com",80],["zerion.cc",80],["letribunaldunet.fr",81],["vladan.fr",81],["live-tv-channels.org",82],["eslfast.com",83],["freegamescasual.com",84],["tcpvpn.com",85],["oko.sh",85],["timesnownews.com",85],["timesnowhindi.com",85],["timesnowmarathi.com",85],["zoomtventertainment.com",85],["xxxuno.com",86],["sholah.net",87],["2rdroid.com",87],["bisceglielive.it",88],["pandajogosgratis.com.br",90],["5278.cc",91],["tonspion.de",93],["duplichecker.com",94],["plagiarismchecker.co",94],["plagiarismdetector.net",94],["searchenginereports.net",94],["smallseotools.com",94],["giallozafferano.it",95],["autojournal.fr",95],["autoplus.fr",95],["sportauto.fr",95],["linkspaid.com",96],["proxydocker.com",96],["beeimg.com",[97,98]],["emturbovid.com",98],["ftlauderdalebeachcam.com",99],["ftlauderdalewebcam.com",99],["juneauharborwebcam.com",99],["keywestharborwebcam.com",99],["kittycatcam.com",99],["mahobeachcam.com",99],["miamiairportcam.com",99],["morganhillwebcam.com",99],["njwildlifecam.com",99],["nyharborwebcam.com",99],["paradiseislandcam.com",99],["pompanobeachcam.com",99],["portbermudawebcam.com",99],["portcanaveralwebcam.com",99],["portevergladeswebcam.com",99],["portmiamiwebcam.com",99],["portnywebcam.com",99],["portnassauwebcam.com",99],["portstmaartenwebcam.com",99],["portstthomaswebcam.com",99],["porttampawebcam.com",99],["sxmislandcam.com",99],["gearingcommander.com",99],["themes-dl.com",99],["badassdownloader.com",99],["badasshardcore.com",99],["badassoftcore.com",99],["nulljungle.com",99],["teevee.asia",99],["otakukan.com",99],["linksht.com",101],["generate.plus",102],["calculate.plus",102],["avcesar.com",103],["audiotag.info",104],["tudigitale.it",105],["ibcomputing.com",106],["eodev.com",107],["legia.net",108],["acapellas4u.co.uk",109],["streamhentaimovies.com",110],["konten.co.id",111],["xiaomifans.pl",112],["eletronicabr.com",112],["optifine.net",113],["luzernerzeitung.ch",114],["tagblatt.ch",114],["spellcheck.net",115],["spellchecker.net",115],["spellweb.com",115],["ableitungsrechner.net",116],["alternet.org",117],["gourmetsupremacy.com",117],["imtranslator.net",118],["shrib.com",119],["pandafiles.com",120],["vidia.tv",[120,142]],["hortonanderfarom.blogspot.com",120],["clarifystraight.com",120],["tutelehd3.xyz",121],["mega4upload.com",121],["coolcast2.com",121],["techclips.net",121],["earthquakecensus.com",121],["footyhunter.lol",121],["gamerarcades.com",121],["poscitech.click",121],["starlive.stream",121],["utopianwilderness.com",121],["wecast.to",121],["sportbar.live",121],["lordchannel.com",121],["play-old-pc-games.com",122],["scrin.org",123],["tunovelaligera.com",124],["tapchipi.com",124],["cuitandokter.com",124],["tech-blogs.com",124],["cardiagn.com",124],["dcleakers.com",124],["esgeeks.com",124],["pugliain.net",124],["uplod.net",124],["worldfreeware.com",124],["fikiri.net",124],["myhackingworld.com",124],["phoenixfansub.com",124],["freecourseweb.com",125],["devcourseweb.com",125],["coursewikia.com",125],["courseboat.com",125],["coursehulu.com",125],["lne.es",129],["pornult.com",130],["webcamsdolls.com",130],["bitcotasks.com",130],["adsy.pw",130],["playstore.pw",130],["exactpay.online",130],["thothd.to",130],["proplanta.de",131],["hydrogenassociation.org",132],["ludigames.com",132],["sportitalialive.com",132],["tii.la",132],["made-by.org",132],["xenvn.com",132],["worldtravelling.com",132],["igirls.in",132],["technichero.com",132],["roshiyatech.my.id",132],["24sport.stream",132],["aeroxplorer.com",132],["mad4wheels.com",133],["logi.im",133],["emailnator.com",133],["textograto.com",134],["voyageforum.com",135],["hmc-id.blogspot.com",135],["jemerik.com",135],["myabandonware.com",135],["chatta.it",137],["ketubanjiwa.com",138],["nsfw247.to",139],["funzen.net",139],["fighter.stream",139],["ilclubdellericette.it",139],["hubstream.in",139],["extremereportbot.com",140],["getintopc.com",141],["qoshe.com",143],["lowellsun.com",144],["mamadu.pl",144],["dobrapogoda24.pl",144],["motohigh.pl",144],["namasce.pl",144],["ultimate-catch.eu",145],["cpopchanelofficial.com",146],["creditcardgenerator.com",147],["creditcardrush.com",147],["bostoncommons.net",147],["thejobsmovie.com",147],["livsavr.co",147],["nilopolisonline.com.br",148],["mesquitaonline.com",148],["yellowbridge.com",148],["socialgirls.im",149],["yaoiotaku.com",150],["camhub.world",151],["moneyhouse.ch",152],["ihow.info",153],["filesus.com",153],["sturls.com",153],["re.two.re",153],["turbo1.co",153],["cartoonsarea.xyz",153],["valeronevijao.com",154],["cigarlessarefy.com",154],["figeterpiazine.com",154],["yodelswartlike.com",154],["generatesnitrosate.com",154],["crownmakermacaronicism.com",154],["chromotypic.com",154],["gamoneinterrupted.com",154],["metagnathtuggers.com",154],["wolfdyslectic.com",154],["rationalityaloelike.com",154],["sizyreelingly.com",154],["simpulumlamerop.com",154],["urochsunloath.com",154],["monorhinouscassaba.com",154],["counterclockwisejacky.com",154],["35volitantplimsoles5.com",154],["scatch176duplicities.com",154],["antecoxalbobbing1010.com",154],["boonlessbestselling244.com",154],["cyamidpulverulence530.com",154],["guidon40hyporadius9.com",154],["449unceremoniousnasoseptal.com",154],["19turanosephantasia.com",154],["30sensualizeexpression.com",154],["321naturelikefurfuroid.com",154],["745mingiestblissfully.com",154],["availedsmallest.com",154],["greaseball6eventual20.com",154],["toxitabellaeatrebates306.com",154],["20demidistance9elongations.com",154],["audaciousdefaulthouse.com",154],["fittingcentermondaysunday.com",154],["fraudclatterflyingcar.com",154],["launchreliantcleaverriver.com",154],["matriculant401merited.com",154],["realfinanceblogcenter.com",154],["reputationsheriffkennethsand.com",154],["telyn610zoanthropy.com",154],["tubelessceliolymph.com",154],["tummulerviolableness.com",154],["un-block-voe.net",154],["v-o-e-unblock.com",154],["voe-un-block.com",154],["voeun-block.net",154],["voeunbl0ck.com",154],["voeunblck.com",154],["voeunblk.com",154],["voeunblock.com",154],["voeunblock1.com",154],["voeunblock2.com",154],["voeunblock3.com",154],["agefi.fr",155],["cariskuy.com",156],["letras2.com",156],["yusepjaelani.blogspot.com",157],["letras.mus.br",158],["cheatermad.com",159],["mtlurb.com",160],["port.hu",161],["acdriftingpro.com",161],["flight-report.com",161],["forumdz.com",161],["abandonmail.com",161],["flmods.com",161],["zilinak.sk",161],["projectfreetv.stream",161],["hotdesimms.com",161],["pdfaid.com",161],["mconverter.eu",161],["dzeko11.net",[161,263]],["mail.com",161],["expresskaszubski.pl",161],["moegirl.org.cn",161],["onemanhua.com",162],["t3n.de",163],["allindiaroundup.com",164],["vectorizer.io",165],["smgplaza.com",165],["ftuapps.dev",165],["onehack.us",165],["thapcam.net",165],["thefastlaneforum.com",166],["trade2win.com",167],["gmodleaks.com",167],["modagamers.com",168],["freemagazines.top",168],["straatosphere.com",168],["nullpk.com",168],["adslink.pw",168],["downloadudemy.com",168],["picgiraffe.com",168],["weadown.com",168],["freepornsex.net",168],["nurparatodos.com.ar",168],["librospreuniversitariospdf.blogspot.com",169],["msdos-games.com",169],["forexeen.us",169],["khsm.io",169],["girls-like.me",169],["webcreator-journal.com",169],["nu6i-bg-net.com",169],["routech.ro",170],["hokej.net",170],["turkmmo.com",171],["palermotoday.it",172],["baritoday.it",172],["trentotoday.it",172],["agrigentonotizie.it",172],["anconatoday.it",172],["arezzonotizie.it",172],["avellinotoday.it",172],["bresciatoday.it",172],["brindisireport.it",172],["casertanews.it",172],["cataniatoday.it",172],["cesenatoday.it",172],["chietitoday.it",172],["forlitoday.it",172],["frosinonetoday.it",172],["genovatoday.it",172],["ilpescara.it",172],["ilpiacenza.it",172],["latinatoday.it",172],["lecceprima.it",172],["leccotoday.it",172],["livornotoday.it",172],["messinatoday.it",172],["milanotoday.it",172],["modenatoday.it",172],["monzatoday.it",172],["novaratoday.it",172],["padovaoggi.it",172],["parmatoday.it",172],["perugiatoday.it",172],["pisatoday.it",172],["quicomo.it",172],["ravennatoday.it",172],["reggiotoday.it",172],["riminitoday.it",172],["romatoday.it",172],["salernotoday.it",172],["sondriotoday.it",172],["sportpiacenza.it",172],["ternitoday.it",172],["today.it",172],["torinotoday.it",172],["trevisotoday.it",172],["triesteprima.it",172],["udinetoday.it",172],["veneziatoday.it",172],["vicenzatoday.it",172],["thumpertalk.com",173],["arkcod.org",173],["facciabuco.com",174],["softx64.com",175],["thelayoff.com",176],["shorterall.com",176],["blog24.me",176],["maxstream.video",176],["maxlinks.online",176],["tvepg.eu",176],["pstream.net",177],["libreriamo.it",178],["medebooks.xyz",178],["tutorials-technology.info",178],["mashtips.com",178],["marriedgames.com.br",178],["4allprograms.me",178],["nurgsm.com",178],["certbyte.com",178],["plugincrack.com",178],["gamingdeputy.com",178],["freewebcart.com",178],["dailymaverick.co.za",179],["apps2app.com",180],["fm-arena.com",181],["enit.in",182],["financerites.com",182],["fadedfeet.com",183],["homeculina.com",183],["ineedskin.com",183],["kenzo-flowertag.com",183],["lawyex.co",183],["mdn.lol",183],["my-code4you.blogspot.com",184],["leakgaming.fr",185],["vrcmods.com",186],["osuskinner.com",186],["osuskins.net",186],["pentruea.com",[187,188]],["mchacks.net",189],["why-tech.it",190],["compsmag.com",191],["tapetus.pl",192],["gaystream.online",193],["embedv.net",193],["fslinks.org",193],["v6embed.xyz",193],["vgplayer.xyz",193],["vid-guard.com",193],["autoroad.cz",194],["brawlhalla.fr",194],["tecnobillo.com",194],["sexcamfreeporn.com",195],["breatheheavy.com",196],["wenxuecity.com",197],["key-hub.eu",198],["fabioambrosi.it",199],["tattle.life",200],["emuenzen.de",200],["terrylove.com",200],["mynet.com",201],["cidade.iol.pt",202],["fantacalcio.it",203],["hentaifreak.org",204],["hypebeast.com",205],["krankheiten-simulieren.de",206],["catholic.com",207],["3dmodelshare.org",208],["gourmetscans.net",209],["techinferno.com",210],["phuongtrinhhoahoc.com",211],["ibeconomist.com",212],["bookriot.com",213],["purposegames.com",214],["schoolcheats.net",214],["globo.com",215],["latimes.com",215],["claimrbx.gg",216],["perelki.net",217],["vpn-anbieter-vergleich-test.de",218],["livingincebuforums.com",219],["paperzonevn.com",220],["alltechnerd.com",221],["malaysianwireless.com",222],["erinsakura.com",223],["infofuge.com",223],["freejav.guru",223],["novelmultiverse.com",223],["fritidsmarkedet.dk",224],["maskinbladet.dk",224],["15min.lt",225],["lewdninja.com",226],["lewd.ninja",226],["baddiehub.com",227],["mr9soft.com",228],["21porno.com",229],["adult-sex-gamess.com",230],["hentaigames.app",230],["mobilesexgamesx.com",230],["mysexgamer.com",230],["porngameshd.com",230],["sexgamescc.com",230],["xnxx-sex-videos.com",230],["f2movies.to",231],["freeporncave.com",232],["tubsxxx.com",233],["pornojenny.com",234],["subtitle.one",235],["sextvx.com",236],["studydhaba.com",237],["freecourse.tech",237],["victor-mochere.com",237],["papunika.com",237],["mobilanyheter.net",237],["prajwaldesai.com",237],["muztext.com",238],["pornohans.com",239],["nursexfilme.com",239],["pornohirsch.net",239],["xhamster-sexvideos.com",239],["pornoschlange.com",239],["hdpornos.net",239],["gutesexfilme.com",239],["short1.site",239],["zona-leros.com",239],["charbelnemnom.com",240],["online-fix.me",241],["gamersdiscussionhub.com",242],["owlzo.com",243],["q1003.com",244],["blogpascher.com",245],["testserver.pro",246],["lifestyle.bg",246],["money.bg",246],["news.bg",246],["topsport.bg",246],["webcafe.bg",246],["mgnet.xyz",247],["advertiserandtimes.co.uk",248],["xvideos2020.me",249],["111.90.159.132",250],["techsolveprac.com",251],["joomlabeginner.com",252],["largescaleforums.com",253],["dubznetwork.com",254],["mundodonghua.com",254],["hentaidexy.com",255],["oceanplay.org",256],["code2care.org",257],["xxxxsx.com",259],["ngontinh24.com",260],["panel.freemcserver.net",261],["idevicecentral.com",262],["zona11.com",263],["scsport.live",263],["mangacrab.com",265],["idnes.cz",266],["viefaucet.com",267],["cloud-computing-central.com",268],["afk.guide",269],["businessnamegenerator.com",270],["derstandard.at",271],["derstandard.de",271],["rocketnews24.com",272],["soranews24.com",272],["youpouch.com",272],["ilsole24ore.com",273],["hentaiporn.one",274],["infokik.com",275],["daemonanime.net",276],["daemon-hentai.com",276],["deezer.com",277],["fosslinux.com",278],["shrdsk.me",279],["examword.com",280],["sempreupdate.com.br",280],["tribuna.com",281],["trendsderzukunft.de",282],["gal-dem.com",282],["lostineu.eu",282],["oggitreviso.it",282],["speisekarte.de",282],["mixed.de",282],["lightnovelspot.com",[283,284]],["lightnovelworld.com",[283,284]],["novelpub.com",[283,284]],["webnovelpub.com",[283,284]],["mail.yahoo.com",285],["hwzone.co.il",286],["nammakalvi.com",287],["javmoon.me",288],["c2g.at",289],["terafly.me",289],["dktechnicalmate.com",290],["recipahi.com",290],["converter-btc.world",290],["kaystls.site",291],["aquarius-horoscopes.com",292],["cancer-horoscopes.com",292],["dubipc.blogspot.com",292],["echoes.gr",292],["engel-horoskop.de",292],["freegames44.com",292],["fuerzasarmadas.eu",292],["gemini-horoscopes.com",292],["jurukunci.net",292],["krebs-horoskop.com",292],["leo-horoscopes.com",292],["maliekrani.com",292],["nklinks.click",292],["ourenseando.es",292],["pisces-horoscopes.com",292],["radio-en-direct.fr",292],["sagittarius-horoscopes.com",292],["scorpio-horoscopes.com",292],["singlehoroskop-loewe.de",292],["skat-karten.de",292],["skorpion-horoskop.com",292],["taurus-horoscopes.com",292],["the1security.com",292],["torrentmovies.online",292],["virgo-horoscopes.com",292],["zonamarela.blogspot.com",292],["yoima.hatenadiary.com",292],["vpntester.org",293],["watchhentai.net",294],["japscan.lol",295],["digitask.ru",296],["tempumail.com",297],["sexvideos.host",298],["10alert.com",300],["cryptstream.de",301],["nydus.org",301],["techhelpbd.com",302],["fapdrop.com",303],["cellmapper.net",304],["hdrez.com",305],["youwatch-serie.com",305],["freebnbcoin.com",306],["printablecreative.com",307],["comohoy.com",308],["leak.sx",308],["pornleaks.in",308],["merlininkazani.com",308],["faindx.com",310],["j91.asia",311],["jeniusplay.com",312],["indianyug.com",313],["rgb.vn",313],["needrom.com",314],["criptologico.com",315],["megadrive-emulator.com",316],["eromanga-show.com",317],["hentai-one.com",317],["hentaipaw.com",317],["10minuteemails.com",318],["luxusmail.org",318],["w3cub.com",319],["bangpremier.com",320],["nyaa.iss.ink",321],["tnp98.xyz",323],["scripai.com",324],["myfxbook.com",324],["whatfontis.com",324],["freepdfcomic.com",325],["memedroid.com",326],["animesync.org",327],["karaoketexty.cz",328],["resortcams.com",329],["mjakmama24.pl",331],["security-demo.extrahop.com",332],["perchance.org",333]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,8]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",7],["eztv",7],["sushi-scan",11],["spigotunlocked",11],["ahmedmode",11],["kissasian",16],["rp5",18],["mma-core",19],["writedroid",23],["yts",28],["720pstream",28],["1stream",28],["magesy",29],["thefmovies",32],["fxporn69",37],["aliancapes",37],["urlcero",40],["totaldebrid",43],["sandrives",43],["oploverz",44],["pouvideo",54],["povvideo",54],["povw1deo",54],["povwideo",54],["powv1deo",54],["powvibeo",54],["powvideo",54],["powvldeo",54],["tubsexer",60],["porno-tour",60],["lenkino",60],["pornomoll",60],["camsclips",60],["m4ufree",64],["crackstreams",64],["telerium",79],["pandafreegames",92],["thoptv",100],["brainly",107],["streameast",121],["thestreameast",121],["daddylivehd",121],["solvetube",126],["hdfilme",127],["pornhub",128],["wcofun",135],["bollyholic",139],["gotxx",153],["turkanime",154],["voe-unblock",154],["khatrimaza",168],["pogolinks",168],["popcornstream",170],["shortzzy",178],["vembed",193],["xhamsterdeutsch",239],["privatemoviez",242],["gmx",258],["lightnovelpub",[283,284]],["camcaps",299],["drivebot",322],["thenextplanet1",323],["autoscout24",330]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const log = needleNot === false && needle === '' && delay === undefined
        ? console.log
        : undefined;
    const reNeedle = safe.patternToRegex(needle);
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( log !== undefined ) {
                log('uBO: setTimeout("%s", %s)', a, b);
            } else {
                let defuse;
                if ( needle !== '' ) {
                    defuse = reNeedle.test(a) !== needleNot;
                }
                if ( defuse !== false && delay !== undefined ) {
                    defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
                }
                if ( defuse ) {
                    args[0] = function(){};
                }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
    scriptletGlobals.set('safeSelf', safe);
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
