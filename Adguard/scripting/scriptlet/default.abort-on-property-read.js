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

// ruleset: default

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["Notification"],["embedAddefend"],["navigator.userAgent"],["__eiPb"],["detector"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_pop"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["InstallTrigger"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["mm"],["stop"],["open"],["ga.length"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["exoNoExternalUI38djdkjDDJsio96"],["AaDetector"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["Adcash"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["adBlockDetected"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["decodeURI"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["document.createElement"],["pbjs.libLoaded"],["mz"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["raConf"],["popTimes"],["smrtSB"],["smrtSP"],["Aloader"],["advobj"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["popjs.init"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["require"],["__Y"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["jwplayer.vast"],["adblock"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["importFAB"],["_0xbeb9"],["popAdsClickCount"],["_wm"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["glxopen"],["CatapultTools"],["adbackDebug"],["googletag"],["$pxy822"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["decodeURIComponent"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["TRM"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["Popunder"],["gPartners"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["mdpDeBlocker"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["mdp_deblocker"],["adUnits"],["b2a"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["adthrive"],["show_ads_gr8_lite"],["disableButtonTimer"],["tie"],["document.write"],["adb_checker"],["ignore_adblock"],["$.prototype.offset"],["ea.add"],["adcashMacros"],["_cpp"],["pareAdblock"],["clickCount"],["popUp"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["Swal.fire"],["bypass_url"],["document.onmousedown"],["antiAdBlockerHandler"],["SMart1"],["window.open"],["checkAdsBlocked"],["navigator.brave"],["Light.Popup"],["htmls"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["chp_adblock_browser"],["adsbyjuicy"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["__tnt"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["canRunAds"],["indexedDB.open"],["checkCookieClick"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["rccbase_styles"],["adBlockerDetected"],["zfgformats"],["zfgstorage"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["disableDeveloperTools"],["google_jobrunner"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["app_vars.please_disable_adblock"],["afScript"],["history.back"],["String.prototype.charCodeAt"],["Overlayer"],["puShown"],["remove_adblock_html"],["Request"],["fallbackAds"],["checkAdsStatus"],["lck"],["advanced_ads_ready"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["arrvast"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["document.body.innerHTML"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["JuicyPop"],["afStorage"],["_run"],["eazy_ad_unblocker"],["jQuery.popunder"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["checkAdBlock"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["adConfig"],["onscroll"],["GeneratorAds"],["__cmpGdprAppliesGlobally"],["aab"],["config"],["runad"],["atob"],["__brn_private_mode"],["__aaZoneid"],["adc"],["document.body.style.backgroundPosition"],["showada"],["popUrl"],["Promise.all"],["block_ads"],["popurl"],["EV.Dab"],["Object.prototype.popupOpened"],["pum_popups"],["document.documentElement.clientWidth"],["Dataffcecd"],["app_advert"],["odabd"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"],["Keen"],["MONETIZER101.init"],["JadIds"]];

const hostnamesMap = new Map([["tagesspiegel.de",0],["vivud.com",[0,13,42,56]],["gtaall.com",0],["worldsex.com",[0,46]],["jizzbunker.com",[0,133]],["dailymail.co.uk",0],["n-tv.de",1],["aranzulla.it",2],["anallievent.com",3],["au-di-tions.com",3],["badgehungry.com",3],["beingmelody.com",3],["bloggingawaydebt.com",3],["casutalaurei.ro",3],["cornerstoneconfessions.com",3],["culture-informatique.net",3],["dearcreatives.com",3],["disneyfashionista.com",3],["divinelifestyle.com",3],["dna.fr",3],["eslauthority.com",3],["estrepublicain.fr",3],["fitting-it-all-in.com",3],["heresyoursavings.com",3],["irresistiblepets.net",3],["julieseatsandtreats.com",3],["justjared.com",3],["lecturisiarome.ro",3],["lemonsqueezyhome.com",3],["libramemoria.com",3],["lovegrowswild.com",3],["magicseaweed.com",3],["measuringflower.com",3],["mjsbigblog.com",3],["mommybunch.com",3],["mustardseedmoney.com",3],["myfunkytravel.com",3],["onetimethrough.com",3],["panlasangpinoymeatrecipes.com",3],["silverpetticoatreview.com",3],["the-military-guide.com",3],["therelaxedhomeschool.com",3],["the2seasons.com",3],["zeroto60times.com",3],["barefeetonthedashboard.com",3],["bargainbriana.com",3],["betterbuttchallenge.com",3],["bike-urious.com",3],["blwideas.com",3],["eartheclipse.com",3],["entertainment-focus.com",3],["fanatik.com.tr",3],["foreverconscious.com",3],["foreversparkly.com",3],["getdatgadget.com",3],["goodnewsnetwork.org",3],["greenarrowtv.com",3],["hbculifestyle.com",3],["heysigmund.com",3],["hodgepodgehippie.com",3],["homestratosphere.com",3],["indesignskills.com",3],["katiescucina.com",3],["knowyourphrase.com",3],["letsworkremotely.com",3],["lizs-early-learning-spot.com",3],["ledauphine.com",3],["leprogres.fr",3],["milliyet.com.tr",3],["pinoyrecipe.net",3],["prepared-housewives.com",3],["recipesforourdailybread.com",3],["redcarpet-fashionawards.com",3],["republicain-lorrain.fr",3],["savespendsplurge.com",3],["savingadvice.com",3],["shutupandgo.travel",3],["spring.org.uk",3],["stevivor.com",3],["tamaratattles.com",3],["tastefullyeclectic.com",3],["theavtimes.com",3],["thechroniclesofhome.com",3],["thisisourbliss.com",3],["tinyqualityhomes.org",3],["turtleboysports.com",3],["ultimateninjablazingx.com",3],["universfreebox.com",3],["utahsweetsavings.com",3],["vgamerz.com",3],["wheatbellyblog.com",3],["yummytummyaarthi.com",3],["ranker.com",[3,111]],["fluentu.com",3],["cdiscount.com",3],["damndelicious.net",3],["simplywhisked.com",3],["timesofindia.com",4],["bild.de",5],["sueddeutsche.de",6],["20min.ch",6],["al.com",6],["alphr.com",6],["autoexpress.co.uk",6],["bikeradar.com",6],["blick.ch",6],["chefkoch.de",6],["cyclingnews.com",[6,360]],["digitalspy.com",6],["democratandchronicle.com",6],["denofgeek.com",6],["esgentside.com",6],["evo.co.uk",6],["exclusivomen.com",6],["ft.com",6],["gala.de",6],["gala.fr",6],["heatworld.com",6],["itpro.co.uk",6],["livingathome.de",6],["masslive.com",6],["maxisciences.com",6],["metabomb.net",6],["mlive.com",6],["motherandbaby.co.uk",6],["motorcyclenews.com",6],["muthead.com",6],["neonmag.fr",6],["newyorkupstate.com",6],["ngin-mobility.com",6],["nj.com",6],["nola.com",6],["ohmirevista.com",6],["oregonlive.com",6],["pennlive.com",6],["programme.tv",6],["programme-tv.net",6],["radiotimes.com",6],["silive.com",6],["simplyvoyage.com",6],["stern.de",6],["syracuse.com",6],["theweek.co.uk",6],["ydr.com",6],["usatoday.com",6],["schoener-wohnen.de",6],["thewestmorlandgazette.co.uk",6],["news-leader.com",6],["closeronline.co.uk",6],["etonline.com",6],["bilan.ch",6],["doodle.com",6],["techradar.com",6],["daily-times.com",6],["wirralglobe.co.uk",6],["annabelle.ch",6],["pcgamer.com",6],["nintendolife.com",6],["gamer.com.tw",7],["skidrowcodexgames.com",8],["22pixx.xyz",[8,60,74]],["durtypass.com",8],["anime-odcinki.pl",8],["gaypornwave.com",[8,33]],["pngit.live",[8,18,25,72]],["gratispaste.com",[8,74]],["animotvslashz.blogspot.com",8],["eltern.de",9],["essen-und-trinken.de",9],["focus.de",9],["eurogamer.de",9],["eurogamer.es",9],["eurogamer.it",9],["eurogamer.net",9],["eurogamer.pt",9],["rockpapershotgun.com",9],["vg247.com",9],["urbia.de",9],["elpasotimes.com",9],["femina.ch",9],["northwalespioneer.co.uk",9],["codeproject.com",10],["cwseed.com",11],["pocketnow.com",12],["7r6.com",[13,21,106]],["reddflix.com",[13,18]],["bostoncommons.net",13],["opisanie-kartin.com",13],["painting-planet.com",13],["kropic.com",[13,42]],["mp4mania1.net",13],["livegore.com",13],["down-paradise.com",[13,76]],["kioven.com",13],["pngio.com",13],["iobit.com",13],["rule34.xxx",14],["realbooru.com",15],["alrincon.com",[15,18,34]],["realgfporn.com",[15,33]],["pornhd.com",[15,55]],["pornhdin.com",[15,18]],["pornomovies.com",[15,42]],["bdsmstreak.com",15],["freepornvideo.sex",15],["teenpornvideo.xxx",15],["yourlust.com",15],["imx.to",15],["mypornstarbook.net",15],["japanesefuck.com",15],["imgtorrnt.in",[15,46]],["pandamovies.pw",[15,46]],["club-flank.com",15],["streamporn.pw",15],["watchfreexxx.net",[15,33,151,152,153]],["dump.xxx",[15,18]],["fuqer.com",[15,18]],["tmohentai.com",15],["xopenload.me",15],["losporn.org",15],["bravoerotica.com",15],["xasiat.com",[15,70]],["redporno.cz",15],["vintageporntubes.com",15],["xxxvideos247.com",15],["young-pussy.com",15],["kingsofteens.com",15],["24pornvideos.com",15],["2japaneseporn.com",15],["xxxvideor.com",15],["youngleak.com",15],["zhlednito.cz",15],["8teenxxx.com",15],["activevoyeur.com",15],["allschoolboysecrets.com",15],["boobsforfun.com",15],["breedingmoms.com",15],["cockmeter.com",[15,46]],["collegeteentube.com",15],["cumshotlist.com",15],["porn0.tv",15],["ritzysex.com",15],["ritzyporn.com",15],["sexato.com",15],["javbobo.com",[15,24]],["sokobj.com",15],["youlikeboys.com",[15,74]],["needgayporn.com",15],["zetporn.com",15],["keephealth.info",16],["123moviesjr.cc",16],["123moviesd.com",16],["123moviess.se",16],["cloudvideo.tv",16],["googlvideo.com",16],["easyexploits.com",16],["azm.to",16],["anigogo.net",[16,76]],["kinoking.cc",16],["lvturbo.com",16],["sbbrisk.com",[16,76]],["sbchill.com",[16,76]],["sbrity.com",[16,76]],["viewsb.com",[16,76]],["watchdoctorwhoonline.com",16],["toxicwap.us",16],["yodbox.com",16],["coverapi.store",16],["masahub.net",[16,42]],["hblinks.pro",16],["afdah2.com",16],["kissasia.cc",16],["watchsexandthecity.com",16],["ymovies.vip",16],["cl1ca.com",16],["4br.me",16],["fir3.net",16],["grubstreet.com",17],["twitchy.com",17],["rule34hentai.net",18],["clik.pw",18],["pornj.com",18],["pornl.com",18],["ah-me.com",18],["1337x.unblock2.xyz",[18,20,51]],["mitly.us",[18,36]],["linkrex.net",18],["oke.io",18],["watchmygf.me",18],["pornoreino.com",[18,33]],["shrt10.com",18],["ashemaletube.com",18],["turbobit.net",18],["bestialitysexanimals.com",18],["bestialporn.com",18],["mujeresdesnudas.club",18],["mynakedwife.video",18],["videoszoofiliahd.com",18],["efukt.com",18],["tranny.one",[18,24]],["porndoe.com",[18,33]],["topvideosgay.com",18],["goto.com.np",18],["femdomtb.com",18],["pornvideotop.com",18],["deinesexfilme.com",18],["einfachtitten.com",18],["halloporno.com",18],["herzporno.com",18],["lesbenhd.com",18],["milffabrik.com",18],["porn-monkey.com",18],["porndrake.com",18],["pornhubdeutsch.net",18],["pornoaffe.com",18],["pornodavid.com",18],["pornoente.tv",18],["pornofisch.com",18],["pornofelix.com",18],["pornohammer.com",18],["pornohelm.com",18],["pornoklinge.com",18],["pornotom.com",18],["pornotommy.com",18],["pornovideos-hd.com",18],["pornozebra.com",18],["xhamsterdeutsch.xyz",18],["xnxx-sexfilme.com",18],["tryboobs.com",[18,24]],["hitomi.la",18],["fapality.com",[18,46]],["babesxworld.com",[18,34,46]],["icutlink.com",18],["oncehelp.com",18],["picbaron.com",[18,34]],["mega-p2p.net",18],["shrinkearn.com",18],["twister.porn",18],["bitlk.com",18],["gamovideo.com",18],["urlty.com",18],["peekvids.com",18],["playvids.com",18],["pornflip.com",18],["pornoeggs.com",18],["oko.sh",[18,25]],["turbogvideos.com",18],["xxx-image.com",[18,28,133,177]],["coinlyhub.com",[18,106]],["vidbom.com",18],["zimabdko.com",18],["fullxxxmovies.net",18],["elitegoltv.org",18],["extremotvplay.com",18],["tarjetarojatv.org",18],["pirlotvonline.org",18],["rojadirectaonlinetv.com",18],["semawur.com",18],["adshrink.it",18],["shrink-service.it",[18,357]],["eplsite.uk",[18,25]],["upstream.to",18],["dramakrsubindo.blogspot.com",18],["ex-foary.com",[18,106]],["oceanof-games.com",18],["watchmonkonline.com",18],["iir.ai",[18,106]],["comicxxx.eu",18],["mybestxtube.com",[18,46]],["pornobengala.com",18],["pornicom.com",[18,46]],["xecce.com",18],["teensporn.tv",[18,46]],["pornlift.com",18],["superbgays.com",18],["porncomics.me",18],["orsm.net",18],["enagato.com",18],["cloutgist.com",18],["youshort.me",18],["shortylink.store",18],["kvador.com",[18,34]],["uploadroot.com",18],["deepfakeporn.net",18],["pkr.pw",[18,106]],["loader.to",18],["namaidani.com",[18,106]],["anime47.com",18],["cutearn.net",[18,106]],["filezipa.com",[18,106]],["theblissempire.com",[18,106]],["bestgamehack.top",18],["hackofgame.com",18],["shorturl.unityassets4free.com",[18,106]],["vevioz.com",[18,106]],["charexempire.com",[18,287]],["crunchyscan.fr",18],["unblocksite.pw",[18,133]],["y2mate.com",18],["androidapks.biz",18],["androidsite.net",18],["animeonlinefree.org",18],["animesite.net",18],["computercrack.com",18],["crackedsoftware.biz",18],["crackfree.org",18],["cracksite.info",18],["downloadapk.info",18],["downloadapps.info",18],["downloadgames.info",18],["downloadmusic.info",18],["downloadsite.org",18],["ebooksite.org",18],["emulatorsite.com",18],["fmovies24.com",18],["freeflix.info",18],["freemoviesu4.com",18],["freesoccer.net",18],["fseries.org",18],["gamefast.org",18],["gamesite.info",18],["gostreamon.net",18],["hindisite.net",18],["isosite.org",18],["macsite.info",18],["mangasite.org",18],["megamovies.org",18],["moviefree2.com",18],["moviesite.app",18],["moviesx.org",18],["musicsite.biz",18],["patchsite.net",18],["pdfsite.net",18],["play1002.com",18],["productkeysite.com",18],["romsite.org",18],["seriesite.net",18],["siteapk.net",18],["siteflix.org",18],["sitegames.net",18],["sitekeys.net",18],["sitepdf.com",18],["sitetorrent.com",18],["softwaresite.net",18],["superapk.org",18],["supermovies.org",18],["tvonlinesports.com",18],["ultramovies.org",18],["warezsite.net",18],["watchmovies2.com",18],["watchmoviesforfree.org",18],["watchsite.net",18],["youapk.net",18],["gload.to",18],["bloggingguidance.com",18],["jockantv.com",18],["moviehaxx.pro",18],["receive-sms-online.info",19],["pornult.com",[20,70]],["fullhdxxx.com",[20,33]],["lendrive.web.id",20],["nimegami.id",20],["short.pe",[21,25]],["mylust.com",[21,46]],["anysex.com",[21,33,42,46,116]],["luscious.net",21],["cloudgallery.net",[21,25]],["alotporn.com",[21,46]],["imgair.net",21],["imgblaze.net",21],["imgfrost.net",21],["vestimage.site",21],["imgyer.store",21],["pixqbngg.shop",21],["pixqwet.shop",21],["pixmos.shop",21],["imgtgd.shop",21],["imgcsxx.shop",21],["imgqklw.shop",21],["pixqkhgrt.shop",21],["imgcssd.shop",21],["imguwjsd.sbs",21],["pictbbf.shop",21],["pixbryexa.sbs",21],["picbqqa.sbs",21],["pixbkghxa.sbs",21],["imgmgf.sbs",21],["picbcxvxa.sbs",21],["imguee.sbs",21],["imgmffmv.sbs",21],["imgbqb.sbs",21],["imgbyrev.sbs",21],["imgbncvnv.sbs",21],["pixtryab.shop",21],["imggune.shop",21],["pictryhab.shop",21],["pixbnab.shop",21],["imgbnwe.shop",21],["imgbbnhi.shop",21],["imgnbii.shop",21],["imghqqbg.shop",21],["imgyhq.shop",21],["pixnbrqwg.sbs",21],["pixnbrqw.sbs",21],["picmsh.sbs",21],["imgpke.sbs",21],["picuenr.sbs",21],["imgolemn.sbs",21],["imgoebn.sbs",21],["picnwqez.sbs",21],["imgjajhe.sbs",21],["pixjnwe.sbs",21],["pixkfjtrkf.shop",21],["pixkfkf.shop",21],["pixdfdjkkr.shop",21],["pixdfdj.shop",21],["picnft.shop",21],["pixrqqz.shop",21],["picngt.shop",21],["picjgfjet.shop",21],["picjbet.shop",21],["imgkkabm.shop",21],["imgxabm.shop",21],["imgthbm.shop",21],["imgmyqbm.shop",21],["imgwwqbm.shop",21],["imgjvmbbm.shop",21],["imgjbxzjv.shop",21],["imgjmgfgm.shop",21],["picxnkjkhdf.sbs",21],["imgxxbdf.sbs",21],["imgnngr.sbs",21],["imgjjtr.sbs",21],["imgqbbds.sbs",21],["imgbvdf.sbs",21],["imgqnnnebrf.sbs",21],["imgnnnvbrf.sbs",21],["pornfd.com",21],["xsanime.com",21],["camclips.tv",21],["ninjashare.to",21],["javideo.pw",[22,76]],["ujav.me",[22,76]],["shameless.com",[22,24,60]],["informer.com",23],["myreadingmanga.info",24],["sunporno.com",[24,60]],["adultdvdparadise.com",24],["freeomovie.info",24],["fullxxxmovies.me",24],["mangoparody.com",24],["mangoporn.co",24],["netflixporno.net",24],["pandamovies.me",24],["pornkino.cc",24],["pornwatch.ws",24],["watchfreexxx.pw",24],["watchxxxfree.pw",24],["xopenload.pw",24],["xtapes.me",24],["xxxparodyhd.net",24],["xxxscenes.net",24],["xxxstream.me",24],["youwatchporn.com",24],["8boobs.com",[24,34,60]],["babesinporn.com",[24,34,46,60]],["bustybloom.com",[24,34]],["hotstunners.com",[24,34,60]],["nudebabes.sexy",[24,60]],["pleasuregirl.net",[24,34,60]],["rabbitsfun.com",[24,34,60]],["nudismteens.com",24],["youx.xxx",24],["asiansex.life",24],["pornxp.com",[24,25]],["hypnohub.net",24],["oldies.name",24],["xnxxporn.video",24],["xxxdessert.com",24],["xxxshake.com",24],["manhwa18.cc",24],["best18porn.com",24],["bigtitslust.com",[24,271]],["manga18fx.com",24],["sexywomeninlingerie.com",24],["oosex.net",[24,46]],["theteensexy.com",24],["xteensex.net",24],["stiflersmoms.com",24],["gifhq.com",24],["amateur-couples.com",24],["teen-hd-sex.com",24],["tube-teen-18.com",24],["xxx-asian-tube.com",24],["met.bz",25],["hindimean.com",25],["senmanga.com",25],["ebookdz.com",25],["cda-hd.cc",25],["kurazone.net",25],["turkdown.com",25],["urlgalleries.net",25],["movie4u.live",25],["solarmovie.id",25],["01fmovies.com",25],["babesaround.com",25],["dirtyyoungbitches.com",25],["grabpussy.com",25],["join2babes.com",25],["nightdreambabe.com",25],["novoglam.com",25],["novohot.com",25],["novojoy.com",25],["novoporn.com",25],["novostrong.com",25],["pbabes.com",25],["pussystate.com",25],["redpornblog.com",25],["rossoporn.com",25],["sexynakeds.com",25],["thousandbabes.com",25],["gulf-up.com",25],["vidia.tv",25],["cutpaid.com",[25,106]],["javporn.best",[25,108]],["mixloads.com",25],["ancensored.com",25],["savevideo.tube",25],["files.cx",25],["drivefire.co",25],["porngo.com",25],["arenabg.com",25],["vidload.net",25],["animealtadefinizione.it",25],["lkc21.net",25],["mavanimes.co",25],["onnime.net",25],["noxx.to",25],["loadsamusicsarchives.blogspot.com",25],["xxxfiles.com",25],["deseneledublate.com",25],["hentaicloud.com",[25,249]],["descarga.xyz",25],["familyporn.tv",25],["pornxp.org",25],["rawmanga.top",25],["javside.com",[25,76]],["aniwave.to",25],["gayteam.club",25],["mangaraw.org",25],["flixtormovies.co",25],["watchthat70show.net",25],["supertelevisionhd.com",25],["whitemouseapple.com",25],["autoembed.cc",25],["whisperingauroras.com",25],["live-sport.duktek.pro",25],["bibme.org",26],["citationmachine.net",[26,27]],["citethisforme.com",27],["easybib.com",27],["1plus1plus1equals1.net",28],["cooksinfo.com",28],["heatherdisarro.com",28],["thesassyslowcooker.com",28],["mp4upload.com",29],["cricstream.me",29],["watchadsontape.com",29],["livesport24.net",29],["pepperlivestream.online",29],["streambucket.net",29],["megacanais.com",29],["dmovies.top",[29,161]],["sanet.lc",29],["antenasport.online",29],["apkship.shop",29],["browncrossing.net",29],["dudestream.com",29],["elgolestv.pro",29],["embedstreams.me",29],["engstreams.shop",29],["eyespeeled.click",29],["flostreams.xyz",29],["ilovetoplay.xyz",29],["joyousplay.xyz",29],["nativesurge.info",29],["pawastreams.org",29],["ripplestream4u.shop",29],["rojadirectaenvivo.pl",29],["sansat.link",29],["smartermuver.com",29],["sportsnest.co",29],["sportsurge.net",29],["sportzlive.shop",29],["tarjetarojaenvivo.lat",29],["techcabal.net",29],["volokit2.com",29],["worldstreamz.shop",29],["ythd.org",29],["kaas.ro",[29,161]],["rivestream.live",29],["flix-wave.lol",29],["redvido.com",29],["adbypass.org",29],["bypass.city",29],["sarugbymag.co.za",32],["ikaza.net",32],["imgadult.com",[33,34]],["imgdrive.net",[33,34]],["imgtaxi.com",[33,34]],["imgwallet.com",[33,34]],["hdpornt.com",33],["4tube.com",33],["pornerbros.com",[33,46]],["pichaloca.com",33],["pornodoido.com",33],["pornwatchers.com",[33,46]],["gotporn.com",33],["picturelol.com",33],["imgspice.com",33],["orgyxxxhub.com",[33,65,66]],["befap.com",33],["alphaporno.com",33],["tubedupe.com",33],["sexykittenporn.com",[33,34]],["letmejerk.com",33],["letmejerk2.com",33],["letmejerk3.com",33],["letmejerk4.com",33],["letmejerk5.com",33],["letmejerk6.com",33],["letmejerk7.com",33],["hdtube.porn",33],["madchensex.com",33],["canalporno.com",33],["dreamamateurs.com",33],["eroxia.com",33],["pornozot.com",33],["camgirlbang.com",33],["casting-porno-tube.com",33],["teensexvideos.me",33],["goshow.tv",33],["hentaigo.com",[34,73]],["lolhentai.net",34],["porntopic.com",34],["cocogals.com",[34,46]],["camwhoreshd.com",34],["hotbabes.tv",[34,97]],["consoletarget.com",34],["pussytorrents.org",34],["ftopx.com",[34,60,70]],["boobgirlz.com",34],["fooxybabes.com",34],["jennylist.xyz",34],["jumboporn.xyz",34],["mainbabes.com",[34,60]],["mysexybabes.com",[34,60]],["nakedbabes.club",[34,60]],["sexybabesz.com",[34,60]],["vibraporn.com",34],["zazzybabes.com",34],["zehnporn.com",34],["naughtymachinima.com",34],["imgbaron.com",34],["decorativemodels.com",34],["erowall.com",[34,46]],["freyalist.com",34],["guruofporn.com",34],["jesseporn.xyz",34],["kendralist.com",34],["vipergirls.to",34],["lizardporn.com",34],["wantedbabes.com",[34,46]],["exgirlfriendmarket.com",34],["nakedneighbour.com",34],["moozpussy.com",34],["zoompussy.com",34],["2adultflashgames.com",34],["123strippoker.com",34],["babepedia.com",34],["boobieblog.com",34],["borwap.xxx",34],["chicpussy.net",34],["gamesofdesire.com",34],["hd-xxx.me",34],["hentaipins.com",[34,266]],["longporn.xyz",34],["picmoney.org",34],["pornhd720p.com",34],["sikwap.xyz",34],["super-games.cz",34],["xxx-videos.org",34],["xxxputas.net",34],["mysexgames.com",34],["sexgames.xxx",34],["picdollar.com",34],["pornstargold.com",34],["eroticity.net",34],["striptube.net",34],["xcity.org",34],["porncoven.com",34],["imgstar.eu",34],["pics4upload.com",34],["ahegaoporn.net",34],["myporntape.com",34],["asianlbfm.net",34],["schoolgirls-asia.org",34],["luxuretv.com",35],["otomi-games.com",35],["redhdtube.xxx",35],["rat.xxx",35],["hispasexy.org",[35,216]],["javplay.me",35],["watchimpracticaljokers.com",35],["zerion.cc",35],["javcock.com",35],["leviathanmanga.com",35],["gayfor.us",35],["juegosgratisonline.com.ar",35],["levelupalone.com",35],["x-x-x.tube",35],["javboys.com",35],["javball.com",35],["adictox.com",35],["feed2all.org",35],["platinmods.com",36],["fotbolltransfers.com",36],["freebitcoin.win",36],["coindice.win",36],["live-tv-channels.org",36],["faucethero.com",[36,42]],["faresgame.com",36],["fc.lc",[36,106]],["freebcc.org",[36,106]],["eio.io",[36,106]],["exee.io",[36,106]],["exe.app",[36,106]],["multifaucet.org",36],["majalahpendidikan.com",36],["jaiefra.com",36],["czxxx.org",36],["sh0rt.cc",36],["fussball.news",36],["orangespotlight.com",36],["ar-atech.blogspot.com",36],["clixwarez.blogspot.com",36],["theandroidpro.com",36],["zeeebatch.blogspot.com",36],["layarkaca21indo.com",36],["iptvspor.com",36],["plugincim.com",36],["fivemturk.com",36],["sosyalbilgiler.net",36],["mega-hentai2.blogspot.com",36],["gun-otaku.blogspot.com",36],["tech5s.co",36],["ez4mods.com",36],["kollhong.com",36],["getmega.net",36],["verteleseriesonline.com",36],["imintweb.com",36],["eoreuni.com",36],["comousarzararadio.blogspot.com",36],["popsplit.us",36],["digitalstudiome.com",36],["nightfallnews.com",36],["mypussydischarge.com",[36,42]],["kontrolkalemi.com",36],["arabianbusiness.com",36],["eskiceviri.blogspot.com",36],["dj-figo.com",36],["blasianluvforever.com",36],["wgzimmer.ch",36],["familyrenders.com",36],["daburosubs.com",36],["androidgreek.com",36],["iade.com",36],["smallpocketlibrary.com",36],["hidefninja.com",36],["orangeptc.com",36],["share1223.com",36],["7misr4day.com",36],["aquiyahorajuegos.net",36],["worldofbin.com",36],["googledrivelinks.com",36],["98zero.com",36],["tpaste.io",36],["g9g.eu",36],["netu.ac",37],["vidscdns.com",37],["onscreens.me",[37,115,311]],["video.q34r.org",[37,115]],["filmoviplex.com",[37,115]],["movie4night.com",[37,115]],["srt.am",38],["ticonsiglio.com",39],["photos-public-domain.com",41],["civilenggforall.com",41],["sheshaft.com",42],["gotgayporn.com",42],["fetishshrine.com",42],["sleazyneasy.com",42],["vikiporn.com",42],["pornomico.com",[42,67]],["watchhouseonline.net",42],["pornoman.pl",[42,123]],["camseek.tv",42],["xxmovz.com",42],["nonktube.com",42],["pussyspot.net",42],["wildpictures.net",42],["nudogram.com",42],["18girlssex.com",42],["modagamers.com",42],["batporno.com",42],["lebahmovie.com",42],["duit.cc",42],["classicpornbest.com",[42,134]],["desihoes.com",[42,46]],["indianpornvideo.org",42],["porn18sex.com",42],["slaughtergays.com",42],["sexiestpicture.com",42],["line25.com",42],["javtiful.com",42],["manytoon.com",42],["thatav.net",42],["hentaifreak.org",42],["xxgasm.com",42],["kfapfakes.com",42],["xsober.com",42],["sexsaoy.com",42],["ashemaletv.com",42],["beurettekeh.com",42],["celibook.com",42],["gourmandix.com",42],["sexetag.com",42],["hd44.net",42],["dirtyfox.net",42],["babestube.com",42],["momvids.com",42],["porndr.com",42],["deviants.com",42],["freehardcore.com",42],["lesbian8.com",[42,271]],["eztv-torrent.net",42],["spicyandventures.com",42],["watchmdh.to",42],["sarapbabe.com",42],["rule34porn.net",42],["fullxxxporn.net",42],["qqxnxx.com",42],["xnxx-downloader.net",42],["comicspornow.com",42],["mult34.com",42],["xxxvideotube.net",42],["javqis.com",42],["onlyhotleaks.com",42],["35volitantplimsoles5.com",42],["amateurblog.tv",42],["fashionblog.tv",42],["latinblog.tv",42],["silverblog.tv",42],["tokyoblog.tv",42],["xblog.tv",42],["peladas69.com",42],["liveru.sx",42],["protege-torrent.com",42],["freehdinterracialporn.in",42],["titsintops.com",42],["pervclips.com",42],["homemoviestube.com",42],["hdporn.net",[43,44]],["older-mature.net",44],["driveup.sbs",44],["telorku.xyz",44],["watch-my-gf.com",45],["watchmyexgf.net",45],["cartoonporno.xxx",45],["mangoporn.net",46],["area51.porn",46],["sexytrunk.com",46],["teensark.com",46],["tubous.com",[46,83]],["toyoheadquarters.com",46],["spycock.com",46],["barfuck.com",46],["multporn.net",46],["besthugecocks.com",46],["daftporn.com",46],["italianoxxx.com",46],["collegehdsex.com",46],["lustylist.com",46],["yumstories.com",46],["18-teen-porn.com",46],["69teentube.com",46],["girlshd.xxx",46],["home-xxx-videos.com",46],["orgasmlist.com",46],["teensextube.xxx",46],["pornyfap.com",46],["nudistube.com",46],["uporno.xxx",46],["ultrateenporn.com",46],["gosexpod.com",46],["al4a.com",46],["grannysex.name",46],["porntb.com",46],["scopateitaliane.it",46],["sexbox.online",46],["teenpornvideo.sex",46],["twatis.com",[46,60]],["flashingjungle.com",46],["fetishburg.com",46],["privateindianmovies.com",46],["soyoungteens.com",46],["gottanut.com",46],["uiporn.com",46],["xcafe.com",46],["gfsvideos.com",46],["home-made-videos.com",46],["tbib.org",46],["sensualgirls.org",46],["ariestube.com",46],["asian-teen-sex.com",46],["18asiantube.com",46],["wholevideos.com",46],["asianporntube69.com",46],["babeswp.com",46],["bangyourwife.com",46],["bdsmslavemovie.com",46],["bdsmwaytube.com",46],["bestmaturewomen.com",46],["classicpornvids.com",46],["pornpaw.com",46],["dawntube.com",46],["desimmshd.com",46],["dirtytubemix.com",46],["plumperstube.com",46],["enormousbabes.net",46],["exclusiveindianporn.com",46],["figtube.com",46],["amateur-twink.com",46],["freeboytwinks.com",46],["freegrannyvids.com",46],["freexmovs.com",46],["freshbbw.com",46],["frostytube.com",46],["fuckhottwink.com",46],["fuckslutsonline.com",46],["gameofporn.com",46],["gayboyshd.com",46],["getitinside.com",[46,104]],["giantshemalecocks.com",46],["erofus.com",46],["hd-tube-porn.com",46],["hardcorehd.xxx",46],["hairytwat.org",46],["iwantmature.com",46],["justababes.com",46],["juicyflaps.com",46],["jenpornuj.cz",46],["javteentube.com",46],["hard-tube-porn.com",46],["klaustube.com",46],["kaboomtube.com",46],["lustyspot.com",46],["lushdiaries.com",46],["lovelynudez.com",[46,129]],["dailyangels.com",46],["ljcam.net",46],["myfreemoms.com",46],["nakenprat.com",46],["oldgrannylovers.com",46],["ohueli.net",46],["pornuploaded.net",46],["pornstarsadvice.com",46],["bobs-tube.com",46],["pornohaha.com",46],["pornmam.com",46],["pornhegemon.com",46],["pornabcd.com",46],["porn-hd-tube.com",46],["thehentaiworld.com",46],["pantyhosepink.com",46],["queenofmature.com",46],["realvoyeursex.com",46],["realbbwsex.com",46],["rawindianporn.com",46],["onlygoldmovies.com",46],["rainytube.com",46],["stileproject.com",46],["slutdump.com",46],["nastybulb.com",46],["sextube-6.com",46],["porntubegf.com",46],["sassytube.com",46],["smplace.com",46],["maturell.com",46],["nudemilfwomen.com",46],["pornoplum.com",46],["widewifes.com",46],["wowpornlist.xyz",46],["vulgarmilf.com",46],["oldgirlsporn.com",46],["freepornrocks.com",46],["get-to.link",[46,70]],["beegsexxx.com",46],["watchpornx.com",[46,153]],["ytboob.com",46],["saradahentai.com",46],["hentaiarena.com",46],["absolugirl.com",46],["absolutube.com",46],["allafricangirls.net",46],["asianpornphoto.net",46],["freexxxvideos.pro",46],["videosxxxporno.gratis",46],["nude-teen-18.com",46],["xemales.com",46],["szexkepek.net",46],["wife-home-videos.com",46],["sexmadeathome.com",46],["nylondolls.com",46],["milforia.com",46],["teensfuck.me",46],["erogen.su",46],["imgprime.com",47],["ondemandkorea.com",48],["bdsmx.tube",49],["mrgay.com",49],["pornxs.com",50],["dailygeekshow.com",52],["rue89lyon.fr",53],["onlinemschool.com",54],["bigtitsxxxsex.com",56],["zmovs.com",56],["ceesty.com",57],["corneey.com",57],["destyy.com",57],["festyy.com",57],["gestyy.com",57],["lavozdigital.es",57],["tnaflix.com",58],["angelgals.com",60],["babesexy.com",60],["hotbabeswanted.com",60],["nakedgirlsroom.com",60],["sexybabes.club",60],["sexybabesart.com",60],["favefreeporn.com",60],["onlygayvideo.com",60],["peachytube.com",60],["stepsisterfuck.me",60],["pornhost.com",61],["locopelis.com",[62,63,64]],["repelis.net",62],["perfectmomsporn.com",65],["donkparty.com",68],["streamdreams.org",70],["bdsmporn.cc",70],["cocoporn.net",70],["dirtyporn.cc",70],["faperplace.com",70],["freeadultvideos.cc",70],["freepornstream.cc",70],["generalpornmovies.com",70],["kinkyporn.cc",70],["moviesxxx.cc",70],["movstube.net",70],["onlinefetishporn.cc",70],["peetube.cc",70],["pornonline.cc",70],["porntube18.cc",70],["streamextreme.cc",70],["streamporn.cc",70],["videoxxx.cc",70],["watchporn.cc",70],["x24.video",70],["xxx24.vip",70],["xxxonline.cc",70],["xxxonlinefree.com",70],["xxxopenload.com",70],["gonzoporn.cc",70],["onlinexxx.cc",70],["tvporn.cc",70],["allporncomic.com",70],["thepiratebay.org",70],["videosection.com",70],["pornky.com",70],["tubxporn.com",70],["imgcredit.xyz",70],["desixxxtube.org",70],["freeindianporn2.com",70],["kashtanka2.com",70],["kompoz2.com",70],["pakistaniporn2.com",70],["mangahere.onl",[74,173]],["worldfreeware.com",75],["ellibrepensador.com",75],["rexdlfile.com",75],["sfastwish.com",76],["films5k.com",76],["juicywest.com",76],["fakyutube.com",76],["mm9842.com",76],["mm9846.com",76],["javmvp.com",76],["watch-jav-english.live",76],["0gogle.com",76],["videobot.stream",76],["vidohd.com",76],["kitabmarkaz.xyz",76],["javplaya.com",76],["japopav.tv",76],["streamm4u.club",76],["fembed-hd.com",76],["nekolink.site",76],["suzihaza.com",76],["mycloudzz.com",76],["javpoll.com",76],["javleaked.com",76],["pornhole.club",76],["jvembed.com",76],["megafilmeshdonline.org",76],["jav247.top",76],["nashstream.top",76],["mavavid.com",76],["diampokusy.com",76],["vidmedia.top",76],["moviepl.xyz",76],["superplayxyz.club",76],["viplayer.cc",76],["nsfwzone.xyz",76],["embed-media.com",76],["zojav.com",76],["javenglish.me",76],["pornhubed.com",76],["playerjavseen.com",76],["javsubbed.xyz",76],["xsub.cc",76],["fembed9hd.com",76],["onscreensvideo.com",76],["gaymovies.top",76],["guccihide.com",76],["streamhide.to",76],["vidhidevip.com",76],["cloudrls.com",76],["embedwish.com",76],["fc2stream.tv",76],["javhahaha.us",76],["javlion.xyz",76],["javibe.net",76],["jvideo.xyz",76],["kissmovies.net",76],["nudecelebforum.com",77],["pronpic.org",78],["chyoa.com",79],["thisisfutbol.com",80],["pcwelt.de",81],["sixsistersstuff.com",82],["insidemarketing.it",85],["worldaide.fr",85],["asmwall.com",85],["vermangasporno.com",86],["celebjihad.com",86],["dirtyship.com",86],["celebmasta.com",86],["fullporner.com",[86,331]],["lejdd.fr",87],["gamekult.com",87],["bharian.com.my",87],["thememypc.net",88],["cityam.com",89],["inhabitat.com",90],["speedtest.net",92],["livingstondaily.com",92],["goafricaonline.com",93],["poedb.tw",94],["link.tl",95],["lnk.news",96],["lnk.parts",96],["candid.tube",97],["purelyceleb.com",97],["piraproxy.app",97],["nosteamgames.ro",97],["zootube1.com",98],["xxxtubezoo.com",98],["zooredtube.com",98],["videos1002.com",99],["sab.bz",99],["javseen.tv",99],["autobild.de",101],["alimaniac.com",102],["1xxx-tube.com",104],["asssex-hd.com",104],["bigcockfreetube.com",104],["bigdickwishes.com",104],["enjoyfuck.com",104],["freemomstube.com",104],["fuckmonstercock.com",104],["gobigtitsporn.com",104],["gofetishsex.com",104],["hard-tubesex.com",104],["hd-analporn.com",104],["hiddencamstube.com",104],["kissmaturestube.com",104],["lesbianfantasyxxx.com",104],["modporntube.com",104],["pornexpanse.com",104],["pornokeep.com",104],["pussytubeebony.com",104],["tubesex.me",104],["vintagesexpass.com",104],["voyeur-pornvideos.com",104],["voyeurspyporn.com",104],["voyeurxxxfree.com",104],["xxxtubenote.com",104],["yummysextubes.com",104],["nakedarab-tube.com",104],["xxxtubepass.com",104],["yestubemature.com",104],["yourhomemadetube.com",104],["yourtranny-sex.com",104],["tubexxxone.com",104],["airsextube.com",104],["asianbabestube.com",104],["bigtitsxxxfree.com",104],["blowjobpornset.com",104],["entertubeporn.com",104],["finexxxvideos.com",104],["freesexvideos24.com",104],["fuckhairygirls.com",104],["gopornindian.com",104],["grandmatube.pro",104],["grannyfucko.com",104],["grannyfuckxxx.com",104],["hiddencamhd.com",104],["hindiporno.pro",104],["indianbestporn.com",104],["japanesemomsex.com",104],["japanxxxass.com",104],["massagefreetube.com",104],["maturepussies.pro",104],["megajapansex.com",104],["new-xxxvideos.com",104],["xxxblowjob.pro",104],["xxxtubegain.com",104],["xxxvideostrue.com",104],["acutetube.net",104],["agedtubeporn.com",104],["agedvideos.com",104],["onlinegrannyporn.com",104],["freebigboobsporn.com",104],["tubeinterracial-porn.com",104],["best-xxxvideos.com",104],["bestanime-xxx.com",104],["blowxxxtube.com",104],["callfuck.com",104],["teenhubxxx.com",104],["tubepornasian.com",104],["xxxtubedot.com",104],["blowjobfucks.com",104],["dirtyasiantube.com",104],["maturewomenfucks.com",104],["pornmaturetube.com",104],["setfucktube.com",104],["tourporno.com",104],["do-xxx.com",104],["dotfreesex.com",104],["dotfreexxx.com",104],["easymilftube.net",104],["electsex.com",104],["fineretroporn.com",104],["freehqtube.com",104],["freshmaturespussy.com",104],["freshsexxvideos.com",104],["fuckedporno.com",104],["gallant-matures.com",104],["hqhardcoreporno.com",104],["girlssexxxx.com",104],["glamourxxx-online.com",104],["vintagepornnew.com",104],["tubevintageporn.com",104],["goxxxvideos.com",104],["grouppornotube.com",104],["hqxxxmovies.com",104],["hqsex-xxx.com",104],["hqamateurtubes.com",104],["hotpussyhubs.com",104],["hdpornteen.com",104],["indecentvideos.com",104],["ifreefuck.com",104],["kittyfuckstube.com",104],["lightxxxtube.com",104],["momstube-porn.com",104],["modelsxxxtube.com",104],["milfpussy-sex.com",104],["nicexxxtube.com",104],["neatpornodot.com",104],["neatfreeporn.com",104],["bigtitsporn-tube.com",104],["tubehqxxx.com",104],["nakedbbw-sex.com",104],["onlineteenhub.com",104],["online-xxxmovies.com",104],["pussyhothub.com",104],["pornxxxplace.com",104],["pornoteensex.com",104],["pornonote.pro",104],["pornoaid.com",104],["pornclipshub.com",104],["whitexxxtube.com",104],["sweetadult-tube.com",104],["sweet-maturewomen.com",104],["sexyoungclips.com",104],["sexymilfsearch.com",104],["sextubedot.com",104],["hqmaxporn.com",104],["sexlargetube.com",104],["sexhardtubes.com",104],["tubepornstock.com",104],["xfuckonline.com",104],["sheamateur.com",105],["cuts-url.com",106],["exe.io",[106,179]],["adsafelink.com",106],["modebaca.com",106],["cutdl.xyz",106],["shurt.pw",[106,263]],["smoner.com",106],["droplink.co",106],["ez4short.com",106],["try2link.com",[106,219]],["jameeltips.us",106],["blog.linksfire.co",106],["recipestutorials.com",106],["shrinkforearn.in",106],["qthang.net",106],["linksly.co",106],["curto.win",106],["imagenesderopaparaperros.com",106],["shortenbuddy.com",106],["apksvip.com",106],["4cash.me",106],["teknomuda.com",106],["savelink.site",106],["samaa-pro.com",106],["miklpro.com",106],["modapk.link",106],["ccurl.net",106],["linkpoi.me",106],["pewgame.com",106],["crazyblog.in",106],["gtlink.co",106],["rshrt.com",106],["dz-linkk.com",106],["adurly.cc",106],["link.asiaon.top",106],["download.sharenulled.net",106],["beingtek.com",106],["adlinkweb.com",106],["swzz.xyz",106],["cutp.in",106],["gsm-solution.com",107],["gomo.to",108],["dlapk4all.com",108],["popmatters.com",109],["planetf1.com",109],["austin.culturemap.com",109],["northern-scot.co.uk",109],["icy-veins.com",110],["bidouillesikea.com",110],["girlsgogames.co.uk",111],["godtube.com",111],["ringsidenews.com",111],["advocate.com",111],["alternet.org",111],["androidcure.com",111],["arobasenet.com",111],["attackofthefanboy.com",111],["bodytr.com",111],["clutchpoints.com",111],["cultofmac.com",111],["currentaffairs.gktoday.in",111],["dailycaller.com",111],["digitalmusicnews.com",111],["dogtime.com",111],["dotesports.com",111],["epicstream.com",111],["fallbrook247.com",111],["feral-heart.com",111],["gamesgames.com",111],["gamerevolution.com",111],["gazettenet.com",111],["insidenova.com",111],["jetztspielen.de",111],["kasvekuvvet.net",111],["leitesculinaria.com",111],["nbcnews.com",111],["notevibes.com",111],["practicalpainmanagement.com",111],["prad.de",111],["progameguides.com",111],["pwinsider.com",111],["realityblurb.com",[111,233]],["ruinmyweek.com",111],["sanangelolive.com",111],["sanfoundry.com",111],["selfhacked.com",111],["siliconera.com",111],["simpleflying.com",111],["son.co.za",111],["sporcle.com",111],["stealthoptional.com",111],["thesportster.com",111],["upi.com",111],["viraliq.com",111],["visualcapitalist.com",111],["wegotthiscovered.com",111],["primagames.com",111],["truetrophies.com",112],["alcasthq.com",113],["mzee.com",113],["supforums.com",114],["player.xxxbestsites.com",115],["player.tabooporns.com",115],["wiztube.xyz",115],["megatube.xxx",115],["hot-cartoon.com",115],["richhioon.eu",115],["wowstream.top",115],["xxvideoss.net",115],["player.subespanolvip.com",115],["vidcdn.co",[115,302]],["justswallows.net",115],["wilifilm.net",115],["rpdrlatino.live",115],["pbtube.co",115],["streaming-french.net",115],["koreanbj.club",115],["monstream.org",115],["player.hdgay.net",115],["cdngee.com",115],["fshd3.club",115],["hd-streaming.net",115],["streaming-french.org",115],["telenovelas-turcas.com.es",115],["gocurrycracker.com",117],["xcums.com",117],["ihub.live",117],["naturalbd.com",117],["freeuseporn.com",117],["salamanca24horas.com",118],["bollywoodshaadis.com",119],["ngelag.com",120],["huim.com",121],["cambay.tv",124],["caminspector.net",124],["camwhorespy.com",124],["camwhoria.com",124],["camgoddess.tv",124],["zemporn.com",125],["wpgdadatong.com",126],["wikifeet.com",127],["root-top.com",128],["allmomsex.com",129],["allnewindianporn.com",129],["analxxxvideo.com",129],["animalextremesex.com",129],["anime3d.xyz",129],["animefuckmovies.com",129],["animepornfilm.com",129],["animesexbar.com",129],["animesexclip.com",129],["animexxxsex.com",129],["animexxxfilms.com",129],["anysex.club",129],["apetube.asia",129],["asianfuckmovies.com",129],["asianfucktube.com",129],["asianporn.sexy",129],["asiansexcilps.com",129],["beeg.fund",129],["beegvideoz.com",129],["bestasiansex.pro",129],["bravotube.asia",129],["brutalanimalsfuck.com",129],["candyteenporn.com",129],["daddyfuckmovies.com",129],["desifuckonline.com",129],["exclusiveasianporn.com",129],["exteenporn.com",129],["fantasticporn.net",129],["fantasticyoungporn.com",129],["fineasiansex.com",129],["firstasianpussy.com",129],["freeindiansextube.com",129],["freepornasians.com",129],["freerealvideo.com",129],["fuck-beeg.com",129],["fuck-xnxx.com",129],["fuckasian.pro",129],["fuckfuq.com",129],["fuckundies.com",129],["gojapaneseporn.com",129],["golderotica.com",129],["goodyoungsex.com",129],["goyoungporn.com",129],["hardxxxmoms.com",129],["hdvintagetube.com",129],["hentaiporn.me",129],["hentaisexfilms.com",129],["hentaisexuality.com",129],["hot-teens-movies.mobi",129],["hotanimepornvideos.com",129],["hotanimevideos.com",129],["hotasianpussysex.com",129],["hotjapaneseshows.com",129],["hotmaturetube.com",129],["hotmilfs.pro",129],["hotorientalporn.com",129],["hotpornyoung.com",129],["hotxxxjapanese.com",129],["hotxxxpussy.com",129],["indiafree.net",129],["indianpornvideo.online",129],["japanpornclip.com",129],["japanesetube.video",129],["japansex.me",129],["japanesexxxporn.com",129],["japansporno.com",129],["japanxxx.asia",129],["japanxxxworld.com",129],["keezmovies.surf",129],["lingeriefuckvideo.com",129],["liveanimalporn.zooo.club",129],["madhentaitube.com",129],["megahentaitube.com",129],["megajapanesesex.com",129],["megajapantube.com",129],["milfxxxpussy.com",129],["momsextube.pro",129],["momxxxass.com",129],["monkeyanimalporn.com",129],["moviexxx.mobi",129],["newanimeporn.com",129],["newjapanesexxx.com",129],["nicematureporn.com",129],["nudeplayboygirls.com",129],["openxxxporn.com",129],["originalindianporn.com",129],["originalteentube.com",129],["pig-fuck.com",129],["plainasianporn.com",129],["popularasianxxx.com",129],["pornanimetube.com",129],["pornasians.pro",129],["pornhat.asia",129],["pornjapanesesex.com",129],["pornomovies.asia",129],["pornvintage.tv",129],["primeanimesex.com",129],["realjapansex.com",129],["realmomsex.com",129],["redsexhub.com",129],["retroporn.world",129],["retrosexfilms.com",129],["sex-free-movies.com",129],["sexanimesex.com",129],["sexanimetube.com",129],["sexjapantube.com",129],["sexmomvideos.com",129],["sexteenxxxtube.com",129],["sexxxanimal.com",129],["sexyoungtube.com",129],["sexyvintageporn.com",129],["sopornmovies.com",129],["spicyvintageporn.com",129],["sunporno.club",129],["tabooanime.club",129],["teenextrem.com",129],["teenfucksex.com",129],["teenhost.net",129],["teensexass.com",129],["tnaflix.asia",129],["totalfuckmovies.com",129],["totalmaturefuck.com",129],["txxx.asia",129],["voyeurpornsex.com",129],["warmteensex.com",129],["wetasiancreampie.com",129],["wildhentaitube.com",129],["wowyoungsex.com",129],["xhamster-art.com",129],["xmovie.pro",129],["xnudevideos.com",129],["xnxxjapon.com",129],["xpics.me",129],["xvide.me",129],["xxxanimefuck.com",129],["xxxanimevideos.com",129],["xxxanimemovies.com",129],["xxxhentaimovies.com",129],["xxxhothub.com",129],["xxxjapaneseporntube.com",129],["xxxlargeporn.com",129],["xxxmomz.com",129],["xxxpornmilf.com",129],["xxxpussyclips.com",129],["xxxpussysextube.com",129],["xxxretrofuck.com",129],["xxxsex.pro",129],["xxxsexyjapanese.com",129],["xxxteenyporn.com",129],["xxxvideo.asia",129],["xxxvideos.ink",129],["xxxyoungtv.com",129],["youjizzz.club",129],["youngpussyfuck.com",129],["dvdporngay.com",131],["software-on.com",131],["kpopjjang.com",[131,178]],["siteunblocked.info",[131,244]],["unblocked.name",[131,244]],["uproxy2.biz",[131,244]],["za.gl",132],["activistpost.com",[133,137]],["ladepeche.fr",134],["jemontremonminou.com",134],["jemontremasextape.com",134],["jemontremabite.com",134],["bitzite.com",[134,177]],["kinoger.ru",135],["moviesapi.club",135],["clasicotas.org",136],["saveshared.com",137],["simpledownload.net",137],["compucalitv.com",138],["blademaster666.com",139],["hot2k.com",139],["luchoedu.org",139],["lupaste.com",139],["pornovenezolano.com.ve",139],["romnation.net",139],["venezporn.com",139],["hubzter.com",140],["collater.al",140],["nzpocketguide.com",140],["volksstimme.de",142],["phonenumber-lookup.info",143],["maniac.de",144],["cambro.tv",145],["filerio.in",145],["call2friends.com",145],["gigaho.com",145],["trendsderzukunft.de",145],["forum.lolesporte.com",145],["mytoolz.net",145],["haoweichi.com",145],["tcheats.com",146],["tobys.dk",146],["sembunyi.in",147],["anime-jl.net",148],["fuckdy.com",149],["bdsmporntub.com",149],["femdomporntubes.com",149],["spellchecker.net",150],["nackte.com",153],["highporn.net",153],["blasensex.com",153],["thegatewaypundit.com",154],["your-daily-girl.com",154],["720pxmovies.blogspot.com",155],["penis-bilder.com",156],["boyfriendtv.com",156],["dansmovies.com",156],["shegotass.info",156],["phimmoiaz.cc",156],["mvidoo.com",156],["imgdawgknuttz.com",157],["m4maths.com",158],["poki-gdn.com",158],["megapornfreehd.com",159],["tonpornodujour.com",160],["absentescape.net",161],["forgepattern.net",161],["vidlink.pro",161],["nflscoop.xyz",161],["tunovelaligera.com",162],["dr-farfar.com",162],["nysainfo.pl",162],["c1ne.co",162],["bleachmx.fr",162],["choq.fm",162],["geeksweb.net",162],["usb-antivirus.com",162],["eroticmv.com",162],["allywebsite.com",162],["ktm2day.com",162],["bezpolitickekorektnosti.cz",163],["protopage.com",164],["topito.com",165],["livesport.ws",167],["citynow.it",168],["variety.com",169],["cuatro.com",170],["mitele.es",170],["telecinco.es",170],["serieslandia.com",171],["softwaredescargas.com",171],["morritastube.xxx",[171,260]],["rawstory.com",172],["post-gazette.com",172],["bilasport.net",174],["yogitimes.com",175],["juba-get.com",176],["percentagecalculator.guru",176],["claim.8bit.ca",[177,231]],["lightnovelpdf.com",177],["ta2deem7arbya.com",177],["adsy.pw",177],["playstore.pw",177],["bootyexpo.net",177],["arbweb.info",177],["solarchaine.com",177],["tokenmix.pro",177],["terafly.me",177],["addtobucketlist.com",177],["alternativa104.net",177],["asumesi.com",177],["ayo24.id",177],["barrier-free.net",177],["berich8.com",177],["bloooog.it",177],["branditechture.agency",177],["chataigpt.org",177],["coinsrev.com",177],["eliobenedetto.it",177],["iamflorianschulze.com",177],["kyoto-kanko.net",177],["limontorrents.com",177],["livenewsof.com",177],["medeberiya1.com",177],["medeberiyax.com",177],["oyundunyasi.net",177],["parrocchiapalata.it",177],["photoshopvideotutorial.com",177],["samovies.net",177],["sulocale.sulopachinews.com",177],["tabering.net",177],["xn--nbkw38mlu2a.com",177],["faucetbravo.fun",177],["vstdrive.in",178],["lonely-mature.com",180],["tubepornclassic.com",181],["the-voice-of-germany.de",182],["adn.com",183],["spokesman.com",184],["news-herald.com",184],["verprogramasonline.com",185],["savealoonie.com",185],["pervertgirlsvideos.com",185],["open3dmodel.com",185],["elmundo.es",186],["expansion.com",186],["marca.com",186],["allusione.org",187],["cyberstumble.com",187],["wickedspot.org",187],["venusarchives.com",187],["freemagazines.top",187],["elektrikmen.com",187],["solotrend.net",187],["itsecuritynews.info",187],["thebharatexpressnews.com",187],["inwepo.co",187],["daemon-hentai.com",187],["toramemoblog.com",187],["7daystodiemods.com",187],["7review.com",187],["asupan.me",187],["avitter.net",187],["bi-girl.net",187],["carryflix.icu",187],["dark5k.com",187],["fairyhorn.cc",187],["gojo2.com",187],["gorecenter.com",187],["huitranslation.com",187],["javhdvideo.org",187],["nakiny.com",187],["nemumemo.com",187],["peppe8o.com",187],["phodoi.vn",187],["savingsomegreen.com",187],["boredbat.com",187],["web.businessuniqueidea.com",187],["questloops.com",187],["spinbot.com",188],["androidonepro.com",189],["arcadepunks.com",190],["wohnungsboerse.net",191],["nbareplayhd.com",193],["convert-case.softbaba.com",193],["thepoorcoder.com",193],["techgeek.digital",193],["warps.club",194],["truyenaudiocv.net",194],["kompasiana.com",195],["spectrum.ieee.org",196],["thenation.com",197],["newsonthegotoday.com",198],["sandiegouniontribune.com",199],["fernsehserien.de",199],["femalefirst.co.uk",200],["theregister.co.uk",201],["sportstream.live",202],["blowjobgif.net",203],["erospots.info",204],["pornforrelax.com",205],["macrumors.com",206],["faupto.com",[207,208]],["dogemate.com",208],["napolipiu.com",209],["manpeace.org",210],["faucetwork.space",210],["gaminginfos.com",210],["png.is",[211,212,213]],["nohat.cc",[212,213]],["fuskator.com",214],["scrubson.blogspot.com",215],["khmer7.org",215],["aquariumgays.com",216],["paginadanoticia.com.br",217],["aylink.co",220],["gitizle.vip",220],["shtms.co",220],["suaurl.com",[221,222]],["blog24.me",223],["exactpay.online",[223,232]],["soltoshindo.com",223],["crypto4yu.com",223],["laweducationinfo.com",224],["savemoneyinfo.com",224],["worldaffairinfo.com",224],["godstoryinfo.com",224],["successstoryinfo.com",224],["cxissuegk.com",224],["learnmarketinfo.com",224],["bhugolinfo.com",224],["armypowerinfo.com",224],["rsadnetworkinfo.com",224],["rsinsuranceinfo.com",224],["rsfinanceinfo.com",224],["rsgamer.app",224],["rssoftwareinfo.com",224],["rshostinginfo.com",224],["rseducationinfo.com",224],["phonereviewinfo.com",224],["makeincomeinfo.com",224],["gknutshell.com",224],["vichitrainfo.com",224],["workproductivityinfo.com",224],["dopomininfo.com",224],["hostingdetailer.com",224],["fitnesssguide.com",224],["tradingfact4u.com",224],["cryptofactss.com",224],["softwaredetail.com",224],["artoffocas.com",224],["insurancesfact.com",224],["travellingdetail.com",224],["currentrecruitment.com",225],["investorveda.com",225],["cookad.net",226],["pmkisanlists.in",226],["shramikcard.in",226],["shareus.io",226],["sportnews.to",226],["gamerxyt.com",226],["faqwiki.us",226],["zeeplayer.pages.dev",226],["techacode.com",227],["azmath.info",227],["downfile.site",227],["downphanmem.com",227],["expertvn.com",227],["memangbau.com",227],["trangchu.news",227],["aztravels.net",227],["techyuth.xyz",228],["claimclicks.com",229],["tejtime24.com",230],["comohoy.com",[230,328]],["cimanow.cc",230],["10convert.com",233],["pleated-jeans.com",233],["obsev.com",233],["wepc.com",233],["gal-dem.com",234],["mymusicreviews.com",235],["thechat.cafe",235],["gaystream.pw",236],["lagacetadesalamanca.es",237],["infocorp.io",238],["addictinggames.com",239],["comparteunclic.com",240],["grab.tc",240],["starbux.io",240],["qashbits.com",240],["upnewsinfo.com",241],["smdailyjournal.com",242],["toolforge.org",243],["getdogecoins.com",245],["malaysiastock.biz",246],["1bit.space",247],["1bitspace.com",247],["ytanime.tv",247],["pimylifeup.com",248],["camwhorez.video",249],["best-shopme.com",250],["cpomagazine.com",251],["doramasyt.com",252],["monoschinos.com",252],["xxxdan.com",253],["standardmedia.co.ke",254],["files.fm",254],["ludwig-van.com",254],["abandonmail.com",255],["hentais.tube",256],["hentaitube.online",256],["aegeanews.gr",257],["batterypoweronline.com",257],["brezovycukr.cz",257],["centrocommercialevulcano.com",257],["cieonline.co.uk",257],["commsbusiness.co.uk",257],["dailygrindonline.net",257],["delo.bg",257],["dynastyseries.com",257],["fabmx1.com",257],["fat-bike.com",257],["fmj.co.uk",257],["localemagazine.com",257],["loveourweddingmag.com",257],["metaforespress.gr",257],["myvalley.it",257],["niestatystyczny.pl",257],["primapaginamarsala.it",257],["ringelnatz.net",257],["schoolsweek.co.uk",257],["sikkenscolore.it",257],["sportbet.gr",257],["stadtstudenten.de",257],["stagemilk.com",257],["tautasdziesmas.lv",257],["thetoneking.com",257],["toplickevesti.com",257],["zeroradio.co.uk",257],["miohentai.com",258],["sluttyrat.com",259],["k12reader.com",261],["cachevalleydaily.com",261],["panel.skynode.pro",262],["imag-r.com",262],["atlaq.com",263],["douploads.net",263],["moalm-qudwa.blogspot.com",263],["mcloud.bz",264],["vidstream.pro",264],["radionylive.com",265],["radioitalylive.com",265],["radiolovelive.com",265],["radiocountrylive.com",265],["radiosymphony.com",265],["miamibeachradio.com",265],["radiorockon.com",265],["radioitaliacanada.com",265],["radioitalianmusic.com",265],["radioamericalatina.com",265],["radiosantaclaus.com",265],["radionorthpole.com",265],["radionatale.com",265],["pornvideoq.com",267],["gaminggorilla.com",267],["sexuhot.com",267],["rexxx.org",268],["world4.eu",269],["flinsetyadi.com",269],["trytutorial.com",269],["rimworldbase.com",269],["ifreemagazines.com",269],["romaniataramea.com",270],["amateur8.com",271],["freeporn8.com",271],["maturetubehere.com",271],["sortporn.com",271],["textovisia.com",272],["hotcleaner.com",273],["momo-net.com",274],["hardwarezone.com.sg",275],["b2bhint.com",[277,278]],["baikin.net",277],["unsurcoenlasombra.com",277],["veryfastdownload.pw",280],["nation.africa",281],["manganelo.tv",282],["vermoegen.org",283],["javhub.net",[284,285]],["inhumanity.com",286],["sunci.net",287],["yoykp.com",287],["iguarras.com",288],["iputitas.net",288],["fastream.to",288],["miraculous.to",289],["glotorrents.fr-proxy.com",290],["glotorrents.theproxy.ws",290],["tutele.sx",291],["dirp.me",292],["t18cv.com",293],["codecap.org",294],["integral-calculator.com",295],["derivative-calculator.net",295],["shorttrick.in",296],["sharedisk.me",296],["shrdsk.me",296],["looptorrent.org",296],["noicetranslations.blogspot.com",296],["serviceemmc.com",296],["getcopy.link",297],["basic-tutorials.de",298],["depvailon.com",299],["111.90.150.10",300],["111.90.150.149",300],["111.90.151.26",300],["111.90.141.252",300],["mangahentai.xyz",301],["nhentai.io",[303,304]],["erofound.com",305],["erome.com",306],["flaticon.com",307],["zertalious.xyz",308],["tweakcentral.net",309],["nokiahacking.pl",310],["javct.net",311],["veryfreeporn.com",312],["austiblox.net",313],["linkbin.me",[314,315]],["teachoo.com",317],["maisonbrico.com",318],["vebo1.com",319],["komiklokal.me",320],["seriesmetro.net",321],["blog.textpage.xyz",323],["alliptvlinks.com",323],["kodewebsite.com",324],["qcheng.cc",325],["hygiena.com",326],["netchimp.co.uk",327],["xgroovy.com",329],["ruyashoujo.com",330],["xmateur.com",331],["gktech.uk",332],["x2download.com",333],["familyminded.com",334],["foxvalleyfoodie.com",334],["merriam-webster.com",334],["news.com.au",334],["playstationlifestyle.net",334],["sportsnaut.com",334],["tempumail.com",334],["toledoblade.com",334],["truyen-hentai.com",335],["redd.tube",336],["sendspace.com",337],["leechpremium.net",338],["freethesaurus.com",341],["thefreedictionary.com",341],["counterstrike-hack.leforum.eu",342],["ajt.xooit.org",342],["drivemoe.com",343],["dsharer.com",343],["pupupul.site",344],["fansubseries.com.br",344],["jadoo.lol",345],["sinensistoon.com",346],["usersdrive.com",347],["manoramaonline.com",348],["realmoasis.com",349],["technewsworld.com",350],["rjno1.com",351],["gpldose.com",352],["zinkmovies.in",353],["sbs.com.au",354],["sfr.fr",355],["ericdraken.com",356],["djs.sk",358],["pythonjobshq.com",359],["sensacine.com",361]]);

const entitiesMap = new Map([["wetteronline",3],["ohmymag",6],["pingit",[8,18,25,72]],["oload",[8,18,25,42]],["streamhoe",[8,18]],["123europix",[12,13,25]],["gamestorrents",13],["gogoanimes",13],["limetorrents",13],["piratebayz",13],["europixhd",[13,25]],["hdeuropix",[13,25]],["topeuropix",[13,25]],["grantorrent",[13,91]],["moviescounter",13],["elixx",[13,74]],["telerium",13],["savelinks",13],["hentaisd",13],["mrpiracy",13],["prostoporno",15],["kissasian",16],["bflix",[16,25,264]],["m4ufree",[16,115]],["0123movies",16],["gomovies",16],["lookmovie",[16,36]],["fembed",[16,76]],["mavplay",[16,22,76]],["videobb",[16,22,76,108]],["5movies",16],["123moviesc",16],["proxybit",16],["123movieshd",16],["fbgo",[16,76]],["sbchip",[16,76]],["sbflix",[16,76]],["sbplay",[16,76]],["sbplay2",[16,76]],["sbplay3",[16,76]],["sbrulz",[16,76]],["streamsb",[16,76,279]],["1tamilmv",16],["buffstream",16],["tenies-online",16],["m4uhd",16],["hdhub4u",16],["watchseries9",16],["moviesjoy",16],["torrentstatus",16],["yts2",16],["y2mate",16],["alexsports",16],["2embed",16],["seulink",16],["encurtalink",16],["fmovies",16],["animepahe",[18,30]],["kwik",[18,30]],["1337x.unblocked",18],["1337x.unblockit",[18,20]],["pussyspace",18],["urlcero",18],["shrtfly",[18,59]],["linkshorts",18],["streamcdn",[18,25]],["vinaurl",[18,106]],["komikcast",18],["bolly4u",[18,133]],["tugaflix",18],["hdfriday",18],["123movies",18],["shortearn",[18,25]],["mstream",18],["watch4hd",18],["gdtot",18],["shrink",[18,36,106]],["bluemediafiles",18],["dailysport",[18,25]],["btdb",[18,21]],["linksfire",18],["pureshort",[18,106]],["bluemediadownload",[18,42]],["bluemediafile",[18,42]],["bluemedialink",[18,42]],["bluemediastorage",[18,42]],["bluemediaurls",[18,42]],["urlbluemedia",[18,42]],["link1s",[18,106]],["shorttey",[18,106]],["videoplayer",18],["movizland",18],["sitesunblocked",18],["1377x",18],["bcvc",18],["steamplay",[20,21,22]],["streamp1ay",[21,22]],["topflix",21],["ustream",21],["pixlev",21],["moviessources",21],["steanplay",22],["stemplay",22],["streanplay",22],["txxx",22],["asianclub",[22,25,76]],["pandamovie",24],["speedporn",24],["watchpornfree",24],["silkengirl",[24,34,60]],["mcloud",25],["vizcloud",25],["vizcloud2",25],["ouo",25],["songs",25],["gogoanimetv",25],["daddylive",[25,75]],["pelisplus",25],["streamm4u",25],["inkapelis",25],["ettv",25],["pelix",25],["pnd",25],["0123movie",25],["movies123",25],["piratebay",25],["webbro",25],["javwide",25],["vidhd",25],["mirrorace",25],["thoptv",25],["streamingworld",25],["yesmovies",25],["solarmovie",25],["bdiptv",25],["cinemalibero",25],["pctfenix",[25,139]],["pctnew",[25,139]],["watchgameofthrones",25],["tmearn",[25,106]],["kinoz",[25,42]],["shorten",[25,106,179]],["123animes",[25,108]],["openloadmovies",25],["gdriveplayer",25],["crichd",25],["vipracing",25],["supervideo",25],["ilgeniodellostreaming",25],["superstream",25],["ask4movie",25],["123movies-org",25],["sflix",25],["primetubsub",25],["moviesland",[25,76]],["f2movies",25],["vidsrc",[25,76]],["1337x",[25,288]],["a2zapk",25],["biqle",28],["otakuindo",28],["watchseries",29],["streamtape",29],["vipboxtv",29],["x1337x",29],["streameast",29],["yts",31],["sexvid",[33,166]],["camwhores",[34,97]],["camwhorestv",[34,97]],["rintor",34],["imgsen",[34,69]],["imgsto",[34,69]],["sxyprn",35],["hqq",36],["waaw",[37,115]],["vapley",37],["younetu",37],["player.uwatchfree",[37,115,302]],["waaaw",[37,115]],["waaw1",[37,115]],["123link",[39,40,41]],["cuevana3",[42,100]],["vidcloud",[42,76,115]],["pornid",42],["zbporn",[42,122]],["yomovies",42],["nonsensediamond",42],["xclusivejams",42],["sportlemon",42],["sportlemons",42],["sportlemonx",42],["kinox",42],["remaxhd",42],["img4fap",42],["babeporn",42],["babytorrent",42],["123moviesme",42],["xxxhdvideo",42],["7mmtv",44],["pornhat",46],["porno-tour",46],["desivideos",46],["movie4me",51],["imgdew",[60,69,70]],["imgmaze",[60,70,71]],["imgtown",[60,69,70,71]],["imgview",[60,69,70]],["imgoutlet",[69,70]],["imgrock",[69,71]],["anitube",70],["movisubmalay",[70,108]],["waploaded",70],["dirtyindianporn",70],["indianpornvideos",70],["kashtanka",70],["onlyindianporn",70],["porno18",70],["xxnx",70],["xxxindianporn",70],["thepiratebay",71],["adsrt",72],["stream2watch",74],["peliculas-dvdrip",74],["kinoger",76],["iframejav",76],["mm9844",76],["netxwatch",76],["milfnut",76],["anxcinema",76],["videofilms",76],["prosongs",76],["ncdnstm",76],["filelions",76],["streamwish",76],["bunkr",83],["pouvideo",84],["povvideo",84],["povw1deo",84],["povwideo",84],["powv1deo",84],["powvibeo",84],["powvideo",84],["powvldeo",84],["grantorrent1",91],["subtorrents",[91,103]],["subtorrents1",[91,103]],["filesamba",97],["theproxy",97],["megalink",106],["earnload",106],["miniurl",106],["shrinke",106],["shrinkme",106],["earncash",106],["shortzzy",106],["lite-link",106],["adcorto",106],["dogecoin",106],["upfiles",106],["torrentz2eu",108],["afilmywap",108],["okhatrimaza",108],["123anime",108],["gomoviesfree",108],["player.tormalayalamhd",115],["depedlps",117],["videovard",120],["asiansex",129],["japanfuck",129],["japanporn",129],["teensex",129],["vintagetube",129],["xxxmovies",129],["0l23movies",130],["cloudvideotv",134],["movierulzlink",137],["newmovierulz",137],["3hiidude",137],["ispunlock",141],["tpb",141],["vgmlinks",152],["thestreameast",161],["zone-annuaire",162],["rainanime",173],["blurayufr",177],["tutsnode",187],["web2.0calc",192],["readcomiconline",193],["gplinks",218],["moviehdf",219],["movies4u",226],["movies4u3",226],["azsoft",227],["bg-gledai",235],["bolly4umovies",263],["123movieshub",264],["animeunity",264],["cima-club",264],["flixhq",264],["hindilinks4u",264],["t7meel",264],["bollyholic",276],["cricfree",288],["sportskart",288],["katmoviefix",294],["filemoon",316],["bitporno",322],["brainly",339],["dood",340]]);

const exceptionsMap = new Map([["pingit.com",[8,18,25,72]],["pingit.me",[8,18,25,72]]]);

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
        'String_split': String.prototype.split,
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
            catch {
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
    } catch {
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
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_abortOnPropertyRead();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
