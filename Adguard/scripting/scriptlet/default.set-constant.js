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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["odabd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["Object.prototype.isAdblock","undefined"],["HTMLScriptElement.prototype.onerror","noopFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["acdl","noopFunc"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["isAdClickDone","true"],["waitTime441","0"],["waitTime","0"],["wT9882","0"],["showadas","true"],["iktimer","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["findCMP","noopFunc"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["supportedBrowsers",""],["ytInitialPlayerResponse.playerConfig.ssapConfig","undefined"],["ytInitialPlayerResponse.streamingData.serverAbrStreamingUrl","undefined"],["window.__halo_loaded__","true"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3,588,589]],["music.youtube.com",[0,1,2,3,588,589]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,588,589]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,251]],["gadgets.es",[11,251]],["amateurporn.co",[11,110]],["wiwo.de",12],["masteranime.tv",13],["fullxh.com",14],["megaxh.com",14],["movingxh.world",14],["taoxh.life",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhtree.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["alphaporno.com",[17,427]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,113]],["familyporn.tv",17],["cloudemb.com",[17,346]],["sbplay1.com",17],["id45.cyou",17],["85tube.com",[17,94]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["apinchcaseation.com",21],["bigclatterhomesguideservice.com",21],["bradleyviewdoctor.com",21],["denisegrowthwide.com",21],["edwardarriveoften.com",21],["housecardsummerbutton.com",21],["jamiesamewalk.com",21],["jayservicestuff.com",21],["johntryopen.com",21],["kennethofficialitem.com",21],["lukecomparetwo.com",21],["markstyleall.com",21],["morganoperationface.com",21],["nectareousoverelate.com",21],["paulkitchendark.com",21],["sandrataxeight.com",21],["seanshowcould.com",21],["sharonwhiledemocratic.com",21],["stevenimaginelittle.com",21],["strawberriesporail.com",21],["timberwoodanotia.com",21],["tinycat-voe-fashion.com",21],["troyyourlead.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["vincentincludesuccessful.com",21],["voe.sx",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["player.glomex.com",23],["merkur.de",23],["tz.de",23],["hotpornfile.org",26],["player.tabooporns.com",26],["x69.ovh",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["netu.ac",26],["dirtyvideo.fun",27],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,131]],["stfly.me",28],["oncehelp.com",28],["rgl.vn",28],["reqlinks.net",28],["megaurl.in",28],["megafly.in",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["urlty.com",28],["7r6.com",28],["oko.sh",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["skincarie.com",28],["exeo.app",28],["coinlyhub.com",[28,209]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,218]],["owllink.net",28],["cutdl.xyz",28],["iir.ai",28],["shorteet.com",[28,237]],["sekilastekno.com",28],["smoner.com",28],["gplinks.co",28],["xpshort.com",28],["upshrink.com",28],["enit.in",[28,233]],["ez4short.com",28],["easysky.in",28],["veganab.co",28],["adrinolinks.in",28],["go.gyanitheme.com",28],["go.theforyou.in",28],["go.hipsonyc.com",28],["birdurls.com",28],["try2link.com",28],["jameeltips.us",28],["gainl.ink",28],["promo-visits.site",28],["satoshi-win.xyz",[28,266]],["shorterall.com",28],["encurtandourl.com",28],["forextrader.site",28],["postazap.com",28],["tinys.click",[28,218]],["cpm.icu",28],["easycut.io",28],["panyshort.link",28],["enagato.com",28],["pandaznetwork.com",28],["tii.la",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["recipestutorials.com",28],["droplink.co",28],["oii.io",28],["du-link.in",28],["atglinks.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["4cash.me",28],["namaidani.com",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["apkshrt.com",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,150]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,218]],["snowurl.com",[28,218]],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["linksfy.co",28],["news.speedynews.xyz",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["novelssites.com",28],["links.medipost.org",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["link4rev.site",28],["bloginguru.xyz",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",[28,441]],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["windowslite.net",[28,218]],["coinsl.click",28],["exalink.fun",28],["exego.app",[28,264]],["viewfr.com",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["kiddyshort.com",28],["watchmygf.me",[29,56]],["camwhorez.tv",[29,42,93,94]],["fpo.xxx",[29,58]],["sexemix.com",29],["heavyfetish.com",[29,501]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",35],["tune.pk",36],["noticias.gospelmais.com.br",37],["techperiod.com",37],["jacquieetmicheltv.net",[38,39]],["illicoporno.com",38],["lavoixdux.com",38],["tonpornodujour.com",38],["jacquieetmichel.net",38],["swame.com",38],["vosfemmes.com",38],["voyeurfrance.net",38],["viki.com",[40,41]],["sleazyneasy.com",[42,43,44]],["smutr.com",[42,205]],["yourporngod.com",[42,43]],["javbangers.com",[42,315]],["camfox.com",42],["camthots.tv",[42,126]],["shegotass.info",42],["amateur8.com",42],["bigtitslust.com",42],["ebony8.com",42],["freeporn8.com",42],["lesbian8.com",42],["maturetubehere.com",42],["sortporn.com",42],["webcamvau.com",42],["motherporno.com",[42,43,58,128]],["tktube.com",42],["theporngod.com",[42,43]],["pornsocket.com",45],["luxuretv.com",46],["porndig.com",[47,48]],["webcheats.com.br",49],["ceesty.com",[50,51]],["gestyy.com",[50,51]],["corneey.com",51],["destyy.com",51],["festyy.com",51],["sh.st",51],["angrybirdsnest.com",52],["zrozz.com",52],["clix4btc.com",52],["katfile.com",52],["4tests.com",52],["planet-explorers-isos.com",52],["business-standard.com",52],["goltelevision.com",52],["news-und-nachrichten.de",52],["laradiobbs.net",52],["urlaubspartner.net",52],["produktion.de",52],["cinemaxxl.de",52],["bladesalvador.com",52],["tempr.email",52],["trust.zone",52],["cshort.org",52],["friendproject.net",52],["covrhub.com",52],["planetsuzy.org",53],["empflix.com",54],["filespace.com",55],["transparentcalifornia.com",56],["deepbrid.com",57],["submityourflicks.com",58],["3movs.com",58],["cambay.tv",[58,110,126,128]],["bravoerotica.net",[58,128]],["youx.xxx",58],["camclips.tv",[58,205]],["camflow.tv",[58,110,128,171,241]],["camhoes.tv",[58,110,126,128,171,241]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,128]],["analdin.com",[58,128]],["webnovel.com",59],["videosgay.me",[60,61]],["wishfast.top",61],["schwaebische.de",62],["mercurynews.com",63],["chicoer.com",63],["dailybreeze.com",63],["dailybulletin.com",63],["dailynews.com",63],["delcotimes.com",63],["eastbaytimes.com",63],["macombdaily.com",63],["ocregister.com",63],["pasadenastarnews.com",63],["pe.com",63],["presstelegram.com",63],["redlandsdailyfacts.com",63],["reviewjournal.com",63],["santacruzsentinel.com",63],["saratogian.com",63],["sentinelandenterprise.com",63],["sgvtribune.com",63],["tampabay.com",63],["times-standard.com",63],["theoaklandpress.com",63],["trentonian.com",63],["twincities.com",63],["whittierdailynews.com",63],["bostonherald.com",63],["dailycamera.com",63],["sbsun.com",63],["dailydemocrat.com",63],["montereyherald.com",63],["orovillemr.com",63],["record-bee.com",63],["redbluffdailynews.com",63],["reporterherald.com",63],["thereporter.com",63],["timescall.com",63],["timesheraldonline.com",63],["ukiahdailyjournal.com",63],["dailylocal.com",63],["8tracks.com",64],["revealname.com",65],["fcportables.com",[66,67]],["golfchannel.com",69],["telemundodeportes.com",69],["stream.nbcsports.com",69],["gamcore.com",70],["porcore.com",70],["69games.xxx",70],["javmix.app",70],["tecknity.com",71],["haaretz.co.il",72],["haaretz.com",72],["hungama.com",72],["a-o.ninja",72],["anime-odcinki.pl",72],["kumpulmanga.org",72],["shortgoo.blogspot.com",72],["tonanmedia.my.id",[72,455]],["yurasu.xyz",72],["isekaipalace.com",72],["megadescarga.net",[73,74,75,76]],["megadescargas.net",[73,74,75,76]],["vikistream.com",77],["eplayer.click",[77,78]],["mega4upload.com",[78,84]],["ennovelas.com",[78,84]],["n-tv.de",79],["brigitte.de",80],["stern.de",80],["foxsports.com.au",81],["canberratimes.com.au",81],["thesimsresource.com",82],["bdnewszh.com",84],["streamservicehd.click",84],["timeforbitco.in",85],["worldofbitco.in",[85,96]],["weatherx.co.in",[85,96]],["getyourbitco.in",85],["sunbtc.space",85],["ctrl.blog",86],["sportlife.es",87],["finofilipino.org",88],["acortarm.xyz",89],["acortame.xyz",89],["speedtest.net",90],["mysflink.blogspot.com",91],["assia.tv",92],["assia4.com",92],["assia24.com",92],["cwtvembeds.com",[94,127]],["camlovers.tv",94],["porntn.com",94],["pornissimo.org",94],["sexcams-24.com",[94,110]],["watchporn.to",[94,110]],["camwhorez.video",94],["footstockings.com",[95,110]],["sbs.com.au",[97,98]],["ojogos.com.br",100],["powforums.com",101],["supforums.com",101],["studybullet.com",101],["usgamer.net",102],["recordonline.com",102],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["sport-tv-guide.live",105],["temp-mails.com",106],["freiepresse.de",107],["investing.com",108],["camhub.cc",110],["love4porn.com",110],["thotvids.com",110],["watchmdh.to",110],["celebwhore.com",110],["cluset.com",110],["4kporn.xxx",110],["xhomealone.com",110],["lusttaboo.com",[110,388]],["hentai-moon.com",110],["mp3fiber.com",111],["suedkurier.de",112],["anysex.com",114],["vlist.se",115],["pornve.com",116],["coolrom.com.au",117],["pornohirsch.net",118],["marie-claire.es",119],["gamezhero.com",119],["flashgirlgames.com",119],["onlinesudoku.games",119],["mpg.football",119],["sssam.com",119],["globalnews.ca",120],["drinksmixer.com",121],["leitesculinaria.com",121],["fupa.net",122],["browardpalmbeach.com",123],["dallasobserver.com",123],["houstonpress.com",123],["miaminewtimes.com",123],["phoenixnewtimes.com",123],["westword.com",123],["nhentai.net",124],["nowtv.com.tr",125],["caminspector.net",126],["camwhoreshd.com",126],["camgoddess.tv",126],["gay4porn.com",128],["mypornhere.com",128],["mediapason.it",129],["linkspaid.com",129],["tuotromedico.com",129],["neoteo.com",129],["phoneswiki.com",129],["celebmix.com",129],["myneobuxportal.com",129],["oyungibi.com",129],["25yearslatersite.com",129],["jeshoots.com",130],["techhx.com",130],["karanapk.com",130],["flashplayer.fullstacks.net",132],["cloudapps.herokuapp.com",132],["youfiles.herokuapp.com",132],["temp-mail.org",133],["playembed.xyz",134],["javhdporn.net",134],["javstream.top",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hqtv.biz",140],["liveuamap.com",141],["muvibg.com",141],["audycje.tokfm.pl",142],["hulu.com",[143,144,145]],["shush.se",146],["emurom.net",147],["allkpop.com",148],["azmath.info",149],["downfile.site",149],["downphanmem.com",149],["expertvn.com",149],["memangbau.com",149],["trangchu.news",149],["aztravels.net",149],["adfoc.us",149],["anumin.com",149],["awolio.com",149],["cgbsesupport.com",149],["eternalcbse.in",149],["financialstudy.me",149],["foreverhealth.in",149],["gptproguide.com",149],["iplquotes.com",149],["jobkijankari.in",149],["jobwaala.in",149],["kaisekareblog.com",149],["learnwithsaif.in",149],["lyricsx.in",149],["minijankari.com",149],["news36tech.com",149],["newsloti.com",149],["newzwala.co.in",149],["nhmgujarat.in",149],["odiamusicsong.com",149],["smartsetkari.in",149],["sugargliderfaqs.com",149],["theringtonesworld.in",149],["w3hindi.in",149],["ryzenmusic.in",149],["dhamakamusic.ink",149],["recruitmentrasta.in",149],["mediniweb.in",149],["picassoappk.com",149],["geniuseducares.com",149],["pmyojanasarkari.in",149],["netflixvip.in",149],["iisfvirtual.in",149],["starxinvestor.com",149],["myprivatejobs.com",[149,262]],["wikitraveltips.com",[149,262]],["amritadrino.com",[149,262]],["sahlmarketing.net",149],["filmypoints.in",149],["quotesopia.com",149],["techacode.com",149],["trickms.com",149],["sptfy.be",149],["mcafee-com.com",[149,264]],["pickcrackpasswords.blogspot.com",151],["kfrfansub.com",152],["thuglink.com",152],["voipreview.org",152],["hanime.tv",153],["pogo.com",154],["cloudvideo.tv",155],["legionjuegos.org",156],["legionpeliculas.org",156],["legionprogramas.org",156],["16honeys.com",157],["elespanol.com",158],["remodelista.com",159],["coolmathgames.com",[160,161,162,518]],["audiofanzine.com",163],["noweconomy.live",165],["howifx.com",[165,233]],["vavada5com.com",165],["hitokin.net",166],["developerinsider.co",167],["ilprimatonazionale.it",168],["hotabis.com",168],["root-nation.com",168],["italpress.com",168],["airsoftmilsimnews.com",168],["artribune.com",168],["thehindu.com",169],["cambro.tv",[170,171]],["nibelungen-kurier.de",172],["pianetamountainbike.it",174],["barchart.com",175],["modelisme.com",176],["parasportontario.ca",176],["prescottenews.com",176],["nrj-play.fr",177],["oeffentlicher-dienst.info",178],["hackingwithreact.com",179],["gutekueche.at",180],["eplfootballmatch.com",181],["peekvids.com",182],["playvids.com",182],["pornflip.com",182],["redensarten-index.de",183],["vw-page.com",184],["viz.com",[185,186]],["queenfaucet.website",187],["0rechner.de",188],["configspc.com",189],["xopenload.me",189],["uptobox.com",189],["uptostream.com",189],["onepiece-tube.com",190],["japgay.com",191],["mega-debrid.eu",192],["dreamdth.com",193],["diaridegirona.cat",195],["diariodeibiza.es",195],["diariodemallorca.es",195],["diarioinformacion.com",195],["eldia.es",195],["emporda.info",195],["farodevigo.es",195],["laopinioncoruna.es",195],["laopiniondemalaga.es",195],["laopiniondemurcia.es",195],["laopiniondezamora.es",195],["laprovincia.es",195],["levante-emv.com",195],["mallorcazeitung.es",195],["regio7.cat",195],["superdeporte.es",195],["playpaste.com",196],["player.rtl2.de",197],["freetutorialsus.com",198],["vidlii.com",[198,214]],["iammagnus.com",198],["dailyvideoreports.net",198],["unityassets4free.com",198],["cnbc.com",199],["puzzles.msn.com",200],["metro.us",200],["newsobserver.com",200],["arkadiumhosted.com",200],["firefaucet.win",202],["55k.io",203],["filelions.online",203],["stmruby.com",203],["direct-link.net",204],["direkt-wissen.com",204],["link-to.net",204],["fullhdxxx.com",206],["pornclassic.tube",207],["tubepornclassic.com",207],["etonline.com",208],["creatur.io",208],["drphil.com",208],["urbanmilwaukee.com",208],["ontiva.com",208],["hideandseek.world",208],["myabandonware.com",208],["kendam.com",208],["wttw.com",208],["synonyms.com",208],["definitions.net",208],["hostmath.com",208],["camvideoshub.com",208],["minhaconexao.com.br",208],["home-made-videos.com",210],["pxrnxx.xyz",210],["amateur-couples.com",210],["slutdump.com",210],["produsat.com",212],["12thman.com",214],["acusports.com",214],["atlantic10.com",214],["auburntigers.com",214],["baylorbears.com",214],["bceagles.com",214],["bgsufalcons.com",214],["big12sports.com",214],["bigten.org",214],["bradleybraves.com",214],["butlersports.com",214],["cmumavericks.com",214],["conferenceusa.com",214],["cyclones.com",214],["dartmouthsports.com",214],["daytonflyers.com",214],["dbupatriots.com",214],["dbusports.com",214],["denverpioneers.com",214],["fduknights.com",214],["fgcuathletics.com",214],["fightinghawks.com",214],["fightingillini.com",214],["floridagators.com",214],["friars.com",214],["friscofighters.com",214],["gamecocksonline.com",214],["goarmywestpoint.com",214],["gobison.com",214],["goblueraiders.com",214],["gobobcats.com",214],["gocards.com",214],["gocreighton.com",214],["godeacs.com",214],["goexplorers.com",214],["goetbutigers.com",214],["gofrogs.com",214],["gogriffs.com",214],["gogriz.com",214],["golobos.com",214],["gomarquette.com",214],["gopack.com",214],["gophersports.com",214],["goprincetontigers.com",214],["gopsusports.com",214],["goracers.com",214],["goshockers.com",214],["goterriers.com",214],["gotigersgo.com",214],["gousfbulls.com",214],["govandals.com",214],["gowyo.com",214],["goxavier.com",214],["gozags.com",214],["gozips.com",214],["griffinathletics.com",214],["guhoyas.com",214],["gwusports.com",214],["hailstate.com",214],["hamptonpirates.com",214],["hawaiiathletics.com",214],["hokiesports.com",214],["huskers.com",214],["icgaels.com",214],["iuhoosiers.com",214],["jsugamecocksports.com",214],["longbeachstate.com",214],["loyolaramblers.com",214],["lrtrojans.com",214],["lsusports.net",214],["morrisvillemustangs.com",214],["msuspartans.com",214],["muleriderathletics.com",214],["mutigers.com",214],["navysports.com",214],["nevadawolfpack.com",214],["niuhuskies.com",214],["nkunorse.com",214],["nuhuskies.com",214],["nusports.com",214],["okstate.com",214],["olemisssports.com",214],["omavs.com",214],["ovcsports.com",214],["owlsports.com",214],["purduesports.com",214],["redstormsports.com",214],["richmondspiders.com",214],["sfajacks.com",214],["shupirates.com",214],["siusalukis.com",214],["smcgaels.com",214],["smumustangs.com",214],["soconsports.com",214],["soonersports.com",214],["themw.com",214],["tulsahurricane.com",214],["txst.com",214],["txstatebobcats.com",214],["ubbulls.com",214],["ucfknights.com",214],["ucirvinesports.com",214],["uconnhuskies.com",214],["uhcougars.com",214],["uicflames.com",214],["umterps.com",214],["uncwsports.com",214],["unipanthers.com",214],["unlvrebels.com",214],["uoflsports.com",214],["usdtoreros.com",214],["utahstateaggies.com",214],["utepathletics.com",214],["utrockets.com",214],["uvmathletics.com",214],["uwbadgers.com",214],["villanova.com",214],["wkusports.com",214],["wmubroncos.com",214],["woffordterriers.com",214],["1pack1goal.com",214],["bcuathletics.com",214],["bubraves.com",214],["goblackbears.com",214],["golightsgo.com",214],["gomcpanthers.com",214],["goutsa.com",214],["mercerbears.com",214],["pirateblue.com",214],["pirateblue.net",214],["pirateblue.org",214],["quinnipiacbobcats.com",214],["towsontigers.com",214],["tribeathletics.com",214],["tribeclub.com",214],["utepminermaniacs.com",214],["utepminers.com",214],["wkutickets.com",214],["aopathletics.org",214],["atlantichockeyonline.com",214],["bigsouthnetwork.com",214],["bigsouthsports.com",214],["chawomenshockey.com",214],["dbupatriots.org",214],["drakerelays.org",214],["ecac.org",214],["ecacsports.com",214],["emueagles.com",214],["emugameday.com",214],["gculopes.com",214],["godrakebulldog.com",214],["godrakebulldogs.com",214],["godrakebulldogs.net",214],["goeags.com",214],["goislander.com",214],["goislanders.com",214],["gojacks.com",214],["gomacsports.com",214],["gseagles.com",214],["hubison.com",214],["iowaconference.com",214],["ksuowls.com",214],["lonestarconference.org",214],["mascac.org",214],["midwestconference.org",214],["mountaineast.org",214],["niu-pack.com",214],["nulakers.ca",214],["oswegolakers.com",214],["ovcdigitalnetwork.com",214],["pacersports.com",214],["rmacsports.org",214],["rollrivers.com",214],["samfordsports.com",214],["uncpbraves.com",214],["usfdons.com",214],["wiacsports.com",214],["alaskananooks.com",214],["broncathleticfund.com",214],["cameronaggies.com",214],["columbiacougars.com",214],["etownbluejays.com",214],["gobadgers.ca",214],["golancers.ca",214],["gometrostate.com",214],["gothunderbirds.ca",214],["kentstatesports.com",214],["lehighsports.com",214],["lopers.com",214],["lycoathletics.com",214],["lycomingathletics.com",214],["maraudersports.com",214],["mauiinvitational.com",214],["msumavericks.com",214],["nauathletics.com",214],["nueagles.com",214],["nwusports.com",214],["oceanbreezenyc.org",214],["patriotathleticfund.com",214],["pittband.com",214],["principiaathletics.com",214],["roadrunnersathletics.com",214],["sidearmsocial.com",214],["snhupenmen.com",214],["stablerarena.com",214],["stoutbluedevils.com",214],["uwlathletics.com",214],["yumacs.com",214],["collegefootballplayoff.com",214],["csurams.com",214],["cubuffs.com",214],["gobearcats.com",214],["gohuskies.com",214],["mgoblue.com",214],["osubeavers.com",214],["pittsburghpanthers.com",214],["rolltide.com",214],["texassports.com",214],["thesundevils.com",214],["uclabruins.com",214],["wvuathletics.com",214],["wvusports.com",214],["arizonawildcats.com",214],["calbears.com",214],["cuse.com",214],["georgiadogs.com",214],["goducks.com",214],["goheels.com",214],["gostanford.com",214],["insidekstatesports.com",214],["insidekstatesports.info",214],["insidekstatesports.net",214],["insidekstatesports.org",214],["k-stateathletics.com",214],["k-statefootball.net",214],["k-statefootball.org",214],["k-statesports.com",214],["k-statesports.net",214],["k-statesports.org",214],["k-statewomenshoops.com",214],["k-statewomenshoops.net",214],["k-statewomenshoops.org",214],["kstateathletics.com",214],["kstatefootball.net",214],["kstatefootball.org",214],["kstatesports.com",214],["kstatewomenshoops.com",214],["kstatewomenshoops.net",214],["kstatewomenshoops.org",214],["ksuathletics.com",214],["ksusports.com",214],["scarletknights.com",214],["showdownforrelief.com",214],["syracusecrunch.com",214],["texastech.com",214],["theacc.com",214],["ukathletics.com",214],["usctrojans.com",214],["utahutes.com",214],["utsports.com",214],["wsucougars.com",214],["mangadods.com",214],["tricksplit.io",214],["fangraphs.com",215],["4players.de",[216,311]],["buffed.de",216],["gamesaktuell.de",216],["gamezone.de",216],["pcgames.de",216],["videogameszone.de",216],["planetaminecraft.com",217],["cravesandflames.com",218],["codesnse.com",218],["link.paid4file.com",218],["flyad.vip",218],["lapresse.ca",219],["kolyoom.com",220],["ilovephd.com",220],["negumo.com",221],["games.wkb.jp",[222,223]],["channelmyanmar.org",[224,225]],["u-s-news.com",225],["fandom.com",[226,536,537]],["kenshi.fandom.com",227],["hausbau-forum.de",228],["fake-it.ws",229],["laksa19.github.io",230],["1shortlink.com",231],["nesia.my.id",232],["makemoneywithurl.com",233],["junkyponk.com",233],["healthfirstweb.com",233],["vocalley.com",233],["yogablogfit.com",233],["en.financerites.com",233],["mythvista.com",233],["blogtechh.com",233],["host2loan.com",233],["resetoff.pl",234],["sexodi.com",234],["cdn77.org",235],["howtofixwindows.com",236],["3sexporn.com",237],["momxxxsex.com",237],["myfreevintageporn.com",237],["penisbuyutucum.net",237],["lightnovelworld.com",238],["ujszo.com",239],["newsmax.com",240],["bobs-tube.com",241],["nadidetarifler.com",242],["siz.tv",242],["suzylu.co.uk",[243,244]],["onworks.net",245],["yabiladi.com",245],["downloadsoft.net",246],["pixsera.net",247],["testlanguages.com",248],["newsinlevels.com",248],["videosinlevels.com",248],["cbs.com",249],["paramountplus.com",249],["ultimate-guitar.com",250],["teachmemicro.com",251],["willcycle.com",251],["2ndrun.tv",251],["rackusreads.com",251],["xyzsports111.xyz",[252,253,254]],["xyzsports112.xyz",[252,253,254]],["xyzsports113.xyz",[252,253,254]],["xyzsports114.xyz",[252,253,254]],["xyzsprtsfrmr1.site",[252,253,254]],["xyzsprtsfrmr2.site",[252,253,254]],["claimbits.net",255],["sexyscope.net",256],["recherche-ebook.fr",258],["easymc.io",258],["zonebourse.com",259],["botrix.live",260],["free-mp3-download.net",261],["luckydice.net",262],["adarima.org",262],["tieutietkiem.com",262],["weatherwx.com",262],["sattaguess.com",262],["winshell.de",262],["rosasidan.ws",262],["modmakers.xyz",262],["gamepure.in",262],["warrenrahul.in",262],["austiblox.net",262],["upiapi.in",262],["myownguess.in",262],["networkhint.com",262],["watchhentai.net",262],["thichcode.net",262],["texturecan.com",262],["tikmate.app",[262,492]],["4funbox.com",263],["nephobox.com",263],["1024tera.com",263],["btcbitco.in",[264,265]],["btcsatoshi.net",264],["cempakajaya.com",264],["crypto4yu.com",264],["readbitcoin.org",264],["wiour.com",264],["finish.addurl.biz",264],["aiimgvlog.fun",[264,270]],["exactpay.online",264],["kiddyearner.com",264],["blog.cryptowidgets.net",265],["blog.insurancegold.in",265],["blog.wiki-topia.com",265],["blog.coinsvalue.net",265],["blog.cookinguide.net",265],["blog.freeoseocheck.com",265],["blog24.me",265],["rsadnetworkinfo.com",265],["rsinsuranceinfo.com",265],["rsfinanceinfo.com",265],["rsgamer.app",265],["rssoftwareinfo.com",265],["rshostinginfo.com",265],["rseducationinfo.com",265],["homeairquality.org",267],["faucettronn.click",267],["ticketmaster.sg",267],["suaurl.com",268],["reidoplacar.com",268],["bildirim.link",269],["appsbull.com",271],["diudemy.com",271],["maqal360.com",271],["sinonimos.de",[272,273]],["antonimos.de",[272,273]],["tiktokcounter.net",[272,275]],["tiktokrealtime.com",272],["quesignifi.ca",[272,274]],["lifesurance.info",276],["infokeeda.xyz",277],["arcai.com",278],["my-code4you.blogspot.com",279],["flickr.com",280],["firefile.cc",281],["pestleanalysis.com",281],["kochamjp.pl",281],["tutorialforlinux.com",281],["whatsaero.com",281],["animeblkom.net",[281,297]],["blkom.com",281],["globes.co.il",[282,283]],["jardiner-malin.fr",284],["tw-calc.net",285],["ohmybrush.com",286],["talkceltic.net",287],["mentalfloss.com",288],["uprafa.com",289],["cube365.net",290],["nightfallnews.com",[291,292]],["wwwfotografgotlin.blogspot.com",293],["freelistenonline.com",293],["badassdownloader.com",294],["quickporn.net",295],["yellowbridge.com",296],["aosmark.com",298],["atozmath.com",[300,301,302,303,304,305,306]],["newyorker.com",307],["brighteon.com",308],["more.tv",309],["video1tube.com",310],["alohatube.xyz",310],["fshost.me",312],["link.cgtips.org",313],["hentaicloud.com",314],["netfapx.com",316],["paperzonevn.com",318],["hentaienglish.com",319],["hentaiporno.xxx",319],["venge.io",[320,321]],["btcbux.io",322],["its.porn",[323,324]],["atv.at",325],["kusonime.com",[326,327]],["jetpunk.com",329],["imgur.com",330],["hentai-party.com",331],["hentaicomics.pro",331],["xxx-comics.pro",331],["genshinimpactcalculator.com",334],["mysexgames.com",335],["embed.indavideo.hu",338],["coinurl.net",[339,340]],["gdr-online.com",341],["mmm.dk",342],["iqiyi.com",[343,344,485]],["m.iqiyi.com",345],["japopav.tv",346],["lvturbo.com",346],["nbcolympics.com",347],["apkhex.com",348],["indiansexstories2.net",349],["issstories.xyz",349],["1340kbbr.com",350],["gorgeradio.com",350],["kduk.com",350],["kedoam.com",350],["kejoam.com",350],["kelaam.com",350],["khsn1230.com",350],["kjmx.rocks",350],["kloo.com",350],["klooam.com",350],["klykradio.com",350],["kmed.com",350],["kmnt.com",350],["kool991.com",350],["kpnw.com",350],["kppk983.com",350],["krktcountry.com",350],["ktee.com",350],["kwro.com",350],["kxbxfm.com",350],["thevalley.fm",350],["dsocker1234.blogspot.com",351],["blick.ch",352],["mgnet.xyz",353],["designtagebuch.de",354],["pixroute.com",355],["uploady.io",356],["calculator-online.net",357],["porngames.club",358],["sexgames.xxx",358],["111.90.159.132",359],["battleplan.news",359],["mobile-tracker-free.com",360],["pfps.gg",361],["ac-illust.com",[362,363]],["photo-ac.com",[362,363]],["vlxxs.net",364],["rapelust.com",364],["vtube.to",364],["vtplay.net",364],["desitelugusex.com",364],["xvideos-downloader.net",364],["xxxvideotube.net",364],["sdefx.cloud",364],["nozomi.la",364],["moviesonlinefree.net",364],["social-unlock.com",365],["ninja.io",366],["sourceforge.net",367],["samfirms.com",368],["banned.video",369],["conspiracyfact.info",369],["freeworldnews.tv",369],["madmaxworld.tv",369],["huffpost.com",370],["ingles.com",371],["spanishdict.com",371],["surfline.com",[372,373]],["play.tv3.ee",374],["play.tv3.lt",374],["play.tv3.lv",374],["tv3play.skaties.lv",374],["trendyoum.com",375],["bulbagarden.net",376],["doomovie-hd.live",377],["madoohd.com",377],["moviestars.to",378],["hollywoodlife.com",379],["searchresults.cc",380],["mat6tube.com",381],["textstudio.co",382],["newtumbl.com",383],["nevcoins.club",385],["mail.com",386],["erome.com",389],["oggi.it",[390,391]],["manoramamax.com",390],["video.gazzetta.it",[390,391]],["mangakita.id",392],["mangakita.net",392],["poscishd.online",393],["avpgalaxy.net",394],["mhma12.tech",395],["panda-novel.com",396],["zebranovel.com",396],["lightsnovel.com",396],["eaglesnovel.com",396],["pandasnovel.com",396],["panel.freemcserver.net",397],["zadfaucet.com",398],["ewrc-results.com",399],["kizi.com",400],["cyberscoop.com",401],["fedscoop.com",401],["canale.live",402],["mafiatown.pl",[403,404]],["jeep-cj.com",405],["sponsorhunter.com",406],["cloudcomputingtopics.net",407],["likecs.com",408],["tiscali.it",409],["linkspy.cc",410],["tutelehd3.xyz",411],["dirty.pink",[412,413,414]],["adshnk.com",415],["chattanoogan.com",416],["adsy.pw",417],["playstore.pw",417],["socialmediagirls.com",418],["windowspro.de",419],["snapinsta.app",420],["tvtv.ca",421],["tvtv.us",421],["mydaddy.cc",422],["roadtrippin.fr",423],["redketchup.io",[424,425,426]],["anyporn.com",[427,443]],["bravoporn.com",427],["bravoteens.com",427],["crocotube.com",427],["hellmoms.com",427],["hellporno.com",427],["sex3.com",427],["tubewolf.com",427],["xbabe.com",427],["xcum.com",427],["zedporn.com",427],["imagetotext.info",428],["infokik.com",429],["freepik.com",430],["ddwloclawek.pl",[431,432]],["deezer.com",433],["my-subs.co",434],["plaion.com",435],["rapid-cloud.co",436],["in-jpn.com",436],["slideshare.net",[437,438]],["ustreasuryyieldcurve.com",439],["businesssoftwarehere.com",440],["goo.st",440],["freevpshere.com",440],["softwaresolutionshere.com",440],["staige.tv",444],["androidadult.com",445],["streamvid.net",446],["watchtv24.com",447],["cellmapper.net",448],["medscape.com",449],["newscon.org",[450,451]],["arkadium.com",452],["app.blubank.com",453],["sportdeutschland.tv",454],["kcra.com",454],["wcvb.com",454],["ccthesims.com",456],["chromeready.com",456],["coursedrive.org",456],["dtbps3games.com",456],["illustratemagazine.com",456],["uknip.co.uk",456],["vod.pl",457],["megadrive-emulator.com",458],["animesaga.in",461],["moviesapi.club",461],["bestx.stream",461],["watchx.top",461],["digimanie.cz",462],["svethardware.cz",462],["srvy.ninja",463],["drawer-opportunity-i-243.site",464],["tchatche.com",465],["ozulmanga.com",466],["edmdls.com",467],["freshremix.net",467],["scenedl.org",467],["trakt.tv",[468,469,470]],["shroomers.app",471],["di.fm",[472,473,474]],["pc-builds.com",475],["qtoptens.com",475],["reuters.com",475],["today.com",475],["videogamer.com",475],["wrestlinginc.com",475],["gbatemp.net",475],["techedubyte.com",476],["movie-th.tv",477],["iwanttfc.com",478],["nutraingredients-asia.com",479],["nutraingredients-latam.com",479],["nutraingredients-usa.com",479],["nutraingredients.com",479],["livesportsclub.me",480],["rogstream.fun",480],["ozulscansen.com",481],["fitnessbr.click",482],["minhareceita.xyz",482],["doomied.monster",483],["lookmovie2.to",483],["royalroad.com",484],["biletomat.pl",486],["hextank.io",[488,489]],["gofilmizle.com",[490,491]],["sagewater.com",493],["redlion.net",493],["satdl.com",494],["vidstreaming.xyz",495],["myradioonline.pl",496],["teamskeet.com",497],["tacobell.com",499],["zefoy.com",500],["natgeotv.com",502],["br.de",503],["pasteboard.co",504],["clickhole.com",505],["deadspin.com",505],["gizmodo.com",505],["jalopnik.com",505],["jezebel.com",505],["kotaku.com",505],["lifehacker.com",505],["splinternews.com",505],["theinventory.com",505],["theonion.com",505],["theroot.com",505],["thetakeout.com",505],["pewresearch.org",505],["los40.com",[506,507]],["as.com",507],["telegraph.co.uk",[508,509]],["poweredbycovermore.com",[508,556]],["lumens.com",[508,556]],["verizon.com",510],["humanbenchmark.com",511],["politico.com",512],["officedepot.co.cr",[513,514]],["usnews.com",517],["factable.com",519],["zee5.com",520],["gala.fr",521],["geo.fr",521],["voici.fr",521],["gloucestershirelive.co.uk",522],["arsiv.mackolik.com",523],["jacksonguitars.com",524],["scandichotels.com",525],["stylist.co.uk",526],["nettiauto.com",527],["thaiairways.com",[528,529]],["cerbahealthcare.it",[530,531]],["futura-sciences.com",[530,546]],["tiendaenlinea.claro.com.ni",[532,533]],["tieba.baidu.com",534],["linktr.ee",535],["grasshopper.com",[538,539]],["epson.com.cn",[540,541]],["oe24.at",[542,543]],["szbz.de",542],["platform.autods.com",[544,545]],["wikihow.com",547],["citibank.com.sg",548],["uol.com.br",[549,550,551,552]],["gazzetta.gr",553],["digicol.dpm.org.cn",[554,555]],["virginmediatelevision.ie",557],["larazon.es",[558,559]],["waitrosecellar.com",[560,561,562]],["kicker.de",563],["sharpen-free-design-generator.netlify.app",[564,565]],["help.cashctrl.com",[566,567]],["commande.rhinov.pro",[568,569]],["ecom.wixapps.net",[568,569]],["tipranks.com",[570,571]],["iceland.co.uk",[572,573,574]],["socket.pearsoned.com",575],["tntdrama.com",[576,577]],["mobile.de",[578,579]],["ioe.vn",[580,581]],["geiriadur.ac.uk",[580,584]],["bikeportland.org",[582,583]],["biologianet.com",[550,551,552]],["10play.com.au",[585,586]],["perchance.org",590],["weather.com",[591,592]],["ubereats.com",[591,592]]]);

const entitiesMap = new Map([["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster42",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["sxyprn",24],["hqq",[25,26]],["waaw",[26,27]],["younetu",26],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["shrink",28],["tmearn",28],["megalink",28],["miniurl",28],["clk",28],["pureshort",28],["shrinke",28],["shrinkme",28],["pcprogramasymas",28],["link1s",28],["shortzzy",28],["shorttey",[28,208]],["lite-link",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,42,93,94,95]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,194]],["upornia",[33,34]],["xtits",[58,128]],["streamwish",[60,61]],["pouvideo",68],["povvideo",68],["povw1deo",68],["povwideo",68],["powv1deo",68],["powvibeo",68],["powvideo",68],["powvldeo",68],["acortalo",[73,74,75,76]],["acortar",[73,74,75,76]],["plyjam",[77,78]],["fxporn69",83],["vipbox",84],["viprow",84],["desbloqueador",89],["xberuang",91],["teknorizen",91],["subtorrents",99],["subtorrents1",99],["newpelis",99],["pelix",99],["allcalidad",99],["infomaniakos",99],["filecrypt",103],["tornadomovies",109],["sexwebvideo",110],["mangovideo",110],["icdrama",115],["mangasail",115],["file4go",117],["asianclub",134],["anitube",137],["mixdrop",139],["azsoft",149],["uploadev",164],["ver-pelis-online",173],["ancient-origins",181],["spankbang",201],["lookcam",208],["lootlinks",208],["dpstream",211],["bluemediafiles",213],["docer",234],["kickassanime",257],["terabox",263],["ctrlv",299],["crackstreams",317],["123movieshd",328],["uproxy",332],["animesa",333],["cinecalidad",[336,337]],["dvdplay",364],["apkmaven",384],["gmx",387],["gamereactor",442],["tvhay",[459,460]],["lookmovie",483],["lk21official",487],["www.google",498],["officedepot",[515,516]],["dropgalaxy",587]]);

const exceptionsMap = new Map([["pingit.com",[28]],["pingit.me",[28]],["lookmovie.studio",[483]]]);

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
