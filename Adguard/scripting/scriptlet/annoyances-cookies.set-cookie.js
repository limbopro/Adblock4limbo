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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["cookies_analytics_enabled","0","","reload","1"],["__radicalMotorsport.ac","true"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["accept_cookies","accepted"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookie-consent","false"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["viewed_cookie_policy","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["ilsaggiatore.com",4],["radicalmotorsport.com",5],["playbalatro.com",6],["kastner-oehler.de",7],["kastner-oehler.at",7],["kastner-oehler.ch",7],["twenga.it",8],["twenga.fr",8],["twenga.co.uk",8],["twenga.de",8],["twenga.es",8],["twenga.pl",8],["twenga.nl",8],["twenga.se",8],["olx.kz",9],["efl.com",10],["wst.tv",10],["cuvva.com",11],["vitbikes.de",12],["gourmetfoodstore.com",13],["schulfahrt.de",14],["deutsche-finanzagentur.de",15],["thejazzcafelondon.com",16],["keeb.supply",17],["spb.hh.ru",18],["kaluga.hh.ru",18],["school.hh.ru",18],["rating.hh.ru",18],["novgorod.hh.ru",18],["xxxshemaleporn.com",[19,20]],["gayhits.com",[19,20]],["gaypornvideos.xxx",[19,20]],["sextubespot.com",[19,20]],["wewantjusticedao.org",21],["godbolt.org",22],["projectenglish.com.pl",[23,28]],["hintaopas.fi",23],["ledenicheur.fr",23],["prisjagt.dk",23],["prisjakt.no",23],["prisjakt.nu",23],["pricespy.co.uk",23],["pricespy.co.nz",23],["sae.fsc.ccoo.es",24],["piusx-college.nl",25],["yoomoney.ru",26],["vod.warszawa.pl",27],["freshis.com",29],["anker.com",29],["m.twitch.tv",30],["environment.data.gov.uk",31],["playtesting.games",32],["portal.by.aok.de",33],["umlandscout.de",34],["atombank.co.uk",[35,36,37]],["showtv.com.tr",38],["ldz.lv",39],["seventhgeneration.com",39],["press.princeton.edu",39],["vkf-renzel.nl",40],["booking.reederei-zingst.de",[41,42,43]],["booking.weisse-flotte.de",[41,42,43]],["booking2.reederei-hiddensee.de",[41,42,43]],["sanswiss.pl",44],["galaxy.com",45],["petdesk.com",46],["ivyexec.com",47],["railtech.com",48],["lottehotel.com",[49,50,51,52,53]],["paydirekt.de",54],["kijiji.ca",55],["posterstore.fr",56],["posterstore.eu",56],["posterstore.be",56],["posterstore.de",56],["posterstore.hu",56],["posterstore.ie",56],["posterstore.it",56],["posterstore.no",56],["posterstore.nl",56],["posterstore.pl",56],["posterstore.com",56],["posterstore.ae",56],["posterstore.ca",56],["posterstore.nz",56],["posterstore.es",56],["posterstore.kr",56],["posterstore.jp",56],["posterstore.dk",56],["posterstore.se",56],["posterstore.ch",56],["posterstore.at",56],["myriadicity.net",57],["dgsf.org",57],["endgame.id",58],["cashback-cards.ch",59],["swisscard.ch",59],["ahorn24.de",60],["blockdyor.com",61],["ticket.io",62],["omega-nuernberg.servicebund.com",63],["lojaboschferramentas.com.br",[64,66,67]],["shareloft.com",65],["jaapeden.nl",[68,69,70]],["eboo.lu",71],["lasmallagency.com",72],["lhsystems.com",[73,74,75,76]],["twomates.de",77],["intergiro.com",78],["healthygamer.gg",79],["telepizza.es",[80,81,82]],["telepizza.pt",[80,81,82]],["frisco.pl",83],["tyleenslang.nl",84],["schrikdraad.net",84],["kruiwagen.net",84],["pvcvoordeel.nl",84],["pvcbuis.com",84],["drainagebuizen.nl",84],["likewise.com",85],["longines.com",[86,87,88,89]],["vater-it.de",90],["biano.hu",91],["quebueno.es",92],["nadia.gov.gr",93],["hana-book.fr",94],["kzvb.de",95],["correosexpress.com",96],["cexpr.es",96],["rte.ie",97],["smart.com",98],["gry.pl",98],["gamesgames.com",98],["games.co.uk",98],["jetztspielen.de",98],["ourgames.ru",98],["permainan.co.id",98],["gioco.it",98],["jeux.fr",98],["juegos.com",98],["ojogos.com.br",98],["oyunskor.com",98],["spela.se",98],["spelletjes.nl",98],["agame.com",98],["spielen.com",98],["flashgames.ru",98],["games.co.id",98],["giochi.it",98],["jeu.fr",98],["spel.nl",98],["sartor-stoffe.de",99],["rockpoint.cz",99],["rockpoint.sk",99],["parfum-zentrum.de",99],["candy-store.cz",99],["tridge.com",100],["asus.com",[101,102]],["drinksking.sk",103],["neuhauschocolates.com",104],["commandsuite.it",105],["oktea.tw",106],["bafin.de",107],["materna.de",107],["bamf.de",107],["tenvinilo-argentina.com",[108,109]],["eikaforsikring.no",[110,111]],["eurowings.com",[112,113,114]],["newpharma.be",[115,116,117]],["newpharma.fr",[115,116,117]],["newpharma.de",[115,116,117]],["newpharma.at",[115,116,117]],["newpharma.nl",[115,116,117]],["kapoorwatch.com",118],["instantoffices.com",119],["paf.se",119],["citibankonline.pl",119],["azertyfactor.be",120],["zelezodum.cz",121],["thw.de",122],["bafa.de",122],["bka.de",122],["bmbf.de",122],["weather.com",123],["bolist.se",[124,125]],["project529.com",125],["evivanlanschot.nl",126],["prenatal.nl",127],["onnibus.com",[127,758,759,760]],["kyoceradocumentsolutions.us",[127,803,804]],["kyoceradocumentsolutions.ch",[127,803,804]],["kyoceradocumentsolutions.co.uk",[127,803,804]],["kyoceradocumentsolutions.de",[127,803,804]],["kyoceradocumentsolutions.es",[127,803,804]],["kyoceradocumentsolutions.eu",[127,803,804]],["kyoceradocumentsolutions.fr",[127,803,804]],["kyoceradocumentsolutions.it",[127,803,804]],["kyoceradocumentsolutions.ru",[127,803,804]],["kyoceradocumentsolutions.mx",[127,803,804]],["kyoceradocumentsolutions.cl",[127,803,804]],["kyoceradocumentsolutions.com.br",[127,803,804]],["wagner-tuning.com",[128,129,130,131]],["waitrosecellar.com",[132,133,134,135]],["waitrose.com",[132,482]],["kvk.nl",[136,137,138]],["macfarlanes.com",139],["pole-emploi.fr",140],["gardenmediaguild.co.uk",141],["samplerite.com",142],["samplerite.cn",142],["sororedit.com",143],["blukit.com.br",144],["biegnaszczyt.pl",145],["staff-gallery.com",146],["itv.com",147],["dvag.de",148],["premierinn.com",[149,150,151,152]],["whitbreadinns.co.uk",[149,150,151,152]],["barandblock.co.uk",[149,150,151,152]],["tabletable.co.uk",[149,150,151,152]],["brewersfayre.co.uk",[149,150,151,152]],["beefeater.co.uk",[149,150,151,152]],["allstarssportsbars.co.uk",[153,154]],["babiesrus.ca",155],["toysrus.ca",155],["roomsandspaces.ca",155],["athletic-club.eus",[156,157,158]],["wattoo.dk",159],["wattoo.no",159],["texthelp.com",[160,161]],["courierexchange.co.uk",[162,163,164]],["haulageexchange.co.uk",[162,163,164]],["powerball.com",165],["tlaciarik.sk",165],["tiskarik.cz",165],["sseriga.edu",[166,167]],["rt.com",168],["swrng.de",169],["crfop.gdos.gov.pl",170],["nurgutes.de",171],["kpcen-torun.edu.pl",172],["opintopolku.fi",173],["app.erevie.pl",174],["debenhams.com",175],["archiwumalle.pl",176],["konicaminolta.ca",177],["konicaminolta.us",177],["deutschebank-dbdirect.com",[178,179,180]],["dbonline.deutsche-bank.es",[178,179,180]],["deutsche-bank.es",[178,179,180]],["hipotecaonline.db.com",181],["kangasalansanomat.fi",182],["eif.org",183],["tunnelmb.net",183],["sugi-net.jp",184],["understandingsociety.ac.uk",185],["bettertires.com",186],["electroprecio.com",186],["autohero.com",186],["leibniz.com",186],["computerbase.de",[186,800]],["bargaintown.ie",187],["tui.nl",188],["doppelmayr.com",189],["case-score.com",[190,191]],["cote.co.uk",192],["finimize.com",192],["blxxded.com",193],["rtu.lv",194],["sysdream.com",195],["cinemarkca.com",196],["neander-zahn.de",197],["theadelphileeds.co.uk",198],["tobycarvery.co.uk",198],["carsupermarket.com",198],["viajesatodotren.com",199],["ticketingcine.fr",200],["agenziavista.it",201],["e-chladiva.cz",201],["bitecode.dev",202],["mjob.si",[203,204,205]],["airportrentacar.gr",206],["mobile-fueling.de",206],["plos.org",207],["autohaus24.de",208],["sixt-neuwagen.de",208],["gadis.es",[209,210]],["dom.ru",210],["ford-kimmerle-reutlingen.de",211],["autohaus-reitermayer.de",211],["autohaus-diefenbach-waldbrunn.de",211],["autohaus-diefenbach.de",211],["autohaus-musberg.de",211],["ford-ah-im-hunsrueck-simmern.de",211],["ford-arndt-goerlitz.de",211],["ford-autogalerie-alfeld.de",211],["ford-bacher-schrobenhausen.de",211],["ford-bathauer-bad-harzburg.de",211],["ford-behrend-waren.de",211],["ford-bergland-frankfurt-oder.de",211],["ford-bergland-wipperfuerth.de",211],["ford-besico-glauchau.de",211],["ford-besico-nuernberg.de",211],["ford-bischoff-neumuenster.de",211],["ford-bodach-borgentreich.de",211],["ford-bunk-saarbruecken.de",211],["ford-bunk-voelklingen.de",211],["ford-busch-kirchberg.de",211],["ford-diermeier-muenchen.de",211],["ford-dinnebier-leipzig.de",211],["ford-duennes-regensburg.de",211],["ford-fischer-bochum.de",211],["ford-fischer-muenster.de",211],["ford-foerster-koblenz.de",211],["ford-fuchs-uffenheim.de",211],["ford-geberzahn-koeln.de",211],["ford-gerstmann-duesseldorf.de",211],["ford-haefner-und-strunk-kassel.de",211],["ford-hartmann-kempten.de",211],["ford-hartmann-rastatt.de",211],["ford-hatzner-karlsruhe.de",211],["ford-heine-hoexter.de",211],["ford-hentschel-hildesheim.de",211],["ford-hessengarage-dreieich.de",211],["ford-hessengarage-frankfurt.de",211],["ford-hga-windeck.de",211],["ford-hommert-coburg.de",211],["ford-horstmann-rastede.de",211],["ford-janssen-sonsbeck.de",211],["ford-jochem-stingbert.de",211],["ford-jungmann-wuppertal.de",211],["ford-kestel-marktzeuln.de",211],["ford-klaiber-bad-friedrichshall.de",211],["ford-koenig-eschwege.de",211],["ford-kohlhoff-mannheim.de",211],["ford-kt-automobile-coesfeld.de",211],["ford-lackermann-wesel.de",211],["ford-ludewig-delligsen.de",211],["ford-maiwald-linsengericht.de",211],["ford-mertens-beckum.de",211],["ford-meyer-bad-oeynhausen.de",211],["ford-mgs-bayreuth.de",211],["ford-mgs-radebeul.de",211],["ford-muecke-berlin.de",211],["ford-norren-weissenthurm.de",211],["ford-nrw-garage-duesseldorf.de",211],["ford-nrw-garage-handweiser.de",211],["ford-nuding-remshalden.de",211],["ford-ohm-rendsburg.de",211],["ford-reinicke-muecheln.de",211],["ford-rennig.de",211],["ford-roerentrop-luenen.de",211],["ford-schankola-dudweiler.de",211],["ford-sg-goeppingen.de",211],["ford-sg-leonberg.de",211],["ford-sg-neu-ulm.de",211],["ford-sg-pforzheim.de",211],["ford-sg-waiblingen.de",211],["ford-storz-st-georgen.de",211],["ford-strunk-koeln.de",211],["ford-tobaben-hamburg.de",211],["ford-toenjes-zetel.de",211],["ford-wagner-mayen.de",211],["ford-wahl-fritzlar.de",211],["ford-wahl-siegen.de",211],["ford-weege-bad-salzuflen.de",211],["ford-westhoff-hamm.de",211],["ford-wieland-hasbergen.de",211],["renault-autocenterprignitz-pritzwalk.de",211],["renault-spenrath-juelich.de",211],["vitalllit.com",212],["fincaparera.com",212],["dbnetbcn.com",212],["viba.barcelona",212],["anafaustinoatelier.com",212],["lamparasherrero.com",212],["calteixidor.cat",212],["argentos.barcelona",212],["anmarlube.com",212],["anynouxines.barcelona",212],["crearunapaginaweb.cat",212],["cualesmiip.com",212],["porndoe.com",[213,214,215]],["thinkingaustralia.com",216],["elrow.com",217],["ownit.se",218],["velo-antwerpen.be",[219,220]],["wwnorton.com",221],["pc-canada.com",222],["mullgs.se",223],["1a-sehen.de",224],["feature.fm",225],["comte.com",226],["baltic-watches.com",227],["np-brijuni.hr",227],["vilgain.com",227],["tradingview.com",228],["wevolver.com",229],["experienciasfree.com",230],["freemans.com",231],["kivikangas.fi",232],["lumingerie.com",232],["melkkobrew.fi",232],["kh.hu",[233,234,235]],["aplgo.com",236],["securityconference.org",237],["aha.or.at",[238,241]],["fantasyfitnessing.com",239],["chocolateemporium.com",240],["account.samsung.com",242],["crushwineco.com",243],["levi.pt",244],["fertagus.pt",245],["smiggle.co.uk",246],["ubisoft.com",[247,248,249,250]],["store.ubisoft.com",[247,250,684,685]],["thulb.uni-jena.de",251],["splityourticket.co.uk",252],["eramba.org",253],["openai.com",254],["kupbilecik.com",[255,256]],["kupbilecik.de",[255,256]],["kupbilecik.pl",[255,256]],["shopilya.com",257],["arera.it",258],["haustier-berater.de",258],["hfm-frankfurt.de",258],["zoommer.ge",259],["studentapan.se",260],["petcity.lt",[261,262,263,264]],["tobroco.com",[265,269]],["tobroco.nl",[265,269]],["tobroco-giant.com",[265,269]],["geosfreiberg.de",[266,267]],["eapvic.org",268],["bassolsenergia.com",268],["bammusic.com",[270,272,273]],["green-24.de",271],["phish-test.de",274],["bokadirekt.se",275],["ford.lt",276],["ford.pt",276],["ford.fr",276],["ford.de",276],["ford.dk",276],["ford.pl",276],["ford.se",276],["ford.nl",276],["ford.no",276],["ford.fi",276],["ford.gr",276],["ford.it",276],["data-media.gr",277],["e-food.gr",[278,279]],["bvmed.de",280],["babyshop.com",[281,282,283]],["griffbereit24.de",284],["checkwx.com",285],["calendardate.com",286],["wefashion.ch",287],["wefashion.fr",287],["wefashion.lu",287],["wefashion.be",287],["wefashion.de",287],["wefashion.nl",287],["brettspiel-angebote.de",[288,289]],["nio.com",290],["kancelarskepotreby.net",[291,292,293]],["segment-anything.com",294],["sketch.metademolab.com",295],["cambridgebs.co.uk",296],["freizeitbad-greifswald.de",297],["giuseppezanotti.com",[298,299,300]],["xcen.se",300],["biggreenegg.co.uk",301],["skihuette-oberbeuren.de",[302,303,304]],["pwsweather.com",305],["xfree.com",306],["theweathernetwork.com",[307,308]],["monese.com",[309,310,311]],["assos.com",309],["helmut-fischer.com",312],["myscience.org",313],["7-eleven.com",314],["airwallex.com",315],["streema.com",316],["gov.lv",317],["tise.com",318],["codecamps.com",319],["avell.com.br",320],["moneyfarm.com",321],["app.moneyfarm.com",321],["simpl.rent",322],["hubspot.com",323],["prodyna.com",[324,325,326,327]],["zutobi.com",[324,325,326,327]],["calm.com",[328,329]],["pubgesports.com",[330,331,332]],["outwrite.com",333],["sberbank.com",334],["sbermarket.ru",335],["atani.com",[336,337,338]],["croisieresendirect.com",339],["bgextras.co.uk",340],["sede.coruna.gal",341],["czech-server.cz",342],["hitech-gamer.com",343],["bialettikave.hu",[344,345,346]],["canalplus.com",[347,348,349]],["mader.bz.it",[350,351,352]],["supply.amazon.co.uk",353],["bhaptics.com",354],["cleverbot.com",355],["watchaut.film",356],["tuffaloy.com",357],["fanvue.com",357],["electronoobs.com",358],["xn--lkylen-vxa.se",359],["tiefenthaler-landtechnik.at",360],["tiefenthaler-landtechnik.ch",360],["tiefenthaler-landtechnik.de",360],["huisartsenpraktijkdoorn.nl",361],["varma.fi",362],["vyos.io",363],["digimobil.es",[364,365]],["teenage.engineering",366],["merrell.pl",[367,625]],["converse.pl",367],["shop.wf-education.com",[367,625]],["werkenbijaswatson.nl",368],["converse.com",[369,370]],["buyandapply.nexus.org.uk",371],["img.ly",372],["halonen.fi",[372,403,404,405,406]],["carlson.fi",[372,403,404,405,406]],["cams.ashemaletube.com",[373,374]],["electronicacerler.com",[375,376,377]],["okpoznan.pl",[378,383]],["ielts.idp.com",379],["ielts.co.nz",379],["ielts.com.au",379],["einfach-einreichen.de",[380,381,382]],["endlesstools.io",384],["thehacker.recipes",385],["mbhszepkartya.hu",386],["casellimoveis.com.br",387],["embedplus.com",388],["e-file.pl",389],["sp215.info",390],["empik.com",391],["senda.pl",392],["befestigungsfuchs.de",393],["cut-tec.co.uk",394],["gaytimes.co.uk",395],["hello.one",396],["wildcat-koeln.de",397],["libraries.merton.gov.uk",[398,399]],["tommy.hr",[400,401]],["usit.uio.no",402],["demo-digital-twin.r-stahl.com",407],["la31devalladolid.com",[408,409]],["mx.com",410],["foxtrail.fjallraven.com",411],["dotwatcher.cc",412],["bazarchic.com",[413,414,415]],["seedrs.com",416],["mypensiontracker.co.uk",417],["praxisplan.at",[417,440]],["endclothing.com",418],["esimplus.me",419],["cineplanet.com.pe",420],["ecologi.com",421],["wamba.com",422],["eurac.edu",423],["akasaair.com",424],["rittal.com",425],["wizards.com",426],["worstbassist.com",[427,428,429,430,431,432]],["zs-watch.com",433],["crown.com",434],["mesanalyses.fr",435],["teket.jp",436],["fish.shimano.com",[437,438,439]],["simsherpa.com",[441,442,443]],["translit.ru",444],["aruba.com",445],["aireuropa.com",446],["skfbearingselect.com",[447,448]],["scanrenovation.com",449],["ttela.se",450],["dominospizza.pl",451],["devagroup.pl",452],["horecaworld.biz",453],["horecaworld.be",453],["secondsol.com",453],["angelifybeauty.com",454],["cotopaxi.com",455],["justjoin.it",456],["digibest.pt",457],["two-notes.com",458],["theverge.com",459],["daimant.co",460],["secularism.org.uk",461],["karriere-hamburg.de",462],["musicmap.info",463],["gasspisen.se",464],["medtube.pl",465],["medtube.es",465],["medtube.fr",465],["medtube.net",465],["standard.sk",466],["linmot.com",467],["larian.com",[467,748]],["containerandpackaging.com",468],["top-yp.de",469],["termania.net",470],["account.nowpayments.io",471],["fizjobaza.pl",472],["gigasport.at",473],["gigasport.de",473],["gigasport.ch",473],["velleahome.gr",474],["nicequest.com",475],["handelsbanken.no",476],["handelsbanken.com",476],["handelsbanken.co.uk",476],["handelsbanken.se",[476,555]],["handelsbanken.dk",476],["handelsbanken.fi",476],["songtradr.com",[477,732]],["logo.pt",[478,479]],["flexwhere.co.uk",[480,481]],["flexwhere.de",[480,481]],["pricewise.nl",480],["getunleash.io",480],["dentmania.de",480],["free.navalny.com",480],["latoken.com",480],["campusbrno.cz",[483,484,485]],["secrid.com",486],["etsy.com",487],["careers.cloud.com",487],["blablacar.rs",488],["blablacar.ru",488],["blablacar.com.tr",488],["blablacar.com.ua",488],["blablacar.com.br",488],["seb.se",489],["sebgroup.com",489],["deps.dev",490],["buf.build",491],["starofservice.com",492],["ytcomment.kmcat.uk",493],["gmx.com",494],["gmx.fr",494],["karofilm.ru",495],["octopusenergy.it",496],["octopusenergy.es",[496,497]],["justanswer.es",498],["justanswer.de",498],["justanswer.com",498],["justanswer.co.uk",498],["citilink.ru",499],["huutokaupat.com",500],["kaggle.com",501],["emr.ch",[502,507]],["gem.cbc.ca",503],["pumatools.hu",504],["ici.tou.tv",505],["crunchyroll.com",506],["mayflex.com",508],["clipchamp.com",508],["trouwenbijfletcher.nl",508],["fletcher.nl",508],["fletcherzakelijk.nl",508],["intermatic.com",508],["ebikelohr.de",509],["eurosender.com",510],["melectronics.ch",511],["guard.io",512],["nokportalen.se",513],["dokiliko.com",514],["valamis.com",[515,516,517]],["sverigesingenjorer.se",518],["shop.almawin.de",[519,520,521,558]],["zeitzurtrauer.de",522],["skaling.de",[523,524,525]],["bringmeister.de",526],["gdx.net",527],["clearblue.com",528],["drewag.de",[529,530,531]],["enso.de",[529,530,531]],["buidlbox.io",529],["helitransair.com",532],["more.com",533],["nwslsoccer.com",533],["climatecentral.org",534],["resolution.de",535],["flagma.by",536],["eatsalad.com",537],["pacstall.dev",538],["web2.0calc.fr",539],["de-appletradein.likewize.com",540],["swissborg.com",541],["qwice.com",542],["canalpluskuchnia.pl",[543,544]],["uizard.io",545],["stmas.bayern.de",[546,549]],["novayagazeta.eu",547],["kinopoisk.ru",548],["yandex.ru",548],["go.netia.pl",[550,551]],["polsatboxgo.pl",[550,551]],["ing.it",[552,553]],["ing.nl",554],["youcom.com.br",556],["rule34.paheal.net",557],["kletterkogel.de",558],["pnel.de",558],["korodrogerie.de",558],["der-puten-shop.de",558],["katapult-shop.de",558],["evocsports.com",558],["esm-computer.de",558],["calmwaters.de",558],["mellerud.de",558],["akustik-projekt.at",558],["vansprint.de",558],["0815.at",558],["0815.eu",558],["ojskate.com",558],["der-schweighofer.de",558],["tz-bedarf.de",558],["zeinpharma.de",558],["weicon.com",558],["dagvandewebshop.be",558],["thiele-tee.de",558],["carbox.de",558],["riapsport.de",558],["trendpet.de",558],["eheizung24.de",558],["seemueller.com",558],["vivande.de",558],["heidegrill.com",558],["gladiator-fightwear.com",558],["h-andreas.com",558],["pp-parts.com",558],["natuerlich-holzschuhe.de",558],["massivart.de",558],["malermeister-shop.de",558],["imping-confiserie.de",558],["lenox-trading.at",558],["cklenk.de",558],["catolet.de",558],["drinkitnow.de",558],["patisserie-m.de",558],["storm-proof.com",558],["balance-fahrradladen.de",558],["magicpos.shop",558],["zeinpharma.com",558],["sps-handel.net",558],["novagenics.com",558],["butterfly-circus.de",558],["holzhof24.de",558],["w6-wertarbeit.de",558],["fleurop.de",558],["leki.com",558],["extremeaudio.de",558],["taste-market.de",558],["delker-optik.de",558],["stuhl24-shop.de",558],["g-nestle.de",558],["alpine-hygiene.ch",558],["fluidmaster.it",558],["cordon.de",558],["belisse-beauty.de",558],["belisse-beauty.co.uk",558],["wpc-shop24.de",558],["liv.si",558],["maybach-luxury.com",558],["leiternprofi24.de",558],["hela-shop.eu",558],["hitado.de",558],["armedangels.com",[558,632,633]],["hofer-kerzen.at",559],["karls-shop.de",560],["firmen.wko.at",561],["byggern.no",562],["rostics.ru",563],["hife.es",564],["lilcat.com",565],["hot.si",[566,567,568,569]],["crenolibre.fr",570],["e-pole.pl",571],["dopt.com",572],["keb-automation.com",573],["bonduelle.ru",574],["oxfordonlineenglish.com",575],["pccomponentes.fr",576],["pccomponentes.com",576],["pccomponentes.pt",576],["grants.at",577],["africa-uninet.at",577],["rqb.at",577],["youngscience.at",577],["oead.at",577],["innovationsstiftung-bildung.at",577],["etwinning.at",577],["arqa-vet.at",577],["zentrumfuercitizenscience.at",577],["vorstudienlehrgang.at",577],["erasmusplus.at",577],["jeger.pl",578],["bo.de",579],["thegamingwatcher.com",580],["norlysplay.dk",581],["plusujemy.pl",582],["asus.com.cn",[583,585]],["zentalk.asus.com",[583,585]],["mubi.com",584],["59northwheels.se",586],["foto-gregor.de",587],["kamera-express.de",587],["kamera-express.be",587],["kamera-express.nl",587],["kamera-express.fr",587],["kamera-express.lu",587],["dhbbank.com",588],["dhbbank.de",588],["dhbbank.be",588],["dhbbank.nl",588],["login.ingbank.pl",589],["fabrykacukiernika.pl",[590,591]],["peaks.com",592],["3landesmuseen-braunschweig.de",593],["unifachbuch.de",[594,595,596]],["playlumi.com",[597,598,599]],["chatfuel.com",600],["studio3t.com",[601,602,603,604]],["realgap.co.uk",[605,606,607,608]],["hotelborgia.com",[609,610]],["sweet24.de",611],["zwembaddekouter.be",612],["flixclassic.pl",613],["jobtoday.com",614],["deltatre.com",[615,616,630]],["withings.com",[617,618,619]],["blista.de",[620,621]],["hashop.nl",622],["gift.be",[623,624]],["elevator.de",625],["foryouehealth.de",625],["animaze.us",625],["penn-elcom.com",625],["curantus.de",625],["mtbmarket.de",625],["spanienweinonline.ch",625],["novap.fr",625],["bizkaia.eus",[626,627,628]],["sinparty.com",629],["mantel.com",631],["e-dojus.lv",634],["burnesspaull.com",635],["oncosur.org",636],["photobooth.online",637],["epidemicsound.com",638],["ryanair.com",639],["refurbished.at",[640,641,642]],["refurbished.nl",[640,641,642]],["refurbished.be",[640,641,642]],["refurbishedstore.de",[640,641,642]],["bayernportal.de",[643,644,645]],["ayudatpymes.com",646],["zipjob.com",646],["plastischechirurgie-muenchen.info",647],["bonn.sitzung-online.de",648],["depop.com",[649,650,651]],["thenounproject.com",652],["pricehubble.com",653],["ilmotorsport.de",654],["karate.com",655],["psbank.ru",655],["myriad.social",655],["exeedme.com",655],["followalice.com",[655,723]],["aqua-store.fr",656],["voila.ca",657],["anastore.com",658],["app.arzt-direkt.de",659],["dasfutterhaus.at",660],["e-pity.pl",661],["fillup.pl",662],["dailymotion.com",663],["barcawelt.de",664],["lueneburger-heide.de",665],["polizei.bayern.de",[666,668]],["ourworldofpixels.com",667],["jku.at",669],["matkahuolto.fi",670],["backmarket.de",[671,672,673]],["backmarket.co.uk",[671,672,673]],["backmarket.es",[671,672,673]],["backmarket.be",[671,672,673]],["backmarket.at",[671,672,673]],["backmarket.fr",[671,672,673]],["backmarket.gr",[671,672,673]],["backmarket.fi",[671,672,673]],["backmarket.ie",[671,672,673]],["backmarket.it",[671,672,673]],["backmarket.nl",[671,672,673]],["backmarket.pt",[671,672,673]],["backmarket.se",[671,672,673]],["backmarket.sk",[671,672,673]],["backmarket.com",[671,672,673]],["eleven-sportswear.cz",[674,675,676]],["silvini.com",[674,675,676]],["silvini.de",[674,675,676]],["purefiji.cz",[674,675,676]],["voda-zdarma.cz",[674,675,676]],["lesgarconsfaciles.com",[674,675,676]],["ulevapronohy.cz",[674,675,676]],["vitalvibe.eu",[674,675,676]],["plavte.cz",[674,675,676]],["mo-tools.cz",[674,675,676]],["flamantonlineshop.cz",[674,675,676]],["sandratex.cz",[674,675,676]],["norwayshop.cz",[674,675,676]],["3d-foto.cz",[674,675,676]],["neviditelnepradlo.cz",[674,675,676]],["nutrimedium.com",[674,675,676]],["silvini.cz",[674,675,676]],["karel.cz",[674,675,676]],["silvini.sk",[674,675,676]],["book-n-drive.de",677],["cotswoldoutdoor.com",678],["cotswoldoutdoor.ie",678],["cam.start.canon",679],["usnews.com",680],["researchaffiliates.com",681],["singkinderlieder.de",682],["stiegeler.com",683],["ba.com",[686,687,688,689,690,691,692]],["britishairways.com",[686,687,688,689,690,691,692]],["cineman.pl",[693,694,695]],["tv-trwam.pl",[693,694,695,696]],["qatarairways.com",[697,698,699,700,701]],["wedding.pl",702],["vivaldi.com",703],["emuia1.gugik.gov.pl",704],["nike.com",705],["adidas.at",706],["adidas.be",706],["adidas.ca",706],["adidas.ch",706],["adidas.cl",706],["adidas.co",706],["adidas.co.in",706],["adidas.co.kr",706],["adidas.co.nz",706],["adidas.co.th",706],["adidas.co.uk",706],["adidas.com",706],["adidas.com.ar",706],["adidas.com.au",706],["adidas.com.br",706],["adidas.com.my",706],["adidas.com.ph",706],["adidas.com.vn",706],["adidas.cz",706],["adidas.de",706],["adidas.dk",706],["adidas.es",706],["adidas.fi",706],["adidas.fr",706],["adidas.gr",706],["adidas.ie",706],["adidas.it",706],["adidas.mx",706],["adidas.nl",706],["adidas.no",706],["adidas.pe",706],["adidas.pl",706],["adidas.pt",706],["adidas.ru",706],["adidas.se",706],["adidas.sk",706],["colourbox.com",707],["ebilet.pl",708],["myeventeo.com",709],["snap.com",710],["louwman.nl",[711,712]],["ratemyprofessors.com",713],["filen.io",714],["leotrippi.com",715],["restaurantclub.pl",715],["context.news",715],["queisser.de",715],["grandprixradio.dk",[716,717,718,719,720]],["grandprixradio.nl",[716,717,718,719,720]],["grandprixradio.be",[716,717,718,719,720]],["businessclass.com",721],["quantamagazine.org",722],["hellotv.nl",724],["jisc.ac.uk",725],["lasestrellas.tv",726],["schoonmaakgroothandelemmen.nl",727],["nanuko.de",727],["hair-body-24.de",727],["shopforyou47.de",727],["kreativverliebt.de",727],["anderweltverlag.com",727],["octavio-shop.com",727],["forcetools-kepmar.eu",727],["fantecshop.de",727],["hexen-werkstatt.shop",727],["shop-naturstrom.de",727],["biona-shop.de",727],["camokoenig.de",727],["bikepro.de",727],["kaffeediscount.com",727],["vamos-skateshop.com",727],["holland-shop.com",727],["avonika.com",727],["royal-oak.org",728],["hurton.pl",729],["officesuite.com",730],["fups.com",[731,733]],["scienceopen.com",734],["moebel-mahler-siebenlehn.de",[735,736]],["calendly.com",737],["batesenvironmental.co.uk",[738,739]],["ubereats.com",740],["101internet.ru",741],["bein.com",742],["beinsports.com",742],["figshare.com",743],["bitso.com",744],["gallmeister.fr",745],["eco-toimistotarvikkeet.fi",746],["proficient.fi",746],["developer.ing.com",747],["webtrack.dhlglobalmail.com",749],["webtrack.dhlecs.com",749],["ehealth.gov.gr",750],["calvinklein.se",[751,752,753]],["calvinklein.fi",[751,752,753]],["calvinklein.sk",[751,752,753]],["calvinklein.si",[751,752,753]],["calvinklein.ch",[751,752,753]],["calvinklein.ru",[751,752,753]],["calvinklein.com",[751,752,753]],["calvinklein.pt",[751,752,753]],["calvinklein.pl",[751,752,753]],["calvinklein.at",[751,752,753]],["calvinklein.nl",[751,752,753]],["calvinklein.hu",[751,752,753]],["calvinklein.lu",[751,752,753]],["calvinklein.lt",[751,752,753]],["calvinklein.lv",[751,752,753]],["calvinklein.it",[751,752,753]],["calvinklein.ie",[751,752,753]],["calvinklein.hr",[751,752,753]],["calvinklein.fr",[751,752,753]],["calvinklein.es",[751,752,753]],["calvinklein.ee",[751,752,753]],["calvinklein.de",[751,752,753]],["calvinklein.dk",[751,752,753]],["calvinklein.cz",[751,752,753]],["calvinklein.bg",[751,752,753]],["calvinklein.be",[751,752,753]],["calvinklein.co.uk",[751,752,753]],["ofdb.de",754],["dtksoft.com",755],["serverstoplist.com",756],["truecaller.com",757],["timhortons.co.th",[761,762,763,764,766,767]],["toyota.co.uk",[761,762,763,765,766,767]],["businessaccountingbasics.co.uk",[761,762,763,764,766,767]],["flickr.org",[761,762,763,764,766,767]],["espacocasa.com",761],["altraeta.it",761],["centrooceano.it",761],["allstoresdigital.com",761],["cultarm3d.de",761],["soulbounce.com",761],["fluidtopics.com",761],["uvetgbt.com",761],["malcorentacar.com",761],["emondo.de",761],["maspero.it",761],["kelkay.com",761],["underground-england.com",761],["vert.eco",761],["turcolegal.com",761],["magnet4blogging.net",761],["moovly.com",761],["automationafrica.co.za",761],["jornaldoalgarve.pt",761],["keravanenergia.fi",761],["kuopas.fi",761],["frag-machiavelli.de",761],["healthera.co.uk",761],["mobeleader.com",761],["powerup-gaming.com",761],["developer-blog.net",761],["medical.edu.mt",761],["deh.mt",761],["bluebell-railway.com",761],["ribescasals.com",761],["javea.com",761],["chinaimportal.com",761],["inds.co.uk",761],["raoul-follereau.org",761],["serramenti-milano.it",761],["cosasdemujer.com",761],["luz-blanca.info",761],["cosasdeviajes.com",761],["safehaven.io",761],["havocpoint.it",761],["motofocus.pl",761],["nomanssky.com",761],["drei-franken-info.de",761],["clausnehring.com",761],["alttab.net",761],["kinderleicht.berlin",761],["kiakkoradio.fi",761],["cosasdelcaribe.es",761],["de-sjove-jokes.dk",761],["serverprofis.de",761],["biographyonline.net",761],["iziconfort.com",761],["sportinnederland.com",761],["natureatblog.com",761],["wtsenergy.com",761],["cosasdesalud.es",761],["internetpasoapaso.com",761],["zurzeit.at",761],["contaspoupanca.pt",761],["steamdeckhq.com",[761,762,763,764,766,767]],["ipouritinc.com",[761,763,764]],["hemglass.se",[761,763,764,766,767]],["sumsub.com",[761,762,763]],["atman.pl",[761,762,763]],["fabriziovanmarciano.com",[761,762,763]],["nationalrail.com",[761,762,763]],["eett.gr",[761,762,763]],["funkypotato.com",[761,762,763]],["equalexchange.co.uk",[761,762,763]],["swnsdigital.com",[761,762,763]],["gogolf.fi",[761,764]],["hanse-haus-greifswald.de",761],["tampereenratikka.fi",[761,763,768,769]],["kymppikatsastus.fi",[763,766,805,806]],["doka.com",[770,771,772]],["abi.de",[773,774]],["studienwahl.de",[773,774]],["youthforum.org",775],["journal.hr",[776,777,778,779]],["howstuffworks.com",780],["stickypassword.com",[781,782,783]],["conversion-rate-experts.com",[784,785]],["merkur.si",[786,787,788]],["petitionenligne.com",[789,790]],["petitionenligne.be",[789,790]],["petitionenligne.fr",[789,790]],["petitionenligne.re",[789,790]],["petitionenligne.ch",[789,790]],["skrivunder.net",[789,790]],["petitiononline.uk",[789,790]],["petitions.nz",[789,790]],["petizioni.com",[789,790]],["peticao.online",[789,790]],["skrivunder.com",[789,790]],["peticiones.ar",[789,790]],["petities.com",[789,790]],["petitionen.com",[789,790]],["petice.com",[789,790]],["opprop.net",[789,790]],["peticiok.com",[789,790]],["peticiones.net",[789,790]],["peticion.es",[789,790]],["peticiones.pe",[789,790]],["peticiones.mx",[789,790]],["peticiones.cl",[789,790]],["peticije.online",[789,790]],["peticiones.co",[789,790]],["mediathek.lfv-bayern.de",791],["aluypvc.es",[792,793,794]],["pracuj.pl",[795,796,797,798,799]],["vki.at",801],["konsument.at",801],["chollometro.com",802],["dealabs.com",802],["hotukdeals.com",802],["pepper.it",802],["pepper.pl",802],["preisjaeger.at",802],["mydealz.de",802],["easyfind.ch",[807,808]],["e-shop.leonidas.com",[809,810]],["lastmile.lt",811],["veriff.com",812],["constantin.film",[813,814,815]],["notion.so",816],["omgevingsloketinzage.omgeving.vlaanderen.be",[817,818]],["primor.eu",819],["tameteo.com",820],["tempo.pt",820],["yourweather.co.uk",820],["meteored.cl",820],["meteored.mx",820],["tempo.com",820],["ilmeteo.net",820],["meteored.com.ar",820],["daswetter.com",820],["algarvevacation.net",821],["3sat.de",822],["oxxio.nl",[823,824]],["butterflyshop.dk",[825,826,827]],["praxis.nl",828],["brico.be",828],["kent.gov.uk",[829,830]]]);

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
