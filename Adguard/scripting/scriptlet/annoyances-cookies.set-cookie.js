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

const argsList = [["taunton_user_consent_submitted","true"],["taunton_user_consent_advertising","false"],["taunton_user_consent_analytics","false"],["cookies_consent","1"],["_duet_gdpr_acknowledged","1"],["daimant_collective","accept","","reload","1"],["privacy-policy-2023","accept"],["user_cookie_consent","false"],["cookiePolicy","4"],["standard_gdpr_consent","true"],["cookie_accept","true"],["tncookieinfo","1","","reload","1"],["agree_with_cookies","1"],["sc-privacy-settings","true"],["cookie-accepted","true"],["consentAll","1"],["cookiePrefAnalytics","0"],["cookiePrefMarketing","0"],["cookiePrefThirdPartyApplications","0"],["cookie-consent","true"],["hide_cookies_consent","1"],["nicequest_optIn","1"],["shb-consent-cookies","false"],["cpaccepted","true"],["cookieMessageDismissed","1"],["LG_COOKIE_CONSENT","0"],["CookieConsent","true"],["wtr_cookie_consent","1"],["wtr_cookies_functional","1"],["cookie-m-personalization","0"],["cookie-m-marketing","0"],["cookie-m-analytics","0"],["cookies","true"],["ctc_rejected","1"],["cookie_policy_acknowledgement","true"],["allowCookies","yes"],["cookieNotification","true"],["privacy","true"],["euconsent-bypass","1"],["cookie_usage","yes"],["dismissCookieBanner","true"],["cbChecked","true"],["infoCookieUses","true"],["consent-data-v2","0"],["ACCEPTED_COOKIES","true"],["EMR-CookieConsent-Analytical","0","","reload","1"],["gem_cookies_usage_production","1"],["cookie_level","2"],["toutv_cookies_usage_production","1"],["_evidon_suppress_notification_cookie","1"],["EMR-CookieConsent-Advertising","0"],["acceptCookies","true"],["COOKIES_NEWACCEPTED","1"],["es_cookie_settings_closed","1"],["cookie-banner-acceptance-state","true"],["cookie_consent_seen","1"],["cookieAccepted","true"],["cookie_tag_accepted","true"],["cookies_allowed","yes"],["valamis_cookie_message","true","","reload","1"],["valamis_cookie_marketing","false"],["valamis_cookie_analytics","false"],["approvedcookies","no","","reload","1"],["psd-google-ads-enabled","0"],["psd-gtm-activated","1"],["cookie-preference","1"],["wishlist-enabled","1"],["textshuttle_cookie","true"],["consentInteract","true"],["cookielawinfo-checkbox-functional","yes"],["cookielawinfo-checkbox-necessary","yes"],["viewed_cookie_policy","yes"],["cookie-byte-consent-essentials","true"],["cookie-byte-consent-showed","true"],["cookie-byte-consent-statistics","false"],["bm_acknowledge","yes"],["consent","1"],["cookies_ok","true"],["kali-cc-agreed","true"],["cookiesAccepted","true"],["allowMarketingCookies","false"],["allowAnalyticalCookies","false"],["privacyLevel","2","","reload","1"],["AcceptedCookies","1"],["userCookieConsent","true"],["hasSeenCookiePopUp","yes"],["privacyLevel","flagmajob_ads_shown","1","","reload","1"],["userCookies","true"],["privacy-policy-accepted","1"],["precmp","1","","reload","1"],["IsCookieAccepted","yes","","reload","1"],["gatsby-gdpr-google-tagmanager","true"],["legalOk","true"],["cp_cc_stats","1","","reload","1"],["cp_cc_ads","1"],["cookie-disclaimer","1"],["gdpr","1"],["accept-cookies","true"],["statistik","0"],["cookies-informer-close","true"],["gdpr","0"],["required","1"],["rodo-reminder-displayed","1"],["rodo-modal-displayed","1"],["ING_GPT","0"],["ING_GPP","0"],["cookiepref","1"],["shb-consent-cookies","true"],["termos-aceitos","ok"],["ui-tnc-agreed","true"],["accept_cookie","1"],["cookieconsent_status_new","3"],["_acceptCookies","1","","reload","1"],["_reiff-consent-cookie","yes"],["snc-cp","1"],["cookies-accepted","true"],["cookies-accepted","false"],["cookies-required","1","","reload","1"],["isReadCookiePolicyDNTAa","true"],["mubi-cookie-consent","allow"],["isReadCookiePolicyDNT","Yes"],["ce-cookie","N"],["ivc_consent","3"],["cookie_accepted","1"],["cookie_accepted","true"],["UserCookieLevel","1"],["sat_track","false"],["Rodo","1"],["cookie_privacy_on","1"],["cookies-marketing","false"],["cookies-functional","true"],["cookies-preferences","false"],["__cf_gdpr_accepted","false"],["3t-cookies-essential","1"],["3t-cookies-functional","1"],["3t-cookies-performance","0"],["3t-cookies-social","0"],["allow_cookies_marketing","0"],["allow_cookies_tracking","0"],["cookie_prompt_dismissed","1"],["cookies_enabled","1"],["cookie","1","","reload","1"],["cookie-analytics","0"],["cc-set","1","","reload","1"],["allowCookies","1","","reload","1"],["rgp-gdpr-policy","1"],["jt-jobseeker-gdpr-banner","true","","reload","1"],["cookie-preferences-analytics","no"],["cookie-preferences-marketing","no"],["withings_cookieconsent_dismissed","1"],["cookieconsent_advertising","false"],["cookieconsent_statistics","false"],["CP_ESSENTIAL","1"],["CP_PREFERENCES","1"],["amcookie_allowed","1"],["pc_analitica_bizkaia","false"],["pc_preferencias_bizkaia","true"],["pc_tecnicas_bizkaia","true"],["gdrp_popup_showed","1"],["cookie_consent_accept","true"],["cookie-preferences-technical","yes"],["gdpr__google__analytics","false"],["gdpr__depop__functional","true"],["tracking_cookie","1"],["cookie-preference","2"],["cookie-preference_auto_accept","1"],["cookie-preference_renew7","1"],["pc234978122321234","1"],["ck_pref_all","1"],["ONCOSURCOOK","2"],["RY_COOKIE_CONSENT","true"],["cookieConsent","true","","reload","1"],["videoConsent","true"],["comfortConsent","true"],["cookieBannerAccepted","1","","reload","1"],["cookieMsg","true","","reload","1"],["abz_seo_choosen","1"],["ARE_DSGVO_PREFERENCES_SUBMITTED","true"],["dsgvo_consent","1"],["efile-cookiename-28","1"],["efile-cookiename-74","1"],["cookie_policy_closed","1","","reload","1"],["gvCookieConsentAccept","1","reload","","1"],["acceptEssential","1"],["baypol_banner","true"],["nagAccepted","true"],["baypol_functional","true"],["CookieConsent","OK"],["viewed_cookie_policy","yes","","reload","1"],["BM_Advertising","false","","reload","1"],["BM_User_Experience","true"],["BM_Analytics","false"],["DmCookiesAccepted","true","","reload","1"],["DmCookiesMarketing","false"],["DmCookiesAnalytics","false"],["cookietypes","OK"],["consent_setting","OK","","reload","1"],["user_accepts_cookies","true"],["gdpr_agreed","4"],["ra-cookie-disclaimer-11-05-2022","true"],["acceptMatomo","true"],["UBI_PRIVACY_POLICY_ACCEPTED","true"],["UBI_PRIVACY_POLICY_VIEWED","true"],["UBI_PRIVACY_VID_OPTOUT","false"],["UBI_PRIVACY_VIDEO_OPTOUT","false"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["ARE_MARKETING_COOKIES_ACCEPTED","true"],["ARE_REQUIRED_COOKIES_ACCEPTED","true"],["HAS_COOKIES_FORM_SHOWED","true"],["accepted_functional","yes"],["accepted_marketing","no"],["allow_the_cookie","yes"],["cookie_visited","true"],["drcookie","true"],["wed_cookie_info","1"],["acceptedCookies","true"],["cookieMessageHide","true"],["sq","3"],["notice_preferences","2"],["cookie_consent_all","1"],["eb_cookie_agree","1"],["sc-cookies-accepted","true"],["ccpa-notice-viewed-02","true"],["cookieConsent","yes"],["cookieConsent","true"],["plenty-shop-cookie","0"],["acceptedPolicy","true"],["cookie-consent","false"],["consent-analytics","false"],["cookieConsentClosed","true"],["_tvsPrivacy","true"],["epCookieConsent","1","","reload","1"],["intro","true"],["SeenCookieBar","true"],["AllowCookies","true"],["cookiesAccepted","3"],["gdpr_dismissal","true"],["uev2.gg","true"],["closeNotificationAboutCookie","true"],["cookie-policy","true"],["allowCookie","1","","reload","1"],["bitso_cc","1"],["AcceptKeksit","0","","reload","1"],["cookiepref","true"],["cookieconsent_status","1"],["PVH_COOKIES_GDPR","Accept"],["PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"],["PVH_COOKIES_GDPR_ANALYTICS","Reject"],["user_cookie_consent","1"],["ofdb_werbung","Y","","reload","1"],["notice_preferences","1"],["gdpr_opt_in","1"],["cookie_policy_agreement","3"],["allow-marketing","false"],["allow-analytics","false"],["external-data-googlemaps-is-enabled","true"],["external-data-youtube-is-enabled","true"],["external-data-spotify-is-enabled","true"]];

const hostnamesMap = new Map([["finewoodworking.com",[0,1,2]],["horecaworld.biz",3],["horecaworld.be",3],["secondsol.com",3],["theverge.com",4],["daimant.co",5],["musicmap.info",6],["gasspisen.se",7],["medtube.pl",8],["medtube.es",8],["medtube.fr",8],["medtube.net",8],["standard.sk",9],["linmot.com",10],["top-yp.de",11],["termania.net",12],["swisscard.ch",13],["account.nowpayments.io",14],["gigasport.at",15],["gigasport.de",15],["gigasport.ch",15],["fish.shimano.com",[16,17,18]],["myriad.social",19],["followalice.com",[19,230]],["velleahome.gr",20],["nicequest.com",21],["handelsbanken.no",22],["handelsbanken.com",22],["handelsbanken.co.uk",22],["handelsbanken.se",[22,107]],["handelsbanken.dk",22],["handelsbanken.fi",22],["songtradr.com",23],["logo.pt",[24,25]],["latoken.com",26],["dentmania.de",26],["waitrose.com",[27,28]],["campusbrno.cz",[29,30,31]],["secrid.com",32],["etsy.com",33],["deps.dev",34],["buf.build",35],["starofservice.com",36],["ytcomment.kmcat.uk",37],["gmx.com",38],["gmx.fr",38],["karofilm.ru",39],["octopusenergy.es",40],["justanswer.es",41],["justanswer.de",41],["justanswer.com",41],["justanswer.co.uk",41],["citilink.ru",42],["huutokaupat.com",43],["kaggle.com",44],["emr.ch",[45,50]],["gem.cbc.ca",46],["pumatools.hu",47],["ici.tou.tv",48],["crunchyroll.com",49],["clipchamp.com",51],["trouwenbijfletcher.nl",51],["fletcher.nl",51],["fletcherzakelijk.nl",51],["intermatic.com",51],["ebikelohr.de",52],["eurosender.com",53],["melectronics.ch",54],["guard.io",55],["dom.ru",56],["schrottpreis.org",57],["nokportalen.se",58],["valamis.com",[59,60,61]],["sverigesingenjorer.se",62],["shop.almawin.de",[63,64,65,66]],["vansprint.de",65],["0815.at",65],["0815.eu",65],["ojskate.com",65],["der-schweighofer.de",65],["tz-bedarf.de",65],["zeinpharma.de",65],["weicon.com",65],["dagvandewebshop.be",65],["thiele-tee.de",65],["carbox.de",65],["riapsport.de",65],["trendpet.de",65],["eheizung24.de",65],["seemueller.com",65],["vivande.de",65],["heidegrill.com",65],["gladiator-fightwear.com",65],["h-andreas.com",65],["pp-parts.com",65],["natuerlich-holzschuhe.de",65],["massivart.de",65],["malermeister-shop.de",65],["imping-confiserie.de",65],["lenox-trading.at",65],["cklenk.de",65],["catolet.de",65],["drinkitnow.de",65],["patisserie-m.de",65],["storm-proof.com",65],["balance-fahrradladen.de",65],["magicpos.shop",65],["zeinpharma.com",65],["sps-handel.net",65],["novagenics.com",65],["butterfly-circus.de",65],["holzhof24.de",65],["w6-wertarbeit.de",65],["fleurop.de",65],["leki.com",65],["extremeaudio.de",65],["textshuttle.com",67],["zeitzurtrauer.de",68],["fabriziovanmarciano.com",[69,70,71]],["nationalrail.com",[69,70,71]],["eett.gr",[69,70,71]],["funkypotato.com",[69,70,71]],["equalexchange.co.uk",[69,70,71]],["swnsdigital.com",[69,70,71]],["skaling.de",[72,73,74]],["bringmeister.de",75],["leibniz.com",76],["project529.com",77],["clearblue.com",78],["drewag.de",[79,80,81]],["buidlbox.io",79],["helitransair.com",82],["more.com",83],["nwslsoccer.com",83],["climatecentral.org",84],["resolution.de",85],["flagma.by",86],["eatsalad.com",87],["pacstall.dev",88],["web2.0calc.fr",89],["de-appletradein.likewize.com",90],["swissborg.com",91],["qwice.com",92],["canalpluskuchnia.pl",[93,94]],["uizard.io",95],["e-chladiva.cz",96],["assos.com",97],["monese.com",97],["stmas.bayern.de",[98,101]],["novayagazeta.eu",99],["kinopoisk.ru",100],["yandex.ru",100],["go.netia.pl",[102,103]],["polsatboxgo.pl",[102,103]],["ing.it",[104,105]],["ing.nl",106],["youcom.com.br",108],["rule34.paheal.net",109],["pccomponentes.com",110],["pccomponentes.pt",110],["oead.at",111],["innovationsstiftung-bildung.at",111],["etwinning.at",111],["arqa-vet.at",111],["zentrumfuercitizenscience.at",111],["vorstudienlehrgang.at",111],["erasmusplus.at",111],["jeger.pl",112],["bo.de",113],["thegamingwatcher.com",114],["webtv.stofa.dk",115],["plusujemy.pl",116],["melkkobrew.fi",117],["asus.com.cn",[118,120]],["zentalk.asus.com",[118,120]],["mubi.com",119],["carsupermarket.com",121],["lawrievetgroup.co.uk",122],["59northwheels.se",123],["foto-gregor.de",124],["dhbbank.com",125],["dhbbank.de",125],["dhbbank.be",125],["dhbbank.nl",125],["login.ingbank.pl",126],["fabrykacukiernika.pl",[127,128]],["playlumi.com",[129,130,131]],["chatfuel.com",132],["studio3t.com",[133,134,135,136]],["realgap.co.uk",[137,138,139,140]],["hotelborgia.com",[141,142]],["sweet24.de",143],["zwembaddekouter.be",144],["flixclassic.pl",145],["jobtoday.com",146],["deltatre.com",[147,148,160]],["withings.com",[149,150,151]],["gift.be",[152,153]],["animaze.us",154],["bizkaia.eus",[155,156,157]],["sinparty.com",158],["jobs.ch",159],["jobup.ch",159],["depop.com",[161,162]],["mantel.com",163],["armedangels.com",[164,165,166]],["e-dojus.lv",167],["burnesspaull.com",168],["oncosur.org",169],["ryanair.com",170],["bayernportal.de",[171,172,173]],["pricehubble.com",174],["ilmotorsport.de",175],["aqua-store.fr",176],["app.arzt-direkt.de",177],["dasfutterhaus.at",178],["e-pity.pl",179],["fillup.pl",180],["dailymotion.com",181],["barcawelt.de",182],["lueneburger-heide.de",183],["polizei.bayern.de",[184,186]],["ourworldofpixels.com",185],["jku.at",187],["espacocasa.com",188],["altraeta.it",188],["centrooceano.it",188],["allstoresdigital.com",188],["cultarm3d.de",188],["soulbounce.com",188],["fluidtopics.com",188],["uvetgbt.com",188],["malcorentacar.com",188],["emondo.de",188],["maspero.it",188],["kelkay.com",188],["underground-england.com",188],["vert.eco",188],["turcolegal.com",188],["magnet4blogging.net",188],["moovly.com",188],["automationafrica.co.za",188],["jornaldoalgarve.pt",188],["keravanenergia.fi",188],["kuopas.fi",188],["frag-machiavelli.de",188],["healthera.co.uk",188],["mobeleader.com",188],["powerup-gaming.com",188],["developer-blog.net",188],["medical.edu.mt",188],["deh.mt",188],["bluebell-railway.com",188],["ribescasals.com",188],["javea.com",188],["chinaimportal.com",188],["inds.co.uk",188],["raoul-follereau.org",188],["serramenti-milano.it",188],["cosasdemujer.com",188],["luz-blanca.info",188],["cosasdeviajes.com",188],["safehaven.io",188],["havocpoint.it",188],["motofocus.pl",188],["nomanssky.com",188],["drei-franken-info.de",188],["clausnehring.com",188],["alttab.net",188],["kinderleicht.berlin",188],["kiakkoradio.fi",188],["cosasdelcaribe.es",188],["de-sjove-jokes.dk",188],["serverprofis.de",188],["biographyonline.net",188],["iziconfort.com",188],["sportinnederland.com",188],["natureatblog.com",188],["wtsenergy.com",188],["cosasdesalud.es",188],["internetpasoapaso.com",188],["zurzeit.at",188],["contaspoupanca.pt",188],["backmarket.de",[189,190,191]],["backmarket.co.uk",[189,190,191]],["backmarket.es",[189,190,191]],["backmarket.be",[189,190,191]],["backmarket.at",[189,190,191]],["backmarket.fr",[189,190,191]],["backmarket.gr",[189,190,191]],["backmarket.fi",[189,190,191]],["backmarket.ie",[189,190,191]],["backmarket.it",[189,190,191]],["backmarket.nl",[189,190,191]],["backmarket.pt",[189,190,191]],["backmarket.se",[189,190,191]],["backmarket.sk",[189,190,191]],["backmarket.com",[189,190,191]],["eleven-sportswear.cz",[192,193,194]],["silvini.com",[192,193,194]],["silvini.de",[192,193,194]],["purefiji.cz",[192,193,194]],["voda-zdarma.cz",[192,193,194]],["lesgarconsfaciles.com",[192,193,194]],["ulevapronohy.cz",[192,193,194]],["vitalvibe.eu",[192,193,194]],["plavte.cz",[192,193,194]],["mo-tools.cz",[192,193,194]],["flamantonlineshop.cz",[192,193,194]],["sandratex.cz",[192,193,194]],["norwayshop.cz",[192,193,194]],["3d-foto.cz",[192,193,194]],["neviditelnepradlo.cz",[192,193,194]],["nutrimedium.com",[192,193,194]],["silvini.cz",[192,193,194]],["karel.cz",[192,193,194]],["silvini.sk",[192,193,194]],["book-n-drive.de",195],["cotswoldoutdoor.com",196],["cotswoldoutdoor.ie",196],["cam.start.canon",197],["usnews.com",198],["researchaffiliates.com",199],["singkinderlieder.de",200],["store.ubisoft.com",[201,202,203,204]],["britishairways.com",[205,206,207]],["cineman.pl",[208,209,210]],["tv-trwam.pl",[208,209,210,211]],["qatarairways.com",[212,213,214,215,216]],["wedding.pl",217],["vivaldi.com",218],["emuia1.gugik.gov.pl",219],["nike.com",220],["adidas.at",221],["adidas.be",221],["adidas.ca",221],["adidas.ch",221],["adidas.cl",221],["adidas.co",221],["adidas.co.in",221],["adidas.co.kr",221],["adidas.co.nz",221],["adidas.co.th",221],["adidas.co.uk",221],["adidas.com",221],["adidas.com.ar",221],["adidas.com.au",221],["adidas.com.br",221],["adidas.com.my",221],["adidas.com.ph",221],["adidas.com.vn",221],["adidas.cz",221],["adidas.de",221],["adidas.dk",221],["adidas.es",221],["adidas.fi",221],["adidas.fr",221],["adidas.gr",221],["adidas.ie",221],["adidas.it",221],["adidas.mx",221],["adidas.nl",221],["adidas.no",221],["adidas.pe",221],["adidas.pl",221],["adidas.pt",221],["adidas.ru",221],["adidas.se",221],["adidas.sk",221],["colourbox.com",222],["ebilet.pl",223],["snap.com",224],["ratemyprofessors.com",225],["filen.io",226],["restaurantclub.pl",227],["context.news",227],["stilord.com",228],["stilord.pl",228],["stilord.de",228],["stilord.fr",228],["quantamagazine.org",229],["scaleway.com",231],["hellotv.nl",232],["lasestrellas.tv",233],["fantecshop.de",234],["hexen-werkstatt.shop",234],["shop-naturstrom.de",234],["biona-shop.de",234],["camokoenig.de",234],["bikepro.de",234],["kaffeediscount.com",234],["vamos-skateshop.com",234],["holland-shop.com",234],["avonika.com",234],["officesuite.com",235],["fups.com",[236,237]],["scienceopen.com",238],["calendly.com",239],["ubereats.com",240],["101internet.ru",241],["tunnelmb.net",242],["hitado.de",243],["bitso.com",244],["eco-toimistotarvikkeet.fi",245],["proficient.fi",245],["developer.ing.com",246],["ehealth.gov.gr",247],["larian.com",247],["calvinklein.se",[248,249,250]],["calvinklein.fi",[248,249,250]],["calvinklein.sk",[248,249,250]],["calvinklein.si",[248,249,250]],["calvinklein.ch",[248,249,250]],["calvinklein.ru",[248,249,250]],["calvinklein.com",[248,249,250]],["calvinklein.pt",[248,249,250]],["calvinklein.pl",[248,249,250]],["calvinklein.at",[248,249,250]],["calvinklein.nl",[248,249,250]],["calvinklein.hu",[248,249,250]],["calvinklein.lu",[248,249,250]],["calvinklein.lt",[248,249,250]],["calvinklein.lv",[248,249,250]],["calvinklein.it",[248,249,250]],["calvinklein.ie",[248,249,250]],["calvinklein.hr",[248,249,250]],["calvinklein.fr",[248,249,250]],["calvinklein.es",[248,249,250]],["calvinklein.ee",[248,249,250]],["calvinklein.de",[248,249,250]],["calvinklein.dk",[248,249,250]],["calvinklein.cz",[248,249,250]],["calvinklein.bg",[248,249,250]],["calvinklein.be",[248,249,250]],["calvinklein.co.uk",[248,249,250]],["dtksoft.com",251],["ofdb.de",252],["formula1.com",253],["howstuffworks.com",254],["chollometro.com",255],["dealabs.com",255],["hotukdeals.com",255],["pepper.it",255],["pepper.pl",255],["preisjaeger.at",255],["mydealz.de",255],["easyfind.ch",[256,257]],["constantin.film",[258,259,260]]]);

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
