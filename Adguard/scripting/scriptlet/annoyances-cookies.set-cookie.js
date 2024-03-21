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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["__gitbook_cookie_granted","no"],["user_cookie_consent","false","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["viewed_cookie_policy","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["ilsaggiatore.com",4],["docs.dyrector.io",5],["thehacker.recipes",5],["makeresearchpay.com",6],["knime.com",[7,49]],["quebueno.es",7],["trixonline.be",8],["radio-canada.ca",9],["heysummit.com",10],["puromarketing.com",11],["radicalmotorsport.com",12],["biurobox.pl",13],["cycling74.com",14],["triviacreator.com",15],["freshis.com",15],["anker.com",15],["computacenter.com",16],["playbalatro.com",17],["kastner-oehler.de",18],["kastner-oehler.at",18],["kastner-oehler.ch",18],["twenga.it",19],["twenga.fr",19],["twenga.co.uk",19],["twenga.de",19],["twenga.es",19],["twenga.pl",19],["twenga.nl",19],["twenga.se",19],["olx.kz",20],["efl.com",21],["wst.tv",21],["cuvva.com",22],["vitbikes.de",23],["gourmetfoodstore.com",24],["schulfahrt.de",25],["deutsche-finanzagentur.de",26],["thejazzcafelondon.com",27],["keeb.supply",28],["spb.hh.ru",29],["kaluga.hh.ru",29],["school.hh.ru",29],["rating.hh.ru",29],["novgorod.hh.ru",29],["xxxshemaleporn.com",[30,31]],["gayhits.com",[30,31]],["gaypornvideos.xxx",[30,31]],["sextubespot.com",[30,31]],["wewantjusticedao.org",32],["godbolt.org",33],["projectenglish.com.pl",[34,39]],["hintaopas.fi",34],["ledenicheur.fr",34],["prisjagt.dk",34],["prisjakt.no",34],["prisjakt.nu",34],["pricespy.co.uk",34],["pricespy.co.nz",34],["sae.fsc.ccoo.es",35],["piusx-college.nl",36],["yoomoney.ru",37],["vod.warszawa.pl",38],["m.twitch.tv",40],["environment.data.gov.uk",41],["playtesting.games",42],["portal.by.aok.de",43],["umlandscout.de",44],["atombank.co.uk",[45,46,47]],["showtv.com.tr",48],["seventhgeneration.com",49],["press.princeton.edu",49],["ldz.lv",49],["crtm.es",50],["airastana.com",51],["vkf-renzel.nl",52],["booking.reederei-zingst.de",[53,54,55]],["booking.weisse-flotte.de",[53,54,55]],["booking2.reederei-hiddensee.de",[53,54,55]],["sanswiss.pl",56],["galaxy.com",57],["petdesk.com",58],["ivyexec.com",59],["railtech.com",60],["lottehotel.com",[61,62,63,64,65]],["paydirekt.de",66],["kijiji.ca",67],["posterstore.fr",68],["posterstore.eu",68],["posterstore.be",68],["posterstore.de",68],["posterstore.hu",68],["posterstore.ie",68],["posterstore.it",68],["posterstore.no",68],["posterstore.nl",68],["posterstore.pl",68],["posterstore.com",68],["posterstore.ae",68],["posterstore.ca",68],["posterstore.nz",68],["posterstore.es",68],["posterstore.kr",68],["posterstore.jp",68],["posterstore.dk",68],["posterstore.se",68],["posterstore.ch",68],["posterstore.at",68],["myriadicity.net",69],["dgsf.org",69],["endgame.id",70],["cashback-cards.ch",71],["swisscard.ch",71],["ahorn24.de",72],["blockdyor.com",73],["ticket.io",74],["omega-nuernberg.servicebund.com",75],["lojaboschferramentas.com.br",[76,78,79]],["shareloft.com",77],["fineartsmuseum.recreatex.be",[80,81,82]],["jaapeden.nl",[80,81,82]],["eboo.lu",83],["lasmallagency.com",84],["lhsystems.com",[85,86,87,88]],["twomates.de",89],["intergiro.com",90],["healthygamer.gg",91],["telepizza.es",[92,93,94]],["telepizza.pt",[92,93,94]],["frisco.pl",95],["tyleenslang.nl",96],["schrikdraad.net",96],["kruiwagen.net",96],["pvcvoordeel.nl",96],["pvcbuis.com",96],["drainagebuizen.nl",96],["likewise.com",97],["longines.com",[98,99,100,101]],["vater-it.de",102],["biano.hu",103],["nadia.gov.gr",104],["hana-book.fr",105],["kzvb.de",106],["correosexpress.com",107],["cexpr.es",107],["rte.ie",108],["smart.com",109],["gry.pl",109],["gamesgames.com",109],["games.co.uk",109],["jetztspielen.de",109],["ourgames.ru",109],["permainan.co.id",109],["gioco.it",109],["jeux.fr",109],["juegos.com",109],["ojogos.com.br",109],["oyunskor.com",109],["spela.se",109],["spelletjes.nl",109],["agame.com",109],["spielen.com",109],["flashgames.ru",109],["games.co.id",109],["giochi.it",109],["jeu.fr",109],["spel.nl",109],["sartor-stoffe.de",110],["rockpoint.cz",110],["rockpoint.sk",110],["parfum-zentrum.de",110],["candy-store.cz",110],["tridge.com",111],["asus.com",[112,113]],["drinksking.sk",114],["neuhauschocolates.com",115],["commandsuite.it",116],["oktea.tw",117],["bafin.de",118],["materna.de",118],["bamf.de",118],["tenvinilo-argentina.com",[119,120]],["eikaforsikring.no",[121,122]],["eurowings.com",[123,124,125]],["newpharma.be",[126,127,128]],["newpharma.fr",[126,127,128]],["newpharma.de",[126,127,128]],["newpharma.at",[126,127,128]],["newpharma.nl",[126,127,128]],["kapoorwatch.com",129],["instantoffices.com",130],["paf.se",130],["citibankonline.pl",130],["azertyfactor.be",131],["zelezodum.cz",132],["thw.de",133],["bafa.de",133],["bka.de",133],["bmbf.de",133],["weather.com",134],["bolist.se",[135,136]],["project529.com",136],["evivanlanschot.nl",137],["prenatal.nl",138],["onnibus.com",[138,772,773,774]],["kyoceradocumentsolutions.us",[138,817,818]],["kyoceradocumentsolutions.ch",[138,817,818]],["kyoceradocumentsolutions.co.uk",[138,817,818]],["kyoceradocumentsolutions.de",[138,817,818]],["kyoceradocumentsolutions.es",[138,817,818]],["kyoceradocumentsolutions.eu",[138,817,818]],["kyoceradocumentsolutions.fr",[138,817,818]],["kyoceradocumentsolutions.it",[138,817,818]],["kyoceradocumentsolutions.ru",[138,817,818]],["kyoceradocumentsolutions.mx",[138,817,818]],["kyoceradocumentsolutions.cl",[138,817,818]],["kyoceradocumentsolutions.com.br",[138,817,818]],["wagner-tuning.com",[139,140,141,142]],["waitrosecellar.com",[143,144,145,146]],["waitrose.com",[143,494]],["kvk.nl",[147,148,149]],["macfarlanes.com",150],["pole-emploi.fr",151],["gardenmediaguild.co.uk",152],["samplerite.com",153],["samplerite.cn",153],["sororedit.com",154],["blukit.com.br",155],["biegnaszczyt.pl",156],["staff-gallery.com",157],["itv.com",158],["dvag.de",159],["premierinn.com",[160,161,162,163]],["whitbreadinns.co.uk",[160,161,162,163]],["barandblock.co.uk",[160,161,162,163]],["tabletable.co.uk",[160,161,162,163]],["brewersfayre.co.uk",[160,161,162,163]],["beefeater.co.uk",[160,161,162,163]],["allstarssportsbars.co.uk",[164,165]],["babiesrus.ca",166],["toysrus.ca",166],["roomsandspaces.ca",166],["athletic-club.eus",[167,168,169]],["wattoo.dk",170],["wattoo.no",170],["texthelp.com",[171,172]],["courierexchange.co.uk",[173,174,175]],["haulageexchange.co.uk",[173,174,175]],["powerball.com",176],["tlaciarik.sk",176],["tiskarik.cz",176],["sseriga.edu",[177,178]],["rt.com",179],["swrng.de",180],["crfop.gdos.gov.pl",181],["nurgutes.de",182],["kpcen-torun.edu.pl",183],["opintopolku.fi",184],["app.erevie.pl",185],["debenhams.com",186],["archiwumalle.pl",187],["konicaminolta.ca",188],["konicaminolta.us",188],["deutschebank-dbdirect.com",[189,190,191]],["dbonline.deutsche-bank.es",[189,190,191]],["deutsche-bank.es",[189,190,191]],["hipotecaonline.db.com",192],["kangasalansanomat.fi",193],["eif.org",194],["tunnelmb.net",194],["sugi-net.jp",195],["understandingsociety.ac.uk",196],["bettertires.com",197],["electroprecio.com",197],["autohero.com",197],["leibniz.com",197],["computerbase.de",[197,814]],["bargaintown.ie",198],["tui.nl",199],["doppelmayr.com",200],["case-score.com",[201,202]],["cote.co.uk",203],["finimize.com",203],["blxxded.com",204],["rtu.lv",205],["sysdream.com",206],["cinemarkca.com",207],["neander-zahn.de",208],["theadelphileeds.co.uk",209],["tobycarvery.co.uk",209],["carsupermarket.com",209],["viajesatodotren.com",210],["ticketingcine.fr",211],["agenziavista.it",212],["e-chladiva.cz",212],["bitecode.dev",213],["mjob.si",[214,215,216]],["airportrentacar.gr",217],["mobile-fueling.de",217],["plos.org",218],["autohaus24.de",219],["sixt-neuwagen.de",219],["gadis.es",[220,221]],["dom.ru",221],["ford-kimmerle-reutlingen.de",222],["autohaus-reitermayer.de",222],["autohaus-diefenbach-waldbrunn.de",222],["autohaus-diefenbach.de",222],["autohaus-musberg.de",222],["ford-ah-im-hunsrueck-simmern.de",222],["ford-arndt-goerlitz.de",222],["ford-autogalerie-alfeld.de",222],["ford-bacher-schrobenhausen.de",222],["ford-bathauer-bad-harzburg.de",222],["ford-behrend-waren.de",222],["ford-bergland-frankfurt-oder.de",222],["ford-bergland-wipperfuerth.de",222],["ford-besico-glauchau.de",222],["ford-besico-nuernberg.de",222],["ford-bischoff-neumuenster.de",222],["ford-bodach-borgentreich.de",222],["ford-bunk-saarbruecken.de",222],["ford-bunk-voelklingen.de",222],["ford-busch-kirchberg.de",222],["ford-diermeier-muenchen.de",222],["ford-dinnebier-leipzig.de",222],["ford-duennes-regensburg.de",222],["ford-fischer-bochum.de",222],["ford-fischer-muenster.de",222],["ford-foerster-koblenz.de",222],["ford-fuchs-uffenheim.de",222],["ford-geberzahn-koeln.de",222],["ford-gerstmann-duesseldorf.de",222],["ford-haefner-und-strunk-kassel.de",222],["ford-hartmann-kempten.de",222],["ford-hartmann-rastatt.de",222],["ford-hatzner-karlsruhe.de",222],["ford-heine-hoexter.de",222],["ford-hentschel-hildesheim.de",222],["ford-hessengarage-dreieich.de",222],["ford-hessengarage-frankfurt.de",222],["ford-hga-windeck.de",222],["ford-hommert-coburg.de",222],["ford-horstmann-rastede.de",222],["ford-janssen-sonsbeck.de",222],["ford-jochem-stingbert.de",222],["ford-jungmann-wuppertal.de",222],["ford-kestel-marktzeuln.de",222],["ford-klaiber-bad-friedrichshall.de",222],["ford-koenig-eschwege.de",222],["ford-kohlhoff-mannheim.de",222],["ford-kt-automobile-coesfeld.de",222],["ford-lackermann-wesel.de",222],["ford-ludewig-delligsen.de",222],["ford-maiwald-linsengericht.de",222],["ford-mertens-beckum.de",222],["ford-meyer-bad-oeynhausen.de",222],["ford-mgs-bayreuth.de",222],["ford-mgs-radebeul.de",222],["ford-muecke-berlin.de",222],["ford-norren-weissenthurm.de",222],["ford-nrw-garage-duesseldorf.de",222],["ford-nrw-garage-handweiser.de",222],["ford-nuding-remshalden.de",222],["ford-ohm-rendsburg.de",222],["ford-reinicke-muecheln.de",222],["ford-rennig.de",222],["ford-roerentrop-luenen.de",222],["ford-schankola-dudweiler.de",222],["ford-sg-goeppingen.de",222],["ford-sg-leonberg.de",222],["ford-sg-neu-ulm.de",222],["ford-sg-pforzheim.de",222],["ford-sg-waiblingen.de",222],["ford-storz-st-georgen.de",222],["ford-strunk-koeln.de",222],["ford-tobaben-hamburg.de",222],["ford-toenjes-zetel.de",222],["ford-wagner-mayen.de",222],["ford-wahl-fritzlar.de",222],["ford-wahl-siegen.de",222],["ford-weege-bad-salzuflen.de",222],["ford-westhoff-hamm.de",222],["ford-wieland-hasbergen.de",222],["renault-autocenterprignitz-pritzwalk.de",222],["renault-spenrath-juelich.de",222],["vitalllit.com",223],["fincaparera.com",223],["dbnetbcn.com",223],["viba.barcelona",223],["anafaustinoatelier.com",223],["lamparasherrero.com",223],["calteixidor.cat",223],["argentos.barcelona",223],["anmarlube.com",223],["anynouxines.barcelona",223],["crearunapaginaweb.cat",223],["cualesmiip.com",223],["porndoe.com",[224,225,226]],["thinkingaustralia.com",227],["elrow.com",228],["ownit.se",229],["velo-antwerpen.be",[230,231]],["wwnorton.com",232],["pc-canada.com",233],["mullgs.se",234],["1a-sehen.de",235],["feature.fm",236],["comte.com",237],["baltic-watches.com",238],["np-brijuni.hr",238],["vilgain.com",238],["tradingview.com",239],["wevolver.com",240],["experienciasfree.com",241],["freemans.com",242],["kivikangas.fi",243],["lumingerie.com",243],["melkkobrew.fi",243],["kh.hu",[244,245,246]],["aplgo.com",247],["securityconference.org",248],["aha.or.at",[249,252]],["fantasyfitnessing.com",250],["chocolateemporium.com",251],["account.samsung.com",253],["crushwineco.com",254],["levi.pt",255],["fertagus.pt",256],["smiggle.co.uk",257],["ubisoft.com",[258,259,260,261]],["store.ubisoft.com",[258,261,698,699]],["thulb.uni-jena.de",262],["splityourticket.co.uk",263],["eramba.org",264],["openai.com",265],["kupbilecik.com",[266,267]],["kupbilecik.de",[266,267]],["kupbilecik.pl",[266,267]],["shopilya.com",268],["arera.it",269],["haustier-berater.de",269],["hfm-frankfurt.de",269],["zoommer.ge",270],["studentapan.se",271],["petcity.lt",[272,273,274,275]],["tobroco.com",[276,280]],["tobroco.nl",[276,280]],["tobroco-giant.com",[276,280]],["geosfreiberg.de",[277,278]],["eapvic.org",279],["bassolsenergia.com",279],["bammusic.com",[281,283,284]],["green-24.de",282],["phish-test.de",285],["bokadirekt.se",286],["ford.lt",287],["ford.pt",287],["ford.fr",287],["ford.de",287],["ford.dk",287],["ford.pl",287],["ford.se",287],["ford.nl",287],["ford.no",287],["ford.fi",287],["ford.gr",287],["ford.it",287],["data-media.gr",288],["e-food.gr",[289,290]],["bvmed.de",291],["babyshop.com",[292,293,294]],["griffbereit24.de",295],["checkwx.com",296],["calendardate.com",297],["wefashion.ch",298],["wefashion.fr",298],["wefashion.lu",298],["wefashion.be",298],["wefashion.de",298],["wefashion.nl",298],["brettspiel-angebote.de",[299,300]],["nio.com",301],["kancelarskepotreby.net",[302,303,304]],["segment-anything.com",305],["sketch.metademolab.com",306],["cambridgebs.co.uk",307],["freizeitbad-greifswald.de",308],["giuseppezanotti.com",[309,310,311]],["xcen.se",311],["biggreenegg.co.uk",312],["skihuette-oberbeuren.de",[313,314,315]],["pwsweather.com",316],["xfree.com",317],["theweathernetwork.com",[318,319]],["monese.com",[320,321,322]],["assos.com",320],["helmut-fischer.com",323],["myscience.org",324],["7-eleven.com",325],["airwallex.com",326],["streema.com",327],["gov.lv",328],["tise.com",329],["codecamps.com",330],["avell.com.br",331],["moneyfarm.com",332],["app.moneyfarm.com",332],["simpl.rent",333],["hubspot.com",334],["prodyna.com",[335,336,337,338]],["zutobi.com",[335,336,337,338]],["calm.com",[339,340]],["pubgesports.com",[341,342,343]],["outwrite.com",344],["sberbank.com",345],["sbermarket.ru",346],["atani.com",[347,348,349]],["croisieresendirect.com",350],["bgextras.co.uk",351],["sede.coruna.gal",352],["czech-server.cz",353],["hitech-gamer.com",354],["bialettikave.hu",[355,356,357]],["canalplus.com",[358,359,360]],["mader.bz.it",[361,362,363]],["supply.amazon.co.uk",364],["bhaptics.com",365],["cleverbot.com",366],["watchaut.film",367],["tuffaloy.com",368],["fanvue.com",368],["electronoobs.com",369],["xn--lkylen-vxa.se",370],["tiefenthaler-landtechnik.at",371],["tiefenthaler-landtechnik.ch",371],["tiefenthaler-landtechnik.de",371],["huisartsenpraktijkdoorn.nl",372],["varma.fi",373],["vyos.io",374],["digimobil.es",[375,376]],["teenage.engineering",377],["merrell.pl",[378,639]],["converse.pl",378],["shop.wf-education.com",[378,639]],["werkenbijaswatson.nl",379],["converse.com",[380,381]],["buyandapply.nexus.org.uk",382],["img.ly",383],["halonen.fi",[383,415,416,417,418]],["carlson.fi",[383,415,416,417,418]],["cams.ashemaletube.com",[384,385]],["electronicacerler.com",[386,387,388]],["okpoznan.pl",[389,394]],["ielts.idp.com",390],["ielts.co.nz",390],["ielts.com.au",390],["einfach-einreichen.de",[391,392,393]],["endlesstools.io",395],["mbhszepkartya.hu",396],["casellimoveis.com.br",397],["embedplus.com",398],["e-file.pl",399],["sp215.info",400],["empik.com",401],["senda.pl",402],["befestigungsfuchs.de",403],["cut-tec.co.uk",404],["gaytimes.co.uk",405],["statisticsanddata.org",406],["hello.one",407],["paychex.com",408],["wildcat-koeln.de",409],["libraries.merton.gov.uk",[410,411]],["tommy.hr",[412,413]],["usit.uio.no",414],["demo-digital-twin.r-stahl.com",419],["la31devalladolid.com",[420,421]],["mx.com",422],["foxtrail.fjallraven.com",423],["dotwatcher.cc",424],["bazarchic.com",[425,426,427]],["seedrs.com",428],["mypensiontracker.co.uk",429],["praxisplan.at",[429,452]],["endclothing.com",430],["esimplus.me",431],["cineplanet.com.pe",432],["ecologi.com",433],["wamba.com",434],["eurac.edu",435],["akasaair.com",436],["rittal.com",437],["5asec.ch",438],["wizards.com",438],["worstbassist.com",[439,440,441,442,443,444]],["zs-watch.com",445],["crown.com",446],["mesanalyses.fr",447],["teket.jp",448],["fish.shimano.com",[449,450,451]],["simsherpa.com",[453,454,455]],["translit.ru",456],["aruba.com",457],["aireuropa.com",458],["skfbearingselect.com",[459,460]],["scanrenovation.com",461],["ttela.se",462],["dominospizza.pl",463],["devagroup.pl",464],["horecaworld.biz",465],["horecaworld.be",465],["secondsol.com",465],["angelifybeauty.com",466],["cotopaxi.com",467],["justjoin.it",468],["digibest.pt",469],["two-notes.com",470],["theverge.com",471],["daimant.co",472],["secularism.org.uk",473],["karriere-hamburg.de",474],["musicmap.info",475],["gasspisen.se",476],["medtube.pl",477],["medtube.es",477],["medtube.fr",477],["medtube.net",477],["standard.sk",478],["linmot.com",479],["larian.com",[479,762]],["containerandpackaging.com",480],["top-yp.de",481],["termania.net",482],["account.nowpayments.io",483],["fizjobaza.pl",484],["gigasport.at",485],["gigasport.de",485],["gigasport.ch",485],["velleahome.gr",486],["nicequest.com",487],["handelsbanken.no",488],["handelsbanken.com",488],["handelsbanken.co.uk",488],["handelsbanken.se",[488,567]],["handelsbanken.dk",488],["handelsbanken.fi",488],["songtradr.com",[489,746]],["logo.pt",[490,491]],["flexwhere.co.uk",[492,493]],["flexwhere.de",[492,493]],["pricewise.nl",492],["getunleash.io",492],["dentmania.de",492],["free.navalny.com",492],["latoken.com",492],["campusbrno.cz",[495,496,497]],["secrid.com",498],["etsy.com",499],["careers.cloud.com",499],["blablacar.rs",500],["blablacar.ru",500],["blablacar.com.tr",500],["blablacar.com.ua",500],["blablacar.com.br",500],["seb.se",501],["sebgroup.com",501],["deps.dev",502],["buf.build",503],["starofservice.com",504],["ytcomment.kmcat.uk",505],["gmx.com",506],["gmx.fr",506],["karofilm.ru",507],["octopusenergy.it",508],["octopusenergy.es",[508,509]],["justanswer.es",510],["justanswer.de",510],["justanswer.com",510],["justanswer.co.uk",510],["citilink.ru",511],["huutokaupat.com",512],["kaggle.com",513],["emr.ch",[514,519]],["gem.cbc.ca",515],["pumatools.hu",516],["ici.tou.tv",517],["crunchyroll.com",518],["mayflex.com",520],["clipchamp.com",520],["trouwenbijfletcher.nl",520],["fletcher.nl",520],["fletcherzakelijk.nl",520],["intermatic.com",520],["ebikelohr.de",521],["eurosender.com",522],["melectronics.ch",523],["guard.io",524],["nokportalen.se",525],["dokiliko.com",526],["valamis.com",[527,528,529]],["sverigesingenjorer.se",530],["shop.almawin.de",[531,532,533,570]],["zeitzurtrauer.de",534],["skaling.de",[535,536,537]],["bringmeister.de",538],["gdx.net",539],["clearblue.com",540],["drewag.de",[541,542,543]],["enso.de",[541,542,543]],["buidlbox.io",541],["helitransair.com",544],["more.com",545],["nwslsoccer.com",545],["climatecentral.org",546],["resolution.de",547],["flagma.by",548],["eatsalad.com",549],["pacstall.dev",550],["web2.0calc.fr",551],["de-appletradein.likewize.com",552],["swissborg.com",553],["qwice.com",554],["canalpluskuchnia.pl",[555,556]],["uizard.io",557],["stmas.bayern.de",[558,561]],["novayagazeta.eu",559],["kinopoisk.ru",560],["yandex.ru",560],["go.netia.pl",[562,563]],["polsatboxgo.pl",[562,563]],["ing.it",[564,565]],["ing.nl",566],["youcom.com.br",568],["rule34.paheal.net",569],["kellermann-online.com",570],["kletterkogel.de",570],["pnel.de",570],["korodrogerie.de",570],["der-puten-shop.de",570],["katapult-shop.de",570],["evocsports.com",570],["esm-computer.de",570],["calmwaters.de",570],["mellerud.de",570],["akustik-projekt.at",570],["vansprint.de",570],["0815.at",570],["0815.eu",570],["ojskate.com",570],["der-schweighofer.de",570],["tz-bedarf.de",570],["zeinpharma.de",570],["weicon.com",570],["dagvandewebshop.be",570],["thiele-tee.de",570],["carbox.de",570],["riapsport.de",570],["trendpet.de",570],["eheizung24.de",570],["seemueller.com",570],["vivande.de",570],["heidegrill.com",570],["gladiator-fightwear.com",570],["h-andreas.com",570],["pp-parts.com",570],["natuerlich-holzschuhe.de",570],["massivart.de",570],["malermeister-shop.de",570],["imping-confiserie.de",570],["lenox-trading.at",570],["cklenk.de",570],["catolet.de",570],["drinkitnow.de",570],["patisserie-m.de",570],["storm-proof.com",570],["balance-fahrradladen.de",570],["magicpos.shop",570],["zeinpharma.com",570],["sps-handel.net",570],["novagenics.com",570],["butterfly-circus.de",570],["holzhof24.de",570],["w6-wertarbeit.de",570],["fleurop.de",570],["leki.com",570],["extremeaudio.de",570],["taste-market.de",570],["delker-optik.de",570],["stuhl24-shop.de",570],["g-nestle.de",570],["alpine-hygiene.ch",570],["fluidmaster.it",570],["cordon.de",570],["belisse-beauty.de",570],["belisse-beauty.co.uk",570],["wpc-shop24.de",570],["liv.si",570],["maybach-luxury.com",570],["leiternprofi24.de",570],["hela-shop.eu",570],["hitado.de",570],["armedangels.com",[570,646,647]],["hofer-kerzen.at",571],["karls-shop.de",572],["firmen.wko.at",573],["byggern.no",574],["donauauen.at",575],["woltair.cz",576],["rostics.ru",577],["hife.es",578],["lilcat.com",579],["hot.si",[580,581,582,583]],["crenolibre.fr",584],["e-pole.pl",585],["dopt.com",586],["keb-automation.com",587],["bonduelle.ru",588],["oxfordonlineenglish.com",589],["pccomponentes.fr",590],["pccomponentes.com",590],["pccomponentes.pt",590],["grants.at",591],["africa-uninet.at",591],["rqb.at",591],["youngscience.at",591],["oead.at",591],["innovationsstiftung-bildung.at",591],["etwinning.at",591],["arqa-vet.at",591],["zentrumfuercitizenscience.at",591],["vorstudienlehrgang.at",591],["erasmusplus.at",591],["jeger.pl",592],["bo.de",593],["thegamingwatcher.com",594],["norlysplay.dk",595],["plusujemy.pl",596],["asus.com.cn",[597,599]],["zentalk.asus.com",[597,599]],["mubi.com",598],["59northwheels.se",600],["photospecialist.co.uk",601],["foto-gregor.de",601],["kamera-express.de",601],["kamera-express.be",601],["kamera-express.nl",601],["kamera-express.fr",601],["kamera-express.lu",601],["dhbbank.com",602],["dhbbank.de",602],["dhbbank.be",602],["dhbbank.nl",602],["login.ingbank.pl",603],["fabrykacukiernika.pl",[604,605]],["peaks.com",606],["3landesmuseen-braunschweig.de",607],["unifachbuch.de",[608,609,610]],["playlumi.com",[611,612,613]],["chatfuel.com",614],["studio3t.com",[615,616,617,618]],["realgap.co.uk",[619,620,621,622]],["hotelborgia.com",[623,624]],["sweet24.de",625],["zwembaddekouter.be",626],["flixclassic.pl",627],["jobtoday.com",628],["deltatre.com",[629,630,644]],["withings.com",[631,632,633]],["blista.de",[634,635]],["hashop.nl",636],["gift.be",[637,638]],["elevator.de",639],["foryouehealth.de",639],["animaze.us",639],["penn-elcom.com",639],["curantus.de",639],["mtbmarket.de",639],["spanienweinonline.ch",639],["novap.fr",639],["bizkaia.eus",[640,641,642]],["sinparty.com",643],["mantel.com",645],["e-dojus.lv",648],["burnesspaull.com",649],["oncosur.org",650],["photobooth.online",651],["epidemicsound.com",652],["ryanair.com",653],["refurbished.at",[654,655,656]],["refurbished.nl",[654,655,656]],["refurbished.be",[654,655,656]],["refurbishedstore.de",[654,655,656]],["bayernportal.de",[657,658,659]],["ayudatpymes.com",660],["zipjob.com",660],["plastischechirurgie-muenchen.info",661],["bonn.sitzung-online.de",662],["depop.com",[663,664,665]],["thenounproject.com",666],["pricehubble.com",667],["ilmotorsport.de",668],["karate.com",669],["psbank.ru",669],["myriad.social",669],["exeedme.com",669],["followalice.com",[669,737]],["aqua-store.fr",670],["voila.ca",671],["anastore.com",672],["app.arzt-direkt.de",673],["dasfutterhaus.at",674],["e-pity.pl",675],["fillup.pl",676],["dailymotion.com",677],["barcawelt.de",678],["lueneburger-heide.de",679],["polizei.bayern.de",[680,682]],["ourworldofpixels.com",681],["jku.at",683],["matkahuolto.fi",684],["backmarket.de",[685,686,687]],["backmarket.co.uk",[685,686,687]],["backmarket.es",[685,686,687]],["backmarket.be",[685,686,687]],["backmarket.at",[685,686,687]],["backmarket.fr",[685,686,687]],["backmarket.gr",[685,686,687]],["backmarket.fi",[685,686,687]],["backmarket.ie",[685,686,687]],["backmarket.it",[685,686,687]],["backmarket.nl",[685,686,687]],["backmarket.pt",[685,686,687]],["backmarket.se",[685,686,687]],["backmarket.sk",[685,686,687]],["backmarket.com",[685,686,687]],["eleven-sportswear.cz",[688,689,690]],["silvini.com",[688,689,690]],["silvini.de",[688,689,690]],["purefiji.cz",[688,689,690]],["voda-zdarma.cz",[688,689,690]],["lesgarconsfaciles.com",[688,689,690]],["ulevapronohy.cz",[688,689,690]],["vitalvibe.eu",[688,689,690]],["plavte.cz",[688,689,690]],["mo-tools.cz",[688,689,690]],["flamantonlineshop.cz",[688,689,690]],["sandratex.cz",[688,689,690]],["norwayshop.cz",[688,689,690]],["3d-foto.cz",[688,689,690]],["neviditelnepradlo.cz",[688,689,690]],["nutrimedium.com",[688,689,690]],["silvini.cz",[688,689,690]],["karel.cz",[688,689,690]],["silvini.sk",[688,689,690]],["book-n-drive.de",691],["cotswoldoutdoor.com",692],["cotswoldoutdoor.ie",692],["cam.start.canon",693],["usnews.com",694],["researchaffiliates.com",695],["singkinderlieder.de",696],["stiegeler.com",697],["ba.com",[700,701,702,703,704,705,706]],["britishairways.com",[700,701,702,703,704,705,706]],["cineman.pl",[707,708,709]],["tv-trwam.pl",[707,708,709,710]],["qatarairways.com",[711,712,713,714,715]],["wedding.pl",716],["vivaldi.com",717],["emuia1.gugik.gov.pl",718],["nike.com",719],["adidas.at",720],["adidas.be",720],["adidas.ca",720],["adidas.ch",720],["adidas.cl",720],["adidas.co",720],["adidas.co.in",720],["adidas.co.kr",720],["adidas.co.nz",720],["adidas.co.th",720],["adidas.co.uk",720],["adidas.com",720],["adidas.com.ar",720],["adidas.com.au",720],["adidas.com.br",720],["adidas.com.my",720],["adidas.com.ph",720],["adidas.com.vn",720],["adidas.cz",720],["adidas.de",720],["adidas.dk",720],["adidas.es",720],["adidas.fi",720],["adidas.fr",720],["adidas.gr",720],["adidas.ie",720],["adidas.it",720],["adidas.mx",720],["adidas.nl",720],["adidas.no",720],["adidas.pe",720],["adidas.pl",720],["adidas.pt",720],["adidas.ru",720],["adidas.se",720],["adidas.sk",720],["colourbox.com",721],["ebilet.pl",722],["myeventeo.com",723],["snap.com",724],["louwman.nl",[725,726]],["ratemyprofessors.com",727],["filen.io",728],["leotrippi.com",729],["restaurantclub.pl",729],["context.news",729],["queisser.de",729],["grandprixradio.dk",[730,731,732,733,734]],["grandprixradio.nl",[730,731,732,733,734]],["grandprixradio.be",[730,731,732,733,734]],["businessclass.com",735],["quantamagazine.org",736],["hellotv.nl",738],["jisc.ac.uk",739],["lasestrellas.tv",740],["xn--digitaler-notenstnder-m2b.com",741],["schoonmaakgroothandelemmen.nl",741],["nanuko.de",741],["hair-body-24.de",741],["shopforyou47.de",741],["kreativverliebt.de",741],["anderweltverlag.com",741],["octavio-shop.com",741],["forcetools-kepmar.eu",741],["fantecshop.de",741],["hexen-werkstatt.shop",741],["shop-naturstrom.de",741],["biona-shop.de",741],["camokoenig.de",741],["bikepro.de",741],["kaffeediscount.com",741],["vamos-skateshop.com",741],["holland-shop.com",741],["avonika.com",741],["royal-oak.org",742],["hurton.pl",743],["officesuite.com",744],["fups.com",[745,747]],["scienceopen.com",748],["moebel-mahler-siebenlehn.de",[749,750]],["calendly.com",751],["batesenvironmental.co.uk",[752,753]],["ubereats.com",754],["101internet.ru",755],["bein.com",756],["beinsports.com",756],["figshare.com",757],["bitso.com",758],["gallmeister.fr",759],["eco-toimistotarvikkeet.fi",760],["proficient.fi",760],["developer.ing.com",761],["webtrack.dhlglobalmail.com",763],["webtrack.dhlecs.com",763],["ehealth.gov.gr",764],["calvinklein.se",[765,766,767]],["calvinklein.fi",[765,766,767]],["calvinklein.sk",[765,766,767]],["calvinklein.si",[765,766,767]],["calvinklein.ch",[765,766,767]],["calvinklein.ru",[765,766,767]],["calvinklein.com",[765,766,767]],["calvinklein.pt",[765,766,767]],["calvinklein.pl",[765,766,767]],["calvinklein.at",[765,766,767]],["calvinklein.nl",[765,766,767]],["calvinklein.hu",[765,766,767]],["calvinklein.lu",[765,766,767]],["calvinklein.lt",[765,766,767]],["calvinklein.lv",[765,766,767]],["calvinklein.it",[765,766,767]],["calvinklein.ie",[765,766,767]],["calvinklein.hr",[765,766,767]],["calvinklein.fr",[765,766,767]],["calvinklein.es",[765,766,767]],["calvinklein.ee",[765,766,767]],["calvinklein.de",[765,766,767]],["calvinklein.dk",[765,766,767]],["calvinklein.cz",[765,766,767]],["calvinklein.bg",[765,766,767]],["calvinklein.be",[765,766,767]],["calvinklein.co.uk",[765,766,767]],["ofdb.de",768],["dtksoft.com",769],["serverstoplist.com",770],["truecaller.com",771],["timhortons.co.th",[775,776,777,778,780,781]],["toyota.co.uk",[775,776,777,779,780,781]],["businessaccountingbasics.co.uk",[775,776,777,778,780,781]],["flickr.org",[775,776,777,778,780,781]],["espacocasa.com",775],["altraeta.it",775],["centrooceano.it",775],["allstoresdigital.com",775],["cultarm3d.de",775],["soulbounce.com",775],["fluidtopics.com",775],["uvetgbt.com",775],["malcorentacar.com",775],["emondo.de",775],["maspero.it",775],["kelkay.com",775],["underground-england.com",775],["vert.eco",775],["turcolegal.com",775],["magnet4blogging.net",775],["moovly.com",775],["automationafrica.co.za",775],["jornaldoalgarve.pt",775],["keravanenergia.fi",775],["kuopas.fi",775],["frag-machiavelli.de",775],["healthera.co.uk",775],["mobeleader.com",775],["powerup-gaming.com",775],["developer-blog.net",775],["medical.edu.mt",775],["deh.mt",775],["bluebell-railway.com",775],["ribescasals.com",775],["javea.com",775],["chinaimportal.com",775],["inds.co.uk",775],["raoul-follereau.org",775],["serramenti-milano.it",775],["cosasdemujer.com",775],["luz-blanca.info",775],["cosasdeviajes.com",775],["safehaven.io",775],["havocpoint.it",775],["motofocus.pl",775],["nomanssky.com",775],["drei-franken-info.de",775],["clausnehring.com",775],["alttab.net",775],["kinderleicht.berlin",775],["kiakkoradio.fi",775],["cosasdelcaribe.es",775],["de-sjove-jokes.dk",775],["serverprofis.de",775],["biographyonline.net",775],["iziconfort.com",775],["sportinnederland.com",775],["natureatblog.com",775],["wtsenergy.com",775],["cosasdesalud.es",775],["internetpasoapaso.com",775],["zurzeit.at",775],["contaspoupanca.pt",775],["steamdeckhq.com",[775,776,777,778,780,781]],["ipouritinc.com",[775,777,778]],["hemglass.se",[775,777,778,780,781]],["sumsub.com",[775,776,777]],["atman.pl",[775,776,777]],["fabriziovanmarciano.com",[775,776,777]],["nationalrail.com",[775,776,777]],["eett.gr",[775,776,777]],["funkypotato.com",[775,776,777]],["equalexchange.co.uk",[775,776,777]],["swnsdigital.com",[775,776,777]],["gogolf.fi",[775,778]],["hanse-haus-greifswald.de",775],["tampereenratikka.fi",[775,777,782,783]],["kymppikatsastus.fi",[777,780,819,820]],["doka.com",[784,785,786]],["abi.de",[787,788]],["studienwahl.de",[787,788]],["youthforum.org",789],["journal.hr",[790,791,792,793]],["howstuffworks.com",794],["stickypassword.com",[795,796,797]],["conversion-rate-experts.com",[798,799]],["merkur.si",[800,801,802]],["petitionenligne.com",[803,804]],["petitionenligne.be",[803,804]],["petitionenligne.fr",[803,804]],["petitionenligne.re",[803,804]],["petitionenligne.ch",[803,804]],["skrivunder.net",[803,804]],["petitiononline.uk",[803,804]],["petitions.nz",[803,804]],["petizioni.com",[803,804]],["peticao.online",[803,804]],["skrivunder.com",[803,804]],["peticiones.ar",[803,804]],["petities.com",[803,804]],["petitionen.com",[803,804]],["petice.com",[803,804]],["opprop.net",[803,804]],["peticiok.com",[803,804]],["peticiones.net",[803,804]],["peticion.es",[803,804]],["peticiones.pe",[803,804]],["peticiones.mx",[803,804]],["peticiones.cl",[803,804]],["peticije.online",[803,804]],["peticiones.co",[803,804]],["mediathek.lfv-bayern.de",805],["aluypvc.es",[806,807,808]],["pracuj.pl",[809,810,811,812,813]],["vki.at",815],["konsument.at",815],["chollometro.com",816],["dealabs.com",816],["hotukdeals.com",816],["pepper.it",816],["pepper.pl",816],["preisjaeger.at",816],["mydealz.de",816],["easyfind.ch",[821,822]],["e-shop.leonidas.com",[823,824]],["lastmile.lt",825],["veriff.com",826],["constantin.film",[827,828,829]],["notion.so",830],["omgevingsloketinzage.omgeving.vlaanderen.be",[831,832]],["primor.eu",833],["tameteo.com",834],["tempo.pt",834],["yourweather.co.uk",834],["meteored.cl",834],["meteored.mx",834],["tempo.com",834],["ilmeteo.net",834],["meteored.com.ar",834],["daswetter.com",834],["algarvevacation.net",835],["3sat.de",836],["oxxio.nl",[837,838]],["butterflyshop.dk",[839,840,841]],["praxis.nl",842],["brico.be",842],["kent.gov.uk",[843,844]]]);

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
