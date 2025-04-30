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
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
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
const argsList = [["cookieConsent","granted"],["cookie_consent","no"],["psh:cookies-other","false"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookieBarVisible","false"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookiesAccepted","true"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookiePolicy","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps20","1"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["cookie-ack-2","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["notthebee.com",0],["granola.ai",1],["polar.sh",1],["posthog.com",1],["nhnieuws.nl",[2,3,4]],["omroepbrabant.nl",[2,3,4]],["gdh.digital",5],["erlus.com",[6,7]],["bettrfinancing.com",8],["sf-express.com",9],["min.io",10],["gs1.se",[11,12]],["bo3.gg",12],["puregoldprotein.com",[12,77,78]],["spectrumtherapeutics.com",12],["thingtesting.com",12],["streamclipsgermany.de",12],["lemwarm.com",13],["form.fillout.com",14],["keepersecurity.com",15],["esto.eu",16],["ctol.digital",16],["beterbed.nl",17],["crt.hr",18],["code.likeagirl.io",19],["engineering.mixpanel.com",19],["betterprogramming.pub",19],["medium.com",19],["500ish.com",19],["gitconnected.com",19],["bettermarketing.pub",19],["diylifetech.com",19],["thebolditalic.com",19],["writingcooperative.com",19],["fanfare.pub",19],["betterhumans.pub",19],["fvd.nl",20],["cpc2r.ch",21],["metamask.io",22],["chavesnamao.com.br",23],["anhanguera.com",24],["bhaskar.com",25],["novaventa.com",26],["privacy.com.br",27],["supabase.com",28],["app.getgrass.io",29],["sanluisgarbage.com",30],["wildberries.ru",31],["cryptorank.io",32],["springmerchant.com",33],["veed.io",34],["deribit.com",35],["dorkgpt.com",35],["varusteleka.com",35],["zoho.com",36],["femibion.rs",37],["nove.fr",37],["improvethenews.org",38],["plente.com",38],["movies4us.*",38],["popcornmovies.to",38],["villagrancanaria.com",39],["baic.cz",40],["bunq.com",41],["framer.com",41],["inceptionlabs.ai",41],["zave.it",41],["tower.dev",41],["fleksberegner.dk",42],["duty.travel.cl",43],["solscan.io",44],["connorduffy.abundancerei.com",45],["bc.gamem",46],["akkushop-turkiye.com.tr",47],["k33.com",[48,49]],["komdigi.go.id",50],["fijiairways.com",51],["planner.kaboodle.co.nz",52],["pedalcommander.*",53],["sekisuialveo.com",[54,55]],["rightsize.dk",56],["random-group.olafneumann.org",57],["espadrij.com",58],["hygiene-shop.eu",58],["gesundheitsmanufaktur.de",[58,289]],["technikmuseum.berlin",59],["cvut.cz",[60,61,62]],["r-ulybka.ru",63],["voltadol.at",64],["evium.de",65],["hiring.amazon.com",66],["comnet.com.tr",66],["gpuscout.nl",66],["remanga.org",66],["parrotsec.org",66],["shonenjumpplus.com",67],["engeldirekt.de",68],["haleon-gebro.at",[69,70]],["happyplates.com",[71,72]],["ickonic.com",73],["abs-cbn.com",74],["news.abs-cbn.com",74],["opmaatzagen.nl",75],["mundwerk-rottweil.de",75],["sqlook.com",76],["adef-emploi.fr",[79,80]],["lumieresdelaville.net",[79,80]],["ccaf.io",[81,82]],["dbschenkerarkas.com.tr",83],["dbschenker-seino.jp",83],["dbschenker.com",[83,175]],["scinapse.io",84],["shop.ba.com",[85,86]],["uc.pt",87],["bennettrogers.mysight.uk",88],["snipp.gg",88],["leafly.com",89],["geizhals.at",90],["geizhals.de",90],["geizhals.eu",90],["cenowarka.pl",90],["skinflint.co.uk",90],["webhallen.com",[91,92,93]],["olx.com.br",94],["unobike.com",95],["mod.io",96],["passport-photo.online",97],["mojmaxtv.hrvatskitelekom.hr",97],["rodrigue-app.ct.ws",97],["tme.eu",98],["mein-osttirol.rocks",99],["tennessine.co.uk",100],["ultraleds.co.uk",101],["greubelforsey.com",102],["lukify.app",103],["studiobookr.com",104],["getgrass.io",105],["artisan.co",106],["mobilefuse.com",107],["safe.global",[108,228]],["data.carbonmapper.org",109],["avica.link",110],["madeiramadeira.com.br",111],["sberdisk.ru",112],["column.com",113],["iqoption.com",114],["dopesnow.com",115],["montecwear.com",115],["romeo.com",116],["sonyliv.com",[117,118]],["cwallet.com",119],["oneskin.co",120],["telemetr.io",121],["near.org",122],["near.ai",122],["dev.near.org",123],["jito.network",124],["jito.wtf",124],["goodpods.com",125],["pngtree.com",[126,127]],["v2.xmeye.net",128],["venom.foundation",129],["canonvannederland.nl",130],["my-account.storage-mart.com",131],["web.bunq.com",132],["lifesum.com",133],["home.shortcutssoftware.com",134],["klimwinkel.nl",135],["markimicrowave.com",136],["aerolineas.com.ar",137],["5sim.net",137],["fold.dev",138],["mojposao.hr",139],["temu.com",[140,141]],["supreme.com",[142,143]],["g-star.com",144],["sawren.pl",145],["ultrahuman.com",146],["optionsgroup.com",147],["withpersona.com",[148,149]],["trigger.dev",150],["core.app",[151,153]],["zora.co",152],["kokku-online.de",154],["cuba-buddy.de",155],["datamask.app",156],["humandataincome.com",156],["crealitycloud.com",157],["triumphtechnicalinformation.com",158],["businessclass.com",159],["livsstil.se",160],["schneidewind-immobilien.de",161],["textshuttle.com",162],["simpleswap.io",163],["wales.nhs.attendanywhere.com",164],["sacal.it",165],["astondevs.ru",166],["gonxt.com",167],["geomiq.com",168],["bbc.com",169],["galaxy.com",170],["ticketmelon.com",171],["pechinchou.com.br",172],["thehub21.com",173],["archiup.com",174],["autoride.cz",[176,177,178]],["autoride.es",[176,177,178]],["autoride.io",[176,177,178]],["autoride.sk",[176,177,178]],["wunderground.com",179],["baselime.io",180],["eversports.de",[181,182]],["makerz.me",183],["reebok.eu",184],["alfa.com.ec",185],["rts.com.ec",185],["tropicalida.com.ec",185],["owgr.com",[186,187]],["beermerchants.com",188],["saamexe.com",[189,190]],["helium.com",189],["blommerscoffee.shipping-portal.com",189],["app.bionic-reading.com",191],["nloto.ru",192],["swisstours.com",193],["librinova.com",194],["format.bike",195],["khanacademy.org",196],["etelecinema.hu",197],["konicaminolta.com",198],["soquest.xyz",199],["region-bayreuth.de",200],["bahnland-bayern.de",201],["eezy.nrw",201],["nationalexpress.de",201],["chipcitycookies.com",202],["6amgroup.com",202],["go.bkk.hu",202],["worldlibertyfinancial.com",202],["happiful.com",202],["bazaartracker.com",203],["subscribercounter.com",204],["app.klarna.com",[205,206,207]],["instantspoursoi.fr",208],["thealliance.ai",209],["vivenu.com",210],["librumreader.com",211],["visnos.com",212],["polypane.app",213],["changelly.com",214],["glose.com",215],["yellow.systems",216],["renebieder.com",217],["goodram.com",218],["starwalk.space",219],["vitotechnology.com",219],["codedead.com",220],["studiofabiobiesel.com",221],["fydeos.com",222],["fydeos.io",222],["jove.com",223],["argent.xyz",224],["pixeden.com",225],["akasha.org",226],["ashleyfurniture.com",227],["jibjab.com",229],["filmzie.com",230],["vietjetair.com",231],["kick.com",232],["cora-broodjes.nl",233],["jimdosite.com",233],["worstbassist.com",233],["evernote.com",[234,235]],["octopusenergy.co.jp",236],["findmcserver.com",237],["schneideranwaelte.de",238],["traefik.io",238],["cityfalcon.ai",239],["digitalparking.city",240],["mediathekviewweb.de",241],["solana.com",242],["ef.co.id",243],["alohafromdeer.com",244],["fwd.com",[245,247]],["everywhere.game",246],["geotastic.net",248],["garageproject.co.nz",249],["tattoodo.com",[249,250]],["jmonline.com.br",251],["atlas.workland.com",251],["virginexperiencedays.co.uk",251],["emag.berliner-woche.de",[252,253,254]],["nordkurier.de",[252,253,254]],["everest-24.pl",[255,256]],["sneakerfreaker.com",257],["cryptofalka.hu",257],["walmart.ca",258],["byfood.com",259],["andsafe.de",260],["edostavka.by",261],["emall.by",261],["ishoppurium.com",262],["onexstore.pl",[263,264,265]],["revanced.app",265],["evropochta.by",[266,267]],["inselberlin.de",268],["gronkh.tv",269],["adfilteringdevsummit.com",270],["dailyrevs.com",271],["dsworks.ru",271],["daraz.com",272],["learngerman.dw.com",273],["leeway.tech",274],["gostanford.com",275],["namensetiketten.de",276],["drafthound.com",[277,278]],["wokularach.pl",279],["bidup.amtrak.com",280],["eschuhe.de",281],["zeglins.com",282],["flyingpapers.com",283],["beta.character.ai",[284,285]],["bittimittari.fi",286],["aida64.co.uk",[287,288]],["aida64.com.ua",[287,288]],["aida64.de",[287,288]],["aida64.hu",[287,288]],["aida64.it",[287,288]],["aida64russia.com",[287,288]],["open24.ee",289],["116117.fi",290],["pjspub.com",291],["autodude.dk",292],["autodude.fi",292],["autodude.no",292],["autodude.se",292],["valostore.fi",292],["valostore.no",292],["valostore.se",292],["vivantis.*",293],["vivantis-shop.at",293],["krasa.cz",293],["auf1.tv",294],["wesendit.com",295],["hatch.co",296],["haberturk.com",297],["spaseekers.com",298],["incomeshares.com",299],["surnamedb.com",300],["pizzadelight-menu.co.uk",301],["ioplus.nl",302],["lahella.fi",303]]);
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
