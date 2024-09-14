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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype.hideAds","true"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["_pop","noopFunc"],["CnnXt.Event.fire","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["flashvars.popunder_url",""],["flashvars.adv_post_src",""],["flashvars.adv_post_url",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["is_adblocked","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["count","0"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["DL8_GLOBALS.enableAdSupport","false"],["DL8_GLOBALS.useHomad","false"],["DL8_GLOBALS.enableHomadDesktop","false"],["DL8_GLOBALS.enableHomadMobile","false"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["ulp_noadb","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["document.ontouchend","null"],["document.onclick","null"],["initials.yld-pdpopunder",""],["importFAB","undefined"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["PlayerLogic.prototype.detectADB","noopFunc"],["showPopunder","noopFunc"],["Object.prototype.prerollAds","[]"],["notifyMe","noopFunc"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["Object.prototype.ADBLOCK_DETECTION",""],["postroll","undefined"],["interstitial","undefined"],["isAdBlockDetected","false"],["pData.adblockOverlayEnabled","0"],["cabdSettings","undefined"],["td_ad_background_click_link"],["checkAdBlocker","noopFunc"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["document.hidden","false"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["aSl.gcd","0"],["delayClick","false"],["counter","10"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["truex","{}"],["truex.client","noopFunc"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["divWidth","1"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["objAd.loadAdShield","noopFunc"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["adblockDetector","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS1","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["empire.mediaData.advisorMovie","1"],["empire.mediaData.advisorSerie","1"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["art3m1sItemNames.affiliate-wrapper","\"\""],["isAdBlockerActive","noopFunc"],["di.app.WebplayerApp.Ads.Adblocks.app.AdBlockDetectApp.startWithParent","false"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["reklamsayisi","1"],["reklam_1",""],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["URL_VAST_YOUTUBE","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["smartech","noopFunc"],["sensors","{}"],["sensors.init","noopFunc"],["sensors.track","noopFunc"],["adn","{}"],["adn.clearDivs","noopFunc"],["_vwo_code","{}"],["gtag","noopFunc"],["_taboola","{}"],["_taboola.push","noopFunc"],["clicky","{}"],["clicky.goal","noopFunc"],["WURFL","{}"],["_sp_.config.events.onSPPMObjectReady","noopFunc"],["gtm","{}"],["gtm.trackEvent","noopFunc"],["apstag.fetchBids.name",""],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"],["gnt.x.adm",""]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,589]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,257]],["gadgets.es",[12,257]],["amateurporn.co",[12,118]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,447]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,102]],["familyporn.tv",15],["cloudemb.com",[15,365]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,84]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["sankakucomplex.com",19],["player.glomex.com",20],["merkur.de",20],["tz.de",20],["hotpornfile.org",23],["player.tabooporns.com",23],["x69.ovh",23],["wiztube.xyz",23],["netu.frembed.fun",23],["multiup.us",23],["rpdrlatino.live",23],["peliculas8k.com",[23,24]],["video.q34r.org",23],["69x.online",23],["czxxx.org",23],["netu.ac",23],["dirtyvideo.fun",24],["adbull.org",25],["mitly.us",25],["linkrex.net",25],["linx.cc",25],["oke.io",25],["dz4link.com",25],["linclik.com",25],["shrt10.com",25],["loptelink.com",25],["cut-fly.com",25],["linkfinal.com",25],["payskip.org",25],["cutpaid.com",25],["forexmab.com",25],["linkjust.com",25],["linkszia.co",25],["leechpremium.link",25],["icutlink.com",[25,123]],["oncehelp.com",25],["rgl.vn",25],["reqlinks.net",25],["bitlk.com",25],["qlinks.eu",25],["link.3dmili.com",25],["short-fly.com",25],["foxseotools.com",25],["pngit.live",25],["link.turkdown.com",25],["urlty.com",25],["7r6.com",25],["oko.sh",25],["ckk.ai",25],["fc.lc",25],["fstore.biz",25],["cuts-url.com",25],["eio.io",25],["exe.app",25],["exee.io",25],["exey.io",25],["skincarie.com",25],["exeo.app",25],["coinlyhub.com",[25,201]],["adsafelink.com",25],["aii.sh",25],["cybertechng.com",[25,214]],["owllink.net",25],["cutdl.xyz",25],["iir.ai",25],["shorteet.com",[25,232]],["sekilastekno.com",25],["smoner.com",25],["gyanlight.com",25],["xpshort.com",25],["upshrink.com",25],["enit.in",[25,228]],["ez4short.com",25],["easysky.in",25],["veganab.co",25],["adrinolinks.in",25],["go.bloggingaro.com",25],["go.gyanitheme.com",25],["go.theforyou.in",25],["go.hipsonyc.com",25],["birdurls.com",25],["vipurl.in",25],["try2link.com",25],["jameeltips.us",25],["gainl.ink",25],["promo-visits.site",25],["satoshi-win.xyz",[25,290]],["shorterall.com",25],["encurtandourl.com",25],["forextrader.site",25],["postazap.com",25],["cety.app",25],["exego.app",[25,285]],["cutlink.net",25],["cutsy.net",25],["cutyurls.com",25],["cutty.app",25],["cutnet.net",25],["tinys.click",[25,214]],["cpm.icu",25],["panyshort.link",25],["enagato.com",25],["pandaznetwork.com",25],["tvi.la",25],["iir.la",25],["tii.la",25],["oei.la",25],["lnbz.la",[25,228]],["oii.la",25],["tpi.li",25],["recipestutorials.com",25],["shrinkforearn.in",25],["techyuth.xyz",25],["oii.io",25],["du-link.in",25],["atglinks.com",25],["thotpacks.xyz",25],["megaurl.in",25],["megafly.in",25],["simana.online",25],["fooak.com",25],["joktop.com",25],["evernia.site",25],["link.paid4link.com",[25,297]],["exalink.fun",25],["indiamaja.com",25],["newshuta.in",25],["shortxlinks.com",25],["linksly.co",25],["pkr.pw",25],["imagenesderopaparaperros.com",25],["shortenbuddy.com",25],["gibit.xyz",25],["apksvip.com",25],["4cash.me",25],["namaidani.com",25],["teknomuda.com",25],["illink.net",25],["miuiku.com",25],["yourtechnology.online",25],["savelink.site",25],["apkshrt.com",25],["srts.me",25],["kutmoney.com",25],["kutt.io",25],["sanoybonito.club",25],["samaa-pro.com",25],["miklpro.com",25],["modapk.link",25],["1shorten.com",25],["ccurl.net",25],["st23q.com",25],["beautyram.info",25],["viraloc.com",25],["galaxy-link.space",25],["linkpoi.me",25],["usdshort.com",25],["bitcoinly.in",25],["menjelajahi.com",25],["pewgame.com",25],["yxoshort.com",25],["1link.vip",25],["haonguyen.top",25],["claimfreebits.com",25],["crazyblog.in",25],["gtlink.co",25],["link.tokenoto.com",25],["cutearn.net",25],["rshrt.com",25],["short.palmeratv.com",25],["filezipa.com",25],["dz-linkk.com",25],["theblissempire.com",25],["finanzas-vida.com",25],["adurly.cc",25],["pix4link.com",25],["paid4.link",25],["link.asiaon.top",25],["go.gets4link.com",25],["download.sharenulled.net",25],["beingtek.com",25],["shorturl.unityassets4free.com",25],["disheye.com",25],["techymedies.com",25],["techysuccess.com",25],["za.gl",[25,141]],["download.baominh.tech",25],["bblink.com",25],["linkbr.xyz",25],["myad.biz",25],["swzz.xyz",25],["vevioz.com",25],["charexempire.com",25],["clk.asia",25],["egfly.xyz",25],["linka.click",25],["sturls.com",25],["myshrinker.com",25],["go.adinsurance.xyz",25],["dash-free.com",[25,214]],["snowurl.com",[25,214]],["netfile.cc",25],["link.insurglobal.xyz",25],["theconomy.me",25],["rocklink.in",25],["adinsurance.xyz",25],["insurglobal.xyz",25],["techgeek.digital",25],["download3s.net",25],["shortx.net",25],["musicc.xyz",25],["shortawy.com",25],["tlin.me",25],["apprepack.com",25],["up-load.one",25],["zuba.link",25],["news.speedynews.xyz",25],["golink.xaydungplus.com",25],["bestcash2020.com",25],["hoxiin.com",25],["technemo.xyz",25],["go.linkbnao.com",25],["link-yz.com",25],["paylinnk.com",25],["thizissam.in",25],["ier.ai",25],["bloggertheme.xyz",25],["adslink.pw",25],["novelssites.com",25],["links.medipost.org",25],["faucetcrypto.net",25],["short.freeltc.top",25],["trxking.xyz",25],["weadown.com",25],["m.bloggingguidance.com",25],["blog.onroid.com",25],["link.codevn.net",25],["upfilesurls.com",25],["shareus.site",25],["link4rev.site",25],["bloginguru.xyz",25],["celinks.net",25],["c2g.at",25],["shortzu.icu",25],["bitcosite.com",[25,461]],["cryptosh.pro",25],["sigmalinks.in",25],["link68.net",25],["traffic123.net",25],["windowslite.net",[25,214]],["coinsl.click",25],["viewfr.com",25],["cl1ca.com",25],["4br.me",25],["fir3.net",25],["kiddyshort.com",25],["watchmygf.me",[26,51]],["camwhorez.tv",[26,37,83,84]],["cambay.tv",[26,53,83,115,117,118,119,120]],["fpo.xxx",[26,53]],["sexemix.com",26],["heavyfetish.com",[26,524]],["you-porn.com",28],["youporngay.com",28],["youpornru.com",28],["9908ww.com",28],["adelaidepawnbroker.com",28],["bztube.com",28],["hotovs.com",28],["insuredhome.org",28],["nudegista.com",28],["pornluck.com",28],["vidd.se",28],["pornhub.com",28],["pornerbros.com",29],["freep.com",29],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["viki.com",[35,36]],["sleazyneasy.com",[37,38,39]],["smutr.com",[37,197]],["watchdirty.to",[37,84,85,118]],["yourporngod.com",[37,38]],["javbangers.com",[37,335]],["camfox.com",37],["camthots.tv",[37,115]],["shegotass.info",37],["amateur8.com",37],["bigtitslust.com",37],["ebony8.com",37],["freeporn8.com",37],["lesbian8.com",37],["maturetubehere.com",37],["sortporn.com",37],["webcamvau.com",37],["motherporno.com",[37,38,53,117]],["tktube.com",37],["theporngod.com",[37,38]],["pornsocket.com",40],["luxuretv.com",41],["porndig.com",[42,43]],["webcheats.com.br",44],["ceesty.com",[45,46]],["gestyy.com",[45,46]],["corneey.com",46],["destyy.com",46],["festyy.com",46],["sh.st",46],["mitaku.net",46],["angrybirdsnest.com",47],["zrozz.com",47],["clix4btc.com",47],["4tests.com",47],["planet-explorers-isos.com",47],["business-standard.com",47],["goltelevision.com",47],["news-und-nachrichten.de",47],["laradiobbs.net",47],["urlaubspartner.net",47],["produktion.de",47],["cinemaxxl.de",47],["bladesalvador.com",47],["tempr.email",47],["katfile.com",47],["trust.zone",47],["cshort.org",47],["friendproject.net",47],["covrhub.com",47],["planetsuzy.org",48],["empflix.com",49],["freeplayervideo.com",50],["nazarickol.com",50],["player-cdn.com",50],["playhydrax.com",[50,244,245]],["alleneconomicmatter.com",50],["apinchcaseation.com",50],["bethshouldercan.com",50],["bigclatterhomesguideservice.com",50],["bradleyviewdoctor.com",50],["brookethoughi.com",50],["brucevotewithin.com",50],["cindyeyefinal.com",50],["denisegrowthwide.com",50],["donaldlineelse.com",50],["edwardarriveoften.com",50],["erikcoldperson.com",50],["graceaddresscommunity.com",50],["heatherdiscussionwhen.com",50],["housecardsummerbutton.com",50],["jamesstartstudent.com",50],["jamiesamewalk.com",50],["jasminetesttry.com",50],["jasonresponsemeasure.com",50],["jayservicestuff.com",50],["jessicaglassauthor.com",50],["johntryopen.com",50],["josephseveralconcern.com",50],["kennethofficialitem.com",50],["lisatrialidea.com",50],["loriwithinfamily.com",50],["lukecomparetwo.com",50],["markstyleall.com",50],["michaelapplysome.com",50],["morganoperationface.com",50],["nectareousoverelate.com",50],["paulkitchendark.com",50],["rebeccaneverbase.com",50],["roberteachfinal.com",50],["robertplacespace.com",50],["ryanagoinvolve.com",50],["sandrataxeight.com",50],["seanshowcould.com",50],["sethniceletter.com",50],["shannonpersonalcost.com",50],["sharonwhiledemocratic.com",50],["stevenimaginelittle.com",50],["strawberriesporail.com",50],["timberwoodanotia.com",50],["tinycat-voe-fashion.com",50],["troyyourlead.com",50],["uptodatefinishconference.com",50],["uptodatefinishconferenceroom.com",50],["vincentincludesuccessful.com",50],["voe.sx",50],["motphimtv.com",50],["rabbitstream.net",50],["projectfreetv.one",50],["transparentcalifornia.com",51],["deepbrid.com",52],["submityourflicks.com",53],["3movs.com",53],["bravoerotica.net",[53,117]],["youx.xxx",53],["camclips.tv",[53,197]],["camflow.tv",[53,117,118,162,235]],["camhoes.tv",[53,115,117,118,162,235]],["xmegadrive.com",53],["xxxymovies.com",53],["xxxshake.com",53],["gayck.com",53],["xhand.com",[53,117]],["analdin.com",[53,117]],["webnovel.com",54],["videosgay.me",[55,56]],["oneupload.to",56],["oneupload.online",56],["wishfast.top",56],["schwaebische.de",57],["8tracks.com",58],["revealname.com",59],["fcportables.com",[60,61]],["golfchannel.com",63],["telemundodeportes.com",63],["stream.nbcsports.com",63],["mathdf.com",63],["gamcore.com",64],["porcore.com",64],["69games.xxx",64],["javmix.app",64],["tecknity.com",65],["haaretz.co.il",66],["haaretz.com",66],["hungama.com",66],["a-o.ninja",66],["anime-odcinki.pl",66],["kumpulmanga.org",66],["shortgoo.blogspot.com",66],["tonanmedia.my.id",[66,482]],["yurasu.xyz",66],["isekaipalace.com",66],["vikistream.com",67],["eplayer.click",[67,68]],["mega4upload.com",[68,74]],["ennovelas.com",[68,74]],["n-tv.de",69],["brigitte.de",70],["stern.de",70],["foxsports.com.au",71],["canberratimes.com.au",71],["thesimsresource.com",72],["bdnewszh.com",74],["streamservicehd.click",74],["timeforbitco.in",75],["worldofbitco.in",[75,86]],["weatherx.co.in",[75,86]],["getyourbitco.in",75],["sunbtc.space",75],["ctrl.blog",76],["sportlife.es",77],["finofilipino.org",78],["acortarm.xyz",79],["speedtest.net",80],["mysflink.blogspot.com",81],["assia.tv",82],["assia4.com",82],["assia24.com",82],["cwtvembeds.com",[84,116]],["xmateur.com",[84,85,118]],["camlovers.tv",84],["porntn.com",84],["pornissimo.org",84],["sexcams-24.com",[84,118]],["watchporn.to",[84,118]],["camwhorez.video",84],["multi.xxx",85],["footstockings.com",[85,118]],["sbs.com.au",87],["ojogos.com.br",89],["powforums.com",90],["supforums.com",90],["studybullet.com",90],["usgamer.net",91],["recordonline.com",91],["freebitcoin.win",93],["e-monsite.com",93],["coindice.win",93],["sport-tv-guide.live",94],["temp-mails.com",95],["freiepresse.de",96],["investing.com",97],["mp3fiber.com",99],["chicoer.com",100],["dailybreeze.com",100],["dailybulletin.com",100],["dailynews.com",100],["delcotimes.com",100],["eastbaytimes.com",100],["macombdaily.com",100],["ocregister.com",100],["pasadenastarnews.com",100],["pe.com",100],["presstelegram.com",100],["redlandsdailyfacts.com",100],["reviewjournal.com",100],["santacruzsentinel.com",100],["saratogian.com",100],["sentinelandenterprise.com",100],["sgvtribune.com",100],["tampabay.com",100],["times-standard.com",100],["theoaklandpress.com",100],["trentonian.com",100],["twincities.com",100],["whittierdailynews.com",100],["bostonherald.com",100],["dailycamera.com",100],["sbsun.com",100],["dailydemocrat.com",100],["montereyherald.com",100],["orovillemr.com",100],["record-bee.com",100],["redbluffdailynews.com",100],["reporterherald.com",100],["thereporter.com",100],["timescall.com",100],["timesheraldonline.com",100],["ukiahdailyjournal.com",100],["dailylocal.com",100],["mercurynews.com",100],["suedkurier.de",101],["anysex.com",103],["vlist.se",104],["pornve.com",105],["coolrom.com.au",106],["pornohirsch.net",107],["marie-claire.es",108],["gamezhero.com",108],["flashgirlgames.com",108],["onlinesudoku.games",108],["mpg.football",108],["sssam.com",108],["globalnews.ca",109],["drinksmixer.com",110],["leitesculinaria.com",110],["fupa.net",111],["browardpalmbeach.com",112],["dallasobserver.com",112],["houstonpress.com",112],["miaminewtimes.com",112],["phoenixnewtimes.com",112],["westword.com",112],["nhentai.net",113],["nowtv.com.tr",114],["caminspector.net",115],["camwhoreshd.com",115],["camgoddess.tv",115],["gay4porn.com",117],["mypornhere.com",117],["camhub.cc",118],["sexwebvideo.com",118],["sexwebvideo.net",118],["love4porn.com",118],["thotvids.com",118],["watchmdh.to",118],["celebwhore.com",118],["cluset.com",118],["4kporn.xxx",118],["xhomealone.com",118],["lusttaboo.com",[118,408]],["hentai-moon.com",118],["mediapason.it",121],["linkspaid.com",121],["tuotromedico.com",121],["neoteo.com",121],["phoneswiki.com",121],["celebmix.com",121],["myneobuxportal.com",121],["oyungibi.com",121],["25yearslatersite.com",121],["jeshoots.com",122],["techhx.com",122],["karanapk.com",122],["flashplayer.fullstacks.net",124],["cloudapps.herokuapp.com",124],["texteditor.nsspot.net",124],["youfiles.herokuapp.com",124],["temp-mail.org",125],["javhdporn.net",126],["javstream.top",126],["comnuan.com",127],["veedi.com",128],["battleboats.io",128],["fruitlab.com",129],["acetack.com",129],["androidquest.com",129],["apklox.com",129],["chhaprawap.in",129],["gujarativyakaran.com",129],["kashmirstudentsinformation.in",129],["kisantime.com",129],["shetkaritoday.in",129],["pastescript.com",129],["trimorspacks.com",129],["updrop.link",129],["haddoz.net",129],["garoetpos.com",129],["stiletv.it",130],["hqtv.biz",132],["liveuamap.com",133],["muvibg.com",133],["audycje.tokfm.pl",134],["hulu.com",[135,136,137]],["shush.se",138],["emurom.net",139],["allkpop.com",140],["pickcrackpasswords.blogspot.com",142],["kfrfansub.com",143],["thuglink.com",143],["voipreview.org",143],["illicoporno.com",144],["lavoixdux.com",144],["tonpornodujour.com",144],["jacquieetmichel.net",144],["jacquieetmicheltv.net",[144,253,254]],["swame.com",144],["vosfemmes.com",144],["voyeurfrance.net",144],["hanime.tv",145],["pogo.com",146],["cloudvideo.tv",147],["legionjuegos.org",148],["legionpeliculas.org",148],["legionprogramas.org",148],["16honeys.com",149],["elespanol.com",150],["remodelista.com",151],["coolmathgames.com",[152,153,154,542]],["audiofanzine.com",155],["hitokin.net",157],["developerinsider.co",158],["ilprimatonazionale.it",159],["hotabis.com",159],["root-nation.com",159],["italpress.com",159],["airsoftmilsimnews.com",159],["artribune.com",159],["thehindu.com",160],["cambro.tv",[161,162]],["nibelungen-kurier.de",163],["adfoc.us",165],["techyember.com",165],["remixbass.com",165],["techipop.com",165],["quickimageconverter.com",165],["mastharyana.com",165],["tea-coffee.net",165],["spatsify.com",165],["newedutopics.com",165],["getviralreach.in",165],["edukaroo.com",165],["funkeypagali.com",165],["careersides.com",165],["nayisahara.com",165],["wikifilmia.com",165],["infinityskull.com",165],["viewmyknowledge.com",165],["iisfvirtual.in",165],["starxinvestor.com",165],["jkssbalerts.com",165],["myprivatejobs.com",[165,286]],["wikitraveltips.com",[165,286]],["amritadrino.com",[165,286]],["sahlmarketing.net",165],["filmypoints.in",165],["fitnessholic.net",165],["moderngyan.com",165],["sattakingcharts.in",165],["freshbhojpuri.com",165],["bgmi32bitapk.in",165],["bankshiksha.in",165],["earn.mpscstudyhub.com",165],["earn.quotesopia.com",165],["money.quotesopia.com",165],["best-mobilegames.com",165],["learn.moderngyan.com",165],["bharatsarkarijobalert.com",165],["techacode.com",165],["trickms.com",165],["ielts-isa.edu.vn",165],["sptfy.be",165],["mcafee-com.com",[165,285]],["pianetamountainbike.it",166],["barchart.com",167],["modelisme.com",168],["parasportontario.ca",168],["prescottenews.com",168],["nrj-play.fr",169],["oeffentlicher-dienst.info",170],["hackingwithreact.com",171],["gutekueche.at",172],["eplfootballmatch.com",173],["peekvids.com",174],["playvids.com",174],["pornflip.com",174],["redensarten-index.de",175],["vw-page.com",176],["viz.com",[177,178]],["queenfaucet.website",179],["0rechner.de",180],["configspc.com",181],["xopenload.me",181],["uptobox.com",181],["uptostream.com",181],["onepiece-tube.com",182],["japgay.com",183],["mega-debrid.eu",184],["dreamdth.com",185],["diaridegirona.cat",187],["diariodeibiza.es",187],["diariodemallorca.es",187],["diarioinformacion.com",187],["eldia.es",187],["emporda.info",187],["farodevigo.es",187],["laopinioncoruna.es",187],["laopiniondemalaga.es",187],["laopiniondemurcia.es",187],["laopiniondezamora.es",187],["laprovincia.es",187],["levante-emv.com",187],["mallorcazeitung.es",187],["regio7.cat",187],["superdeporte.es",187],["playpaste.com",188],["player.rtl2.de",189],["freetutorialsus.com",190],["vidlii.com",[190,206]],["iammagnus.com",190],["dailyvideoreports.net",190],["unityassets4free.com",190],["cnbc.com",191],["puzzles.msn.com",192],["metro.us",192],["newsobserver.com",192],["arkadiumhosted.com",192],["firefaucet.win",194],["55k.io",195],["filelions.online",195],["stmruby.com",195],["direct-link.net",196],["direkt-wissen.com",196],["link-to.net",196],["fullhdxxx.com",198],["pornclassic.tube",199],["tubepornclassic.com",199],["etonline.com",200],["creatur.io",200],["drphil.com",200],["urbanmilwaukee.com",200],["ontiva.com",200],["hideandseek.world",200],["myabandonware.com",200],["kendam.com",200],["wttw.com",200],["synonyms.com",200],["definitions.net",200],["hostmath.com",200],["camvideoshub.com",200],["minhaconexao.com.br",200],["home-made-videos.com",202],["pxrnxx.xyz",202],["amateur-couples.com",202],["slutdump.com",202],["produsat.com",204],["12thman.com",206],["acusports.com",206],["atlantic10.com",206],["auburntigers.com",206],["baylorbears.com",206],["bceagles.com",206],["bgsufalcons.com",206],["big12sports.com",206],["bigten.org",206],["bradleybraves.com",206],["butlersports.com",206],["cmumavericks.com",206],["conferenceusa.com",206],["cyclones.com",206],["dartmouthsports.com",206],["daytonflyers.com",206],["dbupatriots.com",206],["dbusports.com",206],["denverpioneers.com",206],["fduknights.com",206],["fgcuathletics.com",206],["fightinghawks.com",206],["fightingillini.com",206],["floridagators.com",206],["friars.com",206],["friscofighters.com",206],["gamecocksonline.com",206],["goarmywestpoint.com",206],["gobison.com",206],["goblueraiders.com",206],["gobobcats.com",206],["gocards.com",206],["gocreighton.com",206],["godeacs.com",206],["goexplorers.com",206],["goetbutigers.com",206],["gofrogs.com",206],["gogriffs.com",206],["gogriz.com",206],["golobos.com",206],["gomarquette.com",206],["gopack.com",206],["gophersports.com",206],["goprincetontigers.com",206],["gopsusports.com",206],["goracers.com",206],["goshockers.com",206],["goterriers.com",206],["gotigersgo.com",206],["gousfbulls.com",206],["govandals.com",206],["gowyo.com",206],["goxavier.com",206],["gozags.com",206],["gozips.com",206],["griffinathletics.com",206],["guhoyas.com",206],["gwusports.com",206],["hailstate.com",206],["hamptonpirates.com",206],["hawaiiathletics.com",206],["hokiesports.com",206],["huskers.com",206],["icgaels.com",206],["iuhoosiers.com",206],["jsugamecocksports.com",206],["longbeachstate.com",206],["loyolaramblers.com",206],["lrtrojans.com",206],["lsusports.net",206],["morrisvillemustangs.com",206],["msuspartans.com",206],["muleriderathletics.com",206],["mutigers.com",206],["navysports.com",206],["nevadawolfpack.com",206],["niuhuskies.com",206],["nkunorse.com",206],["nuhuskies.com",206],["nusports.com",206],["okstate.com",206],["olemisssports.com",206],["omavs.com",206],["ovcsports.com",206],["owlsports.com",206],["purduesports.com",206],["redstormsports.com",206],["richmondspiders.com",206],["sfajacks.com",206],["shupirates.com",206],["siusalukis.com",206],["smcgaels.com",206],["smumustangs.com",206],["soconsports.com",206],["soonersports.com",206],["themw.com",206],["tulsahurricane.com",206],["txst.com",206],["txstatebobcats.com",206],["ubbulls.com",206],["ucfknights.com",206],["ucirvinesports.com",206],["uconnhuskies.com",206],["uhcougars.com",206],["uicflames.com",206],["umterps.com",206],["uncwsports.com",206],["unipanthers.com",206],["unlvrebels.com",206],["uoflsports.com",206],["usdtoreros.com",206],["utahstateaggies.com",206],["utepathletics.com",206],["utrockets.com",206],["uvmathletics.com",206],["uwbadgers.com",206],["villanova.com",206],["wkusports.com",206],["wmubroncos.com",206],["woffordterriers.com",206],["1pack1goal.com",206],["bcuathletics.com",206],["bubraves.com",206],["goblackbears.com",206],["golightsgo.com",206],["gomcpanthers.com",206],["goutsa.com",206],["mercerbears.com",206],["pirateblue.com",206],["pirateblue.net",206],["pirateblue.org",206],["quinnipiacbobcats.com",206],["towsontigers.com",206],["tribeathletics.com",206],["tribeclub.com",206],["utepminermaniacs.com",206],["utepminers.com",206],["wkutickets.com",206],["aopathletics.org",206],["atlantichockeyonline.com",206],["bigsouthnetwork.com",206],["bigsouthsports.com",206],["chawomenshockey.com",206],["dbupatriots.org",206],["drakerelays.org",206],["ecac.org",206],["ecacsports.com",206],["emueagles.com",206],["emugameday.com",206],["gculopes.com",206],["godrakebulldog.com",206],["godrakebulldogs.com",206],["godrakebulldogs.net",206],["goeags.com",206],["goislander.com",206],["goislanders.com",206],["gojacks.com",206],["gomacsports.com",206],["gseagles.com",206],["hubison.com",206],["iowaconference.com",206],["ksuowls.com",206],["lonestarconference.org",206],["mascac.org",206],["midwestconference.org",206],["mountaineast.org",206],["niu-pack.com",206],["nulakers.ca",206],["oswegolakers.com",206],["ovcdigitalnetwork.com",206],["pacersports.com",206],["rmacsports.org",206],["rollrivers.com",206],["samfordsports.com",206],["uncpbraves.com",206],["usfdons.com",206],["wiacsports.com",206],["alaskananooks.com",206],["broncathleticfund.com",206],["cameronaggies.com",206],["columbiacougars.com",206],["etownbluejays.com",206],["gobadgers.ca",206],["golancers.ca",206],["gometrostate.com",206],["gothunderbirds.ca",206],["kentstatesports.com",206],["lehighsports.com",206],["lopers.com",206],["lycoathletics.com",206],["lycomingathletics.com",206],["maraudersports.com",206],["mauiinvitational.com",206],["msumavericks.com",206],["nauathletics.com",206],["nueagles.com",206],["nwusports.com",206],["oceanbreezenyc.org",206],["patriotathleticfund.com",206],["pittband.com",206],["principiaathletics.com",206],["roadrunnersathletics.com",206],["sidearmsocial.com",206],["snhupenmen.com",206],["stablerarena.com",206],["stoutbluedevils.com",206],["uwlathletics.com",206],["yumacs.com",206],["collegefootballplayoff.com",206],["csurams.com",206],["cubuffs.com",206],["gobearcats.com",206],["gohuskies.com",206],["mgoblue.com",206],["osubeavers.com",206],["pittsburghpanthers.com",206],["rolltide.com",206],["texassports.com",206],["thesundevils.com",206],["uclabruins.com",206],["wvuathletics.com",206],["wvusports.com",206],["arizonawildcats.com",206],["calbears.com",206],["cuse.com",206],["georgiadogs.com",206],["goducks.com",206],["goheels.com",206],["gostanford.com",206],["insidekstatesports.com",206],["insidekstatesports.info",206],["insidekstatesports.net",206],["insidekstatesports.org",206],["k-stateathletics.com",206],["k-statefootball.net",206],["k-statefootball.org",206],["k-statesports.com",206],["k-statesports.net",206],["k-statesports.org",206],["k-statewomenshoops.com",206],["k-statewomenshoops.net",206],["k-statewomenshoops.org",206],["kstateathletics.com",206],["kstatefootball.net",206],["kstatefootball.org",206],["kstatesports.com",206],["kstatewomenshoops.com",206],["kstatewomenshoops.net",206],["kstatewomenshoops.org",206],["ksuathletics.com",206],["ksusports.com",206],["scarletknights.com",206],["showdownforrelief.com",206],["syracusecrunch.com",206],["texastech.com",206],["theacc.com",206],["ukathletics.com",206],["usctrojans.com",206],["utahutes.com",206],["utsports.com",206],["wsucougars.com",206],["tricksplit.io",206],["fangraphs.com",207],["4players.de",[208,331]],["buffed.de",208],["gamesaktuell.de",208],["gamezone.de",208],["pcgames.de",208],["videogameszone.de",208],["tvspielfilm.de",[209,210,211,212]],["tvtoday.de",[209,210,211,212]],["chip.de",[209,210,211,212]],["focus.de",[209,210,211,212]],["planetaminecraft.com",213],["cravesandflames.com",214],["codesnse.com",214],["link.paid4file.com",214],["flyad.vip",214],["lapresse.ca",215],["kolyoom.com",216],["ilovephd.com",216],["negumo.com",217],["games.wkb.jp",[218,219]],["fandom.com",[220,559,560]],["kenshi.fandom.com",221],["hausbau-forum.de",222],["homeairquality.org",222],["faucettronn.click",222],["ticketmaster.sg",222],["fake-it.ws",223],["laksa19.github.io",224],["1shortlink.com",225],["nesia.my.id",226],["u-s-news.com",227],["makemoneywithurl.com",228],["junkyponk.com",228],["healthfirstweb.com",228],["vocalley.com",228],["yogablogfit.com",228],["howifx.com",[228,443]],["en.financerites.com",228],["mythvista.com",228],["livenewsflix.com",228],["cureclues.com",228],["apekite.com",228],["host-buzz.com",228],["insmyst.com",228],["wp2host.com",228],["blogtechh.com",228],["techbixby.com",228],["blogmyst.com",228],["resetoff.pl",229],["sexodi.com",229],["cdn77.org",230],["howtofixwindows.com",231],["3sexporn.com",232],["momxxxsex.com",232],["myfreevintageporn.com",232],["penisbuyutucum.net",232],["ujszo.com",233],["newsmax.com",234],["bobs-tube.com",235],["nadidetarifler.com",236],["siz.tv",236],["suzylu.co.uk",[237,238]],["onworks.net",239],["yabiladi.com",239],["downloadsoft.net",240],["pixsera.net",241],["testlanguages.com",242],["newsinlevels.com",242],["videosinlevels.com",242],["cbs.com",243],["paramountplus.com",243],["abysscdn.com",[244,245]],["buktube.com",246],["fullxh.com",246],["galleryxh.site",246],["megaxh.com",246],["movingxh.world",246],["seexh.com",246],["taoxh.life",246],["unlockxh4.com",246],["valuexh.life",246],["xhaccess.com",246],["xhadult2.com",246],["xhadult3.com",246],["xhadult4.com",246],["xhadult5.com",246],["xhamster46.com",246],["xhbig.com",246],["xhbranch5.com",246],["xhdate.world",246],["xhday.com",246],["xhday1.com",246],["xhmoon5.com",246],["xhplanet1.com",246],["xhplanet2.com",246],["xhreal2.com",246],["xhreal3.com",246],["xhtab2.com",246],["xhtab4.com",246],["xhtree.com",246],["xhvictory.com",246],["xhwebsite.com",246],["xhwebsite2.com",246],["xhwide1.com",246],["lightnovelworld.com",247],["megadescarga.net",[248,249,250,251]],["megadescargas.net",[248,249,250,251]],["hentaihaven.xxx",252],["jacquieetmicheltv2.net",254],["ultimate-guitar.com",256],["teachmemicro.com",257],["willcycle.com",257],["2ndrun.tv",257],["rackusreads.com",257],["xyzsports111.xyz",[258,259,260]],["xyzsports112.xyz",[258,259,260]],["xyzsports113.xyz",[258,259,260]],["xyzsports114.xyz",[258,259,260]],["xyzsprtsfrmr1.site",[258,259,260]],["xyzsprtsfrmr2.site",[258,259,260]],["claimbits.net",261],["sexyscope.net",262],["recherche-ebook.fr",264],["easymc.io",264],["zonebourse.com",265],["pink-sluts.net",266],["madoohd.com",267],["andhrafriends.com",268],["benzinpreis.de",269],["defenseone.com",270],["govexec.com",270],["nextgov.com",270],["route-fifty.com",270],["sharing.wtf",271],["wetter3.de",272],["arahdrive.com",273],["aiimgvlog.fun",[273,285]],["esportivos.fun",274],["cosmonova-broadcast.tv",275],["soccerinhd.com",276],["techedubyte.com",276],["hartvannederland.nl",277],["shownieuws.nl",277],["vandaaginside.nl",277],["rock.porn",[278,279]],["videzz.net",[280,281]],["ezaudiobookforsoul.com",282],["club386.com",283],["wheelofgold.com",284],["ozulmanga.com",284],["starkroboticsfrc.com",285],["sinonimos.de",285],["antonimos.de",285],["quesignifi.ca",285],["tiktokrealtime.com",285],["tiktokcounter.net",285],["tpayr.xyz",285],["poqzn.xyz",285],["ashrfd.xyz",285],["rezsx.xyz",285],["tryzt.xyz",285],["ashrff.xyz",285],["rezst.xyz",285],["dawenet.com",285],["erzar.xyz",285],["waezm.xyz",285],["waezg.xyz",285],["blackwoodacademy.org",285],["cryptednews.space",285],["vivuq.com",285],["swgop.com",285],["vbnmll.com",285],["telcoinfo.online",285],["dshytb.com",285],["fitdynamos.com",[285,287]],["btcbitco.in",[285,289]],["btcsatoshi.net",285],["cempakajaya.com",285],["crypto4yu.com",285],["readbitcoin.org",285],["wiour.com",285],["finish.addurl.biz",285],["laweducationinfo.com",285],["savemoneyinfo.com",285],["worldaffairinfo.com",285],["godstoryinfo.com",285],["successstoryinfo.com",285],["learnmarketinfo.com",285],["bhugolinfo.com",285],["armypowerinfo.com",285],["rsadnetworkinfo.com",285],["rsinsuranceinfo.com",285],["rsfinanceinfo.com",285],["rsgamer.app",285],["rssoftwareinfo.com",285],["rshostinginfo.com",285],["rseducationinfo.com",285],["advertisingexcel.com",285],["allcryptoz.net",285],["batmanfactor.com",285],["beautifulfashionnailart.com",285],["crewbase.net",285],["documentaryplanet.xyz",285],["crewus.net",285],["gametechreviewer.com",285],["midebalonu.net",285],["misterio.ro",285],["phineypet.com",285],["seory.xyz",285],["shinbhu.net",285],["shinchu.net",285],["substitutefor.com",285],["talkforfitness.com",285],["thefitbrit.co.uk",285],["thumb8.net",285],["thumb9.net",285],["topcryptoz.net",285],["uniqueten.net",285],["ultraten.net",285],["exactpay.online",285],["kiddyearner.com",285],["luckydice.net",286],["adarima.org",286],["tieutietkiem.com",286],["weatherwx.com",286],["sattaguess.com",286],["winshell.de",286],["rosasidan.ws",286],["modmakers.xyz",286],["gamepure.in",286],["warrenrahul.in",286],["austiblox.net",286],["upiapi.in",286],["myownguess.in",286],["networkhint.com",286],["watchhentai.net",286],["thichcode.net",286],["texturecan.com",286],["tikmate.app",[286,514]],["4funbox.com",288],["nephobox.com",288],["1024tera.com",288],["blog.cryptowidgets.net",289],["blog.insurancegold.in",289],["blog.wiki-topia.com",289],["blog.coinsvalue.net",289],["blog.cookinguide.net",289],["blog.freeoseocheck.com",289],["blog24.me",289],["bildirim.link",291],["appsbull.com",292],["diudemy.com",292],["maqal360.com",292],["lifesurance.info",293],["infokeeda.xyz",294],["webzeni.com",294],["dl.apkmoddone.com",295],["phongroblox.com",295],["apkmodvn.com",296],["arcai.com",298],["my-code4you.blogspot.com",299],["flickr.com",300],["firefile.cc",301],["pestleanalysis.com",301],["kochamjp.pl",301],["tutorialforlinux.com",301],["whatsaero.com",301],["animeblkom.net",[301,317]],["blkom.com",301],["globes.co.il",[302,303]],["jardiner-malin.fr",304],["tw-calc.net",305],["ohmybrush.com",306],["talkceltic.net",307],["mentalfloss.com",308],["uprafa.com",309],["cube365.net",310],["nightfallnews.com",[311,312]],["wwwfotografgotlin.blogspot.com",313],["freelistenonline.com",313],["badassdownloader.com",314],["quickporn.net",315],["yellowbridge.com",316],["aosmark.com",318],["atozmath.com",[320,321,322,323,324,325,326]],["newyorker.com",327],["brighteon.com",328],["more.tv",329],["video1tube.com",330],["alohatube.xyz",330],["fshost.me",332],["link.cgtips.org",333],["hentaicloud.com",334],["netfapx.com",336],["paperzonevn.com",337],["hentaienglish.com",338],["hentaiporno.xxx",338],["venge.io",[339,340]],["btcbux.io",341],["its.porn",[342,343]],["atv.at",344],["kusonime.com",[345,346]],["jetpunk.com",348],["imgur.com",349],["hentai-party.com",350],["hentaicomics.pro",350],["xxx-comics.pro",350],["genshinimpactcalculator.com",353],["mysexgames.com",354],["embed.indavideo.hu",357],["coinurl.net",[358,359]],["gdr-online.com",360],["mmm.dk",361],["iqiyi.com",[362,363,506]],["m.iqiyi.com",364],["japopav.tv",365],["lvturbo.com",365],["nbcolympics.com",366],["apkhex.com",367],["indiansexstories2.net",368],["issstories.xyz",368],["1340kbbr.com",369],["gorgeradio.com",369],["kduk.com",369],["kedoam.com",369],["kejoam.com",369],["kelaam.com",369],["khsn1230.com",369],["kjmx.rocks",369],["kloo.com",369],["klooam.com",369],["klykradio.com",369],["kmed.com",369],["kmnt.com",369],["kool991.com",369],["kpnw.com",369],["kppk983.com",369],["krktcountry.com",369],["ktee.com",369],["kwro.com",369],["kxbxfm.com",369],["thevalley.fm",369],["quizlet.com",370],["dsocker1234.blogspot.com",371],["schoolcheats.net",[372,373]],["mgnet.xyz",374],["designtagebuch.de",375],["pixroute.com",376],["uploady.io",377],["calculator-online.net",378],["porngames.club",379],["sexgames.xxx",379],["111.90.159.132",380],["battleplan.news",380],["mobile-tracker-free.com",381],["pfps.gg",382],["ac-illust.com",[383,384]],["photo-ac.com",[383,384]],["vlxxs.net",385],["rapelust.com",385],["vtube.to",385],["vtplay.net",385],["desitelugusex.com",385],["xvideos-downloader.net",385],["xxxvideotube.net",385],["sdefx.cloud",385],["nozomi.la",385],["moviesonlinefree.net",385],["social-unlock.com",386],["ninja.io",387],["sourceforge.net",388],["samfirms.com",389],["banned.video",390],["madmaxworld.tv",390],["huffpost.com",391],["ingles.com",392],["spanishdict.com",392],["surfline.com",[393,394]],["play.tv3.ee",395],["play.tv3.lt",395],["play.tv3.lv",395],["tv3play.skaties.lv",395],["trendyoum.com",396],["bulbagarden.net",397],["moviestars.to",398],["hollywoodlife.com",399],["mat6tube.com",400],["textstudio.co",401],["newtumbl.com",402],["aruble.net",404],["nevcoins.club",405],["mail.com",406],["oggi.it",[409,410]],["manoramamax.com",409],["video.gazzetta.it",[409,410]],["mangakita.id",411],["mangakita.net",411],["poscishd.online",412],["avpgalaxy.net",413],["mhma12.tech",414],["panda-novel.com",415],["zebranovel.com",415],["lightsnovel.com",415],["eaglesnovel.com",415],["pandasnovel.com",415],["zadfaucet.com",416],["ewrc-results.com",417],["kizi.com",418],["cyberscoop.com",419],["fedscoop.com",419],["canale.live",420],["indiatimes.com",421],["mafiatown.pl",[422,423]],["jeep-cj.com",424],["sponsorhunter.com",425],["cloudcomputingtopics.net",426],["likecs.com",427],["tiscali.it",428],["linkspy.cc",429],["tutelehd3.xyz",430],["dirty.pink",[431,432,433]],["adshnk.com",434],["chattanoogan.com",435],["adsy.pw",436],["playstore.pw",436],["socialmediagirls.com",437],["windowspro.de",438],["snapinsta.app",439],["tvtv.ca",440],["tvtv.us",440],["mydaddy.cc",441],["roadtrippin.fr",442],["vavada5com.com",443],["redketchup.io",[444,445,446]],["anyporn.com",[447,463]],["bravoporn.com",447],["bravoteens.com",447],["crocotube.com",447],["hellmoms.com",447],["hellporno.com",447],["sex3.com",447],["tubewolf.com",447],["xbabe.com",447],["xcum.com",447],["zedporn.com",447],["imagetotext.info",448],["infokik.com",449],["freepik.com",450],["ddwloclawek.pl",[451,452]],["deezer.com",453],["my-subs.co",454],["plaion.com",455],["rapid-cloud.co",456],["slideshare.net",[457,458]],["ustreasuryyieldcurve.com",459],["businesssoftwarehere.com",460],["goo.st",460],["freevpshere.com",460],["softwaresolutionshere.com",460],["staige.tv",464],["in-jpn.com",465],["oninet.ne.jp",465],["xth.jp",465],["androidadult.com",466],["streamvid.net",467],["watchtv24.com",468],["cellmapper.net",469],["medscape.com",470],["newscon.org",[471,472]],["arkadium.com",473],["bembed.net",474],["elbailedeltroleo.site",474],["embedv.net",474],["fslinks.org",474],["listeamed.net",474],["v6embed.xyz",474],["vgplayer.xyz",474],["vid-guard.com",474],["vidguard.online",474],["app.blubank.com",475],["mobileweb.bankmellat.ir",475],["sportdeutschland.tv",476],["kcra.com",476],["wcvb.com",476],["ccthesims.com",483],["chromeready.com",483],["coursedrive.org",483],["dtbps3games.com",483],["illustratemagazine.com",483],["uknip.co.uk",483],["vod.pl",484],["megadrive-emulator.com",485],["animesaga.in",488],["moviesapi.club",488],["bestx.stream",488],["watchx.top",488],["digimanie.cz",489],["svethardware.cz",489],["srvy.ninja",490],["drawer-opportunity-i-243.site",491],["tchatche.com",492],["edmdls.com",493],["freshremix.net",493],["scenedl.org",493],["trakt.tv",494],["shroomers.app",495],["classicalradio.com",496],["di.fm",496],["jazzradio.com",496],["radiotunes.com",496],["rockradio.com",496],["zenradio.com",496],["pc-builds.com",497],["qtoptens.com",497],["reuters.com",497],["today.com",497],["videogamer.com",497],["wrestlinginc.com",497],["gbatemp.net",497],["movie-th.tv",498],["iwanttfc.com",499],["nutraingredients-asia.com",500],["nutraingredients-latam.com",500],["nutraingredients-usa.com",500],["nutraingredients.com",500],["mavenarts.in",501],["ozulscansen.com",502],["fitnessbr.click",503],["minhareceita.xyz",503],["doomied.monster",504],["lookmovie2.to",504],["royalroad.com",505],["biletomat.pl",507],["hextank.io",[508,509]],["filmizlehdfilm.com",[510,511,512,513]],["fullfilmizle.cc",[510,511,512,513]],["sagewater.com",515],["redlion.net",515],["satdl.com",516],["poophq.com",517],["veev.to",517],["vidstreaming.xyz",518],["everand.com",519],["myradioonline.pl",520],["tacobell.com",522],["zefoy.com",523],["natgeotv.com",525],["br.de",526],["indeed.com",527],["pasteboard.co",528],["clickhole.com",529],["deadspin.com",529],["gizmodo.com",529],["jalopnik.com",529],["jezebel.com",529],["kotaku.com",529],["lifehacker.com",529],["splinternews.com",529],["theinventory.com",529],["theonion.com",529],["theroot.com",529],["thetakeout.com",529],["pewresearch.org",529],["los40.com",[530,531]],["as.com",531],["telegraph.co.uk",[532,533]],["poweredbycovermore.com",[532,582]],["lumens.com",[532,582]],["verizon.com",534],["humanbenchmark.com",535],["politico.com",536],["officedepot.co.cr",[537,538]],["usnews.com",541],["factable.com",543],["zee5.com",544],["gala.fr",545],["geo.fr",545],["voici.fr",545],["gloucestershirelive.co.uk",546],["arsiv.mackolik.com",547],["jacksonguitars.com",548],["scandichotels.com",549],["stylist.co.uk",550],["nettiauto.com",551],["thaiairways.com",[552,553]],["cerbahealthcare.it",[554,555]],["futura-sciences.com",[554,571]],["tiendaenlinea.claro.com.ni",[556,557]],["tieba.baidu.com",558],["grasshopper.com",[561,562]],["epson.com.cn",[563,564,565,566]],["oe24.at",[567,568]],["szbz.de",567],["platform.autods.com",[569,570]],["wikihow.com",572],["citibank.com.sg",573],["uol.com.br",[574,575,576,577,578]],["gazzetta.gr",579],["digicol.dpm.org.cn",[580,581]],["virginmediatelevision.ie",583],["larazon.es",[584,585]],["waitrosecellar.com",[586,587,588]],["sharpen-free-design-generator.netlify.app",[590,591]],["help.cashctrl.com",[592,593]],["commande.rhinov.pro",[594,595]],["ecom.wixapps.net",[594,595]],["tipranks.com",[596,597]],["iceland.co.uk",[598,599,600]],["socket.pearsoned.com",601],["tntdrama.com",[602,603]],["mobile.de",[604,605]],["ioe.vn",[606,607]],["geiriadur.ac.uk",[606,610]],["welsh-dictionary.ac.uk",[606,610]],["bikeportland.org",[608,609]],["biologianet.com",[575,576,577]],["10play.com.au",[611,612]],["sunshine-live.de",[613,614]],["whatismyip.com",[615,616]],["myfitnesspal.com",617],["netoff.co.jp",[618,619]],["clickjogos.com.br",622],["bristan.com",[623,624]],["zillow.com",625],["share.hntv.tv",[626,627,628,629]],["forum.dji.com",[626,629]],["optimum.net",[630,631]],["investor-web.hdfcfund.com",632],["user.guancha.cn",[633,634]],["sosovalue.com",635],["bandyforbundet.no",[636,637]],["tatacommunications.com",638],["suamusica.com.br",[639,640,641]],["macrotrends.net",[642,643]],["code.world",644],["topgear.com",645],["eservice.directauto.com",[646,647]],["panel.freemcserver.net",648],["jdsports.com",[649,650]],["engadget.com",[649,650]],["yahoo.com",[649,650]],["techcrunch.com",[649,650]],["rivals.com",[649,650]],["kkrt.com",[649,650]],["crunchyroll.com",[649,650]],["dnb.com",[649,650]],["dnb.co.uk",[649,650]],["weather.com",[649,650]],["ubereats.com",[649,650]],["usatoday.com",651]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,50]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",21],["hqq",[22,23]],["waaw",[23,24]],["younetu",23],["vvtplayer",23],["123link",25],["adshort",25],["linkshorts",25],["adsrt",25],["vinaurl",25],["adfloz",25],["dutchycorp",25],["shortearn",25],["pingit",25],["shrink",25],["tmearn",25],["megalink",25],["miniurl",25],["gplinks",25],["clk",25],["pureshort",25],["shrinke",25],["shrinkme",25],["pcprogramasymas",25],["link1s",25],["shortzzy",25],["shorttey",[25,200]],["lite-link",25],["adcorto",25],["zshort",25],["upfiles",25],["linkfly",25],["wplink",25],["seulink",25],["encurtalink",25],["camwhores",[26,37,83,84,85]],["tube8",[27,28]],["youporn",28],["redtube",28],["pornhub",[28,186]],["upornia",[30,31]],["fmovies",50],["xtits",[53,117]],["streamwish",[55,56]],["pouvideo",62],["povvideo",62],["povw1deo",62],["povwideo",62],["powv1deo",62],["powvibeo",62],["powvideo",62],["powvldeo",62],["plyjam",[67,68]],["fxporn69",73],["vipbox",74],["viprow",74],["desbloqueador",79],["xberuang",81],["teknorizen",81],["subtorrents",88],["subtorrents1",88],["newpelis",88],["pelix",88],["allcalidad",88],["infomaniakos",88],["filecrypt",92],["tornadomovies",98],["icdrama",104],["mangasail",104],["file4go",106],["mangovideo",118],["asianclub",126],["anitube",129],["mixdrop",131],["uploadev",156],["ver-pelis-online",164],["ancient-origins",173],["spankbang",193],["lookcam",200],["lootlinks",200],["dpstream",203],["bluemediafiles",205],["docer",229],["hamsterix",246],["xhamster",246],["xhamster1",246],["xhamster10",246],["xhamster11",246],["xhamster12",246],["xhamster13",246],["xhamster14",246],["xhamster15",246],["xhamster16",246],["xhamster17",246],["xhamster18",246],["xhamster19",246],["xhamster20",246],["xhamster2",246],["xhamster3",246],["xhamster4",246],["xhamster42",246],["xhamster5",246],["xhamster7",246],["xhamster8",246],["acortalo",[248,249,250,251]],["acortar",[248,249,250,251]],["a2zapk",255],["kickassanime",263],["doomovie-hd",267],["drakecomic",284],["terabox",288],["ctrlv",319],["123movieshd",347],["uproxy",351],["animesa",352],["cinecalidad",[355,356]],["dvdplay",385],["apkmaven",403],["gmx",407],["gamereactor",462],["vembed",474],["empire-anime",[477,478,479,480,481]],["empire-stream",[477,478,479]],["empire-streaming",[477,478,479]],["empire-streamz",[477,478,479]],["tvhay",[486,487]],["lookmovie",504],["filmizletv",[510,511,512,513]],["www.google",521],["officedepot",[539,540]],["foundit",[620,621]]]);

const exceptionsMap = new Map([["pingit.com",[25]],["pingit.me",[25]],["lookmovie.studio",[504]]]);

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
