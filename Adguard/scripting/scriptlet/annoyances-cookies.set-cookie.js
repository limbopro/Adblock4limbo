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

const argsList = [["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["CookieConsent","necessary"],["airTRFX_cookies","accepted"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["agreesWithCookies","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["CookieConsent","false"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["portal.payment.eltax.lta.go.jp",0],["greenbuildingadvisor.com",[1,2,3]],["finewoodworking.com",[1,2,3]],["privatekeys.pw",4],["srf.nu",5],["airnewzealand.co.nz",6],["solo.io",7],["pomelo.la",8],["ibuypower.com",9],["sberbank.com",[10,391]],["swissmilk.ch",11],["gamemaker.io",12],["pixiv.net",13],["kinemaster.com",14],["sp32bb.pl",15],["jazz.fm",16],["juntadeandalucia.es",17],["melee.gg",[18,19,20]],["chemocare.com",21],["mobiliteit.nl",22],["xledger.net",23],["reviewmeta.com",24],["guide-bordeaux-gironde.com",25],["travelinsured.com",26],["gdpr.twitter.com",27],["mora.hu",28],["confused.com",29],["physikinstrumente.de",30],["karlknauer.de",30],["schoeck.com",30],["resonate.coop",30],["northgatevehiclehire.ie",30],["badhall.at",30],["cic.ch",30],["ilsaggiatore.com",31],["forum.digitalfernsehen.de",32],["bitscrunch.com",[33,34,35]],["hannahgraaf.com",36],["shop.elbers-hof.de",[37,38]],["woolsocks.eu",39],["uza.be",40],["5asec.ch",40],["wizards.com",40],["parkenflughafen.de",41],["radyofenomen.com",42],["elsate.com",43],["hume.ai",44],["lotusantwerp.wacs.online",45],["simeononsecurity.gitbook.io",46],["thehacker.recipes",46],["docs.dyrector.io",46],["makeresearchpay.com",47],["tandartsenpraktijk-simons.tandartsennet.nl",48],["huisartsenpraktijkdoorn.nl",48],["bcorporation.net",49],["knime.com",[49,92]],["quebueno.es",49],["edookit.com",50],["trixonline.be",51],["radio-canada.ca",52],["heysummit.com",53],["puromarketing.com",54],["radicalmotorsport.com",55],["biurobox.pl",56],["cycling74.com",57],["triviacreator.com",58],["freshis.com",58],["anker.com",58],["computacenter.com",59],["playbalatro.com",60],["kastner-oehler.de",61],["kastner-oehler.at",61],["kastner-oehler.ch",61],["twenga.it",62],["twenga.fr",62],["twenga.co.uk",62],["twenga.de",62],["twenga.es",62],["twenga.pl",62],["twenga.nl",62],["twenga.se",62],["olx.kz",63],["efl.com",64],["wst.tv",64],["cuvva.com",65],["vitbikes.de",66],["gourmetfoodstore.com",67],["schulfahrt.de",68],["deutsche-finanzagentur.de",69],["thejazzcafelondon.com",70],["keeb.supply",71],["spb.hh.ru",72],["kaluga.hh.ru",72],["school.hh.ru",72],["rating.hh.ru",72],["novgorod.hh.ru",72],["xxxshemaleporn.com",[73,74]],["gayhits.com",[73,74]],["gaypornvideos.xxx",[73,74]],["sextubespot.com",[73,74]],["wewantjusticedao.org",75],["godbolt.org",76],["projectenglish.com.pl",[77,82]],["ledenicheur.fr",77],["pricespy.co.uk",77],["pricespy.co.nz",77],["sae.fsc.ccoo.es",78],["piusx-college.nl",79],["yoomoney.ru",80],["vod.warszawa.pl",81],["m.twitch.tv",83],["environment.data.gov.uk",84],["playtesting.games",85],["portal.by.aok.de",86],["umlandscout.de",87],["atombank.co.uk",[88,89,90]],["showtv.com.tr",91],["seventhgeneration.com",92],["press.princeton.edu",92],["ldz.lv",92],["crtm.es",93],["airastana.com",94],["vkf-renzel.nl",95],["booking.reederei-zingst.de",[96,97,98]],["booking.weisse-flotte.de",[96,97,98]],["booking2.reederei-hiddensee.de",[96,97,98]],["sanswiss.pl",99],["galaxy.com",100],["petdesk.com",101],["ivyexec.com",102],["railtech.com",103],["lottehotel.com",[104,105,106,107,108]],["paydirekt.de",109],["kijiji.ca",110],["posterstore.fr",111],["posterstore.eu",111],["posterstore.be",111],["posterstore.de",111],["posterstore.hu",111],["posterstore.ie",111],["posterstore.it",111],["posterstore.no",111],["posterstore.nl",111],["posterstore.pl",111],["posterstore.com",111],["posterstore.ae",111],["posterstore.ca",111],["posterstore.nz",111],["posterstore.es",111],["posterstore.kr",111],["posterstore.jp",111],["posterstore.dk",111],["posterstore.se",111],["posterstore.ch",111],["posterstore.at",111],["myriadicity.net",112],["dgsf.org",112],["endgame.id",113],["cashback-cards.ch",114],["swisscard.ch",114],["ahorn24.de",115],["blockdyor.com",116],["ticket.io",117],["omega-nuernberg.servicebund.com",118],["lojaboschferramentas.com.br",[119,121,122]],["shareloft.com",120],["fineartsmuseum.recreatex.be",[123,124,125]],["jaapeden.nl",[123,124,125]],["eboo.lu",126],["lasmallagency.com",127],["lhsystems.com",[128,129,130,131]],["twomates.de",132],["intergiro.com",133],["healthygamer.gg",134],["telepizza.es",[135,136,137]],["telepizza.pt",[135,136,137]],["frisco.pl",138],["tyleenslang.nl",139],["schrikdraad.net",139],["kruiwagen.net",139],["pvcvoordeel.nl",139],["pvcbuis.com",139],["drainagebuizen.nl",139],["likewise.com",140],["longines.com",[141,142,143,144]],["vater-it.de",145],["biano.hu",146],["nadia.gov.gr",147],["hana-book.fr",148],["kzvb.de",149],["correosexpress.com",150],["cexpr.es",150],["rte.ie",151],["smart.com",152],["gry.pl",152],["gamesgames.com",152],["games.co.uk",152],["jetztspielen.de",152],["ourgames.ru",152],["permainan.co.id",152],["gioco.it",152],["jeux.fr",152],["juegos.com",152],["ojogos.com.br",152],["oyunskor.com",152],["spela.se",152],["spelletjes.nl",152],["agame.com",152],["spielen.com",152],["flashgames.ru",152],["games.co.id",152],["giochi.it",152],["jeu.fr",152],["spel.nl",152],["sartor-stoffe.de",153],["rockpoint.cz",153],["rockpoint.sk",153],["parfum-zentrum.de",153],["candy-store.cz",153],["tridge.com",154],["asus.com",[155,156]],["drinksking.sk",157],["neuhauschocolates.com",158],["commandsuite.it",159],["oktea.tw",160],["bafin.de",161],["materna.de",161],["bamf.de",161],["tenvinilo-argentina.com",[162,163]],["eikaforsikring.no",[164,165]],["eurowings.com",[166,167,168]],["newpharma.be",[169,170,171]],["newpharma.fr",[169,170,171]],["newpharma.de",[169,170,171]],["newpharma.at",[169,170,171]],["newpharma.nl",[169,170,171]],["kapoorwatch.com",172],["instantoffices.com",173],["paf.se",173],["citibank.pl",173],["citibankonline.pl",173],["azertyfactor.be",174],["zelezodum.cz",175],["thw.de",176],["bafa.de",176],["bka.de",176],["bmbf.de",176],["weather.com",177],["bolist.se",[178,179]],["project529.com",179],["evivanlanschot.nl",180],["prenatal.nl",181],["onnibus.com",[181,818,819,820]],["kyoceradocumentsolutions.us",[181,865,866]],["kyoceradocumentsolutions.ch",[181,865,866]],["kyoceradocumentsolutions.co.uk",[181,865,866]],["kyoceradocumentsolutions.de",[181,865,866]],["kyoceradocumentsolutions.es",[181,865,866]],["kyoceradocumentsolutions.eu",[181,865,866]],["kyoceradocumentsolutions.fr",[181,865,866]],["kyoceradocumentsolutions.it",[181,865,866]],["kyoceradocumentsolutions.ru",[181,865,866]],["kyoceradocumentsolutions.mx",[181,865,866]],["kyoceradocumentsolutions.cl",[181,865,866]],["kyoceradocumentsolutions.com.br",[181,865,866]],["wagner-tuning.com",[182,183,184,185]],["waitrosecellar.com",[186,187,188,189]],["waitrose.com",[186,540]],["kvk.nl",[190,191,192]],["macfarlanes.com",193],["pole-emploi.fr",194],["gardenmediaguild.co.uk",195],["samplerite.com",196],["samplerite.cn",196],["sororedit.com",197],["blukit.com.br",198],["biegnaszczyt.pl",199],["staff-gallery.com",200],["itv.com",201],["dvag.de",202],["premierinn.com",[203,204,205,206]],["whitbreadinns.co.uk",[203,204,205,206]],["barandblock.co.uk",[203,204,205,206]],["tabletable.co.uk",[203,204,205,206]],["brewersfayre.co.uk",[203,204,205,206]],["beefeater.co.uk",[203,204,205,206]],["allstarssportsbars.co.uk",[207,208]],["babiesrus.ca",209],["toysrus.ca",209],["roomsandspaces.ca",209],["athletic-club.eus",[210,211,212]],["wattoo.dk",213],["wattoo.no",213],["texthelp.com",[214,215]],["courierexchange.co.uk",[216,217,218]],["haulageexchange.co.uk",[216,217,218]],["ecaytrade.com",219],["powerball.com",220],["tlaciarik.sk",220],["tiskarik.cz",220],["sseriga.edu",[221,222]],["rt.com",223],["swrng.de",224],["crfop.gdos.gov.pl",225],["nurgutes.de",226],["kpcen-torun.edu.pl",227],["opintopolku.fi",228],["app.erevie.pl",229],["debenhams.com",230],["archiwumalle.pl",231],["konicaminolta.ca",232],["konicaminolta.us",232],["deutschebank-dbdirect.com",[233,234,235]],["dbonline.deutsche-bank.es",[233,234,235]],["deutsche-bank.es",[233,234,235]],["hipotecaonline.db.com",236],["kangasalansanomat.fi",237],["eif.org",238],["tunnelmb.net",238],["sugi-net.jp",239],["understandingsociety.ac.uk",240],["leibniz.com",241],["horecaworld.biz",[241,509]],["horecaworld.be",[241,509]],["bettertires.com",241],["electroprecio.com",241],["autohero.com",241],["computerbase.de",[241,862]],["sistemacomponentes.com.br",242],["bargaintown.ie",243],["tui.nl",244],["doppelmayr.com",245],["case-score.com",[246,247]],["cote.co.uk",248],["finimize.com",248],["blxxded.com",249],["rtu.lv",250],["sysdream.com",251],["cinemarkca.com",252],["neander-zahn.de",253],["theadelphileeds.co.uk",254],["tobycarvery.co.uk",254],["carsupermarket.com",254],["viajesatodotren.com",255],["ticketingcine.fr",256],["agenziavista.it",257],["e-chladiva.cz",257],["bitecode.dev",258],["mjob.si",[259,260,261]],["airportrentacar.gr",262],["mobile-fueling.de",262],["plos.org",263],["autohaus24.de",264],["sixt-neuwagen.de",264],["gadis.es",[265,266]],["dom.ru",266],["ford-kimmerle-reutlingen.de",267],["autohaus-reitermayer.de",267],["autohaus-diefenbach-waldbrunn.de",267],["autohaus-diefenbach.de",267],["autohaus-musberg.de",267],["ford-ah-im-hunsrueck-simmern.de",267],["ford-arndt-goerlitz.de",267],["ford-autogalerie-alfeld.de",267],["ford-bacher-schrobenhausen.de",267],["ford-bathauer-bad-harzburg.de",267],["ford-behrend-waren.de",267],["ford-bergland-frankfurt-oder.de",267],["ford-bergland-wipperfuerth.de",267],["ford-besico-glauchau.de",267],["ford-besico-nuernberg.de",267],["ford-bischoff-neumuenster.de",267],["ford-bodach-borgentreich.de",267],["ford-bunk-saarbruecken.de",267],["ford-bunk-voelklingen.de",267],["ford-busch-kirchberg.de",267],["ford-diermeier-muenchen.de",267],["ford-dinnebier-leipzig.de",267],["ford-duennes-regensburg.de",267],["ford-fischer-bochum.de",267],["ford-fischer-muenster.de",267],["ford-foerster-koblenz.de",267],["ford-fuchs-uffenheim.de",267],["ford-geberzahn-koeln.de",267],["ford-gerstmann-duesseldorf.de",267],["ford-haefner-und-strunk-kassel.de",267],["ford-hartmann-kempten.de",267],["ford-hartmann-rastatt.de",267],["ford-hatzner-karlsruhe.de",267],["ford-heine-hoexter.de",267],["ford-hentschel-hildesheim.de",267],["ford-hessengarage-dreieich.de",267],["ford-hessengarage-frankfurt.de",267],["ford-hga-windeck.de",267],["ford-hommert-coburg.de",267],["ford-horstmann-rastede.de",267],["ford-janssen-sonsbeck.de",267],["ford-jochem-stingbert.de",267],["ford-jungmann-wuppertal.de",267],["ford-kestel-marktzeuln.de",267],["ford-klaiber-bad-friedrichshall.de",267],["ford-koenig-eschwege.de",267],["ford-kohlhoff-mannheim.de",267],["ford-kt-automobile-coesfeld.de",267],["ford-lackermann-wesel.de",267],["ford-ludewig-delligsen.de",267],["ford-maiwald-linsengericht.de",267],["ford-mertens-beckum.de",267],["ford-meyer-bad-oeynhausen.de",267],["ford-mgs-bayreuth.de",267],["ford-mgs-radebeul.de",267],["ford-muecke-berlin.de",267],["ford-norren-weissenthurm.de",267],["ford-nrw-garage-duesseldorf.de",267],["ford-nrw-garage-handweiser.de",267],["ford-nuding-remshalden.de",267],["ford-ohm-rendsburg.de",267],["ford-reinicke-muecheln.de",267],["ford-rennig.de",267],["ford-roerentrop-luenen.de",267],["ford-schankola-dudweiler.de",267],["ford-sg-goeppingen.de",267],["ford-sg-leonberg.de",267],["ford-sg-neu-ulm.de",267],["ford-sg-pforzheim.de",267],["ford-sg-waiblingen.de",267],["ford-storz-st-georgen.de",267],["ford-strunk-koeln.de",267],["ford-tobaben-hamburg.de",267],["ford-toenjes-zetel.de",267],["ford-wagner-mayen.de",267],["ford-wahl-fritzlar.de",267],["ford-wahl-siegen.de",267],["ford-weege-bad-salzuflen.de",267],["ford-westhoff-hamm.de",267],["ford-wieland-hasbergen.de",267],["renault-autocenterprignitz-pritzwalk.de",267],["renault-spenrath-juelich.de",267],["vitalllit.com",268],["fincaparera.com",268],["dbnetbcn.com",268],["viba.barcelona",268],["anafaustinoatelier.com",268],["lamparasherrero.com",268],["calteixidor.cat",268],["argentos.barcelona",268],["anmarlube.com",268],["anynouxines.barcelona",268],["crearunapaginaweb.cat",268],["cualesmiip.com",268],["porndoe.com",[269,270,271]],["thinkingaustralia.com",272],["elrow.com",273],["ownit.se",274],["velo-antwerpen.be",[275,276]],["wwnorton.com",277],["pc-canada.com",278],["mullgs.se",279],["1a-sehen.de",280],["feature.fm",281],["comte.com",282],["baltic-watches.com",283],["np-brijuni.hr",283],["vilgain.com",283],["tradingview.com",284],["wevolver.com",285],["experienciasfree.com",286],["freemans.com",287],["kivikangas.fi",288],["lumingerie.com",288],["melkkobrew.fi",288],["kh.hu",[289,290,291]],["aplgo.com",292],["securityconference.org",293],["aha.or.at",[294,297]],["fantasyfitnessing.com",295],["chocolateemporium.com",296],["account.samsung.com",298],["crushwineco.com",299],["levi.pt",300],["fertagus.pt",301],["smiggle.co.uk",302],["ubisoft.com",[303,304,305,306]],["store.ubisoft.com",[303,306,744,745]],["thulb.uni-jena.de",307],["splityourticket.co.uk",308],["eramba.org",309],["openai.com",[310,311]],["kupbilecik.com",[312,313]],["kupbilecik.de",[312,313]],["kupbilecik.pl",[312,313]],["shopilya.com",314],["arera.it",315],["haustier-berater.de",315],["hfm-frankfurt.de",315],["zoommer.ge",316],["studentapan.se",317],["petcity.lt",[318,319,320,321]],["tobroco.com",[322,326]],["tobroco.nl",[322,326]],["tobroco-giant.com",[322,326]],["geosfreiberg.de",[323,324]],["eapvic.org",325],["bassolsenergia.com",325],["bammusic.com",[327,329,330]],["green-24.de",328],["phish-test.de",331],["bokadirekt.se",332],["ford.lt",333],["ford.pt",333],["ford.fr",333],["ford.de",333],["ford.dk",333],["ford.pl",333],["ford.se",333],["ford.nl",333],["ford.no",333],["ford.fi",333],["ford.gr",333],["ford.it",333],["data-media.gr",334],["e-food.gr",[335,336]],["bvmed.de",337],["babyshop.com",[338,339,340]],["griffbereit24.de",341],["checkwx.com",342],["calendardate.com",343],["wefashion.ch",344],["wefashion.fr",344],["wefashion.lu",344],["wefashion.be",344],["wefashion.de",344],["wefashion.nl",344],["brettspiel-angebote.de",[345,346]],["nio.com",347],["kancelarskepotreby.net",[348,349,350]],["segment-anything.com",351],["sketch.metademolab.com",352],["cambridgebs.co.uk",353],["freizeitbad-greifswald.de",354],["giuseppezanotti.com",[355,356,357]],["xcen.se",357],["biggreenegg.co.uk",358],["skihuette-oberbeuren.de",[359,360,361]],["pwsweather.com",362],["xfree.com",363],["theweathernetwork.com",[364,365]],["monese.com",[366,367,368]],["assos.com",366],["helmut-fischer.com",369],["myscience.org",370],["7-eleven.com",371],["airwallex.com",372],["streema.com",373],["gov.lv",374],["tise.com",375],["codecamps.com",376],["avell.com.br",377],["moneyfarm.com",378],["app.moneyfarm.com",378],["simpl.rent",379],["hubspot.com",380],["prodyna.com",[381,382,383,384]],["zutobi.com",[381,382,383,384]],["calm.com",[385,386]],["pubgesports.com",[387,388,389]],["outwrite.com",390],["sbermarket.ru",392],["atani.com",[393,394,395]],["croisieresendirect.com",396],["bgextras.co.uk",397],["sede.coruna.gal",398],["czech-server.cz",399],["hitech-gamer.com",400],["bialettikave.hu",[401,402,403]],["canalplus.com",[404,405,406]],["mader.bz.it",[407,408,409]],["supply.amazon.co.uk",410],["bhaptics.com",411],["cleverbot.com",412],["watchaut.film",413],["tuffaloy.com",414],["fanvue.com",414],["electronoobs.com",415],["xn--lkylen-vxa.se",416],["tiefenthaler-landtechnik.at",417],["tiefenthaler-landtechnik.ch",417],["tiefenthaler-landtechnik.de",417],["varma.fi",418],["vyos.io",419],["digimobil.es",[420,421]],["teenage.engineering",422],["merrell.pl",[423,685]],["converse.pl",423],["shop.wf-education.com",[423,685]],["werkenbijaswatson.nl",424],["converse.com",[425,426]],["buyandapply.nexus.org.uk",427],["img.ly",428],["halonen.fi",[428,460,461,462,463]],["carlson.fi",[428,460,461,462,463]],["cams.ashemaletube.com",[429,430]],["electronicacerler.com",[431,432,433]],["okpoznan.pl",[434,439]],["ielts.idp.com",435],["ielts.co.nz",435],["ielts.com.au",435],["einfach-einreichen.de",[436,437,438]],["endlesstools.io",440],["mbhszepkartya.hu",441],["casellimoveis.com.br",442],["embedplus.com",443],["e-file.pl",444],["sp215.info",445],["empik.com",446],["senda.pl",447],["befestigungsfuchs.de",448],["cut-tec.co.uk",449],["gaytimes.co.uk",450],["statisticsanddata.org",451],["hello.one",452],["paychex.com",453],["wildcat-koeln.de",454],["libraries.merton.gov.uk",[455,456]],["tommy.hr",[457,458]],["usit.uio.no",459],["demo-digital-twin.r-stahl.com",464],["la31devalladolid.com",[465,466]],["mx.com",467],["foxtrail.fjallraven.com",468],["dotwatcher.cc",469],["bazarchic.com",[470,471,472]],["seedrs.com",473],["mypensiontracker.co.uk",474],["praxisplan.at",[474,496]],["endclothing.com",475],["esimplus.me",476],["cineplanet.com.pe",477],["ecologi.com",478],["wamba.com",479],["eurac.edu",480],["akasaair.com",481],["rittal.com",482],["worstbassist.com",[483,484,485,486,487,488]],["zs-watch.com",489],["crown.com",490],["mesanalyses.fr",491],["teket.jp",492],["fish.shimano.com",[493,494,495]],["simsherpa.com",[497,498,499]],["translit.ru",500],["aruba.com",501],["aireuropa.com",502],["skfbearingselect.com",[503,504]],["scanrenovation.com",505],["ttela.se",506],["dominospizza.pl",507],["devagroup.pl",508],["secondsol.com",509],["angelifybeauty.com",510],["cotopaxi.com",511],["justjoin.it",512],["digibest.pt",513],["two-notes.com",514],["theverge.com",515],["daimant.co",516],["secularism.org.uk",517],["karriere-hamburg.de",518],["musicmap.info",519],["gasspisen.se",520],["medtube.pl",521],["medtube.es",521],["medtube.fr",521],["medtube.net",521],["standard.sk",522],["linmot.com",523],["larian.com",[523,808]],["s-court.me",523],["containerandpackaging.com",524],["top-yp.de",525],["termania.net",526],["account.nowpayments.io",527],["fizjobaza.pl",528],["gigasport.at",529],["gigasport.de",529],["gigasport.ch",529],["velleahome.gr",530],["nicequest.com",531],["handelsbanken.no",532],["handelsbanken.com",532],["handelsbanken.co.uk",532],["handelsbanken.se",[532,613]],["handelsbanken.dk",532],["handelsbanken.fi",532],["ilarahealth.com",533],["songtradr.com",[534,792]],["logo.pt",[535,536]],["flexwhere.co.uk",[537,539]],["flexwhere.de",[537,539]],["pricewise.nl",537],["getunleash.io",537],["dentmania.de",537],["free.navalny.com",537],["latoken.com",537],["empathy.com",538],["labs.epi2me.io",538],["campusbrno.cz",[541,542,543]],["secrid.com",544],["etsy.com",545],["careers.cloud.com",545],["blablacar.rs",546],["blablacar.ru",546],["blablacar.com.tr",546],["blablacar.com.ua",546],["blablacar.com.br",546],["seb.se",547],["sebgroup.com",547],["deps.dev",548],["buf.build",549],["starofservice.com",550],["ytcomment.kmcat.uk",551],["gmx.com",552],["gmx.fr",552],["karofilm.ru",553],["octopusenergy.it",554],["octopusenergy.es",[554,555]],["justanswer.es",556],["justanswer.de",556],["justanswer.com",556],["justanswer.co.uk",556],["citilink.ru",557],["huutokaupat.com",558],["kaggle.com",559],["emr.ch",[560,565]],["gem.cbc.ca",561],["pumatools.hu",562],["ici.tou.tv",563],["crunchyroll.com",564],["mayflex.com",566],["clipchamp.com",566],["trouwenbijfletcher.nl",566],["fletcher.nl",566],["fletcherzakelijk.nl",566],["intermatic.com",566],["ebikelohr.de",567],["eurosender.com",568],["melectronics.ch",569],["guard.io",570],["nokportalen.se",571],["dokiliko.com",572],["valamis.com",[573,574,575]],["sverigesingenjorer.se",576],["shop.almawin.de",[577,578,579,616]],["zeitzurtrauer.de",580],["skaling.de",[581,582,583]],["bringmeister.de",584],["gdx.net",585],["clearblue.com",586],["drewag.de",[587,588,589]],["enso.de",[587,588,589]],["buidlbox.io",587],["helitransair.com",590],["more.com",591],["nwslsoccer.com",591],["climatecentral.org",592],["resolution.de",593],["flagma.by",594],["eatsalad.com",595],["pacstall.dev",596],["web2.0calc.fr",597],["de-appletradein.likewize.com",598],["swissborg.com",599],["qwice.com",600],["canalpluskuchnia.pl",[601,602]],["uizard.io",603],["stmas.bayern.de",[604,607]],["novayagazeta.eu",605],["kinopoisk.ru",606],["yandex.ru",606],["go.netia.pl",[608,609]],["polsatboxgo.pl",[608,609]],["ing.it",[610,611]],["ing.nl",612],["youcom.com.br",614],["rule34.paheal.net",615],["deep-shine.de",616],["shop.ac-zaun-center.de",616],["kellermann-online.com",616],["kletterkogel.de",616],["pnel.de",616],["korodrogerie.de",616],["der-puten-shop.de",616],["katapult-shop.de",616],["evocsports.com",616],["esm-computer.de",616],["calmwaters.de",616],["mellerud.de",616],["akustik-projekt.at",616],["vansprint.de",616],["0815.at",616],["0815.eu",616],["ojskate.com",616],["der-schweighofer.de",616],["tz-bedarf.de",616],["zeinpharma.de",616],["weicon.com",616],["dagvandewebshop.be",616],["thiele-tee.de",616],["carbox.de",616],["riapsport.de",616],["trendpet.de",616],["eheizung24.de",616],["seemueller.com",616],["vivande.de",616],["heidegrill.com",616],["gladiator-fightwear.com",616],["h-andreas.com",616],["pp-parts.com",616],["natuerlich-holzschuhe.de",616],["massivart.de",616],["malermeister-shop.de",616],["imping-confiserie.de",616],["lenox-trading.at",616],["cklenk.de",616],["catolet.de",616],["drinkitnow.de",616],["patisserie-m.de",616],["storm-proof.com",616],["balance-fahrradladen.de",616],["magicpos.shop",616],["zeinpharma.com",616],["sps-handel.net",616],["novagenics.com",616],["butterfly-circus.de",616],["holzhof24.de",616],["w6-wertarbeit.de",616],["fleurop.de",616],["leki.com",616],["extremeaudio.de",616],["taste-market.de",616],["delker-optik.de",616],["stuhl24-shop.de",616],["g-nestle.de",616],["alpine-hygiene.ch",616],["fluidmaster.it",616],["cordon.de",616],["belisse-beauty.de",616],["belisse-beauty.co.uk",616],["wpc-shop24.de",616],["liv.si",616],["maybach-luxury.com",616],["leiternprofi24.de",616],["hela-shop.eu",616],["hitado.de",616],["armedangels.com",[616,692,693]],["hofer-kerzen.at",617],["karls-shop.de",618],["luvly.care",619],["firmen.wko.at",619],["byggern.no",620],["donauauen.at",621],["woltair.cz",622],["rostics.ru",623],["hife.es",624],["lilcat.com",625],["hot.si",[626,627,628,629]],["crenolibre.fr",630],["e-pole.pl",631],["dopt.com",632],["keb-automation.com",633],["bonduelle.ru",634],["oxfordonlineenglish.com",635],["pccomponentes.fr",636],["pccomponentes.com",636],["pccomponentes.pt",636],["grants.at",637],["africa-uninet.at",637],["rqb.at",637],["youngscience.at",637],["oead.at",637],["innovationsstiftung-bildung.at",637],["etwinning.at",637],["arqa-vet.at",637],["zentrumfuercitizenscience.at",637],["vorstudienlehrgang.at",637],["erasmusplus.at",637],["jeger.pl",638],["bo.de",639],["thegamingwatcher.com",640],["norlysplay.dk",641],["plusujemy.pl",642],["asus.com.cn",[643,645]],["zentalk.asus.com",[643,645]],["mubi.com",644],["59northwheels.se",646],["photospecialist.co.uk",647],["foto-gregor.de",647],["kamera-express.de",647],["kamera-express.be",647],["kamera-express.nl",647],["kamera-express.fr",647],["kamera-express.lu",647],["dhbbank.com",648],["dhbbank.de",648],["dhbbank.be",648],["dhbbank.nl",648],["login.ingbank.pl",649],["fabrykacukiernika.pl",[650,651]],["peaks.com",652],["3landesmuseen-braunschweig.de",653],["unifachbuch.de",[654,655,656]],["playlumi.com",[657,658,659]],["chatfuel.com",660],["studio3t.com",[661,662,663,664]],["realgap.co.uk",[665,666,667,668]],["hotelborgia.com",[669,670]],["sweet24.de",671],["zwembaddekouter.be",672],["flixclassic.pl",673],["jobtoday.com",674],["deltatre.com",[675,676,690]],["withings.com",[677,678,679]],["blista.de",[680,681]],["hashop.nl",682],["gift.be",[683,684]],["elevator.de",685],["foryouehealth.de",685],["animaze.us",685],["penn-elcom.com",685],["curantus.de",685],["mtbmarket.de",685],["spanienweinonline.ch",685],["novap.fr",685],["bizkaia.eus",[686,687,688]],["sinparty.com",689],["mantel.com",691],["e-dojus.lv",694],["burnesspaull.com",695],["oncosur.org",696],["photobooth.online",697],["epidemicsound.com",698],["ryanair.com",699],["refurbished.at",[700,701,702]],["refurbished.nl",[700,701,702]],["refurbished.be",[700,701,702]],["refurbishedstore.de",[700,701,702]],["bayernportal.de",[703,704,705]],["ayudatpymes.com",706],["zipjob.com",706],["plastischechirurgie-muenchen.info",707],["bonn.sitzung-online.de",708],["depop.com",[709,710,711]],["thenounproject.com",712],["pricehubble.com",713],["ilmotorsport.de",714],["karate.com",715],["psbank.ru",715],["myriad.social",715],["exeedme.com",715],["followalice.com",[715,783]],["aqua-store.fr",716],["voila.ca",717],["anastore.com",718],["app.arzt-direkt.de",719],["dasfutterhaus.at",720],["e-pity.pl",721],["fillup.pl",722],["dailymotion.com",723],["barcawelt.de",724],["lueneburger-heide.de",725],["polizei.bayern.de",[726,728]],["ourworldofpixels.com",727],["jku.at",729],["matkahuolto.fi",730],["backmarket.de",[731,732,733]],["backmarket.co.uk",[731,732,733]],["backmarket.es",[731,732,733]],["backmarket.be",[731,732,733]],["backmarket.at",[731,732,733]],["backmarket.fr",[731,732,733]],["backmarket.gr",[731,732,733]],["backmarket.fi",[731,732,733]],["backmarket.ie",[731,732,733]],["backmarket.it",[731,732,733]],["backmarket.nl",[731,732,733]],["backmarket.pt",[731,732,733]],["backmarket.se",[731,732,733]],["backmarket.sk",[731,732,733]],["backmarket.com",[731,732,733]],["eleven-sportswear.cz",[734,735,736]],["silvini.com",[734,735,736]],["silvini.de",[734,735,736]],["purefiji.cz",[734,735,736]],["voda-zdarma.cz",[734,735,736]],["lesgarconsfaciles.com",[734,735,736]],["ulevapronohy.cz",[734,735,736]],["vitalvibe.eu",[734,735,736]],["plavte.cz",[734,735,736]],["mo-tools.cz",[734,735,736]],["flamantonlineshop.cz",[734,735,736]],["sandratex.cz",[734,735,736]],["norwayshop.cz",[734,735,736]],["3d-foto.cz",[734,735,736]],["neviditelnepradlo.cz",[734,735,736]],["nutrimedium.com",[734,735,736]],["silvini.cz",[734,735,736]],["karel.cz",[734,735,736]],["silvini.sk",[734,735,736]],["book-n-drive.de",737],["cotswoldoutdoor.com",738],["cotswoldoutdoor.ie",738],["cam.start.canon",739],["usnews.com",740],["researchaffiliates.com",741],["singkinderlieder.de",742],["stiegeler.com",743],["ba.com",[746,747,748,749,750,751,752]],["britishairways.com",[746,747,748,749,750,751,752]],["cineman.pl",[753,754,755]],["tv-trwam.pl",[753,754,755,756]],["qatarairways.com",[757,758,759,760,761]],["wedding.pl",762],["vivaldi.com",763],["emuia1.gugik.gov.pl",764],["nike.com",765],["adidas.at",766],["adidas.be",766],["adidas.ca",766],["adidas.ch",766],["adidas.cl",766],["adidas.co",766],["adidas.co.in",766],["adidas.co.kr",766],["adidas.co.nz",766],["adidas.co.th",766],["adidas.co.uk",766],["adidas.com",766],["adidas.com.ar",766],["adidas.com.au",766],["adidas.com.br",766],["adidas.com.my",766],["adidas.com.ph",766],["adidas.com.vn",766],["adidas.cz",766],["adidas.de",766],["adidas.dk",766],["adidas.es",766],["adidas.fi",766],["adidas.fr",766],["adidas.gr",766],["adidas.ie",766],["adidas.it",766],["adidas.mx",766],["adidas.nl",766],["adidas.no",766],["adidas.pe",766],["adidas.pl",766],["adidas.pt",766],["adidas.ru",766],["adidas.se",766],["adidas.sk",766],["colourbox.com",767],["ebilet.pl",768],["myeventeo.com",769],["snap.com",770],["louwman.nl",[771,772]],["ratemyprofessors.com",773],["filen.io",774],["leotrippi.com",775],["restaurantclub.pl",775],["context.news",775],["queisser.de",775],["grandprixradio.dk",[776,777,778,779,780]],["grandprixradio.nl",[776,777,778,779,780]],["grandprixradio.be",[776,777,778,779,780]],["businessclass.com",781],["quantamagazine.org",782],["hellotv.nl",784],["jisc.ac.uk",785],["lasestrellas.tv",786],["xn--digitaler-notenstnder-m2b.com",787],["schoonmaakgroothandelemmen.nl",787],["nanuko.de",787],["hair-body-24.de",787],["shopforyou47.de",787],["kreativverliebt.de",787],["anderweltverlag.com",787],["octavio-shop.com",787],["forcetools-kepmar.eu",787],["fantecshop.de",787],["hexen-werkstatt.shop",787],["shop-naturstrom.de",787],["biona-shop.de",787],["camokoenig.de",787],["bikepro.de",787],["kaffeediscount.com",787],["vamos-skateshop.com",787],["holland-shop.com",787],["avonika.com",787],["royal-oak.org",788],["hurton.pl",789],["officesuite.com",790],["fups.com",[791,793]],["scienceopen.com",794],["moebel-mahler-siebenlehn.de",[795,796]],["calendly.com",797],["batesenvironmental.co.uk",[798,799]],["ubereats.com",800],["101internet.ru",801],["bein.com",802],["beinsports.com",802],["figshare.com",803],["bitso.com",804],["gallmeister.fr",805],["eco-toimistotarvikkeet.fi",806],["proficient.fi",806],["developer.ing.com",807],["webtrack.dhlglobalmail.com",809],["webtrack.dhlecs.com",809],["ehealth.gov.gr",810],["calvinklein.se",[811,812,813]],["calvinklein.fi",[811,812,813]],["calvinklein.sk",[811,812,813]],["calvinklein.si",[811,812,813]],["calvinklein.ch",[811,812,813]],["calvinklein.ru",[811,812,813]],["calvinklein.com",[811,812,813]],["calvinklein.pt",[811,812,813]],["calvinklein.pl",[811,812,813]],["calvinklein.at",[811,812,813]],["calvinklein.nl",[811,812,813]],["calvinklein.hu",[811,812,813]],["calvinklein.lu",[811,812,813]],["calvinklein.lt",[811,812,813]],["calvinklein.lv",[811,812,813]],["calvinklein.it",[811,812,813]],["calvinklein.ie",[811,812,813]],["calvinklein.hr",[811,812,813]],["calvinklein.fr",[811,812,813]],["calvinklein.es",[811,812,813]],["calvinklein.ee",[811,812,813]],["calvinklein.de",[811,812,813]],["calvinklein.dk",[811,812,813]],["calvinklein.cz",[811,812,813]],["calvinklein.bg",[811,812,813]],["calvinklein.be",[811,812,813]],["calvinklein.co.uk",[811,812,813]],["ofdb.de",814],["dtksoft.com",815],["serverstoplist.com",816],["truecaller.com",817],["protos.com",[821,823,824]],["timhortons.co.th",[821,822,823,825,827,828]],["toyota.co.uk",[821,822,823,826,827,828]],["businessaccountingbasics.co.uk",[821,822,823,825,827,828]],["flickr.org",[821,822,823,825,827,828]],["espacocasa.com",821],["altraeta.it",821],["centrooceano.it",821],["allstoresdigital.com",821],["cultarm3d.de",821],["soulbounce.com",821],["fluidtopics.com",821],["uvetgbt.com",821],["malcorentacar.com",821],["emondo.de",821],["maspero.it",821],["kelkay.com",821],["underground-england.com",821],["vert.eco",821],["turcolegal.com",821],["magnet4blogging.net",821],["moovly.com",821],["automationafrica.co.za",821],["jornaldoalgarve.pt",821],["keravanenergia.fi",821],["kuopas.fi",821],["frag-machiavelli.de",821],["healthera.co.uk",821],["mobeleader.com",821],["powerup-gaming.com",821],["developer-blog.net",821],["medical.edu.mt",821],["deh.mt",821],["bluebell-railway.com",821],["ribescasals.com",821],["javea.com",821],["chinaimportal.com",821],["inds.co.uk",821],["raoul-follereau.org",821],["serramenti-milano.it",821],["cosasdemujer.com",821],["luz-blanca.info",821],["cosasdeviajes.com",821],["safehaven.io",821],["havocpoint.it",821],["motofocus.pl",821],["nomanssky.com",821],["drei-franken-info.de",821],["clausnehring.com",821],["alttab.net",821],["kinderleicht.berlin",821],["kiakkoradio.fi",821],["cosasdelcaribe.es",821],["de-sjove-jokes.dk",821],["serverprofis.de",821],["biographyonline.net",821],["iziconfort.com",821],["sportinnederland.com",821],["natureatblog.com",821],["wtsenergy.com",821],["cosasdesalud.es",821],["internetpasoapaso.com",821],["zurzeit.at",821],["contaspoupanca.pt",821],["steamdeckhq.com",[821,822,823,825,827,828]],["ipouritinc.com",[821,823,825]],["hemglass.se",[821,823,825,827,828]],["sumsub.com",[821,822,823]],["atman.pl",[821,822,823]],["fabriziovanmarciano.com",[821,822,823]],["nationalrail.com",[821,822,823]],["eett.gr",[821,822,823]],["funkypotato.com",[821,822,823]],["equalexchange.co.uk",[821,822,823]],["swnsdigital.com",[821,822,823]],["gogolf.fi",[821,825]],["hanse-haus-greifswald.de",821],["tampereenratikka.fi",[821,823,829,830]],["kymppikatsastus.fi",[823,827,874,875]],["brasiltec.ind.br",831],["doka.com",[832,833,834]],["abi.de",[835,836]],["studienwahl.de",[835,836]],["youthforum.org",837],["journal.hr",[838,839,840,841]],["howstuffworks.com",842],["stickypassword.com",[843,844,845]],["conversion-rate-experts.com",[846,847]],["merkur.si",[848,849,850]],["petitionenligne.com",[851,852]],["petitionenligne.be",[851,852]],["petitionenligne.fr",[851,852]],["petitionenligne.re",[851,852]],["petitionenligne.ch",[851,852]],["skrivunder.net",[851,852]],["petitiononline.uk",[851,852]],["petitions.nz",[851,852]],["petizioni.com",[851,852]],["peticao.online",[851,852]],["skrivunder.com",[851,852]],["peticiones.ar",[851,852]],["petities.com",[851,852]],["petitionen.com",[851,852]],["petice.com",[851,852]],["opprop.net",[851,852]],["peticiok.com",[851,852]],["peticiones.net",[851,852]],["peticion.es",[851,852]],["peticiones.pe",[851,852]],["peticiones.mx",[851,852]],["peticiones.cl",[851,852]],["peticije.online",[851,852]],["peticiones.co",[851,852]],["mediathek.lfv-bayern.de",853],["aluypvc.es",[854,855,856]],["pracuj.pl",[857,858,859,860,861]],["vki.at",863],["konsument.at",863],["chollometro.com",864],["dealabs.com",864],["hotukdeals.com",864],["pepper.it",864],["pepper.pl",864],["preisjaeger.at",864],["mydealz.de",864],["direct.travelinsurance.tescobank.com",[867,868,869,870,871,872,873,874]],["easyfind.ch",[876,877]],["e-shop.leonidas.com",[878,879]],["lastmile.lt",880],["veriff.com",881],["constantin.film",[882,883,884]],["notion.so",885],["omgevingsloketinzage.omgeving.vlaanderen.be",[886,887]],["primor.eu",888],["tameteo.com",889],["tempo.pt",889],["yourweather.co.uk",889],["meteored.cl",889],["meteored.mx",889],["tempo.com",889],["ilmeteo.net",889],["meteored.com.ar",889],["daswetter.com",889],["algarvevacation.net",890],["3sat.de",891],["oxxio.nl",[892,893]],["butterflyshop.dk",[894,895,896]],["praxis.nl",897],["brico.be",897],["kent.gov.uk",[898,899]]]);

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
