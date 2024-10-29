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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["flashvars.adv_pause_html",""],["$.fx.off","true"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["adBlock","false"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["Object.prototype.run","undefined"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["adsClasses","undefined"],["gsecs","0"],["dvsize","52"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["playID","1"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["Object.prototype.ads.nopreroll_","true"],["checkAdBlocker","noopFunc"],["ADS.isBannersEnabled","false"],["adBlockerDetected","false"],["univresalP","noopFunc"],["EASYFUN_ADS_CAN_RUN","true"],["navigator.brave","undefined"],["adsbygoogle_ama_fc_has_run","true"],["jwDefaults.advertising","{}"],["elimina_profilazione","1"],["elimina_pubblicita","1"],["abd","{}"],["checkerimg","noopFunc"],["detectedAdblock","noopFunc"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["alert","throwFunc"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["google_srt","0"],["sensorsDataAnalytic201505","{}"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["Object.prototype.adsEnabled","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["HTMLAnchorElement.prototype.click","noopFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS2","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["ShowAdvertising","{}"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["FAVE.settings.ads.ssai.prod.clips.enabled","false"],["FAVE.settings.ads.ssai.prod.liveAuth.enabled","false"],["FAVE.settings.ads.ssai.prod.liveUnauth.enabled","false"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["window.adngin","{}"],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["Object.prototype.updateModifiedCommerceUrl","noopFunc"],["flashvars.event_reporting",""],["Object.prototype.has_opted_out_tracking","trueFunc"],["Visitor","{}"],["libAnalytics.data.get","noopFunc"],["navigator.sendBeacon","noopFunc"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["jad","undefined"],["hasAdblocker","true"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["mParticle.Identity.getCurrentUser","noopFunc"],["JSGlobals.prebidEnabled","false"],["elasticApm","{}"],["elasticApm.init","noopFunc"],["yt.config_.EXPERIMENT_FLAGS.web_bind_fetch","false"],["fapit.check","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,673]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,609]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,256]],["gadgets.es",[12,256]],["amateurporn.co",[12,116]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,460]],["porngem.com",15],["uploadbank.com",[15,89]],["shortit.pw",[15,100]],["familyporn.tv",15],["cloudemb.com",[15,378]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,80]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["sankakucomplex.com",19],["player.glomex.com",20],["merkur.de",20],["tz.de",20],["hotpornfile.org",23],["player.tabooporns.com",23],["x69.ovh",23],["wiztube.xyz",23],["netu.frembed.fun",23],["multiup.us",23],["rpdrlatino.live",23],["peliculas8k.com",[23,24]],["video.q34r.org",23],["69x.online",23],["czxxx.org",23],["vtplayer.online",23],["netu.ac",23],["dirtyvideo.fun",24],["adbull.org",25],["mitly.us",25],["linkrex.net",25],["linx.cc",25],["oke.io",25],["dz4link.com",25],["linclik.com",25],["shrt10.com",25],["loptelink.com",25],["cut-fly.com",25],["linkfinal.com",25],["payskip.org",25],["cutpaid.com",25],["forexmab.com",25],["linkjust.com",25],["linkszia.co",25],["leechpremium.link",25],["icutlink.com",[25,121]],["oncehelp.com",25],["rgl.vn",25],["reqlinks.net",25],["bitlk.com",25],["qlinks.eu",25],["link.3dmili.com",25],["short-fly.com",25],["foxseotools.com",25],["pngit.live",25],["link.turkdown.com",25],["urlty.com",25],["7r6.com",25],["oko.sh",25],["ckk.ai",25],["fc.lc",25],["fstore.biz",25],["cuts-url.com",25],["eio.io",25],["exe.app",25],["exee.io",25],["exey.io",25],["skincarie.com",25],["exeo.app",25],["coinlyhub.com",[25,197]],["adsafelink.com",25],["aii.sh",25],["cybertechng.com",[25,210]],["cutdl.xyz",25],["iir.ai",25],["shorteet.com",[25,228]],["smoner.com",25],["gyanlight.com",25],["xpshort.com",25],["upshrink.com",25],["enit.in",[25,224]],["ez4short.com",25],["easysky.in",25],["veganab.co",25],["adrinolinks.in",25],["go.bloggingaro.com",25],["go.gyanitheme.com",25],["go.theforyou.in",25],["go.hipsonyc.com",25],["birdurls.com",25],["vipurl.in",25],["try2link.com",25],["jameeltips.us",25],["gainl.ink",25],["promo-visits.site",25],["satoshi-win.xyz",[25,303]],["shorterall.com",25],["encurtandourl.com",25],["forextrader.site",25],["postazap.com",25],["cety.app",25],["exego.app",[25,298]],["cutlink.net",25],["cutsy.net",25],["cutyurls.com",25],["cutty.app",25],["cutnet.net",25],["tinys.click",[25,210]],["cpm.icu",25],["panyshort.link",25],["enagato.com",25],["pandaznetwork.com",25],["tvi.la",25],["iir.la",25],["tii.la",25],["oei.la",25],["lnbz.la",[25,224]],["oii.la",25],["tpi.li",25],["recipestutorials.com",25],["shrinkforearn.in",25],["techyuth.xyz",25],["oii.io",25],["du-link.in",25],["atglinks.com",25],["thotpacks.xyz",25],["megaurl.in",25],["megafly.in",25],["simana.online",25],["fooak.com",25],["joktop.com",25],["evernia.site",25],["link.paid4link.com",[25,311]],["exalink.fun",25],["indiamaja.com",25],["newshuta.in",25],["shortxlinks.com",25],["linksly.co",25],["pkr.pw",25],["imagenesderopaparaperros.com",25],["shortenbuddy.com",25],["apksvip.com",25],["4cash.me",25],["namaidani.com",25],["teknomuda.com",25],["miuiku.com",25],["savelink.site",25],["samaa-pro.com",25],["miklpro.com",25],["modapk.link",25],["1shorten.com",25],["ccurl.net",25],["linkpoi.me",25],["menjelajahi.com",25],["pewgame.com",25],["1link.vip",25],["haonguyen.top",25],["crazyblog.in",25],["gtlink.co",25],["link.tokenoto.com",25],["cutearn.net",25],["rshrt.com",25],["filezipa.com",25],["dz-linkk.com",25],["theblissempire.com",25],["finanzas-vida.com",25],["adurly.cc",25],["pix4link.com",25],["paid4.link",25],["link.asiaon.top",25],["go.gets4link.com",25],["download.sharenulled.net",25],["beingtek.com",25],["shorturl.unityassets4free.com",25],["disheye.com",25],["techymedies.com",25],["techysuccess.com",25],["za.gl",[25,138]],["bblink.com",25],["myad.biz",25],["swzz.xyz",25],["vevioz.com",25],["charexempire.com",25],["clk.asia",25],["egfly.xyz",25],["linka.click",25],["sturls.com",25],["myshrinker.com",25],["go.adinsurance.xyz",25],["snowurl.com",[25,210]],["netfile.cc",25],["link.insurglobal.xyz",25],["theconomy.me",25],["rocklink.in",25],["adinsurance.xyz",25],["insurglobal.xyz",25],["techgeek.digital",25],["download3s.net",25],["shortx.net",25],["musicc.xyz",25],["shortawy.com",25],["tlin.me",25],["apprepack.com",25],["up-load.one",25],["zuba.link",25],["news.speedynews.xyz",25],["golink.xaydungplus.com",25],["bestcash2020.com",25],["hoxiin.com",25],["technemo.xyz",25],["go.linkbnao.com",25],["link-yz.com",25],["paylinnk.com",25],["thizissam.in",25],["ier.ai",25],["bloggertheme.xyz",25],["adslink.pw",25],["novelssites.com",25],["links.medipost.org",25],["faucetcrypto.net",25],["short.freeltc.top",25],["trxking.xyz",25],["weadown.com",25],["m.bloggingguidance.com",25],["blog.onroid.com",25],["link.codevn.net",25],["upfilesurls.com",25],["shareus.site",25],["link4rev.site",25],["bloginguru.xyz",25],["celinks.net",25],["c2g.at",25],["shortzu.icu",25],["bitcosite.com",[25,473]],["cryptosh.pro",25],["sigmalinks.in",25],["link68.net",25],["traffic123.net",25],["windowslite.net",[25,210]],["viewfr.com",25],["cl1ca.com",25],["4br.me",25],["fir3.net",25],["kiddyshort.com",25],["watchmygf.me",[26,51]],["camwhorez.tv",[26,37,79,80]],["cambay.tv",[26,58,79,113,115,116,117,118]],["thotcity.su",26],["fpo.xxx",[26,58]],["sexemix.com",26],["heavyfetish.com",[26,541]],["you-porn.com",28],["youporngay.com",28],["youpornru.com",28],["9908ww.com",28],["adelaidepawnbroker.com",28],["bztube.com",28],["hotovs.com",28],["insuredhome.org",28],["nudegista.com",28],["pornluck.com",28],["vidd.se",28],["pornhub.com",28],["pornerbros.com",29],["freep.com",29],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["viki.com",[35,36]],["sleazyneasy.com",[37,38,39]],["smutr.com",[37,193]],["watchdirty.to",[37,80,81,116]],["yourporngod.com",[37,38]],["javbangers.com",[37,350]],["camfox.com",37],["camthots.tv",[37,113]],["shegotass.info",37],["amateur8.com",37],["bigtitslust.com",37],["ebony8.com",37],["freeporn8.com",37],["lesbian8.com",37],["maturetubehere.com",37],["sortporn.com",37],["webcamvau.com",37],["motherporno.com",[37,38,58,115]],["tktube.com",37],["theporngod.com",[37,38]],["pornsocket.com",40],["luxuretv.com",41],["porndig.com",[42,43]],["webcheats.com.br",44],["ceesty.com",[45,46]],["gestyy.com",[45,46]],["corneey.com",46],["destyy.com",46],["festyy.com",46],["sh.st",46],["mitaku.net",46],["angrybirdsnest.com",47],["zrozz.com",47],["clix4btc.com",47],["4tests.com",47],["planet-explorers-isos.com",47],["business-standard.com",47],["goltelevision.com",47],["news-und-nachrichten.de",47],["laradiobbs.net",47],["urlaubspartner.net",47],["produktion.de",47],["cinemaxxl.de",47],["bladesalvador.com",47],["tempr.email",47],["katfile.com",47],["trust.zone",47],["cshort.org",47],["friendproject.net",47],["covrhub.com",47],["planetsuzy.org",48],["empflix.com",49],["freeplayervideo.com",50],["nazarickol.com",50],["player-cdn.com",50],["playhydrax.com",[50,240,241]],["alleneconomicmatter.com",50],["apinchcaseation.com",50],["bethshouldercan.com",50],["bigclatterhomesguideservice.com",50],["bradleyviewdoctor.com",50],["brookethoughi.com",50],["brucevotewithin.com",50],["cindyeyefinal.com",50],["denisegrowthwide.com",50],["donaldlineelse.com",50],["edwardarriveoften.com",50],["erikcoldperson.com",50],["evelynthankregion.com",50],["graceaddresscommunity.com",50],["heatherdiscussionwhen.com",50],["housecardsummerbutton.com",50],["jamesstartstudent.com",50],["jamiesamewalk.com",50],["jasminetesttry.com",50],["jasonresponsemeasure.com",50],["jayservicestuff.com",50],["jessicaglassauthor.com",50],["johntryopen.com",50],["josephseveralconcern.com",50],["kennethofficialitem.com",50],["lisatrialidea.com",50],["lorimuchbenefit.com",50],["loriwithinfamily.com",50],["lukecomparetwo.com",50],["markstyleall.com",50],["michaelapplysome.com",50],["morganoperationface.com",50],["nectareousoverelate.com",50],["paulkitchendark.com",50],["rebeccaneverbase.com",50],["roberteachfinal.com",50],["robertplacespace.com",50],["ryanagoinvolve.com",50],["sandrataxeight.com",50],["seanshowcould.com",50],["sethniceletter.com",50],["shannonpersonalcost.com",50],["sharonwhiledemocratic.com",50],["stevenimaginelittle.com",50],["strawberriesporail.com",50],["susanhavekeep.com",50],["timberwoodanotia.com",50],["tinycat-voe-fashion.com",50],["troyyourlead.com",50],["uptodatefinishconference.com",50],["uptodatefinishconferenceroom.com",50],["vincentincludesuccessful.com",50],["voe.sx",50],["motphimtv.com",50],["rabbitstream.net",50],["projectfreetv.one",50],["kimberlyonlocal.com",50],["richardstorehalf.com",50],["thomasalthoughhear.com",50],["zacharycollectionmight.com",50],["transparentcalifornia.com",51],["deepbrid.com",52],["webnovel.com",53],["videosgay.me",[54,55]],["oneupload.to",55],["oneupload.online",55],["wishfast.top",55],["schwaebische.de",56],["8tracks.com",57],["3movs.com",58],["bravoerotica.net",[58,115]],["youx.xxx",58],["camclips.tv",[58,193]],["camflow.tv",[58,115,116,159,231]],["camhoes.tv",[58,113,115,116,159,231]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,115]],["analdin.com",[58,115]],["revealname.com",59],["golfchannel.com",61],["telemundodeportes.com",61],["stream.nbcsports.com",61],["mathdf.com",61],["gamcore.com",62],["porcore.com",62],["69games.xxx",62],["javmix.app",62],["tecknity.com",63],["haaretz.co.il",64],["haaretz.com",64],["hungama.com",64],["a-o.ninja",64],["anime-odcinki.pl",64],["kumpulmanga.org",64],["shortgoo.blogspot.com",64],["tonanmedia.my.id",[64,495]],["yurasu.xyz",64],["isekaipalace.com",64],["vikistream.com",65],["eplayer.click",[65,66]],["mega4upload.com",[66,72]],["ennovelas.com",[66,72]],["n-tv.de",67],["brigitte.de",68],["stern.de",68],["foxsports.com.au",69],["canberratimes.com.au",69],["thesimsresource.com",70],["bdnewszh.com",72],["streamservicehd.click",72],["ctrl.blog",73],["sportlife.es",74],["finofilipino.org",75],["acortarm.xyz",76],["mysflink.blogspot.com",77],["assia.tv",78],["assia4.com",78],["assia24.com",78],["cwtvembeds.com",[80,114]],["xmateur.com",[80,81,116]],["camlovers.tv",80],["porntn.com",80],["pornissimo.org",80],["sexcams-24.com",[80,116]],["watchporn.to",[80,116]],["camwhorez.video",80],["multi.xxx",81],["footstockings.com",[81,116]],["worldofbitco.in",[82,83]],["weatherx.co.in",[82,83]],["getyourbitco.in",82],["sunbtc.space",82],["sbs.com.au",84],["ojogos.com.br",86],["powforums.com",87],["supforums.com",87],["studybullet.com",87],["usgamer.net",88],["recordonline.com",88],["freebitcoin.win",91],["e-monsite.com",91],["coindice.win",91],["sport-tv-guide.live",92],["temp-mails.com",93],["freiepresse.de",94],["investing.com",95],["mp3fiber.com",97],["chicoer.com",98],["dailybreeze.com",98],["dailybulletin.com",98],["dailynews.com",98],["delcotimes.com",98],["eastbaytimes.com",98],["macombdaily.com",98],["ocregister.com",98],["pasadenastarnews.com",98],["pe.com",98],["presstelegram.com",98],["redlandsdailyfacts.com",98],["reviewjournal.com",98],["santacruzsentinel.com",98],["saratogian.com",98],["sentinelandenterprise.com",98],["sgvtribune.com",98],["tampabay.com",98],["times-standard.com",98],["theoaklandpress.com",98],["trentonian.com",98],["twincities.com",98],["whittierdailynews.com",98],["bostonherald.com",98],["dailycamera.com",98],["sbsun.com",98],["dailydemocrat.com",98],["montereyherald.com",98],["orovillemr.com",98],["record-bee.com",98],["redbluffdailynews.com",98],["reporterherald.com",98],["thereporter.com",98],["timescall.com",98],["timesheraldonline.com",98],["ukiahdailyjournal.com",98],["dailylocal.com",98],["mercurynews.com",98],["suedkurier.de",99],["anysex.com",101],["vlist.se",102],["pornve.com",103],["coolrom.com.au",104],["pornohirsch.net",105],["marie-claire.es",106],["gamezhero.com",106],["flashgirlgames.com",106],["onlinesudoku.games",106],["mpg.football",106],["sssam.com",106],["globalnews.ca",107],["drinksmixer.com",108],["leitesculinaria.com",108],["fupa.net",109],["browardpalmbeach.com",110],["dallasobserver.com",110],["houstonpress.com",110],["miaminewtimes.com",110],["phoenixnewtimes.com",110],["westword.com",110],["nhentai.net",111],["nowtv.com.tr",112],["caminspector.net",113],["camwhoreshd.com",113],["camgoddess.tv",113],["gay4porn.com",115],["mypornhere.com",115],["camhub.cc",116],["sexwebvideo.com",116],["sexwebvideo.net",116],["love4porn.com",116],["thotvids.com",116],["watchmdh.to",116],["celebwhore.com",116],["cluset.com",116],["4kporn.xxx",116],["xhomealone.com",116],["lusttaboo.com",[116,420]],["hentai-moon.com",116],["mediapason.it",119],["linkspaid.com",119],["tuotromedico.com",119],["neoteo.com",119],["phoneswiki.com",119],["celebmix.com",119],["myneobuxportal.com",119],["oyungibi.com",119],["25yearslatersite.com",119],["jeshoots.com",120],["techhx.com",120],["karanapk.com",120],["flashplayer.fullstacks.net",122],["cloudapps.herokuapp.com",122],["texteditor.nsspot.net",122],["youfiles.herokuapp.com",122],["temp-mail.org",123],["javhdporn.net",124],["javstream.top",124],["comnuan.com",125],["veedi.com",126],["battleboats.io",126],["fruitlab.com",127],["acetack.com",127],["androidquest.com",127],["apklox.com",127],["chhaprawap.in",127],["gujarativyakaran.com",127],["kashmirstudentsinformation.in",127],["kisantime.com",127],["shetkaritoday.in",127],["pastescript.com",127],["trimorspacks.com",127],["updrop.link",127],["haddoz.net",127],["garoetpos.com",127],["stiletv.it",128],["hqtv.biz",130],["liveuamap.com",131],["muvibg.com",131],["audycje.tokfm.pl",132],["hulu.com",[133,134,135]],["shush.se",136],["allkpop.com",137],["pickcrackpasswords.blogspot.com",139],["kfrfansub.com",140],["thuglink.com",140],["voipreview.org",140],["illicoporno.com",141],["lavoixdux.com",141],["tonpornodujour.com",141],["jacquieetmichel.net",141],["jacquieetmicheltv.net",[141,249,250]],["swame.com",141],["vosfemmes.com",141],["voyeurfrance.net",141],["hanime.tv",142],["pogo.com",143],["cloudvideo.tv",144],["legionjuegos.org",145],["legionpeliculas.org",145],["legionprogramas.org",145],["16honeys.com",146],["elespanol.com",147],["remodelista.com",148],["coolmathgames.com",[149,150,151,562]],["audiofanzine.com",152],["hitokin.net",154],["developerinsider.co",155],["ilprimatonazionale.it",156],["hotabis.com",156],["root-nation.com",156],["italpress.com",156],["airsoftmilsimnews.com",156],["artribune.com",156],["thehindu.com",157],["cambro.tv",[158,159]],["nibelungen-kurier.de",160],["adfoc.us",162],["techyember.com",162],["remixbass.com",162],["techipop.com",162],["quickimageconverter.com",162],["mastharyana.com",162],["tea-coffee.net",162],["spatsify.com",162],["newedutopics.com",162],["getviralreach.in",162],["edukaroo.com",162],["funkeypagali.com",162],["careersides.com",162],["nayisahara.com",162],["wikifilmia.com",162],["infinityskull.com",162],["viewmyknowledge.com",162],["iisfvirtual.in",162],["starxinvestor.com",162],["jkssbalerts.com",162],["myprivatejobs.com",[162,299]],["wikitraveltips.com",[162,299]],["amritadrino.com",[162,299]],["sahlmarketing.net",162],["filmypoints.in",162],["fitnessholic.net",162],["moderngyan.com",162],["sattakingcharts.in",162],["freshbhojpuri.com",162],["bgmi32bitapk.in",162],["bankshiksha.in",162],["earn.mpscstudyhub.com",162],["earn.quotesopia.com",162],["money.quotesopia.com",162],["best-mobilegames.com",162],["learn.moderngyan.com",162],["bharatsarkarijobalert.com",162],["techacode.com",162],["trickms.com",162],["ielts-isa.edu.vn",162],["sptfy.be",162],["mcafee-com.com",[162,298]],["pianetamountainbike.it",163],["barchart.com",164],["modelisme.com",165],["parasportontario.ca",165],["prescottenews.com",165],["nrj-play.fr",166],["oeffentlicher-dienst.info",167],["hackingwithreact.com",168],["gutekueche.at",169],["eplfootballmatch.com",170],["peekvids.com",171],["playvids.com",171],["pornflip.com",171],["redensarten-index.de",172],["vw-page.com",173],["viz.com",[174,175]],["0rechner.de",176],["configspc.com",177],["xopenload.me",177],["uptobox.com",177],["uptostream.com",177],["onepiece-tube.com",178],["japgay.com",179],["mega-debrid.eu",180],["dreamdth.com",181],["diaridegirona.cat",183],["diariodeibiza.es",183],["diariodemallorca.es",183],["diarioinformacion.com",183],["eldia.es",183],["emporda.info",183],["farodevigo.es",183],["laopinioncoruna.es",183],["laopiniondemalaga.es",183],["laopiniondemurcia.es",183],["laopiniondezamora.es",183],["laprovincia.es",183],["levante-emv.com",183],["mallorcazeitung.es",183],["regio7.cat",183],["superdeporte.es",183],["playpaste.com",184],["player.rtl2.de",185],["freetutorialsus.com",186],["vidlii.com",[186,202]],["iammagnus.com",186],["dailyvideoreports.net",186],["unityassets4free.com",186],["cnbc.com",187],["puzzles.msn.com",188],["metro.us",188],["newsobserver.com",188],["arkadiumhosted.com",188],["firefaucet.win",190],["55k.io",191],["filelions.online",191],["stmruby.com",191],["direct-link.net",192],["direkt-wissen.com",192],["link-to.net",192],["fullhdxxx.com",194],["pornclassic.tube",195],["tubepornclassic.com",195],["etonline.com",196],["creatur.io",196],["drphil.com",196],["urbanmilwaukee.com",196],["ontiva.com",196],["hideandseek.world",196],["myabandonware.com",196],["kendam.com",196],["wttw.com",196],["synonyms.com",196],["definitions.net",196],["hostmath.com",196],["camvideoshub.com",196],["minhaconexao.com.br",196],["home-made-videos.com",198],["pxrnxx.xyz",198],["amateur-couples.com",198],["slutdump.com",198],["produsat.com",200],["12thman.com",202],["acusports.com",202],["atlantic10.com",202],["auburntigers.com",202],["baylorbears.com",202],["bceagles.com",202],["bgsufalcons.com",202],["big12sports.com",202],["bigten.org",202],["bradleybraves.com",202],["butlersports.com",202],["cmumavericks.com",202],["conferenceusa.com",202],["cyclones.com",202],["dartmouthsports.com",202],["daytonflyers.com",202],["dbupatriots.com",202],["dbusports.com",202],["denverpioneers.com",202],["fduknights.com",202],["fgcuathletics.com",202],["fightinghawks.com",202],["fightingillini.com",202],["floridagators.com",202],["friars.com",202],["friscofighters.com",202],["gamecocksonline.com",202],["goarmywestpoint.com",202],["gobison.com",202],["goblueraiders.com",202],["gobobcats.com",202],["gocards.com",202],["gocreighton.com",202],["godeacs.com",202],["goexplorers.com",202],["goetbutigers.com",202],["gofrogs.com",202],["gogriffs.com",202],["gogriz.com",202],["golobos.com",202],["gomarquette.com",202],["gopack.com",202],["gophersports.com",202],["goprincetontigers.com",202],["gopsusports.com",202],["goracers.com",202],["goshockers.com",202],["goterriers.com",202],["gotigersgo.com",202],["gousfbulls.com",202],["govandals.com",202],["gowyo.com",202],["goxavier.com",202],["gozags.com",202],["gozips.com",202],["griffinathletics.com",202],["guhoyas.com",202],["gwusports.com",202],["hailstate.com",202],["hamptonpirates.com",202],["hawaiiathletics.com",202],["hokiesports.com",202],["huskers.com",202],["icgaels.com",202],["iuhoosiers.com",202],["jsugamecocksports.com",202],["longbeachstate.com",202],["loyolaramblers.com",202],["lrtrojans.com",202],["lsusports.net",202],["morrisvillemustangs.com",202],["msuspartans.com",202],["muleriderathletics.com",202],["mutigers.com",202],["navysports.com",202],["nevadawolfpack.com",202],["niuhuskies.com",202],["nkunorse.com",202],["nuhuskies.com",202],["nusports.com",202],["okstate.com",202],["olemisssports.com",202],["omavs.com",202],["ovcsports.com",202],["owlsports.com",202],["purduesports.com",202],["redstormsports.com",202],["richmondspiders.com",202],["sfajacks.com",202],["shupirates.com",202],["siusalukis.com",202],["smcgaels.com",202],["smumustangs.com",202],["soconsports.com",202],["soonersports.com",202],["themw.com",202],["tulsahurricane.com",202],["txst.com",202],["txstatebobcats.com",202],["ubbulls.com",202],["ucfknights.com",202],["ucirvinesports.com",202],["uconnhuskies.com",202],["uhcougars.com",202],["uicflames.com",202],["umterps.com",202],["uncwsports.com",202],["unipanthers.com",202],["unlvrebels.com",202],["uoflsports.com",202],["usdtoreros.com",202],["utahstateaggies.com",202],["utepathletics.com",202],["utrockets.com",202],["uvmathletics.com",202],["uwbadgers.com",202],["villanova.com",202],["wkusports.com",202],["wmubroncos.com",202],["woffordterriers.com",202],["1pack1goal.com",202],["bcuathletics.com",202],["bubraves.com",202],["goblackbears.com",202],["golightsgo.com",202],["gomcpanthers.com",202],["goutsa.com",202],["mercerbears.com",202],["pirateblue.com",202],["pirateblue.net",202],["pirateblue.org",202],["quinnipiacbobcats.com",202],["towsontigers.com",202],["tribeathletics.com",202],["tribeclub.com",202],["utepminermaniacs.com",202],["utepminers.com",202],["wkutickets.com",202],["aopathletics.org",202],["atlantichockeyonline.com",202],["bigsouthnetwork.com",202],["bigsouthsports.com",202],["chawomenshockey.com",202],["dbupatriots.org",202],["drakerelays.org",202],["ecac.org",202],["ecacsports.com",202],["emueagles.com",202],["emugameday.com",202],["gculopes.com",202],["godrakebulldog.com",202],["godrakebulldogs.com",202],["godrakebulldogs.net",202],["goeags.com",202],["goislander.com",202],["goislanders.com",202],["gojacks.com",202],["gomacsports.com",202],["gseagles.com",202],["hubison.com",202],["iowaconference.com",202],["ksuowls.com",202],["lonestarconference.org",202],["mascac.org",202],["midwestconference.org",202],["mountaineast.org",202],["niu-pack.com",202],["nulakers.ca",202],["oswegolakers.com",202],["ovcdigitalnetwork.com",202],["pacersports.com",202],["rmacsports.org",202],["rollrivers.com",202],["samfordsports.com",202],["uncpbraves.com",202],["usfdons.com",202],["wiacsports.com",202],["alaskananooks.com",202],["broncathleticfund.com",202],["cameronaggies.com",202],["columbiacougars.com",202],["etownbluejays.com",202],["gobadgers.ca",202],["golancers.ca",202],["gometrostate.com",202],["gothunderbirds.ca",202],["kentstatesports.com",202],["lehighsports.com",202],["lopers.com",202],["lycoathletics.com",202],["lycomingathletics.com",202],["maraudersports.com",202],["mauiinvitational.com",202],["msumavericks.com",202],["nauathletics.com",202],["nueagles.com",202],["nwusports.com",202],["oceanbreezenyc.org",202],["patriotathleticfund.com",202],["pittband.com",202],["principiaathletics.com",202],["roadrunnersathletics.com",202],["sidearmsocial.com",202],["snhupenmen.com",202],["stablerarena.com",202],["stoutbluedevils.com",202],["uwlathletics.com",202],["yumacs.com",202],["collegefootballplayoff.com",202],["csurams.com",202],["cubuffs.com",202],["gobearcats.com",202],["gohuskies.com",202],["mgoblue.com",202],["osubeavers.com",202],["pittsburghpanthers.com",202],["rolltide.com",202],["texassports.com",202],["thesundevils.com",202],["uclabruins.com",202],["wvuathletics.com",202],["wvusports.com",202],["arizonawildcats.com",202],["calbears.com",202],["cuse.com",202],["georgiadogs.com",202],["goducks.com",202],["goheels.com",202],["gostanford.com",202],["insidekstatesports.com",202],["insidekstatesports.info",202],["insidekstatesports.net",202],["insidekstatesports.org",202],["k-stateathletics.com",202],["k-statefootball.net",202],["k-statefootball.org",202],["k-statesports.com",202],["k-statesports.net",202],["k-statesports.org",202],["k-statewomenshoops.com",202],["k-statewomenshoops.net",202],["k-statewomenshoops.org",202],["kstateathletics.com",202],["kstatefootball.net",202],["kstatefootball.org",202],["kstatesports.com",202],["kstatewomenshoops.com",202],["kstatewomenshoops.net",202],["kstatewomenshoops.org",202],["ksuathletics.com",202],["ksusports.com",202],["scarletknights.com",202],["showdownforrelief.com",202],["syracusecrunch.com",202],["texastech.com",202],["theacc.com",202],["ukathletics.com",202],["usctrojans.com",202],["utahutes.com",202],["utsports.com",202],["wsucougars.com",202],["tricksplit.io",202],["fangraphs.com",203],["4players.de",[204,287]],["buffed.de",204],["gamesaktuell.de",204],["gamezone.de",204],["pcgames.de",204],["videogameszone.de",204],["tvspielfilm.de",[205,206,207,208]],["tvtoday.de",[205,206,207,208]],["chip.de",[205,206,207,208]],["focus.de",[205,206,207,208]],["planetaminecraft.com",209],["cravesandflames.com",210],["codesnse.com",210],["link.paid4file.com",210],["flyad.vip",210],["lapresse.ca",211],["kolyoom.com",212],["ilovephd.com",212],["negumo.com",213],["games.wkb.jp",[214,215]],["fandom.com",[216,579,580]],["kenshi.fandom.com",217],["hausbau-forum.de",218],["homeairquality.org",218],["faucettronn.click",218],["fake-it.ws",219],["laksa19.github.io",220],["1shortlink.com",221],["nesia.my.id",222],["u-s-news.com",223],["makemoneywithurl.com",224],["junkyponk.com",224],["healthfirstweb.com",224],["vocalley.com",224],["yogablogfit.com",224],["howifx.com",[224,455]],["en.financerites.com",224],["mythvista.com",224],["livenewsflix.com",224],["cureclues.com",224],["apekite.com",224],["host-buzz.com",224],["insmyst.com",224],["wp2host.com",224],["blogtechh.com",224],["techbixby.com",224],["blogmyst.com",224],["resetoff.pl",225],["sexodi.com",225],["cdn77.org",226],["howtofixwindows.com",227],["3sexporn.com",228],["momxxxsex.com",228],["myfreevintageporn.com",228],["penisbuyutucum.net",228],["ujszo.com",229],["newsmax.com",230],["bobs-tube.com",231],["nadidetarifler.com",232],["siz.tv",232],["suzylu.co.uk",[233,234]],["onworks.net",235],["yabiladi.com",235],["downloadsoft.net",236],["pixsera.net",237],["testlanguages.com",238],["newsinlevels.com",238],["videosinlevels.com",238],["cbs.com",239],["paramountplus.com",239],["abysscdn.com",[240,241]],["buktube.com",242],["fullxh.com",242],["galleryxh.site",242],["megaxh.com",242],["movingxh.world",242],["seexh.com",242],["unlockxh4.com",242],["valuexh.life",242],["xhaccess.com",242],["xhadult2.com",242],["xhadult3.com",242],["xhadult4.com",242],["xhadult5.com",242],["xhamster46.com",242],["xhamsterporno.mx",242],["xhbig.com",242],["xhbranch5.com",242],["xhchannel.com",242],["xhchannel2.com",242],["xhdate.world",242],["xhday.com",242],["xhday1.com",242],["xhlease.world",242],["xhmoon5.com",242],["xhofficial.com",242],["xhopen.com",242],["xhplanet1.com",242],["xhplanet2.com",242],["xhreal2.com",242],["xhreal3.com",242],["xhspot.com",242],["xhtab2.com",242],["xhtab4.com",242],["xhtotal.com",242],["xhtree.com",242],["xhvictory.com",242],["xhwebsite.com",242],["xhwebsite2.com",242],["xhwebsite5.com",242],["xhwide1.com",242],["xhwide2.com",242],["xhwide5.com",242],["xhxh3.xyz",242],["lightnovelworld.com",243],["megadescarga.net",[244,245,246,247]],["megadescargas.net",[244,245,246,247]],["hentaihaven.xxx",248],["jacquieetmicheltv2.net",250],["fcportables.com",[252,253]],["emurom.net",254],["ultimate-guitar.com",255],["teachmemicro.com",256],["willcycle.com",256],["2ndrun.tv",256],["rackusreads.com",256],["xyzsports111.xyz",[257,258,259]],["xyzsports112.xyz",[257,258,259]],["xyzsports113.xyz",[257,258,259]],["xyzsports114.xyz",[257,258,259]],["xyzsprtsfrmr1.site",[257,258,259]],["xyzsprtsfrmr2.site",[257,258,259]],["claimbits.net",260],["sexyscope.net",261],["recherche-ebook.fr",263],["easymc.io",263],["zonebourse.com",264],["pink-sluts.net",265],["madoohd.com",266],["andhrafriends.com",267],["benzinpreis.de",268],["turtleviplay.xyz",269],["defenseone.com",270],["govexec.com",270],["nextgov.com",270],["route-fifty.com",270],["sharing.wtf",271],["wetter3.de",272],["arahdrive.com",273],["aiimgvlog.fun",[273,298]],["esportivos.fun",274],["cosmonova-broadcast.tv",275],["soccerinhd.com",276],["techedubyte.com",276],["hartvannederland.nl",277],["shownieuws.nl",277],["vandaaginside.nl",277],["rock.porn",[278,279]],["videzz.net",[280,281]],["ezaudiobookforsoul.com",282],["club386.com",283],["androidpolice.com",284],["cbr.com",284],["collider.com",284],["dualshockers.com",284],["gamerant.com",284],["howtogeek.com",284],["makeuseof.com",284],["movieweb.com",284],["screenrant.com",284],["thegamer.com",284],["xda-developers.com",284],["banned.video",284],["madmaxworld.tv",284],["wheelofgold.com",285],["littlebigsnake.com",286],["onlinesoccermanager.com",287],["njav.tv",288],["netfapx.com",288],["easyfun.gg",289],["uploadmall.com",290],["rapid-cloud.co",290],["smailpro.com",291],["ilgazzettino.it",292],["ilmessaggero.it",292],["3bmeteo.com",[293,294]],["mconverter.eu",295],["lover937.net",296],["10gb.vn",297],["starkroboticsfrc.com",298],["sinonimos.de",298],["antonimos.de",298],["quesignifi.ca",298],["tiktokrealtime.com",298],["tiktokcounter.net",298],["tpayr.xyz",298],["poqzn.xyz",298],["ashrfd.xyz",298],["rezsx.xyz",298],["tryzt.xyz",298],["ashrff.xyz",298],["rezst.xyz",298],["dawenet.com",298],["erzar.xyz",298],["waezm.xyz",298],["waezg.xyz",298],["blackwoodacademy.org",298],["cryptednews.space",298],["vivuq.com",298],["swgop.com",298],["vbnmll.com",298],["telcoinfo.online",298],["dshytb.com",298],["fitdynamos.com",[298,300]],["btcbitco.in",[298,302]],["btcsatoshi.net",298],["cempakajaya.com",298],["crypto4yu.com",298],["readbitcoin.org",298],["wiour.com",298],["finish.addurl.biz",298],["laweducationinfo.com",298],["savemoneyinfo.com",298],["worldaffairinfo.com",298],["godstoryinfo.com",298],["successstoryinfo.com",298],["cxissuegk.com",298],["learnmarketinfo.com",298],["bhugolinfo.com",298],["armypowerinfo.com",298],["rsadnetworkinfo.com",298],["rsinsuranceinfo.com",298],["rsfinanceinfo.com",298],["rsgamer.app",298],["rssoftwareinfo.com",298],["rshostinginfo.com",298],["rseducationinfo.com",298],["phonereviewinfo.com",298],["makeincomeinfo.com",298],["gknutshell.com",298],["vichitrainfo.com",298],["workproductivityinfo.com",298],["dopomininfo.com",298],["hostingdetailer.com",298],["fitnesssguide.com",298],["tradingfact4u.com",298],["cryptofactss.com",298],["softwaredetail.com",298],["artoffocas.com",298],["insurancesfact.com",298],["advertisingexcel.com",298],["allcryptoz.net",298],["batmanfactor.com",298],["beautifulfashionnailart.com",298],["crewbase.net",298],["documentaryplanet.xyz",298],["crewus.net",298],["gametechreviewer.com",298],["midebalonu.net",298],["misterio.ro",298],["phineypet.com",298],["seory.xyz",298],["shinbhu.net",298],["shinchu.net",298],["substitutefor.com",298],["talkforfitness.com",298],["thefitbrit.co.uk",298],["thumb8.net",298],["thumb9.net",298],["topcryptoz.net",298],["uniqueten.net",298],["ultraten.net",298],["exactpay.online",298],["kiddyearner.com",298],["luckydice.net",299],["adarima.org",299],["tieutietkiem.com",299],["weatherwx.com",299],["sattaguess.com",299],["winshell.de",299],["rosasidan.ws",299],["modmakers.xyz",299],["gamepure.in",299],["warrenrahul.in",299],["austiblox.net",299],["upiapi.in",299],["myownguess.in",299],["networkhint.com",299],["watchhentai.net",299],["thichcode.net",299],["texturecan.com",299],["tikmate.app",[299,531]],["4funbox.com",301],["nephobox.com",301],["1024tera.com",301],["blog.cryptowidgets.net",302],["blog.insurancegold.in",302],["blog.wiki-topia.com",302],["blog.coinsvalue.net",302],["blog.cookinguide.net",302],["blog.freeoseocheck.com",302],["blog24.me",302],["bildirim.link",304],["appsbull.com",305],["diudemy.com",305],["maqal360.com",305],["lifesurance.info",306],["akcartoons.in",307],["cybercityhelp.in",307],["infokeeda.xyz",308],["webzeni.com",308],["dl.apkmoddone.com",309],["phongroblox.com",309],["apkmodvn.com",310],["streamelements.com",[312,313]],["share.hntv.tv",[313,648,649,650]],["forum.dji.com",[313,650]],["unionpayintl.com",[313,649]],["arcai.com",314],["my-code4you.blogspot.com",315],["flickr.com",316],["firefile.cc",317],["pestleanalysis.com",317],["kochamjp.pl",317],["tutorialforlinux.com",317],["whatsaero.com",317],["animeblkom.net",[317,333]],["blkom.com",317],["globes.co.il",[318,319]],["jardiner-malin.fr",320],["tw-calc.net",321],["ohmybrush.com",322],["talkceltic.net",323],["mentalfloss.com",324],["uprafa.com",325],["cube365.net",326],["nightfallnews.com",[327,328]],["wwwfotografgotlin.blogspot.com",329],["freelistenonline.com",329],["badassdownloader.com",330],["quickporn.net",331],["yellowbridge.com",332],["aosmark.com",334],["atozmath.com",[336,337,338,339,340,341,342]],["newyorker.com",343],["brighteon.com",344],["more.tv",345],["video1tube.com",346],["alohatube.xyz",346],["fshost.me",347],["link.cgtips.org",348],["hentaicloud.com",349],["paperzonevn.com",351],["hentaienglish.com",352],["hentaiporno.xxx",352],["venge.io",[353,354]],["btcbux.io",355],["its.porn",[356,357]],["atv.at",358],["kusonime.com",[359,360]],["jetpunk.com",362],["imgur.com",[363,364,542]],["hentai-party.com",365],["hentaicomics.pro",365],["xxx-comics.pro",365],["genshinimpactcalculator.com",368],["mysexgames.com",369],["embed.indavideo.hu",372],["gdr-online.com",373],["mmm.dk",374],["iqiyi.com",[375,376,523]],["m.iqiyi.com",377],["japopav.tv",378],["lvturbo.com",378],["nbcolympics.com",379],["apkhex.com",380],["indiansexstories2.net",381],["issstories.xyz",381],["1340kbbr.com",382],["gorgeradio.com",382],["kduk.com",382],["kedoam.com",382],["kejoam.com",382],["kelaam.com",382],["khsn1230.com",382],["kjmx.rocks",382],["kloo.com",382],["klooam.com",382],["klykradio.com",382],["kmed.com",382],["kmnt.com",382],["kool991.com",382],["kpnw.com",382],["kppk983.com",382],["krktcountry.com",382],["ktee.com",382],["kwro.com",382],["kxbxfm.com",382],["thevalley.fm",382],["quizlet.com",383],["dsocker1234.blogspot.com",384],["schoolcheats.net",[385,386]],["mgnet.xyz",387],["designtagebuch.de",388],["pixroute.com",389],["uploady.io",390],["calculator-online.net",391],["porngames.club",392],["sexgames.xxx",392],["111.90.159.132",393],["battleplan.news",393],["mobile-tracker-free.com",394],["pfps.gg",395],["ac-illust.com",[396,397]],["photo-ac.com",[396,397]],["vlxxs.net",398],["rapelust.com",398],["vtube.to",398],["vtplay.net",398],["desitelugusex.com",398],["xvideos-downloader.net",398],["xxxvideotube.net",398],["sdefx.cloud",398],["nozomi.la",398],["moviesonlinefree.net",398],["social-unlock.com",399],["ninja.io",400],["sourceforge.net",401],["samfirms.com",402],["huffpost.com",403],["ingles.com",404],["spanishdict.com",404],["surfline.com",[405,406]],["play.tv3.ee",407],["play.tv3.lt",407],["play.tv3.lv",407],["tv3play.skaties.lv",407],["trendyoum.com",408],["bulbagarden.net",409],["moviestars.to",410],["hollywoodlife.com",411],["mat6tube.com",412],["textstudio.co",413],["newtumbl.com",414],["aruble.net",416],["nevcoins.club",417],["mail.com",418],["oggi.it",[421,422]],["manoramamax.com",421],["video.gazzetta.it",[421,422]],["mangakita.id",423],["mangakita.net",423],["poscishd.online",424],["avpgalaxy.net",425],["mhma12.tech",426],["panda-novel.com",427],["zebranovel.com",427],["lightsnovel.com",427],["eaglesnovel.com",427],["pandasnovel.com",427],["zadfaucet.com",428],["ewrc-results.com",429],["kizi.com",430],["cyberscoop.com",431],["fedscoop.com",431],["canale.live",432],["indiatimes.com",433],["mafiatown.pl",[434,435]],["jeep-cj.com",436],["sponsorhunter.com",437],["cloudcomputingtopics.net",438],["likecs.com",439],["tiscali.it",440],["linkspy.cc",441],["tutelehd3.xyz",442],["dirty.pink",[443,444,445]],["adshnk.com",446],["chattanoogan.com",447],["adsy.pw",448],["playstore.pw",448],["socialmediagirls.com",449],["windowspro.de",450],["snapinsta.app",451],["tvtv.ca",452],["tvtv.us",452],["mydaddy.cc",453],["roadtrippin.fr",454],["vavada5com.com",455],["redketchup.io",[456,457,458]],["streamsilk.com",459],["anyporn.com",[460,475]],["bravoporn.com",460],["bravoteens.com",460],["crocotube.com",460],["hellmoms.com",460],["hellporno.com",460],["sex3.com",460],["tubewolf.com",460],["xbabe.com",460],["xcum.com",460],["zedporn.com",460],["imagetotext.info",461],["infokik.com",462],["freepik.com",463],["ddwloclawek.pl",[464,465]],["deezer.com",466],["my-subs.co",467],["plaion.com",468],["slideshare.net",[469,470]],["ustreasuryyieldcurve.com",471],["businesssoftwarehere.com",472],["goo.st",472],["freevpshere.com",472],["softwaresolutionshere.com",472],["staige.tv",476],["in-jpn.com",477],["oninet.ne.jp",477],["xth.jp",477],["androidadult.com",478],["streamvid.net",479],["watchtv24.com",480],["cellmapper.net",481],["medscape.com",482],["newscon.org",[483,484]],["arkadium.com",485],["bembed.net",486],["elbailedeltroleo.site",486],["embedv.net",486],["fslinks.org",486],["listeamed.net",486],["v6embed.xyz",486],["vgplayer.xyz",486],["vid-guard.com",486],["vidguard.online",486],["app.blubank.com",487],["mobileweb.bankmellat.ir",487],["sportdeutschland.tv",488],["kcra.com",488],["wcvb.com",488],["chat.nrj.fr",489],["ccthesims.com",496],["chromeready.com",496],["coursedrive.org",496],["dtbps3games.com",496],["illustratemagazine.com",496],["uknip.co.uk",496],["vod.pl",497],["megadrive-emulator.com",498],["animesaga.in",501],["moviesapi.club",501],["bestx.stream",501],["watchx.top",501],["digimanie.cz",502],["svethardware.cz",502],["srvy.ninja",503],["drawer-opportunity-i-243.site",504],["tchatche.com",505],["cnn.com",[506,507,508]],["edmdls.com",509],["freshremix.net",509],["scenedl.org",509],["trakt.tv",510],["client.falixnodes.net",511],["shroomers.app",512],["classicalradio.com",513],["di.fm",513],["jazzradio.com",513],["radiotunes.com",513],["rockradio.com",513],["zenradio.com",513],["pc-builds.com",514],["qtoptens.com",514],["reuters.com",514],["today.com",514],["videogamer.com",514],["wrestlinginc.com",514],["gbatemp.net",514],["movie-th.tv",515],["iwanttfc.com",516],["nutraingredients-asia.com",517],["nutraingredients-latam.com",517],["nutraingredients-usa.com",517],["nutraingredients.com",517],["mavenarts.in",518],["ozulscansen.com",519],["fitnessbr.click",520],["minhareceita.xyz",520],["doomied.monster",521],["lookmovie2.to",521],["royalroad.com",522],["biletomat.pl",524],["hextank.io",[525,526]],["filmizlehdfilm.com",[527,528,529,530]],["fullfilmizle.cc",[527,528,529,530]],["sagewater.com",532],["redlion.net",532],["satdl.com",533],["vidstreaming.xyz",534],["everand.com",535],["myradioonline.pl",536],["tacobell.com",538],["zefoy.com",539],["cnet.com",540],["natgeotv.com",543],["globo.com",544],["wayfair.com",545],["br.de",546],["indeed.com",547],["pasteboard.co",548],["clickhole.com",549],["deadspin.com",549],["gizmodo.com",549],["jalopnik.com",549],["jezebel.com",549],["kotaku.com",549],["lifehacker.com",549],["splinternews.com",549],["theinventory.com",549],["theonion.com",549],["theroot.com",549],["thetakeout.com",549],["pewresearch.org",549],["los40.com",[550,551]],["as.com",551],["telegraph.co.uk",[552,553]],["poweredbycovermore.com",[552,602]],["lumens.com",[552,602]],["verizon.com",554],["humanbenchmark.com",555],["politico.com",556],["officedepot.co.cr",[557,558]],["usnews.com",561],["factable.com",563],["zee5.com",564],["gala.fr",565],["geo.fr",565],["voici.fr",565],["gloucestershirelive.co.uk",566],["arsiv.mackolik.com",567],["jacksonguitars.com",568],["scandichotels.com",569],["stylist.co.uk",570],["nettiauto.com",571],["thaiairways.com",[572,573]],["cerbahealthcare.it",[574,575]],["futura-sciences.com",[574,591]],["tiendaenlinea.claro.com.ni",[576,577]],["tieba.baidu.com",578],["grasshopper.com",[581,582]],["epson.com.cn",[583,584,585,586]],["oe24.at",[587,588]],["szbz.de",587],["platform.autods.com",[589,590]],["wikihow.com",592],["citibank.com.sg",593],["uol.com.br",[594,595,596,597,598]],["gazzetta.gr",599],["digicol.dpm.org.cn",[600,601]],["virginmediatelevision.ie",603],["larazon.es",[604,605]],["waitrosecellar.com",[606,607,608]],["sharpen-free-design-generator.netlify.app",[610,611]],["help.cashctrl.com",[612,613]],["gry-online.pl",614],["vidaextra.com",615],["commande.rhinov.pro",[616,617]],["ecom.wixapps.net",[616,617]],["tipranks.com",[618,619]],["iceland.co.uk",[620,621,622]],["socket.pearsoned.com",623],["tntdrama.com",[624,625]],["mobile.de",[626,627]],["ioe.vn",[628,629]],["geiriadur.ac.uk",[628,632]],["welsh-dictionary.ac.uk",[628,632]],["bikeportland.org",[630,631]],["biologianet.com",[595,596,597]],["10play.com.au",[633,634]],["sunshine-live.de",[635,636]],["whatismyip.com",[637,638]],["myfitnesspal.com",639],["netoff.co.jp",[640,641]],["clickjogos.com.br",644],["bristan.com",[645,646]],["zillow.com",647],["optimum.net",[651,652]],["investor-web.hdfcfund.com",653],["user.guancha.cn",[654,655]],["sosovalue.com",656],["bandyforbundet.no",[657,658]],["tatacommunications.com",659],["suamusica.com.br",[660,661,662]],["macrotrends.net",[663,664]],["code.world",665],["topgear.com",666],["eservice.directauto.com",[667,668]],["nbcsports.com",669],["standard.co.uk",670],["pruefernavi.de",[671,672]],["poophq.com",674],["veev.to",674],["uber.com",[675,676]],["jdsports.com",[675,676]],["engadget.com",[675,676]],["yahoo.com",[675,676]],["techcrunch.com",[675,676]],["rivals.com",[675,676]],["kkrt.com",[675,676]],["crunchyroll.com",[675,676]],["dnb.com",[675,676]],["dnb.co.uk",[675,676]],["weather.com",[675,676]],["ubereats.com",[675,676]],["usatoday.com",677]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,50]],["1movies",[14,17]],["xmovies8",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",21],["hqq",[22,23]],["waaw",[23,24]],["younetu",23],["vvtplayer",23],["123link",25],["adshort",25],["linkshorts",25],["adsrt",25],["vinaurl",25],["adfloz",25],["dutchycorp",25],["shortearn",25],["pingit",25],["shrink",25],["tmearn",25],["megalink",25],["miniurl",25],["gplinks",25],["clk",25],["pureshort",25],["shrinke",25],["shrinkme",25],["link1s",25],["shortzzy",25],["shorttey",[25,196]],["lite-link",25],["adcorto",25],["zshort",25],["upfiles",25],["linkfly",25],["wplink",25],["seulink",25],["encurtalink",25],["camwhores",[26,37,79,80,81]],["tube8",[27,28]],["youporn",28],["redtube",28],["pornhub",[28,182]],["upornia",[30,31]],["fmovies",50],["streamwish",[54,55]],["xtits",[58,115]],["pouvideo",60],["povvideo",60],["povw1deo",60],["povwideo",60],["powv1deo",60],["powvibeo",60],["powvideo",60],["powvldeo",60],["plyjam",[65,66]],["fxporn69",71],["vipbox",72],["viprow",72],["desbloqueador",76],["xberuang",77],["teknorizen",77],["subtorrents",85],["subtorrents1",85],["newpelis",85],["pelix",85],["allcalidad",85],["infomaniakos",85],["filecrypt",90],["tornadomovies",96],["icdrama",102],["mangasail",102],["file4go",104],["mangovideo",116],["asianclub",124],["anitube",127],["streamingcommunity",127],["mixdrop",129],["uploadev",153],["ver-pelis-online",161],["ancient-origins",170],["spankbang",189],["lookcam",196],["lootlinks",196],["dpstream",199],["bluemediafiles",201],["docer",225],["hamsterix",242],["xhamster",242],["xhamster1",242],["xhamster10",242],["xhamster11",242],["xhamster12",242],["xhamster13",242],["xhamster14",242],["xhamster15",242],["xhamster16",242],["xhamster17",242],["xhamster18",242],["xhamster19",242],["xhamster20",242],["xhamster2",242],["xhamster3",242],["xhamster4",242],["xhamster42",242],["xhamster5",242],["xhamster7",242],["xhamster8",242],["acortalo",[244,245,246,247]],["acortar",[244,245,246,247]],["a2zapk",251],["kickassanime",262],["doomovie-hd",266],["drakecomic",285],["terabox",301],["ctrlv",335],["123movieshd",361],["uproxy",366],["animesa",367],["cinecalidad",[370,371]],["dvdplay",398],["apkmaven",415],["gmx",419],["gamereactor",474],["vembed",486],["empire-anime",[490,491,492,493,494]],["empire-stream",[490,491,492]],["empire-streaming",[490,491,492]],["empire-streamz",[490,491,492]],["tvhay",[499,500]],["lookmovie",521],["filmizletv",[527,528,529,530]],["www.google",537],["officedepot",[559,560]],["foundit",[642,643]]]);

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
