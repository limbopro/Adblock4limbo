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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["null)","10"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["ai_adb"],["t()","0"],["$"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["delay"],["detectAdBlocker"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["offsetLeft"],[".show()","1000"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["setAntiAb"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["atob"],["devtool"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x","5000"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["EzoIvent"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,10,11]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,134]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,159]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,269]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["teltarif.de",5],["economictimes.indiatimes.com",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["bluedrake42.com",7],["streamservicehd.click",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["newsrade.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["freethesaurus.com",9],["thefreedictionary.com",9],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["tinhocdongthap.com",11],["sakarnewz.com",11],["downloadr.in",11],["topcomicporno.com",11],["dongknows.com",11],["traderepublic.community",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["jeep-cj.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["mbc2.live",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["mangapt.com",11],["seriesperu.com",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,268]],["topsporter.net",[11,268]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["hq-links.com",11],["mobilkulup.com",11],["esopress.com",11],["rttar.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["surfsees.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["blackhatworld.com",11],["bizdustry.com",11],["storefront.com.ng",11],["pkbiosfix.com",11],["casi3.xyz",11],["geektime.co.il",12],["mediafire.com",13],["wcoanimedub.tv",14],["wcoforever.net",14],["openspeedtest.com",14],["addtobucketlist.com",14],["3dzip.org",[14,87]],["ilmeteo.it",14],["wcoforever.com",14],["comprovendolibri.it",14],["healthelia.com",14],["keephealth.info",15],["australianfrequentflyer.com.au",16],["afreesms.com",17],["kinoger.re",17],["laksa19.github.io",17],["javcl.com",17],["tvlogy.to",17],["live.dragaoconnect.net",17],["beststremo.com",17],["seznam.cz",17],["seznamzpravy.cz",17],["xerifetech.com",17],["wallpapershome.com",19],["ville-ideale.fr",20],["calciomercato.it",21],["calciomercato.com",22],["bersamatekno.com",22],["hotpornfile.org",22],["robloxscripts.com",22],["coolsoft.altervista.org",22],["worldcupfootball.me",[22,27]],["hackedonlinegames.com",22],["jkoding.xyz",22],["cheater.ninja",22],["settlersonlinemaps.com",22],["magdownload.org",22],["kpkuang.org",22],["shareus.site",22],["crypto4yu.com",22],["faucetwork.space",22],["thenightwithoutthedawn.blogspot.com",22],["entutes.com",22],["claimlite.club",22],["bazadecrypto.com",[22,314]],["whosampled.com",23],["imgkings.com",24],["pornvideotop.com",24],["krotkoosporcie.pl",24],["anghami.com",25],["wired.com",26],["tutele.sx",27],["footyhunter3.xyz",27],["magesypro.pro",[28,29]],["audiotools.pro",29],["magesy.blog",29],["audioztools.com",[29,30]],["altblogger.net",30],["hl-live.de",30],["wohnmobilforum.de",30],["nulledbear.com",30],["satoshi-win.xyz",30],["encurtandourl.com",[30,151]],["freedeepweb.blogspot.com",30],["freesoft.id",30],["zcteam.id",30],["www-daftarharga.blogspot.com",30],["ear-phone-review.com",30],["telefullenvivo.com",30],["listatv.pl",30],["ltc-faucet.xyz",30],["coin-profits.xyz",30],["relampagomovies.com",30],["katestube.com",31],["short.pe",31],["footystreams.net",31],["seattletimes.com",32],["yiv.com",33],["globalrph.com",34],["e-glossa.it",35],["java-forum.org",36],["comunidadgzone.es",36],["mp3fy.com",36],["lebensmittelpraxis.de",36],["ebookdz.com",36],["forum-pokemon-go.fr",36],["praxis-jugendarbeit.de",36],["gdrivez.xyz",36],["dictionnaire-medical.net",36],["cle0desktop.blogspot.com",36],["up-load.io",36],["direct-link.net",36],["direkt-wissen.com",36],["keysbrasil.blogspot.com",36],["hotpress.info",36],["turkleech.com",36],["anibatch.me",36],["anime-i.com",36],["plex-guide.de",36],["healthtune.site",36],["gewinde-normen.de",36],["tucinehd.com",36],["freewebscript.com",37],["webcheats.com.br",38],["gala.fr",40],["gentside.com",40],["geo.fr",40],["hbrfrance.fr",40],["nationalgeographic.fr",40],["ohmymag.com",40],["serengo.net",40],["vsd.fr",40],["updato.com",[41,58]],["methbox.com",42],["daizurin.com",42],["pendekarsubs.us",42],["dreamfancy.org",42],["rysafe.blogspot.com",42],["techacode.com",42],["toppng.com",42],["th-world.com",42],["avjamack.com",42],["avjamak.net",42],["tickzoo.tv",43],["dlhd.sx",44],["embedstream.me",44],["yts-subs.net",44],["cnnamador.com",45],["nudecelebforum.com",46],["pronpic.org",47],["thewebflash.com",48],["discordfastfood.com",48],["xup.in",48],["popularmechanics.com",49],["op.gg",50],["lequipe.fr",51],["jellynote.com",52],["eporner.com",54],["pornbimbo.com",55],["allmonitors24.com",55],["4j.com",55],["avoiderrors.com",56],["cgtips.org",[56,213]],["sitarchive.com",56],["livenewsof.com",56],["topnewsshow.com",56],["gatcha.org",56],["empregoestagios.com",56],["everydayonsales.com",56],["kusonime.com",56],["aagmaal.xyz",56],["suicidepics.com",56],["codesnail.com",56],["codingshiksha.com",56],["graphicux.com",56],["hardcoregames.ca",56],["asyadrama.com",56],["bitcoinegypt.news",56],["citychilli.com",56],["talkjarvis.com",56],["hdmotori.it",57],["femdomtb.com",59],["camhub.cc",59],["bobs-tube.com",59],["ru-xvideos.me",59],["pornfd.com",59],["popno-tour.net",59],["molll.mobi",59],["watchmdh.to",59],["camwhores.tv",59],["elfqrin.com",60],["satcesc.com",61],["apfelpatient.de",61],["lusthero.com",62],["m2list.com",63],["embed.nana2play.com",63],["elahmad.com",63],["dofusports.xyz",63],["dallasnews.com",64],["lnk.news",65],["lnk.parts",65],["efukt.com",66],["wendycode.com",66],["springfieldspringfield.co.uk",67],["porndoe.com",68],["smsget.net",[69,70]],["kjanime.net",71],["gioialive.it",72],["classicreload.com",73],["chicoer.com",74],["bostonherald.com",74],["dailycamera.com",74],["maxcheaters.com",75],["rbxoffers.com",75],["mhn.quest",75],["leagueofgraphs.com",75],["hieunguyenphoto.com",75],["texteditor.nsspot.net",75],["postimees.ee",75],["police.community",75],["gisarea.com",75],["schaken-mods.com",75],["theclashify.com",75],["newscon.org",75],["txori.com",75],["olarila.com",75],["deletedspeedstreams.blogspot.com",75],["schooltravelorganiser.com",75],["xhardhempus.net",75],["sportsplays.com",76],["deinesexfilme.com",78],["einfachtitten.com",78],["halloporno.com",78],["herzporno.com",78],["lesbenhd.com",78],["milffabrik.com",[78,243]],["porn-monkey.com",78],["porndrake.com",78],["pornhubdeutsch.net",78],["pornoaffe.com",78],["pornodavid.com",78],["pornoente.tv",[78,243]],["pornofisch.com",78],["pornofelix.com",78],["pornohammer.com",78],["pornohelm.com",78],["pornoklinge.com",78],["pornotom.com",[78,243]],["pornotommy.com",78],["pornovideos-hd.com",78],["pornozebra.com",[78,243]],["xhamsterdeutsch.xyz",78],["xnxx-sexfilme.com",78],["zerion.cc",78],["letribunaldunet.fr",79],["vladan.fr",79],["live-tv-channels.org",80],["eslfast.com",81],["freegamescasual.com",82],["tcpvpn.com",83],["oko.sh",83],["timesnownews.com",83],["timesnowhindi.com",83],["timesnowmarathi.com",83],["zoomtventertainment.com",83],["xxxuno.com",84],["sholah.net",85],["2rdroid.com",85],["bisceglielive.it",86],["pandajogosgratis.com.br",88],["5278.cc",89],["tonspion.de",91],["duplichecker.com",92],["plagiarismchecker.co",92],["plagiarismdetector.net",92],["searchenginereports.net",92],["smallseotools.com",92],["giallozafferano.it",93],["autojournal.fr",93],["autoplus.fr",93],["sportauto.fr",93],["linkspaid.com",94],["proxydocker.com",94],["beeimg.com",[95,96]],["emturbovid.com",96],["ftlauderdalebeachcam.com",97],["ftlauderdalewebcam.com",97],["juneauharborwebcam.com",97],["keywestharborwebcam.com",97],["kittycatcam.com",97],["mahobeachcam.com",97],["miamiairportcam.com",97],["morganhillwebcam.com",97],["njwildlifecam.com",97],["nyharborwebcam.com",97],["paradiseislandcam.com",97],["pompanobeachcam.com",97],["portbermudawebcam.com",97],["portcanaveralwebcam.com",97],["portevergladeswebcam.com",97],["portmiamiwebcam.com",97],["portnywebcam.com",97],["portnassauwebcam.com",97],["portstmaartenwebcam.com",97],["portstthomaswebcam.com",97],["porttampawebcam.com",97],["sxmislandcam.com",97],["gearingcommander.com",97],["themes-dl.com",97],["badassdownloader.com",97],["badasshardcore.com",97],["badassoftcore.com",97],["nulljungle.com",97],["teevee.asia",97],["otakukan.com",97],["linksht.com",99],["generate.plus",100],["calculate.plus",100],["avcesar.com",101],["audiotag.info",102],["tudigitale.it",103],["ibcomputing.com",104],["eodev.com",105],["legia.net",106],["acapellas4u.co.uk",107],["streamhentaimovies.com",108],["konten.co.id",109],["diariodenavarra.es",110],["scripai.com",110],["myfxbook.com",110],["whatfontis.com",110],["xiaomifans.pl",111],["eletronicabr.com",111],["optifine.net",112],["luzernerzeitung.ch",113],["tagblatt.ch",113],["spellcheck.net",114],["spellchecker.net",114],["spellweb.com",114],["ableitungsrechner.net",115],["alternet.org",116],["gourmetsupremacy.com",116],["imtranslator.net",117],["shrib.com",118],["pandafiles.com",119],["vidia.tv",[119,140]],["hortonanderfarom.blogspot.com",119],["clarifystraight.com",119],["tutelehd3.xyz",120],["mega4upload.com",120],["coolcast2.com",120],["techclips.net",120],["earthquakecensus.com",120],["footyhunter.lol",120],["gamerarcades.com",120],["poscitech.click",120],["starlive.stream",120],["utopianwilderness.com",120],["wecast.to",120],["sportbar.live",120],["lordchannel.com",120],["play-old-pc-games.com",121],["tunovelaligera.com",122],["tapchipi.com",122],["cuitandokter.com",122],["tech-blogs.com",122],["cardiagn.com",122],["dcleakers.com",122],["esgeeks.com",122],["pugliain.net",122],["uplod.net",122],["worldfreeware.com",122],["fikiri.net",122],["myhackingworld.com",122],["phoenixfansub.com",122],["freecourseweb.com",123],["devcourseweb.com",123],["coursewikia.com",123],["courseboat.com",123],["coursehulu.com",123],["lne.es",127],["pornult.com",128],["webcamsdolls.com",128],["bitcotasks.com",128],["adsy.pw",128],["playstore.pw",128],["exactpay.online",128],["thothd.to",128],["proplanta.de",129],["hydrogenassociation.org",130],["ludigames.com",130],["sportitalialive.com",130],["tii.la",130],["made-by.org",130],["xenvn.com",130],["worldtravelling.com",130],["igirls.in",130],["technichero.com",130],["roshiyatech.my.id",130],["24sport.stream",130],["aeroxplorer.com",130],["mad4wheels.com",131],["logi.im",131],["emailnator.com",131],["textograto.com",132],["voyageforum.com",133],["hmc-id.blogspot.com",133],["jemerik.com",133],["myabandonware.com",133],["chatta.it",135],["ketubanjiwa.com",136],["nsfw247.to",137],["funzen.net",137],["fighter.stream",137],["ilclubdellericette.it",137],["hubstream.in",137],["extremereportbot.com",138],["getintopc.com",139],["qoshe.com",141],["lowellsun.com",142],["mamadu.pl",142],["dobrapogoda24.pl",142],["motohigh.pl",142],["namasce.pl",142],["ultimate-catch.eu",143],["cpopchanelofficial.com",144],["creditcardgenerator.com",145],["creditcardrush.com",145],["bostoncommons.net",145],["thejobsmovie.com",145],["livsavr.co",145],["nilopolisonline.com.br",146],["mesquitaonline.com",146],["yellowbridge.com",146],["socialgirls.im",147],["yaoiotaku.com",148],["camhub.world",149],["moneyhouse.ch",150],["ihow.info",151],["filesus.com",151],["sturls.com",151],["re.two.re",151],["turbo1.co",151],["cartoonsarea.xyz",151],["valeronevijao.com",152],["cigarlessarefy.com",152],["figeterpiazine.com",152],["yodelswartlike.com",152],["generatesnitrosate.com",152],["crownmakermacaronicism.com",152],["chromotypic.com",152],["gamoneinterrupted.com",152],["metagnathtuggers.com",152],["wolfdyslectic.com",152],["rationalityaloelike.com",152],["sizyreelingly.com",152],["simpulumlamerop.com",152],["urochsunloath.com",152],["monorhinouscassaba.com",152],["counterclockwisejacky.com",152],["35volitantplimsoles5.com",152],["scatch176duplicities.com",152],["antecoxalbobbing1010.com",152],["boonlessbestselling244.com",152],["cyamidpulverulence530.com",152],["guidon40hyporadius9.com",152],["449unceremoniousnasoseptal.com",152],["19turanosephantasia.com",152],["30sensualizeexpression.com",152],["321naturelikefurfuroid.com",152],["745mingiestblissfully.com",152],["availedsmallest.com",152],["greaseball6eventual20.com",152],["toxitabellaeatrebates306.com",152],["20demidistance9elongations.com",152],["audaciousdefaulthouse.com",152],["fittingcentermondaysunday.com",152],["fraudclatterflyingcar.com",152],["launchreliantcleaverriver.com",152],["matriculant401merited.com",152],["realfinanceblogcenter.com",152],["reputationsheriffkennethsand.com",152],["telyn610zoanthropy.com",152],["tubelessceliolymph.com",152],["tummulerviolableness.com",152],["un-block-voe.net",152],["v-o-e-unblock.com",152],["voe-un-block.com",152],["voeun-block.net",152],["voeunbl0ck.com",152],["voeunblck.com",152],["voeunblk.com",152],["voeunblock.com",152],["voeunblock1.com",152],["voeunblock2.com",152],["voeunblock3.com",152],["agefi.fr",153],["cariskuy.com",154],["letras2.com",154],["yusepjaelani.blogspot.com",155],["letras.mus.br",156],["cheatermad.com",157],["mtlurb.com",158],["port.hu",159],["acdriftingpro.com",159],["flight-report.com",159],["forumdz.com",159],["abandonmail.com",159],["flmods.com",159],["zilinak.sk",159],["projectfreetv.stream",159],["hotdesimms.com",159],["pdfaid.com",159],["mconverter.eu",159],["dzeko11.net",[159,268]],["mail.com",159],["expresskaszubski.pl",159],["moegirl.org.cn",159],["onemanhua.com",160],["t3n.de",161],["allindiaroundup.com",162],["vectorizer.io",163],["smgplaza.com",163],["ftuapps.dev",163],["onehack.us",163],["thapcam.net",163],["thefastlaneforum.com",164],["trade2win.com",165],["gmodleaks.com",165],["modagamers.com",166],["freemagazines.top",166],["straatosphere.com",166],["nullpk.com",166],["adslink.pw",166],["downloadudemy.com",166],["picgiraffe.com",166],["weadown.com",166],["freepornsex.net",166],["nurparatodos.com.ar",166],["librospreuniversitariospdf.blogspot.com",167],["msdos-games.com",167],["forexeen.us",167],["khsm.io",167],["girls-like.me",167],["webcreator-journal.com",167],["nu6i-bg-net.com",167],["routech.ro",168],["hokej.net",168],["turkmmo.com",169],["palermotoday.it",170],["baritoday.it",170],["trentotoday.it",170],["agrigentonotizie.it",170],["anconatoday.it",170],["arezzonotizie.it",170],["avellinotoday.it",170],["bresciatoday.it",170],["brindisireport.it",170],["casertanews.it",170],["cataniatoday.it",170],["cesenatoday.it",170],["chietitoday.it",170],["forlitoday.it",170],["frosinonetoday.it",170],["genovatoday.it",170],["ilpescara.it",170],["ilpiacenza.it",170],["latinatoday.it",170],["lecceprima.it",170],["leccotoday.it",170],["livornotoday.it",170],["messinatoday.it",170],["milanotoday.it",170],["modenatoday.it",170],["monzatoday.it",170],["novaratoday.it",170],["padovaoggi.it",170],["parmatoday.it",170],["perugiatoday.it",170],["pisatoday.it",170],["quicomo.it",170],["ravennatoday.it",170],["reggiotoday.it",170],["riminitoday.it",170],["romatoday.it",170],["salernotoday.it",170],["sondriotoday.it",170],["sportpiacenza.it",170],["ternitoday.it",170],["today.it",170],["torinotoday.it",170],["trevisotoday.it",170],["triesteprima.it",170],["udinetoday.it",170],["veneziatoday.it",170],["vicenzatoday.it",170],["thumpertalk.com",171],["arkcod.org",171],["facciabuco.com",172],["softx64.com",173],["thelayoff.com",174],["shorterall.com",174],["blog24.me",174],["maxstream.video",174],["maxlinks.online",174],["tvepg.eu",174],["pstream.net",175],["libreriamo.it",176],["postazap.com",176],["medebooks.xyz",176],["tutorials-technology.info",176],["mashtips.com",176],["marriedgames.com.br",176],["4allprograms.me",176],["nurgsm.com",176],["certbyte.com",176],["plugincrack.com",176],["gamingdeputy.com",176],["freewebcart.com",176],["dailymaverick.co.za",177],["apps2app.com",178],["fm-arena.com",179],["tradersunion.com",180],["tandess.com",181],["visionpapers.org",182],["spontacts.com",183],["enit.in",184],["financerites.com",184],["fadedfeet.com",185],["homeculina.com",185],["ineedskin.com",185],["kenzo-flowertag.com",185],["lawyex.co",185],["mdn.lol",185],["bitzite.com",186],["coingraph.us",187],["impact24.us",187],["my-code4you.blogspot.com",188],["leakgaming.fr",189],["vrcmods.com",190],["osuskinner.com",190],["osuskins.net",190],["pentruea.com",[191,192]],["mchacks.net",193],["why-tech.it",194],["compsmag.com",195],["tapetus.pl",196],["gaystream.online",197],["embedv.net",197],["fslinks.org",197],["v6embed.xyz",197],["vgplayer.xyz",197],["vid-guard.com",197],["autoroad.cz",198],["brawlhalla.fr",198],["tecnobillo.com",198],["sexcamfreeporn.com",199],["breatheheavy.com",200],["wenxuecity.com",201],["key-hub.eu",202],["fabioambrosi.it",203],["tattle.life",204],["emuenzen.de",204],["terrylove.com",204],["mynet.com",205],["cidade.iol.pt",206],["fantacalcio.it",207],["hentaifreak.org",208],["hypebeast.com",209],["krankheiten-simulieren.de",210],["catholic.com",211],["3dmodelshare.org",212],["gourmetscans.net",213],["techinferno.com",214],["ibeconomist.com",215],["bookriot.com",216],["purposegames.com",217],["schoolcheats.net",217],["globo.com",218],["latimes.com",218],["claimrbx.gg",219],["perelki.net",220],["vpn-anbieter-vergleich-test.de",221],["livingincebuforums.com",222],["paperzonevn.com",223],["alltechnerd.com",224],["malaysianwireless.com",225],["erinsakura.com",226],["infofuge.com",226],["freejav.guru",226],["novelmultiverse.com",226],["fritidsmarkedet.dk",227],["maskinbladet.dk",227],["15min.lt",228],["lewdninja.com",229],["lewd.ninja",229],["baddiehub.com",230],["mr9soft.com",231],["21porno.com",232],["adult-sex-gamess.com",233],["hentaigames.app",233],["mobilesexgamesx.com",233],["mysexgamer.com",233],["porngameshd.com",233],["sexgamescc.com",233],["xnxx-sex-videos.com",233],["f2movies.to",234],["freeporncave.com",235],["tubsxxx.com",236],["pornojenny.com",237],["subtitle.one",238],["manga18fx.com",239],["freebnbcoin.com",239],["sextvx.com",240],["studydhaba.com",241],["freecourse.tech",241],["victor-mochere.com",241],["papunika.com",241],["mobilanyheter.net",241],["prajwaldesai.com",241],["muztext.com",242],["pornohans.com",243],["nursexfilme.com",243],["pornohirsch.net",243],["xhamster-sexvideos.com",243],["pornoschlange.com",243],["hdpornos.net",243],["gutesexfilme.com",243],["short1.site",243],["zona-leros.com",243],["charbelnemnom.com",244],["simplebits.io",245],["online-fix.me",246],["gamersdiscussionhub.com",247],["owlzo.com",248],["q1003.com",249],["blogpascher.com",250],["testserver.pro",251],["lifestyle.bg",251],["money.bg",251],["news.bg",251],["topsport.bg",251],["webcafe.bg",251],["mgnet.xyz",252],["advertiserandtimes.co.uk",253],["xvideos2020.me",254],["111.90.159.132",255],["techsolveprac.com",256],["joomlabeginner.com",257],["largescaleforums.com",258],["dubznetwork.com",259],["mundodonghua.com",259],["hentaidexy.com",260],["oceanplay.org",261],["code2care.org",262],["xxxxsx.com",264],["ngontinh24.com",265],["panel.freemcserver.net",266],["idevicecentral.com",267],["zona11.com",268],["scsport.live",268],["mangacrab.com",270],["idnes.cz",271],["viefaucet.com",272],["cloud-computing-central.com",273],["afk.guide",274],["businessnamegenerator.com",275],["derstandard.at",276],["derstandard.de",276],["rocketnews24.com",277],["soranews24.com",277],["youpouch.com",277],["ilsole24ore.com",278],["ipacrack.com",279],["hentaiporn.one",280],["infokik.com",281],["daemonanime.net",282],["daemon-hentai.com",282],["deezer.com",283],["fosslinux.com",284],["shrdsk.me",285],["examword.com",286],["sempreupdate.com.br",286],["tribuna.com",287],["trendsderzukunft.de",288],["gal-dem.com",288],["lostineu.eu",288],["oggitreviso.it",288],["speisekarte.de",288],["mixed.de",288],["lightnovelspot.com",[289,290]],["lightnovelworld.com",[289,290]],["novelpub.com",[289,290]],["webnovelpub.com",[289,290]],["mail.yahoo.com",291],["hwzone.co.il",292],["nammakalvi.com",293],["javmoon.me",294],["c2g.at",295],["terafly.me",295],["elamigos-games.com",295],["elamigos-games.net",295],["dktechnicalmate.com",296],["recipahi.com",296],["converter-btc.world",296],["kaystls.site",297],["aquarius-horoscopes.com",298],["cancer-horoscopes.com",298],["dubipc.blogspot.com",298],["echoes.gr",298],["engel-horoskop.de",298],["freegames44.com",298],["fuerzasarmadas.eu",298],["gemini-horoscopes.com",298],["jurukunci.net",298],["krebs-horoskop.com",298],["leo-horoscopes.com",298],["maliekrani.com",298],["nklinks.click",298],["ourenseando.es",298],["pisces-horoscopes.com",298],["radio-en-direct.fr",298],["sagittarius-horoscopes.com",298],["scorpio-horoscopes.com",298],["singlehoroskop-loewe.de",298],["skat-karten.de",298],["skorpion-horoskop.com",298],["taurus-horoscopes.com",298],["the1security.com",298],["torrentmovies.online",298],["virgo-horoscopes.com",298],["zonamarela.blogspot.com",298],["yoima.hatenadiary.com",298],["vpntester.org",299],["watchhentai.net",300],["japscan.lol",301],["digitask.ru",302],["tempumail.com",303],["sexvideos.host",304],["10alert.com",306],["cryptstream.de",307],["nydus.org",307],["techhelpbd.com",308],["fapdrop.com",309],["cellmapper.net",310],["hdrez.com",311],["youwatch-serie.com",311],["printablecreative.com",312],["comohoy.com",313],["leak.sx",313],["pornleaks.in",313],["merlininkazani.com",313],["faindx.com",315],["j91.asia",316],["jeniusplay.com",317],["indianyug.com",318],["rgb.vn",318],["needrom.com",319],["criptologico.com",320],["megadrive-emulator.com",321],["eromanga-show.com",322],["hentai-one.com",322],["hentaipaw.com",322],["10minuteemails.com",323],["luxusmail.org",323],["w3cub.com",324],["bangpremier.com",325],["nyaa.iss.ink",326],["tnp98.xyz",328],["freepdfcomic.com",329],["memedroid.com",330],["animesync.org",331],["karaoketexty.cz",332],["resortcams.com",333],["sonixgvn.net",334],["mjakmama24.pl",336],["security-demo.extrahop.com",337]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,8]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",7],["eztv",7],["sushi-scan",11],["spigotunlocked",11],["ahmedmode",11],["kissasian",15],["rp5",17],["mma-core",18],["writedroid",22],["yts",27],["720pstream",27],["1stream",27],["magesy",28],["thefmovies",31],["fxporn69",36],["aliancapes",36],["urlcero",39],["totaldebrid",42],["sandrives",42],["oploverz",43],["pouvideo",53],["povvideo",53],["povw1deo",53],["povwideo",53],["powv1deo",53],["powvibeo",53],["powvideo",53],["powvldeo",53],["tubsexer",59],["porno-tour",59],["lenkino",59],["pornomoll",59],["camsclips",59],["m4ufree",63],["crackstreams",63],["telerium",77],["pandafreegames",90],["thoptv",98],["brainly",105],["streameast",120],["thestreameast",120],["daddylivehd",120],["solvetube",124],["hdfilme",125],["pornhub",126],["wcofun",133],["bollyholic",137],["gotxx",151],["turkanime",152],["voe-unblock",152],["khatrimaza",166],["pogolinks",166],["popcornstream",168],["shortzzy",176],["vembed",197],["xhamsterdeutsch",243],["privatemoviez",247],["gmx",263],["lightnovelpub",[289,290]],["camcaps",305],["drivebot",327],["thenextplanet1",328],["autoscout24",335]]);

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
