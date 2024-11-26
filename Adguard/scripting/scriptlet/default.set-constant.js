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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["od_abd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["Object.prototype.run","undefined"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["adsbygoogle.loaded","true"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["document.referrer",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["Object.prototype.ads.nopreroll_","true"],["checkAdBlocker","noopFunc"],["ADS.isBannersEnabled","false"],["adBlockerDetected","false"],["univresalP","noopFunc"],["EASYFUN_ADS_CAN_RUN","true"],["navigator.brave","undefined"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["window.navigator.brave","undefined"],["HTMLScriptElement.prototype.onerror","undefined"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["alert","throwFunc"],["app_vars.please_disable_adblock","undefined"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["google_srt","1"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["isadb","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["showBlackout","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","undefined"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["send_recommendation_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["yt.config_.EXPERIMENT_FLAGS.web_bind_fetch","false"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,689]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,624]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,258]],["gadgets.es",[12,258]],["amateurporn.co",[12,116]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,472]],["porngem.com",15],["uploadbank.com",[15,89]],["shortit.pw",[15,100]],["familyporn.tv",15],["id45.cyou",15],["85tube.com",[15,80]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["sankakucomplex.com",19],["player.glomex.com",20],["merkur.de",20],["tz.de",20],["hotpornfile.org",23],["player.tabooporns.com",23],["x69.ovh",23],["wiztube.xyz",23],["netu.frembed.fun",23],["multiup.us",23],["rpdrlatino.live",23],["peliculas8k.com",[23,24]],["video.q34r.org",23],["69x.online",23],["czxxx.org",23],["vtplayer.online",23],["netu.ac",23],["dirtyvideo.fun",24],["adbull.org",25],["mitly.us",25],["linkrex.net",25],["linx.cc",25],["oke.io",25],["dz4link.com",25],["linclik.com",25],["shrt10.com",25],["loptelink.com",25],["cut-fly.com",25],["linkfinal.com",25],["payskip.org",25],["cutpaid.com",25],["forexmab.com",25],["linkjust.com",25],["linkszia.co",25],["leechpremium.link",25],["icutlink.com",[25,121]],["oncehelp.com",25],["rgl.vn",25],["reqlinks.net",25],["bitlk.com",25],["qlinks.eu",25],["link.3dmili.com",25],["short-fly.com",25],["foxseotools.com",25],["pngit.live",25],["link.turkdown.com",25],["urlty.com",25],["7r6.com",25],["oko.sh",25],["ckk.ai",25],["fc.lc",25],["fstore.biz",25],["cuts-url.com",25],["eio.io",25],["exe.app",25],["exee.io",25],["exey.io",25],["skincarie.com",25],["exeo.app",25],["coinlyhub.com",[25,194]],["adsafelink.com",25],["aii.sh",25],["cybertechng.com",[25,207]],["cutdl.xyz",25],["iir.ai",25],["shorteet.com",[25,226]],["smoner.com",25],["gyanlight.com",25],["xpshort.com",25],["upshrink.com",25],["enit.in",[25,221]],["ez4short.com",25],["easysky.in",25],["veganab.co",25],["adrinolinks.in",25],["go.bloggingaro.com",25],["go.gyanitheme.com",25],["go.theforyou.in",25],["go.hipsonyc.com",25],["birdurls.com",25],["vipurl.in",25],["try2link.com",25],["jameeltips.us",25],["gainl.ink",25],["promo-visits.site",25],["satoshi-win.xyz",[25,312]],["shorterall.com",25],["encurtandourl.com",25],["forextrader.site",25],["postazap.com",25],["cety.app",25],["exego.app",[25,307]],["cutlink.net",25],["cutsy.net",25],["cutyurls.com",25],["cutty.app",25],["cutnet.net",25],["tinys.click",[25,207]],["cpm.icu",25],["panyshort.link",25],["enagato.com",25],["pandaznetwork.com",25],["tvi.la",25],["iir.la",25],["tii.la",25],["oei.la",25],["lnbz.la",[25,221]],["oii.la",[25,317]],["tpi.li",[25,317]],["recipestutorials.com",25],["shrinkforearn.in",25],["techyuth.xyz",25],["oii.io",25],["du-link.in",25],["atglinks.com",25],["thotpacks.xyz",25],["megaurl.in",25],["megafly.in",25],["simana.online",25],["fooak.com",25],["joktop.com",25],["evernia.site",25],["falpus.com",25],["link.paid4link.com",[25,321]],["exalink.fun",25],["indiamaja.com",25],["newshuta.in",25],["shortxlinks.com",25],["linksly.co",25],["pkr.pw",25],["imagenesderopaparaperros.com",25],["shortenbuddy.com",25],["apksvip.com",25],["4cash.me",25],["namaidani.com",25],["teknomuda.com",25],["miuiku.com",25],["savelink.site",25],["samaa-pro.com",25],["miklpro.com",25],["modapk.link",25],["1shorten.com",25],["ccurl.net",25],["linkpoi.me",25],["menjelajahi.com",25],["pewgame.com",25],["1link.vip",25],["haonguyen.top",25],["crazyblog.in",25],["gtlink.co",25],["cutearn.net",25],["rshrt.com",25],["filezipa.com",25],["dz-linkk.com",25],["theblissempire.com",25],["finanzas-vida.com",25],["adurly.cc",25],["paid4.link",25],["link.asiaon.top",25],["go.gets4link.com",25],["download.sharenulled.net",25],["beingtek.com",25],["shorturl.unityassets4free.com",25],["disheye.com",25],["techymedies.com",25],["techysuccess.com",25],["za.gl",[25,138]],["bblink.com",25],["myad.biz",25],["swzz.xyz",25],["vevioz.com",25],["charexempire.com",25],["clk.asia",25],["egfly.xyz",25],["linka.click",25],["sturls.com",25],["myshrinker.com",25],["go.adinsurance.xyz",25],["snowurl.com",[25,207]],["netfile.cc",25],["link.insurglobal.xyz",25],["theconomy.me",25],["rocklink.in",25],["adinsurance.xyz",25],["insurglobal.xyz",25],["techgeek.digital",25],["download3s.net",25],["shortx.net",25],["musicc.xyz",25],["shortawy.com",25],["tlin.me",25],["apprepack.com",25],["up-load.one",25],["zuba.link",25],["news.speedynews.xyz",25],["golink.xaydungplus.com",25],["bestcash2020.com",25],["hoxiin.com",25],["technemo.xyz",25],["go.linkbnao.com",25],["link-yz.com",25],["paylinnk.com",25],["thizissam.in",25],["ier.ai",25],["bloggertheme.xyz",25],["adslink.pw",25],["novelssites.com",25],["links.medipost.org",25],["faucetcrypto.net",25],["short.freeltc.top",25],["trxking.xyz",25],["weadown.com",25],["m.bloggingguidance.com",25],["blog.onroid.com",25],["link.codevn.net",25],["upfilesurls.com",25],["shareus.site",25],["link4rev.site",25],["bloginguru.xyz",25],["celinks.net",25],["c2g.at",25],["shortzu.icu",25],["bitcosite.com",[25,485]],["cryptosh.pro",25],["sigmalinks.in",25],["link68.net",25],["traffic123.net",25],["windowslite.net",[25,207]],["viewfr.com",25],["cl1ca.com",25],["4br.me",25],["fir3.net",25],["kiddyshort.com",25],["watchmygf.me",[26,51]],["camwhorez.tv",[26,37,79,80]],["cambay.tv",[26,58,79,113,115,116,117,118]],["thotcity.su",26],["viralxxxporn.com",[26,229]],["fpo.xxx",[26,58]],["sexemix.com",26],["heavyfetish.com",[26,554]],["you-porn.com",28],["youporngay.com",28],["youpornru.com",28],["9908ww.com",28],["adelaidepawnbroker.com",28],["bztube.com",28],["hotovs.com",28],["insuredhome.org",28],["nudegista.com",28],["pornluck.com",28],["vidd.se",28],["pornhub.com",28],["pornerbros.com",29],["freep.com",29],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["viki.com",[35,36]],["sleazyneasy.com",[37,38,39]],["smutr.com",[37,190]],["watchdirty.to",[37,80,81,116]],["yourporngod.com",[37,38]],["javbangers.com",[37,360]],["camfox.com",37],["camthots.tv",[37,113]],["shegotass.info",37],["amateur8.com",37],["bigtitslust.com",37],["ebony8.com",37],["freeporn8.com",37],["lesbian8.com",37],["maturetubehere.com",37],["sortporn.com",37],["webcamvau.com",37],["motherporno.com",[37,38,58,115]],["tktube.com",37],["theporngod.com",[37,38]],["pornsocket.com",40],["luxuretv.com",41],["porndig.com",[42,43]],["webcheats.com.br",44],["ceesty.com",[45,46]],["gestyy.com",[45,46]],["corneey.com",46],["destyy.com",46],["festyy.com",46],["sh.st",46],["mitaku.net",46],["angrybirdsnest.com",47],["zrozz.com",47],["clix4btc.com",47],["4tests.com",47],["planet-explorers-isos.com",47],["business-standard.com",47],["goltelevision.com",47],["news-und-nachrichten.de",47],["laradiobbs.net",47],["urlaubspartner.net",47],["produktion.de",47],["cinemaxxl.de",47],["bladesalvador.com",47],["tempr.email",47],["katfile.com",47],["trust.zone",47],["cshort.org",47],["friendproject.net",47],["covrhub.com",47],["planetsuzy.org",48],["empflix.com",49],["freeplayervideo.com",50],["nazarickol.com",50],["player-cdn.com",50],["playhydrax.com",[50,238,239]],["alleneconomicmatter.com",50],["apinchcaseation.com",50],["bethshouldercan.com",50],["bigclatterhomesguideservice.com",50],["bradleyviewdoctor.com",50],["brittneystandardwestern.com",50],["brookethoughi.com",50],["brucevotewithin.com",50],["cindyeyefinal.com",50],["denisegrowthwide.com",50],["donaldlineelse.com",50],["edwardarriveoften.com",50],["erikcoldperson.com",50],["evelynthankregion.com",50],["graceaddresscommunity.com",50],["heatherdiscussionwhen.com",50],["housecardsummerbutton.com",50],["jamessoundcost.com",50],["jamesstartstudent.com",50],["jamiesamewalk.com",50],["jasminetesttry.com",50],["jasonresponsemeasure.com",50],["jayservicestuff.com",50],["jessicaglassauthor.com",50],["johntryopen.com",50],["josephseveralconcern.com",50],["kennethofficialitem.com",50],["lisatrialidea.com",50],["lorimuchbenefit.com",50],["loriwithinfamily.com",50],["lukecomparetwo.com",50],["markstyleall.com",50],["michaelapplysome.com",50],["morganoperationface.com",50],["nectareousoverelate.com",50],["paulkitchendark.com",50],["rebeccaneverbase.com",50],["roberteachfinal.com",50],["robertplacespace.com",50],["ryanagoinvolve.com",50],["sandratableother.com",50],["sandrataxeight.com",50],["seanshowcould.com",50],["sethniceletter.com",50],["shannonpersonalcost.com",50],["sharonwhiledemocratic.com",50],["stevenimaginelittle.com",50],["strawberriesporail.com",50],["susanhavekeep.com",50],["timberwoodanotia.com",50],["tinycat-voe-fashion.com",50],["toddpartneranimal.com",50],["troyyourlead.com",50],["uptodatefinishconference.com",50],["uptodatefinishconferenceroom.com",50],["vincentincludesuccessful.com",50],["voe.sx",50],["motphimtv.com",50],["rabbitstream.net",50],["projectfreetv.one",50],["transparentcalifornia.com",51],["deepbrid.com",52],["webnovel.com",53],["videosgay.me",[54,55]],["oneupload.to",55],["oneupload.online",55],["wishfast.top",55],["schwaebische.de",56],["8tracks.com",57],["3movs.com",58],["bravoerotica.net",[58,115]],["youx.xxx",58],["camclips.tv",[58,190]],["camflow.tv",[58,115,116,159,229]],["camhoes.tv",[58,113,115,116,159,229]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,115]],["analdin.com",[58,115]],["revealname.com",59],["golfchannel.com",61],["telemundodeportes.com",61],["stream.nbcsports.com",61],["mathdf.com",61],["gamcore.com",62],["porcore.com",62],["69games.xxx",62],["javmix.app",62],["tecknity.com",63],["haaretz.co.il",64],["haaretz.com",64],["hungama.com",64],["a-o.ninja",64],["anime-odcinki.pl",64],["kumpulmanga.org",64],["shortgoo.blogspot.com",64],["tonanmedia.my.id",[64,507]],["yurasu.xyz",64],["isekaipalace.com",64],["vikistream.com",65],["eplayer.click",[65,66]],["mega4upload.com",[66,72]],["ennovelas.com",[66,72]],["n-tv.de",67],["brigitte.de",68],["stern.de",68],["foxsports.com.au",69],["canberratimes.com.au",69],["thesimsresource.com",70],["bdnewszh.com",72],["streamservicehd.click",72],["ctrl.blog",73],["sportlife.es",74],["finofilipino.org",75],["acortarm.xyz",76],["mysflink.blogspot.com",77],["assia.tv",78],["assia4.com",78],["assia24.com",78],["cwtvembeds.com",[80,114]],["xmateur.com",[80,81,116]],["camlovers.tv",80],["porntn.com",80],["pornissimo.org",80],["sexcams-24.com",[80,116]],["watchporn.to",[80,116]],["camwhorez.video",80],["footstockings.com",[80,81,116]],["multi.xxx",81],["worldofbitco.in",[82,83]],["weatherx.co.in",[82,83]],["getyourbitco.in",82],["sunbtc.space",82],["sbs.com.au",84],["ojogos.com.br",86],["powforums.com",87],["supforums.com",87],["studybullet.com",87],["usgamer.net",88],["recordonline.com",88],["freebitcoin.win",91],["e-monsite.com",91],["coindice.win",91],["sport-tv-guide.live",92],["temp-mails.com",93],["freiepresse.de",94],["investing.com",95],["mp3fiber.com",97],["chicoer.com",98],["dailybreeze.com",98],["dailybulletin.com",98],["dailynews.com",98],["delcotimes.com",98],["eastbaytimes.com",98],["macombdaily.com",98],["ocregister.com",98],["pasadenastarnews.com",98],["pe.com",98],["presstelegram.com",98],["redlandsdailyfacts.com",98],["reviewjournal.com",98],["santacruzsentinel.com",98],["saratogian.com",98],["sentinelandenterprise.com",98],["sgvtribune.com",98],["tampabay.com",98],["times-standard.com",98],["theoaklandpress.com",98],["trentonian.com",98],["twincities.com",98],["whittierdailynews.com",98],["bostonherald.com",98],["dailycamera.com",98],["sbsun.com",98],["dailydemocrat.com",98],["montereyherald.com",98],["orovillemr.com",98],["record-bee.com",98],["redbluffdailynews.com",98],["reporterherald.com",98],["thereporter.com",98],["timescall.com",98],["timesheraldonline.com",98],["ukiahdailyjournal.com",98],["dailylocal.com",98],["mercurynews.com",98],["suedkurier.de",99],["anysex.com",101],["vlist.se",102],["pornve.com",103],["coolrom.com.au",104],["pornohirsch.net",105],["marie-claire.es",106],["gamezhero.com",106],["flashgirlgames.com",106],["onlinesudoku.games",106],["mpg.football",106],["sssam.com",106],["globalnews.ca",107],["drinksmixer.com",108],["leitesculinaria.com",108],["fupa.net",109],["browardpalmbeach.com",110],["dallasobserver.com",110],["houstonpress.com",110],["miaminewtimes.com",110],["phoenixnewtimes.com",110],["westword.com",110],["nhentai.net",111],["nowtv.com.tr",112],["caminspector.net",113],["camwhoreshd.com",113],["camgoddess.tv",113],["gay4porn.com",115],["mypornhere.com",115],["camhub.cc",116],["sexwebvideo.com",116],["sexwebvideo.net",116],["love4porn.com",116],["thotvids.com",116],["watchmdh.to",116],["celebwhore.com",116],["cluset.com",116],["4kporn.xxx",116],["xhomealone.com",116],["lusttaboo.com",[116,431]],["hentai-moon.com",116],["mediapason.it",119],["linkspaid.com",119],["tuotromedico.com",119],["neoteo.com",119],["phoneswiki.com",119],["celebmix.com",119],["myneobuxportal.com",119],["oyungibi.com",119],["25yearslatersite.com",119],["jeshoots.com",120],["techhx.com",120],["karanapk.com",120],["flashplayer.fullstacks.net",122],["cloudapps.herokuapp.com",122],["texteditor.nsspot.net",122],["youfiles.herokuapp.com",122],["temp-mail.org",123],["javhdporn.net",124],["comnuan.com",125],["veedi.com",126],["battleboats.io",126],["fruitlab.com",127],["acetack.com",127],["androidquest.com",127],["apklox.com",127],["chhaprawap.in",127],["gujarativyakaran.com",127],["kashmirstudentsinformation.in",127],["kisantime.com",127],["shetkaritoday.in",127],["pastescript.com",127],["trimorspacks.com",127],["updrop.link",127],["haddoz.net",127],["garoetpos.com",127],["stiletv.it",128],["hqtv.biz",130],["liveuamap.com",131],["muvibg.com",131],["audycje.tokfm.pl",132],["hulu.com",[133,134,135]],["shush.se",136],["allkpop.com",137],["pickcrackpasswords.blogspot.com",139],["kfrfansub.com",140],["thuglink.com",140],["voipreview.org",140],["illicoporno.com",141],["lavoixdux.com",141],["tonpornodujour.com",141],["jacquieetmichel.net",141],["jacquieetmicheltv.net",[141,247,248]],["swame.com",141],["vosfemmes.com",141],["voyeurfrance.net",141],["hanime.tv",142],["pogo.com",143],["cloudvideo.tv",144],["legionjuegos.org",145],["legionpeliculas.org",145],["legionprogramas.org",145],["16honeys.com",146],["elespanol.com",147],["remodelista.com",148],["coolmathgames.com",[149,150,151,577]],["audiofanzine.com",152],["hitokin.net",154],["developerinsider.co",155],["ilprimatonazionale.it",156],["hotabis.com",156],["root-nation.com",156],["italpress.com",156],["airsoftmilsimnews.com",156],["artribune.com",156],["thehindu.com",157],["cambro.tv",[158,159]],["nibelungen-kurier.de",160],["adfoc.us",162],["techyember.com",162],["remixbass.com",162],["techipop.com",162],["quickimageconverter.com",162],["mastharyana.com",162],["tea-coffee.net",162],["spatsify.com",162],["newedutopics.com",162],["getviralreach.in",162],["edukaroo.com",162],["funkeypagali.com",162],["careersides.com",162],["nayisahara.com",162],["wikifilmia.com",162],["infinityskull.com",162],["viewmyknowledge.com",162],["iisfvirtual.in",162],["starxinvestor.com",162],["jkssbalerts.com",162],["myprivatejobs.com",[162,308]],["wikitraveltips.com",[162,308]],["amritadrino.com",[162,308]],["sahlmarketing.net",162],["filmypoints.in",162],["fitnessholic.net",162],["moderngyan.com",162],["sattakingcharts.in",162],["freshbhojpuri.com",162],["bgmi32bitapk.in",162],["bankshiksha.in",162],["earn.mpscstudyhub.com",162],["earn.quotesopia.com",162],["money.quotesopia.com",162],["best-mobilegames.com",162],["learn.moderngyan.com",162],["bharatsarkarijobalert.com",162],["quotesopia.com",162],["creditsgoal.com",162],["techacode.com",162],["trickms.com",162],["ielts-isa.edu.vn",162],["sptfy.be",162],["mcafee-com.com",[162,307]],["pianetamountainbike.it",163],["barchart.com",164],["modelisme.com",165],["parasportontario.ca",165],["prescottenews.com",165],["nrj-play.fr",166],["hackingwithreact.com",167],["gutekueche.at",168],["eplfootballmatch.com",169],["peekvids.com",170],["playvids.com",170],["pornflip.com",170],["redensarten-index.de",171],["vw-page.com",172],["viz.com",[173,174]],["0rechner.de",175],["configspc.com",176],["xopenload.me",176],["uptobox.com",176],["uptostream.com",176],["japgay.com",177],["mega-debrid.eu",178],["dreamdth.com",179],["diaridegirona.cat",181],["diariodeibiza.es",181],["diariodemallorca.es",181],["diarioinformacion.com",181],["eldia.es",181],["emporda.info",181],["farodevigo.es",181],["laopinioncoruna.es",181],["laopiniondemalaga.es",181],["laopiniondemurcia.es",181],["laopiniondezamora.es",181],["laprovincia.es",181],["levante-emv.com",181],["mallorcazeitung.es",181],["regio7.cat",181],["superdeporte.es",181],["playpaste.com",182],["player.rtl2.de",183],["cnbc.com",184],["puzzles.msn.com",185],["metro.us",185],["newsobserver.com",185],["arkadiumhosted.com",185],["firefaucet.win",187],["55k.io",188],["filelions.online",188],["stmruby.com",188],["direct-link.net",189],["direkt-wissen.com",189],["link-to.net",189],["fullhdxxx.com",191],["pornclassic.tube",192],["tubepornclassic.com",192],["etonline.com",193],["creatur.io",193],["drphil.com",193],["urbanmilwaukee.com",193],["ontiva.com",193],["hideandseek.world",193],["myabandonware.com",193],["kendam.com",193],["wttw.com",193],["synonyms.com",193],["definitions.net",193],["hostmath.com",193],["camvideoshub.com",193],["minhaconexao.com.br",193],["home-made-videos.com",195],["pxrnxx.xyz",195],["amateur-couples.com",195],["slutdump.com",195],["produsat.com",197],["12thman.com",199],["acusports.com",199],["atlantic10.com",199],["auburntigers.com",199],["baylorbears.com",199],["bceagles.com",199],["bgsufalcons.com",199],["big12sports.com",199],["bigten.org",199],["bradleybraves.com",199],["butlersports.com",199],["cmumavericks.com",199],["conferenceusa.com",199],["cyclones.com",199],["dartmouthsports.com",199],["daytonflyers.com",199],["dbupatriots.com",199],["dbusports.com",199],["denverpioneers.com",199],["fduknights.com",199],["fgcuathletics.com",199],["fightinghawks.com",199],["fightingillini.com",199],["floridagators.com",199],["friars.com",199],["friscofighters.com",199],["gamecocksonline.com",199],["goarmywestpoint.com",199],["gobison.com",199],["goblueraiders.com",199],["gobobcats.com",199],["gocards.com",199],["gocreighton.com",199],["godeacs.com",199],["goexplorers.com",199],["goetbutigers.com",199],["gofrogs.com",199],["gogriffs.com",199],["gogriz.com",199],["golobos.com",199],["gomarquette.com",199],["gopack.com",199],["gophersports.com",199],["goprincetontigers.com",199],["gopsusports.com",199],["goracers.com",199],["goshockers.com",199],["goterriers.com",199],["gotigersgo.com",199],["gousfbulls.com",199],["govandals.com",199],["gowyo.com",199],["goxavier.com",199],["gozags.com",199],["gozips.com",199],["griffinathletics.com",199],["guhoyas.com",199],["gwusports.com",199],["hailstate.com",199],["hamptonpirates.com",199],["hawaiiathletics.com",199],["hokiesports.com",199],["huskers.com",199],["icgaels.com",199],["iuhoosiers.com",199],["jsugamecocksports.com",199],["longbeachstate.com",199],["loyolaramblers.com",199],["lrtrojans.com",199],["lsusports.net",199],["morrisvillemustangs.com",199],["msuspartans.com",199],["muleriderathletics.com",199],["mutigers.com",199],["navysports.com",199],["nevadawolfpack.com",199],["niuhuskies.com",199],["nkunorse.com",199],["nuhuskies.com",199],["nusports.com",199],["okstate.com",199],["olemisssports.com",199],["omavs.com",199],["ovcsports.com",199],["owlsports.com",199],["purduesports.com",199],["redstormsports.com",199],["richmondspiders.com",199],["sfajacks.com",199],["shupirates.com",199],["siusalukis.com",199],["smcgaels.com",199],["smumustangs.com",199],["soconsports.com",199],["soonersports.com",199],["themw.com",199],["tulsahurricane.com",199],["txst.com",199],["txstatebobcats.com",199],["ubbulls.com",199],["ucfknights.com",199],["ucirvinesports.com",199],["uconnhuskies.com",199],["uhcougars.com",199],["uicflames.com",199],["umterps.com",199],["uncwsports.com",199],["unipanthers.com",199],["unlvrebels.com",199],["uoflsports.com",199],["usdtoreros.com",199],["utahstateaggies.com",199],["utepathletics.com",199],["utrockets.com",199],["uvmathletics.com",199],["uwbadgers.com",199],["villanova.com",199],["wkusports.com",199],["wmubroncos.com",199],["woffordterriers.com",199],["1pack1goal.com",199],["bcuathletics.com",199],["bubraves.com",199],["goblackbears.com",199],["golightsgo.com",199],["gomcpanthers.com",199],["goutsa.com",199],["mercerbears.com",199],["pirateblue.com",199],["pirateblue.net",199],["pirateblue.org",199],["quinnipiacbobcats.com",199],["towsontigers.com",199],["tribeathletics.com",199],["tribeclub.com",199],["utepminermaniacs.com",199],["utepminers.com",199],["wkutickets.com",199],["aopathletics.org",199],["atlantichockeyonline.com",199],["bigsouthnetwork.com",199],["bigsouthsports.com",199],["chawomenshockey.com",199],["dbupatriots.org",199],["drakerelays.org",199],["ecac.org",199],["ecacsports.com",199],["emueagles.com",199],["emugameday.com",199],["gculopes.com",199],["godrakebulldog.com",199],["godrakebulldogs.com",199],["godrakebulldogs.net",199],["goeags.com",199],["goislander.com",199],["goislanders.com",199],["gojacks.com",199],["gomacsports.com",199],["gseagles.com",199],["hubison.com",199],["iowaconference.com",199],["ksuowls.com",199],["lonestarconference.org",199],["mascac.org",199],["midwestconference.org",199],["mountaineast.org",199],["niu-pack.com",199],["nulakers.ca",199],["oswegolakers.com",199],["ovcdigitalnetwork.com",199],["pacersports.com",199],["rmacsports.org",199],["rollrivers.com",199],["samfordsports.com",199],["uncpbraves.com",199],["usfdons.com",199],["wiacsports.com",199],["alaskananooks.com",199],["broncathleticfund.com",199],["cameronaggies.com",199],["columbiacougars.com",199],["etownbluejays.com",199],["gobadgers.ca",199],["golancers.ca",199],["gometrostate.com",199],["gothunderbirds.ca",199],["kentstatesports.com",199],["lehighsports.com",199],["lopers.com",199],["lycoathletics.com",199],["lycomingathletics.com",199],["maraudersports.com",199],["mauiinvitational.com",199],["msumavericks.com",199],["nauathletics.com",199],["nueagles.com",199],["nwusports.com",199],["oceanbreezenyc.org",199],["patriotathleticfund.com",199],["pittband.com",199],["principiaathletics.com",199],["roadrunnersathletics.com",199],["sidearmsocial.com",199],["snhupenmen.com",199],["stablerarena.com",199],["stoutbluedevils.com",199],["uwlathletics.com",199],["yumacs.com",199],["collegefootballplayoff.com",199],["csurams.com",199],["cubuffs.com",199],["gobearcats.com",199],["gohuskies.com",199],["mgoblue.com",199],["osubeavers.com",199],["pittsburghpanthers.com",199],["rolltide.com",199],["texassports.com",199],["thesundevils.com",199],["uclabruins.com",199],["wvuathletics.com",199],["wvusports.com",199],["arizonawildcats.com",199],["calbears.com",199],["cuse.com",199],["georgiadogs.com",199],["goducks.com",199],["goheels.com",199],["gostanford.com",199],["insidekstatesports.com",199],["insidekstatesports.info",199],["insidekstatesports.net",199],["insidekstatesports.org",199],["k-stateathletics.com",199],["k-statefootball.net",199],["k-statefootball.org",199],["k-statesports.com",199],["k-statesports.net",199],["k-statesports.org",199],["k-statewomenshoops.com",199],["k-statewomenshoops.net",199],["k-statewomenshoops.org",199],["kstateathletics.com",199],["kstatefootball.net",199],["kstatefootball.org",199],["kstatesports.com",199],["kstatewomenshoops.com",199],["kstatewomenshoops.net",199],["kstatewomenshoops.org",199],["ksuathletics.com",199],["ksusports.com",199],["scarletknights.com",199],["showdownforrelief.com",199],["syracusecrunch.com",199],["texastech.com",199],["theacc.com",199],["ukathletics.com",199],["usctrojans.com",199],["utahutes.com",199],["utsports.com",199],["wsucougars.com",199],["vidlii.com",[199,222]],["tricksplit.io",199],["fangraphs.com",200],["4players.de",[201,289]],["buffed.de",201],["gamesaktuell.de",201],["gamezone.de",201],["pcgames.de",201],["videogameszone.de",201],["tvspielfilm.de",[202,203,204,205]],["tvtoday.de",[202,203,204,205]],["chip.de",[202,203,204,205]],["focus.de",[202,203,204,205]],["planetaminecraft.com",206],["cravesandflames.com",207],["codesnse.com",207],["link.paid4file.com",207],["flyad.vip",207],["lapresse.ca",208],["kolyoom.com",209],["ilovephd.com",209],["negumo.com",210],["games.wkb.jp",[211,212]],["fandom.com",[213,594,595]],["kenshi.fandom.com",214],["hausbau-forum.de",215],["homeairquality.org",215],["faucettronn.click",215],["fake-it.ws",216],["laksa19.github.io",217],["1shortlink.com",218],["nesia.my.id",219],["u-s-news.com",220],["makemoneywithurl.com",221],["junkyponk.com",221],["healthfirstweb.com",221],["vocalley.com",221],["yogablogfit.com",221],["howifx.com",[221,468]],["en.financerites.com",221],["mythvista.com",221],["livenewsflix.com",221],["cureclues.com",221],["apekite.com",221],["host-buzz.com",221],["insmyst.com",221],["wp2host.com",221],["blogtechh.com",221],["techbixby.com",221],["blogmyst.com",221],["iammagnus.com",222],["dailyvideoreports.net",222],["unityassets4free.com",222],["resetoff.pl",223],["sexodi.com",223],["cdn77.org",224],["howtofixwindows.com",225],["3sexporn.com",226],["momxxxsex.com",226],["myfreevintageporn.com",226],["penisbuyutucum.net",226],["ujszo.com",227],["newsmax.com",228],["bobs-tube.com",229],["nadidetarifler.com",230],["siz.tv",230],["suzylu.co.uk",[231,232]],["onworks.net",233],["yabiladi.com",233],["downloadsoft.net",234],["pixsera.net",235],["testlanguages.com",236],["newsinlevels.com",236],["videosinlevels.com",236],["cbs.com",237],["paramountplus.com",237],["abysscdn.com",[238,239]],["buktube.com",240],["fullxh.com",240],["galleryxh.site",240],["megaxh.com",240],["movingxh.world",240],["seexh.com",240],["unlockxh4.com",240],["valuexh.life",240],["xhaccess.com",240],["xhadult2.com",240],["xhadult3.com",240],["xhadult4.com",240],["xhadult5.com",240],["xhamster46.com",240],["xhamsterporno.mx",240],["xhbig.com",240],["xhbranch5.com",240],["xhchannel.com",240],["xhchannel2.com",240],["xhdate.world",240],["xhday.com",240],["xhday1.com",240],["xhlease.world",240],["xhmoon5.com",240],["xhofficial.com",240],["xhopen.com",240],["xhplanet1.com",240],["xhplanet2.com",240],["xhreal2.com",240],["xhreal3.com",240],["xhspot.com",240],["xhtab2.com",240],["xhtab4.com",240],["xhtotal.com",240],["xhtree.com",240],["xhvictory.com",240],["xhwebsite.com",240],["xhwebsite2.com",240],["xhwebsite5.com",240],["xhwide1.com",240],["xhwide2.com",240],["xhwide5.com",240],["xhxh3.xyz",240],["lightnovelworld.com",241],["megadescarga.net",[242,243,244,245]],["megadescargas.net",[242,243,244,245]],["hentaihaven.xxx",246],["jacquieetmicheltv2.net",248],["fcportables.com",[250,251]],["emurom.net",252],["freethesaurus.com",[253,254]],["thefreedictionary.com",[253,254]],["oeffentlicher-dienst.info",255],["dcdlplayer8a06f4.xyz",256],["ultimate-guitar.com",257],["teachmemicro.com",258],["willcycle.com",258],["2ndrun.tv",258],["rackusreads.com",258],["xyzsports111.xyz",[259,260,261]],["xyzsports112.xyz",[259,260,261]],["xyzsports113.xyz",[259,260,261]],["xyzsports114.xyz",[259,260,261]],["xyzsprtsfrmr1.site",[259,260,261]],["xyzsprtsfrmr2.site",[259,260,261]],["claimbits.net",262],["sexyscope.net",263],["recherche-ebook.fr",265],["easymc.io",265],["zonebourse.com",266],["pink-sluts.net",267],["madoohd.com",268],["andhrafriends.com",269],["benzinpreis.de",270],["turtleviplay.xyz",271],["defenseone.com",272],["govexec.com",272],["nextgov.com",272],["route-fifty.com",272],["sharing.wtf",273],["wetter3.de",274],["arahdrive.com",275],["aiimgvlog.fun",[275,307]],["esportivos.fun",276],["cosmonova-broadcast.tv",277],["soccerinhd.com",278],["techedubyte.com",278],["hartvannederland.nl",279],["shownieuws.nl",279],["vandaaginside.nl",279],["rock.porn",[280,281]],["videzz.net",[282,283]],["ezaudiobookforsoul.com",284],["club386.com",285],["androidpolice.com",286],["cbr.com",286],["collider.com",286],["dualshockers.com",286],["gamerant.com",286],["howtogeek.com",286],["makeuseof.com",286],["movieweb.com",286],["screenrant.com",286],["thegamer.com",286],["xda-developers.com",286],["banned.video",286],["madmaxworld.tv",286],["wheelofgold.com",287],["littlebigsnake.com",288],["onlinesoccermanager.com",289],["njav.tv",290],["netfapx.com",290],["easyfun.gg",291],["uploadmall.com",292],["jiocinema.com",292],["rapid-cloud.co",292],["smailpro.com",293],["ilgazzettino.it",294],["ilmessaggero.it",294],["3bmeteo.com",[295,296]],["mconverter.eu",297],["lover937.net",298],["10gb.vn",299],["pes6.es",300],["tactics.tools",[301,302]],["boundhub.com",303],["alocdnnetu.xyz",304],["reliabletv.me",305],["jakondo.ru",306],["starkroboticsfrc.com",307],["sinonimos.de",307],["antonimos.de",307],["quesignifi.ca",307],["tiktokrealtime.com",307],["tiktokcounter.net",307],["tpayr.xyz",307],["poqzn.xyz",307],["ashrfd.xyz",307],["rezsx.xyz",307],["tryzt.xyz",307],["ashrff.xyz",307],["rezst.xyz",307],["dawenet.com",307],["erzar.xyz",307],["waezm.xyz",307],["waezg.xyz",307],["blackwoodacademy.org",307],["cryptednews.space",307],["vivuq.com",307],["swgop.com",307],["vbnmll.com",307],["telcoinfo.online",307],["dshytb.com",307],["fitdynamos.com",[307,309]],["btcbitco.in",[307,311]],["btcsatoshi.net",307],["cempakajaya.com",307],["crypto4yu.com",307],["readbitcoin.org",307],["wiour.com",307],["finish.addurl.biz",307],["laweducationinfo.com",307],["savemoneyinfo.com",307],["worldaffairinfo.com",307],["godstoryinfo.com",307],["successstoryinfo.com",307],["cxissuegk.com",307],["learnmarketinfo.com",307],["bhugolinfo.com",307],["armypowerinfo.com",307],["rsadnetworkinfo.com",307],["rsinsuranceinfo.com",307],["rsfinanceinfo.com",307],["rsgamer.app",307],["rssoftwareinfo.com",307],["rshostinginfo.com",307],["rseducationinfo.com",307],["phonereviewinfo.com",307],["makeincomeinfo.com",307],["gknutshell.com",307],["vichitrainfo.com",307],["workproductivityinfo.com",307],["dopomininfo.com",307],["hostingdetailer.com",307],["fitnesssguide.com",307],["tradingfact4u.com",307],["cryptofactss.com",307],["softwaredetail.com",307],["artoffocas.com",307],["insurancesfact.com",307],["advertisingexcel.com",307],["allcryptoz.net",307],["batmanfactor.com",307],["beautifulfashionnailart.com",307],["crewbase.net",307],["documentaryplanet.xyz",307],["crewus.net",307],["gametechreviewer.com",307],["midebalonu.net",307],["misterio.ro",307],["phineypet.com",307],["seory.xyz",307],["shinbhu.net",307],["shinchu.net",307],["substitutefor.com",307],["talkforfitness.com",307],["thefitbrit.co.uk",307],["thumb8.net",307],["thumb9.net",307],["topcryptoz.net",307],["uniqueten.net",307],["ultraten.net",307],["exactpay.online",307],["kiddyearner.com",307],["luckydice.net",308],["adarima.org",308],["tieutietkiem.com",308],["weatherwx.com",308],["sattaguess.com",308],["winshell.de",308],["rosasidan.ws",308],["modmakers.xyz",308],["gamepure.in",308],["warrenrahul.in",308],["austiblox.net",308],["upiapi.in",308],["myownguess.in",308],["networkhint.com",308],["watchhentai.net",308],["thichcode.net",308],["texturecan.com",308],["tikmate.app",[308,544]],["4funbox.com",310],["nephobox.com",310],["1024tera.com",310],["blog.cryptowidgets.net",311],["blog.insurancegold.in",311],["blog.wiki-topia.com",311],["blog.coinsvalue.net",311],["blog.cookinguide.net",311],["blog.freeoseocheck.com",311],["blog24.me",311],["bildirim.link",313],["appsbull.com",314],["diudemy.com",314],["maqal360.com",314],["lifesurance.info",315],["akcartoons.in",316],["cybercityhelp.in",316],["infokeeda.xyz",318],["webzeni.com",318],["dl.apkmoddone.com",319],["phongroblox.com",319],["apkmodvn.com",320],["streamelements.com",[322,323]],["share.hntv.tv",[323,663,664,665]],["forum.dji.com",[323,665]],["unionpayintl.com",[323,664]],["arcai.com",324],["my-code4you.blogspot.com",325],["flickr.com",326],["firefile.cc",327],["pestleanalysis.com",327],["kochamjp.pl",327],["tutorialforlinux.com",327],["whatsaero.com",327],["animeblkom.net",[327,343]],["blkom.com",327],["globes.co.il",[328,329]],["jardiner-malin.fr",330],["tw-calc.net",331],["ohmybrush.com",332],["talkceltic.net",333],["mentalfloss.com",334],["uprafa.com",335],["cube365.net",336],["nightfallnews.com",[337,338]],["wwwfotografgotlin.blogspot.com",339],["freelistenonline.com",339],["badassdownloader.com",340],["quickporn.net",341],["yellowbridge.com",342],["aosmark.com",344],["atozmath.com",[346,347,348,349,350,351,352]],["newyorker.com",353],["brighteon.com",354],["more.tv",355],["video1tube.com",356],["alohatube.xyz",356],["fshost.me",357],["link.cgtips.org",358],["hentaicloud.com",359],["paperzonevn.com",361],["hentaienglish.com",362],["hentaiporno.xxx",362],["venge.io",[363,364]],["btcbux.io",365],["its.porn",[366,367]],["atv.at",368],["kusonime.com",[369,370]],["jetpunk.com",372],["imgur.com",[373,374,555]],["hentai-party.com",375],["hentaicomics.pro",375],["xxx-comics.pro",375],["genshinimpactcalculator.com",378],["mysexgames.com",379],["embed.indavideo.hu",382],["gdr-online.com",383],["mmm.dk",384],["iqiyi.com",[385,386,536]],["m.iqiyi.com",387],["nbcolympics.com",388],["apkhex.com",389],["indiansexstories2.net",390],["issstories.xyz",390],["1340kbbr.com",391],["gorgeradio.com",391],["kduk.com",391],["kedoam.com",391],["kejoam.com",391],["kelaam.com",391],["khsn1230.com",391],["kjmx.rocks",391],["kloo.com",391],["klooam.com",391],["klykradio.com",391],["kmed.com",391],["kmnt.com",391],["kool991.com",391],["kpnw.com",391],["kppk983.com",391],["krktcountry.com",391],["ktee.com",391],["kwro.com",391],["kxbxfm.com",391],["thevalley.fm",391],["quizlet.com",392],["dsocker1234.blogspot.com",393],["schoolcheats.net",[394,395]],["mgnet.xyz",396],["japopav.tv",397],["lvturbo.com",397],["designtagebuch.de",398],["pixroute.com",399],["uploady.io",400],["calculator-online.net",401],["porngames.club",402],["sexgames.xxx",402],["111.90.159.132",403],["battleplan.news",403],["mobile-tracker-free.com",404],["pfps.gg",405],["ac-illust.com",[406,407]],["photo-ac.com",[406,407]],["vlxxs.net",408],["rapelust.com",408],["vtube.to",408],["vtplay.net",408],["desitelugusex.com",408],["xvideos-downloader.net",408],["xxxvideotube.net",408],["sdefx.cloud",408],["nozomi.la",408],["moviesonlinefree.net",408],["social-unlock.com",409],["superpsx.com",410],["ninja.io",411],["sourceforge.net",412],["samfirms.com",413],["huffpost.com",414],["ingles.com",415],["spanishdict.com",415],["surfline.com",[416,417]],["play.tv3.ee",418],["play.tv3.lt",418],["play.tv3.lv",418],["tv3play.skaties.lv",418],["trendyoum.com",419],["bulbagarden.net",420],["moviestars.to",421],["hollywoodlife.com",422],["mat6tube.com",423],["textstudio.co",424],["newtumbl.com",425],["aruble.net",427],["nevcoins.club",428],["mail.com",429],["oggi.it",[432,433]],["manoramamax.com",432],["video.gazzetta.it",[432,433]],["mangakita.id",434],["mangakita.net",434],["poscishd.online",435],["avpgalaxy.net",436],["mhma12.tech",437],["panda-novel.com",438],["zebranovel.com",438],["lightsnovel.com",438],["eaglesnovel.com",438],["pandasnovel.com",438],["zadfaucet.com",439],["ewrc-results.com",440],["kizi.com",441],["cyberscoop.com",442],["fedscoop.com",442],["canale.live",443],["indiatimes.com",444],["netzwelt.de",445],["mafiatown.pl",[446,447]],["jeep-cj.com",448],["sponsorhunter.com",449],["cloudcomputingtopics.net",450],["likecs.com",451],["tiscali.it",452],["linkspy.cc",453],["tutelehd3.xyz",454],["dirty.pink",[455,456,457]],["adshnk.com",458],["chattanoogan.com",459],["adsy.pw",460],["playstore.pw",460],["socialmediagirls.com",461],["windowspro.de",462],["snapinsta.app",463],["tvtv.ca",464],["tvtv.us",464],["ipalibrary.me",465],["mydaddy.cc",466],["roadtrippin.fr",467],["vavada5com.com",468],["redketchup.io",[469,470,471]],["anyporn.com",[472,487]],["bravoporn.com",472],["bravoteens.com",472],["crocotube.com",472],["hellmoms.com",472],["hellporno.com",472],["sex3.com",472],["tubewolf.com",472],["xbabe.com",472],["xcum.com",472],["zedporn.com",472],["imagetotext.info",473],["infokik.com",474],["freepik.com",475],["ddwloclawek.pl",[476,477]],["deezer.com",478],["my-subs.co",479],["plaion.com",480],["slideshare.net",[481,482]],["ustreasuryyieldcurve.com",483],["businesssoftwarehere.com",484],["goo.st",484],["freevpshere.com",484],["softwaresolutionshere.com",484],["staige.tv",488],["in-jpn.com",489],["oninet.ne.jp",489],["xth.jp",489],["androidadult.com",490],["streamvid.net",491],["watchtv24.com",492],["cellmapper.net",493],["medscape.com",494],["newscon.org",[495,496]],["arkadium.com",497],["bembed.net",498],["elbailedeltroleo.site",498],["embedv.net",498],["fslinks.org",498],["listeamed.net",498],["v6embed.xyz",498],["vgplayer.xyz",498],["vid-guard.com",498],["vidguard.online",498],["app.blubank.com",499],["mobileweb.bankmellat.ir",499],["sportdeutschland.tv",500],["kcra.com",500],["wcvb.com",500],["chat.nrj.fr",501],["ccthesims.com",508],["chromeready.com",508],["coursedrive.org",508],["dtbps3games.com",508],["illustratemagazine.com",508],["uknip.co.uk",508],["vod.pl",509],["megadrive-emulator.com",510],["animesaga.in",513],["moviesapi.club",513],["bestx.stream",513],["watchx.top",513],["digimanie.cz",514],["svethardware.cz",514],["srvy.ninja",515],["drawer-opportunity-i-243.site",516],["tchatche.com",517],["cnn.com",[518,519,520]],["edmdls.com",521],["freshremix.net",521],["scenedl.org",521],["trakt.tv",522],["client.falixnodes.net",523],["shroomers.app",524],["classicalradio.com",525],["di.fm",525],["jazzradio.com",525],["radiotunes.com",525],["rockradio.com",525],["zenradio.com",525],["pc-builds.com",526],["qtoptens.com",526],["reuters.com",526],["today.com",526],["videogamer.com",526],["wrestlinginc.com",526],["gbatemp.net",526],["movie-th.tv",527],["iwanttfc.com",528],["nutraingredients-asia.com",529],["nutraingredients-latam.com",529],["nutraingredients-usa.com",529],["nutraingredients.com",529],["mavenarts.in",530],["ozulscansen.com",531],["nexusmods.com",532],["fitnessbr.click",533],["minhareceita.xyz",533],["doomied.monster",534],["lookmovie2.to",534],["royalroad.com",535],["biletomat.pl",537],["hextank.io",[538,539]],["filmizlehdfilm.com",[540,541,542,543]],["fullfilmizle.cc",[540,541,542,543]],["sagewater.com",545],["redlion.net",545],["satdl.com",546],["vidstreaming.xyz",547],["everand.com",548],["myradioonline.pl",549],["tacobell.com",551],["zefoy.com",552],["cnet.com",553],["natgeotv.com",556],["spankbang.com",[557,558]],["globo.com",559],["wayfair.com",560],["br.de",561],["indeed.com",562],["pasteboard.co",563],["clickhole.com",564],["deadspin.com",564],["gizmodo.com",564],["jalopnik.com",564],["jezebel.com",564],["kotaku.com",564],["lifehacker.com",564],["splinternews.com",564],["theinventory.com",564],["theonion.com",564],["theroot.com",564],["thetakeout.com",564],["pewresearch.org",564],["los40.com",[565,566]],["as.com",566],["telegraph.co.uk",[567,568]],["poweredbycovermore.com",[567,617]],["lumens.com",[567,617]],["verizon.com",569],["humanbenchmark.com",570],["politico.com",571],["officedepot.co.cr",[572,573]],["usnews.com",576],["factable.com",578],["zee5.com",579],["gala.fr",580],["geo.fr",580],["voici.fr",580],["gloucestershirelive.co.uk",581],["arsiv.mackolik.com",582],["jacksonguitars.com",583],["scandichotels.com",584],["stylist.co.uk",585],["nettiauto.com",586],["thaiairways.com",[587,588]],["cerbahealthcare.it",[589,590]],["futura-sciences.com",[589,606]],["tiendaenlinea.claro.com.ni",[591,592]],["tieba.baidu.com",593],["grasshopper.com",[596,597]],["epson.com.cn",[598,599,600,601]],["oe24.at",[602,603]],["szbz.de",602],["platform.autods.com",[604,605]],["wikihow.com",607],["citibank.com.sg",608],["uol.com.br",[609,610,611,612,613]],["gazzetta.gr",614],["digicol.dpm.org.cn",[615,616]],["virginmediatelevision.ie",618],["larazon.es",[619,620]],["waitrosecellar.com",[621,622,623]],["sharpen-free-design-generator.netlify.app",[625,626]],["help.cashctrl.com",[627,628]],["gry-online.pl",629],["vidaextra.com",630],["commande.rhinov.pro",[631,632]],["ecom.wixapps.net",[631,632]],["tipranks.com",[633,634]],["iceland.co.uk",[635,636,637]],["socket.pearsoned.com",638],["tntdrama.com",[639,640]],["mobile.de",[641,642]],["ioe.vn",[643,644]],["geiriadur.ac.uk",[643,647]],["welsh-dictionary.ac.uk",[643,647]],["bikeportland.org",[645,646]],["biologianet.com",[610,611,612]],["10play.com.au",[648,649]],["sunshine-live.de",[650,651]],["whatismyip.com",[652,653]],["myfitnesspal.com",654],["netoff.co.jp",[655,656]],["clickjogos.com.br",659],["bristan.com",[660,661]],["zillow.com",662],["optimum.net",[666,667]],["investor-web.hdfcfund.com",668],["user.guancha.cn",[669,670]],["sosovalue.com",671],["bandyforbundet.no",[672,673]],["tatacommunications.com",674],["suamusica.com.br",[675,676,677]],["macrotrends.net",[678,679]],["code.world",680],["smartcharts.net",680],["topgear.com",681],["eservice.directauto.com",[682,683]],["nbcsports.com",684],["standard.co.uk",685],["pruefernavi.de",[686,687]],["17track.net",688],["poophq.com",690],["veev.to",690],["uber.com",[691,692]],["jdsports.com",[691,692]],["engadget.com",[691,692]],["yahoo.com",[691,692]],["techcrunch.com",[691,692]],["rivals.com",[691,692]],["kkrt.com",[691,692]],["crunchyroll.com",[691,692]],["dnb.com",[691,692]],["dnb.co.uk",[691,692]],["weather.com",[691,692]],["ubereats.com",[691,692]],["usatoday.com",693]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,50]],["1movies",[14,17]],["xmovies8",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",21],["hqq",[22,23]],["waaw",[23,24]],["younetu",23],["vvtplayer",23],["123link",25],["adshort",25],["linkshorts",25],["adsrt",25],["vinaurl",25],["adfloz",25],["dutchycorp",25],["shortearn",25],["pingit",25],["shrink",25],["tmearn",25],["megalink",25],["miniurl",25],["gplinks",25],["clk",25],["pureshort",25],["shrinke",25],["shrinkme",25],["link1s",25],["shortzzy",25],["shorttey",[25,193]],["lite-link",25],["adcorto",25],["zshort",25],["upfiles",25],["linkfly",25],["wplink",25],["seulink",25],["encurtalink",25],["camwhores",[26,37,79,80,81]],["tube8",[27,28]],["youporn",28],["redtube",28],["pornhub",[28,180]],["upornia",[30,31]],["fmovies",50],["streamwish",[54,55]],["xtits",[58,115]],["pouvideo",60],["povvideo",60],["povw1deo",60],["povwideo",60],["powv1deo",60],["powvibeo",60],["powvideo",60],["powvldeo",60],["plyjam",[65,66]],["fxporn69",71],["vipbox",72],["viprow",72],["desbloqueador",76],["xberuang",77],["teknorizen",77],["subtorrents",85],["subtorrents1",85],["newpelis",85],["pelix",85],["allcalidad",85],["infomaniakos",85],["filecrypt",90],["tornadomovies",96],["icdrama",102],["mangasail",102],["file4go",104],["mangovideo",116],["asianclub",124],["anitube",127],["streamingcommunity",127],["mixdrop",129],["uploadev",153],["ver-pelis-online",161],["ancient-origins",169],["spankbang",186],["lookcam",193],["lootlinks",193],["dpstream",196],["bluemediafiles",198],["docer",223],["hamsterix",240],["xhamster",240],["xhamster1",240],["xhamster10",240],["xhamster11",240],["xhamster12",240],["xhamster13",240],["xhamster14",240],["xhamster15",240],["xhamster16",240],["xhamster17",240],["xhamster18",240],["xhamster19",240],["xhamster20",240],["xhamster2",240],["xhamster3",240],["xhamster4",240],["xhamster42",240],["xhamster5",240],["xhamster7",240],["xhamster8",240],["acortalo",[242,243,244,245]],["acortar",[242,243,244,245]],["a2zapk",249],["kickassanime",264],["doomovie-hd",268],["drakecomic",287],["terabox",310],["ctrlv",345],["123movieshd",371],["uproxy",376],["animesa",377],["cinecalidad",[380,381]],["dvdplay",408],["apkmaven",426],["gmx",430],["gamereactor",486],["vembed",498],["empire-anime",[502,503,504,505,506]],["empire-stream",[502,503,504]],["empire-streaming",[502,503,504]],["empire-streamz",[502,503,504]],["tvhay",[511,512]],["lookmovie",534],["filmizletv",[540,541,542,543]],["www.google",550],["officedepot",[574,575]],["foundit",[657,658]]]);

const exceptionsMap = new Map([["pingit.com",[25]],["pingit.me",[25]],["lookmovie.studio",[534]]]);

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
