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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["tachyon-accepted-cookie-notice","true"],["cookie-optin","true"],["macfarlanes-necessary-cookies","accepted"],["consented","false"],["blukit_novo","true"],["cr","true"],["accept-cookies","accepted"],["dvag_cookies2023","1"],["consent_cookie","1"],["permissionExperience","false"],["permissionPerformance","false"],["permissionMarketing","false"],["consent_analytics","false"],["consent_received","true"],["cookieModal","false"],["user-accepted-AEPD-cookies","1"],["personalization-cookies-consent","0","","reload","1"],["analitics-cookies-consent","0"],["sscm_consent_widget","1"],["texthelp_cookie_consent_in_eu","0"],["texthelp_cookie_consent","yes"],["nc_cookies","accepted"],["nc_analytics","rejected"],["nc_marketing","rejected"],[".AspNet.Consent","no","","reload","1"],["user_gave_consent","1"],["user_gave_consent_new","1"],["rt-cb-approve","true"],["CookieLayerDismissed","true"],["RODOclosed","true"],["cookieDeclined","1"],["cookieModal","true"],["oph-mandatory-cookies-accepted","true"],["dw_is_new_consent","true"],["accept_political","1"],["konicaminolta.us","1"],["cookiesAnalyticsApproved","0"],["hasConfiguredCookies","1"],["cookiesPubliApproved","0"],["cookieAuth","1"],["kscookies","true"],["cookie-policy","true"],["cookie-agreed","0"],["cookie-use-accept","false"],["ga-disable-UA-xxxxxxxx-x","true"],["consent","1"],["cookie-bar","no"],["cookie_consent","false"],["uce-cookie","N"],["tarteaucitron","false"],["cookiePolicies","true"],["wed_cookie_info","1"],["cookie_optin_q","false"],["ce-cookie","N"],["NTCookies","0"],["alertCookie","1","","reload","1"],["gdpr","1"],["hideCookieBanner","true"],["obligatory","true"],["marketing","false"],["analytics","false"],["cookieControl","true"],["plosCookieConsentStatus","false"],["user_accepted_cookies","1"],["analyticsAccepted","false"],["cookieAccepted","true"],["hide-gdpr-bar","true"],["promptCookies","1"],["_cDaB","1"],["_aCan_analytical","0"],["_aGaB","1"],["surbma-gpga","no"],["elrowCookiePolicy","yes"],["ownit_cookie_data_permissions","1"],["Cookies_Preferences","accepted"],["Cookies_Preferences_Analytics","declined"],["privacyPolicyAccepted","true"],["Cookies-Accepted","true"],["cc-accepted","2"],["cc-item-google","false"],["accept_cookies","accepted"],["featureConsent","false","","reload","1"],["accept-cookie","no"],["consent","0","","reload","1"],["cookiePrivacyPreferenceBannerProduction","accepted"],["cookiesConsent","false"],["2x1cookies","1"],["firstPartyDataPrefSet","true"],["cookies-required","1","","reload","1"],["kh_cookie_level4","false"],["kh_cookie_level3","false"],["kh_cookie_level1","true"],["cookie_agreement","1","","reload","1"],["MSC_Cookiebanner","false"],["cookieConsent_marketing","false"],["Fitnessing21-15-9","0"],["cookies_popup","yes"],["cookieConsent_required","true","","reload","1"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["FTCookieCompliance","1"],["cookie-bar","0"],["cookiePopupAccepted","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["cookies-rejected","true"],["NL_COOKIE_KOMFORT","false"],["NL_COOKIE_MEMORY","true","","reload","1"],["NL_COOKIE_STATS","false"],["pws_gdrp_accept","1"],["have18","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ae-cookiebanner","true"],["ae-esential","true"],["ae-statistics","false"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["cookieConsent","1"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["cookie-consent","0"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["cookie-accepted","yes"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["gatsby-plugin-google-tagmanager","false"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","no"],["cookielawinfo-checkbox-performance","no"],["cookielawinfo-checkbox-analytics","no"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["cookie-preference-v3","1"],["consent","true"],["cookies_accepted","yes"],["permission_marketing_cookies","0"],["permission_statistic_cookies","0"],["permission_funktional_cookies","1"],["cookieconsent","1"],["dopt_consent","false"],["ooe_cookie_policy_accepted","no"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","false","","reload","1"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["3LM-Cookie","false"],["i_sc_a","false"],["i_cm_a","false"],["i_c_a","true"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["COOKIE_CONSENT","1","","reload","1"],["COOKIE_STATIC","false"],["COOKIE_MARKETING","false"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["privacyAccepted","true"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["analyticsCookieAccepted","0"],["cookieAccepted","0"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookie_analytcs","false","","reload","1"],["dhl-webapp-track","allowed"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["cookielawinfo-checkbox-markkinointi","no"],["cookielawinfo-checkbox-tilastointi","no"],["viewed_cookie_policy","no"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["num_times_cookie_consent_banner_shown","1"],["cookie_consent_banner_shown_last_time","1"],["privacy_hint","1"],["gpc_v","1"],["gpc_ad","0"],["gpc_analytic","0"],["gpc_audience","0"],["gpc_func","0"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["marketingCookies","false"],["internalCookies","false"],["essentialsCookies","true"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"],["acepta_cookie","acepta"],["3sat_cmp_configuration","true"]];

const hostnamesMap = new Map([["greenbuildingadvisor.com",[0,1,2]],["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["m.twitch.tv",4],["kzvb.de",5],["macfarlanes.com",6],["samplerite.com",7],["samplerite.cn",7],["blukit.com.br",8],["biegnaszczyt.pl",9],["itv.com",10],["dvag.de",11],["premierinn.com",[12,13,14,15]],["whitbreadinns.co.uk",[12,13,14,15]],["barandblock.co.uk",[12,13,14,15]],["tabletable.co.uk",[12,13,14,15]],["brewersfayre.co.uk",[12,13,14,15]],["beefeater.co.uk",[12,13,14,15]],["allstarssportsbars.co.uk",[16,17]],["babiesrus.ca",18],["toysrus.ca",18],["roomsandspaces.ca",18],["athletic-club.eus",[19,20,21]],["wattoo.dk",22],["wattoo.no",22],["texthelp.com",[23,24]],["courierexchange.co.uk",[25,26,27]],["haulageexchange.co.uk",[25,26,27]],["tlaciarik.sk",28],["tiskarik.cz",28],["sseriga.edu",[29,30]],["rt.com",31],["swrng.de",32],["crfop.gdos.gov.pl",33],["nurgutes.de",34],["kpcen-torun.edu.pl",35],["opintopolku.fi",36],["debenhams.com",37],["archiwumalle.pl",38],["konicaminolta.ca",39],["konicaminolta.us",39],["deutschebank-dbdirect.com",[40,41,42]],["dbonline.deutsche-bank.es",[40,41,42]],["deutsche-bank.es",[40,41,42]],["hipotecaonline.db.com",43],["kangasalansanomat.fi",44],["eif.org",45],["tunnelmb.net",45],["press.princeton.edu",46],["sugi-net.jp",47],["understandingsociety.ac.uk",48],["autohero.com",49],["leibniz.com",49],["bargaintown.ie",50],["finimize.com",51],["rtu.lv",52],["sysdream.com",53],["cinemarkca.com",54],["wedding.pl",55],["neander-zahn.de",56],["theadelphileeds.co.uk",57],["tobycarvery.co.uk",57],["carsupermarket.com",57],["viajesatodotren.com",58],["ticketingcine.fr",59],["agenziavista.it",60],["e-chladiva.cz",60],["bitecode.dev",61],["mjob.si",[62,63,64]],["airportrentacar.gr",65],["plos.org",66],["autohaus24.de",67],["sixt-neuwagen.de",67],["gadis.es",[68,69]],["dom.ru",69],["ford-kimmerle-reutlingen.de",70],["autohaus-reitermayer.de",70],["autohaus-diefenbach-waldbrunn.de",70],["autohaus-diefenbach.de",70],["autohaus-musberg.de",70],["ford-ah-im-hunsrueck-simmern.de",70],["ford-arndt-goerlitz.de",70],["ford-autogalerie-alfeld.de",70],["ford-bacher-schrobenhausen.de",70],["ford-bathauer-bad-harzburg.de",70],["ford-behrend-waren.de",70],["ford-bergland-frankfurt-oder.de",70],["ford-bergland-wipperfuerth.de",70],["ford-besico-glauchau.de",70],["ford-besico-nuernberg.de",70],["ford-bischoff-neumuenster.de",70],["ford-bodach-borgentreich.de",70],["ford-bunk-saarbruecken.de",70],["ford-bunk-voelklingen.de",70],["ford-busch-kirchberg.de",70],["ford-diermeier-muenchen.de",70],["ford-dinnebier-leipzig.de",70],["ford-duennes-regensburg.de",70],["ford-fischer-bochum.de",70],["ford-fischer-muenster.de",70],["ford-foerster-koblenz.de",70],["ford-fuchs-uffenheim.de",70],["ford-geberzahn-koeln.de",70],["ford-gerstmann-duesseldorf.de",70],["ford-haefner-und-strunk-kassel.de",70],["ford-hartmann-kempten.de",70],["ford-hartmann-rastatt.de",70],["ford-hatzner-karlsruhe.de",70],["ford-heine-hoexter.de",70],["ford-hentschel-hildesheim.de",70],["ford-hessengarage-dreieich.de",70],["ford-hessengarage-frankfurt.de",70],["ford-hga-windeck.de",70],["ford-hommert-coburg.de",70],["ford-horstmann-rastede.de",70],["ford-janssen-sonsbeck.de",70],["ford-jochem-stingbert.de",70],["ford-jungmann-wuppertal.de",70],["ford-kestel-marktzeuln.de",70],["ford-klaiber-bad-friedrichshall.de",70],["ford-koenig-eschwege.de",70],["ford-kohlhoff-mannheim.de",70],["ford-kt-automobile-coesfeld.de",70],["ford-lackermann-wesel.de",70],["ford-ludewig-delligsen.de",70],["ford-maiwald-linsengericht.de",70],["ford-mertens-beckum.de",70],["ford-meyer-bad-oeynhausen.de",70],["ford-mgs-bayreuth.de",70],["ford-mgs-radebeul.de",70],["ford-muecke-berlin.de",70],["ford-norren-weissenthurm.de",70],["ford-nrw-garage-duesseldorf.de",70],["ford-nrw-garage-handweiser.de",70],["ford-nuding-remshalden.de",70],["ford-ohm-rendsburg.de",70],["ford-reinicke-muecheln.de",70],["ford-rennig.de",70],["ford-roerentrop-luenen.de",70],["ford-schankola-dudweiler.de",70],["ford-sg-goeppingen.de",70],["ford-sg-leonberg.de",70],["ford-sg-neu-ulm.de",70],["ford-sg-pforzheim.de",70],["ford-sg-waiblingen.de",70],["ford-storz-st-georgen.de",70],["ford-strunk-koeln.de",70],["ford-tobaben-hamburg.de",70],["ford-toenjes-zetel.de",70],["ford-wagner-mayen.de",70],["ford-wahl-fritzlar.de",70],["ford-wahl-siegen.de",70],["ford-weege-bad-salzuflen.de",70],["ford-westhoff-hamm.de",70],["ford-wieland-hasbergen.de",70],["renault-autocenterprignitz-pritzwalk.de",70],["renault-spenrath-juelich.de",70],["vitalllit.com",71],["fincaparera.com",71],["dbnetbcn.com",71],["viba.barcelona",71],["anafaustinoatelier.com",71],["lamparasherrero.com",71],["calteixidor.cat",71],["argentos.barcelona",71],["anmarlube.com",71],["anynouxines.barcelona",71],["crearunapaginaweb.cat",71],["cualesmiip.com",71],["porndoe.com",[72,73,74]],["thinkingaustralia.com",75],["elrow.com",76],["ownit.se",77],["velo-antwerpen.be",[78,79]],["wwnorton.com",80],["pc-canada.com",81],["mullgs.se",82],["1a-sehen.de",83],["anker.com",84],["feature.fm",85],["comte.com",86],["baltic-watches.com",87],["np-brijuni.hr",87],["vilgain.com",87],["tradingview.com",88],["wevolver.com",89],["experienciasfree.com",90],["freemans.com",91],["kivikangas.fi",92],["melkkobrew.fi",92],["kh.hu",[93,94,95]],["aplgo.com",96],["securityconference.org",97],["aha.or.at",[98,101]],["fantasyfitnessing.com",99],["chocolateemporium.com",100],["account.samsung.com",102],["crushwineco.com",103],["levi.pt",104],["fertagus.pt",105],["rockpoint.cz",106],["rockpoint.sk",106],["parfum-zentrum.de",106],["candy-store.cz",106],["smiggle.co.uk",107],["ubisoft.com",[108,109,110,111]],["store.ubisoft.com",[108,111,535,536]],["thulb.uni-jena.de",112],["splityourticket.co.uk",113],["eramba.org",114],["openai.com",115],["kupbilecik.com",[116,117]],["kupbilecik.de",[116,117]],["kupbilecik.pl",[116,117]],["shopilya.com",118],["haustier-berater.de",119],["hfm-frankfurt.de",119],["zoommer.ge",120],["studentapan.se",121],["petcity.lt",[122,123,124,125]],["tobroco.com",[126,130]],["tobroco.nl",[126,130]],["tobroco-giant.com",[126,130]],["geosfreiberg.de",[127,128]],["eapvic.org",129],["bassolsenergia.com",129],["bammusic.com",[131,133,134]],["green-24.de",132],["phish-test.de",135],["bokadirekt.se",136],["ford.lt",137],["ford.pt",137],["ford.fr",137],["ford.de",137],["ford.dk",137],["ford.pl",137],["ford.se",137],["ford.nl",137],["ford.no",137],["ford.fi",137],["ford.gr",137],["ford.it",137],["data-media.gr",138],["e-food.gr",[139,140]],["bvmed.de",141],["babyshop.com",[142,143,144]],["griffbereit24.de",145],["checkwx.com",146],["calendardate.com",147],["wefashion.ch",148],["wefashion.fr",148],["wefashion.lu",148],["wefashion.be",148],["wefashion.de",148],["wefashion.nl",148],["brettspiel-angebote.de",[149,150]],["nio.com",151],["kancelarskepotreby.net",[152,153,154]],["segment-anything.com",155],["sketch.metademolab.com",156],["cambridgebs.co.uk",157],["freizeitbad-greifswald.de",158],["giuseppezanotti.com",[159,160,161]],["xcen.se",161],["biggreenegg.co.uk",162],["skihuette-oberbeuren.de",[163,164,165]],["pwsweather.com",166],["xfree.com",167],["theweathernetwork.com",[168,169]],["monese.com",[170,171,172]],["assos.com",170],["helmut-fischer.com",173],["myscience.org",174],["7-eleven.com",175],["airwallex.com",176],["streema.com",177],["gov.lv",178],["tise.com",179],["codecamps.com",180],["avell.com.br",181],["moneyfarm.com",182],["app.moneyfarm.com",182],["simpl.rent",183],["hubspot.com",184],["prodyna.com",[185,186,187,188]],["zutobi.com",[185,186,187,188]],["calm.com",[189,190]],["pubgesports.com",[191,192,193]],["outwrite.com",194],["sberbank.com",195],["sbermarket.ru",196],["bgextras.co.uk",197],["sede.coruna.gal",198],["czech-server.cz",199],["hitech-gamer.com",200],["bialettikave.hu",[201,202,203]],["canalplus.com",[204,205,206]],["mader.bz.it",[207,208,209]],["supply.amazon.co.uk",210],["bhaptics.com",211],["cleverbot.com",212],["watchaut.film",213],["tuffaloy.com",214],["fanvue.com",214],["electronoobs.com",215],["xn--lkylen-vxa.se",216],["tiefenthaler-landtechnik.at",217],["tiefenthaler-landtechnik.ch",217],["tiefenthaler-landtechnik.de",217],["huisartsenpraktijkdoorn.nl",218],["varma.fi",219],["vyos.io",220],["digimobil.es",[221,222]],["teenage.engineering",223],["merrell.pl",[224,481]],["converse.pl",224],["shop.wf-education.com",[224,481]],["converse.com",[225,226]],["buyandapply.nexus.org.uk",227],["img.ly",228],["halonen.fi",[228,257,258,259,260]],["carlson.fi",[228,257,258,259,260]],["cams.ashemaletube.com",[229,230]],["electronicacerler.com",[231,232,233]],["okpoznan.pl",[234,236]],["ielts.idp.com",235],["citibankonline.pl",237],["endlesstools.io",238],["thehacker.recipes",239],["mbhszepkartya.hu",240],["casellimoveis.com.br",241],["embedplus.com",242],["e-file.pl",243],["sp215.info",244],["empik.com",245],["senda.pl",246],["befestigungsfuchs.de",247],["cut-tec.co.uk",248],["gaytimes.co.uk",249],["hello.one",250],["wildcat-koeln.de",251],["libraries.merton.gov.uk",[252,253]],["tommy.hr",[254,255]],["usit.uio.no",256],["demo-digital-twin.r-stahl.com",261],["la31devalladolid.com",[262,263]],["mx.com",264],["foxtrail.fjallraven.com",265],["dotwatcher.cc",266],["bazarchic.com",[267,268,269]],["seedrs.com",270],["mypensiontracker.co.uk",271],["praxisplan.at",[271,294]],["endclothing.com",272],["esimplus.me",273],["cineplanet.com.pe",274],["ecologi.com",275],["wamba.com",276],["eurac.edu",277],["akasaair.com",278],["rittal.com",279],["wizards.com",280],["worstbassist.com",[281,282,283,284,285,286]],["zs-watch.com",287],["crown.com",288],["mesanalyses.fr",289],["teket.jp",290],["fish.shimano.com",[291,292,293]],["simsherpa.com",[295,296,297]],["translit.ru",298],["aruba.com",299],["aireuropa.com",300],["skfbearingselect.com",[301,302]],["scanrenovation.com",303],["ttela.se",304],["dominospizza.pl",305],["devagroup.pl",306],["hintaopas.fi",307],["ledenicheur.fr",307],["prisjagt.dk",307],["prisjakt.no",307],["prisjakt.nu",307],["pricespy.co.uk",307],["pricespy.co.nz",307],["horecaworld.biz",308],["horecaworld.be",308],["secondsol.com",308],["angelifybeauty.com",309],["cotopaxi.com",310],["kaluga.hh.ru",311],["justjoin.it",312],["digibest.pt",313],["two-notes.com",314],["theverge.com",315],["daimant.co",316],["secularism.org.uk",317],["karriere-hamburg.de",318],["musicmap.info",319],["gasspisen.se",320],["medtube.pl",321],["medtube.es",321],["medtube.fr",321],["medtube.net",321],["standard.sk",322],["linmot.com",323],["larian.com",[323,585]],["containerandpackaging.com",324],["top-yp.de",325],["termania.net",326],["swisscard.ch",327],["account.nowpayments.io",328],["fizjobaza.pl",329],["gigasport.at",330],["gigasport.de",330],["gigasport.ch",330],["velleahome.gr",331],["nicequest.com",332],["handelsbanken.no",333],["handelsbanken.com",333],["handelsbanken.co.uk",333],["handelsbanken.se",[333,419]],["handelsbanken.dk",333],["handelsbanken.fi",333],["songtradr.com",[334,569]],["logo.pt",[335,336]],["flexwhere.co.uk",[337,338]],["flexwhere.de",[337,338]],["pricewise.nl",337],["getunleash.io",337],["dentmania.de",337],["free.navalny.com",337],["latoken.com",337],["waitrose.com",[339,340]],["campusbrno.cz",[341,342,343]],["secrid.com",344],["etsy.com",345],["deps.dev",346],["buf.build",347],["starofservice.com",348],["ytcomment.kmcat.uk",349],["gmx.com",350],["gmx.fr",350],["karofilm.ru",351],["octopusenergy.it",352],["octopusenergy.es",[352,353]],["justanswer.es",354],["justanswer.de",354],["justanswer.com",354],["justanswer.co.uk",354],["citilink.ru",355],["huutokaupat.com",356],["kaggle.com",357],["emr.ch",[358,363]],["gem.cbc.ca",359],["pumatools.hu",360],["ici.tou.tv",361],["crunchyroll.com",362],["clipchamp.com",364],["trouwenbijfletcher.nl",364],["fletcher.nl",364],["fletcherzakelijk.nl",364],["intermatic.com",364],["ebikelohr.de",365],["eurosender.com",366],["melectronics.ch",367],["guard.io",368],["schrottpreis.org",369],["nokportalen.se",370],["dokiliko.com",371],["valamis.com",[372,373,374]],["sverigesingenjorer.se",375],["shop.almawin.de",[376,377,378,422]],["textshuttle.com",379],["zeitzurtrauer.de",380],["sumsub.com",[381,382,383]],["atman.pl",[381,382,383]],["fabriziovanmarciano.com",[381,382,383]],["nationalrail.com",[381,382,383]],["eett.gr",[381,382,383]],["funkypotato.com",[381,382,383]],["equalexchange.co.uk",[381,382,383]],["swnsdigital.com",[381,382,383]],["hemglass.se",[382,383,384,385,386]],["tampereenratikka.fi",[382,594,595,596]],["gogolf.fi",[383,384]],["hanse-haus-greifswald.de",383],["skaling.de",[387,388,389]],["bringmeister.de",390],["project529.com",391],["clearblue.com",392],["drewag.de",[393,394,395]],["enso.de",[393,394,395]],["buidlbox.io",393],["helitransair.com",396],["more.com",397],["nwslsoccer.com",397],["climatecentral.org",398],["resolution.de",399],["flagma.by",400],["eatsalad.com",401],["pacstall.dev",402],["web2.0calc.fr",403],["de-appletradein.likewize.com",404],["swissborg.com",405],["qwice.com",406],["canalpluskuchnia.pl",[407,408]],["uizard.io",409],["stmas.bayern.de",[410,413]],["novayagazeta.eu",411],["kinopoisk.ru",412],["yandex.ru",412],["go.netia.pl",[414,415]],["polsatboxgo.pl",[414,415]],["ing.it",[416,417]],["ing.nl",418],["youcom.com.br",420],["rule34.paheal.net",421],["der-puten-shop.de",422],["katapult-shop.de",422],["evocsports.com",422],["esm-computer.de",422],["calmwaters.de",422],["mellerud.de",422],["akustik-projekt.at",422],["vansprint.de",422],["0815.at",422],["0815.eu",422],["ojskate.com",422],["der-schweighofer.de",422],["tz-bedarf.de",422],["zeinpharma.de",422],["weicon.com",422],["dagvandewebshop.be",422],["thiele-tee.de",422],["carbox.de",422],["riapsport.de",422],["trendpet.de",422],["eheizung24.de",422],["seemueller.com",422],["vivande.de",422],["heidegrill.com",422],["gladiator-fightwear.com",422],["h-andreas.com",422],["pp-parts.com",422],["natuerlich-holzschuhe.de",422],["massivart.de",422],["malermeister-shop.de",422],["imping-confiserie.de",422],["lenox-trading.at",422],["cklenk.de",422],["catolet.de",422],["drinkitnow.de",422],["patisserie-m.de",422],["storm-proof.com",422],["balance-fahrradladen.de",422],["magicpos.shop",422],["zeinpharma.com",422],["sps-handel.net",422],["novagenics.com",422],["butterfly-circus.de",422],["holzhof24.de",422],["w6-wertarbeit.de",422],["fleurop.de",422],["leki.com",422],["extremeaudio.de",422],["taste-market.de",422],["delker-optik.de",422],["stuhl24-shop.de",422],["g-nestle.de",422],["alpine-hygiene.ch",422],["fluidmaster.it",422],["cordon.de",422],["belisse-beauty.de",422],["belisse-beauty.co.uk",422],["wpc-shop24.de",422],["liv.si",422],["maybach-luxury.com",422],["leiternprofi24.de",422],["karls-shop.de",423],["firmen.wko.at",424],["byggern.no",425],["hot.si",[426,427,428,429]],["dopt.com",430],["oxfordonlineenglish.com",431],["pccomponentes.fr",432],["pccomponentes.com",432],["pccomponentes.pt",432],["oead.at",433],["innovationsstiftung-bildung.at",433],["etwinning.at",433],["arqa-vet.at",433],["zentrumfuercitizenscience.at",433],["vorstudienlehrgang.at",433],["erasmusplus.at",433],["jeger.pl",434],["bo.de",435],["thegamingwatcher.com",436],["webtv.stofa.dk",437],["plusujemy.pl",438],["asus.com.cn",[439,441]],["zentalk.asus.com",[439,441]],["mubi.com",440],["lawrievetgroup.co.uk",442],["59northwheels.se",443],["foto-gregor.de",444],["kamera-express.de",444],["kamera-express.be",444],["kamera-express.nl",444],["kamera-express.fr",444],["kamera-express.lu",444],["dhbbank.com",445],["dhbbank.de",445],["dhbbank.be",445],["dhbbank.nl",445],["login.ingbank.pl",446],["fabrykacukiernika.pl",[447,448]],["peaks.com",449],["3landesmuseen-braunschweig.de",450],["unifachbuch.de",[451,452,453]],["playlumi.com",[454,455,456]],["chatfuel.com",457],["studio3t.com",[458,459,460,461]],["realgap.co.uk",[462,463,464,465]],["hotelborgia.com",[466,467]],["sweet24.de",468],["zwembaddekouter.be",469],["flixclassic.pl",470],["jobtoday.com",471],["deltatre.com",[472,473,487]],["withings.com",[474,475,476]],["blista.de",[477,478]],["gift.be",[479,480]],["elevator.de",481],["foryouehealth.de",481],["animaze.us",481],["penn-elcom.com",481],["curantus.de",481],["mtbmarket.de",481],["spanienweinonline.ch",481],["novap.fr",481],["bizkaia.eus",[482,483,484]],["sinparty.com",485],["jobs.ch",486],["jobup.ch",486],["depop.com",[488,489]],["mantel.com",490],["armedangels.com",[491,492,493]],["e-dojus.lv",494],["burnesspaull.com",495],["oncosur.org",496],["ryanair.com",497],["refurbished.at",[498,499,500]],["refurbished.nl",[498,499,500]],["refurbished.be",[498,499,500]],["refurbishedstore.de",[498,499,500]],["bayernportal.de",[501,502,503]],["zipjob.com",504],["pricehubble.com",505],["ilmotorsport.de",506],["psbank.ru",507],["myriad.social",507],["exeedme.com",507],["followalice.com",[507,562]],["aqua-store.fr",508],["voila.ca",509],["app.arzt-direkt.de",510],["dasfutterhaus.at",511],["e-pity.pl",512],["fillup.pl",513],["dailymotion.com",514],["barcawelt.de",515],["lueneburger-heide.de",516],["polizei.bayern.de",[517,519]],["ourworldofpixels.com",518],["jku.at",520],["matkahuolto.fi",521],["espacocasa.com",522],["altraeta.it",522],["centrooceano.it",522],["allstoresdigital.com",522],["cultarm3d.de",522],["soulbounce.com",522],["fluidtopics.com",522],["uvetgbt.com",522],["malcorentacar.com",522],["emondo.de",522],["maspero.it",522],["kelkay.com",522],["underground-england.com",522],["vert.eco",522],["turcolegal.com",522],["magnet4blogging.net",522],["moovly.com",522],["automationafrica.co.za",522],["jornaldoalgarve.pt",522],["keravanenergia.fi",522],["kuopas.fi",522],["frag-machiavelli.de",522],["healthera.co.uk",522],["mobeleader.com",522],["powerup-gaming.com",522],["developer-blog.net",522],["medical.edu.mt",522],["deh.mt",522],["bluebell-railway.com",522],["ribescasals.com",522],["javea.com",522],["chinaimportal.com",522],["inds.co.uk",522],["raoul-follereau.org",522],["serramenti-milano.it",522],["cosasdemujer.com",522],["luz-blanca.info",522],["cosasdeviajes.com",522],["safehaven.io",522],["havocpoint.it",522],["motofocus.pl",522],["nomanssky.com",522],["drei-franken-info.de",522],["clausnehring.com",522],["alttab.net",522],["kinderleicht.berlin",522],["kiakkoradio.fi",522],["cosasdelcaribe.es",522],["de-sjove-jokes.dk",522],["serverprofis.de",522],["biographyonline.net",522],["iziconfort.com",522],["sportinnederland.com",522],["natureatblog.com",522],["wtsenergy.com",522],["cosasdesalud.es",522],["internetpasoapaso.com",522],["zurzeit.at",522],["contaspoupanca.pt",522],["backmarket.de",[523,524,525]],["backmarket.co.uk",[523,524,525]],["backmarket.es",[523,524,525]],["backmarket.be",[523,524,525]],["backmarket.at",[523,524,525]],["backmarket.fr",[523,524,525]],["backmarket.gr",[523,524,525]],["backmarket.fi",[523,524,525]],["backmarket.ie",[523,524,525]],["backmarket.it",[523,524,525]],["backmarket.nl",[523,524,525]],["backmarket.pt",[523,524,525]],["backmarket.se",[523,524,525]],["backmarket.sk",[523,524,525]],["backmarket.com",[523,524,525]],["eleven-sportswear.cz",[526,527,528]],["silvini.com",[526,527,528]],["silvini.de",[526,527,528]],["purefiji.cz",[526,527,528]],["voda-zdarma.cz",[526,527,528]],["lesgarconsfaciles.com",[526,527,528]],["ulevapronohy.cz",[526,527,528]],["vitalvibe.eu",[526,527,528]],["plavte.cz",[526,527,528]],["mo-tools.cz",[526,527,528]],["flamantonlineshop.cz",[526,527,528]],["sandratex.cz",[526,527,528]],["norwayshop.cz",[526,527,528]],["3d-foto.cz",[526,527,528]],["neviditelnepradlo.cz",[526,527,528]],["nutrimedium.com",[526,527,528]],["silvini.cz",[526,527,528]],["karel.cz",[526,527,528]],["silvini.sk",[526,527,528]],["book-n-drive.de",529],["cotswoldoutdoor.com",530],["cotswoldoutdoor.ie",530],["cam.start.canon",531],["usnews.com",532],["researchaffiliates.com",533],["singkinderlieder.de",534],["ba.com",[537,538,539]],["britishairways.com",[537,538,539]],["cineman.pl",[540,541,542]],["tv-trwam.pl",[540,541,542,543]],["qatarairways.com",[544,545,546,547,548]],["vivaldi.com",549],["emuia1.gugik.gov.pl",550],["nike.com",551],["adidas.at",552],["adidas.be",552],["adidas.ca",552],["adidas.ch",552],["adidas.cl",552],["adidas.co",552],["adidas.co.in",552],["adidas.co.kr",552],["adidas.co.nz",552],["adidas.co.th",552],["adidas.co.uk",552],["adidas.com",552],["adidas.com.ar",552],["adidas.com.au",552],["adidas.com.br",552],["adidas.com.my",552],["adidas.com.ph",552],["adidas.com.vn",552],["adidas.cz",552],["adidas.de",552],["adidas.dk",552],["adidas.es",552],["adidas.fi",552],["adidas.fr",552],["adidas.gr",552],["adidas.ie",552],["adidas.it",552],["adidas.mx",552],["adidas.nl",552],["adidas.no",552],["adidas.pe",552],["adidas.pl",552],["adidas.pt",552],["adidas.ru",552],["adidas.se",552],["adidas.sk",552],["colourbox.com",553],["ebilet.pl",554],["myeventeo.com",555],["snap.com",556],["ratemyprofessors.com",557],["filen.io",558],["leotrippi.com",559],["restaurantclub.pl",559],["context.news",559],["stilord.com",560],["stilord.pl",560],["stilord.de",560],["stilord.fr",560],["quantamagazine.org",561],["scaleway.com",563],["hellotv.nl",564],["lasestrellas.tv",565],["shopforyou47.de",566],["kreativverliebt.de",566],["anderweltverlag.com",566],["octavio-shop.com",566],["forcetools-kepmar.eu",566],["fantecshop.de",566],["hexen-werkstatt.shop",566],["shop-naturstrom.de",566],["biona-shop.de",566],["camokoenig.de",566],["bikepro.de",566],["kaffeediscount.com",566],["vamos-skateshop.com",566],["holland-shop.com",566],["avonika.com",566],["officesuite.com",567],["fups.com",[568,570]],["scienceopen.com",571],["moebel-mahler-siebenlehn.de",[572,573]],["calendly.com",574],["batesenvironmental.co.uk",[575,576]],["ubereats.com",577],["101internet.ru",578],["bein.com",579],["beinsports.com",579],["figshare.com",580],["hitado.de",581],["bitso.com",582],["eco-toimistotarvikkeet.fi",583],["proficient.fi",583],["developer.ing.com",584],["webtrack.dhlglobalmail.com",586],["webtrack.dhlecs.com",586],["ehealth.gov.gr",587],["calvinklein.se",[588,589,590]],["calvinklein.fi",[588,589,590]],["calvinklein.sk",[588,589,590]],["calvinklein.si",[588,589,590]],["calvinklein.ch",[588,589,590]],["calvinklein.ru",[588,589,590]],["calvinklein.com",[588,589,590]],["calvinklein.pt",[588,589,590]],["calvinklein.pl",[588,589,590]],["calvinklein.at",[588,589,590]],["calvinklein.nl",[588,589,590]],["calvinklein.hu",[588,589,590]],["calvinklein.lu",[588,589,590]],["calvinklein.lt",[588,589,590]],["calvinklein.lv",[588,589,590]],["calvinklein.it",[588,589,590]],["calvinklein.ie",[588,589,590]],["calvinklein.hr",[588,589,590]],["calvinklein.fr",[588,589,590]],["calvinklein.es",[588,589,590]],["calvinklein.ee",[588,589,590]],["calvinklein.de",[588,589,590]],["calvinklein.dk",[588,589,590]],["calvinklein.cz",[588,589,590]],["calvinklein.bg",[588,589,590]],["calvinklein.be",[588,589,590]],["calvinklein.co.uk",[588,589,590]],["ofdb.de",591],["dtksoft.com",592],["serverstoplist.com",593],["doka.com",[597,598,599]],["abi.de",[600,601]],["studienwahl.de",[600,601]],["youthforum.org",602],["journal.hr",[603,604,605,606]],["howstuffworks.com",607],["stickypassword.com",[608,609,610]],["conversion-rate-experts.com",[611,612]],["merkur.si",[613,614,615]],["petitionenligne.com",[616,617]],["petitionenligne.be",[616,617]],["petitionenligne.fr",[616,617]],["petitionenligne.re",[616,617]],["petitionenligne.ch",[616,617]],["skrivunder.net",[616,617]],["petitiononline.uk",[616,617]],["petitions.nz",[616,617]],["petizioni.com",[616,617]],["peticao.online",[616,617]],["skrivunder.com",[616,617]],["peticiones.ar",[616,617]],["petities.com",[616,617]],["petitionen.com",[616,617]],["petice.com",[616,617]],["opprop.net",[616,617]],["peticiok.com",[616,617]],["peticiones.net",[616,617]],["peticion.es",[616,617]],["peticiones.pe",[616,617]],["peticiones.mx",[616,617]],["peticiones.cl",[616,617]],["peticije.online",[616,617]],["peticiones.co",[616,617]],["mediathek.lfv-bayern.de",618],["pracuj.pl",[619,620,621,622,623]],["vki.at",624],["konsument.at",624],["chollometro.com",625],["dealabs.com",625],["hotukdeals.com",625],["pepper.it",625],["pepper.pl",625],["preisjaeger.at",625],["mydealz.de",625],["kyoceradocumentsolutions.us",[626,627,628]],["kyoceradocumentsolutions.ch",[626,627,628]],["kyoceradocumentsolutions.co.uk",[626,627,628]],["kyoceradocumentsolutions.de",[626,627,628]],["kyoceradocumentsolutions.es",[626,627,628]],["kyoceradocumentsolutions.eu",[626,627,628]],["kyoceradocumentsolutions.fr",[626,627,628]],["kyoceradocumentsolutions.it",[626,627,628]],["kyoceradocumentsolutions.ru",[626,627,628]],["kyoceradocumentsolutions.mx",[626,627,628]],["kyoceradocumentsolutions.cl",[626,627,628]],["kyoceradocumentsolutions.com.br",[626,627,628]],["easyfind.ch",[629,630]],["e-shop.leonidas.com",[631,632]],["constantin.film",[633,634,635]],["notion.so",636],["digi24.ro",637],["omgevingsloketinzage.omgeving.vlaanderen.be",[638,639]],["primor.eu",640],["tameteo.com",641],["tempo.pt",641],["yourweather.co.uk",641],["meteored.cl",641],["meteored.mx",641],["tempo.com",641],["ilmeteo.net",641],["meteored.com.ar",641],["daswetter.com",641],["algarvevacation.net",642],["3sat.de",643]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
            return Object.fromEntries(entries);
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
