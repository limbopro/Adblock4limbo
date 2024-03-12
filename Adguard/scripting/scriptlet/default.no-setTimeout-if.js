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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["ai_adb"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["1e3*"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["window[_0x"],["isRequestPresent"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["setAntiAb"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["atob"],["devtool"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x","5000"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,9,10]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,133]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,158]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,269]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["economictimes.indiatimes.com",5],["m.timesofindia.com",6],["timesofindia.indiatimes.com",6],["youmath.it",6],["redensarten-index.de",6],["lesoir.be",6],["electriciansforums.net",6],["keralatelecom.info",6],["betaseries.com",6],["universegunz.net",6],["happypenguin.altervista.org",6],["everyeye.it",6],["bluedrake42.com",6],["streamservicehd.click",6],["supermarioemulator.com",6],["futbollibrehd.com",6],["newsrade.com",6],["eska.pl",6],["eskarock.pl",6],["voxfm.pl",6],["mathaeser.de",6],["freethesaurus.com",8],["thefreedictionary.com",8],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["dongknows.com",10],["traderepublic.community",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["mbc2.live",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["mangapt.com",10],["seriesperu.com",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,268]],["topsporter.net",[10,268]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["hq-links.com",10],["mobilkulup.com",10],["esopress.com",10],["rttar.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["surfsees.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["blackhatworld.com",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["geektime.co.il",11],["mediafire.com",12],["wcoanimedub.tv",13],["wcoforever.net",13],["openspeedtest.com",13],["addtobucketlist.com",13],["3dzip.org",[13,86]],["ilmeteo.it",13],["wcoforever.com",13],["comprovendolibri.it",13],["healthelia.com",13],["keephealth.info",14],["australianfrequentflyer.com.au",15],["afreesms.com",16],["kinoger.re",16],["laksa19.github.io",16],["javcl.com",16],["tvlogy.to",16],["live.dragaoconnect.net",16],["beststremo.com",16],["seznam.cz",16],["seznamzpravy.cz",16],["xerifetech.com",16],["wallpapershome.com",18],["ville-ideale.fr",19],["calciomercato.it",20],["calciomercato.com",21],["bersamatekno.com",21],["hotpornfile.org",21],["coolsoft.altervista.org",21],["hackedonlinegames.com",21],["jkoding.xyz",21],["cheater.ninja",21],["settlersonlinemaps.com",21],["magdownload.org",21],["kpkuang.org",21],["shareus.site",21],["crypto4yu.com",21],["faucetwork.space",21],["thenightwithoutthedawn.blogspot.com",21],["entutes.com",21],["claimlite.club",21],["bazadecrypto.com",[21,314]],["whosampled.com",22],["imgkings.com",23],["pornvideotop.com",23],["krotkoosporcie.pl",23],["anghami.com",24],["wired.com",25],["tutele.sx",26],["footyhunter3.xyz",26],["magesypro.pro",[27,28]],["audiotools.pro",28],["magesy.blog",28],["audioztools.com",[28,29]],["altblogger.net",29],["hl-live.de",29],["wohnmobilforum.de",29],["nulledbear.com",29],["satoshi-win.xyz",29],["encurtandourl.com",[29,150]],["freedeepweb.blogspot.com",29],["freesoft.id",29],["zcteam.id",29],["www-daftarharga.blogspot.com",29],["ear-phone-review.com",29],["telefullenvivo.com",29],["listatv.pl",29],["ltc-faucet.xyz",29],["coin-profits.xyz",29],["relampagomovies.com",29],["katestube.com",30],["short.pe",30],["footystreams.net",30],["seattletimes.com",31],["yiv.com",32],["globalrph.com",33],["e-glossa.it",34],["freewebscript.com",35],["webcheats.com.br",36],["gala.fr",38],["gentside.com",38],["geo.fr",38],["hbrfrance.fr",38],["nationalgeographic.fr",38],["ohmymag.com",38],["serengo.net",38],["vsd.fr",38],["updato.com",[39,57]],["methbox.com",40],["daizurin.com",40],["pendekarsubs.us",40],["dreamfancy.org",40],["rysafe.blogspot.com",40],["techacode.com",40],["toppng.com",40],["th-world.com",40],["avjamack.com",40],["avjamak.net",40],["tickzoo.tv",41],["dlhd.sx",42],["embedstream.me",42],["yts-subs.net",42],["cnnamador.com",43],["nudecelebforum.com",44],["pronpic.org",45],["thewebflash.com",46],["discordfastfood.com",46],["xup.in",46],["popularmechanics.com",47],["op.gg",48],["lequipe.fr",49],["comunidadgzone.es",50],["mp3fy.com",50],["lebensmittelpraxis.de",50],["ebookdz.com",50],["forum-pokemon-go.fr",50],["praxis-jugendarbeit.de",50],["gdrivez.xyz",50],["dictionnaire-medical.net",50],["cle0desktop.blogspot.com",50],["up-load.io",50],["direct-link.net",50],["direkt-wissen.com",50],["keysbrasil.blogspot.com",50],["hotpress.info",50],["turkleech.com",50],["anibatch.me",50],["anime-i.com",50],["plex-guide.de",50],["healthtune.site",50],["gewinde-normen.de",50],["tucinehd.com",50],["jellynote.com",51],["eporner.com",53],["pornbimbo.com",54],["allmonitors24.com",54],["4j.com",54],["avoiderrors.com",55],["cgtips.org",[55,213]],["sitarchive.com",55],["livenewsof.com",55],["topnewsshow.com",55],["gatcha.org",55],["empregoestagios.com",55],["everydayonsales.com",55],["kusonime.com",55],["aagmaal.xyz",55],["suicidepics.com",55],["codesnail.com",55],["codingshiksha.com",55],["graphicux.com",55],["hardcoregames.ca",55],["asyadrama.com",55],["bitcoinegypt.news",55],["citychilli.com",55],["talkjarvis.com",55],["hdmotori.it",56],["femdomtb.com",58],["camhub.cc",58],["bobs-tube.com",58],["ru-xvideos.me",58],["pornfd.com",58],["popno-tour.net",58],["molll.mobi",58],["watchmdh.to",58],["camwhores.tv",58],["elfqrin.com",59],["satcesc.com",60],["apfelpatient.de",60],["lusthero.com",61],["m2list.com",62],["embed.nana2play.com",62],["elahmad.com",62],["dofusports.xyz",62],["dallasnews.com",63],["lnk.news",64],["lnk.parts",64],["efukt.com",65],["wendycode.com",65],["springfieldspringfield.co.uk",66],["porndoe.com",67],["smsget.net",[68,69]],["kjanime.net",70],["gioialive.it",71],["classicreload.com",72],["scriptzhub.com",72],["chicoer.com",73],["bostonherald.com",73],["dailycamera.com",73],["maxcheaters.com",74],["rbxoffers.com",74],["mhn.quest",74],["leagueofgraphs.com",74],["hieunguyenphoto.com",74],["texteditor.nsspot.net",74],["postimees.ee",74],["police.community",74],["gisarea.com",74],["schaken-mods.com",74],["theclashify.com",74],["newscon.org",74],["txori.com",74],["olarila.com",74],["deletedspeedstreams.blogspot.com",74],["schooltravelorganiser.com",74],["xhardhempus.net",74],["sportsplays.com",75],["deinesexfilme.com",77],["einfachtitten.com",77],["halloporno.com",77],["herzporno.com",77],["lesbenhd.com",77],["milffabrik.com",[77,243]],["porn-monkey.com",77],["porndrake.com",77],["pornhubdeutsch.net",77],["pornoaffe.com",77],["pornodavid.com",77],["pornoente.tv",[77,243]],["pornofisch.com",77],["pornofelix.com",77],["pornohammer.com",77],["pornohelm.com",77],["pornoklinge.com",77],["pornotom.com",[77,243]],["pornotommy.com",77],["pornovideos-hd.com",77],["pornozebra.com",[77,243]],["xhamsterdeutsch.xyz",77],["xnxx-sexfilme.com",77],["zerion.cc",77],["letribunaldunet.fr",78],["vladan.fr",78],["live-tv-channels.org",79],["eslfast.com",80],["freegamescasual.com",81],["tcpvpn.com",82],["oko.sh",82],["timesnownews.com",82],["timesnowhindi.com",82],["timesnowmarathi.com",82],["zoomtventertainment.com",82],["xxxuno.com",83],["sholah.net",84],["2rdroid.com",84],["bisceglielive.it",85],["pandajogosgratis.com.br",87],["5278.cc",88],["tonspion.de",90],["duplichecker.com",91],["plagiarismchecker.co",91],["plagiarismdetector.net",91],["searchenginereports.net",91],["giallozafferano.it",92],["autojournal.fr",92],["autoplus.fr",92],["sportauto.fr",92],["linkspaid.com",93],["proxydocker.com",93],["beeimg.com",[94,95]],["emturbovid.com",95],["ftlauderdalebeachcam.com",96],["ftlauderdalewebcam.com",96],["juneauharborwebcam.com",96],["keywestharborwebcam.com",96],["kittycatcam.com",96],["mahobeachcam.com",96],["miamiairportcam.com",96],["morganhillwebcam.com",96],["njwildlifecam.com",96],["nyharborwebcam.com",96],["paradiseislandcam.com",96],["pompanobeachcam.com",96],["portbermudawebcam.com",96],["portcanaveralwebcam.com",96],["portevergladeswebcam.com",96],["portmiamiwebcam.com",96],["portnywebcam.com",96],["portnassauwebcam.com",96],["portstmaartenwebcam.com",96],["portstthomaswebcam.com",96],["porttampawebcam.com",96],["sxmislandcam.com",96],["gearingcommander.com",96],["themes-dl.com",96],["badassdownloader.com",96],["badasshardcore.com",96],["badassoftcore.com",96],["nulljungle.com",96],["teevee.asia",96],["otakukan.com",96],["generate.plus",98],["calculate.plus",98],["avcesar.com",99],["audiotag.info",100],["tudigitale.it",101],["ibcomputing.com",102],["eodev.com",103],["legia.net",104],["acapellas4u.co.uk",105],["robloxscripts.com",106],["libreriamo.it",106],["postazap.com",106],["medebooks.xyz",106],["tutorials-technology.info",106],["mashtips.com",106],["marriedgames.com.br",106],["4allprograms.me",106],["nurgsm.com",106],["certbyte.com",106],["plugincrack.com",106],["gamingdeputy.com",106],["freewebcart.com",106],["streamhentaimovies.com",107],["konten.co.id",108],["diariodenavarra.es",109],["scripai.com",109],["myfxbook.com",109],["whatfontis.com",109],["xiaomifans.pl",110],["eletronicabr.com",110],["optifine.net",111],["luzernerzeitung.ch",112],["tagblatt.ch",112],["spellcheck.net",113],["spellchecker.net",113],["spellweb.com",113],["ableitungsrechner.net",114],["alternet.org",115],["gourmetsupremacy.com",115],["imtranslator.net",116],["shrib.com",117],["pandafiles.com",118],["vidia.tv",[118,139]],["hortonanderfarom.blogspot.com",118],["clarifystraight.com",118],["tutelehd3.xyz",119],["mega4upload.com",119],["coolcast2.com",119],["techclips.net",119],["earthquakecensus.com",119],["footyhunter.lol",119],["gamerarcades.com",119],["poscitech.click",119],["starlive.stream",119],["utopianwilderness.com",119],["wecast.to",119],["sportbar.live",119],["lordchannel.com",119],["play-old-pc-games.com",120],["tunovelaligera.com",121],["tapchipi.com",121],["cuitandokter.com",121],["tech-blogs.com",121],["cardiagn.com",121],["dcleakers.com",121],["esgeeks.com",121],["pugliain.net",121],["uplod.net",121],["worldfreeware.com",121],["fikiri.net",121],["myhackingworld.com",121],["phoenixfansub.com",121],["freecourseweb.com",122],["devcourseweb.com",122],["coursewikia.com",122],["courseboat.com",122],["coursehulu.com",122],["lne.es",126],["pornult.com",127],["webcamsdolls.com",127],["bitcotasks.com",[127,173]],["adsy.pw",127],["playstore.pw",127],["exactpay.online",127],["thothd.to",127],["proplanta.de",128],["hydrogenassociation.org",129],["ludigames.com",129],["sportitalialive.com",129],["tii.la",129],["made-by.org",129],["xenvn.com",129],["worldtravelling.com",129],["igirls.in",129],["technichero.com",129],["roshiyatech.my.id",129],["24sport.stream",129],["aeroxplorer.com",129],["mad4wheels.com",130],["logi.im",130],["emailnator.com",130],["textograto.com",131],["voyageforum.com",132],["hmc-id.blogspot.com",132],["jemerik.com",132],["myabandonware.com",132],["chatta.it",134],["ketubanjiwa.com",135],["nsfw247.to",136],["funzen.net",136],["fighter.stream",136],["ilclubdellericette.it",136],["hubstream.in",136],["extremereportbot.com",137],["getintopc.com",138],["qoshe.com",140],["lowellsun.com",141],["mamadu.pl",141],["dobrapogoda24.pl",141],["motohigh.pl",141],["namasce.pl",141],["ultimate-catch.eu",142],["cpopchanelofficial.com",143],["creditcardgenerator.com",144],["creditcardrush.com",144],["bostoncommons.net",144],["thejobsmovie.com",144],["livsavr.co",144],["nilopolisonline.com.br",145],["mesquitaonline.com",145],["yellowbridge.com",145],["socialgirls.im",146],["yaoiotaku.com",147],["camhub.world",148],["moneyhouse.ch",149],["ihow.info",150],["filesus.com",150],["sturls.com",150],["re.two.re",150],["turbo1.co",150],["cartoonsarea.xyz",150],["valeronevijao.com",151],["cigarlessarefy.com",151],["figeterpiazine.com",151],["yodelswartlike.com",151],["generatesnitrosate.com",151],["crownmakermacaronicism.com",151],["chromotypic.com",151],["gamoneinterrupted.com",151],["metagnathtuggers.com",151],["wolfdyslectic.com",151],["rationalityaloelike.com",151],["sizyreelingly.com",151],["simpulumlamerop.com",151],["urochsunloath.com",151],["monorhinouscassaba.com",151],["counterclockwisejacky.com",151],["35volitantplimsoles5.com",151],["scatch176duplicities.com",151],["antecoxalbobbing1010.com",151],["boonlessbestselling244.com",151],["cyamidpulverulence530.com",151],["guidon40hyporadius9.com",151],["449unceremoniousnasoseptal.com",151],["19turanosephantasia.com",151],["30sensualizeexpression.com",151],["321naturelikefurfuroid.com",151],["745mingiestblissfully.com",151],["availedsmallest.com",151],["greaseball6eventual20.com",151],["toxitabellaeatrebates306.com",151],["20demidistance9elongations.com",151],["audaciousdefaulthouse.com",151],["fittingcentermondaysunday.com",151],["fraudclatterflyingcar.com",151],["launchreliantcleaverriver.com",151],["matriculant401merited.com",151],["realfinanceblogcenter.com",151],["reputationsheriffkennethsand.com",151],["telyn610zoanthropy.com",151],["tubelessceliolymph.com",151],["tummulerviolableness.com",151],["un-block-voe.net",151],["v-o-e-unblock.com",151],["voe-un-block.com",151],["voeun-block.net",151],["voeunbl0ck.com",151],["voeunblck.com",151],["voeunblk.com",151],["voeunblock.com",151],["voeunblock1.com",151],["voeunblock2.com",151],["voeunblock3.com",151],["agefi.fr",152],["cariskuy.com",153],["letras2.com",153],["yusepjaelani.blogspot.com",154],["letras.mus.br",155],["cheatermad.com",156],["mtlurb.com",157],["port.hu",158],["acdriftingpro.com",158],["flight-report.com",158],["forumdz.com",158],["abandonmail.com",158],["flmods.com",158],["zilinak.sk",158],["projectfreetv.stream",158],["hotdesimms.com",158],["pdfaid.com",158],["mconverter.eu",158],["dzeko11.net",[158,268]],["mail.com",158],["expresskaszubski.pl",158],["moegirl.org.cn",158],["onemanhua.com",159],["t3n.de",160],["allindiaroundup.com",161],["vectorizer.io",162],["smgplaza.com",162],["ftuapps.dev",162],["onehack.us",162],["thapcam.net",162],["thefastlaneforum.com",163],["trade2win.com",164],["gmodleaks.com",164],["modagamers.com",165],["freemagazines.top",165],["straatosphere.com",165],["nullpk.com",165],["adslink.pw",165],["downloadudemy.com",165],["picgiraffe.com",165],["weadown.com",165],["freepornsex.net",165],["nurparatodos.com.ar",165],["librospreuniversitariospdf.blogspot.com",166],["msdos-games.com",166],["forexeen.us",166],["khsm.io",166],["girls-like.me",166],["webcreator-journal.com",166],["nu6i-bg-net.com",166],["routech.ro",167],["hokej.net",167],["turkmmo.com",168],["palermotoday.it",169],["baritoday.it",169],["trentotoday.it",169],["agrigentonotizie.it",169],["anconatoday.it",169],["arezzonotizie.it",169],["avellinotoday.it",169],["bresciatoday.it",169],["brindisireport.it",169],["casertanews.it",169],["cataniatoday.it",169],["cesenatoday.it",169],["chietitoday.it",169],["forlitoday.it",169],["frosinonetoday.it",169],["genovatoday.it",169],["ilpescara.it",169],["ilpiacenza.it",169],["latinatoday.it",169],["lecceprima.it",169],["leccotoday.it",169],["livornotoday.it",169],["messinatoday.it",169],["milanotoday.it",169],["modenatoday.it",169],["monzatoday.it",169],["novaratoday.it",169],["padovaoggi.it",169],["parmatoday.it",169],["perugiatoday.it",169],["pisatoday.it",169],["quicomo.it",169],["ravennatoday.it",169],["reggiotoday.it",169],["riminitoday.it",169],["romatoday.it",169],["salernotoday.it",169],["sondriotoday.it",169],["sportpiacenza.it",169],["ternitoday.it",169],["today.it",169],["torinotoday.it",169],["trevisotoday.it",169],["triesteprima.it",169],["udinetoday.it",169],["veneziatoday.it",169],["vicenzatoday.it",169],["thumpertalk.com",170],["arkcod.org",170],["facciabuco.com",171],["softx64.com",172],["thelayoff.com",173],["blog.cryptowidgets.net",173],["blog.freeoseocheck.com",173],["blog.makeupguide.net",173],["shorterall.com",173],["blog24.me",173],["maxstream.video",173],["maxlinks.online",173],["tvepg.eu",173],["pstream.net",174],["dailymaverick.co.za",175],["apps2app.com",176],["fm-arena.com",177],["tradersunion.com",178],["tandess.com",179],["faqwiki.us",180],["sonixgvn.net",180],["spontacts.com",181],["dankmemer.lol",182],["apkmoddone.com",183],["enit.in",184],["financerites.com",184],["fadedfeet.com",185],["homeculina.com",185],["ineedskin.com",185],["kenzo-flowertag.com",185],["lawyex.co",185],["mdn.lol",185],["bitzite.com",186],["tiktokcounter.net",187],["coingraph.us",188],["impact24.us",188],["my-code4you.blogspot.com",189],["vrcmods.com",190],["osuskinner.com",190],["osuskins.net",190],["pentruea.com",[191,192]],["mchacks.net",193],["why-tech.it",194],["compsmag.com",195],["tapetus.pl",196],["gaystream.online",197],["embedv.net",197],["fslinks.org",197],["v6embed.xyz",197],["vgplayer.xyz",197],["vid-guard.com",197],["autoroad.cz",198],["brawlhalla.fr",198],["tecnobillo.com",198],["sexcamfreeporn.com",199],["breatheheavy.com",200],["wenxuecity.com",201],["key-hub.eu",202],["fabioambrosi.it",203],["tattle.life",204],["emuenzen.de",204],["terrylove.com",204],["mynet.com",205],["cidade.iol.pt",206],["fantacalcio.it",207],["hentaifreak.org",208],["hypebeast.com",209],["krankheiten-simulieren.de",210],["catholic.com",211],["3dmodelshare.org",212],["gourmetscans.net",213],["techinferno.com",214],["ibeconomist.com",215],["bookriot.com",216],["purposegames.com",217],["schoolcheats.net",217],["globo.com",218],["latimes.com",218],["claimrbx.gg",219],["perelki.net",220],["vpn-anbieter-vergleich-test.de",221],["livingincebuforums.com",222],["paperzonevn.com",223],["alltechnerd.com",224],["malaysianwireless.com",225],["erinsakura.com",226],["infofuge.com",226],["freejav.guru",226],["novelmultiverse.com",226],["fritidsmarkedet.dk",227],["maskinbladet.dk",227],["15min.lt",228],["lewdninja.com",229],["lewd.ninja",229],["baddiehub.com",230],["mr9soft.com",231],["21porno.com",232],["adult-sex-gamess.com",233],["hentaigames.app",233],["mobilesexgamesx.com",233],["mysexgamer.com",233],["porngameshd.com",233],["sexgamescc.com",233],["xnxx-sex-videos.com",233],["f2movies.to",234],["freeporncave.com",235],["tubsxxx.com",236],["pornojenny.com",237],["subtitle.one",238],["manga18fx.com",239],["freebnbcoin.com",239],["sextvx.com",240],["studydhaba.com",241],["freecourse.tech",241],["victor-mochere.com",241],["papunika.com",241],["mobilanyheter.net",241],["prajwaldesai.com",241],["muztext.com",242],["pornohans.com",243],["nursexfilme.com",243],["pornohirsch.net",243],["xhamster-sexvideos.com",243],["pornoschlange.com",243],["hdpornos.net",243],["gutesexfilme.com",243],["short1.site",243],["zona-leros.com",243],["charbelnemnom.com",244],["simplebits.io",245],["online-fix.me",246],["gamersdiscussionhub.com",247],["owlzo.com",248],["q1003.com",249],["blogpascher.com",250],["testserver.pro",251],["lifestyle.bg",251],["money.bg",251],["news.bg",251],["topsport.bg",251],["webcafe.bg",251],["mgnet.xyz",252],["advertiserandtimes.co.uk",253],["xvideos2020.me",254],["111.90.159.132",255],["techsolveprac.com",256],["joomlabeginner.com",257],["largescaleforums.com",258],["dubznetwork.com",259],["mundodonghua.com",259],["hentaidexy.com",260],["oceanplay.org",261],["code2care.org",262],["xxxxsx.com",264],["ngontinh24.com",265],["panel.freemcserver.net",266],["idevicecentral.com",267],["zona11.com",268],["scsport.live",268],["mangacrab.com",270],["idnes.cz",271],["viefaucet.com",272],["cloud-computing-central.com",273],["afk.guide",274],["businessnamegenerator.com",275],["derstandard.at",276],["derstandard.de",276],["rocketnews24.com",277],["soranews24.com",277],["youpouch.com",277],["ilsole24ore.com",278],["ipacrack.com",279],["hentaiporn.one",280],["infokik.com",281],["daemonanime.net",282],["daemon-hentai.com",282],["deezer.com",283],["fosslinux.com",284],["shrdsk.me",285],["examword.com",286],["sempreupdate.com.br",286],["tribuna.com",287],["trendsderzukunft.de",288],["gal-dem.com",288],["lostineu.eu",288],["oggitreviso.it",288],["speisekarte.de",288],["mixed.de",288],["lightnovelspot.com",[289,290]],["lightnovelworld.com",[289,290]],["novelpub.com",[289,290]],["webnovelpub.com",[289,290]],["mail.yahoo.com",291],["hwzone.co.il",292],["nammakalvi.com",293],["javmoon.me",294],["c2g.at",295],["terafly.me",295],["elamigos-games.com",295],["elamigos-games.net",295],["dktechnicalmate.com",296],["recipahi.com",296],["converter-btc.world",296],["kaystls.site",297],["aquarius-horoscopes.com",298],["cancer-horoscopes.com",298],["dubipc.blogspot.com",298],["echoes.gr",298],["engel-horoskop.de",298],["freegames44.com",298],["fuerzasarmadas.eu",298],["gemini-horoscopes.com",298],["jurukunci.net",298],["krebs-horoskop.com",298],["leo-horoscopes.com",298],["maliekrani.com",298],["nklinks.click",298],["ourenseando.es",298],["pisces-horoscopes.com",298],["radio-en-direct.fr",298],["sagittarius-horoscopes.com",298],["scorpio-horoscopes.com",298],["singlehoroskop-loewe.de",298],["skat-karten.de",298],["skorpion-horoskop.com",298],["taurus-horoscopes.com",298],["the1security.com",298],["torrentmovies.online",298],["virgo-horoscopes.com",298],["zonamarela.blogspot.com",298],["yoima.hatenadiary.com",298],["vpntester.org",299],["watchhentai.net",300],["japscan.lol",301],["digitask.ru",302],["tempumail.com",303],["sexvideos.host",304],["10alert.com",306],["cryptstream.de",307],["nydus.org",307],["techhelpbd.com",308],["fapdrop.com",309],["cellmapper.net",310],["hdrez.com",311],["youwatch-serie.com",311],["printablecreative.com",312],["comohoy.com",313],["leak.sx",313],["paste.bin.sx",313],["pornleaks.in",313],["merlininkazani.com",313],["faindx.com",315],["j91.asia",316],["jeniusplay.com",317],["indianyug.com",318],["rgb.vn",318],["needrom.com",319],["criptologico.com",320],["megadrive-emulator.com",321],["eromanga-show.com",322],["hentai-one.com",322],["hentaipaw.com",322],["10minuteemails.com",323],["luxusmail.org",323],["w3cub.com",324],["bangpremier.com",325],["nyaa.iss.ink",326],["tnp98.xyz",328],["freepdfcomic.com",329],["memedroid.com",330],["animesync.org",331],["karaoketexty.cz",332],["resortcams.com",333],["mjakmama24.pl",335],["security-demo.extrahop.com",336]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,7]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",6],["eztv",6],["sushi-scan",10],["spigotunlocked",10],["ahmedmode",10],["kissasian",14],["rp5",16],["mma-core",17],["writedroid",21],["yts",26],["720pstream",26],["1stream",26],["magesy",27],["thefmovies",30],["urlcero",37],["totaldebrid",40],["sandrives",40],["oploverz",41],["fxporn69",50],["aliancapes",50],["pouvideo",52],["povvideo",52],["povw1deo",52],["povwideo",52],["powv1deo",52],["powvibeo",52],["powvideo",52],["powvldeo",52],["tubsexer",58],["porno-tour",58],["lenkino",58],["pornomoll",58],["camsclips",58],["m4ufree",62],["crackstreams",62],["telerium",76],["pandafreegames",89],["thoptv",97],["brainly",103],["shortzzy",106],["streameast",119],["thestreameast",119],["daddylivehd",119],["solvetube",123],["hdfilme",124],["pornhub",125],["wcofun",132],["bollyholic",136],["gotxx",150],["turkanime",151],["voe-unblock",151],["khatrimaza",165],["pogolinks",165],["popcornstream",167],["vembed",197],["xhamsterdeutsch",243],["privatemoviez",247],["gmx",263],["lightnovelpub",[289,290]],["camcaps",305],["drivebot",327],["thenextplanet1",328],["autoscout24",334]]);

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
