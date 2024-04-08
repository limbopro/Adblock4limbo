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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["CookieConsent","false"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["privatekeys.pw",3],["mora.hu",4],["confused.com",5],["physikinstrumente.de",6],["karlknauer.de",6],["schoeck.com",6],["resonate.coop",6],["northgatevehiclehire.ie",6],["badhall.at",6],["cic.ch",6],["ilsaggiatore.com",7],["forum.digitalfernsehen.de",8],["shop.elbers-hof.de",[9,10]],["woolsocks.eu",11],["uza.be",12],["5asec.ch",12],["wizards.com",12],["parkenflughafen.de",13],["radyofenomen.com",14],["elsate.com",15],["labs.epi2me.io",16],["hume.ai",17],["lotusantwerp.wacs.online",18],["simeononsecurity.gitbook.io",19],["thehacker.recipes",19],["docs.dyrector.io",19],["makeresearchpay.com",20],["tandartsenpraktijk-simons.tandartsennet.nl",21],["huisartsenpraktijkdoorn.nl",21],["bcorporation.net",22],["knime.com",[22,65]],["quebueno.es",22],["edookit.com",23],["trixonline.be",24],["radio-canada.ca",25],["heysummit.com",26],["puromarketing.com",27],["radicalmotorsport.com",28],["biurobox.pl",29],["cycling74.com",30],["triviacreator.com",31],["freshis.com",31],["anker.com",31],["computacenter.com",32],["playbalatro.com",33],["kastner-oehler.de",34],["kastner-oehler.at",34],["kastner-oehler.ch",34],["twenga.it",35],["twenga.fr",35],["twenga.co.uk",35],["twenga.de",35],["twenga.es",35],["twenga.pl",35],["twenga.nl",35],["twenga.se",35],["olx.kz",36],["efl.com",37],["wst.tv",37],["cuvva.com",38],["vitbikes.de",39],["gourmetfoodstore.com",40],["schulfahrt.de",41],["deutsche-finanzagentur.de",42],["thejazzcafelondon.com",43],["keeb.supply",44],["spb.hh.ru",45],["kaluga.hh.ru",45],["school.hh.ru",45],["rating.hh.ru",45],["novgorod.hh.ru",45],["xxxshemaleporn.com",[46,47]],["gayhits.com",[46,47]],["gaypornvideos.xxx",[46,47]],["sextubespot.com",[46,47]],["wewantjusticedao.org",48],["godbolt.org",49],["projectenglish.com.pl",[50,55]],["ledenicheur.fr",50],["pricespy.co.uk",50],["pricespy.co.nz",50],["sae.fsc.ccoo.es",51],["piusx-college.nl",52],["yoomoney.ru",53],["vod.warszawa.pl",54],["m.twitch.tv",56],["environment.data.gov.uk",57],["playtesting.games",58],["portal.by.aok.de",59],["umlandscout.de",60],["atombank.co.uk",[61,62,63]],["showtv.com.tr",64],["seventhgeneration.com",65],["press.princeton.edu",65],["ldz.lv",65],["crtm.es",66],["airastana.com",67],["vkf-renzel.nl",68],["booking.reederei-zingst.de",[69,70,71]],["booking.weisse-flotte.de",[69,70,71]],["booking2.reederei-hiddensee.de",[69,70,71]],["sanswiss.pl",72],["galaxy.com",73],["petdesk.com",74],["ivyexec.com",75],["railtech.com",76],["lottehotel.com",[77,78,79,80,81]],["paydirekt.de",82],["kijiji.ca",83],["posterstore.fr",84],["posterstore.eu",84],["posterstore.be",84],["posterstore.de",84],["posterstore.hu",84],["posterstore.ie",84],["posterstore.it",84],["posterstore.no",84],["posterstore.nl",84],["posterstore.pl",84],["posterstore.com",84],["posterstore.ae",84],["posterstore.ca",84],["posterstore.nz",84],["posterstore.es",84],["posterstore.kr",84],["posterstore.jp",84],["posterstore.dk",84],["posterstore.se",84],["posterstore.ch",84],["posterstore.at",84],["myriadicity.net",85],["dgsf.org",85],["endgame.id",86],["cashback-cards.ch",87],["swisscard.ch",87],["ahorn24.de",88],["blockdyor.com",89],["ticket.io",90],["omega-nuernberg.servicebund.com",91],["lojaboschferramentas.com.br",[92,94,95]],["shareloft.com",93],["fineartsmuseum.recreatex.be",[96,97,98]],["jaapeden.nl",[96,97,98]],["eboo.lu",99],["lasmallagency.com",100],["lhsystems.com",[101,102,103,104]],["twomates.de",105],["intergiro.com",106],["healthygamer.gg",107],["telepizza.es",[108,109,110]],["telepizza.pt",[108,109,110]],["frisco.pl",111],["tyleenslang.nl",112],["schrikdraad.net",112],["kruiwagen.net",112],["pvcvoordeel.nl",112],["pvcbuis.com",112],["drainagebuizen.nl",112],["likewise.com",113],["longines.com",[114,115,116,117]],["vater-it.de",118],["biano.hu",119],["nadia.gov.gr",120],["hana-book.fr",121],["kzvb.de",122],["correosexpress.com",123],["cexpr.es",123],["rte.ie",124],["smart.com",125],["gry.pl",125],["gamesgames.com",125],["games.co.uk",125],["jetztspielen.de",125],["ourgames.ru",125],["permainan.co.id",125],["gioco.it",125],["jeux.fr",125],["juegos.com",125],["ojogos.com.br",125],["oyunskor.com",125],["spela.se",125],["spelletjes.nl",125],["agame.com",125],["spielen.com",125],["flashgames.ru",125],["games.co.id",125],["giochi.it",125],["jeu.fr",125],["spel.nl",125],["sartor-stoffe.de",126],["rockpoint.cz",126],["rockpoint.sk",126],["parfum-zentrum.de",126],["candy-store.cz",126],["tridge.com",127],["asus.com",[128,129]],["drinksking.sk",130],["neuhauschocolates.com",131],["commandsuite.it",132],["oktea.tw",133],["bafin.de",134],["materna.de",134],["bamf.de",134],["tenvinilo-argentina.com",[135,136]],["eikaforsikring.no",[137,138]],["eurowings.com",[139,140,141]],["newpharma.be",[142,143,144]],["newpharma.fr",[142,143,144]],["newpharma.de",[142,143,144]],["newpharma.at",[142,143,144]],["newpharma.nl",[142,143,144]],["kapoorwatch.com",145],["instantoffices.com",146],["paf.se",146],["citibank.pl",146],["citibankonline.pl",146],["azertyfactor.be",147],["zelezodum.cz",148],["thw.de",149],["bafa.de",149],["bka.de",149],["bmbf.de",149],["weather.com",150],["bolist.se",[151,152]],["project529.com",152],["evivanlanschot.nl",153],["prenatal.nl",154],["onnibus.com",[154,787,788,789]],["kyoceradocumentsolutions.us",[154,833,834]],["kyoceradocumentsolutions.ch",[154,833,834]],["kyoceradocumentsolutions.co.uk",[154,833,834]],["kyoceradocumentsolutions.de",[154,833,834]],["kyoceradocumentsolutions.es",[154,833,834]],["kyoceradocumentsolutions.eu",[154,833,834]],["kyoceradocumentsolutions.fr",[154,833,834]],["kyoceradocumentsolutions.it",[154,833,834]],["kyoceradocumentsolutions.ru",[154,833,834]],["kyoceradocumentsolutions.mx",[154,833,834]],["kyoceradocumentsolutions.cl",[154,833,834]],["kyoceradocumentsolutions.com.br",[154,833,834]],["wagner-tuning.com",[155,156,157,158]],["waitrosecellar.com",[159,160,161,162]],["waitrose.com",[159,509]],["kvk.nl",[163,164,165]],["macfarlanes.com",166],["pole-emploi.fr",167],["gardenmediaguild.co.uk",168],["samplerite.com",169],["samplerite.cn",169],["sororedit.com",170],["blukit.com.br",171],["biegnaszczyt.pl",172],["staff-gallery.com",173],["itv.com",174],["dvag.de",175],["premierinn.com",[176,177,178,179]],["whitbreadinns.co.uk",[176,177,178,179]],["barandblock.co.uk",[176,177,178,179]],["tabletable.co.uk",[176,177,178,179]],["brewersfayre.co.uk",[176,177,178,179]],["beefeater.co.uk",[176,177,178,179]],["allstarssportsbars.co.uk",[180,181]],["babiesrus.ca",182],["toysrus.ca",182],["roomsandspaces.ca",182],["athletic-club.eus",[183,184,185]],["wattoo.dk",186],["wattoo.no",186],["texthelp.com",[187,188]],["courierexchange.co.uk",[189,190,191]],["haulageexchange.co.uk",[189,190,191]],["powerball.com",192],["tlaciarik.sk",192],["tiskarik.cz",192],["sseriga.edu",[193,194]],["rt.com",195],["swrng.de",196],["crfop.gdos.gov.pl",197],["nurgutes.de",198],["kpcen-torun.edu.pl",199],["opintopolku.fi",200],["app.erevie.pl",201],["debenhams.com",202],["archiwumalle.pl",203],["konicaminolta.ca",204],["konicaminolta.us",204],["deutschebank-dbdirect.com",[205,206,207]],["dbonline.deutsche-bank.es",[205,206,207]],["deutsche-bank.es",[205,206,207]],["hipotecaonline.db.com",208],["kangasalansanomat.fi",209],["eif.org",210],["tunnelmb.net",210],["sugi-net.jp",211],["understandingsociety.ac.uk",212],["leibniz.com",213],["horecaworld.biz",[213,480]],["horecaworld.be",[213,480]],["bettertires.com",213],["electroprecio.com",213],["autohero.com",213],["computerbase.de",[213,830]],["sistemacomponentes.com.br",214],["bargaintown.ie",215],["tui.nl",216],["doppelmayr.com",217],["case-score.com",[218,219]],["cote.co.uk",220],["finimize.com",220],["blxxded.com",221],["rtu.lv",222],["sysdream.com",223],["cinemarkca.com",224],["neander-zahn.de",225],["theadelphileeds.co.uk",226],["tobycarvery.co.uk",226],["carsupermarket.com",226],["viajesatodotren.com",227],["ticketingcine.fr",228],["agenziavista.it",229],["e-chladiva.cz",229],["bitecode.dev",230],["mjob.si",[231,232,233]],["airportrentacar.gr",234],["mobile-fueling.de",234],["plos.org",235],["autohaus24.de",236],["sixt-neuwagen.de",236],["gadis.es",[237,238]],["dom.ru",238],["ford-kimmerle-reutlingen.de",239],["autohaus-reitermayer.de",239],["autohaus-diefenbach-waldbrunn.de",239],["autohaus-diefenbach.de",239],["autohaus-musberg.de",239],["ford-ah-im-hunsrueck-simmern.de",239],["ford-arndt-goerlitz.de",239],["ford-autogalerie-alfeld.de",239],["ford-bacher-schrobenhausen.de",239],["ford-bathauer-bad-harzburg.de",239],["ford-behrend-waren.de",239],["ford-bergland-frankfurt-oder.de",239],["ford-bergland-wipperfuerth.de",239],["ford-besico-glauchau.de",239],["ford-besico-nuernberg.de",239],["ford-bischoff-neumuenster.de",239],["ford-bodach-borgentreich.de",239],["ford-bunk-saarbruecken.de",239],["ford-bunk-voelklingen.de",239],["ford-busch-kirchberg.de",239],["ford-diermeier-muenchen.de",239],["ford-dinnebier-leipzig.de",239],["ford-duennes-regensburg.de",239],["ford-fischer-bochum.de",239],["ford-fischer-muenster.de",239],["ford-foerster-koblenz.de",239],["ford-fuchs-uffenheim.de",239],["ford-geberzahn-koeln.de",239],["ford-gerstmann-duesseldorf.de",239],["ford-haefner-und-strunk-kassel.de",239],["ford-hartmann-kempten.de",239],["ford-hartmann-rastatt.de",239],["ford-hatzner-karlsruhe.de",239],["ford-heine-hoexter.de",239],["ford-hentschel-hildesheim.de",239],["ford-hessengarage-dreieich.de",239],["ford-hessengarage-frankfurt.de",239],["ford-hga-windeck.de",239],["ford-hommert-coburg.de",239],["ford-horstmann-rastede.de",239],["ford-janssen-sonsbeck.de",239],["ford-jochem-stingbert.de",239],["ford-jungmann-wuppertal.de",239],["ford-kestel-marktzeuln.de",239],["ford-klaiber-bad-friedrichshall.de",239],["ford-koenig-eschwege.de",239],["ford-kohlhoff-mannheim.de",239],["ford-kt-automobile-coesfeld.de",239],["ford-lackermann-wesel.de",239],["ford-ludewig-delligsen.de",239],["ford-maiwald-linsengericht.de",239],["ford-mertens-beckum.de",239],["ford-meyer-bad-oeynhausen.de",239],["ford-mgs-bayreuth.de",239],["ford-mgs-radebeul.de",239],["ford-muecke-berlin.de",239],["ford-norren-weissenthurm.de",239],["ford-nrw-garage-duesseldorf.de",239],["ford-nrw-garage-handweiser.de",239],["ford-nuding-remshalden.de",239],["ford-ohm-rendsburg.de",239],["ford-reinicke-muecheln.de",239],["ford-rennig.de",239],["ford-roerentrop-luenen.de",239],["ford-schankola-dudweiler.de",239],["ford-sg-goeppingen.de",239],["ford-sg-leonberg.de",239],["ford-sg-neu-ulm.de",239],["ford-sg-pforzheim.de",239],["ford-sg-waiblingen.de",239],["ford-storz-st-georgen.de",239],["ford-strunk-koeln.de",239],["ford-tobaben-hamburg.de",239],["ford-toenjes-zetel.de",239],["ford-wagner-mayen.de",239],["ford-wahl-fritzlar.de",239],["ford-wahl-siegen.de",239],["ford-weege-bad-salzuflen.de",239],["ford-westhoff-hamm.de",239],["ford-wieland-hasbergen.de",239],["renault-autocenterprignitz-pritzwalk.de",239],["renault-spenrath-juelich.de",239],["vitalllit.com",240],["fincaparera.com",240],["dbnetbcn.com",240],["viba.barcelona",240],["anafaustinoatelier.com",240],["lamparasherrero.com",240],["calteixidor.cat",240],["argentos.barcelona",240],["anmarlube.com",240],["anynouxines.barcelona",240],["crearunapaginaweb.cat",240],["cualesmiip.com",240],["porndoe.com",[241,242,243]],["thinkingaustralia.com",244],["elrow.com",245],["ownit.se",246],["velo-antwerpen.be",[247,248]],["wwnorton.com",249],["pc-canada.com",250],["mullgs.se",251],["1a-sehen.de",252],["feature.fm",253],["comte.com",254],["baltic-watches.com",255],["np-brijuni.hr",255],["vilgain.com",255],["tradingview.com",256],["wevolver.com",257],["experienciasfree.com",258],["freemans.com",259],["kivikangas.fi",260],["lumingerie.com",260],["melkkobrew.fi",260],["kh.hu",[261,262,263]],["aplgo.com",264],["securityconference.org",265],["aha.or.at",[266,269]],["fantasyfitnessing.com",267],["chocolateemporium.com",268],["account.samsung.com",270],["crushwineco.com",271],["levi.pt",272],["fertagus.pt",273],["smiggle.co.uk",274],["ubisoft.com",[275,276,277,278]],["store.ubisoft.com",[275,278,713,714]],["thulb.uni-jena.de",279],["splityourticket.co.uk",280],["eramba.org",281],["openai.com",282],["kupbilecik.com",[283,284]],["kupbilecik.de",[283,284]],["kupbilecik.pl",[283,284]],["shopilya.com",285],["arera.it",286],["haustier-berater.de",286],["hfm-frankfurt.de",286],["zoommer.ge",287],["studentapan.se",288],["petcity.lt",[289,290,291,292]],["tobroco.com",[293,297]],["tobroco.nl",[293,297]],["tobroco-giant.com",[293,297]],["geosfreiberg.de",[294,295]],["eapvic.org",296],["bassolsenergia.com",296],["bammusic.com",[298,300,301]],["green-24.de",299],["phish-test.de",302],["bokadirekt.se",303],["ford.lt",304],["ford.pt",304],["ford.fr",304],["ford.de",304],["ford.dk",304],["ford.pl",304],["ford.se",304],["ford.nl",304],["ford.no",304],["ford.fi",304],["ford.gr",304],["ford.it",304],["data-media.gr",305],["e-food.gr",[306,307]],["bvmed.de",308],["babyshop.com",[309,310,311]],["griffbereit24.de",312],["checkwx.com",313],["calendardate.com",314],["wefashion.ch",315],["wefashion.fr",315],["wefashion.lu",315],["wefashion.be",315],["wefashion.de",315],["wefashion.nl",315],["brettspiel-angebote.de",[316,317]],["nio.com",318],["kancelarskepotreby.net",[319,320,321]],["segment-anything.com",322],["sketch.metademolab.com",323],["cambridgebs.co.uk",324],["freizeitbad-greifswald.de",325],["giuseppezanotti.com",[326,327,328]],["xcen.se",328],["biggreenegg.co.uk",329],["skihuette-oberbeuren.de",[330,331,332]],["pwsweather.com",333],["xfree.com",334],["theweathernetwork.com",[335,336]],["monese.com",[337,338,339]],["assos.com",337],["helmut-fischer.com",340],["myscience.org",341],["7-eleven.com",342],["airwallex.com",343],["streema.com",344],["gov.lv",345],["tise.com",346],["codecamps.com",347],["avell.com.br",348],["moneyfarm.com",349],["app.moneyfarm.com",349],["simpl.rent",350],["hubspot.com",351],["prodyna.com",[352,353,354,355]],["zutobi.com",[352,353,354,355]],["calm.com",[356,357]],["pubgesports.com",[358,359,360]],["outwrite.com",361],["sberbank.com",362],["sbermarket.ru",363],["atani.com",[364,365,366]],["croisieresendirect.com",367],["bgextras.co.uk",368],["sede.coruna.gal",369],["czech-server.cz",370],["hitech-gamer.com",371],["bialettikave.hu",[372,373,374]],["canalplus.com",[375,376,377]],["mader.bz.it",[378,379,380]],["supply.amazon.co.uk",381],["bhaptics.com",382],["cleverbot.com",383],["watchaut.film",384],["tuffaloy.com",385],["fanvue.com",385],["electronoobs.com",386],["xn--lkylen-vxa.se",387],["tiefenthaler-landtechnik.at",388],["tiefenthaler-landtechnik.ch",388],["tiefenthaler-landtechnik.de",388],["varma.fi",389],["vyos.io",390],["digimobil.es",[391,392]],["teenage.engineering",393],["merrell.pl",[394,654]],["converse.pl",394],["shop.wf-education.com",[394,654]],["werkenbijaswatson.nl",395],["converse.com",[396,397]],["buyandapply.nexus.org.uk",398],["img.ly",399],["halonen.fi",[399,431,432,433,434]],["carlson.fi",[399,431,432,433,434]],["cams.ashemaletube.com",[400,401]],["electronicacerler.com",[402,403,404]],["okpoznan.pl",[405,410]],["ielts.idp.com",406],["ielts.co.nz",406],["ielts.com.au",406],["einfach-einreichen.de",[407,408,409]],["endlesstools.io",411],["mbhszepkartya.hu",412],["casellimoveis.com.br",413],["embedplus.com",414],["e-file.pl",415],["sp215.info",416],["empik.com",417],["senda.pl",418],["befestigungsfuchs.de",419],["cut-tec.co.uk",420],["gaytimes.co.uk",421],["statisticsanddata.org",422],["hello.one",423],["paychex.com",424],["wildcat-koeln.de",425],["libraries.merton.gov.uk",[426,427]],["tommy.hr",[428,429]],["usit.uio.no",430],["demo-digital-twin.r-stahl.com",435],["la31devalladolid.com",[436,437]],["mx.com",438],["foxtrail.fjallraven.com",439],["dotwatcher.cc",440],["bazarchic.com",[441,442,443]],["seedrs.com",444],["mypensiontracker.co.uk",445],["praxisplan.at",[445,467]],["endclothing.com",446],["esimplus.me",447],["cineplanet.com.pe",448],["ecologi.com",449],["wamba.com",450],["eurac.edu",451],["akasaair.com",452],["rittal.com",453],["worstbassist.com",[454,455,456,457,458,459]],["zs-watch.com",460],["crown.com",461],["mesanalyses.fr",462],["teket.jp",463],["fish.shimano.com",[464,465,466]],["simsherpa.com",[468,469,470]],["translit.ru",471],["aruba.com",472],["aireuropa.com",473],["skfbearingselect.com",[474,475]],["scanrenovation.com",476],["ttela.se",477],["dominospizza.pl",478],["devagroup.pl",479],["secondsol.com",480],["angelifybeauty.com",481],["cotopaxi.com",482],["justjoin.it",483],["digibest.pt",484],["two-notes.com",485],["theverge.com",486],["daimant.co",487],["secularism.org.uk",488],["karriere-hamburg.de",489],["musicmap.info",490],["gasspisen.se",491],["medtube.pl",492],["medtube.es",492],["medtube.fr",492],["medtube.net",492],["standard.sk",493],["linmot.com",494],["larian.com",[494,777]],["containerandpackaging.com",495],["top-yp.de",496],["termania.net",497],["account.nowpayments.io",498],["fizjobaza.pl",499],["gigasport.at",500],["gigasport.de",500],["gigasport.ch",500],["velleahome.gr",501],["nicequest.com",502],["handelsbanken.no",503],["handelsbanken.com",503],["handelsbanken.co.uk",503],["handelsbanken.se",[503,582]],["handelsbanken.dk",503],["handelsbanken.fi",503],["songtradr.com",[504,761]],["logo.pt",[505,506]],["flexwhere.co.uk",[507,508]],["flexwhere.de",[507,508]],["pricewise.nl",507],["getunleash.io",507],["dentmania.de",507],["free.navalny.com",507],["latoken.com",507],["campusbrno.cz",[510,511,512]],["secrid.com",513],["etsy.com",514],["careers.cloud.com",514],["blablacar.rs",515],["blablacar.ru",515],["blablacar.com.tr",515],["blablacar.com.ua",515],["blablacar.com.br",515],["seb.se",516],["sebgroup.com",516],["deps.dev",517],["buf.build",518],["starofservice.com",519],["ytcomment.kmcat.uk",520],["gmx.com",521],["gmx.fr",521],["karofilm.ru",522],["octopusenergy.it",523],["octopusenergy.es",[523,524]],["justanswer.es",525],["justanswer.de",525],["justanswer.com",525],["justanswer.co.uk",525],["citilink.ru",526],["huutokaupat.com",527],["kaggle.com",528],["emr.ch",[529,534]],["gem.cbc.ca",530],["pumatools.hu",531],["ici.tou.tv",532],["crunchyroll.com",533],["mayflex.com",535],["clipchamp.com",535],["trouwenbijfletcher.nl",535],["fletcher.nl",535],["fletcherzakelijk.nl",535],["intermatic.com",535],["ebikelohr.de",536],["eurosender.com",537],["melectronics.ch",538],["guard.io",539],["nokportalen.se",540],["dokiliko.com",541],["valamis.com",[542,543,544]],["sverigesingenjorer.se",545],["shop.almawin.de",[546,547,548,585]],["zeitzurtrauer.de",549],["skaling.de",[550,551,552]],["bringmeister.de",553],["gdx.net",554],["clearblue.com",555],["drewag.de",[556,557,558]],["enso.de",[556,557,558]],["buidlbox.io",556],["helitransair.com",559],["more.com",560],["nwslsoccer.com",560],["climatecentral.org",561],["resolution.de",562],["flagma.by",563],["eatsalad.com",564],["pacstall.dev",565],["web2.0calc.fr",566],["de-appletradein.likewize.com",567],["swissborg.com",568],["qwice.com",569],["canalpluskuchnia.pl",[570,571]],["uizard.io",572],["stmas.bayern.de",[573,576]],["novayagazeta.eu",574],["kinopoisk.ru",575],["yandex.ru",575],["go.netia.pl",[577,578]],["polsatboxgo.pl",[577,578]],["ing.it",[579,580]],["ing.nl",581],["youcom.com.br",583],["rule34.paheal.net",584],["deep-shine.de",585],["shop.ac-zaun-center.de",585],["kellermann-online.com",585],["kletterkogel.de",585],["pnel.de",585],["korodrogerie.de",585],["der-puten-shop.de",585],["katapult-shop.de",585],["evocsports.com",585],["esm-computer.de",585],["calmwaters.de",585],["mellerud.de",585],["akustik-projekt.at",585],["vansprint.de",585],["0815.at",585],["0815.eu",585],["ojskate.com",585],["der-schweighofer.de",585],["tz-bedarf.de",585],["zeinpharma.de",585],["weicon.com",585],["dagvandewebshop.be",585],["thiele-tee.de",585],["carbox.de",585],["riapsport.de",585],["trendpet.de",585],["eheizung24.de",585],["seemueller.com",585],["vivande.de",585],["heidegrill.com",585],["gladiator-fightwear.com",585],["h-andreas.com",585],["pp-parts.com",585],["natuerlich-holzschuhe.de",585],["massivart.de",585],["malermeister-shop.de",585],["imping-confiserie.de",585],["lenox-trading.at",585],["cklenk.de",585],["catolet.de",585],["drinkitnow.de",585],["patisserie-m.de",585],["storm-proof.com",585],["balance-fahrradladen.de",585],["magicpos.shop",585],["zeinpharma.com",585],["sps-handel.net",585],["novagenics.com",585],["butterfly-circus.de",585],["holzhof24.de",585],["w6-wertarbeit.de",585],["fleurop.de",585],["leki.com",585],["extremeaudio.de",585],["taste-market.de",585],["delker-optik.de",585],["stuhl24-shop.de",585],["g-nestle.de",585],["alpine-hygiene.ch",585],["fluidmaster.it",585],["cordon.de",585],["belisse-beauty.de",585],["belisse-beauty.co.uk",585],["wpc-shop24.de",585],["liv.si",585],["maybach-luxury.com",585],["leiternprofi24.de",585],["hela-shop.eu",585],["hitado.de",585],["armedangels.com",[585,661,662]],["hofer-kerzen.at",586],["karls-shop.de",587],["luvly.care",588],["firmen.wko.at",588],["byggern.no",589],["donauauen.at",590],["woltair.cz",591],["rostics.ru",592],["hife.es",593],["lilcat.com",594],["hot.si",[595,596,597,598]],["crenolibre.fr",599],["e-pole.pl",600],["dopt.com",601],["keb-automation.com",602],["bonduelle.ru",603],["oxfordonlineenglish.com",604],["pccomponentes.fr",605],["pccomponentes.com",605],["pccomponentes.pt",605],["grants.at",606],["africa-uninet.at",606],["rqb.at",606],["youngscience.at",606],["oead.at",606],["innovationsstiftung-bildung.at",606],["etwinning.at",606],["arqa-vet.at",606],["zentrumfuercitizenscience.at",606],["vorstudienlehrgang.at",606],["erasmusplus.at",606],["jeger.pl",607],["bo.de",608],["thegamingwatcher.com",609],["norlysplay.dk",610],["plusujemy.pl",611],["asus.com.cn",[612,614]],["zentalk.asus.com",[612,614]],["mubi.com",613],["59northwheels.se",615],["photospecialist.co.uk",616],["foto-gregor.de",616],["kamera-express.de",616],["kamera-express.be",616],["kamera-express.nl",616],["kamera-express.fr",616],["kamera-express.lu",616],["dhbbank.com",617],["dhbbank.de",617],["dhbbank.be",617],["dhbbank.nl",617],["login.ingbank.pl",618],["fabrykacukiernika.pl",[619,620]],["peaks.com",621],["3landesmuseen-braunschweig.de",622],["unifachbuch.de",[623,624,625]],["playlumi.com",[626,627,628]],["chatfuel.com",629],["studio3t.com",[630,631,632,633]],["realgap.co.uk",[634,635,636,637]],["hotelborgia.com",[638,639]],["sweet24.de",640],["zwembaddekouter.be",641],["flixclassic.pl",642],["jobtoday.com",643],["deltatre.com",[644,645,659]],["withings.com",[646,647,648]],["blista.de",[649,650]],["hashop.nl",651],["gift.be",[652,653]],["elevator.de",654],["foryouehealth.de",654],["animaze.us",654],["penn-elcom.com",654],["curantus.de",654],["mtbmarket.de",654],["spanienweinonline.ch",654],["novap.fr",654],["bizkaia.eus",[655,656,657]],["sinparty.com",658],["mantel.com",660],["e-dojus.lv",663],["burnesspaull.com",664],["oncosur.org",665],["photobooth.online",666],["epidemicsound.com",667],["ryanair.com",668],["refurbished.at",[669,670,671]],["refurbished.nl",[669,670,671]],["refurbished.be",[669,670,671]],["refurbishedstore.de",[669,670,671]],["bayernportal.de",[672,673,674]],["ayudatpymes.com",675],["zipjob.com",675],["plastischechirurgie-muenchen.info",676],["bonn.sitzung-online.de",677],["depop.com",[678,679,680]],["thenounproject.com",681],["pricehubble.com",682],["ilmotorsport.de",683],["karate.com",684],["psbank.ru",684],["myriad.social",684],["exeedme.com",684],["followalice.com",[684,752]],["aqua-store.fr",685],["voila.ca",686],["anastore.com",687],["app.arzt-direkt.de",688],["dasfutterhaus.at",689],["e-pity.pl",690],["fillup.pl",691],["dailymotion.com",692],["barcawelt.de",693],["lueneburger-heide.de",694],["polizei.bayern.de",[695,697]],["ourworldofpixels.com",696],["jku.at",698],["matkahuolto.fi",699],["backmarket.de",[700,701,702]],["backmarket.co.uk",[700,701,702]],["backmarket.es",[700,701,702]],["backmarket.be",[700,701,702]],["backmarket.at",[700,701,702]],["backmarket.fr",[700,701,702]],["backmarket.gr",[700,701,702]],["backmarket.fi",[700,701,702]],["backmarket.ie",[700,701,702]],["backmarket.it",[700,701,702]],["backmarket.nl",[700,701,702]],["backmarket.pt",[700,701,702]],["backmarket.se",[700,701,702]],["backmarket.sk",[700,701,702]],["backmarket.com",[700,701,702]],["eleven-sportswear.cz",[703,704,705]],["silvini.com",[703,704,705]],["silvini.de",[703,704,705]],["purefiji.cz",[703,704,705]],["voda-zdarma.cz",[703,704,705]],["lesgarconsfaciles.com",[703,704,705]],["ulevapronohy.cz",[703,704,705]],["vitalvibe.eu",[703,704,705]],["plavte.cz",[703,704,705]],["mo-tools.cz",[703,704,705]],["flamantonlineshop.cz",[703,704,705]],["sandratex.cz",[703,704,705]],["norwayshop.cz",[703,704,705]],["3d-foto.cz",[703,704,705]],["neviditelnepradlo.cz",[703,704,705]],["nutrimedium.com",[703,704,705]],["silvini.cz",[703,704,705]],["karel.cz",[703,704,705]],["silvini.sk",[703,704,705]],["book-n-drive.de",706],["cotswoldoutdoor.com",707],["cotswoldoutdoor.ie",707],["cam.start.canon",708],["usnews.com",709],["researchaffiliates.com",710],["singkinderlieder.de",711],["stiegeler.com",712],["ba.com",[715,716,717,718,719,720,721]],["britishairways.com",[715,716,717,718,719,720,721]],["cineman.pl",[722,723,724]],["tv-trwam.pl",[722,723,724,725]],["qatarairways.com",[726,727,728,729,730]],["wedding.pl",731],["vivaldi.com",732],["emuia1.gugik.gov.pl",733],["nike.com",734],["adidas.at",735],["adidas.be",735],["adidas.ca",735],["adidas.ch",735],["adidas.cl",735],["adidas.co",735],["adidas.co.in",735],["adidas.co.kr",735],["adidas.co.nz",735],["adidas.co.th",735],["adidas.co.uk",735],["adidas.com",735],["adidas.com.ar",735],["adidas.com.au",735],["adidas.com.br",735],["adidas.com.my",735],["adidas.com.ph",735],["adidas.com.vn",735],["adidas.cz",735],["adidas.de",735],["adidas.dk",735],["adidas.es",735],["adidas.fi",735],["adidas.fr",735],["adidas.gr",735],["adidas.ie",735],["adidas.it",735],["adidas.mx",735],["adidas.nl",735],["adidas.no",735],["adidas.pe",735],["adidas.pl",735],["adidas.pt",735],["adidas.ru",735],["adidas.se",735],["adidas.sk",735],["colourbox.com",736],["ebilet.pl",737],["myeventeo.com",738],["snap.com",739],["louwman.nl",[740,741]],["ratemyprofessors.com",742],["filen.io",743],["leotrippi.com",744],["restaurantclub.pl",744],["context.news",744],["queisser.de",744],["grandprixradio.dk",[745,746,747,748,749]],["grandprixradio.nl",[745,746,747,748,749]],["grandprixradio.be",[745,746,747,748,749]],["businessclass.com",750],["quantamagazine.org",751],["hellotv.nl",753],["jisc.ac.uk",754],["lasestrellas.tv",755],["xn--digitaler-notenstnder-m2b.com",756],["schoonmaakgroothandelemmen.nl",756],["nanuko.de",756],["hair-body-24.de",756],["shopforyou47.de",756],["kreativverliebt.de",756],["anderweltverlag.com",756],["octavio-shop.com",756],["forcetools-kepmar.eu",756],["fantecshop.de",756],["hexen-werkstatt.shop",756],["shop-naturstrom.de",756],["biona-shop.de",756],["camokoenig.de",756],["bikepro.de",756],["kaffeediscount.com",756],["vamos-skateshop.com",756],["holland-shop.com",756],["avonika.com",756],["royal-oak.org",757],["hurton.pl",758],["officesuite.com",759],["fups.com",[760,762]],["scienceopen.com",763],["moebel-mahler-siebenlehn.de",[764,765]],["calendly.com",766],["batesenvironmental.co.uk",[767,768]],["ubereats.com",769],["101internet.ru",770],["bein.com",771],["beinsports.com",771],["figshare.com",772],["bitso.com",773],["gallmeister.fr",774],["eco-toimistotarvikkeet.fi",775],["proficient.fi",775],["developer.ing.com",776],["webtrack.dhlglobalmail.com",778],["webtrack.dhlecs.com",778],["ehealth.gov.gr",779],["calvinklein.se",[780,781,782]],["calvinklein.fi",[780,781,782]],["calvinklein.sk",[780,781,782]],["calvinklein.si",[780,781,782]],["calvinklein.ch",[780,781,782]],["calvinklein.ru",[780,781,782]],["calvinklein.com",[780,781,782]],["calvinklein.pt",[780,781,782]],["calvinklein.pl",[780,781,782]],["calvinklein.at",[780,781,782]],["calvinklein.nl",[780,781,782]],["calvinklein.hu",[780,781,782]],["calvinklein.lu",[780,781,782]],["calvinklein.lt",[780,781,782]],["calvinklein.lv",[780,781,782]],["calvinklein.it",[780,781,782]],["calvinklein.ie",[780,781,782]],["calvinklein.hr",[780,781,782]],["calvinklein.fr",[780,781,782]],["calvinklein.es",[780,781,782]],["calvinklein.ee",[780,781,782]],["calvinklein.de",[780,781,782]],["calvinklein.dk",[780,781,782]],["calvinklein.cz",[780,781,782]],["calvinklein.bg",[780,781,782]],["calvinklein.be",[780,781,782]],["calvinklein.co.uk",[780,781,782]],["ofdb.de",783],["dtksoft.com",784],["serverstoplist.com",785],["truecaller.com",786],["timhortons.co.th",[790,791,792,793,795,796]],["toyota.co.uk",[790,791,792,794,795,796]],["businessaccountingbasics.co.uk",[790,791,792,793,795,796]],["flickr.org",[790,791,792,793,795,796]],["espacocasa.com",790],["altraeta.it",790],["centrooceano.it",790],["allstoresdigital.com",790],["cultarm3d.de",790],["soulbounce.com",790],["fluidtopics.com",790],["uvetgbt.com",790],["malcorentacar.com",790],["emondo.de",790],["maspero.it",790],["kelkay.com",790],["underground-england.com",790],["vert.eco",790],["turcolegal.com",790],["magnet4blogging.net",790],["moovly.com",790],["automationafrica.co.za",790],["jornaldoalgarve.pt",790],["keravanenergia.fi",790],["kuopas.fi",790],["frag-machiavelli.de",790],["healthera.co.uk",790],["mobeleader.com",790],["powerup-gaming.com",790],["developer-blog.net",790],["medical.edu.mt",790],["deh.mt",790],["bluebell-railway.com",790],["ribescasals.com",790],["javea.com",790],["chinaimportal.com",790],["inds.co.uk",790],["raoul-follereau.org",790],["serramenti-milano.it",790],["cosasdemujer.com",790],["luz-blanca.info",790],["cosasdeviajes.com",790],["safehaven.io",790],["havocpoint.it",790],["motofocus.pl",790],["nomanssky.com",790],["drei-franken-info.de",790],["clausnehring.com",790],["alttab.net",790],["kinderleicht.berlin",790],["kiakkoradio.fi",790],["cosasdelcaribe.es",790],["de-sjove-jokes.dk",790],["serverprofis.de",790],["biographyonline.net",790],["iziconfort.com",790],["sportinnederland.com",790],["natureatblog.com",790],["wtsenergy.com",790],["cosasdesalud.es",790],["internetpasoapaso.com",790],["zurzeit.at",790],["contaspoupanca.pt",790],["steamdeckhq.com",[790,791,792,793,795,796]],["ipouritinc.com",[790,792,793]],["hemglass.se",[790,792,793,795,796]],["sumsub.com",[790,791,792]],["atman.pl",[790,791,792]],["fabriziovanmarciano.com",[790,791,792]],["nationalrail.com",[790,791,792]],["eett.gr",[790,791,792]],["funkypotato.com",[790,791,792]],["equalexchange.co.uk",[790,791,792]],["swnsdigital.com",[790,791,792]],["gogolf.fi",[790,793]],["hanse-haus-greifswald.de",790],["tampereenratikka.fi",[790,792,797,798]],["kymppikatsastus.fi",[792,795,842,843]],["brasiltec.ind.br",799],["doka.com",[800,801,802]],["abi.de",[803,804]],["studienwahl.de",[803,804]],["youthforum.org",805],["journal.hr",[806,807,808,809]],["howstuffworks.com",810],["stickypassword.com",[811,812,813]],["conversion-rate-experts.com",[814,815]],["merkur.si",[816,817,818]],["petitionenligne.com",[819,820]],["petitionenligne.be",[819,820]],["petitionenligne.fr",[819,820]],["petitionenligne.re",[819,820]],["petitionenligne.ch",[819,820]],["skrivunder.net",[819,820]],["petitiononline.uk",[819,820]],["petitions.nz",[819,820]],["petizioni.com",[819,820]],["peticao.online",[819,820]],["skrivunder.com",[819,820]],["peticiones.ar",[819,820]],["petities.com",[819,820]],["petitionen.com",[819,820]],["petice.com",[819,820]],["opprop.net",[819,820]],["peticiok.com",[819,820]],["peticiones.net",[819,820]],["peticion.es",[819,820]],["peticiones.pe",[819,820]],["peticiones.mx",[819,820]],["peticiones.cl",[819,820]],["peticije.online",[819,820]],["peticiones.co",[819,820]],["mediathek.lfv-bayern.de",821],["aluypvc.es",[822,823,824]],["pracuj.pl",[825,826,827,828,829]],["vki.at",831],["konsument.at",831],["chollometro.com",832],["dealabs.com",832],["hotukdeals.com",832],["pepper.it",832],["pepper.pl",832],["preisjaeger.at",832],["mydealz.de",832],["direct.travelinsurance.tescobank.com",[835,836,837,838,839,840,841,842]],["easyfind.ch",[844,845]],["e-shop.leonidas.com",[846,847]],["lastmile.lt",848],["veriff.com",849],["constantin.film",[850,851,852]],["notion.so",853],["omgevingsloketinzage.omgeving.vlaanderen.be",[854,855]],["primor.eu",856],["tameteo.com",857],["tempo.pt",857],["yourweather.co.uk",857],["meteored.cl",857],["meteored.mx",857],["tempo.com",857],["ilmeteo.net",857],["meteored.com.ar",857],["daswetter.com",857],["algarvevacation.net",858],["3sat.de",859],["oxxio.nl",[860,861]],["butterflyshop.dk",[862,863,864]],["praxis.nl",865],["brico.be",865],["kent.gov.uk",[866,867]]]);

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
    if ( /[^!-:<-[\]-~]/.test(value) ) {
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
