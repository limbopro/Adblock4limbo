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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["tachyon-accepted-cookie-notice","true"],["myAwesomeCookieName3","true"],["loader","1"],["cookiePolicy","1"],["cookie-agreed","0"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["accept_cookies","accepted"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["cookie_consent_given","true"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["viewed_cookie_policy","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["m.twitch.tv",4],["playtesting.games",5],["umlandscout.de",6],["showtv.com.tr",7],["ldz.lv",8],["seventhgeneration.com",8],["press.princeton.edu",8],["vkf-renzel.nl",9],["booking.reederei-zingst.de",[10,11,12]],["booking.weisse-flotte.de",[10,11,12]],["booking2.reederei-hiddensee.de",[10,11,12]],["sanswiss.pl",13],["galaxy.com",14],["petdesk.com",15],["ivyexec.com",16],["railtech.com",17],["lottehotel.com",[18,19,20,21,22]],["paydirekt.de",23],["kijiji.ca",24],["posterstore.fr",25],["posterstore.eu",25],["posterstore.be",25],["posterstore.de",25],["posterstore.hu",25],["posterstore.ie",25],["posterstore.it",25],["posterstore.no",25],["posterstore.nl",25],["posterstore.pl",25],["posterstore.com",25],["posterstore.ae",25],["posterstore.ca",25],["posterstore.nz",25],["posterstore.es",25],["posterstore.kr",25],["posterstore.jp",25],["posterstore.dk",25],["posterstore.se",25],["posterstore.ch",25],["posterstore.at",25],["dgsf.org",26],["endgame.id",27],["cashback-cards.ch",28],["swisscard.ch",28],["ahorn24.de",29],["blockdyor.com",30],["ticket.io",31],["omega-nuernberg.servicebund.com",32],["lojaboschferramentas.com.br",[33,35,36]],["shareloft.com",34],["jaapeden.nl",[37,38,39]],["eboo.lu",40],["lasmallagency.com",41],["lhsystems.com",[42,43,44,45]],["twomates.de",46],["intergiro.com",47],["healthygamer.gg",48],["telepizza.es",[49,50,51]],["telepizza.pt",[49,50,51]],["frisco.pl",52],["tyleenslang.nl",53],["schrikdraad.net",53],["kruiwagen.net",53],["pvcvoordeel.nl",53],["pvcbuis.com",53],["drainagebuizen.nl",53],["likewise.com",54],["longines.com",[55,56,57,58]],["vater-it.de",59],["biano.hu",60],["quebueno.es",61],["nadia.gov.gr",62],["hana-book.fr",63],["kzvb.de",64],["correosexpress.com",65],["cexpr.es",65],["rte.ie",66],["smart.com",67],["gry.pl",67],["gamesgames.com",67],["games.co.uk",67],["jetztspielen.de",67],["ourgames.ru",67],["permainan.co.id",67],["gioco.it",67],["jeux.fr",67],["juegos.com",67],["ojogos.com.br",67],["oyunskor.com",67],["spela.se",67],["spelletjes.nl",67],["agame.com",67],["spielen.com",67],["flashgames.ru",67],["games.co.id",67],["giochi.it",67],["jeu.fr",67],["spel.nl",67],["sartor-stoffe.de",68],["rockpoint.cz",68],["rockpoint.sk",68],["parfum-zentrum.de",68],["candy-store.cz",68],["tridge.com",69],["asus.com",[70,71]],["drinksking.sk",72],["neuhauschocolates.com",73],["commandsuite.it",74],["oktea.tw",75],["bafin.de",76],["materna.de",76],["bamf.de",76],["tenvinilo-argentina.com",[77,78]],["eikaforsikring.no",[79,80]],["eurowings.com",[81,82,83]],["newpharma.be",[84,85,86]],["newpharma.fr",[84,85,86]],["newpharma.de",[84,85,86]],["newpharma.at",[84,85,86]],["newpharma.nl",[84,85,86]],["kapoorwatch.com",87],["paf.se",88],["citibankonline.pl",88],["thw.de",89],["bafa.de",89],["bka.de",89],["bmbf.de",89],["weather.com",90],["bolist.se",[91,92]],["project529.com",92],["evivanlanschot.nl",93],["prenatal.nl",94],["onnibus.com",[94,714,715,716]],["kyoceradocumentsolutions.us",[94,758,759]],["kyoceradocumentsolutions.ch",[94,758,759]],["kyoceradocumentsolutions.co.uk",[94,758,759]],["kyoceradocumentsolutions.de",[94,758,759]],["kyoceradocumentsolutions.es",[94,758,759]],["kyoceradocumentsolutions.eu",[94,758,759]],["kyoceradocumentsolutions.fr",[94,758,759]],["kyoceradocumentsolutions.it",[94,758,759]],["kyoceradocumentsolutions.ru",[94,758,759]],["kyoceradocumentsolutions.mx",[94,758,759]],["kyoceradocumentsolutions.cl",[94,758,759]],["kyoceradocumentsolutions.com.br",[94,758,759]],["wagner-tuning.com",[95,96,97,98]],["waitrosecellar.com",[99,100,101,102]],["waitrose.com",[99,445]],["kvk.nl",[103,104,105]],["macfarlanes.com",106],["pole-emploi.fr",107],["gardenmediaguild.co.uk",108],["samplerite.com",109],["samplerite.cn",109],["sororedit.com",110],["blukit.com.br",111],["biegnaszczyt.pl",112],["staff-gallery.com",113],["itv.com",114],["dvag.de",115],["premierinn.com",[116,117,118,119]],["whitbreadinns.co.uk",[116,117,118,119]],["barandblock.co.uk",[116,117,118,119]],["tabletable.co.uk",[116,117,118,119]],["brewersfayre.co.uk",[116,117,118,119]],["beefeater.co.uk",[116,117,118,119]],["allstarssportsbars.co.uk",[120,121]],["babiesrus.ca",122],["toysrus.ca",122],["roomsandspaces.ca",122],["athletic-club.eus",[123,124,125]],["wattoo.dk",126],["wattoo.no",126],["texthelp.com",[127,128]],["courierexchange.co.uk",[129,130,131]],["haulageexchange.co.uk",[129,130,131]],["powerball.com",132],["tlaciarik.sk",132],["tiskarik.cz",132],["sseriga.edu",[133,134]],["rt.com",135],["swrng.de",136],["crfop.gdos.gov.pl",137],["nurgutes.de",138],["kpcen-torun.edu.pl",139],["opintopolku.fi",140],["debenhams.com",141],["archiwumalle.pl",142],["konicaminolta.ca",143],["konicaminolta.us",143],["deutschebank-dbdirect.com",[144,145,146]],["dbonline.deutsche-bank.es",[144,145,146]],["deutsche-bank.es",[144,145,146]],["hipotecaonline.db.com",147],["kangasalansanomat.fi",148],["eif.org",149],["tunnelmb.net",149],["sugi-net.jp",150],["understandingsociety.ac.uk",151],["bettertires.com",152],["electroprecio.com",152],["autohero.com",152],["leibniz.com",152],["computerbase.de",[152,755]],["bargaintown.ie",153],["tui.nl",154],["doppelmayr.com",155],["case-score.com",[156,157]],["cote.co.uk",158],["finimize.com",158],["blxxded.com",159],["rtu.lv",160],["sysdream.com",161],["cinemarkca.com",162],["wedding.pl",163],["neander-zahn.de",164],["theadelphileeds.co.uk",165],["tobycarvery.co.uk",165],["carsupermarket.com",165],["viajesatodotren.com",166],["ticketingcine.fr",167],["agenziavista.it",168],["e-chladiva.cz",168],["bitecode.dev",169],["mjob.si",[170,171,172]],["airportrentacar.gr",173],["plos.org",174],["autohaus24.de",175],["sixt-neuwagen.de",175],["gadis.es",[176,177]],["dom.ru",177],["ford-kimmerle-reutlingen.de",178],["autohaus-reitermayer.de",178],["autohaus-diefenbach-waldbrunn.de",178],["autohaus-diefenbach.de",178],["autohaus-musberg.de",178],["ford-ah-im-hunsrueck-simmern.de",178],["ford-arndt-goerlitz.de",178],["ford-autogalerie-alfeld.de",178],["ford-bacher-schrobenhausen.de",178],["ford-bathauer-bad-harzburg.de",178],["ford-behrend-waren.de",178],["ford-bergland-frankfurt-oder.de",178],["ford-bergland-wipperfuerth.de",178],["ford-besico-glauchau.de",178],["ford-besico-nuernberg.de",178],["ford-bischoff-neumuenster.de",178],["ford-bodach-borgentreich.de",178],["ford-bunk-saarbruecken.de",178],["ford-bunk-voelklingen.de",178],["ford-busch-kirchberg.de",178],["ford-diermeier-muenchen.de",178],["ford-dinnebier-leipzig.de",178],["ford-duennes-regensburg.de",178],["ford-fischer-bochum.de",178],["ford-fischer-muenster.de",178],["ford-foerster-koblenz.de",178],["ford-fuchs-uffenheim.de",178],["ford-geberzahn-koeln.de",178],["ford-gerstmann-duesseldorf.de",178],["ford-haefner-und-strunk-kassel.de",178],["ford-hartmann-kempten.de",178],["ford-hartmann-rastatt.de",178],["ford-hatzner-karlsruhe.de",178],["ford-heine-hoexter.de",178],["ford-hentschel-hildesheim.de",178],["ford-hessengarage-dreieich.de",178],["ford-hessengarage-frankfurt.de",178],["ford-hga-windeck.de",178],["ford-hommert-coburg.de",178],["ford-horstmann-rastede.de",178],["ford-janssen-sonsbeck.de",178],["ford-jochem-stingbert.de",178],["ford-jungmann-wuppertal.de",178],["ford-kestel-marktzeuln.de",178],["ford-klaiber-bad-friedrichshall.de",178],["ford-koenig-eschwege.de",178],["ford-kohlhoff-mannheim.de",178],["ford-kt-automobile-coesfeld.de",178],["ford-lackermann-wesel.de",178],["ford-ludewig-delligsen.de",178],["ford-maiwald-linsengericht.de",178],["ford-mertens-beckum.de",178],["ford-meyer-bad-oeynhausen.de",178],["ford-mgs-bayreuth.de",178],["ford-mgs-radebeul.de",178],["ford-muecke-berlin.de",178],["ford-norren-weissenthurm.de",178],["ford-nrw-garage-duesseldorf.de",178],["ford-nrw-garage-handweiser.de",178],["ford-nuding-remshalden.de",178],["ford-ohm-rendsburg.de",178],["ford-reinicke-muecheln.de",178],["ford-rennig.de",178],["ford-roerentrop-luenen.de",178],["ford-schankola-dudweiler.de",178],["ford-sg-goeppingen.de",178],["ford-sg-leonberg.de",178],["ford-sg-neu-ulm.de",178],["ford-sg-pforzheim.de",178],["ford-sg-waiblingen.de",178],["ford-storz-st-georgen.de",178],["ford-strunk-koeln.de",178],["ford-tobaben-hamburg.de",178],["ford-toenjes-zetel.de",178],["ford-wagner-mayen.de",178],["ford-wahl-fritzlar.de",178],["ford-wahl-siegen.de",178],["ford-weege-bad-salzuflen.de",178],["ford-westhoff-hamm.de",178],["ford-wieland-hasbergen.de",178],["renault-autocenterprignitz-pritzwalk.de",178],["renault-spenrath-juelich.de",178],["vitalllit.com",179],["fincaparera.com",179],["dbnetbcn.com",179],["viba.barcelona",179],["anafaustinoatelier.com",179],["lamparasherrero.com",179],["calteixidor.cat",179],["argentos.barcelona",179],["anmarlube.com",179],["anynouxines.barcelona",179],["crearunapaginaweb.cat",179],["cualesmiip.com",179],["porndoe.com",[180,181,182]],["thinkingaustralia.com",183],["elrow.com",184],["ownit.se",185],["velo-antwerpen.be",[186,187]],["wwnorton.com",188],["pc-canada.com",189],["mullgs.se",190],["1a-sehen.de",191],["anker.com",192],["feature.fm",193],["comte.com",194],["baltic-watches.com",195],["np-brijuni.hr",195],["vilgain.com",195],["tradingview.com",196],["wevolver.com",197],["experienciasfree.com",198],["freemans.com",199],["kivikangas.fi",200],["melkkobrew.fi",200],["kh.hu",[201,202,203]],["aplgo.com",204],["securityconference.org",205],["aha.or.at",[206,209]],["fantasyfitnessing.com",207],["chocolateemporium.com",208],["account.samsung.com",210],["crushwineco.com",211],["levi.pt",212],["fertagus.pt",213],["smiggle.co.uk",214],["ubisoft.com",[215,216,217,218]],["store.ubisoft.com",[215,218,644,645]],["thulb.uni-jena.de",219],["splityourticket.co.uk",220],["eramba.org",221],["openai.com",222],["kupbilecik.com",[223,224]],["kupbilecik.de",[223,224]],["kupbilecik.pl",[223,224]],["shopilya.com",225],["arera.it",226],["haustier-berater.de",226],["hfm-frankfurt.de",226],["zoommer.ge",227],["studentapan.se",228],["petcity.lt",[229,230,231,232]],["tobroco.com",[233,237]],["tobroco.nl",[233,237]],["tobroco-giant.com",[233,237]],["geosfreiberg.de",[234,235]],["eapvic.org",236],["bassolsenergia.com",236],["bammusic.com",[238,240,241]],["green-24.de",239],["phish-test.de",242],["bokadirekt.se",243],["ford.lt",244],["ford.pt",244],["ford.fr",244],["ford.de",244],["ford.dk",244],["ford.pl",244],["ford.se",244],["ford.nl",244],["ford.no",244],["ford.fi",244],["ford.gr",244],["ford.it",244],["data-media.gr",245],["e-food.gr",[246,247]],["bvmed.de",248],["babyshop.com",[249,250,251]],["griffbereit24.de",252],["checkwx.com",253],["calendardate.com",254],["wefashion.ch",255],["wefashion.fr",255],["wefashion.lu",255],["wefashion.be",255],["wefashion.de",255],["wefashion.nl",255],["brettspiel-angebote.de",[256,257]],["nio.com",258],["kancelarskepotreby.net",[259,260,261]],["segment-anything.com",262],["sketch.metademolab.com",263],["cambridgebs.co.uk",264],["freizeitbad-greifswald.de",265],["giuseppezanotti.com",[266,267,268]],["xcen.se",268],["biggreenegg.co.uk",269],["skihuette-oberbeuren.de",[270,271,272]],["pwsweather.com",273],["xfree.com",274],["theweathernetwork.com",[275,276]],["monese.com",[277,278,279]],["assos.com",277],["helmut-fischer.com",280],["myscience.org",281],["7-eleven.com",282],["airwallex.com",283],["streema.com",284],["gov.lv",285],["tise.com",286],["codecamps.com",287],["avell.com.br",288],["moneyfarm.com",289],["app.moneyfarm.com",289],["simpl.rent",290],["hubspot.com",291],["prodyna.com",[292,293,294,295]],["zutobi.com",[292,293,294,295]],["calm.com",[296,297]],["pubgesports.com",[298,299,300]],["outwrite.com",301],["sberbank.com",302],["sbermarket.ru",303],["bgextras.co.uk",304],["sede.coruna.gal",305],["czech-server.cz",306],["hitech-gamer.com",307],["bialettikave.hu",[308,309,310]],["canalplus.com",[311,312,313]],["mader.bz.it",[314,315,316]],["supply.amazon.co.uk",317],["bhaptics.com",318],["cleverbot.com",319],["watchaut.film",320],["tuffaloy.com",321],["fanvue.com",321],["electronoobs.com",322],["xn--lkylen-vxa.se",323],["tiefenthaler-landtechnik.at",324],["tiefenthaler-landtechnik.ch",324],["tiefenthaler-landtechnik.de",324],["huisartsenpraktijkdoorn.nl",325],["varma.fi",326],["vyos.io",327],["digimobil.es",[328,329]],["teenage.engineering",330],["merrell.pl",[331,590]],["converse.pl",331],["shop.wf-education.com",[331,590]],["werkenbijaswatson.nl",332],["converse.com",[333,334]],["buyandapply.nexus.org.uk",335],["img.ly",336],["halonen.fi",[336,364,365,366,367]],["carlson.fi",[336,364,365,366,367]],["cams.ashemaletube.com",[337,338]],["electronicacerler.com",[339,340,341]],["okpoznan.pl",[342,344]],["ielts.idp.com",343],["endlesstools.io",345],["thehacker.recipes",346],["mbhszepkartya.hu",347],["casellimoveis.com.br",348],["embedplus.com",349],["e-file.pl",350],["sp215.info",351],["empik.com",352],["senda.pl",353],["befestigungsfuchs.de",354],["cut-tec.co.uk",355],["gaytimes.co.uk",356],["hello.one",357],["wildcat-koeln.de",358],["libraries.merton.gov.uk",[359,360]],["tommy.hr",[361,362]],["usit.uio.no",363],["demo-digital-twin.r-stahl.com",368],["la31devalladolid.com",[369,370]],["mx.com",371],["foxtrail.fjallraven.com",372],["dotwatcher.cc",373],["bazarchic.com",[374,375,376]],["seedrs.com",377],["mypensiontracker.co.uk",378],["praxisplan.at",[378,401]],["endclothing.com",379],["esimplus.me",380],["cineplanet.com.pe",381],["ecologi.com",382],["wamba.com",383],["eurac.edu",384],["akasaair.com",385],["rittal.com",386],["wizards.com",387],["worstbassist.com",[388,389,390,391,392,393]],["zs-watch.com",394],["crown.com",395],["mesanalyses.fr",396],["teket.jp",397],["fish.shimano.com",[398,399,400]],["simsherpa.com",[402,403,404]],["translit.ru",405],["aruba.com",406],["aireuropa.com",407],["skfbearingselect.com",[408,409]],["scanrenovation.com",410],["ttela.se",411],["dominospizza.pl",412],["devagroup.pl",413],["hintaopas.fi",414],["ledenicheur.fr",414],["prisjagt.dk",414],["prisjakt.no",414],["prisjakt.nu",414],["pricespy.co.uk",414],["pricespy.co.nz",414],["horecaworld.biz",415],["horecaworld.be",415],["secondsol.com",415],["angelifybeauty.com",416],["cotopaxi.com",417],["kaluga.hh.ru",418],["school.hh.ru",418],["rating.hh.ru",418],["novgorod.hh.ru",418],["justjoin.it",419],["digibest.pt",420],["two-notes.com",421],["theverge.com",422],["daimant.co",423],["secularism.org.uk",424],["karriere-hamburg.de",425],["musicmap.info",426],["gasspisen.se",427],["medtube.pl",428],["medtube.es",428],["medtube.fr",428],["medtube.net",428],["standard.sk",429],["linmot.com",430],["larian.com",[430,704]],["containerandpackaging.com",431],["top-yp.de",432],["termania.net",433],["account.nowpayments.io",434],["fizjobaza.pl",435],["gigasport.at",436],["gigasport.de",436],["gigasport.ch",436],["velleahome.gr",437],["nicequest.com",438],["handelsbanken.no",439],["handelsbanken.com",439],["handelsbanken.co.uk",439],["handelsbanken.se",[439,520]],["handelsbanken.dk",439],["handelsbanken.fi",439],["songtradr.com",[440,687]],["logo.pt",[441,442]],["flexwhere.co.uk",[443,444]],["flexwhere.de",[443,444]],["pricewise.nl",443],["getunleash.io",443],["dentmania.de",443],["free.navalny.com",443],["latoken.com",443],["campusbrno.cz",[446,447,448]],["secrid.com",449],["etsy.com",450],["seb.se",451],["sebgroup.com",451],["deps.dev",452],["buf.build",453],["starofservice.com",454],["ytcomment.kmcat.uk",455],["gmx.com",456],["gmx.fr",456],["karofilm.ru",457],["octopusenergy.it",458],["octopusenergy.es",[458,459]],["justanswer.es",460],["justanswer.de",460],["justanswer.com",460],["justanswer.co.uk",460],["citilink.ru",461],["huutokaupat.com",462],["kaggle.com",463],["emr.ch",[464,469]],["gem.cbc.ca",465],["pumatools.hu",466],["ici.tou.tv",467],["crunchyroll.com",468],["mayflex.com",470],["clipchamp.com",470],["trouwenbijfletcher.nl",470],["fletcher.nl",470],["fletcherzakelijk.nl",470],["intermatic.com",470],["ebikelohr.de",471],["eurosender.com",472],["melectronics.ch",473],["guard.io",474],["schrottpreis.org",475],["nokportalen.se",476],["dokiliko.com",477],["valamis.com",[478,479,480]],["sverigesingenjorer.se",481],["shop.almawin.de",[482,483,484,523]],["textshuttle.com",485],["zeitzurtrauer.de",486],["skaling.de",[487,488,489]],["bringmeister.de",490],["gdx.net",491],["clearblue.com",492],["drewag.de",[493,494,495]],["enso.de",[493,494,495]],["buidlbox.io",493],["helitransair.com",496],["more.com",497],["nwslsoccer.com",497],["climatecentral.org",498],["resolution.de",499],["flagma.by",500],["eatsalad.com",501],["pacstall.dev",502],["web2.0calc.fr",503],["de-appletradein.likewize.com",504],["swissborg.com",505],["qwice.com",506],["canalpluskuchnia.pl",[507,508]],["uizard.io",509],["stmas.bayern.de",[510,513]],["novayagazeta.eu",511],["kinopoisk.ru",512],["yandex.ru",512],["go.netia.pl",[514,516]],["polsatboxgo.pl",[514,516]],["wst.tv",515],["ing.it",[517,518]],["ing.nl",519],["youcom.com.br",521],["rule34.paheal.net",522],["kletterkogel.de",523],["pnel.de",523],["korodrogerie.de",523],["der-puten-shop.de",523],["katapult-shop.de",523],["evocsports.com",523],["esm-computer.de",523],["calmwaters.de",523],["mellerud.de",523],["akustik-projekt.at",523],["vansprint.de",523],["0815.at",523],["0815.eu",523],["ojskate.com",523],["der-schweighofer.de",523],["tz-bedarf.de",523],["zeinpharma.de",523],["weicon.com",523],["dagvandewebshop.be",523],["thiele-tee.de",523],["carbox.de",523],["riapsport.de",523],["trendpet.de",523],["eheizung24.de",523],["seemueller.com",523],["vivande.de",523],["heidegrill.com",523],["gladiator-fightwear.com",523],["h-andreas.com",523],["pp-parts.com",523],["natuerlich-holzschuhe.de",523],["massivart.de",523],["malermeister-shop.de",523],["imping-confiserie.de",523],["lenox-trading.at",523],["cklenk.de",523],["catolet.de",523],["drinkitnow.de",523],["patisserie-m.de",523],["storm-proof.com",523],["balance-fahrradladen.de",523],["magicpos.shop",523],["zeinpharma.com",523],["sps-handel.net",523],["novagenics.com",523],["butterfly-circus.de",523],["holzhof24.de",523],["w6-wertarbeit.de",523],["fleurop.de",523],["leki.com",523],["extremeaudio.de",523],["taste-market.de",523],["delker-optik.de",523],["stuhl24-shop.de",523],["g-nestle.de",523],["alpine-hygiene.ch",523],["fluidmaster.it",523],["cordon.de",523],["belisse-beauty.de",523],["belisse-beauty.co.uk",523],["wpc-shop24.de",523],["liv.si",523],["maybach-luxury.com",523],["leiternprofi24.de",523],["hela-shop.eu",523],["hofer-kerzen.at",524],["karls-shop.de",525],["firmen.wko.at",526],["byggern.no",527],["rostics.ru",528],["hife.es",529],["lilcat.com",530],["hot.si",[531,532,533,534]],["crenolibre.fr",535],["e-pole.pl",536],["dopt.com",537],["keb-automation.com",538],["bonduelle.ru",539],["oxfordonlineenglish.com",540],["pccomponentes.fr",541],["pccomponentes.com",541],["pccomponentes.pt",541],["grants.at",542],["africa-uninet.at",542],["rqb.at",542],["youngscience.at",542],["oead.at",542],["innovationsstiftung-bildung.at",542],["etwinning.at",542],["arqa-vet.at",542],["zentrumfuercitizenscience.at",542],["vorstudienlehrgang.at",542],["erasmusplus.at",542],["jeger.pl",543],["bo.de",544],["thegamingwatcher.com",545],["webtv.stofa.dk",546],["plusujemy.pl",547],["asus.com.cn",[548,550]],["zentalk.asus.com",[548,550]],["mubi.com",549],["59northwheels.se",551],["foto-gregor.de",552],["kamera-express.de",552],["kamera-express.be",552],["kamera-express.nl",552],["kamera-express.fr",552],["kamera-express.lu",552],["dhbbank.com",553],["dhbbank.de",553],["dhbbank.be",553],["dhbbank.nl",553],["login.ingbank.pl",554],["fabrykacukiernika.pl",[555,556]],["peaks.com",557],["3landesmuseen-braunschweig.de",558],["unifachbuch.de",[559,560,561]],["playlumi.com",[562,563,564]],["chatfuel.com",565],["studio3t.com",[566,567,568,569]],["realgap.co.uk",[570,571,572,573]],["hotelborgia.com",[574,575]],["sweet24.de",576],["zwembaddekouter.be",577],["flixclassic.pl",578],["jobtoday.com",579],["deltatre.com",[580,581,596]],["withings.com",[582,583,584]],["blista.de",[585,586]],["hashop.nl",587],["gift.be",[588,589]],["elevator.de",590],["foryouehealth.de",590],["animaze.us",590],["penn-elcom.com",590],["curantus.de",590],["mtbmarket.de",590],["spanienweinonline.ch",590],["novap.fr",590],["bizkaia.eus",[591,592,593]],["sinparty.com",594],["jobs.ch",595],["jobup.ch",595],["depop.com",[597,598]],["mantel.com",599],["armedangels.com",[600,601,602]],["e-dojus.lv",603],["burnesspaull.com",604],["oncosur.org",605],["ryanair.com",606],["refurbished.at",[607,608,609]],["refurbished.nl",[607,608,609]],["refurbished.be",[607,608,609]],["refurbishedstore.de",[607,608,609]],["bayernportal.de",[610,611,612]],["ayudatpymes.com",613],["zipjob.com",613],["pricehubble.com",614],["ilmotorsport.de",615],["karate.com",616],["psbank.ru",616],["myriad.social",616],["exeedme.com",616],["followalice.com",[616,679]],["aqua-store.fr",617],["voila.ca",618],["anastore.com",619],["app.arzt-direkt.de",620],["dasfutterhaus.at",621],["e-pity.pl",622],["fillup.pl",623],["dailymotion.com",624],["barcawelt.de",625],["lueneburger-heide.de",626],["polizei.bayern.de",[627,629]],["ourworldofpixels.com",628],["jku.at",630],["matkahuolto.fi",631],["backmarket.de",[632,633,634]],["backmarket.co.uk",[632,633,634]],["backmarket.es",[632,633,634]],["backmarket.be",[632,633,634]],["backmarket.at",[632,633,634]],["backmarket.fr",[632,633,634]],["backmarket.gr",[632,633,634]],["backmarket.fi",[632,633,634]],["backmarket.ie",[632,633,634]],["backmarket.it",[632,633,634]],["backmarket.nl",[632,633,634]],["backmarket.pt",[632,633,634]],["backmarket.se",[632,633,634]],["backmarket.sk",[632,633,634]],["backmarket.com",[632,633,634]],["eleven-sportswear.cz",[635,636,637]],["silvini.com",[635,636,637]],["silvini.de",[635,636,637]],["purefiji.cz",[635,636,637]],["voda-zdarma.cz",[635,636,637]],["lesgarconsfaciles.com",[635,636,637]],["ulevapronohy.cz",[635,636,637]],["vitalvibe.eu",[635,636,637]],["plavte.cz",[635,636,637]],["mo-tools.cz",[635,636,637]],["flamantonlineshop.cz",[635,636,637]],["sandratex.cz",[635,636,637]],["norwayshop.cz",[635,636,637]],["3d-foto.cz",[635,636,637]],["neviditelnepradlo.cz",[635,636,637]],["nutrimedium.com",[635,636,637]],["silvini.cz",[635,636,637]],["karel.cz",[635,636,637]],["silvini.sk",[635,636,637]],["book-n-drive.de",638],["cotswoldoutdoor.com",639],["cotswoldoutdoor.ie",639],["cam.start.canon",640],["usnews.com",641],["researchaffiliates.com",642],["singkinderlieder.de",643],["ba.com",[646,647,648]],["britishairways.com",[646,647,648]],["cineman.pl",[649,650,651]],["tv-trwam.pl",[649,650,651,652]],["qatarairways.com",[653,654,655,656,657]],["vivaldi.com",658],["emuia1.gugik.gov.pl",659],["nike.com",660],["adidas.at",661],["adidas.be",661],["adidas.ca",661],["adidas.ch",661],["adidas.cl",661],["adidas.co",661],["adidas.co.in",661],["adidas.co.kr",661],["adidas.co.nz",661],["adidas.co.th",661],["adidas.co.uk",661],["adidas.com",661],["adidas.com.ar",661],["adidas.com.au",661],["adidas.com.br",661],["adidas.com.my",661],["adidas.com.ph",661],["adidas.com.vn",661],["adidas.cz",661],["adidas.de",661],["adidas.dk",661],["adidas.es",661],["adidas.fi",661],["adidas.fr",661],["adidas.gr",661],["adidas.ie",661],["adidas.it",661],["adidas.mx",661],["adidas.nl",661],["adidas.no",661],["adidas.pe",661],["adidas.pl",661],["adidas.pt",661],["adidas.ru",661],["adidas.se",661],["adidas.sk",661],["colourbox.com",662],["ebilet.pl",663],["myeventeo.com",664],["snap.com",665],["louwman.nl",[666,667]],["ratemyprofessors.com",668],["filen.io",669],["leotrippi.com",670],["restaurantclub.pl",670],["context.news",670],["queisser.de",670],["stilord.com",671],["stilord.pl",671],["stilord.de",671],["stilord.fr",671],["grandprixradio.dk",[672,673,674,675,676]],["grandprixradio.nl",[672,673,674,675,676]],["grandprixradio.be",[672,673,674,675,676]],["businessclass.com",677],["quantamagazine.org",678],["scaleway.com",680],["hellotv.nl",681],["lasestrellas.tv",682],["hair-body-24.de",683],["shopforyou47.de",683],["kreativverliebt.de",683],["anderweltverlag.com",683],["octavio-shop.com",683],["forcetools-kepmar.eu",683],["fantecshop.de",683],["hexen-werkstatt.shop",683],["shop-naturstrom.de",683],["biona-shop.de",683],["camokoenig.de",683],["bikepro.de",683],["kaffeediscount.com",683],["vamos-skateshop.com",683],["holland-shop.com",683],["avonika.com",683],["hurton.pl",684],["officesuite.com",685],["fups.com",[686,688]],["scienceopen.com",689],["moebel-mahler-siebenlehn.de",[690,691]],["calendly.com",692],["batesenvironmental.co.uk",[693,694]],["ubereats.com",695],["101internet.ru",696],["bein.com",697],["beinsports.com",697],["figshare.com",698],["hitado.de",699],["bitso.com",700],["gallmeister.fr",701],["eco-toimistotarvikkeet.fi",702],["proficient.fi",702],["developer.ing.com",703],["webtrack.dhlglobalmail.com",705],["webtrack.dhlecs.com",705],["ehealth.gov.gr",706],["calvinklein.se",[707,708,709]],["calvinklein.fi",[707,708,709]],["calvinklein.sk",[707,708,709]],["calvinklein.si",[707,708,709]],["calvinklein.ch",[707,708,709]],["calvinklein.ru",[707,708,709]],["calvinklein.com",[707,708,709]],["calvinklein.pt",[707,708,709]],["calvinklein.pl",[707,708,709]],["calvinklein.at",[707,708,709]],["calvinklein.nl",[707,708,709]],["calvinklein.hu",[707,708,709]],["calvinklein.lu",[707,708,709]],["calvinklein.lt",[707,708,709]],["calvinklein.lv",[707,708,709]],["calvinklein.it",[707,708,709]],["calvinklein.ie",[707,708,709]],["calvinklein.hr",[707,708,709]],["calvinklein.fr",[707,708,709]],["calvinklein.es",[707,708,709]],["calvinklein.ee",[707,708,709]],["calvinklein.de",[707,708,709]],["calvinklein.dk",[707,708,709]],["calvinklein.cz",[707,708,709]],["calvinklein.bg",[707,708,709]],["calvinklein.be",[707,708,709]],["calvinklein.co.uk",[707,708,709]],["ofdb.de",710],["dtksoft.com",711],["serverstoplist.com",712],["truecaller.com",713],["businessaccountingbasics.co.uk",[717,718,719,720,721,722]],["flickr.org",[717,718,719,720,721,722]],["espacocasa.com",717],["altraeta.it",717],["centrooceano.it",717],["allstoresdigital.com",717],["cultarm3d.de",717],["soulbounce.com",717],["fluidtopics.com",717],["uvetgbt.com",717],["malcorentacar.com",717],["emondo.de",717],["maspero.it",717],["kelkay.com",717],["underground-england.com",717],["vert.eco",717],["turcolegal.com",717],["magnet4blogging.net",717],["moovly.com",717],["automationafrica.co.za",717],["jornaldoalgarve.pt",717],["keravanenergia.fi",717],["kuopas.fi",717],["frag-machiavelli.de",717],["healthera.co.uk",717],["mobeleader.com",717],["powerup-gaming.com",717],["developer-blog.net",717],["medical.edu.mt",717],["deh.mt",717],["bluebell-railway.com",717],["ribescasals.com",717],["javea.com",717],["chinaimportal.com",717],["inds.co.uk",717],["raoul-follereau.org",717],["serramenti-milano.it",717],["cosasdemujer.com",717],["luz-blanca.info",717],["cosasdeviajes.com",717],["safehaven.io",717],["havocpoint.it",717],["motofocus.pl",717],["nomanssky.com",717],["drei-franken-info.de",717],["clausnehring.com",717],["alttab.net",717],["kinderleicht.berlin",717],["kiakkoradio.fi",717],["cosasdelcaribe.es",717],["de-sjove-jokes.dk",717],["serverprofis.de",717],["biographyonline.net",717],["iziconfort.com",717],["sportinnederland.com",717],["natureatblog.com",717],["wtsenergy.com",717],["cosasdesalud.es",717],["internetpasoapaso.com",717],["zurzeit.at",717],["contaspoupanca.pt",717],["steamdeckhq.com",[717,718,719,720,721,722]],["ipouritinc.com",[717,719,720]],["hemglass.se",[717,719,720,721,722]],["sumsub.com",[717,718,719]],["atman.pl",[717,718,719]],["fabriziovanmarciano.com",[717,718,719]],["nationalrail.com",[717,718,719]],["eett.gr",[717,718,719]],["funkypotato.com",[717,718,719]],["equalexchange.co.uk",[717,718,719]],["swnsdigital.com",[717,718,719]],["gogolf.fi",[717,720]],["hanse-haus-greifswald.de",717],["tampereenratikka.fi",[717,719,723,724]],["kymppikatsastus.fi",[719,721,760,761]],["doka.com",[725,726,727]],["abi.de",[728,729]],["studienwahl.de",[728,729]],["youthforum.org",730],["journal.hr",[731,732,733,734]],["howstuffworks.com",735],["stickypassword.com",[736,737,738]],["conversion-rate-experts.com",[739,740]],["merkur.si",[741,742,743]],["petitionenligne.com",[744,745]],["petitionenligne.be",[744,745]],["petitionenligne.fr",[744,745]],["petitionenligne.re",[744,745]],["petitionenligne.ch",[744,745]],["skrivunder.net",[744,745]],["petitiononline.uk",[744,745]],["petitions.nz",[744,745]],["petizioni.com",[744,745]],["peticao.online",[744,745]],["skrivunder.com",[744,745]],["peticiones.ar",[744,745]],["petities.com",[744,745]],["petitionen.com",[744,745]],["petice.com",[744,745]],["opprop.net",[744,745]],["peticiok.com",[744,745]],["peticiones.net",[744,745]],["peticion.es",[744,745]],["peticiones.pe",[744,745]],["peticiones.mx",[744,745]],["peticiones.cl",[744,745]],["peticije.online",[744,745]],["peticiones.co",[744,745]],["mediathek.lfv-bayern.de",746],["aluypvc.es",[747,748,749]],["pracuj.pl",[750,751,752,753,754]],["vki.at",756],["konsument.at",756],["chollometro.com",757],["dealabs.com",757],["hotukdeals.com",757],["pepper.it",757],["pepper.pl",757],["preisjaeger.at",757],["mydealz.de",757],["easyfind.ch",[762,763]],["e-shop.leonidas.com",[764,765]],["lastmile.lt",766],["constantin.film",[767,768,769]],["notion.so",770],["digi24.ro",771],["omgevingsloketinzage.omgeving.vlaanderen.be",[772,773]],["primor.eu",774],["tameteo.com",775],["tempo.pt",775],["yourweather.co.uk",775],["meteored.cl",775],["meteored.mx",775],["tempo.com",775],["ilmeteo.net",775],["meteored.com.ar",775],["daswetter.com",775],["algarvevacation.net",776],["3sat.de",777],["oxxio.nl",[778,779]],["butterflyshop.dk",[780,781,782]],["praxis.nl",783],["brico.be",783],["kent.gov.uk",[784,785]]]);

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
        safeSelf().getExtraArgs(Array.from(arguments), 3)
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
