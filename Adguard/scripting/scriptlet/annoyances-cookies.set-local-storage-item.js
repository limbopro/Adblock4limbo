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
const argsList = [["CookieConsent--hideCookieConsent","true"],["consent","false"],["cookieConsent","granted"],["COOKIE_CONSENT","no"],["show_consent_modal","1"],["df-cookies-allowed","true"],["cookie_consent","no"],["mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"],["isCookieAccepted","true"],["cookies-pref","[]"],["cookiesAccepted","false"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["teamtailor.com",0],["dewesoft.com",1],["notthebee.com",2],["manuals.annafreud.org",3],["pancernik.eu",[4,5]],["gesundheitsmanufaktur.de",[5,88]],["open24.ee",5],["granola.ai",6],["polar.sh",6],["posthog.com",6],["hatchet.run",6],["zeta-ai.io",7],["fiyat.mercedes-benz.com.tr",8],["sportbooking.info",9],["photo.codes",10],["filmzie.com",10],["granado.com.br",11],["sunnyside.shop",[12,13,14]],["nhnieuws.nl",[15,17,18]],["omroepbrabant.nl",[15,17,18]],["cape.co",16],["asianet.co.id",19],["p2p.land",19],["netbank.avida.no",19],["bo3.gg",19],["gs1.se",[19,43]],["puregoldprotein.com",[19,107,108]],["spectrumtherapeutics.com",19],["thingtesting.com",19],["streamclipsgermany.de",19],["kundenportal.harzenergie.de",19],["giselles.ai",20],["i-fundusze.pl",21],["improvethenews.org",21],["plente.com",21],["movies4us.*",21],["popcornmovies.to",21],["arkanium.serveminecraft.net",22],["bananacraft.serveminecraft.net",22],["myoffers.smartbuy.hdfcbank.com",23],["grass.io",[24,25]],["lustery.com",26],["ecoints.com",27],["emergetools.com",28],["receptagemini.pl",29],["bw.vdk.de",[30,31,32]],["search.odin.io",33],["gdh.digital",34],["popmart.com",35],["rozklady.bielsko.pl",36],["typeform.com",37],["erlus.com",[38,39]],["bettrfinancing.com",40],["sf-express.com",41],["min.io",42],["lemwarm.com",44],["form.fillout.com",45],["keepersecurity.com",46],["esto.eu",47],["ctol.digital",47],["beterbed.nl",48],["crt.hr",49],["code.likeagirl.io",50],["engineering.mixpanel.com",50],["betterprogramming.pub",50],["medium.com",50],["500ish.com",50],["gitconnected.com",50],["bettermarketing.pub",50],["diylifetech.com",50],["thebolditalic.com",50],["writingcooperative.com",50],["fanfare.pub",50],["betterhumans.pub",50],["fvd.nl",51],["cpc2r.ch",52],["metamask.io",53],["chavesnamao.com.br",54],["anhanguera.com",55],["bhaskar.com",56],["novaventa.com",57],["privacy.com.br",58],["supabase.com",59],["app.getgrass.io",60],["sanluisgarbage.com",61],["wildberries.ru",62],["cryptorank.io",63],["springmerchant.com",64],["veed.io",65],["deribit.com",66],["dorkgpt.com",66],["kyutai.org",66],["varusteleka.com",66],["lazyrecords.app",66],["unmute.sh",66],["zoho.com",67],["femibion.rs",68],["nove.fr",68],["metro1.com.br",68],["villagrancanaria.com",69],["baic.cz",70],["bunq.com",71],["framer.com",71],["inceptionlabs.ai",71],["zave.it",71],["tower.dev",71],["fleksberegner.dk",72],["duty.travel.cl",73],["solscan.io",74],["connorduffy.abundancerei.com",75],["bc.gamem",76],["akkushop-turkiye.com.tr",77],["k33.com",[78,79]],["komdigi.go.id",80],["fijiairways.com",81],["planner.kaboodle.co.nz",82],["pedalcommander.*",83],["sekisuialveo.com",[84,85]],["rightsize.dk",86],["random-group.olafneumann.org",87],["espadrij.com",88],["hygiene-shop.eu",88],["technikmuseum.berlin",89],["cvut.cz",[90,91,92]],["r-ulybka.ru",93],["voltadol.at",94],["evium.de",95],["hiring.amazon.com",96],["comnet.com.tr",96],["gpuscout.nl",96],["remanga.org",96],["parrotsec.org",96],["estrelabet.bet.br",96],["shonenjumpplus.com",97],["engeldirekt.de",98],["haleon-gebro.at",[99,100]],["happyplates.com",[101,102]],["ickonic.com",103],["abs-cbn.com",104],["news.abs-cbn.com",104],["opmaatzagen.nl",105],["mundwerk-rottweil.de",105],["sqlook.com",106],["adef-emploi.fr",[109,110]],["lumieresdelaville.net",[109,110]],["ccaf.io",[111,112]],["dbschenkerarkas.com.tr",113],["dbschenker-seino.jp",113],["dbschenker.com",[113,210]],["scinapse.io",114],["shop.ba.com",[115,116]],["uc.pt",117],["bennettrogers.mysight.uk",118],["snipp.gg",118],["leafly.com",119],["geizhals.at",120],["geizhals.de",120],["geizhals.eu",120],["cenowarka.pl",120],["skinflint.co.uk",120],["webhallen.com",[121,122,123]],["olx.com.br",124],["unobike.com",125],["mod.io",126],["passport-photo.online",127],["mojmaxtv.hrvatskitelekom.hr",127],["rodrigue-app.ct.ws",127],["tme.eu",128],["mein-osttirol.rocks",129],["tennessine.co.uk",130],["ultraleds.co.uk",131],["greubelforsey.com",132],["lukify.app",133],["studiobookr.com",134],["getgrass.io",135],["artisan.co",136],["mobilefuse.com",137],["safe.global",[138,262]],["data.carbonmapper.org",139],["avica.link",140],["madeiramadeira.com.br",141],["sberdisk.ru",142],["column.com",143],["iqoption.com",144],["dopesnow.com",145],["montecwear.com",145],["romeo.com",146],["sonyliv.com",[147,148]],["cwallet.com",149],["oneskin.co",150],["telemetr.io",151],["near.org",152],["near.ai",152],["dev.near.org",153],["jito.network",154],["jito.wtf",154],["goodpods.com",155],["pngtree.com",[156,157]],["rhein-pfalz-kreis.de",[158,159,160,161,162]],["idar-oberstein.de",[158,159,160,161]],["vogelsbergkreis.de",[158,159,160,161]],["chamaeleon.de",[160,334]],["v2.xmeye.net",163],["venom.foundation",164],["canonvannederland.nl",165],["my-account.storage-mart.com",166],["web.bunq.com",167],["lifesum.com",168],["home.shortcutssoftware.com",169],["klimwinkel.nl",170],["markimicrowave.com",171],["aerolineas.com.ar",172],["5sim.net",172],["fold.dev",173],["mojposao.hr",174],["temu.com",[175,176]],["supreme.com",[177,178]],["g-star.com",179],["sawren.pl",180],["ultrahuman.com",181],["optionsgroup.com",182],["withpersona.com",[183,184]],["trigger.dev",185],["core.app",[186,188]],["zora.co",187],["kokku-online.de",189],["cuba-buddy.de",190],["datamask.app",191],["humandataincome.com",191],["crealitycloud.com",192],["triumphtechnicalinformation.com",193],["businessclass.com",194],["livsstil.se",195],["schneidewind-immobilien.de",196],["textshuttle.com",197],["simpleswap.io",198],["wales.nhs.attendanywhere.com",199],["sacal.it",200],["astondevs.ru",201],["gonxt.com",202],["geomiq.com",203],["bbc.com",204],["galaxy.com",205],["ticketmelon.com",206],["pechinchou.com.br",207],["thehub21.com",208],["archiup.com",209],["autoride.cz",[211,212,213]],["autoride.es",[211,212,213]],["autoride.io",[211,212,213]],["autoride.sk",[211,212,213]],["wunderground.com",214],["baselime.io",215],["eversports.de",[216,217]],["makerz.me",218],["reebok.eu",219],["alfa.com.ec",220],["rts.com.ec",220],["tropicalida.com.ec",220],["owgr.com",[221,222]],["beermerchants.com",223],["saamexe.com",[224,225]],["helium.com",224],["blommerscoffee.shipping-portal.com",224],["app.bionic-reading.com",226],["nloto.ru",227],["swisstours.com",228],["librinova.com",229],["format.bike",230],["khanacademy.org",231],["etelecinema.hu",232],["konicaminolta.com",233],["soquest.xyz",234],["region-bayreuth.de",235],["bahnland-bayern.de",236],["eezy.nrw",236],["nationalexpress.de",236],["sumupbookings.com",237],["chipcitycookies.com",237],["6amgroup.com",237],["go.bkk.hu",237],["worldlibertyfinancial.com",237],["happiful.com",237],["bazaartracker.com",238],["subscribercounter.com",239],["app.klarna.com",[240,241,242]],["instantspoursoi.fr",243],["thealliance.ai",244],["librumreader.com",245],["visnos.com",246],["polypane.app",247],["changelly.com",248],["glose.com",249],["yellow.systems",250],["renebieder.com",251],["goodram.com",252],["starwalk.space",253],["vitotechnology.com",253],["codedead.com",254],["studiofabiobiesel.com",255],["fydeos.com",256],["fydeos.io",256],["jove.com",257],["argent.xyz",258],["pixeden.com",259],["akasha.org",260],["ashleyfurniture.com",261],["jibjab.com",263],["vietjetair.com",264],["kick.com",265],["cora-broodjes.nl",266],["jimdosite.com",266],["worstbassist.com",266],["evernote.com",[267,268,338]],["octopusenergy.co.jp",269],["findmcserver.com",270],["schneideranwaelte.de",271],["traefik.io",271],["cityfalcon.ai",272],["digitalparking.city",273],["mediathekviewweb.de",274],["solana.com",275],["ef.co.id",276],["alohafromdeer.com",277],["fwd.com",[278,280]],["everywhere.game",279],["geotastic.net",281],["garageproject.co.nz",282],["tattoodo.com",[282,283]],["jmonline.com.br",284],["atlas.workland.com",284],["virginexperiencedays.co.uk",284],["emag.berliner-woche.de",[285,286,287]],["nordkurier.de",[285,286,287]],["everest-24.pl",[288,289]],["sneakerfreaker.com",290],["cryptofalka.hu",290],["walmart.ca",291],["byfood.com",292],["andsafe.de",293],["edostavka.by",294],["emall.by",294],["ishoppurium.com",295],["baseblocks.tenereteam.com",296],["onexstore.pl",[297,298,299]],["revanced.app",299],["evropochta.by",[300,301]],["inselberlin.de",302],["gronkh.tv",303],["adfilteringdevsummit.com",304],["dailyrevs.com",305],["dsworks.ru",305],["daraz.com",306],["learngerman.dw.com",307],["leeway.tech",308],["gostanford.com",309],["namensetiketten.de",310],["drafthound.com",[311,312]],["wokularach.pl",313],["bidup.amtrak.com",314],["eschuhe.de",315],["zeglins.com",316],["flyingpapers.com",317],["beta.character.ai",[318,319]],["bittimittari.fi",320],["aida64.co.uk",[321,322]],["aida64.com.ua",[321,322]],["aida64.de",[321,322]],["aida64.hu",[321,322]],["aida64.it",[321,322]],["aida64russia.com",[321,322]],["116.ru",323],["14.ru",323],["161.ru",323],["164.ru",323],["173.ru",323],["178.ru",323],["26.ru",323],["29.ru",323],["35.ru",323],["43.ru",323],["45.ru",323],["48.ru",323],["51.ru",323],["53.ru",323],["56.ru",323],["59.ru",323],["60.ru",323],["63.ru",323],["68.ru",323],["71.ru",323],["72.ru",323],["74.ru",323],["76.ru",323],["86.ru",323],["89.ru",323],["93.ru",323],["chita.ru",323],["e1.ru",323],["fontanka.ru",323],["ircity.ru",323],["izh1.ru",323],["mgorsk.ru",323],["msk1.ru",323],["ngs.ru",323],["ngs22.ru",323],["ngs24.ru",323],["ngs42.ru",323],["ngs55.ru",323],["ngs70.ru",323],["nn.ru",323],["sochi1.ru",323],["sterlitamak1.ru",323],["tolyatty.ru",323],["ufa1.ru",323],["v1.ru",323],["vladivostok1.ru",323],["voronezh1.ru",323],["ya62.ru",323],["116117.fi",324],["pjspub.com",325],["autodude.dk",326],["autodude.fi",326],["autodude.no",326],["autodude.se",326],["valostore.fi",326],["valostore.no",326],["valostore.se",326],["vivantis.*",327],["vivantis-shop.at",327],["krasa.cz",327],["auf1.tv",328],["wesendit.com",329],["hatch.co",330],["haberturk.com",331],["spaseekers.com",332],["incomeshares.com",333],["surnamedb.com",335],["pizzadelight-menu.co.uk",336],["ioplus.nl",337],["lahella.fi",339],["healf.com",340]]);
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
