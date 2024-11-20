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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["od_abd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["Object.prototype.run","undefined"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["majorse","true"],["completed","1"],["testerli","false"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["Object.prototype.ads.nopreroll_","true"],["checkAdBlocker","noopFunc"],["ADS.isBannersEnabled","false"],["adBlockerDetected","false"],["univresalP","noopFunc"],["EASYFUN_ADS_CAN_RUN","true"],["navigator.brave","undefined"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["Object.prototype.DetectByGoogleAd","noopFunc"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["NativeAd","noopFunc"],["Blob","noopFunc"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["alert","throwFunc"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["google_srt","1"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["penciBlocksArray","[]"],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["window.myAd.runAd","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["showBlackout","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["googletag","undefined"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["blockingAds","false"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["send_gravity_event","noopFunc"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["ga.sendGaEvent","noopFunc"],["yt.config_.EXPERIMENT_FLAGS.web_bind_fetch","false"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,685]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,620]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,258]],["gadgets.es",[12,258]],["amateurporn.co",[12,116]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,469]],["porngem.com",15],["uploadbank.com",[15,89]],["shortit.pw",[15,100]],["familyporn.tv",15],["cloudemb.com",[15,385]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,80]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["sankakucomplex.com",19],["player.glomex.com",20],["merkur.de",20],["tz.de",20],["hotpornfile.org",23],["player.tabooporns.com",23],["x69.ovh",23],["wiztube.xyz",23],["netu.frembed.fun",23],["multiup.us",23],["rpdrlatino.live",23],["peliculas8k.com",[23,24]],["video.q34r.org",23],["69x.online",23],["czxxx.org",23],["vtplayer.online",23],["netu.ac",23],["dirtyvideo.fun",24],["adbull.org",25],["mitly.us",25],["linkrex.net",25],["linx.cc",25],["oke.io",25],["dz4link.com",25],["linclik.com",25],["shrt10.com",25],["loptelink.com",25],["cut-fly.com",25],["linkfinal.com",25],["payskip.org",25],["cutpaid.com",25],["forexmab.com",25],["linkjust.com",25],["linkszia.co",25],["leechpremium.link",25],["icutlink.com",[25,121]],["oncehelp.com",25],["rgl.vn",25],["reqlinks.net",25],["bitlk.com",25],["qlinks.eu",25],["link.3dmili.com",25],["short-fly.com",25],["foxseotools.com",25],["pngit.live",25],["link.turkdown.com",25],["urlty.com",25],["7r6.com",25],["oko.sh",25],["ckk.ai",25],["fc.lc",25],["fstore.biz",25],["cuts-url.com",25],["eio.io",25],["exe.app",25],["exee.io",25],["exey.io",25],["skincarie.com",25],["exeo.app",25],["coinlyhub.com",[25,196]],["adsafelink.com",25],["aii.sh",25],["cybertechng.com",[25,209]],["cutdl.xyz",25],["iir.ai",25],["shorteet.com",[25,227]],["smoner.com",25],["gyanlight.com",25],["xpshort.com",25],["upshrink.com",25],["enit.in",[25,223]],["ez4short.com",25],["easysky.in",25],["veganab.co",25],["adrinolinks.in",25],["go.bloggingaro.com",25],["go.gyanitheme.com",25],["go.theforyou.in",25],["go.hipsonyc.com",25],["birdurls.com",25],["vipurl.in",25],["try2link.com",25],["jameeltips.us",25],["gainl.ink",25],["promo-visits.site",25],["satoshi-win.xyz",[25,310]],["shorterall.com",25],["encurtandourl.com",25],["forextrader.site",25],["postazap.com",25],["cety.app",25],["exego.app",[25,305]],["cutlink.net",25],["cutsy.net",25],["cutyurls.com",25],["cutty.app",25],["cutnet.net",25],["tinys.click",[25,209]],["cpm.icu",25],["panyshort.link",25],["enagato.com",25],["pandaznetwork.com",25],["tvi.la",25],["iir.la",25],["tii.la",25],["oei.la",25],["lnbz.la",[25,223]],["oii.la",25],["tpi.li",25],["recipestutorials.com",25],["shrinkforearn.in",25],["techyuth.xyz",25],["oii.io",25],["du-link.in",25],["atglinks.com",25],["thotpacks.xyz",25],["megaurl.in",25],["megafly.in",25],["simana.online",25],["fooak.com",25],["joktop.com",25],["evernia.site",25],["falpus.com",25],["link.paid4link.com",[25,318]],["exalink.fun",25],["indiamaja.com",25],["newshuta.in",25],["shortxlinks.com",25],["linksly.co",25],["pkr.pw",25],["imagenesderopaparaperros.com",25],["shortenbuddy.com",25],["apksvip.com",25],["4cash.me",25],["namaidani.com",25],["teknomuda.com",25],["miuiku.com",25],["savelink.site",25],["samaa-pro.com",25],["miklpro.com",25],["modapk.link",25],["1shorten.com",25],["ccurl.net",25],["linkpoi.me",25],["menjelajahi.com",25],["pewgame.com",25],["1link.vip",25],["haonguyen.top",25],["crazyblog.in",25],["gtlink.co",25],["link.tokenoto.com",25],["cutearn.net",25],["rshrt.com",25],["filezipa.com",25],["dz-linkk.com",25],["theblissempire.com",25],["finanzas-vida.com",25],["adurly.cc",25],["paid4.link",25],["link.asiaon.top",25],["go.gets4link.com",25],["download.sharenulled.net",25],["beingtek.com",25],["shorturl.unityassets4free.com",25],["disheye.com",25],["techymedies.com",25],["techysuccess.com",25],["za.gl",[25,138]],["bblink.com",25],["myad.biz",25],["swzz.xyz",25],["vevioz.com",25],["charexempire.com",25],["clk.asia",25],["egfly.xyz",25],["linka.click",25],["sturls.com",25],["myshrinker.com",25],["go.adinsurance.xyz",25],["snowurl.com",[25,209]],["netfile.cc",25],["link.insurglobal.xyz",25],["theconomy.me",25],["rocklink.in",25],["adinsurance.xyz",25],["insurglobal.xyz",25],["techgeek.digital",25],["download3s.net",25],["shortx.net",25],["musicc.xyz",25],["shortawy.com",25],["tlin.me",25],["apprepack.com",25],["up-load.one",25],["zuba.link",25],["news.speedynews.xyz",25],["golink.xaydungplus.com",25],["bestcash2020.com",25],["hoxiin.com",25],["technemo.xyz",25],["go.linkbnao.com",25],["link-yz.com",25],["paylinnk.com",25],["thizissam.in",25],["ier.ai",25],["bloggertheme.xyz",25],["adslink.pw",25],["novelssites.com",25],["links.medipost.org",25],["faucetcrypto.net",25],["short.freeltc.top",25],["trxking.xyz",25],["weadown.com",25],["m.bloggingguidance.com",25],["blog.onroid.com",25],["link.codevn.net",25],["upfilesurls.com",25],["shareus.site",25],["link4rev.site",25],["bloginguru.xyz",25],["celinks.net",25],["c2g.at",25],["shortzu.icu",25],["bitcosite.com",[25,482]],["cryptosh.pro",25],["sigmalinks.in",25],["link68.net",25],["traffic123.net",25],["windowslite.net",[25,209]],["viewfr.com",25],["cl1ca.com",25],["4br.me",25],["fir3.net",25],["kiddyshort.com",25],["watchmygf.me",[26,51]],["camwhorez.tv",[26,37,79,80]],["cambay.tv",[26,58,79,113,115,116,117,118]],["thotcity.su",26],["fpo.xxx",[26,58]],["sexemix.com",26],["heavyfetish.com",[26,551]],["you-porn.com",28],["youporngay.com",28],["youpornru.com",28],["9908ww.com",28],["adelaidepawnbroker.com",28],["bztube.com",28],["hotovs.com",28],["insuredhome.org",28],["nudegista.com",28],["pornluck.com",28],["vidd.se",28],["pornhub.com",28],["pornerbros.com",29],["freep.com",29],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["viki.com",[35,36]],["sleazyneasy.com",[37,38,39]],["smutr.com",[37,192]],["watchdirty.to",[37,80,81,116]],["yourporngod.com",[37,38]],["javbangers.com",[37,357]],["camfox.com",37],["camthots.tv",[37,113]],["shegotass.info",37],["amateur8.com",37],["bigtitslust.com",37],["ebony8.com",37],["freeporn8.com",37],["lesbian8.com",37],["maturetubehere.com",37],["sortporn.com",37],["webcamvau.com",37],["motherporno.com",[37,38,58,115]],["tktube.com",37],["theporngod.com",[37,38]],["pornsocket.com",40],["luxuretv.com",41],["porndig.com",[42,43]],["webcheats.com.br",44],["ceesty.com",[45,46]],["gestyy.com",[45,46]],["corneey.com",46],["destyy.com",46],["festyy.com",46],["sh.st",46],["mitaku.net",46],["angrybirdsnest.com",47],["zrozz.com",47],["clix4btc.com",47],["4tests.com",47],["planet-explorers-isos.com",47],["business-standard.com",47],["goltelevision.com",47],["news-und-nachrichten.de",47],["laradiobbs.net",47],["urlaubspartner.net",47],["produktion.de",47],["cinemaxxl.de",47],["bladesalvador.com",47],["tempr.email",47],["katfile.com",47],["trust.zone",47],["cshort.org",47],["friendproject.net",47],["covrhub.com",47],["planetsuzy.org",48],["empflix.com",49],["freeplayervideo.com",50],["nazarickol.com",50],["player-cdn.com",50],["playhydrax.com",[50,239,240]],["alleneconomicmatter.com",50],["apinchcaseation.com",50],["bethshouldercan.com",50],["bigclatterhomesguideservice.com",50],["bradleyviewdoctor.com",50],["brookethoughi.com",50],["brucevotewithin.com",50],["cindyeyefinal.com",50],["denisegrowthwide.com",50],["donaldlineelse.com",50],["edwardarriveoften.com",50],["erikcoldperson.com",50],["evelynthankregion.com",50],["graceaddresscommunity.com",50],["heatherdiscussionwhen.com",50],["housecardsummerbutton.com",50],["jamessoundcost.com",50],["jamesstartstudent.com",50],["jamiesamewalk.com",50],["jasminetesttry.com",50],["jasonresponsemeasure.com",50],["jayservicestuff.com",50],["jessicaglassauthor.com",50],["johntryopen.com",50],["josephseveralconcern.com",50],["kennethofficialitem.com",50],["lisatrialidea.com",50],["lorimuchbenefit.com",50],["loriwithinfamily.com",50],["lukecomparetwo.com",50],["markstyleall.com",50],["michaelapplysome.com",50],["morganoperationface.com",50],["nectareousoverelate.com",50],["paulkitchendark.com",50],["rebeccaneverbase.com",50],["roberteachfinal.com",50],["robertplacespace.com",50],["ryanagoinvolve.com",50],["sandrataxeight.com",50],["seanshowcould.com",50],["sethniceletter.com",50],["shannonpersonalcost.com",50],["sharonwhiledemocratic.com",50],["stevenimaginelittle.com",50],["strawberriesporail.com",50],["susanhavekeep.com",50],["timberwoodanotia.com",50],["tinycat-voe-fashion.com",50],["toddpartneranimal.com",50],["troyyourlead.com",50],["uptodatefinishconference.com",50],["uptodatefinishconferenceroom.com",50],["vincentincludesuccessful.com",50],["voe.sx",50],["motphimtv.com",50],["rabbitstream.net",50],["projectfreetv.one",50],["transparentcalifornia.com",51],["deepbrid.com",52],["webnovel.com",53],["videosgay.me",[54,55]],["oneupload.to",55],["oneupload.online",55],["wishfast.top",55],["schwaebische.de",56],["8tracks.com",57],["3movs.com",58],["bravoerotica.net",[58,115]],["youx.xxx",58],["camclips.tv",[58,192]],["camflow.tv",[58,115,116,159,230]],["camhoes.tv",[58,113,115,116,159,230]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,115]],["analdin.com",[58,115]],["revealname.com",59],["golfchannel.com",61],["telemundodeportes.com",61],["stream.nbcsports.com",61],["mathdf.com",61],["gamcore.com",62],["porcore.com",62],["69games.xxx",62],["javmix.app",62],["tecknity.com",63],["haaretz.co.il",64],["haaretz.com",64],["hungama.com",64],["a-o.ninja",64],["anime-odcinki.pl",64],["kumpulmanga.org",64],["shortgoo.blogspot.com",64],["tonanmedia.my.id",[64,504]],["yurasu.xyz",64],["isekaipalace.com",64],["vikistream.com",65],["eplayer.click",[65,66]],["mega4upload.com",[66,72]],["ennovelas.com",[66,72]],["n-tv.de",67],["brigitte.de",68],["stern.de",68],["foxsports.com.au",69],["canberratimes.com.au",69],["thesimsresource.com",70],["bdnewszh.com",72],["streamservicehd.click",72],["ctrl.blog",73],["sportlife.es",74],["finofilipino.org",75],["acortarm.xyz",76],["mysflink.blogspot.com",77],["assia.tv",78],["assia4.com",78],["assia24.com",78],["cwtvembeds.com",[80,114]],["xmateur.com",[80,81,116]],["camlovers.tv",80],["porntn.com",80],["pornissimo.org",80],["sexcams-24.com",[80,116]],["watchporn.to",[80,116]],["camwhorez.video",80],["footstockings.com",[80,81,116]],["multi.xxx",81],["worldofbitco.in",[82,83]],["weatherx.co.in",[82,83]],["getyourbitco.in",82],["sunbtc.space",82],["sbs.com.au",84],["ojogos.com.br",86],["powforums.com",87],["supforums.com",87],["studybullet.com",87],["usgamer.net",88],["recordonline.com",88],["freebitcoin.win",91],["e-monsite.com",91],["coindice.win",91],["sport-tv-guide.live",92],["temp-mails.com",93],["freiepresse.de",94],["investing.com",95],["mp3fiber.com",97],["chicoer.com",98],["dailybreeze.com",98],["dailybulletin.com",98],["dailynews.com",98],["delcotimes.com",98],["eastbaytimes.com",98],["macombdaily.com",98],["ocregister.com",98],["pasadenastarnews.com",98],["pe.com",98],["presstelegram.com",98],["redlandsdailyfacts.com",98],["reviewjournal.com",98],["santacruzsentinel.com",98],["saratogian.com",98],["sentinelandenterprise.com",98],["sgvtribune.com",98],["tampabay.com",98],["times-standard.com",98],["theoaklandpress.com",98],["trentonian.com",98],["twincities.com",98],["whittierdailynews.com",98],["bostonherald.com",98],["dailycamera.com",98],["sbsun.com",98],["dailydemocrat.com",98],["montereyherald.com",98],["orovillemr.com",98],["record-bee.com",98],["redbluffdailynews.com",98],["reporterherald.com",98],["thereporter.com",98],["timescall.com",98],["timesheraldonline.com",98],["ukiahdailyjournal.com",98],["dailylocal.com",98],["mercurynews.com",98],["suedkurier.de",99],["anysex.com",101],["vlist.se",102],["pornve.com",103],["coolrom.com.au",104],["pornohirsch.net",105],["marie-claire.es",106],["gamezhero.com",106],["flashgirlgames.com",106],["onlinesudoku.games",106],["mpg.football",106],["sssam.com",106],["globalnews.ca",107],["drinksmixer.com",108],["leitesculinaria.com",108],["fupa.net",109],["browardpalmbeach.com",110],["dallasobserver.com",110],["houstonpress.com",110],["miaminewtimes.com",110],["phoenixnewtimes.com",110],["westword.com",110],["nhentai.net",111],["nowtv.com.tr",112],["caminspector.net",113],["camwhoreshd.com",113],["camgoddess.tv",113],["gay4porn.com",115],["mypornhere.com",115],["camhub.cc",116],["sexwebvideo.com",116],["sexwebvideo.net",116],["love4porn.com",116],["thotvids.com",116],["watchmdh.to",116],["celebwhore.com",116],["cluset.com",116],["4kporn.xxx",116],["xhomealone.com",116],["lusttaboo.com",[116,428]],["hentai-moon.com",116],["mediapason.it",119],["linkspaid.com",119],["tuotromedico.com",119],["neoteo.com",119],["phoneswiki.com",119],["celebmix.com",119],["myneobuxportal.com",119],["oyungibi.com",119],["25yearslatersite.com",119],["jeshoots.com",120],["techhx.com",120],["karanapk.com",120],["flashplayer.fullstacks.net",122],["cloudapps.herokuapp.com",122],["texteditor.nsspot.net",122],["youfiles.herokuapp.com",122],["temp-mail.org",123],["javhdporn.net",124],["comnuan.com",125],["veedi.com",126],["battleboats.io",126],["fruitlab.com",127],["acetack.com",127],["androidquest.com",127],["apklox.com",127],["chhaprawap.in",127],["gujarativyakaran.com",127],["kashmirstudentsinformation.in",127],["kisantime.com",127],["shetkaritoday.in",127],["pastescript.com",127],["trimorspacks.com",127],["updrop.link",127],["haddoz.net",127],["garoetpos.com",127],["stiletv.it",128],["hqtv.biz",130],["liveuamap.com",131],["muvibg.com",131],["audycje.tokfm.pl",132],["hulu.com",[133,134,135]],["shush.se",136],["allkpop.com",137],["pickcrackpasswords.blogspot.com",139],["kfrfansub.com",140],["thuglink.com",140],["voipreview.org",140],["illicoporno.com",141],["lavoixdux.com",141],["tonpornodujour.com",141],["jacquieetmichel.net",141],["jacquieetmicheltv.net",[141,248,249]],["swame.com",141],["vosfemmes.com",141],["voyeurfrance.net",141],["hanime.tv",142],["pogo.com",143],["cloudvideo.tv",144],["legionjuegos.org",145],["legionpeliculas.org",145],["legionprogramas.org",145],["16honeys.com",146],["elespanol.com",147],["remodelista.com",148],["coolmathgames.com",[149,150,151,573]],["audiofanzine.com",152],["hitokin.net",154],["developerinsider.co",155],["ilprimatonazionale.it",156],["hotabis.com",156],["root-nation.com",156],["italpress.com",156],["airsoftmilsimnews.com",156],["artribune.com",156],["thehindu.com",157],["cambro.tv",[158,159]],["nibelungen-kurier.de",160],["adfoc.us",162],["techyember.com",162],["remixbass.com",162],["techipop.com",162],["quickimageconverter.com",162],["mastharyana.com",162],["tea-coffee.net",162],["spatsify.com",162],["newedutopics.com",162],["getviralreach.in",162],["edukaroo.com",162],["funkeypagali.com",162],["careersides.com",162],["nayisahara.com",162],["wikifilmia.com",162],["infinityskull.com",162],["viewmyknowledge.com",162],["iisfvirtual.in",162],["starxinvestor.com",162],["jkssbalerts.com",162],["myprivatejobs.com",[162,306]],["wikitraveltips.com",[162,306]],["amritadrino.com",[162,306]],["sahlmarketing.net",162],["filmypoints.in",162],["fitnessholic.net",162],["moderngyan.com",162],["sattakingcharts.in",162],["freshbhojpuri.com",162],["bgmi32bitapk.in",162],["bankshiksha.in",162],["earn.mpscstudyhub.com",162],["earn.quotesopia.com",162],["money.quotesopia.com",162],["best-mobilegames.com",162],["learn.moderngyan.com",162],["bharatsarkarijobalert.com",162],["quotesopia.com",162],["creditsgoal.com",162],["techacode.com",162],["trickms.com",162],["ielts-isa.edu.vn",162],["sptfy.be",162],["mcafee-com.com",[162,305]],["pianetamountainbike.it",163],["barchart.com",164],["modelisme.com",165],["parasportontario.ca",165],["prescottenews.com",165],["nrj-play.fr",166],["hackingwithreact.com",167],["gutekueche.at",168],["eplfootballmatch.com",169],["peekvids.com",170],["playvids.com",170],["pornflip.com",170],["redensarten-index.de",171],["vw-page.com",172],["viz.com",[173,174]],["0rechner.de",175],["configspc.com",176],["xopenload.me",176],["uptobox.com",176],["uptostream.com",176],["onepiece-tube.com",177],["japgay.com",178],["mega-debrid.eu",179],["dreamdth.com",180],["diaridegirona.cat",182],["diariodeibiza.es",182],["diariodemallorca.es",182],["diarioinformacion.com",182],["eldia.es",182],["emporda.info",182],["farodevigo.es",182],["laopinioncoruna.es",182],["laopiniondemalaga.es",182],["laopiniondemurcia.es",182],["laopiniondezamora.es",182],["laprovincia.es",182],["levante-emv.com",182],["mallorcazeitung.es",182],["regio7.cat",182],["superdeporte.es",182],["playpaste.com",183],["player.rtl2.de",184],["freetutorialsus.com",185],["vidlii.com",[185,201]],["iammagnus.com",185],["dailyvideoreports.net",185],["unityassets4free.com",185],["cnbc.com",186],["puzzles.msn.com",187],["metro.us",187],["newsobserver.com",187],["arkadiumhosted.com",187],["firefaucet.win",189],["55k.io",190],["filelions.online",190],["stmruby.com",190],["direct-link.net",191],["direkt-wissen.com",191],["link-to.net",191],["fullhdxxx.com",193],["pornclassic.tube",194],["tubepornclassic.com",194],["etonline.com",195],["creatur.io",195],["drphil.com",195],["urbanmilwaukee.com",195],["ontiva.com",195],["hideandseek.world",195],["myabandonware.com",195],["kendam.com",195],["wttw.com",195],["synonyms.com",195],["definitions.net",195],["hostmath.com",195],["camvideoshub.com",195],["minhaconexao.com.br",195],["home-made-videos.com",197],["pxrnxx.xyz",197],["amateur-couples.com",197],["slutdump.com",197],["produsat.com",199],["12thman.com",201],["acusports.com",201],["atlantic10.com",201],["auburntigers.com",201],["baylorbears.com",201],["bceagles.com",201],["bgsufalcons.com",201],["big12sports.com",201],["bigten.org",201],["bradleybraves.com",201],["butlersports.com",201],["cmumavericks.com",201],["conferenceusa.com",201],["cyclones.com",201],["dartmouthsports.com",201],["daytonflyers.com",201],["dbupatriots.com",201],["dbusports.com",201],["denverpioneers.com",201],["fduknights.com",201],["fgcuathletics.com",201],["fightinghawks.com",201],["fightingillini.com",201],["floridagators.com",201],["friars.com",201],["friscofighters.com",201],["gamecocksonline.com",201],["goarmywestpoint.com",201],["gobison.com",201],["goblueraiders.com",201],["gobobcats.com",201],["gocards.com",201],["gocreighton.com",201],["godeacs.com",201],["goexplorers.com",201],["goetbutigers.com",201],["gofrogs.com",201],["gogriffs.com",201],["gogriz.com",201],["golobos.com",201],["gomarquette.com",201],["gopack.com",201],["gophersports.com",201],["goprincetontigers.com",201],["gopsusports.com",201],["goracers.com",201],["goshockers.com",201],["goterriers.com",201],["gotigersgo.com",201],["gousfbulls.com",201],["govandals.com",201],["gowyo.com",201],["goxavier.com",201],["gozags.com",201],["gozips.com",201],["griffinathletics.com",201],["guhoyas.com",201],["gwusports.com",201],["hailstate.com",201],["hamptonpirates.com",201],["hawaiiathletics.com",201],["hokiesports.com",201],["huskers.com",201],["icgaels.com",201],["iuhoosiers.com",201],["jsugamecocksports.com",201],["longbeachstate.com",201],["loyolaramblers.com",201],["lrtrojans.com",201],["lsusports.net",201],["morrisvillemustangs.com",201],["msuspartans.com",201],["muleriderathletics.com",201],["mutigers.com",201],["navysports.com",201],["nevadawolfpack.com",201],["niuhuskies.com",201],["nkunorse.com",201],["nuhuskies.com",201],["nusports.com",201],["okstate.com",201],["olemisssports.com",201],["omavs.com",201],["ovcsports.com",201],["owlsports.com",201],["purduesports.com",201],["redstormsports.com",201],["richmondspiders.com",201],["sfajacks.com",201],["shupirates.com",201],["siusalukis.com",201],["smcgaels.com",201],["smumustangs.com",201],["soconsports.com",201],["soonersports.com",201],["themw.com",201],["tulsahurricane.com",201],["txst.com",201],["txstatebobcats.com",201],["ubbulls.com",201],["ucfknights.com",201],["ucirvinesports.com",201],["uconnhuskies.com",201],["uhcougars.com",201],["uicflames.com",201],["umterps.com",201],["uncwsports.com",201],["unipanthers.com",201],["unlvrebels.com",201],["uoflsports.com",201],["usdtoreros.com",201],["utahstateaggies.com",201],["utepathletics.com",201],["utrockets.com",201],["uvmathletics.com",201],["uwbadgers.com",201],["villanova.com",201],["wkusports.com",201],["wmubroncos.com",201],["woffordterriers.com",201],["1pack1goal.com",201],["bcuathletics.com",201],["bubraves.com",201],["goblackbears.com",201],["golightsgo.com",201],["gomcpanthers.com",201],["goutsa.com",201],["mercerbears.com",201],["pirateblue.com",201],["pirateblue.net",201],["pirateblue.org",201],["quinnipiacbobcats.com",201],["towsontigers.com",201],["tribeathletics.com",201],["tribeclub.com",201],["utepminermaniacs.com",201],["utepminers.com",201],["wkutickets.com",201],["aopathletics.org",201],["atlantichockeyonline.com",201],["bigsouthnetwork.com",201],["bigsouthsports.com",201],["chawomenshockey.com",201],["dbupatriots.org",201],["drakerelays.org",201],["ecac.org",201],["ecacsports.com",201],["emueagles.com",201],["emugameday.com",201],["gculopes.com",201],["godrakebulldog.com",201],["godrakebulldogs.com",201],["godrakebulldogs.net",201],["goeags.com",201],["goislander.com",201],["goislanders.com",201],["gojacks.com",201],["gomacsports.com",201],["gseagles.com",201],["hubison.com",201],["iowaconference.com",201],["ksuowls.com",201],["lonestarconference.org",201],["mascac.org",201],["midwestconference.org",201],["mountaineast.org",201],["niu-pack.com",201],["nulakers.ca",201],["oswegolakers.com",201],["ovcdigitalnetwork.com",201],["pacersports.com",201],["rmacsports.org",201],["rollrivers.com",201],["samfordsports.com",201],["uncpbraves.com",201],["usfdons.com",201],["wiacsports.com",201],["alaskananooks.com",201],["broncathleticfund.com",201],["cameronaggies.com",201],["columbiacougars.com",201],["etownbluejays.com",201],["gobadgers.ca",201],["golancers.ca",201],["gometrostate.com",201],["gothunderbirds.ca",201],["kentstatesports.com",201],["lehighsports.com",201],["lopers.com",201],["lycoathletics.com",201],["lycomingathletics.com",201],["maraudersports.com",201],["mauiinvitational.com",201],["msumavericks.com",201],["nauathletics.com",201],["nueagles.com",201],["nwusports.com",201],["oceanbreezenyc.org",201],["patriotathleticfund.com",201],["pittband.com",201],["principiaathletics.com",201],["roadrunnersathletics.com",201],["sidearmsocial.com",201],["snhupenmen.com",201],["stablerarena.com",201],["stoutbluedevils.com",201],["uwlathletics.com",201],["yumacs.com",201],["collegefootballplayoff.com",201],["csurams.com",201],["cubuffs.com",201],["gobearcats.com",201],["gohuskies.com",201],["mgoblue.com",201],["osubeavers.com",201],["pittsburghpanthers.com",201],["rolltide.com",201],["texassports.com",201],["thesundevils.com",201],["uclabruins.com",201],["wvuathletics.com",201],["wvusports.com",201],["arizonawildcats.com",201],["calbears.com",201],["cuse.com",201],["georgiadogs.com",201],["goducks.com",201],["goheels.com",201],["gostanford.com",201],["insidekstatesports.com",201],["insidekstatesports.info",201],["insidekstatesports.net",201],["insidekstatesports.org",201],["k-stateathletics.com",201],["k-statefootball.net",201],["k-statefootball.org",201],["k-statesports.com",201],["k-statesports.net",201],["k-statesports.org",201],["k-statewomenshoops.com",201],["k-statewomenshoops.net",201],["k-statewomenshoops.org",201],["kstateathletics.com",201],["kstatefootball.net",201],["kstatefootball.org",201],["kstatesports.com",201],["kstatewomenshoops.com",201],["kstatewomenshoops.net",201],["kstatewomenshoops.org",201],["ksuathletics.com",201],["ksusports.com",201],["scarletknights.com",201],["showdownforrelief.com",201],["syracusecrunch.com",201],["texastech.com",201],["theacc.com",201],["ukathletics.com",201],["usctrojans.com",201],["utahutes.com",201],["utsports.com",201],["wsucougars.com",201],["tricksplit.io",201],["fangraphs.com",202],["4players.de",[203,289]],["buffed.de",203],["gamesaktuell.de",203],["gamezone.de",203],["pcgames.de",203],["videogameszone.de",203],["tvspielfilm.de",[204,205,206,207]],["tvtoday.de",[204,205,206,207]],["chip.de",[204,205,206,207]],["focus.de",[204,205,206,207]],["planetaminecraft.com",208],["cravesandflames.com",209],["codesnse.com",209],["link.paid4file.com",209],["flyad.vip",209],["lapresse.ca",210],["kolyoom.com",211],["ilovephd.com",211],["negumo.com",212],["games.wkb.jp",[213,214]],["fandom.com",[215,590,591]],["kenshi.fandom.com",216],["hausbau-forum.de",217],["homeairquality.org",217],["faucettronn.click",217],["fake-it.ws",218],["laksa19.github.io",219],["1shortlink.com",220],["nesia.my.id",221],["u-s-news.com",222],["makemoneywithurl.com",223],["junkyponk.com",223],["healthfirstweb.com",223],["vocalley.com",223],["yogablogfit.com",223],["howifx.com",[223,465]],["en.financerites.com",223],["mythvista.com",223],["livenewsflix.com",223],["cureclues.com",223],["apekite.com",223],["host-buzz.com",223],["insmyst.com",223],["wp2host.com",223],["blogtechh.com",223],["techbixby.com",223],["blogmyst.com",223],["resetoff.pl",224],["sexodi.com",224],["cdn77.org",225],["howtofixwindows.com",226],["3sexporn.com",227],["momxxxsex.com",227],["myfreevintageporn.com",227],["penisbuyutucum.net",227],["ujszo.com",228],["newsmax.com",229],["bobs-tube.com",230],["nadidetarifler.com",231],["siz.tv",231],["suzylu.co.uk",[232,233]],["onworks.net",234],["yabiladi.com",234],["downloadsoft.net",235],["pixsera.net",236],["testlanguages.com",237],["newsinlevels.com",237],["videosinlevels.com",237],["cbs.com",238],["paramountplus.com",238],["abysscdn.com",[239,240]],["buktube.com",241],["fullxh.com",241],["galleryxh.site",241],["megaxh.com",241],["movingxh.world",241],["seexh.com",241],["unlockxh4.com",241],["valuexh.life",241],["xhaccess.com",241],["xhadult2.com",241],["xhadult3.com",241],["xhadult4.com",241],["xhadult5.com",241],["xhamster46.com",241],["xhamsterporno.mx",241],["xhbig.com",241],["xhbranch5.com",241],["xhchannel.com",241],["xhchannel2.com",241],["xhdate.world",241],["xhday.com",241],["xhday1.com",241],["xhlease.world",241],["xhmoon5.com",241],["xhofficial.com",241],["xhopen.com",241],["xhplanet1.com",241],["xhplanet2.com",241],["xhreal2.com",241],["xhreal3.com",241],["xhspot.com",241],["xhtab2.com",241],["xhtab4.com",241],["xhtotal.com",241],["xhtree.com",241],["xhvictory.com",241],["xhwebsite.com",241],["xhwebsite2.com",241],["xhwebsite5.com",241],["xhwide1.com",241],["xhwide2.com",241],["xhwide5.com",241],["xhxh3.xyz",241],["lightnovelworld.com",242],["megadescarga.net",[243,244,245,246]],["megadescargas.net",[243,244,245,246]],["hentaihaven.xxx",247],["jacquieetmicheltv2.net",249],["fcportables.com",[251,252]],["emurom.net",253],["freethesaurus.com",[254,255]],["thefreedictionary.com",[254,255]],["oeffentlicher-dienst.info",256],["ultimate-guitar.com",257],["teachmemicro.com",258],["willcycle.com",258],["2ndrun.tv",258],["rackusreads.com",258],["xyzsports111.xyz",[259,260,261]],["xyzsports112.xyz",[259,260,261]],["xyzsports113.xyz",[259,260,261]],["xyzsports114.xyz",[259,260,261]],["xyzsprtsfrmr1.site",[259,260,261]],["xyzsprtsfrmr2.site",[259,260,261]],["claimbits.net",262],["sexyscope.net",263],["recherche-ebook.fr",265],["easymc.io",265],["zonebourse.com",266],["pink-sluts.net",267],["madoohd.com",268],["andhrafriends.com",269],["benzinpreis.de",270],["turtleviplay.xyz",271],["defenseone.com",272],["govexec.com",272],["nextgov.com",272],["route-fifty.com",272],["sharing.wtf",273],["wetter3.de",274],["arahdrive.com",275],["aiimgvlog.fun",[275,305]],["esportivos.fun",276],["cosmonova-broadcast.tv",277],["soccerinhd.com",278],["techedubyte.com",278],["hartvannederland.nl",279],["shownieuws.nl",279],["vandaaginside.nl",279],["rock.porn",[280,281]],["videzz.net",[282,283]],["ezaudiobookforsoul.com",284],["club386.com",285],["androidpolice.com",286],["cbr.com",286],["collider.com",286],["dualshockers.com",286],["gamerant.com",286],["howtogeek.com",286],["makeuseof.com",286],["movieweb.com",286],["screenrant.com",286],["thegamer.com",286],["xda-developers.com",286],["banned.video",286],["madmaxworld.tv",286],["wheelofgold.com",287],["littlebigsnake.com",288],["onlinesoccermanager.com",289],["njav.tv",290],["netfapx.com",290],["easyfun.gg",291],["uploadmall.com",292],["jiocinema.com",292],["rapid-cloud.co",292],["smailpro.com",293],["ilgazzettino.it",294],["ilmessaggero.it",294],["3bmeteo.com",[295,296]],["mconverter.eu",297],["lover937.net",298],["10gb.vn",299],["pes6.es",300],["tactics.tools",[301,302]],["boundhub.com",303],["alocdnnetu.xyz",304],["starkroboticsfrc.com",305],["sinonimos.de",305],["antonimos.de",305],["quesignifi.ca",305],["tiktokrealtime.com",305],["tiktokcounter.net",305],["tpayr.xyz",305],["poqzn.xyz",305],["ashrfd.xyz",305],["rezsx.xyz",305],["tryzt.xyz",305],["ashrff.xyz",305],["rezst.xyz",305],["dawenet.com",305],["erzar.xyz",305],["waezm.xyz",305],["waezg.xyz",305],["blackwoodacademy.org",305],["cryptednews.space",305],["vivuq.com",305],["swgop.com",305],["vbnmll.com",305],["telcoinfo.online",305],["dshytb.com",305],["fitdynamos.com",[305,307]],["btcbitco.in",[305,309]],["btcsatoshi.net",305],["cempakajaya.com",305],["crypto4yu.com",305],["readbitcoin.org",305],["wiour.com",305],["finish.addurl.biz",305],["laweducationinfo.com",305],["savemoneyinfo.com",305],["worldaffairinfo.com",305],["godstoryinfo.com",305],["successstoryinfo.com",305],["cxissuegk.com",305],["learnmarketinfo.com",305],["bhugolinfo.com",305],["armypowerinfo.com",305],["rsadnetworkinfo.com",305],["rsinsuranceinfo.com",305],["rsfinanceinfo.com",305],["rsgamer.app",305],["rssoftwareinfo.com",305],["rshostinginfo.com",305],["rseducationinfo.com",305],["phonereviewinfo.com",305],["makeincomeinfo.com",305],["gknutshell.com",305],["vichitrainfo.com",305],["workproductivityinfo.com",305],["dopomininfo.com",305],["hostingdetailer.com",305],["fitnesssguide.com",305],["tradingfact4u.com",305],["cryptofactss.com",305],["softwaredetail.com",305],["artoffocas.com",305],["insurancesfact.com",305],["advertisingexcel.com",305],["allcryptoz.net",305],["batmanfactor.com",305],["beautifulfashionnailart.com",305],["crewbase.net",305],["documentaryplanet.xyz",305],["crewus.net",305],["gametechreviewer.com",305],["midebalonu.net",305],["misterio.ro",305],["phineypet.com",305],["seory.xyz",305],["shinbhu.net",305],["shinchu.net",305],["substitutefor.com",305],["talkforfitness.com",305],["thefitbrit.co.uk",305],["thumb8.net",305],["thumb9.net",305],["topcryptoz.net",305],["uniqueten.net",305],["ultraten.net",305],["exactpay.online",305],["kiddyearner.com",305],["luckydice.net",306],["adarima.org",306],["tieutietkiem.com",306],["weatherwx.com",306],["sattaguess.com",306],["winshell.de",306],["rosasidan.ws",306],["modmakers.xyz",306],["gamepure.in",306],["warrenrahul.in",306],["austiblox.net",306],["upiapi.in",306],["myownguess.in",306],["networkhint.com",306],["watchhentai.net",306],["thichcode.net",306],["texturecan.com",306],["tikmate.app",[306,541]],["4funbox.com",308],["nephobox.com",308],["1024tera.com",308],["blog.cryptowidgets.net",309],["blog.insurancegold.in",309],["blog.wiki-topia.com",309],["blog.coinsvalue.net",309],["blog.cookinguide.net",309],["blog.freeoseocheck.com",309],["blog24.me",309],["bildirim.link",311],["appsbull.com",312],["diudemy.com",312],["maqal360.com",312],["lifesurance.info",313],["akcartoons.in",314],["cybercityhelp.in",314],["infokeeda.xyz",315],["webzeni.com",315],["dl.apkmoddone.com",316],["phongroblox.com",316],["apkmodvn.com",317],["streamelements.com",[319,320]],["share.hntv.tv",[320,659,660,661]],["forum.dji.com",[320,661]],["unionpayintl.com",[320,660]],["arcai.com",321],["my-code4you.blogspot.com",322],["flickr.com",323],["firefile.cc",324],["pestleanalysis.com",324],["kochamjp.pl",324],["tutorialforlinux.com",324],["whatsaero.com",324],["animeblkom.net",[324,340]],["blkom.com",324],["globes.co.il",[325,326]],["jardiner-malin.fr",327],["tw-calc.net",328],["ohmybrush.com",329],["talkceltic.net",330],["mentalfloss.com",331],["uprafa.com",332],["cube365.net",333],["nightfallnews.com",[334,335]],["wwwfotografgotlin.blogspot.com",336],["freelistenonline.com",336],["badassdownloader.com",337],["quickporn.net",338],["yellowbridge.com",339],["aosmark.com",341],["atozmath.com",[343,344,345,346,347,348,349]],["newyorker.com",350],["brighteon.com",351],["more.tv",352],["video1tube.com",353],["alohatube.xyz",353],["fshost.me",354],["link.cgtips.org",355],["hentaicloud.com",356],["paperzonevn.com",358],["hentaienglish.com",359],["hentaiporno.xxx",359],["venge.io",[360,361]],["btcbux.io",362],["its.porn",[363,364]],["atv.at",365],["kusonime.com",[366,367]],["jetpunk.com",369],["imgur.com",[370,371,552]],["hentai-party.com",372],["hentaicomics.pro",372],["xxx-comics.pro",372],["genshinimpactcalculator.com",375],["mysexgames.com",376],["embed.indavideo.hu",379],["gdr-online.com",380],["mmm.dk",381],["iqiyi.com",[382,383,533]],["m.iqiyi.com",384],["japopav.tv",385],["lvturbo.com",385],["nbcolympics.com",386],["apkhex.com",387],["indiansexstories2.net",388],["issstories.xyz",388],["1340kbbr.com",389],["gorgeradio.com",389],["kduk.com",389],["kedoam.com",389],["kejoam.com",389],["kelaam.com",389],["khsn1230.com",389],["kjmx.rocks",389],["kloo.com",389],["klooam.com",389],["klykradio.com",389],["kmed.com",389],["kmnt.com",389],["kool991.com",389],["kpnw.com",389],["kppk983.com",389],["krktcountry.com",389],["ktee.com",389],["kwro.com",389],["kxbxfm.com",389],["thevalley.fm",389],["quizlet.com",390],["dsocker1234.blogspot.com",391],["schoolcheats.net",[392,393]],["mgnet.xyz",394],["designtagebuch.de",395],["pixroute.com",396],["uploady.io",397],["calculator-online.net",398],["porngames.club",399],["sexgames.xxx",399],["111.90.159.132",400],["battleplan.news",400],["mobile-tracker-free.com",401],["pfps.gg",402],["ac-illust.com",[403,404]],["photo-ac.com",[403,404]],["vlxxs.net",405],["rapelust.com",405],["vtube.to",405],["vtplay.net",405],["desitelugusex.com",405],["xvideos-downloader.net",405],["xxxvideotube.net",405],["sdefx.cloud",405],["nozomi.la",405],["moviesonlinefree.net",405],["social-unlock.com",406],["superpsx.com",407],["ninja.io",408],["sourceforge.net",409],["samfirms.com",410],["huffpost.com",411],["ingles.com",412],["spanishdict.com",412],["surfline.com",[413,414]],["play.tv3.ee",415],["play.tv3.lt",415],["play.tv3.lv",415],["tv3play.skaties.lv",415],["trendyoum.com",416],["bulbagarden.net",417],["moviestars.to",418],["hollywoodlife.com",419],["mat6tube.com",420],["textstudio.co",421],["newtumbl.com",422],["aruble.net",424],["nevcoins.club",425],["mail.com",426],["oggi.it",[429,430]],["manoramamax.com",429],["video.gazzetta.it",[429,430]],["mangakita.id",431],["mangakita.net",431],["poscishd.online",432],["avpgalaxy.net",433],["mhma12.tech",434],["panda-novel.com",435],["zebranovel.com",435],["lightsnovel.com",435],["eaglesnovel.com",435],["pandasnovel.com",435],["zadfaucet.com",436],["ewrc-results.com",437],["kizi.com",438],["cyberscoop.com",439],["fedscoop.com",439],["canale.live",440],["indiatimes.com",441],["netzwelt.de",442],["mafiatown.pl",[443,444]],["jeep-cj.com",445],["sponsorhunter.com",446],["cloudcomputingtopics.net",447],["likecs.com",448],["tiscali.it",449],["linkspy.cc",450],["tutelehd3.xyz",451],["dirty.pink",[452,453,454]],["adshnk.com",455],["chattanoogan.com",456],["adsy.pw",457],["playstore.pw",457],["socialmediagirls.com",458],["windowspro.de",459],["snapinsta.app",460],["tvtv.ca",461],["tvtv.us",461],["ipalibrary.me",462],["mydaddy.cc",463],["roadtrippin.fr",464],["vavada5com.com",465],["redketchup.io",[466,467,468]],["anyporn.com",[469,484]],["bravoporn.com",469],["bravoteens.com",469],["crocotube.com",469],["hellmoms.com",469],["hellporno.com",469],["sex3.com",469],["tubewolf.com",469],["xbabe.com",469],["xcum.com",469],["zedporn.com",469],["imagetotext.info",470],["infokik.com",471],["freepik.com",472],["ddwloclawek.pl",[473,474]],["deezer.com",475],["my-subs.co",476],["plaion.com",477],["slideshare.net",[478,479]],["ustreasuryyieldcurve.com",480],["businesssoftwarehere.com",481],["goo.st",481],["freevpshere.com",481],["softwaresolutionshere.com",481],["staige.tv",485],["in-jpn.com",486],["oninet.ne.jp",486],["xth.jp",486],["androidadult.com",487],["streamvid.net",488],["watchtv24.com",489],["cellmapper.net",490],["medscape.com",491],["newscon.org",[492,493]],["arkadium.com",494],["bembed.net",495],["elbailedeltroleo.site",495],["embedv.net",495],["fslinks.org",495],["listeamed.net",495],["v6embed.xyz",495],["vgplayer.xyz",495],["vid-guard.com",495],["vidguard.online",495],["app.blubank.com",496],["mobileweb.bankmellat.ir",496],["sportdeutschland.tv",497],["kcra.com",497],["wcvb.com",497],["chat.nrj.fr",498],["ccthesims.com",505],["chromeready.com",505],["coursedrive.org",505],["dtbps3games.com",505],["illustratemagazine.com",505],["uknip.co.uk",505],["vod.pl",506],["megadrive-emulator.com",507],["animesaga.in",510],["moviesapi.club",510],["bestx.stream",510],["watchx.top",510],["digimanie.cz",511],["svethardware.cz",511],["srvy.ninja",512],["drawer-opportunity-i-243.site",513],["tchatche.com",514],["cnn.com",[515,516,517]],["edmdls.com",518],["freshremix.net",518],["scenedl.org",518],["trakt.tv",519],["client.falixnodes.net",520],["shroomers.app",521],["classicalradio.com",522],["di.fm",522],["jazzradio.com",522],["radiotunes.com",522],["rockradio.com",522],["zenradio.com",522],["pc-builds.com",523],["qtoptens.com",523],["reuters.com",523],["today.com",523],["videogamer.com",523],["wrestlinginc.com",523],["gbatemp.net",523],["movie-th.tv",524],["iwanttfc.com",525],["nutraingredients-asia.com",526],["nutraingredients-latam.com",526],["nutraingredients-usa.com",526],["nutraingredients.com",526],["mavenarts.in",527],["ozulscansen.com",528],["nexusmods.com",529],["fitnessbr.click",530],["minhareceita.xyz",530],["doomied.monster",531],["lookmovie2.to",531],["royalroad.com",532],["biletomat.pl",534],["hextank.io",[535,536]],["filmizlehdfilm.com",[537,538,539,540]],["fullfilmizle.cc",[537,538,539,540]],["sagewater.com",542],["redlion.net",542],["satdl.com",543],["vidstreaming.xyz",544],["everand.com",545],["myradioonline.pl",546],["tacobell.com",548],["zefoy.com",549],["cnet.com",550],["natgeotv.com",553],["spankbang.com",554],["globo.com",555],["wayfair.com",556],["br.de",557],["indeed.com",558],["pasteboard.co",559],["clickhole.com",560],["deadspin.com",560],["gizmodo.com",560],["jalopnik.com",560],["jezebel.com",560],["kotaku.com",560],["lifehacker.com",560],["splinternews.com",560],["theinventory.com",560],["theonion.com",560],["theroot.com",560],["thetakeout.com",560],["pewresearch.org",560],["los40.com",[561,562]],["as.com",562],["telegraph.co.uk",[563,564]],["poweredbycovermore.com",[563,613]],["lumens.com",[563,613]],["verizon.com",565],["humanbenchmark.com",566],["politico.com",567],["officedepot.co.cr",[568,569]],["usnews.com",572],["factable.com",574],["zee5.com",575],["gala.fr",576],["geo.fr",576],["voici.fr",576],["gloucestershirelive.co.uk",577],["arsiv.mackolik.com",578],["jacksonguitars.com",579],["scandichotels.com",580],["stylist.co.uk",581],["nettiauto.com",582],["thaiairways.com",[583,584]],["cerbahealthcare.it",[585,586]],["futura-sciences.com",[585,602]],["tiendaenlinea.claro.com.ni",[587,588]],["tieba.baidu.com",589],["grasshopper.com",[592,593]],["epson.com.cn",[594,595,596,597]],["oe24.at",[598,599]],["szbz.de",598],["platform.autods.com",[600,601]],["wikihow.com",603],["citibank.com.sg",604],["uol.com.br",[605,606,607,608,609]],["gazzetta.gr",610],["digicol.dpm.org.cn",[611,612]],["virginmediatelevision.ie",614],["larazon.es",[615,616]],["waitrosecellar.com",[617,618,619]],["sharpen-free-design-generator.netlify.app",[621,622]],["help.cashctrl.com",[623,624]],["gry-online.pl",625],["vidaextra.com",626],["commande.rhinov.pro",[627,628]],["ecom.wixapps.net",[627,628]],["tipranks.com",[629,630]],["iceland.co.uk",[631,632,633]],["socket.pearsoned.com",634],["tntdrama.com",[635,636]],["mobile.de",[637,638]],["ioe.vn",[639,640]],["geiriadur.ac.uk",[639,643]],["welsh-dictionary.ac.uk",[639,643]],["bikeportland.org",[641,642]],["biologianet.com",[606,607,608]],["10play.com.au",[644,645]],["sunshine-live.de",[646,647]],["whatismyip.com",[648,649]],["myfitnesspal.com",650],["netoff.co.jp",[651,652]],["clickjogos.com.br",655],["bristan.com",[656,657]],["zillow.com",658],["optimum.net",[662,663]],["investor-web.hdfcfund.com",664],["user.guancha.cn",[665,666]],["sosovalue.com",667],["bandyforbundet.no",[668,669]],["tatacommunications.com",670],["suamusica.com.br",[671,672,673]],["macrotrends.net",[674,675]],["code.world",676],["smartcharts.net",676],["topgear.com",677],["eservice.directauto.com",[678,679]],["nbcsports.com",680],["standard.co.uk",681],["pruefernavi.de",[682,683]],["17track.net",684],["poophq.com",686],["veev.to",686],["uber.com",[687,688]],["jdsports.com",[687,688]],["engadget.com",[687,688]],["yahoo.com",[687,688]],["techcrunch.com",[687,688]],["rivals.com",[687,688]],["kkrt.com",[687,688]],["crunchyroll.com",[687,688]],["dnb.com",[687,688]],["dnb.co.uk",[687,688]],["weather.com",[687,688]],["ubereats.com",[687,688]],["usatoday.com",689]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,50]],["1movies",[14,17]],["xmovies8",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",21],["hqq",[22,23]],["waaw",[23,24]],["younetu",23],["vvtplayer",23],["123link",25],["adshort",25],["linkshorts",25],["adsrt",25],["vinaurl",25],["adfloz",25],["dutchycorp",25],["shortearn",25],["pingit",25],["shrink",25],["tmearn",25],["megalink",25],["miniurl",25],["gplinks",25],["clk",25],["pureshort",25],["shrinke",25],["shrinkme",25],["link1s",25],["shortzzy",25],["shorttey",[25,195]],["lite-link",25],["adcorto",25],["zshort",25],["upfiles",25],["linkfly",25],["wplink",25],["seulink",25],["encurtalink",25],["camwhores",[26,37,79,80,81]],["tube8",[27,28]],["youporn",28],["redtube",28],["pornhub",[28,181]],["upornia",[30,31]],["fmovies",50],["streamwish",[54,55]],["xtits",[58,115]],["pouvideo",60],["povvideo",60],["povw1deo",60],["povwideo",60],["powv1deo",60],["powvibeo",60],["powvideo",60],["powvldeo",60],["plyjam",[65,66]],["fxporn69",71],["vipbox",72],["viprow",72],["desbloqueador",76],["xberuang",77],["teknorizen",77],["subtorrents",85],["subtorrents1",85],["newpelis",85],["pelix",85],["allcalidad",85],["infomaniakos",85],["filecrypt",90],["tornadomovies",96],["icdrama",102],["mangasail",102],["file4go",104],["mangovideo",116],["asianclub",124],["anitube",127],["streamingcommunity",127],["mixdrop",129],["uploadev",153],["ver-pelis-online",161],["ancient-origins",169],["spankbang",188],["lookcam",195],["lootlinks",195],["dpstream",198],["bluemediafiles",200],["docer",224],["hamsterix",241],["xhamster",241],["xhamster1",241],["xhamster10",241],["xhamster11",241],["xhamster12",241],["xhamster13",241],["xhamster14",241],["xhamster15",241],["xhamster16",241],["xhamster17",241],["xhamster18",241],["xhamster19",241],["xhamster20",241],["xhamster2",241],["xhamster3",241],["xhamster4",241],["xhamster42",241],["xhamster5",241],["xhamster7",241],["xhamster8",241],["acortalo",[243,244,245,246]],["acortar",[243,244,245,246]],["a2zapk",250],["kickassanime",264],["doomovie-hd",268],["drakecomic",287],["terabox",308],["ctrlv",342],["123movieshd",368],["uproxy",373],["animesa",374],["cinecalidad",[377,378]],["dvdplay",405],["apkmaven",423],["gmx",427],["gamereactor",483],["vembed",495],["empire-anime",[499,500,501,502,503]],["empire-stream",[499,500,501]],["empire-streaming",[499,500,501]],["empire-streamz",[499,500,501]],["tvhay",[508,509]],["lookmovie",531],["filmizletv",[537,538,539,540]],["www.google",547],["officedepot",[570,571]],["foundit",[653,654]]]);

const exceptionsMap = new Map([["pingit.com",[25]],["pingit.me",[25]],["lookmovie.studio",[531]]]);

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
