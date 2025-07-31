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
const argsList = [["CookieConsent--hideCookieConsent","true"],["cookieConsent","granted"],["COOKIE_CONSENT","no"],["show_consent_modal","1"],["df-cookies-allowed","true"],["cookie_consent","no"],["cookies-pref","[]"],["store-cookie-consent","accepted"],["_ccpa_analytics","false"],["_ccpa_marketing","false"],["_ccpa_personal","false"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"],["cookie-banner-accepted","true"]];
const hostnamesMap = new Map([["teamtailor.com",0],["notthebee.com",1],["manuals.annafreud.org",2],["pancernik.eu",[3,4]],["gesundheitsmanufaktur.de",[4,84]],["open24.ee",4],["granola.ai",5],["polar.sh",5],["posthog.com",5],["hatchet.run",5],["sportbooking.info",6],["granado.com.br",7],["sunnyside.shop",[8,9,10]],["nhnieuws.nl",[11,13,14]],["omroepbrabant.nl",[11,13,14]],["cape.co",12],["asianet.co.id",15],["p2p.land",15],["netbank.avida.no",15],["bo3.gg",15],["gs1.se",[15,39]],["puregoldprotein.com",[15,103,104]],["spectrumtherapeutics.com",15],["thingtesting.com",15],["streamclipsgermany.de",15],["kundenportal.harzenergie.de",15],["giselles.ai",16],["i-fundusze.pl",17],["improvethenews.org",17],["plente.com",17],["movies4us.*",17],["popcornmovies.to",17],["arkanium.serveminecraft.net",18],["bananacraft.serveminecraft.net",18],["myoffers.smartbuy.hdfcbank.com",19],["grass.io",[20,21]],["lustery.com",22],["ecoints.com",23],["emergetools.com",24],["receptagemini.pl",25],["bw.vdk.de",[26,27,28]],["search.odin.io",29],["gdh.digital",30],["popmart.com",31],["rozklady.bielsko.pl",32],["typeform.com",33],["erlus.com",[34,35]],["bettrfinancing.com",36],["sf-express.com",37],["min.io",38],["lemwarm.com",40],["form.fillout.com",41],["keepersecurity.com",42],["esto.eu",43],["ctol.digital",43],["beterbed.nl",44],["crt.hr",45],["code.likeagirl.io",46],["engineering.mixpanel.com",46],["betterprogramming.pub",46],["medium.com",46],["500ish.com",46],["gitconnected.com",46],["bettermarketing.pub",46],["diylifetech.com",46],["thebolditalic.com",46],["writingcooperative.com",46],["fanfare.pub",46],["betterhumans.pub",46],["fvd.nl",47],["cpc2r.ch",48],["metamask.io",49],["chavesnamao.com.br",50],["anhanguera.com",51],["bhaskar.com",52],["novaventa.com",53],["privacy.com.br",54],["supabase.com",55],["app.getgrass.io",56],["sanluisgarbage.com",57],["wildberries.ru",58],["cryptorank.io",59],["springmerchant.com",60],["veed.io",61],["deribit.com",62],["dorkgpt.com",62],["kyutai.org",62],["varusteleka.com",62],["lazyrecords.app",62],["unmute.sh",62],["zoho.com",63],["femibion.rs",64],["nove.fr",64],["metro1.com.br",64],["villagrancanaria.com",65],["baic.cz",66],["bunq.com",67],["framer.com",67],["inceptionlabs.ai",67],["zave.it",67],["tower.dev",67],["fleksberegner.dk",68],["duty.travel.cl",69],["solscan.io",70],["connorduffy.abundancerei.com",71],["bc.gamem",72],["akkushop-turkiye.com.tr",73],["k33.com",[74,75]],["komdigi.go.id",76],["fijiairways.com",77],["planner.kaboodle.co.nz",78],["pedalcommander.*",79],["sekisuialveo.com",[80,81]],["rightsize.dk",82],["random-group.olafneumann.org",83],["espadrij.com",84],["hygiene-shop.eu",84],["technikmuseum.berlin",85],["cvut.cz",[86,87,88]],["r-ulybka.ru",89],["voltadol.at",90],["evium.de",91],["hiring.amazon.com",92],["comnet.com.tr",92],["gpuscout.nl",92],["remanga.org",92],["parrotsec.org",92],["estrelabet.bet.br",92],["shonenjumpplus.com",93],["engeldirekt.de",94],["haleon-gebro.at",[95,96]],["happyplates.com",[97,98]],["ickonic.com",99],["abs-cbn.com",100],["news.abs-cbn.com",100],["opmaatzagen.nl",101],["mundwerk-rottweil.de",101],["sqlook.com",102],["adef-emploi.fr",[105,106]],["lumieresdelaville.net",[105,106]],["ccaf.io",[107,108]],["dbschenkerarkas.com.tr",109],["dbschenker-seino.jp",109],["dbschenker.com",[109,206]],["scinapse.io",110],["shop.ba.com",[111,112]],["uc.pt",113],["bennettrogers.mysight.uk",114],["snipp.gg",114],["leafly.com",115],["geizhals.at",116],["geizhals.de",116],["geizhals.eu",116],["cenowarka.pl",116],["skinflint.co.uk",116],["webhallen.com",[117,118,119]],["olx.com.br",120],["unobike.com",121],["mod.io",122],["passport-photo.online",123],["mojmaxtv.hrvatskitelekom.hr",123],["rodrigue-app.ct.ws",123],["tme.eu",124],["mein-osttirol.rocks",125],["tennessine.co.uk",126],["ultraleds.co.uk",127],["greubelforsey.com",128],["lukify.app",129],["studiobookr.com",130],["getgrass.io",131],["artisan.co",132],["mobilefuse.com",133],["safe.global",[134,258]],["data.carbonmapper.org",135],["avica.link",136],["madeiramadeira.com.br",137],["sberdisk.ru",138],["column.com",139],["iqoption.com",140],["dopesnow.com",141],["montecwear.com",141],["romeo.com",142],["sonyliv.com",[143,144]],["cwallet.com",145],["oneskin.co",146],["telemetr.io",147],["near.org",148],["near.ai",148],["dev.near.org",149],["jito.network",150],["jito.wtf",150],["goodpods.com",151],["pngtree.com",[152,153]],["rhein-pfalz-kreis.de",[154,155,156,157,158]],["idar-oberstein.de",[154,155,156,157]],["vogelsbergkreis.de",[154,155,156,157]],["chamaeleon.de",[156,331]],["v2.xmeye.net",159],["venom.foundation",160],["canonvannederland.nl",161],["my-account.storage-mart.com",162],["web.bunq.com",163],["lifesum.com",164],["home.shortcutssoftware.com",165],["klimwinkel.nl",166],["markimicrowave.com",167],["aerolineas.com.ar",168],["5sim.net",168],["fold.dev",169],["mojposao.hr",170],["temu.com",[171,172]],["supreme.com",[173,174]],["g-star.com",175],["sawren.pl",176],["ultrahuman.com",177],["optionsgroup.com",178],["withpersona.com",[179,180]],["trigger.dev",181],["core.app",[182,184]],["zora.co",183],["kokku-online.de",185],["cuba-buddy.de",186],["datamask.app",187],["humandataincome.com",187],["crealitycloud.com",188],["triumphtechnicalinformation.com",189],["businessclass.com",190],["livsstil.se",191],["schneidewind-immobilien.de",192],["textshuttle.com",193],["simpleswap.io",194],["wales.nhs.attendanywhere.com",195],["sacal.it",196],["astondevs.ru",197],["gonxt.com",198],["geomiq.com",199],["bbc.com",200],["galaxy.com",201],["ticketmelon.com",202],["pechinchou.com.br",203],["thehub21.com",204],["archiup.com",205],["autoride.cz",[207,208,209]],["autoride.es",[207,208,209]],["autoride.io",[207,208,209]],["autoride.sk",[207,208,209]],["wunderground.com",210],["baselime.io",211],["eversports.de",[212,213]],["makerz.me",214],["reebok.eu",215],["alfa.com.ec",216],["rts.com.ec",216],["tropicalida.com.ec",216],["owgr.com",[217,218]],["beermerchants.com",219],["saamexe.com",[220,221]],["helium.com",220],["blommerscoffee.shipping-portal.com",220],["app.bionic-reading.com",222],["nloto.ru",223],["swisstours.com",224],["librinova.com",225],["format.bike",226],["khanacademy.org",227],["etelecinema.hu",228],["konicaminolta.com",229],["soquest.xyz",230],["region-bayreuth.de",231],["bahnland-bayern.de",232],["eezy.nrw",232],["nationalexpress.de",232],["sumupbookings.com",233],["chipcitycookies.com",233],["6amgroup.com",233],["go.bkk.hu",233],["worldlibertyfinancial.com",233],["happiful.com",233],["bazaartracker.com",234],["subscribercounter.com",235],["app.klarna.com",[236,237,238]],["instantspoursoi.fr",239],["thealliance.ai",240],["librumreader.com",241],["visnos.com",242],["polypane.app",243],["changelly.com",244],["glose.com",245],["yellow.systems",246],["renebieder.com",247],["goodram.com",248],["starwalk.space",249],["vitotechnology.com",249],["codedead.com",250],["studiofabiobiesel.com",251],["fydeos.com",252],["fydeos.io",252],["jove.com",253],["argent.xyz",254],["pixeden.com",255],["akasha.org",256],["ashleyfurniture.com",257],["jibjab.com",259],["filmzie.com",260],["vietjetair.com",261],["kick.com",262],["cora-broodjes.nl",263],["jimdosite.com",263],["worstbassist.com",263],["evernote.com",[264,265,335]],["octopusenergy.co.jp",266],["findmcserver.com",267],["schneideranwaelte.de",268],["traefik.io",268],["cityfalcon.ai",269],["digitalparking.city",270],["mediathekviewweb.de",271],["solana.com",272],["ef.co.id",273],["alohafromdeer.com",274],["fwd.com",[275,277]],["everywhere.game",276],["geotastic.net",278],["garageproject.co.nz",279],["tattoodo.com",[279,280]],["jmonline.com.br",281],["atlas.workland.com",281],["virginexperiencedays.co.uk",281],["emag.berliner-woche.de",[282,283,284]],["nordkurier.de",[282,283,284]],["everest-24.pl",[285,286]],["sneakerfreaker.com",287],["cryptofalka.hu",287],["walmart.ca",288],["byfood.com",289],["andsafe.de",290],["edostavka.by",291],["emall.by",291],["ishoppurium.com",292],["baseblocks.tenereteam.com",293],["onexstore.pl",[294,295,296]],["revanced.app",296],["evropochta.by",[297,298]],["inselberlin.de",299],["gronkh.tv",300],["adfilteringdevsummit.com",301],["dailyrevs.com",302],["dsworks.ru",302],["daraz.com",303],["learngerman.dw.com",304],["leeway.tech",305],["gostanford.com",306],["namensetiketten.de",307],["drafthound.com",[308,309]],["wokularach.pl",310],["bidup.amtrak.com",311],["eschuhe.de",312],["zeglins.com",313],["flyingpapers.com",314],["beta.character.ai",[315,316]],["bittimittari.fi",317],["aida64.co.uk",[318,319]],["aida64.com.ua",[318,319]],["aida64.de",[318,319]],["aida64.hu",[318,319]],["aida64.it",[318,319]],["aida64russia.com",[318,319]],["116.ru",320],["14.ru",320],["161.ru",320],["164.ru",320],["173.ru",320],["178.ru",320],["26.ru",320],["29.ru",320],["35.ru",320],["43.ru",320],["45.ru",320],["48.ru",320],["51.ru",320],["53.ru",320],["56.ru",320],["59.ru",320],["60.ru",320],["63.ru",320],["68.ru",320],["71.ru",320],["72.ru",320],["74.ru",320],["76.ru",320],["86.ru",320],["89.ru",320],["93.ru",320],["chita.ru",320],["e1.ru",320],["fontanka.ru",320],["ircity.ru",320],["izh1.ru",320],["mgorsk.ru",320],["msk1.ru",320],["ngs.ru",320],["ngs22.ru",320],["ngs24.ru",320],["ngs42.ru",320],["ngs55.ru",320],["ngs70.ru",320],["nn.ru",320],["sochi1.ru",320],["sterlitamak1.ru",320],["tolyatty.ru",320],["ufa1.ru",320],["v1.ru",320],["vladivostok1.ru",320],["voronezh1.ru",320],["ya62.ru",320],["116117.fi",321],["pjspub.com",322],["autodude.dk",323],["autodude.fi",323],["autodude.no",323],["autodude.se",323],["valostore.fi",323],["valostore.no",323],["valostore.se",323],["vivantis.*",324],["vivantis-shop.at",324],["krasa.cz",324],["auf1.tv",325],["wesendit.com",326],["hatch.co",327],["haberturk.com",328],["spaseekers.com",329],["incomeshares.com",330],["surnamedb.com",332],["pizzadelight-menu.co.uk",333],["ioplus.nl",334],["lahella.fi",336],["healf.com",337]]);
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
