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

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_abortOnPropertyRead = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["Notification"],["embedAddefend"],["navigator.userAgent"],["__eiPb"],["detector"],["SmartAdServerASMI"],["_sp_._networkListenerData"],["AntiAd.check"],["_pop"],["_sp_.mms.startMsg"],["retrievalService"],["admrlWpJsonP"],["InstallTrigger"],["LieDetector"],["newcontent"],["ExoLoader.serve"],["mm"],["stop"],["open"],["ga.length"],["btoa"],["console.clear"],["jwplayer.utils.Timer"],["adblock_added"],["AaDetector"],["popjs.init"],["decodeURI"],["adblock"],["SBMGlobal.run.pcCallback"],["SBMGlobal.run.gramCallback"],["Date.prototype.toUTCString"],["Adcash"],["PopAds"],["runAdblock"],["showAds"],["ExoLoader"],["loadTool"],["popns"],["adBlockDetected"],["doSecondPop"],["RunAds"],["jQuery.adblock"],["ads_block"],["blockAdBlock"],["exoOpts"],["doOpen"],["prPuShown"],["document.dispatchEvent"],["document.createElement"],["pbjs.libLoaded"],["mz"],["_abb"],["Math.floor"],["jQuery.hello"],["isShowingAd"],["oms.ads_detect"],["hasAdBlock"],["ALoader"],["NREUM"],["ads.pop_url"],["tabUnder"],["ExoLoader.addZone"],["exoNoExternalUI38djdkjDDJsio96"],["raConf"],["popTimes"],["smrtSB"],["smrtSP"],["Aloader"],["advobj"],["addElementToBody"],["phantomPopunders"],["CustomEvent"],["exoJsPop101"],["rmVideoPlay"],["r3H4"],["AdservingModule"],["require"],["__Y"],["__ads"],["document.createEvent"],["__NA"],["PerformanceLongTaskTiming"],["proxyLocation"],["Int32Array"],["popMagic.init"],["jwplayer.vast"],["dataPopUnder"],["SmartWallSDK"],["Abd_Detector"],["paywallWrapper"],["registerSlideshowAd"],["getUrlParameter"],["_sp_"],["goafricaSplashScreenAd"],["importFAB"],["_0xbeb9"],["popAdsClickCount"],["_wm"],["popunderSetup"],["jsPopunder"],["S9tt"],["adSSetup"],["document.cookie"],["capapubli"],["Aloader.serve"],["__htapop"],["app_vars.force_disable_adblock"],["_0x32d5"],["decodeURIComponent"],["glxopen"],["CatapultTools"],["adbackDebug"],["googletag"],["$pxy822"],["performance"],["htaUrl"],["BetterJsPop"],["setExoCookie"],["encodeURIComponent"],["ReviveBannerInterstitial"],["Debugger"],["FuckAdBlock"],["isAdEnabled"],["promo"],["_0x311a"],["console.log"],["h1mm.w3"],["checkAdblock"],["NativeAd"],["adblockblock"],["popit"],["rid"],["popad"],["XMLHttpRequest"],["localStorage"],["my_pop"],["nombre_dominio"],["String.fromCharCode"],["redirectURL"],["TID"],["adsanity_ad_block_vars"],["pace"],["TRM"],["pa"],["td_ad_background_click_link"],["onload"],["checkAds"],["popjs"],["detector_launch"],["I833"],["Popunder"],["gPartners"],["Date.prototype.toGMTString"],["initPu"],["jsUnda"],["adtoniq"],["myFunction_ads"],["popunder"],["Pub2a"],["alert"],["V4ss"],["popunders"],["aclib"],["mdpDeBlocker"],["sc_adv_out"],["pageParams.dispAds"],["document.bridCanRunAds"],["pu"],["MessageChannel"],["advads_passive_ads"],["pmc_admanager.show_interrupt_ads"],["$REACTBASE_STATE.serverModules.push"],["scriptwz_url"],["setNptTechAdblockerCookie"],["loadRunative"],["pwparams"],["fuckAdBlock"],["detectAdBlock"],["adsBlocked"],["Base64"],["parcelRequire"],["EviPopunder"],["preadvercb"],["$ADP"],["MG2Loader"],["Connext"],["mdp_deblocker"],["adUnits"],["b2a"],["angular"],["downloadJSAtOnload"],["penci_adlbock"],["Number.isNaN"],["doads"],["adblockDetector"],["adblockDetect"],["initAdserver"],["splashpage.init"],["___tp"],["STREAM_CONFIGS"],["googlefc"],["ppload"],["RegAdBlocking"],["checkABlockP"],["ExoDetector"],["Pub2"],["adver.abFucker.serve"],["adthrive"],["show_ads_gr8_lite"],["disableButtonTimer"],["tie"],["document.write"],["adb_checker"],["ignore_adblock"],["$.prototype.offset"],["ea.add"],["adcashMacros"],["_cpp"],["pareAdblock"],["clickCount"],["popUp"],["xmlhttp"],["document.oncontextmenu"],["shortcut"],["Swal.fire"],["bypass_url"],["document.onmousedown"],["antiAdBlockerHandler"],["SMart1"],["window.open"],["checkAdsBlocked"],["navigator.brave"],["Light.Popup"],["htmls"],["HTMLIFrameElement"],["dsanity_ad_block_vars"],["chp_adblock_browser"],["adsbyjuicy"],["videootv"],["detectAdBlocker"],["Drupal.behaviors.agBlockAdBlock"],["NoAdBlock"],["mMCheckAgainBlock"],["__tnt"],["noAdBlockers"],["GetWindowHeight"],["show_ads"],["google_ad_status"],["u_cfg"],["adthrive.config"],["TotemToolsObject"],["noAdBlock"],["advads_passive_groups"],["GLX_GLOBAL_UUID_RESULT"],["document.head.appendChild"],["canRunAds"],["indexedDB.open"],["checkCookieClick"],["wpsite_clickable_data"],["mnpwclone"],["SluttyPops"],["sites_urls_pops"],["rccbase_styles"],["adBlockerDetected"],["zfgformats"],["zfgstorage"],["adp"],["popundrCheck"],["history.replaceState"],["rexxx.swp"],["ai_run_scripts"],["bizpanda"],["Q433"],["isAdBlockActive"],["Element.prototype.attachShadow"],["document.body.appendChild"],["SPHMoverlay"],["disableDeveloperTools"],["google_jobrunner"],["popupBlocker"],["DoodPop"],["SmartPopunder.make"],["evolokParams.adblock"],["JSON.parse"],["document.referrer"],["cainPopUp"],["pURL"],["inhumanity_pop_var_name"],["app_vars.please_disable_adblock"],["afScript"],["history.back"],["String.prototype.charCodeAt"],["Overlayer"],["puShown"],["remove_adblock_html"],["Request"],["fallbackAds"],["checkAdsStatus"],["lck"],["advanced_ads_ready"],["_conf.pops"],["PvVideoSlider"],["preroll_helper.advs"],["loadXMLDoc"],["arrvast"],["Script_Manager"],["Script_Manager_Time"],["document.body.insertAdjacentHTML"],["tic"],["pu_url"],["onAdblockerDetected"],["checkBlock"],["adsbygoogle.loaded"],["asgPopScript"],["Object"],["document.body.innerHTML"],["Object.prototype.loadCosplay"],["Object.prototype.loadImages"],["FMPoopS"],["importantFunc"],["console.warn"],["adsRedirectPopups"],["JuicyPop"],["afStorage"],["_run"],["eazy_ad_unblocker"],["detectAdblock"],["jQuery.popunder"],["killAdKiller"],["aoAdBlockDetected"],["ai_wait_for_jquery"],["checkAdBlock"],["VAST"],["eazy_ad_unblocker_dialog_opener"],["adConfig"],["onscroll"],["GeneratorAds"],["__cmpGdprAppliesGlobally"],["player.vroll"],["aab"],["config"],["runad"],["atob"],["__brn_private_mode"],["__aaZoneid"],["adc"],["document.body.style.backgroundPosition"],["showada"],["popUrl"],["Promise.all"],["block_ads"],["popurl"],["EV.Dab"],["Object.prototype.popupOpened"],["pum_popups"],["document.documentElement.clientWidth"],["Dataffcecd"],["app_advert"],["odabd"],["_oEa"],["dataLayer"],["WebAssembly"],["miner"],["Keen"],["MONETIZER101.init"],["JadIds"]];

const hostnamesMap = new Map([["tagesspiegel.de",0],["vivud.com",[0,13,26,57]],["gtaall.com",0],["worldsex.com",[0,47]],["jizzbunker.com",[0,133]],["dailymail.co.uk",0],["n-tv.de",1],["aranzulla.it",2],["anallievent.com",3],["au-di-tions.com",3],["badgehungry.com",3],["beingmelody.com",3],["bloggingawaydebt.com",3],["casutalaurei.ro",3],["cornerstoneconfessions.com",3],["culture-informatique.net",3],["dearcreatives.com",3],["disneyfashionista.com",3],["divinelifestyle.com",3],["dna.fr",3],["eslauthority.com",3],["estrepublicain.fr",3],["fitting-it-all-in.com",3],["heresyoursavings.com",3],["irresistiblepets.net",3],["julieseatsandtreats.com",3],["justjared.com",3],["lecturisiarome.ro",3],["lemonsqueezyhome.com",3],["libramemoria.com",3],["lovegrowswild.com",3],["magicseaweed.com",3],["measuringflower.com",3],["mjsbigblog.com",3],["mommybunch.com",3],["mustardseedmoney.com",3],["myfunkytravel.com",3],["onetimethrough.com",3],["panlasangpinoymeatrecipes.com",3],["silverpetticoatreview.com",3],["the-military-guide.com",3],["therelaxedhomeschool.com",3],["the2seasons.com",3],["zeroto60times.com",3],["barefeetonthedashboard.com",3],["bargainbriana.com",3],["betterbuttchallenge.com",3],["bike-urious.com",3],["blwideas.com",3],["eartheclipse.com",3],["entertainment-focus.com",3],["fanatik.com.tr",3],["foreverconscious.com",3],["foreversparkly.com",3],["getdatgadget.com",3],["goodnewsnetwork.org",3],["greenarrowtv.com",3],["hbculifestyle.com",3],["heysigmund.com",3],["hodgepodgehippie.com",3],["homestratosphere.com",3],["indesignskills.com",3],["katiescucina.com",3],["knowyourphrase.com",3],["letsworkremotely.com",3],["lizs-early-learning-spot.com",3],["ledauphine.com",3],["leprogres.fr",3],["milliyet.com.tr",3],["pinoyrecipe.net",3],["prepared-housewives.com",3],["recipesforourdailybread.com",3],["redcarpet-fashionawards.com",3],["republicain-lorrain.fr",3],["savespendsplurge.com",3],["savingadvice.com",3],["shutupandgo.travel",3],["spring.org.uk",3],["stevivor.com",3],["tamaratattles.com",3],["tastefullyeclectic.com",3],["theavtimes.com",3],["thechroniclesofhome.com",3],["thisisourbliss.com",3],["tinyqualityhomes.org",3],["turtleboysports.com",3],["ultimateninjablazingx.com",3],["universfreebox.com",3],["utahsweetsavings.com",3],["vgamerz.com",3],["wheatbellyblog.com",3],["yummytummyaarthi.com",3],["ranker.com",[3,112]],["fluentu.com",3],["cdiscount.com",3],["damndelicious.net",3],["simplywhisked.com",3],["timesofindia.com",4],["bild.de",5],["sueddeutsche.de",6],["20min.ch",6],["al.com",6],["alphr.com",6],["autoexpress.co.uk",6],["bikeradar.com",6],["blick.ch",6],["chefkoch.de",6],["cyclingnews.com",[6,364]],["digitalspy.com",6],["democratandchronicle.com",6],["denofgeek.com",6],["esgentside.com",6],["evo.co.uk",6],["exclusivomen.com",6],["ft.com",6],["gala.de",6],["gala.fr",6],["heatworld.com",6],["itpro.co.uk",6],["livingathome.de",6],["masslive.com",6],["maxisciences.com",6],["metabomb.net",6],["mlive.com",6],["motherandbaby.co.uk",6],["motorcyclenews.com",6],["muthead.com",6],["neonmag.fr",6],["newyorkupstate.com",6],["ngin-mobility.com",6],["nj.com",6],["nola.com",6],["ohmirevista.com",6],["oregonlive.com",6],["pennlive.com",6],["programme.tv",6],["programme-tv.net",6],["radiotimes.com",6],["silive.com",6],["simplyvoyage.com",6],["stern.de",6],["syracuse.com",6],["theweek.co.uk",6],["ydr.com",6],["usatoday.com",6],["schoener-wohnen.de",6],["thewestmorlandgazette.co.uk",6],["news-leader.com",6],["closeronline.co.uk",6],["etonline.com",6],["bilan.ch",6],["doodle.com",6],["techradar.com",6],["daily-times.com",6],["wirralglobe.co.uk",6],["annabelle.ch",6],["pcgamer.com",6],["nintendolife.com",6],["gamer.com.tw",7],["skidrowcodexgames.com",8],["22pixx.xyz",[8,61,75]],["durtypass.com",8],["anime-odcinki.pl",8],["gaypornwave.com",[8,35]],["pngit.live",[8,18,24,73]],["gratispaste.com",[8,75]],["animotvslashz.blogspot.com",8],["eltern.de",9],["essen-und-trinken.de",9],["focus.de",9],["eurogamer.de",9],["eurogamer.es",9],["eurogamer.it",9],["eurogamer.net",9],["eurogamer.pt",9],["rockpapershotgun.com",9],["vg247.com",9],["urbia.de",9],["elpasotimes.com",9],["femina.ch",9],["northwalespioneer.co.uk",9],["codeproject.com",10],["cwseed.com",11],["pocketnow.com",12],["7r6.com",[13,21,106]],["reddflix.com",[13,18]],["bostoncommons.net",13],["opisanie-kartin.com",13],["painting-planet.com",13],["kropic.com",[13,26]],["mp4mania1.net",13],["livegore.com",13],["down-paradise.com",[13,77]],["kioven.com",13],["pngio.com",13],["iobit.com",13],["send.cm",13],["rule34.xxx",14],["realbooru.com",15],["alrincon.com",[15,18,36]],["realgfporn.com",[15,35]],["pornhd.com",[15,56]],["pornhdin.com",[15,18]],["pornomovies.com",[15,26]],["bdsmstreak.com",15],["freepornvideo.sex",15],["teenpornvideo.xxx",15],["yourlust.com",15],["imx.to",15],["mypornstarbook.net",15],["japanesefuck.com",15],["imgtorrnt.in",[15,47]],["pandamovies.pw",[15,47]],["club-flank.com",15],["streamporn.pw",15],["watchfreexxx.net",[15,35,152,153,154]],["dump.xxx",[15,18]],["fuqer.com",[15,18]],["tmohentai.com",15],["xopenload.me",15],["losporn.org",15],["bravoerotica.com",15],["xasiat.com",[15,72]],["redporno.cz",15],["vintageporntubes.com",15],["xxxvideos247.com",15],["young-pussy.com",15],["kingsofteens.com",15],["24pornvideos.com",15],["2japaneseporn.com",15],["xxxvideor.com",15],["youngleak.com",15],["zhlednito.cz",15],["8teenxxx.com",15],["activevoyeur.com",15],["allschoolboysecrets.com",15],["boobsforfun.com",15],["breedingmoms.com",15],["cockmeter.com",[15,47]],["collegeteentube.com",15],["cumshotlist.com",15],["porn0.tv",15],["ritzysex.com",15],["ritzyporn.com",15],["sexato.com",15],["javbobo.com",[15,62]],["sokobj.com",15],["youlikeboys.com",[15,75]],["needgayporn.com",15],["zetporn.com",15],["keephealth.info",16],["123moviesjr.cc",16],["123moviesd.com",16],["123moviess.se",16],["cloudvideo.tv",16],["googlvideo.com",16],["easyexploits.com",16],["azm.to",16],["anigogo.net",[16,77]],["kinoking.cc",16],["lvturbo.com",16],["sbbrisk.com",[16,77]],["sbchill.com",[16,77]],["sbrity.com",[16,77]],["viewsb.com",[16,77]],["watchdoctorwhoonline.com",16],["toxicwap.us",16],["yodbox.com",16],["coverapi.store",16],["masahub.net",[16,26]],["lalastreams.me",16],["hblinks.pro",16],["afdah2.com",16],["kissasia.cc",16],["watchsexandthecity.com",16],["watchpsychonline.net",16],["watchsmallvilleonline.net",16],["ymovies.vip",16],["cl1ca.com",16],["4br.me",16],["fir3.net",16],["grubstreet.com",17],["twitchy.com",17],["rule34hentai.net",18],["clik.pw",18],["pornj.com",18],["pornl.com",18],["ah-me.com",18],["1337x.unblock2.xyz",[18,20,52]],["mitly.us",[18,38]],["linkrex.net",18],["oke.io",18],["watchmygf.me",18],["pornoreino.com",[18,35]],["shrt10.com",18],["ashemaletube.com",18],["turbobit.net",18],["bestialitysexanimals.com",18],["bestialporn.com",18],["mujeresdesnudas.club",18],["mynakedwife.video",18],["videoszoofiliahd.com",18],["efukt.com",18],["tranny.one",[18,62]],["porndoe.com",[18,35]],["topvideosgay.com",18],["goto.com.np",18],["femdomtb.com",18],["pornvideotop.com",18],["deinesexfilme.com",18],["einfachtitten.com",18],["halloporno.com",18],["herzporno.com",18],["lesbenhd.com",18],["milffabrik.com",18],["porn-monkey.com",18],["porndrake.com",18],["pornhubdeutsch.net",18],["pornoaffe.com",18],["pornodavid.com",18],["pornoente.tv",18],["pornofisch.com",18],["pornofelix.com",18],["pornohammer.com",18],["pornohelm.com",18],["pornoklinge.com",18],["pornotom.com",18],["pornotommy.com",18],["pornovideos-hd.com",18],["pornozebra.com",18],["xhamsterdeutsch.xyz",18],["xnxx-sexfilme.com",18],["tryboobs.com",[18,62]],["hitomi.la",18],["fapality.com",[18,47]],["babesxworld.com",[18,36,47]],["icutlink.com",18],["oncehelp.com",18],["picbaron.com",[18,36]],["mega-p2p.net",18],["shrinkearn.com",18],["twister.porn",18],["bitlk.com",18],["gamovideo.com",18],["urlty.com",18],["peekvids.com",18],["playvids.com",18],["pornflip.com",18],["pornoeggs.com",18],["oko.sh",[18,24]],["turbogvideos.com",18],["xxx-image.com",[18,30,133,178]],["coinlyhub.com",[18,106]],["vidbom.com",18],["zimabdko.com",18],["fullxxxmovies.net",18],["elitegoltv.org",18],["extremotvplay.com",18],["tarjetarojatv.org",18],["pirlotvonline.org",18],["rojadirectaonlinetv.com",18],["semawur.com",18],["adshrink.it",18],["shrink-service.it",[18,361]],["eplsite.uk",[18,24]],["upstream.to",18],["dramakrsubindo.blogspot.com",18],["ex-foary.com",[18,106]],["oceanof-games.com",18],["watchmonkonline.com",18],["iir.ai",[18,106]],["comicxxx.eu",18],["mybestxtube.com",[18,47]],["pornobengala.com",18],["pornicom.com",[18,47]],["xecce.com",18],["teensporn.tv",[18,47]],["pornlift.com",18],["superbgays.com",18],["porncomics.me",18],["orsm.net",18],["enagato.com",18],["cloutgist.com",18],["youshort.me",18],["shortylink.store",18],["kvador.com",[18,36]],["uploadroot.com",18],["deepfakeporn.net",18],["pkr.pw",[18,106]],["loader.to",18],["namaidani.com",[18,106]],["anime47.com",18],["cutearn.net",[18,106]],["filezipa.com",[18,106]],["theblissempire.com",[18,106]],["bestgamehack.top",18],["hackofgame.com",18],["shorturl.unityassets4free.com",[18,106]],["vevioz.com",[18,106]],["charexempire.com",[18,288]],["crunchyscan.fr",18],["unblocksite.pw",[18,133]],["y2mate.com",18],["androidapks.biz",18],["androidsite.net",18],["animeonlinefree.org",18],["animesite.net",18],["computercrack.com",18],["crackedsoftware.biz",18],["crackfree.org",18],["cracksite.info",18],["downloadapk.info",18],["downloadapps.info",18],["downloadgames.info",18],["downloadmusic.info",18],["downloadsite.org",18],["ebooksite.org",18],["emulatorsite.com",18],["fmovies24.com",18],["freeflix.info",18],["freemoviesu4.com",18],["freesoccer.net",18],["fseries.org",18],["gamefast.org",18],["gamesite.info",18],["gostreamon.net",18],["hindisite.net",18],["isosite.org",18],["macsite.info",18],["mangasite.org",18],["megamovies.org",18],["moviefree2.com",18],["moviesite.app",18],["moviesx.org",18],["musicsite.biz",18],["patchsite.net",18],["pdfsite.net",18],["play1002.com",18],["productkeysite.com",18],["romsite.org",18],["seriesite.net",18],["siteapk.net",18],["siteflix.org",18],["sitegames.net",18],["sitekeys.net",18],["sitepdf.com",18],["sitetorrent.com",18],["softwaresite.net",18],["superapk.org",18],["supermovies.org",18],["tvonlinesports.com",18],["ultramovies.org",18],["warezsite.net",18],["watchmovies2.com",18],["watchmoviesforfree.org",18],["watchsite.net",18],["youapk.net",18],["gload.to",18],["bloggingguidance.com",18],["jockantv.com",18],["moviehaxx.pro",18],["receive-sms-online.info",19],["pornult.com",[20,72]],["fullhdxxx.com",[20,35]],["koenime.top",20],["lendrive.web.id",20],["nimegami.id",20],["short.pe",[21,24]],["mylust.com",[21,47]],["anysex.com",[21,26,35,47,117]],["luscious.net",21],["cloudgallery.net",[21,24]],["alotporn.com",[21,47]],["imgair.net",21],["imgblaze.net",21],["imgfrost.net",21],["vestimage.site",21],["imgyer.store",21],["pixqbngg.shop",21],["pixqwet.shop",21],["pixmos.shop",21],["imgtgd.shop",21],["imgcsxx.shop",21],["imgqklw.shop",21],["pixqkhgrt.shop",21],["imgcssd.shop",21],["imguwjsd.sbs",21],["pictbbf.shop",21],["pixbryexa.sbs",21],["picbqqa.sbs",21],["pixbkghxa.sbs",21],["imgmgf.sbs",21],["picbcxvxa.sbs",21],["imguee.sbs",21],["imgmffmv.sbs",21],["imgbqb.sbs",21],["imgbyrev.sbs",21],["imgbncvnv.sbs",21],["pixtryab.shop",21],["imggune.shop",21],["pictryhab.shop",21],["pixbnab.shop",21],["imgbnwe.shop",21],["imgbbnhi.shop",21],["imgnbii.shop",21],["imghqqbg.shop",21],["imgyhq.shop",21],["pixnbrqwg.sbs",21],["pixnbrqw.sbs",21],["picmsh.sbs",21],["imgpke.sbs",21],["picuenr.sbs",21],["imgolemn.sbs",21],["imgoebn.sbs",21],["picnwqez.sbs",21],["imgjajhe.sbs",21],["pixjnwe.sbs",21],["pixkfjtrkf.shop",21],["pixkfkf.shop",21],["pixdfdjkkr.shop",21],["pixdfdj.shop",21],["picnft.shop",21],["pixrqqz.shop",21],["picngt.shop",21],["picjgfjet.shop",21],["picjbet.shop",21],["imgkkabm.shop",21],["imgxabm.shop",21],["imgthbm.shop",21],["imgmyqbm.shop",21],["imgwwqbm.shop",21],["imgjvmbbm.shop",21],["imgjbxzjv.shop",21],["imgjmgfgm.shop",21],["picxnkjkhdf.sbs",21],["imgxxbdf.sbs",21],["imgnngr.sbs",21],["imgjjtr.sbs",21],["imgqbbds.sbs",21],["imgbvdf.sbs",21],["imgqnnnebrf.sbs",21],["imgnnnvbrf.sbs",21],["pornfd.com",21],["xsanime.com",21],["camclips.tv",21],["ninjashare.to",21],["javideo.pw",[22,77]],["ujav.me",[22,77]],["shameless.com",[22,61,62]],["informer.com",23],["met.bz",24],["hindimean.com",24],["senmanga.com",24],["ebookdz.com",24],["cda-hd.cc",24],["javstream.com",24],["kurazone.net",24],["turkdown.com",24],["urlgalleries.net",24],["movie4u.live",24],["solarmovie.id",24],["01fmovies.com",24],["babesaround.com",24],["dirtyyoungbitches.com",24],["grabpussy.com",24],["join2babes.com",24],["nightdreambabe.com",24],["novoglam.com",24],["novohot.com",24],["novojoy.com",24],["novoporn.com",24],["novostrong.com",24],["pbabes.com",24],["pussystate.com",24],["redpornblog.com",24],["rossoporn.com",24],["sexynakeds.com",24],["thousandbabes.com",24],["gulf-up.com",24],["vidia.tv",24],["cutpaid.com",[24,106]],["javporn.best",[24,109]],["mixloads.com",24],["ancensored.com",24],["savevideo.tube",24],["files.cx",24],["drivefire.co",24],["porngo.com",24],["arenabg.com",24],["vidload.net",24],["animealtadefinizione.it",24],["lkc21.net",24],["mavanimes.co",24],["onnime.net",24],["noxx.to",24],["loadsamusicsarchives.blogspot.com",24],["xxxfiles.com",24],["deseneledublate.com",24],["hentaicloud.com",[24,250]],["descarga.xyz",24],["familyporn.tv",24],["pornxp.com",[24,62]],["pornxp.org",24],["rawmanga.top",24],["javside.com",[24,77]],["aniwave.to",24],["gayteam.club",24],["mangaraw.org",24],["flixtormovies.co",24],["watchthat70show.net",24],["supertelevisionhd.com",24],["whitemouseapple.com",24],["autoembed.cc",24],["whisperingauroras.com",24],["live-sport.duktek.pro",24],["sheshaft.com",26],["gotgayporn.com",26],["fetishshrine.com",26],["sleazyneasy.com",26],["vikiporn.com",26],["pornomico.com",[26,69]],["watchhouseonline.net",26],["pornoman.pl",[26,124]],["camseek.tv",26],["xxmovz.com",26],["lewdzone.com",26],["faucethero.com",[26,38]],["nonktube.com",26],["pussyspot.net",26],["wildpictures.net",26],["nudogram.com",26],["18girlssex.com",26],["modagamers.com",26],["batporno.com",26],["lebahmovie.com",26],["duit.cc",26],["classicpornbest.com",[26,134]],["desihoes.com",[26,47]],["indianpornvideo.org",26],["porn18sex.com",26],["slaughtergays.com",26],["sexiestpicture.com",26],["line25.com",26],["javtiful.com",26],["manytoon.com",26],["thatav.net",26],["mypussydischarge.com",[26,38]],["hentaifreak.org",26],["xxgasm.com",26],["kfapfakes.com",26],["xsober.com",26],["sexsaoy.com",26],["ashemaletv.com",26],["beurettekeh.com",26],["celibook.com",26],["gourmandix.com",26],["sexetag.com",26],["hd44.net",26],["dirtyfox.net",26],["babestube.com",26],["momvids.com",26],["porndr.com",26],["deviants.com",26],["freehardcore.com",26],["lesbian8.com",[26,272]],["eztv-torrent.net",26],["spicyandventures.com",26],["watchmdh.to",26],["sarapbabe.com",26],["rule34porn.net",26],["fullxxxporn.net",26],["hdvideosporn.com",26],["qqxnxx.com",26],["xnxx-downloader.net",26],["comicspornow.com",26],["mult34.com",26],["viet69.org",26],["xxxvideotube.net",26],["javqis.com",26],["onlyhotleaks.com",26],["35volitantplimsoles5.com",26],["amateurblog.tv",26],["fashionblog.tv",26],["latinblog.tv",26],["silverblog.tv",26],["tokyoblog.tv",26],["xblog.tv",26],["peladas69.com",26],["liveru.sx",26],["protege-torrent.com",26],["freehdinterracialporn.in",26],["titsintops.com",26],["pervclips.com",26],["homemoviestube.com",26],["kisshentai.net",27],["insidemarketing.it",27],["worldaide.fr",27],["asmwall.com",27],["bibme.org",28],["citationmachine.net",[28,29]],["citethisforme.com",29],["easybib.com",29],["1plus1plus1equals1.net",30],["cooksinfo.com",30],["heatherdisarro.com",30],["thesassyslowcooker.com",30],["mp4upload.com",31],["cricstream.me",31],["watchadsontape.com",31],["livesport24.net",31],["streambucket.net",31],["megacanais.com",31],["dmovies.top",[31,162]],["sanet.lc",31],["antenasport.online",31],["apkship.shop",31],["browncrossing.net",31],["dudestream.com",31],["elgolestv.pro",31],["embedstreams.me",31],["engstreams.shop",31],["eyespeeled.click",31],["flostreams.xyz",31],["ilovetoplay.xyz",31],["joyousplay.xyz",31],["nativesurge.info",31],["pawastreams.org",31],["ripplestream4u.shop",31],["rojadirectaenvivo.pl",31],["sansat.link",31],["smartermuver.com",31],["sportsnest.co",31],["sportsurge.net",31],["sportzlive.shop",31],["tarjetarojaenvivo.lat",31],["techcabal.net",31],["volokit2.com",31],["worldstreamz.shop",31],["ythd.org",31],["kaas.ro",[31,162]],["rivestream.live",31],["flix-wave.lol",31],["redvido.com",31],["sarugbymag.co.za",34],["ikaza.net",34],["imgadult.com",[35,36]],["imgdrive.net",[35,36]],["imgtaxi.com",[35,36]],["imgwallet.com",[35,36]],["hdpornt.com",35],["4tube.com",35],["pornerbros.com",[35,47]],["pichaloca.com",35],["pornodoido.com",35],["pornwatchers.com",[35,47]],["gotporn.com",35],["picturelol.com",35],["imgspice.com",35],["orgyxxxhub.com",[35,67,68]],["befap.com",35],["alphaporno.com",35],["tubedupe.com",35],["sexykittenporn.com",[35,36]],["letmejerk.com",35],["letmejerk2.com",35],["letmejerk3.com",35],["letmejerk4.com",35],["letmejerk5.com",35],["letmejerk6.com",35],["letmejerk7.com",35],["hdtube.porn",35],["madchensex.com",35],["canalporno.com",35],["dreamamateurs.com",35],["eroxia.com",35],["pornozot.com",35],["camgirlbang.com",35],["casting-porno-tube.com",35],["teensexvideos.me",35],["goshow.tv",35],["hentaigo.com",[36,74]],["lolhentai.net",36],["porntopic.com",36],["cocogals.com",[36,47]],["camwhoreshd.com",36],["hotbabes.tv",[36,97]],["consoletarget.com",36],["pussytorrents.org",36],["ftopx.com",[36,61,72]],["8boobs.com",[36,61,62]],["babesinporn.com",[36,47,61,62]],["boobgirlz.com",36],["fooxybabes.com",36],["hotstunners.com",[36,61,62]],["jennylist.xyz",36],["jumboporn.xyz",36],["mainbabes.com",[36,61]],["mysexybabes.com",[36,61]],["nakedbabes.club",[36,61]],["pleasuregirl.net",[36,61,62]],["rabbitsfun.com",[36,61,62]],["sexybabesz.com",[36,61]],["vibraporn.com",36],["zazzybabes.com",36],["zehnporn.com",36],["naughtymachinima.com",36],["imgbaron.com",36],["decorativemodels.com",36],["erowall.com",[36,47]],["freyalist.com",36],["guruofporn.com",36],["jesseporn.xyz",36],["kendralist.com",36],["vipergirls.to",36],["lizardporn.com",36],["wantedbabes.com",[36,47]],["bustybloom.com",[36,62]],["exgirlfriendmarket.com",36],["nakedneighbour.com",36],["moozpussy.com",36],["zoompussy.com",36],["2adultflashgames.com",36],["123strippoker.com",36],["babepedia.com",36],["boobieblog.com",36],["borwap.xxx",36],["chicpussy.net",36],["gamesofdesire.com",36],["hd-xxx.me",36],["hentaipins.com",[36,267]],["longporn.xyz",36],["picmoney.org",36],["pornhd720p.com",36],["sikwap.xyz",36],["super-games.cz",36],["xxx-videos.org",36],["xxxputas.net",36],["mysexgames.com",36],["sexgames.xxx",36],["picdollar.com",36],["pornstargold.com",36],["eroticity.net",36],["striptube.net",36],["xcity.org",36],["porncoven.com",36],["imgstar.eu",36],["pics4upload.com",36],["ahegaoporn.net",36],["myporntape.com",36],["asianlbfm.net",36],["schoolgirls-asia.org",36],["luxuretv.com",37],["otomi-games.com",37],["redhdtube.xxx",37],["rat.xxx",37],["hispasexy.org",[37,217]],["javplay.me",37],["watchimpracticaljokers.com",37],["zerion.cc",37],["javcock.com",37],["leviathanmanga.com",37],["gayfor.us",37],["juegosgratisonline.com.ar",37],["levelupalone.com",37],["x-x-x.tube",37],["javboys.com",37],["javball.com",37],["adictox.com",37],["feed2all.org",37],["platinmods.com",38],["fotbolltransfers.com",38],["freebitcoin.win",38],["coindice.win",38],["live-tv-channels.org",38],["faresgame.com",38],["fc.lc",[38,106]],["freebcc.org",[38,106]],["eio.io",[38,106]],["exee.io",[38,106]],["exe.app",[38,106]],["multifaucet.org",38],["majalahpendidikan.com",38],["jaiefra.com",38],["czxxx.org",38],["sh0rt.cc",38],["fussball.news",38],["orangespotlight.com",38],["ar-atech.blogspot.com",38],["clixwarez.blogspot.com",38],["theandroidpro.com",38],["zeeebatch.blogspot.com",38],["layarkaca21indo.com",38],["iptvspor.com",38],["plugincim.com",38],["fivemturk.com",38],["sosyalbilgiler.net",38],["mega-hentai2.blogspot.com",38],["gun-otaku.blogspot.com",38],["tech5s.co",38],["ez4mods.com",38],["kollhong.com",38],["getmega.net",38],["verteleseriesonline.com",38],["imintweb.com",38],["eoreuni.com",38],["se-ed.com",38],["comousarzararadio.blogspot.com",38],["popsplit.us",38],["digitalstudiome.com",38],["nightfallnews.com",38],["kontrolkalemi.com",38],["arabianbusiness.com",38],["eskiceviri.blogspot.com",38],["dj-figo.com",38],["blasianluvforever.com",38],["wgzimmer.ch",38],["familyrenders.com",38],["daburosubs.com",38],["androidgreek.com",38],["iade.com",38],["smallpocketlibrary.com",38],["hidefninja.com",38],["orangeptc.com",38],["share1223.com",38],["7misr4day.com",38],["aquiyahorajuegos.net",38],["worldofbin.com",38],["googledrivelinks.com",38],["98zero.com",38],["tpaste.io",38],["g9g.eu",38],["netu.ac",39],["vidscdns.com",39],["doplay.store",39],["filme720.com",39],["onscreens.me",[39,116,313]],["video.q34r.org",[39,116]],["filmoviplex.com",[39,116]],["movie4night.com",[39,116]],["richhioon.eu",[39,116]],["srt.am",40],["ticonsiglio.com",41],["photos-public-domain.com",43],["civilenggforall.com",43],["hdporn.net",[44,45]],["older-mature.net",45],["driveup.sbs",45],["telorku.xyz",45],["watch-my-gf.com",46],["watchmyexgf.net",46],["cartoonporno.xxx",46],["mangoporn.net",47],["area51.porn",47],["sexytrunk.com",47],["teensark.com",47],["tubous.com",[47,84]],["toyoheadquarters.com",47],["spycock.com",47],["barfuck.com",47],["multporn.net",47],["besthugecocks.com",47],["daftporn.com",47],["italianoxxx.com",47],["collegehdsex.com",47],["lustylist.com",47],["yumstories.com",47],["18-teen-porn.com",47],["69teentube.com",47],["girlshd.xxx",47],["home-xxx-videos.com",47],["orgasmlist.com",47],["teensextube.xxx",47],["pornyfap.com",47],["nudistube.com",47],["uporno.xxx",47],["ultrateenporn.com",47],["gosexpod.com",47],["al4a.com",47],["grannysex.name",47],["porntb.com",47],["scopateitaliane.it",47],["sexbox.online",47],["teenpornvideo.sex",47],["twatis.com",[47,61]],["flashingjungle.com",47],["fetishburg.com",47],["privateindianmovies.com",47],["soyoungteens.com",47],["gottanut.com",47],["uiporn.com",47],["xcafe.com",47],["gfsvideos.com",47],["home-made-videos.com",47],["tbib.org",47],["sensualgirls.org",47],["ariestube.com",47],["asian-teen-sex.com",47],["18asiantube.com",47],["wholevideos.com",47],["asianporntube69.com",47],["babeswp.com",47],["bangyourwife.com",47],["bdsmslavemovie.com",47],["bdsmwaytube.com",47],["bestmaturewomen.com",47],["classicpornvids.com",47],["pornpaw.com",47],["dawntube.com",47],["desimmshd.com",47],["dirtytubemix.com",47],["plumperstube.com",47],["enormousbabes.net",47],["exclusiveindianporn.com",47],["figtube.com",47],["amateur-twink.com",47],["freeboytwinks.com",47],["freegrannyvids.com",47],["freexmovs.com",47],["freshbbw.com",47],["frostytube.com",47],["fuckhottwink.com",47],["fuckslutsonline.com",47],["gameofporn.com",47],["gayboyshd.com",47],["getitinside.com",[47,104]],["giantshemalecocks.com",47],["erofus.com",47],["hd-tube-porn.com",47],["hardcorehd.xxx",47],["hairytwat.org",47],["iwantmature.com",47],["justababes.com",47],["juicyflaps.com",47],["jenpornuj.cz",47],["javteentube.com",47],["hard-tube-porn.com",47],["klaustube.com",47],["kaboomtube.com",47],["lustyspot.com",47],["lushdiaries.com",47],["lovelynudez.com",[47,130]],["dailyangels.com",47],["ljcam.net",47],["myfreemoms.com",47],["nakenprat.com",47],["oosex.net",[47,62]],["oldgrannylovers.com",47],["ohueli.net",47],["pornuploaded.net",47],["pornstarsadvice.com",47],["bobs-tube.com",47],["pornohaha.com",47],["pornmam.com",47],["pornhegemon.com",47],["pornabcd.com",47],["porn-hd-tube.com",47],["thehentaiworld.com",47],["pantyhosepink.com",47],["queenofmature.com",47],["realvoyeursex.com",47],["realbbwsex.com",47],["rawindianporn.com",47],["onlygoldmovies.com",47],["rainytube.com",47],["stileproject.com",47],["slutdump.com",47],["nastybulb.com",47],["sextube-6.com",47],["porntubegf.com",47],["sassytube.com",47],["smplace.com",47],["maturell.com",47],["nudemilfwomen.com",47],["pornoplum.com",47],["widewifes.com",47],["wowpornlist.xyz",47],["vulgarmilf.com",47],["oldgirlsporn.com",47],["freepornrocks.com",47],["get-to.link",[47,72]],["beegsexxx.com",47],["watchpornx.com",[47,154]],["ytboob.com",47],["saradahentai.com",47],["hentaiarena.com",47],["absolugirl.com",47],["absolutube.com",47],["allafricangirls.net",47],["asianpornphoto.net",47],["freexxxvideos.pro",47],["videosxxxporno.gratis",47],["nude-teen-18.com",47],["xemales.com",47],["szexkepek.net",47],["wife-home-videos.com",47],["sexmadeathome.com",47],["nylondolls.com",47],["milforia.com",47],["teensfuck.me",47],["erogen.su",47],["imgprime.com",48],["ondemandkorea.com",49],["bdsmx.tube",50],["mrgay.com",50],["pornxs.com",51],["ifenpaidy.com",52],["dailygeekshow.com",53],["rue89lyon.fr",54],["onlinemschool.com",55],["bigtitsxxxsex.com",57],["zmovs.com",57],["ceesty.com",58],["corneey.com",58],["destyy.com",58],["festyy.com",58],["gestyy.com",58],["lavozdigital.es",58],["tnaflix.com",59],["sunporno.com",[61,62]],["angelgals.com",61],["babesexy.com",61],["hotbabeswanted.com",61],["nakedgirlsroom.com",61],["nudebabes.sexy",[61,62]],["sexybabes.club",61],["sexybabesart.com",61],["favefreeporn.com",61],["onlygayvideo.com",61],["peachytube.com",61],["stepsisterfuck.me",61],["adultdvdparadise.com",62],["freeomovie.info",62],["fullxxxmovies.me",62],["mangoparody.com",62],["mangoporn.co",62],["netflixporno.net",62],["pandamovies.me",62],["pornkino.cc",62],["pornwatch.ws",62],["watchfreexxx.pw",62],["watchxxxfree.pw",62],["xopenload.pw",62],["xtapes.me",62],["xxxparodyhd.net",62],["xxxscenes.net",62],["xxxstream.me",62],["youwatchporn.com",62],["nudismteens.com",62],["youx.xxx",62],["asiansex.life",62],["hypnohub.net",62],["oldies.name",62],["xnxxporn.video",62],["xxxdessert.com",62],["xxxshake.com",62],["manhwa18.cc",62],["best18porn.com",62],["bigtitslust.com",[62,272]],["manga18fx.com",62],["sexywomeninlingerie.com",62],["theteensexy.com",62],["xteensex.net",62],["stiflersmoms.com",62],["gifhq.com",62],["amateur-couples.com",62],["teen-hd-sex.com",62],["tube-teen-18.com",62],["xxx-asian-tube.com",62],["pornhost.com",63],["locopelis.com",[64,65,66]],["repelis.net",64],["perfectmomsporn.com",67],["donkparty.com",70],["streamdreams.org",72],["bdsmporn.cc",72],["cocoporn.net",72],["dirtyporn.cc",72],["faperplace.com",72],["freeadultvideos.cc",72],["freepornstream.cc",72],["generalpornmovies.com",72],["kinkyporn.cc",72],["moviesxxx.cc",72],["movstube.net",72],["onlinefetishporn.cc",72],["peetube.cc",72],["pornonline.cc",72],["porntube18.cc",72],["streamextreme.cc",72],["streamporn.cc",72],["videoxxx.cc",72],["watchporn.cc",72],["x24.video",72],["xxx24.vip",72],["xxxonline.cc",72],["xxxonlinefree.com",72],["xxxopenload.com",72],["gonzoporn.cc",72],["onlinexxx.cc",72],["tvporn.cc",72],["allporncomic.com",72],["thepiratebay.org",72],["videosection.com",72],["pornky.com",72],["tubxporn.com",72],["imgcredit.xyz",72],["desixxxtube.org",72],["freeindianporn2.com",72],["kashtanka2.com",72],["kompoz2.com",72],["pakistaniporn2.com",72],["mangahere.onl",[75,174]],["worldfreeware.com",76],["ellibrepensador.com",76],["rexdlfile.com",76],["sfastwish.com",77],["films5k.com",77],["juicywest.com",77],["fakyutube.com",77],["mm9842.com",77],["mm9846.com",77],["javmvp.com",77],["watch-jav-english.live",77],["0gogle.com",77],["videobot.stream",77],["vidohd.com",77],["kitabmarkaz.xyz",77],["javplaya.com",77],["japopav.tv",77],["streamm4u.club",77],["fembed-hd.com",77],["nekolink.site",77],["suzihaza.com",77],["mycloudzz.com",77],["javpoll.com",77],["javleaked.com",77],["pornhole.club",77],["jvembed.com",77],["megafilmeshdonline.org",77],["jav247.top",77],["nashstream.top",77],["mavavid.com",77],["diampokusy.com",77],["vidmedia.top",77],["moviepl.xyz",77],["superplayxyz.club",77],["viplayer.cc",77],["nsfwzone.xyz",77],["layarkacaxxi.icu",77],["embed-media.com",77],["zojav.com",77],["javenglish.me",77],["pornhubed.com",77],["playerjavseen.com",77],["javsubbed.xyz",77],["xsub.cc",77],["fembed9hd.com",77],["onscreensvideo.com",77],["gaymovies.top",77],["guccihide.com",77],["streamhide.to",77],["vidhidevip.com",77],["cloudrls.com",77],["embedwish.com",77],["fc2stream.tv",77],["javhahaha.us",77],["javlion.xyz",77],["javibe.net",77],["jvideo.xyz",77],["kissmovies.net",77],["nudecelebforum.com",78],["pronpic.org",79],["chyoa.com",80],["thisisfutbol.com",81],["pcwelt.de",82],["sixsistersstuff.com",83],["vermangasporno.com",86],["celebjihad.com",86],["dirtyship.com",86],["celebmasta.com",86],["fullporner.com",[86,334]],["lejdd.fr",87],["gamekult.com",87],["bharian.com.my",87],["thememypc.net",88],["cityam.com",89],["inhabitat.com",90],["speedtest.net",92],["livingstondaily.com",92],["goafricaonline.com",93],["poedb.tw",94],["link.tl",95],["lnk.news",96],["lnk.parts",96],["candid.tube",97],["purelyceleb.com",97],["piraproxy.app",97],["nosteamgames.ro",97],["zootube1.com",98],["xxxtubezoo.com",98],["zooredtube.com",98],["videos1002.com",99],["sab.bz",99],["javseen.tv",99],["autobild.de",101],["alimaniac.com",102],["1xxx-tube.com",104],["asssex-hd.com",104],["bigcockfreetube.com",104],["bigdickwishes.com",104],["enjoyfuck.com",104],["freemomstube.com",104],["fuckmonstercock.com",104],["gobigtitsporn.com",104],["gofetishsex.com",104],["hard-tubesex.com",104],["hd-analporn.com",104],["hiddencamstube.com",104],["kissmaturestube.com",104],["lesbianfantasyxxx.com",104],["modporntube.com",104],["pornexpanse.com",104],["pornokeep.com",104],["pussytubeebony.com",104],["tubesex.me",104],["vintagesexpass.com",104],["voyeur-pornvideos.com",104],["voyeurspyporn.com",104],["voyeurxxxfree.com",104],["xxxtubenote.com",104],["yummysextubes.com",104],["nakedarab-tube.com",104],["xxxtubepass.com",104],["yestubemature.com",104],["yourhomemadetube.com",104],["yourtranny-sex.com",104],["tubexxxone.com",104],["airsextube.com",104],["asianbabestube.com",104],["bigtitsxxxfree.com",104],["blowjobpornset.com",104],["entertubeporn.com",104],["finexxxvideos.com",104],["freesexvideos24.com",104],["fuckhairygirls.com",104],["gopornindian.com",104],["grandmatube.pro",104],["grannyfucko.com",104],["grannyfuckxxx.com",104],["hiddencamhd.com",104],["hindiporno.pro",104],["indianbestporn.com",104],["japanesemomsex.com",104],["japanxxxass.com",104],["massagefreetube.com",104],["maturepussies.pro",104],["megajapansex.com",104],["new-xxxvideos.com",104],["xxxblowjob.pro",104],["xxxtubegain.com",104],["xxxvideostrue.com",104],["acutetube.net",104],["agedtubeporn.com",104],["agedvideos.com",104],["onlinegrannyporn.com",104],["freebigboobsporn.com",104],["tubeinterracial-porn.com",104],["best-xxxvideos.com",104],["bestanime-xxx.com",104],["blowxxxtube.com",104],["callfuck.com",104],["teenhubxxx.com",104],["tubepornasian.com",104],["xxxtubedot.com",104],["blowjobfucks.com",104],["dirtyasiantube.com",104],["maturewomenfucks.com",104],["pornmaturetube.com",104],["setfucktube.com",104],["tourporno.com",104],["do-xxx.com",104],["dotfreesex.com",104],["dotfreexxx.com",104],["easymilftube.net",104],["electsex.com",104],["fineretroporn.com",104],["freehqtube.com",104],["freshmaturespussy.com",104],["freshsexxvideos.com",104],["fuckedporno.com",104],["gallant-matures.com",104],["hqhardcoreporno.com",104],["girlssexxxx.com",104],["glamourxxx-online.com",104],["vintagepornnew.com",104],["tubevintageporn.com",104],["goxxxvideos.com",104],["grouppornotube.com",104],["hqxxxmovies.com",104],["hqsex-xxx.com",104],["hqamateurtubes.com",104],["hotpussyhubs.com",104],["hdpornteen.com",104],["indecentvideos.com",104],["ifreefuck.com",104],["kittyfuckstube.com",104],["lightxxxtube.com",104],["momstube-porn.com",104],["modelsxxxtube.com",104],["milfpussy-sex.com",104],["nicexxxtube.com",104],["neatpornodot.com",104],["neatfreeporn.com",104],["bigtitsporn-tube.com",104],["tubehqxxx.com",104],["nakedbbw-sex.com",104],["onlineteenhub.com",104],["online-xxxmovies.com",104],["pussyhothub.com",104],["pornxxxplace.com",104],["pornoteensex.com",104],["pornonote.pro",104],["pornoaid.com",104],["pornclipshub.com",104],["whitexxxtube.com",104],["sweetadult-tube.com",104],["sweet-maturewomen.com",104],["sexyoungclips.com",104],["sexymilfsearch.com",104],["sextubedot.com",104],["hqmaxporn.com",104],["sexlargetube.com",104],["sexhardtubes.com",104],["tubepornstock.com",104],["xfuckonline.com",104],["sheamateur.com",105],["cuts-url.com",106],["exe.io",[106,180]],["adsafelink.com",106],["modebaca.com",106],["cutdl.xyz",106],["shurt.pw",[106,264]],["smoner.com",106],["droplink.co",106],["ez4short.com",106],["try2link.com",[106,220]],["jameeltips.us",106],["blog.linksfire.co",106],["recipestutorials.com",106],["shrinkforearn.in",106],["qthang.net",106],["linksly.co",106],["curto.win",106],["imagenesderopaparaperros.com",106],["shortenbuddy.com",106],["apksvip.com",106],["4cash.me",106],["teknomuda.com",106],["savelink.site",106],["samaa-pro.com",106],["miklpro.com",106],["modapk.link",106],["ccurl.net",106],["linkpoi.me",106],["pewgame.com",106],["crazyblog.in",106],["gtlink.co",106],["rshrt.com",106],["dz-linkk.com",106],["adurly.cc",106],["link.asiaon.top",106],["download.sharenulled.net",106],["beingtek.com",106],["adlinkweb.com",106],["swzz.xyz",106],["cutp.in",106],["gsm-solution.com",107],["ihackedgames.com",108],["dvdporngay.com",108],["software-on.com",108],["kpopjjang.com",[108,179]],["siteunblocked.info",[108,245]],["unblocked.name",[108,245]],["uproxy2.biz",[108,245]],["gomo.to",109],["dlapk4all.com",109],["popmatters.com",110],["planetf1.com",110],["austin.culturemap.com",110],["northern-scot.co.uk",110],["icy-veins.com",111],["bidouillesikea.com",111],["girlsgogames.co.uk",112],["godtube.com",112],["ringsidenews.com",112],["advocate.com",112],["alternet.org",112],["androidcure.com",112],["arobasenet.com",112],["attackofthefanboy.com",112],["bodytr.com",112],["clutchpoints.com",112],["cultofmac.com",112],["currentaffairs.gktoday.in",112],["dailycaller.com",112],["digitalmusicnews.com",112],["dogtime.com",112],["dotesports.com",112],["epicstream.com",112],["fallbrook247.com",112],["feral-heart.com",112],["gamesgames.com",112],["gamerevolution.com",112],["gazettenet.com",112],["insidenova.com",112],["jetztspielen.de",112],["kasvekuvvet.net",112],["leitesculinaria.com",112],["nbcnews.com",112],["notevibes.com",112],["practicalpainmanagement.com",112],["prad.de",112],["progameguides.com",112],["pwinsider.com",112],["realityblurb.com",[112,234]],["ruinmyweek.com",112],["sanangelolive.com",112],["sanfoundry.com",112],["selfhacked.com",112],["siliconera.com",112],["simpleflying.com",112],["son.co.za",112],["sporcle.com",112],["stealthoptional.com",112],["thesportster.com",112],["upi.com",112],["viraliq.com",112],["visualcapitalist.com",112],["wegotthiscovered.com",112],["primagames.com",112],["truetrophies.com",113],["alcasthq.com",114],["mzee.com",114],["supforums.com",115],["player.xxxbestsites.com",116],["player.tabooporns.com",116],["wiztube.xyz",116],["megatube.xxx",116],["hot-cartoon.com",116],["wowstream.top",116],["xxvideoss.net",116],["player.subespanolvip.com",116],["vidcdn.co",[116,304]],["justswallows.net",116],["wilifilm.net",116],["rpdrlatino.live",116],["pbtube.co",116],["streaming-french.net",116],["koreanbj.club",116],["monstream.org",116],["player.hdgay.net",116],["ytms.one",116],["cdngee.com",116],["fshd3.club",116],["hd-streaming.net",116],["streaming-french.org",116],["telenovelas-turcas.com.es",116],["gocurrycracker.com",118],["xcums.com",118],["ihub.live",118],["naturalbd.com",118],["freeuseporn.com",118],["salamanca24horas.com",119],["bollywoodshaadis.com",120],["ngelag.com",121],["huim.com",122],["cambay.tv",125],["caminspector.net",125],["camwhorespy.com",125],["camwhoria.com",125],["camgoddess.tv",125],["zemporn.com",126],["wpgdadatong.com",127],["wikifeet.com",128],["root-top.com",129],["allmomsex.com",130],["allnewindianporn.com",130],["analxxxvideo.com",130],["animalextremesex.com",130],["anime3d.xyz",130],["animefuckmovies.com",130],["animepornfilm.com",130],["animesexbar.com",130],["animesexclip.com",130],["animexxxsex.com",130],["animexxxfilms.com",130],["anysex.club",130],["apetube.asia",130],["asianfuckmovies.com",130],["asianfucktube.com",130],["asianporn.sexy",130],["asiansexcilps.com",130],["beeg.fund",130],["beegvideoz.com",130],["bestasiansex.pro",130],["bravotube.asia",130],["brutalanimalsfuck.com",130],["candyteenporn.com",130],["daddyfuckmovies.com",130],["desifuckonline.com",130],["exclusiveasianporn.com",130],["exteenporn.com",130],["fantasticporn.net",130],["fantasticyoungporn.com",130],["fineasiansex.com",130],["firstasianpussy.com",130],["freeindiansextube.com",130],["freepornasians.com",130],["freerealvideo.com",130],["fuck-beeg.com",130],["fuck-xnxx.com",130],["fuckasian.pro",130],["fuckfuq.com",130],["fuckundies.com",130],["gojapaneseporn.com",130],["golderotica.com",130],["goodyoungsex.com",130],["goyoungporn.com",130],["hardxxxmoms.com",130],["hdvintagetube.com",130],["hentaiporn.me",130],["hentaisexfilms.com",130],["hentaisexuality.com",130],["hot-teens-movies.mobi",130],["hotanimepornvideos.com",130],["hotanimevideos.com",130],["hotasianpussysex.com",130],["hotjapaneseshows.com",130],["hotmaturetube.com",130],["hotmilfs.pro",130],["hotorientalporn.com",130],["hotpornyoung.com",130],["hotxxxjapanese.com",130],["hotxxxpussy.com",130],["indiafree.net",130],["indianpornvideo.online",130],["japanpornclip.com",130],["japanesetube.video",130],["japansex.me",130],["japanesexxxporn.com",130],["japansporno.com",130],["japanxxx.asia",130],["japanxxxworld.com",130],["keezmovies.surf",130],["lingeriefuckvideo.com",130],["liveanimalporn.zooo.club",130],["madhentaitube.com",130],["megahentaitube.com",130],["megajapanesesex.com",130],["megajapantube.com",130],["milfxxxpussy.com",130],["momsextube.pro",130],["momxxxass.com",130],["monkeyanimalporn.com",130],["moviexxx.mobi",130],["newanimeporn.com",130],["newjapanesexxx.com",130],["nicematureporn.com",130],["nudeplayboygirls.com",130],["openxxxporn.com",130],["originalindianporn.com",130],["originalteentube.com",130],["pig-fuck.com",130],["plainasianporn.com",130],["popularasianxxx.com",130],["pornanimetube.com",130],["pornasians.pro",130],["pornhat.asia",130],["pornjapanesesex.com",130],["pornomovies.asia",130],["pornvintage.tv",130],["primeanimesex.com",130],["realjapansex.com",130],["realmomsex.com",130],["redsexhub.com",130],["retroporn.world",130],["retrosexfilms.com",130],["sex-free-movies.com",130],["sexanimesex.com",130],["sexanimetube.com",130],["sexjapantube.com",130],["sexmomvideos.com",130],["sexteenxxxtube.com",130],["sexxxanimal.com",130],["sexyoungtube.com",130],["sexyvintageporn.com",130],["sopornmovies.com",130],["spicyvintageporn.com",130],["sunporno.club",130],["tabooanime.club",130],["teenextrem.com",130],["teenfucksex.com",130],["teenhost.net",130],["teensexass.com",130],["tnaflix.asia",130],["totalfuckmovies.com",130],["totalmaturefuck.com",130],["txxx.asia",130],["voyeurpornsex.com",130],["warmteensex.com",130],["wetasiancreampie.com",130],["wildhentaitube.com",130],["wowyoungsex.com",130],["xhamster-art.com",130],["xmovie.pro",130],["xnudevideos.com",130],["xnxxjapon.com",130],["xpics.me",130],["xvide.me",130],["xxxanimefuck.com",130],["xxxanimevideos.com",130],["xxxanimemovies.com",130],["xxxhentaimovies.com",130],["xxxhothub.com",130],["xxxjapaneseporntube.com",130],["xxxlargeporn.com",130],["xxxmomz.com",130],["xxxpornmilf.com",130],["xxxpussyclips.com",130],["xxxpussysextube.com",130],["xxxretrofuck.com",130],["xxxsex.pro",130],["xxxsexyjapanese.com",130],["xxxteenyporn.com",130],["xxxvideo.asia",130],["xxxvideos.ink",130],["xxxyoungtv.com",130],["youjizzz.club",130],["youngpussyfuck.com",130],["za.gl",132],["activistpost.com",[133,137]],["ladepeche.fr",134],["jemontremonminou.com",134],["jemontremasextape.com",134],["jemontremabite.com",134],["bitzite.com",[134,178]],["kinoger.ru",135],["moviesapi.club",135],["clasicotas.org",136],["saveshared.com",137],["simpledownload.net",137],["compucalitv.com",138],["blademaster666.com",139],["hot2k.com",139],["luchoedu.org",139],["lupaste.com",139],["pornovenezolano.com.ve",139],["romnation.net",139],["venezporn.com",139],["hubzter.com",140],["collater.al",140],["nzpocketguide.com",140],["volksstimme.de",142],["phonenumber-lookup.info",143],["maniac.de",144],["cambro.tv",145],["filerio.in",145],["call2friends.com",145],["gigaho.com",145],["trendsderzukunft.de",145],["forum.lolesporte.com",145],["mytoolz.net",145],["haoweichi.com",145],["tcheats.com",146],["tobys.dk",146],["sembunyi.in",147],["anime-jl.net",148],["zplayer.live",149],["fuckdy.com",150],["bdsmporntub.com",150],["femdomporntubes.com",150],["spellchecker.net",151],["nackte.com",154],["highporn.net",154],["blasensex.com",154],["thegatewaypundit.com",155],["your-daily-girl.com",155],["720pxmovies.blogspot.com",156],["penis-bilder.com",157],["boyfriendtv.com",157],["dansmovies.com",157],["shegotass.info",157],["phimmoiaz.cc",157],["mvidoo.com",157],["imgdawgknuttz.com",158],["m4maths.com",159],["poki-gdn.com",159],["megapornfreehd.com",160],["tonpornodujour.com",161],["absentescape.net",162],["forgepattern.net",162],["vidlink.pro",162],["nflscoop.xyz",162],["tunovelaligera.com",163],["dr-farfar.com",163],["nysainfo.pl",163],["c1ne.co",163],["bleachmx.fr",163],["choq.fm",163],["geeksweb.net",163],["usb-antivirus.com",163],["eroticmv.com",163],["allywebsite.com",163],["ktm2day.com",163],["downloadcursos.net",163],["bezpolitickekorektnosti.cz",164],["protopage.com",165],["topito.com",166],["livesport.ws",168],["citynow.it",169],["variety.com",170],["cuatro.com",171],["mitele.es",171],["telecinco.es",171],["serieslandia.com",172],["softwaredescargas.com",172],["morritastube.xxx",[172,261]],["rawstory.com",173],["post-gazette.com",173],["bilasport.net",175],["yogitimes.com",176],["juba-get.com",177],["kuncomic.com",177],["percentagecalculator.guru",177],["claim.8bit.ca",[178,232]],["lightnovelpdf.com",178],["ta2deem7arbya.com",178],["adsy.pw",178],["playstore.pw",178],["bootyexpo.net",178],["arbweb.info",178],["th3tech.net",178],["cryptonationfaucet.com",178],["solarchaine.com",178],["tokenmix.pro",178],["terafly.me",178],["addtobucketlist.com",178],["alternativa104.net",178],["asumesi.com",178],["ayo24.id",178],["barrier-free.net",178],["berich8.com",178],["bloooog.it",178],["branditechture.agency",178],["chataigpt.org",178],["coinsrev.com",178],["eliobenedetto.it",178],["iamflorianschulze.com",178],["kyoto-kanko.net",178],["limontorrents.com",178],["livenewsof.com",178],["medeberiya1.com",178],["medeberiyax.com",178],["oyundunyasi.net",178],["parrocchiapalata.it",178],["photoshopvideotutorial.com",178],["samovies.net",178],["sulocale.sulopachinews.com",178],["tabering.net",178],["xn--nbkw38mlu2a.com",178],["faucetbravo.fun",178],["vstdrive.in",179],["lonely-mature.com",181],["tubepornclassic.com",182],["the-voice-of-germany.de",183],["adn.com",184],["spokesman.com",185],["news-herald.com",185],["verprogramasonline.com",186],["savealoonie.com",186],["pervertgirlsvideos.com",186],["open3dmodel.com",186],["elmundo.es",187],["expansion.com",187],["marca.com",187],["allusione.org",188],["cyberstumble.com",188],["wickedspot.org",188],["venusarchives.com",188],["freemagazines.top",188],["elektrikmen.com",188],["solotrend.net",188],["itsecuritynews.info",188],["thebharatexpressnews.com",188],["inwepo.co",188],["daemon-hentai.com",188],["pornstash.in",188],["toramemoblog.com",188],["7daystodiemods.com",188],["7review.com",188],["asupan.me",188],["avitter.net",188],["bi-girl.net",188],["carryflix.icu",188],["dark5k.com",188],["fairyhorn.cc",188],["gojo2.com",188],["gorecenter.com",188],["huitranslation.com",188],["javhdvideo.org",188],["nakiny.com",188],["nemumemo.com",188],["peppe8o.com",188],["phodoi.vn",188],["savingsomegreen.com",188],["boredbat.com",188],["web.businessuniqueidea.com",188],["questloops.com",188],["spinbot.com",189],["androidonepro.com",190],["arcadepunks.com",191],["wohnungsboerse.net",192],["nbareplayhd.com",194],["convert-case.softbaba.com",194],["thepoorcoder.com",194],["techgeek.digital",194],["warps.club",195],["truyenaudiocv.net",195],["kompasiana.com",196],["spectrum.ieee.org",197],["thenation.com",198],["newsonthegotoday.com",199],["sandiegouniontribune.com",200],["fernsehserien.de",200],["femalefirst.co.uk",201],["theregister.co.uk",202],["sportstream.live",203],["blowjobgif.net",204],["erospots.info",205],["pornforrelax.com",206],["macrumors.com",207],["faupto.com",[208,209]],["dogemate.com",209],["napolipiu.com",210],["manpeace.org",211],["faucetwork.space",211],["gaminginfos.com",211],["png.is",[212,213,214]],["nohat.cc",[213,214]],["fuskator.com",215],["scrubson.blogspot.com",216],["khmer7.org",216],["aquariumgays.com",217],["paginadanoticia.com.br",218],["aylink.co",221],["gitizle.vip",221],["shtms.co",221],["suaurl.com",[222,223]],["sportfacts.net",[222,227]],["blog24.me",224],["exactpay.online",[224,233]],["soltoshindo.com",224],["crypto4yu.com",224],["laweducationinfo.com",225],["savemoneyinfo.com",225],["worldaffairinfo.com",225],["godstoryinfo.com",225],["successstoryinfo.com",225],["cxissuegk.com",225],["learnmarketinfo.com",225],["bhugolinfo.com",225],["armypowerinfo.com",225],["rsadnetworkinfo.com",225],["rsinsuranceinfo.com",225],["rsfinanceinfo.com",225],["rsgamer.app",225],["rssoftwareinfo.com",225],["rshostinginfo.com",225],["rseducationinfo.com",225],["phonereviewinfo.com",225],["makeincomeinfo.com",225],["gknutshell.com",225],["vichitrainfo.com",225],["workproductivityinfo.com",225],["dopomininfo.com",225],["hostingdetailer.com",225],["fitnesssguide.com",225],["tradingfact4u.com",225],["cryptofactss.com",225],["softwaredetail.com",225],["artoffocas.com",225],["insurancesfact.com",225],["travellingdetail.com",225],["currentrecruitment.com",226],["investorveda.com",226],["cookad.net",227],["pmkisanlists.in",227],["shramikcard.in",227],["shareus.io",227],["sportnews.to",227],["gamerxyt.com",227],["faqwiki.us",227],["zeeplayer.pages.dev",227],["techacode.com",228],["azmath.info",228],["downfile.site",228],["downphanmem.com",228],["expertvn.com",228],["memangbau.com",228],["trangchu.news",228],["aztravels.net",228],["techyuth.xyz",229],["claimclicks.com",230],["tejtime24.com",231],["comohoy.com",[231,331]],["cimanow.cc",231],["10convert.com",234],["pleated-jeans.com",234],["obsev.com",234],["wepc.com",234],["gal-dem.com",235],["mymusicreviews.com",236],["thechat.cafe",236],["gaystream.pw",237],["lagacetadesalamanca.es",238],["infocorp.io",239],["addictinggames.com",240],["comparteunclic.com",241],["grab.tc",241],["starbux.io",241],["qashbits.com",241],["upnewsinfo.com",242],["smdailyjournal.com",243],["toolforge.org",244],["getdogecoins.com",246],["malaysiastock.biz",247],["1bit.space",248],["1bitspace.com",248],["ytanime.tv",248],["pimylifeup.com",249],["camwhorez.video",250],["best-shopme.com",251],["cpomagazine.com",252],["doramasyt.com",253],["monoschinos.com",253],["xxxdan.com",254],["standardmedia.co.ke",255],["files.fm",255],["ludwig-van.com",255],["abandonmail.com",256],["hentais.tube",257],["hentaitube.online",257],["aegeanews.gr",258],["batterypoweronline.com",258],["brezovycukr.cz",258],["centrocommercialevulcano.com",258],["cieonline.co.uk",258],["commsbusiness.co.uk",258],["dailygrindonline.net",258],["delo.bg",258],["dynastyseries.com",258],["fabmx1.com",258],["fat-bike.com",258],["fmj.co.uk",258],["localemagazine.com",258],["loveourweddingmag.com",258],["metaforespress.gr",258],["myvalley.it",258],["niestatystyczny.pl",258],["primapaginamarsala.it",258],["ringelnatz.net",258],["schoolsweek.co.uk",258],["sikkenscolore.it",258],["sportbet.gr",258],["stadtstudenten.de",258],["stagemilk.com",258],["tautasdziesmas.lv",258],["thetoneking.com",258],["toplickevesti.com",258],["zeroradio.co.uk",258],["miohentai.com",259],["sluttyrat.com",260],["k12reader.com",262],["cachevalleydaily.com",262],["panel.skynode.pro",263],["imag-r.com",263],["atlaq.com",264],["douploads.net",264],["moalm-qudwa.blogspot.com",264],["mcloud.bz",265],["vidstream.pro",265],["radionylive.com",266],["radioitalylive.com",266],["radiolovelive.com",266],["radiocountrylive.com",266],["radiosymphony.com",266],["miamibeachradio.com",266],["radiorockon.com",266],["radioitaliacanada.com",266],["radioitalianmusic.com",266],["radioamericalatina.com",266],["radiosantaclaus.com",266],["radionorthpole.com",266],["radionatale.com",266],["pornvideoq.com",268],["gaminggorilla.com",268],["sexuhot.com",268],["rexxx.org",269],["world4.eu",270],["flinsetyadi.com",270],["trytutorial.com",270],["rimworldbase.com",270],["ifreemagazines.com",270],["romaniataramea.com",271],["amateur8.com",272],["freeporn8.com",272],["maturetubehere.com",272],["sortporn.com",272],["textovisia.com",273],["hotcleaner.com",274],["momo-net.com",275],["hardwarezone.com.sg",276],["b2bhint.com",[278,279]],["baikin.net",278],["unsurcoenlasombra.com",278],["veryfastdownload.pw",281],["nation.africa",282],["manganelo.tv",283],["vermoegen.org",284],["javhub.net",[285,286]],["inhumanity.com",287],["sunci.net",288],["yoykp.com",288],["iguarras.com",289],["iputitas.net",289],["fastream.to",289],["miraculous.to",290],["glotorrents.fr-proxy.com",291],["glotorrents.theproxy.ws",291],["tutele.sx",292],["dirp.me",293],["t18cv.com",294],["codecap.org",295],["integral-calculator.com",296],["derivative-calculator.net",296],["shorttrick.in",297],["sharedisk.me",297],["shrdsk.me",297],["looptorrent.org",297],["noicetranslations.blogspot.com",297],["serviceemmc.com",297],["getcopy.link",298],["basic-tutorials.de",299],["ytmp3cut.com",300],["depvailon.com",301],["111.90.150.10",302],["111.90.150.149",302],["111.90.151.26",302],["111.90.159.159",302],["111.90.141.252",302],["mangahentai.xyz",303],["nhentai.io",[305,306]],["erofound.com",307],["erome.com",308],["flaticon.com",309],["zertalious.xyz",[310,326]],["tweakcentral.net",311],["nokiahacking.pl",312],["javct.net",313],["veryfreeporn.com",314],["austiblox.net",315],["linkbin.me",[316,317]],["teachoo.com",319],["maisonbrico.com",320],["vebo1.com",321],["komiklokal.me",322],["seriesmetro.net",323],["blog.textpage.xyz",325],["alliptvlinks.com",325],["kodewebsite.com",327],["qcheng.cc",328],["hygiena.com",329],["netchimp.co.uk",330],["xgroovy.com",332],["ruyashoujo.com",333],["xmateur.com",334],["gktech.uk",335],["x2download.com",336],["familyminded.com",337],["foxvalleyfoodie.com",337],["merriam-webster.com",337],["news.com.au",337],["playstationlifestyle.net",337],["sportsnaut.com",337],["tempumail.com",337],["toledoblade.com",337],["play.diziyou.co",338],["truyen-hentai.com",339],["redd.tube",340],["sendspace.com",341],["leechpremium.net",342],["freethesaurus.com",345],["thefreedictionary.com",345],["counterstrike-hack.leforum.eu",346],["ajt.xooit.org",346],["drivemoe.com",347],["dsharer.com",347],["pupupul.site",348],["fansubseries.com.br",348],["jadoo.lol",349],["sinensistoon.com",350],["usersdrive.com",351],["manoramaonline.com",352],["realmoasis.com",353],["technewsworld.com",354],["rjno1.com",355],["gpldose.com",356],["zinkmovies.in",357],["sbs.com.au",358],["sfr.fr",359],["ericdraken.com",360],["djs.sk",362],["pythonjobshq.com",363],["sensacine.com",365]]);

const entitiesMap = new Map([["wetteronline",3],["ohmymag",6],["pingit",[8,18,24,73]],["oload",[8,18,24,26]],["streamhoe",[8,18]],["123europix",[12,13,24]],["gamestorrents",13],["gogoanimes",13],["limetorrents",13],["piratebayz",13],["europixhd",[13,24]],["hdeuropix",[13,24]],["topeuropix",[13,24]],["grantorrent",[13,91]],["moviescounter",13],["elixx",[13,75]],["telerium",13],["savelinks",13],["hentaisd",13],["mrpiracy",13],["prostoporno",15],["kissasian",16],["bflix",[16,24,265]],["m4ufree",[16,116]],["0123movies",16],["gomovies",16],["lookmovie",[16,38]],["fembed",[16,77]],["mavplay",[16,22,77]],["videobb",[16,22,77,109]],["5movies",16],["123moviesc",16],["proxybit",16],["123movieshd",16],["fbgo",[16,77]],["sbchip",[16,77]],["sbflix",[16,77]],["sbplay",[16,77]],["sbplay2",[16,77]],["sbplay3",[16,77]],["sbrulz",[16,77]],["streamsb",[16,77,280]],["1tamilmv",16],["buffstream",16],["tenies-online",16],["m4uhd",16],["hdhub4u",16],["watchseries9",16],["moviesjoy",16],["torrentstatus",16],["yts2",16],["y2mate",16],["alexsports",16],["2embed",16],["seulink",16],["encurtalink",16],["fmovies",16],["animepahe",[18,32]],["kwik",[18,32]],["1337x.unblocked",18],["1337x.unblockit",[18,20]],["pussyspace",18],["urlcero",18],["shrtfly",[18,60]],["linkshorts",18],["streamcdn",[18,24]],["vinaurl",[18,106]],["komikcast",18],["bolly4u",[18,133]],["tugaflix",18],["hdfriday",18],["123movies",18],["shortearn",[18,24]],["mstream",18],["watch4hd",18],["gdtot",18],["shrink",[18,38,106]],["bluemediafiles",18],["dailysport",[18,24]],["btdb",[18,21]],["linksfire",18],["pureshort",[18,106]],["bluemediadownload",[18,26]],["bluemediafile",[18,26]],["bluemedialink",[18,26]],["bluemediastorage",[18,26]],["bluemediaurls",[18,26]],["urlbluemedia",[18,26]],["link1s",[18,106]],["shorttey",[18,106]],["videoplayer",18],["movizland",18],["sitesunblocked",18],["1377x",18],["bcvc",18],["steamplay",[20,21,22]],["streamp1ay",[21,22]],["topflix",21],["ustream",21],["pixlev",21],["moviessources",21],["steanplay",22],["stemplay",22],["streanplay",22],["txxx",22],["asianclub",[22,24,77]],["mcloud",24],["vizcloud",24],["vizcloud2",24],["ouo",24],["songs",24],["gogoanimetv",24],["daddylive",[24,76]],["pelisplus",24],["streamm4u",24],["inkapelis",24],["ettv",24],["pelix",24],["pnd",24],["0123movie",24],["movies123",24],["piratebay",24],["webbro",24],["javwide",24],["vidhd",24],["mirrorace",24],["thoptv",24],["streamingworld",24],["yesmovies",24],["solarmovie",24],["bdiptv",24],["cinemalibero",24],["pctfenix",[24,139]],["pctnew",[24,139]],["watchgameofthrones",24],["tmearn",[24,106]],["kinoz",[24,26]],["shorten",[24,106,180]],["123animes",[24,109]],["openloadmovies",24],["gdriveplayer",24],["crichd",24],["vipracing",24],["supervideo",24],["ilgeniodellostreaming",24],["superstream",24],["ask4movie",24],["123movies-org",24],["sflix",24],["primetubsub",24],["moviesland",[24,77]],["f2movies",24],["vidsrc",[24,77]],["1337x",[24,289]],["a2zapk",24],["xmoviesforyou",[25,26]],["imgmaze",[25,61,72]],["imgtown",[25,61,71,72]],["imgrock",[25,71]],["thepiratebay",25],["cuevana3",[26,100]],["vidcloud",[26,77,116]],["pornid",26],["zbporn",[26,123]],["yomovies",26],["nonsensediamond",26],["xclusivejams",26],["sportlemon",26],["sportlemons",26],["sportlemonx",26],["kinox",26],["remaxhd",26],["img4fap",26],["babeporn",26],["babytorrent",26],["123moviesme",26],["xxxhdvideo",26],["biqle",30],["otakuindo",30],["watchseries",31],["streamtape",31],["vipboxtv",31],["x1337x",31],["streameast",31],["yts",33],["sexvid",[35,167]],["camwhores",[36,97]],["camwhorestv",[36,97]],["silkengirl",[36,61,62]],["rintor",36],["imgsen",[36,71]],["imgsto",[36,71]],["sxyprn",37],["hqq",38],["waaw",[39,116]],["vapley",39],["younetu",39],["player.uwatchfree",[39,116,304]],["waaaw",[39,116]],["waaw1",[39,116]],["123link",[41,42,43]],["7mmtv",45],["pornhat",47],["porno-tour",47],["desivideos",47],["movie4me",52],["imgdew",[61,71,72]],["imgview",[61,71,72]],["pandamovie",62],["speedporn",62],["watchpornfree",62],["imgoutlet",[71,72]],["anitube",72],["movisubmalay",[72,109]],["waploaded",72],["dirtyindianporn",72],["indianpornvideos",72],["kashtanka",72],["onlyindianporn",72],["porno18",72],["xxnx",72],["xxxindianporn",72],["adsrt",73],["stream2watch",75],["peliculas-dvdrip",75],["kinoger",77],["iframejav",77],["mm9844",77],["netxwatch",77],["milfnut",77],["anxcinema",77],["videofilms",77],["prosongs",77],["ncdnstm",77],["filelions",77],["streamwish",77],["bunkr",84],["pouvideo",85],["povvideo",85],["povw1deo",85],["povwideo",85],["powv1deo",85],["powvibeo",85],["powvideo",85],["powvldeo",85],["grantorrent1",91],["subtorrents",[91,103]],["subtorrents1",[91,103]],["filesamba",97],["theproxy",97],["megalink",106],["earnload",106],["miniurl",106],["shrinke",106],["shrinkme",106],["earncash",106],["shortzzy",106],["lite-link",106],["adcorto",106],["dogecoin",106],["upfiles",106],["torrentz2eu",109],["afilmywap",109],["okhatrimaza",109],["123anime",109],["gomoviesfree",109],["player.tormalayalamhd",116],["depedlps",118],["videovard",121],["asiansex",130],["japanfuck",130],["japanporn",130],["teensex",130],["vintagetube",130],["xxxmovies",130],["0l23movies",131],["cloudvideotv",134],["movierulzlink",137],["newmovierulz",137],["3hiidude",137],["ispunlock",141],["tpb",141],["vgmlinks",153],["thestreameast",162],["zone-annuaire",163],["rainanime",174],["blurayufr",178],["tutsnode",188],["web2.0calc",193],["readcomiconline",194],["gplinks",219],["moviehdf",220],["movies4u",227],["movies4u3",227],["azsoft",228],["bg-gledai",236],["bolly4umovies",264],["123movieshub",265],["animeunity",265],["cima-club",265],["flixhq",265],["hindilinks4u",265],["t7meel",265],["bollyholic",277],["cricfree",289],["sportskart",289],["katmoviefix",295],["filemoon",318],["bitporno",324],["brainly",343],["dood",344]]);

const exceptionsMap = new Map([["pingit.com",[8,18,24,73]],["pingit.me",[8,18,24,73]]]);

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

uBOL_abortOnPropertyRead();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
