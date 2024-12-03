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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["od_abd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["Object.prototype.run","undefined"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["Object.prototype.ads.nopreroll_","true"],["checkAdBlocker","noopFunc"],["ADS.isBannersEnabled","false"],["adBlockerDetected","false"],["univresalP","noopFunc"],["EASYFUN_ADS_CAN_RUN","true"],["navigator.brave","undefined"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["google_srt","1"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["showBlackout","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","undefined"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["sharedController.adblockDetector","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["yt.config_.EXPERIMENT_FLAGS.web_bind_fetch","false"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,689]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,624]],["t-online.de",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["eropaste.net",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,257]],["gadgets.es",[11,257]],["amateurporn.co",[11,115]],["wiwo.de",12],["masteranime.tv",13],["alphaporno.com",[14,471]],["porngem.com",14],["uploadbank.com",[14,88]],["shortit.pw",[14,99]],["familyporn.tv",14],["id45.cyou",14],["85tube.com",[14,79]],["k1nk.co",14],["watchasians.cc",14],["soltoshindo.com",14],["dronedj.com",16],["nolive.me",17],["sankakucomplex.com",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["netu.frembed.fun",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["vtplayer.online",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,120]],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,193]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,206]],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,225]],["smoner.com",24],["gyanlight.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,220]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["vipurl.in",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,311]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["cety.app",24],["exego.app",[24,306]],["cutlink.net",24],["cutsy.net",24],["cutyurls.com",24],["cutty.app",24],["cutnet.net",24],["tinys.click",[24,206]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tvi.la",24],["iir.la",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,220]],["oii.la",[24,316]],["tpi.li",[24,316]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["thotpacks.xyz",24],["megaurl.in",24],["megafly.in",24],["simana.online",24],["fooak.com",24],["joktop.com",24],["evernia.site",24],["falpus.com",24],["link.paid4link.com",[24,320]],["exalink.fun",24],["indiamaja.com",24],["newshuta.in",24],["shortxlinks.com",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["miuiku.com",24],["savelink.site",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["ccurl.net",24],["linkpoi.me",24],["menjelajahi.com",24],["pewgame.com",24],["haonguyen.top",24],["crazyblog.in",24],["gtlink.co",24],["cutearn.net",24],["rshrt.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,137]],["bblink.com",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["snowurl.com",[24,206]],["netfile.cc",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,484]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,206]],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,50]],["camwhorez.tv",[25,36,78,79]],["cambay.tv",[25,57,78,112,114,115,116,117]],["thotcity.su",25],["viralxxxporn.com",[25,228]],["fpo.xxx",[25,57]],["sexemix.com",25],["heavyfetish.com",[25,554]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["viki.com",[34,35]],["sleazyneasy.com",[36,37,38]],["smutr.com",[36,189]],["watchdirty.to",[36,79,80,115]],["yourporngod.com",[36,37]],["javbangers.com",[36,359]],["camfox.com",36],["camthots.tv",[36,112]],["shegotass.info",36],["amateur8.com",36],["bigtitslust.com",36],["ebony8.com",36],["freeporn8.com",36],["lesbian8.com",36],["maturetubehere.com",36],["sortporn.com",36],["webcamvau.com",36],["motherporno.com",[36,37,57,114]],["tktube.com",36],["theporngod.com",[36,37]],["pornsocket.com",39],["luxuretv.com",40],["porndig.com",[41,42]],["webcheats.com.br",43],["ceesty.com",[44,45]],["gestyy.com",[44,45]],["corneey.com",45],["destyy.com",45],["festyy.com",45],["sh.st",45],["mitaku.net",45],["angrybirdsnest.com",46],["zrozz.com",46],["clix4btc.com",46],["4tests.com",46],["planet-explorers-isos.com",46],["business-standard.com",46],["goltelevision.com",46],["news-und-nachrichten.de",46],["laradiobbs.net",46],["urlaubspartner.net",46],["produktion.de",46],["cinemaxxl.de",46],["bladesalvador.com",46],["tempr.email",46],["katfile.com",46],["trust.zone",46],["cshort.org",46],["friendproject.net",46],["covrhub.com",46],["planetsuzy.org",47],["empflix.com",48],["freeplayervideo.com",49],["nazarickol.com",49],["player-cdn.com",49],["playhydrax.com",[49,237,238]],["alleneconomicmatter.com",49],["apinchcaseation.com",49],["bethshouldercan.com",49],["bigclatterhomesguideservice.com",49],["bradleyviewdoctor.com",49],["brittneystandardwestern.com",49],["brookethoughi.com",49],["brucevotewithin.com",49],["cindyeyefinal.com",49],["denisegrowthwide.com",49],["donaldlineelse.com",49],["edwardarriveoften.com",49],["erikcoldperson.com",49],["evelynthankregion.com",49],["graceaddresscommunity.com",49],["heatherdiscussionwhen.com",49],["housecardsummerbutton.com",49],["jamessoundcost.com",49],["jamesstartstudent.com",49],["jamiesamewalk.com",49],["jasminetesttry.com",49],["jasonresponsemeasure.com",49],["jayservicestuff.com",49],["jessicaglassauthor.com",49],["johntryopen.com",49],["josephseveralconcern.com",49],["kennethofficialitem.com",49],["lisatrialidea.com",49],["lorimuchbenefit.com",49],["loriwithinfamily.com",49],["lukecomparetwo.com",49],["markstyleall.com",49],["michaelapplysome.com",49],["morganoperationface.com",49],["nectareousoverelate.com",49],["paulkitchendark.com",49],["rebeccaneverbase.com",49],["roberteachfinal.com",49],["robertplacespace.com",49],["ryanagoinvolve.com",49],["sandratableother.com",49],["sandrataxeight.com",49],["seanshowcould.com",49],["sethniceletter.com",49],["shannonpersonalcost.com",49],["sharonwhiledemocratic.com",49],["stevenimaginelittle.com",49],["strawberriesporail.com",49],["susanhavekeep.com",49],["timberwoodanotia.com",49],["tinycat-voe-fashion.com",49],["toddpartneranimal.com",49],["troyyourlead.com",49],["uptodatefinishconference.com",49],["uptodatefinishconferenceroom.com",49],["vincentincludesuccessful.com",49],["voe.sx",49],["motphimtv.com",49],["rabbitstream.net",49],["projectfreetv.one",49],["transparentcalifornia.com",50],["deepbrid.com",51],["webnovel.com",52],["videosgay.me",[53,54]],["oneupload.to",54],["oneupload.online",54],["wishfast.top",54],["schwaebische.de",55],["8tracks.com",56],["3movs.com",57],["bravoerotica.net",[57,114]],["youx.xxx",57],["camclips.tv",[57,189]],["camflow.tv",[57,114,115,158,228]],["camhoes.tv",[57,112,114,115,158,228]],["xmegadrive.com",57],["xxxymovies.com",57],["xxxshake.com",57],["gayck.com",57],["xhand.com",[57,114]],["analdin.com",[57,114]],["revealname.com",58],["golfchannel.com",60],["telemundodeportes.com",60],["stream.nbcsports.com",60],["mathdf.com",60],["gamcore.com",61],["porcore.com",61],["69games.xxx",61],["javmix.app",61],["tecknity.com",62],["haaretz.co.il",63],["haaretz.com",63],["hungama.com",63],["a-o.ninja",63],["anime-odcinki.pl",63],["kumpulmanga.org",63],["shortgoo.blogspot.com",63],["tonanmedia.my.id",[63,506]],["yurasu.xyz",63],["isekaipalace.com",63],["vikistream.com",64],["eplayer.click",[64,65]],["mega4upload.com",[65,71]],["ennovelas.com",[65,71]],["n-tv.de",66],["brigitte.de",67],["stern.de",67],["foxsports.com.au",68],["canberratimes.com.au",68],["thesimsresource.com",69],["bdnewszh.com",71],["streamservicehd.click",71],["ctrl.blog",72],["sportlife.es",73],["finofilipino.org",74],["acortarm.xyz",75],["mysflink.blogspot.com",76],["assia.tv",77],["assia4.com",77],["assia24.com",77],["cwtvembeds.com",[79,113]],["xmateur.com",[79,80,115]],["camlovers.tv",79],["porntn.com",79],["pornissimo.org",79],["sexcams-24.com",[79,115]],["watchporn.to",[79,115]],["camwhorez.video",79],["footstockings.com",[79,80,115]],["multi.xxx",80],["worldofbitco.in",[81,82]],["weatherx.co.in",[81,82]],["getyourbitco.in",81],["sunbtc.space",81],["sbs.com.au",83],["ojogos.com.br",85],["powforums.com",86],["supforums.com",86],["studybullet.com",86],["usgamer.net",87],["recordonline.com",87],["freebitcoin.win",90],["e-monsite.com",90],["coindice.win",90],["sport-tv-guide.live",91],["temp-mails.com",92],["freiepresse.de",93],["investing.com",94],["mp3fiber.com",96],["chicoer.com",97],["dailybreeze.com",97],["dailybulletin.com",97],["dailynews.com",97],["delcotimes.com",97],["eastbaytimes.com",97],["macombdaily.com",97],["ocregister.com",97],["pasadenastarnews.com",97],["pe.com",97],["presstelegram.com",97],["redlandsdailyfacts.com",97],["reviewjournal.com",97],["santacruzsentinel.com",97],["saratogian.com",97],["sentinelandenterprise.com",97],["sgvtribune.com",97],["tampabay.com",97],["times-standard.com",97],["theoaklandpress.com",97],["trentonian.com",97],["twincities.com",97],["whittierdailynews.com",97],["bostonherald.com",97],["dailycamera.com",97],["sbsun.com",97],["dailydemocrat.com",97],["montereyherald.com",97],["orovillemr.com",97],["record-bee.com",97],["redbluffdailynews.com",97],["reporterherald.com",97],["thereporter.com",97],["timescall.com",97],["timesheraldonline.com",97],["ukiahdailyjournal.com",97],["dailylocal.com",97],["mercurynews.com",97],["suedkurier.de",98],["anysex.com",100],["vlist.se",101],["pornve.com",102],["coolrom.com.au",103],["pornohirsch.net",104],["marie-claire.es",105],["gamezhero.com",105],["flashgirlgames.com",105],["onlinesudoku.games",105],["mpg.football",105],["sssam.com",105],["globalnews.ca",106],["drinksmixer.com",107],["leitesculinaria.com",107],["fupa.net",108],["browardpalmbeach.com",109],["dallasobserver.com",109],["houstonpress.com",109],["miaminewtimes.com",109],["phoenixnewtimes.com",109],["westword.com",109],["nhentai.net",110],["nowtv.com.tr",111],["caminspector.net",112],["camwhoreshd.com",112],["camgoddess.tv",112],["gay4porn.com",114],["mypornhere.com",114],["camhub.cc",115],["sexwebvideo.com",115],["sexwebvideo.net",115],["love4porn.com",115],["thotvids.com",115],["watchmdh.to",115],["celebwhore.com",115],["cluset.com",115],["4kporn.xxx",115],["xhomealone.com",115],["lusttaboo.com",[115,430]],["hentai-moon.com",115],["mediapason.it",118],["linkspaid.com",118],["tuotromedico.com",118],["neoteo.com",118],["phoneswiki.com",118],["celebmix.com",118],["myneobuxportal.com",118],["oyungibi.com",118],["25yearslatersite.com",118],["jeshoots.com",119],["techhx.com",119],["karanapk.com",119],["flashplayer.fullstacks.net",121],["cloudapps.herokuapp.com",121],["texteditor.nsspot.net",121],["youfiles.herokuapp.com",121],["temp-mail.org",122],["javhdporn.net",123],["comnuan.com",124],["veedi.com",125],["battleboats.io",125],["fruitlab.com",126],["acetack.com",126],["androidquest.com",126],["apklox.com",126],["chhaprawap.in",126],["gujarativyakaran.com",126],["kashmirstudentsinformation.in",126],["kisantime.com",126],["shetkaritoday.in",126],["pastescript.com",126],["trimorspacks.com",126],["updrop.link",126],["haddoz.net",126],["garoetpos.com",126],["stiletv.it",127],["hqtv.biz",129],["liveuamap.com",130],["muvibg.com",130],["audycje.tokfm.pl",131],["hulu.com",[132,133,134]],["shush.se",135],["allkpop.com",136],["pickcrackpasswords.blogspot.com",138],["kfrfansub.com",139],["thuglink.com",139],["voipreview.org",139],["illicoporno.com",140],["lavoixdux.com",140],["tonpornodujour.com",140],["jacquieetmichel.net",140],["jacquieetmicheltv.net",[140,246,247]],["swame.com",140],["vosfemmes.com",140],["voyeurfrance.net",140],["hanime.tv",141],["pogo.com",142],["cloudvideo.tv",143],["legionjuegos.org",144],["legionpeliculas.org",144],["legionprogramas.org",144],["16honeys.com",145],["elespanol.com",146],["remodelista.com",147],["coolmathgames.com",[148,149,150,577]],["audiofanzine.com",151],["hitokin.net",153],["developerinsider.co",154],["ilprimatonazionale.it",155],["hotabis.com",155],["root-nation.com",155],["italpress.com",155],["airsoftmilsimnews.com",155],["artribune.com",155],["thehindu.com",156],["cambro.tv",[157,158]],["nibelungen-kurier.de",159],["adfoc.us",161],["techyember.com",161],["remixbass.com",161],["techipop.com",161],["quickimageconverter.com",161],["mastharyana.com",161],["tea-coffee.net",161],["spatsify.com",161],["newedutopics.com",161],["getviralreach.in",161],["edukaroo.com",161],["funkeypagali.com",161],["careersides.com",161],["nayisahara.com",161],["wikifilmia.com",161],["infinityskull.com",161],["viewmyknowledge.com",161],["iisfvirtual.in",161],["starxinvestor.com",161],["jkssbalerts.com",161],["myprivatejobs.com",[161,307]],["wikitraveltips.com",[161,307]],["amritadrino.com",[161,307]],["sahlmarketing.net",161],["filmypoints.in",161],["fitnessholic.net",161],["moderngyan.com",161],["sattakingcharts.in",161],["freshbhojpuri.com",161],["bgmi32bitapk.in",161],["bankshiksha.in",161],["earn.mpscstudyhub.com",161],["earn.quotesopia.com",161],["money.quotesopia.com",161],["best-mobilegames.com",161],["learn.moderngyan.com",161],["bharatsarkarijobalert.com",161],["quotesopia.com",161],["creditsgoal.com",161],["techacode.com",161],["trickms.com",161],["ielts-isa.edu.vn",161],["sptfy.be",161],["mcafee-com.com",[161,306]],["pianetamountainbike.it",162],["barchart.com",163],["modelisme.com",164],["parasportontario.ca",164],["prescottenews.com",164],["nrj-play.fr",165],["hackingwithreact.com",166],["gutekueche.at",167],["eplfootballmatch.com",168],["peekvids.com",169],["playvids.com",169],["pornflip.com",169],["redensarten-index.de",170],["vw-page.com",171],["viz.com",[172,173]],["0rechner.de",174],["configspc.com",175],["xopenload.me",175],["uptobox.com",175],["uptostream.com",175],["japgay.com",176],["mega-debrid.eu",177],["dreamdth.com",178],["diaridegirona.cat",180],["diariodeibiza.es",180],["diariodemallorca.es",180],["diarioinformacion.com",180],["eldia.es",180],["emporda.info",180],["farodevigo.es",180],["laopinioncoruna.es",180],["laopiniondemalaga.es",180],["laopiniondemurcia.es",180],["laopiniondezamora.es",180],["laprovincia.es",180],["levante-emv.com",180],["mallorcazeitung.es",180],["regio7.cat",180],["superdeporte.es",180],["playpaste.com",181],["player.rtl2.de",182],["cnbc.com",183],["puzzles.msn.com",184],["metro.us",184],["newsobserver.com",184],["arkadiumhosted.com",184],["firefaucet.win",186],["55k.io",187],["filelions.online",187],["stmruby.com",187],["direct-link.net",188],["direkt-wissen.com",188],["link-to.net",188],["fullhdxxx.com",190],["pornclassic.tube",191],["tubepornclassic.com",191],["etonline.com",192],["creatur.io",192],["drphil.com",192],["urbanmilwaukee.com",192],["ontiva.com",192],["hideandseek.world",192],["myabandonware.com",192],["kendam.com",192],["wttw.com",192],["synonyms.com",192],["definitions.net",192],["hostmath.com",192],["camvideoshub.com",192],["minhaconexao.com.br",192],["home-made-videos.com",194],["pxrnxx.xyz",194],["amateur-couples.com",194],["slutdump.com",194],["produsat.com",196],["12thman.com",198],["acusports.com",198],["atlantic10.com",198],["auburntigers.com",198],["baylorbears.com",198],["bceagles.com",198],["bgsufalcons.com",198],["big12sports.com",198],["bigten.org",198],["bradleybraves.com",198],["butlersports.com",198],["cmumavericks.com",198],["conferenceusa.com",198],["cyclones.com",198],["dartmouthsports.com",198],["daytonflyers.com",198],["dbupatriots.com",198],["dbusports.com",198],["denverpioneers.com",198],["fduknights.com",198],["fgcuathletics.com",198],["fightinghawks.com",198],["fightingillini.com",198],["floridagators.com",198],["friars.com",198],["friscofighters.com",198],["gamecocksonline.com",198],["goarmywestpoint.com",198],["gobison.com",198],["goblueraiders.com",198],["gobobcats.com",198],["gocards.com",198],["gocreighton.com",198],["godeacs.com",198],["goexplorers.com",198],["goetbutigers.com",198],["gofrogs.com",198],["gogriffs.com",198],["gogriz.com",198],["golobos.com",198],["gomarquette.com",198],["gopack.com",198],["gophersports.com",198],["goprincetontigers.com",198],["gopsusports.com",198],["goracers.com",198],["goshockers.com",198],["goterriers.com",198],["gotigersgo.com",198],["gousfbulls.com",198],["govandals.com",198],["gowyo.com",198],["goxavier.com",198],["gozags.com",198],["gozips.com",198],["griffinathletics.com",198],["guhoyas.com",198],["gwusports.com",198],["hailstate.com",198],["hamptonpirates.com",198],["hawaiiathletics.com",198],["hokiesports.com",198],["huskers.com",198],["icgaels.com",198],["iuhoosiers.com",198],["jsugamecocksports.com",198],["longbeachstate.com",198],["loyolaramblers.com",198],["lrtrojans.com",198],["lsusports.net",198],["morrisvillemustangs.com",198],["msuspartans.com",198],["muleriderathletics.com",198],["mutigers.com",198],["navysports.com",198],["nevadawolfpack.com",198],["niuhuskies.com",198],["nkunorse.com",198],["nuhuskies.com",198],["nusports.com",198],["okstate.com",198],["olemisssports.com",198],["omavs.com",198],["ovcsports.com",198],["owlsports.com",198],["purduesports.com",198],["redstormsports.com",198],["richmondspiders.com",198],["sfajacks.com",198],["shupirates.com",198],["siusalukis.com",198],["smcgaels.com",198],["smumustangs.com",198],["soconsports.com",198],["soonersports.com",198],["themw.com",198],["tulsahurricane.com",198],["txst.com",198],["txstatebobcats.com",198],["ubbulls.com",198],["ucfknights.com",198],["ucirvinesports.com",198],["uconnhuskies.com",198],["uhcougars.com",198],["uicflames.com",198],["umterps.com",198],["uncwsports.com",198],["unipanthers.com",198],["unlvrebels.com",198],["uoflsports.com",198],["usdtoreros.com",198],["utahstateaggies.com",198],["utepathletics.com",198],["utrockets.com",198],["uvmathletics.com",198],["uwbadgers.com",198],["villanova.com",198],["wkusports.com",198],["wmubroncos.com",198],["woffordterriers.com",198],["1pack1goal.com",198],["bcuathletics.com",198],["bubraves.com",198],["goblackbears.com",198],["golightsgo.com",198],["gomcpanthers.com",198],["goutsa.com",198],["mercerbears.com",198],["pirateblue.com",198],["pirateblue.net",198],["pirateblue.org",198],["quinnipiacbobcats.com",198],["towsontigers.com",198],["tribeathletics.com",198],["tribeclub.com",198],["utepminermaniacs.com",198],["utepminers.com",198],["wkutickets.com",198],["aopathletics.org",198],["atlantichockeyonline.com",198],["bigsouthnetwork.com",198],["bigsouthsports.com",198],["chawomenshockey.com",198],["dbupatriots.org",198],["drakerelays.org",198],["ecac.org",198],["ecacsports.com",198],["emueagles.com",198],["emugameday.com",198],["gculopes.com",198],["godrakebulldog.com",198],["godrakebulldogs.com",198],["godrakebulldogs.net",198],["goeags.com",198],["goislander.com",198],["goislanders.com",198],["gojacks.com",198],["gomacsports.com",198],["gseagles.com",198],["hubison.com",198],["iowaconference.com",198],["ksuowls.com",198],["lonestarconference.org",198],["mascac.org",198],["midwestconference.org",198],["mountaineast.org",198],["niu-pack.com",198],["nulakers.ca",198],["oswegolakers.com",198],["ovcdigitalnetwork.com",198],["pacersports.com",198],["rmacsports.org",198],["rollrivers.com",198],["samfordsports.com",198],["uncpbraves.com",198],["usfdons.com",198],["wiacsports.com",198],["alaskananooks.com",198],["broncathleticfund.com",198],["cameronaggies.com",198],["columbiacougars.com",198],["etownbluejays.com",198],["gobadgers.ca",198],["golancers.ca",198],["gometrostate.com",198],["gothunderbirds.ca",198],["kentstatesports.com",198],["lehighsports.com",198],["lopers.com",198],["lycoathletics.com",198],["lycomingathletics.com",198],["maraudersports.com",198],["mauiinvitational.com",198],["msumavericks.com",198],["nauathletics.com",198],["nueagles.com",198],["nwusports.com",198],["oceanbreezenyc.org",198],["patriotathleticfund.com",198],["pittband.com",198],["principiaathletics.com",198],["roadrunnersathletics.com",198],["sidearmsocial.com",198],["snhupenmen.com",198],["stablerarena.com",198],["stoutbluedevils.com",198],["uwlathletics.com",198],["yumacs.com",198],["collegefootballplayoff.com",198],["csurams.com",198],["cubuffs.com",198],["gobearcats.com",198],["gohuskies.com",198],["mgoblue.com",198],["osubeavers.com",198],["pittsburghpanthers.com",198],["rolltide.com",198],["texassports.com",198],["thesundevils.com",198],["uclabruins.com",198],["wvuathletics.com",198],["wvusports.com",198],["arizonawildcats.com",198],["calbears.com",198],["cuse.com",198],["georgiadogs.com",198],["goducks.com",198],["goheels.com",198],["gostanford.com",198],["insidekstatesports.com",198],["insidekstatesports.info",198],["insidekstatesports.net",198],["insidekstatesports.org",198],["k-stateathletics.com",198],["k-statefootball.net",198],["k-statefootball.org",198],["k-statesports.com",198],["k-statesports.net",198],["k-statesports.org",198],["k-statewomenshoops.com",198],["k-statewomenshoops.net",198],["k-statewomenshoops.org",198],["kstateathletics.com",198],["kstatefootball.net",198],["kstatefootball.org",198],["kstatesports.com",198],["kstatewomenshoops.com",198],["kstatewomenshoops.net",198],["kstatewomenshoops.org",198],["ksuathletics.com",198],["ksusports.com",198],["scarletknights.com",198],["showdownforrelief.com",198],["syracusecrunch.com",198],["texastech.com",198],["theacc.com",198],["ukathletics.com",198],["usctrojans.com",198],["utahutes.com",198],["utsports.com",198],["wsucougars.com",198],["vidlii.com",[198,221]],["tricksplit.io",198],["fangraphs.com",199],["4players.de",[200,288]],["buffed.de",200],["gamesaktuell.de",200],["gamezone.de",200],["pcgames.de",200],["videogameszone.de",200],["tvspielfilm.de",[201,202,203,204]],["tvtoday.de",[201,202,203,204]],["chip.de",[201,202,203,204]],["focus.de",[201,202,203,204]],["planetaminecraft.com",205],["cravesandflames.com",206],["codesnse.com",206],["link.paid4file.com",206],["flyad.vip",206],["lapresse.ca",207],["kolyoom.com",208],["ilovephd.com",208],["negumo.com",209],["games.wkb.jp",[210,211]],["fandom.com",[212,594,595]],["kenshi.fandom.com",213],["hausbau-forum.de",214],["homeairquality.org",214],["faucettronn.click",214],["fake-it.ws",215],["laksa19.github.io",216],["1shortlink.com",217],["nesia.my.id",218],["u-s-news.com",219],["makemoneywithurl.com",220],["junkyponk.com",220],["healthfirstweb.com",220],["vocalley.com",220],["yogablogfit.com",220],["howifx.com",[220,467]],["en.financerites.com",220],["mythvista.com",220],["livenewsflix.com",220],["cureclues.com",220],["apekite.com",220],["host-buzz.com",220],["insmyst.com",220],["wp2host.com",220],["blogtechh.com",220],["techbixby.com",220],["blogmyst.com",220],["iammagnus.com",221],["dailyvideoreports.net",221],["unityassets4free.com",221],["resetoff.pl",222],["sexodi.com",222],["cdn77.org",223],["howtofixwindows.com",224],["3sexporn.com",225],["momxxxsex.com",225],["myfreevintageporn.com",225],["penisbuyutucum.net",225],["ujszo.com",226],["newsmax.com",227],["bobs-tube.com",228],["nadidetarifler.com",229],["siz.tv",229],["suzylu.co.uk",[230,231]],["onworks.net",232],["yabiladi.com",232],["downloadsoft.net",233],["pixsera.net",234],["testlanguages.com",235],["newsinlevels.com",235],["videosinlevels.com",235],["cbs.com",236],["paramountplus.com",236],["abysscdn.com",[237,238]],["buktube.com",239],["fullxh.com",239],["galleryxh.site",239],["megaxh.com",239],["movingxh.world",239],["seexh.com",239],["unlockxh4.com",239],["valuexh.life",239],["xhaccess.com",239],["xhadult2.com",239],["xhadult3.com",239],["xhadult4.com",239],["xhadult5.com",239],["xhamster46.com",239],["xhamsterporno.mx",239],["xhbig.com",239],["xhbranch5.com",239],["xhchannel.com",239],["xhchannel2.com",239],["xhdate.world",239],["xhday.com",239],["xhday1.com",239],["xhlease.world",239],["xhmoon5.com",239],["xhofficial.com",239],["xhopen.com",239],["xhplanet1.com",239],["xhplanet2.com",239],["xhreal2.com",239],["xhreal3.com",239],["xhspot.com",239],["xhtab2.com",239],["xhtab4.com",239],["xhtotal.com",239],["xhtree.com",239],["xhvictory.com",239],["xhwebsite.com",239],["xhwebsite2.com",239],["xhwebsite5.com",239],["xhwide1.com",239],["xhwide2.com",239],["xhwide5.com",239],["xhxh3.xyz",239],["lightnovelworld.com",240],["megadescarga.net",[241,242,243,244]],["megadescargas.net",[241,242,243,244]],["hentaihaven.xxx",245],["jacquieetmicheltv2.net",247],["fcportables.com",[249,250]],["emurom.net",251],["freethesaurus.com",[252,253]],["thefreedictionary.com",[252,253]],["oeffentlicher-dienst.info",254],["dcdlplayer8a06f4.xyz",255],["ultimate-guitar.com",256],["teachmemicro.com",257],["willcycle.com",257],["2ndrun.tv",257],["rackusreads.com",257],["xyzsports111.xyz",[258,259,260]],["xyzsports112.xyz",[258,259,260]],["xyzsports113.xyz",[258,259,260]],["xyzsports114.xyz",[258,259,260]],["xyzsprtsfrmr1.site",[258,259,260]],["xyzsprtsfrmr2.site",[258,259,260]],["claimbits.net",261],["sexyscope.net",262],["recherche-ebook.fr",264],["easymc.io",264],["zonebourse.com",265],["pink-sluts.net",266],["madoohd.com",267],["andhrafriends.com",268],["benzinpreis.de",269],["turtleviplay.xyz",270],["defenseone.com",271],["govexec.com",271],["nextgov.com",271],["route-fifty.com",271],["sharing.wtf",272],["wetter3.de",273],["arahdrive.com",274],["aiimgvlog.fun",[274,306]],["esportivos.fun",275],["cosmonova-broadcast.tv",276],["soccerinhd.com",277],["techedubyte.com",277],["hartvannederland.nl",278],["shownieuws.nl",278],["vandaaginside.nl",278],["rock.porn",[279,280]],["videzz.net",[281,282]],["ezaudiobookforsoul.com",283],["club386.com",284],["androidpolice.com",285],["cbr.com",285],["collider.com",285],["dualshockers.com",285],["gamerant.com",285],["howtogeek.com",285],["makeuseof.com",285],["movieweb.com",285],["screenrant.com",285],["thegamer.com",285],["xda-developers.com",285],["banned.video",285],["madmaxworld.tv",285],["wheelofgold.com",286],["littlebigsnake.com",287],["onlinesoccermanager.com",288],["njav.tv",289],["netfapx.com",289],["javdragon.org",289],["easyfun.gg",290],["uploadmall.com",291],["jiocinema.com",291],["rapid-cloud.co",291],["smailpro.com",292],["ilgazzettino.it",293],["ilmessaggero.it",293],["3bmeteo.com",[294,295]],["mconverter.eu",296],["lover937.net",297],["10gb.vn",298],["they.tube",298],["pes6.es",299],["tactics.tools",[300,301]],["boundhub.com",302],["alocdnnetu.xyz",303],["reliabletv.me",304],["jakondo.ru",305],["starkroboticsfrc.com",306],["sinonimos.de",306],["antonimos.de",306],["quesignifi.ca",306],["tiktokrealtime.com",306],["tiktokcounter.net",306],["tpayr.xyz",306],["poqzn.xyz",306],["ashrfd.xyz",306],["rezsx.xyz",306],["tryzt.xyz",306],["ashrff.xyz",306],["rezst.xyz",306],["dawenet.com",306],["erzar.xyz",306],["waezm.xyz",306],["waezg.xyz",306],["blackwoodacademy.org",306],["cryptednews.space",306],["vivuq.com",306],["swgop.com",306],["vbnmll.com",306],["telcoinfo.online",306],["dshytb.com",306],["fitdynamos.com",[306,308]],["btcbitco.in",[306,310]],["btcsatoshi.net",306],["cempakajaya.com",306],["crypto4yu.com",306],["readbitcoin.org",306],["wiour.com",306],["finish.addurl.biz",306],["laweducationinfo.com",306],["savemoneyinfo.com",306],["worldaffairinfo.com",306],["godstoryinfo.com",306],["successstoryinfo.com",306],["cxissuegk.com",306],["learnmarketinfo.com",306],["bhugolinfo.com",306],["armypowerinfo.com",306],["rsadnetworkinfo.com",306],["rsinsuranceinfo.com",306],["rsfinanceinfo.com",306],["rsgamer.app",306],["rssoftwareinfo.com",306],["rshostinginfo.com",306],["rseducationinfo.com",306],["phonereviewinfo.com",306],["makeincomeinfo.com",306],["gknutshell.com",306],["vichitrainfo.com",306],["workproductivityinfo.com",306],["dopomininfo.com",306],["hostingdetailer.com",306],["fitnesssguide.com",306],["tradingfact4u.com",306],["cryptofactss.com",306],["softwaredetail.com",306],["artoffocas.com",306],["insurancesfact.com",306],["advertisingexcel.com",306],["allcryptoz.net",306],["batmanfactor.com",306],["beautifulfashionnailart.com",306],["crewbase.net",306],["documentaryplanet.xyz",306],["crewus.net",306],["gametechreviewer.com",306],["midebalonu.net",306],["misterio.ro",306],["phineypet.com",306],["seory.xyz",306],["shinbhu.net",306],["shinchu.net",306],["substitutefor.com",306],["talkforfitness.com",306],["thefitbrit.co.uk",306],["thumb8.net",306],["thumb9.net",306],["topcryptoz.net",306],["uniqueten.net",306],["ultraten.net",306],["exactpay.online",306],["kiddyearner.com",306],["luckydice.net",307],["adarima.org",307],["tieutietkiem.com",307],["weatherwx.com",307],["sattaguess.com",307],["winshell.de",307],["rosasidan.ws",307],["modmakers.xyz",307],["gamepure.in",307],["warrenrahul.in",307],["austiblox.net",307],["upiapi.in",307],["myownguess.in",307],["networkhint.com",307],["watchhentai.net",307],["thichcode.net",307],["texturecan.com",307],["tikmate.app",[307,544]],["4funbox.com",309],["nephobox.com",309],["1024tera.com",309],["blog.cryptowidgets.net",310],["blog.insurancegold.in",310],["blog.wiki-topia.com",310],["blog.coinsvalue.net",310],["blog.cookinguide.net",310],["blog.freeoseocheck.com",310],["blog24.me",310],["bildirim.link",312],["appsbull.com",313],["diudemy.com",313],["maqal360.com",313],["lifesurance.info",314],["akcartoons.in",315],["cybercityhelp.in",315],["infokeeda.xyz",317],["webzeni.com",317],["dl.apkmoddone.com",318],["phongroblox.com",318],["apkmodvn.com",319],["streamelements.com",[321,322]],["share.hntv.tv",[322,663,664,665]],["forum.dji.com",[322,665]],["unionpayintl.com",[322,664]],["arcai.com",323],["my-code4you.blogspot.com",324],["flickr.com",325],["firefile.cc",326],["pestleanalysis.com",326],["kochamjp.pl",326],["tutorialforlinux.com",326],["whatsaero.com",326],["animeblkom.net",[326,342]],["blkom.com",326],["globes.co.il",[327,328]],["jardiner-malin.fr",329],["tw-calc.net",330],["ohmybrush.com",331],["talkceltic.net",332],["mentalfloss.com",333],["uprafa.com",334],["cube365.net",335],["nightfallnews.com",[336,337]],["wwwfotografgotlin.blogspot.com",338],["freelistenonline.com",338],["badassdownloader.com",339],["quickporn.net",340],["yellowbridge.com",341],["aosmark.com",343],["atozmath.com",[345,346,347,348,349,350,351]],["newyorker.com",352],["brighteon.com",353],["more.tv",354],["video1tube.com",355],["alohatube.xyz",355],["fshost.me",356],["link.cgtips.org",357],["hentaicloud.com",358],["paperzonevn.com",360],["hentaienglish.com",361],["hentaiporno.xxx",361],["venge.io",[362,363]],["btcbux.io",364],["its.porn",[365,366]],["atv.at",367],["kusonime.com",[368,369]],["jetpunk.com",371],["imgur.com",[372,373,555]],["hentai-party.com",374],["hentaicomics.pro",374],["xxx-comics.pro",374],["genshinimpactcalculator.com",377],["mysexgames.com",378],["embed.indavideo.hu",381],["gdr-online.com",382],["mmm.dk",383],["iqiyi.com",[384,385,536]],["m.iqiyi.com",386],["nbcolympics.com",387],["apkhex.com",388],["indiansexstories2.net",389],["issstories.xyz",389],["1340kbbr.com",390],["gorgeradio.com",390],["kduk.com",390],["kedoam.com",390],["kejoam.com",390],["kelaam.com",390],["khsn1230.com",390],["kjmx.rocks",390],["kloo.com",390],["klooam.com",390],["klykradio.com",390],["kmed.com",390],["kmnt.com",390],["kool991.com",390],["kpnw.com",390],["kppk983.com",390],["krktcountry.com",390],["ktee.com",390],["kwro.com",390],["kxbxfm.com",390],["thevalley.fm",390],["quizlet.com",391],["dsocker1234.blogspot.com",392],["schoolcheats.net",[393,394]],["mgnet.xyz",395],["japopav.tv",396],["lvturbo.com",396],["designtagebuch.de",397],["pixroute.com",398],["uploady.io",399],["calculator-online.net",400],["porngames.club",401],["sexgames.xxx",401],["111.90.159.132",402],["battleplan.news",402],["mobile-tracker-free.com",403],["pfps.gg",404],["ac-illust.com",[405,406]],["photo-ac.com",[405,406]],["vlxxs.net",407],["rapelust.com",407],["vtube.to",407],["vtplay.net",407],["desitelugusex.com",407],["xvideos-downloader.net",407],["xxxvideotube.net",407],["sdefx.cloud",407],["nozomi.la",407],["moviesonlinefree.net",407],["social-unlock.com",408],["superpsx.com",409],["ninja.io",410],["sourceforge.net",411],["samfirms.com",412],["huffpost.com",413],["ingles.com",414],["spanishdict.com",414],["surfline.com",[415,416]],["play.tv3.ee",417],["play.tv3.lt",417],["play.tv3.lv",417],["tv3play.skaties.lv",417],["trendyoum.com",418],["bulbagarden.net",419],["moviestars.to",420],["hollywoodlife.com",421],["mat6tube.com",422],["textstudio.co",423],["newtumbl.com",424],["aruble.net",426],["nevcoins.club",427],["mail.com",428],["oggi.it",[431,432]],["manoramamax.com",431],["video.gazzetta.it",[431,432]],["mangakita.id",433],["mangakita.net",433],["poscishd.online",434],["avpgalaxy.net",435],["mhma12.tech",436],["panda-novel.com",437],["zebranovel.com",437],["lightsnovel.com",437],["eaglesnovel.com",437],["pandasnovel.com",437],["zadfaucet.com",438],["ewrc-results.com",439],["kizi.com",440],["cyberscoop.com",441],["fedscoop.com",441],["canale.live",442],["indiatimes.com",443],["netzwelt.de",444],["mafiatown.pl",[445,446]],["jeep-cj.com",447],["sponsorhunter.com",448],["cloudcomputingtopics.net",449],["likecs.com",450],["tiscali.it",451],["linkspy.cc",452],["tutelehd3.xyz",453],["dirty.pink",[454,455,456]],["adshnk.com",457],["chattanoogan.com",458],["adsy.pw",459],["playstore.pw",459],["socialmediagirls.com",460],["windowspro.de",461],["snapinsta.app",462],["tvtv.ca",463],["tvtv.us",463],["ipalibrary.me",464],["mydaddy.cc",465],["roadtrippin.fr",466],["vavada5com.com",467],["redketchup.io",[468,469,470]],["anyporn.com",[471,486]],["bravoporn.com",471],["bravoteens.com",471],["crocotube.com",471],["hellmoms.com",471],["hellporno.com",471],["sex3.com",471],["tubewolf.com",471],["xbabe.com",471],["xcum.com",471],["zedporn.com",471],["imagetotext.info",472],["infokik.com",473],["freepik.com",474],["ddwloclawek.pl",[475,476]],["deezer.com",477],["my-subs.co",478],["plaion.com",479],["slideshare.net",[480,481]],["ustreasuryyieldcurve.com",482],["businesssoftwarehere.com",483],["goo.st",483],["freevpshere.com",483],["softwaresolutionshere.com",483],["staige.tv",487],["in-jpn.com",488],["oninet.ne.jp",488],["xth.jp",488],["androidadult.com",489],["streamvid.net",490],["watchtv24.com",491],["cellmapper.net",492],["medscape.com",493],["newscon.org",[494,495]],["arkadium.com",496],["bembed.net",497],["elbailedeltroleo.site",497],["embedv.net",497],["fslinks.org",497],["listeamed.net",497],["v6embed.xyz",497],["vgplayer.xyz",497],["vid-guard.com",497],["vidguard.online",497],["app.blubank.com",498],["mobileweb.bankmellat.ir",498],["sportdeutschland.tv",499],["kcra.com",499],["wcvb.com",499],["chat.nrj.fr",500],["ccthesims.com",507],["chromeready.com",507],["coursedrive.org",507],["dtbps3games.com",507],["illustratemagazine.com",507],["uknip.co.uk",507],["vod.pl",508],["megadrive-emulator.com",509],["animesaga.in",512],["moviesapi.club",512],["bestx.stream",512],["watchx.top",512],["digimanie.cz",513],["svethardware.cz",513],["srvy.ninja",514],["drawer-opportunity-i-243.site",515],["tchatche.com",516],["cnn.com",[517,518,519]],["edmdls.com",520],["freshremix.net",520],["scenedl.org",520],["trakt.tv",521],["client.falixnodes.net",522],["shroomers.app",523],["classicalradio.com",524],["di.fm",524],["jazzradio.com",524],["radiotunes.com",524],["rockradio.com",524],["zenradio.com",524],["pc-builds.com",525],["qtoptens.com",525],["reuters.com",525],["today.com",525],["videogamer.com",525],["wrestlinginc.com",525],["gbatemp.net",525],["getthit.com",526],["movie-th.tv",527],["iwanttfc.com",528],["nutraingredients-asia.com",529],["nutraingredients-latam.com",529],["nutraingredients-usa.com",529],["nutraingredients.com",529],["mavenarts.in",530],["ozulscansen.com",531],["nexusmods.com",532],["fitnessbr.click",533],["minhareceita.xyz",533],["doomied.monster",534],["lookmovie2.to",534],["royalroad.com",535],["biletomat.pl",537],["hextank.io",[538,539]],["filmizlehdfilm.com",[540,541,542,543]],["fullfilmizle.cc",[540,541,542,543]],["sagewater.com",545],["redlion.net",545],["satdl.com",546],["vidstreaming.xyz",547],["everand.com",548],["myradioonline.pl",549],["tacobell.com",551],["zefoy.com",552],["cnet.com",553],["natgeotv.com",556],["spankbang.com",[557,558]],["globo.com",559],["wayfair.com",560],["br.de",561],["indeed.com",562],["pasteboard.co",563],["clickhole.com",564],["deadspin.com",564],["gizmodo.com",564],["jalopnik.com",564],["jezebel.com",564],["kotaku.com",564],["lifehacker.com",564],["splinternews.com",564],["theinventory.com",564],["theonion.com",564],["theroot.com",564],["thetakeout.com",564],["pewresearch.org",564],["los40.com",[565,566]],["as.com",566],["telegraph.co.uk",[567,568]],["poweredbycovermore.com",[567,617]],["lumens.com",[567,617]],["verizon.com",569],["humanbenchmark.com",570],["politico.com",571],["officedepot.co.cr",[572,573]],["usnews.com",576],["factable.com",578],["zee5.com",579],["gala.fr",580],["geo.fr",580],["voici.fr",580],["gloucestershirelive.co.uk",581],["arsiv.mackolik.com",582],["jacksonguitars.com",583],["scandichotels.com",584],["stylist.co.uk",585],["nettiauto.com",586],["thaiairways.com",[587,588]],["cerbahealthcare.it",[589,590]],["futura-sciences.com",[589,606]],["tiendaenlinea.claro.com.ni",[591,592]],["tieba.baidu.com",593],["grasshopper.com",[596,597]],["epson.com.cn",[598,599,600,601]],["oe24.at",[602,603]],["szbz.de",602],["platform.autods.com",[604,605]],["wikihow.com",607],["citibank.com.sg",608],["uol.com.br",[609,610,611,612,613]],["gazzetta.gr",614],["digicol.dpm.org.cn",[615,616]],["virginmediatelevision.ie",618],["larazon.es",[619,620]],["waitrosecellar.com",[621,622,623]],["sharpen-free-design-generator.netlify.app",[625,626]],["help.cashctrl.com",[627,628]],["gry-online.pl",629],["vidaextra.com",630],["commande.rhinov.pro",[631,632]],["ecom.wixapps.net",[631,632]],["tipranks.com",[633,634]],["iceland.co.uk",[635,636,637]],["socket.pearsoned.com",638],["tntdrama.com",[639,640]],["trutv.com",[639,640]],["mobile.de",[641,642]],["ioe.vn",[643,644]],["geiriadur.ac.uk",[643,647]],["welsh-dictionary.ac.uk",[643,647]],["bikeportland.org",[645,646]],["biologianet.com",[610,611,612]],["10play.com.au",[648,649]],["sunshine-live.de",[650,651]],["whatismyip.com",[652,653]],["myfitnesspal.com",654],["netoff.co.jp",[655,656]],["clickjogos.com.br",659],["bristan.com",[660,661]],["zillow.com",662],["optimum.net",[666,667]],["investor-web.hdfcfund.com",668],["user.guancha.cn",[669,670]],["sosovalue.com",671],["bandyforbundet.no",[672,673]],["tatacommunications.com",674],["suamusica.com.br",[675,676,677]],["macrotrends.net",[678,679]],["code.world",680],["smartcharts.net",680],["topgear.com",681],["eservice.directauto.com",[682,683]],["nbcsports.com",684],["standard.co.uk",685],["pruefernavi.de",[686,687]],["17track.net",688],["poophq.com",690],["veev.to",690],["uber.com",[691,692]],["jdsports.com",[691,692]],["engadget.com",[691,692]],["yahoo.com",[691,692]],["techcrunch.com",[691,692]],["rivals.com",[691,692]],["kkrt.com",[691,692]],["crunchyroll.com",[691,692]],["dnb.com",[691,692]],["dnb.co.uk",[691,692]],["weather.com",[691,692]],["ubereats.com",[691,692]],["usatoday.com",693]]);

const entitiesMap = new Map([["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,49]],["1movies",[13,16]],["xmovies8",13],["0123movies",13],["gostream",13],["gomovies",13],["primewire",14],["streanplay",[14,15]],["sbplay",14],["milfnut",14],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["link1s",24],["shortzzy",24],["shorttey",[24,192]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,36,78,79,80]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,179]],["upornia",[29,30]],["fmovies",49],["streamwish",[53,54]],["xtits",[57,114]],["pouvideo",59],["povvideo",59],["povw1deo",59],["povwideo",59],["powv1deo",59],["powvibeo",59],["powvideo",59],["powvldeo",59],["plyjam",[64,65]],["fxporn69",70],["vipbox",71],["viprow",71],["desbloqueador",75],["xberuang",76],["teknorizen",76],["subtorrents",84],["subtorrents1",84],["newpelis",84],["pelix",84],["allcalidad",84],["infomaniakos",84],["filecrypt",89],["tornadomovies",95],["icdrama",101],["mangasail",101],["file4go",103],["mangovideo",115],["asianclub",123],["anitube",126],["streamingcommunity",126],["mixdrop",128],["uploadev",152],["ver-pelis-online",160],["ancient-origins",168],["spankbang",185],["lookcam",192],["lootlinks",192],["dpstream",195],["bluemediafiles",197],["docer",222],["hamsterix",239],["xhamster",239],["xhamster1",239],["xhamster10",239],["xhamster11",239],["xhamster12",239],["xhamster13",239],["xhamster14",239],["xhamster15",239],["xhamster16",239],["xhamster17",239],["xhamster18",239],["xhamster19",239],["xhamster20",239],["xhamster2",239],["xhamster3",239],["xhamster4",239],["xhamster42",239],["xhamster5",239],["xhamster7",239],["xhamster8",239],["acortalo",[241,242,243,244]],["acortar",[241,242,243,244]],["a2zapk",248],["kickassanime",263],["doomovie-hd",267],["drakecomic",286],["terabox",309],["ctrlv",344],["123movieshd",370],["uproxy",375],["animesa",376],["cinecalidad",[379,380]],["dvdplay",407],["apkmaven",425],["gmx",429],["gamereactor",485],["vembed",497],["empire-anime",[501,502,503,504,505]],["empire-stream",[501,502,503]],["empire-streaming",[501,502,503]],["empire-streamz",[501,502,503]],["tvhay",[510,511]],["lookmovie",534],["filmizletv",[540,541,542,543]],["www.google",550],["officedepot",[574,575]],["foundit",[657,658]]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[534]]]);

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

uBOL_setConstant();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
