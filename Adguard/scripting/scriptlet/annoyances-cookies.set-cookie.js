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

const argsList = [["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["acceptCookies","true"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["CookieConsent","true"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["cookie-consent","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["cookies_consent","1"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["cookie-policy","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["notice_preferences","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"]];

const hostnamesMap = new Map([["fish.shimano.com",[0,1,2]],["clipchamp.com",3],["trouwenbijfletcher.nl",3],["fletcher.nl",3],["fletcherzakelijk.nl",3],["intermatic.com",3],["eurosender.com",4],["melectronics.ch",5],["guard.io",6],["dom.ru",7],["schrottpreis.org",8],["nokportalen.se",9],["valamis.com",[10,11,12]],["sverigesingenjorer.se",13],["shop.almawin.de",[14,15,16,17]],["vansprint.de",16],["0815.at",16],["0815.eu",16],["ojskate.com",16],["der-schweighofer.de",16],["tz-bedarf.de",16],["zeinpharma.de",16],["weicon.com",16],["dagvandewebshop.be",16],["thiele-tee.de",16],["carbox.de",16],["riapsport.de",16],["trendpet.de",16],["eheizung24.de",16],["seemueller.com",16],["vivande.de",16],["heidegrill.com",16],["gladiator-fightwear.com",16],["h-andreas.com",16],["pp-parts.com",16],["natuerlich-holzschuhe.de",16],["massivart.de",16],["malermeister-shop.de",16],["imping-confiserie.de",16],["lenox-trading.at",16],["cklenk.de",16],["catolet.de",16],["drinkitnow.de",16],["patisserie-m.de",16],["storm-proof.com",16],["balance-fahrradladen.de",16],["magicpos.shop",16],["zeinpharma.com",16],["sps-handel.net",16],["novagenics.com",16],["butterfly-circus.de",16],["holzhof24.de",16],["w6-wertarbeit.de",16],["fleurop.de",16],["leki.com",16],["textshuttle.com",18],["zeitzurtrauer.de",19],["funkypotato.com",[20,21,22]],["equalexchange.co.uk",[20,21,22]],["swnsdigital.com",[20,21,22]],["skaling.de",[23,24,25]],["bringmeister.de",26],["leibniz.com",27],["project529.com",28],["clearblue.com",29],["drewag.de",[30,31,32]],["buidlbox.io",30],["helitransair.com",33],["more.com",34],["nwslsoccer.com",34],["climatecentral.org",35],["resolution.de",36],["dentmania.de",37],["flagma.by",38],["eatsalad.com",39],["pacstall.dev",40],["web2.0calc.fr",41],["de-appletradein.likewize.com",42],["swissborg.com",43],["qwice.com",44],["canalpluskuchnia.pl",[45,46]],["uizard.io",47],["e-chladiva.cz",48],["assos.com",49],["monese.com",49],["stmas.bayern.de",[50,54]],["novayagazeta.eu",51],["followalice.com",[52,183]],["kinopoisk.ru",53],["yandex.ru",53],["go.netia.pl",[55,56]],["polsatboxgo.pl",[55,56]],["ing.it",[57,58]],["ing.nl",59],["handelsbanken.se",60],["secondsol.com",61],["youcom.com.br",62],["rule34.paheal.net",63],["pccomponentes.com",64],["pccomponentes.pt",64],["oead.at",65],["innovationsstiftung-bildung.at",65],["etwinning.at",65],["arqa-vet.at",65],["zentrumfuercitizenscience.at",65],["vorstudienlehrgang.at",65],["erasmusplus.at",65],["jeger.pl",66],["bo.de",67],["thegamingwatcher.com",68],["webtv.stofa.dk",69],["melkkobrew.fi",70],["asus.com.cn",[71,73]],["zentalk.asus.com",[71,73]],["mubi.com",72],["carsupermarket.com",74],["lawrievetgroup.co.uk",75],["59northwheels.se",76],["foto-gregor.de",77],["dhbbank.com",78],["dhbbank.de",78],["dhbbank.be",78],["dhbbank.nl",78],["login.ingbank.pl",79],["fabrykacukiernika.pl",[80,81]],["playlumi.com",[82,83,84]],["chatfuel.com",85],["studio3t.com",[86,87,88,89]],["realgap.co.uk",[90,91,92,93]],["hotelborgia.com",[94,95]],["sweet24.de",96],["zwembaddekouter.be",97],["flixclassic.pl",98],["jobtoday.com",99],["deltatre.com",[100,101,113]],["withings.com",[102,103,104]],["gift.be",[105,106]],["animaze.us",107],["bizkaia.eus",[108,109,110]],["sinparty.com",111],["jobs.ch",112],["jobup.ch",112],["depop.com",[114,115]],["mantel.com",116],["armedangels.com",[117,118,119]],["e-dojus.lv",120],["burnesspaull.com",121],["oncosur.org",122],["ryanair.com",123],["bayernportal.de",[124,125,126]],["pricehubble.com",127],["ilmotorsport.de",128],["aqua-store.fr",129],["app.arzt-direkt.de",130],["dasfutterhaus.at",131],["e-pity.pl",132],["fillup.pl",133],["dailymotion.com",134],["barcawelt.de",135],["lueneburger-heide.de",136],["polizei.bayern.de",[137,139]],["ourworldofpixels.com",138],["jku.at",140],["espacocasa.com",141],["altraeta.it",141],["centrooceano.it",141],["allstoresdigital.com",141],["cultarm3d.de",141],["soulbounce.com",141],["fluidtopics.com",141],["uvetgbt.com",141],["malcorentacar.com",141],["emondo.de",141],["maspero.it",141],["kelkay.com",141],["underground-england.com",141],["vert.eco",141],["turcolegal.com",141],["magnet4blogging.net",141],["moovly.com",141],["automationafrica.co.za",141],["jornaldoalgarve.pt",141],["keravanenergia.fi",141],["kuopas.fi",141],["frag-machiavelli.de",141],["healthera.co.uk",141],["mobeleader.com",141],["powerup-gaming.com",141],["developer-blog.net",141],["medical.edu.mt",141],["deh.mt",141],["bluebell-railway.com",141],["ribescasals.com",141],["javea.com",141],["chinaimportal.com",141],["inds.co.uk",141],["raoul-follereau.org",141],["serramenti-milano.it",141],["cosasdemujer.com",141],["luz-blanca.info",141],["cosasdeviajes.com",141],["safehaven.io",141],["havocpoint.it",141],["motofocus.pl",141],["nomanssky.com",141],["drei-franken-info.de",141],["clausnehring.com",141],["alttab.net",141],["kinderleicht.berlin",141],["kiakkoradio.fi",141],["cosasdelcaribe.es",141],["de-sjove-jokes.dk",141],["serverprofis.de",141],["biographyonline.net",141],["iziconfort.com",141],["sportinnederland.com",141],["natureatblog.com",141],["wtsenergy.com",141],["cosasdesalud.es",141],["internetpasoapaso.com",141],["zurzeit.at",141],["contaspoupanca.pt",141],["backmarket.de",[142,143,144]],["backmarket.co.uk",[142,143,144]],["backmarket.es",[142,143,144]],["backmarket.be",[142,143,144]],["backmarket.at",[142,143,144]],["backmarket.fr",[142,143,144]],["backmarket.gr",[142,143,144]],["backmarket.fi",[142,143,144]],["backmarket.ie",[142,143,144]],["backmarket.it",[142,143,144]],["backmarket.nl",[142,143,144]],["backmarket.pt",[142,143,144]],["backmarket.se",[142,143,144]],["backmarket.sk",[142,143,144]],["backmarket.com",[142,143,144]],["eleven-sportswear.cz",[145,146,147]],["silvini.com",[145,146,147]],["silvini.de",[145,146,147]],["purefiji.cz",[145,146,147]],["voda-zdarma.cz",[145,146,147]],["lesgarconsfaciles.com",[145,146,147]],["ulevapronohy.cz",[145,146,147]],["vitalvibe.eu",[145,146,147]],["plavte.cz",[145,146,147]],["mo-tools.cz",[145,146,147]],["flamantonlineshop.cz",[145,146,147]],["sandratex.cz",[145,146,147]],["norwayshop.cz",[145,146,147]],["3d-foto.cz",[145,146,147]],["neviditelnepradlo.cz",[145,146,147]],["nutrimedium.com",[145,146,147]],["silvini.cz",[145,146,147]],["karel.cz",[145,146,147]],["silvini.sk",[145,146,147]],["book-n-drive.de",148],["cotswoldoutdoor.com",149],["cotswoldoutdoor.ie",149],["cam.start.canon",150],["usnews.com",151],["researchaffiliates.com",152],["singkinderlieder.de",153],["store.ubisoft.com",[154,155,156,157]],["britishairways.com",[158,159,160]],["cineman.pl",[161,162,163]],["tv-trwam.pl",[161,162,163,164]],["qatarairways.com",[165,166,167,168,169]],["wedding.pl",170],["vivaldi.com",171],["emuia1.gugik.gov.pl",172],["nike.com",173],["adidas.at",174],["adidas.be",174],["adidas.ca",174],["adidas.ch",174],["adidas.cl",174],["adidas.co",174],["adidas.co.in",174],["adidas.co.kr",174],["adidas.co.nz",174],["adidas.co.th",174],["adidas.co.uk",174],["adidas.com",174],["adidas.com.ar",174],["adidas.com.au",174],["adidas.com.br",174],["adidas.com.my",174],["adidas.com.ph",174],["adidas.com.vn",174],["adidas.cz",174],["adidas.de",174],["adidas.dk",174],["adidas.es",174],["adidas.fi",174],["adidas.fr",174],["adidas.gr",174],["adidas.ie",174],["adidas.it",174],["adidas.mx",174],["adidas.nl",174],["adidas.no",174],["adidas.pe",174],["adidas.pl",174],["adidas.pt",174],["adidas.ru",174],["adidas.se",174],["adidas.sk",174],["colourbox.com",175],["ebilet.pl",176],["snap.com",177],["ratemyprofessors.com",178],["filen.io",179],["restaurantclub.pl",180],["context.news",180],["stilord.com",181],["stilord.pl",181],["stilord.de",181],["stilord.fr",181],["quantamagazine.org",182],["scaleway.com",184],["hellotv.nl",185],["lasestrellas.tv",186],["shop-naturstrom.de",187],["biona-shop.de",187],["camokoenig.de",187],["bikepro.de",187],["kaffeediscount.com",187],["vamos-skateshop.com",187],["holland-shop.com",187],["avonika.com",187],["officesuite.com",188],["fups.com",[189,190]],["scienceopen.com",191],["calendly.com",192],["ubereats.com",193],["101internet.ru",194],["tunnelmb.net",195],["hitado.de",196],["bitso.com",197],["eco-toimistotarvikkeet.fi",198],["proficient.fi",198],["developer.ing.com",199],["ehealth.gov.gr",200],["larian.com",200],["calvinklein.se",[201,202,203]],["calvinklein.fi",[201,202,203]],["calvinklein.sk",[201,202,203]],["calvinklein.si",[201,202,203]],["calvinklein.ch",[201,202,203]],["calvinklein.ru",[201,202,203]],["calvinklein.com",[201,202,203]],["calvinklein.pt",[201,202,203]],["calvinklein.pl",[201,202,203]],["calvinklein.at",[201,202,203]],["calvinklein.nl",[201,202,203]],["calvinklein.hu",[201,202,203]],["calvinklein.lu",[201,202,203]],["calvinklein.lt",[201,202,203]],["calvinklein.lv",[201,202,203]],["calvinklein.it",[201,202,203]],["calvinklein.ie",[201,202,203]],["calvinklein.hr",[201,202,203]],["calvinklein.fr",[201,202,203]],["calvinklein.es",[201,202,203]],["calvinklein.ee",[201,202,203]],["calvinklein.de",[201,202,203]],["calvinklein.dk",[201,202,203]],["calvinklein.cz",[201,202,203]],["calvinklein.bg",[201,202,203]],["calvinklein.be",[201,202,203]],["calvinklein.co.uk",[201,202,203]],["formula1.com",204],["howstuffworks.com",205],["chollometro.com",206],["dealabs.com",206],["hotukdeals.com",206],["pepper.it",206],["pepper.pl",206],["preisjaeger.at",206],["mydealz.de",206],["constantin.film",[207,208,209]]]);

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
