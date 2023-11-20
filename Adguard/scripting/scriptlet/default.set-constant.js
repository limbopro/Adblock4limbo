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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["detectAdBlock","noopFunc"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["checkdom","0"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["Global.adv","undefined"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["isAdblockActive","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["document.hasFocus","trueFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["makeMoney","true"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["isRequestPresent","true"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["Object.prototype.isAllAdClose","true"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["protection","noopFunc"],["Yii2App.playbackTimeout","0"],["private","false"],["Notification","undefined"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["window.cpexCMPVersion","2"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT","{}"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["cpexAddCMPCloseButton","noopFunc"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,309]],["gadgets.es",[11,309]],["amateurporn.co",[11,108]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,409]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,111]],["familyporn.tv",17],["cloudemb.com",[17,329]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,93]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["denisegrowthwide.com",21],["nectareousoverelate.com",21],["apinchcaseation.com",21],["timberwoodanotia.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["netu.ac",26],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,132]],["stfly.me",28],["oncehelp.com",28],["bit-url.com",28],["rgl.vn",28],["reqlinks.net",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["7r6.com",28],["oko.sh",28],["shortpaid.com",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["srek.net",28],["skincarie.com",28],["exeo.app",28],["birdurls.com",28],["coinlyhub.com",[28,218]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,227]],["owllink.net",28],["cutdl.xyz",28],["gplinks.co",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["iir.ai",28],["shorteet.com",[28,247]],["sekilastekno.com",28],["promo-visits.site",28],["satoshi-win.xyz",[28,256]],["shorterall.com",28],["smoner.com",28],["linkshrnk.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["cashurl.in",28],["4cash.me",28],["namaidani.com",28],["bitfly.io",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["fxlap.com",28],["earnfasts.com",28],["tawiia.com",28],["droplink.co",28],["recipestutorials.com",28],["2shrt.com",28],["apkshrt.com",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["clickscoin.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["jameeltips.us",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["shortlink.prz.pw",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["ez4short.com",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["enagato.com",28],["automotur.club",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,154]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["try2link.com",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,227]],["snowurl.com",[28,227]],["upshrink.com",28],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["linkshortify.site",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["cutx.me",28],["btcwalk.com",28],["cryptoon.xyz",28],["easysky.in",28],["veganab.co",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["pandaznetwork.com",28],["atglinks.com",28],["du-link.in",28],["linksfy.co",28],["news.speedynews.xyz",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["enit.in",[28,243]],["oii.io",28],["novelssites.com",28],["links.medipost.org",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["adrinolinks.in",28],["link4rev.site",28],["bloginguru.xyz",28],["tii.la",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",28],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["gainl.ink",28],["windowslite.net",[28,227]],["coinsl.click",28],["exalink.fun",28],["short2url.xyz",28],["exego.app",28],["panyshort.link",28],["viewfr.com",28],["easycut.io",28],["cpm.icu",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["watchmygf.me",[29,54]],["fpo.xxx",[29,56]],["sexemix.com",29],["heavyfetish.com",[29,486]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,213]],["yourporngod.com",[40,41]],["javbangers.com",[40,298]],["camfox.com",40],["camthots.tv",[40,126]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,128]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,108,126,128]],["bravoerotica.net",[56,128]],["youx.xxx",56],["camclips.tv",[56,213]],["camflow.tv",[56,108,128,177,251]],["camhoes.tv",[56,108,126,128,177,251]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,128]],["analdin.com",[56,128]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,438]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["audioz.cc",75],["audioz.es",75],["luckydice.net",75],["adarima.org",75],["tieutietkiem.com",75],["weatherwx.com",75],["sattaguess.com",75],["winshell.de",75],["rosasidan.ws",75],["modmakers.xyz",75],["gamepure.in",75],["warrenrahul.in",75],["austiblox.net",75],["upiapi.in",75],["wikitraveltips.com",[75,153]],["amritadrino.com",[75,153]],["myownguess.in",75],["watchhentai.net",75],["thichcode.net",75],["texturecan.com",75],["vikistream.com",76],["eplayer.click",[76,77]],["mega4upload.com",[77,83]],["ennovelas.com",[77,83]],["n-tv.de",78],["brigitte.de",79],["stern.de",79],["foxsports.com.au",80],["canberratimes.com.au",80],["thesimsresource.com",81],["bdnewszh.com",83],["streamservicehd.click",83],["timeforbitco.in",84],["worldofbitco.in",[84,96]],["weatherx.co.in",[84,96]],["getyourbitco.in",84],["sunbtc.space",84],["ctrl.blog",85],["sportlife.es",86],["tubitv.com",86],["finofilipino.org",87],["acortarm.xyz",88],["acortame.xyz",88],["speedtest.net",89],["mysflink.blogspot.com",90],["assia.tv",91],["assia4.com",91],["assia24.com",91],["cwtvembeds.com",[93,127]],["camlovers.tv",93],["porntn.com",93],["pornissimo.org",93],["sexcams-24.com",[93,108]],["watchporn.to",[93,108]],["camwhorez.video",93],["footstockings.com",[94,108]],["sbs.com.au",97],["4players.de",[97,225]],["ojogos.com.br",99],["powforums.com",100],["supforums.com",100],["studybullet.com",100],["usgamer.net",101],["recordonline.com",101],["123tvseries.co",103],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["temp-mails.com",105],["freiepresse.de",106],["investing.com",107],["camhub.cc",108],["love4porn.com",108],["thotvids.com",108],["watchmdh.to",108],["celebwhore.com",108],["cluset.com",108],["4kporn.xxx",108],["xhomealone.com",108],["lusttaboo.com",[108,370]],["hentai-moon.com",108],["mp3fiber.com",109],["suedkurier.de",110],["anysex.com",112],["gomiblog.com",113],["iptvtools.net",113],["vlist.se",114],["pornve.com",115],["coolrom.com.au",116],["bitcotasks.com",116],["pornohirsch.net",117],["marie-claire.es",118],["gamezhero.com",118],["flashgirlgames.com",118],["onlinesudoku.games",118],["mpg.football",118],["sssam.com",118],["globalnews.ca",119],["drinksmixer.com",120],["leitesculinaria.com",120],["fupa.net",121],["ge-map-overlays.appspot.com",122],["browardpalmbeach.com",123],["dallasobserver.com",123],["houstonpress.com",123],["miaminewtimes.com",123],["phoenixnewtimes.com",123],["westword.com",123],["nhentai.net",124],["fox.com.tr",125],["caminspector.net",126],["camwhoreshd.com",126],["camgoddess.tv",126],["gay4porn.com",128],["mypornhere.com",128],["mediapason.it",129],["linkspaid.com",129],["tuotromedico.com",129],["neoteo.com",129],["phoneswiki.com",129],["celebmix.com",129],["myneobuxportal.com",129],["oyungibi.com",129],["25yearslatersite.com",129],["jeshoots.com",130],["techhx.com",130],["karanapk.com",130],["videogreen.xyz",131],["sypl.xyz",131],["playembed.xyz",131],["javhdporn.net",131],["redanimedatabase.cloud",131],["javstream.top",131],["flashplayer.fullstacks.net",133],["cloudapps.herokuapp.com",133],["youfiles.herokuapp.com",133],["temp-mail.org",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hpav.tv",139],["hpjav.tv",139],["hqtv.biz",141],["liveuamap.com",142],["filmiseriali.com",142],["muvibg.com",142],["linksht.com",[143,144]],["audycje.tokfm.pl",145],["hulu.com",[146,147,148]],["shush.se",149],["aniwatcher.com",150],["emurom.net",151],["allkpop.com",152],["azmath.info",153],["downfile.site",153],["downphanmem.com",153],["expertvn.com",153],["memangbau.com",153],["scratch247.info",153],["trangchu.news",153],["adfoc.us",153],["techacode.com",153],["sahlmarketing.net",153],["sptfy.be",153],["aditechz.com",153],["wwneed.com",153],["streamcheck.link",153],["mcafee-com.com",[153,402]],["pickcrackpasswords.blogspot.com",155],["kfrfansub.com",156],["thuglink.com",156],["voipreview.org",156],["audiotag.info",157],["hanime.tv",158],["pogo.com",159],["cloudvideo.tv",160],["legionjuegos.org",161],["legionpeliculas.org",161],["legionprogramas.org",161],["16honeys.com",162],["elespanol.com",163],["remodelista.com",164],["coolmathgames.com",[165,166,167,503]],["audiofanzine.com",168],["noweconomy.live",170],["howifx.com",170],["vavada5com.com",170],["hitokin.net",171],["elil.cc",172],["developerinsider.co",173],["ilprimatonazionale.it",174],["hotabis.com",174],["root-nation.com",174],["italpress.com",174],["airsoftmilsimnews.com",174],["artribune.com",174],["thehindu.com",175],["cambro.tv",[176,177]],["nibelungen-kurier.de",178],["noz.de",179],["earthgarage.com",181],["pianetamountainbike.it",182],["barchart.com",183],["modelisme.com",184],["parasportontario.ca",184],["prescottenews.com",184],["nrj-play.fr",185],["oeffentlicher-dienst.info",186],["hackingwithreact.com",187],["gutekueche.at",188],["eplfootballmatch.com",189],["peekvids.com",190],["playvids.com",190],["pornflip.com",190],["redensarten-index.de",191],["vw-page.com",192],["viz.com",[193,194]],["queenfaucet.website",195],["0rechner.de",196],["configspc.com",197],["xopenload.me",197],["uptobox.com",197],["uptostream.com",197],["onepiece-tube.com",198],["japgay.com",199],["mega-debrid.eu",200],["dreamdth.com",201],["pijanitvor.com",201],["diaridegirona.cat",203],["diariodeibiza.es",203],["diariodemallorca.es",203],["diarioinformacion.com",203],["eldia.es",203],["emporda.info",203],["farodevigo.es",203],["laopinioncoruna.es",203],["laopiniondemalaga.es",203],["laopiniondemurcia.es",203],["laopiniondezamora.es",203],["laprovincia.es",203],["levante-emv.com",203],["mallorcazeitung.es",203],["regio7.cat",203],["superdeporte.es",203],["playpaste.com",204],["player.rtl2.de",205],["freetutorialsus.com",206],["vidlii.com",[206,223]],["iammagnus.com",206],["dailyvideoreports.net",206],["unityassets4free.com",206],["cnbc.com",207],["puzzles.msn.com",208],["metro.us",208],["newsobserver.com",208],["arkadiumhosted.com",208],["spankbang.com",209],["firefaucet.win",210],["55k.io",211],["filelions.online",211],["direct-link.net",212],["direkt-wissen.com",212],["link-to.net",212],["fullhdxxx.com",214],["pornclassic.tube",215],["tubepornclassic.com",215],["getintopc.com",216],["unique-tutorials.info",216],["etonline.com",217],["creatur.io",217],["drphil.com",217],["urbanmilwaukee.com",217],["ontiva.com",217],["hideandseek.world",217],["myabandonware.com",217],["mangaalarab.com",217],["kendam.com",217],["wttw.com",217],["synonyms.com",217],["definitions.net",217],["hostmath.com",217],["camvideoshub.com",217],["minhaconexao.com.br",217],["bravedown.com",217],["home-made-videos.com",219],["pxrnxx.xyz",219],["amateur-couples.com",219],["slutdump.com",219],["produsat.com",221],["12thman.com",223],["acusports.com",223],["atlantic10.com",223],["auburntigers.com",223],["baylorbears.com",223],["bceagles.com",223],["bgsufalcons.com",223],["big12sports.com",223],["bigten.org",223],["bradleybraves.com",223],["butlersports.com",223],["cmumavericks.com",223],["conferenceusa.com",223],["cyclones.com",223],["dartmouthsports.com",223],["daytonflyers.com",223],["dbupatriots.com",223],["dbusports.com",223],["denverpioneers.com",223],["fduknights.com",223],["fgcuathletics.com",223],["fightinghawks.com",223],["fightingillini.com",223],["floridagators.com",223],["friars.com",223],["friscofighters.com",223],["gamecocksonline.com",223],["goarmywestpoint.com",223],["gobison.com",223],["goblueraiders.com",223],["gobobcats.com",223],["gocards.com",223],["gocreighton.com",223],["godeacs.com",223],["goexplorers.com",223],["goetbutigers.com",223],["gofrogs.com",223],["gogriffs.com",223],["gogriz.com",223],["golobos.com",223],["gomarquette.com",223],["gopack.com",223],["gophersports.com",223],["goprincetontigers.com",223],["gopsusports.com",223],["goracers.com",223],["goshockers.com",223],["goterriers.com",223],["gotigersgo.com",223],["gousfbulls.com",223],["govandals.com",223],["gowyo.com",223],["goxavier.com",223],["gozags.com",223],["gozips.com",223],["griffinathletics.com",223],["guhoyas.com",223],["gwusports.com",223],["hailstate.com",223],["hamptonpirates.com",223],["hawaiiathletics.com",223],["hokiesports.com",223],["huskers.com",223],["icgaels.com",223],["iuhoosiers.com",223],["jsugamecocksports.com",223],["longbeachstate.com",223],["loyolaramblers.com",223],["lrtrojans.com",223],["lsusports.net",223],["morrisvillemustangs.com",223],["msuspartans.com",223],["muleriderathletics.com",223],["mutigers.com",223],["navysports.com",223],["nevadawolfpack.com",223],["niuhuskies.com",223],["nkunorse.com",223],["nuhuskies.com",223],["nusports.com",223],["okstate.com",223],["olemisssports.com",223],["omavs.com",223],["ovcsports.com",223],["owlsports.com",223],["purduesports.com",223],["redstormsports.com",223],["richmondspiders.com",223],["sfajacks.com",223],["shupirates.com",223],["siusalukis.com",223],["smcgaels.com",223],["smumustangs.com",223],["soconsports.com",223],["soonersports.com",223],["themw.com",223],["tulsahurricane.com",223],["txst.com",223],["txstatebobcats.com",223],["ubbulls.com",223],["ucfknights.com",223],["ucirvinesports.com",223],["uconnhuskies.com",223],["uhcougars.com",223],["uicflames.com",223],["umterps.com",223],["uncwsports.com",223],["unipanthers.com",223],["unlvrebels.com",223],["uoflsports.com",223],["usdtoreros.com",223],["utahstateaggies.com",223],["utepathletics.com",223],["utrockets.com",223],["uvmathletics.com",223],["uwbadgers.com",223],["villanova.com",223],["wkusports.com",223],["wmubroncos.com",223],["woffordterriers.com",223],["1pack1goal.com",223],["bcuathletics.com",223],["bubraves.com",223],["goblackbears.com",223],["golightsgo.com",223],["gomcpanthers.com",223],["goutsa.com",223],["mercerbears.com",223],["pirateblue.com",223],["pirateblue.net",223],["pirateblue.org",223],["quinnipiacbobcats.com",223],["towsontigers.com",223],["tribeathletics.com",223],["tribeclub.com",223],["utepminermaniacs.com",223],["utepminers.com",223],["wkutickets.com",223],["aopathletics.org",223],["atlantichockeyonline.com",223],["bigsouthnetwork.com",223],["bigsouthsports.com",223],["chawomenshockey.com",223],["dbupatriots.org",223],["drakerelays.org",223],["ecac.org",223],["ecacsports.com",223],["emueagles.com",223],["emugameday.com",223],["gculopes.com",223],["godrakebulldog.com",223],["godrakebulldogs.com",223],["godrakebulldogs.net",223],["goeags.com",223],["goislander.com",223],["goislanders.com",223],["gojacks.com",223],["gomacsports.com",223],["gseagles.com",223],["hubison.com",223],["iowaconference.com",223],["ksuowls.com",223],["lonestarconference.org",223],["mascac.org",223],["midwestconference.org",223],["mountaineast.org",223],["niu-pack.com",223],["nulakers.ca",223],["oswegolakers.com",223],["ovcdigitalnetwork.com",223],["pacersports.com",223],["rmacsports.org",223],["rollrivers.com",223],["samfordsports.com",223],["uncpbraves.com",223],["usfdons.com",223],["wiacsports.com",223],["alaskananooks.com",223],["broncathleticfund.com",223],["cameronaggies.com",223],["columbiacougars.com",223],["etownbluejays.com",223],["gobadgers.ca",223],["golancers.ca",223],["gometrostate.com",223],["gothunderbirds.ca",223],["kentstatesports.com",223],["lehighsports.com",223],["lopers.com",223],["lycoathletics.com",223],["lycomingathletics.com",223],["maraudersports.com",223],["mauiinvitational.com",223],["msumavericks.com",223],["nauathletics.com",223],["nueagles.com",223],["nwusports.com",223],["oceanbreezenyc.org",223],["patriotathleticfund.com",223],["pittband.com",223],["principiaathletics.com",223],["roadrunnersathletics.com",223],["sidearmsocial.com",223],["snhupenmen.com",223],["stablerarena.com",223],["stoutbluedevils.com",223],["uwlathletics.com",223],["yumacs.com",223],["collegefootballplayoff.com",223],["csurams.com",223],["cubuffs.com",223],["gobearcats.com",223],["gohuskies.com",223],["mgoblue.com",223],["osubeavers.com",223],["pittsburghpanthers.com",223],["rolltide.com",223],["texassports.com",223],["thesundevils.com",223],["uclabruins.com",223],["wvuathletics.com",223],["wvusports.com",223],["arizonawildcats.com",223],["calbears.com",223],["cuse.com",223],["georgiadogs.com",223],["goducks.com",223],["goheels.com",223],["gostanford.com",223],["insidekstatesports.com",223],["insidekstatesports.info",223],["insidekstatesports.net",223],["insidekstatesports.org",223],["k-stateathletics.com",223],["k-statefootball.net",223],["k-statefootball.org",223],["k-statesports.com",223],["k-statesports.net",223],["k-statesports.org",223],["k-statewomenshoops.com",223],["k-statewomenshoops.net",223],["k-statewomenshoops.org",223],["kstateathletics.com",223],["kstatefootball.net",223],["kstatefootball.org",223],["kstatesports.com",223],["kstatewomenshoops.com",223],["kstatewomenshoops.net",223],["kstatewomenshoops.org",223],["ksuathletics.com",223],["ksusports.com",223],["scarletknights.com",223],["showdownforrelief.com",223],["syracusecrunch.com",223],["texastech.com",223],["theacc.com",223],["ukathletics.com",223],["usctrojans.com",223],["utahutes.com",223],["utsports.com",223],["wsucougars.com",223],["mangadods.com",223],["tricksplit.io",223],["litecoinads.com",223],["fangraphs.com",224],["buffed.de",225],["gamesaktuell.de",225],["gamezone.de",225],["pcgames.de",225],["videogameszone.de",225],["planetaminecraft.com",226],["flyad.vip",227],["lapresse.ca",228],["kolyoom.com",229],["ilovephd.com",229],["upstream.to",230],["negumo.com",231],["games.wkb.jp",[232,233]],["channelmyanmar.org",[234,235]],["u-s-news.com",235],["fandom.com",[236,521,522]],["kenshi.fandom.com",237],["hausbau-forum.de",238],["fake-it.ws",239],["laksa19.github.io",240],["1shortlink.com",241],["nesia.my.id",242],["makemoneywithurl.com",243],["resetoff.pl",244],["sexodi.com",244],["cdn77.org",245],["howtofixwindows.com",246],["3sexporn.com",247],["momxxxsex.com",247],["myfreevintageporn.com",247],["penisbuyutucum.net",247],["lightnovelworld.com",248],["ujszo.com",249],["newsmax.com",250],["bobs-tube.com",251],["nadidetarifler.com",252],["siz.tv",252],["suzylu.co.uk",[253,254]],["onworks.net",255],["yabiladi.com",255],["homeairquality.org",257],["faucettronn.click",257],["ticketmaster.sg",257],["downloadsoft.net",258],["imgair.net",259],["imgblaze.net",259],["imgfrost.net",259],["pixsera.net",259],["vestimage.site",259],["imgwia.buzz",259],["testlanguages.com",260],["newsinlevels.com",260],["videosinlevels.com",260],["arcai.com",261],["my-code4you.blogspot.com",262],["vlxxs.net",263],["rapelust.com",263],["vtube.to",263],["vtplay.net",263],["desitelugusex.com",263],["xvideos-downloader.net",263],["xxxvideotube.net",263],["sdefx.cloud",263],["nozomi.la",263],["moviesonlinefree.net",263],["flickr.com",264],["firefile.cc",266],["pestleanalysis.com",266],["kochamjp.pl",266],["tutorialforlinux.com",266],["whatsaero.com",266],["animeblkom.net",[266,282]],["blkom.com",266],["globes.co.il",[267,268]],["jardiner-malin.fr",269],["tw-calc.net",270],["ohmybrush.com",271],["talkceltic.net",272],["zdam.xyz",273],["mentalfloss.com",274],["uprafa.com",275],["cube365.net",276],["nightfallnews.com",[277,278]],["wwwfotografgotlin.blogspot.com",279],["freelistenonline.com",279],["badassdownloader.com",280],["quickporn.net",281],["aosmark.com",283],["theappstore.org",283],["atozmath.com",[285,286,287,288,289,290,291]],["newyorker.com",292],["brighteon.com",293],["more.tv",294],["video1tube.com",295],["alohatube.xyz",295],["link.cgtips.org",296],["hentaicloud.com",297],["netfapx.com",299],["paperzonevn.com",301],["hentaienglish.com",302],["hentaiporno.xxx",302],["venge.io",[303,304]],["btcbux.io",305],["its.porn",[306,307]],["atv.at",308],["2ndrun.tv",309],["rackusreads.com",309],["exerror.com",309],["temp-phone-number.com",310],["jetpunk.com",312],["imgur.com",313],["hentai-party.com",314],["hentaicomics.pro",314],["xxx-comics.pro",314],["genshinimpactcalculator.com",317],["mysexgames.com",318],["embed.indavideo.hu",321],["coinurl.net",[322,323]],["gdr-online.com",324],["mmm.dk",325],["iqiyi.com",[326,327,472]],["m.iqiyi.com",328],["japopav.tv",329],["lvturbo.com",329],["nbcolympics.com",330],["apkhex.com",331],["indiansexstories2.net",332],["issstories.xyz",332],["1340kbbr.com",333],["gorgeradio.com",333],["kduk.com",333],["kedoam.com",333],["kejoam.com",333],["kelaam.com",333],["khsn1230.com",333],["kjmx.rocks",333],["kloo.com",333],["klooam.com",333],["klykradio.com",333],["kmed.com",333],["kmnt.com",333],["kool991.com",333],["kpnw.com",333],["kppk983.com",333],["krktcountry.com",333],["ktee.com",333],["kwro.com",333],["kxbxfm.com",333],["thevalley.fm",333],["dsocker1234.blogspot.com",334],["surfline.com",[335,355]],["blick.ch",336],["mgnet.xyz",337],["designtagebuch.de",338],["pixroute.com",339],["uploady.io",340],["calculator-online.net",341],["porngames.club",342],["sexgames.xxx",342],["111.90.159.132",343],["battleplan.news",343],["mobile-tracker-free.com",344],["pfps.gg",345],["ac-illust.com",[346,347]],["photo-ac.com",[346,347]],["social-unlock.com",348],["ninja.io",349],["sourceforge.net",350],["samfirms.com",351],["banned.video",352],["conspiracyfact.info",352],["freeworldnews.tv",352],["madmaxworld.tv",352],["huffpost.com",353],["ingles.com",354],["spanishdict.com",354],["play.tv3.ee",356],["trendyoum.com",357],["bulbagarden.net",358],["doomovie-hd.com",359],["madoohd.com",359],["moviestars.to",360],["hollywoodlife.com",361],["searchresults.cc",362],["mat6tube.com",363],["textstudio.co",364],["newtumbl.com",365],["nevcoins.club",367],["mail.com",368],["erome.com",371],["oggi.it",[372,373]],["manoramamax.com",372],["video.gazzetta.it",[372,373]],["mangakita.net",374],["avpgalaxy.net",375],["mhma12.tech",376],["panda-novel.com",377],["zebranovel.com",377],["lightsnovel.com",377],["eaglesnovel.com",377],["pandasnovel.com",377],["zadfaucet.com",378],["ewrc-results.com",379],["kizi.com",380],["cyberscoop.com",381],["fedscoop.com",381],["canale.live",382],["mafiatown.pl",[383,384]],["jeep-cj.com",385],["sponsorhunter.com",386],["coinscap.info",387],["cryptowidgets.net",387],["greenenez.com",387],["insurancegold.in",387],["webfreetools.net",387],["wiki-topia.com",387],["blog.carsmania.net",387],["blog.carstopia.net",387],["blog.coinsvalue.net",387],["blog.cookinguide.net",387],["blog.freeoseocheck.com",387],["blog.makeupguide.net",387],["rapid-cloud.co",387],["cloudcomputingtopics.net",388],["likecs.com",389],["tiscali.it",390],["linkspy.cc",391],["tutelehd3.xyz",392],["dirty.pink",[393,394,395]],["adshnk.com",396],["chattanoogan.com",397],["adsy.pw",398],["playstore.pw",398],["socialmediagirls.com",399],["windowspro.de",400],["snapinsta.app",401],["carsmania.net",402],["carstopia.net",402],["coinsvalue.net",402],["cookinguide.net",402],["freeoseocheck.com",402],["makeupguide.net",402],["btcbitco.in",[402,429]],["btcsatoshi.net",402],["cempakajaya.com",402],["crypto4yu.com",402],["readbitcoin.org",402],["wiour.com",402],["exactpay.online",402],["aiimgvlog.fun",[402,467]],["tvtv.ca",403],["tvtv.us",403],["mydaddy.cc",404],["roadtrippin.fr",405],["redketchup.io",[406,407,408]],["anyporn.com",[409,423]],["bravoporn.com",409],["bravoteens.com",409],["crocotube.com",409],["hellmoms.com",409],["hellporno.com",409],["sex3.com",409],["tubewolf.com",409],["xbabe.com",409],["xcum.com",409],["zedporn.com",409],["imagetotext.info",410],["infokik.com",411],["freepik.com",412],["ddwloclawek.pl",[413,414]],["deezer.com",415],["my-subs.co",416],["plaion.com",417],["slideshare.net",[418,419]],["ustreasuryyieldcurve.com",420],["businesssoftwarehere.com",421],["goo.st",421],["freevpshere.com",421],["softwaresolutionshere.com",421],["staige.tv",424],["bondagevalley.cc",425],["androidadult.com",426],["streamvid.net",427],["watchtv24.com",428],["cellmapper.net",430],["medscape.com",431],["newscon.org",432],["arkadium.com",433],["app.blubank.com",435],["lifesurance.info",436],["sportdeutschland.tv",437],["kcra.com",437],["wcvb.com",437],["chromeready.com",439],["coursedrive.org",439],["dtbps3games.com",439],["vod.pl",440],["megadrive-emulator.com",441],["animesaga.in",444],["bestx.stream",444],["moviesapi.club",444],["digimanie.cz",445],["svethardware.cz",445],["srvy.ninja",446],["drawer-opportunity-i-243.site",447],["tchatche.com",448],["ozulmanga.com",449],["edmdls.com",450],["freshremix.net",450],["scenedl.org",450],["trakt.tv",[451,452,453]],["shroomers.app",454],["di.fm",[455,456,457]],["qtoptens.com",458],["reuters.com",458],["today.com",458],["videogamer.com",458],["wrestlinginc.com",458],["techedubyte.com",459],["quesignifi.ca",460],["movie-th.tv",461],["iwanttfc.com",462],["nutraingredients-asia.com",463],["nutraingredients-latam.com",463],["nutraingredients-usa.com",463],["nutraingredients.com",463],["livesportsclub.me",464],["rogstream.fun",464],["ozulscansen.com",465],["fitnessbr.click",466],["minhareceita.xyz",466],["doomied.monster",468],["lookmovie2.to",468],["appsbull.com",469],["diudemy.com",469],["maqal360.com",469],["bildirim.link",470],["royalroad.com",471],["zive.cz",[473,553]],["biletomat.pl",474],["hextank.io",[476,477]],["gofilmizle.com",[478,479]],["teamskeet.com",480],["tacobell.com",482],["webtoons.com",[483,484]],["zefoy.com",485],["natgeotv.com",487],["br.de",488],["pasteboard.co",489],["avclub.com",490],["clickhole.com",490],["deadspin.com",490],["gizmodo.com",490],["jalopnik.com",490],["jezebel.com",490],["kotaku.com",490],["lifehacker.com",490],["splinternews.com",490],["theinventory.com",490],["theonion.com",490],["theroot.com",490],["thetakeout.com",490],["pewresearch.org",490],["los40.com",[491,492]],["as.com",492],["telegraph.co.uk",[493,494]],["poweredbycovermore.com",[493,541]],["lumens.com",[493,541]],["verizon.com",495],["humanbenchmark.com",496],["politico.com",497],["officedepot.co.cr",[498,499,500,501]],["usnews.com",502],["factable.com",504],["zee5.com",505],["gala.fr",506],["geo.fr",506],["voici.fr",506],["gloucestershirelive.co.uk",507],["arsiv.mackolik.com",508],["jacksonguitars.com",509],["scandichotels.com",510],["stylist.co.uk",511],["nettiauto.com",512],["thaiairways.com",[513,514]],["cerbahealthcare.it",[515,516]],["futura-sciences.com",[515,531]],["tiendaenlinea.claro.com.ni",[517,518]],["tieba.baidu.com",519],["linktr.ee",520],["grasshopper.com",[523,524]],["epson.com.cn",[525,526]],["oe24.at",[527,528]],["szbz.de",527],["platform.autods.com",[529,530]],["wikihow.com",532],["citibank.com.sg",533],["uol.com.br",[534,535,536,537]],["gazzetta.gr",538],["digicol.dpm.org.cn",[539,540]],["virginmediatelevision.ie",542],["larazon.es",[543,544]],["waitrosecellar.com",[545,546,547]],["kicker.de",548],["sharpen-free-design-generator.netlify.app",[549,550]],["help.cashctrl.com",[551,552]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",[26,27]],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["urlty",28],["shrink",28],["clk",28],["tmearn",28],["megalink",28],["miniurl",28],["pcprogramasymas",28],["link1s",28],["shrinke",28],["shrinkme",28],["shortzzy",28],["shorttey",[28,217]],["lite-link",28],["pureshort",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,40,92,93,94]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,202]],["xtits",[56,128]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[76,77]],["fxporn69",82],["vipbox",83],["viprow",83],["desbloqueador",88],["xberuang",90],["teknorizen",90],["linkberuang",90],["kickassanime",95],["subtorrents",98],["subtorrents1",98],["newpelis",98],["pelix",98],["allcalidad",98],["infomaniakos",98],["filecrypt",102],["tornadomovies",103],["sexwebvideo",108],["mangovideo",108],["icdrama",114],["mangasail",114],["file4go",116],["asianclub",131],["anitube",137],["mixdrop",140],["azsoft",153],["uploadev",169],["ver-pelis-online",180],["ancient-origins",189],["lookcam",217],["lootlinks",217],["dpstream",220],["bluemediafiles",222],["docer",244],["pixlev",259],["skymovieshd",263],["dvdplay",263],["dropgalaxy",265],["ctrlv",284],["crackstreams",300],["123movieshd",311],["uproxy",315],["animesa",316],["cinecalidad",[319,320]],["apkmaven",366],["gmx",369],["gamereactor",422],["terabox",434],["tvhay",[442,443]],["lookmovie",468],["lk21official",475],["www.google",481]]);

const exceptionsMap = new Map([["pingit.com",[28]],["pingit.me",[28]],["lookmovie.studio",[468]]]);

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
