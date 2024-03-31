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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["cic.ch",3],["ilsaggiatore.com",4],["forum.digitalfernsehen.de",5],["elsate.com",6],["hume.ai",7],["lotusantwerp.wacs.online",8],["docs.dyrector.io",9],["thehacker.recipes",9],["makeresearchpay.com",10],["tandartsenpraktijk-simons.tandartsennet.nl",11],["huisartsenpraktijkdoorn.nl",11],["knime.com",[12,55]],["quebueno.es",12],["edookit.com",13],["trixonline.be",14],["radio-canada.ca",15],["heysummit.com",16],["puromarketing.com",17],["radicalmotorsport.com",18],["biurobox.pl",19],["cycling74.com",20],["triviacreator.com",21],["freshis.com",21],["anker.com",21],["computacenter.com",22],["playbalatro.com",23],["kastner-oehler.de",24],["kastner-oehler.at",24],["kastner-oehler.ch",24],["twenga.it",25],["twenga.fr",25],["twenga.co.uk",25],["twenga.de",25],["twenga.es",25],["twenga.pl",25],["twenga.nl",25],["twenga.se",25],["olx.kz",26],["efl.com",27],["wst.tv",27],["cuvva.com",28],["vitbikes.de",29],["gourmetfoodstore.com",30],["schulfahrt.de",31],["deutsche-finanzagentur.de",32],["thejazzcafelondon.com",33],["keeb.supply",34],["spb.hh.ru",35],["kaluga.hh.ru",35],["school.hh.ru",35],["rating.hh.ru",35],["novgorod.hh.ru",35],["xxxshemaleporn.com",[36,37]],["gayhits.com",[36,37]],["gaypornvideos.xxx",[36,37]],["sextubespot.com",[36,37]],["wewantjusticedao.org",38],["godbolt.org",39],["projectenglish.com.pl",[40,45]],["hintaopas.fi",40],["ledenicheur.fr",40],["prisjagt.dk",40],["prisjakt.no",40],["prisjakt.nu",40],["pricespy.co.uk",40],["pricespy.co.nz",40],["sae.fsc.ccoo.es",41],["piusx-college.nl",42],["yoomoney.ru",43],["vod.warszawa.pl",44],["m.twitch.tv",46],["environment.data.gov.uk",47],["playtesting.games",48],["portal.by.aok.de",49],["umlandscout.de",50],["atombank.co.uk",[51,52,53]],["showtv.com.tr",54],["seventhgeneration.com",55],["press.princeton.edu",55],["ldz.lv",55],["crtm.es",56],["airastana.com",57],["vkf-renzel.nl",58],["booking.reederei-zingst.de",[59,60,61]],["booking.weisse-flotte.de",[59,60,61]],["booking2.reederei-hiddensee.de",[59,60,61]],["sanswiss.pl",62],["galaxy.com",63],["petdesk.com",64],["ivyexec.com",65],["railtech.com",66],["lottehotel.com",[67,68,69,70,71]],["paydirekt.de",72],["kijiji.ca",73],["posterstore.fr",74],["posterstore.eu",74],["posterstore.be",74],["posterstore.de",74],["posterstore.hu",74],["posterstore.ie",74],["posterstore.it",74],["posterstore.no",74],["posterstore.nl",74],["posterstore.pl",74],["posterstore.com",74],["posterstore.ae",74],["posterstore.ca",74],["posterstore.nz",74],["posterstore.es",74],["posterstore.kr",74],["posterstore.jp",74],["posterstore.dk",74],["posterstore.se",74],["posterstore.ch",74],["posterstore.at",74],["myriadicity.net",75],["dgsf.org",75],["endgame.id",76],["cashback-cards.ch",77],["swisscard.ch",77],["ahorn24.de",78],["blockdyor.com",79],["ticket.io",80],["omega-nuernberg.servicebund.com",81],["lojaboschferramentas.com.br",[82,84,85]],["shareloft.com",83],["fineartsmuseum.recreatex.be",[86,87,88]],["jaapeden.nl",[86,87,88]],["eboo.lu",89],["lasmallagency.com",90],["lhsystems.com",[91,92,93,94]],["twomates.de",95],["intergiro.com",96],["healthygamer.gg",97],["telepizza.es",[98,99,100]],["telepizza.pt",[98,99,100]],["frisco.pl",101],["tyleenslang.nl",102],["schrikdraad.net",102],["kruiwagen.net",102],["pvcvoordeel.nl",102],["pvcbuis.com",102],["drainagebuizen.nl",102],["likewise.com",103],["longines.com",[104,105,106,107]],["vater-it.de",108],["biano.hu",109],["nadia.gov.gr",110],["hana-book.fr",111],["kzvb.de",112],["correosexpress.com",113],["cexpr.es",113],["rte.ie",114],["smart.com",115],["gry.pl",115],["gamesgames.com",115],["games.co.uk",115],["jetztspielen.de",115],["ourgames.ru",115],["permainan.co.id",115],["gioco.it",115],["jeux.fr",115],["juegos.com",115],["ojogos.com.br",115],["oyunskor.com",115],["spela.se",115],["spelletjes.nl",115],["agame.com",115],["spielen.com",115],["flashgames.ru",115],["games.co.id",115],["giochi.it",115],["jeu.fr",115],["spel.nl",115],["sartor-stoffe.de",116],["rockpoint.cz",116],["rockpoint.sk",116],["parfum-zentrum.de",116],["candy-store.cz",116],["tridge.com",117],["asus.com",[118,119]],["drinksking.sk",120],["neuhauschocolates.com",121],["commandsuite.it",122],["oktea.tw",123],["bafin.de",124],["materna.de",124],["bamf.de",124],["tenvinilo-argentina.com",[125,126]],["eikaforsikring.no",[127,128]],["eurowings.com",[129,130,131]],["newpharma.be",[132,133,134]],["newpharma.fr",[132,133,134]],["newpharma.de",[132,133,134]],["newpharma.at",[132,133,134]],["newpharma.nl",[132,133,134]],["kapoorwatch.com",135],["instantoffices.com",136],["paf.se",136],["citibankonline.pl",136],["azertyfactor.be",137],["zelezodum.cz",138],["thw.de",139],["bafa.de",139],["bka.de",139],["bmbf.de",139],["weather.com",140],["bolist.se",[141,142]],["project529.com",142],["evivanlanschot.nl",143],["prenatal.nl",144],["onnibus.com",[144,777,778,779]],["kyoceradocumentsolutions.us",[144,822,823]],["kyoceradocumentsolutions.ch",[144,822,823]],["kyoceradocumentsolutions.co.uk",[144,822,823]],["kyoceradocumentsolutions.de",[144,822,823]],["kyoceradocumentsolutions.es",[144,822,823]],["kyoceradocumentsolutions.eu",[144,822,823]],["kyoceradocumentsolutions.fr",[144,822,823]],["kyoceradocumentsolutions.it",[144,822,823]],["kyoceradocumentsolutions.ru",[144,822,823]],["kyoceradocumentsolutions.mx",[144,822,823]],["kyoceradocumentsolutions.cl",[144,822,823]],["kyoceradocumentsolutions.com.br",[144,822,823]],["wagner-tuning.com",[145,146,147,148]],["waitrosecellar.com",[149,150,151,152]],["waitrose.com",[149,499]],["kvk.nl",[153,154,155]],["macfarlanes.com",156],["pole-emploi.fr",157],["gardenmediaguild.co.uk",158],["samplerite.com",159],["samplerite.cn",159],["sororedit.com",160],["blukit.com.br",161],["biegnaszczyt.pl",162],["staff-gallery.com",163],["itv.com",164],["dvag.de",165],["premierinn.com",[166,167,168,169]],["whitbreadinns.co.uk",[166,167,168,169]],["barandblock.co.uk",[166,167,168,169]],["tabletable.co.uk",[166,167,168,169]],["brewersfayre.co.uk",[166,167,168,169]],["beefeater.co.uk",[166,167,168,169]],["allstarssportsbars.co.uk",[170,171]],["babiesrus.ca",172],["toysrus.ca",172],["roomsandspaces.ca",172],["athletic-club.eus",[173,174,175]],["wattoo.dk",176],["wattoo.no",176],["texthelp.com",[177,178]],["courierexchange.co.uk",[179,180,181]],["haulageexchange.co.uk",[179,180,181]],["powerball.com",182],["tlaciarik.sk",182],["tiskarik.cz",182],["sseriga.edu",[183,184]],["rt.com",185],["swrng.de",186],["crfop.gdos.gov.pl",187],["nurgutes.de",188],["kpcen-torun.edu.pl",189],["opintopolku.fi",190],["app.erevie.pl",191],["debenhams.com",192],["archiwumalle.pl",193],["konicaminolta.ca",194],["konicaminolta.us",194],["deutschebank-dbdirect.com",[195,196,197]],["dbonline.deutsche-bank.es",[195,196,197]],["deutsche-bank.es",[195,196,197]],["hipotecaonline.db.com",198],["kangasalansanomat.fi",199],["eif.org",200],["tunnelmb.net",200],["sugi-net.jp",201],["understandingsociety.ac.uk",202],["bettertires.com",203],["electroprecio.com",203],["autohero.com",203],["leibniz.com",203],["computerbase.de",[203,819]],["bargaintown.ie",204],["tui.nl",205],["doppelmayr.com",206],["case-score.com",[207,208]],["cote.co.uk",209],["finimize.com",209],["blxxded.com",210],["rtu.lv",211],["sysdream.com",212],["cinemarkca.com",213],["neander-zahn.de",214],["theadelphileeds.co.uk",215],["tobycarvery.co.uk",215],["carsupermarket.com",215],["viajesatodotren.com",216],["ticketingcine.fr",217],["agenziavista.it",218],["e-chladiva.cz",218],["bitecode.dev",219],["mjob.si",[220,221,222]],["airportrentacar.gr",223],["mobile-fueling.de",223],["plos.org",224],["autohaus24.de",225],["sixt-neuwagen.de",225],["gadis.es",[226,227]],["dom.ru",227],["ford-kimmerle-reutlingen.de",228],["autohaus-reitermayer.de",228],["autohaus-diefenbach-waldbrunn.de",228],["autohaus-diefenbach.de",228],["autohaus-musberg.de",228],["ford-ah-im-hunsrueck-simmern.de",228],["ford-arndt-goerlitz.de",228],["ford-autogalerie-alfeld.de",228],["ford-bacher-schrobenhausen.de",228],["ford-bathauer-bad-harzburg.de",228],["ford-behrend-waren.de",228],["ford-bergland-frankfurt-oder.de",228],["ford-bergland-wipperfuerth.de",228],["ford-besico-glauchau.de",228],["ford-besico-nuernberg.de",228],["ford-bischoff-neumuenster.de",228],["ford-bodach-borgentreich.de",228],["ford-bunk-saarbruecken.de",228],["ford-bunk-voelklingen.de",228],["ford-busch-kirchberg.de",228],["ford-diermeier-muenchen.de",228],["ford-dinnebier-leipzig.de",228],["ford-duennes-regensburg.de",228],["ford-fischer-bochum.de",228],["ford-fischer-muenster.de",228],["ford-foerster-koblenz.de",228],["ford-fuchs-uffenheim.de",228],["ford-geberzahn-koeln.de",228],["ford-gerstmann-duesseldorf.de",228],["ford-haefner-und-strunk-kassel.de",228],["ford-hartmann-kempten.de",228],["ford-hartmann-rastatt.de",228],["ford-hatzner-karlsruhe.de",228],["ford-heine-hoexter.de",228],["ford-hentschel-hildesheim.de",228],["ford-hessengarage-dreieich.de",228],["ford-hessengarage-frankfurt.de",228],["ford-hga-windeck.de",228],["ford-hommert-coburg.de",228],["ford-horstmann-rastede.de",228],["ford-janssen-sonsbeck.de",228],["ford-jochem-stingbert.de",228],["ford-jungmann-wuppertal.de",228],["ford-kestel-marktzeuln.de",228],["ford-klaiber-bad-friedrichshall.de",228],["ford-koenig-eschwege.de",228],["ford-kohlhoff-mannheim.de",228],["ford-kt-automobile-coesfeld.de",228],["ford-lackermann-wesel.de",228],["ford-ludewig-delligsen.de",228],["ford-maiwald-linsengericht.de",228],["ford-mertens-beckum.de",228],["ford-meyer-bad-oeynhausen.de",228],["ford-mgs-bayreuth.de",228],["ford-mgs-radebeul.de",228],["ford-muecke-berlin.de",228],["ford-norren-weissenthurm.de",228],["ford-nrw-garage-duesseldorf.de",228],["ford-nrw-garage-handweiser.de",228],["ford-nuding-remshalden.de",228],["ford-ohm-rendsburg.de",228],["ford-reinicke-muecheln.de",228],["ford-rennig.de",228],["ford-roerentrop-luenen.de",228],["ford-schankola-dudweiler.de",228],["ford-sg-goeppingen.de",228],["ford-sg-leonberg.de",228],["ford-sg-neu-ulm.de",228],["ford-sg-pforzheim.de",228],["ford-sg-waiblingen.de",228],["ford-storz-st-georgen.de",228],["ford-strunk-koeln.de",228],["ford-tobaben-hamburg.de",228],["ford-toenjes-zetel.de",228],["ford-wagner-mayen.de",228],["ford-wahl-fritzlar.de",228],["ford-wahl-siegen.de",228],["ford-weege-bad-salzuflen.de",228],["ford-westhoff-hamm.de",228],["ford-wieland-hasbergen.de",228],["renault-autocenterprignitz-pritzwalk.de",228],["renault-spenrath-juelich.de",228],["vitalllit.com",229],["fincaparera.com",229],["dbnetbcn.com",229],["viba.barcelona",229],["anafaustinoatelier.com",229],["lamparasherrero.com",229],["calteixidor.cat",229],["argentos.barcelona",229],["anmarlube.com",229],["anynouxines.barcelona",229],["crearunapaginaweb.cat",229],["cualesmiip.com",229],["porndoe.com",[230,231,232]],["thinkingaustralia.com",233],["elrow.com",234],["ownit.se",235],["velo-antwerpen.be",[236,237]],["wwnorton.com",238],["pc-canada.com",239],["mullgs.se",240],["1a-sehen.de",241],["feature.fm",242],["comte.com",243],["baltic-watches.com",244],["np-brijuni.hr",244],["vilgain.com",244],["tradingview.com",245],["wevolver.com",246],["experienciasfree.com",247],["freemans.com",248],["kivikangas.fi",249],["lumingerie.com",249],["melkkobrew.fi",249],["kh.hu",[250,251,252]],["aplgo.com",253],["securityconference.org",254],["aha.or.at",[255,258]],["fantasyfitnessing.com",256],["chocolateemporium.com",257],["account.samsung.com",259],["crushwineco.com",260],["levi.pt",261],["fertagus.pt",262],["smiggle.co.uk",263],["ubisoft.com",[264,265,266,267]],["store.ubisoft.com",[264,267,703,704]],["thulb.uni-jena.de",268],["splityourticket.co.uk",269],["eramba.org",270],["openai.com",271],["kupbilecik.com",[272,273]],["kupbilecik.de",[272,273]],["kupbilecik.pl",[272,273]],["shopilya.com",274],["arera.it",275],["haustier-berater.de",275],["hfm-frankfurt.de",275],["zoommer.ge",276],["studentapan.se",277],["petcity.lt",[278,279,280,281]],["tobroco.com",[282,286]],["tobroco.nl",[282,286]],["tobroco-giant.com",[282,286]],["geosfreiberg.de",[283,284]],["eapvic.org",285],["bassolsenergia.com",285],["bammusic.com",[287,289,290]],["green-24.de",288],["phish-test.de",291],["bokadirekt.se",292],["ford.lt",293],["ford.pt",293],["ford.fr",293],["ford.de",293],["ford.dk",293],["ford.pl",293],["ford.se",293],["ford.nl",293],["ford.no",293],["ford.fi",293],["ford.gr",293],["ford.it",293],["data-media.gr",294],["e-food.gr",[295,296]],["bvmed.de",297],["babyshop.com",[298,299,300]],["griffbereit24.de",301],["checkwx.com",302],["calendardate.com",303],["wefashion.ch",304],["wefashion.fr",304],["wefashion.lu",304],["wefashion.be",304],["wefashion.de",304],["wefashion.nl",304],["brettspiel-angebote.de",[305,306]],["nio.com",307],["kancelarskepotreby.net",[308,309,310]],["segment-anything.com",311],["sketch.metademolab.com",312],["cambridgebs.co.uk",313],["freizeitbad-greifswald.de",314],["giuseppezanotti.com",[315,316,317]],["xcen.se",317],["biggreenegg.co.uk",318],["skihuette-oberbeuren.de",[319,320,321]],["pwsweather.com",322],["xfree.com",323],["theweathernetwork.com",[324,325]],["monese.com",[326,327,328]],["assos.com",326],["helmut-fischer.com",329],["myscience.org",330],["7-eleven.com",331],["airwallex.com",332],["streema.com",333],["gov.lv",334],["tise.com",335],["codecamps.com",336],["avell.com.br",337],["moneyfarm.com",338],["app.moneyfarm.com",338],["simpl.rent",339],["hubspot.com",340],["prodyna.com",[341,342,343,344]],["zutobi.com",[341,342,343,344]],["calm.com",[345,346]],["pubgesports.com",[347,348,349]],["outwrite.com",350],["sberbank.com",351],["sbermarket.ru",352],["atani.com",[353,354,355]],["croisieresendirect.com",356],["bgextras.co.uk",357],["sede.coruna.gal",358],["czech-server.cz",359],["hitech-gamer.com",360],["bialettikave.hu",[361,362,363]],["canalplus.com",[364,365,366]],["mader.bz.it",[367,368,369]],["supply.amazon.co.uk",370],["bhaptics.com",371],["cleverbot.com",372],["watchaut.film",373],["tuffaloy.com",374],["fanvue.com",374],["electronoobs.com",375],["xn--lkylen-vxa.se",376],["tiefenthaler-landtechnik.at",377],["tiefenthaler-landtechnik.ch",377],["tiefenthaler-landtechnik.de",377],["varma.fi",378],["vyos.io",379],["digimobil.es",[380,381]],["teenage.engineering",382],["merrell.pl",[383,644]],["converse.pl",383],["shop.wf-education.com",[383,644]],["werkenbijaswatson.nl",384],["converse.com",[385,386]],["buyandapply.nexus.org.uk",387],["img.ly",388],["halonen.fi",[388,420,421,422,423]],["carlson.fi",[388,420,421,422,423]],["cams.ashemaletube.com",[389,390]],["electronicacerler.com",[391,392,393]],["okpoznan.pl",[394,399]],["ielts.idp.com",395],["ielts.co.nz",395],["ielts.com.au",395],["einfach-einreichen.de",[396,397,398]],["endlesstools.io",400],["mbhszepkartya.hu",401],["casellimoveis.com.br",402],["embedplus.com",403],["e-file.pl",404],["sp215.info",405],["empik.com",406],["senda.pl",407],["befestigungsfuchs.de",408],["cut-tec.co.uk",409],["gaytimes.co.uk",410],["statisticsanddata.org",411],["hello.one",412],["paychex.com",413],["wildcat-koeln.de",414],["libraries.merton.gov.uk",[415,416]],["tommy.hr",[417,418]],["usit.uio.no",419],["demo-digital-twin.r-stahl.com",424],["la31devalladolid.com",[425,426]],["mx.com",427],["foxtrail.fjallraven.com",428],["dotwatcher.cc",429],["bazarchic.com",[430,431,432]],["seedrs.com",433],["mypensiontracker.co.uk",434],["praxisplan.at",[434,457]],["endclothing.com",435],["esimplus.me",436],["cineplanet.com.pe",437],["ecologi.com",438],["wamba.com",439],["eurac.edu",440],["akasaair.com",441],["rittal.com",442],["5asec.ch",443],["wizards.com",443],["worstbassist.com",[444,445,446,447,448,449]],["zs-watch.com",450],["crown.com",451],["mesanalyses.fr",452],["teket.jp",453],["fish.shimano.com",[454,455,456]],["simsherpa.com",[458,459,460]],["translit.ru",461],["aruba.com",462],["aireuropa.com",463],["skfbearingselect.com",[464,465]],["scanrenovation.com",466],["ttela.se",467],["dominospizza.pl",468],["devagroup.pl",469],["horecaworld.biz",470],["horecaworld.be",470],["secondsol.com",470],["angelifybeauty.com",471],["cotopaxi.com",472],["justjoin.it",473],["digibest.pt",474],["two-notes.com",475],["theverge.com",476],["daimant.co",477],["secularism.org.uk",478],["karriere-hamburg.de",479],["musicmap.info",480],["gasspisen.se",481],["medtube.pl",482],["medtube.es",482],["medtube.fr",482],["medtube.net",482],["standard.sk",483],["linmot.com",484],["larian.com",[484,767]],["containerandpackaging.com",485],["top-yp.de",486],["termania.net",487],["account.nowpayments.io",488],["fizjobaza.pl",489],["gigasport.at",490],["gigasport.de",490],["gigasport.ch",490],["velleahome.gr",491],["nicequest.com",492],["handelsbanken.no",493],["handelsbanken.com",493],["handelsbanken.co.uk",493],["handelsbanken.se",[493,572]],["handelsbanken.dk",493],["handelsbanken.fi",493],["songtradr.com",[494,751]],["logo.pt",[495,496]],["flexwhere.co.uk",[497,498]],["flexwhere.de",[497,498]],["pricewise.nl",497],["getunleash.io",497],["dentmania.de",497],["free.navalny.com",497],["latoken.com",497],["campusbrno.cz",[500,501,502]],["secrid.com",503],["etsy.com",504],["careers.cloud.com",504],["blablacar.rs",505],["blablacar.ru",505],["blablacar.com.tr",505],["blablacar.com.ua",505],["blablacar.com.br",505],["seb.se",506],["sebgroup.com",506],["deps.dev",507],["buf.build",508],["starofservice.com",509],["ytcomment.kmcat.uk",510],["gmx.com",511],["gmx.fr",511],["karofilm.ru",512],["octopusenergy.it",513],["octopusenergy.es",[513,514]],["justanswer.es",515],["justanswer.de",515],["justanswer.com",515],["justanswer.co.uk",515],["citilink.ru",516],["huutokaupat.com",517],["kaggle.com",518],["emr.ch",[519,524]],["gem.cbc.ca",520],["pumatools.hu",521],["ici.tou.tv",522],["crunchyroll.com",523],["mayflex.com",525],["clipchamp.com",525],["trouwenbijfletcher.nl",525],["fletcher.nl",525],["fletcherzakelijk.nl",525],["intermatic.com",525],["ebikelohr.de",526],["eurosender.com",527],["melectronics.ch",528],["guard.io",529],["nokportalen.se",530],["dokiliko.com",531],["valamis.com",[532,533,534]],["sverigesingenjorer.se",535],["shop.almawin.de",[536,537,538,575]],["zeitzurtrauer.de",539],["skaling.de",[540,541,542]],["bringmeister.de",543],["gdx.net",544],["clearblue.com",545],["drewag.de",[546,547,548]],["enso.de",[546,547,548]],["buidlbox.io",546],["helitransair.com",549],["more.com",550],["nwslsoccer.com",550],["climatecentral.org",551],["resolution.de",552],["flagma.by",553],["eatsalad.com",554],["pacstall.dev",555],["web2.0calc.fr",556],["de-appletradein.likewize.com",557],["swissborg.com",558],["qwice.com",559],["canalpluskuchnia.pl",[560,561]],["uizard.io",562],["stmas.bayern.de",[563,566]],["novayagazeta.eu",564],["kinopoisk.ru",565],["yandex.ru",565],["go.netia.pl",[567,568]],["polsatboxgo.pl",[567,568]],["ing.it",[569,570]],["ing.nl",571],["youcom.com.br",573],["rule34.paheal.net",574],["kellermann-online.com",575],["kletterkogel.de",575],["pnel.de",575],["korodrogerie.de",575],["der-puten-shop.de",575],["katapult-shop.de",575],["evocsports.com",575],["esm-computer.de",575],["calmwaters.de",575],["mellerud.de",575],["akustik-projekt.at",575],["vansprint.de",575],["0815.at",575],["0815.eu",575],["ojskate.com",575],["der-schweighofer.de",575],["tz-bedarf.de",575],["zeinpharma.de",575],["weicon.com",575],["dagvandewebshop.be",575],["thiele-tee.de",575],["carbox.de",575],["riapsport.de",575],["trendpet.de",575],["eheizung24.de",575],["seemueller.com",575],["vivande.de",575],["heidegrill.com",575],["gladiator-fightwear.com",575],["h-andreas.com",575],["pp-parts.com",575],["natuerlich-holzschuhe.de",575],["massivart.de",575],["malermeister-shop.de",575],["imping-confiserie.de",575],["lenox-trading.at",575],["cklenk.de",575],["catolet.de",575],["drinkitnow.de",575],["patisserie-m.de",575],["storm-proof.com",575],["balance-fahrradladen.de",575],["magicpos.shop",575],["zeinpharma.com",575],["sps-handel.net",575],["novagenics.com",575],["butterfly-circus.de",575],["holzhof24.de",575],["w6-wertarbeit.de",575],["fleurop.de",575],["leki.com",575],["extremeaudio.de",575],["taste-market.de",575],["delker-optik.de",575],["stuhl24-shop.de",575],["g-nestle.de",575],["alpine-hygiene.ch",575],["fluidmaster.it",575],["cordon.de",575],["belisse-beauty.de",575],["belisse-beauty.co.uk",575],["wpc-shop24.de",575],["liv.si",575],["maybach-luxury.com",575],["leiternprofi24.de",575],["hela-shop.eu",575],["hitado.de",575],["armedangels.com",[575,651,652]],["hofer-kerzen.at",576],["karls-shop.de",577],["firmen.wko.at",578],["byggern.no",579],["donauauen.at",580],["woltair.cz",581],["rostics.ru",582],["hife.es",583],["lilcat.com",584],["hot.si",[585,586,587,588]],["crenolibre.fr",589],["e-pole.pl",590],["dopt.com",591],["keb-automation.com",592],["bonduelle.ru",593],["oxfordonlineenglish.com",594],["pccomponentes.fr",595],["pccomponentes.com",595],["pccomponentes.pt",595],["grants.at",596],["africa-uninet.at",596],["rqb.at",596],["youngscience.at",596],["oead.at",596],["innovationsstiftung-bildung.at",596],["etwinning.at",596],["arqa-vet.at",596],["zentrumfuercitizenscience.at",596],["vorstudienlehrgang.at",596],["erasmusplus.at",596],["jeger.pl",597],["bo.de",598],["thegamingwatcher.com",599],["norlysplay.dk",600],["plusujemy.pl",601],["asus.com.cn",[602,604]],["zentalk.asus.com",[602,604]],["mubi.com",603],["59northwheels.se",605],["photospecialist.co.uk",606],["foto-gregor.de",606],["kamera-express.de",606],["kamera-express.be",606],["kamera-express.nl",606],["kamera-express.fr",606],["kamera-express.lu",606],["dhbbank.com",607],["dhbbank.de",607],["dhbbank.be",607],["dhbbank.nl",607],["login.ingbank.pl",608],["fabrykacukiernika.pl",[609,610]],["peaks.com",611],["3landesmuseen-braunschweig.de",612],["unifachbuch.de",[613,614,615]],["playlumi.com",[616,617,618]],["chatfuel.com",619],["studio3t.com",[620,621,622,623]],["realgap.co.uk",[624,625,626,627]],["hotelborgia.com",[628,629]],["sweet24.de",630],["zwembaddekouter.be",631],["flixclassic.pl",632],["jobtoday.com",633],["deltatre.com",[634,635,649]],["withings.com",[636,637,638]],["blista.de",[639,640]],["hashop.nl",641],["gift.be",[642,643]],["elevator.de",644],["foryouehealth.de",644],["animaze.us",644],["penn-elcom.com",644],["curantus.de",644],["mtbmarket.de",644],["spanienweinonline.ch",644],["novap.fr",644],["bizkaia.eus",[645,646,647]],["sinparty.com",648],["mantel.com",650],["e-dojus.lv",653],["burnesspaull.com",654],["oncosur.org",655],["photobooth.online",656],["epidemicsound.com",657],["ryanair.com",658],["refurbished.at",[659,660,661]],["refurbished.nl",[659,660,661]],["refurbished.be",[659,660,661]],["refurbishedstore.de",[659,660,661]],["bayernportal.de",[662,663,664]],["ayudatpymes.com",665],["zipjob.com",665],["plastischechirurgie-muenchen.info",666],["bonn.sitzung-online.de",667],["depop.com",[668,669,670]],["thenounproject.com",671],["pricehubble.com",672],["ilmotorsport.de",673],["karate.com",674],["psbank.ru",674],["myriad.social",674],["exeedme.com",674],["followalice.com",[674,742]],["aqua-store.fr",675],["voila.ca",676],["anastore.com",677],["app.arzt-direkt.de",678],["dasfutterhaus.at",679],["e-pity.pl",680],["fillup.pl",681],["dailymotion.com",682],["barcawelt.de",683],["lueneburger-heide.de",684],["polizei.bayern.de",[685,687]],["ourworldofpixels.com",686],["jku.at",688],["matkahuolto.fi",689],["backmarket.de",[690,691,692]],["backmarket.co.uk",[690,691,692]],["backmarket.es",[690,691,692]],["backmarket.be",[690,691,692]],["backmarket.at",[690,691,692]],["backmarket.fr",[690,691,692]],["backmarket.gr",[690,691,692]],["backmarket.fi",[690,691,692]],["backmarket.ie",[690,691,692]],["backmarket.it",[690,691,692]],["backmarket.nl",[690,691,692]],["backmarket.pt",[690,691,692]],["backmarket.se",[690,691,692]],["backmarket.sk",[690,691,692]],["backmarket.com",[690,691,692]],["eleven-sportswear.cz",[693,694,695]],["silvini.com",[693,694,695]],["silvini.de",[693,694,695]],["purefiji.cz",[693,694,695]],["voda-zdarma.cz",[693,694,695]],["lesgarconsfaciles.com",[693,694,695]],["ulevapronohy.cz",[693,694,695]],["vitalvibe.eu",[693,694,695]],["plavte.cz",[693,694,695]],["mo-tools.cz",[693,694,695]],["flamantonlineshop.cz",[693,694,695]],["sandratex.cz",[693,694,695]],["norwayshop.cz",[693,694,695]],["3d-foto.cz",[693,694,695]],["neviditelnepradlo.cz",[693,694,695]],["nutrimedium.com",[693,694,695]],["silvini.cz",[693,694,695]],["karel.cz",[693,694,695]],["silvini.sk",[693,694,695]],["book-n-drive.de",696],["cotswoldoutdoor.com",697],["cotswoldoutdoor.ie",697],["cam.start.canon",698],["usnews.com",699],["researchaffiliates.com",700],["singkinderlieder.de",701],["stiegeler.com",702],["ba.com",[705,706,707,708,709,710,711]],["britishairways.com",[705,706,707,708,709,710,711]],["cineman.pl",[712,713,714]],["tv-trwam.pl",[712,713,714,715]],["qatarairways.com",[716,717,718,719,720]],["wedding.pl",721],["vivaldi.com",722],["emuia1.gugik.gov.pl",723],["nike.com",724],["adidas.at",725],["adidas.be",725],["adidas.ca",725],["adidas.ch",725],["adidas.cl",725],["adidas.co",725],["adidas.co.in",725],["adidas.co.kr",725],["adidas.co.nz",725],["adidas.co.th",725],["adidas.co.uk",725],["adidas.com",725],["adidas.com.ar",725],["adidas.com.au",725],["adidas.com.br",725],["adidas.com.my",725],["adidas.com.ph",725],["adidas.com.vn",725],["adidas.cz",725],["adidas.de",725],["adidas.dk",725],["adidas.es",725],["adidas.fi",725],["adidas.fr",725],["adidas.gr",725],["adidas.ie",725],["adidas.it",725],["adidas.mx",725],["adidas.nl",725],["adidas.no",725],["adidas.pe",725],["adidas.pl",725],["adidas.pt",725],["adidas.ru",725],["adidas.se",725],["adidas.sk",725],["colourbox.com",726],["ebilet.pl",727],["myeventeo.com",728],["snap.com",729],["louwman.nl",[730,731]],["ratemyprofessors.com",732],["filen.io",733],["leotrippi.com",734],["restaurantclub.pl",734],["context.news",734],["queisser.de",734],["grandprixradio.dk",[735,736,737,738,739]],["grandprixradio.nl",[735,736,737,738,739]],["grandprixradio.be",[735,736,737,738,739]],["businessclass.com",740],["quantamagazine.org",741],["hellotv.nl",743],["jisc.ac.uk",744],["lasestrellas.tv",745],["xn--digitaler-notenstnder-m2b.com",746],["schoonmaakgroothandelemmen.nl",746],["nanuko.de",746],["hair-body-24.de",746],["shopforyou47.de",746],["kreativverliebt.de",746],["anderweltverlag.com",746],["octavio-shop.com",746],["forcetools-kepmar.eu",746],["fantecshop.de",746],["hexen-werkstatt.shop",746],["shop-naturstrom.de",746],["biona-shop.de",746],["camokoenig.de",746],["bikepro.de",746],["kaffeediscount.com",746],["vamos-skateshop.com",746],["holland-shop.com",746],["avonika.com",746],["royal-oak.org",747],["hurton.pl",748],["officesuite.com",749],["fups.com",[750,752]],["scienceopen.com",753],["moebel-mahler-siebenlehn.de",[754,755]],["calendly.com",756],["batesenvironmental.co.uk",[757,758]],["ubereats.com",759],["101internet.ru",760],["bein.com",761],["beinsports.com",761],["figshare.com",762],["bitso.com",763],["gallmeister.fr",764],["eco-toimistotarvikkeet.fi",765],["proficient.fi",765],["developer.ing.com",766],["webtrack.dhlglobalmail.com",768],["webtrack.dhlecs.com",768],["ehealth.gov.gr",769],["calvinklein.se",[770,771,772]],["calvinklein.fi",[770,771,772]],["calvinklein.sk",[770,771,772]],["calvinklein.si",[770,771,772]],["calvinklein.ch",[770,771,772]],["calvinklein.ru",[770,771,772]],["calvinklein.com",[770,771,772]],["calvinklein.pt",[770,771,772]],["calvinklein.pl",[770,771,772]],["calvinklein.at",[770,771,772]],["calvinklein.nl",[770,771,772]],["calvinklein.hu",[770,771,772]],["calvinklein.lu",[770,771,772]],["calvinklein.lt",[770,771,772]],["calvinklein.lv",[770,771,772]],["calvinklein.it",[770,771,772]],["calvinklein.ie",[770,771,772]],["calvinklein.hr",[770,771,772]],["calvinklein.fr",[770,771,772]],["calvinklein.es",[770,771,772]],["calvinklein.ee",[770,771,772]],["calvinklein.de",[770,771,772]],["calvinklein.dk",[770,771,772]],["calvinklein.cz",[770,771,772]],["calvinklein.bg",[770,771,772]],["calvinklein.be",[770,771,772]],["calvinklein.co.uk",[770,771,772]],["ofdb.de",773],["dtksoft.com",774],["serverstoplist.com",775],["truecaller.com",776],["timhortons.co.th",[780,781,782,783,785,786]],["toyota.co.uk",[780,781,782,784,785,786]],["businessaccountingbasics.co.uk",[780,781,782,783,785,786]],["flickr.org",[780,781,782,783,785,786]],["espacocasa.com",780],["altraeta.it",780],["centrooceano.it",780],["allstoresdigital.com",780],["cultarm3d.de",780],["soulbounce.com",780],["fluidtopics.com",780],["uvetgbt.com",780],["malcorentacar.com",780],["emondo.de",780],["maspero.it",780],["kelkay.com",780],["underground-england.com",780],["vert.eco",780],["turcolegal.com",780],["magnet4blogging.net",780],["moovly.com",780],["automationafrica.co.za",780],["jornaldoalgarve.pt",780],["keravanenergia.fi",780],["kuopas.fi",780],["frag-machiavelli.de",780],["healthera.co.uk",780],["mobeleader.com",780],["powerup-gaming.com",780],["developer-blog.net",780],["medical.edu.mt",780],["deh.mt",780],["bluebell-railway.com",780],["ribescasals.com",780],["javea.com",780],["chinaimportal.com",780],["inds.co.uk",780],["raoul-follereau.org",780],["serramenti-milano.it",780],["cosasdemujer.com",780],["luz-blanca.info",780],["cosasdeviajes.com",780],["safehaven.io",780],["havocpoint.it",780],["motofocus.pl",780],["nomanssky.com",780],["drei-franken-info.de",780],["clausnehring.com",780],["alttab.net",780],["kinderleicht.berlin",780],["kiakkoradio.fi",780],["cosasdelcaribe.es",780],["de-sjove-jokes.dk",780],["serverprofis.de",780],["biographyonline.net",780],["iziconfort.com",780],["sportinnederland.com",780],["natureatblog.com",780],["wtsenergy.com",780],["cosasdesalud.es",780],["internetpasoapaso.com",780],["zurzeit.at",780],["contaspoupanca.pt",780],["steamdeckhq.com",[780,781,782,783,785,786]],["ipouritinc.com",[780,782,783]],["hemglass.se",[780,782,783,785,786]],["sumsub.com",[780,781,782]],["atman.pl",[780,781,782]],["fabriziovanmarciano.com",[780,781,782]],["nationalrail.com",[780,781,782]],["eett.gr",[780,781,782]],["funkypotato.com",[780,781,782]],["equalexchange.co.uk",[780,781,782]],["swnsdigital.com",[780,781,782]],["gogolf.fi",[780,783]],["hanse-haus-greifswald.de",780],["tampereenratikka.fi",[780,782,787,788]],["kymppikatsastus.fi",[782,785,831,832]],["doka.com",[789,790,791]],["abi.de",[792,793]],["studienwahl.de",[792,793]],["youthforum.org",794],["journal.hr",[795,796,797,798]],["howstuffworks.com",799],["stickypassword.com",[800,801,802]],["conversion-rate-experts.com",[803,804]],["merkur.si",[805,806,807]],["petitionenligne.com",[808,809]],["petitionenligne.be",[808,809]],["petitionenligne.fr",[808,809]],["petitionenligne.re",[808,809]],["petitionenligne.ch",[808,809]],["skrivunder.net",[808,809]],["petitiononline.uk",[808,809]],["petitions.nz",[808,809]],["petizioni.com",[808,809]],["peticao.online",[808,809]],["skrivunder.com",[808,809]],["peticiones.ar",[808,809]],["petities.com",[808,809]],["petitionen.com",[808,809]],["petice.com",[808,809]],["opprop.net",[808,809]],["peticiok.com",[808,809]],["peticiones.net",[808,809]],["peticion.es",[808,809]],["peticiones.pe",[808,809]],["peticiones.mx",[808,809]],["peticiones.cl",[808,809]],["peticije.online",[808,809]],["peticiones.co",[808,809]],["mediathek.lfv-bayern.de",810],["aluypvc.es",[811,812,813]],["pracuj.pl",[814,815,816,817,818]],["vki.at",820],["konsument.at",820],["chollometro.com",821],["dealabs.com",821],["hotukdeals.com",821],["pepper.it",821],["pepper.pl",821],["preisjaeger.at",821],["mydealz.de",821],["direct.travelinsurance.tescobank.com",[824,825,826,827,828,829,830,831]],["easyfind.ch",[833,834]],["e-shop.leonidas.com",[835,836]],["lastmile.lt",837],["veriff.com",838],["constantin.film",[839,840,841]],["notion.so",842],["omgevingsloketinzage.omgeving.vlaanderen.be",[843,844]],["primor.eu",845],["tameteo.com",846],["tempo.pt",846],["yourweather.co.uk",846],["meteored.cl",846],["meteored.mx",846],["tempo.com",846],["ilmeteo.net",846],["meteored.com.ar",846],["daswetter.com",846],["algarvevacation.net",847],["3sat.de",848],["oxxio.nl",[849,850]],["butterflyshop.dk",[851,852,853]],["praxis.nl",854],["brico.be",854],["kent.gov.uk",[855,856]]]);

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
    if ( /[^!#-+\--:<-[\]-~]/.test(value) ) {
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
