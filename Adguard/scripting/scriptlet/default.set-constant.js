/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["detectAdBlock","noopFunc"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["isAdblockActive","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["placeAdsHandler","noopFunc"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["document.hasFocus","trueFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["Object.prototype.isAllAdClose","true"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["isRequestPresent","true"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["protection","noopFunc"],["Yii2App.playbackTimeout","0"],["private","false"],["Notification","undefined"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["wpsafelinkCount","0"],["powerAPITag","emptyObj"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["cpexAddCMPCloseButton","noopFunc"],["window.pp_gemius_cnt","1"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["linkvertise.com",11],["elcriticodelatele.com",[11,307]],["gadgets.es",[11,307]],["amateurporn.co",[11,108]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,408]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,111]],["familyporn.tv",17],["cloudemb.com",[17,327]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,93]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["troyyourlead.com",21],["denisegrowthwide.com",21],["nectareousoverelate.com",21],["apinchcaseation.com",21],["timberwoodanotia.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["netu.ac",26],["dirtyvideo.fun",27],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,132]],["stfly.me",28],["oncehelp.com",28],["bit-url.com",28],["rgl.vn",28],["reqlinks.net",28],["megaurl.in",28],["megafly.in",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["7r6.com",28],["oko.sh",28],["shortpaid.com",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["srek.net",28],["skincarie.com",28],["exeo.app",28],["birdurls.com",28],["coinlyhub.com",[28,216]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,225]],["owllink.net",28],["cutdl.xyz",28],["gplinks.co",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["iir.ai",28],["shorteet.com",[28,245]],["sekilastekno.com",28],["promo-visits.site",28],["satoshi-win.xyz",[28,254]],["shorterall.com",28],["smoner.com",28],["linkshrnk.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["cashurl.in",28],["4cash.me",28],["namaidani.com",28],["bitfly.io",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["fxlap.com",28],["earnfasts.com",28],["tawiia.com",28],["droplink.co",28],["recipestutorials.com",28],["2shrt.com",28],["apkshrt.com",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["try2link.com",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["clickscoin.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["jameeltips.us",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["shortlink.prz.pw",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["enagato.com",28],["automotur.club",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,153]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,225]],["snowurl.com",[28,225]],["upshrink.com",28],["enit.in",[28,241]],["ez4short.com",28],["easysky.in",28],["veganab.co",28],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["linkshortify.site",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["cutx.me",28],["cryptoon.xyz",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["pandaznetwork.com",28],["atglinks.com",28],["du-link.in",28],["linksfy.co",28],["news.speedynews.xyz",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["oii.io",28],["novelssites.com",28],["links.medipost.org",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["adrinolinks.in",28],["link4rev.site",28],["bloginguru.xyz",28],["tii.la",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",28],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["gainl.ink",28],["windowslite.net",[28,225]],["coinsl.click",28],["exalink.fun",28],["short2url.xyz",28],["exego.app",28],["panyshort.link",28],["viewfr.com",28],["easycut.io",28],["cpm.icu",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["kiddyshort.com",28],["watchmygf.me",[29,54]],["fpo.xxx",[29,56]],["sexemix.com",29],["heavyfetish.com",[29,486]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,211]],["yourporngod.com",[40,41]],["javbangers.com",[40,296]],["camfox.com",40],["camthots.tv",[40,126]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,128]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,108,126,128]],["bravoerotica.net",[56,128]],["youx.xxx",56],["camclips.tv",[56,211]],["camflow.tv",[56,108,128,175,249]],["camhoes.tv",[56,108,126,128,175,249]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,128]],["analdin.com",[56,128]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,437]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["audioz.cc",75],["audioz.es",75],["luckydice.net",75],["adarima.org",75],["tieutietkiem.com",75],["weatherwx.com",75],["sattaguess.com",75],["winshell.de",75],["rosasidan.ws",75],["modmakers.xyz",75],["gamepure.in",75],["warrenrahul.in",75],["austiblox.net",75],["upiapi.in",75],["wikitraveltips.com",[75,152]],["amritadrino.com",[75,152]],["myownguess.in",75],["watchhentai.net",75],["thichcode.net",75],["texturecan.com",75],["tikmate.app",[75,479]],["vikistream.com",76],["eplayer.click",[76,77]],["mega4upload.com",[77,83]],["ennovelas.com",[77,83]],["n-tv.de",78],["brigitte.de",79],["stern.de",79],["foxsports.com.au",80],["canberratimes.com.au",80],["thesimsresource.com",81],["bdnewszh.com",83],["streamservicehd.click",83],["timeforbitco.in",84],["worldofbitco.in",[84,96]],["weatherx.co.in",[84,96]],["getyourbitco.in",84],["sunbtc.space",84],["ctrl.blog",85],["sportlife.es",86],["tubitv.com",86],["finofilipino.org",87],["acortarm.xyz",88],["acortame.xyz",88],["speedtest.net",89],["mysflink.blogspot.com",90],["assia.tv",91],["assia4.com",91],["assia24.com",91],["cwtvembeds.com",[93,127]],["camlovers.tv",93],["porntn.com",93],["pornissimo.org",93],["sexcams-24.com",[93,108]],["watchporn.to",[93,108]],["camwhorez.video",93],["footstockings.com",[94,108]],["sbs.com.au",97],["4players.de",[97,223]],["ojogos.com.br",99],["powforums.com",100],["supforums.com",100],["studybullet.com",100],["usgamer.net",101],["recordonline.com",101],["123tvseries.co",103],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["temp-mails.com",105],["freiepresse.de",106],["investing.com",107],["camhub.cc",108],["love4porn.com",108],["thotvids.com",108],["watchmdh.to",108],["celebwhore.com",108],["cluset.com",108],["4kporn.xxx",108],["xhomealone.com",108],["lusttaboo.com",[108,369]],["hentai-moon.com",108],["mp3fiber.com",109],["suedkurier.de",110],["anysex.com",112],["gomiblog.com",113],["iptvtools.net",113],["vlist.se",114],["pornve.com",115],["coolrom.com.au",116],["bitcotasks.com",116],["pornohirsch.net",117],["marie-claire.es",118],["gamezhero.com",118],["flashgirlgames.com",118],["onlinesudoku.games",118],["mpg.football",118],["sssam.com",118],["globalnews.ca",119],["drinksmixer.com",120],["leitesculinaria.com",120],["fupa.net",121],["ge-map-overlays.appspot.com",122],["browardpalmbeach.com",123],["dallasobserver.com",123],["houstonpress.com",123],["miaminewtimes.com",123],["phoenixnewtimes.com",123],["westword.com",123],["nhentai.net",124],["fox.com.tr",125],["caminspector.net",126],["camwhoreshd.com",126],["camgoddess.tv",126],["gay4porn.com",128],["mypornhere.com",128],["mediapason.it",129],["linkspaid.com",129],["tuotromedico.com",129],["neoteo.com",129],["phoneswiki.com",129],["celebmix.com",129],["myneobuxportal.com",129],["oyungibi.com",129],["25yearslatersite.com",129],["jeshoots.com",130],["techhx.com",130],["karanapk.com",130],["videogreen.xyz",131],["sypl.xyz",131],["playembed.xyz",131],["javhdporn.net",131],["redanimedatabase.cloud",131],["javstream.top",131],["flashplayer.fullstacks.net",133],["cloudapps.herokuapp.com",133],["youfiles.herokuapp.com",133],["temp-mail.org",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hqtv.biz",140],["liveuamap.com",141],["filmiseriali.com",141],["muvibg.com",141],["linksht.com",[142,143]],["audycje.tokfm.pl",144],["hulu.com",[145,146,147]],["shush.se",148],["aniwatcher.com",149],["emurom.net",150],["allkpop.com",151],["azmath.info",152],["downfile.site",152],["downphanmem.com",152],["expertvn.com",152],["memangbau.com",152],["trangchu.news",152],["aztravels.net",152],["adfoc.us",152],["techacode.com",152],["sahlmarketing.net",152],["sptfy.be",152],["myfirstname.in",152],["host2news.com",152],["extraking.in",152],["streamcheck.link",152],["mcafee-com.com",[152,401]],["pickcrackpasswords.blogspot.com",154],["kfrfansub.com",155],["thuglink.com",155],["voipreview.org",155],["hanime.tv",156],["pogo.com",157],["cloudvideo.tv",158],["legionjuegos.org",159],["legionpeliculas.org",159],["legionprogramas.org",159],["16honeys.com",160],["elespanol.com",161],["remodelista.com",162],["coolmathgames.com",[163,164,165,503]],["audiofanzine.com",166],["noweconomy.live",168],["howifx.com",168],["vavada5com.com",168],["hitokin.net",169],["elil.cc",170],["developerinsider.co",171],["ilprimatonazionale.it",172],["hotabis.com",172],["root-nation.com",172],["italpress.com",172],["airsoftmilsimnews.com",172],["artribune.com",172],["thehindu.com",173],["cambro.tv",[174,175]],["nibelungen-kurier.de",176],["noz.de",177],["earthgarage.com",179],["pianetamountainbike.it",180],["barchart.com",181],["modelisme.com",182],["parasportontario.ca",182],["prescottenews.com",182],["nrj-play.fr",183],["oeffentlicher-dienst.info",184],["hackingwithreact.com",185],["gutekueche.at",186],["eplfootballmatch.com",187],["peekvids.com",188],["playvids.com",188],["pornflip.com",188],["redensarten-index.de",189],["vw-page.com",190],["viz.com",[191,192]],["queenfaucet.website",193],["0rechner.de",194],["configspc.com",195],["xopenload.me",195],["uptobox.com",195],["uptostream.com",195],["onepiece-tube.com",196],["japgay.com",197],["mega-debrid.eu",198],["dreamdth.com",199],["pijanitvor.com",199],["diaridegirona.cat",201],["diariodeibiza.es",201],["diariodemallorca.es",201],["diarioinformacion.com",201],["eldia.es",201],["emporda.info",201],["farodevigo.es",201],["laopinioncoruna.es",201],["laopiniondemalaga.es",201],["laopiniondemurcia.es",201],["laopiniondezamora.es",201],["laprovincia.es",201],["levante-emv.com",201],["mallorcazeitung.es",201],["regio7.cat",201],["superdeporte.es",201],["playpaste.com",202],["player.rtl2.de",203],["freetutorialsus.com",204],["vidlii.com",[204,221]],["iammagnus.com",204],["dailyvideoreports.net",204],["unityassets4free.com",204],["cnbc.com",205],["puzzles.msn.com",206],["metro.us",206],["newsobserver.com",206],["arkadiumhosted.com",206],["spankbang.com",207],["firefaucet.win",208],["55k.io",209],["filelions.online",209],["direct-link.net",210],["direkt-wissen.com",210],["link-to.net",210],["fullhdxxx.com",212],["pornclassic.tube",213],["tubepornclassic.com",213],["getintopc.com",214],["unique-tutorials.info",214],["etonline.com",215],["creatur.io",215],["drphil.com",215],["urbanmilwaukee.com",215],["ontiva.com",215],["hideandseek.world",215],["myabandonware.com",215],["mangaalarab.com",215],["kendam.com",215],["wttw.com",215],["synonyms.com",215],["definitions.net",215],["hostmath.com",215],["camvideoshub.com",215],["minhaconexao.com.br",215],["bravedown.com",215],["home-made-videos.com",217],["pxrnxx.xyz",217],["amateur-couples.com",217],["slutdump.com",217],["produsat.com",219],["12thman.com",221],["acusports.com",221],["atlantic10.com",221],["auburntigers.com",221],["baylorbears.com",221],["bceagles.com",221],["bgsufalcons.com",221],["big12sports.com",221],["bigten.org",221],["bradleybraves.com",221],["butlersports.com",221],["cmumavericks.com",221],["conferenceusa.com",221],["cyclones.com",221],["dartmouthsports.com",221],["daytonflyers.com",221],["dbupatriots.com",221],["dbusports.com",221],["denverpioneers.com",221],["fduknights.com",221],["fgcuathletics.com",221],["fightinghawks.com",221],["fightingillini.com",221],["floridagators.com",221],["friars.com",221],["friscofighters.com",221],["gamecocksonline.com",221],["goarmywestpoint.com",221],["gobison.com",221],["goblueraiders.com",221],["gobobcats.com",221],["gocards.com",221],["gocreighton.com",221],["godeacs.com",221],["goexplorers.com",221],["goetbutigers.com",221],["gofrogs.com",221],["gogriffs.com",221],["gogriz.com",221],["golobos.com",221],["gomarquette.com",221],["gopack.com",221],["gophersports.com",221],["goprincetontigers.com",221],["gopsusports.com",221],["goracers.com",221],["goshockers.com",221],["goterriers.com",221],["gotigersgo.com",221],["gousfbulls.com",221],["govandals.com",221],["gowyo.com",221],["goxavier.com",221],["gozags.com",221],["gozips.com",221],["griffinathletics.com",221],["guhoyas.com",221],["gwusports.com",221],["hailstate.com",221],["hamptonpirates.com",221],["hawaiiathletics.com",221],["hokiesports.com",221],["huskers.com",221],["icgaels.com",221],["iuhoosiers.com",221],["jsugamecocksports.com",221],["longbeachstate.com",221],["loyolaramblers.com",221],["lrtrojans.com",221],["lsusports.net",221],["morrisvillemustangs.com",221],["msuspartans.com",221],["muleriderathletics.com",221],["mutigers.com",221],["navysports.com",221],["nevadawolfpack.com",221],["niuhuskies.com",221],["nkunorse.com",221],["nuhuskies.com",221],["nusports.com",221],["okstate.com",221],["olemisssports.com",221],["omavs.com",221],["ovcsports.com",221],["owlsports.com",221],["purduesports.com",221],["redstormsports.com",221],["richmondspiders.com",221],["sfajacks.com",221],["shupirates.com",221],["siusalukis.com",221],["smcgaels.com",221],["smumustangs.com",221],["soconsports.com",221],["soonersports.com",221],["themw.com",221],["tulsahurricane.com",221],["txst.com",221],["txstatebobcats.com",221],["ubbulls.com",221],["ucfknights.com",221],["ucirvinesports.com",221],["uconnhuskies.com",221],["uhcougars.com",221],["uicflames.com",221],["umterps.com",221],["uncwsports.com",221],["unipanthers.com",221],["unlvrebels.com",221],["uoflsports.com",221],["usdtoreros.com",221],["utahstateaggies.com",221],["utepathletics.com",221],["utrockets.com",221],["uvmathletics.com",221],["uwbadgers.com",221],["villanova.com",221],["wkusports.com",221],["wmubroncos.com",221],["woffordterriers.com",221],["1pack1goal.com",221],["bcuathletics.com",221],["bubraves.com",221],["goblackbears.com",221],["golightsgo.com",221],["gomcpanthers.com",221],["goutsa.com",221],["mercerbears.com",221],["pirateblue.com",221],["pirateblue.net",221],["pirateblue.org",221],["quinnipiacbobcats.com",221],["towsontigers.com",221],["tribeathletics.com",221],["tribeclub.com",221],["utepminermaniacs.com",221],["utepminers.com",221],["wkutickets.com",221],["aopathletics.org",221],["atlantichockeyonline.com",221],["bigsouthnetwork.com",221],["bigsouthsports.com",221],["chawomenshockey.com",221],["dbupatriots.org",221],["drakerelays.org",221],["ecac.org",221],["ecacsports.com",221],["emueagles.com",221],["emugameday.com",221],["gculopes.com",221],["godrakebulldog.com",221],["godrakebulldogs.com",221],["godrakebulldogs.net",221],["goeags.com",221],["goislander.com",221],["goislanders.com",221],["gojacks.com",221],["gomacsports.com",221],["gseagles.com",221],["hubison.com",221],["iowaconference.com",221],["ksuowls.com",221],["lonestarconference.org",221],["mascac.org",221],["midwestconference.org",221],["mountaineast.org",221],["niu-pack.com",221],["nulakers.ca",221],["oswegolakers.com",221],["ovcdigitalnetwork.com",221],["pacersports.com",221],["rmacsports.org",221],["rollrivers.com",221],["samfordsports.com",221],["uncpbraves.com",221],["usfdons.com",221],["wiacsports.com",221],["alaskananooks.com",221],["broncathleticfund.com",221],["cameronaggies.com",221],["columbiacougars.com",221],["etownbluejays.com",221],["gobadgers.ca",221],["golancers.ca",221],["gometrostate.com",221],["gothunderbirds.ca",221],["kentstatesports.com",221],["lehighsports.com",221],["lopers.com",221],["lycoathletics.com",221],["lycomingathletics.com",221],["maraudersports.com",221],["mauiinvitational.com",221],["msumavericks.com",221],["nauathletics.com",221],["nueagles.com",221],["nwusports.com",221],["oceanbreezenyc.org",221],["patriotathleticfund.com",221],["pittband.com",221],["principiaathletics.com",221],["roadrunnersathletics.com",221],["sidearmsocial.com",221],["snhupenmen.com",221],["stablerarena.com",221],["stoutbluedevils.com",221],["uwlathletics.com",221],["yumacs.com",221],["collegefootballplayoff.com",221],["csurams.com",221],["cubuffs.com",221],["gobearcats.com",221],["gohuskies.com",221],["mgoblue.com",221],["osubeavers.com",221],["pittsburghpanthers.com",221],["rolltide.com",221],["texassports.com",221],["thesundevils.com",221],["uclabruins.com",221],["wvuathletics.com",221],["wvusports.com",221],["arizonawildcats.com",221],["calbears.com",221],["cuse.com",221],["georgiadogs.com",221],["goducks.com",221],["goheels.com",221],["gostanford.com",221],["insidekstatesports.com",221],["insidekstatesports.info",221],["insidekstatesports.net",221],["insidekstatesports.org",221],["k-stateathletics.com",221],["k-statefootball.net",221],["k-statefootball.org",221],["k-statesports.com",221],["k-statesports.net",221],["k-statesports.org",221],["k-statewomenshoops.com",221],["k-statewomenshoops.net",221],["k-statewomenshoops.org",221],["kstateathletics.com",221],["kstatefootball.net",221],["kstatefootball.org",221],["kstatesports.com",221],["kstatewomenshoops.com",221],["kstatewomenshoops.net",221],["kstatewomenshoops.org",221],["ksuathletics.com",221],["ksusports.com",221],["scarletknights.com",221],["showdownforrelief.com",221],["syracusecrunch.com",221],["texastech.com",221],["theacc.com",221],["ukathletics.com",221],["usctrojans.com",221],["utahutes.com",221],["utsports.com",221],["wsucougars.com",221],["mangadods.com",221],["tricksplit.io",221],["litecoinads.com",221],["fangraphs.com",222],["buffed.de",223],["gamesaktuell.de",223],["gamezone.de",223],["pcgames.de",223],["videogameszone.de",223],["planetaminecraft.com",224],["flyad.vip",225],["lapresse.ca",226],["kolyoom.com",227],["ilovephd.com",227],["upstream.to",228],["negumo.com",229],["games.wkb.jp",[230,231]],["channelmyanmar.org",[232,233]],["u-s-news.com",233],["fandom.com",[234,521,522]],["kenshi.fandom.com",235],["hausbau-forum.de",236],["fake-it.ws",237],["laksa19.github.io",238],["1shortlink.com",239],["nesia.my.id",240],["makemoneywithurl.com",241],["resetoff.pl",242],["sexodi.com",242],["cdn77.org",243],["howtofixwindows.com",244],["3sexporn.com",245],["momxxxsex.com",245],["myfreevintageporn.com",245],["penisbuyutucum.net",245],["lightnovelworld.com",246],["ujszo.com",247],["newsmax.com",248],["bobs-tube.com",249],["nadidetarifler.com",250],["siz.tv",250],["suzylu.co.uk",[251,252]],["onworks.net",253],["yabiladi.com",253],["homeairquality.org",255],["faucettronn.click",255],["ticketmaster.sg",255],["downloadsoft.net",256],["imgair.net",257],["imgblaze.net",257],["imgfrost.net",257],["pixsera.net",257],["vestimage.site",257],["imgwia.buzz",257],["testlanguages.com",258],["newsinlevels.com",258],["videosinlevels.com",258],["arcai.com",259],["my-code4you.blogspot.com",260],["vlxxs.net",261],["rapelust.com",261],["vtube.to",261],["vtplay.net",261],["desitelugusex.com",261],["xvideos-downloader.net",261],["xxxvideotube.net",261],["sdefx.cloud",261],["nozomi.la",261],["moviesonlinefree.net",261],["flickr.com",262],["firefile.cc",264],["pestleanalysis.com",264],["kochamjp.pl",264],["tutorialforlinux.com",264],["whatsaero.com",264],["animeblkom.net",[264,280]],["blkom.com",264],["globes.co.il",[265,266]],["jardiner-malin.fr",267],["tw-calc.net",268],["ohmybrush.com",269],["talkceltic.net",270],["zdam.xyz",271],["mentalfloss.com",272],["uprafa.com",273],["cube365.net",274],["nightfallnews.com",[275,276]],["wwwfotografgotlin.blogspot.com",277],["freelistenonline.com",277],["badassdownloader.com",278],["quickporn.net",279],["aosmark.com",281],["theappstore.org",281],["atozmath.com",[283,284,285,286,287,288,289]],["newyorker.com",290],["brighteon.com",291],["more.tv",292],["video1tube.com",293],["alohatube.xyz",293],["link.cgtips.org",294],["hentaicloud.com",295],["netfapx.com",297],["paperzonevn.com",299],["hentaienglish.com",300],["hentaiporno.xxx",300],["venge.io",[301,302]],["btcbux.io",303],["its.porn",[304,305]],["atv.at",306],["2ndrun.tv",307],["rackusreads.com",307],["exerror.com",307],["temp-phone-number.com",308],["jetpunk.com",310],["imgur.com",311],["hentai-party.com",312],["hentaicomics.pro",312],["xxx-comics.pro",312],["genshinimpactcalculator.com",315],["mysexgames.com",316],["embed.indavideo.hu",319],["coinurl.net",[320,321]],["gdr-online.com",322],["mmm.dk",323],["iqiyi.com",[324,325,471]],["m.iqiyi.com",326],["japopav.tv",327],["lvturbo.com",327],["nbcolympics.com",328],["apkhex.com",329],["indiansexstories2.net",330],["issstories.xyz",330],["1340kbbr.com",331],["gorgeradio.com",331],["kduk.com",331],["kedoam.com",331],["kejoam.com",331],["kelaam.com",331],["khsn1230.com",331],["kjmx.rocks",331],["kloo.com",331],["klooam.com",331],["klykradio.com",331],["kmed.com",331],["kmnt.com",331],["kool991.com",331],["kpnw.com",331],["kppk983.com",331],["krktcountry.com",331],["ktee.com",331],["kwro.com",331],["kxbxfm.com",331],["thevalley.fm",331],["dsocker1234.blogspot.com",332],["surfline.com",[333,354]],["blick.ch",334],["mgnet.xyz",335],["designtagebuch.de",336],["pixroute.com",337],["uploady.io",338],["calculator-online.net",339],["porngames.club",340],["sexgames.xxx",340],["111.90.159.132",341],["battleplan.news",341],["mobile-tracker-free.com",342],["pfps.gg",343],["ac-illust.com",[344,345]],["photo-ac.com",[344,345]],["social-unlock.com",346],["ninja.io",347],["sourceforge.net",348],["samfirms.com",349],["digminecraft.com",350],["banned.video",351],["conspiracyfact.info",351],["freeworldnews.tv",351],["madmaxworld.tv",351],["huffpost.com",352],["ingles.com",353],["spanishdict.com",353],["play.tv3.ee",355],["trendyoum.com",356],["bulbagarden.net",357],["doomovie-hd.com",358],["madoohd.com",358],["moviestars.to",359],["hollywoodlife.com",360],["searchresults.cc",361],["mat6tube.com",362],["textstudio.co",363],["newtumbl.com",364],["nevcoins.club",366],["mail.com",367],["erome.com",370],["oggi.it",[371,372]],["manoramamax.com",371],["video.gazzetta.it",[371,372]],["mangakita.net",373],["avpgalaxy.net",374],["mhma12.tech",375],["panda-novel.com",376],["zebranovel.com",376],["lightsnovel.com",376],["eaglesnovel.com",376],["pandasnovel.com",376],["zadfaucet.com",377],["ewrc-results.com",378],["kizi.com",379],["cyberscoop.com",380],["fedscoop.com",380],["canale.live",381],["mafiatown.pl",[382,383]],["jeep-cj.com",384],["sponsorhunter.com",385],["coinscap.info",386],["cryptowidgets.net",386],["greenenez.com",386],["insurancegold.in",386],["webfreetools.net",386],["wiki-topia.com",386],["blog.carsmania.net",386],["blog.carstopia.net",386],["blog.coinsvalue.net",386],["blog.cookinguide.net",386],["blog.freeoseocheck.com",386],["blog.makeupguide.net",386],["rapid-cloud.co",386],["cloudcomputingtopics.net",387],["likecs.com",388],["tiscali.it",389],["linkspy.cc",390],["tutelehd3.xyz",391],["dirty.pink",[392,393,394]],["adshnk.com",395],["chattanoogan.com",396],["adsy.pw",397],["playstore.pw",397],["socialmediagirls.com",398],["windowspro.de",399],["snapinsta.app",400],["carsmania.net",401],["carstopia.net",401],["coinsvalue.net",401],["cookinguide.net",401],["freeoseocheck.com",401],["makeupguide.net",401],["btcbitco.in",[401,428]],["btcsatoshi.net",401],["cempakajaya.com",401],["crypto4yu.com",401],["readbitcoin.org",401],["wiour.com",401],["exactpay.online",401],["aiimgvlog.fun",[401,466]],["tvtv.ca",402],["tvtv.us",402],["mydaddy.cc",403],["roadtrippin.fr",404],["redketchup.io",[405,406,407]],["anyporn.com",[408,423]],["bravoporn.com",408],["bravoteens.com",408],["crocotube.com",408],["hellmoms.com",408],["hellporno.com",408],["sex3.com",408],["tubewolf.com",408],["xbabe.com",408],["xcum.com",408],["zedporn.com",408],["imagetotext.info",409],["4funbox.com",410],["nephobox.com",410],["1024tera.com",410],["infokik.com",411],["freepik.com",412],["ddwloclawek.pl",[413,414]],["deezer.com",415],["my-subs.co",416],["plaion.com",417],["slideshare.net",[418,419]],["ustreasuryyieldcurve.com",420],["businesssoftwarehere.com",421],["goo.st",421],["freevpshere.com",421],["softwaresolutionshere.com",421],["staige.tv",424],["androidadult.com",425],["streamvid.net",426],["watchtv24.com",427],["cellmapper.net",429],["medscape.com",430],["newscon.org",[431,432]],["arkadium.com",433],["app.blubank.com",434],["lifesurance.info",435],["sportdeutschland.tv",436],["kcra.com",436],["wcvb.com",436],["chromeready.com",438],["coursedrive.org",438],["dtbps3games.com",438],["vod.pl",439],["megadrive-emulator.com",440],["animesaga.in",443],["bestx.stream",443],["moviesapi.club",443],["digimanie.cz",444],["svethardware.cz",444],["srvy.ninja",445],["drawer-opportunity-i-243.site",446],["tchatche.com",447],["ozulmanga.com",448],["edmdls.com",449],["freshremix.net",449],["scenedl.org",449],["trakt.tv",[450,451,452]],["shroomers.app",453],["di.fm",[454,455,456]],["qtoptens.com",457],["reuters.com",457],["today.com",457],["videogamer.com",457],["wrestlinginc.com",457],["techedubyte.com",458],["quesignifi.ca",459],["movie-th.tv",460],["iwanttfc.com",461],["nutraingredients-asia.com",462],["nutraingredients-latam.com",462],["nutraingredients-usa.com",462],["nutraingredients.com",462],["livesportsclub.me",463],["rogstream.fun",463],["ozulscansen.com",464],["fitnessbr.click",465],["minhareceita.xyz",465],["doomied.monster",467],["lookmovie2.to",467],["appsbull.com",468],["diudemy.com",468],["maqal360.com",468],["bildirim.link",469],["royalroad.com",470],["biletomat.pl",472],["hextank.io",[474,475]],["gofilmizle.com",[476,477]],["aduzz.com",478],["bitcrypto.info",478],["teamskeet.com",480],["tacobell.com",482],["webtoons.com",[483,484]],["zefoy.com",485],["natgeotv.com",487],["br.de",488],["pasteboard.co",489],["avclub.com",490],["clickhole.com",490],["deadspin.com",490],["gizmodo.com",490],["jalopnik.com",490],["jezebel.com",490],["kotaku.com",490],["lifehacker.com",490],["splinternews.com",490],["theinventory.com",490],["theonion.com",490],["theroot.com",490],["thetakeout.com",490],["pewresearch.org",490],["los40.com",[491,492]],["as.com",492],["telegraph.co.uk",[493,494]],["poweredbycovermore.com",[493,540]],["lumens.com",[493,540]],["verizon.com",495],["humanbenchmark.com",496],["politico.com",497],["officedepot.co.cr",[498,499,500,501]],["usnews.com",502],["factable.com",504],["zee5.com",505],["gala.fr",506],["geo.fr",506],["voici.fr",506],["gloucestershirelive.co.uk",507],["arsiv.mackolik.com",508],["jacksonguitars.com",509],["scandichotels.com",510],["stylist.co.uk",511],["nettiauto.com",512],["thaiairways.com",[513,514]],["cerbahealthcare.it",[515,516]],["futura-sciences.com",[515,531]],["tiendaenlinea.claro.com.ni",[517,518]],["tieba.baidu.com",519],["linktr.ee",520],["grasshopper.com",[523,524]],["epson.com.cn",[525,526]],["oe24.at",[527,528]],["szbz.de",527],["platform.autods.com",[529,530]],["wikihow.com",532],["citibank.com.sg",533],["uol.com.br",[534,535,536]],["gazzetta.gr",537],["digicol.dpm.org.cn",[538,539]],["virginmediatelevision.ie",541],["larazon.es",[542,543]],["waitrosecellar.com",[544,545,546]],["kicker.de",547],["sharpen-free-design-generator.netlify.app",[548,549]],["help.cashctrl.com",[550,551]],["zive.cz",[552,553]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",[26,27]],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["urlty",28],["shrink",28],["clk",28],["tmearn",28],["megalink",28],["miniurl",28],["pcprogramasymas",28],["link1s",28],["shrinke",28],["shrinkme",28],["shortzzy",28],["shorttey",[28,215]],["lite-link",28],["pureshort",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,40,92,93,94]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,200]],["xtits",[56,128]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[76,77]],["fxporn69",82],["vipbox",83],["viprow",83],["desbloqueador",88],["xberuang",90],["teknorizen",90],["linkberuang",90],["kickassanime",95],["subtorrents",98],["subtorrents1",98],["newpelis",98],["pelix",98],["allcalidad",98],["infomaniakos",98],["filecrypt",102],["tornadomovies",103],["sexwebvideo",108],["mangovideo",108],["icdrama",114],["mangasail",114],["file4go",116],["asianclub",131],["anitube",137],["mixdrop",139],["azsoft",152],["uploadev",167],["ver-pelis-online",178],["ancient-origins",187],["lookcam",215],["lootlinks",215],["dpstream",218],["bluemediafiles",220],["docer",242],["pixlev",257],["skymovieshd",261],["dvdplay",261],["dropgalaxy",263],["ctrlv",282],["crackstreams",298],["123movieshd",309],["uproxy",313],["animesa",314],["cinecalidad",[317,318]],["apkmaven",365],["gmx",368],["terabox",410],["gamereactor",422],["tvhay",[441,442]],["lookmovie",467],["lk21official",473],["www.google",481]]);

const exceptionsMap = new Map([["pingit.com",[28]],["pingit.me",[28]],["lookmovie.studio",[467]]]);

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
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
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
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
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
                    if ( a instanceof Object ) {
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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
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
