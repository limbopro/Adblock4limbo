/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["CB393_DONOTREOPEN","true"],["cookie_oldal","1"],["cookie_marketing","0"],["cookie_jog","1"],["ccs-supplierconnect","ACCEPTED"],["accepted_cookies","yes"],["note","1"],["cookieConsent","required"],["pd_cc","1"],["gdpr_ok","necessary"],["allowTracking","false"],["cookies-marketing","N"],["VyosCookies","Accepted"],["analyticsConsent","false"],["adsConsent","false"],["te_cookie_ok","1"],["amcookie_policy_restriction","allowed"],["dw_cookies_accepted","1"],["acceptConverseCookiePolicy","0"],["gdpr-banner","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["cookieConsent","1"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["consent_updated","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cookie-bar","0"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["hide-gdpr-bar","true"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["cookie_accepted","false"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["cookie-policy","true"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["STAgreement","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["spemPermission","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"],["vl-cookie-consent-cookie-consent","true"],["vl-cookie-consent-functional","true"],["amcookie_allowed","0"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["resonate.coop",3],["bgextras.co.uk",4],["bialettikave.hu",[5,6,7]],["supply.amazon.co.uk",8],["bhaptics.com",9],["cleverbot.com",10],["watchaut.film",11],["electronoobs.com",12],["xn--lkylen-vxa.se",13],["tiefenthaler-landtechnik.at",14],["tiefenthaler-landtechnik.ch",14],["tiefenthaler-landtechnik.de",14],["huisartsenpraktijkdoorn.nl",15],["vyos.io",16],["digimobil.es",[17,18]],["teenage.engineering",19],["converse.pl",20],["shop.wf-education.com",[20,266]],["converse.com",[21,22]],["buyandapply.nexus.org.uk",23],["img.ly",24],["halonen.fi",[24,55,56,57,58]],["carlson.fi",[24,55,56,57,58]],["cams.ashemaletube.com",[25,26]],["electronicacerler.com",[27,28,29]],["okpoznan.pl",[30,32]],["ielts.idp.com",31],["citibankonline.pl",33],["endlesstools.io",34],["thehacker.recipes",35],["mbhszepkartya.hu",36],["casellimoveis.com.br",37],["embedplus.com",38],["e-file.pl",39],["sp215.info",40],["empik.com",41],["app.moneyfarm.com",42],["senda.pl",43],["befestigungsfuchs.de",44],["cut-tec.co.uk",45],["parfum-zentrum.de",46],["candy-store.cz",46],["gaytimes.co.uk",47],["hello.one",48],["wildcat-koeln.de",49],["libraries.merton.gov.uk",[50,51]],["tommy.hr",[52,53]],["usit.uio.no",54],["demo-digital-twin.r-stahl.com",59],["la31devalladolid.com",[60,61]],["mx.com",62],["foxtrail.fjallraven.com",63],["dotwatcher.cc",64],["bazarchic.com",[65,66,67]],["seedrs.com",68],["mypensiontracker.co.uk",69],["praxisplan.at",[69,91]],["endclothing.com",70],["esimplus.me",71],["ecologi.com",72],["wamba.com",73],["eurac.edu",74],["akasaair.com",75],["rittal.com",76],["wizards.com",77],["worstbassist.com",[78,79,80,81,82,83]],["zs-watch.com",84],["crown.com",85],["mesanalyses.fr",86],["teket.jp",87],["fish.shimano.com",[88,89,90]],["simsherpa.com",[92,93,94]],["translit.ru",95],["renault-autocenterprignitz-pritzwalk.de",96],["renault-spenrath-juelich.de",96],["aruba.com",97],["aireuropa.com",98],["skfbearingselect.com",[99,100]],["scanrenovation.com",101],["ttela.se",102],["dominospizza.pl",103],["devagroup.pl",104],["hintaopas.fi",105],["ledenicheur.fr",105],["prisjagt.dk",105],["prisjakt.no",105],["prisjakt.nu",105],["pricespy.co.uk",105],["pricespy.co.nz",105],["horecaworld.biz",106],["horecaworld.be",106],["secondsol.com",106],["angelifybeauty.com",107],["cotopaxi.com",108],["kaluga.hh.ru",109],["justjoin.it",110],["digibest.pt",111],["two-notes.com",112],["theverge.com",113],["daimant.co",114],["secularism.org.uk",115],["karriere-hamburg.de",116],["musicmap.info",117],["gasspisen.se",118],["medtube.pl",119],["medtube.es",119],["medtube.fr",119],["medtube.net",119],["standard.sk",120],["linmot.com",121],["containerandpackaging.com",122],["top-yp.de",123],["termania.net",124],["swisscard.ch",125],["account.nowpayments.io",126],["gigasport.at",127],["gigasport.de",127],["gigasport.ch",127],["velleahome.gr",128],["nicequest.com",129],["handelsbanken.no",130],["handelsbanken.com",130],["handelsbanken.co.uk",130],["handelsbanken.se",[130,218]],["handelsbanken.dk",130],["handelsbanken.fi",130],["songtradr.com",131],["logo.pt",[132,133]],["dentmania.de",134],["free.navalny.com",134],["latoken.com",134],["waitrose.com",[135,136]],["campusbrno.cz",[137,138,139]],["secrid.com",140],["etsy.com",141],["deps.dev",142],["buf.build",143],["starofservice.com",144],["ytcomment.kmcat.uk",145],["gmx.com",146],["gmx.fr",146],["karofilm.ru",147],["octopusenergy.it",148],["octopusenergy.es",[148,149]],["justanswer.es",150],["justanswer.de",150],["justanswer.com",150],["justanswer.co.uk",150],["citilink.ru",151],["huutokaupat.com",152],["kaggle.com",153],["emr.ch",[154,159]],["gem.cbc.ca",155],["pumatools.hu",156],["ici.tou.tv",157],["crunchyroll.com",158],["clipchamp.com",160],["trouwenbijfletcher.nl",160],["fletcher.nl",160],["fletcherzakelijk.nl",160],["intermatic.com",160],["ebikelohr.de",161],["eurosender.com",162],["melectronics.ch",163],["guard.io",164],["dom.ru",165],["schrottpreis.org",166],["nokportalen.se",167],["dokiliko.com",168],["valamis.com",[169,170,171]],["sverigesingenjorer.se",172],["shop.almawin.de",[173,174,175,176]],["esm-computer.de",175],["calmwaters.de",175],["mellerud.de",175],["akustik-projekt.at",175],["vansprint.de",175],["0815.at",175],["0815.eu",175],["ojskate.com",175],["der-schweighofer.de",175],["tz-bedarf.de",175],["zeinpharma.de",175],["weicon.com",175],["dagvandewebshop.be",175],["thiele-tee.de",175],["carbox.de",175],["riapsport.de",175],["trendpet.de",175],["eheizung24.de",175],["seemueller.com",175],["vivande.de",175],["heidegrill.com",175],["gladiator-fightwear.com",175],["h-andreas.com",175],["pp-parts.com",175],["natuerlich-holzschuhe.de",175],["massivart.de",175],["malermeister-shop.de",175],["imping-confiserie.de",175],["lenox-trading.at",175],["cklenk.de",175],["catolet.de",175],["drinkitnow.de",175],["patisserie-m.de",175],["storm-proof.com",175],["balance-fahrradladen.de",175],["magicpos.shop",175],["zeinpharma.com",175],["sps-handel.net",175],["novagenics.com",175],["butterfly-circus.de",175],["holzhof24.de",175],["w6-wertarbeit.de",175],["fleurop.de",175],["leki.com",175],["extremeaudio.de",175],["textshuttle.com",177],["zeitzurtrauer.de",178],["atman.pl",[179,180,181]],["fabriziovanmarciano.com",[179,180,181]],["nationalrail.com",[179,180,181]],["eett.gr",[179,180,181]],["funkypotato.com",[179,180,181]],["equalexchange.co.uk",[179,180,181]],["swnsdigital.com",[179,180,181]],["gogolf.fi",[181,182]],["skaling.de",[183,184,185]],["bringmeister.de",186],["leibniz.com",187],["project529.com",188],["clearblue.com",189],["drewag.de",[190,191,192]],["enso.de",[190,191,192]],["buidlbox.io",190],["helitransair.com",193],["more.com",194],["nwslsoccer.com",194],["climatecentral.org",195],["resolution.de",196],["flagma.by",197],["eatsalad.com",198],["pacstall.dev",199],["web2.0calc.fr",200],["de-appletradein.likewize.com",201],["swissborg.com",202],["qwice.com",203],["canalpluskuchnia.pl",[204,205]],["uizard.io",206],["e-chladiva.cz",207],["assos.com",208],["monese.com",208],["stmas.bayern.de",[209,212]],["novayagazeta.eu",210],["kinopoisk.ru",211],["yandex.ru",211],["go.netia.pl",[213,214]],["polsatboxgo.pl",[213,214]],["ing.it",[215,216]],["ing.nl",217],["youcom.com.br",219],["rule34.paheal.net",220],["pccomponentes.fr",221],["pccomponentes.com",221],["pccomponentes.pt",221],["oead.at",222],["innovationsstiftung-bildung.at",222],["etwinning.at",222],["arqa-vet.at",222],["zentrumfuercitizenscience.at",222],["vorstudienlehrgang.at",222],["erasmusplus.at",222],["jeger.pl",223],["bo.de",224],["thegamingwatcher.com",225],["webtv.stofa.dk",226],["plusujemy.pl",227],["melkkobrew.fi",228],["asus.com.cn",[229,231]],["zentalk.asus.com",[229,231]],["mubi.com",230],["carsupermarket.com",232],["lawrievetgroup.co.uk",233],["59northwheels.se",234],["foto-gregor.de",235],["kamera-express.de",236],["kamera-express.nl",236],["kamera-express.fr",236],["kamera-express.lu",236],["dhbbank.com",237],["dhbbank.de",237],["dhbbank.be",237],["dhbbank.nl",237],["login.ingbank.pl",238],["fabrykacukiernika.pl",[239,240]],["playlumi.com",[241,242,243]],["chatfuel.com",244],["studio3t.com",[245,246,247,248]],["realgap.co.uk",[249,250,251,252]],["hotelborgia.com",[253,254]],["sweet24.de",255],["zwembaddekouter.be",256],["flixclassic.pl",257],["jobtoday.com",258],["deltatre.com",[259,260,272]],["withings.com",[261,262,263]],["gift.be",[264,265]],["animaze.us",266],["penn-elcom.com",266],["curantus.de",266],["mtbmarket.de",266],["spanienweinonline.ch",266],["novap.fr",266],["bizkaia.eus",[267,268,269]],["sinparty.com",270],["jobs.ch",271],["jobup.ch",271],["depop.com",[273,274]],["mantel.com",275],["armedangels.com",[276,277,278]],["e-dojus.lv",279],["burnesspaull.com",280],["oncosur.org",281],["ryanair.com",282],["bayernportal.de",[283,284,285]],["zipjob.com",286],["pricehubble.com",287],["ilmotorsport.de",288],["psbank.ru",289],["myriad.social",289],["exeedme.com",289],["followalice.com",[289,344]],["aqua-store.fr",290],["app.arzt-direkt.de",291],["dasfutterhaus.at",292],["e-pity.pl",293],["fillup.pl",294],["dailymotion.com",295],["barcawelt.de",296],["lueneburger-heide.de",297],["polizei.bayern.de",[298,300]],["ourworldofpixels.com",299],["jku.at",301],["espacocasa.com",302],["altraeta.it",302],["centrooceano.it",302],["allstoresdigital.com",302],["cultarm3d.de",302],["soulbounce.com",302],["fluidtopics.com",302],["uvetgbt.com",302],["malcorentacar.com",302],["emondo.de",302],["maspero.it",302],["kelkay.com",302],["underground-england.com",302],["vert.eco",302],["turcolegal.com",302],["magnet4blogging.net",302],["moovly.com",302],["automationafrica.co.za",302],["jornaldoalgarve.pt",302],["keravanenergia.fi",302],["kuopas.fi",302],["frag-machiavelli.de",302],["healthera.co.uk",302],["mobeleader.com",302],["powerup-gaming.com",302],["developer-blog.net",302],["medical.edu.mt",302],["deh.mt",302],["bluebell-railway.com",302],["ribescasals.com",302],["javea.com",302],["chinaimportal.com",302],["inds.co.uk",302],["raoul-follereau.org",302],["serramenti-milano.it",302],["cosasdemujer.com",302],["luz-blanca.info",302],["cosasdeviajes.com",302],["safehaven.io",302],["havocpoint.it",302],["motofocus.pl",302],["nomanssky.com",302],["drei-franken-info.de",302],["clausnehring.com",302],["alttab.net",302],["kinderleicht.berlin",302],["kiakkoradio.fi",302],["cosasdelcaribe.es",302],["de-sjove-jokes.dk",302],["serverprofis.de",302],["biographyonline.net",302],["iziconfort.com",302],["sportinnederland.com",302],["natureatblog.com",302],["wtsenergy.com",302],["cosasdesalud.es",302],["internetpasoapaso.com",302],["zurzeit.at",302],["contaspoupanca.pt",302],["backmarket.de",[303,304,305]],["backmarket.co.uk",[303,304,305]],["backmarket.es",[303,304,305]],["backmarket.be",[303,304,305]],["backmarket.at",[303,304,305]],["backmarket.fr",[303,304,305]],["backmarket.gr",[303,304,305]],["backmarket.fi",[303,304,305]],["backmarket.ie",[303,304,305]],["backmarket.it",[303,304,305]],["backmarket.nl",[303,304,305]],["backmarket.pt",[303,304,305]],["backmarket.se",[303,304,305]],["backmarket.sk",[303,304,305]],["backmarket.com",[303,304,305]],["eleven-sportswear.cz",[306,307,308]],["silvini.com",[306,307,308]],["silvini.de",[306,307,308]],["purefiji.cz",[306,307,308]],["voda-zdarma.cz",[306,307,308]],["lesgarconsfaciles.com",[306,307,308]],["ulevapronohy.cz",[306,307,308]],["vitalvibe.eu",[306,307,308]],["plavte.cz",[306,307,308]],["mo-tools.cz",[306,307,308]],["flamantonlineshop.cz",[306,307,308]],["sandratex.cz",[306,307,308]],["norwayshop.cz",[306,307,308]],["3d-foto.cz",[306,307,308]],["neviditelnepradlo.cz",[306,307,308]],["nutrimedium.com",[306,307,308]],["silvini.cz",[306,307,308]],["karel.cz",[306,307,308]],["silvini.sk",[306,307,308]],["book-n-drive.de",309],["cotswoldoutdoor.com",310],["cotswoldoutdoor.ie",310],["cam.start.canon",311],["usnews.com",312],["researchaffiliates.com",313],["singkinderlieder.de",314],["store.ubisoft.com",[315,316,317,318]],["ba.com",[319,320,321]],["britishairways.com",[319,320,321]],["cineman.pl",[322,323,324]],["tv-trwam.pl",[322,323,324,325]],["qatarairways.com",[326,327,328,329,330]],["wedding.pl",331],["vivaldi.com",332],["emuia1.gugik.gov.pl",333],["nike.com",334],["adidas.at",335],["adidas.be",335],["adidas.ca",335],["adidas.ch",335],["adidas.cl",335],["adidas.co",335],["adidas.co.in",335],["adidas.co.kr",335],["adidas.co.nz",335],["adidas.co.th",335],["adidas.co.uk",335],["adidas.com",335],["adidas.com.ar",335],["adidas.com.au",335],["adidas.com.br",335],["adidas.com.my",335],["adidas.com.ph",335],["adidas.com.vn",335],["adidas.cz",335],["adidas.de",335],["adidas.dk",335],["adidas.es",335],["adidas.fi",335],["adidas.fr",335],["adidas.gr",335],["adidas.ie",335],["adidas.it",335],["adidas.mx",335],["adidas.nl",335],["adidas.no",335],["adidas.pe",335],["adidas.pl",335],["adidas.pt",335],["adidas.ru",335],["adidas.se",335],["adidas.sk",335],["colourbox.com",336],["ebilet.pl",337],["snap.com",338],["ratemyprofessors.com",339],["filen.io",340],["restaurantclub.pl",341],["context.news",341],["stilord.com",342],["stilord.pl",342],["stilord.de",342],["stilord.fr",342],["quantamagazine.org",343],["scaleway.com",345],["hellotv.nl",346],["lasestrellas.tv",347],["anderweltverlag.com",348],["octavio-shop.com",348],["forcetools-kepmar.eu",348],["fantecshop.de",348],["hexen-werkstatt.shop",348],["shop-naturstrom.de",348],["biona-shop.de",348],["camokoenig.de",348],["bikepro.de",348],["kaffeediscount.com",348],["vamos-skateshop.com",348],["holland-shop.com",348],["avonika.com",348],["officesuite.com",349],["fups.com",[350,351]],["scienceopen.com",352],["calendly.com",353],["ubereats.com",354],["101internet.ru",355],["bein.com",356],["beinsports.com",356],["tunnelmb.net",357],["figshare.com",358],["hitado.de",359],["bitso.com",360],["eco-toimistotarvikkeet.fi",361],["proficient.fi",361],["developer.ing.com",362],["ehealth.gov.gr",363],["larian.com",363],["calvinklein.se",[364,365,366]],["calvinklein.fi",[364,365,366]],["calvinklein.sk",[364,365,366]],["calvinklein.si",[364,365,366]],["calvinklein.ch",[364,365,366]],["calvinklein.ru",[364,365,366]],["calvinklein.com",[364,365,366]],["calvinklein.pt",[364,365,366]],["calvinklein.pl",[364,365,366]],["calvinklein.at",[364,365,366]],["calvinklein.nl",[364,365,366]],["calvinklein.hu",[364,365,366]],["calvinklein.lu",[364,365,366]],["calvinklein.lt",[364,365,366]],["calvinklein.lv",[364,365,366]],["calvinklein.it",[364,365,366]],["calvinklein.ie",[364,365,366]],["calvinklein.hr",[364,365,366]],["calvinklein.fr",[364,365,366]],["calvinklein.es",[364,365,366]],["calvinklein.ee",[364,365,366]],["calvinklein.de",[364,365,366]],["calvinklein.dk",[364,365,366]],["calvinklein.cz",[364,365,366]],["calvinklein.bg",[364,365,366]],["calvinklein.be",[364,365,366]],["calvinklein.co.uk",[364,365,366]],["ofdb.de",367],["dtksoft.com",368],["serverstoplist.com",369],["howstuffworks.com",370],["chollometro.com",371],["dealabs.com",371],["hotukdeals.com",371],["pepper.it",371],["pepper.pl",371],["preisjaeger.at",371],["mydealz.de",371],["easyfind.ch",[372,373]],["pelikone.fi",374],["constantin.film",[375,376,377]],["notion.so",378],["digi24.ro",379],["omgevingsloketinzage.omgeving.vlaanderen.be",[380,381]],["primor.eu",382]]);

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
