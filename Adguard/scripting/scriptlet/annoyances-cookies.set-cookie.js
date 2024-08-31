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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setCookie = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["GDPR","9"],["cookie-consent","false"],["cookieHidden","true"],["terms_agreement_popup_agreed","true","","reload","1"],["consent_panel","1"],["user_allowed_save_cookie","true"],["AcceptCookie","yes"],["cookieConsent","0"],["CF_GDPR_COOKIE_CONSENT_VIEWED","1"],["cookie_alert","true"],["cb-enabled","accepted"],["AgreeCookies","true"],["AreCookiesSet","true"],["chcCookieHint","1","","reload","1"],["accept-selected-cookies","true","","reload","1"],["cookiePreferences","true"],["necessary","true"],["has_accepted_cookies","true"],["cs_viewed_cookie_policy","yes"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["has-seen-cookie-notice","true","","reload","1"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["cookies-configured","1"],["consent","true"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["cookienotification","1"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["CookieConsent","false"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["br-lgpd-cookie-notice-agreement-v1","1"],["privacy_mv","1"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["cookieconsent","deny"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["consents","essential"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_preferences","10"],["uninavIsAgreeCookie","true"],["cookie_consent_status","allow"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["CA_DT_V2","0","","reload","1"],["CA_DT_V3","0"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["TVPtcs22ver","66"],["cookieBasicConsent","accepted"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["marinelink.com",3],["thegraph.com",4],["followalice.com",[4,781]],["stonly.com",5],["camp-fire.jp",6],["my2n.com",7],["vandalism-sounds.com",8],["oocl.com",9],["brazzersnetwork.com",10],["cyberfolks.ro",11],["hiermitherz.de",12],["uk2.net",13],["aeromexico.com",[14,15]],["easywintergarten.de",16],["vinothekwaespi.ch",[17,18,19]],["graphy.com",20],["raspberrypi.dk",21],["ocean.io",22],["waves.is",23],["tesa.com",24],["repair.wd40.com",25],["gls-group.eu",28],["chipsaway.co.uk",29],["heatstore.eu",30],["luvly.care",30],["firmen.wko.at",30],["copaamerica.com",31],["cooleygo.com",32],["map.blitzortung.org",33],["northumbriasport.com",34],["clearspend.natwest.com",35],["cellcolabsclinical.com",36],["producthunt.com",37],["motorsportreg.com",[38,39]],["imola.motorsportreg.com",[40,41]],["pga.com",42],["portal.payment.eltax.lta.go.jp",43],["greenbuildingadvisor.com",[44,45,46]],["finewoodworking.com",[44,45,46]],["privatekeys.pw",47],["telli.dpd.ee",48],["youthforum.org",48],["votegroup.de",[49,50]],["pharmahall.gr",51],["x-team.com",52],["reservations.helveticmotion.ch",53],["endclothing.com",[54,55]],["arning-bau.de",56],["kraftwerk.co.at",57],["fhr.biz",58],["srf.nu",59],["jn.fo",[60,61]],["rovia.es",62],["airnewzealand.co.nz",63],["viu.com",64],["dinamalar.com",65],["volkswagen-group.com",66],["solo.io",67],["pomelo.la",68],["ibuypower.com",69],["sberbank.com",[70,455]],["swissmilk.ch",71],["gamemaker.io",72],["pixiv.net",73],["kinemaster.com",74],["sp32bb.pl",75],["jazz.fm",76],["juntadeandalucia.es",77],["melee.gg",[78,79,80]],["chemocare.com",81],["mobiliteit.nl",82],["xledger.net",83],["reviewmeta.com",84],["guide-bordeaux-gironde.com",85],["travelinsured.com",86],["gdpr.twitter.com",87],["mora.hu",88],["confused.com",89],["physikinstrumente.de",90],["karlknauer.de",90],["schoeck.com",90],["resonate.coop",90],["northgatevehiclehire.ie",90],["badhall.at",90],["cic.ch",90],["ilsaggiatore.com",91],["forum.digitalfernsehen.de",92],["bitscrunch.com",[93,94,95]],["hannahgraaf.com",96],["shop.elbers-hof.de",[97,98]],["woolsocks.eu",99],["uza.be",100],["5asec.ch",100],["wizards.com",100],["kitepackaging.co.uk",[101,102]],["parkenflughafen.de",103],["radyofenomen.com",104],["elsate.com",105],["hume.ai",106],["lotusantwerp.wacs.online",107],["gitbook.io",108],["gitbook.com",108],["thehacker.recipes",108],["docs.dyrector.io",108],["docs.webstudio.is",108],["docs.chartbeat.com",108],["makeresearchpay.com",109],["tandartsenpraktijk-simons.tandartsennet.nl",110],["huisartsenpraktijkdoorn.nl",110],["bcorporation.net",111],["knime.com",[111,155]],["quebueno.es",111],["edookit.com",112],["trixonline.be",113],["radio-canada.ca",114],["heysummit.com",115],["puromarketing.com",116],["radicalmotorsport.com",117],["biurobox.pl",118],["cycling74.com",119],["triviacreator.com",120],["freshis.com",120],["anker.com",120],["computacenter.com",121],["playbalatro.com",122],["kastner-oehler.de",123],["kastner-oehler.at",123],["kastner-oehler.ch",123],["twenga.it",124],["twenga.fr",124],["twenga.co.uk",124],["twenga.de",124],["twenga.es",124],["twenga.pl",124],["twenga.nl",124],["twenga.se",124],["olx.kz",125],["olx.uz",125],["efl.com",126],["wst.tv",126],["cuvva.com",127],["vitbikes.de",128],["gourmetfoodstore.com",129],["schulfahrt.de",130],["deutsche-finanzagentur.de",131],["thejazzcafelondon.com",132],["keeb.supply",133],["spb.hh.ru",134],["kaluga.hh.ru",134],["school.hh.ru",134],["rating.hh.ru",134],["novgorod.hh.ru",134],["xxxshemaleporn.com",[135,136]],["gayhits.com",[135,136]],["gaypornvideos.xxx",[135,136]],["sextubespot.com",[135,136]],["wewantjusticedao.org",137],["godbolt.org",138],["projectenglish.com.pl",[139,145]],["ledenicheur.fr",139],["pricespy.co.uk",139],["pricespy.co.nz",139],["sae.fsc.ccoo.es",140],["piusx-college.nl",141],["forgeofempires.com",142],["yoomoney.ru",143],["vod.warszawa.pl",144],["m.twitch.tv",146],["environment.data.gov.uk",147],["playtesting.games",148],["portal.by.aok.de",149],["umlandscout.de",150],["atombank.co.uk",[151,152,153]],["showtv.com.tr",154],["seventhgeneration.com",155],["press.princeton.edu",155],["ldz.lv",155],["crtm.es",156],["airastana.com",157],["vkf-renzel.nl",158],["booking.reederei-zingst.de",[159,160,161]],["booking.weisse-flotte.de",[159,160,161]],["booking2.reederei-hiddensee.de",[159,160,161]],["sanswiss.pl",162],["galaxy.com",163],["petdesk.com",164],["ivyexec.com",165],["railtech.com",166],["lottehotel.com",[167,168,169,170,171]],["paydirekt.de",172],["kijiji.ca",173],["posterstore.fr",174],["posterstore.eu",174],["posterstore.be",174],["posterstore.de",174],["posterstore.hu",174],["posterstore.ie",174],["posterstore.it",174],["posterstore.no",174],["posterstore.nl",174],["posterstore.pl",174],["posterstore.com",174],["posterstore.ae",174],["posterstore.ca",174],["posterstore.nz",174],["posterstore.es",174],["posterstore.kr",174],["posterstore.jp",174],["posterstore.dk",174],["posterstore.se",174],["posterstore.ch",174],["posterstore.at",174],["myriadicity.net",175],["dgsf.org",175],["endgame.id",176],["cashback-cards.ch",177],["swisscard.ch",177],["ahorn24.de",178],["blockdyor.com",179],["ticket.io",180],["omega-nuernberg.servicebund.com",181],["lojaboschferramentas.com.br",[182,184,185]],["shareloft.com",183],["fineartsmuseum.recreatex.be",[186,187,188]],["jaapeden.nl",[186,187,188]],["eboo.lu",189],["lasmallagency.com",190],["lhsystems.com",[191,192,193,194]],["twomates.de",195],["intergiro.com",196],["healthygamer.gg",197],["telepizza.es",[198,199,200]],["telepizza.pt",[198,199,200]],["frisco.pl",201],["tyleenslang.nl",202],["schrikdraad.net",202],["kruiwagen.net",202],["pvcvoordeel.nl",202],["pvcbuis.com",202],["drainagebuizen.nl",202],["likewise.com",203],["longines.com",[204,205,206,207]],["vater-it.de",208],["biano.hu",209],["nadia.gov.gr",210],["hana-book.fr",211],["kzvb.de",212],["correosexpress.com",213],["cexpr.es",213],["rte.ie",214],["smart.com",215],["gry.pl",215],["gamesgames.com",215],["games.co.uk",215],["jetztspielen.de",215],["ourgames.ru",215],["permainan.co.id",215],["gioco.it",215],["jeux.fr",215],["juegos.com",215],["ojogos.com.br",215],["oyunskor.com",215],["spela.se",215],["spelletjes.nl",215],["agame.com",215],["spielen.com",215],["flashgames.ru",215],["games.co.id",215],["giochi.it",215],["jeu.fr",215],["spel.nl",215],["sartor-stoffe.de",216],["rockpoint.cz",216],["rockpoint.sk",216],["parfum-zentrum.de",216],["candy-store.cz",216],["tridge.com",217],["asus.com",[218,219]],["drinksking.sk",220],["neuhauschocolates.com",221],["commandsuite.it",222],["oktea.tw",223],["bafin.de",224],["materna.de",224],["bamf.de",224],["tenvinilo-argentina.com",[225,226]],["eikaforsikring.no",[227,228]],["eurowings.com",[229,230,231]],["newpharma.be",[232,233,234]],["newpharma.fr",[232,233,234]],["newpharma.de",[232,233,234]],["newpharma.at",[232,233,234]],["newpharma.nl",[232,233,234]],["kapoorwatch.com",235],["instantoffices.com",236],["paf.se",236],["citibank.pl",236],["citibankonline.pl",236],["azertyfactor.be",237],["zelezodum.cz",238],["thw.de",239],["bafa.de",239],["bka.de",239],["bmbf.de",239],["weather.com",240],["bolist.se",[241,242]],["project529.com",242],["evivanlanschot.nl",243],["prenatal.nl",244],["onnibus.com",[244,883,884,885]],["kyoceradocumentsolutions.us",[244,935,936]],["kyoceradocumentsolutions.ch",[244,935,936]],["kyoceradocumentsolutions.co.uk",[244,935,936]],["kyoceradocumentsolutions.de",[244,935,936]],["kyoceradocumentsolutions.es",[244,935,936]],["kyoceradocumentsolutions.eu",[244,935,936]],["kyoceradocumentsolutions.fr",[244,935,936]],["kyoceradocumentsolutions.it",[244,935,936]],["kyoceradocumentsolutions.ru",[244,935,936]],["kyoceradocumentsolutions.mx",[244,935,936]],["kyoceradocumentsolutions.cl",[244,935,936]],["kyoceradocumentsolutions.com.br",[244,935,936]],["wagner-tuning.com",[245,246,247,248]],["waitrosecellar.com",[249,250,251,252]],["waitrose.com",[249,603]],["kvk.nl",[253,254,255]],["macfarlanes.com",256],["pole-emploi.fr",257],["gardenmediaguild.co.uk",258],["samplerite.com",259],["samplerite.cn",259],["sororedit.com",260],["blukit.com.br",261],["biegnaszczyt.pl",262],["staff-gallery.com",263],["itv.com",264],["dvag.de",265],["premierinn.com",[266,267,268,269]],["whitbreadinns.co.uk",[266,267,268,269]],["barandblock.co.uk",[266,267,268,269]],["tabletable.co.uk",[266,267,268,269]],["brewersfayre.co.uk",[266,267,268,269]],["beefeater.co.uk",[266,267,268,269]],["allstarssportsbars.co.uk",[270,271]],["babiesrus.ca",272],["toysrus.ca",272],["roomsandspaces.ca",272],["athletic-club.eus",[273,274,275]],["wattoo.dk",276],["wattoo.no",276],["texthelp.com",[277,278]],["courierexchange.co.uk",[279,280,281]],["haulageexchange.co.uk",[279,280,281]],["ecaytrade.com",282],["powerball.com",283],["tlaciarik.sk",283],["tiskarik.cz",283],["sseriga.edu",[284,285]],["rt.com",286],["swrng.de",287],["crfop.gdos.gov.pl",288],["nurgutes.de",289],["kpcen-torun.edu.pl",290],["opintopolku.fi",291],["app.erevie.pl",292],["debenhams.com",293],["archiwumalle.pl",294],["konicaminolta.ca",295],["konicaminolta.us",295],["deutschebank-dbdirect.com",[296,297,298]],["dbonline.deutsche-bank.es",[296,297,298]],["deutsche-bank.es",[296,297,298]],["hipotecaonline.db.com",299],["kangasalansanomat.fi",300],["eif.org",301],["tunnelmb.net",301],["sugi-net.jp",302],["understandingsociety.ac.uk",303],["leibniz.com",304],["horecaworld.biz",[304,572]],["horecaworld.be",[304,572]],["bettertires.com",304],["electroprecio.com",304],["autohero.com",304],["computerbase.de",[304,930]],["sistemacomponentes.com.br",305],["bargaintown.ie",306],["tui.nl",307],["doppelmayr.com",308],["case-score.com",[309,310]],["cote.co.uk",311],["finimize.com",311],["k-einbruch.de",[312,313]],["blxxded.com",312],["rtu.lv",314],["sysdream.com",315],["cinemarkca.com",316],["neander-zahn.de",317],["theadelphileeds.co.uk",318],["tobycarvery.co.uk",318],["carsupermarket.com",318],["viajesatodotren.com",319],["ticketingcine.fr",320],["agenziavista.it",321],["e-chladiva.cz",321],["bitecode.dev",322],["mjob.si",[323,324,325]],["airportrentacar.gr",326],["mobile-fueling.de",326],["plos.org",327],["autohaus24.de",328],["sixt-neuwagen.de",328],["gadis.es",[329,330]],["dom.ru",330],["ford-kimmerle-reutlingen.de",331],["autohaus-reitermayer.de",331],["autohaus-diefenbach-waldbrunn.de",331],["autohaus-diefenbach.de",331],["autohaus-musberg.de",331],["ford-ah-im-hunsrueck-simmern.de",331],["ford-arndt-goerlitz.de",331],["ford-autogalerie-alfeld.de",331],["ford-bacher-schrobenhausen.de",331],["ford-bathauer-bad-harzburg.de",331],["ford-behrend-waren.de",331],["ford-bergland-frankfurt-oder.de",331],["ford-bergland-wipperfuerth.de",331],["ford-besico-glauchau.de",331],["ford-besico-nuernberg.de",331],["ford-bischoff-neumuenster.de",331],["ford-bodach-borgentreich.de",331],["ford-bunk-saarbruecken.de",331],["ford-bunk-voelklingen.de",331],["ford-busch-kirchberg.de",331],["ford-diermeier-muenchen.de",331],["ford-dinnebier-leipzig.de",331],["ford-duennes-regensburg.de",331],["ford-fischer-bochum.de",331],["ford-fischer-muenster.de",331],["ford-foerster-koblenz.de",331],["ford-fuchs-uffenheim.de",331],["ford-geberzahn-koeln.de",331],["ford-gerstmann-duesseldorf.de",331],["ford-haefner-und-strunk-kassel.de",331],["ford-hartmann-kempten.de",331],["ford-hartmann-rastatt.de",331],["ford-hatzner-karlsruhe.de",331],["ford-heine-hoexter.de",331],["ford-hentschel-hildesheim.de",331],["ford-hessengarage-dreieich.de",331],["ford-hessengarage-frankfurt.de",331],["ford-hga-windeck.de",331],["ford-hommert-coburg.de",331],["ford-horstmann-rastede.de",331],["ford-janssen-sonsbeck.de",331],["ford-jochem-stingbert.de",331],["ford-jungmann-wuppertal.de",331],["ford-kestel-marktzeuln.de",331],["ford-klaiber-bad-friedrichshall.de",331],["ford-koenig-eschwege.de",331],["ford-kohlhoff-mannheim.de",331],["ford-kt-automobile-coesfeld.de",331],["ford-lackermann-wesel.de",331],["ford-ludewig-delligsen.de",331],["ford-maiwald-linsengericht.de",331],["ford-mertens-beckum.de",331],["ford-meyer-bad-oeynhausen.de",331],["ford-mgs-bayreuth.de",331],["ford-mgs-radebeul.de",331],["ford-muecke-berlin.de",331],["ford-norren-weissenthurm.de",331],["ford-nrw-garage-duesseldorf.de",331],["ford-nrw-garage-handweiser.de",331],["ford-nuding-remshalden.de",331],["ford-ohm-rendsburg.de",331],["ford-reinicke-muecheln.de",331],["ford-rennig.de",331],["ford-roerentrop-luenen.de",331],["ford-schankola-dudweiler.de",331],["ford-sg-goeppingen.de",331],["ford-sg-leonberg.de",331],["ford-sg-neu-ulm.de",331],["ford-sg-pforzheim.de",331],["ford-sg-waiblingen.de",331],["ford-storz-st-georgen.de",331],["ford-strunk-koeln.de",331],["ford-tobaben-hamburg.de",331],["ford-toenjes-zetel.de",331],["ford-wagner-mayen.de",331],["ford-wahl-fritzlar.de",331],["ford-wahl-siegen.de",331],["ford-weege-bad-salzuflen.de",331],["ford-westhoff-hamm.de",331],["ford-wieland-hasbergen.de",331],["renault-autocenterprignitz-pritzwalk.de",331],["renault-spenrath-juelich.de",331],["vitalllit.com",332],["fincaparera.com",332],["dbnetbcn.com",332],["viba.barcelona",332],["anafaustinoatelier.com",332],["lamparasherrero.com",332],["calteixidor.cat",332],["argentos.barcelona",332],["anmarlube.com",332],["anynouxines.barcelona",332],["crearunapaginaweb.cat",332],["cualesmiip.com",332],["porndoe.com",[333,334,335]],["thinkingaustralia.com",336],["elrow.com",337],["ownit.se",338],["velo-antwerpen.be",[339,340]],["wwnorton.com",341],["pc-canada.com",342],["mullgs.se",343],["1a-sehen.de",344],["feature.fm",345],["comte.com",346],["baltic-watches.com",347],["np-brijuni.hr",347],["vilgain.com",347],["tradingview.com",348],["wevolver.com",349],["experienciasfree.com",350],["freemans.com",351],["kivikangas.fi",352],["lumingerie.com",352],["melkkobrew.fi",352],["kh.hu",[353,354,355]],["aplgo.com",356],["securityconference.org",357],["aha.or.at",[358,361]],["fantasyfitnessing.com",359],["chocolateemporium.com",360],["account.samsung.com",362],["crushwineco.com",363],["levi.pt",364],["fertagus.pt",365],["smiggle.co.uk",366],["ubisoft.com",[367,368,369,370]],["store.ubisoft.com",[367,370,810,811]],["thulb.uni-jena.de",371],["splityourticket.co.uk",372],["eramba.org",373],["openai.com",[374,375]],["kupbilecik.com",[376,377]],["kupbilecik.de",[376,377]],["kupbilecik.pl",[376,377]],["shopilya.com",378],["arera.it",379],["haustier-berater.de",379],["hfm-frankfurt.de",379],["zoommer.ge",380],["studentapan.se",381],["petcity.lt",[382,383,384,385]],["tobroco.com",[386,390]],["tobroco.nl",[386,390]],["tobroco-giant.com",[386,390]],["geosfreiberg.de",[387,388]],["eapvic.org",389],["bassolsenergia.com",389],["bammusic.com",[391,393,394]],["green-24.de",392],["phish-test.de",395],["bokadirekt.se",396],["ford.lt",397],["ford.pt",397],["ford.fr",397],["ford.de",397],["ford.dk",397],["ford.pl",397],["ford.se",397],["ford.nl",397],["ford.no",397],["ford.fi",397],["ford.gr",397],["ford.it",397],["data-media.gr",398],["e-food.gr",[399,400]],["bvmed.de",401],["babyshop.com",[402,403,404]],["griffbereit24.de",405],["checkwx.com",406],["calendardate.com",407],["wefashion.ch",408],["wefashion.fr",408],["wefashion.lu",408],["wefashion.be",408],["wefashion.de",408],["wefashion.nl",408],["brettspiel-angebote.de",[409,410]],["nio.com",411],["kancelarskepotreby.net",[412,413,414]],["segment-anything.com",415],["sketch.metademolab.com",416],["cambridgebs.co.uk",417],["freizeitbad-greifswald.de",418],["giuseppezanotti.com",[419,420,421]],["xcen.se",421],["biggreenegg.co.uk",422],["skihuette-oberbeuren.de",[423,424,425]],["pwsweather.com",426],["xfree.com",427],["theweathernetwork.com",[428,429]],["monese.com",[430,431,432]],["assos.com",430],["helmut-fischer.com",433],["myscience.org",434],["7-eleven.com",435],["airwallex.com",436],["streema.com",437],["gov.lv",438],["tise.com",439],["codecamps.com",440],["avell.com.br",441],["moneyfarm.com",442],["app.moneyfarm.com",442],["simpl.rent",443],["hubspot.com",444],["prodyna.com",[445,446,447,448]],["zutobi.com",[445,446,447,448]],["calm.com",[449,450]],["pubgesports.com",[451,452,453]],["outwrite.com",454],["sbermarket.ru",456],["atani.com",[457,458,459]],["croisieresendirect.com",460],["bgextras.co.uk",461],["sede.coruna.gal",462],["czech-server.cz",463],["hitech-gamer.com",464],["bialettikave.hu",[465,466,467]],["canalplus.com",[468,469,470]],["mader.bz.it",[471,472,473]],["supply.amazon.co.uk",474],["bhaptics.com",475],["cleverbot.com",476],["watchaut.film",477],["tuffaloy.com",478],["fanvue.com",478],["electronoobs.com",479],["xn--lkylen-vxa.se",480],["tiefenthaler-landtechnik.at",481],["tiefenthaler-landtechnik.ch",481],["tiefenthaler-landtechnik.de",481],["varma.fi",482],["vyos.io",483],["digimobil.es",[484,485]],["teenage.engineering",486],["merrell.pl",[487,751]],["converse.pl",487],["shop.wf-education.com",[487,751]],["werkenbijaswatson.nl",488],["converse.com",[489,490]],["buyandapply.nexus.org.uk",491],["img.ly",492],["halonen.fi",[492,524,525,526,527]],["carlson.fi",[492,524,525,526,527]],["cams.ashemaletube.com",[493,494]],["electronicacerler.com",[495,496,497]],["okpoznan.pl",[498,503]],["ielts.idp.com",499],["ielts.co.nz",499],["ielts.com.au",499],["einfach-einreichen.de",[500,501,502]],["endlesstools.io",504],["mbhszepkartya.hu",505],["casellimoveis.com.br",506],["embedplus.com",507],["e-file.pl",508],["sp215.info",509],["empik.com",510],["senda.pl",511],["united-camera.at",512],["befestigungsfuchs.de",512],["cut-tec.co.uk",513],["gaytimes.co.uk",514],["statisticsanddata.org",515],["hello.one",516],["paychex.com",517],["wildcat-koeln.de",518],["libraries.merton.gov.uk",[519,520]],["tommy.hr",[521,522]],["usit.uio.no",523],["demo-digital-twin.r-stahl.com",528],["la31devalladolid.com",[529,530]],["mx.com",531],["foxtrail.fjallraven.com",532],["dotwatcher.cc",533],["bazarchic.com",[534,535,536]],["seedrs.com",537],["mypensiontracker.co.uk",538],["praxisplan.at",[538,559]],["esimplus.me",539],["cineplanet.com.pe",540],["ecologi.com",541],["wamba.com",542],["eurac.edu",543],["akasaair.com",544],["rittal.com",545],["worstbassist.com",[546,547,548,549,550,551]],["zs-watch.com",552],["crown.com",553],["mesanalyses.fr",554],["teket.jp",555],["fish.shimano.com",[556,557,558]],["simsherpa.com",[560,561,562]],["translit.ru",563],["aruba.com",564],["aireuropa.com",565],["skfbearingselect.com",[566,567]],["scanrenovation.com",568],["ttela.se",569],["dominospizza.pl",570],["devagroup.pl",571],["secondsol.com",572],["angelifybeauty.com",573],["cotopaxi.com",574],["justjoin.it",575],["digibest.pt",576],["two-notes.com",577],["theverge.com",578],["daimant.co",579],["secularism.org.uk",580],["karriere-hamburg.de",581],["musicmap.info",582],["gasspisen.se",583],["medtube.pl",584],["medtube.es",584],["medtube.fr",584],["medtube.net",584],["standard.sk",585],["linmot.com",586],["larian.com",[586,873]],["s-court.me",586],["containerandpackaging.com",587],["top-yp.de",588],["termania.net",589],["account.nowpayments.io",590],["fizjobaza.pl",591],["gigasport.at",592],["gigasport.de",592],["gigasport.ch",592],["velleahome.gr",593],["nicequest.com",594],["handelsbanken.no",595],["handelsbanken.com",595],["handelsbanken.co.uk",595],["handelsbanken.se",[595,678]],["handelsbanken.dk",595],["handelsbanken.fi",595],["ilarahealth.com",596],["songtradr.com",[597,857]],["logo.pt",[598,599]],["flexwhere.co.uk",[600,602]],["flexwhere.de",[600,602]],["pricewise.nl",600],["getunleash.io",600],["dentmania.de",600],["free.navalny.com",600],["latoken.com",600],["empathy.com",601],["labs.epi2me.io",601],["campusbrno.cz",[604,605,606]],["secrid.com",607],["etsy.com",608],["careers.cloud.com",608],["blablacar.rs",609],["blablacar.ru",609],["blablacar.com.tr",609],["blablacar.com.ua",609],["blablacar.com.br",609],["seb.se",610],["sebgroup.com",610],["deps.dev",611],["buf.build",612],["starofservice.com",613],["ytcomment.kmcat.uk",614],["gmx.com",615],["gmx.fr",615],["karofilm.ru",616],["octopusenergy.it",617],["octopusenergy.es",[617,618]],["justanswer.es",619],["justanswer.de",619],["justanswer.com",619],["justanswer.co.uk",619],["citilink.ru",620],["huutokaupat.com",621],["kaggle.com",622],["emr.ch",[623,628]],["gem.cbc.ca",624],["pumatools.hu",625],["ici.tou.tv",626],["crunchyroll.com",627],["mayflex.com",629],["clipchamp.com",629],["gdemoideti.ru",629],["trouwenbijfletcher.nl",629],["fletcher.nl",629],["fletcherzakelijk.nl",629],["intermatic.com",629],["jusbrasil.com.br",630],["mobilevikings.be",631],["ebikelohr.de",632],["eurosender.com",633],["melectronics.ch",634],["guard.io",635],["nokportalen.se",636],["dokiliko.com",637],["valamis.com",[638,639,640]],["sverigesingenjorer.se",641],["shop.almawin.de",[642,643,644,681]],["zeitzurtrauer.de",645],["skaling.de",[646,647,648]],["bringmeister.de",649],["gdx.net",650],["clearblue.com",651],["drewag.de",[652,653,654]],["enso.de",[652,653,654]],["buidlbox.io",652],["helitransair.com",655],["more.com",656],["nwslsoccer.com",656],["climatecentral.org",657],["resolution.de",658],["flagma.by",659],["eatsalad.com",660],["pacstall.dev",661],["web2.0calc.fr",662],["de-appletradein.likewize.com",663],["swissborg.com",664],["qwice.com",665],["canalpluskuchnia.pl",[666,667]],["uizard.io",668],["stmas.bayern.de",[669,672]],["novayagazeta.eu",670],["kinopoisk.ru",671],["yandex.ru",671],["go.netia.pl",[673,674]],["polsatboxgo.pl",[673,674]],["ing.it",[675,676]],["ing.nl",677],["youcom.com.br",679],["rule34.paheal.net",680],["deep-shine.de",681],["shop.ac-zaun-center.de",681],["kellermann-online.com",681],["kletterkogel.de",681],["pnel.de",681],["korodrogerie.de",681],["der-puten-shop.de",681],["katapult-shop.de",681],["evocsports.com",681],["esm-computer.de",681],["calmwaters.de",681],["mellerud.de",681],["akustik-projekt.at",681],["vansprint.de",681],["0815.at",681],["0815.eu",681],["ojskate.com",681],["der-schweighofer.de",681],["tz-bedarf.de",681],["zeinpharma.de",681],["weicon.com",681],["dagvandewebshop.be",681],["thiele-tee.de",681],["carbox.de",681],["riapsport.de",681],["trendpet.de",681],["eheizung24.de",681],["seemueller.com",681],["vivande.de",681],["heidegrill.com",681],["gladiator-fightwear.com",681],["h-andreas.com",681],["pp-parts.com",681],["natuerlich-holzschuhe.de",681],["massivart.de",681],["malermeister-shop.de",681],["imping-confiserie.de",681],["lenox-trading.at",681],["cklenk.de",681],["catolet.de",681],["drinkitnow.de",681],["patisserie-m.de",681],["storm-proof.com",681],["balance-fahrradladen.de",681],["magicpos.shop",681],["zeinpharma.com",681],["sps-handel.net",681],["novagenics.com",681],["butterfly-circus.de",681],["holzhof24.de",681],["w6-wertarbeit.de",681],["fleurop.de",681],["leki.com",681],["extremeaudio.de",681],["taste-market.de",681],["delker-optik.de",681],["stuhl24-shop.de",681],["g-nestle.de",681],["alpine-hygiene.ch",681],["fluidmaster.it",681],["cordon.de",681],["belisse-beauty.de",681],["belisse-beauty.co.uk",681],["wpc-shop24.de",681],["liv.si",681],["maybach-luxury.com",681],["leiternprofi24.de",681],["hela-shop.eu",681],["hitado.de",681],["j-koenig.de",681],["armedangels.com",[681,758,759]],["bvk-beamtenversorgung.de",682],["hofer-kerzen.at",683],["karls-shop.de",684],["byggern.no",685],["donauauen.at",686],["woltair.cz",687],["rostics.ru",688],["hife.es",689],["lilcat.com",690],["hot.si",[691,692,693,694]],["crenolibre.fr",695],["monarchmoney.com",696],["e-pole.pl",697],["dopt.com",698],["keb-automation.com",699],["bonduelle.ru",700],["oxfordonlineenglish.com",701],["pccomponentes.fr",702],["pccomponentes.com",702],["pccomponentes.pt",702],["grants.at",703],["africa-uninet.at",703],["rqb.at",703],["youngscience.at",703],["oead.at",703],["innovationsstiftung-bildung.at",703],["etwinning.at",703],["arqa-vet.at",703],["zentrumfuercitizenscience.at",703],["vorstudienlehrgang.at",703],["erasmusplus.at",703],["jeger.pl",704],["bo.de",705],["thegamingwatcher.com",706],["norlysplay.dk",707],["plusujemy.pl",708],["asus.com.cn",[709,711]],["zentalk.asus.com",[709,711]],["mubi.com",710],["59northwheels.se",712],["photospecialist.co.uk",713],["foto-gregor.de",713],["kamera-express.de",713],["kamera-express.be",713],["kamera-express.nl",713],["kamera-express.fr",713],["kamera-express.lu",713],["dhbbank.com",714],["dhbbank.de",714],["dhbbank.be",714],["dhbbank.nl",714],["login.ingbank.pl",715],["fabrykacukiernika.pl",[716,717]],["peaks.com",718],["3landesmuseen-braunschweig.de",719],["unifachbuch.de",[720,721,722]],["playlumi.com",[723,724,725]],["chatfuel.com",726],["studio3t.com",[727,728,729,730]],["realgap.co.uk",[731,732,733,734]],["hotelborgia.com",[735,736]],["sweet24.de",737],["zwembaddekouter.be",738],["flixclassic.pl",739],["jobtoday.com",740],["deltatre.com",[741,742,756]],["withings.com",[743,744,745]],["blista.de",[746,747]],["hashop.nl",748],["gift.be",[749,750]],["elevator.de",751],["foryouehealth.de",751],["animaze.us",751],["penn-elcom.com",751],["curantus.de",751],["mtbmarket.de",751],["spanienweinonline.ch",751],["novap.fr",751],["bizkaia.eus",[752,753,754]],["sinparty.com",755],["mantel.com",757],["e-dojus.lv",760],["burnesspaull.com",761],["oncosur.org",762],["photobooth.online",763],["epidemicsound.com",764],["ryanair.com",765],["refurbished.at",[766,767,768]],["refurbished.nl",[766,767,768]],["refurbished.be",[766,767,768]],["refurbishedstore.de",[766,767,768]],["bayernportal.de",[769,770,771]],["ayudatpymes.com",772],["zipjob.com",772],["shoutcast.com",772],["plastischechirurgie-muenchen.info",773],["bonn.sitzung-online.de",774],["depop.com",[775,776,777]],["thenounproject.com",778],["pricehubble.com",779],["ilmotorsport.de",780],["karate.com",781],["psbank.ru",781],["myriad.social",781],["exeedme.com",781],["aqua-store.fr",782],["voila.ca",783],["anastore.com",784],["app.arzt-direkt.de",785],["dasfutterhaus.at",786],["e-pity.pl",787],["fillup.pl",788],["dailymotion.com",789],["barcawelt.de",790],["lueneburger-heide.de",791],["polizei.bayern.de",[792,794]],["ourworldofpixels.com",793],["jku.at",795],["matkahuolto.fi",796],["backmarket.de",[797,798,799]],["backmarket.co.uk",[797,798,799]],["backmarket.es",[797,798,799]],["backmarket.be",[797,798,799]],["backmarket.at",[797,798,799]],["backmarket.fr",[797,798,799]],["backmarket.gr",[797,798,799]],["backmarket.fi",[797,798,799]],["backmarket.ie",[797,798,799]],["backmarket.it",[797,798,799]],["backmarket.nl",[797,798,799]],["backmarket.pt",[797,798,799]],["backmarket.se",[797,798,799]],["backmarket.sk",[797,798,799]],["backmarket.com",[797,798,799]],["eleven-sportswear.cz",[800,801,802]],["silvini.com",[800,801,802]],["silvini.de",[800,801,802]],["purefiji.cz",[800,801,802]],["voda-zdarma.cz",[800,801,802]],["lesgarconsfaciles.com",[800,801,802]],["ulevapronohy.cz",[800,801,802]],["vitalvibe.eu",[800,801,802]],["plavte.cz",[800,801,802]],["mo-tools.cz",[800,801,802]],["flamantonlineshop.cz",[800,801,802]],["sandratex.cz",[800,801,802]],["norwayshop.cz",[800,801,802]],["3d-foto.cz",[800,801,802]],["neviditelnepradlo.cz",[800,801,802]],["nutrimedium.com",[800,801,802]],["silvini.cz",[800,801,802]],["karel.cz",[800,801,802]],["silvini.sk",[800,801,802]],["book-n-drive.de",803],["cotswoldoutdoor.com",804],["cotswoldoutdoor.ie",804],["cam.start.canon",805],["usnews.com",806],["researchaffiliates.com",807],["singkinderlieder.de",808],["stiegeler.com",809],["ba.com",[812,813,814,815,816,817,818]],["britishairways.com",[812,813,814,815,816,817,818]],["cineman.pl",[819,820,821]],["tv-trwam.pl",[819,820,821,822]],["qatarairways.com",[823,824,825,826,827]],["wedding.pl",828],["vivaldi.com",829],["emuia1.gugik.gov.pl",830],["nike.com",831],["adidas.at",832],["adidas.be",832],["adidas.ca",832],["adidas.ch",832],["adidas.cl",832],["adidas.co",832],["adidas.co.in",832],["adidas.co.kr",832],["adidas.co.nz",832],["adidas.co.th",832],["adidas.co.uk",832],["adidas.com",832],["adidas.com.ar",832],["adidas.com.au",832],["adidas.com.br",832],["adidas.com.my",832],["adidas.com.ph",832],["adidas.com.vn",832],["adidas.cz",832],["adidas.de",832],["adidas.dk",832],["adidas.es",832],["adidas.fi",832],["adidas.fr",832],["adidas.gr",832],["adidas.ie",832],["adidas.it",832],["adidas.mx",832],["adidas.nl",832],["adidas.no",832],["adidas.pe",832],["adidas.pl",832],["adidas.pt",832],["adidas.ru",832],["adidas.se",832],["adidas.sk",832],["colourbox.com",833],["ebilet.pl",834],["myeventeo.com",835],["snap.com",836],["louwman.nl",[837,838]],["ratemyprofessors.com",839],["filen.io",840],["leotrippi.com",841],["restaurantclub.pl",841],["context.news",841],["queisser.de",841],["grandprixradio.dk",[842,843,844,845,846]],["grandprixradio.nl",[842,843,844,845,846]],["grandprixradio.be",[842,843,844,845,846]],["businessclass.com",847],["quantamagazine.org",848],["hellotv.nl",849],["jisc.ac.uk",850],["lasestrellas.tv",851],["xn--digitaler-notenstnder-m2b.com",852],["schoonmaakgroothandelemmen.nl",852],["nanuko.de",852],["hair-body-24.de",852],["shopforyou47.de",852],["kreativverliebt.de",852],["anderweltverlag.com",852],["octavio-shop.com",852],["forcetools-kepmar.eu",852],["fantecshop.de",852],["hexen-werkstatt.shop",852],["shop-naturstrom.de",852],["biona-shop.de",852],["camokoenig.de",852],["bikepro.de",852],["kaffeediscount.com",852],["vamos-skateshop.com",852],["holland-shop.com",852],["avonika.com",852],["royal-oak.org",853],["hurton.pl",854],["officesuite.com",855],["fups.com",[856,858]],["scienceopen.com",859],["moebel-mahler-siebenlehn.de",[860,861]],["calendly.com",862],["batesenvironmental.co.uk",[863,864]],["ubereats.com",865],["101internet.ru",866],["bein.com",867],["beinsports.com",867],["figshare.com",868],["bitso.com",869],["gallmeister.fr",870],["eco-toimistotarvikkeet.fi",871],["proficient.fi",871],["developer.ing.com",872],["webtrack.dhlglobalmail.com",874],["webtrack.dhlecs.com",874],["ehealth.gov.gr",875],["calvinklein.se",[876,877,878]],["calvinklein.fi",[876,877,878]],["calvinklein.sk",[876,877,878]],["calvinklein.si",[876,877,878]],["calvinklein.ch",[876,877,878]],["calvinklein.ru",[876,877,878]],["calvinklein.com",[876,877,878]],["calvinklein.pt",[876,877,878]],["calvinklein.pl",[876,877,878]],["calvinklein.at",[876,877,878]],["calvinklein.nl",[876,877,878]],["calvinklein.hu",[876,877,878]],["calvinklein.lu",[876,877,878]],["calvinklein.lt",[876,877,878]],["calvinklein.lv",[876,877,878]],["calvinklein.it",[876,877,878]],["calvinklein.ie",[876,877,878]],["calvinklein.hr",[876,877,878]],["calvinklein.fr",[876,877,878]],["calvinklein.es",[876,877,878]],["calvinklein.ee",[876,877,878]],["calvinklein.de",[876,877,878]],["calvinklein.dk",[876,877,878]],["calvinklein.cz",[876,877,878]],["calvinklein.bg",[876,877,878]],["calvinklein.be",[876,877,878]],["calvinklein.co.uk",[876,877,878]],["ofdb.de",879],["dtksoft.com",880],["serverstoplist.com",881],["truecaller.com",882],["fruugo.fi",886],["sk-nic.sk",887],["worldcupchampionships.com",887],["arturofuente.com",[887,889,890]],["protos.com",[887,889,890]],["timhortons.co.th",[887,888,889,891,893,894]],["toyota.co.uk",[887,888,889,892,893,894]],["businessaccountingbasics.co.uk",[887,888,889,891,893,894]],["flickr.org",[887,888,889,891,893,894]],["espacocasa.com",887],["altraeta.it",887],["centrooceano.it",887],["allstoresdigital.com",887],["cultarm3d.de",887],["soulbounce.com",887],["fluidtopics.com",887],["uvetgbt.com",887],["malcorentacar.com",887],["emondo.de",887],["maspero.it",887],["kelkay.com",887],["underground-england.com",887],["vert.eco",887],["turcolegal.com",887],["magnet4blogging.net",887],["moovly.com",887],["automationafrica.co.za",887],["jornaldoalgarve.pt",887],["keravanenergia.fi",887],["kuopas.fi",887],["frag-machiavelli.de",887],["healthera.co.uk",887],["mobeleader.com",887],["powerup-gaming.com",887],["developer-blog.net",887],["medical.edu.mt",887],["deh.mt",887],["bluebell-railway.com",887],["ribescasals.com",887],["javea.com",887],["chinaimportal.com",887],["inds.co.uk",887],["raoul-follereau.org",887],["serramenti-milano.it",887],["cosasdemujer.com",887],["luz-blanca.info",887],["cosasdeviajes.com",887],["safehaven.io",887],["havocpoint.it",887],["motofocus.pl",887],["nomanssky.com",887],["drei-franken-info.de",887],["clausnehring.com",887],["alttab.net",887],["kinderleicht.berlin",887],["kiakkoradio.fi",887],["cosasdelcaribe.es",887],["de-sjove-jokes.dk",887],["serverprofis.de",887],["biographyonline.net",887],["iziconfort.com",887],["sportinnederland.com",887],["natureatblog.com",887],["wtsenergy.com",887],["cosasdesalud.es",887],["internetpasoapaso.com",887],["zurzeit.at",887],["contaspoupanca.pt",887],["steamdeckhq.com",[887,888,889,891,893,894]],["ipouritinc.com",[887,889,891]],["hemglass.se",[887,889,891,893,894]],["sumsub.com",[887,888,889]],["atman.pl",[887,888,889]],["fabriziovanmarciano.com",[887,888,889]],["nationalrail.com",[887,888,889]],["eett.gr",[887,888,889]],["funkypotato.com",[887,888,889]],["equalexchange.co.uk",[887,888,889]],["swnsdigital.com",[887,888,889]],["gogolf.fi",[887,891]],["hanse-haus-greifswald.de",887],["tampereenratikka.fi",[887,889,895,896]],["kymppikatsastus.fi",[889,893,944,945]],["santander.rewardgateway.co.uk",[897,899]],["news.abs-cbn.com",898],["brasiltec.ind.br",900],["doka.com",[901,902,903]],["abi.de",[904,905]],["studienwahl.de",[904,905]],["journal.hr",[906,907,908,909]],["howstuffworks.com",910],["stickypassword.com",[911,912,913]],["conversion-rate-experts.com",[914,915]],["merkur.si",[916,917,918]],["petitionenligne.com",[919,920]],["petitionenligne.be",[919,920]],["petitionenligne.fr",[919,920]],["petitionenligne.re",[919,920]],["petitionenligne.ch",[919,920]],["skrivunder.net",[919,920]],["petitiononline.uk",[919,920]],["petitions.nz",[919,920]],["petizioni.com",[919,920]],["peticao.online",[919,920]],["skrivunder.com",[919,920]],["peticiones.ar",[919,920]],["petities.com",[919,920]],["petitionen.com",[919,920]],["petice.com",[919,920]],["opprop.net",[919,920]],["peticiok.com",[919,920]],["peticiones.net",[919,920]],["peticion.es",[919,920]],["peticiones.pe",[919,920]],["peticiones.mx",[919,920]],["peticiones.cl",[919,920]],["peticije.online",[919,920]],["peticiones.co",[919,920]],["mediathek.lfv-bayern.de",921],["aluypvc.es",[922,923,924]],["pracuj.pl",[925,926,927,928,929]],["vki.at",931],["konsument.at",931],["chollometro.com",932],["dealabs.com",932],["hotukdeals.com",932],["pepper.it",932],["pepper.pl",932],["preisjaeger.at",932],["mydealz.de",932],["220.lv",[933,934]],["pigu.lt",[933,934]],["kaup24.ee",[933,934]],["hansapost.ee",[933,934]],["hobbyhall.fi",[933,934]],["direct.travelinsurance.tescobank.com",[937,938,939,940,941,942,943,944]],["mediaite.com",946],["easyfind.ch",[947,948]],["e-shop.leonidas.com",[949,950]],["lastmile.lt",951],["veriff.com",952],["tvpworld.com",953],["vm.co.mz",954],["constantin.film",[955,956,957]],["notion.so",958],["omgevingsloketinzage.omgeving.vlaanderen.be",[959,960]],["primor.eu",961],["tameteo.com",962],["tempo.pt",962],["yourweather.co.uk",962],["meteored.cl",962],["meteored.mx",962],["tempo.com",962],["ilmeteo.net",962],["meteored.com.ar",962],["daswetter.com",962],["myprivacy.dpgmediagroup.net",963],["algarvevacation.net",964],["3sat.de",965],["oxxio.nl",[966,967]],["butterflyshop.dk",[968,969,970]],["praxis.nl",971],["brico.be",971],["kent.gov.uk",[972,973]],["pohjanmaanhyvinvointi.fi",974],["maanmittauslaitos.fi",975]]);

const entitiesMap = new Map([["top4mobile",[26,27]]]);

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
    const normalized = value.toLowerCase();
    const match = /^("?)(.+)\1$/.exec(normalized);
    const unquoted = match && match[2] || normalized;
    const validValues = getSafeCookieValuesFn();
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

function getSafeCookieValuesFn() {
    return [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'disallow', 'deny',
        'allowed', 'denied',
        'approved', 'disapproved',
        'checked', 'unchecked',
        'dismiss', 'dismissed',
        'enable', 'disable',
        'enabled', 'disabled',
        'essential', 'nonessential',
        'hide', 'hidden',
        'necessary', 'required',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
    ];
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
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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
