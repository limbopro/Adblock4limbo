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

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["GDPR","9"],["COOKIES_ACCEPTED","true"],["EnableABTest","false"],["EnableFacebook","false"],["EnableGA","false"],["cookie-consent","false"],["consent-state","true"],["was_cookie_consent","no"],["ytprefs_gdpr_consent","1","","reload","1"],["cconsent","1000"],["CONSENT","15"],["nCookieVisible","2"],["CookieConsent","false"],["cookie_consent","necessary"],["suzuki-accept-cookie","true"],["cookieHidden","true"],["terms_agreement_popup_agreed","true","","reload","1"],["consent_panel","1"],["user_allowed_save_cookie","true"],["AcceptCookie","yes"],["cookieConsent","0"],["CF_GDPR_COOKIE_CONSENT_VIEWED","1"],["cookie_alert","true"],["cb-enabled","accepted"],["AgreeCookies","true"],["AreCookiesSet","true"],["chcCookieHint","1","","reload","1"],["accept-selected-cookies","true","","reload","1"],["cookiePreferences","true"],["necessary","true"],["has_accepted_cookies","true"],["cs_viewed_cookie_policy","yes"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["has-seen-cookie-notice","true","","reload","1"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["cookies-configured","1"],["consent","true"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["cookienotification","1"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["acceptCookie","1"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["CookieConsentFT","1"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookie-bar","0"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["br-lgpd-cookie-notice-agreement-v1","1"],["privacy_mv","1"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["gcp","1","","reload","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["cookieconsent","deny"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["COOKIECONSENT","false"],["tibber_cc_essential","approved","","reload","1"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["kevin-user-has-accepted-ad-cookies","false"],["kevin-user-has-accepted-analytics-cookies","false"],["kevin-user-has-interacted-with-cookies","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["consents","essential"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_preferences","10"],["cookie_consent_status","allow"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["CA_DT_V2","0","","reload","1"],["CA_DT_V3","0"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["TVPtcs22ver","66"],["cookieBasicConsent","accepted"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["marinelink.com",3],["queensfishandchipsgloucester.co.uk",4],["thegraph.com",8],["followalice.com",[8,796]],["headout.com",9],["london-tickets.co.uk",9],["kosmas.cz",10],["blog.documentfoundation.org",11],["my.eneba.com",12],["blitzortung.org",13],["esim.redteago.com",14],["tester.userbrain.com",15],["empathy.com",15],["labs.epi2me.io",15],["fydeos.io",16],["autos.suzuki.com.mx",17],["stonly.com",18],["camp-fire.jp",19],["my2n.com",20],["vandalism-sounds.com",21],["oocl.com",22],["brazzersnetwork.com",23],["cyberfolks.ro",24],["hiermitherz.de",25],["uk2.net",26],["aeromexico.com",[27,28]],["easywintergarten.de",29],["vinothekwaespi.ch",[30,31,32]],["graphy.com",33],["raspberrypi.dk",34],["ocean.io",35],["waves.is",36],["tesa.com",37],["repair.wd40.com",38],["gls-group.eu",41],["chipsaway.co.uk",42],["heatstore.eu",43],["luvly.care",43],["firmen.wko.at",43],["copaamerica.com",44],["apunyalometre.cat",44],["cooleygo.com",45],["map.blitzortung.org",46],["northumbriasport.com",47],["clearspend.natwest.com",48],["cellcolabsclinical.com",49],["producthunt.com",50],["motorsportreg.com",[51,52]],["imola.motorsportreg.com",[53,54]],["pga.com",55],["portal.payment.eltax.lta.go.jp",56],["greenbuildingadvisor.com",[57,58,59]],["finewoodworking.com",[57,58,59]],["privatekeys.pw",60],["telli.dpd.ee",61],["youthforum.org",61],["votegroup.de",[62,63]],["pharmahall.gr",64],["x-team.com",65],["reservations.helveticmotion.ch",66],["endclothing.com",[67,68]],["arning-bau.de",69],["kraftwerk.co.at",70],["fhr.biz",71],["srf.nu",72],["jn.fo",[73,74]],["rovia.es",75],["airnewzealand.co.nz",76],["viu.com",77],["dinamalar.com",78],["volkswagen-group.com",79],["solo.io",80],["pomelo.la",81],["ibuypower.com",82],["sberbank.com",[83,470]],["swissmilk.ch",84],["gamemaker.io",85],["pixiv.net",86],["kinemaster.com",87],["sp32bb.pl",88],["jazz.fm",89],["juntadeandalucia.es",90],["melee.gg",[91,92,93]],["chemocare.com",94],["mobiliteit.nl",95],["xledger.net",96],["reviewmeta.com",97],["guide-bordeaux-gironde.com",98],["travelinsured.com",99],["gdpr.twitter.com",100],["mora.hu",101],["confused.com",102],["physikinstrumente.de",103],["karlknauer.de",103],["schoeck.com",103],["resonate.coop",103],["northgatevehiclehire.ie",103],["badhall.at",103],["cic.ch",103],["ilsaggiatore.com",104],["forum.digitalfernsehen.de",105],["bitscrunch.com",[106,107,108]],["hannahgraaf.com",109],["shop.elbers-hof.de",[110,111]],["woolsocks.eu",112],["uza.be",113],["5asec.ch",113],["wizards.com",113],["kitepackaging.co.uk",[114,115]],["parkenflughafen.de",116],["radyofenomen.com",117],["elsate.com",118],["hume.ai",119],["lotusantwerp.wacs.online",120],["gitbook.io",121],["gitbook.com",121],["thehacker.recipes",121],["docs.dyrector.io",121],["docs.webstudio.is",121],["docs.chartbeat.com",121],["docs.civic.com",121],["makeresearchpay.com",122],["tandartsenpraktijk-simons.tandartsennet.nl",123],["huisartsenpraktijkdoorn.nl",123],["bcorporation.net",124],["knime.com",[124,168]],["quebueno.es",124],["edookit.com",125],["trixonline.be",126],["radio-canada.ca",127],["heysummit.com",128],["puromarketing.com",129],["radicalmotorsport.com",130],["biurobox.pl",131],["cycling74.com",132],["triviacreator.com",133],["reforge.com",133],["freshis.com",133],["anker.com",133],["computacenter.com",134],["playbalatro.com",135],["kastner-oehler.de",136],["kastner-oehler.at",136],["kastner-oehler.ch",136],["twenga.it",137],["twenga.fr",137],["twenga.co.uk",137],["twenga.de",137],["twenga.es",137],["twenga.pl",137],["twenga.nl",137],["twenga.se",137],["olx.kz",138],["olx.uz",138],["efl.com",139],["wst.tv",139],["cuvva.com",140],["vitbikes.de",141],["gourmetfoodstore.com",142],["schulfahrt.de",143],["deutsche-finanzagentur.de",144],["thejazzcafelondon.com",145],["keeb.supply",146],["spb.hh.ru",147],["kaluga.hh.ru",147],["school.hh.ru",147],["rating.hh.ru",147],["novgorod.hh.ru",147],["xxxshemaleporn.com",[148,149]],["gayhits.com",[148,149]],["gaypornvideos.xxx",[148,149]],["sextubespot.com",[148,149]],["wewantjusticedao.org",150],["godbolt.org",151],["projectenglish.com.pl",[152,158]],["ledenicheur.fr",152],["pricespy.co.uk",152],["pricespy.co.nz",152],["sae.fsc.ccoo.es",153],["piusx-college.nl",154],["forgeofempires.com",155],["yoomoney.ru",156],["vod.warszawa.pl",157],["m.twitch.tv",159],["environment.data.gov.uk",160],["playtesting.games",161],["portal.by.aok.de",162],["umlandscout.de",163],["atombank.co.uk",[164,165,166]],["showtv.com.tr",167],["seventhgeneration.com",168],["press.princeton.edu",168],["ldz.lv",168],["crtm.es",169],["airastana.com",170],["vkf-renzel.nl",171],["booking.reederei-zingst.de",[172,173,174]],["booking.weisse-flotte.de",[172,173,174]],["booking2.reederei-hiddensee.de",[172,173,174]],["sanswiss.pl",175],["galaxy.com",176],["petdesk.com",177],["ivyexec.com",178],["railtech.com",179],["lottehotel.com",[180,181,182,183,184]],["paydirekt.de",185],["kijiji.ca",186],["posterstore.fr",187],["posterstore.eu",187],["posterstore.be",187],["posterstore.de",187],["posterstore.hu",187],["posterstore.ie",187],["posterstore.it",187],["posterstore.no",187],["posterstore.nl",187],["posterstore.pl",187],["posterstore.com",187],["posterstore.ae",187],["posterstore.ca",187],["posterstore.nz",187],["posterstore.es",187],["posterstore.kr",187],["posterstore.jp",187],["posterstore.dk",187],["posterstore.se",187],["posterstore.ch",187],["posterstore.at",187],["myriadicity.net",188],["dgsf.org",188],["endgame.id",189],["cashback-cards.ch",190],["swisscard.ch",190],["ahorn24.de",191],["blockdyor.com",192],["ticket.io",193],["omega-nuernberg.servicebund.com",194],["lojaboschferramentas.com.br",[195,197,198]],["shareloft.com",196],["fineartsmuseum.recreatex.be",[199,200,201]],["jaapeden.nl",[199,200,201]],["eboo.lu",202],["lasmallagency.com",203],["lhsystems.com",[204,205,206,207]],["twomates.de",208],["intergiro.com",209],["healthygamer.gg",210],["telepizza.es",[211,212,213]],["telepizza.pt",[211,212,213]],["frisco.pl",214],["tyleenslang.nl",215],["schrikdraad.net",215],["kruiwagen.net",215],["pvcvoordeel.nl",215],["pvcbuis.com",215],["drainagebuizen.nl",215],["likewise.com",216],["longines.com",[217,218,219,220]],["vater-it.de",221],["biano.hu",222],["nadia.gov.gr",223],["hana-book.fr",224],["kzvb.de",225],["correosexpress.com",226],["cexpr.es",226],["rte.ie",227],["smart.com",228],["gry.pl",228],["gamesgames.com",228],["games.co.uk",228],["jetztspielen.de",228],["ourgames.ru",228],["permainan.co.id",228],["gioco.it",228],["jeux.fr",228],["juegos.com",228],["ojogos.com.br",228],["oyunskor.com",228],["spela.se",228],["spelletjes.nl",228],["agame.com",228],["spielen.com",228],["flashgames.ru",228],["games.co.id",228],["giochi.it",228],["jeu.fr",228],["spel.nl",228],["tridge.com",229],["asus.com",[230,231]],["drinksking.sk",232],["neuhauschocolates.com",233],["commandsuite.it",234],["designmynight.com",234],["oktea.tw",235],["1028loveu.com.tw",235],["airbubu.com",235],["amai.tw",235],["anns.tw",235],["as.estore.armarpot.com",235],["as-eweb.com",235],["asf.com.tw",235],["asics.com.hk",235],["asics.com.tw",235],["ausupreme.com",235],["basiik.com",235],["bearboss.com",235],["beast-kingdom.com.tw",235],["beldora.com.tw",235],["benefitcosmetics.com.tw",235],["bns.com.tw",235],["byhue-official.com",235],["candybox.com.tw",235],["columbiasportswear.com.tw",235],["concerto.com.tw",235],["countess.tw",235],["cuapp.com",235],["daima.asia",235],["dettol-store.com.tw",235],["dickies.com.tw",235],["doga.com.tw",235],["dot-st.tw",235],["dr-douxi.tw",235],["durex-store.com.tw",235],["echome.com.hk",235],["eding.com.tw",235],["e-hilltop.com",235],["faduobra.com",235],["fairlady.com.tw",235],["fbshop.com.tw",235],["freshdays-shop.com",235],["hh-taiwan.com.tw",235],["iqueen.com.tw",235],["jjfish.com.tw",235],["jpmed.com.tw",235],["jsstore.com.tw",235],["kipling.com.tw",235],["kuaiche.com.tw",235],["lanew.com.tw",235],["leejeans.com.tw",235],["levis.com.tw",235],["ludeya.com",235],["lulus.tw",235],["makeupforever.com.tw",235],["mart.family.com.tw",235],["meinlcoffee.com.tw",235],["metroasis.com.tw",235],["minervababy.com.tw",235],["miss21.estore.asgroup.com.tw",235],["miu-star.com.tw",235],["mkup.tw",235],["mlb-korea.com.hk",235],["mollifix.com",235],["naruko.com.tw",235],["newweb.renoirpuzzle.com.tw",235],["nikokids.com.tw",235],["nisoro.com",235],["odout.com",235],["ouiorganic.com",235],["pandababy.com.tw",235],["peachy.com.tw",235],["poyabuy.com.tw",235],["premierfood.com.hk",235],["rachelwine.com.tw",235],["risal.com.tw",235],["sasa.com.hk",235],["schiff-store.com.tw",235],["sexylook.com.tw",235],["sfn.com.tw",235],["shingfangpastry.com",235],["shop.3m.com.tw",235],["shop.5soap.com",235],["shop.atunas.com.tw",235],["shop.bosscat.com.tw",235],["shop.conas.com.tw",235],["shop.cosmed.com.tw",235],["shop.coville.com.tw",235],["shop.euyansang.com.hk",235],["shop.kbc.com.tw",235],["shop.kemei.com.tw",235],["shop.kky.com.tw",235],["shop.norns.com.tw",235],["shop.okogreen.com.tw",235],["shop.skechers-twn.com",235],["shop.s3.com.tw",235],["shop.teascovery.com",235],["shop.wacoal.com.tw",235],["shop.wumajia.com.tw",235],["shopping.dradvice.asia",235],["shop0315.com.tw",235],["sky-blue.com.tw",235],["snowpeak.com.tw",235],["songbeam.com.tw",235],["so-nice.com.tw",235],["store-philips.tw",235],["tcsb.com.tw",235],["thenorthface.com.tw",235],["timberland.com.tw",235],["tokuyo.com.tw",235],["triumphshop.com.tw",235],["trygogo.com",235],["tupiens-foodie.com",235],["tw.istayreal.com",235],["tw.puma.com",235],["vans.com.tw",235],["vemar.com.tw",235],["vigill.com.tw",235],["vilson.com",235],["vincentsworld.com.tw",235],["wealthshop888.com",235],["yamazaki.com.tw",235],["bafin.de",236],["materna.de",236],["bamf.de",236],["tenvinilo-argentina.com",[237,238]],["eikaforsikring.no",[239,240]],["eurowings.com",[241,242,243]],["newpharma.be",[244,245,246]],["newpharma.fr",[244,245,246]],["newpharma.de",[244,245,246]],["newpharma.at",[244,245,246]],["newpharma.nl",[244,245,246]],["kapoorwatch.com",247],["instantoffices.com",248],["paf.se",248],["citibank.pl",248],["citibankonline.pl",248],["azertyfactor.be",249],["zelezodum.cz",250],["thw.de",251],["bafa.de",251],["bka.de",251],["bmbf.de",251],["weather.com",252],["bolist.se",[253,254]],["project529.com",254],["evivanlanschot.nl",255],["alohabrowser.com",256],["prenatal.nl",257],["onnibus.com",[257,903,904,905]],["kyoceradocumentsolutions.us",[257,954,955]],["kyoceradocumentsolutions.ch",[257,954,955]],["kyoceradocumentsolutions.co.uk",[257,954,955]],["kyoceradocumentsolutions.de",[257,954,955]],["kyoceradocumentsolutions.es",[257,954,955]],["kyoceradocumentsolutions.eu",[257,954,955]],["kyoceradocumentsolutions.fr",[257,954,955]],["kyoceradocumentsolutions.it",[257,954,955]],["kyoceradocumentsolutions.ru",[257,954,955]],["kyoceradocumentsolutions.mx",[257,954,955]],["kyoceradocumentsolutions.cl",[257,954,955]],["kyoceradocumentsolutions.com.br",[257,954,955]],["wagner-tuning.com",[258,259,260,261]],["waitrosecellar.com",[262,263,264,265]],["waitrose.com",[262,617]],["kvk.nl",[266,267,268]],["macfarlanes.com",269],["pole-emploi.fr",270],["gardenmediaguild.co.uk",271],["samplerite.com",272],["samplerite.cn",272],["sororedit.com",273],["blukit.com.br",274],["biegnaszczyt.pl",275],["staff-gallery.com",276],["itv.com",277],["dvag.de",278],["premierinn.com",[279,280,281,282]],["whitbreadinns.co.uk",[279,280,281,282]],["barandblock.co.uk",[279,280,281,282]],["tabletable.co.uk",[279,280,281,282]],["brewersfayre.co.uk",[279,280,281,282]],["beefeater.co.uk",[279,280,281,282]],["allstarssportsbars.co.uk",[283,284]],["babiesrus.ca",285],["toysrus.ca",285],["roomsandspaces.ca",285],["athletic-club.eus",[286,287,288]],["wattoo.dk",289],["wattoo.no",289],["texthelp.com",[290,291]],["courierexchange.co.uk",[292,293,294]],["haulageexchange.co.uk",[292,293,294]],["ecaytrade.com",295],["powerball.com",296],["tlaciarik.sk",296],["tiskarik.cz",296],["sseriga.edu",[297,298]],["rt.com",299],["swrng.de",300],["crfop.gdos.gov.pl",301],["nurgutes.de",302],["kpcen-torun.edu.pl",303],["opintopolku.fi",304],["app.erevie.pl",305],["debenhams.com",306],["archiwumalle.pl",307],["konicaminolta.ca",308],["konicaminolta.us",308],["deutschebank-dbdirect.com",[309,310,311]],["dbonline.deutsche-bank.es",[309,310,311]],["deutsche-bank.es",[309,310,311]],["hipotecaonline.db.com",312],["kangasalansanomat.fi",313],["eif.org",314],["tunnelmb.net",314],["sugi-net.jp",315],["understandingsociety.ac.uk",316],["leibniz.com",317],["horecaworld.biz",[317,587]],["horecaworld.be",[317,587]],["bettertires.com",317],["electroprecio.com",317],["autohero.com",317],["computerbase.de",[317,949]],["sistemacomponentes.com.br",318],["bargaintown.ie",319],["tui.nl",320],["doppelmayr.com",321],["case-score.com",[322,323]],["cote.co.uk",324],["finimize.com",324],["k-einbruch.de",[325,326]],["blxxded.com",325],["rtu.lv",327],["sysdream.com",328],["cinemarkca.com",329],["neander-zahn.de",330],["thespaniardshampstead.co.uk",331],["carsupermarket.com",331],["theadelphileeds.co.uk",331],["tobycarvery.co.uk",331],["harvester.co.uk",331],["stonehouserestaurants.co.uk",331],["millerandcarter.co.uk",331],["browns-restaurants.co.uk",331],["thechampionpub.co.uk",331],["therocketeustonroad.co.uk",331],["thesheepheidedinburgh.co.uk",331],["thejerichooxford.co.uk",331],["hartsboatyard.co.uk",331],["thesalisburyarmsedinburgh.co.uk",331],["thelambchiswick.co.uk",331],["barntgreeninn.co.uk",331],["the-albany.co.uk",331],["sonofsteak.co.uk",331],["thewashingtonhampstead.co.uk",331],["princessofwalespub.co.uk",331],["harrycookcheltenham.co.uk",331],["thegreenmantrumpington.com",331],["queenandcastlekenilworth.co.uk",331],["whitehorseradlett.co.uk",331],["woolpackstokemandeville.co.uk",331],["thewhitehartpirbright.co.uk",331],["castleportobello.co.uk",331],["theswanbroadway.co.uk",331],["thederbyarmsepsom.co.uk",331],["thedewdropinnoxford.co.uk",331],["thejunctionharborne.co.uk",331],["therailwayblackheath.co.uk",331],["whitehartbrasted.co.uk",331],["thewarrenwokingham.co.uk",331],["thedukesheadcrawley.co.uk",331],["thewhitehartse19.co.uk",331],["thesunclapham.co.uk",331],["thevolunteernw1.co.uk",331],["theramsheaddisley.co.uk",331],["thepalaceleeds.co.uk",331],["edinborocastlepub.co.uk",331],["arnosarms.co.uk",331],["dehemspub.co.uk",331],["dukeofdevonshireeastbourne.co.uk",331],["flanagansappleliverpool.co.uk",331],["fontbrighton.co.uk",331],["hawkinsforge.co.uk",331],["hopeandbearreading.co.uk",331],["ploughandharrowaldridge.co.uk",331],["radicalsandvictuallers.co.uk",331],["redlionhandcross.co.uk",331],["stgeorgeanddragon.co.uk",331],["theanchorinnirby.co.uk",331],["thearkley.co.uk",331],["theappletreegerrardscross.co.uk",331],["theashtonbristol.co.uk",331],["thebankplymouth.co.uk",331],["thebathamptonmill.co.uk",331],["theblackbullyarm.co.uk",331],["thebotanistbristol.co.uk",331],["thebootmappleboroughgreen.co.uk",331],["thebullislington.co.uk",331],["thecavershamrosereading.co.uk",331],["thecliffcanfordcliffs.co.uk",331],["thecockinncockfosters.co.uk",331],["theencorestratford.co.uk",331],["theferry.co.uk",331],["viajesatodotren.com",332],["firsttable.co.uk",333],["ticketingcine.fr",334],["agenziavista.it",335],["e-chladiva.cz",335],["bitecode.dev",336],["mjob.si",[337,338,339]],["airportrentacar.gr",340],["mobile-fueling.de",340],["plos.org",341],["autohaus24.de",342],["sixt-neuwagen.de",342],["gadis.es",[343,344]],["dom.ru",344],["ford-kimmerle-reutlingen.de",345],["autohaus-reitermayer.de",345],["autohaus-diefenbach-waldbrunn.de",345],["autohaus-diefenbach.de",345],["autohaus-musberg.de",345],["ford-ah-im-hunsrueck-simmern.de",345],["ford-arndt-goerlitz.de",345],["ford-autogalerie-alfeld.de",345],["ford-bacher-schrobenhausen.de",345],["ford-bathauer-bad-harzburg.de",345],["ford-behrend-waren.de",345],["ford-bergland-frankfurt-oder.de",345],["ford-bergland-wipperfuerth.de",345],["ford-besico-glauchau.de",345],["ford-besico-nuernberg.de",345],["ford-bischoff-neumuenster.de",345],["ford-bodach-borgentreich.de",345],["ford-bunk-saarbruecken.de",345],["ford-bunk-voelklingen.de",345],["ford-busch-kirchberg.de",345],["ford-diermeier-muenchen.de",345],["ford-dinnebier-leipzig.de",345],["ford-duennes-regensburg.de",345],["ford-fischer-bochum.de",345],["ford-fischer-muenster.de",345],["ford-foerster-koblenz.de",345],["ford-fuchs-uffenheim.de",345],["ford-geberzahn-koeln.de",345],["ford-gerstmann-duesseldorf.de",345],["ford-haefner-und-strunk-kassel.de",345],["ford-hartmann-kempten.de",345],["ford-hartmann-rastatt.de",345],["ford-hatzner-karlsruhe.de",345],["ford-heine-hoexter.de",345],["ford-hentschel-hildesheim.de",345],["ford-hessengarage-dreieich.de",345],["ford-hessengarage-frankfurt.de",345],["ford-hga-windeck.de",345],["ford-hommert-coburg.de",345],["ford-horstmann-rastede.de",345],["ford-janssen-sonsbeck.de",345],["ford-jochem-stingbert.de",345],["ford-jungmann-wuppertal.de",345],["ford-kestel-marktzeuln.de",345],["ford-klaiber-bad-friedrichshall.de",345],["ford-koenig-eschwege.de",345],["ford-kohlhoff-mannheim.de",345],["ford-kt-automobile-coesfeld.de",345],["ford-lackermann-wesel.de",345],["ford-ludewig-delligsen.de",345],["ford-maiwald-linsengericht.de",345],["ford-mertens-beckum.de",345],["ford-meyer-bad-oeynhausen.de",345],["ford-mgs-bayreuth.de",345],["ford-mgs-radebeul.de",345],["ford-muecke-berlin.de",345],["ford-norren-weissenthurm.de",345],["ford-nrw-garage-duesseldorf.de",345],["ford-nrw-garage-handweiser.de",345],["ford-nuding-remshalden.de",345],["ford-ohm-rendsburg.de",345],["ford-reinicke-muecheln.de",345],["ford-rennig.de",345],["ford-roerentrop-luenen.de",345],["ford-schankola-dudweiler.de",345],["ford-sg-goeppingen.de",345],["ford-sg-leonberg.de",345],["ford-sg-neu-ulm.de",345],["ford-sg-pforzheim.de",345],["ford-sg-waiblingen.de",345],["ford-storz-st-georgen.de",345],["ford-strunk-koeln.de",345],["ford-tobaben-hamburg.de",345],["ford-toenjes-zetel.de",345],["ford-wagner-mayen.de",345],["ford-wahl-fritzlar.de",345],["ford-wahl-siegen.de",345],["ford-weege-bad-salzuflen.de",345],["ford-westhoff-hamm.de",345],["ford-wieland-hasbergen.de",345],["renault-autocenterprignitz-pritzwalk.de",345],["renault-spenrath-juelich.de",345],["vitalllit.com",346],["fincaparera.com",346],["dbnetbcn.com",346],["viba.barcelona",346],["anafaustinoatelier.com",346],["lamparasherrero.com",346],["calteixidor.cat",346],["argentos.barcelona",346],["anmarlube.com",346],["anynouxines.barcelona",346],["crearunapaginaweb.cat",346],["cualesmiip.com",346],["porndoe.com",[347,348,349]],["thinkingaustralia.com",350],["elrow.com",351],["ownit.se",352],["velo-antwerpen.be",[353,354]],["wwnorton.com",355],["pc-canada.com",356],["mullgs.se",357],["1a-sehen.de",358],["feature.fm",359],["comte.com",360],["baltic-watches.com",361],["np-brijuni.hr",361],["vilgain.com",361],["tradingview.com",362],["wevolver.com",363],["experienciasfree.com",364],["freemans.com",365],["kivikangas.fi",366],["lumingerie.com",366],["melkkobrew.fi",366],["kh.hu",[367,368,369]],["aplgo.com",370],["securityconference.org",371],["aha.or.at",[372,375]],["fantasyfitnessing.com",373],["chocolateemporium.com",374],["account.samsung.com",376],["crushwineco.com",377],["levi.pt",378],["fertagus.pt",379],["snowboardel.es",380],["bagosport.cz",380],["akumo.cz",380],["snowboardel.cz",380],["pompo.cz",380],["oveckarna.cz",380],["rockpoint.cz",380],["rockpoint.sk",380],["parfum-zentrum.de",380],["candy-store.cz",380],["vivobarefoot.cz",380],["sartor-stoffe.de",380],["smiggle.co.uk",381],["ubisoft.com",[382,383,384,385]],["store.ubisoft.com",[382,385,827,828]],["thulb.uni-jena.de",386],["splityourticket.co.uk",387],["eramba.org",388],["openai.com",[389,390]],["kupbilecik.com",[391,392]],["kupbilecik.de",[391,392]],["kupbilecik.pl",[391,392]],["shopilya.com",393],["arera.it",394],["haustier-berater.de",394],["hfm-frankfurt.de",394],["zoommer.ge",395],["studentapan.se",396],["petcity.lt",[397,398,399,400]],["tobroco.com",[401,405]],["tobroco.nl",[401,405]],["tobroco-giant.com",[401,405]],["geosfreiberg.de",[402,403]],["eapvic.org",404],["bassolsenergia.com",404],["bammusic.com",[406,408,409]],["green-24.de",407],["phish-test.de",410],["bokadirekt.se",411],["ford.lt",412],["ford.pt",412],["ford.fr",412],["ford.de",412],["ford.dk",412],["ford.pl",412],["ford.se",412],["ford.nl",412],["ford.no",412],["ford.fi",412],["ford.gr",412],["ford.it",412],["data-media.gr",413],["e-food.gr",[414,415]],["bvmed.de",416],["babyshop.com",[417,418,419]],["griffbereit24.de",420],["checkwx.com",421],["calendardate.com",422],["wefashion.ch",423],["wefashion.fr",423],["wefashion.lu",423],["wefashion.be",423],["wefashion.de",423],["wefashion.nl",423],["brettspiel-angebote.de",[424,425]],["nio.com",426],["kancelarskepotreby.net",[427,428,429]],["segment-anything.com",430],["sketch.metademolab.com",431],["cambridgebs.co.uk",432],["freizeitbad-greifswald.de",433],["giuseppezanotti.com",[434,435,436]],["xcen.se",436],["biggreenegg.co.uk",437],["skihuette-oberbeuren.de",[438,439,440]],["pwsweather.com",441],["xfree.com",442],["theweathernetwork.com",[443,444]],["monese.com",[445,446,447]],["assos.com",445],["helmut-fischer.com",448],["myscience.org",449],["7-eleven.com",450],["airwallex.com",451],["streema.com",452],["gov.lv",453],["tise.com",454],["codecamps.com",455],["avell.com.br",456],["moneyfarm.com",457],["app.moneyfarm.com",457],["simpl.rent",458],["hubspot.com",459],["prodyna.com",[460,461,462,463]],["zutobi.com",[460,461,462,463]],["calm.com",[464,465]],["pubgesports.com",[466,467,468]],["outwrite.com",469],["sbermarket.ru",471],["atani.com",[472,473,474]],["croisieresendirect.com",475],["bgextras.co.uk",476],["sede.coruna.gal",477],["czech-server.cz",478],["hitech-gamer.com",479],["bialettikave.hu",[480,481,482]],["canalplus.com",[483,484,485]],["mader.bz.it",[486,487,488]],["supply.amazon.co.uk",489],["bhaptics.com",490],["cleverbot.com",491],["watchaut.film",492],["tuffaloy.com",493],["fanvue.com",493],["electronoobs.com",494],["xn--lkylen-vxa.se",495],["tiefenthaler-landtechnik.at",496],["tiefenthaler-landtechnik.ch",496],["tiefenthaler-landtechnik.de",496],["varma.fi",497],["vyos.io",498],["digimobil.es",[499,500]],["teenage.engineering",501],["merrell.pl",[502,766]],["converse.pl",502],["shop.wf-education.com",[502,766]],["werkenbijaswatson.nl",503],["converse.com",[504,505]],["buyandapply.nexus.org.uk",506],["img.ly",507],["halonen.fi",[507,539,540,541,542]],["carlson.fi",[507,539,540,541,542]],["cams.ashemaletube.com",[508,509]],["electronicacerler.com",[510,511,512]],["okpoznan.pl",[513,518]],["ielts.idp.com",514],["ielts.co.nz",514],["ielts.com.au",514],["einfach-einreichen.de",[515,516,517]],["endlesstools.io",519],["mbhszepkartya.hu",520],["casellimoveis.com.br",521],["embedplus.com",522],["e-file.pl",523],["sp215.info",524],["empik.com",525],["senda.pl",526],["united-camera.at",527],["befestigungsfuchs.de",527],["cut-tec.co.uk",528],["gaytimes.co.uk",529],["statisticsanddata.org",530],["hello.one",531],["paychex.com",532],["wildcat-koeln.de",533],["libraries.merton.gov.uk",[534,535]],["tommy.hr",[536,537]],["usit.uio.no",538],["demo-digital-twin.r-stahl.com",543],["la31devalladolid.com",[544,545]],["mx.com",546],["foxtrail.fjallraven.com",547],["dotwatcher.cc",548],["bazarchic.com",[549,550,551]],["seedrs.com",552],["mypensiontracker.co.uk",553],["praxisplan.at",[553,574]],["esimplus.me",554],["cineplanet.com.pe",555],["ecologi.com",556],["wamba.com",557],["eurac.edu",558],["akasaair.com",559],["rittal.com",560],["worstbassist.com",[561,562,563,564,565,566]],["zs-watch.com",567],["crown.com",568],["mesanalyses.fr",569],["teket.jp",570],["fish.shimano.com",[571,572,573]],["simsherpa.com",[575,576,577]],["translit.ru",578],["aruba.com",579],["aireuropa.com",580],["skfbearingselect.com",[581,582]],["scanrenovation.com",583],["ttela.se",584],["dominospizza.pl",585],["devagroup.pl",586],["secondsol.com",587],["angelifybeauty.com",588],["cotopaxi.com",589],["justjoin.it",590],["digibest.pt",591],["two-notes.com",592],["theverge.com",593],["daimant.co",594],["secularism.org.uk",595],["karriere-hamburg.de",596],["musicmap.info",597],["gasspisen.se",598],["medtube.pl",599],["medtube.es",599],["medtube.fr",599],["medtube.net",599],["standard.sk",600],["linmot.com",601],["larian.com",[601,893]],["s-court.me",601],["containerandpackaging.com",602],["top-yp.de",603],["termania.net",604],["account.nowpayments.io",605],["fizjobaza.pl",606],["gigasport.at",607],["gigasport.de",607],["gigasport.ch",607],["velleahome.gr",608],["nicequest.com",609],["handelsbanken.no",610],["handelsbanken.com",610],["handelsbanken.co.uk",610],["handelsbanken.se",[610,693]],["handelsbanken.dk",610],["handelsbanken.fi",610],["ilarahealth.com",611],["songtradr.com",[612,877]],["logo.pt",[613,614]],["flexwhere.co.uk",[615,616]],["flexwhere.de",[615,616]],["pricewise.nl",615],["getunleash.io",615],["dentmania.de",615],["free.navalny.com",615],["latoken.com",615],["campusbrno.cz",[618,619,620]],["secrid.com",621],["etsy.com",622],["careers.cloud.com",622],["blablacar.rs",623],["blablacar.ru",623],["blablacar.com.tr",623],["blablacar.com.ua",623],["blablacar.com.br",623],["seb.se",624],["sebgroup.com",624],["deps.dev",625],["buf.build",626],["starofservice.com",627],["ytcomment.kmcat.uk",628],["gmx.com",629],["gmx.fr",629],["karofilm.ru",630],["octopusenergy.it",631],["octopusenergy.es",[631,632]],["justanswer.es",633],["justanswer.de",633],["justanswer.com",633],["justanswer.co.uk",633],["citilink.ru",634],["huutokaupat.com",635],["kaggle.com",636],["emr.ch",[637,642]],["gem.cbc.ca",638],["pumatools.hu",639],["ici.tou.tv",640],["crunchyroll.com",641],["mayflex.com",643],["clipchamp.com",643],["gdemoideti.ru",643],["trouwenbijfletcher.nl",643],["fletcher.nl",643],["fletcherzakelijk.nl",643],["intermatic.com",643],["jusbrasil.com.br",644],["mobilevikings.be",645],["ebikelohr.de",646],["eurosender.com",647],["melectronics.ch",648],["guard.io",649],["nokportalen.se",650],["dokiliko.com",651],["valamis.com",[652,653,654]],["sverigesingenjorer.se",655],["shop.almawin.de",[656,657,658,696]],["zeitzurtrauer.de",659],["skaling.de",[660,661,662]],["bringmeister.de",663],["gdx.net",664],["clearblue.com",665],["drewag.de",[666,667,668]],["enso.de",[666,667,668]],["buidlbox.io",666],["helitransair.com",669],["more.com",670],["nwslsoccer.com",670],["watch.sonlifetv.com",671],["climatecentral.org",672],["resolution.de",673],["flagma.by",674],["eatsalad.com",675],["pacstall.dev",676],["web2.0calc.fr",677],["de-appletradein.likewize.com",678],["swissborg.com",679],["qwice.com",680],["canalpluskuchnia.pl",[681,682]],["uizard.io",683],["stmas.bayern.de",[684,687]],["novayagazeta.eu",685],["kinopoisk.ru",686],["yandex.ru",686],["bayern-gegen-gewalt.de",687],["go.netia.pl",[688,689]],["polsatboxgo.pl",[688,689]],["ing.it",[690,691]],["ing.nl",692],["youcom.com.br",694],["rule34.paheal.net",695],["deep-shine.de",696],["shop.ac-zaun-center.de",696],["kellermann-online.com",696],["kletterkogel.de",696],["pnel.de",696],["korodrogerie.de",696],["der-puten-shop.de",696],["katapult-shop.de",696],["evocsports.com",696],["esm-computer.de",696],["calmwaters.de",696],["mellerud.de",696],["akustik-projekt.at",696],["vansprint.de",696],["0815.at",696],["0815.eu",696],["ojskate.com",696],["der-schweighofer.de",696],["tz-bedarf.de",696],["zeinpharma.de",696],["weicon.com",696],["dagvandewebshop.be",696],["thiele-tee.de",696],["carbox.de",696],["riapsport.de",696],["trendpet.de",696],["eheizung24.de",696],["seemueller.com",696],["vivande.de",696],["heidegrill.com",696],["gladiator-fightwear.com",696],["h-andreas.com",696],["pp-parts.com",696],["natuerlich-holzschuhe.de",696],["massivart.de",696],["malermeister-shop.de",696],["imping-confiserie.de",696],["lenox-trading.at",696],["cklenk.de",696],["catolet.de",696],["drinkitnow.de",696],["patisserie-m.de",696],["storm-proof.com",696],["balance-fahrradladen.de",696],["magicpos.shop",696],["zeinpharma.com",696],["sps-handel.net",696],["novagenics.com",696],["butterfly-circus.de",696],["holzhof24.de",696],["w6-wertarbeit.de",696],["fleurop.de",696],["leki.com",696],["extremeaudio.de",696],["taste-market.de",696],["delker-optik.de",696],["stuhl24-shop.de",696],["g-nestle.de",696],["alpine-hygiene.ch",696],["fluidmaster.it",696],["cordon.de",696],["belisse-beauty.de",696],["belisse-beauty.co.uk",696],["wpc-shop24.de",696],["liv.si",696],["maybach-luxury.com",696],["leiternprofi24.de",696],["hela-shop.eu",696],["hitado.de",696],["j-koenig.de",696],["armedangels.com",[696,773,774]],["bvk-beamtenversorgung.de",697],["hofer-kerzen.at",698],["dosenmatrosen.de",698],["karls-shop.de",699],["byggern.no",700],["donauauen.at",701],["woltair.cz",702],["rostics.ru",703],["hife.es",704],["lilcat.com",705],["hot.si",[706,707,708,709]],["crenolibre.fr",710],["monarchmoney.com",711],["e-pole.pl",712],["dopt.com",713],["keb-automation.com",714],["bonduelle.ru",715],["oxfordonlineenglish.com",716],["pccomponentes.fr",717],["pccomponentes.com",717],["pccomponentes.pt",717],["grants.at",718],["africa-uninet.at",718],["rqb.at",718],["youngscience.at",718],["oead.at",718],["innovationsstiftung-bildung.at",718],["etwinning.at",718],["arqa-vet.at",718],["zentrumfuercitizenscience.at",718],["vorstudienlehrgang.at",718],["erasmusplus.at",718],["jeger.pl",719],["bo.de",720],["thegamingwatcher.com",721],["norlysplay.dk",722],["plusujemy.pl",723],["asus.com.cn",[724,726]],["zentalk.asus.com",[724,726]],["mubi.com",725],["59northwheels.se",727],["photospecialist.co.uk",728],["foto-gregor.de",728],["kamera-express.de",728],["kamera-express.be",728],["kamera-express.nl",728],["kamera-express.fr",728],["kamera-express.lu",728],["dhbbank.com",729],["dhbbank.de",729],["dhbbank.be",729],["dhbbank.nl",729],["login.ingbank.pl",730],["fabrykacukiernika.pl",[731,732]],["peaks.com",733],["3landesmuseen-braunschweig.de",734],["unifachbuch.de",[735,736,737]],["playlumi.com",[738,739,740]],["chatfuel.com",741],["studio3t.com",[742,743,744,745]],["realgap.co.uk",[746,747,748,749]],["hotelborgia.com",[750,751]],["sweet24.de",752],["zwembaddekouter.be",753],["flixclassic.pl",754],["jobtoday.com",755],["deltatre.com",[756,757,771]],["withings.com",[758,759,760]],["blista.de",[761,762]],["hashop.nl",763],["gift.be",[764,765]],["elevator.de",766],["foryouehealth.de",766],["animaze.us",766],["penn-elcom.com",766],["curantus.de",766],["mtbmarket.de",766],["spanienweinonline.ch",766],["novap.fr",766],["bizkaia.eus",[767,768,769]],["sinparty.com",770],["mantel.com",772],["e-dojus.lv",775],["burnesspaull.com",776],["oncosur.org",777],["photobooth.online",778],["epidemicsound.com",779],["ryanair.com",780],["refurbished.at",[781,782,783]],["refurbished.nl",[781,782,783]],["refurbished.be",[781,782,783]],["refurbishedstore.de",[781,782,783]],["bayernportal.de",[784,785,786]],["ayudatpymes.com",787],["zipjob.com",787],["shoutcast.com",787],["plastischechirurgie-muenchen.info",788],["bonn.sitzung-online.de",789],["depop.com",[790,791,792]],["thenounproject.com",793],["pricehubble.com",794],["ilmotorsport.de",795],["karate.com",796],["psbank.ru",796],["myriad.social",796],["exeedme.com",796],["news.samsung.com",797],["tibber.com",798],["aqua-store.fr",799],["voila.ca",800],["anastore.com",801],["app.arzt-direkt.de",802],["dasfutterhaus.at",803],["e-pity.pl",804],["fillup.pl",805],["dailymotion.com",806],["barcawelt.de",807],["lueneburger-heide.de",808],["polizei.bayern.de",[809,811]],["ourworldofpixels.com",810],["jku.at",812],["matkahuolto.fi",813],["backmarket.de",[814,815,816]],["backmarket.co.uk",[814,815,816]],["backmarket.es",[814,815,816]],["backmarket.be",[814,815,816]],["backmarket.at",[814,815,816]],["backmarket.fr",[814,815,816]],["backmarket.gr",[814,815,816]],["backmarket.fi",[814,815,816]],["backmarket.ie",[814,815,816]],["backmarket.it",[814,815,816]],["backmarket.nl",[814,815,816]],["backmarket.pt",[814,815,816]],["backmarket.se",[814,815,816]],["backmarket.sk",[814,815,816]],["backmarket.com",[814,815,816]],["eleven-sportswear.cz",[817,818,819]],["silvini.com",[817,818,819]],["silvini.de",[817,818,819]],["purefiji.cz",[817,818,819]],["voda-zdarma.cz",[817,818,819]],["lesgarconsfaciles.com",[817,818,819]],["ulevapronohy.cz",[817,818,819]],["vitalvibe.eu",[817,818,819]],["plavte.cz",[817,818,819]],["mo-tools.cz",[817,818,819]],["flamantonlineshop.cz",[817,818,819]],["sandratex.cz",[817,818,819]],["norwayshop.cz",[817,818,819]],["3d-foto.cz",[817,818,819]],["neviditelnepradlo.cz",[817,818,819]],["nutrimedium.com",[817,818,819]],["silvini.cz",[817,818,819]],["karel.cz",[817,818,819]],["silvini.sk",[817,818,819]],["book-n-drive.de",820],["cotswoldoutdoor.com",821],["cotswoldoutdoor.ie",821],["cam.start.canon",822],["usnews.com",823],["researchaffiliates.com",824],["singkinderlieder.de",825],["stiegeler.com",826],["ba.com",[829,830,831,832,833,834,835]],["britishairways.com",[829,830,831,832,833,834,835]],["cineman.pl",[836,837,838]],["tv-trwam.pl",[836,837,838,839]],["qatarairways.com",[840,841,842,843,844]],["wedding.pl",845],["vivaldi.com",846],["emuia1.gugik.gov.pl",847],["nike.com",848],["adidas.at",849],["adidas.be",849],["adidas.ca",849],["adidas.ch",849],["adidas.cl",849],["adidas.co",849],["adidas.co.in",849],["adidas.co.kr",849],["adidas.co.nz",849],["adidas.co.th",849],["adidas.co.uk",849],["adidas.com",849],["adidas.com.ar",849],["adidas.com.au",849],["adidas.com.br",849],["adidas.com.my",849],["adidas.com.ph",849],["adidas.com.vn",849],["adidas.cz",849],["adidas.de",849],["adidas.dk",849],["adidas.es",849],["adidas.fi",849],["adidas.fr",849],["adidas.gr",849],["adidas.ie",849],["adidas.it",849],["adidas.mx",849],["adidas.nl",849],["adidas.no",849],["adidas.pe",849],["adidas.pl",849],["adidas.pt",849],["adidas.ru",849],["adidas.se",849],["adidas.sk",849],["colourbox.com",850],["ebilet.pl",851],["myeventeo.com",852],["snap.com",853],["louwman.nl",[854,855]],["ratemyprofessors.com",856],["filen.io",857],["leotrippi.com",858],["restaurantclub.pl",858],["context.news",858],["queisser.de",858],["grandprixradio.dk",[859,860,861,862,863]],["grandprixradio.nl",[859,860,861,862,863]],["grandprixradio.be",[859,860,861,862,863]],["businessclass.com",864],["quantamagazine.org",865],["hellotv.nl",866],["jisc.ac.uk",867],["lasestrellas.tv",868],["xn--digitaler-notenstnder-m2b.com",869],["schoonmaakgroothandelemmen.nl",869],["nanuko.de",869],["hair-body-24.de",869],["shopforyou47.de",869],["kreativverliebt.de",869],["anderweltverlag.com",869],["octavio-shop.com",869],["forcetools-kepmar.eu",869],["fantecshop.de",869],["hexen-werkstatt.shop",869],["shop-naturstrom.de",869],["biona-shop.de",869],["camokoenig.de",869],["bikepro.de",869],["kaffeediscount.com",869],["vamos-skateshop.com",869],["holland-shop.com",869],["avonika.com",869],["royal-oak.org",870],["hurton.pl",871],["officesuite.com",872],["fups.com",[873,878]],["kevin.eu",[874,875,876]],["scienceopen.com",879],["moebel-mahler-siebenlehn.de",[880,881]],["calendly.com",882],["batesenvironmental.co.uk",[883,884]],["ubereats.com",885],["101internet.ru",886],["bein.com",887],["beinsports.com",887],["figshare.com",888],["bitso.com",889],["gallmeister.fr",890],["eco-toimistotarvikkeet.fi",891],["proficient.fi",891],["developer.ing.com",892],["webtrack.dhlglobalmail.com",894],["webtrack.dhlecs.com",894],["ehealth.gov.gr",895],["calvinklein.se",[896,897,898]],["calvinklein.fi",[896,897,898]],["calvinklein.sk",[896,897,898]],["calvinklein.si",[896,897,898]],["calvinklein.ch",[896,897,898]],["calvinklein.ru",[896,897,898]],["calvinklein.com",[896,897,898]],["calvinklein.pt",[896,897,898]],["calvinklein.pl",[896,897,898]],["calvinklein.at",[896,897,898]],["calvinklein.nl",[896,897,898]],["calvinklein.hu",[896,897,898]],["calvinklein.lu",[896,897,898]],["calvinklein.lt",[896,897,898]],["calvinklein.lv",[896,897,898]],["calvinklein.it",[896,897,898]],["calvinklein.ie",[896,897,898]],["calvinklein.hr",[896,897,898]],["calvinklein.fr",[896,897,898]],["calvinklein.es",[896,897,898]],["calvinklein.ee",[896,897,898]],["calvinklein.de",[896,897,898]],["calvinklein.dk",[896,897,898]],["calvinklein.cz",[896,897,898]],["calvinklein.bg",[896,897,898]],["calvinklein.be",[896,897,898]],["calvinklein.co.uk",[896,897,898]],["ofdb.de",899],["dtksoft.com",900],["serverstoplist.com",901],["truecaller.com",902],["fruugo.fi",906],["ukbrewerytours.com",907],["sk-nic.sk",907],["worldcupchampionships.com",907],["arturofuente.com",[907,909,910]],["protos.com",[907,909,910]],["timhortons.co.th",[907,908,909,911,913,914]],["toyota.co.uk",[907,908,909,912,913,914]],["businessaccountingbasics.co.uk",[907,908,909,911,913,914]],["flickr.org",[907,908,909,911,913,914]],["espacocasa.com",907],["altraeta.it",907],["centrooceano.it",907],["allstoresdigital.com",907],["cultarm3d.de",907],["soulbounce.com",907],["fluidtopics.com",907],["uvetgbt.com",907],["malcorentacar.com",907],["emondo.de",907],["maspero.it",907],["kelkay.com",907],["underground-england.com",907],["vert.eco",907],["turcolegal.com",907],["magnet4blogging.net",907],["moovly.com",907],["automationafrica.co.za",907],["jornaldoalgarve.pt",907],["keravanenergia.fi",907],["kuopas.fi",907],["frag-machiavelli.de",907],["healthera.co.uk",907],["mobeleader.com",907],["powerup-gaming.com",907],["developer-blog.net",907],["medical.edu.mt",907],["deh.mt",907],["bluebell-railway.com",907],["ribescasals.com",907],["javea.com",907],["chinaimportal.com",907],["inds.co.uk",907],["raoul-follereau.org",907],["serramenti-milano.it",907],["cosasdemujer.com",907],["luz-blanca.info",907],["cosasdeviajes.com",907],["safehaven.io",907],["havocpoint.it",907],["motofocus.pl",907],["nomanssky.com",907],["drei-franken-info.de",907],["clausnehring.com",907],["alttab.net",907],["kinderleicht.berlin",907],["kiakkoradio.fi",907],["cosasdelcaribe.es",907],["de-sjove-jokes.dk",907],["serverprofis.de",907],["biographyonline.net",907],["iziconfort.com",907],["sportinnederland.com",907],["natureatblog.com",907],["wtsenergy.com",907],["cosasdesalud.es",907],["internetpasoapaso.com",907],["zurzeit.at",907],["contaspoupanca.pt",907],["steamdeckhq.com",[907,908,909,911,913,914]],["ipouritinc.com",[907,909,911]],["hemglass.se",[907,909,911,913,914]],["sumsub.com",[907,908,909]],["atman.pl",[907,908,909]],["fabriziovanmarciano.com",[907,908,909]],["nationalrail.com",[907,908,909]],["eett.gr",[907,908,909]],["funkypotato.com",[907,908,909]],["equalexchange.co.uk",[907,908,909]],["swnsdigital.com",[907,908,909]],["gogolf.fi",[907,911]],["hanse-haus-greifswald.de",907],["tampereenratikka.fi",[907,909,915,916]],["kymppikatsastus.fi",[909,913,963,964]],["santander.rewardgateway.co.uk",[917,918]],["brasiltec.ind.br",919],["doka.com",[920,921,922]],["abi.de",[923,924]],["studienwahl.de",[923,924]],["journal.hr",[925,926,927,928]],["howstuffworks.com",929],["stickypassword.com",[930,931,932]],["conversion-rate-experts.com",[933,934]],["merkur.si",[935,936,937]],["petitionenligne.com",[938,939]],["petitionenligne.be",[938,939]],["petitionenligne.fr",[938,939]],["petitionenligne.re",[938,939]],["petitionenligne.ch",[938,939]],["skrivunder.net",[938,939]],["petitiononline.uk",[938,939]],["petitions.nz",[938,939]],["petizioni.com",[938,939]],["peticao.online",[938,939]],["skrivunder.com",[938,939]],["peticiones.ar",[938,939]],["petities.com",[938,939]],["petitionen.com",[938,939]],["petice.com",[938,939]],["opprop.net",[938,939]],["peticiok.com",[938,939]],["peticiones.net",[938,939]],["peticion.es",[938,939]],["peticiones.pe",[938,939]],["peticiones.mx",[938,939]],["peticiones.cl",[938,939]],["peticije.online",[938,939]],["peticiones.co",[938,939]],["mediathek.lfv-bayern.de",940],["aluypvc.es",[941,942,943]],["pracuj.pl",[944,945,946,947,948]],["vki.at",950],["konsument.at",950],["chollometro.com",951],["dealabs.com",951],["hotukdeals.com",951],["pepper.it",951],["pepper.pl",951],["preisjaeger.at",951],["mydealz.de",951],["220.lv",[952,953]],["pigu.lt",[952,953]],["kaup24.ee",[952,953]],["hansapost.ee",[952,953]],["hobbyhall.fi",[952,953]],["direct.travelinsurance.tescobank.com",[956,957,958,959,960,961,962,963]],["mediaite.com",965],["easyfind.ch",[966,967]],["e-shop.leonidas.com",[968,969]],["lastmile.lt",970],["veriff.com",971],["tvpworld.com",972],["vm.co.mz",973],["constantin.film",[974,975,976]],["notion.so",977],["omgevingsloketinzage.omgeving.vlaanderen.be",[978,979]],["primor.eu",980],["tameteo.com",981],["tempo.pt",981],["yourweather.co.uk",981],["meteored.cl",981],["meteored.mx",981],["tempo.com",981],["ilmeteo.net",981],["meteored.com.ar",981],["daswetter.com",981],["myprivacy.dpgmediagroup.net",982],["algarvevacation.net",983],["3sat.de",984],["oxxio.nl",[985,986]],["butterflyshop.dk",[987,988,989]],["praxis.nl",990],["brico.be",990],["kent.gov.uk",[991,992]],["pohjanmaanhyvinvointi.fi",993],["maanmittauslaitos.fi",994]]);

const entitiesMap = new Map([["airchina",[5,6,7]],["top4mobile",[39,40]]]);

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
                return { matchAll: true, expect: true };
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
