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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["__NUXT__.state.advertisement.adBlockWallEnabled","false"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["adsAllowed","true"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["wpsafelinkCount","0"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["waitTime","0"],["showadas","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["window.isAdblockActive","false"],["supportedBrowsers",""],["eazyAdUnblockerHolderDiv","{}"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3]],["music.youtube.com",[0,1,2,3]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["bild.de",10],["sueddeutsche.de",11],["watson.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.com",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,317]],["gadgets.es",[12,317]],["amateurporn.co",[12,110]],["wiwo.de",13],["masteranime.es",14],["fullxh.com",15],["megaxh.com",15],["movingxh.world",15],["unlockxh4.com",15],["xhadult2.com",15],["xhadult3.com",15],["xhadult4.com",15],["xhadult5.com",15],["xhamster46.com",15],["xhday.com",15],["xhday1.com",15],["xhmoon5.com",15],["xhplanet1.com",15],["xhplanet2.com",15],["xhreal2.com",15],["xhreal3.com",15],["xhtab2.com",15],["xhtree.com",15],["xhvictory.com",15],["xhwebsite.com",15],["xhwebsite2.com",15],["xhwide1.com",15],["xhwide8.com",15],["alphaporno.com",[18,415]],["porngem.com",18],["uploadbank.com",18],["shortit.pw",[18,113]],["familyporn.tv",18],["cloudemb.com",[18,336]],["sbplay1.com",18],["id45.cyou",18],["85tube.com",[18,94]],["k1nk.co",18],["watchasians.cc",18],["imsdb.pw",[18,28]],["soltoshindo.com",18],["techtimes.com",19],["dronedj.com",21],["freeplayervideo.com",22],["nazarickol.com",22],["player-cdn.com",22],["apinchcaseation.com",22],["bigclatterhomesguideservice.com",22],["bradleyviewdoctor.com",22],["denisegrowthwide.com",22],["edwardarriveoften.com",22],["housecardsummerbutton.com",22],["jamiesamewalk.com",22],["kennethofficialitem.com",22],["nectareousoverelate.com",22],["paulkitchendark.com",22],["stevenimaginelittle.com",22],["strawberriesporail.com",22],["timberwoodanotia.com",22],["tinycat-voe-fashion.com",22],["troyyourlead.com",22],["uptodatefinishconference.com",22],["uptodatefinishconferenceroom.com",22],["voe.sx",22],["lukecomparetwo.com",22],["seanshowcould.com",22],["johntryopen.com",22],["motphimtv.com",22],["rabbitstream.net",22],["streamlare.com",22],["projectfreetv.one",22],["nolive.me",23],["cbs.com",24],["paramountplus.com",24],["player.glomex.com",25],["merkur.de",25],["tz.de",25],["hotpornfile.org",28],["player.tabooporns.com",28],["wiztube.xyz",28],["multiup.us",28],["rpdrlatino.live",28],["peliculas8k.com",[28,29]],["video.q34r.org",28],["69x.online",28],["czxxx.org",28],["vvtplayer.online",28],["netu.ac",28],["dirtyvideo.fun",29],["adbull.org",30],["mitly.us",30],["linkrex.net",30],["linx.cc",30],["oke.io",30],["dz4link.com",30],["linclik.com",30],["shrt10.com",30],["loptelink.com",30],["cut-fly.com",30],["linkfinal.com",30],["payskip.org",30],["cutpaid.com",30],["forexmab.com",30],["linkjust.com",30],["linkszia.co",30],["leechpremium.link",30],["icutlink.com",[30,133]],["stfly.me",30],["oncehelp.com",30],["bit-url.com",30],["rgl.vn",30],["reqlinks.net",30],["megaurl.in",30],["megafly.in",30],["bitlk.com",30],["qlinks.eu",30],["link.3dmili.com",30],["short-fly.com",30],["foxseotools.com",30],["pngit.live",30],["link.turkdown.com",30],["urlty.com",30],["7r6.com",30],["oko.sh",30],["ckk.ai",30],["fc.lc",30],["fstore.biz",30],["cuts-url.com",30],["eio.io",30],["exe.app",30],["exee.io",30],["exey.io",30],["skincarie.com",30],["exeo.app",30],["coinlyhub.com",[30,214]],["adsafelink.com",30],["aii.sh",30],["cybertechng.com",[30,223]],["owllink.net",30],["cutdl.xyz",30],["iir.ai",30],["shorteet.com",[30,243]],["sekilastekno.com",30],["smoner.com",30],["gplinks.co",30],["xpshort.com",30],["upshrink.com",30],["enit.in",[30,239]],["ez4short.com",30],["easysky.in",30],["veganab.co",30],["adrinolinks.in",30],["go.gyanitheme.com",30],["go.theforyou.in",30],["go.hipsonyc.com",30],["try2link.com",30],["jameeltips.us",30],["gainl.ink",30],["promo-visits.site",30],["satoshi-win.xyz",[30,261]],["shorterall.com",30],["encurtandourl.com",30],["forextrader.site",30],["postazap.com",[30,152]],["tinys.click",[30,223]],["cpm.icu",30],["easycut.io",30],["panyshort.link",30],["enagato.com",30],["pandaznetwork.com",30],["tii.la",30],["loan2host.com",30],["tei.ai",30],["tii.ai",30],["recipestutorials.com",30],["droplink.co",30],["birdurls.com",30],["linkshrnk.com",30],["linksly.co",30],["pkr.pw",30],["imagenesderopaparaperros.com",30],["shortenbuddy.com",30],["gibit.xyz",30],["apksvip.com",30],["cashurl.in",30],["4cash.me",30],["namaidani.com",30],["teknomuda.com",30],["illink.net",30],["miuiku.com",30],["yourtechnology.online",30],["savelink.site",30],["apkshrt.com",30],["srts.me",30],["kutmoney.com",30],["kutt.io",30],["sanoybonito.club",30],["samaa-pro.com",30],["miklpro.com",30],["modapk.link",30],["shrinkforearn.in",30],["techyuth.xyz",30],["1shorten.com",30],["ccurl.net",30],["st23q.com",30],["beautyram.info",30],["viraloc.com",30],["kiiw.icu",30],["galaxy-link.space",30],["linkpoi.me",30],["usdshort.com",30],["bitcoinly.in",30],["menjelajahi.com",30],["pewgame.com",30],["yxoshort.com",30],["1link.vip",30],["haonguyen.top",30],["claimfreebits.com",30],["crazyblog.in",30],["gtlink.co",30],["link.tokenoto.com",30],["cutearn.net",30],["rshrt.com",30],["short.palmeratv.com",30],["filezipa.com",30],["dz-linkk.com",30],["theblissempire.com",30],["shortlink.prz.pw",30],["finanzas-vida.com",30],["adurly.cc",30],["pix4link.com",30],["paid4.link",30],["link.asiaon.top",30],["go.gets4link.com",30],["download.sharenulled.net",30],["automotur.club",30],["beingtek.com",30],["shorturl.unityassets4free.com",30],["disheye.com",30],["techymedies.com",30],["techysuccess.com",30],["za.gl",[30,153]],["download.baominh.tech",30],["bblink.com",30],["linkbr.xyz",30],["myad.biz",30],["swzz.xyz",30],["vevioz.com",30],["charexempire.com",30],["clk.asia",30],["egfly.xyz",30],["linka.click",30],["sturls.com",30],["myshrinker.com",30],["go.adinsurance.xyz",30],["dash-free.com",[30,223]],["snowurl.com",[30,223]],["netfile.cc",30],["link.insurance-space.xyz",30],["link.insurglobal.xyz",30],["theconomy.me",30],["rajsayt.xyz",30],["rocklink.in",30],["adinsurance.xyz",30],["insurglobal.xyz",30],["techgeek.digital",30],["download3s.net",30],["shortx.net",30],["musicc.xyz",30],["shortawy.com",30],["tlin.me",30],["apprepack.com",30],["sh2rt.com",30],["up-load.one",30],["zuba.link",30],["atglinks.com",30],["du-link.in",30],["linksfy.co",30],["news.speedynews.xyz",30],["golink.xaydungplus.com",30],["bestcash2020.com",30],["hoxiin.com",30],["technemo.xyz",30],["go.linkbnao.com",30],["link-yz.com",30],["paylinnk.com",30],["thizissam.in",30],["ier.ai",30],["bloggertheme.xyz",30],["adslink.pw",30],["oii.io",30],["novelssites.com",30],["links.medipost.org",30],["faucetcrypto.net",30],["short.freeltc.top",30],["trxking.xyz",30],["weadown.com",30],["m.bloggingguidance.com",30],["blog.onroid.com",30],["cutty.app",30],["link.codevn.net",30],["upfilesurls.com",30],["shareus.site",30],["link4rev.site",30],["bloginguru.xyz",30],["celinks.net",30],["c2g.at",30],["shortzu.icu",30],["bitcosite.com",[30,429]],["cryptosh.pro",30],["sigmalinks.in",30],["link68.net",30],["traffic123.net",30],["windowslite.net",[30,223]],["coinsl.click",30],["exalink.fun",30],["exego.app",[30,259]],["viewfr.com",30],["cl1ca.com",30],["4br.me",30],["fir3.net",30],["kiddyshort.com",30],["watchmygf.me",[31,56]],["camwhorez.tv",[31,42,93,94]],["fpo.xxx",[31,58]],["sexemix.com",31],["heavyfetish.com",[31,492]],["you-porn.com",33],["youporngay.com",33],["youpornru.com",33],["9908ww.com",33],["adelaidepawnbroker.com",33],["bztube.com",33],["hotovs.com",33],["insuredhome.org",33],["nudegista.com",33],["pornluck.com",33],["vidd.se",33],["pornhub.com",33],["pornerbros.com",34],["freep.com",34],["porn.com",35],["tune.pk",36],["noticias.gospelmais.com.br",37],["techperiod.com",37],["jacquieetmicheltv.net",[38,39]],["illicoporno.com",38],["lavoixdux.com",38],["tonpornodujour.com",38],["jacquieetmichel.net",38],["swame.com",38],["vosfemmes.com",38],["voyeurfrance.net",38],["viki.com",[40,41]],["sleazyneasy.com",[42,43,44]],["smutr.com",[42,210]],["yourporngod.com",[42,43]],["javbangers.com",[42,306]],["camfox.com",42],["camthots.tv",[42,127]],["shegotass.info",42],["amateur8.com",42],["bigtitslust.com",42],["ebony8.com",42],["freeporn8.com",42],["lesbian8.com",42],["maturetubehere.com",42],["sortporn.com",42],["webcamvau.com",42],["motherporno.com",[42,43,58,129]],["tktube.com",42],["theporngod.com",[42,43]],["pornsocket.com",45],["luxuretv.com",46],["porndig.com",[47,48]],["webcheats.com.br",49],["ceesty.com",[50,51]],["gestyy.com",[50,51]],["corneey.com",51],["destyy.com",51],["festyy.com",51],["sh.st",51],["angrybirdsnest.com",52],["zrozz.com",52],["clix4btc.com",52],["katfile.com",52],["4tests.com",52],["planet-explorers-isos.com",52],["business-standard.com",52],["goltelevision.com",52],["news-und-nachrichten.de",52],["laradiobbs.net",52],["urlaubspartner.net",52],["produktion.de",52],["cinemaxxl.de",52],["bladesalvador.com",52],["tempr.email",52],["cshort.org",52],["friendproject.net",52],["covrhub.com",52],["planetsuzy.org",53],["empflix.com",54],["filespace.com",55],["transparentcalifornia.com",56],["deepbrid.com",57],["submityourflicks.com",58],["3movs.com",58],["cambay.tv",[58,110,127,129]],["bravoerotica.net",[58,129]],["youx.xxx",58],["camclips.tv",[58,210]],["camflow.tv",[58,110,129,175,247]],["camhoes.tv",[58,110,127,129,175,247]],["xmegadrive.com",58],["xxxymovies.com",58],["xxxshake.com",58],["gayck.com",58],["xhand.com",[58,129]],["analdin.com",[58,129]],["webnovel.com",59],["videosgay.me",[60,61]],["wishfast.top",61],["schwaebische.de",62],["mercurynews.com",63],["chicoer.com",63],["dailybreeze.com",63],["dailybulletin.com",63],["dailynews.com",63],["delcotimes.com",63],["eastbaytimes.com",63],["macombdaily.com",63],["ocregister.com",63],["pasadenastarnews.com",63],["pe.com",63],["presstelegram.com",63],["redlandsdailyfacts.com",63],["reviewjournal.com",63],["santacruzsentinel.com",63],["saratogian.com",63],["sentinelandenterprise.com",63],["sgvtribune.com",63],["tampabay.com",63],["times-standard.com",63],["theoaklandpress.com",63],["trentonian.com",63],["twincities.com",63],["whittierdailynews.com",63],["bostonherald.com",63],["dailycamera.com",63],["sbsun.com",63],["dailydemocrat.com",63],["montereyherald.com",63],["orovillemr.com",63],["record-bee.com",63],["redbluffdailynews.com",63],["reporterherald.com",63],["thereporter.com",63],["timescall.com",63],["timesheraldonline.com",63],["ukiahdailyjournal.com",63],["dailylocal.com",63],["8tracks.com",64],["revealname.com",65],["fcportables.com",[66,67]],["golfchannel.com",69],["telemundodeportes.com",69],["stream.nbcsports.com",69],["gamcore.com",70],["porcore.com",70],["69games.xxx",70],["javmix.app",70],["tecknity.com",71],["haaretz.co.il",72],["haaretz.com",72],["hungama.com",72],["a-o.ninja",72],["anime-odcinki.pl",72],["kumpulmanga.org",72],["shortgoo.blogspot.com",72],["tonanmedia.my.id",[72,444]],["yurasu.xyz",72],["isekaipalace.com",72],["megadescarga.net",[73,74,75,76]],["megadescargas.net",[73,74,75,76]],["vikistream.com",77],["eplayer.click",[77,78]],["mega4upload.com",[78,84]],["ennovelas.com",[78,84]],["n-tv.de",79],["brigitte.de",80],["stern.de",80],["foxsports.com.au",81],["canberratimes.com.au",81],["thesimsresource.com",82],["bdnewszh.com",84],["streamservicehd.click",84],["timeforbitco.in",85],["worldofbitco.in",[85,97]],["weatherx.co.in",[85,97]],["getyourbitco.in",85],["sunbtc.space",85],["ctrl.blog",86],["sportlife.es",87],["finofilipino.org",88],["acortarm.xyz",89],["acortame.xyz",89],["speedtest.net",90],["mysflink.blogspot.com",91],["assia.tv",92],["assia4.com",92],["assia24.com",92],["cwtvembeds.com",[94,128]],["camlovers.tv",94],["porntn.com",94],["pornissimo.org",94],["sexcams-24.com",[94,110]],["watchporn.to",[94,110]],["camwhorez.video",94],["footstockings.com",[95,110]],["sbs.com.au",98],["ojogos.com.br",100],["powforums.com",101],["supforums.com",101],["studybullet.com",101],["usgamer.net",102],["recordonline.com",102],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["sport-tv-guide.live",105],["temp-mails.com",106],["freiepresse.de",107],["investing.com",108],["camhub.cc",110],["love4porn.com",110],["thotvids.com",110],["watchmdh.to",110],["celebwhore.com",110],["cluset.com",110],["4kporn.xxx",110],["xhomealone.com",110],["lusttaboo.com",[110,377]],["hentai-moon.com",110],["mp3fiber.com",111],["suedkurier.de",112],["anysex.com",114],["gomiblog.com",115],["iptvtools.net",115],["vlist.se",116],["pornve.com",117],["coolrom.com.au",118],["pornohirsch.net",119],["marie-claire.es",120],["gamezhero.com",120],["flashgirlgames.com",120],["onlinesudoku.games",120],["mpg.football",120],["sssam.com",120],["globalnews.ca",121],["drinksmixer.com",122],["leitesculinaria.com",122],["fupa.net",123],["browardpalmbeach.com",124],["dallasobserver.com",124],["houstonpress.com",124],["miaminewtimes.com",124],["phoenixnewtimes.com",124],["westword.com",124],["nhentai.net",125],["fox.com.tr",126],["caminspector.net",127],["camwhoreshd.com",127],["camgoddess.tv",127],["gay4porn.com",129],["mypornhere.com",129],["mediapason.it",130],["linkspaid.com",130],["tuotromedico.com",130],["neoteo.com",130],["phoneswiki.com",130],["celebmix.com",130],["myneobuxportal.com",130],["oyungibi.com",130],["25yearslatersite.com",130],["jeshoots.com",131],["techhx.com",131],["karanapk.com",131],["videogreen.xyz",132],["playembed.xyz",132],["javhdporn.net",132],["redanimedatabase.cloud",132],["javstream.top",132],["flashplayer.fullstacks.net",134],["cloudapps.herokuapp.com",134],["youfiles.herokuapp.com",134],["temp-mail.org",135],["comnuan.com",136],["veedi.com",137],["battleboats.io",137],["fruitlab.com",138],["haddoz.net",138],["garoetpos.com",138],["stiletv.it",139],["hqtv.biz",141],["liveuamap.com",142],["muvibg.com",142],["linksht.com",[143,144]],["audycje.tokfm.pl",145],["hulu.com",[146,147,148]],["shush.se",149],["emurom.net",150],["allkpop.com",151],["azmath.info",152],["downfile.site",152],["downphanmem.com",152],["expertvn.com",152],["memangbau.com",152],["trangchu.news",152],["aztravels.net",152],["adfoc.us",152],["bharatsarkarijobalert.com",152],["seobar.in",152],["rktemplates.in",152],["odiasongmuzic.com",152],["mktechword.com",152],["picassoappk.com",152],["finley-aaron-love.com",152],["bmremix.in",152],["sbkeditsofficials.in",152],["iisfvirtual.in",152],["starxinvestor.com",152],["myprivatejobs.com",[152,257]],["wikitraveltips.com",[152,257]],["amritadrino.com",[152,257]],["sahlmarketing.net",152],["filmypoints.in",152],["techacode.com",152],["trickms.com",152],["sptfy.be",152],["streamcheck.link",152],["mcafee-com.com",[152,259]],["pickcrackpasswords.blogspot.com",154],["kfrfansub.com",155],["thuglink.com",155],["voipreview.org",155],["hanime.tv",156],["pogo.com",157],["cloudvideo.tv",158],["legionjuegos.org",159],["legionpeliculas.org",159],["legionprogramas.org",159],["16honeys.com",160],["elespanol.com",161],["remodelista.com",162],["coolmathgames.com",[163,164,165,509]],["audiofanzine.com",166],["noweconomy.live",168],["howifx.com",[168,239]],["vavada5com.com",168],["hitokin.net",169],["elil.cc",170],["developerinsider.co",171],["ilprimatonazionale.it",172],["hotabis.com",172],["root-nation.com",172],["italpress.com",172],["airsoftmilsimnews.com",172],["artribune.com",172],["thehindu.com",173],["cambro.tv",[174,175]],["nibelungen-kurier.de",176],["noz.de",177],["pianetamountainbike.it",179],["barchart.com",180],["modelisme.com",181],["parasportontario.ca",181],["prescottenews.com",181],["nrj-play.fr",182],["oeffentlicher-dienst.info",183],["hackingwithreact.com",184],["gutekueche.at",185],["eplfootballmatch.com",186],["peekvids.com",187],["playvids.com",187],["pornflip.com",187],["redensarten-index.de",188],["vw-page.com",189],["viz.com",[190,191]],["queenfaucet.website",192],["0rechner.de",193],["configspc.com",194],["xopenload.me",194],["uptobox.com",194],["uptostream.com",194],["onepiece-tube.com",195],["japgay.com",196],["mega-debrid.eu",197],["dreamdth.com",198],["diaridegirona.cat",200],["diariodeibiza.es",200],["diariodemallorca.es",200],["diarioinformacion.com",200],["eldia.es",200],["emporda.info",200],["farodevigo.es",200],["laopinioncoruna.es",200],["laopiniondemalaga.es",200],["laopiniondemurcia.es",200],["laopiniondezamora.es",200],["laprovincia.es",200],["levante-emv.com",200],["mallorcazeitung.es",200],["regio7.cat",200],["superdeporte.es",200],["playpaste.com",201],["player.rtl2.de",202],["freetutorialsus.com",203],["vidlii.com",[203,219]],["iammagnus.com",203],["dailyvideoreports.net",203],["unityassets4free.com",203],["cnbc.com",204],["puzzles.msn.com",205],["metro.us",205],["newsobserver.com",205],["arkadiumhosted.com",205],["firefaucet.win",207],["55k.io",208],["filelions.online",208],["stmruby.com",208],["direct-link.net",209],["direkt-wissen.com",209],["link-to.net",209],["fullhdxxx.com",211],["pornclassic.tube",212],["tubepornclassic.com",212],["etonline.com",213],["creatur.io",213],["drphil.com",213],["urbanmilwaukee.com",213],["ontiva.com",213],["hideandseek.world",213],["myabandonware.com",213],["kendam.com",213],["wttw.com",213],["synonyms.com",213],["definitions.net",213],["hostmath.com",213],["camvideoshub.com",213],["minhaconexao.com.br",213],["home-made-videos.com",215],["pxrnxx.xyz",215],["amateur-couples.com",215],["slutdump.com",215],["produsat.com",217],["12thman.com",219],["acusports.com",219],["atlantic10.com",219],["auburntigers.com",219],["baylorbears.com",219],["bceagles.com",219],["bgsufalcons.com",219],["big12sports.com",219],["bigten.org",219],["bradleybraves.com",219],["butlersports.com",219],["cmumavericks.com",219],["conferenceusa.com",219],["cyclones.com",219],["dartmouthsports.com",219],["daytonflyers.com",219],["dbupatriots.com",219],["dbusports.com",219],["denverpioneers.com",219],["fduknights.com",219],["fgcuathletics.com",219],["fightinghawks.com",219],["fightingillini.com",219],["floridagators.com",219],["friars.com",219],["friscofighters.com",219],["gamecocksonline.com",219],["goarmywestpoint.com",219],["gobison.com",219],["goblueraiders.com",219],["gobobcats.com",219],["gocards.com",219],["gocreighton.com",219],["godeacs.com",219],["goexplorers.com",219],["goetbutigers.com",219],["gofrogs.com",219],["gogriffs.com",219],["gogriz.com",219],["golobos.com",219],["gomarquette.com",219],["gopack.com",219],["gophersports.com",219],["goprincetontigers.com",219],["gopsusports.com",219],["goracers.com",219],["goshockers.com",219],["goterriers.com",219],["gotigersgo.com",219],["gousfbulls.com",219],["govandals.com",219],["gowyo.com",219],["goxavier.com",219],["gozags.com",219],["gozips.com",219],["griffinathletics.com",219],["guhoyas.com",219],["gwusports.com",219],["hailstate.com",219],["hamptonpirates.com",219],["hawaiiathletics.com",219],["hokiesports.com",219],["huskers.com",219],["icgaels.com",219],["iuhoosiers.com",219],["jsugamecocksports.com",219],["longbeachstate.com",219],["loyolaramblers.com",219],["lrtrojans.com",219],["lsusports.net",219],["morrisvillemustangs.com",219],["msuspartans.com",219],["muleriderathletics.com",219],["mutigers.com",219],["navysports.com",219],["nevadawolfpack.com",219],["niuhuskies.com",219],["nkunorse.com",219],["nuhuskies.com",219],["nusports.com",219],["okstate.com",219],["olemisssports.com",219],["omavs.com",219],["ovcsports.com",219],["owlsports.com",219],["purduesports.com",219],["redstormsports.com",219],["richmondspiders.com",219],["sfajacks.com",219],["shupirates.com",219],["siusalukis.com",219],["smcgaels.com",219],["smumustangs.com",219],["soconsports.com",219],["soonersports.com",219],["themw.com",219],["tulsahurricane.com",219],["txst.com",219],["txstatebobcats.com",219],["ubbulls.com",219],["ucfknights.com",219],["ucirvinesports.com",219],["uconnhuskies.com",219],["uhcougars.com",219],["uicflames.com",219],["umterps.com",219],["uncwsports.com",219],["unipanthers.com",219],["unlvrebels.com",219],["uoflsports.com",219],["usdtoreros.com",219],["utahstateaggies.com",219],["utepathletics.com",219],["utrockets.com",219],["uvmathletics.com",219],["uwbadgers.com",219],["villanova.com",219],["wkusports.com",219],["wmubroncos.com",219],["woffordterriers.com",219],["1pack1goal.com",219],["bcuathletics.com",219],["bubraves.com",219],["goblackbears.com",219],["golightsgo.com",219],["gomcpanthers.com",219],["goutsa.com",219],["mercerbears.com",219],["pirateblue.com",219],["pirateblue.net",219],["pirateblue.org",219],["quinnipiacbobcats.com",219],["towsontigers.com",219],["tribeathletics.com",219],["tribeclub.com",219],["utepminermaniacs.com",219],["utepminers.com",219],["wkutickets.com",219],["aopathletics.org",219],["atlantichockeyonline.com",219],["bigsouthnetwork.com",219],["bigsouthsports.com",219],["chawomenshockey.com",219],["dbupatriots.org",219],["drakerelays.org",219],["ecac.org",219],["ecacsports.com",219],["emueagles.com",219],["emugameday.com",219],["gculopes.com",219],["godrakebulldog.com",219],["godrakebulldogs.com",219],["godrakebulldogs.net",219],["goeags.com",219],["goislander.com",219],["goislanders.com",219],["gojacks.com",219],["gomacsports.com",219],["gseagles.com",219],["hubison.com",219],["iowaconference.com",219],["ksuowls.com",219],["lonestarconference.org",219],["mascac.org",219],["midwestconference.org",219],["mountaineast.org",219],["niu-pack.com",219],["nulakers.ca",219],["oswegolakers.com",219],["ovcdigitalnetwork.com",219],["pacersports.com",219],["rmacsports.org",219],["rollrivers.com",219],["samfordsports.com",219],["uncpbraves.com",219],["usfdons.com",219],["wiacsports.com",219],["alaskananooks.com",219],["broncathleticfund.com",219],["cameronaggies.com",219],["columbiacougars.com",219],["etownbluejays.com",219],["gobadgers.ca",219],["golancers.ca",219],["gometrostate.com",219],["gothunderbirds.ca",219],["kentstatesports.com",219],["lehighsports.com",219],["lopers.com",219],["lycoathletics.com",219],["lycomingathletics.com",219],["maraudersports.com",219],["mauiinvitational.com",219],["msumavericks.com",219],["nauathletics.com",219],["nueagles.com",219],["nwusports.com",219],["oceanbreezenyc.org",219],["patriotathleticfund.com",219],["pittband.com",219],["principiaathletics.com",219],["roadrunnersathletics.com",219],["sidearmsocial.com",219],["snhupenmen.com",219],["stablerarena.com",219],["stoutbluedevils.com",219],["uwlathletics.com",219],["yumacs.com",219],["collegefootballplayoff.com",219],["csurams.com",219],["cubuffs.com",219],["gobearcats.com",219],["gohuskies.com",219],["mgoblue.com",219],["osubeavers.com",219],["pittsburghpanthers.com",219],["rolltide.com",219],["texassports.com",219],["thesundevils.com",219],["uclabruins.com",219],["wvuathletics.com",219],["wvusports.com",219],["arizonawildcats.com",219],["calbears.com",219],["cuse.com",219],["georgiadogs.com",219],["goducks.com",219],["goheels.com",219],["gostanford.com",219],["insidekstatesports.com",219],["insidekstatesports.info",219],["insidekstatesports.net",219],["insidekstatesports.org",219],["k-stateathletics.com",219],["k-statefootball.net",219],["k-statefootball.org",219],["k-statesports.com",219],["k-statesports.net",219],["k-statesports.org",219],["k-statewomenshoops.com",219],["k-statewomenshoops.net",219],["k-statewomenshoops.org",219],["kstateathletics.com",219],["kstatefootball.net",219],["kstatefootball.org",219],["kstatesports.com",219],["kstatewomenshoops.com",219],["kstatewomenshoops.net",219],["kstatewomenshoops.org",219],["ksuathletics.com",219],["ksusports.com",219],["scarletknights.com",219],["showdownforrelief.com",219],["syracusecrunch.com",219],["texastech.com",219],["theacc.com",219],["ukathletics.com",219],["usctrojans.com",219],["utahutes.com",219],["utsports.com",219],["wsucougars.com",219],["mangadods.com",219],["tricksplit.io",219],["fangraphs.com",220],["4players.de",[221,303]],["buffed.de",221],["gamesaktuell.de",221],["gamezone.de",221],["pcgames.de",221],["videogameszone.de",221],["planetaminecraft.com",222],["cravesandflames.com",223],["codesnse.com",223],["link.paid4file.com",223],["flyad.vip",223],["lapresse.ca",224],["kolyoom.com",225],["ilovephd.com",225],["upstream.to",226],["negumo.com",227],["games.wkb.jp",[228,229]],["channelmyanmar.org",[230,231]],["u-s-news.com",231],["fandom.com",[232,527,528]],["kenshi.fandom.com",233],["hausbau-forum.de",234],["fake-it.ws",235],["laksa19.github.io",236],["1shortlink.com",237],["nesia.my.id",238],["makemoneywithurl.com",239],["junkyponk.com",239],["healthfirstweb.com",239],["vocalley.com",239],["yogablogfit.com",239],["en.financerites.com",239],["blogtechh.com",239],["host2loan.com",239],["resetoff.pl",240],["sexodi.com",240],["cdn77.org",241],["howtofixwindows.com",242],["3sexporn.com",243],["momxxxsex.com",243],["myfreevintageporn.com",243],["penisbuyutucum.net",243],["lightnovelworld.com",244],["ujszo.com",245],["newsmax.com",246],["bobs-tube.com",247],["nadidetarifler.com",248],["siz.tv",248],["suzylu.co.uk",[249,250]],["onworks.net",251],["yabiladi.com",251],["downloadsoft.net",252],["imgair.net",253],["imgblaze.net",253],["imgfrost.net",253],["pixsera.net",253],["vestimage.site",253],["imgwia.buzz",253],["testlanguages.com",254],["newsinlevels.com",254],["videosinlevels.com",254],["ultimate-guitar.com",255],["puzzle-loop.com",256],["puzzle-words.com",256],["puzzle-chess.com",256],["puzzle-thermometers.com",256],["puzzle-norinori.com",256],["puzzle-minesweeper.com",256],["puzzle-slant.com",256],["puzzle-lits.com",256],["puzzle-galaxies.com",256],["puzzle-tents.com",256],["puzzle-battleships.com",256],["puzzle-pipes.com",256],["puzzle-hitori.com",256],["puzzle-heyawake.com",256],["puzzle-shingoki.com",256],["puzzle-masyu.com",256],["puzzle-stitches.com",256],["puzzle-aquarium.com",256],["puzzle-tapa.com",256],["puzzle-star-battle.com",256],["puzzle-kakurasu.com",256],["puzzle-skyscrapers.com",256],["puzzle-futoshiki.com",256],["puzzle-shakashaka.com",256],["puzzle-kakuro.com",256],["puzzle-jigsaw-sudoku.com",256],["puzzle-killer-sudoku.com",256],["puzzle-binairo.com",256],["puzzle-nonograms.com",256],["puzzle-sudoku.com",256],["puzzle-light-up.com",256],["puzzle-bridges.com",256],["puzzle-nurikabe.com",256],["puzzle-dominosa.com",256],["luckydice.net",257],["adarima.org",257],["tieutietkiem.com",257],["weatherwx.com",257],["sattaguess.com",257],["winshell.de",257],["rosasidan.ws",257],["modmakers.xyz",257],["gamepure.in",257],["warrenrahul.in",257],["austiblox.net",257],["upiapi.in",257],["myownguess.in",257],["networkhint.com",257],["watchhentai.net",257],["thichcode.net",257],["texturecan.com",257],["tikmate.app",[257,481]],["4funbox.com",258],["nephobox.com",258],["1024tera.com",258],["btcbitco.in",[259,260]],["btcsatoshi.net",259],["cempakajaya.com",259],["crypto4yu.com",259],["readbitcoin.org",259],["wiour.com",259],["aiimgvlog.fun",[259,265]],["exactpay.online",259],["kiddyearner.com",259],["blog.cryptowidgets.net",260],["blog.insurancegold.in",260],["blog.wiki-topia.com",260],["blog.coinsvalue.net",260],["blog.cookinguide.net",260],["blog.freeoseocheck.com",260],["rsadnetworkinfo.com",260],["rsinsuranceinfo.com",260],["rsfinanceinfo.com",260],["rsgamer.app",260],["rssoftwareinfo.com",260],["rshostinginfo.com",260],["rseducationinfo.com",260],["homeairquality.org",262],["faucettronn.click",262],["ticketmaster.sg",262],["aduzz.com",263],["bitcrypto.info",263],["bildirim.link",264],["appsbull.com",266],["diudemy.com",266],["maqal360.com",266],["antonimos.de",267],["quesignifi.ca",267],["lifesurance.info",268],["arcai.com",269],["my-code4you.blogspot.com",270],["vlxxs.net",271],["rapelust.com",271],["vtube.to",271],["vtplay.net",271],["desitelugusex.com",271],["xvideos-downloader.net",271],["xxxvideotube.net",271],["sdefx.cloud",271],["nozomi.la",271],["moviesonlinefree.net",271],["flickr.com",272],["firefile.cc",273],["pestleanalysis.com",273],["kochamjp.pl",273],["tutorialforlinux.com",273],["whatsaero.com",273],["animeblkom.net",[273,289]],["blkom.com",273],["globes.co.il",[274,275]],["jardiner-malin.fr",276],["tw-calc.net",277],["ohmybrush.com",278],["talkceltic.net",279],["mentalfloss.com",280],["uprafa.com",281],["cube365.net",282],["nightfallnews.com",[283,284]],["wwwfotografgotlin.blogspot.com",285],["freelistenonline.com",285],["badassdownloader.com",286],["quickporn.net",287],["yellowbridge.com",288],["aosmark.com",290],["atozmath.com",[292,293,294,295,296,297,298]],["newyorker.com",299],["brighteon.com",300],["more.tv",301],["video1tube.com",302],["alohatube.xyz",302],["link.cgtips.org",304],["hentaicloud.com",305],["netfapx.com",307],["paperzonevn.com",309],["hentaienglish.com",310],["hentaiporno.xxx",310],["venge.io",[311,312]],["btcbux.io",313],["its.porn",[314,315]],["atv.at",316],["2ndrun.tv",317],["rackusreads.com",317],["jetpunk.com",319],["imgur.com",320],["hentai-party.com",321],["hentaicomics.pro",321],["xxx-comics.pro",321],["genshinimpactcalculator.com",324],["mysexgames.com",325],["embed.indavideo.hu",328],["coinurl.net",[329,330]],["gdr-online.com",331],["mmm.dk",332],["iqiyi.com",[333,334,474]],["m.iqiyi.com",335],["japopav.tv",336],["lvturbo.com",336],["nbcolympics.com",337],["apkhex.com",338],["indiansexstories2.net",339],["issstories.xyz",339],["1340kbbr.com",340],["gorgeradio.com",340],["kduk.com",340],["kedoam.com",340],["kejoam.com",340],["kelaam.com",340],["khsn1230.com",340],["kjmx.rocks",340],["kloo.com",340],["klooam.com",340],["klykradio.com",340],["kmed.com",340],["kmnt.com",340],["kool991.com",340],["kpnw.com",340],["kppk983.com",340],["krktcountry.com",340],["ktee.com",340],["kwro.com",340],["kxbxfm.com",340],["thevalley.fm",340],["dsocker1234.blogspot.com",341],["surfline.com",[342,362]],["blick.ch",343],["mgnet.xyz",344],["designtagebuch.de",345],["pixroute.com",346],["uploady.io",347],["calculator-online.net",348],["porngames.club",349],["sexgames.xxx",349],["111.90.159.132",350],["battleplan.news",350],["mobile-tracker-free.com",351],["pfps.gg",352],["ac-illust.com",[353,354]],["photo-ac.com",[353,354]],["social-unlock.com",355],["ninja.io",356],["sourceforge.net",357],["samfirms.com",358],["banned.video",359],["conspiracyfact.info",359],["freeworldnews.tv",359],["madmaxworld.tv",359],["huffpost.com",360],["ingles.com",361],["spanishdict.com",361],["play.tv3.ee",363],["trendyoum.com",364],["bulbagarden.net",365],["doomovie-hd.live",366],["madoohd.com",366],["moviestars.to",367],["hollywoodlife.com",368],["searchresults.cc",369],["mat6tube.com",370],["textstudio.co",371],["newtumbl.com",372],["nevcoins.club",374],["mail.com",375],["erome.com",378],["oggi.it",[379,380]],["manoramamax.com",379],["video.gazzetta.it",[379,380]],["mangakita.net",381],["poscishd.online",382],["avpgalaxy.net",383],["mhma12.tech",384],["panda-novel.com",385],["zebranovel.com",385],["lightsnovel.com",385],["eaglesnovel.com",385],["pandasnovel.com",385],["zadfaucet.com",386],["ewrc-results.com",387],["kizi.com",388],["cyberscoop.com",389],["fedscoop.com",389],["canale.live",390],["mafiatown.pl",[391,392]],["jeep-cj.com",393],["sponsorhunter.com",394],["cloudcomputingtopics.net",395],["likecs.com",396],["tiscali.it",397],["linkspy.cc",398],["tutelehd3.xyz",399],["dirty.pink",[400,401,402]],["adshnk.com",403],["chattanoogan.com",404],["adsy.pw",405],["playstore.pw",405],["socialmediagirls.com",406],["windowspro.de",407],["snapinsta.app",408],["tvtv.ca",409],["tvtv.us",409],["mydaddy.cc",410],["roadtrippin.fr",411],["redketchup.io",[412,413,414]],["anyporn.com",[415,431]],["bravoporn.com",415],["bravoteens.com",415],["crocotube.com",415],["hellmoms.com",415],["hellporno.com",415],["sex3.com",415],["tubewolf.com",415],["xbabe.com",415],["xcum.com",415],["zedporn.com",415],["imagetotext.info",416],["infokik.com",417],["freepik.com",418],["ddwloclawek.pl",[419,420]],["deezer.com",421],["my-subs.co",422],["plaion.com",423],["rapid-cloud.co",424],["slideshare.net",[425,426]],["ustreasuryyieldcurve.com",427],["businesssoftwarehere.com",428],["goo.st",428],["freevpshere.com",428],["softwaresolutionshere.com",428],["easymc.io",432],["staige.tv",433],["androidadult.com",434],["streamvid.net",435],["watchtv24.com",436],["cellmapper.net",437],["medscape.com",438],["newscon.org",[439,440]],["arkadium.com",441],["app.blubank.com",442],["sportdeutschland.tv",443],["kcra.com",443],["wcvb.com",443],["ccthesims.com",445],["chromeready.com",445],["coursedrive.org",445],["dtbps3games.com",445],["illustratemagazine.com",445],["uknip.co.uk",445],["vod.pl",446],["megadrive-emulator.com",447],["animesaga.in",450],["moviesapi.club",450],["bestx.stream",450],["watchx.top",450],["digimanie.cz",451],["svethardware.cz",451],["srvy.ninja",452],["drawer-opportunity-i-243.site",453],["tchatche.com",454],["ozulmanga.com",455],["edmdls.com",456],["freshremix.net",456],["scenedl.org",456],["trakt.tv",[457,458,459]],["shroomers.app",460],["di.fm",[461,462,463]],["pc-builds.com",464],["qtoptens.com",464],["reuters.com",464],["today.com",464],["videogamer.com",464],["wrestlinginc.com",464],["gbatemp.net",464],["techedubyte.com",465],["movie-th.tv",466],["iwanttfc.com",467],["nutraingredients-asia.com",468],["nutraingredients-latam.com",468],["nutraingredients-usa.com",468],["nutraingredients.com",468],["livesportsclub.me",469],["rogstream.fun",469],["ozulscansen.com",470],["fitnessbr.click",471],["minhareceita.xyz",471],["doomied.monster",472],["lookmovie2.to",472],["royalroad.com",473],["biletomat.pl",475],["hextank.io",[477,478]],["gofilmizle.com",[479,480]],["sagewater.com",482],["redlion.net",482],["satdl.com",483],["vidstreaming.xyz",484],["myradioonline.pl",485],["teamskeet.com",486],["tacobell.com",488],["webtoons.com",[489,490]],["zefoy.com",491],["natgeotv.com",493],["br.de",494],["pasteboard.co",495],["clickhole.com",496],["deadspin.com",496],["gizmodo.com",496],["jalopnik.com",496],["jezebel.com",496],["kotaku.com",496],["lifehacker.com",496],["splinternews.com",496],["theinventory.com",496],["theonion.com",496],["theroot.com",496],["thetakeout.com",496],["pewresearch.org",496],["los40.com",[497,498]],["as.com",498],["telegraph.co.uk",[499,500]],["poweredbycovermore.com",[499,546]],["lumens.com",[499,546]],["verizon.com",501],["humanbenchmark.com",502],["politico.com",503],["officedepot.co.cr",[504,505,506,507]],["usnews.com",508],["factable.com",510],["zee5.com",511],["gala.fr",512],["geo.fr",512],["voici.fr",512],["gloucestershirelive.co.uk",513],["arsiv.mackolik.com",514],["jacksonguitars.com",515],["scandichotels.com",516],["stylist.co.uk",517],["nettiauto.com",518],["thaiairways.com",[519,520]],["cerbahealthcare.it",[521,522]],["futura-sciences.com",[521,537]],["tiendaenlinea.claro.com.ni",[523,524]],["tieba.baidu.com",525],["linktr.ee",526],["grasshopper.com",[529,530]],["epson.com.cn",[531,532]],["oe24.at",[533,534]],["szbz.de",533],["platform.autods.com",[535,536]],["wikihow.com",538],["citibank.com.sg",539],["uol.com.br",[540,541,542]],["gazzetta.gr",543],["digicol.dpm.org.cn",[544,545]],["virginmediatelevision.ie",547],["larazon.es",[548,549]],["waitrosecellar.com",[550,551,552]],["kicker.de",553],["sharpen-free-design-generator.netlify.app",[554,555]],["help.cashctrl.com",[556,557]],["commande.rhinov.pro",[558,559]],["alliptvlinks.com",562]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,22]],["1movies",[14,21]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["hamsterix",15],["xhamster",15],["xhamster1",15],["xhamster10",15],["xhamster11",15],["xhamster12",15],["xhamster13",15],["xhamster14",15],["xhamster15",15],["xhamster16",15],["xhamster17",15],["xhamster18",15],["xhamster19",15],["xhamster20",15],["xhamster2",15],["xhamster3",15],["xhamster4",15],["xhamster5",15],["xhamster7",15],["xhamster8",15],["vidlox",[16,17]],["primewire",18],["streanplay",[18,20]],["sbplay",18],["milfnut",18],["fmovies",22],["sxyprn",26],["hqq",[27,28]],["waaw",[28,29]],["younetu",28],["123link",30],["adshort",30],["linkshorts",30],["adsrt",30],["vinaurl",30],["adfloz",30],["dutchycorp",30],["shortearn",30],["pingit",30],["shrink",30],["tmearn",30],["megalink",30],["miniurl",30],["clk",30],["pureshort",30],["shrinke",30],["shrinkme",30],["pcprogramasymas",30],["link1s",30],["shortzzy",30],["shorttey",[30,213]],["lite-link",30],["adcorto",30],["zshort",30],["upfiles",30],["linkfly",30],["wplink",30],["seulink",30],["encurtalink",30],["camwhores",[31,42,93,94,95]],["tube8",[32,33]],["youporn",33],["redtube",33],["pornhub",[33,199]],["xtits",[58,129]],["streamwish",[60,61]],["pouvideo",68],["povvideo",68],["povw1deo",68],["povwideo",68],["powv1deo",68],["powvibeo",68],["powvideo",68],["powvldeo",68],["acortalo",[73,74,75,76]],["acortar",[73,74,75,76]],["plyjam",[77,78]],["fxporn69",83],["vipbox",84],["viprow",84],["desbloqueador",89],["xberuang",91],["teknorizen",91],["kickassanime",96],["subtorrents",99],["subtorrents1",99],["newpelis",99],["pelix",99],["allcalidad",99],["infomaniakos",99],["filecrypt",103],["tornadomovies",109],["sexwebvideo",110],["mangovideo",110],["icdrama",116],["mangasail",116],["file4go",118],["asianclub",132],["anitube",138],["mixdrop",140],["azsoft",152],["uploadev",167],["ver-pelis-online",178],["ancient-origins",186],["spankbang",206],["lookcam",213],["lootlinks",213],["dpstream",216],["bluemediafiles",218],["docer",240],["pixlev",253],["terabox",258],["skymovieshd",271],["dvdplay",271],["ctrlv",291],["crackstreams",308],["123movieshd",318],["uproxy",322],["animesa",323],["cinecalidad",[326,327]],["apkmaven",373],["gmx",376],["gamereactor",430],["tvhay",[448,449]],["lookmovie",472],["lk21official",476],["www.google",487],["dropgalaxy",[560,561]]]);

const exceptionsMap = new Map([["pingit.com",[30]],["pingit.me",[30]],["lookmovie.studio",[472]]]);

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
