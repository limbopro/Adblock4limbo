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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["accept_cookies","accepted"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["cookie_consent_given","true"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__facebook__social","false"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["viewed_cookie_policy","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["gourmetfoodstore.com",4],["schulfahrt.de",5],["deutsche-finanzagentur.de",6],["thejazzcafelondon.com",7],["keeb.supply",8],["spb.hh.ru",9],["kaluga.hh.ru",9],["school.hh.ru",9],["rating.hh.ru",9],["novgorod.hh.ru",9],["xxxshemaleporn.com",[10,11]],["gayhits.com",[10,11]],["gaypornvideos.xxx",[10,11]],["sextubespot.com",[10,11]],["wewantjusticedao.org",12],["godbolt.org",13],["projectenglish.com.pl",[14,19]],["hintaopas.fi",14],["ledenicheur.fr",14],["prisjagt.dk",14],["prisjakt.no",14],["prisjakt.nu",14],["pricespy.co.uk",14],["pricespy.co.nz",14],["sae.fsc.ccoo.es",15],["piusx-college.nl",16],["yoomoney.ru",17],["vod.warszawa.pl",18],["freshis.com",20],["anker.com",20],["m.twitch.tv",21],["environment.data.gov.uk",22],["playtesting.games",23],["portal.by.aok.de",24],["umlandscout.de",25],["atombank.co.uk",[26,27,28]],["showtv.com.tr",29],["ldz.lv",30],["seventhgeneration.com",30],["press.princeton.edu",30],["vkf-renzel.nl",31],["booking.reederei-zingst.de",[32,33,34]],["booking.weisse-flotte.de",[32,33,34]],["booking2.reederei-hiddensee.de",[32,33,34]],["sanswiss.pl",35],["galaxy.com",36],["petdesk.com",37],["ivyexec.com",38],["railtech.com",39],["lottehotel.com",[40,41,42,43,44]],["paydirekt.de",45],["kijiji.ca",46],["posterstore.fr",47],["posterstore.eu",47],["posterstore.be",47],["posterstore.de",47],["posterstore.hu",47],["posterstore.ie",47],["posterstore.it",47],["posterstore.no",47],["posterstore.nl",47],["posterstore.pl",47],["posterstore.com",47],["posterstore.ae",47],["posterstore.ca",47],["posterstore.nz",47],["posterstore.es",47],["posterstore.kr",47],["posterstore.jp",47],["posterstore.dk",47],["posterstore.se",47],["posterstore.ch",47],["posterstore.at",47],["myriadicity.net",48],["dgsf.org",48],["endgame.id",49],["cashback-cards.ch",50],["swisscard.ch",50],["ahorn24.de",51],["blockdyor.com",52],["ticket.io",53],["omega-nuernberg.servicebund.com",54],["lojaboschferramentas.com.br",[55,57,58]],["shareloft.com",56],["jaapeden.nl",[59,60,61]],["eboo.lu",62],["lasmallagency.com",63],["lhsystems.com",[64,65,66,67]],["twomates.de",68],["intergiro.com",69],["healthygamer.gg",70],["telepizza.es",[71,72,73]],["telepizza.pt",[71,72,73]],["frisco.pl",74],["tyleenslang.nl",75],["schrikdraad.net",75],["kruiwagen.net",75],["pvcvoordeel.nl",75],["pvcbuis.com",75],["drainagebuizen.nl",75],["likewise.com",76],["longines.com",[77,78,79,80]],["vater-it.de",81],["biano.hu",82],["quebueno.es",83],["nadia.gov.gr",84],["hana-book.fr",85],["kzvb.de",86],["correosexpress.com",87],["cexpr.es",87],["rte.ie",88],["smart.com",89],["gry.pl",89],["gamesgames.com",89],["games.co.uk",89],["jetztspielen.de",89],["ourgames.ru",89],["permainan.co.id",89],["gioco.it",89],["jeux.fr",89],["juegos.com",89],["ojogos.com.br",89],["oyunskor.com",89],["spela.se",89],["spelletjes.nl",89],["agame.com",89],["spielen.com",89],["flashgames.ru",89],["games.co.id",89],["giochi.it",89],["jeu.fr",89],["spel.nl",89],["sartor-stoffe.de",90],["rockpoint.cz",90],["rockpoint.sk",90],["parfum-zentrum.de",90],["candy-store.cz",90],["tridge.com",91],["asus.com",[92,93]],["drinksking.sk",94],["neuhauschocolates.com",95],["commandsuite.it",96],["oktea.tw",97],["bafin.de",98],["materna.de",98],["bamf.de",98],["tenvinilo-argentina.com",[99,100]],["eikaforsikring.no",[101,102]],["eurowings.com",[103,104,105]],["newpharma.be",[106,107,108]],["newpharma.fr",[106,107,108]],["newpharma.de",[106,107,108]],["newpharma.at",[106,107,108]],["newpharma.nl",[106,107,108]],["kapoorwatch.com",109],["instantoffices.com",110],["paf.se",110],["citibankonline.pl",110],["azertyfactor.be",111],["zelezodum.cz",112],["thw.de",113],["bafa.de",113],["bka.de",113],["bmbf.de",113],["weather.com",114],["bolist.se",[115,116]],["project529.com",116],["evivanlanschot.nl",117],["prenatal.nl",118],["onnibus.com",[118,740,741,742]],["kyoceradocumentsolutions.us",[118,785,786]],["kyoceradocumentsolutions.ch",[118,785,786]],["kyoceradocumentsolutions.co.uk",[118,785,786]],["kyoceradocumentsolutions.de",[118,785,786]],["kyoceradocumentsolutions.es",[118,785,786]],["kyoceradocumentsolutions.eu",[118,785,786]],["kyoceradocumentsolutions.fr",[118,785,786]],["kyoceradocumentsolutions.it",[118,785,786]],["kyoceradocumentsolutions.ru",[118,785,786]],["kyoceradocumentsolutions.mx",[118,785,786]],["kyoceradocumentsolutions.cl",[118,785,786]],["kyoceradocumentsolutions.com.br",[118,785,786]],["wagner-tuning.com",[119,120,121,122]],["waitrosecellar.com",[123,124,125,126]],["waitrose.com",[123,473]],["kvk.nl",[127,128,129]],["macfarlanes.com",130],["pole-emploi.fr",131],["gardenmediaguild.co.uk",132],["samplerite.com",133],["samplerite.cn",133],["sororedit.com",134],["blukit.com.br",135],["biegnaszczyt.pl",136],["staff-gallery.com",137],["itv.com",138],["dvag.de",139],["premierinn.com",[140,141,142,143]],["whitbreadinns.co.uk",[140,141,142,143]],["barandblock.co.uk",[140,141,142,143]],["tabletable.co.uk",[140,141,142,143]],["brewersfayre.co.uk",[140,141,142,143]],["beefeater.co.uk",[140,141,142,143]],["allstarssportsbars.co.uk",[144,145]],["babiesrus.ca",146],["toysrus.ca",146],["roomsandspaces.ca",146],["athletic-club.eus",[147,148,149]],["wattoo.dk",150],["wattoo.no",150],["texthelp.com",[151,152]],["courierexchange.co.uk",[153,154,155]],["haulageexchange.co.uk",[153,154,155]],["powerball.com",156],["tlaciarik.sk",156],["tiskarik.cz",156],["sseriga.edu",[157,158]],["rt.com",159],["swrng.de",160],["crfop.gdos.gov.pl",161],["nurgutes.de",162],["kpcen-torun.edu.pl",163],["opintopolku.fi",164],["debenhams.com",165],["archiwumalle.pl",166],["konicaminolta.ca",167],["konicaminolta.us",167],["deutschebank-dbdirect.com",[168,169,170]],["dbonline.deutsche-bank.es",[168,169,170]],["deutsche-bank.es",[168,169,170]],["hipotecaonline.db.com",171],["kangasalansanomat.fi",172],["eif.org",173],["tunnelmb.net",173],["sugi-net.jp",174],["understandingsociety.ac.uk",175],["bettertires.com",176],["electroprecio.com",176],["autohero.com",176],["leibniz.com",176],["computerbase.de",[176,782]],["bargaintown.ie",177],["tui.nl",178],["doppelmayr.com",179],["case-score.com",[180,181]],["cote.co.uk",182],["finimize.com",182],["blxxded.com",183],["rtu.lv",184],["sysdream.com",185],["cinemarkca.com",186],["wedding.pl",187],["neander-zahn.de",188],["theadelphileeds.co.uk",189],["tobycarvery.co.uk",189],["carsupermarket.com",189],["viajesatodotren.com",190],["ticketingcine.fr",191],["agenziavista.it",192],["e-chladiva.cz",192],["bitecode.dev",193],["mjob.si",[194,195,196]],["airportrentacar.gr",197],["plos.org",198],["autohaus24.de",199],["sixt-neuwagen.de",199],["gadis.es",[200,201]],["dom.ru",201],["ford-kimmerle-reutlingen.de",202],["autohaus-reitermayer.de",202],["autohaus-diefenbach-waldbrunn.de",202],["autohaus-diefenbach.de",202],["autohaus-musberg.de",202],["ford-ah-im-hunsrueck-simmern.de",202],["ford-arndt-goerlitz.de",202],["ford-autogalerie-alfeld.de",202],["ford-bacher-schrobenhausen.de",202],["ford-bathauer-bad-harzburg.de",202],["ford-behrend-waren.de",202],["ford-bergland-frankfurt-oder.de",202],["ford-bergland-wipperfuerth.de",202],["ford-besico-glauchau.de",202],["ford-besico-nuernberg.de",202],["ford-bischoff-neumuenster.de",202],["ford-bodach-borgentreich.de",202],["ford-bunk-saarbruecken.de",202],["ford-bunk-voelklingen.de",202],["ford-busch-kirchberg.de",202],["ford-diermeier-muenchen.de",202],["ford-dinnebier-leipzig.de",202],["ford-duennes-regensburg.de",202],["ford-fischer-bochum.de",202],["ford-fischer-muenster.de",202],["ford-foerster-koblenz.de",202],["ford-fuchs-uffenheim.de",202],["ford-geberzahn-koeln.de",202],["ford-gerstmann-duesseldorf.de",202],["ford-haefner-und-strunk-kassel.de",202],["ford-hartmann-kempten.de",202],["ford-hartmann-rastatt.de",202],["ford-hatzner-karlsruhe.de",202],["ford-heine-hoexter.de",202],["ford-hentschel-hildesheim.de",202],["ford-hessengarage-dreieich.de",202],["ford-hessengarage-frankfurt.de",202],["ford-hga-windeck.de",202],["ford-hommert-coburg.de",202],["ford-horstmann-rastede.de",202],["ford-janssen-sonsbeck.de",202],["ford-jochem-stingbert.de",202],["ford-jungmann-wuppertal.de",202],["ford-kestel-marktzeuln.de",202],["ford-klaiber-bad-friedrichshall.de",202],["ford-koenig-eschwege.de",202],["ford-kohlhoff-mannheim.de",202],["ford-kt-automobile-coesfeld.de",202],["ford-lackermann-wesel.de",202],["ford-ludewig-delligsen.de",202],["ford-maiwald-linsengericht.de",202],["ford-mertens-beckum.de",202],["ford-meyer-bad-oeynhausen.de",202],["ford-mgs-bayreuth.de",202],["ford-mgs-radebeul.de",202],["ford-muecke-berlin.de",202],["ford-norren-weissenthurm.de",202],["ford-nrw-garage-duesseldorf.de",202],["ford-nrw-garage-handweiser.de",202],["ford-nuding-remshalden.de",202],["ford-ohm-rendsburg.de",202],["ford-reinicke-muecheln.de",202],["ford-rennig.de",202],["ford-roerentrop-luenen.de",202],["ford-schankola-dudweiler.de",202],["ford-sg-goeppingen.de",202],["ford-sg-leonberg.de",202],["ford-sg-neu-ulm.de",202],["ford-sg-pforzheim.de",202],["ford-sg-waiblingen.de",202],["ford-storz-st-georgen.de",202],["ford-strunk-koeln.de",202],["ford-tobaben-hamburg.de",202],["ford-toenjes-zetel.de",202],["ford-wagner-mayen.de",202],["ford-wahl-fritzlar.de",202],["ford-wahl-siegen.de",202],["ford-weege-bad-salzuflen.de",202],["ford-westhoff-hamm.de",202],["ford-wieland-hasbergen.de",202],["renault-autocenterprignitz-pritzwalk.de",202],["renault-spenrath-juelich.de",202],["vitalllit.com",203],["fincaparera.com",203],["dbnetbcn.com",203],["viba.barcelona",203],["anafaustinoatelier.com",203],["lamparasherrero.com",203],["calteixidor.cat",203],["argentos.barcelona",203],["anmarlube.com",203],["anynouxines.barcelona",203],["crearunapaginaweb.cat",203],["cualesmiip.com",203],["porndoe.com",[204,205,206]],["thinkingaustralia.com",207],["elrow.com",208],["ownit.se",209],["velo-antwerpen.be",[210,211]],["wwnorton.com",212],["pc-canada.com",213],["mullgs.se",214],["1a-sehen.de",215],["feature.fm",216],["comte.com",217],["baltic-watches.com",218],["np-brijuni.hr",218],["vilgain.com",218],["tradingview.com",219],["wevolver.com",220],["experienciasfree.com",221],["freemans.com",222],["kivikangas.fi",223],["lumingerie.com",223],["melkkobrew.fi",223],["kh.hu",[224,225,226]],["aplgo.com",227],["securityconference.org",228],["aha.or.at",[229,232]],["fantasyfitnessing.com",230],["chocolateemporium.com",231],["account.samsung.com",233],["crushwineco.com",234],["levi.pt",235],["fertagus.pt",236],["smiggle.co.uk",237],["ubisoft.com",[238,239,240,241]],["store.ubisoft.com",[238,241,672,673]],["thulb.uni-jena.de",242],["splityourticket.co.uk",243],["eramba.org",244],["openai.com",245],["kupbilecik.com",[246,247]],["kupbilecik.de",[246,247]],["kupbilecik.pl",[246,247]],["shopilya.com",248],["arera.it",249],["haustier-berater.de",249],["hfm-frankfurt.de",249],["zoommer.ge",250],["studentapan.se",251],["petcity.lt",[252,253,254,255]],["tobroco.com",[256,260]],["tobroco.nl",[256,260]],["tobroco-giant.com",[256,260]],["geosfreiberg.de",[257,258]],["eapvic.org",259],["bassolsenergia.com",259],["bammusic.com",[261,263,264]],["green-24.de",262],["phish-test.de",265],["bokadirekt.se",266],["ford.lt",267],["ford.pt",267],["ford.fr",267],["ford.de",267],["ford.dk",267],["ford.pl",267],["ford.se",267],["ford.nl",267],["ford.no",267],["ford.fi",267],["ford.gr",267],["ford.it",267],["data-media.gr",268],["e-food.gr",[269,270]],["bvmed.de",271],["babyshop.com",[272,273,274]],["griffbereit24.de",275],["checkwx.com",276],["calendardate.com",277],["wefashion.ch",278],["wefashion.fr",278],["wefashion.lu",278],["wefashion.be",278],["wefashion.de",278],["wefashion.nl",278],["brettspiel-angebote.de",[279,280]],["nio.com",281],["kancelarskepotreby.net",[282,283,284]],["segment-anything.com",285],["sketch.metademolab.com",286],["cambridgebs.co.uk",287],["freizeitbad-greifswald.de",288],["giuseppezanotti.com",[289,290,291]],["xcen.se",291],["biggreenegg.co.uk",292],["skihuette-oberbeuren.de",[293,294,295]],["pwsweather.com",296],["xfree.com",297],["theweathernetwork.com",[298,299]],["monese.com",[300,301,302]],["assos.com",300],["helmut-fischer.com",303],["myscience.org",304],["7-eleven.com",305],["airwallex.com",306],["streema.com",307],["gov.lv",308],["tise.com",309],["codecamps.com",310],["avell.com.br",311],["moneyfarm.com",312],["app.moneyfarm.com",312],["simpl.rent",313],["hubspot.com",314],["prodyna.com",[315,316,317,318]],["zutobi.com",[315,316,317,318]],["calm.com",[319,320]],["pubgesports.com",[321,322,323]],["outwrite.com",324],["sberbank.com",325],["sbermarket.ru",326],["atani.com",[327,328,329]],["croisieresendirect.com",330],["bgextras.co.uk",331],["sede.coruna.gal",332],["czech-server.cz",333],["hitech-gamer.com",334],["bialettikave.hu",[335,336,337]],["canalplus.com",[338,339,340]],["mader.bz.it",[341,342,343]],["supply.amazon.co.uk",344],["bhaptics.com",345],["cleverbot.com",346],["watchaut.film",347],["tuffaloy.com",348],["fanvue.com",348],["electronoobs.com",349],["xn--lkylen-vxa.se",350],["tiefenthaler-landtechnik.at",351],["tiefenthaler-landtechnik.ch",351],["tiefenthaler-landtechnik.de",351],["huisartsenpraktijkdoorn.nl",352],["varma.fi",353],["vyos.io",354],["digimobil.es",[355,356]],["teenage.engineering",357],["merrell.pl",[358,616]],["converse.pl",358],["shop.wf-education.com",[358,616]],["werkenbijaswatson.nl",359],["converse.com",[360,361]],["buyandapply.nexus.org.uk",362],["img.ly",363],["halonen.fi",[363,394,395,396,397]],["carlson.fi",[363,394,395,396,397]],["cams.ashemaletube.com",[364,365]],["electronicacerler.com",[366,367,368]],["okpoznan.pl",[369,374]],["ielts.idp.com",370],["ielts.co.nz",370],["ielts.com.au",370],["einfach-einreichen.de",[371,372,373]],["endlesstools.io",375],["thehacker.recipes",376],["mbhszepkartya.hu",377],["casellimoveis.com.br",378],["embedplus.com",379],["e-file.pl",380],["sp215.info",381],["empik.com",382],["senda.pl",383],["befestigungsfuchs.de",384],["cut-tec.co.uk",385],["gaytimes.co.uk",386],["hello.one",387],["wildcat-koeln.de",388],["libraries.merton.gov.uk",[389,390]],["tommy.hr",[391,392]],["usit.uio.no",393],["demo-digital-twin.r-stahl.com",398],["la31devalladolid.com",[399,400]],["mx.com",401],["foxtrail.fjallraven.com",402],["dotwatcher.cc",403],["bazarchic.com",[404,405,406]],["seedrs.com",407],["mypensiontracker.co.uk",408],["praxisplan.at",[408,431]],["endclothing.com",409],["esimplus.me",410],["cineplanet.com.pe",411],["ecologi.com",412],["wamba.com",413],["eurac.edu",414],["akasaair.com",415],["rittal.com",416],["wizards.com",417],["worstbassist.com",[418,419,420,421,422,423]],["zs-watch.com",424],["crown.com",425],["mesanalyses.fr",426],["teket.jp",427],["fish.shimano.com",[428,429,430]],["simsherpa.com",[432,433,434]],["translit.ru",435],["aruba.com",436],["aireuropa.com",437],["skfbearingselect.com",[438,439]],["scanrenovation.com",440],["ttela.se",441],["dominospizza.pl",442],["devagroup.pl",443],["horecaworld.biz",444],["horecaworld.be",444],["secondsol.com",444],["angelifybeauty.com",445],["cotopaxi.com",446],["justjoin.it",447],["digibest.pt",448],["two-notes.com",449],["theverge.com",450],["daimant.co",451],["secularism.org.uk",452],["karriere-hamburg.de",453],["musicmap.info",454],["gasspisen.se",455],["medtube.pl",456],["medtube.es",456],["medtube.fr",456],["medtube.net",456],["standard.sk",457],["linmot.com",458],["larian.com",[458,730]],["containerandpackaging.com",459],["top-yp.de",460],["termania.net",461],["account.nowpayments.io",462],["fizjobaza.pl",463],["gigasport.at",464],["gigasport.de",464],["gigasport.ch",464],["velleahome.gr",465],["nicequest.com",466],["handelsbanken.no",467],["handelsbanken.com",467],["handelsbanken.co.uk",467],["handelsbanken.se",[467,546]],["handelsbanken.dk",467],["handelsbanken.fi",467],["songtradr.com",[468,714]],["logo.pt",[469,470]],["flexwhere.co.uk",[471,472]],["flexwhere.de",[471,472]],["pricewise.nl",471],["getunleash.io",471],["dentmania.de",471],["free.navalny.com",471],["latoken.com",471],["campusbrno.cz",[474,475,476]],["secrid.com",477],["etsy.com",478],["seb.se",479],["sebgroup.com",479],["deps.dev",480],["buf.build",481],["starofservice.com",482],["ytcomment.kmcat.uk",483],["gmx.com",484],["gmx.fr",484],["karofilm.ru",485],["octopusenergy.it",486],["octopusenergy.es",[486,487]],["justanswer.es",488],["justanswer.de",488],["justanswer.com",488],["justanswer.co.uk",488],["citilink.ru",489],["huutokaupat.com",490],["kaggle.com",491],["emr.ch",[492,497]],["gem.cbc.ca",493],["pumatools.hu",494],["ici.tou.tv",495],["crunchyroll.com",496],["mayflex.com",498],["clipchamp.com",498],["trouwenbijfletcher.nl",498],["fletcher.nl",498],["fletcherzakelijk.nl",498],["intermatic.com",498],["ebikelohr.de",499],["eurosender.com",500],["melectronics.ch",501],["guard.io",502],["nokportalen.se",503],["dokiliko.com",504],["valamis.com",[505,506,507]],["sverigesingenjorer.se",508],["shop.almawin.de",[509,510,511,549]],["zeitzurtrauer.de",512],["skaling.de",[513,514,515]],["bringmeister.de",516],["gdx.net",517],["clearblue.com",518],["drewag.de",[519,520,521]],["enso.de",[519,520,521]],["buidlbox.io",519],["helitransair.com",522],["more.com",523],["nwslsoccer.com",523],["climatecentral.org",524],["resolution.de",525],["flagma.by",526],["eatsalad.com",527],["pacstall.dev",528],["web2.0calc.fr",529],["de-appletradein.likewize.com",530],["swissborg.com",531],["qwice.com",532],["canalpluskuchnia.pl",[533,534]],["uizard.io",535],["stmas.bayern.de",[536,539]],["novayagazeta.eu",537],["kinopoisk.ru",538],["yandex.ru",538],["go.netia.pl",[540,542]],["polsatboxgo.pl",[540,542]],["wst.tv",541],["ing.it",[543,544]],["ing.nl",545],["youcom.com.br",547],["rule34.paheal.net",548],["kletterkogel.de",549],["pnel.de",549],["korodrogerie.de",549],["der-puten-shop.de",549],["katapult-shop.de",549],["evocsports.com",549],["esm-computer.de",549],["calmwaters.de",549],["mellerud.de",549],["akustik-projekt.at",549],["vansprint.de",549],["0815.at",549],["0815.eu",549],["ojskate.com",549],["der-schweighofer.de",549],["tz-bedarf.de",549],["zeinpharma.de",549],["weicon.com",549],["dagvandewebshop.be",549],["thiele-tee.de",549],["carbox.de",549],["riapsport.de",549],["trendpet.de",549],["eheizung24.de",549],["seemueller.com",549],["vivande.de",549],["heidegrill.com",549],["gladiator-fightwear.com",549],["h-andreas.com",549],["pp-parts.com",549],["natuerlich-holzschuhe.de",549],["massivart.de",549],["malermeister-shop.de",549],["imping-confiserie.de",549],["lenox-trading.at",549],["cklenk.de",549],["catolet.de",549],["drinkitnow.de",549],["patisserie-m.de",549],["storm-proof.com",549],["balance-fahrradladen.de",549],["magicpos.shop",549],["zeinpharma.com",549],["sps-handel.net",549],["novagenics.com",549],["butterfly-circus.de",549],["holzhof24.de",549],["w6-wertarbeit.de",549],["fleurop.de",549],["leki.com",549],["extremeaudio.de",549],["taste-market.de",549],["delker-optik.de",549],["stuhl24-shop.de",549],["g-nestle.de",549],["alpine-hygiene.ch",549],["fluidmaster.it",549],["cordon.de",549],["belisse-beauty.de",549],["belisse-beauty.co.uk",549],["wpc-shop24.de",549],["liv.si",549],["maybach-luxury.com",549],["leiternprofi24.de",549],["hela-shop.eu",549],["hitado.de",549],["hofer-kerzen.at",550],["karls-shop.de",551],["firmen.wko.at",552],["byggern.no",553],["rostics.ru",554],["hife.es",555],["lilcat.com",556],["hot.si",[557,558,559,560]],["crenolibre.fr",561],["e-pole.pl",562],["dopt.com",563],["keb-automation.com",564],["bonduelle.ru",565],["oxfordonlineenglish.com",566],["pccomponentes.fr",567],["pccomponentes.com",567],["pccomponentes.pt",567],["grants.at",568],["africa-uninet.at",568],["rqb.at",568],["youngscience.at",568],["oead.at",568],["innovationsstiftung-bildung.at",568],["etwinning.at",568],["arqa-vet.at",568],["zentrumfuercitizenscience.at",568],["vorstudienlehrgang.at",568],["erasmusplus.at",568],["jeger.pl",569],["bo.de",570],["thegamingwatcher.com",571],["norlysplay.dk",572],["plusujemy.pl",573],["asus.com.cn",[574,576]],["zentalk.asus.com",[574,576]],["mubi.com",575],["59northwheels.se",577],["foto-gregor.de",578],["kamera-express.de",578],["kamera-express.be",578],["kamera-express.nl",578],["kamera-express.fr",578],["kamera-express.lu",578],["dhbbank.com",579],["dhbbank.de",579],["dhbbank.be",579],["dhbbank.nl",579],["login.ingbank.pl",580],["fabrykacukiernika.pl",[581,582]],["peaks.com",583],["3landesmuseen-braunschweig.de",584],["unifachbuch.de",[585,586,587]],["playlumi.com",[588,589,590]],["chatfuel.com",591],["studio3t.com",[592,593,594,595]],["realgap.co.uk",[596,597,598,599]],["hotelborgia.com",[600,601]],["sweet24.de",602],["zwembaddekouter.be",603],["flixclassic.pl",604],["jobtoday.com",605],["deltatre.com",[606,607,621]],["withings.com",[608,609,610]],["blista.de",[611,612]],["hashop.nl",613],["gift.be",[614,615]],["elevator.de",616],["foryouehealth.de",616],["animaze.us",616],["penn-elcom.com",616],["curantus.de",616],["mtbmarket.de",616],["spanienweinonline.ch",616],["novap.fr",616],["bizkaia.eus",[617,618,619]],["sinparty.com",620],["depop.com",[622,623,640]],["mantel.com",624],["armedangels.com",[625,626]],["e-dojus.lv",627],["burnesspaull.com",628],["oncosur.org",629],["ryanair.com",630],["refurbished.at",[631,632,633]],["refurbished.nl",[631,632,633]],["refurbished.be",[631,632,633]],["refurbishedstore.de",[631,632,633]],["bayernportal.de",[634,635,636]],["ayudatpymes.com",637],["zipjob.com",637],["plastischechirurgie-muenchen.info",638],["bonn.sitzung-online.de",639],["thenounproject.com",641],["pricehubble.com",642],["ilmotorsport.de",643],["karate.com",644],["psbank.ru",644],["myriad.social",644],["exeedme.com",644],["followalice.com",[644,706]],["aqua-store.fr",645],["voila.ca",646],["anastore.com",647],["app.arzt-direkt.de",648],["dasfutterhaus.at",649],["e-pity.pl",650],["fillup.pl",651],["dailymotion.com",652],["barcawelt.de",653],["lueneburger-heide.de",654],["polizei.bayern.de",[655,657]],["ourworldofpixels.com",656],["jku.at",658],["matkahuolto.fi",659],["backmarket.de",[660,661,662]],["backmarket.co.uk",[660,661,662]],["backmarket.es",[660,661,662]],["backmarket.be",[660,661,662]],["backmarket.at",[660,661,662]],["backmarket.fr",[660,661,662]],["backmarket.gr",[660,661,662]],["backmarket.fi",[660,661,662]],["backmarket.ie",[660,661,662]],["backmarket.it",[660,661,662]],["backmarket.nl",[660,661,662]],["backmarket.pt",[660,661,662]],["backmarket.se",[660,661,662]],["backmarket.sk",[660,661,662]],["backmarket.com",[660,661,662]],["eleven-sportswear.cz",[663,664,665]],["silvini.com",[663,664,665]],["silvini.de",[663,664,665]],["purefiji.cz",[663,664,665]],["voda-zdarma.cz",[663,664,665]],["lesgarconsfaciles.com",[663,664,665]],["ulevapronohy.cz",[663,664,665]],["vitalvibe.eu",[663,664,665]],["plavte.cz",[663,664,665]],["mo-tools.cz",[663,664,665]],["flamantonlineshop.cz",[663,664,665]],["sandratex.cz",[663,664,665]],["norwayshop.cz",[663,664,665]],["3d-foto.cz",[663,664,665]],["neviditelnepradlo.cz",[663,664,665]],["nutrimedium.com",[663,664,665]],["silvini.cz",[663,664,665]],["karel.cz",[663,664,665]],["silvini.sk",[663,664,665]],["book-n-drive.de",666],["cotswoldoutdoor.com",667],["cotswoldoutdoor.ie",667],["cam.start.canon",668],["usnews.com",669],["researchaffiliates.com",670],["singkinderlieder.de",671],["ba.com",[674,675,676]],["britishairways.com",[674,675,676]],["cineman.pl",[677,678,679]],["tv-trwam.pl",[677,678,679,680]],["qatarairways.com",[681,682,683,684,685]],["vivaldi.com",686],["emuia1.gugik.gov.pl",687],["nike.com",688],["adidas.at",689],["adidas.be",689],["adidas.ca",689],["adidas.ch",689],["adidas.cl",689],["adidas.co",689],["adidas.co.in",689],["adidas.co.kr",689],["adidas.co.nz",689],["adidas.co.th",689],["adidas.co.uk",689],["adidas.com",689],["adidas.com.ar",689],["adidas.com.au",689],["adidas.com.br",689],["adidas.com.my",689],["adidas.com.ph",689],["adidas.com.vn",689],["adidas.cz",689],["adidas.de",689],["adidas.dk",689],["adidas.es",689],["adidas.fi",689],["adidas.fr",689],["adidas.gr",689],["adidas.ie",689],["adidas.it",689],["adidas.mx",689],["adidas.nl",689],["adidas.no",689],["adidas.pe",689],["adidas.pl",689],["adidas.pt",689],["adidas.ru",689],["adidas.se",689],["adidas.sk",689],["colourbox.com",690],["ebilet.pl",691],["myeventeo.com",692],["snap.com",693],["louwman.nl",[694,695]],["ratemyprofessors.com",696],["filen.io",697],["leotrippi.com",698],["restaurantclub.pl",698],["context.news",698],["queisser.de",698],["grandprixradio.dk",[699,700,701,702,703]],["grandprixradio.nl",[699,700,701,702,703]],["grandprixradio.be",[699,700,701,702,703]],["businessclass.com",704],["quantamagazine.org",705],["scaleway.com",707],["hellotv.nl",708],["lasestrellas.tv",709],["nanuko.de",710],["hair-body-24.de",710],["shopforyou47.de",710],["kreativverliebt.de",710],["anderweltverlag.com",710],["octavio-shop.com",710],["forcetools-kepmar.eu",710],["fantecshop.de",710],["hexen-werkstatt.shop",710],["shop-naturstrom.de",710],["biona-shop.de",710],["camokoenig.de",710],["bikepro.de",710],["kaffeediscount.com",710],["vamos-skateshop.com",710],["holland-shop.com",710],["avonika.com",710],["hurton.pl",711],["officesuite.com",712],["fups.com",[713,715]],["scienceopen.com",716],["moebel-mahler-siebenlehn.de",[717,718]],["calendly.com",719],["batesenvironmental.co.uk",[720,721]],["ubereats.com",722],["101internet.ru",723],["bein.com",724],["beinsports.com",724],["figshare.com",725],["bitso.com",726],["gallmeister.fr",727],["eco-toimistotarvikkeet.fi",728],["proficient.fi",728],["developer.ing.com",729],["webtrack.dhlglobalmail.com",731],["webtrack.dhlecs.com",731],["ehealth.gov.gr",732],["calvinklein.se",[733,734,735]],["calvinklein.fi",[733,734,735]],["calvinklein.sk",[733,734,735]],["calvinklein.si",[733,734,735]],["calvinklein.ch",[733,734,735]],["calvinklein.ru",[733,734,735]],["calvinklein.com",[733,734,735]],["calvinklein.pt",[733,734,735]],["calvinklein.pl",[733,734,735]],["calvinklein.at",[733,734,735]],["calvinklein.nl",[733,734,735]],["calvinklein.hu",[733,734,735]],["calvinklein.lu",[733,734,735]],["calvinklein.lt",[733,734,735]],["calvinklein.lv",[733,734,735]],["calvinklein.it",[733,734,735]],["calvinklein.ie",[733,734,735]],["calvinklein.hr",[733,734,735]],["calvinklein.fr",[733,734,735]],["calvinklein.es",[733,734,735]],["calvinklein.ee",[733,734,735]],["calvinklein.de",[733,734,735]],["calvinklein.dk",[733,734,735]],["calvinklein.cz",[733,734,735]],["calvinklein.bg",[733,734,735]],["calvinklein.be",[733,734,735]],["calvinklein.co.uk",[733,734,735]],["ofdb.de",736],["dtksoft.com",737],["serverstoplist.com",738],["truecaller.com",739],["toyota.co.uk",[743,744,745,747,748,749]],["businessaccountingbasics.co.uk",[743,744,745,746,748,749]],["flickr.org",[743,744,745,746,748,749]],["espacocasa.com",743],["altraeta.it",743],["centrooceano.it",743],["allstoresdigital.com",743],["cultarm3d.de",743],["soulbounce.com",743],["fluidtopics.com",743],["uvetgbt.com",743],["malcorentacar.com",743],["emondo.de",743],["maspero.it",743],["kelkay.com",743],["underground-england.com",743],["vert.eco",743],["turcolegal.com",743],["magnet4blogging.net",743],["moovly.com",743],["automationafrica.co.za",743],["jornaldoalgarve.pt",743],["keravanenergia.fi",743],["kuopas.fi",743],["frag-machiavelli.de",743],["healthera.co.uk",743],["mobeleader.com",743],["powerup-gaming.com",743],["developer-blog.net",743],["medical.edu.mt",743],["deh.mt",743],["bluebell-railway.com",743],["ribescasals.com",743],["javea.com",743],["chinaimportal.com",743],["inds.co.uk",743],["raoul-follereau.org",743],["serramenti-milano.it",743],["cosasdemujer.com",743],["luz-blanca.info",743],["cosasdeviajes.com",743],["safehaven.io",743],["havocpoint.it",743],["motofocus.pl",743],["nomanssky.com",743],["drei-franken-info.de",743],["clausnehring.com",743],["alttab.net",743],["kinderleicht.berlin",743],["kiakkoradio.fi",743],["cosasdelcaribe.es",743],["de-sjove-jokes.dk",743],["serverprofis.de",743],["biographyonline.net",743],["iziconfort.com",743],["sportinnederland.com",743],["natureatblog.com",743],["wtsenergy.com",743],["cosasdesalud.es",743],["internetpasoapaso.com",743],["zurzeit.at",743],["contaspoupanca.pt",743],["steamdeckhq.com",[743,744,745,746,748,749]],["ipouritinc.com",[743,745,746]],["hemglass.se",[743,745,746,748,749]],["sumsub.com",[743,744,745]],["atman.pl",[743,744,745]],["fabriziovanmarciano.com",[743,744,745]],["nationalrail.com",[743,744,745]],["eett.gr",[743,744,745]],["funkypotato.com",[743,744,745]],["equalexchange.co.uk",[743,744,745]],["swnsdigital.com",[743,744,745]],["gogolf.fi",[743,746]],["hanse-haus-greifswald.de",743],["tampereenratikka.fi",[743,745,750,751]],["kymppikatsastus.fi",[745,748,787,788]],["doka.com",[752,753,754]],["abi.de",[755,756]],["studienwahl.de",[755,756]],["youthforum.org",757],["journal.hr",[758,759,760,761]],["howstuffworks.com",762],["stickypassword.com",[763,764,765]],["conversion-rate-experts.com",[766,767]],["merkur.si",[768,769,770]],["petitionenligne.com",[771,772]],["petitionenligne.be",[771,772]],["petitionenligne.fr",[771,772]],["petitionenligne.re",[771,772]],["petitionenligne.ch",[771,772]],["skrivunder.net",[771,772]],["petitiononline.uk",[771,772]],["petitions.nz",[771,772]],["petizioni.com",[771,772]],["peticao.online",[771,772]],["skrivunder.com",[771,772]],["peticiones.ar",[771,772]],["petities.com",[771,772]],["petitionen.com",[771,772]],["petice.com",[771,772]],["opprop.net",[771,772]],["peticiok.com",[771,772]],["peticiones.net",[771,772]],["peticion.es",[771,772]],["peticiones.pe",[771,772]],["peticiones.mx",[771,772]],["peticiones.cl",[771,772]],["peticije.online",[771,772]],["peticiones.co",[771,772]],["mediathek.lfv-bayern.de",773],["aluypvc.es",[774,775,776]],["pracuj.pl",[777,778,779,780,781]],["vki.at",783],["konsument.at",783],["chollometro.com",784],["dealabs.com",784],["hotukdeals.com",784],["pepper.it",784],["pepper.pl",784],["preisjaeger.at",784],["mydealz.de",784],["easyfind.ch",[789,790]],["e-shop.leonidas.com",[791,792]],["lastmile.lt",793],["constantin.film",[794,795,796]],["notion.so",797],["omgevingsloketinzage.omgeving.vlaanderen.be",[798,799]],["primor.eu",800],["tameteo.com",801],["tempo.pt",801],["yourweather.co.uk",801],["meteored.cl",801],["meteored.mx",801],["tempo.com",801],["ilmeteo.net",801],["meteored.com.ar",801],["daswetter.com",801],["algarvevacation.net",802],["3sat.de",803],["oxxio.nl",[804,805]],["butterflyshop.dk",[806,807,808]],["praxis.nl",809],["brico.be",809],["kent.gov.uk",[810,811]]]);

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
    name = encodeURIComponent(name);

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
        if ( n > 15 ) { return; }
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
