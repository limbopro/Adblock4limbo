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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["Object.prototype.ads.nopreroll_","true"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS1","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["_btcCheck","false"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,589]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,257]],["gadgets.es",[12,257]],["amateurporn.co",[12,117]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,444]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,101]],["familyporn.tv",15],["cloudemb.com",[15,364]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,83]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["netu.frembed.fun",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,122]],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,201]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,214]],["owllink.net",24],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,232]],["sekilastekno.com",24],["smoner.com",24],["gyanlight.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,228]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["vipurl.in",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,289]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["cety.app",24],["exego.app",[24,285]],["cutlink.net",24],["cutsy.net",24],["cutyurls.com",24],["cutty.app",24],["cutnet.net",24],["tinys.click",[24,214]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tvi.la",24],["iir.la",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,228]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["thotpacks.xyz",24],["megaurl.in",24],["megafly.in",24],["simana.online",24],["fooak.com",24],["link.paid4link.com",[24,296]],["exalink.fun",24],["indiamaja.com",24],["newshuta.in",24],["shortxlinks.com",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["apkshrt.com",24],["srts.me",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["1shorten.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["viraloc.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["haonguyen.top",24],["claimfreebits.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["short.palmeratv.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["pix4link.com",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,140]],["download.baominh.tech",24],["bblink.com",24],["linkbr.xyz",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["dash-free.com",[24,214]],["snowurl.com",[24,214]],["netfile.cc",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,458]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,214]],["coinsl.click",24],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,50]],["camwhorez.tv",[25,36,82,83]],["cambay.tv",[25,52,82,114,116,117,118,119]],["fpo.xxx",[25,52]],["sexemix.com",25],["heavyfetish.com",[25,524]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["viki.com",[34,35]],["sleazyneasy.com",[36,37,38]],["smutr.com",[36,197]],["watchdirty.to",[36,83,84,117]],["yourporngod.com",[36,37]],["javbangers.com",[36,334]],["camfox.com",36],["camthots.tv",[36,114]],["shegotass.info",36],["amateur8.com",36],["bigtitslust.com",36],["ebony8.com",36],["freeporn8.com",36],["lesbian8.com",36],["maturetubehere.com",36],["sortporn.com",36],["webcamvau.com",36],["motherporno.com",[36,37,52,116]],["tktube.com",36],["theporngod.com",[36,37]],["pornsocket.com",39],["luxuretv.com",40],["porndig.com",[41,42]],["webcheats.com.br",43],["ceesty.com",[44,45]],["gestyy.com",[44,45]],["corneey.com",45],["destyy.com",45],["festyy.com",45],["sh.st",45],["mitaku.net",45],["angrybirdsnest.com",46],["zrozz.com",46],["clix4btc.com",46],["4tests.com",46],["planet-explorers-isos.com",46],["business-standard.com",46],["goltelevision.com",46],["news-und-nachrichten.de",46],["laradiobbs.net",46],["urlaubspartner.net",46],["produktion.de",46],["cinemaxxl.de",46],["bladesalvador.com",46],["tempr.email",46],["katfile.com",46],["trust.zone",46],["cshort.org",46],["friendproject.net",46],["covrhub.com",46],["planetsuzy.org",47],["empflix.com",48],["freeplayervideo.com",49],["nazarickol.com",49],["player-cdn.com",49],["playhydrax.com",[49,244,245]],["alleneconomicmatter.com",49],["apinchcaseation.com",49],["bethshouldercan.com",49],["bigclatterhomesguideservice.com",49],["bradleyviewdoctor.com",49],["brookethoughi.com",49],["brucevotewithin.com",49],["cindyeyefinal.com",49],["denisegrowthwide.com",49],["donaldlineelse.com",49],["edwardarriveoften.com",49],["erikcoldperson.com",49],["graceaddresscommunity.com",49],["heatherdiscussionwhen.com",49],["housecardsummerbutton.com",49],["jamesstartstudent.com",49],["jamiesamewalk.com",49],["jasminetesttry.com",49],["jasonresponsemeasure.com",49],["jayservicestuff.com",49],["johntryopen.com",49],["josephseveralconcern.com",49],["kennethofficialitem.com",49],["lisatrialidea.com",49],["loriwithinfamily.com",49],["lukecomparetwo.com",49],["markstyleall.com",49],["michaelapplysome.com",49],["morganoperationface.com",49],["nectareousoverelate.com",49],["paulkitchendark.com",49],["rebeccaneverbase.com",49],["roberteachfinal.com",49],["robertplacespace.com",49],["ryanagoinvolve.com",49],["sandrataxeight.com",49],["seanshowcould.com",49],["sethniceletter.com",49],["shannonpersonalcost.com",49],["sharonwhiledemocratic.com",49],["stevenimaginelittle.com",49],["strawberriesporail.com",49],["timberwoodanotia.com",49],["tinycat-voe-fashion.com",49],["troyyourlead.com",49],["uptodatefinishconference.com",49],["uptodatefinishconferenceroom.com",49],["vincentincludesuccessful.com",49],["voe.sx",49],["motphimtv.com",49],["rabbitstream.net",49],["projectfreetv.one",49],["transparentcalifornia.com",50],["deepbrid.com",51],["submityourflicks.com",52],["3movs.com",52],["bravoerotica.net",[52,116]],["youx.xxx",52],["camclips.tv",[52,197]],["camflow.tv",[52,116,117,162,235]],["camhoes.tv",[52,114,116,117,162,235]],["xmegadrive.com",52],["xxxymovies.com",52],["xxxshake.com",52],["gayck.com",52],["xhand.com",[52,116]],["analdin.com",[52,116]],["webnovel.com",53],["videosgay.me",[54,55]],["oneupload.to",55],["oneupload.online",55],["wishfast.top",55],["schwaebische.de",56],["8tracks.com",57],["revealname.com",58],["fcportables.com",[59,60]],["kimcartoon.li",[61,648]],["kc.linksgen.com",[61,648]],["kisscartoon.se",[61,648]],["golfchannel.com",62],["telemundodeportes.com",62],["stream.nbcsports.com",62],["mathdf.com",62],["gamcore.com",63],["porcore.com",63],["69games.xxx",63],["javmix.app",63],["tecknity.com",64],["haaretz.co.il",65],["haaretz.com",65],["hungama.com",65],["a-o.ninja",65],["anime-odcinki.pl",65],["kumpulmanga.org",65],["shortgoo.blogspot.com",65],["tonanmedia.my.id",[65,480]],["yurasu.xyz",65],["isekaipalace.com",65],["vikistream.com",66],["eplayer.click",[66,67]],["mega4upload.com",[67,73]],["ennovelas.com",[67,73]],["n-tv.de",68],["brigitte.de",69],["stern.de",69],["foxsports.com.au",70],["canberratimes.com.au",70],["thesimsresource.com",71],["bdnewszh.com",73],["streamservicehd.click",73],["timeforbitco.in",74],["worldofbitco.in",[74,85]],["weatherx.co.in",[74,85]],["getyourbitco.in",74],["sunbtc.space",74],["ctrl.blog",75],["sportlife.es",76],["finofilipino.org",77],["acortarm.xyz",78],["speedtest.net",79],["mysflink.blogspot.com",80],["assia.tv",81],["assia4.com",81],["assia24.com",81],["cwtvembeds.com",[83,115]],["xmateur.com",[83,84,117]],["camlovers.tv",83],["porntn.com",83],["pornissimo.org",83],["sexcams-24.com",[83,117]],["watchporn.to",[83,117]],["camwhorez.video",83],["footstockings.com",[84,117]],["sbs.com.au",86],["ojogos.com.br",88],["powforums.com",89],["supforums.com",89],["studybullet.com",89],["usgamer.net",90],["recordonline.com",90],["freebitcoin.win",92],["e-monsite.com",92],["coindice.win",92],["sport-tv-guide.live",93],["temp-mails.com",94],["freiepresse.de",95],["investing.com",96],["mp3fiber.com",98],["chicoer.com",99],["dailybreeze.com",99],["dailybulletin.com",99],["dailynews.com",99],["delcotimes.com",99],["eastbaytimes.com",99],["macombdaily.com",99],["ocregister.com",99],["pasadenastarnews.com",99],["pe.com",99],["presstelegram.com",99],["redlandsdailyfacts.com",99],["reviewjournal.com",99],["santacruzsentinel.com",99],["saratogian.com",99],["sentinelandenterprise.com",99],["sgvtribune.com",99],["tampabay.com",99],["times-standard.com",99],["theoaklandpress.com",99],["trentonian.com",99],["twincities.com",99],["whittierdailynews.com",99],["bostonherald.com",99],["dailycamera.com",99],["sbsun.com",99],["dailydemocrat.com",99],["montereyherald.com",99],["orovillemr.com",99],["record-bee.com",99],["redbluffdailynews.com",99],["reporterherald.com",99],["thereporter.com",99],["timescall.com",99],["timesheraldonline.com",99],["ukiahdailyjournal.com",99],["dailylocal.com",99],["mercurynews.com",99],["suedkurier.de",100],["anysex.com",102],["vlist.se",103],["pornve.com",104],["coolrom.com.au",105],["pornohirsch.net",106],["marie-claire.es",107],["gamezhero.com",107],["flashgirlgames.com",107],["onlinesudoku.games",107],["mpg.football",107],["sssam.com",107],["globalnews.ca",108],["drinksmixer.com",109],["leitesculinaria.com",109],["fupa.net",110],["browardpalmbeach.com",111],["dallasobserver.com",111],["houstonpress.com",111],["miaminewtimes.com",111],["phoenixnewtimes.com",111],["westword.com",111],["nhentai.net",112],["nowtv.com.tr",113],["caminspector.net",114],["camwhoreshd.com",114],["camgoddess.tv",114],["gay4porn.com",116],["mypornhere.com",116],["camhub.cc",117],["sexwebvideo.com",117],["sexwebvideo.net",117],["love4porn.com",117],["thotvids.com",117],["watchmdh.to",117],["celebwhore.com",117],["cluset.com",117],["4kporn.xxx",117],["xhomealone.com",117],["lusttaboo.com",[117,406]],["hentai-moon.com",117],["mediapason.it",120],["linkspaid.com",120],["tuotromedico.com",120],["neoteo.com",120],["phoneswiki.com",120],["celebmix.com",120],["myneobuxportal.com",120],["oyungibi.com",120],["25yearslatersite.com",120],["jeshoots.com",121],["techhx.com",121],["karanapk.com",121],["flashplayer.fullstacks.net",123],["cloudapps.herokuapp.com",123],["texteditor.nsspot.net",123],["youfiles.herokuapp.com",123],["temp-mail.org",124],["javhdporn.net",125],["javstream.top",125],["comnuan.com",126],["veedi.com",127],["battleboats.io",127],["fruitlab.com",128],["acetack.com",128],["androidquest.com",128],["apklox.com",128],["chhaprawap.in",128],["gujarativyakaran.com",128],["kashmirstudentsinformation.in",128],["kisantime.com",128],["shetkaritoday.in",128],["pastescript.com",128],["trimorspacks.com",128],["updrop.link",128],["haddoz.net",128],["garoetpos.com",128],["stiletv.it",129],["hqtv.biz",131],["liveuamap.com",132],["muvibg.com",132],["audycje.tokfm.pl",133],["hulu.com",[134,135,136]],["shush.se",137],["emurom.net",138],["allkpop.com",139],["pickcrackpasswords.blogspot.com",141],["kfrfansub.com",142],["thuglink.com",142],["voipreview.org",142],["illicoporno.com",143],["lavoixdux.com",143],["tonpornodujour.com",143],["jacquieetmichel.net",143],["jacquieetmicheltv.net",[143,253,254]],["swame.com",143],["vosfemmes.com",143],["voyeurfrance.net",143],["hanime.tv",144],["pogo.com",145],["cloudvideo.tv",146],["legionjuegos.org",147],["legionpeliculas.org",147],["legionprogramas.org",147],["16honeys.com",148],["elespanol.com",149],["remodelista.com",150],["coolmathgames.com",[151,152,153,542]],["audiofanzine.com",154],["noweconomy.live",156],["howifx.com",[156,228]],["vavada5com.com",156],["hitokin.net",157],["developerinsider.co",158],["ilprimatonazionale.it",159],["hotabis.com",159],["root-nation.com",159],["italpress.com",159],["airsoftmilsimnews.com",159],["artribune.com",159],["thehindu.com",160],["cambro.tv",[161,162]],["nibelungen-kurier.de",163],["adfoc.us",165],["techyember.com",165],["remixbass.com",165],["techipop.com",165],["quickimageconverter.com",165],["mastharyana.com",165],["tea-coffee.net",165],["spatsify.com",165],["newedutopics.com",165],["getviralreach.in",165],["edukaroo.com",165],["funkeypagali.com",165],["careersides.com",165],["nayisahara.com",165],["wikifilmia.com",165],["infinityskull.com",165],["viewmyknowledge.com",165],["iisfvirtual.in",165],["starxinvestor.com",165],["jkssbalerts.com",165],["myprivatejobs.com",[165,286]],["wikitraveltips.com",[165,286]],["amritadrino.com",[165,286]],["sahlmarketing.net",165],["filmypoints.in",165],["fitnessholic.net",165],["moderngyan.com",165],["sattakingcharts.in",165],["freshbhojpuri.com",165],["bgmi32bitapk.in",165],["bankshiksha.in",165],["earn.mpscstudyhub.com",165],["earn.quotesopia.com",165],["money.quotesopia.com",165],["best-mobilegames.com",165],["learn.moderngyan.com",165],["bharatsarkarijobalert.com",165],["techacode.com",165],["trickms.com",165],["ielts-isa.edu.vn",165],["sptfy.be",165],["mcafee-com.com",[165,285]],["pianetamountainbike.it",166],["barchart.com",167],["modelisme.com",168],["parasportontario.ca",168],["prescottenews.com",168],["nrj-play.fr",169],["oeffentlicher-dienst.info",170],["hackingwithreact.com",171],["gutekueche.at",172],["eplfootballmatch.com",173],["peekvids.com",174],["playvids.com",174],["pornflip.com",174],["redensarten-index.de",175],["vw-page.com",176],["viz.com",[177,178]],["queenfaucet.website",179],["0rechner.de",180],["configspc.com",181],["xopenload.me",181],["uptobox.com",181],["uptostream.com",181],["onepiece-tube.com",182],["japgay.com",183],["mega-debrid.eu",184],["dreamdth.com",185],["diaridegirona.cat",187],["diariodeibiza.es",187],["diariodemallorca.es",187],["diarioinformacion.com",187],["eldia.es",187],["emporda.info",187],["farodevigo.es",187],["laopinioncoruna.es",187],["laopiniondemalaga.es",187],["laopiniondemurcia.es",187],["laopiniondezamora.es",187],["laprovincia.es",187],["levante-emv.com",187],["mallorcazeitung.es",187],["regio7.cat",187],["superdeporte.es",187],["playpaste.com",188],["player.rtl2.de",189],["freetutorialsus.com",190],["vidlii.com",[190,206]],["iammagnus.com",190],["dailyvideoreports.net",190],["unityassets4free.com",190],["cnbc.com",191],["puzzles.msn.com",192],["metro.us",192],["newsobserver.com",192],["arkadiumhosted.com",192],["firefaucet.win",194],["55k.io",195],["filelions.online",195],["stmruby.com",195],["direct-link.net",196],["direkt-wissen.com",196],["link-to.net",196],["fullhdxxx.com",198],["pornclassic.tube",199],["tubepornclassic.com",199],["etonline.com",200],["creatur.io",200],["drphil.com",200],["urbanmilwaukee.com",200],["ontiva.com",200],["hideandseek.world",200],["myabandonware.com",200],["kendam.com",200],["wttw.com",200],["synonyms.com",200],["definitions.net",200],["hostmath.com",200],["camvideoshub.com",200],["minhaconexao.com.br",200],["home-made-videos.com",202],["pxrnxx.xyz",202],["amateur-couples.com",202],["slutdump.com",202],["produsat.com",204],["12thman.com",206],["acusports.com",206],["atlantic10.com",206],["auburntigers.com",206],["baylorbears.com",206],["bceagles.com",206],["bgsufalcons.com",206],["big12sports.com",206],["bigten.org",206],["bradleybraves.com",206],["butlersports.com",206],["cmumavericks.com",206],["conferenceusa.com",206],["cyclones.com",206],["dartmouthsports.com",206],["daytonflyers.com",206],["dbupatriots.com",206],["dbusports.com",206],["denverpioneers.com",206],["fduknights.com",206],["fgcuathletics.com",206],["fightinghawks.com",206],["fightingillini.com",206],["floridagators.com",206],["friars.com",206],["friscofighters.com",206],["gamecocksonline.com",206],["goarmywestpoint.com",206],["gobison.com",206],["goblueraiders.com",206],["gobobcats.com",206],["gocards.com",206],["gocreighton.com",206],["godeacs.com",206],["goexplorers.com",206],["goetbutigers.com",206],["gofrogs.com",206],["gogriffs.com",206],["gogriz.com",206],["golobos.com",206],["gomarquette.com",206],["gopack.com",206],["gophersports.com",206],["goprincetontigers.com",206],["gopsusports.com",206],["goracers.com",206],["goshockers.com",206],["goterriers.com",206],["gotigersgo.com",206],["gousfbulls.com",206],["govandals.com",206],["gowyo.com",206],["goxavier.com",206],["gozags.com",206],["gozips.com",206],["griffinathletics.com",206],["guhoyas.com",206],["gwusports.com",206],["hailstate.com",206],["hamptonpirates.com",206],["hawaiiathletics.com",206],["hokiesports.com",206],["huskers.com",206],["icgaels.com",206],["iuhoosiers.com",206],["jsugamecocksports.com",206],["longbeachstate.com",206],["loyolaramblers.com",206],["lrtrojans.com",206],["lsusports.net",206],["morrisvillemustangs.com",206],["msuspartans.com",206],["muleriderathletics.com",206],["mutigers.com",206],["navysports.com",206],["nevadawolfpack.com",206],["niuhuskies.com",206],["nkunorse.com",206],["nuhuskies.com",206],["nusports.com",206],["okstate.com",206],["olemisssports.com",206],["omavs.com",206],["ovcsports.com",206],["owlsports.com",206],["purduesports.com",206],["redstormsports.com",206],["richmondspiders.com",206],["sfajacks.com",206],["shupirates.com",206],["siusalukis.com",206],["smcgaels.com",206],["smumustangs.com",206],["soconsports.com",206],["soonersports.com",206],["themw.com",206],["tulsahurricane.com",206],["txst.com",206],["txstatebobcats.com",206],["ubbulls.com",206],["ucfknights.com",206],["ucirvinesports.com",206],["uconnhuskies.com",206],["uhcougars.com",206],["uicflames.com",206],["umterps.com",206],["uncwsports.com",206],["unipanthers.com",206],["unlvrebels.com",206],["uoflsports.com",206],["usdtoreros.com",206],["utahstateaggies.com",206],["utepathletics.com",206],["utrockets.com",206],["uvmathletics.com",206],["uwbadgers.com",206],["villanova.com",206],["wkusports.com",206],["wmubroncos.com",206],["woffordterriers.com",206],["1pack1goal.com",206],["bcuathletics.com",206],["bubraves.com",206],["goblackbears.com",206],["golightsgo.com",206],["gomcpanthers.com",206],["goutsa.com",206],["mercerbears.com",206],["pirateblue.com",206],["pirateblue.net",206],["pirateblue.org",206],["quinnipiacbobcats.com",206],["towsontigers.com",206],["tribeathletics.com",206],["tribeclub.com",206],["utepminermaniacs.com",206],["utepminers.com",206],["wkutickets.com",206],["aopathletics.org",206],["atlantichockeyonline.com",206],["bigsouthnetwork.com",206],["bigsouthsports.com",206],["chawomenshockey.com",206],["dbupatriots.org",206],["drakerelays.org",206],["ecac.org",206],["ecacsports.com",206],["emueagles.com",206],["emugameday.com",206],["gculopes.com",206],["godrakebulldog.com",206],["godrakebulldogs.com",206],["godrakebulldogs.net",206],["goeags.com",206],["goislander.com",206],["goislanders.com",206],["gojacks.com",206],["gomacsports.com",206],["gseagles.com",206],["hubison.com",206],["iowaconference.com",206],["ksuowls.com",206],["lonestarconference.org",206],["mascac.org",206],["midwestconference.org",206],["mountaineast.org",206],["niu-pack.com",206],["nulakers.ca",206],["oswegolakers.com",206],["ovcdigitalnetwork.com",206],["pacersports.com",206],["rmacsports.org",206],["rollrivers.com",206],["samfordsports.com",206],["uncpbraves.com",206],["usfdons.com",206],["wiacsports.com",206],["alaskananooks.com",206],["broncathleticfund.com",206],["cameronaggies.com",206],["columbiacougars.com",206],["etownbluejays.com",206],["gobadgers.ca",206],["golancers.ca",206],["gometrostate.com",206],["gothunderbirds.ca",206],["kentstatesports.com",206],["lehighsports.com",206],["lopers.com",206],["lycoathletics.com",206],["lycomingathletics.com",206],["maraudersports.com",206],["mauiinvitational.com",206],["msumavericks.com",206],["nauathletics.com",206],["nueagles.com",206],["nwusports.com",206],["oceanbreezenyc.org",206],["patriotathleticfund.com",206],["pittband.com",206],["principiaathletics.com",206],["roadrunnersathletics.com",206],["sidearmsocial.com",206],["snhupenmen.com",206],["stablerarena.com",206],["stoutbluedevils.com",206],["uwlathletics.com",206],["yumacs.com",206],["collegefootballplayoff.com",206],["csurams.com",206],["cubuffs.com",206],["gobearcats.com",206],["gohuskies.com",206],["mgoblue.com",206],["osubeavers.com",206],["pittsburghpanthers.com",206],["rolltide.com",206],["texassports.com",206],["thesundevils.com",206],["uclabruins.com",206],["wvuathletics.com",206],["wvusports.com",206],["arizonawildcats.com",206],["calbears.com",206],["cuse.com",206],["georgiadogs.com",206],["goducks.com",206],["goheels.com",206],["gostanford.com",206],["insidekstatesports.com",206],["insidekstatesports.info",206],["insidekstatesports.net",206],["insidekstatesports.org",206],["k-stateathletics.com",206],["k-statefootball.net",206],["k-statefootball.org",206],["k-statesports.com",206],["k-statesports.net",206],["k-statesports.org",206],["k-statewomenshoops.com",206],["k-statewomenshoops.net",206],["k-statewomenshoops.org",206],["kstateathletics.com",206],["kstatefootball.net",206],["kstatefootball.org",206],["kstatesports.com",206],["kstatewomenshoops.com",206],["kstatewomenshoops.net",206],["kstatewomenshoops.org",206],["ksuathletics.com",206],["ksusports.com",206],["scarletknights.com",206],["showdownforrelief.com",206],["syracusecrunch.com",206],["texastech.com",206],["theacc.com",206],["ukathletics.com",206],["usctrojans.com",206],["utahutes.com",206],["utsports.com",206],["wsucougars.com",206],["tricksplit.io",206],["fangraphs.com",207],["4players.de",[208,330]],["buffed.de",208],["gamesaktuell.de",208],["gamezone.de",208],["pcgames.de",208],["videogameszone.de",208],["tvspielfilm.de",[209,210,211,212]],["tvtoday.de",[209,210,211,212]],["chip.de",[209,210,211,212]],["focus.de",[209,210,211,212]],["planetaminecraft.com",213],["cravesandflames.com",214],["codesnse.com",214],["link.paid4file.com",214],["flyad.vip",214],["lapresse.ca",215],["kolyoom.com",216],["ilovephd.com",216],["negumo.com",217],["games.wkb.jp",[218,219]],["fandom.com",[220,559,560]],["kenshi.fandom.com",221],["hausbau-forum.de",222],["homeairquality.org",222],["faucettronn.click",222],["ticketmaster.sg",222],["fake-it.ws",223],["laksa19.github.io",224],["1shortlink.com",225],["nesia.my.id",226],["u-s-news.com",227],["makemoneywithurl.com",228],["junkyponk.com",228],["healthfirstweb.com",228],["vocalley.com",228],["yogablogfit.com",228],["en.financerites.com",228],["mythvista.com",228],["livenewsflix.com",228],["cureclues.com",228],["apekite.com",228],["host-buzz.com",228],["insmyst.com",228],["wp2host.com",228],["blogtechh.com",228],["techbixby.com",228],["blogmyst.com",228],["resetoff.pl",229],["sexodi.com",229],["cdn77.org",230],["howtofixwindows.com",231],["3sexporn.com",232],["momxxxsex.com",232],["myfreevintageporn.com",232],["penisbuyutucum.net",232],["ujszo.com",233],["newsmax.com",234],["bobs-tube.com",235],["nadidetarifler.com",236],["siz.tv",236],["suzylu.co.uk",[237,238]],["onworks.net",239],["yabiladi.com",239],["downloadsoft.net",240],["pixsera.net",241],["testlanguages.com",242],["newsinlevels.com",242],["videosinlevels.com",242],["cbs.com",243],["paramountplus.com",243],["abysscdn.com",[244,245]],["buktube.com",246],["fullxh.com",246],["galleryxh.site",246],["megaxh.com",246],["movingxh.world",246],["seexh.com",246],["taoxh.life",246],["unlockxh4.com",246],["xhaccess.com",246],["xhadult2.com",246],["xhadult3.com",246],["xhadult4.com",246],["xhadult5.com",246],["xhamster46.com",246],["xhbig.com",246],["xhbranch5.com",246],["xhday.com",246],["xhday1.com",246],["xhmoon5.com",246],["xhplanet1.com",246],["xhplanet2.com",246],["xhreal2.com",246],["xhreal3.com",246],["xhtab2.com",246],["xhtab4.com",246],["xhtree.com",246],["xhvictory.com",246],["xhwebsite.com",246],["xhwebsite2.com",246],["xhwide1.com",246],["lightnovelworld.com",247],["megadescarga.net",[248,249,250,251]],["megadescargas.net",[248,249,250,251]],["hentaihaven.xxx",252],["jacquieetmicheltv2.net",254],["ultimate-guitar.com",256],["teachmemicro.com",257],["willcycle.com",257],["2ndrun.tv",257],["rackusreads.com",257],["xyzsports111.xyz",[258,259,260]],["xyzsports112.xyz",[258,259,260]],["xyzsports113.xyz",[258,259,260]],["xyzsports114.xyz",[258,259,260]],["xyzsprtsfrmr1.site",[258,259,260]],["xyzsprtsfrmr2.site",[258,259,260]],["claimbits.net",261],["sexyscope.net",262],["recherche-ebook.fr",264],["easymc.io",264],["zonebourse.com",265],["pink-sluts.net",266],["madoohd.com",267],["andhrafriends.com",268],["benzinpreis.de",269],["defenseone.com",270],["govexec.com",270],["nextgov.com",270],["route-fifty.com",270],["sharing.wtf",271],["wetter3.de",272],["arahdrive.com",273],["aiimgvlog.fun",[273,285]],["esportivos.fun",274],["cosmonova-broadcast.tv",275],["soccerinhd.com",276],["techedubyte.com",276],["hartvannederland.nl",277],["vandaaginside.nl",277],["rock.porn",[278,279]],["videzz.net",[280,281]],["ezaudiobookforsoul.com",282],["club386.com",283],["androidpolice.com",284],["cbr.com",284],["collider.com",284],["dualshockers.com",284],["gamerant.com",284],["howtogeek.com",284],["makeuseof.com",284],["movieweb.com",284],["screenrant.com",284],["thegamer.com",284],["xda-developers.com",284],["banned.video",284],["madmaxworld.tv",284],["starkroboticsfrc.com",285],["sinonimos.de",285],["antonimos.de",285],["quesignifi.ca",285],["tiktokrealtime.com",285],["tiktokcounter.net",285],["tpayr.xyz",285],["poqzn.xyz",285],["ashrfd.xyz",285],["rezsx.xyz",285],["tryzt.xyz",285],["ashrff.xyz",285],["rezst.xyz",285],["dawenet.com",285],["erzar.xyz",285],["waezm.xyz",285],["waezg.xyz",285],["blackwoodacademy.org",285],["cryptednews.space",285],["vivuq.com",285],["swgop.com",285],["vbnmll.com",285],["telcoinfo.online",285],["dshytb.com",285],["btcbitco.in",[285,288]],["btcsatoshi.net",285],["cempakajaya.com",285],["crypto4yu.com",285],["readbitcoin.org",285],["wiour.com",285],["finish.addurl.biz",285],["laweducationinfo.com",285],["savemoneyinfo.com",285],["worldaffairinfo.com",285],["godstoryinfo.com",285],["successstoryinfo.com",285],["learnmarketinfo.com",285],["bhugolinfo.com",285],["armypowerinfo.com",285],["rsadnetworkinfo.com",285],["rsinsuranceinfo.com",285],["rsfinanceinfo.com",285],["rsgamer.app",285],["rssoftwareinfo.com",285],["rshostinginfo.com",285],["rseducationinfo.com",285],["advertisingexcel.com",285],["allcryptoz.net",285],["batmanfactor.com",285],["beautifulfashionnailart.com",285],["crewbase.net",285],["documentaryplanet.xyz",285],["crewus.net",285],["gametechreviewer.com",285],["midebalonu.net",285],["misterio.ro",285],["phineypet.com",285],["seory.xyz",285],["shinbhu.net",285],["shinchu.net",285],["substitutefor.com",285],["talkforfitness.com",285],["thefitbrit.co.uk",285],["thumb8.net",285],["thumb9.net",285],["topcryptoz.net",285],["uniqueten.net",285],["ultraten.net",285],["exactpay.online",285],["kiddyearner.com",285],["luckydice.net",286],["adarima.org",286],["tieutietkiem.com",286],["weatherwx.com",286],["sattaguess.com",286],["winshell.de",286],["rosasidan.ws",286],["modmakers.xyz",286],["gamepure.in",286],["warrenrahul.in",286],["austiblox.net",286],["upiapi.in",286],["myownguess.in",286],["networkhint.com",286],["watchhentai.net",286],["thichcode.net",286],["texturecan.com",286],["tikmate.app",[286,514]],["4funbox.com",287],["nephobox.com",287],["1024tera.com",287],["blog.cryptowidgets.net",288],["blog.insurancegold.in",288],["blog.wiki-topia.com",288],["blog.coinsvalue.net",288],["blog.cookinguide.net",288],["blog.freeoseocheck.com",288],["blog24.me",288],["bildirim.link",290],["appsbull.com",291],["diudemy.com",291],["maqal360.com",291],["lifesurance.info",292],["infokeeda.xyz",293],["webzeni.com",293],["dl.apkmoddone.com",294],["phongroblox.com",294],["apkmodvn.com",295],["arcai.com",297],["my-code4you.blogspot.com",298],["flickr.com",299],["firefile.cc",300],["pestleanalysis.com",300],["kochamjp.pl",300],["tutorialforlinux.com",300],["whatsaero.com",300],["animeblkom.net",[300,316]],["blkom.com",300],["globes.co.il",[301,302]],["jardiner-malin.fr",303],["tw-calc.net",304],["ohmybrush.com",305],["talkceltic.net",306],["mentalfloss.com",307],["uprafa.com",308],["cube365.net",309],["nightfallnews.com",[310,311]],["wwwfotografgotlin.blogspot.com",312],["freelistenonline.com",312],["badassdownloader.com",313],["quickporn.net",314],["yellowbridge.com",315],["aosmark.com",317],["atozmath.com",[319,320,321,322,323,324,325]],["newyorker.com",326],["brighteon.com",327],["more.tv",328],["video1tube.com",329],["alohatube.xyz",329],["fshost.me",331],["link.cgtips.org",332],["hentaicloud.com",333],["netfapx.com",335],["paperzonevn.com",336],["hentaienglish.com",337],["hentaiporno.xxx",337],["venge.io",[338,339]],["btcbux.io",340],["its.porn",[341,342]],["atv.at",343],["kusonime.com",[344,345]],["jetpunk.com",347],["imgur.com",348],["hentai-party.com",349],["hentaicomics.pro",349],["xxx-comics.pro",349],["genshinimpactcalculator.com",352],["mysexgames.com",353],["embed.indavideo.hu",356],["coinurl.net",[357,358]],["gdr-online.com",359],["mmm.dk",360],["iqiyi.com",[361,362,506]],["m.iqiyi.com",363],["japopav.tv",364],["lvturbo.com",364],["nbcolympics.com",365],["apkhex.com",366],["indiansexstories2.net",367],["issstories.xyz",367],["1340kbbr.com",368],["gorgeradio.com",368],["kduk.com",368],["kedoam.com",368],["kejoam.com",368],["kelaam.com",368],["khsn1230.com",368],["kjmx.rocks",368],["kloo.com",368],["klooam.com",368],["klykradio.com",368],["kmed.com",368],["kmnt.com",368],["kool991.com",368],["kpnw.com",368],["kppk983.com",368],["krktcountry.com",368],["ktee.com",368],["kwro.com",368],["kxbxfm.com",368],["thevalley.fm",368],["quizlet.com",369],["dsocker1234.blogspot.com",370],["blick.ch",371],["schoolcheats.net",[372,373]],["mgnet.xyz",374],["designtagebuch.de",375],["pixroute.com",376],["uploady.io",377],["calculator-online.net",378],["porngames.club",379],["sexgames.xxx",379],["111.90.159.132",380],["battleplan.news",380],["mobile-tracker-free.com",381],["pfps.gg",382],["ac-illust.com",[383,384]],["photo-ac.com",[383,384]],["vlxxs.net",385],["rapelust.com",385],["vtube.to",385],["vtplay.net",385],["desitelugusex.com",385],["xvideos-downloader.net",385],["xxxvideotube.net",385],["sdefx.cloud",385],["nozomi.la",385],["moviesonlinefree.net",385],["social-unlock.com",386],["ninja.io",387],["sourceforge.net",388],["samfirms.com",389],["huffpost.com",390],["ingles.com",391],["spanishdict.com",391],["surfline.com",[392,393]],["play.tv3.ee",394],["play.tv3.lt",394],["play.tv3.lv",394],["tv3play.skaties.lv",394],["trendyoum.com",395],["bulbagarden.net",396],["moviestars.to",397],["hollywoodlife.com",398],["mat6tube.com",399],["textstudio.co",400],["newtumbl.com",401],["nevcoins.club",403],["mail.com",404],["oggi.it",[407,408]],["manoramamax.com",407],["video.gazzetta.it",[407,408]],["mangakita.id",409],["mangakita.net",409],["poscishd.online",410],["avpgalaxy.net",411],["mhma12.tech",412],["panda-novel.com",413],["zebranovel.com",413],["lightsnovel.com",413],["eaglesnovel.com",413],["pandasnovel.com",413],["zadfaucet.com",414],["ewrc-results.com",415],["kizi.com",416],["cyberscoop.com",417],["fedscoop.com",417],["canale.live",418],["indiatimes.com",419],["mafiatown.pl",[420,421]],["jeep-cj.com",422],["sponsorhunter.com",423],["cloudcomputingtopics.net",424],["likecs.com",425],["tiscali.it",426],["linkspy.cc",427],["tutelehd3.xyz",428],["dirty.pink",[429,430,431]],["adshnk.com",432],["chattanoogan.com",433],["adsy.pw",434],["playstore.pw",434],["socialmediagirls.com",435],["windowspro.de",436],["snapinsta.app",437],["tvtv.ca",438],["tvtv.us",438],["mydaddy.cc",439],["roadtrippin.fr",440],["redketchup.io",[441,442,443]],["anyporn.com",[444,460]],["bravoporn.com",444],["bravoteens.com",444],["crocotube.com",444],["hellmoms.com",444],["hellporno.com",444],["sex3.com",444],["tubewolf.com",444],["xbabe.com",444],["xcum.com",444],["zedporn.com",444],["imagetotext.info",445],["infokik.com",446],["freepik.com",447],["ddwloclawek.pl",[448,449]],["deezer.com",450],["my-subs.co",451],["plaion.com",452],["rapid-cloud.co",453],["slideshare.net",[454,455]],["ustreasuryyieldcurve.com",456],["businesssoftwarehere.com",457],["goo.st",457],["freevpshere.com",457],["softwaresolutionshere.com",457],["staige.tv",461],["in-jpn.com",462],["oninet.ne.jp",462],["xth.jp",462],["androidadult.com",463],["streamvid.net",464],["watchtv24.com",465],["cellmapper.net",466],["medscape.com",467],["newscon.org",[468,469]],["arkadium.com",470],["wheelofgold.com",471],["ozulmanga.com",471],["bembed.net",472],["elbailedeltroleo.site",472],["embedv.net",472],["fslinks.org",472],["listeamed.net",472],["v6embed.xyz",472],["vgplayer.xyz",472],["vid-guard.com",472],["vidguard.online",472],["app.blubank.com",473],["mobileweb.bankmellat.ir",473],["sportdeutschland.tv",474],["kcra.com",474],["wcvb.com",474],["ccthesims.com",481],["chromeready.com",481],["coursedrive.org",481],["dtbps3games.com",481],["illustratemagazine.com",481],["uknip.co.uk",481],["vod.pl",482],["megadrive-emulator.com",483],["animesaga.in",486],["moviesapi.club",486],["bestx.stream",486],["watchx.top",486],["digimanie.cz",487],["svethardware.cz",487],["srvy.ninja",488],["drawer-opportunity-i-243.site",489],["tchatche.com",490],["edmdls.com",491],["freshremix.net",491],["scenedl.org",491],["trakt.tv",492],["shroomers.app",493],["classicalradio.com",[494,495,496]],["di.fm",[494,495,496]],["jazzradio.com",[494,495,496]],["radiotunes.com",[494,495,496]],["rockradio.com",[494,495,496]],["zenradio.com",[494,495,496]],["pc-builds.com",497],["qtoptens.com",497],["reuters.com",497],["today.com",497],["videogamer.com",497],["wrestlinginc.com",497],["gbatemp.net",497],["movie-th.tv",498],["iwanttfc.com",499],["nutraingredients-asia.com",500],["nutraingredients-latam.com",500],["nutraingredients-usa.com",500],["nutraingredients.com",500],["mavenarts.in",501],["ozulscansen.com",502],["fitnessbr.click",503],["minhareceita.xyz",503],["doomied.monster",504],["lookmovie2.to",504],["royalroad.com",505],["biletomat.pl",507],["hextank.io",[508,509]],["filmizlehdfilm.com",[510,511,512,513]],["fullfilmizle.cc",[510,511,512,513]],["sagewater.com",515],["redlion.net",515],["satdl.com",516],["veev.to",517],["vidstreaming.xyz",518],["everand.com",519],["myradioonline.pl",520],["tacobell.com",522],["zefoy.com",523],["natgeotv.com",525],["br.de",526],["indeed.com",527],["pasteboard.co",528],["clickhole.com",529],["deadspin.com",529],["gizmodo.com",529],["jalopnik.com",529],["jezebel.com",529],["kotaku.com",529],["lifehacker.com",529],["splinternews.com",529],["theinventory.com",529],["theonion.com",529],["theroot.com",529],["thetakeout.com",529],["pewresearch.org",529],["los40.com",[530,531]],["as.com",531],["telegraph.co.uk",[532,533]],["poweredbycovermore.com",[532,582]],["lumens.com",[532,582]],["verizon.com",534],["humanbenchmark.com",535],["politico.com",536],["officedepot.co.cr",[537,538]],["usnews.com",541],["factable.com",543],["zee5.com",544],["gala.fr",545],["geo.fr",545],["voici.fr",545],["gloucestershirelive.co.uk",546],["arsiv.mackolik.com",547],["jacksonguitars.com",548],["scandichotels.com",549],["stylist.co.uk",550],["nettiauto.com",551],["thaiairways.com",[552,553]],["cerbahealthcare.it",[554,555]],["futura-sciences.com",[554,571]],["tiendaenlinea.claro.com.ni",[556,557]],["tieba.baidu.com",558],["grasshopper.com",[561,562]],["epson.com.cn",[563,564,565,566]],["oe24.at",[567,568]],["szbz.de",567],["platform.autods.com",[569,570]],["wikihow.com",572],["citibank.com.sg",573],["uol.com.br",[574,575,576,577,578]],["gazzetta.gr",579],["digicol.dpm.org.cn",[580,581]],["virginmediatelevision.ie",583],["larazon.es",[584,585]],["waitrosecellar.com",[586,587,588]],["sharpen-free-design-generator.netlify.app",[590,591]],["help.cashctrl.com",[592,593]],["commande.rhinov.pro",[594,595]],["ecom.wixapps.net",[594,595]],["tipranks.com",[596,597]],["iceland.co.uk",[598,599,600]],["socket.pearsoned.com",601],["tntdrama.com",[602,603]],["mobile.de",[604,605]],["ioe.vn",[606,607]],["geiriadur.ac.uk",[606,610]],["welsh-dictionary.ac.uk",[606,610]],["bikeportland.org",[608,609]],["biologianet.com",[575,576,577]],["10play.com.au",[611,612]],["sunshine-live.de",[613,614]],["whatismyip.com",[615,616]],["myfitnesspal.com",617],["netoff.co.jp",[618,619]],["clickjogos.com.br",622],["bristan.com",[623,624]],["zillow.com",625],["share.hntv.tv",[626,627,628,629]],["forum.dji.com",[626,629]],["optimum.net",[630,631]],["investor-web.hdfcfund.com",632],["user.guancha.cn",[633,634]],["sosovalue.com",635],["bandyforbundet.no",[636,637]],["tatacommunications.com",638],["suamusica.com.br",[639,640,641]],["macrotrends.net",[642,643]],["code.world",644],["topgear.com",645],["eservice.directauto.com",[646,647]],["jdsports.com",[649,650]],["engadget.com",[649,650]],["yahoo.com",[649,650]],["techcrunch.com",[649,650]],["rivals.com",[649,650]],["kkrt.com",[649,650]],["crunchyroll.com",[649,650]],["dnb.com",[649,650]],["dnb.co.uk",[649,650]],["weather.com",[649,650]],["ubereats.com",[649,650]],["usatoday.com",651]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,49]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,200]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,36,82,83,84]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,186]],["upornia",[29,30]],["fmovies",49],["xtits",[52,116]],["streamwish",[54,55]],["pouvideo",61],["povvideo",61],["povw1deo",61],["povwideo",61],["powv1deo",61],["powvibeo",61],["powvideo",61],["powvldeo",61],["plyjam",[66,67]],["fxporn69",72],["vipbox",73],["viprow",73],["desbloqueador",78],["xberuang",80],["teknorizen",80],["subtorrents",87],["subtorrents1",87],["newpelis",87],["pelix",87],["allcalidad",87],["infomaniakos",87],["filecrypt",91],["tornadomovies",97],["icdrama",103],["mangasail",103],["file4go",105],["mangovideo",117],["asianclub",125],["anitube",128],["mixdrop",130],["uploadev",155],["ver-pelis-online",164],["ancient-origins",173],["spankbang",193],["lookcam",200],["lootlinks",200],["dpstream",203],["bluemediafiles",205],["docer",229],["hamsterix",246],["xhamster",246],["xhamster1",246],["xhamster10",246],["xhamster11",246],["xhamster12",246],["xhamster13",246],["xhamster14",246],["xhamster15",246],["xhamster16",246],["xhamster17",246],["xhamster18",246],["xhamster19",246],["xhamster20",246],["xhamster2",246],["xhamster3",246],["xhamster4",246],["xhamster42",246],["xhamster5",246],["xhamster7",246],["xhamster8",246],["acortalo",[248,249,250,251]],["acortar",[248,249,250,251]],["a2zapk",255],["kickassanime",263],["doomovie-hd",267],["terabox",287],["ctrlv",318],["123movieshd",346],["uproxy",350],["animesa",351],["cinecalidad",[354,355]],["dvdplay",385],["apkmaven",402],["gmx",405],["gamereactor",459],["vembed",472],["empire-anime",[475,476,477,478,479]],["empire-stream",[475,476,477]],["empire-streaming",[475,476,477]],["empire-streamz",[475,476,477]],["tvhay",[484,485]],["lookmovie",504],["filmizletv",[510,511,512,513]],["www.google",521],["officedepot",[539,540]],["foundit",[620,621]]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[504]]]);

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
