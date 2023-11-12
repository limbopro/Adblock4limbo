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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["detectAdBlock","noopFunc"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["adBlockerDetected","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["checkdom","0"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["Global.adv","undefined"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["isAdblockActive","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["document.hasFocus","trueFunc"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["makeMoney","true"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["isRequestPresent","true"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["Object.prototype.isAllAdClose","true"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["window.showAds","true"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["protection","noopFunc"],["Yii2App.playbackTimeout","0"],["private","false"],["Notification","undefined"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["window.cpexCMPVersion","2"],["toggleAdBlockInfo","falseFunc"],["adsPlay","false"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT","{}"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["cpexAddCMPCloseButton","noopFunc"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,308]],["gadgets.es",[11,308]],["amateurporn.co",[11,108]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,408]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,111]],["familyporn.tv",17],["cloudemb.com",[17,328]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,93]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["nectareousoverelate.com",21],["apinchcaseation.com",21],["timberwoodanotia.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["peliculas8k.com",[26,27]],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["adbull.org",28],["mitly.us",28],["linkrex.net",28],["linx.cc",28],["oke.io",28],["dz4link.com",28],["linclik.com",28],["shrt10.com",28],["loptelink.com",28],["cut-fly.com",28],["linkfinal.com",28],["payskip.org",28],["cutpaid.com",28],["forexmab.com",28],["linkjust.com",28],["linkszia.co",28],["leechpremium.link",28],["icutlink.com",[28,132]],["stfly.me",28],["oncehelp.com",28],["bit-url.com",28],["rgl.vn",28],["reqlinks.net",28],["bitlk.com",28],["qlinks.eu",28],["link.3dmili.com",28],["short-fly.com",28],["foxseotools.com",28],["pngit.live",28],["link.turkdown.com",28],["7r6.com",28],["oko.sh",28],["shortpaid.com",28],["ckk.ai",28],["fc.lc",28],["fstore.biz",28],["cuts-url.com",28],["eio.io",28],["exe.app",28],["exee.io",28],["exey.io",28],["srek.net",28],["skincarie.com",28],["exeo.app",28],["birdurls.com",28],["coinlyhub.com",[28,217]],["adsafelink.com",28],["aii.sh",28],["cybertechng.com",[28,226]],["owllink.net",28],["cutdl.xyz",28],["gplinks.co",28],["loan2host.com",28],["tei.ai",28],["tii.ai",28],["iir.ai",28],["shorteet.com",[28,246]],["sekilastekno.com",28],["promo-visits.site",28],["satoshi-win.xyz",[28,255]],["shorterall.com",28],["smoner.com",28],["linkshrnk.com",28],["linksly.co",28],["pkr.pw",28],["imagenesderopaparaperros.com",28],["shortenbuddy.com",28],["gibit.xyz",28],["apksvip.com",28],["cashurl.in",28],["4cash.me",28],["namaidani.com",28],["bitfly.io",28],["teknomuda.com",28],["illink.net",28],["miuiku.com",28],["yourtechnology.online",28],["savelink.site",28],["fxlap.com",28],["earnfasts.com",28],["tawiia.com",28],["droplink.co",28],["recipestutorials.com",28],["2shrt.com",28],["apkshrt.com",28],["genpassword.top",28],["srts.me",28],["kutmoney.com",28],["kutt.io",28],["sanoybonito.club",28],["samaa-pro.com",28],["miklpro.com",28],["modapk.link",28],["shrinkforearn.in",28],["techyuth.xyz",28],["1shorten.com",28],["ccurl.net",28],["st23q.com",28],["beautyram.info",28],["viraloc.com",28],["clickscoin.com",28],["kiiw.icu",28],["galaxy-link.space",28],["linkpoi.me",28],["usdshort.com",28],["bitcoinly.in",28],["menjelajahi.com",28],["pewgame.com",28],["yxoshort.com",28],["1link.vip",28],["haonguyen.top",28],["jameeltips.us",28],["claimfreebits.com",28],["crazyblog.in",28],["gtlink.co",28],["link.tokenoto.com",28],["cutearn.net",28],["rshrt.com",28],["short.palmeratv.com",28],["filezipa.com",28],["dz-linkk.com",28],["theblissempire.com",28],["shortlink.prz.pw",28],["finanzas-vida.com",28],["adurly.cc",28],["pix4link.com",28],["paid4.link",28],["ez4short.com",28],["link.asiaon.top",28],["go.gets4link.com",28],["download.sharenulled.net",28],["enagato.com",28],["automotur.club",28],["beingtek.com",28],["shorturl.unityassets4free.com",28],["disheye.com",28],["techymedies.com",28],["techysuccess.com",28],["za.gl",[28,154]],["download.baominh.tech",28],["bblink.com",28],["linkbr.xyz",28],["myad.biz",28],["try2link.com",28],["swzz.xyz",28],["vevioz.com",28],["charexempire.com",28],["clk.asia",28],["egfly.xyz",28],["linka.click",28],["sturls.com",28],["myshrinker.com",28],["go.adinsurance.xyz",28],["dash-free.com",[28,226]],["rainurl.com",[28,226]],["snowurl.com",[28,226]],["netfile.cc",28],["link.insurance-space.xyz",28],["link.insurglobal.xyz",28],["theconomy.me",28],["rajsayt.xyz",28],["rocklink.in",28],["linkshortify.site",28],["adinsurance.xyz",28],["insurglobal.xyz",28],["techgeek.digital",28],["download3s.net",28],["shortx.net",28],["musicc.xyz",28],["cutx.me",28],["btcwalk.com",28],["cryptoon.xyz",28],["easysky.in",28],["veganab.co",28],["shortawy.com",28],["tlin.me",28],["apprepack.com",28],["sh2rt.com",28],["up-load.one",28],["zuba.link",28],["pandaznetwork.com",28],["atglinks.com",28],["du-link.in",28],["linksfy.co",28],["news.speedynews.xyz",28],["adrinolinks.in",28],["golink.xaydungplus.com",28],["bestcash2020.com",28],["hoxiin.com",28],["technemo.xyz",28],["go.linkbnao.com",28],["link-yz.com",28],["paylinnk.com",28],["thizissam.in",28],["ier.ai",28],["bloggertheme.xyz",28],["adslink.pw",28],["enit.in",[28,242]],["oii.io",28],["novelssites.com",28],["links.medipost.org",28],["upshrink.com",28],["faucetcrypto.net",28],["short.freeltc.top",28],["trxking.xyz",28],["weadown.com",28],["m.bloggingguidance.com",28],["blog.onroid.com",28],["cutty.app",28],["link.codevn.net",28],["upfilesurls.com",28],["shareus.site",28],["link4rev.site",28],["bloginguru.xyz",28],["tii.la",28],["celinks.net",28],["c2g.at",28],["shortzu.icu",28],["bitcosite.com",28],["cryptosh.pro",28],["sigmalinks.in",28],["link68.net",28],["traffic123.net",28],["gainl.ink",28],["windowslite.net",[28,226]],["coinsl.click",28],["exalink.fun",28],["short2url.xyz",28],["exego.app",28],["panyshort.link",28],["viewfr.com",28],["easycut.io",28],["cpm.icu",28],["cl1ca.com",28],["4br.me",28],["fir3.net",28],["watchmygf.me",[29,54]],["fpo.xxx",[29,56]],["sexemix.com",29],["heavyfetish.com",[29,486]],["you-porn.com",31],["youporngay.com",31],["youpornru.com",31],["9908ww.com",31],["adelaidepawnbroker.com",31],["bztube.com",31],["hotovs.com",31],["insuredhome.org",31],["nudegista.com",31],["pornluck.com",31],["vidd.se",31],["pornhub.com",31],["pornerbros.com",32],["freep.com",32],["porn.com",33],["tune.pk",34],["noticias.gospelmais.com.br",35],["techperiod.com",35],["jacquieetmicheltv.net",[36,37]],["illicoporno.com",36],["lavoixdux.com",36],["tonpornodujour.com",36],["jacquieetmichel.net",36],["swame.com",36],["vosfemmes.com",36],["voyeurfrance.net",36],["viki.com",[38,39]],["sleazyneasy.com",[40,41,42]],["smutr.com",[40,213]],["yourporngod.com",[40,41]],["javbangers.com",[40,297]],["camfox.com",40],["camthots.tv",[40,126]],["shegotass.info",40],["amateur8.com",40],["bigtitslust.com",40],["ebony8.com",40],["freeporn8.com",40],["lesbian8.com",40],["maturetubehere.com",40],["sortporn.com",40],["webcamvau.com",40],["motherporno.com",[40,41,56,128]],["tktube.com",40],["theporngod.com",[40,41]],["pornsocket.com",43],["luxuretv.com",44],["porndig.com",[45,46]],["webcheats.com.br",47],["ceesty.com",[48,49]],["gestyy.com",[48,49]],["corneey.com",49],["destyy.com",49],["festyy.com",49],["sh.st",49],["angrybirdsnest.com",50],["zrozz.com",50],["clix4btc.com",50],["katfile.com",50],["4tests.com",50],["planet-explorers-isos.com",50],["business-standard.com",50],["goltelevision.com",50],["news-und-nachrichten.de",50],["laradiobbs.net",50],["urlaubspartner.net",50],["produktion.de",50],["cinemaxxl.de",50],["bladesalvador.com",50],["tempr.email",50],["cshort.org",50],["friendproject.net",50],["covrhub.com",50],["planetsuzy.org",51],["empflix.com",52],["filespace.com",53],["transparentcalifornia.com",54],["deepbrid.com",55],["submityourflicks.com",56],["3movs.com",56],["cambay.tv",[56,108,126,128]],["bravoerotica.net",[56,128]],["youx.xxx",56],["camclips.tv",[56,213]],["camflow.tv",[56,108,128,177,250]],["camhoes.tv",[56,108,126,128,177,250]],["xmegadrive.com",56],["xxxymovies.com",56],["xxxshake.com",56],["gayck.com",56],["xhand.com",[56,128]],["analdin.com",[56,128]],["webnovel.com",57],["videosgay.me",[58,59]],["wishfast.top",59],["schwaebische.de",60],["mercurynews.com",61],["chicoer.com",61],["dailybreeze.com",61],["dailybulletin.com",61],["dailynews.com",61],["delcotimes.com",61],["eastbaytimes.com",61],["macombdaily.com",61],["ocregister.com",61],["pasadenastarnews.com",61],["pe.com",61],["presstelegram.com",61],["redlandsdailyfacts.com",61],["reviewjournal.com",61],["santacruzsentinel.com",61],["saratogian.com",61],["sentinelandenterprise.com",61],["sgvtribune.com",61],["tampabay.com",61],["times-standard.com",61],["theoaklandpress.com",61],["trentonian.com",61],["twincities.com",61],["whittierdailynews.com",61],["bostonherald.com",61],["dailycamera.com",61],["sbsun.com",61],["dailydemocrat.com",61],["montereyherald.com",61],["orovillemr.com",61],["record-bee.com",61],["redbluffdailynews.com",61],["reporterherald.com",61],["thereporter.com",61],["timescall.com",61],["timesheraldonline.com",61],["ukiahdailyjournal.com",61],["dailylocal.com",61],["8tracks.com",62],["revealname.com",63],["fcportables.com",[64,65]],["golfchannel.com",67],["telemundodeportes.com",67],["stream.nbcsports.com",67],["gamcore.com",68],["porcore.com",68],["69games.xxx",68],["javmix.app",68],["tecknity.com",69],["haaretz.co.il",70],["haaretz.com",70],["hungama.com",70],["a-o.ninja",70],["anime-odcinki.pl",70],["kumpulmanga.org",70],["shortgoo.blogspot.com",70],["tonanmedia.my.id",[70,438]],["yurasu.xyz",70],["isekaipalace.com",70],["megadescarga.net",[71,72,73,74]],["megadescargas.net",[71,72,73,74]],["audioz.cc",75],["audioz.es",75],["luckydice.net",75],["adarima.org",75],["tieutietkiem.com",75],["weatherwx.com",75],["sattaguess.com",75],["winshell.de",75],["rosasidan.ws",75],["modmakers.xyz",75],["gamepure.in",75],["warrenrahul.in",75],["austiblox.net",75],["upiapi.in",75],["myownguess.in",75],["watchhentai.net",75],["thichcode.net",75],["texturecan.com",75],["vikistream.com",76],["eplayer.click",[76,77]],["mega4upload.com",[77,83]],["ennovelas.com",[77,83]],["n-tv.de",78],["brigitte.de",79],["stern.de",79],["foxsports.com.au",80],["canberratimes.com.au",80],["thesimsresource.com",81],["bdnewszh.com",83],["streamservicehd.click",83],["timeforbitco.in",84],["worldofbitco.in",[84,96]],["weatherx.co.in",[84,96]],["getyourbitco.in",84],["sunbtc.space",84],["ctrl.blog",85],["sportlife.es",86],["tubitv.com",86],["finofilipino.org",87],["acortarm.xyz",88],["acortame.xyz",88],["speedtest.net",89],["mysflink.blogspot.com",90],["assia.tv",91],["assia4.com",91],["assia24.com",91],["cwtvembeds.com",[93,127]],["camlovers.tv",93],["porntn.com",93],["pornissimo.org",93],["sexcams-24.com",[93,108]],["watchporn.to",[93,108]],["camwhorez.video",93],["footstockings.com",[94,108]],["sbs.com.au",97],["4players.de",[97,224]],["ojogos.com.br",99],["powforums.com",100],["supforums.com",100],["studybullet.com",100],["usgamer.net",101],["recordonline.com",101],["123tvseries.co",103],["freebitcoin.win",104],["e-monsite.com",104],["coindice.win",104],["temp-mails.com",105],["freiepresse.de",106],["investing.com",107],["camhub.cc",108],["love4porn.com",108],["thotvids.com",108],["watchmdh.to",108],["celebwhore.com",108],["cluset.com",108],["4kporn.xxx",108],["xhomealone.com",108],["lusttaboo.com",[108,369]],["hentai-moon.com",108],["mp3fiber.com",109],["suedkurier.de",110],["anysex.com",112],["gomiblog.com",113],["iptvtools.net",113],["vlist.se",114],["pornve.com",115],["coolrom.com.au",116],["bitcotasks.com",116],["pornohirsch.net",117],["marie-claire.es",118],["gamezhero.com",118],["flashgirlgames.com",118],["onlinesudoku.games",118],["mpg.football",118],["sssam.com",118],["globalnews.ca",119],["drinksmixer.com",120],["leitesculinaria.com",120],["fupa.net",121],["ge-map-overlays.appspot.com",122],["browardpalmbeach.com",123],["dallasobserver.com",123],["houstonpress.com",123],["miaminewtimes.com",123],["phoenixnewtimes.com",123],["westword.com",123],["nhentai.net",124],["fox.com.tr",125],["caminspector.net",126],["camwhoreshd.com",126],["camgoddess.tv",126],["gay4porn.com",128],["mypornhere.com",128],["mediapason.it",129],["linkspaid.com",129],["tuotromedico.com",129],["neoteo.com",129],["phoneswiki.com",129],["celebmix.com",129],["myneobuxportal.com",129],["oyungibi.com",129],["25yearslatersite.com",129],["jeshoots.com",130],["techhx.com",130],["karanapk.com",130],["videogreen.xyz",131],["sypl.xyz",131],["playembed.xyz",131],["javhdporn.net",131],["redanimedatabase.cloud",131],["javstream.top",131],["flashplayer.fullstacks.net",133],["cloudapps.herokuapp.com",133],["youfiles.herokuapp.com",133],["temp-mail.org",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hpav.tv",139],["hpjav.tv",139],["hqtv.biz",141],["liveuamap.com",142],["filmiseriali.com",142],["muvibg.com",142],["linksht.com",[143,144]],["audycje.tokfm.pl",145],["hulu.com",[146,147,148]],["shush.se",149],["aniwatcher.com",150],["emurom.net",151],["allkpop.com",152],["azmath.info",153],["downfile.site",153],["downphanmem.com",153],["expertvn.com",153],["memangbau.com",153],["scratch247.info",153],["trangchu.news",153],["adfoc.us",153],["techacode.com",153],["sahlmarketing.net",153],["sptfy.be",153],["cryptoprolife.com",153],["streamcheck.link",153],["mcafee-com.com",[153,390]],["pickcrackpasswords.blogspot.com",155],["kfrfansub.com",156],["thuglink.com",156],["voipreview.org",156],["audiotag.info",157],["hanime.tv",158],["pogo.com",159],["cloudvideo.tv",160],["legionjuegos.org",161],["legionpeliculas.org",161],["legionprogramas.org",161],["16honeys.com",162],["elespanol.com",163],["remodelista.com",164],["coolmathgames.com",[165,166,167,503]],["audiofanzine.com",168],["noweconomy.live",170],["howifx.com",170],["vavada5com.com",170],["hitokin.net",171],["elil.cc",172],["developerinsider.co",173],["ilprimatonazionale.it",174],["hotabis.com",174],["root-nation.com",174],["italpress.com",174],["airsoftmilsimnews.com",174],["artribune.com",174],["thehindu.com",175],["cambro.tv",[176,177]],["nibelungen-kurier.de",178],["noz.de",179],["earthgarage.com",181],["pianetamountainbike.it",182],["barchart.com",183],["modelisme.com",184],["parasportontario.ca",184],["prescottenews.com",184],["nrj-play.fr",185],["oeffentlicher-dienst.info",186],["hackingwithreact.com",187],["gutekueche.at",188],["eplfootballmatch.com",189],["peekvids.com",190],["playvids.com",190],["pornflip.com",190],["redensarten-index.de",191],["vw-page.com",192],["viz.com",[193,194]],["queenfaucet.website",195],["0rechner.de",196],["configspc.com",197],["xopenload.me",197],["uptobox.com",197],["uptostream.com",197],["onepiece-tube.com",198],["japgay.com",199],["mega-debrid.eu",200],["dreamdth.com",201],["pijanitvor.com",201],["diaridegirona.cat",203],["diariodeibiza.es",203],["diariodemallorca.es",203],["diarioinformacion.com",203],["eldia.es",203],["emporda.info",203],["farodevigo.es",203],["laopinioncoruna.es",203],["laopiniondemalaga.es",203],["laopiniondemurcia.es",203],["laopiniondezamora.es",203],["laprovincia.es",203],["levante-emv.com",203],["mallorcazeitung.es",203],["regio7.cat",203],["superdeporte.es",203],["playpaste.com",204],["player.rtl2.de",205],["freetutorialsus.com",206],["vidlii.com",[206,222]],["iammagnus.com",206],["dailyvideoreports.net",206],["unityassets4free.com",206],["cnbc.com",207],["puzzles.msn.com",208],["metro.us",208],["newsobserver.com",208],["arkadiumhosted.com",208],["spankbang.com",209],["firefaucet.win",210],["55k.io",211],["filelions.online",211],["direct-link.net",212],["direkt-wissen.com",212],["link-to.net",212],["fullhdxxx.com",214],["getintopc.com",215],["unique-tutorials.info",215],["etonline.com",216],["creatur.io",216],["drphil.com",216],["urbanmilwaukee.com",216],["ontiva.com",216],["hideandseek.world",216],["myabandonware.com",216],["mangaalarab.com",216],["kendam.com",216],["wttw.com",216],["synonyms.com",216],["definitions.net",216],["hostmath.com",216],["camvideoshub.com",216],["minhaconexao.com.br",216],["bravedown.com",216],["home-made-videos.com",218],["pxrnxx.xyz",218],["amateur-couples.com",218],["slutdump.com",218],["produsat.com",220],["12thman.com",222],["acusports.com",222],["atlantic10.com",222],["auburntigers.com",222],["baylorbears.com",222],["bceagles.com",222],["bgsufalcons.com",222],["big12sports.com",222],["bigten.org",222],["bradleybraves.com",222],["butlersports.com",222],["cmumavericks.com",222],["conferenceusa.com",222],["cyclones.com",222],["dartmouthsports.com",222],["daytonflyers.com",222],["dbupatriots.com",222],["dbusports.com",222],["denverpioneers.com",222],["fduknights.com",222],["fgcuathletics.com",222],["fightinghawks.com",222],["fightingillini.com",222],["floridagators.com",222],["friars.com",222],["friscofighters.com",222],["gamecocksonline.com",222],["goarmywestpoint.com",222],["gobison.com",222],["goblueraiders.com",222],["gobobcats.com",222],["gocards.com",222],["gocreighton.com",222],["godeacs.com",222],["goexplorers.com",222],["goetbutigers.com",222],["gofrogs.com",222],["gogriffs.com",222],["gogriz.com",222],["golobos.com",222],["gomarquette.com",222],["gopack.com",222],["gophersports.com",222],["goprincetontigers.com",222],["gopsusports.com",222],["goracers.com",222],["goshockers.com",222],["goterriers.com",222],["gotigersgo.com",222],["gousfbulls.com",222],["govandals.com",222],["gowyo.com",222],["goxavier.com",222],["gozags.com",222],["gozips.com",222],["griffinathletics.com",222],["guhoyas.com",222],["gwusports.com",222],["hailstate.com",222],["hamptonpirates.com",222],["hawaiiathletics.com",222],["hokiesports.com",222],["huskers.com",222],["icgaels.com",222],["iuhoosiers.com",222],["jsugamecocksports.com",222],["longbeachstate.com",222],["loyolaramblers.com",222],["lrtrojans.com",222],["lsusports.net",222],["morrisvillemustangs.com",222],["msuspartans.com",222],["muleriderathletics.com",222],["mutigers.com",222],["navysports.com",222],["nevadawolfpack.com",222],["niuhuskies.com",222],["nkunorse.com",222],["nuhuskies.com",222],["nusports.com",222],["okstate.com",222],["olemisssports.com",222],["omavs.com",222],["ovcsports.com",222],["owlsports.com",222],["purduesports.com",222],["redstormsports.com",222],["richmondspiders.com",222],["sfajacks.com",222],["shupirates.com",222],["siusalukis.com",222],["smcgaels.com",222],["smumustangs.com",222],["soconsports.com",222],["soonersports.com",222],["themw.com",222],["tulsahurricane.com",222],["txst.com",222],["txstatebobcats.com",222],["ubbulls.com",222],["ucfknights.com",222],["ucirvinesports.com",222],["uconnhuskies.com",222],["uhcougars.com",222],["uicflames.com",222],["umterps.com",222],["uncwsports.com",222],["unipanthers.com",222],["unlvrebels.com",222],["uoflsports.com",222],["usdtoreros.com",222],["utahstateaggies.com",222],["utepathletics.com",222],["utrockets.com",222],["uvmathletics.com",222],["uwbadgers.com",222],["villanova.com",222],["wkusports.com",222],["wmubroncos.com",222],["woffordterriers.com",222],["1pack1goal.com",222],["bcuathletics.com",222],["bubraves.com",222],["goblackbears.com",222],["golightsgo.com",222],["gomcpanthers.com",222],["goutsa.com",222],["mercerbears.com",222],["pirateblue.com",222],["pirateblue.net",222],["pirateblue.org",222],["quinnipiacbobcats.com",222],["towsontigers.com",222],["tribeathletics.com",222],["tribeclub.com",222],["utepminermaniacs.com",222],["utepminers.com",222],["wkutickets.com",222],["aopathletics.org",222],["atlantichockeyonline.com",222],["bigsouthnetwork.com",222],["bigsouthsports.com",222],["chawomenshockey.com",222],["dbupatriots.org",222],["drakerelays.org",222],["ecac.org",222],["ecacsports.com",222],["emueagles.com",222],["emugameday.com",222],["gculopes.com",222],["godrakebulldog.com",222],["godrakebulldogs.com",222],["godrakebulldogs.net",222],["goeags.com",222],["goislander.com",222],["goislanders.com",222],["gojacks.com",222],["gomacsports.com",222],["gseagles.com",222],["hubison.com",222],["iowaconference.com",222],["ksuowls.com",222],["lonestarconference.org",222],["mascac.org",222],["midwestconference.org",222],["mountaineast.org",222],["niu-pack.com",222],["nulakers.ca",222],["oswegolakers.com",222],["ovcdigitalnetwork.com",222],["pacersports.com",222],["rmacsports.org",222],["rollrivers.com",222],["samfordsports.com",222],["uncpbraves.com",222],["usfdons.com",222],["wiacsports.com",222],["alaskananooks.com",222],["broncathleticfund.com",222],["cameronaggies.com",222],["columbiacougars.com",222],["etownbluejays.com",222],["gobadgers.ca",222],["golancers.ca",222],["gometrostate.com",222],["gothunderbirds.ca",222],["kentstatesports.com",222],["lehighsports.com",222],["lopers.com",222],["lycoathletics.com",222],["lycomingathletics.com",222],["maraudersports.com",222],["mauiinvitational.com",222],["msumavericks.com",222],["nauathletics.com",222],["nueagles.com",222],["nwusports.com",222],["oceanbreezenyc.org",222],["patriotathleticfund.com",222],["pittband.com",222],["principiaathletics.com",222],["roadrunnersathletics.com",222],["sidearmsocial.com",222],["snhupenmen.com",222],["stablerarena.com",222],["stoutbluedevils.com",222],["uwlathletics.com",222],["yumacs.com",222],["collegefootballplayoff.com",222],["csurams.com",222],["cubuffs.com",222],["gobearcats.com",222],["gohuskies.com",222],["mgoblue.com",222],["osubeavers.com",222],["pittsburghpanthers.com",222],["rolltide.com",222],["texassports.com",222],["thesundevils.com",222],["uclabruins.com",222],["wvuathletics.com",222],["wvusports.com",222],["arizonawildcats.com",222],["calbears.com",222],["cuse.com",222],["georgiadogs.com",222],["goducks.com",222],["goheels.com",222],["gostanford.com",222],["insidekstatesports.com",222],["insidekstatesports.info",222],["insidekstatesports.net",222],["insidekstatesports.org",222],["k-stateathletics.com",222],["k-statefootball.net",222],["k-statefootball.org",222],["k-statesports.com",222],["k-statesports.net",222],["k-statesports.org",222],["k-statewomenshoops.com",222],["k-statewomenshoops.net",222],["k-statewomenshoops.org",222],["kstateathletics.com",222],["kstatefootball.net",222],["kstatefootball.org",222],["kstatesports.com",222],["kstatewomenshoops.com",222],["kstatewomenshoops.net",222],["kstatewomenshoops.org",222],["ksuathletics.com",222],["ksusports.com",222],["scarletknights.com",222],["showdownforrelief.com",222],["syracusecrunch.com",222],["texastech.com",222],["theacc.com",222],["ukathletics.com",222],["usctrojans.com",222],["utahutes.com",222],["utsports.com",222],["wsucougars.com",222],["mangadods.com",222],["tricksplit.io",222],["litecoinads.com",222],["fangraphs.com",223],["buffed.de",224],["gamesaktuell.de",224],["gamezone.de",224],["pcgames.de",224],["videogameszone.de",224],["planetaminecraft.com",225],["flyad.vip",226],["lapresse.ca",227],["kolyoom.com",228],["ilovephd.com",228],["upstream.to",229],["negumo.com",230],["games.wkb.jp",[231,232]],["channelmyanmar.org",[233,234]],["u-s-news.com",234],["fandom.com",[235,521,522]],["kenshi.fandom.com",236],["hausbau-forum.de",237],["fake-it.ws",238],["laksa19.github.io",239],["1shortlink.com",240],["nesia.my.id",241],["makemoneywithurl.com",242],["resetoff.pl",243],["sexodi.com",243],["cdn77.org",244],["howtofixwindows.com",245],["3sexporn.com",246],["momxxxsex.com",246],["myfreevintageporn.com",246],["penisbuyutucum.net",246],["lightnovelworld.com",247],["ujszo.com",248],["newsmax.com",249],["bobs-tube.com",250],["nadidetarifler.com",251],["siz.tv",251],["suzylu.co.uk",[252,253]],["onworks.net",254],["yabiladi.com",254],["homeairquality.org",256],["faucettronn.click",256],["ticketmaster.sg",256],["downloadsoft.net",257],["imgair.net",258],["imgblaze.net",258],["imgfrost.net",258],["pixsera.net",258],["vestimage.site",258],["imgwia.buzz",258],["testlanguages.com",259],["newsinlevels.com",259],["videosinlevels.com",259],["arcai.com",260],["my-code4you.blogspot.com",261],["vlxxs.net",262],["rapelust.com",262],["vtube.to",262],["vtplay.net",262],["desitelugusex.com",262],["xvideos-downloader.net",262],["xxxvideotube.net",262],["sdefx.cloud",262],["nozomi.la",262],["moviesonlinefree.net",262],["flickr.com",263],["firefile.cc",265],["pestleanalysis.com",265],["kochamjp.pl",265],["tutorialforlinux.com",265],["whatsaero.com",265],["animeblkom.net",[265,281]],["blkom.com",265],["globes.co.il",[266,267]],["jardiner-malin.fr",268],["tw-calc.net",269],["ohmybrush.com",270],["talkceltic.net",271],["zdam.xyz",272],["mentalfloss.com",273],["uprafa.com",274],["cube365.net",275],["nightfallnews.com",[276,277]],["wwwfotografgotlin.blogspot.com",278],["freelistenonline.com",278],["badassdownloader.com",279],["quickporn.net",280],["aosmark.com",282],["theappstore.org",282],["atozmath.com",[284,285,286,287,288,289,290]],["newyorker.com",291],["brighteon.com",292],["more.tv",293],["video1tube.com",294],["alohatube.xyz",294],["link.cgtips.org",295],["hentaicloud.com",296],["netfapx.com",298],["paperzonevn.com",300],["hentaienglish.com",301],["hentaiporno.xxx",301],["venge.io",[302,303]],["btcbux.io",304],["its.porn",[305,306]],["atv.at",307],["2ndrun.tv",308],["rackusreads.com",308],["exerror.com",308],["temp-phone-number.com",309],["jetpunk.com",311],["imgur.com",312],["hentai-party.com",313],["hentaicomics.pro",313],["xxx-comics.pro",313],["genshinimpactcalculator.com",316],["mysexgames.com",317],["embed.indavideo.hu",320],["coinurl.net",[321,322]],["gdr-online.com",323],["mmm.dk",324],["iqiyi.com",[325,326,472]],["m.iqiyi.com",327],["japopav.tv",328],["lvturbo.com",328],["nbcolympics.com",329],["apkhex.com",330],["indiansexstories2.net",331],["issstories.xyz",331],["1340kbbr.com",332],["gorgeradio.com",332],["kduk.com",332],["kedoam.com",332],["kejoam.com",332],["kelaam.com",332],["khsn1230.com",332],["kjmx.rocks",332],["kloo.com",332],["klooam.com",332],["klykradio.com",332],["kmed.com",332],["kmnt.com",332],["kool991.com",332],["kpnw.com",332],["kppk983.com",332],["krktcountry.com",332],["ktee.com",332],["kwro.com",332],["kxbxfm.com",332],["thevalley.fm",332],["dsocker1234.blogspot.com",333],["surfline.com",[334,354]],["blick.ch",335],["mgnet.xyz",336],["designtagebuch.de",337],["pixroute.com",338],["uploady.io",339],["calculator-online.net",340],["porngames.club",341],["sexgames.xxx",341],["111.90.159.132",342],["battleplan.news",342],["mobile-tracker-free.com",343],["pfps.gg",344],["ac-illust.com",[345,346]],["photo-ac.com",[345,346]],["social-unlock.com",347],["ninja.io",348],["sourceforge.net",349],["samfirms.com",350],["banned.video",351],["conspiracyfact.info",351],["freeworldnews.tv",351],["madmaxworld.tv",351],["huffpost.com",352],["ingles.com",353],["spanishdict.com",353],["play.tv3.ee",355],["trendyoum.com",356],["bulbagarden.net",357],["doomovie-hd.com",358],["madoohd.com",358],["moviestars.to",359],["hollywoodlife.com",360],["searchresults.cc",361],["mat6tube.com",362],["textstudio.co",363],["newtumbl.com",364],["nevcoins.club",366],["mail.com",367],["erome.com",370],["oggi.it",[371,372]],["manoramamax.com",371],["video.gazzetta.it",[371,372]],["mangakita.net",373],["avpgalaxy.net",374],["mhma12.tech",375],["panda-novel.com",376],["zebranovel.com",376],["lightsnovel.com",376],["eaglesnovel.com",376],["pandasnovel.com",376],["zadfaucet.com",377],["ewrc-results.com",378],["kizi.com",379],["cyberscoop.com",380],["fedscoop.com",380],["canale.live",381],["mafiatown.pl",[382,383]],["jeep-cj.com",384],["sponsorhunter.com",385],["coinscap.info",386],["cryptowidgets.net",386],["greenenez.com",386],["insurancegold.in",386],["webfreetools.net",386],["wiki-topia.com",386],["blog.carsmania.net",386],["blog.carstopia.net",386],["blog.coinsvalue.net",386],["blog.cookinguide.net",386],["blog.freeoseocheck.com",386],["blog.makeupguide.net",386],["rapid-cloud.co",386],["cloudcomputingtopics.net",387],["likecs.com",388],["tiscali.it",389],["mdn.lol",390],["carsmania.net",390],["carstopia.net",390],["coinsvalue.net",390],["cookinguide.net",390],["freeoseocheck.com",390],["makeupguide.net",390],["btcbitco.in",[390,428]],["btcsatoshi.net",390],["cempakajaya.com",390],["crypto4yu.com",390],["readbitcoin.org",390],["wiour.com",390],["exactpay.online",390],["aiimgvlog.fun",[390,467]],["linkspy.cc",391],["tutelehd3.xyz",392],["dirty.pink",[393,394,395]],["adshnk.com",396],["chattanoogan.com",397],["adsy.pw",398],["playstore.pw",398],["socialmediagirls.com",399],["windowspro.de",400],["snapinsta.app",401],["tvtv.ca",402],["tvtv.us",402],["mydaddy.cc",403],["roadtrippin.fr",404],["redketchup.io",[405,406,407]],["anyporn.com",[408,422]],["bravoporn.com",408],["bravoteens.com",408],["crocotube.com",408],["hellmoms.com",408],["hellporno.com",408],["sex3.com",408],["tubewolf.com",408],["xbabe.com",408],["xcum.com",408],["zedporn.com",408],["imagetotext.info",409],["infokik.com",410],["freepik.com",411],["ddwloclawek.pl",[412,413]],["deezer.com",414],["my-subs.co",415],["plaion.com",416],["slideshare.net",[417,418]],["ustreasuryyieldcurve.com",419],["businesssoftwarehere.com",420],["goo.st",420],["freevpshere.com",420],["softwaresolutionshere.com",420],["staige.tv",423],["bondagevalley.cc",424],["androidadult.com",425],["streamvid.net",426],["watchtv24.com",427],["cellmapper.net",429],["medscape.com",430],["newscon.org",431],["arkadium.com",432],["app.blubank.com",434],["lifesurance.info",435],["sportdeutschland.tv",436],["kcra.com",436],["wcvb.com",436],["kusonime.com",437],["chromeready.com",439],["coursedrive.org",439],["dtbps3games.com",439],["vod.pl",440],["megadrive-emulator.com",441],["animesaga.in",444],["bestx.stream",444],["moviesapi.club",444],["digimanie.cz",445],["svethardware.cz",445],["srvy.ninja",446],["drawer-opportunity-i-243.site",447],["tchatche.com",448],["ozulmanga.com",449],["edmdls.com",450],["freshremix.net",450],["scenedl.org",450],["trakt.tv",[451,452,453]],["shroomers.app",454],["di.fm",[455,456,457]],["qtoptens.com",458],["reuters.com",458],["today.com",458],["videogamer.com",458],["wrestlinginc.com",458],["techedubyte.com",459],["quesignifi.ca",460],["movie-th.tv",461],["iwanttfc.com",462],["nutraingredients-asia.com",463],["nutraingredients-latam.com",463],["nutraingredients-usa.com",463],["nutraingredients.com",463],["beastplayer.tk",464],["livesportsclub.pages.dev",464],["lolstreamz.pages.dev",464],["madlink.biz",464],["rogsports.pages.dev",464],["rogstream.fun",464],["ozulscansen.com",465],["fitnessbr.click",466],["minhareceita.xyz",466],["doomied.monster",468],["lookmovie2.to",468],["appsbull.com",469],["diudemy.com",469],["maqal360.com",469],["bildirim.link",470],["royalroad.com",471],["zive.cz",[473,553]],["biletomat.pl",474],["hextank.io",[476,477]],["gofilmizle.com",[478,479]],["teamskeet.com",480],["tacobell.com",482],["webtoons.com",[483,484]],["zefoy.com",485],["natgeotv.com",487],["br.de",488],["pasteboard.co",489],["avclub.com",490],["clickhole.com",490],["deadspin.com",490],["gizmodo.com",490],["jalopnik.com",490],["jezebel.com",490],["kotaku.com",490],["lifehacker.com",490],["splinternews.com",490],["theinventory.com",490],["theonion.com",490],["theroot.com",490],["thetakeout.com",490],["pewresearch.org",490],["los40.com",[491,492]],["as.com",492],["telegraph.co.uk",[493,494]],["poweredbycovermore.com",[493,541]],["verizon.com",495],["humanbenchmark.com",496],["politico.com",497],["officedepot.co.cr",[498,499,500,501]],["usnews.com",502],["factable.com",504],["zee5.com",505],["gala.fr",506],["geo.fr",506],["voici.fr",506],["gloucestershirelive.co.uk",507],["arsiv.mackolik.com",508],["jacksonguitars.com",509],["scandichotels.com",510],["stylist.co.uk",511],["nettiauto.com",512],["thaiairways.com",[513,514]],["cerbahealthcare.it",[515,516]],["futura-sciences.com",[515,531]],["tiendaenlinea.claro.com.ni",[517,518]],["tieba.baidu.com",519],["linktr.ee",520],["grasshopper.com",[523,524]],["epson.com.cn",[525,526]],["oe24.at",[527,528]],["szbz.de",527],["platform.autods.com",[529,530]],["wikihow.com",532],["citibank.com.sg",533],["uol.com.br",[534,535,536,537]],["gazzetta.gr",538],["digicol.dpm.org.cn",[539,540]],["virginmediatelevision.ie",542],["larazon.es",[543,544]],["waitrosecellar.com",[545,546,547]],["kicker.de",548],["sharpen-free-design-generator.netlify.app",[549,550]],["help.cashctrl.com",[551,552]]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",[26,27]],["123link",28],["adshort",28],["linkshorts",28],["adsrt",28],["vinaurl",28],["adfloz",28],["dutchycorp",28],["shortearn",28],["pingit",28],["urlty",28],["shrink",28],["clk",28],["tmearn",28],["megalink",28],["miniurl",28],["pcprogramasymas",28],["link1s",28],["shrinke",28],["shrinkme",28],["shortzzy",28],["shorttey",[28,216]],["lite-link",28],["pureshort",28],["adcorto",28],["zshort",28],["upfiles",28],["linkfly",28],["wplink",28],["seulink",28],["encurtalink",28],["camwhores",[29,40,92,93,94]],["tube8",[30,31]],["youporn",31],["redtube",31],["pornhub",[31,202]],["xtits",[56,128]],["streamwish",[58,59]],["pouvideo",66],["povvideo",66],["povw1deo",66],["povwideo",66],["powv1deo",66],["powvibeo",66],["powvideo",66],["powvldeo",66],["acortalo",[71,72,73,74]],["acortar",[71,72,73,74]],["plyjam",[76,77]],["fxporn69",82],["vipbox",83],["viprow",83],["desbloqueador",88],["xberuang",90],["teknorizen",90],["linkberuang",90],["kickassanime",95],["subtorrents",98],["subtorrents1",98],["newpelis",98],["pelix",98],["allcalidad",98],["infomaniakos",98],["filecrypt",102],["tornadomovies",103],["sexwebvideo",108],["mangovideo",108],["icdrama",114],["mangasail",114],["file4go",116],["asianclub",131],["anitube",137],["mixdrop",140],["azsoft",153],["uploadev",169],["ver-pelis-online",180],["ancient-origins",189],["lookcam",216],["lootlinks",216],["dpstream",219],["bluemediafiles",221],["docer",243],["pixlev",258],["skymovieshd",262],["dvdplay",262],["dropgalaxy",264],["ctrlv",283],["crackstreams",299],["123movieshd",310],["uproxy",314],["animesa",315],["cinecalidad",[318,319]],["apkmaven",365],["gmx",368],["gamereactor",421],["terabox",433],["tvhay",[442,443]],["lookmovie",468],["lk21official",475],["www.google",481]]);

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
        } else if ( cValue === '[]' ) {
            cValue = [];
        } else if ( cValue === '{}' ) {
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
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => cValue;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => cValue);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(cValue);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(cValue);
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
