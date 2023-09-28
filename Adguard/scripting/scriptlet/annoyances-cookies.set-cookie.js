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

const argsList = [["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["shb-consent-cookies","false"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["cookie-consent","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["cookies_consent","1"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["cookie-policy","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["user_cookie_consent","1"],["notice_preferences","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"]];

const hostnamesMap = new Map([["fish.shimano.com",[0,1,2]],["handelsbanken.no",3],["handelsbanken.com",3],["handelsbanken.co.uk",3],["handelsbanken.se",[3,85]],["handelsbanken.dk",3],["handelsbanken.fi",3],["logo.pt",[4,5]],["latoken.com",6],["dentmania.de",6],["waitrose.com",[7,8]],["secrid.com",9],["etsy.com",10],["deps.dev",11],["buf.build",12],["starofservice.com",13],["ytcomment.kmcat.uk",14],["gmx.com",15],["gmx.fr",15],["karofilm.ru",16],["octopusenergy.es",17],["justanswer.es",18],["justanswer.de",18],["justanswer.com",18],["justanswer.co.uk",18],["citilink.ru",19],["huutokaupat.com",20],["kaggle.com",21],["emr.ch",[22,27]],["gem.cbc.ca",23],["pumatools.hu",24],["ici.tou.tv",25],["crunchyroll.com",26],["clipchamp.com",28],["trouwenbijfletcher.nl",28],["fletcher.nl",28],["fletcherzakelijk.nl",28],["intermatic.com",28],["ebikelohr.de",29],["eurosender.com",30],["melectronics.ch",31],["guard.io",32],["dom.ru",33],["schrottpreis.org",34],["nokportalen.se",35],["valamis.com",[36,37,38]],["sverigesingenjorer.se",39],["shop.almawin.de",[40,41,42,43]],["vansprint.de",42],["0815.at",42],["0815.eu",42],["ojskate.com",42],["der-schweighofer.de",42],["tz-bedarf.de",42],["zeinpharma.de",42],["weicon.com",42],["dagvandewebshop.be",42],["thiele-tee.de",42],["carbox.de",42],["riapsport.de",42],["trendpet.de",42],["eheizung24.de",42],["seemueller.com",42],["vivande.de",42],["heidegrill.com",42],["gladiator-fightwear.com",42],["h-andreas.com",42],["pp-parts.com",42],["natuerlich-holzschuhe.de",42],["massivart.de",42],["malermeister-shop.de",42],["imping-confiserie.de",42],["lenox-trading.at",42],["cklenk.de",42],["catolet.de",42],["drinkitnow.de",42],["patisserie-m.de",42],["storm-proof.com",42],["balance-fahrradladen.de",42],["magicpos.shop",42],["zeinpharma.com",42],["sps-handel.net",42],["novagenics.com",42],["butterfly-circus.de",42],["holzhof24.de",42],["w6-wertarbeit.de",42],["fleurop.de",42],["leki.com",42],["extremeaudio.de",42],["textshuttle.com",44],["zeitzurtrauer.de",45],["fabriziovanmarciano.com",[46,47,48]],["nationalrail.com",[46,47,48]],["eett.gr",[46,47,48]],["funkypotato.com",[46,47,48]],["equalexchange.co.uk",[46,47,48]],["swnsdigital.com",[46,47,48]],["skaling.de",[49,50,51]],["bringmeister.de",52],["leibniz.com",53],["project529.com",54],["clearblue.com",55],["drewag.de",[56,57,58]],["buidlbox.io",56],["helitransair.com",59],["more.com",60],["nwslsoccer.com",60],["climatecentral.org",61],["resolution.de",62],["flagma.by",63],["eatsalad.com",64],["pacstall.dev",65],["web2.0calc.fr",66],["de-appletradein.likewize.com",67],["swissborg.com",68],["qwice.com",69],["canalpluskuchnia.pl",[70,71]],["uizard.io",72],["e-chladiva.cz",73],["assos.com",74],["monese.com",74],["stmas.bayern.de",[75,79]],["novayagazeta.eu",76],["followalice.com",[77,208]],["kinopoisk.ru",78],["yandex.ru",78],["go.netia.pl",[80,81]],["polsatboxgo.pl",[80,81]],["ing.it",[82,83]],["ing.nl",84],["secondsol.com",86],["youcom.com.br",87],["rule34.paheal.net",88],["pccomponentes.com",89],["pccomponentes.pt",89],["oead.at",90],["innovationsstiftung-bildung.at",90],["etwinning.at",90],["arqa-vet.at",90],["zentrumfuercitizenscience.at",90],["vorstudienlehrgang.at",90],["erasmusplus.at",90],["jeger.pl",91],["bo.de",92],["thegamingwatcher.com",93],["webtv.stofa.dk",94],["melkkobrew.fi",95],["asus.com.cn",[96,98]],["zentalk.asus.com",[96,98]],["mubi.com",97],["carsupermarket.com",99],["lawrievetgroup.co.uk",100],["59northwheels.se",101],["foto-gregor.de",102],["dhbbank.com",103],["dhbbank.de",103],["dhbbank.be",103],["dhbbank.nl",103],["login.ingbank.pl",104],["fabrykacukiernika.pl",[105,106]],["playlumi.com",[107,108,109]],["chatfuel.com",110],["studio3t.com",[111,112,113,114]],["realgap.co.uk",[115,116,117,118]],["hotelborgia.com",[119,120]],["sweet24.de",121],["zwembaddekouter.be",122],["flixclassic.pl",123],["jobtoday.com",124],["deltatre.com",[125,126,138]],["withings.com",[127,128,129]],["gift.be",[130,131]],["animaze.us",132],["bizkaia.eus",[133,134,135]],["sinparty.com",136],["jobs.ch",137],["jobup.ch",137],["depop.com",[139,140]],["mantel.com",141],["armedangels.com",[142,143,144]],["e-dojus.lv",145],["burnesspaull.com",146],["oncosur.org",147],["ryanair.com",148],["bayernportal.de",[149,150,151]],["pricehubble.com",152],["ilmotorsport.de",153],["aqua-store.fr",154],["app.arzt-direkt.de",155],["dasfutterhaus.at",156],["e-pity.pl",157],["fillup.pl",158],["dailymotion.com",159],["barcawelt.de",160],["lueneburger-heide.de",161],["polizei.bayern.de",[162,164]],["ourworldofpixels.com",163],["jku.at",165],["espacocasa.com",166],["altraeta.it",166],["centrooceano.it",166],["allstoresdigital.com",166],["cultarm3d.de",166],["soulbounce.com",166],["fluidtopics.com",166],["uvetgbt.com",166],["malcorentacar.com",166],["emondo.de",166],["maspero.it",166],["kelkay.com",166],["underground-england.com",166],["vert.eco",166],["turcolegal.com",166],["magnet4blogging.net",166],["moovly.com",166],["automationafrica.co.za",166],["jornaldoalgarve.pt",166],["keravanenergia.fi",166],["kuopas.fi",166],["frag-machiavelli.de",166],["healthera.co.uk",166],["mobeleader.com",166],["powerup-gaming.com",166],["developer-blog.net",166],["medical.edu.mt",166],["deh.mt",166],["bluebell-railway.com",166],["ribescasals.com",166],["javea.com",166],["chinaimportal.com",166],["inds.co.uk",166],["raoul-follereau.org",166],["serramenti-milano.it",166],["cosasdemujer.com",166],["luz-blanca.info",166],["cosasdeviajes.com",166],["safehaven.io",166],["havocpoint.it",166],["motofocus.pl",166],["nomanssky.com",166],["drei-franken-info.de",166],["clausnehring.com",166],["alttab.net",166],["kinderleicht.berlin",166],["kiakkoradio.fi",166],["cosasdelcaribe.es",166],["de-sjove-jokes.dk",166],["serverprofis.de",166],["biographyonline.net",166],["iziconfort.com",166],["sportinnederland.com",166],["natureatblog.com",166],["wtsenergy.com",166],["cosasdesalud.es",166],["internetpasoapaso.com",166],["zurzeit.at",166],["contaspoupanca.pt",166],["backmarket.de",[167,168,169]],["backmarket.co.uk",[167,168,169]],["backmarket.es",[167,168,169]],["backmarket.be",[167,168,169]],["backmarket.at",[167,168,169]],["backmarket.fr",[167,168,169]],["backmarket.gr",[167,168,169]],["backmarket.fi",[167,168,169]],["backmarket.ie",[167,168,169]],["backmarket.it",[167,168,169]],["backmarket.nl",[167,168,169]],["backmarket.pt",[167,168,169]],["backmarket.se",[167,168,169]],["backmarket.sk",[167,168,169]],["backmarket.com",[167,168,169]],["eleven-sportswear.cz",[170,171,172]],["silvini.com",[170,171,172]],["silvini.de",[170,171,172]],["purefiji.cz",[170,171,172]],["voda-zdarma.cz",[170,171,172]],["lesgarconsfaciles.com",[170,171,172]],["ulevapronohy.cz",[170,171,172]],["vitalvibe.eu",[170,171,172]],["plavte.cz",[170,171,172]],["mo-tools.cz",[170,171,172]],["flamantonlineshop.cz",[170,171,172]],["sandratex.cz",[170,171,172]],["norwayshop.cz",[170,171,172]],["3d-foto.cz",[170,171,172]],["neviditelnepradlo.cz",[170,171,172]],["nutrimedium.com",[170,171,172]],["silvini.cz",[170,171,172]],["karel.cz",[170,171,172]],["silvini.sk",[170,171,172]],["book-n-drive.de",173],["cotswoldoutdoor.com",174],["cotswoldoutdoor.ie",174],["cam.start.canon",175],["usnews.com",176],["researchaffiliates.com",177],["singkinderlieder.de",178],["store.ubisoft.com",[179,180,181,182]],["britishairways.com",[183,184,185]],["cineman.pl",[186,187,188]],["tv-trwam.pl",[186,187,188,189]],["qatarairways.com",[190,191,192,193,194]],["wedding.pl",195],["vivaldi.com",196],["emuia1.gugik.gov.pl",197],["nike.com",198],["adidas.at",199],["adidas.be",199],["adidas.ca",199],["adidas.ch",199],["adidas.cl",199],["adidas.co",199],["adidas.co.in",199],["adidas.co.kr",199],["adidas.co.nz",199],["adidas.co.th",199],["adidas.co.uk",199],["adidas.com",199],["adidas.com.ar",199],["adidas.com.au",199],["adidas.com.br",199],["adidas.com.my",199],["adidas.com.ph",199],["adidas.com.vn",199],["adidas.cz",199],["adidas.de",199],["adidas.dk",199],["adidas.es",199],["adidas.fi",199],["adidas.fr",199],["adidas.gr",199],["adidas.ie",199],["adidas.it",199],["adidas.mx",199],["adidas.nl",199],["adidas.no",199],["adidas.pe",199],["adidas.pl",199],["adidas.pt",199],["adidas.ru",199],["adidas.se",199],["adidas.sk",199],["colourbox.com",200],["ebilet.pl",201],["snap.com",202],["ratemyprofessors.com",203],["filen.io",204],["restaurantclub.pl",205],["context.news",205],["stilord.com",206],["stilord.pl",206],["stilord.de",206],["stilord.fr",206],["quantamagazine.org",207],["scaleway.com",209],["hellotv.nl",210],["lasestrellas.tv",211],["shop-naturstrom.de",212],["biona-shop.de",212],["camokoenig.de",212],["bikepro.de",212],["kaffeediscount.com",212],["vamos-skateshop.com",212],["holland-shop.com",212],["avonika.com",212],["officesuite.com",213],["fups.com",[214,215]],["scienceopen.com",216],["calendly.com",217],["ubereats.com",218],["101internet.ru",219],["tunnelmb.net",220],["hitado.de",221],["bitso.com",222],["eco-toimistotarvikkeet.fi",223],["proficient.fi",223],["developer.ing.com",224],["ehealth.gov.gr",225],["larian.com",225],["calvinklein.se",[226,227,228]],["calvinklein.fi",[226,227,228]],["calvinklein.sk",[226,227,228]],["calvinklein.si",[226,227,228]],["calvinklein.ch",[226,227,228]],["calvinklein.ru",[226,227,228]],["calvinklein.com",[226,227,228]],["calvinklein.pt",[226,227,228]],["calvinklein.pl",[226,227,228]],["calvinklein.at",[226,227,228]],["calvinklein.nl",[226,227,228]],["calvinklein.hu",[226,227,228]],["calvinklein.lu",[226,227,228]],["calvinklein.lt",[226,227,228]],["calvinklein.lv",[226,227,228]],["calvinklein.it",[226,227,228]],["calvinklein.ie",[226,227,228]],["calvinklein.hr",[226,227,228]],["calvinklein.fr",[226,227,228]],["calvinklein.es",[226,227,228]],["calvinklein.ee",[226,227,228]],["calvinklein.de",[226,227,228]],["calvinklein.dk",[226,227,228]],["calvinklein.cz",[226,227,228]],["calvinklein.bg",[226,227,228]],["calvinklein.be",[226,227,228]],["calvinklein.co.uk",[226,227,228]],["dtksoft.com",229],["formula1.com",230],["howstuffworks.com",231],["chollometro.com",232],["dealabs.com",232],["hotukdeals.com",232],["pepper.it",232],["pepper.pl",232],["preisjaeger.at",232],["mydealz.de",232],["easyfind.ch",[233,234]],["constantin.film",[235,236,237]]]);

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
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
