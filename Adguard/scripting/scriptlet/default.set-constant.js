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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["__NUXT__.state.advertisement.adBlockWallEnabled","false"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["wpsafelinkCount","0"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["isAdClickDone","true"],["waitTime441","0"],["waitTime","0"],["showadas","true"],["iktimer","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["DOMTokenList.prototype.contains","trueFunc"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["supportedBrowsers",""],["HTMLScriptElement.prototype.onerror","noopFunc"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["bild.de",10],["sueddeutsche.de",11],["watson.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.com",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,258]],["gadgets.es",[12,258]],["amateurporn.co",[12,112]],["wiwo.de",13],["masteranime.es",14],["fullxh.com",15],["megaxh.com",15],["movingxh.world",15],["taoxh.life",15],["unlockxh4.com",15],["xhadult2.com",15],["xhadult3.com",15],["xhadult4.com",15],["xhadult5.com",15],["xhamster46.com",15],["xhday.com",15],["xhday1.com",15],["xhmoon5.com",15],["xhplanet1.com",15],["xhplanet2.com",15],["xhreal2.com",15],["xhreal3.com",15],["xhtab2.com",15],["xhtree.com",15],["xhvictory.com",15],["xhwebsite.com",15],["xhwebsite2.com",15],["xhwide1.com",15],["alphaporno.com",[18,426]],["porngem.com",18],["uploadbank.com",18],["shortit.pw",[18,115]],["familyporn.tv",18],["cloudemb.com",[18,346]],["sbplay1.com",18],["id45.cyou",18],["85tube.com",[18,96]],["k1nk.co",18],["watchasians.cc",18],["imsdb.pw",[18,28]],["soltoshindo.com",18],["techtimes.com",19],["dronedj.com",21],["freeplayervideo.com",22],["nazarickol.com",22],["player-cdn.com",22],["apinchcaseation.com",22],["bigclatterhomesguideservice.com",22],["bradleyviewdoctor.com",22],["denisegrowthwide.com",22],["edwardarriveoften.com",22],["housecardsummerbutton.com",22],["jamiesamewalk.com",22],["johntryopen.com",22],["kennethofficialitem.com",22],["lukecomparetwo.com",22],["markstyleall.com",22],["morganoperationface.com",22],["nectareousoverelate.com",22],["paulkitchendark.com",22],["seanshowcould.com",22],["stevenimaginelittle.com",22],["strawberriesporail.com",22],["timberwoodanotia.com",22],["tinycat-voe-fashion.com",22],["troyyourlead.com",22],["uptodatefinishconference.com",22],["uptodatefinishconferenceroom.com",22],["voe.sx",22],["motphimtv.com",22],["rabbitstream.net",22],["streamlare.com",22],["projectfreetv.one",22],["nolive.me",23],["cbs.com",24],["paramountplus.com",24],["player.glomex.com",25],["merkur.de",25],["tz.de",25],["hotpornfile.org",28],["player.tabooporns.com",28],["wiztube.xyz",28],["multiup.us",28],["rpdrlatino.live",28],["peliculas8k.com",[28,29]],["video.q34r.org",28],["69x.online",28],["czxxx.org",28],["vvtplayer.online",28],["netu.ac",28],["dirtyvideo.fun",29],["adbull.org",30],["mitly.us",30],["linkrex.net",30],["linx.cc",30],["oke.io",30],["dz4link.com",30],["linclik.com",30],["shrt10.com",30],["loptelink.com",30],["cut-fly.com",30],["linkfinal.com",30],["payskip.org",30],["cutpaid.com",30],["forexmab.com",30],["linkjust.com",30],["linkszia.co",30],["leechpremium.link",30],["icutlink.com",[30,135]],["stfly.me",30],["oncehelp.com",30],["bit-url.com",30],["rgl.vn",30],["reqlinks.net",30],["megaurl.in",30],["megafly.in",30],["bitlk.com",30],["qlinks.eu",30],["link.3dmili.com",30],["short-fly.com",30],["foxseotools.com",30],["pngit.live",30],["link.turkdown.com",30],["urlty.com",30],["7r6.com",30],["oko.sh",30],["ckk.ai",30],["fc.lc",30],["fstore.biz",30],["cuts-url.com",30],["eio.io",30],["exe.app",30],["exee.io",30],["exey.io",30],["skincarie.com",30],["exeo.app",30],["coinlyhub.com",[30,216]],["adsafelink.com",30],["aii.sh",30],["cybertechng.com",[30,225]],["owllink.net",30],["cutdl.xyz",30],["iir.ai",30],["shorteet.com",[30,245]],["sekilastekno.com",30],["smoner.com",30],["gplinks.co",30],["xpshort.com",30],["upshrink.com",30],["enit.in",[30,241]],["ez4short.com",30],["easysky.in",30],["veganab.co",30],["adrinolinks.in",30],["go.gyanitheme.com",30],["go.theforyou.in",30],["go.hipsonyc.com",30],["birdurls.com",30],["try2link.com",30],["jameeltips.us",30],["gainl.ink",30],["promo-visits.site",30],["satoshi-win.xyz",[30,267]],["shorterall.com",30],["encurtandourl.com",30],["forextrader.site",30],["postazap.com",30],["tinys.click",[30,225]],["cpm.icu",30],["easycut.io",30],["panyshort.link",30],["enagato.com",30],["pandaznetwork.com",30],["tii.la",30],["loan2host.com",30],["tei.ai",30],["tii.ai",30],["recipestutorials.com",30],["droplink.co",30],["linkshrnk.com",30],["linksly.co",30],["pkr.pw",30],["imagenesderopaparaperros.com",30],["shortenbuddy.com",30],["gibit.xyz",30],["apksvip.com",30],["4cash.me",30],["namaidani.com",30],["teknomuda.com",30],["illink.net",30],["miuiku.com",30],["yourtechnology.online",30],["savelink.site",30],["apkshrt.com",30],["srts.me",30],["kutmoney.com",30],["kutt.io",30],["sanoybonito.club",30],["samaa-pro.com",30],["miklpro.com",30],["modapk.link",30],["shrinkforearn.in",30],["techyuth.xyz",30],["1shorten.com",30],["ccurl.net",30],["st23q.com",30],["beautyram.info",30],["viraloc.com",30],["kiiw.icu",30],["galaxy-link.space",30],["linkpoi.me",30],["usdshort.com",30],["bitcoinly.in",30],["menjelajahi.com",30],["pewgame.com",30],["yxoshort.com",30],["1link.vip",30],["haonguyen.top",30],["claimfreebits.com",30],["crazyblog.in",30],["gtlink.co",30],["link.tokenoto.com",30],["cutearn.net",30],["rshrt.com",30],["short.palmeratv.com",30],["filezipa.com",30],["dz-linkk.com",30],["theblissempire.com",30],["shortlink.prz.pw",30],["finanzas-vida.com",30],["adurly.cc",30],["pix4link.com",30],["paid4.link",30],["link.asiaon.top",30],["go.gets4link.com",30],["download.sharenulled.net",30],["automotur.club",30],["beingtek.com",30],["shorturl.unityassets4free.com",30],["disheye.com",30],["techymedies.com",30],["techysuccess.com",30],["za.gl",[30,155]],["download.baominh.tech",30],["bblink.com",30],["linkbr.xyz",30],["myad.biz",30],["swzz.xyz",30],["vevioz.com",30],["charexempire.com",30],["clk.asia",30],["egfly.xyz",30],["linka.click",30],["sturls.com",30],["myshrinker.com",30],["go.adinsurance.xyz",30],["dash-free.com",[30,225]],["snowurl.com",[30,225]],["netfile.cc",30],["link.insurance-space.xyz",30],["link.insurglobal.xyz",30],["theconomy.me",30],["rajsayt.xyz",30],["rocklink.in",30],["adinsurance.xyz",30],["insurglobal.xyz",30],["techgeek.digital",30],["download3s.net",30],["shortx.net",30],["musicc.xyz",30],["shortawy.com",30],["tlin.me",30],["apprepack.com",30],["sh2rt.com",30],["up-load.one",30],["zuba.link",30],["atglinks.com",30],["du-link.in",30],["linksfy.co",30],["news.speedynews.xyz",30],["golink.xaydungplus.com",30],["bestcash2020.com",30],["hoxiin.com",30],["technemo.xyz",30],["go.linkbnao.com",30],["link-yz.com",30],["paylinnk.com",30],["thizissam.in",30],["ier.ai",30],["bloggertheme.xyz",30],["adslink.pw",30],["oii.io",30],["novelssites.com",30],["links.medipost.org",30],["faucetcrypto.net",30],["short.freeltc.top",30],["trxking.xyz",30],["weadown.com",30],["m.bloggingguidance.com",30],["blog.onroid.com",30],["cutty.app",30],["link.codevn.net",30],["upfilesurls.com",30],["shareus.site",30],["link4rev.site",30],["bloginguru.xyz",30],["celinks.net",30],["c2g.at",30],["shortzu.icu",30],["bitcosite.com",[30,440]],["cryptosh.pro",30],["sigmalinks.in",30],["link68.net",30],["traffic123.net",30],["windowslite.net",[30,225]],["coinsl.click",30],["exalink.fun",30],["exego.app",[30,265]],["viewfr.com",30],["cl1ca.com",30],["4br.me",30],["fir3.net",30],["kiddyshort.com",30],["watchmygf.me",[31,58]],["camwhorez.tv",[31,44,95,96]],["fpo.xxx",[31,60]],["sexemix.com",31],["heavyfetish.com",[31,503]],["you-porn.com",33],["youporngay.com",33],["youpornru.com",33],["9908ww.com",33],["adelaidepawnbroker.com",33],["bztube.com",33],["hotovs.com",33],["insuredhome.org",33],["nudegista.com",33],["pornluck.com",33],["vidd.se",33],["pornhub.com",33],["pornerbros.com",34],["freep.com",34],["porn.com",37],["tune.pk",38],["noticias.gospelmais.com.br",39],["techperiod.com",39],["jacquieetmicheltv.net",[40,41]],["illicoporno.com",40],["lavoixdux.com",40],["tonpornodujour.com",40],["jacquieetmichel.net",40],["swame.com",40],["vosfemmes.com",40],["voyeurfrance.net",40],["viki.com",[42,43]],["sleazyneasy.com",[44,45,46]],["smutr.com",[44,212]],["yourporngod.com",[44,45]],["javbangers.com",[44,316]],["camfox.com",44],["camthots.tv",[44,129]],["shegotass.info",44],["amateur8.com",44],["bigtitslust.com",44],["ebony8.com",44],["freeporn8.com",44],["lesbian8.com",44],["maturetubehere.com",44],["sortporn.com",44],["webcamvau.com",44],["motherporno.com",[44,45,60,131]],["tktube.com",44],["theporngod.com",[44,45]],["pornsocket.com",47],["luxuretv.com",48],["porndig.com",[49,50]],["webcheats.com.br",51],["ceesty.com",[52,53]],["gestyy.com",[52,53]],["corneey.com",53],["destyy.com",53],["festyy.com",53],["sh.st",53],["angrybirdsnest.com",54],["zrozz.com",54],["clix4btc.com",54],["katfile.com",54],["4tests.com",54],["planet-explorers-isos.com",54],["business-standard.com",54],["goltelevision.com",54],["news-und-nachrichten.de",54],["laradiobbs.net",54],["urlaubspartner.net",54],["produktion.de",54],["cinemaxxl.de",54],["bladesalvador.com",54],["tempr.email",54],["trust.zone",54],["cshort.org",54],["friendproject.net",54],["covrhub.com",54],["planetsuzy.org",55],["empflix.com",56],["filespace.com",57],["transparentcalifornia.com",58],["deepbrid.com",59],["submityourflicks.com",60],["3movs.com",60],["cambay.tv",[60,112,129,131]],["bravoerotica.net",[60,131]],["youx.xxx",60],["camclips.tv",[60,212]],["camflow.tv",[60,112,131,177,249]],["camhoes.tv",[60,112,129,131,177,249]],["xmegadrive.com",60],["xxxymovies.com",60],["xxxshake.com",60],["gayck.com",60],["xhand.com",[60,131]],["analdin.com",[60,131]],["webnovel.com",61],["videosgay.me",[62,63]],["wishfast.top",63],["schwaebische.de",64],["mercurynews.com",65],["chicoer.com",65],["dailybreeze.com",65],["dailybulletin.com",65],["dailynews.com",65],["delcotimes.com",65],["eastbaytimes.com",65],["macombdaily.com",65],["ocregister.com",65],["pasadenastarnews.com",65],["pe.com",65],["presstelegram.com",65],["redlandsdailyfacts.com",65],["reviewjournal.com",65],["santacruzsentinel.com",65],["saratogian.com",65],["sentinelandenterprise.com",65],["sgvtribune.com",65],["tampabay.com",65],["times-standard.com",65],["theoaklandpress.com",65],["trentonian.com",65],["twincities.com",65],["whittierdailynews.com",65],["bostonherald.com",65],["dailycamera.com",65],["sbsun.com",65],["dailydemocrat.com",65],["montereyherald.com",65],["orovillemr.com",65],["record-bee.com",65],["redbluffdailynews.com",65],["reporterherald.com",65],["thereporter.com",65],["timescall.com",65],["timesheraldonline.com",65],["ukiahdailyjournal.com",65],["dailylocal.com",65],["8tracks.com",66],["revealname.com",67],["fcportables.com",[68,69]],["golfchannel.com",71],["telemundodeportes.com",71],["stream.nbcsports.com",71],["gamcore.com",72],["porcore.com",72],["69games.xxx",72],["javmix.app",72],["tecknity.com",73],["haaretz.co.il",74],["haaretz.com",74],["hungama.com",74],["a-o.ninja",74],["anime-odcinki.pl",74],["kumpulmanga.org",74],["shortgoo.blogspot.com",74],["tonanmedia.my.id",[74,455]],["yurasu.xyz",74],["isekaipalace.com",74],["megadescarga.net",[75,76,77,78]],["megadescargas.net",[75,76,77,78]],["vikistream.com",79],["eplayer.click",[79,80]],["mega4upload.com",[80,86]],["ennovelas.com",[80,86]],["n-tv.de",81],["brigitte.de",82],["stern.de",82],["foxsports.com.au",83],["canberratimes.com.au",83],["thesimsresource.com",84],["bdnewszh.com",86],["streamservicehd.click",86],["timeforbitco.in",87],["worldofbitco.in",[87,99]],["weatherx.co.in",[87,99]],["getyourbitco.in",87],["sunbtc.space",87],["ctrl.blog",88],["sportlife.es",89],["finofilipino.org",90],["acortarm.xyz",91],["acortame.xyz",91],["speedtest.net",92],["mysflink.blogspot.com",93],["assia.tv",94],["assia4.com",94],["assia24.com",94],["cwtvembeds.com",[96,130]],["camlovers.tv",96],["porntn.com",96],["pornissimo.org",96],["sexcams-24.com",[96,112]],["watchporn.to",[96,112]],["camwhorez.video",96],["footstockings.com",[97,112]],["sbs.com.au",100],["ojogos.com.br",102],["powforums.com",103],["supforums.com",103],["studybullet.com",103],["usgamer.net",104],["recordonline.com",104],["freebitcoin.win",106],["e-monsite.com",106],["coindice.win",106],["sport-tv-guide.live",107],["temp-mails.com",108],["freiepresse.de",109],["investing.com",110],["camhub.cc",112],["love4porn.com",112],["thotvids.com",112],["watchmdh.to",112],["celebwhore.com",112],["cluset.com",112],["4kporn.xxx",112],["xhomealone.com",112],["lusttaboo.com",[112,387]],["hentai-moon.com",112],["mp3fiber.com",113],["suedkurier.de",114],["anysex.com",116],["gomiblog.com",117],["iptvtools.net",117],["vlist.se",118],["pornve.com",119],["coolrom.com.au",120],["pornohirsch.net",121],["marie-claire.es",122],["gamezhero.com",122],["flashgirlgames.com",122],["onlinesudoku.games",122],["mpg.football",122],["sssam.com",122],["globalnews.ca",123],["drinksmixer.com",124],["leitesculinaria.com",124],["fupa.net",125],["browardpalmbeach.com",126],["dallasobserver.com",126],["houstonpress.com",126],["miaminewtimes.com",126],["phoenixnewtimes.com",126],["westword.com",126],["nhentai.net",127],["nowtv.com.tr",128],["caminspector.net",129],["camwhoreshd.com",129],["camgoddess.tv",129],["gay4porn.com",131],["mypornhere.com",131],["mediapason.it",132],["linkspaid.com",132],["tuotromedico.com",132],["neoteo.com",132],["phoneswiki.com",132],["celebmix.com",132],["myneobuxportal.com",132],["oyungibi.com",132],["25yearslatersite.com",132],["jeshoots.com",133],["techhx.com",133],["karanapk.com",133],["videogreen.xyz",134],["playembed.xyz",134],["javhdporn.net",134],["javstream.top",134],["flashplayer.fullstacks.net",136],["cloudapps.herokuapp.com",136],["youfiles.herokuapp.com",136],["temp-mail.org",137],["comnuan.com",138],["veedi.com",139],["battleboats.io",139],["fruitlab.com",140],["haddoz.net",140],["garoetpos.com",140],["stiletv.it",141],["hqtv.biz",143],["liveuamap.com",144],["muvibg.com",144],["linksht.com",[145,146]],["audycje.tokfm.pl",147],["hulu.com",[148,149,150]],["shush.se",151],["emurom.net",152],["allkpop.com",153],["azmath.info",154],["downfile.site",154],["downphanmem.com",154],["expertvn.com",154],["memangbau.com",154],["trangchu.news",154],["aztravels.net",154],["adfoc.us",154],["bharatsarkarijobalert.com",154],["seobar.in",154],["rktemplates.in",154],["odiasongmuzic.com",154],["mktechword.com",154],["picassoappk.com",154],["finley-aaron-love.com",154],["bmremix.in",154],["sbkeditsofficials.in",154],["acejankari.com",154],["odishadjss.in",154],["rojgarsamachar.xyz",154],["techlokye.com",154],["onlinehelpblog.com",154],["dhamakamusics.in",154],["taazatimes24.com",154],["jkssbnotes.com",154],["hindikahanistory.in",154],["azcodinghub.com",154],["remixpapa.in",154],["indisarkrijob.com",154],["mynewsmedia.co",154],["theringtonesworld.in",154],["jobkijankari.in",154],["newsloti.com",154],["iisfvirtual.in",154],["starxinvestor.com",154],["myprivatejobs.com",[154,263]],["wikitraveltips.com",[154,263]],["amritadrino.com",[154,263]],["sahlmarketing.net",154],["filmypoints.in",154],["quotesopia.com",154],["techacode.com",154],["trickms.com",154],["sptfy.be",154],["streamcheck.link",154],["mcafee-com.com",[154,265]],["pickcrackpasswords.blogspot.com",156],["kfrfansub.com",157],["thuglink.com",157],["voipreview.org",157],["hanime.tv",158],["pogo.com",159],["cloudvideo.tv",160],["legionjuegos.org",161],["legionpeliculas.org",161],["legionprogramas.org",161],["16honeys.com",162],["elespanol.com",163],["remodelista.com",164],["coolmathgames.com",[165,166,167,520]],["audiofanzine.com",168],["noweconomy.live",170],["howifx.com",[170,241]],["vavada5com.com",170],["hitokin.net",171],["elil.cc",172],["developerinsider.co",173],["ilprimatonazionale.it",174],["hotabis.com",174],["root-nation.com",174],["italpress.com",174],["airsoftmilsimnews.com",174],["artribune.com",174],["thehindu.com",175],["cambro.tv",[176,177]],["nibelungen-kurier.de",178],["noz.de",179],["pianetamountainbike.it",181],["barchart.com",182],["modelisme.com",183],["parasportontario.ca",183],["prescottenews.com",183],["nrj-play.fr",184],["oeffentlicher-dienst.info",185],["hackingwithreact.com",186],["gutekueche.at",187],["eplfootballmatch.com",188],["peekvids.com",189],["playvids.com",189],["pornflip.com",189],["redensarten-index.de",190],["vw-page.com",191],["viz.com",[192,193]],["queenfaucet.website",194],["0rechner.de",195],["configspc.com",196],["xopenload.me",196],["uptobox.com",196],["uptostream.com",196],["onepiece-tube.com",197],["japgay.com",198],["mega-debrid.eu",199],["dreamdth.com",200],["diaridegirona.cat",202],["diariodeibiza.es",202],["diariodemallorca.es",202],["diarioinformacion.com",202],["eldia.es",202],["emporda.info",202],["farodevigo.es",202],["laopinioncoruna.es",202],["laopiniondemalaga.es",202],["laopiniondemurcia.es",202],["laopiniondezamora.es",202],["laprovincia.es",202],["levante-emv.com",202],["mallorcazeitung.es",202],["regio7.cat",202],["superdeporte.es",202],["playpaste.com",203],["player.rtl2.de",204],["freetutorialsus.com",205],["vidlii.com",[205,221]],["iammagnus.com",205],["dailyvideoreports.net",205],["unityassets4free.com",205],["cnbc.com",206],["puzzles.msn.com",207],["metro.us",207],["newsobserver.com",207],["arkadiumhosted.com",207],["firefaucet.win",209],["55k.io",210],["filelions.online",210],["stmruby.com",210],["direct-link.net",211],["direkt-wissen.com",211],["link-to.net",211],["fullhdxxx.com",213],["pornclassic.tube",214],["tubepornclassic.com",214],["etonline.com",215],["creatur.io",215],["drphil.com",215],["urbanmilwaukee.com",215],["ontiva.com",215],["hideandseek.world",215],["myabandonware.com",215],["kendam.com",215],["wttw.com",215],["synonyms.com",215],["definitions.net",215],["hostmath.com",215],["camvideoshub.com",215],["minhaconexao.com.br",215],["home-made-videos.com",217],["pxrnxx.xyz",217],["amateur-couples.com",217],["slutdump.com",217],["produsat.com",219],["12thman.com",221],["acusports.com",221],["atlantic10.com",221],["auburntigers.com",221],["baylorbears.com",221],["bceagles.com",221],["bgsufalcons.com",221],["big12sports.com",221],["bigten.org",221],["bradleybraves.com",221],["butlersports.com",221],["cmumavericks.com",221],["conferenceusa.com",221],["cyclones.com",221],["dartmouthsports.com",221],["daytonflyers.com",221],["dbupatriots.com",221],["dbusports.com",221],["denverpioneers.com",221],["fduknights.com",221],["fgcuathletics.com",221],["fightinghawks.com",221],["fightingillini.com",221],["floridagators.com",221],["friars.com",221],["friscofighters.com",221],["gamecocksonline.com",221],["goarmywestpoint.com",221],["gobison.com",221],["goblueraiders.com",221],["gobobcats.com",221],["gocards.com",221],["gocreighton.com",221],["godeacs.com",221],["goexplorers.com",221],["goetbutigers.com",221],["gofrogs.com",221],["gogriffs.com",221],["gogriz.com",221],["golobos.com",221],["gomarquette.com",221],["gopack.com",221],["gophersports.com",221],["goprincetontigers.com",221],["gopsusports.com",221],["goracers.com",221],["goshockers.com",221],["goterriers.com",221],["gotigersgo.com",221],["gousfbulls.com",221],["govandals.com",221],["gowyo.com",221],["goxavier.com",221],["gozags.com",221],["gozips.com",221],["griffinathletics.com",221],["guhoyas.com",221],["gwusports.com",221],["hailstate.com",221],["hamptonpirates.com",221],["hawaiiathletics.com",221],["hokiesports.com",221],["huskers.com",221],["icgaels.com",221],["iuhoosiers.com",221],["jsugamecocksports.com",221],["longbeachstate.com",221],["loyolaramblers.com",221],["lrtrojans.com",221],["lsusports.net",221],["morrisvillemustangs.com",221],["msuspartans.com",221],["muleriderathletics.com",221],["mutigers.com",221],["navysports.com",221],["nevadawolfpack.com",221],["niuhuskies.com",221],["nkunorse.com",221],["nuhuskies.com",221],["nusports.com",221],["okstate.com",221],["olemisssports.com",221],["omavs.com",221],["ovcsports.com",221],["owlsports.com",221],["purduesports.com",221],["redstormsports.com",221],["richmondspiders.com",221],["sfajacks.com",221],["shupirates.com",221],["siusalukis.com",221],["smcgaels.com",221],["smumustangs.com",221],["soconsports.com",221],["soonersports.com",221],["themw.com",221],["tulsahurricane.com",221],["txst.com",221],["txstatebobcats.com",221],["ubbulls.com",221],["ucfknights.com",221],["ucirvinesports.com",221],["uconnhuskies.com",221],["uhcougars.com",221],["uicflames.com",221],["umterps.com",221],["uncwsports.com",221],["unipanthers.com",221],["unlvrebels.com",221],["uoflsports.com",221],["usdtoreros.com",221],["utahstateaggies.com",221],["utepathletics.com",221],["utrockets.com",221],["uvmathletics.com",221],["uwbadgers.com",221],["villanova.com",221],["wkusports.com",221],["wmubroncos.com",221],["woffordterriers.com",221],["1pack1goal.com",221],["bcuathletics.com",221],["bubraves.com",221],["goblackbears.com",221],["golightsgo.com",221],["gomcpanthers.com",221],["goutsa.com",221],["mercerbears.com",221],["pirateblue.com",221],["pirateblue.net",221],["pirateblue.org",221],["quinnipiacbobcats.com",221],["towsontigers.com",221],["tribeathletics.com",221],["tribeclub.com",221],["utepminermaniacs.com",221],["utepminers.com",221],["wkutickets.com",221],["aopathletics.org",221],["atlantichockeyonline.com",221],["bigsouthnetwork.com",221],["bigsouthsports.com",221],["chawomenshockey.com",221],["dbupatriots.org",221],["drakerelays.org",221],["ecac.org",221],["ecacsports.com",221],["emueagles.com",221],["emugameday.com",221],["gculopes.com",221],["godrakebulldog.com",221],["godrakebulldogs.com",221],["godrakebulldogs.net",221],["goeags.com",221],["goislander.com",221],["goislanders.com",221],["gojacks.com",221],["gomacsports.com",221],["gseagles.com",221],["hubison.com",221],["iowaconference.com",221],["ksuowls.com",221],["lonestarconference.org",221],["mascac.org",221],["midwestconference.org",221],["mountaineast.org",221],["niu-pack.com",221],["nulakers.ca",221],["oswegolakers.com",221],["ovcdigitalnetwork.com",221],["pacersports.com",221],["rmacsports.org",221],["rollrivers.com",221],["samfordsports.com",221],["uncpbraves.com",221],["usfdons.com",221],["wiacsports.com",221],["alaskananooks.com",221],["broncathleticfund.com",221],["cameronaggies.com",221],["columbiacougars.com",221],["etownbluejays.com",221],["gobadgers.ca",221],["golancers.ca",221],["gometrostate.com",221],["gothunderbirds.ca",221],["kentstatesports.com",221],["lehighsports.com",221],["lopers.com",221],["lycoathletics.com",221],["lycomingathletics.com",221],["maraudersports.com",221],["mauiinvitational.com",221],["msumavericks.com",221],["nauathletics.com",221],["nueagles.com",221],["nwusports.com",221],["oceanbreezenyc.org",221],["patriotathleticfund.com",221],["pittband.com",221],["principiaathletics.com",221],["roadrunnersathletics.com",221],["sidearmsocial.com",221],["snhupenmen.com",221],["stablerarena.com",221],["stoutbluedevils.com",221],["uwlathletics.com",221],["yumacs.com",221],["collegefootballplayoff.com",221],["csurams.com",221],["cubuffs.com",221],["gobearcats.com",221],["gohuskies.com",221],["mgoblue.com",221],["osubeavers.com",221],["pittsburghpanthers.com",221],["rolltide.com",221],["texassports.com",221],["thesundevils.com",221],["uclabruins.com",221],["wvuathletics.com",221],["wvusports.com",221],["arizonawildcats.com",221],["calbears.com",221],["cuse.com",221],["georgiadogs.com",221],["goducks.com",221],["goheels.com",221],["gostanford.com",221],["insidekstatesports.com",221],["insidekstatesports.info",221],["insidekstatesports.net",221],["insidekstatesports.org",221],["k-stateathletics.com",221],["k-statefootball.net",221],["k-statefootball.org",221],["k-statesports.com",221],["k-statesports.net",221],["k-statesports.org",221],["k-statewomenshoops.com",221],["k-statewomenshoops.net",221],["k-statewomenshoops.org",221],["kstateathletics.com",221],["kstatefootball.net",221],["kstatefootball.org",221],["kstatesports.com",221],["kstatewomenshoops.com",221],["kstatewomenshoops.net",221],["kstatewomenshoops.org",221],["ksuathletics.com",221],["ksusports.com",221],["scarletknights.com",221],["showdownforrelief.com",221],["syracusecrunch.com",221],["texastech.com",221],["theacc.com",221],["ukathletics.com",221],["usctrojans.com",221],["utahutes.com",221],["utsports.com",221],["wsucougars.com",221],["mangadods.com",221],["tricksplit.io",221],["fangraphs.com",222],["4players.de",[223,312]],["buffed.de",223],["gamesaktuell.de",223],["gamezone.de",223],["pcgames.de",223],["videogameszone.de",223],["planetaminecraft.com",224],["cravesandflames.com",225],["codesnse.com",225],["link.paid4file.com",225],["flyad.vip",225],["lapresse.ca",226],["kolyoom.com",227],["ilovephd.com",227],["upstream.to",228],["negumo.com",229],["games.wkb.jp",[230,231]],["channelmyanmar.org",[232,233]],["u-s-news.com",233],["fandom.com",[234,538,539]],["kenshi.fandom.com",235],["hausbau-forum.de",236],["fake-it.ws",237],["laksa19.github.io",238],["1shortlink.com",239],["nesia.my.id",240],["makemoneywithurl.com",241],["junkyponk.com",241],["healthfirstweb.com",241],["vocalley.com",241],["yogablogfit.com",241],["en.financerites.com",241],["blogtechh.com",241],["host2loan.com",241],["resetoff.pl",242],["sexodi.com",242],["cdn77.org",243],["howtofixwindows.com",244],["3sexporn.com",245],["momxxxsex.com",245],["myfreevintageporn.com",245],["penisbuyutucum.net",245],["lightnovelworld.com",246],["ujszo.com",247],["newsmax.com",248],["bobs-tube.com",249],["nadidetarifler.com",250],["siz.tv",250],["suzylu.co.uk",[251,252]],["onworks.net",253],["yabiladi.com",253],["downloadsoft.net",254],["imgair.net",255],["imgblaze.net",255],["imgfrost.net",255],["pixsera.net",255],["vestimage.site",255],["imgwia.buzz",255],["testlanguages.com",256],["newsinlevels.com",256],["videosinlevels.com",256],["ultimate-guitar.com",257],["teachmemicro.com",258],["willcycle.com",258],["2ndrun.tv",258],["rackusreads.com",258],["xyzsports111.xyz",[259,260,261]],["xyzsports112.xyz",[259,260,261]],["xyzsports113.xyz",[259,260,261]],["xyzsports114.xyz",[259,260,261]],["xyzsprtsfrmr1.site",[259,260,261]],["xyzsprtsfrmr2.site",[259,260,261]],["claimbits.net",262],["luckydice.net",263],["adarima.org",263],["tieutietkiem.com",263],["weatherwx.com",263],["sattaguess.com",263],["winshell.de",263],["rosasidan.ws",263],["modmakers.xyz",263],["gamepure.in",263],["warrenrahul.in",263],["austiblox.net",263],["upiapi.in",263],["myownguess.in",263],["networkhint.com",263],["watchhentai.net",263],["thichcode.net",263],["texturecan.com",263],["tikmate.app",[263,492]],["4funbox.com",264],["nephobox.com",264],["1024tera.com",264],["btcbitco.in",[265,266]],["btcsatoshi.net",265],["cempakajaya.com",265],["crypto4yu.com",265],["readbitcoin.org",265],["wiour.com",265],["aiimgvlog.fun",[265,271]],["exactpay.online",265],["kiddyearner.com",265],["blog.cryptowidgets.net",266],["blog.insurancegold.in",266],["blog.wiki-topia.com",266],["blog.coinsvalue.net",266],["blog.cookinguide.net",266],["blog.freeoseocheck.com",266],["blog24.me",266],["rsadnetworkinfo.com",266],["rsinsuranceinfo.com",266],["rsfinanceinfo.com",266],["rsgamer.app",266],["rssoftwareinfo.com",266],["rshostinginfo.com",266],["rseducationinfo.com",266],["homeairquality.org",268],["faucettronn.click",268],["ticketmaster.sg",268],["aduzz.com",269],["bitcrypto.info",269],["bildirim.link",270],["appsbull.com",272],["diudemy.com",272],["maqal360.com",272],["sinonimos.de",[273,274]],["antonimos.de",[273,274]],["tiktokcounter.net",273],["quesignifi.ca",[273,275]],["lifesurance.info",276],["infokeeda.xyz",277],["arcai.com",278],["my-code4you.blogspot.com",279],["vlxxs.net",280],["rapelust.com",280],["vtube.to",280],["vtplay.net",280],["desitelugusex.com",280],["xvideos-downloader.net",280],["xxxvideotube.net",280],["sdefx.cloud",280],["nozomi.la",280],["moviesonlinefree.net",280],["flickr.com",281],["firefile.cc",282],["pestleanalysis.com",282],["kochamjp.pl",282],["tutorialforlinux.com",282],["whatsaero.com",282],["animeblkom.net",[282,298]],["blkom.com",282],["globes.co.il",[283,284]],["jardiner-malin.fr",285],["tw-calc.net",286],["ohmybrush.com",287],["talkceltic.net",288],["mentalfloss.com",289],["uprafa.com",290],["cube365.net",291],["nightfallnews.com",[292,293]],["wwwfotografgotlin.blogspot.com",294],["freelistenonline.com",294],["badassdownloader.com",295],["quickporn.net",296],["yellowbridge.com",297],["aosmark.com",299],["atozmath.com",[301,302,303,304,305,306,307]],["newyorker.com",308],["brighteon.com",309],["more.tv",310],["video1tube.com",311],["alohatube.xyz",311],["fshost.me",313],["link.cgtips.org",314],["hentaicloud.com",315],["netfapx.com",317],["paperzonevn.com",319],["hentaienglish.com",320],["hentaiporno.xxx",320],["venge.io",[321,322]],["btcbux.io",323],["its.porn",[324,325]],["atv.at",326],["kusonime.com",327],["jetpunk.com",329],["imgur.com",330],["hentai-party.com",331],["hentaicomics.pro",331],["xxx-comics.pro",331],["genshinimpactcalculator.com",334],["mysexgames.com",335],["embed.indavideo.hu",338],["coinurl.net",[339,340]],["gdr-online.com",341],["mmm.dk",342],["iqiyi.com",[343,344,485]],["m.iqiyi.com",345],["japopav.tv",346],["lvturbo.com",346],["nbcolympics.com",347],["apkhex.com",348],["indiansexstories2.net",349],["issstories.xyz",349],["1340kbbr.com",350],["gorgeradio.com",350],["kduk.com",350],["kedoam.com",350],["kejoam.com",350],["kelaam.com",350],["khsn1230.com",350],["kjmx.rocks",350],["kloo.com",350],["klooam.com",350],["klykradio.com",350],["kmed.com",350],["kmnt.com",350],["kool991.com",350],["kpnw.com",350],["kppk983.com",350],["krktcountry.com",350],["ktee.com",350],["kwro.com",350],["kxbxfm.com",350],["thevalley.fm",350],["dsocker1234.blogspot.com",351],["surfline.com",[352,372]],["blick.ch",353],["mgnet.xyz",354],["designtagebuch.de",355],["pixroute.com",356],["uploady.io",357],["calculator-online.net",358],["porngames.club",359],["sexgames.xxx",359],["111.90.159.132",360],["battleplan.news",360],["mobile-tracker-free.com",361],["pfps.gg",362],["ac-illust.com",[363,364]],["photo-ac.com",[363,364]],["social-unlock.com",365],["ninja.io",366],["sourceforge.net",367],["samfirms.com",368],["banned.video",369],["conspiracyfact.info",369],["freeworldnews.tv",369],["madmaxworld.tv",369],["huffpost.com",370],["ingles.com",371],["spanishdict.com",371],["play.tv3.ee",373],["play.tv3.lt",373],["play.tv3.lv",373],["tv3play.skaties.lv",373],["trendyoum.com",374],["bulbagarden.net",375],["doomovie-hd.live",376],["madoohd.com",376],["moviestars.to",377],["hollywoodlife.com",378],["searchresults.cc",379],["mat6tube.com",380],["textstudio.co",381],["newtumbl.com",382],["nevcoins.club",384],["mail.com",385],["erome.com",388],["oggi.it",[389,390]],["manoramamax.com",389],["video.gazzetta.it",[389,390]],["mangakita.id",391],["mangakita.net",391],["poscishd.online",392],["avpgalaxy.net",393],["mhma12.tech",394],["panda-novel.com",395],["zebranovel.com",395],["lightsnovel.com",395],["eaglesnovel.com",395],["pandasnovel.com",395],["zadfaucet.com",396],["ewrc-results.com",397],["kizi.com",398],["cyberscoop.com",399],["fedscoop.com",399],["canale.live",400],["mafiatown.pl",[401,402]],["jeep-cj.com",403],["sponsorhunter.com",404],["cloudcomputingtopics.net",405],["likecs.com",406],["tiscali.it",407],["linkspy.cc",408],["tutelehd3.xyz",409],["dirty.pink",[410,411,412]],["adshnk.com",413],["chattanoogan.com",414],["adsy.pw",415],["playstore.pw",415],["socialmediagirls.com",416],["windowspro.de",417],["snapinsta.app",418],["tvtv.ca",419],["tvtv.us",419],["mydaddy.cc",420],["autosport.com",421],["motorsport.com",421],["roadtrippin.fr",422],["redketchup.io",[423,424,425]],["anyporn.com",[426,442]],["bravoporn.com",426],["bravoteens.com",426],["crocotube.com",426],["hellmoms.com",426],["hellporno.com",426],["sex3.com",426],["tubewolf.com",426],["xbabe.com",426],["xcum.com",426],["zedporn.com",426],["imagetotext.info",427],["infokik.com",428],["freepik.com",429],["ddwloclawek.pl",[430,431]],["deezer.com",432],["my-subs.co",433],["plaion.com",434],["rapid-cloud.co",435],["in-jpn.com",435],["slideshare.net",[436,437]],["ustreasuryyieldcurve.com",438],["businesssoftwarehere.com",439],["goo.st",439],["freevpshere.com",439],["softwaresolutionshere.com",439],["easymc.io",443],["staige.tv",444],["androidadult.com",445],["streamvid.net",446],["watchtv24.com",447],["cellmapper.net",448],["medscape.com",449],["newscon.org",[450,451]],["arkadium.com",452],["app.blubank.com",453],["sportdeutschland.tv",454],["kcra.com",454],["wcvb.com",454],["ccthesims.com",456],["chromeready.com",456],["coursedrive.org",456],["dtbps3games.com",456],["illustratemagazine.com",456],["uknip.co.uk",456],["vod.pl",457],["megadrive-emulator.com",458],["animesaga.in",461],["moviesapi.club",461],["bestx.stream",461],["watchx.top",461],["digimanie.cz",462],["svethardware.cz",462],["srvy.ninja",463],["drawer-opportunity-i-243.site",464],["tchatche.com",465],["ozulmanga.com",466],["edmdls.com",467],["freshremix.net",467],["scenedl.org",467],["trakt.tv",[468,469,470]],["shroomers.app",471],["di.fm",[472,473,474]],["pc-builds.com",475],["qtoptens.com",475],["reuters.com",475],["today.com",475],["videogamer.com",475],["wrestlinginc.com",475],["gbatemp.net",475],["techedubyte.com",476],["movie-th.tv",477],["iwanttfc.com",478],["nutraingredients-asia.com",479],["nutraingredients-latam.com",479],["nutraingredients-usa.com",479],["nutraingredients.com",479],["livesportsclub.me",480],["rogstream.fun",480],["ozulscansen.com",481],["fitnessbr.click",482],["minhareceita.xyz",482],["doomied.monster",483],["lookmovie2.to",483],["royalroad.com",484],["biletomat.pl",486],["hextank.io",[488,489]],["gofilmizle.com",[490,491]],["sagewater.com",493],["redlion.net",493],["satdl.com",494],["vidstreaming.xyz",495],["myradioonline.pl",496],["teamskeet.com",497],["tacobell.com",499],["webtoons.com",[500,501]],["zefoy.com",502],["natgeotv.com",504],["br.de",505],["pasteboard.co",506],["clickhole.com",507],["deadspin.com",507],["gizmodo.com",507],["jalopnik.com",507],["jezebel.com",507],["kotaku.com",507],["lifehacker.com",507],["splinternews.com",507],["theinventory.com",507],["theonion.com",507],["theroot.com",507],["thetakeout.com",507],["pewresearch.org",507],["los40.com",[508,509]],["as.com",509],["telegraph.co.uk",[510,511]],["poweredbycovermore.com",[510,557]],["lumens.com",[510,557]],["verizon.com",512],["humanbenchmark.com",513],["politico.com",514],["officedepot.co.cr",[515,516]],["usnews.com",519],["factable.com",521],["zee5.com",522],["gala.fr",523],["geo.fr",523],["voici.fr",523],["gloucestershirelive.co.uk",524],["arsiv.mackolik.com",525],["jacksonguitars.com",526],["scandichotels.com",527],["stylist.co.uk",528],["nettiauto.com",529],["thaiairways.com",[530,531]],["cerbahealthcare.it",[532,533]],["futura-sciences.com",[532,548]],["tiendaenlinea.claro.com.ni",[534,535]],["tieba.baidu.com",536],["linktr.ee",537],["grasshopper.com",[540,541]],["epson.com.cn",[542,543]],["oe24.at",[544,545]],["szbz.de",544],["platform.autods.com",[546,547]],["wikihow.com",549],["citibank.com.sg",550],["uol.com.br",[551,552,553]],["gazzetta.gr",554],["digicol.dpm.org.cn",[555,556]],["virginmediatelevision.ie",558],["larazon.es",[559,560]],["waitrosecellar.com",[561,562,563]],["kicker.de",564],["sharpen-free-design-generator.netlify.app",[565,566]],["help.cashctrl.com",[567,568]],["commande.rhinov.pro",[569,570]],["ecom.wixapps.net",[569,570]],["tipranks.com",[571,572]],["iceland.co.uk",[573,574,575]],["socket.pearsoned.com",576],["tntdrama.com",[577,578]],["free-mp3-download.net",580]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,22]],["1movies",[14,21]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["hamsterix",15],["xhamster",15],["xhamster1",15],["xhamster10",15],["xhamster11",15],["xhamster12",15],["xhamster13",15],["xhamster14",15],["xhamster15",15],["xhamster16",15],["xhamster17",15],["xhamster18",15],["xhamster19",15],["xhamster20",15],["xhamster2",15],["xhamster3",15],["xhamster4",15],["xhamster42",15],["xhamster5",15],["xhamster7",15],["xhamster8",15],["vidlox",[16,17]],["primewire",18],["streanplay",[18,20]],["sbplay",18],["milfnut",18],["fmovies",22],["sxyprn",26],["hqq",[27,28]],["waaw",[28,29]],["younetu",28],["123link",30],["adshort",30],["linkshorts",30],["adsrt",30],["vinaurl",30],["adfloz",30],["dutchycorp",30],["shortearn",30],["pingit",30],["shrink",30],["tmearn",30],["megalink",30],["miniurl",30],["clk",30],["pureshort",30],["shrinke",30],["shrinkme",30],["pcprogramasymas",30],["link1s",30],["shortzzy",30],["shorttey",[30,215]],["lite-link",30],["adcorto",30],["zshort",30],["upfiles",30],["linkfly",30],["wplink",30],["seulink",30],["encurtalink",30],["camwhores",[31,44,95,96,97]],["tube8",[32,33]],["youporn",33],["redtube",33],["pornhub",[33,201]],["upornia",[35,36]],["xtits",[60,131]],["streamwish",[62,63]],["pouvideo",70],["povvideo",70],["povw1deo",70],["povwideo",70],["powv1deo",70],["powvibeo",70],["powvideo",70],["powvldeo",70],["acortalo",[75,76,77,78]],["acortar",[75,76,77,78]],["plyjam",[79,80]],["fxporn69",85],["vipbox",86],["viprow",86],["desbloqueador",91],["xberuang",93],["teknorizen",93],["kickassanime",98],["subtorrents",101],["subtorrents1",101],["newpelis",101],["pelix",101],["allcalidad",101],["infomaniakos",101],["filecrypt",105],["tornadomovies",111],["sexwebvideo",112],["mangovideo",112],["icdrama",118],["mangasail",118],["file4go",120],["asianclub",134],["anitube",140],["mixdrop",142],["azsoft",154],["uploadev",169],["ver-pelis-online",180],["ancient-origins",188],["spankbang",208],["lookcam",215],["lootlinks",215],["dpstream",218],["bluemediafiles",220],["docer",242],["pixlev",255],["terabox",264],["skymovieshd",280],["dvdplay",280],["ctrlv",300],["crackstreams",318],["123movieshd",328],["uproxy",332],["animesa",333],["cinecalidad",[336,337]],["apkmaven",383],["gmx",386],["gamereactor",441],["tvhay",[459,460]],["lookmovie",483],["lk21official",487],["www.google",498],["officedepot",[517,518]],["dropgalaxy",579]]);

const exceptionsMap = new Map([["pingit.com",[30]],["pingit.me",[30]],["lookmovie.studio",[483]]]);

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
