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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setCookie = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["ga_consentement","0"],["VMAKE_COOKIE_POLICY","0"],["accepted_cookie_policy","false"],["GDPR","9"],["dad_consent","true"],["agreedToCookiesanon","1"],["pum-937","true"],["essential_cookies_enabled","true"],["google_cookies_enabled","false"],["cookiepolicyinfo_new2","true"],["livedoor-blog-gdpr-agreed","1"],["camra_experience_cookie_consent","1"],["valCookie1","1"],["third-party","required","","reload","1"],["COOKIES_ACCEPTED","true"],["cookienotification","1"],["_cookieconsentv2","1"],["cconsent","1"],["cookies-info","true"],["cookies_and_content_security_policy","false"],["cookies_consent_disclaimer","false"],["intramuros-cookie-consent","true"],["intramuros-analytics","false"],["website_cookies_bar","true"],["CF_GDPR_COOKIE_CONSENT_VIEWED","1"],["cookie-confirm","1"],["cookie_preferences_set","true"],["S_COOKIES_ACCEPTED","true"],["isCookieLegalBannerSelected","true"],["cc","1"],["doSomethingOnlyOnce","true"],["tos_consent","allow"],["fn_cookie_banner","1"],["adult_confirm","1"],["atl-gdpr-consent","0010000"],["cookies-allowance","true"],["_acceptsEssential","true"],["informedConsent","1"],["EnableABTest","false"],["EnableFacebook","false"],["EnableGA","false"],["cookie-consent","false"],["consent-state","true"],["was_cookie_consent","no"],["ytprefs_gdpr_consent","1","","reload","1"],["cconsent","1000"],["CONSENT","15"],["nCookieVisible","2"],["CookieConsent","false"],["cookie_consent","necessary"],["suzuki-accept-cookie","true"],["cookieHidden","true"],["terms_agreement_popup_agreed","true","","reload","1"],["consent_panel","1"],["user_allowed_save_cookie","true"],["AcceptCookie","yes"],["cookieConsent","0"],["cookieConsent","rejected"],["smile_allow_cookies","true"],["cookie_alert","true"],["cb-enabled","accepted"],["AgreeCookies","true"],["AreCookiesSet","true"],["chcCookieHint","1","","reload","1"],["accept-selected-cookies","true","","reload","1"],["cookiePreferences","true"],["necessary","true"],["has_accepted_cookies","true"],["cs_viewed_cookie_policy","yes"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["has-seen-cookie-notice","true","","reload","1"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["cookies-configured","1"],["consent","true"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","","reload","1"],["required","1"],["pmStorage","1"],["user_cookie_prefs","1"],["_coo_seen","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["VAA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["VAA_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["VAA_ENSIGHTEN_PRIVACY_Marketing","0"],["VAA_ENSIGHTEN_PRIVACY_Functional","0"],["VAA_ENSIGHTEN_PRIVACY_Analytics","0"],["agreesWithCookies","true"],["gaCookies","false"],["cookiesApproved20231","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookieconsent_status","dismiss"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["WB_CookieNotification","1"],["cookieConfirmation","true"],["gdpr2_required","true"],["gdpr2","true"],["DmCookiesAccepted","true"],["DmCookiesAnalytics","false"],["DmCookiesMarketing","false"],["cookie_accepted","1"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["accept_cookies","yes","","reload","1"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["acceptCookie","1"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["CookieConsentFT","1"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookie-bar","0"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["acceptsAdvertisingCookies","false"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["br-lgpd-cookie-notice-agreement-v1","1"],["privacy_mv","1"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["gcp","1","","reload","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["cookieconsent","deny"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["cookie-consent","denied"],["COOKIECONSENT","false"],["tibber_cc_essential","approved","","reload","1"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["kevin-user-has-accepted-ad-cookies","false"],["kevin-user-has-accepted-analytics-cookies","false"],["kevin-user-has-interacted-with-cookies","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["consents","essential"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_preferences","10"],["cookie_consent_status","allow"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["ckies_google_analytics","deny","","reload","1"],["ckies_stripe","allow"],["ckies_facebook_post","deny"],["ckies_itunes","deny"],["ckies_google_ads_ct","deny"],["ckies_tiktok_post","deny"],["ckies_youtube_video","allow"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["CA_DT_V2","0","","reload","1"],["CA_DT_V3","0"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["TVPtcs22ver","66"],["cookieBasicConsent","accepted"],["cookieVer","1","","reload","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["billetterie.auditorium-lyon.com",3],["vmake.ai",4],["athleticsreg.ca",5],["marinelink.com",6],["againstdata.com",7],["inspections.vcha.ca",8],["floodlit.org",9],["spuntinoheathrow.com",[10,11]],["pzw.org.pl",12],["livedoor.biz",13],["camra.org.uk",[14,961]],["parkguellonline.cat",15],["stroga-festival.de",16],["queensfishandchipsgloucester.co.uk",17],["ieq-systems.de",18],["arning-bau.de",18],["startrescue.co.uk",19],["eneba.com",20],["eltiempo.com",21],["galaxykayaks.ro",22],["mywot.com",23],["intramuros.org",[24,25]],["nucom.odoo.dev",26],["cyberfolks.pl",27],["cyberfolks.ro",27],["okko.tv",28],["immersivelabs.online",29],["serasa.com.br",30],["falabella.com.pe",31],["falabella.com",31],["falabella.com.co",31],["przegladpiaseczynski.pl",32],["cloud.aeolservice.es",33],["nuevoloquo.ch",34],["fogaonet.com",35],["zbiornik.com",36],["bitbucket.io",37],["ton.org",38],["sutterhealth.org",39],["antpool.com",40],["thegraph.com",44],["followalice.com",[44,851]],["headout.com",45],["london-tickets.co.uk",45],["kosmas.cz",46],["blog.documentfoundation.org",47],["my.eneba.com",48],["blitzortung.org",49],["esim.redteago.com",50],["tester.userbrain.com",51],["empathy.com",51],["labs.epi2me.io",51],["fydeos.io",52],["autos.suzuki.com.mx",53],["stonly.com",54],["camp-fire.jp",55],["my2n.com",56],["vandalism-sounds.com",57],["oocl.com",58],["brazzersnetwork.com",59],["safaricom.co.ke",60],["smile.io",61],["hiermitherz.de",62],["uk2.net",63],["aeromexico.com",[64,65]],["easywintergarten.de",66],["vinothekwaespi.ch",[67,68,69]],["graphy.com",70],["raspberrypi.dk",71],["ocean.io",72],["waves.is",73],["tesa.com",74],["repair.wd40.com",75],["gls-group.eu",78],["chipsaway.co.uk",79],["heatstore.eu",80],["luvly.care",80],["firmen.wko.at",80],["copaamerica.com",81],["apunyalometre.cat",81],["cooleygo.com",82],["map.blitzortung.org",83],["northumbriasport.com",84],["clearspend.natwest.com",85],["cellcolabsclinical.com",86],["producthunt.com",87],["motorsportreg.com",[88,89]],["imola.motorsportreg.com",[90,91]],["pga.com",92],["portal.payment.eltax.lta.go.jp",93],["greenbuildingadvisor.com",[94,95,96]],["finewoodworking.com",[94,95,96]],["privatekeys.pw",97],["telli.dpd.ee",98],["youthforum.org",98],["votegroup.de",[99,100]],["pharmahall.gr",101],["x-team.com",102],["reservations.helveticmotion.ch",103],["endclothing.com",[104,105]],["kraftwerk.co.at",106],["fhr.biz",107],["srf.nu",108],["jn.fo",[109,110]],["rovia.es",111],["platforma.eb2b.com.pl",111],["schwanger-in-bayern.de",112],["stmas.bayern.de",[112,741]],["bayern-gegen-gewalt.de",112],["verfwebwinkel.be",113],["wayfair.co.uk",114],["wayfair.de",114],["wayfair.ie",114],["physiotherapie-naurod.de",115],["airnewzealand.co.nz",116],["viu.com",117],["dinamalar.com",118],["volkswagen-group.com",119],["solo.io",120],["pomelo.la",121],["ibuypower.com",122],["sberbank.com",[123,526]],["swissmilk.ch",124],["gamemaker.io",125],["pixiv.net",126],["kinemaster.com",127],["sp32bb.pl",128],["jazz.fm",129],["juntadeandalucia.es",130],["melee.gg",[131,132,133]],["chemocare.com",134],["mobiliteit.nl",135],["virginatlantic.com",[136,137,138,139,140]],["xledger.net",141],["legalteam.hu",142],["mediately.co",143],["reviewmeta.com",144],["guide-bordeaux-gironde.com",145],["travelinsured.com",146],["gdpr.twitter.com",147],["mora.hu",148],["confused.com",149],["physikinstrumente.de",150],["karlknauer.de",150],["schoeck.com",150],["resonate.coop",150],["northgatevehiclehire.ie",150],["badhall.at",150],["cic.ch",150],["tryhackme.com",151],["ilsaggiatore.com",152],["forum.digitalfernsehen.de",153],["bitscrunch.com",[154,155,156]],["hannahgraaf.com",157],["shop.elbers-hof.de",[158,159]],["woolsocks.eu",160],["uza.be",161],["5asec.ch",161],["wizards.com",161],["kitepackaging.co.uk",[162,163]],["parkenflughafen.de",164],["radyofenomen.com",165],["elsate.com",166],["hume.ai",167],["lotusantwerp.wacs.online",168],["docs.yagpdb.xyz",169],["gitbook.io",169],["gitbook.com",169],["thehacker.recipes",169],["docs.dyrector.io",169],["docs.webstudio.is",169],["docs.chartbeat.com",169],["docs.civic.com",169],["weatherbug.com",170],["saleor.io",171],["publibike.ch",[172,173]],["onlinelekarna.cz",[174,175,176]],["eleven-sportswear.cz",[175,176,873]],["silvini.com",[175,176,873]],["silvini.de",[175,176,873]],["purefiji.cz",[175,176,873]],["voda-zdarma.cz",[175,176,873]],["lesgarconsfaciles.com",[175,176,873]],["ulevapronohy.cz",[175,176,873]],["vitalvibe.eu",[175,176,873]],["plavte.cz",[175,176,873]],["mo-tools.cz",[175,176,873]],["flamantonlineshop.cz",[175,176,873]],["sandratex.cz",[175,176,873]],["norwayshop.cz",[175,176,873]],["3d-foto.cz",[175,176,873]],["neviditelnepradlo.cz",[175,176,873]],["nutrimedium.com",[175,176,873]],["silvini.cz",[175,176,873]],["karel.cz",[175,176,873]],["silvini.sk",[175,176,873]],["shop.humle.se",177],["59northwheels.se",177],["makeresearchpay.com",178],["tandartsenpraktijk-simons.tandartsennet.nl",179],["huisartsenpraktijkdoorn.nl",179],["bcorporation.net",180],["knime.com",[180,225]],["quebueno.es",180],["edookit.com",181],["trixonline.be",182],["radio-canada.ca",183],["heysummit.com",184],["puromarketing.com",185],["radicalmotorsport.com",186],["biurobox.pl",187],["cycling74.com",188],["triviacreator.com",189],["reforge.com",189],["freshis.com",189],["anker.com",189],["computacenter.com",190],["playbalatro.com",191],["kastner-oehler.de",192],["kastner-oehler.at",192],["kastner-oehler.ch",192],["twenga.it",193],["twenga.fr",193],["twenga.co.uk",193],["twenga.de",193],["twenga.es",193],["twenga.pl",193],["twenga.nl",193],["twenga.se",193],["olx.kz",194],["olx.uz",194],["efl.com",195],["wst.tv",195],["cuvva.com",196],["vitbikes.de",197],["gourmetfoodstore.com",198],["schulfahrt.de",199],["deutsche-finanzagentur.de",200],["thejazzcafelondon.com",201],["keeb.supply",202],["spb.hh.ru",203],["kaluga.hh.ru",203],["school.hh.ru",203],["rating.hh.ru",203],["novgorod.hh.ru",203],["xxxshemaleporn.com",[204,205]],["gayhits.com",[204,205]],["gaypornvideos.xxx",[204,205]],["sextubespot.com",[204,205]],["wewantjusticedao.org",206],["godbolt.org",207],["projectenglish.com.pl",[208,214]],["ledenicheur.fr",208],["pricespy.co.uk",208],["pricespy.co.nz",208],["sae.fsc.ccoo.es",209],["piusx-college.nl",210],["forgeofempires.com",211],["yoomoney.ru",212],["vod.warszawa.pl",213],["bio-hoflieferant.de",215],["m.twitch.tv",216],["environment.data.gov.uk",217],["playtesting.games",218],["portal.by.aok.de",219],["umlandscout.de",220],["atombank.co.uk",[221,222,223]],["showtv.com.tr",224],["seventhgeneration.com",225],["press.princeton.edu",225],["ldz.lv",225],["crtm.es",226],["airastana.com",227],["vkf-renzel.nl",228],["booking.reederei-zingst.de",[229,230,231]],["booking.weisse-flotte.de",[229,230,231]],["booking2.reederei-hiddensee.de",[229,230,231]],["sanswiss.pl",232],["galaxy.com",233],["petdesk.com",234],["ivyexec.com",235],["railtech.com",236],["lottehotel.com",[237,238,239,240,241]],["paydirekt.de",242],["kijiji.ca",243],["posterstore.fr",244],["posterstore.eu",244],["posterstore.be",244],["posterstore.de",244],["posterstore.hu",244],["posterstore.ie",244],["posterstore.it",244],["posterstore.no",244],["posterstore.nl",244],["posterstore.pl",244],["posterstore.com",244],["posterstore.ae",244],["posterstore.ca",244],["posterstore.nz",244],["posterstore.es",244],["posterstore.kr",244],["posterstore.jp",244],["posterstore.dk",244],["posterstore.se",244],["posterstore.ch",244],["posterstore.at",244],["myriadicity.net",245],["dgsf.org",245],["endgame.id",246],["cashback-cards.ch",247],["swisscard.ch",247],["ahorn24.de",248],["blockdyor.com",249],["ticket.io",250],["omega-nuernberg.servicebund.com",251],["lojaboschferramentas.com.br",[252,254,255]],["shareloft.com",253],["fineartsmuseum.recreatex.be",[256,257,258]],["jaapeden.nl",[256,257,258]],["eboo.lu",259],["lasmallagency.com",260],["lhsystems.com",[261,262,263,264]],["twomates.de",265],["intergiro.com",266],["healthygamer.gg",267],["telepizza.es",[268,269,270]],["telepizza.pt",[268,269,270]],["frisco.pl",271],["tyleenslang.nl",272],["schrikdraad.net",272],["kruiwagen.net",272],["pvcvoordeel.nl",272],["pvcbuis.com",272],["drainagebuizen.nl",272],["likewise.com",273],["longines.com",[274,275,276,277]],["vater-it.de",278],["biano.hu",279],["nadia.gov.gr",280],["hana-book.fr",281],["kzvb.de",282],["correosexpress.com",283],["cexpr.es",283],["rte.ie",284],["smart.com",285],["gry.pl",285],["gamesgames.com",285],["games.co.uk",285],["jetztspielen.de",285],["ourgames.ru",285],["permainan.co.id",285],["gioco.it",285],["jeux.fr",285],["juegos.com",285],["ojogos.com.br",285],["oyunskor.com",285],["spela.se",285],["spelletjes.nl",285],["agame.com",285],["spielen.com",285],["flashgames.ru",285],["games.co.id",285],["giochi.it",285],["jeu.fr",285],["spel.nl",285],["tridge.com",286],["asus.com",[287,288]],["drinksking.sk",289],["neuhauschocolates.com",290],["commandsuite.it",291],["designmynight.com",291],["oktea.tw",292],["1028loveu.com.tw",292],["airbubu.com",292],["amai.tw",292],["anns.tw",292],["as-eweb.com",292],["asf.com.tw",292],["asics.com.hk",292],["asics.com.tw",292],["ausupreme.com",292],["basiik.com",292],["bearboss.com",292],["beast-kingdom.com.tw",292],["beldora.com.tw",292],["benefitcosmetics.com.tw",292],["bns.com.tw",292],["byhue-official.com",292],["candybox.com.tw",292],["columbiasportswear.com.tw",292],["concerto.com.tw",292],["countess.tw",292],["cuapp.com",292],["daima.asia",292],["dettol-store.com.tw",292],["dickies.com.tw",292],["doga.com.tw",292],["dot-st.tw",292],["dr-douxi.tw",292],["durex-store.com.tw",292],["echome.com.hk",292],["eding.com.tw",292],["e-hilltop.com",292],["faduobra.com",292],["fairlady.com.tw",292],["fbshop.com.tw",292],["freshdays-shop.com",292],["hh-taiwan.com.tw",292],["iqueen.com.tw",292],["jjfish.com.tw",292],["jpmed.com.tw",292],["jsstore.com.tw",292],["kipling.com.tw",292],["kuaiche.com.tw",292],["lanew.com.tw",292],["leejeans.com.tw",292],["levis.com.tw",292],["ludeya.com",292],["lulus.tw",292],["makeupforever.com.tw",292],["mart.family.com.tw",292],["meinlcoffee.com.tw",292],["metroasis.com.tw",292],["minervababy.com.tw",292],["miss21.estore.asgroup.com.tw",292],["miu-star.com.tw",292],["mkup.tw",292],["mlb-korea.com.hk",292],["mollifix.com",292],["naruko.com.tw",292],["newweb.renoirpuzzle.com.tw",292],["nikokids.com.tw",292],["nisoro.com",292],["odout.com",292],["ouiorganic.com",292],["pandababy.com.tw",292],["peachy.com.tw",292],["poyabuy.com.tw",292],["premierfood.com.hk",292],["rachelwine.com.tw",292],["risal.com.tw",292],["sasa.com.hk",292],["schiff-store.com.tw",292],["sexylook.com.tw",292],["sfn.com.tw",292],["shingfangpastry.com",292],["shop.3m.com.tw",292],["shop.5soap.com",292],["shop.atunas.com.tw",292],["shop.bosscat.com.tw",292],["shop.conas.com.tw",292],["shop.cosmed.com.tw",292],["shop.coville.com.tw",292],["shop.euyansang.com.hk",292],["shop.kbc.com.tw",292],["shop.kemei.com.tw",292],["shop.kky.com.tw",292],["shop.norns.com.tw",292],["shop.okogreen.com.tw",292],["shop.skechers-twn.com",292],["shop.s3.com.tw",292],["shop.teascovery.com",292],["shop.wacoal.com.tw",292],["shop.wumajia.com.tw",292],["shopping.dradvice.asia",292],["shop0315.com.tw",292],["sky-blue.com.tw",292],["snowpeak.com.tw",292],["songbeam.com.tw",292],["so-nice.com.tw",292],["store-philips.tw",292],["tcsb.com.tw",292],["thenorthface.com.tw",292],["timberland.com.tw",292],["tokuyo.com.tw",292],["triumphshop.com.tw",292],["trygogo.com",292],["tupiens-foodie.com",292],["tw.istayreal.com",292],["tw.puma.com",292],["vans.com.tw",292],["vemar.com.tw",292],["vigill.com.tw",292],["vilson.com",292],["vincentsworld.com.tw",292],["wealthshop888.com",292],["yamazaki.com.tw",292],["bafin.de",293],["materna.de",293],["bamf.de",293],["tenvinilo-argentina.com",[294,295]],["eikaforsikring.no",[296,297]],["eurowings.com",[298,299,300]],["newpharma.be",[301,302,303]],["newpharma.fr",[301,302,303]],["newpharma.de",[301,302,303]],["newpharma.at",[301,302,303]],["newpharma.nl",[301,302,303]],["kapoorwatch.com",304],["instantoffices.com",305],["paf.se",305],["citibank.pl",305],["citibankonline.pl",305],["azertyfactor.be",306],["zelezodum.cz",307],["thw.de",308],["bafa.de",308],["bka.de",308],["bmbf.de",308],["weather.com",309],["bolist.se",[310,311]],["project529.com",311],["evivanlanschot.nl",312],["alohabrowser.com",313],["prenatal.nl",314],["onnibus.com",[314,957,958,959]],["kyoceradocumentsolutions.us",[314,1015,1016]],["kyoceradocumentsolutions.ch",[314,1015,1016]],["kyoceradocumentsolutions.co.uk",[314,1015,1016]],["kyoceradocumentsolutions.de",[314,1015,1016]],["kyoceradocumentsolutions.es",[314,1015,1016]],["kyoceradocumentsolutions.eu",[314,1015,1016]],["kyoceradocumentsolutions.fr",[314,1015,1016]],["kyoceradocumentsolutions.it",[314,1015,1016]],["kyoceradocumentsolutions.ru",[314,1015,1016]],["kyoceradocumentsolutions.mx",[314,1015,1016]],["kyoceradocumentsolutions.cl",[314,1015,1016]],["kyoceradocumentsolutions.com.br",[314,1015,1016]],["wagner-tuning.com",[315,316,317,318]],["waitrosecellar.com",[319,320,321,322]],["waitrose.com",[319,674]],["kvk.nl",[323,324,325]],["macfarlanes.com",326],["pole-emploi.fr",327],["gardenmediaguild.co.uk",328],["samplerite.com",329],["samplerite.cn",329],["sororedit.com",330],["blukit.com.br",331],["biegnaszczyt.pl",332],["staff-gallery.com",333],["itv.com",334],["dvag.de",335],["premierinn.com",[336,337,338,339]],["whitbreadinns.co.uk",[336,337,338,339]],["barandblock.co.uk",[336,337,338,339]],["tabletable.co.uk",[336,337,338,339]],["brewersfayre.co.uk",[336,337,338,339]],["beefeater.co.uk",[336,337,338,339]],["allstarssportsbars.co.uk",[340,341]],["babiesrus.ca",342],["toysrus.ca",342],["roomsandspaces.ca",342],["athletic-club.eus",[343,344,345]],["wattoo.dk",346],["wattoo.no",346],["texthelp.com",[347,348]],["courierexchange.co.uk",[349,350,351]],["haulageexchange.co.uk",[349,350,351]],["ecaytrade.com",352],["unka.bilecik.edu.tr",352],["powerball.com",353],["tlaciarik.sk",353],["tiskarik.cz",353],["sseriga.edu",[354,355]],["rt.com",356],["swrng.de",357],["crfop.gdos.gov.pl",358],["nurgutes.de",359],["kpcen-torun.edu.pl",360],["opintopolku.fi",361],["app.erevie.pl",362],["debenhams.com",363],["archiwumalle.pl",364],["konicaminolta.ca",365],["konicaminolta.us",365],["deutschebank-dbdirect.com",[366,367,368]],["dbonline.deutsche-bank.es",[366,367,368]],["deutsche-bank.es",[366,367,368]],["hipotecaonline.db.com",369],["kangasalansanomat.fi",370],["eif.org",371],["tunnelmb.net",371],["sugi-net.jp",372],["understandingsociety.ac.uk",373],["leibniz.com",374],["horecaworld.biz",[374,643]],["horecaworld.be",[374,643]],["bettertires.com",374],["electroprecio.com",374],["autohero.com",374],["computerbase.de",[374,1010]],["sistemacomponentes.com.br",375],["bargaintown.ie",376],["tui.nl",377],["doppelmayr.com",378],["case-score.com",[379,380]],["cote.co.uk",381],["finimize.com",381],["unsplash.com",381],["k-einbruch.de",[382,383]],["blxxded.com",382],["rtu.lv",384],["sysdream.com",385],["cinemarkca.com",386],["neander-zahn.de",387],["thespaniardshampstead.co.uk",388],["carsupermarket.com",388],["theadelphileeds.co.uk",388],["tobycarvery.co.uk",388],["harvester.co.uk",388],["stonehouserestaurants.co.uk",388],["millerandcarter.co.uk",388],["browns-restaurants.co.uk",388],["thechampionpub.co.uk",388],["therocketeustonroad.co.uk",388],["thesheepheidedinburgh.co.uk",388],["thejerichooxford.co.uk",388],["hartsboatyard.co.uk",388],["thesalisburyarmsedinburgh.co.uk",388],["thelambchiswick.co.uk",388],["barntgreeninn.co.uk",388],["the-albany.co.uk",388],["sonofsteak.co.uk",388],["thewashingtonhampstead.co.uk",388],["princessofwalespub.co.uk",388],["harrycookcheltenham.co.uk",388],["thegreenmantrumpington.com",388],["queenandcastlekenilworth.co.uk",388],["whitehorseradlett.co.uk",388],["woolpackstokemandeville.co.uk",388],["thewhitehartpirbright.co.uk",388],["castleportobello.co.uk",388],["theswanbroadway.co.uk",388],["thederbyarmsepsom.co.uk",388],["thedewdropinnoxford.co.uk",388],["thejunctionharborne.co.uk",388],["therailwayblackheath.co.uk",388],["whitehartbrasted.co.uk",388],["thewarrenwokingham.co.uk",388],["thedukesheadcrawley.co.uk",388],["thewhitehartse19.co.uk",388],["thesunclapham.co.uk",388],["thevolunteernw1.co.uk",388],["theramsheaddisley.co.uk",388],["thepalaceleeds.co.uk",388],["edinborocastlepub.co.uk",388],["arnosarms.co.uk",388],["dehemspub.co.uk",388],["dukeofdevonshireeastbourne.co.uk",388],["flanagansappleliverpool.co.uk",388],["fontbrighton.co.uk",388],["hawkinsforge.co.uk",388],["hopeandbearreading.co.uk",388],["ploughandharrowaldridge.co.uk",388],["radicalsandvictuallers.co.uk",388],["redlionhandcross.co.uk",388],["stgeorgeanddragon.co.uk",388],["theanchorinnirby.co.uk",388],["thearkley.co.uk",388],["theappletreegerrardscross.co.uk",388],["theashtonbristol.co.uk",388],["thebankplymouth.co.uk",388],["thebathamptonmill.co.uk",388],["theblackbullyarm.co.uk",388],["thebotanistbristol.co.uk",388],["thebootmappleboroughgreen.co.uk",388],["thebullislington.co.uk",388],["thecavershamrosereading.co.uk",388],["thecliffcanfordcliffs.co.uk",388],["thecockinncockfosters.co.uk",388],["theencorestratford.co.uk",388],["theferry.co.uk",388],["viajesatodotren.com",389],["firsttable.co.uk",390],["ticketingcine.fr",391],["agenziavista.it",392],["e-chladiva.cz",392],["bitecode.dev",393],["mjob.si",[394,395,396]],["airportrentacar.gr",397],["mobile-fueling.de",397],["plos.org",398],["autohaus24.de",399],["sixt-neuwagen.de",399],["gadis.es",[400,401]],["dom.ru",401],["ford-kimmerle-reutlingen.de",402],["autohaus-reitermayer.de",402],["autohaus-diefenbach-waldbrunn.de",402],["autohaus-diefenbach.de",402],["autohaus-musberg.de",402],["ford-ah-im-hunsrueck-simmern.de",402],["ford-arndt-goerlitz.de",402],["ford-autogalerie-alfeld.de",402],["ford-bacher-schrobenhausen.de",402],["ford-bathauer-bad-harzburg.de",402],["ford-behrend-waren.de",402],["ford-bergland-frankfurt-oder.de",402],["ford-bergland-wipperfuerth.de",402],["ford-besico-glauchau.de",402],["ford-besico-nuernberg.de",402],["ford-bischoff-neumuenster.de",402],["ford-bodach-borgentreich.de",402],["ford-bunk-saarbruecken.de",402],["ford-bunk-voelklingen.de",402],["ford-busch-kirchberg.de",402],["ford-diermeier-muenchen.de",402],["ford-dinnebier-leipzig.de",402],["ford-duennes-regensburg.de",402],["ford-fischer-bochum.de",402],["ford-fischer-muenster.de",402],["ford-foerster-koblenz.de",402],["ford-fuchs-uffenheim.de",402],["ford-geberzahn-koeln.de",402],["ford-gerstmann-duesseldorf.de",402],["ford-haefner-und-strunk-kassel.de",402],["ford-hartmann-kempten.de",402],["ford-hartmann-rastatt.de",402],["ford-hatzner-karlsruhe.de",402],["ford-heine-hoexter.de",402],["ford-hentschel-hildesheim.de",402],["ford-hessengarage-dreieich.de",402],["ford-hessengarage-frankfurt.de",402],["ford-hga-windeck.de",402],["ford-hommert-coburg.de",402],["ford-horstmann-rastede.de",402],["ford-janssen-sonsbeck.de",402],["ford-jochem-stingbert.de",402],["ford-jungmann-wuppertal.de",402],["ford-kestel-marktzeuln.de",402],["ford-klaiber-bad-friedrichshall.de",402],["ford-koenig-eschwege.de",402],["ford-kohlhoff-mannheim.de",402],["ford-kt-automobile-coesfeld.de",402],["ford-lackermann-wesel.de",402],["ford-ludewig-delligsen.de",402],["ford-maiwald-linsengericht.de",402],["ford-mertens-beckum.de",402],["ford-meyer-bad-oeynhausen.de",402],["ford-mgs-bayreuth.de",402],["ford-mgs-radebeul.de",402],["ford-muecke-berlin.de",402],["ford-norren-weissenthurm.de",402],["ford-nrw-garage-duesseldorf.de",402],["ford-nrw-garage-handweiser.de",402],["ford-nuding-remshalden.de",402],["ford-ohm-rendsburg.de",402],["ford-reinicke-muecheln.de",402],["ford-rennig.de",402],["ford-roerentrop-luenen.de",402],["ford-schankola-dudweiler.de",402],["ford-sg-goeppingen.de",402],["ford-sg-leonberg.de",402],["ford-sg-neu-ulm.de",402],["ford-sg-pforzheim.de",402],["ford-sg-waiblingen.de",402],["ford-storz-st-georgen.de",402],["ford-strunk-koeln.de",402],["ford-tobaben-hamburg.de",402],["ford-toenjes-zetel.de",402],["ford-wagner-mayen.de",402],["ford-wahl-fritzlar.de",402],["ford-wahl-siegen.de",402],["ford-weege-bad-salzuflen.de",402],["ford-westhoff-hamm.de",402],["ford-wieland-hasbergen.de",402],["renault-autocenterprignitz-pritzwalk.de",402],["renault-spenrath-juelich.de",402],["vitalllit.com",403],["fincaparera.com",403],["dbnetbcn.com",403],["viba.barcelona",403],["anafaustinoatelier.com",403],["lamparasherrero.com",403],["calteixidor.cat",403],["argentos.barcelona",403],["anmarlube.com",403],["anynouxines.barcelona",403],["crearunapaginaweb.cat",403],["cualesmiip.com",403],["porndoe.com",[404,405,406]],["thinkingaustralia.com",407],["elrow.com",408],["ownit.se",409],["velo-antwerpen.be",[410,411]],["wwnorton.com",412],["pc-canada.com",413],["mullgs.se",414],["1a-sehen.de",415],["feature.fm",416],["comte.com",417],["baltic-watches.com",418],["np-brijuni.hr",418],["vilgain.com",418],["tradingview.com",419],["wevolver.com",420],["experienciasfree.com",421],["freemans.com",422],["kivikangas.fi",423],["lumingerie.com",423],["melkkobrew.fi",423],["kh.hu",[424,425,426]],["aplgo.com",427],["securityconference.org",428],["aha.or.at",[429,432]],["fantasyfitnessing.com",430],["chocolateemporium.com",431],["account.samsung.com",433],["crushwineco.com",434],["levi.pt",435],["fertagus.pt",436],["snowboardel.es",437],["bagosport.cz",437],["akumo.cz",437],["snowboardel.cz",437],["pompo.cz",437],["oveckarna.cz",437],["rockpoint.cz",437],["rockpoint.sk",437],["parfum-zentrum.de",437],["candy-store.cz",437],["vivobarefoot.cz",437],["sartor-stoffe.de",437],["smiggle.co.uk",438],["ubisoft.com",[439,440,441,442]],["store.ubisoft.com",[439,442,881,882]],["splityourticket.co.uk",443],["invisible.co",444],["eramba.org",444],["openai.com",[445,446]],["kupbilecik.com",[447,448]],["kupbilecik.de",[447,448]],["kupbilecik.pl",[447,448]],["shopilya.com",449],["arera.it",450],["haustier-berater.de",450],["hfm-frankfurt.de",450],["zoommer.ge",451],["studentapan.se",452],["petcity.lt",[453,454,455,456]],["tobroco.com",[457,461]],["tobroco.nl",[457,461]],["tobroco-giant.com",[457,461]],["geosfreiberg.de",[458,459]],["eapvic.org",460],["bassolsenergia.com",460],["bammusic.com",[462,464,465]],["green-24.de",463],["phish-test.de",466],["bokadirekt.se",467],["ford.lt",468],["ford.pt",468],["ford.fr",468],["ford.de",468],["ford.dk",468],["ford.pl",468],["ford.se",468],["ford.nl",468],["ford.no",468],["ford.fi",468],["ford.gr",468],["ford.it",468],["data-media.gr",469],["e-food.gr",[470,471]],["bvmed.de",472],["babyshop.com",[473,474,475]],["griffbereit24.de",476],["checkwx.com",477],["calendardate.com",478],["wefashion.ch",479],["wefashion.fr",479],["wefashion.lu",479],["wefashion.be",479],["wefashion.de",479],["wefashion.nl",479],["brettspiel-angebote.de",[480,481]],["nio.com",482],["kancelarskepotreby.net",[483,484,485]],["segment-anything.com",486],["sketch.metademolab.com",487],["cambridgebs.co.uk",488],["freizeitbad-greifswald.de",489],["giuseppezanotti.com",[490,491,492]],["xcen.se",492],["biggreenegg.co.uk",493],["skihuette-oberbeuren.de",[494,495,496]],["pwsweather.com",497],["xfree.com",498],["theweathernetwork.com",[499,500]],["monese.com",[501,502,503]],["assos.com",501],["helmut-fischer.com",504],["myscience.org",505],["7-eleven.com",506],["airwallex.com",507],["streema.com",508],["gov.lv",509],["tise.com",510],["codecamps.com",511],["avell.com.br",512],["moneyfarm.com",513],["app.moneyfarm.com",513],["simpl.rent",514],["hubspot.com",515],["prodyna.com",[516,517,518,519]],["zutobi.com",[516,517,518,519]],["calm.com",[520,521]],["pubgesports.com",[522,523,524]],["outwrite.com",525],["sbermarket.ru",527],["atani.com",[528,529,530]],["croisieresendirect.com",531],["bgextras.co.uk",532],["sede.coruna.gal",533],["czech-server.cz",534],["hitech-gamer.com",535],["bialettikave.hu",[536,537,538]],["canalplus.com",[539,540,541]],["mader.bz.it",[542,543,544]],["supply.amazon.co.uk",545],["bhaptics.com",546],["cleverbot.com",547],["watchaut.film",548],["tuffaloy.com",549],["fanvue.com",549],["electronoobs.com",550],["xn--lkylen-vxa.se",551],["tiefenthaler-landtechnik.at",552],["tiefenthaler-landtechnik.ch",552],["tiefenthaler-landtechnik.de",552],["varma.fi",553],["vyos.io",554],["digimobil.es",[555,556]],["teenage.engineering",557],["merrell.pl",[558,821]],["converse.pl",558],["shop.wf-education.com",[558,821]],["werkenbijaswatson.nl",559],["converse.com",[560,561]],["buyandapply.nexus.org.uk",562],["img.ly",563],["halonen.fi",[563,595,596,597,598]],["carlson.fi",[563,595,596,597,598]],["cams.ashemaletube.com",[564,565]],["electronicacerler.com",[566,567,568]],["okpoznan.pl",[569,574]],["ielts.idp.com",570],["ielts.co.nz",570],["ielts.com.au",570],["einfach-einreichen.de",[571,572,573]],["endlesstools.io",575],["mbhszepkartya.hu",576],["casellimoveis.com.br",577],["embedplus.com",578],["e-file.pl",579],["sp215.info",580],["empik.com",581],["senda.pl",582],["united-camera.at",583],["befestigungsfuchs.de",583],["cut-tec.co.uk",584],["gaytimes.co.uk",585],["statisticsanddata.org",586],["hello.one",587],["paychex.com",588],["wildcat-koeln.de",589],["libraries.merton.gov.uk",[590,591]],["tommy.hr",[592,593]],["usit.uio.no",594],["demo-digital-twin.r-stahl.com",599],["la31devalladolid.com",[600,601]],["mx.com",602],["foxtrail.fjallraven.com",603],["dotwatcher.cc",604],["bazarchic.com",[605,606,607]],["seedrs.com",608],["mypensiontracker.co.uk",609],["praxisplan.at",[609,630]],["esimplus.me",610],["cineplanet.com.pe",611],["ecologi.com",612],["wamba.com",613],["eurac.edu",614],["akasaair.com",615],["rittal.com",616],["worstbassist.com",[617,618,619,620,621,622]],["haus-ladn.de",[617,620,621,622,979,980]],["hutwiller.de",[617,620,621,622,979,980]],["jumpropeberlin.com",[617,619,620,621,622,979,980,983,984,985]],["die-plank.de",[617,619,620,621,622,979,980,981,982]],["haban-uhren.at",[620,622,979,980]],["leoschilbach.de",[620,979]],["zs-watch.com",623],["crown.com",624],["mesanalyses.fr",625],["teket.jp",626],["fish.shimano.com",[627,628,629]],["simsherpa.com",[631,632,633]],["translit.ru",634],["aruba.com",635],["aireuropa.com",636],["skfbearingselect.com",[637,638]],["scanrenovation.com",639],["ttela.se",640],["dominospizza.pl",641],["devagroup.pl",642],["secondsol.com",643],["angelifybeauty.com",644],["cotopaxi.com",645],["justjoin.it",646],["digibest.pt",647],["two-notes.com",648],["theverge.com",649],["daimant.co",650],["secularism.org.uk",651],["karriere-hamburg.de",652],["musicmap.info",653],["gasspisen.se",654],["medtube.pl",655],["medtube.es",655],["medtube.fr",655],["medtube.net",655],["standard.sk",656],["linmot.com",657],["larian.com",[657,947]],["s-court.me",657],["containerandpackaging.com",658],["top-yp.de",659],["termania.net",660],["account.nowpayments.io",661],["lc.paragon-software.com",662],["fizjobaza.pl",662],["leafly.com",663],["gigasport.at",664],["gigasport.de",664],["gigasport.ch",664],["velleahome.gr",665],["nicequest.com",666],["handelsbanken.no",667],["handelsbanken.com",667],["handelsbanken.co.uk",667],["handelsbanken.se",[667,749]],["handelsbanken.dk",667],["handelsbanken.fi",667],["ilarahealth.com",668],["songtradr.com",[669,931]],["logo.pt",[670,671]],["app.zasta.de",672],["softlist.com.ua",672],["flexwhere.co.uk",[672,673]],["flexwhere.de",[672,673]],["pricewise.nl",672],["getunleash.io",672],["dentmania.de",672],["free.navalny.com",672],["latoken.com",672],["campusbrno.cz",[675,676,677]],["secrid.com",678],["etsy.com",679],["careers.cloud.com",679],["blablacar.rs",680],["blablacar.ru",680],["blablacar.com.tr",680],["blablacar.com.ua",680],["blablacar.com.br",680],["seb.se",681],["sebgroup.com",681],["deps.dev",682],["buf.build",683],["starofservice.com",684],["ytcomment.kmcat.uk",685],["gmx.com",686],["gmx.fr",686],["karofilm.ru",687],["octopusenergy.it",688],["octopusenergy.es",[688,689]],["justanswer.es",690],["justanswer.de",690],["justanswer.com",690],["justanswer.co.uk",690],["citilink.ru",691],["huutokaupat.com",692],["kaggle.com",693],["emr.ch",[694,699]],["gem.cbc.ca",695],["pumatools.hu",696],["ici.tou.tv",697],["crunchyroll.com",698],["mayflex.com",700],["clipchamp.com",700],["gdemoideti.ru",700],["trouwenbijfletcher.nl",700],["fletcher.nl",700],["fletcherzakelijk.nl",700],["intermatic.com",700],["jusbrasil.com.br",701],["mobilevikings.be",702],["ebikelohr.de",703],["eurosender.com",704],["melectronics.ch",705],["guard.io",706],["nokportalen.se",707],["dokiliko.com",708],["valamis.com",[709,710,711]],["sverigesingenjorer.se",712],["shop.almawin.de",[713,714,715,752]],["zeitzurtrauer.de",716],["skaling.de",[717,718,719]],["bringmeister.de",720],["gdx.net",721],["clearblue.com",722],["drewag.de",[723,724,725]],["enso.de",[723,724,725]],["buidlbox.io",723],["helitransair.com",726],["more.com",727],["nwslsoccer.com",727],["watch.sonlifetv.com",728],["climatecentral.org",729],["resolution.de",730],["flagma.by",731],["eatsalad.com",732],["pacstall.dev",733],["web2.0calc.fr",734],["de-appletradein.likewize.com",735],["swissborg.com",736],["qwice.com",737],["canalpluskuchnia.pl",[738,739]],["uizard.io",740],["novayagazeta.eu",742],["kinopoisk.ru",743],["yandex.ru",743],["go.netia.pl",[744,745]],["polsatboxgo.pl",[744,745]],["ing.it",[746,747]],["ing.nl",748],["youcom.com.br",750],["rule34.paheal.net",751],["deep-shine.de",752],["shop.ac-zaun-center.de",752],["kellermann-online.com",752],["kletterkogel.de",752],["pnel.de",752],["korodrogerie.de",[752,754]],["der-puten-shop.de",752],["katapult-shop.de",752],["evocsports.com",752],["esm-computer.de",752],["calmwaters.de",752],["mellerud.de",752],["akustik-projekt.at",752],["vansprint.de",752],["0815.at",752],["0815.eu",752],["ojskate.com",752],["der-schweighofer.de",752],["tz-bedarf.de",752],["zeinpharma.de",752],["weicon.com",752],["dagvandewebshop.be",752],["thiele-tee.de",752],["carbox.de",752],["riapsport.de",752],["trendpet.de",752],["eheizung24.de",752],["seemueller.com",752],["vivande.de",752],["heidegrill.com",752],["gladiator-fightwear.com",752],["h-andreas.com",752],["pp-parts.com",752],["natuerlich-holzschuhe.de",752],["massivart.de",752],["malermeister-shop.de",752],["imping-confiserie.de",752],["lenox-trading.at",752],["cklenk.de",752],["catolet.de",752],["drinkitnow.de",752],["patisserie-m.de",752],["storm-proof.com",752],["balance-fahrradladen.de",752],["magicpos.shop",752],["zeinpharma.com",752],["sps-handel.net",752],["novagenics.com",752],["butterfly-circus.de",752],["holzhof24.de",752],["w6-wertarbeit.de",752],["fleurop.de",752],["leki.com",752],["extremeaudio.de",752],["taste-market.de",752],["delker-optik.de",752],["stuhl24-shop.de",752],["g-nestle.de",752],["alpine-hygiene.ch",752],["fluidmaster.it",752],["cordon.de",752],["belisse-beauty.de",752],["belisse-beauty.co.uk",752],["wpc-shop24.de",752],["liv.si",752],["maybach-luxury.com",752],["leiternprofi24.de",752],["hela-shop.eu",752],["hitado.de",752],["j-koenig.de",752],["gameseal.com",752],["armedangels.com",[752,828,829]],["bvk-beamtenversorgung.de",753],["hofer-kerzen.at",754],["dosenmatrosen.de",754],["karls-shop.de",755],["byggern.no",756],["donauauen.at",757],["woltair.cz",758],["rostics.ru",759],["hife.es",760],["lilcat.com",761],["hot.si",[762,763,764,765]],["crenolibre.fr",766],["monarchmoney.com",767],["e-pole.pl",768],["dopt.com",769],["keb-automation.com",770],["bonduelle.ru",771],["oxfordonlineenglish.com",772],["pccomponentes.fr",773],["pccomponentes.com",773],["pccomponentes.pt",773],["grants.at",774],["africa-uninet.at",774],["rqb.at",774],["youngscience.at",774],["oead.at",774],["innovationsstiftung-bildung.at",774],["etwinning.at",774],["arqa-vet.at",774],["zentrumfuercitizenscience.at",774],["vorstudienlehrgang.at",774],["erasmusplus.at",774],["jeger.pl",775],["bo.de",776],["thegamingwatcher.com",777],["norlysplay.dk",778],["plusujemy.pl",779],["asus.com.cn",[780,782]],["zentalk.asus.com",[780,782]],["mubi.com",781],["photospecialist.co.uk",783],["foto-gregor.de",783],["kamera-express.de",783],["kamera-express.be",783],["kamera-express.nl",783],["kamera-express.fr",783],["kamera-express.lu",783],["dhbbank.com",784],["dhbbank.de",784],["dhbbank.be",784],["dhbbank.nl",784],["login.ingbank.pl",785],["fabrykacukiernika.pl",[786,787]],["peaks.com",788],["3landesmuseen-braunschweig.de",789],["unifachbuch.de",[790,791,792]],["playlumi.com",[793,794,795]],["chatfuel.com",796],["studio3t.com",[797,798,799,800]],["realgap.co.uk",[801,802,803,804]],["hotelborgia.com",[805,806]],["sweet24.de",807],["zwembaddekouter.be",808],["flixclassic.pl",809],["jobtoday.com",810],["deltatre.com",[811,812,826]],["withings.com",[813,814,815]],["blista.de",[816,817]],["hashop.nl",818],["gift.be",[819,820]],["weekend.ee",821],["elevator.de",821],["foryouehealth.de",821],["animaze.us",821],["penn-elcom.com",821],["curantus.de",821],["mtbmarket.de",821],["spanienweinonline.ch",821],["novap.fr",821],["bizkaia.eus",[822,823,824]],["sinparty.com",825],["mantel.com",827],["e-dojus.lv",830],["burnesspaull.com",831],["oncosur.org",832],["photobooth.online",833],["epidemicsound.com",834],["ryanair.com",835],["refurbished.at",[836,837,838]],["refurbished.nl",[836,837,838]],["refurbished.be",[836,837,838]],["refurbishedstore.de",[836,837,838]],["bayernportal.de",[839,840,841]],["ayudatpymes.com",842],["zipjob.com",842],["shoutcast.com",842],["plastischechirurgie-muenchen.info",843],["bonn.sitzung-online.de",844],["depop.com",[845,846,847]],["thenounproject.com",848],["pricehubble.com",849],["ilmotorsport.de",850],["karate.com",851],["psbank.ru",851],["myriad.social",851],["exeedme.com",851],["dndbeyond.com",852],["news.samsung.com",853],["tibber.com",854],["aqua-store.fr",855],["voila.ca",856],["anastore.com",857],["app.arzt-direkt.de",858],["dasfutterhaus.at",859],["e-pity.pl",860],["fillup.pl",861],["dailymotion.com",862],["barcawelt.de",863],["lueneburger-heide.de",864],["polizei.bayern.de",[865,867]],["ourworldofpixels.com",866],["jku.at",868],["matkahuolto.fi",869],["backmarket.de",[870,871,872]],["backmarket.co.uk",[870,871,872]],["backmarket.es",[870,871,872]],["backmarket.be",[870,871,872]],["backmarket.at",[870,871,872]],["backmarket.fr",[870,871,872]],["backmarket.gr",[870,871,872]],["backmarket.fi",[870,871,872]],["backmarket.ie",[870,871,872]],["backmarket.it",[870,871,872]],["backmarket.nl",[870,871,872]],["backmarket.pt",[870,871,872]],["backmarket.se",[870,871,872]],["backmarket.sk",[870,871,872]],["backmarket.com",[870,871,872]],["book-n-drive.de",874],["cotswoldoutdoor.com",875],["cotswoldoutdoor.ie",875],["cam.start.canon",876],["usnews.com",877],["researchaffiliates.com",878],["singkinderlieder.de",879],["stiegeler.com",880],["ba.com",[883,884,885,886,887,888,889]],["britishairways.com",[883,884,885,886,887,888,889]],["cineman.pl",[890,891,892]],["tv-trwam.pl",[890,891,892,893]],["qatarairways.com",[894,895,896,897,898]],["wedding.pl",899],["vivaldi.com",900],["emuia1.gugik.gov.pl",901],["nike.com",902],["adidas.at",903],["adidas.be",903],["adidas.ca",903],["adidas.ch",903],["adidas.cl",903],["adidas.co",903],["adidas.co.in",903],["adidas.co.kr",903],["adidas.co.nz",903],["adidas.co.th",903],["adidas.co.uk",903],["adidas.com",903],["adidas.com.ar",903],["adidas.com.au",903],["adidas.com.br",903],["adidas.com.my",903],["adidas.com.ph",903],["adidas.com.vn",903],["adidas.cz",903],["adidas.de",903],["adidas.dk",903],["adidas.es",903],["adidas.fi",903],["adidas.fr",903],["adidas.gr",903],["adidas.ie",903],["adidas.it",903],["adidas.mx",903],["adidas.nl",903],["adidas.no",903],["adidas.pe",903],["adidas.pl",903],["adidas.pt",903],["adidas.ru",903],["adidas.se",903],["adidas.sk",903],["colourbox.com",904],["ebilet.pl",905],["myeventeo.com",906],["snap.com",907],["louwman.nl",[908,909]],["ratemyprofessors.com",910],["filen.io",911],["leotrippi.com",912],["restaurantclub.pl",912],["context.news",912],["queisser.de",912],["grandprixradio.dk",[913,914,915,916,917]],["grandprixradio.nl",[913,914,915,916,917]],["grandprixradio.be",[913,914,915,916,917]],["businessclass.com",918],["quantamagazine.org",919],["hellotv.nl",920],["jisc.ac.uk",921],["lasestrellas.tv",922],["xn--digitaler-notenstnder-m2b.com",923],["schoonmaakgroothandelemmen.nl",923],["nanuko.de",923],["hair-body-24.de",923],["shopforyou47.de",923],["kreativverliebt.de",923],["anderweltverlag.com",923],["octavio-shop.com",923],["forcetools-kepmar.eu",923],["fantecshop.de",923],["hexen-werkstatt.shop",923],["shop-naturstrom.de",923],["biona-shop.de",923],["camokoenig.de",923],["bikepro.de",923],["kaffeediscount.com",923],["vamos-skateshop.com",923],["holland-shop.com",923],["avonika.com",923],["royal-oak.org",924],["hurton.pl",925],["officesuite.com",926],["fups.com",[927,932]],["kevin.eu",[928,929,930]],["scienceopen.com",933],["moebel-mahler-siebenlehn.de",[934,935]],["calendly.com",936],["batesenvironmental.co.uk",[937,938]],["ubereats.com",939],["101internet.ru",940],["bein.com",941],["beinsports.com",941],["figshare.com",942],["bitso.com",943],["gallmeister.fr",944],["eco-toimistotarvikkeet.fi",945],["proficient.fi",945],["developer.ing.com",946],["webtrack.dhlglobalmail.com",948],["webtrack.dhlecs.com",948],["ehealth.gov.gr",949],["calvinklein.se",[950,951,952]],["calvinklein.fi",[950,951,952]],["calvinklein.sk",[950,951,952]],["calvinklein.si",[950,951,952]],["calvinklein.ch",[950,951,952]],["calvinklein.ru",[950,951,952]],["calvinklein.com",[950,951,952]],["calvinklein.pt",[950,951,952]],["calvinklein.pl",[950,951,952]],["calvinklein.at",[950,951,952]],["calvinklein.nl",[950,951,952]],["calvinklein.hu",[950,951,952]],["calvinklein.lu",[950,951,952]],["calvinklein.lt",[950,951,952]],["calvinklein.lv",[950,951,952]],["calvinklein.it",[950,951,952]],["calvinklein.ie",[950,951,952]],["calvinklein.hr",[950,951,952]],["calvinklein.fr",[950,951,952]],["calvinklein.es",[950,951,952]],["calvinklein.ee",[950,951,952]],["calvinklein.de",[950,951,952]],["calvinklein.dk",[950,951,952]],["calvinklein.cz",[950,951,952]],["calvinklein.bg",[950,951,952]],["calvinklein.be",[950,951,952]],["calvinklein.co.uk",[950,951,952]],["ofdb.de",953],["dtksoft.com",954],["serverstoplist.com",955],["truecaller.com",956],["fruugo.fi",960],["ames-tools.co.uk",961],["ukbrewerytours.com",961],["sk-nic.sk",961],["worldcupchampionships.com",961],["arturofuente.com",[961,963,964]],["protos.com",[961,963,964]],["timhortons.co.th",[961,962,963,965,967,968]],["toyota.co.uk",[961,962,963,966,967,968]],["businessaccountingbasics.co.uk",[961,962,963,965,967,968]],["flickr.org",[961,962,963,965,967,968]],["espacocasa.com",961],["altraeta.it",961],["centrooceano.it",961],["allstoresdigital.com",961],["cultarm3d.de",961],["soulbounce.com",961],["fluidtopics.com",961],["uvetgbt.com",961],["malcorentacar.com",961],["emondo.de",961],["maspero.it",961],["kelkay.com",961],["underground-england.com",961],["vert.eco",961],["turcolegal.com",961],["magnet4blogging.net",961],["moovly.com",961],["automationafrica.co.za",961],["jornaldoalgarve.pt",961],["keravanenergia.fi",961],["kuopas.fi",961],["frag-machiavelli.de",961],["healthera.co.uk",961],["mobeleader.com",961],["powerup-gaming.com",961],["developer-blog.net",961],["medical.edu.mt",961],["deh.mt",961],["bluebell-railway.com",961],["ribescasals.com",961],["javea.com",961],["chinaimportal.com",961],["inds.co.uk",961],["raoul-follereau.org",961],["serramenti-milano.it",961],["cosasdemujer.com",961],["luz-blanca.info",961],["cosasdeviajes.com",961],["safehaven.io",961],["havocpoint.it",961],["motofocus.pl",961],["nomanssky.com",961],["drei-franken-info.de",961],["clausnehring.com",961],["alttab.net",961],["kinderleicht.berlin",961],["kiakkoradio.fi",961],["cosasdelcaribe.es",961],["de-sjove-jokes.dk",961],["serverprofis.de",961],["biographyonline.net",961],["iziconfort.com",961],["sportinnederland.com",961],["natureatblog.com",961],["wtsenergy.com",961],["cosasdesalud.es",961],["internetpasoapaso.com",961],["zurzeit.at",961],["contaspoupanca.pt",961],["steamdeckhq.com",[961,962,963,965,967,968]],["ipouritinc.com",[961,963,965]],["hemglass.se",[961,963,965,967,968]],["sumsub.com",[961,962,963]],["atman.pl",[961,962,963]],["fabriziovanmarciano.com",[961,962,963]],["nationalrail.com",[961,962,963]],["eett.gr",[961,962,963]],["funkypotato.com",[961,962,963]],["equalexchange.co.uk",[961,962,963]],["swnsdigital.com",[961,962,963]],["gogolf.fi",[961,965]],["hanse-haus-greifswald.de",961],["tampereenratikka.fi",[961,963,969,970]],["kymppikatsastus.fi",[963,967,1024,1025]],["santander.rewardgateway.co.uk",[971,972]],["brasiltec.ind.br",973],["xhaccess.com",973],["seexh.com",973],["valuexh.life",973],["xham.live",973],["xhamster.com",973],["xhamster.desi",973],["xhamster1.desi",973],["xhamster19.com",973],["xhamster2.com",973],["xhamster3.com",973],["xhamster42.desi",973],["xhamsterlive.com",973],["xhchannel.com",973],["xhchannel2.com",973],["xhdate.world",973],["xhopen.com",973],["xhspot.com",973],["xhtab4.com",973],["xhwebsite5.com",973],["xhwide5.com",973],["doka.com",[974,975,976]],["abi.de",[977,978]],["studienwahl.de",[977,978]],["journal.hr",[986,987,988,989]],["howstuffworks.com",990],["stickypassword.com",[991,992,993]],["conversion-rate-experts.com",[994,995]],["merkur.si",[996,997,998]],["petitionenligne.com",[999,1000]],["petitionenligne.be",[999,1000]],["petitionenligne.fr",[999,1000]],["petitionenligne.re",[999,1000]],["petitionenligne.ch",[999,1000]],["skrivunder.net",[999,1000]],["petitiononline.uk",[999,1000]],["petitions.nz",[999,1000]],["petizioni.com",[999,1000]],["peticao.online",[999,1000]],["skrivunder.com",[999,1000]],["peticiones.ar",[999,1000]],["petities.com",[999,1000]],["petitionen.com",[999,1000]],["petice.com",[999,1000]],["opprop.net",[999,1000]],["peticiok.com",[999,1000]],["peticiones.net",[999,1000]],["peticion.es",[999,1000]],["peticiones.pe",[999,1000]],["peticiones.mx",[999,1000]],["peticiones.cl",[999,1000]],["peticije.online",[999,1000]],["peticiones.co",[999,1000]],["mediathek.lfv-bayern.de",1001],["aluypvc.es",[1002,1003,1004]],["pracuj.pl",[1005,1006,1007,1008,1009]],["vki.at",1011],["konsument.at",1011],["chollometro.com",1012],["dealabs.com",1012],["hotukdeals.com",1012],["pepper.it",1012],["pepper.pl",1012],["preisjaeger.at",1012],["mydealz.de",1012],["220.lv",[1013,1014]],["pigu.lt",[1013,1014]],["kaup24.ee",[1013,1014]],["hansapost.ee",[1013,1014]],["hobbyhall.fi",[1013,1014]],["direct.travelinsurance.tescobank.com",[1017,1018,1019,1020,1021,1022,1023,1024]],["mediaite.com",1026],["easyfind.ch",[1027,1028]],["e-shop.leonidas.com",[1029,1030]],["lastmile.lt",1031],["veriff.com",1032],["tvpworld.com",1033],["vm.co.mz",1034],["gamearena.pl",1035],["constantin.film",[1036,1037,1038]],["notion.so",1039],["omgevingsloketinzage.omgeving.vlaanderen.be",[1040,1041]],["primor.eu",1042],["tameteo.com",1043],["tempo.pt",1043],["yourweather.co.uk",1043],["meteored.cl",1043],["meteored.mx",1043],["tempo.com",1043],["ilmeteo.net",1043],["meteored.com.ar",1043],["daswetter.com",1043],["myprivacy.dpgmedia.nl",1044],["myprivacy.dpgmediagroup.net",1044],["algarvevacation.net",1045],["3sat.de",1046],["oxxio.nl",[1047,1048]],["butterflyshop.dk",[1049,1050,1051]],["praxis.nl",1052],["brico.be",1052],["kent.gov.uk",[1053,1054]],["pohjanmaanhyvinvointi.fi",1055],["maanmittauslaitos.fi",1056]]);

const entitiesMap = new Map([["airchina",[41,42,43]],["top4mobile",[76,77]]]);

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
    const normalized = value.toLowerCase();
    const match = /^("?)(.+)\1$/.exec(normalized);
    const unquoted = match && match[2] || normalized;
    const validValues = getSafeCookieValuesFn();
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

function getSafeCookieValuesFn() {
    return [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'disallow', 'deny',
        'allowed', 'denied',
        'approved', 'disapproved',
        'checked', 'unchecked',
        'dismiss', 'dismissed',
        'enable', 'disable',
        'enabled', 'disabled',
        'essential', 'nonessential',
        'forbidden', 'forever',
        'hide', 'hidden',
        'necessary', 'required',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
    ];
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
                return { matchAll: true, expect: true };
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
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
    } else if ( /^__(Host|Secure)-/.test(name) ) {
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
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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
