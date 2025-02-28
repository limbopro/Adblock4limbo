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
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["console.clear","trueFunc"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["String.prototype.charCodeAt","trueFunc"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["PlayerConfig.config.CustomAdSetting","[]"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["uas","[]"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["foundation.adPlayer.bitmovin","{}"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["Object.prototype.adReinsertion","noopFunc"],["getHomadConfig","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["Object.prototype.adblock_detected","false"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["navigator.webkitTemporaryStorage.queryUsageAndQuota","noopFunc"],["document.onkeydown","noopFunc"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["sensorsDataAnalytic201505","{}"],["detectedAdblock","undefined"],["isTabActive","true"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["showada","true"],["showax","true"],["p18","undefined"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["xv.sda.pp.init","noopFunc"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["D4zz","noopFunc"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["navigator.brave","undefined"],["paAddUnit","noopFunc"],["showBlackout","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["sssp","emptyObj"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["adSettings","[]"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["gnt.u.adfree","true"],["sharedController.adblockDetector","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["playerEnhancedConfig.run","throwFunc"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["advertisement3","true"],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["one_time","1"],["consentGiven","true"],["playID","1"],["openPopunder","noopFunc"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["ADS.isBannersEnabled","false"],["EASYFUN_ADS_CAN_RUN","true"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["isAdblock","false"],["openPop","noopFunc"],["attachEvent","trueFunc"],["cns.library","true"],["countDown","0"],["runCheck","noopFunc"],["adsSlotRenderEndSeen","true"],["showModal","noopFunc"],["flashvars.mlogo_link",""],["isAdBlocked","noopFunc"],["URLlist","[]"],["aaw","{}"],["aaw.processAdsOnPage","noopFunc"],["doOpen","undefined"],["HTMLImageElement.prototype.onerror","undefined"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["Object.prototype.que","noopFunc"],["Object.prototype.que.push","noopFunc"],["ga.sendGaEvent","noopFunc"],["adobe","{}"],["MT","{}"],["MT.track","noopFunc"],["adex","{}"],["adex.getAdexUser","noopFunc"],["Adkit","noopFunc"],["fapit.check","noopFunc"],["adBlockDetected","undefined"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,628]],["t-online.de",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["motherless.com",8],["sueddeutsche.de",9],["watchanimesub.net",10],["wco.tv",10],["wcoanimesub.tv",10],["wcoforever.net",10],["freeviewmovies.com",10],["filehorse.com",10],["guidetnt.com",10],["sp-today.com",10],["linkvertise.com",10],["eropaste.net",10],["getpaste.link",10],["sharetext.me",10],["note.sieuthuthuat.com",10],["elcriticodelatele.com",[10,301]],["gadgets.es",[10,301]],["amateurporn.co",[10,108]],["wiwo.de",11],["masteranime.tv",12],["alphaporno.com",[13,396]],["porngem.com",13],["shortit.pw",[13,92]],["familyporn.tv",13],["id45.cyou",13],["85tube.com",[13,76]],["k1nk.co",13],["watchasians.cc",13],["soltoshindo.com",13],["sankakucomplex.com",15],["player.glomex.com",16],["merkur.de",16],["tz.de",16],["hotpornfile.org",19],["player.tabooporns.com",19],["x69.ovh",19],["wiztube.xyz",19],["multiup.us",19],["rpdrlatino.live",19],["peliculas8k.com",[19,20]],["video.q34r.org",19],["czxxx.org",19],["vtplayer.online",19],["netu.ac",19],["netu.frembed.lol",19],["dirtyvideo.fun",20],["adbull.org",21],["mitly.us",21],["linkrex.net",21],["linx.cc",21],["oke.io",21],["dz4link.com",21],["linclik.com",21],["shrt10.com",21],["loptelink.com",21],["cut-fly.com",21],["linkfinal.com",21],["payskip.org",21],["cutpaid.com",21],["forexmab.com",21],["linkjust.com",21],["linkszia.co",21],["leechpremium.link",21],["icutlink.com",[21,113]],["oncehelp.com",21],["rgl.vn",21],["reqlinks.net",21],["bitlk.com",21],["qlinks.eu",21],["link.3dmili.com",21],["short-fly.com",21],["foxseotools.com",21],["pngit.live",21],["link.turkdown.com",21],["urlty.com",21],["7r6.com",21],["oko.sh",21],["ckk.ai",21],["fc.lc",21],["fstore.biz",21],["cuts-url.com",21],["eio.io",21],["exe.app",21],["exee.io",21],["exey.io",21],["skincarie.com",21],["exeo.app",21],["coinlyhub.com",[21,187]],["adsafelink.com",21],["aii.sh",21],["cybertechng.com",[21,202]],["cutdl.xyz",21],["iir.ai",21],["shorteet.com",[21,222]],["smoner.com",21],["gyanlight.com",21],["xpshort.com",21],["upshrink.com",21],["enit.in",[21,217]],["ez4short.com",21],["easysky.in",21],["veganab.co",21],["adrinolinks.in",21],["go.bloggingaro.com",21],["go.gyanitheme.com",21],["go.theforyou.in",21],["go.hipsonyc.com",21],["birdurls.com",21],["vipurl.in",21],["try2link.com",21],["jameeltips.us",21],["gainl.ink",21],["promo-visits.site",21],["satoshi-win.xyz",[21,238]],["shorterall.com",21],["encurtandourl.com",21],["forextrader.site",21],["postazap.com",21],["cety.app",21],["exego.app",[21,233]],["cutlink.net",21],["cutsy.net",21],["cutyurls.com",21],["cutty.app",21],["cutnet.net",21],["jixo.online",21],["tinys.click",[21,202]],["cpm.icu",21],["panyshort.link",21],["enagato.com",21],["pandaznetwork.com",21],["tvi.la",21],["iir.la",21],["tii.la",21],["oei.la",21],["lnbz.la",[21,217]],["oii.la",[21,246]],["tpi.li",[21,246]],["recipestutorials.com",21],["shrinkforearn.in",21],["techyuth.xyz",21],["oii.io",21],["du-link.in",21],["atglinks.com",21],["thotpacks.xyz",21],["megaurl.in",21],["megafly.in",21],["simana.online",21],["fooak.com",21],["joktop.com",21],["evernia.site",21],["falpus.com",21],["link.paid4link.com",[21,250]],["exalink.fun",21],["indiamaja.com",21],["newshuta.in",21],["shortxlinks.com",21],["upfiles.app",21],["upfiles-urls.com",21],["flycutlink.com",[21,202]],["linksly.co",21],["pkr.pw",21],["imagenesderopaparaperros.com",21],["shortenbuddy.com",21],["apksvip.com",21],["4cash.me",21],["namaidani.com",21],["teknomuda.com",21],["miuiku.com",21],["savelink.site",21],["samaa-pro.com",21],["miklpro.com",21],["modapk.link",21],["ccurl.net",21],["linkpoi.me",21],["menjelajahi.com",21],["pewgame.com",21],["haonguyen.top",21],["crazyblog.in",21],["gtlink.co",21],["cutearn.net",21],["rshrt.com",21],["filezipa.com",21],["dz-linkk.com",21],["theblissempire.com",21],["finanzas-vida.com",21],["adurly.cc",21],["paid4.link",21],["link.asiaon.top",21],["go.gets4link.com",21],["download.sharenulled.net",21],["beingtek.com",21],["shorturl.unityassets4free.com",21],["disheye.com",21],["techymedies.com",21],["techysuccess.com",21],["za.gl",[21,131]],["bblink.com",21],["myad.biz",21],["swzz.xyz",21],["vevioz.com",21],["charexempire.com",21],["clk.asia",21],["linka.click",21],["sturls.com",21],["myshrinker.com",21],["snowurl.com",[21,202]],["netfile.cc",21],["rocklink.in",21],["techgeek.digital",21],["download3s.net",21],["shortx.net",21],["shortawy.com",21],["tlin.me",21],["apprepack.com",21],["up-load.one",21],["zuba.link",21],["golink.xaydungplus.com",21],["bestcash2020.com",21],["hoxiin.com",21],["go.linkbnao.com",21],["link-yz.com",21],["paylinnk.com",21],["thizissam.in",21],["ier.ai",21],["adslink.pw",21],["novelssites.com",21],["links.medipost.org",21],["faucetcrypto.net",21],["short.freeltc.top",21],["trxking.xyz",21],["weadown.com",21],["m.bloggingguidance.com",21],["blog.onroid.com",21],["link.codevn.net",21],["upfilesurls.com",21],["shareus.site",21],["link4rev.site",21],["c2g.at",21],["bitcosite.com",[21,410]],["cryptosh.pro",21],["link68.net",21],["traffic123.net",21],["windowslite.net",[21,202]],["viewfr.com",21],["cl1ca.com",21],["4br.me",21],["fir3.net",21],["kiddyshort.com",21],["watchmygf.me",[22,48]],["camwhorez.tv",[22,34,75,76]],["cambay.tv",[22,56,75,105,107,108,109,110]],["fpo.xxx",[22,56]],["sexemix.com",22],["heavyfetish.com",[22,558]],["thotcity.su",22],["viralxxxporn.com",[22,225]],["you-porn.com",24],["youporngay.com",24],["youpornru.com",24],["9908ww.com",24],["adelaidepawnbroker.com",24],["bztube.com",24],["hotovs.com",24],["insuredhome.org",24],["nudegista.com",24],["pornluck.com",24],["vidd.se",24],["pornhub.com",24],["pornerbros.com",25],["freep.com",25],["porn.com",28],["tune.pk",29],["noticias.gospelmais.com.br",30],["techperiod.com",30],["viki.com",[31,32]],["sleazyneasy.com",[34,35,36]],["smutr.com",[34,183]],["yourporngod.com",[34,35]],["javbangers.com",[34,291]],["camfox.com",34],["camthots.tv",[34,105]],["shegotass.info",34],["amateur8.com",34],["bigtitslust.com",34],["ebony8.com",34],["freeporn8.com",34],["lesbian8.com",34],["maturetubehere.com",34],["sortporn.com",34],["webcamvau.com",34],["motherporno.com",[34,35,56,107]],["tktube.com",34],["theporngod.com",[34,35]],["watchdirty.to",[34,76,77,108]],["pornsocket.com",37],["luxuretv.com",38],["porndig.com",[39,40]],["webcheats.com.br",41],["ceesty.com",[42,43]],["gestyy.com",[42,43]],["corneey.com",43],["destyy.com",43],["festyy.com",43],["sh.st",43],["mitaku.net",43],["angrybirdsnest.com",44],["zrozz.com",44],["clix4btc.com",44],["4tests.com",44],["business-standard.com",44],["goltelevision.com",44],["news-und-nachrichten.de",44],["laradiobbs.net",44],["urlaubspartner.net",44],["produktion.de",44],["cinemaxxl.de",44],["bladesalvador.com",44],["tempr.email",44],["cshort.org",44],["friendproject.net",44],["covrhub.com",44],["katfile.com",44],["trust.zone",44],["planetsuzy.org",45],["empflix.com",46],["alleneconomicmatter.com",47],["apinchcaseation.com",47],["bethshouldercan.com",47],["bigclatterhomesguideservice.com",47],["bradleyviewdoctor.com",47],["brittneystandardwestern.com",47],["brookethoughi.com",47],["brucevotewithin.com",47],["cindyeyefinal.com",47],["denisegrowthwide.com",47],["donaldlineelse.com",47],["edwardarriveoften.com",47],["erikcoldperson.com",47],["evelynthankregion.com",47],["graceaddresscommunity.com",47],["heatherdiscussionwhen.com",47],["housecardsummerbutton.com",47],["jamessoundcost.com",47],["jamesstartstudent.com",47],["jamiesamewalk.com",47],["jasminetesttry.com",47],["jasonresponsemeasure.com",47],["jayservicestuff.com",47],["jessicaglassauthor.com",47],["johntryopen.com",47],["josephseveralconcern.com",47],["kennethofficialitem.com",47],["lisatrialidea.com",47],["lorimuchbenefit.com",47],["loriwithinfamily.com",47],["lukecomparetwo.com",47],["markstyleall.com",47],["michaelapplysome.com",47],["morganoperationface.com",47],["nectareousoverelate.com",47],["paulkitchendark.com",47],["rebeccaneverbase.com",47],["roberteachfinal.com",47],["robertordercharacter.com",47],["robertplacespace.com",47],["ryanagoinvolve.com",47],["sandratableother.com",47],["sandrataxeight.com",47],["seanshowcould.com",47],["sethniceletter.com",47],["shannonpersonalcost.com",47],["sharonwhiledemocratic.com",47],["stevenimaginelittle.com",47],["strawberriesporail.com",47],["susanhavekeep.com",47],["timberwoodanotia.com",47],["tinycat-voe-fashion.com",47],["toddpartneranimal.com",47],["troyyourlead.com",47],["uptodatefinishconference.com",47],["uptodatefinishconferenceroom.com",47],["vincentincludesuccessful.com",47],["voe.sx",47],["maxfinishseveral.com",47],["motphimtv.com",47],["rabbitstream.net",47],["projectfreetv.one",47],["freeplayervideo.com",47],["nazarickol.com",47],["player-cdn.com",47],["playhydrax.com",[47,480,481]],["transparentcalifornia.com",48],["deepbrid.com",49],["webnovel.com",50],["videosgay.me",[51,52]],["oneupload.to",52],["wishfast.top",52],["rubystm.com",52],["rubyvid.com",52],["schwaebische.de",54],["8tracks.com",55],["3movs.com",56],["bravoerotica.net",[56,107]],["youx.xxx",56],["camclips.tv",[56,183]],["camflow.tv",[56,107,108,152,225]],["camhoes.tv",[56,105,107,108,152,225]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,107]],["analdin.com",[56,107]],["revealname.com",57],["golfchannel.com",59],["telemundodeportes.com",59],["stream.nbcsports.com",59],["mathdf.com",59],["gamcore.com",60],["porcore.com",60],["69games.xxx",60],["javmix.app",60],["tecknity.com",61],["haaretz.co.il",62],["haaretz.com",62],["hungama.com",62],["a-o.ninja",62],["anime-odcinki.pl",62],["kumpulmanga.org",62],["shortgoo.blogspot.com",62],["tonanmedia.my.id",[62,433]],["yurasu.xyz",62],["isekaipalace.com",62],["ennovelas.com",[64,68]],["foxsports.com.au",65],["canberratimes.com.au",65],["thesimsresource.com",66],["ctrl.blog",69],["sportlife.es",70],["finofilipino.org",71],["mysflink.blogspot.com",73],["assia.tv",74],["assia4.com",74],["assia24.com",74],["cwtvembeds.com",[76,106]],["camlovers.tv",76],["porntn.com",76],["pornissimo.org",76],["sexcams-24.com",[76,108]],["watchporn.to",[76,108]],["camwhorez.video",76],["footstockings.com",[76,77,108]],["xmateur.com",[76,77,108]],["multi.xxx",77],["worldofbitco.in",[78,79]],["weatherx.co.in",[78,79]],["getyourbitco.in",78],["sunbtc.space",78],["ojogos.com.br",81],["powforums.com",82],["supforums.com",82],["studybullet.com",82],["usgamer.net",83],["recordonline.com",83],["freebitcoin.win",84],["e-monsite.com",84],["coindice.win",84],["temp-mails.com",85],["freiepresse.de",86],["investing.com",87],["mp3fiber.com",89],["chicoer.com",90],["dailybreeze.com",90],["dailybulletin.com",90],["dailynews.com",90],["delcotimes.com",90],["eastbaytimes.com",90],["macombdaily.com",90],["ocregister.com",90],["pasadenastarnews.com",90],["pe.com",90],["presstelegram.com",90],["redlandsdailyfacts.com",90],["reviewjournal.com",90],["santacruzsentinel.com",90],["saratogian.com",90],["sentinelandenterprise.com",90],["sgvtribune.com",90],["tampabay.com",90],["times-standard.com",90],["theoaklandpress.com",90],["trentonian.com",90],["twincities.com",90],["whittierdailynews.com",90],["bostonherald.com",90],["dailycamera.com",90],["sbsun.com",90],["dailydemocrat.com",90],["montereyherald.com",90],["orovillemr.com",90],["record-bee.com",90],["redbluffdailynews.com",90],["reporterherald.com",90],["thereporter.com",90],["timescall.com",90],["timesheraldonline.com",90],["ukiahdailyjournal.com",90],["dailylocal.com",90],["mercurynews.com",90],["suedkurier.de",91],["anysex.com",93],["vlist.se",94],["pornve.com",95],["coolrom.com.au",96],["pornohirsch.net",97],["marie-claire.es",98],["gamezhero.com",98],["flashgirlgames.com",98],["onlinesudoku.games",98],["mpg.football",98],["sssam.com",98],["globalnews.ca",99],["drinksmixer.com",100],["leitesculinaria.com",100],["fupa.net",101],["browardpalmbeach.com",102],["dallasobserver.com",102],["houstonpress.com",102],["miaminewtimes.com",102],["phoenixnewtimes.com",102],["westword.com",102],["nhentai.net",103],["nowtv.com.tr",104],["caminspector.net",105],["camwhoreshd.com",105],["camgoddess.tv",105],["gay4porn.com",107],["mypornhere.com",107],["love4porn.com",108],["thotvids.com",108],["watchmdh.to",108],["celebwhore.com",108],["cluset.com",108],["4kporn.xxx",108],["xhomealone.com",108],["lusttaboo.com",[108,364]],["hentai-moon.com",108],["sexwebvideo.com",108],["sexwebvideo.net",108],["camhub.cc",[108,540]],["mediapason.it",111],["linkspaid.com",111],["tuotromedico.com",111],["neoteo.com",111],["phoneswiki.com",111],["celebmix.com",111],["myneobuxportal.com",111],["oyungibi.com",111],["25yearslatersite.com",111],["jeshoots.com",112],["techhx.com",112],["karanapk.com",112],["flashplayer.fullstacks.net",114],["cloudapps.herokuapp.com",114],["youfiles.herokuapp.com",114],["texteditor.nsspot.net",114],["temp-mail.org",115],["javhdporn.net",116],["comnuan.com",117],["veedi.com",118],["battleboats.io",118],["fruitlab.com",119],["acetack.com",119],["androidquest.com",119],["apklox.com",119],["chhaprawap.in",119],["gujarativyakaran.com",119],["kashmirstudentsinformation.in",119],["kisantime.com",119],["shetkaritoday.in",119],["pastescript.com",119],["trimorspacks.com",119],["updrop.link",119],["haddoz.net",119],["garoetpos.com",119],["stiletv.it",120],["hqtv.biz",122],["liveuamap.com",123],["muvibg.com",123],["vinomo.xyz",124],["bembed.net",124],["embedv.net",124],["fslinks.org",124],["listeamed.net",124],["v6embed.xyz",124],["vgplayer.xyz",124],["vid-guard.com",124],["audycje.tokfm.pl",125],["hulu.com",[126,127,128]],["shush.se",129],["allkpop.com",130],["pickcrackpasswords.blogspot.com",132],["kfrfansub.com",133],["thuglink.com",133],["voipreview.org",133],["illicoporno.com",134],["lavoixdux.com",134],["tonpornodujour.com",134],["jacquieetmichel.net",134],["swame.com",134],["vosfemmes.com",134],["voyeurfrance.net",134],["jacquieetmicheltv.net",[134,490,491]],["hanime.tv",135],["pogo.com",136],["cloudvideo.tv",137],["legionjuegos.org",138],["legionpeliculas.org",138],["legionprogramas.org",138],["16honeys.com",139],["elespanol.com",140],["remodelista.com",141],["coolmathgames.com",[142,143,144,581]],["audiofanzine.com",145],["hitokin.net",147],["developerinsider.co",148],["ilprimatonazionale.it",149],["hotabis.com",149],["root-nation.com",149],["italpress.com",149],["airsoftmilsimnews.com",149],["artribune.com",149],["thehindu.com",150],["cambro.tv",[151,152]],["boobsradar.com",[152,225,547]],["nibelungen-kurier.de",153],["adfoc.us",155],["techyember.com",155],["remixbass.com",155],["techipop.com",155],["quickimageconverter.com",155],["mastharyana.com",155],["tea-coffee.net",155],["spatsify.com",155],["newedutopics.com",155],["getviralreach.in",155],["edukaroo.com",155],["funkeypagali.com",155],["careersides.com",155],["nayisahara.com",155],["wikifilmia.com",155],["infinityskull.com",155],["viewmyknowledge.com",155],["iisfvirtual.in",155],["starxinvestor.com",155],["jkssbalerts.com",155],["myprivatejobs.com",[155,234]],["wikitraveltips.com",[155,234]],["amritadrino.com",[155,234]],["sahlmarketing.net",155],["filmypoints.in",155],["fitnessholic.net",155],["moderngyan.com",155],["sattakingcharts.in",155],["freshbhojpuri.com",155],["bgmi32bitapk.in",155],["bankshiksha.in",155],["earn.mpscstudyhub.com",155],["earn.quotesopia.com",155],["money.quotesopia.com",155],["best-mobilegames.com",155],["learn.moderngyan.com",155],["bharatsarkarijobalert.com",155],["quotesopia.com",155],["creditsgoal.com",155],["techacode.com",155],["trickms.com",155],["ielts-isa.edu.vn",155],["sptfy.be",155],["mcafee-com.com",[155,233]],["pianetamountainbike.it",156],["barchart.com",157],["modelisme.com",158],["parasportontario.ca",158],["prescottenews.com",158],["nrj-play.fr",159],["hackingwithreact.com",160],["gutekueche.at",161],["eplfootballmatch.com",162],["peekvids.com",163],["playvids.com",163],["pornflip.com",163],["redensarten-index.de",164],["vw-page.com",165],["viz.com",[166,167]],["0rechner.de",168],["configspc.com",169],["xopenload.me",169],["uptobox.com",169],["uptostream.com",169],["japgay.com",170],["mega-debrid.eu",171],["dreamdth.com",172],["diaridegirona.cat",174],["diariodeibiza.es",174],["diariodemallorca.es",174],["diarioinformacion.com",174],["eldia.es",174],["emporda.info",174],["farodevigo.es",174],["laopinioncoruna.es",174],["laopiniondemalaga.es",174],["laopiniondemurcia.es",174],["laopiniondezamora.es",174],["laprovincia.es",174],["levante-emv.com",174],["mallorcazeitung.es",174],["regio7.cat",174],["superdeporte.es",174],["playpaste.com",175],["cnbc.com",176],["puzzles.msn.com",177],["metro.us",177],["newsobserver.com",177],["arkadiumhosted.com",177],["firefaucet.win",179],["74k.io",[180,181]],["stmruby.com",180],["direct-link.net",182],["direkt-wissen.com",182],["link-to.net",182],["fullhdxxx.com",184],["pornclassic.tube",185],["tubepornclassic.com",185],["etonline.com",186],["creatur.io",186],["drphil.com",186],["urbanmilwaukee.com",186],["ontiva.com",186],["hideandseek.world",186],["myabandonware.com",186],["kendam.com",186],["wttw.com",186],["synonyms.com",186],["definitions.net",186],["hostmath.com",186],["camvideoshub.com",186],["minhaconexao.com.br",186],["home-made-videos.com",188],["amateur-couples.com",188],["slutdump.com",188],["produsat.com",190],["12thman.com",192],["acusports.com",192],["atlantic10.com",192],["auburntigers.com",192],["baylorbears.com",192],["bceagles.com",192],["bgsufalcons.com",192],["big12sports.com",192],["bigten.org",192],["bradleybraves.com",192],["butlersports.com",192],["cmumavericks.com",192],["conferenceusa.com",192],["cyclones.com",192],["dartmouthsports.com",192],["daytonflyers.com",192],["dbupatriots.com",192],["dbusports.com",192],["denverpioneers.com",192],["fduknights.com",192],["fgcuathletics.com",192],["fightinghawks.com",192],["fightingillini.com",192],["floridagators.com",192],["friars.com",192],["friscofighters.com",192],["gamecocksonline.com",192],["goarmywestpoint.com",192],["gobison.com",192],["goblueraiders.com",192],["gobobcats.com",192],["gocards.com",192],["gocreighton.com",192],["godeacs.com",192],["goexplorers.com",192],["goetbutigers.com",192],["gofrogs.com",192],["gogriffs.com",192],["gogriz.com",192],["golobos.com",192],["gomarquette.com",192],["gopack.com",192],["gophersports.com",192],["goprincetontigers.com",192],["gopsusports.com",192],["goracers.com",192],["goshockers.com",192],["goterriers.com",192],["gotigersgo.com",192],["gousfbulls.com",192],["govandals.com",192],["gowyo.com",192],["goxavier.com",192],["gozags.com",192],["gozips.com",192],["griffinathletics.com",192],["guhoyas.com",192],["gwusports.com",192],["hailstate.com",192],["hamptonpirates.com",192],["hawaiiathletics.com",192],["hokiesports.com",192],["huskers.com",192],["icgaels.com",192],["iuhoosiers.com",192],["jsugamecocksports.com",192],["longbeachstate.com",192],["loyolaramblers.com",192],["lrtrojans.com",192],["lsusports.net",192],["morrisvillemustangs.com",192],["msuspartans.com",192],["muleriderathletics.com",192],["mutigers.com",192],["navysports.com",192],["nevadawolfpack.com",192],["niuhuskies.com",192],["nkunorse.com",192],["nuhuskies.com",192],["nusports.com",192],["okstate.com",192],["olemisssports.com",192],["omavs.com",192],["ovcsports.com",192],["owlsports.com",192],["purduesports.com",192],["redstormsports.com",192],["richmondspiders.com",192],["sfajacks.com",192],["shupirates.com",192],["siusalukis.com",192],["smcgaels.com",192],["smumustangs.com",192],["soconsports.com",192],["soonersports.com",192],["themw.com",192],["tulsahurricane.com",192],["txst.com",192],["txstatebobcats.com",192],["ubbulls.com",192],["ucfknights.com",192],["ucirvinesports.com",192],["uconnhuskies.com",192],["uhcougars.com",192],["uicflames.com",192],["umterps.com",192],["uncwsports.com",192],["unipanthers.com",192],["unlvrebels.com",192],["uoflsports.com",192],["usdtoreros.com",192],["utahstateaggies.com",192],["utepathletics.com",192],["utrockets.com",192],["uvmathletics.com",192],["uwbadgers.com",192],["villanova.com",192],["wkusports.com",192],["wmubroncos.com",192],["woffordterriers.com",192],["1pack1goal.com",192],["bcuathletics.com",192],["bubraves.com",192],["goblackbears.com",192],["golightsgo.com",192],["gomcpanthers.com",192],["goutsa.com",192],["mercerbears.com",192],["pirateblue.com",192],["pirateblue.net",192],["pirateblue.org",192],["quinnipiacbobcats.com",192],["towsontigers.com",192],["tribeathletics.com",192],["tribeclub.com",192],["utepminermaniacs.com",192],["utepminers.com",192],["wkutickets.com",192],["aopathletics.org",192],["atlantichockeyonline.com",192],["bigsouthnetwork.com",192],["bigsouthsports.com",192],["chawomenshockey.com",192],["dbupatriots.org",192],["drakerelays.org",192],["ecac.org",192],["ecacsports.com",192],["emueagles.com",192],["emugameday.com",192],["gculopes.com",192],["godrakebulldog.com",192],["godrakebulldogs.com",192],["godrakebulldogs.net",192],["goeags.com",192],["goislander.com",192],["goislanders.com",192],["gojacks.com",192],["gomacsports.com",192],["gseagles.com",192],["hubison.com",192],["iowaconference.com",192],["ksuowls.com",192],["lonestarconference.org",192],["mascac.org",192],["midwestconference.org",192],["mountaineast.org",192],["niu-pack.com",192],["nulakers.ca",192],["oswegolakers.com",192],["ovcdigitalnetwork.com",192],["pacersports.com",192],["rmacsports.org",192],["rollrivers.com",192],["samfordsports.com",192],["uncpbraves.com",192],["usfdons.com",192],["wiacsports.com",192],["alaskananooks.com",192],["broncathleticfund.com",192],["cameronaggies.com",192],["columbiacougars.com",192],["etownbluejays.com",192],["gobadgers.ca",192],["golancers.ca",192],["gometrostate.com",192],["gothunderbirds.ca",192],["kentstatesports.com",192],["lehighsports.com",192],["lopers.com",192],["lycoathletics.com",192],["lycomingathletics.com",192],["maraudersports.com",192],["mauiinvitational.com",192],["msumavericks.com",192],["nauathletics.com",192],["nueagles.com",192],["nwusports.com",192],["oceanbreezenyc.org",192],["patriotathleticfund.com",192],["pittband.com",192],["principiaathletics.com",192],["roadrunnersathletics.com",192],["sidearmsocial.com",192],["snhupenmen.com",192],["stablerarena.com",192],["stoutbluedevils.com",192],["uwlathletics.com",192],["yumacs.com",192],["collegefootballplayoff.com",192],["csurams.com",192],["cubuffs.com",192],["gobearcats.com",192],["gohuskies.com",192],["mgoblue.com",192],["osubeavers.com",192],["pittsburghpanthers.com",192],["rolltide.com",192],["texassports.com",192],["thesundevils.com",192],["uclabruins.com",192],["wvuathletics.com",192],["wvusports.com",192],["arizonawildcats.com",192],["calbears.com",192],["cuse.com",192],["georgiadogs.com",192],["goducks.com",192],["goheels.com",192],["gostanford.com",192],["insidekstatesports.com",192],["insidekstatesports.info",192],["insidekstatesports.net",192],["insidekstatesports.org",192],["k-stateathletics.com",192],["k-statefootball.net",192],["k-statefootball.org",192],["k-statesports.com",192],["k-statesports.net",192],["k-statesports.org",192],["k-statewomenshoops.com",192],["k-statewomenshoops.net",192],["k-statewomenshoops.org",192],["kstateathletics.com",192],["kstatefootball.net",192],["kstatefootball.org",192],["kstatesports.com",192],["kstatewomenshoops.com",192],["kstatewomenshoops.net",192],["kstatewomenshoops.org",192],["ksuathletics.com",192],["ksusports.com",192],["scarletknights.com",192],["showdownforrelief.com",192],["syracusecrunch.com",192],["texastech.com",192],["theacc.com",192],["ukathletics.com",192],["usctrojans.com",192],["utahutes.com",192],["utsports.com",192],["wsucougars.com",192],["vidlii.com",[192,218]],["tricksplit.io",192],["fangraphs.com",193],["stern.de",194],["geo.de",194],["brigitte.de",194],["tvspielfilm.de",[195,196,197,198]],["tvtoday.de",[195,196,197,198]],["chip.de",[195,196,197,198]],["focus.de",[195,196,197,198]],["fitforfun.de",[195,196,197,198]],["n-tv.de",199],["player.rtl2.de",200],["planetaminecraft.com",201],["cravesandflames.com",202],["codesnse.com",202],["link.paid4file.com",202],["flyad.vip",202],["lapresse.ca",203],["kolyoom.com",204],["ilovephd.com",204],["negumo.com",205],["games.wkb.jp",[206,207]],["fandom.com",[208,598,599]],["kenshi.fandom.com",209],["hausbau-forum.de",210],["homeairquality.org",210],["faucettronn.click",210],["fake-it.ws",211],["laksa19.github.io",212],["1shortlink.com",213],["nesia.my.id",214],["u-s-news.com",215],["luscious.net",216],["makemoneywithurl.com",217],["junkyponk.com",217],["healthfirstweb.com",217],["vocalley.com",217],["yogablogfit.com",217],["howifx.com",[217,395]],["en.financerites.com",217],["mythvista.com",217],["livenewsflix.com",217],["cureclues.com",217],["apekite.com",217],["host-buzz.com",217],["insmyst.com",217],["wp2host.com",217],["blogtechh.com",217],["techbixby.com",217],["blogmyst.com",217],["iammagnus.com",218],["dailyvideoreports.net",218],["unityassets4free.com",218],["resetoff.pl",219],["sexodi.com",219],["cdn77.org",220],["howtofixwindows.com",221],["3sexporn.com",222],["momxxxsex.com",222],["myfreevintageporn.com",222],["penisbuyutucum.net",222],["ujszo.com",223],["newsmax.com",224],["bobs-tube.com",225],["nadidetarifler.com",226],["siz.tv",226],["suzylu.co.uk",[227,228]],["onworks.net",229],["yabiladi.com",229],["downloadsoft.net",230],["pixsera.net",231],["testlanguages.com",232],["newsinlevels.com",232],["videosinlevels.com",232],["starkroboticsfrc.com",233],["sinonimos.de",233],["antonimos.de",233],["quesignifi.ca",233],["tiktokrealtime.com",233],["tiktokcounter.net",233],["tpayr.xyz",233],["poqzn.xyz",233],["ashrfd.xyz",233],["rezsx.xyz",233],["tryzt.xyz",233],["ashrff.xyz",233],["rezst.xyz",233],["dawenet.com",233],["erzar.xyz",233],["waezm.xyz",233],["waezg.xyz",233],["blackwoodacademy.org",233],["cryptednews.space",233],["vivuq.com",233],["swgop.com",233],["vbnmll.com",233],["telcoinfo.online",233],["dshytb.com",233],["fitdynamos.com",[233,235]],["btcbitco.in",[233,237]],["btcsatoshi.net",233],["cempakajaya.com",233],["crypto4yu.com",233],["readbitcoin.org",233],["wiour.com",233],["finish.addurl.biz",233],["aiimgvlog.fun",[233,240]],["laweducationinfo.com",233],["savemoneyinfo.com",233],["worldaffairinfo.com",233],["godstoryinfo.com",233],["successstoryinfo.com",233],["cxissuegk.com",233],["learnmarketinfo.com",233],["bhugolinfo.com",233],["armypowerinfo.com",233],["rsadnetworkinfo.com",233],["rsinsuranceinfo.com",233],["rsfinanceinfo.com",233],["rsgamer.app",233],["rssoftwareinfo.com",233],["rshostinginfo.com",233],["rseducationinfo.com",233],["phonereviewinfo.com",233],["makeincomeinfo.com",233],["gknutshell.com",233],["vichitrainfo.com",233],["workproductivityinfo.com",233],["dopomininfo.com",233],["hostingdetailer.com",233],["fitnesssguide.com",233],["tradingfact4u.com",233],["cryptofactss.com",233],["softwaredetail.com",233],["artoffocas.com",233],["insurancesfact.com",233],["travellingdetail.com",233],["advertisingexcel.com",233],["allcryptoz.net",233],["batmanfactor.com",233],["beautifulfashionnailart.com",233],["crewbase.net",233],["documentaryplanet.xyz",233],["crewus.net",233],["gametechreviewer.com",233],["midebalonu.net",233],["misterio.ro",233],["phineypet.com",233],["seory.xyz",233],["shinbhu.net",233],["shinchu.net",233],["substitutefor.com",233],["talkforfitness.com",233],["thefitbrit.co.uk",233],["thumb8.net",233],["thumb9.net",233],["topcryptoz.net",233],["uniqueten.net",233],["ultraten.net",233],["exactpay.online",233],["quins.us",233],["kiddyearner.com",233],["luckydice.net",234],["adarima.org",234],["tieutietkiem.com",234],["weatherwx.com",234],["sattaguess.com",234],["winshell.de",234],["rosasidan.ws",234],["modmakers.xyz",234],["gamepure.in",234],["warrenrahul.in",234],["austiblox.net",234],["upiapi.in",234],["networkhint.com",234],["thichcode.net",234],["texturecan.com",234],["tikmate.app",[234,472]],["arcaxbydz.id",234],["quotesshine.com",234],["4funbox.com",236],["nephobox.com",236],["1024tera.com",236],["blog.cryptowidgets.net",237],["blog.insurancegold.in",237],["blog.wiki-topia.com",237],["blog.coinsvalue.net",237],["blog.cookinguide.net",237],["blog.freeoseocheck.com",237],["blog24.me",237],["bildirim.link",239],["arahdrive.com",240],["appsbull.com",241],["diudemy.com",241],["maqal360.com",[241,242,243]],["lifesurance.info",244],["akcartoons.in",245],["cybercityhelp.in",245],["infokeeda.xyz",247],["webzeni.com",247],["dl.apkmoddone.com",248],["phongroblox.com",248],["apkmodvn.com",249],["streamelements.com",251],["share.hntv.tv",[251,667,668,669]],["forum.dji.com",[251,669]],["unionpayintl.com",[251,668]],["tickhosting.com",252],["in91vip.win",253],["arcai.com",254],["my-code4you.blogspot.com",255],["flickr.com",256],["firefile.cc",257],["pestleanalysis.com",257],["kochamjp.pl",257],["tutorialforlinux.com",257],["whatsaero.com",257],["animeblkom.net",[257,273]],["blkom.com",257],["globes.co.il",[258,259]],["jardiner-malin.fr",260],["tw-calc.net",261],["ohmybrush.com",262],["talkceltic.net",263],["mentalfloss.com",264],["uprafa.com",265],["cube365.net",266],["nightfallnews.com",[267,268]],["wwwfotografgotlin.blogspot.com",269],["freelistenonline.com",269],["badassdownloader.com",270],["quickporn.net",271],["yellowbridge.com",272],["aosmark.com",274],["atozmath.com",[276,277,278,279,280,281,282]],["newyorker.com",283],["brighteon.com",284],["more.tv",285],["video1tube.com",286],["alohatube.xyz",286],["4players.de",287],["onlinesoccermanager.com",287],["fshost.me",288],["link.cgtips.org",289],["hentaicloud.com",290],["netfapx.com",292],["javdragon.org",292],["njav.tv",292],["paperzonevn.com",293],["hentaienglish.com",294],["hentaiporno.xxx",294],["venge.io",[295,296]],["btcbux.io",297],["its.porn",[298,299]],["atv.at",300],["2ndrun.tv",301],["rackusreads.com",301],["teachmemicro.com",301],["willcycle.com",301],["kusonime.com",[302,303]],["imgur.com",[305,306,559]],["hentai-party.com",307],["hentaicomics.pro",307],["xxx-comics.pro",307],["genshinimpactcalculator.com",310],["mysexgames.com",311],["embed.indavideo.hu",314],["xnxx.com",315],["gdr-online.com",316],["mmm.dk",317],["iqiyi.com",[318,319,464]],["m.iqiyi.com",320],["nbcolympics.com",321],["apkhex.com",322],["indiansexstories2.net",323],["issstories.xyz",323],["1340kbbr.com",324],["gorgeradio.com",324],["kduk.com",324],["kedoam.com",324],["kejoam.com",324],["kelaam.com",324],["khsn1230.com",324],["kjmx.rocks",324],["kloo.com",324],["klooam.com",324],["klykradio.com",324],["kmed.com",324],["kmnt.com",324],["kool991.com",324],["kpnw.com",324],["kppk983.com",324],["krktcountry.com",324],["ktee.com",324],["kwro.com",324],["kxbxfm.com",324],["thevalley.fm",324],["quizlet.com",325],["dsocker1234.blogspot.com",326],["schoolcheats.net",[327,328]],["mgnet.xyz",329],["japopav.tv",330],["lvturbo.com",330],["designtagebuch.de",331],["pixroute.com",332],["uploady.io",333],["calculator-online.net",334],["porngames.club",335],["sexgames.xxx",335],["111.90.159.132",336],["battleplan.news",336],["mobile-tracker-free.com",337],["pfps.gg",338],["ac-illust.com",[339,340]],["photo-ac.com",[339,340]],["social-unlock.com",341],["superpsx.com",342],["ninja.io",343],["sourceforge.net",344],["samfirms.com",345],["rapelust.com",346],["vtube.to",346],["vtplay.net",346],["desitelugusex.com",346],["xvideos-downloader.net",346],["xxxvideotube.net",346],["sdefx.cloud",346],["nozomi.la",346],["moviesonlinefree.net",346],["banned.video",347],["madmaxworld.tv",347],["androidpolice.com",347],["babygaga.com",347],["backyardboss.net",347],["carbuzz.com",347],["cbr.com",347],["collider.com",347],["dualshockers.com",347],["footballfancast.com",347],["footballleagueworld.co.uk",347],["gamerant.com",347],["givemesport.com",347],["hardcoregamer.com",347],["hotcars.com",347],["howtogeek.com",347],["makeuseof.com",347],["moms.com",347],["movieweb.com",347],["pocket-lint.com",347],["pocketnow.com",347],["screenrant.com",347],["simpleflying.com",347],["thegamer.com",347],["therichest.com",347],["thesportster.com",347],["thethings.com",347],["thetravel.com",347],["topspeed.com",347],["xda-developers.com",347],["huffpost.com",348],["ingles.com",349],["spanishdict.com",349],["surfline.com",[350,351]],["play.tv3.ee",352],["play.tv3.lt",352],["play.tv3.lv",352],["tv3play.skaties.lv",352],["trendyoum.com",353],["bulbagarden.net",354],["hollywoodlife.com",355],["mat6tube.com",356],["textstudio.co",357],["newtumbl.com",358],["aruble.net",360],["nevcoins.club",361],["mail.com",362],["oggi.it",[365,366]],["manoramamax.com",365],["video.gazzetta.it",[365,366]],["mangakita.id",367],["mangakita.net",367],["avpgalaxy.net",368],["mhma12.tech",369],["panda-novel.com",370],["zebranovel.com",370],["lightsnovel.com",370],["eaglesnovel.com",370],["pandasnovel.com",370],["zadfaucet.com",371],["ewrc-results.com",372],["kizi.com",373],["cyberscoop.com",374],["fedscoop.com",374],["canale.live",375],["indiatimes.com",376],["netzwelt.de",377],["jeep-cj.com",378],["sponsorhunter.com",379],["cloudcomputingtopics.net",380],["likecs.com",381],["tiscali.it",382],["linkspy.cc",383],["adshnk.com",384],["chattanoogan.com",385],["adsy.pw",386],["playstore.pw",386],["socialmediagirls.com",387],["windowspro.de",388],["snapinsta.app",389],["jiocinema.com",390],["rapid-cloud.co",390],["uploadmall.com",390],["rkd3.dev",390],["tvtv.ca",391],["tvtv.us",391],["ipalibrary.me",392],["mydaddy.cc",393],["roadtrippin.fr",394],["vavada5com.com",395],["anyporn.com",[396,413]],["bravoporn.com",396],["bravoteens.com",396],["crocotube.com",396],["hellmoms.com",396],["hellporno.com",396],["sex3.com",396],["tubewolf.com",396],["xbabe.com",396],["xcum.com",396],["zedporn.com",396],["imagetotext.info",397],["infokik.com",398],["freepik.com",399],["ddwloclawek.pl",[400,401]],["www.seznam.cz",402],["deezer.com",403],["my-subs.co",404],["plaion.com",405],["slideshare.net",[406,407]],["ustreasuryyieldcurve.com",408],["businesssoftwarehere.com",409],["goo.st",409],["freevpshere.com",409],["softwaresolutionshere.com",409],["madoohd.com",412],["staige.tv",414],["in-jpn.com",415],["oninet.ne.jp",415],["xth.jp",415],["androidadult.com",416],["streamvid.net",417],["watchtv24.com",418],["cellmapper.net",419],["medscape.com",420],["newscon.org",[421,422]],["arkadium.com",423],["wheelofgold.com",424],["app.blubank.com",425],["mobileweb.bankmellat.ir",425],["sportdeutschland.tv",426],["kcra.com",426],["wcvb.com",426],["chat.nrj.fr",427],["chat.tchatche.com",[427,442]],["ccthesims.com",434],["chromeready.com",434],["coursedrive.org",434],["dtbps3games.com",434],["illustratemagazine.com",434],["uknip.co.uk",434],["vod.pl",435],["megadrive-emulator.com",436],["animesaga.in",439],["moviesapi.club",439],["bestx.stream",439],["watchx.top",439],["digimanie.cz",440],["svethardware.cz",440],["srvy.ninja",441],["cnn.com",[443,444,445]],["edmdls.com",446],["freshremix.net",446],["scenedl.org",446],["trakt.tv",447],["client.falixnodes.net",448],["shroomers.app",449],["classicalradio.com",450],["di.fm",450],["jazzradio.com",450],["radiotunes.com",450],["rockradio.com",450],["zenradio.com",450],["pc-builds.com",451],["qtoptens.com",451],["reuters.com",451],["today.com",451],["videogamer.com",451],["wrestlinginc.com",451],["gbatemp.net",451],["usatoday.com",[452,705]],["ydr.com",452],["getthit.com",453],["techedubyte.com",454],["soccerinhd.com",454],["movie-th.tv",455],["iwanttfc.com",456],["nutraingredients-asia.com",457],["nutraingredients-latam.com",457],["nutraingredients-usa.com",457],["nutraingredients.com",457],["mavenarts.in",458],["ozulscansen.com",459],["nexusmods.com",460],["fitnessbr.click",461],["minhareceita.xyz",461],["doomied.monster",462],["lookmovie2.to",462],["royalroad.com",463],["biletomat.pl",465],["hextank.io",[466,467]],["filmizlehdfilm.com",[468,469,470,471]],["fullfilmizle.cc",[468,469,470,471]],["gofilmizle.net",[468,469,470,471]],["btvplus.bg",473],["sagewater.com",474],["redlion.net",474],["satdl.com",475],["vidstreaming.xyz",476],["everand.com",477],["myradioonline.pl",478],["cbs.com",479],["paramountplus.com",479],["abysscdn.com",[480,481]],["fullxh.com",482],["galleryxh.site",482],["megaxh.com",482],["movingxh.world",482],["seexh.com",482],["unlockxh4.com",482],["valuexh.life",482],["xhaccess.com",482],["xhadult2.com",482],["xhadult3.com",482],["xhadult4.com",482],["xhadult5.com",482],["xhamster46.com",482],["xhamsterporno.mx",482],["xhbig.com",482],["xhbranch5.com",482],["xhchannel.com",482],["xhchannel2.com",482],["xhdate.world",482],["xhday.com",482],["xhday1.com",482],["xhlease.world",482],["xhmoon5.com",482],["xhofficial.com",482],["xhopen.com",482],["xhplanet1.com",482],["xhplanet2.com",482],["xhreal2.com",482],["xhreal3.com",482],["xhspot.com",482],["xhtab2.com",482],["xhtab4.com",482],["xhtotal.com",482],["xhtree.com",482],["xhvictory.com",482],["xhwebsite.com",482],["xhwebsite2.com",482],["xhwebsite5.com",482],["xhwide1.com",482],["xhwide2.com",482],["xhwide5.com",482],["file-upload.net",483],["megadescarga.net",[485,486,487,488]],["megadescargas.net",[485,486,487,488]],["hentaihaven.xxx",489],["jacquieetmicheltv2.net",491],["fcportables.com",[493,494]],["emurom.net",495],["freethesaurus.com",[496,497]],["thefreedictionary.com",[496,497]],["oeffentlicher-dienst.info",498],["dcdlplayer8a06f4.xyz",499],["ultimate-guitar.com",500],["claimbits.net",501],["sexyscope.net",502],["recherche-ebook.fr",504],["virtualdinerbot.com",504],["zonebourse.com",505],["pink-sluts.net",506],["andhrafriends.com",507],["benzinpreis.de",508],["turtleviplay.xyz",509],["paktech2.com",510],["defenseone.com",511],["govexec.com",511],["nextgov.com",511],["route-fifty.com",511],["sharing.wtf",512],["wetter3.de",513],["esportivos.fun",514],["cosmonova-broadcast.tv",515],["hartvannederland.nl",516],["shownieuws.nl",516],["vandaaginside.nl",516],["rock.porn",[517,518]],["videzz.net",[519,520]],["ezaudiobookforsoul.com",521],["club386.com",522],["littlebigsnake.com",523],["easyfun.gg",524],["smailpro.com",525],["ilgazzettino.it",526],["ilmessaggero.it",526],["3bmeteo.com",[527,528]],["mconverter.eu",529],["lover937.net",530],["10gb.vn",531],["pes6.es",532],["tactics.tools",[533,534]],["boundhub.com",535],["alocdnnetu.xyz",536],["reliabletv.me",537],["jakondo.ru",538],["nolive.me",541],["wired.com",542],["anonymfile.com",543],["gofile.to",543],["dotycat.com",544],["rateyourmusic.com",545],["reporterpb.com.br",546],["blog-dnz.com",548],["18adultgames.com",549],["colnect.com",[550,551]],["adultgamesworld.com",552],["bgmiupdate.com.in",553],["tacobell.com",555],["zefoy.com",556],["cnet.com",557],["natgeotv.com",560],["spankbang.com",[561,562]],["globo.com",563],["wayfair.com",564],["br.de",565],["indeed.com",566],["pasteboard.co",567],["clickhole.com",568],["deadspin.com",568],["gizmodo.com",568],["jalopnik.com",568],["jezebel.com",568],["kotaku.com",568],["lifehacker.com",568],["splinternews.com",568],["theinventory.com",568],["theonion.com",568],["theroot.com",568],["thetakeout.com",568],["pewresearch.org",568],["los40.com",[569,570]],["as.com",570],["telegraph.co.uk",[571,572]],["poweredbycovermore.com",[571,621]],["lumens.com",[571,621]],["verizon.com",573],["humanbenchmark.com",574],["politico.com",575],["officedepot.co.cr",[576,577]],["usnews.com",580],["factable.com",582],["zee5.com",583],["gala.fr",584],["geo.fr",584],["voici.fr",584],["gloucestershirelive.co.uk",585],["arsiv.mackolik.com",586],["jacksonguitars.com",587],["scandichotels.com",588],["stylist.co.uk",589],["nettiauto.com",590],["thaiairways.com",[591,592]],["cerbahealthcare.it",[593,594]],["futura-sciences.com",[593,610]],["toureiffel.paris",593],["tiendaenlinea.claro.com.ni",[595,596]],["tieba.baidu.com",597],["grasshopper.com",[600,601]],["epson.com.cn",[602,603,604,605]],["oe24.at",[606,607]],["szbz.de",606],["platform.autods.com",[608,609]],["wikihow.com",611],["citibank.com.sg",612],["uol.com.br",[613,614,615,616,617]],["gazzetta.gr",618],["digicol.dpm.org.cn",[619,620]],["virginmediatelevision.ie",622],["larazon.es",[623,624]],["waitrosecellar.com",[625,626,627]],["sharpen-free-design-generator.netlify.app",[629,630]],["help.cashctrl.com",[631,632]],["gry-online.pl",633],["vidaextra.com",634],["commande.rhinov.pro",[635,636]],["ecom.wixapps.net",[635,636]],["tipranks.com",[637,638]],["iceland.co.uk",[639,640,641]],["socket.pearsoned.com",642],["tntdrama.com",[643,644]],["trutv.com",[643,644]],["mobile.de",[645,646]],["ioe.vn",[647,648]],["geiriadur.ac.uk",[647,651]],["welsh-dictionary.ac.uk",[647,651]],["bikeportland.org",[649,650]],["biologianet.com",[614,615,616]],["10play.com.au",[652,653]],["sunshine-live.de",[654,655]],["whatismyip.com",[656,657]],["myfitnesspal.com",658],["netoff.co.jp",[659,660]],["clickjogos.com.br",663],["bristan.com",[664,665]],["zillow.com",666],["optimum.net",[670,671]],["hdfcfund.com",672],["user.guancha.cn",[673,674]],["sosovalue.com",675],["bandyforbundet.no",[676,677]],["tatacommunications.com",678],["suamusica.com.br",[679,680,681]],["macrotrends.net",[682,683]],["code.world",684],["smartcharts.net",684],["topgear.com",685],["eservice.directauto.com",[686,687]],["nbcsports.com",688],["standard.co.uk",689],["pruefernavi.de",[690,691]],["speedtest.net",[692,693]],["17track.net",694],["visible.com",[695,703,704]],["hagerty.com",[696,697]],["kino.de",[698,699]],["9now.nine.com.au",700],["poophq.com",701],["veev.to",701],["u26bekrb.fun",702],["subway.com",[703,704]],["livewithkellyandmark.com",[703,704]],["porsche.com",[703,704]],["uber.com",[703,704]],["jdsports.com",[703,704]],["engadget.com",[703,704]],["yahoo.com",[703,704]],["techcrunch.com",[703,704]],["rivals.com",[703,704]],["kkrt.com",[703,704]],["crunchyroll.com",[703,704]],["dnb.com",[703,704]],["dnb.co.uk",[703,704]],["weather.com",[703,704]],["ubereats.com",[703,704]]]);

const entitiesMap = new Map([["starmusiq",10],["wcofun",10],["kissasian",12],["gogoanime",[12,47]],["1movies",[12,53]],["xmovies8",12],["0123movies",12],["gostream",12],["gomovies",12],["primewire",13],["streanplay",[13,14]],["sbplay",13],["milfnut",13],["sxyprn",17],["hqq",[18,19]],["waaw",[19,20]],["younetu",19],["vvtplayer",19],["123link",21],["adshort",21],["linkshorts",21],["adsrt",21],["vinaurl",21],["adfloz",21],["dutchycorp",21],["shortearn",21],["pingit",21],["shrink",21],["tmearn",21],["megalink",21],["miniurl",21],["gplinks",21],["clk",21],["pureshort",21],["shrinke",21],["shrinkme",21],["link1s",21],["shortzzy",21],["shorttey",[21,186]],["lite-link",21],["adcorto",21],["zshort",21],["upfiles",21],["linkfly",21],["wplink",21],["seulink",21],["encurtalink",21],["camwhores",[22,34,75,76,77]],["tube8",[23,24]],["youporn",24],["redtube",24],["pornhub",[24,173]],["upornia",[26,27]],["watch-series",33],["watchseries",33],["vev",33],["vidop",33],["vidup",33],["fmovies",47],["streamwish",[51,52]],["xtits",[56,107]],["pouvideo",58],["povvideo",58],["povw1deo",58],["povwideo",58],["powv1deo",58],["powvibeo",58],["powvideo",58],["powvldeo",58],["plyjam",[63,64]],["fxporn69",67],["vipbox",68],["viprow",68],["desbloqueador",72],["xberuang",73],["teknorizen",73],["subtorrents",80],["subtorrents1",80],["newpelis",80],["pelix",80],["allcalidad",80],["infomaniakos",80],["tornadomovies",88],["icdrama",94],["mangasail",94],["file4go",96],["mangovideo",108],["asianclub",116],["anitube",119],["streamingcommunity",119],["mixdrop",121],["vembed",124],["uploadev",146],["ver-pelis-online",154],["ancient-origins",162],["spankbang",178],["lookcam",186],["lootlinks",186],["dpstream",189],["bluemediafiles",191],["docer",219],["terabox",236],["ctrlv",275],["123movieshd",304],["uproxy",308],["animesa",309],["cinecalidad",[312,313]],["xvideos",315],["dvdplay",346],["apkmaven",359],["gmx",363],["gamereactor",411],["doomovie-hd",412],["drakecomic",424],["empire-anime",[428,429,430,431,432]],["empire-stream",[428,429,430]],["empire-streaming",[428,429,430]],["empire-streamz",[428,429,430]],["tvhay",[437,438]],["lookmovie",462],["filmizletv",[468,469,470,471]],["hamsterix",482],["xhamster",482],["xhamster1",482],["xhamster10",482],["xhamster11",482],["xhamster12",482],["xhamster13",482],["xhamster14",482],["xhamster15",482],["xhamster16",482],["xhamster17",482],["xhamster18",482],["xhamster19",482],["xhamster20",482],["xhamster2",482],["xhamster3",482],["xhamster4",482],["xhamster42",482],["xhamster5",482],["xhamster7",482],["xhamster8",482],["lightnovelworld",484],["acortalo",[485,486,487,488]],["acortar",[485,486,487,488]],["a2zapk",492],["kickassanime",503],["filecrypt",539],["www.google",554],["officedepot",[578,579]],["foundit",[661,662]],["ticketmaster",[703,704]]]);

const exceptionsMap = new Map([["pingit.com",[21]],["pingit.me",[21]],["lookmovie.studio",[462]]]);

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
            try { value = safe.JSON_parse(raw.slice(5)); } catch { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch { return; }
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
    try { setConstant(...argsList[i]); }
    catch { }
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
