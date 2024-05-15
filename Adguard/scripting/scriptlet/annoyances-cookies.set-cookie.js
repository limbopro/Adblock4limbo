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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["CookieConsent","false"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["privatekeys.pw",3],["gamemaker.io",4],["pixiv.net",5],["kinemaster.com",6],["sp32bb.pl",7],["jazz.fm",8],["juntadeandalucia.es",9],["melee.gg",[10,11,12]],["chemocare.com",13],["mobiliteit.nl",14],["xledger.net",15],["reviewmeta.com",16],["guide-bordeaux-gironde.com",17],["travelinsured.com",18],["gdpr.twitter.com",19],["mora.hu",20],["confused.com",21],["physikinstrumente.de",22],["karlknauer.de",22],["schoeck.com",22],["resonate.coop",22],["northgatevehiclehire.ie",22],["badhall.at",22],["cic.ch",22],["ilsaggiatore.com",23],["forum.digitalfernsehen.de",24],["bitscrunch.com",[25,26,27]],["hannahgraaf.com",28],["shop.elbers-hof.de",[29,30]],["woolsocks.eu",31],["uza.be",32],["5asec.ch",32],["wizards.com",32],["parkenflughafen.de",33],["radyofenomen.com",34],["elsate.com",35],["labs.epi2me.io",36],["hume.ai",37],["lotusantwerp.wacs.online",38],["simeononsecurity.gitbook.io",39],["thehacker.recipes",39],["docs.dyrector.io",39],["makeresearchpay.com",40],["tandartsenpraktijk-simons.tandartsennet.nl",41],["huisartsenpraktijkdoorn.nl",41],["bcorporation.net",42],["knime.com",[42,85]],["quebueno.es",42],["edookit.com",43],["trixonline.be",44],["radio-canada.ca",45],["heysummit.com",46],["puromarketing.com",47],["radicalmotorsport.com",48],["biurobox.pl",49],["cycling74.com",50],["triviacreator.com",51],["freshis.com",51],["anker.com",51],["computacenter.com",52],["playbalatro.com",53],["kastner-oehler.de",54],["kastner-oehler.at",54],["kastner-oehler.ch",54],["twenga.it",55],["twenga.fr",55],["twenga.co.uk",55],["twenga.de",55],["twenga.es",55],["twenga.pl",55],["twenga.nl",55],["twenga.se",55],["olx.kz",56],["efl.com",57],["wst.tv",57],["cuvva.com",58],["vitbikes.de",59],["gourmetfoodstore.com",60],["schulfahrt.de",61],["deutsche-finanzagentur.de",62],["thejazzcafelondon.com",63],["keeb.supply",64],["spb.hh.ru",65],["kaluga.hh.ru",65],["school.hh.ru",65],["rating.hh.ru",65],["novgorod.hh.ru",65],["xxxshemaleporn.com",[66,67]],["gayhits.com",[66,67]],["gaypornvideos.xxx",[66,67]],["sextubespot.com",[66,67]],["wewantjusticedao.org",68],["godbolt.org",69],["projectenglish.com.pl",[70,75]],["ledenicheur.fr",70],["pricespy.co.uk",70],["pricespy.co.nz",70],["sae.fsc.ccoo.es",71],["piusx-college.nl",72],["yoomoney.ru",73],["vod.warszawa.pl",74],["m.twitch.tv",76],["environment.data.gov.uk",77],["playtesting.games",78],["portal.by.aok.de",79],["umlandscout.de",80],["atombank.co.uk",[81,82,83]],["showtv.com.tr",84],["seventhgeneration.com",85],["press.princeton.edu",85],["ldz.lv",85],["crtm.es",86],["airastana.com",87],["vkf-renzel.nl",88],["booking.reederei-zingst.de",[89,90,91]],["booking.weisse-flotte.de",[89,90,91]],["booking2.reederei-hiddensee.de",[89,90,91]],["sanswiss.pl",92],["galaxy.com",93],["petdesk.com",94],["ivyexec.com",95],["railtech.com",96],["lottehotel.com",[97,98,99,100,101]],["paydirekt.de",102],["kijiji.ca",103],["posterstore.fr",104],["posterstore.eu",104],["posterstore.be",104],["posterstore.de",104],["posterstore.hu",104],["posterstore.ie",104],["posterstore.it",104],["posterstore.no",104],["posterstore.nl",104],["posterstore.pl",104],["posterstore.com",104],["posterstore.ae",104],["posterstore.ca",104],["posterstore.nz",104],["posterstore.es",104],["posterstore.kr",104],["posterstore.jp",104],["posterstore.dk",104],["posterstore.se",104],["posterstore.ch",104],["posterstore.at",104],["myriadicity.net",105],["dgsf.org",105],["endgame.id",106],["cashback-cards.ch",107],["swisscard.ch",107],["ahorn24.de",108],["blockdyor.com",109],["ticket.io",110],["omega-nuernberg.servicebund.com",111],["lojaboschferramentas.com.br",[112,114,115]],["shareloft.com",113],["fineartsmuseum.recreatex.be",[116,117,118]],["jaapeden.nl",[116,117,118]],["eboo.lu",119],["lasmallagency.com",120],["lhsystems.com",[121,122,123,124]],["twomates.de",125],["intergiro.com",126],["healthygamer.gg",127],["telepizza.es",[128,129,130]],["telepizza.pt",[128,129,130]],["frisco.pl",131],["tyleenslang.nl",132],["schrikdraad.net",132],["kruiwagen.net",132],["pvcvoordeel.nl",132],["pvcbuis.com",132],["drainagebuizen.nl",132],["likewise.com",133],["longines.com",[134,135,136,137]],["vater-it.de",138],["biano.hu",139],["nadia.gov.gr",140],["hana-book.fr",141],["kzvb.de",142],["correosexpress.com",143],["cexpr.es",143],["rte.ie",144],["smart.com",145],["gry.pl",145],["gamesgames.com",145],["games.co.uk",145],["jetztspielen.de",145],["ourgames.ru",145],["permainan.co.id",145],["gioco.it",145],["jeux.fr",145],["juegos.com",145],["ojogos.com.br",145],["oyunskor.com",145],["spela.se",145],["spelletjes.nl",145],["agame.com",145],["spielen.com",145],["flashgames.ru",145],["games.co.id",145],["giochi.it",145],["jeu.fr",145],["spel.nl",145],["sartor-stoffe.de",146],["rockpoint.cz",146],["rockpoint.sk",146],["parfum-zentrum.de",146],["candy-store.cz",146],["tridge.com",147],["asus.com",[148,149]],["drinksking.sk",150],["neuhauschocolates.com",151],["commandsuite.it",152],["oktea.tw",153],["bafin.de",154],["materna.de",154],["bamf.de",154],["tenvinilo-argentina.com",[155,156]],["eikaforsikring.no",[157,158]],["eurowings.com",[159,160,161]],["newpharma.be",[162,163,164]],["newpharma.fr",[162,163,164]],["newpharma.de",[162,163,164]],["newpharma.at",[162,163,164]],["newpharma.nl",[162,163,164]],["kapoorwatch.com",165],["instantoffices.com",166],["paf.se",166],["citibank.pl",166],["citibankonline.pl",166],["azertyfactor.be",167],["zelezodum.cz",168],["thw.de",169],["bafa.de",169],["bka.de",169],["bmbf.de",169],["weather.com",170],["bolist.se",[171,172]],["project529.com",172],["evivanlanschot.nl",173],["prenatal.nl",174],["onnibus.com",[174,808,809,810]],["kyoceradocumentsolutions.us",[174,855,856]],["kyoceradocumentsolutions.ch",[174,855,856]],["kyoceradocumentsolutions.co.uk",[174,855,856]],["kyoceradocumentsolutions.de",[174,855,856]],["kyoceradocumentsolutions.es",[174,855,856]],["kyoceradocumentsolutions.eu",[174,855,856]],["kyoceradocumentsolutions.fr",[174,855,856]],["kyoceradocumentsolutions.it",[174,855,856]],["kyoceradocumentsolutions.ru",[174,855,856]],["kyoceradocumentsolutions.mx",[174,855,856]],["kyoceradocumentsolutions.cl",[174,855,856]],["kyoceradocumentsolutions.com.br",[174,855,856]],["wagner-tuning.com",[175,176,177,178]],["waitrosecellar.com",[179,180,181,182]],["waitrose.com",[179,530]],["kvk.nl",[183,184,185]],["macfarlanes.com",186],["pole-emploi.fr",187],["gardenmediaguild.co.uk",188],["samplerite.com",189],["samplerite.cn",189],["sororedit.com",190],["blukit.com.br",191],["biegnaszczyt.pl",192],["staff-gallery.com",193],["itv.com",194],["dvag.de",195],["premierinn.com",[196,197,198,199]],["whitbreadinns.co.uk",[196,197,198,199]],["barandblock.co.uk",[196,197,198,199]],["tabletable.co.uk",[196,197,198,199]],["brewersfayre.co.uk",[196,197,198,199]],["beefeater.co.uk",[196,197,198,199]],["allstarssportsbars.co.uk",[200,201]],["babiesrus.ca",202],["toysrus.ca",202],["roomsandspaces.ca",202],["athletic-club.eus",[203,204,205]],["wattoo.dk",206],["wattoo.no",206],["texthelp.com",[207,208]],["courierexchange.co.uk",[209,210,211]],["haulageexchange.co.uk",[209,210,211]],["ecaytrade.com",212],["powerball.com",213],["tlaciarik.sk",213],["tiskarik.cz",213],["sseriga.edu",[214,215]],["rt.com",216],["swrng.de",217],["crfop.gdos.gov.pl",218],["nurgutes.de",219],["kpcen-torun.edu.pl",220],["opintopolku.fi",221],["app.erevie.pl",222],["debenhams.com",223],["archiwumalle.pl",224],["konicaminolta.ca",225],["konicaminolta.us",225],["deutschebank-dbdirect.com",[226,227,228]],["dbonline.deutsche-bank.es",[226,227,228]],["deutsche-bank.es",[226,227,228]],["hipotecaonline.db.com",229],["kangasalansanomat.fi",230],["eif.org",231],["tunnelmb.net",231],["sugi-net.jp",232],["understandingsociety.ac.uk",233],["leibniz.com",234],["horecaworld.biz",[234,501]],["horecaworld.be",[234,501]],["bettertires.com",234],["electroprecio.com",234],["autohero.com",234],["computerbase.de",[234,852]],["sistemacomponentes.com.br",235],["bargaintown.ie",236],["tui.nl",237],["doppelmayr.com",238],["case-score.com",[239,240]],["cote.co.uk",241],["finimize.com",241],["blxxded.com",242],["rtu.lv",243],["sysdream.com",244],["cinemarkca.com",245],["neander-zahn.de",246],["theadelphileeds.co.uk",247],["tobycarvery.co.uk",247],["carsupermarket.com",247],["viajesatodotren.com",248],["ticketingcine.fr",249],["agenziavista.it",250],["e-chladiva.cz",250],["bitecode.dev",251],["mjob.si",[252,253,254]],["airportrentacar.gr",255],["mobile-fueling.de",255],["plos.org",256],["autohaus24.de",257],["sixt-neuwagen.de",257],["gadis.es",[258,259]],["dom.ru",259],["ford-kimmerle-reutlingen.de",260],["autohaus-reitermayer.de",260],["autohaus-diefenbach-waldbrunn.de",260],["autohaus-diefenbach.de",260],["autohaus-musberg.de",260],["ford-ah-im-hunsrueck-simmern.de",260],["ford-arndt-goerlitz.de",260],["ford-autogalerie-alfeld.de",260],["ford-bacher-schrobenhausen.de",260],["ford-bathauer-bad-harzburg.de",260],["ford-behrend-waren.de",260],["ford-bergland-frankfurt-oder.de",260],["ford-bergland-wipperfuerth.de",260],["ford-besico-glauchau.de",260],["ford-besico-nuernberg.de",260],["ford-bischoff-neumuenster.de",260],["ford-bodach-borgentreich.de",260],["ford-bunk-saarbruecken.de",260],["ford-bunk-voelklingen.de",260],["ford-busch-kirchberg.de",260],["ford-diermeier-muenchen.de",260],["ford-dinnebier-leipzig.de",260],["ford-duennes-regensburg.de",260],["ford-fischer-bochum.de",260],["ford-fischer-muenster.de",260],["ford-foerster-koblenz.de",260],["ford-fuchs-uffenheim.de",260],["ford-geberzahn-koeln.de",260],["ford-gerstmann-duesseldorf.de",260],["ford-haefner-und-strunk-kassel.de",260],["ford-hartmann-kempten.de",260],["ford-hartmann-rastatt.de",260],["ford-hatzner-karlsruhe.de",260],["ford-heine-hoexter.de",260],["ford-hentschel-hildesheim.de",260],["ford-hessengarage-dreieich.de",260],["ford-hessengarage-frankfurt.de",260],["ford-hga-windeck.de",260],["ford-hommert-coburg.de",260],["ford-horstmann-rastede.de",260],["ford-janssen-sonsbeck.de",260],["ford-jochem-stingbert.de",260],["ford-jungmann-wuppertal.de",260],["ford-kestel-marktzeuln.de",260],["ford-klaiber-bad-friedrichshall.de",260],["ford-koenig-eschwege.de",260],["ford-kohlhoff-mannheim.de",260],["ford-kt-automobile-coesfeld.de",260],["ford-lackermann-wesel.de",260],["ford-ludewig-delligsen.de",260],["ford-maiwald-linsengericht.de",260],["ford-mertens-beckum.de",260],["ford-meyer-bad-oeynhausen.de",260],["ford-mgs-bayreuth.de",260],["ford-mgs-radebeul.de",260],["ford-muecke-berlin.de",260],["ford-norren-weissenthurm.de",260],["ford-nrw-garage-duesseldorf.de",260],["ford-nrw-garage-handweiser.de",260],["ford-nuding-remshalden.de",260],["ford-ohm-rendsburg.de",260],["ford-reinicke-muecheln.de",260],["ford-rennig.de",260],["ford-roerentrop-luenen.de",260],["ford-schankola-dudweiler.de",260],["ford-sg-goeppingen.de",260],["ford-sg-leonberg.de",260],["ford-sg-neu-ulm.de",260],["ford-sg-pforzheim.de",260],["ford-sg-waiblingen.de",260],["ford-storz-st-georgen.de",260],["ford-strunk-koeln.de",260],["ford-tobaben-hamburg.de",260],["ford-toenjes-zetel.de",260],["ford-wagner-mayen.de",260],["ford-wahl-fritzlar.de",260],["ford-wahl-siegen.de",260],["ford-weege-bad-salzuflen.de",260],["ford-westhoff-hamm.de",260],["ford-wieland-hasbergen.de",260],["renault-autocenterprignitz-pritzwalk.de",260],["renault-spenrath-juelich.de",260],["vitalllit.com",261],["fincaparera.com",261],["dbnetbcn.com",261],["viba.barcelona",261],["anafaustinoatelier.com",261],["lamparasherrero.com",261],["calteixidor.cat",261],["argentos.barcelona",261],["anmarlube.com",261],["anynouxines.barcelona",261],["crearunapaginaweb.cat",261],["cualesmiip.com",261],["porndoe.com",[262,263,264]],["thinkingaustralia.com",265],["elrow.com",266],["ownit.se",267],["velo-antwerpen.be",[268,269]],["wwnorton.com",270],["pc-canada.com",271],["mullgs.se",272],["1a-sehen.de",273],["feature.fm",274],["comte.com",275],["baltic-watches.com",276],["np-brijuni.hr",276],["vilgain.com",276],["tradingview.com",277],["wevolver.com",278],["experienciasfree.com",279],["freemans.com",280],["kivikangas.fi",281],["lumingerie.com",281],["melkkobrew.fi",281],["kh.hu",[282,283,284]],["aplgo.com",285],["securityconference.org",286],["aha.or.at",[287,290]],["fantasyfitnessing.com",288],["chocolateemporium.com",289],["account.samsung.com",291],["crushwineco.com",292],["levi.pt",293],["fertagus.pt",294],["smiggle.co.uk",295],["ubisoft.com",[296,297,298,299]],["store.ubisoft.com",[296,299,734,735]],["thulb.uni-jena.de",300],["splityourticket.co.uk",301],["eramba.org",302],["openai.com",303],["kupbilecik.com",[304,305]],["kupbilecik.de",[304,305]],["kupbilecik.pl",[304,305]],["shopilya.com",306],["arera.it",307],["haustier-berater.de",307],["hfm-frankfurt.de",307],["zoommer.ge",308],["studentapan.se",309],["petcity.lt",[310,311,312,313]],["tobroco.com",[314,318]],["tobroco.nl",[314,318]],["tobroco-giant.com",[314,318]],["geosfreiberg.de",[315,316]],["eapvic.org",317],["bassolsenergia.com",317],["bammusic.com",[319,321,322]],["green-24.de",320],["phish-test.de",323],["bokadirekt.se",324],["ford.lt",325],["ford.pt",325],["ford.fr",325],["ford.de",325],["ford.dk",325],["ford.pl",325],["ford.se",325],["ford.nl",325],["ford.no",325],["ford.fi",325],["ford.gr",325],["ford.it",325],["data-media.gr",326],["e-food.gr",[327,328]],["bvmed.de",329],["babyshop.com",[330,331,332]],["griffbereit24.de",333],["checkwx.com",334],["calendardate.com",335],["wefashion.ch",336],["wefashion.fr",336],["wefashion.lu",336],["wefashion.be",336],["wefashion.de",336],["wefashion.nl",336],["brettspiel-angebote.de",[337,338]],["nio.com",339],["kancelarskepotreby.net",[340,341,342]],["segment-anything.com",343],["sketch.metademolab.com",344],["cambridgebs.co.uk",345],["freizeitbad-greifswald.de",346],["giuseppezanotti.com",[347,348,349]],["xcen.se",349],["biggreenegg.co.uk",350],["skihuette-oberbeuren.de",[351,352,353]],["pwsweather.com",354],["xfree.com",355],["theweathernetwork.com",[356,357]],["monese.com",[358,359,360]],["assos.com",358],["helmut-fischer.com",361],["myscience.org",362],["7-eleven.com",363],["airwallex.com",364],["streema.com",365],["gov.lv",366],["tise.com",367],["codecamps.com",368],["avell.com.br",369],["moneyfarm.com",370],["app.moneyfarm.com",370],["simpl.rent",371],["hubspot.com",372],["prodyna.com",[373,374,375,376]],["zutobi.com",[373,374,375,376]],["calm.com",[377,378]],["pubgesports.com",[379,380,381]],["outwrite.com",382],["sberbank.com",383],["sbermarket.ru",384],["atani.com",[385,386,387]],["croisieresendirect.com",388],["bgextras.co.uk",389],["sede.coruna.gal",390],["czech-server.cz",391],["hitech-gamer.com",392],["bialettikave.hu",[393,394,395]],["canalplus.com",[396,397,398]],["mader.bz.it",[399,400,401]],["supply.amazon.co.uk",402],["bhaptics.com",403],["cleverbot.com",404],["watchaut.film",405],["tuffaloy.com",406],["fanvue.com",406],["electronoobs.com",407],["xn--lkylen-vxa.se",408],["tiefenthaler-landtechnik.at",409],["tiefenthaler-landtechnik.ch",409],["tiefenthaler-landtechnik.de",409],["varma.fi",410],["vyos.io",411],["digimobil.es",[412,413]],["teenage.engineering",414],["merrell.pl",[415,675]],["converse.pl",415],["shop.wf-education.com",[415,675]],["werkenbijaswatson.nl",416],["converse.com",[417,418]],["buyandapply.nexus.org.uk",419],["img.ly",420],["halonen.fi",[420,452,453,454,455]],["carlson.fi",[420,452,453,454,455]],["cams.ashemaletube.com",[421,422]],["electronicacerler.com",[423,424,425]],["okpoznan.pl",[426,431]],["ielts.idp.com",427],["ielts.co.nz",427],["ielts.com.au",427],["einfach-einreichen.de",[428,429,430]],["endlesstools.io",432],["mbhszepkartya.hu",433],["casellimoveis.com.br",434],["embedplus.com",435],["e-file.pl",436],["sp215.info",437],["empik.com",438],["senda.pl",439],["befestigungsfuchs.de",440],["cut-tec.co.uk",441],["gaytimes.co.uk",442],["statisticsanddata.org",443],["hello.one",444],["paychex.com",445],["wildcat-koeln.de",446],["libraries.merton.gov.uk",[447,448]],["tommy.hr",[449,450]],["usit.uio.no",451],["demo-digital-twin.r-stahl.com",456],["la31devalladolid.com",[457,458]],["mx.com",459],["foxtrail.fjallraven.com",460],["dotwatcher.cc",461],["bazarchic.com",[462,463,464]],["seedrs.com",465],["mypensiontracker.co.uk",466],["praxisplan.at",[466,488]],["endclothing.com",467],["esimplus.me",468],["cineplanet.com.pe",469],["ecologi.com",470],["wamba.com",471],["eurac.edu",472],["akasaair.com",473],["rittal.com",474],["worstbassist.com",[475,476,477,478,479,480]],["zs-watch.com",481],["crown.com",482],["mesanalyses.fr",483],["teket.jp",484],["fish.shimano.com",[485,486,487]],["simsherpa.com",[489,490,491]],["translit.ru",492],["aruba.com",493],["aireuropa.com",494],["skfbearingselect.com",[495,496]],["scanrenovation.com",497],["ttela.se",498],["dominospizza.pl",499],["devagroup.pl",500],["secondsol.com",501],["angelifybeauty.com",502],["cotopaxi.com",503],["justjoin.it",504],["digibest.pt",505],["two-notes.com",506],["theverge.com",507],["daimant.co",508],["secularism.org.uk",509],["karriere-hamburg.de",510],["musicmap.info",511],["gasspisen.se",512],["medtube.pl",513],["medtube.es",513],["medtube.fr",513],["medtube.net",513],["standard.sk",514],["linmot.com",515],["larian.com",[515,798]],["s-court.me",515],["containerandpackaging.com",516],["top-yp.de",517],["termania.net",518],["account.nowpayments.io",519],["fizjobaza.pl",520],["gigasport.at",521],["gigasport.de",521],["gigasport.ch",521],["velleahome.gr",522],["nicequest.com",523],["handelsbanken.no",524],["handelsbanken.com",524],["handelsbanken.co.uk",524],["handelsbanken.se",[524,603]],["handelsbanken.dk",524],["handelsbanken.fi",524],["songtradr.com",[525,782]],["logo.pt",[526,527]],["flexwhere.co.uk",[528,529]],["flexwhere.de",[528,529]],["pricewise.nl",528],["getunleash.io",528],["dentmania.de",528],["free.navalny.com",528],["latoken.com",528],["campusbrno.cz",[531,532,533]],["secrid.com",534],["etsy.com",535],["careers.cloud.com",535],["blablacar.rs",536],["blablacar.ru",536],["blablacar.com.tr",536],["blablacar.com.ua",536],["blablacar.com.br",536],["seb.se",537],["sebgroup.com",537],["deps.dev",538],["buf.build",539],["starofservice.com",540],["ytcomment.kmcat.uk",541],["gmx.com",542],["gmx.fr",542],["karofilm.ru",543],["octopusenergy.it",544],["octopusenergy.es",[544,545]],["justanswer.es",546],["justanswer.de",546],["justanswer.com",546],["justanswer.co.uk",546],["citilink.ru",547],["huutokaupat.com",548],["kaggle.com",549],["emr.ch",[550,555]],["gem.cbc.ca",551],["pumatools.hu",552],["ici.tou.tv",553],["crunchyroll.com",554],["mayflex.com",556],["clipchamp.com",556],["trouwenbijfletcher.nl",556],["fletcher.nl",556],["fletcherzakelijk.nl",556],["intermatic.com",556],["ebikelohr.de",557],["eurosender.com",558],["melectronics.ch",559],["guard.io",560],["nokportalen.se",561],["dokiliko.com",562],["valamis.com",[563,564,565]],["sverigesingenjorer.se",566],["shop.almawin.de",[567,568,569,606]],["zeitzurtrauer.de",570],["skaling.de",[571,572,573]],["bringmeister.de",574],["gdx.net",575],["clearblue.com",576],["drewag.de",[577,578,579]],["enso.de",[577,578,579]],["buidlbox.io",577],["helitransair.com",580],["more.com",581],["nwslsoccer.com",581],["climatecentral.org",582],["resolution.de",583],["flagma.by",584],["eatsalad.com",585],["pacstall.dev",586],["web2.0calc.fr",587],["de-appletradein.likewize.com",588],["swissborg.com",589],["qwice.com",590],["canalpluskuchnia.pl",[591,592]],["uizard.io",593],["stmas.bayern.de",[594,597]],["novayagazeta.eu",595],["kinopoisk.ru",596],["yandex.ru",596],["go.netia.pl",[598,599]],["polsatboxgo.pl",[598,599]],["ing.it",[600,601]],["ing.nl",602],["youcom.com.br",604],["rule34.paheal.net",605],["deep-shine.de",606],["shop.ac-zaun-center.de",606],["kellermann-online.com",606],["kletterkogel.de",606],["pnel.de",606],["korodrogerie.de",606],["der-puten-shop.de",606],["katapult-shop.de",606],["evocsports.com",606],["esm-computer.de",606],["calmwaters.de",606],["mellerud.de",606],["akustik-projekt.at",606],["vansprint.de",606],["0815.at",606],["0815.eu",606],["ojskate.com",606],["der-schweighofer.de",606],["tz-bedarf.de",606],["zeinpharma.de",606],["weicon.com",606],["dagvandewebshop.be",606],["thiele-tee.de",606],["carbox.de",606],["riapsport.de",606],["trendpet.de",606],["eheizung24.de",606],["seemueller.com",606],["vivande.de",606],["heidegrill.com",606],["gladiator-fightwear.com",606],["h-andreas.com",606],["pp-parts.com",606],["natuerlich-holzschuhe.de",606],["massivart.de",606],["malermeister-shop.de",606],["imping-confiserie.de",606],["lenox-trading.at",606],["cklenk.de",606],["catolet.de",606],["drinkitnow.de",606],["patisserie-m.de",606],["storm-proof.com",606],["balance-fahrradladen.de",606],["magicpos.shop",606],["zeinpharma.com",606],["sps-handel.net",606],["novagenics.com",606],["butterfly-circus.de",606],["holzhof24.de",606],["w6-wertarbeit.de",606],["fleurop.de",606],["leki.com",606],["extremeaudio.de",606],["taste-market.de",606],["delker-optik.de",606],["stuhl24-shop.de",606],["g-nestle.de",606],["alpine-hygiene.ch",606],["fluidmaster.it",606],["cordon.de",606],["belisse-beauty.de",606],["belisse-beauty.co.uk",606],["wpc-shop24.de",606],["liv.si",606],["maybach-luxury.com",606],["leiternprofi24.de",606],["hela-shop.eu",606],["hitado.de",606],["armedangels.com",[606,682,683]],["hofer-kerzen.at",607],["karls-shop.de",608],["luvly.care",609],["firmen.wko.at",609],["byggern.no",610],["donauauen.at",611],["woltair.cz",612],["rostics.ru",613],["hife.es",614],["lilcat.com",615],["hot.si",[616,617,618,619]],["crenolibre.fr",620],["e-pole.pl",621],["dopt.com",622],["keb-automation.com",623],["bonduelle.ru",624],["oxfordonlineenglish.com",625],["pccomponentes.fr",626],["pccomponentes.com",626],["pccomponentes.pt",626],["grants.at",627],["africa-uninet.at",627],["rqb.at",627],["youngscience.at",627],["oead.at",627],["innovationsstiftung-bildung.at",627],["etwinning.at",627],["arqa-vet.at",627],["zentrumfuercitizenscience.at",627],["vorstudienlehrgang.at",627],["erasmusplus.at",627],["jeger.pl",628],["bo.de",629],["thegamingwatcher.com",630],["norlysplay.dk",631],["plusujemy.pl",632],["asus.com.cn",[633,635]],["zentalk.asus.com",[633,635]],["mubi.com",634],["59northwheels.se",636],["photospecialist.co.uk",637],["foto-gregor.de",637],["kamera-express.de",637],["kamera-express.be",637],["kamera-express.nl",637],["kamera-express.fr",637],["kamera-express.lu",637],["dhbbank.com",638],["dhbbank.de",638],["dhbbank.be",638],["dhbbank.nl",638],["login.ingbank.pl",639],["fabrykacukiernika.pl",[640,641]],["peaks.com",642],["3landesmuseen-braunschweig.de",643],["unifachbuch.de",[644,645,646]],["playlumi.com",[647,648,649]],["chatfuel.com",650],["studio3t.com",[651,652,653,654]],["realgap.co.uk",[655,656,657,658]],["hotelborgia.com",[659,660]],["sweet24.de",661],["zwembaddekouter.be",662],["flixclassic.pl",663],["jobtoday.com",664],["deltatre.com",[665,666,680]],["withings.com",[667,668,669]],["blista.de",[670,671]],["hashop.nl",672],["gift.be",[673,674]],["elevator.de",675],["foryouehealth.de",675],["animaze.us",675],["penn-elcom.com",675],["curantus.de",675],["mtbmarket.de",675],["spanienweinonline.ch",675],["novap.fr",675],["bizkaia.eus",[676,677,678]],["sinparty.com",679],["mantel.com",681],["e-dojus.lv",684],["burnesspaull.com",685],["oncosur.org",686],["photobooth.online",687],["epidemicsound.com",688],["ryanair.com",689],["refurbished.at",[690,691,692]],["refurbished.nl",[690,691,692]],["refurbished.be",[690,691,692]],["refurbishedstore.de",[690,691,692]],["bayernportal.de",[693,694,695]],["ayudatpymes.com",696],["zipjob.com",696],["plastischechirurgie-muenchen.info",697],["bonn.sitzung-online.de",698],["depop.com",[699,700,701]],["thenounproject.com",702],["pricehubble.com",703],["ilmotorsport.de",704],["karate.com",705],["psbank.ru",705],["myriad.social",705],["exeedme.com",705],["followalice.com",[705,773]],["aqua-store.fr",706],["voila.ca",707],["anastore.com",708],["app.arzt-direkt.de",709],["dasfutterhaus.at",710],["e-pity.pl",711],["fillup.pl",712],["dailymotion.com",713],["barcawelt.de",714],["lueneburger-heide.de",715],["polizei.bayern.de",[716,718]],["ourworldofpixels.com",717],["jku.at",719],["matkahuolto.fi",720],["backmarket.de",[721,722,723]],["backmarket.co.uk",[721,722,723]],["backmarket.es",[721,722,723]],["backmarket.be",[721,722,723]],["backmarket.at",[721,722,723]],["backmarket.fr",[721,722,723]],["backmarket.gr",[721,722,723]],["backmarket.fi",[721,722,723]],["backmarket.ie",[721,722,723]],["backmarket.it",[721,722,723]],["backmarket.nl",[721,722,723]],["backmarket.pt",[721,722,723]],["backmarket.se",[721,722,723]],["backmarket.sk",[721,722,723]],["backmarket.com",[721,722,723]],["eleven-sportswear.cz",[724,725,726]],["silvini.com",[724,725,726]],["silvini.de",[724,725,726]],["purefiji.cz",[724,725,726]],["voda-zdarma.cz",[724,725,726]],["lesgarconsfaciles.com",[724,725,726]],["ulevapronohy.cz",[724,725,726]],["vitalvibe.eu",[724,725,726]],["plavte.cz",[724,725,726]],["mo-tools.cz",[724,725,726]],["flamantonlineshop.cz",[724,725,726]],["sandratex.cz",[724,725,726]],["norwayshop.cz",[724,725,726]],["3d-foto.cz",[724,725,726]],["neviditelnepradlo.cz",[724,725,726]],["nutrimedium.com",[724,725,726]],["silvini.cz",[724,725,726]],["karel.cz",[724,725,726]],["silvini.sk",[724,725,726]],["book-n-drive.de",727],["cotswoldoutdoor.com",728],["cotswoldoutdoor.ie",728],["cam.start.canon",729],["usnews.com",730],["researchaffiliates.com",731],["singkinderlieder.de",732],["stiegeler.com",733],["ba.com",[736,737,738,739,740,741,742]],["britishairways.com",[736,737,738,739,740,741,742]],["cineman.pl",[743,744,745]],["tv-trwam.pl",[743,744,745,746]],["qatarairways.com",[747,748,749,750,751]],["wedding.pl",752],["vivaldi.com",753],["emuia1.gugik.gov.pl",754],["nike.com",755],["adidas.at",756],["adidas.be",756],["adidas.ca",756],["adidas.ch",756],["adidas.cl",756],["adidas.co",756],["adidas.co.in",756],["adidas.co.kr",756],["adidas.co.nz",756],["adidas.co.th",756],["adidas.co.uk",756],["adidas.com",756],["adidas.com.ar",756],["adidas.com.au",756],["adidas.com.br",756],["adidas.com.my",756],["adidas.com.ph",756],["adidas.com.vn",756],["adidas.cz",756],["adidas.de",756],["adidas.dk",756],["adidas.es",756],["adidas.fi",756],["adidas.fr",756],["adidas.gr",756],["adidas.ie",756],["adidas.it",756],["adidas.mx",756],["adidas.nl",756],["adidas.no",756],["adidas.pe",756],["adidas.pl",756],["adidas.pt",756],["adidas.ru",756],["adidas.se",756],["adidas.sk",756],["colourbox.com",757],["ebilet.pl",758],["myeventeo.com",759],["snap.com",760],["louwman.nl",[761,762]],["ratemyprofessors.com",763],["filen.io",764],["leotrippi.com",765],["restaurantclub.pl",765],["context.news",765],["queisser.de",765],["grandprixradio.dk",[766,767,768,769,770]],["grandprixradio.nl",[766,767,768,769,770]],["grandprixradio.be",[766,767,768,769,770]],["businessclass.com",771],["quantamagazine.org",772],["hellotv.nl",774],["jisc.ac.uk",775],["lasestrellas.tv",776],["xn--digitaler-notenstnder-m2b.com",777],["schoonmaakgroothandelemmen.nl",777],["nanuko.de",777],["hair-body-24.de",777],["shopforyou47.de",777],["kreativverliebt.de",777],["anderweltverlag.com",777],["octavio-shop.com",777],["forcetools-kepmar.eu",777],["fantecshop.de",777],["hexen-werkstatt.shop",777],["shop-naturstrom.de",777],["biona-shop.de",777],["camokoenig.de",777],["bikepro.de",777],["kaffeediscount.com",777],["vamos-skateshop.com",777],["holland-shop.com",777],["avonika.com",777],["royal-oak.org",778],["hurton.pl",779],["officesuite.com",780],["fups.com",[781,783]],["scienceopen.com",784],["moebel-mahler-siebenlehn.de",[785,786]],["calendly.com",787],["batesenvironmental.co.uk",[788,789]],["ubereats.com",790],["101internet.ru",791],["bein.com",792],["beinsports.com",792],["figshare.com",793],["bitso.com",794],["gallmeister.fr",795],["eco-toimistotarvikkeet.fi",796],["proficient.fi",796],["developer.ing.com",797],["webtrack.dhlglobalmail.com",799],["webtrack.dhlecs.com",799],["ehealth.gov.gr",800],["calvinklein.se",[801,802,803]],["calvinklein.fi",[801,802,803]],["calvinklein.sk",[801,802,803]],["calvinklein.si",[801,802,803]],["calvinklein.ch",[801,802,803]],["calvinklein.ru",[801,802,803]],["calvinklein.com",[801,802,803]],["calvinklein.pt",[801,802,803]],["calvinklein.pl",[801,802,803]],["calvinklein.at",[801,802,803]],["calvinklein.nl",[801,802,803]],["calvinklein.hu",[801,802,803]],["calvinklein.lu",[801,802,803]],["calvinklein.lt",[801,802,803]],["calvinklein.lv",[801,802,803]],["calvinklein.it",[801,802,803]],["calvinklein.ie",[801,802,803]],["calvinklein.hr",[801,802,803]],["calvinklein.fr",[801,802,803]],["calvinklein.es",[801,802,803]],["calvinklein.ee",[801,802,803]],["calvinklein.de",[801,802,803]],["calvinklein.dk",[801,802,803]],["calvinklein.cz",[801,802,803]],["calvinklein.bg",[801,802,803]],["calvinklein.be",[801,802,803]],["calvinklein.co.uk",[801,802,803]],["ofdb.de",804],["dtksoft.com",805],["serverstoplist.com",806],["truecaller.com",807],["protos.com",[811,813,814]],["timhortons.co.th",[811,812,813,815,817,818]],["toyota.co.uk",[811,812,813,816,817,818]],["businessaccountingbasics.co.uk",[811,812,813,815,817,818]],["flickr.org",[811,812,813,815,817,818]],["espacocasa.com",811],["altraeta.it",811],["centrooceano.it",811],["allstoresdigital.com",811],["cultarm3d.de",811],["soulbounce.com",811],["fluidtopics.com",811],["uvetgbt.com",811],["malcorentacar.com",811],["emondo.de",811],["maspero.it",811],["kelkay.com",811],["underground-england.com",811],["vert.eco",811],["turcolegal.com",811],["magnet4blogging.net",811],["moovly.com",811],["automationafrica.co.za",811],["jornaldoalgarve.pt",811],["keravanenergia.fi",811],["kuopas.fi",811],["frag-machiavelli.de",811],["healthera.co.uk",811],["mobeleader.com",811],["powerup-gaming.com",811],["developer-blog.net",811],["medical.edu.mt",811],["deh.mt",811],["bluebell-railway.com",811],["ribescasals.com",811],["javea.com",811],["chinaimportal.com",811],["inds.co.uk",811],["raoul-follereau.org",811],["serramenti-milano.it",811],["cosasdemujer.com",811],["luz-blanca.info",811],["cosasdeviajes.com",811],["safehaven.io",811],["havocpoint.it",811],["motofocus.pl",811],["nomanssky.com",811],["drei-franken-info.de",811],["clausnehring.com",811],["alttab.net",811],["kinderleicht.berlin",811],["kiakkoradio.fi",811],["cosasdelcaribe.es",811],["de-sjove-jokes.dk",811],["serverprofis.de",811],["biographyonline.net",811],["iziconfort.com",811],["sportinnederland.com",811],["natureatblog.com",811],["wtsenergy.com",811],["cosasdesalud.es",811],["internetpasoapaso.com",811],["zurzeit.at",811],["contaspoupanca.pt",811],["steamdeckhq.com",[811,812,813,815,817,818]],["ipouritinc.com",[811,813,815]],["hemglass.se",[811,813,815,817,818]],["sumsub.com",[811,812,813]],["atman.pl",[811,812,813]],["fabriziovanmarciano.com",[811,812,813]],["nationalrail.com",[811,812,813]],["eett.gr",[811,812,813]],["funkypotato.com",[811,812,813]],["equalexchange.co.uk",[811,812,813]],["swnsdigital.com",[811,812,813]],["gogolf.fi",[811,815]],["hanse-haus-greifswald.de",811],["tampereenratikka.fi",[811,813,819,820]],["kymppikatsastus.fi",[813,817,864,865]],["brasiltec.ind.br",821],["doka.com",[822,823,824]],["abi.de",[825,826]],["studienwahl.de",[825,826]],["youthforum.org",827],["journal.hr",[828,829,830,831]],["howstuffworks.com",832],["stickypassword.com",[833,834,835]],["conversion-rate-experts.com",[836,837]],["merkur.si",[838,839,840]],["petitionenligne.com",[841,842]],["petitionenligne.be",[841,842]],["petitionenligne.fr",[841,842]],["petitionenligne.re",[841,842]],["petitionenligne.ch",[841,842]],["skrivunder.net",[841,842]],["petitiononline.uk",[841,842]],["petitions.nz",[841,842]],["petizioni.com",[841,842]],["peticao.online",[841,842]],["skrivunder.com",[841,842]],["peticiones.ar",[841,842]],["petities.com",[841,842]],["petitionen.com",[841,842]],["petice.com",[841,842]],["opprop.net",[841,842]],["peticiok.com",[841,842]],["peticiones.net",[841,842]],["peticion.es",[841,842]],["peticiones.pe",[841,842]],["peticiones.mx",[841,842]],["peticiones.cl",[841,842]],["peticije.online",[841,842]],["peticiones.co",[841,842]],["mediathek.lfv-bayern.de",843],["aluypvc.es",[844,845,846]],["pracuj.pl",[847,848,849,850,851]],["vki.at",853],["konsument.at",853],["chollometro.com",854],["dealabs.com",854],["hotukdeals.com",854],["pepper.it",854],["pepper.pl",854],["preisjaeger.at",854],["mydealz.de",854],["direct.travelinsurance.tescobank.com",[857,858,859,860,861,862,863,864]],["easyfind.ch",[866,867]],["e-shop.leonidas.com",[868,869]],["lastmile.lt",870],["veriff.com",871],["constantin.film",[872,873,874]],["notion.so",875],["omgevingsloketinzage.omgeving.vlaanderen.be",[876,877]],["primor.eu",878],["tameteo.com",879],["tempo.pt",879],["yourweather.co.uk",879],["meteored.cl",879],["meteored.mx",879],["tempo.com",879],["ilmeteo.net",879],["meteored.com.ar",879],["daswetter.com",879],["algarvevacation.net",880],["3sat.de",881],["oxxio.nl",[882,883]],["butterflyshop.dk",[884,885,886]],["praxis.nl",887],["brico.be",887],["kent.gov.uk",[888,889]]]);

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
