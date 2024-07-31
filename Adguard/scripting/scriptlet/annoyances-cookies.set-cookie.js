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

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["GDPR","9"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["cookienotification","1"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["CookieConsent","false"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["marinelink.com",3],["ocean.io",4],["waves.is",5],["tesa.com",6],["gls-group.eu",9],["copaamerica.com",10],["cooleygo.com",11],["map.blitzortung.org",12],["northumbriasport.com",13],["clearspend.natwest.com",14],["cellcolabsclinical.com",15],["producthunt.com",16],["motorsportreg.com",[17,18]],["imola.motorsportreg.com",[19,20]],["pga.com",21],["portal.payment.eltax.lta.go.jp",22],["greenbuildingadvisor.com",[23,24,25]],["finewoodworking.com",[23,24,25]],["privatekeys.pw",26],["telli.dpd.ee",27],["youthforum.org",27],["votegroup.de",[28,29]],["pharmahall.gr",30],["x-team.com",31],["reservations.helveticmotion.ch",32],["endclothing.com",[33,34]],["arning-bau.de",35],["kraftwerk.co.at",36],["fhr.biz",37],["srf.nu",38],["jn.fo",[39,40]],["rovia.es",41],["airnewzealand.co.nz",42],["viu.com",43],["dinamalar.com",44],["volkswagen-group.com",45],["solo.io",46],["pomelo.la",47],["ibuypower.com",48],["sberbank.com",[49,434]],["swissmilk.ch",50],["gamemaker.io",51],["pixiv.net",52],["kinemaster.com",53],["sp32bb.pl",54],["jazz.fm",55],["juntadeandalucia.es",56],["melee.gg",[57,58,59]],["chemocare.com",60],["mobiliteit.nl",61],["xledger.net",62],["reviewmeta.com",63],["guide-bordeaux-gironde.com",64],["travelinsured.com",65],["gdpr.twitter.com",66],["mora.hu",67],["confused.com",68],["physikinstrumente.de",69],["karlknauer.de",69],["schoeck.com",69],["resonate.coop",69],["northgatevehiclehire.ie",69],["badhall.at",69],["cic.ch",69],["ilsaggiatore.com",70],["forum.digitalfernsehen.de",71],["bitscrunch.com",[72,73,74]],["hannahgraaf.com",75],["shop.elbers-hof.de",[76,77]],["woolsocks.eu",78],["uza.be",79],["5asec.ch",79],["wizards.com",79],["kitepackaging.co.uk",[80,81]],["parkenflughafen.de",82],["radyofenomen.com",83],["elsate.com",84],["hume.ai",85],["lotusantwerp.wacs.online",86],["gitbook.io",87],["gitbook.com",87],["thehacker.recipes",87],["docs.dyrector.io",87],["makeresearchpay.com",88],["tandartsenpraktijk-simons.tandartsennet.nl",89],["huisartsenpraktijkdoorn.nl",89],["bcorporation.net",90],["knime.com",[90,134]],["quebueno.es",90],["edookit.com",91],["trixonline.be",92],["radio-canada.ca",93],["heysummit.com",94],["puromarketing.com",95],["radicalmotorsport.com",96],["biurobox.pl",97],["cycling74.com",98],["triviacreator.com",99],["freshis.com",99],["anker.com",99],["computacenter.com",100],["playbalatro.com",101],["kastner-oehler.de",102],["kastner-oehler.at",102],["kastner-oehler.ch",102],["twenga.it",103],["twenga.fr",103],["twenga.co.uk",103],["twenga.de",103],["twenga.es",103],["twenga.pl",103],["twenga.nl",103],["twenga.se",103],["olx.kz",104],["efl.com",105],["wst.tv",105],["cuvva.com",106],["vitbikes.de",107],["gourmetfoodstore.com",108],["schulfahrt.de",109],["deutsche-finanzagentur.de",110],["thejazzcafelondon.com",111],["keeb.supply",112],["spb.hh.ru",113],["kaluga.hh.ru",113],["school.hh.ru",113],["rating.hh.ru",113],["novgorod.hh.ru",113],["xxxshemaleporn.com",[114,115]],["gayhits.com",[114,115]],["gaypornvideos.xxx",[114,115]],["sextubespot.com",[114,115]],["wewantjusticedao.org",116],["godbolt.org",117],["projectenglish.com.pl",[118,124]],["ledenicheur.fr",118],["pricespy.co.uk",118],["pricespy.co.nz",118],["sae.fsc.ccoo.es",119],["piusx-college.nl",120],["forgeofempires.com",121],["yoomoney.ru",122],["vod.warszawa.pl",123],["m.twitch.tv",125],["environment.data.gov.uk",126],["playtesting.games",127],["portal.by.aok.de",128],["umlandscout.de",129],["atombank.co.uk",[130,131,132]],["showtv.com.tr",133],["seventhgeneration.com",134],["press.princeton.edu",134],["ldz.lv",134],["crtm.es",135],["airastana.com",136],["vkf-renzel.nl",137],["booking.reederei-zingst.de",[138,139,140]],["booking.weisse-flotte.de",[138,139,140]],["booking2.reederei-hiddensee.de",[138,139,140]],["sanswiss.pl",141],["galaxy.com",142],["petdesk.com",143],["ivyexec.com",144],["railtech.com",145],["lottehotel.com",[146,147,148,149,150]],["paydirekt.de",151],["kijiji.ca",152],["posterstore.fr",153],["posterstore.eu",153],["posterstore.be",153],["posterstore.de",153],["posterstore.hu",153],["posterstore.ie",153],["posterstore.it",153],["posterstore.no",153],["posterstore.nl",153],["posterstore.pl",153],["posterstore.com",153],["posterstore.ae",153],["posterstore.ca",153],["posterstore.nz",153],["posterstore.es",153],["posterstore.kr",153],["posterstore.jp",153],["posterstore.dk",153],["posterstore.se",153],["posterstore.ch",153],["posterstore.at",153],["myriadicity.net",154],["dgsf.org",154],["endgame.id",155],["cashback-cards.ch",156],["swisscard.ch",156],["ahorn24.de",157],["blockdyor.com",158],["ticket.io",159],["omega-nuernberg.servicebund.com",160],["lojaboschferramentas.com.br",[161,163,164]],["shareloft.com",162],["fineartsmuseum.recreatex.be",[165,166,167]],["jaapeden.nl",[165,166,167]],["eboo.lu",168],["lasmallagency.com",169],["lhsystems.com",[170,171,172,173]],["twomates.de",174],["intergiro.com",175],["healthygamer.gg",176],["telepizza.es",[177,178,179]],["telepizza.pt",[177,178,179]],["frisco.pl",180],["tyleenslang.nl",181],["schrikdraad.net",181],["kruiwagen.net",181],["pvcvoordeel.nl",181],["pvcbuis.com",181],["drainagebuizen.nl",181],["likewise.com",182],["longines.com",[183,184,185,186]],["vater-it.de",187],["biano.hu",188],["nadia.gov.gr",189],["hana-book.fr",190],["kzvb.de",191],["correosexpress.com",192],["cexpr.es",192],["rte.ie",193],["smart.com",194],["gry.pl",194],["gamesgames.com",194],["games.co.uk",194],["jetztspielen.de",194],["ourgames.ru",194],["permainan.co.id",194],["gioco.it",194],["jeux.fr",194],["juegos.com",194],["ojogos.com.br",194],["oyunskor.com",194],["spela.se",194],["spelletjes.nl",194],["agame.com",194],["spielen.com",194],["flashgames.ru",194],["games.co.id",194],["giochi.it",194],["jeu.fr",194],["spel.nl",194],["sartor-stoffe.de",195],["rockpoint.cz",195],["rockpoint.sk",195],["parfum-zentrum.de",195],["candy-store.cz",195],["tridge.com",196],["asus.com",[197,198]],["drinksking.sk",199],["neuhauschocolates.com",200],["commandsuite.it",201],["oktea.tw",202],["bafin.de",203],["materna.de",203],["bamf.de",203],["tenvinilo-argentina.com",[204,205]],["eikaforsikring.no",[206,207]],["eurowings.com",[208,209,210]],["newpharma.be",[211,212,213]],["newpharma.fr",[211,212,213]],["newpharma.de",[211,212,213]],["newpharma.at",[211,212,213]],["newpharma.nl",[211,212,213]],["kapoorwatch.com",214],["instantoffices.com",215],["paf.se",215],["citibank.pl",215],["citibankonline.pl",215],["azertyfactor.be",216],["zelezodum.cz",217],["thw.de",218],["bafa.de",218],["bka.de",218],["bmbf.de",218],["weather.com",219],["bolist.se",[220,221]],["project529.com",221],["evivanlanschot.nl",222],["prenatal.nl",223],["onnibus.com",[223,861,862,863]],["kyoceradocumentsolutions.us",[223,907,908]],["kyoceradocumentsolutions.ch",[223,907,908]],["kyoceradocumentsolutions.co.uk",[223,907,908]],["kyoceradocumentsolutions.de",[223,907,908]],["kyoceradocumentsolutions.es",[223,907,908]],["kyoceradocumentsolutions.eu",[223,907,908]],["kyoceradocumentsolutions.fr",[223,907,908]],["kyoceradocumentsolutions.it",[223,907,908]],["kyoceradocumentsolutions.ru",[223,907,908]],["kyoceradocumentsolutions.mx",[223,907,908]],["kyoceradocumentsolutions.cl",[223,907,908]],["kyoceradocumentsolutions.com.br",[223,907,908]],["wagner-tuning.com",[224,225,226,227]],["waitrosecellar.com",[228,229,230,231]],["waitrose.com",[228,582]],["kvk.nl",[232,233,234]],["macfarlanes.com",235],["pole-emploi.fr",236],["gardenmediaguild.co.uk",237],["samplerite.com",238],["samplerite.cn",238],["sororedit.com",239],["blukit.com.br",240],["biegnaszczyt.pl",241],["staff-gallery.com",242],["itv.com",243],["dvag.de",244],["premierinn.com",[245,246,247,248]],["whitbreadinns.co.uk",[245,246,247,248]],["barandblock.co.uk",[245,246,247,248]],["tabletable.co.uk",[245,246,247,248]],["brewersfayre.co.uk",[245,246,247,248]],["beefeater.co.uk",[245,246,247,248]],["allstarssportsbars.co.uk",[249,250]],["babiesrus.ca",251],["toysrus.ca",251],["roomsandspaces.ca",251],["athletic-club.eus",[252,253,254]],["wattoo.dk",255],["wattoo.no",255],["texthelp.com",[256,257]],["courierexchange.co.uk",[258,259,260]],["haulageexchange.co.uk",[258,259,260]],["ecaytrade.com",261],["powerball.com",262],["tlaciarik.sk",262],["tiskarik.cz",262],["sseriga.edu",[263,264]],["rt.com",265],["swrng.de",266],["crfop.gdos.gov.pl",267],["nurgutes.de",268],["kpcen-torun.edu.pl",269],["opintopolku.fi",270],["app.erevie.pl",271],["debenhams.com",272],["archiwumalle.pl",273],["konicaminolta.ca",274],["konicaminolta.us",274],["deutschebank-dbdirect.com",[275,276,277]],["dbonline.deutsche-bank.es",[275,276,277]],["deutsche-bank.es",[275,276,277]],["hipotecaonline.db.com",278],["kangasalansanomat.fi",279],["eif.org",280],["tunnelmb.net",280],["sugi-net.jp",281],["understandingsociety.ac.uk",282],["leibniz.com",283],["horecaworld.biz",[283,551]],["horecaworld.be",[283,551]],["bettertires.com",283],["electroprecio.com",283],["autohero.com",283],["computerbase.de",[283,904]],["sistemacomponentes.com.br",284],["bargaintown.ie",285],["tui.nl",286],["doppelmayr.com",287],["case-score.com",[288,289]],["cote.co.uk",290],["finimize.com",290],["k-einbruch.de",[291,292]],["blxxded.com",291],["rtu.lv",293],["sysdream.com",294],["cinemarkca.com",295],["neander-zahn.de",296],["theadelphileeds.co.uk",297],["tobycarvery.co.uk",297],["carsupermarket.com",297],["viajesatodotren.com",298],["ticketingcine.fr",299],["agenziavista.it",300],["e-chladiva.cz",300],["bitecode.dev",301],["mjob.si",[302,303,304]],["airportrentacar.gr",305],["mobile-fueling.de",305],["plos.org",306],["autohaus24.de",307],["sixt-neuwagen.de",307],["gadis.es",[308,309]],["dom.ru",309],["ford-kimmerle-reutlingen.de",310],["autohaus-reitermayer.de",310],["autohaus-diefenbach-waldbrunn.de",310],["autohaus-diefenbach.de",310],["autohaus-musberg.de",310],["ford-ah-im-hunsrueck-simmern.de",310],["ford-arndt-goerlitz.de",310],["ford-autogalerie-alfeld.de",310],["ford-bacher-schrobenhausen.de",310],["ford-bathauer-bad-harzburg.de",310],["ford-behrend-waren.de",310],["ford-bergland-frankfurt-oder.de",310],["ford-bergland-wipperfuerth.de",310],["ford-besico-glauchau.de",310],["ford-besico-nuernberg.de",310],["ford-bischoff-neumuenster.de",310],["ford-bodach-borgentreich.de",310],["ford-bunk-saarbruecken.de",310],["ford-bunk-voelklingen.de",310],["ford-busch-kirchberg.de",310],["ford-diermeier-muenchen.de",310],["ford-dinnebier-leipzig.de",310],["ford-duennes-regensburg.de",310],["ford-fischer-bochum.de",310],["ford-fischer-muenster.de",310],["ford-foerster-koblenz.de",310],["ford-fuchs-uffenheim.de",310],["ford-geberzahn-koeln.de",310],["ford-gerstmann-duesseldorf.de",310],["ford-haefner-und-strunk-kassel.de",310],["ford-hartmann-kempten.de",310],["ford-hartmann-rastatt.de",310],["ford-hatzner-karlsruhe.de",310],["ford-heine-hoexter.de",310],["ford-hentschel-hildesheim.de",310],["ford-hessengarage-dreieich.de",310],["ford-hessengarage-frankfurt.de",310],["ford-hga-windeck.de",310],["ford-hommert-coburg.de",310],["ford-horstmann-rastede.de",310],["ford-janssen-sonsbeck.de",310],["ford-jochem-stingbert.de",310],["ford-jungmann-wuppertal.de",310],["ford-kestel-marktzeuln.de",310],["ford-klaiber-bad-friedrichshall.de",310],["ford-koenig-eschwege.de",310],["ford-kohlhoff-mannheim.de",310],["ford-kt-automobile-coesfeld.de",310],["ford-lackermann-wesel.de",310],["ford-ludewig-delligsen.de",310],["ford-maiwald-linsengericht.de",310],["ford-mertens-beckum.de",310],["ford-meyer-bad-oeynhausen.de",310],["ford-mgs-bayreuth.de",310],["ford-mgs-radebeul.de",310],["ford-muecke-berlin.de",310],["ford-norren-weissenthurm.de",310],["ford-nrw-garage-duesseldorf.de",310],["ford-nrw-garage-handweiser.de",310],["ford-nuding-remshalden.de",310],["ford-ohm-rendsburg.de",310],["ford-reinicke-muecheln.de",310],["ford-rennig.de",310],["ford-roerentrop-luenen.de",310],["ford-schankola-dudweiler.de",310],["ford-sg-goeppingen.de",310],["ford-sg-leonberg.de",310],["ford-sg-neu-ulm.de",310],["ford-sg-pforzheim.de",310],["ford-sg-waiblingen.de",310],["ford-storz-st-georgen.de",310],["ford-strunk-koeln.de",310],["ford-tobaben-hamburg.de",310],["ford-toenjes-zetel.de",310],["ford-wagner-mayen.de",310],["ford-wahl-fritzlar.de",310],["ford-wahl-siegen.de",310],["ford-weege-bad-salzuflen.de",310],["ford-westhoff-hamm.de",310],["ford-wieland-hasbergen.de",310],["renault-autocenterprignitz-pritzwalk.de",310],["renault-spenrath-juelich.de",310],["vitalllit.com",311],["fincaparera.com",311],["dbnetbcn.com",311],["viba.barcelona",311],["anafaustinoatelier.com",311],["lamparasherrero.com",311],["calteixidor.cat",311],["argentos.barcelona",311],["anmarlube.com",311],["anynouxines.barcelona",311],["crearunapaginaweb.cat",311],["cualesmiip.com",311],["porndoe.com",[312,313,314]],["thinkingaustralia.com",315],["elrow.com",316],["ownit.se",317],["velo-antwerpen.be",[318,319]],["wwnorton.com",320],["pc-canada.com",321],["mullgs.se",322],["1a-sehen.de",323],["feature.fm",324],["comte.com",325],["baltic-watches.com",326],["np-brijuni.hr",326],["vilgain.com",326],["tradingview.com",327],["wevolver.com",328],["experienciasfree.com",329],["freemans.com",330],["kivikangas.fi",331],["lumingerie.com",331],["melkkobrew.fi",331],["kh.hu",[332,333,334]],["aplgo.com",335],["securityconference.org",336],["aha.or.at",[337,340]],["fantasyfitnessing.com",338],["chocolateemporium.com",339],["account.samsung.com",341],["crushwineco.com",342],["levi.pt",343],["fertagus.pt",344],["smiggle.co.uk",345],["ubisoft.com",[346,347,348,349]],["store.ubisoft.com",[346,349,787,788]],["thulb.uni-jena.de",350],["splityourticket.co.uk",351],["eramba.org",352],["openai.com",[353,354]],["kupbilecik.com",[355,356]],["kupbilecik.de",[355,356]],["kupbilecik.pl",[355,356]],["shopilya.com",357],["arera.it",358],["haustier-berater.de",358],["hfm-frankfurt.de",358],["zoommer.ge",359],["studentapan.se",360],["petcity.lt",[361,362,363,364]],["tobroco.com",[365,369]],["tobroco.nl",[365,369]],["tobroco-giant.com",[365,369]],["geosfreiberg.de",[366,367]],["eapvic.org",368],["bassolsenergia.com",368],["bammusic.com",[370,372,373]],["green-24.de",371],["phish-test.de",374],["bokadirekt.se",375],["ford.lt",376],["ford.pt",376],["ford.fr",376],["ford.de",376],["ford.dk",376],["ford.pl",376],["ford.se",376],["ford.nl",376],["ford.no",376],["ford.fi",376],["ford.gr",376],["ford.it",376],["data-media.gr",377],["e-food.gr",[378,379]],["bvmed.de",380],["babyshop.com",[381,382,383]],["griffbereit24.de",384],["checkwx.com",385],["calendardate.com",386],["wefashion.ch",387],["wefashion.fr",387],["wefashion.lu",387],["wefashion.be",387],["wefashion.de",387],["wefashion.nl",387],["brettspiel-angebote.de",[388,389]],["nio.com",390],["kancelarskepotreby.net",[391,392,393]],["segment-anything.com",394],["sketch.metademolab.com",395],["cambridgebs.co.uk",396],["freizeitbad-greifswald.de",397],["giuseppezanotti.com",[398,399,400]],["xcen.se",400],["biggreenegg.co.uk",401],["skihuette-oberbeuren.de",[402,403,404]],["pwsweather.com",405],["xfree.com",406],["theweathernetwork.com",[407,408]],["monese.com",[409,410,411]],["assos.com",409],["helmut-fischer.com",412],["myscience.org",413],["7-eleven.com",414],["airwallex.com",415],["streema.com",416],["gov.lv",417],["tise.com",418],["codecamps.com",419],["avell.com.br",420],["moneyfarm.com",421],["app.moneyfarm.com",421],["simpl.rent",422],["hubspot.com",423],["prodyna.com",[424,425,426,427]],["zutobi.com",[424,425,426,427]],["calm.com",[428,429]],["pubgesports.com",[430,431,432]],["outwrite.com",433],["sbermarket.ru",435],["atani.com",[436,437,438]],["croisieresendirect.com",439],["bgextras.co.uk",440],["sede.coruna.gal",441],["czech-server.cz",442],["hitech-gamer.com",443],["bialettikave.hu",[444,445,446]],["canalplus.com",[447,448,449]],["mader.bz.it",[450,451,452]],["supply.amazon.co.uk",453],["bhaptics.com",454],["cleverbot.com",455],["watchaut.film",456],["tuffaloy.com",457],["fanvue.com",457],["electronoobs.com",458],["xn--lkylen-vxa.se",459],["tiefenthaler-landtechnik.at",460],["tiefenthaler-landtechnik.ch",460],["tiefenthaler-landtechnik.de",460],["varma.fi",461],["vyos.io",462],["digimobil.es",[463,464]],["teenage.engineering",465],["merrell.pl",[466,728]],["converse.pl",466],["shop.wf-education.com",[466,728]],["werkenbijaswatson.nl",467],["converse.com",[468,469]],["buyandapply.nexus.org.uk",470],["img.ly",471],["halonen.fi",[471,503,504,505,506]],["carlson.fi",[471,503,504,505,506]],["cams.ashemaletube.com",[472,473]],["electronicacerler.com",[474,475,476]],["okpoznan.pl",[477,482]],["ielts.idp.com",478],["ielts.co.nz",478],["ielts.com.au",478],["einfach-einreichen.de",[479,480,481]],["endlesstools.io",483],["mbhszepkartya.hu",484],["casellimoveis.com.br",485],["embedplus.com",486],["e-file.pl",487],["sp215.info",488],["empik.com",489],["senda.pl",490],["befestigungsfuchs.de",491],["cut-tec.co.uk",492],["gaytimes.co.uk",493],["statisticsanddata.org",494],["hello.one",495],["paychex.com",496],["wildcat-koeln.de",497],["libraries.merton.gov.uk",[498,499]],["tommy.hr",[500,501]],["usit.uio.no",502],["demo-digital-twin.r-stahl.com",507],["la31devalladolid.com",[508,509]],["mx.com",510],["foxtrail.fjallraven.com",511],["dotwatcher.cc",512],["bazarchic.com",[513,514,515]],["seedrs.com",516],["mypensiontracker.co.uk",517],["praxisplan.at",[517,538]],["esimplus.me",518],["cineplanet.com.pe",519],["ecologi.com",520],["wamba.com",521],["eurac.edu",522],["akasaair.com",523],["rittal.com",524],["worstbassist.com",[525,526,527,528,529,530]],["zs-watch.com",531],["crown.com",532],["mesanalyses.fr",533],["teket.jp",534],["fish.shimano.com",[535,536,537]],["simsherpa.com",[539,540,541]],["translit.ru",542],["aruba.com",543],["aireuropa.com",544],["skfbearingselect.com",[545,546]],["scanrenovation.com",547],["ttela.se",548],["dominospizza.pl",549],["devagroup.pl",550],["secondsol.com",551],["angelifybeauty.com",552],["cotopaxi.com",553],["justjoin.it",554],["digibest.pt",555],["two-notes.com",556],["theverge.com",557],["daimant.co",558],["secularism.org.uk",559],["karriere-hamburg.de",560],["musicmap.info",561],["gasspisen.se",562],["medtube.pl",563],["medtube.es",563],["medtube.fr",563],["medtube.net",563],["standard.sk",564],["linmot.com",565],["larian.com",[565,851]],["s-court.me",565],["containerandpackaging.com",566],["top-yp.de",567],["termania.net",568],["account.nowpayments.io",569],["fizjobaza.pl",570],["gigasport.at",571],["gigasport.de",571],["gigasport.ch",571],["velleahome.gr",572],["nicequest.com",573],["handelsbanken.no",574],["handelsbanken.com",574],["handelsbanken.co.uk",574],["handelsbanken.se",[574,655]],["handelsbanken.dk",574],["handelsbanken.fi",574],["ilarahealth.com",575],["songtradr.com",[576,835]],["logo.pt",[577,578]],["flexwhere.co.uk",[579,581]],["flexwhere.de",[579,581]],["pricewise.nl",579],["getunleash.io",579],["dentmania.de",579],["free.navalny.com",579],["latoken.com",579],["empathy.com",580],["labs.epi2me.io",580],["campusbrno.cz",[583,584,585]],["secrid.com",586],["etsy.com",587],["careers.cloud.com",587],["blablacar.rs",588],["blablacar.ru",588],["blablacar.com.tr",588],["blablacar.com.ua",588],["blablacar.com.br",588],["seb.se",589],["sebgroup.com",589],["deps.dev",590],["buf.build",591],["starofservice.com",592],["ytcomment.kmcat.uk",593],["gmx.com",594],["gmx.fr",594],["karofilm.ru",595],["octopusenergy.it",596],["octopusenergy.es",[596,597]],["justanswer.es",598],["justanswer.de",598],["justanswer.com",598],["justanswer.co.uk",598],["citilink.ru",599],["huutokaupat.com",600],["kaggle.com",601],["emr.ch",[602,607]],["gem.cbc.ca",603],["pumatools.hu",604],["ici.tou.tv",605],["crunchyroll.com",606],["mayflex.com",608],["clipchamp.com",608],["trouwenbijfletcher.nl",608],["fletcher.nl",608],["fletcherzakelijk.nl",608],["intermatic.com",608],["ebikelohr.de",609],["eurosender.com",610],["melectronics.ch",611],["guard.io",612],["nokportalen.se",613],["dokiliko.com",614],["valamis.com",[615,616,617]],["sverigesingenjorer.se",618],["shop.almawin.de",[619,620,621,658]],["zeitzurtrauer.de",622],["skaling.de",[623,624,625]],["bringmeister.de",626],["gdx.net",627],["clearblue.com",628],["drewag.de",[629,630,631]],["enso.de",[629,630,631]],["buidlbox.io",629],["helitransair.com",632],["more.com",633],["nwslsoccer.com",633],["climatecentral.org",634],["resolution.de",635],["flagma.by",636],["eatsalad.com",637],["pacstall.dev",638],["web2.0calc.fr",639],["de-appletradein.likewize.com",640],["swissborg.com",641],["qwice.com",642],["canalpluskuchnia.pl",[643,644]],["uizard.io",645],["stmas.bayern.de",[646,649]],["novayagazeta.eu",647],["kinopoisk.ru",648],["yandex.ru",648],["go.netia.pl",[650,651]],["polsatboxgo.pl",[650,651]],["ing.it",[652,653]],["ing.nl",654],["youcom.com.br",656],["rule34.paheal.net",657],["deep-shine.de",658],["shop.ac-zaun-center.de",658],["kellermann-online.com",658],["kletterkogel.de",658],["pnel.de",658],["korodrogerie.de",658],["der-puten-shop.de",658],["katapult-shop.de",658],["evocsports.com",658],["esm-computer.de",658],["calmwaters.de",658],["mellerud.de",658],["akustik-projekt.at",658],["vansprint.de",658],["0815.at",658],["0815.eu",658],["ojskate.com",658],["der-schweighofer.de",658],["tz-bedarf.de",658],["zeinpharma.de",658],["weicon.com",658],["dagvandewebshop.be",658],["thiele-tee.de",658],["carbox.de",658],["riapsport.de",658],["trendpet.de",658],["eheizung24.de",658],["seemueller.com",658],["vivande.de",658],["heidegrill.com",658],["gladiator-fightwear.com",658],["h-andreas.com",658],["pp-parts.com",658],["natuerlich-holzschuhe.de",658],["massivart.de",658],["malermeister-shop.de",658],["imping-confiserie.de",658],["lenox-trading.at",658],["cklenk.de",658],["catolet.de",658],["drinkitnow.de",658],["patisserie-m.de",658],["storm-proof.com",658],["balance-fahrradladen.de",658],["magicpos.shop",658],["zeinpharma.com",658],["sps-handel.net",658],["novagenics.com",658],["butterfly-circus.de",658],["holzhof24.de",658],["w6-wertarbeit.de",658],["fleurop.de",658],["leki.com",658],["extremeaudio.de",658],["taste-market.de",658],["delker-optik.de",658],["stuhl24-shop.de",658],["g-nestle.de",658],["alpine-hygiene.ch",658],["fluidmaster.it",658],["cordon.de",658],["belisse-beauty.de",658],["belisse-beauty.co.uk",658],["wpc-shop24.de",658],["liv.si",658],["maybach-luxury.com",658],["leiternprofi24.de",658],["hela-shop.eu",658],["hitado.de",658],["j-koenig.de",658],["armedangels.com",[658,735,736]],["bvk-beamtenversorgung.de",659],["hofer-kerzen.at",660],["karls-shop.de",661],["luvly.care",662],["firmen.wko.at",662],["byggern.no",663],["donauauen.at",664],["woltair.cz",665],["rostics.ru",666],["hife.es",667],["lilcat.com",668],["hot.si",[669,670,671,672]],["crenolibre.fr",673],["e-pole.pl",674],["dopt.com",675],["keb-automation.com",676],["bonduelle.ru",677],["oxfordonlineenglish.com",678],["pccomponentes.fr",679],["pccomponentes.com",679],["pccomponentes.pt",679],["grants.at",680],["africa-uninet.at",680],["rqb.at",680],["youngscience.at",680],["oead.at",680],["innovationsstiftung-bildung.at",680],["etwinning.at",680],["arqa-vet.at",680],["zentrumfuercitizenscience.at",680],["vorstudienlehrgang.at",680],["erasmusplus.at",680],["jeger.pl",681],["bo.de",682],["thegamingwatcher.com",683],["norlysplay.dk",684],["plusujemy.pl",685],["asus.com.cn",[686,688]],["zentalk.asus.com",[686,688]],["mubi.com",687],["59northwheels.se",689],["photospecialist.co.uk",690],["foto-gregor.de",690],["kamera-express.de",690],["kamera-express.be",690],["kamera-express.nl",690],["kamera-express.fr",690],["kamera-express.lu",690],["dhbbank.com",691],["dhbbank.de",691],["dhbbank.be",691],["dhbbank.nl",691],["login.ingbank.pl",692],["fabrykacukiernika.pl",[693,694]],["peaks.com",695],["3landesmuseen-braunschweig.de",696],["unifachbuch.de",[697,698,699]],["playlumi.com",[700,701,702]],["chatfuel.com",703],["studio3t.com",[704,705,706,707]],["realgap.co.uk",[708,709,710,711]],["hotelborgia.com",[712,713]],["sweet24.de",714],["zwembaddekouter.be",715],["flixclassic.pl",716],["jobtoday.com",717],["deltatre.com",[718,719,733]],["withings.com",[720,721,722]],["blista.de",[723,724]],["hashop.nl",725],["gift.be",[726,727]],["elevator.de",728],["foryouehealth.de",728],["animaze.us",728],["penn-elcom.com",728],["curantus.de",728],["mtbmarket.de",728],["spanienweinonline.ch",728],["novap.fr",728],["bizkaia.eus",[729,730,731]],["sinparty.com",732],["mantel.com",734],["e-dojus.lv",737],["burnesspaull.com",738],["oncosur.org",739],["photobooth.online",740],["epidemicsound.com",741],["ryanair.com",742],["refurbished.at",[743,744,745]],["refurbished.nl",[743,744,745]],["refurbished.be",[743,744,745]],["refurbishedstore.de",[743,744,745]],["bayernportal.de",[746,747,748]],["ayudatpymes.com",749],["zipjob.com",749],["shoutcast.com",749],["plastischechirurgie-muenchen.info",750],["bonn.sitzung-online.de",751],["depop.com",[752,753,754]],["thenounproject.com",755],["pricehubble.com",756],["ilmotorsport.de",757],["karate.com",758],["psbank.ru",758],["myriad.social",758],["exeedme.com",758],["followalice.com",[758,826]],["aqua-store.fr",759],["voila.ca",760],["anastore.com",761],["app.arzt-direkt.de",762],["dasfutterhaus.at",763],["e-pity.pl",764],["fillup.pl",765],["dailymotion.com",766],["barcawelt.de",767],["lueneburger-heide.de",768],["polizei.bayern.de",[769,771]],["ourworldofpixels.com",770],["jku.at",772],["matkahuolto.fi",773],["backmarket.de",[774,775,776]],["backmarket.co.uk",[774,775,776]],["backmarket.es",[774,775,776]],["backmarket.be",[774,775,776]],["backmarket.at",[774,775,776]],["backmarket.fr",[774,775,776]],["backmarket.gr",[774,775,776]],["backmarket.fi",[774,775,776]],["backmarket.ie",[774,775,776]],["backmarket.it",[774,775,776]],["backmarket.nl",[774,775,776]],["backmarket.pt",[774,775,776]],["backmarket.se",[774,775,776]],["backmarket.sk",[774,775,776]],["backmarket.com",[774,775,776]],["eleven-sportswear.cz",[777,778,779]],["silvini.com",[777,778,779]],["silvini.de",[777,778,779]],["purefiji.cz",[777,778,779]],["voda-zdarma.cz",[777,778,779]],["lesgarconsfaciles.com",[777,778,779]],["ulevapronohy.cz",[777,778,779]],["vitalvibe.eu",[777,778,779]],["plavte.cz",[777,778,779]],["mo-tools.cz",[777,778,779]],["flamantonlineshop.cz",[777,778,779]],["sandratex.cz",[777,778,779]],["norwayshop.cz",[777,778,779]],["3d-foto.cz",[777,778,779]],["neviditelnepradlo.cz",[777,778,779]],["nutrimedium.com",[777,778,779]],["silvini.cz",[777,778,779]],["karel.cz",[777,778,779]],["silvini.sk",[777,778,779]],["book-n-drive.de",780],["cotswoldoutdoor.com",781],["cotswoldoutdoor.ie",781],["cam.start.canon",782],["usnews.com",783],["researchaffiliates.com",784],["singkinderlieder.de",785],["stiegeler.com",786],["ba.com",[789,790,791,792,793,794,795]],["britishairways.com",[789,790,791,792,793,794,795]],["cineman.pl",[796,797,798]],["tv-trwam.pl",[796,797,798,799]],["qatarairways.com",[800,801,802,803,804]],["wedding.pl",805],["vivaldi.com",806],["emuia1.gugik.gov.pl",807],["nike.com",808],["adidas.at",809],["adidas.be",809],["adidas.ca",809],["adidas.ch",809],["adidas.cl",809],["adidas.co",809],["adidas.co.in",809],["adidas.co.kr",809],["adidas.co.nz",809],["adidas.co.th",809],["adidas.co.uk",809],["adidas.com",809],["adidas.com.ar",809],["adidas.com.au",809],["adidas.com.br",809],["adidas.com.my",809],["adidas.com.ph",809],["adidas.com.vn",809],["adidas.cz",809],["adidas.de",809],["adidas.dk",809],["adidas.es",809],["adidas.fi",809],["adidas.fr",809],["adidas.gr",809],["adidas.ie",809],["adidas.it",809],["adidas.mx",809],["adidas.nl",809],["adidas.no",809],["adidas.pe",809],["adidas.pl",809],["adidas.pt",809],["adidas.ru",809],["adidas.se",809],["adidas.sk",809],["colourbox.com",810],["ebilet.pl",811],["myeventeo.com",812],["snap.com",813],["louwman.nl",[814,815]],["ratemyprofessors.com",816],["filen.io",817],["leotrippi.com",818],["restaurantclub.pl",818],["context.news",818],["queisser.de",818],["grandprixradio.dk",[819,820,821,822,823]],["grandprixradio.nl",[819,820,821,822,823]],["grandprixradio.be",[819,820,821,822,823]],["businessclass.com",824],["quantamagazine.org",825],["hellotv.nl",827],["jisc.ac.uk",828],["lasestrellas.tv",829],["xn--digitaler-notenstnder-m2b.com",830],["schoonmaakgroothandelemmen.nl",830],["nanuko.de",830],["hair-body-24.de",830],["shopforyou47.de",830],["kreativverliebt.de",830],["anderweltverlag.com",830],["octavio-shop.com",830],["forcetools-kepmar.eu",830],["fantecshop.de",830],["hexen-werkstatt.shop",830],["shop-naturstrom.de",830],["biona-shop.de",830],["camokoenig.de",830],["bikepro.de",830],["kaffeediscount.com",830],["vamos-skateshop.com",830],["holland-shop.com",830],["avonika.com",830],["royal-oak.org",831],["hurton.pl",832],["officesuite.com",833],["fups.com",[834,836]],["scienceopen.com",837],["moebel-mahler-siebenlehn.de",[838,839]],["calendly.com",840],["batesenvironmental.co.uk",[841,842]],["ubereats.com",843],["101internet.ru",844],["bein.com",845],["beinsports.com",845],["figshare.com",846],["bitso.com",847],["gallmeister.fr",848],["eco-toimistotarvikkeet.fi",849],["proficient.fi",849],["developer.ing.com",850],["webtrack.dhlglobalmail.com",852],["webtrack.dhlecs.com",852],["ehealth.gov.gr",853],["calvinklein.se",[854,855,856]],["calvinklein.fi",[854,855,856]],["calvinklein.sk",[854,855,856]],["calvinklein.si",[854,855,856]],["calvinklein.ch",[854,855,856]],["calvinklein.ru",[854,855,856]],["calvinklein.com",[854,855,856]],["calvinklein.pt",[854,855,856]],["calvinklein.pl",[854,855,856]],["calvinklein.at",[854,855,856]],["calvinklein.nl",[854,855,856]],["calvinklein.hu",[854,855,856]],["calvinklein.lu",[854,855,856]],["calvinklein.lt",[854,855,856]],["calvinklein.lv",[854,855,856]],["calvinklein.it",[854,855,856]],["calvinklein.ie",[854,855,856]],["calvinklein.hr",[854,855,856]],["calvinklein.fr",[854,855,856]],["calvinklein.es",[854,855,856]],["calvinklein.ee",[854,855,856]],["calvinklein.de",[854,855,856]],["calvinklein.dk",[854,855,856]],["calvinklein.cz",[854,855,856]],["calvinklein.bg",[854,855,856]],["calvinklein.be",[854,855,856]],["calvinklein.co.uk",[854,855,856]],["ofdb.de",857],["dtksoft.com",858],["serverstoplist.com",859],["truecaller.com",860],["worldcupchampionships.com",864],["arturofuente.com",[864,866,867]],["protos.com",[864,866,867]],["timhortons.co.th",[864,865,866,868,870,871]],["toyota.co.uk",[864,865,866,869,870,871]],["businessaccountingbasics.co.uk",[864,865,866,868,870,871]],["flickr.org",[864,865,866,868,870,871]],["espacocasa.com",864],["altraeta.it",864],["centrooceano.it",864],["allstoresdigital.com",864],["cultarm3d.de",864],["soulbounce.com",864],["fluidtopics.com",864],["uvetgbt.com",864],["malcorentacar.com",864],["emondo.de",864],["maspero.it",864],["kelkay.com",864],["underground-england.com",864],["vert.eco",864],["turcolegal.com",864],["magnet4blogging.net",864],["moovly.com",864],["automationafrica.co.za",864],["jornaldoalgarve.pt",864],["keravanenergia.fi",864],["kuopas.fi",864],["frag-machiavelli.de",864],["healthera.co.uk",864],["mobeleader.com",864],["powerup-gaming.com",864],["developer-blog.net",864],["medical.edu.mt",864],["deh.mt",864],["bluebell-railway.com",864],["ribescasals.com",864],["javea.com",864],["chinaimportal.com",864],["inds.co.uk",864],["raoul-follereau.org",864],["serramenti-milano.it",864],["cosasdemujer.com",864],["luz-blanca.info",864],["cosasdeviajes.com",864],["safehaven.io",864],["havocpoint.it",864],["motofocus.pl",864],["nomanssky.com",864],["drei-franken-info.de",864],["clausnehring.com",864],["alttab.net",864],["kinderleicht.berlin",864],["kiakkoradio.fi",864],["cosasdelcaribe.es",864],["de-sjove-jokes.dk",864],["serverprofis.de",864],["biographyonline.net",864],["iziconfort.com",864],["sportinnederland.com",864],["natureatblog.com",864],["wtsenergy.com",864],["cosasdesalud.es",864],["internetpasoapaso.com",864],["zurzeit.at",864],["contaspoupanca.pt",864],["steamdeckhq.com",[864,865,866,868,870,871]],["ipouritinc.com",[864,866,868]],["hemglass.se",[864,866,868,870,871]],["sumsub.com",[864,865,866]],["atman.pl",[864,865,866]],["fabriziovanmarciano.com",[864,865,866]],["nationalrail.com",[864,865,866]],["eett.gr",[864,865,866]],["funkypotato.com",[864,865,866]],["equalexchange.co.uk",[864,865,866]],["swnsdigital.com",[864,865,866]],["gogolf.fi",[864,868]],["hanse-haus-greifswald.de",864],["tampereenratikka.fi",[864,866,872,873]],["kymppikatsastus.fi",[866,870,916,917]],["brasiltec.ind.br",874],["doka.com",[875,876,877]],["abi.de",[878,879]],["studienwahl.de",[878,879]],["journal.hr",[880,881,882,883]],["howstuffworks.com",884],["stickypassword.com",[885,886,887]],["conversion-rate-experts.com",[888,889]],["merkur.si",[890,891,892]],["petitionenligne.com",[893,894]],["petitionenligne.be",[893,894]],["petitionenligne.fr",[893,894]],["petitionenligne.re",[893,894]],["petitionenligne.ch",[893,894]],["skrivunder.net",[893,894]],["petitiononline.uk",[893,894]],["petitions.nz",[893,894]],["petizioni.com",[893,894]],["peticao.online",[893,894]],["skrivunder.com",[893,894]],["peticiones.ar",[893,894]],["petities.com",[893,894]],["petitionen.com",[893,894]],["petice.com",[893,894]],["opprop.net",[893,894]],["peticiok.com",[893,894]],["peticiones.net",[893,894]],["peticion.es",[893,894]],["peticiones.pe",[893,894]],["peticiones.mx",[893,894]],["peticiones.cl",[893,894]],["peticije.online",[893,894]],["peticiones.co",[893,894]],["mediathek.lfv-bayern.de",895],["aluypvc.es",[896,897,898]],["pracuj.pl",[899,900,901,902,903]],["vki.at",905],["konsument.at",905],["chollometro.com",906],["dealabs.com",906],["hotukdeals.com",906],["pepper.it",906],["pepper.pl",906],["preisjaeger.at",906],["mydealz.de",906],["direct.travelinsurance.tescobank.com",[909,910,911,912,913,914,915,916]],["mediaite.com",918],["easyfind.ch",[919,920]],["e-shop.leonidas.com",[921,922]],["lastmile.lt",923],["veriff.com",924],["constantin.film",[925,926,927]],["notion.so",928],["omgevingsloketinzage.omgeving.vlaanderen.be",[929,930]],["primor.eu",931],["tameteo.com",932],["tempo.pt",932],["yourweather.co.uk",932],["meteored.cl",932],["meteored.mx",932],["tempo.com",932],["ilmeteo.net",932],["meteored.com.ar",932],["daswetter.com",932],["myprivacy.dpgmediagroup.net",933],["algarvevacation.net",934],["3sat.de",935],["oxxio.nl",[936,937]],["butterflyshop.dk",[938,939,940]],["praxis.nl",941],["brico.be",941],["kent.gov.uk",[942,943]],["pohjanmaanhyvinvointi.fi",944],["maanmittauslaitos.fi",945]]);

const entitiesMap = new Map([["top4mobile",[7,8]]]);

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
