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
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["Object.prototype.run","undefined"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["Object.prototype.ads.nopreroll_","true"],["checkAdBlocker","noopFunc"],["adBlockerDetected","false"],["univresalP","noopFunc"],["EASYFUN_ADS_CAN_RUN","true"],["navigator.brave","undefined"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["Math.random","1","as","function"],["showadas","true"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["google_srt","0"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["google_tag_manager","{}"],["google_tag_manager.G-Z8CH48V654","{}"],["google_tag_manager.G-Z8CH48V654.dataLayer","{}"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["yt.config_.EXPERIMENT_FLAGS.web_bind_fetch","false"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,671]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,607]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,256]],["gadgets.es",[12,256]],["amateurporn.co",[12,116]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,461]],["porngem.com",15],["uploadbank.com",[15,89]],["shortit.pw",[15,100]],["familyporn.tv",15],["cloudemb.com",[15,379]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,80]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["sankakucomplex.com",19],["player.glomex.com",20],["merkur.de",20],["tz.de",20],["hotpornfile.org",23],["player.tabooporns.com",23],["x69.ovh",23],["wiztube.xyz",23],["netu.frembed.fun",23],["multiup.us",23],["rpdrlatino.live",23],["peliculas8k.com",[23,24]],["video.q34r.org",23],["69x.online",23],["czxxx.org",23],["vtplayer.online",23],["netu.ac",23],["dirtyvideo.fun",24],["adbull.org",25],["mitly.us",25],["linkrex.net",25],["linx.cc",25],["oke.io",25],["dz4link.com",25],["linclik.com",25],["shrt10.com",25],["loptelink.com",25],["cut-fly.com",25],["linkfinal.com",25],["payskip.org",25],["cutpaid.com",25],["forexmab.com",25],["linkjust.com",25],["linkszia.co",25],["leechpremium.link",25],["icutlink.com",[25,121]],["oncehelp.com",25],["rgl.vn",25],["reqlinks.net",25],["bitlk.com",25],["qlinks.eu",25],["link.3dmili.com",25],["short-fly.com",25],["foxseotools.com",25],["pngit.live",25],["link.turkdown.com",25],["urlty.com",25],["7r6.com",25],["oko.sh",25],["ckk.ai",25],["fc.lc",25],["fstore.biz",25],["cuts-url.com",25],["eio.io",25],["exe.app",25],["exee.io",25],["exey.io",25],["skincarie.com",25],["exeo.app",25],["coinlyhub.com",[25,198]],["adsafelink.com",25],["aii.sh",25],["cybertechng.com",[25,211]],["cutdl.xyz",25],["iir.ai",25],["shorteet.com",[25,229]],["smoner.com",25],["gyanlight.com",25],["xpshort.com",25],["upshrink.com",25],["enit.in",[25,225]],["ez4short.com",25],["easysky.in",25],["veganab.co",25],["adrinolinks.in",25],["go.bloggingaro.com",25],["go.gyanitheme.com",25],["go.theforyou.in",25],["go.hipsonyc.com",25],["birdurls.com",25],["vipurl.in",25],["try2link.com",25],["jameeltips.us",25],["gainl.ink",25],["promo-visits.site",25],["satoshi-win.xyz",[25,301]],["shorterall.com",25],["encurtandourl.com",25],["forextrader.site",25],["postazap.com",25],["cety.app",25],["exego.app",[25,296]],["cutlink.net",25],["cutsy.net",25],["cutyurls.com",25],["cutty.app",25],["cutnet.net",25],["tinys.click",[25,211]],["cpm.icu",25],["panyshort.link",25],["enagato.com",25],["pandaznetwork.com",25],["tvi.la",25],["iir.la",25],["tii.la",25],["oei.la",25],["lnbz.la",[25,225]],["oii.la",25],["tpi.li",25],["recipestutorials.com",25],["shrinkforearn.in",25],["techyuth.xyz",25],["oii.io",25],["du-link.in",25],["atglinks.com",25],["thotpacks.xyz",25],["megaurl.in",25],["megafly.in",25],["simana.online",25],["fooak.com",25],["joktop.com",25],["evernia.site",25],["link.paid4link.com",[25,309]],["exalink.fun",25],["indiamaja.com",25],["newshuta.in",25],["shortxlinks.com",25],["linksly.co",25],["pkr.pw",25],["imagenesderopaparaperros.com",25],["shortenbuddy.com",25],["apksvip.com",25],["4cash.me",25],["namaidani.com",25],["teknomuda.com",25],["miuiku.com",25],["savelink.site",25],["samaa-pro.com",25],["miklpro.com",25],["modapk.link",25],["1shorten.com",25],["ccurl.net",25],["linkpoi.me",25],["menjelajahi.com",25],["pewgame.com",25],["1link.vip",25],["haonguyen.top",25],["crazyblog.in",25],["gtlink.co",25],["link.tokenoto.com",25],["cutearn.net",25],["rshrt.com",25],["filezipa.com",25],["dz-linkk.com",25],["theblissempire.com",25],["finanzas-vida.com",25],["adurly.cc",25],["pix4link.com",25],["paid4.link",25],["link.asiaon.top",25],["go.gets4link.com",25],["download.sharenulled.net",25],["beingtek.com",25],["shorturl.unityassets4free.com",25],["disheye.com",25],["techymedies.com",25],["techysuccess.com",25],["za.gl",[25,139]],["bblink.com",25],["myad.biz",25],["swzz.xyz",25],["vevioz.com",25],["charexempire.com",25],["clk.asia",25],["egfly.xyz",25],["linka.click",25],["sturls.com",25],["myshrinker.com",25],["go.adinsurance.xyz",25],["snowurl.com",[25,211]],["netfile.cc",25],["link.insurglobal.xyz",25],["theconomy.me",25],["rocklink.in",25],["adinsurance.xyz",25],["insurglobal.xyz",25],["techgeek.digital",25],["download3s.net",25],["shortx.net",25],["musicc.xyz",25],["shortawy.com",25],["tlin.me",25],["apprepack.com",25],["up-load.one",25],["zuba.link",25],["news.speedynews.xyz",25],["golink.xaydungplus.com",25],["bestcash2020.com",25],["hoxiin.com",25],["technemo.xyz",25],["go.linkbnao.com",25],["link-yz.com",25],["paylinnk.com",25],["thizissam.in",25],["ier.ai",25],["bloggertheme.xyz",25],["adslink.pw",25],["novelssites.com",25],["links.medipost.org",25],["faucetcrypto.net",25],["short.freeltc.top",25],["trxking.xyz",25],["weadown.com",25],["m.bloggingguidance.com",25],["blog.onroid.com",25],["link.codevn.net",25],["upfilesurls.com",25],["shareus.site",25],["link4rev.site",25],["bloginguru.xyz",25],["celinks.net",25],["c2g.at",25],["shortzu.icu",25],["bitcosite.com",[25,474]],["cryptosh.pro",25],["sigmalinks.in",25],["link68.net",25],["traffic123.net",25],["windowslite.net",[25,211]],["viewfr.com",25],["cl1ca.com",25],["4br.me",25],["fir3.net",25],["kiddyshort.com",25],["watchmygf.me",[26,51]],["camwhorez.tv",[26,37,79,80]],["cambay.tv",[26,58,79,113,115,116,117,118]],["fpo.xxx",[26,58]],["sexemix.com",26],["heavyfetish.com",[26,540]],["you-porn.com",28],["youporngay.com",28],["youpornru.com",28],["9908ww.com",28],["adelaidepawnbroker.com",28],["bztube.com",28],["hotovs.com",28],["insuredhome.org",28],["nudegista.com",28],["pornluck.com",28],["vidd.se",28],["pornhub.com",28],["pornerbros.com",29],["freep.com",29],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["viki.com",[35,36]],["sleazyneasy.com",[37,38,39]],["smutr.com",[37,194]],["watchdirty.to",[37,80,81,116]],["yourporngod.com",[37,38]],["javbangers.com",[37,348]],["camfox.com",37],["camthots.tv",[37,113]],["shegotass.info",37],["amateur8.com",37],["bigtitslust.com",37],["ebony8.com",37],["freeporn8.com",37],["lesbian8.com",37],["maturetubehere.com",37],["sortporn.com",37],["webcamvau.com",37],["motherporno.com",[37,38,58,115]],["tktube.com",37],["theporngod.com",[37,38]],["pornsocket.com",40],["luxuretv.com",41],["porndig.com",[42,43]],["webcheats.com.br",44],["ceesty.com",[45,46]],["gestyy.com",[45,46]],["corneey.com",46],["destyy.com",46],["festyy.com",46],["sh.st",46],["mitaku.net",46],["angrybirdsnest.com",47],["zrozz.com",47],["clix4btc.com",47],["4tests.com",47],["planet-explorers-isos.com",47],["business-standard.com",47],["goltelevision.com",47],["news-und-nachrichten.de",47],["laradiobbs.net",47],["urlaubspartner.net",47],["produktion.de",47],["cinemaxxl.de",47],["bladesalvador.com",47],["tempr.email",47],["katfile.com",47],["trust.zone",47],["cshort.org",47],["friendproject.net",47],["covrhub.com",47],["planetsuzy.org",48],["empflix.com",49],["freeplayervideo.com",50],["nazarickol.com",50],["player-cdn.com",50],["playhydrax.com",[50,241,242]],["alleneconomicmatter.com",50],["apinchcaseation.com",50],["bethshouldercan.com",50],["bigclatterhomesguideservice.com",50],["bradleyviewdoctor.com",50],["brookethoughi.com",50],["brucevotewithin.com",50],["cindyeyefinal.com",50],["denisegrowthwide.com",50],["donaldlineelse.com",50],["edwardarriveoften.com",50],["erikcoldperson.com",50],["evelynthankregion.com",50],["graceaddresscommunity.com",50],["heatherdiscussionwhen.com",50],["housecardsummerbutton.com",50],["jamesstartstudent.com",50],["jamiesamewalk.com",50],["jasminetesttry.com",50],["jasonresponsemeasure.com",50],["jayservicestuff.com",50],["jessicaglassauthor.com",50],["johntryopen.com",50],["josephseveralconcern.com",50],["kennethofficialitem.com",50],["lisatrialidea.com",50],["lorimuchbenefit.com",50],["loriwithinfamily.com",50],["lukecomparetwo.com",50],["markstyleall.com",50],["michaelapplysome.com",50],["morganoperationface.com",50],["nectareousoverelate.com",50],["paulkitchendark.com",50],["rebeccaneverbase.com",50],["roberteachfinal.com",50],["robertplacespace.com",50],["ryanagoinvolve.com",50],["sandrataxeight.com",50],["seanshowcould.com",50],["sethniceletter.com",50],["shannonpersonalcost.com",50],["sharonwhiledemocratic.com",50],["stevenimaginelittle.com",50],["strawberriesporail.com",50],["susanhavekeep.com",50],["timberwoodanotia.com",50],["tinycat-voe-fashion.com",50],["troyyourlead.com",50],["uptodatefinishconference.com",50],["uptodatefinishconferenceroom.com",50],["vincentincludesuccessful.com",50],["voe.sx",50],["motphimtv.com",50],["rabbitstream.net",50],["projectfreetv.one",50],["richardstorehalf.com",50],["thomasalthoughhear.com",50],["zacharycollectionmight.com",50],["transparentcalifornia.com",51],["deepbrid.com",52],["webnovel.com",53],["videosgay.me",[54,55]],["oneupload.to",55],["oneupload.online",55],["wishfast.top",55],["schwaebische.de",56],["8tracks.com",57],["3movs.com",58],["bravoerotica.net",[58,115]],["youx.xxx",58],["camclips.tv",[58,194]],["camflow.tv",[58,115,116,160,232]],["camhoes.tv",[58,113,115,116,160,232]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,115]],["analdin.com",[58,115]],["revealname.com",59],["golfchannel.com",61],["telemundodeportes.com",61],["stream.nbcsports.com",61],["mathdf.com",61],["gamcore.com",62],["porcore.com",62],["69games.xxx",62],["javmix.app",62],["tecknity.com",63],["haaretz.co.il",64],["haaretz.com",64],["hungama.com",64],["a-o.ninja",64],["anime-odcinki.pl",64],["kumpulmanga.org",64],["shortgoo.blogspot.com",64],["tonanmedia.my.id",[64,495]],["yurasu.xyz",64],["isekaipalace.com",64],["vikistream.com",65],["eplayer.click",[65,66]],["mega4upload.com",[66,72]],["ennovelas.com",[66,72]],["n-tv.de",67],["brigitte.de",68],["stern.de",68],["foxsports.com.au",69],["canberratimes.com.au",69],["thesimsresource.com",70],["bdnewszh.com",72],["streamservicehd.click",72],["ctrl.blog",73],["sportlife.es",74],["finofilipino.org",75],["acortarm.xyz",76],["mysflink.blogspot.com",77],["assia.tv",78],["assia4.com",78],["assia24.com",78],["cwtvembeds.com",[80,114]],["xmateur.com",[80,81,116]],["camlovers.tv",80],["porntn.com",80],["pornissimo.org",80],["sexcams-24.com",[80,116]],["watchporn.to",[80,116]],["camwhorez.video",80],["multi.xxx",81],["footstockings.com",[81,116]],["worldofbitco.in",[82,83]],["weatherx.co.in",[82,83]],["getyourbitco.in",82],["sunbtc.space",82],["sbs.com.au",84],["ojogos.com.br",86],["powforums.com",87],["supforums.com",87],["studybullet.com",87],["usgamer.net",88],["recordonline.com",88],["freebitcoin.win",91],["e-monsite.com",91],["coindice.win",91],["sport-tv-guide.live",92],["temp-mails.com",93],["freiepresse.de",94],["investing.com",95],["mp3fiber.com",97],["chicoer.com",98],["dailybreeze.com",98],["dailybulletin.com",98],["dailynews.com",98],["delcotimes.com",98],["eastbaytimes.com",98],["macombdaily.com",98],["ocregister.com",98],["pasadenastarnews.com",98],["pe.com",98],["presstelegram.com",98],["redlandsdailyfacts.com",98],["reviewjournal.com",98],["santacruzsentinel.com",98],["saratogian.com",98],["sentinelandenterprise.com",98],["sgvtribune.com",98],["tampabay.com",98],["times-standard.com",98],["theoaklandpress.com",98],["trentonian.com",98],["twincities.com",98],["whittierdailynews.com",98],["bostonherald.com",98],["dailycamera.com",98],["sbsun.com",98],["dailydemocrat.com",98],["montereyherald.com",98],["orovillemr.com",98],["record-bee.com",98],["redbluffdailynews.com",98],["reporterherald.com",98],["thereporter.com",98],["timescall.com",98],["timesheraldonline.com",98],["ukiahdailyjournal.com",98],["dailylocal.com",98],["mercurynews.com",98],["suedkurier.de",99],["anysex.com",101],["vlist.se",102],["pornve.com",103],["coolrom.com.au",104],["pornohirsch.net",105],["marie-claire.es",106],["gamezhero.com",106],["flashgirlgames.com",106],["onlinesudoku.games",106],["mpg.football",106],["sssam.com",106],["globalnews.ca",107],["drinksmixer.com",108],["leitesculinaria.com",108],["fupa.net",109],["browardpalmbeach.com",110],["dallasobserver.com",110],["houstonpress.com",110],["miaminewtimes.com",110],["phoenixnewtimes.com",110],["westword.com",110],["nhentai.net",111],["nowtv.com.tr",112],["caminspector.net",113],["camwhoreshd.com",113],["camgoddess.tv",113],["gay4porn.com",115],["mypornhere.com",115],["camhub.cc",116],["sexwebvideo.com",116],["sexwebvideo.net",116],["love4porn.com",116],["thotvids.com",116],["watchmdh.to",116],["celebwhore.com",116],["cluset.com",116],["4kporn.xxx",116],["xhomealone.com",116],["lusttaboo.com",[116,421]],["hentai-moon.com",116],["mediapason.it",119],["linkspaid.com",119],["tuotromedico.com",119],["neoteo.com",119],["phoneswiki.com",119],["celebmix.com",119],["myneobuxportal.com",119],["oyungibi.com",119],["25yearslatersite.com",119],["jeshoots.com",120],["techhx.com",120],["karanapk.com",120],["flashplayer.fullstacks.net",122],["cloudapps.herokuapp.com",122],["texteditor.nsspot.net",122],["youfiles.herokuapp.com",122],["temp-mail.org",123],["javhdporn.net",124],["javstream.top",124],["comnuan.com",125],["veedi.com",126],["battleboats.io",126],["fruitlab.com",127],["acetack.com",127],["androidquest.com",127],["apklox.com",127],["chhaprawap.in",127],["gujarativyakaran.com",127],["kashmirstudentsinformation.in",127],["kisantime.com",127],["shetkaritoday.in",127],["pastescript.com",127],["trimorspacks.com",127],["updrop.link",127],["haddoz.net",127],["garoetpos.com",127],["stiletv.it",128],["hqtv.biz",130],["liveuamap.com",131],["muvibg.com",131],["audycje.tokfm.pl",132],["hulu.com",[133,134,135]],["shush.se",136],["emurom.net",137],["allkpop.com",138],["pickcrackpasswords.blogspot.com",140],["kfrfansub.com",141],["thuglink.com",141],["voipreview.org",141],["illicoporno.com",142],["lavoixdux.com",142],["tonpornodujour.com",142],["jacquieetmichel.net",142],["jacquieetmicheltv.net",[142,250,251]],["swame.com",142],["vosfemmes.com",142],["voyeurfrance.net",142],["hanime.tv",143],["pogo.com",144],["cloudvideo.tv",145],["legionjuegos.org",146],["legionpeliculas.org",146],["legionprogramas.org",146],["16honeys.com",147],["elespanol.com",148],["remodelista.com",149],["coolmathgames.com",[150,151,152,560]],["audiofanzine.com",153],["hitokin.net",155],["developerinsider.co",156],["ilprimatonazionale.it",157],["hotabis.com",157],["root-nation.com",157],["italpress.com",157],["airsoftmilsimnews.com",157],["artribune.com",157],["thehindu.com",158],["cambro.tv",[159,160]],["nibelungen-kurier.de",161],["adfoc.us",163],["techyember.com",163],["remixbass.com",163],["techipop.com",163],["quickimageconverter.com",163],["mastharyana.com",163],["tea-coffee.net",163],["spatsify.com",163],["newedutopics.com",163],["getviralreach.in",163],["edukaroo.com",163],["funkeypagali.com",163],["careersides.com",163],["nayisahara.com",163],["wikifilmia.com",163],["infinityskull.com",163],["viewmyknowledge.com",163],["iisfvirtual.in",163],["starxinvestor.com",163],["jkssbalerts.com",163],["myprivatejobs.com",[163,297]],["wikitraveltips.com",[163,297]],["amritadrino.com",[163,297]],["sahlmarketing.net",163],["filmypoints.in",163],["fitnessholic.net",163],["moderngyan.com",163],["sattakingcharts.in",163],["freshbhojpuri.com",163],["bgmi32bitapk.in",163],["bankshiksha.in",163],["earn.mpscstudyhub.com",163],["earn.quotesopia.com",163],["money.quotesopia.com",163],["best-mobilegames.com",163],["learn.moderngyan.com",163],["bharatsarkarijobalert.com",163],["techacode.com",163],["trickms.com",163],["ielts-isa.edu.vn",163],["sptfy.be",163],["mcafee-com.com",[163,296]],["pianetamountainbike.it",164],["barchart.com",165],["modelisme.com",166],["parasportontario.ca",166],["prescottenews.com",166],["nrj-play.fr",167],["oeffentlicher-dienst.info",168],["hackingwithreact.com",169],["gutekueche.at",170],["eplfootballmatch.com",171],["peekvids.com",172],["playvids.com",172],["pornflip.com",172],["redensarten-index.de",173],["vw-page.com",174],["viz.com",[175,176]],["0rechner.de",177],["configspc.com",178],["xopenload.me",178],["uptobox.com",178],["uptostream.com",178],["onepiece-tube.com",179],["japgay.com",180],["mega-debrid.eu",181],["dreamdth.com",182],["diaridegirona.cat",184],["diariodeibiza.es",184],["diariodemallorca.es",184],["diarioinformacion.com",184],["eldia.es",184],["emporda.info",184],["farodevigo.es",184],["laopinioncoruna.es",184],["laopiniondemalaga.es",184],["laopiniondemurcia.es",184],["laopiniondezamora.es",184],["laprovincia.es",184],["levante-emv.com",184],["mallorcazeitung.es",184],["regio7.cat",184],["superdeporte.es",184],["playpaste.com",185],["player.rtl2.de",186],["freetutorialsus.com",187],["vidlii.com",[187,203]],["iammagnus.com",187],["dailyvideoreports.net",187],["unityassets4free.com",187],["cnbc.com",188],["puzzles.msn.com",189],["metro.us",189],["newsobserver.com",189],["arkadiumhosted.com",189],["firefaucet.win",191],["55k.io",192],["filelions.online",192],["stmruby.com",192],["direct-link.net",193],["direkt-wissen.com",193],["link-to.net",193],["fullhdxxx.com",195],["pornclassic.tube",196],["tubepornclassic.com",196],["etonline.com",197],["creatur.io",197],["drphil.com",197],["urbanmilwaukee.com",197],["ontiva.com",197],["hideandseek.world",197],["myabandonware.com",197],["kendam.com",197],["wttw.com",197],["synonyms.com",197],["definitions.net",197],["hostmath.com",197],["camvideoshub.com",197],["minhaconexao.com.br",197],["home-made-videos.com",199],["pxrnxx.xyz",199],["amateur-couples.com",199],["slutdump.com",199],["produsat.com",201],["12thman.com",203],["acusports.com",203],["atlantic10.com",203],["auburntigers.com",203],["baylorbears.com",203],["bceagles.com",203],["bgsufalcons.com",203],["big12sports.com",203],["bigten.org",203],["bradleybraves.com",203],["butlersports.com",203],["cmumavericks.com",203],["conferenceusa.com",203],["cyclones.com",203],["dartmouthsports.com",203],["daytonflyers.com",203],["dbupatriots.com",203],["dbusports.com",203],["denverpioneers.com",203],["fduknights.com",203],["fgcuathletics.com",203],["fightinghawks.com",203],["fightingillini.com",203],["floridagators.com",203],["friars.com",203],["friscofighters.com",203],["gamecocksonline.com",203],["goarmywestpoint.com",203],["gobison.com",203],["goblueraiders.com",203],["gobobcats.com",203],["gocards.com",203],["gocreighton.com",203],["godeacs.com",203],["goexplorers.com",203],["goetbutigers.com",203],["gofrogs.com",203],["gogriffs.com",203],["gogriz.com",203],["golobos.com",203],["gomarquette.com",203],["gopack.com",203],["gophersports.com",203],["goprincetontigers.com",203],["gopsusports.com",203],["goracers.com",203],["goshockers.com",203],["goterriers.com",203],["gotigersgo.com",203],["gousfbulls.com",203],["govandals.com",203],["gowyo.com",203],["goxavier.com",203],["gozags.com",203],["gozips.com",203],["griffinathletics.com",203],["guhoyas.com",203],["gwusports.com",203],["hailstate.com",203],["hamptonpirates.com",203],["hawaiiathletics.com",203],["hokiesports.com",203],["huskers.com",203],["icgaels.com",203],["iuhoosiers.com",203],["jsugamecocksports.com",203],["longbeachstate.com",203],["loyolaramblers.com",203],["lrtrojans.com",203],["lsusports.net",203],["morrisvillemustangs.com",203],["msuspartans.com",203],["muleriderathletics.com",203],["mutigers.com",203],["navysports.com",203],["nevadawolfpack.com",203],["niuhuskies.com",203],["nkunorse.com",203],["nuhuskies.com",203],["nusports.com",203],["okstate.com",203],["olemisssports.com",203],["omavs.com",203],["ovcsports.com",203],["owlsports.com",203],["purduesports.com",203],["redstormsports.com",203],["richmondspiders.com",203],["sfajacks.com",203],["shupirates.com",203],["siusalukis.com",203],["smcgaels.com",203],["smumustangs.com",203],["soconsports.com",203],["soonersports.com",203],["themw.com",203],["tulsahurricane.com",203],["txst.com",203],["txstatebobcats.com",203],["ubbulls.com",203],["ucfknights.com",203],["ucirvinesports.com",203],["uconnhuskies.com",203],["uhcougars.com",203],["uicflames.com",203],["umterps.com",203],["uncwsports.com",203],["unipanthers.com",203],["unlvrebels.com",203],["uoflsports.com",203],["usdtoreros.com",203],["utahstateaggies.com",203],["utepathletics.com",203],["utrockets.com",203],["uvmathletics.com",203],["uwbadgers.com",203],["villanova.com",203],["wkusports.com",203],["wmubroncos.com",203],["woffordterriers.com",203],["1pack1goal.com",203],["bcuathletics.com",203],["bubraves.com",203],["goblackbears.com",203],["golightsgo.com",203],["gomcpanthers.com",203],["goutsa.com",203],["mercerbears.com",203],["pirateblue.com",203],["pirateblue.net",203],["pirateblue.org",203],["quinnipiacbobcats.com",203],["towsontigers.com",203],["tribeathletics.com",203],["tribeclub.com",203],["utepminermaniacs.com",203],["utepminers.com",203],["wkutickets.com",203],["aopathletics.org",203],["atlantichockeyonline.com",203],["bigsouthnetwork.com",203],["bigsouthsports.com",203],["chawomenshockey.com",203],["dbupatriots.org",203],["drakerelays.org",203],["ecac.org",203],["ecacsports.com",203],["emueagles.com",203],["emugameday.com",203],["gculopes.com",203],["godrakebulldog.com",203],["godrakebulldogs.com",203],["godrakebulldogs.net",203],["goeags.com",203],["goislander.com",203],["goislanders.com",203],["gojacks.com",203],["gomacsports.com",203],["gseagles.com",203],["hubison.com",203],["iowaconference.com",203],["ksuowls.com",203],["lonestarconference.org",203],["mascac.org",203],["midwestconference.org",203],["mountaineast.org",203],["niu-pack.com",203],["nulakers.ca",203],["oswegolakers.com",203],["ovcdigitalnetwork.com",203],["pacersports.com",203],["rmacsports.org",203],["rollrivers.com",203],["samfordsports.com",203],["uncpbraves.com",203],["usfdons.com",203],["wiacsports.com",203],["alaskananooks.com",203],["broncathleticfund.com",203],["cameronaggies.com",203],["columbiacougars.com",203],["etownbluejays.com",203],["gobadgers.ca",203],["golancers.ca",203],["gometrostate.com",203],["gothunderbirds.ca",203],["kentstatesports.com",203],["lehighsports.com",203],["lopers.com",203],["lycoathletics.com",203],["lycomingathletics.com",203],["maraudersports.com",203],["mauiinvitational.com",203],["msumavericks.com",203],["nauathletics.com",203],["nueagles.com",203],["nwusports.com",203],["oceanbreezenyc.org",203],["patriotathleticfund.com",203],["pittband.com",203],["principiaathletics.com",203],["roadrunnersathletics.com",203],["sidearmsocial.com",203],["snhupenmen.com",203],["stablerarena.com",203],["stoutbluedevils.com",203],["uwlathletics.com",203],["yumacs.com",203],["collegefootballplayoff.com",203],["csurams.com",203],["cubuffs.com",203],["gobearcats.com",203],["gohuskies.com",203],["mgoblue.com",203],["osubeavers.com",203],["pittsburghpanthers.com",203],["rolltide.com",203],["texassports.com",203],["thesundevils.com",203],["uclabruins.com",203],["wvuathletics.com",203],["wvusports.com",203],["arizonawildcats.com",203],["calbears.com",203],["cuse.com",203],["georgiadogs.com",203],["goducks.com",203],["goheels.com",203],["gostanford.com",203],["insidekstatesports.com",203],["insidekstatesports.info",203],["insidekstatesports.net",203],["insidekstatesports.org",203],["k-stateathletics.com",203],["k-statefootball.net",203],["k-statefootball.org",203],["k-statesports.com",203],["k-statesports.net",203],["k-statesports.org",203],["k-statewomenshoops.com",203],["k-statewomenshoops.net",203],["k-statewomenshoops.org",203],["kstateathletics.com",203],["kstatefootball.net",203],["kstatefootball.org",203],["kstatesports.com",203],["kstatewomenshoops.com",203],["kstatewomenshoops.net",203],["kstatewomenshoops.org",203],["ksuathletics.com",203],["ksusports.com",203],["scarletknights.com",203],["showdownforrelief.com",203],["syracusecrunch.com",203],["texastech.com",203],["theacc.com",203],["ukathletics.com",203],["usctrojans.com",203],["utahutes.com",203],["utsports.com",203],["wsucougars.com",203],["tricksplit.io",203],["fangraphs.com",204],["4players.de",[205,286]],["buffed.de",205],["gamesaktuell.de",205],["gamezone.de",205],["pcgames.de",205],["videogameszone.de",205],["tvspielfilm.de",[206,207,208,209]],["tvtoday.de",[206,207,208,209]],["chip.de",[206,207,208,209]],["focus.de",[206,207,208,209]],["planetaminecraft.com",210],["cravesandflames.com",211],["codesnse.com",211],["link.paid4file.com",211],["flyad.vip",211],["lapresse.ca",212],["kolyoom.com",213],["ilovephd.com",213],["negumo.com",214],["games.wkb.jp",[215,216]],["fandom.com",[217,577,578]],["kenshi.fandom.com",218],["hausbau-forum.de",219],["homeairquality.org",219],["faucettronn.click",219],["fake-it.ws",220],["laksa19.github.io",221],["1shortlink.com",222],["nesia.my.id",223],["u-s-news.com",224],["makemoneywithurl.com",225],["junkyponk.com",225],["healthfirstweb.com",225],["vocalley.com",225],["yogablogfit.com",225],["howifx.com",[225,456]],["en.financerites.com",225],["mythvista.com",225],["livenewsflix.com",225],["cureclues.com",225],["apekite.com",225],["host-buzz.com",225],["insmyst.com",225],["wp2host.com",225],["blogtechh.com",225],["techbixby.com",225],["blogmyst.com",225],["resetoff.pl",226],["sexodi.com",226],["cdn77.org",227],["howtofixwindows.com",228],["3sexporn.com",229],["momxxxsex.com",229],["myfreevintageporn.com",229],["penisbuyutucum.net",229],["ujszo.com",230],["newsmax.com",231],["bobs-tube.com",232],["nadidetarifler.com",233],["siz.tv",233],["suzylu.co.uk",[234,235]],["onworks.net",236],["yabiladi.com",236],["downloadsoft.net",237],["pixsera.net",238],["testlanguages.com",239],["newsinlevels.com",239],["videosinlevels.com",239],["cbs.com",240],["paramountplus.com",240],["abysscdn.com",[241,242]],["buktube.com",243],["fullxh.com",243],["galleryxh.site",243],["megaxh.com",243],["movingxh.world",243],["seexh.com",243],["unlockxh4.com",243],["valuexh.life",243],["xhaccess.com",243],["xhadult2.com",243],["xhadult3.com",243],["xhadult4.com",243],["xhadult5.com",243],["xhamster46.com",243],["xhamsterporno.mx",243],["xhbig.com",243],["xhbranch5.com",243],["xhchannel.com",243],["xhchannel2.com",243],["xhdate.world",243],["xhday.com",243],["xhday1.com",243],["xhlease.world",243],["xhmoon5.com",243],["xhofficial.com",243],["xhopen.com",243],["xhplanet1.com",243],["xhplanet2.com",243],["xhreal2.com",243],["xhreal3.com",243],["xhspot.com",243],["xhtab2.com",243],["xhtab4.com",243],["xhtotal.com",243],["xhtree.com",243],["xhvictory.com",243],["xhwebsite.com",243],["xhwebsite2.com",243],["xhwebsite5.com",243],["xhwide1.com",243],["xhwide2.com",243],["xhwide5.com",243],["xhxh3.xyz",243],["lightnovelworld.com",244],["megadescarga.net",[245,246,247,248]],["megadescargas.net",[245,246,247,248]],["hentaihaven.xxx",249],["jacquieetmicheltv2.net",251],["fcportables.com",[253,254]],["ultimate-guitar.com",255],["teachmemicro.com",256],["willcycle.com",256],["2ndrun.tv",256],["rackusreads.com",256],["xyzsports111.xyz",[257,258,259]],["xyzsports112.xyz",[257,258,259]],["xyzsports113.xyz",[257,258,259]],["xyzsports114.xyz",[257,258,259]],["xyzsprtsfrmr1.site",[257,258,259]],["xyzsprtsfrmr2.site",[257,258,259]],["claimbits.net",260],["sexyscope.net",261],["recherche-ebook.fr",263],["easymc.io",263],["zonebourse.com",264],["pink-sluts.net",265],["madoohd.com",266],["andhrafriends.com",267],["benzinpreis.de",268],["turtleviplay.xyz",269],["defenseone.com",270],["govexec.com",270],["nextgov.com",270],["route-fifty.com",270],["sharing.wtf",271],["wetter3.de",272],["arahdrive.com",273],["aiimgvlog.fun",[273,296]],["esportivos.fun",274],["cosmonova-broadcast.tv",275],["soccerinhd.com",276],["techedubyte.com",276],["hartvannederland.nl",277],["shownieuws.nl",277],["vandaaginside.nl",277],["rock.porn",[278,279]],["videzz.net",[280,281]],["ezaudiobookforsoul.com",282],["club386.com",283],["androidpolice.com",284],["cbr.com",284],["collider.com",284],["dualshockers.com",284],["gamerant.com",284],["howtogeek.com",284],["makeuseof.com",284],["movieweb.com",284],["screenrant.com",284],["thegamer.com",284],["xda-developers.com",284],["banned.video",284],["madmaxworld.tv",284],["wheelofgold.com",285],["onlinesoccermanager.com",286],["njav.tv",287],["netfapx.com",287],["easyfun.gg",288],["uploadmall.com",289],["rapid-cloud.co",289],["smailpro.com",290],["ilgazzettino.it",291],["ilmessaggero.it",291],["3bmeteo.com",[292,293]],["mconverter.eu",294],["lover937.net",295],["starkroboticsfrc.com",296],["sinonimos.de",296],["antonimos.de",296],["quesignifi.ca",296],["tiktokrealtime.com",296],["tiktokcounter.net",296],["tpayr.xyz",296],["poqzn.xyz",296],["ashrfd.xyz",296],["rezsx.xyz",296],["tryzt.xyz",296],["ashrff.xyz",296],["rezst.xyz",296],["dawenet.com",296],["erzar.xyz",296],["waezm.xyz",296],["waezg.xyz",296],["blackwoodacademy.org",296],["cryptednews.space",296],["vivuq.com",296],["swgop.com",296],["vbnmll.com",296],["telcoinfo.online",296],["dshytb.com",296],["fitdynamos.com",[296,298]],["btcbitco.in",[296,300]],["btcsatoshi.net",296],["cempakajaya.com",296],["crypto4yu.com",296],["readbitcoin.org",296],["wiour.com",296],["finish.addurl.biz",296],["laweducationinfo.com",[296,304]],["savemoneyinfo.com",[296,304]],["worldaffairinfo.com",[296,304]],["godstoryinfo.com",[296,304]],["successstoryinfo.com",[296,304]],["cxissuegk.com",[296,304]],["learnmarketinfo.com",[296,304]],["bhugolinfo.com",[296,304]],["armypowerinfo.com",[296,304]],["rsadnetworkinfo.com",[296,304]],["rsinsuranceinfo.com",[296,304]],["rsfinanceinfo.com",[296,304]],["rsgamer.app",[296,304]],["rssoftwareinfo.com",[296,304]],["rshostinginfo.com",[296,304]],["rseducationinfo.com",[296,304]],["phonereviewinfo.com",[296,304]],["makeincomeinfo.com",[296,304]],["gknutshell.com",[296,304]],["vichitrainfo.com",[296,304]],["workproductivityinfo.com",[296,304]],["advertisingexcel.com",296],["allcryptoz.net",296],["batmanfactor.com",296],["beautifulfashionnailart.com",296],["crewbase.net",296],["documentaryplanet.xyz",296],["crewus.net",296],["gametechreviewer.com",296],["midebalonu.net",296],["misterio.ro",296],["phineypet.com",296],["seory.xyz",296],["shinbhu.net",296],["shinchu.net",296],["substitutefor.com",296],["talkforfitness.com",296],["thefitbrit.co.uk",296],["thumb8.net",296],["thumb9.net",296],["topcryptoz.net",296],["uniqueten.net",296],["ultraten.net",296],["exactpay.online",296],["kiddyearner.com",296],["luckydice.net",297],["adarima.org",297],["tieutietkiem.com",297],["weatherwx.com",297],["sattaguess.com",297],["winshell.de",297],["rosasidan.ws",297],["modmakers.xyz",297],["gamepure.in",297],["warrenrahul.in",297],["austiblox.net",297],["upiapi.in",297],["myownguess.in",297],["networkhint.com",297],["watchhentai.net",297],["thichcode.net",297],["texturecan.com",297],["tikmate.app",[297,531]],["4funbox.com",299],["nephobox.com",299],["1024tera.com",299],["blog.cryptowidgets.net",300],["blog.insurancegold.in",300],["blog.wiki-topia.com",300],["blog.coinsvalue.net",300],["blog.cookinguide.net",300],["blog.freeoseocheck.com",300],["blog24.me",300],["bildirim.link",302],["appsbull.com",303],["diudemy.com",303],["maqal360.com",303],["lifesurance.info",305],["infokeeda.xyz",306],["webzeni.com",306],["dl.apkmoddone.com",307],["phongroblox.com",307],["apkmodvn.com",308],["streamelements.com",[310,311]],["share.hntv.tv",[311,646,647,648]],["forum.dji.com",[311,648]],["unionpayintl.com",[311,647]],["arcai.com",312],["my-code4you.blogspot.com",313],["flickr.com",314],["firefile.cc",315],["pestleanalysis.com",315],["kochamjp.pl",315],["tutorialforlinux.com",315],["whatsaero.com",315],["animeblkom.net",[315,331]],["blkom.com",315],["globes.co.il",[316,317]],["jardiner-malin.fr",318],["tw-calc.net",319],["ohmybrush.com",320],["talkceltic.net",321],["mentalfloss.com",322],["uprafa.com",323],["cube365.net",324],["nightfallnews.com",[325,326]],["wwwfotografgotlin.blogspot.com",327],["freelistenonline.com",327],["badassdownloader.com",328],["quickporn.net",329],["yellowbridge.com",330],["aosmark.com",332],["atozmath.com",[334,335,336,337,338,339,340]],["newyorker.com",341],["brighteon.com",342],["more.tv",343],["video1tube.com",344],["alohatube.xyz",344],["fshost.me",345],["link.cgtips.org",346],["hentaicloud.com",347],["paperzonevn.com",349],["hentaienglish.com",350],["hentaiporno.xxx",350],["venge.io",[351,352]],["btcbux.io",353],["its.porn",[354,355]],["atv.at",356],["kusonime.com",[357,358]],["jetpunk.com",[360,361,362,363]],["imgur.com",[364,365,541]],["hentai-party.com",366],["hentaicomics.pro",366],["xxx-comics.pro",366],["genshinimpactcalculator.com",369],["mysexgames.com",370],["embed.indavideo.hu",373],["gdr-online.com",374],["mmm.dk",375],["iqiyi.com",[376,377,523]],["m.iqiyi.com",378],["japopav.tv",379],["lvturbo.com",379],["nbcolympics.com",380],["apkhex.com",381],["indiansexstories2.net",382],["issstories.xyz",382],["1340kbbr.com",383],["gorgeradio.com",383],["kduk.com",383],["kedoam.com",383],["kejoam.com",383],["kelaam.com",383],["khsn1230.com",383],["kjmx.rocks",383],["kloo.com",383],["klooam.com",383],["klykradio.com",383],["kmed.com",383],["kmnt.com",383],["kool991.com",383],["kpnw.com",383],["kppk983.com",383],["krktcountry.com",383],["ktee.com",383],["kwro.com",383],["kxbxfm.com",383],["thevalley.fm",383],["quizlet.com",384],["dsocker1234.blogspot.com",385],["schoolcheats.net",[386,387]],["mgnet.xyz",388],["designtagebuch.de",389],["pixroute.com",390],["uploady.io",391],["calculator-online.net",392],["porngames.club",393],["sexgames.xxx",393],["111.90.159.132",394],["battleplan.news",394],["mobile-tracker-free.com",395],["pfps.gg",396],["ac-illust.com",[397,398]],["photo-ac.com",[397,398]],["vlxxs.net",399],["rapelust.com",399],["vtube.to",399],["vtplay.net",399],["desitelugusex.com",399],["xvideos-downloader.net",399],["xxxvideotube.net",399],["sdefx.cloud",399],["nozomi.la",399],["moviesonlinefree.net",399],["social-unlock.com",400],["ninja.io",401],["sourceforge.net",402],["samfirms.com",403],["huffpost.com",404],["ingles.com",405],["spanishdict.com",405],["surfline.com",[406,407]],["play.tv3.ee",408],["play.tv3.lt",408],["play.tv3.lv",408],["tv3play.skaties.lv",408],["trendyoum.com",409],["bulbagarden.net",410],["moviestars.to",411],["hollywoodlife.com",412],["mat6tube.com",413],["textstudio.co",414],["newtumbl.com",415],["aruble.net",417],["nevcoins.club",418],["mail.com",419],["oggi.it",[422,423]],["manoramamax.com",422],["video.gazzetta.it",[422,423]],["mangakita.id",424],["mangakita.net",424],["poscishd.online",425],["avpgalaxy.net",426],["mhma12.tech",427],["panda-novel.com",428],["zebranovel.com",428],["lightsnovel.com",428],["eaglesnovel.com",428],["pandasnovel.com",428],["zadfaucet.com",429],["ewrc-results.com",430],["kizi.com",431],["cyberscoop.com",432],["fedscoop.com",432],["canale.live",433],["indiatimes.com",434],["mafiatown.pl",[435,436]],["jeep-cj.com",437],["sponsorhunter.com",438],["cloudcomputingtopics.net",439],["likecs.com",440],["tiscali.it",441],["linkspy.cc",442],["tutelehd3.xyz",443],["dirty.pink",[444,445,446]],["adshnk.com",447],["chattanoogan.com",448],["adsy.pw",449],["playstore.pw",449],["socialmediagirls.com",450],["windowspro.de",451],["snapinsta.app",452],["tvtv.ca",453],["tvtv.us",453],["mydaddy.cc",454],["roadtrippin.fr",455],["vavada5com.com",456],["redketchup.io",[457,458,459]],["streamsilk.com",460],["anyporn.com",[461,476]],["bravoporn.com",461],["bravoteens.com",461],["crocotube.com",461],["hellmoms.com",461],["hellporno.com",461],["sex3.com",461],["tubewolf.com",461],["xbabe.com",461],["xcum.com",461],["zedporn.com",461],["imagetotext.info",462],["infokik.com",463],["freepik.com",464],["ddwloclawek.pl",[465,466]],["deezer.com",467],["my-subs.co",468],["plaion.com",469],["slideshare.net",[470,471]],["ustreasuryyieldcurve.com",472],["businesssoftwarehere.com",473],["goo.st",473],["freevpshere.com",473],["softwaresolutionshere.com",473],["staige.tv",477],["in-jpn.com",478],["oninet.ne.jp",478],["xth.jp",478],["androidadult.com",479],["streamvid.net",480],["watchtv24.com",481],["cellmapper.net",482],["medscape.com",483],["newscon.org",[484,485]],["arkadium.com",486],["bembed.net",487],["elbailedeltroleo.site",487],["embedv.net",487],["fslinks.org",487],["listeamed.net",487],["v6embed.xyz",487],["vgplayer.xyz",487],["vid-guard.com",487],["vidguard.online",487],["app.blubank.com",488],["mobileweb.bankmellat.ir",488],["sportdeutschland.tv",489],["kcra.com",489],["wcvb.com",489],["ccthesims.com",496],["chromeready.com",496],["coursedrive.org",496],["dtbps3games.com",496],["illustratemagazine.com",496],["uknip.co.uk",496],["vod.pl",497],["megadrive-emulator.com",498],["animesaga.in",501],["moviesapi.club",501],["bestx.stream",501],["watchx.top",501],["digimanie.cz",502],["svethardware.cz",502],["srvy.ninja",503],["drawer-opportunity-i-243.site",504],["tchatche.com",505],["cnn.com",[506,507,508]],["edmdls.com",509],["freshremix.net",509],["scenedl.org",509],["trakt.tv",510],["client.falixnodes.net",511],["shroomers.app",512],["classicalradio.com",513],["di.fm",513],["jazzradio.com",513],["radiotunes.com",513],["rockradio.com",513],["zenradio.com",513],["pc-builds.com",514],["qtoptens.com",514],["reuters.com",514],["today.com",514],["videogamer.com",514],["wrestlinginc.com",514],["gbatemp.net",514],["movie-th.tv",515],["iwanttfc.com",516],["nutraingredients-asia.com",517],["nutraingredients-latam.com",517],["nutraingredients-usa.com",517],["nutraingredients.com",517],["mavenarts.in",518],["ozulscansen.com",519],["fitnessbr.click",520],["minhareceita.xyz",520],["doomied.monster",521],["lookmovie2.to",521],["royalroad.com",522],["biletomat.pl",524],["hextank.io",[525,526]],["filmizlehdfilm.com",[527,528,529,530]],["fullfilmizle.cc",[527,528,529,530]],["sagewater.com",532],["redlion.net",532],["satdl.com",533],["vidstreaming.xyz",534],["everand.com",535],["myradioonline.pl",536],["tacobell.com",538],["zefoy.com",539],["natgeotv.com",542],["wayfair.com",543],["br.de",544],["indeed.com",545],["pasteboard.co",546],["clickhole.com",547],["deadspin.com",547],["gizmodo.com",547],["jalopnik.com",547],["jezebel.com",547],["kotaku.com",547],["lifehacker.com",547],["splinternews.com",547],["theinventory.com",547],["theonion.com",547],["theroot.com",547],["thetakeout.com",547],["pewresearch.org",547],["los40.com",[548,549]],["as.com",549],["telegraph.co.uk",[550,551]],["poweredbycovermore.com",[550,600]],["lumens.com",[550,600]],["verizon.com",552],["humanbenchmark.com",553],["politico.com",554],["officedepot.co.cr",[555,556]],["usnews.com",559],["factable.com",561],["zee5.com",562],["gala.fr",563],["geo.fr",563],["voici.fr",563],["gloucestershirelive.co.uk",564],["arsiv.mackolik.com",565],["jacksonguitars.com",566],["scandichotels.com",567],["stylist.co.uk",568],["nettiauto.com",569],["thaiairways.com",[570,571]],["cerbahealthcare.it",[572,573]],["futura-sciences.com",[572,589]],["tiendaenlinea.claro.com.ni",[574,575]],["tieba.baidu.com",576],["grasshopper.com",[579,580]],["epson.com.cn",[581,582,583,584]],["oe24.at",[585,586]],["szbz.de",585],["platform.autods.com",[587,588]],["wikihow.com",590],["citibank.com.sg",591],["uol.com.br",[592,593,594,595,596]],["gazzetta.gr",597],["digicol.dpm.org.cn",[598,599]],["virginmediatelevision.ie",601],["larazon.es",[602,603]],["waitrosecellar.com",[604,605,606]],["sharpen-free-design-generator.netlify.app",[608,609]],["help.cashctrl.com",[610,611]],["gry-online.pl",612],["vidaextra.com",613],["commande.rhinov.pro",[614,615]],["ecom.wixapps.net",[614,615]],["tipranks.com",[616,617]],["iceland.co.uk",[618,619,620]],["socket.pearsoned.com",621],["tntdrama.com",[622,623]],["mobile.de",[624,625]],["ioe.vn",[626,627]],["geiriadur.ac.uk",[626,630]],["welsh-dictionary.ac.uk",[626,630]],["bikeportland.org",[628,629]],["biologianet.com",[593,594,595]],["10play.com.au",[631,632]],["sunshine-live.de",[633,634]],["whatismyip.com",[635,636]],["myfitnesspal.com",637],["netoff.co.jp",[638,639]],["clickjogos.com.br",642],["bristan.com",[643,644]],["zillow.com",645],["optimum.net",[649,650]],["investor-web.hdfcfund.com",651],["user.guancha.cn",[652,653]],["sosovalue.com",654],["bandyforbundet.no",[655,656]],["tatacommunications.com",657],["suamusica.com.br",[658,659,660]],["macrotrends.net",[661,662]],["code.world",663],["topgear.com",664],["eservice.directauto.com",[665,666]],["nbcsports.com",667],["standard.co.uk",668],["pruefernavi.de",[669,670]],["poophq.com",672],["veev.to",672],["uber.com",[673,674]],["jdsports.com",[673,674]],["engadget.com",[673,674]],["yahoo.com",[673,674]],["techcrunch.com",[673,674]],["rivals.com",[673,674]],["kkrt.com",[673,674]],["crunchyroll.com",[673,674]],["dnb.com",[673,674]],["dnb.co.uk",[673,674]],["weather.com",[673,674]],["ubereats.com",[673,674]],["usatoday.com",675]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,50]],["1movies",[14,17]],["xmovies8",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",21],["hqq",[22,23]],["waaw",[23,24]],["younetu",23],["vvtplayer",23],["123link",25],["adshort",25],["linkshorts",25],["adsrt",25],["vinaurl",25],["adfloz",25],["dutchycorp",25],["shortearn",25],["pingit",25],["shrink",25],["tmearn",25],["megalink",25],["miniurl",25],["gplinks",25],["clk",25],["pureshort",25],["shrinke",25],["shrinkme",25],["link1s",25],["shortzzy",25],["shorttey",[25,197]],["lite-link",25],["adcorto",25],["zshort",25],["upfiles",25],["linkfly",25],["wplink",25],["seulink",25],["encurtalink",25],["camwhores",[26,37,79,80,81]],["tube8",[27,28]],["youporn",28],["redtube",28],["pornhub",[28,183]],["upornia",[30,31]],["fmovies",50],["streamwish",[54,55]],["xtits",[58,115]],["pouvideo",60],["povvideo",60],["povw1deo",60],["povwideo",60],["powv1deo",60],["powvibeo",60],["powvideo",60],["powvldeo",60],["plyjam",[65,66]],["fxporn69",71],["vipbox",72],["viprow",72],["desbloqueador",76],["xberuang",77],["teknorizen",77],["subtorrents",85],["subtorrents1",85],["newpelis",85],["pelix",85],["allcalidad",85],["infomaniakos",85],["filecrypt",90],["tornadomovies",96],["icdrama",102],["mangasail",102],["file4go",104],["mangovideo",116],["asianclub",124],["anitube",127],["streamingcommunity",127],["mixdrop",129],["uploadev",154],["ver-pelis-online",162],["ancient-origins",171],["spankbang",190],["lookcam",197],["lootlinks",197],["dpstream",200],["bluemediafiles",202],["docer",226],["hamsterix",243],["xhamster",243],["xhamster1",243],["xhamster10",243],["xhamster11",243],["xhamster12",243],["xhamster13",243],["xhamster14",243],["xhamster15",243],["xhamster16",243],["xhamster17",243],["xhamster18",243],["xhamster19",243],["xhamster20",243],["xhamster2",243],["xhamster3",243],["xhamster4",243],["xhamster42",243],["xhamster5",243],["xhamster7",243],["xhamster8",243],["acortalo",[245,246,247,248]],["acortar",[245,246,247,248]],["a2zapk",252],["kickassanime",262],["doomovie-hd",266],["drakecomic",285],["terabox",299],["ctrlv",333],["123movieshd",359],["uproxy",367],["animesa",368],["cinecalidad",[371,372]],["dvdplay",399],["apkmaven",416],["gmx",420],["gamereactor",475],["vembed",487],["empire-anime",[490,491,492,493,494]],["empire-stream",[490,491,492]],["empire-streaming",[490,491,492]],["empire-streamz",[490,491,492]],["tvhay",[499,500]],["lookmovie",521],["filmizletv",[527,528,529,530]],["www.google",537],["officedepot",[557,558]],["foundit",[640,641]]]);

const exceptionsMap = new Map([["pingit.com",[25]],["pingit.me",[25]],["lookmovie.studio",[521]]]);

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
    } else if ( raw === 'throwFunc' ) {
        value = function(){ throw ''; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('json:') ) {
            try { value = safe.JSON_parse(raw.slice(5)); } catch(ex) { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
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
