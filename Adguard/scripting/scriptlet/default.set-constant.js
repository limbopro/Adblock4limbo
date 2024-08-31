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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["aSl.gcd","0"],["counter","10"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS1","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["SalesforceInteractions","{}"],["SalesforceInteractions.CatalogObjectInteractionName"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_btcCheck","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,583]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,255]],["gadgets.es",[12,255]],["amateurporn.co",[12,98]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,438]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,102]],["familyporn.tv",15],["cloudemb.com",[15,360]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,83]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["netu.frembed.fun",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,122]],["stfly.me",24],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,201]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,214]],["owllink.net",24],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,233]],["sekilastekno.com",24],["smoner.com",24],["gyanlight.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,229]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,286]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["cety.app",24],["exego.app",[24,282]],["cutlink.net",24],["cutsy.net",24],["cutyurls.com",24],["cutty.app",24],["cutnet.net",24],["tinys.click",[24,214]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tvi.la",24],["iir.la",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,229]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["thotpacks.xyz",24],["megaurl.in",24],["megafly.in",24],["simana.online",24],["fooak.com",24],["link.paid4link.com",[24,292]],["exalink.fun",24],["indiamaja.com",24],["newshuta.in",24],["shortxlinks.com",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["apkshrt.com",24],["srts.me",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["1shorten.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["viraloc.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["haonguyen.top",24],["claimfreebits.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["short.palmeratv.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["pix4link.com",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,140]],["download.baominh.tech",24],["bblink.com",24],["linkbr.xyz",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["dash-free.com",[24,214]],["snowurl.com",[24,214]],["netfile.cc",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,452]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,214]],["coinsl.click",24],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,50]],["camwhorez.tv",[25,36,82,83]],["cambay.tv",[25,52,82,98,115,117,118,119]],["fpo.xxx",[25,52]],["sexemix.com",25],["heavyfetish.com",[25,518]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["viki.com",[34,35]],["sleazyneasy.com",[36,37,38]],["smutr.com",[36,197]],["watchdirty.to",[36,83,84,98]],["yourporngod.com",[36,37]],["javbangers.com",[36,330]],["camfox.com",36],["camthots.tv",[36,115]],["shegotass.info",36],["amateur8.com",36],["bigtitslust.com",36],["ebony8.com",36],["freeporn8.com",36],["lesbian8.com",36],["maturetubehere.com",36],["sortporn.com",36],["webcamvau.com",36],["motherporno.com",[36,37,52,117]],["tktube.com",36],["theporngod.com",[36,37]],["pornsocket.com",39],["luxuretv.com",40],["porndig.com",[41,42]],["webcheats.com.br",43],["ceesty.com",[44,45]],["gestyy.com",[44,45]],["corneey.com",45],["destyy.com",45],["festyy.com",45],["sh.st",45],["mitaku.net",45],["angrybirdsnest.com",46],["zrozz.com",46],["clix4btc.com",46],["4tests.com",46],["planet-explorers-isos.com",46],["business-standard.com",46],["goltelevision.com",46],["news-und-nachrichten.de",46],["laradiobbs.net",46],["urlaubspartner.net",46],["produktion.de",46],["cinemaxxl.de",46],["bladesalvador.com",46],["tempr.email",46],["katfile.com",46],["trust.zone",46],["cshort.org",46],["friendproject.net",46],["covrhub.com",46],["planetsuzy.org",47],["empflix.com",48],["freeplayervideo.com",49],["nazarickol.com",49],["player-cdn.com",49],["playhydrax.com",49],["alleneconomicmatter.com",49],["apinchcaseation.com",49],["bigclatterhomesguideservice.com",49],["bradleyviewdoctor.com",49],["brookethoughi.com",49],["brucevotewithin.com",49],["cindyeyefinal.com",49],["denisegrowthwide.com",49],["donaldlineelse.com",49],["edwardarriveoften.com",49],["erikcoldperson.com",49],["graceaddresscommunity.com",49],["heatherdiscussionwhen.com",49],["housecardsummerbutton.com",49],["jamesstartstudent.com",49],["jamiesamewalk.com",49],["jasminetesttry.com",49],["jasonresponsemeasure.com",49],["jayservicestuff.com",49],["johntryopen.com",49],["josephseveralconcern.com",49],["kennethofficialitem.com",49],["loriwithinfamily.com",49],["lukecomparetwo.com",49],["markstyleall.com",49],["michaelapplysome.com",49],["morganoperationface.com",49],["nectareousoverelate.com",49],["paulkitchendark.com",49],["rebeccaneverbase.com",49],["roberteachfinal.com",49],["robertplacespace.com",49],["ryanagoinvolve.com",49],["sandrataxeight.com",49],["seanshowcould.com",49],["sethniceletter.com",49],["shannonpersonalcost.com",49],["sharonwhiledemocratic.com",49],["stevenimaginelittle.com",49],["strawberriesporail.com",49],["timberwoodanotia.com",49],["tinycat-voe-fashion.com",49],["troyyourlead.com",49],["uptodatefinishconference.com",49],["uptodatefinishconferenceroom.com",49],["vincentincludesuccessful.com",49],["voe.sx",49],["motphimtv.com",49],["rabbitstream.net",49],["projectfreetv.one",49],["transparentcalifornia.com",50],["deepbrid.com",51],["submityourflicks.com",52],["3movs.com",52],["bravoerotica.net",[52,117]],["youx.xxx",52],["camclips.tv",[52,197]],["camflow.tv",[52,98,117,162,236]],["camhoes.tv",[52,98,115,117,162,236]],["xmegadrive.com",52],["xxxymovies.com",52],["xxxshake.com",52],["gayck.com",52],["xhand.com",[52,117]],["analdin.com",[52,117]],["webnovel.com",53],["videosgay.me",[54,55]],["oneupload.to",55],["wishfast.top",55],["schwaebische.de",56],["8tracks.com",57],["revealname.com",58],["fcportables.com",[59,60]],["golfchannel.com",62],["telemundodeportes.com",62],["stream.nbcsports.com",62],["mathdf.com",62],["gamcore.com",63],["porcore.com",63],["69games.xxx",63],["javmix.app",63],["tecknity.com",64],["haaretz.co.il",65],["haaretz.com",65],["hungama.com",65],["a-o.ninja",65],["anime-odcinki.pl",65],["kumpulmanga.org",65],["shortgoo.blogspot.com",65],["tonanmedia.my.id",[65,472]],["yurasu.xyz",65],["isekaipalace.com",65],["vikistream.com",66],["eplayer.click",[66,67]],["mega4upload.com",[67,73]],["ennovelas.com",[67,73]],["n-tv.de",68],["brigitte.de",69],["stern.de",69],["foxsports.com.au",70],["canberratimes.com.au",70],["thesimsresource.com",71],["bdnewszh.com",73],["streamservicehd.click",73],["timeforbitco.in",74],["worldofbitco.in",[74,85]],["weatherx.co.in",[74,85]],["getyourbitco.in",74],["sunbtc.space",74],["ctrl.blog",75],["sportlife.es",76],["finofilipino.org",77],["acortarm.xyz",78],["speedtest.net",79],["mysflink.blogspot.com",80],["assia.tv",81],["assia4.com",81],["assia24.com",81],["cwtvembeds.com",[83,116]],["xmateur.com",[83,84,98]],["camlovers.tv",83],["porntn.com",83],["pornissimo.org",83],["sexcams-24.com",[83,98]],["watchporn.to",[83,98]],["camwhorez.video",83],["footstockings.com",[84,98]],["sbs.com.au",86],["ojogos.com.br",88],["powforums.com",89],["supforums.com",89],["studybullet.com",89],["usgamer.net",90],["recordonline.com",90],["freebitcoin.win",92],["e-monsite.com",92],["coindice.win",92],["sport-tv-guide.live",93],["temp-mails.com",94],["freiepresse.de",95],["investing.com",96],["camhub.cc",98],["love4porn.com",98],["thotvids.com",98],["watchmdh.to",98],["celebwhore.com",98],["cluset.com",98],["4kporn.xxx",98],["xhomealone.com",98],["lusttaboo.com",[98,401]],["hentai-moon.com",98],["mp3fiber.com",99],["chicoer.com",100],["dailybreeze.com",100],["dailybulletin.com",100],["dailynews.com",100],["delcotimes.com",100],["eastbaytimes.com",100],["macombdaily.com",100],["ocregister.com",100],["pasadenastarnews.com",100],["pe.com",100],["presstelegram.com",100],["redlandsdailyfacts.com",100],["reviewjournal.com",100],["santacruzsentinel.com",100],["saratogian.com",100],["sentinelandenterprise.com",100],["sgvtribune.com",100],["tampabay.com",100],["times-standard.com",100],["theoaklandpress.com",100],["trentonian.com",100],["twincities.com",100],["whittierdailynews.com",100],["bostonherald.com",100],["dailycamera.com",100],["sbsun.com",100],["dailydemocrat.com",100],["montereyherald.com",100],["orovillemr.com",100],["record-bee.com",100],["redbluffdailynews.com",100],["reporterherald.com",100],["thereporter.com",100],["timescall.com",100],["timesheraldonline.com",100],["ukiahdailyjournal.com",100],["dailylocal.com",100],["mercurynews.com",100],["suedkurier.de",101],["anysex.com",103],["vlist.se",104],["pornve.com",105],["coolrom.com.au",106],["pornohirsch.net",107],["marie-claire.es",108],["gamezhero.com",108],["flashgirlgames.com",108],["onlinesudoku.games",108],["mpg.football",108],["sssam.com",108],["globalnews.ca",109],["drinksmixer.com",110],["leitesculinaria.com",110],["fupa.net",111],["browardpalmbeach.com",112],["dallasobserver.com",112],["houstonpress.com",112],["miaminewtimes.com",112],["phoenixnewtimes.com",112],["westword.com",112],["nhentai.net",113],["nowtv.com.tr",114],["caminspector.net",115],["camwhoreshd.com",115],["camgoddess.tv",115],["gay4porn.com",117],["mypornhere.com",117],["mediapason.it",120],["linkspaid.com",120],["tuotromedico.com",120],["neoteo.com",120],["phoneswiki.com",120],["celebmix.com",120],["myneobuxportal.com",120],["oyungibi.com",120],["25yearslatersite.com",120],["jeshoots.com",121],["techhx.com",121],["karanapk.com",121],["flashplayer.fullstacks.net",123],["cloudapps.herokuapp.com",123],["texteditor.nsspot.net",123],["youfiles.herokuapp.com",123],["temp-mail.org",124],["playembed.xyz",125],["javhdporn.net",125],["javstream.top",125],["comnuan.com",126],["veedi.com",127],["battleboats.io",127],["fruitlab.com",128],["haddoz.net",128],["garoetpos.com",128],["stiletv.it",129],["hqtv.biz",131],["liveuamap.com",132],["muvibg.com",132],["audycje.tokfm.pl",133],["hulu.com",[134,135,136]],["shush.se",137],["emurom.net",138],["allkpop.com",139],["pickcrackpasswords.blogspot.com",141],["kfrfansub.com",142],["thuglink.com",142],["voipreview.org",142],["illicoporno.com",143],["lavoixdux.com",143],["tonpornodujour.com",143],["jacquieetmichel.net",143],["jacquieetmicheltv.net",[143,252,253]],["swame.com",143],["vosfemmes.com",143],["voyeurfrance.net",143],["hanime.tv",144],["pogo.com",145],["cloudvideo.tv",146],["legionjuegos.org",147],["legionpeliculas.org",147],["legionprogramas.org",147],["16honeys.com",148],["elespanol.com",149],["remodelista.com",150],["coolmathgames.com",[151,152,153,536]],["audiofanzine.com",154],["noweconomy.live",156],["howifx.com",[156,229]],["vavada5com.com",156],["hitokin.net",157],["developerinsider.co",158],["ilprimatonazionale.it",159],["hotabis.com",159],["root-nation.com",159],["italpress.com",159],["airsoftmilsimnews.com",159],["artribune.com",159],["thehindu.com",160],["cambro.tv",[161,162]],["nibelungen-kurier.de",163],["adfoc.us",165],["lkodeals.com",165],["mantrachalisa.com",165],["jxfiles.me",165],["wbeon.com",165],["usaloanraas.in",165],["tea-coffee.net",165],["spatsify.com",165],["newedutopics.com",165],["getviralreach.in",165],["edukaroo.com",165],["funkeypagali.com",165],["careersides.com",165],["nayisahara.com",165],["wikifilmia.com",165],["infinityskull.com",165],["viewmyknowledge.com",165],["iisfvirtual.in",165],["starxinvestor.com",165],["myprivatejobs.com",[165,283]],["wikitraveltips.com",[165,283]],["amritadrino.com",[165,283]],["sahlmarketing.net",165],["filmypoints.in",165],["fitnessholic.net",165],["moderngyan.com",165],["sattakingcharts.in",165],["freshbhojpuri.com",165],["bgmi32bitapk.in",165],["bankshiksha.in",165],["earn.mpscstudyhub.com",165],["earn.quotesopia.com",165],["money.quotesopia.com",165],["best-mobilegames.com",165],["learn.moderngyan.com",165],["bharatsarkarijobalert.com",165],["techacode.com",165],["trickms.com",165],["ielts-isa.edu.vn",165],["sptfy.be",165],["mcafee-com.com",[165,282]],["pianetamountainbike.it",166],["barchart.com",167],["modelisme.com",168],["parasportontario.ca",168],["prescottenews.com",168],["nrj-play.fr",169],["oeffentlicher-dienst.info",170],["hackingwithreact.com",171],["gutekueche.at",172],["eplfootballmatch.com",173],["peekvids.com",174],["playvids.com",174],["pornflip.com",174],["redensarten-index.de",175],["vw-page.com",176],["viz.com",[177,178]],["queenfaucet.website",179],["0rechner.de",180],["configspc.com",181],["xopenload.me",181],["uptobox.com",181],["uptostream.com",181],["onepiece-tube.com",182],["japgay.com",183],["mega-debrid.eu",184],["dreamdth.com",185],["diaridegirona.cat",187],["diariodeibiza.es",187],["diariodemallorca.es",187],["diarioinformacion.com",187],["eldia.es",187],["emporda.info",187],["farodevigo.es",187],["laopinioncoruna.es",187],["laopiniondemalaga.es",187],["laopiniondemurcia.es",187],["laopiniondezamora.es",187],["laprovincia.es",187],["levante-emv.com",187],["mallorcazeitung.es",187],["regio7.cat",187],["superdeporte.es",187],["playpaste.com",188],["player.rtl2.de",189],["freetutorialsus.com",190],["vidlii.com",[190,206]],["iammagnus.com",190],["dailyvideoreports.net",190],["unityassets4free.com",190],["cnbc.com",191],["puzzles.msn.com",192],["metro.us",192],["newsobserver.com",192],["arkadiumhosted.com",192],["firefaucet.win",194],["55k.io",195],["filelions.online",195],["stmruby.com",195],["direct-link.net",196],["direkt-wissen.com",196],["link-to.net",196],["fullhdxxx.com",198],["pornclassic.tube",199],["tubepornclassic.com",199],["etonline.com",200],["creatur.io",200],["drphil.com",200],["urbanmilwaukee.com",200],["ontiva.com",200],["hideandseek.world",200],["myabandonware.com",200],["kendam.com",200],["wttw.com",200],["synonyms.com",200],["definitions.net",200],["hostmath.com",200],["camvideoshub.com",200],["minhaconexao.com.br",200],["home-made-videos.com",202],["pxrnxx.xyz",202],["amateur-couples.com",202],["slutdump.com",202],["produsat.com",204],["12thman.com",206],["acusports.com",206],["atlantic10.com",206],["auburntigers.com",206],["baylorbears.com",206],["bceagles.com",206],["bgsufalcons.com",206],["big12sports.com",206],["bigten.org",206],["bradleybraves.com",206],["butlersports.com",206],["cmumavericks.com",206],["conferenceusa.com",206],["cyclones.com",206],["dartmouthsports.com",206],["daytonflyers.com",206],["dbupatriots.com",206],["dbusports.com",206],["denverpioneers.com",206],["fduknights.com",206],["fgcuathletics.com",206],["fightinghawks.com",206],["fightingillini.com",206],["floridagators.com",206],["friars.com",206],["friscofighters.com",206],["gamecocksonline.com",206],["goarmywestpoint.com",206],["gobison.com",206],["goblueraiders.com",206],["gobobcats.com",206],["gocards.com",206],["gocreighton.com",206],["godeacs.com",206],["goexplorers.com",206],["goetbutigers.com",206],["gofrogs.com",206],["gogriffs.com",206],["gogriz.com",206],["golobos.com",206],["gomarquette.com",206],["gopack.com",206],["gophersports.com",206],["goprincetontigers.com",206],["gopsusports.com",206],["goracers.com",206],["goshockers.com",206],["goterriers.com",206],["gotigersgo.com",206],["gousfbulls.com",206],["govandals.com",206],["gowyo.com",206],["goxavier.com",206],["gozags.com",206],["gozips.com",206],["griffinathletics.com",206],["guhoyas.com",206],["gwusports.com",206],["hailstate.com",206],["hamptonpirates.com",206],["hawaiiathletics.com",206],["hokiesports.com",206],["huskers.com",206],["icgaels.com",206],["iuhoosiers.com",206],["jsugamecocksports.com",206],["longbeachstate.com",206],["loyolaramblers.com",206],["lrtrojans.com",206],["lsusports.net",206],["morrisvillemustangs.com",206],["msuspartans.com",206],["muleriderathletics.com",206],["mutigers.com",206],["navysports.com",206],["nevadawolfpack.com",206],["niuhuskies.com",206],["nkunorse.com",206],["nuhuskies.com",206],["nusports.com",206],["okstate.com",206],["olemisssports.com",206],["omavs.com",206],["ovcsports.com",206],["owlsports.com",206],["purduesports.com",206],["redstormsports.com",206],["richmondspiders.com",206],["sfajacks.com",206],["shupirates.com",206],["siusalukis.com",206],["smcgaels.com",206],["smumustangs.com",206],["soconsports.com",206],["soonersports.com",206],["themw.com",206],["tulsahurricane.com",206],["txst.com",206],["txstatebobcats.com",206],["ubbulls.com",206],["ucfknights.com",206],["ucirvinesports.com",206],["uconnhuskies.com",206],["uhcougars.com",206],["uicflames.com",206],["umterps.com",206],["uncwsports.com",206],["unipanthers.com",206],["unlvrebels.com",206],["uoflsports.com",206],["usdtoreros.com",206],["utahstateaggies.com",206],["utepathletics.com",206],["utrockets.com",206],["uvmathletics.com",206],["uwbadgers.com",206],["villanova.com",206],["wkusports.com",206],["wmubroncos.com",206],["woffordterriers.com",206],["1pack1goal.com",206],["bcuathletics.com",206],["bubraves.com",206],["goblackbears.com",206],["golightsgo.com",206],["gomcpanthers.com",206],["goutsa.com",206],["mercerbears.com",206],["pirateblue.com",206],["pirateblue.net",206],["pirateblue.org",206],["quinnipiacbobcats.com",206],["towsontigers.com",206],["tribeathletics.com",206],["tribeclub.com",206],["utepminermaniacs.com",206],["utepminers.com",206],["wkutickets.com",206],["aopathletics.org",206],["atlantichockeyonline.com",206],["bigsouthnetwork.com",206],["bigsouthsports.com",206],["chawomenshockey.com",206],["dbupatriots.org",206],["drakerelays.org",206],["ecac.org",206],["ecacsports.com",206],["emueagles.com",206],["emugameday.com",206],["gculopes.com",206],["godrakebulldog.com",206],["godrakebulldogs.com",206],["godrakebulldogs.net",206],["goeags.com",206],["goislander.com",206],["goislanders.com",206],["gojacks.com",206],["gomacsports.com",206],["gseagles.com",206],["hubison.com",206],["iowaconference.com",206],["ksuowls.com",206],["lonestarconference.org",206],["mascac.org",206],["midwestconference.org",206],["mountaineast.org",206],["niu-pack.com",206],["nulakers.ca",206],["oswegolakers.com",206],["ovcdigitalnetwork.com",206],["pacersports.com",206],["rmacsports.org",206],["rollrivers.com",206],["samfordsports.com",206],["uncpbraves.com",206],["usfdons.com",206],["wiacsports.com",206],["alaskananooks.com",206],["broncathleticfund.com",206],["cameronaggies.com",206],["columbiacougars.com",206],["etownbluejays.com",206],["gobadgers.ca",206],["golancers.ca",206],["gometrostate.com",206],["gothunderbirds.ca",206],["kentstatesports.com",206],["lehighsports.com",206],["lopers.com",206],["lycoathletics.com",206],["lycomingathletics.com",206],["maraudersports.com",206],["mauiinvitational.com",206],["msumavericks.com",206],["nauathletics.com",206],["nueagles.com",206],["nwusports.com",206],["oceanbreezenyc.org",206],["patriotathleticfund.com",206],["pittband.com",206],["principiaathletics.com",206],["roadrunnersathletics.com",206],["sidearmsocial.com",206],["snhupenmen.com",206],["stablerarena.com",206],["stoutbluedevils.com",206],["uwlathletics.com",206],["yumacs.com",206],["collegefootballplayoff.com",206],["csurams.com",206],["cubuffs.com",206],["gobearcats.com",206],["gohuskies.com",206],["mgoblue.com",206],["osubeavers.com",206],["pittsburghpanthers.com",206],["rolltide.com",206],["texassports.com",206],["thesundevils.com",206],["uclabruins.com",206],["wvuathletics.com",206],["wvusports.com",206],["arizonawildcats.com",206],["calbears.com",206],["cuse.com",206],["georgiadogs.com",206],["goducks.com",206],["goheels.com",206],["gostanford.com",206],["insidekstatesports.com",206],["insidekstatesports.info",206],["insidekstatesports.net",206],["insidekstatesports.org",206],["k-stateathletics.com",206],["k-statefootball.net",206],["k-statefootball.org",206],["k-statesports.com",206],["k-statesports.net",206],["k-statesports.org",206],["k-statewomenshoops.com",206],["k-statewomenshoops.net",206],["k-statewomenshoops.org",206],["kstateathletics.com",206],["kstatefootball.net",206],["kstatefootball.org",206],["kstatesports.com",206],["kstatewomenshoops.com",206],["kstatewomenshoops.net",206],["kstatewomenshoops.org",206],["ksuathletics.com",206],["ksusports.com",206],["scarletknights.com",206],["showdownforrelief.com",206],["syracusecrunch.com",206],["texastech.com",206],["theacc.com",206],["ukathletics.com",206],["usctrojans.com",206],["utahutes.com",206],["utsports.com",206],["wsucougars.com",206],["tricksplit.io",206],["fangraphs.com",207],["4players.de",[208,326]],["buffed.de",208],["gamesaktuell.de",208],["gamezone.de",208],["pcgames.de",208],["videogameszone.de",208],["tvspielfilm.de",[209,210,211,212]],["tvtoday.de",[209,210,211,212]],["chip.de",[209,210,211,212]],["focus.de",[209,210,211,212]],["planetaminecraft.com",213],["cravesandflames.com",214],["codesnse.com",214],["link.paid4file.com",214],["flyad.vip",214],["lapresse.ca",215],["kolyoom.com",216],["ilovephd.com",216],["negumo.com",217],["games.wkb.jp",[218,219]],["channelmyanmar.org",[220,221]],["u-s-news.com",221],["fandom.com",[222,553,554]],["kenshi.fandom.com",223],["hausbau-forum.de",224],["homeairquality.org",224],["faucettronn.click",224],["ticketmaster.sg",224],["fake-it.ws",225],["laksa19.github.io",226],["1shortlink.com",227],["nesia.my.id",228],["makemoneywithurl.com",229],["junkyponk.com",229],["healthfirstweb.com",229],["vocalley.com",229],["yogablogfit.com",229],["en.financerites.com",229],["mythvista.com",229],["livenewsflix.com",229],["cureclues.com",229],["apekite.com",229],["insmyst.com",229],["wp2host.com",229],["blogtechh.com",229],["techbixby.com",229],["blogmyst.com",229],["resetoff.pl",230],["sexodi.com",230],["cdn77.org",231],["howtofixwindows.com",232],["3sexporn.com",233],["momxxxsex.com",233],["myfreevintageporn.com",233],["penisbuyutucum.net",233],["ujszo.com",234],["newsmax.com",235],["bobs-tube.com",236],["nadidetarifler.com",237],["siz.tv",237],["suzylu.co.uk",[238,239]],["onworks.net",240],["yabiladi.com",240],["downloadsoft.net",241],["pixsera.net",242],["testlanguages.com",243],["newsinlevels.com",243],["videosinlevels.com",243],["cbs.com",244],["paramountplus.com",244],["buktube.com",245],["fullxh.com",245],["galleryxh.site",245],["megaxh.com",245],["movingxh.world",245],["seexh.com",245],["taoxh.life",245],["unlockxh4.com",245],["xhaccess.com",245],["xhadult2.com",245],["xhadult3.com",245],["xhadult4.com",245],["xhadult5.com",245],["xhamster46.com",245],["xhbig.com",245],["xhbranch5.com",245],["xhday.com",245],["xhday1.com",245],["xhmoon5.com",245],["xhplanet1.com",245],["xhplanet2.com",245],["xhreal2.com",245],["xhreal3.com",245],["xhtab2.com",245],["xhtab4.com",245],["xhtree.com",245],["xhvictory.com",245],["xhwebsite.com",245],["xhwebsite2.com",245],["xhwide1.com",245],["lightnovelworld.com",246],["megadescarga.net",[247,248,249,250]],["megadescargas.net",[247,248,249,250]],["hentaihaven.xxx",251],["jacquieetmicheltv2.net",253],["ultimate-guitar.com",254],["teachmemicro.com",255],["willcycle.com",255],["2ndrun.tv",255],["rackusreads.com",255],["xyzsports111.xyz",[256,257,258]],["xyzsports112.xyz",[256,257,258]],["xyzsports113.xyz",[256,257,258]],["xyzsports114.xyz",[256,257,258]],["xyzsprtsfrmr1.site",[256,257,258]],["xyzsprtsfrmr2.site",[256,257,258]],["claimbits.net",259],["sexyscope.net",260],["recherche-ebook.fr",262],["easymc.io",262],["zonebourse.com",263],["pink-sluts.net",264],["madoohd.com",265],["andhrafriends.com",266],["benzinpreis.de",267],["defenseone.com",268],["govexec.com",268],["nextgov.com",268],["route-fifty.com",268],["sharing.wtf",269],["wetter3.de",270],["arahdrive.com",271],["aiimgvlog.fun",[271,282]],["esportivos.fun",272],["cosmonova-broadcast.tv",273],["soccerinhd.com",274],["techedubyte.com",274],["hartvannederland.nl",275],["vandaaginside.nl",275],["rock.porn",[276,277]],["videzz.net",[278,279]],["ezaudiobookforsoul.com",280],["club386.com",281],["starkroboticsfrc.com",282],["sinonimos.de",282],["antonimos.de",282],["quesignifi.ca",282],["tiktokrealtime.com",282],["tiktokcounter.net",282],["tpayr.xyz",282],["poqzn.xyz",282],["ashrfd.xyz",282],["rezsx.xyz",282],["tryzt.xyz",282],["ashrff.xyz",282],["rezst.xyz",282],["dawenet.com",282],["erzar.xyz",282],["waezm.xyz",282],["waezg.xyz",282],["blackwoodacademy.org",282],["cryptednews.space",282],["vivuq.com",282],["swgop.com",282],["vbnmll.com",282],["telcoinfo.online",282],["dshytb.com",282],["btcbitco.in",[282,285]],["btcsatoshi.net",282],["cempakajaya.com",282],["crypto4yu.com",282],["readbitcoin.org",282],["wiour.com",282],["finish.addurl.biz",282],["laweducationinfo.com",282],["savemoneyinfo.com",282],["worldaffairinfo.com",282],["godstoryinfo.com",282],["successstoryinfo.com",282],["learnmarketinfo.com",282],["bhugolinfo.com",282],["armypowerinfo.com",282],["rsadnetworkinfo.com",282],["rsinsuranceinfo.com",282],["rsfinanceinfo.com",282],["rsgamer.app",282],["rssoftwareinfo.com",282],["rshostinginfo.com",282],["rseducationinfo.com",282],["advertisingexcel.com",282],["allcryptoz.net",282],["batmanfactor.com",282],["beautifulfashionnailart.com",282],["crewbase.net",282],["documentaryplanet.xyz",282],["crewus.net",282],["gametechreviewer.com",282],["midebalonu.net",282],["misterio.ro",282],["phineypet.com",282],["seory.xyz",282],["shinbhu.net",282],["shinchu.net",282],["substitutefor.com",282],["talkforfitness.com",282],["thefitbrit.co.uk",282],["thumb8.net",282],["thumb9.net",282],["topcryptoz.net",282],["uniqueten.net",282],["ultraten.net",282],["exactpay.online",282],["kiddyearner.com",282],["luckydice.net",283],["adarima.org",283],["tieutietkiem.com",283],["weatherwx.com",283],["sattaguess.com",283],["winshell.de",283],["rosasidan.ws",283],["modmakers.xyz",283],["gamepure.in",283],["warrenrahul.in",283],["austiblox.net",283],["upiapi.in",283],["myownguess.in",283],["networkhint.com",283],["watchhentai.net",283],["thichcode.net",283],["texturecan.com",283],["tikmate.app",[283,508]],["4funbox.com",284],["nephobox.com",284],["1024tera.com",284],["blog.cryptowidgets.net",285],["blog.insurancegold.in",285],["blog.wiki-topia.com",285],["blog.coinsvalue.net",285],["blog.cookinguide.net",285],["blog.freeoseocheck.com",285],["blog24.me",285],["bildirim.link",287],["appsbull.com",288],["diudemy.com",288],["maqal360.com",288],["lifesurance.info",289],["infokeeda.xyz",290],["webzeni.com",290],["dl.apkmoddone.com",291],["phongroblox.com",291],["arcai.com",293],["my-code4you.blogspot.com",294],["flickr.com",295],["firefile.cc",296],["pestleanalysis.com",296],["kochamjp.pl",296],["tutorialforlinux.com",296],["whatsaero.com",296],["animeblkom.net",[296,312]],["blkom.com",296],["globes.co.il",[297,298]],["jardiner-malin.fr",299],["tw-calc.net",300],["ohmybrush.com",301],["talkceltic.net",302],["mentalfloss.com",303],["uprafa.com",304],["cube365.net",305],["nightfallnews.com",[306,307]],["wwwfotografgotlin.blogspot.com",308],["freelistenonline.com",308],["badassdownloader.com",309],["quickporn.net",310],["yellowbridge.com",311],["aosmark.com",313],["atozmath.com",[315,316,317,318,319,320,321]],["newyorker.com",322],["brighteon.com",323],["more.tv",324],["video1tube.com",325],["alohatube.xyz",325],["fshost.me",327],["link.cgtips.org",328],["hentaicloud.com",329],["netfapx.com",331],["paperzonevn.com",332],["hentaienglish.com",333],["hentaiporno.xxx",333],["venge.io",[334,335]],["btcbux.io",336],["its.porn",[337,338]],["atv.at",339],["kusonime.com",[340,341]],["jetpunk.com",343],["imgur.com",344],["hentai-party.com",345],["hentaicomics.pro",345],["xxx-comics.pro",345],["genshinimpactcalculator.com",348],["mysexgames.com",349],["embed.indavideo.hu",352],["coinurl.net",[353,354]],["gdr-online.com",355],["mmm.dk",356],["iqiyi.com",[357,358,500]],["m.iqiyi.com",359],["japopav.tv",360],["lvturbo.com",360],["nbcolympics.com",361],["apkhex.com",362],["indiansexstories2.net",363],["issstories.xyz",363],["1340kbbr.com",364],["gorgeradio.com",364],["kduk.com",364],["kedoam.com",364],["kejoam.com",364],["kelaam.com",364],["khsn1230.com",364],["kjmx.rocks",364],["kloo.com",364],["klooam.com",364],["klykradio.com",364],["kmed.com",364],["kmnt.com",364],["kool991.com",364],["kpnw.com",364],["kppk983.com",364],["krktcountry.com",364],["ktee.com",364],["kwro.com",364],["kxbxfm.com",364],["thevalley.fm",364],["quizlet.com",365],["dsocker1234.blogspot.com",366],["blick.ch",367],["mgnet.xyz",368],["designtagebuch.de",369],["pixroute.com",370],["uploady.io",371],["calculator-online.net",372],["porngames.club",373],["sexgames.xxx",373],["111.90.159.132",374],["battleplan.news",374],["mobile-tracker-free.com",375],["pfps.gg",376],["ac-illust.com",[377,378]],["photo-ac.com",[377,378]],["vlxxs.net",379],["rapelust.com",379],["vtube.to",379],["vtplay.net",379],["desitelugusex.com",379],["xvideos-downloader.net",379],["xxxvideotube.net",379],["sdefx.cloud",379],["nozomi.la",379],["moviesonlinefree.net",379],["social-unlock.com",380],["ninja.io",381],["sourceforge.net",382],["samfirms.com",383],["banned.video",384],["madmaxworld.tv",384],["huffpost.com",385],["ingles.com",386],["spanishdict.com",386],["surfline.com",[387,388]],["play.tv3.ee",389],["play.tv3.lt",389],["play.tv3.lv",389],["tv3play.skaties.lv",389],["trendyoum.com",390],["bulbagarden.net",391],["moviestars.to",392],["hollywoodlife.com",393],["mat6tube.com",394],["textstudio.co",395],["newtumbl.com",396],["nevcoins.club",398],["mail.com",399],["oggi.it",[402,403]],["manoramamax.com",402],["video.gazzetta.it",[402,403]],["mangakita.id",404],["mangakita.net",404],["poscishd.online",405],["avpgalaxy.net",406],["mhma12.tech",407],["panda-novel.com",408],["zebranovel.com",408],["lightsnovel.com",408],["eaglesnovel.com",408],["pandasnovel.com",408],["zadfaucet.com",409],["ewrc-results.com",410],["kizi.com",411],["cyberscoop.com",412],["fedscoop.com",412],["canale.live",413],["mafiatown.pl",[414,415]],["jeep-cj.com",416],["sponsorhunter.com",417],["cloudcomputingtopics.net",418],["likecs.com",419],["tiscali.it",420],["linkspy.cc",421],["tutelehd3.xyz",422],["dirty.pink",[423,424,425]],["adshnk.com",426],["chattanoogan.com",427],["adsy.pw",428],["playstore.pw",428],["socialmediagirls.com",429],["windowspro.de",430],["snapinsta.app",431],["tvtv.ca",432],["tvtv.us",432],["mydaddy.cc",433],["roadtrippin.fr",434],["redketchup.io",[435,436,437]],["anyporn.com",[438,454]],["bravoporn.com",438],["bravoteens.com",438],["crocotube.com",438],["hellmoms.com",438],["hellporno.com",438],["sex3.com",438],["tubewolf.com",438],["xbabe.com",438],["xcum.com",438],["zedporn.com",438],["imagetotext.info",439],["infokik.com",440],["freepik.com",441],["ddwloclawek.pl",[442,443]],["deezer.com",444],["my-subs.co",445],["plaion.com",446],["rapid-cloud.co",447],["slideshare.net",[448,449]],["ustreasuryyieldcurve.com",450],["businesssoftwarehere.com",451],["goo.st",451],["freevpshere.com",451],["softwaresolutionshere.com",451],["staige.tv",455],["in-jpn.com",456],["oninet.ne.jp",456],["xth.jp",456],["androidadult.com",457],["streamvid.net",458],["watchtv24.com",459],["cellmapper.net",460],["medscape.com",461],["newscon.org",[462,463]],["arkadium.com",464],["wheelofgold.com",465],["ozulmanga.com",465],["bembed.net",466],["elbailedeltroleo.site",466],["embedv.net",466],["fslinks.org",466],["listeamed.net",466],["v6embed.xyz",466],["vgplayer.xyz",466],["vid-guard.com",466],["vidguard.online",466],["app.blubank.com",467],["mobileweb.bankmellat.ir",467],["sportdeutschland.tv",468],["kcra.com",468],["wcvb.com",468],["ccthesims.com",473],["chromeready.com",473],["coursedrive.org",473],["dtbps3games.com",473],["illustratemagazine.com",473],["uknip.co.uk",473],["vod.pl",474],["megadrive-emulator.com",475],["animesaga.in",478],["moviesapi.club",478],["bestx.stream",478],["watchx.top",478],["digimanie.cz",479],["svethardware.cz",479],["srvy.ninja",480],["drawer-opportunity-i-243.site",481],["tchatche.com",482],["edmdls.com",483],["freshremix.net",483],["scenedl.org",483],["trakt.tv",[484,485,486]],["shroomers.app",487],["classicalradio.com",[488,489,490]],["di.fm",[488,489,490]],["jazzradio.com",[488,489,490]],["radiotunes.com",[488,489,490]],["rockradio.com",[488,489,490]],["zenradio.com",[488,489,490]],["pc-builds.com",491],["qtoptens.com",491],["reuters.com",491],["today.com",491],["videogamer.com",491],["wrestlinginc.com",491],["gbatemp.net",491],["movie-th.tv",492],["iwanttfc.com",493],["nutraingredients-asia.com",494],["nutraingredients-latam.com",494],["nutraingredients-usa.com",494],["nutraingredients.com",494],["livesportsclub.me",495],["rogstream.fun",495],["ozulscansen.com",496],["fitnessbr.click",497],["minhareceita.xyz",497],["doomied.monster",498],["lookmovie2.to",498],["royalroad.com",499],["biletomat.pl",501],["hextank.io",[502,503]],["filmizlehdfilm.com",[504,505,506,507]],["fullfilmizle.cc",[504,505,506,507]],["sagewater.com",509],["redlion.net",509],["satdl.com",510],["veev.to",511],["vidstreaming.xyz",512],["everand.com",513],["myradioonline.pl",514],["tacobell.com",516],["zefoy.com",517],["natgeotv.com",519],["br.de",520],["indeed.com",521],["pasteboard.co",522],["clickhole.com",523],["deadspin.com",523],["gizmodo.com",523],["jalopnik.com",523],["jezebel.com",523],["kotaku.com",523],["lifehacker.com",523],["splinternews.com",523],["theinventory.com",523],["theonion.com",523],["theroot.com",523],["thetakeout.com",523],["pewresearch.org",523],["los40.com",[524,525]],["as.com",525],["telegraph.co.uk",[526,527]],["poweredbycovermore.com",[526,576]],["lumens.com",[526,576]],["verizon.com",528],["humanbenchmark.com",529],["politico.com",530],["officedepot.co.cr",[531,532]],["usnews.com",535],["factable.com",537],["zee5.com",538],["gala.fr",539],["geo.fr",539],["voici.fr",539],["gloucestershirelive.co.uk",540],["arsiv.mackolik.com",541],["jacksonguitars.com",542],["scandichotels.com",543],["stylist.co.uk",544],["nettiauto.com",545],["thaiairways.com",[546,547]],["cerbahealthcare.it",[548,549]],["futura-sciences.com",[548,565]],["tiendaenlinea.claro.com.ni",[550,551]],["tieba.baidu.com",552],["grasshopper.com",[555,556]],["epson.com.cn",[557,558,559,560]],["oe24.at",[561,562]],["szbz.de",561],["platform.autods.com",[563,564]],["wikihow.com",566],["citibank.com.sg",567],["uol.com.br",[568,569,570,571,572]],["gazzetta.gr",573],["digicol.dpm.org.cn",[574,575]],["virginmediatelevision.ie",577],["larazon.es",[578,579]],["waitrosecellar.com",[580,581,582]],["sharpen-free-design-generator.netlify.app",[584,585]],["help.cashctrl.com",[586,587]],["commande.rhinov.pro",[588,589]],["ecom.wixapps.net",[588,589]],["tipranks.com",[590,591]],["iceland.co.uk",[592,593,594]],["socket.pearsoned.com",595],["tntdrama.com",[596,597]],["mobile.de",[598,599]],["ioe.vn",[600,601]],["geiriadur.ac.uk",[600,604]],["welsh-dictionary.ac.uk",[600,604]],["bikeportland.org",[602,603]],["biologianet.com",[569,570,571]],["10play.com.au",[605,606]],["sunshine-live.de",[607,608]],["whatismyip.com",[609,610]],["myfitnesspal.com",611],["netoff.co.jp",[612,613]],["clickjogos.com.br",616],["bristan.com",[617,618]],["zillow.com",619],["share.hntv.tv",[620,621,622,623]],["forum.dji.com",[620,623]],["optimum.net",[624,625]],["pvrcinemas.com",[626,627]],["investor-web.hdfcfund.com",628],["user.guancha.cn",[629,630]],["sosovalue.com",631],["bandyforbundet.no",[632,633]],["tatacommunications.com",634],["suamusica.com.br",[635,636,637]],["macrotrends.net",[638,639]],["code.world",640],["kimcartoon.li",641],["kc.linksgen.com",641],["kisscartoon.se",641],["crunchyroll.com",[642,643]],["dnb.com",[642,643]],["dnb.co.uk",[642,643]],["weather.com",[642,643]],["ubereats.com",[642,643]],["usatoday.com",644]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,49]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,200]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,36,82,83,84]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,186]],["upornia",[29,30]],["fmovies",49],["xtits",[52,117]],["streamwish",[54,55]],["pouvideo",61],["povvideo",61],["povw1deo",61],["povwideo",61],["powv1deo",61],["powvibeo",61],["powvideo",61],["powvldeo",61],["plyjam",[66,67]],["fxporn69",72],["vipbox",73],["viprow",73],["desbloqueador",78],["xberuang",80],["teknorizen",80],["subtorrents",87],["subtorrents1",87],["newpelis",87],["pelix",87],["allcalidad",87],["infomaniakos",87],["filecrypt",91],["tornadomovies",97],["sexwebvideo",98],["mangovideo",98],["icdrama",104],["mangasail",104],["file4go",106],["asianclub",125],["anitube",128],["mixdrop",130],["uploadev",155],["ver-pelis-online",164],["ancient-origins",173],["spankbang",193],["lookcam",200],["lootlinks",200],["dpstream",203],["bluemediafiles",205],["docer",230],["hamsterix",245],["xhamster",245],["xhamster1",245],["xhamster10",245],["xhamster11",245],["xhamster12",245],["xhamster13",245],["xhamster14",245],["xhamster15",245],["xhamster16",245],["xhamster17",245],["xhamster18",245],["xhamster19",245],["xhamster20",245],["xhamster2",245],["xhamster3",245],["xhamster4",245],["xhamster42",245],["xhamster5",245],["xhamster7",245],["xhamster8",245],["acortalo",[247,248,249,250]],["acortar",[247,248,249,250]],["kickassanime",261],["doomovie-hd",265],["terabox",284],["ctrlv",314],["123movieshd",342],["uproxy",346],["animesa",347],["cinecalidad",[350,351]],["dvdplay",379],["apkmaven",397],["gmx",400],["gamereactor",453],["vembed",466],["empire-stream",[469,470,471]],["empire-streaming",[469,470,471]],["empire-streamz",[469,470,471]],["tvhay",[476,477]],["lookmovie",498],["filmizletv",[504,505,506,507]],["www.google",515],["officedepot",[533,534]],["foundit",[614,615]]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[498]]]);

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
