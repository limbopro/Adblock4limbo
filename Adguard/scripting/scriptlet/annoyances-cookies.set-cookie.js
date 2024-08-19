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

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["GDPR","9"],["cookie-consent","false"],["has_accepted_cookies","true"],["cs_viewed_cookie_policy","yes"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["cookienotification","1"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["CookieConsent","false"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["cookieconsent","deny"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["consents","essential"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["CA_DT_V2","0","","reload","1"],["CA_DT_V3","0"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"],["TVPtcs22ver","64"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["marinelink.com",3],["thegraph.com",4],["followalice.com",[4,762]],["graphy.com",5],["raspberrypi.dk",6],["ocean.io",7],["waves.is",8],["tesa.com",9],["gls-group.eu",12],["copaamerica.com",13],["cooleygo.com",14],["map.blitzortung.org",15],["northumbriasport.com",16],["clearspend.natwest.com",17],["cellcolabsclinical.com",18],["producthunt.com",19],["motorsportreg.com",[20,21]],["imola.motorsportreg.com",[22,23]],["pga.com",24],["portal.payment.eltax.lta.go.jp",25],["greenbuildingadvisor.com",[26,27,28]],["finewoodworking.com",[26,27,28]],["privatekeys.pw",29],["telli.dpd.ee",30],["youthforum.org",30],["votegroup.de",[31,32]],["pharmahall.gr",33],["x-team.com",34],["reservations.helveticmotion.ch",35],["endclothing.com",[36,37]],["arning-bau.de",38],["kraftwerk.co.at",39],["fhr.biz",40],["srf.nu",41],["jn.fo",[42,43]],["rovia.es",44],["airnewzealand.co.nz",45],["viu.com",46],["dinamalar.com",47],["volkswagen-group.com",48],["solo.io",49],["pomelo.la",50],["ibuypower.com",51],["sberbank.com",[52,437]],["swissmilk.ch",53],["gamemaker.io",54],["pixiv.net",55],["kinemaster.com",56],["sp32bb.pl",57],["jazz.fm",58],["juntadeandalucia.es",59],["melee.gg",[60,61,62]],["chemocare.com",63],["mobiliteit.nl",64],["xledger.net",65],["reviewmeta.com",66],["guide-bordeaux-gironde.com",67],["travelinsured.com",68],["gdpr.twitter.com",69],["mora.hu",70],["confused.com",71],["physikinstrumente.de",72],["karlknauer.de",72],["schoeck.com",72],["resonate.coop",72],["northgatevehiclehire.ie",72],["badhall.at",72],["cic.ch",72],["ilsaggiatore.com",73],["forum.digitalfernsehen.de",74],["bitscrunch.com",[75,76,77]],["hannahgraaf.com",78],["shop.elbers-hof.de",[79,80]],["woolsocks.eu",81],["uza.be",82],["5asec.ch",82],["wizards.com",82],["kitepackaging.co.uk",[83,84]],["parkenflughafen.de",85],["radyofenomen.com",86],["elsate.com",87],["hume.ai",88],["lotusantwerp.wacs.online",89],["gitbook.io",90],["gitbook.com",90],["thehacker.recipes",90],["docs.dyrector.io",90],["makeresearchpay.com",91],["tandartsenpraktijk-simons.tandartsennet.nl",92],["huisartsenpraktijkdoorn.nl",92],["bcorporation.net",93],["knime.com",[93,137]],["quebueno.es",93],["edookit.com",94],["trixonline.be",95],["radio-canada.ca",96],["heysummit.com",97],["puromarketing.com",98],["radicalmotorsport.com",99],["biurobox.pl",100],["cycling74.com",101],["triviacreator.com",102],["freshis.com",102],["anker.com",102],["computacenter.com",103],["playbalatro.com",104],["kastner-oehler.de",105],["kastner-oehler.at",105],["kastner-oehler.ch",105],["twenga.it",106],["twenga.fr",106],["twenga.co.uk",106],["twenga.de",106],["twenga.es",106],["twenga.pl",106],["twenga.nl",106],["twenga.se",106],["olx.kz",107],["efl.com",108],["wst.tv",108],["cuvva.com",109],["vitbikes.de",110],["gourmetfoodstore.com",111],["schulfahrt.de",112],["deutsche-finanzagentur.de",113],["thejazzcafelondon.com",114],["keeb.supply",115],["spb.hh.ru",116],["kaluga.hh.ru",116],["school.hh.ru",116],["rating.hh.ru",116],["novgorod.hh.ru",116],["xxxshemaleporn.com",[117,118]],["gayhits.com",[117,118]],["gaypornvideos.xxx",[117,118]],["sextubespot.com",[117,118]],["wewantjusticedao.org",119],["godbolt.org",120],["projectenglish.com.pl",[121,127]],["ledenicheur.fr",121],["pricespy.co.uk",121],["pricespy.co.nz",121],["sae.fsc.ccoo.es",122],["piusx-college.nl",123],["forgeofempires.com",124],["yoomoney.ru",125],["vod.warszawa.pl",126],["m.twitch.tv",128],["environment.data.gov.uk",129],["playtesting.games",130],["portal.by.aok.de",131],["umlandscout.de",132],["atombank.co.uk",[133,134,135]],["showtv.com.tr",136],["seventhgeneration.com",137],["press.princeton.edu",137],["ldz.lv",137],["crtm.es",138],["airastana.com",139],["vkf-renzel.nl",140],["booking.reederei-zingst.de",[141,142,143]],["booking.weisse-flotte.de",[141,142,143]],["booking2.reederei-hiddensee.de",[141,142,143]],["sanswiss.pl",144],["galaxy.com",145],["petdesk.com",146],["ivyexec.com",147],["railtech.com",148],["lottehotel.com",[149,150,151,152,153]],["paydirekt.de",154],["kijiji.ca",155],["posterstore.fr",156],["posterstore.eu",156],["posterstore.be",156],["posterstore.de",156],["posterstore.hu",156],["posterstore.ie",156],["posterstore.it",156],["posterstore.no",156],["posterstore.nl",156],["posterstore.pl",156],["posterstore.com",156],["posterstore.ae",156],["posterstore.ca",156],["posterstore.nz",156],["posterstore.es",156],["posterstore.kr",156],["posterstore.jp",156],["posterstore.dk",156],["posterstore.se",156],["posterstore.ch",156],["posterstore.at",156],["myriadicity.net",157],["dgsf.org",157],["endgame.id",158],["cashback-cards.ch",159],["swisscard.ch",159],["ahorn24.de",160],["blockdyor.com",161],["ticket.io",162],["omega-nuernberg.servicebund.com",163],["lojaboschferramentas.com.br",[164,166,167]],["shareloft.com",165],["fineartsmuseum.recreatex.be",[168,169,170]],["jaapeden.nl",[168,169,170]],["eboo.lu",171],["lasmallagency.com",172],["lhsystems.com",[173,174,175,176]],["twomates.de",177],["intergiro.com",178],["healthygamer.gg",179],["telepizza.es",[180,181,182]],["telepizza.pt",[180,181,182]],["frisco.pl",183],["tyleenslang.nl",184],["schrikdraad.net",184],["kruiwagen.net",184],["pvcvoordeel.nl",184],["pvcbuis.com",184],["drainagebuizen.nl",184],["likewise.com",185],["longines.com",[186,187,188,189]],["vater-it.de",190],["biano.hu",191],["nadia.gov.gr",192],["hana-book.fr",193],["kzvb.de",194],["correosexpress.com",195],["cexpr.es",195],["rte.ie",196],["smart.com",197],["gry.pl",197],["gamesgames.com",197],["games.co.uk",197],["jetztspielen.de",197],["ourgames.ru",197],["permainan.co.id",197],["gioco.it",197],["jeux.fr",197],["juegos.com",197],["ojogos.com.br",197],["oyunskor.com",197],["spela.se",197],["spelletjes.nl",197],["agame.com",197],["spielen.com",197],["flashgames.ru",197],["games.co.id",197],["giochi.it",197],["jeu.fr",197],["spel.nl",197],["sartor-stoffe.de",198],["rockpoint.cz",198],["rockpoint.sk",198],["parfum-zentrum.de",198],["candy-store.cz",198],["tridge.com",199],["asus.com",[200,201]],["drinksking.sk",202],["neuhauschocolates.com",203],["commandsuite.it",204],["oktea.tw",205],["bafin.de",206],["materna.de",206],["bamf.de",206],["tenvinilo-argentina.com",[207,208]],["eikaforsikring.no",[209,210]],["eurowings.com",[211,212,213]],["newpharma.be",[214,215,216]],["newpharma.fr",[214,215,216]],["newpharma.de",[214,215,216]],["newpharma.at",[214,215,216]],["newpharma.nl",[214,215,216]],["kapoorwatch.com",217],["instantoffices.com",218],["paf.se",218],["citibank.pl",218],["citibankonline.pl",218],["azertyfactor.be",219],["zelezodum.cz",220],["thw.de",221],["bafa.de",221],["bka.de",221],["bmbf.de",221],["weather.com",222],["bolist.se",[223,224]],["project529.com",224],["evivanlanschot.nl",225],["prenatal.nl",226],["onnibus.com",[226,864,865,866]],["kyoceradocumentsolutions.us",[226,913,914]],["kyoceradocumentsolutions.ch",[226,913,914]],["kyoceradocumentsolutions.co.uk",[226,913,914]],["kyoceradocumentsolutions.de",[226,913,914]],["kyoceradocumentsolutions.es",[226,913,914]],["kyoceradocumentsolutions.eu",[226,913,914]],["kyoceradocumentsolutions.fr",[226,913,914]],["kyoceradocumentsolutions.it",[226,913,914]],["kyoceradocumentsolutions.ru",[226,913,914]],["kyoceradocumentsolutions.mx",[226,913,914]],["kyoceradocumentsolutions.cl",[226,913,914]],["kyoceradocumentsolutions.com.br",[226,913,914]],["wagner-tuning.com",[227,228,229,230]],["waitrosecellar.com",[231,232,233,234]],["waitrose.com",[231,585]],["kvk.nl",[235,236,237]],["macfarlanes.com",238],["pole-emploi.fr",239],["gardenmediaguild.co.uk",240],["samplerite.com",241],["samplerite.cn",241],["sororedit.com",242],["blukit.com.br",243],["biegnaszczyt.pl",244],["staff-gallery.com",245],["itv.com",246],["dvag.de",247],["premierinn.com",[248,249,250,251]],["whitbreadinns.co.uk",[248,249,250,251]],["barandblock.co.uk",[248,249,250,251]],["tabletable.co.uk",[248,249,250,251]],["brewersfayre.co.uk",[248,249,250,251]],["beefeater.co.uk",[248,249,250,251]],["allstarssportsbars.co.uk",[252,253]],["babiesrus.ca",254],["toysrus.ca",254],["roomsandspaces.ca",254],["athletic-club.eus",[255,256,257]],["wattoo.dk",258],["wattoo.no",258],["texthelp.com",[259,260]],["courierexchange.co.uk",[261,262,263]],["haulageexchange.co.uk",[261,262,263]],["ecaytrade.com",264],["powerball.com",265],["tlaciarik.sk",265],["tiskarik.cz",265],["sseriga.edu",[266,267]],["rt.com",268],["swrng.de",269],["crfop.gdos.gov.pl",270],["nurgutes.de",271],["kpcen-torun.edu.pl",272],["opintopolku.fi",273],["app.erevie.pl",274],["debenhams.com",275],["archiwumalle.pl",276],["konicaminolta.ca",277],["konicaminolta.us",277],["deutschebank-dbdirect.com",[278,279,280]],["dbonline.deutsche-bank.es",[278,279,280]],["deutsche-bank.es",[278,279,280]],["hipotecaonline.db.com",281],["kangasalansanomat.fi",282],["eif.org",283],["tunnelmb.net",283],["sugi-net.jp",284],["understandingsociety.ac.uk",285],["leibniz.com",286],["horecaworld.biz",[286,554]],["horecaworld.be",[286,554]],["bettertires.com",286],["electroprecio.com",286],["autohero.com",286],["computerbase.de",[286,908]],["sistemacomponentes.com.br",287],["bargaintown.ie",288],["tui.nl",289],["doppelmayr.com",290],["case-score.com",[291,292]],["cote.co.uk",293],["finimize.com",293],["k-einbruch.de",[294,295]],["blxxded.com",294],["rtu.lv",296],["sysdream.com",297],["cinemarkca.com",298],["neander-zahn.de",299],["theadelphileeds.co.uk",300],["tobycarvery.co.uk",300],["carsupermarket.com",300],["viajesatodotren.com",301],["ticketingcine.fr",302],["agenziavista.it",303],["e-chladiva.cz",303],["bitecode.dev",304],["mjob.si",[305,306,307]],["airportrentacar.gr",308],["mobile-fueling.de",308],["plos.org",309],["autohaus24.de",310],["sixt-neuwagen.de",310],["gadis.es",[311,312]],["dom.ru",312],["ford-kimmerle-reutlingen.de",313],["autohaus-reitermayer.de",313],["autohaus-diefenbach-waldbrunn.de",313],["autohaus-diefenbach.de",313],["autohaus-musberg.de",313],["ford-ah-im-hunsrueck-simmern.de",313],["ford-arndt-goerlitz.de",313],["ford-autogalerie-alfeld.de",313],["ford-bacher-schrobenhausen.de",313],["ford-bathauer-bad-harzburg.de",313],["ford-behrend-waren.de",313],["ford-bergland-frankfurt-oder.de",313],["ford-bergland-wipperfuerth.de",313],["ford-besico-glauchau.de",313],["ford-besico-nuernberg.de",313],["ford-bischoff-neumuenster.de",313],["ford-bodach-borgentreich.de",313],["ford-bunk-saarbruecken.de",313],["ford-bunk-voelklingen.de",313],["ford-busch-kirchberg.de",313],["ford-diermeier-muenchen.de",313],["ford-dinnebier-leipzig.de",313],["ford-duennes-regensburg.de",313],["ford-fischer-bochum.de",313],["ford-fischer-muenster.de",313],["ford-foerster-koblenz.de",313],["ford-fuchs-uffenheim.de",313],["ford-geberzahn-koeln.de",313],["ford-gerstmann-duesseldorf.de",313],["ford-haefner-und-strunk-kassel.de",313],["ford-hartmann-kempten.de",313],["ford-hartmann-rastatt.de",313],["ford-hatzner-karlsruhe.de",313],["ford-heine-hoexter.de",313],["ford-hentschel-hildesheim.de",313],["ford-hessengarage-dreieich.de",313],["ford-hessengarage-frankfurt.de",313],["ford-hga-windeck.de",313],["ford-hommert-coburg.de",313],["ford-horstmann-rastede.de",313],["ford-janssen-sonsbeck.de",313],["ford-jochem-stingbert.de",313],["ford-jungmann-wuppertal.de",313],["ford-kestel-marktzeuln.de",313],["ford-klaiber-bad-friedrichshall.de",313],["ford-koenig-eschwege.de",313],["ford-kohlhoff-mannheim.de",313],["ford-kt-automobile-coesfeld.de",313],["ford-lackermann-wesel.de",313],["ford-ludewig-delligsen.de",313],["ford-maiwald-linsengericht.de",313],["ford-mertens-beckum.de",313],["ford-meyer-bad-oeynhausen.de",313],["ford-mgs-bayreuth.de",313],["ford-mgs-radebeul.de",313],["ford-muecke-berlin.de",313],["ford-norren-weissenthurm.de",313],["ford-nrw-garage-duesseldorf.de",313],["ford-nrw-garage-handweiser.de",313],["ford-nuding-remshalden.de",313],["ford-ohm-rendsburg.de",313],["ford-reinicke-muecheln.de",313],["ford-rennig.de",313],["ford-roerentrop-luenen.de",313],["ford-schankola-dudweiler.de",313],["ford-sg-goeppingen.de",313],["ford-sg-leonberg.de",313],["ford-sg-neu-ulm.de",313],["ford-sg-pforzheim.de",313],["ford-sg-waiblingen.de",313],["ford-storz-st-georgen.de",313],["ford-strunk-koeln.de",313],["ford-tobaben-hamburg.de",313],["ford-toenjes-zetel.de",313],["ford-wagner-mayen.de",313],["ford-wahl-fritzlar.de",313],["ford-wahl-siegen.de",313],["ford-weege-bad-salzuflen.de",313],["ford-westhoff-hamm.de",313],["ford-wieland-hasbergen.de",313],["renault-autocenterprignitz-pritzwalk.de",313],["renault-spenrath-juelich.de",313],["vitalllit.com",314],["fincaparera.com",314],["dbnetbcn.com",314],["viba.barcelona",314],["anafaustinoatelier.com",314],["lamparasherrero.com",314],["calteixidor.cat",314],["argentos.barcelona",314],["anmarlube.com",314],["anynouxines.barcelona",314],["crearunapaginaweb.cat",314],["cualesmiip.com",314],["porndoe.com",[315,316,317]],["thinkingaustralia.com",318],["elrow.com",319],["ownit.se",320],["velo-antwerpen.be",[321,322]],["wwnorton.com",323],["pc-canada.com",324],["mullgs.se",325],["1a-sehen.de",326],["feature.fm",327],["comte.com",328],["baltic-watches.com",329],["np-brijuni.hr",329],["vilgain.com",329],["tradingview.com",330],["wevolver.com",331],["experienciasfree.com",332],["freemans.com",333],["kivikangas.fi",334],["lumingerie.com",334],["melkkobrew.fi",334],["kh.hu",[335,336,337]],["aplgo.com",338],["securityconference.org",339],["aha.or.at",[340,343]],["fantasyfitnessing.com",341],["chocolateemporium.com",342],["account.samsung.com",344],["crushwineco.com",345],["levi.pt",346],["fertagus.pt",347],["smiggle.co.uk",348],["ubisoft.com",[349,350,351,352]],["store.ubisoft.com",[349,352,791,792]],["thulb.uni-jena.de",353],["splityourticket.co.uk",354],["eramba.org",355],["openai.com",[356,357]],["kupbilecik.com",[358,359]],["kupbilecik.de",[358,359]],["kupbilecik.pl",[358,359]],["shopilya.com",360],["arera.it",361],["haustier-berater.de",361],["hfm-frankfurt.de",361],["zoommer.ge",362],["studentapan.se",363],["petcity.lt",[364,365,366,367]],["tobroco.com",[368,372]],["tobroco.nl",[368,372]],["tobroco-giant.com",[368,372]],["geosfreiberg.de",[369,370]],["eapvic.org",371],["bassolsenergia.com",371],["bammusic.com",[373,375,376]],["green-24.de",374],["phish-test.de",377],["bokadirekt.se",378],["ford.lt",379],["ford.pt",379],["ford.fr",379],["ford.de",379],["ford.dk",379],["ford.pl",379],["ford.se",379],["ford.nl",379],["ford.no",379],["ford.fi",379],["ford.gr",379],["ford.it",379],["data-media.gr",380],["e-food.gr",[381,382]],["bvmed.de",383],["babyshop.com",[384,385,386]],["griffbereit24.de",387],["checkwx.com",388],["calendardate.com",389],["wefashion.ch",390],["wefashion.fr",390],["wefashion.lu",390],["wefashion.be",390],["wefashion.de",390],["wefashion.nl",390],["brettspiel-angebote.de",[391,392]],["nio.com",393],["kancelarskepotreby.net",[394,395,396]],["segment-anything.com",397],["sketch.metademolab.com",398],["cambridgebs.co.uk",399],["freizeitbad-greifswald.de",400],["giuseppezanotti.com",[401,402,403]],["xcen.se",403],["biggreenegg.co.uk",404],["skihuette-oberbeuren.de",[405,406,407]],["pwsweather.com",408],["xfree.com",409],["theweathernetwork.com",[410,411]],["monese.com",[412,413,414]],["assos.com",412],["helmut-fischer.com",415],["myscience.org",416],["7-eleven.com",417],["airwallex.com",418],["streema.com",419],["gov.lv",420],["tise.com",421],["codecamps.com",422],["avell.com.br",423],["moneyfarm.com",424],["app.moneyfarm.com",424],["simpl.rent",425],["hubspot.com",426],["prodyna.com",[427,428,429,430]],["zutobi.com",[427,428,429,430]],["calm.com",[431,432]],["pubgesports.com",[433,434,435]],["outwrite.com",436],["sbermarket.ru",438],["atani.com",[439,440,441]],["croisieresendirect.com",442],["bgextras.co.uk",443],["sede.coruna.gal",444],["czech-server.cz",445],["hitech-gamer.com",446],["bialettikave.hu",[447,448,449]],["canalplus.com",[450,451,452]],["mader.bz.it",[453,454,455]],["supply.amazon.co.uk",456],["bhaptics.com",457],["cleverbot.com",458],["watchaut.film",459],["tuffaloy.com",460],["fanvue.com",460],["electronoobs.com",461],["xn--lkylen-vxa.se",462],["tiefenthaler-landtechnik.at",463],["tiefenthaler-landtechnik.ch",463],["tiefenthaler-landtechnik.de",463],["varma.fi",464],["vyos.io",465],["digimobil.es",[466,467]],["teenage.engineering",468],["merrell.pl",[469,732]],["converse.pl",469],["shop.wf-education.com",[469,732]],["werkenbijaswatson.nl",470],["converse.com",[471,472]],["buyandapply.nexus.org.uk",473],["img.ly",474],["halonen.fi",[474,506,507,508,509]],["carlson.fi",[474,506,507,508,509]],["cams.ashemaletube.com",[475,476]],["electronicacerler.com",[477,478,479]],["okpoznan.pl",[480,485]],["ielts.idp.com",481],["ielts.co.nz",481],["ielts.com.au",481],["einfach-einreichen.de",[482,483,484]],["endlesstools.io",486],["mbhszepkartya.hu",487],["casellimoveis.com.br",488],["embedplus.com",489],["e-file.pl",490],["sp215.info",491],["empik.com",492],["senda.pl",493],["befestigungsfuchs.de",494],["cut-tec.co.uk",495],["gaytimes.co.uk",496],["statisticsanddata.org",497],["hello.one",498],["paychex.com",499],["wildcat-koeln.de",500],["libraries.merton.gov.uk",[501,502]],["tommy.hr",[503,504]],["usit.uio.no",505],["demo-digital-twin.r-stahl.com",510],["la31devalladolid.com",[511,512]],["mx.com",513],["foxtrail.fjallraven.com",514],["dotwatcher.cc",515],["bazarchic.com",[516,517,518]],["seedrs.com",519],["mypensiontracker.co.uk",520],["praxisplan.at",[520,541]],["esimplus.me",521],["cineplanet.com.pe",522],["ecologi.com",523],["wamba.com",524],["eurac.edu",525],["akasaair.com",526],["rittal.com",527],["worstbassist.com",[528,529,530,531,532,533]],["zs-watch.com",534],["crown.com",535],["mesanalyses.fr",536],["teket.jp",537],["fish.shimano.com",[538,539,540]],["simsherpa.com",[542,543,544]],["translit.ru",545],["aruba.com",546],["aireuropa.com",547],["skfbearingselect.com",[548,549]],["scanrenovation.com",550],["ttela.se",551],["dominospizza.pl",552],["devagroup.pl",553],["secondsol.com",554],["angelifybeauty.com",555],["cotopaxi.com",556],["justjoin.it",557],["digibest.pt",558],["two-notes.com",559],["theverge.com",560],["daimant.co",561],["secularism.org.uk",562],["karriere-hamburg.de",563],["musicmap.info",564],["gasspisen.se",565],["medtube.pl",566],["medtube.es",566],["medtube.fr",566],["medtube.net",566],["standard.sk",567],["linmot.com",568],["larian.com",[568,854]],["s-court.me",568],["containerandpackaging.com",569],["top-yp.de",570],["termania.net",571],["account.nowpayments.io",572],["fizjobaza.pl",573],["gigasport.at",574],["gigasport.de",574],["gigasport.ch",574],["velleahome.gr",575],["nicequest.com",576],["handelsbanken.no",577],["handelsbanken.com",577],["handelsbanken.co.uk",577],["handelsbanken.se",[577,658]],["handelsbanken.dk",577],["handelsbanken.fi",577],["ilarahealth.com",578],["songtradr.com",[579,838]],["logo.pt",[580,581]],["flexwhere.co.uk",[582,584]],["flexwhere.de",[582,584]],["pricewise.nl",582],["getunleash.io",582],["dentmania.de",582],["free.navalny.com",582],["latoken.com",582],["empathy.com",583],["labs.epi2me.io",583],["campusbrno.cz",[586,587,588]],["secrid.com",589],["etsy.com",590],["careers.cloud.com",590],["blablacar.rs",591],["blablacar.ru",591],["blablacar.com.tr",591],["blablacar.com.ua",591],["blablacar.com.br",591],["seb.se",592],["sebgroup.com",592],["deps.dev",593],["buf.build",594],["starofservice.com",595],["ytcomment.kmcat.uk",596],["gmx.com",597],["gmx.fr",597],["karofilm.ru",598],["octopusenergy.it",599],["octopusenergy.es",[599,600]],["justanswer.es",601],["justanswer.de",601],["justanswer.com",601],["justanswer.co.uk",601],["citilink.ru",602],["huutokaupat.com",603],["kaggle.com",604],["emr.ch",[605,610]],["gem.cbc.ca",606],["pumatools.hu",607],["ici.tou.tv",608],["crunchyroll.com",609],["mayflex.com",611],["clipchamp.com",611],["trouwenbijfletcher.nl",611],["fletcher.nl",611],["fletcherzakelijk.nl",611],["intermatic.com",611],["ebikelohr.de",612],["eurosender.com",613],["melectronics.ch",614],["guard.io",615],["nokportalen.se",616],["dokiliko.com",617],["valamis.com",[618,619,620]],["sverigesingenjorer.se",621],["shop.almawin.de",[622,623,624,661]],["zeitzurtrauer.de",625],["skaling.de",[626,627,628]],["bringmeister.de",629],["gdx.net",630],["clearblue.com",631],["drewag.de",[632,633,634]],["enso.de",[632,633,634]],["buidlbox.io",632],["helitransair.com",635],["more.com",636],["nwslsoccer.com",636],["climatecentral.org",637],["resolution.de",638],["flagma.by",639],["eatsalad.com",640],["pacstall.dev",641],["web2.0calc.fr",642],["de-appletradein.likewize.com",643],["swissborg.com",644],["qwice.com",645],["canalpluskuchnia.pl",[646,647]],["uizard.io",648],["stmas.bayern.de",[649,652]],["novayagazeta.eu",650],["kinopoisk.ru",651],["yandex.ru",651],["go.netia.pl",[653,654]],["polsatboxgo.pl",[653,654]],["ing.it",[655,656]],["ing.nl",657],["youcom.com.br",659],["rule34.paheal.net",660],["deep-shine.de",661],["shop.ac-zaun-center.de",661],["kellermann-online.com",661],["kletterkogel.de",661],["pnel.de",661],["korodrogerie.de",661],["der-puten-shop.de",661],["katapult-shop.de",661],["evocsports.com",661],["esm-computer.de",661],["calmwaters.de",661],["mellerud.de",661],["akustik-projekt.at",661],["vansprint.de",661],["0815.at",661],["0815.eu",661],["ojskate.com",661],["der-schweighofer.de",661],["tz-bedarf.de",661],["zeinpharma.de",661],["weicon.com",661],["dagvandewebshop.be",661],["thiele-tee.de",661],["carbox.de",661],["riapsport.de",661],["trendpet.de",661],["eheizung24.de",661],["seemueller.com",661],["vivande.de",661],["heidegrill.com",661],["gladiator-fightwear.com",661],["h-andreas.com",661],["pp-parts.com",661],["natuerlich-holzschuhe.de",661],["massivart.de",661],["malermeister-shop.de",661],["imping-confiserie.de",661],["lenox-trading.at",661],["cklenk.de",661],["catolet.de",661],["drinkitnow.de",661],["patisserie-m.de",661],["storm-proof.com",661],["balance-fahrradladen.de",661],["magicpos.shop",661],["zeinpharma.com",661],["sps-handel.net",661],["novagenics.com",661],["butterfly-circus.de",661],["holzhof24.de",661],["w6-wertarbeit.de",661],["fleurop.de",661],["leki.com",661],["extremeaudio.de",661],["taste-market.de",661],["delker-optik.de",661],["stuhl24-shop.de",661],["g-nestle.de",661],["alpine-hygiene.ch",661],["fluidmaster.it",661],["cordon.de",661],["belisse-beauty.de",661],["belisse-beauty.co.uk",661],["wpc-shop24.de",661],["liv.si",661],["maybach-luxury.com",661],["leiternprofi24.de",661],["hela-shop.eu",661],["hitado.de",661],["j-koenig.de",661],["armedangels.com",[661,739,740]],["bvk-beamtenversorgung.de",662],["hofer-kerzen.at",663],["karls-shop.de",664],["luvly.care",665],["firmen.wko.at",665],["byggern.no",666],["donauauen.at",667],["woltair.cz",668],["rostics.ru",669],["hife.es",670],["lilcat.com",671],["hot.si",[672,673,674,675]],["crenolibre.fr",676],["monarchmoney.com",677],["e-pole.pl",678],["dopt.com",679],["keb-automation.com",680],["bonduelle.ru",681],["oxfordonlineenglish.com",682],["pccomponentes.fr",683],["pccomponentes.com",683],["pccomponentes.pt",683],["grants.at",684],["africa-uninet.at",684],["rqb.at",684],["youngscience.at",684],["oead.at",684],["innovationsstiftung-bildung.at",684],["etwinning.at",684],["arqa-vet.at",684],["zentrumfuercitizenscience.at",684],["vorstudienlehrgang.at",684],["erasmusplus.at",684],["jeger.pl",685],["bo.de",686],["thegamingwatcher.com",687],["norlysplay.dk",688],["plusujemy.pl",689],["asus.com.cn",[690,692]],["zentalk.asus.com",[690,692]],["mubi.com",691],["59northwheels.se",693],["photospecialist.co.uk",694],["foto-gregor.de",694],["kamera-express.de",694],["kamera-express.be",694],["kamera-express.nl",694],["kamera-express.fr",694],["kamera-express.lu",694],["dhbbank.com",695],["dhbbank.de",695],["dhbbank.be",695],["dhbbank.nl",695],["login.ingbank.pl",696],["fabrykacukiernika.pl",[697,698]],["peaks.com",699],["3landesmuseen-braunschweig.de",700],["unifachbuch.de",[701,702,703]],["playlumi.com",[704,705,706]],["chatfuel.com",707],["studio3t.com",[708,709,710,711]],["realgap.co.uk",[712,713,714,715]],["hotelborgia.com",[716,717]],["sweet24.de",718],["zwembaddekouter.be",719],["flixclassic.pl",720],["jobtoday.com",721],["deltatre.com",[722,723,737]],["withings.com",[724,725,726]],["blista.de",[727,728]],["hashop.nl",729],["gift.be",[730,731]],["elevator.de",732],["foryouehealth.de",732],["animaze.us",732],["penn-elcom.com",732],["curantus.de",732],["mtbmarket.de",732],["spanienweinonline.ch",732],["novap.fr",732],["bizkaia.eus",[733,734,735]],["sinparty.com",736],["mantel.com",738],["e-dojus.lv",741],["burnesspaull.com",742],["oncosur.org",743],["photobooth.online",744],["epidemicsound.com",745],["ryanair.com",746],["refurbished.at",[747,748,749]],["refurbished.nl",[747,748,749]],["refurbished.be",[747,748,749]],["refurbishedstore.de",[747,748,749]],["bayernportal.de",[750,751,752]],["ayudatpymes.com",753],["zipjob.com",753],["shoutcast.com",753],["plastischechirurgie-muenchen.info",754],["bonn.sitzung-online.de",755],["depop.com",[756,757,758]],["thenounproject.com",759],["pricehubble.com",760],["ilmotorsport.de",761],["karate.com",762],["psbank.ru",762],["myriad.social",762],["exeedme.com",762],["aqua-store.fr",763],["voila.ca",764],["anastore.com",765],["app.arzt-direkt.de",766],["dasfutterhaus.at",767],["e-pity.pl",768],["fillup.pl",769],["dailymotion.com",770],["barcawelt.de",771],["lueneburger-heide.de",772],["polizei.bayern.de",[773,775]],["ourworldofpixels.com",774],["jku.at",776],["matkahuolto.fi",777],["backmarket.de",[778,779,780]],["backmarket.co.uk",[778,779,780]],["backmarket.es",[778,779,780]],["backmarket.be",[778,779,780]],["backmarket.at",[778,779,780]],["backmarket.fr",[778,779,780]],["backmarket.gr",[778,779,780]],["backmarket.fi",[778,779,780]],["backmarket.ie",[778,779,780]],["backmarket.it",[778,779,780]],["backmarket.nl",[778,779,780]],["backmarket.pt",[778,779,780]],["backmarket.se",[778,779,780]],["backmarket.sk",[778,779,780]],["backmarket.com",[778,779,780]],["eleven-sportswear.cz",[781,782,783]],["silvini.com",[781,782,783]],["silvini.de",[781,782,783]],["purefiji.cz",[781,782,783]],["voda-zdarma.cz",[781,782,783]],["lesgarconsfaciles.com",[781,782,783]],["ulevapronohy.cz",[781,782,783]],["vitalvibe.eu",[781,782,783]],["plavte.cz",[781,782,783]],["mo-tools.cz",[781,782,783]],["flamantonlineshop.cz",[781,782,783]],["sandratex.cz",[781,782,783]],["norwayshop.cz",[781,782,783]],["3d-foto.cz",[781,782,783]],["neviditelnepradlo.cz",[781,782,783]],["nutrimedium.com",[781,782,783]],["silvini.cz",[781,782,783]],["karel.cz",[781,782,783]],["silvini.sk",[781,782,783]],["book-n-drive.de",784],["cotswoldoutdoor.com",785],["cotswoldoutdoor.ie",785],["cam.start.canon",786],["usnews.com",787],["researchaffiliates.com",788],["singkinderlieder.de",789],["stiegeler.com",790],["ba.com",[793,794,795,796,797,798,799]],["britishairways.com",[793,794,795,796,797,798,799]],["cineman.pl",[800,801,802]],["tv-trwam.pl",[800,801,802,803]],["qatarairways.com",[804,805,806,807,808]],["wedding.pl",809],["vivaldi.com",810],["emuia1.gugik.gov.pl",811],["nike.com",812],["adidas.at",813],["adidas.be",813],["adidas.ca",813],["adidas.ch",813],["adidas.cl",813],["adidas.co",813],["adidas.co.in",813],["adidas.co.kr",813],["adidas.co.nz",813],["adidas.co.th",813],["adidas.co.uk",813],["adidas.com",813],["adidas.com.ar",813],["adidas.com.au",813],["adidas.com.br",813],["adidas.com.my",813],["adidas.com.ph",813],["adidas.com.vn",813],["adidas.cz",813],["adidas.de",813],["adidas.dk",813],["adidas.es",813],["adidas.fi",813],["adidas.fr",813],["adidas.gr",813],["adidas.ie",813],["adidas.it",813],["adidas.mx",813],["adidas.nl",813],["adidas.no",813],["adidas.pe",813],["adidas.pl",813],["adidas.pt",813],["adidas.ru",813],["adidas.se",813],["adidas.sk",813],["colourbox.com",814],["ebilet.pl",815],["myeventeo.com",816],["snap.com",817],["louwman.nl",[818,819]],["ratemyprofessors.com",820],["filen.io",821],["leotrippi.com",822],["restaurantclub.pl",822],["context.news",822],["queisser.de",822],["grandprixradio.dk",[823,824,825,826,827]],["grandprixradio.nl",[823,824,825,826,827]],["grandprixradio.be",[823,824,825,826,827]],["businessclass.com",828],["quantamagazine.org",829],["hellotv.nl",830],["jisc.ac.uk",831],["lasestrellas.tv",832],["xn--digitaler-notenstnder-m2b.com",833],["schoonmaakgroothandelemmen.nl",833],["nanuko.de",833],["hair-body-24.de",833],["shopforyou47.de",833],["kreativverliebt.de",833],["anderweltverlag.com",833],["octavio-shop.com",833],["forcetools-kepmar.eu",833],["fantecshop.de",833],["hexen-werkstatt.shop",833],["shop-naturstrom.de",833],["biona-shop.de",833],["camokoenig.de",833],["bikepro.de",833],["kaffeediscount.com",833],["vamos-skateshop.com",833],["holland-shop.com",833],["avonika.com",833],["royal-oak.org",834],["hurton.pl",835],["officesuite.com",836],["fups.com",[837,839]],["scienceopen.com",840],["moebel-mahler-siebenlehn.de",[841,842]],["calendly.com",843],["batesenvironmental.co.uk",[844,845]],["ubereats.com",846],["101internet.ru",847],["bein.com",848],["beinsports.com",848],["figshare.com",849],["bitso.com",850],["gallmeister.fr",851],["eco-toimistotarvikkeet.fi",852],["proficient.fi",852],["developer.ing.com",853],["webtrack.dhlglobalmail.com",855],["webtrack.dhlecs.com",855],["ehealth.gov.gr",856],["calvinklein.se",[857,858,859]],["calvinklein.fi",[857,858,859]],["calvinklein.sk",[857,858,859]],["calvinklein.si",[857,858,859]],["calvinklein.ch",[857,858,859]],["calvinklein.ru",[857,858,859]],["calvinklein.com",[857,858,859]],["calvinklein.pt",[857,858,859]],["calvinklein.pl",[857,858,859]],["calvinklein.at",[857,858,859]],["calvinklein.nl",[857,858,859]],["calvinklein.hu",[857,858,859]],["calvinklein.lu",[857,858,859]],["calvinklein.lt",[857,858,859]],["calvinklein.lv",[857,858,859]],["calvinklein.it",[857,858,859]],["calvinklein.ie",[857,858,859]],["calvinklein.hr",[857,858,859]],["calvinklein.fr",[857,858,859]],["calvinklein.es",[857,858,859]],["calvinklein.ee",[857,858,859]],["calvinklein.de",[857,858,859]],["calvinklein.dk",[857,858,859]],["calvinklein.cz",[857,858,859]],["calvinklein.bg",[857,858,859]],["calvinklein.be",[857,858,859]],["calvinklein.co.uk",[857,858,859]],["ofdb.de",860],["dtksoft.com",861],["serverstoplist.com",862],["truecaller.com",863],["fruugo.fi",867],["worldcupchampionships.com",868],["arturofuente.com",[868,870,871]],["protos.com",[868,870,871]],["timhortons.co.th",[868,869,870,872,874,875]],["toyota.co.uk",[868,869,870,873,874,875]],["businessaccountingbasics.co.uk",[868,869,870,872,874,875]],["flickr.org",[868,869,870,872,874,875]],["espacocasa.com",868],["altraeta.it",868],["centrooceano.it",868],["allstoresdigital.com",868],["cultarm3d.de",868],["soulbounce.com",868],["fluidtopics.com",868],["uvetgbt.com",868],["malcorentacar.com",868],["emondo.de",868],["maspero.it",868],["kelkay.com",868],["underground-england.com",868],["vert.eco",868],["turcolegal.com",868],["magnet4blogging.net",868],["moovly.com",868],["automationafrica.co.za",868],["jornaldoalgarve.pt",868],["keravanenergia.fi",868],["kuopas.fi",868],["frag-machiavelli.de",868],["healthera.co.uk",868],["mobeleader.com",868],["powerup-gaming.com",868],["developer-blog.net",868],["medical.edu.mt",868],["deh.mt",868],["bluebell-railway.com",868],["ribescasals.com",868],["javea.com",868],["chinaimportal.com",868],["inds.co.uk",868],["raoul-follereau.org",868],["serramenti-milano.it",868],["cosasdemujer.com",868],["luz-blanca.info",868],["cosasdeviajes.com",868],["safehaven.io",868],["havocpoint.it",868],["motofocus.pl",868],["nomanssky.com",868],["drei-franken-info.de",868],["clausnehring.com",868],["alttab.net",868],["kinderleicht.berlin",868],["kiakkoradio.fi",868],["cosasdelcaribe.es",868],["de-sjove-jokes.dk",868],["serverprofis.de",868],["biographyonline.net",868],["iziconfort.com",868],["sportinnederland.com",868],["natureatblog.com",868],["wtsenergy.com",868],["cosasdesalud.es",868],["internetpasoapaso.com",868],["zurzeit.at",868],["contaspoupanca.pt",868],["steamdeckhq.com",[868,869,870,872,874,875]],["ipouritinc.com",[868,870,872]],["hemglass.se",[868,870,872,874,875]],["sumsub.com",[868,869,870]],["atman.pl",[868,869,870]],["fabriziovanmarciano.com",[868,869,870]],["nationalrail.com",[868,869,870]],["eett.gr",[868,869,870]],["funkypotato.com",[868,869,870]],["equalexchange.co.uk",[868,869,870]],["swnsdigital.com",[868,869,870]],["gogolf.fi",[868,872]],["hanse-haus-greifswald.de",868],["tampereenratikka.fi",[868,870,876,877]],["kymppikatsastus.fi",[870,874,922,923]],["brasiltec.ind.br",878],["doka.com",[879,880,881]],["abi.de",[882,883]],["studienwahl.de",[882,883]],["journal.hr",[884,885,886,887]],["howstuffworks.com",888],["stickypassword.com",[889,890,891]],["conversion-rate-experts.com",[892,893]],["merkur.si",[894,895,896]],["petitionenligne.com",[897,898]],["petitionenligne.be",[897,898]],["petitionenligne.fr",[897,898]],["petitionenligne.re",[897,898]],["petitionenligne.ch",[897,898]],["skrivunder.net",[897,898]],["petitiononline.uk",[897,898]],["petitions.nz",[897,898]],["petizioni.com",[897,898]],["peticao.online",[897,898]],["skrivunder.com",[897,898]],["peticiones.ar",[897,898]],["petities.com",[897,898]],["petitionen.com",[897,898]],["petice.com",[897,898]],["opprop.net",[897,898]],["peticiok.com",[897,898]],["peticiones.net",[897,898]],["peticion.es",[897,898]],["peticiones.pe",[897,898]],["peticiones.mx",[897,898]],["peticiones.cl",[897,898]],["peticije.online",[897,898]],["peticiones.co",[897,898]],["mediathek.lfv-bayern.de",899],["aluypvc.es",[900,901,902]],["pracuj.pl",[903,904,905,906,907]],["vki.at",909],["konsument.at",909],["chollometro.com",910],["dealabs.com",910],["hotukdeals.com",910],["pepper.it",910],["pepper.pl",910],["preisjaeger.at",910],["mydealz.de",910],["220.lv",[911,912]],["pigu.lt",[911,912]],["kaup24.ee",[911,912]],["hansapost.ee",[911,912]],["hobbyhall.fi",[911,912]],["direct.travelinsurance.tescobank.com",[915,916,917,918,919,920,921,922]],["mediaite.com",924],["easyfind.ch",[925,926]],["e-shop.leonidas.com",[927,928]],["lastmile.lt",929],["veriff.com",930],["constantin.film",[931,932,933]],["notion.so",934],["omgevingsloketinzage.omgeving.vlaanderen.be",[935,936]],["primor.eu",937],["tameteo.com",938],["tempo.pt",938],["yourweather.co.uk",938],["meteored.cl",938],["meteored.mx",938],["tempo.com",938],["ilmeteo.net",938],["meteored.com.ar",938],["daswetter.com",938],["myprivacy.dpgmediagroup.net",939],["algarvevacation.net",940],["3sat.de",941],["oxxio.nl",[942,943]],["butterflyshop.dk",[944,945,946]],["praxis.nl",947],["brico.be",947],["kent.gov.uk",[948,949]],["pohjanmaanhyvinvointi.fi",950],["maanmittauslaitos.fi",951],["tvpworld.com",952]]);

const entitiesMap = new Map([["top4mobile",[10,11]]]);

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
        'essential', 'nonessential',
        'dismiss', 'dismissed',
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
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
