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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["cookieConsent","1"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["consent_updated","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cookie-bar","0"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["privacySettings","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["hide-gdpr-bar","true"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["cookie_accepted","false"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["cookie-policy","true"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["spemPermission","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["resonate.coop",3],["citibankonline.pl",4],["casellimoveis.com.br",5],["embedplus.com",6],["e-file.pl",7],["sp215.info",8],["empik.com",9],["app.moneyfarm.com",10],["senda.pl",11],["befestigungsfuchs.de",12],["cut-tec.co.uk",13],["parfum-zentrum.de",14],["candy-store.cz",14],["gaytimes.co.uk",15],["hello.one",16],["wildcat-koeln.de",17],["libraries.merton.gov.uk",[18,19]],["tommy.hr",[20,21]],["usit.uio.no",22],["halonen.fi",[23,24,25,26,27]],["carlson.fi",[23,24,25,26,27]],["demo-digital-twin.r-stahl.com",28],["la31devalladolid.com",[29,30]],["mx.com",31],["foxtrail.fjallraven.com",32],["dotwatcher.cc",33],["bazarchic.com",[34,35,36]],["seedrs.com",37],["mypensiontracker.co.uk",38],["praxisplan.at",[38,60]],["endclothing.com",39],["esimplus.me",40],["ecologi.com",41],["wamba.com",42],["eurac.edu",43],["akasaair.com",44],["rittal.com",45],["wizards.com",46],["worstbassist.com",[47,48,49,50,51,52]],["zs-watch.com",53],["crown.com",54],["mesanalyses.fr",55],["teket.jp",56],["fish.shimano.com",[57,58,59]],["simsherpa.com",[61,62,63]],["translit.ru",64],["renault-autocenterprignitz-pritzwalk.de",65],["renault-spenrath-juelich.de",65],["aruba.com",66],["aireuropa.com",67],["skfbearingselect.com",[68,69]],["scanrenovation.com",70],["ttela.se",71],["dominospizza.pl",72],["devagroup.pl",73],["hintaopas.fi",74],["ledenicheur.fr",74],["prisjagt.dk",74],["prisjakt.no",74],["prisjakt.nu",74],["pricespy.co.uk",74],["pricespy.co.nz",74],["horecaworld.biz",75],["horecaworld.be",75],["secondsol.com",75],["angelifybeauty.com",76],["cotopaxi.com",77],["kaluga.hh.ru",78],["justjoin.it",79],["digibest.pt",80],["two-notes.com",81],["theverge.com",82],["daimant.co",83],["secularism.org.uk",84],["karriere-hamburg.de",85],["musicmap.info",86],["gasspisen.se",87],["medtube.pl",88],["medtube.es",88],["medtube.fr",88],["medtube.net",88],["standard.sk",89],["linmot.com",90],["containerandpackaging.com",91],["top-yp.de",92],["termania.net",93],["swisscard.ch",94],["account.nowpayments.io",95],["gigasport.at",96],["gigasport.de",96],["gigasport.ch",96],["velleahome.gr",97],["nicequest.com",98],["handelsbanken.no",99],["handelsbanken.com",99],["handelsbanken.co.uk",99],["handelsbanken.se",[99,187]],["handelsbanken.dk",99],["handelsbanken.fi",99],["songtradr.com",100],["logo.pt",[101,102]],["dentmania.de",103],["free.navalny.com",103],["latoken.com",103],["waitrose.com",[104,105]],["campusbrno.cz",[106,107,108]],["secrid.com",109],["etsy.com",110],["deps.dev",111],["buf.build",112],["starofservice.com",113],["ytcomment.kmcat.uk",114],["gmx.com",115],["gmx.fr",115],["karofilm.ru",116],["octopusenergy.it",117],["octopusenergy.es",[117,118]],["justanswer.es",119],["justanswer.de",119],["justanswer.com",119],["justanswer.co.uk",119],["citilink.ru",120],["huutokaupat.com",121],["kaggle.com",122],["emr.ch",[123,128]],["gem.cbc.ca",124],["pumatools.hu",125],["ici.tou.tv",126],["crunchyroll.com",127],["clipchamp.com",129],["trouwenbijfletcher.nl",129],["fletcher.nl",129],["fletcherzakelijk.nl",129],["intermatic.com",129],["ebikelohr.de",130],["eurosender.com",131],["melectronics.ch",132],["guard.io",133],["dom.ru",134],["schrottpreis.org",135],["nokportalen.se",136],["dokiliko.com",137],["valamis.com",[138,139,140]],["sverigesingenjorer.se",141],["shop.almawin.de",[142,143,144,145]],["esm-computer.de",144],["calmwaters.de",144],["mellerud.de",144],["akustik-projekt.at",144],["vansprint.de",144],["0815.at",144],["0815.eu",144],["ojskate.com",144],["der-schweighofer.de",144],["tz-bedarf.de",144],["zeinpharma.de",144],["weicon.com",144],["dagvandewebshop.be",144],["thiele-tee.de",144],["carbox.de",144],["riapsport.de",144],["trendpet.de",144],["eheizung24.de",144],["seemueller.com",144],["vivande.de",144],["heidegrill.com",144],["gladiator-fightwear.com",144],["h-andreas.com",144],["pp-parts.com",144],["natuerlich-holzschuhe.de",144],["massivart.de",144],["malermeister-shop.de",144],["imping-confiserie.de",144],["lenox-trading.at",144],["cklenk.de",144],["catolet.de",144],["drinkitnow.de",144],["patisserie-m.de",144],["storm-proof.com",144],["balance-fahrradladen.de",144],["magicpos.shop",144],["zeinpharma.com",144],["sps-handel.net",144],["novagenics.com",144],["butterfly-circus.de",144],["holzhof24.de",144],["w6-wertarbeit.de",144],["fleurop.de",144],["leki.com",144],["extremeaudio.de",144],["textshuttle.com",146],["zeitzurtrauer.de",147],["fabriziovanmarciano.com",[148,149,150]],["nationalrail.com",[148,149,150]],["eett.gr",[148,149,150]],["funkypotato.com",[148,149,150]],["equalexchange.co.uk",[148,149,150]],["swnsdigital.com",[148,149,150]],["gogolf.fi",[150,151]],["skaling.de",[152,153,154]],["bringmeister.de",155],["leibniz.com",156],["project529.com",157],["clearblue.com",158],["drewag.de",[159,160,161]],["enso.de",[159,160,161]],["buidlbox.io",159],["helitransair.com",162],["more.com",163],["nwslsoccer.com",163],["climatecentral.org",164],["resolution.de",165],["flagma.by",166],["eatsalad.com",167],["pacstall.dev",168],["web2.0calc.fr",169],["de-appletradein.likewize.com",170],["swissborg.com",171],["qwice.com",172],["canalpluskuchnia.pl",[173,174]],["uizard.io",175],["e-chladiva.cz",176],["assos.com",177],["monese.com",177],["stmas.bayern.de",[178,181]],["novayagazeta.eu",179],["kinopoisk.ru",180],["yandex.ru",180],["go.netia.pl",[182,183]],["polsatboxgo.pl",[182,183]],["ing.it",[184,185]],["ing.nl",186],["youcom.com.br",188],["rule34.paheal.net",189],["pccomponentes.fr",190],["pccomponentes.com",190],["pccomponentes.pt",190],["oead.at",191],["innovationsstiftung-bildung.at",191],["etwinning.at",191],["arqa-vet.at",191],["zentrumfuercitizenscience.at",191],["vorstudienlehrgang.at",191],["erasmusplus.at",191],["jeger.pl",192],["bo.de",193],["thegamingwatcher.com",194],["webtv.stofa.dk",195],["plusujemy.pl",196],["melkkobrew.fi",197],["asus.com.cn",[198,200]],["zentalk.asus.com",[198,200]],["mubi.com",199],["carsupermarket.com",201],["lawrievetgroup.co.uk",202],["59northwheels.se",203],["foto-gregor.de",204],["kamera-express.de",205],["kamera-express.nl",205],["kamera-express.fr",205],["kamera-express.lu",205],["dhbbank.com",206],["dhbbank.de",206],["dhbbank.be",206],["dhbbank.nl",206],["login.ingbank.pl",207],["fabrykacukiernika.pl",[208,209]],["playlumi.com",[210,211,212]],["chatfuel.com",213],["studio3t.com",[214,215,216,217]],["realgap.co.uk",[218,219,220,221]],["hotelborgia.com",[222,223]],["sweet24.de",224],["zwembaddekouter.be",225],["flixclassic.pl",226],["jobtoday.com",227],["deltatre.com",[228,229,241]],["withings.com",[230,231,232]],["gift.be",[233,234]],["animaze.us",235],["penn-elcom.com",235],["bizkaia.eus",[236,237,238]],["sinparty.com",239],["jobs.ch",240],["jobup.ch",240],["depop.com",[242,243]],["mantel.com",244],["armedangels.com",[245,246,247]],["e-dojus.lv",248],["burnesspaull.com",249],["oncosur.org",250],["ryanair.com",251],["bayernportal.de",[252,253,254]],["zipjob.com",255],["pricehubble.com",256],["ilmotorsport.de",257],["myriad.social",258],["exeedme.com",258],["followalice.com",[258,313]],["aqua-store.fr",259],["app.arzt-direkt.de",260],["dasfutterhaus.at",261],["e-pity.pl",262],["fillup.pl",263],["dailymotion.com",264],["barcawelt.de",265],["lueneburger-heide.de",266],["polizei.bayern.de",[267,269]],["ourworldofpixels.com",268],["jku.at",270],["espacocasa.com",271],["altraeta.it",271],["centrooceano.it",271],["allstoresdigital.com",271],["cultarm3d.de",271],["soulbounce.com",271],["fluidtopics.com",271],["uvetgbt.com",271],["malcorentacar.com",271],["emondo.de",271],["maspero.it",271],["kelkay.com",271],["underground-england.com",271],["vert.eco",271],["turcolegal.com",271],["magnet4blogging.net",271],["moovly.com",271],["automationafrica.co.za",271],["jornaldoalgarve.pt",271],["keravanenergia.fi",271],["kuopas.fi",271],["frag-machiavelli.de",271],["healthera.co.uk",271],["mobeleader.com",271],["powerup-gaming.com",271],["developer-blog.net",271],["medical.edu.mt",271],["deh.mt",271],["bluebell-railway.com",271],["ribescasals.com",271],["javea.com",271],["chinaimportal.com",271],["inds.co.uk",271],["raoul-follereau.org",271],["serramenti-milano.it",271],["cosasdemujer.com",271],["luz-blanca.info",271],["cosasdeviajes.com",271],["safehaven.io",271],["havocpoint.it",271],["motofocus.pl",271],["nomanssky.com",271],["drei-franken-info.de",271],["clausnehring.com",271],["alttab.net",271],["kinderleicht.berlin",271],["kiakkoradio.fi",271],["cosasdelcaribe.es",271],["de-sjove-jokes.dk",271],["serverprofis.de",271],["biographyonline.net",271],["iziconfort.com",271],["sportinnederland.com",271],["natureatblog.com",271],["wtsenergy.com",271],["cosasdesalud.es",271],["internetpasoapaso.com",271],["zurzeit.at",271],["contaspoupanca.pt",271],["backmarket.de",[272,273,274]],["backmarket.co.uk",[272,273,274]],["backmarket.es",[272,273,274]],["backmarket.be",[272,273,274]],["backmarket.at",[272,273,274]],["backmarket.fr",[272,273,274]],["backmarket.gr",[272,273,274]],["backmarket.fi",[272,273,274]],["backmarket.ie",[272,273,274]],["backmarket.it",[272,273,274]],["backmarket.nl",[272,273,274]],["backmarket.pt",[272,273,274]],["backmarket.se",[272,273,274]],["backmarket.sk",[272,273,274]],["backmarket.com",[272,273,274]],["eleven-sportswear.cz",[275,276,277]],["silvini.com",[275,276,277]],["silvini.de",[275,276,277]],["purefiji.cz",[275,276,277]],["voda-zdarma.cz",[275,276,277]],["lesgarconsfaciles.com",[275,276,277]],["ulevapronohy.cz",[275,276,277]],["vitalvibe.eu",[275,276,277]],["plavte.cz",[275,276,277]],["mo-tools.cz",[275,276,277]],["flamantonlineshop.cz",[275,276,277]],["sandratex.cz",[275,276,277]],["norwayshop.cz",[275,276,277]],["3d-foto.cz",[275,276,277]],["neviditelnepradlo.cz",[275,276,277]],["nutrimedium.com",[275,276,277]],["silvini.cz",[275,276,277]],["karel.cz",[275,276,277]],["silvini.sk",[275,276,277]],["book-n-drive.de",278],["cotswoldoutdoor.com",279],["cotswoldoutdoor.ie",279],["cam.start.canon",280],["usnews.com",281],["researchaffiliates.com",282],["singkinderlieder.de",283],["store.ubisoft.com",[284,285,286,287]],["ba.com",[288,289,290]],["britishairways.com",[288,289,290]],["cineman.pl",[291,292,293]],["tv-trwam.pl",[291,292,293,294]],["qatarairways.com",[295,296,297,298,299]],["wedding.pl",300],["vivaldi.com",301],["emuia1.gugik.gov.pl",302],["nike.com",303],["adidas.at",304],["adidas.be",304],["adidas.ca",304],["adidas.ch",304],["adidas.cl",304],["adidas.co",304],["adidas.co.in",304],["adidas.co.kr",304],["adidas.co.nz",304],["adidas.co.th",304],["adidas.co.uk",304],["adidas.com",304],["adidas.com.ar",304],["adidas.com.au",304],["adidas.com.br",304],["adidas.com.my",304],["adidas.com.ph",304],["adidas.com.vn",304],["adidas.cz",304],["adidas.de",304],["adidas.dk",304],["adidas.es",304],["adidas.fi",304],["adidas.fr",304],["adidas.gr",304],["adidas.ie",304],["adidas.it",304],["adidas.mx",304],["adidas.nl",304],["adidas.no",304],["adidas.pe",304],["adidas.pl",304],["adidas.pt",304],["adidas.ru",304],["adidas.se",304],["adidas.sk",304],["colourbox.com",305],["ebilet.pl",306],["snap.com",307],["ratemyprofessors.com",308],["filen.io",309],["restaurantclub.pl",310],["context.news",310],["stilord.com",311],["stilord.pl",311],["stilord.de",311],["stilord.fr",311],["quantamagazine.org",312],["scaleway.com",314],["hellotv.nl",315],["lasestrellas.tv",316],["forcetools-kepmar.eu",317],["fantecshop.de",317],["hexen-werkstatt.shop",317],["shop-naturstrom.de",317],["biona-shop.de",317],["camokoenig.de",317],["bikepro.de",317],["kaffeediscount.com",317],["vamos-skateshop.com",317],["holland-shop.com",317],["avonika.com",317],["officesuite.com",318],["fups.com",[319,320]],["scienceopen.com",321],["calendly.com",322],["ubereats.com",323],["101internet.ru",324],["bein.com",325],["beinsports.com",325],["tunnelmb.net",326],["figshare.com",327],["hitado.de",328],["bitso.com",329],["eco-toimistotarvikkeet.fi",330],["proficient.fi",330],["developer.ing.com",331],["ehealth.gov.gr",332],["larian.com",332],["calvinklein.se",[333,334,335]],["calvinklein.fi",[333,334,335]],["calvinklein.sk",[333,334,335]],["calvinklein.si",[333,334,335]],["calvinklein.ch",[333,334,335]],["calvinklein.ru",[333,334,335]],["calvinklein.com",[333,334,335]],["calvinklein.pt",[333,334,335]],["calvinklein.pl",[333,334,335]],["calvinklein.at",[333,334,335]],["calvinklein.nl",[333,334,335]],["calvinklein.hu",[333,334,335]],["calvinklein.lu",[333,334,335]],["calvinklein.lt",[333,334,335]],["calvinklein.lv",[333,334,335]],["calvinklein.it",[333,334,335]],["calvinklein.ie",[333,334,335]],["calvinklein.hr",[333,334,335]],["calvinklein.fr",[333,334,335]],["calvinklein.es",[333,334,335]],["calvinklein.ee",[333,334,335]],["calvinklein.de",[333,334,335]],["calvinklein.dk",[333,334,335]],["calvinklein.cz",[333,334,335]],["calvinklein.bg",[333,334,335]],["calvinklein.be",[333,334,335]],["calvinklein.co.uk",[333,334,335]],["ofdb.de",336],["dtksoft.com",337],["howstuffworks.com",338],["chollometro.com",339],["dealabs.com",339],["hotukdeals.com",339],["pepper.it",339],["pepper.pl",339],["preisjaeger.at",339],["mydealz.de",339],["easyfind.ch",[340,341]],["pelikone.fi",342],["constantin.film",[343,344,345]],["notion.so",346],["digi24.ro",347]]);

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
        'y', 'n',
        'yes', 'no',
    ];
    if ( validValues.includes(value.toLowerCase()) === false ) {
        if ( /^\d+$/.test(value) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 15 ) { return; }
    }
    value = encodeURIComponent(value);

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
