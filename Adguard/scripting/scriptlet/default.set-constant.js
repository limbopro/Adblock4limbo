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
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["Object.prototype.run","undefined"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["navigator.brave","undefined"],["paAddUnit","noopFunc"],["showBlackout","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["googletag.cmd.push","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["showFairUser","true"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,621]],["t-online.de",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["motherless.com",8],["sueddeutsche.de",9],["watchanimesub.net",10],["wco.tv",10],["wcoanimesub.tv",10],["wcoforever.net",10],["freeviewmovies.com",10],["filehorse.com",10],["guidetnt.com",10],["sp-today.com",10],["linkvertise.com",10],["eropaste.net",10],["getpaste.link",10],["sharetext.me",10],["note.sieuthuthuat.com",10],["elcriticodelatele.com",[10,301]],["gadgets.es",[10,301]],["amateurporn.co",[10,113]],["wiwo.de",11],["masteranime.tv",12],["alphaporno.com",[13,401]],["porngem.com",13],["uploadbank.com",[13,87]],["shortit.pw",[13,97]],["familyporn.tv",13],["id45.cyou",13],["85tube.com",[13,79]],["k1nk.co",13],["watchasians.cc",13],["soltoshindo.com",13],["dronedj.com",15],["nolive.me",16],["sankakucomplex.com",17],["player.glomex.com",18],["merkur.de",18],["tz.de",18],["hotpornfile.org",21],["player.tabooporns.com",21],["x69.ovh",21],["wiztube.xyz",21],["multiup.us",21],["rpdrlatino.live",21],["peliculas8k.com",[21,22]],["video.q34r.org",21],["69x.online",21],["czxxx.org",21],["vtplayer.online",21],["netu.ac",21],["netu.frembed.lol",21],["dirtyvideo.fun",22],["adbull.org",23],["mitly.us",23],["linkrex.net",23],["linx.cc",23],["oke.io",23],["dz4link.com",23],["linclik.com",23],["shrt10.com",23],["loptelink.com",23],["cut-fly.com",23],["linkfinal.com",23],["payskip.org",23],["cutpaid.com",23],["forexmab.com",23],["linkjust.com",23],["linkszia.co",23],["leechpremium.link",23],["icutlink.com",[23,118]],["oncehelp.com",23],["rgl.vn",23],["reqlinks.net",23],["bitlk.com",23],["qlinks.eu",23],["link.3dmili.com",23],["short-fly.com",23],["foxseotools.com",23],["pngit.live",23],["link.turkdown.com",23],["urlty.com",23],["7r6.com",23],["oko.sh",23],["ckk.ai",23],["fc.lc",23],["fstore.biz",23],["cuts-url.com",23],["eio.io",23],["exe.app",23],["exee.io",23],["exey.io",23],["skincarie.com",23],["exeo.app",23],["coinlyhub.com",[23,191]],["adsafelink.com",23],["aii.sh",23],["cybertechng.com",[23,204]],["cutdl.xyz",23],["iir.ai",23],["shorteet.com",[23,224]],["smoner.com",23],["gyanlight.com",23],["xpshort.com",23],["upshrink.com",23],["enit.in",[23,219]],["ez4short.com",23],["easysky.in",23],["veganab.co",23],["adrinolinks.in",23],["go.bloggingaro.com",23],["go.gyanitheme.com",23],["go.theforyou.in",23],["go.hipsonyc.com",23],["birdurls.com",23],["vipurl.in",23],["try2link.com",23],["jameeltips.us",23],["gainl.ink",23],["promo-visits.site",23],["satoshi-win.xyz",[23,240]],["shorterall.com",23],["encurtandourl.com",23],["forextrader.site",23],["postazap.com",23],["cety.app",23],["exego.app",[23,235]],["cutlink.net",23],["cutsy.net",23],["cutyurls.com",23],["cutty.app",23],["cutnet.net",23],["tinys.click",[23,204]],["cpm.icu",23],["panyshort.link",23],["enagato.com",23],["pandaznetwork.com",23],["tvi.la",23],["iir.la",23],["tii.la",23],["oei.la",23],["lnbz.la",[23,219]],["oii.la",[23,248]],["tpi.li",[23,248]],["recipestutorials.com",23],["shrinkforearn.in",23],["techyuth.xyz",23],["oii.io",23],["du-link.in",23],["atglinks.com",23],["thotpacks.xyz",23],["megaurl.in",23],["megafly.in",23],["simana.online",23],["fooak.com",23],["joktop.com",23],["evernia.site",23],["falpus.com",23],["link.paid4link.com",[23,252]],["exalink.fun",23],["indiamaja.com",23],["newshuta.in",23],["shortxlinks.com",23],["upfiles-urls.com",23],["flycutlink.com",[23,204]],["linksly.co",23],["pkr.pw",23],["imagenesderopaparaperros.com",23],["shortenbuddy.com",23],["apksvip.com",23],["4cash.me",23],["namaidani.com",23],["teknomuda.com",23],["miuiku.com",23],["savelink.site",23],["samaa-pro.com",23],["miklpro.com",23],["modapk.link",23],["ccurl.net",23],["linkpoi.me",23],["menjelajahi.com",23],["pewgame.com",23],["haonguyen.top",23],["crazyblog.in",23],["gtlink.co",23],["cutearn.net",23],["rshrt.com",23],["filezipa.com",23],["dz-linkk.com",23],["theblissempire.com",23],["finanzas-vida.com",23],["adurly.cc",23],["paid4.link",23],["link.asiaon.top",23],["go.gets4link.com",23],["download.sharenulled.net",23],["beingtek.com",23],["shorturl.unityassets4free.com",23],["disheye.com",23],["techymedies.com",23],["techysuccess.com",23],["za.gl",[23,135]],["bblink.com",23],["myad.biz",23],["swzz.xyz",23],["vevioz.com",23],["charexempire.com",23],["clk.asia",23],["egfly.xyz",23],["linka.click",23],["sturls.com",23],["myshrinker.com",23],["go.adinsurance.xyz",23],["snowurl.com",[23,204]],["netfile.cc",23],["link.insurglobal.xyz",23],["theconomy.me",23],["rocklink.in",23],["techgeek.digital",23],["download3s.net",23],["shortx.net",23],["musicc.xyz",23],["shortawy.com",23],["tlin.me",23],["apprepack.com",23],["up-load.one",23],["zuba.link",23],["news.speedynews.xyz",23],["golink.xaydungplus.com",23],["bestcash2020.com",23],["hoxiin.com",23],["technemo.xyz",23],["go.linkbnao.com",23],["link-yz.com",23],["paylinnk.com",23],["thizissam.in",23],["ier.ai",23],["bloggertheme.xyz",23],["adslink.pw",23],["novelssites.com",23],["links.medipost.org",23],["faucetcrypto.net",23],["short.freeltc.top",23],["trxking.xyz",23],["weadown.com",23],["m.bloggingguidance.com",23],["blog.onroid.com",23],["link.codevn.net",23],["upfilesurls.com",23],["shareus.site",23],["link4rev.site",23],["bloginguru.xyz",23],["c2g.at",23],["bitcosite.com",[23,414]],["cryptosh.pro",23],["link68.net",23],["traffic123.net",23],["windowslite.net",[23,204]],["viewfr.com",23],["cl1ca.com",23],["4br.me",23],["fir3.net",23],["kiddyshort.com",23],["watchmygf.me",[24,50]],["camwhorez.tv",[24,36,78,79]],["cambay.tv",[24,57,78,110,112,113,114,115]],["fpo.xxx",[24,57]],["sexemix.com",24],["heavyfetish.com",[24,551]],["thotcity.su",24],["viralxxxporn.com",[24,227]],["you-porn.com",26],["youporngay.com",26],["youpornru.com",26],["9908ww.com",26],["adelaidepawnbroker.com",26],["bztube.com",26],["hotovs.com",26],["insuredhome.org",26],["nudegista.com",26],["pornluck.com",26],["vidd.se",26],["pornhub.com",26],["pornerbros.com",27],["freep.com",27],["porn.com",30],["tune.pk",31],["noticias.gospelmais.com.br",32],["techperiod.com",32],["viki.com",[33,34]],["sleazyneasy.com",[36,37,38]],["smutr.com",[36,187]],["yourporngod.com",[36,37]],["javbangers.com",[36,291]],["camfox.com",36],["camthots.tv",[36,110]],["shegotass.info",36],["amateur8.com",36],["bigtitslust.com",36],["ebony8.com",36],["freeporn8.com",36],["lesbian8.com",36],["maturetubehere.com",36],["sortporn.com",36],["webcamvau.com",36],["motherporno.com",[36,37,57,112]],["tktube.com",36],["theporngod.com",[36,37]],["watchdirty.to",[36,79,80,113]],["pornsocket.com",39],["luxuretv.com",40],["porndig.com",[41,42]],["webcheats.com.br",43],["ceesty.com",[44,45]],["gestyy.com",[44,45]],["corneey.com",45],["destyy.com",45],["festyy.com",45],["sh.st",45],["mitaku.net",45],["angrybirdsnest.com",46],["zrozz.com",46],["clix4btc.com",46],["4tests.com",46],["business-standard.com",46],["goltelevision.com",46],["news-und-nachrichten.de",46],["laradiobbs.net",46],["urlaubspartner.net",46],["produktion.de",46],["cinemaxxl.de",46],["bladesalvador.com",46],["tempr.email",46],["cshort.org",46],["friendproject.net",46],["covrhub.com",46],["katfile.com",46],["trust.zone",46],["planetsuzy.org",47],["empflix.com",48],["alleneconomicmatter.com",49],["apinchcaseation.com",49],["bethshouldercan.com",49],["bigclatterhomesguideservice.com",49],["bradleyviewdoctor.com",49],["brittneystandardwestern.com",49],["brookethoughi.com",49],["brucevotewithin.com",49],["cindyeyefinal.com",49],["denisegrowthwide.com",49],["donaldlineelse.com",49],["edwardarriveoften.com",49],["erikcoldperson.com",49],["evelynthankregion.com",49],["graceaddresscommunity.com",49],["heatherdiscussionwhen.com",49],["housecardsummerbutton.com",49],["jamessoundcost.com",49],["jamesstartstudent.com",49],["jamiesamewalk.com",49],["jasminetesttry.com",49],["jasonresponsemeasure.com",49],["jayservicestuff.com",49],["jessicaglassauthor.com",49],["johntryopen.com",49],["josephseveralconcern.com",49],["kennethofficialitem.com",49],["lisatrialidea.com",49],["lorimuchbenefit.com",49],["loriwithinfamily.com",49],["lukecomparetwo.com",49],["markstyleall.com",49],["michaelapplysome.com",49],["morganoperationface.com",49],["nectareousoverelate.com",49],["paulkitchendark.com",49],["rebeccaneverbase.com",49],["roberteachfinal.com",49],["robertplacespace.com",49],["ryanagoinvolve.com",49],["sandratableother.com",49],["sandrataxeight.com",49],["seanshowcould.com",49],["sethniceletter.com",49],["shannonpersonalcost.com",49],["sharonwhiledemocratic.com",49],["stevenimaginelittle.com",49],["strawberriesporail.com",49],["susanhavekeep.com",49],["timberwoodanotia.com",49],["tinycat-voe-fashion.com",49],["toddpartneranimal.com",49],["troyyourlead.com",49],["uptodatefinishconference.com",49],["uptodatefinishconferenceroom.com",49],["vincentincludesuccessful.com",49],["voe.sx",49],["motphimtv.com",49],["rabbitstream.net",49],["projectfreetv.one",49],["freeplayervideo.com",49],["nazarickol.com",49],["player-cdn.com",49],["playhydrax.com",[49,486,487]],["transparentcalifornia.com",50],["deepbrid.com",51],["webnovel.com",52],["videosgay.me",[53,54]],["oneupload.to",54],["oneupload.online",54],["wishfast.top",54],["rubystm.com",54],["schwaebische.de",55],["8tracks.com",56],["3movs.com",57],["bravoerotica.net",[57,112]],["youx.xxx",57],["camclips.tv",[57,187]],["camflow.tv",[57,112,113,156,227]],["camhoes.tv",[57,110,112,113,156,227]],["xmegadrive.com",57],["xxxymovies.com",57],["xxxshake.com",57],["gayck.com",57],["xhand.com",[57,112]],["analdin.com",[57,112]],["revealname.com",58],["golfchannel.com",60],["telemundodeportes.com",60],["stream.nbcsports.com",60],["mathdf.com",60],["gamcore.com",61],["porcore.com",61],["69games.xxx",61],["javmix.app",61],["tecknity.com",62],["haaretz.co.il",63],["haaretz.com",63],["hungama.com",63],["a-o.ninja",63],["anime-odcinki.pl",63],["kumpulmanga.org",63],["shortgoo.blogspot.com",63],["tonanmedia.my.id",[63,438]],["yurasu.xyz",63],["isekaipalace.com",63],["vikistream.com",64],["eplayer.click",[64,65]],["ennovelas.com",[65,71]],["n-tv.de",66],["brigitte.de",67],["stern.de",67],["foxsports.com.au",68],["canberratimes.com.au",68],["thesimsresource.com",69],["bdnewszh.com",71],["streamservicehd.click",71],["ctrl.blog",72],["sportlife.es",73],["finofilipino.org",74],["acortarm.xyz",75],["mysflink.blogspot.com",76],["assia.tv",77],["assia4.com",77],["assia24.com",77],["cwtvembeds.com",[79,111]],["camlovers.tv",79],["porntn.com",79],["pornissimo.org",79],["sexcams-24.com",[79,113]],["watchporn.to",[79,113]],["camwhorez.video",79],["footstockings.com",[79,80,113]],["xmateur.com",[79,80,113]],["multi.xxx",80],["worldofbitco.in",[81,82]],["weatherx.co.in",[81,82]],["getyourbitco.in",81],["sunbtc.space",81],["ojogos.com.br",84],["powforums.com",85],["supforums.com",85],["studybullet.com",85],["usgamer.net",86],["recordonline.com",86],["freebitcoin.win",89],["e-monsite.com",89],["coindice.win",89],["temp-mails.com",90],["freiepresse.de",91],["investing.com",92],["mp3fiber.com",94],["chicoer.com",95],["dailybreeze.com",95],["dailybulletin.com",95],["dailynews.com",95],["delcotimes.com",95],["eastbaytimes.com",95],["macombdaily.com",95],["ocregister.com",95],["pasadenastarnews.com",95],["pe.com",95],["presstelegram.com",95],["redlandsdailyfacts.com",95],["reviewjournal.com",95],["santacruzsentinel.com",95],["saratogian.com",95],["sentinelandenterprise.com",95],["sgvtribune.com",95],["tampabay.com",95],["times-standard.com",95],["theoaklandpress.com",95],["trentonian.com",95],["twincities.com",95],["whittierdailynews.com",95],["bostonherald.com",95],["dailycamera.com",95],["sbsun.com",95],["dailydemocrat.com",95],["montereyherald.com",95],["orovillemr.com",95],["record-bee.com",95],["redbluffdailynews.com",95],["reporterherald.com",95],["thereporter.com",95],["timescall.com",95],["timesheraldonline.com",95],["ukiahdailyjournal.com",95],["dailylocal.com",95],["mercurynews.com",95],["suedkurier.de",96],["anysex.com",98],["vlist.se",99],["pornve.com",100],["coolrom.com.au",101],["pornohirsch.net",102],["marie-claire.es",103],["gamezhero.com",103],["flashgirlgames.com",103],["onlinesudoku.games",103],["mpg.football",103],["sssam.com",103],["globalnews.ca",104],["drinksmixer.com",105],["leitesculinaria.com",105],["fupa.net",106],["browardpalmbeach.com",107],["dallasobserver.com",107],["houstonpress.com",107],["miaminewtimes.com",107],["phoenixnewtimes.com",107],["westword.com",107],["nhentai.net",108],["nowtv.com.tr",109],["caminspector.net",110],["camwhoreshd.com",110],["camgoddess.tv",110],["gay4porn.com",112],["mypornhere.com",112],["camhub.cc",113],["love4porn.com",113],["thotvids.com",113],["watchmdh.to",113],["celebwhore.com",113],["cluset.com",113],["4kporn.xxx",113],["xhomealone.com",113],["lusttaboo.com",[113,365]],["hentai-moon.com",113],["sexwebvideo.com",113],["sexwebvideo.net",113],["mediapason.it",116],["linkspaid.com",116],["tuotromedico.com",116],["neoteo.com",116],["phoneswiki.com",116],["celebmix.com",116],["myneobuxportal.com",116],["oyungibi.com",116],["25yearslatersite.com",116],["jeshoots.com",117],["techhx.com",117],["karanapk.com",117],["flashplayer.fullstacks.net",119],["cloudapps.herokuapp.com",119],["youfiles.herokuapp.com",119],["texteditor.nsspot.net",119],["temp-mail.org",120],["javhdporn.net",121],["comnuan.com",122],["veedi.com",123],["battleboats.io",123],["fruitlab.com",124],["acetack.com",124],["androidquest.com",124],["apklox.com",124],["chhaprawap.in",124],["gujarativyakaran.com",124],["kashmirstudentsinformation.in",124],["kisantime.com",124],["shetkaritoday.in",124],["pastescript.com",124],["trimorspacks.com",124],["updrop.link",124],["haddoz.net",124],["garoetpos.com",124],["stiletv.it",125],["hqtv.biz",127],["liveuamap.com",128],["muvibg.com",128],["audycje.tokfm.pl",129],["hulu.com",[130,131,132]],["shush.se",133],["allkpop.com",134],["pickcrackpasswords.blogspot.com",136],["kfrfansub.com",137],["thuglink.com",137],["voipreview.org",137],["illicoporno.com",138],["lavoixdux.com",138],["tonpornodujour.com",138],["jacquieetmichel.net",138],["swame.com",138],["vosfemmes.com",138],["voyeurfrance.net",138],["jacquieetmicheltv.net",[138,495,496]],["hanime.tv",139],["pogo.com",140],["cloudvideo.tv",141],["legionjuegos.org",142],["legionpeliculas.org",142],["legionprogramas.org",142],["16honeys.com",143],["elespanol.com",144],["remodelista.com",145],["coolmathgames.com",[146,147,148,574]],["audiofanzine.com",149],["hitokin.net",151],["developerinsider.co",152],["ilprimatonazionale.it",153],["hotabis.com",153],["root-nation.com",153],["italpress.com",153],["airsoftmilsimnews.com",153],["artribune.com",153],["thehindu.com",154],["cambro.tv",[155,156]],["nibelungen-kurier.de",157],["adfoc.us",159],["techyember.com",159],["remixbass.com",159],["techipop.com",159],["quickimageconverter.com",159],["mastharyana.com",159],["tea-coffee.net",159],["spatsify.com",159],["newedutopics.com",159],["getviralreach.in",159],["edukaroo.com",159],["funkeypagali.com",159],["careersides.com",159],["nayisahara.com",159],["wikifilmia.com",159],["infinityskull.com",159],["viewmyknowledge.com",159],["iisfvirtual.in",159],["starxinvestor.com",159],["jkssbalerts.com",159],["myprivatejobs.com",[159,236]],["wikitraveltips.com",[159,236]],["amritadrino.com",[159,236]],["sahlmarketing.net",159],["filmypoints.in",159],["fitnessholic.net",159],["moderngyan.com",159],["sattakingcharts.in",159],["freshbhojpuri.com",159],["bgmi32bitapk.in",159],["bankshiksha.in",159],["earn.mpscstudyhub.com",159],["earn.quotesopia.com",159],["money.quotesopia.com",159],["best-mobilegames.com",159],["learn.moderngyan.com",159],["bharatsarkarijobalert.com",159],["quotesopia.com",159],["creditsgoal.com",159],["techacode.com",159],["trickms.com",159],["ielts-isa.edu.vn",159],["sptfy.be",159],["mcafee-com.com",[159,235]],["pianetamountainbike.it",160],["barchart.com",161],["modelisme.com",162],["parasportontario.ca",162],["prescottenews.com",162],["nrj-play.fr",163],["hackingwithreact.com",164],["gutekueche.at",165],["eplfootballmatch.com",166],["peekvids.com",167],["playvids.com",167],["pornflip.com",167],["redensarten-index.de",168],["vw-page.com",169],["viz.com",[170,171]],["0rechner.de",172],["configspc.com",173],["xopenload.me",173],["uptobox.com",173],["uptostream.com",173],["japgay.com",174],["mega-debrid.eu",175],["dreamdth.com",176],["diaridegirona.cat",178],["diariodeibiza.es",178],["diariodemallorca.es",178],["diarioinformacion.com",178],["eldia.es",178],["emporda.info",178],["farodevigo.es",178],["laopinioncoruna.es",178],["laopiniondemalaga.es",178],["laopiniondemurcia.es",178],["laopiniondezamora.es",178],["laprovincia.es",178],["levante-emv.com",178],["mallorcazeitung.es",178],["regio7.cat",178],["superdeporte.es",178],["playpaste.com",179],["player.rtl2.de",180],["cnbc.com",181],["puzzles.msn.com",182],["metro.us",182],["newsobserver.com",182],["arkadiumhosted.com",182],["firefaucet.win",184],["55k.io",185],["filelions.online",185],["stmruby.com",185],["direct-link.net",186],["direkt-wissen.com",186],["link-to.net",186],["fullhdxxx.com",188],["pornclassic.tube",189],["tubepornclassic.com",189],["etonline.com",190],["creatur.io",190],["drphil.com",190],["urbanmilwaukee.com",190],["ontiva.com",190],["hideandseek.world",190],["myabandonware.com",190],["kendam.com",190],["wttw.com",190],["synonyms.com",190],["definitions.net",190],["hostmath.com",190],["camvideoshub.com",190],["minhaconexao.com.br",190],["home-made-videos.com",192],["pxrnxx.xyz",192],["amateur-couples.com",192],["slutdump.com",192],["produsat.com",194],["12thman.com",196],["acusports.com",196],["atlantic10.com",196],["auburntigers.com",196],["baylorbears.com",196],["bceagles.com",196],["bgsufalcons.com",196],["big12sports.com",196],["bigten.org",196],["bradleybraves.com",196],["butlersports.com",196],["cmumavericks.com",196],["conferenceusa.com",196],["cyclones.com",196],["dartmouthsports.com",196],["daytonflyers.com",196],["dbupatriots.com",196],["dbusports.com",196],["denverpioneers.com",196],["fduknights.com",196],["fgcuathletics.com",196],["fightinghawks.com",196],["fightingillini.com",196],["floridagators.com",196],["friars.com",196],["friscofighters.com",196],["gamecocksonline.com",196],["goarmywestpoint.com",196],["gobison.com",196],["goblueraiders.com",196],["gobobcats.com",196],["gocards.com",196],["gocreighton.com",196],["godeacs.com",196],["goexplorers.com",196],["goetbutigers.com",196],["gofrogs.com",196],["gogriffs.com",196],["gogriz.com",196],["golobos.com",196],["gomarquette.com",196],["gopack.com",196],["gophersports.com",196],["goprincetontigers.com",196],["gopsusports.com",196],["goracers.com",196],["goshockers.com",196],["goterriers.com",196],["gotigersgo.com",196],["gousfbulls.com",196],["govandals.com",196],["gowyo.com",196],["goxavier.com",196],["gozags.com",196],["gozips.com",196],["griffinathletics.com",196],["guhoyas.com",196],["gwusports.com",196],["hailstate.com",196],["hamptonpirates.com",196],["hawaiiathletics.com",196],["hokiesports.com",196],["huskers.com",196],["icgaels.com",196],["iuhoosiers.com",196],["jsugamecocksports.com",196],["longbeachstate.com",196],["loyolaramblers.com",196],["lrtrojans.com",196],["lsusports.net",196],["morrisvillemustangs.com",196],["msuspartans.com",196],["muleriderathletics.com",196],["mutigers.com",196],["navysports.com",196],["nevadawolfpack.com",196],["niuhuskies.com",196],["nkunorse.com",196],["nuhuskies.com",196],["nusports.com",196],["okstate.com",196],["olemisssports.com",196],["omavs.com",196],["ovcsports.com",196],["owlsports.com",196],["purduesports.com",196],["redstormsports.com",196],["richmondspiders.com",196],["sfajacks.com",196],["shupirates.com",196],["siusalukis.com",196],["smcgaels.com",196],["smumustangs.com",196],["soconsports.com",196],["soonersports.com",196],["themw.com",196],["tulsahurricane.com",196],["txst.com",196],["txstatebobcats.com",196],["ubbulls.com",196],["ucfknights.com",196],["ucirvinesports.com",196],["uconnhuskies.com",196],["uhcougars.com",196],["uicflames.com",196],["umterps.com",196],["uncwsports.com",196],["unipanthers.com",196],["unlvrebels.com",196],["uoflsports.com",196],["usdtoreros.com",196],["utahstateaggies.com",196],["utepathletics.com",196],["utrockets.com",196],["uvmathletics.com",196],["uwbadgers.com",196],["villanova.com",196],["wkusports.com",196],["wmubroncos.com",196],["woffordterriers.com",196],["1pack1goal.com",196],["bcuathletics.com",196],["bubraves.com",196],["goblackbears.com",196],["golightsgo.com",196],["gomcpanthers.com",196],["goutsa.com",196],["mercerbears.com",196],["pirateblue.com",196],["pirateblue.net",196],["pirateblue.org",196],["quinnipiacbobcats.com",196],["towsontigers.com",196],["tribeathletics.com",196],["tribeclub.com",196],["utepminermaniacs.com",196],["utepminers.com",196],["wkutickets.com",196],["aopathletics.org",196],["atlantichockeyonline.com",196],["bigsouthnetwork.com",196],["bigsouthsports.com",196],["chawomenshockey.com",196],["dbupatriots.org",196],["drakerelays.org",196],["ecac.org",196],["ecacsports.com",196],["emueagles.com",196],["emugameday.com",196],["gculopes.com",196],["godrakebulldog.com",196],["godrakebulldogs.com",196],["godrakebulldogs.net",196],["goeags.com",196],["goislander.com",196],["goislanders.com",196],["gojacks.com",196],["gomacsports.com",196],["gseagles.com",196],["hubison.com",196],["iowaconference.com",196],["ksuowls.com",196],["lonestarconference.org",196],["mascac.org",196],["midwestconference.org",196],["mountaineast.org",196],["niu-pack.com",196],["nulakers.ca",196],["oswegolakers.com",196],["ovcdigitalnetwork.com",196],["pacersports.com",196],["rmacsports.org",196],["rollrivers.com",196],["samfordsports.com",196],["uncpbraves.com",196],["usfdons.com",196],["wiacsports.com",196],["alaskananooks.com",196],["broncathleticfund.com",196],["cameronaggies.com",196],["columbiacougars.com",196],["etownbluejays.com",196],["gobadgers.ca",196],["golancers.ca",196],["gometrostate.com",196],["gothunderbirds.ca",196],["kentstatesports.com",196],["lehighsports.com",196],["lopers.com",196],["lycoathletics.com",196],["lycomingathletics.com",196],["maraudersports.com",196],["mauiinvitational.com",196],["msumavericks.com",196],["nauathletics.com",196],["nueagles.com",196],["nwusports.com",196],["oceanbreezenyc.org",196],["patriotathleticfund.com",196],["pittband.com",196],["principiaathletics.com",196],["roadrunnersathletics.com",196],["sidearmsocial.com",196],["snhupenmen.com",196],["stablerarena.com",196],["stoutbluedevils.com",196],["uwlathletics.com",196],["yumacs.com",196],["collegefootballplayoff.com",196],["csurams.com",196],["cubuffs.com",196],["gobearcats.com",196],["gohuskies.com",196],["mgoblue.com",196],["osubeavers.com",196],["pittsburghpanthers.com",196],["rolltide.com",196],["texassports.com",196],["thesundevils.com",196],["uclabruins.com",196],["wvuathletics.com",196],["wvusports.com",196],["arizonawildcats.com",196],["calbears.com",196],["cuse.com",196],["georgiadogs.com",196],["goducks.com",196],["goheels.com",196],["gostanford.com",196],["insidekstatesports.com",196],["insidekstatesports.info",196],["insidekstatesports.net",196],["insidekstatesports.org",196],["k-stateathletics.com",196],["k-statefootball.net",196],["k-statefootball.org",196],["k-statesports.com",196],["k-statesports.net",196],["k-statesports.org",196],["k-statewomenshoops.com",196],["k-statewomenshoops.net",196],["k-statewomenshoops.org",196],["kstateathletics.com",196],["kstatefootball.net",196],["kstatefootball.org",196],["kstatesports.com",196],["kstatewomenshoops.com",196],["kstatewomenshoops.net",196],["kstatewomenshoops.org",196],["ksuathletics.com",196],["ksusports.com",196],["scarletknights.com",196],["showdownforrelief.com",196],["syracusecrunch.com",196],["texastech.com",196],["theacc.com",196],["ukathletics.com",196],["usctrojans.com",196],["utahutes.com",196],["utsports.com",196],["wsucougars.com",196],["vidlii.com",[196,220]],["tricksplit.io",196],["fangraphs.com",197],["4players.de",[198,287]],["buffed.de",198],["gamesaktuell.de",198],["gamezone.de",198],["pcgames.de",198],["videogameszone.de",198],["tvspielfilm.de",[199,200,201,202]],["tvtoday.de",[199,200,201,202]],["chip.de",[199,200,201,202]],["focus.de",[199,200,201,202]],["planetaminecraft.com",203],["cravesandflames.com",204],["codesnse.com",204],["link.paid4file.com",204],["flyad.vip",204],["lapresse.ca",205],["kolyoom.com",206],["ilovephd.com",206],["negumo.com",207],["games.wkb.jp",[208,209]],["fandom.com",[210,591,592]],["kenshi.fandom.com",211],["hausbau-forum.de",212],["homeairquality.org",212],["faucettronn.click",212],["fake-it.ws",213],["laksa19.github.io",214],["1shortlink.com",215],["nesia.my.id",216],["u-s-news.com",217],["luscious.net",218],["makemoneywithurl.com",219],["junkyponk.com",219],["healthfirstweb.com",219],["vocalley.com",219],["yogablogfit.com",219],["howifx.com",[219,399]],["en.financerites.com",219],["mythvista.com",219],["livenewsflix.com",219],["cureclues.com",219],["apekite.com",219],["host-buzz.com",219],["insmyst.com",219],["wp2host.com",219],["blogtechh.com",219],["techbixby.com",219],["blogmyst.com",219],["iammagnus.com",220],["dailyvideoreports.net",220],["unityassets4free.com",220],["resetoff.pl",221],["sexodi.com",221],["cdn77.org",222],["howtofixwindows.com",223],["3sexporn.com",224],["momxxxsex.com",224],["myfreevintageporn.com",224],["penisbuyutucum.net",224],["ujszo.com",225],["newsmax.com",226],["bobs-tube.com",227],["nadidetarifler.com",228],["siz.tv",228],["suzylu.co.uk",[229,230]],["onworks.net",231],["yabiladi.com",231],["downloadsoft.net",232],["pixsera.net",233],["testlanguages.com",234],["newsinlevels.com",234],["videosinlevels.com",234],["starkroboticsfrc.com",235],["sinonimos.de",235],["antonimos.de",235],["quesignifi.ca",235],["tiktokrealtime.com",235],["tiktokcounter.net",235],["tpayr.xyz",235],["poqzn.xyz",235],["ashrfd.xyz",235],["rezsx.xyz",235],["tryzt.xyz",235],["ashrff.xyz",235],["rezst.xyz",235],["dawenet.com",235],["erzar.xyz",235],["waezm.xyz",235],["waezg.xyz",235],["blackwoodacademy.org",235],["cryptednews.space",235],["vivuq.com",235],["swgop.com",235],["vbnmll.com",235],["telcoinfo.online",235],["dshytb.com",235],["fitdynamos.com",[235,237]],["btcbitco.in",[235,239]],["btcsatoshi.net",235],["cempakajaya.com",235],["crypto4yu.com",235],["readbitcoin.org",235],["wiour.com",235],["finish.addurl.biz",235],["aiimgvlog.fun",[235,242]],["laweducationinfo.com",235],["savemoneyinfo.com",235],["worldaffairinfo.com",235],["godstoryinfo.com",235],["successstoryinfo.com",235],["cxissuegk.com",235],["learnmarketinfo.com",235],["bhugolinfo.com",235],["armypowerinfo.com",235],["rsadnetworkinfo.com",235],["rsinsuranceinfo.com",235],["rsfinanceinfo.com",235],["rsgamer.app",235],["rssoftwareinfo.com",235],["rshostinginfo.com",235],["rseducationinfo.com",235],["phonereviewinfo.com",235],["makeincomeinfo.com",235],["gknutshell.com",235],["vichitrainfo.com",235],["workproductivityinfo.com",235],["dopomininfo.com",235],["hostingdetailer.com",235],["fitnesssguide.com",235],["tradingfact4u.com",235],["cryptofactss.com",235],["softwaredetail.com",235],["artoffocas.com",235],["insurancesfact.com",235],["travellingdetail.com",235],["advertisingexcel.com",235],["allcryptoz.net",235],["batmanfactor.com",235],["beautifulfashionnailart.com",235],["crewbase.net",235],["documentaryplanet.xyz",235],["crewus.net",235],["gametechreviewer.com",235],["midebalonu.net",235],["misterio.ro",235],["phineypet.com",235],["seory.xyz",235],["shinbhu.net",235],["shinchu.net",235],["substitutefor.com",235],["talkforfitness.com",235],["thefitbrit.co.uk",235],["thumb8.net",235],["thumb9.net",235],["topcryptoz.net",235],["uniqueten.net",235],["ultraten.net",235],["exactpay.online",235],["quins.us",235],["kiddyearner.com",235],["luckydice.net",236],["adarima.org",236],["tieutietkiem.com",236],["weatherwx.com",236],["sattaguess.com",236],["winshell.de",236],["rosasidan.ws",236],["modmakers.xyz",236],["gamepure.in",236],["warrenrahul.in",236],["austiblox.net",236],["upiapi.in",236],["myownguess.in",236],["networkhint.com",236],["thichcode.net",236],["texturecan.com",236],["tikmate.app",[236,478]],["4funbox.com",238],["nephobox.com",238],["1024tera.com",238],["blog.cryptowidgets.net",239],["blog.insurancegold.in",239],["blog.wiki-topia.com",239],["blog.coinsvalue.net",239],["blog.cookinguide.net",239],["blog.freeoseocheck.com",239],["blog24.me",239],["bildirim.link",241],["arahdrive.com",242],["appsbull.com",243],["diudemy.com",243],["maqal360.com",[243,244,245]],["lifesurance.info",246],["akcartoons.in",247],["cybercityhelp.in",247],["infokeeda.xyz",249],["webzeni.com",249],["dl.apkmoddone.com",250],["phongroblox.com",250],["apkmodvn.com",251],["streamelements.com",253],["share.hntv.tv",[253,660,661,662]],["forum.dji.com",[253,662]],["unionpayintl.com",[253,661]],["arcai.com",254],["my-code4you.blogspot.com",255],["flickr.com",256],["firefile.cc",257],["pestleanalysis.com",257],["kochamjp.pl",257],["tutorialforlinux.com",257],["whatsaero.com",257],["animeblkom.net",[257,273]],["blkom.com",257],["globes.co.il",[258,259]],["jardiner-malin.fr",260],["tw-calc.net",261],["ohmybrush.com",262],["talkceltic.net",263],["mentalfloss.com",264],["uprafa.com",265],["cube365.net",266],["nightfallnews.com",[267,268]],["wwwfotografgotlin.blogspot.com",269],["freelistenonline.com",269],["badassdownloader.com",270],["quickporn.net",271],["yellowbridge.com",272],["aosmark.com",274],["atozmath.com",[276,277,278,279,280,281,282]],["newyorker.com",283],["brighteon.com",284],["more.tv",285],["video1tube.com",286],["alohatube.xyz",286],["onlinesoccermanager.com",287],["fshost.me",288],["link.cgtips.org",289],["hentaicloud.com",290],["netfapx.com",292],["javdragon.org",292],["njav.tv",292],["paperzonevn.com",293],["hentaienglish.com",294],["hentaiporno.xxx",294],["venge.io",[295,296]],["btcbux.io",297],["its.porn",[298,299]],["atv.at",300],["2ndrun.tv",301],["rackusreads.com",301],["teachmemicro.com",301],["willcycle.com",301],["kusonime.com",[302,303]],["imgur.com",[305,306,552]],["hentai-party.com",307],["hentaicomics.pro",307],["xxx-comics.pro",307],["genshinimpactcalculator.com",310],["mysexgames.com",311],["embed.indavideo.hu",314],["xnxx.com",315],["gdr-online.com",316],["mmm.dk",317],["iqiyi.com",[318,319,470]],["m.iqiyi.com",320],["nbcolympics.com",321],["apkhex.com",322],["indiansexstories2.net",323],["issstories.xyz",323],["1340kbbr.com",324],["gorgeradio.com",324],["kduk.com",324],["kedoam.com",324],["kejoam.com",324],["kelaam.com",324],["khsn1230.com",324],["kjmx.rocks",324],["kloo.com",324],["klooam.com",324],["klykradio.com",324],["kmed.com",324],["kmnt.com",324],["kool991.com",324],["kpnw.com",324],["kppk983.com",324],["krktcountry.com",324],["ktee.com",324],["kwro.com",324],["kxbxfm.com",324],["thevalley.fm",324],["quizlet.com",325],["dsocker1234.blogspot.com",326],["schoolcheats.net",[327,328]],["mgnet.xyz",329],["japopav.tv",330],["lvturbo.com",330],["designtagebuch.de",331],["pixroute.com",332],["uploady.io",333],["calculator-online.net",334],["porngames.club",335],["sexgames.xxx",335],["111.90.159.132",336],["battleplan.news",336],["mobile-tracker-free.com",337],["pfps.gg",338],["ac-illust.com",[339,340]],["photo-ac.com",[339,340]],["social-unlock.com",341],["superpsx.com",342],["ninja.io",343],["sourceforge.net",344],["samfirms.com",345],["rapelust.com",346],["vtube.to",346],["vtplay.net",346],["desitelugusex.com",346],["xvideos-downloader.net",346],["xxxvideotube.net",346],["sdefx.cloud",346],["nozomi.la",346],["moviesonlinefree.net",346],["banned.video",347],["madmaxworld.tv",347],["androidpolice.com",347],["cbr.com",347],["collider.com",347],["dualshockers.com",347],["gamerant.com",347],["howtogeek.com",347],["makeuseof.com",347],["movieweb.com",347],["screenrant.com",347],["thegamer.com",347],["xda-developers.com",347],["huffpost.com",348],["ingles.com",349],["spanishdict.com",349],["surfline.com",[350,351]],["play.tv3.ee",352],["play.tv3.lt",352],["play.tv3.lv",352],["tv3play.skaties.lv",352],["trendyoum.com",353],["bulbagarden.net",354],["moviestars.to",355],["hollywoodlife.com",356],["mat6tube.com",357],["textstudio.co",358],["newtumbl.com",359],["aruble.net",361],["nevcoins.club",362],["mail.com",363],["oggi.it",[366,367]],["manoramamax.com",366],["video.gazzetta.it",[366,367]],["mangakita.id",368],["mangakita.net",368],["poscishd.online",369],["avpgalaxy.net",370],["mhma12.tech",371],["panda-novel.com",372],["zebranovel.com",372],["lightsnovel.com",372],["eaglesnovel.com",372],["pandasnovel.com",372],["zadfaucet.com",373],["ewrc-results.com",374],["kizi.com",375],["cyberscoop.com",376],["fedscoop.com",376],["canale.live",377],["indiatimes.com",378],["netzwelt.de",379],["mafiatown.pl",[380,381]],["jeep-cj.com",382],["sponsorhunter.com",383],["cloudcomputingtopics.net",384],["likecs.com",385],["tiscali.it",386],["linkspy.cc",387],["adshnk.com",388],["chattanoogan.com",389],["adsy.pw",390],["playstore.pw",390],["socialmediagirls.com",391],["windowspro.de",392],["snapinsta.app",393],["jiocinema.com",394],["rapid-cloud.co",394],["uploadmall.com",394],["tvtv.ca",395],["tvtv.us",395],["ipalibrary.me",396],["mydaddy.cc",397],["roadtrippin.fr",398],["vavada5com.com",399],["redketchup.io",400],["anyporn.com",[401,417]],["bravoporn.com",401],["bravoteens.com",401],["crocotube.com",401],["hellmoms.com",401],["hellporno.com",401],["sex3.com",401],["tubewolf.com",401],["xbabe.com",401],["xcum.com",401],["zedporn.com",401],["imagetotext.info",402],["infokik.com",403],["freepik.com",404],["ddwloclawek.pl",[405,406]],["deezer.com",407],["my-subs.co",408],["plaion.com",409],["slideshare.net",[410,411]],["ustreasuryyieldcurve.com",412],["businesssoftwarehere.com",413],["goo.st",413],["freevpshere.com",413],["softwaresolutionshere.com",413],["madoohd.com",416],["staige.tv",418],["in-jpn.com",419],["oninet.ne.jp",419],["xth.jp",419],["androidadult.com",420],["streamvid.net",421],["watchtv24.com",422],["cellmapper.net",423],["medscape.com",424],["newscon.org",[425,426]],["arkadium.com",427],["wheelofgold.com",428],["bembed.net",429],["elbailedeltroleo.site",429],["embedv.net",429],["fslinks.org",429],["listeamed.net",429],["v6embed.xyz",429],["vgplayer.xyz",429],["vid-guard.com",429],["vidguard.online",429],["app.blubank.com",430],["mobileweb.bankmellat.ir",430],["sportdeutschland.tv",431],["kcra.com",431],["wcvb.com",431],["chat.nrj.fr",432],["chat.tchatche.com",[432,448]],["ccthesims.com",439],["chromeready.com",439],["coursedrive.org",439],["dtbps3games.com",439],["illustratemagazine.com",439],["uknip.co.uk",439],["vod.pl",440],["megadrive-emulator.com",441],["animesaga.in",444],["moviesapi.club",444],["bestx.stream",444],["watchx.top",444],["digimanie.cz",445],["svethardware.cz",445],["srvy.ninja",446],["drawer-opportunity-i-243.site",447],["cnn.com",[449,450,451]],["edmdls.com",452],["freshremix.net",452],["scenedl.org",452],["trakt.tv",453],["client.falixnodes.net",454],["shroomers.app",455],["classicalradio.com",456],["di.fm",456],["jazzradio.com",456],["radiotunes.com",456],["rockradio.com",456],["zenradio.com",456],["pc-builds.com",457],["qtoptens.com",457],["reuters.com",457],["today.com",457],["videogamer.com",457],["wrestlinginc.com",457],["gbatemp.net",457],["usatoday.com",[458,694]],["ydr.com",458],["getthit.com",459],["techedubyte.com",460],["soccerinhd.com",460],["movie-th.tv",461],["iwanttfc.com",462],["nutraingredients-asia.com",463],["nutraingredients-latam.com",463],["nutraingredients-usa.com",463],["nutraingredients.com",463],["mavenarts.in",464],["ozulscansen.com",465],["nexusmods.com",466],["fitnessbr.click",467],["minhareceita.xyz",467],["doomied.monster",468],["lookmovie2.to",468],["royalroad.com",469],["biletomat.pl",471],["hextank.io",[472,473]],["filmizlehdfilm.com",[474,475,476,477]],["fullfilmizle.cc",[474,475,476,477]],["gofilmizle.net",[474,475,476,477]],["btvplus.bg",479],["sagewater.com",480],["redlion.net",480],["satdl.com",481],["vidstreaming.xyz",482],["everand.com",483],["myradioonline.pl",484],["cbs.com",485],["paramountplus.com",485],["abysscdn.com",[486,487]],["buktube.com",488],["fullxh.com",488],["galleryxh.site",488],["megaxh.com",488],["movingxh.world",488],["seexh.com",488],["unlockxh4.com",488],["valuexh.life",488],["xhaccess.com",488],["xhadult2.com",488],["xhadult3.com",488],["xhadult4.com",488],["xhadult5.com",488],["xhamster46.com",488],["xhamsterporno.mx",488],["xhbig.com",488],["xhbranch5.com",488],["xhchannel.com",488],["xhchannel2.com",488],["xhdate.world",488],["xhday.com",488],["xhday1.com",488],["xhlease.world",488],["xhmoon5.com",488],["xhofficial.com",488],["xhopen.com",488],["xhplanet1.com",488],["xhplanet2.com",488],["xhreal2.com",488],["xhreal3.com",488],["xhspot.com",488],["xhtab2.com",488],["xhtab4.com",488],["xhtotal.com",488],["xhtree.com",488],["xhvictory.com",488],["xhwebsite.com",488],["xhwebsite2.com",488],["xhwebsite5.com",488],["xhwide1.com",488],["xhwide2.com",488],["xhwide5.com",488],["xhxh3.xyz",488],["lightnovelworld.com",489],["megadescarga.net",[490,491,492,493]],["megadescargas.net",[490,491,492,493]],["hentaihaven.xxx",494],["jacquieetmicheltv2.net",496],["fcportables.com",[498,499]],["emurom.net",500],["freethesaurus.com",[501,502]],["thefreedictionary.com",[501,502]],["oeffentlicher-dienst.info",503],["dcdlplayer8a06f4.xyz",504],["ultimate-guitar.com",505],["xyzsports111.xyz",[506,507,508]],["xyzsports112.xyz",[506,507,508]],["xyzsports113.xyz",[506,507,508]],["xyzsports114.xyz",[506,507,508]],["xyzsprtsfrmr1.site",[506,507,508]],["xyzsprtsfrmr2.site",[506,507,508]],["claimbits.net",509],["sexyscope.net",510],["recherche-ebook.fr",512],["zonebourse.com",513],["pink-sluts.net",514],["andhrafriends.com",515],["benzinpreis.de",516],["turtleviplay.xyz",517],["defenseone.com",518],["govexec.com",518],["nextgov.com",518],["route-fifty.com",518],["sharing.wtf",519],["wetter3.de",520],["esportivos.fun",521],["cosmonova-broadcast.tv",522],["hartvannederland.nl",523],["shownieuws.nl",523],["vandaaginside.nl",523],["rock.porn",[524,525]],["videzz.net",[526,527]],["ezaudiobookforsoul.com",528],["club386.com",529],["littlebigsnake.com",530],["easyfun.gg",531],["smailpro.com",532],["ilgazzettino.it",533],["ilmessaggero.it",533],["3bmeteo.com",[534,535]],["mconverter.eu",536],["lover937.net",537],["10gb.vn",538],["pes6.es",539],["tactics.tools",[540,541]],["boundhub.com",542],["alocdnnetu.xyz",543],["reliabletv.me",544],["jakondo.ru",545],["titulky.com",546],["tacobell.com",548],["zefoy.com",549],["cnet.com",550],["natgeotv.com",553],["spankbang.com",[554,555]],["globo.com",556],["wayfair.com",557],["br.de",558],["indeed.com",559],["pasteboard.co",560],["clickhole.com",561],["deadspin.com",561],["gizmodo.com",561],["jalopnik.com",561],["jezebel.com",561],["kotaku.com",561],["lifehacker.com",561],["splinternews.com",561],["theinventory.com",561],["theonion.com",561],["theroot.com",561],["thetakeout.com",561],["pewresearch.org",561],["los40.com",[562,563]],["as.com",563],["telegraph.co.uk",[564,565]],["poweredbycovermore.com",[564,614]],["lumens.com",[564,614]],["verizon.com",566],["humanbenchmark.com",567],["politico.com",568],["officedepot.co.cr",[569,570]],["usnews.com",573],["factable.com",575],["zee5.com",576],["gala.fr",577],["geo.fr",577],["voici.fr",577],["gloucestershirelive.co.uk",578],["arsiv.mackolik.com",579],["jacksonguitars.com",580],["scandichotels.com",581],["stylist.co.uk",582],["nettiauto.com",583],["thaiairways.com",[584,585]],["cerbahealthcare.it",[586,587]],["futura-sciences.com",[586,603]],["toureiffel.paris",586],["tiendaenlinea.claro.com.ni",[588,589]],["tieba.baidu.com",590],["grasshopper.com",[593,594]],["epson.com.cn",[595,596,597,598]],["oe24.at",[599,600]],["szbz.de",599],["platform.autods.com",[601,602]],["wikihow.com",604],["citibank.com.sg",605],["uol.com.br",[606,607,608,609,610]],["gazzetta.gr",611],["digicol.dpm.org.cn",[612,613]],["virginmediatelevision.ie",615],["larazon.es",[616,617]],["waitrosecellar.com",[618,619,620]],["sharpen-free-design-generator.netlify.app",[622,623]],["help.cashctrl.com",[624,625]],["gry-online.pl",626],["vidaextra.com",627],["commande.rhinov.pro",[628,629]],["ecom.wixapps.net",[628,629]],["tipranks.com",[630,631]],["iceland.co.uk",[632,633,634]],["socket.pearsoned.com",635],["tntdrama.com",[636,637]],["trutv.com",[636,637]],["mobile.de",[638,639]],["ioe.vn",[640,641]],["geiriadur.ac.uk",[640,644]],["welsh-dictionary.ac.uk",[640,644]],["bikeportland.org",[642,643]],["biologianet.com",[607,608,609]],["10play.com.au",[645,646]],["sunshine-live.de",[647,648]],["whatismyip.com",[649,650]],["myfitnesspal.com",651],["netoff.co.jp",[652,653]],["clickjogos.com.br",656],["bristan.com",[657,658]],["zillow.com",659],["optimum.net",[663,664]],["investor-web.hdfcfund.com",665],["user.guancha.cn",[666,667]],["sosovalue.com",668],["bandyforbundet.no",[669,670]],["tatacommunications.com",671],["suamusica.com.br",[672,673,674]],["macrotrends.net",[675,676]],["code.world",677],["smartcharts.net",677],["topgear.com",678],["eservice.directauto.com",[679,680]],["nbcsports.com",681],["standard.co.uk",682],["pruefernavi.de",[683,684]],["speedtest.net",[685,686]],["17track.net",687],["visible.com",[688,692,693]],["hagerty.com",[689,690]],["poophq.com",691],["veev.to",691],["livewithkellyandmark.com",[692,693]],["porsche.com",[692,693]],["uber.com",[692,693]],["jdsports.com",[692,693]],["engadget.com",[692,693]],["yahoo.com",[692,693]],["techcrunch.com",[692,693]],["rivals.com",[692,693]],["kkrt.com",[692,693]],["crunchyroll.com",[692,693]],["dnb.com",[692,693]],["dnb.co.uk",[692,693]],["weather.com",[692,693]],["ubereats.com",[692,693]]]);

const entitiesMap = new Map([["starmusiq",10],["wcofun",10],["kissasian",12],["gogoanime",[12,49]],["1movies",[12,15]],["xmovies8",12],["0123movies",12],["gostream",12],["gomovies",12],["primewire",13],["streanplay",[13,14]],["sbplay",13],["milfnut",13],["sxyprn",19],["hqq",[20,21]],["waaw",[21,22]],["younetu",21],["vvtplayer",21],["123link",23],["adshort",23],["linkshorts",23],["adsrt",23],["vinaurl",23],["adfloz",23],["dutchycorp",23],["shortearn",23],["pingit",23],["shrink",23],["tmearn",23],["megalink",23],["miniurl",23],["gplinks",23],["clk",23],["pureshort",23],["shrinke",23],["shrinkme",23],["link1s",23],["shortzzy",23],["shorttey",[23,190]],["lite-link",23],["adcorto",23],["zshort",23],["upfiles",23],["linkfly",23],["wplink",23],["seulink",23],["encurtalink",23],["camwhores",[24,36,78,79,80]],["tube8",[25,26]],["youporn",26],["redtube",26],["pornhub",[26,177]],["upornia",[28,29]],["watch-series",35],["watchseries",35],["vev",35],["vidop",35],["vidup",35],["fmovies",49],["streamwish",[53,54]],["xtits",[57,112]],["pouvideo",59],["povvideo",59],["povw1deo",59],["povwideo",59],["powv1deo",59],["powvibeo",59],["powvideo",59],["powvldeo",59],["plyjam",[64,65]],["fxporn69",70],["vipbox",71],["viprow",71],["desbloqueador",75],["xberuang",76],["teknorizen",76],["subtorrents",83],["subtorrents1",83],["newpelis",83],["pelix",83],["allcalidad",83],["infomaniakos",83],["filecrypt",88],["tornadomovies",93],["icdrama",99],["mangasail",99],["file4go",101],["mangovideo",113],["asianclub",121],["anitube",124],["streamingcommunity",124],["mixdrop",126],["uploadev",150],["ver-pelis-online",158],["ancient-origins",166],["spankbang",183],["lookcam",190],["lootlinks",190],["dpstream",193],["bluemediafiles",195],["docer",221],["terabox",238],["ctrlv",275],["123movieshd",304],["uproxy",308],["animesa",309],["cinecalidad",[312,313]],["xvideos",315],["dvdplay",346],["apkmaven",360],["gmx",364],["gamereactor",415],["doomovie-hd",416],["drakecomic",428],["vembed",429],["empire-anime",[433,434,435,436,437]],["empire-stream",[433,434,435]],["empire-streaming",[433,434,435]],["empire-streamz",[433,434,435]],["tvhay",[442,443]],["lookmovie",468],["filmizletv",[474,475,476,477]],["hamsterix",488],["xhamster",488],["xhamster1",488],["xhamster10",488],["xhamster11",488],["xhamster12",488],["xhamster13",488],["xhamster14",488],["xhamster15",488],["xhamster16",488],["xhamster17",488],["xhamster18",488],["xhamster19",488],["xhamster20",488],["xhamster2",488],["xhamster3",488],["xhamster4",488],["xhamster42",488],["xhamster5",488],["xhamster7",488],["xhamster8",488],["acortalo",[490,491,492,493]],["acortar",[490,491,492,493]],["a2zapk",497],["kickassanime",511],["www.google",547],["officedepot",[571,572]],["foundit",[654,655]],["ticketmaster",[692,693]]]);

const exceptionsMap = new Map([["pingit.com",[23]],["pingit.me",[23]],["lookmovie.studio",[468]]]);

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

uBOL_setConstant();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
