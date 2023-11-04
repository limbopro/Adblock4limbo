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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["detectAdBlock","noopFunc"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["checkdom","0"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["Global.adv","undefined"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["HTMLElement.prototype.attachShadow","null"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["document.hasFocus","trueFunc"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["makeMoney","true"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["isRequestPresent","true"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["Object.prototype.isAllAdClose","true"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["window.showAds","true"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["protection","noopFunc"],["Yii2App.playbackTimeout","0"],["private","false"],["Notification","undefined"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["window.cpexCMPVersion","2"],["toggleAdBlockInfo","falseFunc"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT","{}"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["isAdblockActive","false"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["freeviewmovies.com",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,307]],["gadgets.es",[11,307]],["amateurporn.co",[11,106]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,406]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,109]],["familyporn.tv",17],["cloudemb.com",[17,327]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,92]],["k1nk.co",17],["watchasians.cc",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["nectareousoverelate.com",21],["apinchcaseation.com",21],["timberwoodanotia.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["wiztube.xyz",26],["multiup.us",26],["rpdrlatino.live",26],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["vvtplayer.online",26],["adbull.org",27],["mitly.us",27],["linkrex.net",27],["linx.cc",27],["oke.io",27],["dz4link.com",27],["linclik.com",27],["shrt10.com",27],["loptelink.com",27],["cut-fly.com",27],["linkfinal.com",27],["payskip.org",27],["cutpaid.com",27],["forexmab.com",27],["linkjust.com",27],["linkszia.co",27],["leechpremium.link",27],["icutlink.com",[27,130]],["stfly.me",27],["oncehelp.com",27],["bit-url.com",27],["rgl.vn",27],["reqlinks.net",27],["bitlk.com",27],["qlinks.eu",27],["link.3dmili.com",27],["short-fly.com",27],["foxseotools.com",27],["pngit.live",27],["link.turkdown.com",27],["7r6.com",27],["oko.sh",27],["shortpaid.com",27],["ckk.ai",27],["fc.lc",27],["fstore.biz",27],["cuts-url.com",27],["eio.io",27],["exe.app",27],["exee.io",27],["exey.io",27],["srek.net",27],["skincarie.com",27],["exeo.app",27],["birdurls.com",27],["coinlyhub.com",[27,216]],["adsafelink.com",27],["aii.sh",27],["cybertechng.com",[27,225]],["owllink.net",27],["cutdl.xyz",27],["gplinks.co",27],["loan2host.com",27],["tei.ai",27],["tii.ai",27],["iir.ai",27],["shorteet.com",[27,245]],["sekilastekno.com",27],["promo-visits.site",27],["satoshi-win.xyz",[27,254]],["shorterall.com",27],["smoner.com",27],["linkshrnk.com",27],["linksly.co",27],["shrinkme.in",27],["pkr.pw",27],["imagenesderopaparaperros.com",27],["shortenbuddy.com",27],["gibit.xyz",27],["apksvip.com",27],["cashurl.in",27],["4cash.me",27],["namaidani.com",27],["bitfly.io",27],["teknomuda.com",27],["illink.net",27],["miuiku.com",27],["yourtechnology.online",27],["savelink.site",27],["fxlap.com",27],["earnfasts.com",27],["tawiia.com",27],["droplink.co",27],["recipestutorials.com",27],["2shrt.com",27],["apkshrt.com",27],["genpassword.top",27],["srts.me",27],["kutmoney.com",27],["kutt.io",27],["sanoybonito.club",27],["samaa-pro.com",27],["miklpro.com",27],["modapk.link",27],["shrinkforearn.in",27],["techyuth.xyz",27],["1shorten.com",27],["ccurl.net",27],["st23q.com",27],["beautyram.info",27],["viraloc.com",27],["clickscoin.com",27],["kiiw.icu",27],["galaxy-link.space",27],["linkpoi.me",27],["usdshort.com",27],["bitcoinly.in",27],["menjelajahi.com",27],["pewgame.com",27],["yxoshort.com",27],["1link.vip",27],["haonguyen.top",27],["jameeltips.us",27],["claimfreebits.com",27],["crazyblog.in",27],["gtlink.co",27],["link.tokenoto.com",27],["cutearn.net",27],["rshrt.com",27],["short.palmeratv.com",27],["filezipa.com",27],["dz-linkk.com",27],["theblissempire.com",27],["shortlink.prz.pw",27],["finanzas-vida.com",27],["adurly.cc",27],["pix4link.com",27],["paid4.link",27],["ez4short.com",27],["link.asiaon.top",27],["go.gets4link.com",27],["download.sharenulled.net",27],["enagato.com",27],["automotur.club",27],["beingtek.com",27],["shorturl.unityassets4free.com",27],["disheye.com",27],["techymedies.com",27],["techysuccess.com",27],["za.gl",[27,152]],["download.baominh.tech",27],["bblink.com",27],["linkbr.xyz",27],["myad.biz",27],["try2link.com",27],["swzz.xyz",27],["vevioz.com",27],["charexempire.com",27],["clk.asia",27],["egfly.xyz",27],["linka.click",27],["sturls.com",27],["myshrinker.com",27],["go.adinsurance.xyz",27],["dash-free.com",[27,225]],["rainurl.com",[27,225]],["snowurl.com",[27,225]],["netfile.cc",27],["link.insurance-space.xyz",27],["link.insurglobal.xyz",27],["theconomy.me",27],["rajsayt.xyz",27],["rocklink.in",27],["linkshortify.site",27],["adinsurance.xyz",27],["insurglobal.xyz",27],["techgeek.digital",27],["download3s.net",27],["shortx.net",27],["musicc.xyz",27],["cutx.me",27],["btcwalk.com",27],["cryptoon.xyz",27],["easysky.in",27],["veganab.co",27],["shortawy.com",27],["tlin.me",27],["apprepack.com",27],["sh2rt.com",27],["up-load.one",27],["zuba.link",27],["pandaznetwork.com",27],["atglinks.com",27],["du-link.in",27],["linksfy.co",27],["news.speedynews.xyz",27],["adrinolinks.in",27],["golink.xaydungplus.com",27],["bestcash2020.com",27],["hoxiin.com",27],["technemo.xyz",27],["go.linkbnao.com",27],["link-yz.com",27],["paylinnk.com",27],["thizissam.in",27],["ier.ai",27],["bloggertheme.xyz",27],["adslink.pw",27],["enit.in",[27,241]],["oii.io",27],["novelssites.com",27],["links.medipost.org",27],["upshrink.com",27],["faucetcrypto.net",27],["short.freeltc.top",27],["trxking.xyz",27],["weadown.com",27],["m.bloggingguidance.com",27],["blog.onroid.com",27],["cutty.app",27],["link.codevn.net",27],["upfilesurls.com",27],["shareus.site",27],["link4rev.site",27],["bloginguru.xyz",27],["tii.la",27],["celinks.net",27],["c2g.at",27],["shortzu.icu",27],["bitcosite.com",27],["cryptosh.pro",27],["sigmalinks.in",27],["link68.net",27],["traffic123.net",27],["gainl.ink",27],["windowslite.net",[27,225]],["coinsl.click",27],["exalink.fun",27],["short2url.xyz",27],["exego.app",27],["panyshort.link",27],["viewfr.com",27],["easycut.io",27],["cpm.icu",27],["cl1ca.com",27],["4br.me",27],["fir3.net",27],["watchmygf.me",[28,53]],["fpo.xxx",[28,55]],["sexemix.com",28],["heavyfetish.com",[28,479]],["you-porn.com",30],["youporngay.com",30],["youpornru.com",30],["9908ww.com",30],["adelaidepawnbroker.com",30],["bztube.com",30],["hotovs.com",30],["insuredhome.org",30],["nudegista.com",30],["pornluck.com",30],["vidd.se",30],["pornhub.com",30],["pornerbros.com",31],["freep.com",31],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["jacquieetmicheltv.net",[35,36]],["illicoporno.com",35],["lavoixdux.com",35],["tonpornodujour.com",35],["jacquieetmichel.net",35],["swame.com",35],["vosfemmes.com",35],["voyeurfrance.net",35],["viki.com",[37,38]],["sleazyneasy.com",[39,40,41]],["smutr.com",[39,212]],["yourporngod.com",[39,40]],["javbangers.com",[39,296]],["camfox.com",39],["camthots.tv",[39,124]],["shegotass.info",39],["amateur8.com",39],["bigtitslust.com",39],["ebony8.com",39],["freeporn8.com",39],["lesbian8.com",39],["maturetubehere.com",39],["sortporn.com",39],["webcamvau.com",39],["motherporno.com",[39,40,55,126]],["tktube.com",39],["theporngod.com",[39,40]],["pornsocket.com",42],["luxuretv.com",43],["porndig.com",[44,45]],["webcheats.com.br",46],["ceesty.com",[47,48]],["gestyy.com",[47,48]],["corneey.com",48],["destyy.com",48],["festyy.com",48],["sh.st",48],["angrybirdsnest.com",49],["zrozz.com",49],["clix4btc.com",49],["katfile.com",49],["4tests.com",49],["planet-explorers-isos.com",49],["business-standard.com",49],["goltelevision.com",49],["news-und-nachrichten.de",49],["laradiobbs.net",49],["urlaubspartner.net",49],["produktion.de",49],["cinemaxxl.de",49],["bladesalvador.com",49],["tempr.email",49],["cshort.org",49],["friendproject.net",49],["covrhub.com",49],["planetsuzy.org",50],["empflix.com",51],["filespace.com",52],["transparentcalifornia.com",53],["deepbrid.com",54],["submityourflicks.com",55],["3movs.com",55],["cambay.tv",[55,106,124,126]],["bravoerotica.net",[55,126]],["youx.xxx",55],["camclips.tv",[55,212]],["camflow.tv",[55,106,126,175,249]],["camhoes.tv",[55,106,124,126,175,249]],["xmegadrive.com",55],["xxxymovies.com",55],["xxxshake.com",55],["gayck.com",55],["xhand.com",[55,126]],["analdin.com",[55,126]],["webnovel.com",56],["videosgay.me",[57,58]],["wishfast.top",58],["schwaebische.de",59],["mercurynews.com",60],["chicoer.com",60],["dailybreeze.com",60],["dailybulletin.com",60],["dailynews.com",60],["delcotimes.com",60],["eastbaytimes.com",60],["macombdaily.com",60],["ocregister.com",60],["pasadenastarnews.com",60],["pe.com",60],["presstelegram.com",60],["redlandsdailyfacts.com",60],["reviewjournal.com",60],["santacruzsentinel.com",60],["saratogian.com",60],["sentinelandenterprise.com",60],["sgvtribune.com",60],["tampabay.com",60],["times-standard.com",60],["theoaklandpress.com",60],["trentonian.com",60],["twincities.com",60],["whittierdailynews.com",60],["bostonherald.com",60],["dailycamera.com",60],["sbsun.com",60],["dailydemocrat.com",60],["montereyherald.com",60],["orovillemr.com",60],["record-bee.com",60],["redbluffdailynews.com",60],["reporterherald.com",60],["thereporter.com",60],["timescall.com",60],["timesheraldonline.com",60],["ukiahdailyjournal.com",60],["dailylocal.com",60],["8tracks.com",61],["revealname.com",62],["fcportables.com",[63,64]],["golfchannel.com",66],["telemundodeportes.com",66],["stream.nbcsports.com",66],["gamcore.com",67],["porcore.com",67],["69games.xxx",67],["javmix.app",67],["tecknity.com",68],["haaretz.com",69],["hungama.com",69],["a-o.ninja",69],["anime-odcinki.pl",69],["kumpulmanga.org",69],["shortgoo.blogspot.com",69],["tonanmedia.my.id",[69,436]],["yurasu.xyz",69],["isekaipalace.com",69],["megadescarga.net",[70,71,72,73]],["megadescargas.net",[70,71,72,73]],["audioz.cc",74],["audioz.es",74],["luckydice.net",74],["adarima.org",74],["tieutietkiem.com",74],["weatherwx.com",74],["sattaguess.com",74],["winshell.de",74],["rosasidan.ws",74],["modmakers.xyz",74],["gamepure.in",74],["warrenrahul.in",74],["austiblox.net",74],["upiapi.in",74],["myownguess.in",74],["watchhentai.net",74],["thichcode.net",74],["texturecan.com",74],["animeszone.net",74],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,95]],["weatherx.co.in",[83,95]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["tubitv.com",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,125]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,106]],["watchporn.to",[92,106]],["camwhorez.video",92],["footstockings.com",[93,106]],["ojogos.com.br",97],["powforums.com",98],["supforums.com",98],["studybullet.com",98],["usgamer.net",99],["recordonline.com",99],["123tvseries.co",101],["freebitcoin.win",102],["e-monsite.com",102],["coindice.win",102],["temp-mails.com",103],["freiepresse.de",104],["investing.com",105],["camhub.cc",106],["love4porn.com",106],["thotvids.com",106],["watchmdh.to",106],["celebwhore.com",106],["cluset.com",106],["4kporn.xxx",106],["xhomealone.com",106],["lusttaboo.com",[106,367]],["hentai-moon.com",106],["mp3fiber.com",107],["suedkurier.de",108],["anysex.com",110],["gomiblog.com",111],["iptvtools.net",111],["vlist.se",112],["pornve.com",113],["coolrom.com.au",114],["bitcotasks.com",114],["pornohirsch.net",115],["marie-claire.es",116],["gamezhero.com",116],["flashgirlgames.com",116],["onlinesudoku.games",116],["mpg.football",116],["sssam.com",116],["globalnews.ca",117],["drinksmixer.com",118],["leitesculinaria.com",118],["fupa.net",119],["ge-map-overlays.appspot.com",120],["browardpalmbeach.com",121],["dallasobserver.com",121],["houstonpress.com",121],["miaminewtimes.com",121],["phoenixnewtimes.com",121],["westword.com",121],["nhentai.net",122],["fox.com.tr",123],["caminspector.net",124],["camwhoreshd.com",124],["camgoddess.tv",124],["gay4porn.com",126],["mypornhere.com",126],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["videogreen.xyz",129],["sypl.xyz",129],["playembed.xyz",129],["javhdporn.net",129],["redanimedatabase.cloud",129],["javstream.top",129],["flashplayer.fullstacks.net",131],["cloudapps.herokuapp.com",131],["youfiles.herokuapp.com",131],["temp-mail.org",132],["comnuan.com",133],["veedi.com",134],["battleboats.io",134],["fruitlab.com",135],["haddoz.net",135],["garoetpos.com",135],["stiletv.it",136],["hpav.tv",137],["hpjav.tv",137],["hqtv.biz",139],["liveuamap.com",140],["filmiseriali.com",140],["muvibg.com",140],["linksht.com",[141,142]],["audycje.tokfm.pl",143],["hulu.com",[144,145,146]],["shush.se",147],["aniwatcher.com",148],["emurom.net",149],["allkpop.com",150],["azmath.info",151],["downfile.site",151],["downphanmem.com",151],["expertvn.com",151],["memangbau.com",151],["scratch247.info",151],["trangchu.news",151],["adfoc.us",151],["techacode.com",151],["sahlmarketing.net",151],["sptfy.be",151],["satyaclub.in",151],["malaaiwap.in",151],["streamcheck.link",151],["mcafee-com.com",[151,388]],["pickcrackpasswords.blogspot.com",153],["kfrfansub.com",154],["thuglink.com",154],["voipreview.org",154],["audiotag.info",155],["hanime.tv",156],["pogo.com",157],["cloudvideo.tv",158],["legionjuegos.org",159],["legionpeliculas.org",159],["legionprogramas.org",159],["16honeys.com",160],["elespanol.com",161],["remodelista.com",162],["coolmathgames.com",[163,164,165,494]],["audiofanzine.com",166],["noweconomy.live",168],["howifx.com",168],["vavada5com.com",168],["hitokin.net",169],["elil.cc",170],["developerinsider.co",171],["ilprimatonazionale.it",172],["hotabis.com",172],["root-nation.com",172],["italpress.com",172],["airsoftmilsimnews.com",172],["artribune.com",172],["thehindu.com",173],["cambro.tv",[174,175]],["nibelungen-kurier.de",176],["noz.de",177],["earthgarage.com",179],["pianetamountainbike.it",180],["barchart.com",181],["modelisme.com",182],["parasportontario.ca",182],["prescottenews.com",182],["nrj-play.fr",183],["oeffentlicher-dienst.info",184],["hackingwithreact.com",185],["gutekueche.at",186],["eplfootballmatch.com",187],["peekvids.com",188],["playvids.com",188],["pornflip.com",188],["redensarten-index.de",189],["vw-page.com",190],["viz.com",[191,192]],["queenfaucet.website",193],["0rechner.de",194],["configspc.com",195],["xopenload.me",195],["uptobox.com",195],["uptostream.com",195],["onepiece-tube.com",196],["japgay.com",197],["mega-debrid.eu",198],["dreamdth.com",199],["pijanitvor.com",199],["diaridegirona.cat",202],["diariodeibiza.es",202],["diariodemallorca.es",202],["diarioinformacion.com",202],["eldia.es",202],["emporda.info",202],["farodevigo.es",202],["laopinioncoruna.es",202],["laopiniondemalaga.es",202],["laopiniondemurcia.es",202],["laopiniondezamora.es",202],["laprovincia.es",202],["levante-emv.com",202],["mallorcazeitung.es",202],["regio7.cat",202],["superdeporte.es",202],["playpaste.com",203],["player.rtl2.de",204],["freetutorialsus.com",205],["vidlii.com",[205,221]],["iammagnus.com",205],["dailyvideoreports.net",205],["unityassets4free.com",205],["cnbc.com",206],["puzzles.msn.com",207],["metro.us",207],["newsobserver.com",207],["arkadiumhosted.com",207],["spankbang.com",208],["firefaucet.win",209],["55k.io",210],["filelions.online",210],["direct-link.net",211],["direkt-wissen.com",211],["link-to.net",211],["fullhdxxx.com",213],["getintopc.com",214],["unique-tutorials.info",214],["etonline.com",215],["creatur.io",215],["drphil.com",215],["urbanmilwaukee.com",215],["ontiva.com",215],["hideandseek.world",215],["myabandonware.com",215],["mangaalarab.com",215],["kendam.com",215],["wttw.com",215],["synonyms.com",215],["definitions.net",215],["hostmath.com",215],["camvideoshub.com",215],["minhaconexao.com.br",215],["bravedown.com",215],["home-made-videos.com",217],["pxrnxx.xyz",217],["amateur-couples.com",217],["slutdump.com",217],["produsat.com",219],["12thman.com",221],["acusports.com",221],["atlantic10.com",221],["auburntigers.com",221],["baylorbears.com",221],["bceagles.com",221],["bgsufalcons.com",221],["big12sports.com",221],["bigten.org",221],["bradleybraves.com",221],["butlersports.com",221],["cmumavericks.com",221],["conferenceusa.com",221],["cyclones.com",221],["dartmouthsports.com",221],["daytonflyers.com",221],["dbupatriots.com",221],["dbusports.com",221],["denverpioneers.com",221],["fduknights.com",221],["fgcuathletics.com",221],["fightinghawks.com",221],["fightingillini.com",221],["floridagators.com",221],["friars.com",221],["friscofighters.com",221],["gamecocksonline.com",221],["goarmywestpoint.com",221],["gobison.com",221],["goblueraiders.com",221],["gobobcats.com",221],["gocards.com",221],["gocreighton.com",221],["godeacs.com",221],["goexplorers.com",221],["goetbutigers.com",221],["gofrogs.com",221],["gogriffs.com",221],["gogriz.com",221],["golobos.com",221],["gomarquette.com",221],["gopack.com",221],["gophersports.com",221],["goprincetontigers.com",221],["gopsusports.com",221],["goracers.com",221],["goshockers.com",221],["goterriers.com",221],["gotigersgo.com",221],["gousfbulls.com",221],["govandals.com",221],["gowyo.com",221],["goxavier.com",221],["gozags.com",221],["gozips.com",221],["griffinathletics.com",221],["guhoyas.com",221],["gwusports.com",221],["hailstate.com",221],["hamptonpirates.com",221],["hawaiiathletics.com",221],["hokiesports.com",221],["huskers.com",221],["icgaels.com",221],["iuhoosiers.com",221],["jsugamecocksports.com",221],["longbeachstate.com",221],["loyolaramblers.com",221],["lrtrojans.com",221],["lsusports.net",221],["morrisvillemustangs.com",221],["msuspartans.com",221],["muleriderathletics.com",221],["mutigers.com",221],["navysports.com",221],["nevadawolfpack.com",221],["niuhuskies.com",221],["nkunorse.com",221],["nuhuskies.com",221],["nusports.com",221],["okstate.com",221],["olemisssports.com",221],["omavs.com",221],["ovcsports.com",221],["owlsports.com",221],["purduesports.com",221],["redstormsports.com",221],["richmondspiders.com",221],["sfajacks.com",221],["shupirates.com",221],["siusalukis.com",221],["smcgaels.com",221],["smumustangs.com",221],["soconsports.com",221],["soonersports.com",221],["themw.com",221],["tulsahurricane.com",221],["txst.com",221],["txstatebobcats.com",221],["ubbulls.com",221],["ucfknights.com",221],["ucirvinesports.com",221],["uconnhuskies.com",221],["uhcougars.com",221],["uicflames.com",221],["umterps.com",221],["uncwsports.com",221],["unipanthers.com",221],["unlvrebels.com",221],["uoflsports.com",221],["usdtoreros.com",221],["utahstateaggies.com",221],["utepathletics.com",221],["utrockets.com",221],["uvmathletics.com",221],["uwbadgers.com",221],["villanova.com",221],["wkusports.com",221],["wmubroncos.com",221],["woffordterriers.com",221],["1pack1goal.com",221],["bcuathletics.com",221],["bubraves.com",221],["goblackbears.com",221],["golightsgo.com",221],["gomcpanthers.com",221],["goutsa.com",221],["mercerbears.com",221],["pirateblue.com",221],["pirateblue.net",221],["pirateblue.org",221],["quinnipiacbobcats.com",221],["towsontigers.com",221],["tribeathletics.com",221],["tribeclub.com",221],["utepminermaniacs.com",221],["utepminers.com",221],["wkutickets.com",221],["aopathletics.org",221],["atlantichockeyonline.com",221],["bigsouthnetwork.com",221],["bigsouthsports.com",221],["chawomenshockey.com",221],["dbupatriots.org",221],["drakerelays.org",221],["ecac.org",221],["ecacsports.com",221],["emueagles.com",221],["emugameday.com",221],["gculopes.com",221],["godrakebulldog.com",221],["godrakebulldogs.com",221],["godrakebulldogs.net",221],["goeags.com",221],["goislander.com",221],["goislanders.com",221],["gojacks.com",221],["gomacsports.com",221],["gseagles.com",221],["hubison.com",221],["iowaconference.com",221],["ksuowls.com",221],["lonestarconference.org",221],["mascac.org",221],["midwestconference.org",221],["mountaineast.org",221],["niu-pack.com",221],["nulakers.ca",221],["oswegolakers.com",221],["ovcdigitalnetwork.com",221],["pacersports.com",221],["rmacsports.org",221],["rollrivers.com",221],["samfordsports.com",221],["uncpbraves.com",221],["usfdons.com",221],["wiacsports.com",221],["alaskananooks.com",221],["broncathleticfund.com",221],["cameronaggies.com",221],["columbiacougars.com",221],["etownbluejays.com",221],["gobadgers.ca",221],["golancers.ca",221],["gometrostate.com",221],["gothunderbirds.ca",221],["kentstatesports.com",221],["lehighsports.com",221],["lopers.com",221],["lycoathletics.com",221],["lycomingathletics.com",221],["maraudersports.com",221],["mauiinvitational.com",221],["msumavericks.com",221],["nauathletics.com",221],["nueagles.com",221],["nwusports.com",221],["oceanbreezenyc.org",221],["patriotathleticfund.com",221],["pittband.com",221],["principiaathletics.com",221],["roadrunnersathletics.com",221],["sidearmsocial.com",221],["snhupenmen.com",221],["stablerarena.com",221],["stoutbluedevils.com",221],["uwlathletics.com",221],["yumacs.com",221],["collegefootballplayoff.com",221],["csurams.com",221],["cubuffs.com",221],["gobearcats.com",221],["gohuskies.com",221],["mgoblue.com",221],["osubeavers.com",221],["pittsburghpanthers.com",221],["rolltide.com",221],["texassports.com",221],["thesundevils.com",221],["uclabruins.com",221],["wvuathletics.com",221],["wvusports.com",221],["arizonawildcats.com",221],["calbears.com",221],["cuse.com",221],["georgiadogs.com",221],["goducks.com",221],["goheels.com",221],["gostanford.com",221],["insidekstatesports.com",221],["insidekstatesports.info",221],["insidekstatesports.net",221],["insidekstatesports.org",221],["k-stateathletics.com",221],["k-statefootball.net",221],["k-statefootball.org",221],["k-statesports.com",221],["k-statesports.net",221],["k-statesports.org",221],["k-statewomenshoops.com",221],["k-statewomenshoops.net",221],["k-statewomenshoops.org",221],["kstateathletics.com",221],["kstatefootball.net",221],["kstatefootball.org",221],["kstatesports.com",221],["kstatewomenshoops.com",221],["kstatewomenshoops.net",221],["kstatewomenshoops.org",221],["ksuathletics.com",221],["ksusports.com",221],["scarletknights.com",221],["showdownforrelief.com",221],["syracusecrunch.com",221],["texastech.com",221],["theacc.com",221],["ukathletics.com",221],["usctrojans.com",221],["utahutes.com",221],["utsports.com",221],["wsucougars.com",221],["mangadods.com",221],["tricksplit.io",221],["litecoinads.com",221],["fangraphs.com",222],["4players.de",[223,293]],["buffed.de",223],["gamesaktuell.de",223],["gamezone.de",223],["pcgames.de",223],["videogameszone.de",223],["planetaminecraft.com",224],["flyad.vip",225],["lapresse.ca",226],["kolyoom.com",227],["ilovephd.com",227],["upstream.to",228],["negumo.com",229],["games.wkb.jp",[230,231]],["channelmyanmar.org",[232,233]],["u-s-news.com",233],["fandom.com",[234,512,513]],["kenshi.fandom.com",235],["hausbau-forum.de",236],["fake-it.ws",237],["laksa19.github.io",238],["1shortlink.com",239],["nesia.my.id",240],["makemoneywithurl.com",241],["resetoff.pl",242],["sexodi.com",242],["cdn77.org",243],["howtofixwindows.com",244],["3sexporn.com",245],["momxxxsex.com",245],["myfreevintageporn.com",245],["penisbuyutucum.net",245],["lightnovelworld.com",246],["ujszo.com",247],["newsmax.com",248],["bobs-tube.com",249],["nadidetarifler.com",250],["siz.tv",250],["suzylu.co.uk",[251,252]],["onworks.net",253],["yabiladi.com",253],["homeairquality.org",255],["faucettronn.click",255],["downloadsoft.net",256],["imgair.net",257],["imgblaze.net",257],["imgfrost.net",257],["pixsera.net",257],["vestimage.site",257],["imgwia.buzz",257],["testlanguages.com",258],["newsinlevels.com",258],["videosinlevels.com",258],["arcai.com",259],["my-code4you.blogspot.com",260],["vlxxs.net",261],["rapelust.com",261],["vtube.to",261],["vtplay.net",261],["desitelugusex.com",261],["xvideos-downloader.net",261],["xxxvideotube.net",261],["sdefx.cloud",261],["nozomi.la",261],["moviesonlinefree.net",261],["flickr.com",262],["firefile.cc",263],["pestleanalysis.com",263],["kochamjp.pl",263],["tutorialforlinux.com",263],["whatsaero.com",263],["animeblkom.net",[263,279]],["blkom.com",263],["globes.co.il",[264,265]],["jardiner-malin.fr",266],["tw-calc.net",267],["ohmybrush.com",268],["talkceltic.net",269],["zdam.xyz",270],["mentalfloss.com",271],["uprafa.com",272],["cube365.net",273],["nightfallnews.com",[274,275]],["wwwfotografgotlin.blogspot.com",276],["freelistenonline.com",276],["badassdownloader.com",277],["quickporn.net",278],["aosmark.com",280],["theappstore.org",280],["atozmath.com",[282,283,284,285,286,287,288]],["newyorker.com",289],["brighteon.com",290],["more.tv",291],["video1tube.com",292],["alohatube.xyz",292],["link.cgtips.org",294],["hentaicloud.com",295],["netfapx.com",297],["paperzonevn.com",299],["hentaienglish.com",300],["hentaiporno.xxx",300],["venge.io",[301,302]],["btcbux.io",303],["its.porn",[304,305]],["atv.at",306],["2ndrun.tv",307],["rackusreads.com",307],["exerror.com",307],["temp-phone-number.com",308],["jetpunk.com",310],["imgur.com",311],["hentai-party.com",312],["hentaicomics.pro",312],["xxx-comics.pro",312],["genshinimpactcalculator.com",315],["mysexgames.com",316],["embed.indavideo.hu",319],["coinurl.net",[320,321]],["gdr-online.com",322],["mmm.dk",323],["iqiyi.com",[324,325,470]],["m.iqiyi.com",326],["japopav.tv",327],["lvturbo.com",327],["nbcolympics.com",328],["apkhex.com",329],["indiansexstories2.net",330],["issstories.xyz",330],["1340kbbr.com",331],["gorgeradio.com",331],["kduk.com",331],["kedoam.com",331],["kejoam.com",331],["kelaam.com",331],["khsn1230.com",331],["kjmx.rocks",331],["kloo.com",331],["klooam.com",331],["klykradio.com",331],["kmed.com",331],["kmnt.com",331],["kool991.com",331],["kpnw.com",331],["kppk983.com",331],["krktcountry.com",331],["ktee.com",331],["kwro.com",331],["kxbxfm.com",331],["thevalley.fm",331],["dsocker1234.blogspot.com",332],["surfline.com",[333,352]],["blick.ch",334],["mgnet.xyz",335],["designtagebuch.de",336],["pixroute.com",337],["calculator-online.net",338],["porngames.club",339],["sexgames.xxx",339],["111.90.159.132",340],["battleplan.news",340],["mobile-tracker-free.com",341],["pfps.gg",342],["ac-illust.com",[343,344]],["photo-ac.com",[343,344]],["social-unlock.com",345],["ninja.io",346],["sourceforge.net",347],["samfirms.com",348],["banned.video",349],["conspiracyfact.info",349],["freeworldnews.tv",349],["madmaxworld.tv",349],["huffpost.com",350],["ingles.com",351],["spanishdict.com",351],["play.tv3.ee",353],["trendyoum.com",354],["bulbagarden.net",355],["doomovie-hd.com",356],["madoohd.com",356],["moviestars.to",357],["hollywoodlife.com",358],["searchresults.cc",359],["mat6tube.com",360],["textstudio.co",361],["newtumbl.com",362],["nevcoins.club",364],["mail.com",365],["erome.com",368],["oggi.it",[369,370]],["manoramamax.com",369],["video.gazzetta.it",[369,370]],["mangakita.net",371],["avpgalaxy.net",372],["mhma12.tech",373],["panda-novel.com",374],["zebranovel.com",374],["lightsnovel.com",374],["eaglesnovel.com",374],["pandasnovel.com",374],["zadfaucet.com",375],["ewrc-results.com",376],["kizi.com",377],["cyberscoop.com",378],["fedscoop.com",378],["canale.live",379],["mafiatown.pl",[380,381]],["jeep-cj.com",382],["sponsorhunter.com",383],["coinscap.info",384],["cryptowidgets.net",384],["greenenez.com",384],["insurancegold.in",384],["webfreetools.net",384],["wiki-topia.com",384],["blog.carsmania.net",384],["blog.carstopia.net",384],["blog.coinsvalue.net",384],["blog.cookinguide.net",384],["blog.freeoseocheck.com",384],["blog.makeupguide.net",384],["rapid-cloud.co",384],["cloudcomputingtopics.net",385],["likecs.com",386],["tiscali.it",387],["mdn.lol",388],["carsmania.net",388],["carstopia.net",388],["coinsvalue.net",388],["cookinguide.net",388],["freeoseocheck.com",388],["makeupguide.net",388],["btcbitco.in",[388,426]],["btcsatoshi.net",388],["cempakajaya.com",388],["crypto4yu.com",388],["readbitcoin.org",388],["wiour.com",388],["exactpay.online",388],["aiimgvlog.fun",[388,465]],["linkspy.cc",389],["tutelehd3.xyz",390],["dirty.pink",[391,392,393]],["adshnk.com",394],["chattanoogan.com",395],["adsy.pw",396],["playstore.pw",396],["socialmediagirls.com",397],["windowspro.de",398],["snapinsta.app",399],["tvtv.ca",400],["tvtv.us",400],["mydaddy.cc",401],["roadtrippin.fr",402],["redketchup.io",[403,404,405]],["anyporn.com",[406,420]],["bravoporn.com",406],["bravoteens.com",406],["crocotube.com",406],["hellmoms.com",406],["hellporno.com",406],["sex3.com",406],["tubewolf.com",406],["xbabe.com",406],["xcum.com",406],["zedporn.com",406],["imagetotext.info",407],["infokik.com",408],["freepik.com",409],["ddwloclawek.pl",[410,411]],["deezer.com",412],["my-subs.co",413],["plaion.com",414],["slideshare.net",[415,416]],["ustreasuryyieldcurve.com",417],["businesssoftwarehere.com",418],["goo.st",418],["freevpshere.com",418],["softwaresolutionshere.com",418],["staige.tv",421],["bondagevalley.cc",422],["androidadult.com",423],["streamvid.net",424],["watchtv24.com",425],["cellmapper.net",427],["medscape.com",428],["newscon.org",429],["arkadium.com",430],["app.blubank.com",432],["lifesurance.info",433],["sportdeutschland.tv",434],["kcra.com",434],["wcvb.com",434],["kusonime.com",435],["chromeready.com",437],["coursedrive.org",437],["dtbps3games.com",437],["vod.pl",438],["megadrive-emulator.com",439],["animesaga.in",442],["bestx.stream",442],["moviesapi.club",442],["digimanie.cz",443],["svethardware.cz",443],["srvy.ninja",444],["drawer-opportunity-i-243.site",445],["tchatche.com",446],["ozulmanga.com",447],["edmdls.com",448],["freshremix.net",448],["scenedl.org",448],["trakt.tv",[449,450,451]],["shroomers.app",452],["di.fm",[453,454,455]],["qtoptens.com",456],["reuters.com",456],["today.com",456],["videogamer.com",456],["wrestlinginc.com",456],["techedubyte.com",457],["quesignifi.ca",458],["movie-th.tv",459],["iwanttfc.com",460],["nutraingredients-asia.com",461],["nutraingredients-latam.com",461],["nutraingredients-usa.com",461],["nutraingredients.com",461],["beastplayer.tk",462],["livesportsclub.pages.dev",462],["lolstreamz.pages.dev",462],["madlink.biz",462],["rogsports.pages.dev",462],["rogstream.fun",462],["ozulscansen.com",463],["fitnessbr.click",464],["minhareceita.xyz",464],["doomied.monster",466],["lookmovie2.to",466],["appsbull.com",467],["diudemy.com",467],["maqal360.com",467],["bildirim.link",468],["royalroad.com",469],["zive.cz",471],["biletomat.pl",472],["teamskeet.com",473],["tacobell.com",475],["webtoons.com",[476,477]],["zefoy.com",478],["natgeotv.com",480],["br.de",481],["pasteboard.co",482],["avclub.com",483],["clickhole.com",483],["deadspin.com",483],["gizmodo.com",483],["jalopnik.com",483],["jezebel.com",483],["kotaku.com",483],["lifehacker.com",483],["splinternews.com",483],["theinventory.com",483],["theonion.com",483],["theroot.com",483],["thetakeout.com",483],["pewresearch.org",483],["los40.com",[484,485]],["as.com",485],["telegraph.co.uk",[486,487]],["poweredbycovermore.com",[486,532]],["verizon.com",488],["humanbenchmark.com",489],["politico.com",490],["officedepot.co.cr",[491,492]],["usnews.com",493],["factable.com",495],["zee5.com",496],["gala.fr",497],["geo.fr",497],["voici.fr",497],["gloucestershirelive.co.uk",498],["arsiv.mackolik.com",499],["jacksonguitars.com",500],["scandichotels.com",501],["stylist.co.uk",502],["nettiauto.com",503],["thaiairways.com",[504,505]],["cerbahealthcare.it",[506,507]],["futura-sciences.com",[506,522]],["tiendaenlinea.claro.com.ni",[508,509]],["tieba.baidu.com",510],["linktr.ee",511],["grasshopper.com",[514,515]],["epson.com.cn",[516,517]],["oe24.at",[518,519]],["szbz.de",518],["platform.autods.com",[520,521]],["wikihow.com",523],["citibank.com.sg",524],["uol.com.br",[525,526,527,528]],["gazzetta.gr",529],["digicol.dpm.org.cn",[530,531]],["virginmediatelevision.ie",533],["larazon.es",[534,535]],["waitrosecellar.com",[536,537,538]],["kicker.de",539],["sharpen-free-design-generator.netlify.app",[540,541]],["help.cashctrl.com",[542,543]],["dropgalaxy.co",544],["dropgalaxy.com",544]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",26],["123link",27],["adshort",27],["linkshorts",27],["adsrt",27],["vinaurl",27],["adfloz",27],["dutchycorp",27],["shortearn",27],["pingit",27],["urlty",27],["shrink",27],["clk",27],["tmearn",27],["megalink",27],["miniurl",27],["pcprogramasymas",27],["link1s",27],["shrinke",27],["shortzzy",27],["shorttey",[27,215]],["lite-link",27],["pureshort",27],["adcorto",27],["zshort",27],["upfiles",27],["linkfly",27],["wplink",27],["seulink",27],["encurtalink",27],["camwhores",[28,39,91,92,93]],["tube8",[29,30]],["youporn",30],["redtube",30],["pornhub",[30,200,201]],["xtits",[55,126]],["streamwish",[57,58]],["pouvideo",65],["povvideo",65],["povw1deo",65],["povwideo",65],["powv1deo",65],["powvibeo",65],["powvideo",65],["powvldeo",65],["acortalo",[70,71,72,73]],["acortar",[70,71,72,73]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["linkberuang",89],["kickassanime",94],["subtorrents",96],["subtorrents1",96],["newpelis",96],["pelix",96],["allcalidad",96],["infomaniakos",96],["filecrypt",100],["tornadomovies",101],["sexwebvideo",106],["mangovideo",106],["icdrama",112],["mangasail",112],["file4go",114],["asianclub",129],["anitube",135],["mixdrop",138],["azsoft",151],["uploadev",167],["ver-pelis-online",178],["ancient-origins",187],["lookcam",215],["lootlinks",215],["dpstream",218],["bluemediafiles",220],["docer",242],["pixlev",257],["skymovieshd",261],["dvdplay",261],["ctrlv",281],["crackstreams",298],["123movieshd",309],["uproxy",313],["animesa",314],["cinecalidad",[317,318]],["apkmaven",363],["gmx",366],["gamereactor",419],["terabox",431],["tvhay",[440,441]],["lookmovie",466],["www.google",474]]);

const exceptionsMap = new Map([["pingit.com",[27]],["pingit.me",[27]],["lookmovie.studio",[466]]]);

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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
                return new RegExp(match[1], match[2] || flags);
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
