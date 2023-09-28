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

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["initials.yld-pdpopunder",""],["xRds","false"],["tRds","true"],["console.clear","noopFunc"],["String.fromCharCode","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["console.clear","undefined"],["attachEvent","trueFunc"],["hasAdBlocker","false"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["sadbl","false"],["adblockcheck","false"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["detectAdBlock","noopFunc"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["ifmax","true"],["spoof","noopFunc"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["atob","noopFunc"],["CaptchmeState.adb","undefined"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["isAdsDisplayed","true"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["ad_permission","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["ads_js_was_loaded","true"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["clientSide.adbDetect","noopFunc"],["sec","0"],["gadb","false"],["eyshy_start","false"],["checkadBlock","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["checkdom","0"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["counter","0"],["window_focus","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["daganKwarta","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["Global.adv","undefined"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["ads_blocked","0"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["nozNoAdBlock","true"],["decodeURIComponent","trueFunc"],["process","noopFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["HTMLElement.prototype.attachShadow","null"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["pqdxwidthqt","false"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["cRAds","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["checkAdsBlocked","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["AdBlockerDetected","noopFunc"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["fouty","true"],["detectAdblock","noopFunc"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["Object.prototype.m_nLastTimeAdBlock","undefined"],["config.pauseInspect","false"],["D4zz","noopFunc"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["sems","noopFunc"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["runAdblock","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["DHAntiAdBlocker","true"],["db.onerror","noopFunc"],["p18","undefined"],["asc","1"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["new_config.timedown","0"],["timedisplay","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["adSettings","[]"],["count","1"],["Object.prototype.enableInterstitial","false"],["check","noopFunc"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["tiPopAction","noopFunc"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["document.hasFocus","trueFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["dable","{}"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["navigator.brave","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["makeMoney","true"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["Object.prototype.isAllAdClose","true"],["navigator.standalone","true"],["showAdss","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["window.showAds","true"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["checkAdBlocker","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["checkAdsStatus","noopFunc"],["waitTime","0"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["$.tstracker","noopFunc"],["rwt","noopFunc"],["bmak.js_post","false"],["ccsrv",""],["lcs_SerName",""],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT","{}"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["isAdblockActive","false"],["cockieConsentManagement","noopFunc"]];

const hostnamesMap = new Map([["youtube.com",[0,1,2,3]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["t-online.de",4],["whatfinger.com",5],["timesofindia.indiatimes.com",6],["economictimes.indiatimes.com",7],["userscloud.com",8],["motherless.com",9],["sueddeutsche.de",10],["watson.de",10],["watchanimesub.net",11],["wco.tv",11],["wcoanimesub.tv",11],["wcoforever.net",11],["filehorse.com",11],["guidetnt.com",11],["sp-today.com",11],["linkvertise.com",11],["textbin.net",11],["eropaste.com",11],["pastebr.xyz",11],["getpaste.link",11],["sharetext.me",11],["note.sieuthuthuat.com",11],["elcriticodelatele.com",[11,309]],["gadgets.es",[11,309]],["amateurporn.co",[11,106]],["wiwo.de",12],["masteranime.es",13],["fullxh.com",14],["megaxh.com",14],["unlockxh4.com",14],["xhadult2.com",14],["xhadult3.com",14],["xhadult4.com",14],["xhadult5.com",14],["xhamster46.com",14],["xhday.com",14],["xhday1.com",14],["xhmoon5.com",14],["xhplanet1.com",14],["xhplanet2.com",14],["xhreal2.com",14],["xhreal3.com",14],["xhtab2.com",14],["xhvictory.com",14],["xhwebsite.com",14],["xhwebsite2.com",14],["xhwide1.com",14],["xhwide8.com",14],["alphaporno.com",[17,409]],["porngem.com",17],["uploadbank.com",17],["shortit.pw",[17,109]],["familyporn.tv",17],["cloudemb.com",[17,329]],["sbplay1.com",17],["swatchseries.ru",17],["id45.cyou",17],["85tube.com",[17,92]],["pobre.tv",17],["k1nk.co",17],["watchasians.cc",17],["photopea.com",17],["imsdb.pw",[17,26]],["soltoshindo.com",17],["techtimes.com",18],["dronedj.com",20],["freeplayervideo.com",21],["nazarickol.com",21],["player-cdn.com",21],["strawberriesporail.com",21],["voe.sx",21],["housecardsummerbutton.com",21],["bigclatterhomesguideservice.com",21],["uptodatefinishconference.com",21],["uptodatefinishconferenceroom.com",21],["tinycat-voe-fashion.com",21],["motphimtv.com",21],["rabbitstream.net",21],["streamlare.com",21],["projectfreetv.one",21],["nolive.me",22],["cbs.com",23],["paramountplus.com",23],["player.glomex.com",24],["merkur.de",24],["tz.de",24],["hotpornfile.org",26],["rpdrlatino.live",26],["video.q34r.org",26],["czxxx.org",26],["adbull.org",27],["mitly.us",27],["linkrex.net",27],["linx.cc",27],["oke.io",27],["dz4link.com",27],["linclik.com",27],["shrt10.com",27],["loptelink.com",27],["cut-fly.com",27],["linkfinal.com",27],["payskip.org",27],["cutpaid.com",27],["forexmab.com",27],["linkjust.com",27],["linkszia.co",27],["leechpremium.link",27],["icutlink.com",[27,131]],["stfly.me",27],["oncehelp.com",27],["bit-url.com",27],["rgl.vn",27],["reqlinks.net",27],["bitlk.com",27],["qlinks.eu",27],["link.3dmili.com",27],["short-fly.com",27],["foxseotools.com",27],["pngit.live",27],["link.turkdown.com",27],["slink.bid",[27,74]],["earnwithshortlink.com",27],["7r6.com",27],["enrt.eu",27],["oko.sh",27],["shortpaid.com",27],["ckk.ai",27],["fc.lc",27],["fstore.biz",27],["cuts-url.com",27],["eio.io",27],["exe.app",27],["exee.io",27],["exey.io",27],["srek.net",27],["skincarie.com",27],["exeo.app",27],["birdurls.com",27],["coinlyhub.com",[27,218]],["adsafelink.com",27],["aii.sh",27],["shrinkurl.org",27],["adsh.cc",27],["cybertechng.com",[27,227]],["owllink.net",27],["fir3.net",27],["cutdl.xyz",27],["gplinks.co",27],["loan2host.com",27],["tei.ai",27],["tii.ai",27],["iir.ai",27],["shorteet.com",[27,248]],["sekilastekno.com",27],["promo-visits.site",27],["satoshi-win.xyz",[27,257]],["shorterall.com",27],["smoner.com",27],["bitlinks.pw",27],["linkad.in",27],["linkshrnk.com",27],["popimed.com",27],["linksly.co",27],["shrinkme.in",27],["rodjulian.com",27],["pkr.pw",27],["shrinke.me",27],["imagenesderopaparaperros.com",27],["shortenbuddy.com",27],["gibit.xyz",27],["apksvip.com",27],["cashurl.in",27],["4cash.me",27],["namaidani.com",27],["bitfly.io",27],["teknomuda.com",27],["illink.net",27],["miuiku.com",27],["yourtechnology.online",27],["savelink.site",27],["fxlap.com",27],["earnfasts.com",27],["tawiia.com",27],["droplink.co",27],["recipestutorials.com",27],["2shrt.com",27],["apkshrt.com",27],["genpassword.top",27],["srts.me",27],["kutmoney.com",27],["kutt.io",27],["sanoybonito.club",27],["samaa-pro.com",27],["miklpro.com",27],["modapk.link",27],["shrinkforearn.in",27],["1shorten.com",27],["ccurl.net",27],["st23q.com",27],["beautyram.info",27],["gonety.com",27],["viraloc.com",27],["clickscoin.com",27],["forex-trnd.com",27],["kiiw.icu",27],["vshort.link",27],["galaxy-link.space",27],["linkpoi.me",27],["usdshort.com",27],["bitcoinly.in",27],["menjelajahi.com",27],["pewgame.com",27],["yxoshort.com",27],["1link.vip",27],["haonguyen.top",27],["jameeltips.us",27],["claimfreebits.com",27],["crazyblog.in",27],["gtlink.co",27],["link.tokenoto.com",27],["cutearn.net",27],["rshrt.com",27],["jp88.xyz",27],["short.palmeratv.com",27],["filezipa.com",27],["arab-chat.club",27],["dz-linkk.com",27],["theblissempire.com",27],["shortlink.prz.pw",27],["zipurls.com",27],["finanzas-vida.com",27],["adurly.cc",27],["pix4link.com",27],["paid4.link",27],["ez4short.com",27],["link.asiaon.top",27],["go.gets4link.com",27],["download.sharenulled.net",27],["enagato.com",27],["linkres.in",27],["webo.one",27],["automotur.club",27],["pandarticles.com",27],["beingtek.com",27],["katflys.com",27],["shorturl.unityassets4free.com",27],["disheye.com",27],["techymedies.com",27],["techysuccess.com",27],["toptap.website",[27,335]],["za.gl",[27,154]],["newsalret.com",27],["download.baominh.tech",27],["bblink.com",27],["abre.click",27],["linkbr.xyz",27],["myad.biz",27],["try2link.com",27],["swzz.xyz",27],["vevioz.com",27],["charexempire.com",27],["clk.asia",27],["rancah.com",27],["egfly.xyz",27],["linka.click",27],["sturls.com",27],["myshrinker.com",27],["go.adinsurance.xyz",27],["dash-free.com",[27,227]],["rainurl.com",[27,227]],["snowurl.com",[27,227]],["netfile.cc",27],["link.insurance-space.xyz",27],["link.insurglobal.xyz",27],["theconomy.me",27],["rajsayt.xyz",27],["rocklink.in",27],["linkshortify.site",27],["adinsurance.xyz",27],["insurglobal.xyz",27],["techgeek.digital",27],["download3s.net",27],["shortx.net",27],["musicc.xyz",27],["cutx.me",27],["btcwalk.com",27],["cryptoon.xyz",27],["easysky.in",27],["veganab.co",27],["shortawy.com",27],["tlin.me",27],["apprepack.com",27],["sh2rt.com",27],["up-load.one",27],["zuba.link",27],["pandaznetwork.com",27],["du-link.in",27],["linksfy.co",27],["news.speedynews.xyz",27],["adrinolinks.in",27],["golink.xaydungplus.com",27],["bestcash2020.com",27],["cut-y.net",27],["hoxiin.com",27],["technemo.xyz",27],["baicho.xyz",27],["go.linkbnao.com",27],["link-yz.com",27],["paylinnk.com",27],["thizissam.in",27],["ier.ai",27],["bloggertheme.xyz",27],["adslink.pw",27],["enit.in",[27,244]],["oii.io",27],["novelssites.com",27],["links.medipost.org",27],["upshrink.com",27],["faucetcrypto.net",27],["short.freeltc.top",27],["trxking.xyz",27],["weadown.com",27],["cookdov.com",27],["xpshort.com",27],["bdnewsx.com",27],["m.bloggingguidance.com",27],["blog.onroid.com",27],["cutty.app",27],["link.codevn.net",27],["upfilesurls.com",27],["shareus.site",27],["link4rev.site",27],["bloginguru.xyz",27],["tii.la",27],["celinks.net",27],["c2g.at",27],["atglinks.com",27],["shortzu.icu",27],["bitcosite.com",27],["cryptosh.pro",27],["sigmalinks.in",27],["link68.net",27],["traffic123.net",27],["gainl.ink",27],["windowslite.net",[27,227]],["coinsl.click",27],["exalink.fun",27],["short2url.xyz",27],["exego.app",27],["panyshort.link",27],["viewfr.com",27],["easycut.io",27],["watchmygf.me",[28,53]],["fpo.xxx",[28,55]],["sexemix.com",28],["heavyfetish.com",[28,473]],["you-porn.com",30],["youporngay.com",30],["youpornru.com",30],["9908ww.com",30],["adelaidepawnbroker.com",30],["bztube.com",30],["hotovs.com",30],["insuredhome.org",30],["nudegista.com",30],["pornluck.com",30],["vidd.se",30],["pornhub.com",30],["pornerbros.com",31],["freep.com",31],["porn.com",32],["tune.pk",33],["noticias.gospelmais.com.br",34],["techperiod.com",34],["jacquieetmicheltv.net",[35,36]],["illicoporno.com",35],["lavoixdux.com",35],["tonpornodujour.com",35],["jacquieetmichel.net",35],["swame.com",35],["vosfemmes.com",35],["voyeurfrance.net",35],["viki.com",[37,38]],["sleazyneasy.com",[39,40,41]],["smutr.com",[39,214]],["yourporngod.com",[39,40]],["javbangers.com",[39,298]],["camfox.com",39],["camthots.tv",[39,125]],["shegotass.info",39],["amateur8.com",39],["bigtitslust.com",39],["ebony8.com",39],["freeporn8.com",39],["lesbian8.com",39],["maturetubehere.com",39],["sortporn.com",39],["webcamvau.com",39],["motherporno.com",[39,40,55,127]],["tktube.com",39],["theporngod.com",[39,40]],["pornsocket.com",42],["luxuretv.com",43],["porndig.com",[44,45]],["webcheats.com.br",46],["ceesty.com",[47,48]],["gestyy.com",[47,48]],["corneey.com",48],["destyy.com",48],["festyy.com",48],["sh.st",48],["angrybirdsnest.com",49],["zrozz.com",49],["clix4btc.com",49],["katfile.com",49],["4tests.com",49],["planet-explorers-isos.com",49],["business-standard.com",49],["goltelevision.com",49],["news-und-nachrichten.de",49],["laradiobbs.net",49],["urlaubspartner.net",49],["produktion.de",49],["cinemaxxl.de",49],["bladesalvador.com",49],["tempr.email",49],["cshort.org",49],["friendproject.net",49],["covrhub.com",49],["planetsuzy.org",50],["empflix.com",51],["filespace.com",52],["transparentcalifornia.com",53],["deepbrid.com",54],["submityourflicks.com",55],["3movs.com",55],["cambay.tv",[55,106,125,127]],["bravoerotica.net",[55,127]],["youx.xxx",55],["camclips.tv",[55,214]],["camflow.tv",[55,106,127,177,252]],["camhoes.tv",[55,106,125,127,177,252]],["xmegadrive.com",55],["xxxymovies.com",55],["xxxshake.com",55],["gayck.com",55],["xhand.com",[55,127]],["analdin.com",[55,127]],["webnovel.com",56],["videosgay.me",[57,58]],["wishfast.top",58],["schwaebische.de",59],["mercurynews.com",60],["chicoer.com",60],["dailybreeze.com",60],["dailybulletin.com",60],["dailynews.com",60],["delcotimes.com",60],["eastbaytimes.com",60],["macombdaily.com",60],["ocregister.com",60],["pasadenastarnews.com",60],["pe.com",60],["presstelegram.com",60],["redlandsdailyfacts.com",60],["reviewjournal.com",60],["santacruzsentinel.com",60],["saratogian.com",60],["sentinelandenterprise.com",60],["sgvtribune.com",60],["tampabay.com",60],["times-standard.com",60],["theoaklandpress.com",60],["trentonian.com",60],["twincities.com",60],["whittierdailynews.com",60],["bostonherald.com",60],["dailycamera.com",60],["sbsun.com",60],["dailydemocrat.com",60],["montereyherald.com",60],["orovillemr.com",60],["record-bee.com",60],["redbluffdailynews.com",60],["reporterherald.com",60],["thereporter.com",60],["timescall.com",60],["timesheraldonline.com",60],["ukiahdailyjournal.com",60],["dailylocal.com",60],["8tracks.com",61],["revealname.com",62],["fcportables.com",[63,64]],["golfchannel.com",66],["telemundodeportes.com",66],["stream.nbcsports.com",66],["gamcore.com",67],["porcore.com",67],["69games.xxx",67],["javmix.app",67],["tecknity.com",68],["haaretz.com",69],["hungama.com",69],["a-o.ninja",69],["anime-odcinki.pl",69],["kumpulmanga.org",69],["shortgoo.blogspot.com",69],["tonanmedia.my.id",[69,438]],["yurasu.xyz",69],["isekaipalace.com",69],["megadescarga.net",[70,71,72,73]],["megadescargas.net",[70,71,72,73]],["audioz.cc",74],["audioz.es",74],["luckydice.net",74],["adarima.org",74],["tieutietkiem.com",74],["weatherwx.com",74],["sattaguess.com",74],["winshell.de",74],["rosasidan.ws",74],["modmakers.xyz",74],["gamepure.in",74],["warrenrahul.in",74],["austiblox.net",74],["upiapi.in",74],["myownguess.in",74],["watchhentai.net",74],["thichcode.net",74],["texturecan.com",74],["animeszone.net",74],["vikistream.com",75],["eplayer.click",[75,76]],["mega4upload.com",[76,82]],["ennovelas.com",[76,82]],["n-tv.de",77],["brigitte.de",78],["stern.de",78],["foxsports.com.au",79],["canberratimes.com.au",79],["thesimsresource.com",80],["bdnewszh.com",82],["streamservicehd.click",82],["timeforbitco.in",83],["worldofbitco.in",[83,95]],["weatherx.co.in",[83,95]],["getyourbitco.in",83],["sunbtc.space",83],["ctrl.blog",84],["sportlife.es",85],["tubitv.com",85],["finofilipino.org",86],["acortarm.xyz",87],["acortame.xyz",87],["speedtest.net",88],["mysflink.blogspot.com",89],["assia.tv",90],["assia4.com",90],["assia24.com",90],["cwtvembeds.com",[92,126]],["camlovers.tv",92],["porntn.com",92],["pornissimo.org",92],["sexcams-24.com",[92,106]],["watchporn.to",[92,106]],["camwhorez.video",92],["footstockings.com",[93,106]],["ojogos.com.br",97],["powforums.com",98],["supforums.com",98],["studybullet.com",98],["usgamer.net",99],["recordonline.com",99],["123tvseries.co",101],["freebitcoin.win",102],["e-monsite.com",102],["coindice.win",102],["temp-mails.com",103],["freiepresse.de",104],["investing.com",105],["camhub.cc",106],["love4porn.com",106],["thotvids.com",106],["celebwhore.com",106],["cluset.com",106],["4kporn.xxx",106],["xhomealone.com",106],["lusttaboo.com",[106,369]],["hentai-moon.com",106],["mp3fiber.com",107],["suedkurier.de",108],["anysex.com",110],["gomiblog.com",111],["iptvtools.net",111],["vlist.se",112],["pornve.com",113],["coolrom.com.au",114],["bitcotasks.com",114],["pornohirsch.net",115],["marie-claire.es",116],["gamezhero.com",116],["flashgirlgames.com",116],["onlinesudoku.games",116],["mpg.football",116],["sssam.com",116],["globalnews.ca",117],["videotekaime.net",118],["drinksmixer.com",119],["leitesculinaria.com",119],["fupa.net",120],["ge-map-overlays.appspot.com",121],["browardpalmbeach.com",122],["dallasobserver.com",122],["houstonpress.com",122],["miaminewtimes.com",122],["phoenixnewtimes.com",122],["westword.com",122],["nhentai.net",123],["fox.com.tr",124],["caminspector.net",125],["camwhoreshd.com",125],["camgoddess.tv",125],["gay4porn.com",127],["mypornhere.com",127],["mediapason.it",128],["linkspaid.com",128],["tuotromedico.com",128],["neoteo.com",128],["phoneswiki.com",128],["celebmix.com",128],["myneobuxportal.com",128],["oyungibi.com",128],["25yearslatersite.com",128],["jeshoots.com",129],["techhx.com",129],["karanapk.com",129],["videogreen.xyz",130],["sypl.xyz",130],["playembed.xyz",130],["javhdporn.net",130],["redanimedatabase.cloud",130],["javstream.top",130],["flashplayer.fullstacks.net",132],["cloudapps.herokuapp.com",132],["youfiles.herokuapp.com",132],["smallseotools.com",133],["temp-mail.org",134],["comnuan.com",135],["veedi.com",136],["battleboats.io",136],["fruitlab.com",137],["haddoz.net",137],["garoetpos.com",137],["stiletv.it",138],["hpav.tv",139],["hpjav.tv",139],["hqtv.biz",141],["liveuamap.com",142],["filmiseriali.com",142],["muvibg.com",142],["linksht.com",[143,144]],["audycje.tokfm.pl",145],["hulu.com",[146,147,148]],["shush.se",149],["aniwatcher.com",150],["emurom.net",151],["allkpop.com",152],["azmath.info",153],["downfile.site",153],["downphanmem.com",153],["expertvn.com",153],["memangbau.com",153],["scratch247.info",153],["trangchu.news",153],["adfoc.us",153],["mynewsmedia.co",[153,241]],["techacode.com",153],["sahlmarketing.net",153],["sptfy.be",153],["streamcheck.link",153],["mcafee-com.com",[153,374]],["tplrunapk.com",153],["abhayaby.com",153],["tinsukiacollege.org",153],["filmy4wab.pro",153],["pmsarkarijob.com",153],["jomeramankahe.in",153],["globlenews.in",153],["rontymobile.in",153],["pickcrackpasswords.blogspot.com",155],["kfrfansub.com",156],["thuglink.com",156],["voipreview.org",156],["audiotag.info",157],["hanime.tv",158],["pogo.com",159],["cloudvideo.tv",160],["legionjuegos.org",161],["legionpeliculas.org",161],["legionprogramas.org",161],["16honeys.com",162],["elespanol.com",163],["remodelista.com",164],["coolmathgames.com",[165,166,167,488]],["audiofanzine.com",168],["noweconomy.live",170],["howifx.com",170],["vavada5com.com",170],["hitokin.net",171],["elil.cc",172],["developerinsider.co",173],["ilprimatonazionale.it",174],["hotabis.com",174],["root-nation.com",174],["italpress.com",174],["airsoftmilsimnews.com",174],["artribune.com",174],["thehindu.com",175],["cambro.tv",[176,177]],["nibelungen-kurier.de",178],["noz.de",179],["earthgarage.com",181],["pianetamountainbike.it",182],["barchart.com",183],["modelisme.com",184],["parasportontario.ca",184],["prescottenews.com",184],["nrj-play.fr",185],["oeffentlicher-dienst.info",186],["hackingwithreact.com",187],["gutekueche.at",188],["eplfootballmatch.com",189],["peekvids.com",190],["playvids.com",190],["pornflip.com",190],["redensarten-index.de",191],["vw-page.com",192],["viz.com",[193,194]],["queenfaucet.website",195],["0rechner.de",196],["configspc.com",197],["xopenload.me",197],["uptobox.com",197],["uptostream.com",197],["onepiece-tube.com",198],["japgay.com",199],["mega-debrid.eu",200],["dreamdth.com",201],["pijanitvor.com",201],["diaridegirona.cat",204],["diariodeibiza.es",204],["diariodemallorca.es",204],["diarioinformacion.com",204],["eldia.es",204],["emporda.info",204],["farodevigo.es",204],["laopinioncoruna.es",204],["laopiniondemalaga.es",204],["laopiniondemurcia.es",204],["laopiniondezamora.es",204],["laprovincia.es",204],["levante-emv.com",204],["mallorcazeitung.es",204],["regio7.cat",204],["superdeporte.es",204],["playpaste.com",205],["player.rtl2.de",206],["freetutorialsus.com",207],["vidlii.com",[207,223]],["iammagnus.com",207],["dailyvideoreports.net",207],["unityassets4free.com",207],["cnbc.com",208],["puzzles.msn.com",209],["metro.us",209],["newsobserver.com",209],["arkadiumhosted.com",209],["spankbang.com",210],["firefaucet.win",211],["55k.io",212],["filelions.online",212],["direct-link.net",213],["direkt-wissen.com",213],["link-to.net",213],["fullhdxxx.com",215],["getintopc.com",216],["unique-tutorials.info",216],["etonline.com",217],["creatur.io",217],["drphil.com",217],["urbanmilwaukee.com",217],["ontiva.com",217],["hideandseek.world",217],["myabandonware.com",217],["mangaalarab.com",217],["kendam.com",217],["wttw.com",217],["synonyms.com",217],["definitions.net",217],["hostmath.com",217],["camvideoshub.com",217],["minhaconexao.com.br",217],["bravedown.com",217],["home-made-videos.com",219],["pxrnxx.xyz",219],["amateur-couples.com",219],["slutdump.com",219],["produsat.com",221],["12thman.com",223],["acusports.com",223],["atlantic10.com",223],["auburntigers.com",223],["baylorbears.com",223],["bceagles.com",223],["bgsufalcons.com",223],["big12sports.com",223],["bigten.org",223],["bradleybraves.com",223],["butlersports.com",223],["cmumavericks.com",223],["conferenceusa.com",223],["cyclones.com",223],["dartmouthsports.com",223],["daytonflyers.com",223],["dbupatriots.com",223],["dbusports.com",223],["denverpioneers.com",223],["fduknights.com",223],["fgcuathletics.com",223],["fightinghawks.com",223],["fightingillini.com",223],["floridagators.com",223],["friars.com",223],["friscofighters.com",223],["gamecocksonline.com",223],["goarmywestpoint.com",223],["gobison.com",223],["goblueraiders.com",223],["gobobcats.com",223],["gocards.com",223],["gocreighton.com",223],["godeacs.com",223],["goexplorers.com",223],["goetbutigers.com",223],["gofrogs.com",223],["gogriffs.com",223],["gogriz.com",223],["golobos.com",223],["gomarquette.com",223],["gopack.com",223],["gophersports.com",223],["goprincetontigers.com",223],["gopsusports.com",223],["goracers.com",223],["goshockers.com",223],["goterriers.com",223],["gotigersgo.com",223],["gousfbulls.com",223],["govandals.com",223],["gowyo.com",223],["goxavier.com",223],["gozags.com",223],["gozips.com",223],["griffinathletics.com",223],["guhoyas.com",223],["gwusports.com",223],["hailstate.com",223],["hamptonpirates.com",223],["hawaiiathletics.com",223],["hokiesports.com",223],["huskers.com",223],["icgaels.com",223],["iuhoosiers.com",223],["jsugamecocksports.com",223],["longbeachstate.com",223],["loyolaramblers.com",223],["lrtrojans.com",223],["lsusports.net",223],["morrisvillemustangs.com",223],["msuspartans.com",223],["muleriderathletics.com",223],["mutigers.com",223],["navysports.com",223],["nevadawolfpack.com",223],["niuhuskies.com",223],["nkunorse.com",223],["nuhuskies.com",223],["nusports.com",223],["okstate.com",223],["olemisssports.com",223],["omavs.com",223],["ovcsports.com",223],["owlsports.com",223],["purduesports.com",223],["redstormsports.com",223],["richmondspiders.com",223],["sfajacks.com",223],["shupirates.com",223],["siusalukis.com",223],["smcgaels.com",223],["smumustangs.com",223],["soconsports.com",223],["soonersports.com",223],["themw.com",223],["tulsahurricane.com",223],["txst.com",223],["txstatebobcats.com",223],["ubbulls.com",223],["ucfknights.com",223],["ucirvinesports.com",223],["uconnhuskies.com",223],["uhcougars.com",223],["uicflames.com",223],["umterps.com",223],["uncwsports.com",223],["unipanthers.com",223],["unlvrebels.com",223],["uoflsports.com",223],["usdtoreros.com",223],["utahstateaggies.com",223],["utepathletics.com",223],["utrockets.com",223],["uvmathletics.com",223],["uwbadgers.com",223],["villanova.com",223],["wkusports.com",223],["wmubroncos.com",223],["woffordterriers.com",223],["1pack1goal.com",223],["bcuathletics.com",223],["bubraves.com",223],["goblackbears.com",223],["golightsgo.com",223],["gomcpanthers.com",223],["goutsa.com",223],["mercerbears.com",223],["pirateblue.com",223],["pirateblue.net",223],["pirateblue.org",223],["quinnipiacbobcats.com",223],["towsontigers.com",223],["tribeathletics.com",223],["tribeclub.com",223],["utepminermaniacs.com",223],["utepminers.com",223],["wkutickets.com",223],["aopathletics.org",223],["atlantichockeyonline.com",223],["bigsouthnetwork.com",223],["bigsouthsports.com",223],["chawomenshockey.com",223],["dbupatriots.org",223],["drakerelays.org",223],["ecac.org",223],["ecacsports.com",223],["emueagles.com",223],["emugameday.com",223],["gculopes.com",223],["godrakebulldog.com",223],["godrakebulldogs.com",223],["godrakebulldogs.net",223],["goeags.com",223],["goislander.com",223],["goislanders.com",223],["gojacks.com",223],["gomacsports.com",223],["gseagles.com",223],["hubison.com",223],["iowaconference.com",223],["ksuowls.com",223],["lonestarconference.org",223],["mascac.org",223],["midwestconference.org",223],["mountaineast.org",223],["niu-pack.com",223],["nulakers.ca",223],["oswegolakers.com",223],["ovcdigitalnetwork.com",223],["pacersports.com",223],["rmacsports.org",223],["rollrivers.com",223],["samfordsports.com",223],["uncpbraves.com",223],["usfdons.com",223],["wiacsports.com",223],["alaskananooks.com",223],["broncathleticfund.com",223],["cameronaggies.com",223],["columbiacougars.com",223],["etownbluejays.com",223],["gobadgers.ca",223],["golancers.ca",223],["gometrostate.com",223],["gothunderbirds.ca",223],["kentstatesports.com",223],["lehighsports.com",223],["lopers.com",223],["lycoathletics.com",223],["lycomingathletics.com",223],["maraudersports.com",223],["mauiinvitational.com",223],["msumavericks.com",223],["nauathletics.com",223],["nueagles.com",223],["nwusports.com",223],["oceanbreezenyc.org",223],["patriotathleticfund.com",223],["pittband.com",223],["principiaathletics.com",223],["roadrunnersathletics.com",223],["sidearmsocial.com",223],["snhupenmen.com",223],["stablerarena.com",223],["stoutbluedevils.com",223],["uwlathletics.com",223],["yumacs.com",223],["collegefootballplayoff.com",223],["csurams.com",223],["cubuffs.com",223],["gobearcats.com",223],["gohuskies.com",223],["mgoblue.com",223],["osubeavers.com",223],["pittsburghpanthers.com",223],["rolltide.com",223],["texassports.com",223],["thesundevils.com",223],["uclabruins.com",223],["wvuathletics.com",223],["wvusports.com",223],["arizonawildcats.com",223],["calbears.com",223],["cuse.com",223],["georgiadogs.com",223],["goducks.com",223],["goheels.com",223],["gostanford.com",223],["insidekstatesports.com",223],["insidekstatesports.info",223],["insidekstatesports.net",223],["insidekstatesports.org",223],["k-stateathletics.com",223],["k-statefootball.net",223],["k-statefootball.org",223],["k-statesports.com",223],["k-statesports.net",223],["k-statesports.org",223],["k-statewomenshoops.com",223],["k-statewomenshoops.net",223],["k-statewomenshoops.org",223],["kstateathletics.com",223],["kstatefootball.net",223],["kstatefootball.org",223],["kstatesports.com",223],["kstatewomenshoops.com",223],["kstatewomenshoops.net",223],["kstatewomenshoops.org",223],["ksuathletics.com",223],["ksusports.com",223],["scarletknights.com",223],["showdownforrelief.com",223],["syracusecrunch.com",223],["texastech.com",223],["theacc.com",223],["ukathletics.com",223],["usctrojans.com",223],["utahutes.com",223],["utsports.com",223],["wsucougars.com",223],["mangadods.com",223],["tricksplit.io",223],["litecoinads.com",223],["fangraphs.com",224],["4players.de",[225,295]],["buffed.de",225],["gamesaktuell.de",225],["gamezone.de",225],["pcgames.de",225],["videogameszone.de",225],["planetaminecraft.com",226],["flyad.vip",227],["lapresse.ca",228],["kolyoom.com",229],["ilovephd.com",229],["upstream.to",230],["negumo.com",231],["games.wkb.jp",[232,233]],["channelmyanmar.org",[234,235]],["u-s-news.com",235],["fandom.com",[236,506,507]],["kenshi.fandom.com",237],["hausbau-forum.de",238],["fake-it.ws",239],["laksa19.github.io",240],["revadvert.com",241],["1shortlink.com",242],["nesia.my.id",243],["makemoneywithurl.com",244],["resetoff.pl",245],["sexodi.com",245],["cdn77.org",246],["howtofixwindows.com",247],["3sexporn.com",248],["momxxxsex.com",248],["myfreevintageporn.com",248],["penisbuyutucum.net",248],["lightnovelworld.com",249],["ujszo.com",250],["newsmax.com",251],["bobs-tube.com",252],["nadidetarifler.com",253],["siz.tv",253],["suzylu.co.uk",[254,255]],["onworks.net",256],["yabiladi.com",256],["homeairquality.org",258],["faucettronn.click",258],["downloadsoft.net",259],["imgair.net",260],["imgblaze.net",260],["imgfrost.net",260],["pixsera.net",260],["vestimage.site",260],["imgwia.buzz",260],["testlanguages.com",261],["newsinlevels.com",261],["videosinlevels.com",261],["arcai.com",262],["my-code4you.blogspot.com",263],["vlxxs.net",264],["rapelust.com",264],["vtube.to",264],["vtplay.net",264],["desitelugusex.com",264],["xvideos-downloader.net",264],["xxxvideotube.net",264],["sdefx.cloud",264],["nozomi.la",264],["moviesonlinefree.net",264],["flickr.com",265],["firefile.cc",266],["pestleanalysis.com",266],["kochamjp.pl",266],["tutorialforlinux.com",266],["whatsaero.com",266],["animeblkom.net",[266,282]],["blkom.com",266],["globes.co.il",[267,268]],["jardiner-malin.fr",269],["tw-calc.net",270],["ohmybrush.com",271],["talkceltic.net",272],["zdam.xyz",273],["mentalfloss.com",274],["uprafa.com",275],["cube365.net",276],["nightfallnews.com",[277,278]],["wwwfotografgotlin.blogspot.com",279],["freelistenonline.com",279],["badassdownloader.com",280],["quickporn.net",281],["aosmark.com",283],["theappstore.org",283],["atozmath.com",[284,285,286,287,288,289,290]],["newyorker.com",291],["brighteon.com",292],["more.tv",293],["video1tube.com",294],["alohatube.xyz",294],["link.cgtips.org",296],["hentaicloud.com",297],["netfapx.com",299],["paperzonevn.com",301],["hentaienglish.com",302],["hentaiporno.xxx",302],["venge.io",[303,304]],["btcbux.io",305],["its.porn",[306,307]],["atv.at",308],["2ndrun.tv",309],["rackusreads.com",309],["exerror.com",309],["temp-phone-number.com",310],["jetpunk.com",312],["imgur.com",313],["hentai-party.com",314],["hentaicomics.pro",314],["xxx-comics.pro",314],["genshinimpactcalculator.com",317],["mysexgames.com",318],["embed.indavideo.hu",321],["coinurl.net",[322,323]],["gdr-online.com",324],["mmm.dk",325],["iqiyi.com",[326,327]],["m.iqiyi.com",328],["japopav.tv",329],["lvturbo.com",329],["nbcolympics.com",330],["apkhex.com",331],["indiansexstories2.net",332],["issstories.xyz",332],["1340kbbr.com",333],["gorgeradio.com",333],["kduk.com",333],["kedoam.com",333],["kejoam.com",333],["kelaam.com",333],["khsn1230.com",333],["kjmx.rocks",333],["kloo.com",333],["klooam.com",333],["klykradio.com",333],["kmed.com",333],["kmnt.com",333],["kool991.com",333],["kpnw.com",333],["kppk983.com",333],["krktcountry.com",333],["ktee.com",333],["kwro.com",333],["kxbxfm.com",333],["thevalley.fm",333],["dsocker1234.blogspot.com",334],["blick.ch",336],["mgnet.xyz",337],["designtagebuch.de",338],["pixroute.com",339],["calculator-online.net",340],["porngames.club",341],["sexgames.xxx",341],["111.90.159.132",342],["battleplan.news",342],["mobile-tracker-free.com",343],["pfps.gg",344],["ac-illust.com",[345,346]],["photo-ac.com",[345,346]],["social-unlock.com",347],["ninja.io",348],["sourceforge.net",349],["samfirms.com",350],["banned.video",351],["conspiracyfact.info",351],["freeworldnews.tv",351],["madmaxworld.tv",351],["huffpost.com",352],["ingles.com",353],["spanishdict.com",353],["surfline.com",354],["play.tv3.ee",355],["trendyoum.com",356],["bulbagarden.net",357],["doomovie-hd.com",358],["madoohd.com",358],["moviestars.to",359],["hollywoodlife.com",360],["searchresults.cc",361],["mat6tube.com",362],["textstudio.co",363],["newtumbl.com",364],["nevcoins.club",366],["mail.com",367],["erome.com",370],["oggi.it",[371,372]],["video.gazzetta.it",[371,372]],["mangakita.net",373],["allcryptoz.net",374],["crewbase.net",374],["phineypet.com",374],["shinbhu.net",374],["talkforfitness.com",374],["mdn.lol",374],["carsmania.net",374],["carstopia.net",374],["coinsvalue.net",374],["cookinguide.net",374],["freeoseocheck.com",374],["makeupguide.net",374],["btcbitco.in",374],["btcsatoshi.net",374],["cempakajaya.com",374],["crypto4yu.com",374],["readbitcoin.org",374],["wiour.com",374],["exactpay.online",374],["avpgalaxy.net",375],["mhma12.tech",376],["panda-novel.com",377],["zebranovel.com",377],["lightsnovel.com",377],["eaglesnovel.com",377],["pandasnovel.com",377],["zadfaucet.com",378],["ewrc-results.com",379],["kizi.com",380],["cyberscoop.com",381],["fedscoop.com",381],["canale.live",382],["loawa.com",383],["ygosu.com",383],["sportalkorea.com",383],["algumon.com",383],["hancinema.net",383],["enetnews.co.kr",383],["edaily.co.kr",383],["economist.co.kr",383],["etoday.co.kr",383],["hankyung.com",383],["isplus.com",383],["hometownstation.com",383],["kagit.kr",383],["inven.co.kr",383],["viva100.com",383],["joongdo.co.kr",383],["jjang0u.com",383],["tenbizt.com",383],["tvreport.co.kr",383],["newautopost.co.kr",383],["mememedia.co.kr",383],["mobilitytv.co.kr",383],["mafiatown.pl",[384,385]],["jeep-cj.com",386],["sponsorhunter.com",387],["coinscap.info",388],["cryptowidgets.net",388],["greenenez.com",388],["insurancegold.in",388],["webfreetools.net",388],["wiki-topia.com",388],["blog.carsmania.net",388],["blog.carstopia.net",388],["blog.coinsvalue.net",388],["blog.cookinguide.net",388],["blog.freeoseocheck.com",388],["blog.makeupguide.net",388],["rapid-cloud.co",388],["cloudcomputingtopics.net",389],["likecs.com",390],["tiscali.it",391],["linkspy.cc",392],["tutelehd3.xyz",393],["dirty.pink",[394,395,396]],["adshnk.com",397],["chattanoogan.com",398],["adsy.pw",399],["playstore.pw",399],["socialmediagirls.com",400],["windowspro.de",401],["snapinsta.app",402],["tvtv.ca",403],["tvtv.us",403],["mydaddy.cc",404],["roadtrippin.fr",405],["redketchup.io",[406,407,408]],["anyporn.com",[409,423]],["bravoporn.com",409],["bravoteens.com",409],["crocotube.com",409],["hellmoms.com",409],["hellporno.com",409],["sex3.com",409],["tubewolf.com",409],["xbabe.com",409],["xcum.com",409],["zedporn.com",409],["imagetotext.info",410],["infokik.com",411],["freepik.com",412],["ddwloclawek.pl",[413,414]],["deezer.com",415],["my-subs.co",416],["plaion.com",417],["slideshare.net",[418,419]],["ustreasuryyieldcurve.com",420],["businesssoftwarehere.com",421],["goo.st",421],["freevpshere.com",421],["softwaresolutionshere.com",421],["staige.tv",424],["bondagevalley.cc",425],["androidadult.com",426],["streamvid.net",427],["watchtv24.com",428],["cellmapper.net",429],["medscape.com",430],["newscon.org",431],["arkadium.com",432],["app.blubank.com",434],["lifesurance.info",435],["sportdeutschland.tv",436],["kcra.com",436],["wcvb.com",436],["kusonime.com",437],["chromeready.com",439],["coursedrive.org",439],["dtbps3games.com",439],["vod.pl",440],["megadrive-emulator.com",441],["animesaga.in",444],["bestx.stream",444],["moviesapi.club",444],["digimanie.cz",445],["svethardware.cz",445],["srvy.ninja",446],["drawer-opportunity-i-243.site",447],["tchatche.com",448],["ozulmanga.com",449],["edmdls.com",450],["freshremix.net",450],["scenedl.org",450],["trakt.tv",[451,452,453]],["shroomers.app",454],["di.fm",[455,456,457]],["qtoptens.com",458],["today.com",458],["videogamer.com",458],["wrestlinginc.com",458],["techedubyte.com",459],["quesignifi.ca",460],["movie-th.tv",461],["iwanttfc.com",462],["nutraingredients-asia.com",463],["nutraingredients-latam.com",463],["nutraingredients-usa.com",463],["nutraingredients.com",463],["beastplayer.tk",464],["livesportsclub.pages.dev",464],["madlink.biz",464],["ozulscansen.com",465],["fitnessbr.click",466],["minhareceita.xyz",466],["teamskeet.com",467],["tacobell.com",469],["webtoons.com",[470,471]],["zefoy.com",472],["natgeotv.com",474],["br.de",475],["pasteboard.co",476],["avclub.com",477],["clickhole.com",477],["deadspin.com",477],["gizmodo.com",477],["jalopnik.com",477],["jezebel.com",477],["kotaku.com",477],["lifehacker.com",477],["splinternews.com",477],["theinventory.com",477],["theonion.com",477],["theroot.com",477],["thetakeout.com",477],["pewresearch.org",477],["los40.com",[478,479]],["telegraph.co.uk",[480,481]],["poweredbycovermore.com",[480,526]],["verizon.com",482],["humanbenchmark.com",483],["politico.com",484],["officedepot.co.cr",[485,486]],["usnews.com",487],["factable.com",489],["zee5.com",490],["gala.fr",491],["geo.fr",491],["voici.fr",491],["gloucestershirelive.co.uk",492],["arsiv.mackolik.com",493],["jacksonguitars.com",494],["scandichotels.com",495],["stylist.co.uk",496],["nettiauto.com",497],["thaiairways.com",[498,499]],["cerbahealthcare.it",[500,501]],["futura-sciences.com",[500,516]],["tiendaenlinea.claro.com.ni",[502,503]],["tieba.baidu.com",504],["linktr.ee",505],["grasshopper.com",[508,509]],["epson.com.cn",[510,511]],["oe24.at",[512,513]],["szbz.de",512],["platform.autods.com",[514,515]],["wikihow.com",517],["citibank.com.sg",518],["uol.com.br",[519,520,521,522]],["gazzetta.gr",523],["digicol.dpm.org.cn",[524,525]],["virginmediatelevision.ie",527],["larazon.es",[528,529]],["waitrosecellar.com",[530,531,532]],["dropgalaxy.co",533],["philips-hue.com",534]]);

const entitiesMap = new Map([["vidsrc",8],["watch-series",8],["watchseries",8],["vev",8],["vidop",8],["vidup",8],["starmusiq",11],["wcofun",11],["kissasian",13],["gogoanime",[13,21]],["1movies",[13,20]],["xmovies8",13],["animeheaven",13],["0123movies",13],["gostream",13],["gomovies",13],["hamsterix",14],["xhamster",14],["xhamster1",14],["xhamster10",14],["xhamster11",14],["xhamster12",14],["xhamster13",14],["xhamster14",14],["xhamster15",14],["xhamster16",14],["xhamster17",14],["xhamster18",14],["xhamster19",14],["xhamster20",14],["xhamster2",14],["xhamster3",14],["xhamster4",14],["xhamster5",14],["xhamster7",14],["xhamster8",14],["vidlox",[15,16]],["primewire",17],["streanplay",[17,19]],["sbplay",17],["milfnut",17],["fmovies",21],["hqq",[25,26]],["waaw",26],["123link",27],["adshort",27],["linkshorts",27],["adsrt",27],["vinaurl",27],["adfloz",27],["dutchycorp",27],["shortearn",27],["pingit",27],["urlty",27],["seulink",27],["shrink",27],["clk",27],["tmearn",27],["megalink",27],["linkviet",27],["miniurl",27],["pcprogramasymas",27],["link1s",27],["shortzzy",27],["shorttey",[27,217]],["lite-link",27],["pureshort",27],["adcorto",27],["zshort",27],["upfiles",27],["linkfly",27],["wplink",27],["financerites",27],["camwhores",[28,39,91,92,93]],["tube8",[29,30]],["youporn",30],["redtube",30],["pornhub",[30,202,203]],["xtits",[55,127]],["streamwish",[57,58]],["pouvideo",65],["povvideo",65],["povw1deo",65],["povwideo",65],["powv1deo",65],["powvibeo",65],["powvideo",65],["powvldeo",65],["acortalo",[70,71,72,73]],["acortar",[70,71,72,73]],["plyjam",[75,76]],["fxporn69",81],["vipbox",82],["viprow",82],["desbloqueador",87],["xberuang",89],["teknorizen",89],["linkberuang",89],["kickassanime",94],["subtorrents",96],["subtorrents1",96],["newpelis",96],["pelix",96],["allcalidad",96],["infomaniakos",96],["filecrypt",100],["tornadomovies",101],["sexwebvideo",106],["mangovideo",106],["icdrama",112],["mangasail",112],["file4go",114],["asianclub",130],["anitube",137],["mixdrop",140],["azsoft",153],["uploadev",169],["ver-pelis-online",180],["ancient-origins",189],["lookcam",217],["lootlinks",217],["dpstream",220],["bluemediafiles",222],["docer",245],["pixlev",260],["skymovieshd",264],["dvdplay",264],["crackstreams",300],["123movieshd",311],["uproxy",315],["animesa",316],["cinecalidad",[319,320]],["apkmaven",365],["gmx",368],["gamereactor",422],["terabox",433],["tvhay",[442,443]],["www.google",468]]);

const exceptionsMap = new Map([["pingit.com",[27]],["pingit.me",[27]]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
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
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
