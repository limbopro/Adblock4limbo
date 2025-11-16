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
const argsList = [["cookieConsent","{}"],["anitrend_analytics_consent","denied"],["CookieConsent--hideCookieConsent","true"],["consent","false"],["duckaiHasAgreedToTerms","true"],["areCookiesAccepted","true"],["cookieConsentV2","1"],["gdpr","0"],["room-welcome-ack-v1","1"],["COOKIE_CHECK","false"],["lscache-klbq-bucket-scceptCookie","true"],["analytics-consent","accepted"],["cookie-consent","\"denied\""],["cookieConsent","granted"],["Express.cookie_agreement_shown","true"],["cookies-agreed-sellers-external-HC","true"],["hide-legal","1"],["cookie_consent","denied"],["cookies-toast-shown","true"],["show_consent_modal","1"],["SITE_2609202-COOKIE-BANNER","1"],["COOKIE_CONSENT","no"],["cookie_consent","true"],["df-cookies-allowed","true"],["cookie_consent","no"],["mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"],["isCookieAccepted","true"],["cookies-pref","[]"],["cookiesAccepted","false"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["consent_analytics","false"],["consent_granted","true"],["consent_marketing","false"],["cookie-accepted","true"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["rg.ru",0],["anitrend.co",1],["teamtailor.com",2],["dewesoft.com",3],["duckduckgo.com",4],["hospihousing.com",5],["mastersintime.com",6],["watch.co.uk",6],["inverto.tv",7],["theroom.lol",8],["titantvguide.com",9],["strinova.com",10],["thai-novel.com",11],["todoist.com",12],["notthebee.com",13],["bcs-express.ru",14],["seller.wildberries.ru",15],["wifiman.com",16],["vibeslist.ai",17],["shlib.life",18],["slashlib.me",18],["mangalib.me",18],["anilib.me",18],["animelib.org",18],["hentailib.me",18],["hentailib.org",18],["mangalib.org",18],["ranobelib.me",18],["negrasport.pl",19],["pancernik.eu",[19,23]],["mobilelegends.com",20],["manuals.annafreud.org",21],["v3.ketogo.app",22],["ketogo.app",22],["schneideranwaelte.de",22],["traefik.io",22],["gesundheitsmanufaktur.de",[23,106]],["open24.ee",23],["granola.ai",24],["polar.sh",24],["posthog.com",24],["hatchet.run",24],["zeta-ai.io",25],["fiyat.mercedes-benz.com.tr",26],["sportbooking.info",27],["photo.codes",28],["filmzie.com",28],["granado.com.br",29],["sunnyside.shop",[30,31,32]],["nhnieuws.nl",[33,35,36]],["omroepbrabant.nl",[33,35,36]],["cape.co",34],["asianet.co.id",37],["p2p.land",37],["netbank.avida.no",37],["bo3.gg",37],["gs1.se",[37,61]],["puregoldprotein.com",[37,125,126]],["spectrumtherapeutics.com",37],["thingtesting.com",37],["streamclipsgermany.de",37],["kundenportal.harzenergie.de",37],["giselles.ai",38],["i-fundusze.pl",39],["improvethenews.org",39],["plente.com",39],["movies4us.*",39],["popcornmovies.to",39],["arkanium.serveminecraft.net",40],["bananacraft.serveminecraft.net",40],["myoffers.smartbuy.hdfcbank.com",41],["grass.io",[42,43]],["lustery.com",44],["ecoints.com",45],["emergetools.com",46],["receptagemini.pl",47],["bw.vdk.de",[48,49,50]],["search.odin.io",51],["gdh.digital",52],["popmart.com",53],["rozklady.bielsko.pl",54],["typeform.com",55],["erlus.com",[56,57]],["bettrfinancing.com",58],["sf-express.com",59],["min.io",60],["lemwarm.com",62],["form.fillout.com",63],["keepersecurity.com",64],["esto.eu",65],["ctol.digital",65],["beterbed.nl",66],["crt.hr",67],["code.likeagirl.io",68],["engineering.mixpanel.com",68],["betterprogramming.pub",68],["medium.com",68],["500ish.com",68],["gitconnected.com",68],["bettermarketing.pub",68],["diylifetech.com",68],["thebolditalic.com",68],["writingcooperative.com",68],["fanfare.pub",68],["betterhumans.pub",68],["fvd.nl",69],["cpc2r.ch",70],["metamask.io",71],["chavesnamao.com.br",72],["anhanguera.com",73],["bhaskar.com",74],["novaventa.com",75],["privacy.com.br",76],["supabase.com",77],["app.getgrass.io",78],["sanluisgarbage.com",79],["wildberries.ru",80],["cryptorank.io",81],["springmerchant.com",82],["veed.io",83],["deribit.com",84],["dorkgpt.com",84],["kyutai.org",84],["varusteleka.com",84],["lazyrecords.app",84],["unmute.sh",84],["zoho.com",85],["femibion.rs",86],["nove.fr",86],["metro1.com.br",86],["villagrancanaria.com",87],["baic.cz",88],["mollie.com",89],["bunq.com",89],["framer.com",89],["inceptionlabs.ai",89],["zave.it",89],["tower.dev",89],["fleksberegner.dk",90],["duty.travel.cl",91],["solscan.io",92],["connorduffy.abundancerei.com",93],["bc.gamem",94],["akkushop-turkiye.com.tr",95],["k33.com",[96,97]],["komdigi.go.id",98],["fijiairways.com",99],["planner.kaboodle.co.nz",100],["pedalcommander.*",101],["sekisuialveo.com",[102,103]],["rightsize.dk",104],["random-group.olafneumann.org",105],["espadrij.com",106],["hygiene-shop.eu",106],["technikmuseum.berlin",107],["cvut.cz",[108,109,110]],["r-ulybka.ru",111],["voltadol.at",112],["evium.de",113],["hiring.amazon.com",114],["comnet.com.tr",114],["gpuscout.nl",114],["remanga.org",114],["parrotsec.org",114],["estrelabet.bet.br",114],["cricketgully.com",114],["shonenjumpplus.com",115],["engeldirekt.de",116],["haleon-gebro.at",[117,118]],["happyplates.com",[119,120]],["ickonic.com",121],["abs-cbn.com",122],["news.abs-cbn.com",122],["opmaatzagen.nl",123],["mundwerk-rottweil.de",123],["sqlook.com",124],["adef-emploi.fr",[127,128]],["lumieresdelaville.net",[127,128]],["ccaf.io",[129,130]],["dbschenkerarkas.com.tr",131],["dbschenker-seino.jp",131],["dbschenker.com",[131,225]],["scinapse.io",132],["uc.pt",133],["bennettrogers.mysight.uk",134],["snipp.gg",134],["leafly.com",135],["geizhals.at",136],["geizhals.de",136],["geizhals.eu",136],["cenowarka.pl",136],["skinflint.co.uk",136],["webhallen.com",[137,138,139]],["olx.com.br",140],["unobike.com",141],["mod.io",142],["passport-photo.online",143],["mojmaxtv.hrvatskitelekom.hr",143],["rodrigue-app.ct.ws",143],["tme.eu",144],["mein-osttirol.rocks",145],["tennessine.co.uk",146],["ultraleds.co.uk",147],["greubelforsey.com",148],["lukify.app",149],["studiobookr.com",150],["getgrass.io",151],["artisan.co",152],["mobilefuse.com",153],["safe.global",[154,277]],["data.carbonmapper.org",155],["avica.link",156],["madeiramadeira.com.br",157],["sberdisk.ru",158],["column.com",159],["iqoption.com",160],["dopesnow.com",161],["montecwear.com",161],["romeo.com",162],["sonyliv.com",[163,164]],["cwallet.com",165],["oneskin.co",166],["telemetr.io",167],["near.org",168],["near.ai",168],["dev.near.org",169],["jito.network",170],["jito.wtf",170],["goodpods.com",171],["pngtree.com",[172,173]],["rhein-pfalz-kreis.de",[174,175,176,177,178]],["idar-oberstein.de",[174,175,176,177]],["vogelsbergkreis.de",[174,175,176,177]],["chamaeleon.de",[176,352]],["v2.xmeye.net",179],["venom.foundation",180],["canonvannederland.nl",181],["my-account.storage-mart.com",182],["web.bunq.com",183],["lifesum.com",184],["home.shortcutssoftware.com",185],["klimwinkel.nl",186],["markimicrowave.com",187],["aerolineas.com.ar",188],["5sim.net",188],["fold.dev",189],["mojposao.hr",190],["temu.com",[191,192]],["supreme.com",[193,194]],["g-star.com",195],["sawren.pl",196],["ultrahuman.com",197],["optionsgroup.com",198],["withpersona.com",[199,200]],["core.app",[201,203]],["zora.co",202],["kokku-online.de",204],["cuba-buddy.de",205],["datamask.app",206],["humandataincome.com",206],["crealitycloud.com",207],["triumphtechnicalinformation.com",208],["businessclass.com",209],["livsstil.se",210],["schneidewind-immobilien.de",211],["textshuttle.com",212],["simpleswap.io",213],["wales.nhs.attendanywhere.com",214],["anonpaste.pw",215],["sacal.it",215],["astondevs.ru",216],["gonxt.com",217],["geomiq.com",218],["bbc.com",219],["galaxy.com",220],["ticketmelon.com",221],["pechinchou.com.br",222],["thehub21.com",223],["archiup.com",224],["autoride.cz",[226,227,228]],["autoride.es",[226,227,228]],["autoride.io",[226,227,228]],["autoride.sk",[226,227,228]],["wunderground.com",229],["baselime.io",230],["eversports.de",[231,232]],["makerz.me",233],["reebok.eu",234],["alfa.com.ec",235],["rts.com.ec",235],["tropicalida.com.ec",235],["owgr.com",[236,237]],["beermerchants.com",238],["saamexe.com",[239,240]],["helium.com",239],["blommerscoffee.shipping-portal.com",239],["app.bionic-reading.com",241],["nloto.ru",242],["swisstours.com",243],["librinova.com",244],["format.bike",245],["khanacademy.org",246],["etelecinema.hu",247],["konicaminolta.com",248],["soquest.xyz",249],["region-bayreuth.de",250],["bahnland-bayern.de",251],["eezy.nrw",251],["nationalexpress.de",251],["sumupbookings.com",252],["chipcitycookies.com",252],["6amgroup.com",252],["go.bkk.hu",252],["worldlibertyfinancial.com",252],["happiful.com",252],["moondao.com",252],["bazaartracker.com",253],["subscribercounter.com",254],["app.klarna.com",[255,256,257]],["instantspoursoi.fr",258],["thealliance.ai",259],["librumreader.com",260],["visnos.com",261],["polypane.app",262],["changelly.com",263],["glose.com",264],["yellow.systems",265],["renebieder.com",266],["goodram.com",267],["starwalk.space",268],["vitotechnology.com",268],["codedead.com",269],["studiofabiobiesel.com",270],["fydeos.com",271],["fydeos.io",271],["jove.com",272],["argent.xyz",273],["pixeden.com",274],["akasha.org",275],["ashleyfurniture.com",276],["jibjab.com",278],["vietjetair.com",279],["kick.com",280],["cora-broodjes.nl",281],["jimdosite.com",281],["worstbassist.com",281],["evernote.com",[282,283,356]],["octopusenergy.co.jp",284],["findmcserver.com",285],["cityfalcon.ai",286],["digitalparking.city",287],["mediathekviewweb.de",288],["solana.com",289],["ef.co.id",290],["alohafromdeer.com",291],["fwd.com",[292,294]],["everywhere.game",293],["geotastic.net",295],["garageproject.co.nz",296],["tattoodo.com",[296,297]],["jmonline.com.br",298],["atlas.workland.com",298],["virginexperiencedays.co.uk",298],["emag.berliner-woche.de",[299,300,301]],["nordkurier.de",[299,300,301]],["everest-24.pl",[302,303]],["operaneon.com",[304,305,306]],["abastible.cl",307],["sneakerfreaker.com",308],["cryptofalka.hu",308],["walmart.ca",309],["byfood.com",310],["andsafe.de",311],["edostavka.by",312],["emall.by",312],["ishoppurium.com",313],["baseblocks.tenereteam.com",314],["onexstore.pl",[315,316,317]],["revanced.app",317],["evropochta.by",[318,319]],["inselberlin.de",320],["gronkh.tv",321],["adfilteringdevsummit.com",322],["dailyrevs.com",323],["dsworks.ru",323],["daraz.com",324],["learngerman.dw.com",325],["leeway.tech",326],["gostanford.com",327],["namensetiketten.de",328],["drafthound.com",[329,330]],["wokularach.pl",331],["bidup.amtrak.com",332],["eschuhe.de",333],["zeglins.com",334],["flyingpapers.com",335],["beta.character.ai",[336,337]],["bittimittari.fi",338],["aida64.co.uk",[339,340]],["aida64.com.ua",[339,340]],["aida64.de",[339,340]],["aida64.hu",[339,340]],["aida64.it",[339,340]],["aida64russia.com",[339,340]],["116.ru",341],["14.ru",341],["161.ru",341],["164.ru",341],["173.ru",341],["178.ru",341],["26.ru",341],["29.ru",341],["35.ru",341],["43.ru",341],["45.ru",341],["48.ru",341],["51.ru",341],["53.ru",341],["56.ru",341],["59.ru",341],["60.ru",341],["63.ru",341],["68.ru",341],["71.ru",341],["72.ru",341],["74.ru",341],["76.ru",341],["86.ru",341],["89.ru",341],["93.ru",341],["chita.ru",341],["e1.ru",341],["fontanka.ru",341],["ircity.ru",341],["izh1.ru",341],["mgorsk.ru",341],["msk1.ru",341],["ngs.ru",341],["ngs22.ru",341],["ngs24.ru",341],["ngs42.ru",341],["ngs55.ru",341],["ngs70.ru",341],["nn.ru",341],["sochi1.ru",341],["sterlitamak1.ru",341],["tolyatty.ru",341],["ufa1.ru",341],["v1.ru",341],["vladivostok1.ru",341],["voronezh1.ru",341],["ya62.ru",341],["116117.fi",342],["pjspub.com",343],["autodude.dk",344],["autodude.fi",344],["autodude.no",344],["autodude.se",344],["valostore.fi",344],["valostore.no",344],["valostore.se",344],["vivantis.*",345],["vivantis-shop.at",345],["krasa.cz",345],["auf1.tv",346],["wesendit.com",347],["hatch.co",348],["haberturk.com",349],["spaseekers.com",350],["incomeshares.com",351],["surnamedb.com",353],["pizzadelight-menu.co.uk",354],["ioplus.nl",355],["lahella.fi",357],["healf.com",358]]);
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
