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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["__NUXT__.state.advertisement.adBlockWallEnabled","false"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["hasAdblocker","false"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["wpsafelinkCount","0"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["waitTime","0"],["showadas","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["window.isAdblockActive","false"],["supportedBrowsers",""]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["bild.de",10],["sueddeutsche.de",11],["watson.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.com",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,316]],["gadgets.es",[12,316]],["amateurporn.co",[12,109]],["wiwo.de",13],["masteranime.es",14],["fullxh.com",15],["megaxh.com",15],["movingxh.world",15],["unlockxh4.com",15],["xhadult2.com",15],["xhadult3.com",15],["xhadult4.com",15],["xhadult5.com",15],["xhamster46.com",15],["xhday.com",15],["xhday1.com",15],["xhmoon5.com",15],["xhplanet1.com",15],["xhplanet2.com",15],["xhreal2.com",15],["xhreal3.com",15],["xhtab2.com",15],["xhtree.com",15],["xhvictory.com",15],["xhwebsite.com",15],["xhwebsite2.com",15],["xhwide1.com",15],["xhwide8.com",15],["alphaporno.com",[18,414]],["porngem.com",18],["uploadbank.com",18],["shortit.pw",[18,112]],["familyporn.tv",18],["cloudemb.com",[18,335]],["sbplay1.com",18],["id45.cyou",18],["85tube.com",[18,94]],["k1nk.co",18],["watchasians.cc",18],["imsdb.pw",[18,28]],["soltoshindo.com",18],["techtimes.com",19],["dronedj.com",21],["freeplayervideo.com",22],["nazarickol.com",22],["player-cdn.com",22],["apinchcaseation.com",22],["bigclatterhomesguideservice.com",22],["bradleyviewdoctor.com",22],["denisegrowthwide.com",22],["edwardarriveoften.com",22],["housecardsummerbutton.com",22],["jamiesamewalk.com",22],["kennethofficialitem.com",22],["nectareousoverelate.com",22],["paulkitchendark.com",22],["stevenimaginelittle.com",22],["strawberriesporail.com",22],["timberwoodanotia.com",22],["tinycat-voe-fashion.com",22],["troyyourlead.com",22],["uptodatefinishconference.com",22],["uptodatefinishconferenceroom.com",22],["voe.sx",22],["lukecomparetwo.com",22],["seanshowcould.com",22],["motphimtv.com",22],["rabbitstream.net",22],["streamlare.com",22],["projectfreetv.one",22],["nolive.me",23],["cbs.com",24],["paramountplus.com",24],["player.glomex.com",25],["merkur.de",25],["tz.de",25],["hotpornfile.org",28],["player.tabooporns.com",28],["wiztube.xyz",28],["multiup.us",28],["rpdrlatino.live",28],["peliculas8k.com",[28,29]],["video.q34r.org",28],["69x.online",28],["czxxx.org",28],["vvtplayer.online",28],["netu.ac",28],["dirtyvideo.fun",29],["adbull.org",30],["mitly.us",30],["linkrex.net",30],["linx.cc",30],["oke.io",30],["dz4link.com",30],["linclik.com",30],["shrt10.com",30],["loptelink.com",30],["cut-fly.com",30],["linkfinal.com",30],["payskip.org",30],["cutpaid.com",30],["forexmab.com",30],["linkjust.com",30],["linkszia.co",30],["leechpremium.link",30],["icutlink.com",[30,132]],["stfly.me",30],["oncehelp.com",30],["bit-url.com",30],["rgl.vn",30],["reqlinks.net",30],["megaurl.in",30],["megafly.in",30],["bitlk.com",30],["qlinks.eu",30],["link.3dmili.com",30],["short-fly.com",30],["foxseotools.com",30],["pngit.live",30],["link.turkdown.com",30],["urlty.com",30],["7r6.com",30],["oko.sh",30],["ckk.ai",30],["fc.lc",30],["fstore.biz",30],["cuts-url.com",30],["eio.io",30],["exe.app",30],["exee.io",30],["exey.io",30],["skincarie.com",30],["exeo.app",30],["birdurls.com",30],["coinlyhub.com",[30,213]],["adsafelink.com",30],["aii.sh",30],["cybertechng.com",[30,222]],["owllink.net",30],["cutdl.xyz",30],["iir.ai",30],["shorteet.com",[30,242]],["sekilastekno.com",30],["smoner.com",30],["gplinks.co",30],["xpshort.com",30],["upshrink.com",30],["enit.in",[30,238]],["ez4short.com",30],["easysky.in",30],["veganab.co",30],["adrinolinks.in",30],["go.gyanitheme.com",30],["go.theforyou.in",30],["go.hipsonyc.com",30],["try2link.com",30],["jameeltips.us",30],["gainl.ink",30],["promo-visits.site",30],["satoshi-win.xyz",[30,260]],["shorterall.com",30],["encurtandourl.com",30],["forextrader.site",30],["postazap.com",[30,151]],["tinys.click",[30,222]],["cpm.icu",30],["easycut.io",30],["panyshort.link",30],["enagato.com",30],["pandaznetwork.com",30],["tii.la",30],["loan2host.com",30],["tei.ai",30],["tii.ai",30],["linkshrnk.com",30],["linksly.co",30],["pkr.pw",30],["imagenesderopaparaperros.com",30],["shortenbuddy.com",30],["gibit.xyz",30],["apksvip.com",30],["cashurl.in",30],["4cash.me",30],["namaidani.com",30],["teknomuda.com",30],["illink.net",30],["miuiku.com",30],["yourtechnology.online",30],["savelink.site",30],["droplink.co",30],["recipestutorials.com",30],["apkshrt.com",30],["srts.me",30],["kutmoney.com",30],["kutt.io",30],["sanoybonito.club",30],["samaa-pro.com",30],["miklpro.com",30],["modapk.link",30],["shrinkforearn.in",30],["techyuth.xyz",30],["1shorten.com",30],["ccurl.net",30],["st23q.com",30],["beautyram.info",30],["viraloc.com",30],["kiiw.icu",30],["galaxy-link.space",30],["linkpoi.me",30],["usdshort.com",30],["bitcoinly.in",30],["menjelajahi.com",30],["pewgame.com",30],["yxoshort.com",30],["1link.vip",30],["haonguyen.top",30],["claimfreebits.com",30],["crazyblog.in",30],["gtlink.co",30],["link.tokenoto.com",30],["cutearn.net",30],["rshrt.com",30],["short.palmeratv.com",30],["filezipa.com",30],["dz-linkk.com",30],["theblissempire.com",30],["shortlink.prz.pw",30],["finanzas-vida.com",30],["adurly.cc",30],["pix4link.com",30],["paid4.link",30],["link.asiaon.top",30],["go.gets4link.com",30],["download.sharenulled.net",30],["automotur.club",30],["beingtek.com",30],["shorturl.unityassets4free.com",30],["disheye.com",30],["techymedies.com",30],["techysuccess.com",30],["za.gl",[30,152]],["download.baominh.tech",30],["bblink.com",30],["linkbr.xyz",30],["myad.biz",30],["swzz.xyz",30],["vevioz.com",30],["charexempire.com",30],["clk.asia",30],["egfly.xyz",30],["linka.click",30],["sturls.com",30],["myshrinker.com",30],["go.adinsurance.xyz",30],["dash-free.com",[30,222]],["snowurl.com",[30,222]],["netfile.cc",30],["link.insurance-space.xyz",30],["link.insurglobal.xyz",30],["theconomy.me",30],["rajsayt.xyz",30],["rocklink.in",30],["adinsurance.xyz",30],["insurglobal.xyz",30],["techgeek.digital",30],["download3s.net",30],["shortx.net",30],["musicc.xyz",30],["shortawy.com",30],["tlin.me",30],["apprepack.com",30],["sh2rt.com",30],["up-load.one",30],["zuba.link",30],["atglinks.com",30],["du-link.in",30],["linksfy.co",30],["news.speedynews.xyz",30],["golink.xaydungplus.com",30],["bestcash2020.com",30],["hoxiin.com",30],["technemo.xyz",30],["go.linkbnao.com",30],["link-yz.com",30],["paylinnk.com",30],["thizissam.in",30],["ier.ai",30],["bloggertheme.xyz",30],["adslink.pw",30],["oii.io",30],["novelssites.com",30],["links.medipost.org",30],["faucetcrypto.net",30],["short.freeltc.top",30],["trxking.xyz",30],["weadown.com",30],["m.bloggingguidance.com",30],["blog.onroid.com",30],["cutty.app",30],["link.codevn.net",30],["upfilesurls.com",30],["shareus.site",30],["link4rev.site",30],["bloginguru.xyz",30],["celinks.net",30],["c2g.at",30],["shortzu.icu",30],["bitcosite.com",30],["cryptosh.pro",30],["sigmalinks.in",30],["link68.net",30],["traffic123.net",30],["windowslite.net",[30,222]],["coinsl.click",30],["exalink.fun",30],["exego.app",[30,258]],["viewfr.com",30],["cl1ca.com",30],["4br.me",30],["fir3.net",30],["kiddyshort.com",30],["watchmygf.me",[31,56]],["camwhorez.tv",[31,42,93,94]],["fpo.xxx",[31,58]],["sexemix.com",31],["heavyfetish.com",[31,490]],["you-porn.com",33],["youporngay.com",33],["youpornru.com",33],["9908ww.com",33],["adelaidepawnbroker.com",33],["bztube.com",33],["hotovs.com",33],["insuredhome.org",33],["nudegista.com",33],["pornluck.com",33],["vidd.se",33],["pornhub.com",33],["pornerbros.com",34],["freep.com",34],["porn.com",35],["tune.pk",36],["noticias.gospelmais.com.br",37],["techperiod.com",37],["jacquieetmicheltv.net",[38,39]],["illicoporno.com",38],["lavoixdux.com",38],["tonpornodujour.com",38],["jacquieetmichel.net",38],["swame.com",38],["vosfemmes.com",38],["voyeurfrance.net",38],["viki.com",[40,41]],["sleazyneasy.com",[42,43,44]],["smutr.com",[42,209]],["yourporngod.com",[42,43]],["javbangers.com",[42,305]],["camfox.com",42],["camthots.tv",[42,126]],["shegotass.info",42],["amateur8.com",42],["bigtitslust.com",42],["ebony8.com",42],["freeporn8.com",42],["lesbian8.com",42],["maturetubehere.com",42],["sortporn.com",42],["webcamvau.com",42],["motherporno.com",[42,43,58,128]],["tktube.com",42],["theporngod.com",[42,43]],["pornsocket.com",45],["luxuretv.com",46],["porndig.com",[47,48]],["webcheats.com.br",49],["ceesty.com",[50,51]],["gestyy.com",[50,51]],["corneey.com",51],["destyy.com",51],["festyy.com",51],["sh.st",51],["angrybirdsnest.com",52],["zrozz.com",52],["clix4btc.com",52],["katfile.com",52],["4tests.com",52],["planet-explorers-isos.com",52],["business-standard.com",52],["goltelevision.com",52],["news-und-nachrichten.de",52],["laradiobbs.net",52],["urlaubspartner.net",52],["produktion.de",52],["cinemaxxl.de",52],["bladesalvador.com",52],["tempr.email",52],["cshort.org",52],["friendproject.net",52],["covrhub.com",52],["planetsuzy.org",53],["empflix.com",54],["filespace.com",55],["transparentcalifornia.com",56],["deepbrid.com",57],["submityourflicks.com",58],["3movs.com",58],["cambay.tv",[58,109,126,128]],["bravoerotica.net",[58,128]],["youx.xxx",58],["camclips.tv",[58,209]],["camflow.tv",[58,109,128,174,246]],["camhoes.tv",[58,109,126,128,174,246]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,128]],["analdin.com",[58,128]],["webnovel.com",59],["videosgay.me",[60,61]],["wishfast.top",61],["schwaebische.de",62],["mercurynews.com",63],["chicoer.com",63],["dailybreeze.com",63],["dailybulletin.com",63],["dailynews.com",63],["delcotimes.com",63],["eastbaytimes.com",63],["macombdaily.com",63],["ocregister.com",63],["pasadenastarnews.com",63],["pe.com",63],["presstelegram.com",63],["redlandsdailyfacts.com",63],["reviewjournal.com",63],["santacruzsentinel.com",63],["saratogian.com",63],["sentinelandenterprise.com",63],["sgvtribune.com",63],["tampabay.com",63],["times-standard.com",63],["theoaklandpress.com",63],["trentonian.com",63],["twincities.com",63],["whittierdailynews.com",63],["bostonherald.com",63],["dailycamera.com",63],["sbsun.com",63],["dailydemocrat.com",63],["montereyherald.com",63],["orovillemr.com",63],["record-bee.com",63],["redbluffdailynews.com",63],["reporterherald.com",63],["thereporter.com",63],["timescall.com",63],["timesheraldonline.com",63],["ukiahdailyjournal.com",63],["dailylocal.com",63],["8tracks.com",64],["revealname.com",65],["fcportables.com",[66,67]],["golfchannel.com",69],["telemundodeportes.com",69],["stream.nbcsports.com",69],["gamcore.com",70],["porcore.com",70],["69games.xxx",70],["javmix.app",70],["tecknity.com",71],["haaretz.co.il",72],["haaretz.com",72],["hungama.com",72],["a-o.ninja",72],["anime-odcinki.pl",72],["kumpulmanga.org",72],["shortgoo.blogspot.com",72],["tonanmedia.my.id",[72,442]],["yurasu.xyz",72],["isekaipalace.com",72],["megadescarga.net",[73,74,75,76]],["megadescargas.net",[73,74,75,76]],["vikistream.com",77],["eplayer.click",[77,78]],["mega4upload.com",[78,84]],["ennovelas.com",[78,84]],["n-tv.de",79],["brigitte.de",80],["stern.de",80],["foxsports.com.au",81],["canberratimes.com.au",81],["thesimsresource.com",82],["bdnewszh.com",84],["streamservicehd.click",84],["timeforbitco.in",85],["worldofbitco.in",[85,97]],["weatherx.co.in",[85,97]],["getyourbitco.in",85],["sunbtc.space",85],["ctrl.blog",86],["sportlife.es",87],["finofilipino.org",88],["acortarm.xyz",89],["acortame.xyz",89],["speedtest.net",90],["mysflink.blogspot.com",91],["assia.tv",92],["assia4.com",92],["assia24.com",92],["cwtvembeds.com",[94,127]],["camlovers.tv",94],["porntn.com",94],["pornissimo.org",94],["sexcams-24.com",[94,109]],["watchporn.to",[94,109]],["camwhorez.video",94],["footstockings.com",[95,109]],["sbs.com.au",98],["ojogos.com.br",100],["powforums.com",101],["supforums.com",101],["studybullet.com",101],["usgamer.net",102],["recordonline.com",102],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["temp-mails.com",105],["freiepresse.de",106],["investing.com",107],["camhub.cc",109],["love4porn.com",109],["thotvids.com",109],["watchmdh.to",109],["celebwhore.com",109],["cluset.com",109],["4kporn.xxx",109],["xhomealone.com",109],["lusttaboo.com",[109,376]],["hentai-moon.com",109],["mp3fiber.com",110],["suedkurier.de",111],["anysex.com",113],["gomiblog.com",114],["iptvtools.net",114],["vlist.se",115],["pornve.com",116],["coolrom.com.au",117],["pornohirsch.net",118],["marie-claire.es",119],["gamezhero.com",119],["flashgirlgames.com",119],["onlinesudoku.games",119],["mpg.football",119],["sssam.com",119],["globalnews.ca",120],["drinksmixer.com",121],["leitesculinaria.com",121],["fupa.net",122],["browardpalmbeach.com",123],["dallasobserver.com",123],["houstonpress.com",123],["miaminewtimes.com",123],["phoenixnewtimes.com",123],["westword.com",123],["nhentai.net",124],["fox.com.tr",125],["caminspector.net",126],["camwhoreshd.com",126],["camgoddess.tv",126],["gay4porn.com",128],["mypornhere.com",128],["mediapason.it",129],["linkspaid.com",129],["tuotromedico.com",129],["neoteo.com",129],["phoneswiki.com",129],["celebmix.com",129],["myneobuxportal.com",129],["oyungibi.com",129],["25yearslatersite.com",129],["jeshoots.com",130],["techhx.com",130],["karanapk.com",130],["videogreen.xyz",131],["playembed.xyz",131],["javhdporn.net",131],["redanimedatabase.cloud",131],["javstream.top",131],["flashplayer.fullstacks.net",133],["cloudapps.herokuapp.com",133],["youfiles.herokuapp.com",133],["temp-mail.org",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hqtv.biz",140],["liveuamap.com",141],["muvibg.com",141],["linksht.com",[142,143]],["audycje.tokfm.pl",144],["hulu.com",[145,146,147]],["shush.se",148],["emurom.net",149],["allkpop.com",150],["azmath.info",151],["downfile.site",151],["downphanmem.com",151],["expertvn.com",151],["memangbau.com",151],["trangchu.news",151],["aztravels.net",151],["adfoc.us",151],["phixshop.com",151],["ggbazaar.in",151],["ignoupur.in",151],["hindityping.net",151],["indiasarkari.com",151],["ktgnews.com",151],["1stepforlife.in",151],["djppclub.com",151],["mpscstudyhub.com",151],["jankarihubedu21.com",151],["gachalifeoldversionapk.net",151],["iisfvirtual.in",151],["starxinvestor.com",151],["wikitraveltips.com",[151,256]],["amritadrino.com",[151,256]],["sahlmarketing.net",151],["filmypoints.in",151],["techacode.com",151],["trickms.com",151],["sptfy.be",151],["streamcheck.link",151],["mcafee-com.com",[151,258]],["pickcrackpasswords.blogspot.com",153],["kfrfansub.com",154],["thuglink.com",154],["voipreview.org",154],["hanime.tv",155],["pogo.com",156],["cloudvideo.tv",157],["legionjuegos.org",158],["legionpeliculas.org",158],["legionprogramas.org",158],["16honeys.com",159],["elespanol.com",160],["remodelista.com",161],["coolmathgames.com",[162,163,164,507]],["audiofanzine.com",165],["noweconomy.live",167],["howifx.com",[167,238]],["vavada5com.com",167],["hitokin.net",168],["elil.cc",169],["developerinsider.co",170],["ilprimatonazionale.it",171],["hotabis.com",171],["root-nation.com",171],["italpress.com",171],["airsoftmilsimnews.com",171],["artribune.com",171],["thehindu.com",172],["cambro.tv",[173,174]],["nibelungen-kurier.de",175],["noz.de",176],["pianetamountainbike.it",178],["barchart.com",179],["modelisme.com",180],["parasportontario.ca",180],["prescottenews.com",180],["nrj-play.fr",181],["oeffentlicher-dienst.info",182],["hackingwithreact.com",183],["gutekueche.at",184],["eplfootballmatch.com",185],["peekvids.com",186],["playvids.com",186],["pornflip.com",186],["redensarten-index.de",187],["vw-page.com",188],["viz.com",[189,190]],["queenfaucet.website",191],["0rechner.de",192],["configspc.com",193],["xopenload.me",193],["uptobox.com",193],["uptostream.com",193],["onepiece-tube.com",194],["japgay.com",195],["mega-debrid.eu",196],["dreamdth.com",197],["diaridegirona.cat",199],["diariodeibiza.es",199],["diariodemallorca.es",199],["diarioinformacion.com",199],["eldia.es",199],["emporda.info",199],["farodevigo.es",199],["laopinioncoruna.es",199],["laopiniondemalaga.es",199],["laopiniondemurcia.es",199],["laopiniondezamora.es",199],["laprovincia.es",199],["levante-emv.com",199],["mallorcazeitung.es",199],["regio7.cat",199],["superdeporte.es",199],["playpaste.com",200],["player.rtl2.de",201],["freetutorialsus.com",202],["vidlii.com",[202,218]],["iammagnus.com",202],["dailyvideoreports.net",202],["unityassets4free.com",202],["cnbc.com",203],["puzzles.msn.com",204],["metro.us",204],["newsobserver.com",204],["arkadiumhosted.com",204],["firefaucet.win",206],["55k.io",207],["filelions.online",207],["stmruby.com",207],["direct-link.net",208],["direkt-wissen.com",208],["link-to.net",208],["fullhdxxx.com",210],["pornclassic.tube",211],["tubepornclassic.com",211],["etonline.com",212],["creatur.io",212],["drphil.com",212],["urbanmilwaukee.com",212],["ontiva.com",212],["hideandseek.world",212],["myabandonware.com",212],["kendam.com",212],["wttw.com",212],["synonyms.com",212],["definitions.net",212],["hostmath.com",212],["camvideoshub.com",212],["minhaconexao.com.br",212],["home-made-videos.com",214],["pxrnxx.xyz",214],["amateur-couples.com",214],["slutdump.com",214],["produsat.com",216],["12thman.com",218],["acusports.com",218],["atlantic10.com",218],["auburntigers.com",218],["baylorbears.com",218],["bceagles.com",218],["bgsufalcons.com",218],["big12sports.com",218],["bigten.org",218],["bradleybraves.com",218],["butlersports.com",218],["cmumavericks.com",218],["conferenceusa.com",218],["cyclones.com",218],["dartmouthsports.com",218],["daytonflyers.com",218],["dbupatriots.com",218],["dbusports.com",218],["denverpioneers.com",218],["fduknights.com",218],["fgcuathletics.com",218],["fightinghawks.com",218],["fightingillini.com",218],["floridagators.com",218],["friars.com",218],["friscofighters.com",218],["gamecocksonline.com",218],["goarmywestpoint.com",218],["gobison.com",218],["goblueraiders.com",218],["gobobcats.com",218],["gocards.com",218],["gocreighton.com",218],["godeacs.com",218],["goexplorers.com",218],["goetbutigers.com",218],["gofrogs.com",218],["gogriffs.com",218],["gogriz.com",218],["golobos.com",218],["gomarquette.com",218],["gopack.com",218],["gophersports.com",218],["goprincetontigers.com",218],["gopsusports.com",218],["goracers.com",218],["goshockers.com",218],["goterriers.com",218],["gotigersgo.com",218],["gousfbulls.com",218],["govandals.com",218],["gowyo.com",218],["goxavier.com",218],["gozags.com",218],["gozips.com",218],["griffinathletics.com",218],["guhoyas.com",218],["gwusports.com",218],["hailstate.com",218],["hamptonpirates.com",218],["hawaiiathletics.com",218],["hokiesports.com",218],["huskers.com",218],["icgaels.com",218],["iuhoosiers.com",218],["jsugamecocksports.com",218],["longbeachstate.com",218],["loyolaramblers.com",218],["lrtrojans.com",218],["lsusports.net",218],["morrisvillemustangs.com",218],["msuspartans.com",218],["muleriderathletics.com",218],["mutigers.com",218],["navysports.com",218],["nevadawolfpack.com",218],["niuhuskies.com",218],["nkunorse.com",218],["nuhuskies.com",218],["nusports.com",218],["okstate.com",218],["olemisssports.com",218],["omavs.com",218],["ovcsports.com",218],["owlsports.com",218],["purduesports.com",218],["redstormsports.com",218],["richmondspiders.com",218],["sfajacks.com",218],["shupirates.com",218],["siusalukis.com",218],["smcgaels.com",218],["smumustangs.com",218],["soconsports.com",218],["soonersports.com",218],["themw.com",218],["tulsahurricane.com",218],["txst.com",218],["txstatebobcats.com",218],["ubbulls.com",218],["ucfknights.com",218],["ucirvinesports.com",218],["uconnhuskies.com",218],["uhcougars.com",218],["uicflames.com",218],["umterps.com",218],["uncwsports.com",218],["unipanthers.com",218],["unlvrebels.com",218],["uoflsports.com",218],["usdtoreros.com",218],["utahstateaggies.com",218],["utepathletics.com",218],["utrockets.com",218],["uvmathletics.com",218],["uwbadgers.com",218],["villanova.com",218],["wkusports.com",218],["wmubroncos.com",218],["woffordterriers.com",218],["1pack1goal.com",218],["bcuathletics.com",218],["bubraves.com",218],["goblackbears.com",218],["golightsgo.com",218],["gomcpanthers.com",218],["goutsa.com",218],["mercerbears.com",218],["pirateblue.com",218],["pirateblue.net",218],["pirateblue.org",218],["quinnipiacbobcats.com",218],["towsontigers.com",218],["tribeathletics.com",218],["tribeclub.com",218],["utepminermaniacs.com",218],["utepminers.com",218],["wkutickets.com",218],["aopathletics.org",218],["atlantichockeyonline.com",218],["bigsouthnetwork.com",218],["bigsouthsports.com",218],["chawomenshockey.com",218],["dbupatriots.org",218],["drakerelays.org",218],["ecac.org",218],["ecacsports.com",218],["emueagles.com",218],["emugameday.com",218],["gculopes.com",218],["godrakebulldog.com",218],["godrakebulldogs.com",218],["godrakebulldogs.net",218],["goeags.com",218],["goislander.com",218],["goislanders.com",218],["gojacks.com",218],["gomacsports.com",218],["gseagles.com",218],["hubison.com",218],["iowaconference.com",218],["ksuowls.com",218],["lonestarconference.org",218],["mascac.org",218],["midwestconference.org",218],["mountaineast.org",218],["niu-pack.com",218],["nulakers.ca",218],["oswegolakers.com",218],["ovcdigitalnetwork.com",218],["pacersports.com",218],["rmacsports.org",218],["rollrivers.com",218],["samfordsports.com",218],["uncpbraves.com",218],["usfdons.com",218],["wiacsports.com",218],["alaskananooks.com",218],["broncathleticfund.com",218],["cameronaggies.com",218],["columbiacougars.com",218],["etownbluejays.com",218],["gobadgers.ca",218],["golancers.ca",218],["gometrostate.com",218],["gothunderbirds.ca",218],["kentstatesports.com",218],["lehighsports.com",218],["lopers.com",218],["lycoathletics.com",218],["lycomingathletics.com",218],["maraudersports.com",218],["mauiinvitational.com",218],["msumavericks.com",218],["nauathletics.com",218],["nueagles.com",218],["nwusports.com",218],["oceanbreezenyc.org",218],["patriotathleticfund.com",218],["pittband.com",218],["principiaathletics.com",218],["roadrunnersathletics.com",218],["sidearmsocial.com",218],["snhupenmen.com",218],["stablerarena.com",218],["stoutbluedevils.com",218],["uwlathletics.com",218],["yumacs.com",218],["collegefootballplayoff.com",218],["csurams.com",218],["cubuffs.com",218],["gobearcats.com",218],["gohuskies.com",218],["mgoblue.com",218],["osubeavers.com",218],["pittsburghpanthers.com",218],["rolltide.com",218],["texassports.com",218],["thesundevils.com",218],["uclabruins.com",218],["wvuathletics.com",218],["wvusports.com",218],["arizonawildcats.com",218],["calbears.com",218],["cuse.com",218],["georgiadogs.com",218],["goducks.com",218],["goheels.com",218],["gostanford.com",218],["insidekstatesports.com",218],["insidekstatesports.info",218],["insidekstatesports.net",218],["insidekstatesports.org",218],["k-stateathletics.com",218],["k-statefootball.net",218],["k-statefootball.org",218],["k-statesports.com",218],["k-statesports.net",218],["k-statesports.org",218],["k-statewomenshoops.com",218],["k-statewomenshoops.net",218],["k-statewomenshoops.org",218],["kstateathletics.com",218],["kstatefootball.net",218],["kstatefootball.org",218],["kstatesports.com",218],["kstatewomenshoops.com",218],["kstatewomenshoops.net",218],["kstatewomenshoops.org",218],["ksuathletics.com",218],["ksusports.com",218],["scarletknights.com",218],["showdownforrelief.com",218],["syracusecrunch.com",218],["texastech.com",218],["theacc.com",218],["ukathletics.com",218],["usctrojans.com",218],["utahutes.com",218],["utsports.com",218],["wsucougars.com",218],["mangadods.com",218],["tricksplit.io",218],["fangraphs.com",219],["4players.de",[220,302]],["buffed.de",220],["gamesaktuell.de",220],["gamezone.de",220],["pcgames.de",220],["videogameszone.de",220],["planetaminecraft.com",221],["cravesandflames.com",222],["codesnse.com",222],["flyad.vip",222],["lapresse.ca",223],["kolyoom.com",224],["ilovephd.com",224],["upstream.to",225],["negumo.com",226],["games.wkb.jp",[227,228]],["channelmyanmar.org",[229,230]],["u-s-news.com",230],["fandom.com",[231,525,526]],["kenshi.fandom.com",232],["hausbau-forum.de",233],["fake-it.ws",234],["laksa19.github.io",235],["1shortlink.com",236],["nesia.my.id",237],["makemoneywithurl.com",238],["junkyponk.com",238],["healthfirstweb.com",238],["vocalley.com",238],["yogablogfit.com",238],["en.financerites.com",238],["blogtechh.com",238],["host2loan.com",238],["resetoff.pl",239],["sexodi.com",239],["cdn77.org",240],["howtofixwindows.com",241],["3sexporn.com",242],["momxxxsex.com",242],["myfreevintageporn.com",242],["penisbuyutucum.net",242],["lightnovelworld.com",243],["ujszo.com",244],["newsmax.com",245],["bobs-tube.com",246],["nadidetarifler.com",247],["siz.tv",247],["suzylu.co.uk",[248,249]],["onworks.net",250],["yabiladi.com",250],["downloadsoft.net",251],["imgair.net",252],["imgblaze.net",252],["imgfrost.net",252],["pixsera.net",252],["vestimage.site",252],["imgwia.buzz",252],["testlanguages.com",253],["newsinlevels.com",253],["videosinlevels.com",253],["ultimate-guitar.com",254],["3djuegosguias.com",255],["3djuegospc.com",255],["applesfera.com",255],["compradiccion.com",255],["directoalpaladar.com",255],["elblogsalmon.com",255],["espinof.com",255],["genbeta.com",255],["mundoxiaomi.com",255],["trendencias.com",255],["trendenciashombre.com",255],["vidaextra.com",255],["vitonica.com",255],["xataka.com",255],["xatakaciencia.com",255],["xatakafoto.com",255],["xatakahome.com",255],["xatakamovil.com",255],["xatakandroid.com",255],["xatakawindows.com",255],["luckydice.net",256],["adarima.org",256],["tieutietkiem.com",256],["weatherwx.com",256],["sattaguess.com",256],["winshell.de",256],["rosasidan.ws",256],["modmakers.xyz",256],["gamepure.in",256],["warrenrahul.in",256],["austiblox.net",256],["upiapi.in",256],["myownguess.in",256],["networkhint.com",256],["watchhentai.net",256],["thichcode.net",256],["texturecan.com",256],["tikmate.app",[256,479]],["4funbox.com",257],["nephobox.com",257],["1024tera.com",257],["btcbitco.in",[258,259]],["btcsatoshi.net",258],["cempakajaya.com",258],["crypto4yu.com",258],["readbitcoin.org",258],["wiour.com",258],["aiimgvlog.fun",[258,264]],["exactpay.online",258],["kiddyearner.com",258],["blog.cryptowidgets.net",259],["blog.insurancegold.in",259],["blog.wiki-topia.com",259],["blog.coinsvalue.net",259],["blog.cookinguide.net",259],["blog.freeoseocheck.com",259],["rsadnetworkinfo.com",259],["rsinsuranceinfo.com",259],["rsfinanceinfo.com",259],["rsgamer.app",259],["rssoftwareinfo.com",259],["rshostinginfo.com",259],["rseducationinfo.com",259],["homeairquality.org",261],["faucettronn.click",261],["ticketmaster.sg",261],["aduzz.com",262],["bitcrypto.info",262],["bildirim.link",263],["appsbull.com",265],["diudemy.com",265],["maqal360.com",265],["antonimos.de",266],["quesignifi.ca",266],["lifesurance.info",267],["arcai.com",268],["my-code4you.blogspot.com",269],["vlxxs.net",270],["rapelust.com",270],["vtube.to",270],["vtplay.net",270],["desitelugusex.com",270],["xvideos-downloader.net",270],["xxxvideotube.net",270],["sdefx.cloud",270],["nozomi.la",270],["moviesonlinefree.net",270],["flickr.com",271],["firefile.cc",272],["pestleanalysis.com",272],["kochamjp.pl",272],["tutorialforlinux.com",272],["whatsaero.com",272],["animeblkom.net",[272,288]],["blkom.com",272],["globes.co.il",[273,274]],["jardiner-malin.fr",275],["tw-calc.net",276],["ohmybrush.com",277],["talkceltic.net",278],["mentalfloss.com",279],["uprafa.com",280],["cube365.net",281],["nightfallnews.com",[282,283]],["wwwfotografgotlin.blogspot.com",284],["freelistenonline.com",284],["badassdownloader.com",285],["quickporn.net",286],["yellowbridge.com",287],["aosmark.com",289],["atozmath.com",[291,292,293,294,295,296,297]],["newyorker.com",298],["brighteon.com",299],["more.tv",300],["video1tube.com",301],["alohatube.xyz",301],["link.cgtips.org",303],["hentaicloud.com",304],["netfapx.com",306],["paperzonevn.com",308],["hentaienglish.com",309],["hentaiporno.xxx",309],["venge.io",[310,311]],["btcbux.io",312],["its.porn",[313,314]],["atv.at",315],["2ndrun.tv",316],["rackusreads.com",316],["jetpunk.com",318],["imgur.com",319],["hentai-party.com",320],["hentaicomics.pro",320],["xxx-comics.pro",320],["genshinimpactcalculator.com",323],["mysexgames.com",324],["embed.indavideo.hu",327],["coinurl.net",[328,329]],["gdr-online.com",330],["mmm.dk",331],["iqiyi.com",[332,333,472]],["m.iqiyi.com",334],["japopav.tv",335],["lvturbo.com",335],["nbcolympics.com",336],["apkhex.com",337],["indiansexstories2.net",338],["issstories.xyz",338],["1340kbbr.com",339],["gorgeradio.com",339],["kduk.com",339],["kedoam.com",339],["kejoam.com",339],["kelaam.com",339],["khsn1230.com",339],["kjmx.rocks",339],["kloo.com",339],["klooam.com",339],["klykradio.com",339],["kmed.com",339],["kmnt.com",339],["kool991.com",339],["kpnw.com",339],["kppk983.com",339],["krktcountry.com",339],["ktee.com",339],["kwro.com",339],["kxbxfm.com",339],["thevalley.fm",339],["dsocker1234.blogspot.com",340],["surfline.com",[341,361]],["blick.ch",342],["mgnet.xyz",343],["designtagebuch.de",344],["pixroute.com",345],["uploady.io",346],["calculator-online.net",347],["porngames.club",348],["sexgames.xxx",348],["111.90.159.132",349],["battleplan.news",349],["mobile-tracker-free.com",350],["pfps.gg",351],["ac-illust.com",[352,353]],["photo-ac.com",[352,353]],["social-unlock.com",354],["ninja.io",355],["sourceforge.net",356],["samfirms.com",357],["banned.video",358],["conspiracyfact.info",358],["freeworldnews.tv",358],["madmaxworld.tv",358],["huffpost.com",359],["ingles.com",360],["spanishdict.com",360],["play.tv3.ee",362],["trendyoum.com",363],["bulbagarden.net",364],["doomovie-hd.live",365],["madoohd.com",365],["moviestars.to",366],["hollywoodlife.com",367],["searchresults.cc",368],["mat6tube.com",369],["textstudio.co",370],["newtumbl.com",371],["nevcoins.club",373],["mail.com",374],["erome.com",377],["oggi.it",[378,379]],["manoramamax.com",378],["video.gazzetta.it",[378,379]],["mangakita.net",380],["poscishd.online",381],["avpgalaxy.net",382],["mhma12.tech",383],["panda-novel.com",384],["zebranovel.com",384],["lightsnovel.com",384],["eaglesnovel.com",384],["pandasnovel.com",384],["zadfaucet.com",385],["ewrc-results.com",386],["kizi.com",387],["cyberscoop.com",388],["fedscoop.com",388],["canale.live",389],["mafiatown.pl",[390,391]],["jeep-cj.com",392],["sponsorhunter.com",393],["cloudcomputingtopics.net",394],["likecs.com",395],["tiscali.it",396],["linkspy.cc",397],["tutelehd3.xyz",398],["dirty.pink",[399,400,401]],["adshnk.com",402],["chattanoogan.com",403],["adsy.pw",404],["playstore.pw",404],["socialmediagirls.com",405],["windowspro.de",406],["snapinsta.app",407],["tvtv.ca",408],["tvtv.us",408],["mydaddy.cc",409],["roadtrippin.fr",410],["redketchup.io",[411,412,413]],["anyporn.com",[414,429]],["bravoporn.com",414],["bravoteens.com",414],["crocotube.com",414],["hellmoms.com",414],["hellporno.com",414],["sex3.com",414],["tubewolf.com",414],["xbabe.com",414],["xcum.com",414],["zedporn.com",414],["imagetotext.info",415],["infokik.com",416],["freepik.com",417],["ddwloclawek.pl",[418,419]],["deezer.com",420],["my-subs.co",421],["plaion.com",422],["rapid-cloud.co",423],["slideshare.net",[424,425]],["ustreasuryyieldcurve.com",426],["businesssoftwarehere.com",427],["goo.st",427],["freevpshere.com",427],["softwaresolutionshere.com",427],["easymc.io",430],["staige.tv",431],["androidadult.com",432],["streamvid.net",433],["watchtv24.com",434],["cellmapper.net",435],["medscape.com",436],["newscon.org",[437,438]],["arkadium.com",439],["app.blubank.com",440],["sportdeutschland.tv",441],["kcra.com",441],["wcvb.com",441],["ccthesims.com",443],["chromeready.com",443],["coursedrive.org",443],["dtbps3games.com",443],["illustratemagazine.com",443],["uknip.co.uk",443],["vod.pl",444],["megadrive-emulator.com",445],["animesaga.in",448],["moviesapi.club",448],["bestx.stream",448],["watchx.top",448],["digimanie.cz",449],["svethardware.cz",449],["srvy.ninja",450],["drawer-opportunity-i-243.site",451],["tchatche.com",452],["ozulmanga.com",453],["edmdls.com",454],["freshremix.net",454],["scenedl.org",454],["trakt.tv",[455,456,457]],["shroomers.app",458],["di.fm",[459,460,461]],["pc-builds.com",462],["qtoptens.com",462],["reuters.com",462],["today.com",462],["videogamer.com",462],["wrestlinginc.com",462],["gbatemp.net",462],["techedubyte.com",463],["movie-th.tv",464],["iwanttfc.com",465],["nutraingredients-asia.com",466],["nutraingredients-latam.com",466],["nutraingredients-usa.com",466],["nutraingredients.com",466],["livesportsclub.me",467],["rogstream.fun",467],["ozulscansen.com",468],["fitnessbr.click",469],["minhareceita.xyz",469],["doomied.monster",470],["lookmovie2.to",470],["royalroad.com",471],["biletomat.pl",473],["hextank.io",[475,476]],["gofilmizle.com",[477,478]],["sagewater.com",480],["redlion.net",480],["satdl.com",481],["vidstreaming.xyz",482],["myradioonline.pl",483],["teamskeet.com",484],["tacobell.com",486],["webtoons.com",[487,488]],["zefoy.com",489],["natgeotv.com",491],["br.de",492],["pasteboard.co",493],["clickhole.com",494],["deadspin.com",494],["gizmodo.com",494],["jalopnik.com",494],["jezebel.com",494],["kotaku.com",494],["lifehacker.com",494],["splinternews.com",494],["theinventory.com",494],["theonion.com",494],["theroot.com",494],["thetakeout.com",494],["pewresearch.org",494],["los40.com",[495,496]],["as.com",496],["telegraph.co.uk",[497,498]],["poweredbycovermore.com",[497,544]],["lumens.com",[497,544]],["verizon.com",499],["humanbenchmark.com",500],["politico.com",501],["officedepot.co.cr",[502,503,504,505]],["usnews.com",506],["factable.com",508],["zee5.com",509],["gala.fr",510],["geo.fr",510],["voici.fr",510],["gloucestershirelive.co.uk",511],["arsiv.mackolik.com",512],["jacksonguitars.com",513],["scandichotels.com",514],["stylist.co.uk",515],["nettiauto.com",516],["thaiairways.com",[517,518]],["cerbahealthcare.it",[519,520]],["futura-sciences.com",[519,535]],["tiendaenlinea.claro.com.ni",[521,522]],["tieba.baidu.com",523],["linktr.ee",524],["grasshopper.com",[527,528]],["epson.com.cn",[529,530]],["oe24.at",[531,532]],["szbz.de",531],["platform.autods.com",[533,534]],["wikihow.com",536],["citibank.com.sg",537],["uol.com.br",[538,539,540]],["gazzetta.gr",541],["digicol.dpm.org.cn",[542,543]],["virginmediatelevision.ie",545],["larazon.es",[546,547]],["waitrosecellar.com",[548,549,550]],["kicker.de",551],["sharpen-free-design-generator.netlify.app",[552,553]],["help.cashctrl.com",[554,555]],["commande.rhinov.pro",[556,557]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,22]],["1movies",[14,21]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["hamsterix",15],["xhamster",15],["xhamster1",15],["xhamster10",15],["xhamster11",15],["xhamster12",15],["xhamster13",15],["xhamster14",15],["xhamster15",15],["xhamster16",15],["xhamster17",15],["xhamster18",15],["xhamster19",15],["xhamster20",15],["xhamster2",15],["xhamster3",15],["xhamster4",15],["xhamster5",15],["xhamster7",15],["xhamster8",15],["vidlox",[16,17]],["primewire",18],["streanplay",[18,20]],["sbplay",18],["milfnut",18],["fmovies",22],["sxyprn",26],["hqq",[27,28]],["waaw",[28,29]],["younetu",28],["123link",30],["adshort",30],["linkshorts",30],["adsrt",30],["vinaurl",30],["adfloz",30],["dutchycorp",30],["shortearn",30],["pingit",30],["shrink",30],["clk",30],["tmearn",30],["megalink",30],["miniurl",30],["pcprogramasymas",30],["link1s",30],["shrinke",30],["shrinkme",30],["shortzzy",30],["shorttey",[30,212]],["lite-link",30],["pureshort",30],["adcorto",30],["zshort",30],["upfiles",30],["linkfly",30],["wplink",30],["seulink",30],["encurtalink",30],["camwhores",[31,42,93,94,95]],["tube8",[32,33]],["youporn",33],["redtube",33],["pornhub",[33,198]],["xtits",[58,128]],["streamwish",[60,61]],["pouvideo",68],["povvideo",68],["povw1deo",68],["povwideo",68],["powv1deo",68],["powvibeo",68],["powvideo",68],["powvldeo",68],["acortalo",[73,74,75,76]],["acortar",[73,74,75,76]],["plyjam",[77,78]],["fxporn69",83],["vipbox",84],["viprow",84],["desbloqueador",89],["xberuang",91],["teknorizen",91],["kickassanime",96],["subtorrents",99],["subtorrents1",99],["newpelis",99],["pelix",99],["allcalidad",99],["infomaniakos",99],["filecrypt",103],["tornadomovies",108],["sexwebvideo",109],["mangovideo",109],["icdrama",115],["mangasail",115],["file4go",117],["asianclub",131],["anitube",137],["mixdrop",139],["azsoft",151],["uploadev",166],["ver-pelis-online",177],["ancient-origins",185],["spankbang",205],["lookcam",212],["lootlinks",212],["dpstream",215],["bluemediafiles",217],["docer",239],["pixlev",252],["terabox",257],["skymovieshd",270],["dvdplay",270],["ctrlv",290],["crackstreams",307],["123movieshd",317],["uproxy",321],["animesa",322],["cinecalidad",[325,326]],["apkmaven",372],["gmx",375],["gamereactor",428],["tvhay",[446,447]],["lookmovie",470],["lk21official",474],["www.google",485],["dropgalaxy",[558,559]]]);

const exceptionsMap = new Map([["accounts.youtube.com",[0,1,2,3]],["payments.youtube.com",[0,1,2,3]],["pingit.com",[30]],["pingit.me",[30]],["lookmovie.studio",[470]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
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
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = cValue;
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
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
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
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
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
        setConstant(chain, cValue);
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
    scriptletGlobals.set('safeSelf', safe);
    return safe;
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
