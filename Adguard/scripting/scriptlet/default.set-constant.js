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
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["detectAdBlock","noopFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["window.isAdblockActive","false"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["placeAdsHandler","noopFunc"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["document.hasFocus","trueFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["Object.prototype.isAllAdClose","true"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["isRequestPresent","true"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["protection","noopFunc"],["Yii2App.playbackTimeout","0"],["private","false"],["Notification","undefined"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["wpsafelinkCount","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["linkvertise.com",11],["elcriticodelatele.com",[11,305]],["gadgets.es",[11,305]],["amateurporn.co",[11,107]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,408]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,110]],["familyporn.tv",17],["cloudemb.com",[17,325]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,92]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["stevenimaginelittle.com",21],["troyyourlead.com",21],["denisegrowthwide.com",21],["nectareousoverelate.com",21],["apinchcaseation.com",21],["timberwoodanotia.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["netu.ac",26],["dirtyvideo.fun",27],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,131]],["stfly.me",28],["oncehelp.com",28],["bit-url.com",28],["rgl.vn",28],["reqlinks.net",28],["megaurl.in",28],["megafly.in",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["7r6.com",28],["oko.sh",28],["shortpaid.com",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["srek.net",28],["skincarie.com",28],["exeo.app",28],["birdurls.com",28],["coinlyhub.com",[28,215]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,224]],["owllink.net",28],["cutdl.xyz",28],["gplinks.co",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["iir.ai",28],["shorteet.com",[28,244]],["sekilastekno.com",28],["promo-visits.site",28],["satoshi-win.xyz",[28,253]],["shorterall.com",28],["smoner.com",28],["linkshrnk.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["cashurl.in",28],["4cash.me",28],["namaidani.com",28],["bitfly.io",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["fxlap.com",28],["earnfasts.com",28],["tawiia.com",28],["droplink.co",28],["recipestutorials.com",28],["2shrt.com",28],["apkshrt.com",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["try2link.com",28],["jameeltips.us",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["clickscoin.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["shortlink.prz.pw",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["enagato.com",28],["automotur.club",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,152]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,224]],["snowurl.com",[28,224]],["upshrink.com",28],["enit.in",[28,240]],["ez4short.com",28],["easysky.in",28],["veganab.co",28],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["linkshortify.site",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["cutx.me",28],["cryptoon.xyz",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["pandaznetwork.com",28],["atglinks.com",28],["du-link.in",28],["linksfy.co",28],["news.speedynews.xyz",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["oii.io",28],["novelssites.com",28],["links.medipost.org",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["adrinolinks.in",28],["link4rev.site",28],["bloginguru.xyz",28],["tii.la",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",28],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["gainl.ink",28],["windowslite.net",[28,224]],["coinsl.click",28],["exalink.fun",28],["short2url.xyz",28],["exego.app",28],["panyshort.link",28],["viewfr.com",28],["easycut.io",28],["cpm.icu",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["kiddyshort.com",28],["watchmygf.me",[29,54]],["camwhorez.tv",[29,40,91,92]],["fpo.xxx",[29,56]],["sexemix.com",29],["heavyfetish.com",[29,488]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,210]],["yourporngod.com",[40,41]],["javbangers.com",[40,294]],["camfox.com",40],["camthots.tv",[40,125]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,127]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,107,125,127]],["bravoerotica.net",[56,127]],["youx.xxx",56],["camclips.tv",[56,210]],["camflow.tv",[56,107,127,174,248]],["camhoes.tv",[56,107,125,127,174,248]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,127]],["analdin.com",[56,127]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,437]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,95]],["weatherx.co.in",[83,95]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["tubitv.com",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,126]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,107]],["watchporn.to",[92,107]],["camwhorez.video",92],["footstockings.com",[93,107]],["sbs.com.au",96],["4players.de",[96,222]],["ojogos.com.br",98],["powforums.com",99],["supforums.com",99],["studybullet.com",99],["usgamer.net",100],["recordonline.com",100],["123tvseries.co",102],["freebitcoin.win",103],["e-monsite.com",103],["coindice.win",103],["temp-mails.com",104],["freiepresse.de",105],["investing.com",106],["camhub.cc",107],["love4porn.com",107],["thotvids.com",107],["watchmdh.to",107],["celebwhore.com",107],["cluset.com",107],["4kporn.xxx",107],["xhomealone.com",107],["lusttaboo.com",[107,369]],["hentai-moon.com",107],["mp3fiber.com",108],["suedkurier.de",109],["anysex.com",111],["gomiblog.com",112],["iptvtools.net",112],["vlist.se",113],["pornve.com",114],["coolrom.com.au",115],["bitcotasks.com",115],["pornohirsch.net",116],["marie-claire.es",117],["gamezhero.com",117],["flashgirlgames.com",117],["onlinesudoku.games",117],["mpg.football",117],["sssam.com",117],["globalnews.ca",118],["drinksmixer.com",119],["leitesculinaria.com",119],["fupa.net",120],["ge-map-overlays.appspot.com",121],["browardpalmbeach.com",122],["dallasobserver.com",122],["houstonpress.com",122],["miaminewtimes.com",122],["phoenixnewtimes.com",122],["westword.com",122],["nhentai.net",123],["fox.com.tr",124],["caminspector.net",125],["camwhoreshd.com",125],["camgoddess.tv",125],["gay4porn.com",127],["mypornhere.com",127],["mediapason.it",128],["linkspaid.com",128],["tuotromedico.com",128],["neoteo.com",128],["phoneswiki.com",128],["celebmix.com",128],["myneobuxportal.com",128],["oyungibi.com",128],["25yearslatersite.com",128],["jeshoots.com",129],["techhx.com",129],["karanapk.com",129],["videogreen.xyz",130],["sypl.xyz",130],["playembed.xyz",130],["javhdporn.net",130],["redanimedatabase.cloud",130],["javstream.top",130],["flashplayer.fullstacks.net",132],["cloudapps.herokuapp.com",132],["youfiles.herokuapp.com",132],["temp-mail.org",133],["comnuan.com",134],["veedi.com",135],["battleboats.io",135],["fruitlab.com",136],["haddoz.net",136],["garoetpos.com",136],["stiletv.it",137],["hqtv.biz",139],["liveuamap.com",140],["filmiseriali.com",140],["muvibg.com",140],["linksht.com",[141,142]],["audycje.tokfm.pl",143],["hulu.com",[144,145,146]],["shush.se",147],["aniwatcher.com",148],["emurom.net",149],["allkpop.com",150],["azmath.info",151],["downfile.site",151],["downphanmem.com",151],["expertvn.com",151],["memangbau.com",151],["trangchu.news",151],["aztravels.net",151],["adfoc.us",151],["techacode.com",151],["sahlmarketing.net",151],["sptfy.be",151],["techsotta.com",151],["wikitraveltips.com",[151,338]],["amritadrino.com",[151,338]],["streamcheck.link",151],["mcafee-com.com",[151,401]],["pickcrackpasswords.blogspot.com",153],["kfrfansub.com",154],["thuglink.com",154],["voipreview.org",154],["hanime.tv",155],["pogo.com",156],["cloudvideo.tv",157],["legionjuegos.org",158],["legionpeliculas.org",158],["legionprogramas.org",158],["16honeys.com",159],["elespanol.com",160],["remodelista.com",161],["coolmathgames.com",[162,163,164,505]],["audiofanzine.com",165],["noweconomy.live",167],["howifx.com",167],["vavada5com.com",167],["hitokin.net",168],["elil.cc",169],["developerinsider.co",170],["ilprimatonazionale.it",171],["hotabis.com",171],["root-nation.com",171],["italpress.com",171],["airsoftmilsimnews.com",171],["artribune.com",171],["thehindu.com",172],["cambro.tv",[173,174]],["nibelungen-kurier.de",175],["noz.de",176],["earthgarage.com",178],["pianetamountainbike.it",179],["barchart.com",180],["modelisme.com",181],["parasportontario.ca",181],["prescottenews.com",181],["nrj-play.fr",182],["oeffentlicher-dienst.info",183],["hackingwithreact.com",184],["gutekueche.at",185],["eplfootballmatch.com",186],["peekvids.com",187],["playvids.com",187],["pornflip.com",187],["redensarten-index.de",188],["vw-page.com",189],["viz.com",[190,191]],["queenfaucet.website",192],["0rechner.de",193],["configspc.com",194],["xopenload.me",194],["uptobox.com",194],["uptostream.com",194],["onepiece-tube.com",195],["japgay.com",196],["mega-debrid.eu",197],["dreamdth.com",198],["pijanitvor.com",198],["diaridegirona.cat",200],["diariodeibiza.es",200],["diariodemallorca.es",200],["diarioinformacion.com",200],["eldia.es",200],["emporda.info",200],["farodevigo.es",200],["laopinioncoruna.es",200],["laopiniondemalaga.es",200],["laopiniondemurcia.es",200],["laopiniondezamora.es",200],["laprovincia.es",200],["levante-emv.com",200],["mallorcazeitung.es",200],["regio7.cat",200],["superdeporte.es",200],["playpaste.com",201],["player.rtl2.de",202],["freetutorialsus.com",203],["vidlii.com",[203,220]],["iammagnus.com",203],["dailyvideoreports.net",203],["unityassets4free.com",203],["cnbc.com",204],["puzzles.msn.com",205],["metro.us",205],["newsobserver.com",205],["arkadiumhosted.com",205],["spankbang.com",206],["firefaucet.win",207],["55k.io",208],["filelions.online",208],["direct-link.net",209],["direkt-wissen.com",209],["link-to.net",209],["fullhdxxx.com",211],["pornclassic.tube",212],["tubepornclassic.com",212],["getintopc.com",213],["unique-tutorials.info",213],["etonline.com",214],["creatur.io",214],["drphil.com",214],["urbanmilwaukee.com",214],["ontiva.com",214],["hideandseek.world",214],["myabandonware.com",214],["mangaalarab.com",214],["kendam.com",214],["wttw.com",214],["synonyms.com",214],["definitions.net",214],["hostmath.com",214],["camvideoshub.com",214],["minhaconexao.com.br",214],["bravedown.com",214],["home-made-videos.com",216],["pxrnxx.xyz",216],["amateur-couples.com",216],["slutdump.com",216],["produsat.com",218],["12thman.com",220],["acusports.com",220],["atlantic10.com",220],["auburntigers.com",220],["baylorbears.com",220],["bceagles.com",220],["bgsufalcons.com",220],["big12sports.com",220],["bigten.org",220],["bradleybraves.com",220],["butlersports.com",220],["cmumavericks.com",220],["conferenceusa.com",220],["cyclones.com",220],["dartmouthsports.com",220],["daytonflyers.com",220],["dbupatriots.com",220],["dbusports.com",220],["denverpioneers.com",220],["fduknights.com",220],["fgcuathletics.com",220],["fightinghawks.com",220],["fightingillini.com",220],["floridagators.com",220],["friars.com",220],["friscofighters.com",220],["gamecocksonline.com",220],["goarmywestpoint.com",220],["gobison.com",220],["goblueraiders.com",220],["gobobcats.com",220],["gocards.com",220],["gocreighton.com",220],["godeacs.com",220],["goexplorers.com",220],["goetbutigers.com",220],["gofrogs.com",220],["gogriffs.com",220],["gogriz.com",220],["golobos.com",220],["gomarquette.com",220],["gopack.com",220],["gophersports.com",220],["goprincetontigers.com",220],["gopsusports.com",220],["goracers.com",220],["goshockers.com",220],["goterriers.com",220],["gotigersgo.com",220],["gousfbulls.com",220],["govandals.com",220],["gowyo.com",220],["goxavier.com",220],["gozags.com",220],["gozips.com",220],["griffinathletics.com",220],["guhoyas.com",220],["gwusports.com",220],["hailstate.com",220],["hamptonpirates.com",220],["hawaiiathletics.com",220],["hokiesports.com",220],["huskers.com",220],["icgaels.com",220],["iuhoosiers.com",220],["jsugamecocksports.com",220],["longbeachstate.com",220],["loyolaramblers.com",220],["lrtrojans.com",220],["lsusports.net",220],["morrisvillemustangs.com",220],["msuspartans.com",220],["muleriderathletics.com",220],["mutigers.com",220],["navysports.com",220],["nevadawolfpack.com",220],["niuhuskies.com",220],["nkunorse.com",220],["nuhuskies.com",220],["nusports.com",220],["okstate.com",220],["olemisssports.com",220],["omavs.com",220],["ovcsports.com",220],["owlsports.com",220],["purduesports.com",220],["redstormsports.com",220],["richmondspiders.com",220],["sfajacks.com",220],["shupirates.com",220],["siusalukis.com",220],["smcgaels.com",220],["smumustangs.com",220],["soconsports.com",220],["soonersports.com",220],["themw.com",220],["tulsahurricane.com",220],["txst.com",220],["txstatebobcats.com",220],["ubbulls.com",220],["ucfknights.com",220],["ucirvinesports.com",220],["uconnhuskies.com",220],["uhcougars.com",220],["uicflames.com",220],["umterps.com",220],["uncwsports.com",220],["unipanthers.com",220],["unlvrebels.com",220],["uoflsports.com",220],["usdtoreros.com",220],["utahstateaggies.com",220],["utepathletics.com",220],["utrockets.com",220],["uvmathletics.com",220],["uwbadgers.com",220],["villanova.com",220],["wkusports.com",220],["wmubroncos.com",220],["woffordterriers.com",220],["1pack1goal.com",220],["bcuathletics.com",220],["bubraves.com",220],["goblackbears.com",220],["golightsgo.com",220],["gomcpanthers.com",220],["goutsa.com",220],["mercerbears.com",220],["pirateblue.com",220],["pirateblue.net",220],["pirateblue.org",220],["quinnipiacbobcats.com",220],["towsontigers.com",220],["tribeathletics.com",220],["tribeclub.com",220],["utepminermaniacs.com",220],["utepminers.com",220],["wkutickets.com",220],["aopathletics.org",220],["atlantichockeyonline.com",220],["bigsouthnetwork.com",220],["bigsouthsports.com",220],["chawomenshockey.com",220],["dbupatriots.org",220],["drakerelays.org",220],["ecac.org",220],["ecacsports.com",220],["emueagles.com",220],["emugameday.com",220],["gculopes.com",220],["godrakebulldog.com",220],["godrakebulldogs.com",220],["godrakebulldogs.net",220],["goeags.com",220],["goislander.com",220],["goislanders.com",220],["gojacks.com",220],["gomacsports.com",220],["gseagles.com",220],["hubison.com",220],["iowaconference.com",220],["ksuowls.com",220],["lonestarconference.org",220],["mascac.org",220],["midwestconference.org",220],["mountaineast.org",220],["niu-pack.com",220],["nulakers.ca",220],["oswegolakers.com",220],["ovcdigitalnetwork.com",220],["pacersports.com",220],["rmacsports.org",220],["rollrivers.com",220],["samfordsports.com",220],["uncpbraves.com",220],["usfdons.com",220],["wiacsports.com",220],["alaskananooks.com",220],["broncathleticfund.com",220],["cameronaggies.com",220],["columbiacougars.com",220],["etownbluejays.com",220],["gobadgers.ca",220],["golancers.ca",220],["gometrostate.com",220],["gothunderbirds.ca",220],["kentstatesports.com",220],["lehighsports.com",220],["lopers.com",220],["lycoathletics.com",220],["lycomingathletics.com",220],["maraudersports.com",220],["mauiinvitational.com",220],["msumavericks.com",220],["nauathletics.com",220],["nueagles.com",220],["nwusports.com",220],["oceanbreezenyc.org",220],["patriotathleticfund.com",220],["pittband.com",220],["principiaathletics.com",220],["roadrunnersathletics.com",220],["sidearmsocial.com",220],["snhupenmen.com",220],["stablerarena.com",220],["stoutbluedevils.com",220],["uwlathletics.com",220],["yumacs.com",220],["collegefootballplayoff.com",220],["csurams.com",220],["cubuffs.com",220],["gobearcats.com",220],["gohuskies.com",220],["mgoblue.com",220],["osubeavers.com",220],["pittsburghpanthers.com",220],["rolltide.com",220],["texassports.com",220],["thesundevils.com",220],["uclabruins.com",220],["wvuathletics.com",220],["wvusports.com",220],["arizonawildcats.com",220],["calbears.com",220],["cuse.com",220],["georgiadogs.com",220],["goducks.com",220],["goheels.com",220],["gostanford.com",220],["insidekstatesports.com",220],["insidekstatesports.info",220],["insidekstatesports.net",220],["insidekstatesports.org",220],["k-stateathletics.com",220],["k-statefootball.net",220],["k-statefootball.org",220],["k-statesports.com",220],["k-statesports.net",220],["k-statesports.org",220],["k-statewomenshoops.com",220],["k-statewomenshoops.net",220],["k-statewomenshoops.org",220],["kstateathletics.com",220],["kstatefootball.net",220],["kstatefootball.org",220],["kstatesports.com",220],["kstatewomenshoops.com",220],["kstatewomenshoops.net",220],["kstatewomenshoops.org",220],["ksuathletics.com",220],["ksusports.com",220],["scarletknights.com",220],["showdownforrelief.com",220],["syracusecrunch.com",220],["texastech.com",220],["theacc.com",220],["ukathletics.com",220],["usctrojans.com",220],["utahutes.com",220],["utsports.com",220],["wsucougars.com",220],["mangadods.com",220],["tricksplit.io",220],["litecoinads.com",220],["fangraphs.com",221],["buffed.de",222],["gamesaktuell.de",222],["gamezone.de",222],["pcgames.de",222],["videogameszone.de",222],["planetaminecraft.com",223],["flyad.vip",224],["lapresse.ca",225],["kolyoom.com",226],["ilovephd.com",226],["upstream.to",227],["negumo.com",228],["games.wkb.jp",[229,230]],["channelmyanmar.org",[231,232]],["u-s-news.com",232],["fandom.com",[233,523,524]],["kenshi.fandom.com",234],["hausbau-forum.de",235],["fake-it.ws",236],["laksa19.github.io",237],["1shortlink.com",238],["nesia.my.id",239],["makemoneywithurl.com",240],["resetoff.pl",241],["sexodi.com",241],["cdn77.org",242],["howtofixwindows.com",243],["3sexporn.com",244],["momxxxsex.com",244],["myfreevintageporn.com",244],["penisbuyutucum.net",244],["lightnovelworld.com",245],["ujszo.com",246],["newsmax.com",247],["bobs-tube.com",248],["nadidetarifler.com",249],["siz.tv",249],["suzylu.co.uk",[250,251]],["onworks.net",252],["yabiladi.com",252],["homeairquality.org",254],["faucettronn.click",254],["ticketmaster.sg",254],["downloadsoft.net",255],["imgair.net",256],["imgblaze.net",256],["imgfrost.net",256],["pixsera.net",256],["vestimage.site",256],["imgwia.buzz",256],["testlanguages.com",257],["newsinlevels.com",257],["videosinlevels.com",257],["arcai.com",258],["my-code4you.blogspot.com",259],["vlxxs.net",260],["rapelust.com",260],["vtube.to",260],["vtplay.net",260],["desitelugusex.com",260],["xvideos-downloader.net",260],["xxxvideotube.net",260],["sdefx.cloud",260],["nozomi.la",260],["moviesonlinefree.net",260],["flickr.com",261],["firefile.cc",262],["pestleanalysis.com",262],["kochamjp.pl",262],["tutorialforlinux.com",262],["whatsaero.com",262],["animeblkom.net",[262,278]],["blkom.com",262],["globes.co.il",[263,264]],["jardiner-malin.fr",265],["tw-calc.net",266],["ohmybrush.com",267],["talkceltic.net",268],["zdam.xyz",269],["mentalfloss.com",270],["uprafa.com",271],["cube365.net",272],["nightfallnews.com",[273,274]],["wwwfotografgotlin.blogspot.com",275],["freelistenonline.com",275],["badassdownloader.com",276],["quickporn.net",277],["aosmark.com",279],["theappstore.org",279],["atozmath.com",[281,282,283,284,285,286,287]],["newyorker.com",288],["brighteon.com",289],["more.tv",290],["video1tube.com",291],["alohatube.xyz",291],["link.cgtips.org",292],["hentaicloud.com",293],["netfapx.com",295],["paperzonevn.com",297],["hentaienglish.com",298],["hentaiporno.xxx",298],["venge.io",[299,300]],["btcbux.io",301],["its.porn",[302,303]],["atv.at",304],["2ndrun.tv",305],["rackusreads.com",305],["exerror.com",305],["temp-phone-number.com",306],["jetpunk.com",308],["imgur.com",309],["hentai-party.com",310],["hentaicomics.pro",310],["xxx-comics.pro",310],["genshinimpactcalculator.com",313],["mysexgames.com",314],["embed.indavideo.hu",317],["coinurl.net",[318,319]],["gdr-online.com",320],["mmm.dk",321],["iqiyi.com",[322,323,471]],["m.iqiyi.com",324],["japopav.tv",325],["lvturbo.com",325],["nbcolympics.com",326],["apkhex.com",327],["indiansexstories2.net",328],["issstories.xyz",328],["1340kbbr.com",329],["gorgeradio.com",329],["kduk.com",329],["kedoam.com",329],["kejoam.com",329],["kelaam.com",329],["khsn1230.com",329],["kjmx.rocks",329],["kloo.com",329],["klooam.com",329],["klykradio.com",329],["kmed.com",329],["kmnt.com",329],["kool991.com",329],["kpnw.com",329],["kppk983.com",329],["krktcountry.com",329],["ktee.com",329],["kwro.com",329],["kxbxfm.com",329],["thevalley.fm",329],["dsocker1234.blogspot.com",330],["surfline.com",[331,354]],["blick.ch",332],["mgnet.xyz",333],["designtagebuch.de",334],["pixroute.com",335],["uploady.io",336],["calculator-online.net",337],["luckydice.net",338],["adarima.org",338],["tieutietkiem.com",338],["weatherwx.com",338],["sattaguess.com",338],["winshell.de",338],["rosasidan.ws",338],["modmakers.xyz",338],["gamepure.in",338],["warrenrahul.in",338],["austiblox.net",338],["upiapi.in",338],["myownguess.in",338],["watchhentai.net",338],["thichcode.net",338],["texturecan.com",338],["tikmate.app",[338,479]],["porngames.club",339],["sexgames.xxx",339],["111.90.159.132",340],["battleplan.news",340],["mobile-tracker-free.com",341],["pfps.gg",342],["ac-illust.com",[344,345]],["photo-ac.com",[344,345]],["social-unlock.com",346],["ninja.io",347],["sourceforge.net",348],["samfirms.com",349],["digminecraft.com",350],["banned.video",351],["conspiracyfact.info",351],["freeworldnews.tv",351],["madmaxworld.tv",351],["huffpost.com",352],["ingles.com",353],["spanishdict.com",353],["play.tv3.ee",355],["trendyoum.com",356],["bulbagarden.net",357],["doomovie-hd.com",358],["madoohd.com",358],["moviestars.to",359],["hollywoodlife.com",360],["searchresults.cc",361],["mat6tube.com",362],["textstudio.co",363],["newtumbl.com",364],["nevcoins.club",366],["mail.com",367],["erome.com",370],["oggi.it",[371,372]],["manoramamax.com",371],["video.gazzetta.it",[371,372]],["mangakita.net",373],["avpgalaxy.net",374],["mhma12.tech",375],["panda-novel.com",376],["zebranovel.com",376],["lightsnovel.com",376],["eaglesnovel.com",376],["pandasnovel.com",376],["zadfaucet.com",377],["ewrc-results.com",378],["kizi.com",379],["cyberscoop.com",380],["fedscoop.com",380],["canale.live",381],["mafiatown.pl",[382,383]],["jeep-cj.com",384],["sponsorhunter.com",385],["coinscap.info",386],["cryptowidgets.net",386],["greenenez.com",386],["insurancegold.in",386],["webfreetools.net",386],["wiki-topia.com",386],["blog.carsmania.net",386],["blog.carstopia.net",386],["blog.coinsvalue.net",386],["blog.cookinguide.net",386],["blog.freeoseocheck.com",386],["blog.makeupguide.net",386],["rapid-cloud.co",386],["cloudcomputingtopics.net",387],["likecs.com",388],["tiscali.it",389],["linkspy.cc",390],["tutelehd3.xyz",391],["dirty.pink",[392,393,394]],["adshnk.com",395],["chattanoogan.com",396],["adsy.pw",397],["playstore.pw",397],["socialmediagirls.com",398],["windowspro.de",399],["snapinsta.app",400],["carsmania.net",401],["carstopia.net",401],["coinsvalue.net",401],["cookinguide.net",401],["freeoseocheck.com",401],["makeupguide.net",401],["btcbitco.in",[401,428]],["btcsatoshi.net",401],["cempakajaya.com",401],["crypto4yu.com",401],["readbitcoin.org",401],["wiour.com",401],["exactpay.online",401],["aiimgvlog.fun",[401,466]],["tvtv.ca",402],["tvtv.us",402],["mydaddy.cc",403],["roadtrippin.fr",404],["redketchup.io",[405,406,407]],["anyporn.com",[408,423]],["bravoporn.com",408],["bravoteens.com",408],["crocotube.com",408],["hellmoms.com",408],["hellporno.com",408],["sex3.com",408],["tubewolf.com",408],["xbabe.com",408],["xcum.com",408],["zedporn.com",408],["imagetotext.info",409],["4funbox.com",410],["nephobox.com",410],["1024tera.com",410],["infokik.com",411],["freepik.com",412],["ddwloclawek.pl",[413,414]],["deezer.com",415],["my-subs.co",416],["plaion.com",417],["slideshare.net",[418,419]],["ustreasuryyieldcurve.com",420],["businesssoftwarehere.com",421],["goo.st",421],["freevpshere.com",421],["softwaresolutionshere.com",421],["staige.tv",424],["androidadult.com",425],["streamvid.net",426],["watchtv24.com",427],["cellmapper.net",429],["medscape.com",430],["newscon.org",[431,432]],["arkadium.com",433],["app.blubank.com",434],["lifesurance.info",435],["sportdeutschland.tv",436],["kcra.com",436],["wcvb.com",436],["ccthesims.com",438],["chromeready.com",438],["coursedrive.org",438],["dtbps3games.com",438],["illustratemagazine.com",438],["vod.pl",439],["megadrive-emulator.com",440],["animesaga.in",443],["moviesapi.club",443],["bestx.stream",443],["watchx.top",443],["digimanie.cz",444],["svethardware.cz",444],["srvy.ninja",445],["drawer-opportunity-i-243.site",446],["tchatche.com",447],["ozulmanga.com",448],["edmdls.com",449],["freshremix.net",449],["scenedl.org",449],["trakt.tv",[450,451,452]],["shroomers.app",453],["di.fm",[454,455,456]],["qtoptens.com",457],["reuters.com",457],["today.com",457],["videogamer.com",457],["wrestlinginc.com",457],["techedubyte.com",458],["quesignifi.ca",459],["movie-th.tv",460],["iwanttfc.com",461],["nutraingredients-asia.com",462],["nutraingredients-latam.com",462],["nutraingredients-usa.com",462],["nutraingredients.com",462],["livesportsclub.me",463],["rogstream.fun",463],["ozulscansen.com",464],["fitnessbr.click",465],["minhareceita.xyz",465],["doomied.monster",467],["lookmovie2.to",467],["appsbull.com",468],["diudemy.com",468],["maqal360.com",468],["bildirim.link",469],["royalroad.com",470],["biletomat.pl",472],["hextank.io",[474,475]],["gofilmizle.com",[476,477]],["aduzz.com",478],["bitcrypto.info",478],["sagewater.com",480],["satdl.com",481],["teamskeet.com",482],["tacobell.com",484],["webtoons.com",[485,486]],["zefoy.com",487],["natgeotv.com",489],["br.de",490],["pasteboard.co",491],["avclub.com",492],["clickhole.com",492],["deadspin.com",492],["gizmodo.com",492],["jalopnik.com",492],["jezebel.com",492],["kotaku.com",492],["lifehacker.com",492],["splinternews.com",492],["theinventory.com",492],["theonion.com",492],["theroot.com",492],["thetakeout.com",492],["pewresearch.org",492],["los40.com",[493,494]],["as.com",494],["telegraph.co.uk",[495,496]],["poweredbycovermore.com",[495,542]],["lumens.com",[495,542]],["verizon.com",497],["humanbenchmark.com",498],["politico.com",499],["officedepot.co.cr",[500,501,502,503]],["usnews.com",504],["factable.com",506],["zee5.com",507],["gala.fr",508],["geo.fr",508],["voici.fr",508],["gloucestershirelive.co.uk",509],["arsiv.mackolik.com",510],["jacksonguitars.com",511],["scandichotels.com",512],["stylist.co.uk",513],["nettiauto.com",514],["thaiairways.com",[515,516]],["cerbahealthcare.it",[517,518]],["futura-sciences.com",[517,533]],["tiendaenlinea.claro.com.ni",[519,520]],["tieba.baidu.com",521],["linktr.ee",522],["grasshopper.com",[525,526]],["epson.com.cn",[527,528]],["oe24.at",[529,530]],["szbz.de",529],["platform.autods.com",[531,532]],["wikihow.com",534],["citibank.com.sg",535],["uol.com.br",[536,537,538]],["gazzetta.gr",539],["digicol.dpm.org.cn",[540,541]],["virginmediatelevision.ie",543],["larazon.es",[544,545]],["waitrosecellar.com",[546,547,548]],["kicker.de",549],["sharpen-free-design-generator.netlify.app",[550,551]],["help.cashctrl.com",[552,553]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",[26,27]],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["urlty",28],["shrink",28],["clk",28],["tmearn",28],["megalink",28],["miniurl",28],["pcprogramasymas",28],["link1s",28],["shrinke",28],["shrinkme",28],["shortzzy",28],["shorttey",[28,214]],["lite-link",28],["pureshort",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,40,91,92,93]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,199]],["xtits",[56,127]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["linkberuang",89],["kickassanime",94],["subtorrents",97],["subtorrents1",97],["newpelis",97],["pelix",97],["allcalidad",97],["infomaniakos",97],["filecrypt",101],["tornadomovies",102],["sexwebvideo",107],["mangovideo",107],["icdrama",113],["mangasail",113],["file4go",115],["asianclub",130],["anitube",136],["mixdrop",138],["azsoft",151],["uploadev",166],["ver-pelis-online",177],["ancient-origins",186],["lookcam",214],["lootlinks",214],["dpstream",217],["bluemediafiles",219],["docer",241],["pixlev",256],["skymovieshd",260],["dvdplay",260],["ctrlv",280],["crackstreams",296],["123movieshd",307],["uproxy",311],["animesa",312],["cinecalidad",[315,316]],["dropgalaxy",343],["apkmaven",365],["gmx",368],["terabox",410],["gamereactor",422],["tvhay",[441,442]],["lookmovie",467],["lk21official",473],["www.google",483]]);

const exceptionsMap = new Map([["pingit.com",[28]],["pingit.me",[28]],["lookmovie.studio",[467]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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
        'Math_max': Math.max,
        'Math_min': Math.min,
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
    try { setConstant(...argsList[i]); }
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
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
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
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
