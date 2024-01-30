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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["null)","10"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["offsetParent"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["instance.check","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["()","0"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["ai_adb"],["t()","0"],["$"],["getComputedStyle","2000"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["offsetLeft"],[".show()","1000"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],[".length","2000"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["setAntiAb"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["atob"],["devtool"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x","5000"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["focus.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,10,11]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,137]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,162]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,267]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["teltarif.de",5],["economictimes.indiatimes.com",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["bluedrake42.com",7],["streamservicehd.click",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["newsrade.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["freethesaurus.com",9],["thefreedictionary.com",9],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["tinhocdongthap.com",11],["sakarnewz.com",11],["downloadr.in",11],["topcomicporno.com",11],["dongknows.com",11],["traderepublic.community",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["jeep-cj.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["mbc2.live",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["mangapt.com",11],["seriesperu.com",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,266]],["topsporter.net",[11,266]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["hq-links.com",11],["mobilkulup.com",11],["esopress.com",11],["rttar.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["surfsees.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["blackhatworld.com",11],["bizdustry.com",11],["storefront.com.ng",11],["pkbiosfix.com",11],["casi3.xyz",11],["geektime.co.il",12],["bild.de",13],["mediafire.com",14],["wcoanimedub.tv",15],["wcoforever.net",15],["openspeedtest.com",15],["addtobucketlist.com",15],["3dzip.org",[15,89]],["ilmeteo.it",15],["wcoforever.com",15],["comprovendolibri.it",15],["healthelia.com",15],["keephealth.info",16],["australianfrequentflyer.com.au",17],["afreesms.com",18],["kinoger.re",18],["laksa19.github.io",18],["javcl.com",18],["upvideo.to",18],["tvlogy.to",18],["live.dragaoconnect.net",18],["beststremo.com",18],["seznam.cz",18],["seznamzpravy.cz",18],["xerifetech.com",18],["wallpapershome.com",20],["ville-ideale.fr",21],["calciomercato.it",22],["calciomercato.com",23],["bersamatekno.com",23],["hotpornfile.org",23],["robloxscripts.com",23],["coolsoft.altervista.org",23],["worldcupfootball.me",[23,28]],["hackedonlinegames.com",23],["jkoding.xyz",23],["settlersonlinemaps.com",23],["magdownload.org",23],["kpkuang.org",23],["shareus.site",23],["crypto4yu.com",23],["faucetwork.space",23],["thenightwithoutthedawn.blogspot.com",23],["entutes.com",23],["claimlite.club",23],["bazadecrypto.com",[23,311]],["whosampled.com",24],["imgkings.com",25],["pornvideotop.com",25],["krotkoosporcie.pl",25],["anghami.com",26],["wired.com",27],["tutele.sx",28],["footyhunter3.xyz",28],["magesypro.pro",[29,30]],["audiotools.pro",30],["magesy.blog",30],["audioztools.com",[30,31]],["altblogger.net",31],["hl-live.de",31],["satoshi-win.xyz",31],["encurtandourl.com",[31,154]],["freedeepweb.blogspot.com",31],["freesoft.id",31],["zcteam.id",31],["www-daftarharga.blogspot.com",31],["ear-phone-review.com",31],["telefullenvivo.com",31],["listatv.pl",31],["ltc-faucet.xyz",31],["coin-profits.xyz",31],["relampagomovies.com",31],["katestube.com",32],["short.pe",32],["footystreams.net",32],["seattletimes.com",33],["yiv.com",34],["globalrph.com",35],["e-glossa.it",36],["java-forum.org",37],["comunidadgzone.es",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["plex-guide.de",37],["healthtune.site",37],["gewinde-normen.de",37],["tucinehd.com",37],["freewebscript.com",38],["webcheats.com.br",39],["gala.fr",41],["gentside.com",41],["geo.fr",41],["hbrfrance.fr",41],["nationalgeographic.fr",41],["ohmymag.com",41],["serengo.net",41],["vsd.fr",41],["updato.com",[42,59]],["methbox.com",43],["daizurin.com",43],["pendekarsubs.us",43],["dreamfancy.org",43],["rysafe.blogspot.com",43],["techacode.com",43],["toppng.com",43],["th-world.com",43],["avjamack.com",43],["avjamak.net",43],["tickzoo.tv",44],["dlhd.sx",45],["embedstream.me",45],["yts-subs.net",45],["cnnamador.com",46],["nudecelebforum.com",47],["pronpic.org",48],["thewebflash.com",49],["discordfastfood.com",49],["xup.in",49],["popularmechanics.com",50],["op.gg",51],["lequipe.fr",52],["jellynote.com",53],["eporner.com",55],["pornbimbo.com",56],["allmonitors24.com",56],["4j.com",56],["avoiderrors.com",57],["cgtips.org",[57,211]],["sitarchive.com",57],["livenewsof.com",57],["topnewsshow.com",57],["gatcha.org",57],["empregoestagios.com",57],["everydayonsales.com",57],["kusonime.com",57],["aagmaal.xyz",57],["suicidepics.com",57],["codesnail.com",57],["codingshiksha.com",57],["graphicux.com",57],["hardcoregames.ca",57],["asyadrama.com",57],["bitcoinegypt.news",57],["citychilli.com",57],["talkjarvis.com",57],["hdmotori.it",58],["femdomtb.com",60],["camhub.cc",60],["bobs-tube.com",60],["ru-xvideos.me",60],["pornfd.com",60],["popno-tour.net",60],["molll.mobi",60],["watchmdh.to",60],["camwhores.tv",60],["elfqrin.com",61],["satcesc.com",62],["apfelpatient.de",62],["lusthero.com",63],["m2list.com",64],["embed.nana2play.com",64],["elahmad.com",64],["dofusports.xyz",64],["dallasnews.com",65],["lnk.news",66],["lnk.parts",66],["efukt.com",67],["wendycode.com",67],["springfieldspringfield.co.uk",68],["porndoe.com",69],["smsget.net",[70,71]],["kjanime.net",72],["gioialive.it",73],["classicreload.com",74],["chicoer.com",75],["bostonherald.com",75],["dailycamera.com",75],["gomiblog.com",76],["maxcheaters.com",77],["rbxoffers.com",77],["mhn.quest",77],["postimees.ee",77],["police.community",77],["gisarea.com",77],["schaken-mods.com",77],["theclashify.com",77],["newscon.org",77],["txori.com",77],["olarila.com",77],["deletedspeedstreams.blogspot.com",77],["schooltravelorganiser.com",77],["xhardhempus.net",77],["sportsplays.com",78],["deinesexfilme.com",80],["einfachtitten.com",80],["halloporno.com",80],["herzporno.com",80],["lesbenhd.com",80],["milffabrik.com",[80,242]],["porn-monkey.com",80],["porndrake.com",80],["pornhubdeutsch.net",80],["pornoaffe.com",80],["pornodavid.com",80],["pornoente.tv",[80,242]],["pornofisch.com",80],["pornofelix.com",80],["pornohammer.com",80],["pornohelm.com",80],["pornoklinge.com",80],["pornotom.com",[80,242]],["pornotommy.com",80],["pornovideos-hd.com",80],["pornozebra.com",[80,242]],["xhamsterdeutsch.xyz",80],["xnxx-sexfilme.com",80],["zerion.cc",80],["letribunaldunet.fr",81],["vladan.fr",81],["live-tv-channels.org",82],["eslfast.com",83],["freegamescasual.com",84],["tcpvpn.com",85],["oko.sh",85],["timesnownews.com",85],["timesnowhindi.com",85],["timesnowmarathi.com",85],["zoomtventertainment.com",85],["xxxuno.com",86],["sholah.net",87],["2rdroid.com",87],["bisceglielive.it",88],["pandajogosgratis.com.br",90],["5278.cc",91],["tonspion.de",93],["duplichecker.com",94],["plagiarismchecker.co",94],["plagiarismdetector.net",94],["searchenginereports.net",94],["smallseotools.com",94],["giallozafferano.it",95],["autojournal.fr",95],["autoplus.fr",95],["sportauto.fr",95],["linkspaid.com",96],["proxydocker.com",96],["beeimg.com",[97,98]],["emturbovid.com",98],["ftlauderdalebeachcam.com",99],["ftlauderdalewebcam.com",99],["juneauharborwebcam.com",99],["keywestharborwebcam.com",99],["kittycatcam.com",99],["mahobeachcam.com",99],["miamiairportcam.com",99],["morganhillwebcam.com",99],["njwildlifecam.com",99],["nyharborwebcam.com",99],["paradiseislandcam.com",99],["pompanobeachcam.com",99],["portbermudawebcam.com",99],["portcanaveralwebcam.com",99],["portevergladeswebcam.com",99],["portmiamiwebcam.com",99],["portnywebcam.com",99],["portnassauwebcam.com",99],["portstmaartenwebcam.com",99],["portstthomaswebcam.com",99],["porttampawebcam.com",99],["sxmislandcam.com",99],["gearingcommander.com",99],["themes-dl.com",99],["badassdownloader.com",99],["badasshardcore.com",99],["badassoftcore.com",99],["nulljungle.com",99],["teevee.asia",99],["otakukan.com",99],["linksht.com",101],["generate.plus",102],["calculate.plus",102],["avcesar.com",103],["audiotag.info",104],["tudigitale.it",105],["ibcomputing.com",106],["eodev.com",107],["legia.net",108],["acapellas4u.co.uk",109],["streamhentaimovies.com",110],["konten.co.id",111],["diariodenavarra.es",112],["scripai.com",112],["myfxbook.com",112],["whatfontis.com",112],["xiaomifans.pl",113],["eletronicabr.com",113],["optifine.net",114],["luzernerzeitung.ch",115],["tagblatt.ch",115],["spellcheck.net",116],["spellchecker.net",116],["spellweb.com",116],["ableitungsrechner.net",117],["alternet.org",118],["gourmetsupremacy.com",118],["imtranslator.net",119],["shrib.com",120],["pandafiles.com",121],["vidia.tv",[121,143]],["hortonanderfarom.blogspot.com",121],["clarifystraight.com",121],["tutelehd3.xyz",122],["mega4upload.com",122],["coolcast2.com",122],["techclips.net",122],["earthquakecensus.com",122],["footyhunter.lol",122],["gamerarcades.com",122],["poscitech.click",122],["starlive.stream",122],["utopianwilderness.com",122],["wecast.to",122],["sportbar.live",122],["lordchannel.com",122],["play-old-pc-games.com",123],["scrin.org",124],["tunovelaligera.com",125],["tapchipi.com",125],["cuitandokter.com",125],["tech-blogs.com",125],["cardiagn.com",125],["dcleakers.com",125],["esgeeks.com",125],["pugliain.net",125],["uplod.net",125],["worldfreeware.com",125],["fikiri.net",125],["myhackingworld.com",125],["phoenixfansub.com",125],["freecourseweb.com",126],["devcourseweb.com",126],["coursewikia.com",126],["courseboat.com",126],["coursehulu.com",126],["lne.es",130],["pornult.com",131],["webcamsdolls.com",131],["bitcotasks.com",131],["adsy.pw",131],["playstore.pw",131],["exactpay.online",131],["thothd.to",131],["proplanta.de",132],["hydrogenassociation.org",133],["ludigames.com",133],["sportitalialive.com",133],["tii.la",133],["made-by.org",133],["xenvn.com",133],["worldtravelling.com",133],["igirls.in",133],["technichero.com",133],["roshiyatech.my.id",133],["24sport.stream",133],["aeroxplorer.com",133],["mad4wheels.com",134],["logi.im",134],["emailnator.com",134],["textograto.com",135],["voyageforum.com",136],["hmc-id.blogspot.com",136],["jemerik.com",136],["myabandonware.com",136],["chatta.it",138],["ketubanjiwa.com",139],["nsfw247.to",140],["funzen.net",140],["fighter.stream",140],["ilclubdellericette.it",140],["hubstream.in",140],["extremereportbot.com",141],["getintopc.com",142],["qoshe.com",144],["lowellsun.com",145],["mamadu.pl",145],["dobrapogoda24.pl",145],["motohigh.pl",145],["namasce.pl",145],["ultimate-catch.eu",146],["cpopchanelofficial.com",147],["creditcardgenerator.com",148],["creditcardrush.com",148],["bostoncommons.net",148],["thejobsmovie.com",148],["livsavr.co",148],["nilopolisonline.com.br",149],["mesquitaonline.com",149],["yellowbridge.com",149],["socialgirls.im",150],["yaoiotaku.com",151],["camhub.world",152],["moneyhouse.ch",153],["ihow.info",154],["filesus.com",154],["sturls.com",154],["re.two.re",154],["turbo1.co",154],["cartoonsarea.xyz",154],["valeronevijao.com",155],["cigarlessarefy.com",155],["figeterpiazine.com",155],["yodelswartlike.com",155],["generatesnitrosate.com",155],["crownmakermacaronicism.com",155],["chromotypic.com",155],["gamoneinterrupted.com",155],["metagnathtuggers.com",155],["wolfdyslectic.com",155],["rationalityaloelike.com",155],["sizyreelingly.com",155],["simpulumlamerop.com",155],["urochsunloath.com",155],["monorhinouscassaba.com",155],["counterclockwisejacky.com",155],["35volitantplimsoles5.com",155],["scatch176duplicities.com",155],["antecoxalbobbing1010.com",155],["boonlessbestselling244.com",155],["cyamidpulverulence530.com",155],["guidon40hyporadius9.com",155],["449unceremoniousnasoseptal.com",155],["19turanosephantasia.com",155],["30sensualizeexpression.com",155],["321naturelikefurfuroid.com",155],["745mingiestblissfully.com",155],["availedsmallest.com",155],["greaseball6eventual20.com",155],["toxitabellaeatrebates306.com",155],["20demidistance9elongations.com",155],["audaciousdefaulthouse.com",155],["fittingcentermondaysunday.com",155],["fraudclatterflyingcar.com",155],["launchreliantcleaverriver.com",155],["matriculant401merited.com",155],["realfinanceblogcenter.com",155],["reputationsheriffkennethsand.com",155],["telyn610zoanthropy.com",155],["tubelessceliolymph.com",155],["tummulerviolableness.com",155],["un-block-voe.net",155],["v-o-e-unblock.com",155],["voe-un-block.com",155],["voeun-block.net",155],["voeunbl0ck.com",155],["voeunblck.com",155],["voeunblk.com",155],["voeunblock.com",155],["voeunblock1.com",155],["voeunblock2.com",155],["voeunblock3.com",155],["agefi.fr",156],["cariskuy.com",157],["letras2.com",157],["yusepjaelani.blogspot.com",158],["letras.mus.br",159],["cheatermad.com",160],["mtlurb.com",161],["port.hu",162],["acdriftingpro.com",162],["flight-report.com",162],["forumdz.com",162],["abandonmail.com",162],["flmods.com",162],["zilinak.sk",162],["projectfreetv.stream",162],["hotdesimms.com",162],["pdfaid.com",162],["mconverter.eu",162],["dzeko11.net",[162,266]],["mail.com",162],["expresskaszubski.pl",162],["moegirl.org.cn",162],["onemanhua.com",163],["t3n.de",164],["allindiaroundup.com",165],["vectorizer.io",166],["smgplaza.com",166],["ftuapps.dev",166],["onehack.us",166],["thapcam.net",166],["thefastlaneforum.com",167],["trade2win.com",168],["gmodleaks.com",168],["modagamers.com",169],["freemagazines.top",169],["straatosphere.com",169],["nullpk.com",169],["adslink.pw",169],["downloadudemy.com",169],["picgiraffe.com",169],["weadown.com",169],["freepornsex.net",169],["nurparatodos.com.ar",169],["librospreuniversitariospdf.blogspot.com",170],["msdos-games.com",170],["forexeen.us",170],["khsm.io",170],["girls-like.me",170],["webcreator-journal.com",170],["nu6i-bg-net.com",170],["routech.ro",171],["hokej.net",171],["turkmmo.com",172],["palermotoday.it",173],["baritoday.it",173],["trentotoday.it",173],["agrigentonotizie.it",173],["anconatoday.it",173],["arezzonotizie.it",173],["avellinotoday.it",173],["bresciatoday.it",173],["brindisireport.it",173],["casertanews.it",173],["cataniatoday.it",173],["cesenatoday.it",173],["chietitoday.it",173],["forlitoday.it",173],["frosinonetoday.it",173],["genovatoday.it",173],["ilpescara.it",173],["ilpiacenza.it",173],["latinatoday.it",173],["lecceprima.it",173],["leccotoday.it",173],["livornotoday.it",173],["messinatoday.it",173],["milanotoday.it",173],["modenatoday.it",173],["monzatoday.it",173],["novaratoday.it",173],["padovaoggi.it",173],["parmatoday.it",173],["perugiatoday.it",173],["pisatoday.it",173],["quicomo.it",173],["ravennatoday.it",173],["reggiotoday.it",173],["riminitoday.it",173],["romatoday.it",173],["salernotoday.it",173],["sondriotoday.it",173],["sportpiacenza.it",173],["ternitoday.it",173],["today.it",173],["torinotoday.it",173],["trevisotoday.it",173],["triesteprima.it",173],["udinetoday.it",173],["veneziatoday.it",173],["vicenzatoday.it",173],["thumpertalk.com",174],["arkcod.org",174],["facciabuco.com",175],["softx64.com",176],["thelayoff.com",177],["shorterall.com",177],["blog24.me",177],["maxstream.video",177],["maxlinks.online",177],["tvepg.eu",177],["pstream.net",178],["libreriamo.it",179],["medebooks.xyz",179],["tutorials-technology.info",179],["mashtips.com",179],["marriedgames.com.br",179],["4allprograms.me",179],["nurgsm.com",179],["certbyte.com",179],["plugincrack.com",179],["gamingdeputy.com",179],["freewebcart.com",179],["dailymaverick.co.za",180],["apps2app.com",181],["fm-arena.com",182],["enit.in",183],["financerites.com",183],["fadedfeet.com",184],["homeculina.com",184],["ineedskin.com",184],["kenzo-flowertag.com",184],["lawyex.co",184],["mdn.lol",184],["bitzite.com",185],["my-code4you.blogspot.com",186],["leakgaming.fr",187],["vrcmods.com",188],["osuskinner.com",188],["osuskins.net",188],["pentruea.com",[189,190]],["mchacks.net",191],["why-tech.it",192],["compsmag.com",193],["tapetus.pl",194],["gaystream.online",195],["embedv.net",195],["fslinks.org",195],["v6embed.xyz",195],["vgplayer.xyz",195],["vid-guard.com",195],["autoroad.cz",196],["brawlhalla.fr",196],["tecnobillo.com",196],["sexcamfreeporn.com",197],["breatheheavy.com",198],["wenxuecity.com",199],["key-hub.eu",200],["fabioambrosi.it",201],["tattle.life",202],["emuenzen.de",202],["terrylove.com",202],["mynet.com",203],["cidade.iol.pt",204],["fantacalcio.it",205],["hentaifreak.org",206],["hypebeast.com",207],["krankheiten-simulieren.de",208],["catholic.com",209],["3dmodelshare.org",210],["gourmetscans.net",211],["techinferno.com",212],["phuongtrinhhoahoc.com",213],["ibeconomist.com",214],["bookriot.com",215],["purposegames.com",216],["schoolcheats.net",216],["globo.com",217],["latimes.com",217],["claimrbx.gg",218],["perelki.net",219],["vpn-anbieter-vergleich-test.de",220],["livingincebuforums.com",221],["paperzonevn.com",222],["alltechnerd.com",223],["malaysianwireless.com",224],["erinsakura.com",225],["infofuge.com",225],["freejav.guru",225],["novelmultiverse.com",225],["fritidsmarkedet.dk",226],["maskinbladet.dk",226],["15min.lt",227],["lewdninja.com",228],["lewd.ninja",228],["baddiehub.com",229],["mr9soft.com",230],["21porno.com",231],["adult-sex-gamess.com",232],["hentaigames.app",232],["mobilesexgamesx.com",232],["mysexgamer.com",232],["porngameshd.com",232],["sexgamescc.com",232],["xnxx-sex-videos.com",232],["f2movies.to",233],["freeporncave.com",234],["tubsxxx.com",235],["pornojenny.com",236],["subtitle.one",237],["manga18fx.com",238],["freebnbcoin.com",238],["sextvx.com",239],["studydhaba.com",240],["freecourse.tech",240],["victor-mochere.com",240],["papunika.com",240],["mobilanyheter.net",240],["prajwaldesai.com",240],["muztext.com",241],["pornohans.com",242],["nursexfilme.com",242],["pornohirsch.net",242],["xhamster-sexvideos.com",242],["pornoschlange.com",242],["hdpornos.net",242],["gutesexfilme.com",242],["short1.site",242],["zona-leros.com",242],["charbelnemnom.com",243],["online-fix.me",244],["gamersdiscussionhub.com",245],["owlzo.com",246],["q1003.com",247],["blogpascher.com",248],["testserver.pro",249],["lifestyle.bg",249],["money.bg",249],["news.bg",249],["topsport.bg",249],["webcafe.bg",249],["mgnet.xyz",250],["advertiserandtimes.co.uk",251],["xvideos2020.me",252],["111.90.159.132",253],["techsolveprac.com",254],["joomlabeginner.com",255],["largescaleforums.com",256],["dubznetwork.com",257],["mundodonghua.com",257],["hentaidexy.com",258],["oceanplay.org",259],["code2care.org",260],["xxxxsx.com",262],["ngontinh24.com",263],["panel.freemcserver.net",264],["idevicecentral.com",265],["zona11.com",266],["scsport.live",266],["mangacrab.com",268],["idnes.cz",269],["viefaucet.com",270],["cloud-computing-central.com",271],["afk.guide",272],["businessnamegenerator.com",273],["derstandard.at",274],["derstandard.de",274],["rocketnews24.com",275],["soranews24.com",275],["youpouch.com",275],["ilsole24ore.com",276],["hentaiporn.one",277],["infokik.com",278],["daemonanime.net",279],["daemon-hentai.com",279],["deezer.com",280],["fosslinux.com",281],["shrdsk.me",282],["examword.com",283],["sempreupdate.com.br",283],["tribuna.com",284],["trendsderzukunft.de",285],["gal-dem.com",285],["lostineu.eu",285],["oggitreviso.it",285],["speisekarte.de",285],["mixed.de",285],["lightnovelspot.com",[286,287]],["lightnovelworld.com",[286,287]],["novelpub.com",[286,287]],["webnovelpub.com",[286,287]],["mail.yahoo.com",288],["hwzone.co.il",289],["nammakalvi.com",290],["javmoon.me",291],["c2g.at",292],["terafly.me",292],["dktechnicalmate.com",293],["recipahi.com",293],["converter-btc.world",293],["kaystls.site",294],["aquarius-horoscopes.com",295],["cancer-horoscopes.com",295],["dubipc.blogspot.com",295],["echoes.gr",295],["engel-horoskop.de",295],["freegames44.com",295],["fuerzasarmadas.eu",295],["gemini-horoscopes.com",295],["jurukunci.net",295],["krebs-horoskop.com",295],["leo-horoscopes.com",295],["maliekrani.com",295],["nklinks.click",295],["ourenseando.es",295],["pisces-horoscopes.com",295],["radio-en-direct.fr",295],["sagittarius-horoscopes.com",295],["scorpio-horoscopes.com",295],["singlehoroskop-loewe.de",295],["skat-karten.de",295],["skorpion-horoskop.com",295],["taurus-horoscopes.com",295],["the1security.com",295],["torrentmovies.online",295],["virgo-horoscopes.com",295],["zonamarela.blogspot.com",295],["yoima.hatenadiary.com",295],["vpntester.org",296],["watchhentai.net",297],["japscan.lol",298],["digitask.ru",299],["tempumail.com",300],["sexvideos.host",301],["10alert.com",303],["cryptstream.de",304],["nydus.org",304],["techhelpbd.com",305],["fapdrop.com",306],["cellmapper.net",307],["hdrez.com",308],["youwatch-serie.com",308],["printablecreative.com",309],["comohoy.com",310],["leak.sx",310],["pornleaks.in",310],["merlininkazani.com",310],["faindx.com",312],["j91.asia",313],["jeniusplay.com",314],["indianyug.com",315],["rgb.vn",315],["needrom.com",316],["criptologico.com",317],["megadrive-emulator.com",318],["eromanga-show.com",319],["hentai-one.com",319],["hentaipaw.com",319],["10minuteemails.com",320],["luxusmail.org",320],["w3cub.com",321],["bangpremier.com",322],["nyaa.iss.ink",323],["tnp98.xyz",325],["freepdfcomic.com",326],["memedroid.com",327],["animesync.org",328],["karaoketexty.cz",329],["resortcams.com",330],["mjakmama24.pl",332],["security-demo.extrahop.com",333]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,8]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",7],["eztv",7],["sushi-scan",11],["spigotunlocked",11],["ahmedmode",11],["kissasian",16],["rp5",18],["mma-core",19],["writedroid",23],["yts",28],["720pstream",28],["1stream",28],["magesy",29],["thefmovies",32],["fxporn69",37],["aliancapes",37],["urlcero",40],["totaldebrid",43],["sandrives",43],["oploverz",44],["pouvideo",54],["povvideo",54],["povw1deo",54],["povwideo",54],["powv1deo",54],["powvibeo",54],["powvideo",54],["powvldeo",54],["tubsexer",60],["porno-tour",60],["lenkino",60],["pornomoll",60],["camsclips",60],["m4ufree",64],["crackstreams",64],["telerium",79],["pandafreegames",92],["thoptv",100],["brainly",107],["streameast",122],["thestreameast",122],["daddylivehd",122],["solvetube",127],["hdfilme",128],["pornhub",129],["wcofun",136],["bollyholic",140],["gotxx",154],["turkanime",155],["voe-unblock",155],["khatrimaza",169],["pogolinks",169],["popcornstream",171],["shortzzy",179],["vembed",195],["xhamsterdeutsch",242],["privatemoviez",245],["gmx",261],["lightnovelpub",[286,287]],["camcaps",302],["drivebot",324],["thenextplanet1",325],["autoscout24",331]]);

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
