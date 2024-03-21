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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["odabd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["Object.prototype.isAdblock","undefined"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["isAdClickDone","true"],["waitTime441","0"],["waitTime","0"],["showadas","true"],["iktimer","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["findCMP","noopFunc"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["supportedBrowsers",""],["ytInitialPlayerResponse.playerConfig.ssapConfig","undefined"],["ytInitialPlayerResponse.streamingData.serverAbrStreamingUrl","undefined"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3,585,586]],["music.youtube.com",[0,1,2,3,585,586]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,585,586]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,560]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watson.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.com",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,252]],["gadgets.es",[12,252]],["amateurporn.co",[12,111]],["wiwo.de",13],["masteranime.tv",14],["fullxh.com",15],["megaxh.com",15],["movingxh.world",15],["taoxh.life",15],["unlockxh4.com",15],["xhadult2.com",15],["xhadult3.com",15],["xhadult4.com",15],["xhadult5.com",15],["xhamster46.com",15],["xhday.com",15],["xhday1.com",15],["xhmoon5.com",15],["xhplanet1.com",15],["xhplanet2.com",15],["xhreal2.com",15],["xhreal3.com",15],["xhtab2.com",15],["xhtree.com",15],["xhvictory.com",15],["xhwebsite.com",15],["xhwebsite2.com",15],["xhwide1.com",15],["alphaporno.com",[18,424]],["porngem.com",18],["uploadbank.com",18],["shortit.pw",[18,114]],["familyporn.tv",18],["cloudemb.com",[18,343]],["sbplay1.com",18],["id45.cyou",18],["85tube.com",[18,95]],["k1nk.co",18],["watchasians.cc",18],["imsdb.pw",[18,27]],["soltoshindo.com",18],["techtimes.com",19],["dronedj.com",21],["freeplayervideo.com",22],["nazarickol.com",22],["player-cdn.com",22],["apinchcaseation.com",22],["bigclatterhomesguideservice.com",22],["bradleyviewdoctor.com",22],["denisegrowthwide.com",22],["edwardarriveoften.com",22],["housecardsummerbutton.com",22],["jamiesamewalk.com",22],["jayservicestuff.com",22],["johntryopen.com",22],["kennethofficialitem.com",22],["lukecomparetwo.com",22],["markstyleall.com",22],["morganoperationface.com",22],["nectareousoverelate.com",22],["paulkitchendark.com",22],["sandrataxeight.com",22],["seanshowcould.com",22],["sharonwhiledemocratic.com",22],["stevenimaginelittle.com",22],["strawberriesporail.com",22],["timberwoodanotia.com",22],["tinycat-voe-fashion.com",22],["troyyourlead.com",22],["uptodatefinishconference.com",22],["uptodatefinishconferenceroom.com",22],["vincentincludesuccessful.com",22],["voe.sx",22],["motphimtv.com",22],["rabbitstream.net",22],["streamlare.com",22],["projectfreetv.one",22],["nolive.me",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",27],["player.tabooporns.com",27],["x69.ovh",27],["wiztube.xyz",27],["multiup.us",27],["rpdrlatino.live",27],["peliculas8k.com",[27,28]],["video.q34r.org",27],["69x.online",27],["czxxx.org",27],["vvtplayer.online",27],["netu.ac",27],["dirtyvideo.fun",28],["adbull.org",29],["mitly.us",29],["linkrex.net",29],["linx.cc",29],["oke.io",29],["dz4link.com",29],["linclik.com",29],["shrt10.com",29],["loptelink.com",29],["cut-fly.com",29],["linkfinal.com",29],["payskip.org",29],["cutpaid.com",29],["forexmab.com",29],["linkjust.com",29],["linkszia.co",29],["leechpremium.link",29],["icutlink.com",[29,132]],["stfly.me",29],["oncehelp.com",29],["rgl.vn",29],["reqlinks.net",29],["megaurl.in",29],["megafly.in",29],["bitlk.com",29],["qlinks.eu",29],["link.3dmili.com",29],["short-fly.com",29],["foxseotools.com",29],["pngit.live",29],["link.turkdown.com",29],["urlty.com",29],["7r6.com",29],["oko.sh",29],["ckk.ai",29],["fc.lc",29],["fstore.biz",29],["cuts-url.com",29],["eio.io",29],["exe.app",29],["exee.io",29],["exey.io",29],["skincarie.com",29],["exeo.app",29],["coinlyhub.com",[29,210]],["adsafelink.com",29],["aii.sh",29],["cybertechng.com",[29,219]],["owllink.net",29],["cutdl.xyz",29],["iir.ai",29],["shorteet.com",[29,238]],["sekilastekno.com",29],["smoner.com",29],["gplinks.co",29],["xpshort.com",29],["upshrink.com",29],["enit.in",[29,234]],["ez4short.com",29],["easysky.in",29],["veganab.co",29],["adrinolinks.in",29],["go.gyanitheme.com",29],["go.theforyou.in",29],["go.hipsonyc.com",29],["birdurls.com",29],["try2link.com",29],["jameeltips.us",29],["gainl.ink",29],["promo-visits.site",29],["satoshi-win.xyz",[29,266]],["shorterall.com",29],["encurtandourl.com",29],["forextrader.site",29],["postazap.com",29],["tinys.click",[29,219]],["cpm.icu",29],["easycut.io",29],["panyshort.link",29],["enagato.com",29],["pandaznetwork.com",29],["tii.la",29],["loan2host.com",29],["tei.ai",29],["tii.ai",29],["recipestutorials.com",29],["droplink.co",29],["oii.io",29],["du-link.in",29],["atglinks.com",29],["linksly.co",29],["pkr.pw",29],["imagenesderopaparaperros.com",29],["shortenbuddy.com",29],["gibit.xyz",29],["apksvip.com",29],["4cash.me",29],["namaidani.com",29],["teknomuda.com",29],["illink.net",29],["miuiku.com",29],["yourtechnology.online",29],["savelink.site",29],["apkshrt.com",29],["srts.me",29],["kutmoney.com",29],["kutt.io",29],["sanoybonito.club",29],["samaa-pro.com",29],["miklpro.com",29],["modapk.link",29],["shrinkforearn.in",29],["techyuth.xyz",29],["1shorten.com",29],["ccurl.net",29],["st23q.com",29],["beautyram.info",29],["viraloc.com",29],["kiiw.icu",29],["galaxy-link.space",29],["linkpoi.me",29],["usdshort.com",29],["bitcoinly.in",29],["menjelajahi.com",29],["pewgame.com",29],["yxoshort.com",29],["1link.vip",29],["haonguyen.top",29],["claimfreebits.com",29],["crazyblog.in",29],["gtlink.co",29],["link.tokenoto.com",29],["cutearn.net",29],["rshrt.com",29],["short.palmeratv.com",29],["filezipa.com",29],["dz-linkk.com",29],["theblissempire.com",29],["finanzas-vida.com",29],["adurly.cc",29],["pix4link.com",29],["paid4.link",29],["link.asiaon.top",29],["go.gets4link.com",29],["download.sharenulled.net",29],["beingtek.com",29],["shorturl.unityassets4free.com",29],["disheye.com",29],["techymedies.com",29],["techysuccess.com",29],["za.gl",[29,151]],["download.baominh.tech",29],["bblink.com",29],["linkbr.xyz",29],["myad.biz",29],["swzz.xyz",29],["vevioz.com",29],["charexempire.com",29],["clk.asia",29],["egfly.xyz",29],["linka.click",29],["sturls.com",29],["myshrinker.com",29],["go.adinsurance.xyz",29],["dash-free.com",[29,219]],["snowurl.com",[29,219]],["netfile.cc",29],["link.insurance-space.xyz",29],["link.insurglobal.xyz",29],["theconomy.me",29],["rajsayt.xyz",29],["rocklink.in",29],["adinsurance.xyz",29],["insurglobal.xyz",29],["techgeek.digital",29],["download3s.net",29],["shortx.net",29],["musicc.xyz",29],["shortawy.com",29],["tlin.me",29],["apprepack.com",29],["sh2rt.com",29],["up-load.one",29],["zuba.link",29],["linksfy.co",29],["news.speedynews.xyz",29],["golink.xaydungplus.com",29],["bestcash2020.com",29],["hoxiin.com",29],["technemo.xyz",29],["go.linkbnao.com",29],["link-yz.com",29],["paylinnk.com",29],["thizissam.in",29],["ier.ai",29],["bloggertheme.xyz",29],["adslink.pw",29],["novelssites.com",29],["links.medipost.org",29],["faucetcrypto.net",29],["short.freeltc.top",29],["trxking.xyz",29],["weadown.com",29],["m.bloggingguidance.com",29],["blog.onroid.com",29],["cutty.app",29],["link.codevn.net",29],["upfilesurls.com",29],["shareus.site",29],["link4rev.site",29],["bloginguru.xyz",29],["celinks.net",29],["c2g.at",29],["shortzu.icu",29],["bitcosite.com",[29,438]],["cryptosh.pro",29],["sigmalinks.in",29],["link68.net",29],["traffic123.net",29],["windowslite.net",[29,219]],["coinsl.click",29],["exalink.fun",29],["exego.app",[29,264]],["viewfr.com",29],["cl1ca.com",29],["4br.me",29],["fir3.net",29],["kiddyshort.com",29],["watchmygf.me",[30,57]],["camwhorez.tv",[30,43,94,95]],["fpo.xxx",[30,59]],["sexemix.com",30],["heavyfetish.com",[30,498]],["you-porn.com",32],["youporngay.com",32],["youpornru.com",32],["9908ww.com",32],["adelaidepawnbroker.com",32],["bztube.com",32],["hotovs.com",32],["insuredhome.org",32],["nudegista.com",32],["pornluck.com",32],["vidd.se",32],["pornhub.com",32],["pornerbros.com",33],["freep.com",33],["porn.com",36],["tune.pk",37],["noticias.gospelmais.com.br",38],["techperiod.com",38],["jacquieetmicheltv.net",[39,40]],["illicoporno.com",39],["lavoixdux.com",39],["tonpornodujour.com",39],["jacquieetmichel.net",39],["swame.com",39],["vosfemmes.com",39],["voyeurfrance.net",39],["viki.com",[41,42]],["sleazyneasy.com",[43,44,45]],["smutr.com",[43,206]],["yourporngod.com",[43,44]],["javbangers.com",[43,313]],["camfox.com",43],["camthots.tv",[43,127]],["shegotass.info",43],["amateur8.com",43],["bigtitslust.com",43],["ebony8.com",43],["freeporn8.com",43],["lesbian8.com",43],["maturetubehere.com",43],["sortporn.com",43],["webcamvau.com",43],["motherporno.com",[43,44,59,129]],["tktube.com",43],["theporngod.com",[43,44]],["pornsocket.com",46],["luxuretv.com",47],["porndig.com",[48,49]],["webcheats.com.br",50],["ceesty.com",[51,52]],["gestyy.com",[51,52]],["corneey.com",52],["destyy.com",52],["festyy.com",52],["sh.st",52],["angrybirdsnest.com",53],["zrozz.com",53],["clix4btc.com",53],["katfile.com",53],["4tests.com",53],["planet-explorers-isos.com",53],["business-standard.com",53],["goltelevision.com",53],["news-und-nachrichten.de",53],["laradiobbs.net",53],["urlaubspartner.net",53],["produktion.de",53],["cinemaxxl.de",53],["bladesalvador.com",53],["tempr.email",53],["trust.zone",53],["cshort.org",53],["friendproject.net",53],["covrhub.com",53],["planetsuzy.org",54],["empflix.com",55],["filespace.com",56],["transparentcalifornia.com",57],["deepbrid.com",58],["submityourflicks.com",59],["3movs.com",59],["cambay.tv",[59,111,127,129]],["bravoerotica.net",[59,129]],["youx.xxx",59],["camclips.tv",[59,206]],["camflow.tv",[59,111,129,172,242]],["camhoes.tv",[59,111,127,129,172,242]],["xmegadrive.com",59],["xxxymovies.com",59],["xxxshake.com",59],["gayck.com",59],["xhand.com",[59,129]],["analdin.com",[59,129]],["webnovel.com",60],["videosgay.me",[61,62]],["wishfast.top",62],["schwaebische.de",63],["mercurynews.com",64],["chicoer.com",64],["dailybreeze.com",64],["dailybulletin.com",64],["dailynews.com",64],["delcotimes.com",64],["eastbaytimes.com",64],["macombdaily.com",64],["ocregister.com",64],["pasadenastarnews.com",64],["pe.com",64],["presstelegram.com",64],["redlandsdailyfacts.com",64],["reviewjournal.com",64],["santacruzsentinel.com",64],["saratogian.com",64],["sentinelandenterprise.com",64],["sgvtribune.com",64],["tampabay.com",64],["times-standard.com",64],["theoaklandpress.com",64],["trentonian.com",64],["twincities.com",64],["whittierdailynews.com",64],["bostonherald.com",64],["dailycamera.com",64],["sbsun.com",64],["dailydemocrat.com",64],["montereyherald.com",64],["orovillemr.com",64],["record-bee.com",64],["redbluffdailynews.com",64],["reporterherald.com",64],["thereporter.com",64],["timescall.com",64],["timesheraldonline.com",64],["ukiahdailyjournal.com",64],["dailylocal.com",64],["8tracks.com",65],["revealname.com",66],["fcportables.com",[67,68]],["golfchannel.com",70],["telemundodeportes.com",70],["stream.nbcsports.com",70],["gamcore.com",71],["porcore.com",71],["69games.xxx",71],["javmix.app",71],["tecknity.com",72],["haaretz.co.il",73],["haaretz.com",73],["hungama.com",73],["a-o.ninja",73],["anime-odcinki.pl",73],["kumpulmanga.org",73],["shortgoo.blogspot.com",73],["tonanmedia.my.id",[73,452]],["yurasu.xyz",73],["isekaipalace.com",73],["megadescarga.net",[74,75,76,77]],["megadescargas.net",[74,75,76,77]],["vikistream.com",78],["eplayer.click",[78,79]],["mega4upload.com",[79,85]],["ennovelas.com",[79,85]],["n-tv.de",80],["brigitte.de",81],["stern.de",81],["foxsports.com.au",82],["canberratimes.com.au",82],["thesimsresource.com",83],["bdnewszh.com",85],["streamservicehd.click",85],["timeforbitco.in",86],["worldofbitco.in",[86,97]],["weatherx.co.in",[86,97]],["getyourbitco.in",86],["sunbtc.space",86],["ctrl.blog",87],["sportlife.es",88],["finofilipino.org",89],["acortarm.xyz",90],["acortame.xyz",90],["speedtest.net",91],["mysflink.blogspot.com",92],["assia.tv",93],["assia4.com",93],["assia24.com",93],["cwtvembeds.com",[95,128]],["camlovers.tv",95],["porntn.com",95],["pornissimo.org",95],["sexcams-24.com",[95,111]],["watchporn.to",[95,111]],["camwhorez.video",95],["footstockings.com",[96,111]],["sbs.com.au",[98,99]],["ojogos.com.br",101],["powforums.com",102],["supforums.com",102],["studybullet.com",102],["usgamer.net",103],["recordonline.com",103],["freebitcoin.win",105],["e-monsite.com",105],["coindice.win",105],["sport-tv-guide.live",106],["temp-mails.com",107],["freiepresse.de",108],["investing.com",109],["camhub.cc",111],["love4porn.com",111],["thotvids.com",111],["watchmdh.to",111],["celebwhore.com",111],["cluset.com",111],["4kporn.xxx",111],["xhomealone.com",111],["lusttaboo.com",[111,385]],["hentai-moon.com",111],["mp3fiber.com",112],["suedkurier.de",113],["anysex.com",115],["vlist.se",116],["pornve.com",117],["coolrom.com.au",118],["pornohirsch.net",119],["marie-claire.es",120],["gamezhero.com",120],["flashgirlgames.com",120],["onlinesudoku.games",120],["mpg.football",120],["sssam.com",120],["globalnews.ca",121],["drinksmixer.com",122],["leitesculinaria.com",122],["fupa.net",123],["browardpalmbeach.com",124],["dallasobserver.com",124],["houstonpress.com",124],["miaminewtimes.com",124],["phoenixnewtimes.com",124],["westword.com",124],["nhentai.net",125],["nowtv.com.tr",126],["caminspector.net",127],["camwhoreshd.com",127],["camgoddess.tv",127],["gay4porn.com",129],["mypornhere.com",129],["mediapason.it",130],["linkspaid.com",130],["tuotromedico.com",130],["neoteo.com",130],["phoneswiki.com",130],["celebmix.com",130],["myneobuxportal.com",130],["oyungibi.com",130],["25yearslatersite.com",130],["jeshoots.com",131],["techhx.com",131],["karanapk.com",131],["flashplayer.fullstacks.net",133],["cloudapps.herokuapp.com",133],["youfiles.herokuapp.com",133],["temp-mail.org",134],["playembed.xyz",135],["javhdporn.net",135],["javstream.top",135],["comnuan.com",136],["veedi.com",137],["battleboats.io",137],["fruitlab.com",138],["haddoz.net",138],["garoetpos.com",138],["stiletv.it",139],["hqtv.biz",141],["liveuamap.com",142],["muvibg.com",142],["audycje.tokfm.pl",143],["hulu.com",[144,145,146]],["shush.se",147],["emurom.net",148],["allkpop.com",149],["azmath.info",150],["downfile.site",150],["downphanmem.com",150],["expertvn.com",150],["memangbau.com",150],["trangchu.news",150],["aztravels.net",150],["adfoc.us",150],["anumin.com",150],["awolio.com",150],["cgbsesupport.com",150],["eternalcbse.in",150],["foreverhealth.in",150],["jobwaala.in",150],["kaisekareblog.com",150],["learnwithsaif.in",150],["minijankari.com",150],["news36tech.com",150],["newzwala.co.in",150],["nhmgujarat.in",150],["odiamusicsong.com",150],["smartsetkari.in",150],["sugargliderfaqs.com",150],["theringtonesworld.in",150],["w3hindi.in",150],["picassoappk.com",150],["geniuseducares.com",150],["pmyojanasarkari.in",150],["netflixvip.in",150],["mghindinews.in",150],["gentletrail.in",150],["ndlifestylego.com",150],["raidersixgameapk.com",150],["potter-world.com",150],["sarkariexam365.com",150],["digitalfacts4u.com",150],["odiasongsworld.com",150],["friv4school.in",150],["instander.me",150],["jankari4u.com",150],["trancebazar.com",150],["mdsuuniversity.org",150],["odishadjs.link",150],["pagalmp3status.com",150],["iisfvirtual.in",150],["starxinvestor.com",150],["myprivatejobs.com",[150,262]],["wikitraveltips.com",[150,262]],["amritadrino.com",[150,262]],["sahlmarketing.net",150],["filmypoints.in",150],["quotesopia.com",150],["techacode.com",150],["trickms.com",150],["sptfy.be",150],["mcafee-com.com",[150,264]],["pickcrackpasswords.blogspot.com",152],["kfrfansub.com",153],["thuglink.com",153],["voipreview.org",153],["hanime.tv",154],["pogo.com",155],["cloudvideo.tv",156],["legionjuegos.org",157],["legionpeliculas.org",157],["legionprogramas.org",157],["16honeys.com",158],["elespanol.com",159],["remodelista.com",160],["coolmathgames.com",[161,162,163,515]],["audiofanzine.com",164],["noweconomy.live",166],["howifx.com",[166,234]],["vavada5com.com",166],["hitokin.net",167],["developerinsider.co",168],["ilprimatonazionale.it",169],["hotabis.com",169],["root-nation.com",169],["italpress.com",169],["airsoftmilsimnews.com",169],["artribune.com",169],["thehindu.com",170],["cambro.tv",[171,172]],["nibelungen-kurier.de",173],["pianetamountainbike.it",175],["barchart.com",176],["modelisme.com",177],["parasportontario.ca",177],["prescottenews.com",177],["nrj-play.fr",178],["oeffentlicher-dienst.info",179],["hackingwithreact.com",180],["gutekueche.at",181],["eplfootballmatch.com",182],["peekvids.com",183],["playvids.com",183],["pornflip.com",183],["redensarten-index.de",184],["vw-page.com",185],["viz.com",[186,187]],["queenfaucet.website",188],["0rechner.de",189],["configspc.com",190],["xopenload.me",190],["uptobox.com",190],["uptostream.com",190],["onepiece-tube.com",191],["japgay.com",192],["mega-debrid.eu",193],["dreamdth.com",194],["diaridegirona.cat",196],["diariodeibiza.es",196],["diariodemallorca.es",196],["diarioinformacion.com",196],["eldia.es",196],["emporda.info",196],["farodevigo.es",196],["laopinioncoruna.es",196],["laopiniondemalaga.es",196],["laopiniondemurcia.es",196],["laopiniondezamora.es",196],["laprovincia.es",196],["levante-emv.com",196],["mallorcazeitung.es",196],["regio7.cat",196],["superdeporte.es",196],["playpaste.com",197],["player.rtl2.de",198],["freetutorialsus.com",199],["vidlii.com",[199,215]],["iammagnus.com",199],["dailyvideoreports.net",199],["unityassets4free.com",199],["cnbc.com",200],["puzzles.msn.com",201],["metro.us",201],["newsobserver.com",201],["arkadiumhosted.com",201],["firefaucet.win",203],["55k.io",204],["filelions.online",204],["stmruby.com",204],["direct-link.net",205],["direkt-wissen.com",205],["link-to.net",205],["fullhdxxx.com",207],["pornclassic.tube",208],["tubepornclassic.com",208],["etonline.com",209],["creatur.io",209],["drphil.com",209],["urbanmilwaukee.com",209],["ontiva.com",209],["hideandseek.world",209],["myabandonware.com",209],["kendam.com",209],["wttw.com",209],["synonyms.com",209],["definitions.net",209],["hostmath.com",209],["camvideoshub.com",209],["minhaconexao.com.br",209],["home-made-videos.com",211],["pxrnxx.xyz",211],["amateur-couples.com",211],["slutdump.com",211],["produsat.com",213],["12thman.com",215],["acusports.com",215],["atlantic10.com",215],["auburntigers.com",215],["baylorbears.com",215],["bceagles.com",215],["bgsufalcons.com",215],["big12sports.com",215],["bigten.org",215],["bradleybraves.com",215],["butlersports.com",215],["cmumavericks.com",215],["conferenceusa.com",215],["cyclones.com",215],["dartmouthsports.com",215],["daytonflyers.com",215],["dbupatriots.com",215],["dbusports.com",215],["denverpioneers.com",215],["fduknights.com",215],["fgcuathletics.com",215],["fightinghawks.com",215],["fightingillini.com",215],["floridagators.com",215],["friars.com",215],["friscofighters.com",215],["gamecocksonline.com",215],["goarmywestpoint.com",215],["gobison.com",215],["goblueraiders.com",215],["gobobcats.com",215],["gocards.com",215],["gocreighton.com",215],["godeacs.com",215],["goexplorers.com",215],["goetbutigers.com",215],["gofrogs.com",215],["gogriffs.com",215],["gogriz.com",215],["golobos.com",215],["gomarquette.com",215],["gopack.com",215],["gophersports.com",215],["goprincetontigers.com",215],["gopsusports.com",215],["goracers.com",215],["goshockers.com",215],["goterriers.com",215],["gotigersgo.com",215],["gousfbulls.com",215],["govandals.com",215],["gowyo.com",215],["goxavier.com",215],["gozags.com",215],["gozips.com",215],["griffinathletics.com",215],["guhoyas.com",215],["gwusports.com",215],["hailstate.com",215],["hamptonpirates.com",215],["hawaiiathletics.com",215],["hokiesports.com",215],["huskers.com",215],["icgaels.com",215],["iuhoosiers.com",215],["jsugamecocksports.com",215],["longbeachstate.com",215],["loyolaramblers.com",215],["lrtrojans.com",215],["lsusports.net",215],["morrisvillemustangs.com",215],["msuspartans.com",215],["muleriderathletics.com",215],["mutigers.com",215],["navysports.com",215],["nevadawolfpack.com",215],["niuhuskies.com",215],["nkunorse.com",215],["nuhuskies.com",215],["nusports.com",215],["okstate.com",215],["olemisssports.com",215],["omavs.com",215],["ovcsports.com",215],["owlsports.com",215],["purduesports.com",215],["redstormsports.com",215],["richmondspiders.com",215],["sfajacks.com",215],["shupirates.com",215],["siusalukis.com",215],["smcgaels.com",215],["smumustangs.com",215],["soconsports.com",215],["soonersports.com",215],["themw.com",215],["tulsahurricane.com",215],["txst.com",215],["txstatebobcats.com",215],["ubbulls.com",215],["ucfknights.com",215],["ucirvinesports.com",215],["uconnhuskies.com",215],["uhcougars.com",215],["uicflames.com",215],["umterps.com",215],["uncwsports.com",215],["unipanthers.com",215],["unlvrebels.com",215],["uoflsports.com",215],["usdtoreros.com",215],["utahstateaggies.com",215],["utepathletics.com",215],["utrockets.com",215],["uvmathletics.com",215],["uwbadgers.com",215],["villanova.com",215],["wkusports.com",215],["wmubroncos.com",215],["woffordterriers.com",215],["1pack1goal.com",215],["bcuathletics.com",215],["bubraves.com",215],["goblackbears.com",215],["golightsgo.com",215],["gomcpanthers.com",215],["goutsa.com",215],["mercerbears.com",215],["pirateblue.com",215],["pirateblue.net",215],["pirateblue.org",215],["quinnipiacbobcats.com",215],["towsontigers.com",215],["tribeathletics.com",215],["tribeclub.com",215],["utepminermaniacs.com",215],["utepminers.com",215],["wkutickets.com",215],["aopathletics.org",215],["atlantichockeyonline.com",215],["bigsouthnetwork.com",215],["bigsouthsports.com",215],["chawomenshockey.com",215],["dbupatriots.org",215],["drakerelays.org",215],["ecac.org",215],["ecacsports.com",215],["emueagles.com",215],["emugameday.com",215],["gculopes.com",215],["godrakebulldog.com",215],["godrakebulldogs.com",215],["godrakebulldogs.net",215],["goeags.com",215],["goislander.com",215],["goislanders.com",215],["gojacks.com",215],["gomacsports.com",215],["gseagles.com",215],["hubison.com",215],["iowaconference.com",215],["ksuowls.com",215],["lonestarconference.org",215],["mascac.org",215],["midwestconference.org",215],["mountaineast.org",215],["niu-pack.com",215],["nulakers.ca",215],["oswegolakers.com",215],["ovcdigitalnetwork.com",215],["pacersports.com",215],["rmacsports.org",215],["rollrivers.com",215],["samfordsports.com",215],["uncpbraves.com",215],["usfdons.com",215],["wiacsports.com",215],["alaskananooks.com",215],["broncathleticfund.com",215],["cameronaggies.com",215],["columbiacougars.com",215],["etownbluejays.com",215],["gobadgers.ca",215],["golancers.ca",215],["gometrostate.com",215],["gothunderbirds.ca",215],["kentstatesports.com",215],["lehighsports.com",215],["lopers.com",215],["lycoathletics.com",215],["lycomingathletics.com",215],["maraudersports.com",215],["mauiinvitational.com",215],["msumavericks.com",215],["nauathletics.com",215],["nueagles.com",215],["nwusports.com",215],["oceanbreezenyc.org",215],["patriotathleticfund.com",215],["pittband.com",215],["principiaathletics.com",215],["roadrunnersathletics.com",215],["sidearmsocial.com",215],["snhupenmen.com",215],["stablerarena.com",215],["stoutbluedevils.com",215],["uwlathletics.com",215],["yumacs.com",215],["collegefootballplayoff.com",215],["csurams.com",215],["cubuffs.com",215],["gobearcats.com",215],["gohuskies.com",215],["mgoblue.com",215],["osubeavers.com",215],["pittsburghpanthers.com",215],["rolltide.com",215],["texassports.com",215],["thesundevils.com",215],["uclabruins.com",215],["wvuathletics.com",215],["wvusports.com",215],["arizonawildcats.com",215],["calbears.com",215],["cuse.com",215],["georgiadogs.com",215],["goducks.com",215],["goheels.com",215],["gostanford.com",215],["insidekstatesports.com",215],["insidekstatesports.info",215],["insidekstatesports.net",215],["insidekstatesports.org",215],["k-stateathletics.com",215],["k-statefootball.net",215],["k-statefootball.org",215],["k-statesports.com",215],["k-statesports.net",215],["k-statesports.org",215],["k-statewomenshoops.com",215],["k-statewomenshoops.net",215],["k-statewomenshoops.org",215],["kstateathletics.com",215],["kstatefootball.net",215],["kstatefootball.org",215],["kstatesports.com",215],["kstatewomenshoops.com",215],["kstatewomenshoops.net",215],["kstatewomenshoops.org",215],["ksuathletics.com",215],["ksusports.com",215],["scarletknights.com",215],["showdownforrelief.com",215],["syracusecrunch.com",215],["texastech.com",215],["theacc.com",215],["ukathletics.com",215],["usctrojans.com",215],["utahutes.com",215],["utsports.com",215],["wsucougars.com",215],["mangadods.com",215],["tricksplit.io",215],["fangraphs.com",216],["4players.de",[217,309]],["buffed.de",217],["gamesaktuell.de",217],["gamezone.de",217],["pcgames.de",217],["videogameszone.de",217],["planetaminecraft.com",218],["cravesandflames.com",219],["codesnse.com",219],["link.paid4file.com",219],["flyad.vip",219],["lapresse.ca",220],["kolyoom.com",221],["ilovephd.com",221],["negumo.com",222],["games.wkb.jp",[223,224]],["channelmyanmar.org",[225,226]],["u-s-news.com",226],["fandom.com",[227,533,534]],["kenshi.fandom.com",228],["hausbau-forum.de",229],["fake-it.ws",230],["laksa19.github.io",231],["1shortlink.com",232],["nesia.my.id",233],["makemoneywithurl.com",234],["junkyponk.com",234],["healthfirstweb.com",234],["vocalley.com",234],["yogablogfit.com",234],["en.financerites.com",234],["mythvista.com",234],["blogtechh.com",234],["host2loan.com",234],["resetoff.pl",235],["sexodi.com",235],["cdn77.org",236],["howtofixwindows.com",237],["3sexporn.com",238],["momxxxsex.com",238],["myfreevintageporn.com",238],["penisbuyutucum.net",238],["lightnovelworld.com",239],["ujszo.com",240],["newsmax.com",241],["bobs-tube.com",242],["nadidetarifler.com",243],["siz.tv",243],["suzylu.co.uk",[244,245]],["onworks.net",246],["yabiladi.com",246],["downloadsoft.net",247],["pixsera.net",248],["testlanguages.com",249],["newsinlevels.com",249],["videosinlevels.com",249],["cbs.com",250],["paramountplus.com",250],["ultimate-guitar.com",251],["teachmemicro.com",252],["willcycle.com",252],["2ndrun.tv",252],["rackusreads.com",252],["xyzsports111.xyz",[253,254,255]],["xyzsports112.xyz",[253,254,255]],["xyzsports113.xyz",[253,254,255]],["xyzsports114.xyz",[253,254,255]],["xyzsprtsfrmr1.site",[253,254,255]],["xyzsprtsfrmr2.site",[253,254,255]],["claimbits.net",256],["sexyscope.net",257],["recherche-ebook.fr",259],["easymc.io",259],["zonebourse.com",260],["botrix.live",261],["luckydice.net",262],["adarima.org",262],["tieutietkiem.com",262],["weatherwx.com",262],["sattaguess.com",262],["winshell.de",262],["rosasidan.ws",262],["modmakers.xyz",262],["gamepure.in",262],["warrenrahul.in",262],["austiblox.net",262],["upiapi.in",262],["myownguess.in",262],["networkhint.com",262],["watchhentai.net",262],["thichcode.net",262],["texturecan.com",262],["tikmate.app",[262,489]],["4funbox.com",263],["nephobox.com",263],["1024tera.com",263],["btcbitco.in",[264,265]],["btcsatoshi.net",264],["cempakajaya.com",264],["crypto4yu.com",264],["readbitcoin.org",264],["wiour.com",264],["finish.addurl.biz",264],["aiimgvlog.fun",[264,269]],["exactpay.online",264],["kiddyearner.com",264],["blog.cryptowidgets.net",265],["blog.insurancegold.in",265],["blog.wiki-topia.com",265],["blog.coinsvalue.net",265],["blog.cookinguide.net",265],["blog.freeoseocheck.com",265],["blog24.me",265],["rsadnetworkinfo.com",265],["rsinsuranceinfo.com",265],["rsfinanceinfo.com",265],["rsgamer.app",265],["rssoftwareinfo.com",265],["rshostinginfo.com",265],["rseducationinfo.com",265],["homeairquality.org",267],["faucettronn.click",267],["ticketmaster.sg",267],["bildirim.link",268],["appsbull.com",270],["diudemy.com",270],["maqal360.com",270],["sinonimos.de",[271,272]],["antonimos.de",[271,272]],["tiktokcounter.net",271],["tiktokrealtime.com",271],["quesignifi.ca",[271,273]],["lifesurance.info",274],["infokeeda.xyz",275],["arcai.com",276],["my-code4you.blogspot.com",277],["flickr.com",278],["firefile.cc",279],["pestleanalysis.com",279],["kochamjp.pl",279],["tutorialforlinux.com",279],["whatsaero.com",279],["animeblkom.net",[279,295]],["blkom.com",279],["globes.co.il",[280,281]],["jardiner-malin.fr",282],["tw-calc.net",283],["ohmybrush.com",284],["talkceltic.net",285],["mentalfloss.com",286],["uprafa.com",287],["cube365.net",288],["nightfallnews.com",[289,290]],["wwwfotografgotlin.blogspot.com",291],["freelistenonline.com",291],["badassdownloader.com",292],["quickporn.net",293],["yellowbridge.com",294],["aosmark.com",296],["atozmath.com",[298,299,300,301,302,303,304]],["newyorker.com",305],["brighteon.com",306],["more.tv",307],["video1tube.com",308],["alohatube.xyz",308],["fshost.me",310],["link.cgtips.org",311],["hentaicloud.com",312],["netfapx.com",314],["paperzonevn.com",315],["hentaienglish.com",316],["hentaiporno.xxx",316],["venge.io",[317,318]],["btcbux.io",319],["its.porn",[320,321]],["atv.at",322],["kusonime.com",[323,324]],["jetpunk.com",326],["imgur.com",327],["hentai-party.com",328],["hentaicomics.pro",328],["xxx-comics.pro",328],["genshinimpactcalculator.com",331],["mysexgames.com",332],["embed.indavideo.hu",335],["coinurl.net",[336,337]],["gdr-online.com",338],["mmm.dk",339],["iqiyi.com",[340,341,482]],["m.iqiyi.com",342],["japopav.tv",343],["lvturbo.com",343],["nbcolympics.com",344],["apkhex.com",345],["indiansexstories2.net",346],["issstories.xyz",346],["1340kbbr.com",347],["gorgeradio.com",347],["kduk.com",347],["kedoam.com",347],["kejoam.com",347],["kelaam.com",347],["khsn1230.com",347],["kjmx.rocks",347],["kloo.com",347],["klooam.com",347],["klykradio.com",347],["kmed.com",347],["kmnt.com",347],["kool991.com",347],["kpnw.com",347],["kppk983.com",347],["krktcountry.com",347],["ktee.com",347],["kwro.com",347],["kxbxfm.com",347],["thevalley.fm",347],["dsocker1234.blogspot.com",348],["blick.ch",349],["mgnet.xyz",350],["designtagebuch.de",351],["pixroute.com",352],["uploady.io",353],["calculator-online.net",354],["porngames.club",355],["sexgames.xxx",355],["111.90.159.132",356],["battleplan.news",356],["mobile-tracker-free.com",357],["pfps.gg",358],["ac-illust.com",[359,360]],["photo-ac.com",[359,360]],["vlxxs.net",361],["rapelust.com",361],["vtube.to",361],["vtplay.net",361],["desitelugusex.com",361],["xvideos-downloader.net",361],["xxxvideotube.net",361],["sdefx.cloud",361],["nozomi.la",361],["moviesonlinefree.net",361],["social-unlock.com",362],["ninja.io",363],["sourceforge.net",364],["samfirms.com",365],["banned.video",366],["conspiracyfact.info",366],["freeworldnews.tv",366],["madmaxworld.tv",366],["huffpost.com",367],["ingles.com",368],["spanishdict.com",368],["surfline.com",[369,370]],["play.tv3.ee",371],["play.tv3.lt",371],["play.tv3.lv",371],["tv3play.skaties.lv",371],["trendyoum.com",372],["bulbagarden.net",373],["doomovie-hd.live",374],["madoohd.com",374],["moviestars.to",375],["hollywoodlife.com",376],["searchresults.cc",377],["mat6tube.com",378],["textstudio.co",379],["newtumbl.com",380],["nevcoins.club",382],["mail.com",383],["erome.com",386],["oggi.it",[387,388]],["manoramamax.com",387],["video.gazzetta.it",[387,388]],["mangakita.id",389],["mangakita.net",389],["poscishd.online",390],["avpgalaxy.net",391],["mhma12.tech",392],["panda-novel.com",393],["zebranovel.com",393],["lightsnovel.com",393],["eaglesnovel.com",393],["pandasnovel.com",393],["panel.freemcserver.net",394],["zadfaucet.com",395],["ewrc-results.com",396],["kizi.com",397],["cyberscoop.com",398],["fedscoop.com",398],["canale.live",399],["mafiatown.pl",[400,401]],["jeep-cj.com",402],["sponsorhunter.com",403],["cloudcomputingtopics.net",404],["likecs.com",405],["tiscali.it",406],["linkspy.cc",407],["tutelehd3.xyz",408],["dirty.pink",[409,410,411]],["adshnk.com",412],["chattanoogan.com",413],["adsy.pw",414],["playstore.pw",414],["socialmediagirls.com",415],["windowspro.de",416],["snapinsta.app",417],["tvtv.ca",418],["tvtv.us",418],["mydaddy.cc",419],["roadtrippin.fr",420],["redketchup.io",[421,422,423]],["anyporn.com",[424,440]],["bravoporn.com",424],["bravoteens.com",424],["crocotube.com",424],["hellmoms.com",424],["hellporno.com",424],["sex3.com",424],["tubewolf.com",424],["xbabe.com",424],["xcum.com",424],["zedporn.com",424],["imagetotext.info",425],["infokik.com",426],["freepik.com",427],["ddwloclawek.pl",[428,429]],["deezer.com",430],["my-subs.co",431],["plaion.com",432],["rapid-cloud.co",433],["in-jpn.com",433],["slideshare.net",[434,435]],["ustreasuryyieldcurve.com",436],["businesssoftwarehere.com",437],["goo.st",437],["freevpshere.com",437],["softwaresolutionshere.com",437],["staige.tv",441],["androidadult.com",442],["streamvid.net",443],["watchtv24.com",444],["cellmapper.net",445],["medscape.com",446],["newscon.org",[447,448]],["arkadium.com",449],["app.blubank.com",450],["mobileweb.bankmellat.ir",450],["sportdeutschland.tv",451],["kcra.com",451],["wcvb.com",451],["ccthesims.com",453],["chromeready.com",453],["coursedrive.org",453],["dtbps3games.com",453],["illustratemagazine.com",453],["uknip.co.uk",453],["vod.pl",454],["megadrive-emulator.com",455],["animesaga.in",458],["moviesapi.club",458],["bestx.stream",458],["watchx.top",458],["digimanie.cz",459],["svethardware.cz",459],["srvy.ninja",460],["drawer-opportunity-i-243.site",461],["tchatche.com",462],["ozulmanga.com",463],["edmdls.com",464],["freshremix.net",464],["scenedl.org",464],["trakt.tv",[465,466,467]],["shroomers.app",468],["di.fm",[469,470,471]],["jazzradio.com",[469,470,471]],["pc-builds.com",472],["qtoptens.com",472],["reuters.com",472],["today.com",472],["videogamer.com",472],["wrestlinginc.com",472],["gbatemp.net",472],["techedubyte.com",473],["movie-th.tv",474],["iwanttfc.com",475],["nutraingredients-asia.com",476],["nutraingredients-latam.com",476],["nutraingredients-usa.com",476],["nutraingredients.com",476],["livesportsclub.me",477],["rogstream.fun",477],["ozulscansen.com",478],["fitnessbr.click",479],["minhareceita.xyz",479],["doomied.monster",480],["lookmovie2.to",480],["royalroad.com",481],["biletomat.pl",483],["hextank.io",[485,486]],["gofilmizle.com",[487,488]],["sagewater.com",490],["redlion.net",490],["satdl.com",491],["vidstreaming.xyz",492],["myradioonline.pl",493],["teamskeet.com",494],["tacobell.com",496],["zefoy.com",497],["natgeotv.com",499],["br.de",500],["pasteboard.co",501],["clickhole.com",502],["deadspin.com",502],["gizmodo.com",502],["jalopnik.com",502],["jezebel.com",502],["kotaku.com",502],["lifehacker.com",502],["splinternews.com",502],["theinventory.com",502],["theonion.com",502],["theroot.com",502],["thetakeout.com",502],["pewresearch.org",502],["los40.com",[503,504]],["as.com",504],["telegraph.co.uk",[505,506]],["poweredbycovermore.com",[505,553]],["lumens.com",[505,553]],["verizon.com",507],["humanbenchmark.com",508],["politico.com",509],["officedepot.co.cr",[510,511]],["usnews.com",514],["factable.com",516],["zee5.com",517],["gala.fr",518],["geo.fr",518],["voici.fr",518],["gloucestershirelive.co.uk",519],["arsiv.mackolik.com",520],["jacksonguitars.com",521],["scandichotels.com",522],["stylist.co.uk",523],["nettiauto.com",524],["thaiairways.com",[525,526]],["cerbahealthcare.it",[527,528]],["futura-sciences.com",[527,543]],["tiendaenlinea.claro.com.ni",[529,530]],["tieba.baidu.com",531],["linktr.ee",532],["grasshopper.com",[535,536]],["epson.com.cn",[537,538]],["oe24.at",[539,540]],["szbz.de",539],["platform.autods.com",[541,542]],["wikihow.com",544],["citibank.com.sg",545],["uol.com.br",[546,547,548,549]],["gazzetta.gr",550],["digicol.dpm.org.cn",[551,552]],["virginmediatelevision.ie",554],["larazon.es",[555,556]],["waitrosecellar.com",[557,558,559]],["sharpen-free-design-generator.netlify.app",[561,562]],["help.cashctrl.com",[563,564]],["commande.rhinov.pro",[565,566]],["ecom.wixapps.net",[565,566]],["tipranks.com",[567,568]],["iceland.co.uk",[569,570,571]],["socket.pearsoned.com",572],["tntdrama.com",[573,574]],["mobile.de",[575,576]],["ioe.vn",[577,578]],["geiriadur.ac.uk",[577,581]],["bikeportland.org",[579,580]],["biologianet.com",[547,548,549]],["10play.com.au",[582,583]],["financemonk.net",584],["weather.com",[587,588]],["ubereats.com",[587,588]]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,22]],["1movies",[14,21]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["hamsterix",15],["xhamster",15],["xhamster1",15],["xhamster10",15],["xhamster11",15],["xhamster12",15],["xhamster13",15],["xhamster14",15],["xhamster15",15],["xhamster16",15],["xhamster17",15],["xhamster18",15],["xhamster19",15],["xhamster20",15],["xhamster2",15],["xhamster3",15],["xhamster4",15],["xhamster42",15],["xhamster5",15],["xhamster7",15],["xhamster8",15],["vidlox",[16,17]],["primewire",18],["streanplay",[18,20]],["sbplay",18],["milfnut",18],["fmovies",22],["sxyprn",25],["hqq",[26,27]],["waaw",[27,28]],["younetu",27],["123link",29],["adshort",29],["linkshorts",29],["adsrt",29],["vinaurl",29],["adfloz",29],["dutchycorp",29],["shortearn",29],["pingit",29],["shrink",29],["tmearn",29],["megalink",29],["miniurl",29],["clk",29],["pureshort",29],["shrinke",29],["shrinkme",29],["pcprogramasymas",29],["link1s",29],["shortzzy",29],["shorttey",[29,209]],["lite-link",29],["adcorto",29],["zshort",29],["upfiles",29],["linkfly",29],["wplink",29],["seulink",29],["encurtalink",29],["camwhores",[30,43,94,95,96]],["tube8",[31,32]],["youporn",32],["redtube",32],["pornhub",[32,195]],["upornia",[34,35]],["xtits",[59,129]],["streamwish",[61,62]],["pouvideo",69],["povvideo",69],["povw1deo",69],["povwideo",69],["powv1deo",69],["powvibeo",69],["powvideo",69],["powvldeo",69],["acortalo",[74,75,76,77]],["acortar",[74,75,76,77]],["plyjam",[78,79]],["fxporn69",84],["vipbox",85],["viprow",85],["desbloqueador",90],["xberuang",92],["teknorizen",92],["subtorrents",100],["subtorrents1",100],["newpelis",100],["pelix",100],["allcalidad",100],["infomaniakos",100],["filecrypt",104],["tornadomovies",110],["sexwebvideo",111],["mangovideo",111],["icdrama",116],["mangasail",116],["file4go",118],["asianclub",135],["anitube",138],["mixdrop",140],["azsoft",150],["uploadev",165],["ver-pelis-online",174],["ancient-origins",182],["spankbang",202],["lookcam",209],["lootlinks",209],["dpstream",212],["bluemediafiles",214],["docer",235],["kickassanime",258],["terabox",263],["ctrlv",297],["123movieshd",325],["uproxy",329],["animesa",330],["cinecalidad",[333,334]],["dvdplay",361],["apkmaven",381],["gmx",384],["gamereactor",439],["tvhay",[456,457]],["lookmovie",480],["lk21official",484],["www.google",495],["officedepot",[512,513]],["dropgalaxy",584]]);

const exceptionsMap = new Map([["pingit.com",[29]],["pingit.me",[29]],["lookmovie.studio",[480]]]);

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
