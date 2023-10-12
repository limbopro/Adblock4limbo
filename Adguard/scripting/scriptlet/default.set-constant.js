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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["detectAdBlock","noopFunc"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["eyshy_start","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["checkdom","0"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["Global.adv","undefined"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["HTMLElement.prototype.attachShadow","null"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["AdBlockerDetected","noopFunc"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["Object.prototype.isPremium","true"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["document.hasFocus","trueFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["dable","{}"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["makeMoney","true"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["Object.prototype.isAllAdClose","true"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["window.showAds","true"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["private","false"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT","{}"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["isAdblockActive","false"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,308]],["gadgets.es",[11,308]],["amateurporn.co",[11,106]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,408]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,109]],["familyporn.tv",17],["cloudemb.com",[17,328]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,92]],["pobre.tv",17],["k1nk.co",17],["watchasians.cc",17],["photopea.com",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["apinchcaseation.com",21],["timberwoodanotia.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["multiup.us",26],["rpdrlatino.live",26],["video.q34r.org",26],["69x.online",26],["czxxx.org",26],["adbull.org",27],["mitly.us",27],["linkrex.net",27],["linx.cc",27],["oke.io",27],["dz4link.com",27],["linclik.com",27],["shrt10.com",27],["loptelink.com",27],["cut-fly.com",27],["linkfinal.com",27],["payskip.org",27],["cutpaid.com",27],["forexmab.com",27],["linkjust.com",27],["linkszia.co",27],["leechpremium.link",27],["icutlink.com",[27,130]],["stfly.me",27],["oncehelp.com",27],["bit-url.com",27],["rgl.vn",27],["reqlinks.net",27],["bitlk.com",27],["qlinks.eu",27],["link.3dmili.com",27],["short-fly.com",27],["foxseotools.com",27],["pngit.live",27],["link.turkdown.com",27],["7r6.com",27],["enrt.eu",27],["oko.sh",27],["shortpaid.com",27],["ckk.ai",27],["fc.lc",27],["fstore.biz",27],["cuts-url.com",27],["eio.io",27],["exe.app",27],["exee.io",27],["exey.io",27],["srek.net",27],["skincarie.com",27],["exeo.app",27],["birdurls.com",27],["coinlyhub.com",[27,217]],["adsafelink.com",27],["aii.sh",27],["cybertechng.com",[27,226]],["owllink.net",27],["fir3.net",27],["cutdl.xyz",27],["gplinks.co",27],["loan2host.com",27],["tei.ai",27],["tii.ai",27],["iir.ai",27],["shorteet.com",[27,247]],["sekilastekno.com",27],["promo-visits.site",27],["satoshi-win.xyz",[27,256]],["shorterall.com",27],["smoner.com",27],["bitlinks.pw",27],["linkad.in",27],["linkshrnk.com",27],["popimed.com",27],["linksly.co",27],["shrinkme.in",27],["rodjulian.com",27],["pkr.pw",27],["shrinke.me",27],["imagenesderopaparaperros.com",27],["shortenbuddy.com",27],["gibit.xyz",27],["apksvip.com",27],["cashurl.in",27],["4cash.me",27],["namaidani.com",27],["bitfly.io",27],["teknomuda.com",27],["illink.net",27],["miuiku.com",27],["yourtechnology.online",27],["savelink.site",27],["fxlap.com",27],["earnfasts.com",27],["tawiia.com",27],["droplink.co",27],["recipestutorials.com",27],["2shrt.com",27],["apkshrt.com",27],["genpassword.top",27],["srts.me",27],["kutmoney.com",27],["kutt.io",27],["sanoybonito.club",27],["samaa-pro.com",27],["miklpro.com",27],["modapk.link",27],["shrinkforearn.in",27],["1shorten.com",27],["ccurl.net",27],["st23q.com",27],["beautyram.info",27],["gonety.com",27],["viraloc.com",27],["clickscoin.com",27],["kiiw.icu",27],["galaxy-link.space",27],["linkpoi.me",27],["usdshort.com",27],["bitcoinly.in",27],["menjelajahi.com",27],["pewgame.com",27],["yxoshort.com",27],["1link.vip",27],["haonguyen.top",27],["jameeltips.us",27],["claimfreebits.com",27],["crazyblog.in",27],["gtlink.co",27],["link.tokenoto.com",27],["cutearn.net",27],["rshrt.com",27],["short.palmeratv.com",27],["filezipa.com",27],["arab-chat.club",27],["dz-linkk.com",27],["theblissempire.com",27],["shortlink.prz.pw",27],["finanzas-vida.com",27],["adurly.cc",27],["pix4link.com",27],["paid4.link",27],["ez4short.com",27],["link.asiaon.top",27],["go.gets4link.com",27],["download.sharenulled.net",27],["enagato.com",27],["automotur.club",27],["beingtek.com",27],["shorturl.unityassets4free.com",27],["disheye.com",27],["techymedies.com",27],["techysuccess.com",27],["za.gl",[27,153]],["download.baominh.tech",27],["bblink.com",27],["linkbr.xyz",27],["myad.biz",27],["try2link.com",27],["swzz.xyz",27],["vevioz.com",27],["charexempire.com",27],["clk.asia",27],["rancah.com",27],["egfly.xyz",27],["linka.click",27],["sturls.com",27],["myshrinker.com",27],["go.adinsurance.xyz",27],["dash-free.com",[27,226]],["rainurl.com",[27,226]],["snowurl.com",[27,226]],["netfile.cc",27],["link.insurance-space.xyz",27],["link.insurglobal.xyz",27],["theconomy.me",27],["rajsayt.xyz",27],["rocklink.in",27],["linkshortify.site",27],["adinsurance.xyz",27],["insurglobal.xyz",27],["techgeek.digital",27],["download3s.net",27],["shortx.net",27],["musicc.xyz",27],["cutx.me",27],["btcwalk.com",27],["cryptoon.xyz",27],["easysky.in",27],["veganab.co",27],["shortawy.com",27],["tlin.me",27],["apprepack.com",27],["sh2rt.com",27],["up-load.one",27],["zuba.link",27],["pandaznetwork.com",27],["du-link.in",27],["linksfy.co",27],["news.speedynews.xyz",27],["adrinolinks.in",27],["golink.xaydungplus.com",27],["bestcash2020.com",27],["cut-y.net",27],["hoxiin.com",27],["technemo.xyz",27],["baicho.xyz",27],["go.linkbnao.com",27],["link-yz.com",27],["paylinnk.com",27],["thizissam.in",27],["ier.ai",27],["bloggertheme.xyz",27],["adslink.pw",27],["enit.in",[27,243]],["oii.io",27],["novelssites.com",27],["links.medipost.org",27],["upshrink.com",27],["faucetcrypto.net",27],["short.freeltc.top",27],["trxking.xyz",27],["weadown.com",27],["cookdov.com",27],["xpshort.com",27],["bdnewsx.com",27],["m.bloggingguidance.com",27],["blog.onroid.com",27],["cutty.app",27],["link.codevn.net",27],["upfilesurls.com",27],["shareus.site",27],["link4rev.site",27],["bloginguru.xyz",27],["tii.la",27],["celinks.net",27],["c2g.at",27],["atglinks.com",27],["shortzu.icu",27],["bitcosite.com",27],["cryptosh.pro",27],["sigmalinks.in",27],["link68.net",27],["traffic123.net",27],["gainl.ink",27],["windowslite.net",[27,226]],["coinsl.click",27],["exalink.fun",27],["short2url.xyz",27],["exego.app",27],["panyshort.link",27],["viewfr.com",27],["easycut.io",27],["cpm.icu",27],["watchmygf.me",[28,53]],["fpo.xxx",[28,55]],["sexemix.com",28],["heavyfetish.com",[28,474]],["you-porn.com",30],["youporngay.com",30],["youpornru.com",30],["9908ww.com",30],["adelaidepawnbroker.com",30],["bztube.com",30],["hotovs.com",30],["insuredhome.org",30],["nudegista.com",30],["pornluck.com",30],["vidd.se",30],["pornhub.com",30],["pornerbros.com",31],["freep.com",31],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["jacquieetmicheltv.net",[35,36]],["illicoporno.com",35],["lavoixdux.com",35],["tonpornodujour.com",35],["jacquieetmichel.net",35],["swame.com",35],["vosfemmes.com",35],["voyeurfrance.net",35],["viki.com",[37,38]],["sleazyneasy.com",[39,40,41]],["smutr.com",[39,213]],["yourporngod.com",[39,40]],["javbangers.com",[39,297]],["camfox.com",39],["camthots.tv",[39,124]],["shegotass.info",39],["amateur8.com",39],["bigtitslust.com",39],["ebony8.com",39],["freeporn8.com",39],["lesbian8.com",39],["maturetubehere.com",39],["sortporn.com",39],["webcamvau.com",39],["motherporno.com",[39,40,55,126]],["tktube.com",39],["theporngod.com",[39,40]],["pornsocket.com",42],["luxuretv.com",43],["porndig.com",[44,45]],["webcheats.com.br",46],["ceesty.com",[47,48]],["gestyy.com",[47,48]],["corneey.com",48],["destyy.com",48],["festyy.com",48],["sh.st",48],["angrybirdsnest.com",49],["zrozz.com",49],["clix4btc.com",49],["katfile.com",49],["4tests.com",49],["planet-explorers-isos.com",49],["business-standard.com",49],["goltelevision.com",49],["news-und-nachrichten.de",49],["laradiobbs.net",49],["urlaubspartner.net",49],["produktion.de",49],["cinemaxxl.de",49],["bladesalvador.com",49],["tempr.email",49],["cshort.org",49],["friendproject.net",49],["covrhub.com",49],["planetsuzy.org",50],["empflix.com",51],["filespace.com",52],["transparentcalifornia.com",53],["deepbrid.com",54],["submityourflicks.com",55],["3movs.com",55],["cambay.tv",[55,106,124,126]],["bravoerotica.net",[55,126]],["youx.xxx",55],["camclips.tv",[55,213]],["camflow.tv",[55,106,126,176,251]],["camhoes.tv",[55,106,124,126,176,251]],["xmegadrive.com",55],["xxxymovies.com",55],["xxxshake.com",55],["gayck.com",55],["xhand.com",[55,126]],["analdin.com",[55,126]],["webnovel.com",56],["videosgay.me",[57,58]],["wishfast.top",58],["schwaebische.de",59],["mercurynews.com",60],["chicoer.com",60],["dailybreeze.com",60],["dailybulletin.com",60],["dailynews.com",60],["delcotimes.com",60],["eastbaytimes.com",60],["macombdaily.com",60],["ocregister.com",60],["pasadenastarnews.com",60],["pe.com",60],["presstelegram.com",60],["redlandsdailyfacts.com",60],["reviewjournal.com",60],["santacruzsentinel.com",60],["saratogian.com",60],["sentinelandenterprise.com",60],["sgvtribune.com",60],["tampabay.com",60],["times-standard.com",60],["theoaklandpress.com",60],["trentonian.com",60],["twincities.com",60],["whittierdailynews.com",60],["bostonherald.com",60],["dailycamera.com",60],["sbsun.com",60],["dailydemocrat.com",60],["montereyherald.com",60],["orovillemr.com",60],["record-bee.com",60],["redbluffdailynews.com",60],["reporterherald.com",60],["thereporter.com",60],["timescall.com",60],["timesheraldonline.com",60],["ukiahdailyjournal.com",60],["dailylocal.com",60],["8tracks.com",61],["revealname.com",62],["fcportables.com",[63,64]],["golfchannel.com",66],["telemundodeportes.com",66],["stream.nbcsports.com",66],["gamcore.com",67],["porcore.com",67],["69games.xxx",67],["javmix.app",67],["tecknity.com",68],["haaretz.com",69],["hungama.com",69],["a-o.ninja",69],["anime-odcinki.pl",69],["kumpulmanga.org",69],["shortgoo.blogspot.com",69],["tonanmedia.my.id",[69,437]],["yurasu.xyz",69],["isekaipalace.com",69],["megadescarga.net",[70,71,72,73]],["megadescargas.net",[70,71,72,73]],["audioz.cc",74],["audioz.es",74],["luckydice.net",74],["adarima.org",74],["tieutietkiem.com",74],["weatherwx.com",74],["sattaguess.com",74],["winshell.de",74],["rosasidan.ws",74],["modmakers.xyz",74],["gamepure.in",74],["warrenrahul.in",74],["austiblox.net",74],["upiapi.in",74],["myownguess.in",74],["watchhentai.net",74],["thichcode.net",74],["texturecan.com",74],["animeszone.net",74],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,95]],["weatherx.co.in",[83,95]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["tubitv.com",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,125]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,106]],["watchporn.to",[92,106]],["camwhorez.video",92],["footstockings.com",[93,106]],["ojogos.com.br",97],["powforums.com",98],["supforums.com",98],["studybullet.com",98],["usgamer.net",99],["recordonline.com",99],["123tvseries.co",101],["freebitcoin.win",102],["e-monsite.com",102],["coindice.win",102],["temp-mails.com",103],["freiepresse.de",104],["investing.com",105],["camhub.cc",106],["love4porn.com",106],["thotvids.com",106],["watchmdh.to",106],["celebwhore.com",106],["cluset.com",106],["4kporn.xxx",106],["xhomealone.com",106],["lusttaboo.com",[106,368]],["hentai-moon.com",106],["mp3fiber.com",107],["suedkurier.de",108],["anysex.com",110],["gomiblog.com",111],["iptvtools.net",111],["vlist.se",112],["pornve.com",113],["coolrom.com.au",114],["bitcotasks.com",114],["pornohirsch.net",115],["marie-claire.es",116],["gamezhero.com",116],["flashgirlgames.com",116],["onlinesudoku.games",116],["mpg.football",116],["sssam.com",116],["globalnews.ca",117],["drinksmixer.com",118],["leitesculinaria.com",118],["fupa.net",119],["ge-map-overlays.appspot.com",120],["browardpalmbeach.com",121],["dallasobserver.com",121],["houstonpress.com",121],["miaminewtimes.com",121],["phoenixnewtimes.com",121],["westword.com",121],["nhentai.net",122],["fox.com.tr",123],["caminspector.net",124],["camwhoreshd.com",124],["camgoddess.tv",124],["gay4porn.com",126],["mypornhere.com",126],["mediapason.it",127],["linkspaid.com",127],["tuotromedico.com",127],["neoteo.com",127],["phoneswiki.com",127],["celebmix.com",127],["myneobuxportal.com",127],["oyungibi.com",127],["25yearslatersite.com",127],["jeshoots.com",128],["techhx.com",128],["karanapk.com",128],["videogreen.xyz",129],["sypl.xyz",129],["playembed.xyz",129],["javhdporn.net",129],["redanimedatabase.cloud",129],["javstream.top",129],["flashplayer.fullstacks.net",131],["cloudapps.herokuapp.com",131],["youfiles.herokuapp.com",131],["smallseotools.com",132],["temp-mail.org",133],["comnuan.com",134],["veedi.com",135],["battleboats.io",135],["fruitlab.com",136],["haddoz.net",136],["garoetpos.com",136],["stiletv.it",137],["hpav.tv",138],["hpjav.tv",138],["hqtv.biz",140],["liveuamap.com",141],["filmiseriali.com",141],["muvibg.com",141],["linksht.com",[142,143]],["audycje.tokfm.pl",144],["hulu.com",[145,146,147]],["shush.se",148],["aniwatcher.com",149],["emurom.net",150],["allkpop.com",151],["azmath.info",152],["downfile.site",152],["downphanmem.com",152],["expertvn.com",152],["memangbau.com",152],["scratch247.info",152],["trangchu.news",152],["adfoc.us",152],["mynewsmedia.co",[152,240]],["techacode.com",152],["sahlmarketing.net",152],["sptfy.be",152],["streamcheck.link",152],["mcafee-com.com",[152,373]],["digiclown.com",152],["sattanewss.com",152],["kejriwalyojana.com",152],["netflixrelease.com",152],["mydomainscan.com",152],["tplrunapk.com",152],["abhayaby.com",152],["tinsukiacollege.org",152],["filmy4wab.pro",152],["pmsarkarijob.com",152],["jomeramankahe.in",152],["globlenews.in",152],["rontymobile.in",152],["pickcrackpasswords.blogspot.com",154],["kfrfansub.com",155],["thuglink.com",155],["voipreview.org",155],["audiotag.info",156],["hanime.tv",157],["pogo.com",158],["cloudvideo.tv",159],["legionjuegos.org",160],["legionpeliculas.org",160],["legionprogramas.org",160],["16honeys.com",161],["elespanol.com",162],["remodelista.com",163],["coolmathgames.com",[164,165,166,489]],["audiofanzine.com",167],["noweconomy.live",169],["howifx.com",169],["vavada5com.com",169],["hitokin.net",170],["elil.cc",171],["developerinsider.co",172],["ilprimatonazionale.it",173],["hotabis.com",173],["root-nation.com",173],["italpress.com",173],["airsoftmilsimnews.com",173],["artribune.com",173],["thehindu.com",174],["cambro.tv",[175,176]],["nibelungen-kurier.de",177],["noz.de",178],["earthgarage.com",180],["pianetamountainbike.it",181],["barchart.com",182],["modelisme.com",183],["parasportontario.ca",183],["prescottenews.com",183],["nrj-play.fr",184],["oeffentlicher-dienst.info",185],["hackingwithreact.com",186],["gutekueche.at",187],["eplfootballmatch.com",188],["peekvids.com",189],["playvids.com",189],["pornflip.com",189],["redensarten-index.de",190],["vw-page.com",191],["viz.com",[192,193]],["queenfaucet.website",194],["0rechner.de",195],["configspc.com",196],["xopenload.me",196],["uptobox.com",196],["uptostream.com",196],["onepiece-tube.com",197],["japgay.com",198],["mega-debrid.eu",199],["dreamdth.com",200],["pijanitvor.com",200],["diaridegirona.cat",203],["diariodeibiza.es",203],["diariodemallorca.es",203],["diarioinformacion.com",203],["eldia.es",203],["emporda.info",203],["farodevigo.es",203],["laopinioncoruna.es",203],["laopiniondemalaga.es",203],["laopiniondemurcia.es",203],["laopiniondezamora.es",203],["laprovincia.es",203],["levante-emv.com",203],["mallorcazeitung.es",203],["regio7.cat",203],["superdeporte.es",203],["playpaste.com",204],["player.rtl2.de",205],["freetutorialsus.com",206],["vidlii.com",[206,222]],["iammagnus.com",206],["dailyvideoreports.net",206],["unityassets4free.com",206],["cnbc.com",207],["puzzles.msn.com",208],["metro.us",208],["newsobserver.com",208],["arkadiumhosted.com",208],["spankbang.com",209],["firefaucet.win",210],["55k.io",211],["filelions.online",211],["direct-link.net",212],["direkt-wissen.com",212],["link-to.net",212],["fullhdxxx.com",214],["getintopc.com",215],["unique-tutorials.info",215],["etonline.com",216],["creatur.io",216],["drphil.com",216],["urbanmilwaukee.com",216],["ontiva.com",216],["hideandseek.world",216],["myabandonware.com",216],["mangaalarab.com",216],["kendam.com",216],["wttw.com",216],["synonyms.com",216],["definitions.net",216],["hostmath.com",216],["camvideoshub.com",216],["minhaconexao.com.br",216],["bravedown.com",216],["home-made-videos.com",218],["pxrnxx.xyz",218],["amateur-couples.com",218],["slutdump.com",218],["produsat.com",220],["12thman.com",222],["acusports.com",222],["atlantic10.com",222],["auburntigers.com",222],["baylorbears.com",222],["bceagles.com",222],["bgsufalcons.com",222],["big12sports.com",222],["bigten.org",222],["bradleybraves.com",222],["butlersports.com",222],["cmumavericks.com",222],["conferenceusa.com",222],["cyclones.com",222],["dartmouthsports.com",222],["daytonflyers.com",222],["dbupatriots.com",222],["dbusports.com",222],["denverpioneers.com",222],["fduknights.com",222],["fgcuathletics.com",222],["fightinghawks.com",222],["fightingillini.com",222],["floridagators.com",222],["friars.com",222],["friscofighters.com",222],["gamecocksonline.com",222],["goarmywestpoint.com",222],["gobison.com",222],["goblueraiders.com",222],["gobobcats.com",222],["gocards.com",222],["gocreighton.com",222],["godeacs.com",222],["goexplorers.com",222],["goetbutigers.com",222],["gofrogs.com",222],["gogriffs.com",222],["gogriz.com",222],["golobos.com",222],["gomarquette.com",222],["gopack.com",222],["gophersports.com",222],["goprincetontigers.com",222],["gopsusports.com",222],["goracers.com",222],["goshockers.com",222],["goterriers.com",222],["gotigersgo.com",222],["gousfbulls.com",222],["govandals.com",222],["gowyo.com",222],["goxavier.com",222],["gozags.com",222],["gozips.com",222],["griffinathletics.com",222],["guhoyas.com",222],["gwusports.com",222],["hailstate.com",222],["hamptonpirates.com",222],["hawaiiathletics.com",222],["hokiesports.com",222],["huskers.com",222],["icgaels.com",222],["iuhoosiers.com",222],["jsugamecocksports.com",222],["longbeachstate.com",222],["loyolaramblers.com",222],["lrtrojans.com",222],["lsusports.net",222],["morrisvillemustangs.com",222],["msuspartans.com",222],["muleriderathletics.com",222],["mutigers.com",222],["navysports.com",222],["nevadawolfpack.com",222],["niuhuskies.com",222],["nkunorse.com",222],["nuhuskies.com",222],["nusports.com",222],["okstate.com",222],["olemisssports.com",222],["omavs.com",222],["ovcsports.com",222],["owlsports.com",222],["purduesports.com",222],["redstormsports.com",222],["richmondspiders.com",222],["sfajacks.com",222],["shupirates.com",222],["siusalukis.com",222],["smcgaels.com",222],["smumustangs.com",222],["soconsports.com",222],["soonersports.com",222],["themw.com",222],["tulsahurricane.com",222],["txst.com",222],["txstatebobcats.com",222],["ubbulls.com",222],["ucfknights.com",222],["ucirvinesports.com",222],["uconnhuskies.com",222],["uhcougars.com",222],["uicflames.com",222],["umterps.com",222],["uncwsports.com",222],["unipanthers.com",222],["unlvrebels.com",222],["uoflsports.com",222],["usdtoreros.com",222],["utahstateaggies.com",222],["utepathletics.com",222],["utrockets.com",222],["uvmathletics.com",222],["uwbadgers.com",222],["villanova.com",222],["wkusports.com",222],["wmubroncos.com",222],["woffordterriers.com",222],["1pack1goal.com",222],["bcuathletics.com",222],["bubraves.com",222],["goblackbears.com",222],["golightsgo.com",222],["gomcpanthers.com",222],["goutsa.com",222],["mercerbears.com",222],["pirateblue.com",222],["pirateblue.net",222],["pirateblue.org",222],["quinnipiacbobcats.com",222],["towsontigers.com",222],["tribeathletics.com",222],["tribeclub.com",222],["utepminermaniacs.com",222],["utepminers.com",222],["wkutickets.com",222],["aopathletics.org",222],["atlantichockeyonline.com",222],["bigsouthnetwork.com",222],["bigsouthsports.com",222],["chawomenshockey.com",222],["dbupatriots.org",222],["drakerelays.org",222],["ecac.org",222],["ecacsports.com",222],["emueagles.com",222],["emugameday.com",222],["gculopes.com",222],["godrakebulldog.com",222],["godrakebulldogs.com",222],["godrakebulldogs.net",222],["goeags.com",222],["goislander.com",222],["goislanders.com",222],["gojacks.com",222],["gomacsports.com",222],["gseagles.com",222],["hubison.com",222],["iowaconference.com",222],["ksuowls.com",222],["lonestarconference.org",222],["mascac.org",222],["midwestconference.org",222],["mountaineast.org",222],["niu-pack.com",222],["nulakers.ca",222],["oswegolakers.com",222],["ovcdigitalnetwork.com",222],["pacersports.com",222],["rmacsports.org",222],["rollrivers.com",222],["samfordsports.com",222],["uncpbraves.com",222],["usfdons.com",222],["wiacsports.com",222],["alaskananooks.com",222],["broncathleticfund.com",222],["cameronaggies.com",222],["columbiacougars.com",222],["etownbluejays.com",222],["gobadgers.ca",222],["golancers.ca",222],["gometrostate.com",222],["gothunderbirds.ca",222],["kentstatesports.com",222],["lehighsports.com",222],["lopers.com",222],["lycoathletics.com",222],["lycomingathletics.com",222],["maraudersports.com",222],["mauiinvitational.com",222],["msumavericks.com",222],["nauathletics.com",222],["nueagles.com",222],["nwusports.com",222],["oceanbreezenyc.org",222],["patriotathleticfund.com",222],["pittband.com",222],["principiaathletics.com",222],["roadrunnersathletics.com",222],["sidearmsocial.com",222],["snhupenmen.com",222],["stablerarena.com",222],["stoutbluedevils.com",222],["uwlathletics.com",222],["yumacs.com",222],["collegefootballplayoff.com",222],["csurams.com",222],["cubuffs.com",222],["gobearcats.com",222],["gohuskies.com",222],["mgoblue.com",222],["osubeavers.com",222],["pittsburghpanthers.com",222],["rolltide.com",222],["texassports.com",222],["thesundevils.com",222],["uclabruins.com",222],["wvuathletics.com",222],["wvusports.com",222],["arizonawildcats.com",222],["calbears.com",222],["cuse.com",222],["georgiadogs.com",222],["goducks.com",222],["goheels.com",222],["gostanford.com",222],["insidekstatesports.com",222],["insidekstatesports.info",222],["insidekstatesports.net",222],["insidekstatesports.org",222],["k-stateathletics.com",222],["k-statefootball.net",222],["k-statefootball.org",222],["k-statesports.com",222],["k-statesports.net",222],["k-statesports.org",222],["k-statewomenshoops.com",222],["k-statewomenshoops.net",222],["k-statewomenshoops.org",222],["kstateathletics.com",222],["kstatefootball.net",222],["kstatefootball.org",222],["kstatesports.com",222],["kstatewomenshoops.com",222],["kstatewomenshoops.net",222],["kstatewomenshoops.org",222],["ksuathletics.com",222],["ksusports.com",222],["scarletknights.com",222],["showdownforrelief.com",222],["syracusecrunch.com",222],["texastech.com",222],["theacc.com",222],["ukathletics.com",222],["usctrojans.com",222],["utahutes.com",222],["utsports.com",222],["wsucougars.com",222],["mangadods.com",222],["tricksplit.io",222],["litecoinads.com",222],["fangraphs.com",223],["4players.de",[224,294]],["buffed.de",224],["gamesaktuell.de",224],["gamezone.de",224],["pcgames.de",224],["videogameszone.de",224],["planetaminecraft.com",225],["flyad.vip",226],["lapresse.ca",227],["kolyoom.com",228],["ilovephd.com",228],["upstream.to",229],["negumo.com",230],["games.wkb.jp",[231,232]],["channelmyanmar.org",[233,234]],["u-s-news.com",234],["fandom.com",[235,507,508]],["kenshi.fandom.com",236],["hausbau-forum.de",237],["fake-it.ws",238],["laksa19.github.io",239],["revadvert.com",240],["1shortlink.com",241],["nesia.my.id",242],["makemoneywithurl.com",243],["resetoff.pl",244],["sexodi.com",244],["cdn77.org",245],["howtofixwindows.com",246],["3sexporn.com",247],["momxxxsex.com",247],["myfreevintageporn.com",247],["penisbuyutucum.net",247],["lightnovelworld.com",248],["ujszo.com",249],["newsmax.com",250],["bobs-tube.com",251],["nadidetarifler.com",252],["siz.tv",252],["suzylu.co.uk",[253,254]],["onworks.net",255],["yabiladi.com",255],["homeairquality.org",257],["faucettronn.click",257],["downloadsoft.net",258],["imgair.net",259],["imgblaze.net",259],["imgfrost.net",259],["pixsera.net",259],["vestimage.site",259],["imgwia.buzz",259],["testlanguages.com",260],["newsinlevels.com",260],["videosinlevels.com",260],["arcai.com",261],["my-code4you.blogspot.com",262],["vlxxs.net",263],["rapelust.com",263],["vtube.to",263],["vtplay.net",263],["desitelugusex.com",263],["xvideos-downloader.net",263],["xxxvideotube.net",263],["sdefx.cloud",263],["nozomi.la",263],["moviesonlinefree.net",263],["flickr.com",264],["firefile.cc",265],["pestleanalysis.com",265],["kochamjp.pl",265],["tutorialforlinux.com",265],["whatsaero.com",265],["animeblkom.net",[265,281]],["blkom.com",265],["globes.co.il",[266,267]],["jardiner-malin.fr",268],["tw-calc.net",269],["ohmybrush.com",270],["talkceltic.net",271],["zdam.xyz",272],["mentalfloss.com",273],["uprafa.com",274],["cube365.net",275],["nightfallnews.com",[276,277]],["wwwfotografgotlin.blogspot.com",278],["freelistenonline.com",278],["badassdownloader.com",279],["quickporn.net",280],["aosmark.com",282],["theappstore.org",282],["atozmath.com",[283,284,285,286,287,288,289]],["newyorker.com",290],["brighteon.com",291],["more.tv",292],["video1tube.com",293],["alohatube.xyz",293],["link.cgtips.org",295],["hentaicloud.com",296],["netfapx.com",298],["paperzonevn.com",300],["hentaienglish.com",301],["hentaiporno.xxx",301],["venge.io",[302,303]],["btcbux.io",304],["its.porn",[305,306]],["atv.at",307],["2ndrun.tv",308],["rackusreads.com",308],["exerror.com",308],["temp-phone-number.com",309],["jetpunk.com",311],["imgur.com",312],["hentai-party.com",313],["hentaicomics.pro",313],["xxx-comics.pro",313],["genshinimpactcalculator.com",316],["mysexgames.com",317],["embed.indavideo.hu",320],["coinurl.net",[321,322]],["gdr-online.com",323],["mmm.dk",324],["iqiyi.com",[325,326]],["m.iqiyi.com",327],["japopav.tv",328],["lvturbo.com",328],["nbcolympics.com",329],["apkhex.com",330],["indiansexstories2.net",331],["issstories.xyz",331],["1340kbbr.com",332],["gorgeradio.com",332],["kduk.com",332],["kedoam.com",332],["kejoam.com",332],["kelaam.com",332],["khsn1230.com",332],["kjmx.rocks",332],["kloo.com",332],["klooam.com",332],["klykradio.com",332],["kmed.com",332],["kmnt.com",332],["kool991.com",332],["kpnw.com",332],["kppk983.com",332],["krktcountry.com",332],["ktee.com",332],["kwro.com",332],["kxbxfm.com",332],["thevalley.fm",332],["dsocker1234.blogspot.com",333],["surfline.com",[334,353]],["blick.ch",335],["mgnet.xyz",336],["designtagebuch.de",337],["pixroute.com",338],["calculator-online.net",339],["porngames.club",340],["sexgames.xxx",340],["111.90.159.132",341],["battleplan.news",341],["mobile-tracker-free.com",342],["pfps.gg",343],["ac-illust.com",[344,345]],["photo-ac.com",[344,345]],["social-unlock.com",346],["ninja.io",347],["sourceforge.net",348],["samfirms.com",349],["banned.video",350],["conspiracyfact.info",350],["freeworldnews.tv",350],["madmaxworld.tv",350],["huffpost.com",351],["ingles.com",352],["spanishdict.com",352],["play.tv3.ee",354],["trendyoum.com",355],["bulbagarden.net",356],["doomovie-hd.com",357],["madoohd.com",357],["moviestars.to",358],["hollywoodlife.com",359],["searchresults.cc",360],["mat6tube.com",361],["textstudio.co",362],["newtumbl.com",363],["nevcoins.club",365],["mail.com",366],["erome.com",369],["oggi.it",[370,371]],["manoramamax.com",370],["video.gazzetta.it",[370,371]],["mangakita.net",372],["allcryptoz.net",373],["crewbase.net",373],["phineypet.com",373],["shinbhu.net",373],["talkforfitness.com",373],["mdn.lol",373],["carsmania.net",373],["carstopia.net",373],["coinsvalue.net",373],["cookinguide.net",373],["freeoseocheck.com",373],["makeupguide.net",373],["btcbitco.in",373],["btcsatoshi.net",373],["cempakajaya.com",373],["crypto4yu.com",373],["readbitcoin.org",373],["wiour.com",373],["exactpay.online",373],["avpgalaxy.net",374],["mhma12.tech",375],["panda-novel.com",376],["zebranovel.com",376],["lightsnovel.com",376],["eaglesnovel.com",376],["pandasnovel.com",376],["zadfaucet.com",377],["ewrc-results.com",378],["kizi.com",379],["cyberscoop.com",380],["fedscoop.com",380],["canale.live",381],["loawa.com",382],["ygosu.com",382],["sportalkorea.com",382],["algumon.com",382],["hancinema.net",382],["enetnews.co.kr",382],["edaily.co.kr",382],["economist.co.kr",382],["etoday.co.kr",382],["hankyung.com",382],["isplus.com",382],["hometownstation.com",382],["kagit.kr",382],["inven.co.kr",382],["viva100.com",382],["joongdo.co.kr",382],["jjang0u.com",382],["tenbizt.com",382],["tvreport.co.kr",382],["newautopost.co.kr",382],["mememedia.co.kr",382],["mobilitytv.co.kr",382],["cboard.net",382],["mafiatown.pl",[383,384]],["jeep-cj.com",385],["sponsorhunter.com",386],["coinscap.info",387],["cryptowidgets.net",387],["greenenez.com",387],["insurancegold.in",387],["webfreetools.net",387],["wiki-topia.com",387],["blog.carsmania.net",387],["blog.carstopia.net",387],["blog.coinsvalue.net",387],["blog.cookinguide.net",387],["blog.freeoseocheck.com",387],["blog.makeupguide.net",387],["rapid-cloud.co",387],["cloudcomputingtopics.net",388],["likecs.com",389],["tiscali.it",390],["linkspy.cc",391],["tutelehd3.xyz",392],["dirty.pink",[393,394,395]],["adshnk.com",396],["chattanoogan.com",397],["adsy.pw",398],["playstore.pw",398],["socialmediagirls.com",399],["windowspro.de",400],["snapinsta.app",401],["tvtv.ca",402],["tvtv.us",402],["mydaddy.cc",403],["roadtrippin.fr",404],["redketchup.io",[405,406,407]],["anyporn.com",[408,422]],["bravoporn.com",408],["bravoteens.com",408],["crocotube.com",408],["hellmoms.com",408],["hellporno.com",408],["sex3.com",408],["tubewolf.com",408],["xbabe.com",408],["xcum.com",408],["zedporn.com",408],["imagetotext.info",409],["infokik.com",410],["freepik.com",411],["ddwloclawek.pl",[412,413]],["deezer.com",414],["my-subs.co",415],["plaion.com",416],["slideshare.net",[417,418]],["ustreasuryyieldcurve.com",419],["businesssoftwarehere.com",420],["goo.st",420],["freevpshere.com",420],["softwaresolutionshere.com",420],["staige.tv",423],["bondagevalley.cc",424],["androidadult.com",425],["streamvid.net",426],["watchtv24.com",427],["cellmapper.net",428],["medscape.com",429],["newscon.org",430],["arkadium.com",431],["app.blubank.com",433],["lifesurance.info",434],["sportdeutschland.tv",435],["kcra.com",435],["wcvb.com",435],["kusonime.com",436],["chromeready.com",438],["coursedrive.org",438],["dtbps3games.com",438],["vod.pl",439],["megadrive-emulator.com",440],["animesaga.in",443],["bestx.stream",443],["moviesapi.club",443],["digimanie.cz",444],["svethardware.cz",444],["srvy.ninja",445],["drawer-opportunity-i-243.site",446],["tchatche.com",447],["ozulmanga.com",448],["edmdls.com",449],["freshremix.net",449],["scenedl.org",449],["trakt.tv",[450,451,452]],["shroomers.app",453],["di.fm",[454,455,456]],["qtoptens.com",457],["reuters.com",457],["today.com",457],["videogamer.com",457],["wrestlinginc.com",457],["techedubyte.com",458],["quesignifi.ca",459],["movie-th.tv",460],["iwanttfc.com",461],["nutraingredients-asia.com",462],["nutraingredients-latam.com",462],["nutraingredients-usa.com",462],["nutraingredients.com",462],["beastplayer.tk",463],["livesportsclub.pages.dev",463],["madlink.biz",463],["ozulscansen.com",464],["fitnessbr.click",465],["minhareceita.xyz",465],["doomied.monster",466],["lookmovie2.to",466],["appsbull.com",467],["diudemy.com",467],["maqal360.com",467],["teamskeet.com",468],["tacobell.com",470],["webtoons.com",[471,472]],["zefoy.com",473],["natgeotv.com",475],["br.de",476],["pasteboard.co",477],["avclub.com",478],["clickhole.com",478],["deadspin.com",478],["gizmodo.com",478],["jalopnik.com",478],["jezebel.com",478],["kotaku.com",478],["lifehacker.com",478],["splinternews.com",478],["theinventory.com",478],["theonion.com",478],["theroot.com",478],["thetakeout.com",478],["pewresearch.org",478],["los40.com",[479,480]],["telegraph.co.uk",[481,482]],["poweredbycovermore.com",[481,527]],["verizon.com",483],["humanbenchmark.com",484],["politico.com",485],["officedepot.co.cr",[486,487]],["usnews.com",488],["factable.com",490],["zee5.com",491],["gala.fr",492],["geo.fr",492],["voici.fr",492],["gloucestershirelive.co.uk",493],["arsiv.mackolik.com",494],["jacksonguitars.com",495],["scandichotels.com",496],["stylist.co.uk",497],["nettiauto.com",498],["thaiairways.com",[499,500]],["cerbahealthcare.it",[501,502]],["futura-sciences.com",[501,517]],["tiendaenlinea.claro.com.ni",[503,504]],["tieba.baidu.com",505],["linktr.ee",506],["grasshopper.com",[509,510]],["epson.com.cn",[511,512]],["oe24.at",[513,514]],["szbz.de",513],["platform.autods.com",[515,516]],["wikihow.com",518],["citibank.com.sg",519],["uol.com.br",[520,521,522,523]],["gazzetta.gr",524],["digicol.dpm.org.cn",[525,526]],["virginmediatelevision.ie",528],["larazon.es",[529,530]],["waitrosecellar.com",[531,532,533]],["kicker.de",534],["dropgalaxy.co",535],["dropgalaxy.com",535]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",26],["123link",27],["adshort",27],["linkshorts",27],["adsrt",27],["vinaurl",27],["adfloz",27],["dutchycorp",27],["shortearn",27],["pingit",27],["urlty",27],["seulink",27],["shrink",27],["clk",27],["tmearn",27],["megalink",27],["miniurl",27],["pcprogramasymas",27],["link1s",27],["shortzzy",27],["shorttey",[27,216]],["lite-link",27],["pureshort",27],["adcorto",27],["zshort",27],["upfiles",27],["linkfly",27],["wplink",27],["financerites",27],["camwhores",[28,39,91,92,93]],["tube8",[29,30]],["youporn",30],["redtube",30],["pornhub",[30,201,202]],["xtits",[55,126]],["streamwish",[57,58]],["pouvideo",65],["povvideo",65],["povw1deo",65],["povwideo",65],["powv1deo",65],["powvibeo",65],["powvideo",65],["powvldeo",65],["acortalo",[70,71,72,73]],["acortar",[70,71,72,73]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["linkberuang",89],["kickassanime",94],["subtorrents",96],["subtorrents1",96],["newpelis",96],["pelix",96],["allcalidad",96],["infomaniakos",96],["filecrypt",100],["tornadomovies",101],["sexwebvideo",106],["mangovideo",106],["icdrama",112],["mangasail",112],["file4go",114],["asianclub",129],["anitube",136],["mixdrop",139],["azsoft",152],["uploadev",168],["ver-pelis-online",179],["ancient-origins",188],["lookcam",216],["lootlinks",216],["dpstream",219],["bluemediafiles",221],["docer",244],["pixlev",259],["skymovieshd",263],["dvdplay",263],["crackstreams",299],["123movieshd",310],["uproxy",314],["animesa",315],["cinecalidad",[318,319]],["apkmaven",364],["gmx",367],["gamereactor",421],["terabox",432],["tvhay",[441,442]],["lookmovie",466],["www.google",469]]);

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
                try { cValue = safe.jsonParse(cValue).value; } catch(ex) { return; }
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
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
