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

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["adObjects"],["offsetParent"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["prompt"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["contrformpub","5000"],["disabledAdBlock","10000"],["_0x"],["ads.length"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["nextFunction"],["'0x"],["apstagLOADED"],["Adb"],["disableDeveloper"],["Blocco","2000"],["nextFunction","2000"],["documentElement.classList.add","400"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["[native code]","500"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["document.body.classList.add","100"],["start","0"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["modal"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["n.trigger","1"],["instance.check","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["()","10"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["/text()|0x/"],["checkStopBlock"],["adspot_top","1500"],["xclaim"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["AdBanner","2000"],["test","100"],["replace","1500"],["popCanFire"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adsbox","1000"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["()","0"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["[native code]","1"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["eval"],["check","1"],["adsBlocked"],["getComputedStyle","250"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["Math.floor"],["offset"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["height"],[".show","1000"],[".show"],["innerHTML.replace","1000"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["alert"],["blocker","100"],["length"],["ai_adb"],["t()","0"],["$"],["offsetLeft"],[".show()","1000"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["data?","4000"],[".data?"],["eabpDialog"],[".length","2000"],["adsense"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()","3000"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["atob"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["window.location.href=link"],["ai_"],["reachGoal"],["ai"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["ads_block"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["Ads"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["devtool"],["Msg"],["UABP"],["","0"],["","250"],["redURL"],["href"],["aaaaa-modal"],["()=>"],["keepChecking"],["null","10"],["myTypeWriter"],["detected"],["","5"],["","500"],["/Adform|didomi|adblock|forEach/"],["/\\.innerHtml|offsetWidth/"],["showAdblock"],["-0x"],["display"],["gclid"],["rejectWith"],["refresh"],["window.location"],["ga"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["canRunAds"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["adblocker"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["fetch"],["afterOpen"],["chkADB"],["onDetected"],["myinfoey","1500"],["placebo"],["offsetHeight","100"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["m(!0)","800"],["ad_block"],["/detectAdBlocker|window.open/"],["hasAdBlock"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["/adblock|location|_0x/i"],["/adblock/i"],["ad_display"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["focus.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,9,10]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["kino.de",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,142]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,170]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,269]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["economictimes.indiatimes.com",5],["m.timesofindia.com",6],["timesofindia.indiatimes.com",6],["youmath.it",6],["redensarten-index.de",6],["lesoir.be",6],["electriciansforums.net",6],["keralatelecom.info",6],["universegunz.net",6],["happypenguin.altervista.org",6],["everyeye.it",6],["bluedrake42.com",6],["streamservicehd.click",6],["supermarioemulator.com",6],["futbollibrehd.com",6],["newsrade.com",6],["eska.pl",6],["eskarock.pl",6],["voxfm.pl",6],["mathaeser.de",6],["freethesaurus.com",8],["thefreedictionary.com",8],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["dongknows.com",10],["traderepublic.community",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["mbc2.live",10],["forumnulled.com",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["whncourses.com",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["mdn.lol",[10,275]],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["mangapt.com",10],["seriesperu.com",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,268]],["topsporter.net",[10,268]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["hq-links.com",10],["mobilkulup.com",10],["esopress.com",10],["rttar.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["surfsees.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["blackhatworld.com",10],["geektime.co.il",11],["bild.de",12],["mediafire.com",13],["wcoanimedub.tv",14],["wcoforever.net",14],["openspeedtest.com",14],["addtobucketlist.com",14],["3dzip.org",[14,92]],["ilmeteo.it",14],["wcoforever.com",14],["comprovendolibri.it",14],["healthelia.com",14],["keephealth.info",15],["australianfrequentflyer.com.au",16],["afreesms.com",17],["kinoger.re",17],["laksa19.github.io",17],["imgux.buzz",17],["imgewe.buzz",17],["imgxxxx.buzz",17],["imgeza.buzz",17],["imgzzzz.buzz",17],["imgxhfr.buzz",17],["imgqwt.buzz",17],["imgtwq.buzz",17],["imgbjryy.buzz",17],["imgjetr.buzz",17],["imgxelz.buzz",17],["imgytreq.buzz",17],["javcl.com",17],["upvideo.to",17],["tvlogy.to",17],["himovies.to",17],["live.dragaoconnect.net",17],["beststremo.com",17],["seznam.cz",17],["xerifetech.com",17],["wallpapershome.com",19],["ville-ideale.fr",20],["calciomercato.it",21],["calciomercato.com",22],["bersamatekno.com",22],["hotpornfile.org",22],["robloxscripts.com",22],["coolsoft.altervista.org",22],["worldcupfootball.me",[22,27]],["hackedonlinegames.com",22],["jkoding.xyz",22],["settlersonlinemaps.com",22],["1cloudfile.com",22],["magdownload.org",22],["kpkuang.org",22],["shareus.site",22],["crypto4yu.com",22],["faucetwork.space",22],["claimclicks.com",22],["thenightwithoutthedawn.blogspot.com",22],["entutes.com",22],["claimlite.club",22],["bazadecrypto.com",[22,314]],["whosampled.com",23],["imgkings.com",24],["pornvideotop.com",24],["krotkoosporcie.pl",24],["anghami.com",25],["wired.com",26],["tutele.sx",27],["footyhunter3.xyz",27],["magesypro.pro",[28,29]],["tinyppt.com",28],["audiotools.pro",29],["magesy.blog",29],["audioztools.com",[29,30]],["altblogger.net",30],["satoshi-win.xyz",30],["freedeepweb.blogspot.com",30],["freesoft.id",30],["zcteam.id",30],["www-daftarharga.blogspot.com",30],["ear-phone-review.com",30],["telefullenvivo.com",30],["allfoot.info",30],["listatv.pl",30],["encurtandourl.com",[30,156]],["katestube.com",31],["short.pe",31],["footystreams.net",31],["seattletimes.com",32],["yiv.com",33],["pornohans.com",33],["pornoente.tv",[33,82]],["nursexfilme.com",33],["milffabrik.com",[33,82]],["pornohirsch.net",33],["pornozebra.com",[33,82]],["xhamster-sexvideos.com",33],["pornoschlange.com",33],["hdpornos.net",33],["gutesexfilme.com",33],["pornotom.com",[33,82]],["short1.site",33],["zona-leros.com",33],["globalrph.com",34],["e-glossa.it",35],["java-forum.org",36],["comunidadgzone.es",36],["anime-extremo.com",36],["mp3fy.com",36],["lebensmittelpraxis.de",36],["ebookdz.com",36],["forum-pokemon-go.fr",36],["praxis-jugendarbeit.de",36],["gdrivez.xyz",36],["dictionnaire-medical.net",36],["cle0desktop.blogspot.com",36],["up-load.io",36],["direct-link.net",36],["direkt-wissen.com",36],["keysbrasil.blogspot.com",36],["hotpress.info",36],["turkleech.com",36],["anibatch.me",36],["anime-i.com",36],["healthtune.site",36],["gewinde-normen.de",36],["freewebscript.com",37],["webcheats.com.br",38],["gala.fr",40],["gentside.com",40],["geo.fr",40],["hbrfrance.fr",40],["nationalgeographic.fr",40],["ohmymag.com",40],["serengo.net",40],["vsd.fr",40],["updato.com",[41,60]],["methbox.com",42],["daizurin.com",42],["pendekarsubs.us",42],["dreamfancy.org",42],["rysafe.blogspot.com",42],["toppng.com",42],["th-world.com",42],["avjamack.com",42],["avjamak.net",42],["techacode.com",42],["daddyhd.com",44],["embedstream.me",44],["yts-subs.net",44],["cnnamador.com",45],["ksbw.com",46],["nudecelebforum.com",47],["pronpic.org",48],["thewebflash.com",49],["discordfastfood.com",49],["xup.in",49],["popularmechanics.com",50],["op.gg",51],["makeuseof.com",52],["lequipe.fr",53],["jellynote.com",54],["knights-table.net",55],["eporner.com",56],["pornbimbo.com",57],["allmonitors24.com",57],["4j.com",57],["avoiderrors.com",58],["cgtips.org",[58,214]],["sitarchive.com",58],["livenewsof.com",58],["topnewsshow.com",58],["gatcha.org",58],["empregoestagios.com",58],["everydayonsales.com",58],["kusonime.com",58],["aagmaal.xyz",58],["suicidepics.com",58],["codesnail.com",58],["codingshiksha.com",58],["graphicux.com",58],["hardcoregames.ca",58],["asyadrama.com",58],["bitcoinegypt.news",58],["citychilli.com",58],["talkjarvis.com",58],["hdmotori.it",59],["femdomtb.com",61],["camhub.cc",61],["bobs-tube.com",61],["ru-xvideos.me",61],["pornfd.com",61],["popno-tour.net",61],["molll.mobi",61],["watchmdh.to",61],["camwhores.tv",61],["audioz.cc",62],["audioz.es",62],["vectorizer.io",62],["smgplaza.com",62],["ftuapps.dev",62],["onehack.us",62],["thapcam.net",62],["elfqrin.com",63],["satcesc.com",64],["apfelpatient.de",64],["lusthero.com",65],["hpav.tv",66],["hpjav.tv",66],["m2list.com",66],["embed.nana2play.com",66],["elahmad.com",66],["dofusports.xyz",66],["pobre.tv",66],["dallasnews.com",67],["lnk.news",68],["lnk.parts",68],["efukt.com",69],["wendycode.com",69],["springfieldspringfield.co.uk",70],["porndoe.com",71],["smsget.net",[72,73]],["kjanime.net",74],["gioialive.it",75],["classicreload.com",76],["chicoer.com",77],["bostonherald.com",77],["dailycamera.com",77],["gomiblog.com",78],["maxcheaters.com",79],["rbxoffers.com",79],["postimees.ee",79],["police.community",79],["gisarea.com",79],["schaken-mods.com",79],["theclashify.com",79],["txori.com",79],["olarila.com",79],["deletedspeedstreams.blogspot.com",79],["sportsplays.com",80],["deinesexfilme.com",82],["einfachtitten.com",82],["halloporno.com",82],["herzporno.com",82],["lesbenhd.com",82],["porn-monkey.com",82],["porndrake.com",82],["pornhubdeutsch.net",82],["pornoaffe.com",82],["pornodavid.com",82],["pornofisch.com",82],["pornofelix.com",82],["pornohammer.com",82],["pornohelm.com",82],["pornoklinge.com",82],["pornotommy.com",82],["pornovideos-hd.com",82],["xhamsterdeutsch.xyz",82],["xnxx-sexfilme.com",82],["masihbelajar.com",82],["zerion.cc",82],["androidworld.it",83],["letribunaldunet.fr",84],["vladan.fr",84],["live-tv-channels.org",85],["eslfast.com",86],["freegamescasual.com",87],["tcpvpn.com",88],["oko.sh",88],["bookriot.com",88],["timesnownews.com",88],["timesnowhindi.com",88],["timesnowmarathi.com",88],["zoomtventertainment.com",88],["xxxuno.com",89],["sholah.net",90],["2rdroid.com",90],["bisceglielive.it",91],["pandajogosgratis.com.br",93],["5278.cc",94],["tonspion.de",96],["duplichecker.com",97],["plagiarismchecker.co",97],["plagiarismdetector.net",97],["searchenginereports.net",97],["smallseotools.com",97],["giallozafferano.it",98],["autojournal.fr",98],["autoplus.fr",98],["sportauto.fr",98],["linkspaid.com",99],["proxydocker.com",99],["beeimg.com",[100,101]],["emturbovid.com",101],["ftlauderdalebeachcam.com",102],["ftlauderdalewebcam.com",102],["juneauharborwebcam.com",102],["keywestharborwebcam.com",102],["kittycatcam.com",102],["mahobeachcam.com",102],["miamiairportcam.com",102],["morganhillwebcam.com",102],["njwildlifecam.com",102],["nyharborwebcam.com",102],["paradiseislandcam.com",102],["pompanobeachcam.com",102],["portbermudawebcam.com",102],["portcanaveralwebcam.com",102],["portevergladeswebcam.com",102],["portmiamiwebcam.com",102],["portnywebcam.com",102],["portnassauwebcam.com",102],["portstmaartenwebcam.com",102],["porttampawebcam.com",102],["sxmislandcam.com",102],["gearingcommander.com",102],["themes-dl.com",102],["badassdownloader.com",102],["badasshardcore.com",102],["badassoftcore.com",102],["nulljungle.com",102],["teevee.asia",102],["otakukan.com",102],["linksht.com",104],["generate.plus",105],["calculate.plus",105],["avcesar.com",106],["audiotag.info",107],["tudigitale.it",108],["ibcomputing.com",109],["eodev.com",110],["legia.net",111],["acapellas4u.co.uk",112],["streamhentaimovies.com",113],["konten.co.id",114],["diariodenavarra.es",115],["xiaomifans.pl",116],["eletronicabr.com",116],["iphonesoft.fr",117],["gload.cc",118],["optifine.net",119],["luzernerzeitung.ch",120],["tagblatt.ch",120],["spellcheck.net",121],["spellchecker.net",121],["spellweb.com",121],["ableitungsrechner.net",122],["alternet.org",123],["imtranslator.net",124],["shrib.com",125],["pandafiles.com",126],["vidia.tv",[126,149]],["hortonanderfarom.blogspot.com",126],["clarifystraight.com",126],["constraindefiant.net",127],["tutelehd3.xyz",127],["mega4upload.com",127],["coolcast2.com",127],["techclips.net",127],["earthquakecensus.com",127],["footyhunter.lol",127],["gamerarcades.com",127],["poscitech.click",127],["starlive.stream",127],["utopianwilderness.com",127],["wecast.to",127],["sportbar.live",127],["lordchannel.com",127],["play-old-pc-games.com",128],["scrin.org",129],["tunovelaligera.com",130],["tapchipi.com",130],["cuitandokter.com",130],["tech-blogs.com",130],["cardiagn.com",130],["dcleakers.com",130],["esgeeks.com",130],["pugliain.net",130],["uplod.net",130],["worldfreeware.com",130],["fikiri.net",130],["myhackingworld.com",130],["phoenixfansub.com",130],["freecourseweb.com",131],["devcourseweb.com",131],["coursewikia.com",131],["courseboat.com",131],["coursehulu.com",131],["lne.es",135],["pornult.com",136],["webcamsdolls.com",136],["bitcotasks.com",136],["exactpay.online",136],["thothd.to",136],["proplanta.de",137],["hydrogenassociation.org",138],["ludigames.com",138],["made-by.org",138],["xenvn.com",138],["worldtravelling.com",138],["igirls.in",138],["technichero.com",138],["roshiyatech.my.id",138],["1upinfinite.com",138],["24sport.stream",138],["tii.la",138],["yesmangas1.com",138],["aeroxplorer.com",138],["mad4wheels.com",139],["logi.im",139],["emailnator.com",139],["textograto.com",140],["voyageforum.com",141],["hmc-id.blogspot.com",141],["jemerik.com",141],["myabandonware.com",141],["chatta.it",143],["ketubanjiwa.com",144],["nsfw247.to",145],["funzen.net",145],["notmekani.com",145],["fighter.stream",145],["ilclubdellericette.it",145],["hubstream.in",145],["extremereportbot.com",[146,147]],["getintopc.com",148],["qoshe.com",150],["lowellsun.com",151],["mamadu.pl",151],["dobrapogoda24.pl",151],["motohigh.pl",151],["namasce.pl",151],["ultimate-catch.eu",152],["tabele-kalorii.pl",152],["cpopchanelofficial.com",154],["cryptowidgets.net",[154,271]],["creditcardgenerator.com",155],["creditcardrush.com",155],["bostoncommons.net",155],["thejobsmovie.com",155],["livsavr.co",155],["hl-live.de",156],["ihow.info",156],["filesus.com",156],["sturls.com",156],["re.two.re",156],["turbo1.co",156],["nilopolisonline.com.br",157],["mesquitaonline.com",157],["yellowbridge.com",157],["socialgirls.im",158],["yaoiotaku.com",159],["camhub.world",160],["moneyhouse.ch",161],["cigarlessarefy.com",162],["figeterpiazine.com",162],["yodelswartlike.com",162],["generatesnitrosate.com",162],["crownmakermacaronicism.com",162],["chromotypic.com",162],["gamoneinterrupted.com",162],["metagnathtuggers.com",162],["wolfdyslectic.com",162],["rationalityaloelike.com",162],["sizyreelingly.com",162],["simpulumlamerop.com",162],["urochsunloath.com",162],["monorhinouscassaba.com",162],["counterclockwisejacky.com",162],["35volitantplimsoles5.com",162],["scatch176duplicities.com",162],["antecoxalbobbing1010.com",162],["boonlessbestselling244.com",162],["cyamidpulverulence530.com",162],["guidon40hyporadius9.com",162],["449unceremoniousnasoseptal.com",162],["19turanosephantasia.com",162],["30sensualizeexpression.com",162],["321naturelikefurfuroid.com",162],["745mingiestblissfully.com",162],["availedsmallest.com",162],["greaseball6eventual20.com",162],["toxitabellaeatrebates306.com",162],["20demidistance9elongations.com",162],["audaciousdefaulthouse.com",162],["fittingcentermondaysunday.com",162],["fraudclatterflyingcar.com",162],["launchreliantcleaverriver.com",162],["matriculant401merited.com",162],["realfinanceblogcenter.com",162],["reputationsheriffkennethsand.com",162],["telyn610zoanthropy.com",162],["tubelessceliolymph.com",162],["tummulerviolableness.com",162],["un-block-voe.net",162],["v-o-e-unblock.com",162],["voe-un-block.com",162],["voeun-block.net",162],["voeunbl0ck.com",162],["voeunblck.com",162],["voeunblk.com",162],["voeunblock.com",162],["voeunblock1.com",162],["voeunblock2.com",162],["voeunblock3.com",162],["agefi.fr",163],["cariskuy.com",164],["letras2.com",164],["yusepjaelani.blogspot.com",165],["letras.mus.br",166],["soulreaperzone.com",167],["cheatermad.com",168],["mtlurb.com",169],["port.hu",170],["acdriftingpro.com",170],["flight-report.com",170],["forumdz.com",170],["abandonmail.com",170],["beverfood.com",170],["flmods.com",170],["zilinak.sk",170],["temp-phone-number.com",170],["projectfreetv.stream",170],["hotdesimms.com",170],["pdfaid.com",170],["mconverter.eu",170],["dzeko11.net",[170,268]],["mail.com",170],["expresskaszubski.pl",170],["moegirl.org.cn",170],["onemanhua.com",171],["t3n.de",172],["allindiaroundup.com",173],["osuskinner.com",174],["vrcmods.com",174],["thefastlaneforum.com",175],["trade2win.com",176],["gmodleaks.com",176],["fontyukle.net",177],["modagamers.com",178],["nulleb.com",178],["freemagazines.top",178],["straatosphere.com",178],["nullpk.com",178],["adslink.pw",178],["downloadudemy.com",178],["techydino.net",178],["picgiraffe.com",178],["weadown.com",178],["freepornsex.net",178],["nurparatodos.com.ar",178],["librospreuniversitariospdf.blogspot.com",179],["forexeen.us",179],["khsm.io",179],["girls-like.me",179],["webcreator-journal.com",179],["nu6i-bg-net.com",179],["routech.ro",180],["hokej.net",180],["turkmmo.com",181],["palermotoday.it",182],["baritoday.it",182],["trentotoday.it",182],["agrigentonotizie.it",182],["anconatoday.it",182],["arezzonotizie.it",182],["avellinotoday.it",182],["bresciatoday.it",182],["brindisireport.it",182],["casertanews.it",182],["cataniatoday.it",182],["cesenatoday.it",182],["chietitoday.it",182],["forlitoday.it",182],["frosinonetoday.it",182],["genovatoday.it",182],["ilpescara.it",182],["ilpiacenza.it",182],["latinatoday.it",182],["lecceprima.it",182],["leccotoday.it",182],["livornotoday.it",182],["messinatoday.it",182],["milanotoday.it",182],["modenatoday.it",182],["monzatoday.it",182],["novaratoday.it",182],["padovaoggi.it",182],["parmatoday.it",182],["perugiatoday.it",182],["pisatoday.it",182],["quicomo.it",182],["ravennatoday.it",182],["reggiotoday.it",182],["riminitoday.it",182],["romatoday.it",182],["salernotoday.it",182],["sondriotoday.it",182],["sportpiacenza.it",182],["ternitoday.it",182],["today.it",182],["torinotoday.it",182],["trevisotoday.it",182],["triesteprima.it",182],["udinetoday.it",182],["veneziatoday.it",182],["vicenzatoday.it",182],["thumpertalk.com",183],["arkcod.org",183],["facciabuco.com",184],["shorterall.com",185],["thelayoff.com",185],["maxstream.video",185],["tvepg.eu",185],["blog24.me",185],["softx64.com",186],["pstream.net",187],["instaanime.com",187],["libreriamo.it",188],["medebooks.xyz",188],["tutorials-technology.info",188],["mashtips.com",188],["marriedgames.com.br",188],["4allprograms.me",188],["nurgsm.com",188],["janusnotes.com",188],["certbyte.com",188],["plugincrack.com",188],["gamingdeputy.com",188],["cryptoblog24.info",188],["freewebcart.com",188],["dailymaverick.co.za",189],["apps2app.com",190],["my-code4you.blogspot.com",191],["leakgaming.fr",192],["pentruea.com",[193,194]],["mchacks.net",195],["why-tech.it",196],["hacksmile.com",197],["compsmag.com",197],["tapetus.pl",198],["autoroad.cz",199],["brawlhalla.fr",199],["tecnobillo.com",199],["sexcamfreeporn.com",200],["breatheheavy.com",201],["wenxuecity.com",202],["key-hub.eu",203],["fabioambrosi.it",204],["tamrieltradecentre.com",[204,262]],["tattle.life",205],["emuenzen.de",205],["mynet.com",206],["cidade.iol.pt",207],["fantacalcio.it",208],["hentaifreak.org",209],["hypebeast.com",210],["krankheiten-simulieren.de",211],["catholic.com",212],["3dmodelshare.org",213],["gourmetscans.net",214],["techinferno.com",215],["phuongtrinhhoahoc.com",216],["ibeconomist.com",217],["purposegames.com",218],["schoolcheats.net",218],["globo.com",219],["latimes.com",219],["claimrbx.gg",220],["perelki.net",221],["vpn-anbieter-vergleich-test.de",222],["livingincebuforums.com",223],["paperzonevn.com",224],["malaysianwireless.com",225],["erinsakura.com",226],["infofuge.com",226],["freejav.guru",226],["novelmultiverse.com",226],["fritidsmarkedet.dk",227],["maskinbladet.dk",227],["15min.lt",228],["lewdninja.com",229],["lewd.ninja",229],["hentaidexy.com",229],["baddiehub.com",230],["mr9soft.com",231],["21porno.com",232],["adult-sex-gamess.com",233],["hentaigames.app",233],["mobilesexgamesx.com",233],["mysexgamer.com",233],["porngameshd.com",233],["sexgamescc.com",233],["xnxx-sex-videos.com",233],["f2movies.to",234],["freeporncave.com",235],["tubsxxx.com",236],["pornojenny.com",237],["subtitle.one",238],["sextvx.com",239],["studydhaba.com",240],["freecourse.tech",240],["ccthesims.com",240],["victor-mochere.com",240],["papunika.com",240],["mobilanyheter.net",240],["prajwaldesai.com",240],["muztext.com",241],["charbelnemnom.com",242],["online-fix.me",243],["gamersdiscussionhub.com",244],["owlzo.com",245],["maxpixel.net",246],["q1003.com",247],["blogpascher.com",248],["testserver.pro",249],["mgnet.xyz",250],["advertiserandtimes.co.uk",251],["xvideos2020.me",252],["wouterplanet.com",253],["deezer.com",253],["111.90.159.132",254],["techsolveprac.com",255],["joomlabeginner.com",256],["largescaleforums.com",257],["dubznetwork.com",258],["mundodonghua.com",258],["oceanplay.org",259],["code2care.org",260],["osuskins.net",263],["allcryptoz.net",264],["crewbase.net",264],["crewus.net",264],["shinbhu.net",264],["shinchu.net",264],["thumb8.net",264],["thumb9.net",264],["topcryptoz.net",264],["uniqueten.net",264],["ultraten.net",264],["hlspanel.xyz",264],["fapdrop.com",264],["beritabaru.news",265],["solusi.cyou",265],["xxxxsx.com",265],["ngontinh24.com",266],["idevicecentral.com",267],["referus.in",270],["coinscap.info",271],["greenenez.com",271],["insurancegold.in",271],["webfreetools.net",271],["wiki-topia.com",271],["enit.in",272],["financerites.com",272],["mangacrab.com",273],["idnes.cz",274],["viefaucet.com",276],["cloud-computing-central.com",277],["afk.guide",278],["businessnamegenerator.com",279],["rocketnews24.com",280],["soranews24.com",280],["youpouch.com",280],["ilsole24ore.com",281],["hentaiporn.one",282],["infokik.com",283],["fosslinux.com",284],["shrdsk.me",285],["examword.com",286],["sempreupdate.com.br",286],["tribuna.com",287],["trendsderzukunft.de",288],["gal-dem.com",288],["lostineu.eu",288],["oggitreviso.it",288],["speisekarte.de",288],["mixed.de",288],["lightnovelspot.com",[289,290]],["lightnovelworld.com",[289,290]],["novelpub.com",[289,290]],["webnovelpub.com",[289,290]],["mail.yahoo.com",291],["hwzone.co.il",292],["nammakalvi.com",293],["javmoon.me",294],["c2g.at",295],["terafly.me",295],["bravedown.com",296],["aquarius-horoscopes.com",297],["cancer-horoscopes.com",297],["dubipc.blogspot.com",297],["echoes.gr",297],["engel-horoskop.de",297],["freegames44.com",297],["fuerzasarmadas.eu",297],["gemini-horoscopes.com",297],["jurukunci.net",297],["krebs-horoskop.com",297],["leo-horoscopes.com",297],["maliekrani.com",297],["nklinks.click",297],["ourenseando.es",297],["pisces-horoscopes.com",297],["radio-en-direct.fr",297],["sagittarius-horoscopes.com",297],["scorpio-horoscopes.com",297],["singlehoroskop-loewe.de",297],["skat-karten.de",297],["skorpion-horoskop.com",297],["taurus-horoscopes.com",297],["the1security.com",297],["virgo-horoscopes.com",297],["zonamarela.blogspot.com",297],["yoima.hatenadiary.com",297],["vpntester.org",298],["watchhentai.net",299],["japscan.lol",300],["digitask.ru",301],["tempumail.com",302],["sexvideos.host",303],["10alert.com",305],["cryptstream.de",306],["nydus.org",306],["techhelpbd.com",307],["cellmapper.net",308],["hdrez.com",309],["youwatch-serie.com",309],["freebnbcoin.com",310],["fslinks.org",311],["v6embed.xyz",311],["vgembed.com",311],["vid-guard.com",311],["printablecreative.com",312],["comohoy.com",313],["leak.sx",313],["pornleaks.in",313],["merlininkazani.com",313],["faindx.com",315],["converter-btc.world",316],["j91.asia",317],["jeniusplay.com",318],["indianyug.com",319],["rgb.vn",319],["needrom.com",320],["criptologico.com",321],["megadrive-emulator.com",322],["hentai-one.com",323],["hentaipaw.com",323],["10minuteemails.com",324],["luxusmail.org",324],["w3cub.com",325],["dgb.lol",326],["bangpremier.com",327],["nyaa.iss.ink",328],["lifestyle.bg",330],["money.bg",330],["news.bg",330],["topsport.bg",330],["webcafe.bg",330],["scripai.com",331],["myfxbook.com",331],["freepdfcomic.com",332],["security-demo.extrahop.com",333]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,7]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",6],["eztv",6],["sushi-scan",10],["spigotunlocked",10],["ahmedmode",10],["kissasian",15],["rp5",17],["mma-core",18],["writedroid",22],["yts",27],["720pstream",27],["1stream",27],["magesy",28],["thefmovies",31],["xhamsterdeutsch",33],["fxporn69",36],["aliancapes",36],["urlcero",39],["totaldebrid",42],["sandrives",42],["oploverz",43],["pouvideo",55],["povvideo",55],["povw1deo",55],["povwideo",55],["powv1deo",55],["powvibeo",55],["powvideo",55],["powvldeo",55],["tubsexer",61],["porno-tour",61],["lenkino",61],["pornomoll",61],["camsclips",61],["m4ufree",66],["dood",66],["crackstreams",66],["telerium",81],["pandafreegames",95],["thoptv",103],["brainly",110],["streameast",127],["thestreameast",127],["daddylivehd",127],["solvetube",132],["hdfilme",133],["pornhub",134],["wcofun",141],["bollyholic",145],["wstream",153],["gotxx",156],["turkanime",162],["voe-unblock",162],["khatrimaza",178],["pogolinks",178],["popcornstream",180],["shortzzy",188],["shineads",188],["privatemoviez",244],["gmx",261],["lightnovelpub",[289,290]],["camcaps",304],["drivebot",329]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
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
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
