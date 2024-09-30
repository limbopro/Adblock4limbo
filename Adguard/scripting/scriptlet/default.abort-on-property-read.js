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
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["Notification"],["embedAddefend"],["adBlockDetected"],["navigator.userAgent"],["__eiPb"],["detector"],["adc"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_pop"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["InstallTrigger"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["mm"],["googletag"],["stop"],["open"],["ga.length"],["_wm"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["decodeURI"],["__Y"],["AaDetector"],["google_jobrunner"],["popjs.init"],["adblock"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["Adcash"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["eddOptions"],["document.createElement"],["pbjs.libLoaded"],["mz"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["exoNoExternalUI38djdkjDDJsio96"],["raConf"],["popTimes"],["smrtSB"],["smrtSP"],["Aloader"],["advobj"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["require"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["jwplayer.vast"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["importFAB"],["_0xbeb9"],["popAdsClickCount"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["odabd"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["decodeURIComponent"],["glxopen"],["CatapultTools"],["adbackDebug"],["$pxy822"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["TRM"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["I833"],["Popunder"],["gPartners"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["mdpDeBlocker"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["adBlocked"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["mdp_deblocker"],["adUnits"],["b2a"],["pbjsChunk"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["adcashMacros"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["adthrive"],["show_ads_gr8_lite"],["disableButtonTimer"],["tie"],["document.write"],["adb_checker"],["ignore_adblock"],["$.prototype.offset"],["$.prototype.html"],["ea.add"],["__aaZoneid"],["document.regexpSrcDomainPlaceholder"],["_cpp"],["pareAdblock"],["eazy_ad_unblocker"],["afScript"],["__brn_private_mode"],["recoverLinks"],["document.body.style.backgroundPosition"],["canRunAds"],["app_vars.please_disable_adblock"],["antiAdBlockerHandler"],["showada"],["checkAdsStatus"],["popUrl"],["adConfig"],["Promise.all"],["block_ads"],["arrvast"],["popurl"],["EV.Dab"],["clickCount"],["SMart1"],["popUp"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["Swal.fire"],["document.onmousedown"],["window.open"],["checkAdsBlocked"],["Light.Popup"],["htmls"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["chp_adblock_browser"],["adsbyjuicy"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["__tnt"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adBlockEnabled"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["short_url_app_vars.force_disable_adblock"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["indexedDB.open"],["checkCookieClick"],["mnpw"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["rccbase_styles"],["adBlockerDetected"],["zfgformats"],["zfgstorage"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["PopURL"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["disableDeveloperTools"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["history.back"],["String.prototype.charCodeAt"],["Overlayer"],["puShown"],["remove_adblock_html"],["Request"],["fallbackAds"],["lck"],["advanced_ads_ready"],["_conf.pops"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["document.body.innerHTML"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["JuicyPop"],["afStorage"],["_run"],["detectAdblock"],["jQuery.popunder"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["checkAdBlock"],["navigator.brave"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["onscroll"],["GeneratorAds"],["__cmpGdprAppliesGlobally"],["player.vroll"],["aab"],["config"],["runad"],["atob"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"],["Keen"],["MONETIZER101.init"],["JadIds"]];

const hostnamesMap = new Map([["tagesspiegel.de",0],["vivud.com",[0,15,28,63]],["gtaall.com",0],["worldsex.com",[0,52]],["jizzbunker.com",[0,137]],["dailymail.co.uk",0],["tech4yougadgets.com",0],["n-tv.de",1],["g9g.eu",2],["platinmods.com",2],["mitly.us",[2,21]],["fotbolltransfers.com",2],["yxzero.xyz",2],["freebitcoin.win",2],["coindice.win",2],["live-tv-channels.org",2],["faucethero.com",[2,28]],["faresgame.com",2],["fc.lc",[2,111]],["freebcc.org",[2,111]],["eio.io",[2,111]],["exee.io",[2,111]],["exe.app",[2,111]],["multifaucet.org",2],["majalahpendidikan.com",2],["jaiefra.com",2],["czxxx.org",2],["sh0rt.cc",2],["fussball.news",2],["orangespotlight.com",2],["ar-atech.blogspot.com",2],["clixwarez.blogspot.com",2],["theandroidpro.com",2],["zeeebatch.blogspot.com",2],["layarkaca21indo.com",2],["iptvspor.com",2],["plugincim.com",2],["fivemturk.com",2],["sosyalbilgiler.net",2],["mega-hentai2.blogspot.com",2],["gun-otaku.blogspot.com",2],["claimcrypto.cc",[2,111]],["tech5s.co",2],["ez4mods.com",2],["kollhong.com",2],["getmega.net",2],["verteleseriesonline.com",2],["imintweb.com",2],["coinxfaucet.com",2],["eoreuni.com",2],["se-ed.com",2],["comousarzararadio.blogspot.com",2],["popsplit.us",2],["digitalstudiome.com",2],["nightfallnews.com",2],["mypussydischarge.com",[2,28]],["kontrolkalemi.com",2],["arabianbusiness.com",2],["eskiceviri.blogspot.com",2],["dj-figo.com",2],["blasianluvforever.com",2],["wgzimmer.ch",2],["familyrenders.com",2],["daburosubs.com",2],["androidgreek.com",2],["iade.com",2],["smallpocketlibrary.com",2],["hidefninja.com",2],["orangeptc.com",2],["share1223.com",2],["sanoybonito.club",[2,111]],["7misr4day.com",2],["aquiyahorajuegos.net",2],["worldofbin.com",2],["googledrivelinks.com",2],["98zero.com",2],["tpaste.io",2],["aranzulla.it",3],["anallievent.com",4],["au-di-tions.com",4],["badgehungry.com",4],["beingmelody.com",4],["bloggingawaydebt.com",4],["casutalaurei.ro",4],["cornerstoneconfessions.com",4],["culture-informatique.net",4],["dearcreatives.com",4],["disneyfashionista.com",4],["divinelifestyle.com",4],["dna.fr",4],["eslauthority.com",4],["estrepublicain.fr",4],["fitting-it-all-in.com",4],["heresyoursavings.com",4],["irresistiblepets.net",4],["julieseatsandtreats.com",4],["justjared.com",4],["lecturisiarome.ro",4],["lemonsqueezyhome.com",4],["libramemoria.com",4],["lovegrowswild.com",4],["magicseaweed.com",4],["measuringflower.com",4],["mjsbigblog.com",4],["mommybunch.com",4],["mustardseedmoney.com",4],["myfunkytravel.com",4],["onetimethrough.com",4],["panlasangpinoymeatrecipes.com",4],["silverpetticoatreview.com",4],["the-military-guide.com",4],["therelaxedhomeschool.com",4],["the2seasons.com",4],["zeroto60times.com",4],["apple-of-my-eye.com",4],["barefeetonthedashboard.com",4],["bargainbriana.com",4],["betterbuttchallenge.com",4],["bike-urious.com",4],["blwideas.com",4],["eartheclipse.com",4],["entertainment-focus.com",4],["fanatik.com.tr",4],["foreverconscious.com",4],["foreversparkly.com",4],["getdatgadget.com",4],["goodnewsnetwork.org",4],["greenarrowtv.com",4],["hbculifestyle.com",4],["heysigmund.com",4],["hodgepodgehippie.com",4],["homestratosphere.com",4],["indesignskills.com",4],["katiescucina.com",4],["knowyourphrase.com",4],["letsworkremotely.com",4],["lizs-early-learning-spot.com",4],["ledauphine.com",4],["leprogres.fr",4],["milliyet.com.tr",4],["pinoyrecipe.net",4],["prepared-housewives.com",4],["recipesforourdailybread.com",4],["redcarpet-fashionawards.com",4],["republicain-lorrain.fr",4],["savespendsplurge.com",4],["savingadvice.com",4],["shutupandgo.travel",4],["spring.org.uk",4],["stevivor.com",4],["tamaratattles.com",4],["tastefullyeclectic.com",4],["theavtimes.com",4],["thechroniclesofhome.com",4],["thisisourbliss.com",4],["tinyqualityhomes.org",4],["turtleboysports.com",4],["ultimateninjablazingx.com",4],["universfreebox.com",4],["utahsweetsavings.com",4],["vgamerz.com",4],["wheatbellyblog.com",4],["yummytummyaarthi.com",4],["ranker.com",[4,19]],["fluentu.com",4],["cdiscount.com",4],["damndelicious.net",4],["simplywhisked.com",4],["timesofindia.com",5],["freethesaurus.com",6],["thefreedictionary.com",6],["bild.de",7],["sueddeutsche.de",8],["20min.ch",8],["al.com",8],["alphr.com",8],["autoexpress.co.uk",8],["bikeradar.com",8],["blick.ch",8],["chefkoch.de",8],["cyclingnews.com",[8,368]],["digitalspy.com",8],["democratandchronicle.com",8],["denofgeek.com",8],["esgentside.com",8],["evo.co.uk",8],["exclusivomen.com",8],["ft.com",8],["gala.de",8],["gala.fr",8],["heatworld.com",8],["itpro.co.uk",8],["livingathome.de",8],["masslive.com",8],["maxisciences.com",8],["metabomb.net",8],["mlive.com",8],["motherandbaby.co.uk",8],["motorcyclenews.com",8],["muthead.com",8],["neonmag.fr",8],["newyorkupstate.com",8],["ngin-mobility.com",8],["nj.com",8],["nola.com",8],["ohmirevista.com",8],["oregonlive.com",8],["pennlive.com",8],["programme.tv",8],["programme-tv.net",8],["radiotimes.com",8],["silive.com",8],["simplyvoyage.com",8],["stern.de",8],["syracuse.com",8],["theweek.co.uk",8],["ydr.com",8],["usatoday.com",8],["schoener-wohnen.de",8],["thewestmorlandgazette.co.uk",8],["news-leader.com",8],["closeronline.co.uk",8],["etonline.com",8],["bilan.ch",8],["doodle.com",8],["techradar.com",8],["daily-times.com",8],["wirralglobe.co.uk",8],["annabelle.ch",8],["pcgamer.com",8],["nintendolife.com",8],["gamer.com.tw",9],["skidrowcodexgames.com",10],["22pixx.xyz",[10,67,81]],["durtypass.com",10],["anime-odcinki.pl",10],["gaypornwave.com",[10,41]],["pngit.live",[10,21,30,79]],["gratispaste.com",[10,81]],["animotvslashz.blogspot.com",10],["eltern.de",11],["essen-und-trinken.de",11],["focus.de",11],["eurogamer.de",11],["eurogamer.es",11],["eurogamer.it",11],["eurogamer.net",11],["eurogamer.pt",11],["rockpapershotgun.com",11],["vg247.com",11],["urbia.de",11],["elpasotimes.com",11],["femina.ch",11],["northwalespioneer.co.uk",11],["codeproject.com",12],["cwseed.com",13],["pocketnow.com",14],["7r6.com",[15,25,111]],["reddflix.com",[15,21]],["bostoncommons.net",[15,53]],["opisanie-kartin.com",15],["painting-planet.com",15],["kropic.com",[15,28]],["mp4mania1.net",15],["livegore.com",15],["down-paradise.com",[15,29]],["kioven.com",15],["ladsnbastands.com",15],["pngio.com",15],["etcscrs.to",15],["iobit.com",15],["videowood.tv",[15,23,298]],["streampourvous.com",15],["rule34.xxx",16],["realbooru.com",17],["alrincon.com",[17,21,42]],["realgfporn.com",[17,41]],["pornhd.com",[17,62]],["pornhdin.com",[17,21]],["pornomovies.com",[17,28]],["submityourflicks.com",[17,28]],["bdsmstreak.com",17],["freepornvideo.sex",17],["teenpornvideo.xxx",17],["yourlust.com",17],["imx.to",17],["mypornstarbook.net",17],["japanesefuck.com",17],["plusone8.com",17],["imgtorrnt.in",[17,52]],["pandamovies.pw",[17,52]],["club-flank.com",17],["streamporn.pw",17],["watchfreexxx.net",[17,41,156,157,158]],["dump.xxx",[17,21]],["fuqer.com",[17,21]],["tmohentai.com",17],["xopenload.me",17],["losporn.org",17],["bravoerotica.com",17],["xasiat.com",[17,78]],["redporno.cz",17],["vintageporntubes.com",17],["xxxvideos247.com",17],["young-pussy.com",17],["kingsofteens.com",17],["24pornvideos.com",17],["2japaneseporn.com",17],["xxxvideor.com",17],["youngleak.com",17],["zhlednito.cz",17],["8teenxxx.com",17],["activevoyeur.com",17],["allschoolboysecrets.com",17],["boobsforfun.com",17],["breedingmoms.com",17],["cockmeter.com",[17,52]],["collegeteentube.com",17],["cumshotlist.com",17],["porn0.tv",17],["ritzysex.com",17],["ritzyporn.com",17],["sexato.com",17],["javbobo.com",[17,68]],["sokobj.com",17],["youlikeboys.com",[17,81]],["needgayporn.com",17],["zetporn.com",17],["keephealth.info",18],["vidstream.pro",[18,290]],["123moviesjr.cc",18],["123moviesd.com",18],["123moviess.se",18],["cloudvideo.tv",18],["googlvideo.com",18],["diasfem.com",[18,29]],["embedsito.com",[18,26,29]],["javcl.me",[18,26,29]],["mavlecteur.com",[18,29]],["playfinder.xyz",[18,26,29,114]],["easyexploits.com",18],["azm.to",18],["anigogo.net",[18,29]],["arslanrocky.xyz",[18,29]],["cloudemb.com",[18,29]],["dlmovies.link",[18,29]],["embedsb.com",[18,29]],["gomovizplay.com",[18,29]],["hlsplayer.xyz",[18,29]],["kinoking.cc",18],["lvturbo.com",18],["oxl.one",[18,29]],["playersb.com",[18,29]],["sbanh.com",[18,29]],["sbasian.pro",18],["sbbrisk.com",[18,29]],["sbchill.com",[18,29]],["sbcloud1.com",[18,29]],["sbembed.com",[18,29]],["sbembed1.com",[18,25,29]],["sbembed2.com",[18,29]],["sbembed3.com",[18,29]],["sbembed4.com",[18,29]],["sbface.com",18],["sbfast.com",[18,29]],["sbfull.com",[18,29,305]],["sbhight.com",[18,29]],["sblanh.com",[18,29]],["sblona.com",18],["sblongvu.com",[18,29]],["sbnet.one",18],["sbplay1.com",[18,29]],["sbrity.com",[18,29]],["sbspeed.com",[18,29]],["sbthe.com",[18,29]],["sbvideo.net",18],["ssbstream.net",[18,29]],["streamsss.net",[18,29]],["subsb.net",[18,29]],["tubesb.com",[18,29]],["vidmovie.xyz",[18,29]],["view345.com",[18,29,305]],["viewsb.com",[18,29]],["watchsb.com",[18,29]],["watchdoctorwhoonline.com",18],["toxicwap.us",18],["yodbox.com",18],["coverapi.store",18],["masahub.net",[18,28]],["lalastreams.me",18],["hblinks.pro",18],["afdah2.com",18],["javuncen.xyz",[18,29]],["kissasia.cc",18],["watchsexandthecity.com",18],["watchpsychonline.net",18],["watchsmallvilleonline.net",18],["ymovies.vip",18],["cl1ca.com",18],["4br.me",18],["fir3.net",18],["thewindowsclub.com",19],["girlsgogames.co.uk",19],["godtube.com",19],["ringsidenews.com",19],["advocate.com",19],["alternet.org",19],["androidcure.com",19],["arobasenet.com",19],["attackofthefanboy.com",19],["bodytr.com",19],["clutchpoints.com",19],["cultofmac.com",19],["currentaffairs.gktoday.in",19],["dailycaller.com",19],["digitalmusicnews.com",19],["dogtime.com",19],["dotesports.com",19],["epicstream.com",19],["fallbrook247.com",19],["feral-heart.com",19],["gamesgames.com",19],["gamerevolution.com",19],["gazettenet.com",19],["insidenova.com",19],["jetztspielen.de",19],["kasvekuvvet.net",19],["leitesculinaria.com",19],["nbcnews.com",19],["notevibes.com",19],["practicalpainmanagement.com",19],["prad.de",19],["progameguides.com",19],["pwinsider.com",19],["realityblurb.com",[19,257]],["ruinmyweek.com",19],["sanangelolive.com",19],["sanfoundry.com",19],["selfhacked.com",19],["siliconera.com",19],["simpleflying.com",19],["son.co.za",19],["sporcle.com",19],["stealthoptional.com",19],["stylecaster.com",19],["thesportster.com",19],["upi.com",19],["viraliq.com",19],["visualcapitalist.com",19],["wegotthiscovered.com",19],["primagames.com",19],["grubstreet.com",20],["twitchy.com",20],["rule34hentai.net",21],["mcloud.bz",[21,29,290]],["clik.pw",21],["pornj.com",21],["pornl.com",21],["ah-me.com",21],["1337x.unblock2.xyz",[21,24,58]],["linkrex.net",21],["oke.io",21],["watchmygf.me",21],["pornoreino.com",[21,41]],["shrt10.com",21],["ashemaletube.com",21],["turbobit.net",21],["bestialitysexanimals.com",21],["bestialporn.com",21],["mujeresdesnudas.club",21],["mynakedwife.video",21],["videoszoofiliahd.com",21],["efukt.com",21],["tranny.one",[21,68]],["porndoe.com",[21,41]],["topvideosgay.com",21],["goto.com.np",21],["femdomtb.com",21],["pornvideotop.com",21],["deinesexfilme.com",21],["einfachtitten.com",21],["halloporno.com",21],["herzporno.com",21],["lesbenhd.com",21],["milffabrik.com",21],["porn-monkey.com",21],["porndrake.com",21],["pornhubdeutsch.net",21],["pornoaffe.com",21],["pornodavid.com",21],["pornoente.tv",21],["pornofisch.com",21],["pornofelix.com",21],["pornohammer.com",21],["pornohelm.com",21],["pornoklinge.com",21],["pornotom.com",21],["pornotommy.com",21],["pornovideos-hd.com",21],["pornozebra.com",21],["xhamsterdeutsch.xyz",21],["xnxx-sexfilme.com",21],["tryboobs.com",[21,68]],["hitomi.la",21],["fapality.com",[21,52]],["babesxworld.com",[21,42,52]],["icutlink.com",21],["oncehelp.com",21],["picbaron.com",[21,42]],["mega-p2p.net",21],["shrinkearn.com",21],["twister.porn",21],["bitlk.com",21],["gamovideo.com",21],["urlty.com",21],["peekvids.com",21],["playvids.com",21],["pornflip.com",21],["pornoeggs.com",21],["oko.sh",[21,30]],["turbogvideos.com",21],["xxx-image.com",[21,36,137,183]],["coinlyhub.com",[21,111]],["vidbom.com",21],["zimabdko.com",21],["fullxxxmovies.net",21],["elitegoltv.org",21],["extremotvplay.com",21],["tarjetarojatv.org",21],["pirlotvonline.org",21],["rojadirectaonlinetv.com",21],["semawur.com",21],["adshrink.it",21],["shrink-service.it",[21,365]],["eplsite.uk",[21,30]],["owllink.net",[21,111]],["upstream.to",21],["dramakrsubindo.blogspot.com",21],["ex-foary.com",[21,111]],["oceanof-games.com",21],["watchmonkonline.com",21],["iir.ai",[21,111]],["comicxxx.eu",21],["mybestxtube.com",[21,52]],["pornobengala.com",21],["pornicom.com",[21,52]],["xecce.com",21],["teensporn.tv",[21,52]],["pornlift.com",21],["superbgays.com",21],["bt4g.unblocked.to",21],["porncomics.me",21],["orsm.net",21],["moviehaxx.pro",21],["enagato.com",21],["cloutgist.com",21],["youshort.me",21],["kvador.com",[21,42]],["uploadroot.com",21],["deepfakeporn.net",21],["pkr.pw",[21,111]],["gibit.xyz",[21,111]],["loader.to",21],["namaidani.com",[21,111]],["paidtomoney.com",[21,111]],["doctor-groups.com",[21,111]],["anime47.com",21],["cutearn.net",[21,111]],["short.palmeratv.com",[21,111]],["filezipa.com",[21,111]],["theblissempire.com",[21,111]],["bestgamehack.top",21],["hackofgame.com",21],["shorturl.unityassets4free.com",[21,111]],["download.baominh.tech",[21,111]],["vevioz.com",[21,111]],["charexempire.com",[21,234]],["vidstreamz.online",21],["crunchyscan.fr",21],["unblocksite.pw",[21,137]],["y2mate.com",21],["androidapks.biz",21],["androidsite.net",21],["animeonlinefree.org",21],["animesite.net",21],["computercrack.com",21],["crackedsoftware.biz",21],["crackfree.org",21],["cracksite.info",21],["downloadapk.info",21],["downloadapps.info",21],["downloadgames.info",21],["downloadmusic.info",21],["downloadsite.org",21],["ebooksite.org",21],["emulatorsite.com",21],["fmovies24.com",21],["freeflix.info",21],["freemoviesu4.com",21],["freesoccer.net",21],["fseries.org",21],["gamefast.org",21],["gamesite.info",21],["gostreamon.net",21],["hindisite.net",21],["isosite.org",21],["macsite.info",21],["mangasite.org",21],["megamovies.org",21],["moviefree2.com",21],["moviesite.app",21],["moviesx.org",21],["musicsite.biz",21],["patchsite.net",21],["pdfsite.net",21],["play1002.com",21],["productkeysite.com",21],["romsite.org",21],["seriesite.net",21],["siteapk.net",21],["siteflix.org",21],["sitegames.net",21],["sitekeys.net",21],["sitepdf.com",21],["sitetorrent.com",21],["softwaresite.net",21],["superapk.org",21],["supermovies.org",21],["tvonlinesports.com",21],["ultramovies.org",21],["warezsite.net",21],["watchmovies2.com",21],["watchmoviesforfree.org",21],["watchsite.net",21],["youapk.net",21],["gload.to",21],["bloggingguidance.com",21],["jockantv.com",21],["receive-sms-online.info",22],["theproxyproxy.com",23],["candid.tube",23],["hotbabes.tv",[23,42]],["purelyceleb.com",23],["piraproxy.app",23],["nosteamgames.ro",23],["pornult.com",[24,78]],["fullhdxxx.com",[24,41]],["koenime.top",24],["lendrive.web.id",24],["nimegami.id",24],["short.pe",[25,30]],["mylust.com",[25,52]],["anysex.com",[25,28,41,52,121]],["luscious.net",25],["cloudgallery.net",[25,30]],["alotporn.com",[25,52]],["imgair.net",25],["imgblaze.net",25],["imgfrost.net",25],["vestimage.site",25],["imgwia.buzz",25],["imgbaex.store",25],["imgbah.online",25],["imgbaie.online",25],["imgbango.store",25],["imgbier.store",25],["imgbimn.store",25],["imgbqw.store",25],["imgbuba.online",25],["imgbwe.store",25],["imgbxs.online",25],["imgcao.store",25],["imgnwe.online",25],["imgqge.store",25],["imgqxb.online",25],["imgteq.online",25],["imgtex.online",25],["imgtuta.online",25],["imgwqr.online",25],["imgwww.store",25],["imgxza.store",25],["imgezx.sbs",25],["imgbcxsb.store",25],["imgbcxs.store",25],["imgbake.cfd",25],["imgmffg.sbs",25],["imgmffgtr.sbs",25],["imgnbg.sbs",25],["imgngc.sbs",25],["imgnmh.cfd",25],["imgqte.sbs",25],["imguthes.sbs",25],["imgwag.cfd",25],["imgwang.cfd",25],["imgwety.sbs",25],["imgxuh.cfd",25],["imgxytw.cfd",25],["imgycgey.sbs",25],["imgyruy.cfd",25],["imgyusa.cfd",25],["imgyyqey.sbs",25],["imgyer.store",25],["imgxhs.store",25],["imgwekr.online",25],["imgwbfh.online",25],["imgwak.online",25],["imgutry.online",25],["imgutiyu.online",25],["imgutbbn.online",25],["imgubfd.online",25],["imgrei.online",25],["imgqec.online",25],["imgpaiou.online",25],["imgpaiki.online",25],["imgmjj.store",25],["imgfa.store",25],["imgbutrt.store",25],["imgbty.store",25],["imgbdl.store",25],["imgngh.sbs",25],["imgbbfg.pics",25],["imgjhrjjr.pics",25],["imgleko.pics",25],["imgluki.pics",25],["imgnffe.pics",25],["imgnnnf.pics",25],["imgrwqz.pics",25],["imgtweqz.pics",25],["imgxzgf.pics",25],["imgyyeryt.pics",25],["picbbc.one",25],["picbbdr.one",25],["picbest.one",25],["picbhrt.one",25],["picnrrt.one",25],["picqqw.one",25],["picqr.one",25],["picqtwe.one",25],["picsjre.one",25],["piczzaq.one",25],["imgqazx.sbs",25],["imgiruyw.online",25],["picnerr.cfd",25],["pichfer.cfd",25],["picbbeq.cfd",25],["picqaxs.cfd",25],["picxxdd.cfd",25],["picqweff.cfd",25],["pickjsn.cfd",25],["piczzxsw.cfd",25],["picbbbde.cfd",25],["picbdd.cfd",25],["imgbahxg.sbs",25],["imgxune.sbs",25],["imgqklw.shop",25],["pixqkhgrt.shop",25],["pixqbngg.shop",25],["pixqwet.shop",25],["pixmos.shop",25],["imgtgd.shop",25],["imgcsxx.shop",25],["imgcssd.shop",25],["imguwjsd.sbs",25],["pictbbf.shop",25],["pixbryexa.sbs",25],["picbqqa.sbs",25],["pixbkghxa.sbs",25],["imgmgf.sbs",25],["picbcxvxa.sbs",25],["imguee.sbs",25],["imgmffmv.sbs",25],["imgbqb.sbs",25],["imgbyrev.sbs",25],["imgbncvnv.sbs",25],["pixtryab.shop",25],["imggune.shop",25],["pictryhab.shop",25],["pixbnab.shop",25],["imgbnwe.shop",25],["imgbbnhi.shop",25],["imgnbii.shop",25],["imghqqbg.shop",25],["imgyhq.shop",25],["pixnbrqwg.sbs",25],["pixnbrqw.sbs",25],["picmsh.sbs",25],["imgpke.sbs",25],["picuenr.sbs",25],["imgolemn.sbs",25],["imgoebn.sbs",25],["picnwqez.sbs",25],["imgjajhe.sbs",25],["pixjnwe.sbs",25],["pixkfjtrkf.shop",25],["pixkfkf.shop",25],["pixdfdjkkr.shop",25],["pixdfdj.shop",25],["picnft.shop",25],["pixrqqz.shop",25],["picngt.shop",25],["picjgfjet.shop",25],["picjbet.shop",25],["imgkkabm.shop",25],["imgxabm.shop",25],["imgthbm.shop",25],["imgmyqbm.shop",25],["imgwwqbm.shop",25],["imgjvmbbm.shop",25],["imgjbxzjv.shop",25],["imgjmgfgm.shop",25],["picxnkjkhdf.sbs",25],["imgxxbdf.sbs",25],["imgnngr.sbs",25],["imgjjtr.sbs",25],["imgqbbds.sbs",25],["imgbvdf.sbs",25],["imgqnnnebrf.sbs",25],["imgnnnvbrf.sbs",25],["pornfd.com",25],["xsanime.com",25],["camclips.tv",25],["ninjashare.to",25],["fembed.com",[26,28,114]],["films5k.com",[26,29]],["javideo.pw",[26,29]],["ujav.me",[26,29]],["shameless.com",[26,67,68]],["javstream.top",[26,29]],["informer.com",27],["igfap.com",28],["sheshaft.com",28],["gotgayporn.com",28],["fetishshrine.com",28],["sleazyneasy.com",28],["vikiporn.com",28],["pornomico.com",[28,75]],["watchhouseonline.net",28],["pornoman.pl",[28,128]],["camseek.tv",28],["xxmovz.com",28],["lewdzone.com",28],["nonktube.com",28],["pussyspot.net",28],["wildpictures.net",28],["nudogram.com",28],["18girlssex.com",28],["modagamers.com",28],["batporno.com",28],["lebahmovie.com",28],["duit.cc",28],["classicpornbest.com",[28,138]],["desihoes.com",[28,52]],["indianpornvideo.org",28],["porn18sex.com",28],["slaughtergays.com",28],["sexiestpicture.com",28],["line25.com",28],["javtiful.com",28],["homemoviestube.com",28],["manytoon.com",28],["thatav.net",28],["hentaifreak.org",28],["xxgasm.com",28],["kfapfakes.com",28],["xsober.com",28],["sexsaoy.com",28],["ashemaletv.com",28],["beurettekeh.com",28],["celibook.com",28],["gourmandix.com",28],["sexetag.com",28],["hd44.net",28],["dirtyfox.net",28],["babestube.com",28],["momvids.com",28],["porndr.com",28],["deviants.com",28],["freehardcore.com",28],["lesbian8.com",[28,297]],["eztv-torrent.net",28],["spicyandventures.com",28],["watchmdh.to",28],["sarapbabe.com",28],["rule34porn.net",28],["fullxxxporn.net",28],["hdvideosporn.com",28],["qqxnxx.com",28],["xnxx-downloader.net",28],["comicspornow.com",28],["mult34.com",28],["viet69.org",28],["xxxvideotube.net",28],["javqis.com",28],["onlyhotleaks.com",28],["35volitantplimsoles5.com",28],["amateurblog.tv",28],["fashionblog.tv",28],["latinblog.tv",28],["silverblog.tv",28],["tokyoblog.tv",28],["xblog.tv",28],["peladas69.com",28],["liveru.sx",28],["protege-torrent.com",28],["freehdinterracialporn.in",28],["titsintops.com",28],["pervclips.com",28],["sfastwish.com",29],["streampelis.club",29],["watchjavnow.xyz",29],["juicywest.com",29],["fakyutube.com",29],["mm9842.com",29],["mm9846.com",29],["gaystream.cloud",29],["javmvp.com",29],["watch-jav-english.live",29],["0gogle.com",29],["videobot.stream",29],["iframe2videos.xyz",29],["vidohd.com",29],["kitabmarkaz.xyz",29],["animepl.xyz",29],["faptiti.com",29],["goana.xyz",29],["javplaya.com",29],["xvideostream.net",29],["xxxjaa.xyz",29],["japopav.tv",29],["streamm4u.club",29],["fembed-hd.com",29],["javside.com",[29,30]],["javhdfree.icu",29],["nekolink.site",29],["av4asia.com",29],["suzihaza.com",29],["vcdn-stream.xyz",29],["mycloudzz.com",29],["javpoll.com",29],["javleaked.com",29],["pornhole.club",29],["ffem.club",29],["jvembed.com",29],["megafilmeshdonline.org",29],["jav247.top",29],["nashstream.top",29],["yuistream.xyz",29],["mavavid.com",29],["diampokusy.com",29],["vidmedia.top",29],["moviepl.xyz",29],["superplayxyz.club",29],["viplayer.cc",29],["nsfwzone.xyz",29],["layarkacaxxi.icu",29],["embed-media.com",29],["javpornhd.online",29],["zojav.com",29],["javenglish.me",29],["owodeuwu.xyz",29],["javbigo.xyz",29],["pornhubed.com",29],["playerjavseen.com",29],["javsubbed.xyz",29],["xsub.cc",29],["fembed9hd.com",29],["onscreensvideo.com",29],["baldrfilms.xyz",29],["gaymovies.top",29],["guccihide.com",29],["streamhide.to",29],["vidhidevip.com",29],["cloudrls.com",29],["embedwish.com",29],["fc2stream.tv",29],["javhahaha.us",29],["javlion.xyz",29],["javibe.net",29],["jvideo.xyz",29],["kissmovies.net",29],["streamvid.top",29],["vidgo.top",29],["mycloud123.top",29],["doodporn.xyz",29],["met.bz",30],["hindimean.com",30],["senmanga.com",30],["ebookdz.com",30],["cda-hd.cc",30],["javstream.com",30],["kurazone.net",30],["turkdown.com",30],["urlgalleries.net",30],["movie4u.live",30],["addic7ed.com",[30,53]],["solarmovie.id",30],["01fmovies.com",30],["babesaround.com",30],["dirtyyoungbitches.com",30],["grabpussy.com",30],["join2babes.com",30],["nightdreambabe.com",30],["novoglam.com",30],["novohot.com",30],["novojoy.com",30],["novoporn.com",30],["novostrong.com",30],["pbabes.com",30],["pussystate.com",30],["redpornblog.com",30],["rossoporn.com",30],["sexynakeds.com",30],["thousandbabes.com",30],["gulf-up.com",30],["vidia.tv",30],["cutpaid.com",[30,111]],["javporn.best",[30,114]],["mixloads.com",30],["ancensored.com",30],["savevideo.tube",30],["files.cx",30],["drivefire.co",30],["porngo.com",30],["arenabg.com",30],["vidload.net",30],["animealtadefinizione.it",30],["lkc21.net",30],["mavanimes.co",30],["onnime.net",30],["noxx.to",30],["jav.sh",[30,225]],["supertelevisionhd.com",30],["whitemouseapple.com",30],["autoembed.cc",30],["whisperingauroras.com",30],["loadsamusicsarchives.blogspot.com",30],["xxxfiles.com",30],["deseneledublate.com",30],["hentaicloud.com",[30,274]],["descarga.xyz",30],["familyporn.tv",30],["pornxp.com",[30,68]],["pornxp.org",30],["rawmanga.top",30],["eplayer.click",30],["aniwave.to",30],["gayteam.club",30],["mangaraw.org",30],["mplayer.sbs",30],["flixtormovies.co",30],["watchthat70show.net",30],["cs-fundamentals.com",31],["b2bhint.com",[31,304]],["baikin.net",31],["unsurcoenlasombra.com",31],["pelisplus.online",32],["kisshentai.net",33],["insidemarketing.it",33],["worldaide.fr",33],["asmwall.com",33],["bibme.org",34],["citationmachine.net",[34,35]],["citethisforme.com",35],["easybib.com",35],["1plus1plus1equals1.net",36],["cooksinfo.com",36],["heatherdisarro.com",36],["thesassyslowcooker.com",36],["mp4upload.com",37],["megacanais.com",37],["sanet.lc",37],["ythd.org",37],["kaas.ro",[37,166]],["sarugbymag.co.za",40],["ikaza.net",40],["imgadult.com",[41,42]],["imgdrive.net",[41,42]],["imgtaxi.com",[41,42]],["imgwallet.com",[41,42]],["hdpornt.com",41],["4tube.com",41],["pornerbros.com",[41,52]],["pichaloca.com",41],["pornodoido.com",41],["pornwatchers.com",[41,52]],["gotporn.com",41],["picturelol.com",41],["imgspice.com",41],["orgyxxxhub.com",[41,73,74]],["befap.com",41],["alphaporno.com",41],["tubedupe.com",41],["sexykittenporn.com",[41,42]],["letmejerk.com",41],["letmejerk2.com",41],["letmejerk3.com",41],["letmejerk4.com",41],["letmejerk5.com",41],["letmejerk6.com",41],["letmejerk7.com",41],["hdtube.porn",41],["madchensex.com",41],["canalporno.com",41],["dreamamateurs.com",41],["eroxia.com",41],["pornozot.com",41],["camgirlbang.com",41],["casting-porno-tube.com",41],["teensexvideos.me",41],["goshow.tv",41],["hentaigo.com",[42,80]],["lolhentai.net",42],["porntopic.com",42],["cocogals.com",[42,52]],["camwhoreshd.com",42],["consoletarget.com",42],["pussytorrents.org",42],["ftopx.com",[42,67,78]],["8boobs.com",[42,67,68]],["babesinporn.com",[42,52,67,68]],["boobgirlz.com",42],["fooxybabes.com",42],["hotstunners.com",[42,67,68]],["jennylist.xyz",42],["jumboporn.xyz",42],["mainbabes.com",[42,67]],["mysexybabes.com",[42,67]],["nakedbabes.club",[42,67]],["pleasuregirl.net",[42,67,68]],["rabbitsfun.com",[42,67,68]],["sexybabesz.com",[42,67]],["vibraporn.com",42],["zazzybabes.com",42],["zehnporn.com",42],["naughtymachinima.com",42],["imgbaron.com",42],["decorativemodels.com",42],["erowall.com",[42,52]],["freyalist.com",42],["guruofporn.com",42],["jesseporn.xyz",42],["kendralist.com",42],["vipergirls.to",42],["lizardporn.com",42],["wantedbabes.com",[42,52]],["bustybloom.com",[42,68]],["exgirlfriendmarket.com",42],["nakedneighbour.com",42],["asianlbfm.net",42],["schoolgirls-asia.org",42],["pics4you.net",42],["moozpussy.com",42],["zoompussy.com",42],["2adultflashgames.com",42],["123strippoker.com",42],["babepedia.com",42],["boobieblog.com",42],["borwap.xxx",42],["chicpussy.net",42],["gamesofdesire.com",42],["hd-xxx.me",42],["hentaipins.com",[42,292]],["longporn.xyz",42],["picmoney.org",42],["pornhd720p.com",42],["sikwap.xyz",42],["super-games.cz",42],["xxx-videos.org",42],["xxxputas.net",42],["silverpic.com",42],["mysexgames.com",42],["sexgames.xxx",42],["picdollar.com",42],["pornstargold.com",42],["eroticity.net",42],["striptube.net",42],["xcity.org",42],["porncoven.com",42],["imgstar.eu",42],["pics4upload.com",42],["ahegaoporn.net",42],["myporntape.com",42],["luxuretv.com",43],["x-x-x.tube",43],["javboys.com",43],["javball.com",43],["otomi-games.com",43],["redhdtube.xxx",43],["faptube.xyz",43],["rat.xxx",43],["hispasexy.org",[43,226]],["javplay.me",43],["watchimpracticaljokers.com",43],["zerion.cc",43],["javcock.com",43],["leviathanmanga.com",43],["gayfor.us",43],["juegosgratisonline.com.ar",43],["levelupalone.com",43],["pelisplayer.xyz",44],["ncdn22.xyz",44],["netu.ac",44],["realyplayonli.xyz",[44,120]],["alocdn.co",[44,120]],["vidscdns.com",44],["doplay.store",44],["filme720.com",44],["onscreens.me",[44,120,334]],["video.q34r.org",[44,120]],["filmoviplex.com",[44,120]],["movie4night.com",[44,120]],["richhioon.eu",[44,120]],["srt.am",45],["ticonsiglio.com",46],["photos-public-domain.com",48],["civilenggforall.com",48],["hdporn.net",[49,50]],["older-mature.net",50],["telorku.xyz",50],["watch-my-gf.com",51],["watchmyexgf.net",51],["cartoonporno.xxx",51],["mangoporn.net",52],["area51.porn",52],["sexytrunk.com",52],["teensark.com",52],["tubous.com",[52,89]],["toyoheadquarters.com",52],["spycock.com",52],["barfuck.com",52],["multporn.net",52],["besthugecocks.com",52],["daftporn.com",52],["italianoxxx.com",52],["collegehdsex.com",52],["lustylist.com",52],["yumstories.com",52],["18-teen-porn.com",52],["69teentube.com",52],["girlshd.xxx",52],["home-xxx-videos.com",52],["orgasmlist.com",52],["teensextube.xxx",52],["pornyfap.com",52],["nudistube.com",52],["uporno.xxx",52],["ultrateenporn.com",52],["gosexpod.com",52],["al4a.com",52],["grannysex.name",52],["porntb.com",52],["scopateitaliane.it",52],["sexbox.online",52],["teenpornvideo.sex",52],["twatis.com",[52,67]],["flashingjungle.com",52],["fetishburg.com",52],["privateindianmovies.com",52],["soyoungteens.com",52],["gottanut.com",52],["uiporn.com",52],["xcafe.com",52],["gfsvideos.com",52],["home-made-videos.com",52],["tbib.org",52],["sensualgirls.org",52],["ariestube.com",52],["asian-teen-sex.com",52],["18asiantube.com",52],["wholevideos.com",52],["asianporntube69.com",52],["babeswp.com",52],["bangyourwife.com",52],["bdsmslavemovie.com",52],["bdsmwaytube.com",52],["bestmaturewomen.com",52],["classicpornvids.com",52],["pornpaw.com",52],["dawntube.com",52],["desimmshd.com",52],["dirtytubemix.com",52],["plumperstube.com",52],["enormousbabes.net",52],["exclusiveindianporn.com",52],["figtube.com",52],["amateur-twink.com",52],["freeboytwinks.com",52],["freegrannyvids.com",52],["freexmovs.com",52],["freshbbw.com",52],["frostytube.com",52],["fuckhottwink.com",52],["fuckslutsonline.com",52],["gameofporn.com",52],["gayboyshd.com",52],["getitinside.com",[52,109]],["giantshemalecocks.com",52],["erofus.com",52],["hd-tube-porn.com",52],["hardcorehd.xxx",52],["hairytwat.org",52],["iwantmature.com",52],["justababes.com",52],["juicyflaps.com",52],["jenpornuj.cz",52],["javteentube.com",52],["hard-tube-porn.com",52],["klaustube.com",52],["kaboomtube.com",52],["lustyspot.com",52],["lushdiaries.com",52],["lovelynudez.com",[52,134]],["dailyangels.com",52],["ljcam.net",52],["myfreemoms.com",52],["nakenprat.com",52],["oosex.net",[52,68]],["oldgrannylovers.com",52],["ohueli.net",52],["pornuploaded.net",52],["pornstarsadvice.com",52],["bobs-tube.com",52],["pornohaha.com",52],["pornmam.com",52],["pornhegemon.com",52],["pornabcd.com",52],["porn-hd-tube.com",52],["thehentaiworld.com",52],["pantyhosepink.com",52],["queenofmature.com",52],["realvoyeursex.com",52],["realbbwsex.com",52],["rawindianporn.com",52],["onlygoldmovies.com",52],["rainytube.com",52],["stileproject.com",52],["slutdump.com",52],["nastybulb.com",52],["sextube-6.com",52],["porntubegf.com",52],["sassytube.com",52],["smplace.com",52],["maturell.com",52],["nudemilfwomen.com",52],["pornoplum.com",52],["widewifes.com",52],["wowpornlist.xyz",52],["vulgarmilf.com",52],["oldgirlsporn.com",52],["freepornrocks.com",52],["erogen.su",52],["get-to.link",[52,78]],["beegsexxx.com",52],["watchpornx.com",[52,158]],["ytboob.com",52],["saradahentai.com",52],["hentaiarena.com",52],["absolugirl.com",52],["absolutube.com",52],["allafricangirls.net",52],["asianpornphoto.net",52],["freexxxvideos.pro",52],["videosxxxporno.gratis",52],["nude-teen-18.com",52],["xemales.com",52],["szexkepek.net",52],["wife-home-videos.com",52],["sexmadeathome.com",52],["nylondolls.com",52],["milforia.com",52],["onlylesbiantube.com",52],["teensfuck.me",52],["mexa.sh",53],["imgprime.com",54],["ondemandkorea.com",55],["bdsmx.tube",56],["mrgay.com",56],["pornxs.com",57],["ifenpaidy.com",58],["dailygeekshow.com",59],["rue89lyon.fr",60],["onlinemschool.com",61],["bigtitsxxxsex.com",63],["zmovs.com",63],["ceesty.com",64],["corneey.com",64],["destyy.com",64],["festyy.com",64],["gestyy.com",64],["lavozdigital.es",64],["tnaflix.com",65],["sunporno.com",[67,68]],["angelgals.com",67],["babesexy.com",67],["hotbabeswanted.com",67],["nakedgirlsroom.com",67],["nudebabes.sexy",[67,68]],["sexybabes.club",67],["sexybabesart.com",67],["favefreeporn.com",67],["onlygayvideo.com",67],["peachytube.com",67],["stepsisterfuck.me",67],["adultdvdparadise.com",68],["freeomovie.info",68],["fullxxxmovies.me",68],["mangoparody.com",68],["mangoporn.co",68],["netflixporno.net",68],["pandamovies.me",68],["playpornfree.xyz",68],["pornkino.cc",68],["pornwatch.ws",68],["watchfreexxx.pw",68],["watchxxxfree.pw",68],["xopenload.pw",68],["xtapes.me",68],["xxxmoviestream.xyz",68],["xxxparodyhd.net",68],["xxxscenes.net",68],["xxxstream.me",68],["youwatchporn.com",68],["nudismteens.com",68],["youx.xxx",68],["asiansex.life",68],["hypnohub.net",68],["oldies.name",68],["xnxxporn.video",68],["xxxdessert.com",68],["xxxshake.com",68],["manhwa18.cc",68],["best18porn.com",68],["bigtitslust.com",[68,297]],["manga18fx.com",68],["sexywomeninlingerie.com",68],["theteensexy.com",68],["xteensex.net",68],["stiflersmoms.com",68],["gifhq.com",68],["amateur-couples.com",68],["teen-hd-sex.com",68],["tube-teen-18.com",68],["xxx-asian-tube.com",68],["pornhost.com",69],["locopelis.com",[70,71,72]],["repelis.net",70],["perfectmomsporn.com",73],["donkparty.com",76],["streamdreams.org",78],["bdsmporn.cc",78],["cocoporn.net",78],["dirtyporn.cc",78],["faperplace.com",78],["freeadultvideos.cc",78],["freepornstream.cc",78],["generalpornmovies.com",78],["kinkyporn.cc",78],["moviesxxx.cc",78],["movstube.net",78],["onlinefetishporn.cc",78],["peetube.cc",78],["pornonline.cc",78],["porntube18.cc",78],["streamextreme.cc",78],["streamporn.cc",78],["videoxxx.cc",78],["watchporn.cc",78],["x24.video",78],["xxx24.vip",78],["xxxonline.cc",78],["xxxonlinefree.com",78],["xxxopenload.com",78],["gonzoporn.cc",78],["onlinexxx.cc",78],["tvporn.cc",78],["allporncomic.com",78],["thepiratebay.org",78],["videosection.com",78],["pornky.com",78],["tubxporn.com",78],["imgcredit.xyz",78],["desixxxtube.org",78],["freeindianporn2.com",78],["kashtanka2.com",78],["kompoz2.com",78],["pakistaniporn2.com",78],["mangahere.onl",[81,179]],["worldfreeware.com",82],["ellibrepensador.com",82],["rexdlfile.com",82],["nudecelebforum.com",83],["pronpic.org",84],["chyoa.com",85],["thisisfutbol.com",86],["pcwelt.de",87],["sixsistersstuff.com",88],["vermangasporno.com",91],["celebjihad.com",91],["dirtyship.com",91],["celebmasta.com",91],["fullporner.com",[91,239]],["lejdd.fr",92],["gamekult.com",92],["bharian.com.my",92],["thememypc.net",93],["cityam.com",94],["inhabitat.com",95],["speedtest.net",97],["livingstondaily.com",97],["goafricaonline.com",98],["poedb.tw",99],["link.tl",100],["lnk.news",101],["lnk.parts",101],["zootube1.com",102],["xxxtubezoo.com",102],["zooredtube.com",102],["videos1002.com",103],["sab.bz",103],["javseen.tv",103],["autobild.de",105],["alimaniac.com",106],["sbs.com.au",107],["1xxx-tube.com",109],["asssex-hd.com",109],["bigcockfreetube.com",109],["bigdickwishes.com",109],["enjoyfuck.com",109],["freemomstube.com",109],["fuckmonstercock.com",109],["gobigtitsporn.com",109],["gofetishsex.com",109],["hard-tubesex.com",109],["hd-analporn.com",109],["hiddencamstube.com",109],["kissmaturestube.com",109],["lesbianfantasyxxx.com",109],["modporntube.com",109],["pornexpanse.com",109],["pornokeep.com",109],["pussytubeebony.com",109],["tubesex.me",109],["vintagesexpass.com",109],["voyeur-pornvideos.com",109],["voyeurspyporn.com",109],["voyeurxxxfree.com",109],["xxxtubenote.com",109],["yummysextubes.com",109],["nakedarab-tube.com",109],["xxxtubepass.com",109],["yestubemature.com",109],["yourhomemadetube.com",109],["yourtranny-sex.com",109],["tubexxxone.com",109],["airsextube.com",109],["asianbabestube.com",109],["bigtitsxxxfree.com",109],["blowjobpornset.com",109],["entertubeporn.com",109],["finexxxvideos.com",109],["freesexvideos24.com",109],["fuckhairygirls.com",109],["gopornindian.com",109],["grandmatube.pro",109],["grannyfucko.com",109],["grannyfuckxxx.com",109],["hiddencamhd.com",109],["hindiporno.pro",109],["indianbestporn.com",109],["japanesemomsex.com",109],["japanxxxass.com",109],["massagefreetube.com",109],["maturepussies.pro",109],["megajapansex.com",109],["new-xxxvideos.com",109],["xxxblowjob.pro",109],["xxxtubegain.com",109],["xxxvideostrue.com",109],["acutetube.net",109],["agedtubeporn.com",109],["agedvideos.com",109],["onlinegrannyporn.com",109],["freebigboobsporn.com",109],["tubeinterracial-porn.com",109],["best-xxxvideos.com",109],["bestanime-xxx.com",109],["blowxxxtube.com",109],["callfuck.com",109],["teenhubxxx.com",109],["tubepornasian.com",109],["xxxtubedot.com",109],["blowjobfucks.com",109],["dirtyasiantube.com",109],["maturewomenfucks.com",109],["pornmaturetube.com",109],["setfucktube.com",109],["tourporno.com",109],["do-xxx.com",109],["dotfreesex.com",109],["dotfreexxx.com",109],["easymilftube.net",109],["electsex.com",109],["fineretroporn.com",109],["freehqtube.com",109],["freshmaturespussy.com",109],["freshsexxvideos.com",109],["fuckedporno.com",109],["gallant-matures.com",109],["hqhardcoreporno.com",109],["girlssexxxx.com",109],["glamourxxx-online.com",109],["vintagepornnew.com",109],["tubevintageporn.com",109],["goxxxvideos.com",109],["grouppornotube.com",109],["hqxxxmovies.com",109],["hqsex-xxx.com",109],["hqamateurtubes.com",109],["hotpussyhubs.com",109],["hdpornteen.com",109],["indecentvideos.com",109],["ifreefuck.com",109],["kittyfuckstube.com",109],["lightxxxtube.com",109],["momstube-porn.com",109],["modelsxxxtube.com",109],["milfpussy-sex.com",109],["nicexxxtube.com",109],["neatpornodot.com",109],["neatfreeporn.com",109],["bigtitsporn-tube.com",109],["tubehqxxx.com",109],["nakedbbw-sex.com",109],["onlineteenhub.com",109],["online-xxxmovies.com",109],["pussyhothub.com",109],["pornxxxplace.com",109],["pornoteensex.com",109],["pornonote.pro",109],["pornoaid.com",109],["pornclipshub.com",109],["whitexxxtube.com",109],["sweetadult-tube.com",109],["sweet-maturewomen.com",109],["sexyoungclips.com",109],["sexymilfsearch.com",109],["sextubedot.com",109],["hqmaxporn.com",109],["sexlargetube.com",109],["sexhardtubes.com",109],["tubepornstock.com",109],["xfuckonline.com",109],["sheamateur.com",110],["cuts-url.com",111],["exe.io",[111,185]],["adsafelink.com",111],["modebaca.com",111],["cutdl.xyz",111],["cryptofuns.ru",[111,206]],["sekilastekno.com",111],["shurt.pw",[111,289]],["smoner.com",111],["droplink.co",111],["ez4short.com",111],["try2link.com",[111,247]],["jameeltips.us",111],["blog.linksfire.co",111],["recipestutorials.com",111],["shrinkforearn.in",111],["mondainai.moe",111],["linksly.co",111],["curto.win",111],["imagenesderopaparaperros.com",111],["shortenbuddy.com",111],["apksvip.com",111],["4cash.me",111],["teknomuda.com",111],["shrinkhere.xyz",111],["illink.net",111],["yourtechnology.online",111],["savelink.site",111],["apkshrt.com",111],["srts.me",111],["kutmoney.com",111],["kutt.io",111],["samaa-pro.com",111],["miklpro.com",111],["modapk.link",111],["1shorten.com",111],["ccurl.net",111],["st23q.com",111],["beautyram.info",111],["viraloc.com",111],["coinurl.net",111],["galaxy-link.space",111],["linkpoi.me",111],["usdshort.com",111],["bitcoinly.in",111],["pewgame.com",111],["yxoshort.com",111],["claimfreebits.com",[111,264]],["crazyblog.in",111],["gtlink.co",111],["rshrt.com",111],["dz-linkk.com",111],["adurly.cc",111],["fiedrive.com",111],["link.asiaon.top",111],["download.sharenulled.net",111],["beingtek.com",111],["adlinkweb.com",111],["linkbr.xyz",111],["swzz.xyz",111],["cutp.in",111],["dash-free.com",111],["gsm-solution.com",112],["ihackedgames.com",113],["dvdporngay.com",113],["software-on.com",113],["kpopjjang.com",[113,184]],["siteunblocked.info",[113,268]],["unblocked.name",[113,268]],["uproxy2.biz",[113,268]],["gomo.to",114],["dlapk4all.com",114],["popmatters.com",115],["planetf1.com",115],["austin.culturemap.com",115],["northern-scot.co.uk",115],["icy-veins.com",116],["bidouillesikea.com",116],["truetrophies.com",117],["alcasthq.com",118],["mzee.com",118],["supforums.com",119],["player.xxxbestsites.com",120],["player.tabooporns.com",120],["wiztube.xyz",120],["megatube.xxx",120],["hot-cartoon.com",120],["wowstream.top",120],["haes.tech",120],["koreanpornmovie.xyz",120],["xxvideoss.net",120],["player.subespanolvip.com",120],["vidcdn.co",[120,242]],["justswallows.net",120],["wilifilm.net",120],["rpdrlatino.live",120],["pbtube.co",120],["streaming-french.net",120],["koreanbj.club",120],["monstream.org",120],["player.hdgay.net",120],["ytms.one",120],["cdngee.com",120],["fshd3.club",120],["hd-streaming.net",120],["streaming-french.org",120],["telenovelas-turcas.com.es",120],["gocurrycracker.com",122],["xcums.com",122],["ihub.live",122],["naturalbd.com",122],["freeuseporn.com",122],["salamanca24horas.com",123],["bollywoodshaadis.com",124],["ngelag.com",125],["huim.com",126],["cambay.tv",129],["caminspector.net",129],["camwhorespy.com",129],["camwhoria.com",129],["camgoddess.tv",129],["zemporn.com",130],["wpgdadatong.com",131],["wikifeet.com",132],["root-top.com",133],["allmomsex.com",134],["allnewindianporn.com",134],["analxxxvideo.com",134],["animalextremesex.com",134],["anime3d.xyz",134],["animefuckmovies.com",134],["animepornfilm.com",134],["animesexbar.com",134],["animesexclip.com",134],["animexxxsex.com",134],["animexxxfilms.com",134],["anysex.club",134],["apetube.asia",134],["asianfuckmovies.com",134],["asianfucktube.com",134],["asianporn.sexy",134],["asiansexcilps.com",134],["beeg.fund",134],["beegvideoz.com",134],["bestasiansex.pro",134],["bravotube.asia",134],["brutalanimalsfuck.com",134],["candyteenporn.com",134],["daddyfuckmovies.com",134],["desifuckonline.com",134],["exclusiveasianporn.com",134],["exteenporn.com",134],["fantasticporn.net",134],["fantasticyoungporn.com",134],["fineasiansex.com",134],["firstasianpussy.com",134],["freeindiansextube.com",134],["freepornasians.com",134],["freerealvideo.com",134],["fuck-beeg.com",134],["fuck-xnxx.com",134],["fuckasian.pro",134],["fuckfuq.com",134],["fuckundies.com",134],["gojapaneseporn.com",134],["golderotica.com",134],["goodyoungsex.com",134],["goyoungporn.com",134],["hardxxxmoms.com",134],["hdvintagetube.com",134],["hentaiporn.me",134],["hentaisexfilms.com",134],["hentaisexuality.com",134],["hot-teens-movies.mobi",134],["hotanimepornvideos.com",134],["hotanimevideos.com",134],["hotasianpussysex.com",134],["hotjapaneseshows.com",134],["hotmaturetube.com",134],["hotmilfs.pro",134],["hotorientalporn.com",134],["hotpornyoung.com",134],["hotxxxjapanese.com",134],["hotxxxpussy.com",134],["indiafree.net",134],["indianpornvideo.online",134],["japanpornclip.com",134],["japanesetube.video",134],["japansex.me",134],["japanesexxxporn.com",134],["japansporno.com",134],["japanxxx.asia",134],["japanxxxworld.com",134],["keezmovies.surf",134],["lingeriefuckvideo.com",134],["liveanimalporn.zooo.club",134],["madhentaitube.com",134],["megahentaitube.com",134],["megajapanesesex.com",134],["megajapantube.com",134],["milfxxxpussy.com",134],["momsextube.pro",134],["momxxxass.com",134],["monkeyanimalporn.com",134],["moviexxx.mobi",134],["newanimeporn.com",134],["newjapanesexxx.com",134],["nicematureporn.com",134],["nudeplayboygirls.com",134],["openxxxporn.com",134],["originalindianporn.com",134],["originalteentube.com",134],["pig-fuck.com",134],["plainasianporn.com",134],["popularasianxxx.com",134],["pornanimetube.com",134],["pornasians.pro",134],["pornhat.asia",134],["pornheed.online",134],["pornjapanesesex.com",134],["pornomovies.asia",134],["pornvintage.tv",134],["primeanimesex.com",134],["realjapansex.com",134],["realmomsex.com",134],["redsexhub.com",134],["retroporn.world",134],["retrosexfilms.com",134],["sex-free-movies.com",134],["sexanimesex.com",134],["sexanimetube.com",134],["sexjapantube.com",134],["sexmomvideos.com",134],["sexteenxxxtube.com",134],["sexxxanimal.com",134],["sexyoungtube.com",134],["sexyvintageporn.com",134],["sopornmovies.com",134],["spicyvintageporn.com",134],["sunporno.club",134],["tabooanime.club",134],["teenextrem.com",134],["teenfucksex.com",134],["teenhost.net",134],["teensexass.com",134],["tnaflix.asia",134],["totalfuckmovies.com",134],["totalmaturefuck.com",134],["txxx.asia",134],["voyeurpornsex.com",134],["warmteensex.com",134],["wetasiancreampie.com",134],["wildhentaitube.com",134],["wowyoungsex.com",134],["xhamster-art.com",134],["xmovie.pro",134],["xnudevideos.com",134],["xnxxjapon.com",134],["xpics.me",134],["xvide.me",134],["xxxanimefuck.com",134],["xxxanimevideos.com",134],["xxxanimemovies.com",134],["xxxhentaimovies.com",134],["xxxhothub.com",134],["xxxjapaneseporntube.com",134],["xxxlargeporn.com",134],["xxxmomz.com",134],["xxxpornmilf.com",134],["xxxpussyclips.com",134],["xxxpussysextube.com",134],["xxxretrofuck.com",134],["xxxsex.pro",134],["xxxsexyjapanese.com",134],["xxxteenyporn.com",134],["xxxvideo.asia",134],["xxxvideos.ink",134],["xxxyoungtv.com",134],["youjizzz.club",134],["youngpussyfuck.com",134],["za.gl",136],["activistpost.com",[137,141]],["ladepeche.fr",138],["jemontremonminou.com",138],["jemontremasextape.com",138],["jemontremabite.com",138],["bitzite.com",[138,183]],["kinoger.ru",139],["moviesapi.club",139],["clasicotas.org",140],["jattmate.com",141],["saveshared.com",141],["simpledownload.net",141],["compucalitv.com",142],["blademaster666.com",143],["hot2k.com",143],["luchoedu.org",143],["lupaste.com",143],["pornovenezolano.com.ve",143],["romnation.net",143],["venezporn.com",143],["hubzter.com",144],["collater.al",144],["nzpocketguide.com",144],["volksstimme.de",146],["phonenumber-lookup.info",147],["maniac.de",148],["cambro.tv",149],["filerio.in",149],["call2friends.com",149],["gigaho.com",149],["trendsderzukunft.de",149],["findandfound.ga",[149,219,222]],["forum.lolesporte.com",149],["mytoolz.net",149],["haoweichi.com",149],["tcheats.com",150],["tobys.dk",150],["sembunyi.in",151],["anime-jl.net",152],["zplayer.live",153],["fuckdy.com",154],["bdsmporntub.com",154],["femdomporntubes.com",154],["spellchecker.net",155],["nackte.com",158],["highporn.net",158],["blasensex.com",158],["thegatewaypundit.com",159],["your-daily-girl.com",159],["720pxmovies.blogspot.com",160],["penis-bilder.com",161],["boyfriendtv.com",161],["dansmovies.com",161],["shegotass.info",161],["4rkinggame.com",161],["phimmoiaz.cc",161],["papahd.club",161],["papahd1.xyz",161],["mvidoo.com",161],["imgdawgknuttz.com",162],["m4maths.com",163],["poki-gdn.com",163],["megapornfreehd.com",164],["tonpornodujour.com",165],["absentescape.net",166],["forgepattern.net",166],["tunovelaligera.com",167],["dr-farfar.com",167],["nysainfo.pl",167],["c1ne.co",167],["bleachmx.fr",167],["choq.fm",167],["geeksweb.net",167],["usb-antivirus.com",167],["eroticmv.com",167],["allywebsite.com",167],["ktm2day.com",167],["downloadcursos.net",167],["bezpolitickekorektnosti.cz",168],["protopage.com",169],["topito.com",170],["livesport.ws",172],["citynow.it",173],["variety.com",174],["cuatro.com",176],["mitele.es",176],["telecinco.es",176],["serieslandia.com",177],["softwaredescargas.com",177],["anongamez.com",177],["morritastube.xxx",[177,286]],["rawstory.com",178],["bilasport.net",180],["yogitimes.com",181],["juba-get.com",182],["percentagecalculator.guru",182],["kuncomic.com",182],["claim.8bit.ca",[183,255]],["lightnovelpdf.com",183],["ta2deem7arbya.com",183],["adsy.pw",183],["playstore.pw",183],["bootyexpo.net",183],["arblinks.xyz",183],["arbweb.info",183],["th3tech.net",183],["cryptonationfaucet.com",183],["solarchaine.com",183],["tokenmix.pro",183],["terafly.me",183],["addtobucketlist.com",183],["alternativa104.net",183],["asumesi.com",183],["ayo24.id",183],["barrier-free.net",183],["berich8.com",183],["bloooog.it",183],["branditechture.agency",183],["chataigpt.org",183],["coinsrev.com",183],["eliobenedetto.it",183],["iamflorianschulze.com",183],["kyoto-kanko.net",183],["limontorrents.com",183],["livenewsof.com",183],["medeberiya1.com",183],["medeberiyax.com",183],["oyundunyasi.net",183],["parrocchiapalata.it",183],["photoshopvideotutorial.com",183],["samovies.net",183],["tabering.net",183],["xn--nbkw38mlu2a.com",183],["faucetbravo.fun",183],["vstdrive.in",184],["wealthh.xyz",185],["lonely-mature.com",186],["tubepornclassic.com",187],["the-voice-of-germany.de",188],["adn.com",189],["spokesman.com",190],["news-herald.com",190],["verprogramasonline.com",191],["savealoonie.com",191],["pervertgirlsvideos.com",191],["open3dmodel.com",191],["elmundo.es",192],["expansion.com",192],["marca.com",192],["allusione.org",193],["cyberstumble.com",193],["wickedspot.org",193],["boredbat.com",193],["web.businessuniqueidea.com",193],["questloops.com",193],["venusarchives.com",193],["freemagazines.top",193],["elektrikmen.com",193],["solotrend.net",193],["itsecuritynews.info",193],["thebharatexpressnews.com",193],["inwepo.co",193],["daemon-hentai.com",193],["pornstash.in",193],["toramemoblog.com",193],["7daystodiemods.com",193],["7review.com",193],["asupan.me",193],["avitter.net",193],["bi-girl.net",193],["carryflix.icu",193],["dark5k.com",193],["fairyhorn.cc",193],["gojo2.com",193],["gorecenter.com",193],["huitranslation.com",193],["javhdvideo.org",193],["nakiny.com",193],["nemumemo.com",193],["peppe8o.com",193],["phodoi.vn",193],["savingsomegreen.com",193],["forocoches.com",194],["spinbot.com",195],["androidonepro.com",196],["arcadepunks.com",197],["wohnungsboerse.net",198],["nbareplayhd.com",200],["convert-case.softbaba.com",200],["thepoorcoder.com",200],["techgeek.digital",200],["warps.club",201],["truyenaudiocv.net",201],["kompasiana.com",202],["spectrum.ieee.org",203],["thenation.com",204],["newsonthegotoday.com",205],["scrubson.blogspot.com",206],["khmer7.org",206],["sandiegouniontribune.com",207],["fernsehserien.de",207],["femalefirst.co.uk",208],["theregister.co.uk",209],["sportstream.live",210],["blowjobgif.net",211],["erospots.info",212],["pornforrelax.com",213],["macrumors.com",214],["faupto.com",[215,216]],["dogemate.com",216],["napolipiu.com",217],["manpeace.org",218],["faucetwork.space",218],["gaminginfos.com",218],["png.is",[219,220,221]],["nohat.cc",[220,221]],["fuskator.com",223],["aquariumgays.com",226],["paginadanoticia.com.br",227],["alliptvlinks.com",228],["blog.textpage.xyz",228],["iguarras.com",229],["iputitas.net",229],["fastream.to",229],["1001tracklists.com",231],["counterstrike-hack.leforum.eu",232],["ajt.xooit.org",232],["ludwig-van.com",233],["standardmedia.co.ke",233],["files.fm",233],["sunci.net",234],["yoykp.com",234],["gamerxyt.com",235],["faqwiki.us",235],["zeeplayer.pages.dev",235],["cookad.net",235],["pmkisanlists.in",235],["shramikcard.in",235],["shareus.io",235],["sportfacts.net",[235,249]],["sportnews.to",235],["drivemoe.com",236],["dsharer.com",236],["looptorrent.org",237],["noicetranslations.blogspot.com",237],["serviceemmc.com",237],["shorttrick.in",237],["sharedisk.me",237],["shrdsk.me",237],["pupupul.site",238],["fansubseries.com.br",238],["stbnetu.xyz",238],["xmateur.com",239],["jadoo.lol",240],["sinensistoon.com",241],["ncdnx3.xyz",242],["usersdrive.com",243],["manoramaonline.com",244],["top10cafe.se",246],["techacode.com",246],["azmath.info",246],["downfile.site",246],["downphanmem.com",246],["expertvn.com",246],["memangbau.com",246],["trangchu.news",246],["aztravels.net",246],["aylink.co",248],["gitizle.vip",248],["shtms.co",248],["suaurl.com",[249,250]],["mysports.to",249],["blog24.me",251],["exactpay.online",[251,256]],["soltoshindo.com",251],["crypto4yu.com",251],["currentrecruitment.com",252],["investorveda.com",252],["techyuth.xyz",253],["claimclicks.com",254],["10convert.com",257],["pleated-jeans.com",257],["obsev.com",257],["wepc.com",257],["gal-dem.com",258],["mymusicreviews.com",259],["thechat.cafe",259],["gaystream.pw",260],["lagacetadesalamanca.es",261],["infocorp.io",262],["addictinggames.com",263],["comparteunclic.com",264],["grab.tc",264],["starbux.io",264],["qashbits.com",264],["upnewsinfo.com",265],["smdailyjournal.com",266],["toolforge.org",267],["getdogecoins.com",269],["malaysiastock.biz",270],["1bit.space",271],["1bitspace.com",271],["ytanime.tv",271],["hyundaitucson.info",272],["pimylifeup.com",273],["camwhorez.video",274],["best-shopme.com",275],["cpomagazine.com",276],["saungfirmware.id",277],["doramasyt.com",278],["monoschinos.com",278],["xxxdan.com",279],["abandonmail.com",280],["hentais.tube",281],["hentaitube.online",281],["hentaidude.com",282],["aegeanews.gr",283],["batterypoweronline.com",283],["brezovycukr.cz",283],["centrocommercialevulcano.com",283],["cieonline.co.uk",283],["commsbusiness.co.uk",283],["dailygrindonline.net",283],["delo.bg",283],["dynastyseries.com",283],["fabmx1.com",283],["fat-bike.com",283],["fmj.co.uk",283],["localemagazine.com",283],["loveourweddingmag.com",283],["metaforespress.gr",283],["myvalley.it",283],["niestatystyczny.pl",283],["primapaginamarsala.it",283],["ringelnatz.net",283],["schoolsweek.co.uk",283],["sikkenscolore.it",283],["sportbet.gr",283],["stadtstudenten.de",283],["stagemilk.com",283],["tautasdziesmas.lv",283],["thetoneking.com",283],["toplickevesti.com",283],["zeroradio.co.uk",283],["miohentai.com",284],["sluttyrat.com",285],["k12reader.com",287],["cachevalleydaily.com",287],["panel.skynode.pro",288],["imag-r.com",288],["atlaq.com",289],["douploads.net",289],["moalm-qudwa.blogspot.com",289],["theflixer.tv",290],["radionylive.com",291],["radioitalylive.com",291],["radiolovelive.com",291],["radiocountrylive.com",291],["radiosymphony.com",291],["miamibeachradio.com",291],["radiorockon.com",291],["radioitaliacanada.com",291],["radioitalianmusic.com",291],["radioamericalatina.com",291],["radiosantaclaus.com",291],["radionorthpole.com",291],["radionatale.com",291],["pornvideoq.com",293],["gaminggorilla.com",293],["sexuhot.com",293],["rexxx.org",294],["world4.eu",295],["flinsetyadi.com",295],["trytutorial.com",295],["rimworldbase.com",295],["ifreemagazines.com",295],["romaniataramea.com",296],["amateur8.com",297],["freeporn8.com",297],["maturetubehere.com",297],["sortporn.com",297],["textovisia.com",299],["hotcleaner.com",300],["momo-net.com",301],["hardwarezone.com.sg",302],["veryfastdownload.pw",306],["nation.africa",307],["manganelo.tv",308],["hdthevid.online",308],["vidhdthe.online",308],["vermoegen.org",309],["javhub.net",[310,311]],["inhumanity.com",312],["miraculous.to",313],["glotorrents.fr-proxy.com",314],["glotorrents.theproxy.ws",314],["tutele.sx",315],["dirp.me",316],["t18cv.com",317],["codecap.org",318],["integral-calculator.com",319],["derivative-calculator.net",319],["getcopy.link",320],["basic-tutorials.de",321],["ytmp3cut.com",322],["depvailon.com",323],["111.90.150.10",324],["111.90.150.149",324],["111.90.151.26",324],["111.90.159.159",324],["111.90.141.252",324],["mangahentai.xyz",325],["nhentai.io",[326,327]],["erofound.com",328],["erome.com",329],["flaticon.com",330],["zertalious.xyz",[331,346]],["tweakcentral.net",332],["nokiahacking.pl",333],["javct.net",334],["veryfreeporn.com",335],["austiblox.net",336],["linkbin.me",[337,338]],["teachoo.com",340],["maisonbrico.com",341],["vebo1.com",342],["komiklokal.me",343],["seriesmetro.net",344],["kodewebsite.com",347],["qcheng.cc",348],["hygiena.com",349],["netchimp.co.uk",350],["comohoy.com",[351,352]],["cimanow.cc",352],["xgroovy.com",353],["ruyashoujo.com",354],["gktech.uk",355],["x2download.com",356],["familyminded.com",357],["foxvalleyfoodie.com",357],["merriam-webster.com",357],["news.com.au",357],["playstationlifestyle.net",357],["sportsnaut.com",357],["tempumail.com",357],["toledoblade.com",357],["play.diziyou.co",358],["truyen-hentai.com",359],["redd.tube",360],["sendspace.com",361],["leechpremium.net",362],["sfr.fr",363],["ericdraken.com",364],["djs.sk",366],["pythonjobshq.com",367],["sensacine.com",369]]);

const entitiesMap = new Map([["hqq",2],["lookmovie",[2,18]],["shrink",[2,21,111]],["wetteronline",4],["ohmymag",8],["pingit",[10,21,30,79]],["oload",[10,21,28,30]],["streamhoe",[10,21]],["123europix",[14,15,30]],["gamestorrents",15],["gogoanimes",15],["limetorrents",15],["piratebayz",15],["europixhd",[15,30]],["hdeuropix",[15,30]],["topeuropix",[15,30]],["grantorrent",[15,96]],["moviescounter",15],["elixx",[15,81]],["telerium",15],["savelinks",15],["hentaisd",15],["mrpiracy",15],["prostoporno",17],["kissasian",18],["bflix",[18,30,290]],["m4ufree",[18,120]],["0123movies",18],["gomovies",18],["fembed",[18,29]],["mavplay",[18,26,29]],["videobb",[18,26,29,114]],["5movies",18],["123moviesc",18],["fmovies",18],["proxybit",18],["123movieshd",18],["fbgo",[18,29]],["sbchip",[18,29]],["sbflix",[18,29]],["sbplay",[18,29]],["sbplay2",[18,29]],["sbplay3",[18,29]],["sbrulz",[18,29]],["streamsb",[18,29,305]],["ask4movie",18],["1tamilmv",18],["buffstream",18],["tenies-online",18],["m4uhd",18],["hdhub4u",18],["watchseries9",18],["moviesjoy",18],["torrentstatus",18],["yts2",18],["y2mate",18],["alexsports",18],["2embed",18],["seulink",18],["encurtalink",18],["animepahe",[21,38]],["kwik",[21,38]],["1337x.unblocked",21],["1337x.unblockit",[21,24]],["pussyspace",21],["urlcero",21],["shrtfly",[21,66]],["linkshorts",21],["streamcdn",[21,30]],["vinaurl",[21,111]],["komikcast",21],["bolly4u",[21,137]],["tugaflix",21],["hdfriday",21],["123movies",21],["shortearn",[21,30]],["mstream",21],["watch4hd",21],["gdtot",21],["bluemediafiles",21],["dailysport",[21,30]],["btdb",[21,25]],["linksfire",21],["pureshort",[21,111]],["bluemediadownload",[21,28]],["bluemediafile",[21,28]],["bluemedialink",[21,28]],["bluemediastorage",[21,28]],["bluemediaurls",[21,28]],["urlbluemedia",[21,28]],["link1s",[21,111]],["shorttey",[21,111]],["videoplayer",21],["movizland",21],["sitesunblocked",21],["1377x",21],["bcvc",21],["thepiratebay",[23,32]],["tpbay",23],["camwhores",[23,42]],["camwhorestv",[23,42]],["filesamba",23],["theproxy",23],["steamplay",[24,25,26]],["streamp1ay",[25,26]],["topflix",25],["ustream",25],["hdfilme",[25,30,53,175]],["pixlev",25],["moviessources",25],["sbvideo",[25,29]],["steanplay",26],["stemplay",26],["streanplay",26],["txxx",26],["asianclub",[26,29,30]],["xmoviesforyou",[28,32]],["cuevana3",[28,104]],["vidcloud",[28,29,120]],["pornid",28],["zbporn",[28,127]],["yomovies",28],["nonsensediamond",28],["xclusivejams",28],["sportlemon",28],["sportlemons",28],["sportlemonx",28],["kinox",[28,30,53]],["kinoz",[28,30]],["remaxhd",28],["img4fap",28],["babeporn",28],["babytorrent",28],["123moviesme",28],["xxxhdvideo",28],["kinoger",29],["iframejav",29],["vidsrc",[29,30]],["mm9844",29],["netxwatch",29],["milfnut",29],["anxcinema",29],["videofilms",29],["prosongs",29],["moviesland",[29,30]],["ncdnstm",29],["filelions",29],["streamwish",29],["mcloud",30],["vizcloud",30],["vizcloud2",30],["kinos",[30,53]],["ouo",30],["songs",30],["gogoanimetv",30],["daddylive",[30,82]],["pelisplus",30],["streamm4u",30],["inkapelis",30],["ettv",30],["pelix",30],["pnd",30],["0123movie",30],["movies123",30],["piratebay",30],["webbro",30],["javwide",30],["vidhd",30],["mirrorace",30],["thoptv",30],["streamingworld",30],["yesmovies",30],["solarmovie",30],["bdiptv",30],["cinemalibero",30],["pctfenix",[30,143]],["pctnew",[30,143]],["watchgameofthrones",30],["tmearn",[30,111]],["shorten",[30,111,185]],["123animes",[30,114]],["openloadmovies",30],["gdriveplayer",30],["crichd",30],["vipracing",30],["supervideo",30],["1337x",[30,229]],["a2zapk",30],["ilgeniodellostreaming",30],["superstream",30],["123movies-org",30],["sflix",30],["primetubsub",30],["f2movies",30],["imgmaze",[32,67,78]],["imgtown",[32,67,77,78]],["imgrock",[32,77]],["biqle",36],["otakuindo",36],["vipboxtv",37],["yts",39],["sexvid",[41,171]],["silkengirl",[42,67,68]],["rintor",42],["imgsen",[42,77]],["imgsto",[42,77]],["sxyprn",43],["waaw",[44,120]],["waaaw",[44,120]],["waaw1",[44,120]],["vapley",44],["younetu",44],["player.uwatchfree",[44,120,242]],["123link",[46,47,48]],["7mmtv",50],["pornhat",52],["porno-tour",52],["desivideos",52],["movie4me",58],["imgdew",[67,77,78]],["imgview",[67,77,78]],["pandamovie",68],["speedporn",68],["watchpornfree",68],["imgoutlet",[77,78]],["anitube",78],["movisubmalay",[78,114]],["waploaded",78],["dirtyindianporn",78],["indianpornvideos",78],["kashtanka",78],["onlyindianporn",78],["porno18",78],["xxnx",78],["xxxindianporn",78],["adsrt",79],["stream2watch",81],["peliculas-dvdrip",81],["bunkr",89],["pouvideo",90],["povvideo",90],["povw1deo",90],["povwideo",90],["powv1deo",90],["powvibeo",90],["powvideo",90],["powvldeo",90],["grantorrent1",96],["subtorrents",[96,108]],["subtorrents1",[96,108]],["megalink",111],["earnload",111],["miniurl",111],["shrinke",111],["shrinkme",111],["pcprogramasymas",111],["earncash",111],["shortzzy",111],["lite-link",111],["adcorto",111],["dogecoin",111],["upfiles",111],["torrentz2eu",114],["afilmywap",114],["okhatrimaza",114],["123anime",114],["gomoviesfree",114],["player.tormalayalamhd",120],["depedlps",122],["videovard",125],["asiansex",134],["japanfuck",134],["japanporn",134],["teensex",134],["vintagetube",134],["xxxmovies",134],["0l23movies",135],["cloudvideotv",138],["movierulzlink",141],["newmovierulz",141],["3hiidude",141],["ispunlock",145],["tpb",145],["vgmlinks",157],["thestreameast",166],["zone-annuaire",167],["rainanime",179],["blurayufr",183],["tutsnode",193],["web2.0calc",199],["readcomiconline",200],["dood",224],["cricfree",229],["sportskart",229],["brainly",230],["movies4u",235],["movies4u3",235],["gplinks",245],["azsoft",246],["moviehdf",247],["bg-gledai",259],["bolly4umovies",289],["123movieshub",290],["animeunity",290],["cima-club",290],["flixhq",290],["hindilinks4u",290],["t7meel",290],["bollyholic",303],["katmoviefix",318],["filemoon",339],["bitporno",345]]);

const exceptionsMap = new Map([["pingit.com",[10,21,30,79]],["pingit.me",[10,21,30,79]]]);

/******************************************************************************/

function abortOnPropertyRead(
    chain = ''
) {
    if ( typeof chain !== 'string' ) { return; }
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-on-property-read', chain);
    const exceptionToken = getExceptionToken();
    const abort = function() {
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    const makeProxy = function(owner, chain) {
        const pos = chain.indexOf('.');
        if ( pos === -1 ) {
            const desc = Object.getOwnPropertyDescriptor(owner, chain);
            if ( !desc || desc.get !== abort ) {
                Object.defineProperty(owner, chain, {
                    get: abort,
                    set: function(){}
                });
            }
            return;
        }
        const prop = chain.slice(0, pos);
        let v = owner[prop];
        chain = chain.slice(pos + 1);
        if ( v ) {
            makeProxy(v, chain);
            return;
        }
        const desc = Object.getOwnPropertyDescriptor(owner, prop);
        if ( desc && desc.set !== undefined ) { return; }
        Object.defineProperty(owner, prop, {
            get: function() { return v; },
            set: function(a) {
                v = a;
                if ( a instanceof Object ) {
                    makeProxy(a, chain);
                }
            }
        });
    };
    const owner = window;
    makeProxy(owner, chain);
}

function getExceptionToken() {
    const token = getRandomToken();
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
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

function getRandomToken() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
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
    try { abortOnPropertyRead(...argsList[i]); }
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
    return uBOL_abortOnPropertyRead();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_abortOnPropertyRead = cloneInto([
            [ '(', uBOL_abortOnPropertyRead.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_abortOnPropertyRead);
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
    delete page.uBOL_abortOnPropertyRead;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
