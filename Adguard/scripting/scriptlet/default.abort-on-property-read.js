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

const argsList = [["Notification"],["embedAddefend"],["adBlockDetected"],["navigator.userAgent"],["__eiPb"],["detector"],["adc"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_pop"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["InstallTrigger"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["mm"],["googletag"],["stop"],["open"],["ga.length"],["_wm"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["decodeURI"],["AaDetector"],["google_jobrunner"],["popjs.init"],["adblock"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["Adcash"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["document.createElement"],["pbjs.libLoaded"],["mz"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["exoNoExternalUI38djdkjDDJsio96"],["raConf"],["popTimes"],["smrtSB"],["smrtSP"],["Aloader"],["advobj"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["require"],["__Y"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["jwplayer.vast"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["importFAB"],["_0xbeb9"],["popAdsClickCount"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["odabd"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["decodeURIComponent"],["glxopen"],["CatapultTools"],["adbackDebug"],["$pxy822"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["TRM"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["I833"],["Popunder"],["gPartners"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["mdpDeBlocker"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["mdp_deblocker"],["adUnits"],["b2a"],["pbjsChunk"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["adthrive"],["show_ads_gr8_lite"],["disableButtonTimer"],["tie"],["document.write"],["adb_checker"],["ignore_adblock"],["$.prototype.offset"],["ea.add"],["adcashMacros"],["_cpp"],["pareAdblock"],["eazy_ad_unblocker"],["afScript"],["__brn_private_mode"],["recoverLinks"],["__aaZoneid"],["document.body.style.backgroundPosition"],["canRunAds"],["app_vars.please_disable_adblock"],["antiAdBlockerHandler"],["showada"],["checkAdsStatus"],["popUrl"],["adConfig"],["Promise.all"],["block_ads"],["arrvast"],["popurl"],["EV.Dab"],["Object.prototype.popupOpened"],["pum_popups"],["clickCount"],["popUp"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["Swal.fire"],["bypass_url"],["document.onmousedown"],["SMart1"],["window.open"],["checkAdsBlocked"],["Light.Popup"],["htmls"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["chp_adblock_browser"],["adsbyjuicy"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["__tnt"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adBlockEnabled"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["indexedDB.open"],["checkCookieClick"],["mnpw"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["rccbase_styles"],["adBlockerDetected"],["zfgformats"],["zfgstorage"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["PopURL"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["disableDeveloperTools"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["history.back"],["String.prototype.charCodeAt"],["Overlayer"],["puShown"],["remove_adblock_html"],["Request"],["fallbackAds"],["lck"],["advanced_ads_ready"],["_conf.pops"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["document.body.innerHTML"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["JuicyPop"],["afStorage"],["_run"],["detectAdblock"],["jQuery.popunder"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["adblockWarning"],["checkAdBlock"],["navigator.brave"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["onscroll"],["GeneratorAds"],["__cmpGdprAppliesGlobally"],["player.vroll"],["aab"],["config"],["runad"],["atob"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"],["Keen"],["MONETIZER101.init"],["JadIds"]];

const hostnamesMap = new Map([["tagesspiegel.de",0],["vivud.com",[0,15,28,61]],["gtaall.com",0],["worldsex.com",[0,51]],["jizzbunker.com",[0,136]],["dailymail.co.uk",0],["tech4yougadgets.com",0],["n-tv.de",1],["g9g.eu",2],["platinmods.com",2],["mitly.us",[2,21]],["fotbolltransfers.com",2],["yxzero.xyz",2],["freebitcoin.win",2],["coindice.win",2],["live-tv-channels.org",2],["faucethero.com",[2,28]],["faresgame.com",2],["fc.lc",[2,110]],["freebcc.org",[2,110]],["eio.io",[2,110]],["exee.io",[2,110]],["exe.app",[2,110]],["multifaucet.org",2],["majalahpendidikan.com",2],["jaiefra.com",2],["czxxx.org",2],["sh0rt.cc",2],["fussball.news",2],["orangespotlight.com",2],["ar-atech.blogspot.com",2],["clixwarez.blogspot.com",2],["theandroidpro.com",2],["zeeebatch.blogspot.com",2],["layarkaca21indo.com",2],["iptvspor.com",2],["plugincim.com",2],["fivemturk.com",2],["sosyalbilgiler.net",2],["mega-hentai2.blogspot.com",2],["gun-otaku.blogspot.com",2],["tech5s.co",2],["ez4mods.com",2],["kollhong.com",2],["getmega.net",2],["verteleseriesonline.com",2],["imintweb.com",2],["coinxfaucet.com",2],["eoreuni.com",2],["se-ed.com",2],["comousarzararadio.blogspot.com",2],["popsplit.us",2],["digitalstudiome.com",2],["nightfallnews.com",2],["mypussydischarge.com",[2,28]],["kontrolkalemi.com",2],["arabianbusiness.com",2],["eskiceviri.blogspot.com",2],["dj-figo.com",2],["blasianluvforever.com",2],["wgzimmer.ch",2],["familyrenders.com",2],["daburosubs.com",2],["androidgreek.com",2],["iade.com",2],["smallpocketlibrary.com",2],["hidefninja.com",2],["orangeptc.com",2],["share1223.com",2],["7misr4day.com",2],["aquiyahorajuegos.net",2],["worldofbin.com",2],["googledrivelinks.com",2],["98zero.com",2],["tpaste.io",2],["aranzulla.it",3],["anallievent.com",4],["au-di-tions.com",4],["badgehungry.com",4],["beingmelody.com",4],["bloggingawaydebt.com",4],["casutalaurei.ro",4],["cornerstoneconfessions.com",4],["culture-informatique.net",4],["dearcreatives.com",4],["disneyfashionista.com",4],["divinelifestyle.com",4],["dna.fr",4],["eslauthority.com",4],["estrepublicain.fr",4],["fitting-it-all-in.com",4],["heresyoursavings.com",4],["irresistiblepets.net",4],["julieseatsandtreats.com",4],["justjared.com",4],["lecturisiarome.ro",4],["lemonsqueezyhome.com",4],["libramemoria.com",4],["lovegrowswild.com",4],["magicseaweed.com",4],["measuringflower.com",4],["mjsbigblog.com",4],["mommybunch.com",4],["mustardseedmoney.com",4],["myfunkytravel.com",4],["onetimethrough.com",4],["panlasangpinoymeatrecipes.com",4],["silverpetticoatreview.com",4],["the-military-guide.com",4],["therelaxedhomeschool.com",4],["the2seasons.com",4],["zeroto60times.com",4],["apple-of-my-eye.com",4],["barefeetonthedashboard.com",4],["bargainbriana.com",4],["betterbuttchallenge.com",4],["bike-urious.com",4],["blwideas.com",4],["eartheclipse.com",4],["entertainment-focus.com",4],["fanatik.com.tr",4],["foreverconscious.com",4],["foreversparkly.com",4],["getdatgadget.com",4],["goodnewsnetwork.org",4],["greenarrowtv.com",4],["hbculifestyle.com",4],["heysigmund.com",4],["hodgepodgehippie.com",4],["homestratosphere.com",4],["indesignskills.com",4],["katiescucina.com",4],["knowyourphrase.com",4],["letsworkremotely.com",4],["lizs-early-learning-spot.com",4],["ledauphine.com",4],["leprogres.fr",4],["milliyet.com.tr",4],["pinoyrecipe.net",4],["prepared-housewives.com",4],["recipesforourdailybread.com",4],["redcarpet-fashionawards.com",4],["republicain-lorrain.fr",4],["savespendsplurge.com",4],["savingadvice.com",4],["shutupandgo.travel",4],["spring.org.uk",4],["stevivor.com",4],["tamaratattles.com",4],["tastefullyeclectic.com",4],["theavtimes.com",4],["thechroniclesofhome.com",4],["thisisourbliss.com",4],["tinyqualityhomes.org",4],["turtleboysports.com",4],["ultimateninjablazingx.com",4],["universfreebox.com",4],["utahsweetsavings.com",4],["vgamerz.com",4],["wheatbellyblog.com",4],["yummytummyaarthi.com",4],["ranker.com",[4,19]],["fluentu.com",4],["cdiscount.com",4],["damndelicious.net",4],["simplywhisked.com",4],["timesofindia.com",5],["freethesaurus.com",6],["thefreedictionary.com",6],["bild.de",7],["sueddeutsche.de",8],["20min.ch",8],["al.com",8],["alphr.com",8],["autoexpress.co.uk",8],["bikeradar.com",8],["blick.ch",8],["chefkoch.de",8],["cyclingnews.com",[8,367]],["digitalspy.com",8],["democratandchronicle.com",8],["denofgeek.com",8],["esgentside.com",8],["evo.co.uk",8],["exclusivomen.com",8],["ft.com",8],["gala.de",8],["gala.fr",8],["heatworld.com",8],["itpro.co.uk",8],["livingathome.de",8],["masslive.com",8],["maxisciences.com",8],["metabomb.net",8],["mlive.com",8],["motherandbaby.co.uk",8],["motorcyclenews.com",8],["muthead.com",8],["neonmag.fr",8],["newyorkupstate.com",8],["ngin-mobility.com",8],["nj.com",8],["nola.com",8],["ohmirevista.com",8],["oregonlive.com",8],["pennlive.com",8],["programme.tv",8],["programme-tv.net",8],["radiotimes.com",8],["silive.com",8],["simplyvoyage.com",8],["stern.de",8],["syracuse.com",8],["theweek.co.uk",8],["ydr.com",8],["usatoday.com",8],["schoener-wohnen.de",8],["thewestmorlandgazette.co.uk",8],["news-leader.com",8],["closeronline.co.uk",8],["etonline.com",8],["bilan.ch",8],["doodle.com",8],["techradar.com",8],["daily-times.com",8],["wirralglobe.co.uk",8],["annabelle.ch",8],["pcgamer.com",8],["nintendolife.com",8],["gamer.com.tw",9],["skidrowcodexgames.com",10],["22pixx.xyz",[10,65,79]],["durtypass.com",10],["anime-odcinki.pl",10],["gaypornwave.com",[10,40]],["pngit.live",[10,21,29,77]],["gratispaste.com",[10,79]],["animotvslashz.blogspot.com",10],["eltern.de",11],["essen-und-trinken.de",11],["focus.de",11],["eurogamer.de",11],["eurogamer.es",11],["eurogamer.it",11],["eurogamer.net",11],["eurogamer.pt",11],["rockpapershotgun.com",11],["vg247.com",11],["urbia.de",11],["elpasotimes.com",11],["femina.ch",11],["northwalespioneer.co.uk",11],["codeproject.com",12],["cwseed.com",13],["pocketnow.com",14],["7r6.com",[15,25,110]],["reddflix.com",[15,21]],["bostoncommons.net",15],["opisanie-kartin.com",15],["painting-planet.com",15],["kropic.com",[15,28]],["mp4mania1.net",15],["livegore.com",15],["down-paradise.com",[15,81]],["kioven.com",15],["ladsnbastands.com",15],["pngio.com",15],["etcscrs.to",15],["iobit.com",15],["videowood.tv",[15,23,296]],["streampourvous.com",15],["rule34.xxx",16],["realbooru.com",17],["alrincon.com",[17,21,41]],["realgfporn.com",[17,40]],["pornhd.com",[17,60]],["pornhdin.com",[17,21]],["pornomovies.com",[17,28]],["bdsmstreak.com",17],["freepornvideo.sex",17],["teenpornvideo.xxx",17],["yourlust.com",17],["imx.to",17],["mypornstarbook.net",17],["japanesefuck.com",17],["plusone8.com",17],["imgtorrnt.in",[17,51]],["pandamovies.pw",[17,51]],["club-flank.com",17],["streamporn.pw",17],["watchfreexxx.net",[17,40,155,156,157]],["dump.xxx",[17,21]],["fuqer.com",[17,21]],["tmohentai.com",17],["xopenload.me",17],["losporn.org",17],["bravoerotica.com",17],["xasiat.com",[17,76]],["redporno.cz",17],["vintageporntubes.com",17],["xxxvideos247.com",17],["young-pussy.com",17],["kingsofteens.com",17],["24pornvideos.com",17],["2japaneseporn.com",17],["xxxvideor.com",17],["youngleak.com",17],["zhlednito.cz",17],["8teenxxx.com",17],["activevoyeur.com",17],["allschoolboysecrets.com",17],["boobsforfun.com",17],["breedingmoms.com",17],["cockmeter.com",[17,51]],["collegeteentube.com",17],["cumshotlist.com",17],["porn0.tv",17],["ritzysex.com",17],["ritzyporn.com",17],["sexato.com",17],["javbobo.com",[17,66]],["sokobj.com",17],["youlikeboys.com",[17,79]],["needgayporn.com",17],["zetporn.com",17],["keephealth.info",18],["123moviesjr.cc",18],["123moviesd.com",18],["123moviess.se",18],["cloudvideo.tv",18],["googlvideo.com",18],["diasfem.com",[18,81]],["embedsito.com",[18,26,81]],["javcl.me",[18,26,81]],["mavlecteur.com",[18,81]],["playfinder.xyz",[18,26,81,113]],["easyexploits.com",18],["azm.to",18],["anigogo.net",[18,81]],["arslanrocky.xyz",[18,81]],["cloudemb.com",[18,81]],["dlmovies.link",[18,81]],["embedsb.com",[18,81]],["gomovizplay.com",[18,81]],["hlsplayer.xyz",[18,81]],["kinoking.cc",18],["lvturbo.com",18],["oxl.one",[18,81]],["playersb.com",[18,81]],["sbanh.com",[18,81]],["sbasian.pro",18],["sbbrisk.com",[18,81]],["sbchill.com",[18,81]],["sbcloud1.com",[18,81]],["sbembed.com",[18,81]],["sbembed1.com",[18,25,81]],["sbembed2.com",[18,81]],["sbembed3.com",[18,81]],["sbembed4.com",[18,81]],["sbface.com",18],["sbfast.com",[18,81]],["sbfull.com",[18,81,303]],["sbhight.com",[18,81]],["sblanh.com",[18,81]],["sblona.com",18],["sblongvu.com",[18,81]],["sbnet.one",18],["sbplay1.com",[18,81]],["sbrity.com",[18,81]],["sbspeed.com",[18,81]],["sbthe.com",[18,81]],["sbvideo.net",18],["ssbstream.net",[18,81]],["streamsss.net",[18,81]],["subsb.net",[18,81]],["tubesb.com",[18,81]],["vidmovie.xyz",[18,81]],["view345.com",[18,81,303]],["viewsb.com",[18,81]],["watchsb.com",[18,81]],["watchdoctorwhoonline.com",18],["toxicwap.us",18],["yodbox.com",18],["coverapi.store",18],["masahub.net",[18,28]],["lalastreams.me",18],["hblinks.pro",18],["afdah2.com",18],["javuncen.xyz",[18,81]],["kissasia.cc",18],["watchsexandthecity.com",18],["watchpsychonline.net",18],["watchsmallvilleonline.net",18],["ymovies.vip",18],["cl1ca.com",18],["4br.me",18],["fir3.net",18],["thewindowsclub.com",19],["girlsgogames.co.uk",19],["godtube.com",19],["ringsidenews.com",19],["advocate.com",19],["alternet.org",19],["androidcure.com",19],["arobasenet.com",19],["attackofthefanboy.com",19],["bodytr.com",19],["clutchpoints.com",19],["cultofmac.com",19],["currentaffairs.gktoday.in",19],["dailycaller.com",19],["digitalmusicnews.com",19],["dogtime.com",19],["dotesports.com",19],["epicstream.com",19],["fallbrook247.com",19],["feral-heart.com",19],["gamesgames.com",19],["gamerevolution.com",19],["gazettenet.com",19],["insidenova.com",19],["jetztspielen.de",19],["kasvekuvvet.net",19],["leitesculinaria.com",19],["nbcnews.com",19],["notevibes.com",19],["practicalpainmanagement.com",19],["prad.de",19],["progameguides.com",19],["pwinsider.com",19],["realityblurb.com",[19,256]],["ruinmyweek.com",19],["sanangelolive.com",19],["sanfoundry.com",19],["selfhacked.com",19],["siliconera.com",19],["simpleflying.com",19],["son.co.za",19],["sporcle.com",19],["stealthoptional.com",19],["thesportster.com",19],["upi.com",19],["viraliq.com",19],["visualcapitalist.com",19],["wegotthiscovered.com",19],["primagames.com",19],["grubstreet.com",20],["twitchy.com",20],["rule34hentai.net",21],["clik.pw",21],["pornj.com",21],["pornl.com",21],["ah-me.com",21],["1337x.unblock2.xyz",[21,24,56]],["linkrex.net",21],["oke.io",21],["watchmygf.me",21],["pornoreino.com",[21,40]],["shrt10.com",21],["ashemaletube.com",21],["turbobit.net",21],["bestialitysexanimals.com",21],["bestialporn.com",21],["mujeresdesnudas.club",21],["mynakedwife.video",21],["videoszoofiliahd.com",21],["efukt.com",21],["tranny.one",[21,66]],["porndoe.com",[21,40]],["topvideosgay.com",21],["goto.com.np",21],["femdomtb.com",21],["pornvideotop.com",21],["deinesexfilme.com",21],["einfachtitten.com",21],["halloporno.com",21],["herzporno.com",21],["lesbenhd.com",21],["milffabrik.com",21],["porn-monkey.com",21],["porndrake.com",21],["pornhubdeutsch.net",21],["pornoaffe.com",21],["pornodavid.com",21],["pornoente.tv",21],["pornofisch.com",21],["pornofelix.com",21],["pornohammer.com",21],["pornohelm.com",21],["pornoklinge.com",21],["pornotom.com",21],["pornotommy.com",21],["pornovideos-hd.com",21],["pornozebra.com",21],["xhamsterdeutsch.xyz",21],["xnxx-sexfilme.com",21],["tryboobs.com",[21,66]],["hitomi.la",21],["fapality.com",[21,51]],["babesxworld.com",[21,41,51]],["icutlink.com",21],["oncehelp.com",21],["picbaron.com",[21,41]],["mega-p2p.net",21],["shrinkearn.com",21],["twister.porn",21],["bitlk.com",21],["gamovideo.com",21],["urlty.com",21],["peekvids.com",21],["playvids.com",21],["pornflip.com",21],["pornoeggs.com",21],["oko.sh",[21,29]],["turbogvideos.com",21],["xxx-image.com",[21,35,136,181]],["coinlyhub.com",[21,110]],["vidbom.com",21],["zimabdko.com",21],["fullxxxmovies.net",21],["elitegoltv.org",21],["extremotvplay.com",21],["tarjetarojatv.org",21],["pirlotvonline.org",21],["rojadirectaonlinetv.com",21],["semawur.com",21],["adshrink.it",21],["shrink-service.it",[21,364]],["eplsite.uk",[21,29]],["upstream.to",21],["dramakrsubindo.blogspot.com",21],["ex-foary.com",[21,110]],["oceanof-games.com",21],["watchmonkonline.com",21],["iir.ai",[21,110]],["comicxxx.eu",21],["mybestxtube.com",[21,51]],["pornobengala.com",21],["pornicom.com",[21,51]],["xecce.com",21],["teensporn.tv",[21,51]],["pornlift.com",21],["superbgays.com",21],["bt4g.unblocked.to",21],["porncomics.me",21],["orsm.net",21],["moviehaxx.pro",21],["enagato.com",21],["cloutgist.com",21],["youshort.me",21],["kvador.com",[21,41]],["uploadroot.com",21],["deepfakeporn.net",21],["pkr.pw",[21,110]],["loader.to",21],["namaidani.com",[21,110]],["anime47.com",21],["cutearn.net",[21,110]],["filezipa.com",[21,110]],["theblissempire.com",[21,110]],["bestgamehack.top",21],["hackofgame.com",21],["shorturl.unityassets4free.com",[21,110]],["vevioz.com",[21,110]],["charexempire.com",[21,230]],["vidstreamz.online",21],["crunchyscan.fr",21],["unblocksite.pw",[21,136]],["y2mate.com",21],["androidapks.biz",21],["androidsite.net",21],["animeonlinefree.org",21],["animesite.net",21],["computercrack.com",21],["crackedsoftware.biz",21],["crackfree.org",21],["cracksite.info",21],["downloadapk.info",21],["downloadapps.info",21],["downloadgames.info",21],["downloadmusic.info",21],["downloadsite.org",21],["ebooksite.org",21],["emulatorsite.com",21],["fmovies24.com",21],["freeflix.info",21],["freemoviesu4.com",21],["freesoccer.net",21],["fseries.org",21],["gamefast.org",21],["gamesite.info",21],["gostreamon.net",21],["hindisite.net",21],["isosite.org",21],["macsite.info",21],["mangasite.org",21],["megamovies.org",21],["moviefree2.com",21],["moviesite.app",21],["moviesx.org",21],["musicsite.biz",21],["patchsite.net",21],["pdfsite.net",21],["play1002.com",21],["productkeysite.com",21],["romsite.org",21],["seriesite.net",21],["siteapk.net",21],["siteflix.org",21],["sitegames.net",21],["sitekeys.net",21],["sitepdf.com",21],["sitetorrent.com",21],["softwaresite.net",21],["superapk.org",21],["supermovies.org",21],["tvonlinesports.com",21],["ultramovies.org",21],["warezsite.net",21],["watchmovies2.com",21],["watchmoviesforfree.org",21],["watchsite.net",21],["youapk.net",21],["gload.to",21],["bloggingguidance.com",21],["jockantv.com",21],["receive-sms-online.info",22],["theproxyproxy.com",23],["candid.tube",23],["hotbabes.tv",[23,41]],["purelyceleb.com",23],["piraproxy.app",23],["nosteamgames.ro",23],["pornult.com",[24,76]],["fullhdxxx.com",[24,40]],["koenime.top",24],["lendrive.web.id",24],["nimegami.id",24],["short.pe",[25,29]],["mylust.com",[25,51]],["anysex.com",[25,28,40,51,120]],["luscious.net",25],["cloudgallery.net",[25,29]],["alotporn.com",[25,51]],["imgair.net",25],["imgblaze.net",25],["imgfrost.net",25],["vestimage.site",25],["imgwia.buzz",25],["imgbaex.store",25],["imgbah.online",25],["imgbaie.online",25],["imgbango.store",25],["imgbier.store",25],["imgbimn.store",25],["imgbqw.store",25],["imgbuba.online",25],["imgbwe.store",25],["imgbxs.online",25],["imgcao.store",25],["imgnwe.online",25],["imgqge.store",25],["imgqxb.online",25],["imgteq.online",25],["imgtex.online",25],["imgtuta.online",25],["imgwqr.online",25],["imgwww.store",25],["imgxza.store",25],["imgezx.sbs",25],["imgbcxsb.store",25],["imgbcxs.store",25],["imgbake.cfd",25],["imgmffg.sbs",25],["imgmffgtr.sbs",25],["imgnbg.sbs",25],["imgngc.sbs",25],["imgnmh.cfd",25],["imgqte.sbs",25],["imguthes.sbs",25],["imgwag.cfd",25],["imgwang.cfd",25],["imgwety.sbs",25],["imgxuh.cfd",25],["imgxytw.cfd",25],["imgycgey.sbs",25],["imgyruy.cfd",25],["imgyusa.cfd",25],["imgyyqey.sbs",25],["imgyer.store",25],["imgxhs.store",25],["imgwekr.online",25],["imgwbfh.online",25],["imgwak.online",25],["imgutry.online",25],["imgutiyu.online",25],["imgutbbn.online",25],["imgubfd.online",25],["imgrei.online",25],["imgqec.online",25],["imgpaiou.online",25],["imgpaiki.online",25],["imgmjj.store",25],["imgfa.store",25],["imgbutrt.store",25],["imgbty.store",25],["imgbdl.store",25],["imgngh.sbs",25],["imgbbfg.pics",25],["imgjhrjjr.pics",25],["imgleko.pics",25],["imgluki.pics",25],["imgnffe.pics",25],["imgnnnf.pics",25],["imgrwqz.pics",25],["imgtweqz.pics",25],["imgxzgf.pics",25],["imgyyeryt.pics",25],["picbbc.one",25],["picbbdr.one",25],["picbest.one",25],["picbhrt.one",25],["picnrrt.one",25],["picqqw.one",25],["picqr.one",25],["picqtwe.one",25],["picsjre.one",25],["piczzaq.one",25],["imgqazx.sbs",25],["imgiruyw.online",25],["picnerr.cfd",25],["pichfer.cfd",25],["picbbeq.cfd",25],["picqaxs.cfd",25],["picxxdd.cfd",25],["picqweff.cfd",25],["pickjsn.cfd",25],["piczzxsw.cfd",25],["picbbbde.cfd",25],["picbdd.cfd",25],["imgbahxg.sbs",25],["imgxune.sbs",25],["imgqklw.shop",25],["pixqkhgrt.shop",25],["pixqbngg.shop",25],["pixqwet.shop",25],["pixmos.shop",25],["imgtgd.shop",25],["imgcsxx.shop",25],["imgcssd.shop",25],["imguwjsd.sbs",25],["pictbbf.shop",25],["pixbryexa.sbs",25],["picbqqa.sbs",25],["pixbkghxa.sbs",25],["imgmgf.sbs",25],["picbcxvxa.sbs",25],["imguee.sbs",25],["imgmffmv.sbs",25],["imgbqb.sbs",25],["imgbyrev.sbs",25],["imgbncvnv.sbs",25],["pixtryab.shop",25],["imggune.shop",25],["pictryhab.shop",25],["pixbnab.shop",25],["imgbnwe.shop",25],["imgbbnhi.shop",25],["imgnbii.shop",25],["imghqqbg.shop",25],["imgyhq.shop",25],["pixnbrqwg.sbs",25],["pixnbrqw.sbs",25],["picmsh.sbs",25],["imgpke.sbs",25],["picuenr.sbs",25],["imgolemn.sbs",25],["imgoebn.sbs",25],["picnwqez.sbs",25],["imgjajhe.sbs",25],["pixjnwe.sbs",25],["pixkfjtrkf.shop",25],["pixkfkf.shop",25],["pixdfdjkkr.shop",25],["pixdfdj.shop",25],["picnft.shop",25],["pixrqqz.shop",25],["picngt.shop",25],["picjgfjet.shop",25],["picjbet.shop",25],["imgkkabm.shop",25],["imgxabm.shop",25],["imgthbm.shop",25],["imgmyqbm.shop",25],["imgwwqbm.shop",25],["imgjvmbbm.shop",25],["imgjbxzjv.shop",25],["imgjmgfgm.shop",25],["picxnkjkhdf.sbs",25],["imgxxbdf.sbs",25],["imgnngr.sbs",25],["imgjjtr.sbs",25],["imgqbbds.sbs",25],["imgbvdf.sbs",25],["imgqnnnebrf.sbs",25],["imgnnnvbrf.sbs",25],["pornfd.com",25],["xsanime.com",25],["camclips.tv",25],["ninjashare.to",25],["fembed.com",[26,28,113]],["films5k.com",[26,81]],["javideo.pw",[26,81]],["ujav.me",[26,81]],["shameless.com",[26,65,66]],["javstream.top",[26,81]],["informer.com",27],["igfap.com",28],["sheshaft.com",28],["gotgayporn.com",28],["fetishshrine.com",28],["sleazyneasy.com",28],["vikiporn.com",28],["pornomico.com",[28,73]],["watchhouseonline.net",28],["pornoman.pl",[28,127]],["camseek.tv",28],["xxmovz.com",28],["lewdzone.com",28],["nonktube.com",28],["pussyspot.net",28],["wildpictures.net",28],["nudogram.com",28],["18girlssex.com",28],["modagamers.com",28],["batporno.com",28],["lebahmovie.com",28],["duit.cc",28],["classicpornbest.com",[28,137]],["desihoes.com",[28,51]],["indianpornvideo.org",28],["porn18sex.com",28],["slaughtergays.com",28],["sexiestpicture.com",28],["line25.com",28],["javtiful.com",28],["homemoviestube.com",28],["manytoon.com",28],["thatav.net",28],["hentaifreak.org",28],["xxgasm.com",28],["kfapfakes.com",28],["xsober.com",28],["sexsaoy.com",28],["ashemaletv.com",28],["beurettekeh.com",28],["celibook.com",28],["gourmandix.com",28],["sexetag.com",28],["hd44.net",28],["dirtyfox.net",28],["babestube.com",28],["momvids.com",28],["porndr.com",28],["deviants.com",28],["freehardcore.com",28],["lesbian8.com",[28,295]],["eztv-torrent.net",28],["spicyandventures.com",28],["watchmdh.to",28],["sarapbabe.com",28],["rule34porn.net",28],["fullxxxporn.net",28],["hdvideosporn.com",28],["qqxnxx.com",28],["xnxx-downloader.net",28],["comicspornow.com",28],["mult34.com",28],["viet69.org",28],["xxxvideotube.net",28],["javqis.com",28],["onlyhotleaks.com",28],["35volitantplimsoles5.com",28],["amateurblog.tv",28],["fashionblog.tv",28],["latinblog.tv",28],["silverblog.tv",28],["tokyoblog.tv",28],["xblog.tv",28],["peladas69.com",28],["liveru.sx",28],["protege-torrent.com",28],["freehdinterracialporn.in",28],["titsintops.com",28],["pervclips.com",28],["met.bz",29],["hindimean.com",29],["senmanga.com",29],["ebookdz.com",29],["cda-hd.cc",29],["javstream.com",29],["kurazone.net",29],["turkdown.com",29],["urlgalleries.net",29],["movie4u.live",29],["solarmovie.id",29],["01fmovies.com",29],["babesaround.com",29],["dirtyyoungbitches.com",29],["grabpussy.com",29],["join2babes.com",29],["nightdreambabe.com",29],["novoglam.com",29],["novohot.com",29],["novojoy.com",29],["novoporn.com",29],["novostrong.com",29],["pbabes.com",29],["pussystate.com",29],["redpornblog.com",29],["rossoporn.com",29],["sexynakeds.com",29],["thousandbabes.com",29],["gulf-up.com",29],["vidia.tv",29],["cutpaid.com",[29,110]],["javporn.best",[29,113]],["mixloads.com",29],["ancensored.com",29],["savevideo.tube",29],["files.cx",29],["drivefire.co",29],["porngo.com",29],["arenabg.com",29],["vidload.net",29],["animealtadefinizione.it",29],["lkc21.net",29],["mavanimes.co",29],["onnime.net",29],["noxx.to",29],["supertelevisionhd.com",29],["whitemouseapple.com",29],["autoembed.cc",29],["whisperingauroras.com",29],["loadsamusicsarchives.blogspot.com",29],["xxxfiles.com",29],["deseneledublate.com",29],["hentaicloud.com",[29,273]],["descarga.xyz",29],["familyporn.tv",29],["pornxp.com",[29,66]],["pornxp.org",29],["rawmanga.top",29],["eplayer.click",29],["javside.com",[29,81]],["aniwave.to",29],["gayteam.club",29],["mangaraw.org",29],["mplayer.sbs",29],["flixtormovies.co",29],["watchthat70show.net",29],["cs-fundamentals.com",30],["b2bhint.com",[30,302]],["baikin.net",30],["unsurcoenlasombra.com",30],["pelisplus.online",31],["kisshentai.net",32],["insidemarketing.it",32],["worldaide.fr",32],["asmwall.com",32],["bibme.org",33],["citationmachine.net",[33,34]],["citethisforme.com",34],["easybib.com",34],["1plus1plus1equals1.net",35],["cooksinfo.com",35],["heatherdisarro.com",35],["thesassyslowcooker.com",35],["mp4upload.com",36],["megacanais.com",36],["sanet.lc",36],["antenasport.online",36],["dudestream.com",36],["embedstreams.me",36],["ilovetoplay.xyz",36],["joyousplay.xyz",36],["sportsurge.net",36],["techcabal.net",36],["volokit2.com",36],["ythd.org",36],["kaas.ro",[36,165]],["livesport24.net",36],["sarugbymag.co.za",39],["ikaza.net",39],["imgadult.com",[40,41]],["imgdrive.net",[40,41]],["imgtaxi.com",[40,41]],["imgwallet.com",[40,41]],["hdpornt.com",40],["4tube.com",40],["pornerbros.com",[40,51]],["pichaloca.com",40],["pornodoido.com",40],["pornwatchers.com",[40,51]],["gotporn.com",40],["picturelol.com",40],["imgspice.com",40],["orgyxxxhub.com",[40,71,72]],["befap.com",40],["alphaporno.com",40],["tubedupe.com",40],["sexykittenporn.com",[40,41]],["letmejerk.com",40],["letmejerk2.com",40],["letmejerk3.com",40],["letmejerk4.com",40],["letmejerk5.com",40],["letmejerk6.com",40],["letmejerk7.com",40],["hdtube.porn",40],["madchensex.com",40],["canalporno.com",40],["dreamamateurs.com",40],["eroxia.com",40],["pornozot.com",40],["camgirlbang.com",40],["casting-porno-tube.com",40],["teensexvideos.me",40],["goshow.tv",40],["hentaigo.com",[41,78]],["lolhentai.net",41],["porntopic.com",41],["cocogals.com",[41,51]],["camwhoreshd.com",41],["consoletarget.com",41],["pussytorrents.org",41],["ftopx.com",[41,65,76]],["8boobs.com",[41,65,66]],["babesinporn.com",[41,51,65,66]],["boobgirlz.com",41],["fooxybabes.com",41],["hotstunners.com",[41,65,66]],["jennylist.xyz",41],["jumboporn.xyz",41],["mainbabes.com",[41,65]],["mysexybabes.com",[41,65]],["nakedbabes.club",[41,65]],["pleasuregirl.net",[41,65,66]],["rabbitsfun.com",[41,65,66]],["sexybabesz.com",[41,65]],["vibraporn.com",41],["zazzybabes.com",41],["zehnporn.com",41],["naughtymachinima.com",41],["imgbaron.com",41],["decorativemodels.com",41],["erowall.com",[41,51]],["freyalist.com",41],["guruofporn.com",41],["jesseporn.xyz",41],["kendralist.com",41],["vipergirls.to",41],["lizardporn.com",41],["wantedbabes.com",[41,51]],["bustybloom.com",[41,66]],["exgirlfriendmarket.com",41],["nakedneighbour.com",41],["asianlbfm.net",41],["schoolgirls-asia.org",41],["pics4you.net",41],["moozpussy.com",41],["zoompussy.com",41],["2adultflashgames.com",41],["123strippoker.com",41],["babepedia.com",41],["boobieblog.com",41],["borwap.xxx",41],["chicpussy.net",41],["gamesofdesire.com",41],["hd-xxx.me",41],["hentaipins.com",[41,290]],["longporn.xyz",41],["picmoney.org",41],["pornhd720p.com",41],["sikwap.xyz",41],["super-games.cz",41],["xxx-videos.org",41],["xxxputas.net",41],["silverpic.com",41],["mysexgames.com",41],["sexgames.xxx",41],["picdollar.com",41],["pornstargold.com",41],["eroticity.net",41],["striptube.net",41],["xcity.org",41],["porncoven.com",41],["imgstar.eu",41],["pics4upload.com",41],["ahegaoporn.net",41],["myporntape.com",41],["luxuretv.com",42],["x-x-x.tube",42],["javboys.com",42],["javball.com",42],["adictox.com",42],["otomi-games.com",42],["redhdtube.xxx",42],["faptube.xyz",42],["rat.xxx",42],["hispasexy.org",[42,221]],["javplay.me",42],["watchimpracticaljokers.com",42],["zerion.cc",42],["javcock.com",42],["leviathanmanga.com",42],["gayfor.us",42],["juegosgratisonline.com.ar",42],["levelupalone.com",42],["pelisplayer.xyz",43],["ncdn22.xyz",43],["netu.ac",43],["realyplayonli.xyz",[43,119]],["alocdn.co",[43,119]],["vidscdns.com",43],["doplay.store",43],["filme720.com",43],["onscreens.me",[43,119,332]],["video.q34r.org",[43,119]],["filmoviplex.com",[43,119]],["movie4night.com",[43,119]],["richhioon.eu",[43,119]],["srt.am",44],["ticonsiglio.com",45],["photos-public-domain.com",47],["civilenggforall.com",47],["hdporn.net",[48,49]],["older-mature.net",49],["telorku.xyz",49],["watch-my-gf.com",50],["watchmyexgf.net",50],["cartoonporno.xxx",50],["mangoporn.net",51],["area51.porn",51],["sexytrunk.com",51],["teensark.com",51],["tubous.com",[51,88]],["toyoheadquarters.com",51],["spycock.com",51],["barfuck.com",51],["multporn.net",51],["besthugecocks.com",51],["daftporn.com",51],["italianoxxx.com",51],["collegehdsex.com",51],["lustylist.com",51],["yumstories.com",51],["18-teen-porn.com",51],["69teentube.com",51],["girlshd.xxx",51],["home-xxx-videos.com",51],["orgasmlist.com",51],["teensextube.xxx",51],["pornyfap.com",51],["nudistube.com",51],["uporno.xxx",51],["ultrateenporn.com",51],["gosexpod.com",51],["al4a.com",51],["grannysex.name",51],["porntb.com",51],["scopateitaliane.it",51],["sexbox.online",51],["teenpornvideo.sex",51],["twatis.com",[51,65]],["flashingjungle.com",51],["fetishburg.com",51],["privateindianmovies.com",51],["soyoungteens.com",51],["gottanut.com",51],["uiporn.com",51],["xcafe.com",51],["gfsvideos.com",51],["home-made-videos.com",51],["tbib.org",51],["sensualgirls.org",51],["ariestube.com",51],["asian-teen-sex.com",51],["18asiantube.com",51],["wholevideos.com",51],["asianporntube69.com",51],["babeswp.com",51],["bangyourwife.com",51],["bdsmslavemovie.com",51],["bdsmwaytube.com",51],["bestmaturewomen.com",51],["classicpornvids.com",51],["pornpaw.com",51],["dawntube.com",51],["desimmshd.com",51],["dirtytubemix.com",51],["plumperstube.com",51],["enormousbabes.net",51],["exclusiveindianporn.com",51],["figtube.com",51],["amateur-twink.com",51],["freeboytwinks.com",51],["freegrannyvids.com",51],["freexmovs.com",51],["freshbbw.com",51],["frostytube.com",51],["fuckhottwink.com",51],["fuckslutsonline.com",51],["gameofporn.com",51],["gayboyshd.com",51],["getitinside.com",[51,108]],["giantshemalecocks.com",51],["erofus.com",51],["hd-tube-porn.com",51],["hardcorehd.xxx",51],["hairytwat.org",51],["iwantmature.com",51],["justababes.com",51],["juicyflaps.com",51],["jenpornuj.cz",51],["javteentube.com",51],["hard-tube-porn.com",51],["klaustube.com",51],["kaboomtube.com",51],["lustyspot.com",51],["lushdiaries.com",51],["lovelynudez.com",[51,133]],["dailyangels.com",51],["ljcam.net",51],["myfreemoms.com",51],["nakenprat.com",51],["oosex.net",[51,66]],["oldgrannylovers.com",51],["ohueli.net",51],["pornuploaded.net",51],["pornstarsadvice.com",51],["bobs-tube.com",51],["pornohaha.com",51],["pornmam.com",51],["pornhegemon.com",51],["pornabcd.com",51],["porn-hd-tube.com",51],["thehentaiworld.com",51],["pantyhosepink.com",51],["queenofmature.com",51],["realvoyeursex.com",51],["realbbwsex.com",51],["rawindianporn.com",51],["onlygoldmovies.com",51],["rainytube.com",51],["stileproject.com",51],["slutdump.com",51],["nastybulb.com",51],["sextube-6.com",51],["porntubegf.com",51],["sassytube.com",51],["smplace.com",51],["maturell.com",51],["nudemilfwomen.com",51],["pornoplum.com",51],["widewifes.com",51],["wowpornlist.xyz",51],["vulgarmilf.com",51],["oldgirlsporn.com",51],["freepornrocks.com",51],["erogen.su",51],["get-to.link",[51,76]],["beegsexxx.com",51],["watchpornx.com",[51,157]],["ytboob.com",51],["saradahentai.com",51],["hentaiarena.com",51],["absolugirl.com",51],["absolutube.com",51],["allafricangirls.net",51],["asianpornphoto.net",51],["freexxxvideos.pro",51],["videosxxxporno.gratis",51],["nude-teen-18.com",51],["xemales.com",51],["szexkepek.net",51],["wife-home-videos.com",51],["sexmadeathome.com",51],["nylondolls.com",51],["milforia.com",51],["onlylesbiantube.com",51],["teensfuck.me",51],["imgprime.com",52],["ondemandkorea.com",53],["bdsmx.tube",54],["mrgay.com",54],["pornxs.com",55],["ifenpaidy.com",56],["dailygeekshow.com",57],["rue89lyon.fr",58],["onlinemschool.com",59],["bigtitsxxxsex.com",61],["zmovs.com",61],["ceesty.com",62],["corneey.com",62],["destyy.com",62],["festyy.com",62],["gestyy.com",62],["lavozdigital.es",62],["tnaflix.com",63],["sunporno.com",[65,66]],["angelgals.com",65],["babesexy.com",65],["hotbabeswanted.com",65],["nakedgirlsroom.com",65],["nudebabes.sexy",[65,66]],["sexybabes.club",65],["sexybabesart.com",65],["favefreeporn.com",65],["onlygayvideo.com",65],["peachytube.com",65],["stepsisterfuck.me",65],["adultdvdparadise.com",66],["freeomovie.info",66],["fullxxxmovies.me",66],["mangoparody.com",66],["mangoporn.co",66],["netflixporno.net",66],["pandamovies.me",66],["playpornfree.xyz",66],["pornkino.cc",66],["pornwatch.ws",66],["watchfreexxx.pw",66],["watchxxxfree.pw",66],["xopenload.pw",66],["xtapes.me",66],["xxxmoviestream.xyz",66],["xxxparodyhd.net",66],["xxxscenes.net",66],["xxxstream.me",66],["youwatchporn.com",66],["nudismteens.com",66],["youx.xxx",66],["asiansex.life",66],["hypnohub.net",66],["oldies.name",66],["xnxxporn.video",66],["xxxdessert.com",66],["xxxshake.com",66],["manhwa18.cc",66],["best18porn.com",66],["bigtitslust.com",[66,295]],["manga18fx.com",66],["sexywomeninlingerie.com",66],["theteensexy.com",66],["xteensex.net",66],["stiflersmoms.com",66],["gifhq.com",66],["amateur-couples.com",66],["teen-hd-sex.com",66],["tube-teen-18.com",66],["xxx-asian-tube.com",66],["pornhost.com",67],["locopelis.com",[68,69,70]],["repelis.net",68],["perfectmomsporn.com",71],["donkparty.com",74],["streamdreams.org",76],["bdsmporn.cc",76],["cocoporn.net",76],["dirtyporn.cc",76],["faperplace.com",76],["freeadultvideos.cc",76],["freepornstream.cc",76],["generalpornmovies.com",76],["kinkyporn.cc",76],["moviesxxx.cc",76],["movstube.net",76],["onlinefetishporn.cc",76],["peetube.cc",76],["pornonline.cc",76],["porntube18.cc",76],["streamextreme.cc",76],["streamporn.cc",76],["videoxxx.cc",76],["watchporn.cc",76],["x24.video",76],["xxx24.vip",76],["xxxonline.cc",76],["xxxonlinefree.com",76],["xxxopenload.com",76],["gonzoporn.cc",76],["onlinexxx.cc",76],["tvporn.cc",76],["allporncomic.com",76],["thepiratebay.org",76],["videosection.com",76],["pornky.com",76],["tubxporn.com",76],["imgcredit.xyz",76],["desixxxtube.org",76],["freeindianporn2.com",76],["kashtanka2.com",76],["kompoz2.com",76],["pakistaniporn2.com",76],["mangahere.onl",[79,177]],["worldfreeware.com",80],["ellibrepensador.com",80],["rexdlfile.com",80],["sfastwish.com",81],["watchjavnow.xyz",81],["juicywest.com",81],["fakyutube.com",81],["mm9842.com",81],["mm9846.com",81],["gaystream.cloud",81],["javmvp.com",81],["watch-jav-english.live",81],["0gogle.com",81],["videobot.stream",81],["iframe2videos.xyz",81],["vidohd.com",81],["kitabmarkaz.xyz",81],["animepl.xyz",81],["faptiti.com",81],["goana.xyz",81],["javplaya.com",81],["xvideostream.net",81],["xxxjaa.xyz",81],["japopav.tv",81],["streamm4u.club",81],["fembed-hd.com",81],["javhdfree.icu",81],["nekolink.site",81],["av4asia.com",81],["suzihaza.com",81],["vcdn-stream.xyz",81],["mycloudzz.com",81],["javpoll.com",81],["javleaked.com",81],["pornhole.club",81],["ffem.club",81],["jvembed.com",81],["megafilmeshdonline.org",81],["jav247.top",81],["nashstream.top",81],["yuistream.xyz",81],["mavavid.com",81],["diampokusy.com",81],["vidmedia.top",81],["moviepl.xyz",81],["superplayxyz.club",81],["viplayer.cc",81],["nsfwzone.xyz",81],["layarkacaxxi.icu",81],["embed-media.com",81],["javpornhd.online",81],["zojav.com",81],["javenglish.me",81],["owodeuwu.xyz",81],["javbigo.xyz",81],["pornhubed.com",81],["playerjavseen.com",81],["javsubbed.xyz",81],["xsub.cc",81],["fembed9hd.com",81],["onscreensvideo.com",81],["baldrfilms.xyz",81],["gaymovies.top",81],["guccihide.com",81],["streamhide.to",81],["vidhidevip.com",81],["cloudrls.com",81],["embedwish.com",81],["fc2stream.tv",81],["javhahaha.us",81],["javlion.xyz",81],["javibe.net",81],["jvideo.xyz",81],["kissmovies.net",81],["streamvid.top",81],["vidgo.top",81],["nudecelebforum.com",82],["pronpic.org",83],["chyoa.com",84],["thisisfutbol.com",85],["pcwelt.de",86],["sixsistersstuff.com",87],["vermangasporno.com",90],["celebjihad.com",90],["dirtyship.com",90],["celebmasta.com",90],["fullporner.com",[90,235]],["lejdd.fr",91],["gamekult.com",91],["bharian.com.my",91],["thememypc.net",92],["cityam.com",93],["inhabitat.com",94],["speedtest.net",96],["livingstondaily.com",96],["goafricaonline.com",97],["poedb.tw",98],["link.tl",99],["lnk.news",100],["lnk.parts",100],["zootube1.com",101],["xxxtubezoo.com",101],["zooredtube.com",101],["videos1002.com",102],["sab.bz",102],["javseen.tv",102],["autobild.de",104],["alimaniac.com",105],["sbs.com.au",106],["1xxx-tube.com",108],["asssex-hd.com",108],["bigcockfreetube.com",108],["bigdickwishes.com",108],["enjoyfuck.com",108],["freemomstube.com",108],["fuckmonstercock.com",108],["gobigtitsporn.com",108],["gofetishsex.com",108],["hard-tubesex.com",108],["hd-analporn.com",108],["hiddencamstube.com",108],["kissmaturestube.com",108],["lesbianfantasyxxx.com",108],["modporntube.com",108],["pornexpanse.com",108],["pornokeep.com",108],["pussytubeebony.com",108],["tubesex.me",108],["vintagesexpass.com",108],["voyeur-pornvideos.com",108],["voyeurspyporn.com",108],["voyeurxxxfree.com",108],["xxxtubenote.com",108],["yummysextubes.com",108],["nakedarab-tube.com",108],["xxxtubepass.com",108],["yestubemature.com",108],["yourhomemadetube.com",108],["yourtranny-sex.com",108],["tubexxxone.com",108],["airsextube.com",108],["asianbabestube.com",108],["bigtitsxxxfree.com",108],["blowjobpornset.com",108],["entertubeporn.com",108],["finexxxvideos.com",108],["freesexvideos24.com",108],["fuckhairygirls.com",108],["gopornindian.com",108],["grandmatube.pro",108],["grannyfucko.com",108],["grannyfuckxxx.com",108],["hiddencamhd.com",108],["hindiporno.pro",108],["indianbestporn.com",108],["japanesemomsex.com",108],["japanxxxass.com",108],["massagefreetube.com",108],["maturepussies.pro",108],["megajapansex.com",108],["new-xxxvideos.com",108],["xxxblowjob.pro",108],["xxxtubegain.com",108],["xxxvideostrue.com",108],["acutetube.net",108],["agedtubeporn.com",108],["agedvideos.com",108],["onlinegrannyporn.com",108],["freebigboobsporn.com",108],["tubeinterracial-porn.com",108],["best-xxxvideos.com",108],["bestanime-xxx.com",108],["blowxxxtube.com",108],["callfuck.com",108],["teenhubxxx.com",108],["tubepornasian.com",108],["xxxtubedot.com",108],["blowjobfucks.com",108],["dirtyasiantube.com",108],["maturewomenfucks.com",108],["pornmaturetube.com",108],["setfucktube.com",108],["tourporno.com",108],["do-xxx.com",108],["dotfreesex.com",108],["dotfreexxx.com",108],["easymilftube.net",108],["electsex.com",108],["fineretroporn.com",108],["freehqtube.com",108],["freshmaturespussy.com",108],["freshsexxvideos.com",108],["fuckedporno.com",108],["gallant-matures.com",108],["hqhardcoreporno.com",108],["girlssexxxx.com",108],["glamourxxx-online.com",108],["vintagepornnew.com",108],["tubevintageporn.com",108],["goxxxvideos.com",108],["grouppornotube.com",108],["hqxxxmovies.com",108],["hqsex-xxx.com",108],["hqamateurtubes.com",108],["hotpussyhubs.com",108],["hdpornteen.com",108],["indecentvideos.com",108],["ifreefuck.com",108],["kittyfuckstube.com",108],["lightxxxtube.com",108],["momstube-porn.com",108],["modelsxxxtube.com",108],["milfpussy-sex.com",108],["nicexxxtube.com",108],["neatpornodot.com",108],["neatfreeporn.com",108],["bigtitsporn-tube.com",108],["tubehqxxx.com",108],["nakedbbw-sex.com",108],["onlineteenhub.com",108],["online-xxxmovies.com",108],["pussyhothub.com",108],["pornxxxplace.com",108],["pornoteensex.com",108],["pornonote.pro",108],["pornoaid.com",108],["pornclipshub.com",108],["whitexxxtube.com",108],["sweetadult-tube.com",108],["sweet-maturewomen.com",108],["sexyoungclips.com",108],["sexymilfsearch.com",108],["sextubedot.com",108],["hqmaxporn.com",108],["sexlargetube.com",108],["sexhardtubes.com",108],["tubepornstock.com",108],["xfuckonline.com",108],["sheamateur.com",109],["cuts-url.com",110],["exe.io",[110,183]],["adsafelink.com",110],["modebaca.com",110],["cutdl.xyz",110],["shurt.pw",[110,287]],["smoner.com",110],["droplink.co",110],["ez4short.com",110],["try2link.com",[110,244]],["jameeltips.us",110],["blog.linksfire.co",110],["recipestutorials.com",110],["shrinkforearn.in",110],["linksly.co",110],["curto.win",110],["imagenesderopaparaperros.com",110],["shortenbuddy.com",110],["apksvip.com",110],["4cash.me",110],["teknomuda.com",110],["savelink.site",110],["samaa-pro.com",110],["miklpro.com",110],["modapk.link",110],["1shorten.com",110],["ccurl.net",110],["linkpoi.me",110],["pewgame.com",110],["crazyblog.in",110],["gtlink.co",110],["rshrt.com",110],["dz-linkk.com",110],["adurly.cc",110],["link.asiaon.top",110],["download.sharenulled.net",110],["beingtek.com",110],["adlinkweb.com",110],["swzz.xyz",110],["cutp.in",110],["gsm-solution.com",111],["ihackedgames.com",112],["dvdporngay.com",112],["software-on.com",112],["kpopjjang.com",[112,182]],["siteunblocked.info",[112,267]],["unblocked.name",[112,267]],["uproxy2.biz",[112,267]],["gomo.to",113],["dlapk4all.com",113],["popmatters.com",114],["planetf1.com",114],["austin.culturemap.com",114],["northern-scot.co.uk",114],["icy-veins.com",115],["bidouillesikea.com",115],["truetrophies.com",116],["alcasthq.com",117],["mzee.com",117],["supforums.com",118],["player.xxxbestsites.com",119],["player.tabooporns.com",119],["wiztube.xyz",119],["megatube.xxx",119],["hot-cartoon.com",119],["wowstream.top",119],["haes.tech",119],["koreanpornmovie.xyz",119],["xxvideoss.net",119],["player.subespanolvip.com",119],["vidcdn.co",[119,238]],["justswallows.net",119],["wilifilm.net",119],["rpdrlatino.live",119],["pbtube.co",119],["streaming-french.net",119],["koreanbj.club",119],["monstream.org",119],["player.hdgay.net",119],["ytms.one",119],["cdngee.com",119],["fshd3.club",119],["hd-streaming.net",119],["streaming-french.org",119],["telenovelas-turcas.com.es",119],["gocurrycracker.com",121],["xcums.com",121],["ihub.live",121],["naturalbd.com",121],["freeuseporn.com",121],["salamanca24horas.com",122],["bollywoodshaadis.com",123],["ngelag.com",124],["huim.com",125],["cambay.tv",128],["caminspector.net",128],["camwhorespy.com",128],["camwhoria.com",128],["camgoddess.tv",128],["zemporn.com",129],["wpgdadatong.com",130],["wikifeet.com",131],["root-top.com",132],["allmomsex.com",133],["allnewindianporn.com",133],["analxxxvideo.com",133],["animalextremesex.com",133],["anime3d.xyz",133],["animefuckmovies.com",133],["animepornfilm.com",133],["animesexbar.com",133],["animesexclip.com",133],["animexxxsex.com",133],["animexxxfilms.com",133],["anysex.club",133],["apetube.asia",133],["asianfuckmovies.com",133],["asianfucktube.com",133],["asianporn.sexy",133],["asiansexcilps.com",133],["beeg.fund",133],["beegvideoz.com",133],["bestasiansex.pro",133],["bravotube.asia",133],["brutalanimalsfuck.com",133],["candyteenporn.com",133],["daddyfuckmovies.com",133],["desifuckonline.com",133],["exclusiveasianporn.com",133],["exteenporn.com",133],["fantasticporn.net",133],["fantasticyoungporn.com",133],["fineasiansex.com",133],["firstasianpussy.com",133],["freeindiansextube.com",133],["freepornasians.com",133],["freerealvideo.com",133],["fuck-beeg.com",133],["fuck-xnxx.com",133],["fuckasian.pro",133],["fuckfuq.com",133],["fuckundies.com",133],["gojapaneseporn.com",133],["golderotica.com",133],["goodyoungsex.com",133],["goyoungporn.com",133],["hardxxxmoms.com",133],["hdvintagetube.com",133],["hentaiporn.me",133],["hentaisexfilms.com",133],["hentaisexuality.com",133],["hot-teens-movies.mobi",133],["hotanimepornvideos.com",133],["hotanimevideos.com",133],["hotasianpussysex.com",133],["hotjapaneseshows.com",133],["hotmaturetube.com",133],["hotmilfs.pro",133],["hotorientalporn.com",133],["hotpornyoung.com",133],["hotxxxjapanese.com",133],["hotxxxpussy.com",133],["indiafree.net",133],["indianpornvideo.online",133],["japanpornclip.com",133],["japanesetube.video",133],["japansex.me",133],["japanesexxxporn.com",133],["japansporno.com",133],["japanxxx.asia",133],["japanxxxworld.com",133],["keezmovies.surf",133],["lingeriefuckvideo.com",133],["liveanimalporn.zooo.club",133],["madhentaitube.com",133],["megahentaitube.com",133],["megajapanesesex.com",133],["megajapantube.com",133],["milfxxxpussy.com",133],["momsextube.pro",133],["momxxxass.com",133],["monkeyanimalporn.com",133],["moviexxx.mobi",133],["newanimeporn.com",133],["newjapanesexxx.com",133],["nicematureporn.com",133],["nudeplayboygirls.com",133],["openxxxporn.com",133],["originalindianporn.com",133],["originalteentube.com",133],["pig-fuck.com",133],["plainasianporn.com",133],["popularasianxxx.com",133],["pornanimetube.com",133],["pornasians.pro",133],["pornhat.asia",133],["pornheed.online",133],["pornjapanesesex.com",133],["pornomovies.asia",133],["pornvintage.tv",133],["primeanimesex.com",133],["realjapansex.com",133],["realmomsex.com",133],["redsexhub.com",133],["retroporn.world",133],["retrosexfilms.com",133],["sex-free-movies.com",133],["sexanimesex.com",133],["sexanimetube.com",133],["sexjapantube.com",133],["sexmomvideos.com",133],["sexteenxxxtube.com",133],["sexxxanimal.com",133],["sexyoungtube.com",133],["sexyvintageporn.com",133],["sopornmovies.com",133],["spicyvintageporn.com",133],["sunporno.club",133],["tabooanime.club",133],["teenextrem.com",133],["teenfucksex.com",133],["teenhost.net",133],["teensexass.com",133],["tnaflix.asia",133],["totalfuckmovies.com",133],["totalmaturefuck.com",133],["txxx.asia",133],["voyeurpornsex.com",133],["warmteensex.com",133],["wetasiancreampie.com",133],["wildhentaitube.com",133],["wowyoungsex.com",133],["xhamster-art.com",133],["xmovie.pro",133],["xnudevideos.com",133],["xnxxjapon.com",133],["xpics.me",133],["xvide.me",133],["xxxanimefuck.com",133],["xxxanimevideos.com",133],["xxxanimemovies.com",133],["xxxhentaimovies.com",133],["xxxhothub.com",133],["xxxjapaneseporntube.com",133],["xxxlargeporn.com",133],["xxxmomz.com",133],["xxxpornmilf.com",133],["xxxpussyclips.com",133],["xxxpussysextube.com",133],["xxxretrofuck.com",133],["xxxsex.pro",133],["xxxsexyjapanese.com",133],["xxxteenyporn.com",133],["xxxvideo.asia",133],["xxxvideos.ink",133],["xxxyoungtv.com",133],["youjizzz.club",133],["youngpussyfuck.com",133],["za.gl",135],["activistpost.com",[136,140]],["ladepeche.fr",137],["jemontremonminou.com",137],["jemontremasextape.com",137],["jemontremabite.com",137],["bitzite.com",[137,181]],["kinoger.ru",138],["moviesapi.club",138],["clasicotas.org",139],["jattmate.com",140],["saveshared.com",140],["simpledownload.net",140],["compucalitv.com",141],["blademaster666.com",142],["hot2k.com",142],["luchoedu.org",142],["lupaste.com",142],["pornovenezolano.com.ve",142],["romnation.net",142],["venezporn.com",142],["hubzter.com",143],["collater.al",143],["nzpocketguide.com",143],["volksstimme.de",145],["phonenumber-lookup.info",146],["maniac.de",147],["cambro.tv",148],["filerio.in",148],["call2friends.com",148],["gigaho.com",148],["trendsderzukunft.de",148],["forum.lolesporte.com",148],["mytoolz.net",148],["haoweichi.com",148],["tcheats.com",149],["tobys.dk",149],["sembunyi.in",150],["anime-jl.net",151],["zplayer.live",152],["fuckdy.com",153],["bdsmporntub.com",153],["femdomporntubes.com",153],["spellchecker.net",154],["nackte.com",157],["highporn.net",157],["blasensex.com",157],["thegatewaypundit.com",158],["your-daily-girl.com",158],["720pxmovies.blogspot.com",159],["penis-bilder.com",160],["boyfriendtv.com",160],["dansmovies.com",160],["shegotass.info",160],["4rkinggame.com",160],["phimmoiaz.cc",160],["papahd.club",160],["papahd1.xyz",160],["mvidoo.com",160],["imgdawgknuttz.com",161],["m4maths.com",162],["poki-gdn.com",162],["megapornfreehd.com",163],["tonpornodujour.com",164],["absentescape.net",165],["forgepattern.net",165],["vidlink.pro",165],["nflscoop.xyz",165],["tunovelaligera.com",166],["dr-farfar.com",166],["nysainfo.pl",166],["c1ne.co",166],["bleachmx.fr",166],["choq.fm",166],["geeksweb.net",166],["usb-antivirus.com",166],["eroticmv.com",166],["allywebsite.com",166],["ktm2day.com",166],["downloadcursos.net",166],["bezpolitickekorektnosti.cz",167],["protopage.com",168],["topito.com",169],["livesport.ws",171],["citynow.it",172],["variety.com",173],["cuatro.com",174],["mitele.es",174],["telecinco.es",174],["serieslandia.com",175],["softwaredescargas.com",175],["anongamez.com",175],["morritastube.xxx",[175,284]],["rawstory.com",176],["post-gazette.com",176],["bilasport.net",178],["yogitimes.com",179],["juba-get.com",180],["percentagecalculator.guru",180],["kuncomic.com",180],["claim.8bit.ca",[181,254]],["lightnovelpdf.com",181],["ta2deem7arbya.com",181],["adsy.pw",181],["playstore.pw",181],["bootyexpo.net",181],["arblinks.xyz",181],["arbweb.info",181],["th3tech.net",181],["cryptonationfaucet.com",181],["solarchaine.com",181],["tokenmix.pro",181],["terafly.me",181],["addtobucketlist.com",181],["alternativa104.net",181],["asumesi.com",181],["ayo24.id",181],["barrier-free.net",181],["berich8.com",181],["bloooog.it",181],["branditechture.agency",181],["chataigpt.org",181],["coinsrev.com",181],["eliobenedetto.it",181],["iamflorianschulze.com",181],["kyoto-kanko.net",181],["limontorrents.com",181],["livenewsof.com",181],["medeberiya1.com",181],["medeberiyax.com",181],["oyundunyasi.net",181],["parrocchiapalata.it",181],["photoshopvideotutorial.com",181],["samovies.net",181],["sulocale.sulopachinews.com",181],["tabering.net",181],["xn--nbkw38mlu2a.com",181],["faucetbravo.fun",181],["vstdrive.in",182],["wealthh.xyz",183],["lonely-mature.com",184],["tubepornclassic.com",185],["the-voice-of-germany.de",186],["adn.com",187],["spokesman.com",188],["news-herald.com",188],["verprogramasonline.com",189],["savealoonie.com",189],["pervertgirlsvideos.com",189],["open3dmodel.com",189],["elmundo.es",190],["expansion.com",190],["marca.com",190],["allusione.org",191],["cyberstumble.com",191],["wickedspot.org",191],["boredbat.com",191],["web.businessuniqueidea.com",191],["questloops.com",191],["venusarchives.com",191],["freemagazines.top",191],["elektrikmen.com",191],["solotrend.net",191],["itsecuritynews.info",191],["thebharatexpressnews.com",191],["inwepo.co",191],["daemon-hentai.com",191],["pornstash.in",191],["toramemoblog.com",191],["7daystodiemods.com",191],["7review.com",191],["asupan.me",191],["avitter.net",191],["bi-girl.net",191],["carryflix.icu",191],["dark5k.com",191],["fairyhorn.cc",191],["gojo2.com",191],["gorecenter.com",191],["huitranslation.com",191],["javhdvideo.org",191],["nakiny.com",191],["nemumemo.com",191],["peppe8o.com",191],["phodoi.vn",191],["savingsomegreen.com",191],["forocoches.com",192],["spinbot.com",193],["androidonepro.com",194],["arcadepunks.com",195],["wohnungsboerse.net",196],["nbareplayhd.com",198],["convert-case.softbaba.com",198],["thepoorcoder.com",198],["techgeek.digital",198],["warps.club",199],["truyenaudiocv.net",199],["kompasiana.com",200],["spectrum.ieee.org",201],["thenation.com",202],["newsonthegotoday.com",203],["sandiegouniontribune.com",204],["fernsehserien.de",204],["femalefirst.co.uk",205],["theregister.co.uk",206],["sportstream.live",207],["blowjobgif.net",208],["erospots.info",209],["pornforrelax.com",210],["macrumors.com",211],["faupto.com",[212,213]],["dogemate.com",213],["napolipiu.com",214],["manpeace.org",215],["faucetwork.space",215],["gaminginfos.com",215],["png.is",[216,217,218]],["nohat.cc",[217,218]],["fuskator.com",219],["scrubson.blogspot.com",220],["khmer7.org",220],["aquariumgays.com",221],["paginadanoticia.com.br",222],["alliptvlinks.com",223],["blog.textpage.xyz",223],["iguarras.com",224],["iputitas.net",224],["fastream.to",224],["1001tracklists.com",226],["counterstrike-hack.leforum.eu",228],["ajt.xooit.org",228],["ludwig-van.com",229],["standardmedia.co.ke",229],["files.fm",229],["sunci.net",230],["yoykp.com",230],["gamerxyt.com",231],["faqwiki.us",231],["zeeplayer.pages.dev",231],["cookad.net",231],["pmkisanlists.in",231],["shramikcard.in",231],["shareus.io",231],["sportfacts.net",[231,246]],["sportnews.to",231],["drivemoe.com",232],["dsharer.com",232],["looptorrent.org",233],["noicetranslations.blogspot.com",233],["serviceemmc.com",233],["shorttrick.in",233],["sharedisk.me",233],["shrdsk.me",233],["pupupul.site",234],["fansubseries.com.br",234],["stbnetu.xyz",234],["xmateur.com",235],["jadoo.lol",236],["sinensistoon.com",237],["ncdnx3.xyz",238],["usersdrive.com",239],["manoramaonline.com",240],["realmoasis.com",241],["technewsworld.com",242],["aylink.co",245],["gitizle.vip",245],["shtms.co",245],["suaurl.com",[246,247]],["mysports.to",246],["blog24.me",248],["exactpay.online",[248,255]],["soltoshindo.com",248],["crypto4yu.com",248],["laweducationinfo.com",249],["savemoneyinfo.com",249],["worldaffairinfo.com",249],["godstoryinfo.com",249],["successstoryinfo.com",249],["cxissuegk.com",249],["learnmarketinfo.com",249],["bhugolinfo.com",249],["armypowerinfo.com",249],["rsadnetworkinfo.com",249],["rsinsuranceinfo.com",249],["rsfinanceinfo.com",249],["rsgamer.app",249],["rssoftwareinfo.com",249],["rshostinginfo.com",249],["rseducationinfo.com",249],["phonereviewinfo.com",249],["makeincomeinfo.com",249],["gknutshell.com",249],["vichitrainfo.com",249],["workproductivityinfo.com",249],["currentrecruitment.com",250],["investorveda.com",250],["techacode.com",251],["azmath.info",251],["downfile.site",251],["downphanmem.com",251],["expertvn.com",251],["memangbau.com",251],["trangchu.news",251],["aztravels.net",251],["techyuth.xyz",252],["claimclicks.com",253],["10convert.com",256],["pleated-jeans.com",256],["obsev.com",256],["wepc.com",256],["gal-dem.com",257],["mymusicreviews.com",258],["thechat.cafe",258],["gaystream.pw",259],["lagacetadesalamanca.es",260],["infocorp.io",261],["addictinggames.com",262],["comparteunclic.com",263],["grab.tc",263],["starbux.io",263],["qashbits.com",263],["upnewsinfo.com",264],["smdailyjournal.com",265],["toolforge.org",266],["getdogecoins.com",268],["malaysiastock.biz",269],["1bit.space",270],["1bitspace.com",270],["ytanime.tv",270],["hyundaitucson.info",271],["pimylifeup.com",272],["camwhorez.video",273],["best-shopme.com",274],["cpomagazine.com",275],["doramasyt.com",276],["monoschinos.com",276],["xxxdan.com",277],["abandonmail.com",278],["hentais.tube",279],["hentaitube.online",279],["hentaidude.com",280],["aegeanews.gr",281],["batterypoweronline.com",281],["brezovycukr.cz",281],["centrocommercialevulcano.com",281],["cieonline.co.uk",281],["commsbusiness.co.uk",281],["dailygrindonline.net",281],["delo.bg",281],["dynastyseries.com",281],["fabmx1.com",281],["fat-bike.com",281],["fmj.co.uk",281],["localemagazine.com",281],["loveourweddingmag.com",281],["metaforespress.gr",281],["myvalley.it",281],["niestatystyczny.pl",281],["primapaginamarsala.it",281],["ringelnatz.net",281],["schoolsweek.co.uk",281],["sikkenscolore.it",281],["sportbet.gr",281],["stadtstudenten.de",281],["stagemilk.com",281],["tautasdziesmas.lv",281],["thetoneking.com",281],["toplickevesti.com",281],["zeroradio.co.uk",281],["miohentai.com",282],["sluttyrat.com",283],["k12reader.com",285],["cachevalleydaily.com",285],["panel.skynode.pro",286],["imag-r.com",286],["atlaq.com",287],["douploads.net",287],["moalm-qudwa.blogspot.com",287],["mcloud.bz",288],["theflixer.tv",288],["vidstream.pro",288],["radionylive.com",289],["radioitalylive.com",289],["radiolovelive.com",289],["radiocountrylive.com",289],["radiosymphony.com",289],["miamibeachradio.com",289],["radiorockon.com",289],["radioitaliacanada.com",289],["radioitalianmusic.com",289],["radioamericalatina.com",289],["radiosantaclaus.com",289],["radionorthpole.com",289],["radionatale.com",289],["pornvideoq.com",291],["gaminggorilla.com",291],["sexuhot.com",291],["rexxx.org",292],["world4.eu",293],["flinsetyadi.com",293],["trytutorial.com",293],["rimworldbase.com",293],["ifreemagazines.com",293],["romaniataramea.com",294],["amateur8.com",295],["freeporn8.com",295],["maturetubehere.com",295],["sortporn.com",295],["textovisia.com",297],["hotcleaner.com",298],["momo-net.com",299],["hardwarezone.com.sg",300],["veryfastdownload.pw",304],["nation.africa",305],["manganelo.tv",306],["hdthevid.online",306],["vidhdthe.online",306],["vermoegen.org",307],["javhub.net",[308,309]],["inhumanity.com",310],["miraculous.to",311],["glotorrents.fr-proxy.com",312],["glotorrents.theproxy.ws",312],["tutele.sx",313],["dirp.me",314],["t18cv.com",315],["codecap.org",316],["integral-calculator.com",317],["derivative-calculator.net",317],["getcopy.link",318],["basic-tutorials.de",319],["ytmp3cut.com",320],["depvailon.com",321],["111.90.150.10",322],["111.90.150.149",322],["111.90.151.26",322],["111.90.159.159",322],["111.90.141.252",322],["mangahentai.xyz",323],["nhentai.io",[324,325]],["erofound.com",326],["erome.com",327],["flaticon.com",328],["zertalious.xyz",[329,344]],["tweakcentral.net",330],["nokiahacking.pl",331],["javct.net",332],["veryfreeporn.com",333],["austiblox.net",334],["linkbin.me",[335,336]],["teachoo.com",338],["maisonbrico.com",339],["vebo1.com",340],["komiklokal.me",341],["seriesmetro.net",342],["kodewebsite.com",345],["qcheng.cc",346],["hygiena.com",347],["netchimp.co.uk",348],["newscon.org",349],["comohoy.com",[350,351]],["cimanow.cc",351],["xgroovy.com",352],["ruyashoujo.com",353],["gktech.uk",354],["x2download.com",355],["familyminded.com",356],["foxvalleyfoodie.com",356],["merriam-webster.com",356],["news.com.au",356],["playstationlifestyle.net",356],["sportsnaut.com",356],["tempumail.com",356],["toledoblade.com",356],["play.diziyou.co",357],["truyen-hentai.com",358],["redd.tube",359],["sendspace.com",360],["leechpremium.net",361],["sfr.fr",362],["ericdraken.com",363],["djs.sk",365],["pythonjobshq.com",366],["sensacine.com",368]]);

const entitiesMap = new Map([["hqq",2],["lookmovie",[2,18]],["shrink",[2,21,110]],["wetteronline",4],["ohmymag",8],["pingit",[10,21,29,77]],["oload",[10,21,28,29]],["streamhoe",[10,21]],["123europix",[14,15,29]],["gamestorrents",15],["gogoanimes",15],["limetorrents",15],["piratebayz",15],["europixhd",[15,29]],["hdeuropix",[15,29]],["topeuropix",[15,29]],["grantorrent",[15,95]],["moviescounter",15],["elixx",[15,79]],["telerium",15],["savelinks",15],["hentaisd",15],["mrpiracy",15],["prostoporno",17],["kissasian",18],["bflix",[18,29,288]],["m4ufree",[18,119]],["0123movies",18],["gomovies",18],["fembed",[18,81]],["mavplay",[18,26,81]],["videobb",[18,26,81,113]],["5movies",18],["123moviesc",18],["fmovies",18],["proxybit",18],["123movieshd",18],["fbgo",[18,81]],["sbchip",[18,81]],["sbflix",[18,81]],["sbplay",[18,81]],["sbplay2",[18,81]],["sbplay3",[18,81]],["sbrulz",[18,81]],["streamsb",[18,81,303]],["ask4movie",18],["1tamilmv",18],["buffstream",18],["tenies-online",18],["m4uhd",18],["hdhub4u",18],["watchseries9",18],["moviesjoy",18],["torrentstatus",18],["yts2",18],["y2mate",18],["alexsports",18],["2embed",18],["seulink",18],["encurtalink",18],["animepahe",[21,37]],["kwik",[21,37]],["1337x.unblocked",21],["1337x.unblockit",[21,24]],["pussyspace",21],["urlcero",21],["shrtfly",[21,64]],["linkshorts",21],["streamcdn",[21,29]],["vinaurl",[21,110]],["komikcast",21],["bolly4u",[21,136]],["tugaflix",21],["hdfriday",21],["123movies",21],["shortearn",[21,29]],["mstream",21],["watch4hd",21],["gdtot",21],["bluemediafiles",21],["dailysport",[21,29]],["btdb",[21,25]],["linksfire",21],["pureshort",[21,110]],["bluemediadownload",[21,28]],["bluemediafile",[21,28]],["bluemedialink",[21,28]],["bluemediastorage",[21,28]],["bluemediaurls",[21,28]],["urlbluemedia",[21,28]],["link1s",[21,110]],["shorttey",[21,110]],["videoplayer",21],["movizland",21],["sitesunblocked",21],["1377x",21],["bcvc",21],["thepiratebay",[23,31]],["tpbay",23],["camwhores",[23,41]],["camwhorestv",[23,41]],["filesamba",23],["theproxy",23],["steamplay",[24,25,26]],["streamp1ay",[25,26]],["topflix",25],["ustream",25],["pixlev",25],["moviessources",25],["sbvideo",[25,81]],["steanplay",26],["stemplay",26],["streanplay",26],["txxx",26],["asianclub",[26,29,81]],["xmoviesforyou",[28,31]],["cuevana3",[28,103]],["vidcloud",[28,81,119]],["pornid",28],["zbporn",[28,126]],["yomovies",28],["nonsensediamond",28],["xclusivejams",28],["sportlemon",28],["sportlemons",28],["sportlemonx",28],["kinox",28],["kinoz",[28,29]],["remaxhd",28],["img4fap",28],["babeporn",28],["babytorrent",28],["123moviesme",28],["xxxhdvideo",28],["mcloud",29],["vizcloud",29],["vizcloud2",29],["ouo",29],["songs",29],["gogoanimetv",29],["daddylive",[29,80]],["pelisplus",29],["streamm4u",29],["inkapelis",29],["ettv",29],["pelix",29],["pnd",29],["0123movie",29],["movies123",29],["piratebay",29],["webbro",29],["javwide",29],["vidhd",29],["mirrorace",29],["thoptv",29],["streamingworld",29],["yesmovies",29],["solarmovie",29],["bdiptv",29],["cinemalibero",29],["pctfenix",[29,142]],["pctnew",[29,142]],["watchgameofthrones",29],["tmearn",[29,110]],["shorten",[29,110,183]],["123animes",[29,113]],["openloadmovies",29],["gdriveplayer",29],["crichd",29],["vipracing",29],["supervideo",29],["vidsrc",[29,81]],["1337x",[29,224]],["a2zapk",29],["ilgeniodellostreaming",29],["superstream",29],["123movies-org",29],["sflix",29],["primetubsub",29],["moviesland",[29,81]],["f2movies",29],["imgmaze",[31,65,76]],["imgtown",[31,65,75,76]],["imgrock",[31,75]],["biqle",35],["otakuindo",35],["x1337x",36],["streameast",36],["vipboxtv",36],["yts",38],["sexvid",[40,170]],["silkengirl",[41,65,66]],["rintor",41],["imgsen",[41,75]],["imgsto",[41,75]],["sxyprn",42],["waaw",[43,119]],["waaaw",[43,119]],["waaw1",[43,119]],["vapley",43],["younetu",43],["player.uwatchfree",[43,119,238]],["123link",[45,46,47]],["7mmtv",49],["pornhat",51],["porno-tour",51],["desivideos",51],["movie4me",56],["imgdew",[65,75,76]],["imgview",[65,75,76]],["pandamovie",66],["speedporn",66],["watchpornfree",66],["imgoutlet",[75,76]],["anitube",76],["movisubmalay",[76,113]],["waploaded",76],["dirtyindianporn",76],["indianpornvideos",76],["kashtanka",76],["onlyindianporn",76],["porno18",76],["xxnx",76],["xxxindianporn",76],["adsrt",77],["stream2watch",79],["peliculas-dvdrip",79],["kinoger",81],["iframejav",81],["mm9844",81],["netxwatch",81],["milfnut",81],["anxcinema",81],["videofilms",81],["prosongs",81],["ncdnstm",81],["filelions",81],["streamwish",81],["bunkr",88],["pouvideo",89],["povvideo",89],["povw1deo",89],["povwideo",89],["powv1deo",89],["powvibeo",89],["powvideo",89],["powvldeo",89],["grantorrent1",95],["subtorrents",[95,107]],["subtorrents1",[95,107]],["megalink",110],["earnload",110],["miniurl",110],["shrinke",110],["shrinkme",110],["earncash",110],["shortzzy",110],["lite-link",110],["adcorto",110],["dogecoin",110],["upfiles",110],["torrentz2eu",113],["afilmywap",113],["okhatrimaza",113],["123anime",113],["gomoviesfree",113],["player.tormalayalamhd",119],["depedlps",121],["videovard",124],["asiansex",133],["japanfuck",133],["japanporn",133],["teensex",133],["vintagetube",133],["xxxmovies",133],["0l23movies",134],["cloudvideotv",137],["movierulzlink",140],["newmovierulz",140],["3hiidude",140],["ispunlock",144],["tpb",144],["vgmlinks",156],["thestreameast",165],["zone-annuaire",166],["rainanime",177],["blurayufr",181],["tutsnode",191],["web2.0calc",197],["readcomiconline",198],["cricfree",224],["sportskart",224],["brainly",225],["dood",227],["movies4u",231],["movies4u3",231],["gplinks",243],["moviehdf",244],["azsoft",251],["bg-gledai",258],["bolly4umovies",287],["123movieshub",288],["animeunity",288],["cima-club",288],["flixhq",288],["hindilinks4u",288],["t7meel",288],["bollyholic",301],["katmoviefix",316],["filemoon",337],["bitporno",343]]);

const exceptionsMap = new Map([["pingit.com",[10,21,29,77]],["pingit.me",[10,21,29,77]]]);

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
