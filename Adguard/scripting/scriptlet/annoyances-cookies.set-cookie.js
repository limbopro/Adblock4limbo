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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookies_consent","1"],["cookiePolicy","4"],["cookie_accept","true"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["cookie-consent","true"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["cookie-policy","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["user_cookie_consent","1"],["notice_preferences","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["horecaworld.biz",3],["horecaworld.be",3],["secondsol.com",3],["medtube.pl",4],["medtube.es",4],["medtube.fr",4],["medtube.net",4],["linmot.com",5],["termania.net",6],["swisscard.ch",7],["account.nowpayments.io",8],["gigasport.at",9],["gigasport.de",9],["gigasport.ch",9],["fish.shimano.com",[10,11,12]],["myriad.social",13],["followalice.com",[13,223]],["velleahome.gr",14],["nicequest.com",15],["handelsbanken.no",16],["handelsbanken.com",16],["handelsbanken.co.uk",16],["handelsbanken.se",[16,101]],["handelsbanken.dk",16],["handelsbanken.fi",16],["songtradr.com",17],["logo.pt",[18,19]],["latoken.com",20],["dentmania.de",20],["waitrose.com",[21,22]],["campusbrno.cz",[23,24,25]],["secrid.com",26],["etsy.com",27],["deps.dev",28],["buf.build",29],["starofservice.com",30],["ytcomment.kmcat.uk",31],["gmx.com",32],["gmx.fr",32],["karofilm.ru",33],["octopusenergy.es",34],["justanswer.es",35],["justanswer.de",35],["justanswer.com",35],["justanswer.co.uk",35],["citilink.ru",36],["huutokaupat.com",37],["kaggle.com",38],["emr.ch",[39,44]],["gem.cbc.ca",40],["pumatools.hu",41],["ici.tou.tv",42],["crunchyroll.com",43],["clipchamp.com",45],["trouwenbijfletcher.nl",45],["fletcher.nl",45],["fletcherzakelijk.nl",45],["intermatic.com",45],["ebikelohr.de",46],["eurosender.com",47],["melectronics.ch",48],["guard.io",49],["dom.ru",50],["schrottpreis.org",51],["nokportalen.se",52],["valamis.com",[53,54,55]],["sverigesingenjorer.se",56],["shop.almawin.de",[57,58,59,60]],["vansprint.de",59],["0815.at",59],["0815.eu",59],["ojskate.com",59],["der-schweighofer.de",59],["tz-bedarf.de",59],["zeinpharma.de",59],["weicon.com",59],["dagvandewebshop.be",59],["thiele-tee.de",59],["carbox.de",59],["riapsport.de",59],["trendpet.de",59],["eheizung24.de",59],["seemueller.com",59],["vivande.de",59],["heidegrill.com",59],["gladiator-fightwear.com",59],["h-andreas.com",59],["pp-parts.com",59],["natuerlich-holzschuhe.de",59],["massivart.de",59],["malermeister-shop.de",59],["imping-confiserie.de",59],["lenox-trading.at",59],["cklenk.de",59],["catolet.de",59],["drinkitnow.de",59],["patisserie-m.de",59],["storm-proof.com",59],["balance-fahrradladen.de",59],["magicpos.shop",59],["zeinpharma.com",59],["sps-handel.net",59],["novagenics.com",59],["butterfly-circus.de",59],["holzhof24.de",59],["w6-wertarbeit.de",59],["fleurop.de",59],["leki.com",59],["extremeaudio.de",59],["textshuttle.com",61],["zeitzurtrauer.de",62],["fabriziovanmarciano.com",[63,64,65]],["nationalrail.com",[63,64,65]],["eett.gr",[63,64,65]],["funkypotato.com",[63,64,65]],["equalexchange.co.uk",[63,64,65]],["swnsdigital.com",[63,64,65]],["skaling.de",[66,67,68]],["bringmeister.de",69],["leibniz.com",70],["project529.com",71],["clearblue.com",72],["drewag.de",[73,74,75]],["buidlbox.io",73],["helitransair.com",76],["more.com",77],["nwslsoccer.com",77],["climatecentral.org",78],["resolution.de",79],["flagma.by",80],["eatsalad.com",81],["pacstall.dev",82],["web2.0calc.fr",83],["de-appletradein.likewize.com",84],["swissborg.com",85],["qwice.com",86],["canalpluskuchnia.pl",[87,88]],["uizard.io",89],["e-chladiva.cz",90],["assos.com",91],["monese.com",91],["stmas.bayern.de",[92,95]],["novayagazeta.eu",93],["kinopoisk.ru",94],["yandex.ru",94],["go.netia.pl",[96,97]],["polsatboxgo.pl",[96,97]],["ing.it",[98,99]],["ing.nl",100],["youcom.com.br",102],["rule34.paheal.net",103],["pccomponentes.com",104],["pccomponentes.pt",104],["oead.at",105],["innovationsstiftung-bildung.at",105],["etwinning.at",105],["arqa-vet.at",105],["zentrumfuercitizenscience.at",105],["vorstudienlehrgang.at",105],["erasmusplus.at",105],["jeger.pl",106],["bo.de",107],["thegamingwatcher.com",108],["webtv.stofa.dk",109],["melkkobrew.fi",110],["asus.com.cn",[111,113]],["zentalk.asus.com",[111,113]],["mubi.com",112],["carsupermarket.com",114],["lawrievetgroup.co.uk",115],["59northwheels.se",116],["foto-gregor.de",117],["dhbbank.com",118],["dhbbank.de",118],["dhbbank.be",118],["dhbbank.nl",118],["login.ingbank.pl",119],["fabrykacukiernika.pl",[120,121]],["playlumi.com",[122,123,124]],["chatfuel.com",125],["studio3t.com",[126,127,128,129]],["realgap.co.uk",[130,131,132,133]],["hotelborgia.com",[134,135]],["sweet24.de",136],["zwembaddekouter.be",137],["flixclassic.pl",138],["jobtoday.com",139],["deltatre.com",[140,141,153]],["withings.com",[142,143,144]],["gift.be",[145,146]],["animaze.us",147],["bizkaia.eus",[148,149,150]],["sinparty.com",151],["jobs.ch",152],["jobup.ch",152],["depop.com",[154,155]],["mantel.com",156],["armedangels.com",[157,158,159]],["e-dojus.lv",160],["burnesspaull.com",161],["oncosur.org",162],["ryanair.com",163],["bayernportal.de",[164,165,166]],["pricehubble.com",167],["ilmotorsport.de",168],["aqua-store.fr",169],["app.arzt-direkt.de",170],["dasfutterhaus.at",171],["e-pity.pl",172],["fillup.pl",173],["dailymotion.com",174],["barcawelt.de",175],["lueneburger-heide.de",176],["polizei.bayern.de",[177,179]],["ourworldofpixels.com",178],["jku.at",180],["espacocasa.com",181],["altraeta.it",181],["centrooceano.it",181],["allstoresdigital.com",181],["cultarm3d.de",181],["soulbounce.com",181],["fluidtopics.com",181],["uvetgbt.com",181],["malcorentacar.com",181],["emondo.de",181],["maspero.it",181],["kelkay.com",181],["underground-england.com",181],["vert.eco",181],["turcolegal.com",181],["magnet4blogging.net",181],["moovly.com",181],["automationafrica.co.za",181],["jornaldoalgarve.pt",181],["keravanenergia.fi",181],["kuopas.fi",181],["frag-machiavelli.de",181],["healthera.co.uk",181],["mobeleader.com",181],["powerup-gaming.com",181],["developer-blog.net",181],["medical.edu.mt",181],["deh.mt",181],["bluebell-railway.com",181],["ribescasals.com",181],["javea.com",181],["chinaimportal.com",181],["inds.co.uk",181],["raoul-follereau.org",181],["serramenti-milano.it",181],["cosasdemujer.com",181],["luz-blanca.info",181],["cosasdeviajes.com",181],["safehaven.io",181],["havocpoint.it",181],["motofocus.pl",181],["nomanssky.com",181],["drei-franken-info.de",181],["clausnehring.com",181],["alttab.net",181],["kinderleicht.berlin",181],["kiakkoradio.fi",181],["cosasdelcaribe.es",181],["de-sjove-jokes.dk",181],["serverprofis.de",181],["biographyonline.net",181],["iziconfort.com",181],["sportinnederland.com",181],["natureatblog.com",181],["wtsenergy.com",181],["cosasdesalud.es",181],["internetpasoapaso.com",181],["zurzeit.at",181],["contaspoupanca.pt",181],["backmarket.de",[182,183,184]],["backmarket.co.uk",[182,183,184]],["backmarket.es",[182,183,184]],["backmarket.be",[182,183,184]],["backmarket.at",[182,183,184]],["backmarket.fr",[182,183,184]],["backmarket.gr",[182,183,184]],["backmarket.fi",[182,183,184]],["backmarket.ie",[182,183,184]],["backmarket.it",[182,183,184]],["backmarket.nl",[182,183,184]],["backmarket.pt",[182,183,184]],["backmarket.se",[182,183,184]],["backmarket.sk",[182,183,184]],["backmarket.com",[182,183,184]],["eleven-sportswear.cz",[185,186,187]],["silvini.com",[185,186,187]],["silvini.de",[185,186,187]],["purefiji.cz",[185,186,187]],["voda-zdarma.cz",[185,186,187]],["lesgarconsfaciles.com",[185,186,187]],["ulevapronohy.cz",[185,186,187]],["vitalvibe.eu",[185,186,187]],["plavte.cz",[185,186,187]],["mo-tools.cz",[185,186,187]],["flamantonlineshop.cz",[185,186,187]],["sandratex.cz",[185,186,187]],["norwayshop.cz",[185,186,187]],["3d-foto.cz",[185,186,187]],["neviditelnepradlo.cz",[185,186,187]],["nutrimedium.com",[185,186,187]],["silvini.cz",[185,186,187]],["karel.cz",[185,186,187]],["silvini.sk",[185,186,187]],["book-n-drive.de",188],["cotswoldoutdoor.com",189],["cotswoldoutdoor.ie",189],["cam.start.canon",190],["usnews.com",191],["researchaffiliates.com",192],["singkinderlieder.de",193],["store.ubisoft.com",[194,195,196,197]],["britishairways.com",[198,199,200]],["cineman.pl",[201,202,203]],["tv-trwam.pl",[201,202,203,204]],["qatarairways.com",[205,206,207,208,209]],["wedding.pl",210],["vivaldi.com",211],["emuia1.gugik.gov.pl",212],["nike.com",213],["adidas.at",214],["adidas.be",214],["adidas.ca",214],["adidas.ch",214],["adidas.cl",214],["adidas.co",214],["adidas.co.in",214],["adidas.co.kr",214],["adidas.co.nz",214],["adidas.co.th",214],["adidas.co.uk",214],["adidas.com",214],["adidas.com.ar",214],["adidas.com.au",214],["adidas.com.br",214],["adidas.com.my",214],["adidas.com.ph",214],["adidas.com.vn",214],["adidas.cz",214],["adidas.de",214],["adidas.dk",214],["adidas.es",214],["adidas.fi",214],["adidas.fr",214],["adidas.gr",214],["adidas.ie",214],["adidas.it",214],["adidas.mx",214],["adidas.nl",214],["adidas.no",214],["adidas.pe",214],["adidas.pl",214],["adidas.pt",214],["adidas.ru",214],["adidas.se",214],["adidas.sk",214],["colourbox.com",215],["ebilet.pl",216],["snap.com",217],["ratemyprofessors.com",218],["filen.io",219],["restaurantclub.pl",220],["context.news",220],["stilord.com",221],["stilord.pl",221],["stilord.de",221],["stilord.fr",221],["quantamagazine.org",222],["scaleway.com",224],["hellotv.nl",225],["lasestrellas.tv",226],["hexen-werkstatt.shop",227],["shop-naturstrom.de",227],["biona-shop.de",227],["camokoenig.de",227],["bikepro.de",227],["kaffeediscount.com",227],["vamos-skateshop.com",227],["holland-shop.com",227],["avonika.com",227],["officesuite.com",228],["fups.com",[229,230]],["scienceopen.com",231],["calendly.com",232],["ubereats.com",233],["101internet.ru",234],["tunnelmb.net",235],["hitado.de",236],["bitso.com",237],["eco-toimistotarvikkeet.fi",238],["proficient.fi",238],["developer.ing.com",239],["ehealth.gov.gr",240],["larian.com",240],["calvinklein.se",[241,242,243]],["calvinklein.fi",[241,242,243]],["calvinklein.sk",[241,242,243]],["calvinklein.si",[241,242,243]],["calvinklein.ch",[241,242,243]],["calvinklein.ru",[241,242,243]],["calvinklein.com",[241,242,243]],["calvinklein.pt",[241,242,243]],["calvinklein.pl",[241,242,243]],["calvinklein.at",[241,242,243]],["calvinklein.nl",[241,242,243]],["calvinklein.hu",[241,242,243]],["calvinklein.lu",[241,242,243]],["calvinklein.lt",[241,242,243]],["calvinklein.lv",[241,242,243]],["calvinklein.it",[241,242,243]],["calvinklein.ie",[241,242,243]],["calvinklein.hr",[241,242,243]],["calvinklein.fr",[241,242,243]],["calvinklein.es",[241,242,243]],["calvinklein.ee",[241,242,243]],["calvinklein.de",[241,242,243]],["calvinklein.dk",[241,242,243]],["calvinklein.cz",[241,242,243]],["calvinklein.bg",[241,242,243]],["calvinklein.be",[241,242,243]],["calvinklein.co.uk",[241,242,243]],["dtksoft.com",244],["formula1.com",245],["howstuffworks.com",246],["chollometro.com",247],["dealabs.com",247],["hotukdeals.com",247],["pepper.it",247],["pepper.pl",247],["preisjaeger.at",247],["mydealz.de",247],["easyfind.ch",[248,249]],["constantin.film",[250,251,252]]]);

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
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
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
    const cookieExists = (name, value) => {
        return document.cookie.split(/\s*;\s*/).some(s => {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { return false; }
            if ( s.slice(0, pos) !== name ) { return false; }
            if ( s.slice(pos+1) !== value ) { return false; }
            return true;
        });
    };

    if ( options.reload && cookieExists(name, value) ) { return; }

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

    if ( options.reload && cookieExists(name, value) ) {
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
