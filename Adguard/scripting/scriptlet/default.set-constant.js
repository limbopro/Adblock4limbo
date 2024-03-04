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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["gtag","true","as","function"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["acdl","noopFunc"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["isAdClickDone","true"],["waitTime441","0"],["waitTime","0"],["showadas","true"],["iktimer","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["findCMP","noopFunc"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["supportedBrowsers",""],["ytInitialPlayerResponse.playerConfig.ssapConfig","undefined"],["ytInitialPlayerResponse.streamingData.serverAbrStreamingUrl","undefined"],["HTMLScriptElement.prototype.onerror","noopFunc"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3,582,583]],["music.youtube.com",[0,1,2,3,582,583]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,582,583]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,250]],["gadgets.es",[11,250]],["amateurporn.co",[11,110]],["wiwo.de",12],["masteranime.tv",13],["fullxh.com",14],["megaxh.com",14],["movingxh.world",14],["taoxh.life",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhtree.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["alphaporno.com",[17,422]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,113]],["familyporn.tv",17],["cloudemb.com",[17,341]],["sbplay1.com",17],["id45.cyou",17],["85tube.com",[17,95]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,27]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["apinchcaseation.com",21],["bigclatterhomesguideservice.com",21],["bradleyviewdoctor.com",21],["denisegrowthwide.com",21],["edwardarriveoften.com",21],["housecardsummerbutton.com",21],["jamiesamewalk.com",21],["jayservicestuff.com",21],["johntryopen.com",21],["kennethofficialitem.com",21],["lukecomparetwo.com",21],["markstyleall.com",21],["morganoperationface.com",21],["nectareousoverelate.com",21],["paulkitchendark.com",21],["sandrataxeight.com",21],["seanshowcould.com",21],["sharonwhiledemocratic.com",21],["stevenimaginelittle.com",21],["strawberriesporail.com",21],["timberwoodanotia.com",21],["tinycat-voe-fashion.com",21],["troyyourlead.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["voe.sx",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",27],["player.tabooporns.com",27],["x69.ovh",27],["wiztube.xyz",27],["multiup.us",27],["rpdrlatino.live",27],["peliculas8k.com",[27,28]],["video.q34r.org",27],["69x.online",27],["czxxx.org",27],["vvtplayer.online",27],["netu.ac",27],["dirtyvideo.fun",28],["adbull.org",29],["mitly.us",29],["linkrex.net",29],["linx.cc",29],["oke.io",29],["dz4link.com",29],["linclik.com",29],["shrt10.com",29],["loptelink.com",29],["cut-fly.com",29],["linkfinal.com",29],["payskip.org",29],["cutpaid.com",29],["forexmab.com",29],["linkjust.com",29],["linkszia.co",29],["leechpremium.link",29],["icutlink.com",[29,131]],["stfly.me",29],["oncehelp.com",29],["rgl.vn",29],["reqlinks.net",29],["megaurl.in",29],["megafly.in",29],["bitlk.com",29],["qlinks.eu",29],["link.3dmili.com",29],["short-fly.com",29],["foxseotools.com",29],["pngit.live",29],["link.turkdown.com",29],["urlty.com",29],["7r6.com",29],["oko.sh",29],["ckk.ai",29],["fc.lc",29],["fstore.biz",29],["cuts-url.com",29],["eio.io",29],["exe.app",29],["exee.io",29],["exey.io",29],["skincarie.com",29],["exeo.app",29],["coinlyhub.com",[29,209]],["adsafelink.com",29],["aii.sh",29],["cybertechng.com",[29,218]],["owllink.net",29],["cutdl.xyz",29],["iir.ai",29],["shorteet.com",[29,237]],["sekilastekno.com",29],["smoner.com",29],["gplinks.co",29],["xpshort.com",29],["upshrink.com",29],["enit.in",[29,233]],["ez4short.com",29],["easysky.in",29],["veganab.co",29],["adrinolinks.in",29],["go.gyanitheme.com",29],["go.theforyou.in",29],["go.hipsonyc.com",29],["birdurls.com",29],["try2link.com",29],["jameeltips.us",29],["gainl.ink",29],["promo-visits.site",29],["satoshi-win.xyz",[29,262]],["shorterall.com",29],["encurtandourl.com",29],["forextrader.site",29],["postazap.com",29],["tinys.click",[29,218]],["cpm.icu",29],["easycut.io",29],["panyshort.link",29],["enagato.com",29],["pandaznetwork.com",29],["tii.la",29],["loan2host.com",29],["tei.ai",29],["tii.ai",29],["recipestutorials.com",29],["droplink.co",29],["oii.io",29],["du-link.in",29],["atglinks.com",29],["linksly.co",29],["pkr.pw",29],["imagenesderopaparaperros.com",29],["shortenbuddy.com",29],["gibit.xyz",29],["apksvip.com",29],["4cash.me",29],["namaidani.com",29],["teknomuda.com",29],["illink.net",29],["miuiku.com",29],["yourtechnology.online",29],["savelink.site",29],["apkshrt.com",29],["srts.me",29],["kutmoney.com",29],["kutt.io",29],["sanoybonito.club",29],["samaa-pro.com",29],["miklpro.com",29],["modapk.link",29],["shrinkforearn.in",29],["techyuth.xyz",29],["1shorten.com",29],["ccurl.net",29],["st23q.com",29],["beautyram.info",29],["viraloc.com",29],["kiiw.icu",29],["galaxy-link.space",29],["linkpoi.me",29],["usdshort.com",29],["bitcoinly.in",29],["menjelajahi.com",29],["pewgame.com",29],["yxoshort.com",29],["1link.vip",29],["haonguyen.top",29],["claimfreebits.com",29],["crazyblog.in",29],["gtlink.co",29],["link.tokenoto.com",29],["cutearn.net",29],["rshrt.com",29],["short.palmeratv.com",29],["filezipa.com",29],["dz-linkk.com",29],["theblissempire.com",29],["finanzas-vida.com",29],["adurly.cc",29],["pix4link.com",29],["paid4.link",29],["link.asiaon.top",29],["go.gets4link.com",29],["download.sharenulled.net",29],["beingtek.com",29],["shorturl.unityassets4free.com",29],["disheye.com",29],["techymedies.com",29],["techysuccess.com",29],["za.gl",[29,150]],["download.baominh.tech",29],["bblink.com",29],["linkbr.xyz",29],["myad.biz",29],["swzz.xyz",29],["vevioz.com",29],["charexempire.com",29],["clk.asia",29],["egfly.xyz",29],["linka.click",29],["sturls.com",29],["myshrinker.com",29],["go.adinsurance.xyz",29],["dash-free.com",[29,218]],["snowurl.com",[29,218]],["netfile.cc",29],["link.insurance-space.xyz",29],["link.insurglobal.xyz",29],["theconomy.me",29],["rajsayt.xyz",29],["rocklink.in",29],["adinsurance.xyz",29],["insurglobal.xyz",29],["techgeek.digital",29],["download3s.net",29],["shortx.net",29],["musicc.xyz",29],["shortawy.com",29],["tlin.me",29],["apprepack.com",29],["sh2rt.com",29],["up-load.one",29],["zuba.link",29],["linksfy.co",29],["news.speedynews.xyz",29],["golink.xaydungplus.com",29],["bestcash2020.com",29],["hoxiin.com",29],["technemo.xyz",29],["go.linkbnao.com",29],["link-yz.com",29],["paylinnk.com",29],["thizissam.in",29],["ier.ai",29],["bloggertheme.xyz",29],["adslink.pw",29],["novelssites.com",29],["links.medipost.org",29],["faucetcrypto.net",29],["short.freeltc.top",29],["trxking.xyz",29],["weadown.com",29],["m.bloggingguidance.com",29],["blog.onroid.com",29],["cutty.app",29],["link.codevn.net",29],["upfilesurls.com",29],["shareus.site",29],["link4rev.site",29],["bloginguru.xyz",29],["celinks.net",29],["c2g.at",29],["shortzu.icu",29],["bitcosite.com",[29,436]],["cryptosh.pro",29],["sigmalinks.in",29],["link68.net",29],["traffic123.net",29],["windowslite.net",[29,218]],["coinsl.click",29],["exalink.fun",29],["exego.app",[29,260]],["viewfr.com",29],["cl1ca.com",29],["4br.me",29],["fir3.net",29],["kiddyshort.com",29],["watchmygf.me",[30,57]],["camwhorez.tv",[30,43,94,95]],["fpo.xxx",[30,59]],["sexemix.com",30],["heavyfetish.com",[30,497]],["you-porn.com",32],["youporngay.com",32],["youpornru.com",32],["9908ww.com",32],["adelaidepawnbroker.com",32],["bztube.com",32],["hotovs.com",32],["insuredhome.org",32],["nudegista.com",32],["pornluck.com",32],["vidd.se",32],["pornhub.com",32],["pornerbros.com",33],["freep.com",33],["porn.com",36],["tune.pk",37],["noticias.gospelmais.com.br",38],["techperiod.com",38],["jacquieetmicheltv.net",[39,40]],["illicoporno.com",39],["lavoixdux.com",39],["tonpornodujour.com",39],["jacquieetmichel.net",39],["swame.com",39],["vosfemmes.com",39],["voyeurfrance.net",39],["viki.com",[41,42]],["sleazyneasy.com",[43,44,45]],["smutr.com",[43,205]],["yourporngod.com",[43,44]],["javbangers.com",[43,310]],["camfox.com",43],["camthots.tv",[43,126]],["shegotass.info",43],["amateur8.com",43],["bigtitslust.com",43],["ebony8.com",43],["freeporn8.com",43],["lesbian8.com",43],["maturetubehere.com",43],["sortporn.com",43],["webcamvau.com",43],["motherporno.com",[43,44,59,128]],["tktube.com",43],["theporngod.com",[43,44]],["pornsocket.com",46],["luxuretv.com",47],["porndig.com",[48,49]],["webcheats.com.br",50],["ceesty.com",[51,52]],["gestyy.com",[51,52]],["corneey.com",52],["destyy.com",52],["festyy.com",52],["sh.st",52],["angrybirdsnest.com",53],["zrozz.com",53],["clix4btc.com",53],["katfile.com",53],["4tests.com",53],["planet-explorers-isos.com",53],["business-standard.com",53],["goltelevision.com",53],["news-und-nachrichten.de",53],["laradiobbs.net",53],["urlaubspartner.net",53],["produktion.de",53],["cinemaxxl.de",53],["bladesalvador.com",53],["tempr.email",53],["trust.zone",53],["cshort.org",53],["friendproject.net",53],["covrhub.com",53],["planetsuzy.org",54],["empflix.com",55],["filespace.com",56],["transparentcalifornia.com",57],["deepbrid.com",58],["submityourflicks.com",59],["3movs.com",59],["cambay.tv",[59,110,126,128]],["bravoerotica.net",[59,128]],["youx.xxx",59],["camclips.tv",[59,205]],["camflow.tv",[59,110,128,171,241]],["camhoes.tv",[59,110,126,128,171,241]],["xmegadrive.com",59],["xxxymovies.com",59],["xxxshake.com",59],["gayck.com",59],["xhand.com",[59,128]],["analdin.com",[59,128]],["webnovel.com",60],["videosgay.me",[61,62]],["wishfast.top",62],["schwaebische.de",63],["mercurynews.com",64],["chicoer.com",64],["dailybreeze.com",64],["dailybulletin.com",64],["dailynews.com",64],["delcotimes.com",64],["eastbaytimes.com",64],["macombdaily.com",64],["ocregister.com",64],["pasadenastarnews.com",64],["pe.com",64],["presstelegram.com",64],["redlandsdailyfacts.com",64],["reviewjournal.com",64],["santacruzsentinel.com",64],["saratogian.com",64],["sentinelandenterprise.com",64],["sgvtribune.com",64],["tampabay.com",64],["times-standard.com",64],["theoaklandpress.com",64],["trentonian.com",64],["twincities.com",64],["whittierdailynews.com",64],["bostonherald.com",64],["dailycamera.com",64],["sbsun.com",64],["dailydemocrat.com",64],["montereyherald.com",64],["orovillemr.com",64],["record-bee.com",64],["redbluffdailynews.com",64],["reporterherald.com",64],["thereporter.com",64],["timescall.com",64],["timesheraldonline.com",64],["ukiahdailyjournal.com",64],["dailylocal.com",64],["8tracks.com",65],["revealname.com",66],["fcportables.com",[67,68]],["golfchannel.com",70],["telemundodeportes.com",70],["stream.nbcsports.com",70],["gamcore.com",71],["porcore.com",71],["69games.xxx",71],["javmix.app",71],["tecknity.com",72],["haaretz.co.il",73],["haaretz.com",73],["hungama.com",73],["a-o.ninja",73],["anime-odcinki.pl",73],["kumpulmanga.org",73],["shortgoo.blogspot.com",73],["tonanmedia.my.id",[73,451]],["yurasu.xyz",73],["isekaipalace.com",73],["megadescarga.net",[74,75,76,77]],["megadescargas.net",[74,75,76,77]],["vikistream.com",78],["eplayer.click",[78,79]],["mega4upload.com",[79,85]],["ennovelas.com",[79,85]],["n-tv.de",80],["brigitte.de",81],["stern.de",81],["foxsports.com.au",82],["canberratimes.com.au",82],["thesimsresource.com",83],["bdnewszh.com",85],["streamservicehd.click",85],["timeforbitco.in",86],["worldofbitco.in",[86,97]],["weatherx.co.in",[86,97]],["getyourbitco.in",86],["sunbtc.space",86],["ctrl.blog",87],["sportlife.es",88],["finofilipino.org",89],["acortarm.xyz",90],["acortame.xyz",90],["speedtest.net",91],["mysflink.blogspot.com",92],["assia.tv",93],["assia4.com",93],["assia24.com",93],["cwtvembeds.com",[95,127]],["camlovers.tv",95],["porntn.com",95],["pornissimo.org",95],["sexcams-24.com",[95,110]],["watchporn.to",[95,110]],["camwhorez.video",95],["footstockings.com",[96,110]],["sbs.com.au",98],["ojogos.com.br",100],["powforums.com",101],["supforums.com",101],["studybullet.com",101],["usgamer.net",102],["recordonline.com",102],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["sport-tv-guide.live",105],["temp-mails.com",106],["freiepresse.de",107],["investing.com",108],["camhub.cc",110],["love4porn.com",110],["thotvids.com",110],["watchmdh.to",110],["celebwhore.com",110],["cluset.com",110],["4kporn.xxx",110],["xhomealone.com",110],["lusttaboo.com",[110,383]],["hentai-moon.com",110],["mp3fiber.com",111],["suedkurier.de",112],["anysex.com",114],["vlist.se",115],["pornve.com",116],["coolrom.com.au",117],["pornohirsch.net",118],["marie-claire.es",119],["gamezhero.com",119],["flashgirlgames.com",119],["onlinesudoku.games",119],["mpg.football",119],["sssam.com",119],["globalnews.ca",120],["drinksmixer.com",121],["leitesculinaria.com",121],["fupa.net",122],["browardpalmbeach.com",123],["dallasobserver.com",123],["houstonpress.com",123],["miaminewtimes.com",123],["phoenixnewtimes.com",123],["westword.com",123],["nhentai.net",124],["nowtv.com.tr",125],["caminspector.net",126],["camwhoreshd.com",126],["camgoddess.tv",126],["gay4porn.com",128],["mypornhere.com",128],["mediapason.it",129],["linkspaid.com",129],["tuotromedico.com",129],["neoteo.com",129],["phoneswiki.com",129],["celebmix.com",129],["myneobuxportal.com",129],["oyungibi.com",129],["25yearslatersite.com",129],["jeshoots.com",130],["techhx.com",130],["karanapk.com",130],["flashplayer.fullstacks.net",132],["cloudapps.herokuapp.com",132],["youfiles.herokuapp.com",132],["temp-mail.org",133],["playembed.xyz",134],["javhdporn.net",134],["javstream.top",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hqtv.biz",140],["liveuamap.com",141],["muvibg.com",141],["audycje.tokfm.pl",142],["hulu.com",[143,144,145]],["shush.se",146],["emurom.net",147],["allkpop.com",148],["azmath.info",149],["downfile.site",149],["downphanmem.com",149],["expertvn.com",149],["memangbau.com",149],["trangchu.news",149],["aztravels.net",149],["adfoc.us",149],["theringtonesworld.in",149],["jobkijankari.in",149],["newsloti.com",149],["newzwala.co.in",149],["iplquotes.com",149],["kaisekareblog.com",149],["w3hindi.in",149],["jobwaala.in",149],["nhmgujarat.in",149],["minijankari.com",149],["news36tech.com",149],["gptproguide.com",149],["odiamusicsong.com",149],["anumin.com",149],["awolio.com",149],["lyricsx.in",149],["financialstudy.me",149],["iisfvirtual.in",149],["starxinvestor.com",149],["myprivatejobs.com",[149,258]],["wikitraveltips.com",[149,258]],["amritadrino.com",[149,258]],["sahlmarketing.net",149],["filmypoints.in",149],["quotesopia.com",149],["techacode.com",149],["trickms.com",149],["sptfy.be",149],["streamcheck.link",149],["mcafee-com.com",[149,260]],["pickcrackpasswords.blogspot.com",151],["kfrfansub.com",152],["thuglink.com",152],["voipreview.org",152],["hanime.tv",153],["pogo.com",154],["cloudvideo.tv",155],["legionjuegos.org",156],["legionpeliculas.org",156],["legionprogramas.org",156],["16honeys.com",157],["elespanol.com",158],["remodelista.com",159],["coolmathgames.com",[160,161,162,514]],["audiofanzine.com",163],["noweconomy.live",165],["howifx.com",[165,233]],["vavada5com.com",165],["hitokin.net",166],["developerinsider.co",167],["ilprimatonazionale.it",168],["hotabis.com",168],["root-nation.com",168],["italpress.com",168],["airsoftmilsimnews.com",168],["artribune.com",168],["thehindu.com",169],["cambro.tv",[170,171]],["nibelungen-kurier.de",172],["pianetamountainbike.it",174],["barchart.com",175],["modelisme.com",176],["parasportontario.ca",176],["prescottenews.com",176],["nrj-play.fr",177],["oeffentlicher-dienst.info",178],["hackingwithreact.com",179],["gutekueche.at",180],["eplfootballmatch.com",181],["peekvids.com",182],["playvids.com",182],["pornflip.com",182],["redensarten-index.de",183],["vw-page.com",184],["viz.com",[185,186]],["queenfaucet.website",187],["0rechner.de",188],["configspc.com",189],["xopenload.me",189],["uptobox.com",189],["uptostream.com",189],["onepiece-tube.com",190],["japgay.com",191],["mega-debrid.eu",192],["dreamdth.com",193],["diaridegirona.cat",195],["diariodeibiza.es",195],["diariodemallorca.es",195],["diarioinformacion.com",195],["eldia.es",195],["emporda.info",195],["farodevigo.es",195],["laopinioncoruna.es",195],["laopiniondemalaga.es",195],["laopiniondemurcia.es",195],["laopiniondezamora.es",195],["laprovincia.es",195],["levante-emv.com",195],["mallorcazeitung.es",195],["regio7.cat",195],["superdeporte.es",195],["playpaste.com",196],["player.rtl2.de",197],["freetutorialsus.com",198],["vidlii.com",[198,214]],["iammagnus.com",198],["dailyvideoreports.net",198],["unityassets4free.com",198],["cnbc.com",199],["puzzles.msn.com",200],["metro.us",200],["newsobserver.com",200],["arkadiumhosted.com",200],["firefaucet.win",202],["55k.io",203],["filelions.online",203],["stmruby.com",203],["direct-link.net",204],["direkt-wissen.com",204],["link-to.net",204],["fullhdxxx.com",206],["pornclassic.tube",207],["tubepornclassic.com",207],["etonline.com",208],["creatur.io",208],["drphil.com",208],["urbanmilwaukee.com",208],["ontiva.com",208],["hideandseek.world",208],["myabandonware.com",208],["kendam.com",208],["wttw.com",208],["synonyms.com",208],["definitions.net",208],["hostmath.com",208],["camvideoshub.com",208],["minhaconexao.com.br",208],["home-made-videos.com",210],["pxrnxx.xyz",210],["amateur-couples.com",210],["slutdump.com",210],["produsat.com",212],["12thman.com",214],["acusports.com",214],["atlantic10.com",214],["auburntigers.com",214],["baylorbears.com",214],["bceagles.com",214],["bgsufalcons.com",214],["big12sports.com",214],["bigten.org",214],["bradleybraves.com",214],["butlersports.com",214],["cmumavericks.com",214],["conferenceusa.com",214],["cyclones.com",214],["dartmouthsports.com",214],["daytonflyers.com",214],["dbupatriots.com",214],["dbusports.com",214],["denverpioneers.com",214],["fduknights.com",214],["fgcuathletics.com",214],["fightinghawks.com",214],["fightingillini.com",214],["floridagators.com",214],["friars.com",214],["friscofighters.com",214],["gamecocksonline.com",214],["goarmywestpoint.com",214],["gobison.com",214],["goblueraiders.com",214],["gobobcats.com",214],["gocards.com",214],["gocreighton.com",214],["godeacs.com",214],["goexplorers.com",214],["goetbutigers.com",214],["gofrogs.com",214],["gogriffs.com",214],["gogriz.com",214],["golobos.com",214],["gomarquette.com",214],["gopack.com",214],["gophersports.com",214],["goprincetontigers.com",214],["gopsusports.com",214],["goracers.com",214],["goshockers.com",214],["goterriers.com",214],["gotigersgo.com",214],["gousfbulls.com",214],["govandals.com",214],["gowyo.com",214],["goxavier.com",214],["gozags.com",214],["gozips.com",214],["griffinathletics.com",214],["guhoyas.com",214],["gwusports.com",214],["hailstate.com",214],["hamptonpirates.com",214],["hawaiiathletics.com",214],["hokiesports.com",214],["huskers.com",214],["icgaels.com",214],["iuhoosiers.com",214],["jsugamecocksports.com",214],["longbeachstate.com",214],["loyolaramblers.com",214],["lrtrojans.com",214],["lsusports.net",214],["morrisvillemustangs.com",214],["msuspartans.com",214],["muleriderathletics.com",214],["mutigers.com",214],["navysports.com",214],["nevadawolfpack.com",214],["niuhuskies.com",214],["nkunorse.com",214],["nuhuskies.com",214],["nusports.com",214],["okstate.com",214],["olemisssports.com",214],["omavs.com",214],["ovcsports.com",214],["owlsports.com",214],["purduesports.com",214],["redstormsports.com",214],["richmondspiders.com",214],["sfajacks.com",214],["shupirates.com",214],["siusalukis.com",214],["smcgaels.com",214],["smumustangs.com",214],["soconsports.com",214],["soonersports.com",214],["themw.com",214],["tulsahurricane.com",214],["txst.com",214],["txstatebobcats.com",214],["ubbulls.com",214],["ucfknights.com",214],["ucirvinesports.com",214],["uconnhuskies.com",214],["uhcougars.com",214],["uicflames.com",214],["umterps.com",214],["uncwsports.com",214],["unipanthers.com",214],["unlvrebels.com",214],["uoflsports.com",214],["usdtoreros.com",214],["utahstateaggies.com",214],["utepathletics.com",214],["utrockets.com",214],["uvmathletics.com",214],["uwbadgers.com",214],["villanova.com",214],["wkusports.com",214],["wmubroncos.com",214],["woffordterriers.com",214],["1pack1goal.com",214],["bcuathletics.com",214],["bubraves.com",214],["goblackbears.com",214],["golightsgo.com",214],["gomcpanthers.com",214],["goutsa.com",214],["mercerbears.com",214],["pirateblue.com",214],["pirateblue.net",214],["pirateblue.org",214],["quinnipiacbobcats.com",214],["towsontigers.com",214],["tribeathletics.com",214],["tribeclub.com",214],["utepminermaniacs.com",214],["utepminers.com",214],["wkutickets.com",214],["aopathletics.org",214],["atlantichockeyonline.com",214],["bigsouthnetwork.com",214],["bigsouthsports.com",214],["chawomenshockey.com",214],["dbupatriots.org",214],["drakerelays.org",214],["ecac.org",214],["ecacsports.com",214],["emueagles.com",214],["emugameday.com",214],["gculopes.com",214],["godrakebulldog.com",214],["godrakebulldogs.com",214],["godrakebulldogs.net",214],["goeags.com",214],["goislander.com",214],["goislanders.com",214],["gojacks.com",214],["gomacsports.com",214],["gseagles.com",214],["hubison.com",214],["iowaconference.com",214],["ksuowls.com",214],["lonestarconference.org",214],["mascac.org",214],["midwestconference.org",214],["mountaineast.org",214],["niu-pack.com",214],["nulakers.ca",214],["oswegolakers.com",214],["ovcdigitalnetwork.com",214],["pacersports.com",214],["rmacsports.org",214],["rollrivers.com",214],["samfordsports.com",214],["uncpbraves.com",214],["usfdons.com",214],["wiacsports.com",214],["alaskananooks.com",214],["broncathleticfund.com",214],["cameronaggies.com",214],["columbiacougars.com",214],["etownbluejays.com",214],["gobadgers.ca",214],["golancers.ca",214],["gometrostate.com",214],["gothunderbirds.ca",214],["kentstatesports.com",214],["lehighsports.com",214],["lopers.com",214],["lycoathletics.com",214],["lycomingathletics.com",214],["maraudersports.com",214],["mauiinvitational.com",214],["msumavericks.com",214],["nauathletics.com",214],["nueagles.com",214],["nwusports.com",214],["oceanbreezenyc.org",214],["patriotathleticfund.com",214],["pittband.com",214],["principiaathletics.com",214],["roadrunnersathletics.com",214],["sidearmsocial.com",214],["snhupenmen.com",214],["stablerarena.com",214],["stoutbluedevils.com",214],["uwlathletics.com",214],["yumacs.com",214],["collegefootballplayoff.com",214],["csurams.com",214],["cubuffs.com",214],["gobearcats.com",214],["gohuskies.com",214],["mgoblue.com",214],["osubeavers.com",214],["pittsburghpanthers.com",214],["rolltide.com",214],["texassports.com",214],["thesundevils.com",214],["uclabruins.com",214],["wvuathletics.com",214],["wvusports.com",214],["arizonawildcats.com",214],["calbears.com",214],["cuse.com",214],["georgiadogs.com",214],["goducks.com",214],["goheels.com",214],["gostanford.com",214],["insidekstatesports.com",214],["insidekstatesports.info",214],["insidekstatesports.net",214],["insidekstatesports.org",214],["k-stateathletics.com",214],["k-statefootball.net",214],["k-statefootball.org",214],["k-statesports.com",214],["k-statesports.net",214],["k-statesports.org",214],["k-statewomenshoops.com",214],["k-statewomenshoops.net",214],["k-statewomenshoops.org",214],["kstateathletics.com",214],["kstatefootball.net",214],["kstatefootball.org",214],["kstatesports.com",214],["kstatewomenshoops.com",214],["kstatewomenshoops.net",214],["kstatewomenshoops.org",214],["ksuathletics.com",214],["ksusports.com",214],["scarletknights.com",214],["showdownforrelief.com",214],["syracusecrunch.com",214],["texastech.com",214],["theacc.com",214],["ukathletics.com",214],["usctrojans.com",214],["utahutes.com",214],["utsports.com",214],["wsucougars.com",214],["mangadods.com",214],["tricksplit.io",214],["fangraphs.com",215],["4players.de",[216,306]],["buffed.de",216],["gamesaktuell.de",216],["gamezone.de",216],["pcgames.de",216],["videogameszone.de",216],["planetaminecraft.com",217],["cravesandflames.com",218],["codesnse.com",218],["link.paid4file.com",218],["flyad.vip",218],["lapresse.ca",219],["kolyoom.com",220],["ilovephd.com",220],["negumo.com",221],["games.wkb.jp",[222,223]],["channelmyanmar.org",[224,225]],["u-s-news.com",225],["fandom.com",[226,532,533]],["kenshi.fandom.com",227],["hausbau-forum.de",228],["fake-it.ws",229],["laksa19.github.io",230],["1shortlink.com",231],["nesia.my.id",232],["makemoneywithurl.com",233],["junkyponk.com",233],["healthfirstweb.com",233],["vocalley.com",233],["yogablogfit.com",233],["en.financerites.com",233],["blogtechh.com",233],["host2loan.com",233],["resetoff.pl",234],["sexodi.com",234],["cdn77.org",235],["howtofixwindows.com",236],["3sexporn.com",237],["momxxxsex.com",237],["myfreevintageporn.com",237],["penisbuyutucum.net",237],["lightnovelworld.com",238],["ujszo.com",239],["newsmax.com",240],["bobs-tube.com",241],["nadidetarifler.com",242],["siz.tv",242],["suzylu.co.uk",[243,244]],["onworks.net",245],["yabiladi.com",245],["downloadsoft.net",246],["pixsera.net",247],["testlanguages.com",248],["newsinlevels.com",248],["videosinlevels.com",248],["ultimate-guitar.com",249],["teachmemicro.com",250],["willcycle.com",250],["2ndrun.tv",250],["rackusreads.com",250],["puzzle-loop.com",251],["puzzle-words.com",251],["puzzle-chess.com",251],["puzzle-thermometers.com",251],["puzzle-norinori.com",251],["puzzle-minesweeper.com",251],["puzzle-slant.com",251],["puzzle-lits.com",251],["puzzle-galaxies.com",251],["puzzle-tents.com",251],["puzzle-battleships.com",251],["puzzle-pipes.com",251],["puzzle-hitori.com",251],["puzzle-heyawake.com",251],["puzzle-shingoki.com",251],["puzzle-masyu.com",251],["puzzle-stitches.com",251],["puzzle-aquarium.com",251],["puzzle-tapa.com",251],["puzzle-star-battle.com",251],["puzzle-kakurasu.com",251],["puzzle-skyscrapers.com",251],["puzzle-futoshiki.com",251],["puzzle-shakashaka.com",251],["puzzle-kakuro.com",251],["puzzle-jigsaw-sudoku.com",251],["puzzle-killer-sudoku.com",251],["puzzle-binairo.com",251],["puzzle-nonograms.com",251],["puzzle-sudoku.com",251],["puzzle-light-up.com",251],["puzzle-bridges.com",251],["puzzle-shikaku.com",251],["puzzle-nurikabe.com",251],["puzzle-dominosa.com",251],["xyzsports111.xyz",[252,253,254]],["xyzsports112.xyz",[252,253,254]],["xyzsports113.xyz",[252,253,254]],["xyzsports114.xyz",[252,253,254]],["xyzsprtsfrmr1.site",[252,253,254]],["xyzsprtsfrmr2.site",[252,253,254]],["claimbits.net",255],["sexyscope.net",256],["luckydice.net",258],["adarima.org",258],["tieutietkiem.com",258],["weatherwx.com",258],["sattaguess.com",258],["winshell.de",258],["rosasidan.ws",258],["modmakers.xyz",258],["gamepure.in",258],["warrenrahul.in",258],["austiblox.net",258],["upiapi.in",258],["myownguess.in",258],["networkhint.com",258],["watchhentai.net",258],["thichcode.net",258],["texturecan.com",258],["tikmate.app",[258,488]],["4funbox.com",259],["nephobox.com",259],["1024tera.com",259],["btcbitco.in",[260,261]],["btcsatoshi.net",260],["cempakajaya.com",260],["crypto4yu.com",260],["readbitcoin.org",260],["wiour.com",260],["finish.addurl.biz",260],["aiimgvlog.fun",[260,266]],["exactpay.online",260],["kiddyearner.com",260],["blog.cryptowidgets.net",261],["blog.insurancegold.in",261],["blog.wiki-topia.com",261],["blog.coinsvalue.net",261],["blog.cookinguide.net",261],["blog.freeoseocheck.com",261],["blog24.me",261],["rsadnetworkinfo.com",261],["rsinsuranceinfo.com",261],["rsfinanceinfo.com",261],["rsgamer.app",261],["rssoftwareinfo.com",261],["rshostinginfo.com",261],["rseducationinfo.com",261],["homeairquality.org",263],["faucettronn.click",263],["ticketmaster.sg",263],["suaurl.com",264],["reidoplacar.com",264],["bildirim.link",265],["appsbull.com",267],["diudemy.com",267],["maqal360.com",267],["sinonimos.de",[268,269]],["antonimos.de",[268,269]],["tiktokcounter.net",268],["tiktokrealtime.com",268],["quesignifi.ca",[268,270]],["lifesurance.info",271],["infokeeda.xyz",272],["arcai.com",273],["my-code4you.blogspot.com",274],["flickr.com",275],["firefile.cc",276],["pestleanalysis.com",276],["kochamjp.pl",276],["tutorialforlinux.com",276],["whatsaero.com",276],["animeblkom.net",[276,292]],["blkom.com",276],["globes.co.il",[277,278]],["jardiner-malin.fr",279],["tw-calc.net",280],["ohmybrush.com",281],["talkceltic.net",282],["mentalfloss.com",283],["uprafa.com",284],["cube365.net",285],["nightfallnews.com",[286,287]],["wwwfotografgotlin.blogspot.com",288],["freelistenonline.com",288],["badassdownloader.com",289],["quickporn.net",290],["yellowbridge.com",291],["aosmark.com",293],["atozmath.com",[295,296,297,298,299,300,301]],["newyorker.com",302],["brighteon.com",303],["more.tv",304],["video1tube.com",305],["alohatube.xyz",305],["fshost.me",307],["link.cgtips.org",308],["hentaicloud.com",309],["netfapx.com",311],["paperzonevn.com",313],["hentaienglish.com",314],["hentaiporno.xxx",314],["venge.io",[315,316]],["btcbux.io",317],["its.porn",[318,319]],["atv.at",320],["kusonime.com",[321,322]],["jetpunk.com",324],["imgur.com",325],["hentai-party.com",326],["hentaicomics.pro",326],["xxx-comics.pro",326],["genshinimpactcalculator.com",329],["mysexgames.com",330],["embed.indavideo.hu",333],["coinurl.net",[334,335]],["gdr-online.com",336],["mmm.dk",337],["iqiyi.com",[338,339,481]],["m.iqiyi.com",340],["japopav.tv",341],["lvturbo.com",341],["nbcolympics.com",342],["apkhex.com",343],["indiansexstories2.net",344],["issstories.xyz",344],["1340kbbr.com",345],["gorgeradio.com",345],["kduk.com",345],["kedoam.com",345],["kejoam.com",345],["kelaam.com",345],["khsn1230.com",345],["kjmx.rocks",345],["kloo.com",345],["klooam.com",345],["klykradio.com",345],["kmed.com",345],["kmnt.com",345],["kool991.com",345],["kpnw.com",345],["kppk983.com",345],["krktcountry.com",345],["ktee.com",345],["kwro.com",345],["kxbxfm.com",345],["thevalley.fm",345],["dsocker1234.blogspot.com",346],["surfline.com",[347,368]],["blick.ch",348],["mgnet.xyz",349],["designtagebuch.de",350],["pixroute.com",351],["uploady.io",352],["calculator-online.net",353],["porngames.club",354],["sexgames.xxx",354],["111.90.159.132",355],["battleplan.news",355],["mobile-tracker-free.com",356],["pfps.gg",357],["ac-illust.com",[358,359]],["photo-ac.com",[358,359]],["vlxxs.net",360],["rapelust.com",360],["vtube.to",360],["vtplay.net",360],["desitelugusex.com",360],["xvideos-downloader.net",360],["xxxvideotube.net",360],["sdefx.cloud",360],["nozomi.la",360],["moviesonlinefree.net",360],["social-unlock.com",361],["ninja.io",362],["sourceforge.net",363],["samfirms.com",364],["banned.video",365],["conspiracyfact.info",365],["freeworldnews.tv",365],["madmaxworld.tv",365],["huffpost.com",366],["ingles.com",367],["spanishdict.com",367],["play.tv3.ee",369],["play.tv3.lt",369],["play.tv3.lv",369],["tv3play.skaties.lv",369],["trendyoum.com",370],["bulbagarden.net",371],["doomovie-hd.live",372],["madoohd.com",372],["moviestars.to",373],["hollywoodlife.com",374],["searchresults.cc",375],["mat6tube.com",376],["textstudio.co",377],["newtumbl.com",378],["nevcoins.club",380],["mail.com",381],["erome.com",384],["oggi.it",[385,386]],["manoramamax.com",385],["video.gazzetta.it",[385,386]],["mangakita.id",387],["mangakita.net",387],["poscishd.online",388],["avpgalaxy.net",389],["mhma12.tech",390],["panda-novel.com",391],["zebranovel.com",391],["lightsnovel.com",391],["eaglesnovel.com",391],["pandasnovel.com",391],["panel.freemcserver.net",392],["zadfaucet.com",393],["ewrc-results.com",394],["kizi.com",395],["cyberscoop.com",396],["fedscoop.com",396],["canale.live",397],["mafiatown.pl",[398,399]],["jeep-cj.com",400],["sponsorhunter.com",401],["cloudcomputingtopics.net",402],["likecs.com",403],["tiscali.it",404],["linkspy.cc",405],["tutelehd3.xyz",406],["dirty.pink",[407,408,409]],["adshnk.com",410],["chattanoogan.com",411],["adsy.pw",412],["playstore.pw",412],["socialmediagirls.com",413],["windowspro.de",414],["snapinsta.app",415],["tvtv.ca",416],["tvtv.us",416],["mydaddy.cc",417],["roadtrippin.fr",418],["redketchup.io",[419,420,421]],["anyporn.com",[422,438]],["bravoporn.com",422],["bravoteens.com",422],["crocotube.com",422],["hellmoms.com",422],["hellporno.com",422],["sex3.com",422],["tubewolf.com",422],["xbabe.com",422],["xcum.com",422],["zedporn.com",422],["imagetotext.info",423],["infokik.com",424],["freepik.com",425],["ddwloclawek.pl",[426,427]],["deezer.com",428],["my-subs.co",429],["plaion.com",430],["rapid-cloud.co",431],["in-jpn.com",431],["slideshare.net",[432,433]],["ustreasuryyieldcurve.com",434],["businesssoftwarehere.com",435],["goo.st",435],["freevpshere.com",435],["softwaresolutionshere.com",435],["easymc.io",439],["staige.tv",440],["androidadult.com",441],["streamvid.net",442],["watchtv24.com",443],["cellmapper.net",444],["medscape.com",445],["newscon.org",[446,447]],["arkadium.com",448],["app.blubank.com",449],["sportdeutschland.tv",450],["kcra.com",450],["wcvb.com",450],["ccthesims.com",452],["chromeready.com",452],["coursedrive.org",452],["dtbps3games.com",452],["illustratemagazine.com",452],["uknip.co.uk",452],["vod.pl",453],["megadrive-emulator.com",454],["animesaga.in",457],["moviesapi.club",457],["bestx.stream",457],["watchx.top",457],["digimanie.cz",458],["svethardware.cz",458],["srvy.ninja",459],["drawer-opportunity-i-243.site",460],["tchatche.com",461],["ozulmanga.com",462],["edmdls.com",463],["freshremix.net",463],["scenedl.org",463],["trakt.tv",[464,465,466]],["shroomers.app",467],["di.fm",[468,469,470]],["pc-builds.com",471],["qtoptens.com",471],["reuters.com",471],["today.com",471],["videogamer.com",471],["wrestlinginc.com",471],["gbatemp.net",471],["techedubyte.com",472],["movie-th.tv",473],["iwanttfc.com",474],["nutraingredients-asia.com",475],["nutraingredients-latam.com",475],["nutraingredients-usa.com",475],["nutraingredients.com",475],["livesportsclub.me",476],["rogstream.fun",476],["ozulscansen.com",477],["fitnessbr.click",478],["minhareceita.xyz",478],["doomied.monster",479],["lookmovie2.to",479],["royalroad.com",480],["biletomat.pl",482],["hextank.io",[484,485]],["gofilmizle.com",[486,487]],["sagewater.com",489],["redlion.net",489],["satdl.com",490],["vidstreaming.xyz",491],["myradioonline.pl",492],["teamskeet.com",493],["tacobell.com",495],["zefoy.com",496],["natgeotv.com",498],["br.de",499],["pasteboard.co",500],["clickhole.com",501],["deadspin.com",501],["gizmodo.com",501],["jalopnik.com",501],["jezebel.com",501],["kotaku.com",501],["lifehacker.com",501],["splinternews.com",501],["theinventory.com",501],["theonion.com",501],["theroot.com",501],["thetakeout.com",501],["pewresearch.org",501],["los40.com",[502,503]],["as.com",503],["telegraph.co.uk",[504,505]],["poweredbycovermore.com",[504,552]],["lumens.com",[504,552]],["verizon.com",506],["humanbenchmark.com",507],["politico.com",508],["officedepot.co.cr",[509,510]],["usnews.com",513],["factable.com",515],["zee5.com",516],["gala.fr",517],["geo.fr",517],["voici.fr",517],["gloucestershirelive.co.uk",518],["arsiv.mackolik.com",519],["jacksonguitars.com",520],["scandichotels.com",521],["stylist.co.uk",522],["nettiauto.com",523],["thaiairways.com",[524,525]],["cerbahealthcare.it",[526,527]],["futura-sciences.com",[526,542]],["tiendaenlinea.claro.com.ni",[528,529]],["tieba.baidu.com",530],["linktr.ee",531],["grasshopper.com",[534,535]],["epson.com.cn",[536,537]],["oe24.at",[538,539]],["szbz.de",538],["platform.autods.com",[540,541]],["wikihow.com",543],["citibank.com.sg",544],["uol.com.br",[545,546,547,548]],["gazzetta.gr",549],["digicol.dpm.org.cn",[550,551]],["virginmediatelevision.ie",553],["larazon.es",[554,555]],["waitrosecellar.com",[556,557,558]],["kicker.de",559],["sharpen-free-design-generator.netlify.app",[560,561]],["help.cashctrl.com",[562,563]],["commande.rhinov.pro",[564,565]],["ecom.wixapps.net",[564,565]],["tipranks.com",[566,567]],["iceland.co.uk",[568,569,570]],["socket.pearsoned.com",571],["tntdrama.com",[572,573]],["mobile.de",[574,575]],["ioe.vn",[576,577]],["geiriadur.ac.uk",[576,580]],["bikeportland.org",[578,579]],["biologianet.com",[546,547,548]],["free-mp3-download.net",584],["weather.com",[585,586]],["ubereats.com",[585,586]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster42",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["sxyprn",25],["hqq",[26,27]],["waaw",[27,28]],["younetu",27],["123link",29],["adshort",29],["linkshorts",29],["adsrt",29],["vinaurl",29],["adfloz",29],["dutchycorp",29],["shortearn",29],["pingit",29],["shrink",29],["tmearn",29],["megalink",29],["miniurl",29],["clk",29],["pureshort",29],["shrinke",29],["shrinkme",29],["pcprogramasymas",29],["link1s",29],["shortzzy",29],["shorttey",[29,208]],["lite-link",29],["adcorto",29],["zshort",29],["upfiles",29],["linkfly",29],["wplink",29],["seulink",29],["encurtalink",29],["camwhores",[30,43,94,95,96]],["tube8",[31,32]],["youporn",32],["redtube",32],["pornhub",[32,194]],["upornia",[34,35]],["xtits",[59,128]],["streamwish",[61,62]],["pouvideo",69],["povvideo",69],["povw1deo",69],["povwideo",69],["powv1deo",69],["powvibeo",69],["powvideo",69],["powvldeo",69],["acortalo",[74,75,76,77]],["acortar",[74,75,76,77]],["plyjam",[78,79]],["fxporn69",84],["vipbox",85],["viprow",85],["desbloqueador",90],["xberuang",92],["teknorizen",92],["subtorrents",99],["subtorrents1",99],["newpelis",99],["pelix",99],["allcalidad",99],["infomaniakos",99],["filecrypt",103],["tornadomovies",109],["sexwebvideo",110],["mangovideo",110],["icdrama",115],["mangasail",115],["file4go",117],["asianclub",134],["anitube",137],["mixdrop",139],["azsoft",149],["uploadev",164],["ver-pelis-online",173],["ancient-origins",181],["spankbang",201],["lookcam",208],["lootlinks",208],["dpstream",211],["bluemediafiles",213],["docer",234],["kickassanime",257],["terabox",259],["ctrlv",294],["crackstreams",312],["123movieshd",323],["uproxy",327],["animesa",328],["cinecalidad",[331,332]],["dvdplay",360],["apkmaven",379],["gmx",382],["gamereactor",437],["tvhay",[455,456]],["lookmovie",479],["lk21official",483],["www.google",494],["officedepot",[511,512]],["dropgalaxy",581]]);

const exceptionsMap = new Map([["pingit.com",[29]],["pingit.me",[29]],["lookmovie.studio",[479]]]);

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
