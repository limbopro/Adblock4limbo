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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["tachyon-accepted-cookie-notice","true"],["cookie-optin","true"],["cookiebanner","0"],["ck-cp","accepted"],["cookieConsent","1"],["gsbbanner","0"],["__adblocker","false","","reload","1"],["acceptCookies","0"],["marketingCookies","false"],["CookieLaw_statistik 0"],["CookieLaw_komfort","0"],["CookieLaw_personalisierung","0"],["CookieLaw","on"],["wtr_cookie_consent","1"],["wtr_cookies_advertising","0"],["wtr_cookies_functional","0"],["wtr_cookies_analytics","0"],["allowTrackingCookiesKvK","0"],["cookieLevelCodeKVK","1"],["allowAnalyticsCookiesKvK","0"],["macfarlanes-necessary-cookies","accepted"],["TC_PRIVACY_CENTER","0"],["AllowCookies","false","","reload","1"],["consented","false"],["cookie_tou","1","","reload","1"],["blukit_novo","true"],["cr","true"],["gdpr_check_cookie","accepted","","reload","1"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-agreed","0"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["CookiesAccepted","no"],["essential","true"],["cookieConfirm","true"],["trackingConfirm","false"],["cookie_consent","false"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["accept_cookies","accepted"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookie-bar","0"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true","","reload","1"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-analytics","no"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["dopt_consent","false"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["cok","1","","reload","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["viewed_cookie_policy","no"],["functionalCookies","true"],["contentPersonalisationCookies","false"],["statisticalCookies","false"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["OptanonAlertBoxClosed","1"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["internalCookies","false"],["essentialsCookies","true"],["cookielawinfo-checkbox-toiminnalliset-evasteet","yes"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["__consent","%5B%22required%22%5D"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["m.twitch.tv",4],["kzvb.de",5],["bafin.de",6],["materna.de",6],["bamf.de",6],["kapoorwatch.com",7],["paf.se",8],["citibankonline.pl",8],["thw.de",9],["bafa.de",9],["bka.de",9],["bmbf.de",9],["weather.com",10],["evivanlanschot.nl",11],["prenatal.nl",12],["onnibus.com",[12,622,623,624]],["kyoceradocumentsolutions.us",[12,655,656]],["kyoceradocumentsolutions.ch",[12,655,656]],["kyoceradocumentsolutions.co.uk",[12,655,656]],["kyoceradocumentsolutions.de",[12,655,656]],["kyoceradocumentsolutions.es",[12,655,656]],["kyoceradocumentsolutions.eu",[12,655,656]],["kyoceradocumentsolutions.fr",[12,655,656]],["kyoceradocumentsolutions.it",[12,655,656]],["kyoceradocumentsolutions.ru",[12,655,656]],["kyoceradocumentsolutions.mx",[12,655,656]],["kyoceradocumentsolutions.cl",[12,655,656]],["kyoceradocumentsolutions.com.br",[12,655,656]],["wagner-tuning.com",[13,14,15,16]],["waitrosecellar.com",[17,18,19,20]],["waitrose.com",[17,364]],["kvk.nl",[21,22,23]],["macfarlanes.com",24],["pole-emploi.fr",25],["gardenmediaguild.co.uk",26],["samplerite.com",27],["samplerite.cn",27],["sororedit.com",28],["blukit.com.br",29],["biegnaszczyt.pl",30],["staff-gallery.com",31],["itv.com",32],["dvag.de",33],["premierinn.com",[34,35,36,37]],["whitbreadinns.co.uk",[34,35,36,37]],["barandblock.co.uk",[34,35,36,37]],["tabletable.co.uk",[34,35,36,37]],["brewersfayre.co.uk",[34,35,36,37]],["beefeater.co.uk",[34,35,36,37]],["allstarssportsbars.co.uk",[38,39]],["babiesrus.ca",40],["toysrus.ca",40],["roomsandspaces.ca",40],["athletic-club.eus",[41,42,43]],["wattoo.dk",44],["wattoo.no",44],["texthelp.com",[45,46]],["courierexchange.co.uk",[47,48,49]],["haulageexchange.co.uk",[47,48,49]],["tlaciarik.sk",50],["tiskarik.cz",50],["sseriga.edu",[51,52]],["rt.com",53],["swrng.de",54],["crfop.gdos.gov.pl",55],["nurgutes.de",56],["kpcen-torun.edu.pl",57],["opintopolku.fi",58],["debenhams.com",59],["archiwumalle.pl",60],["konicaminolta.ca",61],["konicaminolta.us",61],["deutschebank-dbdirect.com",[62,63,64]],["dbonline.deutsche-bank.es",[62,63,64]],["deutsche-bank.es",[62,63,64]],["hipotecaonline.db.com",65],["kangasalansanomat.fi",66],["eif.org",67],["tunnelmb.net",67],["press.princeton.edu",68],["sugi-net.jp",69],["understandingsociety.ac.uk",70],["autohero.com",71],["leibniz.com",71],["computerbase.de",[71,652]],["bargaintown.ie",72],["tui.nl",73],["doppelmayr.com",74],["case-score.com",[75,76]],["finimize.com",77],["rtu.lv",78],["sysdream.com",79],["cinemarkca.com",80],["wedding.pl",81],["neander-zahn.de",82],["theadelphileeds.co.uk",83],["tobycarvery.co.uk",83],["carsupermarket.com",83],["viajesatodotren.com",84],["ticketingcine.fr",85],["agenziavista.it",86],["e-chladiva.cz",86],["bitecode.dev",87],["mjob.si",[88,89,90]],["airportrentacar.gr",91],["plos.org",92],["autohaus24.de",93],["sixt-neuwagen.de",93],["gadis.es",[94,95]],["dom.ru",95],["ford-kimmerle-reutlingen.de",96],["autohaus-reitermayer.de",96],["autohaus-diefenbach-waldbrunn.de",96],["autohaus-diefenbach.de",96],["autohaus-musberg.de",96],["ford-ah-im-hunsrueck-simmern.de",96],["ford-arndt-goerlitz.de",96],["ford-autogalerie-alfeld.de",96],["ford-bacher-schrobenhausen.de",96],["ford-bathauer-bad-harzburg.de",96],["ford-behrend-waren.de",96],["ford-bergland-frankfurt-oder.de",96],["ford-bergland-wipperfuerth.de",96],["ford-besico-glauchau.de",96],["ford-besico-nuernberg.de",96],["ford-bischoff-neumuenster.de",96],["ford-bodach-borgentreich.de",96],["ford-bunk-saarbruecken.de",96],["ford-bunk-voelklingen.de",96],["ford-busch-kirchberg.de",96],["ford-diermeier-muenchen.de",96],["ford-dinnebier-leipzig.de",96],["ford-duennes-regensburg.de",96],["ford-fischer-bochum.de",96],["ford-fischer-muenster.de",96],["ford-foerster-koblenz.de",96],["ford-fuchs-uffenheim.de",96],["ford-geberzahn-koeln.de",96],["ford-gerstmann-duesseldorf.de",96],["ford-haefner-und-strunk-kassel.de",96],["ford-hartmann-kempten.de",96],["ford-hartmann-rastatt.de",96],["ford-hatzner-karlsruhe.de",96],["ford-heine-hoexter.de",96],["ford-hentschel-hildesheim.de",96],["ford-hessengarage-dreieich.de",96],["ford-hessengarage-frankfurt.de",96],["ford-hga-windeck.de",96],["ford-hommert-coburg.de",96],["ford-horstmann-rastede.de",96],["ford-janssen-sonsbeck.de",96],["ford-jochem-stingbert.de",96],["ford-jungmann-wuppertal.de",96],["ford-kestel-marktzeuln.de",96],["ford-klaiber-bad-friedrichshall.de",96],["ford-koenig-eschwege.de",96],["ford-kohlhoff-mannheim.de",96],["ford-kt-automobile-coesfeld.de",96],["ford-lackermann-wesel.de",96],["ford-ludewig-delligsen.de",96],["ford-maiwald-linsengericht.de",96],["ford-mertens-beckum.de",96],["ford-meyer-bad-oeynhausen.de",96],["ford-mgs-bayreuth.de",96],["ford-mgs-radebeul.de",96],["ford-muecke-berlin.de",96],["ford-norren-weissenthurm.de",96],["ford-nrw-garage-duesseldorf.de",96],["ford-nrw-garage-handweiser.de",96],["ford-nuding-remshalden.de",96],["ford-ohm-rendsburg.de",96],["ford-reinicke-muecheln.de",96],["ford-rennig.de",96],["ford-roerentrop-luenen.de",96],["ford-schankola-dudweiler.de",96],["ford-sg-goeppingen.de",96],["ford-sg-leonberg.de",96],["ford-sg-neu-ulm.de",96],["ford-sg-pforzheim.de",96],["ford-sg-waiblingen.de",96],["ford-storz-st-georgen.de",96],["ford-strunk-koeln.de",96],["ford-tobaben-hamburg.de",96],["ford-toenjes-zetel.de",96],["ford-wagner-mayen.de",96],["ford-wahl-fritzlar.de",96],["ford-wahl-siegen.de",96],["ford-weege-bad-salzuflen.de",96],["ford-westhoff-hamm.de",96],["ford-wieland-hasbergen.de",96],["renault-autocenterprignitz-pritzwalk.de",96],["renault-spenrath-juelich.de",96],["vitalllit.com",97],["fincaparera.com",97],["dbnetbcn.com",97],["viba.barcelona",97],["anafaustinoatelier.com",97],["lamparasherrero.com",97],["calteixidor.cat",97],["argentos.barcelona",97],["anmarlube.com",97],["anynouxines.barcelona",97],["crearunapaginaweb.cat",97],["cualesmiip.com",97],["porndoe.com",[98,99,100]],["thinkingaustralia.com",101],["elrow.com",102],["ownit.se",103],["velo-antwerpen.be",[104,105]],["wwnorton.com",106],["pc-canada.com",107],["mullgs.se",108],["1a-sehen.de",109],["anker.com",110],["feature.fm",111],["comte.com",112],["baltic-watches.com",113],["np-brijuni.hr",113],["vilgain.com",113],["tradingview.com",114],["wevolver.com",115],["experienciasfree.com",116],["freemans.com",117],["kivikangas.fi",118],["melkkobrew.fi",118],["kh.hu",[119,120,121]],["aplgo.com",122],["securityconference.org",123],["aha.or.at",[124,127]],["fantasyfitnessing.com",125],["chocolateemporium.com",126],["account.samsung.com",128],["crushwineco.com",129],["levi.pt",130],["fertagus.pt",131],["rockpoint.cz",132],["rockpoint.sk",132],["parfum-zentrum.de",132],["candy-store.cz",132],["smiggle.co.uk",133],["ubisoft.com",[134,135,136,137]],["store.ubisoft.com",[134,137,560,561]],["thulb.uni-jena.de",138],["splityourticket.co.uk",139],["eramba.org",140],["openai.com",141],["kupbilecik.com",[142,143]],["kupbilecik.de",[142,143]],["kupbilecik.pl",[142,143]],["shopilya.com",144],["haustier-berater.de",145],["hfm-frankfurt.de",145],["zoommer.ge",146],["studentapan.se",147],["petcity.lt",[148,149,150,151]],["tobroco.com",[152,156]],["tobroco.nl",[152,156]],["tobroco-giant.com",[152,156]],["geosfreiberg.de",[153,154]],["eapvic.org",155],["bassolsenergia.com",155],["bammusic.com",[157,159,160]],["green-24.de",158],["phish-test.de",161],["bokadirekt.se",162],["ford.lt",163],["ford.pt",163],["ford.fr",163],["ford.de",163],["ford.dk",163],["ford.pl",163],["ford.se",163],["ford.nl",163],["ford.no",163],["ford.fi",163],["ford.gr",163],["ford.it",163],["data-media.gr",164],["e-food.gr",[165,166]],["bvmed.de",167],["babyshop.com",[168,169,170]],["griffbereit24.de",171],["checkwx.com",172],["calendardate.com",173],["wefashion.ch",174],["wefashion.fr",174],["wefashion.lu",174],["wefashion.be",174],["wefashion.de",174],["wefashion.nl",174],["brettspiel-angebote.de",[175,176]],["nio.com",177],["kancelarskepotreby.net",[178,179,180]],["segment-anything.com",181],["sketch.metademolab.com",182],["cambridgebs.co.uk",183],["freizeitbad-greifswald.de",184],["giuseppezanotti.com",[185,186,187]],["xcen.se",187],["biggreenegg.co.uk",188],["skihuette-oberbeuren.de",[189,190,191]],["pwsweather.com",192],["xfree.com",193],["theweathernetwork.com",[194,195]],["monese.com",[196,197,198]],["assos.com",196],["helmut-fischer.com",199],["myscience.org",200],["7-eleven.com",201],["airwallex.com",202],["streema.com",203],["gov.lv",204],["tise.com",205],["codecamps.com",206],["avell.com.br",207],["moneyfarm.com",208],["app.moneyfarm.com",208],["simpl.rent",209],["hubspot.com",210],["prodyna.com",[211,212,213,214]],["zutobi.com",[211,212,213,214]],["calm.com",[215,216]],["pubgesports.com",[217,218,219]],["outwrite.com",220],["sberbank.com",221],["sbermarket.ru",222],["bgextras.co.uk",223],["sede.coruna.gal",224],["czech-server.cz",225],["hitech-gamer.com",226],["bialettikave.hu",[227,228,229]],["canalplus.com",[230,231,232]],["mader.bz.it",[233,234,235]],["supply.amazon.co.uk",236],["bhaptics.com",237],["cleverbot.com",238],["watchaut.film",239],["tuffaloy.com",240],["fanvue.com",240],["electronoobs.com",241],["xn--lkylen-vxa.se",242],["tiefenthaler-landtechnik.at",243],["tiefenthaler-landtechnik.ch",243],["tiefenthaler-landtechnik.de",243],["huisartsenpraktijkdoorn.nl",244],["varma.fi",245],["vyos.io",246],["digimobil.es",[247,248]],["teenage.engineering",249],["merrell.pl",[250,505]],["converse.pl",250],["shop.wf-education.com",[250,505]],["converse.com",[251,252]],["buyandapply.nexus.org.uk",253],["img.ly",254],["halonen.fi",[254,282,283,284,285]],["carlson.fi",[254,282,283,284,285]],["cams.ashemaletube.com",[255,256]],["electronicacerler.com",[257,258,259]],["okpoznan.pl",[260,262]],["ielts.idp.com",261],["endlesstools.io",263],["thehacker.recipes",264],["mbhszepkartya.hu",265],["casellimoveis.com.br",266],["embedplus.com",267],["e-file.pl",268],["sp215.info",269],["empik.com",270],["senda.pl",271],["befestigungsfuchs.de",272],["cut-tec.co.uk",273],["gaytimes.co.uk",274],["hello.one",275],["wildcat-koeln.de",276],["libraries.merton.gov.uk",[277,278]],["tommy.hr",[279,280]],["usit.uio.no",281],["demo-digital-twin.r-stahl.com",286],["la31devalladolid.com",[287,288]],["mx.com",289],["foxtrail.fjallraven.com",290],["dotwatcher.cc",291],["bazarchic.com",[292,293,294]],["seedrs.com",295],["mypensiontracker.co.uk",296],["praxisplan.at",[296,319]],["endclothing.com",297],["esimplus.me",298],["cineplanet.com.pe",299],["ecologi.com",300],["wamba.com",301],["eurac.edu",302],["akasaair.com",303],["rittal.com",304],["wizards.com",305],["worstbassist.com",[306,307,308,309,310,311]],["zs-watch.com",312],["crown.com",313],["mesanalyses.fr",314],["teket.jp",315],["fish.shimano.com",[316,317,318]],["simsherpa.com",[320,321,322]],["translit.ru",323],["aruba.com",324],["aireuropa.com",325],["skfbearingselect.com",[326,327]],["scanrenovation.com",328],["ttela.se",329],["dominospizza.pl",330],["devagroup.pl",331],["hintaopas.fi",332],["ledenicheur.fr",332],["prisjagt.dk",332],["prisjakt.no",332],["prisjakt.nu",332],["pricespy.co.uk",332],["pricespy.co.nz",332],["horecaworld.biz",333],["horecaworld.be",333],["secondsol.com",333],["angelifybeauty.com",334],["cotopaxi.com",335],["kaluga.hh.ru",336],["justjoin.it",337],["digibest.pt",338],["two-notes.com",339],["theverge.com",340],["daimant.co",341],["secularism.org.uk",342],["karriere-hamburg.de",343],["musicmap.info",344],["gasspisen.se",345],["medtube.pl",346],["medtube.es",346],["medtube.fr",346],["medtube.net",346],["standard.sk",347],["linmot.com",348],["larian.com",[348,610]],["containerandpackaging.com",349],["top-yp.de",350],["termania.net",351],["swisscard.ch",352],["account.nowpayments.io",353],["fizjobaza.pl",354],["gigasport.at",355],["gigasport.de",355],["gigasport.ch",355],["velleahome.gr",356],["nicequest.com",357],["handelsbanken.no",358],["handelsbanken.com",358],["handelsbanken.co.uk",358],["handelsbanken.se",[358,443]],["handelsbanken.dk",358],["handelsbanken.fi",358],["songtradr.com",[359,594]],["logo.pt",[360,361]],["flexwhere.co.uk",[362,363]],["flexwhere.de",[362,363]],["pricewise.nl",362],["getunleash.io",362],["dentmania.de",362],["free.navalny.com",362],["latoken.com",362],["campusbrno.cz",[365,366,367]],["secrid.com",368],["etsy.com",369],["deps.dev",370],["buf.build",371],["starofservice.com",372],["ytcomment.kmcat.uk",373],["gmx.com",374],["gmx.fr",374],["karofilm.ru",375],["octopusenergy.it",376],["octopusenergy.es",[376,377]],["justanswer.es",378],["justanswer.de",378],["justanswer.com",378],["justanswer.co.uk",378],["citilink.ru",379],["huutokaupat.com",380],["kaggle.com",381],["emr.ch",[382,387]],["gem.cbc.ca",383],["pumatools.hu",384],["ici.tou.tv",385],["crunchyroll.com",386],["clipchamp.com",388],["trouwenbijfletcher.nl",388],["fletcher.nl",388],["fletcherzakelijk.nl",388],["intermatic.com",388],["ebikelohr.de",389],["eurosender.com",390],["melectronics.ch",391],["guard.io",392],["schrottpreis.org",393],["nokportalen.se",394],["dokiliko.com",395],["valamis.com",[396,397,398]],["sverigesingenjorer.se",399],["shop.almawin.de",[400,401,402,446]],["textshuttle.com",403],["zeitzurtrauer.de",404],["sumsub.com",[405,406,407]],["atman.pl",[405,406,407]],["fabriziovanmarciano.com",[405,406,407]],["nationalrail.com",[405,406,407]],["eett.gr",[405,406,407]],["funkypotato.com",[405,406,407]],["equalexchange.co.uk",[405,406,407]],["swnsdigital.com",[405,406,407]],["hemglass.se",[406,407,408,409,410]],["tampereenratikka.fi",[406,619,620,621]],["kymppikatsastus.fi",[406,407,410,657]],["gogolf.fi",[407,408]],["hanse-haus-greifswald.de",407],["skaling.de",[411,412,413]],["bringmeister.de",414],["project529.com",415],["clearblue.com",416],["drewag.de",[417,418,419]],["enso.de",[417,418,419]],["buidlbox.io",417],["helitransair.com",420],["more.com",421],["nwslsoccer.com",421],["climatecentral.org",422],["resolution.de",423],["flagma.by",424],["eatsalad.com",425],["pacstall.dev",426],["web2.0calc.fr",427],["de-appletradein.likewize.com",428],["swissborg.com",429],["qwice.com",430],["canalpluskuchnia.pl",[431,432]],["uizard.io",433],["stmas.bayern.de",[434,437]],["novayagazeta.eu",435],["kinopoisk.ru",436],["yandex.ru",436],["go.netia.pl",[438,439]],["polsatboxgo.pl",[438,439]],["ing.it",[440,441]],["ing.nl",442],["youcom.com.br",444],["rule34.paheal.net",445],["korodrogerie.de",446],["der-puten-shop.de",446],["katapult-shop.de",446],["evocsports.com",446],["esm-computer.de",446],["calmwaters.de",446],["mellerud.de",446],["akustik-projekt.at",446],["vansprint.de",446],["0815.at",446],["0815.eu",446],["ojskate.com",446],["der-schweighofer.de",446],["tz-bedarf.de",446],["zeinpharma.de",446],["weicon.com",446],["dagvandewebshop.be",446],["thiele-tee.de",446],["carbox.de",446],["riapsport.de",446],["trendpet.de",446],["eheizung24.de",446],["seemueller.com",446],["vivande.de",446],["heidegrill.com",446],["gladiator-fightwear.com",446],["h-andreas.com",446],["pp-parts.com",446],["natuerlich-holzschuhe.de",446],["massivart.de",446],["malermeister-shop.de",446],["imping-confiserie.de",446],["lenox-trading.at",446],["cklenk.de",446],["catolet.de",446],["drinkitnow.de",446],["patisserie-m.de",446],["storm-proof.com",446],["balance-fahrradladen.de",446],["magicpos.shop",446],["zeinpharma.com",446],["sps-handel.net",446],["novagenics.com",446],["butterfly-circus.de",446],["holzhof24.de",446],["w6-wertarbeit.de",446],["fleurop.de",446],["leki.com",446],["extremeaudio.de",446],["taste-market.de",446],["delker-optik.de",446],["stuhl24-shop.de",446],["g-nestle.de",446],["alpine-hygiene.ch",446],["fluidmaster.it",446],["cordon.de",446],["belisse-beauty.de",446],["belisse-beauty.co.uk",446],["wpc-shop24.de",446],["liv.si",446],["maybach-luxury.com",446],["leiternprofi24.de",446],["karls-shop.de",447],["firmen.wko.at",448],["byggern.no",449],["hot.si",[450,451,452,453]],["dopt.com",454],["oxfordonlineenglish.com",455],["pccomponentes.fr",456],["pccomponentes.com",456],["pccomponentes.pt",456],["oead.at",457],["innovationsstiftung-bildung.at",457],["etwinning.at",457],["arqa-vet.at",457],["zentrumfuercitizenscience.at",457],["vorstudienlehrgang.at",457],["erasmusplus.at",457],["jeger.pl",458],["bo.de",459],["thegamingwatcher.com",460],["webtv.stofa.dk",461],["plusujemy.pl",462],["asus.com.cn",[463,465]],["zentalk.asus.com",[463,465]],["mubi.com",464],["lawrievetgroup.co.uk",466],["59northwheels.se",467],["foto-gregor.de",468],["kamera-express.de",468],["kamera-express.be",468],["kamera-express.nl",468],["kamera-express.fr",468],["kamera-express.lu",468],["dhbbank.com",469],["dhbbank.de",469],["dhbbank.be",469],["dhbbank.nl",469],["login.ingbank.pl",470],["fabrykacukiernika.pl",[471,472]],["peaks.com",473],["3landesmuseen-braunschweig.de",474],["unifachbuch.de",[475,476,477]],["playlumi.com",[478,479,480]],["chatfuel.com",481],["studio3t.com",[482,483,484,485]],["realgap.co.uk",[486,487,488,489]],["hotelborgia.com",[490,491]],["sweet24.de",492],["zwembaddekouter.be",493],["flixclassic.pl",494],["jobtoday.com",495],["deltatre.com",[496,497,511]],["withings.com",[498,499,500]],["blista.de",[501,502]],["gift.be",[503,504]],["elevator.de",505],["foryouehealth.de",505],["animaze.us",505],["penn-elcom.com",505],["curantus.de",505],["mtbmarket.de",505],["spanienweinonline.ch",505],["novap.fr",505],["bizkaia.eus",[506,507,508]],["sinparty.com",509],["jobs.ch",510],["jobup.ch",510],["depop.com",[512,513]],["mantel.com",514],["armedangels.com",[515,516,517]],["e-dojus.lv",518],["burnesspaull.com",519],["oncosur.org",520],["ryanair.com",521],["refurbished.at",[522,523,524]],["refurbished.nl",[522,523,524]],["refurbished.be",[522,523,524]],["refurbishedstore.de",[522,523,524]],["bayernportal.de",[525,526,527]],["zipjob.com",528],["pricehubble.com",529],["ilmotorsport.de",530],["psbank.ru",531],["myriad.social",531],["exeedme.com",531],["followalice.com",[531,587]],["aqua-store.fr",532],["voila.ca",533],["anastore.com",534],["app.arzt-direkt.de",535],["dasfutterhaus.at",536],["e-pity.pl",537],["fillup.pl",538],["dailymotion.com",539],["barcawelt.de",540],["lueneburger-heide.de",541],["polizei.bayern.de",[542,544]],["ourworldofpixels.com",543],["jku.at",545],["matkahuolto.fi",546],["espacocasa.com",547],["altraeta.it",547],["centrooceano.it",547],["allstoresdigital.com",547],["cultarm3d.de",547],["soulbounce.com",547],["fluidtopics.com",547],["uvetgbt.com",547],["malcorentacar.com",547],["emondo.de",547],["maspero.it",547],["kelkay.com",547],["underground-england.com",547],["vert.eco",547],["turcolegal.com",547],["magnet4blogging.net",547],["moovly.com",547],["automationafrica.co.za",547],["jornaldoalgarve.pt",547],["keravanenergia.fi",547],["kuopas.fi",547],["frag-machiavelli.de",547],["healthera.co.uk",547],["mobeleader.com",547],["powerup-gaming.com",547],["developer-blog.net",547],["medical.edu.mt",547],["deh.mt",547],["bluebell-railway.com",547],["ribescasals.com",547],["javea.com",547],["chinaimportal.com",547],["inds.co.uk",547],["raoul-follereau.org",547],["serramenti-milano.it",547],["cosasdemujer.com",547],["luz-blanca.info",547],["cosasdeviajes.com",547],["safehaven.io",547],["havocpoint.it",547],["motofocus.pl",547],["nomanssky.com",547],["drei-franken-info.de",547],["clausnehring.com",547],["alttab.net",547],["kinderleicht.berlin",547],["kiakkoradio.fi",547],["cosasdelcaribe.es",547],["de-sjove-jokes.dk",547],["serverprofis.de",547],["biographyonline.net",547],["iziconfort.com",547],["sportinnederland.com",547],["natureatblog.com",547],["wtsenergy.com",547],["cosasdesalud.es",547],["internetpasoapaso.com",547],["zurzeit.at",547],["contaspoupanca.pt",547],["backmarket.de",[548,549,550]],["backmarket.co.uk",[548,549,550]],["backmarket.es",[548,549,550]],["backmarket.be",[548,549,550]],["backmarket.at",[548,549,550]],["backmarket.fr",[548,549,550]],["backmarket.gr",[548,549,550]],["backmarket.fi",[548,549,550]],["backmarket.ie",[548,549,550]],["backmarket.it",[548,549,550]],["backmarket.nl",[548,549,550]],["backmarket.pt",[548,549,550]],["backmarket.se",[548,549,550]],["backmarket.sk",[548,549,550]],["backmarket.com",[548,549,550]],["eleven-sportswear.cz",[551,552,553]],["silvini.com",[551,552,553]],["silvini.de",[551,552,553]],["purefiji.cz",[551,552,553]],["voda-zdarma.cz",[551,552,553]],["lesgarconsfaciles.com",[551,552,553]],["ulevapronohy.cz",[551,552,553]],["vitalvibe.eu",[551,552,553]],["plavte.cz",[551,552,553]],["mo-tools.cz",[551,552,553]],["flamantonlineshop.cz",[551,552,553]],["sandratex.cz",[551,552,553]],["norwayshop.cz",[551,552,553]],["3d-foto.cz",[551,552,553]],["neviditelnepradlo.cz",[551,552,553]],["nutrimedium.com",[551,552,553]],["silvini.cz",[551,552,553]],["karel.cz",[551,552,553]],["silvini.sk",[551,552,553]],["book-n-drive.de",554],["cotswoldoutdoor.com",555],["cotswoldoutdoor.ie",555],["cam.start.canon",556],["usnews.com",557],["researchaffiliates.com",558],["singkinderlieder.de",559],["ba.com",[562,563,564]],["britishairways.com",[562,563,564]],["cineman.pl",[565,566,567]],["tv-trwam.pl",[565,566,567,568]],["qatarairways.com",[569,570,571,572,573]],["vivaldi.com",574],["emuia1.gugik.gov.pl",575],["nike.com",576],["adidas.at",577],["adidas.be",577],["adidas.ca",577],["adidas.ch",577],["adidas.cl",577],["adidas.co",577],["adidas.co.in",577],["adidas.co.kr",577],["adidas.co.nz",577],["adidas.co.th",577],["adidas.co.uk",577],["adidas.com",577],["adidas.com.ar",577],["adidas.com.au",577],["adidas.com.br",577],["adidas.com.my",577],["adidas.com.ph",577],["adidas.com.vn",577],["adidas.cz",577],["adidas.de",577],["adidas.dk",577],["adidas.es",577],["adidas.fi",577],["adidas.fr",577],["adidas.gr",577],["adidas.ie",577],["adidas.it",577],["adidas.mx",577],["adidas.nl",577],["adidas.no",577],["adidas.pe",577],["adidas.pl",577],["adidas.pt",577],["adidas.ru",577],["adidas.se",577],["adidas.sk",577],["colourbox.com",578],["ebilet.pl",579],["myeventeo.com",580],["snap.com",581],["ratemyprofessors.com",582],["filen.io",583],["leotrippi.com",584],["restaurantclub.pl",584],["context.news",584],["stilord.com",585],["stilord.pl",585],["stilord.de",585],["stilord.fr",585],["quantamagazine.org",586],["scaleway.com",588],["hellotv.nl",589],["lasestrellas.tv",590],["shopforyou47.de",591],["kreativverliebt.de",591],["anderweltverlag.com",591],["octavio-shop.com",591],["forcetools-kepmar.eu",591],["fantecshop.de",591],["hexen-werkstatt.shop",591],["shop-naturstrom.de",591],["biona-shop.de",591],["camokoenig.de",591],["bikepro.de",591],["kaffeediscount.com",591],["vamos-skateshop.com",591],["holland-shop.com",591],["avonika.com",591],["officesuite.com",592],["fups.com",[593,595]],["scienceopen.com",596],["moebel-mahler-siebenlehn.de",[597,598]],["calendly.com",599],["batesenvironmental.co.uk",[600,601]],["ubereats.com",602],["101internet.ru",603],["bein.com",604],["beinsports.com",604],["figshare.com",605],["hitado.de",606],["bitso.com",607],["eco-toimistotarvikkeet.fi",608],["proficient.fi",608],["developer.ing.com",609],["webtrack.dhlglobalmail.com",611],["webtrack.dhlecs.com",611],["ehealth.gov.gr",612],["calvinklein.se",[613,614,615]],["calvinklein.fi",[613,614,615]],["calvinklein.sk",[613,614,615]],["calvinklein.si",[613,614,615]],["calvinklein.ch",[613,614,615]],["calvinklein.ru",[613,614,615]],["calvinklein.com",[613,614,615]],["calvinklein.pt",[613,614,615]],["calvinklein.pl",[613,614,615]],["calvinklein.at",[613,614,615]],["calvinklein.nl",[613,614,615]],["calvinklein.hu",[613,614,615]],["calvinklein.lu",[613,614,615]],["calvinklein.lt",[613,614,615]],["calvinklein.lv",[613,614,615]],["calvinklein.it",[613,614,615]],["calvinklein.ie",[613,614,615]],["calvinklein.hr",[613,614,615]],["calvinklein.fr",[613,614,615]],["calvinklein.es",[613,614,615]],["calvinklein.ee",[613,614,615]],["calvinklein.de",[613,614,615]],["calvinklein.dk",[613,614,615]],["calvinklein.cz",[613,614,615]],["calvinklein.bg",[613,614,615]],["calvinklein.be",[613,614,615]],["calvinklein.co.uk",[613,614,615]],["ofdb.de",616],["dtksoft.com",617],["serverstoplist.com",618],["doka.com",[625,626,627]],["abi.de",[628,629]],["studienwahl.de",[628,629]],["youthforum.org",630],["journal.hr",[631,632,633,634]],["howstuffworks.com",635],["stickypassword.com",[636,637,638]],["conversion-rate-experts.com",[639,640]],["merkur.si",[641,642,643]],["petitionenligne.com",[644,645]],["petitionenligne.be",[644,645]],["petitionenligne.fr",[644,645]],["petitionenligne.re",[644,645]],["petitionenligne.ch",[644,645]],["skrivunder.net",[644,645]],["petitiononline.uk",[644,645]],["petitions.nz",[644,645]],["petizioni.com",[644,645]],["peticao.online",[644,645]],["skrivunder.com",[644,645]],["peticiones.ar",[644,645]],["petities.com",[644,645]],["petitionen.com",[644,645]],["petice.com",[644,645]],["opprop.net",[644,645]],["peticiok.com",[644,645]],["peticiones.net",[644,645]],["peticion.es",[644,645]],["peticiones.pe",[644,645]],["peticiones.mx",[644,645]],["peticiones.cl",[644,645]],["peticije.online",[644,645]],["peticiones.co",[644,645]],["mediathek.lfv-bayern.de",646],["pracuj.pl",[647,648,649,650,651]],["vki.at",653],["konsument.at",653],["chollometro.com",654],["dealabs.com",654],["hotukdeals.com",654],["pepper.it",654],["pepper.pl",654],["preisjaeger.at",654],["mydealz.de",654],["easyfind.ch",[658,659]],["e-shop.leonidas.com",[660,661]],["lastmile.lt",662],["constantin.film",[663,664,665]],["notion.so",666],["digi24.ro",667],["omgevingsloketinzage.omgeving.vlaanderen.be",[668,669]],["primor.eu",670],["tameteo.com",671],["tempo.pt",671],["yourweather.co.uk",671],["meteored.cl",671],["meteored.mx",671],["tempo.com",671],["ilmeteo.net",671],["meteored.com.ar",671],["daswetter.com",671],["algarvevacation.net",672],["3sat.de",673]]);

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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    const getCookieValue = name => {
        for ( const s of document.cookie.split(/\s*;\s*/) ) {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { continue; }
            if ( s.slice(0, pos) !== name ) { continue; }
            return s.slice(pos+1);
        }
    };

    const cookieBefore = getCookieValue(name);
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

    if ( options.reload && getCookieValue(name) === value ) {
        window.location.reload();
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
