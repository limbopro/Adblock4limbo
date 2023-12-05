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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["allowCookies","0"],["CookienatorConsent","false"],["has-declined-cookies","true","","reload","1"],["has-agreed-to-cookies","false"],["gradeproof_shown_cookie_warning","true"],["sber.pers_notice_en","1"],["cookies_consented","yes"],["CB393_DONOTREOPEN","true"],["AYTO_CORUNA_COOKIES","1","","reload","1"],["I6IISCOOKIECONSENT0","n","","reload","1"],["htg_consent","0"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["cp_cc_ads","0"],["cp_cc_stats","0"],["cp_cc_required","1"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["varmafi_mandatory","true"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["cookieConsent","1"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["consent_updated","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cookie-bar","0"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["hide-gdpr-bar","true"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["cookie-preference","1"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["cookie_accepted","false"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["cookieconsent_statistics","no"],["cookieconsent_essential","yes"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["cookie-policy","true"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["cc_analytics","0"],["cc_essential","1"],["spemPermission","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"],["euconsent-v2-addtl","0"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["resonate.coop",3],["gov.lv",4],["bassolsenergia.com",5],["calm.com",[6,7]],["outwrite.com",8],["sberbank.com",9],["sbermarket.ru",10],["bgextras.co.uk",11],["sede.coruna.gal",12],["czech-server.cz",13],["hitech-gamer.com",14],["bialettikave.hu",[15,16,17]],["canalplus.com",[18,19,20]],["supply.amazon.co.uk",21],["bhaptics.com",22],["cleverbot.com",23],["watchaut.film",24],["electronoobs.com",25],["xn--lkylen-vxa.se",26],["tiefenthaler-landtechnik.at",27],["tiefenthaler-landtechnik.ch",27],["tiefenthaler-landtechnik.de",27],["huisartsenpraktijkdoorn.nl",28],["varma.fi",29],["vyos.io",30],["digimobil.es",[31,32]],["teenage.engineering",33],["converse.pl",34],["shop.wf-education.com",[34,282]],["converse.com",[35,36]],["buyandapply.nexus.org.uk",37],["img.ly",38],["halonen.fi",[38,69,70,71,72]],["carlson.fi",[38,69,70,71,72]],["cams.ashemaletube.com",[39,40]],["electronicacerler.com",[41,42,43]],["okpoznan.pl",[44,46]],["ielts.idp.com",45],["citibankonline.pl",47],["endlesstools.io",48],["thehacker.recipes",49],["mbhszepkartya.hu",50],["casellimoveis.com.br",51],["embedplus.com",52],["e-file.pl",53],["sp215.info",54],["empik.com",55],["app.moneyfarm.com",56],["senda.pl",57],["befestigungsfuchs.de",58],["cut-tec.co.uk",59],["parfum-zentrum.de",60],["candy-store.cz",60],["gaytimes.co.uk",61],["hello.one",62],["wildcat-koeln.de",63],["libraries.merton.gov.uk",[64,65]],["tommy.hr",[66,67]],["usit.uio.no",68],["demo-digital-twin.r-stahl.com",73],["la31devalladolid.com",[74,75]],["mx.com",76],["foxtrail.fjallraven.com",77],["dotwatcher.cc",78],["bazarchic.com",[79,80,81]],["seedrs.com",82],["mypensiontracker.co.uk",83],["praxisplan.at",[83,105]],["endclothing.com",84],["esimplus.me",85],["ecologi.com",86],["wamba.com",87],["eurac.edu",88],["akasaair.com",89],["rittal.com",90],["wizards.com",91],["worstbassist.com",[92,93,94,95,96,97]],["zs-watch.com",98],["crown.com",99],["mesanalyses.fr",100],["teket.jp",101],["fish.shimano.com",[102,103,104]],["simsherpa.com",[106,107,108]],["translit.ru",109],["renault-autocenterprignitz-pritzwalk.de",110],["renault-spenrath-juelich.de",110],["aruba.com",111],["aireuropa.com",112],["skfbearingselect.com",[113,114]],["scanrenovation.com",115],["ttela.se",116],["dominospizza.pl",117],["devagroup.pl",118],["hintaopas.fi",119],["ledenicheur.fr",119],["prisjagt.dk",119],["prisjakt.no",119],["prisjakt.nu",119],["pricespy.co.uk",119],["pricespy.co.nz",119],["horecaworld.biz",120],["horecaworld.be",120],["secondsol.com",120],["angelifybeauty.com",121],["cotopaxi.com",122],["kaluga.hh.ru",123],["justjoin.it",124],["digibest.pt",125],["two-notes.com",126],["theverge.com",127],["daimant.co",128],["secularism.org.uk",129],["karriere-hamburg.de",130],["musicmap.info",131],["gasspisen.se",132],["medtube.pl",133],["medtube.es",133],["medtube.fr",133],["medtube.net",133],["standard.sk",134],["linmot.com",135],["containerandpackaging.com",136],["top-yp.de",137],["termania.net",138],["swisscard.ch",139],["account.nowpayments.io",140],["gigasport.at",141],["gigasport.de",141],["gigasport.ch",141],["velleahome.gr",142],["nicequest.com",143],["handelsbanken.no",144],["handelsbanken.com",144],["handelsbanken.co.uk",144],["handelsbanken.se",[144,231]],["handelsbanken.dk",144],["handelsbanken.fi",144],["songtradr.com",145],["logo.pt",[146,147]],["dentmania.de",148],["free.navalny.com",148],["latoken.com",148],["waitrose.com",[149,150]],["campusbrno.cz",[151,152,153]],["secrid.com",154],["etsy.com",155],["deps.dev",156],["buf.build",157],["starofservice.com",158],["ytcomment.kmcat.uk",159],["gmx.com",160],["gmx.fr",160],["karofilm.ru",161],["octopusenergy.it",162],["octopusenergy.es",[162,163]],["justanswer.es",164],["justanswer.de",164],["justanswer.com",164],["justanswer.co.uk",164],["citilink.ru",165],["huutokaupat.com",166],["kaggle.com",167],["emr.ch",[168,173]],["gem.cbc.ca",169],["pumatools.hu",170],["ici.tou.tv",171],["crunchyroll.com",172],["clipchamp.com",174],["trouwenbijfletcher.nl",174],["fletcher.nl",174],["fletcherzakelijk.nl",174],["intermatic.com",174],["ebikelohr.de",175],["eurosender.com",176],["melectronics.ch",177],["guard.io",178],["dom.ru",179],["schrottpreis.org",180],["nokportalen.se",181],["dokiliko.com",182],["valamis.com",[183,184,185]],["sverigesingenjorer.se",186],["shop.almawin.de",[187,188,189,234]],["textshuttle.com",190],["zeitzurtrauer.de",191],["atman.pl",[192,193,194]],["fabriziovanmarciano.com",[192,193,194]],["nationalrail.com",[192,193,194]],["eett.gr",[192,193,194]],["funkypotato.com",[192,193,194]],["equalexchange.co.uk",[192,193,194]],["swnsdigital.com",[192,193,194]],["gogolf.fi",[194,195]],["skaling.de",[196,197,198]],["bringmeister.de",199],["leibniz.com",200],["project529.com",201],["clearblue.com",202],["drewag.de",[203,204,205]],["enso.de",[203,204,205]],["buidlbox.io",203],["helitransair.com",206],["more.com",207],["nwslsoccer.com",207],["climatecentral.org",208],["resolution.de",209],["flagma.by",210],["eatsalad.com",211],["pacstall.dev",212],["web2.0calc.fr",213],["de-appletradein.likewize.com",214],["swissborg.com",215],["qwice.com",216],["canalpluskuchnia.pl",[217,218]],["uizard.io",219],["e-chladiva.cz",220],["assos.com",221],["monese.com",221],["stmas.bayern.de",[222,225]],["novayagazeta.eu",223],["kinopoisk.ru",224],["yandex.ru",224],["go.netia.pl",[226,227]],["polsatboxgo.pl",[226,227]],["ing.it",[228,229]],["ing.nl",230],["youcom.com.br",232],["rule34.paheal.net",233],["evocsports.com",234],["esm-computer.de",234],["calmwaters.de",234],["mellerud.de",234],["akustik-projekt.at",234],["vansprint.de",234],["0815.at",234],["0815.eu",234],["ojskate.com",234],["der-schweighofer.de",234],["tz-bedarf.de",234],["zeinpharma.de",234],["weicon.com",234],["dagvandewebshop.be",234],["thiele-tee.de",234],["carbox.de",234],["riapsport.de",234],["trendpet.de",234],["eheizung24.de",234],["seemueller.com",234],["vivande.de",234],["heidegrill.com",234],["gladiator-fightwear.com",234],["h-andreas.com",234],["pp-parts.com",234],["natuerlich-holzschuhe.de",234],["massivart.de",234],["malermeister-shop.de",234],["imping-confiserie.de",234],["lenox-trading.at",234],["cklenk.de",234],["catolet.de",234],["drinkitnow.de",234],["patisserie-m.de",234],["storm-proof.com",234],["balance-fahrradladen.de",234],["magicpos.shop",234],["zeinpharma.com",234],["sps-handel.net",234],["novagenics.com",234],["butterfly-circus.de",234],["holzhof24.de",234],["w6-wertarbeit.de",234],["fleurop.de",234],["leki.com",234],["extremeaudio.de",234],["pccomponentes.fr",235],["pccomponentes.com",235],["pccomponentes.pt",235],["oead.at",236],["innovationsstiftung-bildung.at",236],["etwinning.at",236],["arqa-vet.at",236],["zentrumfuercitizenscience.at",236],["vorstudienlehrgang.at",236],["erasmusplus.at",236],["jeger.pl",237],["bo.de",238],["thegamingwatcher.com",239],["webtv.stofa.dk",240],["plusujemy.pl",241],["melkkobrew.fi",242],["asus.com.cn",[243,245]],["zentalk.asus.com",[243,245]],["mubi.com",244],["carsupermarket.com",246],["lawrievetgroup.co.uk",247],["59northwheels.se",248],["foto-gregor.de",249],["kamera-express.de",250],["kamera-express.nl",250],["kamera-express.fr",250],["kamera-express.lu",250],["dhbbank.com",251],["dhbbank.de",251],["dhbbank.be",251],["dhbbank.nl",251],["login.ingbank.pl",252],["fabrykacukiernika.pl",[253,254]],["playlumi.com",[255,256,257]],["chatfuel.com",258],["studio3t.com",[259,260,261,262]],["realgap.co.uk",[263,264,265,266]],["hotelborgia.com",[267,268]],["sweet24.de",269],["zwembaddekouter.be",270],["flixclassic.pl",271],["jobtoday.com",272],["deltatre.com",[273,274,288]],["withings.com",[275,276,277]],["blista.de",[278,279]],["gift.be",[280,281]],["animaze.us",282],["penn-elcom.com",282],["curantus.de",282],["mtbmarket.de",282],["spanienweinonline.ch",282],["novap.fr",282],["bizkaia.eus",[283,284,285]],["sinparty.com",286],["jobs.ch",287],["jobup.ch",287],["depop.com",[289,290]],["mantel.com",291],["armedangels.com",[292,293,294]],["e-dojus.lv",295],["burnesspaull.com",296],["oncosur.org",297],["ryanair.com",298],["bayernportal.de",[299,300,301]],["zipjob.com",302],["pricehubble.com",303],["ilmotorsport.de",304],["psbank.ru",305],["myriad.social",305],["exeedme.com",305],["followalice.com",[305,360]],["aqua-store.fr",306],["app.arzt-direkt.de",307],["dasfutterhaus.at",308],["e-pity.pl",309],["fillup.pl",310],["dailymotion.com",311],["barcawelt.de",312],["lueneburger-heide.de",313],["polizei.bayern.de",[314,316]],["ourworldofpixels.com",315],["jku.at",317],["espacocasa.com",318],["altraeta.it",318],["centrooceano.it",318],["allstoresdigital.com",318],["cultarm3d.de",318],["soulbounce.com",318],["fluidtopics.com",318],["uvetgbt.com",318],["malcorentacar.com",318],["emondo.de",318],["maspero.it",318],["kelkay.com",318],["underground-england.com",318],["vert.eco",318],["turcolegal.com",318],["magnet4blogging.net",318],["moovly.com",318],["automationafrica.co.za",318],["jornaldoalgarve.pt",318],["keravanenergia.fi",318],["kuopas.fi",318],["frag-machiavelli.de",318],["healthera.co.uk",318],["mobeleader.com",318],["powerup-gaming.com",318],["developer-blog.net",318],["medical.edu.mt",318],["deh.mt",318],["bluebell-railway.com",318],["ribescasals.com",318],["javea.com",318],["chinaimportal.com",318],["inds.co.uk",318],["raoul-follereau.org",318],["serramenti-milano.it",318],["cosasdemujer.com",318],["luz-blanca.info",318],["cosasdeviajes.com",318],["safehaven.io",318],["havocpoint.it",318],["motofocus.pl",318],["nomanssky.com",318],["drei-franken-info.de",318],["clausnehring.com",318],["alttab.net",318],["kinderleicht.berlin",318],["kiakkoradio.fi",318],["cosasdelcaribe.es",318],["de-sjove-jokes.dk",318],["serverprofis.de",318],["biographyonline.net",318],["iziconfort.com",318],["sportinnederland.com",318],["natureatblog.com",318],["wtsenergy.com",318],["cosasdesalud.es",318],["internetpasoapaso.com",318],["zurzeit.at",318],["contaspoupanca.pt",318],["backmarket.de",[319,320,321]],["backmarket.co.uk",[319,320,321]],["backmarket.es",[319,320,321]],["backmarket.be",[319,320,321]],["backmarket.at",[319,320,321]],["backmarket.fr",[319,320,321]],["backmarket.gr",[319,320,321]],["backmarket.fi",[319,320,321]],["backmarket.ie",[319,320,321]],["backmarket.it",[319,320,321]],["backmarket.nl",[319,320,321]],["backmarket.pt",[319,320,321]],["backmarket.se",[319,320,321]],["backmarket.sk",[319,320,321]],["backmarket.com",[319,320,321]],["eleven-sportswear.cz",[322,323,324]],["silvini.com",[322,323,324]],["silvini.de",[322,323,324]],["purefiji.cz",[322,323,324]],["voda-zdarma.cz",[322,323,324]],["lesgarconsfaciles.com",[322,323,324]],["ulevapronohy.cz",[322,323,324]],["vitalvibe.eu",[322,323,324]],["plavte.cz",[322,323,324]],["mo-tools.cz",[322,323,324]],["flamantonlineshop.cz",[322,323,324]],["sandratex.cz",[322,323,324]],["norwayshop.cz",[322,323,324]],["3d-foto.cz",[322,323,324]],["neviditelnepradlo.cz",[322,323,324]],["nutrimedium.com",[322,323,324]],["silvini.cz",[322,323,324]],["karel.cz",[322,323,324]],["silvini.sk",[322,323,324]],["book-n-drive.de",325],["cotswoldoutdoor.com",326],["cotswoldoutdoor.ie",326],["cam.start.canon",327],["usnews.com",328],["researchaffiliates.com",329],["singkinderlieder.de",330],["store.ubisoft.com",[331,332,333,334]],["ba.com",[335,336,337]],["britishairways.com",[335,336,337]],["cineman.pl",[338,339,340]],["tv-trwam.pl",[338,339,340,341]],["qatarairways.com",[342,343,344,345,346]],["wedding.pl",347],["vivaldi.com",348],["emuia1.gugik.gov.pl",349],["nike.com",350],["adidas.at",351],["adidas.be",351],["adidas.ca",351],["adidas.ch",351],["adidas.cl",351],["adidas.co",351],["adidas.co.in",351],["adidas.co.kr",351],["adidas.co.nz",351],["adidas.co.th",351],["adidas.co.uk",351],["adidas.com",351],["adidas.com.ar",351],["adidas.com.au",351],["adidas.com.br",351],["adidas.com.my",351],["adidas.com.ph",351],["adidas.com.vn",351],["adidas.cz",351],["adidas.de",351],["adidas.dk",351],["adidas.es",351],["adidas.fi",351],["adidas.fr",351],["adidas.gr",351],["adidas.ie",351],["adidas.it",351],["adidas.mx",351],["adidas.nl",351],["adidas.no",351],["adidas.pe",351],["adidas.pl",351],["adidas.pt",351],["adidas.ru",351],["adidas.se",351],["adidas.sk",351],["colourbox.com",352],["ebilet.pl",353],["snap.com",354],["ratemyprofessors.com",355],["filen.io",356],["restaurantclub.pl",357],["context.news",357],["stilord.com",358],["stilord.pl",358],["stilord.de",358],["stilord.fr",358],["quantamagazine.org",359],["scaleway.com",361],["hellotv.nl",362],["lasestrellas.tv",363],["anderweltverlag.com",364],["octavio-shop.com",364],["forcetools-kepmar.eu",364],["fantecshop.de",364],["hexen-werkstatt.shop",364],["shop-naturstrom.de",364],["biona-shop.de",364],["camokoenig.de",364],["bikepro.de",364],["kaffeediscount.com",364],["vamos-skateshop.com",364],["holland-shop.com",364],["avonika.com",364],["officesuite.com",365],["fups.com",[366,367]],["scienceopen.com",368],["calendly.com",369],["ubereats.com",370],["101internet.ru",371],["bein.com",372],["beinsports.com",372],["tunnelmb.net",373],["figshare.com",374],["hitado.de",375],["bitso.com",376],["eco-toimistotarvikkeet.fi",377],["proficient.fi",377],["developer.ing.com",378],["ehealth.gov.gr",379],["larian.com",379],["calvinklein.se",[380,381,382]],["calvinklein.fi",[380,381,382]],["calvinklein.sk",[380,381,382]],["calvinklein.si",[380,381,382]],["calvinklein.ch",[380,381,382]],["calvinklein.ru",[380,381,382]],["calvinklein.com",[380,381,382]],["calvinklein.pt",[380,381,382]],["calvinklein.pl",[380,381,382]],["calvinklein.at",[380,381,382]],["calvinklein.nl",[380,381,382]],["calvinklein.hu",[380,381,382]],["calvinklein.lu",[380,381,382]],["calvinklein.lt",[380,381,382]],["calvinklein.lv",[380,381,382]],["calvinklein.it",[380,381,382]],["calvinklein.ie",[380,381,382]],["calvinklein.hr",[380,381,382]],["calvinklein.fr",[380,381,382]],["calvinklein.es",[380,381,382]],["calvinklein.ee",[380,381,382]],["calvinklein.de",[380,381,382]],["calvinklein.dk",[380,381,382]],["calvinklein.cz",[380,381,382]],["calvinklein.bg",[380,381,382]],["calvinklein.be",[380,381,382]],["calvinklein.co.uk",[380,381,382]],["ofdb.de",383],["dtksoft.com",384],["serverstoplist.com",385],["howstuffworks.com",386],["chollometro.com",387],["dealabs.com",387],["hotukdeals.com",387],["pepper.it",387],["pepper.pl",387],["preisjaeger.at",387],["mydealz.de",387],["easyfind.ch",[388,389]],["e-shop.leonidas.com",[390,391]],["pelikone.fi",392],["constantin.film",[393,394,395]],["notion.so",396],["digi24.ro",397],["omgevingsloketinzage.omgeving.vlaanderen.be",[398,399]],["primor.eu",400],["tameteo.com",401],["tempo.pt",401],["yourweather.co.uk",401],["meteored.cl",401],["meteored.mx",401],["tempo.com",401],["ilmeteo.net",401],["meteored.com.ar",401],["daswetter.com",401]]);

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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
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
