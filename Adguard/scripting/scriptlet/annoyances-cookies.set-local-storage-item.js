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

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_setLocalStorageItem() {

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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["201805-policy|accepted","1"],["psh:cookies-other","false"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookie_consent","no"],["cookie_accepted","true"],["consentLevel","1"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookiePolicy","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["cookiesAccepted","true"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps20","1"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["cookie-ack-2","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["kick_cookie_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie_accepted","-1"],["cookie-policy","approve"],["consentInteraction","true"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["code.likeagirl.io",0],["engineering.mixpanel.com",0],["betterprogramming.pub",0],["medium.com",0],["500ish.com",0],["gitconnected.com",0],["bettermarketing.pub",0],["diylifetech.com",0],["thebolditalic.com",0],["writingcooperative.com",0],["fanfare.pub",0],["betterhumans.pub",0],["nhnieuws.nl",[1,2,3]],["omroepbrabant.nl",[1,2,3]],["posthog.com",4],["polar.sh",4],["esto.eu",5],["ctol.digital",5],["beterbed.nl",6],["metamask.io",7],["chavesnamao.com.br",8],["anhanguera.com",9],["bhaskar.com",10],["novaventa.com",11],["privacy.com.br",12],["supabase.com",13],["app.getgrass.io",14],["sanluisgarbage.com",15],["wildberries.ru",16],["cryptorank.io",17],["springmerchant.com",18],["veed.io",19],["varusteleka.com",20],["deribit.com",20],["dorkgpt.com",20],["zoho.com",21],["femibion.rs",22],["nove.fr",22],["movies4us.*",23],["popcornmovies.to",23],["improvethenews.org",23],["plente.com",23],["villagrancanaria.com",24],["baic.cz",25],["bunq.com",26],["framer.com",26],["inceptionlabs.ai",26],["zave.it",26],["tower.dev",26],["fleksberegner.dk",27],["duty.travel.cl",28],["solscan.io",29],["connorduffy.abundancerei.com",30],["bc.gamem",31],["akkushop-turkiye.com.tr",32],["k33.com",[33,34]],["komdigi.go.id",35],["fijiairways.com",36],["planner.kaboodle.co.nz",37],["pedalcommander.*",38],["sekisuialveo.com",[39,40]],["rightsize.dk",41],["random-group.olafneumann.org",42],["espadrij.com",43],["hygiene-shop.eu",43],["gesundheitsmanufaktur.de",[43,275]],["technikmuseum.berlin",44],["cvut.cz",[45,46,47]],["r-ulybka.ru",48],["voltadol.at",49],["evium.de",50],["gpuscout.nl",51],["remanga.org",51],["comnet.com.tr",51],["auth.hiring.amazon.com",51],["parrotsec.org",51],["shonenjumpplus.com",52],["engeldirekt.de",53],["haleon-gebro.at",[54,55]],["spectrumtherapeutics.com",56],["puregoldprotein.com",[56,63,64]],["thingtesting.com",56],["streamclipsgermany.de",56],["bo3.gg",56],["happyplates.com",[57,58]],["ickonic.com",59],["abs-cbn.com",60],["news.abs-cbn.com",60],["opmaatzagen.nl",61],["mundwerk-rottweil.de",61],["sqlook.com",62],["adef-emploi.fr",[65,66]],["lumieresdelaville.net",[65,66]],["ccaf.io",[67,68]],["dbschenkerarkas.com.tr",69],["dbschenker-seino.jp",69],["dbschenker.com",[69,161]],["scinapse.io",70],["shop.ba.com",[71,72]],["uc.pt",73],["bennettrogers.mysight.uk",74],["snipp.gg",74],["leafly.com",75],["geizhals.at",76],["geizhals.de",76],["geizhals.eu",76],["cenowarka.pl",76],["skinflint.co.uk",76],["webhallen.com",[77,78,79]],["olx.com.br",80],["unobike.com",81],["mod.io",82],["rodrigue-app.ct.ws",83],["passport-photo.online",83],["mojmaxtv.hrvatskitelekom.hr",83],["tme.eu",84],["mein-osttirol.rocks",85],["tennessine.co.uk",86],["ultraleds.co.uk",87],["greubelforsey.com",88],["lukify.app",89],["studiobookr.com",90],["getgrass.io",91],["artisan.co",92],["mobilefuse.com",93],["safe.global",[94,214]],["data.carbonmapper.org",95],["avica.link",96],["madeiramadeira.com.br",97],["sberdisk.ru",98],["column.com",99],["iqoption.com",100],["dopesnow.com",101],["montecwear.com",101],["romeo.com",102],["sonyliv.com",[103,104]],["cwallet.com",105],["oneskin.co",106],["telemetr.io",107],["near.org",108],["near.ai",108],["dev.near.org",109],["jito.network",110],["jito.wtf",110],["goodpods.com",111],["pngtree.com",[112,113]],["v2.xmeye.net",114],["venom.foundation",115],["canonvannederland.nl",116],["my-account.storage-mart.com",117],["web.bunq.com",118],["lifesum.com",119],["home.shortcutssoftware.com",120],["klimwinkel.nl",121],["markimicrowave.com",122],["aerolineas.com.ar",123],["5sim.net",123],["fold.dev",124],["mojposao.hr",125],["temu.com",[126,127]],["supreme.com",[128,129]],["g-star.com",130],["sawren.pl",131],["ultrahuman.com",132],["optionsgroup.com",133],["withpersona.com",[134,135]],["trigger.dev",136],["core.app",[137,139]],["zora.co",138],["kokku-online.de",140],["cuba-buddy.de",141],["datamask.app",142],["humandataincome.com",142],["crealitycloud.com",143],["triumphtechnicalinformation.com",144],["businessclass.com",145],["livsstil.se",146],["schneidewind-immobilien.de",147],["textshuttle.com",148],["simpleswap.io",149],["wales.nhs.attendanywhere.com",150],["sacal.it",151],["astondevs.ru",152],["gonxt.com",153],["geomiq.com",154],["bbc.com",155],["galaxy.com",156],["ticketmelon.com",157],["pechinchou.com.br",158],["thehub21.com",159],["archiup.com",160],["autoride.cz",[162,163,164]],["autoride.es",[162,163,164]],["autoride.io",[162,163,164]],["autoride.sk",[162,163,164]],["wunderground.com",165],["baselime.io",166],["eversports.de",[167,168]],["makerz.me",169],["reebok.eu",170],["alfa.com.ec",171],["rts.com.ec",171],["tropicalida.com.ec",171],["owgr.com",[172,173]],["beermerchants.com",174],["saamexe.com",[175,176]],["helium.com",175],["app.bionic-reading.com",177],["nloto.ru",178],["swisstours.com",179],["librinova.com",180],["format.bike",181],["khanacademy.org",182],["etelecinema.hu",183],["konicaminolta.com",184],["soquest.xyz",185],["region-bayreuth.de",186],["nationalexpress.de",187],["eezy.nrw",187],["bahnland-bayern.de",187],["chipcitycookies.com",188],["6amgroup.com",188],["go.bkk.hu",188],["worldlibertyfinancial.com",188],["happiful.com",188],["bazaartracker.com",189],["subscribercounter.com",190],["app.klarna.com",[191,192,193]],["instantspoursoi.fr",194],["thealliance.ai",195],["vivenu.com",196],["librumreader.com",197],["visnos.com",198],["polypane.app",199],["changelly.com",200],["glose.com",201],["yellow.systems",202],["renebieder.com",203],["goodram.com",204],["starwalk.space",205],["vitotechnology.com",205],["codedead.com",206],["studiofabiobiesel.com",207],["fydeos.com",208],["fydeos.io",208],["jove.com",209],["argent.xyz",210],["pixeden.com",211],["akasha.org",212],["ashleyfurniture.com",213],["jibjab.com",215],["filmzie.com",216],["vietjetair.com",217],["kick.com",218],["jimdosite.com",219],["worstbassist.com",219],["cora-broodjes.nl",219],["evernote.com",[220,221]],["octopusenergy.co.jp",222],["findmcserver.com",223],["schneideranwaelte.de",224],["traefik.io",224],["cityfalcon.ai",225],["digitalparking.city",226],["mediathekviewweb.de",227],["solana.com",228],["ef.co.id",229],["alohafromdeer.com",230],["fwd.com",[231,233]],["everywhere.game",232],["geotastic.net",234],["tattoodo.com",[235,236]],["garageproject.co.nz",235],["jmonline.com.br",237],["atlas.workland.com",237],["virginexperiencedays.co.uk",237],["emag.berliner-woche.de",[238,239,240]],["nordkurier.de",[238,239,240]],["everest-24.pl",[241,242]],["sneakerfreaker.com",243],["cryptofalka.hu",243],["walmart.ca",244],["byfood.com",245],["andsafe.de",246],["edostavka.by",247],["emall.by",247],["ishoppurium.com",248],["onexstore.pl",[249,250,251]],["revanced.app",251],["evropochta.by",[252,253]],["inselberlin.de",254],["gronkh.tv",255],["adfilteringdevsummit.com",256],["dailyrevs.com",257],["dsworks.ru",257],["daraz.com",258],["learngerman.dw.com",259],["leeway.tech",260],["gostanford.com",261],["namensetiketten.de",262],["drafthound.com",[263,264]],["wokularach.pl",265],["bidup.amtrak.com",266],["eschuhe.de",267],["zeglins.com",268],["flyingpapers.com",269],["beta.character.ai",[270,271]],["bittimittari.fi",272],["aida64.co.uk",[273,274]],["aida64.com.ua",[273,274]],["aida64.de",[273,274]],["aida64.hu",[273,274]],["aida64.it",[273,274]],["aida64russia.com",[273,274]],["open24.ee",275],["116117.fi",276],["pjspub.com",277],["autodude.dk",278],["autodude.fi",278],["autodude.no",278],["autodude.se",278],["valostore.fi",278],["valostore.no",278],["valostore.se",278],["vivantis.*",279],["vivantis-shop.at",279],["krasa.cz",279],["auf1.tv",280],["wesendit.com",281],["hatch.co",282],["gdh.digital",283],["haberturk.com",284],["ioplus.nl",285],["lahella.fi",286]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { setLocalStorageItem(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
