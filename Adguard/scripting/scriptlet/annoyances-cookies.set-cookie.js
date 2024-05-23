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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["airTRFX_cookies","accepted"],["sbrf.pers_notice","1"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["CookieConsent","false"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["privatekeys.pw",3],["airnewzealand.co.nz",4],["sberbank.com",[5,385]],["gamemaker.io",6],["pixiv.net",7],["kinemaster.com",8],["sp32bb.pl",9],["jazz.fm",10],["juntadeandalucia.es",11],["melee.gg",[12,13,14]],["chemocare.com",15],["mobiliteit.nl",16],["xledger.net",17],["reviewmeta.com",18],["guide-bordeaux-gironde.com",19],["travelinsured.com",20],["gdpr.twitter.com",21],["mora.hu",22],["confused.com",23],["physikinstrumente.de",24],["karlknauer.de",24],["schoeck.com",24],["resonate.coop",24],["northgatevehiclehire.ie",24],["badhall.at",24],["cic.ch",24],["ilsaggiatore.com",25],["forum.digitalfernsehen.de",26],["bitscrunch.com",[27,28,29]],["hannahgraaf.com",30],["shop.elbers-hof.de",[31,32]],["woolsocks.eu",33],["uza.be",34],["5asec.ch",34],["wizards.com",34],["parkenflughafen.de",35],["radyofenomen.com",36],["elsate.com",37],["labs.epi2me.io",38],["hume.ai",39],["lotusantwerp.wacs.online",40],["simeononsecurity.gitbook.io",41],["thehacker.recipes",41],["docs.dyrector.io",41],["makeresearchpay.com",42],["tandartsenpraktijk-simons.tandartsennet.nl",43],["huisartsenpraktijkdoorn.nl",43],["bcorporation.net",44],["knime.com",[44,87]],["quebueno.es",44],["edookit.com",45],["trixonline.be",46],["radio-canada.ca",47],["heysummit.com",48],["puromarketing.com",49],["radicalmotorsport.com",50],["biurobox.pl",51],["cycling74.com",52],["triviacreator.com",53],["freshis.com",53],["anker.com",53],["computacenter.com",54],["playbalatro.com",55],["kastner-oehler.de",56],["kastner-oehler.at",56],["kastner-oehler.ch",56],["twenga.it",57],["twenga.fr",57],["twenga.co.uk",57],["twenga.de",57],["twenga.es",57],["twenga.pl",57],["twenga.nl",57],["twenga.se",57],["olx.kz",58],["efl.com",59],["wst.tv",59],["cuvva.com",60],["vitbikes.de",61],["gourmetfoodstore.com",62],["schulfahrt.de",63],["deutsche-finanzagentur.de",64],["thejazzcafelondon.com",65],["keeb.supply",66],["spb.hh.ru",67],["kaluga.hh.ru",67],["school.hh.ru",67],["rating.hh.ru",67],["novgorod.hh.ru",67],["xxxshemaleporn.com",[68,69]],["gayhits.com",[68,69]],["gaypornvideos.xxx",[68,69]],["sextubespot.com",[68,69]],["wewantjusticedao.org",70],["godbolt.org",71],["projectenglish.com.pl",[72,77]],["ledenicheur.fr",72],["pricespy.co.uk",72],["pricespy.co.nz",72],["sae.fsc.ccoo.es",73],["piusx-college.nl",74],["yoomoney.ru",75],["vod.warszawa.pl",76],["m.twitch.tv",78],["environment.data.gov.uk",79],["playtesting.games",80],["portal.by.aok.de",81],["umlandscout.de",82],["atombank.co.uk",[83,84,85]],["showtv.com.tr",86],["seventhgeneration.com",87],["press.princeton.edu",87],["ldz.lv",87],["crtm.es",88],["airastana.com",89],["vkf-renzel.nl",90],["booking.reederei-zingst.de",[91,92,93]],["booking.weisse-flotte.de",[91,92,93]],["booking2.reederei-hiddensee.de",[91,92,93]],["sanswiss.pl",94],["galaxy.com",95],["petdesk.com",96],["ivyexec.com",97],["railtech.com",98],["lottehotel.com",[99,100,101,102,103]],["paydirekt.de",104],["kijiji.ca",105],["posterstore.fr",106],["posterstore.eu",106],["posterstore.be",106],["posterstore.de",106],["posterstore.hu",106],["posterstore.ie",106],["posterstore.it",106],["posterstore.no",106],["posterstore.nl",106],["posterstore.pl",106],["posterstore.com",106],["posterstore.ae",106],["posterstore.ca",106],["posterstore.nz",106],["posterstore.es",106],["posterstore.kr",106],["posterstore.jp",106],["posterstore.dk",106],["posterstore.se",106],["posterstore.ch",106],["posterstore.at",106],["myriadicity.net",107],["dgsf.org",107],["endgame.id",108],["cashback-cards.ch",109],["swisscard.ch",109],["ahorn24.de",110],["blockdyor.com",111],["ticket.io",112],["omega-nuernberg.servicebund.com",113],["lojaboschferramentas.com.br",[114,116,117]],["shareloft.com",115],["fineartsmuseum.recreatex.be",[118,119,120]],["jaapeden.nl",[118,119,120]],["eboo.lu",121],["lasmallagency.com",122],["lhsystems.com",[123,124,125,126]],["twomates.de",127],["intergiro.com",128],["healthygamer.gg",129],["telepizza.es",[130,131,132]],["telepizza.pt",[130,131,132]],["frisco.pl",133],["tyleenslang.nl",134],["schrikdraad.net",134],["kruiwagen.net",134],["pvcvoordeel.nl",134],["pvcbuis.com",134],["drainagebuizen.nl",134],["likewise.com",135],["longines.com",[136,137,138,139]],["vater-it.de",140],["biano.hu",141],["nadia.gov.gr",142],["hana-book.fr",143],["kzvb.de",144],["correosexpress.com",145],["cexpr.es",145],["rte.ie",146],["smart.com",147],["gry.pl",147],["gamesgames.com",147],["games.co.uk",147],["jetztspielen.de",147],["ourgames.ru",147],["permainan.co.id",147],["gioco.it",147],["jeux.fr",147],["juegos.com",147],["ojogos.com.br",147],["oyunskor.com",147],["spela.se",147],["spelletjes.nl",147],["agame.com",147],["spielen.com",147],["flashgames.ru",147],["games.co.id",147],["giochi.it",147],["jeu.fr",147],["spel.nl",147],["sartor-stoffe.de",148],["rockpoint.cz",148],["rockpoint.sk",148],["parfum-zentrum.de",148],["candy-store.cz",148],["tridge.com",149],["asus.com",[150,151]],["drinksking.sk",152],["neuhauschocolates.com",153],["commandsuite.it",154],["oktea.tw",155],["bafin.de",156],["materna.de",156],["bamf.de",156],["tenvinilo-argentina.com",[157,158]],["eikaforsikring.no",[159,160]],["eurowings.com",[161,162,163]],["newpharma.be",[164,165,166]],["newpharma.fr",[164,165,166]],["newpharma.de",[164,165,166]],["newpharma.at",[164,165,166]],["newpharma.nl",[164,165,166]],["kapoorwatch.com",167],["instantoffices.com",168],["paf.se",168],["citibank.pl",168],["citibankonline.pl",168],["azertyfactor.be",169],["zelezodum.cz",170],["thw.de",171],["bafa.de",171],["bka.de",171],["bmbf.de",171],["weather.com",172],["bolist.se",[173,174]],["project529.com",174],["evivanlanschot.nl",175],["prenatal.nl",176],["onnibus.com",[176,810,811,812]],["kyoceradocumentsolutions.us",[176,857,858]],["kyoceradocumentsolutions.ch",[176,857,858]],["kyoceradocumentsolutions.co.uk",[176,857,858]],["kyoceradocumentsolutions.de",[176,857,858]],["kyoceradocumentsolutions.es",[176,857,858]],["kyoceradocumentsolutions.eu",[176,857,858]],["kyoceradocumentsolutions.fr",[176,857,858]],["kyoceradocumentsolutions.it",[176,857,858]],["kyoceradocumentsolutions.ru",[176,857,858]],["kyoceradocumentsolutions.mx",[176,857,858]],["kyoceradocumentsolutions.cl",[176,857,858]],["kyoceradocumentsolutions.com.br",[176,857,858]],["wagner-tuning.com",[177,178,179,180]],["waitrosecellar.com",[181,182,183,184]],["waitrose.com",[181,532]],["kvk.nl",[185,186,187]],["macfarlanes.com",188],["pole-emploi.fr",189],["gardenmediaguild.co.uk",190],["samplerite.com",191],["samplerite.cn",191],["sororedit.com",192],["blukit.com.br",193],["biegnaszczyt.pl",194],["staff-gallery.com",195],["itv.com",196],["dvag.de",197],["premierinn.com",[198,199,200,201]],["whitbreadinns.co.uk",[198,199,200,201]],["barandblock.co.uk",[198,199,200,201]],["tabletable.co.uk",[198,199,200,201]],["brewersfayre.co.uk",[198,199,200,201]],["beefeater.co.uk",[198,199,200,201]],["allstarssportsbars.co.uk",[202,203]],["babiesrus.ca",204],["toysrus.ca",204],["roomsandspaces.ca",204],["athletic-club.eus",[205,206,207]],["wattoo.dk",208],["wattoo.no",208],["texthelp.com",[209,210]],["courierexchange.co.uk",[211,212,213]],["haulageexchange.co.uk",[211,212,213]],["ecaytrade.com",214],["powerball.com",215],["tlaciarik.sk",215],["tiskarik.cz",215],["sseriga.edu",[216,217]],["rt.com",218],["swrng.de",219],["crfop.gdos.gov.pl",220],["nurgutes.de",221],["kpcen-torun.edu.pl",222],["opintopolku.fi",223],["app.erevie.pl",224],["debenhams.com",225],["archiwumalle.pl",226],["konicaminolta.ca",227],["konicaminolta.us",227],["deutschebank-dbdirect.com",[228,229,230]],["dbonline.deutsche-bank.es",[228,229,230]],["deutsche-bank.es",[228,229,230]],["hipotecaonline.db.com",231],["kangasalansanomat.fi",232],["eif.org",233],["tunnelmb.net",233],["sugi-net.jp",234],["understandingsociety.ac.uk",235],["leibniz.com",236],["horecaworld.biz",[236,503]],["horecaworld.be",[236,503]],["bettertires.com",236],["electroprecio.com",236],["autohero.com",236],["computerbase.de",[236,854]],["sistemacomponentes.com.br",237],["bargaintown.ie",238],["tui.nl",239],["doppelmayr.com",240],["case-score.com",[241,242]],["cote.co.uk",243],["finimize.com",243],["blxxded.com",244],["rtu.lv",245],["sysdream.com",246],["cinemarkca.com",247],["neander-zahn.de",248],["theadelphileeds.co.uk",249],["tobycarvery.co.uk",249],["carsupermarket.com",249],["viajesatodotren.com",250],["ticketingcine.fr",251],["agenziavista.it",252],["e-chladiva.cz",252],["bitecode.dev",253],["mjob.si",[254,255,256]],["airportrentacar.gr",257],["mobile-fueling.de",257],["plos.org",258],["autohaus24.de",259],["sixt-neuwagen.de",259],["gadis.es",[260,261]],["dom.ru",261],["ford-kimmerle-reutlingen.de",262],["autohaus-reitermayer.de",262],["autohaus-diefenbach-waldbrunn.de",262],["autohaus-diefenbach.de",262],["autohaus-musberg.de",262],["ford-ah-im-hunsrueck-simmern.de",262],["ford-arndt-goerlitz.de",262],["ford-autogalerie-alfeld.de",262],["ford-bacher-schrobenhausen.de",262],["ford-bathauer-bad-harzburg.de",262],["ford-behrend-waren.de",262],["ford-bergland-frankfurt-oder.de",262],["ford-bergland-wipperfuerth.de",262],["ford-besico-glauchau.de",262],["ford-besico-nuernberg.de",262],["ford-bischoff-neumuenster.de",262],["ford-bodach-borgentreich.de",262],["ford-bunk-saarbruecken.de",262],["ford-bunk-voelklingen.de",262],["ford-busch-kirchberg.de",262],["ford-diermeier-muenchen.de",262],["ford-dinnebier-leipzig.de",262],["ford-duennes-regensburg.de",262],["ford-fischer-bochum.de",262],["ford-fischer-muenster.de",262],["ford-foerster-koblenz.de",262],["ford-fuchs-uffenheim.de",262],["ford-geberzahn-koeln.de",262],["ford-gerstmann-duesseldorf.de",262],["ford-haefner-und-strunk-kassel.de",262],["ford-hartmann-kempten.de",262],["ford-hartmann-rastatt.de",262],["ford-hatzner-karlsruhe.de",262],["ford-heine-hoexter.de",262],["ford-hentschel-hildesheim.de",262],["ford-hessengarage-dreieich.de",262],["ford-hessengarage-frankfurt.de",262],["ford-hga-windeck.de",262],["ford-hommert-coburg.de",262],["ford-horstmann-rastede.de",262],["ford-janssen-sonsbeck.de",262],["ford-jochem-stingbert.de",262],["ford-jungmann-wuppertal.de",262],["ford-kestel-marktzeuln.de",262],["ford-klaiber-bad-friedrichshall.de",262],["ford-koenig-eschwege.de",262],["ford-kohlhoff-mannheim.de",262],["ford-kt-automobile-coesfeld.de",262],["ford-lackermann-wesel.de",262],["ford-ludewig-delligsen.de",262],["ford-maiwald-linsengericht.de",262],["ford-mertens-beckum.de",262],["ford-meyer-bad-oeynhausen.de",262],["ford-mgs-bayreuth.de",262],["ford-mgs-radebeul.de",262],["ford-muecke-berlin.de",262],["ford-norren-weissenthurm.de",262],["ford-nrw-garage-duesseldorf.de",262],["ford-nrw-garage-handweiser.de",262],["ford-nuding-remshalden.de",262],["ford-ohm-rendsburg.de",262],["ford-reinicke-muecheln.de",262],["ford-rennig.de",262],["ford-roerentrop-luenen.de",262],["ford-schankola-dudweiler.de",262],["ford-sg-goeppingen.de",262],["ford-sg-leonberg.de",262],["ford-sg-neu-ulm.de",262],["ford-sg-pforzheim.de",262],["ford-sg-waiblingen.de",262],["ford-storz-st-georgen.de",262],["ford-strunk-koeln.de",262],["ford-tobaben-hamburg.de",262],["ford-toenjes-zetel.de",262],["ford-wagner-mayen.de",262],["ford-wahl-fritzlar.de",262],["ford-wahl-siegen.de",262],["ford-weege-bad-salzuflen.de",262],["ford-westhoff-hamm.de",262],["ford-wieland-hasbergen.de",262],["renault-autocenterprignitz-pritzwalk.de",262],["renault-spenrath-juelich.de",262],["vitalllit.com",263],["fincaparera.com",263],["dbnetbcn.com",263],["viba.barcelona",263],["anafaustinoatelier.com",263],["lamparasherrero.com",263],["calteixidor.cat",263],["argentos.barcelona",263],["anmarlube.com",263],["anynouxines.barcelona",263],["crearunapaginaweb.cat",263],["cualesmiip.com",263],["porndoe.com",[264,265,266]],["thinkingaustralia.com",267],["elrow.com",268],["ownit.se",269],["velo-antwerpen.be",[270,271]],["wwnorton.com",272],["pc-canada.com",273],["mullgs.se",274],["1a-sehen.de",275],["feature.fm",276],["comte.com",277],["baltic-watches.com",278],["np-brijuni.hr",278],["vilgain.com",278],["tradingview.com",279],["wevolver.com",280],["experienciasfree.com",281],["freemans.com",282],["kivikangas.fi",283],["lumingerie.com",283],["melkkobrew.fi",283],["kh.hu",[284,285,286]],["aplgo.com",287],["securityconference.org",288],["aha.or.at",[289,292]],["fantasyfitnessing.com",290],["chocolateemporium.com",291],["account.samsung.com",293],["crushwineco.com",294],["levi.pt",295],["fertagus.pt",296],["smiggle.co.uk",297],["ubisoft.com",[298,299,300,301]],["store.ubisoft.com",[298,301,736,737]],["thulb.uni-jena.de",302],["splityourticket.co.uk",303],["eramba.org",304],["openai.com",305],["kupbilecik.com",[306,307]],["kupbilecik.de",[306,307]],["kupbilecik.pl",[306,307]],["shopilya.com",308],["arera.it",309],["haustier-berater.de",309],["hfm-frankfurt.de",309],["zoommer.ge",310],["studentapan.se",311],["petcity.lt",[312,313,314,315]],["tobroco.com",[316,320]],["tobroco.nl",[316,320]],["tobroco-giant.com",[316,320]],["geosfreiberg.de",[317,318]],["eapvic.org",319],["bassolsenergia.com",319],["bammusic.com",[321,323,324]],["green-24.de",322],["phish-test.de",325],["bokadirekt.se",326],["ford.lt",327],["ford.pt",327],["ford.fr",327],["ford.de",327],["ford.dk",327],["ford.pl",327],["ford.se",327],["ford.nl",327],["ford.no",327],["ford.fi",327],["ford.gr",327],["ford.it",327],["data-media.gr",328],["e-food.gr",[329,330]],["bvmed.de",331],["babyshop.com",[332,333,334]],["griffbereit24.de",335],["checkwx.com",336],["calendardate.com",337],["wefashion.ch",338],["wefashion.fr",338],["wefashion.lu",338],["wefashion.be",338],["wefashion.de",338],["wefashion.nl",338],["brettspiel-angebote.de",[339,340]],["nio.com",341],["kancelarskepotreby.net",[342,343,344]],["segment-anything.com",345],["sketch.metademolab.com",346],["cambridgebs.co.uk",347],["freizeitbad-greifswald.de",348],["giuseppezanotti.com",[349,350,351]],["xcen.se",351],["biggreenegg.co.uk",352],["skihuette-oberbeuren.de",[353,354,355]],["pwsweather.com",356],["xfree.com",357],["theweathernetwork.com",[358,359]],["monese.com",[360,361,362]],["assos.com",360],["helmut-fischer.com",363],["myscience.org",364],["7-eleven.com",365],["airwallex.com",366],["streema.com",367],["gov.lv",368],["tise.com",369],["codecamps.com",370],["avell.com.br",371],["moneyfarm.com",372],["app.moneyfarm.com",372],["simpl.rent",373],["hubspot.com",374],["prodyna.com",[375,376,377,378]],["zutobi.com",[375,376,377,378]],["calm.com",[379,380]],["pubgesports.com",[381,382,383]],["outwrite.com",384],["sbermarket.ru",386],["atani.com",[387,388,389]],["croisieresendirect.com",390],["bgextras.co.uk",391],["sede.coruna.gal",392],["czech-server.cz",393],["hitech-gamer.com",394],["bialettikave.hu",[395,396,397]],["canalplus.com",[398,399,400]],["mader.bz.it",[401,402,403]],["supply.amazon.co.uk",404],["bhaptics.com",405],["cleverbot.com",406],["watchaut.film",407],["tuffaloy.com",408],["fanvue.com",408],["electronoobs.com",409],["xn--lkylen-vxa.se",410],["tiefenthaler-landtechnik.at",411],["tiefenthaler-landtechnik.ch",411],["tiefenthaler-landtechnik.de",411],["varma.fi",412],["vyos.io",413],["digimobil.es",[414,415]],["teenage.engineering",416],["merrell.pl",[417,677]],["converse.pl",417],["shop.wf-education.com",[417,677]],["werkenbijaswatson.nl",418],["converse.com",[419,420]],["buyandapply.nexus.org.uk",421],["img.ly",422],["halonen.fi",[422,454,455,456,457]],["carlson.fi",[422,454,455,456,457]],["cams.ashemaletube.com",[423,424]],["electronicacerler.com",[425,426,427]],["okpoznan.pl",[428,433]],["ielts.idp.com",429],["ielts.co.nz",429],["ielts.com.au",429],["einfach-einreichen.de",[430,431,432]],["endlesstools.io",434],["mbhszepkartya.hu",435],["casellimoveis.com.br",436],["embedplus.com",437],["e-file.pl",438],["sp215.info",439],["empik.com",440],["senda.pl",441],["befestigungsfuchs.de",442],["cut-tec.co.uk",443],["gaytimes.co.uk",444],["statisticsanddata.org",445],["hello.one",446],["paychex.com",447],["wildcat-koeln.de",448],["libraries.merton.gov.uk",[449,450]],["tommy.hr",[451,452]],["usit.uio.no",453],["demo-digital-twin.r-stahl.com",458],["la31devalladolid.com",[459,460]],["mx.com",461],["foxtrail.fjallraven.com",462],["dotwatcher.cc",463],["bazarchic.com",[464,465,466]],["seedrs.com",467],["mypensiontracker.co.uk",468],["praxisplan.at",[468,490]],["endclothing.com",469],["esimplus.me",470],["cineplanet.com.pe",471],["ecologi.com",472],["wamba.com",473],["eurac.edu",474],["akasaair.com",475],["rittal.com",476],["worstbassist.com",[477,478,479,480,481,482]],["zs-watch.com",483],["crown.com",484],["mesanalyses.fr",485],["teket.jp",486],["fish.shimano.com",[487,488,489]],["simsherpa.com",[491,492,493]],["translit.ru",494],["aruba.com",495],["aireuropa.com",496],["skfbearingselect.com",[497,498]],["scanrenovation.com",499],["ttela.se",500],["dominospizza.pl",501],["devagroup.pl",502],["secondsol.com",503],["angelifybeauty.com",504],["cotopaxi.com",505],["justjoin.it",506],["digibest.pt",507],["two-notes.com",508],["theverge.com",509],["daimant.co",510],["secularism.org.uk",511],["karriere-hamburg.de",512],["musicmap.info",513],["gasspisen.se",514],["medtube.pl",515],["medtube.es",515],["medtube.fr",515],["medtube.net",515],["standard.sk",516],["linmot.com",517],["larian.com",[517,800]],["s-court.me",517],["containerandpackaging.com",518],["top-yp.de",519],["termania.net",520],["account.nowpayments.io",521],["fizjobaza.pl",522],["gigasport.at",523],["gigasport.de",523],["gigasport.ch",523],["velleahome.gr",524],["nicequest.com",525],["handelsbanken.no",526],["handelsbanken.com",526],["handelsbanken.co.uk",526],["handelsbanken.se",[526,605]],["handelsbanken.dk",526],["handelsbanken.fi",526],["songtradr.com",[527,784]],["logo.pt",[528,529]],["flexwhere.co.uk",[530,531]],["flexwhere.de",[530,531]],["pricewise.nl",530],["getunleash.io",530],["dentmania.de",530],["free.navalny.com",530],["latoken.com",530],["campusbrno.cz",[533,534,535]],["secrid.com",536],["etsy.com",537],["careers.cloud.com",537],["blablacar.rs",538],["blablacar.ru",538],["blablacar.com.tr",538],["blablacar.com.ua",538],["blablacar.com.br",538],["seb.se",539],["sebgroup.com",539],["deps.dev",540],["buf.build",541],["starofservice.com",542],["ytcomment.kmcat.uk",543],["gmx.com",544],["gmx.fr",544],["karofilm.ru",545],["octopusenergy.it",546],["octopusenergy.es",[546,547]],["justanswer.es",548],["justanswer.de",548],["justanswer.com",548],["justanswer.co.uk",548],["citilink.ru",549],["huutokaupat.com",550],["kaggle.com",551],["emr.ch",[552,557]],["gem.cbc.ca",553],["pumatools.hu",554],["ici.tou.tv",555],["crunchyroll.com",556],["mayflex.com",558],["clipchamp.com",558],["trouwenbijfletcher.nl",558],["fletcher.nl",558],["fletcherzakelijk.nl",558],["intermatic.com",558],["ebikelohr.de",559],["eurosender.com",560],["melectronics.ch",561],["guard.io",562],["nokportalen.se",563],["dokiliko.com",564],["valamis.com",[565,566,567]],["sverigesingenjorer.se",568],["shop.almawin.de",[569,570,571,608]],["zeitzurtrauer.de",572],["skaling.de",[573,574,575]],["bringmeister.de",576],["gdx.net",577],["clearblue.com",578],["drewag.de",[579,580,581]],["enso.de",[579,580,581]],["buidlbox.io",579],["helitransair.com",582],["more.com",583],["nwslsoccer.com",583],["climatecentral.org",584],["resolution.de",585],["flagma.by",586],["eatsalad.com",587],["pacstall.dev",588],["web2.0calc.fr",589],["de-appletradein.likewize.com",590],["swissborg.com",591],["qwice.com",592],["canalpluskuchnia.pl",[593,594]],["uizard.io",595],["stmas.bayern.de",[596,599]],["novayagazeta.eu",597],["kinopoisk.ru",598],["yandex.ru",598],["go.netia.pl",[600,601]],["polsatboxgo.pl",[600,601]],["ing.it",[602,603]],["ing.nl",604],["youcom.com.br",606],["rule34.paheal.net",607],["deep-shine.de",608],["shop.ac-zaun-center.de",608],["kellermann-online.com",608],["kletterkogel.de",608],["pnel.de",608],["korodrogerie.de",608],["der-puten-shop.de",608],["katapult-shop.de",608],["evocsports.com",608],["esm-computer.de",608],["calmwaters.de",608],["mellerud.de",608],["akustik-projekt.at",608],["vansprint.de",608],["0815.at",608],["0815.eu",608],["ojskate.com",608],["der-schweighofer.de",608],["tz-bedarf.de",608],["zeinpharma.de",608],["weicon.com",608],["dagvandewebshop.be",608],["thiele-tee.de",608],["carbox.de",608],["riapsport.de",608],["trendpet.de",608],["eheizung24.de",608],["seemueller.com",608],["vivande.de",608],["heidegrill.com",608],["gladiator-fightwear.com",608],["h-andreas.com",608],["pp-parts.com",608],["natuerlich-holzschuhe.de",608],["massivart.de",608],["malermeister-shop.de",608],["imping-confiserie.de",608],["lenox-trading.at",608],["cklenk.de",608],["catolet.de",608],["drinkitnow.de",608],["patisserie-m.de",608],["storm-proof.com",608],["balance-fahrradladen.de",608],["magicpos.shop",608],["zeinpharma.com",608],["sps-handel.net",608],["novagenics.com",608],["butterfly-circus.de",608],["holzhof24.de",608],["w6-wertarbeit.de",608],["fleurop.de",608],["leki.com",608],["extremeaudio.de",608],["taste-market.de",608],["delker-optik.de",608],["stuhl24-shop.de",608],["g-nestle.de",608],["alpine-hygiene.ch",608],["fluidmaster.it",608],["cordon.de",608],["belisse-beauty.de",608],["belisse-beauty.co.uk",608],["wpc-shop24.de",608],["liv.si",608],["maybach-luxury.com",608],["leiternprofi24.de",608],["hela-shop.eu",608],["hitado.de",608],["armedangels.com",[608,684,685]],["hofer-kerzen.at",609],["karls-shop.de",610],["luvly.care",611],["firmen.wko.at",611],["byggern.no",612],["donauauen.at",613],["woltair.cz",614],["rostics.ru",615],["hife.es",616],["lilcat.com",617],["hot.si",[618,619,620,621]],["crenolibre.fr",622],["e-pole.pl",623],["dopt.com",624],["keb-automation.com",625],["bonduelle.ru",626],["oxfordonlineenglish.com",627],["pccomponentes.fr",628],["pccomponentes.com",628],["pccomponentes.pt",628],["grants.at",629],["africa-uninet.at",629],["rqb.at",629],["youngscience.at",629],["oead.at",629],["innovationsstiftung-bildung.at",629],["etwinning.at",629],["arqa-vet.at",629],["zentrumfuercitizenscience.at",629],["vorstudienlehrgang.at",629],["erasmusplus.at",629],["jeger.pl",630],["bo.de",631],["thegamingwatcher.com",632],["norlysplay.dk",633],["plusujemy.pl",634],["asus.com.cn",[635,637]],["zentalk.asus.com",[635,637]],["mubi.com",636],["59northwheels.se",638],["photospecialist.co.uk",639],["foto-gregor.de",639],["kamera-express.de",639],["kamera-express.be",639],["kamera-express.nl",639],["kamera-express.fr",639],["kamera-express.lu",639],["dhbbank.com",640],["dhbbank.de",640],["dhbbank.be",640],["dhbbank.nl",640],["login.ingbank.pl",641],["fabrykacukiernika.pl",[642,643]],["peaks.com",644],["3landesmuseen-braunschweig.de",645],["unifachbuch.de",[646,647,648]],["playlumi.com",[649,650,651]],["chatfuel.com",652],["studio3t.com",[653,654,655,656]],["realgap.co.uk",[657,658,659,660]],["hotelborgia.com",[661,662]],["sweet24.de",663],["zwembaddekouter.be",664],["flixclassic.pl",665],["jobtoday.com",666],["deltatre.com",[667,668,682]],["withings.com",[669,670,671]],["blista.de",[672,673]],["hashop.nl",674],["gift.be",[675,676]],["elevator.de",677],["foryouehealth.de",677],["animaze.us",677],["penn-elcom.com",677],["curantus.de",677],["mtbmarket.de",677],["spanienweinonline.ch",677],["novap.fr",677],["bizkaia.eus",[678,679,680]],["sinparty.com",681],["mantel.com",683],["e-dojus.lv",686],["burnesspaull.com",687],["oncosur.org",688],["photobooth.online",689],["epidemicsound.com",690],["ryanair.com",691],["refurbished.at",[692,693,694]],["refurbished.nl",[692,693,694]],["refurbished.be",[692,693,694]],["refurbishedstore.de",[692,693,694]],["bayernportal.de",[695,696,697]],["ayudatpymes.com",698],["zipjob.com",698],["plastischechirurgie-muenchen.info",699],["bonn.sitzung-online.de",700],["depop.com",[701,702,703]],["thenounproject.com",704],["pricehubble.com",705],["ilmotorsport.de",706],["karate.com",707],["psbank.ru",707],["myriad.social",707],["exeedme.com",707],["followalice.com",[707,775]],["aqua-store.fr",708],["voila.ca",709],["anastore.com",710],["app.arzt-direkt.de",711],["dasfutterhaus.at",712],["e-pity.pl",713],["fillup.pl",714],["dailymotion.com",715],["barcawelt.de",716],["lueneburger-heide.de",717],["polizei.bayern.de",[718,720]],["ourworldofpixels.com",719],["jku.at",721],["matkahuolto.fi",722],["backmarket.de",[723,724,725]],["backmarket.co.uk",[723,724,725]],["backmarket.es",[723,724,725]],["backmarket.be",[723,724,725]],["backmarket.at",[723,724,725]],["backmarket.fr",[723,724,725]],["backmarket.gr",[723,724,725]],["backmarket.fi",[723,724,725]],["backmarket.ie",[723,724,725]],["backmarket.it",[723,724,725]],["backmarket.nl",[723,724,725]],["backmarket.pt",[723,724,725]],["backmarket.se",[723,724,725]],["backmarket.sk",[723,724,725]],["backmarket.com",[723,724,725]],["eleven-sportswear.cz",[726,727,728]],["silvini.com",[726,727,728]],["silvini.de",[726,727,728]],["purefiji.cz",[726,727,728]],["voda-zdarma.cz",[726,727,728]],["lesgarconsfaciles.com",[726,727,728]],["ulevapronohy.cz",[726,727,728]],["vitalvibe.eu",[726,727,728]],["plavte.cz",[726,727,728]],["mo-tools.cz",[726,727,728]],["flamantonlineshop.cz",[726,727,728]],["sandratex.cz",[726,727,728]],["norwayshop.cz",[726,727,728]],["3d-foto.cz",[726,727,728]],["neviditelnepradlo.cz",[726,727,728]],["nutrimedium.com",[726,727,728]],["silvini.cz",[726,727,728]],["karel.cz",[726,727,728]],["silvini.sk",[726,727,728]],["book-n-drive.de",729],["cotswoldoutdoor.com",730],["cotswoldoutdoor.ie",730],["cam.start.canon",731],["usnews.com",732],["researchaffiliates.com",733],["singkinderlieder.de",734],["stiegeler.com",735],["ba.com",[738,739,740,741,742,743,744]],["britishairways.com",[738,739,740,741,742,743,744]],["cineman.pl",[745,746,747]],["tv-trwam.pl",[745,746,747,748]],["qatarairways.com",[749,750,751,752,753]],["wedding.pl",754],["vivaldi.com",755],["emuia1.gugik.gov.pl",756],["nike.com",757],["adidas.at",758],["adidas.be",758],["adidas.ca",758],["adidas.ch",758],["adidas.cl",758],["adidas.co",758],["adidas.co.in",758],["adidas.co.kr",758],["adidas.co.nz",758],["adidas.co.th",758],["adidas.co.uk",758],["adidas.com",758],["adidas.com.ar",758],["adidas.com.au",758],["adidas.com.br",758],["adidas.com.my",758],["adidas.com.ph",758],["adidas.com.vn",758],["adidas.cz",758],["adidas.de",758],["adidas.dk",758],["adidas.es",758],["adidas.fi",758],["adidas.fr",758],["adidas.gr",758],["adidas.ie",758],["adidas.it",758],["adidas.mx",758],["adidas.nl",758],["adidas.no",758],["adidas.pe",758],["adidas.pl",758],["adidas.pt",758],["adidas.ru",758],["adidas.se",758],["adidas.sk",758],["colourbox.com",759],["ebilet.pl",760],["myeventeo.com",761],["snap.com",762],["louwman.nl",[763,764]],["ratemyprofessors.com",765],["filen.io",766],["leotrippi.com",767],["restaurantclub.pl",767],["context.news",767],["queisser.de",767],["grandprixradio.dk",[768,769,770,771,772]],["grandprixradio.nl",[768,769,770,771,772]],["grandprixradio.be",[768,769,770,771,772]],["businessclass.com",773],["quantamagazine.org",774],["hellotv.nl",776],["jisc.ac.uk",777],["lasestrellas.tv",778],["xn--digitaler-notenstnder-m2b.com",779],["schoonmaakgroothandelemmen.nl",779],["nanuko.de",779],["hair-body-24.de",779],["shopforyou47.de",779],["kreativverliebt.de",779],["anderweltverlag.com",779],["octavio-shop.com",779],["forcetools-kepmar.eu",779],["fantecshop.de",779],["hexen-werkstatt.shop",779],["shop-naturstrom.de",779],["biona-shop.de",779],["camokoenig.de",779],["bikepro.de",779],["kaffeediscount.com",779],["vamos-skateshop.com",779],["holland-shop.com",779],["avonika.com",779],["royal-oak.org",780],["hurton.pl",781],["officesuite.com",782],["fups.com",[783,785]],["scienceopen.com",786],["moebel-mahler-siebenlehn.de",[787,788]],["calendly.com",789],["batesenvironmental.co.uk",[790,791]],["ubereats.com",792],["101internet.ru",793],["bein.com",794],["beinsports.com",794],["figshare.com",795],["bitso.com",796],["gallmeister.fr",797],["eco-toimistotarvikkeet.fi",798],["proficient.fi",798],["developer.ing.com",799],["webtrack.dhlglobalmail.com",801],["webtrack.dhlecs.com",801],["ehealth.gov.gr",802],["calvinklein.se",[803,804,805]],["calvinklein.fi",[803,804,805]],["calvinklein.sk",[803,804,805]],["calvinklein.si",[803,804,805]],["calvinklein.ch",[803,804,805]],["calvinklein.ru",[803,804,805]],["calvinklein.com",[803,804,805]],["calvinklein.pt",[803,804,805]],["calvinklein.pl",[803,804,805]],["calvinklein.at",[803,804,805]],["calvinklein.nl",[803,804,805]],["calvinklein.hu",[803,804,805]],["calvinklein.lu",[803,804,805]],["calvinklein.lt",[803,804,805]],["calvinklein.lv",[803,804,805]],["calvinklein.it",[803,804,805]],["calvinklein.ie",[803,804,805]],["calvinklein.hr",[803,804,805]],["calvinklein.fr",[803,804,805]],["calvinklein.es",[803,804,805]],["calvinklein.ee",[803,804,805]],["calvinklein.de",[803,804,805]],["calvinklein.dk",[803,804,805]],["calvinklein.cz",[803,804,805]],["calvinklein.bg",[803,804,805]],["calvinklein.be",[803,804,805]],["calvinklein.co.uk",[803,804,805]],["ofdb.de",806],["dtksoft.com",807],["serverstoplist.com",808],["truecaller.com",809],["protos.com",[813,815,816]],["timhortons.co.th",[813,814,815,817,819,820]],["toyota.co.uk",[813,814,815,818,819,820]],["businessaccountingbasics.co.uk",[813,814,815,817,819,820]],["flickr.org",[813,814,815,817,819,820]],["espacocasa.com",813],["altraeta.it",813],["centrooceano.it",813],["allstoresdigital.com",813],["cultarm3d.de",813],["soulbounce.com",813],["fluidtopics.com",813],["uvetgbt.com",813],["malcorentacar.com",813],["emondo.de",813],["maspero.it",813],["kelkay.com",813],["underground-england.com",813],["vert.eco",813],["turcolegal.com",813],["magnet4blogging.net",813],["moovly.com",813],["automationafrica.co.za",813],["jornaldoalgarve.pt",813],["keravanenergia.fi",813],["kuopas.fi",813],["frag-machiavelli.de",813],["healthera.co.uk",813],["mobeleader.com",813],["powerup-gaming.com",813],["developer-blog.net",813],["medical.edu.mt",813],["deh.mt",813],["bluebell-railway.com",813],["ribescasals.com",813],["javea.com",813],["chinaimportal.com",813],["inds.co.uk",813],["raoul-follereau.org",813],["serramenti-milano.it",813],["cosasdemujer.com",813],["luz-blanca.info",813],["cosasdeviajes.com",813],["safehaven.io",813],["havocpoint.it",813],["motofocus.pl",813],["nomanssky.com",813],["drei-franken-info.de",813],["clausnehring.com",813],["alttab.net",813],["kinderleicht.berlin",813],["kiakkoradio.fi",813],["cosasdelcaribe.es",813],["de-sjove-jokes.dk",813],["serverprofis.de",813],["biographyonline.net",813],["iziconfort.com",813],["sportinnederland.com",813],["natureatblog.com",813],["wtsenergy.com",813],["cosasdesalud.es",813],["internetpasoapaso.com",813],["zurzeit.at",813],["contaspoupanca.pt",813],["steamdeckhq.com",[813,814,815,817,819,820]],["ipouritinc.com",[813,815,817]],["hemglass.se",[813,815,817,819,820]],["sumsub.com",[813,814,815]],["atman.pl",[813,814,815]],["fabriziovanmarciano.com",[813,814,815]],["nationalrail.com",[813,814,815]],["eett.gr",[813,814,815]],["funkypotato.com",[813,814,815]],["equalexchange.co.uk",[813,814,815]],["swnsdigital.com",[813,814,815]],["gogolf.fi",[813,817]],["hanse-haus-greifswald.de",813],["tampereenratikka.fi",[813,815,821,822]],["kymppikatsastus.fi",[815,819,866,867]],["brasiltec.ind.br",823],["doka.com",[824,825,826]],["abi.de",[827,828]],["studienwahl.de",[827,828]],["youthforum.org",829],["journal.hr",[830,831,832,833]],["howstuffworks.com",834],["stickypassword.com",[835,836,837]],["conversion-rate-experts.com",[838,839]],["merkur.si",[840,841,842]],["petitionenligne.com",[843,844]],["petitionenligne.be",[843,844]],["petitionenligne.fr",[843,844]],["petitionenligne.re",[843,844]],["petitionenligne.ch",[843,844]],["skrivunder.net",[843,844]],["petitiononline.uk",[843,844]],["petitions.nz",[843,844]],["petizioni.com",[843,844]],["peticao.online",[843,844]],["skrivunder.com",[843,844]],["peticiones.ar",[843,844]],["petities.com",[843,844]],["petitionen.com",[843,844]],["petice.com",[843,844]],["opprop.net",[843,844]],["peticiok.com",[843,844]],["peticiones.net",[843,844]],["peticion.es",[843,844]],["peticiones.pe",[843,844]],["peticiones.mx",[843,844]],["peticiones.cl",[843,844]],["peticije.online",[843,844]],["peticiones.co",[843,844]],["mediathek.lfv-bayern.de",845],["aluypvc.es",[846,847,848]],["pracuj.pl",[849,850,851,852,853]],["vki.at",855],["konsument.at",855],["chollometro.com",856],["dealabs.com",856],["hotukdeals.com",856],["pepper.it",856],["pepper.pl",856],["preisjaeger.at",856],["mydealz.de",856],["direct.travelinsurance.tescobank.com",[859,860,861,862,863,864,865,866]],["easyfind.ch",[868,869]],["e-shop.leonidas.com",[870,871]],["lastmile.lt",872],["veriff.com",873],["constantin.film",[874,875,876]],["notion.so",877],["omgevingsloketinzage.omgeving.vlaanderen.be",[878,879]],["primor.eu",880],["tameteo.com",881],["tempo.pt",881],["yourweather.co.uk",881],["meteored.cl",881],["meteored.mx",881],["tempo.com",881],["ilmeteo.net",881],["meteored.com.ar",881],["daswetter.com",881],["algarvevacation.net",882],["3sat.de",883],["oxxio.nl",[884,885]],["butterflyshop.dk",[886,887,888]],["praxis.nl",889],["brico.be",889],["kent.gov.uk",[890,891]]]);

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
