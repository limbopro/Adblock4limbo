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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["te_cookie_ok","1"],["privacySettings","1"],["are_essential_consents_given","1"],["is_personalized_content_consent_given","1"],["acepta_cookies_funcionales","1"],["acepta_cookies_obligatorias","1"],["acepta_cookies_personalizacion","1"],["cookiepolicyinfo_new","true"],["acceptCookie","true"],["cookie_analytics","false"],["cookieConsent","1"],["et_cookie_consent","true"],["__gitbook_cookie_granted","no"],["cookieBasic","true"],["cookieMold","true"],["ytprefs_gdpr_consent","1"],["efile-cookiename-","1"],["plg_system_djcookiemonster_informed","1","","reload","1"],["cvc","true"],["consent_updated","true"],["cookieConsent3","true"],["acris_cookie_acc","1","","reload","1"],["termsfeed_pc1_notice_banner_hidden","true"],["cookie-bar","0"],["cmplz_marketing","allowed"],["acknowledged","true"],["gdpr_shield_notice_dismissed","yes"],["luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"],["luci_CookieConsent","true"],["ng-cc-necessary","1"],["ng-cc-accepted","accepted"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["hide-gdpr-bar","true"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["switchCookies","1"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookielawinfo-checkbox-advertisement","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["cookie_accepted","false"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","0","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["cookie-policy","true"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["spemPermission","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"],["cmp_level","15"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["resonate.coop",3],["teenage.engineering",4],["img.ly",5],["halonen.fi",[5,36,37,38,39]],["carlson.fi",[5,36,37,38,39]],["cams.ashemaletube.com",[6,7]],["electronicacerler.com",[8,9,10]],["okpoznan.pl",[11,13]],["ielts.idp.com",12],["citibankonline.pl",14],["endlesstools.io",15],["thehacker.recipes",16],["mbhszepkartya.hu",17],["casellimoveis.com.br",18],["embedplus.com",19],["e-file.pl",20],["sp215.info",21],["empik.com",22],["app.moneyfarm.com",23],["senda.pl",24],["befestigungsfuchs.de",25],["cut-tec.co.uk",26],["parfum-zentrum.de",27],["candy-store.cz",27],["gaytimes.co.uk",28],["hello.one",29],["wildcat-koeln.de",30],["libraries.merton.gov.uk",[31,32]],["tommy.hr",[33,34]],["usit.uio.no",35],["demo-digital-twin.r-stahl.com",40],["la31devalladolid.com",[41,42]],["mx.com",43],["foxtrail.fjallraven.com",44],["dotwatcher.cc",45],["bazarchic.com",[46,47,48]],["seedrs.com",49],["mypensiontracker.co.uk",50],["praxisplan.at",[50,72]],["endclothing.com",51],["esimplus.me",52],["ecologi.com",53],["wamba.com",54],["eurac.edu",55],["akasaair.com",56],["rittal.com",57],["wizards.com",58],["worstbassist.com",[59,60,61,62,63,64]],["zs-watch.com",65],["crown.com",66],["mesanalyses.fr",67],["teket.jp",68],["fish.shimano.com",[69,70,71]],["simsherpa.com",[73,74,75]],["translit.ru",76],["renault-autocenterprignitz-pritzwalk.de",77],["renault-spenrath-juelich.de",77],["aruba.com",78],["aireuropa.com",79],["skfbearingselect.com",[80,81]],["scanrenovation.com",82],["ttela.se",83],["dominospizza.pl",84],["devagroup.pl",85],["hintaopas.fi",86],["ledenicheur.fr",86],["prisjagt.dk",86],["prisjakt.no",86],["prisjakt.nu",86],["pricespy.co.uk",86],["pricespy.co.nz",86],["horecaworld.biz",87],["horecaworld.be",87],["secondsol.com",87],["angelifybeauty.com",88],["cotopaxi.com",89],["kaluga.hh.ru",90],["justjoin.it",91],["digibest.pt",92],["two-notes.com",93],["theverge.com",94],["daimant.co",95],["secularism.org.uk",96],["karriere-hamburg.de",97],["musicmap.info",98],["gasspisen.se",99],["medtube.pl",100],["medtube.es",100],["medtube.fr",100],["medtube.net",100],["standard.sk",101],["linmot.com",102],["containerandpackaging.com",103],["top-yp.de",104],["termania.net",105],["swisscard.ch",106],["account.nowpayments.io",107],["gigasport.at",108],["gigasport.de",108],["gigasport.ch",108],["velleahome.gr",109],["nicequest.com",110],["handelsbanken.no",111],["handelsbanken.com",111],["handelsbanken.co.uk",111],["handelsbanken.se",[111,199]],["handelsbanken.dk",111],["handelsbanken.fi",111],["songtradr.com",112],["logo.pt",[113,114]],["dentmania.de",115],["free.navalny.com",115],["latoken.com",115],["waitrose.com",[116,117]],["campusbrno.cz",[118,119,120]],["secrid.com",121],["etsy.com",122],["deps.dev",123],["buf.build",124],["starofservice.com",125],["ytcomment.kmcat.uk",126],["gmx.com",127],["gmx.fr",127],["karofilm.ru",128],["octopusenergy.it",129],["octopusenergy.es",[129,130]],["justanswer.es",131],["justanswer.de",131],["justanswer.com",131],["justanswer.co.uk",131],["citilink.ru",132],["huutokaupat.com",133],["kaggle.com",134],["emr.ch",[135,140]],["gem.cbc.ca",136],["pumatools.hu",137],["ici.tou.tv",138],["crunchyroll.com",139],["clipchamp.com",141],["trouwenbijfletcher.nl",141],["fletcher.nl",141],["fletcherzakelijk.nl",141],["intermatic.com",141],["ebikelohr.de",142],["eurosender.com",143],["melectronics.ch",144],["guard.io",145],["dom.ru",146],["schrottpreis.org",147],["nokportalen.se",148],["dokiliko.com",149],["valamis.com",[150,151,152]],["sverigesingenjorer.se",153],["shop.almawin.de",[154,155,156,157]],["esm-computer.de",156],["calmwaters.de",156],["mellerud.de",156],["akustik-projekt.at",156],["vansprint.de",156],["0815.at",156],["0815.eu",156],["ojskate.com",156],["der-schweighofer.de",156],["tz-bedarf.de",156],["zeinpharma.de",156],["weicon.com",156],["dagvandewebshop.be",156],["thiele-tee.de",156],["carbox.de",156],["riapsport.de",156],["trendpet.de",156],["eheizung24.de",156],["seemueller.com",156],["vivande.de",156],["heidegrill.com",156],["gladiator-fightwear.com",156],["h-andreas.com",156],["pp-parts.com",156],["natuerlich-holzschuhe.de",156],["massivart.de",156],["malermeister-shop.de",156],["imping-confiserie.de",156],["lenox-trading.at",156],["cklenk.de",156],["catolet.de",156],["drinkitnow.de",156],["patisserie-m.de",156],["storm-proof.com",156],["balance-fahrradladen.de",156],["magicpos.shop",156],["zeinpharma.com",156],["sps-handel.net",156],["novagenics.com",156],["butterfly-circus.de",156],["holzhof24.de",156],["w6-wertarbeit.de",156],["fleurop.de",156],["leki.com",156],["extremeaudio.de",156],["textshuttle.com",158],["zeitzurtrauer.de",159],["atman.pl",[160,161,162]],["fabriziovanmarciano.com",[160,161,162]],["nationalrail.com",[160,161,162]],["eett.gr",[160,161,162]],["funkypotato.com",[160,161,162]],["equalexchange.co.uk",[160,161,162]],["swnsdigital.com",[160,161,162]],["gogolf.fi",[162,163]],["skaling.de",[164,165,166]],["bringmeister.de",167],["leibniz.com",168],["project529.com",169],["clearblue.com",170],["drewag.de",[171,172,173]],["enso.de",[171,172,173]],["buidlbox.io",171],["helitransair.com",174],["more.com",175],["nwslsoccer.com",175],["climatecentral.org",176],["resolution.de",177],["flagma.by",178],["eatsalad.com",179],["pacstall.dev",180],["web2.0calc.fr",181],["de-appletradein.likewize.com",182],["swissborg.com",183],["qwice.com",184],["canalpluskuchnia.pl",[185,186]],["uizard.io",187],["e-chladiva.cz",188],["assos.com",189],["monese.com",189],["stmas.bayern.de",[190,193]],["novayagazeta.eu",191],["kinopoisk.ru",192],["yandex.ru",192],["go.netia.pl",[194,195]],["polsatboxgo.pl",[194,195]],["ing.it",[196,197]],["ing.nl",198],["youcom.com.br",200],["rule34.paheal.net",201],["pccomponentes.fr",202],["pccomponentes.com",202],["pccomponentes.pt",202],["oead.at",203],["innovationsstiftung-bildung.at",203],["etwinning.at",203],["arqa-vet.at",203],["zentrumfuercitizenscience.at",203],["vorstudienlehrgang.at",203],["erasmusplus.at",203],["jeger.pl",204],["bo.de",205],["thegamingwatcher.com",206],["webtv.stofa.dk",207],["plusujemy.pl",208],["melkkobrew.fi",209],["asus.com.cn",[210,212]],["zentalk.asus.com",[210,212]],["mubi.com",211],["carsupermarket.com",213],["lawrievetgroup.co.uk",214],["59northwheels.se",215],["foto-gregor.de",216],["kamera-express.de",217],["kamera-express.nl",217],["kamera-express.fr",217],["kamera-express.lu",217],["dhbbank.com",218],["dhbbank.de",218],["dhbbank.be",218],["dhbbank.nl",218],["login.ingbank.pl",219],["fabrykacukiernika.pl",[220,221]],["playlumi.com",[222,223,224]],["chatfuel.com",225],["studio3t.com",[226,227,228,229]],["realgap.co.uk",[230,231,232,233]],["hotelborgia.com",[234,235]],["sweet24.de",236],["zwembaddekouter.be",237],["flixclassic.pl",238],["jobtoday.com",239],["deltatre.com",[240,241,253]],["withings.com",[242,243,244]],["gift.be",[245,246]],["animaze.us",247],["penn-elcom.com",247],["bizkaia.eus",[248,249,250]],["sinparty.com",251],["jobs.ch",252],["jobup.ch",252],["depop.com",[254,255]],["mantel.com",256],["armedangels.com",[257,258,259]],["e-dojus.lv",260],["burnesspaull.com",261],["oncosur.org",262],["ryanair.com",263],["bayernportal.de",[264,265,266]],["zipjob.com",267],["pricehubble.com",268],["ilmotorsport.de",269],["psbank.ru",270],["myriad.social",270],["exeedme.com",270],["followalice.com",[270,325]],["aqua-store.fr",271],["app.arzt-direkt.de",272],["dasfutterhaus.at",273],["e-pity.pl",274],["fillup.pl",275],["dailymotion.com",276],["barcawelt.de",277],["lueneburger-heide.de",278],["polizei.bayern.de",[279,281]],["ourworldofpixels.com",280],["jku.at",282],["espacocasa.com",283],["altraeta.it",283],["centrooceano.it",283],["allstoresdigital.com",283],["cultarm3d.de",283],["soulbounce.com",283],["fluidtopics.com",283],["uvetgbt.com",283],["malcorentacar.com",283],["emondo.de",283],["maspero.it",283],["kelkay.com",283],["underground-england.com",283],["vert.eco",283],["turcolegal.com",283],["magnet4blogging.net",283],["moovly.com",283],["automationafrica.co.za",283],["jornaldoalgarve.pt",283],["keravanenergia.fi",283],["kuopas.fi",283],["frag-machiavelli.de",283],["healthera.co.uk",283],["mobeleader.com",283],["powerup-gaming.com",283],["developer-blog.net",283],["medical.edu.mt",283],["deh.mt",283],["bluebell-railway.com",283],["ribescasals.com",283],["javea.com",283],["chinaimportal.com",283],["inds.co.uk",283],["raoul-follereau.org",283],["serramenti-milano.it",283],["cosasdemujer.com",283],["luz-blanca.info",283],["cosasdeviajes.com",283],["safehaven.io",283],["havocpoint.it",283],["motofocus.pl",283],["nomanssky.com",283],["drei-franken-info.de",283],["clausnehring.com",283],["alttab.net",283],["kinderleicht.berlin",283],["kiakkoradio.fi",283],["cosasdelcaribe.es",283],["de-sjove-jokes.dk",283],["serverprofis.de",283],["biographyonline.net",283],["iziconfort.com",283],["sportinnederland.com",283],["natureatblog.com",283],["wtsenergy.com",283],["cosasdesalud.es",283],["internetpasoapaso.com",283],["zurzeit.at",283],["contaspoupanca.pt",283],["backmarket.de",[284,285,286]],["backmarket.co.uk",[284,285,286]],["backmarket.es",[284,285,286]],["backmarket.be",[284,285,286]],["backmarket.at",[284,285,286]],["backmarket.fr",[284,285,286]],["backmarket.gr",[284,285,286]],["backmarket.fi",[284,285,286]],["backmarket.ie",[284,285,286]],["backmarket.it",[284,285,286]],["backmarket.nl",[284,285,286]],["backmarket.pt",[284,285,286]],["backmarket.se",[284,285,286]],["backmarket.sk",[284,285,286]],["backmarket.com",[284,285,286]],["eleven-sportswear.cz",[287,288,289]],["silvini.com",[287,288,289]],["silvini.de",[287,288,289]],["purefiji.cz",[287,288,289]],["voda-zdarma.cz",[287,288,289]],["lesgarconsfaciles.com",[287,288,289]],["ulevapronohy.cz",[287,288,289]],["vitalvibe.eu",[287,288,289]],["plavte.cz",[287,288,289]],["mo-tools.cz",[287,288,289]],["flamantonlineshop.cz",[287,288,289]],["sandratex.cz",[287,288,289]],["norwayshop.cz",[287,288,289]],["3d-foto.cz",[287,288,289]],["neviditelnepradlo.cz",[287,288,289]],["nutrimedium.com",[287,288,289]],["silvini.cz",[287,288,289]],["karel.cz",[287,288,289]],["silvini.sk",[287,288,289]],["book-n-drive.de",290],["cotswoldoutdoor.com",291],["cotswoldoutdoor.ie",291],["cam.start.canon",292],["usnews.com",293],["researchaffiliates.com",294],["singkinderlieder.de",295],["store.ubisoft.com",[296,297,298,299]],["ba.com",[300,301,302]],["britishairways.com",[300,301,302]],["cineman.pl",[303,304,305]],["tv-trwam.pl",[303,304,305,306]],["qatarairways.com",[307,308,309,310,311]],["wedding.pl",312],["vivaldi.com",313],["emuia1.gugik.gov.pl",314],["nike.com",315],["adidas.at",316],["adidas.be",316],["adidas.ca",316],["adidas.ch",316],["adidas.cl",316],["adidas.co",316],["adidas.co.in",316],["adidas.co.kr",316],["adidas.co.nz",316],["adidas.co.th",316],["adidas.co.uk",316],["adidas.com",316],["adidas.com.ar",316],["adidas.com.au",316],["adidas.com.br",316],["adidas.com.my",316],["adidas.com.ph",316],["adidas.com.vn",316],["adidas.cz",316],["adidas.de",316],["adidas.dk",316],["adidas.es",316],["adidas.fi",316],["adidas.fr",316],["adidas.gr",316],["adidas.ie",316],["adidas.it",316],["adidas.mx",316],["adidas.nl",316],["adidas.no",316],["adidas.pe",316],["adidas.pl",316],["adidas.pt",316],["adidas.ru",316],["adidas.se",316],["adidas.sk",316],["colourbox.com",317],["ebilet.pl",318],["snap.com",319],["ratemyprofessors.com",320],["filen.io",321],["restaurantclub.pl",322],["context.news",322],["stilord.com",323],["stilord.pl",323],["stilord.de",323],["stilord.fr",323],["quantamagazine.org",324],["scaleway.com",326],["hellotv.nl",327],["lasestrellas.tv",328],["anderweltverlag.com",329],["octavio-shop.com",329],["forcetools-kepmar.eu",329],["fantecshop.de",329],["hexen-werkstatt.shop",329],["shop-naturstrom.de",329],["biona-shop.de",329],["camokoenig.de",329],["bikepro.de",329],["kaffeediscount.com",329],["vamos-skateshop.com",329],["holland-shop.com",329],["avonika.com",329],["officesuite.com",330],["fups.com",[331,332]],["scienceopen.com",333],["calendly.com",334],["ubereats.com",335],["101internet.ru",336],["bein.com",337],["beinsports.com",337],["tunnelmb.net",338],["figshare.com",339],["hitado.de",340],["bitso.com",341],["eco-toimistotarvikkeet.fi",342],["proficient.fi",342],["developer.ing.com",343],["ehealth.gov.gr",344],["larian.com",344],["calvinklein.se",[345,346,347]],["calvinklein.fi",[345,346,347]],["calvinklein.sk",[345,346,347]],["calvinklein.si",[345,346,347]],["calvinklein.ch",[345,346,347]],["calvinklein.ru",[345,346,347]],["calvinklein.com",[345,346,347]],["calvinklein.pt",[345,346,347]],["calvinklein.pl",[345,346,347]],["calvinklein.at",[345,346,347]],["calvinklein.nl",[345,346,347]],["calvinklein.hu",[345,346,347]],["calvinklein.lu",[345,346,347]],["calvinklein.lt",[345,346,347]],["calvinklein.lv",[345,346,347]],["calvinklein.it",[345,346,347]],["calvinklein.ie",[345,346,347]],["calvinklein.hr",[345,346,347]],["calvinklein.fr",[345,346,347]],["calvinklein.es",[345,346,347]],["calvinklein.ee",[345,346,347]],["calvinklein.de",[345,346,347]],["calvinklein.dk",[345,346,347]],["calvinklein.cz",[345,346,347]],["calvinklein.bg",[345,346,347]],["calvinklein.be",[345,346,347]],["calvinklein.co.uk",[345,346,347]],["ofdb.de",348],["dtksoft.com",349],["howstuffworks.com",350],["chollometro.com",351],["dealabs.com",351],["hotukdeals.com",351],["pepper.it",351],["pepper.pl",351],["preisjaeger.at",351],["mydealz.de",351],["easyfind.ch",[352,353]],["pelikone.fi",354],["constantin.film",[355,356,357]],["notion.so",358],["digi24.ro",359]]);

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
