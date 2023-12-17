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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["cc-accepted","2"],["cookiePrivacyPreferenceBannerProduction","accepted"],["MSC_Cookiebanner","false"],["sa_enable","off"],["acceptcookietermCookieBanner","true"],["cookie_status","1","","reload","1"],["cookie-bar","0"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_ADS_OPTOUT","true"],["UBI_PRIVACY_POLICY_ACCEPTED","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["jocookie","false"],["cookieNotification.shown","1"],["localConsent","false"],["oai-allow-ne","false"],["allow-cookie","1"],["cookie-functional","1"],["hulkCookieBarClick","1"],["CookieConsent","1"],["zoommer-cookie_agreed","true"],["accepted_cookie_policy","true"],["gdpr_cookie_token","1"],["_consent_personalization","denied"],["_consent_analytics","denied"],["_consent_marketing","denied"],["cookieWall","1"],["no_cookies","1"],["hidecookiesbanner","1"],["CookienatorConsent","false"],["cookieWallOptIn","0"],["analyticsCookiesAccepted","false"],["cf4212_cn","1"],["mediaCookiesAccepted","false"],["mandatoryCookiesAccepted","true"],["gtag","true"],["BokadirektCookiePreferencesMP","1"],["cookieAcknowledged","true"],["data-privacy-statement","true"],["cookie_privacy_level","required"],["accepted_cookies","true"],["MATOMO_CONSENT_GIVEN","0"],["BABY_MARKETING_COOKIES_CONSENTED","false"],["BABY_PERFORMANCE_COOKIES_CONSENTED","false"],["BABY_NECESSARY_COOKIES_CONSENTED","true"],["consent_essential","allow"],["cookieshown","1"],["warn","true"],["optinCookieSetting","1"],["privacy-shown","true"],["slimstat_optout_tracking","true"],["npp_analytical","0"],["inshopCookiesSet","true"],["adsCookies","false"],["performanceCookies","false"],["sa_demo","false"],["animated_drawings","true"],["cookieStatus","true"],["swgCookie","false"],["cookieConsentPreferencesGranted","1"],["cookieConsentMarketingGranted","0"],["cookieConsentGranted","1"],["pws_gdrp_accept","1"],["pelm_cstate","1"],["pelm_consent","1"],["accept-cookies","true"],["accept-analytical-cookies","false"],["accept-marketing-cookies","false"],["cookie-level-v4","0"],["analytics_consent","yes"],["sei-ccpa-banner","true"],["awx_cookie_consent","true"],["cookie_warning","1"],["allowCookies","0"],["cookiePolicyAccepted","true"],["codecamps.cookiesConsent","true"],["consent_updated","true"],["acsr","1"],["__hs_gpc_banner_dismiss","true"],["cookieyes-necessary","yes"],["cookieyes-other","no"],["cky-action","yes"],["cookieyes-functional","no"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["essential","Y"],["analytics","N"],["functional","N"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["cookieConsent","accepted"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["cookieConsent","1"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["hide-gdpr-bar","true"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["cookie_accepted","false"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["allow_cookie","false"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["CookieConsentV2","YES"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","0"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["cookiesPolicy20211101","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["intro","true"],["SeenCookieBar","true"],["cpaccpted","true"],["AllowCookies","true"],["cookiesAccepted","3"],["optOutsTouched","true"],["optOutAccepted","true"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["cookie-policy","true"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["hide_cookieoverlay_v2","1","","reload","1"],["socialmedia-cookies_allowed_v2","0"],["performance-cookies_allowed_v2","0"],["mrm_gdpr","1"],["necessary_consent","accepted"],["__cookie_consent","false"],["jour_cookies","1"],["jour_functional","true"],["jour_analytics","false"],["jour_marketing","false"],["gdpr_opt_in","1"],["ad_storage","denied"],["stickyCookiesSet","true"],["analytics_storage","denied"],["user_experience_cookie_consent","false"],["marketing_cookie_consent","false"],["cookie_notice_dismissed","yes"],["cookie_analytics_allow","no"],["mer_cc_dim_rem_allow","no"],["vkicookieconsent","0"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["user_accepted_cookies","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["physikinstrumente.de",3],["karlknauer.de",3],["schoeck.com",3],["resonate.coop",3],["northgatevehiclehire.ie",3],["badhall.at",3],["mullgs.se",4],["tradingview.com",5],["securityconference.org",6],["account.samsung.com",7],["crushwineco.com",8],["levi.pt",9],["rockpoint.cz",10],["rockpoint.sk",10],["parfum-zentrum.de",10],["candy-store.cz",10],["ubisoft.com",[11,12,13,14]],["store.ubisoft.com",[11,14,414,415]],["thulb.uni-jena.de",15],["splityourticket.co.uk",16],["eramba.org",17],["openai.com",18],["kupbilecik.com",[19,20]],["kupbilecik.de",[19,20]],["kupbilecik.pl",[19,20]],["shopilya.com",21],["hfm-frankfurt.de",22],["zoommer.ge",23],["studentapan.se",24],["petcity.lt",[25,26,27,28]],["tobroco.com",[29,33]],["tobroco.nl",[29,33]],["tobroco-giant.com",[29,33]],["geosfreiberg.de",[30,31]],["eapvic.org",32],["bassolsenergia.com",32],["bammusic.com",[34,36,37]],["green-24.de",35],["phish-test.de",38],["bokadirekt.se",39],["ford.lt",40],["ford.pt",40],["ford.fr",40],["ford.de",40],["ford.dk",40],["ford.pl",40],["ford.se",40],["ford.nl",40],["ford.no",40],["ford.fi",40],["ford.gr",40],["ford.it",40],["data-media.gr",41],["e-food.gr",[42,43]],["bvmed.de",44],["babyshop.com",[45,46,47]],["griffbereit24.de",48],["checkwx.com",49],["calendardate.com",50],["wefashion.ch",51],["wefashion.fr",51],["wefashion.lu",51],["wefashion.be",51],["wefashion.de",51],["wefashion.nl",51],["brettspiel-angebote.de",[52,53]],["nio.com",54],["kancelarskepotreby.net",[55,56,57]],["segment-anything.com",58],["sketch.metademolab.com",59],["cambridgebs.co.uk",60],["freizeitbad-greifswald.de",61],["giuseppezanotti.com",[62,63,64]],["pwsweather.com",65],["theweathernetwork.com",[66,67]],["monese.com",[68,69,70]],["assos.com",68],["helmut-fischer.com",71],["myscience.org",72],["7-eleven.com",73],["airwallex.com",74],["streema.com",75],["gov.lv",76],["tise.com",77],["codecamps.com",78],["moneyfarm.com",79],["app.moneyfarm.com",79],["simpl.rent",80],["hubspot.com",81],["prodyna.com",[82,83,84,85]],["zutobi.com",[82,83,84,85]],["calm.com",[86,87]],["pubgesports.com",[88,89,90]],["outwrite.com",91],["sberbank.com",92],["sbermarket.ru",93],["bgextras.co.uk",94],["sede.coruna.gal",95],["czech-server.cz",96],["hitech-gamer.com",97],["bialettikave.hu",[98,99,100]],["canalplus.com",[101,102,103]],["supply.amazon.co.uk",104],["bhaptics.com",105],["cleverbot.com",106],["watchaut.film",107],["fanvue.com",108],["electronoobs.com",109],["xn--lkylen-vxa.se",110],["tiefenthaler-landtechnik.at",111],["tiefenthaler-landtechnik.ch",111],["tiefenthaler-landtechnik.de",111],["huisartsenpraktijkdoorn.nl",112],["varma.fi",113],["vyos.io",114],["digimobil.es",[115,116]],["teenage.engineering",117],["merrell.pl",[118,364]],["converse.pl",118],["shop.wf-education.com",[118,364]],["converse.com",[119,120]],["buyandapply.nexus.org.uk",121],["img.ly",122],["halonen.fi",[122,151,152,153,154]],["carlson.fi",[122,151,152,153,154]],["cams.ashemaletube.com",[123,124]],["electronicacerler.com",[125,126,127]],["okpoznan.pl",[128,130]],["ielts.idp.com",129],["citibankonline.pl",131],["endlesstools.io",132],["thehacker.recipes",133],["mbhszepkartya.hu",134],["casellimoveis.com.br",135],["embedplus.com",136],["e-file.pl",137],["sp215.info",138],["empik.com",139],["senda.pl",140],["befestigungsfuchs.de",141],["cut-tec.co.uk",142],["gaytimes.co.uk",143],["hello.one",144],["wildcat-koeln.de",145],["libraries.merton.gov.uk",[146,147]],["tommy.hr",[148,149]],["usit.uio.no",150],["demo-digital-twin.r-stahl.com",155],["la31devalladolid.com",[156,157]],["mx.com",158],["foxtrail.fjallraven.com",159],["dotwatcher.cc",160],["bazarchic.com",[161,162,163]],["seedrs.com",164],["mypensiontracker.co.uk",165],["praxisplan.at",[165,187]],["endclothing.com",166],["esimplus.me",167],["ecologi.com",168],["wamba.com",169],["eurac.edu",170],["akasaair.com",171],["rittal.com",172],["wizards.com",173],["worstbassist.com",[174,175,176,177,178,179]],["zs-watch.com",180],["crown.com",181],["mesanalyses.fr",182],["teket.jp",183],["fish.shimano.com",[184,185,186]],["simsherpa.com",[188,189,190]],["translit.ru",191],["renault-autocenterprignitz-pritzwalk.de",192],["renault-spenrath-juelich.de",192],["aruba.com",193],["aireuropa.com",194],["skfbearingselect.com",[195,196]],["scanrenovation.com",197],["ttela.se",198],["dominospizza.pl",199],["devagroup.pl",200],["hintaopas.fi",201],["ledenicheur.fr",201],["prisjagt.dk",201],["prisjakt.no",201],["prisjakt.nu",201],["pricespy.co.uk",201],["pricespy.co.nz",201],["horecaworld.biz",202],["horecaworld.be",202],["secondsol.com",202],["angelifybeauty.com",203],["cotopaxi.com",204],["kaluga.hh.ru",205],["justjoin.it",206],["digibest.pt",207],["two-notes.com",208],["theverge.com",209],["daimant.co",210],["secularism.org.uk",211],["karriere-hamburg.de",212],["musicmap.info",213],["gasspisen.se",214],["medtube.pl",215],["medtube.es",215],["medtube.fr",215],["medtube.net",215],["standard.sk",216],["linmot.com",217],["containerandpackaging.com",218],["top-yp.de",219],["termania.net",220],["swisscard.ch",221],["account.nowpayments.io",222],["gigasport.at",223],["gigasport.de",223],["gigasport.ch",223],["velleahome.gr",224],["nicequest.com",225],["handelsbanken.no",226],["handelsbanken.com",226],["handelsbanken.co.uk",226],["handelsbanken.se",[226,312]],["handelsbanken.dk",226],["handelsbanken.fi",226],["songtradr.com",[227,449]],["logo.pt",[228,229]],["getunleash.io",230],["dentmania.de",230],["free.navalny.com",230],["latoken.com",230],["waitrose.com",[231,232]],["campusbrno.cz",[233,234,235]],["secrid.com",236],["etsy.com",237],["deps.dev",238],["buf.build",239],["starofservice.com",240],["ytcomment.kmcat.uk",241],["gmx.com",242],["gmx.fr",242],["karofilm.ru",243],["octopusenergy.it",244],["octopusenergy.es",[244,245]],["justanswer.es",246],["justanswer.de",246],["justanswer.com",246],["justanswer.co.uk",246],["citilink.ru",247],["huutokaupat.com",248],["kaggle.com",249],["emr.ch",[250,255]],["gem.cbc.ca",251],["pumatools.hu",252],["ici.tou.tv",253],["crunchyroll.com",254],["clipchamp.com",256],["trouwenbijfletcher.nl",256],["fletcher.nl",256],["fletcherzakelijk.nl",256],["intermatic.com",256],["ebikelohr.de",257],["eurosender.com",258],["melectronics.ch",259],["guard.io",260],["dom.ru",261],["schrottpreis.org",262],["nokportalen.se",263],["dokiliko.com",264],["valamis.com",[265,266,267]],["sverigesingenjorer.se",268],["shop.almawin.de",[269,270,271,315]],["textshuttle.com",272],["zeitzurtrauer.de",273],["sumsub.com",[274,275,276]],["atman.pl",[274,275,276]],["fabriziovanmarciano.com",[274,275,276]],["nationalrail.com",[274,275,276]],["eett.gr",[274,275,276]],["funkypotato.com",[274,275,276]],["equalexchange.co.uk",[274,275,276]],["swnsdigital.com",[274,275,276]],["gogolf.fi",[276,277]],["skaling.de",[278,279,280]],["bringmeister.de",281],["leibniz.com",282],["project529.com",283],["clearblue.com",284],["drewag.de",[285,286,287]],["enso.de",[285,286,287]],["buidlbox.io",285],["helitransair.com",288],["more.com",289],["nwslsoccer.com",289],["climatecentral.org",290],["resolution.de",291],["flagma.by",292],["eatsalad.com",293],["pacstall.dev",294],["web2.0calc.fr",295],["de-appletradein.likewize.com",296],["swissborg.com",297],["qwice.com",298],["canalpluskuchnia.pl",[299,300]],["uizard.io",301],["e-chladiva.cz",302],["stmas.bayern.de",[303,306]],["novayagazeta.eu",304],["kinopoisk.ru",305],["yandex.ru",305],["go.netia.pl",[307,308]],["polsatboxgo.pl",[307,308]],["ing.it",[309,310]],["ing.nl",311],["youcom.com.br",313],["rule34.paheal.net",314],["evocsports.com",315],["esm-computer.de",315],["calmwaters.de",315],["mellerud.de",315],["akustik-projekt.at",315],["vansprint.de",315],["0815.at",315],["0815.eu",315],["ojskate.com",315],["der-schweighofer.de",315],["tz-bedarf.de",315],["zeinpharma.de",315],["weicon.com",315],["dagvandewebshop.be",315],["thiele-tee.de",315],["carbox.de",315],["riapsport.de",315],["trendpet.de",315],["eheizung24.de",315],["seemueller.com",315],["vivande.de",315],["heidegrill.com",315],["gladiator-fightwear.com",315],["h-andreas.com",315],["pp-parts.com",315],["natuerlich-holzschuhe.de",315],["massivart.de",315],["malermeister-shop.de",315],["imping-confiserie.de",315],["lenox-trading.at",315],["cklenk.de",315],["catolet.de",315],["drinkitnow.de",315],["patisserie-m.de",315],["storm-proof.com",315],["balance-fahrradladen.de",315],["magicpos.shop",315],["zeinpharma.com",315],["sps-handel.net",315],["novagenics.com",315],["butterfly-circus.de",315],["holzhof24.de",315],["w6-wertarbeit.de",315],["fleurop.de",315],["leki.com",315],["extremeaudio.de",315],["pccomponentes.fr",316],["pccomponentes.com",316],["pccomponentes.pt",316],["oead.at",317],["innovationsstiftung-bildung.at",317],["etwinning.at",317],["arqa-vet.at",317],["zentrumfuercitizenscience.at",317],["vorstudienlehrgang.at",317],["erasmusplus.at",317],["jeger.pl",318],["bo.de",319],["thegamingwatcher.com",320],["webtv.stofa.dk",321],["plusujemy.pl",322],["melkkobrew.fi",323],["asus.com.cn",[324,326]],["zentalk.asus.com",[324,326]],["mubi.com",325],["carsupermarket.com",327],["lawrievetgroup.co.uk",328],["59northwheels.se",329],["foto-gregor.de",330],["kamera-express.de",331],["kamera-express.nl",331],["kamera-express.fr",331],["kamera-express.lu",331],["dhbbank.com",332],["dhbbank.de",332],["dhbbank.be",332],["dhbbank.nl",332],["login.ingbank.pl",333],["fabrykacukiernika.pl",[334,335]],["peaks.com",336],["playlumi.com",[337,338,339]],["chatfuel.com",340],["studio3t.com",[341,342,343,344]],["realgap.co.uk",[345,346,347,348]],["hotelborgia.com",[349,350]],["sweet24.de",351],["zwembaddekouter.be",352],["flixclassic.pl",353],["jobtoday.com",354],["deltatre.com",[355,356,370]],["withings.com",[357,358,359]],["blista.de",[360,361]],["gift.be",[362,363]],["elevator.de",364],["foryouehealth.de",364],["animaze.us",364],["penn-elcom.com",364],["curantus.de",364],["mtbmarket.de",364],["spanienweinonline.ch",364],["novap.fr",364],["bizkaia.eus",[365,366,367]],["sinparty.com",368],["jobs.ch",369],["jobup.ch",369],["depop.com",[371,372]],["mantel.com",373],["armedangels.com",[374,375,376]],["e-dojus.lv",377],["burnesspaull.com",378],["oncosur.org",379],["ryanair.com",380],["bayernportal.de",[381,382,383]],["zipjob.com",384],["pricehubble.com",385],["ilmotorsport.de",386],["psbank.ru",387],["myriad.social",387],["exeedme.com",387],["followalice.com",[387,442]],["aqua-store.fr",388],["app.arzt-direkt.de",389],["dasfutterhaus.at",390],["e-pity.pl",391],["fillup.pl",392],["dailymotion.com",393],["barcawelt.de",394],["lueneburger-heide.de",395],["polizei.bayern.de",[396,398]],["ourworldofpixels.com",397],["jku.at",399],["matkahuolto.fi",400],["espacocasa.com",401],["altraeta.it",401],["centrooceano.it",401],["allstoresdigital.com",401],["cultarm3d.de",401],["soulbounce.com",401],["fluidtopics.com",401],["uvetgbt.com",401],["malcorentacar.com",401],["emondo.de",401],["maspero.it",401],["kelkay.com",401],["underground-england.com",401],["vert.eco",401],["turcolegal.com",401],["magnet4blogging.net",401],["moovly.com",401],["automationafrica.co.za",401],["jornaldoalgarve.pt",401],["keravanenergia.fi",401],["kuopas.fi",401],["frag-machiavelli.de",401],["healthera.co.uk",401],["mobeleader.com",401],["powerup-gaming.com",401],["developer-blog.net",401],["medical.edu.mt",401],["deh.mt",401],["bluebell-railway.com",401],["ribescasals.com",401],["javea.com",401],["chinaimportal.com",401],["inds.co.uk",401],["raoul-follereau.org",401],["serramenti-milano.it",401],["cosasdemujer.com",401],["luz-blanca.info",401],["cosasdeviajes.com",401],["safehaven.io",401],["havocpoint.it",401],["motofocus.pl",401],["nomanssky.com",401],["drei-franken-info.de",401],["clausnehring.com",401],["alttab.net",401],["kinderleicht.berlin",401],["kiakkoradio.fi",401],["cosasdelcaribe.es",401],["de-sjove-jokes.dk",401],["serverprofis.de",401],["biographyonline.net",401],["iziconfort.com",401],["sportinnederland.com",401],["natureatblog.com",401],["wtsenergy.com",401],["cosasdesalud.es",401],["internetpasoapaso.com",401],["zurzeit.at",401],["contaspoupanca.pt",401],["backmarket.de",[402,403,404]],["backmarket.co.uk",[402,403,404]],["backmarket.es",[402,403,404]],["backmarket.be",[402,403,404]],["backmarket.at",[402,403,404]],["backmarket.fr",[402,403,404]],["backmarket.gr",[402,403,404]],["backmarket.fi",[402,403,404]],["backmarket.ie",[402,403,404]],["backmarket.it",[402,403,404]],["backmarket.nl",[402,403,404]],["backmarket.pt",[402,403,404]],["backmarket.se",[402,403,404]],["backmarket.sk",[402,403,404]],["backmarket.com",[402,403,404]],["eleven-sportswear.cz",[405,406,407]],["silvini.com",[405,406,407]],["silvini.de",[405,406,407]],["purefiji.cz",[405,406,407]],["voda-zdarma.cz",[405,406,407]],["lesgarconsfaciles.com",[405,406,407]],["ulevapronohy.cz",[405,406,407]],["vitalvibe.eu",[405,406,407]],["plavte.cz",[405,406,407]],["mo-tools.cz",[405,406,407]],["flamantonlineshop.cz",[405,406,407]],["sandratex.cz",[405,406,407]],["norwayshop.cz",[405,406,407]],["3d-foto.cz",[405,406,407]],["neviditelnepradlo.cz",[405,406,407]],["nutrimedium.com",[405,406,407]],["silvini.cz",[405,406,407]],["karel.cz",[405,406,407]],["silvini.sk",[405,406,407]],["book-n-drive.de",408],["cotswoldoutdoor.com",409],["cotswoldoutdoor.ie",409],["cam.start.canon",410],["usnews.com",411],["researchaffiliates.com",412],["singkinderlieder.de",413],["ba.com",[416,417,418]],["britishairways.com",[416,417,418]],["cineman.pl",[419,420,421]],["tv-trwam.pl",[419,420,421,422]],["qatarairways.com",[423,424,425,426,427]],["wedding.pl",428],["vivaldi.com",429],["emuia1.gugik.gov.pl",430],["nike.com",431],["adidas.at",432],["adidas.be",432],["adidas.ca",432],["adidas.ch",432],["adidas.cl",432],["adidas.co",432],["adidas.co.in",432],["adidas.co.kr",432],["adidas.co.nz",432],["adidas.co.th",432],["adidas.co.uk",432],["adidas.com",432],["adidas.com.ar",432],["adidas.com.au",432],["adidas.com.br",432],["adidas.com.my",432],["adidas.com.ph",432],["adidas.com.vn",432],["adidas.cz",432],["adidas.de",432],["adidas.dk",432],["adidas.es",432],["adidas.fi",432],["adidas.fr",432],["adidas.gr",432],["adidas.ie",432],["adidas.it",432],["adidas.mx",432],["adidas.nl",432],["adidas.no",432],["adidas.pe",432],["adidas.pl",432],["adidas.pt",432],["adidas.ru",432],["adidas.se",432],["adidas.sk",432],["colourbox.com",433],["ebilet.pl",434],["myeventeo.com",435],["snap.com",436],["ratemyprofessors.com",437],["filen.io",438],["leotrippi.com",439],["restaurantclub.pl",439],["context.news",439],["stilord.com",440],["stilord.pl",440],["stilord.de",440],["stilord.fr",440],["quantamagazine.org",441],["scaleway.com",443],["hellotv.nl",444],["lasestrellas.tv",445],["shopforyou47.de",446],["kreativverliebt.de",446],["anderweltverlag.com",446],["octavio-shop.com",446],["forcetools-kepmar.eu",446],["fantecshop.de",446],["hexen-werkstatt.shop",446],["shop-naturstrom.de",446],["biona-shop.de",446],["camokoenig.de",446],["bikepro.de",446],["kaffeediscount.com",446],["vamos-skateshop.com",446],["holland-shop.com",446],["avonika.com",446],["officesuite.com",447],["fups.com",[448,450]],["scienceopen.com",451],["moebel-mahler-siebenlehn.de",[452,453]],["calendly.com",454],["ubereats.com",455],["101internet.ru",456],["bein.com",457],["beinsports.com",457],["tunnelmb.net",458],["figshare.com",459],["hitado.de",460],["bitso.com",461],["eco-toimistotarvikkeet.fi",462],["proficient.fi",462],["developer.ing.com",463],["ehealth.gov.gr",464],["larian.com",464],["calvinklein.se",[465,466,467]],["calvinklein.fi",[465,466,467]],["calvinklein.sk",[465,466,467]],["calvinklein.si",[465,466,467]],["calvinklein.ch",[465,466,467]],["calvinklein.ru",[465,466,467]],["calvinklein.com",[465,466,467]],["calvinklein.pt",[465,466,467]],["calvinklein.pl",[465,466,467]],["calvinklein.at",[465,466,467]],["calvinklein.nl",[465,466,467]],["calvinklein.hu",[465,466,467]],["calvinklein.lu",[465,466,467]],["calvinklein.lt",[465,466,467]],["calvinklein.lv",[465,466,467]],["calvinklein.it",[465,466,467]],["calvinklein.ie",[465,466,467]],["calvinklein.hr",[465,466,467]],["calvinklein.fr",[465,466,467]],["calvinklein.es",[465,466,467]],["calvinklein.ee",[465,466,467]],["calvinklein.de",[465,466,467]],["calvinklein.dk",[465,466,467]],["calvinklein.cz",[465,466,467]],["calvinklein.bg",[465,466,467]],["calvinklein.be",[465,466,467]],["calvinklein.co.uk",[465,466,467]],["ofdb.de",468],["dtksoft.com",469],["serverstoplist.com",470],["doka.com",[471,472,473]],["abi.de",[474,475]],["studienwahl.de",[474,475]],["youthforum.org",476],["journal.hr",[477,478,479,480]],["howstuffworks.com",481],["stickypassword.com",[482,483,484]],["conversion-rate-experts.com",[485,486]],["merkur.si",[487,488,489]],["vki.at",490],["konsument.at",490],["chollometro.com",491],["dealabs.com",491],["hotukdeals.com",491],["pepper.it",491],["pepper.pl",491],["preisjaeger.at",491],["mydealz.de",491],["easyfind.ch",[492,493]],["e-shop.leonidas.com",[494,495]],["sixt-neuwagen.de",496],["constantin.film",[497,498,499]],["notion.so",500],["digi24.ro",501],["omgevingsloketinzage.omgeving.vlaanderen.be",[502,503]],["primor.eu",504],["tameteo.com",505],["tempo.pt",505],["yourweather.co.uk",505],["meteored.cl",505],["meteored.mx",505],["tempo.com",505],["ilmeteo.net",505],["meteored.com.ar",505],["daswetter.com",505]]);

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
