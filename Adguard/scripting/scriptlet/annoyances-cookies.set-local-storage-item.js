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
const argsList = [["CookieConsent--hideCookieConsent","true"],["consent","false"],["cookieConsent","granted"],["cookies-agreed-sellers-external-HC","true"],["hide-legal","1"],["cookie_consent","denied"],["cookies-toast-shown","true"],["show_consent_modal","1"],["SITE_2609202-COOKIE-BANNER","1"],["COOKIE_CONSENT","no"],["cookie_consent","true"],["df-cookies-allowed","true"],["cookie_consent","no"],["mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"],["isCookieAccepted","true"],["cookies-pref","[]"],["cookiesAccepted","false"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["teamtailor.com",0],["dewesoft.com",1],["notthebee.com",2],["seller.wildberries.ru",3],["wifiman.com",4],["vibeslist.ai",5],["mangalib.me",6],["anilib.me",6],["animelib.org",6],["hentailib.me",6],["hentailib.org",6],["mangalib.org",6],["ranobelib.me",6],["negrasport.pl",7],["pancernik.eu",[7,11]],["mobilelegends.com",8],["manuals.annafreud.org",9],["ketogo.app",10],["schneideranwaelte.de",10],["traefik.io",10],["gesundheitsmanufaktur.de",[11,94]],["open24.ee",11],["granola.ai",12],["polar.sh",12],["posthog.com",12],["hatchet.run",12],["zeta-ai.io",13],["fiyat.mercedes-benz.com.tr",14],["sportbooking.info",15],["photo.codes",16],["filmzie.com",16],["granado.com.br",17],["sunnyside.shop",[18,19,20]],["nhnieuws.nl",[21,23,24]],["omroepbrabant.nl",[21,23,24]],["cape.co",22],["asianet.co.id",25],["p2p.land",25],["netbank.avida.no",25],["bo3.gg",25],["gs1.se",[25,49]],["puregoldprotein.com",[25,113,114]],["spectrumtherapeutics.com",25],["thingtesting.com",25],["streamclipsgermany.de",25],["kundenportal.harzenergie.de",25],["giselles.ai",26],["i-fundusze.pl",27],["improvethenews.org",27],["plente.com",27],["movies4us.*",27],["popcornmovies.to",27],["arkanium.serveminecraft.net",28],["bananacraft.serveminecraft.net",28],["myoffers.smartbuy.hdfcbank.com",29],["grass.io",[30,31]],["lustery.com",32],["ecoints.com",33],["emergetools.com",34],["receptagemini.pl",35],["bw.vdk.de",[36,37,38]],["search.odin.io",39],["gdh.digital",40],["popmart.com",41],["rozklady.bielsko.pl",42],["typeform.com",43],["erlus.com",[44,45]],["bettrfinancing.com",46],["sf-express.com",47],["min.io",48],["lemwarm.com",50],["form.fillout.com",51],["keepersecurity.com",52],["esto.eu",53],["ctol.digital",53],["beterbed.nl",54],["crt.hr",55],["code.likeagirl.io",56],["engineering.mixpanel.com",56],["betterprogramming.pub",56],["medium.com",56],["500ish.com",56],["gitconnected.com",56],["bettermarketing.pub",56],["diylifetech.com",56],["thebolditalic.com",56],["writingcooperative.com",56],["fanfare.pub",56],["betterhumans.pub",56],["fvd.nl",57],["cpc2r.ch",58],["metamask.io",59],["chavesnamao.com.br",60],["anhanguera.com",61],["bhaskar.com",62],["novaventa.com",63],["privacy.com.br",64],["supabase.com",65],["app.getgrass.io",66],["sanluisgarbage.com",67],["wildberries.ru",68],["cryptorank.io",69],["springmerchant.com",70],["veed.io",71],["deribit.com",72],["dorkgpt.com",72],["kyutai.org",72],["varusteleka.com",72],["lazyrecords.app",72],["unmute.sh",72],["zoho.com",73],["femibion.rs",74],["nove.fr",74],["metro1.com.br",74],["villagrancanaria.com",75],["baic.cz",76],["bunq.com",77],["framer.com",77],["inceptionlabs.ai",77],["zave.it",77],["tower.dev",77],["fleksberegner.dk",78],["duty.travel.cl",79],["solscan.io",80],["connorduffy.abundancerei.com",81],["bc.gamem",82],["akkushop-turkiye.com.tr",83],["k33.com",[84,85]],["komdigi.go.id",86],["fijiairways.com",87],["planner.kaboodle.co.nz",88],["pedalcommander.*",89],["sekisuialveo.com",[90,91]],["rightsize.dk",92],["random-group.olafneumann.org",93],["espadrij.com",94],["hygiene-shop.eu",94],["technikmuseum.berlin",95],["cvut.cz",[96,97,98]],["r-ulybka.ru",99],["voltadol.at",100],["evium.de",101],["hiring.amazon.com",102],["comnet.com.tr",102],["gpuscout.nl",102],["remanga.org",102],["parrotsec.org",102],["estrelabet.bet.br",102],["shonenjumpplus.com",103],["engeldirekt.de",104],["haleon-gebro.at",[105,106]],["happyplates.com",[107,108]],["ickonic.com",109],["abs-cbn.com",110],["news.abs-cbn.com",110],["opmaatzagen.nl",111],["mundwerk-rottweil.de",111],["sqlook.com",112],["adef-emploi.fr",[115,116]],["lumieresdelaville.net",[115,116]],["ccaf.io",[117,118]],["dbschenkerarkas.com.tr",119],["dbschenker-seino.jp",119],["dbschenker.com",[119,214]],["scinapse.io",120],["uc.pt",121],["bennettrogers.mysight.uk",122],["snipp.gg",122],["leafly.com",123],["geizhals.at",124],["geizhals.de",124],["geizhals.eu",124],["cenowarka.pl",124],["skinflint.co.uk",124],["webhallen.com",[125,126,127]],["olx.com.br",128],["unobike.com",129],["mod.io",130],["passport-photo.online",131],["mojmaxtv.hrvatskitelekom.hr",131],["rodrigue-app.ct.ws",131],["tme.eu",132],["mein-osttirol.rocks",133],["tennessine.co.uk",134],["ultraleds.co.uk",135],["greubelforsey.com",136],["lukify.app",137],["studiobookr.com",138],["getgrass.io",139],["artisan.co",140],["mobilefuse.com",141],["safe.global",[142,266]],["data.carbonmapper.org",143],["avica.link",144],["madeiramadeira.com.br",145],["sberdisk.ru",146],["column.com",147],["iqoption.com",148],["dopesnow.com",149],["montecwear.com",149],["romeo.com",150],["sonyliv.com",[151,152]],["cwallet.com",153],["oneskin.co",154],["telemetr.io",155],["near.org",156],["near.ai",156],["dev.near.org",157],["jito.network",158],["jito.wtf",158],["goodpods.com",159],["pngtree.com",[160,161]],["rhein-pfalz-kreis.de",[162,163,164,165,166]],["idar-oberstein.de",[162,163,164,165]],["vogelsbergkreis.de",[162,163,164,165]],["chamaeleon.de",[164,337]],["v2.xmeye.net",167],["venom.foundation",168],["canonvannederland.nl",169],["my-account.storage-mart.com",170],["web.bunq.com",171],["lifesum.com",172],["home.shortcutssoftware.com",173],["klimwinkel.nl",174],["markimicrowave.com",175],["aerolineas.com.ar",176],["5sim.net",176],["fold.dev",177],["mojposao.hr",178],["temu.com",[179,180]],["supreme.com",[181,182]],["g-star.com",183],["sawren.pl",184],["ultrahuman.com",185],["optionsgroup.com",186],["withpersona.com",[187,188]],["trigger.dev",189],["core.app",[190,192]],["zora.co",191],["kokku-online.de",193],["cuba-buddy.de",194],["datamask.app",195],["humandataincome.com",195],["crealitycloud.com",196],["triumphtechnicalinformation.com",197],["businessclass.com",198],["livsstil.se",199],["schneidewind-immobilien.de",200],["textshuttle.com",201],["simpleswap.io",202],["wales.nhs.attendanywhere.com",203],["sacal.it",204],["astondevs.ru",205],["gonxt.com",206],["geomiq.com",207],["bbc.com",208],["galaxy.com",209],["ticketmelon.com",210],["pechinchou.com.br",211],["thehub21.com",212],["archiup.com",213],["autoride.cz",[215,216,217]],["autoride.es",[215,216,217]],["autoride.io",[215,216,217]],["autoride.sk",[215,216,217]],["wunderground.com",218],["baselime.io",219],["eversports.de",[220,221]],["makerz.me",222],["reebok.eu",223],["alfa.com.ec",224],["rts.com.ec",224],["tropicalida.com.ec",224],["owgr.com",[225,226]],["beermerchants.com",227],["saamexe.com",[228,229]],["helium.com",228],["blommerscoffee.shipping-portal.com",228],["app.bionic-reading.com",230],["nloto.ru",231],["swisstours.com",232],["librinova.com",233],["format.bike",234],["khanacademy.org",235],["etelecinema.hu",236],["konicaminolta.com",237],["soquest.xyz",238],["region-bayreuth.de",239],["bahnland-bayern.de",240],["eezy.nrw",240],["nationalexpress.de",240],["sumupbookings.com",241],["chipcitycookies.com",241],["6amgroup.com",241],["go.bkk.hu",241],["worldlibertyfinancial.com",241],["happiful.com",241],["moondao.com",241],["bazaartracker.com",242],["subscribercounter.com",243],["app.klarna.com",[244,245,246]],["instantspoursoi.fr",247],["thealliance.ai",248],["librumreader.com",249],["visnos.com",250],["polypane.app",251],["changelly.com",252],["glose.com",253],["yellow.systems",254],["renebieder.com",255],["goodram.com",256],["starwalk.space",257],["vitotechnology.com",257],["codedead.com",258],["studiofabiobiesel.com",259],["fydeos.com",260],["fydeos.io",260],["jove.com",261],["argent.xyz",262],["pixeden.com",263],["akasha.org",264],["ashleyfurniture.com",265],["jibjab.com",267],["vietjetair.com",268],["kick.com",269],["cora-broodjes.nl",270],["jimdosite.com",270],["worstbassist.com",270],["evernote.com",[271,272,341]],["octopusenergy.co.jp",273],["findmcserver.com",274],["cityfalcon.ai",275],["digitalparking.city",276],["mediathekviewweb.de",277],["solana.com",278],["ef.co.id",279],["alohafromdeer.com",280],["fwd.com",[281,283]],["everywhere.game",282],["geotastic.net",284],["garageproject.co.nz",285],["tattoodo.com",[285,286]],["jmonline.com.br",287],["atlas.workland.com",287],["virginexperiencedays.co.uk",287],["emag.berliner-woche.de",[288,289,290]],["nordkurier.de",[288,289,290]],["everest-24.pl",[291,292]],["sneakerfreaker.com",293],["cryptofalka.hu",293],["walmart.ca",294],["byfood.com",295],["andsafe.de",296],["edostavka.by",297],["emall.by",297],["ishoppurium.com",298],["baseblocks.tenereteam.com",299],["onexstore.pl",[300,301,302]],["revanced.app",302],["evropochta.by",[303,304]],["inselberlin.de",305],["gronkh.tv",306],["adfilteringdevsummit.com",307],["dailyrevs.com",308],["dsworks.ru",308],["daraz.com",309],["learngerman.dw.com",310],["leeway.tech",311],["gostanford.com",312],["namensetiketten.de",313],["drafthound.com",[314,315]],["wokularach.pl",316],["bidup.amtrak.com",317],["eschuhe.de",318],["zeglins.com",319],["flyingpapers.com",320],["beta.character.ai",[321,322]],["bittimittari.fi",323],["aida64.co.uk",[324,325]],["aida64.com.ua",[324,325]],["aida64.de",[324,325]],["aida64.hu",[324,325]],["aida64.it",[324,325]],["aida64russia.com",[324,325]],["116.ru",326],["14.ru",326],["161.ru",326],["164.ru",326],["173.ru",326],["178.ru",326],["26.ru",326],["29.ru",326],["35.ru",326],["43.ru",326],["45.ru",326],["48.ru",326],["51.ru",326],["53.ru",326],["56.ru",326],["59.ru",326],["60.ru",326],["63.ru",326],["68.ru",326],["71.ru",326],["72.ru",326],["74.ru",326],["76.ru",326],["86.ru",326],["89.ru",326],["93.ru",326],["chita.ru",326],["e1.ru",326],["fontanka.ru",326],["ircity.ru",326],["izh1.ru",326],["mgorsk.ru",326],["msk1.ru",326],["ngs.ru",326],["ngs22.ru",326],["ngs24.ru",326],["ngs42.ru",326],["ngs55.ru",326],["ngs70.ru",326],["nn.ru",326],["sochi1.ru",326],["sterlitamak1.ru",326],["tolyatty.ru",326],["ufa1.ru",326],["v1.ru",326],["vladivostok1.ru",326],["voronezh1.ru",326],["ya62.ru",326],["116117.fi",327],["pjspub.com",328],["autodude.dk",329],["autodude.fi",329],["autodude.no",329],["autodude.se",329],["valostore.fi",329],["valostore.no",329],["valostore.se",329],["vivantis.*",330],["vivantis-shop.at",330],["krasa.cz",330],["auf1.tv",331],["wesendit.com",332],["hatch.co",333],["haberturk.com",334],["spaseekers.com",335],["incomeshares.com",336],["surnamedb.com",338],["pizzadelight-menu.co.uk",339],["ioplus.nl",340],["lahella.fi",342],["healf.com",343]]);
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
