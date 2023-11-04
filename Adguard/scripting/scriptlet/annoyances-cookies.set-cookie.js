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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookieconsent_status","allow"],["PrivacyPolicyOptOut","yes"],["consentAnalytics","false"],["consentAdvertising","false"],["consentPersonalization","false"],["privacyExpiration","1"],["privacySettings","1"],["cookieconsent_status","deny"],["lr_cookies_tecnicas","accepted"],["cookies_surestao","accepted","","reload","1"],["hide-cookie-banner","1"],["fjallravenCookie","1"],["accept_cookie_policy","true"],["_marketing","0"],["_performance","0"],["RgpdBanner","1"],["seen_cookie_message","accepted"],["complianceCookie","on"],["cookieTermsDismissed","true"],["cookie-consent","1"],["ecologi_cookie_consent_20220224","false"],["appBannerPopUpRulesCookie","true"],["eurac_cookie_consent","true"],["akasaairCookie","accepted"],["rittalCC","1"],["cookie-agreed","2"],["ckies_facebook_pixel","deny"],["ckies_google_analytics","deny"],["ckies_youtube","allow"],["ckies_cloudflare","allow"],["ckies_paypal","allow"],["ckies_web_store_state","allow"],["hasPolicy","Y"],["modalPolicyCookieNotAccepted","notaccepted"],["MANA_CONSENT","true"],["_ul_cookie_consent","allow"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["trackingCookies","off"],["acceptanalytics","no"],["acceptadvertising","no"],["acceptfunctional","yes"],["consent18","0","","reload","1"],["hide-gdpr-bar","true"],["ATA.gdpr.popup","true"],["AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["privacyNoticeExpireDate","1"],["privacyNoticeAccepted","true"],["policy_accepted","1"],["stampen-cookies-hide-information","yes"],["dominos_cookies_accepted","1"],["deva_accepted","yes"],["privacy_settings","1"],["cookies_consent","1"],["cookies_modal","true"],["cookie_notice","1"],["cookie_policy_agreement","true"],["cookiesPopup","1"],["digibestCookieInfo","true"],["cookiesettings_status","allow"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["cookies-notice","1","","reload","1"],["banner","2","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["cookieBanner","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["tracking","0"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookie_consent","1"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["cookie-consent","true"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["use_cookie","1"],["cookie-policy","true"],["figshareCookiesAccepted","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["ofdb_werbung","Y","","reload","1"],["user_cookie_consent","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["spemPermission","1"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"],["notion_check_cookie_consent","true"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["resonate.coop",3],["usit.uio.no",4],["halonen.fi",[5,6,7,8,9]],["carlson.fi",[5,6,7,8,9]],["demo-digital-twin.r-stahl.com",10],["la31devalladolid.com",[11,12]],["mx.com",13],["foxtrail.fjallraven.com",14],["dotwatcher.cc",15],["bazarchic.com",[16,17,18]],["seedrs.com",19],["mypensiontracker.co.uk",20],["praxisplan.at",[20,42]],["endclothing.com",21],["esimplus.me",22],["ecologi.com",23],["wamba.com",24],["eurac.edu",25],["akasaair.com",26],["rittal.com",27],["wizards.com",28],["worstbassist.com",[29,30,31,32,33,34]],["zs-watch.com",35],["crown.com",36],["mesanalyses.fr",37],["teket.jp",38],["fish.shimano.com",[39,40,41]],["simsherpa.com",[43,44,45]],["translit.ru",46],["renault-autocenterprignitz-pritzwalk.de",47],["renault-spenrath-juelich.de",47],["aruba.com",48],["aireuropa.com",49],["skfbearingselect.com",[50,51]],["scanrenovation.com",52],["ttela.se",53],["dominospizza.pl",54],["devagroup.pl",55],["hintaopas.fi",56],["ledenicheur.fr",56],["prisjagt.dk",56],["prisjakt.no",56],["prisjakt.nu",56],["pricespy.co.uk",56],["pricespy.co.nz",56],["horecaworld.biz",57],["horecaworld.be",57],["secondsol.com",57],["angelifybeauty.com",58],["cotopaxi.com",59],["kaluga.hh.ru",60],["justjoin.it",61],["digibest.pt",62],["two-notes.com",63],["theverge.com",64],["daimant.co",65],["secularism.org.uk",66],["karriere-hamburg.de",67],["musicmap.info",68],["gasspisen.se",69],["medtube.pl",70],["medtube.es",70],["medtube.fr",70],["medtube.net",70],["standard.sk",71],["linmot.com",72],["containerandpackaging.com",73],["top-yp.de",74],["termania.net",75],["swisscard.ch",76],["account.nowpayments.io",77],["gigasport.at",78],["gigasport.de",78],["gigasport.ch",78],["velleahome.gr",79],["nicequest.com",80],["handelsbanken.no",81],["handelsbanken.com",81],["handelsbanken.co.uk",81],["handelsbanken.se",[81,167]],["handelsbanken.dk",81],["handelsbanken.fi",81],["songtradr.com",82],["logo.pt",[83,84]],["dentmania.de",85],["free.navalny.com",85],["latoken.com",85],["waitrose.com",[86,87]],["campusbrno.cz",[88,89,90]],["secrid.com",91],["etsy.com",92],["deps.dev",93],["buf.build",94],["starofservice.com",95],["ytcomment.kmcat.uk",96],["gmx.com",97],["gmx.fr",97],["karofilm.ru",98],["octopusenergy.es",99],["justanswer.es",100],["justanswer.de",100],["justanswer.com",100],["justanswer.co.uk",100],["citilink.ru",101],["huutokaupat.com",102],["kaggle.com",103],["emr.ch",[104,109]],["gem.cbc.ca",105],["pumatools.hu",106],["ici.tou.tv",107],["crunchyroll.com",108],["clipchamp.com",110],["trouwenbijfletcher.nl",110],["fletcher.nl",110],["fletcherzakelijk.nl",110],["intermatic.com",110],["ebikelohr.de",111],["eurosender.com",112],["melectronics.ch",113],["guard.io",114],["dom.ru",115],["schrottpreis.org",116],["nokportalen.se",117],["dokiliko.com",118],["valamis.com",[119,120,121]],["sverigesingenjorer.se",122],["shop.almawin.de",[123,124,125,126]],["esm-computer.de",125],["calmwaters.de",125],["mellerud.de",125],["akustik-projekt.at",125],["vansprint.de",125],["0815.at",125],["0815.eu",125],["ojskate.com",125],["der-schweighofer.de",125],["tz-bedarf.de",125],["zeinpharma.de",125],["weicon.com",125],["dagvandewebshop.be",125],["thiele-tee.de",125],["carbox.de",125],["riapsport.de",125],["trendpet.de",125],["eheizung24.de",125],["seemueller.com",125],["vivande.de",125],["heidegrill.com",125],["gladiator-fightwear.com",125],["h-andreas.com",125],["pp-parts.com",125],["natuerlich-holzschuhe.de",125],["massivart.de",125],["malermeister-shop.de",125],["imping-confiserie.de",125],["lenox-trading.at",125],["cklenk.de",125],["catolet.de",125],["drinkitnow.de",125],["patisserie-m.de",125],["storm-proof.com",125],["balance-fahrradladen.de",125],["magicpos.shop",125],["zeinpharma.com",125],["sps-handel.net",125],["novagenics.com",125],["butterfly-circus.de",125],["holzhof24.de",125],["w6-wertarbeit.de",125],["fleurop.de",125],["leki.com",125],["extremeaudio.de",125],["textshuttle.com",127],["zeitzurtrauer.de",128],["fabriziovanmarciano.com",[129,130,131]],["nationalrail.com",[129,130,131]],["eett.gr",[129,130,131]],["funkypotato.com",[129,130,131]],["equalexchange.co.uk",[129,130,131]],["swnsdigital.com",[129,130,131]],["skaling.de",[132,133,134]],["bringmeister.de",135],["leibniz.com",136],["project529.com",137],["clearblue.com",138],["drewag.de",[139,140,141]],["buidlbox.io",139],["helitransair.com",142],["more.com",143],["nwslsoccer.com",143],["climatecentral.org",144],["resolution.de",145],["flagma.by",146],["eatsalad.com",147],["pacstall.dev",148],["web2.0calc.fr",149],["de-appletradein.likewize.com",150],["swissborg.com",151],["qwice.com",152],["canalpluskuchnia.pl",[153,154]],["uizard.io",155],["e-chladiva.cz",156],["assos.com",157],["monese.com",157],["stmas.bayern.de",[158,161]],["novayagazeta.eu",159],["kinopoisk.ru",160],["yandex.ru",160],["go.netia.pl",[162,163]],["polsatboxgo.pl",[162,163]],["ing.it",[164,165]],["ing.nl",166],["youcom.com.br",168],["rule34.paheal.net",169],["pccomponentes.com",170],["pccomponentes.pt",170],["oead.at",171],["innovationsstiftung-bildung.at",171],["etwinning.at",171],["arqa-vet.at",171],["zentrumfuercitizenscience.at",171],["vorstudienlehrgang.at",171],["erasmusplus.at",171],["jeger.pl",172],["bo.de",173],["thegamingwatcher.com",174],["webtv.stofa.dk",175],["plusujemy.pl",176],["melkkobrew.fi",177],["asus.com.cn",[178,180]],["zentalk.asus.com",[178,180]],["mubi.com",179],["carsupermarket.com",181],["lawrievetgroup.co.uk",182],["59northwheels.se",183],["foto-gregor.de",184],["dhbbank.com",185],["dhbbank.de",185],["dhbbank.be",185],["dhbbank.nl",185],["login.ingbank.pl",186],["fabrykacukiernika.pl",[187,188]],["playlumi.com",[189,190,191]],["chatfuel.com",192],["studio3t.com",[193,194,195,196]],["realgap.co.uk",[197,198,199,200]],["hotelborgia.com",[201,202]],["sweet24.de",203],["zwembaddekouter.be",204],["flixclassic.pl",205],["jobtoday.com",206],["deltatre.com",[207,208,220]],["withings.com",[209,210,211]],["gift.be",[212,213]],["animaze.us",214],["bizkaia.eus",[215,216,217]],["sinparty.com",218],["jobs.ch",219],["jobup.ch",219],["depop.com",[221,222]],["mantel.com",223],["armedangels.com",[224,225,226]],["e-dojus.lv",227],["burnesspaull.com",228],["oncosur.org",229],["ryanair.com",230],["bayernportal.de",[231,232,233]],["zipjob.com",234],["pricehubble.com",235],["ilmotorsport.de",236],["myriad.social",237],["exeedme.com",237],["followalice.com",[237,292]],["aqua-store.fr",238],["app.arzt-direkt.de",239],["dasfutterhaus.at",240],["e-pity.pl",241],["fillup.pl",242],["dailymotion.com",243],["barcawelt.de",244],["lueneburger-heide.de",245],["polizei.bayern.de",[246,248]],["ourworldofpixels.com",247],["jku.at",249],["espacocasa.com",250],["altraeta.it",250],["centrooceano.it",250],["allstoresdigital.com",250],["cultarm3d.de",250],["soulbounce.com",250],["fluidtopics.com",250],["uvetgbt.com",250],["malcorentacar.com",250],["emondo.de",250],["maspero.it",250],["kelkay.com",250],["underground-england.com",250],["vert.eco",250],["turcolegal.com",250],["magnet4blogging.net",250],["moovly.com",250],["automationafrica.co.za",250],["jornaldoalgarve.pt",250],["keravanenergia.fi",250],["kuopas.fi",250],["frag-machiavelli.de",250],["healthera.co.uk",250],["mobeleader.com",250],["powerup-gaming.com",250],["developer-blog.net",250],["medical.edu.mt",250],["deh.mt",250],["bluebell-railway.com",250],["ribescasals.com",250],["javea.com",250],["chinaimportal.com",250],["inds.co.uk",250],["raoul-follereau.org",250],["serramenti-milano.it",250],["cosasdemujer.com",250],["luz-blanca.info",250],["cosasdeviajes.com",250],["safehaven.io",250],["havocpoint.it",250],["motofocus.pl",250],["nomanssky.com",250],["drei-franken-info.de",250],["clausnehring.com",250],["alttab.net",250],["kinderleicht.berlin",250],["kiakkoradio.fi",250],["cosasdelcaribe.es",250],["de-sjove-jokes.dk",250],["serverprofis.de",250],["biographyonline.net",250],["iziconfort.com",250],["sportinnederland.com",250],["natureatblog.com",250],["wtsenergy.com",250],["cosasdesalud.es",250],["internetpasoapaso.com",250],["zurzeit.at",250],["contaspoupanca.pt",250],["backmarket.de",[251,252,253]],["backmarket.co.uk",[251,252,253]],["backmarket.es",[251,252,253]],["backmarket.be",[251,252,253]],["backmarket.at",[251,252,253]],["backmarket.fr",[251,252,253]],["backmarket.gr",[251,252,253]],["backmarket.fi",[251,252,253]],["backmarket.ie",[251,252,253]],["backmarket.it",[251,252,253]],["backmarket.nl",[251,252,253]],["backmarket.pt",[251,252,253]],["backmarket.se",[251,252,253]],["backmarket.sk",[251,252,253]],["backmarket.com",[251,252,253]],["eleven-sportswear.cz",[254,255,256]],["silvini.com",[254,255,256]],["silvini.de",[254,255,256]],["purefiji.cz",[254,255,256]],["voda-zdarma.cz",[254,255,256]],["lesgarconsfaciles.com",[254,255,256]],["ulevapronohy.cz",[254,255,256]],["vitalvibe.eu",[254,255,256]],["plavte.cz",[254,255,256]],["mo-tools.cz",[254,255,256]],["flamantonlineshop.cz",[254,255,256]],["sandratex.cz",[254,255,256]],["norwayshop.cz",[254,255,256]],["3d-foto.cz",[254,255,256]],["neviditelnepradlo.cz",[254,255,256]],["nutrimedium.com",[254,255,256]],["silvini.cz",[254,255,256]],["karel.cz",[254,255,256]],["silvini.sk",[254,255,256]],["book-n-drive.de",257],["cotswoldoutdoor.com",258],["cotswoldoutdoor.ie",258],["cam.start.canon",259],["usnews.com",260],["researchaffiliates.com",261],["singkinderlieder.de",262],["store.ubisoft.com",[263,264,265,266]],["britishairways.com",[267,268,269]],["cineman.pl",[270,271,272]],["tv-trwam.pl",[270,271,272,273]],["qatarairways.com",[274,275,276,277,278]],["wedding.pl",279],["vivaldi.com",280],["emuia1.gugik.gov.pl",281],["nike.com",282],["adidas.at",283],["adidas.be",283],["adidas.ca",283],["adidas.ch",283],["adidas.cl",283],["adidas.co",283],["adidas.co.in",283],["adidas.co.kr",283],["adidas.co.nz",283],["adidas.co.th",283],["adidas.co.uk",283],["adidas.com",283],["adidas.com.ar",283],["adidas.com.au",283],["adidas.com.br",283],["adidas.com.my",283],["adidas.com.ph",283],["adidas.com.vn",283],["adidas.cz",283],["adidas.de",283],["adidas.dk",283],["adidas.es",283],["adidas.fi",283],["adidas.fr",283],["adidas.gr",283],["adidas.ie",283],["adidas.it",283],["adidas.mx",283],["adidas.nl",283],["adidas.no",283],["adidas.pe",283],["adidas.pl",283],["adidas.pt",283],["adidas.ru",283],["adidas.se",283],["adidas.sk",283],["colourbox.com",284],["ebilet.pl",285],["snap.com",286],["ratemyprofessors.com",287],["filen.io",288],["restaurantclub.pl",289],["context.news",289],["stilord.com",290],["stilord.pl",290],["stilord.de",290],["stilord.fr",290],["quantamagazine.org",291],["scaleway.com",293],["hellotv.nl",294],["lasestrellas.tv",295],["forcetools-kepmar.eu",296],["fantecshop.de",296],["hexen-werkstatt.shop",296],["shop-naturstrom.de",296],["biona-shop.de",296],["camokoenig.de",296],["bikepro.de",296],["kaffeediscount.com",296],["vamos-skateshop.com",296],["holland-shop.com",296],["avonika.com",296],["officesuite.com",297],["fups.com",[298,299]],["scienceopen.com",300],["calendly.com",301],["ubereats.com",302],["101internet.ru",303],["bein.com",304],["beinsports.com",304],["tunnelmb.net",305],["figshare.com",306],["hitado.de",307],["bitso.com",308],["eco-toimistotarvikkeet.fi",309],["proficient.fi",309],["developer.ing.com",310],["ehealth.gov.gr",311],["larian.com",311],["calvinklein.se",[312,313,314]],["calvinklein.fi",[312,313,314]],["calvinklein.sk",[312,313,314]],["calvinklein.si",[312,313,314]],["calvinklein.ch",[312,313,314]],["calvinklein.ru",[312,313,314]],["calvinklein.com",[312,313,314]],["calvinklein.pt",[312,313,314]],["calvinklein.pl",[312,313,314]],["calvinklein.at",[312,313,314]],["calvinklein.nl",[312,313,314]],["calvinklein.hu",[312,313,314]],["calvinklein.lu",[312,313,314]],["calvinklein.lt",[312,313,314]],["calvinklein.lv",[312,313,314]],["calvinklein.it",[312,313,314]],["calvinklein.ie",[312,313,314]],["calvinklein.hr",[312,313,314]],["calvinklein.fr",[312,313,314]],["calvinklein.es",[312,313,314]],["calvinklein.ee",[312,313,314]],["calvinklein.de",[312,313,314]],["calvinklein.dk",[312,313,314]],["calvinklein.cz",[312,313,314]],["calvinklein.bg",[312,313,314]],["calvinklein.be",[312,313,314]],["calvinklein.co.uk",[312,313,314]],["ofdb.de",315],["dtksoft.com",316],["howstuffworks.com",317],["chollometro.com",318],["dealabs.com",318],["hotukdeals.com",318],["pepper.it",318],["pepper.pl",318],["preisjaeger.at",318],["mydealz.de",318],["easyfind.ch",[319,320]],["pelikone.fi",321],["constantin.film",[322,323,324]],["notion.so",325]]);

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
        'true', 'false',
        'yes', 'y', 'no', 'n',
        'ok',
        'accept', 'reject',
        'allow', 'deny',
        'on', 'off',
    ];
    if ( validValues.includes(value.toLowerCase()) === false ) {
        if ( /^\d+$/.test(value) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 15 ) { return; }
    }
    value = encodeURIComponent(value);

    setCookieHelper(
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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
                return new RegExp(match[1], match[2] || flags);
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

function setCookieHelper(
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
    document.cookie = cookieParts.join('');

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
