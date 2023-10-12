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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["null)","10"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["offsetParent"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["Adb"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["[native code]","500"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["document.body.classList.add","100"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["modal"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["instance.check","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["()","10"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["xclaim"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["AdBanner","2000"],["test","100"],["replace","1500"],["popCanFire"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["()","0"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["[native code]","1"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["eval"],["check","1"],["adsBlocked"],["getComputedStyle","250"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["Math.floor"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["height"],[".show","1000"],[".show"],["innerHTML.replace","1000"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["alert"],["blocker","100"],["length"],["ai_adb"],["t()","0"],["$"],["offsetLeft"],[".show()","1000"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],[".length","2000"],["adsense"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()","3000"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["atob"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["window.location.href=link"],["ai_"],["reachGoal"],["ai"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["ads_block"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["Ads"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["devtool"],["Msg"],["UABP"],["","0"],["","250"],["redURL"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["myTypeWriter"],["detected"],["","5"],["","500"],["/Adform|didomi|adblock|forEach/"],["/\\.innerHtml|offsetWidth/"],["showAdblock"],["-0x"],["display"],["gclid"],["rejectWith"],["refresh"],["window.location"],["ga"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["canRunAds"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["adblocker"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["fetch"],["afterOpen"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["offsetHeight","100"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["m(!0)","800"],["ad_block"],["/detectAdBlocker|window.open/"],["hasAdBlock"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["/adblock/i"],["ad_display"],["adScriptPath"],["adsFound"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["focus.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,10,11]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["kino.de",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,143]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,171]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,271]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["teltarif.de",5],["economictimes.indiatimes.com",6],["m.timesofindia.com",7],["timesofindia.indiatimes.com",7],["youmath.it",7],["redensarten-index.de",7],["lesoir.be",7],["electriciansforums.net",7],["keralatelecom.info",7],["universegunz.net",7],["happypenguin.altervista.org",7],["everyeye.it",7],["bluedrake42.com",7],["streamservicehd.click",7],["supermarioemulator.com",7],["futbollibrehd.com",7],["newsrade.com",7],["eska.pl",7],["eskarock.pl",7],["voxfm.pl",7],["mathaeser.de",7],["freethesaurus.com",9],["thefreedictionary.com",9],["hdbox.ws",11],["todopolicia.com",11],["scat.gold",11],["freecoursesite.com",11],["windowcleaningforums.co.uk",11],["cruisingearth.com",11],["hobby-machinist.com",11],["freegogpcgames.com",11],["latitude.to",11],["kitchennovel.com",11],["w3layouts.com",11],["blog.receivefreesms.co.uk",11],["eductin.com",11],["dealsfinders.blog",11],["audiobooks4soul.com",11],["tinhocdongthap.com",11],["sakarnewz.com",11],["downloadr.in",11],["topcomicporno.com",11],["dongknows.com",11],["traderepublic.community",11],["celtadigital.com",11],["iptvrun.com",11],["adsup.lk",11],["cryptomonitor.in",11],["areatopik.com",11],["cardscanner.co",11],["nullforums.net",11],["courseclub.me",11],["tamarindoyam.com",11],["choiceofmods.com",11],["myqqjd.com",11],["ssdtop.com",11],["apkhex.com",11],["gezegenforum.com",11],["mbc2.live",11],["forumnulled.com",11],["iptvapps.net",11],["null-scripts.net",11],["nullscripts.net",11],["whncourses.com",11],["bloground.ro",11],["witcherhour.com",11],["ottverse.com",11],["mdn.lol",[11,277]],["torrentmac.net",11],["mazakony.com",11],["laptechinfo.com",11],["mc-at.org",11],["playstationhaber.com",11],["mangapt.com",11],["seriesperu.com",11],["pesprofessionals.com",11],["wpsimplehacks.com",11],["sportshub.to",[11,270]],["topsporter.net",[11,270]],["darkwanderer.net",11],["truckingboards.com",11],["coldfrm.org",11],["azrom.net",11],["freepatternsarea.com",11],["alttyab.net",11],["hq-links.com",11],["mobilkulup.com",11],["esopress.com",11],["rttar.com",11],["nesiaku.my.id",11],["jipinsoft.com",11],["surfsees.com",11],["truthnews.de",11],["farsinama.com",11],["worldofiptv.com",11],["vuinsider.com",11],["crazydl.net",11],["gamemodsbase.com",11],["babiato.tech",11],["secuhex.com",11],["turkishaudiocenter.com",11],["galaxyos.net",11],["blackhatworld.com",11],["geektime.co.il",12],["bild.de",13],["mediafire.com",14],["wcoanimedub.tv",15],["wcoforever.net",15],["openspeedtest.com",15],["addtobucketlist.com",15],["3dzip.org",[15,93]],["ilmeteo.it",15],["wcoforever.com",15],["comprovendolibri.it",15],["healthelia.com",15],["keephealth.info",16],["australianfrequentflyer.com.au",17],["afreesms.com",18],["kinoger.re",18],["laksa19.github.io",18],["imgux.buzz",18],["imgewe.buzz",18],["imgxxxx.buzz",18],["imgeza.buzz",18],["imgzzzz.buzz",18],["imgxhfr.buzz",18],["imgqwt.buzz",18],["imgtwq.buzz",18],["imgbjryy.buzz",18],["imgjetr.buzz",18],["imgxelz.buzz",18],["imgytreq.buzz",18],["javcl.com",18],["upvideo.to",18],["tvlogy.to",18],["himovies.to",18],["live.dragaoconnect.net",18],["beststremo.com",18],["seznam.cz",18],["xerifetech.com",18],["wallpapershome.com",20],["ville-ideale.fr",21],["calciomercato.it",22],["calciomercato.com",23],["bersamatekno.com",23],["hotpornfile.org",23],["robloxscripts.com",23],["coolsoft.altervista.org",23],["worldcupfootball.me",[23,28]],["hackedonlinegames.com",23],["jkoding.xyz",23],["settlersonlinemaps.com",23],["1cloudfile.com",23],["magdownload.org",23],["kpkuang.org",23],["shareus.site",23],["crypto4yu.com",23],["faucetwork.space",23],["claimclicks.com",23],["thenightwithoutthedawn.blogspot.com",23],["entutes.com",23],["claimlite.club",23],["bazadecrypto.com",[23,316]],["whosampled.com",24],["imgkings.com",25],["pornvideotop.com",25],["krotkoosporcie.pl",25],["anghami.com",26],["wired.com",27],["tutele.sx",28],["footyhunter3.xyz",28],["magesypro.pro",[29,30]],["tinyppt.com",29],["audiotools.pro",30],["magesy.blog",30],["audioztools.com",[30,31]],["altblogger.net",31],["satoshi-win.xyz",31],["freedeepweb.blogspot.com",31],["freesoft.id",31],["zcteam.id",31],["www-daftarharga.blogspot.com",31],["ear-phone-review.com",31],["telefullenvivo.com",31],["allfoot.info",31],["listatv.pl",31],["encurtandourl.com",[31,157]],["katestube.com",32],["short.pe",32],["footystreams.net",32],["seattletimes.com",33],["yiv.com",34],["pornohans.com",34],["pornoente.tv",[34,83]],["nursexfilme.com",34],["milffabrik.com",[34,83]],["pornohirsch.net",34],["pornozebra.com",[34,83]],["xhamster-sexvideos.com",34],["pornoschlange.com",34],["hdpornos.net",34],["gutesexfilme.com",34],["pornotom.com",[34,83]],["short1.site",34],["zona-leros.com",34],["globalrph.com",35],["e-glossa.it",36],["java-forum.org",37],["comunidadgzone.es",37],["anime-extremo.com",37],["mp3fy.com",37],["lebensmittelpraxis.de",37],["ebookdz.com",37],["forum-pokemon-go.fr",37],["praxis-jugendarbeit.de",37],["gdrivez.xyz",37],["dictionnaire-medical.net",37],["cle0desktop.blogspot.com",37],["up-load.io",37],["direct-link.net",37],["direkt-wissen.com",37],["keysbrasil.blogspot.com",37],["hotpress.info",37],["turkleech.com",37],["anibatch.me",37],["anime-i.com",37],["healthtune.site",37],["gewinde-normen.de",37],["freewebscript.com",38],["webcheats.com.br",39],["gala.fr",41],["gentside.com",41],["geo.fr",41],["hbrfrance.fr",41],["nationalgeographic.fr",41],["ohmymag.com",41],["serengo.net",41],["vsd.fr",41],["updato.com",[42,61]],["methbox.com",43],["daizurin.com",43],["pendekarsubs.us",43],["dreamfancy.org",43],["rysafe.blogspot.com",43],["toppng.com",43],["th-world.com",43],["avjamack.com",43],["avjamak.net",43],["techacode.com",43],["tickzoo.tv",44],["daddyhd.com",45],["embedstream.me",45],["yts-subs.net",45],["cnnamador.com",46],["ksbw.com",47],["nudecelebforum.com",48],["pronpic.org",49],["thewebflash.com",50],["discordfastfood.com",50],["xup.in",50],["popularmechanics.com",51],["op.gg",52],["makeuseof.com",53],["lequipe.fr",54],["jellynote.com",55],["knights-table.net",56],["eporner.com",57],["pornbimbo.com",58],["allmonitors24.com",58],["4j.com",58],["avoiderrors.com",59],["cgtips.org",[59,215]],["sitarchive.com",59],["livenewsof.com",59],["topnewsshow.com",59],["gatcha.org",59],["empregoestagios.com",59],["everydayonsales.com",59],["kusonime.com",59],["aagmaal.xyz",59],["suicidepics.com",59],["codesnail.com",59],["codingshiksha.com",59],["graphicux.com",59],["hardcoregames.ca",59],["asyadrama.com",59],["bitcoinegypt.news",59],["citychilli.com",59],["talkjarvis.com",59],["hdmotori.it",60],["femdomtb.com",62],["camhub.cc",62],["bobs-tube.com",62],["ru-xvideos.me",62],["pornfd.com",62],["popno-tour.net",62],["molll.mobi",62],["watchmdh.to",62],["camwhores.tv",62],["audioz.cc",63],["audioz.es",63],["vectorizer.io",63],["smgplaza.com",63],["ftuapps.dev",63],["onehack.us",63],["thapcam.net",63],["elfqrin.com",64],["satcesc.com",65],["apfelpatient.de",65],["lusthero.com",66],["hpav.tv",67],["hpjav.tv",67],["m2list.com",67],["embed.nana2play.com",67],["elahmad.com",67],["dofusports.xyz",67],["pobre.tv",67],["dallasnews.com",68],["lnk.news",69],["lnk.parts",69],["efukt.com",70],["wendycode.com",70],["springfieldspringfield.co.uk",71],["porndoe.com",72],["smsget.net",[73,74]],["kjanime.net",75],["gioialive.it",76],["classicreload.com",77],["chicoer.com",78],["bostonherald.com",78],["dailycamera.com",78],["gomiblog.com",79],["maxcheaters.com",80],["rbxoffers.com",80],["postimees.ee",80],["police.community",80],["gisarea.com",80],["schaken-mods.com",80],["theclashify.com",80],["txori.com",80],["olarila.com",80],["deletedspeedstreams.blogspot.com",80],["sportsplays.com",81],["deinesexfilme.com",83],["einfachtitten.com",83],["halloporno.com",83],["herzporno.com",83],["lesbenhd.com",83],["porn-monkey.com",83],["porndrake.com",83],["pornhubdeutsch.net",83],["pornoaffe.com",83],["pornodavid.com",83],["pornofisch.com",83],["pornofelix.com",83],["pornohammer.com",83],["pornohelm.com",83],["pornoklinge.com",83],["pornotommy.com",83],["pornovideos-hd.com",83],["xhamsterdeutsch.xyz",83],["xnxx-sexfilme.com",83],["zerion.cc",83],["androidworld.it",84],["letribunaldunet.fr",85],["vladan.fr",85],["live-tv-channels.org",86],["eslfast.com",87],["freegamescasual.com",88],["tcpvpn.com",89],["oko.sh",89],["bookriot.com",89],["timesnownews.com",89],["timesnowhindi.com",89],["timesnowmarathi.com",89],["zoomtventertainment.com",89],["xxxuno.com",90],["sholah.net",91],["2rdroid.com",91],["bisceglielive.it",92],["pandajogosgratis.com.br",94],["5278.cc",95],["tonspion.de",97],["duplichecker.com",98],["plagiarismchecker.co",98],["plagiarismdetector.net",98],["searchenginereports.net",98],["smallseotools.com",98],["giallozafferano.it",99],["autojournal.fr",99],["autoplus.fr",99],["sportauto.fr",99],["linkspaid.com",100],["proxydocker.com",100],["beeimg.com",[101,102]],["emturbovid.com",102],["ftlauderdalebeachcam.com",103],["ftlauderdalewebcam.com",103],["juneauharborwebcam.com",103],["keywestharborwebcam.com",103],["kittycatcam.com",103],["mahobeachcam.com",103],["miamiairportcam.com",103],["morganhillwebcam.com",103],["njwildlifecam.com",103],["nyharborwebcam.com",103],["paradiseislandcam.com",103],["pompanobeachcam.com",103],["portbermudawebcam.com",103],["portcanaveralwebcam.com",103],["portevergladeswebcam.com",103],["portmiamiwebcam.com",103],["portnywebcam.com",103],["portnassauwebcam.com",103],["portstmaartenwebcam.com",103],["porttampawebcam.com",103],["sxmislandcam.com",103],["gearingcommander.com",103],["themes-dl.com",103],["badassdownloader.com",103],["badasshardcore.com",103],["badassoftcore.com",103],["nulljungle.com",103],["teevee.asia",103],["otakukan.com",103],["linksht.com",105],["generate.plus",106],["calculate.plus",106],["avcesar.com",107],["audiotag.info",108],["tudigitale.it",109],["ibcomputing.com",110],["eodev.com",111],["legia.net",112],["acapellas4u.co.uk",113],["streamhentaimovies.com",114],["konten.co.id",115],["diariodenavarra.es",116],["xiaomifans.pl",117],["eletronicabr.com",117],["iphonesoft.fr",118],["gload.cc",119],["optifine.net",120],["luzernerzeitung.ch",121],["tagblatt.ch",121],["spellcheck.net",122],["spellchecker.net",122],["spellweb.com",122],["ableitungsrechner.net",123],["alternet.org",124],["imtranslator.net",125],["shrib.com",126],["pandafiles.com",127],["vidia.tv",[127,150]],["hortonanderfarom.blogspot.com",127],["clarifystraight.com",127],["constraindefiant.net",128],["tutelehd3.xyz",128],["mega4upload.com",128],["coolcast2.com",128],["techclips.net",128],["earthquakecensus.com",128],["footyhunter.lol",128],["gamerarcades.com",128],["poscitech.click",128],["starlive.stream",128],["utopianwilderness.com",128],["wecast.to",128],["sportbar.live",128],["lordchannel.com",128],["play-old-pc-games.com",129],["scrin.org",130],["tunovelaligera.com",131],["tapchipi.com",131],["cuitandokter.com",131],["tech-blogs.com",131],["cardiagn.com",131],["dcleakers.com",131],["esgeeks.com",131],["pugliain.net",131],["uplod.net",131],["worldfreeware.com",131],["fikiri.net",131],["myhackingworld.com",131],["phoenixfansub.com",131],["freecourseweb.com",132],["devcourseweb.com",132],["coursewikia.com",132],["courseboat.com",132],["coursehulu.com",132],["lne.es",136],["pornult.com",137],["webcamsdolls.com",137],["adsy.pw",137],["playstore.pw",137],["bitcotasks.com",137],["exactpay.online",137],["thothd.to",137],["proplanta.de",138],["hydrogenassociation.org",139],["ludigames.com",139],["made-by.org",139],["xenvn.com",139],["worldtravelling.com",139],["igirls.in",139],["technichero.com",139],["roshiyatech.my.id",139],["1upinfinite.com",139],["24sport.stream",139],["tii.la",139],["yesmangas1.com",139],["aeroxplorer.com",139],["mad4wheels.com",140],["logi.im",140],["emailnator.com",140],["textograto.com",141],["voyageforum.com",142],["hmc-id.blogspot.com",142],["jemerik.com",142],["myabandonware.com",142],["chatta.it",144],["ketubanjiwa.com",145],["nsfw247.to",146],["funzen.net",146],["fighter.stream",146],["ilclubdellericette.it",146],["hubstream.in",146],["extremereportbot.com",[147,148]],["getintopc.com",149],["qoshe.com",151],["lowellsun.com",152],["mamadu.pl",152],["dobrapogoda24.pl",152],["motohigh.pl",152],["namasce.pl",152],["ultimate-catch.eu",153],["tabele-kalorii.pl",153],["cpopchanelofficial.com",155],["cryptowidgets.net",[155,273]],["creditcardgenerator.com",156],["creditcardrush.com",156],["bostoncommons.net",156],["thejobsmovie.com",156],["livsavr.co",156],["hl-live.de",157],["ihow.info",157],["filesus.com",157],["sturls.com",157],["re.two.re",157],["turbo1.co",157],["cartoonsarea.xyz",157],["nilopolisonline.com.br",158],["mesquitaonline.com",158],["yellowbridge.com",158],["socialgirls.im",159],["yaoiotaku.com",160],["camhub.world",161],["moneyhouse.ch",162],["valeronevijao.com",163],["cigarlessarefy.com",163],["figeterpiazine.com",163],["yodelswartlike.com",163],["generatesnitrosate.com",163],["crownmakermacaronicism.com",163],["chromotypic.com",163],["gamoneinterrupted.com",163],["metagnathtuggers.com",163],["wolfdyslectic.com",163],["rationalityaloelike.com",163],["sizyreelingly.com",163],["simpulumlamerop.com",163],["urochsunloath.com",163],["monorhinouscassaba.com",163],["counterclockwisejacky.com",163],["35volitantplimsoles5.com",163],["scatch176duplicities.com",163],["antecoxalbobbing1010.com",163],["boonlessbestselling244.com",163],["cyamidpulverulence530.com",163],["guidon40hyporadius9.com",163],["449unceremoniousnasoseptal.com",163],["19turanosephantasia.com",163],["30sensualizeexpression.com",163],["321naturelikefurfuroid.com",163],["745mingiestblissfully.com",163],["availedsmallest.com",163],["greaseball6eventual20.com",163],["toxitabellaeatrebates306.com",163],["20demidistance9elongations.com",163],["audaciousdefaulthouse.com",163],["fittingcentermondaysunday.com",163],["fraudclatterflyingcar.com",163],["launchreliantcleaverriver.com",163],["matriculant401merited.com",163],["realfinanceblogcenter.com",163],["reputationsheriffkennethsand.com",163],["telyn610zoanthropy.com",163],["tubelessceliolymph.com",163],["tummulerviolableness.com",163],["un-block-voe.net",163],["v-o-e-unblock.com",163],["voe-un-block.com",163],["voeun-block.net",163],["voeunbl0ck.com",163],["voeunblck.com",163],["voeunblk.com",163],["voeunblock.com",163],["voeunblock1.com",163],["voeunblock2.com",163],["voeunblock3.com",163],["agefi.fr",164],["cariskuy.com",165],["letras2.com",165],["yusepjaelani.blogspot.com",166],["letras.mus.br",167],["soulreaperzone.com",168],["cheatermad.com",169],["mtlurb.com",170],["port.hu",171],["acdriftingpro.com",171],["flight-report.com",171],["forumdz.com",171],["abandonmail.com",171],["beverfood.com",171],["flmods.com",171],["zilinak.sk",171],["temp-phone-number.com",171],["projectfreetv.stream",171],["hotdesimms.com",171],["pdfaid.com",171],["mconverter.eu",171],["dzeko11.net",[171,270]],["mail.com",171],["expresskaszubski.pl",171],["moegirl.org.cn",171],["onemanhua.com",172],["t3n.de",173],["allindiaroundup.com",174],["osuskinner.com",175],["vrcmods.com",175],["thefastlaneforum.com",176],["trade2win.com",177],["gmodleaks.com",177],["fontyukle.net",178],["modagamers.com",179],["nulleb.com",179],["freemagazines.top",179],["straatosphere.com",179],["nullpk.com",179],["adslink.pw",179],["downloadudemy.com",179],["techydino.net",179],["picgiraffe.com",179],["weadown.com",179],["freepornsex.net",179],["nurparatodos.com.ar",179],["librospreuniversitariospdf.blogspot.com",180],["forexeen.us",180],["khsm.io",180],["girls-like.me",180],["webcreator-journal.com",180],["nu6i-bg-net.com",180],["routech.ro",181],["hokej.net",181],["turkmmo.com",182],["palermotoday.it",183],["baritoday.it",183],["trentotoday.it",183],["agrigentonotizie.it",183],["anconatoday.it",183],["arezzonotizie.it",183],["avellinotoday.it",183],["bresciatoday.it",183],["brindisireport.it",183],["casertanews.it",183],["cataniatoday.it",183],["cesenatoday.it",183],["chietitoday.it",183],["forlitoday.it",183],["frosinonetoday.it",183],["genovatoday.it",183],["ilpescara.it",183],["ilpiacenza.it",183],["latinatoday.it",183],["lecceprima.it",183],["leccotoday.it",183],["livornotoday.it",183],["messinatoday.it",183],["milanotoday.it",183],["modenatoday.it",183],["monzatoday.it",183],["novaratoday.it",183],["padovaoggi.it",183],["parmatoday.it",183],["perugiatoday.it",183],["pisatoday.it",183],["quicomo.it",183],["ravennatoday.it",183],["reggiotoday.it",183],["riminitoday.it",183],["romatoday.it",183],["salernotoday.it",183],["sondriotoday.it",183],["sportpiacenza.it",183],["ternitoday.it",183],["today.it",183],["torinotoday.it",183],["trevisotoday.it",183],["triesteprima.it",183],["udinetoday.it",183],["veneziatoday.it",183],["vicenzatoday.it",183],["thumpertalk.com",184],["arkcod.org",184],["facciabuco.com",185],["shorterall.com",186],["thelayoff.com",186],["maxstream.video",186],["tvepg.eu",186],["blog24.me",186],["softx64.com",187],["pstream.net",188],["instaanime.com",188],["libreriamo.it",189],["medebooks.xyz",189],["tutorials-technology.info",189],["mashtips.com",189],["marriedgames.com.br",189],["4allprograms.me",189],["nurgsm.com",189],["janusnotes.com",189],["certbyte.com",189],["plugincrack.com",189],["gamingdeputy.com",189],["cryptoblog24.info",189],["freewebcart.com",189],["dailymaverick.co.za",190],["apps2app.com",191],["my-code4you.blogspot.com",192],["leakgaming.fr",193],["pentruea.com",[194,195]],["mchacks.net",196],["why-tech.it",197],["hacksmile.com",198],["compsmag.com",198],["tapetus.pl",199],["autoroad.cz",200],["brawlhalla.fr",200],["tecnobillo.com",200],["sexcamfreeporn.com",201],["breatheheavy.com",202],["wenxuecity.com",203],["key-hub.eu",204],["fabioambrosi.it",205],["tamrieltradecentre.com",[205,264]],["tattle.life",206],["emuenzen.de",206],["mynet.com",207],["cidade.iol.pt",208],["fantacalcio.it",209],["hentaifreak.org",210],["hypebeast.com",211],["krankheiten-simulieren.de",212],["catholic.com",213],["3dmodelshare.org",214],["gourmetscans.net",215],["techinferno.com",216],["phuongtrinhhoahoc.com",217],["ibeconomist.com",218],["purposegames.com",219],["schoolcheats.net",219],["globo.com",220],["latimes.com",220],["claimrbx.gg",221],["perelki.net",222],["vpn-anbieter-vergleich-test.de",223],["livingincebuforums.com",224],["paperzonevn.com",225],["alltechnerd.com",226],["malaysianwireless.com",227],["erinsakura.com",228],["infofuge.com",228],["freejav.guru",228],["novelmultiverse.com",228],["fritidsmarkedet.dk",229],["maskinbladet.dk",229],["15min.lt",230],["lewdninja.com",231],["lewd.ninja",231],["hentaidexy.com",231],["baddiehub.com",232],["mr9soft.com",233],["21porno.com",234],["adult-sex-gamess.com",235],["hentaigames.app",235],["mobilesexgamesx.com",235],["mysexgamer.com",235],["porngameshd.com",235],["sexgamescc.com",235],["xnxx-sex-videos.com",235],["f2movies.to",236],["freeporncave.com",237],["tubsxxx.com",238],["pornojenny.com",239],["subtitle.one",240],["sextvx.com",241],["studydhaba.com",242],["freecourse.tech",242],["ccthesims.com",242],["victor-mochere.com",242],["papunika.com",242],["mobilanyheter.net",242],["prajwaldesai.com",242],["muztext.com",243],["charbelnemnom.com",244],["online-fix.me",245],["gamersdiscussionhub.com",246],["owlzo.com",247],["maxpixel.net",248],["q1003.com",249],["blogpascher.com",250],["testserver.pro",251],["lifestyle.bg",251],["money.bg",251],["news.bg",251],["topsport.bg",251],["webcafe.bg",251],["mgnet.xyz",252],["advertiserandtimes.co.uk",253],["xvideos2020.me",254],["wouterplanet.com",255],["deezer.com",255],["111.90.159.132",256],["techsolveprac.com",257],["joomlabeginner.com",258],["largescaleforums.com",259],["dubznetwork.com",260],["mundodonghua.com",260],["oceanplay.org",261],["code2care.org",262],["osuskins.net",265],["allcryptoz.net",266],["crewbase.net",266],["crewus.net",266],["shinbhu.net",266],["shinchu.net",266],["thumb8.net",266],["thumb9.net",266],["topcryptoz.net",266],["uniqueten.net",266],["ultraten.net",266],["hlspanel.xyz",266],["fapdrop.com",266],["beritabaru.news",267],["solusi.cyou",267],["xxxxsx.com",267],["ngontinh24.com",268],["idevicecentral.com",269],["referus.in",272],["coinscap.info",273],["greenenez.com",273],["insurancegold.in",273],["webfreetools.net",273],["wiki-topia.com",273],["enit.in",274],["financerites.com",274],["mangacrab.com",275],["idnes.cz",276],["viefaucet.com",278],["cloud-computing-central.com",279],["afk.guide",280],["businessnamegenerator.com",281],["rocketnews24.com",282],["soranews24.com",282],["youpouch.com",282],["ilsole24ore.com",283],["hentaiporn.one",284],["infokik.com",285],["fosslinux.com",286],["shrdsk.me",287],["examword.com",288],["sempreupdate.com.br",288],["tribuna.com",289],["trendsderzukunft.de",290],["gal-dem.com",290],["lostineu.eu",290],["oggitreviso.it",290],["speisekarte.de",290],["mixed.de",290],["lightnovelspot.com",[291,292]],["lightnovelworld.com",[291,292]],["novelpub.com",[291,292]],["webnovelpub.com",[291,292]],["mail.yahoo.com",293],["hwzone.co.il",294],["nammakalvi.com",295],["javmoon.me",296],["c2g.at",297],["terafly.me",297],["bravedown.com",298],["aquarius-horoscopes.com",299],["cancer-horoscopes.com",299],["dubipc.blogspot.com",299],["echoes.gr",299],["engel-horoskop.de",299],["freegames44.com",299],["fuerzasarmadas.eu",299],["gemini-horoscopes.com",299],["jurukunci.net",299],["krebs-horoskop.com",299],["leo-horoscopes.com",299],["maliekrani.com",299],["nklinks.click",299],["ourenseando.es",299],["pisces-horoscopes.com",299],["radio-en-direct.fr",299],["sagittarius-horoscopes.com",299],["scorpio-horoscopes.com",299],["singlehoroskop-loewe.de",299],["skat-karten.de",299],["skorpion-horoskop.com",299],["taurus-horoscopes.com",299],["the1security.com",299],["virgo-horoscopes.com",299],["zonamarela.blogspot.com",299],["yoima.hatenadiary.com",299],["vpntester.org",300],["watchhentai.net",301],["japscan.lol",302],["digitask.ru",303],["tempumail.com",304],["sexvideos.host",305],["10alert.com",307],["cryptstream.de",308],["nydus.org",308],["techhelpbd.com",309],["cellmapper.net",310],["hdrez.com",311],["youwatch-serie.com",311],["freebnbcoin.com",312],["fslinks.org",313],["v6embed.xyz",313],["vembed.net",313],["vgembed.com",313],["vid-guard.com",313],["printablecreative.com",314],["comohoy.com",315],["leak.sx",315],["pornleaks.in",315],["merlininkazani.com",315],["faindx.com",317],["converter-btc.world",318],["j91.asia",319],["jeniusplay.com",320],["indianyug.com",321],["rgb.vn",321],["needrom.com",322],["criptologico.com",323],["megadrive-emulator.com",324],["hentai-one.com",325],["hentaipaw.com",325],["10minuteemails.com",326],["luxusmail.org",326],["w3cub.com",327],["dgb.lol",328],["bangpremier.com",329],["nyaa.iss.ink",330],["scripai.com",332],["myfxbook.com",332],["freepdfcomic.com",333],["memedroid.com",334],["raenonx.cc",335],["security-demo.extrahop.com",336]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,8]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",7],["eztv",7],["sushi-scan",11],["spigotunlocked",11],["ahmedmode",11],["kissasian",16],["rp5",18],["mma-core",19],["writedroid",23],["yts",28],["720pstream",28],["1stream",28],["magesy",29],["thefmovies",32],["xhamsterdeutsch",34],["fxporn69",37],["aliancapes",37],["urlcero",40],["totaldebrid",43],["sandrives",43],["oploverz",44],["pouvideo",56],["povvideo",56],["povw1deo",56],["povwideo",56],["powv1deo",56],["powvibeo",56],["powvideo",56],["powvldeo",56],["tubsexer",62],["porno-tour",62],["lenkino",62],["pornomoll",62],["camsclips",62],["m4ufree",67],["dood",67],["crackstreams",67],["telerium",82],["pandafreegames",96],["thoptv",104],["brainly",111],["streameast",128],["thestreameast",128],["daddylivehd",128],["solvetube",133],["hdfilme",134],["pornhub",135],["wcofun",142],["bollyholic",146],["wstream",154],["gotxx",157],["turkanime",163],["voe-unblock",163],["khatrimaza",179],["pogolinks",179],["popcornstream",181],["shortzzy",189],["shineads",189],["privatemoviez",246],["gmx",263],["lightnovelpub",[291,292]],["camcaps",306],["drivebot",331]]);

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
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
