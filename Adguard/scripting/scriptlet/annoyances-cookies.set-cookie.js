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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["cookie-consent","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["cookies_consent","1"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["cookie-policy","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["user_cookie_consent","1"],["notice_preferences","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["fish.shimano.com",[3,4,5]],["velleahome.gr",6],["nicequest.com",7],["handelsbanken.no",8],["handelsbanken.com",8],["handelsbanken.co.uk",8],["handelsbanken.se",[8,94]],["handelsbanken.dk",8],["handelsbanken.fi",8],["songtradr.com",9],["logo.pt",[10,11]],["latoken.com",12],["dentmania.de",12],["waitrose.com",[13,14]],["campusbrno.cz",[15,16,17]],["secrid.com",18],["etsy.com",19],["deps.dev",20],["buf.build",21],["starofservice.com",22],["ytcomment.kmcat.uk",23],["gmx.com",24],["gmx.fr",24],["karofilm.ru",25],["octopusenergy.es",26],["justanswer.es",27],["justanswer.de",27],["justanswer.com",27],["justanswer.co.uk",27],["citilink.ru",28],["huutokaupat.com",29],["kaggle.com",30],["emr.ch",[31,36]],["gem.cbc.ca",32],["pumatools.hu",33],["ici.tou.tv",34],["crunchyroll.com",35],["clipchamp.com",37],["trouwenbijfletcher.nl",37],["fletcher.nl",37],["fletcherzakelijk.nl",37],["intermatic.com",37],["ebikelohr.de",38],["eurosender.com",39],["melectronics.ch",40],["guard.io",41],["dom.ru",42],["schrottpreis.org",43],["nokportalen.se",44],["valamis.com",[45,46,47]],["sverigesingenjorer.se",48],["shop.almawin.de",[49,50,51,52]],["vansprint.de",51],["0815.at",51],["0815.eu",51],["ojskate.com",51],["der-schweighofer.de",51],["tz-bedarf.de",51],["zeinpharma.de",51],["weicon.com",51],["dagvandewebshop.be",51],["thiele-tee.de",51],["carbox.de",51],["riapsport.de",51],["trendpet.de",51],["eheizung24.de",51],["seemueller.com",51],["vivande.de",51],["heidegrill.com",51],["gladiator-fightwear.com",51],["h-andreas.com",51],["pp-parts.com",51],["natuerlich-holzschuhe.de",51],["massivart.de",51],["malermeister-shop.de",51],["imping-confiserie.de",51],["lenox-trading.at",51],["cklenk.de",51],["catolet.de",51],["drinkitnow.de",51],["patisserie-m.de",51],["storm-proof.com",51],["balance-fahrradladen.de",51],["magicpos.shop",51],["zeinpharma.com",51],["sps-handel.net",51],["novagenics.com",51],["butterfly-circus.de",51],["holzhof24.de",51],["w6-wertarbeit.de",51],["fleurop.de",51],["leki.com",51],["extremeaudio.de",51],["textshuttle.com",53],["zeitzurtrauer.de",54],["fabriziovanmarciano.com",[55,56,57]],["nationalrail.com",[55,56,57]],["eett.gr",[55,56,57]],["funkypotato.com",[55,56,57]],["equalexchange.co.uk",[55,56,57]],["swnsdigital.com",[55,56,57]],["skaling.de",[58,59,60]],["bringmeister.de",61],["leibniz.com",62],["project529.com",63],["clearblue.com",64],["drewag.de",[65,66,67]],["buidlbox.io",65],["helitransair.com",68],["more.com",69],["nwslsoccer.com",69],["climatecentral.org",70],["resolution.de",71],["flagma.by",72],["eatsalad.com",73],["pacstall.dev",74],["web2.0calc.fr",75],["de-appletradein.likewize.com",76],["swissborg.com",77],["qwice.com",78],["canalpluskuchnia.pl",[79,80]],["uizard.io",81],["e-chladiva.cz",82],["assos.com",83],["monese.com",83],["stmas.bayern.de",[84,88]],["novayagazeta.eu",85],["followalice.com",[86,217]],["kinopoisk.ru",87],["yandex.ru",87],["go.netia.pl",[89,90]],["polsatboxgo.pl",[89,90]],["ing.it",[91,92]],["ing.nl",93],["secondsol.com",95],["youcom.com.br",96],["rule34.paheal.net",97],["pccomponentes.com",98],["pccomponentes.pt",98],["oead.at",99],["innovationsstiftung-bildung.at",99],["etwinning.at",99],["arqa-vet.at",99],["zentrumfuercitizenscience.at",99],["vorstudienlehrgang.at",99],["erasmusplus.at",99],["jeger.pl",100],["bo.de",101],["thegamingwatcher.com",102],["webtv.stofa.dk",103],["melkkobrew.fi",104],["asus.com.cn",[105,107]],["zentalk.asus.com",[105,107]],["mubi.com",106],["carsupermarket.com",108],["lawrievetgroup.co.uk",109],["59northwheels.se",110],["foto-gregor.de",111],["dhbbank.com",112],["dhbbank.de",112],["dhbbank.be",112],["dhbbank.nl",112],["login.ingbank.pl",113],["fabrykacukiernika.pl",[114,115]],["playlumi.com",[116,117,118]],["chatfuel.com",119],["studio3t.com",[120,121,122,123]],["realgap.co.uk",[124,125,126,127]],["hotelborgia.com",[128,129]],["sweet24.de",130],["zwembaddekouter.be",131],["flixclassic.pl",132],["jobtoday.com",133],["deltatre.com",[134,135,147]],["withings.com",[136,137,138]],["gift.be",[139,140]],["animaze.us",141],["bizkaia.eus",[142,143,144]],["sinparty.com",145],["jobs.ch",146],["jobup.ch",146],["depop.com",[148,149]],["mantel.com",150],["armedangels.com",[151,152,153]],["e-dojus.lv",154],["burnesspaull.com",155],["oncosur.org",156],["ryanair.com",157],["bayernportal.de",[158,159,160]],["pricehubble.com",161],["ilmotorsport.de",162],["aqua-store.fr",163],["app.arzt-direkt.de",164],["dasfutterhaus.at",165],["e-pity.pl",166],["fillup.pl",167],["dailymotion.com",168],["barcawelt.de",169],["lueneburger-heide.de",170],["polizei.bayern.de",[171,173]],["ourworldofpixels.com",172],["jku.at",174],["espacocasa.com",175],["altraeta.it",175],["centrooceano.it",175],["allstoresdigital.com",175],["cultarm3d.de",175],["soulbounce.com",175],["fluidtopics.com",175],["uvetgbt.com",175],["malcorentacar.com",175],["emondo.de",175],["maspero.it",175],["kelkay.com",175],["underground-england.com",175],["vert.eco",175],["turcolegal.com",175],["magnet4blogging.net",175],["moovly.com",175],["automationafrica.co.za",175],["jornaldoalgarve.pt",175],["keravanenergia.fi",175],["kuopas.fi",175],["frag-machiavelli.de",175],["healthera.co.uk",175],["mobeleader.com",175],["powerup-gaming.com",175],["developer-blog.net",175],["medical.edu.mt",175],["deh.mt",175],["bluebell-railway.com",175],["ribescasals.com",175],["javea.com",175],["chinaimportal.com",175],["inds.co.uk",175],["raoul-follereau.org",175],["serramenti-milano.it",175],["cosasdemujer.com",175],["luz-blanca.info",175],["cosasdeviajes.com",175],["safehaven.io",175],["havocpoint.it",175],["motofocus.pl",175],["nomanssky.com",175],["drei-franken-info.de",175],["clausnehring.com",175],["alttab.net",175],["kinderleicht.berlin",175],["kiakkoradio.fi",175],["cosasdelcaribe.es",175],["de-sjove-jokes.dk",175],["serverprofis.de",175],["biographyonline.net",175],["iziconfort.com",175],["sportinnederland.com",175],["natureatblog.com",175],["wtsenergy.com",175],["cosasdesalud.es",175],["internetpasoapaso.com",175],["zurzeit.at",175],["contaspoupanca.pt",175],["backmarket.de",[176,177,178]],["backmarket.co.uk",[176,177,178]],["backmarket.es",[176,177,178]],["backmarket.be",[176,177,178]],["backmarket.at",[176,177,178]],["backmarket.fr",[176,177,178]],["backmarket.gr",[176,177,178]],["backmarket.fi",[176,177,178]],["backmarket.ie",[176,177,178]],["backmarket.it",[176,177,178]],["backmarket.nl",[176,177,178]],["backmarket.pt",[176,177,178]],["backmarket.se",[176,177,178]],["backmarket.sk",[176,177,178]],["backmarket.com",[176,177,178]],["eleven-sportswear.cz",[179,180,181]],["silvini.com",[179,180,181]],["silvini.de",[179,180,181]],["purefiji.cz",[179,180,181]],["voda-zdarma.cz",[179,180,181]],["lesgarconsfaciles.com",[179,180,181]],["ulevapronohy.cz",[179,180,181]],["vitalvibe.eu",[179,180,181]],["plavte.cz",[179,180,181]],["mo-tools.cz",[179,180,181]],["flamantonlineshop.cz",[179,180,181]],["sandratex.cz",[179,180,181]],["norwayshop.cz",[179,180,181]],["3d-foto.cz",[179,180,181]],["neviditelnepradlo.cz",[179,180,181]],["nutrimedium.com",[179,180,181]],["silvini.cz",[179,180,181]],["karel.cz",[179,180,181]],["silvini.sk",[179,180,181]],["book-n-drive.de",182],["cotswoldoutdoor.com",183],["cotswoldoutdoor.ie",183],["cam.start.canon",184],["usnews.com",185],["researchaffiliates.com",186],["singkinderlieder.de",187],["store.ubisoft.com",[188,189,190,191]],["britishairways.com",[192,193,194]],["cineman.pl",[195,196,197]],["tv-trwam.pl",[195,196,197,198]],["qatarairways.com",[199,200,201,202,203]],["wedding.pl",204],["vivaldi.com",205],["emuia1.gugik.gov.pl",206],["nike.com",207],["adidas.at",208],["adidas.be",208],["adidas.ca",208],["adidas.ch",208],["adidas.cl",208],["adidas.co",208],["adidas.co.in",208],["adidas.co.kr",208],["adidas.co.nz",208],["adidas.co.th",208],["adidas.co.uk",208],["adidas.com",208],["adidas.com.ar",208],["adidas.com.au",208],["adidas.com.br",208],["adidas.com.my",208],["adidas.com.ph",208],["adidas.com.vn",208],["adidas.cz",208],["adidas.de",208],["adidas.dk",208],["adidas.es",208],["adidas.fi",208],["adidas.fr",208],["adidas.gr",208],["adidas.ie",208],["adidas.it",208],["adidas.mx",208],["adidas.nl",208],["adidas.no",208],["adidas.pe",208],["adidas.pl",208],["adidas.pt",208],["adidas.ru",208],["adidas.se",208],["adidas.sk",208],["colourbox.com",209],["ebilet.pl",210],["snap.com",211],["ratemyprofessors.com",212],["filen.io",213],["restaurantclub.pl",214],["context.news",214],["stilord.com",215],["stilord.pl",215],["stilord.de",215],["stilord.fr",215],["quantamagazine.org",216],["scaleway.com",218],["hellotv.nl",219],["lasestrellas.tv",220],["hexen-werkstatt.shop",221],["shop-naturstrom.de",221],["biona-shop.de",221],["camokoenig.de",221],["bikepro.de",221],["kaffeediscount.com",221],["vamos-skateshop.com",221],["holland-shop.com",221],["avonika.com",221],["officesuite.com",222],["fups.com",[223,224]],["scienceopen.com",225],["calendly.com",226],["ubereats.com",227],["101internet.ru",228],["tunnelmb.net",229],["hitado.de",230],["bitso.com",231],["eco-toimistotarvikkeet.fi",232],["proficient.fi",232],["developer.ing.com",233],["ehealth.gov.gr",234],["larian.com",234],["calvinklein.se",[235,236,237]],["calvinklein.fi",[235,236,237]],["calvinklein.sk",[235,236,237]],["calvinklein.si",[235,236,237]],["calvinklein.ch",[235,236,237]],["calvinklein.ru",[235,236,237]],["calvinklein.com",[235,236,237]],["calvinklein.pt",[235,236,237]],["calvinklein.pl",[235,236,237]],["calvinklein.at",[235,236,237]],["calvinklein.nl",[235,236,237]],["calvinklein.hu",[235,236,237]],["calvinklein.lu",[235,236,237]],["calvinklein.lt",[235,236,237]],["calvinklein.lv",[235,236,237]],["calvinklein.it",[235,236,237]],["calvinklein.ie",[235,236,237]],["calvinklein.hr",[235,236,237]],["calvinklein.fr",[235,236,237]],["calvinklein.es",[235,236,237]],["calvinklein.ee",[235,236,237]],["calvinklein.de",[235,236,237]],["calvinklein.dk",[235,236,237]],["calvinklein.cz",[235,236,237]],["calvinklein.bg",[235,236,237]],["calvinklein.be",[235,236,237]],["calvinklein.co.uk",[235,236,237]],["dtksoft.com",238],["formula1.com",239],["howstuffworks.com",240],["chollometro.com",241],["dealabs.com",241],["hotukdeals.com",241],["pepper.it",241],["pepper.pl",241],["preisjaeger.at",241],["mydealz.de",241],["easyfind.ch",[242,243]],["constantin.film",[244,245,246]]]);

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
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
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
