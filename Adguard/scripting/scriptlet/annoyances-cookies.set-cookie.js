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

const argsList = [["__toppy_consent","1"],["_u123_cc","yes"],["ga-disable","true"],["ga_consentement","0"],["VMAKE_COOKIE_POLICY","0"],["GDPR","9"],["dad_consent","true"],["agreedToCookiesanon","1"],["pum-937","true"],["essential_cookies_enabled","true"],["google_cookies_enabled","false"],["cookiepolicyinfo_new2","true"],["livedoor-blog-gdpr-agreed","1"],["camra_experience_cookie_consent","1"],["valCookie1","1"],["third-party","required","","reload","1"],["COOKIES_ACCEPTED","true"],["cookienotification","1"],["_cookieconsentv2","1"],["cconsent","1"],["cookies-info","true"],["cookies_and_content_security_policy","false"],["cookies_consent_disclaimer","false"],["intramuros-cookie-consent","true"],["intramuros-analytics","false"],["website_cookies_bar","true"],["CF_GDPR_COOKIE_CONSENT_VIEWED","1"],["cookie-confirm","1"],["cookie_preferences_set","true"],["S_COOKIES_ACCEPTED","true"],["isCookieLegalBannerSelected","true"],["cc","1"],["doSomethingOnlyOnce","true"],["tos_consent","allow"],["fn_cookie_banner","1"],["adult_confirm","1"],["atl-gdpr-consent","0010000"],["cookies-allowance","true"],["_acceptsEssential","true"],["informedConsent","1"],["EnableABTest","false"],["EnableFacebook","false"],["EnableGA","false"],["cookie-consent","false"],["consent-state","true"],["was_cookie_consent","no"],["ytprefs_gdpr_consent","1","","reload","1"],["cconsent","1000"],["CONSENT","15"],["nCookieVisible","2"],["CookieConsent","false"],["cookie_consent","necessary"],["suzuki-accept-cookie","true"],["cookieHidden","true"],["terms_agreement_popup_agreed","true","","reload","1"],["consent_panel","1"],["user_allowed_save_cookie","true"],["AcceptCookie","yes"],["cookieConsent","0"],["cookieConsent","rejected"],["smile_allow_cookies","true"],["cookie_alert","true"],["cb-enabled","accepted"],["AgreeCookies","true"],["AreCookiesSet","true"],["chcCookieHint","1","","reload","1"],["accept-selected-cookies","true","","reload","1"],["cookiePreferences","true"],["necessary","true"],["has_accepted_cookies","true"],["cs_viewed_cookie_policy","yes"],["cookies","false"],["cookies_accepted","0"],["cookies_informed","true"],["has-seen-cookie-notice","true","","reload","1"],["cookies-agreed","1"],["cookies-analytical","0"],["gls-cookie-policy","accepted"],["cookies-configured","1"],["consent","true"],["localConsent","true"],["pum-13751","true"],["CONSENT","1"],["cm_level","0"],["st-cookie-token","true"],["functionalCookie","true"],["agreed_cookie_policy","1"],["hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"],["hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"],["gdprPGA","true"],["xn_cookieconsent","false","","reload","1"],["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookie_consent_closed","1"],["__cookie_consent","false"],["dsgvo-stat","yes"],["dsgvo-mark","no"],["cookieSettings","11","","reload","1"],["google-tagmanager","false"],["decline","true","","","reload","1"],["cookieTermsDismissed","true"],["cookieConsentDismissed","true"],["kraftwerkCookiePolicyState","1"],["privacyPolicyAccept","1","","reload","1"],["CookieConsent","necessary"],["analyticsStatus","false"],["socialMediaStatus","false"],["cookiesAccepted","","reload","1"],["required","1"],["pmStorage","1"],["user_cookie_prefs","1"],["_coo_seen","1"],["airTRFX_cookies","accepted"],["cookie_consent_accept","true"],["agree","true"],["vw_mms_hide_cookie_dialog","1"],["solo_opt_in","false"],["POMELO_COOKIES","1"],["AcceptUseCookie","Accept"],["sbrf.pers_notice","1"],["closedCookieBanner","true"],["yoyocookieconsent_viewed","true"],["privacy_policy_agreement","6","","reload","1"],["kinemaster-cookieconstent","1"],["cookie_acceptance","1"],["jazzfm-privacy","true"],["show_msg_cookies","false"],["CookieConsent","true","","reload","1"],["FunctionalCookie","true"],["AnalyticalCookie","false"],[".YourApp.ConsentCookie","yes","","reload","1"],["gdpr","deny"],["VAA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["VAA_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["VAA_ENSIGHTEN_PRIVACY_Marketing","0"],["VAA_ENSIGHTEN_PRIVACY_Functional","0"],["VAA_ENSIGHTEN_PRIVACY_Analytics","0"],["agreesWithCookies","true"],["gaCookies","false"],["cookiesApproved20231","true"],["rm-first-time-modal-welcome","1"],["cookieConsent-2023-03","false"],["CookieDisclaimer","1"],["twtr_pixel_opt_in","N"],["RBCookie-Alert","1"],["CookieConsentV4","false"],["cookieconsent_status","allow"],["cookieconsent_status","dismiss"],["cookies_analytics_enabled","0","","reload","1"],["xf_notice_dismiss","1"],["rcl_consent_given","true"],["rcl_preferences_consent","true"],["rcl_marketing_consent","false"],["confirmed-cookies","1","","reload","1"],["cb_validCookies","1"],["cb_accepted","1"],["ws-cookie-Techniques","true"],["cookie-agreed","2"],["cookie_consent","yes"],["cookie_consent_options","3"],["consentIsSetByUser","true","","reload","1"],["isSiteCookieReviewed","0","","reload","1"],["phpbb3_4zn6j_ca","true"],["cookieBar-cookies-accepted","true"],["cookie_consent_user_accepted","true"],["__gitbook_cookie_granted","no"],["WB_CookieNotification","1"],["cookieConfirmation","true"],["gdpr2_required","true"],["gdpr2","true"],["DmCookiesAccepted","true"],["DmCookiesAnalytics","false"],["DmCookiesMarketing","false"],["cookie_accepted","1"],["user_cookie_consent","false","","reload","1"],["cookies-marketing","N"],["gatsby-gdpr-google-tagmanager","false"],["uuAppCookiesAgreement","true"],["_cookies-consent","yes"],["RCI_APP_LEGAL_DISCLAIMER_COOKIE","false"],["hs_cookieconsent","true"],["cookiergpdjnz","1"],["__radicalMotorsport.ac","true"],["cookies_message_bar_hidden","true"],["acceptsCookies","false"],["accept_cookies","accepted"],["consent_seen","1"],["_gdpr_playbalatro","1"],["consentAll","0"],["cookiewarning","1","","reload","1"],["cookieBarSeen","true"],["cookie_consent_given","true"],["cuvva.app.website.cookie-policy.consent","1"],["custom-cookies-accepted","1","","reload","1"],["AnalyticsAcceptancePopOver","false"],["cookiecookie","1"],["disclaimer-overlay","true"],["complianceCookie","true"],["KeebSupplyCookieConsent","true"],["cookie_policy_agreement","true"],["kt_tcookie","1"],["splash_Page_Accepted","true"],["gdpr-analytics-enabled","false"],["privacy_status","1"],["privacy_settings","1"],["config","1","","reload","1"],["hideCookieNotification","true","","reload","1"],["CookieNotification","1"],["has_accepted_gdpr","1"],["app-cookie-consents","1"],["analitics_cookies","0"],["accept_cookies","yes","","reload","1"],["tachyon-accepted-cookie-notice","true"],["defra-cookie-banner-dismissed","true","","reload","1"],["myAwesomeCookieName3","true"],["cookie-notification","ACCEPTED","","reload","1"],["loader","1"],["enableAnalyticsCookies","denied"],["acknowledgeCookieBanner","true"],["enableTargetingAdvertisingCookies","denied"],["cookiePolicy","1"],["cookie-agreed","0"],["crtmcookiesProtDatos","1","","reload","1"],["NADevGDPRCookieConsent_portal_2","1"],["handledCookieMessage","1"],["targeting","false"],["functionality","false"],["performance","false"],["cookie_info","1","","reload","1"],["bannerDissmissal","true","","reload","1"],["allowCookies","true"],["COOKIE-POLICY-ACCEPT","true"],["gdpr","accept"],["essentialCookie","Y"],["checkCookie","Y"],["analyticsCookie","N"],["marketingCookie","N"],["thirdCookie","N"],["paydirektCookieAllowed","false"],["hdcab","true"],["synapse-cookie-preferences-set","true"],["confirm_cookies","1"],["endgame-accept-policy","true"],["sc-privacy-settings","true"],["accept_cookies2","true","","reload","1"],["cf_consent","false"],["privacyCookie","1","","reload","1"],["cookieChoice","0"],["lgpdConsent","true"],["shareloft_cookie_decision","1"],["privacy_marketing","false"],["privacy_comodidade","false"],["acceptAnalyticsCookies","false"],["acceptFunctionalCookies","true"],["cookiePolicyConfirmed","true","","reload","1"],["PostAnalytics","0"],["gatsby-gdpr","false"],["functionalCookiesAccepted","true"],["necessaryCookies","true"],["comfortCookiesAccepted","false"],["statisticsCookiesAccepted","false"],["gdpr-google-analytics","false"],["cookie_policy","true"],["cookieModalAccept","no"],["AcceptFunctionalCookies","true"],["AcceptAnalyticsCookies","false"],["AcceptNonFunctionalCookies","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","true"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["consent-cookie","1"],["show_gdpr_cookie_message_388801234_cz","no"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["acceptCookie","1"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","yes","","reload","1"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["cookies-accept","1"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["acceptCookies","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["cookie_consent","true"],["gtm-disable-GTM-NLVRXX8","true"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["CookieConsentFT","1"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookie-bar","0"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["consent","rejected"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["cookies_consent","true"],["cookies_consent","false"],["anal-opt-in","false"],["accepted","1"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["ee-hj","n"],["ee-ca","y","","reload","1"],["ee-yt","y"],["cookie_analytics","false"],["et_cookie_consent","true"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["cmplz_marketing","allow"],["acknowledged","true"],["ccpaaccept","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookie-consent","1","","reload","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["cookie-accepted","true"],["cookie-accepted","yes"],["acceptsAdvertisingCookies","false"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cookies-accepted","true","","reload","1"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["_cookies_v2","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["br-lgpd-cookie-notice-agreement-v1","1"],["privacy_mv","1"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["consentInteract","true"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["gcp","1","","reload","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["bvkcookie","true"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["cookies_accepted","yes"],["cookies_accepted","false"],["CM_BANNER","false"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["cookieconsent","deny"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","1"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie-preferences-technical","yes"],["tracking_cookie","1"],["cookie_consent_group_technical","1"],["cookie-preference_renew10","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["cookie_accepted","true"],["hasSeenCookieDisclosure","true"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["ff_cookie_notice","1"],["allris-cookie-msg","1"],["gdpr__google__analytics","false"],["gdpr__facebook__social","false"],["gdpr__depop__functional","true"],["cookie_consent","1","","reload","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["cookie-consent","denied"],["COOKIECONSENT","false"],["tibber_cc_essential","approved","","reload","1"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["cookie_consent_user_accepted","false"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree_0124","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["marketing_cookie_akkoord","0"],["site_cookie_akkoord","1"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["analytics_cookies","0"],["cookies_accepted","1","","reload","1"],["tracking_cookies","0"],["advertisement-age-show-alcohol","false"],["advertisement-age-show-gamble","false"],["ibe.acceptedCookie","true"],["acceptedPolicy","true"],["cookieConsentClosed","true"],["cookiesPrivacy","false"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["royaloakTermsCookie","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["kevin-user-has-accepted-ad-cookies","false"],["kevin-user-has-accepted-analytics-cookies","false"],["kevin-user-has-interacted-with-cookies","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["tc:dismissexitintentpopup","true"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["consents","essential"],["viewed_cookie_policy","yes","","reload","1"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-advertisement","yes"],["cookielawinfo-checkbox-analytics","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["cookie_preferences","10"],["cookie_consent_status","allow"],["cookie_accept","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["CA_DT_V2","0","","reload","1"],["CA_DT_V3","0"],["internalCookies","false"],["essentialsCookies","true"],["TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["am-sub","1"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["veriff_cookie_consent_completed","true"],["TVPtcs22ver","66"],["cookieBasicConsent","accepted"],["cookieVer","1","","reload","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["dummy","1","","reload","1"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"],["cookie-management-preferences-set","true"],["cookie-management-version","1"],["show-cookie-banner","1"],["mml-cookie-agreed","2"]];

const hostnamesMap = new Map([["toppy.be",0],["uhrzeit123.de",[1,2]],["billetterie.auditorium-lyon.com",3],["vmake.ai",4],["marinelink.com",5],["againstdata.com",6],["inspections.vcha.ca",7],["floodlit.org",8],["spuntinoheathrow.com",[9,10]],["pzw.org.pl",11],["livedoor.biz",12],["camra.org.uk",[13,961]],["parkguellonline.cat",14],["stroga-festival.de",15],["queensfishandchipsgloucester.co.uk",16],["ieq-systems.de",17],["arning-bau.de",17],["startrescue.co.uk",18],["eneba.com",19],["eltiempo.com",20],["galaxykayaks.ro",21],["mywot.com",22],["intramuros.org",[23,24]],["nucom.odoo.dev",25],["cyberfolks.pl",26],["cyberfolks.ro",26],["okko.tv",27],["immersivelabs.online",28],["serasa.com.br",29],["falabella.com.pe",30],["falabella.com",30],["falabella.com.co",30],["przegladpiaseczynski.pl",31],["cloud.aeolservice.es",32],["nuevoloquo.ch",33],["fogaonet.com",34],["zbiornik.com",35],["bitbucket.io",36],["ton.org",37],["sutterhealth.org",38],["antpool.com",39],["thegraph.com",43],["followalice.com",[43,851]],["headout.com",44],["london-tickets.co.uk",44],["kosmas.cz",45],["blog.documentfoundation.org",46],["my.eneba.com",47],["blitzortung.org",48],["esim.redteago.com",49],["tester.userbrain.com",50],["empathy.com",50],["labs.epi2me.io",50],["fydeos.io",51],["autos.suzuki.com.mx",52],["stonly.com",53],["camp-fire.jp",54],["my2n.com",55],["vandalism-sounds.com",56],["oocl.com",57],["brazzersnetwork.com",58],["safaricom.co.ke",59],["smile.io",60],["hiermitherz.de",61],["uk2.net",62],["aeromexico.com",[63,64]],["easywintergarten.de",65],["vinothekwaespi.ch",[66,67,68]],["graphy.com",69],["raspberrypi.dk",70],["ocean.io",71],["waves.is",72],["tesa.com",73],["repair.wd40.com",74],["gls-group.eu",77],["chipsaway.co.uk",78],["heatstore.eu",79],["luvly.care",79],["firmen.wko.at",79],["copaamerica.com",80],["apunyalometre.cat",80],["cooleygo.com",81],["map.blitzortung.org",82],["northumbriasport.com",83],["clearspend.natwest.com",84],["cellcolabsclinical.com",85],["producthunt.com",86],["motorsportreg.com",[87,88]],["imola.motorsportreg.com",[89,90]],["pga.com",91],["portal.payment.eltax.lta.go.jp",92],["greenbuildingadvisor.com",[93,94,95]],["finewoodworking.com",[93,94,95]],["privatekeys.pw",96],["telli.dpd.ee",97],["youthforum.org",97],["votegroup.de",[98,99]],["pharmahall.gr",100],["x-team.com",101],["reservations.helveticmotion.ch",102],["endclothing.com",[103,104]],["kraftwerk.co.at",105],["fhr.biz",106],["srf.nu",107],["jn.fo",[108,109]],["rovia.es",110],["platforma.eb2b.com.pl",110],["schwanger-in-bayern.de",111],["stmas.bayern.de",[111,741]],["bayern-gegen-gewalt.de",111],["verfwebwinkel.be",112],["wayfair.co.uk",113],["wayfair.de",113],["wayfair.ie",113],["physiotherapie-naurod.de",114],["airnewzealand.co.nz",115],["viu.com",116],["dinamalar.com",117],["volkswagen-group.com",118],["solo.io",119],["pomelo.la",120],["ibuypower.com",121],["sberbank.com",[122,526]],["swissmilk.ch",123],["gamemaker.io",124],["pixiv.net",125],["kinemaster.com",126],["sp32bb.pl",127],["jazz.fm",128],["juntadeandalucia.es",129],["melee.gg",[130,131,132]],["chemocare.com",133],["mobiliteit.nl",134],["virginatlantic.com",[135,136,137,138,139]],["xledger.net",140],["legalteam.hu",141],["mediately.co",142],["reviewmeta.com",143],["guide-bordeaux-gironde.com",144],["travelinsured.com",145],["gdpr.twitter.com",146],["mora.hu",147],["confused.com",148],["physikinstrumente.de",149],["karlknauer.de",149],["schoeck.com",149],["resonate.coop",149],["northgatevehiclehire.ie",149],["badhall.at",149],["cic.ch",149],["tryhackme.com",150],["ilsaggiatore.com",151],["forum.digitalfernsehen.de",152],["bitscrunch.com",[153,154,155]],["hannahgraaf.com",156],["shop.elbers-hof.de",[157,158]],["woolsocks.eu",159],["uza.be",160],["5asec.ch",160],["wizards.com",160],["kitepackaging.co.uk",[161,162]],["parkenflughafen.de",163],["radyofenomen.com",164],["elsate.com",165],["hume.ai",166],["lotusantwerp.wacs.online",167],["docs.yagpdb.xyz",168],["gitbook.io",168],["gitbook.com",168],["thehacker.recipes",168],["docs.dyrector.io",168],["docs.webstudio.is",168],["docs.chartbeat.com",168],["docs.civic.com",168],["weatherbug.com",169],["saleor.io",170],["publibike.ch",[171,172]],["onlinelekarna.cz",[173,174,175]],["eleven-sportswear.cz",[174,175,873]],["silvini.com",[174,175,873]],["silvini.de",[174,175,873]],["purefiji.cz",[174,175,873]],["voda-zdarma.cz",[174,175,873]],["lesgarconsfaciles.com",[174,175,873]],["ulevapronohy.cz",[174,175,873]],["vitalvibe.eu",[174,175,873]],["plavte.cz",[174,175,873]],["mo-tools.cz",[174,175,873]],["flamantonlineshop.cz",[174,175,873]],["sandratex.cz",[174,175,873]],["norwayshop.cz",[174,175,873]],["3d-foto.cz",[174,175,873]],["neviditelnepradlo.cz",[174,175,873]],["nutrimedium.com",[174,175,873]],["silvini.cz",[174,175,873]],["karel.cz",[174,175,873]],["silvini.sk",[174,175,873]],["shop.humle.se",176],["59northwheels.se",176],["makeresearchpay.com",177],["tandartsenpraktijk-simons.tandartsennet.nl",178],["huisartsenpraktijkdoorn.nl",178],["bcorporation.net",179],["knime.com",[179,224]],["quebueno.es",179],["edookit.com",180],["trixonline.be",181],["radio-canada.ca",182],["heysummit.com",183],["puromarketing.com",184],["radicalmotorsport.com",185],["biurobox.pl",186],["cycling74.com",187],["triviacreator.com",188],["reforge.com",188],["freshis.com",188],["anker.com",188],["computacenter.com",189],["playbalatro.com",190],["kastner-oehler.de",191],["kastner-oehler.at",191],["kastner-oehler.ch",191],["twenga.it",192],["twenga.fr",192],["twenga.co.uk",192],["twenga.de",192],["twenga.es",192],["twenga.pl",192],["twenga.nl",192],["twenga.se",192],["olx.kz",193],["olx.uz",193],["efl.com",194],["wst.tv",194],["cuvva.com",195],["vitbikes.de",196],["gourmetfoodstore.com",197],["schulfahrt.de",198],["deutsche-finanzagentur.de",199],["thejazzcafelondon.com",200],["keeb.supply",201],["spb.hh.ru",202],["kaluga.hh.ru",202],["school.hh.ru",202],["rating.hh.ru",202],["novgorod.hh.ru",202],["xxxshemaleporn.com",[203,204]],["gayhits.com",[203,204]],["gaypornvideos.xxx",[203,204]],["sextubespot.com",[203,204]],["wewantjusticedao.org",205],["godbolt.org",206],["projectenglish.com.pl",[207,213]],["ledenicheur.fr",207],["pricespy.co.uk",207],["pricespy.co.nz",207],["sae.fsc.ccoo.es",208],["piusx-college.nl",209],["forgeofempires.com",210],["yoomoney.ru",211],["vod.warszawa.pl",212],["bio-hoflieferant.de",214],["m.twitch.tv",215],["environment.data.gov.uk",216],["playtesting.games",217],["portal.by.aok.de",218],["umlandscout.de",219],["atombank.co.uk",[220,221,222]],["showtv.com.tr",223],["seventhgeneration.com",224],["press.princeton.edu",224],["ldz.lv",224],["crtm.es",225],["airastana.com",226],["vkf-renzel.nl",227],["booking.reederei-zingst.de",[228,229,230]],["booking.weisse-flotte.de",[228,229,230]],["booking2.reederei-hiddensee.de",[228,229,230]],["sanswiss.pl",231],["galaxy.com",232],["petdesk.com",233],["ivyexec.com",234],["railtech.com",235],["lottehotel.com",[236,237,238,239,240]],["paydirekt.de",241],["kijiji.ca",242],["posterstore.fr",243],["posterstore.eu",243],["posterstore.be",243],["posterstore.de",243],["posterstore.hu",243],["posterstore.ie",243],["posterstore.it",243],["posterstore.no",243],["posterstore.nl",243],["posterstore.pl",243],["posterstore.com",243],["posterstore.ae",243],["posterstore.ca",243],["posterstore.nz",243],["posterstore.es",243],["posterstore.kr",243],["posterstore.jp",243],["posterstore.dk",243],["posterstore.se",243],["posterstore.ch",243],["posterstore.at",243],["myriadicity.net",244],["dgsf.org",244],["endgame.id",245],["cashback-cards.ch",246],["swisscard.ch",246],["ahorn24.de",247],["blockdyor.com",248],["ticket.io",249],["omega-nuernberg.servicebund.com",250],["lojaboschferramentas.com.br",[251,253,254]],["shareloft.com",252],["fineartsmuseum.recreatex.be",[255,256,257]],["jaapeden.nl",[255,256,257]],["eboo.lu",258],["lasmallagency.com",259],["lhsystems.com",[260,261,262,263]],["twomates.de",264],["intergiro.com",265],["healthygamer.gg",266],["telepizza.es",[267,268,269]],["telepizza.pt",[267,268,269]],["frisco.pl",270],["tyleenslang.nl",271],["schrikdraad.net",271],["kruiwagen.net",271],["pvcvoordeel.nl",271],["pvcbuis.com",271],["drainagebuizen.nl",271],["likewise.com",272],["longines.com",[273,274,275,276]],["vater-it.de",277],["biano.hu",278],["nadia.gov.gr",279],["hana-book.fr",280],["kzvb.de",281],["correosexpress.com",282],["cexpr.es",282],["rte.ie",283],["smart.com",284],["gry.pl",284],["gamesgames.com",284],["games.co.uk",284],["jetztspielen.de",284],["ourgames.ru",284],["permainan.co.id",284],["gioco.it",284],["jeux.fr",284],["juegos.com",284],["ojogos.com.br",284],["oyunskor.com",284],["spela.se",284],["spelletjes.nl",284],["agame.com",284],["spielen.com",284],["flashgames.ru",284],["games.co.id",284],["giochi.it",284],["jeu.fr",284],["spel.nl",284],["tridge.com",285],["asus.com",[286,287]],["drinksking.sk",288],["neuhauschocolates.com",289],["commandsuite.it",290],["designmynight.com",290],["oktea.tw",291],["1028loveu.com.tw",291],["airbubu.com",291],["amai.tw",291],["anns.tw",291],["as.estore.armarpot.com",291],["as-eweb.com",291],["asf.com.tw",291],["asics.com.hk",291],["asics.com.tw",291],["ausupreme.com",291],["basiik.com",291],["bearboss.com",291],["beast-kingdom.com.tw",291],["beldora.com.tw",291],["benefitcosmetics.com.tw",291],["bns.com.tw",291],["byhue-official.com",291],["candybox.com.tw",291],["columbiasportswear.com.tw",291],["concerto.com.tw",291],["countess.tw",291],["cuapp.com",291],["daima.asia",291],["dettol-store.com.tw",291],["dickies.com.tw",291],["doga.com.tw",291],["dot-st.tw",291],["dr-douxi.tw",291],["durex-store.com.tw",291],["echome.com.hk",291],["eding.com.tw",291],["e-hilltop.com",291],["faduobra.com",291],["fairlady.com.tw",291],["fbshop.com.tw",291],["freshdays-shop.com",291],["hh-taiwan.com.tw",291],["iqueen.com.tw",291],["jjfish.com.tw",291],["jpmed.com.tw",291],["jsstore.com.tw",291],["kipling.com.tw",291],["kuaiche.com.tw",291],["lanew.com.tw",291],["leejeans.com.tw",291],["levis.com.tw",291],["ludeya.com",291],["lulus.tw",291],["makeupforever.com.tw",291],["mart.family.com.tw",291],["meinlcoffee.com.tw",291],["metroasis.com.tw",291],["minervababy.com.tw",291],["miss21.estore.asgroup.com.tw",291],["miu-star.com.tw",291],["mkup.tw",291],["mlb-korea.com.hk",291],["mollifix.com",291],["naruko.com.tw",291],["newweb.renoirpuzzle.com.tw",291],["nikokids.com.tw",291],["nisoro.com",291],["odout.com",291],["ouiorganic.com",291],["pandababy.com.tw",291],["peachy.com.tw",291],["poyabuy.com.tw",291],["premierfood.com.hk",291],["rachelwine.com.tw",291],["risal.com.tw",291],["sasa.com.hk",291],["schiff-store.com.tw",291],["sexylook.com.tw",291],["sfn.com.tw",291],["shingfangpastry.com",291],["shop.3m.com.tw",291],["shop.5soap.com",291],["shop.atunas.com.tw",291],["shop.bosscat.com.tw",291],["shop.conas.com.tw",291],["shop.cosmed.com.tw",291],["shop.coville.com.tw",291],["shop.euyansang.com.hk",291],["shop.kbc.com.tw",291],["shop.kemei.com.tw",291],["shop.kky.com.tw",291],["shop.norns.com.tw",291],["shop.okogreen.com.tw",291],["shop.skechers-twn.com",291],["shop.s3.com.tw",291],["shop.teascovery.com",291],["shop.wacoal.com.tw",291],["shop.wumajia.com.tw",291],["shopping.dradvice.asia",291],["shop0315.com.tw",291],["sky-blue.com.tw",291],["snowpeak.com.tw",291],["songbeam.com.tw",291],["so-nice.com.tw",291],["store-philips.tw",291],["tcsb.com.tw",291],["thenorthface.com.tw",291],["timberland.com.tw",291],["tokuyo.com.tw",291],["triumphshop.com.tw",291],["trygogo.com",291],["tupiens-foodie.com",291],["tw.istayreal.com",291],["tw.puma.com",291],["vans.com.tw",291],["vemar.com.tw",291],["vigill.com.tw",291],["vilson.com",291],["vincentsworld.com.tw",291],["wealthshop888.com",291],["yamazaki.com.tw",291],["bafin.de",292],["materna.de",292],["bamf.de",292],["tenvinilo-argentina.com",[293,294]],["eikaforsikring.no",[295,296]],["eurowings.com",[297,298,299]],["newpharma.be",[300,301,302]],["newpharma.fr",[300,301,302]],["newpharma.de",[300,301,302]],["newpharma.at",[300,301,302]],["newpharma.nl",[300,301,302]],["kapoorwatch.com",303],["instantoffices.com",304],["paf.se",304],["citibank.pl",304],["citibankonline.pl",304],["azertyfactor.be",305],["zelezodum.cz",306],["thw.de",307],["bafa.de",307],["bka.de",307],["bmbf.de",307],["weather.com",308],["bolist.se",[309,310]],["project529.com",310],["evivanlanschot.nl",311],["alohabrowser.com",312],["prenatal.nl",313],["onnibus.com",[313,957,958,959]],["kyoceradocumentsolutions.us",[313,1008,1009]],["kyoceradocumentsolutions.ch",[313,1008,1009]],["kyoceradocumentsolutions.co.uk",[313,1008,1009]],["kyoceradocumentsolutions.de",[313,1008,1009]],["kyoceradocumentsolutions.es",[313,1008,1009]],["kyoceradocumentsolutions.eu",[313,1008,1009]],["kyoceradocumentsolutions.fr",[313,1008,1009]],["kyoceradocumentsolutions.it",[313,1008,1009]],["kyoceradocumentsolutions.ru",[313,1008,1009]],["kyoceradocumentsolutions.mx",[313,1008,1009]],["kyoceradocumentsolutions.cl",[313,1008,1009]],["kyoceradocumentsolutions.com.br",[313,1008,1009]],["wagner-tuning.com",[314,315,316,317]],["waitrosecellar.com",[318,319,320,321]],["waitrose.com",[318,674]],["kvk.nl",[322,323,324]],["macfarlanes.com",325],["pole-emploi.fr",326],["gardenmediaguild.co.uk",327],["samplerite.com",328],["samplerite.cn",328],["sororedit.com",329],["blukit.com.br",330],["biegnaszczyt.pl",331],["staff-gallery.com",332],["itv.com",333],["dvag.de",334],["premierinn.com",[335,336,337,338]],["whitbreadinns.co.uk",[335,336,337,338]],["barandblock.co.uk",[335,336,337,338]],["tabletable.co.uk",[335,336,337,338]],["brewersfayre.co.uk",[335,336,337,338]],["beefeater.co.uk",[335,336,337,338]],["allstarssportsbars.co.uk",[339,340]],["babiesrus.ca",341],["toysrus.ca",341],["roomsandspaces.ca",341],["athletic-club.eus",[342,343,344]],["wattoo.dk",345],["wattoo.no",345],["texthelp.com",[346,347]],["courierexchange.co.uk",[348,349,350]],["haulageexchange.co.uk",[348,349,350]],["ecaytrade.com",351],["unka.bilecik.edu.tr",351],["powerball.com",352],["tlaciarik.sk",352],["tiskarik.cz",352],["sseriga.edu",[353,354]],["rt.com",355],["swrng.de",356],["crfop.gdos.gov.pl",357],["nurgutes.de",358],["kpcen-torun.edu.pl",359],["opintopolku.fi",360],["app.erevie.pl",361],["debenhams.com",362],["archiwumalle.pl",363],["konicaminolta.ca",364],["konicaminolta.us",364],["deutschebank-dbdirect.com",[365,366,367]],["dbonline.deutsche-bank.es",[365,366,367]],["deutsche-bank.es",[365,366,367]],["hipotecaonline.db.com",368],["kangasalansanomat.fi",369],["eif.org",370],["tunnelmb.net",370],["sugi-net.jp",371],["understandingsociety.ac.uk",372],["leibniz.com",373],["horecaworld.biz",[373,643]],["horecaworld.be",[373,643]],["bettertires.com",373],["electroprecio.com",373],["autohero.com",373],["computerbase.de",[373,1003]],["sistemacomponentes.com.br",374],["bargaintown.ie",375],["tui.nl",376],["doppelmayr.com",377],["case-score.com",[378,379]],["cote.co.uk",380],["finimize.com",380],["unsplash.com",380],["k-einbruch.de",[381,382]],["blxxded.com",381],["rtu.lv",383],["sysdream.com",384],["cinemarkca.com",385],["neander-zahn.de",386],["thespaniardshampstead.co.uk",387],["carsupermarket.com",387],["theadelphileeds.co.uk",387],["tobycarvery.co.uk",387],["harvester.co.uk",387],["stonehouserestaurants.co.uk",387],["millerandcarter.co.uk",387],["browns-restaurants.co.uk",387],["thechampionpub.co.uk",387],["therocketeustonroad.co.uk",387],["thesheepheidedinburgh.co.uk",387],["thejerichooxford.co.uk",387],["hartsboatyard.co.uk",387],["thesalisburyarmsedinburgh.co.uk",387],["thelambchiswick.co.uk",387],["barntgreeninn.co.uk",387],["the-albany.co.uk",387],["sonofsteak.co.uk",387],["thewashingtonhampstead.co.uk",387],["princessofwalespub.co.uk",387],["harrycookcheltenham.co.uk",387],["thegreenmantrumpington.com",387],["queenandcastlekenilworth.co.uk",387],["whitehorseradlett.co.uk",387],["woolpackstokemandeville.co.uk",387],["thewhitehartpirbright.co.uk",387],["castleportobello.co.uk",387],["theswanbroadway.co.uk",387],["thederbyarmsepsom.co.uk",387],["thedewdropinnoxford.co.uk",387],["thejunctionharborne.co.uk",387],["therailwayblackheath.co.uk",387],["whitehartbrasted.co.uk",387],["thewarrenwokingham.co.uk",387],["thedukesheadcrawley.co.uk",387],["thewhitehartse19.co.uk",387],["thesunclapham.co.uk",387],["thevolunteernw1.co.uk",387],["theramsheaddisley.co.uk",387],["thepalaceleeds.co.uk",387],["edinborocastlepub.co.uk",387],["arnosarms.co.uk",387],["dehemspub.co.uk",387],["dukeofdevonshireeastbourne.co.uk",387],["flanagansappleliverpool.co.uk",387],["fontbrighton.co.uk",387],["hawkinsforge.co.uk",387],["hopeandbearreading.co.uk",387],["ploughandharrowaldridge.co.uk",387],["radicalsandvictuallers.co.uk",387],["redlionhandcross.co.uk",387],["stgeorgeanddragon.co.uk",387],["theanchorinnirby.co.uk",387],["thearkley.co.uk",387],["theappletreegerrardscross.co.uk",387],["theashtonbristol.co.uk",387],["thebankplymouth.co.uk",387],["thebathamptonmill.co.uk",387],["theblackbullyarm.co.uk",387],["thebotanistbristol.co.uk",387],["thebootmappleboroughgreen.co.uk",387],["thebullislington.co.uk",387],["thecavershamrosereading.co.uk",387],["thecliffcanfordcliffs.co.uk",387],["thecockinncockfosters.co.uk",387],["theencorestratford.co.uk",387],["theferry.co.uk",387],["viajesatodotren.com",388],["firsttable.co.uk",389],["ticketingcine.fr",390],["agenziavista.it",391],["e-chladiva.cz",391],["bitecode.dev",392],["mjob.si",[393,394,395]],["airportrentacar.gr",396],["mobile-fueling.de",396],["plos.org",397],["autohaus24.de",398],["sixt-neuwagen.de",398],["gadis.es",[399,400]],["dom.ru",400],["ford-kimmerle-reutlingen.de",401],["autohaus-reitermayer.de",401],["autohaus-diefenbach-waldbrunn.de",401],["autohaus-diefenbach.de",401],["autohaus-musberg.de",401],["ford-ah-im-hunsrueck-simmern.de",401],["ford-arndt-goerlitz.de",401],["ford-autogalerie-alfeld.de",401],["ford-bacher-schrobenhausen.de",401],["ford-bathauer-bad-harzburg.de",401],["ford-behrend-waren.de",401],["ford-bergland-frankfurt-oder.de",401],["ford-bergland-wipperfuerth.de",401],["ford-besico-glauchau.de",401],["ford-besico-nuernberg.de",401],["ford-bischoff-neumuenster.de",401],["ford-bodach-borgentreich.de",401],["ford-bunk-saarbruecken.de",401],["ford-bunk-voelklingen.de",401],["ford-busch-kirchberg.de",401],["ford-diermeier-muenchen.de",401],["ford-dinnebier-leipzig.de",401],["ford-duennes-regensburg.de",401],["ford-fischer-bochum.de",401],["ford-fischer-muenster.de",401],["ford-foerster-koblenz.de",401],["ford-fuchs-uffenheim.de",401],["ford-geberzahn-koeln.de",401],["ford-gerstmann-duesseldorf.de",401],["ford-haefner-und-strunk-kassel.de",401],["ford-hartmann-kempten.de",401],["ford-hartmann-rastatt.de",401],["ford-hatzner-karlsruhe.de",401],["ford-heine-hoexter.de",401],["ford-hentschel-hildesheim.de",401],["ford-hessengarage-dreieich.de",401],["ford-hessengarage-frankfurt.de",401],["ford-hga-windeck.de",401],["ford-hommert-coburg.de",401],["ford-horstmann-rastede.de",401],["ford-janssen-sonsbeck.de",401],["ford-jochem-stingbert.de",401],["ford-jungmann-wuppertal.de",401],["ford-kestel-marktzeuln.de",401],["ford-klaiber-bad-friedrichshall.de",401],["ford-koenig-eschwege.de",401],["ford-kohlhoff-mannheim.de",401],["ford-kt-automobile-coesfeld.de",401],["ford-lackermann-wesel.de",401],["ford-ludewig-delligsen.de",401],["ford-maiwald-linsengericht.de",401],["ford-mertens-beckum.de",401],["ford-meyer-bad-oeynhausen.de",401],["ford-mgs-bayreuth.de",401],["ford-mgs-radebeul.de",401],["ford-muecke-berlin.de",401],["ford-norren-weissenthurm.de",401],["ford-nrw-garage-duesseldorf.de",401],["ford-nrw-garage-handweiser.de",401],["ford-nuding-remshalden.de",401],["ford-ohm-rendsburg.de",401],["ford-reinicke-muecheln.de",401],["ford-rennig.de",401],["ford-roerentrop-luenen.de",401],["ford-schankola-dudweiler.de",401],["ford-sg-goeppingen.de",401],["ford-sg-leonberg.de",401],["ford-sg-neu-ulm.de",401],["ford-sg-pforzheim.de",401],["ford-sg-waiblingen.de",401],["ford-storz-st-georgen.de",401],["ford-strunk-koeln.de",401],["ford-tobaben-hamburg.de",401],["ford-toenjes-zetel.de",401],["ford-wagner-mayen.de",401],["ford-wahl-fritzlar.de",401],["ford-wahl-siegen.de",401],["ford-weege-bad-salzuflen.de",401],["ford-westhoff-hamm.de",401],["ford-wieland-hasbergen.de",401],["renault-autocenterprignitz-pritzwalk.de",401],["renault-spenrath-juelich.de",401],["vitalllit.com",402],["fincaparera.com",402],["dbnetbcn.com",402],["viba.barcelona",402],["anafaustinoatelier.com",402],["lamparasherrero.com",402],["calteixidor.cat",402],["argentos.barcelona",402],["anmarlube.com",402],["anynouxines.barcelona",402],["crearunapaginaweb.cat",402],["cualesmiip.com",402],["porndoe.com",[403,404,405]],["thinkingaustralia.com",406],["elrow.com",407],["ownit.se",408],["velo-antwerpen.be",[409,410]],["wwnorton.com",411],["pc-canada.com",412],["mullgs.se",413],["1a-sehen.de",414],["feature.fm",415],["comte.com",416],["baltic-watches.com",417],["np-brijuni.hr",417],["vilgain.com",417],["tradingview.com",418],["wevolver.com",419],["experienciasfree.com",420],["freemans.com",421],["kivikangas.fi",422],["lumingerie.com",422],["melkkobrew.fi",422],["kh.hu",[423,424,425]],["aplgo.com",426],["securityconference.org",427],["aha.or.at",[428,431]],["fantasyfitnessing.com",429],["chocolateemporium.com",430],["account.samsung.com",432],["crushwineco.com",433],["levi.pt",434],["fertagus.pt",435],["snowboardel.es",436],["bagosport.cz",436],["akumo.cz",436],["snowboardel.cz",436],["pompo.cz",436],["oveckarna.cz",436],["rockpoint.cz",436],["rockpoint.sk",436],["parfum-zentrum.de",436],["candy-store.cz",436],["vivobarefoot.cz",436],["sartor-stoffe.de",436],["smiggle.co.uk",437],["ubisoft.com",[438,439,440,441]],["store.ubisoft.com",[438,441,881,882]],["thulb.uni-jena.de",442],["splityourticket.co.uk",443],["invisible.co",444],["eramba.org",444],["openai.com",[445,446]],["kupbilecik.com",[447,448]],["kupbilecik.de",[447,448]],["kupbilecik.pl",[447,448]],["shopilya.com",449],["arera.it",450],["haustier-berater.de",450],["hfm-frankfurt.de",450],["zoommer.ge",451],["studentapan.se",452],["petcity.lt",[453,454,455,456]],["tobroco.com",[457,461]],["tobroco.nl",[457,461]],["tobroco-giant.com",[457,461]],["geosfreiberg.de",[458,459]],["eapvic.org",460],["bassolsenergia.com",460],["bammusic.com",[462,464,465]],["green-24.de",463],["phish-test.de",466],["bokadirekt.se",467],["ford.lt",468],["ford.pt",468],["ford.fr",468],["ford.de",468],["ford.dk",468],["ford.pl",468],["ford.se",468],["ford.nl",468],["ford.no",468],["ford.fi",468],["ford.gr",468],["ford.it",468],["data-media.gr",469],["e-food.gr",[470,471]],["bvmed.de",472],["babyshop.com",[473,474,475]],["griffbereit24.de",476],["checkwx.com",477],["calendardate.com",478],["wefashion.ch",479],["wefashion.fr",479],["wefashion.lu",479],["wefashion.be",479],["wefashion.de",479],["wefashion.nl",479],["brettspiel-angebote.de",[480,481]],["nio.com",482],["kancelarskepotreby.net",[483,484,485]],["segment-anything.com",486],["sketch.metademolab.com",487],["cambridgebs.co.uk",488],["freizeitbad-greifswald.de",489],["giuseppezanotti.com",[490,491,492]],["xcen.se",492],["biggreenegg.co.uk",493],["skihuette-oberbeuren.de",[494,495,496]],["pwsweather.com",497],["xfree.com",498],["theweathernetwork.com",[499,500]],["monese.com",[501,502,503]],["assos.com",501],["helmut-fischer.com",504],["myscience.org",505],["7-eleven.com",506],["airwallex.com",507],["streema.com",508],["gov.lv",509],["tise.com",510],["codecamps.com",511],["avell.com.br",512],["moneyfarm.com",513],["app.moneyfarm.com",513],["simpl.rent",514],["hubspot.com",515],["prodyna.com",[516,517,518,519]],["zutobi.com",[516,517,518,519]],["calm.com",[520,521]],["pubgesports.com",[522,523,524]],["outwrite.com",525],["sbermarket.ru",527],["atani.com",[528,529,530]],["croisieresendirect.com",531],["bgextras.co.uk",532],["sede.coruna.gal",533],["czech-server.cz",534],["hitech-gamer.com",535],["bialettikave.hu",[536,537,538]],["canalplus.com",[539,540,541]],["mader.bz.it",[542,543,544]],["supply.amazon.co.uk",545],["bhaptics.com",546],["cleverbot.com",547],["watchaut.film",548],["tuffaloy.com",549],["fanvue.com",549],["electronoobs.com",550],["xn--lkylen-vxa.se",551],["tiefenthaler-landtechnik.at",552],["tiefenthaler-landtechnik.ch",552],["tiefenthaler-landtechnik.de",552],["varma.fi",553],["vyos.io",554],["digimobil.es",[555,556]],["teenage.engineering",557],["merrell.pl",[558,821]],["converse.pl",558],["shop.wf-education.com",[558,821]],["werkenbijaswatson.nl",559],["converse.com",[560,561]],["buyandapply.nexus.org.uk",562],["img.ly",563],["halonen.fi",[563,595,596,597,598]],["carlson.fi",[563,595,596,597,598]],["cams.ashemaletube.com",[564,565]],["electronicacerler.com",[566,567,568]],["okpoznan.pl",[569,574]],["ielts.idp.com",570],["ielts.co.nz",570],["ielts.com.au",570],["einfach-einreichen.de",[571,572,573]],["endlesstools.io",575],["mbhszepkartya.hu",576],["casellimoveis.com.br",577],["embedplus.com",578],["e-file.pl",579],["sp215.info",580],["empik.com",581],["senda.pl",582],["united-camera.at",583],["befestigungsfuchs.de",583],["cut-tec.co.uk",584],["gaytimes.co.uk",585],["statisticsanddata.org",586],["hello.one",587],["paychex.com",588],["wildcat-koeln.de",589],["libraries.merton.gov.uk",[590,591]],["tommy.hr",[592,593]],["usit.uio.no",594],["demo-digital-twin.r-stahl.com",599],["la31devalladolid.com",[600,601]],["mx.com",602],["foxtrail.fjallraven.com",603],["dotwatcher.cc",604],["bazarchic.com",[605,606,607]],["seedrs.com",608],["mypensiontracker.co.uk",609],["praxisplan.at",[609,630]],["esimplus.me",610],["cineplanet.com.pe",611],["ecologi.com",612],["wamba.com",613],["eurac.edu",614],["akasaair.com",615],["rittal.com",616],["worstbassist.com",[617,618,619,620,621,622]],["zs-watch.com",623],["crown.com",624],["mesanalyses.fr",625],["teket.jp",626],["fish.shimano.com",[627,628,629]],["simsherpa.com",[631,632,633]],["translit.ru",634],["aruba.com",635],["aireuropa.com",636],["skfbearingselect.com",[637,638]],["scanrenovation.com",639],["ttela.se",640],["dominospizza.pl",641],["devagroup.pl",642],["secondsol.com",643],["angelifybeauty.com",644],["cotopaxi.com",645],["justjoin.it",646],["digibest.pt",647],["two-notes.com",648],["theverge.com",649],["daimant.co",650],["secularism.org.uk",651],["karriere-hamburg.de",652],["musicmap.info",653],["gasspisen.se",654],["medtube.pl",655],["medtube.es",655],["medtube.fr",655],["medtube.net",655],["standard.sk",656],["linmot.com",657],["larian.com",[657,947]],["s-court.me",657],["containerandpackaging.com",658],["top-yp.de",659],["termania.net",660],["account.nowpayments.io",661],["lc.paragon-software.com",662],["fizjobaza.pl",662],["leafly.com",663],["gigasport.at",664],["gigasport.de",664],["gigasport.ch",664],["velleahome.gr",665],["nicequest.com",666],["handelsbanken.no",667],["handelsbanken.com",667],["handelsbanken.co.uk",667],["handelsbanken.se",[667,749]],["handelsbanken.dk",667],["handelsbanken.fi",667],["ilarahealth.com",668],["songtradr.com",[669,931]],["logo.pt",[670,671]],["app.zasta.de",672],["softlist.com.ua",672],["flexwhere.co.uk",[672,673]],["flexwhere.de",[672,673]],["pricewise.nl",672],["getunleash.io",672],["dentmania.de",672],["free.navalny.com",672],["latoken.com",672],["campusbrno.cz",[675,676,677]],["secrid.com",678],["etsy.com",679],["careers.cloud.com",679],["blablacar.rs",680],["blablacar.ru",680],["blablacar.com.tr",680],["blablacar.com.ua",680],["blablacar.com.br",680],["seb.se",681],["sebgroup.com",681],["deps.dev",682],["buf.build",683],["starofservice.com",684],["ytcomment.kmcat.uk",685],["gmx.com",686],["gmx.fr",686],["karofilm.ru",687],["octopusenergy.it",688],["octopusenergy.es",[688,689]],["justanswer.es",690],["justanswer.de",690],["justanswer.com",690],["justanswer.co.uk",690],["citilink.ru",691],["huutokaupat.com",692],["kaggle.com",693],["emr.ch",[694,699]],["gem.cbc.ca",695],["pumatools.hu",696],["ici.tou.tv",697],["crunchyroll.com",698],["mayflex.com",700],["clipchamp.com",700],["gdemoideti.ru",700],["trouwenbijfletcher.nl",700],["fletcher.nl",700],["fletcherzakelijk.nl",700],["intermatic.com",700],["jusbrasil.com.br",701],["mobilevikings.be",702],["ebikelohr.de",703],["eurosender.com",704],["melectronics.ch",705],["guard.io",706],["nokportalen.se",707],["dokiliko.com",708],["valamis.com",[709,710,711]],["sverigesingenjorer.se",712],["shop.almawin.de",[713,714,715,752]],["zeitzurtrauer.de",716],["skaling.de",[717,718,719]],["bringmeister.de",720],["gdx.net",721],["clearblue.com",722],["drewag.de",[723,724,725]],["enso.de",[723,724,725]],["buidlbox.io",723],["helitransair.com",726],["more.com",727],["nwslsoccer.com",727],["watch.sonlifetv.com",728],["climatecentral.org",729],["resolution.de",730],["flagma.by",731],["eatsalad.com",732],["pacstall.dev",733],["web2.0calc.fr",734],["de-appletradein.likewize.com",735],["swissborg.com",736],["qwice.com",737],["canalpluskuchnia.pl",[738,739]],["uizard.io",740],["novayagazeta.eu",742],["kinopoisk.ru",743],["yandex.ru",743],["go.netia.pl",[744,745]],["polsatboxgo.pl",[744,745]],["ing.it",[746,747]],["ing.nl",748],["youcom.com.br",750],["rule34.paheal.net",751],["deep-shine.de",752],["shop.ac-zaun-center.de",752],["kellermann-online.com",752],["kletterkogel.de",752],["pnel.de",752],["korodrogerie.de",[752,754]],["der-puten-shop.de",752],["katapult-shop.de",752],["evocsports.com",752],["esm-computer.de",752],["calmwaters.de",752],["mellerud.de",752],["akustik-projekt.at",752],["vansprint.de",752],["0815.at",752],["0815.eu",752],["ojskate.com",752],["der-schweighofer.de",752],["tz-bedarf.de",752],["zeinpharma.de",752],["weicon.com",752],["dagvandewebshop.be",752],["thiele-tee.de",752],["carbox.de",752],["riapsport.de",752],["trendpet.de",752],["eheizung24.de",752],["seemueller.com",752],["vivande.de",752],["heidegrill.com",752],["gladiator-fightwear.com",752],["h-andreas.com",752],["pp-parts.com",752],["natuerlich-holzschuhe.de",752],["massivart.de",752],["malermeister-shop.de",752],["imping-confiserie.de",752],["lenox-trading.at",752],["cklenk.de",752],["catolet.de",752],["drinkitnow.de",752],["patisserie-m.de",752],["storm-proof.com",752],["balance-fahrradladen.de",752],["magicpos.shop",752],["zeinpharma.com",752],["sps-handel.net",752],["novagenics.com",752],["butterfly-circus.de",752],["holzhof24.de",752],["w6-wertarbeit.de",752],["fleurop.de",752],["leki.com",752],["extremeaudio.de",752],["taste-market.de",752],["delker-optik.de",752],["stuhl24-shop.de",752],["g-nestle.de",752],["alpine-hygiene.ch",752],["fluidmaster.it",752],["cordon.de",752],["belisse-beauty.de",752],["belisse-beauty.co.uk",752],["wpc-shop24.de",752],["liv.si",752],["maybach-luxury.com",752],["leiternprofi24.de",752],["hela-shop.eu",752],["hitado.de",752],["j-koenig.de",752],["gameseal.com",752],["armedangels.com",[752,828,829]],["bvk-beamtenversorgung.de",753],["hofer-kerzen.at",754],["dosenmatrosen.de",754],["karls-shop.de",755],["byggern.no",756],["donauauen.at",757],["woltair.cz",758],["rostics.ru",759],["hife.es",760],["lilcat.com",761],["hot.si",[762,763,764,765]],["crenolibre.fr",766],["monarchmoney.com",767],["e-pole.pl",768],["dopt.com",769],["keb-automation.com",770],["bonduelle.ru",771],["oxfordonlineenglish.com",772],["pccomponentes.fr",773],["pccomponentes.com",773],["pccomponentes.pt",773],["grants.at",774],["africa-uninet.at",774],["rqb.at",774],["youngscience.at",774],["oead.at",774],["innovationsstiftung-bildung.at",774],["etwinning.at",774],["arqa-vet.at",774],["zentrumfuercitizenscience.at",774],["vorstudienlehrgang.at",774],["erasmusplus.at",774],["jeger.pl",775],["bo.de",776],["thegamingwatcher.com",777],["norlysplay.dk",778],["plusujemy.pl",779],["asus.com.cn",[780,782]],["zentalk.asus.com",[780,782]],["mubi.com",781],["photospecialist.co.uk",783],["foto-gregor.de",783],["kamera-express.de",783],["kamera-express.be",783],["kamera-express.nl",783],["kamera-express.fr",783],["kamera-express.lu",783],["dhbbank.com",784],["dhbbank.de",784],["dhbbank.be",784],["dhbbank.nl",784],["login.ingbank.pl",785],["fabrykacukiernika.pl",[786,787]],["peaks.com",788],["3landesmuseen-braunschweig.de",789],["unifachbuch.de",[790,791,792]],["playlumi.com",[793,794,795]],["chatfuel.com",796],["studio3t.com",[797,798,799,800]],["realgap.co.uk",[801,802,803,804]],["hotelborgia.com",[805,806]],["sweet24.de",807],["zwembaddekouter.be",808],["flixclassic.pl",809],["jobtoday.com",810],["deltatre.com",[811,812,826]],["withings.com",[813,814,815]],["blista.de",[816,817]],["hashop.nl",818],["gift.be",[819,820]],["elevator.de",821],["foryouehealth.de",821],["animaze.us",821],["penn-elcom.com",821],["curantus.de",821],["mtbmarket.de",821],["spanienweinonline.ch",821],["novap.fr",821],["bizkaia.eus",[822,823,824]],["sinparty.com",825],["mantel.com",827],["e-dojus.lv",830],["burnesspaull.com",831],["oncosur.org",832],["photobooth.online",833],["epidemicsound.com",834],["ryanair.com",835],["refurbished.at",[836,837,838]],["refurbished.nl",[836,837,838]],["refurbished.be",[836,837,838]],["refurbishedstore.de",[836,837,838]],["bayernportal.de",[839,840,841]],["ayudatpymes.com",842],["zipjob.com",842],["shoutcast.com",842],["plastischechirurgie-muenchen.info",843],["bonn.sitzung-online.de",844],["depop.com",[845,846,847]],["thenounproject.com",848],["pricehubble.com",849],["ilmotorsport.de",850],["karate.com",851],["psbank.ru",851],["myriad.social",851],["exeedme.com",851],["dndbeyond.com",852],["news.samsung.com",853],["tibber.com",854],["aqua-store.fr",855],["voila.ca",856],["anastore.com",857],["app.arzt-direkt.de",858],["dasfutterhaus.at",859],["e-pity.pl",860],["fillup.pl",861],["dailymotion.com",862],["barcawelt.de",863],["lueneburger-heide.de",864],["polizei.bayern.de",[865,867]],["ourworldofpixels.com",866],["jku.at",868],["matkahuolto.fi",869],["backmarket.de",[870,871,872]],["backmarket.co.uk",[870,871,872]],["backmarket.es",[870,871,872]],["backmarket.be",[870,871,872]],["backmarket.at",[870,871,872]],["backmarket.fr",[870,871,872]],["backmarket.gr",[870,871,872]],["backmarket.fi",[870,871,872]],["backmarket.ie",[870,871,872]],["backmarket.it",[870,871,872]],["backmarket.nl",[870,871,872]],["backmarket.pt",[870,871,872]],["backmarket.se",[870,871,872]],["backmarket.sk",[870,871,872]],["backmarket.com",[870,871,872]],["book-n-drive.de",874],["cotswoldoutdoor.com",875],["cotswoldoutdoor.ie",875],["cam.start.canon",876],["usnews.com",877],["researchaffiliates.com",878],["singkinderlieder.de",879],["stiegeler.com",880],["ba.com",[883,884,885,886,887,888,889]],["britishairways.com",[883,884,885,886,887,888,889]],["cineman.pl",[890,891,892]],["tv-trwam.pl",[890,891,892,893]],["qatarairways.com",[894,895,896,897,898]],["wedding.pl",899],["vivaldi.com",900],["emuia1.gugik.gov.pl",901],["nike.com",902],["adidas.at",903],["adidas.be",903],["adidas.ca",903],["adidas.ch",903],["adidas.cl",903],["adidas.co",903],["adidas.co.in",903],["adidas.co.kr",903],["adidas.co.nz",903],["adidas.co.th",903],["adidas.co.uk",903],["adidas.com",903],["adidas.com.ar",903],["adidas.com.au",903],["adidas.com.br",903],["adidas.com.my",903],["adidas.com.ph",903],["adidas.com.vn",903],["adidas.cz",903],["adidas.de",903],["adidas.dk",903],["adidas.es",903],["adidas.fi",903],["adidas.fr",903],["adidas.gr",903],["adidas.ie",903],["adidas.it",903],["adidas.mx",903],["adidas.nl",903],["adidas.no",903],["adidas.pe",903],["adidas.pl",903],["adidas.pt",903],["adidas.ru",903],["adidas.se",903],["adidas.sk",903],["colourbox.com",904],["ebilet.pl",905],["myeventeo.com",906],["snap.com",907],["louwman.nl",[908,909]],["ratemyprofessors.com",910],["filen.io",911],["leotrippi.com",912],["restaurantclub.pl",912],["context.news",912],["queisser.de",912],["grandprixradio.dk",[913,914,915,916,917]],["grandprixradio.nl",[913,914,915,916,917]],["grandprixradio.be",[913,914,915,916,917]],["businessclass.com",918],["quantamagazine.org",919],["hellotv.nl",920],["jisc.ac.uk",921],["lasestrellas.tv",922],["xn--digitaler-notenstnder-m2b.com",923],["schoonmaakgroothandelemmen.nl",923],["nanuko.de",923],["hair-body-24.de",923],["shopforyou47.de",923],["kreativverliebt.de",923],["anderweltverlag.com",923],["octavio-shop.com",923],["forcetools-kepmar.eu",923],["fantecshop.de",923],["hexen-werkstatt.shop",923],["shop-naturstrom.de",923],["biona-shop.de",923],["camokoenig.de",923],["bikepro.de",923],["kaffeediscount.com",923],["vamos-skateshop.com",923],["holland-shop.com",923],["avonika.com",923],["royal-oak.org",924],["hurton.pl",925],["officesuite.com",926],["fups.com",[927,932]],["kevin.eu",[928,929,930]],["scienceopen.com",933],["moebel-mahler-siebenlehn.de",[934,935]],["calendly.com",936],["batesenvironmental.co.uk",[937,938]],["ubereats.com",939],["101internet.ru",940],["bein.com",941],["beinsports.com",941],["figshare.com",942],["bitso.com",943],["gallmeister.fr",944],["eco-toimistotarvikkeet.fi",945],["proficient.fi",945],["developer.ing.com",946],["webtrack.dhlglobalmail.com",948],["webtrack.dhlecs.com",948],["ehealth.gov.gr",949],["calvinklein.se",[950,951,952]],["calvinklein.fi",[950,951,952]],["calvinklein.sk",[950,951,952]],["calvinklein.si",[950,951,952]],["calvinklein.ch",[950,951,952]],["calvinklein.ru",[950,951,952]],["calvinklein.com",[950,951,952]],["calvinklein.pt",[950,951,952]],["calvinklein.pl",[950,951,952]],["calvinklein.at",[950,951,952]],["calvinklein.nl",[950,951,952]],["calvinklein.hu",[950,951,952]],["calvinklein.lu",[950,951,952]],["calvinklein.lt",[950,951,952]],["calvinklein.lv",[950,951,952]],["calvinklein.it",[950,951,952]],["calvinklein.ie",[950,951,952]],["calvinklein.hr",[950,951,952]],["calvinklein.fr",[950,951,952]],["calvinklein.es",[950,951,952]],["calvinklein.ee",[950,951,952]],["calvinklein.de",[950,951,952]],["calvinklein.dk",[950,951,952]],["calvinklein.cz",[950,951,952]],["calvinklein.bg",[950,951,952]],["calvinklein.be",[950,951,952]],["calvinklein.co.uk",[950,951,952]],["ofdb.de",953],["dtksoft.com",954],["serverstoplist.com",955],["truecaller.com",956],["fruugo.fi",960],["ukbrewerytours.com",961],["sk-nic.sk",961],["worldcupchampionships.com",961],["arturofuente.com",[961,963,964]],["protos.com",[961,963,964]],["timhortons.co.th",[961,962,963,965,967,968]],["toyota.co.uk",[961,962,963,966,967,968]],["businessaccountingbasics.co.uk",[961,962,963,965,967,968]],["flickr.org",[961,962,963,965,967,968]],["espacocasa.com",961],["altraeta.it",961],["centrooceano.it",961],["allstoresdigital.com",961],["cultarm3d.de",961],["soulbounce.com",961],["fluidtopics.com",961],["uvetgbt.com",961],["malcorentacar.com",961],["emondo.de",961],["maspero.it",961],["kelkay.com",961],["underground-england.com",961],["vert.eco",961],["turcolegal.com",961],["magnet4blogging.net",961],["moovly.com",961],["automationafrica.co.za",961],["jornaldoalgarve.pt",961],["keravanenergia.fi",961],["kuopas.fi",961],["frag-machiavelli.de",961],["healthera.co.uk",961],["mobeleader.com",961],["powerup-gaming.com",961],["developer-blog.net",961],["medical.edu.mt",961],["deh.mt",961],["bluebell-railway.com",961],["ribescasals.com",961],["javea.com",961],["chinaimportal.com",961],["inds.co.uk",961],["raoul-follereau.org",961],["serramenti-milano.it",961],["cosasdemujer.com",961],["luz-blanca.info",961],["cosasdeviajes.com",961],["safehaven.io",961],["havocpoint.it",961],["motofocus.pl",961],["nomanssky.com",961],["drei-franken-info.de",961],["clausnehring.com",961],["alttab.net",961],["kinderleicht.berlin",961],["kiakkoradio.fi",961],["cosasdelcaribe.es",961],["de-sjove-jokes.dk",961],["serverprofis.de",961],["biographyonline.net",961],["iziconfort.com",961],["sportinnederland.com",961],["natureatblog.com",961],["wtsenergy.com",961],["cosasdesalud.es",961],["internetpasoapaso.com",961],["zurzeit.at",961],["contaspoupanca.pt",961],["steamdeckhq.com",[961,962,963,965,967,968]],["ipouritinc.com",[961,963,965]],["hemglass.se",[961,963,965,967,968]],["sumsub.com",[961,962,963]],["atman.pl",[961,962,963]],["fabriziovanmarciano.com",[961,962,963]],["nationalrail.com",[961,962,963]],["eett.gr",[961,962,963]],["funkypotato.com",[961,962,963]],["equalexchange.co.uk",[961,962,963]],["swnsdigital.com",[961,962,963]],["gogolf.fi",[961,965]],["hanse-haus-greifswald.de",961],["tampereenratikka.fi",[961,963,969,970]],["kymppikatsastus.fi",[963,967,1017,1018]],["santander.rewardgateway.co.uk",[971,972]],["brasiltec.ind.br",973],["xhaccess.com",973],["seexh.com",973],["valuexh.life",973],["xham.live",973],["xhamster.com",973],["xhamster.desi",973],["xhamster1.desi",973],["xhamster19.com",973],["xhamster2.com",973],["xhamster3.com",973],["xhamster42.desi",973],["xhamsterlive.com",973],["xhchannel.com",973],["xhchannel2.com",973],["xhdate.world",973],["xhopen.com",973],["xhspot.com",973],["xhtab4.com",973],["xhwebsite5.com",973],["xhwide5.com",973],["doka.com",[974,975,976]],["abi.de",[977,978]],["studienwahl.de",[977,978]],["journal.hr",[979,980,981,982]],["howstuffworks.com",983],["stickypassword.com",[984,985,986]],["conversion-rate-experts.com",[987,988]],["merkur.si",[989,990,991]],["petitionenligne.com",[992,993]],["petitionenligne.be",[992,993]],["petitionenligne.fr",[992,993]],["petitionenligne.re",[992,993]],["petitionenligne.ch",[992,993]],["skrivunder.net",[992,993]],["petitiononline.uk",[992,993]],["petitions.nz",[992,993]],["petizioni.com",[992,993]],["peticao.online",[992,993]],["skrivunder.com",[992,993]],["peticiones.ar",[992,993]],["petities.com",[992,993]],["petitionen.com",[992,993]],["petice.com",[992,993]],["opprop.net",[992,993]],["peticiok.com",[992,993]],["peticiones.net",[992,993]],["peticion.es",[992,993]],["peticiones.pe",[992,993]],["peticiones.mx",[992,993]],["peticiones.cl",[992,993]],["peticije.online",[992,993]],["peticiones.co",[992,993]],["mediathek.lfv-bayern.de",994],["aluypvc.es",[995,996,997]],["pracuj.pl",[998,999,1000,1001,1002]],["vki.at",1004],["konsument.at",1004],["chollometro.com",1005],["dealabs.com",1005],["hotukdeals.com",1005],["pepper.it",1005],["pepper.pl",1005],["preisjaeger.at",1005],["mydealz.de",1005],["220.lv",[1006,1007]],["pigu.lt",[1006,1007]],["kaup24.ee",[1006,1007]],["hansapost.ee",[1006,1007]],["hobbyhall.fi",[1006,1007]],["direct.travelinsurance.tescobank.com",[1010,1011,1012,1013,1014,1015,1016,1017]],["mediaite.com",1019],["easyfind.ch",[1020,1021]],["e-shop.leonidas.com",[1022,1023]],["lastmile.lt",1024],["veriff.com",1025],["tvpworld.com",1026],["vm.co.mz",1027],["gamearena.pl",1028],["constantin.film",[1029,1030,1031]],["notion.so",1032],["omgevingsloketinzage.omgeving.vlaanderen.be",[1033,1034]],["primor.eu",1035],["tameteo.com",1036],["tempo.pt",1036],["yourweather.co.uk",1036],["meteored.cl",1036],["meteored.mx",1036],["tempo.com",1036],["ilmeteo.net",1036],["meteored.com.ar",1036],["daswetter.com",1036],["myprivacy.dpgmedia.nl",1037],["myprivacy.dpgmediagroup.net",1037],["algarvevacation.net",1038],["3sat.de",1039],["oxxio.nl",[1040,1041]],["butterflyshop.dk",[1042,1043,1044]],["praxis.nl",1045],["brico.be",1045],["kent.gov.uk",[1046,1047]],["pohjanmaanhyvinvointi.fi",1048],["maanmittauslaitos.fi",1049]]);

const entitiesMap = new Map([["airchina",[40,41,42]],["top4mobile",[75,76]]]);

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
