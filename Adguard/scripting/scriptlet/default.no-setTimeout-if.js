/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["null)","10"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["offsetParent"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["Adb"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["modal"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["instance.check","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["xclaim"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["AdBanner","2000"],["test","100"],["replace","1500"],["popCanFire"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["()","0"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["eval"],["check","1"],["adsBlocked"],["getComputedStyle","250"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["Math.floor"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["height"],[".show","1000"],[".show"],["innerHTML.replace","1000"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["alert"],["blocker","100"],["length"],["ai_adb"],["t()","0"],["$"],["offsetLeft"],[".show()","1000"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],[".length","2000"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()","3000"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["window.location.href=link"],["ai_"],["reachGoal"],["ai"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["ads_block"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["Ads"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["atob"],["devtool"],["Msg"],["UABP"],["","250"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["/bait|detected/"],["","5"],["","500"],["/Adform|didomi|adblock|forEach/"],["/\\.innerHtml|offsetWidth/"],["showAdblock"],["-0x"],["display"],["gclid"],["rejectWith"],["refresh"],["window.location"],["ga"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["canRunAds"],["displayMessage","2000"],["redURL"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["adblocker"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["fetch"],["afterOpen"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["offsetHeight","100"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["hasAdBlock"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["/adblock/i"],["ad_display"],["/adScriptPath|MMDConfig/"],["adsFound"],["0x","100"],["/ads|adb/"],["/native|\\{n\\(\\)/"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["focus.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,10,11]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["kino.de",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,140]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,167]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,266]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["teltarif.de",5],["economictimes.indiatimes.com",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["bluedrake42.com",7],["streamservicehd.click",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["newsrade.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["freethesaurus.com",9],["thefreedictionary.com",9],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["tinhocdongthap.com",11],["sakarnewz.com",11],["downloadr.in",11],["topcomicporno.com",11],["dongknows.com",11],["traderepublic.community",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["mbc2.live",11],["forumnulled.com",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["whncourses.com",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["mdn.lol",[11,271]],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["mangapt.com",11],["seriesperu.com",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,265]],["topsporter.net",[11,265]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["hq-links.com",11],["mobilkulup.com",11],["esopress.com",11],["rttar.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["surfsees.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["blackhatworld.com",11],["bizdustry.com",11],["geektime.co.il",12],["bild.de",13],["mediafire.com",14],["wcoanimedub.tv",15],["wcoforever.net",15],["openspeedtest.com",15],["addtobucketlist.com",15],["3dzip.org",[15,90]],["ilmeteo.it",15],["wcoforever.com",15],["comprovendolibri.it",15],["healthelia.com",15],["keephealth.info",16],["australianfrequentflyer.com.au",17],["afreesms.com",18],["kinoger.re",18],["laksa19.github.io",18],["imgux.buzz",18],["imgewe.buzz",18],["imgxxxx.buzz",18],["imgeza.buzz",18],["imgzzzz.buzz",18],["imgxhfr.buzz",18],["imgqwt.buzz",18],["imgtwq.buzz",18],["imgbjryy.buzz",18],["imgjetr.buzz",18],["imgxelz.buzz",18],["imgytreq.buzz",18],["javcl.com",18],["upvideo.to",18],["tvlogy.to",18],["himovies.to",18],["live.dragaoconnect.net",18],["beststremo.com",18],["seznam.cz",18],["seznamzpravy.cz",18],["xerifetech.com",18],["wallpapershome.com",20],["ville-ideale.fr",21],["calciomercato.it",22],["calciomercato.com",23],["bersamatekno.com",23],["hotpornfile.org",23],["robloxscripts.com",23],["coolsoft.altervista.org",23],["worldcupfootball.me",[23,28]],["hackedonlinegames.com",23],["jkoding.xyz",23],["settlersonlinemaps.com",23],["1cloudfile.com",23],["magdownload.org",23],["kpkuang.org",23],["shareus.site",23],["crypto4yu.com",23],["faucetwork.space",23],["claimclicks.com",23],["thenightwithoutthedawn.blogspot.com",23],["entutes.com",23],["claimlite.club",23],["bazadecrypto.com",[23,311]],["whosampled.com",24],["imgkings.com",25],["pornvideotop.com",25],["krotkoosporcie.pl",25],["anghami.com",26],["wired.com",27],["tutele.sx",28],["footyhunter3.xyz",28],["magesypro.pro",[29,30]],["tinyppt.com",29],["audiotools.pro",30],["magesy.blog",30],["audioztools.com",[30,31]],["altblogger.net",31],["satoshi-win.xyz",31],["freedeepweb.blogspot.com",31],["freesoft.id",31],["zcteam.id",31],["www-daftarharga.blogspot.com",31],["ear-phone-review.com",31],["telefullenvivo.com",31],["listatv.pl",31],["encurtandourl.com",[31,153]],["katestube.com",32],["short.pe",32],["footystreams.net",32],["seattletimes.com",33],["yiv.com",34],["pornohans.com",34],["pornoente.tv",[34,81]],["nursexfilme.com",34],["milffabrik.com",[34,81]],["pornohirsch.net",34],["pornozebra.com",[34,81]],["xhamster-sexvideos.com",34],["pornoschlange.com",34],["hdpornos.net",34],["gutesexfilme.com",34],["pornotom.com",[34,81]],["short1.site",34],["zona-leros.com",34],["globalrph.com",35],["e-glossa.it",36],["java-forum.org",37],["comunidadgzone.es",37],["anime-extremo.com",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["healthtune.site",37],["gewinde-normen.de",37],["tucinehd.com",37],["freewebscript.com",38],["webcheats.com.br",39],["gala.fr",41],["gentside.com",41],["geo.fr",41],["hbrfrance.fr",41],["nationalgeographic.fr",41],["ohmymag.com",41],["serengo.net",41],["vsd.fr",41],["updato.com",[42,59]],["methbox.com",43],["daizurin.com",43],["pendekarsubs.us",43],["dreamfancy.org",43],["rysafe.blogspot.com",43],["toppng.com",43],["th-world.com",43],["avjamack.com",43],["avjamak.net",43],["techacode.com",43],["tickzoo.tv",44],["daddyhd.com",45],["embedstream.me",45],["yts-subs.net",45],["cnnamador.com",46],["nudecelebforum.com",47],["pronpic.org",48],["thewebflash.com",49],["discordfastfood.com",49],["xup.in",49],["popularmechanics.com",50],["op.gg",51],["lequipe.fr",52],["jellynote.com",53],["knights-table.net",54],["eporner.com",55],["pornbimbo.com",56],["allmonitors24.com",56],["4j.com",56],["avoiderrors.com",57],["cgtips.org",[57,211]],["sitarchive.com",57],["livenewsof.com",57],["topnewsshow.com",57],["gatcha.org",57],["empregoestagios.com",57],["everydayonsales.com",57],["kusonime.com",57],["aagmaal.xyz",57],["suicidepics.com",57],["codesnail.com",57],["codingshiksha.com",57],["graphicux.com",57],["hardcoregames.ca",57],["asyadrama.com",57],["bitcoinegypt.news",57],["citychilli.com",57],["talkjarvis.com",57],["hdmotori.it",58],["femdomtb.com",60],["camhub.cc",60],["bobs-tube.com",60],["ru-xvideos.me",60],["pornfd.com",60],["popno-tour.net",60],["molll.mobi",60],["watchmdh.to",60],["camwhores.tv",60],["audioz.cc",61],["audioz.es",61],["vectorizer.io",61],["smgplaza.com",61],["ftuapps.dev",61],["onehack.us",61],["thapcam.net",61],["elfqrin.com",62],["satcesc.com",63],["apfelpatient.de",63],["lusthero.com",64],["hpav.tv",65],["hpjav.tv",65],["m2list.com",65],["embed.nana2play.com",65],["elahmad.com",65],["dofusports.xyz",65],["dallasnews.com",66],["lnk.news",67],["lnk.parts",67],["efukt.com",68],["wendycode.com",68],["springfieldspringfield.co.uk",69],["porndoe.com",70],["smsget.net",[71,72]],["kjanime.net",73],["gioialive.it",74],["classicreload.com",75],["chicoer.com",76],["bostonherald.com",76],["dailycamera.com",76],["gomiblog.com",77],["maxcheaters.com",78],["rbxoffers.com",78],["postimees.ee",78],["police.community",78],["gisarea.com",78],["schaken-mods.com",78],["theclashify.com",78],["txori.com",78],["olarila.com",78],["deletedspeedstreams.blogspot.com",78],["sportsplays.com",79],["deinesexfilme.com",81],["einfachtitten.com",81],["halloporno.com",81],["herzporno.com",81],["lesbenhd.com",81],["porn-monkey.com",81],["porndrake.com",81],["pornhubdeutsch.net",81],["pornoaffe.com",81],["pornodavid.com",81],["pornofisch.com",81],["pornofelix.com",81],["pornohammer.com",81],["pornohelm.com",81],["pornoklinge.com",81],["pornotommy.com",81],["pornovideos-hd.com",81],["xhamsterdeutsch.xyz",81],["xnxx-sexfilme.com",81],["zerion.cc",81],["letribunaldunet.fr",82],["vladan.fr",82],["live-tv-channels.org",83],["eslfast.com",84],["freegamescasual.com",85],["tcpvpn.com",86],["oko.sh",86],["timesnownews.com",86],["timesnowhindi.com",86],["timesnowmarathi.com",86],["zoomtventertainment.com",86],["xxxuno.com",87],["sholah.net",88],["2rdroid.com",88],["bisceglielive.it",89],["pandajogosgratis.com.br",91],["5278.cc",92],["tonspion.de",94],["duplichecker.com",95],["plagiarismchecker.co",95],["plagiarismdetector.net",95],["searchenginereports.net",95],["smallseotools.com",95],["giallozafferano.it",96],["autojournal.fr",96],["autoplus.fr",96],["sportauto.fr",96],["linkspaid.com",97],["proxydocker.com",97],["beeimg.com",[98,99]],["emturbovid.com",99],["ftlauderdalebeachcam.com",100],["ftlauderdalewebcam.com",100],["juneauharborwebcam.com",100],["keywestharborwebcam.com",100],["kittycatcam.com",100],["mahobeachcam.com",100],["miamiairportcam.com",100],["morganhillwebcam.com",100],["njwildlifecam.com",100],["nyharborwebcam.com",100],["paradiseislandcam.com",100],["pompanobeachcam.com",100],["portbermudawebcam.com",100],["portcanaveralwebcam.com",100],["portevergladeswebcam.com",100],["portmiamiwebcam.com",100],["portnywebcam.com",100],["portnassauwebcam.com",100],["portstmaartenwebcam.com",100],["portstthomaswebcam.com",100],["porttampawebcam.com",100],["sxmislandcam.com",100],["gearingcommander.com",100],["themes-dl.com",100],["badassdownloader.com",100],["badasshardcore.com",100],["badassoftcore.com",100],["nulljungle.com",100],["teevee.asia",100],["otakukan.com",100],["linksht.com",102],["generate.plus",103],["calculate.plus",103],["avcesar.com",104],["audiotag.info",105],["tudigitale.it",106],["ibcomputing.com",107],["eodev.com",108],["legia.net",109],["acapellas4u.co.uk",110],["streamhentaimovies.com",111],["konten.co.id",112],["diariodenavarra.es",113],["xiaomifans.pl",114],["eletronicabr.com",114],["iphonesoft.fr",115],["gload.cc",116],["optifine.net",117],["luzernerzeitung.ch",118],["tagblatt.ch",118],["spellcheck.net",119],["spellchecker.net",119],["spellweb.com",119],["ableitungsrechner.net",120],["alternet.org",121],["gourmetsupremacy.com",121],["imtranslator.net",122],["shrib.com",123],["pandafiles.com",124],["vidia.tv",[124,146]],["hortonanderfarom.blogspot.com",124],["clarifystraight.com",124],["constraindefiant.net",125],["tutelehd3.xyz",125],["mega4upload.com",125],["coolcast2.com",125],["techclips.net",125],["earthquakecensus.com",125],["footyhunter.lol",125],["gamerarcades.com",125],["poscitech.click",125],["starlive.stream",125],["utopianwilderness.com",125],["wecast.to",125],["sportbar.live",125],["lordchannel.com",125],["play-old-pc-games.com",126],["scrin.org",127],["tunovelaligera.com",128],["tapchipi.com",128],["cuitandokter.com",128],["tech-blogs.com",128],["cardiagn.com",128],["dcleakers.com",128],["esgeeks.com",128],["pugliain.net",128],["uplod.net",128],["worldfreeware.com",128],["fikiri.net",128],["myhackingworld.com",128],["phoenixfansub.com",128],["freecourseweb.com",129],["devcourseweb.com",129],["coursewikia.com",129],["courseboat.com",129],["coursehulu.com",129],["lne.es",133],["pornult.com",134],["webcamsdolls.com",134],["adsy.pw",134],["playstore.pw",134],["bitcotasks.com",134],["exactpay.online",134],["thothd.to",134],["proplanta.de",135],["hydrogenassociation.org",136],["ludigames.com",136],["made-by.org",136],["xenvn.com",136],["worldtravelling.com",136],["igirls.in",136],["technichero.com",136],["roshiyatech.my.id",136],["1upinfinite.com",136],["24sport.stream",136],["tii.la",136],["yesmangas1.com",136],["aeroxplorer.com",136],["mad4wheels.com",137],["logi.im",137],["emailnator.com",137],["textograto.com",138],["voyageforum.com",139],["hmc-id.blogspot.com",139],["jemerik.com",139],["myabandonware.com",139],["chatta.it",141],["ketubanjiwa.com",142],["nsfw247.to",143],["funzen.net",143],["fighter.stream",143],["ilclubdellericette.it",143],["hubstream.in",143],["extremereportbot.com",144],["getintopc.com",145],["qoshe.com",147],["lowellsun.com",148],["mamadu.pl",148],["dobrapogoda24.pl",148],["motohigh.pl",148],["namasce.pl",148],["ultimate-catch.eu",149],["tabele-kalorii.pl",149],["cpopchanelofficial.com",151],["cryptowidgets.net",[151,267]],["creditcardgenerator.com",152],["creditcardrush.com",152],["bostoncommons.net",152],["thejobsmovie.com",152],["livsavr.co",152],["hl-live.de",153],["ihow.info",153],["filesus.com",153],["sturls.com",153],["re.two.re",153],["turbo1.co",153],["cartoonsarea.xyz",153],["nilopolisonline.com.br",154],["mesquitaonline.com",154],["yellowbridge.com",154],["socialgirls.im",155],["yaoiotaku.com",156],["camhub.world",157],["moneyhouse.ch",158],["valeronevijao.com",159],["cigarlessarefy.com",159],["figeterpiazine.com",159],["yodelswartlike.com",159],["generatesnitrosate.com",159],["crownmakermacaronicism.com",159],["chromotypic.com",159],["gamoneinterrupted.com",159],["metagnathtuggers.com",159],["wolfdyslectic.com",159],["rationalityaloelike.com",159],["sizyreelingly.com",159],["simpulumlamerop.com",159],["urochsunloath.com",159],["monorhinouscassaba.com",159],["counterclockwisejacky.com",159],["35volitantplimsoles5.com",159],["scatch176duplicities.com",159],["antecoxalbobbing1010.com",159],["boonlessbestselling244.com",159],["cyamidpulverulence530.com",159],["guidon40hyporadius9.com",159],["449unceremoniousnasoseptal.com",159],["19turanosephantasia.com",159],["30sensualizeexpression.com",159],["321naturelikefurfuroid.com",159],["745mingiestblissfully.com",159],["availedsmallest.com",159],["greaseball6eventual20.com",159],["toxitabellaeatrebates306.com",159],["20demidistance9elongations.com",159],["audaciousdefaulthouse.com",159],["fittingcentermondaysunday.com",159],["fraudclatterflyingcar.com",159],["launchreliantcleaverriver.com",159],["matriculant401merited.com",159],["realfinanceblogcenter.com",159],["reputationsheriffkennethsand.com",159],["telyn610zoanthropy.com",159],["tubelessceliolymph.com",159],["tummulerviolableness.com",159],["un-block-voe.net",159],["v-o-e-unblock.com",159],["voe-un-block.com",159],["voeun-block.net",159],["voeunbl0ck.com",159],["voeunblck.com",159],["voeunblk.com",159],["voeunblock.com",159],["voeunblock1.com",159],["voeunblock2.com",159],["voeunblock3.com",159],["agefi.fr",160],["cariskuy.com",161],["letras2.com",161],["yusepjaelani.blogspot.com",162],["letras.mus.br",163],["soulreaperzone.com",164],["cheatermad.com",165],["mtlurb.com",166],["port.hu",167],["acdriftingpro.com",167],["flight-report.com",167],["forumdz.com",167],["abandonmail.com",167],["beverfood.com",167],["flmods.com",167],["zilinak.sk",167],["temp-phone-number.com",167],["projectfreetv.stream",167],["hotdesimms.com",167],["pdfaid.com",167],["mconverter.eu",167],["dzeko11.net",[167,265]],["mail.com",167],["expresskaszubski.pl",167],["moegirl.org.cn",167],["onemanhua.com",168],["t3n.de",169],["allindiaroundup.com",170],["osuskinner.com",171],["vrcmods.com",171],["thefastlaneforum.com",172],["trade2win.com",173],["gmodleaks.com",173],["fontyukle.net",174],["modagamers.com",175],["freemagazines.top",175],["straatosphere.com",175],["nullpk.com",175],["adslink.pw",175],["downloadudemy.com",175],["techydino.net",175],["picgiraffe.com",175],["weadown.com",175],["freepornsex.net",175],["nurparatodos.com.ar",175],["librospreuniversitariospdf.blogspot.com",176],["forexeen.us",176],["khsm.io",176],["girls-like.me",176],["webcreator-journal.com",176],["nu6i-bg-net.com",176],["routech.ro",177],["hokej.net",177],["turkmmo.com",178],["palermotoday.it",179],["baritoday.it",179],["trentotoday.it",179],["agrigentonotizie.it",179],["anconatoday.it",179],["arezzonotizie.it",179],["avellinotoday.it",179],["bresciatoday.it",179],["brindisireport.it",179],["casertanews.it",179],["cataniatoday.it",179],["cesenatoday.it",179],["chietitoday.it",179],["forlitoday.it",179],["frosinonetoday.it",179],["genovatoday.it",179],["ilpescara.it",179],["ilpiacenza.it",179],["latinatoday.it",179],["lecceprima.it",179],["leccotoday.it",179],["livornotoday.it",179],["messinatoday.it",179],["milanotoday.it",179],["modenatoday.it",179],["monzatoday.it",179],["novaratoday.it",179],["padovaoggi.it",179],["parmatoday.it",179],["perugiatoday.it",179],["pisatoday.it",179],["quicomo.it",179],["ravennatoday.it",179],["reggiotoday.it",179],["riminitoday.it",179],["romatoday.it",179],["salernotoday.it",179],["sondriotoday.it",179],["sportpiacenza.it",179],["ternitoday.it",179],["today.it",179],["torinotoday.it",179],["trevisotoday.it",179],["triesteprima.it",179],["udinetoday.it",179],["veneziatoday.it",179],["vicenzatoday.it",179],["thumpertalk.com",180],["arkcod.org",180],["facciabuco.com",181],["shorterall.com",182],["thelayoff.com",182],["maxstream.video",182],["tvepg.eu",182],["blog24.me",182],["softx64.com",183],["pstream.net",184],["instaanime.com",184],["libreriamo.it",185],["medebooks.xyz",185],["tutorials-technology.info",185],["mashtips.com",185],["marriedgames.com.br",185],["4allprograms.me",185],["nurgsm.com",185],["janusnotes.com",185],["certbyte.com",185],["plugincrack.com",185],["gamingdeputy.com",185],["cryptoblog24.info",185],["freewebcart.com",185],["dailymaverick.co.za",186],["apps2app.com",187],["my-code4you.blogspot.com",188],["leakgaming.fr",189],["pentruea.com",[190,191]],["mchacks.net",192],["why-tech.it",193],["hacksmile.com",194],["compsmag.com",194],["tapetus.pl",195],["autoroad.cz",196],["brawlhalla.fr",196],["tecnobillo.com",196],["sexcamfreeporn.com",197],["breatheheavy.com",198],["wenxuecity.com",199],["key-hub.eu",200],["fabioambrosi.it",201],["tattle.life",202],["emuenzen.de",202],["terrylove.com",202],["mynet.com",203],["cidade.iol.pt",204],["fantacalcio.it",205],["hentaifreak.org",206],["hypebeast.com",207],["krankheiten-simulieren.de",208],["catholic.com",209],["3dmodelshare.org",210],["gourmetscans.net",211],["techinferno.com",212],["phuongtrinhhoahoc.com",213],["ibeconomist.com",214],["bookriot.com",215],["purposegames.com",216],["schoolcheats.net",216],["globo.com",217],["latimes.com",217],["claimrbx.gg",218],["perelki.net",219],["vpn-anbieter-vergleich-test.de",220],["livingincebuforums.com",221],["paperzonevn.com",222],["alltechnerd.com",223],["malaysianwireless.com",224],["erinsakura.com",225],["infofuge.com",225],["freejav.guru",225],["novelmultiverse.com",225],["fritidsmarkedet.dk",226],["maskinbladet.dk",226],["15min.lt",227],["baddiehub.com",228],["mr9soft.com",229],["21porno.com",230],["adult-sex-gamess.com",231],["hentaigames.app",231],["mobilesexgamesx.com",231],["mysexgamer.com",231],["porngameshd.com",231],["sexgamescc.com",231],["xnxx-sex-videos.com",231],["f2movies.to",232],["freeporncave.com",233],["tubsxxx.com",234],["pornojenny.com",235],["subtitle.one",236],["sextvx.com",237],["studydhaba.com",238],["freecourse.tech",238],["ccthesims.com",238],["victor-mochere.com",238],["papunika.com",238],["mobilanyheter.net",238],["prajwaldesai.com",238],["muztext.com",239],["charbelnemnom.com",240],["online-fix.me",241],["gamersdiscussionhub.com",242],["owlzo.com",243],["maxpixel.net",244],["q1003.com",245],["blogpascher.com",246],["testserver.pro",247],["lifestyle.bg",247],["money.bg",247],["news.bg",247],["topsport.bg",247],["webcafe.bg",247],["mgnet.xyz",248],["advertiserandtimes.co.uk",249],["xvideos2020.me",250],["wouterplanet.com",251],["deezer.com",251],["111.90.159.132",252],["techsolveprac.com",253],["joomlabeginner.com",254],["largescaleforums.com",255],["dubznetwork.com",256],["mundodonghua.com",256],["hentaidexy.com",257],["oceanplay.org",258],["code2care.org",259],["osuskins.net",261],["xxxxsx.com",262],["ngontinh24.com",263],["idevicecentral.com",264],["coinscap.info",267],["greenenez.com",267],["insurancegold.in",267],["webfreetools.net",267],["wiki-topia.com",267],["enit.in",268],["financerites.com",268],["mangacrab.com",269],["idnes.cz",270],["viefaucet.com",272],["cloud-computing-central.com",273],["afk.guide",274],["businessnamegenerator.com",275],["rocketnews24.com",276],["soranews24.com",276],["youpouch.com",276],["ilsole24ore.com",277],["hentaiporn.one",278],["infokik.com",279],["fosslinux.com",280],["shrdsk.me",281],["examword.com",282],["sempreupdate.com.br",282],["tribuna.com",283],["trendsderzukunft.de",284],["gal-dem.com",284],["lostineu.eu",284],["oggitreviso.it",284],["speisekarte.de",284],["mixed.de",284],["lightnovelspot.com",[285,286]],["lightnovelworld.com",[285,286]],["novelpub.com",[285,286]],["webnovelpub.com",[285,286]],["mail.yahoo.com",287],["hwzone.co.il",288],["nammakalvi.com",289],["javmoon.me",290],["c2g.at",291],["terafly.me",291],["bravedown.com",292],["aquarius-horoscopes.com",293],["cancer-horoscopes.com",293],["dubipc.blogspot.com",293],["echoes.gr",293],["engel-horoskop.de",293],["freegames44.com",293],["fuerzasarmadas.eu",293],["gemini-horoscopes.com",293],["jurukunci.net",293],["krebs-horoskop.com",293],["leo-horoscopes.com",293],["maliekrani.com",293],["nklinks.click",293],["ourenseando.es",293],["pisces-horoscopes.com",293],["radio-en-direct.fr",293],["sagittarius-horoscopes.com",293],["scorpio-horoscopes.com",293],["singlehoroskop-loewe.de",293],["skat-karten.de",293],["skorpion-horoskop.com",293],["taurus-horoscopes.com",293],["the1security.com",293],["virgo-horoscopes.com",293],["zonamarela.blogspot.com",293],["yoima.hatenadiary.com",293],["hlspanel.xyz",294],["fapdrop.com",294],["vpntester.org",295],["watchhentai.net",296],["japscan.lol",297],["digitask.ru",298],["tempumail.com",299],["sexvideos.host",300],["10alert.com",302],["cryptstream.de",303],["nydus.org",303],["techhelpbd.com",304],["cellmapper.net",305],["hdrez.com",306],["youwatch-serie.com",306],["freebnbcoin.com",307],["fslinks.org",308],["v6embed.xyz",308],["vembed.net",308],["vgembed.com",308],["vid-guard.com",308],["printablecreative.com",309],["comohoy.com",310],["leak.sx",310],["pornleaks.in",310],["merlininkazani.com",310],["faindx.com",312],["converter-btc.world",313],["j91.asia",314],["jeniusplay.com",315],["indianyug.com",316],["rgb.vn",316],["needrom.com",317],["criptologico.com",318],["megadrive-emulator.com",319],["eromanga-show.com",320],["hentai-one.com",320],["hentaipaw.com",320],["10minuteemails.com",321],["luxusmail.org",321],["w3cub.com",322],["dgb.lol",323],["bangpremier.com",324],["nyaa.iss.ink",325],["scripai.com",327],["myfxbook.com",327],["whatfontis.com",327],["freepdfcomic.com",328],["memedroid.com",329],["raenonx.cc",330],["animesync.org",331],["cheatnetwork.eu",332],["karaoketexty.cz",333],["security-demo.extrahop.com",334]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,8]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",7],["eztv",7],["sushi-scan",11],["spigotunlocked",11],["ahmedmode",11],["kissasian",16],["rp5",18],["mma-core",19],["writedroid",23],["yts",28],["720pstream",28],["1stream",28],["magesy",29],["thefmovies",32],["xhamsterdeutsch",34],["fxporn69",37],["aliancapes",37],["urlcero",40],["totaldebrid",43],["sandrives",43],["oploverz",44],["pouvideo",54],["povvideo",54],["povw1deo",54],["povwideo",54],["powv1deo",54],["powvibeo",54],["powvideo",54],["powvldeo",54],["tubsexer",60],["porno-tour",60],["lenkino",60],["pornomoll",60],["camsclips",60],["m4ufree",65],["dood",65],["crackstreams",65],["telerium",80],["pandafreegames",93],["thoptv",101],["brainly",108],["streameast",125],["thestreameast",125],["daddylivehd",125],["solvetube",130],["hdfilme",131],["pornhub",132],["wcofun",139],["bollyholic",143],["wstream",150],["gotxx",153],["turkanime",159],["voe-unblock",159],["khatrimaza",175],["pogolinks",175],["popcornstream",177],["shortzzy",185],["shineads",185],["privatemoviez",242],["gmx",260],["lightnovelpub",[285,286]],["camcaps",301],["drivebot",326]]);

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
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
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
