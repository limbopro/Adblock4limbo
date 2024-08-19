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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["aSl.gcd","0"],["counter","10"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS1","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["SalesforceInteractions","{}"],["SalesforceInteractions.CatalogObjectInteractionName"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,584]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,254]],["gadgets.es",[12,254]],["amateurporn.co",[12,100]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,439]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,104]],["familyporn.tv",15],["cloudemb.com",[15,361]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,85]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["netu.frembed.fun",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,124]],["stfly.me",24],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,202]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,215]],["owllink.net",24],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,234]],["sekilastekno.com",24],["smoner.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,230]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,287]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["cety.app",24],["exego.app",[24,283]],["cutlink.net",24],["cutsy.net",24],["cutyurls.com",24],["cutty.app",24],["cutnet.net",24],["tinys.click",[24,215]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tvi.la",24],["iir.la",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,230]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["thotpacks.xyz",24],["megaurl.in",24],["megafly.in",24],["simana.online",24],["fooak.com",24],["link.paid4link.com",[24,293]],["exalink.fun",24],["indiamaja.com",24],["newshuta.in",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["apkshrt.com",24],["srts.me",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["1shorten.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["viraloc.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["haonguyen.top",24],["claimfreebits.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["short.palmeratv.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["pix4link.com",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,142]],["download.baominh.tech",24],["bblink.com",24],["linkbr.xyz",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["dash-free.com",[24,215]],["snowurl.com",[24,215]],["netfile.cc",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,453]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,215]],["coinsl.click",24],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,52]],["camwhorez.tv",[25,38,84,85]],["cambay.tv",[25,54,84,100,117,119,120,121]],["fpo.xxx",[25,54]],["sexemix.com",25],["heavyfetish.com",[25,519]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["jacquieetmicheltv.net",[34,35]],["illicoporno.com",34],["lavoixdux.com",34],["tonpornodujour.com",34],["jacquieetmichel.net",34],["swame.com",34],["vosfemmes.com",34],["voyeurfrance.net",34],["viki.com",[36,37]],["sleazyneasy.com",[38,39,40]],["smutr.com",[38,198]],["watchdirty.to",[38,85,86,100]],["yourporngod.com",[38,39]],["javbangers.com",[38,331]],["camfox.com",38],["camthots.tv",[38,117]],["shegotass.info",38],["amateur8.com",38],["bigtitslust.com",38],["ebony8.com",38],["freeporn8.com",38],["lesbian8.com",38],["maturetubehere.com",38],["sortporn.com",38],["webcamvau.com",38],["motherporno.com",[38,39,54,119]],["tktube.com",38],["theporngod.com",[38,39]],["pornsocket.com",41],["luxuretv.com",42],["porndig.com",[43,44]],["webcheats.com.br",45],["ceesty.com",[46,47]],["gestyy.com",[46,47]],["corneey.com",47],["destyy.com",47],["festyy.com",47],["sh.st",47],["mitaku.net",47],["angrybirdsnest.com",48],["zrozz.com",48],["clix4btc.com",48],["4tests.com",48],["planet-explorers-isos.com",48],["business-standard.com",48],["goltelevision.com",48],["news-und-nachrichten.de",48],["laradiobbs.net",48],["urlaubspartner.net",48],["produktion.de",48],["cinemaxxl.de",48],["bladesalvador.com",48],["tempr.email",48],["katfile.com",48],["trust.zone",48],["cshort.org",48],["friendproject.net",48],["covrhub.com",48],["planetsuzy.org",49],["empflix.com",50],["freeplayervideo.com",51],["nazarickol.com",51],["player-cdn.com",51],["playhydrax.com",51],["alleneconomicmatter.com",51],["apinchcaseation.com",51],["bigclatterhomesguideservice.com",51],["bradleyviewdoctor.com",51],["brookethoughi.com",51],["brucevotewithin.com",51],["cindyeyefinal.com",51],["denisegrowthwide.com",51],["edwardarriveoften.com",51],["erikcoldperson.com",51],["graceaddresscommunity.com",51],["heatherdiscussionwhen.com",51],["housecardsummerbutton.com",51],["jamesstartstudent.com",51],["jamiesamewalk.com",51],["jasminetesttry.com",51],["jasonresponsemeasure.com",51],["jayservicestuff.com",51],["johntryopen.com",51],["kennethofficialitem.com",51],["loriwithinfamily.com",51],["lukecomparetwo.com",51],["markstyleall.com",51],["michaelapplysome.com",51],["morganoperationface.com",51],["nectareousoverelate.com",51],["paulkitchendark.com",51],["rebeccaneverbase.com",51],["roberteachfinal.com",51],["robertplacespace.com",51],["ryanagoinvolve.com",51],["sandrataxeight.com",51],["seanshowcould.com",51],["sethniceletter.com",51],["shannonpersonalcost.com",51],["sharonwhiledemocratic.com",51],["stevenimaginelittle.com",51],["strawberriesporail.com",51],["timberwoodanotia.com",51],["tinycat-voe-fashion.com",51],["troyyourlead.com",51],["uptodatefinishconference.com",51],["uptodatefinishconferenceroom.com",51],["vincentincludesuccessful.com",51],["voe.sx",51],["motphimtv.com",51],["rabbitstream.net",51],["projectfreetv.one",51],["transparentcalifornia.com",52],["deepbrid.com",53],["submityourflicks.com",54],["3movs.com",54],["bravoerotica.net",[54,119]],["youx.xxx",54],["camclips.tv",[54,198]],["camflow.tv",[54,100,119,163,237]],["camhoes.tv",[54,100,117,119,163,237]],["xmegadrive.com",54],["xxxymovies.com",54],["xxxshake.com",54],["gayck.com",54],["xhand.com",[54,119]],["analdin.com",[54,119]],["webnovel.com",55],["videosgay.me",[56,57]],["oneupload.to",57],["wishfast.top",57],["schwaebische.de",58],["8tracks.com",59],["revealname.com",60],["fcportables.com",[61,62]],["golfchannel.com",64],["telemundodeportes.com",64],["stream.nbcsports.com",64],["mathdf.com",64],["gamcore.com",65],["porcore.com",65],["69games.xxx",65],["javmix.app",65],["tecknity.com",66],["haaretz.co.il",67],["haaretz.com",67],["hungama.com",67],["a-o.ninja",67],["anime-odcinki.pl",67],["kumpulmanga.org",67],["shortgoo.blogspot.com",67],["tonanmedia.my.id",[67,473]],["yurasu.xyz",67],["isekaipalace.com",67],["vikistream.com",68],["eplayer.click",[68,69]],["mega4upload.com",[69,75]],["ennovelas.com",[69,75]],["n-tv.de",70],["brigitte.de",71],["stern.de",71],["foxsports.com.au",72],["canberratimes.com.au",72],["thesimsresource.com",73],["bdnewszh.com",75],["streamservicehd.click",75],["timeforbitco.in",76],["worldofbitco.in",[76,87]],["weatherx.co.in",[76,87]],["getyourbitco.in",76],["sunbtc.space",76],["ctrl.blog",77],["sportlife.es",78],["finofilipino.org",79],["acortarm.xyz",80],["speedtest.net",81],["mysflink.blogspot.com",82],["assia.tv",83],["assia4.com",83],["assia24.com",83],["cwtvembeds.com",[85,118]],["xmateur.com",[85,86,100]],["camlovers.tv",85],["porntn.com",85],["pornissimo.org",85],["sexcams-24.com",[85,100]],["watchporn.to",[85,100]],["camwhorez.video",85],["footstockings.com",[86,100]],["sbs.com.au",88],["ojogos.com.br",90],["powforums.com",91],["supforums.com",91],["studybullet.com",91],["usgamer.net",92],["recordonline.com",92],["freebitcoin.win",94],["e-monsite.com",94],["coindice.win",94],["sport-tv-guide.live",95],["temp-mails.com",96],["freiepresse.de",97],["investing.com",98],["camhub.cc",100],["love4porn.com",100],["thotvids.com",100],["watchmdh.to",100],["celebwhore.com",100],["cluset.com",100],["4kporn.xxx",100],["xhomealone.com",100],["lusttaboo.com",[100,402]],["hentai-moon.com",100],["mp3fiber.com",101],["chicoer.com",102],["dailybreeze.com",102],["dailybulletin.com",102],["dailynews.com",102],["delcotimes.com",102],["eastbaytimes.com",102],["macombdaily.com",102],["ocregister.com",102],["pasadenastarnews.com",102],["pe.com",102],["presstelegram.com",102],["redlandsdailyfacts.com",102],["reviewjournal.com",102],["santacruzsentinel.com",102],["saratogian.com",102],["sentinelandenterprise.com",102],["sgvtribune.com",102],["tampabay.com",102],["times-standard.com",102],["theoaklandpress.com",102],["trentonian.com",102],["twincities.com",102],["whittierdailynews.com",102],["bostonherald.com",102],["dailycamera.com",102],["sbsun.com",102],["dailydemocrat.com",102],["montereyherald.com",102],["orovillemr.com",102],["record-bee.com",102],["redbluffdailynews.com",102],["reporterherald.com",102],["thereporter.com",102],["timescall.com",102],["timesheraldonline.com",102],["ukiahdailyjournal.com",102],["dailylocal.com",102],["mercurynews.com",102],["suedkurier.de",103],["anysex.com",105],["vlist.se",106],["pornve.com",107],["coolrom.com.au",108],["pornohirsch.net",109],["marie-claire.es",110],["gamezhero.com",110],["flashgirlgames.com",110],["onlinesudoku.games",110],["mpg.football",110],["sssam.com",110],["globalnews.ca",111],["drinksmixer.com",112],["leitesculinaria.com",112],["fupa.net",113],["browardpalmbeach.com",114],["dallasobserver.com",114],["houstonpress.com",114],["miaminewtimes.com",114],["phoenixnewtimes.com",114],["westword.com",114],["nhentai.net",115],["nowtv.com.tr",116],["caminspector.net",117],["camwhoreshd.com",117],["camgoddess.tv",117],["gay4porn.com",119],["mypornhere.com",119],["mediapason.it",122],["linkspaid.com",122],["tuotromedico.com",122],["neoteo.com",122],["phoneswiki.com",122],["celebmix.com",122],["myneobuxportal.com",122],["oyungibi.com",122],["25yearslatersite.com",122],["jeshoots.com",123],["techhx.com",123],["karanapk.com",123],["flashplayer.fullstacks.net",125],["cloudapps.herokuapp.com",125],["texteditor.nsspot.net",125],["youfiles.herokuapp.com",125],["temp-mail.org",126],["playembed.xyz",127],["javhdporn.net",127],["javstream.top",127],["comnuan.com",128],["veedi.com",129],["battleboats.io",129],["fruitlab.com",130],["haddoz.net",130],["garoetpos.com",130],["stiletv.it",131],["hqtv.biz",133],["liveuamap.com",134],["muvibg.com",134],["audycje.tokfm.pl",135],["hulu.com",[136,137,138]],["shush.se",139],["emurom.net",140],["allkpop.com",141],["pickcrackpasswords.blogspot.com",143],["kfrfansub.com",144],["thuglink.com",144],["voipreview.org",144],["hanime.tv",145],["pogo.com",146],["cloudvideo.tv",147],["legionjuegos.org",148],["legionpeliculas.org",148],["legionprogramas.org",148],["16honeys.com",149],["elespanol.com",150],["remodelista.com",151],["coolmathgames.com",[152,153,154,537]],["audiofanzine.com",155],["noweconomy.live",157],["howifx.com",[157,230]],["vavada5com.com",157],["hitokin.net",158],["developerinsider.co",159],["ilprimatonazionale.it",160],["hotabis.com",160],["root-nation.com",160],["italpress.com",160],["airsoftmilsimnews.com",160],["artribune.com",160],["thehindu.com",161],["cambro.tv",[162,163]],["nibelungen-kurier.de",164],["adfoc.us",166],["remixxodia.com",166],["djratanmamatamix.com",166],["loan70.com",166],["djprincemusic.com",166],["shikkharalo.in",166],["upgraminyojana.in",166],["biharstudyfamily.in",166],["aijankari.com",166],["techybattle.com",166],["ringtonsmp3.in",166],["doggyclothes.store",166],["fort-myers-airport.org",166],["rjmraju.com",166],["veteranautoinc.com",166],["sipplanhindi.in",166],["taporibass.com",166],["bmkmafiya.com",166],["bgmiipadview.com",166],["dheerajrock.com",166],["djbarmanmusic.com",166],["babamp3.in",166],["syllabusdownload.com",166],["tmtaz.com",166],["mytastyrecipe.in",166],["techglobo.com",166],["jobsparky.com",166],["sarkisozleri.pro",166],["pharmastudyaid.com",166],["sololevelinghindi.online",166],["120fpsconfig.com",166],["djrachit.com",166],["rajgarhsamachar.com",166],["odisharemix.link",166],["freegadgets24.com",166],["oriyaremix.com",166],["funkeykida.com",166],["puresports.pro",166],["morestate.pro",166],["filmfliqz.com",166],["recipenames.com",166],["insurelist.online",166],["odiaalbumsong.com",166],["decidewhy.com",166],["apkeclipse.com",166],["cmsarkariyojana.com",166],["djrkmusicjaunpur.in",166],["techreviewhere.com",166],["spatsify.com",166],["funkeypagali.com",166],["careersides.com",166],["nayisahara.com",166],["wikifilmia.com",166],["infinityskull.com",166],["viewmyknowledge.com",166],["iisfvirtual.in",166],["starxinvestor.com",166],["myprivatejobs.com",[166,284]],["wikitraveltips.com",[166,284]],["amritadrino.com",[166,284]],["sahlmarketing.net",166],["filmypoints.in",166],["fitnessholic.net",166],["moderngyan.com",166],["sattakingcharts.in",166],["freshbhojpuri.com",166],["bgmi32bitapk.in",166],["bankshiksha.in",166],["earn.mpscstudyhub.com",166],["earn.quotesopia.com",166],["money.quotesopia.com",166],["best-mobilegames.com",166],["learn.moderngyan.com",166],["bharatsarkarijobalert.com",166],["techacode.com",166],["trickms.com",166],["ielts-isa.edu.vn",166],["sptfy.be",166],["mcafee-com.com",[166,283]],["pianetamountainbike.it",167],["barchart.com",168],["modelisme.com",169],["parasportontario.ca",169],["prescottenews.com",169],["nrj-play.fr",170],["oeffentlicher-dienst.info",171],["hackingwithreact.com",172],["gutekueche.at",173],["eplfootballmatch.com",174],["peekvids.com",175],["playvids.com",175],["pornflip.com",175],["redensarten-index.de",176],["vw-page.com",177],["viz.com",[178,179]],["queenfaucet.website",180],["0rechner.de",181],["configspc.com",182],["xopenload.me",182],["uptobox.com",182],["uptostream.com",182],["onepiece-tube.com",183],["japgay.com",184],["mega-debrid.eu",185],["dreamdth.com",186],["diaridegirona.cat",188],["diariodeibiza.es",188],["diariodemallorca.es",188],["diarioinformacion.com",188],["eldia.es",188],["emporda.info",188],["farodevigo.es",188],["laopinioncoruna.es",188],["laopiniondemalaga.es",188],["laopiniondemurcia.es",188],["laopiniondezamora.es",188],["laprovincia.es",188],["levante-emv.com",188],["mallorcazeitung.es",188],["regio7.cat",188],["superdeporte.es",188],["playpaste.com",189],["player.rtl2.de",190],["freetutorialsus.com",191],["vidlii.com",[191,207]],["iammagnus.com",191],["dailyvideoreports.net",191],["unityassets4free.com",191],["cnbc.com",192],["puzzles.msn.com",193],["metro.us",193],["newsobserver.com",193],["arkadiumhosted.com",193],["firefaucet.win",195],["55k.io",196],["filelions.online",196],["stmruby.com",196],["direct-link.net",197],["direkt-wissen.com",197],["link-to.net",197],["fullhdxxx.com",199],["pornclassic.tube",200],["tubepornclassic.com",200],["etonline.com",201],["creatur.io",201],["drphil.com",201],["urbanmilwaukee.com",201],["ontiva.com",201],["hideandseek.world",201],["myabandonware.com",201],["kendam.com",201],["wttw.com",201],["synonyms.com",201],["definitions.net",201],["hostmath.com",201],["camvideoshub.com",201],["minhaconexao.com.br",201],["home-made-videos.com",203],["pxrnxx.xyz",203],["amateur-couples.com",203],["slutdump.com",203],["produsat.com",205],["12thman.com",207],["acusports.com",207],["atlantic10.com",207],["auburntigers.com",207],["baylorbears.com",207],["bceagles.com",207],["bgsufalcons.com",207],["big12sports.com",207],["bigten.org",207],["bradleybraves.com",207],["butlersports.com",207],["cmumavericks.com",207],["conferenceusa.com",207],["cyclones.com",207],["dartmouthsports.com",207],["daytonflyers.com",207],["dbupatriots.com",207],["dbusports.com",207],["denverpioneers.com",207],["fduknights.com",207],["fgcuathletics.com",207],["fightinghawks.com",207],["fightingillini.com",207],["floridagators.com",207],["friars.com",207],["friscofighters.com",207],["gamecocksonline.com",207],["goarmywestpoint.com",207],["gobison.com",207],["goblueraiders.com",207],["gobobcats.com",207],["gocards.com",207],["gocreighton.com",207],["godeacs.com",207],["goexplorers.com",207],["goetbutigers.com",207],["gofrogs.com",207],["gogriffs.com",207],["gogriz.com",207],["golobos.com",207],["gomarquette.com",207],["gopack.com",207],["gophersports.com",207],["goprincetontigers.com",207],["gopsusports.com",207],["goracers.com",207],["goshockers.com",207],["goterriers.com",207],["gotigersgo.com",207],["gousfbulls.com",207],["govandals.com",207],["gowyo.com",207],["goxavier.com",207],["gozags.com",207],["gozips.com",207],["griffinathletics.com",207],["guhoyas.com",207],["gwusports.com",207],["hailstate.com",207],["hamptonpirates.com",207],["hawaiiathletics.com",207],["hokiesports.com",207],["huskers.com",207],["icgaels.com",207],["iuhoosiers.com",207],["jsugamecocksports.com",207],["longbeachstate.com",207],["loyolaramblers.com",207],["lrtrojans.com",207],["lsusports.net",207],["morrisvillemustangs.com",207],["msuspartans.com",207],["muleriderathletics.com",207],["mutigers.com",207],["navysports.com",207],["nevadawolfpack.com",207],["niuhuskies.com",207],["nkunorse.com",207],["nuhuskies.com",207],["nusports.com",207],["okstate.com",207],["olemisssports.com",207],["omavs.com",207],["ovcsports.com",207],["owlsports.com",207],["purduesports.com",207],["redstormsports.com",207],["richmondspiders.com",207],["sfajacks.com",207],["shupirates.com",207],["siusalukis.com",207],["smcgaels.com",207],["smumustangs.com",207],["soconsports.com",207],["soonersports.com",207],["themw.com",207],["tulsahurricane.com",207],["txst.com",207],["txstatebobcats.com",207],["ubbulls.com",207],["ucfknights.com",207],["ucirvinesports.com",207],["uconnhuskies.com",207],["uhcougars.com",207],["uicflames.com",207],["umterps.com",207],["uncwsports.com",207],["unipanthers.com",207],["unlvrebels.com",207],["uoflsports.com",207],["usdtoreros.com",207],["utahstateaggies.com",207],["utepathletics.com",207],["utrockets.com",207],["uvmathletics.com",207],["uwbadgers.com",207],["villanova.com",207],["wkusports.com",207],["wmubroncos.com",207],["woffordterriers.com",207],["1pack1goal.com",207],["bcuathletics.com",207],["bubraves.com",207],["goblackbears.com",207],["golightsgo.com",207],["gomcpanthers.com",207],["goutsa.com",207],["mercerbears.com",207],["pirateblue.com",207],["pirateblue.net",207],["pirateblue.org",207],["quinnipiacbobcats.com",207],["towsontigers.com",207],["tribeathletics.com",207],["tribeclub.com",207],["utepminermaniacs.com",207],["utepminers.com",207],["wkutickets.com",207],["aopathletics.org",207],["atlantichockeyonline.com",207],["bigsouthnetwork.com",207],["bigsouthsports.com",207],["chawomenshockey.com",207],["dbupatriots.org",207],["drakerelays.org",207],["ecac.org",207],["ecacsports.com",207],["emueagles.com",207],["emugameday.com",207],["gculopes.com",207],["godrakebulldog.com",207],["godrakebulldogs.com",207],["godrakebulldogs.net",207],["goeags.com",207],["goislander.com",207],["goislanders.com",207],["gojacks.com",207],["gomacsports.com",207],["gseagles.com",207],["hubison.com",207],["iowaconference.com",207],["ksuowls.com",207],["lonestarconference.org",207],["mascac.org",207],["midwestconference.org",207],["mountaineast.org",207],["niu-pack.com",207],["nulakers.ca",207],["oswegolakers.com",207],["ovcdigitalnetwork.com",207],["pacersports.com",207],["rmacsports.org",207],["rollrivers.com",207],["samfordsports.com",207],["uncpbraves.com",207],["usfdons.com",207],["wiacsports.com",207],["alaskananooks.com",207],["broncathleticfund.com",207],["cameronaggies.com",207],["columbiacougars.com",207],["etownbluejays.com",207],["gobadgers.ca",207],["golancers.ca",207],["gometrostate.com",207],["gothunderbirds.ca",207],["kentstatesports.com",207],["lehighsports.com",207],["lopers.com",207],["lycoathletics.com",207],["lycomingathletics.com",207],["maraudersports.com",207],["mauiinvitational.com",207],["msumavericks.com",207],["nauathletics.com",207],["nueagles.com",207],["nwusports.com",207],["oceanbreezenyc.org",207],["patriotathleticfund.com",207],["pittband.com",207],["principiaathletics.com",207],["roadrunnersathletics.com",207],["sidearmsocial.com",207],["snhupenmen.com",207],["stablerarena.com",207],["stoutbluedevils.com",207],["uwlathletics.com",207],["yumacs.com",207],["collegefootballplayoff.com",207],["csurams.com",207],["cubuffs.com",207],["gobearcats.com",207],["gohuskies.com",207],["mgoblue.com",207],["osubeavers.com",207],["pittsburghpanthers.com",207],["rolltide.com",207],["texassports.com",207],["thesundevils.com",207],["uclabruins.com",207],["wvuathletics.com",207],["wvusports.com",207],["arizonawildcats.com",207],["calbears.com",207],["cuse.com",207],["georgiadogs.com",207],["goducks.com",207],["goheels.com",207],["gostanford.com",207],["insidekstatesports.com",207],["insidekstatesports.info",207],["insidekstatesports.net",207],["insidekstatesports.org",207],["k-stateathletics.com",207],["k-statefootball.net",207],["k-statefootball.org",207],["k-statesports.com",207],["k-statesports.net",207],["k-statesports.org",207],["k-statewomenshoops.com",207],["k-statewomenshoops.net",207],["k-statewomenshoops.org",207],["kstateathletics.com",207],["kstatefootball.net",207],["kstatefootball.org",207],["kstatesports.com",207],["kstatewomenshoops.com",207],["kstatewomenshoops.net",207],["kstatewomenshoops.org",207],["ksuathletics.com",207],["ksusports.com",207],["scarletknights.com",207],["showdownforrelief.com",207],["syracusecrunch.com",207],["texastech.com",207],["theacc.com",207],["ukathletics.com",207],["usctrojans.com",207],["utahutes.com",207],["utsports.com",207],["wsucougars.com",207],["tricksplit.io",207],["fangraphs.com",208],["4players.de",[209,327]],["buffed.de",209],["gamesaktuell.de",209],["gamezone.de",209],["pcgames.de",209],["videogameszone.de",209],["tvspielfilm.de",[210,211,212,213]],["tvtoday.de",[210,211,212,213]],["chip.de",[210,211,212,213]],["focus.de",[210,211,212,213]],["planetaminecraft.com",214],["cravesandflames.com",215],["codesnse.com",215],["link.paid4file.com",215],["flyad.vip",215],["lapresse.ca",216],["kolyoom.com",217],["ilovephd.com",217],["negumo.com",218],["games.wkb.jp",[219,220]],["channelmyanmar.org",[221,222]],["u-s-news.com",222],["fandom.com",[223,554,555]],["kenshi.fandom.com",224],["hausbau-forum.de",225],["homeairquality.org",225],["faucettronn.click",225],["ticketmaster.sg",225],["fake-it.ws",226],["laksa19.github.io",227],["1shortlink.com",228],["nesia.my.id",229],["makemoneywithurl.com",230],["junkyponk.com",230],["healthfirstweb.com",230],["vocalley.com",230],["yogablogfit.com",230],["en.financerites.com",230],["mythvista.com",230],["livenewsflix.com",230],["cureclues.com",230],["apekite.com",230],["insmyst.com",230],["wp2host.com",230],["blogtechh.com",230],["techbixby.com",230],["blogmyst.com",230],["resetoff.pl",231],["sexodi.com",231],["cdn77.org",232],["howtofixwindows.com",233],["3sexporn.com",234],["momxxxsex.com",234],["myfreevintageporn.com",234],["penisbuyutucum.net",234],["ujszo.com",235],["newsmax.com",236],["bobs-tube.com",237],["nadidetarifler.com",238],["siz.tv",238],["suzylu.co.uk",[239,240]],["onworks.net",241],["yabiladi.com",241],["downloadsoft.net",242],["pixsera.net",243],["testlanguages.com",244],["newsinlevels.com",244],["videosinlevels.com",244],["cbs.com",245],["paramountplus.com",245],["buktube.com",246],["fullxh.com",246],["galleryxh.site",246],["megaxh.com",246],["movingxh.world",246],["seexh.com",246],["taoxh.life",246],["unlockxh4.com",246],["xhaccess.com",246],["xhadult2.com",246],["xhadult3.com",246],["xhadult4.com",246],["xhadult5.com",246],["xhamster46.com",246],["xhbig.com",246],["xhbranch5.com",246],["xhday.com",246],["xhday1.com",246],["xhmoon5.com",246],["xhplanet1.com",246],["xhplanet2.com",246],["xhreal2.com",246],["xhreal3.com",246],["xhtab2.com",246],["xhtab4.com",246],["xhtree.com",246],["xhvictory.com",246],["xhwebsite.com",246],["xhwebsite2.com",246],["xhwide1.com",246],["lightnovelworld.com",247],["megadescarga.net",[248,249,250,251]],["megadescargas.net",[248,249,250,251]],["hentaihaven.xxx",252],["ultimate-guitar.com",253],["teachmemicro.com",254],["willcycle.com",254],["2ndrun.tv",254],["rackusreads.com",254],["xyzsports111.xyz",[255,256,257]],["xyzsports112.xyz",[255,256,257]],["xyzsports113.xyz",[255,256,257]],["xyzsports114.xyz",[255,256,257]],["xyzsprtsfrmr1.site",[255,256,257]],["xyzsprtsfrmr2.site",[255,256,257]],["claimbits.net",258],["sexyscope.net",259],["recherche-ebook.fr",261],["easymc.io",261],["zonebourse.com",262],["pink-sluts.net",263],["madoohd.com",264],["andhrafriends.com",265],["benzinpreis.de",266],["defenseone.com",267],["govexec.com",267],["nextgov.com",267],["route-fifty.com",267],["sharing.wtf",268],["th.gl",[269,270]],["wetter3.de",271],["arahdrive.com",272],["aiimgvlog.fun",[272,283]],["esportivos.fun",273],["cosmonova-broadcast.tv",274],["soccerinhd.com",275],["techedubyte.com",275],["hartvannederland.nl",276],["vandaaginside.nl",276],["rock.porn",[277,278]],["videzz.net",[279,280]],["ezaudiobookforsoul.com",281],["club386.com",282],["starkroboticsfrc.com",283],["sinonimos.de",283],["antonimos.de",283],["quesignifi.ca",283],["tiktokrealtime.com",283],["tiktokcounter.net",283],["tpayr.xyz",283],["poqzn.xyz",283],["ashrfd.xyz",283],["rezsx.xyz",283],["tryzt.xyz",283],["ashrff.xyz",283],["rezst.xyz",283],["dawenet.com",283],["erzar.xyz",283],["waezm.xyz",283],["waezg.xyz",283],["blackwoodacademy.org",283],["cryptednews.space",283],["vivuq.com",283],["swgop.com",283],["vbnmll.com",283],["telcoinfo.online",283],["dshytb.com",283],["btcbitco.in",[283,286]],["btcsatoshi.net",283],["cempakajaya.com",283],["crypto4yu.com",283],["readbitcoin.org",283],["wiour.com",283],["finish.addurl.biz",283],["laweducationinfo.com",283],["savemoneyinfo.com",283],["worldaffairinfo.com",283],["godstoryinfo.com",283],["successstoryinfo.com",283],["learnmarketinfo.com",283],["bhugolinfo.com",283],["armypowerinfo.com",283],["rsadnetworkinfo.com",283],["rsinsuranceinfo.com",283],["rsfinanceinfo.com",283],["rsgamer.app",283],["rssoftwareinfo.com",283],["rshostinginfo.com",283],["rseducationinfo.com",283],["advertisingexcel.com",283],["allcryptoz.net",283],["batmanfactor.com",283],["beautifulfashionnailart.com",283],["crewbase.net",283],["documentaryplanet.xyz",283],["crewus.net",283],["gametechreviewer.com",283],["midebalonu.net",283],["misterio.ro",283],["phineypet.com",283],["seory.xyz",283],["shinbhu.net",283],["shinchu.net",283],["substitutefor.com",283],["talkforfitness.com",283],["thefitbrit.co.uk",283],["thumb8.net",283],["thumb9.net",283],["topcryptoz.net",283],["uniqueten.net",283],["ultraten.net",283],["exactpay.online",283],["kiddyearner.com",283],["luckydice.net",284],["adarima.org",284],["tieutietkiem.com",284],["weatherwx.com",284],["sattaguess.com",284],["winshell.de",284],["rosasidan.ws",284],["modmakers.xyz",284],["gamepure.in",284],["warrenrahul.in",284],["austiblox.net",284],["upiapi.in",284],["myownguess.in",284],["networkhint.com",284],["watchhentai.net",284],["thichcode.net",284],["texturecan.com",284],["tikmate.app",[284,509]],["4funbox.com",285],["nephobox.com",285],["1024tera.com",285],["blog.cryptowidgets.net",286],["blog.insurancegold.in",286],["blog.wiki-topia.com",286],["blog.coinsvalue.net",286],["blog.cookinguide.net",286],["blog.freeoseocheck.com",286],["blog24.me",286],["bildirim.link",288],["appsbull.com",289],["diudemy.com",289],["maqal360.com",289],["lifesurance.info",290],["infokeeda.xyz",291],["webzeni.com",291],["dl.apkmoddone.com",292],["phongroblox.com",292],["arcai.com",294],["my-code4you.blogspot.com",295],["flickr.com",296],["firefile.cc",297],["pestleanalysis.com",297],["kochamjp.pl",297],["tutorialforlinux.com",297],["whatsaero.com",297],["animeblkom.net",[297,313]],["blkom.com",297],["globes.co.il",[298,299]],["jardiner-malin.fr",300],["tw-calc.net",301],["ohmybrush.com",302],["talkceltic.net",303],["mentalfloss.com",304],["uprafa.com",305],["cube365.net",306],["nightfallnews.com",[307,308]],["wwwfotografgotlin.blogspot.com",309],["freelistenonline.com",309],["badassdownloader.com",310],["quickporn.net",311],["yellowbridge.com",312],["aosmark.com",314],["atozmath.com",[316,317,318,319,320,321,322]],["newyorker.com",323],["brighteon.com",324],["more.tv",325],["video1tube.com",326],["alohatube.xyz",326],["fshost.me",328],["link.cgtips.org",329],["hentaicloud.com",330],["netfapx.com",332],["paperzonevn.com",333],["hentaienglish.com",334],["hentaiporno.xxx",334],["venge.io",[335,336]],["btcbux.io",337],["its.porn",[338,339]],["atv.at",340],["kusonime.com",[341,342]],["jetpunk.com",344],["imgur.com",345],["hentai-party.com",346],["hentaicomics.pro",346],["xxx-comics.pro",346],["genshinimpactcalculator.com",349],["mysexgames.com",350],["embed.indavideo.hu",353],["coinurl.net",[354,355]],["gdr-online.com",356],["mmm.dk",357],["iqiyi.com",[358,359,501]],["m.iqiyi.com",360],["japopav.tv",361],["lvturbo.com",361],["nbcolympics.com",362],["apkhex.com",363],["indiansexstories2.net",364],["issstories.xyz",364],["1340kbbr.com",365],["gorgeradio.com",365],["kduk.com",365],["kedoam.com",365],["kejoam.com",365],["kelaam.com",365],["khsn1230.com",365],["kjmx.rocks",365],["kloo.com",365],["klooam.com",365],["klykradio.com",365],["kmed.com",365],["kmnt.com",365],["kool991.com",365],["kpnw.com",365],["kppk983.com",365],["krktcountry.com",365],["ktee.com",365],["kwro.com",365],["kxbxfm.com",365],["thevalley.fm",365],["quizlet.com",366],["dsocker1234.blogspot.com",367],["blick.ch",368],["mgnet.xyz",369],["designtagebuch.de",370],["pixroute.com",371],["uploady.io",372],["calculator-online.net",373],["porngames.club",374],["sexgames.xxx",374],["111.90.159.132",375],["battleplan.news",375],["mobile-tracker-free.com",376],["pfps.gg",377],["ac-illust.com",[378,379]],["photo-ac.com",[378,379]],["vlxxs.net",380],["rapelust.com",380],["vtube.to",380],["vtplay.net",380],["desitelugusex.com",380],["xvideos-downloader.net",380],["xxxvideotube.net",380],["sdefx.cloud",380],["nozomi.la",380],["moviesonlinefree.net",380],["social-unlock.com",381],["ninja.io",382],["sourceforge.net",383],["samfirms.com",384],["banned.video",385],["madmaxworld.tv",385],["huffpost.com",386],["ingles.com",387],["spanishdict.com",387],["surfline.com",[388,389]],["play.tv3.ee",390],["play.tv3.lt",390],["play.tv3.lv",390],["tv3play.skaties.lv",390],["trendyoum.com",391],["bulbagarden.net",392],["moviestars.to",393],["hollywoodlife.com",394],["mat6tube.com",395],["textstudio.co",396],["newtumbl.com",397],["nevcoins.club",399],["mail.com",400],["oggi.it",[403,404]],["manoramamax.com",403],["video.gazzetta.it",[403,404]],["mangakita.id",405],["mangakita.net",405],["poscishd.online",406],["avpgalaxy.net",407],["mhma12.tech",408],["panda-novel.com",409],["zebranovel.com",409],["lightsnovel.com",409],["eaglesnovel.com",409],["pandasnovel.com",409],["zadfaucet.com",410],["ewrc-results.com",411],["kizi.com",412],["cyberscoop.com",413],["fedscoop.com",413],["canale.live",414],["mafiatown.pl",[415,416]],["jeep-cj.com",417],["sponsorhunter.com",418],["cloudcomputingtopics.net",419],["likecs.com",420],["tiscali.it",421],["linkspy.cc",422],["tutelehd3.xyz",423],["dirty.pink",[424,425,426]],["adshnk.com",427],["chattanoogan.com",428],["adsy.pw",429],["playstore.pw",429],["socialmediagirls.com",430],["windowspro.de",431],["snapinsta.app",432],["tvtv.ca",433],["tvtv.us",433],["mydaddy.cc",434],["roadtrippin.fr",435],["redketchup.io",[436,437,438]],["anyporn.com",[439,455]],["bravoporn.com",439],["bravoteens.com",439],["crocotube.com",439],["hellmoms.com",439],["hellporno.com",439],["sex3.com",439],["tubewolf.com",439],["xbabe.com",439],["xcum.com",439],["zedporn.com",439],["imagetotext.info",440],["infokik.com",441],["freepik.com",442],["ddwloclawek.pl",[443,444]],["deezer.com",445],["my-subs.co",446],["plaion.com",447],["rapid-cloud.co",448],["slideshare.net",[449,450]],["ustreasuryyieldcurve.com",451],["businesssoftwarehere.com",452],["goo.st",452],["freevpshere.com",452],["softwaresolutionshere.com",452],["staige.tv",456],["in-jpn.com",457],["oninet.ne.jp",457],["xth.jp",457],["androidadult.com",458],["streamvid.net",459],["watchtv24.com",460],["cellmapper.net",461],["medscape.com",462],["newscon.org",[463,464]],["arkadium.com",465],["wheelofgold.com",466],["ozulmanga.com",466],["bembed.net",467],["elbailedeltroleo.site",467],["embedv.net",467],["fslinks.org",467],["listeamed.net",467],["v6embed.xyz",467],["vgplayer.xyz",467],["vid-guard.com",467],["vidguard.online",467],["app.blubank.com",468],["mobileweb.bankmellat.ir",468],["sportdeutschland.tv",469],["kcra.com",469],["wcvb.com",469],["ccthesims.com",474],["chromeready.com",474],["coursedrive.org",474],["dtbps3games.com",474],["illustratemagazine.com",474],["uknip.co.uk",474],["vod.pl",475],["megadrive-emulator.com",476],["animesaga.in",479],["moviesapi.club",479],["bestx.stream",479],["watchx.top",479],["digimanie.cz",480],["svethardware.cz",480],["srvy.ninja",481],["drawer-opportunity-i-243.site",482],["tchatche.com",483],["edmdls.com",484],["freshremix.net",484],["scenedl.org",484],["trakt.tv",[485,486,487]],["shroomers.app",488],["classicalradio.com",[489,490,491]],["di.fm",[489,490,491]],["jazzradio.com",[489,490,491]],["radiotunes.com",[489,490,491]],["rockradio.com",[489,490,491]],["zenradio.com",[489,490,491]],["pc-builds.com",492],["qtoptens.com",492],["reuters.com",492],["today.com",492],["videogamer.com",492],["wrestlinginc.com",492],["gbatemp.net",492],["movie-th.tv",493],["iwanttfc.com",494],["nutraingredients-asia.com",495],["nutraingredients-latam.com",495],["nutraingredients-usa.com",495],["nutraingredients.com",495],["livesportsclub.me",496],["rogstream.fun",496],["ozulscansen.com",497],["fitnessbr.click",498],["minhareceita.xyz",498],["doomied.monster",499],["lookmovie2.to",499],["royalroad.com",500],["biletomat.pl",502],["hextank.io",[503,504]],["filmizlehdfilm.com",[505,506,507,508]],["fullfilmizle.cc",[505,506,507,508]],["sagewater.com",510],["redlion.net",510],["satdl.com",511],["veev.to",512],["vidstreaming.xyz",513],["everand.com",514],["myradioonline.pl",515],["tacobell.com",517],["zefoy.com",518],["natgeotv.com",520],["br.de",521],["indeed.com",522],["pasteboard.co",523],["clickhole.com",524],["deadspin.com",524],["gizmodo.com",524],["jalopnik.com",524],["jezebel.com",524],["kotaku.com",524],["lifehacker.com",524],["splinternews.com",524],["theinventory.com",524],["theonion.com",524],["theroot.com",524],["thetakeout.com",524],["pewresearch.org",524],["los40.com",[525,526]],["as.com",526],["telegraph.co.uk",[527,528]],["poweredbycovermore.com",[527,577]],["lumens.com",[527,577]],["verizon.com",529],["humanbenchmark.com",530],["politico.com",531],["officedepot.co.cr",[532,533]],["usnews.com",536],["factable.com",538],["zee5.com",539],["gala.fr",540],["geo.fr",540],["voici.fr",540],["gloucestershirelive.co.uk",541],["arsiv.mackolik.com",542],["jacksonguitars.com",543],["scandichotels.com",544],["stylist.co.uk",545],["nettiauto.com",546],["thaiairways.com",[547,548]],["cerbahealthcare.it",[549,550]],["futura-sciences.com",[549,566]],["tiendaenlinea.claro.com.ni",[551,552]],["tieba.baidu.com",553],["grasshopper.com",[556,557]],["epson.com.cn",[558,559,560,561]],["oe24.at",[562,563]],["szbz.de",562],["platform.autods.com",[564,565]],["wikihow.com",567],["citibank.com.sg",568],["uol.com.br",[569,570,571,572,573]],["gazzetta.gr",574],["digicol.dpm.org.cn",[575,576]],["virginmediatelevision.ie",578],["larazon.es",[579,580]],["waitrosecellar.com",[581,582,583]],["sharpen-free-design-generator.netlify.app",[585,586]],["help.cashctrl.com",[587,588]],["commande.rhinov.pro",[589,590]],["ecom.wixapps.net",[589,590]],["tipranks.com",[591,592]],["iceland.co.uk",[593,594,595]],["socket.pearsoned.com",596],["tntdrama.com",[597,598]],["mobile.de",[599,600]],["ioe.vn",[601,602]],["geiriadur.ac.uk",[601,605]],["welsh-dictionary.ac.uk",[601,605]],["bikeportland.org",[603,604]],["biologianet.com",[570,571,572]],["10play.com.au",[606,607]],["sunshine-live.de",[608,609]],["whatismyip.com",[610,611]],["myfitnesspal.com",612],["netoff.co.jp",[613,614]],["clickjogos.com.br",617],["bristan.com",[618,619]],["zillow.com",620],["share.hntv.tv",[621,622,623,624]],["forum.dji.com",[621,624]],["optimum.net",[625,626]],["pvrcinemas.com",[627,628]],["investor-web.hdfcfund.com",629],["user.guancha.cn",[630,631]],["sosovalue.com",632],["bandyforbundet.no",[633,634]],["tatacommunications.com",635],["suamusica.com.br",[636,637,638]],["weather.com",[639,640]],["ubereats.com",[639,640]],["usatoday.com",641]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,51]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,201]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,38,84,85,86]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,187]],["upornia",[29,30]],["fmovies",51],["xtits",[54,119]],["streamwish",[56,57]],["pouvideo",63],["povvideo",63],["povw1deo",63],["povwideo",63],["powv1deo",63],["powvibeo",63],["powvideo",63],["powvldeo",63],["plyjam",[68,69]],["fxporn69",74],["vipbox",75],["viprow",75],["desbloqueador",80],["xberuang",82],["teknorizen",82],["subtorrents",89],["subtorrents1",89],["newpelis",89],["pelix",89],["allcalidad",89],["infomaniakos",89],["filecrypt",93],["tornadomovies",99],["sexwebvideo",100],["mangovideo",100],["icdrama",106],["mangasail",106],["file4go",108],["asianclub",127],["anitube",130],["mixdrop",132],["uploadev",156],["ver-pelis-online",165],["ancient-origins",174],["spankbang",194],["lookcam",201],["lootlinks",201],["dpstream",204],["bluemediafiles",206],["docer",231],["hamsterix",246],["xhamster",246],["xhamster1",246],["xhamster10",246],["xhamster11",246],["xhamster12",246],["xhamster13",246],["xhamster14",246],["xhamster15",246],["xhamster16",246],["xhamster17",246],["xhamster18",246],["xhamster19",246],["xhamster20",246],["xhamster2",246],["xhamster3",246],["xhamster4",246],["xhamster42",246],["xhamster5",246],["xhamster7",246],["xhamster8",246],["acortalo",[248,249,250,251]],["acortar",[248,249,250,251]],["kickassanime",260],["doomovie-hd",264],["terabox",285],["ctrlv",315],["123movieshd",343],["uproxy",347],["animesa",348],["cinecalidad",[351,352]],["dvdplay",380],["apkmaven",398],["gmx",401],["gamereactor",454],["vembed",467],["empire-stream",[470,471,472]],["empire-streaming",[470,471,472]],["empire-streamz",[470,471,472]],["tvhay",[477,478]],["lookmovie",499],["filmizletv",[505,506,507,508]],["www.google",516],["officedepot",[534,535]],["foundit",[615,616]]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[499]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
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
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue, extraArgs);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
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
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
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
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
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
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
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

function validateConstantFn(trusted, raw, extraArgs = {}) {
    const safe = safeSelf();
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
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
