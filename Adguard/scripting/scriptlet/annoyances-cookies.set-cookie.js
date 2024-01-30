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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["tachyon-accepted-cookie-notice","true"],["cookieChoice","0"],["PostAnalytics","0"],["gdpr-google-analytics","false"],["forced-cookies-modal","2"],["cookiebar","1"],["cookieconsent_status","true"],["longines-cookiesstatus-analytics","false"],["longines-cookiesstatus-functional","false"],["longines-cookiesstatus-necessary","true"],["longines-cookiesstatus-social","false"],["pz_cookie_consent","true"],["_cb","1","","reload","1"],["gatsby-gdpr-google-tagmanager","false"],["consent-status","1"],["HANA-RGPD","accepted"],["cookie-optin","true"],["msg_cookie_CEX","true"],["OptanonAlertBoxClosed","ok"],["OptanonAlertBoxClosed","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","No"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["cookie-agreed","0"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["accept_cookies","accepted"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["cookieConsent","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-non-necessary","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-analytics","no"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["genovaPrivacyOptions","1","","reload","1"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["cookie_consent_given","true"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference","1","","reload","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["cookieconsent","true"],["epole_cookies_settings","true"],["dopt_consent","false"],["privacy-statement-accepted","true","","reload","1"],["cookie_locales","true"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["viewed_cookie_policy","no"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"],["DDCookiePolicy-consent-functional","false"],["DDCookiePolicy-consent-tracking","false"],["DDCookiePolicy-consent-statistics","false"],["CookieNotificationSeen","1","","reload","1"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["m.twitch.tv",4],["omega-nuernberg.servicebund.com",5],["eboo.lu",6],["twomates.de",7],["frisco.pl",8],["tyleenslang.nl",9],["schrikdraad.net",9],["kruiwagen.net",9],["pvcvoordeel.nl",9],["pvcbuis.com",9],["drainagebuizen.nl",9],["likewise.com",10],["longines.com",[11,12,13,14]],["vater-it.de",15],["biano.hu",16],["quebueno.es",17],["nadia.gov.gr",18],["hana-book.fr",19],["kzvb.de",20],["correosexpress.com",21],["cexpr.es",21],["rte.ie",22],["smart.com",23],["gry.pl",23],["gamesgames.com",23],["games.co.uk",23],["jetztspielen.de",23],["ourgames.ru",23],["permainan.co.id",23],["gioco.it",23],["jeux.fr",23],["juegos.com",23],["ojogos.com.br",23],["oyunskor.com",23],["spela.se",23],["spelletjes.nl",23],["agame.com",23],["spielen.com",23],["flashgames.ru",23],["games.co.id",23],["giochi.it",23],["jeu.fr",23],["spel.nl",23],["sartor-stoffe.de",24],["rockpoint.cz",24],["rockpoint.sk",24],["parfum-zentrum.de",24],["candy-store.cz",24],["tridge.com",25],["asus.com",[26,27]],["drinksking.sk",28],["neuhauschocolates.com",29],["commandsuite.it",30],["oktea.tw",31],["bafin.de",32],["materna.de",32],["bamf.de",32],["tenvinilo-argentina.com",[33,34]],["eikaforsikring.no",[35,36]],["eurowings.com",[37,39,40]],["seventhgeneration.com",38],["press.princeton.edu",38],["newpharma.be",[41,42,43]],["newpharma.fr",[41,42,43]],["newpharma.de",[41,42,43]],["newpharma.at",[41,42,43]],["newpharma.nl",[41,42,43]],["kapoorwatch.com",44],["paf.se",45],["citibankonline.pl",45],["thw.de",46],["bafa.de",46],["bka.de",46],["bmbf.de",46],["weather.com",47],["bolist.se",[48,49]],["project529.com",49],["evivanlanschot.nl",50],["prenatal.nl",51],["onnibus.com",[51,674,675,676]],["kyoceradocumentsolutions.us",[51,710,711]],["kyoceradocumentsolutions.ch",[51,710,711]],["kyoceradocumentsolutions.co.uk",[51,710,711]],["kyoceradocumentsolutions.de",[51,710,711]],["kyoceradocumentsolutions.es",[51,710,711]],["kyoceradocumentsolutions.eu",[51,710,711]],["kyoceradocumentsolutions.fr",[51,710,711]],["kyoceradocumentsolutions.it",[51,710,711]],["kyoceradocumentsolutions.ru",[51,710,711]],["kyoceradocumentsolutions.mx",[51,710,711]],["kyoceradocumentsolutions.cl",[51,710,711]],["kyoceradocumentsolutions.com.br",[51,710,711]],["wagner-tuning.com",[52,53,54,55]],["waitrosecellar.com",[56,57,58,59]],["waitrose.com",[56,402]],["kvk.nl",[60,61,62]],["macfarlanes.com",63],["pole-emploi.fr",64],["gardenmediaguild.co.uk",65],["samplerite.com",66],["samplerite.cn",66],["sororedit.com",67],["blukit.com.br",68],["biegnaszczyt.pl",69],["staff-gallery.com",70],["itv.com",71],["dvag.de",72],["premierinn.com",[73,74,75,76]],["whitbreadinns.co.uk",[73,74,75,76]],["barandblock.co.uk",[73,74,75,76]],["tabletable.co.uk",[73,74,75,76]],["brewersfayre.co.uk",[73,74,75,76]],["beefeater.co.uk",[73,74,75,76]],["allstarssportsbars.co.uk",[77,78]],["babiesrus.ca",79],["toysrus.ca",79],["roomsandspaces.ca",79],["athletic-club.eus",[80,81,82]],["wattoo.dk",83],["wattoo.no",83],["texthelp.com",[84,85]],["courierexchange.co.uk",[86,87,88]],["haulageexchange.co.uk",[86,87,88]],["powerball.com",89],["tlaciarik.sk",89],["tiskarik.cz",89],["sseriga.edu",[90,91]],["rt.com",92],["swrng.de",93],["crfop.gdos.gov.pl",94],["nurgutes.de",95],["kpcen-torun.edu.pl",96],["opintopolku.fi",97],["debenhams.com",98],["archiwumalle.pl",99],["konicaminolta.ca",100],["konicaminolta.us",100],["deutschebank-dbdirect.com",[101,102,103]],["dbonline.deutsche-bank.es",[101,102,103]],["deutsche-bank.es",[101,102,103]],["hipotecaonline.db.com",104],["kangasalansanomat.fi",105],["eif.org",106],["tunnelmb.net",106],["sugi-net.jp",107],["understandingsociety.ac.uk",108],["electroprecio.com",109],["autohero.com",109],["leibniz.com",109],["computerbase.de",[109,707]],["bargaintown.ie",110],["tui.nl",111],["doppelmayr.com",112],["case-score.com",[113,114]],["cote.co.uk",115],["finimize.com",115],["rtu.lv",116],["sysdream.com",117],["cinemarkca.com",118],["wedding.pl",119],["neander-zahn.de",120],["theadelphileeds.co.uk",121],["tobycarvery.co.uk",121],["carsupermarket.com",121],["viajesatodotren.com",122],["ticketingcine.fr",123],["agenziavista.it",124],["e-chladiva.cz",124],["bitecode.dev",125],["mjob.si",[126,127,128]],["airportrentacar.gr",129],["plos.org",130],["autohaus24.de",131],["sixt-neuwagen.de",131],["gadis.es",[132,133]],["dom.ru",133],["ford-kimmerle-reutlingen.de",134],["autohaus-reitermayer.de",134],["autohaus-diefenbach-waldbrunn.de",134],["autohaus-diefenbach.de",134],["autohaus-musberg.de",134],["ford-ah-im-hunsrueck-simmern.de",134],["ford-arndt-goerlitz.de",134],["ford-autogalerie-alfeld.de",134],["ford-bacher-schrobenhausen.de",134],["ford-bathauer-bad-harzburg.de",134],["ford-behrend-waren.de",134],["ford-bergland-frankfurt-oder.de",134],["ford-bergland-wipperfuerth.de",134],["ford-besico-glauchau.de",134],["ford-besico-nuernberg.de",134],["ford-bischoff-neumuenster.de",134],["ford-bodach-borgentreich.de",134],["ford-bunk-saarbruecken.de",134],["ford-bunk-voelklingen.de",134],["ford-busch-kirchberg.de",134],["ford-diermeier-muenchen.de",134],["ford-dinnebier-leipzig.de",134],["ford-duennes-regensburg.de",134],["ford-fischer-bochum.de",134],["ford-fischer-muenster.de",134],["ford-foerster-koblenz.de",134],["ford-fuchs-uffenheim.de",134],["ford-geberzahn-koeln.de",134],["ford-gerstmann-duesseldorf.de",134],["ford-haefner-und-strunk-kassel.de",134],["ford-hartmann-kempten.de",134],["ford-hartmann-rastatt.de",134],["ford-hatzner-karlsruhe.de",134],["ford-heine-hoexter.de",134],["ford-hentschel-hildesheim.de",134],["ford-hessengarage-dreieich.de",134],["ford-hessengarage-frankfurt.de",134],["ford-hga-windeck.de",134],["ford-hommert-coburg.de",134],["ford-horstmann-rastede.de",134],["ford-janssen-sonsbeck.de",134],["ford-jochem-stingbert.de",134],["ford-jungmann-wuppertal.de",134],["ford-kestel-marktzeuln.de",134],["ford-klaiber-bad-friedrichshall.de",134],["ford-koenig-eschwege.de",134],["ford-kohlhoff-mannheim.de",134],["ford-kt-automobile-coesfeld.de",134],["ford-lackermann-wesel.de",134],["ford-ludewig-delligsen.de",134],["ford-maiwald-linsengericht.de",134],["ford-mertens-beckum.de",134],["ford-meyer-bad-oeynhausen.de",134],["ford-mgs-bayreuth.de",134],["ford-mgs-radebeul.de",134],["ford-muecke-berlin.de",134],["ford-norren-weissenthurm.de",134],["ford-nrw-garage-duesseldorf.de",134],["ford-nrw-garage-handweiser.de",134],["ford-nuding-remshalden.de",134],["ford-ohm-rendsburg.de",134],["ford-reinicke-muecheln.de",134],["ford-rennig.de",134],["ford-roerentrop-luenen.de",134],["ford-schankola-dudweiler.de",134],["ford-sg-goeppingen.de",134],["ford-sg-leonberg.de",134],["ford-sg-neu-ulm.de",134],["ford-sg-pforzheim.de",134],["ford-sg-waiblingen.de",134],["ford-storz-st-georgen.de",134],["ford-strunk-koeln.de",134],["ford-tobaben-hamburg.de",134],["ford-toenjes-zetel.de",134],["ford-wagner-mayen.de",134],["ford-wahl-fritzlar.de",134],["ford-wahl-siegen.de",134],["ford-weege-bad-salzuflen.de",134],["ford-westhoff-hamm.de",134],["ford-wieland-hasbergen.de",134],["renault-autocenterprignitz-pritzwalk.de",134],["renault-spenrath-juelich.de",134],["vitalllit.com",135],["fincaparera.com",135],["dbnetbcn.com",135],["viba.barcelona",135],["anafaustinoatelier.com",135],["lamparasherrero.com",135],["calteixidor.cat",135],["argentos.barcelona",135],["anmarlube.com",135],["anynouxines.barcelona",135],["crearunapaginaweb.cat",135],["cualesmiip.com",135],["porndoe.com",[136,137,138]],["thinkingaustralia.com",139],["elrow.com",140],["ownit.se",141],["velo-antwerpen.be",[142,143]],["wwnorton.com",144],["pc-canada.com",145],["mullgs.se",146],["1a-sehen.de",147],["anker.com",148],["feature.fm",149],["comte.com",150],["baltic-watches.com",151],["np-brijuni.hr",151],["vilgain.com",151],["tradingview.com",152],["wevolver.com",153],["experienciasfree.com",154],["freemans.com",155],["kivikangas.fi",156],["melkkobrew.fi",156],["kh.hu",[157,158,159]],["aplgo.com",160],["securityconference.org",161],["aha.or.at",[162,165]],["fantasyfitnessing.com",163],["chocolateemporium.com",164],["account.samsung.com",166],["crushwineco.com",167],["levi.pt",168],["fertagus.pt",169],["smiggle.co.uk",170],["ubisoft.com",[171,172,173,174]],["store.ubisoft.com",[171,174,610,611]],["thulb.uni-jena.de",175],["splityourticket.co.uk",176],["eramba.org",177],["openai.com",178],["kupbilecik.com",[179,180]],["kupbilecik.de",[179,180]],["kupbilecik.pl",[179,180]],["shopilya.com",181],["arera.it",182],["haustier-berater.de",182],["hfm-frankfurt.de",182],["zoommer.ge",183],["studentapan.se",184],["petcity.lt",[185,186,187,188]],["tobroco.com",[189,193]],["tobroco.nl",[189,193]],["tobroco-giant.com",[189,193]],["geosfreiberg.de",[190,191]],["eapvic.org",192],["bassolsenergia.com",192],["bammusic.com",[194,196,197]],["green-24.de",195],["phish-test.de",198],["bokadirekt.se",199],["ford.lt",200],["ford.pt",200],["ford.fr",200],["ford.de",200],["ford.dk",200],["ford.pl",200],["ford.se",200],["ford.nl",200],["ford.no",200],["ford.fi",200],["ford.gr",200],["ford.it",200],["data-media.gr",201],["e-food.gr",[202,203]],["bvmed.de",204],["babyshop.com",[205,206,207]],["griffbereit24.de",208],["checkwx.com",209],["calendardate.com",210],["wefashion.ch",211],["wefashion.fr",211],["wefashion.lu",211],["wefashion.be",211],["wefashion.de",211],["wefashion.nl",211],["brettspiel-angebote.de",[212,213]],["nio.com",214],["kancelarskepotreby.net",[215,216,217]],["segment-anything.com",218],["sketch.metademolab.com",219],["cambridgebs.co.uk",220],["freizeitbad-greifswald.de",221],["giuseppezanotti.com",[222,223,224]],["xcen.se",224],["biggreenegg.co.uk",225],["skihuette-oberbeuren.de",[226,227,228]],["pwsweather.com",229],["xfree.com",230],["theweathernetwork.com",[231,232]],["monese.com",[233,234,235]],["assos.com",233],["helmut-fischer.com",236],["myscience.org",237],["7-eleven.com",238],["airwallex.com",239],["streema.com",240],["gov.lv",241],["tise.com",242],["codecamps.com",243],["avell.com.br",244],["moneyfarm.com",245],["app.moneyfarm.com",245],["simpl.rent",246],["hubspot.com",247],["prodyna.com",[248,249,250,251]],["zutobi.com",[248,249,250,251]],["calm.com",[252,253]],["pubgesports.com",[254,255,256]],["outwrite.com",257],["sberbank.com",258],["sbermarket.ru",259],["bgextras.co.uk",260],["sede.coruna.gal",261],["czech-server.cz",262],["hitech-gamer.com",263],["bialettikave.hu",[264,265,266]],["canalplus.com",[267,268,269]],["mader.bz.it",[270,271,272]],["supply.amazon.co.uk",273],["bhaptics.com",274],["cleverbot.com",275],["watchaut.film",276],["tuffaloy.com",277],["fanvue.com",277],["electronoobs.com",278],["xn--lkylen-vxa.se",279],["tiefenthaler-landtechnik.at",280],["tiefenthaler-landtechnik.ch",280],["tiefenthaler-landtechnik.de",280],["huisartsenpraktijkdoorn.nl",281],["varma.fi",282],["vyos.io",283],["digimobil.es",[284,285]],["teenage.engineering",286],["merrell.pl",[287,555]],["converse.pl",287],["shop.wf-education.com",[287,555]],["werkenbijaswatson.nl",288],["converse.com",[289,290]],["buyandapply.nexus.org.uk",291],["img.ly",292],["halonen.fi",[292,320,321,322,323]],["carlson.fi",[292,320,321,322,323]],["cams.ashemaletube.com",[293,294]],["electronicacerler.com",[295,296,297]],["okpoznan.pl",[298,300]],["ielts.idp.com",299],["endlesstools.io",301],["thehacker.recipes",302],["mbhszepkartya.hu",303],["casellimoveis.com.br",304],["embedplus.com",305],["e-file.pl",306],["sp215.info",307],["empik.com",308],["senda.pl",309],["befestigungsfuchs.de",310],["cut-tec.co.uk",311],["gaytimes.co.uk",312],["hello.one",313],["wildcat-koeln.de",314],["libraries.merton.gov.uk",[315,316]],["tommy.hr",[317,318]],["usit.uio.no",319],["demo-digital-twin.r-stahl.com",324],["la31devalladolid.com",[325,326]],["mx.com",327],["foxtrail.fjallraven.com",328],["dotwatcher.cc",329],["bazarchic.com",[330,331,332]],["seedrs.com",333],["mypensiontracker.co.uk",334],["praxisplan.at",[334,357]],["endclothing.com",335],["esimplus.me",336],["cineplanet.com.pe",337],["ecologi.com",338],["wamba.com",339],["eurac.edu",340],["akasaair.com",341],["rittal.com",342],["wizards.com",343],["worstbassist.com",[344,345,346,347,348,349]],["zs-watch.com",350],["crown.com",351],["mesanalyses.fr",352],["teket.jp",353],["fish.shimano.com",[354,355,356]],["simsherpa.com",[358,359,360]],["translit.ru",361],["aruba.com",362],["aireuropa.com",363],["skfbearingselect.com",[364,365]],["scanrenovation.com",366],["ttela.se",367],["dominospizza.pl",368],["devagroup.pl",369],["hintaopas.fi",370],["ledenicheur.fr",370],["prisjagt.dk",370],["prisjakt.no",370],["prisjakt.nu",370],["pricespy.co.uk",370],["pricespy.co.nz",370],["horecaworld.biz",371],["horecaworld.be",371],["secondsol.com",371],["angelifybeauty.com",372],["cotopaxi.com",373],["kaluga.hh.ru",374],["justjoin.it",375],["digibest.pt",376],["two-notes.com",377],["theverge.com",378],["daimant.co",379],["secularism.org.uk",380],["karriere-hamburg.de",381],["musicmap.info",382],["gasspisen.se",383],["medtube.pl",384],["medtube.es",384],["medtube.fr",384],["medtube.net",384],["standard.sk",385],["linmot.com",386],["larian.com",[386,662]],["containerandpackaging.com",387],["top-yp.de",388],["termania.net",389],["swisscard.ch",390],["account.nowpayments.io",391],["fizjobaza.pl",392],["gigasport.at",393],["gigasport.de",393],["gigasport.ch",393],["velleahome.gr",394],["nicequest.com",395],["handelsbanken.no",396],["handelsbanken.com",396],["handelsbanken.co.uk",396],["handelsbanken.se",[396,484]],["handelsbanken.dk",396],["handelsbanken.fi",396],["songtradr.com",[397,645]],["logo.pt",[398,399]],["flexwhere.co.uk",[400,401]],["flexwhere.de",[400,401]],["pricewise.nl",400],["getunleash.io",400],["dentmania.de",400],["free.navalny.com",400],["latoken.com",400],["campusbrno.cz",[403,404,405]],["secrid.com",406],["etsy.com",407],["seb.se",408],["sebgroup.com",408],["deps.dev",409],["buf.build",410],["starofservice.com",411],["ytcomment.kmcat.uk",412],["gmx.com",413],["gmx.fr",413],["karofilm.ru",414],["octopusenergy.it",415],["octopusenergy.es",[415,416]],["justanswer.es",417],["justanswer.de",417],["justanswer.com",417],["justanswer.co.uk",417],["citilink.ru",418],["huutokaupat.com",419],["kaggle.com",420],["emr.ch",[421,426]],["gem.cbc.ca",422],["pumatools.hu",423],["ici.tou.tv",424],["crunchyroll.com",425],["mayflex.com",427],["clipchamp.com",427],["trouwenbijfletcher.nl",427],["fletcher.nl",427],["fletcherzakelijk.nl",427],["intermatic.com",427],["ebikelohr.de",428],["eurosender.com",429],["melectronics.ch",430],["guard.io",431],["schrottpreis.org",432],["nokportalen.se",433],["dokiliko.com",434],["valamis.com",[435,436,437]],["sverigesingenjorer.se",438],["shop.almawin.de",[439,440,441,487]],["textshuttle.com",442],["zeitzurtrauer.de",443],["steamdeckhq.com",[444,445,446,447,448,449,450]],["sumsub.com",[444,445,446]],["atman.pl",[444,445,446]],["fabriziovanmarciano.com",[444,445,446]],["nationalrail.com",[444,445,446]],["eett.gr",[444,445,446]],["funkypotato.com",[444,445,446]],["equalexchange.co.uk",[444,445,446]],["swnsdigital.com",[444,445,446]],["hemglass.se",[445,446,447,449,450]],["tampereenratikka.fi",[445,671,672,673]],["kymppikatsastus.fi",[445,446,450,712]],["ipouritinc.com",[446,447,448]],["gogolf.fi",[446,447]],["hanse-haus-greifswald.de",446],["skaling.de",[451,452,453]],["bringmeister.de",454],["gdx.net",455],["clearblue.com",456],["drewag.de",[457,458,459]],["enso.de",[457,458,459]],["buidlbox.io",457],["helitransair.com",460],["more.com",461],["nwslsoccer.com",461],["climatecentral.org",462],["resolution.de",463],["flagma.by",464],["eatsalad.com",465],["pacstall.dev",466],["web2.0calc.fr",467],["de-appletradein.likewize.com",468],["swissborg.com",469],["qwice.com",470],["canalpluskuchnia.pl",[471,472]],["uizard.io",473],["stmas.bayern.de",[474,477]],["novayagazeta.eu",475],["kinopoisk.ru",476],["yandex.ru",476],["go.netia.pl",[478,480]],["polsatboxgo.pl",[478,480]],["wst.tv",479],["ing.it",[481,482]],["ing.nl",483],["youcom.com.br",485],["rule34.paheal.net",486],["pnel.de",487],["korodrogerie.de",487],["der-puten-shop.de",487],["katapult-shop.de",487],["evocsports.com",487],["esm-computer.de",487],["calmwaters.de",487],["mellerud.de",487],["akustik-projekt.at",487],["vansprint.de",487],["0815.at",487],["0815.eu",487],["ojskate.com",487],["der-schweighofer.de",487],["tz-bedarf.de",487],["zeinpharma.de",487],["weicon.com",487],["dagvandewebshop.be",487],["thiele-tee.de",487],["carbox.de",487],["riapsport.de",487],["trendpet.de",487],["eheizung24.de",487],["seemueller.com",487],["vivande.de",487],["heidegrill.com",487],["gladiator-fightwear.com",487],["h-andreas.com",487],["pp-parts.com",487],["natuerlich-holzschuhe.de",487],["massivart.de",487],["malermeister-shop.de",487],["imping-confiserie.de",487],["lenox-trading.at",487],["cklenk.de",487],["catolet.de",487],["drinkitnow.de",487],["patisserie-m.de",487],["storm-proof.com",487],["balance-fahrradladen.de",487],["magicpos.shop",487],["zeinpharma.com",487],["sps-handel.net",487],["novagenics.com",487],["butterfly-circus.de",487],["holzhof24.de",487],["w6-wertarbeit.de",487],["fleurop.de",487],["leki.com",487],["extremeaudio.de",487],["taste-market.de",487],["delker-optik.de",487],["stuhl24-shop.de",487],["g-nestle.de",487],["alpine-hygiene.ch",487],["fluidmaster.it",487],["cordon.de",487],["belisse-beauty.de",487],["belisse-beauty.co.uk",487],["wpc-shop24.de",487],["liv.si",487],["maybach-luxury.com",487],["leiternprofi24.de",487],["hofer-kerzen.at",488],["karls-shop.de",489],["firmen.wko.at",490],["byggern.no",491],["rostics.ru",492],["hife.es",493],["lilcat.com",494],["hot.si",[495,496,497,498]],["crenolibre.fr",499],["e-pole.pl",500],["dopt.com",501],["keb-automation.com",502],["bonduelle.ru",503],["oxfordonlineenglish.com",504],["pccomponentes.fr",505],["pccomponentes.com",505],["pccomponentes.pt",505],["oead.at",506],["innovationsstiftung-bildung.at",506],["etwinning.at",506],["arqa-vet.at",506],["zentrumfuercitizenscience.at",506],["vorstudienlehrgang.at",506],["erasmusplus.at",506],["jeger.pl",507],["bo.de",508],["thegamingwatcher.com",509],["webtv.stofa.dk",510],["plusujemy.pl",511],["asus.com.cn",[512,514]],["zentalk.asus.com",[512,514]],["mubi.com",513],["lawrievetgroup.co.uk",515],["59northwheels.se",516],["foto-gregor.de",517],["kamera-express.de",517],["kamera-express.be",517],["kamera-express.nl",517],["kamera-express.fr",517],["kamera-express.lu",517],["dhbbank.com",518],["dhbbank.de",518],["dhbbank.be",518],["dhbbank.nl",518],["login.ingbank.pl",519],["fabrykacukiernika.pl",[520,521]],["peaks.com",522],["3landesmuseen-braunschweig.de",523],["unifachbuch.de",[524,525,526]],["playlumi.com",[527,528,529]],["chatfuel.com",530],["studio3t.com",[531,532,533,534]],["realgap.co.uk",[535,536,537,538]],["hotelborgia.com",[539,540]],["sweet24.de",541],["zwembaddekouter.be",542],["flixclassic.pl",543],["jobtoday.com",544],["deltatre.com",[545,546,561]],["withings.com",[547,548,549]],["blista.de",[550,551]],["hashop.nl",552],["gift.be",[553,554]],["elevator.de",555],["foryouehealth.de",555],["animaze.us",555],["penn-elcom.com",555],["curantus.de",555],["mtbmarket.de",555],["spanienweinonline.ch",555],["novap.fr",555],["bizkaia.eus",[556,557,558]],["sinparty.com",559],["jobs.ch",560],["jobup.ch",560],["depop.com",[562,563]],["mantel.com",564],["armedangels.com",[565,566,567]],["e-dojus.lv",568],["burnesspaull.com",569],["oncosur.org",570],["ryanair.com",571],["refurbished.at",[572,573,574]],["refurbished.nl",[572,573,574]],["refurbished.be",[572,573,574]],["refurbishedstore.de",[572,573,574]],["bayernportal.de",[575,576,577]],["zipjob.com",578],["pricehubble.com",579],["ilmotorsport.de",580],["karate.com",581],["psbank.ru",581],["myriad.social",581],["exeedme.com",581],["followalice.com",[581,637]],["aqua-store.fr",582],["voila.ca",583],["anastore.com",584],["app.arzt-direkt.de",585],["dasfutterhaus.at",586],["e-pity.pl",587],["fillup.pl",588],["dailymotion.com",589],["barcawelt.de",590],["lueneburger-heide.de",591],["polizei.bayern.de",[592,594]],["ourworldofpixels.com",593],["jku.at",595],["matkahuolto.fi",596],["espacocasa.com",597],["altraeta.it",597],["centrooceano.it",597],["allstoresdigital.com",597],["cultarm3d.de",597],["soulbounce.com",597],["fluidtopics.com",597],["uvetgbt.com",597],["malcorentacar.com",597],["emondo.de",597],["maspero.it",597],["kelkay.com",597],["underground-england.com",597],["vert.eco",597],["turcolegal.com",597],["magnet4blogging.net",597],["moovly.com",597],["automationafrica.co.za",597],["jornaldoalgarve.pt",597],["keravanenergia.fi",597],["kuopas.fi",597],["frag-machiavelli.de",597],["healthera.co.uk",597],["mobeleader.com",597],["powerup-gaming.com",597],["developer-blog.net",597],["medical.edu.mt",597],["deh.mt",597],["bluebell-railway.com",597],["ribescasals.com",597],["javea.com",597],["chinaimportal.com",597],["inds.co.uk",597],["raoul-follereau.org",597],["serramenti-milano.it",597],["cosasdemujer.com",597],["luz-blanca.info",597],["cosasdeviajes.com",597],["safehaven.io",597],["havocpoint.it",597],["motofocus.pl",597],["nomanssky.com",597],["drei-franken-info.de",597],["clausnehring.com",597],["alttab.net",597],["kinderleicht.berlin",597],["kiakkoradio.fi",597],["cosasdelcaribe.es",597],["de-sjove-jokes.dk",597],["serverprofis.de",597],["biographyonline.net",597],["iziconfort.com",597],["sportinnederland.com",597],["natureatblog.com",597],["wtsenergy.com",597],["cosasdesalud.es",597],["internetpasoapaso.com",597],["zurzeit.at",597],["contaspoupanca.pt",597],["backmarket.de",[598,599,600]],["backmarket.co.uk",[598,599,600]],["backmarket.es",[598,599,600]],["backmarket.be",[598,599,600]],["backmarket.at",[598,599,600]],["backmarket.fr",[598,599,600]],["backmarket.gr",[598,599,600]],["backmarket.fi",[598,599,600]],["backmarket.ie",[598,599,600]],["backmarket.it",[598,599,600]],["backmarket.nl",[598,599,600]],["backmarket.pt",[598,599,600]],["backmarket.se",[598,599,600]],["backmarket.sk",[598,599,600]],["backmarket.com",[598,599,600]],["eleven-sportswear.cz",[601,602,603]],["silvini.com",[601,602,603]],["silvini.de",[601,602,603]],["purefiji.cz",[601,602,603]],["voda-zdarma.cz",[601,602,603]],["lesgarconsfaciles.com",[601,602,603]],["ulevapronohy.cz",[601,602,603]],["vitalvibe.eu",[601,602,603]],["plavte.cz",[601,602,603]],["mo-tools.cz",[601,602,603]],["flamantonlineshop.cz",[601,602,603]],["sandratex.cz",[601,602,603]],["norwayshop.cz",[601,602,603]],["3d-foto.cz",[601,602,603]],["neviditelnepradlo.cz",[601,602,603]],["nutrimedium.com",[601,602,603]],["silvini.cz",[601,602,603]],["karel.cz",[601,602,603]],["silvini.sk",[601,602,603]],["book-n-drive.de",604],["cotswoldoutdoor.com",605],["cotswoldoutdoor.ie",605],["cam.start.canon",606],["usnews.com",607],["researchaffiliates.com",608],["singkinderlieder.de",609],["ba.com",[612,613,614]],["britishairways.com",[612,613,614]],["cineman.pl",[615,616,617]],["tv-trwam.pl",[615,616,617,618]],["qatarairways.com",[619,620,621,622,623]],["vivaldi.com",624],["emuia1.gugik.gov.pl",625],["nike.com",626],["adidas.at",627],["adidas.be",627],["adidas.ca",627],["adidas.ch",627],["adidas.cl",627],["adidas.co",627],["adidas.co.in",627],["adidas.co.kr",627],["adidas.co.nz",627],["adidas.co.th",627],["adidas.co.uk",627],["adidas.com",627],["adidas.com.ar",627],["adidas.com.au",627],["adidas.com.br",627],["adidas.com.my",627],["adidas.com.ph",627],["adidas.com.vn",627],["adidas.cz",627],["adidas.de",627],["adidas.dk",627],["adidas.es",627],["adidas.fi",627],["adidas.fr",627],["adidas.gr",627],["adidas.ie",627],["adidas.it",627],["adidas.mx",627],["adidas.nl",627],["adidas.no",627],["adidas.pe",627],["adidas.pl",627],["adidas.pt",627],["adidas.ru",627],["adidas.se",627],["adidas.sk",627],["colourbox.com",628],["ebilet.pl",629],["myeventeo.com",630],["snap.com",631],["ratemyprofessors.com",632],["filen.io",633],["leotrippi.com",634],["restaurantclub.pl",634],["context.news",634],["stilord.com",635],["stilord.pl",635],["stilord.de",635],["stilord.fr",635],["quantamagazine.org",636],["scaleway.com",638],["hellotv.nl",639],["lasestrellas.tv",640],["hair-body-24.de",641],["shopforyou47.de",641],["kreativverliebt.de",641],["anderweltverlag.com",641],["octavio-shop.com",641],["forcetools-kepmar.eu",641],["fantecshop.de",641],["hexen-werkstatt.shop",641],["shop-naturstrom.de",641],["biona-shop.de",641],["camokoenig.de",641],["bikepro.de",641],["kaffeediscount.com",641],["vamos-skateshop.com",641],["holland-shop.com",641],["avonika.com",641],["hurton.pl",642],["officesuite.com",643],["fups.com",[644,646]],["scienceopen.com",647],["moebel-mahler-siebenlehn.de",[648,649]],["calendly.com",650],["batesenvironmental.co.uk",[651,652]],["ubereats.com",653],["101internet.ru",654],["bein.com",655],["beinsports.com",655],["figshare.com",656],["hitado.de",657],["bitso.com",658],["gallmeister.fr",659],["eco-toimistotarvikkeet.fi",660],["proficient.fi",660],["developer.ing.com",661],["webtrack.dhlglobalmail.com",663],["webtrack.dhlecs.com",663],["ehealth.gov.gr",664],["calvinklein.se",[665,666,667]],["calvinklein.fi",[665,666,667]],["calvinklein.sk",[665,666,667]],["calvinklein.si",[665,666,667]],["calvinklein.ch",[665,666,667]],["calvinklein.ru",[665,666,667]],["calvinklein.com",[665,666,667]],["calvinklein.pt",[665,666,667]],["calvinklein.pl",[665,666,667]],["calvinklein.at",[665,666,667]],["calvinklein.nl",[665,666,667]],["calvinklein.hu",[665,666,667]],["calvinklein.lu",[665,666,667]],["calvinklein.lt",[665,666,667]],["calvinklein.lv",[665,666,667]],["calvinklein.it",[665,666,667]],["calvinklein.ie",[665,666,667]],["calvinklein.hr",[665,666,667]],["calvinklein.fr",[665,666,667]],["calvinklein.es",[665,666,667]],["calvinklein.ee",[665,666,667]],["calvinklein.de",[665,666,667]],["calvinklein.dk",[665,666,667]],["calvinklein.cz",[665,666,667]],["calvinklein.bg",[665,666,667]],["calvinklein.be",[665,666,667]],["calvinklein.co.uk",[665,666,667]],["ofdb.de",668],["dtksoft.com",669],["serverstoplist.com",670],["doka.com",[677,678,679]],["abi.de",[680,681]],["studienwahl.de",[680,681]],["youthforum.org",682],["journal.hr",[683,684,685,686]],["howstuffworks.com",687],["stickypassword.com",[688,689,690]],["conversion-rate-experts.com",[691,692]],["merkur.si",[693,694,695]],["petitionenligne.com",[696,697]],["petitionenligne.be",[696,697]],["petitionenligne.fr",[696,697]],["petitionenligne.re",[696,697]],["petitionenligne.ch",[696,697]],["skrivunder.net",[696,697]],["petitiononline.uk",[696,697]],["petitions.nz",[696,697]],["petizioni.com",[696,697]],["peticao.online",[696,697]],["skrivunder.com",[696,697]],["peticiones.ar",[696,697]],["petities.com",[696,697]],["petitionen.com",[696,697]],["petice.com",[696,697]],["opprop.net",[696,697]],["peticiok.com",[696,697]],["peticiones.net",[696,697]],["peticion.es",[696,697]],["peticiones.pe",[696,697]],["peticiones.mx",[696,697]],["peticiones.cl",[696,697]],["peticije.online",[696,697]],["peticiones.co",[696,697]],["mediathek.lfv-bayern.de",698],["aluypvc.es",[699,700,701]],["pracuj.pl",[702,703,704,705,706]],["vki.at",708],["konsument.at",708],["chollometro.com",709],["dealabs.com",709],["hotukdeals.com",709],["pepper.it",709],["pepper.pl",709],["preisjaeger.at",709],["mydealz.de",709],["easyfind.ch",[713,714]],["e-shop.leonidas.com",[715,716]],["lastmile.lt",717],["constantin.film",[718,719,720]],["notion.so",721],["digi24.ro",722],["omgevingsloketinzage.omgeving.vlaanderen.be",[723,724]],["primor.eu",725],["tameteo.com",726],["tempo.pt",726],["yourweather.co.uk",726],["meteored.cl",726],["meteored.mx",726],["tempo.com",726],["ilmeteo.net",726],["meteored.com.ar",726],["daswetter.com",726],["algarvevacation.net",727],["3sat.de",728],["oxxio.nl",[729,730]],["butterflyshop.dk",[731,732,733]],["praxis.nl",734],["brico.be",734]]);

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
