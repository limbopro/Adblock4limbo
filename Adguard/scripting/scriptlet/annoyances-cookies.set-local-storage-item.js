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
const argsList = [["CookieConsent--hideCookieConsent","true"],["consent","false"],["duckaiHasAgreedToTerms","true"],["cookieConsentV2","1"],["room-welcome-ack-v1","1"],["lscache-klbq-bucket-scceptCookie","true"],["analytics-consent","accepted"],["cookie-consent","\"denied\""],["cookieConsent","granted"],["Express.cookie_agreement_shown","true"],["cookies-agreed-sellers-external-HC","true"],["hide-legal","1"],["cookie_consent","denied"],["cookies-toast-shown","true"],["show_consent_modal","1"],["SITE_2609202-COOKIE-BANNER","1"],["COOKIE_CONSENT","no"],["cookie_consent","true"],["df-cookies-allowed","true"],["cookie_consent","no"],["mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"],["isCookieAccepted","true"],["cookies-pref","[]"],["cookiesAccepted","false"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["teamtailor.com",0],["dewesoft.com",1],["duckduckgo.com",2],["mastersintime.com",3],["watch.co.uk",3],["theroom.lol",4],["strinova.com",5],["thai-novel.com",6],["todoist.com",7],["notthebee.com",8],["bcs-express.ru",9],["seller.wildberries.ru",10],["wifiman.com",11],["vibeslist.ai",12],["shlib.life",13],["slashlib.me",13],["mangalib.me",13],["anilib.me",13],["animelib.org",13],["hentailib.me",13],["hentailib.org",13],["mangalib.org",13],["ranobelib.me",13],["negrasport.pl",14],["pancernik.eu",[14,18]],["mobilelegends.com",15],["manuals.annafreud.org",16],["v3.ketogo.app",17],["ketogo.app",17],["schneideranwaelte.de",17],["traefik.io",17],["gesundheitsmanufaktur.de",[18,101]],["open24.ee",18],["granola.ai",19],["polar.sh",19],["posthog.com",19],["hatchet.run",19],["zeta-ai.io",20],["fiyat.mercedes-benz.com.tr",21],["sportbooking.info",22],["photo.codes",23],["filmzie.com",23],["granado.com.br",24],["sunnyside.shop",[25,26,27]],["nhnieuws.nl",[28,30,31]],["omroepbrabant.nl",[28,30,31]],["cape.co",29],["asianet.co.id",32],["p2p.land",32],["netbank.avida.no",32],["bo3.gg",32],["gs1.se",[32,56]],["puregoldprotein.com",[32,120,121]],["spectrumtherapeutics.com",32],["thingtesting.com",32],["streamclipsgermany.de",32],["kundenportal.harzenergie.de",32],["giselles.ai",33],["i-fundusze.pl",34],["improvethenews.org",34],["plente.com",34],["movies4us.*",34],["popcornmovies.to",34],["arkanium.serveminecraft.net",35],["bananacraft.serveminecraft.net",35],["myoffers.smartbuy.hdfcbank.com",36],["grass.io",[37,38]],["lustery.com",39],["ecoints.com",40],["emergetools.com",41],["receptagemini.pl",42],["bw.vdk.de",[43,44,45]],["search.odin.io",46],["gdh.digital",47],["popmart.com",48],["rozklady.bielsko.pl",49],["typeform.com",50],["erlus.com",[51,52]],["bettrfinancing.com",53],["sf-express.com",54],["min.io",55],["lemwarm.com",57],["form.fillout.com",58],["keepersecurity.com",59],["esto.eu",60],["ctol.digital",60],["beterbed.nl",61],["crt.hr",62],["code.likeagirl.io",63],["engineering.mixpanel.com",63],["betterprogramming.pub",63],["medium.com",63],["500ish.com",63],["gitconnected.com",63],["bettermarketing.pub",63],["diylifetech.com",63],["thebolditalic.com",63],["writingcooperative.com",63],["fanfare.pub",63],["betterhumans.pub",63],["fvd.nl",64],["cpc2r.ch",65],["metamask.io",66],["chavesnamao.com.br",67],["anhanguera.com",68],["bhaskar.com",69],["novaventa.com",70],["privacy.com.br",71],["supabase.com",72],["app.getgrass.io",73],["sanluisgarbage.com",74],["wildberries.ru",75],["cryptorank.io",76],["springmerchant.com",77],["veed.io",78],["deribit.com",79],["dorkgpt.com",79],["kyutai.org",79],["varusteleka.com",79],["lazyrecords.app",79],["unmute.sh",79],["zoho.com",80],["femibion.rs",81],["nove.fr",81],["metro1.com.br",81],["villagrancanaria.com",82],["baic.cz",83],["bunq.com",84],["framer.com",84],["inceptionlabs.ai",84],["zave.it",84],["tower.dev",84],["fleksberegner.dk",85],["duty.travel.cl",86],["solscan.io",87],["connorduffy.abundancerei.com",88],["bc.gamem",89],["akkushop-turkiye.com.tr",90],["k33.com",[91,92]],["komdigi.go.id",93],["fijiairways.com",94],["planner.kaboodle.co.nz",95],["pedalcommander.*",96],["sekisuialveo.com",[97,98]],["rightsize.dk",99],["random-group.olafneumann.org",100],["espadrij.com",101],["hygiene-shop.eu",101],["technikmuseum.berlin",102],["cvut.cz",[103,104,105]],["r-ulybka.ru",106],["voltadol.at",107],["evium.de",108],["hiring.amazon.com",109],["comnet.com.tr",109],["gpuscout.nl",109],["remanga.org",109],["parrotsec.org",109],["estrelabet.bet.br",109],["shonenjumpplus.com",110],["engeldirekt.de",111],["haleon-gebro.at",[112,113]],["happyplates.com",[114,115]],["ickonic.com",116],["abs-cbn.com",117],["news.abs-cbn.com",117],["opmaatzagen.nl",118],["mundwerk-rottweil.de",118],["sqlook.com",119],["adef-emploi.fr",[122,123]],["lumieresdelaville.net",[122,123]],["ccaf.io",[124,125]],["dbschenkerarkas.com.tr",126],["dbschenker-seino.jp",126],["dbschenker.com",[126,221]],["scinapse.io",127],["uc.pt",128],["bennettrogers.mysight.uk",129],["snipp.gg",129],["leafly.com",130],["geizhals.at",131],["geizhals.de",131],["geizhals.eu",131],["cenowarka.pl",131],["skinflint.co.uk",131],["webhallen.com",[132,133,134]],["olx.com.br",135],["unobike.com",136],["mod.io",137],["passport-photo.online",138],["mojmaxtv.hrvatskitelekom.hr",138],["rodrigue-app.ct.ws",138],["tme.eu",139],["mein-osttirol.rocks",140],["tennessine.co.uk",141],["ultraleds.co.uk",142],["greubelforsey.com",143],["lukify.app",144],["studiobookr.com",145],["getgrass.io",146],["artisan.co",147],["mobilefuse.com",148],["safe.global",[149,273]],["data.carbonmapper.org",150],["avica.link",151],["madeiramadeira.com.br",152],["sberdisk.ru",153],["column.com",154],["iqoption.com",155],["dopesnow.com",156],["montecwear.com",156],["romeo.com",157],["sonyliv.com",[158,159]],["cwallet.com",160],["oneskin.co",161],["telemetr.io",162],["near.org",163],["near.ai",163],["dev.near.org",164],["jito.network",165],["jito.wtf",165],["goodpods.com",166],["pngtree.com",[167,168]],["rhein-pfalz-kreis.de",[169,170,171,172,173]],["idar-oberstein.de",[169,170,171,172]],["vogelsbergkreis.de",[169,170,171,172]],["chamaeleon.de",[171,344]],["v2.xmeye.net",174],["venom.foundation",175],["canonvannederland.nl",176],["my-account.storage-mart.com",177],["web.bunq.com",178],["lifesum.com",179],["home.shortcutssoftware.com",180],["klimwinkel.nl",181],["markimicrowave.com",182],["aerolineas.com.ar",183],["5sim.net",183],["fold.dev",184],["mojposao.hr",185],["temu.com",[186,187]],["supreme.com",[188,189]],["g-star.com",190],["sawren.pl",191],["ultrahuman.com",192],["optionsgroup.com",193],["withpersona.com",[194,195]],["trigger.dev",196],["core.app",[197,199]],["zora.co",198],["kokku-online.de",200],["cuba-buddy.de",201],["datamask.app",202],["humandataincome.com",202],["crealitycloud.com",203],["triumphtechnicalinformation.com",204],["businessclass.com",205],["livsstil.se",206],["schneidewind-immobilien.de",207],["textshuttle.com",208],["simpleswap.io",209],["wales.nhs.attendanywhere.com",210],["anonpaste.pw",211],["sacal.it",211],["astondevs.ru",212],["gonxt.com",213],["geomiq.com",214],["bbc.com",215],["galaxy.com",216],["ticketmelon.com",217],["pechinchou.com.br",218],["thehub21.com",219],["archiup.com",220],["autoride.cz",[222,223,224]],["autoride.es",[222,223,224]],["autoride.io",[222,223,224]],["autoride.sk",[222,223,224]],["wunderground.com",225],["baselime.io",226],["eversports.de",[227,228]],["makerz.me",229],["reebok.eu",230],["alfa.com.ec",231],["rts.com.ec",231],["tropicalida.com.ec",231],["owgr.com",[232,233]],["beermerchants.com",234],["saamexe.com",[235,236]],["helium.com",235],["blommerscoffee.shipping-portal.com",235],["app.bionic-reading.com",237],["nloto.ru",238],["swisstours.com",239],["librinova.com",240],["format.bike",241],["khanacademy.org",242],["etelecinema.hu",243],["konicaminolta.com",244],["soquest.xyz",245],["region-bayreuth.de",246],["bahnland-bayern.de",247],["eezy.nrw",247],["nationalexpress.de",247],["sumupbookings.com",248],["chipcitycookies.com",248],["6amgroup.com",248],["go.bkk.hu",248],["worldlibertyfinancial.com",248],["happiful.com",248],["moondao.com",248],["bazaartracker.com",249],["subscribercounter.com",250],["app.klarna.com",[251,252,253]],["instantspoursoi.fr",254],["thealliance.ai",255],["librumreader.com",256],["visnos.com",257],["polypane.app",258],["changelly.com",259],["glose.com",260],["yellow.systems",261],["renebieder.com",262],["goodram.com",263],["starwalk.space",264],["vitotechnology.com",264],["codedead.com",265],["studiofabiobiesel.com",266],["fydeos.com",267],["fydeos.io",267],["jove.com",268],["argent.xyz",269],["pixeden.com",270],["akasha.org",271],["ashleyfurniture.com",272],["jibjab.com",274],["vietjetair.com",275],["kick.com",276],["cora-broodjes.nl",277],["jimdosite.com",277],["worstbassist.com",277],["evernote.com",[278,279,348]],["octopusenergy.co.jp",280],["findmcserver.com",281],["cityfalcon.ai",282],["digitalparking.city",283],["mediathekviewweb.de",284],["solana.com",285],["ef.co.id",286],["alohafromdeer.com",287],["fwd.com",[288,290]],["everywhere.game",289],["geotastic.net",291],["garageproject.co.nz",292],["tattoodo.com",[292,293]],["jmonline.com.br",294],["atlas.workland.com",294],["virginexperiencedays.co.uk",294],["emag.berliner-woche.de",[295,296,297]],["nordkurier.de",[295,296,297]],["everest-24.pl",[298,299]],["abastible.cl",299],["sneakerfreaker.com",300],["cryptofalka.hu",300],["walmart.ca",301],["byfood.com",302],["andsafe.de",303],["edostavka.by",304],["emall.by",304],["ishoppurium.com",305],["baseblocks.tenereteam.com",306],["onexstore.pl",[307,308,309]],["revanced.app",309],["evropochta.by",[310,311]],["inselberlin.de",312],["gronkh.tv",313],["adfilteringdevsummit.com",314],["dailyrevs.com",315],["dsworks.ru",315],["daraz.com",316],["learngerman.dw.com",317],["leeway.tech",318],["gostanford.com",319],["namensetiketten.de",320],["drafthound.com",[321,322]],["wokularach.pl",323],["bidup.amtrak.com",324],["eschuhe.de",325],["zeglins.com",326],["flyingpapers.com",327],["beta.character.ai",[328,329]],["bittimittari.fi",330],["aida64.co.uk",[331,332]],["aida64.com.ua",[331,332]],["aida64.de",[331,332]],["aida64.hu",[331,332]],["aida64.it",[331,332]],["aida64russia.com",[331,332]],["116.ru",333],["14.ru",333],["161.ru",333],["164.ru",333],["173.ru",333],["178.ru",333],["26.ru",333],["29.ru",333],["35.ru",333],["43.ru",333],["45.ru",333],["48.ru",333],["51.ru",333],["53.ru",333],["56.ru",333],["59.ru",333],["60.ru",333],["63.ru",333],["68.ru",333],["71.ru",333],["72.ru",333],["74.ru",333],["76.ru",333],["86.ru",333],["89.ru",333],["93.ru",333],["chita.ru",333],["e1.ru",333],["fontanka.ru",333],["ircity.ru",333],["izh1.ru",333],["mgorsk.ru",333],["msk1.ru",333],["ngs.ru",333],["ngs22.ru",333],["ngs24.ru",333],["ngs42.ru",333],["ngs55.ru",333],["ngs70.ru",333],["nn.ru",333],["sochi1.ru",333],["sterlitamak1.ru",333],["tolyatty.ru",333],["ufa1.ru",333],["v1.ru",333],["vladivostok1.ru",333],["voronezh1.ru",333],["ya62.ru",333],["116117.fi",334],["pjspub.com",335],["autodude.dk",336],["autodude.fi",336],["autodude.no",336],["autodude.se",336],["valostore.fi",336],["valostore.no",336],["valostore.se",336],["vivantis.*",337],["vivantis-shop.at",337],["krasa.cz",337],["auf1.tv",338],["wesendit.com",339],["hatch.co",340],["haberturk.com",341],["spaseekers.com",342],["incomeshares.com",343],["surnamedb.com",345],["pizzadelight-menu.co.uk",346],["ioplus.nl",347],["lahella.fi",349],["healf.com",350]]);
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
