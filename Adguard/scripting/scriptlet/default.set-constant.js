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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["isAdsDisplayed","true"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["isAdClickDone","true"],["waitTime441","0"],["waitTime","0"],["showadas","true"],["iktimer","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["findCMP","noopFunc"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["supportedBrowsers",""],["HTMLScriptElement.prototype.onerror","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,256]],["gadgets.es",[11,256]],["amateurporn.co",[11,111]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["movingxh.world",14],["taoxh.life",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhtree.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["alphaporno.com",[17,424]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,114]],["familyporn.tv",17],["cloudemb.com",[17,344]],["sbplay1.com",17],["id45.cyou",17],["85tube.com",[17,95]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,27]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["apinchcaseation.com",21],["bigclatterhomesguideservice.com",21],["bradleyviewdoctor.com",21],["denisegrowthwide.com",21],["edwardarriveoften.com",21],["housecardsummerbutton.com",21],["jamiesamewalk.com",21],["jayservicestuff.com",21],["johntryopen.com",21],["kennethofficialitem.com",21],["lukecomparetwo.com",21],["markstyleall.com",21],["morganoperationface.com",21],["nectareousoverelate.com",21],["paulkitchendark.com",21],["sandrataxeight.com",21],["seanshowcould.com",21],["stevenimaginelittle.com",21],["strawberriesporail.com",21],["timberwoodanotia.com",21],["tinycat-voe-fashion.com",21],["troyyourlead.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["voe.sx",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",27],["player.tabooporns.com",27],["x69.ovh",27],["wiztube.xyz",27],["multiup.us",27],["rpdrlatino.live",27],["peliculas8k.com",[27,28]],["video.q34r.org",27],["69x.online",27],["czxxx.org",27],["vvtplayer.online",27],["netu.ac",27],["dirtyvideo.fun",28],["adbull.org",29],["mitly.us",29],["linkrex.net",29],["linx.cc",29],["oke.io",29],["dz4link.com",29],["linclik.com",29],["shrt10.com",29],["loptelink.com",29],["cut-fly.com",29],["linkfinal.com",29],["payskip.org",29],["cutpaid.com",29],["forexmab.com",29],["linkjust.com",29],["linkszia.co",29],["leechpremium.link",29],["icutlink.com",[29,133]],["stfly.me",29],["oncehelp.com",29],["bit-url.com",29],["rgl.vn",29],["reqlinks.net",29],["megaurl.in",29],["megafly.in",29],["bitlk.com",29],["qlinks.eu",29],["link.3dmili.com",29],["short-fly.com",29],["foxseotools.com",29],["pngit.live",29],["link.turkdown.com",29],["urlty.com",29],["7r6.com",29],["oko.sh",29],["ckk.ai",29],["fc.lc",29],["fstore.biz",29],["cuts-url.com",29],["eio.io",29],["exe.app",29],["exee.io",29],["exey.io",29],["skincarie.com",29],["exeo.app",29],["coinlyhub.com",[29,215]],["adsafelink.com",29],["aii.sh",29],["cybertechng.com",[29,224]],["owllink.net",29],["cutdl.xyz",29],["iir.ai",29],["shorteet.com",[29,243]],["sekilastekno.com",29],["smoner.com",29],["gplinks.co",29],["xpshort.com",29],["upshrink.com",29],["enit.in",[29,239]],["ez4short.com",29],["easysky.in",29],["veganab.co",29],["adrinolinks.in",29],["go.gyanitheme.com",29],["go.theforyou.in",29],["go.hipsonyc.com",29],["birdurls.com",29],["try2link.com",29],["jameeltips.us",29],["gainl.ink",29],["promo-visits.site",29],["satoshi-win.xyz",[29,266]],["shorterall.com",29],["encurtandourl.com",29],["forextrader.site",29],["postazap.com",29],["tinys.click",[29,224]],["cpm.icu",29],["easycut.io",29],["panyshort.link",29],["enagato.com",29],["pandaznetwork.com",29],["tii.la",29],["loan2host.com",29],["tei.ai",29],["tii.ai",29],["recipestutorials.com",29],["droplink.co",29],["oii.io",29],["du-link.in",29],["atglinks.com",29],["linkshrnk.com",29],["linksly.co",29],["pkr.pw",29],["imagenesderopaparaperros.com",29],["shortenbuddy.com",29],["gibit.xyz",29],["apksvip.com",29],["4cash.me",29],["namaidani.com",29],["teknomuda.com",29],["illink.net",29],["miuiku.com",29],["yourtechnology.online",29],["savelink.site",29],["apkshrt.com",29],["srts.me",29],["kutmoney.com",29],["kutt.io",29],["sanoybonito.club",29],["samaa-pro.com",29],["miklpro.com",29],["modapk.link",29],["shrinkforearn.in",29],["techyuth.xyz",29],["1shorten.com",29],["ccurl.net",29],["st23q.com",29],["beautyram.info",29],["viraloc.com",29],["kiiw.icu",29],["galaxy-link.space",29],["linkpoi.me",29],["usdshort.com",29],["bitcoinly.in",29],["menjelajahi.com",29],["pewgame.com",29],["yxoshort.com",29],["1link.vip",29],["haonguyen.top",29],["claimfreebits.com",29],["crazyblog.in",29],["gtlink.co",29],["link.tokenoto.com",29],["cutearn.net",29],["rshrt.com",29],["short.palmeratv.com",29],["filezipa.com",29],["dz-linkk.com",29],["theblissempire.com",29],["finanzas-vida.com",29],["adurly.cc",29],["pix4link.com",29],["paid4.link",29],["link.asiaon.top",29],["go.gets4link.com",29],["download.sharenulled.net",29],["beingtek.com",29],["shorturl.unityassets4free.com",29],["disheye.com",29],["techymedies.com",29],["techysuccess.com",29],["za.gl",[29,153]],["download.baominh.tech",29],["bblink.com",29],["linkbr.xyz",29],["myad.biz",29],["swzz.xyz",29],["vevioz.com",29],["charexempire.com",29],["clk.asia",29],["egfly.xyz",29],["linka.click",29],["sturls.com",29],["myshrinker.com",29],["go.adinsurance.xyz",29],["dash-free.com",[29,224]],["snowurl.com",[29,224]],["netfile.cc",29],["link.insurance-space.xyz",29],["link.insurglobal.xyz",29],["theconomy.me",29],["rajsayt.xyz",29],["rocklink.in",29],["adinsurance.xyz",29],["insurglobal.xyz",29],["techgeek.digital",29],["download3s.net",29],["shortx.net",29],["musicc.xyz",29],["shortawy.com",29],["tlin.me",29],["apprepack.com",29],["sh2rt.com",29],["up-load.one",29],["zuba.link",29],["linksfy.co",29],["news.speedynews.xyz",29],["golink.xaydungplus.com",29],["bestcash2020.com",29],["hoxiin.com",29],["technemo.xyz",29],["go.linkbnao.com",29],["link-yz.com",29],["paylinnk.com",29],["thizissam.in",29],["ier.ai",29],["bloggertheme.xyz",29],["adslink.pw",29],["novelssites.com",29],["links.medipost.org",29],["faucetcrypto.net",29],["short.freeltc.top",29],["trxking.xyz",29],["weadown.com",29],["m.bloggingguidance.com",29],["blog.onroid.com",29],["cutty.app",29],["link.codevn.net",29],["upfilesurls.com",29],["shareus.site",29],["link4rev.site",29],["bloginguru.xyz",29],["celinks.net",29],["c2g.at",29],["shortzu.icu",29],["bitcosite.com",[29,438]],["cryptosh.pro",29],["sigmalinks.in",29],["link68.net",29],["traffic123.net",29],["windowslite.net",[29,224]],["coinsl.click",29],["exalink.fun",29],["exego.app",[29,264]],["viewfr.com",29],["cl1ca.com",29],["4br.me",29],["fir3.net",29],["kiddyshort.com",29],["watchmygf.me",[30,57]],["camwhorez.tv",[30,43,94,95]],["fpo.xxx",[30,59]],["sexemix.com",30],["heavyfetish.com",[30,501]],["you-porn.com",32],["youporngay.com",32],["youpornru.com",32],["9908ww.com",32],["adelaidepawnbroker.com",32],["bztube.com",32],["hotovs.com",32],["insuredhome.org",32],["nudegista.com",32],["pornluck.com",32],["vidd.se",32],["pornhub.com",32],["pornerbros.com",33],["freep.com",33],["porn.com",36],["tune.pk",37],["noticias.gospelmais.com.br",38],["techperiod.com",38],["jacquieetmicheltv.net",[39,40]],["illicoporno.com",39],["lavoixdux.com",39],["tonpornodujour.com",39],["jacquieetmichel.net",39],["swame.com",39],["vosfemmes.com",39],["voyeurfrance.net",39],["viki.com",[41,42]],["sleazyneasy.com",[43,44,45]],["smutr.com",[43,211]],["yourporngod.com",[43,44]],["javbangers.com",[43,314]],["camfox.com",43],["camthots.tv",[43,127]],["shegotass.info",43],["amateur8.com",43],["bigtitslust.com",43],["ebony8.com",43],["freeporn8.com",43],["lesbian8.com",43],["maturetubehere.com",43],["sortporn.com",43],["webcamvau.com",43],["motherporno.com",[43,44,59,129]],["tktube.com",43],["theporngod.com",[43,44]],["pornsocket.com",46],["luxuretv.com",47],["porndig.com",[48,49]],["webcheats.com.br",50],["ceesty.com",[51,52]],["gestyy.com",[51,52]],["corneey.com",52],["destyy.com",52],["festyy.com",52],["sh.st",52],["angrybirdsnest.com",53],["zrozz.com",53],["clix4btc.com",53],["katfile.com",53],["4tests.com",53],["planet-explorers-isos.com",53],["business-standard.com",53],["goltelevision.com",53],["news-und-nachrichten.de",53],["laradiobbs.net",53],["urlaubspartner.net",53],["produktion.de",53],["cinemaxxl.de",53],["bladesalvador.com",53],["tempr.email",53],["trust.zone",53],["cshort.org",53],["friendproject.net",53],["covrhub.com",53],["planetsuzy.org",54],["empflix.com",55],["filespace.com",56],["transparentcalifornia.com",57],["deepbrid.com",58],["submityourflicks.com",59],["3movs.com",59],["cambay.tv",[59,111,127,129]],["bravoerotica.net",[59,129]],["youx.xxx",59],["camclips.tv",[59,211]],["camflow.tv",[59,111,129,175,247]],["camhoes.tv",[59,111,127,129,175,247]],["xmegadrive.com",59],["xxxymovies.com",59],["xxxshake.com",59],["gayck.com",59],["xhand.com",[59,129]],["analdin.com",[59,129]],["webnovel.com",60],["videosgay.me",[61,62]],["wishfast.top",62],["schwaebische.de",63],["mercurynews.com",64],["chicoer.com",64],["dailybreeze.com",64],["dailybulletin.com",64],["dailynews.com",64],["delcotimes.com",64],["eastbaytimes.com",64],["macombdaily.com",64],["ocregister.com",64],["pasadenastarnews.com",64],["pe.com",64],["presstelegram.com",64],["redlandsdailyfacts.com",64],["reviewjournal.com",64],["santacruzsentinel.com",64],["saratogian.com",64],["sentinelandenterprise.com",64],["sgvtribune.com",64],["tampabay.com",64],["times-standard.com",64],["theoaklandpress.com",64],["trentonian.com",64],["twincities.com",64],["whittierdailynews.com",64],["bostonherald.com",64],["dailycamera.com",64],["sbsun.com",64],["dailydemocrat.com",64],["montereyherald.com",64],["orovillemr.com",64],["record-bee.com",64],["redbluffdailynews.com",64],["reporterherald.com",64],["thereporter.com",64],["timescall.com",64],["timesheraldonline.com",64],["ukiahdailyjournal.com",64],["dailylocal.com",64],["8tracks.com",65],["revealname.com",66],["fcportables.com",[67,68]],["golfchannel.com",70],["telemundodeportes.com",70],["stream.nbcsports.com",70],["gamcore.com",71],["porcore.com",71],["69games.xxx",71],["javmix.app",71],["tecknity.com",72],["haaretz.co.il",73],["haaretz.com",73],["hungama.com",73],["a-o.ninja",73],["anime-odcinki.pl",73],["kumpulmanga.org",73],["shortgoo.blogspot.com",73],["tonanmedia.my.id",[73,453]],["yurasu.xyz",73],["isekaipalace.com",73],["megadescarga.net",[74,75,76,77]],["megadescargas.net",[74,75,76,77]],["vikistream.com",78],["eplayer.click",[78,79]],["mega4upload.com",[79,85]],["ennovelas.com",[79,85]],["n-tv.de",80],["brigitte.de",81],["stern.de",81],["foxsports.com.au",82],["canberratimes.com.au",82],["thesimsresource.com",83],["bdnewszh.com",85],["streamservicehd.click",85],["timeforbitco.in",86],["worldofbitco.in",[86,98]],["weatherx.co.in",[86,98]],["getyourbitco.in",86],["sunbtc.space",86],["ctrl.blog",87],["sportlife.es",88],["finofilipino.org",89],["acortarm.xyz",90],["acortame.xyz",90],["speedtest.net",91],["mysflink.blogspot.com",92],["assia.tv",93],["assia4.com",93],["assia24.com",93],["cwtvembeds.com",[95,128]],["camlovers.tv",95],["porntn.com",95],["pornissimo.org",95],["sexcams-24.com",[95,111]],["watchporn.to",[95,111]],["camwhorez.video",95],["footstockings.com",[96,111]],["sbs.com.au",99],["ojogos.com.br",101],["powforums.com",102],["supforums.com",102],["studybullet.com",102],["usgamer.net",103],["recordonline.com",103],["freebitcoin.win",105],["e-monsite.com",105],["coindice.win",105],["sport-tv-guide.live",106],["temp-mails.com",107],["freiepresse.de",108],["investing.com",109],["camhub.cc",111],["love4porn.com",111],["thotvids.com",111],["watchmdh.to",111],["celebwhore.com",111],["cluset.com",111],["4kporn.xxx",111],["xhomealone.com",111],["lusttaboo.com",[111,385]],["hentai-moon.com",111],["mp3fiber.com",112],["suedkurier.de",113],["anysex.com",115],["vlist.se",116],["pornve.com",117],["coolrom.com.au",118],["pornohirsch.net",119],["marie-claire.es",120],["gamezhero.com",120],["flashgirlgames.com",120],["onlinesudoku.games",120],["mpg.football",120],["sssam.com",120],["globalnews.ca",121],["drinksmixer.com",122],["leitesculinaria.com",122],["fupa.net",123],["browardpalmbeach.com",124],["dallasobserver.com",124],["houstonpress.com",124],["miaminewtimes.com",124],["phoenixnewtimes.com",124],["westword.com",124],["nhentai.net",125],["nowtv.com.tr",126],["caminspector.net",127],["camwhoreshd.com",127],["camgoddess.tv",127],["gay4porn.com",129],["mypornhere.com",129],["mediapason.it",130],["linkspaid.com",130],["tuotromedico.com",130],["neoteo.com",130],["phoneswiki.com",130],["celebmix.com",130],["myneobuxportal.com",130],["oyungibi.com",130],["25yearslatersite.com",130],["jeshoots.com",131],["techhx.com",131],["karanapk.com",131],["videogreen.xyz",132],["playembed.xyz",132],["javhdporn.net",132],["javstream.top",132],["flashplayer.fullstacks.net",134],["cloudapps.herokuapp.com",134],["youfiles.herokuapp.com",134],["temp-mail.org",135],["comnuan.com",136],["veedi.com",137],["battleboats.io",137],["fruitlab.com",138],["haddoz.net",138],["garoetpos.com",138],["stiletv.it",139],["hqtv.biz",141],["liveuamap.com",142],["muvibg.com",142],["linksht.com",[143,144]],["audycje.tokfm.pl",145],["hulu.com",[146,147,148]],["shush.se",149],["emurom.net",150],["allkpop.com",151],["azmath.info",152],["downfile.site",152],["downphanmem.com",152],["expertvn.com",152],["memangbau.com",152],["trangchu.news",152],["aztravels.net",152],["adfoc.us",152],["theringtonesworld.in",152],["jobkijankari.in",152],["newsloti.com",152],["newzwala.co.in",152],["iplquotes.com",152],["kaisekareblog.com",152],["w3hindi.in",152],["jobwaala.in",152],["nhmgujarat.in",152],["minijankari.com",152],["news36tech.com",152],["iisfvirtual.in",152],["starxinvestor.com",152],["myprivatejobs.com",[152,262]],["wikitraveltips.com",[152,262]],["amritadrino.com",[152,262]],["sahlmarketing.net",152],["filmypoints.in",152],["quotesopia.com",152],["techacode.com",152],["trickms.com",152],["sptfy.be",152],["streamcheck.link",152],["mcafee-com.com",[152,264]],["pickcrackpasswords.blogspot.com",154],["kfrfansub.com",155],["thuglink.com",155],["voipreview.org",155],["hanime.tv",156],["pogo.com",157],["cloudvideo.tv",158],["legionjuegos.org",159],["legionpeliculas.org",159],["legionprogramas.org",159],["16honeys.com",160],["elespanol.com",161],["remodelista.com",162],["coolmathgames.com",[163,164,165,518]],["audiofanzine.com",166],["noweconomy.live",168],["howifx.com",[168,239]],["vavada5com.com",168],["hitokin.net",169],["elil.cc",170],["developerinsider.co",171],["ilprimatonazionale.it",172],["hotabis.com",172],["root-nation.com",172],["italpress.com",172],["airsoftmilsimnews.com",172],["artribune.com",172],["thehindu.com",173],["cambro.tv",[174,175]],["nibelungen-kurier.de",176],["noz.de",177],["pianetamountainbike.it",179],["barchart.com",180],["modelisme.com",181],["parasportontario.ca",181],["prescottenews.com",181],["nrj-play.fr",182],["oeffentlicher-dienst.info",183],["hackingwithreact.com",184],["gutekueche.at",185],["eplfootballmatch.com",186],["peekvids.com",187],["playvids.com",187],["pornflip.com",187],["redensarten-index.de",188],["vw-page.com",189],["iptvtools.net",190],["viz.com",[191,192]],["queenfaucet.website",193],["0rechner.de",194],["configspc.com",195],["xopenload.me",195],["uptobox.com",195],["uptostream.com",195],["onepiece-tube.com",196],["japgay.com",197],["mega-debrid.eu",198],["dreamdth.com",199],["diaridegirona.cat",201],["diariodeibiza.es",201],["diariodemallorca.es",201],["diarioinformacion.com",201],["eldia.es",201],["emporda.info",201],["farodevigo.es",201],["laopinioncoruna.es",201],["laopiniondemalaga.es",201],["laopiniondemurcia.es",201],["laopiniondezamora.es",201],["laprovincia.es",201],["levante-emv.com",201],["mallorcazeitung.es",201],["regio7.cat",201],["superdeporte.es",201],["playpaste.com",202],["player.rtl2.de",203],["freetutorialsus.com",204],["vidlii.com",[204,220]],["iammagnus.com",204],["dailyvideoreports.net",204],["unityassets4free.com",204],["cnbc.com",205],["puzzles.msn.com",206],["metro.us",206],["newsobserver.com",206],["arkadiumhosted.com",206],["firefaucet.win",208],["55k.io",209],["filelions.online",209],["stmruby.com",209],["direct-link.net",210],["direkt-wissen.com",210],["link-to.net",210],["fullhdxxx.com",212],["pornclassic.tube",213],["tubepornclassic.com",213],["etonline.com",214],["creatur.io",214],["drphil.com",214],["urbanmilwaukee.com",214],["ontiva.com",214],["hideandseek.world",214],["myabandonware.com",214],["kendam.com",214],["wttw.com",214],["synonyms.com",214],["definitions.net",214],["hostmath.com",214],["camvideoshub.com",214],["minhaconexao.com.br",214],["home-made-videos.com",216],["pxrnxx.xyz",216],["amateur-couples.com",216],["slutdump.com",216],["produsat.com",218],["12thman.com",220],["acusports.com",220],["atlantic10.com",220],["auburntigers.com",220],["baylorbears.com",220],["bceagles.com",220],["bgsufalcons.com",220],["big12sports.com",220],["bigten.org",220],["bradleybraves.com",220],["butlersports.com",220],["cmumavericks.com",220],["conferenceusa.com",220],["cyclones.com",220],["dartmouthsports.com",220],["daytonflyers.com",220],["dbupatriots.com",220],["dbusports.com",220],["denverpioneers.com",220],["fduknights.com",220],["fgcuathletics.com",220],["fightinghawks.com",220],["fightingillini.com",220],["floridagators.com",220],["friars.com",220],["friscofighters.com",220],["gamecocksonline.com",220],["goarmywestpoint.com",220],["gobison.com",220],["goblueraiders.com",220],["gobobcats.com",220],["gocards.com",220],["gocreighton.com",220],["godeacs.com",220],["goexplorers.com",220],["goetbutigers.com",220],["gofrogs.com",220],["gogriffs.com",220],["gogriz.com",220],["golobos.com",220],["gomarquette.com",220],["gopack.com",220],["gophersports.com",220],["goprincetontigers.com",220],["gopsusports.com",220],["goracers.com",220],["goshockers.com",220],["goterriers.com",220],["gotigersgo.com",220],["gousfbulls.com",220],["govandals.com",220],["gowyo.com",220],["goxavier.com",220],["gozags.com",220],["gozips.com",220],["griffinathletics.com",220],["guhoyas.com",220],["gwusports.com",220],["hailstate.com",220],["hamptonpirates.com",220],["hawaiiathletics.com",220],["hokiesports.com",220],["huskers.com",220],["icgaels.com",220],["iuhoosiers.com",220],["jsugamecocksports.com",220],["longbeachstate.com",220],["loyolaramblers.com",220],["lrtrojans.com",220],["lsusports.net",220],["morrisvillemustangs.com",220],["msuspartans.com",220],["muleriderathletics.com",220],["mutigers.com",220],["navysports.com",220],["nevadawolfpack.com",220],["niuhuskies.com",220],["nkunorse.com",220],["nuhuskies.com",220],["nusports.com",220],["okstate.com",220],["olemisssports.com",220],["omavs.com",220],["ovcsports.com",220],["owlsports.com",220],["purduesports.com",220],["redstormsports.com",220],["richmondspiders.com",220],["sfajacks.com",220],["shupirates.com",220],["siusalukis.com",220],["smcgaels.com",220],["smumustangs.com",220],["soconsports.com",220],["soonersports.com",220],["themw.com",220],["tulsahurricane.com",220],["txst.com",220],["txstatebobcats.com",220],["ubbulls.com",220],["ucfknights.com",220],["ucirvinesports.com",220],["uconnhuskies.com",220],["uhcougars.com",220],["uicflames.com",220],["umterps.com",220],["uncwsports.com",220],["unipanthers.com",220],["unlvrebels.com",220],["uoflsports.com",220],["usdtoreros.com",220],["utahstateaggies.com",220],["utepathletics.com",220],["utrockets.com",220],["uvmathletics.com",220],["uwbadgers.com",220],["villanova.com",220],["wkusports.com",220],["wmubroncos.com",220],["woffordterriers.com",220],["1pack1goal.com",220],["bcuathletics.com",220],["bubraves.com",220],["goblackbears.com",220],["golightsgo.com",220],["gomcpanthers.com",220],["goutsa.com",220],["mercerbears.com",220],["pirateblue.com",220],["pirateblue.net",220],["pirateblue.org",220],["quinnipiacbobcats.com",220],["towsontigers.com",220],["tribeathletics.com",220],["tribeclub.com",220],["utepminermaniacs.com",220],["utepminers.com",220],["wkutickets.com",220],["aopathletics.org",220],["atlantichockeyonline.com",220],["bigsouthnetwork.com",220],["bigsouthsports.com",220],["chawomenshockey.com",220],["dbupatriots.org",220],["drakerelays.org",220],["ecac.org",220],["ecacsports.com",220],["emueagles.com",220],["emugameday.com",220],["gculopes.com",220],["godrakebulldog.com",220],["godrakebulldogs.com",220],["godrakebulldogs.net",220],["goeags.com",220],["goislander.com",220],["goislanders.com",220],["gojacks.com",220],["gomacsports.com",220],["gseagles.com",220],["hubison.com",220],["iowaconference.com",220],["ksuowls.com",220],["lonestarconference.org",220],["mascac.org",220],["midwestconference.org",220],["mountaineast.org",220],["niu-pack.com",220],["nulakers.ca",220],["oswegolakers.com",220],["ovcdigitalnetwork.com",220],["pacersports.com",220],["rmacsports.org",220],["rollrivers.com",220],["samfordsports.com",220],["uncpbraves.com",220],["usfdons.com",220],["wiacsports.com",220],["alaskananooks.com",220],["broncathleticfund.com",220],["cameronaggies.com",220],["columbiacougars.com",220],["etownbluejays.com",220],["gobadgers.ca",220],["golancers.ca",220],["gometrostate.com",220],["gothunderbirds.ca",220],["kentstatesports.com",220],["lehighsports.com",220],["lopers.com",220],["lycoathletics.com",220],["lycomingathletics.com",220],["maraudersports.com",220],["mauiinvitational.com",220],["msumavericks.com",220],["nauathletics.com",220],["nueagles.com",220],["nwusports.com",220],["oceanbreezenyc.org",220],["patriotathleticfund.com",220],["pittband.com",220],["principiaathletics.com",220],["roadrunnersathletics.com",220],["sidearmsocial.com",220],["snhupenmen.com",220],["stablerarena.com",220],["stoutbluedevils.com",220],["uwlathletics.com",220],["yumacs.com",220],["collegefootballplayoff.com",220],["csurams.com",220],["cubuffs.com",220],["gobearcats.com",220],["gohuskies.com",220],["mgoblue.com",220],["osubeavers.com",220],["pittsburghpanthers.com",220],["rolltide.com",220],["texassports.com",220],["thesundevils.com",220],["uclabruins.com",220],["wvuathletics.com",220],["wvusports.com",220],["arizonawildcats.com",220],["calbears.com",220],["cuse.com",220],["georgiadogs.com",220],["goducks.com",220],["goheels.com",220],["gostanford.com",220],["insidekstatesports.com",220],["insidekstatesports.info",220],["insidekstatesports.net",220],["insidekstatesports.org",220],["k-stateathletics.com",220],["k-statefootball.net",220],["k-statefootball.org",220],["k-statesports.com",220],["k-statesports.net",220],["k-statesports.org",220],["k-statewomenshoops.com",220],["k-statewomenshoops.net",220],["k-statewomenshoops.org",220],["kstateathletics.com",220],["kstatefootball.net",220],["kstatefootball.org",220],["kstatesports.com",220],["kstatewomenshoops.com",220],["kstatewomenshoops.net",220],["kstatewomenshoops.org",220],["ksuathletics.com",220],["ksusports.com",220],["scarletknights.com",220],["showdownforrelief.com",220],["syracusecrunch.com",220],["texastech.com",220],["theacc.com",220],["ukathletics.com",220],["usctrojans.com",220],["utahutes.com",220],["utsports.com",220],["wsucougars.com",220],["mangadods.com",220],["tricksplit.io",220],["fangraphs.com",221],["4players.de",[222,310]],["buffed.de",222],["gamesaktuell.de",222],["gamezone.de",222],["pcgames.de",222],["videogameszone.de",222],["planetaminecraft.com",223],["cravesandflames.com",224],["codesnse.com",224],["link.paid4file.com",224],["flyad.vip",224],["lapresse.ca",225],["kolyoom.com",226],["ilovephd.com",226],["negumo.com",227],["games.wkb.jp",[228,229]],["channelmyanmar.org",[230,231]],["u-s-news.com",231],["fandom.com",[232,536,537]],["kenshi.fandom.com",233],["hausbau-forum.de",234],["fake-it.ws",235],["laksa19.github.io",236],["1shortlink.com",237],["nesia.my.id",238],["makemoneywithurl.com",239],["junkyponk.com",239],["healthfirstweb.com",239],["vocalley.com",239],["yogablogfit.com",239],["en.financerites.com",239],["blogtechh.com",239],["host2loan.com",239],["resetoff.pl",240],["sexodi.com",240],["cdn77.org",241],["howtofixwindows.com",242],["3sexporn.com",243],["momxxxsex.com",243],["myfreevintageporn.com",243],["penisbuyutucum.net",243],["lightnovelworld.com",244],["ujszo.com",245],["newsmax.com",246],["bobs-tube.com",247],["nadidetarifler.com",248],["siz.tv",248],["suzylu.co.uk",[249,250]],["onworks.net",251],["yabiladi.com",251],["downloadsoft.net",252],["pixsera.net",253],["testlanguages.com",254],["newsinlevels.com",254],["videosinlevels.com",254],["ultimate-guitar.com",255],["teachmemicro.com",256],["willcycle.com",256],["2ndrun.tv",256],["rackusreads.com",256],["xyzsports111.xyz",[257,258,259]],["xyzsports112.xyz",[257,258,259]],["xyzsports113.xyz",[257,258,259]],["xyzsports114.xyz",[257,258,259]],["xyzsprtsfrmr1.site",[257,258,259]],["xyzsprtsfrmr2.site",[257,258,259]],["claimbits.net",260],["sexyscope.net",261],["luckydice.net",262],["adarima.org",262],["tieutietkiem.com",262],["weatherwx.com",262],["sattaguess.com",262],["winshell.de",262],["rosasidan.ws",262],["modmakers.xyz",262],["gamepure.in",262],["warrenrahul.in",262],["austiblox.net",262],["upiapi.in",262],["myownguess.in",262],["networkhint.com",262],["watchhentai.net",262],["thichcode.net",262],["texturecan.com",262],["tikmate.app",[262,490]],["4funbox.com",263],["nephobox.com",263],["1024tera.com",263],["btcbitco.in",[264,265]],["btcsatoshi.net",264],["cempakajaya.com",264],["crypto4yu.com",264],["readbitcoin.org",264],["wiour.com",264],["finish.addurl.biz",264],["aiimgvlog.fun",[264,269]],["exactpay.online",264],["kiddyearner.com",264],["blog.cryptowidgets.net",265],["blog.insurancegold.in",265],["blog.wiki-topia.com",265],["blog.coinsvalue.net",265],["blog.cookinguide.net",265],["blog.freeoseocheck.com",265],["blog24.me",265],["rsadnetworkinfo.com",265],["rsinsuranceinfo.com",265],["rsfinanceinfo.com",265],["rsgamer.app",265],["rssoftwareinfo.com",265],["rshostinginfo.com",265],["rseducationinfo.com",265],["homeairquality.org",267],["faucettronn.click",267],["ticketmaster.sg",267],["bildirim.link",268],["appsbull.com",270],["diudemy.com",270],["maqal360.com",270],["sinonimos.de",[271,272]],["antonimos.de",[271,272]],["tiktokcounter.net",271],["tiktokrealtime.com",271],["quesignifi.ca",[271,273]],["lifesurance.info",274],["infokeeda.xyz",275],["arcai.com",276],["my-code4you.blogspot.com",277],["vlxxs.net",278],["rapelust.com",278],["vtube.to",278],["vtplay.net",278],["desitelugusex.com",278],["xvideos-downloader.net",278],["xxxvideotube.net",278],["sdefx.cloud",278],["nozomi.la",278],["moviesonlinefree.net",278],["flickr.com",279],["firefile.cc",280],["pestleanalysis.com",280],["kochamjp.pl",280],["tutorialforlinux.com",280],["whatsaero.com",280],["animeblkom.net",[280,296]],["blkom.com",280],["globes.co.il",[281,282]],["jardiner-malin.fr",283],["tw-calc.net",284],["ohmybrush.com",285],["talkceltic.net",286],["mentalfloss.com",287],["uprafa.com",288],["cube365.net",289],["nightfallnews.com",[290,291]],["wwwfotografgotlin.blogspot.com",292],["freelistenonline.com",292],["badassdownloader.com",293],["quickporn.net",294],["yellowbridge.com",295],["aosmark.com",297],["atozmath.com",[299,300,301,302,303,304,305]],["newyorker.com",306],["brighteon.com",307],["more.tv",308],["video1tube.com",309],["alohatube.xyz",309],["fshost.me",311],["link.cgtips.org",312],["hentaicloud.com",313],["netfapx.com",315],["paperzonevn.com",317],["hentaienglish.com",318],["hentaiporno.xxx",318],["venge.io",[319,320]],["btcbux.io",321],["its.porn",[322,323]],["atv.at",324],["kusonime.com",325],["jetpunk.com",327],["imgur.com",328],["hentai-party.com",329],["hentaicomics.pro",329],["xxx-comics.pro",329],["genshinimpactcalculator.com",332],["mysexgames.com",333],["embed.indavideo.hu",336],["coinurl.net",[337,338]],["gdr-online.com",339],["mmm.dk",340],["iqiyi.com",[341,342,483]],["m.iqiyi.com",343],["japopav.tv",344],["lvturbo.com",344],["nbcolympics.com",345],["apkhex.com",346],["indiansexstories2.net",347],["issstories.xyz",347],["1340kbbr.com",348],["gorgeradio.com",348],["kduk.com",348],["kedoam.com",348],["kejoam.com",348],["kelaam.com",348],["khsn1230.com",348],["kjmx.rocks",348],["kloo.com",348],["klooam.com",348],["klykradio.com",348],["kmed.com",348],["kmnt.com",348],["kool991.com",348],["kpnw.com",348],["kppk983.com",348],["krktcountry.com",348],["ktee.com",348],["kwro.com",348],["kxbxfm.com",348],["thevalley.fm",348],["dsocker1234.blogspot.com",349],["surfline.com",[350,370]],["blick.ch",351],["mgnet.xyz",352],["designtagebuch.de",353],["pixroute.com",354],["uploady.io",355],["calculator-online.net",356],["porngames.club",357],["sexgames.xxx",357],["111.90.159.132",358],["battleplan.news",358],["mobile-tracker-free.com",359],["pfps.gg",360],["ac-illust.com",[361,362]],["photo-ac.com",[361,362]],["social-unlock.com",363],["ninja.io",364],["sourceforge.net",365],["samfirms.com",366],["banned.video",367],["conspiracyfact.info",367],["freeworldnews.tv",367],["madmaxworld.tv",367],["huffpost.com",368],["ingles.com",369],["spanishdict.com",369],["play.tv3.ee",371],["play.tv3.lt",371],["play.tv3.lv",371],["tv3play.skaties.lv",371],["trendyoum.com",372],["bulbagarden.net",373],["doomovie-hd.live",374],["madoohd.com",374],["moviestars.to",375],["hollywoodlife.com",376],["searchresults.cc",377],["mat6tube.com",378],["textstudio.co",379],["newtumbl.com",380],["nevcoins.club",382],["mail.com",383],["erome.com",386],["oggi.it",[387,388]],["manoramamax.com",387],["video.gazzetta.it",[387,388]],["mangakita.id",389],["mangakita.net",389],["poscishd.online",390],["avpgalaxy.net",391],["mhma12.tech",392],["panda-novel.com",393],["zebranovel.com",393],["lightsnovel.com",393],["eaglesnovel.com",393],["pandasnovel.com",393],["panel.freemcserver.net",394],["zadfaucet.com",395],["ewrc-results.com",396],["kizi.com",397],["cyberscoop.com",398],["fedscoop.com",398],["canale.live",399],["mafiatown.pl",[400,401]],["jeep-cj.com",402],["sponsorhunter.com",403],["cloudcomputingtopics.net",404],["likecs.com",405],["tiscali.it",406],["linkspy.cc",407],["tutelehd3.xyz",408],["dirty.pink",[409,410,411]],["adshnk.com",412],["chattanoogan.com",413],["adsy.pw",414],["playstore.pw",414],["socialmediagirls.com",415],["windowspro.de",416],["snapinsta.app",417],["tvtv.ca",418],["tvtv.us",418],["mydaddy.cc",419],["roadtrippin.fr",420],["redketchup.io",[421,422,423]],["anyporn.com",[424,440]],["bravoporn.com",424],["bravoteens.com",424],["crocotube.com",424],["hellmoms.com",424],["hellporno.com",424],["sex3.com",424],["tubewolf.com",424],["xbabe.com",424],["xcum.com",424],["zedporn.com",424],["imagetotext.info",425],["infokik.com",426],["freepik.com",427],["ddwloclawek.pl",[428,429]],["deezer.com",430],["my-subs.co",431],["plaion.com",432],["rapid-cloud.co",433],["in-jpn.com",433],["slideshare.net",[434,435]],["ustreasuryyieldcurve.com",436],["businesssoftwarehere.com",437],["goo.st",437],["freevpshere.com",437],["softwaresolutionshere.com",437],["easymc.io",441],["staige.tv",442],["androidadult.com",443],["streamvid.net",444],["watchtv24.com",445],["cellmapper.net",446],["medscape.com",447],["newscon.org",[448,449]],["arkadium.com",450],["app.blubank.com",451],["sportdeutschland.tv",452],["kcra.com",452],["wcvb.com",452],["ccthesims.com",454],["chromeready.com",454],["coursedrive.org",454],["dtbps3games.com",454],["illustratemagazine.com",454],["uknip.co.uk",454],["vod.pl",455],["megadrive-emulator.com",456],["animesaga.in",459],["moviesapi.club",459],["bestx.stream",459],["watchx.top",459],["digimanie.cz",460],["svethardware.cz",460],["srvy.ninja",461],["drawer-opportunity-i-243.site",462],["tchatche.com",463],["ozulmanga.com",464],["edmdls.com",465],["freshremix.net",465],["scenedl.org",465],["trakt.tv",[466,467,468]],["shroomers.app",469],["di.fm",[470,471,472]],["pc-builds.com",473],["qtoptens.com",473],["reuters.com",473],["today.com",473],["videogamer.com",473],["wrestlinginc.com",473],["gbatemp.net",473],["techedubyte.com",474],["movie-th.tv",475],["iwanttfc.com",476],["nutraingredients-asia.com",477],["nutraingredients-latam.com",477],["nutraingredients-usa.com",477],["nutraingredients.com",477],["livesportsclub.me",478],["rogstream.fun",478],["ozulscansen.com",479],["fitnessbr.click",480],["minhareceita.xyz",480],["doomied.monster",481],["lookmovie2.to",481],["royalroad.com",482],["biletomat.pl",484],["hextank.io",[486,487]],["gofilmizle.com",[488,489]],["sagewater.com",491],["redlion.net",491],["satdl.com",492],["vidstreaming.xyz",493],["myradioonline.pl",494],["teamskeet.com",495],["tacobell.com",497],["webtoons.com",[498,499]],["zefoy.com",500],["natgeotv.com",502],["br.de",503],["pasteboard.co",504],["clickhole.com",505],["deadspin.com",505],["gizmodo.com",505],["jalopnik.com",505],["jezebel.com",505],["kotaku.com",505],["lifehacker.com",505],["splinternews.com",505],["theinventory.com",505],["theonion.com",505],["theroot.com",505],["thetakeout.com",505],["pewresearch.org",505],["los40.com",[506,507]],["as.com",507],["telegraph.co.uk",[508,509]],["poweredbycovermore.com",[508,555]],["lumens.com",[508,555]],["verizon.com",510],["humanbenchmark.com",511],["politico.com",512],["officedepot.co.cr",[513,514]],["usnews.com",517],["factable.com",519],["zee5.com",520],["gala.fr",521],["geo.fr",521],["voici.fr",521],["gloucestershirelive.co.uk",522],["arsiv.mackolik.com",523],["jacksonguitars.com",524],["scandichotels.com",525],["stylist.co.uk",526],["nettiauto.com",527],["thaiairways.com",[528,529]],["cerbahealthcare.it",[530,531]],["futura-sciences.com",[530,546]],["tiendaenlinea.claro.com.ni",[532,533]],["tieba.baidu.com",534],["linktr.ee",535],["grasshopper.com",[538,539]],["epson.com.cn",[540,541]],["oe24.at",[542,543]],["szbz.de",542],["platform.autods.com",[544,545]],["wikihow.com",547],["citibank.com.sg",548],["uol.com.br",[549,550,551]],["gazzetta.gr",552],["digicol.dpm.org.cn",[553,554]],["virginmediatelevision.ie",556],["larazon.es",[557,558]],["waitrosecellar.com",[559,560,561]],["kicker.de",562],["sharpen-free-design-generator.netlify.app",[563,564]],["help.cashctrl.com",[565,566]],["commande.rhinov.pro",[567,568]],["ecom.wixapps.net",[567,568]],["tipranks.com",[569,570]],["iceland.co.uk",[571,572,573]],["socket.pearsoned.com",574],["tntdrama.com",[575,576]],["mobile.de",[577,578]],["ioe.vn",[579,580]],["free-mp3-download.net",582],["weather.com",[583,584]],["ubereats.com",[583,584]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster42",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["sxyprn",25],["hqq",[26,27]],["waaw",[27,28]],["younetu",27],["123link",29],["adshort",29],["linkshorts",29],["adsrt",29],["vinaurl",29],["adfloz",29],["dutchycorp",29],["shortearn",29],["pingit",29],["shrink",29],["tmearn",29],["megalink",29],["miniurl",29],["clk",29],["pureshort",29],["shrinke",29],["shrinkme",29],["pcprogramasymas",29],["link1s",29],["shortzzy",29],["shorttey",[29,214]],["lite-link",29],["adcorto",29],["zshort",29],["upfiles",29],["linkfly",29],["wplink",29],["seulink",29],["encurtalink",29],["camwhores",[30,43,94,95,96]],["tube8",[31,32]],["youporn",32],["redtube",32],["pornhub",[32,200]],["upornia",[34,35]],["xtits",[59,129]],["streamwish",[61,62]],["pouvideo",69],["povvideo",69],["povw1deo",69],["povwideo",69],["powv1deo",69],["powvibeo",69],["powvideo",69],["powvldeo",69],["acortalo",[74,75,76,77]],["acortar",[74,75,76,77]],["plyjam",[78,79]],["fxporn69",84],["vipbox",85],["viprow",85],["desbloqueador",90],["xberuang",92],["teknorizen",92],["kickassanime",97],["subtorrents",100],["subtorrents1",100],["newpelis",100],["pelix",100],["allcalidad",100],["infomaniakos",100],["filecrypt",104],["tornadomovies",110],["sexwebvideo",111],["mangovideo",111],["icdrama",116],["mangasail",116],["file4go",118],["asianclub",132],["anitube",138],["mixdrop",140],["azsoft",152],["uploadev",167],["ver-pelis-online",178],["ancient-origins",186],["spankbang",207],["lookcam",214],["lootlinks",214],["dpstream",217],["bluemediafiles",219],["docer",240],["terabox",263],["skymovieshd",278],["dvdplay",278],["ctrlv",298],["crackstreams",316],["123movieshd",326],["uproxy",330],["animesa",331],["cinecalidad",[334,335]],["apkmaven",381],["gmx",384],["gamereactor",439],["tvhay",[457,458]],["lookmovie",481],["lk21official",485],["www.google",496],["officedepot",[515,516]],["dropgalaxy",581]]);

const exceptionsMap = new Map([["pingit.com",[29]],["pingit.me",[29]],["lookmovie.studio",[481]]]);

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
