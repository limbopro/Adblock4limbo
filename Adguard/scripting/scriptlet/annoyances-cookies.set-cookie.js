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

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["ga_consentement","0"],["GDPR","9"],["dad_consent","true"],["agreedToCookiesanon","1"],["pum-937","true"],["essential_cookies_enabled","true"],["google_cookies_enabled","false"],["cookiepolicyinfo_new2","true"],["livedoor-blog-gdpr-agreed","1"],["camra_experience_cookie_consent","1"],["valCookie1","1"],["third-party","required","","reload","1"],["COOKIES_ACCEPTED","true"],["cookienotification","1"],["_cookieconsentv2","1"],["cconsent","1"],["cookies-info","true"],["cookies_and_content_security_policy","false"],["cookies_consent_disclaimer","false"],["intramuros-cookie-consent","true"],["intramuros-analytics","false"],["website_cookies_bar","true"],["CF_GDPR_COOKIE_CONSENT_VIEWED","1"],["cookie-confirm","1"],["cookie_preferences_set","true"],["S_COOKIES_ACCEPTED","true"],["isCookieLegalBannerSelected","true"],["cc","1"],["doSomethingOnlyOnce","true"],["tos_consent","allow"],["fn_cookie_banner","1"],["adult_confirm","1"],["atl-gdpr-consent","0010000"],["cookies-allowance","true"],["_acceptsEssential","true"],["informedConsent","1"],["EnableABTest","false"],["EnableFacebook","false"],["EnableGA","false"],["cookie-consent","false"],["consent-state","true"],["was_cookie_consent","no"],["ytprefs_gdpr_consent","1","","reload","1"],["cconsent","1000"],["CONSENT","15"],["nCookieVisible","2"],["CookieConsent","false"],["cookie_consent","necessary"],["suzuki-accept-cookie","true"],["cookieHidden","true"],["terms_agreement_popup_agreed","true","","reload","1"],["consent_panel","1"],["user_allowed_save_cookie","true"],["AcceptCookie","yes"],["cookieConsent","0"],["cookieConsent","rejected"],["smile_allow_cookies","true"],["cookie_alert","true"],["cb-enabled","accepted"],["AgreeCookies","true"],["AreCookiesSet","true"],["chcCookieHint","1","","reload","1"],["accept-selected-cookies","true","","reload","1"],["cookiePreferences","true"],["necessary","true"],["has_accepted_cookies","true"],["cs_viewed_cookie_policy","yes"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["has-seen-cookie-notice","true","","reload","1"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["cookies-configured","1"],["consent","true"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","","reload","1"],["required","1"],["pmStorage","1"],["user_cookie_prefs","1"],["_coo_seen","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["VAA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["VAA_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["VAA_ENSIGHTEN_PRIVACY_Marketing","0"],["VAA_ENSIGHTEN_PRIVACY_Functional","0"],["VAA_ENSIGHTEN_PRIVACY_Analytics","0"],["agreesWithCookies","true"],["gaCookies","false"],["cookiesApproved20231","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookieconsent_status","dismiss"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["WB_CookieNotification","1"],["cookieConfirmation","true"],["gdpr2_required","true"],["gdpr2","true"],["DmCookiesAccepted","true"],["DmCookiesAnalytics","false"],["DmCookiesMarketing","false"],["cookie_accepted","1"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["acceptCookie","1"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["CookieConsentFT","1"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookie-bar","0"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["br-lgpd-cookie-notice-agreement-v1","1"],["privacy_mv","1"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["gcp","1","","reload","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["cookieconsent","deny"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["cookie-consent","denied"],["COOKIECONSENT","false"],["tibber_cc_essential","approved","","reload","1"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["kevin-user-has-accepted-ad-cookies","false"],["kevin-user-has-accepted-analytics-cookies","false"],["kevin-user-has-interacted-with-cookies","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["consents","essential"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_preferences","10"],["cookie_consent_status","allow"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["CA_DT_V2","0","","reload","1"],["CA_DT_V3","0"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["TVPtcs22ver","66"],["cookieBasicConsent","accepted"],["cookieVer","1","","reload","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["billetterie.auditorium-lyon.com",3],["marinelink.com",4],["againstdata.com",5],["inspections.vcha.ca",6],["floodlit.org",7],["spuntinoheathrow.com",[8,9]],["pzw.org.pl",10],["livedoor.biz",11],["camra.org.uk",[12,958]],["parkguellonline.cat",13],["stroga-festival.de",14],["queensfishandchipsgloucester.co.uk",15],["ieq-systems.de",16],["arning-bau.de",16],["startrescue.co.uk",17],["eneba.com",18],["eltiempo.com",19],["galaxykayaks.ro",20],["mywot.com",21],["intramuros.org",[22,23]],["nucom.odoo.dev",24],["cyberfolks.pl",25],["cyberfolks.ro",25],["okko.tv",26],["immersivelabs.online",27],["serasa.com.br",28],["falabella.com.pe",29],["falabella.com",29],["falabella.com.co",29],["przegladpiaseczynski.pl",30],["cloud.aeolservice.es",31],["nuevoloquo.ch",32],["fogaonet.com",33],["zbiornik.com",34],["bitbucket.io",35],["ton.org",36],["sutterhealth.org",37],["antpool.com",38],["thegraph.com",42],["followalice.com",[42,848]],["headout.com",43],["london-tickets.co.uk",43],["kosmas.cz",44],["blog.documentfoundation.org",45],["my.eneba.com",46],["blitzortung.org",47],["esim.redteago.com",48],["tester.userbrain.com",49],["empathy.com",49],["labs.epi2me.io",49],["fydeos.io",50],["autos.suzuki.com.mx",51],["stonly.com",52],["camp-fire.jp",53],["my2n.com",54],["vandalism-sounds.com",55],["oocl.com",56],["brazzersnetwork.com",57],["safaricom.co.ke",58],["smile.io",59],["hiermitherz.de",60],["uk2.net",61],["aeromexico.com",[62,63]],["easywintergarten.de",64],["vinothekwaespi.ch",[65,66,67]],["graphy.com",68],["raspberrypi.dk",69],["ocean.io",70],["waves.is",71],["tesa.com",72],["repair.wd40.com",73],["gls-group.eu",76],["chipsaway.co.uk",77],["heatstore.eu",78],["luvly.care",78],["firmen.wko.at",78],["copaamerica.com",79],["apunyalometre.cat",79],["cooleygo.com",80],["map.blitzortung.org",81],["northumbriasport.com",82],["clearspend.natwest.com",83],["cellcolabsclinical.com",84],["producthunt.com",85],["motorsportreg.com",[86,87]],["imola.motorsportreg.com",[88,89]],["pga.com",90],["portal.payment.eltax.lta.go.jp",91],["greenbuildingadvisor.com",[92,93,94]],["finewoodworking.com",[92,93,94]],["privatekeys.pw",95],["telli.dpd.ee",96],["youthforum.org",96],["votegroup.de",[97,98]],["pharmahall.gr",99],["x-team.com",100],["reservations.helveticmotion.ch",101],["endclothing.com",[102,103]],["kraftwerk.co.at",104],["fhr.biz",105],["srf.nu",106],["jn.fo",[107,108]],["rovia.es",109],["platforma.eb2b.com.pl",109],["schwanger-in-bayern.de",110],["stmas.bayern.de",[110,738]],["bayern-gegen-gewalt.de",110],["verfwebwinkel.be",111],["wayfair.co.uk",112],["wayfair.de",112],["wayfair.ie",112],["physiotherapie-naurod.de",113],["airnewzealand.co.nz",114],["viu.com",115],["dinamalar.com",116],["volkswagen-group.com",117],["solo.io",118],["pomelo.la",119],["ibuypower.com",120],["sberbank.com",[121,524]],["swissmilk.ch",122],["gamemaker.io",123],["pixiv.net",124],["kinemaster.com",125],["sp32bb.pl",126],["jazz.fm",127],["juntadeandalucia.es",128],["melee.gg",[129,130,131]],["chemocare.com",132],["mobiliteit.nl",133],["virginatlantic.com",[134,135,136,137,138]],["xledger.net",139],["legalteam.hu",140],["mediately.co",141],["reviewmeta.com",142],["guide-bordeaux-gironde.com",143],["travelinsured.com",144],["gdpr.twitter.com",145],["mora.hu",146],["confused.com",147],["physikinstrumente.de",148],["karlknauer.de",148],["schoeck.com",148],["resonate.coop",148],["northgatevehiclehire.ie",148],["badhall.at",148],["cic.ch",148],["tryhackme.com",149],["ilsaggiatore.com",150],["forum.digitalfernsehen.de",151],["bitscrunch.com",[152,153,154]],["hannahgraaf.com",155],["shop.elbers-hof.de",[156,157]],["woolsocks.eu",158],["uza.be",159],["5asec.ch",159],["wizards.com",159],["kitepackaging.co.uk",[160,161]],["parkenflughafen.de",162],["radyofenomen.com",163],["elsate.com",164],["hume.ai",165],["lotusantwerp.wacs.online",166],["docs.yagpdb.xyz",167],["gitbook.io",167],["gitbook.com",167],["thehacker.recipes",167],["docs.dyrector.io",167],["docs.webstudio.is",167],["docs.chartbeat.com",167],["docs.civic.com",167],["weatherbug.com",168],["saleor.io",169],["publibike.ch",[170,171]],["onlinelekarna.cz",[172,173,174]],["eleven-sportswear.cz",[173,174,870]],["silvini.com",[173,174,870]],["silvini.de",[173,174,870]],["purefiji.cz",[173,174,870]],["voda-zdarma.cz",[173,174,870]],["lesgarconsfaciles.com",[173,174,870]],["ulevapronohy.cz",[173,174,870]],["vitalvibe.eu",[173,174,870]],["plavte.cz",[173,174,870]],["mo-tools.cz",[173,174,870]],["flamantonlineshop.cz",[173,174,870]],["sandratex.cz",[173,174,870]],["norwayshop.cz",[173,174,870]],["3d-foto.cz",[173,174,870]],["neviditelnepradlo.cz",[173,174,870]],["nutrimedium.com",[173,174,870]],["silvini.cz",[173,174,870]],["karel.cz",[173,174,870]],["silvini.sk",[173,174,870]],["shop.humle.se",175],["59northwheels.se",175],["makeresearchpay.com",176],["tandartsenpraktijk-simons.tandartsennet.nl",177],["huisartsenpraktijkdoorn.nl",177],["bcorporation.net",178],["knime.com",[178,222]],["quebueno.es",178],["edookit.com",179],["trixonline.be",180],["radio-canada.ca",181],["heysummit.com",182],["puromarketing.com",183],["radicalmotorsport.com",184],["biurobox.pl",185],["cycling74.com",186],["triviacreator.com",187],["reforge.com",187],["freshis.com",187],["anker.com",187],["computacenter.com",188],["playbalatro.com",189],["kastner-oehler.de",190],["kastner-oehler.at",190],["kastner-oehler.ch",190],["twenga.it",191],["twenga.fr",191],["twenga.co.uk",191],["twenga.de",191],["twenga.es",191],["twenga.pl",191],["twenga.nl",191],["twenga.se",191],["olx.kz",192],["olx.uz",192],["efl.com",193],["wst.tv",193],["cuvva.com",194],["vitbikes.de",195],["gourmetfoodstore.com",196],["schulfahrt.de",197],["deutsche-finanzagentur.de",198],["thejazzcafelondon.com",199],["keeb.supply",200],["spb.hh.ru",201],["kaluga.hh.ru",201],["school.hh.ru",201],["rating.hh.ru",201],["novgorod.hh.ru",201],["xxxshemaleporn.com",[202,203]],["gayhits.com",[202,203]],["gaypornvideos.xxx",[202,203]],["sextubespot.com",[202,203]],["wewantjusticedao.org",204],["godbolt.org",205],["projectenglish.com.pl",[206,212]],["ledenicheur.fr",206],["pricespy.co.uk",206],["pricespy.co.nz",206],["sae.fsc.ccoo.es",207],["piusx-college.nl",208],["forgeofempires.com",209],["yoomoney.ru",210],["vod.warszawa.pl",211],["m.twitch.tv",213],["environment.data.gov.uk",214],["playtesting.games",215],["portal.by.aok.de",216],["umlandscout.de",217],["atombank.co.uk",[218,219,220]],["showtv.com.tr",221],["seventhgeneration.com",222],["press.princeton.edu",222],["ldz.lv",222],["crtm.es",223],["airastana.com",224],["vkf-renzel.nl",225],["booking.reederei-zingst.de",[226,227,228]],["booking.weisse-flotte.de",[226,227,228]],["booking2.reederei-hiddensee.de",[226,227,228]],["sanswiss.pl",229],["galaxy.com",230],["petdesk.com",231],["ivyexec.com",232],["railtech.com",233],["lottehotel.com",[234,235,236,237,238]],["paydirekt.de",239],["kijiji.ca",240],["posterstore.fr",241],["posterstore.eu",241],["posterstore.be",241],["posterstore.de",241],["posterstore.hu",241],["posterstore.ie",241],["posterstore.it",241],["posterstore.no",241],["posterstore.nl",241],["posterstore.pl",241],["posterstore.com",241],["posterstore.ae",241],["posterstore.ca",241],["posterstore.nz",241],["posterstore.es",241],["posterstore.kr",241],["posterstore.jp",241],["posterstore.dk",241],["posterstore.se",241],["posterstore.ch",241],["posterstore.at",241],["myriadicity.net",242],["dgsf.org",242],["endgame.id",243],["cashback-cards.ch",244],["swisscard.ch",244],["ahorn24.de",245],["blockdyor.com",246],["ticket.io",247],["omega-nuernberg.servicebund.com",248],["lojaboschferramentas.com.br",[249,251,252]],["shareloft.com",250],["fineartsmuseum.recreatex.be",[253,254,255]],["jaapeden.nl",[253,254,255]],["eboo.lu",256],["lasmallagency.com",257],["lhsystems.com",[258,259,260,261]],["twomates.de",262],["intergiro.com",263],["healthygamer.gg",264],["telepizza.es",[265,266,267]],["telepizza.pt",[265,266,267]],["frisco.pl",268],["tyleenslang.nl",269],["schrikdraad.net",269],["kruiwagen.net",269],["pvcvoordeel.nl",269],["pvcbuis.com",269],["drainagebuizen.nl",269],["likewise.com",270],["longines.com",[271,272,273,274]],["vater-it.de",275],["biano.hu",276],["nadia.gov.gr",277],["hana-book.fr",278],["kzvb.de",279],["correosexpress.com",280],["cexpr.es",280],["rte.ie",281],["smart.com",282],["gry.pl",282],["gamesgames.com",282],["games.co.uk",282],["jetztspielen.de",282],["ourgames.ru",282],["permainan.co.id",282],["gioco.it",282],["jeux.fr",282],["juegos.com",282],["ojogos.com.br",282],["oyunskor.com",282],["spela.se",282],["spelletjes.nl",282],["agame.com",282],["spielen.com",282],["flashgames.ru",282],["games.co.id",282],["giochi.it",282],["jeu.fr",282],["spel.nl",282],["tridge.com",283],["asus.com",[284,285]],["drinksking.sk",286],["neuhauschocolates.com",287],["commandsuite.it",288],["designmynight.com",288],["oktea.tw",289],["1028loveu.com.tw",289],["airbubu.com",289],["amai.tw",289],["anns.tw",289],["as.estore.armarpot.com",289],["as-eweb.com",289],["asf.com.tw",289],["asics.com.hk",289],["asics.com.tw",289],["ausupreme.com",289],["basiik.com",289],["bearboss.com",289],["beast-kingdom.com.tw",289],["beldora.com.tw",289],["benefitcosmetics.com.tw",289],["bns.com.tw",289],["byhue-official.com",289],["candybox.com.tw",289],["columbiasportswear.com.tw",289],["concerto.com.tw",289],["countess.tw",289],["cuapp.com",289],["daima.asia",289],["dettol-store.com.tw",289],["dickies.com.tw",289],["doga.com.tw",289],["dot-st.tw",289],["dr-douxi.tw",289],["durex-store.com.tw",289],["echome.com.hk",289],["eding.com.tw",289],["e-hilltop.com",289],["faduobra.com",289],["fairlady.com.tw",289],["fbshop.com.tw",289],["freshdays-shop.com",289],["hh-taiwan.com.tw",289],["iqueen.com.tw",289],["jjfish.com.tw",289],["jpmed.com.tw",289],["jsstore.com.tw",289],["kipling.com.tw",289],["kuaiche.com.tw",289],["lanew.com.tw",289],["leejeans.com.tw",289],["levis.com.tw",289],["ludeya.com",289],["lulus.tw",289],["makeupforever.com.tw",289],["mart.family.com.tw",289],["meinlcoffee.com.tw",289],["metroasis.com.tw",289],["minervababy.com.tw",289],["miss21.estore.asgroup.com.tw",289],["miu-star.com.tw",289],["mkup.tw",289],["mlb-korea.com.hk",289],["mollifix.com",289],["naruko.com.tw",289],["newweb.renoirpuzzle.com.tw",289],["nikokids.com.tw",289],["nisoro.com",289],["odout.com",289],["ouiorganic.com",289],["pandababy.com.tw",289],["peachy.com.tw",289],["poyabuy.com.tw",289],["premierfood.com.hk",289],["rachelwine.com.tw",289],["risal.com.tw",289],["sasa.com.hk",289],["schiff-store.com.tw",289],["sexylook.com.tw",289],["sfn.com.tw",289],["shingfangpastry.com",289],["shop.3m.com.tw",289],["shop.5soap.com",289],["shop.atunas.com.tw",289],["shop.bosscat.com.tw",289],["shop.conas.com.tw",289],["shop.cosmed.com.tw",289],["shop.coville.com.tw",289],["shop.euyansang.com.hk",289],["shop.kbc.com.tw",289],["shop.kemei.com.tw",289],["shop.kky.com.tw",289],["shop.norns.com.tw",289],["shop.okogreen.com.tw",289],["shop.skechers-twn.com",289],["shop.s3.com.tw",289],["shop.teascovery.com",289],["shop.wacoal.com.tw",289],["shop.wumajia.com.tw",289],["shopping.dradvice.asia",289],["shop0315.com.tw",289],["sky-blue.com.tw",289],["snowpeak.com.tw",289],["songbeam.com.tw",289],["so-nice.com.tw",289],["store-philips.tw",289],["tcsb.com.tw",289],["thenorthface.com.tw",289],["timberland.com.tw",289],["tokuyo.com.tw",289],["triumphshop.com.tw",289],["trygogo.com",289],["tupiens-foodie.com",289],["tw.istayreal.com",289],["tw.puma.com",289],["vans.com.tw",289],["vemar.com.tw",289],["vigill.com.tw",289],["vilson.com",289],["vincentsworld.com.tw",289],["wealthshop888.com",289],["yamazaki.com.tw",289],["bafin.de",290],["materna.de",290],["bamf.de",290],["tenvinilo-argentina.com",[291,292]],["eikaforsikring.no",[293,294]],["eurowings.com",[295,296,297]],["newpharma.be",[298,299,300]],["newpharma.fr",[298,299,300]],["newpharma.de",[298,299,300]],["newpharma.at",[298,299,300]],["newpharma.nl",[298,299,300]],["kapoorwatch.com",301],["instantoffices.com",302],["paf.se",302],["citibank.pl",302],["citibankonline.pl",302],["azertyfactor.be",303],["zelezodum.cz",304],["thw.de",305],["bafa.de",305],["bka.de",305],["bmbf.de",305],["weather.com",306],["bolist.se",[307,308]],["project529.com",308],["evivanlanschot.nl",309],["alohabrowser.com",310],["prenatal.nl",311],["onnibus.com",[311,954,955,956]],["kyoceradocumentsolutions.us",[311,1005,1006]],["kyoceradocumentsolutions.ch",[311,1005,1006]],["kyoceradocumentsolutions.co.uk",[311,1005,1006]],["kyoceradocumentsolutions.de",[311,1005,1006]],["kyoceradocumentsolutions.es",[311,1005,1006]],["kyoceradocumentsolutions.eu",[311,1005,1006]],["kyoceradocumentsolutions.fr",[311,1005,1006]],["kyoceradocumentsolutions.it",[311,1005,1006]],["kyoceradocumentsolutions.ru",[311,1005,1006]],["kyoceradocumentsolutions.mx",[311,1005,1006]],["kyoceradocumentsolutions.cl",[311,1005,1006]],["kyoceradocumentsolutions.com.br",[311,1005,1006]],["wagner-tuning.com",[312,313,314,315]],["waitrosecellar.com",[316,317,318,319]],["waitrose.com",[316,671]],["kvk.nl",[320,321,322]],["macfarlanes.com",323],["pole-emploi.fr",324],["gardenmediaguild.co.uk",325],["samplerite.com",326],["samplerite.cn",326],["sororedit.com",327],["blukit.com.br",328],["biegnaszczyt.pl",329],["staff-gallery.com",330],["itv.com",331],["dvag.de",332],["premierinn.com",[333,334,335,336]],["whitbreadinns.co.uk",[333,334,335,336]],["barandblock.co.uk",[333,334,335,336]],["tabletable.co.uk",[333,334,335,336]],["brewersfayre.co.uk",[333,334,335,336]],["beefeater.co.uk",[333,334,335,336]],["allstarssportsbars.co.uk",[337,338]],["babiesrus.ca",339],["toysrus.ca",339],["roomsandspaces.ca",339],["athletic-club.eus",[340,341,342]],["wattoo.dk",343],["wattoo.no",343],["texthelp.com",[344,345]],["courierexchange.co.uk",[346,347,348]],["haulageexchange.co.uk",[346,347,348]],["ecaytrade.com",349],["unka.bilecik.edu.tr",349],["powerball.com",350],["tlaciarik.sk",350],["tiskarik.cz",350],["sseriga.edu",[351,352]],["rt.com",353],["swrng.de",354],["crfop.gdos.gov.pl",355],["nurgutes.de",356],["kpcen-torun.edu.pl",357],["opintopolku.fi",358],["app.erevie.pl",359],["debenhams.com",360],["archiwumalle.pl",361],["konicaminolta.ca",362],["konicaminolta.us",362],["deutschebank-dbdirect.com",[363,364,365]],["dbonline.deutsche-bank.es",[363,364,365]],["deutsche-bank.es",[363,364,365]],["hipotecaonline.db.com",366],["kangasalansanomat.fi",367],["eif.org",368],["tunnelmb.net",368],["sugi-net.jp",369],["understandingsociety.ac.uk",370],["leibniz.com",371],["horecaworld.biz",[371,641]],["horecaworld.be",[371,641]],["bettertires.com",371],["electroprecio.com",371],["autohero.com",371],["computerbase.de",[371,1000]],["sistemacomponentes.com.br",372],["bargaintown.ie",373],["tui.nl",374],["doppelmayr.com",375],["case-score.com",[376,377]],["cote.co.uk",378],["finimize.com",378],["unsplash.com",378],["k-einbruch.de",[379,380]],["blxxded.com",379],["rtu.lv",381],["sysdream.com",382],["cinemarkca.com",383],["neander-zahn.de",384],["thespaniardshampstead.co.uk",385],["carsupermarket.com",385],["theadelphileeds.co.uk",385],["tobycarvery.co.uk",385],["harvester.co.uk",385],["stonehouserestaurants.co.uk",385],["millerandcarter.co.uk",385],["browns-restaurants.co.uk",385],["thechampionpub.co.uk",385],["therocketeustonroad.co.uk",385],["thesheepheidedinburgh.co.uk",385],["thejerichooxford.co.uk",385],["hartsboatyard.co.uk",385],["thesalisburyarmsedinburgh.co.uk",385],["thelambchiswick.co.uk",385],["barntgreeninn.co.uk",385],["the-albany.co.uk",385],["sonofsteak.co.uk",385],["thewashingtonhampstead.co.uk",385],["princessofwalespub.co.uk",385],["harrycookcheltenham.co.uk",385],["thegreenmantrumpington.com",385],["queenandcastlekenilworth.co.uk",385],["whitehorseradlett.co.uk",385],["woolpackstokemandeville.co.uk",385],["thewhitehartpirbright.co.uk",385],["castleportobello.co.uk",385],["theswanbroadway.co.uk",385],["thederbyarmsepsom.co.uk",385],["thedewdropinnoxford.co.uk",385],["thejunctionharborne.co.uk",385],["therailwayblackheath.co.uk",385],["whitehartbrasted.co.uk",385],["thewarrenwokingham.co.uk",385],["thedukesheadcrawley.co.uk",385],["thewhitehartse19.co.uk",385],["thesunclapham.co.uk",385],["thevolunteernw1.co.uk",385],["theramsheaddisley.co.uk",385],["thepalaceleeds.co.uk",385],["edinborocastlepub.co.uk",385],["arnosarms.co.uk",385],["dehemspub.co.uk",385],["dukeofdevonshireeastbourne.co.uk",385],["flanagansappleliverpool.co.uk",385],["fontbrighton.co.uk",385],["hawkinsforge.co.uk",385],["hopeandbearreading.co.uk",385],["ploughandharrowaldridge.co.uk",385],["radicalsandvictuallers.co.uk",385],["redlionhandcross.co.uk",385],["stgeorgeanddragon.co.uk",385],["theanchorinnirby.co.uk",385],["thearkley.co.uk",385],["theappletreegerrardscross.co.uk",385],["theashtonbristol.co.uk",385],["thebankplymouth.co.uk",385],["thebathamptonmill.co.uk",385],["theblackbullyarm.co.uk",385],["thebotanistbristol.co.uk",385],["thebootmappleboroughgreen.co.uk",385],["thebullislington.co.uk",385],["thecavershamrosereading.co.uk",385],["thecliffcanfordcliffs.co.uk",385],["thecockinncockfosters.co.uk",385],["theencorestratford.co.uk",385],["theferry.co.uk",385],["viajesatodotren.com",386],["firsttable.co.uk",387],["ticketingcine.fr",388],["agenziavista.it",389],["e-chladiva.cz",389],["bitecode.dev",390],["mjob.si",[391,392,393]],["airportrentacar.gr",394],["mobile-fueling.de",394],["plos.org",395],["autohaus24.de",396],["sixt-neuwagen.de",396],["gadis.es",[397,398]],["dom.ru",398],["ford-kimmerle-reutlingen.de",399],["autohaus-reitermayer.de",399],["autohaus-diefenbach-waldbrunn.de",399],["autohaus-diefenbach.de",399],["autohaus-musberg.de",399],["ford-ah-im-hunsrueck-simmern.de",399],["ford-arndt-goerlitz.de",399],["ford-autogalerie-alfeld.de",399],["ford-bacher-schrobenhausen.de",399],["ford-bathauer-bad-harzburg.de",399],["ford-behrend-waren.de",399],["ford-bergland-frankfurt-oder.de",399],["ford-bergland-wipperfuerth.de",399],["ford-besico-glauchau.de",399],["ford-besico-nuernberg.de",399],["ford-bischoff-neumuenster.de",399],["ford-bodach-borgentreich.de",399],["ford-bunk-saarbruecken.de",399],["ford-bunk-voelklingen.de",399],["ford-busch-kirchberg.de",399],["ford-diermeier-muenchen.de",399],["ford-dinnebier-leipzig.de",399],["ford-duennes-regensburg.de",399],["ford-fischer-bochum.de",399],["ford-fischer-muenster.de",399],["ford-foerster-koblenz.de",399],["ford-fuchs-uffenheim.de",399],["ford-geberzahn-koeln.de",399],["ford-gerstmann-duesseldorf.de",399],["ford-haefner-und-strunk-kassel.de",399],["ford-hartmann-kempten.de",399],["ford-hartmann-rastatt.de",399],["ford-hatzner-karlsruhe.de",399],["ford-heine-hoexter.de",399],["ford-hentschel-hildesheim.de",399],["ford-hessengarage-dreieich.de",399],["ford-hessengarage-frankfurt.de",399],["ford-hga-windeck.de",399],["ford-hommert-coburg.de",399],["ford-horstmann-rastede.de",399],["ford-janssen-sonsbeck.de",399],["ford-jochem-stingbert.de",399],["ford-jungmann-wuppertal.de",399],["ford-kestel-marktzeuln.de",399],["ford-klaiber-bad-friedrichshall.de",399],["ford-koenig-eschwege.de",399],["ford-kohlhoff-mannheim.de",399],["ford-kt-automobile-coesfeld.de",399],["ford-lackermann-wesel.de",399],["ford-ludewig-delligsen.de",399],["ford-maiwald-linsengericht.de",399],["ford-mertens-beckum.de",399],["ford-meyer-bad-oeynhausen.de",399],["ford-mgs-bayreuth.de",399],["ford-mgs-radebeul.de",399],["ford-muecke-berlin.de",399],["ford-norren-weissenthurm.de",399],["ford-nrw-garage-duesseldorf.de",399],["ford-nrw-garage-handweiser.de",399],["ford-nuding-remshalden.de",399],["ford-ohm-rendsburg.de",399],["ford-reinicke-muecheln.de",399],["ford-rennig.de",399],["ford-roerentrop-luenen.de",399],["ford-schankola-dudweiler.de",399],["ford-sg-goeppingen.de",399],["ford-sg-leonberg.de",399],["ford-sg-neu-ulm.de",399],["ford-sg-pforzheim.de",399],["ford-sg-waiblingen.de",399],["ford-storz-st-georgen.de",399],["ford-strunk-koeln.de",399],["ford-tobaben-hamburg.de",399],["ford-toenjes-zetel.de",399],["ford-wagner-mayen.de",399],["ford-wahl-fritzlar.de",399],["ford-wahl-siegen.de",399],["ford-weege-bad-salzuflen.de",399],["ford-westhoff-hamm.de",399],["ford-wieland-hasbergen.de",399],["renault-autocenterprignitz-pritzwalk.de",399],["renault-spenrath-juelich.de",399],["vitalllit.com",400],["fincaparera.com",400],["dbnetbcn.com",400],["viba.barcelona",400],["anafaustinoatelier.com",400],["lamparasherrero.com",400],["calteixidor.cat",400],["argentos.barcelona",400],["anmarlube.com",400],["anynouxines.barcelona",400],["crearunapaginaweb.cat",400],["cualesmiip.com",400],["porndoe.com",[401,402,403]],["thinkingaustralia.com",404],["elrow.com",405],["ownit.se",406],["velo-antwerpen.be",[407,408]],["wwnorton.com",409],["pc-canada.com",410],["mullgs.se",411],["1a-sehen.de",412],["feature.fm",413],["comte.com",414],["baltic-watches.com",415],["np-brijuni.hr",415],["vilgain.com",415],["tradingview.com",416],["wevolver.com",417],["experienciasfree.com",418],["freemans.com",419],["kivikangas.fi",420],["lumingerie.com",420],["melkkobrew.fi",420],["kh.hu",[421,422,423]],["aplgo.com",424],["securityconference.org",425],["aha.or.at",[426,429]],["fantasyfitnessing.com",427],["chocolateemporium.com",428],["account.samsung.com",430],["crushwineco.com",431],["levi.pt",432],["fertagus.pt",433],["snowboardel.es",434],["bagosport.cz",434],["akumo.cz",434],["snowboardel.cz",434],["pompo.cz",434],["oveckarna.cz",434],["rockpoint.cz",434],["rockpoint.sk",434],["parfum-zentrum.de",434],["candy-store.cz",434],["vivobarefoot.cz",434],["sartor-stoffe.de",434],["smiggle.co.uk",435],["ubisoft.com",[436,437,438,439]],["store.ubisoft.com",[436,439,878,879]],["thulb.uni-jena.de",440],["splityourticket.co.uk",441],["invisible.co",442],["eramba.org",442],["openai.com",[443,444]],["kupbilecik.com",[445,446]],["kupbilecik.de",[445,446]],["kupbilecik.pl",[445,446]],["shopilya.com",447],["arera.it",448],["haustier-berater.de",448],["hfm-frankfurt.de",448],["zoommer.ge",449],["studentapan.se",450],["petcity.lt",[451,452,453,454]],["tobroco.com",[455,459]],["tobroco.nl",[455,459]],["tobroco-giant.com",[455,459]],["geosfreiberg.de",[456,457]],["eapvic.org",458],["bassolsenergia.com",458],["bammusic.com",[460,462,463]],["green-24.de",461],["phish-test.de",464],["bokadirekt.se",465],["ford.lt",466],["ford.pt",466],["ford.fr",466],["ford.de",466],["ford.dk",466],["ford.pl",466],["ford.se",466],["ford.nl",466],["ford.no",466],["ford.fi",466],["ford.gr",466],["ford.it",466],["data-media.gr",467],["e-food.gr",[468,469]],["bvmed.de",470],["babyshop.com",[471,472,473]],["griffbereit24.de",474],["checkwx.com",475],["calendardate.com",476],["wefashion.ch",477],["wefashion.fr",477],["wefashion.lu",477],["wefashion.be",477],["wefashion.de",477],["wefashion.nl",477],["brettspiel-angebote.de",[478,479]],["nio.com",480],["kancelarskepotreby.net",[481,482,483]],["segment-anything.com",484],["sketch.metademolab.com",485],["cambridgebs.co.uk",486],["freizeitbad-greifswald.de",487],["giuseppezanotti.com",[488,489,490]],["xcen.se",490],["biggreenegg.co.uk",491],["skihuette-oberbeuren.de",[492,493,494]],["pwsweather.com",495],["xfree.com",496],["theweathernetwork.com",[497,498]],["monese.com",[499,500,501]],["assos.com",499],["helmut-fischer.com",502],["myscience.org",503],["7-eleven.com",504],["airwallex.com",505],["streema.com",506],["gov.lv",507],["tise.com",508],["codecamps.com",509],["avell.com.br",510],["moneyfarm.com",511],["app.moneyfarm.com",511],["simpl.rent",512],["hubspot.com",513],["prodyna.com",[514,515,516,517]],["zutobi.com",[514,515,516,517]],["calm.com",[518,519]],["pubgesports.com",[520,521,522]],["outwrite.com",523],["sbermarket.ru",525],["atani.com",[526,527,528]],["croisieresendirect.com",529],["bgextras.co.uk",530],["sede.coruna.gal",531],["czech-server.cz",532],["hitech-gamer.com",533],["bialettikave.hu",[534,535,536]],["canalplus.com",[537,538,539]],["mader.bz.it",[540,541,542]],["supply.amazon.co.uk",543],["bhaptics.com",544],["cleverbot.com",545],["watchaut.film",546],["tuffaloy.com",547],["fanvue.com",547],["electronoobs.com",548],["xn--lkylen-vxa.se",549],["tiefenthaler-landtechnik.at",550],["tiefenthaler-landtechnik.ch",550],["tiefenthaler-landtechnik.de",550],["varma.fi",551],["vyos.io",552],["digimobil.es",[553,554]],["teenage.engineering",555],["merrell.pl",[556,818]],["converse.pl",556],["shop.wf-education.com",[556,818]],["werkenbijaswatson.nl",557],["converse.com",[558,559]],["buyandapply.nexus.org.uk",560],["img.ly",561],["halonen.fi",[561,593,594,595,596]],["carlson.fi",[561,593,594,595,596]],["cams.ashemaletube.com",[562,563]],["electronicacerler.com",[564,565,566]],["okpoznan.pl",[567,572]],["ielts.idp.com",568],["ielts.co.nz",568],["ielts.com.au",568],["einfach-einreichen.de",[569,570,571]],["endlesstools.io",573],["mbhszepkartya.hu",574],["casellimoveis.com.br",575],["embedplus.com",576],["e-file.pl",577],["sp215.info",578],["empik.com",579],["senda.pl",580],["united-camera.at",581],["befestigungsfuchs.de",581],["cut-tec.co.uk",582],["gaytimes.co.uk",583],["statisticsanddata.org",584],["hello.one",585],["paychex.com",586],["wildcat-koeln.de",587],["libraries.merton.gov.uk",[588,589]],["tommy.hr",[590,591]],["usit.uio.no",592],["demo-digital-twin.r-stahl.com",597],["la31devalladolid.com",[598,599]],["mx.com",600],["foxtrail.fjallraven.com",601],["dotwatcher.cc",602],["bazarchic.com",[603,604,605]],["seedrs.com",606],["mypensiontracker.co.uk",607],["praxisplan.at",[607,628]],["esimplus.me",608],["cineplanet.com.pe",609],["ecologi.com",610],["wamba.com",611],["eurac.edu",612],["akasaair.com",613],["rittal.com",614],["worstbassist.com",[615,616,617,618,619,620]],["zs-watch.com",621],["crown.com",622],["mesanalyses.fr",623],["teket.jp",624],["fish.shimano.com",[625,626,627]],["simsherpa.com",[629,630,631]],["translit.ru",632],["aruba.com",633],["aireuropa.com",634],["skfbearingselect.com",[635,636]],["scanrenovation.com",637],["ttela.se",638],["dominospizza.pl",639],["devagroup.pl",640],["secondsol.com",641],["angelifybeauty.com",642],["cotopaxi.com",643],["justjoin.it",644],["digibest.pt",645],["two-notes.com",646],["theverge.com",647],["daimant.co",648],["secularism.org.uk",649],["karriere-hamburg.de",650],["musicmap.info",651],["gasspisen.se",652],["medtube.pl",653],["medtube.es",653],["medtube.fr",653],["medtube.net",653],["standard.sk",654],["linmot.com",655],["larian.com",[655,944]],["s-court.me",655],["containerandpackaging.com",656],["top-yp.de",657],["termania.net",658],["account.nowpayments.io",659],["fizjobaza.pl",660],["gigasport.at",661],["gigasport.de",661],["gigasport.ch",661],["velleahome.gr",662],["nicequest.com",663],["handelsbanken.no",664],["handelsbanken.com",664],["handelsbanken.co.uk",664],["handelsbanken.se",[664,746]],["handelsbanken.dk",664],["handelsbanken.fi",664],["ilarahealth.com",665],["songtradr.com",[666,928]],["logo.pt",[667,668]],["app.zasta.de",669],["softlist.com.ua",669],["flexwhere.co.uk",[669,670]],["flexwhere.de",[669,670]],["pricewise.nl",669],["getunleash.io",669],["dentmania.de",669],["free.navalny.com",669],["latoken.com",669],["campusbrno.cz",[672,673,674]],["secrid.com",675],["etsy.com",676],["careers.cloud.com",676],["blablacar.rs",677],["blablacar.ru",677],["blablacar.com.tr",677],["blablacar.com.ua",677],["blablacar.com.br",677],["seb.se",678],["sebgroup.com",678],["deps.dev",679],["buf.build",680],["starofservice.com",681],["ytcomment.kmcat.uk",682],["gmx.com",683],["gmx.fr",683],["karofilm.ru",684],["octopusenergy.it",685],["octopusenergy.es",[685,686]],["justanswer.es",687],["justanswer.de",687],["justanswer.com",687],["justanswer.co.uk",687],["citilink.ru",688],["huutokaupat.com",689],["kaggle.com",690],["emr.ch",[691,696]],["gem.cbc.ca",692],["pumatools.hu",693],["ici.tou.tv",694],["crunchyroll.com",695],["mayflex.com",697],["clipchamp.com",697],["gdemoideti.ru",697],["trouwenbijfletcher.nl",697],["fletcher.nl",697],["fletcherzakelijk.nl",697],["intermatic.com",697],["jusbrasil.com.br",698],["mobilevikings.be",699],["ebikelohr.de",700],["eurosender.com",701],["melectronics.ch",702],["guard.io",703],["nokportalen.se",704],["dokiliko.com",705],["valamis.com",[706,707,708]],["sverigesingenjorer.se",709],["shop.almawin.de",[710,711,712,749]],["zeitzurtrauer.de",713],["skaling.de",[714,715,716]],["bringmeister.de",717],["gdx.net",718],["clearblue.com",719],["drewag.de",[720,721,722]],["enso.de",[720,721,722]],["buidlbox.io",720],["helitransair.com",723],["more.com",724],["nwslsoccer.com",724],["watch.sonlifetv.com",725],["climatecentral.org",726],["resolution.de",727],["flagma.by",728],["eatsalad.com",729],["pacstall.dev",730],["web2.0calc.fr",731],["de-appletradein.likewize.com",732],["swissborg.com",733],["qwice.com",734],["canalpluskuchnia.pl",[735,736]],["uizard.io",737],["novayagazeta.eu",739],["kinopoisk.ru",740],["yandex.ru",740],["go.netia.pl",[741,742]],["polsatboxgo.pl",[741,742]],["ing.it",[743,744]],["ing.nl",745],["youcom.com.br",747],["rule34.paheal.net",748],["deep-shine.de",749],["shop.ac-zaun-center.de",749],["kellermann-online.com",749],["kletterkogel.de",749],["pnel.de",749],["korodrogerie.de",[749,751]],["der-puten-shop.de",749],["katapult-shop.de",749],["evocsports.com",749],["esm-computer.de",749],["calmwaters.de",749],["mellerud.de",749],["akustik-projekt.at",749],["vansprint.de",749],["0815.at",749],["0815.eu",749],["ojskate.com",749],["der-schweighofer.de",749],["tz-bedarf.de",749],["zeinpharma.de",749],["weicon.com",749],["dagvandewebshop.be",749],["thiele-tee.de",749],["carbox.de",749],["riapsport.de",749],["trendpet.de",749],["eheizung24.de",749],["seemueller.com",749],["vivande.de",749],["heidegrill.com",749],["gladiator-fightwear.com",749],["h-andreas.com",749],["pp-parts.com",749],["natuerlich-holzschuhe.de",749],["massivart.de",749],["malermeister-shop.de",749],["imping-confiserie.de",749],["lenox-trading.at",749],["cklenk.de",749],["catolet.de",749],["drinkitnow.de",749],["patisserie-m.de",749],["storm-proof.com",749],["balance-fahrradladen.de",749],["magicpos.shop",749],["zeinpharma.com",749],["sps-handel.net",749],["novagenics.com",749],["butterfly-circus.de",749],["holzhof24.de",749],["w6-wertarbeit.de",749],["fleurop.de",749],["leki.com",749],["extremeaudio.de",749],["taste-market.de",749],["delker-optik.de",749],["stuhl24-shop.de",749],["g-nestle.de",749],["alpine-hygiene.ch",749],["fluidmaster.it",749],["cordon.de",749],["belisse-beauty.de",749],["belisse-beauty.co.uk",749],["wpc-shop24.de",749],["liv.si",749],["maybach-luxury.com",749],["leiternprofi24.de",749],["hela-shop.eu",749],["hitado.de",749],["j-koenig.de",749],["gameseal.com",749],["armedangels.com",[749,825,826]],["bvk-beamtenversorgung.de",750],["hofer-kerzen.at",751],["dosenmatrosen.de",751],["karls-shop.de",752],["byggern.no",753],["donauauen.at",754],["woltair.cz",755],["rostics.ru",756],["hife.es",757],["lilcat.com",758],["hot.si",[759,760,761,762]],["crenolibre.fr",763],["monarchmoney.com",764],["e-pole.pl",765],["dopt.com",766],["keb-automation.com",767],["bonduelle.ru",768],["oxfordonlineenglish.com",769],["pccomponentes.fr",770],["pccomponentes.com",770],["pccomponentes.pt",770],["grants.at",771],["africa-uninet.at",771],["rqb.at",771],["youngscience.at",771],["oead.at",771],["innovationsstiftung-bildung.at",771],["etwinning.at",771],["arqa-vet.at",771],["zentrumfuercitizenscience.at",771],["vorstudienlehrgang.at",771],["erasmusplus.at",771],["jeger.pl",772],["bo.de",773],["thegamingwatcher.com",774],["norlysplay.dk",775],["plusujemy.pl",776],["asus.com.cn",[777,779]],["zentalk.asus.com",[777,779]],["mubi.com",778],["photospecialist.co.uk",780],["foto-gregor.de",780],["kamera-express.de",780],["kamera-express.be",780],["kamera-express.nl",780],["kamera-express.fr",780],["kamera-express.lu",780],["dhbbank.com",781],["dhbbank.de",781],["dhbbank.be",781],["dhbbank.nl",781],["login.ingbank.pl",782],["fabrykacukiernika.pl",[783,784]],["peaks.com",785],["3landesmuseen-braunschweig.de",786],["unifachbuch.de",[787,788,789]],["playlumi.com",[790,791,792]],["chatfuel.com",793],["studio3t.com",[794,795,796,797]],["realgap.co.uk",[798,799,800,801]],["hotelborgia.com",[802,803]],["sweet24.de",804],["zwembaddekouter.be",805],["flixclassic.pl",806],["jobtoday.com",807],["deltatre.com",[808,809,823]],["withings.com",[810,811,812]],["blista.de",[813,814]],["hashop.nl",815],["gift.be",[816,817]],["elevator.de",818],["foryouehealth.de",818],["animaze.us",818],["penn-elcom.com",818],["curantus.de",818],["mtbmarket.de",818],["spanienweinonline.ch",818],["novap.fr",818],["bizkaia.eus",[819,820,821]],["sinparty.com",822],["mantel.com",824],["e-dojus.lv",827],["burnesspaull.com",828],["oncosur.org",829],["photobooth.online",830],["epidemicsound.com",831],["ryanair.com",832],["refurbished.at",[833,834,835]],["refurbished.nl",[833,834,835]],["refurbished.be",[833,834,835]],["refurbishedstore.de",[833,834,835]],["bayernportal.de",[836,837,838]],["ayudatpymes.com",839],["zipjob.com",839],["shoutcast.com",839],["plastischechirurgie-muenchen.info",840],["bonn.sitzung-online.de",841],["depop.com",[842,843,844]],["thenounproject.com",845],["pricehubble.com",846],["ilmotorsport.de",847],["karate.com",848],["psbank.ru",848],["myriad.social",848],["exeedme.com",848],["dndbeyond.com",849],["news.samsung.com",850],["tibber.com",851],["aqua-store.fr",852],["voila.ca",853],["anastore.com",854],["app.arzt-direkt.de",855],["dasfutterhaus.at",856],["e-pity.pl",857],["fillup.pl",858],["dailymotion.com",859],["barcawelt.de",860],["lueneburger-heide.de",861],["polizei.bayern.de",[862,864]],["ourworldofpixels.com",863],["jku.at",865],["matkahuolto.fi",866],["backmarket.de",[867,868,869]],["backmarket.co.uk",[867,868,869]],["backmarket.es",[867,868,869]],["backmarket.be",[867,868,869]],["backmarket.at",[867,868,869]],["backmarket.fr",[867,868,869]],["backmarket.gr",[867,868,869]],["backmarket.fi",[867,868,869]],["backmarket.ie",[867,868,869]],["backmarket.it",[867,868,869]],["backmarket.nl",[867,868,869]],["backmarket.pt",[867,868,869]],["backmarket.se",[867,868,869]],["backmarket.sk",[867,868,869]],["backmarket.com",[867,868,869]],["book-n-drive.de",871],["cotswoldoutdoor.com",872],["cotswoldoutdoor.ie",872],["cam.start.canon",873],["usnews.com",874],["researchaffiliates.com",875],["singkinderlieder.de",876],["stiegeler.com",877],["ba.com",[880,881,882,883,884,885,886]],["britishairways.com",[880,881,882,883,884,885,886]],["cineman.pl",[887,888,889]],["tv-trwam.pl",[887,888,889,890]],["qatarairways.com",[891,892,893,894,895]],["wedding.pl",896],["vivaldi.com",897],["emuia1.gugik.gov.pl",898],["nike.com",899],["adidas.at",900],["adidas.be",900],["adidas.ca",900],["adidas.ch",900],["adidas.cl",900],["adidas.co",900],["adidas.co.in",900],["adidas.co.kr",900],["adidas.co.nz",900],["adidas.co.th",900],["adidas.co.uk",900],["adidas.com",900],["adidas.com.ar",900],["adidas.com.au",900],["adidas.com.br",900],["adidas.com.my",900],["adidas.com.ph",900],["adidas.com.vn",900],["adidas.cz",900],["adidas.de",900],["adidas.dk",900],["adidas.es",900],["adidas.fi",900],["adidas.fr",900],["adidas.gr",900],["adidas.ie",900],["adidas.it",900],["adidas.mx",900],["adidas.nl",900],["adidas.no",900],["adidas.pe",900],["adidas.pl",900],["adidas.pt",900],["adidas.ru",900],["adidas.se",900],["adidas.sk",900],["colourbox.com",901],["ebilet.pl",902],["myeventeo.com",903],["snap.com",904],["louwman.nl",[905,906]],["ratemyprofessors.com",907],["filen.io",908],["leotrippi.com",909],["restaurantclub.pl",909],["context.news",909],["queisser.de",909],["grandprixradio.dk",[910,911,912,913,914]],["grandprixradio.nl",[910,911,912,913,914]],["grandprixradio.be",[910,911,912,913,914]],["businessclass.com",915],["quantamagazine.org",916],["hellotv.nl",917],["jisc.ac.uk",918],["lasestrellas.tv",919],["xn--digitaler-notenstnder-m2b.com",920],["schoonmaakgroothandelemmen.nl",920],["nanuko.de",920],["hair-body-24.de",920],["shopforyou47.de",920],["kreativverliebt.de",920],["anderweltverlag.com",920],["octavio-shop.com",920],["forcetools-kepmar.eu",920],["fantecshop.de",920],["hexen-werkstatt.shop",920],["shop-naturstrom.de",920],["biona-shop.de",920],["camokoenig.de",920],["bikepro.de",920],["kaffeediscount.com",920],["vamos-skateshop.com",920],["holland-shop.com",920],["avonika.com",920],["royal-oak.org",921],["hurton.pl",922],["officesuite.com",923],["fups.com",[924,929]],["kevin.eu",[925,926,927]],["scienceopen.com",930],["moebel-mahler-siebenlehn.de",[931,932]],["calendly.com",933],["batesenvironmental.co.uk",[934,935]],["ubereats.com",936],["101internet.ru",937],["bein.com",938],["beinsports.com",938],["figshare.com",939],["bitso.com",940],["gallmeister.fr",941],["eco-toimistotarvikkeet.fi",942],["proficient.fi",942],["developer.ing.com",943],["webtrack.dhlglobalmail.com",945],["webtrack.dhlecs.com",945],["ehealth.gov.gr",946],["calvinklein.se",[947,948,949]],["calvinklein.fi",[947,948,949]],["calvinklein.sk",[947,948,949]],["calvinklein.si",[947,948,949]],["calvinklein.ch",[947,948,949]],["calvinklein.ru",[947,948,949]],["calvinklein.com",[947,948,949]],["calvinklein.pt",[947,948,949]],["calvinklein.pl",[947,948,949]],["calvinklein.at",[947,948,949]],["calvinklein.nl",[947,948,949]],["calvinklein.hu",[947,948,949]],["calvinklein.lu",[947,948,949]],["calvinklein.lt",[947,948,949]],["calvinklein.lv",[947,948,949]],["calvinklein.it",[947,948,949]],["calvinklein.ie",[947,948,949]],["calvinklein.hr",[947,948,949]],["calvinklein.fr",[947,948,949]],["calvinklein.es",[947,948,949]],["calvinklein.ee",[947,948,949]],["calvinklein.de",[947,948,949]],["calvinklein.dk",[947,948,949]],["calvinklein.cz",[947,948,949]],["calvinklein.bg",[947,948,949]],["calvinklein.be",[947,948,949]],["calvinklein.co.uk",[947,948,949]],["ofdb.de",950],["dtksoft.com",951],["serverstoplist.com",952],["truecaller.com",953],["fruugo.fi",957],["ukbrewerytours.com",958],["sk-nic.sk",958],["worldcupchampionships.com",958],["arturofuente.com",[958,960,961]],["protos.com",[958,960,961]],["timhortons.co.th",[958,959,960,962,964,965]],["toyota.co.uk",[958,959,960,963,964,965]],["businessaccountingbasics.co.uk",[958,959,960,962,964,965]],["flickr.org",[958,959,960,962,964,965]],["espacocasa.com",958],["altraeta.it",958],["centrooceano.it",958],["allstoresdigital.com",958],["cultarm3d.de",958],["soulbounce.com",958],["fluidtopics.com",958],["uvetgbt.com",958],["malcorentacar.com",958],["emondo.de",958],["maspero.it",958],["kelkay.com",958],["underground-england.com",958],["vert.eco",958],["turcolegal.com",958],["magnet4blogging.net",958],["moovly.com",958],["automationafrica.co.za",958],["jornaldoalgarve.pt",958],["keravanenergia.fi",958],["kuopas.fi",958],["frag-machiavelli.de",958],["healthera.co.uk",958],["mobeleader.com",958],["powerup-gaming.com",958],["developer-blog.net",958],["medical.edu.mt",958],["deh.mt",958],["bluebell-railway.com",958],["ribescasals.com",958],["javea.com",958],["chinaimportal.com",958],["inds.co.uk",958],["raoul-follereau.org",958],["serramenti-milano.it",958],["cosasdemujer.com",958],["luz-blanca.info",958],["cosasdeviajes.com",958],["safehaven.io",958],["havocpoint.it",958],["motofocus.pl",958],["nomanssky.com",958],["drei-franken-info.de",958],["clausnehring.com",958],["alttab.net",958],["kinderleicht.berlin",958],["kiakkoradio.fi",958],["cosasdelcaribe.es",958],["de-sjove-jokes.dk",958],["serverprofis.de",958],["biographyonline.net",958],["iziconfort.com",958],["sportinnederland.com",958],["natureatblog.com",958],["wtsenergy.com",958],["cosasdesalud.es",958],["internetpasoapaso.com",958],["zurzeit.at",958],["contaspoupanca.pt",958],["steamdeckhq.com",[958,959,960,962,964,965]],["ipouritinc.com",[958,960,962]],["hemglass.se",[958,960,962,964,965]],["sumsub.com",[958,959,960]],["atman.pl",[958,959,960]],["fabriziovanmarciano.com",[958,959,960]],["nationalrail.com",[958,959,960]],["eett.gr",[958,959,960]],["funkypotato.com",[958,959,960]],["equalexchange.co.uk",[958,959,960]],["swnsdigital.com",[958,959,960]],["gogolf.fi",[958,962]],["hanse-haus-greifswald.de",958],["tampereenratikka.fi",[958,960,966,967]],["kymppikatsastus.fi",[960,964,1014,1015]],["santander.rewardgateway.co.uk",[968,969]],["brasiltec.ind.br",970],["xhaccess.com",970],["seexh.com",970],["valuexh.life",970],["xham.live",970],["xhamster.com",970],["xhamster.desi",970],["xhamster1.desi",970],["xhamster19.com",970],["xhamster2.com",970],["xhamster3.com",970],["xhamster42.desi",970],["xhamsterlive.com",970],["xhchannel.com",970],["xhchannel2.com",970],["xhdate.world",970],["xhopen.com",970],["xhspot.com",970],["xhtab4.com",970],["xhwebsite5.com",970],["xhwide5.com",970],["doka.com",[971,972,973]],["abi.de",[974,975]],["studienwahl.de",[974,975]],["journal.hr",[976,977,978,979]],["howstuffworks.com",980],["stickypassword.com",[981,982,983]],["conversion-rate-experts.com",[984,985]],["merkur.si",[986,987,988]],["petitionenligne.com",[989,990]],["petitionenligne.be",[989,990]],["petitionenligne.fr",[989,990]],["petitionenligne.re",[989,990]],["petitionenligne.ch",[989,990]],["skrivunder.net",[989,990]],["petitiononline.uk",[989,990]],["petitions.nz",[989,990]],["petizioni.com",[989,990]],["peticao.online",[989,990]],["skrivunder.com",[989,990]],["peticiones.ar",[989,990]],["petities.com",[989,990]],["petitionen.com",[989,990]],["petice.com",[989,990]],["opprop.net",[989,990]],["peticiok.com",[989,990]],["peticiones.net",[989,990]],["peticion.es",[989,990]],["peticiones.pe",[989,990]],["peticiones.mx",[989,990]],["peticiones.cl",[989,990]],["peticije.online",[989,990]],["peticiones.co",[989,990]],["mediathek.lfv-bayern.de",991],["aluypvc.es",[992,993,994]],["pracuj.pl",[995,996,997,998,999]],["vki.at",1001],["konsument.at",1001],["chollometro.com",1002],["dealabs.com",1002],["hotukdeals.com",1002],["pepper.it",1002],["pepper.pl",1002],["preisjaeger.at",1002],["mydealz.de",1002],["220.lv",[1003,1004]],["pigu.lt",[1003,1004]],["kaup24.ee",[1003,1004]],["hansapost.ee",[1003,1004]],["hobbyhall.fi",[1003,1004]],["direct.travelinsurance.tescobank.com",[1007,1008,1009,1010,1011,1012,1013,1014]],["mediaite.com",1016],["easyfind.ch",[1017,1018]],["e-shop.leonidas.com",[1019,1020]],["lastmile.lt",1021],["veriff.com",1022],["tvpworld.com",1023],["vm.co.mz",1024],["gamearena.pl",1025],["constantin.film",[1026,1027,1028]],["notion.so",1029],["omgevingsloketinzage.omgeving.vlaanderen.be",[1030,1031]],["primor.eu",1032],["tameteo.com",1033],["tempo.pt",1033],["yourweather.co.uk",1033],["meteored.cl",1033],["meteored.mx",1033],["tempo.com",1033],["ilmeteo.net",1033],["meteored.com.ar",1033],["daswetter.com",1033],["myprivacy.dpgmedia.nl",1034],["myprivacy.dpgmediagroup.net",1034],["algarvevacation.net",1035],["3sat.de",1036],["oxxio.nl",[1037,1038]],["butterflyshop.dk",[1039,1040,1041]],["praxis.nl",1042],["brico.be",1042],["kent.gov.uk",[1043,1044]],["pohjanmaanhyvinvointi.fi",1045],["maanmittauslaitos.fi",1046]]);

const entitiesMap = new Map([["airchina",[39,40,41]],["top4mobile",[74,75]]]);

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
