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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["accept_cookies","accepted"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["cookie_consent_given","true"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["viewed_cookie_policy","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["ilsaggiatore.com",4],["playbalatro.com",5],["kastner-oehler.de",6],["kastner-oehler.at",6],["kastner-oehler.ch",6],["gourmetfoodstore.com",7],["schulfahrt.de",8],["deutsche-finanzagentur.de",9],["thejazzcafelondon.com",10],["keeb.supply",11],["spb.hh.ru",12],["kaluga.hh.ru",12],["school.hh.ru",12],["rating.hh.ru",12],["novgorod.hh.ru",12],["xxxshemaleporn.com",[13,14]],["gayhits.com",[13,14]],["gaypornvideos.xxx",[13,14]],["sextubespot.com",[13,14]],["wewantjusticedao.org",15],["godbolt.org",16],["projectenglish.com.pl",[17,22]],["hintaopas.fi",17],["ledenicheur.fr",17],["prisjagt.dk",17],["prisjakt.no",17],["prisjakt.nu",17],["pricespy.co.uk",17],["pricespy.co.nz",17],["sae.fsc.ccoo.es",18],["piusx-college.nl",19],["yoomoney.ru",20],["vod.warszawa.pl",21],["freshis.com",23],["anker.com",23],["m.twitch.tv",24],["environment.data.gov.uk",25],["playtesting.games",26],["portal.by.aok.de",27],["umlandscout.de",28],["atombank.co.uk",[29,30,31]],["showtv.com.tr",32],["ldz.lv",33],["seventhgeneration.com",33],["press.princeton.edu",33],["vkf-renzel.nl",34],["booking.reederei-zingst.de",[35,36,37]],["booking.weisse-flotte.de",[35,36,37]],["booking2.reederei-hiddensee.de",[35,36,37]],["sanswiss.pl",38],["galaxy.com",39],["petdesk.com",40],["ivyexec.com",41],["railtech.com",42],["lottehotel.com",[43,44,45,46,47]],["paydirekt.de",48],["kijiji.ca",49],["posterstore.fr",50],["posterstore.eu",50],["posterstore.be",50],["posterstore.de",50],["posterstore.hu",50],["posterstore.ie",50],["posterstore.it",50],["posterstore.no",50],["posterstore.nl",50],["posterstore.pl",50],["posterstore.com",50],["posterstore.ae",50],["posterstore.ca",50],["posterstore.nz",50],["posterstore.es",50],["posterstore.kr",50],["posterstore.jp",50],["posterstore.dk",50],["posterstore.se",50],["posterstore.ch",50],["posterstore.at",50],["myriadicity.net",51],["dgsf.org",51],["endgame.id",52],["cashback-cards.ch",53],["swisscard.ch",53],["ahorn24.de",54],["blockdyor.com",55],["ticket.io",56],["omega-nuernberg.servicebund.com",57],["lojaboschferramentas.com.br",[58,60,61]],["shareloft.com",59],["jaapeden.nl",[62,63,64]],["eboo.lu",65],["lasmallagency.com",66],["lhsystems.com",[67,68,69,70]],["twomates.de",71],["intergiro.com",72],["healthygamer.gg",73],["telepizza.es",[74,75,76]],["telepizza.pt",[74,75,76]],["frisco.pl",77],["tyleenslang.nl",78],["schrikdraad.net",78],["kruiwagen.net",78],["pvcvoordeel.nl",78],["pvcbuis.com",78],["drainagebuizen.nl",78],["likewise.com",79],["longines.com",[80,81,82,83]],["vater-it.de",84],["biano.hu",85],["quebueno.es",86],["nadia.gov.gr",87],["hana-book.fr",88],["kzvb.de",89],["correosexpress.com",90],["cexpr.es",90],["rte.ie",91],["smart.com",92],["gry.pl",92],["gamesgames.com",92],["games.co.uk",92],["jetztspielen.de",92],["ourgames.ru",92],["permainan.co.id",92],["gioco.it",92],["jeux.fr",92],["juegos.com",92],["ojogos.com.br",92],["oyunskor.com",92],["spela.se",92],["spelletjes.nl",92],["agame.com",92],["spielen.com",92],["flashgames.ru",92],["games.co.id",92],["giochi.it",92],["jeu.fr",92],["spel.nl",92],["sartor-stoffe.de",93],["rockpoint.cz",93],["rockpoint.sk",93],["parfum-zentrum.de",93],["candy-store.cz",93],["tridge.com",94],["asus.com",[95,96]],["drinksking.sk",97],["neuhauschocolates.com",98],["commandsuite.it",99],["oktea.tw",100],["bafin.de",101],["materna.de",101],["bamf.de",101],["tenvinilo-argentina.com",[102,103]],["eikaforsikring.no",[104,105]],["eurowings.com",[106,107,108]],["newpharma.be",[109,110,111]],["newpharma.fr",[109,110,111]],["newpharma.de",[109,110,111]],["newpharma.at",[109,110,111]],["newpharma.nl",[109,110,111]],["kapoorwatch.com",112],["instantoffices.com",113],["paf.se",113],["citibankonline.pl",113],["azertyfactor.be",114],["zelezodum.cz",115],["thw.de",116],["bafa.de",116],["bka.de",116],["bmbf.de",116],["weather.com",117],["bolist.se",[118,119]],["project529.com",119],["evivanlanschot.nl",120],["prenatal.nl",121],["onnibus.com",[121,745,746,747]],["kyoceradocumentsolutions.us",[121,790,791]],["kyoceradocumentsolutions.ch",[121,790,791]],["kyoceradocumentsolutions.co.uk",[121,790,791]],["kyoceradocumentsolutions.de",[121,790,791]],["kyoceradocumentsolutions.es",[121,790,791]],["kyoceradocumentsolutions.eu",[121,790,791]],["kyoceradocumentsolutions.fr",[121,790,791]],["kyoceradocumentsolutions.it",[121,790,791]],["kyoceradocumentsolutions.ru",[121,790,791]],["kyoceradocumentsolutions.mx",[121,790,791]],["kyoceradocumentsolutions.cl",[121,790,791]],["kyoceradocumentsolutions.com.br",[121,790,791]],["wagner-tuning.com",[122,123,124,125]],["waitrosecellar.com",[126,127,128,129]],["waitrose.com",[126,476]],["kvk.nl",[130,131,132]],["macfarlanes.com",133],["pole-emploi.fr",134],["gardenmediaguild.co.uk",135],["samplerite.com",136],["samplerite.cn",136],["sororedit.com",137],["blukit.com.br",138],["biegnaszczyt.pl",139],["staff-gallery.com",140],["itv.com",141],["dvag.de",142],["premierinn.com",[143,144,145,146]],["whitbreadinns.co.uk",[143,144,145,146]],["barandblock.co.uk",[143,144,145,146]],["tabletable.co.uk",[143,144,145,146]],["brewersfayre.co.uk",[143,144,145,146]],["beefeater.co.uk",[143,144,145,146]],["allstarssportsbars.co.uk",[147,148]],["babiesrus.ca",149],["toysrus.ca",149],["roomsandspaces.ca",149],["athletic-club.eus",[150,151,152]],["wattoo.dk",153],["wattoo.no",153],["texthelp.com",[154,155]],["courierexchange.co.uk",[156,157,158]],["haulageexchange.co.uk",[156,157,158]],["powerball.com",159],["tlaciarik.sk",159],["tiskarik.cz",159],["sseriga.edu",[160,161]],["rt.com",162],["swrng.de",163],["crfop.gdos.gov.pl",164],["nurgutes.de",165],["kpcen-torun.edu.pl",166],["opintopolku.fi",167],["app.erevie.pl",168],["debenhams.com",169],["archiwumalle.pl",170],["konicaminolta.ca",171],["konicaminolta.us",171],["deutschebank-dbdirect.com",[172,173,174]],["dbonline.deutsche-bank.es",[172,173,174]],["deutsche-bank.es",[172,173,174]],["hipotecaonline.db.com",175],["kangasalansanomat.fi",176],["eif.org",177],["tunnelmb.net",177],["sugi-net.jp",178],["understandingsociety.ac.uk",179],["bettertires.com",180],["electroprecio.com",180],["autohero.com",180],["leibniz.com",180],["computerbase.de",[180,787]],["bargaintown.ie",181],["tui.nl",182],["doppelmayr.com",183],["case-score.com",[184,185]],["cote.co.uk",186],["finimize.com",186],["blxxded.com",187],["rtu.lv",188],["sysdream.com",189],["cinemarkca.com",190],["neander-zahn.de",191],["theadelphileeds.co.uk",192],["tobycarvery.co.uk",192],["carsupermarket.com",192],["viajesatodotren.com",193],["ticketingcine.fr",194],["agenziavista.it",195],["e-chladiva.cz",195],["bitecode.dev",196],["mjob.si",[197,198,199]],["airportrentacar.gr",200],["mobile-fueling.de",200],["plos.org",201],["autohaus24.de",202],["sixt-neuwagen.de",202],["gadis.es",[203,204]],["dom.ru",204],["ford-kimmerle-reutlingen.de",205],["autohaus-reitermayer.de",205],["autohaus-diefenbach-waldbrunn.de",205],["autohaus-diefenbach.de",205],["autohaus-musberg.de",205],["ford-ah-im-hunsrueck-simmern.de",205],["ford-arndt-goerlitz.de",205],["ford-autogalerie-alfeld.de",205],["ford-bacher-schrobenhausen.de",205],["ford-bathauer-bad-harzburg.de",205],["ford-behrend-waren.de",205],["ford-bergland-frankfurt-oder.de",205],["ford-bergland-wipperfuerth.de",205],["ford-besico-glauchau.de",205],["ford-besico-nuernberg.de",205],["ford-bischoff-neumuenster.de",205],["ford-bodach-borgentreich.de",205],["ford-bunk-saarbruecken.de",205],["ford-bunk-voelklingen.de",205],["ford-busch-kirchberg.de",205],["ford-diermeier-muenchen.de",205],["ford-dinnebier-leipzig.de",205],["ford-duennes-regensburg.de",205],["ford-fischer-bochum.de",205],["ford-fischer-muenster.de",205],["ford-foerster-koblenz.de",205],["ford-fuchs-uffenheim.de",205],["ford-geberzahn-koeln.de",205],["ford-gerstmann-duesseldorf.de",205],["ford-haefner-und-strunk-kassel.de",205],["ford-hartmann-kempten.de",205],["ford-hartmann-rastatt.de",205],["ford-hatzner-karlsruhe.de",205],["ford-heine-hoexter.de",205],["ford-hentschel-hildesheim.de",205],["ford-hessengarage-dreieich.de",205],["ford-hessengarage-frankfurt.de",205],["ford-hga-windeck.de",205],["ford-hommert-coburg.de",205],["ford-horstmann-rastede.de",205],["ford-janssen-sonsbeck.de",205],["ford-jochem-stingbert.de",205],["ford-jungmann-wuppertal.de",205],["ford-kestel-marktzeuln.de",205],["ford-klaiber-bad-friedrichshall.de",205],["ford-koenig-eschwege.de",205],["ford-kohlhoff-mannheim.de",205],["ford-kt-automobile-coesfeld.de",205],["ford-lackermann-wesel.de",205],["ford-ludewig-delligsen.de",205],["ford-maiwald-linsengericht.de",205],["ford-mertens-beckum.de",205],["ford-meyer-bad-oeynhausen.de",205],["ford-mgs-bayreuth.de",205],["ford-mgs-radebeul.de",205],["ford-muecke-berlin.de",205],["ford-norren-weissenthurm.de",205],["ford-nrw-garage-duesseldorf.de",205],["ford-nrw-garage-handweiser.de",205],["ford-nuding-remshalden.de",205],["ford-ohm-rendsburg.de",205],["ford-reinicke-muecheln.de",205],["ford-rennig.de",205],["ford-roerentrop-luenen.de",205],["ford-schankola-dudweiler.de",205],["ford-sg-goeppingen.de",205],["ford-sg-leonberg.de",205],["ford-sg-neu-ulm.de",205],["ford-sg-pforzheim.de",205],["ford-sg-waiblingen.de",205],["ford-storz-st-georgen.de",205],["ford-strunk-koeln.de",205],["ford-tobaben-hamburg.de",205],["ford-toenjes-zetel.de",205],["ford-wagner-mayen.de",205],["ford-wahl-fritzlar.de",205],["ford-wahl-siegen.de",205],["ford-weege-bad-salzuflen.de",205],["ford-westhoff-hamm.de",205],["ford-wieland-hasbergen.de",205],["renault-autocenterprignitz-pritzwalk.de",205],["renault-spenrath-juelich.de",205],["vitalllit.com",206],["fincaparera.com",206],["dbnetbcn.com",206],["viba.barcelona",206],["anafaustinoatelier.com",206],["lamparasherrero.com",206],["calteixidor.cat",206],["argentos.barcelona",206],["anmarlube.com",206],["anynouxines.barcelona",206],["crearunapaginaweb.cat",206],["cualesmiip.com",206],["porndoe.com",[207,208,209]],["thinkingaustralia.com",210],["elrow.com",211],["ownit.se",212],["velo-antwerpen.be",[213,214]],["wwnorton.com",215],["pc-canada.com",216],["mullgs.se",217],["1a-sehen.de",218],["feature.fm",219],["comte.com",220],["baltic-watches.com",221],["np-brijuni.hr",221],["vilgain.com",221],["tradingview.com",222],["wevolver.com",223],["experienciasfree.com",224],["freemans.com",225],["kivikangas.fi",226],["lumingerie.com",226],["melkkobrew.fi",226],["kh.hu",[227,228,229]],["aplgo.com",230],["securityconference.org",231],["aha.or.at",[232,235]],["fantasyfitnessing.com",233],["chocolateemporium.com",234],["account.samsung.com",236],["crushwineco.com",237],["levi.pt",238],["fertagus.pt",239],["smiggle.co.uk",240],["ubisoft.com",[241,242,243,244]],["store.ubisoft.com",[241,244,676,677]],["thulb.uni-jena.de",245],["splityourticket.co.uk",246],["eramba.org",247],["openai.com",248],["kupbilecik.com",[249,250]],["kupbilecik.de",[249,250]],["kupbilecik.pl",[249,250]],["shopilya.com",251],["arera.it",252],["haustier-berater.de",252],["hfm-frankfurt.de",252],["zoommer.ge",253],["studentapan.se",254],["petcity.lt",[255,256,257,258]],["tobroco.com",[259,263]],["tobroco.nl",[259,263]],["tobroco-giant.com",[259,263]],["geosfreiberg.de",[260,261]],["eapvic.org",262],["bassolsenergia.com",262],["bammusic.com",[264,266,267]],["green-24.de",265],["phish-test.de",268],["bokadirekt.se",269],["ford.lt",270],["ford.pt",270],["ford.fr",270],["ford.de",270],["ford.dk",270],["ford.pl",270],["ford.se",270],["ford.nl",270],["ford.no",270],["ford.fi",270],["ford.gr",270],["ford.it",270],["data-media.gr",271],["e-food.gr",[272,273]],["bvmed.de",274],["babyshop.com",[275,276,277]],["griffbereit24.de",278],["checkwx.com",279],["calendardate.com",280],["wefashion.ch",281],["wefashion.fr",281],["wefashion.lu",281],["wefashion.be",281],["wefashion.de",281],["wefashion.nl",281],["brettspiel-angebote.de",[282,283]],["nio.com",284],["kancelarskepotreby.net",[285,286,287]],["segment-anything.com",288],["sketch.metademolab.com",289],["cambridgebs.co.uk",290],["freizeitbad-greifswald.de",291],["giuseppezanotti.com",[292,293,294]],["xcen.se",294],["biggreenegg.co.uk",295],["skihuette-oberbeuren.de",[296,297,298]],["pwsweather.com",299],["xfree.com",300],["theweathernetwork.com",[301,302]],["monese.com",[303,304,305]],["assos.com",303],["helmut-fischer.com",306],["myscience.org",307],["7-eleven.com",308],["airwallex.com",309],["streema.com",310],["gov.lv",311],["tise.com",312],["codecamps.com",313],["avell.com.br",314],["moneyfarm.com",315],["app.moneyfarm.com",315],["simpl.rent",316],["hubspot.com",317],["prodyna.com",[318,319,320,321]],["zutobi.com",[318,319,320,321]],["calm.com",[322,323]],["pubgesports.com",[324,325,326]],["outwrite.com",327],["sberbank.com",328],["sbermarket.ru",329],["atani.com",[330,331,332]],["croisieresendirect.com",333],["bgextras.co.uk",334],["sede.coruna.gal",335],["czech-server.cz",336],["hitech-gamer.com",337],["bialettikave.hu",[338,339,340]],["canalplus.com",[341,342,343]],["mader.bz.it",[344,345,346]],["supply.amazon.co.uk",347],["bhaptics.com",348],["cleverbot.com",349],["watchaut.film",350],["tuffaloy.com",351],["fanvue.com",351],["electronoobs.com",352],["xn--lkylen-vxa.se",353],["tiefenthaler-landtechnik.at",354],["tiefenthaler-landtechnik.ch",354],["tiefenthaler-landtechnik.de",354],["huisartsenpraktijkdoorn.nl",355],["varma.fi",356],["vyos.io",357],["digimobil.es",[358,359]],["teenage.engineering",360],["merrell.pl",[361,620]],["converse.pl",361],["shop.wf-education.com",[361,620]],["werkenbijaswatson.nl",362],["converse.com",[363,364]],["buyandapply.nexus.org.uk",365],["img.ly",366],["halonen.fi",[366,397,398,399,400]],["carlson.fi",[366,397,398,399,400]],["cams.ashemaletube.com",[367,368]],["electronicacerler.com",[369,370,371]],["okpoznan.pl",[372,377]],["ielts.idp.com",373],["ielts.co.nz",373],["ielts.com.au",373],["einfach-einreichen.de",[374,375,376]],["endlesstools.io",378],["thehacker.recipes",379],["mbhszepkartya.hu",380],["casellimoveis.com.br",381],["embedplus.com",382],["e-file.pl",383],["sp215.info",384],["empik.com",385],["senda.pl",386],["befestigungsfuchs.de",387],["cut-tec.co.uk",388],["gaytimes.co.uk",389],["hello.one",390],["wildcat-koeln.de",391],["libraries.merton.gov.uk",[392,393]],["tommy.hr",[394,395]],["usit.uio.no",396],["demo-digital-twin.r-stahl.com",401],["la31devalladolid.com",[402,403]],["mx.com",404],["foxtrail.fjallraven.com",405],["dotwatcher.cc",406],["bazarchic.com",[407,408,409]],["seedrs.com",410],["mypensiontracker.co.uk",411],["praxisplan.at",[411,434]],["endclothing.com",412],["esimplus.me",413],["cineplanet.com.pe",414],["ecologi.com",415],["wamba.com",416],["eurac.edu",417],["akasaair.com",418],["rittal.com",419],["wizards.com",420],["worstbassist.com",[421,422,423,424,425,426]],["zs-watch.com",427],["crown.com",428],["mesanalyses.fr",429],["teket.jp",430],["fish.shimano.com",[431,432,433]],["simsherpa.com",[435,436,437]],["translit.ru",438],["aruba.com",439],["aireuropa.com",440],["skfbearingselect.com",[441,442]],["scanrenovation.com",443],["ttela.se",444],["dominospizza.pl",445],["devagroup.pl",446],["horecaworld.biz",447],["horecaworld.be",447],["secondsol.com",447],["angelifybeauty.com",448],["cotopaxi.com",449],["justjoin.it",450],["digibest.pt",451],["two-notes.com",452],["theverge.com",453],["daimant.co",454],["secularism.org.uk",455],["karriere-hamburg.de",456],["musicmap.info",457],["gasspisen.se",458],["medtube.pl",459],["medtube.es",459],["medtube.fr",459],["medtube.net",459],["standard.sk",460],["linmot.com",461],["larian.com",[461,735]],["containerandpackaging.com",462],["top-yp.de",463],["termania.net",464],["account.nowpayments.io",465],["fizjobaza.pl",466],["gigasport.at",467],["gigasport.de",467],["gigasport.ch",467],["velleahome.gr",468],["nicequest.com",469],["handelsbanken.no",470],["handelsbanken.com",470],["handelsbanken.co.uk",470],["handelsbanken.se",[470,550]],["handelsbanken.dk",470],["handelsbanken.fi",470],["songtradr.com",[471,719]],["logo.pt",[472,473]],["flexwhere.co.uk",[474,475]],["flexwhere.de",[474,475]],["pricewise.nl",474],["getunleash.io",474],["dentmania.de",474],["free.navalny.com",474],["latoken.com",474],["campusbrno.cz",[477,478,479]],["secrid.com",480],["etsy.com",481],["careers.cloud.com",481],["blablacar.rs",482],["blablacar.ru",482],["blablacar.com.tr",482],["blablacar.com.ua",482],["blablacar.com.br",482],["seb.se",483],["sebgroup.com",483],["deps.dev",484],["buf.build",485],["starofservice.com",486],["ytcomment.kmcat.uk",487],["gmx.com",488],["gmx.fr",488],["karofilm.ru",489],["octopusenergy.it",490],["octopusenergy.es",[490,491]],["justanswer.es",492],["justanswer.de",492],["justanswer.com",492],["justanswer.co.uk",492],["citilink.ru",493],["huutokaupat.com",494],["kaggle.com",495],["emr.ch",[496,501]],["gem.cbc.ca",497],["pumatools.hu",498],["ici.tou.tv",499],["crunchyroll.com",500],["mayflex.com",502],["clipchamp.com",502],["trouwenbijfletcher.nl",502],["fletcher.nl",502],["fletcherzakelijk.nl",502],["intermatic.com",502],["ebikelohr.de",503],["eurosender.com",504],["melectronics.ch",505],["guard.io",506],["nokportalen.se",507],["dokiliko.com",508],["valamis.com",[509,510,511]],["sverigesingenjorer.se",512],["shop.almawin.de",[513,514,515,553]],["zeitzurtrauer.de",516],["skaling.de",[517,518,519]],["bringmeister.de",520],["gdx.net",521],["clearblue.com",522],["drewag.de",[523,524,525]],["enso.de",[523,524,525]],["buidlbox.io",523],["helitransair.com",526],["more.com",527],["nwslsoccer.com",527],["climatecentral.org",528],["resolution.de",529],["flagma.by",530],["eatsalad.com",531],["pacstall.dev",532],["web2.0calc.fr",533],["de-appletradein.likewize.com",534],["swissborg.com",535],["qwice.com",536],["canalpluskuchnia.pl",[537,538]],["uizard.io",539],["stmas.bayern.de",[540,543]],["novayagazeta.eu",541],["kinopoisk.ru",542],["yandex.ru",542],["go.netia.pl",[544,546]],["polsatboxgo.pl",[544,546]],["wst.tv",545],["ing.it",[547,548]],["ing.nl",549],["youcom.com.br",551],["rule34.paheal.net",552],["kletterkogel.de",553],["pnel.de",553],["korodrogerie.de",553],["der-puten-shop.de",553],["katapult-shop.de",553],["evocsports.com",553],["esm-computer.de",553],["calmwaters.de",553],["mellerud.de",553],["akustik-projekt.at",553],["vansprint.de",553],["0815.at",553],["0815.eu",553],["ojskate.com",553],["der-schweighofer.de",553],["tz-bedarf.de",553],["zeinpharma.de",553],["weicon.com",553],["dagvandewebshop.be",553],["thiele-tee.de",553],["carbox.de",553],["riapsport.de",553],["trendpet.de",553],["eheizung24.de",553],["seemueller.com",553],["vivande.de",553],["heidegrill.com",553],["gladiator-fightwear.com",553],["h-andreas.com",553],["pp-parts.com",553],["natuerlich-holzschuhe.de",553],["massivart.de",553],["malermeister-shop.de",553],["imping-confiserie.de",553],["lenox-trading.at",553],["cklenk.de",553],["catolet.de",553],["drinkitnow.de",553],["patisserie-m.de",553],["storm-proof.com",553],["balance-fahrradladen.de",553],["magicpos.shop",553],["zeinpharma.com",553],["sps-handel.net",553],["novagenics.com",553],["butterfly-circus.de",553],["holzhof24.de",553],["w6-wertarbeit.de",553],["fleurop.de",553],["leki.com",553],["extremeaudio.de",553],["taste-market.de",553],["delker-optik.de",553],["stuhl24-shop.de",553],["g-nestle.de",553],["alpine-hygiene.ch",553],["fluidmaster.it",553],["cordon.de",553],["belisse-beauty.de",553],["belisse-beauty.co.uk",553],["wpc-shop24.de",553],["liv.si",553],["maybach-luxury.com",553],["leiternprofi24.de",553],["hela-shop.eu",553],["hitado.de",553],["hofer-kerzen.at",554],["karls-shop.de",555],["firmen.wko.at",556],["byggern.no",557],["rostics.ru",558],["hife.es",559],["lilcat.com",560],["hot.si",[561,562,563,564]],["crenolibre.fr",565],["e-pole.pl",566],["dopt.com",567],["keb-automation.com",568],["bonduelle.ru",569],["oxfordonlineenglish.com",570],["pccomponentes.fr",571],["pccomponentes.com",571],["pccomponentes.pt",571],["grants.at",572],["africa-uninet.at",572],["rqb.at",572],["youngscience.at",572],["oead.at",572],["innovationsstiftung-bildung.at",572],["etwinning.at",572],["arqa-vet.at",572],["zentrumfuercitizenscience.at",572],["vorstudienlehrgang.at",572],["erasmusplus.at",572],["jeger.pl",573],["bo.de",574],["thegamingwatcher.com",575],["norlysplay.dk",576],["plusujemy.pl",577],["asus.com.cn",[578,580]],["zentalk.asus.com",[578,580]],["mubi.com",579],["59northwheels.se",581],["foto-gregor.de",582],["kamera-express.de",582],["kamera-express.be",582],["kamera-express.nl",582],["kamera-express.fr",582],["kamera-express.lu",582],["dhbbank.com",583],["dhbbank.de",583],["dhbbank.be",583],["dhbbank.nl",583],["login.ingbank.pl",584],["fabrykacukiernika.pl",[585,586]],["peaks.com",587],["3landesmuseen-braunschweig.de",588],["unifachbuch.de",[589,590,591]],["playlumi.com",[592,593,594]],["chatfuel.com",595],["studio3t.com",[596,597,598,599]],["realgap.co.uk",[600,601,602,603]],["hotelborgia.com",[604,605]],["sweet24.de",606],["zwembaddekouter.be",607],["flixclassic.pl",608],["jobtoday.com",609],["deltatre.com",[610,611,625]],["withings.com",[612,613,614]],["blista.de",[615,616]],["hashop.nl",617],["gift.be",[618,619]],["elevator.de",620],["foryouehealth.de",620],["animaze.us",620],["penn-elcom.com",620],["curantus.de",620],["mtbmarket.de",620],["spanienweinonline.ch",620],["novap.fr",620],["bizkaia.eus",[621,622,623]],["sinparty.com",624],["mantel.com",626],["armedangels.com",[627,628]],["e-dojus.lv",629],["burnesspaull.com",630],["oncosur.org",631],["ryanair.com",632],["refurbished.at",[633,634,635]],["refurbished.nl",[633,634,635]],["refurbished.be",[633,634,635]],["refurbishedstore.de",[633,634,635]],["bayernportal.de",[636,637,638]],["ayudatpymes.com",639],["zipjob.com",639],["plastischechirurgie-muenchen.info",640],["bonn.sitzung-online.de",641],["depop.com",[642,643,644]],["thenounproject.com",645],["pricehubble.com",646],["ilmotorsport.de",647],["karate.com",648],["psbank.ru",648],["myriad.social",648],["exeedme.com",648],["followalice.com",[648,711]],["aqua-store.fr",649],["voila.ca",650],["anastore.com",651],["app.arzt-direkt.de",652],["dasfutterhaus.at",653],["e-pity.pl",654],["fillup.pl",655],["dailymotion.com",656],["barcawelt.de",657],["lueneburger-heide.de",658],["polizei.bayern.de",[659,661]],["ourworldofpixels.com",660],["jku.at",662],["matkahuolto.fi",663],["backmarket.de",[664,665,666]],["backmarket.co.uk",[664,665,666]],["backmarket.es",[664,665,666]],["backmarket.be",[664,665,666]],["backmarket.at",[664,665,666]],["backmarket.fr",[664,665,666]],["backmarket.gr",[664,665,666]],["backmarket.fi",[664,665,666]],["backmarket.ie",[664,665,666]],["backmarket.it",[664,665,666]],["backmarket.nl",[664,665,666]],["backmarket.pt",[664,665,666]],["backmarket.se",[664,665,666]],["backmarket.sk",[664,665,666]],["backmarket.com",[664,665,666]],["eleven-sportswear.cz",[667,668,669]],["silvini.com",[667,668,669]],["silvini.de",[667,668,669]],["purefiji.cz",[667,668,669]],["voda-zdarma.cz",[667,668,669]],["lesgarconsfaciles.com",[667,668,669]],["ulevapronohy.cz",[667,668,669]],["vitalvibe.eu",[667,668,669]],["plavte.cz",[667,668,669]],["mo-tools.cz",[667,668,669]],["flamantonlineshop.cz",[667,668,669]],["sandratex.cz",[667,668,669]],["norwayshop.cz",[667,668,669]],["3d-foto.cz",[667,668,669]],["neviditelnepradlo.cz",[667,668,669]],["nutrimedium.com",[667,668,669]],["silvini.cz",[667,668,669]],["karel.cz",[667,668,669]],["silvini.sk",[667,668,669]],["book-n-drive.de",670],["cotswoldoutdoor.com",671],["cotswoldoutdoor.ie",671],["cam.start.canon",672],["usnews.com",673],["researchaffiliates.com",674],["singkinderlieder.de",675],["ba.com",[678,679,680]],["britishairways.com",[678,679,680]],["cineman.pl",[681,682,683]],["tv-trwam.pl",[681,682,683,684]],["qatarairways.com",[685,686,687,688,689]],["wedding.pl",690],["vivaldi.com",691],["emuia1.gugik.gov.pl",692],["nike.com",693],["adidas.at",694],["adidas.be",694],["adidas.ca",694],["adidas.ch",694],["adidas.cl",694],["adidas.co",694],["adidas.co.in",694],["adidas.co.kr",694],["adidas.co.nz",694],["adidas.co.th",694],["adidas.co.uk",694],["adidas.com",694],["adidas.com.ar",694],["adidas.com.au",694],["adidas.com.br",694],["adidas.com.my",694],["adidas.com.ph",694],["adidas.com.vn",694],["adidas.cz",694],["adidas.de",694],["adidas.dk",694],["adidas.es",694],["adidas.fi",694],["adidas.fr",694],["adidas.gr",694],["adidas.ie",694],["adidas.it",694],["adidas.mx",694],["adidas.nl",694],["adidas.no",694],["adidas.pe",694],["adidas.pl",694],["adidas.pt",694],["adidas.ru",694],["adidas.se",694],["adidas.sk",694],["colourbox.com",695],["ebilet.pl",696],["myeventeo.com",697],["snap.com",698],["louwman.nl",[699,700]],["ratemyprofessors.com",701],["filen.io",702],["leotrippi.com",703],["restaurantclub.pl",703],["context.news",703],["queisser.de",703],["grandprixradio.dk",[704,705,706,707,708]],["grandprixradio.nl",[704,705,706,707,708]],["grandprixradio.be",[704,705,706,707,708]],["businessclass.com",709],["quantamagazine.org",710],["hellotv.nl",712],["jisc.ac.uk",713],["lasestrellas.tv",714],["nanuko.de",715],["hair-body-24.de",715],["shopforyou47.de",715],["kreativverliebt.de",715],["anderweltverlag.com",715],["octavio-shop.com",715],["forcetools-kepmar.eu",715],["fantecshop.de",715],["hexen-werkstatt.shop",715],["shop-naturstrom.de",715],["biona-shop.de",715],["camokoenig.de",715],["bikepro.de",715],["kaffeediscount.com",715],["vamos-skateshop.com",715],["holland-shop.com",715],["avonika.com",715],["hurton.pl",716],["officesuite.com",717],["fups.com",[718,720]],["scienceopen.com",721],["moebel-mahler-siebenlehn.de",[722,723]],["calendly.com",724],["batesenvironmental.co.uk",[725,726]],["ubereats.com",727],["101internet.ru",728],["bein.com",729],["beinsports.com",729],["figshare.com",730],["bitso.com",731],["gallmeister.fr",732],["eco-toimistotarvikkeet.fi",733],["proficient.fi",733],["developer.ing.com",734],["webtrack.dhlglobalmail.com",736],["webtrack.dhlecs.com",736],["ehealth.gov.gr",737],["calvinklein.se",[738,739,740]],["calvinklein.fi",[738,739,740]],["calvinklein.sk",[738,739,740]],["calvinklein.si",[738,739,740]],["calvinklein.ch",[738,739,740]],["calvinklein.ru",[738,739,740]],["calvinklein.com",[738,739,740]],["calvinklein.pt",[738,739,740]],["calvinklein.pl",[738,739,740]],["calvinklein.at",[738,739,740]],["calvinklein.nl",[738,739,740]],["calvinklein.hu",[738,739,740]],["calvinklein.lu",[738,739,740]],["calvinklein.lt",[738,739,740]],["calvinklein.lv",[738,739,740]],["calvinklein.it",[738,739,740]],["calvinklein.ie",[738,739,740]],["calvinklein.hr",[738,739,740]],["calvinklein.fr",[738,739,740]],["calvinklein.es",[738,739,740]],["calvinklein.ee",[738,739,740]],["calvinklein.de",[738,739,740]],["calvinklein.dk",[738,739,740]],["calvinklein.cz",[738,739,740]],["calvinklein.bg",[738,739,740]],["calvinklein.be",[738,739,740]],["calvinklein.co.uk",[738,739,740]],["ofdb.de",741],["dtksoft.com",742],["serverstoplist.com",743],["truecaller.com",744],["timhortons.co.th",[748,749,750,751,753,754]],["toyota.co.uk",[748,749,750,752,753,754]],["businessaccountingbasics.co.uk",[748,749,750,751,753,754]],["flickr.org",[748,749,750,751,753,754]],["espacocasa.com",748],["altraeta.it",748],["centrooceano.it",748],["allstoresdigital.com",748],["cultarm3d.de",748],["soulbounce.com",748],["fluidtopics.com",748],["uvetgbt.com",748],["malcorentacar.com",748],["emondo.de",748],["maspero.it",748],["kelkay.com",748],["underground-england.com",748],["vert.eco",748],["turcolegal.com",748],["magnet4blogging.net",748],["moovly.com",748],["automationafrica.co.za",748],["jornaldoalgarve.pt",748],["keravanenergia.fi",748],["kuopas.fi",748],["frag-machiavelli.de",748],["healthera.co.uk",748],["mobeleader.com",748],["powerup-gaming.com",748],["developer-blog.net",748],["medical.edu.mt",748],["deh.mt",748],["bluebell-railway.com",748],["ribescasals.com",748],["javea.com",748],["chinaimportal.com",748],["inds.co.uk",748],["raoul-follereau.org",748],["serramenti-milano.it",748],["cosasdemujer.com",748],["luz-blanca.info",748],["cosasdeviajes.com",748],["safehaven.io",748],["havocpoint.it",748],["motofocus.pl",748],["nomanssky.com",748],["drei-franken-info.de",748],["clausnehring.com",748],["alttab.net",748],["kinderleicht.berlin",748],["kiakkoradio.fi",748],["cosasdelcaribe.es",748],["de-sjove-jokes.dk",748],["serverprofis.de",748],["biographyonline.net",748],["iziconfort.com",748],["sportinnederland.com",748],["natureatblog.com",748],["wtsenergy.com",748],["cosasdesalud.es",748],["internetpasoapaso.com",748],["zurzeit.at",748],["contaspoupanca.pt",748],["steamdeckhq.com",[748,749,750,751,753,754]],["ipouritinc.com",[748,750,751]],["hemglass.se",[748,750,751,753,754]],["sumsub.com",[748,749,750]],["atman.pl",[748,749,750]],["fabriziovanmarciano.com",[748,749,750]],["nationalrail.com",[748,749,750]],["eett.gr",[748,749,750]],["funkypotato.com",[748,749,750]],["equalexchange.co.uk",[748,749,750]],["swnsdigital.com",[748,749,750]],["gogolf.fi",[748,751]],["hanse-haus-greifswald.de",748],["tampereenratikka.fi",[748,750,755,756]],["kymppikatsastus.fi",[750,753,792,793]],["doka.com",[757,758,759]],["abi.de",[760,761]],["studienwahl.de",[760,761]],["youthforum.org",762],["journal.hr",[763,764,765,766]],["howstuffworks.com",767],["stickypassword.com",[768,769,770]],["conversion-rate-experts.com",[771,772]],["merkur.si",[773,774,775]],["petitionenligne.com",[776,777]],["petitionenligne.be",[776,777]],["petitionenligne.fr",[776,777]],["petitionenligne.re",[776,777]],["petitionenligne.ch",[776,777]],["skrivunder.net",[776,777]],["petitiononline.uk",[776,777]],["petitions.nz",[776,777]],["petizioni.com",[776,777]],["peticao.online",[776,777]],["skrivunder.com",[776,777]],["peticiones.ar",[776,777]],["petities.com",[776,777]],["petitionen.com",[776,777]],["petice.com",[776,777]],["opprop.net",[776,777]],["peticiok.com",[776,777]],["peticiones.net",[776,777]],["peticion.es",[776,777]],["peticiones.pe",[776,777]],["peticiones.mx",[776,777]],["peticiones.cl",[776,777]],["peticije.online",[776,777]],["peticiones.co",[776,777]],["mediathek.lfv-bayern.de",778],["aluypvc.es",[779,780,781]],["pracuj.pl",[782,783,784,785,786]],["vki.at",788],["konsument.at",788],["chollometro.com",789],["dealabs.com",789],["hotukdeals.com",789],["pepper.it",789],["pepper.pl",789],["preisjaeger.at",789],["mydealz.de",789],["easyfind.ch",[794,795]],["e-shop.leonidas.com",[796,797]],["lastmile.lt",798],["constantin.film",[799,800,801]],["notion.so",802],["omgevingsloketinzage.omgeving.vlaanderen.be",[803,804]],["primor.eu",805],["tameteo.com",806],["tempo.pt",806],["yourweather.co.uk",806],["meteored.cl",806],["meteored.mx",806],["tempo.com",806],["ilmeteo.net",806],["meteored.com.ar",806],["daswetter.com",806],["algarvevacation.net",807],["3sat.de",808],["oxxio.nl",[809,810]],["butterflyshop.dk",[811,812,813]],["praxis.nl",814],["brico.be",814],["kent.gov.uk",[815,816]]]);

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
