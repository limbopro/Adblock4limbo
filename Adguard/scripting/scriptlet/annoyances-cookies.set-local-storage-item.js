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
const argsList = [["cookieConsent","granted"],["cookie_consent","no"],["psh:cookies-other","false"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["allowFunctionalCookies","false"],["cookiesAccepted","true"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookiePolicy","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps20","1"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["cookie-ack-2","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie_accepted","-1"],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["consentInteraction","true"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["notthebee.com",0],["granola.ai",1],["posthog.com",1],["polar.sh",1],["nhnieuws.nl",[2,3,4]],["omroepbrabant.nl",[2,3,4]],["erlus.com",[5,6]],["gs1.se",[7,8]],["spectrumtherapeutics.com",8],["puregoldprotein.com",[8,73,74]],["thingtesting.com",8],["streamclipsgermany.de",8],["bo3.gg",8],["lemwarm.com",9],["form.fillout.com",10],["keepersecurity.com",11],["esto.eu",12],["ctol.digital",12],["beterbed.nl",13],["crt.hr",14],["code.likeagirl.io",15],["engineering.mixpanel.com",15],["betterprogramming.pub",15],["medium.com",15],["500ish.com",15],["gitconnected.com",15],["bettermarketing.pub",15],["diylifetech.com",15],["thebolditalic.com",15],["writingcooperative.com",15],["fanfare.pub",15],["betterhumans.pub",15],["fvd.nl",16],["cpc2r.ch",17],["metamask.io",18],["chavesnamao.com.br",19],["anhanguera.com",20],["bhaskar.com",21],["novaventa.com",22],["privacy.com.br",23],["supabase.com",24],["app.getgrass.io",25],["sanluisgarbage.com",26],["wildberries.ru",27],["cryptorank.io",28],["springmerchant.com",29],["veed.io",30],["varusteleka.com",31],["deribit.com",31],["dorkgpt.com",31],["zoho.com",32],["femibion.rs",33],["nove.fr",33],["movies4us.*",34],["popcornmovies.to",34],["improvethenews.org",34],["plente.com",34],["villagrancanaria.com",35],["baic.cz",36],["bunq.com",37],["framer.com",37],["inceptionlabs.ai",37],["zave.it",37],["tower.dev",37],["fleksberegner.dk",38],["duty.travel.cl",39],["solscan.io",40],["connorduffy.abundancerei.com",41],["bc.gamem",42],["akkushop-turkiye.com.tr",43],["k33.com",[44,45]],["komdigi.go.id",46],["fijiairways.com",47],["planner.kaboodle.co.nz",48],["pedalcommander.*",49],["sekisuialveo.com",[50,51]],["rightsize.dk",52],["random-group.olafneumann.org",53],["espadrij.com",54],["hygiene-shop.eu",54],["gesundheitsmanufaktur.de",[54,285]],["technikmuseum.berlin",55],["cvut.cz",[56,57,58]],["r-ulybka.ru",59],["voltadol.at",60],["evium.de",61],["gpuscout.nl",62],["remanga.org",62],["comnet.com.tr",62],["auth.hiring.amazon.com",62],["parrotsec.org",62],["shonenjumpplus.com",63],["engeldirekt.de",64],["haleon-gebro.at",[65,66]],["happyplates.com",[67,68]],["ickonic.com",69],["abs-cbn.com",70],["news.abs-cbn.com",70],["opmaatzagen.nl",71],["mundwerk-rottweil.de",71],["sqlook.com",72],["adef-emploi.fr",[75,76]],["lumieresdelaville.net",[75,76]],["ccaf.io",[77,78]],["dbschenkerarkas.com.tr",79],["dbschenker-seino.jp",79],["dbschenker.com",[79,171]],["scinapse.io",80],["shop.ba.com",[81,82]],["uc.pt",83],["bennettrogers.mysight.uk",84],["snipp.gg",84],["leafly.com",85],["geizhals.at",86],["geizhals.de",86],["geizhals.eu",86],["cenowarka.pl",86],["skinflint.co.uk",86],["webhallen.com",[87,88,89]],["olx.com.br",90],["unobike.com",91],["mod.io",92],["rodrigue-app.ct.ws",93],["passport-photo.online",93],["mojmaxtv.hrvatskitelekom.hr",93],["tme.eu",94],["mein-osttirol.rocks",95],["tennessine.co.uk",96],["ultraleds.co.uk",97],["greubelforsey.com",98],["lukify.app",99],["studiobookr.com",100],["getgrass.io",101],["artisan.co",102],["mobilefuse.com",103],["safe.global",[104,224]],["data.carbonmapper.org",105],["avica.link",106],["madeiramadeira.com.br",107],["sberdisk.ru",108],["column.com",109],["iqoption.com",110],["dopesnow.com",111],["montecwear.com",111],["romeo.com",112],["sonyliv.com",[113,114]],["cwallet.com",115],["oneskin.co",116],["telemetr.io",117],["near.org",118],["near.ai",118],["dev.near.org",119],["jito.network",120],["jito.wtf",120],["goodpods.com",121],["pngtree.com",[122,123]],["v2.xmeye.net",124],["venom.foundation",125],["canonvannederland.nl",126],["my-account.storage-mart.com",127],["web.bunq.com",128],["lifesum.com",129],["home.shortcutssoftware.com",130],["klimwinkel.nl",131],["markimicrowave.com",132],["aerolineas.com.ar",133],["5sim.net",133],["fold.dev",134],["mojposao.hr",135],["temu.com",[136,137]],["supreme.com",[138,139]],["g-star.com",140],["sawren.pl",141],["ultrahuman.com",142],["optionsgroup.com",143],["withpersona.com",[144,145]],["trigger.dev",146],["core.app",[147,149]],["zora.co",148],["kokku-online.de",150],["cuba-buddy.de",151],["datamask.app",152],["humandataincome.com",152],["crealitycloud.com",153],["triumphtechnicalinformation.com",154],["businessclass.com",155],["livsstil.se",156],["schneidewind-immobilien.de",157],["textshuttle.com",158],["simpleswap.io",159],["wales.nhs.attendanywhere.com",160],["sacal.it",161],["astondevs.ru",162],["gonxt.com",163],["geomiq.com",164],["bbc.com",165],["galaxy.com",166],["ticketmelon.com",167],["pechinchou.com.br",168],["thehub21.com",169],["archiup.com",170],["autoride.cz",[172,173,174]],["autoride.es",[172,173,174]],["autoride.io",[172,173,174]],["autoride.sk",[172,173,174]],["wunderground.com",175],["baselime.io",176],["eversports.de",[177,178]],["makerz.me",179],["reebok.eu",180],["alfa.com.ec",181],["rts.com.ec",181],["tropicalida.com.ec",181],["owgr.com",[182,183]],["beermerchants.com",184],["saamexe.com",[185,186]],["helium.com",185],["app.bionic-reading.com",187],["nloto.ru",188],["swisstours.com",189],["librinova.com",190],["format.bike",191],["khanacademy.org",192],["etelecinema.hu",193],["konicaminolta.com",194],["soquest.xyz",195],["region-bayreuth.de",196],["nationalexpress.de",197],["eezy.nrw",197],["bahnland-bayern.de",197],["chipcitycookies.com",198],["6amgroup.com",198],["go.bkk.hu",198],["worldlibertyfinancial.com",198],["happiful.com",198],["bazaartracker.com",199],["subscribercounter.com",200],["app.klarna.com",[201,202,203]],["instantspoursoi.fr",204],["thealliance.ai",205],["vivenu.com",206],["librumreader.com",207],["visnos.com",208],["polypane.app",209],["changelly.com",210],["glose.com",211],["yellow.systems",212],["renebieder.com",213],["goodram.com",214],["starwalk.space",215],["vitotechnology.com",215],["codedead.com",216],["studiofabiobiesel.com",217],["fydeos.com",218],["fydeos.io",218],["jove.com",219],["argent.xyz",220],["pixeden.com",221],["akasha.org",222],["ashleyfurniture.com",223],["jibjab.com",225],["filmzie.com",226],["vietjetair.com",227],["kick.com",228],["jimdosite.com",229],["worstbassist.com",229],["cora-broodjes.nl",229],["evernote.com",[230,231]],["octopusenergy.co.jp",232],["findmcserver.com",233],["schneideranwaelte.de",234],["traefik.io",234],["cityfalcon.ai",235],["digitalparking.city",236],["mediathekviewweb.de",237],["solana.com",238],["ef.co.id",239],["alohafromdeer.com",240],["fwd.com",[241,243]],["everywhere.game",242],["geotastic.net",244],["tattoodo.com",[245,246]],["garageproject.co.nz",245],["jmonline.com.br",247],["atlas.workland.com",247],["virginexperiencedays.co.uk",247],["emag.berliner-woche.de",[248,249,250]],["nordkurier.de",[248,249,250]],["everest-24.pl",[251,252]],["sneakerfreaker.com",253],["cryptofalka.hu",253],["walmart.ca",254],["byfood.com",255],["andsafe.de",256],["edostavka.by",257],["emall.by",257],["ishoppurium.com",258],["onexstore.pl",[259,260,261]],["revanced.app",261],["evropochta.by",[262,263]],["inselberlin.de",264],["gronkh.tv",265],["adfilteringdevsummit.com",266],["dailyrevs.com",267],["dsworks.ru",267],["daraz.com",268],["learngerman.dw.com",269],["leeway.tech",270],["gostanford.com",271],["namensetiketten.de",272],["drafthound.com",[273,274]],["wokularach.pl",275],["bidup.amtrak.com",276],["eschuhe.de",277],["zeglins.com",278],["flyingpapers.com",279],["beta.character.ai",[280,281]],["bittimittari.fi",282],["aida64.co.uk",[283,284]],["aida64.com.ua",[283,284]],["aida64.de",[283,284]],["aida64.hu",[283,284]],["aida64.it",[283,284]],["aida64russia.com",[283,284]],["open24.ee",285],["116117.fi",286],["pjspub.com",287],["autodude.dk",288],["autodude.fi",288],["autodude.no",288],["autodude.se",288],["valostore.fi",288],["valostore.no",288],["valostore.se",288],["vivantis.*",289],["vivantis-shop.at",289],["krasa.cz",289],["auf1.tv",290],["wesendit.com",291],["hatch.co",292],["gdh.digital",293],["haberturk.com",294],["spaseekers.com",295],["incomeshares.com",296],["ioplus.nl",297],["lahella.fi",298]]);
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
