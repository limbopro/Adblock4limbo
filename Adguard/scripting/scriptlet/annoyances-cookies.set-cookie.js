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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["tachyon-accepted-cookie-notice","true"],["PostAnalytics","0"],["cookie-optin","true"],["cookie-bar","0"],["cookieBannerHidden","true"],["isReadCookiePolicyDNT","No"],["isReadCookiePolicyDNTAa","false"],["coookieaccept","ok"],["consentTrackingVerified","true"],["consent","0"],["allowGetPrivacyInfo","true"],["cookiebanner","0"],["_tv_cookie_consent","y"],["_tv_cookie_choice","1"],["eika_consent_set","true"],["eika_consent_marketing","false"],["ew_cookieconsent","1"],["cookie-agreed","0"],["ew_cookieconsent_optin_b","true"],["ew_cookieconsent_optin_a","true"],["gdpr-agree-cookie","1","","reload","1"],["gdpr-consent-cookie-level3","1"],["gdpr-consent-cookie-level2","1"],["ck-cp","accepted"],["cookieConsent","1"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["cookies_marketing_ok","false"],["cookies_ok","true"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["accept_cookies","accepted"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["AcceptedCookieCategories","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-analytics","no"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["cookie_consent_given","true"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["set-cookie","cookieAccess","1"],["hife_eu_cookie_consent","1"],["cookie-consent","accepted"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["dopt_consent","false"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["cookie_preference","1"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["is_allowed_client_traking_niezbedne","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["eg_asked","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["viewed_cookie_policy","no"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["cookiesConsent","1"],["cookiesStatistics","0"],["cookiesPreferences","0"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"],["privacyConsent_version","1","","reload","1"],["privacyConsent","false"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["m.twitch.tv",4],["eboo.lu",5],["kzvb.de",6],["sartor-stoffe.de",7],["rockpoint.cz",7],["rockpoint.sk",7],["parfum-zentrum.de",7],["candy-store.cz",7],["tridge.com",8],["asus.com",[9,10]],["drinksking.sk",11],["neuhauschocolates.com",12],["commandsuite.it",13],["oktea.tw",14],["bafin.de",15],["materna.de",15],["bamf.de",15],["tenvinilo-argentina.com",[16,17]],["eikaforsikring.no",[18,19]],["eurowings.com",[20,22,23]],["seventhgeneration.com",21],["press.princeton.edu",21],["newpharma.be",[24,25,26]],["newpharma.fr",[24,25,26]],["newpharma.de",[24,25,26]],["newpharma.at",[24,25,26]],["newpharma.nl",[24,25,26]],["kapoorwatch.com",27],["paf.se",28],["citibankonline.pl",28],["thw.de",29],["bafa.de",29],["bka.de",29],["bmbf.de",29],["weather.com",30],["bolist.se",[31,32]],["project529.com",32],["evivanlanschot.nl",33],["prenatal.nl",34],["onnibus.com",[34,649,650,651]],["kyoceradocumentsolutions.us",[34,685,686]],["kyoceradocumentsolutions.ch",[34,685,686]],["kyoceradocumentsolutions.co.uk",[34,685,686]],["kyoceradocumentsolutions.de",[34,685,686]],["kyoceradocumentsolutions.es",[34,685,686]],["kyoceradocumentsolutions.eu",[34,685,686]],["kyoceradocumentsolutions.fr",[34,685,686]],["kyoceradocumentsolutions.it",[34,685,686]],["kyoceradocumentsolutions.ru",[34,685,686]],["kyoceradocumentsolutions.mx",[34,685,686]],["kyoceradocumentsolutions.cl",[34,685,686]],["kyoceradocumentsolutions.com.br",[34,685,686]],["wagner-tuning.com",[35,36,37,38]],["waitrosecellar.com",[39,40,41,42]],["waitrose.com",[39,384]],["kvk.nl",[43,44,45]],["macfarlanes.com",46],["pole-emploi.fr",47],["gardenmediaguild.co.uk",48],["samplerite.com",49],["samplerite.cn",49],["sororedit.com",50],["blukit.com.br",51],["biegnaszczyt.pl",52],["staff-gallery.com",53],["itv.com",54],["dvag.de",55],["premierinn.com",[56,57,58,59]],["whitbreadinns.co.uk",[56,57,58,59]],["barandblock.co.uk",[56,57,58,59]],["tabletable.co.uk",[56,57,58,59]],["brewersfayre.co.uk",[56,57,58,59]],["beefeater.co.uk",[56,57,58,59]],["allstarssportsbars.co.uk",[60,61]],["babiesrus.ca",62],["toysrus.ca",62],["roomsandspaces.ca",62],["athletic-club.eus",[63,64,65]],["wattoo.dk",66],["wattoo.no",66],["texthelp.com",[67,68]],["courierexchange.co.uk",[69,70,71]],["haulageexchange.co.uk",[69,70,71]],["powerball.com",72],["tlaciarik.sk",72],["tiskarik.cz",72],["sseriga.edu",[73,74]],["rt.com",75],["swrng.de",76],["crfop.gdos.gov.pl",77],["nurgutes.de",78],["kpcen-torun.edu.pl",79],["opintopolku.fi",80],["debenhams.com",81],["archiwumalle.pl",82],["konicaminolta.ca",83],["konicaminolta.us",83],["deutschebank-dbdirect.com",[84,85,86]],["dbonline.deutsche-bank.es",[84,85,86]],["deutsche-bank.es",[84,85,86]],["hipotecaonline.db.com",87],["kangasalansanomat.fi",88],["eif.org",89],["tunnelmb.net",89],["sugi-net.jp",90],["understandingsociety.ac.uk",91],["autohero.com",92],["leibniz.com",92],["computerbase.de",[92,682]],["bargaintown.ie",93],["tui.nl",94],["doppelmayr.com",95],["case-score.com",[96,97]],["finimize.com",98],["rtu.lv",99],["sysdream.com",100],["cinemarkca.com",101],["wedding.pl",102],["neander-zahn.de",103],["theadelphileeds.co.uk",104],["tobycarvery.co.uk",104],["carsupermarket.com",104],["viajesatodotren.com",105],["ticketingcine.fr",106],["agenziavista.it",107],["e-chladiva.cz",107],["bitecode.dev",108],["mjob.si",[109,110,111]],["airportrentacar.gr",112],["plos.org",113],["autohaus24.de",114],["sixt-neuwagen.de",114],["gadis.es",[115,116]],["dom.ru",116],["ford-kimmerle-reutlingen.de",117],["autohaus-reitermayer.de",117],["autohaus-diefenbach-waldbrunn.de",117],["autohaus-diefenbach.de",117],["autohaus-musberg.de",117],["ford-ah-im-hunsrueck-simmern.de",117],["ford-arndt-goerlitz.de",117],["ford-autogalerie-alfeld.de",117],["ford-bacher-schrobenhausen.de",117],["ford-bathauer-bad-harzburg.de",117],["ford-behrend-waren.de",117],["ford-bergland-frankfurt-oder.de",117],["ford-bergland-wipperfuerth.de",117],["ford-besico-glauchau.de",117],["ford-besico-nuernberg.de",117],["ford-bischoff-neumuenster.de",117],["ford-bodach-borgentreich.de",117],["ford-bunk-saarbruecken.de",117],["ford-bunk-voelklingen.de",117],["ford-busch-kirchberg.de",117],["ford-diermeier-muenchen.de",117],["ford-dinnebier-leipzig.de",117],["ford-duennes-regensburg.de",117],["ford-fischer-bochum.de",117],["ford-fischer-muenster.de",117],["ford-foerster-koblenz.de",117],["ford-fuchs-uffenheim.de",117],["ford-geberzahn-koeln.de",117],["ford-gerstmann-duesseldorf.de",117],["ford-haefner-und-strunk-kassel.de",117],["ford-hartmann-kempten.de",117],["ford-hartmann-rastatt.de",117],["ford-hatzner-karlsruhe.de",117],["ford-heine-hoexter.de",117],["ford-hentschel-hildesheim.de",117],["ford-hessengarage-dreieich.de",117],["ford-hessengarage-frankfurt.de",117],["ford-hga-windeck.de",117],["ford-hommert-coburg.de",117],["ford-horstmann-rastede.de",117],["ford-janssen-sonsbeck.de",117],["ford-jochem-stingbert.de",117],["ford-jungmann-wuppertal.de",117],["ford-kestel-marktzeuln.de",117],["ford-klaiber-bad-friedrichshall.de",117],["ford-koenig-eschwege.de",117],["ford-kohlhoff-mannheim.de",117],["ford-kt-automobile-coesfeld.de",117],["ford-lackermann-wesel.de",117],["ford-ludewig-delligsen.de",117],["ford-maiwald-linsengericht.de",117],["ford-mertens-beckum.de",117],["ford-meyer-bad-oeynhausen.de",117],["ford-mgs-bayreuth.de",117],["ford-mgs-radebeul.de",117],["ford-muecke-berlin.de",117],["ford-norren-weissenthurm.de",117],["ford-nrw-garage-duesseldorf.de",117],["ford-nrw-garage-handweiser.de",117],["ford-nuding-remshalden.de",117],["ford-ohm-rendsburg.de",117],["ford-reinicke-muecheln.de",117],["ford-rennig.de",117],["ford-roerentrop-luenen.de",117],["ford-schankola-dudweiler.de",117],["ford-sg-goeppingen.de",117],["ford-sg-leonberg.de",117],["ford-sg-neu-ulm.de",117],["ford-sg-pforzheim.de",117],["ford-sg-waiblingen.de",117],["ford-storz-st-georgen.de",117],["ford-strunk-koeln.de",117],["ford-tobaben-hamburg.de",117],["ford-toenjes-zetel.de",117],["ford-wagner-mayen.de",117],["ford-wahl-fritzlar.de",117],["ford-wahl-siegen.de",117],["ford-weege-bad-salzuflen.de",117],["ford-westhoff-hamm.de",117],["ford-wieland-hasbergen.de",117],["renault-autocenterprignitz-pritzwalk.de",117],["renault-spenrath-juelich.de",117],["vitalllit.com",118],["fincaparera.com",118],["dbnetbcn.com",118],["viba.barcelona",118],["anafaustinoatelier.com",118],["lamparasherrero.com",118],["calteixidor.cat",118],["argentos.barcelona",118],["anmarlube.com",118],["anynouxines.barcelona",118],["crearunapaginaweb.cat",118],["cualesmiip.com",118],["porndoe.com",[119,120,121]],["thinkingaustralia.com",122],["elrow.com",123],["ownit.se",124],["velo-antwerpen.be",[125,126]],["wwnorton.com",127],["pc-canada.com",128],["mullgs.se",129],["1a-sehen.de",130],["anker.com",131],["feature.fm",132],["comte.com",133],["baltic-watches.com",134],["np-brijuni.hr",134],["vilgain.com",134],["tradingview.com",135],["wevolver.com",136],["experienciasfree.com",137],["freemans.com",138],["kivikangas.fi",139],["melkkobrew.fi",139],["kh.hu",[140,141,142]],["aplgo.com",143],["securityconference.org",144],["aha.or.at",[145,148]],["fantasyfitnessing.com",146],["chocolateemporium.com",147],["account.samsung.com",149],["crushwineco.com",150],["levi.pt",151],["fertagus.pt",152],["smiggle.co.uk",153],["ubisoft.com",[154,155,156,157]],["store.ubisoft.com",[154,157,585,586]],["thulb.uni-jena.de",158],["splityourticket.co.uk",159],["eramba.org",160],["openai.com",161],["kupbilecik.com",[162,163]],["kupbilecik.de",[162,163]],["kupbilecik.pl",[162,163]],["shopilya.com",164],["arera.it",165],["haustier-berater.de",165],["hfm-frankfurt.de",165],["zoommer.ge",166],["studentapan.se",167],["petcity.lt",[168,169,170,171]],["tobroco.com",[172,176]],["tobroco.nl",[172,176]],["tobroco-giant.com",[172,176]],["geosfreiberg.de",[173,174]],["eapvic.org",175],["bassolsenergia.com",175],["bammusic.com",[177,179,180]],["green-24.de",178],["phish-test.de",181],["bokadirekt.se",182],["ford.lt",183],["ford.pt",183],["ford.fr",183],["ford.de",183],["ford.dk",183],["ford.pl",183],["ford.se",183],["ford.nl",183],["ford.no",183],["ford.fi",183],["ford.gr",183],["ford.it",183],["data-media.gr",184],["e-food.gr",[185,186]],["bvmed.de",187],["babyshop.com",[188,189,190]],["griffbereit24.de",191],["checkwx.com",192],["calendardate.com",193],["wefashion.ch",194],["wefashion.fr",194],["wefashion.lu",194],["wefashion.be",194],["wefashion.de",194],["wefashion.nl",194],["brettspiel-angebote.de",[195,196]],["nio.com",197],["kancelarskepotreby.net",[198,199,200]],["segment-anything.com",201],["sketch.metademolab.com",202],["cambridgebs.co.uk",203],["freizeitbad-greifswald.de",204],["giuseppezanotti.com",[205,206,207]],["xcen.se",207],["biggreenegg.co.uk",208],["skihuette-oberbeuren.de",[209,210,211]],["pwsweather.com",212],["xfree.com",213],["theweathernetwork.com",[214,215]],["monese.com",[216,217,218]],["assos.com",216],["helmut-fischer.com",219],["myscience.org",220],["7-eleven.com",221],["airwallex.com",222],["streema.com",223],["gov.lv",224],["tise.com",225],["codecamps.com",226],["avell.com.br",227],["moneyfarm.com",228],["app.moneyfarm.com",228],["simpl.rent",229],["hubspot.com",230],["prodyna.com",[231,232,233,234]],["zutobi.com",[231,232,233,234]],["calm.com",[235,236]],["pubgesports.com",[237,238,239]],["outwrite.com",240],["sberbank.com",241],["sbermarket.ru",242],["bgextras.co.uk",243],["sede.coruna.gal",244],["czech-server.cz",245],["hitech-gamer.com",246],["bialettikave.hu",[247,248,249]],["canalplus.com",[250,251,252]],["mader.bz.it",[253,254,255]],["supply.amazon.co.uk",256],["bhaptics.com",257],["cleverbot.com",258],["watchaut.film",259],["tuffaloy.com",260],["fanvue.com",260],["electronoobs.com",261],["xn--lkylen-vxa.se",262],["tiefenthaler-landtechnik.at",263],["tiefenthaler-landtechnik.ch",263],["tiefenthaler-landtechnik.de",263],["huisartsenpraktijkdoorn.nl",264],["varma.fi",265],["vyos.io",266],["digimobil.es",[267,268]],["teenage.engineering",269],["merrell.pl",[270,530]],["converse.pl",270],["shop.wf-education.com",[270,530]],["converse.com",[271,272]],["buyandapply.nexus.org.uk",273],["img.ly",274],["halonen.fi",[274,302,303,304,305]],["carlson.fi",[274,302,303,304,305]],["cams.ashemaletube.com",[275,276]],["electronicacerler.com",[277,278,279]],["okpoznan.pl",[280,282]],["ielts.idp.com",281],["endlesstools.io",283],["thehacker.recipes",284],["mbhszepkartya.hu",285],["casellimoveis.com.br",286],["embedplus.com",287],["e-file.pl",288],["sp215.info",289],["empik.com",290],["senda.pl",291],["befestigungsfuchs.de",292],["cut-tec.co.uk",293],["gaytimes.co.uk",294],["hello.one",295],["wildcat-koeln.de",296],["libraries.merton.gov.uk",[297,298]],["tommy.hr",[299,300]],["usit.uio.no",301],["demo-digital-twin.r-stahl.com",306],["la31devalladolid.com",[307,308]],["mx.com",309],["foxtrail.fjallraven.com",310],["dotwatcher.cc",311],["bazarchic.com",[312,313,314]],["seedrs.com",315],["mypensiontracker.co.uk",316],["praxisplan.at",[316,339]],["endclothing.com",317],["esimplus.me",318],["cineplanet.com.pe",319],["ecologi.com",320],["wamba.com",321],["eurac.edu",322],["akasaair.com",323],["rittal.com",324],["wizards.com",325],["worstbassist.com",[326,327,328,329,330,331]],["zs-watch.com",332],["crown.com",333],["mesanalyses.fr",334],["teket.jp",335],["fish.shimano.com",[336,337,338]],["simsherpa.com",[340,341,342]],["translit.ru",343],["aruba.com",344],["aireuropa.com",345],["skfbearingselect.com",[346,347]],["scanrenovation.com",348],["ttela.se",349],["dominospizza.pl",350],["devagroup.pl",351],["hintaopas.fi",352],["ledenicheur.fr",352],["prisjagt.dk",352],["prisjakt.no",352],["prisjakt.nu",352],["pricespy.co.uk",352],["pricespy.co.nz",352],["horecaworld.biz",353],["horecaworld.be",353],["secondsol.com",353],["angelifybeauty.com",354],["cotopaxi.com",355],["kaluga.hh.ru",356],["justjoin.it",357],["digibest.pt",358],["two-notes.com",359],["theverge.com",360],["daimant.co",361],["secularism.org.uk",362],["karriere-hamburg.de",363],["musicmap.info",364],["gasspisen.se",365],["medtube.pl",366],["medtube.es",366],["medtube.fr",366],["medtube.net",366],["standard.sk",367],["linmot.com",368],["larian.com",[368,637]],["containerandpackaging.com",369],["top-yp.de",370],["termania.net",371],["swisscard.ch",372],["account.nowpayments.io",373],["fizjobaza.pl",374],["gigasport.at",375],["gigasport.de",375],["gigasport.ch",375],["velleahome.gr",376],["nicequest.com",377],["handelsbanken.no",378],["handelsbanken.com",378],["handelsbanken.co.uk",378],["handelsbanken.se",[378,464]],["handelsbanken.dk",378],["handelsbanken.fi",378],["songtradr.com",[379,620]],["logo.pt",[380,381]],["flexwhere.co.uk",[382,383]],["flexwhere.de",[382,383]],["pricewise.nl",382],["getunleash.io",382],["dentmania.de",382],["free.navalny.com",382],["latoken.com",382],["campusbrno.cz",[385,386,387]],["secrid.com",388],["etsy.com",389],["seb.se",390],["sebgroup.com",390],["deps.dev",391],["buf.build",392],["starofservice.com",393],["ytcomment.kmcat.uk",394],["gmx.com",395],["gmx.fr",395],["karofilm.ru",396],["octopusenergy.it",397],["octopusenergy.es",[397,398]],["justanswer.es",399],["justanswer.de",399],["justanswer.com",399],["justanswer.co.uk",399],["citilink.ru",400],["huutokaupat.com",401],["kaggle.com",402],["emr.ch",[403,408]],["gem.cbc.ca",404],["pumatools.hu",405],["ici.tou.tv",406],["crunchyroll.com",407],["clipchamp.com",409],["trouwenbijfletcher.nl",409],["fletcher.nl",409],["fletcherzakelijk.nl",409],["intermatic.com",409],["ebikelohr.de",410],["eurosender.com",411],["melectronics.ch",412],["guard.io",413],["schrottpreis.org",414],["nokportalen.se",415],["dokiliko.com",416],["valamis.com",[417,418,419]],["sverigesingenjorer.se",420],["shop.almawin.de",[421,422,423,467]],["textshuttle.com",424],["zeitzurtrauer.de",425],["sumsub.com",[426,427,428]],["atman.pl",[426,427,428]],["fabriziovanmarciano.com",[426,427,428]],["nationalrail.com",[426,427,428]],["eett.gr",[426,427,428]],["funkypotato.com",[426,427,428]],["equalexchange.co.uk",[426,427,428]],["swnsdigital.com",[426,427,428]],["hemglass.se",[427,428,429,430,431]],["tampereenratikka.fi",[427,646,647,648]],["kymppikatsastus.fi",[427,428,431,687]],["gogolf.fi",[428,429]],["hanse-haus-greifswald.de",428],["skaling.de",[432,433,434]],["bringmeister.de",435],["clearblue.com",436],["drewag.de",[437,438,439]],["enso.de",[437,438,439]],["buidlbox.io",437],["helitransair.com",440],["more.com",441],["nwslsoccer.com",441],["climatecentral.org",442],["resolution.de",443],["flagma.by",444],["eatsalad.com",445],["pacstall.dev",446],["web2.0calc.fr",447],["de-appletradein.likewize.com",448],["swissborg.com",449],["qwice.com",450],["canalpluskuchnia.pl",[451,452]],["uizard.io",453],["stmas.bayern.de",[454,457]],["novayagazeta.eu",455],["kinopoisk.ru",456],["yandex.ru",456],["go.netia.pl",[458,460]],["polsatboxgo.pl",[458,460]],["wst.tv",459],["ing.it",[461,462]],["ing.nl",463],["youcom.com.br",465],["rule34.paheal.net",466],["pnel.de",467],["korodrogerie.de",467],["der-puten-shop.de",467],["katapult-shop.de",467],["evocsports.com",467],["esm-computer.de",467],["calmwaters.de",467],["mellerud.de",467],["akustik-projekt.at",467],["vansprint.de",467],["0815.at",467],["0815.eu",467],["ojskate.com",467],["der-schweighofer.de",467],["tz-bedarf.de",467],["zeinpharma.de",467],["weicon.com",467],["dagvandewebshop.be",467],["thiele-tee.de",467],["carbox.de",467],["riapsport.de",467],["trendpet.de",467],["eheizung24.de",467],["seemueller.com",467],["vivande.de",467],["heidegrill.com",467],["gladiator-fightwear.com",467],["h-andreas.com",467],["pp-parts.com",467],["natuerlich-holzschuhe.de",467],["massivart.de",467],["malermeister-shop.de",467],["imping-confiserie.de",467],["lenox-trading.at",467],["cklenk.de",467],["catolet.de",467],["drinkitnow.de",467],["patisserie-m.de",467],["storm-proof.com",467],["balance-fahrradladen.de",467],["magicpos.shop",467],["zeinpharma.com",467],["sps-handel.net",467],["novagenics.com",467],["butterfly-circus.de",467],["holzhof24.de",467],["w6-wertarbeit.de",467],["fleurop.de",467],["leki.com",467],["extremeaudio.de",467],["taste-market.de",467],["delker-optik.de",467],["stuhl24-shop.de",467],["g-nestle.de",467],["alpine-hygiene.ch",467],["fluidmaster.it",467],["cordon.de",467],["belisse-beauty.de",467],["belisse-beauty.co.uk",467],["wpc-shop24.de",467],["liv.si",467],["maybach-luxury.com",467],["leiternprofi24.de",467],["karls-shop.de",468],["firmen.wko.at",469],["byggern.no",470],["rostics.ru",471],["hife.es",472],["lilcat.com",473],["hot.si",[474,475,476,477]],["dopt.com",478],["oxfordonlineenglish.com",479],["pccomponentes.fr",480],["pccomponentes.com",480],["pccomponentes.pt",480],["oead.at",481],["innovationsstiftung-bildung.at",481],["etwinning.at",481],["arqa-vet.at",481],["zentrumfuercitizenscience.at",481],["vorstudienlehrgang.at",481],["erasmusplus.at",481],["jeger.pl",482],["bo.de",483],["thegamingwatcher.com",484],["webtv.stofa.dk",485],["plusujemy.pl",486],["asus.com.cn",[487,489]],["zentalk.asus.com",[487,489]],["mubi.com",488],["lawrievetgroup.co.uk",490],["59northwheels.se",491],["foto-gregor.de",492],["kamera-express.de",492],["kamera-express.be",492],["kamera-express.nl",492],["kamera-express.fr",492],["kamera-express.lu",492],["dhbbank.com",493],["dhbbank.de",493],["dhbbank.be",493],["dhbbank.nl",493],["login.ingbank.pl",494],["fabrykacukiernika.pl",[495,496]],["peaks.com",497],["3landesmuseen-braunschweig.de",498],["unifachbuch.de",[499,500,501]],["playlumi.com",[502,503,504]],["chatfuel.com",505],["studio3t.com",[506,507,508,509]],["realgap.co.uk",[510,511,512,513]],["hotelborgia.com",[514,515]],["sweet24.de",516],["zwembaddekouter.be",517],["flixclassic.pl",518],["jobtoday.com",519],["deltatre.com",[520,521,536]],["withings.com",[522,523,524]],["blista.de",[525,526]],["hashop.nl",527],["gift.be",[528,529]],["elevator.de",530],["foryouehealth.de",530],["animaze.us",530],["penn-elcom.com",530],["curantus.de",530],["mtbmarket.de",530],["spanienweinonline.ch",530],["novap.fr",530],["bizkaia.eus",[531,532,533]],["sinparty.com",534],["jobs.ch",535],["jobup.ch",535],["depop.com",[537,538]],["mantel.com",539],["armedangels.com",[540,541,542]],["e-dojus.lv",543],["burnesspaull.com",544],["oncosur.org",545],["ryanair.com",546],["refurbished.at",[547,548,549]],["refurbished.nl",[547,548,549]],["refurbished.be",[547,548,549]],["refurbishedstore.de",[547,548,549]],["bayernportal.de",[550,551,552]],["zipjob.com",553],["pricehubble.com",554],["ilmotorsport.de",555],["psbank.ru",556],["myriad.social",556],["exeedme.com",556],["followalice.com",[556,612]],["aqua-store.fr",557],["voila.ca",558],["anastore.com",559],["app.arzt-direkt.de",560],["dasfutterhaus.at",561],["e-pity.pl",562],["fillup.pl",563],["dailymotion.com",564],["barcawelt.de",565],["lueneburger-heide.de",566],["polizei.bayern.de",[567,569]],["ourworldofpixels.com",568],["jku.at",570],["matkahuolto.fi",571],["espacocasa.com",572],["altraeta.it",572],["centrooceano.it",572],["allstoresdigital.com",572],["cultarm3d.de",572],["soulbounce.com",572],["fluidtopics.com",572],["uvetgbt.com",572],["malcorentacar.com",572],["emondo.de",572],["maspero.it",572],["kelkay.com",572],["underground-england.com",572],["vert.eco",572],["turcolegal.com",572],["magnet4blogging.net",572],["moovly.com",572],["automationafrica.co.za",572],["jornaldoalgarve.pt",572],["keravanenergia.fi",572],["kuopas.fi",572],["frag-machiavelli.de",572],["healthera.co.uk",572],["mobeleader.com",572],["powerup-gaming.com",572],["developer-blog.net",572],["medical.edu.mt",572],["deh.mt",572],["bluebell-railway.com",572],["ribescasals.com",572],["javea.com",572],["chinaimportal.com",572],["inds.co.uk",572],["raoul-follereau.org",572],["serramenti-milano.it",572],["cosasdemujer.com",572],["luz-blanca.info",572],["cosasdeviajes.com",572],["safehaven.io",572],["havocpoint.it",572],["motofocus.pl",572],["nomanssky.com",572],["drei-franken-info.de",572],["clausnehring.com",572],["alttab.net",572],["kinderleicht.berlin",572],["kiakkoradio.fi",572],["cosasdelcaribe.es",572],["de-sjove-jokes.dk",572],["serverprofis.de",572],["biographyonline.net",572],["iziconfort.com",572],["sportinnederland.com",572],["natureatblog.com",572],["wtsenergy.com",572],["cosasdesalud.es",572],["internetpasoapaso.com",572],["zurzeit.at",572],["contaspoupanca.pt",572],["backmarket.de",[573,574,575]],["backmarket.co.uk",[573,574,575]],["backmarket.es",[573,574,575]],["backmarket.be",[573,574,575]],["backmarket.at",[573,574,575]],["backmarket.fr",[573,574,575]],["backmarket.gr",[573,574,575]],["backmarket.fi",[573,574,575]],["backmarket.ie",[573,574,575]],["backmarket.it",[573,574,575]],["backmarket.nl",[573,574,575]],["backmarket.pt",[573,574,575]],["backmarket.se",[573,574,575]],["backmarket.sk",[573,574,575]],["backmarket.com",[573,574,575]],["eleven-sportswear.cz",[576,577,578]],["silvini.com",[576,577,578]],["silvini.de",[576,577,578]],["purefiji.cz",[576,577,578]],["voda-zdarma.cz",[576,577,578]],["lesgarconsfaciles.com",[576,577,578]],["ulevapronohy.cz",[576,577,578]],["vitalvibe.eu",[576,577,578]],["plavte.cz",[576,577,578]],["mo-tools.cz",[576,577,578]],["flamantonlineshop.cz",[576,577,578]],["sandratex.cz",[576,577,578]],["norwayshop.cz",[576,577,578]],["3d-foto.cz",[576,577,578]],["neviditelnepradlo.cz",[576,577,578]],["nutrimedium.com",[576,577,578]],["silvini.cz",[576,577,578]],["karel.cz",[576,577,578]],["silvini.sk",[576,577,578]],["book-n-drive.de",579],["cotswoldoutdoor.com",580],["cotswoldoutdoor.ie",580],["cam.start.canon",581],["usnews.com",582],["researchaffiliates.com",583],["singkinderlieder.de",584],["ba.com",[587,588,589]],["britishairways.com",[587,588,589]],["cineman.pl",[590,591,592]],["tv-trwam.pl",[590,591,592,593]],["qatarairways.com",[594,595,596,597,598]],["vivaldi.com",599],["emuia1.gugik.gov.pl",600],["nike.com",601],["adidas.at",602],["adidas.be",602],["adidas.ca",602],["adidas.ch",602],["adidas.cl",602],["adidas.co",602],["adidas.co.in",602],["adidas.co.kr",602],["adidas.co.nz",602],["adidas.co.th",602],["adidas.co.uk",602],["adidas.com",602],["adidas.com.ar",602],["adidas.com.au",602],["adidas.com.br",602],["adidas.com.my",602],["adidas.com.ph",602],["adidas.com.vn",602],["adidas.cz",602],["adidas.de",602],["adidas.dk",602],["adidas.es",602],["adidas.fi",602],["adidas.fr",602],["adidas.gr",602],["adidas.ie",602],["adidas.it",602],["adidas.mx",602],["adidas.nl",602],["adidas.no",602],["adidas.pe",602],["adidas.pl",602],["adidas.pt",602],["adidas.ru",602],["adidas.se",602],["adidas.sk",602],["colourbox.com",603],["ebilet.pl",604],["myeventeo.com",605],["snap.com",606],["ratemyprofessors.com",607],["filen.io",608],["leotrippi.com",609],["restaurantclub.pl",609],["context.news",609],["stilord.com",610],["stilord.pl",610],["stilord.de",610],["stilord.fr",610],["quantamagazine.org",611],["scaleway.com",613],["hellotv.nl",614],["lasestrellas.tv",615],["hair-body-24.de",616],["shopforyou47.de",616],["kreativverliebt.de",616],["anderweltverlag.com",616],["octavio-shop.com",616],["forcetools-kepmar.eu",616],["fantecshop.de",616],["hexen-werkstatt.shop",616],["shop-naturstrom.de",616],["biona-shop.de",616],["camokoenig.de",616],["bikepro.de",616],["kaffeediscount.com",616],["vamos-skateshop.com",616],["holland-shop.com",616],["avonika.com",616],["hurton.pl",617],["officesuite.com",618],["fups.com",[619,621]],["scienceopen.com",622],["moebel-mahler-siebenlehn.de",[623,624]],["calendly.com",625],["batesenvironmental.co.uk",[626,627]],["ubereats.com",628],["101internet.ru",629],["bein.com",630],["beinsports.com",630],["figshare.com",631],["hitado.de",632],["bitso.com",633],["gallmeister.fr",634],["eco-toimistotarvikkeet.fi",635],["proficient.fi",635],["developer.ing.com",636],["webtrack.dhlglobalmail.com",638],["webtrack.dhlecs.com",638],["ehealth.gov.gr",639],["calvinklein.se",[640,641,642]],["calvinklein.fi",[640,641,642]],["calvinklein.sk",[640,641,642]],["calvinklein.si",[640,641,642]],["calvinklein.ch",[640,641,642]],["calvinklein.ru",[640,641,642]],["calvinklein.com",[640,641,642]],["calvinklein.pt",[640,641,642]],["calvinklein.pl",[640,641,642]],["calvinklein.at",[640,641,642]],["calvinklein.nl",[640,641,642]],["calvinklein.hu",[640,641,642]],["calvinklein.lu",[640,641,642]],["calvinklein.lt",[640,641,642]],["calvinklein.lv",[640,641,642]],["calvinklein.it",[640,641,642]],["calvinklein.ie",[640,641,642]],["calvinklein.hr",[640,641,642]],["calvinklein.fr",[640,641,642]],["calvinklein.es",[640,641,642]],["calvinklein.ee",[640,641,642]],["calvinklein.de",[640,641,642]],["calvinklein.dk",[640,641,642]],["calvinklein.cz",[640,641,642]],["calvinklein.bg",[640,641,642]],["calvinklein.be",[640,641,642]],["calvinklein.co.uk",[640,641,642]],["ofdb.de",643],["dtksoft.com",644],["serverstoplist.com",645],["doka.com",[652,653,654]],["abi.de",[655,656]],["studienwahl.de",[655,656]],["youthforum.org",657],["journal.hr",[658,659,660,661]],["howstuffworks.com",662],["stickypassword.com",[663,664,665]],["conversion-rate-experts.com",[666,667]],["merkur.si",[668,669,670]],["petitionenligne.com",[671,672]],["petitionenligne.be",[671,672]],["petitionenligne.fr",[671,672]],["petitionenligne.re",[671,672]],["petitionenligne.ch",[671,672]],["skrivunder.net",[671,672]],["petitiononline.uk",[671,672]],["petitions.nz",[671,672]],["petizioni.com",[671,672]],["peticao.online",[671,672]],["skrivunder.com",[671,672]],["peticiones.ar",[671,672]],["petities.com",[671,672]],["petitionen.com",[671,672]],["petice.com",[671,672]],["opprop.net",[671,672]],["peticiok.com",[671,672]],["peticiones.net",[671,672]],["peticion.es",[671,672]],["peticiones.pe",[671,672]],["peticiones.mx",[671,672]],["peticiones.cl",[671,672]],["peticije.online",[671,672]],["peticiones.co",[671,672]],["mediathek.lfv-bayern.de",673],["aluypvc.es",[674,675,676]],["pracuj.pl",[677,678,679,680,681]],["vki.at",683],["konsument.at",683],["chollometro.com",684],["dealabs.com",684],["hotukdeals.com",684],["pepper.it",684],["pepper.pl",684],["preisjaeger.at",684],["mydealz.de",684],["easyfind.ch",[688,689]],["e-shop.leonidas.com",[690,691]],["lastmile.lt",692],["constantin.film",[693,694,695]],["notion.so",696],["digi24.ro",697],["omgevingsloketinzage.omgeving.vlaanderen.be",[698,699]],["primor.eu",700],["tameteo.com",701],["tempo.pt",701],["yourweather.co.uk",701],["meteored.cl",701],["meteored.mx",701],["tempo.com",701],["ilmeteo.net",701],["meteored.com.ar",701],["daswetter.com",701],["algarvevacation.net",702],["3sat.de",703],["oxxio.nl",[704,705]]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setCookie(
    name = '',
    value = '',
    path = ''
) {
    if ( name === '' ) { return; }
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

    setCookieFn(
        false,
        name,
        value,
        '',
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 3)
    );
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
    scriptletGlobals.set('safeSelf', safe);
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

    if ( options.reload && getCookieFn(name) === value ) {
        window.location.reload();
    }
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
