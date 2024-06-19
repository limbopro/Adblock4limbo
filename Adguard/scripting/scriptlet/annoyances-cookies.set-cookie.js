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

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["cookies","false"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["cookienotification","1"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["CookieConsent","false"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["ocean.io",3],["portal.payment.eltax.lta.go.jp",4],["greenbuildingadvisor.com",[5,6,7]],["finewoodworking.com",[5,6,7]],["privatekeys.pw",8],["telli.dpd.ee",9],["youthforum.org",9],["votegroup.de",[10,11]],["pharmahall.gr",12],["x-team.com",13],["reservations.helveticmotion.ch",14],["endclothing.com",[15,16]],["arning-bau.de",17],["kraftwerk.co.at",18],["fhr.biz",19],["srf.nu",20],["jn.fo",[21,22]],["rovia.es",23],["airnewzealand.co.nz",24],["viu.com",25],["dinamalar.com",26],["volkswagen-group.com",27],["solo.io",28],["pomelo.la",29],["ibuypower.com",30],["sberbank.com",[31,413]],["swissmilk.ch",32],["gamemaker.io",33],["pixiv.net",34],["kinemaster.com",35],["sp32bb.pl",36],["jazz.fm",37],["juntadeandalucia.es",38],["melee.gg",[39,40,41]],["chemocare.com",42],["mobiliteit.nl",43],["xledger.net",44],["reviewmeta.com",45],["guide-bordeaux-gironde.com",46],["travelinsured.com",47],["gdpr.twitter.com",48],["mora.hu",49],["confused.com",50],["physikinstrumente.de",51],["karlknauer.de",51],["schoeck.com",51],["resonate.coop",51],["northgatevehiclehire.ie",51],["badhall.at",51],["cic.ch",51],["ilsaggiatore.com",52],["forum.digitalfernsehen.de",53],["bitscrunch.com",[54,55,56]],["hannahgraaf.com",57],["shop.elbers-hof.de",[58,59]],["woolsocks.eu",60],["uza.be",61],["5asec.ch",61],["wizards.com",61],["parkenflughafen.de",62],["radyofenomen.com",63],["elsate.com",64],["hume.ai",65],["lotusantwerp.wacs.online",66],["simeononsecurity.gitbook.io",67],["thehacker.recipes",67],["docs.dyrector.io",67],["makeresearchpay.com",68],["tandartsenpraktijk-simons.tandartsennet.nl",69],["huisartsenpraktijkdoorn.nl",69],["bcorporation.net",70],["knime.com",[70,113]],["quebueno.es",70],["edookit.com",71],["trixonline.be",72],["radio-canada.ca",73],["heysummit.com",74],["puromarketing.com",75],["radicalmotorsport.com",76],["biurobox.pl",77],["cycling74.com",78],["triviacreator.com",79],["freshis.com",79],["anker.com",79],["computacenter.com",80],["playbalatro.com",81],["kastner-oehler.de",82],["kastner-oehler.at",82],["kastner-oehler.ch",82],["twenga.it",83],["twenga.fr",83],["twenga.co.uk",83],["twenga.de",83],["twenga.es",83],["twenga.pl",83],["twenga.nl",83],["twenga.se",83],["olx.kz",84],["efl.com",85],["wst.tv",85],["cuvva.com",86],["vitbikes.de",87],["gourmetfoodstore.com",88],["schulfahrt.de",89],["deutsche-finanzagentur.de",90],["thejazzcafelondon.com",91],["keeb.supply",92],["spb.hh.ru",93],["kaluga.hh.ru",93],["school.hh.ru",93],["rating.hh.ru",93],["novgorod.hh.ru",93],["xxxshemaleporn.com",[94,95]],["gayhits.com",[94,95]],["gaypornvideos.xxx",[94,95]],["sextubespot.com",[94,95]],["wewantjusticedao.org",96],["godbolt.org",97],["projectenglish.com.pl",[98,103]],["ledenicheur.fr",98],["pricespy.co.uk",98],["pricespy.co.nz",98],["sae.fsc.ccoo.es",99],["piusx-college.nl",100],["yoomoney.ru",101],["vod.warszawa.pl",102],["m.twitch.tv",104],["environment.data.gov.uk",105],["playtesting.games",106],["portal.by.aok.de",107],["umlandscout.de",108],["atombank.co.uk",[109,110,111]],["showtv.com.tr",112],["seventhgeneration.com",113],["press.princeton.edu",113],["ldz.lv",113],["crtm.es",114],["airastana.com",115],["vkf-renzel.nl",116],["booking.reederei-zingst.de",[117,118,119]],["booking.weisse-flotte.de",[117,118,119]],["booking2.reederei-hiddensee.de",[117,118,119]],["sanswiss.pl",120],["galaxy.com",121],["petdesk.com",122],["ivyexec.com",123],["railtech.com",124],["lottehotel.com",[125,126,127,128,129]],["paydirekt.de",130],["kijiji.ca",131],["posterstore.fr",132],["posterstore.eu",132],["posterstore.be",132],["posterstore.de",132],["posterstore.hu",132],["posterstore.ie",132],["posterstore.it",132],["posterstore.no",132],["posterstore.nl",132],["posterstore.pl",132],["posterstore.com",132],["posterstore.ae",132],["posterstore.ca",132],["posterstore.nz",132],["posterstore.es",132],["posterstore.kr",132],["posterstore.jp",132],["posterstore.dk",132],["posterstore.se",132],["posterstore.ch",132],["posterstore.at",132],["myriadicity.net",133],["dgsf.org",133],["endgame.id",134],["cashback-cards.ch",135],["swisscard.ch",135],["ahorn24.de",136],["blockdyor.com",137],["ticket.io",138],["omega-nuernberg.servicebund.com",139],["lojaboschferramentas.com.br",[140,142,143]],["shareloft.com",141],["fineartsmuseum.recreatex.be",[144,145,146]],["jaapeden.nl",[144,145,146]],["eboo.lu",147],["lasmallagency.com",148],["lhsystems.com",[149,150,151,152]],["twomates.de",153],["intergiro.com",154],["healthygamer.gg",155],["telepizza.es",[156,157,158]],["telepizza.pt",[156,157,158]],["frisco.pl",159],["tyleenslang.nl",160],["schrikdraad.net",160],["kruiwagen.net",160],["pvcvoordeel.nl",160],["pvcbuis.com",160],["drainagebuizen.nl",160],["likewise.com",161],["longines.com",[162,163,164,165]],["vater-it.de",166],["biano.hu",167],["nadia.gov.gr",168],["hana-book.fr",169],["kzvb.de",170],["correosexpress.com",171],["cexpr.es",171],["rte.ie",172],["smart.com",173],["gry.pl",173],["gamesgames.com",173],["games.co.uk",173],["jetztspielen.de",173],["ourgames.ru",173],["permainan.co.id",173],["gioco.it",173],["jeux.fr",173],["juegos.com",173],["ojogos.com.br",173],["oyunskor.com",173],["spela.se",173],["spelletjes.nl",173],["agame.com",173],["spielen.com",173],["flashgames.ru",173],["games.co.id",173],["giochi.it",173],["jeu.fr",173],["spel.nl",173],["sartor-stoffe.de",174],["rockpoint.cz",174],["rockpoint.sk",174],["parfum-zentrum.de",174],["candy-store.cz",174],["tridge.com",175],["asus.com",[176,177]],["drinksking.sk",178],["neuhauschocolates.com",179],["commandsuite.it",180],["oktea.tw",181],["bafin.de",182],["materna.de",182],["bamf.de",182],["tenvinilo-argentina.com",[183,184]],["eikaforsikring.no",[185,186]],["eurowings.com",[187,188,189]],["newpharma.be",[190,191,192]],["newpharma.fr",[190,191,192]],["newpharma.de",[190,191,192]],["newpharma.at",[190,191,192]],["newpharma.nl",[190,191,192]],["kapoorwatch.com",193],["instantoffices.com",194],["paf.se",194],["citibank.pl",194],["citibankonline.pl",194],["azertyfactor.be",195],["zelezodum.cz",196],["thw.de",197],["bafa.de",197],["bka.de",197],["bmbf.de",197],["weather.com",198],["bolist.se",[199,200]],["project529.com",200],["evivanlanschot.nl",201],["prenatal.nl",202],["onnibus.com",[202,840,841,842]],["kyoceradocumentsolutions.us",[202,886,887]],["kyoceradocumentsolutions.ch",[202,886,887]],["kyoceradocumentsolutions.co.uk",[202,886,887]],["kyoceradocumentsolutions.de",[202,886,887]],["kyoceradocumentsolutions.es",[202,886,887]],["kyoceradocumentsolutions.eu",[202,886,887]],["kyoceradocumentsolutions.fr",[202,886,887]],["kyoceradocumentsolutions.it",[202,886,887]],["kyoceradocumentsolutions.ru",[202,886,887]],["kyoceradocumentsolutions.mx",[202,886,887]],["kyoceradocumentsolutions.cl",[202,886,887]],["kyoceradocumentsolutions.com.br",[202,886,887]],["wagner-tuning.com",[203,204,205,206]],["waitrosecellar.com",[207,208,209,210]],["waitrose.com",[207,561]],["kvk.nl",[211,212,213]],["macfarlanes.com",214],["pole-emploi.fr",215],["gardenmediaguild.co.uk",216],["samplerite.com",217],["samplerite.cn",217],["sororedit.com",218],["blukit.com.br",219],["biegnaszczyt.pl",220],["staff-gallery.com",221],["itv.com",222],["dvag.de",223],["premierinn.com",[224,225,226,227]],["whitbreadinns.co.uk",[224,225,226,227]],["barandblock.co.uk",[224,225,226,227]],["tabletable.co.uk",[224,225,226,227]],["brewersfayre.co.uk",[224,225,226,227]],["beefeater.co.uk",[224,225,226,227]],["allstarssportsbars.co.uk",[228,229]],["babiesrus.ca",230],["toysrus.ca",230],["roomsandspaces.ca",230],["athletic-club.eus",[231,232,233]],["wattoo.dk",234],["wattoo.no",234],["texthelp.com",[235,236]],["courierexchange.co.uk",[237,238,239]],["haulageexchange.co.uk",[237,238,239]],["ecaytrade.com",240],["powerball.com",241],["tlaciarik.sk",241],["tiskarik.cz",241],["sseriga.edu",[242,243]],["rt.com",244],["swrng.de",245],["crfop.gdos.gov.pl",246],["nurgutes.de",247],["kpcen-torun.edu.pl",248],["opintopolku.fi",249],["app.erevie.pl",250],["debenhams.com",251],["archiwumalle.pl",252],["konicaminolta.ca",253],["konicaminolta.us",253],["deutschebank-dbdirect.com",[254,255,256]],["dbonline.deutsche-bank.es",[254,255,256]],["deutsche-bank.es",[254,255,256]],["hipotecaonline.db.com",257],["kangasalansanomat.fi",258],["eif.org",259],["tunnelmb.net",259],["sugi-net.jp",260],["understandingsociety.ac.uk",261],["leibniz.com",262],["horecaworld.biz",[262,530]],["horecaworld.be",[262,530]],["bettertires.com",262],["electroprecio.com",262],["autohero.com",262],["computerbase.de",[262,883]],["sistemacomponentes.com.br",263],["bargaintown.ie",264],["tui.nl",265],["doppelmayr.com",266],["case-score.com",[267,268]],["cote.co.uk",269],["finimize.com",269],["k-einbruch.de",[270,271]],["blxxded.com",270],["rtu.lv",272],["sysdream.com",273],["cinemarkca.com",274],["neander-zahn.de",275],["theadelphileeds.co.uk",276],["tobycarvery.co.uk",276],["carsupermarket.com",276],["viajesatodotren.com",277],["ticketingcine.fr",278],["agenziavista.it",279],["e-chladiva.cz",279],["bitecode.dev",280],["mjob.si",[281,282,283]],["airportrentacar.gr",284],["mobile-fueling.de",284],["plos.org",285],["autohaus24.de",286],["sixt-neuwagen.de",286],["gadis.es",[287,288]],["dom.ru",288],["ford-kimmerle-reutlingen.de",289],["autohaus-reitermayer.de",289],["autohaus-diefenbach-waldbrunn.de",289],["autohaus-diefenbach.de",289],["autohaus-musberg.de",289],["ford-ah-im-hunsrueck-simmern.de",289],["ford-arndt-goerlitz.de",289],["ford-autogalerie-alfeld.de",289],["ford-bacher-schrobenhausen.de",289],["ford-bathauer-bad-harzburg.de",289],["ford-behrend-waren.de",289],["ford-bergland-frankfurt-oder.de",289],["ford-bergland-wipperfuerth.de",289],["ford-besico-glauchau.de",289],["ford-besico-nuernberg.de",289],["ford-bischoff-neumuenster.de",289],["ford-bodach-borgentreich.de",289],["ford-bunk-saarbruecken.de",289],["ford-bunk-voelklingen.de",289],["ford-busch-kirchberg.de",289],["ford-diermeier-muenchen.de",289],["ford-dinnebier-leipzig.de",289],["ford-duennes-regensburg.de",289],["ford-fischer-bochum.de",289],["ford-fischer-muenster.de",289],["ford-foerster-koblenz.de",289],["ford-fuchs-uffenheim.de",289],["ford-geberzahn-koeln.de",289],["ford-gerstmann-duesseldorf.de",289],["ford-haefner-und-strunk-kassel.de",289],["ford-hartmann-kempten.de",289],["ford-hartmann-rastatt.de",289],["ford-hatzner-karlsruhe.de",289],["ford-heine-hoexter.de",289],["ford-hentschel-hildesheim.de",289],["ford-hessengarage-dreieich.de",289],["ford-hessengarage-frankfurt.de",289],["ford-hga-windeck.de",289],["ford-hommert-coburg.de",289],["ford-horstmann-rastede.de",289],["ford-janssen-sonsbeck.de",289],["ford-jochem-stingbert.de",289],["ford-jungmann-wuppertal.de",289],["ford-kestel-marktzeuln.de",289],["ford-klaiber-bad-friedrichshall.de",289],["ford-koenig-eschwege.de",289],["ford-kohlhoff-mannheim.de",289],["ford-kt-automobile-coesfeld.de",289],["ford-lackermann-wesel.de",289],["ford-ludewig-delligsen.de",289],["ford-maiwald-linsengericht.de",289],["ford-mertens-beckum.de",289],["ford-meyer-bad-oeynhausen.de",289],["ford-mgs-bayreuth.de",289],["ford-mgs-radebeul.de",289],["ford-muecke-berlin.de",289],["ford-norren-weissenthurm.de",289],["ford-nrw-garage-duesseldorf.de",289],["ford-nrw-garage-handweiser.de",289],["ford-nuding-remshalden.de",289],["ford-ohm-rendsburg.de",289],["ford-reinicke-muecheln.de",289],["ford-rennig.de",289],["ford-roerentrop-luenen.de",289],["ford-schankola-dudweiler.de",289],["ford-sg-goeppingen.de",289],["ford-sg-leonberg.de",289],["ford-sg-neu-ulm.de",289],["ford-sg-pforzheim.de",289],["ford-sg-waiblingen.de",289],["ford-storz-st-georgen.de",289],["ford-strunk-koeln.de",289],["ford-tobaben-hamburg.de",289],["ford-toenjes-zetel.de",289],["ford-wagner-mayen.de",289],["ford-wahl-fritzlar.de",289],["ford-wahl-siegen.de",289],["ford-weege-bad-salzuflen.de",289],["ford-westhoff-hamm.de",289],["ford-wieland-hasbergen.de",289],["renault-autocenterprignitz-pritzwalk.de",289],["renault-spenrath-juelich.de",289],["vitalllit.com",290],["fincaparera.com",290],["dbnetbcn.com",290],["viba.barcelona",290],["anafaustinoatelier.com",290],["lamparasherrero.com",290],["calteixidor.cat",290],["argentos.barcelona",290],["anmarlube.com",290],["anynouxines.barcelona",290],["crearunapaginaweb.cat",290],["cualesmiip.com",290],["porndoe.com",[291,292,293]],["thinkingaustralia.com",294],["elrow.com",295],["ownit.se",296],["velo-antwerpen.be",[297,298]],["wwnorton.com",299],["pc-canada.com",300],["mullgs.se",301],["1a-sehen.de",302],["feature.fm",303],["comte.com",304],["baltic-watches.com",305],["np-brijuni.hr",305],["vilgain.com",305],["tradingview.com",306],["wevolver.com",307],["experienciasfree.com",308],["freemans.com",309],["kivikangas.fi",310],["lumingerie.com",310],["melkkobrew.fi",310],["kh.hu",[311,312,313]],["aplgo.com",314],["securityconference.org",315],["aha.or.at",[316,319]],["fantasyfitnessing.com",317],["chocolateemporium.com",318],["account.samsung.com",320],["crushwineco.com",321],["levi.pt",322],["fertagus.pt",323],["smiggle.co.uk",324],["ubisoft.com",[325,326,327,328]],["store.ubisoft.com",[325,328,766,767]],["thulb.uni-jena.de",329],["splityourticket.co.uk",330],["eramba.org",331],["openai.com",[332,333]],["kupbilecik.com",[334,335]],["kupbilecik.de",[334,335]],["kupbilecik.pl",[334,335]],["shopilya.com",336],["arera.it",337],["haustier-berater.de",337],["hfm-frankfurt.de",337],["zoommer.ge",338],["studentapan.se",339],["petcity.lt",[340,341,342,343]],["tobroco.com",[344,348]],["tobroco.nl",[344,348]],["tobroco-giant.com",[344,348]],["geosfreiberg.de",[345,346]],["eapvic.org",347],["bassolsenergia.com",347],["bammusic.com",[349,351,352]],["green-24.de",350],["phish-test.de",353],["bokadirekt.se",354],["ford.lt",355],["ford.pt",355],["ford.fr",355],["ford.de",355],["ford.dk",355],["ford.pl",355],["ford.se",355],["ford.nl",355],["ford.no",355],["ford.fi",355],["ford.gr",355],["ford.it",355],["data-media.gr",356],["e-food.gr",[357,358]],["bvmed.de",359],["babyshop.com",[360,361,362]],["griffbereit24.de",363],["checkwx.com",364],["calendardate.com",365],["wefashion.ch",366],["wefashion.fr",366],["wefashion.lu",366],["wefashion.be",366],["wefashion.de",366],["wefashion.nl",366],["brettspiel-angebote.de",[367,368]],["nio.com",369],["kancelarskepotreby.net",[370,371,372]],["segment-anything.com",373],["sketch.metademolab.com",374],["cambridgebs.co.uk",375],["freizeitbad-greifswald.de",376],["giuseppezanotti.com",[377,378,379]],["xcen.se",379],["biggreenegg.co.uk",380],["skihuette-oberbeuren.de",[381,382,383]],["pwsweather.com",384],["xfree.com",385],["theweathernetwork.com",[386,387]],["monese.com",[388,389,390]],["assos.com",388],["helmut-fischer.com",391],["myscience.org",392],["7-eleven.com",393],["airwallex.com",394],["streema.com",395],["gov.lv",396],["tise.com",397],["codecamps.com",398],["avell.com.br",399],["moneyfarm.com",400],["app.moneyfarm.com",400],["simpl.rent",401],["hubspot.com",402],["prodyna.com",[403,404,405,406]],["zutobi.com",[403,404,405,406]],["calm.com",[407,408]],["pubgesports.com",[409,410,411]],["outwrite.com",412],["sbermarket.ru",414],["atani.com",[415,416,417]],["croisieresendirect.com",418],["bgextras.co.uk",419],["sede.coruna.gal",420],["czech-server.cz",421],["hitech-gamer.com",422],["bialettikave.hu",[423,424,425]],["canalplus.com",[426,427,428]],["mader.bz.it",[429,430,431]],["supply.amazon.co.uk",432],["bhaptics.com",433],["cleverbot.com",434],["watchaut.film",435],["tuffaloy.com",436],["fanvue.com",436],["electronoobs.com",437],["xn--lkylen-vxa.se",438],["tiefenthaler-landtechnik.at",439],["tiefenthaler-landtechnik.ch",439],["tiefenthaler-landtechnik.de",439],["varma.fi",440],["vyos.io",441],["digimobil.es",[442,443]],["teenage.engineering",444],["merrell.pl",[445,707]],["converse.pl",445],["shop.wf-education.com",[445,707]],["werkenbijaswatson.nl",446],["converse.com",[447,448]],["buyandapply.nexus.org.uk",449],["img.ly",450],["halonen.fi",[450,482,483,484,485]],["carlson.fi",[450,482,483,484,485]],["cams.ashemaletube.com",[451,452]],["electronicacerler.com",[453,454,455]],["okpoznan.pl",[456,461]],["ielts.idp.com",457],["ielts.co.nz",457],["ielts.com.au",457],["einfach-einreichen.de",[458,459,460]],["endlesstools.io",462],["mbhszepkartya.hu",463],["casellimoveis.com.br",464],["embedplus.com",465],["e-file.pl",466],["sp215.info",467],["empik.com",468],["senda.pl",469],["befestigungsfuchs.de",470],["cut-tec.co.uk",471],["gaytimes.co.uk",472],["statisticsanddata.org",473],["hello.one",474],["paychex.com",475],["wildcat-koeln.de",476],["libraries.merton.gov.uk",[477,478]],["tommy.hr",[479,480]],["usit.uio.no",481],["demo-digital-twin.r-stahl.com",486],["la31devalladolid.com",[487,488]],["mx.com",489],["foxtrail.fjallraven.com",490],["dotwatcher.cc",491],["bazarchic.com",[492,493,494]],["seedrs.com",495],["mypensiontracker.co.uk",496],["praxisplan.at",[496,517]],["esimplus.me",497],["cineplanet.com.pe",498],["ecologi.com",499],["wamba.com",500],["eurac.edu",501],["akasaair.com",502],["rittal.com",503],["worstbassist.com",[504,505,506,507,508,509]],["zs-watch.com",510],["crown.com",511],["mesanalyses.fr",512],["teket.jp",513],["fish.shimano.com",[514,515,516]],["simsherpa.com",[518,519,520]],["translit.ru",521],["aruba.com",522],["aireuropa.com",523],["skfbearingselect.com",[524,525]],["scanrenovation.com",526],["ttela.se",527],["dominospizza.pl",528],["devagroup.pl",529],["secondsol.com",530],["angelifybeauty.com",531],["cotopaxi.com",532],["justjoin.it",533],["digibest.pt",534],["two-notes.com",535],["theverge.com",536],["daimant.co",537],["secularism.org.uk",538],["karriere-hamburg.de",539],["musicmap.info",540],["gasspisen.se",541],["medtube.pl",542],["medtube.es",542],["medtube.fr",542],["medtube.net",542],["standard.sk",543],["linmot.com",544],["larian.com",[544,830]],["s-court.me",544],["containerandpackaging.com",545],["top-yp.de",546],["termania.net",547],["account.nowpayments.io",548],["fizjobaza.pl",549],["gigasport.at",550],["gigasport.de",550],["gigasport.ch",550],["velleahome.gr",551],["nicequest.com",552],["handelsbanken.no",553],["handelsbanken.com",553],["handelsbanken.co.uk",553],["handelsbanken.se",[553,634]],["handelsbanken.dk",553],["handelsbanken.fi",553],["ilarahealth.com",554],["songtradr.com",[555,814]],["logo.pt",[556,557]],["flexwhere.co.uk",[558,560]],["flexwhere.de",[558,560]],["pricewise.nl",558],["getunleash.io",558],["dentmania.de",558],["free.navalny.com",558],["latoken.com",558],["empathy.com",559],["labs.epi2me.io",559],["campusbrno.cz",[562,563,564]],["secrid.com",565],["etsy.com",566],["careers.cloud.com",566],["blablacar.rs",567],["blablacar.ru",567],["blablacar.com.tr",567],["blablacar.com.ua",567],["blablacar.com.br",567],["seb.se",568],["sebgroup.com",568],["deps.dev",569],["buf.build",570],["starofservice.com",571],["ytcomment.kmcat.uk",572],["gmx.com",573],["gmx.fr",573],["karofilm.ru",574],["octopusenergy.it",575],["octopusenergy.es",[575,576]],["justanswer.es",577],["justanswer.de",577],["justanswer.com",577],["justanswer.co.uk",577],["citilink.ru",578],["huutokaupat.com",579],["kaggle.com",580],["emr.ch",[581,586]],["gem.cbc.ca",582],["pumatools.hu",583],["ici.tou.tv",584],["crunchyroll.com",585],["mayflex.com",587],["clipchamp.com",587],["trouwenbijfletcher.nl",587],["fletcher.nl",587],["fletcherzakelijk.nl",587],["intermatic.com",587],["ebikelohr.de",588],["eurosender.com",589],["melectronics.ch",590],["guard.io",591],["nokportalen.se",592],["dokiliko.com",593],["valamis.com",[594,595,596]],["sverigesingenjorer.se",597],["shop.almawin.de",[598,599,600,637]],["zeitzurtrauer.de",601],["skaling.de",[602,603,604]],["bringmeister.de",605],["gdx.net",606],["clearblue.com",607],["drewag.de",[608,609,610]],["enso.de",[608,609,610]],["buidlbox.io",608],["helitransair.com",611],["more.com",612],["nwslsoccer.com",612],["climatecentral.org",613],["resolution.de",614],["flagma.by",615],["eatsalad.com",616],["pacstall.dev",617],["web2.0calc.fr",618],["de-appletradein.likewize.com",619],["swissborg.com",620],["qwice.com",621],["canalpluskuchnia.pl",[622,623]],["uizard.io",624],["stmas.bayern.de",[625,628]],["novayagazeta.eu",626],["kinopoisk.ru",627],["yandex.ru",627],["go.netia.pl",[629,630]],["polsatboxgo.pl",[629,630]],["ing.it",[631,632]],["ing.nl",633],["youcom.com.br",635],["rule34.paheal.net",636],["deep-shine.de",637],["shop.ac-zaun-center.de",637],["kellermann-online.com",637],["kletterkogel.de",637],["pnel.de",637],["korodrogerie.de",637],["der-puten-shop.de",637],["katapult-shop.de",637],["evocsports.com",637],["esm-computer.de",637],["calmwaters.de",637],["mellerud.de",637],["akustik-projekt.at",637],["vansprint.de",637],["0815.at",637],["0815.eu",637],["ojskate.com",637],["der-schweighofer.de",637],["tz-bedarf.de",637],["zeinpharma.de",637],["weicon.com",637],["dagvandewebshop.be",637],["thiele-tee.de",637],["carbox.de",637],["riapsport.de",637],["trendpet.de",637],["eheizung24.de",637],["seemueller.com",637],["vivande.de",637],["heidegrill.com",637],["gladiator-fightwear.com",637],["h-andreas.com",637],["pp-parts.com",637],["natuerlich-holzschuhe.de",637],["massivart.de",637],["malermeister-shop.de",637],["imping-confiserie.de",637],["lenox-trading.at",637],["cklenk.de",637],["catolet.de",637],["drinkitnow.de",637],["patisserie-m.de",637],["storm-proof.com",637],["balance-fahrradladen.de",637],["magicpos.shop",637],["zeinpharma.com",637],["sps-handel.net",637],["novagenics.com",637],["butterfly-circus.de",637],["holzhof24.de",637],["w6-wertarbeit.de",637],["fleurop.de",637],["leki.com",637],["extremeaudio.de",637],["taste-market.de",637],["delker-optik.de",637],["stuhl24-shop.de",637],["g-nestle.de",637],["alpine-hygiene.ch",637],["fluidmaster.it",637],["cordon.de",637],["belisse-beauty.de",637],["belisse-beauty.co.uk",637],["wpc-shop24.de",637],["liv.si",637],["maybach-luxury.com",637],["leiternprofi24.de",637],["hela-shop.eu",637],["hitado.de",637],["j-koenig.de",637],["armedangels.com",[637,714,715]],["bvk-beamtenversorgung.de",638],["hofer-kerzen.at",639],["karls-shop.de",640],["luvly.care",641],["firmen.wko.at",641],["byggern.no",642],["donauauen.at",643],["woltair.cz",644],["rostics.ru",645],["hife.es",646],["lilcat.com",647],["hot.si",[648,649,650,651]],["crenolibre.fr",652],["e-pole.pl",653],["dopt.com",654],["keb-automation.com",655],["bonduelle.ru",656],["oxfordonlineenglish.com",657],["pccomponentes.fr",658],["pccomponentes.com",658],["pccomponentes.pt",658],["grants.at",659],["africa-uninet.at",659],["rqb.at",659],["youngscience.at",659],["oead.at",659],["innovationsstiftung-bildung.at",659],["etwinning.at",659],["arqa-vet.at",659],["zentrumfuercitizenscience.at",659],["vorstudienlehrgang.at",659],["erasmusplus.at",659],["jeger.pl",660],["bo.de",661],["thegamingwatcher.com",662],["norlysplay.dk",663],["plusujemy.pl",664],["asus.com.cn",[665,667]],["zentalk.asus.com",[665,667]],["mubi.com",666],["59northwheels.se",668],["photospecialist.co.uk",669],["foto-gregor.de",669],["kamera-express.de",669],["kamera-express.be",669],["kamera-express.nl",669],["kamera-express.fr",669],["kamera-express.lu",669],["dhbbank.com",670],["dhbbank.de",670],["dhbbank.be",670],["dhbbank.nl",670],["login.ingbank.pl",671],["fabrykacukiernika.pl",[672,673]],["peaks.com",674],["3landesmuseen-braunschweig.de",675],["unifachbuch.de",[676,677,678]],["playlumi.com",[679,680,681]],["chatfuel.com",682],["studio3t.com",[683,684,685,686]],["realgap.co.uk",[687,688,689,690]],["hotelborgia.com",[691,692]],["sweet24.de",693],["zwembaddekouter.be",694],["flixclassic.pl",695],["jobtoday.com",696],["deltatre.com",[697,698,712]],["withings.com",[699,700,701]],["blista.de",[702,703]],["hashop.nl",704],["gift.be",[705,706]],["elevator.de",707],["foryouehealth.de",707],["animaze.us",707],["penn-elcom.com",707],["curantus.de",707],["mtbmarket.de",707],["spanienweinonline.ch",707],["novap.fr",707],["bizkaia.eus",[708,709,710]],["sinparty.com",711],["mantel.com",713],["e-dojus.lv",716],["burnesspaull.com",717],["oncosur.org",718],["photobooth.online",719],["epidemicsound.com",720],["ryanair.com",721],["refurbished.at",[722,723,724]],["refurbished.nl",[722,723,724]],["refurbished.be",[722,723,724]],["refurbishedstore.de",[722,723,724]],["bayernportal.de",[725,726,727]],["ayudatpymes.com",728],["zipjob.com",728],["shoutcast.com",728],["plastischechirurgie-muenchen.info",729],["bonn.sitzung-online.de",730],["depop.com",[731,732,733]],["thenounproject.com",734],["pricehubble.com",735],["ilmotorsport.de",736],["karate.com",737],["psbank.ru",737],["myriad.social",737],["exeedme.com",737],["followalice.com",[737,805]],["aqua-store.fr",738],["voila.ca",739],["anastore.com",740],["app.arzt-direkt.de",741],["dasfutterhaus.at",742],["e-pity.pl",743],["fillup.pl",744],["dailymotion.com",745],["barcawelt.de",746],["lueneburger-heide.de",747],["polizei.bayern.de",[748,750]],["ourworldofpixels.com",749],["jku.at",751],["matkahuolto.fi",752],["backmarket.de",[753,754,755]],["backmarket.co.uk",[753,754,755]],["backmarket.es",[753,754,755]],["backmarket.be",[753,754,755]],["backmarket.at",[753,754,755]],["backmarket.fr",[753,754,755]],["backmarket.gr",[753,754,755]],["backmarket.fi",[753,754,755]],["backmarket.ie",[753,754,755]],["backmarket.it",[753,754,755]],["backmarket.nl",[753,754,755]],["backmarket.pt",[753,754,755]],["backmarket.se",[753,754,755]],["backmarket.sk",[753,754,755]],["backmarket.com",[753,754,755]],["eleven-sportswear.cz",[756,757,758]],["silvini.com",[756,757,758]],["silvini.de",[756,757,758]],["purefiji.cz",[756,757,758]],["voda-zdarma.cz",[756,757,758]],["lesgarconsfaciles.com",[756,757,758]],["ulevapronohy.cz",[756,757,758]],["vitalvibe.eu",[756,757,758]],["plavte.cz",[756,757,758]],["mo-tools.cz",[756,757,758]],["flamantonlineshop.cz",[756,757,758]],["sandratex.cz",[756,757,758]],["norwayshop.cz",[756,757,758]],["3d-foto.cz",[756,757,758]],["neviditelnepradlo.cz",[756,757,758]],["nutrimedium.com",[756,757,758]],["silvini.cz",[756,757,758]],["karel.cz",[756,757,758]],["silvini.sk",[756,757,758]],["book-n-drive.de",759],["cotswoldoutdoor.com",760],["cotswoldoutdoor.ie",760],["cam.start.canon",761],["usnews.com",762],["researchaffiliates.com",763],["singkinderlieder.de",764],["stiegeler.com",765],["ba.com",[768,769,770,771,772,773,774]],["britishairways.com",[768,769,770,771,772,773,774]],["cineman.pl",[775,776,777]],["tv-trwam.pl",[775,776,777,778]],["qatarairways.com",[779,780,781,782,783]],["wedding.pl",784],["vivaldi.com",785],["emuia1.gugik.gov.pl",786],["nike.com",787],["adidas.at",788],["adidas.be",788],["adidas.ca",788],["adidas.ch",788],["adidas.cl",788],["adidas.co",788],["adidas.co.in",788],["adidas.co.kr",788],["adidas.co.nz",788],["adidas.co.th",788],["adidas.co.uk",788],["adidas.com",788],["adidas.com.ar",788],["adidas.com.au",788],["adidas.com.br",788],["adidas.com.my",788],["adidas.com.ph",788],["adidas.com.vn",788],["adidas.cz",788],["adidas.de",788],["adidas.dk",788],["adidas.es",788],["adidas.fi",788],["adidas.fr",788],["adidas.gr",788],["adidas.ie",788],["adidas.it",788],["adidas.mx",788],["adidas.nl",788],["adidas.no",788],["adidas.pe",788],["adidas.pl",788],["adidas.pt",788],["adidas.ru",788],["adidas.se",788],["adidas.sk",788],["colourbox.com",789],["ebilet.pl",790],["myeventeo.com",791],["snap.com",792],["louwman.nl",[793,794]],["ratemyprofessors.com",795],["filen.io",796],["leotrippi.com",797],["restaurantclub.pl",797],["context.news",797],["queisser.de",797],["grandprixradio.dk",[798,799,800,801,802]],["grandprixradio.nl",[798,799,800,801,802]],["grandprixradio.be",[798,799,800,801,802]],["businessclass.com",803],["quantamagazine.org",804],["hellotv.nl",806],["jisc.ac.uk",807],["lasestrellas.tv",808],["xn--digitaler-notenstnder-m2b.com",809],["schoonmaakgroothandelemmen.nl",809],["nanuko.de",809],["hair-body-24.de",809],["shopforyou47.de",809],["kreativverliebt.de",809],["anderweltverlag.com",809],["octavio-shop.com",809],["forcetools-kepmar.eu",809],["fantecshop.de",809],["hexen-werkstatt.shop",809],["shop-naturstrom.de",809],["biona-shop.de",809],["camokoenig.de",809],["bikepro.de",809],["kaffeediscount.com",809],["vamos-skateshop.com",809],["holland-shop.com",809],["avonika.com",809],["royal-oak.org",810],["hurton.pl",811],["officesuite.com",812],["fups.com",[813,815]],["scienceopen.com",816],["moebel-mahler-siebenlehn.de",[817,818]],["calendly.com",819],["batesenvironmental.co.uk",[820,821]],["ubereats.com",822],["101internet.ru",823],["bein.com",824],["beinsports.com",824],["figshare.com",825],["bitso.com",826],["gallmeister.fr",827],["eco-toimistotarvikkeet.fi",828],["proficient.fi",828],["developer.ing.com",829],["webtrack.dhlglobalmail.com",831],["webtrack.dhlecs.com",831],["ehealth.gov.gr",832],["calvinklein.se",[833,834,835]],["calvinklein.fi",[833,834,835]],["calvinklein.sk",[833,834,835]],["calvinklein.si",[833,834,835]],["calvinklein.ch",[833,834,835]],["calvinklein.ru",[833,834,835]],["calvinklein.com",[833,834,835]],["calvinklein.pt",[833,834,835]],["calvinklein.pl",[833,834,835]],["calvinklein.at",[833,834,835]],["calvinklein.nl",[833,834,835]],["calvinklein.hu",[833,834,835]],["calvinklein.lu",[833,834,835]],["calvinklein.lt",[833,834,835]],["calvinklein.lv",[833,834,835]],["calvinklein.it",[833,834,835]],["calvinklein.ie",[833,834,835]],["calvinklein.hr",[833,834,835]],["calvinklein.fr",[833,834,835]],["calvinklein.es",[833,834,835]],["calvinklein.ee",[833,834,835]],["calvinklein.de",[833,834,835]],["calvinklein.dk",[833,834,835]],["calvinklein.cz",[833,834,835]],["calvinklein.bg",[833,834,835]],["calvinklein.be",[833,834,835]],["calvinklein.co.uk",[833,834,835]],["ofdb.de",836],["dtksoft.com",837],["serverstoplist.com",838],["truecaller.com",839],["arturofuente.com",[843,845,846]],["protos.com",[843,845,846]],["timhortons.co.th",[843,844,845,847,849,850]],["toyota.co.uk",[843,844,845,848,849,850]],["businessaccountingbasics.co.uk",[843,844,845,847,849,850]],["flickr.org",[843,844,845,847,849,850]],["espacocasa.com",843],["altraeta.it",843],["centrooceano.it",843],["allstoresdigital.com",843],["cultarm3d.de",843],["soulbounce.com",843],["fluidtopics.com",843],["uvetgbt.com",843],["malcorentacar.com",843],["emondo.de",843],["maspero.it",843],["kelkay.com",843],["underground-england.com",843],["vert.eco",843],["turcolegal.com",843],["magnet4blogging.net",843],["moovly.com",843],["automationafrica.co.za",843],["jornaldoalgarve.pt",843],["keravanenergia.fi",843],["kuopas.fi",843],["frag-machiavelli.de",843],["healthera.co.uk",843],["mobeleader.com",843],["powerup-gaming.com",843],["developer-blog.net",843],["medical.edu.mt",843],["deh.mt",843],["bluebell-railway.com",843],["ribescasals.com",843],["javea.com",843],["chinaimportal.com",843],["inds.co.uk",843],["raoul-follereau.org",843],["serramenti-milano.it",843],["cosasdemujer.com",843],["luz-blanca.info",843],["cosasdeviajes.com",843],["safehaven.io",843],["havocpoint.it",843],["motofocus.pl",843],["nomanssky.com",843],["drei-franken-info.de",843],["clausnehring.com",843],["alttab.net",843],["kinderleicht.berlin",843],["kiakkoradio.fi",843],["cosasdelcaribe.es",843],["de-sjove-jokes.dk",843],["serverprofis.de",843],["biographyonline.net",843],["iziconfort.com",843],["sportinnederland.com",843],["natureatblog.com",843],["wtsenergy.com",843],["cosasdesalud.es",843],["internetpasoapaso.com",843],["zurzeit.at",843],["contaspoupanca.pt",843],["steamdeckhq.com",[843,844,845,847,849,850]],["ipouritinc.com",[843,845,847]],["hemglass.se",[843,845,847,849,850]],["sumsub.com",[843,844,845]],["atman.pl",[843,844,845]],["fabriziovanmarciano.com",[843,844,845]],["nationalrail.com",[843,844,845]],["eett.gr",[843,844,845]],["funkypotato.com",[843,844,845]],["equalexchange.co.uk",[843,844,845]],["swnsdigital.com",[843,844,845]],["gogolf.fi",[843,847]],["hanse-haus-greifswald.de",843],["tampereenratikka.fi",[843,845,851,852]],["kymppikatsastus.fi",[845,849,895,896]],["brasiltec.ind.br",853],["doka.com",[854,855,856]],["abi.de",[857,858]],["studienwahl.de",[857,858]],["journal.hr",[859,860,861,862]],["howstuffworks.com",863],["stickypassword.com",[864,865,866]],["conversion-rate-experts.com",[867,868]],["merkur.si",[869,870,871]],["petitionenligne.com",[872,873]],["petitionenligne.be",[872,873]],["petitionenligne.fr",[872,873]],["petitionenligne.re",[872,873]],["petitionenligne.ch",[872,873]],["skrivunder.net",[872,873]],["petitiononline.uk",[872,873]],["petitions.nz",[872,873]],["petizioni.com",[872,873]],["peticao.online",[872,873]],["skrivunder.com",[872,873]],["peticiones.ar",[872,873]],["petities.com",[872,873]],["petitionen.com",[872,873]],["petice.com",[872,873]],["opprop.net",[872,873]],["peticiok.com",[872,873]],["peticiones.net",[872,873]],["peticion.es",[872,873]],["peticiones.pe",[872,873]],["peticiones.mx",[872,873]],["peticiones.cl",[872,873]],["peticije.online",[872,873]],["peticiones.co",[872,873]],["mediathek.lfv-bayern.de",874],["aluypvc.es",[875,876,877]],["pracuj.pl",[878,879,880,881,882]],["vki.at",884],["konsument.at",884],["chollometro.com",885],["dealabs.com",885],["hotukdeals.com",885],["pepper.it",885],["pepper.pl",885],["preisjaeger.at",885],["mydealz.de",885],["direct.travelinsurance.tescobank.com",[888,889,890,891,892,893,894,895]],["easyfind.ch",[897,898]],["e-shop.leonidas.com",[899,900]],["lastmile.lt",901],["veriff.com",902],["constantin.film",[903,904,905]],["notion.so",906],["omgevingsloketinzage.omgeving.vlaanderen.be",[907,908]],["primor.eu",909],["tameteo.com",910],["tempo.pt",910],["yourweather.co.uk",910],["meteored.cl",910],["meteored.mx",910],["tempo.com",910],["ilmeteo.net",910],["meteored.com.ar",910],["daswetter.com",910],["myprivacy.dpgmediagroup.net",911],["algarvevacation.net",912],["3sat.de",913],["oxxio.nl",[914,915]],["butterflyshop.dk",[916,917,918]],["praxis.nl",919],["brico.be",919],["kent.gov.uk",[920,921]],["pohjanmaanhyvinvointi.fi",922],["maanmittauslaitos.fi",923]]);

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
