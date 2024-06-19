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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["Object.prototype.isAdblock","undefined"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["postroll","undefined"],["interstitial","undefined"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["tOS1","150"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Div_popup",""],["Scribd.Blob.AdBlockerModal","noopFunc"],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["SalesforceInteractions","{}"],["SalesforceInteractions.CatalogObjectInteractionName"],["supportedBrowsers",""],["getComputedStyle","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,570]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,248]],["gadgets.es",[12,248]],["amateurporn.co",[12,106]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,427]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,109]],["familyporn.tv",15],["cloudemb.com",[15,349]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,91]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["netu.frembed.fun",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,127]],["stfly.me",24],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["megaurl.in",24],["megafly.in",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,205]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,214]],["owllink.net",24],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,233]],["sekilastekno.com",24],["smoner.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,229]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,277]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["tinys.click",[24,214]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,229]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["thotpacks.xyz",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["apkshrt.com",24],["srts.me",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["1shorten.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["viraloc.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["haonguyen.top",24],["claimfreebits.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["short.palmeratv.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["pix4link.com",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,146]],["download.baominh.tech",24],["bblink.com",24],["linkbr.xyz",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["dash-free.com",[24,214]],["snowurl.com",[24,214]],["netfile.cc",24],["link.insurance-space.xyz",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rajsayt.xyz",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["cutty.app",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,441]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,214]],["coinsl.click",24],["exalink.fun",24],["exego.app",[24,273]],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,53]],["camwhorez.tv",[25,38,90,91]],["fpo.xxx",[25,55]],["sexemix.com",25],["heavyfetish.com",[25,505]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["jacquieetmicheltv.net",[34,35]],["illicoporno.com",34],["lavoixdux.com",34],["tonpornodujour.com",34],["jacquieetmichel.net",34],["swame.com",34],["vosfemmes.com",34],["voyeurfrance.net",34],["viki.com",[36,37]],["sleazyneasy.com",[38,39,40]],["smutr.com",[38,201]],["yourporngod.com",[38,39]],["javbangers.com",[38,319]],["camfox.com",38],["camthots.tv",[38,122]],["shegotass.info",38],["amateur8.com",38],["bigtitslust.com",38],["ebony8.com",38],["freeporn8.com",38],["lesbian8.com",38],["maturetubehere.com",38],["sortporn.com",38],["webcamvau.com",38],["motherporno.com",[38,39,55,124]],["tktube.com",38],["theporngod.com",[38,39]],["pornsocket.com",41],["luxuretv.com",42],["porndig.com",[43,44]],["webcheats.com.br",45],["ceesty.com",[46,47]],["gestyy.com",[46,47]],["corneey.com",47],["destyy.com",47],["festyy.com",47],["sh.st",47],["angrybirdsnest.com",48],["zrozz.com",48],["clix4btc.com",48],["4tests.com",48],["planet-explorers-isos.com",48],["business-standard.com",48],["goltelevision.com",48],["news-und-nachrichten.de",48],["laradiobbs.net",48],["urlaubspartner.net",48],["produktion.de",48],["cinemaxxl.de",48],["bladesalvador.com",48],["tempr.email",48],["katfile.com",48],["trust.zone",48],["cshort.org",48],["friendproject.net",48],["covrhub.com",48],["planetsuzy.org",49],["empflix.com",50],["freeplayervideo.com",51],["nazarickol.com",51],["player-cdn.com",51],["playhydrax.com",51],["apinchcaseation.com",51],["bigclatterhomesguideservice.com",51],["bradleyviewdoctor.com",51],["brookethoughi.com",51],["brucevotewithin.com",51],["cindyeyefinal.com",51],["denisegrowthwide.com",51],["edwardarriveoften.com",51],["graceaddresscommunity.com",51],["housecardsummerbutton.com",51],["jamesstartstudent.com",51],["jamiesamewalk.com",51],["jasonresponsemeasure.com",51],["jayservicestuff.com",51],["johntryopen.com",51],["kennethofficialitem.com",51],["loriwithinfamily.com",51],["lukecomparetwo.com",51],["markstyleall.com",51],["michaelapplysome.com",51],["morganoperationface.com",51],["nectareousoverelate.com",51],["paulkitchendark.com",51],["rebeccaneverbase.com",51],["ryanagoinvolve.com",51],["sandrataxeight.com",51],["seanshowcould.com",51],["sethniceletter.com",51],["shannonpersonalcost.com",51],["sharonwhiledemocratic.com",51],["stevenimaginelittle.com",51],["strawberriesporail.com",51],["timberwoodanotia.com",51],["tinycat-voe-fashion.com",51],["troyyourlead.com",51],["uptodatefinishconference.com",51],["uptodatefinishconferenceroom.com",51],["vincentincludesuccessful.com",51],["voe.sx",51],["motphimtv.com",51],["rabbitstream.net",51],["projectfreetv.one",51],["filespace.com",52],["transparentcalifornia.com",53],["deepbrid.com",54],["submityourflicks.com",55],["3movs.com",55],["cambay.tv",[55,106,122,124]],["bravoerotica.net",[55,124]],["youx.xxx",55],["camclips.tv",[55,201]],["camflow.tv",[55,106,124,167,237]],["camhoes.tv",[55,106,122,124,167,237]],["xmegadrive.com",55],["xxxymovies.com",55],["xxxshake.com",55],["gayck.com",55],["xhand.com",[55,124]],["analdin.com",[55,124]],["webnovel.com",56],["videosgay.me",[57,58]],["wishfast.top",58],["schwaebische.de",59],["mercurynews.com",60],["chicoer.com",60],["dailybreeze.com",60],["dailybulletin.com",60],["dailynews.com",60],["delcotimes.com",60],["eastbaytimes.com",60],["macombdaily.com",60],["ocregister.com",60],["pasadenastarnews.com",60],["pe.com",60],["presstelegram.com",60],["redlandsdailyfacts.com",60],["reviewjournal.com",60],["santacruzsentinel.com",60],["saratogian.com",60],["sentinelandenterprise.com",60],["sgvtribune.com",60],["tampabay.com",60],["times-standard.com",60],["theoaklandpress.com",60],["trentonian.com",60],["twincities.com",60],["whittierdailynews.com",60],["bostonherald.com",60],["dailycamera.com",60],["sbsun.com",60],["dailydemocrat.com",60],["montereyherald.com",60],["orovillemr.com",60],["record-bee.com",60],["redbluffdailynews.com",60],["reporterherald.com",60],["thereporter.com",60],["timescall.com",60],["timesheraldonline.com",60],["ukiahdailyjournal.com",60],["dailylocal.com",60],["8tracks.com",61],["revealname.com",62],["fcportables.com",[63,64]],["golfchannel.com",66],["telemundodeportes.com",66],["stream.nbcsports.com",66],["gamcore.com",67],["porcore.com",67],["69games.xxx",67],["javmix.app",67],["tecknity.com",68],["haaretz.co.il",69],["haaretz.com",69],["hungama.com",69],["a-o.ninja",69],["anime-odcinki.pl",69],["kumpulmanga.org",69],["shortgoo.blogspot.com",69],["tonanmedia.my.id",[69,461]],["yurasu.xyz",69],["isekaipalace.com",69],["megadescarga.net",[70,71,72,73]],["megadescargas.net",[70,71,72,73]],["vikistream.com",74],["eplayer.click",[74,75]],["mega4upload.com",[75,81]],["ennovelas.com",[75,81]],["n-tv.de",76],["brigitte.de",77],["stern.de",77],["foxsports.com.au",78],["canberratimes.com.au",78],["thesimsresource.com",79],["bdnewszh.com",81],["streamservicehd.click",81],["timeforbitco.in",82],["worldofbitco.in",[82,93]],["weatherx.co.in",[82,93]],["getyourbitco.in",82],["sunbtc.space",82],["ctrl.blog",83],["sportlife.es",84],["finofilipino.org",85],["acortarm.xyz",86],["acortame.xyz",86],["speedtest.net",87],["mysflink.blogspot.com",88],["assia.tv",89],["assia4.com",89],["assia24.com",89],["cwtvembeds.com",[91,123]],["xmateur.com",[91,92,106]],["camlovers.tv",91],["porntn.com",91],["pornissimo.org",91],["sexcams-24.com",[91,106]],["watchporn.to",[91,106]],["camwhorez.video",91],["footstockings.com",[92,106]],["sbs.com.au",94],["ojogos.com.br",96],["powforums.com",97],["supforums.com",97],["studybullet.com",97],["usgamer.net",98],["recordonline.com",98],["freebitcoin.win",100],["e-monsite.com",100],["coindice.win",100],["sport-tv-guide.live",101],["temp-mails.com",102],["freiepresse.de",103],["investing.com",104],["camhub.cc",106],["love4porn.com",106],["thotvids.com",106],["watchmdh.to",106],["celebwhore.com",106],["cluset.com",106],["4kporn.xxx",106],["xhomealone.com",106],["lusttaboo.com",[106,390]],["hentai-moon.com",106],["mp3fiber.com",107],["suedkurier.de",108],["anysex.com",110],["vlist.se",111],["pornve.com",112],["coolrom.com.au",113],["pornohirsch.net",114],["marie-claire.es",115],["gamezhero.com",115],["flashgirlgames.com",115],["onlinesudoku.games",115],["mpg.football",115],["sssam.com",115],["globalnews.ca",116],["drinksmixer.com",117],["leitesculinaria.com",117],["fupa.net",118],["browardpalmbeach.com",119],["dallasobserver.com",119],["houstonpress.com",119],["miaminewtimes.com",119],["phoenixnewtimes.com",119],["westword.com",119],["nhentai.net",120],["nowtv.com.tr",121],["caminspector.net",122],["camwhoreshd.com",122],["camgoddess.tv",122],["gay4porn.com",124],["mypornhere.com",124],["mediapason.it",125],["linkspaid.com",125],["tuotromedico.com",125],["neoteo.com",125],["phoneswiki.com",125],["celebmix.com",125],["myneobuxportal.com",125],["oyungibi.com",125],["25yearslatersite.com",125],["jeshoots.com",126],["techhx.com",126],["karanapk.com",126],["flashplayer.fullstacks.net",128],["cloudapps.herokuapp.com",128],["texteditor.nsspot.net",128],["youfiles.herokuapp.com",128],["temp-mail.org",129],["playembed.xyz",130],["javhdporn.net",130],["javstream.top",130],["comnuan.com",131],["veedi.com",132],["battleboats.io",132],["fruitlab.com",133],["haddoz.net",133],["garoetpos.com",133],["stiletv.it",134],["hqtv.biz",136],["liveuamap.com",137],["muvibg.com",137],["audycje.tokfm.pl",138],["hulu.com",[139,140,141]],["shush.se",142],["emurom.net",143],["allkpop.com",144],["azmath.info",145],["downfile.site",145],["downphanmem.com",145],["expertvn.com",145],["memangbau.com",145],["trangchu.news",145],["aztravels.net",145],["adfoc.us",145],["odiaalbumsong.com",145],["djrkmusicjaunpur.in",145],["cmsarkariyojana.com",145],["apkeclipse.com",145],["decidewhy.com",145],["insurelist.online",145],["recipenames.com",145],["filmfliqz.co",145],["morestate.pro",145],["puresports.pro",145],["funkeykida.com",145],["funkeypagali.com",145],["careersides.com",145],["nayisahara.com",145],["wikifilmia.com",145],["infinityskull.com",145],["viewmyknowledge.com",145],["iisfvirtual.in",145],["starxinvestor.com",145],["myprivatejobs.com",[145,274]],["wikitraveltips.com",[145,274]],["amritadrino.com",[145,274]],["sahlmarketing.net",145],["filmypoints.in",145],["fitnessholic.net",145],["bankshiksha.in",145],["earn.mpscstudyhub.com",145],["earn.quotesopia.com",145],["money.quotesopia.com",145],["best-mobilegames.com",145],["learn.moderngyan.com",145],["bharatsarkarijobalert.com",145],["techacode.com",145],["trickms.com",145],["sptfy.be",145],["mcafee-com.com",[145,273]],["pickcrackpasswords.blogspot.com",147],["kfrfansub.com",148],["thuglink.com",148],["voipreview.org",148],["hanime.tv",149],["pogo.com",150],["cloudvideo.tv",151],["legionjuegos.org",152],["legionpeliculas.org",152],["legionprogramas.org",152],["16honeys.com",153],["elespanol.com",154],["remodelista.com",155],["coolmathgames.com",[156,157,158,523]],["audiofanzine.com",159],["noweconomy.live",161],["howifx.com",[161,229]],["vavada5com.com",161],["hitokin.net",162],["developerinsider.co",163],["ilprimatonazionale.it",164],["hotabis.com",164],["root-nation.com",164],["italpress.com",164],["airsoftmilsimnews.com",164],["artribune.com",164],["thehindu.com",165],["cambro.tv",[166,167]],["nibelungen-kurier.de",168],["pianetamountainbike.it",170],["barchart.com",171],["modelisme.com",172],["parasportontario.ca",172],["prescottenews.com",172],["nrj-play.fr",173],["oeffentlicher-dienst.info",174],["hackingwithreact.com",175],["gutekueche.at",176],["eplfootballmatch.com",177],["peekvids.com",178],["playvids.com",178],["pornflip.com",178],["redensarten-index.de",179],["vw-page.com",180],["viz.com",[181,182]],["queenfaucet.website",183],["0rechner.de",184],["configspc.com",185],["xopenload.me",185],["uptobox.com",185],["uptostream.com",185],["onepiece-tube.com",186],["japgay.com",187],["mega-debrid.eu",188],["dreamdth.com",189],["diaridegirona.cat",191],["diariodeibiza.es",191],["diariodemallorca.es",191],["diarioinformacion.com",191],["eldia.es",191],["emporda.info",191],["farodevigo.es",191],["laopinioncoruna.es",191],["laopiniondemalaga.es",191],["laopiniondemurcia.es",191],["laopiniondezamora.es",191],["laprovincia.es",191],["levante-emv.com",191],["mallorcazeitung.es",191],["regio7.cat",191],["superdeporte.es",191],["playpaste.com",192],["player.rtl2.de",193],["freetutorialsus.com",194],["vidlii.com",[194,210]],["iammagnus.com",194],["dailyvideoreports.net",194],["unityassets4free.com",194],["cnbc.com",195],["puzzles.msn.com",196],["metro.us",196],["newsobserver.com",196],["arkadiumhosted.com",196],["firefaucet.win",198],["55k.io",199],["filelions.online",199],["stmruby.com",199],["direct-link.net",200],["direkt-wissen.com",200],["link-to.net",200],["fullhdxxx.com",202],["pornclassic.tube",203],["tubepornclassic.com",203],["etonline.com",204],["creatur.io",204],["drphil.com",204],["urbanmilwaukee.com",204],["ontiva.com",204],["hideandseek.world",204],["myabandonware.com",204],["kendam.com",204],["wttw.com",204],["synonyms.com",204],["definitions.net",204],["hostmath.com",204],["camvideoshub.com",204],["minhaconexao.com.br",204],["home-made-videos.com",206],["pxrnxx.xyz",206],["amateur-couples.com",206],["slutdump.com",206],["produsat.com",208],["12thman.com",210],["acusports.com",210],["atlantic10.com",210],["auburntigers.com",210],["baylorbears.com",210],["bceagles.com",210],["bgsufalcons.com",210],["big12sports.com",210],["bigten.org",210],["bradleybraves.com",210],["butlersports.com",210],["cmumavericks.com",210],["conferenceusa.com",210],["cyclones.com",210],["dartmouthsports.com",210],["daytonflyers.com",210],["dbupatriots.com",210],["dbusports.com",210],["denverpioneers.com",210],["fduknights.com",210],["fgcuathletics.com",210],["fightinghawks.com",210],["fightingillini.com",210],["floridagators.com",210],["friars.com",210],["friscofighters.com",210],["gamecocksonline.com",210],["goarmywestpoint.com",210],["gobison.com",210],["goblueraiders.com",210],["gobobcats.com",210],["gocards.com",210],["gocreighton.com",210],["godeacs.com",210],["goexplorers.com",210],["goetbutigers.com",210],["gofrogs.com",210],["gogriffs.com",210],["gogriz.com",210],["golobos.com",210],["gomarquette.com",210],["gopack.com",210],["gophersports.com",210],["goprincetontigers.com",210],["gopsusports.com",210],["goracers.com",210],["goshockers.com",210],["goterriers.com",210],["gotigersgo.com",210],["gousfbulls.com",210],["govandals.com",210],["gowyo.com",210],["goxavier.com",210],["gozags.com",210],["gozips.com",210],["griffinathletics.com",210],["guhoyas.com",210],["gwusports.com",210],["hailstate.com",210],["hamptonpirates.com",210],["hawaiiathletics.com",210],["hokiesports.com",210],["huskers.com",210],["icgaels.com",210],["iuhoosiers.com",210],["jsugamecocksports.com",210],["longbeachstate.com",210],["loyolaramblers.com",210],["lrtrojans.com",210],["lsusports.net",210],["morrisvillemustangs.com",210],["msuspartans.com",210],["muleriderathletics.com",210],["mutigers.com",210],["navysports.com",210],["nevadawolfpack.com",210],["niuhuskies.com",210],["nkunorse.com",210],["nuhuskies.com",210],["nusports.com",210],["okstate.com",210],["olemisssports.com",210],["omavs.com",210],["ovcsports.com",210],["owlsports.com",210],["purduesports.com",210],["redstormsports.com",210],["richmondspiders.com",210],["sfajacks.com",210],["shupirates.com",210],["siusalukis.com",210],["smcgaels.com",210],["smumustangs.com",210],["soconsports.com",210],["soonersports.com",210],["themw.com",210],["tulsahurricane.com",210],["txst.com",210],["txstatebobcats.com",210],["ubbulls.com",210],["ucfknights.com",210],["ucirvinesports.com",210],["uconnhuskies.com",210],["uhcougars.com",210],["uicflames.com",210],["umterps.com",210],["uncwsports.com",210],["unipanthers.com",210],["unlvrebels.com",210],["uoflsports.com",210],["usdtoreros.com",210],["utahstateaggies.com",210],["utepathletics.com",210],["utrockets.com",210],["uvmathletics.com",210],["uwbadgers.com",210],["villanova.com",210],["wkusports.com",210],["wmubroncos.com",210],["woffordterriers.com",210],["1pack1goal.com",210],["bcuathletics.com",210],["bubraves.com",210],["goblackbears.com",210],["golightsgo.com",210],["gomcpanthers.com",210],["goutsa.com",210],["mercerbears.com",210],["pirateblue.com",210],["pirateblue.net",210],["pirateblue.org",210],["quinnipiacbobcats.com",210],["towsontigers.com",210],["tribeathletics.com",210],["tribeclub.com",210],["utepminermaniacs.com",210],["utepminers.com",210],["wkutickets.com",210],["aopathletics.org",210],["atlantichockeyonline.com",210],["bigsouthnetwork.com",210],["bigsouthsports.com",210],["chawomenshockey.com",210],["dbupatriots.org",210],["drakerelays.org",210],["ecac.org",210],["ecacsports.com",210],["emueagles.com",210],["emugameday.com",210],["gculopes.com",210],["godrakebulldog.com",210],["godrakebulldogs.com",210],["godrakebulldogs.net",210],["goeags.com",210],["goislander.com",210],["goislanders.com",210],["gojacks.com",210],["gomacsports.com",210],["gseagles.com",210],["hubison.com",210],["iowaconference.com",210],["ksuowls.com",210],["lonestarconference.org",210],["mascac.org",210],["midwestconference.org",210],["mountaineast.org",210],["niu-pack.com",210],["nulakers.ca",210],["oswegolakers.com",210],["ovcdigitalnetwork.com",210],["pacersports.com",210],["rmacsports.org",210],["rollrivers.com",210],["samfordsports.com",210],["uncpbraves.com",210],["usfdons.com",210],["wiacsports.com",210],["alaskananooks.com",210],["broncathleticfund.com",210],["cameronaggies.com",210],["columbiacougars.com",210],["etownbluejays.com",210],["gobadgers.ca",210],["golancers.ca",210],["gometrostate.com",210],["gothunderbirds.ca",210],["kentstatesports.com",210],["lehighsports.com",210],["lopers.com",210],["lycoathletics.com",210],["lycomingathletics.com",210],["maraudersports.com",210],["mauiinvitational.com",210],["msumavericks.com",210],["nauathletics.com",210],["nueagles.com",210],["nwusports.com",210],["oceanbreezenyc.org",210],["patriotathleticfund.com",210],["pittband.com",210],["principiaathletics.com",210],["roadrunnersathletics.com",210],["sidearmsocial.com",210],["snhupenmen.com",210],["stablerarena.com",210],["stoutbluedevils.com",210],["uwlathletics.com",210],["yumacs.com",210],["collegefootballplayoff.com",210],["csurams.com",210],["cubuffs.com",210],["gobearcats.com",210],["gohuskies.com",210],["mgoblue.com",210],["osubeavers.com",210],["pittsburghpanthers.com",210],["rolltide.com",210],["texassports.com",210],["thesundevils.com",210],["uclabruins.com",210],["wvuathletics.com",210],["wvusports.com",210],["arizonawildcats.com",210],["calbears.com",210],["cuse.com",210],["georgiadogs.com",210],["goducks.com",210],["goheels.com",210],["gostanford.com",210],["insidekstatesports.com",210],["insidekstatesports.info",210],["insidekstatesports.net",210],["insidekstatesports.org",210],["k-stateathletics.com",210],["k-statefootball.net",210],["k-statefootball.org",210],["k-statesports.com",210],["k-statesports.net",210],["k-statesports.org",210],["k-statewomenshoops.com",210],["k-statewomenshoops.net",210],["k-statewomenshoops.org",210],["kstateathletics.com",210],["kstatefootball.net",210],["kstatefootball.org",210],["kstatesports.com",210],["kstatewomenshoops.com",210],["kstatewomenshoops.net",210],["kstatewomenshoops.org",210],["ksuathletics.com",210],["ksusports.com",210],["scarletknights.com",210],["showdownforrelief.com",210],["syracusecrunch.com",210],["texastech.com",210],["theacc.com",210],["ukathletics.com",210],["usctrojans.com",210],["utahutes.com",210],["utsports.com",210],["wsucougars.com",210],["tricksplit.io",210],["fangraphs.com",211],["4players.de",[212,315]],["buffed.de",212],["gamesaktuell.de",212],["gamezone.de",212],["pcgames.de",212],["videogameszone.de",212],["planetaminecraft.com",213],["cravesandflames.com",214],["codesnse.com",214],["link.paid4file.com",214],["flyad.vip",214],["lapresse.ca",215],["kolyoom.com",216],["ilovephd.com",216],["negumo.com",217],["games.wkb.jp",[218,219]],["channelmyanmar.org",[220,221]],["u-s-news.com",221],["fandom.com",[222,541,542]],["kenshi.fandom.com",223],["hausbau-forum.de",224],["homeairquality.org",224],["faucettronn.click",224],["ticketmaster.sg",224],["fake-it.ws",225],["laksa19.github.io",226],["1shortlink.com",227],["nesia.my.id",228],["makemoneywithurl.com",229],["junkyponk.com",229],["healthfirstweb.com",229],["vocalley.com",229],["yogablogfit.com",229],["en.financerites.com",229],["mythvista.com",229],["livenewsflix.com",229],["cureclues.com",229],["apekite.com",229],["blogtechh.com",229],["techbixby.com",229],["blogmyst.com",229],["resetoff.pl",230],["sexodi.com",230],["cdn77.org",231],["howtofixwindows.com",232],["3sexporn.com",233],["momxxxsex.com",233],["myfreevintageporn.com",233],["penisbuyutucum.net",233],["lightnovelworld.com",234],["ujszo.com",235],["newsmax.com",236],["bobs-tube.com",237],["nadidetarifler.com",238],["siz.tv",238],["suzylu.co.uk",[239,240]],["onworks.net",241],["yabiladi.com",241],["downloadsoft.net",242],["pixsera.net",243],["testlanguages.com",244],["newsinlevels.com",244],["videosinlevels.com",244],["cbs.com",245],["paramountplus.com",245],["buktube.com",246],["fullxh.com",246],["megaxh.com",246],["movingxh.world",246],["seexh.com",246],["taoxh.life",246],["unlockxh4.com",246],["xhaccess.com",246],["xhadult2.com",246],["xhadult3.com",246],["xhadult4.com",246],["xhadult5.com",246],["xhamster46.com",246],["xhbig.com",246],["xhday.com",246],["xhday1.com",246],["xhmoon5.com",246],["xhplanet1.com",246],["xhplanet2.com",246],["xhreal2.com",246],["xhreal3.com",246],["xhtab2.com",246],["xhtree.com",246],["xhvictory.com",246],["xhwebsite.com",246],["xhwebsite2.com",246],["xhwide1.com",246],["ultimate-guitar.com",247],["teachmemicro.com",248],["willcycle.com",248],["2ndrun.tv",248],["rackusreads.com",248],["xyzsports111.xyz",[249,250,251]],["xyzsports112.xyz",[249,250,251]],["xyzsports113.xyz",[249,250,251]],["xyzsports114.xyz",[249,250,251]],["xyzsprtsfrmr1.site",[249,250,251]],["xyzsprtsfrmr2.site",[249,250,251]],["claimbits.net",252],["sexyscope.net",253],["recherche-ebook.fr",255],["easymc.io",255],["zonebourse.com",256],["botrix.live",257],["pink-sluts.net",258],["madoohd.com",259],["andhrafriends.com",260],["benzinpreis.de",261],["defenseone.com",262],["govexec.com",262],["nextgov.com",262],["route-fifty.com",262],["sharing.wtf",263],["th.gl",[264,265]],["wetter3.de",266],["arahdrive.com",267],["aiimgvlog.fun",[267,273]],["esportivos.fun",268],["cosmonova-broadcast.tv",269],["soccerinhd.com",270],["techedubyte.com",270],["rock.porn",[271,272]],["sinonimos.de",273],["antonimos.de",273],["quesignifi.ca",273],["tiktokrealtime.com",273],["tiktokcounter.net",273],["tpayr.xyz",273],["poqzn.xyz",273],["ashrfd.xyz",273],["rezsx.xyz",273],["tryzt.xyz",273],["ashrff.xyz",273],["rezst.xyz",273],["dawenet.com",273],["erzar.xyz",273],["waezm.xyz",273],["waezg.xyz",273],["blackwoodacademy.org",273],["cryptednews.space",273],["vivuq.com",273],["swgop.com",273],["vbnmll.com",273],["telcoinfo.online",273],["dshytb.com",273],["btcbitco.in",[273,276]],["btcsatoshi.net",273],["cempakajaya.com",273],["crypto4yu.com",273],["readbitcoin.org",273],["wiour.com",273],["finish.addurl.biz",273],["exactpay.online",273],["kiddyearner.com",273],["luckydice.net",274],["adarima.org",274],["tieutietkiem.com",274],["weatherwx.com",274],["sattaguess.com",274],["winshell.de",274],["rosasidan.ws",274],["modmakers.xyz",274],["gamepure.in",274],["warrenrahul.in",274],["austiblox.net",274],["upiapi.in",274],["myownguess.in",274],["networkhint.com",274],["watchhentai.net",274],["thichcode.net",274],["texturecan.com",274],["tikmate.app",[274,495]],["4funbox.com",275],["nephobox.com",275],["1024tera.com",275],["blog.cryptowidgets.net",276],["blog.insurancegold.in",276],["blog.wiki-topia.com",276],["blog.coinsvalue.net",276],["blog.cookinguide.net",276],["blog.freeoseocheck.com",276],["blog24.me",276],["bildirim.link",278],["appsbull.com",279],["diudemy.com",279],["maqal360.com",279],["lifesurance.info",280],["infokeeda.xyz",281],["webzeni.com",281],["arcai.com",282],["my-code4you.blogspot.com",283],["flickr.com",284],["firefile.cc",285],["pestleanalysis.com",285],["kochamjp.pl",285],["tutorialforlinux.com",285],["whatsaero.com",285],["animeblkom.net",[285,301]],["blkom.com",285],["globes.co.il",[286,287]],["jardiner-malin.fr",288],["tw-calc.net",289],["ohmybrush.com",290],["talkceltic.net",291],["mentalfloss.com",292],["uprafa.com",293],["cube365.net",294],["nightfallnews.com",[295,296]],["wwwfotografgotlin.blogspot.com",297],["freelistenonline.com",297],["badassdownloader.com",298],["quickporn.net",299],["yellowbridge.com",300],["aosmark.com",302],["atozmath.com",[304,305,306,307,308,309,310]],["newyorker.com",311],["brighteon.com",312],["more.tv",313],["video1tube.com",314],["alohatube.xyz",314],["fshost.me",316],["link.cgtips.org",317],["hentaicloud.com",318],["netfapx.com",320],["paperzonevn.com",321],["hentaienglish.com",322],["hentaiporno.xxx",322],["venge.io",[323,324]],["btcbux.io",325],["its.porn",[326,327]],["atv.at",328],["kusonime.com",[329,330]],["jetpunk.com",332],["imgur.com",333],["hentai-party.com",334],["hentaicomics.pro",334],["xxx-comics.pro",334],["genshinimpactcalculator.com",337],["axenthost.com",337],["mysexgames.com",338],["embed.indavideo.hu",341],["coinurl.net",[342,343]],["gdr-online.com",344],["mmm.dk",345],["iqiyi.com",[346,347,489]],["m.iqiyi.com",348],["japopav.tv",349],["lvturbo.com",349],["nbcolympics.com",350],["apkhex.com",351],["indiansexstories2.net",352],["issstories.xyz",352],["1340kbbr.com",353],["gorgeradio.com",353],["kduk.com",353],["kedoam.com",353],["kejoam.com",353],["kelaam.com",353],["khsn1230.com",353],["kjmx.rocks",353],["kloo.com",353],["klooam.com",353],["klykradio.com",353],["kmed.com",353],["kmnt.com",353],["kool991.com",353],["kpnw.com",353],["kppk983.com",353],["krktcountry.com",353],["ktee.com",353],["kwro.com",353],["kxbxfm.com",353],["thevalley.fm",353],["quizlet.com",354],["dsocker1234.blogspot.com",355],["blick.ch",356],["mgnet.xyz",357],["designtagebuch.de",358],["pixroute.com",359],["uploady.io",360],["calculator-online.net",361],["porngames.club",362],["sexgames.xxx",362],["111.90.159.132",363],["battleplan.news",363],["mobile-tracker-free.com",364],["pfps.gg",365],["ac-illust.com",[366,367]],["photo-ac.com",[366,367]],["vlxxs.net",368],["rapelust.com",368],["vtube.to",368],["vtplay.net",368],["desitelugusex.com",368],["xvideos-downloader.net",368],["xxxvideotube.net",368],["sdefx.cloud",368],["nozomi.la",368],["moviesonlinefree.net",368],["social-unlock.com",369],["ninja.io",370],["sourceforge.net",371],["samfirms.com",372],["banned.video",373],["madmaxworld.tv",373],["huffpost.com",374],["ingles.com",375],["spanishdict.com",375],["surfline.com",[376,377]],["play.tv3.ee",378],["play.tv3.lt",378],["play.tv3.lv",378],["tv3play.skaties.lv",378],["trendyoum.com",379],["bulbagarden.net",380],["moviestars.to",381],["hollywoodlife.com",382],["mat6tube.com",383],["textstudio.co",384],["newtumbl.com",385],["nevcoins.club",387],["mail.com",388],["oggi.it",[391,392]],["manoramamax.com",391],["video.gazzetta.it",[391,392]],["mangakita.id",393],["mangakita.net",393],["poscishd.online",394],["avpgalaxy.net",395],["mhma12.tech",396],["panda-novel.com",397],["zebranovel.com",397],["lightsnovel.com",397],["eaglesnovel.com",397],["pandasnovel.com",397],["zadfaucet.com",398],["ewrc-results.com",399],["kizi.com",400],["cyberscoop.com",401],["fedscoop.com",401],["canale.live",402],["mafiatown.pl",[403,404]],["jeep-cj.com",405],["sponsorhunter.com",406],["cloudcomputingtopics.net",407],["likecs.com",408],["tiscali.it",409],["linkspy.cc",410],["tutelehd3.xyz",411],["dirty.pink",[412,413,414]],["adshnk.com",415],["chattanoogan.com",416],["adsy.pw",417],["playstore.pw",417],["socialmediagirls.com",418],["windowspro.de",419],["snapinsta.app",420],["tvtv.ca",421],["tvtv.us",421],["mydaddy.cc",422],["roadtrippin.fr",423],["redketchup.io",[424,425,426]],["anyporn.com",[427,443]],["bravoporn.com",427],["bravoteens.com",427],["crocotube.com",427],["hellmoms.com",427],["hellporno.com",427],["sex3.com",427],["tubewolf.com",427],["xbabe.com",427],["xcum.com",427],["zedporn.com",427],["imagetotext.info",428],["infokik.com",429],["freepik.com",430],["ddwloclawek.pl",[431,432]],["deezer.com",433],["my-subs.co",434],["plaion.com",435],["rapid-cloud.co",436],["slideshare.net",[437,438]],["ustreasuryyieldcurve.com",439],["businesssoftwarehere.com",440],["goo.st",440],["freevpshere.com",440],["softwaresolutionshere.com",440],["staige.tv",444],["in-jpn.com",445],["oninet.ne.jp",445],["xth.jp",445],["androidadult.com",446],["streamvid.net",447],["watchtv24.com",448],["cellmapper.net",449],["medscape.com",450],["newscon.org",[451,452]],["arkadium.com",453],["wheelofgold.com",454],["ozulmanga.com",454],["bembed.net",455],["embedv.net",455],["fslinks.org",455],["listeamed.net",455],["v6embed.xyz",455],["vgplayer.xyz",455],["vid-guard.com",455],["app.blubank.com",456],["mobileweb.bankmellat.ir",456],["sportdeutschland.tv",457],["kcra.com",457],["wcvb.com",457],["ccthesims.com",462],["chromeready.com",462],["coursedrive.org",462],["dtbps3games.com",462],["illustratemagazine.com",462],["uknip.co.uk",462],["vod.pl",463],["megadrive-emulator.com",464],["animesaga.in",467],["moviesapi.club",467],["bestx.stream",467],["watchx.top",467],["digimanie.cz",468],["svethardware.cz",468],["srvy.ninja",469],["drawer-opportunity-i-243.site",470],["tchatche.com",471],["edmdls.com",472],["freshremix.net",472],["scenedl.org",472],["trakt.tv",[473,474,475]],["shroomers.app",476],["classicalradio.com",[477,478,479]],["di.fm",[477,478,479]],["jazzradio.com",[477,478,479]],["radiotunes.com",[477,478,479]],["rockradio.com",[477,478,479]],["zenradio.com",[477,478,479]],["pc-builds.com",480],["qtoptens.com",480],["reuters.com",480],["today.com",480],["videogamer.com",480],["wrestlinginc.com",480],["gbatemp.net",480],["movie-th.tv",481],["iwanttfc.com",482],["nutraingredients-asia.com",483],["nutraingredients-latam.com",483],["nutraingredients-usa.com",483],["nutraingredients.com",483],["livesportsclub.me",484],["rogstream.fun",484],["ozulscansen.com",485],["fitnessbr.click",486],["minhareceita.xyz",486],["doomied.monster",487],["lookmovie2.to",487],["royalroad.com",488],["biletomat.pl",490],["hextank.io",[491,492]],["filmizlehdfilm.com",[493,494]],["sagewater.com",496],["redlion.net",496],["satdl.com",497],["veev.to",498],["vidstreaming.xyz",499],["everand.com",500],["myradioonline.pl",501],["tacobell.com",503],["zefoy.com",504],["natgeotv.com",506],["br.de",507],["indeed.com",508],["pasteboard.co",509],["clickhole.com",510],["deadspin.com",510],["gizmodo.com",510],["jalopnik.com",510],["jezebel.com",510],["kotaku.com",510],["lifehacker.com",510],["splinternews.com",510],["theinventory.com",510],["theonion.com",510],["theroot.com",510],["thetakeout.com",510],["pewresearch.org",510],["los40.com",[511,512]],["as.com",512],["telegraph.co.uk",[513,514]],["poweredbycovermore.com",[513,563]],["lumens.com",[513,563]],["verizon.com",515],["humanbenchmark.com",516],["politico.com",517],["officedepot.co.cr",[518,519]],["usnews.com",522],["factable.com",524],["zee5.com",525],["gala.fr",526],["geo.fr",526],["voici.fr",526],["gloucestershirelive.co.uk",527],["arsiv.mackolik.com",528],["jacksonguitars.com",529],["scandichotels.com",530],["stylist.co.uk",531],["nettiauto.com",532],["thaiairways.com",[533,534]],["cerbahealthcare.it",[535,536]],["futura-sciences.com",[535,553]],["tiendaenlinea.claro.com.ni",[537,538]],["tieba.baidu.com",539],["linktr.ee",540],["grasshopper.com",[543,544]],["epson.com.cn",[545,546,547,548]],["oe24.at",[549,550]],["szbz.de",549],["platform.autods.com",[551,552]],["wikihow.com",554],["citibank.com.sg",555],["uol.com.br",[556,557,558,559]],["gazzetta.gr",560],["digicol.dpm.org.cn",[561,562]],["virginmediatelevision.ie",564],["larazon.es",[565,566]],["waitrosecellar.com",[567,568,569]],["sharpen-free-design-generator.netlify.app",[571,572]],["help.cashctrl.com",[573,574]],["commande.rhinov.pro",[575,576]],["ecom.wixapps.net",[575,576]],["tipranks.com",[577,578]],["iceland.co.uk",[579,580,581]],["socket.pearsoned.com",582],["tntdrama.com",[583,584]],["mobile.de",[585,586]],["ioe.vn",[587,588]],["geiriadur.ac.uk",[587,591]],["bikeportland.org",[589,590]],["biologianet.com",[557,558,559]],["10play.com.au",[592,593]],["sunshine-live.de",[594,595]],["whatismyip.com",[596,597]],["myfitnesspal.com",598],["netoff.co.jp",[599,600]],["clickjogos.com.br",603],["bristan.com",[604,605]],["zillow.com",606],["share.hntv.tv",[607,608,609,610]],["optimum.net",[611,612]],["pvrcinemas.com",[613,614]],["financemonk.net",615],["japscan.lol",616],["weather.com",[617,618]],["ubereats.com",[617,618]]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,51]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,204]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,38,90,91,92]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,190]],["upornia",[29,30]],["fmovies",51],["xtits",[55,124]],["streamwish",[57,58]],["pouvideo",65],["povvideo",65],["povw1deo",65],["povwideo",65],["powv1deo",65],["powvibeo",65],["powvideo",65],["powvldeo",65],["acortalo",[70,71,72,73]],["acortar",[70,71,72,73]],["plyjam",[74,75]],["fxporn69",80],["vipbox",81],["viprow",81],["desbloqueador",86],["xberuang",88],["teknorizen",88],["subtorrents",95],["subtorrents1",95],["newpelis",95],["pelix",95],["allcalidad",95],["infomaniakos",95],["filecrypt",99],["tornadomovies",105],["sexwebvideo",106],["mangovideo",106],["icdrama",111],["mangasail",111],["file4go",113],["asianclub",130],["anitube",133],["mixdrop",135],["azsoft",145],["uploadev",160],["ver-pelis-online",169],["ancient-origins",177],["spankbang",197],["lookcam",204],["lootlinks",204],["dpstream",207],["bluemediafiles",209],["docer",230],["hamsterix",246],["xhamster",246],["xhamster1",246],["xhamster10",246],["xhamster11",246],["xhamster12",246],["xhamster13",246],["xhamster14",246],["xhamster15",246],["xhamster16",246],["xhamster17",246],["xhamster18",246],["xhamster19",246],["xhamster20",246],["xhamster2",246],["xhamster3",246],["xhamster4",246],["xhamster42",246],["xhamster5",246],["xhamster7",246],["xhamster8",246],["kickassanime",254],["doomovie-hd",259],["terabox",275],["ctrlv",303],["123movieshd",331],["uproxy",335],["animesa",336],["cinecalidad",[339,340]],["dvdplay",368],["apkmaven",386],["gmx",389],["gamereactor",442],["vembed",455],["empire-stream",[458,459,460]],["empire-streaming",[458,459,460]],["tvhay",[465,466]],["lookmovie",487],["filmizletv",[493,494]],["www.google",502],["officedepot",[520,521]],["foundit",[601,602]],["dropgalaxy",615]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[487]]]);

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
        let normalValue = validateConstantFn(trusted, rawValue);
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
            'loading': 1,
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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

function validateConstantFn(trusted, raw) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
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
try { hnParts.push(...document.location.hostname.split('.')); }
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
