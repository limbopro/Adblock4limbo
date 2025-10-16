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
const argsList = [["CookieConsent--hideCookieConsent","true"],["consent","false"],["duckaiHasAgreedToTerms","true"],["areCookiesAccepted","true"],["cookieConsentV2","1"],["gdpr","0"],["room-welcome-ack-v1","1"],["COOKIE_CHECK","false"],["lscache-klbq-bucket-scceptCookie","true"],["analytics-consent","accepted"],["cookie-consent","\"denied\""],["cookieConsent","granted"],["Express.cookie_agreement_shown","true"],["cookies-agreed-sellers-external-HC","true"],["hide-legal","1"],["cookie_consent","denied"],["cookies-toast-shown","true"],["show_consent_modal","1"],["SITE_2609202-COOKIE-BANNER","1"],["COOKIE_CONSENT","no"],["cookie_consent","true"],["df-cookies-allowed","true"],["cookie_consent","no"],["mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"],["isCookieAccepted","true"],["cookies-pref","[]"],["cookiesAccepted","false"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["consent_analytics","false"],["consent_granted","true"],["consent_marketing","false"],["cookie-accepted","true"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["teamtailor.com",0],["dewesoft.com",1],["duckduckgo.com",2],["hospihousing.com",3],["mastersintime.com",4],["watch.co.uk",4],["inverto.tv",5],["theroom.lol",6],["titantvguide.com",7],["strinova.com",8],["thai-novel.com",9],["todoist.com",10],["notthebee.com",11],["bcs-express.ru",12],["seller.wildberries.ru",13],["wifiman.com",14],["vibeslist.ai",15],["shlib.life",16],["slashlib.me",16],["mangalib.me",16],["anilib.me",16],["animelib.org",16],["hentailib.me",16],["hentailib.org",16],["mangalib.org",16],["ranobelib.me",16],["negrasport.pl",17],["pancernik.eu",[17,21]],["mobilelegends.com",18],["manuals.annafreud.org",19],["v3.ketogo.app",20],["ketogo.app",20],["schneideranwaelte.de",20],["traefik.io",20],["gesundheitsmanufaktur.de",[21,104]],["open24.ee",21],["granola.ai",22],["polar.sh",22],["posthog.com",22],["hatchet.run",22],["zeta-ai.io",23],["fiyat.mercedes-benz.com.tr",24],["sportbooking.info",25],["photo.codes",26],["filmzie.com",26],["granado.com.br",27],["sunnyside.shop",[28,29,30]],["nhnieuws.nl",[31,33,34]],["omroepbrabant.nl",[31,33,34]],["cape.co",32],["asianet.co.id",35],["p2p.land",35],["netbank.avida.no",35],["bo3.gg",35],["gs1.se",[35,59]],["puregoldprotein.com",[35,123,124]],["spectrumtherapeutics.com",35],["thingtesting.com",35],["streamclipsgermany.de",35],["kundenportal.harzenergie.de",35],["giselles.ai",36],["i-fundusze.pl",37],["improvethenews.org",37],["plente.com",37],["movies4us.*",37],["popcornmovies.to",37],["arkanium.serveminecraft.net",38],["bananacraft.serveminecraft.net",38],["myoffers.smartbuy.hdfcbank.com",39],["grass.io",[40,41]],["lustery.com",42],["ecoints.com",43],["emergetools.com",44],["receptagemini.pl",45],["bw.vdk.de",[46,47,48]],["search.odin.io",49],["gdh.digital",50],["popmart.com",51],["rozklady.bielsko.pl",52],["typeform.com",53],["erlus.com",[54,55]],["bettrfinancing.com",56],["sf-express.com",57],["min.io",58],["lemwarm.com",60],["form.fillout.com",61],["keepersecurity.com",62],["esto.eu",63],["ctol.digital",63],["beterbed.nl",64],["crt.hr",65],["code.likeagirl.io",66],["engineering.mixpanel.com",66],["betterprogramming.pub",66],["medium.com",66],["500ish.com",66],["gitconnected.com",66],["bettermarketing.pub",66],["diylifetech.com",66],["thebolditalic.com",66],["writingcooperative.com",66],["fanfare.pub",66],["betterhumans.pub",66],["fvd.nl",67],["cpc2r.ch",68],["metamask.io",69],["chavesnamao.com.br",70],["anhanguera.com",71],["bhaskar.com",72],["novaventa.com",73],["privacy.com.br",74],["supabase.com",75],["app.getgrass.io",76],["sanluisgarbage.com",77],["wildberries.ru",78],["cryptorank.io",79],["springmerchant.com",80],["veed.io",81],["deribit.com",82],["dorkgpt.com",82],["kyutai.org",82],["varusteleka.com",82],["lazyrecords.app",82],["unmute.sh",82],["zoho.com",83],["femibion.rs",84],["nove.fr",84],["metro1.com.br",84],["villagrancanaria.com",85],["baic.cz",86],["mollie.com",87],["bunq.com",87],["framer.com",87],["inceptionlabs.ai",87],["zave.it",87],["tower.dev",87],["fleksberegner.dk",88],["duty.travel.cl",89],["solscan.io",90],["connorduffy.abundancerei.com",91],["bc.gamem",92],["akkushop-turkiye.com.tr",93],["k33.com",[94,95]],["komdigi.go.id",96],["fijiairways.com",97],["planner.kaboodle.co.nz",98],["pedalcommander.*",99],["sekisuialveo.com",[100,101]],["rightsize.dk",102],["random-group.olafneumann.org",103],["espadrij.com",104],["hygiene-shop.eu",104],["technikmuseum.berlin",105],["cvut.cz",[106,107,108]],["r-ulybka.ru",109],["voltadol.at",110],["evium.de",111],["hiring.amazon.com",112],["comnet.com.tr",112],["gpuscout.nl",112],["remanga.org",112],["parrotsec.org",112],["estrelabet.bet.br",112],["cricketgully.com",112],["shonenjumpplus.com",113],["engeldirekt.de",114],["haleon-gebro.at",[115,116]],["happyplates.com",[117,118]],["ickonic.com",119],["abs-cbn.com",120],["news.abs-cbn.com",120],["opmaatzagen.nl",121],["mundwerk-rottweil.de",121],["sqlook.com",122],["adef-emploi.fr",[125,126]],["lumieresdelaville.net",[125,126]],["ccaf.io",[127,128]],["dbschenkerarkas.com.tr",129],["dbschenker-seino.jp",129],["dbschenker.com",[129,223]],["scinapse.io",130],["uc.pt",131],["bennettrogers.mysight.uk",132],["snipp.gg",132],["leafly.com",133],["geizhals.at",134],["geizhals.de",134],["geizhals.eu",134],["cenowarka.pl",134],["skinflint.co.uk",134],["webhallen.com",[135,136,137]],["olx.com.br",138],["unobike.com",139],["mod.io",140],["passport-photo.online",141],["mojmaxtv.hrvatskitelekom.hr",141],["rodrigue-app.ct.ws",141],["tme.eu",142],["mein-osttirol.rocks",143],["tennessine.co.uk",144],["ultraleds.co.uk",145],["greubelforsey.com",146],["lukify.app",147],["studiobookr.com",148],["getgrass.io",149],["artisan.co",150],["mobilefuse.com",151],["safe.global",[152,275]],["data.carbonmapper.org",153],["avica.link",154],["madeiramadeira.com.br",155],["sberdisk.ru",156],["column.com",157],["iqoption.com",158],["dopesnow.com",159],["montecwear.com",159],["romeo.com",160],["sonyliv.com",[161,162]],["cwallet.com",163],["oneskin.co",164],["telemetr.io",165],["near.org",166],["near.ai",166],["dev.near.org",167],["jito.network",168],["jito.wtf",168],["goodpods.com",169],["pngtree.com",[170,171]],["rhein-pfalz-kreis.de",[172,173,174,175,176]],["idar-oberstein.de",[172,173,174,175]],["vogelsbergkreis.de",[172,173,174,175]],["chamaeleon.de",[174,350]],["v2.xmeye.net",177],["venom.foundation",178],["canonvannederland.nl",179],["my-account.storage-mart.com",180],["web.bunq.com",181],["lifesum.com",182],["home.shortcutssoftware.com",183],["klimwinkel.nl",184],["markimicrowave.com",185],["aerolineas.com.ar",186],["5sim.net",186],["fold.dev",187],["mojposao.hr",188],["temu.com",[189,190]],["supreme.com",[191,192]],["g-star.com",193],["sawren.pl",194],["ultrahuman.com",195],["optionsgroup.com",196],["withpersona.com",[197,198]],["core.app",[199,201]],["zora.co",200],["kokku-online.de",202],["cuba-buddy.de",203],["datamask.app",204],["humandataincome.com",204],["crealitycloud.com",205],["triumphtechnicalinformation.com",206],["businessclass.com",207],["livsstil.se",208],["schneidewind-immobilien.de",209],["textshuttle.com",210],["simpleswap.io",211],["wales.nhs.attendanywhere.com",212],["anonpaste.pw",213],["sacal.it",213],["astondevs.ru",214],["gonxt.com",215],["geomiq.com",216],["bbc.com",217],["galaxy.com",218],["ticketmelon.com",219],["pechinchou.com.br",220],["thehub21.com",221],["archiup.com",222],["autoride.cz",[224,225,226]],["autoride.es",[224,225,226]],["autoride.io",[224,225,226]],["autoride.sk",[224,225,226]],["wunderground.com",227],["baselime.io",228],["eversports.de",[229,230]],["makerz.me",231],["reebok.eu",232],["alfa.com.ec",233],["rts.com.ec",233],["tropicalida.com.ec",233],["owgr.com",[234,235]],["beermerchants.com",236],["saamexe.com",[237,238]],["helium.com",237],["blommerscoffee.shipping-portal.com",237],["app.bionic-reading.com",239],["nloto.ru",240],["swisstours.com",241],["librinova.com",242],["format.bike",243],["khanacademy.org",244],["etelecinema.hu",245],["konicaminolta.com",246],["soquest.xyz",247],["region-bayreuth.de",248],["bahnland-bayern.de",249],["eezy.nrw",249],["nationalexpress.de",249],["sumupbookings.com",250],["chipcitycookies.com",250],["6amgroup.com",250],["go.bkk.hu",250],["worldlibertyfinancial.com",250],["happiful.com",250],["moondao.com",250],["bazaartracker.com",251],["subscribercounter.com",252],["app.klarna.com",[253,254,255]],["instantspoursoi.fr",256],["thealliance.ai",257],["librumreader.com",258],["visnos.com",259],["polypane.app",260],["changelly.com",261],["glose.com",262],["yellow.systems",263],["renebieder.com",264],["goodram.com",265],["starwalk.space",266],["vitotechnology.com",266],["codedead.com",267],["studiofabiobiesel.com",268],["fydeos.com",269],["fydeos.io",269],["jove.com",270],["argent.xyz",271],["pixeden.com",272],["akasha.org",273],["ashleyfurniture.com",274],["jibjab.com",276],["vietjetair.com",277],["kick.com",278],["cora-broodjes.nl",279],["jimdosite.com",279],["worstbassist.com",279],["evernote.com",[280,281,354]],["octopusenergy.co.jp",282],["findmcserver.com",283],["cityfalcon.ai",284],["digitalparking.city",285],["mediathekviewweb.de",286],["solana.com",287],["ef.co.id",288],["alohafromdeer.com",289],["fwd.com",[290,292]],["everywhere.game",291],["geotastic.net",293],["garageproject.co.nz",294],["tattoodo.com",[294,295]],["jmonline.com.br",296],["atlas.workland.com",296],["virginexperiencedays.co.uk",296],["emag.berliner-woche.de",[297,298,299]],["nordkurier.de",[297,298,299]],["everest-24.pl",[300,301]],["operaneon.com",[302,303,304]],["abastible.cl",305],["sneakerfreaker.com",306],["cryptofalka.hu",306],["walmart.ca",307],["byfood.com",308],["andsafe.de",309],["edostavka.by",310],["emall.by",310],["ishoppurium.com",311],["baseblocks.tenereteam.com",312],["onexstore.pl",[313,314,315]],["revanced.app",315],["evropochta.by",[316,317]],["inselberlin.de",318],["gronkh.tv",319],["adfilteringdevsummit.com",320],["dailyrevs.com",321],["dsworks.ru",321],["daraz.com",322],["learngerman.dw.com",323],["leeway.tech",324],["gostanford.com",325],["namensetiketten.de",326],["drafthound.com",[327,328]],["wokularach.pl",329],["bidup.amtrak.com",330],["eschuhe.de",331],["zeglins.com",332],["flyingpapers.com",333],["beta.character.ai",[334,335]],["bittimittari.fi",336],["aida64.co.uk",[337,338]],["aida64.com.ua",[337,338]],["aida64.de",[337,338]],["aida64.hu",[337,338]],["aida64.it",[337,338]],["aida64russia.com",[337,338]],["116.ru",339],["14.ru",339],["161.ru",339],["164.ru",339],["173.ru",339],["178.ru",339],["26.ru",339],["29.ru",339],["35.ru",339],["43.ru",339],["45.ru",339],["48.ru",339],["51.ru",339],["53.ru",339],["56.ru",339],["59.ru",339],["60.ru",339],["63.ru",339],["68.ru",339],["71.ru",339],["72.ru",339],["74.ru",339],["76.ru",339],["86.ru",339],["89.ru",339],["93.ru",339],["chita.ru",339],["e1.ru",339],["fontanka.ru",339],["ircity.ru",339],["izh1.ru",339],["mgorsk.ru",339],["msk1.ru",339],["ngs.ru",339],["ngs22.ru",339],["ngs24.ru",339],["ngs42.ru",339],["ngs55.ru",339],["ngs70.ru",339],["nn.ru",339],["sochi1.ru",339],["sterlitamak1.ru",339],["tolyatty.ru",339],["ufa1.ru",339],["v1.ru",339],["vladivostok1.ru",339],["voronezh1.ru",339],["ya62.ru",339],["116117.fi",340],["pjspub.com",341],["autodude.dk",342],["autodude.fi",342],["autodude.no",342],["autodude.se",342],["valostore.fi",342],["valostore.no",342],["valostore.se",342],["vivantis.*",343],["vivantis-shop.at",343],["krasa.cz",343],["auf1.tv",344],["wesendit.com",345],["hatch.co",346],["haberturk.com",347],["spaseekers.com",348],["incomeshares.com",349],["surnamedb.com",351],["pizzadelight-menu.co.uk",352],["ioplus.nl",353],["lahella.fi",355],["healf.com",356]]);
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
