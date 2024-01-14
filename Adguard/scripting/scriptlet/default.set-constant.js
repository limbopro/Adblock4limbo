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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","undefined"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["document.hasFocus","trueFunc"],["isRequestPresent","true"],["fouty","true"],["detectAdblock","noopFunc"],["wpsafelinkCount","0"],["Notification","undefined"],["protection","noopFunc"],["private","false"],["waitTime","0"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["navigator.brave","undefined"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["nitroAds.abp","true"],["Object.prototype.adBlocked","false"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["window.isAdblockActive","false"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,311]],["gadgets.es",[11,311]],["amateurporn.co",[11,107]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["movingxh.world",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhtree.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,410]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,110]],["familyporn.tv",17],["cloudemb.com",[17,331]],["sbplay1.com",17],["id45.cyou",17],["85tube.com",[17,92]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["apinchcaseation.com",21],["bigclatterhomesguideservice.com",21],["bradleyviewdoctor.com",21],["denisegrowthwide.com",21],["edwardarriveoften.com",21],["housecardsummerbutton.com",21],["jamiesamewalk.com",21],["kennethofficialitem.com",21],["nectareousoverelate.com",21],["paulkitchendark.com",21],["stevenimaginelittle.com",21],["strawberriesporail.com",21],["timberwoodanotia.com",21],["tinycat-voe-fashion.com",21],["troyyourlead.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["voe.sx",21],["lukecomparetwo.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["player.tabooporns.com",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["netu.ac",26],["dirtyvideo.fun",27],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,130]],["stfly.me",28],["oncehelp.com",28],["bit-url.com",28],["rgl.vn",28],["reqlinks.net",28],["megaurl.in",28],["megafly.in",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["urlty.com",28],["7r6.com",28],["oko.sh",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["skincarie.com",28],["exeo.app",28],["birdurls.com",28],["coinlyhub.com",[28,211]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,220]],["owllink.net",28],["cutdl.xyz",28],["iir.ai",28],["shorteet.com",[28,240]],["sekilastekno.com",28],["smoner.com",28],["gplinks.co",28],["xpshort.com",28],["upshrink.com",28],["enit.in",[28,236]],["ez4short.com",28],["easysky.in",28],["veganab.co",28],["adrinolinks.in",28],["go.gyanitheme.com",28],["go.theforyou.in",28],["go.hipsonyc.com",28],["try2link.com",28],["jameeltips.us",28],["gainl.ink",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["promo-visits.site",28],["satoshi-win.xyz",[28,256]],["shorterall.com",28],["encurtandourl.com",28],["forextrader.site",28],["postazap.com",[28,149]],["tinys.click",[28,220]],["cpm.icu",28],["easycut.io",28],["panyshort.link",28],["enagato.com",28],["pandaznetwork.com",28],["linkshrnk.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["cashurl.in",28],["4cash.me",28],["namaidani.com",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["droplink.co",28],["recipestutorials.com",28],["apkshrt.com",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["clickscoin.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["shortlink.prz.pw",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["automotur.club",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,150]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,220]],["snowurl.com",[28,220]],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["atglinks.com",28],["du-link.in",28],["linksfy.co",28],["news.speedynews.xyz",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["oii.io",28],["novelssites.com",28],["links.medipost.org",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["link4rev.site",28],["bloginguru.xyz",28],["tii.la",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",28],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["windowslite.net",[28,220]],["coinsl.click",28],["exalink.fun",28],["exego.app",[28,254]],["viewfr.com",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["kiddyshort.com",28],["watchmygf.me",[29,54]],["camwhorez.tv",[29,40,91,92]],["fpo.xxx",[29,56]],["sexemix.com",29],["heavyfetish.com",[29,487]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,207]],["yourporngod.com",[40,41]],["javbangers.com",[40,300]],["camfox.com",40],["camthots.tv",[40,124]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,126]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,107,124,126]],["bravoerotica.net",[56,126]],["youx.xxx",56],["camclips.tv",[56,207]],["camflow.tv",[56,107,126,172,244]],["camhoes.tv",[56,107,124,126,172,244]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,126]],["analdin.com",[56,126]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,439]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,95]],["weatherx.co.in",[83,95]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,125]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,107]],["watchporn.to",[92,107]],["camwhorez.video",92],["footstockings.com",[93,107]],["sbs.com.au",96],["ojogos.com.br",98],["powforums.com",99],["supforums.com",99],["studybullet.com",99],["usgamer.net",100],["recordonline.com",100],["freebitcoin.win",102],["e-monsite.com",102],["coindice.win",102],["temp-mails.com",103],["freiepresse.de",104],["investing.com",105],["camhub.cc",107],["love4porn.com",107],["thotvids.com",107],["watchmdh.to",107],["celebwhore.com",107],["cluset.com",107],["4kporn.xxx",107],["xhomealone.com",107],["lusttaboo.com",[107,372]],["hentai-moon.com",107],["mp3fiber.com",108],["suedkurier.de",109],["anysex.com",111],["gomiblog.com",112],["iptvtools.net",112],["vlist.se",113],["pornve.com",114],["coolrom.com.au",115],["pornohirsch.net",116],["marie-claire.es",117],["gamezhero.com",117],["flashgirlgames.com",117],["onlinesudoku.games",117],["mpg.football",117],["sssam.com",117],["globalnews.ca",118],["drinksmixer.com",119],["leitesculinaria.com",119],["fupa.net",120],["browardpalmbeach.com",121],["dallasobserver.com",121],["houstonpress.com",121],["miaminewtimes.com",121],["phoenixnewtimes.com",121],["westword.com",121],["nhentai.net",122],["fox.com.tr",123],["caminspector.net",124],["camwhoreshd.com",124],["camgoddess.tv",124],["gay4porn.com",126],["mypornhere.com",126],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["videogreen.xyz",129],["playembed.xyz",129],["javhdporn.net",129],["redanimedatabase.cloud",129],["javstream.top",129],["flashplayer.fullstacks.net",131],["cloudapps.herokuapp.com",131],["youfiles.herokuapp.com",131],["temp-mail.org",132],["comnuan.com",133],["veedi.com",134],["battleboats.io",134],["fruitlab.com",135],["haddoz.net",135],["garoetpos.com",135],["stiletv.it",136],["hqtv.biz",138],["liveuamap.com",139],["muvibg.com",139],["linksht.com",[140,141]],["audycje.tokfm.pl",142],["hulu.com",[143,144,145]],["shush.se",146],["emurom.net",147],["allkpop.com",148],["azmath.info",149],["downfile.site",149],["downphanmem.com",149],["expertvn.com",149],["memangbau.com",149],["trangchu.news",149],["aztravels.net",149],["adfoc.us",149],["phixshop.com",149],["ggbazaar.in",149],["ignoupur.in",149],["hindityping.net",149],["indiasarkari.com",149],["iisfvirtual.in",149],["starxinvestor.com",149],["wikitraveltips.com",[149,252]],["amritadrino.com",[149,252]],["sahlmarketing.net",149],["filmypoints.in",149],["techacode.com",149],["sptfy.be",149],["streamcheck.link",149],["mcafee-com.com",[149,254]],["pickcrackpasswords.blogspot.com",151],["kfrfansub.com",152],["thuglink.com",152],["voipreview.org",152],["hanime.tv",153],["pogo.com",154],["cloudvideo.tv",155],["legionjuegos.org",156],["legionpeliculas.org",156],["legionprogramas.org",156],["16honeys.com",157],["elespanol.com",158],["remodelista.com",159],["coolmathgames.com",[160,161,162,504]],["audiofanzine.com",163],["noweconomy.live",165],["howifx.com",[165,236]],["vavada5com.com",165],["hitokin.net",166],["elil.cc",167],["developerinsider.co",168],["ilprimatonazionale.it",169],["hotabis.com",169],["root-nation.com",169],["italpress.com",169],["airsoftmilsimnews.com",169],["artribune.com",169],["thehindu.com",170],["cambro.tv",[171,172]],["nibelungen-kurier.de",173],["noz.de",174],["pianetamountainbike.it",176],["barchart.com",177],["modelisme.com",178],["parasportontario.ca",178],["prescottenews.com",178],["nrj-play.fr",179],["oeffentlicher-dienst.info",180],["hackingwithreact.com",181],["gutekueche.at",182],["eplfootballmatch.com",183],["peekvids.com",184],["playvids.com",184],["pornflip.com",184],["redensarten-index.de",185],["vw-page.com",186],["viz.com",[187,188]],["queenfaucet.website",189],["0rechner.de",190],["configspc.com",191],["xopenload.me",191],["uptobox.com",191],["uptostream.com",191],["onepiece-tube.com",192],["japgay.com",193],["mega-debrid.eu",194],["dreamdth.com",195],["diaridegirona.cat",197],["diariodeibiza.es",197],["diariodemallorca.es",197],["diarioinformacion.com",197],["eldia.es",197],["emporda.info",197],["farodevigo.es",197],["laopinioncoruna.es",197],["laopiniondemalaga.es",197],["laopiniondemurcia.es",197],["laopiniondezamora.es",197],["laprovincia.es",197],["levante-emv.com",197],["mallorcazeitung.es",197],["regio7.cat",197],["superdeporte.es",197],["playpaste.com",198],["player.rtl2.de",199],["freetutorialsus.com",200],["vidlii.com",[200,216]],["iammagnus.com",200],["dailyvideoreports.net",200],["unityassets4free.com",200],["cnbc.com",201],["puzzles.msn.com",202],["metro.us",202],["newsobserver.com",202],["arkadiumhosted.com",202],["firefaucet.win",204],["55k.io",205],["filelions.online",205],["stmruby.com",205],["direct-link.net",206],["direkt-wissen.com",206],["link-to.net",206],["fullhdxxx.com",208],["pornclassic.tube",209],["tubepornclassic.com",209],["etonline.com",210],["creatur.io",210],["drphil.com",210],["urbanmilwaukee.com",210],["ontiva.com",210],["hideandseek.world",210],["myabandonware.com",210],["kendam.com",210],["wttw.com",210],["synonyms.com",210],["definitions.net",210],["hostmath.com",210],["camvideoshub.com",210],["minhaconexao.com.br",210],["home-made-videos.com",212],["pxrnxx.xyz",212],["amateur-couples.com",212],["slutdump.com",212],["produsat.com",214],["12thman.com",216],["acusports.com",216],["atlantic10.com",216],["auburntigers.com",216],["baylorbears.com",216],["bceagles.com",216],["bgsufalcons.com",216],["big12sports.com",216],["bigten.org",216],["bradleybraves.com",216],["butlersports.com",216],["cmumavericks.com",216],["conferenceusa.com",216],["cyclones.com",216],["dartmouthsports.com",216],["daytonflyers.com",216],["dbupatriots.com",216],["dbusports.com",216],["denverpioneers.com",216],["fduknights.com",216],["fgcuathletics.com",216],["fightinghawks.com",216],["fightingillini.com",216],["floridagators.com",216],["friars.com",216],["friscofighters.com",216],["gamecocksonline.com",216],["goarmywestpoint.com",216],["gobison.com",216],["goblueraiders.com",216],["gobobcats.com",216],["gocards.com",216],["gocreighton.com",216],["godeacs.com",216],["goexplorers.com",216],["goetbutigers.com",216],["gofrogs.com",216],["gogriffs.com",216],["gogriz.com",216],["golobos.com",216],["gomarquette.com",216],["gopack.com",216],["gophersports.com",216],["goprincetontigers.com",216],["gopsusports.com",216],["goracers.com",216],["goshockers.com",216],["goterriers.com",216],["gotigersgo.com",216],["gousfbulls.com",216],["govandals.com",216],["gowyo.com",216],["goxavier.com",216],["gozags.com",216],["gozips.com",216],["griffinathletics.com",216],["guhoyas.com",216],["gwusports.com",216],["hailstate.com",216],["hamptonpirates.com",216],["hawaiiathletics.com",216],["hokiesports.com",216],["huskers.com",216],["icgaels.com",216],["iuhoosiers.com",216],["jsugamecocksports.com",216],["longbeachstate.com",216],["loyolaramblers.com",216],["lrtrojans.com",216],["lsusports.net",216],["morrisvillemustangs.com",216],["msuspartans.com",216],["muleriderathletics.com",216],["mutigers.com",216],["navysports.com",216],["nevadawolfpack.com",216],["niuhuskies.com",216],["nkunorse.com",216],["nuhuskies.com",216],["nusports.com",216],["okstate.com",216],["olemisssports.com",216],["omavs.com",216],["ovcsports.com",216],["owlsports.com",216],["purduesports.com",216],["redstormsports.com",216],["richmondspiders.com",216],["sfajacks.com",216],["shupirates.com",216],["siusalukis.com",216],["smcgaels.com",216],["smumustangs.com",216],["soconsports.com",216],["soonersports.com",216],["themw.com",216],["tulsahurricane.com",216],["txst.com",216],["txstatebobcats.com",216],["ubbulls.com",216],["ucfknights.com",216],["ucirvinesports.com",216],["uconnhuskies.com",216],["uhcougars.com",216],["uicflames.com",216],["umterps.com",216],["uncwsports.com",216],["unipanthers.com",216],["unlvrebels.com",216],["uoflsports.com",216],["usdtoreros.com",216],["utahstateaggies.com",216],["utepathletics.com",216],["utrockets.com",216],["uvmathletics.com",216],["uwbadgers.com",216],["villanova.com",216],["wkusports.com",216],["wmubroncos.com",216],["woffordterriers.com",216],["1pack1goal.com",216],["bcuathletics.com",216],["bubraves.com",216],["goblackbears.com",216],["golightsgo.com",216],["gomcpanthers.com",216],["goutsa.com",216],["mercerbears.com",216],["pirateblue.com",216],["pirateblue.net",216],["pirateblue.org",216],["quinnipiacbobcats.com",216],["towsontigers.com",216],["tribeathletics.com",216],["tribeclub.com",216],["utepminermaniacs.com",216],["utepminers.com",216],["wkutickets.com",216],["aopathletics.org",216],["atlantichockeyonline.com",216],["bigsouthnetwork.com",216],["bigsouthsports.com",216],["chawomenshockey.com",216],["dbupatriots.org",216],["drakerelays.org",216],["ecac.org",216],["ecacsports.com",216],["emueagles.com",216],["emugameday.com",216],["gculopes.com",216],["godrakebulldog.com",216],["godrakebulldogs.com",216],["godrakebulldogs.net",216],["goeags.com",216],["goislander.com",216],["goislanders.com",216],["gojacks.com",216],["gomacsports.com",216],["gseagles.com",216],["hubison.com",216],["iowaconference.com",216],["ksuowls.com",216],["lonestarconference.org",216],["mascac.org",216],["midwestconference.org",216],["mountaineast.org",216],["niu-pack.com",216],["nulakers.ca",216],["oswegolakers.com",216],["ovcdigitalnetwork.com",216],["pacersports.com",216],["rmacsports.org",216],["rollrivers.com",216],["samfordsports.com",216],["uncpbraves.com",216],["usfdons.com",216],["wiacsports.com",216],["alaskananooks.com",216],["broncathleticfund.com",216],["cameronaggies.com",216],["columbiacougars.com",216],["etownbluejays.com",216],["gobadgers.ca",216],["golancers.ca",216],["gometrostate.com",216],["gothunderbirds.ca",216],["kentstatesports.com",216],["lehighsports.com",216],["lopers.com",216],["lycoathletics.com",216],["lycomingathletics.com",216],["maraudersports.com",216],["mauiinvitational.com",216],["msumavericks.com",216],["nauathletics.com",216],["nueagles.com",216],["nwusports.com",216],["oceanbreezenyc.org",216],["patriotathleticfund.com",216],["pittband.com",216],["principiaathletics.com",216],["roadrunnersathletics.com",216],["sidearmsocial.com",216],["snhupenmen.com",216],["stablerarena.com",216],["stoutbluedevils.com",216],["uwlathletics.com",216],["yumacs.com",216],["collegefootballplayoff.com",216],["csurams.com",216],["cubuffs.com",216],["gobearcats.com",216],["gohuskies.com",216],["mgoblue.com",216],["osubeavers.com",216],["pittsburghpanthers.com",216],["rolltide.com",216],["texassports.com",216],["thesundevils.com",216],["uclabruins.com",216],["wvuathletics.com",216],["wvusports.com",216],["arizonawildcats.com",216],["calbears.com",216],["cuse.com",216],["georgiadogs.com",216],["goducks.com",216],["goheels.com",216],["gostanford.com",216],["insidekstatesports.com",216],["insidekstatesports.info",216],["insidekstatesports.net",216],["insidekstatesports.org",216],["k-stateathletics.com",216],["k-statefootball.net",216],["k-statefootball.org",216],["k-statesports.com",216],["k-statesports.net",216],["k-statesports.org",216],["k-statewomenshoops.com",216],["k-statewomenshoops.net",216],["k-statewomenshoops.org",216],["kstateathletics.com",216],["kstatefootball.net",216],["kstatefootball.org",216],["kstatesports.com",216],["kstatewomenshoops.com",216],["kstatewomenshoops.net",216],["kstatewomenshoops.org",216],["ksuathletics.com",216],["ksusports.com",216],["scarletknights.com",216],["showdownforrelief.com",216],["syracusecrunch.com",216],["texastech.com",216],["theacc.com",216],["ukathletics.com",216],["usctrojans.com",216],["utahutes.com",216],["utsports.com",216],["wsucougars.com",216],["mangadods.com",216],["tricksplit.io",216],["fangraphs.com",217],["4players.de",[218,297]],["buffed.de",218],["gamesaktuell.de",218],["gamezone.de",218],["pcgames.de",218],["videogameszone.de",218],["planetaminecraft.com",219],["cravesandflames.com",220],["codesnse.com",220],["flyad.vip",220],["lapresse.ca",221],["kolyoom.com",222],["ilovephd.com",222],["upstream.to",223],["negumo.com",224],["games.wkb.jp",[225,226]],["channelmyanmar.org",[227,228]],["u-s-news.com",228],["fandom.com",[229,522,523]],["kenshi.fandom.com",230],["hausbau-forum.de",231],["fake-it.ws",232],["laksa19.github.io",233],["1shortlink.com",234],["nesia.my.id",235],["makemoneywithurl.com",236],["junkyponk.com",236],["healthfirstweb.com",236],["vocalley.com",236],["yogablogfit.com",236],["en.financerites.com",236],["resetoff.pl",237],["sexodi.com",237],["cdn77.org",238],["howtofixwindows.com",239],["3sexporn.com",240],["momxxxsex.com",240],["myfreevintageporn.com",240],["penisbuyutucum.net",240],["lightnovelworld.com",241],["ujszo.com",242],["newsmax.com",243],["bobs-tube.com",244],["nadidetarifler.com",245],["siz.tv",245],["suzylu.co.uk",[246,247]],["onworks.net",248],["yabiladi.com",248],["downloadsoft.net",249],["imgair.net",250],["imgblaze.net",250],["imgfrost.net",250],["pixsera.net",250],["vestimage.site",250],["imgwia.buzz",250],["testlanguages.com",251],["newsinlevels.com",251],["videosinlevels.com",251],["luckydice.net",252],["adarima.org",252],["tieutietkiem.com",252],["weatherwx.com",252],["sattaguess.com",252],["winshell.de",252],["rosasidan.ws",252],["modmakers.xyz",252],["gamepure.in",252],["warrenrahul.in",252],["austiblox.net",252],["upiapi.in",252],["myownguess.in",252],["networkhint.com",252],["watchhentai.net",252],["thichcode.net",252],["texturecan.com",252],["tikmate.app",[252,476]],["4funbox.com",253],["nephobox.com",253],["1024tera.com",253],["btcbitco.in",[254,255]],["btcsatoshi.net",254],["cempakajaya.com",254],["crypto4yu.com",254],["readbitcoin.org",254],["wiour.com",254],["aiimgvlog.fun",[254,260]],["exactpay.online",254],["kiddyearner.com",254],["rsadnetworkinfo.com",255],["rsinsuranceinfo.com",255],["rsfinanceinfo.com",255],["rsgamer.app",255],["rssoftwareinfo.com",255],["rshostinginfo.com",255],["rseducationinfo.com",255],["blog.cryptowidgets.net",255],["blog.insurancegold.in",255],["blog.wiki-topia.com",255],["carsmania.net",255],["carstopia.net",255],["coinsvalue.net",255],["cookinguide.net",255],["freeoseocheck.com",255],["makeupguide.net",255],["homeairquality.org",257],["faucettronn.click",257],["ticketmaster.sg",257],["aduzz.com",258],["bitcrypto.info",258],["bildirim.link",259],["appsbull.com",261],["diudemy.com",261],["maqal360.com",261],["antonimos.de",262],["quesignifi.ca",262],["arcai.com",263],["my-code4you.blogspot.com",264],["vlxxs.net",265],["rapelust.com",265],["vtube.to",265],["vtplay.net",265],["desitelugusex.com",265],["xvideos-downloader.net",265],["xxxvideotube.net",265],["sdefx.cloud",265],["nozomi.la",265],["moviesonlinefree.net",265],["flickr.com",266],["firefile.cc",267],["pestleanalysis.com",267],["kochamjp.pl",267],["tutorialforlinux.com",267],["whatsaero.com",267],["animeblkom.net",[267,283]],["blkom.com",267],["globes.co.il",[268,269]],["jardiner-malin.fr",270],["tw-calc.net",271],["ohmybrush.com",272],["talkceltic.net",273],["mentalfloss.com",274],["uprafa.com",275],["cube365.net",276],["nightfallnews.com",[277,278]],["wwwfotografgotlin.blogspot.com",279],["freelistenonline.com",279],["badassdownloader.com",280],["quickporn.net",281],["yellowbridge.com",282],["aosmark.com",284],["atozmath.com",[286,287,288,289,290,291,292]],["newyorker.com",293],["brighteon.com",294],["more.tv",295],["video1tube.com",296],["alohatube.xyz",296],["link.cgtips.org",298],["hentaicloud.com",299],["netfapx.com",301],["paperzonevn.com",303],["hentaienglish.com",304],["hentaiporno.xxx",304],["venge.io",[305,306]],["btcbux.io",307],["its.porn",[308,309]],["atv.at",310],["2ndrun.tv",311],["rackusreads.com",311],["temp-phone-number.com",312],["jetpunk.com",314],["imgur.com",315],["hentai-party.com",316],["hentaicomics.pro",316],["xxx-comics.pro",316],["genshinimpactcalculator.com",319],["mysexgames.com",320],["embed.indavideo.hu",323],["coinurl.net",[324,325]],["gdr-online.com",326],["mmm.dk",327],["iqiyi.com",[328,329,469]],["m.iqiyi.com",330],["japopav.tv",331],["lvturbo.com",331],["nbcolympics.com",332],["apkhex.com",333],["indiansexstories2.net",334],["issstories.xyz",334],["1340kbbr.com",335],["gorgeradio.com",335],["kduk.com",335],["kedoam.com",335],["kejoam.com",335],["kelaam.com",335],["khsn1230.com",335],["kjmx.rocks",335],["kloo.com",335],["klooam.com",335],["klykradio.com",335],["kmed.com",335],["kmnt.com",335],["kool991.com",335],["kpnw.com",335],["kppk983.com",335],["krktcountry.com",335],["ktee.com",335],["kwro.com",335],["kxbxfm.com",335],["thevalley.fm",335],["dsocker1234.blogspot.com",336],["surfline.com",[337,357]],["blick.ch",338],["mgnet.xyz",339],["designtagebuch.de",340],["pixroute.com",341],["uploady.io",342],["calculator-online.net",343],["porngames.club",344],["sexgames.xxx",344],["111.90.159.132",345],["battleplan.news",345],["mobile-tracker-free.com",346],["pfps.gg",347],["ac-illust.com",[348,349]],["photo-ac.com",[348,349]],["social-unlock.com",350],["ninja.io",351],["sourceforge.net",352],["samfirms.com",353],["banned.video",354],["conspiracyfact.info",354],["freeworldnews.tv",354],["madmaxworld.tv",354],["huffpost.com",355],["ingles.com",356],["spanishdict.com",356],["play.tv3.ee",358],["trendyoum.com",359],["bulbagarden.net",360],["doomovie-hd.live",361],["madoohd.com",361],["moviestars.to",362],["hollywoodlife.com",363],["searchresults.cc",364],["mat6tube.com",365],["textstudio.co",366],["newtumbl.com",367],["nevcoins.club",369],["mail.com",370],["erome.com",373],["oggi.it",[374,375]],["manoramamax.com",374],["video.gazzetta.it",[374,375]],["mangakita.net",376],["poscishd.online",377],["avpgalaxy.net",378],["mhma12.tech",379],["panda-novel.com",380],["zebranovel.com",380],["lightsnovel.com",380],["eaglesnovel.com",380],["pandasnovel.com",380],["zadfaucet.com",381],["ewrc-results.com",382],["kizi.com",383],["cyberscoop.com",384],["fedscoop.com",384],["canale.live",385],["mafiatown.pl",[386,387]],["jeep-cj.com",388],["sponsorhunter.com",389],["cloudcomputingtopics.net",390],["likecs.com",391],["tiscali.it",392],["linkspy.cc",393],["tutelehd3.xyz",394],["dirty.pink",[395,396,397]],["adshnk.com",398],["chattanoogan.com",399],["adsy.pw",400],["playstore.pw",400],["socialmediagirls.com",401],["windowspro.de",402],["snapinsta.app",403],["tvtv.ca",404],["tvtv.us",404],["mydaddy.cc",405],["roadtrippin.fr",406],["redketchup.io",[407,408,409]],["anyporn.com",[410,425]],["bravoporn.com",410],["bravoteens.com",410],["crocotube.com",410],["hellmoms.com",410],["hellporno.com",410],["sex3.com",410],["tubewolf.com",410],["xbabe.com",410],["xcum.com",410],["zedporn.com",410],["imagetotext.info",411],["infokik.com",412],["freepik.com",413],["ddwloclawek.pl",[414,415]],["deezer.com",416],["my-subs.co",417],["plaion.com",418],["rapid-cloud.co",419],["slideshare.net",[420,421]],["ustreasuryyieldcurve.com",422],["businesssoftwarehere.com",423],["goo.st",423],["freevpshere.com",423],["softwaresolutionshere.com",423],["easymc.io",426],["staige.tv",427],["androidadult.com",428],["streamvid.net",429],["watchtv24.com",430],["cellmapper.net",431],["medscape.com",432],["newscon.org",[433,434]],["arkadium.com",435],["app.blubank.com",436],["lifesurance.info",437],["sportdeutschland.tv",438],["kcra.com",438],["wcvb.com",438],["ccthesims.com",440],["chromeready.com",440],["coursedrive.org",440],["dtbps3games.com",440],["illustratemagazine.com",440],["uknip.co.uk",440],["vod.pl",441],["megadrive-emulator.com",442],["animesaga.in",445],["moviesapi.club",445],["bestx.stream",445],["watchx.top",445],["digimanie.cz",446],["svethardware.cz",446],["srvy.ninja",447],["drawer-opportunity-i-243.site",448],["tchatche.com",449],["ozulmanga.com",450],["edmdls.com",451],["freshremix.net",451],["scenedl.org",451],["trakt.tv",[452,453,454]],["shroomers.app",455],["di.fm",[456,457,458]],["pc-builds.com",459],["qtoptens.com",459],["reuters.com",459],["today.com",459],["videogamer.com",459],["wrestlinginc.com",459],["techedubyte.com",460],["movie-th.tv",461],["iwanttfc.com",462],["nutraingredients-asia.com",463],["nutraingredients-latam.com",463],["nutraingredients-usa.com",463],["nutraingredients.com",463],["livesportsclub.me",464],["rogstream.fun",464],["ozulscansen.com",465],["fitnessbr.click",466],["minhareceita.xyz",466],["doomied.monster",467],["lookmovie2.to",467],["royalroad.com",468],["biletomat.pl",470],["hextank.io",[472,473]],["gofilmizle.com",[474,475]],["sagewater.com",477],["redlion.net",477],["satdl.com",478],["vidstreaming.xyz",479],["myradioonline.pl",480],["teamskeet.com",481],["tacobell.com",483],["webtoons.com",[484,485]],["zefoy.com",486],["natgeotv.com",488],["br.de",489],["pasteboard.co",490],["clickhole.com",491],["deadspin.com",491],["gizmodo.com",491],["jalopnik.com",491],["jezebel.com",491],["kotaku.com",491],["lifehacker.com",491],["splinternews.com",491],["theinventory.com",491],["theonion.com",491],["theroot.com",491],["thetakeout.com",491],["pewresearch.org",491],["los40.com",[492,493]],["as.com",493],["telegraph.co.uk",[494,495]],["poweredbycovermore.com",[494,541]],["lumens.com",[494,541]],["verizon.com",496],["humanbenchmark.com",497],["politico.com",498],["officedepot.co.cr",[499,500,501,502]],["usnews.com",503],["factable.com",505],["zee5.com",506],["gala.fr",507],["geo.fr",507],["voici.fr",507],["gloucestershirelive.co.uk",508],["arsiv.mackolik.com",509],["jacksonguitars.com",510],["scandichotels.com",511],["stylist.co.uk",512],["nettiauto.com",513],["thaiairways.com",[514,515]],["cerbahealthcare.it",[516,517]],["futura-sciences.com",[516,532]],["tiendaenlinea.claro.com.ni",[518,519]],["tieba.baidu.com",520],["linktr.ee",521],["grasshopper.com",[524,525]],["epson.com.cn",[526,527]],["oe24.at",[528,529]],["szbz.de",528],["platform.autods.com",[530,531]],["wikihow.com",533],["citibank.com.sg",534],["uol.com.br",[535,536,537]],["gazzetta.gr",538],["digicol.dpm.org.cn",[539,540]],["virginmediatelevision.ie",542],["larazon.es",[543,544]],["waitrosecellar.com",[545,546,547]],["kicker.de",548],["sharpen-free-design-generator.netlify.app",[549,550]],["help.cashctrl.com",[551,552]],["commande.rhinov.pro",[553,554]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",[26,27]],["younetu",26],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["shrink",28],["clk",28],["tmearn",28],["megalink",28],["miniurl",28],["pcprogramasymas",28],["link1s",28],["shrinke",28],["shrinkme",28],["shortzzy",28],["shorttey",[28,210]],["lite-link",28],["pureshort",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,40,91,92,93]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,196]],["xtits",[56,126]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["kickassanime",94],["subtorrents",97],["subtorrents1",97],["newpelis",97],["pelix",97],["allcalidad",97],["infomaniakos",97],["filecrypt",101],["tornadomovies",106],["sexwebvideo",107],["mangovideo",107],["icdrama",113],["mangasail",113],["file4go",115],["asianclub",129],["anitube",135],["mixdrop",137],["azsoft",149],["uploadev",164],["ver-pelis-online",175],["ancient-origins",183],["spankbang",203],["lookcam",210],["lootlinks",210],["dpstream",213],["bluemediafiles",215],["docer",237],["pixlev",250],["terabox",253],["skymovieshd",265],["dvdplay",265],["ctrlv",285],["crackstreams",302],["123movieshd",313],["uproxy",317],["animesa",318],["cinecalidad",[321,322]],["apkmaven",368],["gmx",371],["gamereactor",424],["tvhay",[443,444]],["lookmovie",467],["lk21official",471],["www.google",482],["dropgalaxy",555]]);

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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
