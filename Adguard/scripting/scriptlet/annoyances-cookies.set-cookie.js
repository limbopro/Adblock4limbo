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

const argsList = [["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["cookieNotification","true"],["privacy","true"],["cookie_usage","yes"],["dismissCookieBanner","true"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["CookieConsent","true"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["cookie-consent","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["cookies_consent","1"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["cookie-policy","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["user_cookie_consent","1"],["notice_preferences","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"]];

const hostnamesMap = new Map([["fish.shimano.com",[0,1,2]],["starofservice.com",3],["ytcomment.kmcat.uk",4],["karofilm.ru",5],["octopusenergy.es",6],["justanswer.es",7],["justanswer.de",7],["justanswer.com",7],["justanswer.co.uk",7],["citilink.ru",8],["huutokaupat.com",9],["kaggle.com",10],["emr.ch",[11,16]],["gem.cbc.ca",12],["pumatools.hu",13],["ici.tou.tv",14],["crunchyroll.com",15],["clipchamp.com",17],["trouwenbijfletcher.nl",17],["fletcher.nl",17],["fletcherzakelijk.nl",17],["intermatic.com",17],["ebikelohr.de",18],["eurosender.com",19],["melectronics.ch",20],["guard.io",21],["dom.ru",22],["schrottpreis.org",23],["nokportalen.se",24],["valamis.com",[25,26,27]],["sverigesingenjorer.se",28],["shop.almawin.de",[29,30,31,32]],["vansprint.de",31],["0815.at",31],["0815.eu",31],["ojskate.com",31],["der-schweighofer.de",31],["tz-bedarf.de",31],["zeinpharma.de",31],["weicon.com",31],["dagvandewebshop.be",31],["thiele-tee.de",31],["carbox.de",31],["riapsport.de",31],["trendpet.de",31],["eheizung24.de",31],["seemueller.com",31],["vivande.de",31],["heidegrill.com",31],["gladiator-fightwear.com",31],["h-andreas.com",31],["pp-parts.com",31],["natuerlich-holzschuhe.de",31],["massivart.de",31],["malermeister-shop.de",31],["imping-confiserie.de",31],["lenox-trading.at",31],["cklenk.de",31],["catolet.de",31],["drinkitnow.de",31],["patisserie-m.de",31],["storm-proof.com",31],["balance-fahrradladen.de",31],["magicpos.shop",31],["zeinpharma.com",31],["sps-handel.net",31],["novagenics.com",31],["butterfly-circus.de",31],["holzhof24.de",31],["w6-wertarbeit.de",31],["fleurop.de",31],["leki.com",31],["textshuttle.com",33],["zeitzurtrauer.de",34],["funkypotato.com",[35,36,37]],["equalexchange.co.uk",[35,36,37]],["swnsdigital.com",[35,36,37]],["skaling.de",[38,39,40]],["bringmeister.de",41],["leibniz.com",42],["project529.com",43],["clearblue.com",44],["drewag.de",[45,46,47]],["buidlbox.io",45],["helitransair.com",48],["more.com",49],["nwslsoccer.com",49],["climatecentral.org",50],["resolution.de",51],["dentmania.de",52],["flagma.by",53],["eatsalad.com",54],["pacstall.dev",55],["web2.0calc.fr",56],["de-appletradein.likewize.com",57],["swissborg.com",58],["qwice.com",59],["canalpluskuchnia.pl",[60,61]],["uizard.io",62],["e-chladiva.cz",63],["assos.com",64],["monese.com",64],["stmas.bayern.de",[65,69]],["novayagazeta.eu",66],["followalice.com",[67,198]],["kinopoisk.ru",68],["yandex.ru",68],["go.netia.pl",[70,71]],["polsatboxgo.pl",[70,71]],["ing.it",[72,73]],["ing.nl",74],["handelsbanken.se",75],["secondsol.com",76],["youcom.com.br",77],["rule34.paheal.net",78],["pccomponentes.com",79],["pccomponentes.pt",79],["oead.at",80],["innovationsstiftung-bildung.at",80],["etwinning.at",80],["arqa-vet.at",80],["zentrumfuercitizenscience.at",80],["vorstudienlehrgang.at",80],["erasmusplus.at",80],["jeger.pl",81],["bo.de",82],["thegamingwatcher.com",83],["webtv.stofa.dk",84],["melkkobrew.fi",85],["asus.com.cn",[86,88]],["zentalk.asus.com",[86,88]],["mubi.com",87],["carsupermarket.com",89],["lawrievetgroup.co.uk",90],["59northwheels.se",91],["foto-gregor.de",92],["dhbbank.com",93],["dhbbank.de",93],["dhbbank.be",93],["dhbbank.nl",93],["login.ingbank.pl",94],["fabrykacukiernika.pl",[95,96]],["playlumi.com",[97,98,99]],["chatfuel.com",100],["studio3t.com",[101,102,103,104]],["realgap.co.uk",[105,106,107,108]],["hotelborgia.com",[109,110]],["sweet24.de",111],["zwembaddekouter.be",112],["flixclassic.pl",113],["jobtoday.com",114],["deltatre.com",[115,116,128]],["withings.com",[117,118,119]],["gift.be",[120,121]],["animaze.us",122],["bizkaia.eus",[123,124,125]],["sinparty.com",126],["jobs.ch",127],["jobup.ch",127],["depop.com",[129,130]],["mantel.com",131],["armedangels.com",[132,133,134]],["e-dojus.lv",135],["burnesspaull.com",136],["oncosur.org",137],["ryanair.com",138],["bayernportal.de",[139,140,141]],["pricehubble.com",142],["ilmotorsport.de",143],["aqua-store.fr",144],["app.arzt-direkt.de",145],["dasfutterhaus.at",146],["e-pity.pl",147],["fillup.pl",148],["dailymotion.com",149],["barcawelt.de",150],["lueneburger-heide.de",151],["polizei.bayern.de",[152,154]],["ourworldofpixels.com",153],["jku.at",155],["espacocasa.com",156],["altraeta.it",156],["centrooceano.it",156],["allstoresdigital.com",156],["cultarm3d.de",156],["soulbounce.com",156],["fluidtopics.com",156],["uvetgbt.com",156],["malcorentacar.com",156],["emondo.de",156],["maspero.it",156],["kelkay.com",156],["underground-england.com",156],["vert.eco",156],["turcolegal.com",156],["magnet4blogging.net",156],["moovly.com",156],["automationafrica.co.za",156],["jornaldoalgarve.pt",156],["keravanenergia.fi",156],["kuopas.fi",156],["frag-machiavelli.de",156],["healthera.co.uk",156],["mobeleader.com",156],["powerup-gaming.com",156],["developer-blog.net",156],["medical.edu.mt",156],["deh.mt",156],["bluebell-railway.com",156],["ribescasals.com",156],["javea.com",156],["chinaimportal.com",156],["inds.co.uk",156],["raoul-follereau.org",156],["serramenti-milano.it",156],["cosasdemujer.com",156],["luz-blanca.info",156],["cosasdeviajes.com",156],["safehaven.io",156],["havocpoint.it",156],["motofocus.pl",156],["nomanssky.com",156],["drei-franken-info.de",156],["clausnehring.com",156],["alttab.net",156],["kinderleicht.berlin",156],["kiakkoradio.fi",156],["cosasdelcaribe.es",156],["de-sjove-jokes.dk",156],["serverprofis.de",156],["biographyonline.net",156],["iziconfort.com",156],["sportinnederland.com",156],["natureatblog.com",156],["wtsenergy.com",156],["cosasdesalud.es",156],["internetpasoapaso.com",156],["zurzeit.at",156],["contaspoupanca.pt",156],["backmarket.de",[157,158,159]],["backmarket.co.uk",[157,158,159]],["backmarket.es",[157,158,159]],["backmarket.be",[157,158,159]],["backmarket.at",[157,158,159]],["backmarket.fr",[157,158,159]],["backmarket.gr",[157,158,159]],["backmarket.fi",[157,158,159]],["backmarket.ie",[157,158,159]],["backmarket.it",[157,158,159]],["backmarket.nl",[157,158,159]],["backmarket.pt",[157,158,159]],["backmarket.se",[157,158,159]],["backmarket.sk",[157,158,159]],["backmarket.com",[157,158,159]],["eleven-sportswear.cz",[160,161,162]],["silvini.com",[160,161,162]],["silvini.de",[160,161,162]],["purefiji.cz",[160,161,162]],["voda-zdarma.cz",[160,161,162]],["lesgarconsfaciles.com",[160,161,162]],["ulevapronohy.cz",[160,161,162]],["vitalvibe.eu",[160,161,162]],["plavte.cz",[160,161,162]],["mo-tools.cz",[160,161,162]],["flamantonlineshop.cz",[160,161,162]],["sandratex.cz",[160,161,162]],["norwayshop.cz",[160,161,162]],["3d-foto.cz",[160,161,162]],["neviditelnepradlo.cz",[160,161,162]],["nutrimedium.com",[160,161,162]],["silvini.cz",[160,161,162]],["karel.cz",[160,161,162]],["silvini.sk",[160,161,162]],["book-n-drive.de",163],["cotswoldoutdoor.com",164],["cotswoldoutdoor.ie",164],["cam.start.canon",165],["usnews.com",166],["researchaffiliates.com",167],["singkinderlieder.de",168],["store.ubisoft.com",[169,170,171,172]],["britishairways.com",[173,174,175]],["cineman.pl",[176,177,178]],["tv-trwam.pl",[176,177,178,179]],["qatarairways.com",[180,181,182,183,184]],["wedding.pl",185],["vivaldi.com",186],["emuia1.gugik.gov.pl",187],["nike.com",188],["adidas.at",189],["adidas.be",189],["adidas.ca",189],["adidas.ch",189],["adidas.cl",189],["adidas.co",189],["adidas.co.in",189],["adidas.co.kr",189],["adidas.co.nz",189],["adidas.co.th",189],["adidas.co.uk",189],["adidas.com",189],["adidas.com.ar",189],["adidas.com.au",189],["adidas.com.br",189],["adidas.com.my",189],["adidas.com.ph",189],["adidas.com.vn",189],["adidas.cz",189],["adidas.de",189],["adidas.dk",189],["adidas.es",189],["adidas.fi",189],["adidas.fr",189],["adidas.gr",189],["adidas.ie",189],["adidas.it",189],["adidas.mx",189],["adidas.nl",189],["adidas.no",189],["adidas.pe",189],["adidas.pl",189],["adidas.pt",189],["adidas.ru",189],["adidas.se",189],["adidas.sk",189],["colourbox.com",190],["ebilet.pl",191],["snap.com",192],["ratemyprofessors.com",193],["filen.io",194],["restaurantclub.pl",195],["context.news",195],["stilord.com",196],["stilord.pl",196],["stilord.de",196],["stilord.fr",196],["quantamagazine.org",197],["scaleway.com",199],["hellotv.nl",200],["lasestrellas.tv",201],["shop-naturstrom.de",202],["biona-shop.de",202],["camokoenig.de",202],["bikepro.de",202],["kaffeediscount.com",202],["vamos-skateshop.com",202],["holland-shop.com",202],["avonika.com",202],["officesuite.com",203],["fups.com",[204,205]],["scienceopen.com",206],["calendly.com",207],["ubereats.com",208],["101internet.ru",209],["tunnelmb.net",210],["hitado.de",211],["bitso.com",212],["eco-toimistotarvikkeet.fi",213],["proficient.fi",213],["developer.ing.com",214],["ehealth.gov.gr",215],["larian.com",215],["calvinklein.se",[216,217,218]],["calvinklein.fi",[216,217,218]],["calvinklein.sk",[216,217,218]],["calvinklein.si",[216,217,218]],["calvinklein.ch",[216,217,218]],["calvinklein.ru",[216,217,218]],["calvinklein.com",[216,217,218]],["calvinklein.pt",[216,217,218]],["calvinklein.pl",[216,217,218]],["calvinklein.at",[216,217,218]],["calvinklein.nl",[216,217,218]],["calvinklein.hu",[216,217,218]],["calvinklein.lu",[216,217,218]],["calvinklein.lt",[216,217,218]],["calvinklein.lv",[216,217,218]],["calvinklein.it",[216,217,218]],["calvinklein.ie",[216,217,218]],["calvinklein.hr",[216,217,218]],["calvinklein.fr",[216,217,218]],["calvinklein.es",[216,217,218]],["calvinklein.ee",[216,217,218]],["calvinklein.de",[216,217,218]],["calvinklein.dk",[216,217,218]],["calvinklein.cz",[216,217,218]],["calvinklein.bg",[216,217,218]],["calvinklein.be",[216,217,218]],["calvinklein.co.uk",[216,217,218]],["dtksoft.com",219],["formula1.com",220],["howstuffworks.com",221],["chollometro.com",222],["dealabs.com",222],["hotukdeals.com",222],["pepper.it",222],["pepper.pl",222],["preisjaeger.at",222],["mydealz.de",222],["constantin.film",[223,224,225]]]);

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
