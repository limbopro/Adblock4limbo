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
const argsList = [["CookieConsent--hideCookieConsent","true"],["cookieConsent","granted"],["cookie_consent","no"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["teamtailor.com",0],["notthebee.com",1],["granola.ai",2],["polar.sh",2],["posthog.com",2],["hatchet.run",2],["nhnieuws.nl",[3,5,6]],["omroepbrabant.nl",[3,5,6]],["cape.co",4],["asianet.co.id",7],["p2p.land",7],["netbank.avida.no",7],["bo3.gg",7],["gs1.se",[7,31]],["puregoldprotein.com",[7,95,96]],["spectrumtherapeutics.com",7],["thingtesting.com",7],["streamclipsgermany.de",7],["kundenportal.harzenergie.de",7],["giselles.ai",8],["i-fundusze.pl",9],["improvethenews.org",9],["plente.com",9],["movies4us.*",9],["popcornmovies.to",9],["arkanium.serveminecraft.net",10],["bananacraft.serveminecraft.net",10],["myoffers.smartbuy.hdfcbank.com",11],["grass.io",[12,13]],["lustery.com",14],["ecoints.com",15],["emergetools.com",16],["receptagemini.pl",17],["bw.vdk.de",[18,19,20]],["search.odin.io",21],["gdh.digital",22],["popmart.com",23],["rozklady.bielsko.pl",24],["typeform.com",25],["erlus.com",[26,27]],["bettrfinancing.com",28],["sf-express.com",29],["min.io",30],["lemwarm.com",32],["form.fillout.com",33],["keepersecurity.com",34],["esto.eu",35],["ctol.digital",35],["beterbed.nl",36],["crt.hr",37],["code.likeagirl.io",38],["engineering.mixpanel.com",38],["betterprogramming.pub",38],["medium.com",38],["500ish.com",38],["gitconnected.com",38],["bettermarketing.pub",38],["diylifetech.com",38],["thebolditalic.com",38],["writingcooperative.com",38],["fanfare.pub",38],["betterhumans.pub",38],["fvd.nl",39],["cpc2r.ch",40],["metamask.io",41],["chavesnamao.com.br",42],["anhanguera.com",43],["bhaskar.com",44],["novaventa.com",45],["privacy.com.br",46],["supabase.com",47],["app.getgrass.io",48],["sanluisgarbage.com",49],["wildberries.ru",50],["cryptorank.io",51],["springmerchant.com",52],["veed.io",53],["deribit.com",54],["dorkgpt.com",54],["varusteleka.com",54],["lazyrecords.app",54],["zoho.com",55],["femibion.rs",56],["nove.fr",56],["metro1.com.br",56],["villagrancanaria.com",57],["baic.cz",58],["bunq.com",59],["framer.com",59],["inceptionlabs.ai",59],["zave.it",59],["tower.dev",59],["fleksberegner.dk",60],["duty.travel.cl",61],["solscan.io",62],["connorduffy.abundancerei.com",63],["bc.gamem",64],["akkushop-turkiye.com.tr",65],["k33.com",[66,67]],["komdigi.go.id",68],["fijiairways.com",69],["planner.kaboodle.co.nz",70],["pedalcommander.*",71],["sekisuialveo.com",[72,73]],["rightsize.dk",74],["random-group.olafneumann.org",75],["espadrij.com",76],["hygiene-shop.eu",76],["gesundheitsmanufaktur.de",[76,313]],["technikmuseum.berlin",77],["cvut.cz",[78,79,80]],["r-ulybka.ru",81],["voltadol.at",82],["evium.de",83],["hiring.amazon.com",84],["comnet.com.tr",84],["gpuscout.nl",84],["remanga.org",84],["parrotsec.org",84],["estrelabet.bet.br",84],["shonenjumpplus.com",85],["engeldirekt.de",86],["haleon-gebro.at",[87,88]],["happyplates.com",[89,90]],["ickonic.com",91],["abs-cbn.com",92],["news.abs-cbn.com",92],["opmaatzagen.nl",93],["mundwerk-rottweil.de",93],["sqlook.com",94],["adef-emploi.fr",[97,98]],["lumieresdelaville.net",[97,98]],["ccaf.io",[99,100]],["dbschenkerarkas.com.tr",101],["dbschenker-seino.jp",101],["dbschenker.com",[101,198]],["scinapse.io",102],["shop.ba.com",[103,104]],["uc.pt",105],["bennettrogers.mysight.uk",106],["snipp.gg",106],["leafly.com",107],["geizhals.at",108],["geizhals.de",108],["geizhals.eu",108],["cenowarka.pl",108],["skinflint.co.uk",108],["webhallen.com",[109,110,111]],["olx.com.br",112],["unobike.com",113],["mod.io",114],["passport-photo.online",115],["mojmaxtv.hrvatskitelekom.hr",115],["rodrigue-app.ct.ws",115],["tme.eu",116],["mein-osttirol.rocks",117],["tennessine.co.uk",118],["ultraleds.co.uk",119],["greubelforsey.com",120],["lukify.app",121],["studiobookr.com",122],["getgrass.io",123],["artisan.co",124],["mobilefuse.com",125],["safe.global",[126,250]],["data.carbonmapper.org",127],["avica.link",128],["madeiramadeira.com.br",129],["sberdisk.ru",130],["column.com",131],["iqoption.com",132],["dopesnow.com",133],["montecwear.com",133],["romeo.com",134],["sonyliv.com",[135,136]],["cwallet.com",137],["oneskin.co",138],["telemetr.io",139],["near.org",140],["near.ai",140],["dev.near.org",141],["jito.network",142],["jito.wtf",142],["goodpods.com",143],["pngtree.com",[144,145]],["rhein-pfalz-kreis.de",[146,147,148,149,150]],["idar-oberstein.de",[146,147,148,149]],["vogelsbergkreis.de",[146,147,148,149]],["v2.xmeye.net",151],["venom.foundation",152],["canonvannederland.nl",153],["my-account.storage-mart.com",154],["web.bunq.com",155],["lifesum.com",156],["home.shortcutssoftware.com",157],["klimwinkel.nl",158],["markimicrowave.com",159],["aerolineas.com.ar",160],["5sim.net",160],["fold.dev",161],["mojposao.hr",162],["temu.com",[163,164]],["supreme.com",[165,166]],["g-star.com",167],["sawren.pl",168],["ultrahuman.com",169],["optionsgroup.com",170],["withpersona.com",[171,172]],["trigger.dev",173],["core.app",[174,176]],["zora.co",175],["kokku-online.de",177],["cuba-buddy.de",178],["datamask.app",179],["humandataincome.com",179],["crealitycloud.com",180],["triumphtechnicalinformation.com",181],["businessclass.com",182],["livsstil.se",183],["schneidewind-immobilien.de",184],["textshuttle.com",185],["simpleswap.io",186],["wales.nhs.attendanywhere.com",187],["sacal.it",188],["astondevs.ru",189],["gonxt.com",190],["geomiq.com",191],["bbc.com",192],["galaxy.com",193],["ticketmelon.com",194],["pechinchou.com.br",195],["thehub21.com",196],["archiup.com",197],["autoride.cz",[199,200,201]],["autoride.es",[199,200,201]],["autoride.io",[199,200,201]],["autoride.sk",[199,200,201]],["wunderground.com",202],["baselime.io",203],["eversports.de",[204,205]],["makerz.me",206],["reebok.eu",207],["alfa.com.ec",208],["rts.com.ec",208],["tropicalida.com.ec",208],["owgr.com",[209,210]],["beermerchants.com",211],["saamexe.com",[212,213]],["helium.com",212],["blommerscoffee.shipping-portal.com",212],["app.bionic-reading.com",214],["nloto.ru",215],["swisstours.com",216],["librinova.com",217],["format.bike",218],["khanacademy.org",219],["etelecinema.hu",220],["konicaminolta.com",221],["soquest.xyz",222],["region-bayreuth.de",223],["bahnland-bayern.de",224],["eezy.nrw",224],["nationalexpress.de",224],["chipcitycookies.com",225],["6amgroup.com",225],["go.bkk.hu",225],["worldlibertyfinancial.com",225],["happiful.com",225],["bazaartracker.com",226],["subscribercounter.com",227],["app.klarna.com",[228,229,230]],["instantspoursoi.fr",231],["thealliance.ai",232],["librumreader.com",233],["visnos.com",234],["polypane.app",235],["changelly.com",236],["glose.com",237],["yellow.systems",238],["renebieder.com",239],["goodram.com",240],["starwalk.space",241],["vitotechnology.com",241],["codedead.com",242],["studiofabiobiesel.com",243],["fydeos.com",244],["fydeos.io",244],["jove.com",245],["argent.xyz",246],["pixeden.com",247],["akasha.org",248],["ashleyfurniture.com",249],["jibjab.com",251],["filmzie.com",252],["vietjetair.com",253],["kick.com",254],["cora-broodjes.nl",255],["jimdosite.com",255],["worstbassist.com",255],["evernote.com",[256,257,327]],["octopusenergy.co.jp",258],["findmcserver.com",259],["schneideranwaelte.de",260],["traefik.io",260],["cityfalcon.ai",261],["digitalparking.city",262],["mediathekviewweb.de",263],["solana.com",264],["ef.co.id",265],["alohafromdeer.com",266],["fwd.com",[267,269]],["everywhere.game",268],["geotastic.net",270],["garageproject.co.nz",271],["tattoodo.com",[271,272]],["jmonline.com.br",273],["atlas.workland.com",273],["virginexperiencedays.co.uk",273],["emag.berliner-woche.de",[274,275,276]],["nordkurier.de",[274,275,276]],["everest-24.pl",[277,278]],["sneakerfreaker.com",279],["cryptofalka.hu",279],["walmart.ca",280],["byfood.com",281],["andsafe.de",282],["edostavka.by",283],["emall.by",283],["ishoppurium.com",284],["baseblocks.tenereteam.com",285],["onexstore.pl",[286,287,288]],["revanced.app",288],["evropochta.by",[289,290]],["inselberlin.de",291],["gronkh.tv",292],["adfilteringdevsummit.com",293],["dailyrevs.com",294],["dsworks.ru",294],["daraz.com",295],["learngerman.dw.com",296],["leeway.tech",297],["gostanford.com",298],["namensetiketten.de",299],["drafthound.com",[300,301]],["wokularach.pl",302],["bidup.amtrak.com",303],["eschuhe.de",304],["zeglins.com",305],["flyingpapers.com",306],["beta.character.ai",[307,308]],["bittimittari.fi",309],["aida64.co.uk",[310,311]],["aida64.com.ua",[310,311]],["aida64.de",[310,311]],["aida64.hu",[310,311]],["aida64.it",[310,311]],["aida64russia.com",[310,311]],["116.ru",312],["14.ru",312],["161.ru",312],["164.ru",312],["173.ru",312],["178.ru",312],["26.ru",312],["29.ru",312],["35.ru",312],["43.ru",312],["45.ru",312],["48.ru",312],["51.ru",312],["53.ru",312],["56.ru",312],["59.ru",312],["60.ru",312],["63.ru",312],["68.ru",312],["71.ru",312],["72.ru",312],["74.ru",312],["76.ru",312],["86.ru",312],["89.ru",312],["93.ru",312],["chita.ru",312],["e1.ru",312],["fontanka.ru",312],["ircity.ru",312],["izh1.ru",312],["mgorsk.ru",312],["msk1.ru",312],["ngs.ru",312],["ngs22.ru",312],["ngs24.ru",312],["ngs42.ru",312],["ngs55.ru",312],["ngs70.ru",312],["nn.ru",312],["sochi1.ru",312],["sterlitamak1.ru",312],["tolyatty.ru",312],["ufa1.ru",312],["v1.ru",312],["vladivostok1.ru",312],["voronezh1.ru",312],["ya62.ru",312],["open24.ee",313],["116117.fi",314],["pjspub.com",315],["autodude.dk",316],["autodude.fi",316],["autodude.no",316],["autodude.se",316],["valostore.fi",316],["valostore.no",316],["valostore.se",316],["vivantis.*",317],["vivantis-shop.at",317],["krasa.cz",317],["auf1.tv",318],["wesendit.com",319],["hatch.co",320],["haberturk.com",321],["spaseekers.com",322],["incomeshares.com",323],["surnamedb.com",324],["pizzadelight-menu.co.uk",325],["ioplus.nl",326],["lahella.fi",328]]);
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
