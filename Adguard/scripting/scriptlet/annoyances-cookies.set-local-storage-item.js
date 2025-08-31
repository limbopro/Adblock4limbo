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
const argsList = [["CookieConsent--hideCookieConsent","true"],["consent","false"],["cookieConsent","granted"],["hide-legal","1"],["cookie_consent","denied"],["cookies-toast-shown","true"],["show_consent_modal","1"],["SITE_2609202-COOKIE-BANNER","1"],["COOKIE_CONSENT","no"],["cookie_consent","true"],["df-cookies-allowed","true"],["cookie_consent","no"],["mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"],["isCookieAccepted","true"],["cookies-pref","[]"],["cookiesAccepted","false"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["teamtailor.com",0],["dewesoft.com",1],["notthebee.com",2],["wifiman.com",3],["vibeslist.ai",4],["mangalib.me",5],["anilib.me",5],["animelib.org",5],["hentailib.me",5],["hentailib.org",5],["mangalib.org",5],["ranobelib.me",5],["negrasport.pl",6],["pancernik.eu",[6,10]],["mobilelegends.com",7],["manuals.annafreud.org",8],["ketogo.app",9],["schneideranwaelte.de",9],["traefik.io",9],["gesundheitsmanufaktur.de",[10,93]],["open24.ee",10],["granola.ai",11],["polar.sh",11],["posthog.com",11],["hatchet.run",11],["zeta-ai.io",12],["fiyat.mercedes-benz.com.tr",13],["sportbooking.info",14],["photo.codes",15],["filmzie.com",15],["granado.com.br",16],["sunnyside.shop",[17,18,19]],["nhnieuws.nl",[20,22,23]],["omroepbrabant.nl",[20,22,23]],["cape.co",21],["asianet.co.id",24],["p2p.land",24],["netbank.avida.no",24],["bo3.gg",24],["gs1.se",[24,48]],["puregoldprotein.com",[24,112,113]],["spectrumtherapeutics.com",24],["thingtesting.com",24],["streamclipsgermany.de",24],["kundenportal.harzenergie.de",24],["giselles.ai",25],["i-fundusze.pl",26],["improvethenews.org",26],["plente.com",26],["movies4us.*",26],["popcornmovies.to",26],["arkanium.serveminecraft.net",27],["bananacraft.serveminecraft.net",27],["myoffers.smartbuy.hdfcbank.com",28],["grass.io",[29,30]],["lustery.com",31],["ecoints.com",32],["emergetools.com",33],["receptagemini.pl",34],["bw.vdk.de",[35,36,37]],["search.odin.io",38],["gdh.digital",39],["popmart.com",40],["rozklady.bielsko.pl",41],["typeform.com",42],["erlus.com",[43,44]],["bettrfinancing.com",45],["sf-express.com",46],["min.io",47],["lemwarm.com",49],["form.fillout.com",50],["keepersecurity.com",51],["esto.eu",52],["ctol.digital",52],["beterbed.nl",53],["crt.hr",54],["code.likeagirl.io",55],["engineering.mixpanel.com",55],["betterprogramming.pub",55],["medium.com",55],["500ish.com",55],["gitconnected.com",55],["bettermarketing.pub",55],["diylifetech.com",55],["thebolditalic.com",55],["writingcooperative.com",55],["fanfare.pub",55],["betterhumans.pub",55],["fvd.nl",56],["cpc2r.ch",57],["metamask.io",58],["chavesnamao.com.br",59],["anhanguera.com",60],["bhaskar.com",61],["novaventa.com",62],["privacy.com.br",63],["supabase.com",64],["app.getgrass.io",65],["sanluisgarbage.com",66],["wildberries.ru",67],["cryptorank.io",68],["springmerchant.com",69],["veed.io",70],["deribit.com",71],["dorkgpt.com",71],["kyutai.org",71],["varusteleka.com",71],["lazyrecords.app",71],["unmute.sh",71],["zoho.com",72],["femibion.rs",73],["nove.fr",73],["metro1.com.br",73],["villagrancanaria.com",74],["baic.cz",75],["bunq.com",76],["framer.com",76],["inceptionlabs.ai",76],["zave.it",76],["tower.dev",76],["fleksberegner.dk",77],["duty.travel.cl",78],["solscan.io",79],["connorduffy.abundancerei.com",80],["bc.gamem",81],["akkushop-turkiye.com.tr",82],["k33.com",[83,84]],["komdigi.go.id",85],["fijiairways.com",86],["planner.kaboodle.co.nz",87],["pedalcommander.*",88],["sekisuialveo.com",[89,90]],["rightsize.dk",91],["random-group.olafneumann.org",92],["espadrij.com",93],["hygiene-shop.eu",93],["technikmuseum.berlin",94],["cvut.cz",[95,96,97]],["r-ulybka.ru",98],["voltadol.at",99],["evium.de",100],["hiring.amazon.com",101],["comnet.com.tr",101],["gpuscout.nl",101],["remanga.org",101],["parrotsec.org",101],["estrelabet.bet.br",101],["shonenjumpplus.com",102],["engeldirekt.de",103],["haleon-gebro.at",[104,105]],["happyplates.com",[106,107]],["ickonic.com",108],["abs-cbn.com",109],["news.abs-cbn.com",109],["opmaatzagen.nl",110],["mundwerk-rottweil.de",110],["sqlook.com",111],["adef-emploi.fr",[114,115]],["lumieresdelaville.net",[114,115]],["ccaf.io",[116,117]],["dbschenkerarkas.com.tr",118],["dbschenker-seino.jp",118],["dbschenker.com",[118,215]],["scinapse.io",119],["shop.ba.com",[120,121]],["uc.pt",122],["bennettrogers.mysight.uk",123],["snipp.gg",123],["leafly.com",124],["geizhals.at",125],["geizhals.de",125],["geizhals.eu",125],["cenowarka.pl",125],["skinflint.co.uk",125],["webhallen.com",[126,127,128]],["olx.com.br",129],["unobike.com",130],["mod.io",131],["passport-photo.online",132],["mojmaxtv.hrvatskitelekom.hr",132],["rodrigue-app.ct.ws",132],["tme.eu",133],["mein-osttirol.rocks",134],["tennessine.co.uk",135],["ultraleds.co.uk",136],["greubelforsey.com",137],["lukify.app",138],["studiobookr.com",139],["getgrass.io",140],["artisan.co",141],["mobilefuse.com",142],["safe.global",[143,267]],["data.carbonmapper.org",144],["avica.link",145],["madeiramadeira.com.br",146],["sberdisk.ru",147],["column.com",148],["iqoption.com",149],["dopesnow.com",150],["montecwear.com",150],["romeo.com",151],["sonyliv.com",[152,153]],["cwallet.com",154],["oneskin.co",155],["telemetr.io",156],["near.org",157],["near.ai",157],["dev.near.org",158],["jito.network",159],["jito.wtf",159],["goodpods.com",160],["pngtree.com",[161,162]],["rhein-pfalz-kreis.de",[163,164,165,166,167]],["idar-oberstein.de",[163,164,165,166]],["vogelsbergkreis.de",[163,164,165,166]],["chamaeleon.de",[165,338]],["v2.xmeye.net",168],["venom.foundation",169],["canonvannederland.nl",170],["my-account.storage-mart.com",171],["web.bunq.com",172],["lifesum.com",173],["home.shortcutssoftware.com",174],["klimwinkel.nl",175],["markimicrowave.com",176],["aerolineas.com.ar",177],["5sim.net",177],["fold.dev",178],["mojposao.hr",179],["temu.com",[180,181]],["supreme.com",[182,183]],["g-star.com",184],["sawren.pl",185],["ultrahuman.com",186],["optionsgroup.com",187],["withpersona.com",[188,189]],["trigger.dev",190],["core.app",[191,193]],["zora.co",192],["kokku-online.de",194],["cuba-buddy.de",195],["datamask.app",196],["humandataincome.com",196],["crealitycloud.com",197],["triumphtechnicalinformation.com",198],["businessclass.com",199],["livsstil.se",200],["schneidewind-immobilien.de",201],["textshuttle.com",202],["simpleswap.io",203],["wales.nhs.attendanywhere.com",204],["sacal.it",205],["astondevs.ru",206],["gonxt.com",207],["geomiq.com",208],["bbc.com",209],["galaxy.com",210],["ticketmelon.com",211],["pechinchou.com.br",212],["thehub21.com",213],["archiup.com",214],["autoride.cz",[216,217,218]],["autoride.es",[216,217,218]],["autoride.io",[216,217,218]],["autoride.sk",[216,217,218]],["wunderground.com",219],["baselime.io",220],["eversports.de",[221,222]],["makerz.me",223],["reebok.eu",224],["alfa.com.ec",225],["rts.com.ec",225],["tropicalida.com.ec",225],["owgr.com",[226,227]],["beermerchants.com",228],["saamexe.com",[229,230]],["helium.com",229],["blommerscoffee.shipping-portal.com",229],["app.bionic-reading.com",231],["nloto.ru",232],["swisstours.com",233],["librinova.com",234],["format.bike",235],["khanacademy.org",236],["etelecinema.hu",237],["konicaminolta.com",238],["soquest.xyz",239],["region-bayreuth.de",240],["bahnland-bayern.de",241],["eezy.nrw",241],["nationalexpress.de",241],["sumupbookings.com",242],["chipcitycookies.com",242],["6amgroup.com",242],["go.bkk.hu",242],["worldlibertyfinancial.com",242],["happiful.com",242],["bazaartracker.com",243],["subscribercounter.com",244],["app.klarna.com",[245,246,247]],["instantspoursoi.fr",248],["thealliance.ai",249],["librumreader.com",250],["visnos.com",251],["polypane.app",252],["changelly.com",253],["glose.com",254],["yellow.systems",255],["renebieder.com",256],["goodram.com",257],["starwalk.space",258],["vitotechnology.com",258],["codedead.com",259],["studiofabiobiesel.com",260],["fydeos.com",261],["fydeos.io",261],["jove.com",262],["argent.xyz",263],["pixeden.com",264],["akasha.org",265],["ashleyfurniture.com",266],["jibjab.com",268],["vietjetair.com",269],["kick.com",270],["cora-broodjes.nl",271],["jimdosite.com",271],["worstbassist.com",271],["evernote.com",[272,273,342]],["octopusenergy.co.jp",274],["findmcserver.com",275],["cityfalcon.ai",276],["digitalparking.city",277],["mediathekviewweb.de",278],["solana.com",279],["ef.co.id",280],["alohafromdeer.com",281],["fwd.com",[282,284]],["everywhere.game",283],["geotastic.net",285],["garageproject.co.nz",286],["tattoodo.com",[286,287]],["jmonline.com.br",288],["atlas.workland.com",288],["virginexperiencedays.co.uk",288],["emag.berliner-woche.de",[289,290,291]],["nordkurier.de",[289,290,291]],["everest-24.pl",[292,293]],["sneakerfreaker.com",294],["cryptofalka.hu",294],["walmart.ca",295],["byfood.com",296],["andsafe.de",297],["edostavka.by",298],["emall.by",298],["ishoppurium.com",299],["baseblocks.tenereteam.com",300],["onexstore.pl",[301,302,303]],["revanced.app",303],["evropochta.by",[304,305]],["inselberlin.de",306],["gronkh.tv",307],["adfilteringdevsummit.com",308],["dailyrevs.com",309],["dsworks.ru",309],["daraz.com",310],["learngerman.dw.com",311],["leeway.tech",312],["gostanford.com",313],["namensetiketten.de",314],["drafthound.com",[315,316]],["wokularach.pl",317],["bidup.amtrak.com",318],["eschuhe.de",319],["zeglins.com",320],["flyingpapers.com",321],["beta.character.ai",[322,323]],["bittimittari.fi",324],["aida64.co.uk",[325,326]],["aida64.com.ua",[325,326]],["aida64.de",[325,326]],["aida64.hu",[325,326]],["aida64.it",[325,326]],["aida64russia.com",[325,326]],["116.ru",327],["14.ru",327],["161.ru",327],["164.ru",327],["173.ru",327],["178.ru",327],["26.ru",327],["29.ru",327],["35.ru",327],["43.ru",327],["45.ru",327],["48.ru",327],["51.ru",327],["53.ru",327],["56.ru",327],["59.ru",327],["60.ru",327],["63.ru",327],["68.ru",327],["71.ru",327],["72.ru",327],["74.ru",327],["76.ru",327],["86.ru",327],["89.ru",327],["93.ru",327],["chita.ru",327],["e1.ru",327],["fontanka.ru",327],["ircity.ru",327],["izh1.ru",327],["mgorsk.ru",327],["msk1.ru",327],["ngs.ru",327],["ngs22.ru",327],["ngs24.ru",327],["ngs42.ru",327],["ngs55.ru",327],["ngs70.ru",327],["nn.ru",327],["sochi1.ru",327],["sterlitamak1.ru",327],["tolyatty.ru",327],["ufa1.ru",327],["v1.ru",327],["vladivostok1.ru",327],["voronezh1.ru",327],["ya62.ru",327],["116117.fi",328],["pjspub.com",329],["autodude.dk",330],["autodude.fi",330],["autodude.no",330],["autodude.se",330],["valostore.fi",330],["valostore.no",330],["valostore.se",330],["vivantis.*",331],["vivantis-shop.at",331],["krasa.cz",331],["auf1.tv",332],["wesendit.com",333],["hatch.co",334],["haberturk.com",335],["spaseekers.com",336],["incomeshares.com",337],["surnamedb.com",339],["pizzadelight-menu.co.uk",340],["ioplus.nl",341],["lahella.fi",343],["healf.com",344]]);
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
