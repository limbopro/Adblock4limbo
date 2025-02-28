/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
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

/* eslint-disable indent */

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setLocalStorageItem = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["psh:cookies-other","false"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookie_consent","no"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookiePolicy","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["cookie_accepted","true"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["cookiesAccepted","true"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps20","1"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["cookie-ack-2","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["201805-policy|accepted","1"],["kick_cookie_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["cookie-consent-level","1"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["df-cookies-allowed","true"],["cookie-consent","1"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie_accepted","-1"],["consentInteraction","true"]];

const hostnamesMap = new Map([["nhnieuws.nl",[0,1,2]],["omroepbrabant.nl",[0,1,2]],["posthog.com",3],["polar.sh",3],["varusteleka.com",4],["deribit.com",4],["dorkgpt.com",4],["zoho.com",5],["femibion.rs",6],["nove.fr",6],["popcornmovies.to",7],["improvethenews.org",7],["plente.com",7],["villagrancanaria.com",8],["baic.cz",9],["bunq.com",10],["framer.com",10],["zave.it",10],["tower.dev",10],["ctol.digital",11],["duty.travel.cl",12],["solscan.io",13],["connorduffy.abundancerei.com",14],["bc.gamem",15],["akkushop-turkiye.com.tr",16],["k33.com",[17,18]],["komdigi.go.id",19],["fijiairways.com",20],["planner.kaboodle.co.nz",21],["sekisuialveo.com",[23,24]],["rightsize.dk",25],["random-group.olafneumann.org",26],["espadrij.com",27],["hygiene-shop.eu",27],["gesundheitsmanufaktur.de",[27,260]],["technikmuseum.berlin",28],["cvut.cz",[29,30,31]],["r-ulybka.ru",32],["voltadol.at",33],["evium.de",34],["gpuscout.nl",35],["comnet.com.tr",35],["auth.hiring.amazon.com",35],["parrotsec.org",35],["engeldirekt.de",36],["haleon-gebro.at",[37,38]],["spectrumtherapeutics.com",39],["puregoldprotein.com",[39,46,47]],["thingtesting.com",39],["streamclipsgermany.de",39],["bo3.gg",39],["happyplates.com",[40,41]],["ickonic.com",42],["abs-cbn.com",43],["news.abs-cbn.com",43],["opmaatzagen.nl",44],["mundwerk-rottweil.de",44],["sqlook.com",45],["adef-emploi.fr",[48,49]],["lumieresdelaville.net",[48,49]],["ccaf.io",[50,51]],["dbschenkerarkas.com.tr",52],["dbschenker-seino.jp",52],["dbschenker.com",[52,144]],["scinapse.io",53],["shop.ba.com",[54,55]],["uc.pt",56],["bennettrogers.mysight.uk",57],["snipp.gg",57],["leafly.com",58],["geizhals.at",59],["geizhals.de",59],["geizhals.eu",59],["cenowarka.pl",59],["skinflint.co.uk",59],["webhallen.com",[60,61,62]],["olx.com.br",63],["unobike.com",64],["mod.io",65],["rodrigue-app.ct.ws",66],["passport-photo.online",66],["mojmaxtv.hrvatskitelekom.hr",66],["tme.eu",67],["mein-osttirol.rocks",68],["tennessine.co.uk",69],["ultraleds.co.uk",70],["greubelforsey.com",71],["lukify.app",72],["studiobookr.com",73],["getgrass.io",74],["artisan.co",75],["mobilefuse.com",76],["safe.global",[77,197]],["data.carbonmapper.org",78],["avica.link",79],["madeiramadeira.com.br",80],["sberdisk.ru",81],["column.com",82],["iqoption.com",83],["dopesnow.com",84],["montecwear.com",84],["romeo.com",85],["sonyliv.com",[86,87]],["cwallet.com",88],["oneskin.co",89],["telemetr.io",90],["near.org",91],["near.ai",91],["dev.near.org",92],["jito.network",93],["jito.wtf",93],["goodpods.com",94],["pngtree.com",[95,96]],["v2.xmeye.net",97],["venom.foundation",98],["canonvannederland.nl",99],["my-account.storage-mart.com",100],["web.bunq.com",101],["lifesum.com",102],["home.shortcutssoftware.com",103],["klimwinkel.nl",104],["markimicrowave.com",105],["aerolineas.com.ar",106],["5sim.net",106],["fold.dev",107],["mojposao.hr",108],["temu.com",[109,110]],["supreme.com",[111,112]],["g-star.com",113],["sawren.pl",114],["ultrahuman.com",115],["optionsgroup.com",116],["withpersona.com",[117,118]],["trigger.dev",119],["core.app",[120,122]],["zora.co",121],["kokku-online.de",123],["cuba-buddy.de",124],["datamask.app",125],["humandataincome.com",125],["crealitycloud.com",126],["triumphtechnicalinformation.com",127],["businessclass.com",128],["livsstil.se",129],["schneidewind-immobilien.de",130],["textshuttle.com",131],["simpleswap.io",132],["wales.nhs.attendanywhere.com",133],["sacal.it",134],["astondevs.ru",135],["gonxt.com",136],["geomiq.com",137],["bbc.com",138],["galaxy.com",139],["ticketmelon.com",140],["pechinchou.com.br",141],["thehub21.com",142],["archiup.com",143],["autoride.cz",[145,146,147]],["autoride.es",[145,146,147]],["autoride.io",[145,146,147]],["autoride.sk",[145,146,147]],["wunderground.com",148],["baselime.io",149],["eversports.de",[150,151]],["makerz.me",152],["reebok.eu",153],["alfa.com.ec",154],["rts.com.ec",154],["tropicalida.com.ec",154],["owgr.com",[155,156]],["beermerchants.com",157],["saamexe.com",[158,159]],["helium.com",158],["app.bionic-reading.com",160],["nloto.ru",161],["swisstours.com",162],["librinova.com",163],["format.bike",164],["khanacademy.org",165],["etelecinema.hu",166],["konicaminolta.com",167],["soquest.xyz",168],["region-bayreuth.de",169],["nationalexpress.de",170],["eezy.nrw",170],["bahnland-bayern.de",170],["chipcitycookies.com",171],["6amgroup.com",171],["go.bkk.hu",171],["worldlibertyfinancial.com",171],["happiful.com",171],["bazaartracker.com",172],["subscribercounter.com",173],["app.klarna.com",[174,175,176]],["instantspoursoi.fr",177],["thealliance.ai",178],["vivenu.com",179],["librumreader.com",180],["visnos.com",181],["polypane.app",182],["changelly.com",183],["glose.com",184],["yellow.systems",185],["renebieder.com",186],["goodram.com",187],["starwalk.space",188],["vitotechnology.com",188],["codedead.com",189],["studiofabiobiesel.com",190],["fydeos.com",191],["fydeos.io",191],["jove.com",192],["argent.xyz",193],["pixeden.com",194],["akasha.org",195],["ashleyfurniture.com",196],["jibjab.com",198],["filmzie.com",199],["vietjetair.com",200],["engineering.mixpanel.com",201],["betterprogramming.pub",201],["medium.com",201],["500ish.com",201],["gitconnected.com",201],["bettermarketing.pub",201],["diylifetech.com",201],["thebolditalic.com",201],["writingcooperative.com",201],["fanfare.pub",201],["betterhumans.pub",201],["kick.com",202],["jimdosite.com",203],["worstbassist.com",203],["cora-broodjes.nl",203],["evernote.com",[204,205]],["octopusenergy.co.jp",206],["findmcserver.com",207],["schneideranwaelte.de",208],["traefik.io",208],["cityfalcon.ai",209],["digitalparking.city",210],["mediathekviewweb.de",211],["solana.com",212],["ef.co.id",213],["alohafromdeer.com",214],["fwd.com",[215,217]],["everywhere.game",216],["geotastic.net",218],["tattoodo.com",[219,220]],["garageproject.co.nz",219],["jmonline.com.br",221],["atlas.workland.com",221],["virginexperiencedays.co.uk",221],["emag.berliner-woche.de",[222,223,224]],["nordkurier.de",[222,223,224]],["everest-24.pl",[225,226]],["sneakerfreaker.com",227],["cryptofalka.hu",227],["walmart.ca",228],["flyingblue.com",229],["byfood.com",230],["andsafe.de",231],["edostavka.by",232],["emall.by",232],["ishoppurium.com",233],["onexstore.pl",[234,235,236]],["revanced.app",236],["evropochta.by",[237,238]],["inselberlin.de",239],["gronkh.tv",240],["adfilteringdevsummit.com",241],["dailyrevs.com",242],["dsworks.ru",242],["daraz.com",243],["learngerman.dw.com",244],["leeway.tech",245],["gostanford.com",246],["namensetiketten.de",247],["drafthound.com",[248,249]],["wokularach.pl",250],["bidup.amtrak.com",251],["eschuhe.de",252],["zeglins.com",253],["flyingpapers.com",254],["beta.character.ai",[255,256]],["bittimittari.fi",257],["aida64.co.uk",[258,259]],["aida64.com.ua",[258,259]],["aida64.de",[258,259]],["aida64.hu",[258,259]],["aida64.it",[258,259]],["aida64russia.com",[258,259]],["open24.ee",260],["116117.fi",261],["autodude.dk",262],["autodude.fi",262],["autodude.no",262],["autodude.se",262],["valostore.fi",262],["valostore.no",262],["valostore.se",262],["vivantis-shop.at",263],["krasa.cz",263],["auf1.tv",264],["wesendit.com",265],["hatch.co",266],["gdh.digital",267],["ioplus.nl",268]]);

const entitiesMap = new Map([["movies4us",7],["pedalcommander",22],["vivantis",263]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setLocalStorageItem(key = '', value = '') {
    setLocalStorageItemFn('local', false, key, value);
}

function setLocalStorageItemFn(
    which = 'local',
    trusted = false,
    key = '',
    value = '',
) {
    if ( key === '' ) { return; }

    // For increased compatibility with AdGuard
    if ( value === 'emptyArr' ) {
        value = '[]';
    } else if ( value === 'emptyObj' ) {
        value = '{}';
    }

    const trustedValues = [
        '',
        'undefined', 'null',
        '{}', '[]', '""',
        '$remove$',
        ...getSafeCookieValuesFn(),
    ];

    if ( trusted ) {
        if ( value.includes('$now$') ) {
            value = value.replaceAll('$now$', Date.now());
        }
        if ( value.includes('$currentDate$') ) {
            value = value.replaceAll('$currentDate$', `${Date()}`);
        }
        if ( value.includes('$currentISODate$') ) {
            value = value.replaceAll('$currentISODate$', (new Date()).toISOString());
        }
    } else {
        const normalized = value.toLowerCase();
        const match = /^("?)(.+)\1$/.exec(normalized);
        const unquoted = match && match[2] || normalized;
        if ( trustedValues.includes(unquoted) === false ) {
            if ( /^-?\d+$/.test(unquoted) === false ) { return; }
            const n = parseInt(unquoted, 10) || 0;
            if ( n < -32767 || n > 32767 ) { return; }
        }
    }

    try {
        const storage = self[`${which}Storage`];
        if ( value === '$remove$' ) {
            const safe = safeSelf();
            const pattern = safe.patternToRegex(key, undefined, true );
            const toRemove = [];
            for ( let i = 0, n = storage.length; i < n; i++ ) {
                const key = storage.key(i);
                if ( pattern.test(key) ) { toRemove.push(key); }
            }
            for ( const key of toRemove ) {
                storage.removeItem(key);
            }
        } else {
            storage.setItem(key, `${value}`);
        }
    } catch {
    }
}

function getSafeCookieValuesFn() {
    return [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'disallow', 'deny',
        'allowed', 'denied',
        'approved', 'disapproved',
        'checked', 'unchecked',
        'dismiss', 'dismissed',
        'enable', 'disable',
        'enabled', 'disabled',
        'essential', 'nonessential',
        'forbidden', 'forever',
        'hide', 'hidden',
        'necessary', 'required',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'all', 'none', 'functional',
        'granted', 'done',
        'decline', 'declined',
        'closed', 'next', 'mandatory',
        'disagree', 'agree',
    ];
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
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
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
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
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch {
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
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
} catch {
}
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
    try { setLocalStorageItem(...argsList[i]); }
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_setLocalStorageItem();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
