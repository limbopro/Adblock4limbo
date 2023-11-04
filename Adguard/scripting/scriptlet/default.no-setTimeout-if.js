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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["null)","10"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["offsetParent"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["Adb"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["[native code]","500"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["modal"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["instance.check","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["xclaim"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["AdBanner","2000"],["test","100"],["replace","1500"],["popCanFire"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["()","0"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["[native code]","1"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["eval"],["check","1"],["adsBlocked"],["getComputedStyle","250"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["Math.floor"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["height"],[".show","1000"],[".show"],["innerHTML.replace","1000"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["alert"],["blocker","100"],["length"],["ai_adb"],["t()","0"],["$"],["offsetLeft"],[".show()","1000"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],[".length","2000"],["adsense"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()","3000"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["window.location.href=link"],["ai_"],["reachGoal"],["ai"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["ads_block"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["Ads"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["atob"],["devtool"],["Msg"],["UABP"],["","0"],["","250"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["/bait|detected/"],["","5"],["","500"],["/Adform|didomi|adblock|forEach/"],["/\\.innerHtml|offsetWidth/"],["showAdblock"],["-0x"],["display"],["gclid"],["rejectWith"],["refresh"],["window.location"],["ga"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["canRunAds"],["displayMessage","2000"],["redURL"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["adblocker"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["fetch"],["afterOpen"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["offsetHeight","100"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["hasAdBlock"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["/adblock/i"],["ad_display"],["/adScriptPath|MMDConfig/"],["adsFound"],["0x","100"],["/ads|adb/"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["focus.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,10,11]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["kino.de",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,141]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,169]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,268]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["teltarif.de",5],["economictimes.indiatimes.com",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["bluedrake42.com",7],["streamservicehd.click",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["newsrade.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["freethesaurus.com",9],["thefreedictionary.com",9],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["tinhocdongthap.com",11],["sakarnewz.com",11],["downloadr.in",11],["topcomicporno.com",11],["dongknows.com",11],["traderepublic.community",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["mbc2.live",11],["forumnulled.com",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["whncourses.com",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["mdn.lol",[11,273]],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["mangapt.com",11],["seriesperu.com",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,267]],["topsporter.net",[11,267]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["hq-links.com",11],["mobilkulup.com",11],["esopress.com",11],["rttar.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["surfsees.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["blackhatworld.com",11],["bizdustry.com",11],["geektime.co.il",12],["bild.de",13],["mediafire.com",14],["wcoanimedub.tv",15],["wcoforever.net",15],["openspeedtest.com",15],["addtobucketlist.com",15],["3dzip.org",[15,91]],["ilmeteo.it",15],["wcoforever.com",15],["comprovendolibri.it",15],["healthelia.com",15],["keephealth.info",16],["australianfrequentflyer.com.au",17],["afreesms.com",18],["kinoger.re",18],["laksa19.github.io",18],["imgux.buzz",18],["imgewe.buzz",18],["imgxxxx.buzz",18],["imgeza.buzz",18],["imgzzzz.buzz",18],["imgxhfr.buzz",18],["imgqwt.buzz",18],["imgtwq.buzz",18],["imgbjryy.buzz",18],["imgjetr.buzz",18],["imgxelz.buzz",18],["imgytreq.buzz",18],["javcl.com",18],["upvideo.to",18],["tvlogy.to",18],["himovies.to",18],["live.dragaoconnect.net",18],["beststremo.com",18],["seznam.cz",18],["seznamzpravy.cz",18],["xerifetech.com",18],["wallpapershome.com",20],["ville-ideale.fr",21],["calciomercato.it",22],["calciomercato.com",23],["bersamatekno.com",23],["hotpornfile.org",23],["robloxscripts.com",23],["coolsoft.altervista.org",23],["worldcupfootball.me",[23,28]],["hackedonlinegames.com",23],["jkoding.xyz",23],["settlersonlinemaps.com",23],["1cloudfile.com",23],["magdownload.org",23],["kpkuang.org",23],["shareus.site",23],["crypto4yu.com",23],["faucetwork.space",23],["claimclicks.com",23],["thenightwithoutthedawn.blogspot.com",23],["entutes.com",23],["claimlite.club",23],["bazadecrypto.com",[23,313]],["whosampled.com",24],["imgkings.com",25],["pornvideotop.com",25],["krotkoosporcie.pl",25],["anghami.com",26],["wired.com",27],["tutele.sx",28],["footyhunter3.xyz",28],["magesypro.pro",[29,30]],["tinyppt.com",29],["audiotools.pro",30],["magesy.blog",30],["audioztools.com",[30,31]],["altblogger.net",31],["satoshi-win.xyz",31],["freedeepweb.blogspot.com",31],["freesoft.id",31],["zcteam.id",31],["www-daftarharga.blogspot.com",31],["ear-phone-review.com",31],["telefullenvivo.com",31],["listatv.pl",31],["encurtandourl.com",[31,155]],["katestube.com",32],["short.pe",32],["footystreams.net",32],["seattletimes.com",33],["yiv.com",34],["pornohans.com",34],["pornoente.tv",[34,82]],["nursexfilme.com",34],["milffabrik.com",[34,82]],["pornohirsch.net",34],["pornozebra.com",[34,82]],["xhamster-sexvideos.com",34],["pornoschlange.com",34],["hdpornos.net",34],["gutesexfilme.com",34],["pornotom.com",[34,82]],["short1.site",34],["zona-leros.com",34],["globalrph.com",35],["e-glossa.it",36],["java-forum.org",37],["comunidadgzone.es",37],["anime-extremo.com",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["healthtune.site",37],["gewinde-normen.de",37],["freewebscript.com",38],["webcheats.com.br",39],["gala.fr",41],["gentside.com",41],["geo.fr",41],["hbrfrance.fr",41],["nationalgeographic.fr",41],["ohmymag.com",41],["serengo.net",41],["vsd.fr",41],["updato.com",[42,60]],["methbox.com",43],["daizurin.com",43],["pendekarsubs.us",43],["dreamfancy.org",43],["rysafe.blogspot.com",43],["toppng.com",43],["th-world.com",43],["avjamack.com",43],["avjamak.net",43],["techacode.com",43],["tickzoo.tv",44],["daddyhd.com",45],["embedstream.me",45],["yts-subs.net",45],["cnnamador.com",46],["ksbw.com",47],["nudecelebforum.com",48],["pronpic.org",49],["thewebflash.com",50],["discordfastfood.com",50],["xup.in",50],["popularmechanics.com",51],["op.gg",52],["lequipe.fr",53],["jellynote.com",54],["knights-table.net",55],["eporner.com",56],["pornbimbo.com",57],["allmonitors24.com",57],["4j.com",57],["avoiderrors.com",58],["cgtips.org",[58,213]],["sitarchive.com",58],["livenewsof.com",58],["topnewsshow.com",58],["gatcha.org",58],["empregoestagios.com",58],["everydayonsales.com",58],["kusonime.com",58],["aagmaal.xyz",58],["suicidepics.com",58],["codesnail.com",58],["codingshiksha.com",58],["graphicux.com",58],["hardcoregames.ca",58],["asyadrama.com",58],["bitcoinegypt.news",58],["citychilli.com",58],["talkjarvis.com",58],["hdmotori.it",59],["femdomtb.com",61],["camhub.cc",61],["bobs-tube.com",61],["ru-xvideos.me",61],["pornfd.com",61],["popno-tour.net",61],["molll.mobi",61],["watchmdh.to",61],["camwhores.tv",61],["audioz.cc",62],["audioz.es",62],["vectorizer.io",62],["smgplaza.com",62],["ftuapps.dev",62],["onehack.us",62],["thapcam.net",62],["elfqrin.com",63],["satcesc.com",64],["apfelpatient.de",64],["lusthero.com",65],["hpav.tv",66],["hpjav.tv",66],["m2list.com",66],["embed.nana2play.com",66],["elahmad.com",66],["dofusports.xyz",66],["dallasnews.com",67],["lnk.news",68],["lnk.parts",68],["efukt.com",69],["wendycode.com",69],["springfieldspringfield.co.uk",70],["porndoe.com",71],["smsget.net",[72,73]],["kjanime.net",74],["gioialive.it",75],["classicreload.com",76],["chicoer.com",77],["bostonherald.com",77],["dailycamera.com",77],["gomiblog.com",78],["maxcheaters.com",79],["rbxoffers.com",79],["postimees.ee",79],["police.community",79],["gisarea.com",79],["schaken-mods.com",79],["theclashify.com",79],["txori.com",79],["olarila.com",79],["deletedspeedstreams.blogspot.com",79],["sportsplays.com",80],["deinesexfilme.com",82],["einfachtitten.com",82],["halloporno.com",82],["herzporno.com",82],["lesbenhd.com",82],["porn-monkey.com",82],["porndrake.com",82],["pornhubdeutsch.net",82],["pornoaffe.com",82],["pornodavid.com",82],["pornofisch.com",82],["pornofelix.com",82],["pornohammer.com",82],["pornohelm.com",82],["pornoklinge.com",82],["pornotommy.com",82],["pornovideos-hd.com",82],["xhamsterdeutsch.xyz",82],["xnxx-sexfilme.com",82],["zerion.cc",82],["letribunaldunet.fr",83],["vladan.fr",83],["live-tv-channels.org",84],["eslfast.com",85],["freegamescasual.com",86],["tcpvpn.com",87],["oko.sh",87],["bookriot.com",87],["timesnownews.com",87],["timesnowhindi.com",87],["timesnowmarathi.com",87],["zoomtventertainment.com",87],["xxxuno.com",88],["sholah.net",89],["2rdroid.com",89],["bisceglielive.it",90],["pandajogosgratis.com.br",92],["5278.cc",93],["tonspion.de",95],["duplichecker.com",96],["plagiarismchecker.co",96],["plagiarismdetector.net",96],["searchenginereports.net",96],["smallseotools.com",96],["giallozafferano.it",97],["autojournal.fr",97],["autoplus.fr",97],["sportauto.fr",97],["linkspaid.com",98],["proxydocker.com",98],["beeimg.com",[99,100]],["emturbovid.com",100],["ftlauderdalebeachcam.com",101],["ftlauderdalewebcam.com",101],["juneauharborwebcam.com",101],["keywestharborwebcam.com",101],["kittycatcam.com",101],["mahobeachcam.com",101],["miamiairportcam.com",101],["morganhillwebcam.com",101],["njwildlifecam.com",101],["nyharborwebcam.com",101],["paradiseislandcam.com",101],["pompanobeachcam.com",101],["portbermudawebcam.com",101],["portcanaveralwebcam.com",101],["portevergladeswebcam.com",101],["portmiamiwebcam.com",101],["portnywebcam.com",101],["portnassauwebcam.com",101],["portstmaartenwebcam.com",101],["porttampawebcam.com",101],["sxmislandcam.com",101],["gearingcommander.com",101],["themes-dl.com",101],["badassdownloader.com",101],["badasshardcore.com",101],["badassoftcore.com",101],["nulljungle.com",101],["teevee.asia",101],["otakukan.com",101],["linksht.com",103],["generate.plus",104],["calculate.plus",104],["avcesar.com",105],["audiotag.info",106],["tudigitale.it",107],["ibcomputing.com",108],["eodev.com",109],["legia.net",110],["acapellas4u.co.uk",111],["streamhentaimovies.com",112],["konten.co.id",113],["diariodenavarra.es",114],["xiaomifans.pl",115],["eletronicabr.com",115],["iphonesoft.fr",116],["gload.cc",117],["optifine.net",118],["luzernerzeitung.ch",119],["tagblatt.ch",119],["spellcheck.net",120],["spellchecker.net",120],["spellweb.com",120],["ableitungsrechner.net",121],["alternet.org",122],["imtranslator.net",123],["shrib.com",124],["pandafiles.com",125],["vidia.tv",[125,148]],["hortonanderfarom.blogspot.com",125],["clarifystraight.com",125],["constraindefiant.net",126],["tutelehd3.xyz",126],["mega4upload.com",126],["coolcast2.com",126],["techclips.net",126],["earthquakecensus.com",126],["footyhunter.lol",126],["gamerarcades.com",126],["poscitech.click",126],["starlive.stream",126],["utopianwilderness.com",126],["wecast.to",126],["sportbar.live",126],["lordchannel.com",126],["play-old-pc-games.com",127],["scrin.org",128],["tunovelaligera.com",129],["tapchipi.com",129],["cuitandokter.com",129],["tech-blogs.com",129],["cardiagn.com",129],["dcleakers.com",129],["esgeeks.com",129],["pugliain.net",129],["uplod.net",129],["worldfreeware.com",129],["fikiri.net",129],["myhackingworld.com",129],["phoenixfansub.com",129],["freecourseweb.com",130],["devcourseweb.com",130],["coursewikia.com",130],["courseboat.com",130],["coursehulu.com",130],["lne.es",134],["pornult.com",135],["webcamsdolls.com",135],["adsy.pw",135],["playstore.pw",135],["bitcotasks.com",135],["exactpay.online",135],["thothd.to",135],["proplanta.de",136],["hydrogenassociation.org",137],["ludigames.com",137],["made-by.org",137],["xenvn.com",137],["worldtravelling.com",137],["igirls.in",137],["technichero.com",137],["roshiyatech.my.id",137],["1upinfinite.com",137],["24sport.stream",137],["tii.la",137],["yesmangas1.com",137],["aeroxplorer.com",137],["mad4wheels.com",138],["logi.im",138],["emailnator.com",138],["textograto.com",139],["voyageforum.com",140],["hmc-id.blogspot.com",140],["jemerik.com",140],["myabandonware.com",140],["chatta.it",142],["ketubanjiwa.com",143],["nsfw247.to",144],["funzen.net",144],["fighter.stream",144],["ilclubdellericette.it",144],["hubstream.in",144],["extremereportbot.com",[145,146]],["getintopc.com",147],["qoshe.com",149],["lowellsun.com",150],["mamadu.pl",150],["dobrapogoda24.pl",150],["motohigh.pl",150],["namasce.pl",150],["ultimate-catch.eu",151],["tabele-kalorii.pl",151],["cpopchanelofficial.com",153],["cryptowidgets.net",[153,269]],["creditcardgenerator.com",154],["creditcardrush.com",154],["bostoncommons.net",154],["thejobsmovie.com",154],["livsavr.co",154],["hl-live.de",155],["ihow.info",155],["filesus.com",155],["sturls.com",155],["re.two.re",155],["turbo1.co",155],["cartoonsarea.xyz",155],["nilopolisonline.com.br",156],["mesquitaonline.com",156],["yellowbridge.com",156],["socialgirls.im",157],["yaoiotaku.com",158],["camhub.world",159],["moneyhouse.ch",160],["valeronevijao.com",161],["cigarlessarefy.com",161],["figeterpiazine.com",161],["yodelswartlike.com",161],["generatesnitrosate.com",161],["crownmakermacaronicism.com",161],["chromotypic.com",161],["gamoneinterrupted.com",161],["metagnathtuggers.com",161],["wolfdyslectic.com",161],["rationalityaloelike.com",161],["sizyreelingly.com",161],["simpulumlamerop.com",161],["urochsunloath.com",161],["monorhinouscassaba.com",161],["counterclockwisejacky.com",161],["35volitantplimsoles5.com",161],["scatch176duplicities.com",161],["antecoxalbobbing1010.com",161],["boonlessbestselling244.com",161],["cyamidpulverulence530.com",161],["guidon40hyporadius9.com",161],["449unceremoniousnasoseptal.com",161],["19turanosephantasia.com",161],["30sensualizeexpression.com",161],["321naturelikefurfuroid.com",161],["745mingiestblissfully.com",161],["availedsmallest.com",161],["greaseball6eventual20.com",161],["toxitabellaeatrebates306.com",161],["20demidistance9elongations.com",161],["audaciousdefaulthouse.com",161],["fittingcentermondaysunday.com",161],["fraudclatterflyingcar.com",161],["launchreliantcleaverriver.com",161],["matriculant401merited.com",161],["realfinanceblogcenter.com",161],["reputationsheriffkennethsand.com",161],["telyn610zoanthropy.com",161],["tubelessceliolymph.com",161],["tummulerviolableness.com",161],["un-block-voe.net",161],["v-o-e-unblock.com",161],["voe-un-block.com",161],["voeun-block.net",161],["voeunbl0ck.com",161],["voeunblck.com",161],["voeunblk.com",161],["voeunblock.com",161],["voeunblock1.com",161],["voeunblock2.com",161],["voeunblock3.com",161],["agefi.fr",162],["cariskuy.com",163],["letras2.com",163],["yusepjaelani.blogspot.com",164],["letras.mus.br",165],["soulreaperzone.com",166],["cheatermad.com",167],["mtlurb.com",168],["port.hu",169],["acdriftingpro.com",169],["flight-report.com",169],["forumdz.com",169],["abandonmail.com",169],["beverfood.com",169],["flmods.com",169],["zilinak.sk",169],["temp-phone-number.com",169],["projectfreetv.stream",169],["hotdesimms.com",169],["pdfaid.com",169],["mconverter.eu",169],["dzeko11.net",[169,267]],["mail.com",169],["expresskaszubski.pl",169],["moegirl.org.cn",169],["onemanhua.com",170],["t3n.de",171],["allindiaroundup.com",172],["osuskinner.com",173],["vrcmods.com",173],["thefastlaneforum.com",174],["trade2win.com",175],["gmodleaks.com",175],["fontyukle.net",176],["modagamers.com",177],["nulleb.com",177],["freemagazines.top",177],["straatosphere.com",177],["nullpk.com",177],["adslink.pw",177],["downloadudemy.com",177],["techydino.net",177],["picgiraffe.com",177],["weadown.com",177],["freepornsex.net",177],["nurparatodos.com.ar",177],["librospreuniversitariospdf.blogspot.com",178],["forexeen.us",178],["khsm.io",178],["girls-like.me",178],["webcreator-journal.com",178],["nu6i-bg-net.com",178],["routech.ro",179],["hokej.net",179],["turkmmo.com",180],["palermotoday.it",181],["baritoday.it",181],["trentotoday.it",181],["agrigentonotizie.it",181],["anconatoday.it",181],["arezzonotizie.it",181],["avellinotoday.it",181],["bresciatoday.it",181],["brindisireport.it",181],["casertanews.it",181],["cataniatoday.it",181],["cesenatoday.it",181],["chietitoday.it",181],["forlitoday.it",181],["frosinonetoday.it",181],["genovatoday.it",181],["ilpescara.it",181],["ilpiacenza.it",181],["latinatoday.it",181],["lecceprima.it",181],["leccotoday.it",181],["livornotoday.it",181],["messinatoday.it",181],["milanotoday.it",181],["modenatoday.it",181],["monzatoday.it",181],["novaratoday.it",181],["padovaoggi.it",181],["parmatoday.it",181],["perugiatoday.it",181],["pisatoday.it",181],["quicomo.it",181],["ravennatoday.it",181],["reggiotoday.it",181],["riminitoday.it",181],["romatoday.it",181],["salernotoday.it",181],["sondriotoday.it",181],["sportpiacenza.it",181],["ternitoday.it",181],["today.it",181],["torinotoday.it",181],["trevisotoday.it",181],["triesteprima.it",181],["udinetoday.it",181],["veneziatoday.it",181],["vicenzatoday.it",181],["thumpertalk.com",182],["arkcod.org",182],["facciabuco.com",183],["shorterall.com",184],["thelayoff.com",184],["maxstream.video",184],["tvepg.eu",184],["blog24.me",184],["softx64.com",185],["pstream.net",186],["instaanime.com",186],["libreriamo.it",187],["medebooks.xyz",187],["tutorials-technology.info",187],["mashtips.com",187],["marriedgames.com.br",187],["4allprograms.me",187],["nurgsm.com",187],["janusnotes.com",187],["certbyte.com",187],["plugincrack.com",187],["gamingdeputy.com",187],["cryptoblog24.info",187],["freewebcart.com",187],["dailymaverick.co.za",188],["apps2app.com",189],["my-code4you.blogspot.com",190],["leakgaming.fr",191],["pentruea.com",[192,193]],["mchacks.net",194],["why-tech.it",195],["hacksmile.com",196],["compsmag.com",196],["tapetus.pl",197],["autoroad.cz",198],["brawlhalla.fr",198],["tecnobillo.com",198],["sexcamfreeporn.com",199],["breatheheavy.com",200],["wenxuecity.com",201],["key-hub.eu",202],["fabioambrosi.it",203],["tamrieltradecentre.com",[203,262]],["tattle.life",204],["emuenzen.de",204],["mynet.com",205],["cidade.iol.pt",206],["fantacalcio.it",207],["hentaifreak.org",208],["hypebeast.com",209],["krankheiten-simulieren.de",210],["catholic.com",211],["3dmodelshare.org",212],["gourmetscans.net",213],["techinferno.com",214],["phuongtrinhhoahoc.com",215],["ibeconomist.com",216],["purposegames.com",217],["schoolcheats.net",217],["globo.com",218],["latimes.com",218],["claimrbx.gg",219],["perelki.net",220],["vpn-anbieter-vergleich-test.de",221],["livingincebuforums.com",222],["paperzonevn.com",223],["alltechnerd.com",224],["malaysianwireless.com",225],["erinsakura.com",226],["infofuge.com",226],["freejav.guru",226],["novelmultiverse.com",226],["fritidsmarkedet.dk",227],["maskinbladet.dk",227],["15min.lt",228],["baddiehub.com",229],["mr9soft.com",230],["21porno.com",231],["adult-sex-gamess.com",232],["hentaigames.app",232],["mobilesexgamesx.com",232],["mysexgamer.com",232],["porngameshd.com",232],["sexgamescc.com",232],["xnxx-sex-videos.com",232],["f2movies.to",233],["freeporncave.com",234],["tubsxxx.com",235],["pornojenny.com",236],["subtitle.one",237],["sextvx.com",238],["studydhaba.com",239],["freecourse.tech",239],["ccthesims.com",239],["victor-mochere.com",239],["papunika.com",239],["mobilanyheter.net",239],["prajwaldesai.com",239],["muztext.com",240],["charbelnemnom.com",241],["online-fix.me",242],["gamersdiscussionhub.com",243],["owlzo.com",244],["maxpixel.net",245],["q1003.com",246],["blogpascher.com",247],["testserver.pro",248],["lifestyle.bg",248],["money.bg",248],["news.bg",248],["topsport.bg",248],["webcafe.bg",248],["mgnet.xyz",249],["advertiserandtimes.co.uk",250],["xvideos2020.me",251],["wouterplanet.com",252],["deezer.com",252],["111.90.159.132",253],["techsolveprac.com",254],["joomlabeginner.com",255],["largescaleforums.com",256],["dubznetwork.com",257],["mundodonghua.com",257],["hentaidexy.com",258],["oceanplay.org",259],["code2care.org",260],["osuskins.net",263],["xxxxsx.com",264],["ngontinh24.com",265],["idevicecentral.com",266],["coinscap.info",269],["greenenez.com",269],["insurancegold.in",269],["webfreetools.net",269],["wiki-topia.com",269],["enit.in",270],["financerites.com",270],["mangacrab.com",271],["idnes.cz",272],["viefaucet.com",274],["cloud-computing-central.com",275],["afk.guide",276],["businessnamegenerator.com",277],["rocketnews24.com",278],["soranews24.com",278],["youpouch.com",278],["ilsole24ore.com",279],["hentaiporn.one",280],["infokik.com",281],["fosslinux.com",282],["shrdsk.me",283],["examword.com",284],["sempreupdate.com.br",284],["tribuna.com",285],["trendsderzukunft.de",286],["gal-dem.com",286],["lostineu.eu",286],["oggitreviso.it",286],["speisekarte.de",286],["mixed.de",286],["lightnovelspot.com",[287,288]],["lightnovelworld.com",[287,288]],["novelpub.com",[287,288]],["webnovelpub.com",[287,288]],["mail.yahoo.com",289],["hwzone.co.il",290],["nammakalvi.com",291],["javmoon.me",292],["c2g.at",293],["terafly.me",293],["bravedown.com",294],["aquarius-horoscopes.com",295],["cancer-horoscopes.com",295],["dubipc.blogspot.com",295],["echoes.gr",295],["engel-horoskop.de",295],["freegames44.com",295],["fuerzasarmadas.eu",295],["gemini-horoscopes.com",295],["jurukunci.net",295],["krebs-horoskop.com",295],["leo-horoscopes.com",295],["maliekrani.com",295],["nklinks.click",295],["ourenseando.es",295],["pisces-horoscopes.com",295],["radio-en-direct.fr",295],["sagittarius-horoscopes.com",295],["scorpio-horoscopes.com",295],["singlehoroskop-loewe.de",295],["skat-karten.de",295],["skorpion-horoskop.com",295],["taurus-horoscopes.com",295],["the1security.com",295],["virgo-horoscopes.com",295],["zonamarela.blogspot.com",295],["yoima.hatenadiary.com",295],["hlspanel.xyz",296],["fapdrop.com",296],["vpntester.org",297],["watchhentai.net",298],["japscan.lol",299],["digitask.ru",300],["tempumail.com",301],["sexvideos.host",302],["10alert.com",304],["cryptstream.de",305],["nydus.org",305],["techhelpbd.com",306],["cellmapper.net",307],["hdrez.com",308],["youwatch-serie.com",308],["freebnbcoin.com",309],["fslinks.org",310],["v6embed.xyz",310],["vembed.net",310],["vgembed.com",310],["vid-guard.com",310],["printablecreative.com",311],["comohoy.com",312],["leak.sx",312],["pornleaks.in",312],["merlininkazani.com",312],["faindx.com",314],["converter-btc.world",315],["j91.asia",316],["jeniusplay.com",317],["indianyug.com",318],["rgb.vn",318],["needrom.com",319],["criptologico.com",320],["megadrive-emulator.com",321],["eromanga-show.com",322],["hentai-one.com",322],["hentaipaw.com",322],["10minuteemails.com",323],["luxusmail.org",323],["w3cub.com",324],["dgb.lol",325],["bangpremier.com",326],["nyaa.iss.ink",327],["scripai.com",329],["myfxbook.com",329],["whatfontis.com",329],["freepdfcomic.com",330],["memedroid.com",331],["raenonx.cc",332],["animesync.org",333],["cheatnetwork.eu",334],["security-demo.extrahop.com",335]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,8]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",7],["eztv",7],["sushi-scan",11],["spigotunlocked",11],["ahmedmode",11],["kissasian",16],["rp5",18],["mma-core",19],["writedroid",23],["yts",28],["720pstream",28],["1stream",28],["magesy",29],["thefmovies",32],["xhamsterdeutsch",34],["fxporn69",37],["aliancapes",37],["urlcero",40],["totaldebrid",43],["sandrives",43],["oploverz",44],["pouvideo",55],["povvideo",55],["povw1deo",55],["povwideo",55],["powv1deo",55],["powvibeo",55],["powvideo",55],["powvldeo",55],["tubsexer",61],["porno-tour",61],["lenkino",61],["pornomoll",61],["camsclips",61],["m4ufree",66],["dood",66],["crackstreams",66],["telerium",81],["pandafreegames",94],["thoptv",102],["brainly",109],["streameast",126],["thestreameast",126],["daddylivehd",126],["solvetube",131],["hdfilme",132],["pornhub",133],["wcofun",140],["bollyholic",144],["wstream",152],["gotxx",155],["turkanime",161],["voe-unblock",161],["khatrimaza",177],["pogolinks",177],["popcornstream",179],["shortzzy",187],["shineads",187],["privatemoviez",243],["gmx",261],["lightnovelpub",[287,288]],["camcaps",303],["drivebot",328]]);

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
            const a = String(args[0]);
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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
                return new RegExp(match[1], match[2] || flags);
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
