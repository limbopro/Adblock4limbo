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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setCookie = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["cookies","false"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["cookienotification","1"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["CookieConsent","false"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["ocean.io",3],["map.blitzortung.org",4],["northumbriasport.com",5],["clearspend.natwest.com",6],["cellcolabsclinical.com",7],["producthunt.com",8],["motorsportreg.com",[9,10]],["imola.motorsportreg.com",[11,12]],["pga.com",13],["portal.payment.eltax.lta.go.jp",14],["greenbuildingadvisor.com",[15,16,17]],["finewoodworking.com",[15,16,17]],["privatekeys.pw",18],["telli.dpd.ee",19],["youthforum.org",19],["votegroup.de",[20,21]],["pharmahall.gr",22],["x-team.com",23],["reservations.helveticmotion.ch",24],["endclothing.com",[25,26]],["arning-bau.de",27],["kraftwerk.co.at",28],["fhr.biz",29],["srf.nu",30],["jn.fo",[31,32]],["rovia.es",33],["airnewzealand.co.nz",34],["viu.com",35],["dinamalar.com",36],["volkswagen-group.com",37],["solo.io",38],["pomelo.la",39],["ibuypower.com",40],["sberbank.com",[41,423]],["swissmilk.ch",42],["gamemaker.io",43],["pixiv.net",44],["kinemaster.com",45],["sp32bb.pl",46],["jazz.fm",47],["juntadeandalucia.es",48],["melee.gg",[49,50,51]],["chemocare.com",52],["mobiliteit.nl",53],["xledger.net",54],["reviewmeta.com",55],["guide-bordeaux-gironde.com",56],["travelinsured.com",57],["gdpr.twitter.com",58],["mora.hu",59],["confused.com",60],["physikinstrumente.de",61],["karlknauer.de",61],["schoeck.com",61],["resonate.coop",61],["northgatevehiclehire.ie",61],["badhall.at",61],["cic.ch",61],["ilsaggiatore.com",62],["forum.digitalfernsehen.de",63],["bitscrunch.com",[64,65,66]],["hannahgraaf.com",67],["shop.elbers-hof.de",[68,69]],["woolsocks.eu",70],["uza.be",71],["5asec.ch",71],["wizards.com",71],["parkenflughafen.de",72],["radyofenomen.com",73],["elsate.com",74],["hume.ai",75],["lotusantwerp.wacs.online",76],["simeononsecurity.gitbook.io",77],["thehacker.recipes",77],["docs.dyrector.io",77],["makeresearchpay.com",78],["tandartsenpraktijk-simons.tandartsennet.nl",79],["huisartsenpraktijkdoorn.nl",79],["bcorporation.net",80],["knime.com",[80,123]],["quebueno.es",80],["edookit.com",81],["trixonline.be",82],["radio-canada.ca",83],["heysummit.com",84],["puromarketing.com",85],["radicalmotorsport.com",86],["biurobox.pl",87],["cycling74.com",88],["triviacreator.com",89],["freshis.com",89],["anker.com",89],["computacenter.com",90],["playbalatro.com",91],["kastner-oehler.de",92],["kastner-oehler.at",92],["kastner-oehler.ch",92],["twenga.it",93],["twenga.fr",93],["twenga.co.uk",93],["twenga.de",93],["twenga.es",93],["twenga.pl",93],["twenga.nl",93],["twenga.se",93],["olx.kz",94],["efl.com",95],["wst.tv",95],["cuvva.com",96],["vitbikes.de",97],["gourmetfoodstore.com",98],["schulfahrt.de",99],["deutsche-finanzagentur.de",100],["thejazzcafelondon.com",101],["keeb.supply",102],["spb.hh.ru",103],["kaluga.hh.ru",103],["school.hh.ru",103],["rating.hh.ru",103],["novgorod.hh.ru",103],["xxxshemaleporn.com",[104,105]],["gayhits.com",[104,105]],["gaypornvideos.xxx",[104,105]],["sextubespot.com",[104,105]],["wewantjusticedao.org",106],["godbolt.org",107],["projectenglish.com.pl",[108,113]],["ledenicheur.fr",108],["pricespy.co.uk",108],["pricespy.co.nz",108],["sae.fsc.ccoo.es",109],["piusx-college.nl",110],["yoomoney.ru",111],["vod.warszawa.pl",112],["m.twitch.tv",114],["environment.data.gov.uk",115],["playtesting.games",116],["portal.by.aok.de",117],["umlandscout.de",118],["atombank.co.uk",[119,120,121]],["showtv.com.tr",122],["seventhgeneration.com",123],["press.princeton.edu",123],["ldz.lv",123],["crtm.es",124],["airastana.com",125],["vkf-renzel.nl",126],["booking.reederei-zingst.de",[127,128,129]],["booking.weisse-flotte.de",[127,128,129]],["booking2.reederei-hiddensee.de",[127,128,129]],["sanswiss.pl",130],["galaxy.com",131],["petdesk.com",132],["ivyexec.com",133],["railtech.com",134],["lottehotel.com",[135,136,137,138,139]],["paydirekt.de",140],["kijiji.ca",141],["posterstore.fr",142],["posterstore.eu",142],["posterstore.be",142],["posterstore.de",142],["posterstore.hu",142],["posterstore.ie",142],["posterstore.it",142],["posterstore.no",142],["posterstore.nl",142],["posterstore.pl",142],["posterstore.com",142],["posterstore.ae",142],["posterstore.ca",142],["posterstore.nz",142],["posterstore.es",142],["posterstore.kr",142],["posterstore.jp",142],["posterstore.dk",142],["posterstore.se",142],["posterstore.ch",142],["posterstore.at",142],["myriadicity.net",143],["dgsf.org",143],["endgame.id",144],["cashback-cards.ch",145],["swisscard.ch",145],["ahorn24.de",146],["blockdyor.com",147],["ticket.io",148],["omega-nuernberg.servicebund.com",149],["lojaboschferramentas.com.br",[150,152,153]],["shareloft.com",151],["fineartsmuseum.recreatex.be",[154,155,156]],["jaapeden.nl",[154,155,156]],["eboo.lu",157],["lasmallagency.com",158],["lhsystems.com",[159,160,161,162]],["twomates.de",163],["intergiro.com",164],["healthygamer.gg",165],["telepizza.es",[166,167,168]],["telepizza.pt",[166,167,168]],["frisco.pl",169],["tyleenslang.nl",170],["schrikdraad.net",170],["kruiwagen.net",170],["pvcvoordeel.nl",170],["pvcbuis.com",170],["drainagebuizen.nl",170],["likewise.com",171],["longines.com",[172,173,174,175]],["vater-it.de",176],["biano.hu",177],["nadia.gov.gr",178],["hana-book.fr",179],["kzvb.de",180],["correosexpress.com",181],["cexpr.es",181],["rte.ie",182],["smart.com",183],["gry.pl",183],["gamesgames.com",183],["games.co.uk",183],["jetztspielen.de",183],["ourgames.ru",183],["permainan.co.id",183],["gioco.it",183],["jeux.fr",183],["juegos.com",183],["ojogos.com.br",183],["oyunskor.com",183],["spela.se",183],["spelletjes.nl",183],["agame.com",183],["spielen.com",183],["flashgames.ru",183],["games.co.id",183],["giochi.it",183],["jeu.fr",183],["spel.nl",183],["sartor-stoffe.de",184],["rockpoint.cz",184],["rockpoint.sk",184],["parfum-zentrum.de",184],["candy-store.cz",184],["tridge.com",185],["asus.com",[186,187]],["drinksking.sk",188],["neuhauschocolates.com",189],["commandsuite.it",190],["oktea.tw",191],["bafin.de",192],["materna.de",192],["bamf.de",192],["tenvinilo-argentina.com",[193,194]],["eikaforsikring.no",[195,196]],["eurowings.com",[197,198,199]],["newpharma.be",[200,201,202]],["newpharma.fr",[200,201,202]],["newpharma.de",[200,201,202]],["newpharma.at",[200,201,202]],["newpharma.nl",[200,201,202]],["kapoorwatch.com",203],["instantoffices.com",204],["paf.se",204],["citibank.pl",204],["citibankonline.pl",204],["azertyfactor.be",205],["zelezodum.cz",206],["thw.de",207],["bafa.de",207],["bka.de",207],["bmbf.de",207],["weather.com",208],["bolist.se",[209,210]],["project529.com",210],["evivanlanschot.nl",211],["prenatal.nl",212],["onnibus.com",[212,850,851,852]],["kyoceradocumentsolutions.us",[212,896,897]],["kyoceradocumentsolutions.ch",[212,896,897]],["kyoceradocumentsolutions.co.uk",[212,896,897]],["kyoceradocumentsolutions.de",[212,896,897]],["kyoceradocumentsolutions.es",[212,896,897]],["kyoceradocumentsolutions.eu",[212,896,897]],["kyoceradocumentsolutions.fr",[212,896,897]],["kyoceradocumentsolutions.it",[212,896,897]],["kyoceradocumentsolutions.ru",[212,896,897]],["kyoceradocumentsolutions.mx",[212,896,897]],["kyoceradocumentsolutions.cl",[212,896,897]],["kyoceradocumentsolutions.com.br",[212,896,897]],["wagner-tuning.com",[213,214,215,216]],["waitrosecellar.com",[217,218,219,220]],["waitrose.com",[217,571]],["kvk.nl",[221,222,223]],["macfarlanes.com",224],["pole-emploi.fr",225],["gardenmediaguild.co.uk",226],["samplerite.com",227],["samplerite.cn",227],["sororedit.com",228],["blukit.com.br",229],["biegnaszczyt.pl",230],["staff-gallery.com",231],["itv.com",232],["dvag.de",233],["premierinn.com",[234,235,236,237]],["whitbreadinns.co.uk",[234,235,236,237]],["barandblock.co.uk",[234,235,236,237]],["tabletable.co.uk",[234,235,236,237]],["brewersfayre.co.uk",[234,235,236,237]],["beefeater.co.uk",[234,235,236,237]],["allstarssportsbars.co.uk",[238,239]],["babiesrus.ca",240],["toysrus.ca",240],["roomsandspaces.ca",240],["athletic-club.eus",[241,242,243]],["wattoo.dk",244],["wattoo.no",244],["texthelp.com",[245,246]],["courierexchange.co.uk",[247,248,249]],["haulageexchange.co.uk",[247,248,249]],["ecaytrade.com",250],["powerball.com",251],["tlaciarik.sk",251],["tiskarik.cz",251],["sseriga.edu",[252,253]],["rt.com",254],["swrng.de",255],["crfop.gdos.gov.pl",256],["nurgutes.de",257],["kpcen-torun.edu.pl",258],["opintopolku.fi",259],["app.erevie.pl",260],["debenhams.com",261],["archiwumalle.pl",262],["konicaminolta.ca",263],["konicaminolta.us",263],["deutschebank-dbdirect.com",[264,265,266]],["dbonline.deutsche-bank.es",[264,265,266]],["deutsche-bank.es",[264,265,266]],["hipotecaonline.db.com",267],["kangasalansanomat.fi",268],["eif.org",269],["tunnelmb.net",269],["sugi-net.jp",270],["understandingsociety.ac.uk",271],["leibniz.com",272],["horecaworld.biz",[272,540]],["horecaworld.be",[272,540]],["bettertires.com",272],["electroprecio.com",272],["autohero.com",272],["computerbase.de",[272,893]],["sistemacomponentes.com.br",273],["bargaintown.ie",274],["tui.nl",275],["doppelmayr.com",276],["case-score.com",[277,278]],["cote.co.uk",279],["finimize.com",279],["k-einbruch.de",[280,281]],["blxxded.com",280],["rtu.lv",282],["sysdream.com",283],["cinemarkca.com",284],["neander-zahn.de",285],["theadelphileeds.co.uk",286],["tobycarvery.co.uk",286],["carsupermarket.com",286],["viajesatodotren.com",287],["ticketingcine.fr",288],["agenziavista.it",289],["e-chladiva.cz",289],["bitecode.dev",290],["mjob.si",[291,292,293]],["airportrentacar.gr",294],["mobile-fueling.de",294],["plos.org",295],["autohaus24.de",296],["sixt-neuwagen.de",296],["gadis.es",[297,298]],["dom.ru",298],["ford-kimmerle-reutlingen.de",299],["autohaus-reitermayer.de",299],["autohaus-diefenbach-waldbrunn.de",299],["autohaus-diefenbach.de",299],["autohaus-musberg.de",299],["ford-ah-im-hunsrueck-simmern.de",299],["ford-arndt-goerlitz.de",299],["ford-autogalerie-alfeld.de",299],["ford-bacher-schrobenhausen.de",299],["ford-bathauer-bad-harzburg.de",299],["ford-behrend-waren.de",299],["ford-bergland-frankfurt-oder.de",299],["ford-bergland-wipperfuerth.de",299],["ford-besico-glauchau.de",299],["ford-besico-nuernberg.de",299],["ford-bischoff-neumuenster.de",299],["ford-bodach-borgentreich.de",299],["ford-bunk-saarbruecken.de",299],["ford-bunk-voelklingen.de",299],["ford-busch-kirchberg.de",299],["ford-diermeier-muenchen.de",299],["ford-dinnebier-leipzig.de",299],["ford-duennes-regensburg.de",299],["ford-fischer-bochum.de",299],["ford-fischer-muenster.de",299],["ford-foerster-koblenz.de",299],["ford-fuchs-uffenheim.de",299],["ford-geberzahn-koeln.de",299],["ford-gerstmann-duesseldorf.de",299],["ford-haefner-und-strunk-kassel.de",299],["ford-hartmann-kempten.de",299],["ford-hartmann-rastatt.de",299],["ford-hatzner-karlsruhe.de",299],["ford-heine-hoexter.de",299],["ford-hentschel-hildesheim.de",299],["ford-hessengarage-dreieich.de",299],["ford-hessengarage-frankfurt.de",299],["ford-hga-windeck.de",299],["ford-hommert-coburg.de",299],["ford-horstmann-rastede.de",299],["ford-janssen-sonsbeck.de",299],["ford-jochem-stingbert.de",299],["ford-jungmann-wuppertal.de",299],["ford-kestel-marktzeuln.de",299],["ford-klaiber-bad-friedrichshall.de",299],["ford-koenig-eschwege.de",299],["ford-kohlhoff-mannheim.de",299],["ford-kt-automobile-coesfeld.de",299],["ford-lackermann-wesel.de",299],["ford-ludewig-delligsen.de",299],["ford-maiwald-linsengericht.de",299],["ford-mertens-beckum.de",299],["ford-meyer-bad-oeynhausen.de",299],["ford-mgs-bayreuth.de",299],["ford-mgs-radebeul.de",299],["ford-muecke-berlin.de",299],["ford-norren-weissenthurm.de",299],["ford-nrw-garage-duesseldorf.de",299],["ford-nrw-garage-handweiser.de",299],["ford-nuding-remshalden.de",299],["ford-ohm-rendsburg.de",299],["ford-reinicke-muecheln.de",299],["ford-rennig.de",299],["ford-roerentrop-luenen.de",299],["ford-schankola-dudweiler.de",299],["ford-sg-goeppingen.de",299],["ford-sg-leonberg.de",299],["ford-sg-neu-ulm.de",299],["ford-sg-pforzheim.de",299],["ford-sg-waiblingen.de",299],["ford-storz-st-georgen.de",299],["ford-strunk-koeln.de",299],["ford-tobaben-hamburg.de",299],["ford-toenjes-zetel.de",299],["ford-wagner-mayen.de",299],["ford-wahl-fritzlar.de",299],["ford-wahl-siegen.de",299],["ford-weege-bad-salzuflen.de",299],["ford-westhoff-hamm.de",299],["ford-wieland-hasbergen.de",299],["renault-autocenterprignitz-pritzwalk.de",299],["renault-spenrath-juelich.de",299],["vitalllit.com",300],["fincaparera.com",300],["dbnetbcn.com",300],["viba.barcelona",300],["anafaustinoatelier.com",300],["lamparasherrero.com",300],["calteixidor.cat",300],["argentos.barcelona",300],["anmarlube.com",300],["anynouxines.barcelona",300],["crearunapaginaweb.cat",300],["cualesmiip.com",300],["porndoe.com",[301,302,303]],["thinkingaustralia.com",304],["elrow.com",305],["ownit.se",306],["velo-antwerpen.be",[307,308]],["wwnorton.com",309],["pc-canada.com",310],["mullgs.se",311],["1a-sehen.de",312],["feature.fm",313],["comte.com",314],["baltic-watches.com",315],["np-brijuni.hr",315],["vilgain.com",315],["tradingview.com",316],["wevolver.com",317],["experienciasfree.com",318],["freemans.com",319],["kivikangas.fi",320],["lumingerie.com",320],["melkkobrew.fi",320],["kh.hu",[321,322,323]],["aplgo.com",324],["securityconference.org",325],["aha.or.at",[326,329]],["fantasyfitnessing.com",327],["chocolateemporium.com",328],["account.samsung.com",330],["crushwineco.com",331],["levi.pt",332],["fertagus.pt",333],["smiggle.co.uk",334],["ubisoft.com",[335,336,337,338]],["store.ubisoft.com",[335,338,776,777]],["thulb.uni-jena.de",339],["splityourticket.co.uk",340],["eramba.org",341],["openai.com",[342,343]],["kupbilecik.com",[344,345]],["kupbilecik.de",[344,345]],["kupbilecik.pl",[344,345]],["shopilya.com",346],["arera.it",347],["haustier-berater.de",347],["hfm-frankfurt.de",347],["zoommer.ge",348],["studentapan.se",349],["petcity.lt",[350,351,352,353]],["tobroco.com",[354,358]],["tobroco.nl",[354,358]],["tobroco-giant.com",[354,358]],["geosfreiberg.de",[355,356]],["eapvic.org",357],["bassolsenergia.com",357],["bammusic.com",[359,361,362]],["green-24.de",360],["phish-test.de",363],["bokadirekt.se",364],["ford.lt",365],["ford.pt",365],["ford.fr",365],["ford.de",365],["ford.dk",365],["ford.pl",365],["ford.se",365],["ford.nl",365],["ford.no",365],["ford.fi",365],["ford.gr",365],["ford.it",365],["data-media.gr",366],["e-food.gr",[367,368]],["bvmed.de",369],["babyshop.com",[370,371,372]],["griffbereit24.de",373],["checkwx.com",374],["calendardate.com",375],["wefashion.ch",376],["wefashion.fr",376],["wefashion.lu",376],["wefashion.be",376],["wefashion.de",376],["wefashion.nl",376],["brettspiel-angebote.de",[377,378]],["nio.com",379],["kancelarskepotreby.net",[380,381,382]],["segment-anything.com",383],["sketch.metademolab.com",384],["cambridgebs.co.uk",385],["freizeitbad-greifswald.de",386],["giuseppezanotti.com",[387,388,389]],["xcen.se",389],["biggreenegg.co.uk",390],["skihuette-oberbeuren.de",[391,392,393]],["pwsweather.com",394],["xfree.com",395],["theweathernetwork.com",[396,397]],["monese.com",[398,399,400]],["assos.com",398],["helmut-fischer.com",401],["myscience.org",402],["7-eleven.com",403],["airwallex.com",404],["streema.com",405],["gov.lv",406],["tise.com",407],["codecamps.com",408],["avell.com.br",409],["moneyfarm.com",410],["app.moneyfarm.com",410],["simpl.rent",411],["hubspot.com",412],["prodyna.com",[413,414,415,416]],["zutobi.com",[413,414,415,416]],["calm.com",[417,418]],["pubgesports.com",[419,420,421]],["outwrite.com",422],["sbermarket.ru",424],["atani.com",[425,426,427]],["croisieresendirect.com",428],["bgextras.co.uk",429],["sede.coruna.gal",430],["czech-server.cz",431],["hitech-gamer.com",432],["bialettikave.hu",[433,434,435]],["canalplus.com",[436,437,438]],["mader.bz.it",[439,440,441]],["supply.amazon.co.uk",442],["bhaptics.com",443],["cleverbot.com",444],["watchaut.film",445],["tuffaloy.com",446],["fanvue.com",446],["electronoobs.com",447],["xn--lkylen-vxa.se",448],["tiefenthaler-landtechnik.at",449],["tiefenthaler-landtechnik.ch",449],["tiefenthaler-landtechnik.de",449],["varma.fi",450],["vyos.io",451],["digimobil.es",[452,453]],["teenage.engineering",454],["merrell.pl",[455,717]],["converse.pl",455],["shop.wf-education.com",[455,717]],["werkenbijaswatson.nl",456],["converse.com",[457,458]],["buyandapply.nexus.org.uk",459],["img.ly",460],["halonen.fi",[460,492,493,494,495]],["carlson.fi",[460,492,493,494,495]],["cams.ashemaletube.com",[461,462]],["electronicacerler.com",[463,464,465]],["okpoznan.pl",[466,471]],["ielts.idp.com",467],["ielts.co.nz",467],["ielts.com.au",467],["einfach-einreichen.de",[468,469,470]],["endlesstools.io",472],["mbhszepkartya.hu",473],["casellimoveis.com.br",474],["embedplus.com",475],["e-file.pl",476],["sp215.info",477],["empik.com",478],["senda.pl",479],["befestigungsfuchs.de",480],["cut-tec.co.uk",481],["gaytimes.co.uk",482],["statisticsanddata.org",483],["hello.one",484],["paychex.com",485],["wildcat-koeln.de",486],["libraries.merton.gov.uk",[487,488]],["tommy.hr",[489,490]],["usit.uio.no",491],["demo-digital-twin.r-stahl.com",496],["la31devalladolid.com",[497,498]],["mx.com",499],["foxtrail.fjallraven.com",500],["dotwatcher.cc",501],["bazarchic.com",[502,503,504]],["seedrs.com",505],["mypensiontracker.co.uk",506],["praxisplan.at",[506,527]],["esimplus.me",507],["cineplanet.com.pe",508],["ecologi.com",509],["wamba.com",510],["eurac.edu",511],["akasaair.com",512],["rittal.com",513],["worstbassist.com",[514,515,516,517,518,519]],["zs-watch.com",520],["crown.com",521],["mesanalyses.fr",522],["teket.jp",523],["fish.shimano.com",[524,525,526]],["simsherpa.com",[528,529,530]],["translit.ru",531],["aruba.com",532],["aireuropa.com",533],["skfbearingselect.com",[534,535]],["scanrenovation.com",536],["ttela.se",537],["dominospizza.pl",538],["devagroup.pl",539],["secondsol.com",540],["angelifybeauty.com",541],["cotopaxi.com",542],["justjoin.it",543],["digibest.pt",544],["two-notes.com",545],["theverge.com",546],["daimant.co",547],["secularism.org.uk",548],["karriere-hamburg.de",549],["musicmap.info",550],["gasspisen.se",551],["medtube.pl",552],["medtube.es",552],["medtube.fr",552],["medtube.net",552],["standard.sk",553],["linmot.com",554],["larian.com",[554,840]],["s-court.me",554],["containerandpackaging.com",555],["top-yp.de",556],["termania.net",557],["account.nowpayments.io",558],["fizjobaza.pl",559],["gigasport.at",560],["gigasport.de",560],["gigasport.ch",560],["velleahome.gr",561],["nicequest.com",562],["handelsbanken.no",563],["handelsbanken.com",563],["handelsbanken.co.uk",563],["handelsbanken.se",[563,644]],["handelsbanken.dk",563],["handelsbanken.fi",563],["ilarahealth.com",564],["songtradr.com",[565,824]],["logo.pt",[566,567]],["flexwhere.co.uk",[568,570]],["flexwhere.de",[568,570]],["pricewise.nl",568],["getunleash.io",568],["dentmania.de",568],["free.navalny.com",568],["latoken.com",568],["empathy.com",569],["labs.epi2me.io",569],["campusbrno.cz",[572,573,574]],["secrid.com",575],["etsy.com",576],["careers.cloud.com",576],["blablacar.rs",577],["blablacar.ru",577],["blablacar.com.tr",577],["blablacar.com.ua",577],["blablacar.com.br",577],["seb.se",578],["sebgroup.com",578],["deps.dev",579],["buf.build",580],["starofservice.com",581],["ytcomment.kmcat.uk",582],["gmx.com",583],["gmx.fr",583],["karofilm.ru",584],["octopusenergy.it",585],["octopusenergy.es",[585,586]],["justanswer.es",587],["justanswer.de",587],["justanswer.com",587],["justanswer.co.uk",587],["citilink.ru",588],["huutokaupat.com",589],["kaggle.com",590],["emr.ch",[591,596]],["gem.cbc.ca",592],["pumatools.hu",593],["ici.tou.tv",594],["crunchyroll.com",595],["mayflex.com",597],["clipchamp.com",597],["trouwenbijfletcher.nl",597],["fletcher.nl",597],["fletcherzakelijk.nl",597],["intermatic.com",597],["ebikelohr.de",598],["eurosender.com",599],["melectronics.ch",600],["guard.io",601],["nokportalen.se",602],["dokiliko.com",603],["valamis.com",[604,605,606]],["sverigesingenjorer.se",607],["shop.almawin.de",[608,609,610,647]],["zeitzurtrauer.de",611],["skaling.de",[612,613,614]],["bringmeister.de",615],["gdx.net",616],["clearblue.com",617],["drewag.de",[618,619,620]],["enso.de",[618,619,620]],["buidlbox.io",618],["helitransair.com",621],["more.com",622],["nwslsoccer.com",622],["climatecentral.org",623],["resolution.de",624],["flagma.by",625],["eatsalad.com",626],["pacstall.dev",627],["web2.0calc.fr",628],["de-appletradein.likewize.com",629],["swissborg.com",630],["qwice.com",631],["canalpluskuchnia.pl",[632,633]],["uizard.io",634],["stmas.bayern.de",[635,638]],["novayagazeta.eu",636],["kinopoisk.ru",637],["yandex.ru",637],["go.netia.pl",[639,640]],["polsatboxgo.pl",[639,640]],["ing.it",[641,642]],["ing.nl",643],["youcom.com.br",645],["rule34.paheal.net",646],["deep-shine.de",647],["shop.ac-zaun-center.de",647],["kellermann-online.com",647],["kletterkogel.de",647],["pnel.de",647],["korodrogerie.de",647],["der-puten-shop.de",647],["katapult-shop.de",647],["evocsports.com",647],["esm-computer.de",647],["calmwaters.de",647],["mellerud.de",647],["akustik-projekt.at",647],["vansprint.de",647],["0815.at",647],["0815.eu",647],["ojskate.com",647],["der-schweighofer.de",647],["tz-bedarf.de",647],["zeinpharma.de",647],["weicon.com",647],["dagvandewebshop.be",647],["thiele-tee.de",647],["carbox.de",647],["riapsport.de",647],["trendpet.de",647],["eheizung24.de",647],["seemueller.com",647],["vivande.de",647],["heidegrill.com",647],["gladiator-fightwear.com",647],["h-andreas.com",647],["pp-parts.com",647],["natuerlich-holzschuhe.de",647],["massivart.de",647],["malermeister-shop.de",647],["imping-confiserie.de",647],["lenox-trading.at",647],["cklenk.de",647],["catolet.de",647],["drinkitnow.de",647],["patisserie-m.de",647],["storm-proof.com",647],["balance-fahrradladen.de",647],["magicpos.shop",647],["zeinpharma.com",647],["sps-handel.net",647],["novagenics.com",647],["butterfly-circus.de",647],["holzhof24.de",647],["w6-wertarbeit.de",647],["fleurop.de",647],["leki.com",647],["extremeaudio.de",647],["taste-market.de",647],["delker-optik.de",647],["stuhl24-shop.de",647],["g-nestle.de",647],["alpine-hygiene.ch",647],["fluidmaster.it",647],["cordon.de",647],["belisse-beauty.de",647],["belisse-beauty.co.uk",647],["wpc-shop24.de",647],["liv.si",647],["maybach-luxury.com",647],["leiternprofi24.de",647],["hela-shop.eu",647],["hitado.de",647],["j-koenig.de",647],["armedangels.com",[647,724,725]],["bvk-beamtenversorgung.de",648],["hofer-kerzen.at",649],["karls-shop.de",650],["luvly.care",651],["firmen.wko.at",651],["byggern.no",652],["donauauen.at",653],["woltair.cz",654],["rostics.ru",655],["hife.es",656],["lilcat.com",657],["hot.si",[658,659,660,661]],["crenolibre.fr",662],["e-pole.pl",663],["dopt.com",664],["keb-automation.com",665],["bonduelle.ru",666],["oxfordonlineenglish.com",667],["pccomponentes.fr",668],["pccomponentes.com",668],["pccomponentes.pt",668],["grants.at",669],["africa-uninet.at",669],["rqb.at",669],["youngscience.at",669],["oead.at",669],["innovationsstiftung-bildung.at",669],["etwinning.at",669],["arqa-vet.at",669],["zentrumfuercitizenscience.at",669],["vorstudienlehrgang.at",669],["erasmusplus.at",669],["jeger.pl",670],["bo.de",671],["thegamingwatcher.com",672],["norlysplay.dk",673],["plusujemy.pl",674],["asus.com.cn",[675,677]],["zentalk.asus.com",[675,677]],["mubi.com",676],["59northwheels.se",678],["photospecialist.co.uk",679],["foto-gregor.de",679],["kamera-express.de",679],["kamera-express.be",679],["kamera-express.nl",679],["kamera-express.fr",679],["kamera-express.lu",679],["dhbbank.com",680],["dhbbank.de",680],["dhbbank.be",680],["dhbbank.nl",680],["login.ingbank.pl",681],["fabrykacukiernika.pl",[682,683]],["peaks.com",684],["3landesmuseen-braunschweig.de",685],["unifachbuch.de",[686,687,688]],["playlumi.com",[689,690,691]],["chatfuel.com",692],["studio3t.com",[693,694,695,696]],["realgap.co.uk",[697,698,699,700]],["hotelborgia.com",[701,702]],["sweet24.de",703],["zwembaddekouter.be",704],["flixclassic.pl",705],["jobtoday.com",706],["deltatre.com",[707,708,722]],["withings.com",[709,710,711]],["blista.de",[712,713]],["hashop.nl",714],["gift.be",[715,716]],["elevator.de",717],["foryouehealth.de",717],["animaze.us",717],["penn-elcom.com",717],["curantus.de",717],["mtbmarket.de",717],["spanienweinonline.ch",717],["novap.fr",717],["bizkaia.eus",[718,719,720]],["sinparty.com",721],["mantel.com",723],["e-dojus.lv",726],["burnesspaull.com",727],["oncosur.org",728],["photobooth.online",729],["epidemicsound.com",730],["ryanair.com",731],["refurbished.at",[732,733,734]],["refurbished.nl",[732,733,734]],["refurbished.be",[732,733,734]],["refurbishedstore.de",[732,733,734]],["bayernportal.de",[735,736,737]],["ayudatpymes.com",738],["zipjob.com",738],["shoutcast.com",738],["plastischechirurgie-muenchen.info",739],["bonn.sitzung-online.de",740],["depop.com",[741,742,743]],["thenounproject.com",744],["pricehubble.com",745],["ilmotorsport.de",746],["karate.com",747],["psbank.ru",747],["myriad.social",747],["exeedme.com",747],["followalice.com",[747,815]],["aqua-store.fr",748],["voila.ca",749],["anastore.com",750],["app.arzt-direkt.de",751],["dasfutterhaus.at",752],["e-pity.pl",753],["fillup.pl",754],["dailymotion.com",755],["barcawelt.de",756],["lueneburger-heide.de",757],["polizei.bayern.de",[758,760]],["ourworldofpixels.com",759],["jku.at",761],["matkahuolto.fi",762],["backmarket.de",[763,764,765]],["backmarket.co.uk",[763,764,765]],["backmarket.es",[763,764,765]],["backmarket.be",[763,764,765]],["backmarket.at",[763,764,765]],["backmarket.fr",[763,764,765]],["backmarket.gr",[763,764,765]],["backmarket.fi",[763,764,765]],["backmarket.ie",[763,764,765]],["backmarket.it",[763,764,765]],["backmarket.nl",[763,764,765]],["backmarket.pt",[763,764,765]],["backmarket.se",[763,764,765]],["backmarket.sk",[763,764,765]],["backmarket.com",[763,764,765]],["eleven-sportswear.cz",[766,767,768]],["silvini.com",[766,767,768]],["silvini.de",[766,767,768]],["purefiji.cz",[766,767,768]],["voda-zdarma.cz",[766,767,768]],["lesgarconsfaciles.com",[766,767,768]],["ulevapronohy.cz",[766,767,768]],["vitalvibe.eu",[766,767,768]],["plavte.cz",[766,767,768]],["mo-tools.cz",[766,767,768]],["flamantonlineshop.cz",[766,767,768]],["sandratex.cz",[766,767,768]],["norwayshop.cz",[766,767,768]],["3d-foto.cz",[766,767,768]],["neviditelnepradlo.cz",[766,767,768]],["nutrimedium.com",[766,767,768]],["silvini.cz",[766,767,768]],["karel.cz",[766,767,768]],["silvini.sk",[766,767,768]],["book-n-drive.de",769],["cotswoldoutdoor.com",770],["cotswoldoutdoor.ie",770],["cam.start.canon",771],["usnews.com",772],["researchaffiliates.com",773],["singkinderlieder.de",774],["stiegeler.com",775],["ba.com",[778,779,780,781,782,783,784]],["britishairways.com",[778,779,780,781,782,783,784]],["cineman.pl",[785,786,787]],["tv-trwam.pl",[785,786,787,788]],["qatarairways.com",[789,790,791,792,793]],["wedding.pl",794],["vivaldi.com",795],["emuia1.gugik.gov.pl",796],["nike.com",797],["adidas.at",798],["adidas.be",798],["adidas.ca",798],["adidas.ch",798],["adidas.cl",798],["adidas.co",798],["adidas.co.in",798],["adidas.co.kr",798],["adidas.co.nz",798],["adidas.co.th",798],["adidas.co.uk",798],["adidas.com",798],["adidas.com.ar",798],["adidas.com.au",798],["adidas.com.br",798],["adidas.com.my",798],["adidas.com.ph",798],["adidas.com.vn",798],["adidas.cz",798],["adidas.de",798],["adidas.dk",798],["adidas.es",798],["adidas.fi",798],["adidas.fr",798],["adidas.gr",798],["adidas.ie",798],["adidas.it",798],["adidas.mx",798],["adidas.nl",798],["adidas.no",798],["adidas.pe",798],["adidas.pl",798],["adidas.pt",798],["adidas.ru",798],["adidas.se",798],["adidas.sk",798],["colourbox.com",799],["ebilet.pl",800],["myeventeo.com",801],["snap.com",802],["louwman.nl",[803,804]],["ratemyprofessors.com",805],["filen.io",806],["leotrippi.com",807],["restaurantclub.pl",807],["context.news",807],["queisser.de",807],["grandprixradio.dk",[808,809,810,811,812]],["grandprixradio.nl",[808,809,810,811,812]],["grandprixradio.be",[808,809,810,811,812]],["businessclass.com",813],["quantamagazine.org",814],["hellotv.nl",816],["jisc.ac.uk",817],["lasestrellas.tv",818],["xn--digitaler-notenstnder-m2b.com",819],["schoonmaakgroothandelemmen.nl",819],["nanuko.de",819],["hair-body-24.de",819],["shopforyou47.de",819],["kreativverliebt.de",819],["anderweltverlag.com",819],["octavio-shop.com",819],["forcetools-kepmar.eu",819],["fantecshop.de",819],["hexen-werkstatt.shop",819],["shop-naturstrom.de",819],["biona-shop.de",819],["camokoenig.de",819],["bikepro.de",819],["kaffeediscount.com",819],["vamos-skateshop.com",819],["holland-shop.com",819],["avonika.com",819],["royal-oak.org",820],["hurton.pl",821],["officesuite.com",822],["fups.com",[823,825]],["scienceopen.com",826],["moebel-mahler-siebenlehn.de",[827,828]],["calendly.com",829],["batesenvironmental.co.uk",[830,831]],["ubereats.com",832],["101internet.ru",833],["bein.com",834],["beinsports.com",834],["figshare.com",835],["bitso.com",836],["gallmeister.fr",837],["eco-toimistotarvikkeet.fi",838],["proficient.fi",838],["developer.ing.com",839],["webtrack.dhlglobalmail.com",841],["webtrack.dhlecs.com",841],["ehealth.gov.gr",842],["calvinklein.se",[843,844,845]],["calvinklein.fi",[843,844,845]],["calvinklein.sk",[843,844,845]],["calvinklein.si",[843,844,845]],["calvinklein.ch",[843,844,845]],["calvinklein.ru",[843,844,845]],["calvinklein.com",[843,844,845]],["calvinklein.pt",[843,844,845]],["calvinklein.pl",[843,844,845]],["calvinklein.at",[843,844,845]],["calvinklein.nl",[843,844,845]],["calvinklein.hu",[843,844,845]],["calvinklein.lu",[843,844,845]],["calvinklein.lt",[843,844,845]],["calvinklein.lv",[843,844,845]],["calvinklein.it",[843,844,845]],["calvinklein.ie",[843,844,845]],["calvinklein.hr",[843,844,845]],["calvinklein.fr",[843,844,845]],["calvinklein.es",[843,844,845]],["calvinklein.ee",[843,844,845]],["calvinklein.de",[843,844,845]],["calvinklein.dk",[843,844,845]],["calvinklein.cz",[843,844,845]],["calvinklein.bg",[843,844,845]],["calvinklein.be",[843,844,845]],["calvinklein.co.uk",[843,844,845]],["ofdb.de",846],["dtksoft.com",847],["serverstoplist.com",848],["truecaller.com",849],["arturofuente.com",[853,855,856]],["protos.com",[853,855,856]],["timhortons.co.th",[853,854,855,857,859,860]],["toyota.co.uk",[853,854,855,858,859,860]],["businessaccountingbasics.co.uk",[853,854,855,857,859,860]],["flickr.org",[853,854,855,857,859,860]],["espacocasa.com",853],["altraeta.it",853],["centrooceano.it",853],["allstoresdigital.com",853],["cultarm3d.de",853],["soulbounce.com",853],["fluidtopics.com",853],["uvetgbt.com",853],["malcorentacar.com",853],["emondo.de",853],["maspero.it",853],["kelkay.com",853],["underground-england.com",853],["vert.eco",853],["turcolegal.com",853],["magnet4blogging.net",853],["moovly.com",853],["automationafrica.co.za",853],["jornaldoalgarve.pt",853],["keravanenergia.fi",853],["kuopas.fi",853],["frag-machiavelli.de",853],["healthera.co.uk",853],["mobeleader.com",853],["powerup-gaming.com",853],["developer-blog.net",853],["medical.edu.mt",853],["deh.mt",853],["bluebell-railway.com",853],["ribescasals.com",853],["javea.com",853],["chinaimportal.com",853],["inds.co.uk",853],["raoul-follereau.org",853],["serramenti-milano.it",853],["cosasdemujer.com",853],["luz-blanca.info",853],["cosasdeviajes.com",853],["safehaven.io",853],["havocpoint.it",853],["motofocus.pl",853],["nomanssky.com",853],["drei-franken-info.de",853],["clausnehring.com",853],["alttab.net",853],["kinderleicht.berlin",853],["kiakkoradio.fi",853],["cosasdelcaribe.es",853],["de-sjove-jokes.dk",853],["serverprofis.de",853],["biographyonline.net",853],["iziconfort.com",853],["sportinnederland.com",853],["natureatblog.com",853],["wtsenergy.com",853],["cosasdesalud.es",853],["internetpasoapaso.com",853],["zurzeit.at",853],["contaspoupanca.pt",853],["steamdeckhq.com",[853,854,855,857,859,860]],["ipouritinc.com",[853,855,857]],["hemglass.se",[853,855,857,859,860]],["sumsub.com",[853,854,855]],["atman.pl",[853,854,855]],["fabriziovanmarciano.com",[853,854,855]],["nationalrail.com",[853,854,855]],["eett.gr",[853,854,855]],["funkypotato.com",[853,854,855]],["equalexchange.co.uk",[853,854,855]],["swnsdigital.com",[853,854,855]],["gogolf.fi",[853,857]],["hanse-haus-greifswald.de",853],["tampereenratikka.fi",[853,855,861,862]],["kymppikatsastus.fi",[855,859,905,906]],["brasiltec.ind.br",863],["doka.com",[864,865,866]],["abi.de",[867,868]],["studienwahl.de",[867,868]],["journal.hr",[869,870,871,872]],["howstuffworks.com",873],["stickypassword.com",[874,875,876]],["conversion-rate-experts.com",[877,878]],["merkur.si",[879,880,881]],["petitionenligne.com",[882,883]],["petitionenligne.be",[882,883]],["petitionenligne.fr",[882,883]],["petitionenligne.re",[882,883]],["petitionenligne.ch",[882,883]],["skrivunder.net",[882,883]],["petitiononline.uk",[882,883]],["petitions.nz",[882,883]],["petizioni.com",[882,883]],["peticao.online",[882,883]],["skrivunder.com",[882,883]],["peticiones.ar",[882,883]],["petities.com",[882,883]],["petitionen.com",[882,883]],["petice.com",[882,883]],["opprop.net",[882,883]],["peticiok.com",[882,883]],["peticiones.net",[882,883]],["peticion.es",[882,883]],["peticiones.pe",[882,883]],["peticiones.mx",[882,883]],["peticiones.cl",[882,883]],["peticije.online",[882,883]],["peticiones.co",[882,883]],["mediathek.lfv-bayern.de",884],["aluypvc.es",[885,886,887]],["pracuj.pl",[888,889,890,891,892]],["vki.at",894],["konsument.at",894],["chollometro.com",895],["dealabs.com",895],["hotukdeals.com",895],["pepper.it",895],["pepper.pl",895],["preisjaeger.at",895],["mydealz.de",895],["direct.travelinsurance.tescobank.com",[898,899,900,901,902,903,904,905]],["mediaite.com",907],["easyfind.ch",[908,909]],["e-shop.leonidas.com",[910,911]],["lastmile.lt",912],["veriff.com",913],["constantin.film",[914,915,916]],["notion.so",917],["omgevingsloketinzage.omgeving.vlaanderen.be",[918,919]],["primor.eu",920],["tameteo.com",921],["tempo.pt",921],["yourweather.co.uk",921],["meteored.cl",921],["meteored.mx",921],["tempo.com",921],["ilmeteo.net",921],["meteored.com.ar",921],["daswetter.com",921],["myprivacy.dpgmediagroup.net",922],["algarvevacation.net",923],["3sat.de",924],["oxxio.nl",[925,926]],["butterflyshop.dk",[927,928,929]],["praxis.nl",930],["brico.be",930],["kent.gov.uk",[931,932]],["pohjanmaanhyvinvointi.fi",933],["maanmittauslaitos.fi",934]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setCookie(
    name = '',
    value = '',
    path = ''
) {
    if ( name === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-cookie', name, value, path);

    const validValues = [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'deny',
        'allowed', 'disallow',
        'enable', 'disable',
        'enabled', 'disabled',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'necessary', 'required',
        'approved', 'disapproved',
        'hide', 'hidden',
    ];
    const normalized = value.toLowerCase();
    const match = /^("?)(.+)\1$/.exec(normalized);
    const unquoted = match && match[2] || normalized;
    if ( validValues.includes(unquoted) === false ) {
        if ( /^\d+$/.test(unquoted) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 32767 ) { return; }
    }

    const done = setCookieFn(
        false,
        name,
        value,
        '',
        path,
        safe.getExtraArgs(Array.from(arguments), 3)
    );

    if ( done ) {
        safe.uboLog(logPrefix, 'Done');
    }
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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

function setCookieFn(
    trusted = false,
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    // https://datatracker.ietf.org/doc/html/rfc2616#section-2.2
    // https://github.com/uBlockOrigin/uBlock-issues/issues/2777
    if ( trusted === false && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(name) ) {
        name = encodeURIComponent(name);
    }
    // https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
    // The characters [",] are given a pass from the RFC requirements because
    // apparently browsers do not follow the RFC to the letter.
    if ( /[^ -:<-[\]-~]/.test(value) ) {
        value = encodeURIComponent(value);
    }

    const cookieBefore = getCookieFn(name);
    if ( cookieBefore !== undefined && options.dontOverwrite ) { return; }
    if ( cookieBefore === value && options.reload ) { return; }

    const cookieParts = [ name, '=', value ];
    if ( expires !== '' ) {
        cookieParts.push('; expires=', expires);
    }

    if ( path === '' ) { path = '/'; }
    else if ( path === 'none' ) { path = ''; }
    if ( path !== '' && path !== '/' ) { return; }
    if ( path === '/' ) {
        cookieParts.push('; path=/');
    }

    if ( trusted ) {
        if ( options.domain ) {
            cookieParts.push(`; domain=${options.domain}`);
        }
        cookieParts.push('; Secure');
    } else if ( /^__(Host|Secure)-/.test(name) ) {
        cookieParts.push('; Secure');
    }

    try {
        document.cookie = cookieParts.join('');
    } catch(_) {
    }

    const done = getCookieFn(name) === value;
    if ( done && options.reload ) {
        window.location.reload();
    }

    return done;
}

function getCookieFn(
    name = ''
) {
    for ( const s of document.cookie.split(/\s*;\s*/) ) {
        const pos = s.indexOf('=');
        if ( pos === -1 ) { continue; }
        if ( s.slice(0, pos) !== name ) { continue; }
        return s.slice(pos+1).trim();
    }
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
    try { setCookie(...argsList[i]); }
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setCookie();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setCookie = cloneInto([
            [ '(', uBOL_setCookie.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setCookie);
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
    delete page.uBOL_setCookie;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
